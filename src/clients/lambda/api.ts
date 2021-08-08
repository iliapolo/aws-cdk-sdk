import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class LambdaClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public addLayerVersionPermission(input: shapes.LambdaAddLayerVersionPermissionRequest): LambdaResponsesAddLayerVersionPermission {
    return new LambdaResponsesAddLayerVersionPermission(this, this.__resources, input);
  }

  public addPermission(input: shapes.LambdaAddPermissionRequest): LambdaResponsesAddPermission {
    return new LambdaResponsesAddPermission(this, this.__resources, input);
  }

  public createAlias(input: shapes.LambdaCreateAliasRequest): LambdaResponsesCreateAlias {
    return new LambdaResponsesCreateAlias(this, this.__resources, input);
  }

  public createCodeSigningConfig(input: shapes.LambdaCreateCodeSigningConfigRequest): LambdaResponsesCreateCodeSigningConfig {
    return new LambdaResponsesCreateCodeSigningConfig(this, this.__resources, input);
  }

  public createEventSourceMapping(input: shapes.LambdaCreateEventSourceMappingRequest): LambdaResponsesCreateEventSourceMapping {
    return new LambdaResponsesCreateEventSourceMapping(this, this.__resources, input);
  }

  public createFunction(input: shapes.LambdaCreateFunctionRequest): LambdaResponsesCreateFunction {
    return new LambdaResponsesCreateFunction(this, this.__resources, input);
  }

  public deleteAlias(input: shapes.LambdaDeleteAliasRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAlias',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.DeleteAlias'),
        parameters: {
          FunctionName: input.functionName,
          Name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteAlias', props);
  }

  public deleteCodeSigningConfig(input: shapes.LambdaDeleteCodeSigningConfigRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCodeSigningConfig',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.DeleteCodeSigningConfig'),
        parameters: {
          CodeSigningConfigArn: input.codeSigningConfigArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteCodeSigningConfig', props);
  }

  public deleteEventSourceMapping(input: shapes.LambdaDeleteEventSourceMappingRequest): LambdaResponsesDeleteEventSourceMapping {
    return new LambdaResponsesDeleteEventSourceMapping(this, this.__resources, input);
  }

  public deleteFunction(input: shapes.LambdaDeleteFunctionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFunction',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.DeleteFunction'),
        parameters: {
          FunctionName: input.functionName,
          Qualifier: input.qualifier,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteFunction', props);
  }

  public deleteFunctionCodeSigningConfig(input: shapes.LambdaDeleteFunctionCodeSigningConfigRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFunctionCodeSigningConfig',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.DeleteFunctionCodeSigningConfig'),
        parameters: {
          FunctionName: input.functionName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteFunctionCodeSigningConfig', props);
  }

  public deleteFunctionConcurrency(input: shapes.LambdaDeleteFunctionConcurrencyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFunctionConcurrency',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.DeleteFunctionConcurrency'),
        parameters: {
          FunctionName: input.functionName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteFunctionConcurrency', props);
  }

  public deleteFunctionEventInvokeConfig(input: shapes.LambdaDeleteFunctionEventInvokeConfigRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFunctionEventInvokeConfig',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.DeleteFunctionEventInvokeConfig'),
        parameters: {
          FunctionName: input.functionName,
          Qualifier: input.qualifier,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteFunctionEventInvokeConfig', props);
  }

  public deleteLayerVersion(input: shapes.LambdaDeleteLayerVersionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLayerVersion',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.DeleteLayerVersion'),
        parameters: {
          LayerName: input.layerName,
          VersionNumber: input.versionNumber,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteLayerVersion', props);
  }

  public deleteProvisionedConcurrencyConfig(input: shapes.LambdaDeleteProvisionedConcurrencyConfigRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteProvisionedConcurrencyConfig',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.DeleteProvisionedConcurrencyConfig'),
        parameters: {
          FunctionName: input.functionName,
          Qualifier: input.qualifier,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteProvisionedConcurrencyConfig', props);
  }

  public fetchAccountSettings(): LambdaResponsesFetchAccountSettings {
    return new LambdaResponsesFetchAccountSettings(this, this.__resources);
  }

  public fetchAlias(input: shapes.LambdaGetAliasRequest): LambdaResponsesFetchAlias {
    return new LambdaResponsesFetchAlias(this, this.__resources, input);
  }

  public fetchCodeSigningConfig(input: shapes.LambdaGetCodeSigningConfigRequest): LambdaResponsesFetchCodeSigningConfig {
    return new LambdaResponsesFetchCodeSigningConfig(this, this.__resources, input);
  }

  public fetchEventSourceMapping(input: shapes.LambdaGetEventSourceMappingRequest): LambdaResponsesFetchEventSourceMapping {
    return new LambdaResponsesFetchEventSourceMapping(this, this.__resources, input);
  }

  public fetchFunction(input: shapes.LambdaGetFunctionRequest): LambdaResponsesFetchFunction {
    return new LambdaResponsesFetchFunction(this, this.__resources, input);
  }

  public fetchFunctionCodeSigningConfig(input: shapes.LambdaGetFunctionCodeSigningConfigRequest): LambdaResponsesFetchFunctionCodeSigningConfig {
    return new LambdaResponsesFetchFunctionCodeSigningConfig(this, this.__resources, input);
  }

  public fetchFunctionConcurrency(input: shapes.LambdaGetFunctionConcurrencyRequest): LambdaResponsesFetchFunctionConcurrency {
    return new LambdaResponsesFetchFunctionConcurrency(this, this.__resources, input);
  }

  public fetchFunctionConfiguration(input: shapes.LambdaGetFunctionConfigurationRequest): LambdaResponsesFetchFunctionConfiguration {
    return new LambdaResponsesFetchFunctionConfiguration(this, this.__resources, input);
  }

  public fetchFunctionEventInvokeConfig(input: shapes.LambdaGetFunctionEventInvokeConfigRequest): LambdaResponsesFetchFunctionEventInvokeConfig {
    return new LambdaResponsesFetchFunctionEventInvokeConfig(this, this.__resources, input);
  }

  public fetchLayerVersion(input: shapes.LambdaGetLayerVersionRequest): LambdaResponsesFetchLayerVersion {
    return new LambdaResponsesFetchLayerVersion(this, this.__resources, input);
  }

  public fetchLayerVersionByArn(input: shapes.LambdaGetLayerVersionByArnRequest): LambdaResponsesFetchLayerVersionByArn {
    return new LambdaResponsesFetchLayerVersionByArn(this, this.__resources, input);
  }

  public fetchLayerVersionPolicy(input: shapes.LambdaGetLayerVersionPolicyRequest): LambdaResponsesFetchLayerVersionPolicy {
    return new LambdaResponsesFetchLayerVersionPolicy(this, this.__resources, input);
  }

  public fetchPolicy(input: shapes.LambdaGetPolicyRequest): LambdaResponsesFetchPolicy {
    return new LambdaResponsesFetchPolicy(this, this.__resources, input);
  }

  public fetchProvisionedConcurrencyConfig(input: shapes.LambdaGetProvisionedConcurrencyConfigRequest): LambdaResponsesFetchProvisionedConcurrencyConfig {
    return new LambdaResponsesFetchProvisionedConcurrencyConfig(this, this.__resources, input);
  }

  public invoke(input: shapes.LambdaInvocationRequest): LambdaResponsesInvoke {
    return new LambdaResponsesInvoke(this, this.__resources, input);
  }

  public invokeAsync(input: shapes.LambdaInvokeAsyncRequest): LambdaResponsesInvokeAsync {
    return new LambdaResponsesInvokeAsync(this, this.__resources, input);
  }

  public listAliases(input: shapes.LambdaListAliasesRequest): LambdaResponsesListAliases {
    return new LambdaResponsesListAliases(this, this.__resources, input);
  }

  public listCodeSigningConfigs(input: shapes.LambdaListCodeSigningConfigsRequest): LambdaResponsesListCodeSigningConfigs {
    return new LambdaResponsesListCodeSigningConfigs(this, this.__resources, input);
  }

  public listEventSourceMappings(input: shapes.LambdaListEventSourceMappingsRequest): LambdaResponsesListEventSourceMappings {
    return new LambdaResponsesListEventSourceMappings(this, this.__resources, input);
  }

  public listFunctionEventInvokeConfigs(input: shapes.LambdaListFunctionEventInvokeConfigsRequest): LambdaResponsesListFunctionEventInvokeConfigs {
    return new LambdaResponsesListFunctionEventInvokeConfigs(this, this.__resources, input);
  }

  public listFunctions(input: shapes.LambdaListFunctionsRequest): LambdaResponsesListFunctions {
    return new LambdaResponsesListFunctions(this, this.__resources, input);
  }

  public listFunctionsByCodeSigningConfig(input: shapes.LambdaListFunctionsByCodeSigningConfigRequest): LambdaResponsesListFunctionsByCodeSigningConfig {
    return new LambdaResponsesListFunctionsByCodeSigningConfig(this, this.__resources, input);
  }

  public listLayerVersions(input: shapes.LambdaListLayerVersionsRequest): LambdaResponsesListLayerVersions {
    return new LambdaResponsesListLayerVersions(this, this.__resources, input);
  }

  public listLayers(input: shapes.LambdaListLayersRequest): LambdaResponsesListLayers {
    return new LambdaResponsesListLayers(this, this.__resources, input);
  }

  public listProvisionedConcurrencyConfigs(input: shapes.LambdaListProvisionedConcurrencyConfigsRequest): LambdaResponsesListProvisionedConcurrencyConfigs {
    return new LambdaResponsesListProvisionedConcurrencyConfigs(this, this.__resources, input);
  }

  public listTags(input: shapes.LambdaListTagsRequest): LambdaResponsesListTags {
    return new LambdaResponsesListTags(this, this.__resources, input);
  }

  public listVersionsByFunction(input: shapes.LambdaListVersionsByFunctionRequest): LambdaResponsesListVersionsByFunction {
    return new LambdaResponsesListVersionsByFunction(this, this.__resources, input);
  }

  public publishLayerVersion(input: shapes.LambdaPublishLayerVersionRequest): LambdaResponsesPublishLayerVersion {
    return new LambdaResponsesPublishLayerVersion(this, this.__resources, input);
  }

  public publishVersion(input: shapes.LambdaPublishVersionRequest): LambdaResponsesPublishVersion {
    return new LambdaResponsesPublishVersion(this, this.__resources, input);
  }

  public putFunctionCodeSigningConfig(input: shapes.LambdaPutFunctionCodeSigningConfigRequest): LambdaResponsesPutFunctionCodeSigningConfig {
    return new LambdaResponsesPutFunctionCodeSigningConfig(this, this.__resources, input);
  }

  public putFunctionConcurrency(input: shapes.LambdaPutFunctionConcurrencyRequest): LambdaResponsesPutFunctionConcurrency {
    return new LambdaResponsesPutFunctionConcurrency(this, this.__resources, input);
  }

  public putFunctionEventInvokeConfig(input: shapes.LambdaPutFunctionEventInvokeConfigRequest): LambdaResponsesPutFunctionEventInvokeConfig {
    return new LambdaResponsesPutFunctionEventInvokeConfig(this, this.__resources, input);
  }

  public putProvisionedConcurrencyConfig(input: shapes.LambdaPutProvisionedConcurrencyConfigRequest): LambdaResponsesPutProvisionedConcurrencyConfig {
    return new LambdaResponsesPutProvisionedConcurrencyConfig(this, this.__resources, input);
  }

  public removeLayerVersionPermission(input: shapes.LambdaRemoveLayerVersionPermissionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'removeLayerVersionPermission',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.RemoveLayerVersionPermission'),
        parameters: {
          LayerName: input.layerName,
          VersionNumber: input.versionNumber,
          StatementId: input.statementId,
          RevisionId: input.revisionId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RemoveLayerVersionPermission', props);
  }

  public removePermission(input: shapes.LambdaRemovePermissionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'removePermission',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.RemovePermission'),
        parameters: {
          FunctionName: input.functionName,
          StatementId: input.statementId,
          Qualifier: input.qualifier,
          RevisionId: input.revisionId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RemovePermission', props);
  }

  public tagResource(input: shapes.LambdaTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.TagResource'),
        parameters: {
          Resource: input.resource,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.LambdaUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UntagResource'),
        parameters: {
          Resource: input.resource,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateAlias(input: shapes.LambdaUpdateAliasRequest): LambdaResponsesUpdateAlias {
    return new LambdaResponsesUpdateAlias(this, this.__resources, input);
  }

  public updateCodeSigningConfig(input: shapes.LambdaUpdateCodeSigningConfigRequest): LambdaResponsesUpdateCodeSigningConfig {
    return new LambdaResponsesUpdateCodeSigningConfig(this, this.__resources, input);
  }

  public updateEventSourceMapping(input: shapes.LambdaUpdateEventSourceMappingRequest): LambdaResponsesUpdateEventSourceMapping {
    return new LambdaResponsesUpdateEventSourceMapping(this, this.__resources, input);
  }

  public updateFunctionCode(input: shapes.LambdaUpdateFunctionCodeRequest): LambdaResponsesUpdateFunctionCode {
    return new LambdaResponsesUpdateFunctionCode(this, this.__resources, input);
  }

  public updateFunctionConfiguration(input: shapes.LambdaUpdateFunctionConfigurationRequest): LambdaResponsesUpdateFunctionConfiguration {
    return new LambdaResponsesUpdateFunctionConfiguration(this, this.__resources, input);
  }

  public updateFunctionEventInvokeConfig(input: shapes.LambdaUpdateFunctionEventInvokeConfigRequest): LambdaResponsesUpdateFunctionEventInvokeConfig {
    return new LambdaResponsesUpdateFunctionEventInvokeConfig(this, this.__resources, input);
  }

}

export class LambdaResponsesAddLayerVersionPermission {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaAddLayerVersionPermissionRequest) {
  }

  public get statement(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addLayerVersionPermission',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.AddLayerVersionPermission.Statement'),
        outputPath: 'Statement',
        parameters: {
          LayerName: this.__input.layerName,
          VersionNumber: this.__input.versionNumber,
          StatementId: this.__input.statementId,
          Action: this.__input.action,
          Principal: this.__input.principal,
          OrganizationId: this.__input.organizationId,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AddLayerVersionPermission.Statement', props);
    return resource.getResponseField('Statement') as unknown as string;
  }

  public get revisionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addLayerVersionPermission',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.AddLayerVersionPermission.RevisionId'),
        outputPath: 'RevisionId',
        parameters: {
          LayerName: this.__input.layerName,
          VersionNumber: this.__input.versionNumber,
          StatementId: this.__input.statementId,
          Action: this.__input.action,
          Principal: this.__input.principal,
          OrganizationId: this.__input.organizationId,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AddLayerVersionPermission.RevisionId', props);
    return resource.getResponseField('RevisionId') as unknown as string;
  }

}

export class LambdaResponsesAddPermission {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaAddPermissionRequest) {
  }

  public get statement(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addPermission',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.AddPermission.Statement'),
        outputPath: 'Statement',
        parameters: {
          FunctionName: this.__input.functionName,
          StatementId: this.__input.statementId,
          Action: this.__input.action,
          Principal: this.__input.principal,
          SourceArn: this.__input.sourceArn,
          SourceAccount: this.__input.sourceAccount,
          EventSourceToken: this.__input.eventSourceToken,
          Qualifier: this.__input.qualifier,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AddPermission.Statement', props);
    return resource.getResponseField('Statement') as unknown as string;
  }

}

export class LambdaResponsesCreateAlias {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaCreateAliasRequest) {
  }

  public get aliasArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAlias',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateAlias.AliasArn'),
        outputPath: 'AliasArn',
        parameters: {
          FunctionName: this.__input.functionName,
          Name: this.__input.name,
          FunctionVersion: this.__input.functionVersion,
          Description: this.__input.description,
          RoutingConfig: {
            AdditionalVersionWeights: this.__input.routingConfig?.additionalVersionWeights,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAlias.AliasArn', props);
    return resource.getResponseField('AliasArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAlias',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateAlias.Name'),
        outputPath: 'Name',
        parameters: {
          FunctionName: this.__input.functionName,
          Name: this.__input.name,
          FunctionVersion: this.__input.functionVersion,
          Description: this.__input.description,
          RoutingConfig: {
            AdditionalVersionWeights: this.__input.routingConfig?.additionalVersionWeights,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAlias.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get functionVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAlias',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateAlias.FunctionVersion'),
        outputPath: 'FunctionVersion',
        parameters: {
          FunctionName: this.__input.functionName,
          Name: this.__input.name,
          FunctionVersion: this.__input.functionVersion,
          Description: this.__input.description,
          RoutingConfig: {
            AdditionalVersionWeights: this.__input.routingConfig?.additionalVersionWeights,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAlias.FunctionVersion', props);
    return resource.getResponseField('FunctionVersion') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAlias',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateAlias.Description'),
        outputPath: 'Description',
        parameters: {
          FunctionName: this.__input.functionName,
          Name: this.__input.name,
          FunctionVersion: this.__input.functionVersion,
          Description: this.__input.description,
          RoutingConfig: {
            AdditionalVersionWeights: this.__input.routingConfig?.additionalVersionWeights,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAlias.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get routingConfig(): LambdaResponsesCreateAliasRoutingConfig {
    return new LambdaResponsesCreateAliasRoutingConfig(this.__scope, this.__resources, this.__input);
  }

  public get revisionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAlias',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateAlias.RevisionId'),
        outputPath: 'RevisionId',
        parameters: {
          FunctionName: this.__input.functionName,
          Name: this.__input.name,
          FunctionVersion: this.__input.functionVersion,
          Description: this.__input.description,
          RoutingConfig: {
            AdditionalVersionWeights: this.__input.routingConfig?.additionalVersionWeights,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAlias.RevisionId', props);
    return resource.getResponseField('RevisionId') as unknown as string;
  }

}

export class LambdaResponsesCreateAliasRoutingConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaCreateAliasRequest) {
  }

  public get additionalVersionWeights(): Record<string, number> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAlias',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateAlias.RoutingConfig.AdditionalVersionWeights'),
        outputPath: 'RoutingConfig.AdditionalVersionWeights',
        parameters: {
          FunctionName: this.__input.functionName,
          Name: this.__input.name,
          FunctionVersion: this.__input.functionVersion,
          Description: this.__input.description,
          RoutingConfig: {
            AdditionalVersionWeights: this.__input.routingConfig?.additionalVersionWeights,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAlias.RoutingConfig.AdditionalVersionWeights', props);
    return resource.getResponseField('RoutingConfig.AdditionalVersionWeights') as unknown as Record<string, number>;
  }

}

export class LambdaResponsesCreateCodeSigningConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaCreateCodeSigningConfigRequest) {
  }

  public get codeSigningConfig(): LambdaResponsesCreateCodeSigningConfigCodeSigningConfig {
    return new LambdaResponsesCreateCodeSigningConfigCodeSigningConfig(this.__scope, this.__resources, this.__input);
  }

}

export class LambdaResponsesCreateCodeSigningConfigCodeSigningConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaCreateCodeSigningConfigRequest) {
  }

  public get codeSigningConfigId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCodeSigningConfig',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateCodeSigningConfig.CodeSigningConfig.CodeSigningConfigId'),
        outputPath: 'CodeSigningConfig.CodeSigningConfigId',
        parameters: {
          Description: this.__input.description,
          AllowedPublishers: {
            SigningProfileVersionArns: this.__input.allowedPublishers.signingProfileVersionArns,
          },
          CodeSigningPolicies: {
            UntrustedArtifactOnDeployment: this.__input.codeSigningPolicies?.untrustedArtifactOnDeployment,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCodeSigningConfig.CodeSigningConfig.CodeSigningConfigId', props);
    return resource.getResponseField('CodeSigningConfig.CodeSigningConfigId') as unknown as string;
  }

  public get codeSigningConfigArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCodeSigningConfig',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateCodeSigningConfig.CodeSigningConfig.CodeSigningConfigArn'),
        outputPath: 'CodeSigningConfig.CodeSigningConfigArn',
        parameters: {
          Description: this.__input.description,
          AllowedPublishers: {
            SigningProfileVersionArns: this.__input.allowedPublishers.signingProfileVersionArns,
          },
          CodeSigningPolicies: {
            UntrustedArtifactOnDeployment: this.__input.codeSigningPolicies?.untrustedArtifactOnDeployment,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCodeSigningConfig.CodeSigningConfig.CodeSigningConfigArn', props);
    return resource.getResponseField('CodeSigningConfig.CodeSigningConfigArn') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCodeSigningConfig',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateCodeSigningConfig.CodeSigningConfig.Description'),
        outputPath: 'CodeSigningConfig.Description',
        parameters: {
          Description: this.__input.description,
          AllowedPublishers: {
            SigningProfileVersionArns: this.__input.allowedPublishers.signingProfileVersionArns,
          },
          CodeSigningPolicies: {
            UntrustedArtifactOnDeployment: this.__input.codeSigningPolicies?.untrustedArtifactOnDeployment,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCodeSigningConfig.CodeSigningConfig.Description', props);
    return resource.getResponseField('CodeSigningConfig.Description') as unknown as string;
  }

  public get allowedPublishers(): LambdaResponsesCreateCodeSigningConfigCodeSigningConfigAllowedPublishers {
    return new LambdaResponsesCreateCodeSigningConfigCodeSigningConfigAllowedPublishers(this.__scope, this.__resources, this.__input);
  }

  public get codeSigningPolicies(): LambdaResponsesCreateCodeSigningConfigCodeSigningConfigCodeSigningPolicies {
    return new LambdaResponsesCreateCodeSigningConfigCodeSigningConfigCodeSigningPolicies(this.__scope, this.__resources, this.__input);
  }

  public get lastModified(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCodeSigningConfig',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateCodeSigningConfig.CodeSigningConfig.LastModified'),
        outputPath: 'CodeSigningConfig.LastModified',
        parameters: {
          Description: this.__input.description,
          AllowedPublishers: {
            SigningProfileVersionArns: this.__input.allowedPublishers.signingProfileVersionArns,
          },
          CodeSigningPolicies: {
            UntrustedArtifactOnDeployment: this.__input.codeSigningPolicies?.untrustedArtifactOnDeployment,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCodeSigningConfig.CodeSigningConfig.LastModified', props);
    return resource.getResponseField('CodeSigningConfig.LastModified') as unknown as string;
  }

}

export class LambdaResponsesCreateCodeSigningConfigCodeSigningConfigAllowedPublishers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaCreateCodeSigningConfigRequest) {
  }

  public get signingProfileVersionArns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCodeSigningConfig',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateCodeSigningConfig.CodeSigningConfig.AllowedPublishers.SigningProfileVersionArns'),
        outputPath: 'CodeSigningConfig.AllowedPublishers.SigningProfileVersionArns',
        parameters: {
          Description: this.__input.description,
          AllowedPublishers: {
            SigningProfileVersionArns: this.__input.allowedPublishers.signingProfileVersionArns,
          },
          CodeSigningPolicies: {
            UntrustedArtifactOnDeployment: this.__input.codeSigningPolicies?.untrustedArtifactOnDeployment,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCodeSigningConfig.CodeSigningConfig.AllowedPublishers.SigningProfileVersionArns', props);
    return resource.getResponseField('CodeSigningConfig.AllowedPublishers.SigningProfileVersionArns') as unknown as string[];
  }

}

export class LambdaResponsesCreateCodeSigningConfigCodeSigningConfigCodeSigningPolicies {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaCreateCodeSigningConfigRequest) {
  }

  public get untrustedArtifactOnDeployment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCodeSigningConfig',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateCodeSigningConfig.CodeSigningConfig.CodeSigningPolicies.UntrustedArtifactOnDeployment'),
        outputPath: 'CodeSigningConfig.CodeSigningPolicies.UntrustedArtifactOnDeployment',
        parameters: {
          Description: this.__input.description,
          AllowedPublishers: {
            SigningProfileVersionArns: this.__input.allowedPublishers.signingProfileVersionArns,
          },
          CodeSigningPolicies: {
            UntrustedArtifactOnDeployment: this.__input.codeSigningPolicies?.untrustedArtifactOnDeployment,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCodeSigningConfig.CodeSigningConfig.CodeSigningPolicies.UntrustedArtifactOnDeployment', props);
    return resource.getResponseField('CodeSigningConfig.CodeSigningPolicies.UntrustedArtifactOnDeployment') as unknown as string;
  }

}

export class LambdaResponsesCreateEventSourceMapping {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaCreateEventSourceMappingRequest) {
  }

  public get uuid(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateEventSourceMapping.UUID'),
        outputPath: 'UUID',
        parameters: {
          EventSourceArn: this.__input.eventSourceArn,
          FunctionName: this.__input.functionName,
          Enabled: this.__input.enabled,
          BatchSize: this.__input.batchSize,
          MaximumBatchingWindowInSeconds: this.__input.maximumBatchingWindowInSeconds,
          ParallelizationFactor: this.__input.parallelizationFactor,
          StartingPosition: this.__input.startingPosition,
          StartingPositionTimestamp: this.__input.startingPositionTimestamp,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.__input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.__input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.__input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.__input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.__input.maximumRetryAttempts,
          TumblingWindowInSeconds: this.__input.tumblingWindowInSeconds,
          Topics: this.__input.topics,
          Queues: this.__input.queues,
          SourceAccessConfigurations: this.__input.sourceAccessConfigurations,
          SelfManagedEventSource: {
            Endpoints: this.__input.selfManagedEventSource?.endpoints,
          },
          FunctionResponseTypes: this.__input.functionResponseTypes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEventSourceMapping.UUID', props);
    return resource.getResponseField('UUID') as unknown as string;
  }

  public get startingPosition(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateEventSourceMapping.StartingPosition'),
        outputPath: 'StartingPosition',
        parameters: {
          EventSourceArn: this.__input.eventSourceArn,
          FunctionName: this.__input.functionName,
          Enabled: this.__input.enabled,
          BatchSize: this.__input.batchSize,
          MaximumBatchingWindowInSeconds: this.__input.maximumBatchingWindowInSeconds,
          ParallelizationFactor: this.__input.parallelizationFactor,
          StartingPosition: this.__input.startingPosition,
          StartingPositionTimestamp: this.__input.startingPositionTimestamp,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.__input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.__input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.__input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.__input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.__input.maximumRetryAttempts,
          TumblingWindowInSeconds: this.__input.tumblingWindowInSeconds,
          Topics: this.__input.topics,
          Queues: this.__input.queues,
          SourceAccessConfigurations: this.__input.sourceAccessConfigurations,
          SelfManagedEventSource: {
            Endpoints: this.__input.selfManagedEventSource?.endpoints,
          },
          FunctionResponseTypes: this.__input.functionResponseTypes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEventSourceMapping.StartingPosition', props);
    return resource.getResponseField('StartingPosition') as unknown as string;
  }

  public get startingPositionTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateEventSourceMapping.StartingPositionTimestamp'),
        outputPath: 'StartingPositionTimestamp',
        parameters: {
          EventSourceArn: this.__input.eventSourceArn,
          FunctionName: this.__input.functionName,
          Enabled: this.__input.enabled,
          BatchSize: this.__input.batchSize,
          MaximumBatchingWindowInSeconds: this.__input.maximumBatchingWindowInSeconds,
          ParallelizationFactor: this.__input.parallelizationFactor,
          StartingPosition: this.__input.startingPosition,
          StartingPositionTimestamp: this.__input.startingPositionTimestamp,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.__input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.__input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.__input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.__input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.__input.maximumRetryAttempts,
          TumblingWindowInSeconds: this.__input.tumblingWindowInSeconds,
          Topics: this.__input.topics,
          Queues: this.__input.queues,
          SourceAccessConfigurations: this.__input.sourceAccessConfigurations,
          SelfManagedEventSource: {
            Endpoints: this.__input.selfManagedEventSource?.endpoints,
          },
          FunctionResponseTypes: this.__input.functionResponseTypes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEventSourceMapping.StartingPositionTimestamp', props);
    return resource.getResponseField('StartingPositionTimestamp') as unknown as string;
  }

  public get batchSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateEventSourceMapping.BatchSize'),
        outputPath: 'BatchSize',
        parameters: {
          EventSourceArn: this.__input.eventSourceArn,
          FunctionName: this.__input.functionName,
          Enabled: this.__input.enabled,
          BatchSize: this.__input.batchSize,
          MaximumBatchingWindowInSeconds: this.__input.maximumBatchingWindowInSeconds,
          ParallelizationFactor: this.__input.parallelizationFactor,
          StartingPosition: this.__input.startingPosition,
          StartingPositionTimestamp: this.__input.startingPositionTimestamp,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.__input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.__input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.__input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.__input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.__input.maximumRetryAttempts,
          TumblingWindowInSeconds: this.__input.tumblingWindowInSeconds,
          Topics: this.__input.topics,
          Queues: this.__input.queues,
          SourceAccessConfigurations: this.__input.sourceAccessConfigurations,
          SelfManagedEventSource: {
            Endpoints: this.__input.selfManagedEventSource?.endpoints,
          },
          FunctionResponseTypes: this.__input.functionResponseTypes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEventSourceMapping.BatchSize', props);
    return resource.getResponseField('BatchSize') as unknown as number;
  }

  public get maximumBatchingWindowInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateEventSourceMapping.MaximumBatchingWindowInSeconds'),
        outputPath: 'MaximumBatchingWindowInSeconds',
        parameters: {
          EventSourceArn: this.__input.eventSourceArn,
          FunctionName: this.__input.functionName,
          Enabled: this.__input.enabled,
          BatchSize: this.__input.batchSize,
          MaximumBatchingWindowInSeconds: this.__input.maximumBatchingWindowInSeconds,
          ParallelizationFactor: this.__input.parallelizationFactor,
          StartingPosition: this.__input.startingPosition,
          StartingPositionTimestamp: this.__input.startingPositionTimestamp,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.__input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.__input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.__input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.__input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.__input.maximumRetryAttempts,
          TumblingWindowInSeconds: this.__input.tumblingWindowInSeconds,
          Topics: this.__input.topics,
          Queues: this.__input.queues,
          SourceAccessConfigurations: this.__input.sourceAccessConfigurations,
          SelfManagedEventSource: {
            Endpoints: this.__input.selfManagedEventSource?.endpoints,
          },
          FunctionResponseTypes: this.__input.functionResponseTypes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEventSourceMapping.MaximumBatchingWindowInSeconds', props);
    return resource.getResponseField('MaximumBatchingWindowInSeconds') as unknown as number;
  }

  public get parallelizationFactor(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateEventSourceMapping.ParallelizationFactor'),
        outputPath: 'ParallelizationFactor',
        parameters: {
          EventSourceArn: this.__input.eventSourceArn,
          FunctionName: this.__input.functionName,
          Enabled: this.__input.enabled,
          BatchSize: this.__input.batchSize,
          MaximumBatchingWindowInSeconds: this.__input.maximumBatchingWindowInSeconds,
          ParallelizationFactor: this.__input.parallelizationFactor,
          StartingPosition: this.__input.startingPosition,
          StartingPositionTimestamp: this.__input.startingPositionTimestamp,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.__input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.__input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.__input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.__input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.__input.maximumRetryAttempts,
          TumblingWindowInSeconds: this.__input.tumblingWindowInSeconds,
          Topics: this.__input.topics,
          Queues: this.__input.queues,
          SourceAccessConfigurations: this.__input.sourceAccessConfigurations,
          SelfManagedEventSource: {
            Endpoints: this.__input.selfManagedEventSource?.endpoints,
          },
          FunctionResponseTypes: this.__input.functionResponseTypes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEventSourceMapping.ParallelizationFactor', props);
    return resource.getResponseField('ParallelizationFactor') as unknown as number;
  }

  public get eventSourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateEventSourceMapping.EventSourceArn'),
        outputPath: 'EventSourceArn',
        parameters: {
          EventSourceArn: this.__input.eventSourceArn,
          FunctionName: this.__input.functionName,
          Enabled: this.__input.enabled,
          BatchSize: this.__input.batchSize,
          MaximumBatchingWindowInSeconds: this.__input.maximumBatchingWindowInSeconds,
          ParallelizationFactor: this.__input.parallelizationFactor,
          StartingPosition: this.__input.startingPosition,
          StartingPositionTimestamp: this.__input.startingPositionTimestamp,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.__input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.__input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.__input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.__input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.__input.maximumRetryAttempts,
          TumblingWindowInSeconds: this.__input.tumblingWindowInSeconds,
          Topics: this.__input.topics,
          Queues: this.__input.queues,
          SourceAccessConfigurations: this.__input.sourceAccessConfigurations,
          SelfManagedEventSource: {
            Endpoints: this.__input.selfManagedEventSource?.endpoints,
          },
          FunctionResponseTypes: this.__input.functionResponseTypes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEventSourceMapping.EventSourceArn', props);
    return resource.getResponseField('EventSourceArn') as unknown as string;
  }

  public get functionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateEventSourceMapping.FunctionArn'),
        outputPath: 'FunctionArn',
        parameters: {
          EventSourceArn: this.__input.eventSourceArn,
          FunctionName: this.__input.functionName,
          Enabled: this.__input.enabled,
          BatchSize: this.__input.batchSize,
          MaximumBatchingWindowInSeconds: this.__input.maximumBatchingWindowInSeconds,
          ParallelizationFactor: this.__input.parallelizationFactor,
          StartingPosition: this.__input.startingPosition,
          StartingPositionTimestamp: this.__input.startingPositionTimestamp,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.__input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.__input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.__input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.__input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.__input.maximumRetryAttempts,
          TumblingWindowInSeconds: this.__input.tumblingWindowInSeconds,
          Topics: this.__input.topics,
          Queues: this.__input.queues,
          SourceAccessConfigurations: this.__input.sourceAccessConfigurations,
          SelfManagedEventSource: {
            Endpoints: this.__input.selfManagedEventSource?.endpoints,
          },
          FunctionResponseTypes: this.__input.functionResponseTypes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEventSourceMapping.FunctionArn', props);
    return resource.getResponseField('FunctionArn') as unknown as string;
  }

  public get lastModified(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateEventSourceMapping.LastModified'),
        outputPath: 'LastModified',
        parameters: {
          EventSourceArn: this.__input.eventSourceArn,
          FunctionName: this.__input.functionName,
          Enabled: this.__input.enabled,
          BatchSize: this.__input.batchSize,
          MaximumBatchingWindowInSeconds: this.__input.maximumBatchingWindowInSeconds,
          ParallelizationFactor: this.__input.parallelizationFactor,
          StartingPosition: this.__input.startingPosition,
          StartingPositionTimestamp: this.__input.startingPositionTimestamp,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.__input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.__input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.__input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.__input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.__input.maximumRetryAttempts,
          TumblingWindowInSeconds: this.__input.tumblingWindowInSeconds,
          Topics: this.__input.topics,
          Queues: this.__input.queues,
          SourceAccessConfigurations: this.__input.sourceAccessConfigurations,
          SelfManagedEventSource: {
            Endpoints: this.__input.selfManagedEventSource?.endpoints,
          },
          FunctionResponseTypes: this.__input.functionResponseTypes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEventSourceMapping.LastModified', props);
    return resource.getResponseField('LastModified') as unknown as string;
  }

  public get lastProcessingResult(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateEventSourceMapping.LastProcessingResult'),
        outputPath: 'LastProcessingResult',
        parameters: {
          EventSourceArn: this.__input.eventSourceArn,
          FunctionName: this.__input.functionName,
          Enabled: this.__input.enabled,
          BatchSize: this.__input.batchSize,
          MaximumBatchingWindowInSeconds: this.__input.maximumBatchingWindowInSeconds,
          ParallelizationFactor: this.__input.parallelizationFactor,
          StartingPosition: this.__input.startingPosition,
          StartingPositionTimestamp: this.__input.startingPositionTimestamp,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.__input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.__input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.__input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.__input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.__input.maximumRetryAttempts,
          TumblingWindowInSeconds: this.__input.tumblingWindowInSeconds,
          Topics: this.__input.topics,
          Queues: this.__input.queues,
          SourceAccessConfigurations: this.__input.sourceAccessConfigurations,
          SelfManagedEventSource: {
            Endpoints: this.__input.selfManagedEventSource?.endpoints,
          },
          FunctionResponseTypes: this.__input.functionResponseTypes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEventSourceMapping.LastProcessingResult', props);
    return resource.getResponseField('LastProcessingResult') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateEventSourceMapping.State'),
        outputPath: 'State',
        parameters: {
          EventSourceArn: this.__input.eventSourceArn,
          FunctionName: this.__input.functionName,
          Enabled: this.__input.enabled,
          BatchSize: this.__input.batchSize,
          MaximumBatchingWindowInSeconds: this.__input.maximumBatchingWindowInSeconds,
          ParallelizationFactor: this.__input.parallelizationFactor,
          StartingPosition: this.__input.startingPosition,
          StartingPositionTimestamp: this.__input.startingPositionTimestamp,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.__input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.__input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.__input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.__input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.__input.maximumRetryAttempts,
          TumblingWindowInSeconds: this.__input.tumblingWindowInSeconds,
          Topics: this.__input.topics,
          Queues: this.__input.queues,
          SourceAccessConfigurations: this.__input.sourceAccessConfigurations,
          SelfManagedEventSource: {
            Endpoints: this.__input.selfManagedEventSource?.endpoints,
          },
          FunctionResponseTypes: this.__input.functionResponseTypes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEventSourceMapping.State', props);
    return resource.getResponseField('State') as unknown as string;
  }

  public get stateTransitionReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateEventSourceMapping.StateTransitionReason'),
        outputPath: 'StateTransitionReason',
        parameters: {
          EventSourceArn: this.__input.eventSourceArn,
          FunctionName: this.__input.functionName,
          Enabled: this.__input.enabled,
          BatchSize: this.__input.batchSize,
          MaximumBatchingWindowInSeconds: this.__input.maximumBatchingWindowInSeconds,
          ParallelizationFactor: this.__input.parallelizationFactor,
          StartingPosition: this.__input.startingPosition,
          StartingPositionTimestamp: this.__input.startingPositionTimestamp,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.__input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.__input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.__input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.__input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.__input.maximumRetryAttempts,
          TumblingWindowInSeconds: this.__input.tumblingWindowInSeconds,
          Topics: this.__input.topics,
          Queues: this.__input.queues,
          SourceAccessConfigurations: this.__input.sourceAccessConfigurations,
          SelfManagedEventSource: {
            Endpoints: this.__input.selfManagedEventSource?.endpoints,
          },
          FunctionResponseTypes: this.__input.functionResponseTypes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEventSourceMapping.StateTransitionReason', props);
    return resource.getResponseField('StateTransitionReason') as unknown as string;
  }

  public get destinationConfig(): LambdaResponsesCreateEventSourceMappingDestinationConfig {
    return new LambdaResponsesCreateEventSourceMappingDestinationConfig(this.__scope, this.__resources, this.__input);
  }

  public get topics(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateEventSourceMapping.Topics'),
        outputPath: 'Topics',
        parameters: {
          EventSourceArn: this.__input.eventSourceArn,
          FunctionName: this.__input.functionName,
          Enabled: this.__input.enabled,
          BatchSize: this.__input.batchSize,
          MaximumBatchingWindowInSeconds: this.__input.maximumBatchingWindowInSeconds,
          ParallelizationFactor: this.__input.parallelizationFactor,
          StartingPosition: this.__input.startingPosition,
          StartingPositionTimestamp: this.__input.startingPositionTimestamp,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.__input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.__input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.__input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.__input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.__input.maximumRetryAttempts,
          TumblingWindowInSeconds: this.__input.tumblingWindowInSeconds,
          Topics: this.__input.topics,
          Queues: this.__input.queues,
          SourceAccessConfigurations: this.__input.sourceAccessConfigurations,
          SelfManagedEventSource: {
            Endpoints: this.__input.selfManagedEventSource?.endpoints,
          },
          FunctionResponseTypes: this.__input.functionResponseTypes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEventSourceMapping.Topics', props);
    return resource.getResponseField('Topics') as unknown as string[];
  }

  public get queues(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateEventSourceMapping.Queues'),
        outputPath: 'Queues',
        parameters: {
          EventSourceArn: this.__input.eventSourceArn,
          FunctionName: this.__input.functionName,
          Enabled: this.__input.enabled,
          BatchSize: this.__input.batchSize,
          MaximumBatchingWindowInSeconds: this.__input.maximumBatchingWindowInSeconds,
          ParallelizationFactor: this.__input.parallelizationFactor,
          StartingPosition: this.__input.startingPosition,
          StartingPositionTimestamp: this.__input.startingPositionTimestamp,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.__input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.__input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.__input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.__input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.__input.maximumRetryAttempts,
          TumblingWindowInSeconds: this.__input.tumblingWindowInSeconds,
          Topics: this.__input.topics,
          Queues: this.__input.queues,
          SourceAccessConfigurations: this.__input.sourceAccessConfigurations,
          SelfManagedEventSource: {
            Endpoints: this.__input.selfManagedEventSource?.endpoints,
          },
          FunctionResponseTypes: this.__input.functionResponseTypes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEventSourceMapping.Queues', props);
    return resource.getResponseField('Queues') as unknown as string[];
  }

  public get sourceAccessConfigurations(): shapes.LambdaSourceAccessConfiguration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateEventSourceMapping.SourceAccessConfigurations'),
        outputPath: 'SourceAccessConfigurations',
        parameters: {
          EventSourceArn: this.__input.eventSourceArn,
          FunctionName: this.__input.functionName,
          Enabled: this.__input.enabled,
          BatchSize: this.__input.batchSize,
          MaximumBatchingWindowInSeconds: this.__input.maximumBatchingWindowInSeconds,
          ParallelizationFactor: this.__input.parallelizationFactor,
          StartingPosition: this.__input.startingPosition,
          StartingPositionTimestamp: this.__input.startingPositionTimestamp,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.__input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.__input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.__input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.__input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.__input.maximumRetryAttempts,
          TumblingWindowInSeconds: this.__input.tumblingWindowInSeconds,
          Topics: this.__input.topics,
          Queues: this.__input.queues,
          SourceAccessConfigurations: this.__input.sourceAccessConfigurations,
          SelfManagedEventSource: {
            Endpoints: this.__input.selfManagedEventSource?.endpoints,
          },
          FunctionResponseTypes: this.__input.functionResponseTypes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEventSourceMapping.SourceAccessConfigurations', props);
    return resource.getResponseField('SourceAccessConfigurations') as unknown as shapes.LambdaSourceAccessConfiguration[];
  }

  public get selfManagedEventSource(): LambdaResponsesCreateEventSourceMappingSelfManagedEventSource {
    return new LambdaResponsesCreateEventSourceMappingSelfManagedEventSource(this.__scope, this.__resources, this.__input);
  }

  public get maximumRecordAgeInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateEventSourceMapping.MaximumRecordAgeInSeconds'),
        outputPath: 'MaximumRecordAgeInSeconds',
        parameters: {
          EventSourceArn: this.__input.eventSourceArn,
          FunctionName: this.__input.functionName,
          Enabled: this.__input.enabled,
          BatchSize: this.__input.batchSize,
          MaximumBatchingWindowInSeconds: this.__input.maximumBatchingWindowInSeconds,
          ParallelizationFactor: this.__input.parallelizationFactor,
          StartingPosition: this.__input.startingPosition,
          StartingPositionTimestamp: this.__input.startingPositionTimestamp,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.__input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.__input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.__input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.__input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.__input.maximumRetryAttempts,
          TumblingWindowInSeconds: this.__input.tumblingWindowInSeconds,
          Topics: this.__input.topics,
          Queues: this.__input.queues,
          SourceAccessConfigurations: this.__input.sourceAccessConfigurations,
          SelfManagedEventSource: {
            Endpoints: this.__input.selfManagedEventSource?.endpoints,
          },
          FunctionResponseTypes: this.__input.functionResponseTypes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEventSourceMapping.MaximumRecordAgeInSeconds', props);
    return resource.getResponseField('MaximumRecordAgeInSeconds') as unknown as number;
  }

  public get bisectBatchOnFunctionError(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateEventSourceMapping.BisectBatchOnFunctionError'),
        outputPath: 'BisectBatchOnFunctionError',
        parameters: {
          EventSourceArn: this.__input.eventSourceArn,
          FunctionName: this.__input.functionName,
          Enabled: this.__input.enabled,
          BatchSize: this.__input.batchSize,
          MaximumBatchingWindowInSeconds: this.__input.maximumBatchingWindowInSeconds,
          ParallelizationFactor: this.__input.parallelizationFactor,
          StartingPosition: this.__input.startingPosition,
          StartingPositionTimestamp: this.__input.startingPositionTimestamp,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.__input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.__input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.__input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.__input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.__input.maximumRetryAttempts,
          TumblingWindowInSeconds: this.__input.tumblingWindowInSeconds,
          Topics: this.__input.topics,
          Queues: this.__input.queues,
          SourceAccessConfigurations: this.__input.sourceAccessConfigurations,
          SelfManagedEventSource: {
            Endpoints: this.__input.selfManagedEventSource?.endpoints,
          },
          FunctionResponseTypes: this.__input.functionResponseTypes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEventSourceMapping.BisectBatchOnFunctionError', props);
    return resource.getResponseField('BisectBatchOnFunctionError') as unknown as boolean;
  }

  public get maximumRetryAttempts(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateEventSourceMapping.MaximumRetryAttempts'),
        outputPath: 'MaximumRetryAttempts',
        parameters: {
          EventSourceArn: this.__input.eventSourceArn,
          FunctionName: this.__input.functionName,
          Enabled: this.__input.enabled,
          BatchSize: this.__input.batchSize,
          MaximumBatchingWindowInSeconds: this.__input.maximumBatchingWindowInSeconds,
          ParallelizationFactor: this.__input.parallelizationFactor,
          StartingPosition: this.__input.startingPosition,
          StartingPositionTimestamp: this.__input.startingPositionTimestamp,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.__input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.__input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.__input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.__input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.__input.maximumRetryAttempts,
          TumblingWindowInSeconds: this.__input.tumblingWindowInSeconds,
          Topics: this.__input.topics,
          Queues: this.__input.queues,
          SourceAccessConfigurations: this.__input.sourceAccessConfigurations,
          SelfManagedEventSource: {
            Endpoints: this.__input.selfManagedEventSource?.endpoints,
          },
          FunctionResponseTypes: this.__input.functionResponseTypes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEventSourceMapping.MaximumRetryAttempts', props);
    return resource.getResponseField('MaximumRetryAttempts') as unknown as number;
  }

  public get tumblingWindowInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateEventSourceMapping.TumblingWindowInSeconds'),
        outputPath: 'TumblingWindowInSeconds',
        parameters: {
          EventSourceArn: this.__input.eventSourceArn,
          FunctionName: this.__input.functionName,
          Enabled: this.__input.enabled,
          BatchSize: this.__input.batchSize,
          MaximumBatchingWindowInSeconds: this.__input.maximumBatchingWindowInSeconds,
          ParallelizationFactor: this.__input.parallelizationFactor,
          StartingPosition: this.__input.startingPosition,
          StartingPositionTimestamp: this.__input.startingPositionTimestamp,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.__input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.__input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.__input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.__input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.__input.maximumRetryAttempts,
          TumblingWindowInSeconds: this.__input.tumblingWindowInSeconds,
          Topics: this.__input.topics,
          Queues: this.__input.queues,
          SourceAccessConfigurations: this.__input.sourceAccessConfigurations,
          SelfManagedEventSource: {
            Endpoints: this.__input.selfManagedEventSource?.endpoints,
          },
          FunctionResponseTypes: this.__input.functionResponseTypes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEventSourceMapping.TumblingWindowInSeconds', props);
    return resource.getResponseField('TumblingWindowInSeconds') as unknown as number;
  }

  public get functionResponseTypes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateEventSourceMapping.FunctionResponseTypes'),
        outputPath: 'FunctionResponseTypes',
        parameters: {
          EventSourceArn: this.__input.eventSourceArn,
          FunctionName: this.__input.functionName,
          Enabled: this.__input.enabled,
          BatchSize: this.__input.batchSize,
          MaximumBatchingWindowInSeconds: this.__input.maximumBatchingWindowInSeconds,
          ParallelizationFactor: this.__input.parallelizationFactor,
          StartingPosition: this.__input.startingPosition,
          StartingPositionTimestamp: this.__input.startingPositionTimestamp,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.__input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.__input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.__input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.__input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.__input.maximumRetryAttempts,
          TumblingWindowInSeconds: this.__input.tumblingWindowInSeconds,
          Topics: this.__input.topics,
          Queues: this.__input.queues,
          SourceAccessConfigurations: this.__input.sourceAccessConfigurations,
          SelfManagedEventSource: {
            Endpoints: this.__input.selfManagedEventSource?.endpoints,
          },
          FunctionResponseTypes: this.__input.functionResponseTypes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEventSourceMapping.FunctionResponseTypes', props);
    return resource.getResponseField('FunctionResponseTypes') as unknown as string[];
  }

}

export class LambdaResponsesCreateEventSourceMappingDestinationConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaCreateEventSourceMappingRequest) {
  }

  public get onSuccess(): LambdaResponsesCreateEventSourceMappingDestinationConfigOnSuccess {
    return new LambdaResponsesCreateEventSourceMappingDestinationConfigOnSuccess(this.__scope, this.__resources, this.__input);
  }

  public get onFailure(): LambdaResponsesCreateEventSourceMappingDestinationConfigOnFailure {
    return new LambdaResponsesCreateEventSourceMappingDestinationConfigOnFailure(this.__scope, this.__resources, this.__input);
  }

}

export class LambdaResponsesCreateEventSourceMappingDestinationConfigOnSuccess {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaCreateEventSourceMappingRequest) {
  }

  public get destination(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateEventSourceMapping.DestinationConfig.OnSuccess.Destination'),
        outputPath: 'DestinationConfig.OnSuccess.Destination',
        parameters: {
          EventSourceArn: this.__input.eventSourceArn,
          FunctionName: this.__input.functionName,
          Enabled: this.__input.enabled,
          BatchSize: this.__input.batchSize,
          MaximumBatchingWindowInSeconds: this.__input.maximumBatchingWindowInSeconds,
          ParallelizationFactor: this.__input.parallelizationFactor,
          StartingPosition: this.__input.startingPosition,
          StartingPositionTimestamp: this.__input.startingPositionTimestamp,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.__input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.__input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.__input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.__input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.__input.maximumRetryAttempts,
          TumblingWindowInSeconds: this.__input.tumblingWindowInSeconds,
          Topics: this.__input.topics,
          Queues: this.__input.queues,
          SourceAccessConfigurations: this.__input.sourceAccessConfigurations,
          SelfManagedEventSource: {
            Endpoints: this.__input.selfManagedEventSource?.endpoints,
          },
          FunctionResponseTypes: this.__input.functionResponseTypes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEventSourceMapping.DestinationConfig.OnSuccess.Destination', props);
    return resource.getResponseField('DestinationConfig.OnSuccess.Destination') as unknown as string;
  }

}

export class LambdaResponsesCreateEventSourceMappingDestinationConfigOnFailure {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaCreateEventSourceMappingRequest) {
  }

  public get destination(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateEventSourceMapping.DestinationConfig.OnFailure.Destination'),
        outputPath: 'DestinationConfig.OnFailure.Destination',
        parameters: {
          EventSourceArn: this.__input.eventSourceArn,
          FunctionName: this.__input.functionName,
          Enabled: this.__input.enabled,
          BatchSize: this.__input.batchSize,
          MaximumBatchingWindowInSeconds: this.__input.maximumBatchingWindowInSeconds,
          ParallelizationFactor: this.__input.parallelizationFactor,
          StartingPosition: this.__input.startingPosition,
          StartingPositionTimestamp: this.__input.startingPositionTimestamp,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.__input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.__input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.__input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.__input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.__input.maximumRetryAttempts,
          TumblingWindowInSeconds: this.__input.tumblingWindowInSeconds,
          Topics: this.__input.topics,
          Queues: this.__input.queues,
          SourceAccessConfigurations: this.__input.sourceAccessConfigurations,
          SelfManagedEventSource: {
            Endpoints: this.__input.selfManagedEventSource?.endpoints,
          },
          FunctionResponseTypes: this.__input.functionResponseTypes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEventSourceMapping.DestinationConfig.OnFailure.Destination', props);
    return resource.getResponseField('DestinationConfig.OnFailure.Destination') as unknown as string;
  }

}

export class LambdaResponsesCreateEventSourceMappingSelfManagedEventSource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaCreateEventSourceMappingRequest) {
  }

  public get endpoints(): Record<string, string[]> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateEventSourceMapping.SelfManagedEventSource.Endpoints'),
        outputPath: 'SelfManagedEventSource.Endpoints',
        parameters: {
          EventSourceArn: this.__input.eventSourceArn,
          FunctionName: this.__input.functionName,
          Enabled: this.__input.enabled,
          BatchSize: this.__input.batchSize,
          MaximumBatchingWindowInSeconds: this.__input.maximumBatchingWindowInSeconds,
          ParallelizationFactor: this.__input.parallelizationFactor,
          StartingPosition: this.__input.startingPosition,
          StartingPositionTimestamp: this.__input.startingPositionTimestamp,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.__input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.__input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.__input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.__input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.__input.maximumRetryAttempts,
          TumblingWindowInSeconds: this.__input.tumblingWindowInSeconds,
          Topics: this.__input.topics,
          Queues: this.__input.queues,
          SourceAccessConfigurations: this.__input.sourceAccessConfigurations,
          SelfManagedEventSource: {
            Endpoints: this.__input.selfManagedEventSource?.endpoints,
          },
          FunctionResponseTypes: this.__input.functionResponseTypes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEventSourceMapping.SelfManagedEventSource.Endpoints', props);
    return resource.getResponseField('SelfManagedEventSource.Endpoints') as unknown as Record<string, string[]>;
  }

}

export class LambdaResponsesCreateFunction {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaCreateFunctionRequest) {
  }

  public get functionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFunction',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateFunction.FunctionName'),
        outputPath: 'FunctionName',
        parameters: {
          FunctionName: this.__input.functionName,
          Runtime: this.__input.runtime,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.__input.code.s3Bucket,
            S3Key: this.__input.code.s3Key,
            S3ObjectVersion: this.__input.code.s3ObjectVersion,
            ImageUri: this.__input.code.imageUri,
          },
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          Publish: this.__input.publish,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          PackageType: this.__input.packageType,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          Tags: this.__input.tags,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
          CodeSigningConfigArn: this.__input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFunction.FunctionName', props);
    return resource.getResponseField('FunctionName') as unknown as string;
  }

  public get functionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFunction',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateFunction.FunctionArn'),
        outputPath: 'FunctionArn',
        parameters: {
          FunctionName: this.__input.functionName,
          Runtime: this.__input.runtime,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.__input.code.s3Bucket,
            S3Key: this.__input.code.s3Key,
            S3ObjectVersion: this.__input.code.s3ObjectVersion,
            ImageUri: this.__input.code.imageUri,
          },
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          Publish: this.__input.publish,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          PackageType: this.__input.packageType,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          Tags: this.__input.tags,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
          CodeSigningConfigArn: this.__input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFunction.FunctionArn', props);
    return resource.getResponseField('FunctionArn') as unknown as string;
  }

  public get runtime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFunction',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateFunction.Runtime'),
        outputPath: 'Runtime',
        parameters: {
          FunctionName: this.__input.functionName,
          Runtime: this.__input.runtime,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.__input.code.s3Bucket,
            S3Key: this.__input.code.s3Key,
            S3ObjectVersion: this.__input.code.s3ObjectVersion,
            ImageUri: this.__input.code.imageUri,
          },
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          Publish: this.__input.publish,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          PackageType: this.__input.packageType,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          Tags: this.__input.tags,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
          CodeSigningConfigArn: this.__input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFunction.Runtime', props);
    return resource.getResponseField('Runtime') as unknown as string;
  }

  public get role(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFunction',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateFunction.Role'),
        outputPath: 'Role',
        parameters: {
          FunctionName: this.__input.functionName,
          Runtime: this.__input.runtime,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.__input.code.s3Bucket,
            S3Key: this.__input.code.s3Key,
            S3ObjectVersion: this.__input.code.s3ObjectVersion,
            ImageUri: this.__input.code.imageUri,
          },
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          Publish: this.__input.publish,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          PackageType: this.__input.packageType,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          Tags: this.__input.tags,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
          CodeSigningConfigArn: this.__input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFunction.Role', props);
    return resource.getResponseField('Role') as unknown as string;
  }

  public get handler(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFunction',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateFunction.Handler'),
        outputPath: 'Handler',
        parameters: {
          FunctionName: this.__input.functionName,
          Runtime: this.__input.runtime,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.__input.code.s3Bucket,
            S3Key: this.__input.code.s3Key,
            S3ObjectVersion: this.__input.code.s3ObjectVersion,
            ImageUri: this.__input.code.imageUri,
          },
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          Publish: this.__input.publish,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          PackageType: this.__input.packageType,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          Tags: this.__input.tags,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
          CodeSigningConfigArn: this.__input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFunction.Handler', props);
    return resource.getResponseField('Handler') as unknown as string;
  }

  public get codeSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFunction',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateFunction.CodeSize'),
        outputPath: 'CodeSize',
        parameters: {
          FunctionName: this.__input.functionName,
          Runtime: this.__input.runtime,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.__input.code.s3Bucket,
            S3Key: this.__input.code.s3Key,
            S3ObjectVersion: this.__input.code.s3ObjectVersion,
            ImageUri: this.__input.code.imageUri,
          },
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          Publish: this.__input.publish,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          PackageType: this.__input.packageType,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          Tags: this.__input.tags,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
          CodeSigningConfigArn: this.__input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFunction.CodeSize', props);
    return resource.getResponseField('CodeSize') as unknown as number;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFunction',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateFunction.Description'),
        outputPath: 'Description',
        parameters: {
          FunctionName: this.__input.functionName,
          Runtime: this.__input.runtime,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.__input.code.s3Bucket,
            S3Key: this.__input.code.s3Key,
            S3ObjectVersion: this.__input.code.s3ObjectVersion,
            ImageUri: this.__input.code.imageUri,
          },
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          Publish: this.__input.publish,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          PackageType: this.__input.packageType,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          Tags: this.__input.tags,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
          CodeSigningConfigArn: this.__input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFunction.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get timeout(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFunction',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateFunction.Timeout'),
        outputPath: 'Timeout',
        parameters: {
          FunctionName: this.__input.functionName,
          Runtime: this.__input.runtime,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.__input.code.s3Bucket,
            S3Key: this.__input.code.s3Key,
            S3ObjectVersion: this.__input.code.s3ObjectVersion,
            ImageUri: this.__input.code.imageUri,
          },
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          Publish: this.__input.publish,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          PackageType: this.__input.packageType,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          Tags: this.__input.tags,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
          CodeSigningConfigArn: this.__input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFunction.Timeout', props);
    return resource.getResponseField('Timeout') as unknown as number;
  }

  public get memorySize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFunction',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateFunction.MemorySize'),
        outputPath: 'MemorySize',
        parameters: {
          FunctionName: this.__input.functionName,
          Runtime: this.__input.runtime,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.__input.code.s3Bucket,
            S3Key: this.__input.code.s3Key,
            S3ObjectVersion: this.__input.code.s3ObjectVersion,
            ImageUri: this.__input.code.imageUri,
          },
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          Publish: this.__input.publish,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          PackageType: this.__input.packageType,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          Tags: this.__input.tags,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
          CodeSigningConfigArn: this.__input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFunction.MemorySize', props);
    return resource.getResponseField('MemorySize') as unknown as number;
  }

  public get lastModified(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFunction',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateFunction.LastModified'),
        outputPath: 'LastModified',
        parameters: {
          FunctionName: this.__input.functionName,
          Runtime: this.__input.runtime,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.__input.code.s3Bucket,
            S3Key: this.__input.code.s3Key,
            S3ObjectVersion: this.__input.code.s3ObjectVersion,
            ImageUri: this.__input.code.imageUri,
          },
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          Publish: this.__input.publish,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          PackageType: this.__input.packageType,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          Tags: this.__input.tags,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
          CodeSigningConfigArn: this.__input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFunction.LastModified', props);
    return resource.getResponseField('LastModified') as unknown as string;
  }

  public get codeSha256(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFunction',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateFunction.CodeSha256'),
        outputPath: 'CodeSha256',
        parameters: {
          FunctionName: this.__input.functionName,
          Runtime: this.__input.runtime,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.__input.code.s3Bucket,
            S3Key: this.__input.code.s3Key,
            S3ObjectVersion: this.__input.code.s3ObjectVersion,
            ImageUri: this.__input.code.imageUri,
          },
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          Publish: this.__input.publish,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          PackageType: this.__input.packageType,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          Tags: this.__input.tags,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
          CodeSigningConfigArn: this.__input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFunction.CodeSha256', props);
    return resource.getResponseField('CodeSha256') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFunction',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateFunction.Version'),
        outputPath: 'Version',
        parameters: {
          FunctionName: this.__input.functionName,
          Runtime: this.__input.runtime,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.__input.code.s3Bucket,
            S3Key: this.__input.code.s3Key,
            S3ObjectVersion: this.__input.code.s3ObjectVersion,
            ImageUri: this.__input.code.imageUri,
          },
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          Publish: this.__input.publish,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          PackageType: this.__input.packageType,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          Tags: this.__input.tags,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
          CodeSigningConfigArn: this.__input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFunction.Version', props);
    return resource.getResponseField('Version') as unknown as string;
  }

  public get vpcConfig(): LambdaResponsesCreateFunctionVpcConfig {
    return new LambdaResponsesCreateFunctionVpcConfig(this.__scope, this.__resources, this.__input);
  }

  public get deadLetterConfig(): LambdaResponsesCreateFunctionDeadLetterConfig {
    return new LambdaResponsesCreateFunctionDeadLetterConfig(this.__scope, this.__resources, this.__input);
  }

  public get environment(): LambdaResponsesCreateFunctionEnvironment {
    return new LambdaResponsesCreateFunctionEnvironment(this.__scope, this.__resources, this.__input);
  }

  public get kmsKeyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFunction',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateFunction.KMSKeyArn'),
        outputPath: 'KMSKeyArn',
        parameters: {
          FunctionName: this.__input.functionName,
          Runtime: this.__input.runtime,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.__input.code.s3Bucket,
            S3Key: this.__input.code.s3Key,
            S3ObjectVersion: this.__input.code.s3ObjectVersion,
            ImageUri: this.__input.code.imageUri,
          },
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          Publish: this.__input.publish,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          PackageType: this.__input.packageType,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          Tags: this.__input.tags,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
          CodeSigningConfigArn: this.__input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFunction.KMSKeyArn', props);
    return resource.getResponseField('KMSKeyArn') as unknown as string;
  }

  public get tracingConfig(): LambdaResponsesCreateFunctionTracingConfig {
    return new LambdaResponsesCreateFunctionTracingConfig(this.__scope, this.__resources, this.__input);
  }

  public get masterArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFunction',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateFunction.MasterArn'),
        outputPath: 'MasterArn',
        parameters: {
          FunctionName: this.__input.functionName,
          Runtime: this.__input.runtime,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.__input.code.s3Bucket,
            S3Key: this.__input.code.s3Key,
            S3ObjectVersion: this.__input.code.s3ObjectVersion,
            ImageUri: this.__input.code.imageUri,
          },
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          Publish: this.__input.publish,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          PackageType: this.__input.packageType,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          Tags: this.__input.tags,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
          CodeSigningConfigArn: this.__input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFunction.MasterArn', props);
    return resource.getResponseField('MasterArn') as unknown as string;
  }

  public get revisionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFunction',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateFunction.RevisionId'),
        outputPath: 'RevisionId',
        parameters: {
          FunctionName: this.__input.functionName,
          Runtime: this.__input.runtime,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.__input.code.s3Bucket,
            S3Key: this.__input.code.s3Key,
            S3ObjectVersion: this.__input.code.s3ObjectVersion,
            ImageUri: this.__input.code.imageUri,
          },
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          Publish: this.__input.publish,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          PackageType: this.__input.packageType,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          Tags: this.__input.tags,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
          CodeSigningConfigArn: this.__input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFunction.RevisionId', props);
    return resource.getResponseField('RevisionId') as unknown as string;
  }

  public get layers(): shapes.LambdaLayer[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFunction',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateFunction.Layers'),
        outputPath: 'Layers',
        parameters: {
          FunctionName: this.__input.functionName,
          Runtime: this.__input.runtime,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.__input.code.s3Bucket,
            S3Key: this.__input.code.s3Key,
            S3ObjectVersion: this.__input.code.s3ObjectVersion,
            ImageUri: this.__input.code.imageUri,
          },
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          Publish: this.__input.publish,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          PackageType: this.__input.packageType,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          Tags: this.__input.tags,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
          CodeSigningConfigArn: this.__input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFunction.Layers', props);
    return resource.getResponseField('Layers') as unknown as shapes.LambdaLayer[];
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFunction',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateFunction.State'),
        outputPath: 'State',
        parameters: {
          FunctionName: this.__input.functionName,
          Runtime: this.__input.runtime,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.__input.code.s3Bucket,
            S3Key: this.__input.code.s3Key,
            S3ObjectVersion: this.__input.code.s3ObjectVersion,
            ImageUri: this.__input.code.imageUri,
          },
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          Publish: this.__input.publish,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          PackageType: this.__input.packageType,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          Tags: this.__input.tags,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
          CodeSigningConfigArn: this.__input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFunction.State', props);
    return resource.getResponseField('State') as unknown as string;
  }

  public get stateReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFunction',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateFunction.StateReason'),
        outputPath: 'StateReason',
        parameters: {
          FunctionName: this.__input.functionName,
          Runtime: this.__input.runtime,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.__input.code.s3Bucket,
            S3Key: this.__input.code.s3Key,
            S3ObjectVersion: this.__input.code.s3ObjectVersion,
            ImageUri: this.__input.code.imageUri,
          },
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          Publish: this.__input.publish,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          PackageType: this.__input.packageType,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          Tags: this.__input.tags,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
          CodeSigningConfigArn: this.__input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFunction.StateReason', props);
    return resource.getResponseField('StateReason') as unknown as string;
  }

  public get stateReasonCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFunction',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateFunction.StateReasonCode'),
        outputPath: 'StateReasonCode',
        parameters: {
          FunctionName: this.__input.functionName,
          Runtime: this.__input.runtime,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.__input.code.s3Bucket,
            S3Key: this.__input.code.s3Key,
            S3ObjectVersion: this.__input.code.s3ObjectVersion,
            ImageUri: this.__input.code.imageUri,
          },
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          Publish: this.__input.publish,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          PackageType: this.__input.packageType,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          Tags: this.__input.tags,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
          CodeSigningConfigArn: this.__input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFunction.StateReasonCode', props);
    return resource.getResponseField('StateReasonCode') as unknown as string;
  }

  public get lastUpdateStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFunction',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateFunction.LastUpdateStatus'),
        outputPath: 'LastUpdateStatus',
        parameters: {
          FunctionName: this.__input.functionName,
          Runtime: this.__input.runtime,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.__input.code.s3Bucket,
            S3Key: this.__input.code.s3Key,
            S3ObjectVersion: this.__input.code.s3ObjectVersion,
            ImageUri: this.__input.code.imageUri,
          },
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          Publish: this.__input.publish,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          PackageType: this.__input.packageType,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          Tags: this.__input.tags,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
          CodeSigningConfigArn: this.__input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFunction.LastUpdateStatus', props);
    return resource.getResponseField('LastUpdateStatus') as unknown as string;
  }

  public get lastUpdateStatusReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFunction',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateFunction.LastUpdateStatusReason'),
        outputPath: 'LastUpdateStatusReason',
        parameters: {
          FunctionName: this.__input.functionName,
          Runtime: this.__input.runtime,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.__input.code.s3Bucket,
            S3Key: this.__input.code.s3Key,
            S3ObjectVersion: this.__input.code.s3ObjectVersion,
            ImageUri: this.__input.code.imageUri,
          },
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          Publish: this.__input.publish,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          PackageType: this.__input.packageType,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          Tags: this.__input.tags,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
          CodeSigningConfigArn: this.__input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFunction.LastUpdateStatusReason', props);
    return resource.getResponseField('LastUpdateStatusReason') as unknown as string;
  }

  public get lastUpdateStatusReasonCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFunction',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateFunction.LastUpdateStatusReasonCode'),
        outputPath: 'LastUpdateStatusReasonCode',
        parameters: {
          FunctionName: this.__input.functionName,
          Runtime: this.__input.runtime,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.__input.code.s3Bucket,
            S3Key: this.__input.code.s3Key,
            S3ObjectVersion: this.__input.code.s3ObjectVersion,
            ImageUri: this.__input.code.imageUri,
          },
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          Publish: this.__input.publish,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          PackageType: this.__input.packageType,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          Tags: this.__input.tags,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
          CodeSigningConfigArn: this.__input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFunction.LastUpdateStatusReasonCode', props);
    return resource.getResponseField('LastUpdateStatusReasonCode') as unknown as string;
  }

  public get fileSystemConfigs(): shapes.LambdaFileSystemConfig[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFunction',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateFunction.FileSystemConfigs'),
        outputPath: 'FileSystemConfigs',
        parameters: {
          FunctionName: this.__input.functionName,
          Runtime: this.__input.runtime,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.__input.code.s3Bucket,
            S3Key: this.__input.code.s3Key,
            S3ObjectVersion: this.__input.code.s3ObjectVersion,
            ImageUri: this.__input.code.imageUri,
          },
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          Publish: this.__input.publish,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          PackageType: this.__input.packageType,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          Tags: this.__input.tags,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
          CodeSigningConfigArn: this.__input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFunction.FileSystemConfigs', props);
    return resource.getResponseField('FileSystemConfigs') as unknown as shapes.LambdaFileSystemConfig[];
  }

  public get packageType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFunction',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateFunction.PackageType'),
        outputPath: 'PackageType',
        parameters: {
          FunctionName: this.__input.functionName,
          Runtime: this.__input.runtime,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.__input.code.s3Bucket,
            S3Key: this.__input.code.s3Key,
            S3ObjectVersion: this.__input.code.s3ObjectVersion,
            ImageUri: this.__input.code.imageUri,
          },
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          Publish: this.__input.publish,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          PackageType: this.__input.packageType,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          Tags: this.__input.tags,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
          CodeSigningConfigArn: this.__input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFunction.PackageType', props);
    return resource.getResponseField('PackageType') as unknown as string;
  }

  public get imageConfigResponse(): LambdaResponsesCreateFunctionImageConfigResponse {
    return new LambdaResponsesCreateFunctionImageConfigResponse(this.__scope, this.__resources, this.__input);
  }

  public get signingProfileVersionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFunction',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateFunction.SigningProfileVersionArn'),
        outputPath: 'SigningProfileVersionArn',
        parameters: {
          FunctionName: this.__input.functionName,
          Runtime: this.__input.runtime,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.__input.code.s3Bucket,
            S3Key: this.__input.code.s3Key,
            S3ObjectVersion: this.__input.code.s3ObjectVersion,
            ImageUri: this.__input.code.imageUri,
          },
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          Publish: this.__input.publish,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          PackageType: this.__input.packageType,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          Tags: this.__input.tags,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
          CodeSigningConfigArn: this.__input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFunction.SigningProfileVersionArn', props);
    return resource.getResponseField('SigningProfileVersionArn') as unknown as string;
  }

  public get signingJobArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFunction',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateFunction.SigningJobArn'),
        outputPath: 'SigningJobArn',
        parameters: {
          FunctionName: this.__input.functionName,
          Runtime: this.__input.runtime,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.__input.code.s3Bucket,
            S3Key: this.__input.code.s3Key,
            S3ObjectVersion: this.__input.code.s3ObjectVersion,
            ImageUri: this.__input.code.imageUri,
          },
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          Publish: this.__input.publish,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          PackageType: this.__input.packageType,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          Tags: this.__input.tags,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
          CodeSigningConfigArn: this.__input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFunction.SigningJobArn', props);
    return resource.getResponseField('SigningJobArn') as unknown as string;
  }

}

export class LambdaResponsesCreateFunctionVpcConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaCreateFunctionRequest) {
  }

  public get subnetIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFunction',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateFunction.VpcConfig.SubnetIds'),
        outputPath: 'VpcConfig.SubnetIds',
        parameters: {
          FunctionName: this.__input.functionName,
          Runtime: this.__input.runtime,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.__input.code.s3Bucket,
            S3Key: this.__input.code.s3Key,
            S3ObjectVersion: this.__input.code.s3ObjectVersion,
            ImageUri: this.__input.code.imageUri,
          },
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          Publish: this.__input.publish,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          PackageType: this.__input.packageType,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          Tags: this.__input.tags,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
          CodeSigningConfigArn: this.__input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFunction.VpcConfig.SubnetIds', props);
    return resource.getResponseField('VpcConfig.SubnetIds') as unknown as string[];
  }

  public get securityGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFunction',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateFunction.VpcConfig.SecurityGroupIds'),
        outputPath: 'VpcConfig.SecurityGroupIds',
        parameters: {
          FunctionName: this.__input.functionName,
          Runtime: this.__input.runtime,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.__input.code.s3Bucket,
            S3Key: this.__input.code.s3Key,
            S3ObjectVersion: this.__input.code.s3ObjectVersion,
            ImageUri: this.__input.code.imageUri,
          },
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          Publish: this.__input.publish,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          PackageType: this.__input.packageType,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          Tags: this.__input.tags,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
          CodeSigningConfigArn: this.__input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFunction.VpcConfig.SecurityGroupIds', props);
    return resource.getResponseField('VpcConfig.SecurityGroupIds') as unknown as string[];
  }

  public get vpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFunction',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateFunction.VpcConfig.VpcId'),
        outputPath: 'VpcConfig.VpcId',
        parameters: {
          FunctionName: this.__input.functionName,
          Runtime: this.__input.runtime,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.__input.code.s3Bucket,
            S3Key: this.__input.code.s3Key,
            S3ObjectVersion: this.__input.code.s3ObjectVersion,
            ImageUri: this.__input.code.imageUri,
          },
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          Publish: this.__input.publish,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          PackageType: this.__input.packageType,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          Tags: this.__input.tags,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
          CodeSigningConfigArn: this.__input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFunction.VpcConfig.VpcId', props);
    return resource.getResponseField('VpcConfig.VpcId') as unknown as string;
  }

}

export class LambdaResponsesCreateFunctionDeadLetterConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaCreateFunctionRequest) {
  }

  public get targetArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFunction',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateFunction.DeadLetterConfig.TargetArn'),
        outputPath: 'DeadLetterConfig.TargetArn',
        parameters: {
          FunctionName: this.__input.functionName,
          Runtime: this.__input.runtime,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.__input.code.s3Bucket,
            S3Key: this.__input.code.s3Key,
            S3ObjectVersion: this.__input.code.s3ObjectVersion,
            ImageUri: this.__input.code.imageUri,
          },
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          Publish: this.__input.publish,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          PackageType: this.__input.packageType,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          Tags: this.__input.tags,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
          CodeSigningConfigArn: this.__input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFunction.DeadLetterConfig.TargetArn', props);
    return resource.getResponseField('DeadLetterConfig.TargetArn') as unknown as string;
  }

}

export class LambdaResponsesCreateFunctionEnvironment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaCreateFunctionRequest) {
  }

  public get variables(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFunction',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateFunction.Environment.Variables'),
        outputPath: 'Environment.Variables',
        parameters: {
          FunctionName: this.__input.functionName,
          Runtime: this.__input.runtime,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.__input.code.s3Bucket,
            S3Key: this.__input.code.s3Key,
            S3ObjectVersion: this.__input.code.s3ObjectVersion,
            ImageUri: this.__input.code.imageUri,
          },
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          Publish: this.__input.publish,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          PackageType: this.__input.packageType,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          Tags: this.__input.tags,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
          CodeSigningConfigArn: this.__input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFunction.Environment.Variables', props);
    return resource.getResponseField('Environment.Variables') as unknown as Record<string, string>;
  }

  public get error(): LambdaResponsesCreateFunctionEnvironmentError {
    return new LambdaResponsesCreateFunctionEnvironmentError(this.__scope, this.__resources, this.__input);
  }

}

export class LambdaResponsesCreateFunctionEnvironmentError {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaCreateFunctionRequest) {
  }

  public get errorCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFunction',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateFunction.Environment.Error.ErrorCode'),
        outputPath: 'Environment.Error.ErrorCode',
        parameters: {
          FunctionName: this.__input.functionName,
          Runtime: this.__input.runtime,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.__input.code.s3Bucket,
            S3Key: this.__input.code.s3Key,
            S3ObjectVersion: this.__input.code.s3ObjectVersion,
            ImageUri: this.__input.code.imageUri,
          },
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          Publish: this.__input.publish,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          PackageType: this.__input.packageType,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          Tags: this.__input.tags,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
          CodeSigningConfigArn: this.__input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFunction.Environment.Error.ErrorCode', props);
    return resource.getResponseField('Environment.Error.ErrorCode') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFunction',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateFunction.Environment.Error.Message'),
        outputPath: 'Environment.Error.Message',
        parameters: {
          FunctionName: this.__input.functionName,
          Runtime: this.__input.runtime,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.__input.code.s3Bucket,
            S3Key: this.__input.code.s3Key,
            S3ObjectVersion: this.__input.code.s3ObjectVersion,
            ImageUri: this.__input.code.imageUri,
          },
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          Publish: this.__input.publish,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          PackageType: this.__input.packageType,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          Tags: this.__input.tags,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
          CodeSigningConfigArn: this.__input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFunction.Environment.Error.Message', props);
    return resource.getResponseField('Environment.Error.Message') as unknown as string;
  }

}

export class LambdaResponsesCreateFunctionTracingConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaCreateFunctionRequest) {
  }

  public get mode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFunction',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateFunction.TracingConfig.Mode'),
        outputPath: 'TracingConfig.Mode',
        parameters: {
          FunctionName: this.__input.functionName,
          Runtime: this.__input.runtime,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.__input.code.s3Bucket,
            S3Key: this.__input.code.s3Key,
            S3ObjectVersion: this.__input.code.s3ObjectVersion,
            ImageUri: this.__input.code.imageUri,
          },
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          Publish: this.__input.publish,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          PackageType: this.__input.packageType,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          Tags: this.__input.tags,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
          CodeSigningConfigArn: this.__input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFunction.TracingConfig.Mode', props);
    return resource.getResponseField('TracingConfig.Mode') as unknown as string;
  }

}

export class LambdaResponsesCreateFunctionImageConfigResponse {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaCreateFunctionRequest) {
  }

  public get imageConfig(): LambdaResponsesCreateFunctionImageConfigResponseImageConfig {
    return new LambdaResponsesCreateFunctionImageConfigResponseImageConfig(this.__scope, this.__resources, this.__input);
  }

  public get error(): LambdaResponsesCreateFunctionImageConfigResponseError {
    return new LambdaResponsesCreateFunctionImageConfigResponseError(this.__scope, this.__resources, this.__input);
  }

}

export class LambdaResponsesCreateFunctionImageConfigResponseImageConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaCreateFunctionRequest) {
  }

  public get entryPoint(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFunction',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateFunction.ImageConfigResponse.ImageConfig.EntryPoint'),
        outputPath: 'ImageConfigResponse.ImageConfig.EntryPoint',
        parameters: {
          FunctionName: this.__input.functionName,
          Runtime: this.__input.runtime,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.__input.code.s3Bucket,
            S3Key: this.__input.code.s3Key,
            S3ObjectVersion: this.__input.code.s3ObjectVersion,
            ImageUri: this.__input.code.imageUri,
          },
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          Publish: this.__input.publish,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          PackageType: this.__input.packageType,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          Tags: this.__input.tags,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
          CodeSigningConfigArn: this.__input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFunction.ImageConfigResponse.ImageConfig.EntryPoint', props);
    return resource.getResponseField('ImageConfigResponse.ImageConfig.EntryPoint') as unknown as string[];
  }

  public get command(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFunction',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateFunction.ImageConfigResponse.ImageConfig.Command'),
        outputPath: 'ImageConfigResponse.ImageConfig.Command',
        parameters: {
          FunctionName: this.__input.functionName,
          Runtime: this.__input.runtime,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.__input.code.s3Bucket,
            S3Key: this.__input.code.s3Key,
            S3ObjectVersion: this.__input.code.s3ObjectVersion,
            ImageUri: this.__input.code.imageUri,
          },
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          Publish: this.__input.publish,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          PackageType: this.__input.packageType,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          Tags: this.__input.tags,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
          CodeSigningConfigArn: this.__input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFunction.ImageConfigResponse.ImageConfig.Command', props);
    return resource.getResponseField('ImageConfigResponse.ImageConfig.Command') as unknown as string[];
  }

  public get workingDirectory(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFunction',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateFunction.ImageConfigResponse.ImageConfig.WorkingDirectory'),
        outputPath: 'ImageConfigResponse.ImageConfig.WorkingDirectory',
        parameters: {
          FunctionName: this.__input.functionName,
          Runtime: this.__input.runtime,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.__input.code.s3Bucket,
            S3Key: this.__input.code.s3Key,
            S3ObjectVersion: this.__input.code.s3ObjectVersion,
            ImageUri: this.__input.code.imageUri,
          },
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          Publish: this.__input.publish,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          PackageType: this.__input.packageType,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          Tags: this.__input.tags,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
          CodeSigningConfigArn: this.__input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFunction.ImageConfigResponse.ImageConfig.WorkingDirectory', props);
    return resource.getResponseField('ImageConfigResponse.ImageConfig.WorkingDirectory') as unknown as string;
  }

}

export class LambdaResponsesCreateFunctionImageConfigResponseError {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaCreateFunctionRequest) {
  }

  public get errorCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFunction',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateFunction.ImageConfigResponse.Error.ErrorCode'),
        outputPath: 'ImageConfigResponse.Error.ErrorCode',
        parameters: {
          FunctionName: this.__input.functionName,
          Runtime: this.__input.runtime,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.__input.code.s3Bucket,
            S3Key: this.__input.code.s3Key,
            S3ObjectVersion: this.__input.code.s3ObjectVersion,
            ImageUri: this.__input.code.imageUri,
          },
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          Publish: this.__input.publish,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          PackageType: this.__input.packageType,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          Tags: this.__input.tags,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
          CodeSigningConfigArn: this.__input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFunction.ImageConfigResponse.Error.ErrorCode', props);
    return resource.getResponseField('ImageConfigResponse.Error.ErrorCode') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFunction',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.CreateFunction.ImageConfigResponse.Error.Message'),
        outputPath: 'ImageConfigResponse.Error.Message',
        parameters: {
          FunctionName: this.__input.functionName,
          Runtime: this.__input.runtime,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.__input.code.s3Bucket,
            S3Key: this.__input.code.s3Key,
            S3ObjectVersion: this.__input.code.s3ObjectVersion,
            ImageUri: this.__input.code.imageUri,
          },
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          Publish: this.__input.publish,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          PackageType: this.__input.packageType,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          Tags: this.__input.tags,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
          CodeSigningConfigArn: this.__input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFunction.ImageConfigResponse.Error.Message', props);
    return resource.getResponseField('ImageConfigResponse.Error.Message') as unknown as string;
  }

}

export class LambdaResponsesDeleteEventSourceMapping {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaDeleteEventSourceMappingRequest) {
  }

  public get uuid(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.DeleteEventSourceMapping.UUID'),
        outputPath: 'UUID',
        parameters: {
          UUID: this.__input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEventSourceMapping.UUID', props);
    return resource.getResponseField('UUID') as unknown as string;
  }

  public get startingPosition(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.DeleteEventSourceMapping.StartingPosition'),
        outputPath: 'StartingPosition',
        parameters: {
          UUID: this.__input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEventSourceMapping.StartingPosition', props);
    return resource.getResponseField('StartingPosition') as unknown as string;
  }

  public get startingPositionTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.DeleteEventSourceMapping.StartingPositionTimestamp'),
        outputPath: 'StartingPositionTimestamp',
        parameters: {
          UUID: this.__input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEventSourceMapping.StartingPositionTimestamp', props);
    return resource.getResponseField('StartingPositionTimestamp') as unknown as string;
  }

  public get batchSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.DeleteEventSourceMapping.BatchSize'),
        outputPath: 'BatchSize',
        parameters: {
          UUID: this.__input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEventSourceMapping.BatchSize', props);
    return resource.getResponseField('BatchSize') as unknown as number;
  }

  public get maximumBatchingWindowInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.DeleteEventSourceMapping.MaximumBatchingWindowInSeconds'),
        outputPath: 'MaximumBatchingWindowInSeconds',
        parameters: {
          UUID: this.__input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEventSourceMapping.MaximumBatchingWindowInSeconds', props);
    return resource.getResponseField('MaximumBatchingWindowInSeconds') as unknown as number;
  }

  public get parallelizationFactor(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.DeleteEventSourceMapping.ParallelizationFactor'),
        outputPath: 'ParallelizationFactor',
        parameters: {
          UUID: this.__input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEventSourceMapping.ParallelizationFactor', props);
    return resource.getResponseField('ParallelizationFactor') as unknown as number;
  }

  public get eventSourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.DeleteEventSourceMapping.EventSourceArn'),
        outputPath: 'EventSourceArn',
        parameters: {
          UUID: this.__input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEventSourceMapping.EventSourceArn', props);
    return resource.getResponseField('EventSourceArn') as unknown as string;
  }

  public get functionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.DeleteEventSourceMapping.FunctionArn'),
        outputPath: 'FunctionArn',
        parameters: {
          UUID: this.__input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEventSourceMapping.FunctionArn', props);
    return resource.getResponseField('FunctionArn') as unknown as string;
  }

  public get lastModified(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.DeleteEventSourceMapping.LastModified'),
        outputPath: 'LastModified',
        parameters: {
          UUID: this.__input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEventSourceMapping.LastModified', props);
    return resource.getResponseField('LastModified') as unknown as string;
  }

  public get lastProcessingResult(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.DeleteEventSourceMapping.LastProcessingResult'),
        outputPath: 'LastProcessingResult',
        parameters: {
          UUID: this.__input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEventSourceMapping.LastProcessingResult', props);
    return resource.getResponseField('LastProcessingResult') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.DeleteEventSourceMapping.State'),
        outputPath: 'State',
        parameters: {
          UUID: this.__input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEventSourceMapping.State', props);
    return resource.getResponseField('State') as unknown as string;
  }

  public get stateTransitionReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.DeleteEventSourceMapping.StateTransitionReason'),
        outputPath: 'StateTransitionReason',
        parameters: {
          UUID: this.__input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEventSourceMapping.StateTransitionReason', props);
    return resource.getResponseField('StateTransitionReason') as unknown as string;
  }

  public get destinationConfig(): LambdaResponsesDeleteEventSourceMappingDestinationConfig {
    return new LambdaResponsesDeleteEventSourceMappingDestinationConfig(this.__scope, this.__resources, this.__input);
  }

  public get topics(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.DeleteEventSourceMapping.Topics'),
        outputPath: 'Topics',
        parameters: {
          UUID: this.__input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEventSourceMapping.Topics', props);
    return resource.getResponseField('Topics') as unknown as string[];
  }

  public get queues(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.DeleteEventSourceMapping.Queues'),
        outputPath: 'Queues',
        parameters: {
          UUID: this.__input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEventSourceMapping.Queues', props);
    return resource.getResponseField('Queues') as unknown as string[];
  }

  public get sourceAccessConfigurations(): shapes.LambdaSourceAccessConfiguration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.DeleteEventSourceMapping.SourceAccessConfigurations'),
        outputPath: 'SourceAccessConfigurations',
        parameters: {
          UUID: this.__input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEventSourceMapping.SourceAccessConfigurations', props);
    return resource.getResponseField('SourceAccessConfigurations') as unknown as shapes.LambdaSourceAccessConfiguration[];
  }

  public get selfManagedEventSource(): LambdaResponsesDeleteEventSourceMappingSelfManagedEventSource {
    return new LambdaResponsesDeleteEventSourceMappingSelfManagedEventSource(this.__scope, this.__resources, this.__input);
  }

  public get maximumRecordAgeInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.DeleteEventSourceMapping.MaximumRecordAgeInSeconds'),
        outputPath: 'MaximumRecordAgeInSeconds',
        parameters: {
          UUID: this.__input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEventSourceMapping.MaximumRecordAgeInSeconds', props);
    return resource.getResponseField('MaximumRecordAgeInSeconds') as unknown as number;
  }

  public get bisectBatchOnFunctionError(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.DeleteEventSourceMapping.BisectBatchOnFunctionError'),
        outputPath: 'BisectBatchOnFunctionError',
        parameters: {
          UUID: this.__input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEventSourceMapping.BisectBatchOnFunctionError', props);
    return resource.getResponseField('BisectBatchOnFunctionError') as unknown as boolean;
  }

  public get maximumRetryAttempts(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.DeleteEventSourceMapping.MaximumRetryAttempts'),
        outputPath: 'MaximumRetryAttempts',
        parameters: {
          UUID: this.__input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEventSourceMapping.MaximumRetryAttempts', props);
    return resource.getResponseField('MaximumRetryAttempts') as unknown as number;
  }

  public get tumblingWindowInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.DeleteEventSourceMapping.TumblingWindowInSeconds'),
        outputPath: 'TumblingWindowInSeconds',
        parameters: {
          UUID: this.__input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEventSourceMapping.TumblingWindowInSeconds', props);
    return resource.getResponseField('TumblingWindowInSeconds') as unknown as number;
  }

  public get functionResponseTypes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.DeleteEventSourceMapping.FunctionResponseTypes'),
        outputPath: 'FunctionResponseTypes',
        parameters: {
          UUID: this.__input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEventSourceMapping.FunctionResponseTypes', props);
    return resource.getResponseField('FunctionResponseTypes') as unknown as string[];
  }

}

export class LambdaResponsesDeleteEventSourceMappingDestinationConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaDeleteEventSourceMappingRequest) {
  }

  public get onSuccess(): LambdaResponsesDeleteEventSourceMappingDestinationConfigOnSuccess {
    return new LambdaResponsesDeleteEventSourceMappingDestinationConfigOnSuccess(this.__scope, this.__resources, this.__input);
  }

  public get onFailure(): LambdaResponsesDeleteEventSourceMappingDestinationConfigOnFailure {
    return new LambdaResponsesDeleteEventSourceMappingDestinationConfigOnFailure(this.__scope, this.__resources, this.__input);
  }

}

export class LambdaResponsesDeleteEventSourceMappingDestinationConfigOnSuccess {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaDeleteEventSourceMappingRequest) {
  }

  public get destination(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.DeleteEventSourceMapping.DestinationConfig.OnSuccess.Destination'),
        outputPath: 'DestinationConfig.OnSuccess.Destination',
        parameters: {
          UUID: this.__input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEventSourceMapping.DestinationConfig.OnSuccess.Destination', props);
    return resource.getResponseField('DestinationConfig.OnSuccess.Destination') as unknown as string;
  }

}

export class LambdaResponsesDeleteEventSourceMappingDestinationConfigOnFailure {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaDeleteEventSourceMappingRequest) {
  }

  public get destination(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.DeleteEventSourceMapping.DestinationConfig.OnFailure.Destination'),
        outputPath: 'DestinationConfig.OnFailure.Destination',
        parameters: {
          UUID: this.__input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEventSourceMapping.DestinationConfig.OnFailure.Destination', props);
    return resource.getResponseField('DestinationConfig.OnFailure.Destination') as unknown as string;
  }

}

export class LambdaResponsesDeleteEventSourceMappingSelfManagedEventSource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaDeleteEventSourceMappingRequest) {
  }

  public get endpoints(): Record<string, string[]> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.DeleteEventSourceMapping.SelfManagedEventSource.Endpoints'),
        outputPath: 'SelfManagedEventSource.Endpoints',
        parameters: {
          UUID: this.__input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEventSourceMapping.SelfManagedEventSource.Endpoints', props);
    return resource.getResponseField('SelfManagedEventSource.Endpoints') as unknown as Record<string, string[]>;
  }

}

export class LambdaResponsesFetchAccountSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get accountLimit(): LambdaResponsesFetchAccountSettingsAccountLimit {
    return new LambdaResponsesFetchAccountSettingsAccountLimit(this.__scope, this.__resources);
  }

  public get accountUsage(): LambdaResponsesFetchAccountSettingsAccountUsage {
    return new LambdaResponsesFetchAccountSettingsAccountUsage(this.__scope, this.__resources);
  }

}

export class LambdaResponsesFetchAccountSettingsAccountLimit {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get totalCodeSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccountSettings',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetAccountSettings.AccountLimit.TotalCodeSize'),
        outputPath: 'AccountLimit.TotalCodeSize',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccountSettings.AccountLimit.TotalCodeSize', props);
    return resource.getResponseField('AccountLimit.TotalCodeSize') as unknown as number;
  }

  public get codeSizeUnzipped(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccountSettings',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetAccountSettings.AccountLimit.CodeSizeUnzipped'),
        outputPath: 'AccountLimit.CodeSizeUnzipped',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccountSettings.AccountLimit.CodeSizeUnzipped', props);
    return resource.getResponseField('AccountLimit.CodeSizeUnzipped') as unknown as number;
  }

  public get codeSizeZipped(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccountSettings',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetAccountSettings.AccountLimit.CodeSizeZipped'),
        outputPath: 'AccountLimit.CodeSizeZipped',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccountSettings.AccountLimit.CodeSizeZipped', props);
    return resource.getResponseField('AccountLimit.CodeSizeZipped') as unknown as number;
  }

  public get concurrentExecutions(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccountSettings',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetAccountSettings.AccountLimit.ConcurrentExecutions'),
        outputPath: 'AccountLimit.ConcurrentExecutions',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccountSettings.AccountLimit.ConcurrentExecutions', props);
    return resource.getResponseField('AccountLimit.ConcurrentExecutions') as unknown as number;
  }

  public get unreservedConcurrentExecutions(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccountSettings',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetAccountSettings.AccountLimit.UnreservedConcurrentExecutions'),
        outputPath: 'AccountLimit.UnreservedConcurrentExecutions',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccountSettings.AccountLimit.UnreservedConcurrentExecutions', props);
    return resource.getResponseField('AccountLimit.UnreservedConcurrentExecutions') as unknown as number;
  }

}

export class LambdaResponsesFetchAccountSettingsAccountUsage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get totalCodeSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccountSettings',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetAccountSettings.AccountUsage.TotalCodeSize'),
        outputPath: 'AccountUsage.TotalCodeSize',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccountSettings.AccountUsage.TotalCodeSize', props);
    return resource.getResponseField('AccountUsage.TotalCodeSize') as unknown as number;
  }

  public get functionCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccountSettings',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetAccountSettings.AccountUsage.FunctionCount'),
        outputPath: 'AccountUsage.FunctionCount',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccountSettings.AccountUsage.FunctionCount', props);
    return resource.getResponseField('AccountUsage.FunctionCount') as unknown as number;
  }

}

export class LambdaResponsesFetchAlias {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaGetAliasRequest) {
  }

  public get aliasArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAlias',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetAlias.AliasArn'),
        outputPath: 'AliasArn',
        parameters: {
          FunctionName: this.__input.functionName,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAlias.AliasArn', props);
    return resource.getResponseField('AliasArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAlias',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetAlias.Name'),
        outputPath: 'Name',
        parameters: {
          FunctionName: this.__input.functionName,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAlias.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get functionVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAlias',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetAlias.FunctionVersion'),
        outputPath: 'FunctionVersion',
        parameters: {
          FunctionName: this.__input.functionName,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAlias.FunctionVersion', props);
    return resource.getResponseField('FunctionVersion') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAlias',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetAlias.Description'),
        outputPath: 'Description',
        parameters: {
          FunctionName: this.__input.functionName,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAlias.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get routingConfig(): LambdaResponsesFetchAliasRoutingConfig {
    return new LambdaResponsesFetchAliasRoutingConfig(this.__scope, this.__resources, this.__input);
  }

  public get revisionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAlias',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetAlias.RevisionId'),
        outputPath: 'RevisionId',
        parameters: {
          FunctionName: this.__input.functionName,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAlias.RevisionId', props);
    return resource.getResponseField('RevisionId') as unknown as string;
  }

}

export class LambdaResponsesFetchAliasRoutingConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaGetAliasRequest) {
  }

  public get additionalVersionWeights(): Record<string, number> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAlias',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetAlias.RoutingConfig.AdditionalVersionWeights'),
        outputPath: 'RoutingConfig.AdditionalVersionWeights',
        parameters: {
          FunctionName: this.__input.functionName,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAlias.RoutingConfig.AdditionalVersionWeights', props);
    return resource.getResponseField('RoutingConfig.AdditionalVersionWeights') as unknown as Record<string, number>;
  }

}

export class LambdaResponsesFetchCodeSigningConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaGetCodeSigningConfigRequest) {
  }

  public get codeSigningConfig(): LambdaResponsesFetchCodeSigningConfigCodeSigningConfig {
    return new LambdaResponsesFetchCodeSigningConfigCodeSigningConfig(this.__scope, this.__resources, this.__input);
  }

}

export class LambdaResponsesFetchCodeSigningConfigCodeSigningConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaGetCodeSigningConfigRequest) {
  }

  public get codeSigningConfigId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCodeSigningConfig',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetCodeSigningConfig.CodeSigningConfig.CodeSigningConfigId'),
        outputPath: 'CodeSigningConfig.CodeSigningConfigId',
        parameters: {
          CodeSigningConfigArn: this.__input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCodeSigningConfig.CodeSigningConfig.CodeSigningConfigId', props);
    return resource.getResponseField('CodeSigningConfig.CodeSigningConfigId') as unknown as string;
  }

  public get codeSigningConfigArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCodeSigningConfig',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetCodeSigningConfig.CodeSigningConfig.CodeSigningConfigArn'),
        outputPath: 'CodeSigningConfig.CodeSigningConfigArn',
        parameters: {
          CodeSigningConfigArn: this.__input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCodeSigningConfig.CodeSigningConfig.CodeSigningConfigArn', props);
    return resource.getResponseField('CodeSigningConfig.CodeSigningConfigArn') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCodeSigningConfig',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetCodeSigningConfig.CodeSigningConfig.Description'),
        outputPath: 'CodeSigningConfig.Description',
        parameters: {
          CodeSigningConfigArn: this.__input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCodeSigningConfig.CodeSigningConfig.Description', props);
    return resource.getResponseField('CodeSigningConfig.Description') as unknown as string;
  }

  public get allowedPublishers(): LambdaResponsesFetchCodeSigningConfigCodeSigningConfigAllowedPublishers {
    return new LambdaResponsesFetchCodeSigningConfigCodeSigningConfigAllowedPublishers(this.__scope, this.__resources, this.__input);
  }

  public get codeSigningPolicies(): LambdaResponsesFetchCodeSigningConfigCodeSigningConfigCodeSigningPolicies {
    return new LambdaResponsesFetchCodeSigningConfigCodeSigningConfigCodeSigningPolicies(this.__scope, this.__resources, this.__input);
  }

  public get lastModified(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCodeSigningConfig',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetCodeSigningConfig.CodeSigningConfig.LastModified'),
        outputPath: 'CodeSigningConfig.LastModified',
        parameters: {
          CodeSigningConfigArn: this.__input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCodeSigningConfig.CodeSigningConfig.LastModified', props);
    return resource.getResponseField('CodeSigningConfig.LastModified') as unknown as string;
  }

}

export class LambdaResponsesFetchCodeSigningConfigCodeSigningConfigAllowedPublishers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaGetCodeSigningConfigRequest) {
  }

  public get signingProfileVersionArns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCodeSigningConfig',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetCodeSigningConfig.CodeSigningConfig.AllowedPublishers.SigningProfileVersionArns'),
        outputPath: 'CodeSigningConfig.AllowedPublishers.SigningProfileVersionArns',
        parameters: {
          CodeSigningConfigArn: this.__input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCodeSigningConfig.CodeSigningConfig.AllowedPublishers.SigningProfileVersionArns', props);
    return resource.getResponseField('CodeSigningConfig.AllowedPublishers.SigningProfileVersionArns') as unknown as string[];
  }

}

export class LambdaResponsesFetchCodeSigningConfigCodeSigningConfigCodeSigningPolicies {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaGetCodeSigningConfigRequest) {
  }

  public get untrustedArtifactOnDeployment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCodeSigningConfig',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetCodeSigningConfig.CodeSigningConfig.CodeSigningPolicies.UntrustedArtifactOnDeployment'),
        outputPath: 'CodeSigningConfig.CodeSigningPolicies.UntrustedArtifactOnDeployment',
        parameters: {
          CodeSigningConfigArn: this.__input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCodeSigningConfig.CodeSigningConfig.CodeSigningPolicies.UntrustedArtifactOnDeployment', props);
    return resource.getResponseField('CodeSigningConfig.CodeSigningPolicies.UntrustedArtifactOnDeployment') as unknown as string;
  }

}

export class LambdaResponsesFetchEventSourceMapping {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaGetEventSourceMappingRequest) {
  }

  public get uuid(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetEventSourceMapping.UUID'),
        outputPath: 'UUID',
        parameters: {
          UUID: this.__input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEventSourceMapping.UUID', props);
    return resource.getResponseField('UUID') as unknown as string;
  }

  public get startingPosition(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetEventSourceMapping.StartingPosition'),
        outputPath: 'StartingPosition',
        parameters: {
          UUID: this.__input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEventSourceMapping.StartingPosition', props);
    return resource.getResponseField('StartingPosition') as unknown as string;
  }

  public get startingPositionTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetEventSourceMapping.StartingPositionTimestamp'),
        outputPath: 'StartingPositionTimestamp',
        parameters: {
          UUID: this.__input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEventSourceMapping.StartingPositionTimestamp', props);
    return resource.getResponseField('StartingPositionTimestamp') as unknown as string;
  }

  public get batchSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetEventSourceMapping.BatchSize'),
        outputPath: 'BatchSize',
        parameters: {
          UUID: this.__input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEventSourceMapping.BatchSize', props);
    return resource.getResponseField('BatchSize') as unknown as number;
  }

  public get maximumBatchingWindowInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetEventSourceMapping.MaximumBatchingWindowInSeconds'),
        outputPath: 'MaximumBatchingWindowInSeconds',
        parameters: {
          UUID: this.__input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEventSourceMapping.MaximumBatchingWindowInSeconds', props);
    return resource.getResponseField('MaximumBatchingWindowInSeconds') as unknown as number;
  }

  public get parallelizationFactor(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetEventSourceMapping.ParallelizationFactor'),
        outputPath: 'ParallelizationFactor',
        parameters: {
          UUID: this.__input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEventSourceMapping.ParallelizationFactor', props);
    return resource.getResponseField('ParallelizationFactor') as unknown as number;
  }

  public get eventSourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetEventSourceMapping.EventSourceArn'),
        outputPath: 'EventSourceArn',
        parameters: {
          UUID: this.__input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEventSourceMapping.EventSourceArn', props);
    return resource.getResponseField('EventSourceArn') as unknown as string;
  }

  public get functionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetEventSourceMapping.FunctionArn'),
        outputPath: 'FunctionArn',
        parameters: {
          UUID: this.__input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEventSourceMapping.FunctionArn', props);
    return resource.getResponseField('FunctionArn') as unknown as string;
  }

  public get lastModified(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetEventSourceMapping.LastModified'),
        outputPath: 'LastModified',
        parameters: {
          UUID: this.__input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEventSourceMapping.LastModified', props);
    return resource.getResponseField('LastModified') as unknown as string;
  }

  public get lastProcessingResult(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetEventSourceMapping.LastProcessingResult'),
        outputPath: 'LastProcessingResult',
        parameters: {
          UUID: this.__input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEventSourceMapping.LastProcessingResult', props);
    return resource.getResponseField('LastProcessingResult') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetEventSourceMapping.State'),
        outputPath: 'State',
        parameters: {
          UUID: this.__input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEventSourceMapping.State', props);
    return resource.getResponseField('State') as unknown as string;
  }

  public get stateTransitionReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetEventSourceMapping.StateTransitionReason'),
        outputPath: 'StateTransitionReason',
        parameters: {
          UUID: this.__input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEventSourceMapping.StateTransitionReason', props);
    return resource.getResponseField('StateTransitionReason') as unknown as string;
  }

  public get destinationConfig(): LambdaResponsesFetchEventSourceMappingDestinationConfig {
    return new LambdaResponsesFetchEventSourceMappingDestinationConfig(this.__scope, this.__resources, this.__input);
  }

  public get topics(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetEventSourceMapping.Topics'),
        outputPath: 'Topics',
        parameters: {
          UUID: this.__input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEventSourceMapping.Topics', props);
    return resource.getResponseField('Topics') as unknown as string[];
  }

  public get queues(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetEventSourceMapping.Queues'),
        outputPath: 'Queues',
        parameters: {
          UUID: this.__input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEventSourceMapping.Queues', props);
    return resource.getResponseField('Queues') as unknown as string[];
  }

  public get sourceAccessConfigurations(): shapes.LambdaSourceAccessConfiguration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetEventSourceMapping.SourceAccessConfigurations'),
        outputPath: 'SourceAccessConfigurations',
        parameters: {
          UUID: this.__input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEventSourceMapping.SourceAccessConfigurations', props);
    return resource.getResponseField('SourceAccessConfigurations') as unknown as shapes.LambdaSourceAccessConfiguration[];
  }

  public get selfManagedEventSource(): LambdaResponsesFetchEventSourceMappingSelfManagedEventSource {
    return new LambdaResponsesFetchEventSourceMappingSelfManagedEventSource(this.__scope, this.__resources, this.__input);
  }

  public get maximumRecordAgeInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetEventSourceMapping.MaximumRecordAgeInSeconds'),
        outputPath: 'MaximumRecordAgeInSeconds',
        parameters: {
          UUID: this.__input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEventSourceMapping.MaximumRecordAgeInSeconds', props);
    return resource.getResponseField('MaximumRecordAgeInSeconds') as unknown as number;
  }

  public get bisectBatchOnFunctionError(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetEventSourceMapping.BisectBatchOnFunctionError'),
        outputPath: 'BisectBatchOnFunctionError',
        parameters: {
          UUID: this.__input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEventSourceMapping.BisectBatchOnFunctionError', props);
    return resource.getResponseField('BisectBatchOnFunctionError') as unknown as boolean;
  }

  public get maximumRetryAttempts(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetEventSourceMapping.MaximumRetryAttempts'),
        outputPath: 'MaximumRetryAttempts',
        parameters: {
          UUID: this.__input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEventSourceMapping.MaximumRetryAttempts', props);
    return resource.getResponseField('MaximumRetryAttempts') as unknown as number;
  }

  public get tumblingWindowInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetEventSourceMapping.TumblingWindowInSeconds'),
        outputPath: 'TumblingWindowInSeconds',
        parameters: {
          UUID: this.__input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEventSourceMapping.TumblingWindowInSeconds', props);
    return resource.getResponseField('TumblingWindowInSeconds') as unknown as number;
  }

  public get functionResponseTypes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetEventSourceMapping.FunctionResponseTypes'),
        outputPath: 'FunctionResponseTypes',
        parameters: {
          UUID: this.__input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEventSourceMapping.FunctionResponseTypes', props);
    return resource.getResponseField('FunctionResponseTypes') as unknown as string[];
  }

}

export class LambdaResponsesFetchEventSourceMappingDestinationConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaGetEventSourceMappingRequest) {
  }

  public get onSuccess(): LambdaResponsesFetchEventSourceMappingDestinationConfigOnSuccess {
    return new LambdaResponsesFetchEventSourceMappingDestinationConfigOnSuccess(this.__scope, this.__resources, this.__input);
  }

  public get onFailure(): LambdaResponsesFetchEventSourceMappingDestinationConfigOnFailure {
    return new LambdaResponsesFetchEventSourceMappingDestinationConfigOnFailure(this.__scope, this.__resources, this.__input);
  }

}

export class LambdaResponsesFetchEventSourceMappingDestinationConfigOnSuccess {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaGetEventSourceMappingRequest) {
  }

  public get destination(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetEventSourceMapping.DestinationConfig.OnSuccess.Destination'),
        outputPath: 'DestinationConfig.OnSuccess.Destination',
        parameters: {
          UUID: this.__input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEventSourceMapping.DestinationConfig.OnSuccess.Destination', props);
    return resource.getResponseField('DestinationConfig.OnSuccess.Destination') as unknown as string;
  }

}

export class LambdaResponsesFetchEventSourceMappingDestinationConfigOnFailure {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaGetEventSourceMappingRequest) {
  }

  public get destination(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetEventSourceMapping.DestinationConfig.OnFailure.Destination'),
        outputPath: 'DestinationConfig.OnFailure.Destination',
        parameters: {
          UUID: this.__input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEventSourceMapping.DestinationConfig.OnFailure.Destination', props);
    return resource.getResponseField('DestinationConfig.OnFailure.Destination') as unknown as string;
  }

}

export class LambdaResponsesFetchEventSourceMappingSelfManagedEventSource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaGetEventSourceMappingRequest) {
  }

  public get endpoints(): Record<string, string[]> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetEventSourceMapping.SelfManagedEventSource.Endpoints'),
        outputPath: 'SelfManagedEventSource.Endpoints',
        parameters: {
          UUID: this.__input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEventSourceMapping.SelfManagedEventSource.Endpoints', props);
    return resource.getResponseField('SelfManagedEventSource.Endpoints') as unknown as Record<string, string[]>;
  }

}

export class LambdaResponsesFetchFunction {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaGetFunctionRequest) {
  }

  public get configuration(): LambdaResponsesFetchFunctionConfiguration {
    return new LambdaResponsesFetchFunctionConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get code(): LambdaResponsesFetchFunctionCode {
    return new LambdaResponsesFetchFunctionCode(this.__scope, this.__resources, this.__input);
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunction',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetFunction.Tags'),
        outputPath: 'Tags',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunction.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

  public get concurrency(): LambdaResponsesFetchFunctionConcurrency {
    return new LambdaResponsesFetchFunctionConcurrency(this.__scope, this.__resources, this.__input);
  }

}

export class LambdaResponsesFetchFunctionCode {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaGetFunctionRequest) {
  }

  public get repositoryType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunction',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetFunction.Code.RepositoryType'),
        outputPath: 'Code.RepositoryType',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunction.Code.RepositoryType', props);
    return resource.getResponseField('Code.RepositoryType') as unknown as string;
  }

  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunction',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetFunction.Code.Location'),
        outputPath: 'Code.Location',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunction.Code.Location', props);
    return resource.getResponseField('Code.Location') as unknown as string;
  }

  public get imageUri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunction',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetFunction.Code.ImageUri'),
        outputPath: 'Code.ImageUri',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunction.Code.ImageUri', props);
    return resource.getResponseField('Code.ImageUri') as unknown as string;
  }

  public get resolvedImageUri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunction',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetFunction.Code.ResolvedImageUri'),
        outputPath: 'Code.ResolvedImageUri',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunction.Code.ResolvedImageUri', props);
    return resource.getResponseField('Code.ResolvedImageUri') as unknown as string;
  }

}

export class LambdaResponsesFetchFunctionCodeSigningConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaGetFunctionCodeSigningConfigRequest) {
  }

  public get codeSigningConfigArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunctionCodeSigningConfig',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetFunctionCodeSigningConfig.CodeSigningConfigArn'),
        outputPath: 'CodeSigningConfigArn',
        parameters: {
          FunctionName: this.__input.functionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunctionCodeSigningConfig.CodeSigningConfigArn', props);
    return resource.getResponseField('CodeSigningConfigArn') as unknown as string;
  }

  public get functionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunctionCodeSigningConfig',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetFunctionCodeSigningConfig.FunctionName'),
        outputPath: 'FunctionName',
        parameters: {
          FunctionName: this.__input.functionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunctionCodeSigningConfig.FunctionName', props);
    return resource.getResponseField('FunctionName') as unknown as string;
  }

}

export class LambdaResponsesFetchFunctionConcurrency {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaGetFunctionConcurrencyRequest) {
  }

  public get reservedConcurrentExecutions(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunctionConcurrency',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetFunctionConcurrency.ReservedConcurrentExecutions'),
        outputPath: 'ReservedConcurrentExecutions',
        parameters: {
          FunctionName: this.__input.functionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunctionConcurrency.ReservedConcurrentExecutions', props);
    return resource.getResponseField('ReservedConcurrentExecutions') as unknown as number;
  }

}

export class LambdaResponsesFetchFunctionConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaGetFunctionConfigurationRequest) {
  }

  public get functionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetFunctionConfiguration.FunctionName'),
        outputPath: 'FunctionName',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunctionConfiguration.FunctionName', props);
    return resource.getResponseField('FunctionName') as unknown as string;
  }

  public get functionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetFunctionConfiguration.FunctionArn'),
        outputPath: 'FunctionArn',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunctionConfiguration.FunctionArn', props);
    return resource.getResponseField('FunctionArn') as unknown as string;
  }

  public get runtime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetFunctionConfiguration.Runtime'),
        outputPath: 'Runtime',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunctionConfiguration.Runtime', props);
    return resource.getResponseField('Runtime') as unknown as string;
  }

  public get role(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetFunctionConfiguration.Role'),
        outputPath: 'Role',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunctionConfiguration.Role', props);
    return resource.getResponseField('Role') as unknown as string;
  }

  public get handler(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetFunctionConfiguration.Handler'),
        outputPath: 'Handler',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunctionConfiguration.Handler', props);
    return resource.getResponseField('Handler') as unknown as string;
  }

  public get codeSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetFunctionConfiguration.CodeSize'),
        outputPath: 'CodeSize',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunctionConfiguration.CodeSize', props);
    return resource.getResponseField('CodeSize') as unknown as number;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetFunctionConfiguration.Description'),
        outputPath: 'Description',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunctionConfiguration.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get timeout(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetFunctionConfiguration.Timeout'),
        outputPath: 'Timeout',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunctionConfiguration.Timeout', props);
    return resource.getResponseField('Timeout') as unknown as number;
  }

  public get memorySize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetFunctionConfiguration.MemorySize'),
        outputPath: 'MemorySize',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunctionConfiguration.MemorySize', props);
    return resource.getResponseField('MemorySize') as unknown as number;
  }

  public get lastModified(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetFunctionConfiguration.LastModified'),
        outputPath: 'LastModified',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunctionConfiguration.LastModified', props);
    return resource.getResponseField('LastModified') as unknown as string;
  }

  public get codeSha256(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetFunctionConfiguration.CodeSha256'),
        outputPath: 'CodeSha256',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunctionConfiguration.CodeSha256', props);
    return resource.getResponseField('CodeSha256') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetFunctionConfiguration.Version'),
        outputPath: 'Version',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunctionConfiguration.Version', props);
    return resource.getResponseField('Version') as unknown as string;
  }

  public get vpcConfig(): LambdaResponsesFetchFunctionConfigurationVpcConfig {
    return new LambdaResponsesFetchFunctionConfigurationVpcConfig(this.__scope, this.__resources, this.__input);
  }

  public get deadLetterConfig(): LambdaResponsesFetchFunctionConfigurationDeadLetterConfig {
    return new LambdaResponsesFetchFunctionConfigurationDeadLetterConfig(this.__scope, this.__resources, this.__input);
  }

  public get environment(): LambdaResponsesFetchFunctionConfigurationEnvironment {
    return new LambdaResponsesFetchFunctionConfigurationEnvironment(this.__scope, this.__resources, this.__input);
  }

  public get kmsKeyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetFunctionConfiguration.KMSKeyArn'),
        outputPath: 'KMSKeyArn',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunctionConfiguration.KMSKeyArn', props);
    return resource.getResponseField('KMSKeyArn') as unknown as string;
  }

  public get tracingConfig(): LambdaResponsesFetchFunctionConfigurationTracingConfig {
    return new LambdaResponsesFetchFunctionConfigurationTracingConfig(this.__scope, this.__resources, this.__input);
  }

  public get masterArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetFunctionConfiguration.MasterArn'),
        outputPath: 'MasterArn',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunctionConfiguration.MasterArn', props);
    return resource.getResponseField('MasterArn') as unknown as string;
  }

  public get revisionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetFunctionConfiguration.RevisionId'),
        outputPath: 'RevisionId',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunctionConfiguration.RevisionId', props);
    return resource.getResponseField('RevisionId') as unknown as string;
  }

  public get layers(): shapes.LambdaLayer[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetFunctionConfiguration.Layers'),
        outputPath: 'Layers',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunctionConfiguration.Layers', props);
    return resource.getResponseField('Layers') as unknown as shapes.LambdaLayer[];
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetFunctionConfiguration.State'),
        outputPath: 'State',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunctionConfiguration.State', props);
    return resource.getResponseField('State') as unknown as string;
  }

  public get stateReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetFunctionConfiguration.StateReason'),
        outputPath: 'StateReason',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunctionConfiguration.StateReason', props);
    return resource.getResponseField('StateReason') as unknown as string;
  }

  public get stateReasonCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetFunctionConfiguration.StateReasonCode'),
        outputPath: 'StateReasonCode',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunctionConfiguration.StateReasonCode', props);
    return resource.getResponseField('StateReasonCode') as unknown as string;
  }

  public get lastUpdateStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetFunctionConfiguration.LastUpdateStatus'),
        outputPath: 'LastUpdateStatus',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunctionConfiguration.LastUpdateStatus', props);
    return resource.getResponseField('LastUpdateStatus') as unknown as string;
  }

  public get lastUpdateStatusReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetFunctionConfiguration.LastUpdateStatusReason'),
        outputPath: 'LastUpdateStatusReason',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunctionConfiguration.LastUpdateStatusReason', props);
    return resource.getResponseField('LastUpdateStatusReason') as unknown as string;
  }

  public get lastUpdateStatusReasonCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetFunctionConfiguration.LastUpdateStatusReasonCode'),
        outputPath: 'LastUpdateStatusReasonCode',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunctionConfiguration.LastUpdateStatusReasonCode', props);
    return resource.getResponseField('LastUpdateStatusReasonCode') as unknown as string;
  }

  public get fileSystemConfigs(): shapes.LambdaFileSystemConfig[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetFunctionConfiguration.FileSystemConfigs'),
        outputPath: 'FileSystemConfigs',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunctionConfiguration.FileSystemConfigs', props);
    return resource.getResponseField('FileSystemConfigs') as unknown as shapes.LambdaFileSystemConfig[];
  }

  public get packageType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetFunctionConfiguration.PackageType'),
        outputPath: 'PackageType',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunctionConfiguration.PackageType', props);
    return resource.getResponseField('PackageType') as unknown as string;
  }

  public get imageConfigResponse(): LambdaResponsesFetchFunctionConfigurationImageConfigResponse {
    return new LambdaResponsesFetchFunctionConfigurationImageConfigResponse(this.__scope, this.__resources, this.__input);
  }

  public get signingProfileVersionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetFunctionConfiguration.SigningProfileVersionArn'),
        outputPath: 'SigningProfileVersionArn',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunctionConfiguration.SigningProfileVersionArn', props);
    return resource.getResponseField('SigningProfileVersionArn') as unknown as string;
  }

  public get signingJobArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetFunctionConfiguration.SigningJobArn'),
        outputPath: 'SigningJobArn',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunctionConfiguration.SigningJobArn', props);
    return resource.getResponseField('SigningJobArn') as unknown as string;
  }

}

export class LambdaResponsesFetchFunctionConfigurationVpcConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaGetFunctionConfigurationRequest) {
  }

  public get subnetIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetFunctionConfiguration.VpcConfig.SubnetIds'),
        outputPath: 'VpcConfig.SubnetIds',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunctionConfiguration.VpcConfig.SubnetIds', props);
    return resource.getResponseField('VpcConfig.SubnetIds') as unknown as string[];
  }

  public get securityGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetFunctionConfiguration.VpcConfig.SecurityGroupIds'),
        outputPath: 'VpcConfig.SecurityGroupIds',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunctionConfiguration.VpcConfig.SecurityGroupIds', props);
    return resource.getResponseField('VpcConfig.SecurityGroupIds') as unknown as string[];
  }

  public get vpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetFunctionConfiguration.VpcConfig.VpcId'),
        outputPath: 'VpcConfig.VpcId',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunctionConfiguration.VpcConfig.VpcId', props);
    return resource.getResponseField('VpcConfig.VpcId') as unknown as string;
  }

}

export class LambdaResponsesFetchFunctionConfigurationDeadLetterConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaGetFunctionConfigurationRequest) {
  }

  public get targetArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetFunctionConfiguration.DeadLetterConfig.TargetArn'),
        outputPath: 'DeadLetterConfig.TargetArn',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunctionConfiguration.DeadLetterConfig.TargetArn', props);
    return resource.getResponseField('DeadLetterConfig.TargetArn') as unknown as string;
  }

}

export class LambdaResponsesFetchFunctionConfigurationEnvironment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaGetFunctionConfigurationRequest) {
  }

  public get variables(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetFunctionConfiguration.Environment.Variables'),
        outputPath: 'Environment.Variables',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunctionConfiguration.Environment.Variables', props);
    return resource.getResponseField('Environment.Variables') as unknown as Record<string, string>;
  }

  public get error(): LambdaResponsesFetchFunctionConfigurationEnvironmentError {
    return new LambdaResponsesFetchFunctionConfigurationEnvironmentError(this.__scope, this.__resources, this.__input);
  }

}

export class LambdaResponsesFetchFunctionConfigurationEnvironmentError {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaGetFunctionConfigurationRequest) {
  }

  public get errorCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetFunctionConfiguration.Environment.Error.ErrorCode'),
        outputPath: 'Environment.Error.ErrorCode',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunctionConfiguration.Environment.Error.ErrorCode', props);
    return resource.getResponseField('Environment.Error.ErrorCode') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetFunctionConfiguration.Environment.Error.Message'),
        outputPath: 'Environment.Error.Message',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunctionConfiguration.Environment.Error.Message', props);
    return resource.getResponseField('Environment.Error.Message') as unknown as string;
  }

}

export class LambdaResponsesFetchFunctionConfigurationTracingConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaGetFunctionConfigurationRequest) {
  }

  public get mode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetFunctionConfiguration.TracingConfig.Mode'),
        outputPath: 'TracingConfig.Mode',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunctionConfiguration.TracingConfig.Mode', props);
    return resource.getResponseField('TracingConfig.Mode') as unknown as string;
  }

}

export class LambdaResponsesFetchFunctionConfigurationImageConfigResponse {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaGetFunctionConfigurationRequest) {
  }

  public get imageConfig(): LambdaResponsesFetchFunctionConfigurationImageConfigResponseImageConfig {
    return new LambdaResponsesFetchFunctionConfigurationImageConfigResponseImageConfig(this.__scope, this.__resources, this.__input);
  }

  public get error(): LambdaResponsesFetchFunctionConfigurationImageConfigResponseError {
    return new LambdaResponsesFetchFunctionConfigurationImageConfigResponseError(this.__scope, this.__resources, this.__input);
  }

}

export class LambdaResponsesFetchFunctionConfigurationImageConfigResponseImageConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaGetFunctionConfigurationRequest) {
  }

  public get entryPoint(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetFunctionConfiguration.ImageConfigResponse.ImageConfig.EntryPoint'),
        outputPath: 'ImageConfigResponse.ImageConfig.EntryPoint',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunctionConfiguration.ImageConfigResponse.ImageConfig.EntryPoint', props);
    return resource.getResponseField('ImageConfigResponse.ImageConfig.EntryPoint') as unknown as string[];
  }

  public get command(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetFunctionConfiguration.ImageConfigResponse.ImageConfig.Command'),
        outputPath: 'ImageConfigResponse.ImageConfig.Command',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunctionConfiguration.ImageConfigResponse.ImageConfig.Command', props);
    return resource.getResponseField('ImageConfigResponse.ImageConfig.Command') as unknown as string[];
  }

  public get workingDirectory(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetFunctionConfiguration.ImageConfigResponse.ImageConfig.WorkingDirectory'),
        outputPath: 'ImageConfigResponse.ImageConfig.WorkingDirectory',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunctionConfiguration.ImageConfigResponse.ImageConfig.WorkingDirectory', props);
    return resource.getResponseField('ImageConfigResponse.ImageConfig.WorkingDirectory') as unknown as string;
  }

}

export class LambdaResponsesFetchFunctionConfigurationImageConfigResponseError {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaGetFunctionConfigurationRequest) {
  }

  public get errorCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetFunctionConfiguration.ImageConfigResponse.Error.ErrorCode'),
        outputPath: 'ImageConfigResponse.Error.ErrorCode',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunctionConfiguration.ImageConfigResponse.Error.ErrorCode', props);
    return resource.getResponseField('ImageConfigResponse.Error.ErrorCode') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetFunctionConfiguration.ImageConfigResponse.Error.Message'),
        outputPath: 'ImageConfigResponse.Error.Message',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunctionConfiguration.ImageConfigResponse.Error.Message', props);
    return resource.getResponseField('ImageConfigResponse.Error.Message') as unknown as string;
  }

}

export class LambdaResponsesFetchFunctionEventInvokeConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaGetFunctionEventInvokeConfigRequest) {
  }

  public get lastModified(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunctionEventInvokeConfig',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetFunctionEventInvokeConfig.LastModified'),
        outputPath: 'LastModified',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunctionEventInvokeConfig.LastModified', props);
    return resource.getResponseField('LastModified') as unknown as string;
  }

  public get functionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunctionEventInvokeConfig',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetFunctionEventInvokeConfig.FunctionArn'),
        outputPath: 'FunctionArn',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunctionEventInvokeConfig.FunctionArn', props);
    return resource.getResponseField('FunctionArn') as unknown as string;
  }

  public get maximumRetryAttempts(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunctionEventInvokeConfig',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetFunctionEventInvokeConfig.MaximumRetryAttempts'),
        outputPath: 'MaximumRetryAttempts',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunctionEventInvokeConfig.MaximumRetryAttempts', props);
    return resource.getResponseField('MaximumRetryAttempts') as unknown as number;
  }

  public get maximumEventAgeInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunctionEventInvokeConfig',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetFunctionEventInvokeConfig.MaximumEventAgeInSeconds'),
        outputPath: 'MaximumEventAgeInSeconds',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunctionEventInvokeConfig.MaximumEventAgeInSeconds', props);
    return resource.getResponseField('MaximumEventAgeInSeconds') as unknown as number;
  }

  public get destinationConfig(): LambdaResponsesFetchFunctionEventInvokeConfigDestinationConfig {
    return new LambdaResponsesFetchFunctionEventInvokeConfigDestinationConfig(this.__scope, this.__resources, this.__input);
  }

}

export class LambdaResponsesFetchFunctionEventInvokeConfigDestinationConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaGetFunctionEventInvokeConfigRequest) {
  }

  public get onSuccess(): LambdaResponsesFetchFunctionEventInvokeConfigDestinationConfigOnSuccess {
    return new LambdaResponsesFetchFunctionEventInvokeConfigDestinationConfigOnSuccess(this.__scope, this.__resources, this.__input);
  }

  public get onFailure(): LambdaResponsesFetchFunctionEventInvokeConfigDestinationConfigOnFailure {
    return new LambdaResponsesFetchFunctionEventInvokeConfigDestinationConfigOnFailure(this.__scope, this.__resources, this.__input);
  }

}

export class LambdaResponsesFetchFunctionEventInvokeConfigDestinationConfigOnSuccess {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaGetFunctionEventInvokeConfigRequest) {
  }

  public get destination(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunctionEventInvokeConfig',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetFunctionEventInvokeConfig.DestinationConfig.OnSuccess.Destination'),
        outputPath: 'DestinationConfig.OnSuccess.Destination',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunctionEventInvokeConfig.DestinationConfig.OnSuccess.Destination', props);
    return resource.getResponseField('DestinationConfig.OnSuccess.Destination') as unknown as string;
  }

}

export class LambdaResponsesFetchFunctionEventInvokeConfigDestinationConfigOnFailure {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaGetFunctionEventInvokeConfigRequest) {
  }

  public get destination(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunctionEventInvokeConfig',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetFunctionEventInvokeConfig.DestinationConfig.OnFailure.Destination'),
        outputPath: 'DestinationConfig.OnFailure.Destination',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunctionEventInvokeConfig.DestinationConfig.OnFailure.Destination', props);
    return resource.getResponseField('DestinationConfig.OnFailure.Destination') as unknown as string;
  }

}

export class LambdaResponsesFetchLayerVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaGetLayerVersionRequest) {
  }

  public get content(): LambdaResponsesFetchLayerVersionContent {
    return new LambdaResponsesFetchLayerVersionContent(this.__scope, this.__resources, this.__input);
  }

  public get layerArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLayerVersion',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetLayerVersion.LayerArn'),
        outputPath: 'LayerArn',
        parameters: {
          LayerName: this.__input.layerName,
          VersionNumber: this.__input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLayerVersion.LayerArn', props);
    return resource.getResponseField('LayerArn') as unknown as string;
  }

  public get layerVersionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLayerVersion',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetLayerVersion.LayerVersionArn'),
        outputPath: 'LayerVersionArn',
        parameters: {
          LayerName: this.__input.layerName,
          VersionNumber: this.__input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLayerVersion.LayerVersionArn', props);
    return resource.getResponseField('LayerVersionArn') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLayerVersion',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetLayerVersion.Description'),
        outputPath: 'Description',
        parameters: {
          LayerName: this.__input.layerName,
          VersionNumber: this.__input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLayerVersion.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get createdDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLayerVersion',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetLayerVersion.CreatedDate'),
        outputPath: 'CreatedDate',
        parameters: {
          LayerName: this.__input.layerName,
          VersionNumber: this.__input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLayerVersion.CreatedDate', props);
    return resource.getResponseField('CreatedDate') as unknown as string;
  }

  public get version(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLayerVersion',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetLayerVersion.Version'),
        outputPath: 'Version',
        parameters: {
          LayerName: this.__input.layerName,
          VersionNumber: this.__input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLayerVersion.Version', props);
    return resource.getResponseField('Version') as unknown as number;
  }

  public get compatibleRuntimes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLayerVersion',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetLayerVersion.CompatibleRuntimes'),
        outputPath: 'CompatibleRuntimes',
        parameters: {
          LayerName: this.__input.layerName,
          VersionNumber: this.__input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLayerVersion.CompatibleRuntimes', props);
    return resource.getResponseField('CompatibleRuntimes') as unknown as string[];
  }

  public get licenseInfo(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLayerVersion',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetLayerVersion.LicenseInfo'),
        outputPath: 'LicenseInfo',
        parameters: {
          LayerName: this.__input.layerName,
          VersionNumber: this.__input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLayerVersion.LicenseInfo', props);
    return resource.getResponseField('LicenseInfo') as unknown as string;
  }

}

export class LambdaResponsesFetchLayerVersionContent {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaGetLayerVersionRequest) {
  }

  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLayerVersion',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetLayerVersion.Content.Location'),
        outputPath: 'Content.Location',
        parameters: {
          LayerName: this.__input.layerName,
          VersionNumber: this.__input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLayerVersion.Content.Location', props);
    return resource.getResponseField('Content.Location') as unknown as string;
  }

  public get codeSha256(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLayerVersion',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetLayerVersion.Content.CodeSha256'),
        outputPath: 'Content.CodeSha256',
        parameters: {
          LayerName: this.__input.layerName,
          VersionNumber: this.__input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLayerVersion.Content.CodeSha256', props);
    return resource.getResponseField('Content.CodeSha256') as unknown as string;
  }

  public get codeSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLayerVersion',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetLayerVersion.Content.CodeSize'),
        outputPath: 'Content.CodeSize',
        parameters: {
          LayerName: this.__input.layerName,
          VersionNumber: this.__input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLayerVersion.Content.CodeSize', props);
    return resource.getResponseField('Content.CodeSize') as unknown as number;
  }

  public get signingProfileVersionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLayerVersion',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetLayerVersion.Content.SigningProfileVersionArn'),
        outputPath: 'Content.SigningProfileVersionArn',
        parameters: {
          LayerName: this.__input.layerName,
          VersionNumber: this.__input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLayerVersion.Content.SigningProfileVersionArn', props);
    return resource.getResponseField('Content.SigningProfileVersionArn') as unknown as string;
  }

  public get signingJobArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLayerVersion',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetLayerVersion.Content.SigningJobArn'),
        outputPath: 'Content.SigningJobArn',
        parameters: {
          LayerName: this.__input.layerName,
          VersionNumber: this.__input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLayerVersion.Content.SigningJobArn', props);
    return resource.getResponseField('Content.SigningJobArn') as unknown as string;
  }

}

export class LambdaResponsesFetchLayerVersionByArn {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaGetLayerVersionByArnRequest) {
  }

  public get content(): LambdaResponsesFetchLayerVersionByArnContent {
    return new LambdaResponsesFetchLayerVersionByArnContent(this.__scope, this.__resources, this.__input);
  }

  public get layerArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLayerVersionByArn',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetLayerVersionByArn.LayerArn'),
        outputPath: 'LayerArn',
        parameters: {
          Arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLayerVersionByArn.LayerArn', props);
    return resource.getResponseField('LayerArn') as unknown as string;
  }

  public get layerVersionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLayerVersionByArn',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetLayerVersionByArn.LayerVersionArn'),
        outputPath: 'LayerVersionArn',
        parameters: {
          Arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLayerVersionByArn.LayerVersionArn', props);
    return resource.getResponseField('LayerVersionArn') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLayerVersionByArn',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetLayerVersionByArn.Description'),
        outputPath: 'Description',
        parameters: {
          Arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLayerVersionByArn.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get createdDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLayerVersionByArn',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetLayerVersionByArn.CreatedDate'),
        outputPath: 'CreatedDate',
        parameters: {
          Arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLayerVersionByArn.CreatedDate', props);
    return resource.getResponseField('CreatedDate') as unknown as string;
  }

  public get version(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLayerVersionByArn',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetLayerVersionByArn.Version'),
        outputPath: 'Version',
        parameters: {
          Arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLayerVersionByArn.Version', props);
    return resource.getResponseField('Version') as unknown as number;
  }

  public get compatibleRuntimes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLayerVersionByArn',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetLayerVersionByArn.CompatibleRuntimes'),
        outputPath: 'CompatibleRuntimes',
        parameters: {
          Arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLayerVersionByArn.CompatibleRuntimes', props);
    return resource.getResponseField('CompatibleRuntimes') as unknown as string[];
  }

  public get licenseInfo(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLayerVersionByArn',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetLayerVersionByArn.LicenseInfo'),
        outputPath: 'LicenseInfo',
        parameters: {
          Arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLayerVersionByArn.LicenseInfo', props);
    return resource.getResponseField('LicenseInfo') as unknown as string;
  }

}

export class LambdaResponsesFetchLayerVersionByArnContent {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaGetLayerVersionByArnRequest) {
  }

  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLayerVersionByArn',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetLayerVersionByArn.Content.Location'),
        outputPath: 'Content.Location',
        parameters: {
          Arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLayerVersionByArn.Content.Location', props);
    return resource.getResponseField('Content.Location') as unknown as string;
  }

  public get codeSha256(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLayerVersionByArn',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetLayerVersionByArn.Content.CodeSha256'),
        outputPath: 'Content.CodeSha256',
        parameters: {
          Arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLayerVersionByArn.Content.CodeSha256', props);
    return resource.getResponseField('Content.CodeSha256') as unknown as string;
  }

  public get codeSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLayerVersionByArn',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetLayerVersionByArn.Content.CodeSize'),
        outputPath: 'Content.CodeSize',
        parameters: {
          Arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLayerVersionByArn.Content.CodeSize', props);
    return resource.getResponseField('Content.CodeSize') as unknown as number;
  }

  public get signingProfileVersionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLayerVersionByArn',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetLayerVersionByArn.Content.SigningProfileVersionArn'),
        outputPath: 'Content.SigningProfileVersionArn',
        parameters: {
          Arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLayerVersionByArn.Content.SigningProfileVersionArn', props);
    return resource.getResponseField('Content.SigningProfileVersionArn') as unknown as string;
  }

  public get signingJobArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLayerVersionByArn',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetLayerVersionByArn.Content.SigningJobArn'),
        outputPath: 'Content.SigningJobArn',
        parameters: {
          Arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLayerVersionByArn.Content.SigningJobArn', props);
    return resource.getResponseField('Content.SigningJobArn') as unknown as string;
  }

}

export class LambdaResponsesFetchLayerVersionPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaGetLayerVersionPolicyRequest) {
  }

  public get policy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLayerVersionPolicy',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetLayerVersionPolicy.Policy'),
        outputPath: 'Policy',
        parameters: {
          LayerName: this.__input.layerName,
          VersionNumber: this.__input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLayerVersionPolicy.Policy', props);
    return resource.getResponseField('Policy') as unknown as string;
  }

  public get revisionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLayerVersionPolicy',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetLayerVersionPolicy.RevisionId'),
        outputPath: 'RevisionId',
        parameters: {
          LayerName: this.__input.layerName,
          VersionNumber: this.__input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLayerVersionPolicy.RevisionId', props);
    return resource.getResponseField('RevisionId') as unknown as string;
  }

}

export class LambdaResponsesFetchPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaGetPolicyRequest) {
  }

  public get policy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPolicy',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetPolicy.Policy'),
        outputPath: 'Policy',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPolicy.Policy', props);
    return resource.getResponseField('Policy') as unknown as string;
  }

  public get revisionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPolicy',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetPolicy.RevisionId'),
        outputPath: 'RevisionId',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPolicy.RevisionId', props);
    return resource.getResponseField('RevisionId') as unknown as string;
  }

}

export class LambdaResponsesFetchProvisionedConcurrencyConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaGetProvisionedConcurrencyConfigRequest) {
  }

  public get requestedProvisionedConcurrentExecutions(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProvisionedConcurrencyConfig',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetProvisionedConcurrencyConfig.RequestedProvisionedConcurrentExecutions'),
        outputPath: 'RequestedProvisionedConcurrentExecutions',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProvisionedConcurrencyConfig.RequestedProvisionedConcurrentExecutions', props);
    return resource.getResponseField('RequestedProvisionedConcurrentExecutions') as unknown as number;
  }

  public get availableProvisionedConcurrentExecutions(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProvisionedConcurrencyConfig',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetProvisionedConcurrencyConfig.AvailableProvisionedConcurrentExecutions'),
        outputPath: 'AvailableProvisionedConcurrentExecutions',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProvisionedConcurrencyConfig.AvailableProvisionedConcurrentExecutions', props);
    return resource.getResponseField('AvailableProvisionedConcurrentExecutions') as unknown as number;
  }

  public get allocatedProvisionedConcurrentExecutions(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProvisionedConcurrencyConfig',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetProvisionedConcurrencyConfig.AllocatedProvisionedConcurrentExecutions'),
        outputPath: 'AllocatedProvisionedConcurrentExecutions',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProvisionedConcurrencyConfig.AllocatedProvisionedConcurrentExecutions', props);
    return resource.getResponseField('AllocatedProvisionedConcurrentExecutions') as unknown as number;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProvisionedConcurrencyConfig',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetProvisionedConcurrencyConfig.Status'),
        outputPath: 'Status',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProvisionedConcurrencyConfig.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get statusReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProvisionedConcurrencyConfig',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetProvisionedConcurrencyConfig.StatusReason'),
        outputPath: 'StatusReason',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProvisionedConcurrencyConfig.StatusReason', props);
    return resource.getResponseField('StatusReason') as unknown as string;
  }

  public get lastModified(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProvisionedConcurrencyConfig',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.GetProvisionedConcurrencyConfig.LastModified'),
        outputPath: 'LastModified',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProvisionedConcurrencyConfig.LastModified', props);
    return resource.getResponseField('LastModified') as unknown as string;
  }

}

export class LambdaResponsesInvoke {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaInvocationRequest) {
  }

  public get statusCode(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'invoke',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.Invoke.StatusCode'),
        outputPath: 'StatusCode',
        parameters: {
          FunctionName: this.__input.functionName,
          InvocationType: this.__input.invocationType,
          LogType: this.__input.logType,
          ClientContext: this.__input.clientContext,
          Payload: {
          },
          Qualifier: this.__input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Invoke.StatusCode', props);
    return resource.getResponseField('StatusCode') as unknown as number;
  }

  public get functionError(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'invoke',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.Invoke.FunctionError'),
        outputPath: 'FunctionError',
        parameters: {
          FunctionName: this.__input.functionName,
          InvocationType: this.__input.invocationType,
          LogType: this.__input.logType,
          ClientContext: this.__input.clientContext,
          Payload: {
          },
          Qualifier: this.__input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Invoke.FunctionError', props);
    return resource.getResponseField('FunctionError') as unknown as string;
  }

  public get logResult(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'invoke',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.Invoke.LogResult'),
        outputPath: 'LogResult',
        parameters: {
          FunctionName: this.__input.functionName,
          InvocationType: this.__input.invocationType,
          LogType: this.__input.logType,
          ClientContext: this.__input.clientContext,
          Payload: {
          },
          Qualifier: this.__input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Invoke.LogResult', props);
    return resource.getResponseField('LogResult') as unknown as string;
  }

  public get payload(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'invoke',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.Invoke.Payload'),
        outputPath: 'Payload',
        parameters: {
          FunctionName: this.__input.functionName,
          InvocationType: this.__input.invocationType,
          LogType: this.__input.logType,
          ClientContext: this.__input.clientContext,
          Payload: {
          },
          Qualifier: this.__input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Invoke.Payload', props);
    return resource.getResponseField('Payload') as unknown as any;
  }

  public get executedVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'invoke',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.Invoke.ExecutedVersion'),
        outputPath: 'ExecutedVersion',
        parameters: {
          FunctionName: this.__input.functionName,
          InvocationType: this.__input.invocationType,
          LogType: this.__input.logType,
          ClientContext: this.__input.clientContext,
          Payload: {
          },
          Qualifier: this.__input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Invoke.ExecutedVersion', props);
    return resource.getResponseField('ExecutedVersion') as unknown as string;
  }

}

export class LambdaResponsesInvokeAsync {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaInvokeAsyncRequest) {
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'invokeAsync',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.InvokeAsync.Status'),
        outputPath: 'Status',
        parameters: {
          FunctionName: this.__input.functionName,
          InvokeArgs: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'InvokeAsync.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class LambdaResponsesListAliases {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaListAliasesRequest) {
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAliases',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.ListAliases.NextMarker'),
        outputPath: 'NextMarker',
        parameters: {
          FunctionName: this.__input.functionName,
          FunctionVersion: this.__input.functionVersion,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAliases.NextMarker', props);
    return resource.getResponseField('NextMarker') as unknown as string;
  }

  public get aliases(): shapes.LambdaAliasConfiguration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAliases',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.ListAliases.Aliases'),
        outputPath: 'Aliases',
        parameters: {
          FunctionName: this.__input.functionName,
          FunctionVersion: this.__input.functionVersion,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAliases.Aliases', props);
    return resource.getResponseField('Aliases') as unknown as shapes.LambdaAliasConfiguration[];
  }

}

export class LambdaResponsesListCodeSigningConfigs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaListCodeSigningConfigsRequest) {
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listCodeSigningConfigs',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.ListCodeSigningConfigs.NextMarker'),
        outputPath: 'NextMarker',
        parameters: {
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListCodeSigningConfigs.NextMarker', props);
    return resource.getResponseField('NextMarker') as unknown as string;
  }

  public get codeSigningConfigs(): shapes.LambdaCodeSigningConfig[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listCodeSigningConfigs',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.ListCodeSigningConfigs.CodeSigningConfigs'),
        outputPath: 'CodeSigningConfigs',
        parameters: {
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListCodeSigningConfigs.CodeSigningConfigs', props);
    return resource.getResponseField('CodeSigningConfigs') as unknown as shapes.LambdaCodeSigningConfig[];
  }

}

export class LambdaResponsesListEventSourceMappings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaListEventSourceMappingsRequest) {
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEventSourceMappings',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.ListEventSourceMappings.NextMarker'),
        outputPath: 'NextMarker',
        parameters: {
          EventSourceArn: this.__input.eventSourceArn,
          FunctionName: this.__input.functionName,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEventSourceMappings.NextMarker', props);
    return resource.getResponseField('NextMarker') as unknown as string;
  }

  public get eventSourceMappings(): shapes.LambdaEventSourceMappingConfiguration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEventSourceMappings',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.ListEventSourceMappings.EventSourceMappings'),
        outputPath: 'EventSourceMappings',
        parameters: {
          EventSourceArn: this.__input.eventSourceArn,
          FunctionName: this.__input.functionName,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEventSourceMappings.EventSourceMappings', props);
    return resource.getResponseField('EventSourceMappings') as unknown as shapes.LambdaEventSourceMappingConfiguration[];
  }

}

export class LambdaResponsesListFunctionEventInvokeConfigs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaListFunctionEventInvokeConfigsRequest) {
  }

  public get functionEventInvokeConfigs(): shapes.LambdaFunctionEventInvokeConfig[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFunctionEventInvokeConfigs',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.ListFunctionEventInvokeConfigs.FunctionEventInvokeConfigs'),
        outputPath: 'FunctionEventInvokeConfigs',
        parameters: {
          FunctionName: this.__input.functionName,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFunctionEventInvokeConfigs.FunctionEventInvokeConfigs', props);
    return resource.getResponseField('FunctionEventInvokeConfigs') as unknown as shapes.LambdaFunctionEventInvokeConfig[];
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFunctionEventInvokeConfigs',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.ListFunctionEventInvokeConfigs.NextMarker'),
        outputPath: 'NextMarker',
        parameters: {
          FunctionName: this.__input.functionName,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFunctionEventInvokeConfigs.NextMarker', props);
    return resource.getResponseField('NextMarker') as unknown as string;
  }

}

export class LambdaResponsesListFunctions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaListFunctionsRequest) {
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFunctions',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.ListFunctions.NextMarker'),
        outputPath: 'NextMarker',
        parameters: {
          MasterRegion: this.__input.masterRegion,
          FunctionVersion: this.__input.functionVersion,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFunctions.NextMarker', props);
    return resource.getResponseField('NextMarker') as unknown as string;
  }

  public get functions(): shapes.LambdaFunctionConfiguration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFunctions',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.ListFunctions.Functions'),
        outputPath: 'Functions',
        parameters: {
          MasterRegion: this.__input.masterRegion,
          FunctionVersion: this.__input.functionVersion,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFunctions.Functions', props);
    return resource.getResponseField('Functions') as unknown as shapes.LambdaFunctionConfiguration[];
  }

}

export class LambdaResponsesListFunctionsByCodeSigningConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaListFunctionsByCodeSigningConfigRequest) {
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFunctionsByCodeSigningConfig',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.ListFunctionsByCodeSigningConfig.NextMarker'),
        outputPath: 'NextMarker',
        parameters: {
          CodeSigningConfigArn: this.__input.codeSigningConfigArn,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFunctionsByCodeSigningConfig.NextMarker', props);
    return resource.getResponseField('NextMarker') as unknown as string;
  }

  public get functionArns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFunctionsByCodeSigningConfig',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.ListFunctionsByCodeSigningConfig.FunctionArns'),
        outputPath: 'FunctionArns',
        parameters: {
          CodeSigningConfigArn: this.__input.codeSigningConfigArn,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFunctionsByCodeSigningConfig.FunctionArns', props);
    return resource.getResponseField('FunctionArns') as unknown as string[];
  }

}

export class LambdaResponsesListLayerVersions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaListLayerVersionsRequest) {
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listLayerVersions',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.ListLayerVersions.NextMarker'),
        outputPath: 'NextMarker',
        parameters: {
          CompatibleRuntime: this.__input.compatibleRuntime,
          LayerName: this.__input.layerName,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListLayerVersions.NextMarker', props);
    return resource.getResponseField('NextMarker') as unknown as string;
  }

  public get layerVersions(): shapes.LambdaLayerVersionsListItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listLayerVersions',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.ListLayerVersions.LayerVersions'),
        outputPath: 'LayerVersions',
        parameters: {
          CompatibleRuntime: this.__input.compatibleRuntime,
          LayerName: this.__input.layerName,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListLayerVersions.LayerVersions', props);
    return resource.getResponseField('LayerVersions') as unknown as shapes.LambdaLayerVersionsListItem[];
  }

}

export class LambdaResponsesListLayers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaListLayersRequest) {
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listLayers',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.ListLayers.NextMarker'),
        outputPath: 'NextMarker',
        parameters: {
          CompatibleRuntime: this.__input.compatibleRuntime,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListLayers.NextMarker', props);
    return resource.getResponseField('NextMarker') as unknown as string;
  }

  public get layers(): shapes.LambdaLayersListItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listLayers',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.ListLayers.Layers'),
        outputPath: 'Layers',
        parameters: {
          CompatibleRuntime: this.__input.compatibleRuntime,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListLayers.Layers', props);
    return resource.getResponseField('Layers') as unknown as shapes.LambdaLayersListItem[];
  }

}

export class LambdaResponsesListProvisionedConcurrencyConfigs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaListProvisionedConcurrencyConfigsRequest) {
  }

  public get provisionedConcurrencyConfigs(): shapes.LambdaProvisionedConcurrencyConfigListItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listProvisionedConcurrencyConfigs',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.ListProvisionedConcurrencyConfigs.ProvisionedConcurrencyConfigs'),
        outputPath: 'ProvisionedConcurrencyConfigs',
        parameters: {
          FunctionName: this.__input.functionName,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListProvisionedConcurrencyConfigs.ProvisionedConcurrencyConfigs', props);
    return resource.getResponseField('ProvisionedConcurrencyConfigs') as unknown as shapes.LambdaProvisionedConcurrencyConfigListItem[];
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listProvisionedConcurrencyConfigs',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.ListProvisionedConcurrencyConfigs.NextMarker'),
        outputPath: 'NextMarker',
        parameters: {
          FunctionName: this.__input.functionName,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListProvisionedConcurrencyConfigs.NextMarker', props);
    return resource.getResponseField('NextMarker') as unknown as string;
  }

}

export class LambdaResponsesListTags {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaListTagsRequest) {
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTags',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.ListTags.Tags'),
        outputPath: 'Tags',
        parameters: {
          Resource: this.__input.resource,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTags.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class LambdaResponsesListVersionsByFunction {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaListVersionsByFunctionRequest) {
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listVersionsByFunction',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.ListVersionsByFunction.NextMarker'),
        outputPath: 'NextMarker',
        parameters: {
          FunctionName: this.__input.functionName,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListVersionsByFunction.NextMarker', props);
    return resource.getResponseField('NextMarker') as unknown as string;
  }

  public get versions(): shapes.LambdaFunctionConfiguration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listVersionsByFunction',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.ListVersionsByFunction.Versions'),
        outputPath: 'Versions',
        parameters: {
          FunctionName: this.__input.functionName,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListVersionsByFunction.Versions', props);
    return resource.getResponseField('Versions') as unknown as shapes.LambdaFunctionConfiguration[];
  }

}

export class LambdaResponsesPublishLayerVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaPublishLayerVersionRequest) {
  }

  public get content(): LambdaResponsesPublishLayerVersionContent {
    return new LambdaResponsesPublishLayerVersionContent(this.__scope, this.__resources, this.__input);
  }

  public get layerArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'publishLayerVersion',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.PublishLayerVersion.LayerArn'),
        outputPath: 'LayerArn',
        parameters: {
          LayerName: this.__input.layerName,
          Description: this.__input.description,
          Content: {
            S3Bucket: this.__input.content.s3Bucket,
            S3Key: this.__input.content.s3Key,
            S3ObjectVersion: this.__input.content.s3ObjectVersion,
            ZipFile: {
            },
          },
          CompatibleRuntimes: this.__input.compatibleRuntimes,
          LicenseInfo: this.__input.licenseInfo,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PublishLayerVersion.LayerArn', props);
    return resource.getResponseField('LayerArn') as unknown as string;
  }

  public get layerVersionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'publishLayerVersion',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.PublishLayerVersion.LayerVersionArn'),
        outputPath: 'LayerVersionArn',
        parameters: {
          LayerName: this.__input.layerName,
          Description: this.__input.description,
          Content: {
            S3Bucket: this.__input.content.s3Bucket,
            S3Key: this.__input.content.s3Key,
            S3ObjectVersion: this.__input.content.s3ObjectVersion,
            ZipFile: {
            },
          },
          CompatibleRuntimes: this.__input.compatibleRuntimes,
          LicenseInfo: this.__input.licenseInfo,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PublishLayerVersion.LayerVersionArn', props);
    return resource.getResponseField('LayerVersionArn') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'publishLayerVersion',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.PublishLayerVersion.Description'),
        outputPath: 'Description',
        parameters: {
          LayerName: this.__input.layerName,
          Description: this.__input.description,
          Content: {
            S3Bucket: this.__input.content.s3Bucket,
            S3Key: this.__input.content.s3Key,
            S3ObjectVersion: this.__input.content.s3ObjectVersion,
            ZipFile: {
            },
          },
          CompatibleRuntimes: this.__input.compatibleRuntimes,
          LicenseInfo: this.__input.licenseInfo,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PublishLayerVersion.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get createdDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'publishLayerVersion',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.PublishLayerVersion.CreatedDate'),
        outputPath: 'CreatedDate',
        parameters: {
          LayerName: this.__input.layerName,
          Description: this.__input.description,
          Content: {
            S3Bucket: this.__input.content.s3Bucket,
            S3Key: this.__input.content.s3Key,
            S3ObjectVersion: this.__input.content.s3ObjectVersion,
            ZipFile: {
            },
          },
          CompatibleRuntimes: this.__input.compatibleRuntimes,
          LicenseInfo: this.__input.licenseInfo,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PublishLayerVersion.CreatedDate', props);
    return resource.getResponseField('CreatedDate') as unknown as string;
  }

  public get version(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'publishLayerVersion',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.PublishLayerVersion.Version'),
        outputPath: 'Version',
        parameters: {
          LayerName: this.__input.layerName,
          Description: this.__input.description,
          Content: {
            S3Bucket: this.__input.content.s3Bucket,
            S3Key: this.__input.content.s3Key,
            S3ObjectVersion: this.__input.content.s3ObjectVersion,
            ZipFile: {
            },
          },
          CompatibleRuntimes: this.__input.compatibleRuntimes,
          LicenseInfo: this.__input.licenseInfo,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PublishLayerVersion.Version', props);
    return resource.getResponseField('Version') as unknown as number;
  }

  public get compatibleRuntimes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'publishLayerVersion',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.PublishLayerVersion.CompatibleRuntimes'),
        outputPath: 'CompatibleRuntimes',
        parameters: {
          LayerName: this.__input.layerName,
          Description: this.__input.description,
          Content: {
            S3Bucket: this.__input.content.s3Bucket,
            S3Key: this.__input.content.s3Key,
            S3ObjectVersion: this.__input.content.s3ObjectVersion,
            ZipFile: {
            },
          },
          CompatibleRuntimes: this.__input.compatibleRuntimes,
          LicenseInfo: this.__input.licenseInfo,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PublishLayerVersion.CompatibleRuntimes', props);
    return resource.getResponseField('CompatibleRuntimes') as unknown as string[];
  }

  public get licenseInfo(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'publishLayerVersion',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.PublishLayerVersion.LicenseInfo'),
        outputPath: 'LicenseInfo',
        parameters: {
          LayerName: this.__input.layerName,
          Description: this.__input.description,
          Content: {
            S3Bucket: this.__input.content.s3Bucket,
            S3Key: this.__input.content.s3Key,
            S3ObjectVersion: this.__input.content.s3ObjectVersion,
            ZipFile: {
            },
          },
          CompatibleRuntimes: this.__input.compatibleRuntimes,
          LicenseInfo: this.__input.licenseInfo,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PublishLayerVersion.LicenseInfo', props);
    return resource.getResponseField('LicenseInfo') as unknown as string;
  }

}

export class LambdaResponsesPublishLayerVersionContent {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaPublishLayerVersionRequest) {
  }

  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'publishLayerVersion',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.PublishLayerVersion.Content.Location'),
        outputPath: 'Content.Location',
        parameters: {
          LayerName: this.__input.layerName,
          Description: this.__input.description,
          Content: {
            S3Bucket: this.__input.content.s3Bucket,
            S3Key: this.__input.content.s3Key,
            S3ObjectVersion: this.__input.content.s3ObjectVersion,
            ZipFile: {
            },
          },
          CompatibleRuntimes: this.__input.compatibleRuntimes,
          LicenseInfo: this.__input.licenseInfo,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PublishLayerVersion.Content.Location', props);
    return resource.getResponseField('Content.Location') as unknown as string;
  }

  public get codeSha256(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'publishLayerVersion',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.PublishLayerVersion.Content.CodeSha256'),
        outputPath: 'Content.CodeSha256',
        parameters: {
          LayerName: this.__input.layerName,
          Description: this.__input.description,
          Content: {
            S3Bucket: this.__input.content.s3Bucket,
            S3Key: this.__input.content.s3Key,
            S3ObjectVersion: this.__input.content.s3ObjectVersion,
            ZipFile: {
            },
          },
          CompatibleRuntimes: this.__input.compatibleRuntimes,
          LicenseInfo: this.__input.licenseInfo,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PublishLayerVersion.Content.CodeSha256', props);
    return resource.getResponseField('Content.CodeSha256') as unknown as string;
  }

  public get codeSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'publishLayerVersion',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.PublishLayerVersion.Content.CodeSize'),
        outputPath: 'Content.CodeSize',
        parameters: {
          LayerName: this.__input.layerName,
          Description: this.__input.description,
          Content: {
            S3Bucket: this.__input.content.s3Bucket,
            S3Key: this.__input.content.s3Key,
            S3ObjectVersion: this.__input.content.s3ObjectVersion,
            ZipFile: {
            },
          },
          CompatibleRuntimes: this.__input.compatibleRuntimes,
          LicenseInfo: this.__input.licenseInfo,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PublishLayerVersion.Content.CodeSize', props);
    return resource.getResponseField('Content.CodeSize') as unknown as number;
  }

  public get signingProfileVersionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'publishLayerVersion',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.PublishLayerVersion.Content.SigningProfileVersionArn'),
        outputPath: 'Content.SigningProfileVersionArn',
        parameters: {
          LayerName: this.__input.layerName,
          Description: this.__input.description,
          Content: {
            S3Bucket: this.__input.content.s3Bucket,
            S3Key: this.__input.content.s3Key,
            S3ObjectVersion: this.__input.content.s3ObjectVersion,
            ZipFile: {
            },
          },
          CompatibleRuntimes: this.__input.compatibleRuntimes,
          LicenseInfo: this.__input.licenseInfo,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PublishLayerVersion.Content.SigningProfileVersionArn', props);
    return resource.getResponseField('Content.SigningProfileVersionArn') as unknown as string;
  }

  public get signingJobArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'publishLayerVersion',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.PublishLayerVersion.Content.SigningJobArn'),
        outputPath: 'Content.SigningJobArn',
        parameters: {
          LayerName: this.__input.layerName,
          Description: this.__input.description,
          Content: {
            S3Bucket: this.__input.content.s3Bucket,
            S3Key: this.__input.content.s3Key,
            S3ObjectVersion: this.__input.content.s3ObjectVersion,
            ZipFile: {
            },
          },
          CompatibleRuntimes: this.__input.compatibleRuntimes,
          LicenseInfo: this.__input.licenseInfo,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PublishLayerVersion.Content.SigningJobArn', props);
    return resource.getResponseField('Content.SigningJobArn') as unknown as string;
  }

}

export class LambdaResponsesPublishVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaPublishVersionRequest) {
  }

  public get functionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'publishVersion',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.PublishVersion.FunctionName'),
        outputPath: 'FunctionName',
        parameters: {
          FunctionName: this.__input.functionName,
          CodeSha256: this.__input.codeSha256,
          Description: this.__input.description,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PublishVersion.FunctionName', props);
    return resource.getResponseField('FunctionName') as unknown as string;
  }

  public get functionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'publishVersion',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.PublishVersion.FunctionArn'),
        outputPath: 'FunctionArn',
        parameters: {
          FunctionName: this.__input.functionName,
          CodeSha256: this.__input.codeSha256,
          Description: this.__input.description,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PublishVersion.FunctionArn', props);
    return resource.getResponseField('FunctionArn') as unknown as string;
  }

  public get runtime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'publishVersion',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.PublishVersion.Runtime'),
        outputPath: 'Runtime',
        parameters: {
          FunctionName: this.__input.functionName,
          CodeSha256: this.__input.codeSha256,
          Description: this.__input.description,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PublishVersion.Runtime', props);
    return resource.getResponseField('Runtime') as unknown as string;
  }

  public get role(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'publishVersion',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.PublishVersion.Role'),
        outputPath: 'Role',
        parameters: {
          FunctionName: this.__input.functionName,
          CodeSha256: this.__input.codeSha256,
          Description: this.__input.description,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PublishVersion.Role', props);
    return resource.getResponseField('Role') as unknown as string;
  }

  public get handler(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'publishVersion',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.PublishVersion.Handler'),
        outputPath: 'Handler',
        parameters: {
          FunctionName: this.__input.functionName,
          CodeSha256: this.__input.codeSha256,
          Description: this.__input.description,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PublishVersion.Handler', props);
    return resource.getResponseField('Handler') as unknown as string;
  }

  public get codeSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'publishVersion',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.PublishVersion.CodeSize'),
        outputPath: 'CodeSize',
        parameters: {
          FunctionName: this.__input.functionName,
          CodeSha256: this.__input.codeSha256,
          Description: this.__input.description,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PublishVersion.CodeSize', props);
    return resource.getResponseField('CodeSize') as unknown as number;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'publishVersion',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.PublishVersion.Description'),
        outputPath: 'Description',
        parameters: {
          FunctionName: this.__input.functionName,
          CodeSha256: this.__input.codeSha256,
          Description: this.__input.description,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PublishVersion.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get timeout(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'publishVersion',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.PublishVersion.Timeout'),
        outputPath: 'Timeout',
        parameters: {
          FunctionName: this.__input.functionName,
          CodeSha256: this.__input.codeSha256,
          Description: this.__input.description,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PublishVersion.Timeout', props);
    return resource.getResponseField('Timeout') as unknown as number;
  }

  public get memorySize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'publishVersion',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.PublishVersion.MemorySize'),
        outputPath: 'MemorySize',
        parameters: {
          FunctionName: this.__input.functionName,
          CodeSha256: this.__input.codeSha256,
          Description: this.__input.description,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PublishVersion.MemorySize', props);
    return resource.getResponseField('MemorySize') as unknown as number;
  }

  public get lastModified(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'publishVersion',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.PublishVersion.LastModified'),
        outputPath: 'LastModified',
        parameters: {
          FunctionName: this.__input.functionName,
          CodeSha256: this.__input.codeSha256,
          Description: this.__input.description,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PublishVersion.LastModified', props);
    return resource.getResponseField('LastModified') as unknown as string;
  }

  public get codeSha256(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'publishVersion',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.PublishVersion.CodeSha256'),
        outputPath: 'CodeSha256',
        parameters: {
          FunctionName: this.__input.functionName,
          CodeSha256: this.__input.codeSha256,
          Description: this.__input.description,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PublishVersion.CodeSha256', props);
    return resource.getResponseField('CodeSha256') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'publishVersion',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.PublishVersion.Version'),
        outputPath: 'Version',
        parameters: {
          FunctionName: this.__input.functionName,
          CodeSha256: this.__input.codeSha256,
          Description: this.__input.description,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PublishVersion.Version', props);
    return resource.getResponseField('Version') as unknown as string;
  }

  public get vpcConfig(): LambdaResponsesPublishVersionVpcConfig {
    return new LambdaResponsesPublishVersionVpcConfig(this.__scope, this.__resources, this.__input);
  }

  public get deadLetterConfig(): LambdaResponsesPublishVersionDeadLetterConfig {
    return new LambdaResponsesPublishVersionDeadLetterConfig(this.__scope, this.__resources, this.__input);
  }

  public get environment(): LambdaResponsesPublishVersionEnvironment {
    return new LambdaResponsesPublishVersionEnvironment(this.__scope, this.__resources, this.__input);
  }

  public get kmsKeyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'publishVersion',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.PublishVersion.KMSKeyArn'),
        outputPath: 'KMSKeyArn',
        parameters: {
          FunctionName: this.__input.functionName,
          CodeSha256: this.__input.codeSha256,
          Description: this.__input.description,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PublishVersion.KMSKeyArn', props);
    return resource.getResponseField('KMSKeyArn') as unknown as string;
  }

  public get tracingConfig(): LambdaResponsesPublishVersionTracingConfig {
    return new LambdaResponsesPublishVersionTracingConfig(this.__scope, this.__resources, this.__input);
  }

  public get masterArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'publishVersion',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.PublishVersion.MasterArn'),
        outputPath: 'MasterArn',
        parameters: {
          FunctionName: this.__input.functionName,
          CodeSha256: this.__input.codeSha256,
          Description: this.__input.description,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PublishVersion.MasterArn', props);
    return resource.getResponseField('MasterArn') as unknown as string;
  }

  public get revisionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'publishVersion',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.PublishVersion.RevisionId'),
        outputPath: 'RevisionId',
        parameters: {
          FunctionName: this.__input.functionName,
          CodeSha256: this.__input.codeSha256,
          Description: this.__input.description,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PublishVersion.RevisionId', props);
    return resource.getResponseField('RevisionId') as unknown as string;
  }

  public get layers(): shapes.LambdaLayer[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'publishVersion',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.PublishVersion.Layers'),
        outputPath: 'Layers',
        parameters: {
          FunctionName: this.__input.functionName,
          CodeSha256: this.__input.codeSha256,
          Description: this.__input.description,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PublishVersion.Layers', props);
    return resource.getResponseField('Layers') as unknown as shapes.LambdaLayer[];
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'publishVersion',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.PublishVersion.State'),
        outputPath: 'State',
        parameters: {
          FunctionName: this.__input.functionName,
          CodeSha256: this.__input.codeSha256,
          Description: this.__input.description,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PublishVersion.State', props);
    return resource.getResponseField('State') as unknown as string;
  }

  public get stateReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'publishVersion',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.PublishVersion.StateReason'),
        outputPath: 'StateReason',
        parameters: {
          FunctionName: this.__input.functionName,
          CodeSha256: this.__input.codeSha256,
          Description: this.__input.description,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PublishVersion.StateReason', props);
    return resource.getResponseField('StateReason') as unknown as string;
  }

  public get stateReasonCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'publishVersion',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.PublishVersion.StateReasonCode'),
        outputPath: 'StateReasonCode',
        parameters: {
          FunctionName: this.__input.functionName,
          CodeSha256: this.__input.codeSha256,
          Description: this.__input.description,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PublishVersion.StateReasonCode', props);
    return resource.getResponseField('StateReasonCode') as unknown as string;
  }

  public get lastUpdateStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'publishVersion',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.PublishVersion.LastUpdateStatus'),
        outputPath: 'LastUpdateStatus',
        parameters: {
          FunctionName: this.__input.functionName,
          CodeSha256: this.__input.codeSha256,
          Description: this.__input.description,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PublishVersion.LastUpdateStatus', props);
    return resource.getResponseField('LastUpdateStatus') as unknown as string;
  }

  public get lastUpdateStatusReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'publishVersion',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.PublishVersion.LastUpdateStatusReason'),
        outputPath: 'LastUpdateStatusReason',
        parameters: {
          FunctionName: this.__input.functionName,
          CodeSha256: this.__input.codeSha256,
          Description: this.__input.description,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PublishVersion.LastUpdateStatusReason', props);
    return resource.getResponseField('LastUpdateStatusReason') as unknown as string;
  }

  public get lastUpdateStatusReasonCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'publishVersion',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.PublishVersion.LastUpdateStatusReasonCode'),
        outputPath: 'LastUpdateStatusReasonCode',
        parameters: {
          FunctionName: this.__input.functionName,
          CodeSha256: this.__input.codeSha256,
          Description: this.__input.description,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PublishVersion.LastUpdateStatusReasonCode', props);
    return resource.getResponseField('LastUpdateStatusReasonCode') as unknown as string;
  }

  public get fileSystemConfigs(): shapes.LambdaFileSystemConfig[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'publishVersion',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.PublishVersion.FileSystemConfigs'),
        outputPath: 'FileSystemConfigs',
        parameters: {
          FunctionName: this.__input.functionName,
          CodeSha256: this.__input.codeSha256,
          Description: this.__input.description,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PublishVersion.FileSystemConfigs', props);
    return resource.getResponseField('FileSystemConfigs') as unknown as shapes.LambdaFileSystemConfig[];
  }

  public get packageType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'publishVersion',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.PublishVersion.PackageType'),
        outputPath: 'PackageType',
        parameters: {
          FunctionName: this.__input.functionName,
          CodeSha256: this.__input.codeSha256,
          Description: this.__input.description,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PublishVersion.PackageType', props);
    return resource.getResponseField('PackageType') as unknown as string;
  }

  public get imageConfigResponse(): LambdaResponsesPublishVersionImageConfigResponse {
    return new LambdaResponsesPublishVersionImageConfigResponse(this.__scope, this.__resources, this.__input);
  }

  public get signingProfileVersionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'publishVersion',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.PublishVersion.SigningProfileVersionArn'),
        outputPath: 'SigningProfileVersionArn',
        parameters: {
          FunctionName: this.__input.functionName,
          CodeSha256: this.__input.codeSha256,
          Description: this.__input.description,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PublishVersion.SigningProfileVersionArn', props);
    return resource.getResponseField('SigningProfileVersionArn') as unknown as string;
  }

  public get signingJobArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'publishVersion',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.PublishVersion.SigningJobArn'),
        outputPath: 'SigningJobArn',
        parameters: {
          FunctionName: this.__input.functionName,
          CodeSha256: this.__input.codeSha256,
          Description: this.__input.description,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PublishVersion.SigningJobArn', props);
    return resource.getResponseField('SigningJobArn') as unknown as string;
  }

}

export class LambdaResponsesPublishVersionVpcConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaPublishVersionRequest) {
  }

  public get subnetIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'publishVersion',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.PublishVersion.VpcConfig.SubnetIds'),
        outputPath: 'VpcConfig.SubnetIds',
        parameters: {
          FunctionName: this.__input.functionName,
          CodeSha256: this.__input.codeSha256,
          Description: this.__input.description,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PublishVersion.VpcConfig.SubnetIds', props);
    return resource.getResponseField('VpcConfig.SubnetIds') as unknown as string[];
  }

  public get securityGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'publishVersion',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.PublishVersion.VpcConfig.SecurityGroupIds'),
        outputPath: 'VpcConfig.SecurityGroupIds',
        parameters: {
          FunctionName: this.__input.functionName,
          CodeSha256: this.__input.codeSha256,
          Description: this.__input.description,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PublishVersion.VpcConfig.SecurityGroupIds', props);
    return resource.getResponseField('VpcConfig.SecurityGroupIds') as unknown as string[];
  }

  public get vpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'publishVersion',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.PublishVersion.VpcConfig.VpcId'),
        outputPath: 'VpcConfig.VpcId',
        parameters: {
          FunctionName: this.__input.functionName,
          CodeSha256: this.__input.codeSha256,
          Description: this.__input.description,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PublishVersion.VpcConfig.VpcId', props);
    return resource.getResponseField('VpcConfig.VpcId') as unknown as string;
  }

}

export class LambdaResponsesPublishVersionDeadLetterConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaPublishVersionRequest) {
  }

  public get targetArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'publishVersion',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.PublishVersion.DeadLetterConfig.TargetArn'),
        outputPath: 'DeadLetterConfig.TargetArn',
        parameters: {
          FunctionName: this.__input.functionName,
          CodeSha256: this.__input.codeSha256,
          Description: this.__input.description,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PublishVersion.DeadLetterConfig.TargetArn', props);
    return resource.getResponseField('DeadLetterConfig.TargetArn') as unknown as string;
  }

}

export class LambdaResponsesPublishVersionEnvironment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaPublishVersionRequest) {
  }

  public get variables(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'publishVersion',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.PublishVersion.Environment.Variables'),
        outputPath: 'Environment.Variables',
        parameters: {
          FunctionName: this.__input.functionName,
          CodeSha256: this.__input.codeSha256,
          Description: this.__input.description,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PublishVersion.Environment.Variables', props);
    return resource.getResponseField('Environment.Variables') as unknown as Record<string, string>;
  }

  public get error(): LambdaResponsesPublishVersionEnvironmentError {
    return new LambdaResponsesPublishVersionEnvironmentError(this.__scope, this.__resources, this.__input);
  }

}

export class LambdaResponsesPublishVersionEnvironmentError {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaPublishVersionRequest) {
  }

  public get errorCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'publishVersion',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.PublishVersion.Environment.Error.ErrorCode'),
        outputPath: 'Environment.Error.ErrorCode',
        parameters: {
          FunctionName: this.__input.functionName,
          CodeSha256: this.__input.codeSha256,
          Description: this.__input.description,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PublishVersion.Environment.Error.ErrorCode', props);
    return resource.getResponseField('Environment.Error.ErrorCode') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'publishVersion',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.PublishVersion.Environment.Error.Message'),
        outputPath: 'Environment.Error.Message',
        parameters: {
          FunctionName: this.__input.functionName,
          CodeSha256: this.__input.codeSha256,
          Description: this.__input.description,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PublishVersion.Environment.Error.Message', props);
    return resource.getResponseField('Environment.Error.Message') as unknown as string;
  }

}

export class LambdaResponsesPublishVersionTracingConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaPublishVersionRequest) {
  }

  public get mode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'publishVersion',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.PublishVersion.TracingConfig.Mode'),
        outputPath: 'TracingConfig.Mode',
        parameters: {
          FunctionName: this.__input.functionName,
          CodeSha256: this.__input.codeSha256,
          Description: this.__input.description,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PublishVersion.TracingConfig.Mode', props);
    return resource.getResponseField('TracingConfig.Mode') as unknown as string;
  }

}

export class LambdaResponsesPublishVersionImageConfigResponse {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaPublishVersionRequest) {
  }

  public get imageConfig(): LambdaResponsesPublishVersionImageConfigResponseImageConfig {
    return new LambdaResponsesPublishVersionImageConfigResponseImageConfig(this.__scope, this.__resources, this.__input);
  }

  public get error(): LambdaResponsesPublishVersionImageConfigResponseError {
    return new LambdaResponsesPublishVersionImageConfigResponseError(this.__scope, this.__resources, this.__input);
  }

}

export class LambdaResponsesPublishVersionImageConfigResponseImageConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaPublishVersionRequest) {
  }

  public get entryPoint(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'publishVersion',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.PublishVersion.ImageConfigResponse.ImageConfig.EntryPoint'),
        outputPath: 'ImageConfigResponse.ImageConfig.EntryPoint',
        parameters: {
          FunctionName: this.__input.functionName,
          CodeSha256: this.__input.codeSha256,
          Description: this.__input.description,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PublishVersion.ImageConfigResponse.ImageConfig.EntryPoint', props);
    return resource.getResponseField('ImageConfigResponse.ImageConfig.EntryPoint') as unknown as string[];
  }

  public get command(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'publishVersion',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.PublishVersion.ImageConfigResponse.ImageConfig.Command'),
        outputPath: 'ImageConfigResponse.ImageConfig.Command',
        parameters: {
          FunctionName: this.__input.functionName,
          CodeSha256: this.__input.codeSha256,
          Description: this.__input.description,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PublishVersion.ImageConfigResponse.ImageConfig.Command', props);
    return resource.getResponseField('ImageConfigResponse.ImageConfig.Command') as unknown as string[];
  }

  public get workingDirectory(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'publishVersion',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.PublishVersion.ImageConfigResponse.ImageConfig.WorkingDirectory'),
        outputPath: 'ImageConfigResponse.ImageConfig.WorkingDirectory',
        parameters: {
          FunctionName: this.__input.functionName,
          CodeSha256: this.__input.codeSha256,
          Description: this.__input.description,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PublishVersion.ImageConfigResponse.ImageConfig.WorkingDirectory', props);
    return resource.getResponseField('ImageConfigResponse.ImageConfig.WorkingDirectory') as unknown as string;
  }

}

export class LambdaResponsesPublishVersionImageConfigResponseError {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaPublishVersionRequest) {
  }

  public get errorCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'publishVersion',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.PublishVersion.ImageConfigResponse.Error.ErrorCode'),
        outputPath: 'ImageConfigResponse.Error.ErrorCode',
        parameters: {
          FunctionName: this.__input.functionName,
          CodeSha256: this.__input.codeSha256,
          Description: this.__input.description,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PublishVersion.ImageConfigResponse.Error.ErrorCode', props);
    return resource.getResponseField('ImageConfigResponse.Error.ErrorCode') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'publishVersion',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.PublishVersion.ImageConfigResponse.Error.Message'),
        outputPath: 'ImageConfigResponse.Error.Message',
        parameters: {
          FunctionName: this.__input.functionName,
          CodeSha256: this.__input.codeSha256,
          Description: this.__input.description,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PublishVersion.ImageConfigResponse.Error.Message', props);
    return resource.getResponseField('ImageConfigResponse.Error.Message') as unknown as string;
  }

}

export class LambdaResponsesPutFunctionCodeSigningConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaPutFunctionCodeSigningConfigRequest) {
  }

  public get codeSigningConfigArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putFunctionCodeSigningConfig',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.PutFunctionCodeSigningConfig.CodeSigningConfigArn'),
        outputPath: 'CodeSigningConfigArn',
        parameters: {
          CodeSigningConfigArn: this.__input.codeSigningConfigArn,
          FunctionName: this.__input.functionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutFunctionCodeSigningConfig.CodeSigningConfigArn', props);
    return resource.getResponseField('CodeSigningConfigArn') as unknown as string;
  }

  public get functionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putFunctionCodeSigningConfig',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.PutFunctionCodeSigningConfig.FunctionName'),
        outputPath: 'FunctionName',
        parameters: {
          CodeSigningConfigArn: this.__input.codeSigningConfigArn,
          FunctionName: this.__input.functionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutFunctionCodeSigningConfig.FunctionName', props);
    return resource.getResponseField('FunctionName') as unknown as string;
  }

}

export class LambdaResponsesPutFunctionConcurrency {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaPutFunctionConcurrencyRequest) {
  }

  public get reservedConcurrentExecutions(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putFunctionConcurrency',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.PutFunctionConcurrency.ReservedConcurrentExecutions'),
        outputPath: 'ReservedConcurrentExecutions',
        parameters: {
          FunctionName: this.__input.functionName,
          ReservedConcurrentExecutions: this.__input.reservedConcurrentExecutions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutFunctionConcurrency.ReservedConcurrentExecutions', props);
    return resource.getResponseField('ReservedConcurrentExecutions') as unknown as number;
  }

}

export class LambdaResponsesPutFunctionEventInvokeConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaPutFunctionEventInvokeConfigRequest) {
  }

  public get lastModified(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putFunctionEventInvokeConfig',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.PutFunctionEventInvokeConfig.LastModified'),
        outputPath: 'LastModified',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
          MaximumRetryAttempts: this.__input.maximumRetryAttempts,
          MaximumEventAgeInSeconds: this.__input.maximumEventAgeInSeconds,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.__input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.__input.destinationConfig?.onFailure?.destination,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutFunctionEventInvokeConfig.LastModified', props);
    return resource.getResponseField('LastModified') as unknown as string;
  }

  public get functionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putFunctionEventInvokeConfig',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.PutFunctionEventInvokeConfig.FunctionArn'),
        outputPath: 'FunctionArn',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
          MaximumRetryAttempts: this.__input.maximumRetryAttempts,
          MaximumEventAgeInSeconds: this.__input.maximumEventAgeInSeconds,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.__input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.__input.destinationConfig?.onFailure?.destination,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutFunctionEventInvokeConfig.FunctionArn', props);
    return resource.getResponseField('FunctionArn') as unknown as string;
  }

  public get maximumRetryAttempts(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putFunctionEventInvokeConfig',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.PutFunctionEventInvokeConfig.MaximumRetryAttempts'),
        outputPath: 'MaximumRetryAttempts',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
          MaximumRetryAttempts: this.__input.maximumRetryAttempts,
          MaximumEventAgeInSeconds: this.__input.maximumEventAgeInSeconds,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.__input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.__input.destinationConfig?.onFailure?.destination,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutFunctionEventInvokeConfig.MaximumRetryAttempts', props);
    return resource.getResponseField('MaximumRetryAttempts') as unknown as number;
  }

  public get maximumEventAgeInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putFunctionEventInvokeConfig',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.PutFunctionEventInvokeConfig.MaximumEventAgeInSeconds'),
        outputPath: 'MaximumEventAgeInSeconds',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
          MaximumRetryAttempts: this.__input.maximumRetryAttempts,
          MaximumEventAgeInSeconds: this.__input.maximumEventAgeInSeconds,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.__input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.__input.destinationConfig?.onFailure?.destination,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutFunctionEventInvokeConfig.MaximumEventAgeInSeconds', props);
    return resource.getResponseField('MaximumEventAgeInSeconds') as unknown as number;
  }

  public get destinationConfig(): LambdaResponsesPutFunctionEventInvokeConfigDestinationConfig {
    return new LambdaResponsesPutFunctionEventInvokeConfigDestinationConfig(this.__scope, this.__resources, this.__input);
  }

}

export class LambdaResponsesPutFunctionEventInvokeConfigDestinationConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaPutFunctionEventInvokeConfigRequest) {
  }

  public get onSuccess(): LambdaResponsesPutFunctionEventInvokeConfigDestinationConfigOnSuccess {
    return new LambdaResponsesPutFunctionEventInvokeConfigDestinationConfigOnSuccess(this.__scope, this.__resources, this.__input);
  }

  public get onFailure(): LambdaResponsesPutFunctionEventInvokeConfigDestinationConfigOnFailure {
    return new LambdaResponsesPutFunctionEventInvokeConfigDestinationConfigOnFailure(this.__scope, this.__resources, this.__input);
  }

}

export class LambdaResponsesPutFunctionEventInvokeConfigDestinationConfigOnSuccess {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaPutFunctionEventInvokeConfigRequest) {
  }

  public get destination(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putFunctionEventInvokeConfig',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.PutFunctionEventInvokeConfig.DestinationConfig.OnSuccess.Destination'),
        outputPath: 'DestinationConfig.OnSuccess.Destination',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
          MaximumRetryAttempts: this.__input.maximumRetryAttempts,
          MaximumEventAgeInSeconds: this.__input.maximumEventAgeInSeconds,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.__input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.__input.destinationConfig?.onFailure?.destination,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutFunctionEventInvokeConfig.DestinationConfig.OnSuccess.Destination', props);
    return resource.getResponseField('DestinationConfig.OnSuccess.Destination') as unknown as string;
  }

}

export class LambdaResponsesPutFunctionEventInvokeConfigDestinationConfigOnFailure {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaPutFunctionEventInvokeConfigRequest) {
  }

  public get destination(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putFunctionEventInvokeConfig',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.PutFunctionEventInvokeConfig.DestinationConfig.OnFailure.Destination'),
        outputPath: 'DestinationConfig.OnFailure.Destination',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
          MaximumRetryAttempts: this.__input.maximumRetryAttempts,
          MaximumEventAgeInSeconds: this.__input.maximumEventAgeInSeconds,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.__input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.__input.destinationConfig?.onFailure?.destination,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutFunctionEventInvokeConfig.DestinationConfig.OnFailure.Destination', props);
    return resource.getResponseField('DestinationConfig.OnFailure.Destination') as unknown as string;
  }

}

export class LambdaResponsesPutProvisionedConcurrencyConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaPutProvisionedConcurrencyConfigRequest) {
  }

  public get requestedProvisionedConcurrentExecutions(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putProvisionedConcurrencyConfig',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.PutProvisionedConcurrencyConfig.RequestedProvisionedConcurrentExecutions'),
        outputPath: 'RequestedProvisionedConcurrentExecutions',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
          ProvisionedConcurrentExecutions: this.__input.provisionedConcurrentExecutions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutProvisionedConcurrencyConfig.RequestedProvisionedConcurrentExecutions', props);
    return resource.getResponseField('RequestedProvisionedConcurrentExecutions') as unknown as number;
  }

  public get availableProvisionedConcurrentExecutions(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putProvisionedConcurrencyConfig',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.PutProvisionedConcurrencyConfig.AvailableProvisionedConcurrentExecutions'),
        outputPath: 'AvailableProvisionedConcurrentExecutions',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
          ProvisionedConcurrentExecutions: this.__input.provisionedConcurrentExecutions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutProvisionedConcurrencyConfig.AvailableProvisionedConcurrentExecutions', props);
    return resource.getResponseField('AvailableProvisionedConcurrentExecutions') as unknown as number;
  }

  public get allocatedProvisionedConcurrentExecutions(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putProvisionedConcurrencyConfig',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.PutProvisionedConcurrencyConfig.AllocatedProvisionedConcurrentExecutions'),
        outputPath: 'AllocatedProvisionedConcurrentExecutions',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
          ProvisionedConcurrentExecutions: this.__input.provisionedConcurrentExecutions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutProvisionedConcurrencyConfig.AllocatedProvisionedConcurrentExecutions', props);
    return resource.getResponseField('AllocatedProvisionedConcurrentExecutions') as unknown as number;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putProvisionedConcurrencyConfig',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.PutProvisionedConcurrencyConfig.Status'),
        outputPath: 'Status',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
          ProvisionedConcurrentExecutions: this.__input.provisionedConcurrentExecutions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutProvisionedConcurrencyConfig.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get statusReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putProvisionedConcurrencyConfig',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.PutProvisionedConcurrencyConfig.StatusReason'),
        outputPath: 'StatusReason',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
          ProvisionedConcurrentExecutions: this.__input.provisionedConcurrentExecutions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutProvisionedConcurrencyConfig.StatusReason', props);
    return resource.getResponseField('StatusReason') as unknown as string;
  }

  public get lastModified(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putProvisionedConcurrencyConfig',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.PutProvisionedConcurrencyConfig.LastModified'),
        outputPath: 'LastModified',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
          ProvisionedConcurrentExecutions: this.__input.provisionedConcurrentExecutions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutProvisionedConcurrencyConfig.LastModified', props);
    return resource.getResponseField('LastModified') as unknown as string;
  }

}

export class LambdaResponsesUpdateAlias {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaUpdateAliasRequest) {
  }

  public get aliasArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAlias',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateAlias.AliasArn'),
        outputPath: 'AliasArn',
        parameters: {
          FunctionName: this.__input.functionName,
          Name: this.__input.name,
          FunctionVersion: this.__input.functionVersion,
          Description: this.__input.description,
          RoutingConfig: {
            AdditionalVersionWeights: this.__input.routingConfig?.additionalVersionWeights,
          },
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAlias.AliasArn', props);
    return resource.getResponseField('AliasArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAlias',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateAlias.Name'),
        outputPath: 'Name',
        parameters: {
          FunctionName: this.__input.functionName,
          Name: this.__input.name,
          FunctionVersion: this.__input.functionVersion,
          Description: this.__input.description,
          RoutingConfig: {
            AdditionalVersionWeights: this.__input.routingConfig?.additionalVersionWeights,
          },
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAlias.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get functionVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAlias',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateAlias.FunctionVersion'),
        outputPath: 'FunctionVersion',
        parameters: {
          FunctionName: this.__input.functionName,
          Name: this.__input.name,
          FunctionVersion: this.__input.functionVersion,
          Description: this.__input.description,
          RoutingConfig: {
            AdditionalVersionWeights: this.__input.routingConfig?.additionalVersionWeights,
          },
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAlias.FunctionVersion', props);
    return resource.getResponseField('FunctionVersion') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAlias',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateAlias.Description'),
        outputPath: 'Description',
        parameters: {
          FunctionName: this.__input.functionName,
          Name: this.__input.name,
          FunctionVersion: this.__input.functionVersion,
          Description: this.__input.description,
          RoutingConfig: {
            AdditionalVersionWeights: this.__input.routingConfig?.additionalVersionWeights,
          },
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAlias.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get routingConfig(): LambdaResponsesUpdateAliasRoutingConfig {
    return new LambdaResponsesUpdateAliasRoutingConfig(this.__scope, this.__resources, this.__input);
  }

  public get revisionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAlias',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateAlias.RevisionId'),
        outputPath: 'RevisionId',
        parameters: {
          FunctionName: this.__input.functionName,
          Name: this.__input.name,
          FunctionVersion: this.__input.functionVersion,
          Description: this.__input.description,
          RoutingConfig: {
            AdditionalVersionWeights: this.__input.routingConfig?.additionalVersionWeights,
          },
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAlias.RevisionId', props);
    return resource.getResponseField('RevisionId') as unknown as string;
  }

}

export class LambdaResponsesUpdateAliasRoutingConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaUpdateAliasRequest) {
  }

  public get additionalVersionWeights(): Record<string, number> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAlias',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateAlias.RoutingConfig.AdditionalVersionWeights'),
        outputPath: 'RoutingConfig.AdditionalVersionWeights',
        parameters: {
          FunctionName: this.__input.functionName,
          Name: this.__input.name,
          FunctionVersion: this.__input.functionVersion,
          Description: this.__input.description,
          RoutingConfig: {
            AdditionalVersionWeights: this.__input.routingConfig?.additionalVersionWeights,
          },
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAlias.RoutingConfig.AdditionalVersionWeights', props);
    return resource.getResponseField('RoutingConfig.AdditionalVersionWeights') as unknown as Record<string, number>;
  }

}

export class LambdaResponsesUpdateCodeSigningConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaUpdateCodeSigningConfigRequest) {
  }

  public get codeSigningConfig(): LambdaResponsesUpdateCodeSigningConfigCodeSigningConfig {
    return new LambdaResponsesUpdateCodeSigningConfigCodeSigningConfig(this.__scope, this.__resources, this.__input);
  }

}

export class LambdaResponsesUpdateCodeSigningConfigCodeSigningConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaUpdateCodeSigningConfigRequest) {
  }

  public get codeSigningConfigId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCodeSigningConfig',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateCodeSigningConfig.CodeSigningConfig.CodeSigningConfigId'),
        outputPath: 'CodeSigningConfig.CodeSigningConfigId',
        parameters: {
          CodeSigningConfigArn: this.__input.codeSigningConfigArn,
          Description: this.__input.description,
          AllowedPublishers: {
            SigningProfileVersionArns: this.__input.allowedPublishers?.signingProfileVersionArns,
          },
          CodeSigningPolicies: {
            UntrustedArtifactOnDeployment: this.__input.codeSigningPolicies?.untrustedArtifactOnDeployment,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCodeSigningConfig.CodeSigningConfig.CodeSigningConfigId', props);
    return resource.getResponseField('CodeSigningConfig.CodeSigningConfigId') as unknown as string;
  }

  public get codeSigningConfigArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCodeSigningConfig',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateCodeSigningConfig.CodeSigningConfig.CodeSigningConfigArn'),
        outputPath: 'CodeSigningConfig.CodeSigningConfigArn',
        parameters: {
          CodeSigningConfigArn: this.__input.codeSigningConfigArn,
          Description: this.__input.description,
          AllowedPublishers: {
            SigningProfileVersionArns: this.__input.allowedPublishers?.signingProfileVersionArns,
          },
          CodeSigningPolicies: {
            UntrustedArtifactOnDeployment: this.__input.codeSigningPolicies?.untrustedArtifactOnDeployment,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCodeSigningConfig.CodeSigningConfig.CodeSigningConfigArn', props);
    return resource.getResponseField('CodeSigningConfig.CodeSigningConfigArn') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCodeSigningConfig',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateCodeSigningConfig.CodeSigningConfig.Description'),
        outputPath: 'CodeSigningConfig.Description',
        parameters: {
          CodeSigningConfigArn: this.__input.codeSigningConfigArn,
          Description: this.__input.description,
          AllowedPublishers: {
            SigningProfileVersionArns: this.__input.allowedPublishers?.signingProfileVersionArns,
          },
          CodeSigningPolicies: {
            UntrustedArtifactOnDeployment: this.__input.codeSigningPolicies?.untrustedArtifactOnDeployment,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCodeSigningConfig.CodeSigningConfig.Description', props);
    return resource.getResponseField('CodeSigningConfig.Description') as unknown as string;
  }

  public get allowedPublishers(): LambdaResponsesUpdateCodeSigningConfigCodeSigningConfigAllowedPublishers {
    return new LambdaResponsesUpdateCodeSigningConfigCodeSigningConfigAllowedPublishers(this.__scope, this.__resources, this.__input);
  }

  public get codeSigningPolicies(): LambdaResponsesUpdateCodeSigningConfigCodeSigningConfigCodeSigningPolicies {
    return new LambdaResponsesUpdateCodeSigningConfigCodeSigningConfigCodeSigningPolicies(this.__scope, this.__resources, this.__input);
  }

  public get lastModified(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCodeSigningConfig',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateCodeSigningConfig.CodeSigningConfig.LastModified'),
        outputPath: 'CodeSigningConfig.LastModified',
        parameters: {
          CodeSigningConfigArn: this.__input.codeSigningConfigArn,
          Description: this.__input.description,
          AllowedPublishers: {
            SigningProfileVersionArns: this.__input.allowedPublishers?.signingProfileVersionArns,
          },
          CodeSigningPolicies: {
            UntrustedArtifactOnDeployment: this.__input.codeSigningPolicies?.untrustedArtifactOnDeployment,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCodeSigningConfig.CodeSigningConfig.LastModified', props);
    return resource.getResponseField('CodeSigningConfig.LastModified') as unknown as string;
  }

}

export class LambdaResponsesUpdateCodeSigningConfigCodeSigningConfigAllowedPublishers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaUpdateCodeSigningConfigRequest) {
  }

  public get signingProfileVersionArns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCodeSigningConfig',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateCodeSigningConfig.CodeSigningConfig.AllowedPublishers.SigningProfileVersionArns'),
        outputPath: 'CodeSigningConfig.AllowedPublishers.SigningProfileVersionArns',
        parameters: {
          CodeSigningConfigArn: this.__input.codeSigningConfigArn,
          Description: this.__input.description,
          AllowedPublishers: {
            SigningProfileVersionArns: this.__input.allowedPublishers?.signingProfileVersionArns,
          },
          CodeSigningPolicies: {
            UntrustedArtifactOnDeployment: this.__input.codeSigningPolicies?.untrustedArtifactOnDeployment,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCodeSigningConfig.CodeSigningConfig.AllowedPublishers.SigningProfileVersionArns', props);
    return resource.getResponseField('CodeSigningConfig.AllowedPublishers.SigningProfileVersionArns') as unknown as string[];
  }

}

export class LambdaResponsesUpdateCodeSigningConfigCodeSigningConfigCodeSigningPolicies {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaUpdateCodeSigningConfigRequest) {
  }

  public get untrustedArtifactOnDeployment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCodeSigningConfig',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateCodeSigningConfig.CodeSigningConfig.CodeSigningPolicies.UntrustedArtifactOnDeployment'),
        outputPath: 'CodeSigningConfig.CodeSigningPolicies.UntrustedArtifactOnDeployment',
        parameters: {
          CodeSigningConfigArn: this.__input.codeSigningConfigArn,
          Description: this.__input.description,
          AllowedPublishers: {
            SigningProfileVersionArns: this.__input.allowedPublishers?.signingProfileVersionArns,
          },
          CodeSigningPolicies: {
            UntrustedArtifactOnDeployment: this.__input.codeSigningPolicies?.untrustedArtifactOnDeployment,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCodeSigningConfig.CodeSigningConfig.CodeSigningPolicies.UntrustedArtifactOnDeployment', props);
    return resource.getResponseField('CodeSigningConfig.CodeSigningPolicies.UntrustedArtifactOnDeployment') as unknown as string;
  }

}

export class LambdaResponsesUpdateEventSourceMapping {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaUpdateEventSourceMappingRequest) {
  }

  public get uuid(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateEventSourceMapping.UUID'),
        outputPath: 'UUID',
        parameters: {
          UUID: this.__input.uuid,
          FunctionName: this.__input.functionName,
          Enabled: this.__input.enabled,
          BatchSize: this.__input.batchSize,
          MaximumBatchingWindowInSeconds: this.__input.maximumBatchingWindowInSeconds,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.__input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.__input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.__input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.__input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.__input.maximumRetryAttempts,
          ParallelizationFactor: this.__input.parallelizationFactor,
          SourceAccessConfigurations: this.__input.sourceAccessConfigurations,
          TumblingWindowInSeconds: this.__input.tumblingWindowInSeconds,
          FunctionResponseTypes: this.__input.functionResponseTypes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEventSourceMapping.UUID', props);
    return resource.getResponseField('UUID') as unknown as string;
  }

  public get startingPosition(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateEventSourceMapping.StartingPosition'),
        outputPath: 'StartingPosition',
        parameters: {
          UUID: this.__input.uuid,
          FunctionName: this.__input.functionName,
          Enabled: this.__input.enabled,
          BatchSize: this.__input.batchSize,
          MaximumBatchingWindowInSeconds: this.__input.maximumBatchingWindowInSeconds,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.__input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.__input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.__input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.__input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.__input.maximumRetryAttempts,
          ParallelizationFactor: this.__input.parallelizationFactor,
          SourceAccessConfigurations: this.__input.sourceAccessConfigurations,
          TumblingWindowInSeconds: this.__input.tumblingWindowInSeconds,
          FunctionResponseTypes: this.__input.functionResponseTypes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEventSourceMapping.StartingPosition', props);
    return resource.getResponseField('StartingPosition') as unknown as string;
  }

  public get startingPositionTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateEventSourceMapping.StartingPositionTimestamp'),
        outputPath: 'StartingPositionTimestamp',
        parameters: {
          UUID: this.__input.uuid,
          FunctionName: this.__input.functionName,
          Enabled: this.__input.enabled,
          BatchSize: this.__input.batchSize,
          MaximumBatchingWindowInSeconds: this.__input.maximumBatchingWindowInSeconds,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.__input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.__input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.__input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.__input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.__input.maximumRetryAttempts,
          ParallelizationFactor: this.__input.parallelizationFactor,
          SourceAccessConfigurations: this.__input.sourceAccessConfigurations,
          TumblingWindowInSeconds: this.__input.tumblingWindowInSeconds,
          FunctionResponseTypes: this.__input.functionResponseTypes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEventSourceMapping.StartingPositionTimestamp', props);
    return resource.getResponseField('StartingPositionTimestamp') as unknown as string;
  }

  public get batchSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateEventSourceMapping.BatchSize'),
        outputPath: 'BatchSize',
        parameters: {
          UUID: this.__input.uuid,
          FunctionName: this.__input.functionName,
          Enabled: this.__input.enabled,
          BatchSize: this.__input.batchSize,
          MaximumBatchingWindowInSeconds: this.__input.maximumBatchingWindowInSeconds,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.__input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.__input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.__input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.__input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.__input.maximumRetryAttempts,
          ParallelizationFactor: this.__input.parallelizationFactor,
          SourceAccessConfigurations: this.__input.sourceAccessConfigurations,
          TumblingWindowInSeconds: this.__input.tumblingWindowInSeconds,
          FunctionResponseTypes: this.__input.functionResponseTypes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEventSourceMapping.BatchSize', props);
    return resource.getResponseField('BatchSize') as unknown as number;
  }

  public get maximumBatchingWindowInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateEventSourceMapping.MaximumBatchingWindowInSeconds'),
        outputPath: 'MaximumBatchingWindowInSeconds',
        parameters: {
          UUID: this.__input.uuid,
          FunctionName: this.__input.functionName,
          Enabled: this.__input.enabled,
          BatchSize: this.__input.batchSize,
          MaximumBatchingWindowInSeconds: this.__input.maximumBatchingWindowInSeconds,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.__input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.__input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.__input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.__input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.__input.maximumRetryAttempts,
          ParallelizationFactor: this.__input.parallelizationFactor,
          SourceAccessConfigurations: this.__input.sourceAccessConfigurations,
          TumblingWindowInSeconds: this.__input.tumblingWindowInSeconds,
          FunctionResponseTypes: this.__input.functionResponseTypes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEventSourceMapping.MaximumBatchingWindowInSeconds', props);
    return resource.getResponseField('MaximumBatchingWindowInSeconds') as unknown as number;
  }

  public get parallelizationFactor(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateEventSourceMapping.ParallelizationFactor'),
        outputPath: 'ParallelizationFactor',
        parameters: {
          UUID: this.__input.uuid,
          FunctionName: this.__input.functionName,
          Enabled: this.__input.enabled,
          BatchSize: this.__input.batchSize,
          MaximumBatchingWindowInSeconds: this.__input.maximumBatchingWindowInSeconds,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.__input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.__input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.__input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.__input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.__input.maximumRetryAttempts,
          ParallelizationFactor: this.__input.parallelizationFactor,
          SourceAccessConfigurations: this.__input.sourceAccessConfigurations,
          TumblingWindowInSeconds: this.__input.tumblingWindowInSeconds,
          FunctionResponseTypes: this.__input.functionResponseTypes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEventSourceMapping.ParallelizationFactor', props);
    return resource.getResponseField('ParallelizationFactor') as unknown as number;
  }

  public get eventSourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateEventSourceMapping.EventSourceArn'),
        outputPath: 'EventSourceArn',
        parameters: {
          UUID: this.__input.uuid,
          FunctionName: this.__input.functionName,
          Enabled: this.__input.enabled,
          BatchSize: this.__input.batchSize,
          MaximumBatchingWindowInSeconds: this.__input.maximumBatchingWindowInSeconds,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.__input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.__input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.__input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.__input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.__input.maximumRetryAttempts,
          ParallelizationFactor: this.__input.parallelizationFactor,
          SourceAccessConfigurations: this.__input.sourceAccessConfigurations,
          TumblingWindowInSeconds: this.__input.tumblingWindowInSeconds,
          FunctionResponseTypes: this.__input.functionResponseTypes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEventSourceMapping.EventSourceArn', props);
    return resource.getResponseField('EventSourceArn') as unknown as string;
  }

  public get functionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateEventSourceMapping.FunctionArn'),
        outputPath: 'FunctionArn',
        parameters: {
          UUID: this.__input.uuid,
          FunctionName: this.__input.functionName,
          Enabled: this.__input.enabled,
          BatchSize: this.__input.batchSize,
          MaximumBatchingWindowInSeconds: this.__input.maximumBatchingWindowInSeconds,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.__input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.__input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.__input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.__input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.__input.maximumRetryAttempts,
          ParallelizationFactor: this.__input.parallelizationFactor,
          SourceAccessConfigurations: this.__input.sourceAccessConfigurations,
          TumblingWindowInSeconds: this.__input.tumblingWindowInSeconds,
          FunctionResponseTypes: this.__input.functionResponseTypes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEventSourceMapping.FunctionArn', props);
    return resource.getResponseField('FunctionArn') as unknown as string;
  }

  public get lastModified(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateEventSourceMapping.LastModified'),
        outputPath: 'LastModified',
        parameters: {
          UUID: this.__input.uuid,
          FunctionName: this.__input.functionName,
          Enabled: this.__input.enabled,
          BatchSize: this.__input.batchSize,
          MaximumBatchingWindowInSeconds: this.__input.maximumBatchingWindowInSeconds,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.__input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.__input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.__input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.__input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.__input.maximumRetryAttempts,
          ParallelizationFactor: this.__input.parallelizationFactor,
          SourceAccessConfigurations: this.__input.sourceAccessConfigurations,
          TumblingWindowInSeconds: this.__input.tumblingWindowInSeconds,
          FunctionResponseTypes: this.__input.functionResponseTypes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEventSourceMapping.LastModified', props);
    return resource.getResponseField('LastModified') as unknown as string;
  }

  public get lastProcessingResult(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateEventSourceMapping.LastProcessingResult'),
        outputPath: 'LastProcessingResult',
        parameters: {
          UUID: this.__input.uuid,
          FunctionName: this.__input.functionName,
          Enabled: this.__input.enabled,
          BatchSize: this.__input.batchSize,
          MaximumBatchingWindowInSeconds: this.__input.maximumBatchingWindowInSeconds,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.__input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.__input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.__input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.__input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.__input.maximumRetryAttempts,
          ParallelizationFactor: this.__input.parallelizationFactor,
          SourceAccessConfigurations: this.__input.sourceAccessConfigurations,
          TumblingWindowInSeconds: this.__input.tumblingWindowInSeconds,
          FunctionResponseTypes: this.__input.functionResponseTypes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEventSourceMapping.LastProcessingResult', props);
    return resource.getResponseField('LastProcessingResult') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateEventSourceMapping.State'),
        outputPath: 'State',
        parameters: {
          UUID: this.__input.uuid,
          FunctionName: this.__input.functionName,
          Enabled: this.__input.enabled,
          BatchSize: this.__input.batchSize,
          MaximumBatchingWindowInSeconds: this.__input.maximumBatchingWindowInSeconds,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.__input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.__input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.__input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.__input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.__input.maximumRetryAttempts,
          ParallelizationFactor: this.__input.parallelizationFactor,
          SourceAccessConfigurations: this.__input.sourceAccessConfigurations,
          TumblingWindowInSeconds: this.__input.tumblingWindowInSeconds,
          FunctionResponseTypes: this.__input.functionResponseTypes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEventSourceMapping.State', props);
    return resource.getResponseField('State') as unknown as string;
  }

  public get stateTransitionReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateEventSourceMapping.StateTransitionReason'),
        outputPath: 'StateTransitionReason',
        parameters: {
          UUID: this.__input.uuid,
          FunctionName: this.__input.functionName,
          Enabled: this.__input.enabled,
          BatchSize: this.__input.batchSize,
          MaximumBatchingWindowInSeconds: this.__input.maximumBatchingWindowInSeconds,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.__input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.__input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.__input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.__input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.__input.maximumRetryAttempts,
          ParallelizationFactor: this.__input.parallelizationFactor,
          SourceAccessConfigurations: this.__input.sourceAccessConfigurations,
          TumblingWindowInSeconds: this.__input.tumblingWindowInSeconds,
          FunctionResponseTypes: this.__input.functionResponseTypes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEventSourceMapping.StateTransitionReason', props);
    return resource.getResponseField('StateTransitionReason') as unknown as string;
  }

  public get destinationConfig(): LambdaResponsesUpdateEventSourceMappingDestinationConfig {
    return new LambdaResponsesUpdateEventSourceMappingDestinationConfig(this.__scope, this.__resources, this.__input);
  }

  public get topics(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateEventSourceMapping.Topics'),
        outputPath: 'Topics',
        parameters: {
          UUID: this.__input.uuid,
          FunctionName: this.__input.functionName,
          Enabled: this.__input.enabled,
          BatchSize: this.__input.batchSize,
          MaximumBatchingWindowInSeconds: this.__input.maximumBatchingWindowInSeconds,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.__input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.__input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.__input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.__input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.__input.maximumRetryAttempts,
          ParallelizationFactor: this.__input.parallelizationFactor,
          SourceAccessConfigurations: this.__input.sourceAccessConfigurations,
          TumblingWindowInSeconds: this.__input.tumblingWindowInSeconds,
          FunctionResponseTypes: this.__input.functionResponseTypes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEventSourceMapping.Topics', props);
    return resource.getResponseField('Topics') as unknown as string[];
  }

  public get queues(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateEventSourceMapping.Queues'),
        outputPath: 'Queues',
        parameters: {
          UUID: this.__input.uuid,
          FunctionName: this.__input.functionName,
          Enabled: this.__input.enabled,
          BatchSize: this.__input.batchSize,
          MaximumBatchingWindowInSeconds: this.__input.maximumBatchingWindowInSeconds,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.__input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.__input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.__input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.__input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.__input.maximumRetryAttempts,
          ParallelizationFactor: this.__input.parallelizationFactor,
          SourceAccessConfigurations: this.__input.sourceAccessConfigurations,
          TumblingWindowInSeconds: this.__input.tumblingWindowInSeconds,
          FunctionResponseTypes: this.__input.functionResponseTypes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEventSourceMapping.Queues', props);
    return resource.getResponseField('Queues') as unknown as string[];
  }

  public get sourceAccessConfigurations(): shapes.LambdaSourceAccessConfiguration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateEventSourceMapping.SourceAccessConfigurations'),
        outputPath: 'SourceAccessConfigurations',
        parameters: {
          UUID: this.__input.uuid,
          FunctionName: this.__input.functionName,
          Enabled: this.__input.enabled,
          BatchSize: this.__input.batchSize,
          MaximumBatchingWindowInSeconds: this.__input.maximumBatchingWindowInSeconds,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.__input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.__input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.__input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.__input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.__input.maximumRetryAttempts,
          ParallelizationFactor: this.__input.parallelizationFactor,
          SourceAccessConfigurations: this.__input.sourceAccessConfigurations,
          TumblingWindowInSeconds: this.__input.tumblingWindowInSeconds,
          FunctionResponseTypes: this.__input.functionResponseTypes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEventSourceMapping.SourceAccessConfigurations', props);
    return resource.getResponseField('SourceAccessConfigurations') as unknown as shapes.LambdaSourceAccessConfiguration[];
  }

  public get selfManagedEventSource(): LambdaResponsesUpdateEventSourceMappingSelfManagedEventSource {
    return new LambdaResponsesUpdateEventSourceMappingSelfManagedEventSource(this.__scope, this.__resources, this.__input);
  }

  public get maximumRecordAgeInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateEventSourceMapping.MaximumRecordAgeInSeconds'),
        outputPath: 'MaximumRecordAgeInSeconds',
        parameters: {
          UUID: this.__input.uuid,
          FunctionName: this.__input.functionName,
          Enabled: this.__input.enabled,
          BatchSize: this.__input.batchSize,
          MaximumBatchingWindowInSeconds: this.__input.maximumBatchingWindowInSeconds,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.__input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.__input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.__input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.__input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.__input.maximumRetryAttempts,
          ParallelizationFactor: this.__input.parallelizationFactor,
          SourceAccessConfigurations: this.__input.sourceAccessConfigurations,
          TumblingWindowInSeconds: this.__input.tumblingWindowInSeconds,
          FunctionResponseTypes: this.__input.functionResponseTypes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEventSourceMapping.MaximumRecordAgeInSeconds', props);
    return resource.getResponseField('MaximumRecordAgeInSeconds') as unknown as number;
  }

  public get bisectBatchOnFunctionError(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateEventSourceMapping.BisectBatchOnFunctionError'),
        outputPath: 'BisectBatchOnFunctionError',
        parameters: {
          UUID: this.__input.uuid,
          FunctionName: this.__input.functionName,
          Enabled: this.__input.enabled,
          BatchSize: this.__input.batchSize,
          MaximumBatchingWindowInSeconds: this.__input.maximumBatchingWindowInSeconds,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.__input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.__input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.__input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.__input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.__input.maximumRetryAttempts,
          ParallelizationFactor: this.__input.parallelizationFactor,
          SourceAccessConfigurations: this.__input.sourceAccessConfigurations,
          TumblingWindowInSeconds: this.__input.tumblingWindowInSeconds,
          FunctionResponseTypes: this.__input.functionResponseTypes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEventSourceMapping.BisectBatchOnFunctionError', props);
    return resource.getResponseField('BisectBatchOnFunctionError') as unknown as boolean;
  }

  public get maximumRetryAttempts(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateEventSourceMapping.MaximumRetryAttempts'),
        outputPath: 'MaximumRetryAttempts',
        parameters: {
          UUID: this.__input.uuid,
          FunctionName: this.__input.functionName,
          Enabled: this.__input.enabled,
          BatchSize: this.__input.batchSize,
          MaximumBatchingWindowInSeconds: this.__input.maximumBatchingWindowInSeconds,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.__input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.__input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.__input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.__input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.__input.maximumRetryAttempts,
          ParallelizationFactor: this.__input.parallelizationFactor,
          SourceAccessConfigurations: this.__input.sourceAccessConfigurations,
          TumblingWindowInSeconds: this.__input.tumblingWindowInSeconds,
          FunctionResponseTypes: this.__input.functionResponseTypes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEventSourceMapping.MaximumRetryAttempts', props);
    return resource.getResponseField('MaximumRetryAttempts') as unknown as number;
  }

  public get tumblingWindowInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateEventSourceMapping.TumblingWindowInSeconds'),
        outputPath: 'TumblingWindowInSeconds',
        parameters: {
          UUID: this.__input.uuid,
          FunctionName: this.__input.functionName,
          Enabled: this.__input.enabled,
          BatchSize: this.__input.batchSize,
          MaximumBatchingWindowInSeconds: this.__input.maximumBatchingWindowInSeconds,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.__input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.__input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.__input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.__input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.__input.maximumRetryAttempts,
          ParallelizationFactor: this.__input.parallelizationFactor,
          SourceAccessConfigurations: this.__input.sourceAccessConfigurations,
          TumblingWindowInSeconds: this.__input.tumblingWindowInSeconds,
          FunctionResponseTypes: this.__input.functionResponseTypes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEventSourceMapping.TumblingWindowInSeconds', props);
    return resource.getResponseField('TumblingWindowInSeconds') as unknown as number;
  }

  public get functionResponseTypes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateEventSourceMapping.FunctionResponseTypes'),
        outputPath: 'FunctionResponseTypes',
        parameters: {
          UUID: this.__input.uuid,
          FunctionName: this.__input.functionName,
          Enabled: this.__input.enabled,
          BatchSize: this.__input.batchSize,
          MaximumBatchingWindowInSeconds: this.__input.maximumBatchingWindowInSeconds,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.__input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.__input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.__input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.__input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.__input.maximumRetryAttempts,
          ParallelizationFactor: this.__input.parallelizationFactor,
          SourceAccessConfigurations: this.__input.sourceAccessConfigurations,
          TumblingWindowInSeconds: this.__input.tumblingWindowInSeconds,
          FunctionResponseTypes: this.__input.functionResponseTypes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEventSourceMapping.FunctionResponseTypes', props);
    return resource.getResponseField('FunctionResponseTypes') as unknown as string[];
  }

}

export class LambdaResponsesUpdateEventSourceMappingDestinationConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaUpdateEventSourceMappingRequest) {
  }

  public get onSuccess(): LambdaResponsesUpdateEventSourceMappingDestinationConfigOnSuccess {
    return new LambdaResponsesUpdateEventSourceMappingDestinationConfigOnSuccess(this.__scope, this.__resources, this.__input);
  }

  public get onFailure(): LambdaResponsesUpdateEventSourceMappingDestinationConfigOnFailure {
    return new LambdaResponsesUpdateEventSourceMappingDestinationConfigOnFailure(this.__scope, this.__resources, this.__input);
  }

}

export class LambdaResponsesUpdateEventSourceMappingDestinationConfigOnSuccess {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaUpdateEventSourceMappingRequest) {
  }

  public get destination(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateEventSourceMapping.DestinationConfig.OnSuccess.Destination'),
        outputPath: 'DestinationConfig.OnSuccess.Destination',
        parameters: {
          UUID: this.__input.uuid,
          FunctionName: this.__input.functionName,
          Enabled: this.__input.enabled,
          BatchSize: this.__input.batchSize,
          MaximumBatchingWindowInSeconds: this.__input.maximumBatchingWindowInSeconds,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.__input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.__input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.__input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.__input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.__input.maximumRetryAttempts,
          ParallelizationFactor: this.__input.parallelizationFactor,
          SourceAccessConfigurations: this.__input.sourceAccessConfigurations,
          TumblingWindowInSeconds: this.__input.tumblingWindowInSeconds,
          FunctionResponseTypes: this.__input.functionResponseTypes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEventSourceMapping.DestinationConfig.OnSuccess.Destination', props);
    return resource.getResponseField('DestinationConfig.OnSuccess.Destination') as unknown as string;
  }

}

export class LambdaResponsesUpdateEventSourceMappingDestinationConfigOnFailure {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaUpdateEventSourceMappingRequest) {
  }

  public get destination(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateEventSourceMapping.DestinationConfig.OnFailure.Destination'),
        outputPath: 'DestinationConfig.OnFailure.Destination',
        parameters: {
          UUID: this.__input.uuid,
          FunctionName: this.__input.functionName,
          Enabled: this.__input.enabled,
          BatchSize: this.__input.batchSize,
          MaximumBatchingWindowInSeconds: this.__input.maximumBatchingWindowInSeconds,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.__input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.__input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.__input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.__input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.__input.maximumRetryAttempts,
          ParallelizationFactor: this.__input.parallelizationFactor,
          SourceAccessConfigurations: this.__input.sourceAccessConfigurations,
          TumblingWindowInSeconds: this.__input.tumblingWindowInSeconds,
          FunctionResponseTypes: this.__input.functionResponseTypes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEventSourceMapping.DestinationConfig.OnFailure.Destination', props);
    return resource.getResponseField('DestinationConfig.OnFailure.Destination') as unknown as string;
  }

}

export class LambdaResponsesUpdateEventSourceMappingSelfManagedEventSource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaUpdateEventSourceMappingRequest) {
  }

  public get endpoints(): Record<string, string[]> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEventSourceMapping',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateEventSourceMapping.SelfManagedEventSource.Endpoints'),
        outputPath: 'SelfManagedEventSource.Endpoints',
        parameters: {
          UUID: this.__input.uuid,
          FunctionName: this.__input.functionName,
          Enabled: this.__input.enabled,
          BatchSize: this.__input.batchSize,
          MaximumBatchingWindowInSeconds: this.__input.maximumBatchingWindowInSeconds,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.__input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.__input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.__input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.__input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.__input.maximumRetryAttempts,
          ParallelizationFactor: this.__input.parallelizationFactor,
          SourceAccessConfigurations: this.__input.sourceAccessConfigurations,
          TumblingWindowInSeconds: this.__input.tumblingWindowInSeconds,
          FunctionResponseTypes: this.__input.functionResponseTypes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEventSourceMapping.SelfManagedEventSource.Endpoints', props);
    return resource.getResponseField('SelfManagedEventSource.Endpoints') as unknown as Record<string, string[]>;
  }

}

export class LambdaResponsesUpdateFunctionCode {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaUpdateFunctionCodeRequest) {
  }

  public get functionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionCode',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionCode.FunctionName'),
        outputPath: 'FunctionName',
        parameters: {
          FunctionName: this.__input.functionName,
          ZipFile: {
          },
          S3Bucket: this.__input.s3Bucket,
          S3Key: this.__input.s3Key,
          S3ObjectVersion: this.__input.s3ObjectVersion,
          ImageUri: this.__input.imageUri,
          Publish: this.__input.publish,
          DryRun: this.__input.dryRun,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionCode.FunctionName', props);
    return resource.getResponseField('FunctionName') as unknown as string;
  }

  public get functionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionCode',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionCode.FunctionArn'),
        outputPath: 'FunctionArn',
        parameters: {
          FunctionName: this.__input.functionName,
          ZipFile: {
          },
          S3Bucket: this.__input.s3Bucket,
          S3Key: this.__input.s3Key,
          S3ObjectVersion: this.__input.s3ObjectVersion,
          ImageUri: this.__input.imageUri,
          Publish: this.__input.publish,
          DryRun: this.__input.dryRun,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionCode.FunctionArn', props);
    return resource.getResponseField('FunctionArn') as unknown as string;
  }

  public get runtime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionCode',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionCode.Runtime'),
        outputPath: 'Runtime',
        parameters: {
          FunctionName: this.__input.functionName,
          ZipFile: {
          },
          S3Bucket: this.__input.s3Bucket,
          S3Key: this.__input.s3Key,
          S3ObjectVersion: this.__input.s3ObjectVersion,
          ImageUri: this.__input.imageUri,
          Publish: this.__input.publish,
          DryRun: this.__input.dryRun,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionCode.Runtime', props);
    return resource.getResponseField('Runtime') as unknown as string;
  }

  public get role(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionCode',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionCode.Role'),
        outputPath: 'Role',
        parameters: {
          FunctionName: this.__input.functionName,
          ZipFile: {
          },
          S3Bucket: this.__input.s3Bucket,
          S3Key: this.__input.s3Key,
          S3ObjectVersion: this.__input.s3ObjectVersion,
          ImageUri: this.__input.imageUri,
          Publish: this.__input.publish,
          DryRun: this.__input.dryRun,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionCode.Role', props);
    return resource.getResponseField('Role') as unknown as string;
  }

  public get handler(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionCode',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionCode.Handler'),
        outputPath: 'Handler',
        parameters: {
          FunctionName: this.__input.functionName,
          ZipFile: {
          },
          S3Bucket: this.__input.s3Bucket,
          S3Key: this.__input.s3Key,
          S3ObjectVersion: this.__input.s3ObjectVersion,
          ImageUri: this.__input.imageUri,
          Publish: this.__input.publish,
          DryRun: this.__input.dryRun,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionCode.Handler', props);
    return resource.getResponseField('Handler') as unknown as string;
  }

  public get codeSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionCode',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionCode.CodeSize'),
        outputPath: 'CodeSize',
        parameters: {
          FunctionName: this.__input.functionName,
          ZipFile: {
          },
          S3Bucket: this.__input.s3Bucket,
          S3Key: this.__input.s3Key,
          S3ObjectVersion: this.__input.s3ObjectVersion,
          ImageUri: this.__input.imageUri,
          Publish: this.__input.publish,
          DryRun: this.__input.dryRun,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionCode.CodeSize', props);
    return resource.getResponseField('CodeSize') as unknown as number;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionCode',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionCode.Description'),
        outputPath: 'Description',
        parameters: {
          FunctionName: this.__input.functionName,
          ZipFile: {
          },
          S3Bucket: this.__input.s3Bucket,
          S3Key: this.__input.s3Key,
          S3ObjectVersion: this.__input.s3ObjectVersion,
          ImageUri: this.__input.imageUri,
          Publish: this.__input.publish,
          DryRun: this.__input.dryRun,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionCode.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get timeout(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionCode',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionCode.Timeout'),
        outputPath: 'Timeout',
        parameters: {
          FunctionName: this.__input.functionName,
          ZipFile: {
          },
          S3Bucket: this.__input.s3Bucket,
          S3Key: this.__input.s3Key,
          S3ObjectVersion: this.__input.s3ObjectVersion,
          ImageUri: this.__input.imageUri,
          Publish: this.__input.publish,
          DryRun: this.__input.dryRun,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionCode.Timeout', props);
    return resource.getResponseField('Timeout') as unknown as number;
  }

  public get memorySize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionCode',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionCode.MemorySize'),
        outputPath: 'MemorySize',
        parameters: {
          FunctionName: this.__input.functionName,
          ZipFile: {
          },
          S3Bucket: this.__input.s3Bucket,
          S3Key: this.__input.s3Key,
          S3ObjectVersion: this.__input.s3ObjectVersion,
          ImageUri: this.__input.imageUri,
          Publish: this.__input.publish,
          DryRun: this.__input.dryRun,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionCode.MemorySize', props);
    return resource.getResponseField('MemorySize') as unknown as number;
  }

  public get lastModified(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionCode',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionCode.LastModified'),
        outputPath: 'LastModified',
        parameters: {
          FunctionName: this.__input.functionName,
          ZipFile: {
          },
          S3Bucket: this.__input.s3Bucket,
          S3Key: this.__input.s3Key,
          S3ObjectVersion: this.__input.s3ObjectVersion,
          ImageUri: this.__input.imageUri,
          Publish: this.__input.publish,
          DryRun: this.__input.dryRun,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionCode.LastModified', props);
    return resource.getResponseField('LastModified') as unknown as string;
  }

  public get codeSha256(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionCode',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionCode.CodeSha256'),
        outputPath: 'CodeSha256',
        parameters: {
          FunctionName: this.__input.functionName,
          ZipFile: {
          },
          S3Bucket: this.__input.s3Bucket,
          S3Key: this.__input.s3Key,
          S3ObjectVersion: this.__input.s3ObjectVersion,
          ImageUri: this.__input.imageUri,
          Publish: this.__input.publish,
          DryRun: this.__input.dryRun,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionCode.CodeSha256', props);
    return resource.getResponseField('CodeSha256') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionCode',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionCode.Version'),
        outputPath: 'Version',
        parameters: {
          FunctionName: this.__input.functionName,
          ZipFile: {
          },
          S3Bucket: this.__input.s3Bucket,
          S3Key: this.__input.s3Key,
          S3ObjectVersion: this.__input.s3ObjectVersion,
          ImageUri: this.__input.imageUri,
          Publish: this.__input.publish,
          DryRun: this.__input.dryRun,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionCode.Version', props);
    return resource.getResponseField('Version') as unknown as string;
  }

  public get vpcConfig(): LambdaResponsesUpdateFunctionCodeVpcConfig {
    return new LambdaResponsesUpdateFunctionCodeVpcConfig(this.__scope, this.__resources, this.__input);
  }

  public get deadLetterConfig(): LambdaResponsesUpdateFunctionCodeDeadLetterConfig {
    return new LambdaResponsesUpdateFunctionCodeDeadLetterConfig(this.__scope, this.__resources, this.__input);
  }

  public get environment(): LambdaResponsesUpdateFunctionCodeEnvironment {
    return new LambdaResponsesUpdateFunctionCodeEnvironment(this.__scope, this.__resources, this.__input);
  }

  public get kmsKeyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionCode',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionCode.KMSKeyArn'),
        outputPath: 'KMSKeyArn',
        parameters: {
          FunctionName: this.__input.functionName,
          ZipFile: {
          },
          S3Bucket: this.__input.s3Bucket,
          S3Key: this.__input.s3Key,
          S3ObjectVersion: this.__input.s3ObjectVersion,
          ImageUri: this.__input.imageUri,
          Publish: this.__input.publish,
          DryRun: this.__input.dryRun,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionCode.KMSKeyArn', props);
    return resource.getResponseField('KMSKeyArn') as unknown as string;
  }

  public get tracingConfig(): LambdaResponsesUpdateFunctionCodeTracingConfig {
    return new LambdaResponsesUpdateFunctionCodeTracingConfig(this.__scope, this.__resources, this.__input);
  }

  public get masterArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionCode',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionCode.MasterArn'),
        outputPath: 'MasterArn',
        parameters: {
          FunctionName: this.__input.functionName,
          ZipFile: {
          },
          S3Bucket: this.__input.s3Bucket,
          S3Key: this.__input.s3Key,
          S3ObjectVersion: this.__input.s3ObjectVersion,
          ImageUri: this.__input.imageUri,
          Publish: this.__input.publish,
          DryRun: this.__input.dryRun,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionCode.MasterArn', props);
    return resource.getResponseField('MasterArn') as unknown as string;
  }

  public get revisionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionCode',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionCode.RevisionId'),
        outputPath: 'RevisionId',
        parameters: {
          FunctionName: this.__input.functionName,
          ZipFile: {
          },
          S3Bucket: this.__input.s3Bucket,
          S3Key: this.__input.s3Key,
          S3ObjectVersion: this.__input.s3ObjectVersion,
          ImageUri: this.__input.imageUri,
          Publish: this.__input.publish,
          DryRun: this.__input.dryRun,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionCode.RevisionId', props);
    return resource.getResponseField('RevisionId') as unknown as string;
  }

  public get layers(): shapes.LambdaLayer[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionCode',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionCode.Layers'),
        outputPath: 'Layers',
        parameters: {
          FunctionName: this.__input.functionName,
          ZipFile: {
          },
          S3Bucket: this.__input.s3Bucket,
          S3Key: this.__input.s3Key,
          S3ObjectVersion: this.__input.s3ObjectVersion,
          ImageUri: this.__input.imageUri,
          Publish: this.__input.publish,
          DryRun: this.__input.dryRun,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionCode.Layers', props);
    return resource.getResponseField('Layers') as unknown as shapes.LambdaLayer[];
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionCode',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionCode.State'),
        outputPath: 'State',
        parameters: {
          FunctionName: this.__input.functionName,
          ZipFile: {
          },
          S3Bucket: this.__input.s3Bucket,
          S3Key: this.__input.s3Key,
          S3ObjectVersion: this.__input.s3ObjectVersion,
          ImageUri: this.__input.imageUri,
          Publish: this.__input.publish,
          DryRun: this.__input.dryRun,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionCode.State', props);
    return resource.getResponseField('State') as unknown as string;
  }

  public get stateReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionCode',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionCode.StateReason'),
        outputPath: 'StateReason',
        parameters: {
          FunctionName: this.__input.functionName,
          ZipFile: {
          },
          S3Bucket: this.__input.s3Bucket,
          S3Key: this.__input.s3Key,
          S3ObjectVersion: this.__input.s3ObjectVersion,
          ImageUri: this.__input.imageUri,
          Publish: this.__input.publish,
          DryRun: this.__input.dryRun,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionCode.StateReason', props);
    return resource.getResponseField('StateReason') as unknown as string;
  }

  public get stateReasonCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionCode',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionCode.StateReasonCode'),
        outputPath: 'StateReasonCode',
        parameters: {
          FunctionName: this.__input.functionName,
          ZipFile: {
          },
          S3Bucket: this.__input.s3Bucket,
          S3Key: this.__input.s3Key,
          S3ObjectVersion: this.__input.s3ObjectVersion,
          ImageUri: this.__input.imageUri,
          Publish: this.__input.publish,
          DryRun: this.__input.dryRun,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionCode.StateReasonCode', props);
    return resource.getResponseField('StateReasonCode') as unknown as string;
  }

  public get lastUpdateStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionCode',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionCode.LastUpdateStatus'),
        outputPath: 'LastUpdateStatus',
        parameters: {
          FunctionName: this.__input.functionName,
          ZipFile: {
          },
          S3Bucket: this.__input.s3Bucket,
          S3Key: this.__input.s3Key,
          S3ObjectVersion: this.__input.s3ObjectVersion,
          ImageUri: this.__input.imageUri,
          Publish: this.__input.publish,
          DryRun: this.__input.dryRun,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionCode.LastUpdateStatus', props);
    return resource.getResponseField('LastUpdateStatus') as unknown as string;
  }

  public get lastUpdateStatusReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionCode',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionCode.LastUpdateStatusReason'),
        outputPath: 'LastUpdateStatusReason',
        parameters: {
          FunctionName: this.__input.functionName,
          ZipFile: {
          },
          S3Bucket: this.__input.s3Bucket,
          S3Key: this.__input.s3Key,
          S3ObjectVersion: this.__input.s3ObjectVersion,
          ImageUri: this.__input.imageUri,
          Publish: this.__input.publish,
          DryRun: this.__input.dryRun,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionCode.LastUpdateStatusReason', props);
    return resource.getResponseField('LastUpdateStatusReason') as unknown as string;
  }

  public get lastUpdateStatusReasonCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionCode',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionCode.LastUpdateStatusReasonCode'),
        outputPath: 'LastUpdateStatusReasonCode',
        parameters: {
          FunctionName: this.__input.functionName,
          ZipFile: {
          },
          S3Bucket: this.__input.s3Bucket,
          S3Key: this.__input.s3Key,
          S3ObjectVersion: this.__input.s3ObjectVersion,
          ImageUri: this.__input.imageUri,
          Publish: this.__input.publish,
          DryRun: this.__input.dryRun,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionCode.LastUpdateStatusReasonCode', props);
    return resource.getResponseField('LastUpdateStatusReasonCode') as unknown as string;
  }

  public get fileSystemConfigs(): shapes.LambdaFileSystemConfig[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionCode',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionCode.FileSystemConfigs'),
        outputPath: 'FileSystemConfigs',
        parameters: {
          FunctionName: this.__input.functionName,
          ZipFile: {
          },
          S3Bucket: this.__input.s3Bucket,
          S3Key: this.__input.s3Key,
          S3ObjectVersion: this.__input.s3ObjectVersion,
          ImageUri: this.__input.imageUri,
          Publish: this.__input.publish,
          DryRun: this.__input.dryRun,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionCode.FileSystemConfigs', props);
    return resource.getResponseField('FileSystemConfigs') as unknown as shapes.LambdaFileSystemConfig[];
  }

  public get packageType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionCode',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionCode.PackageType'),
        outputPath: 'PackageType',
        parameters: {
          FunctionName: this.__input.functionName,
          ZipFile: {
          },
          S3Bucket: this.__input.s3Bucket,
          S3Key: this.__input.s3Key,
          S3ObjectVersion: this.__input.s3ObjectVersion,
          ImageUri: this.__input.imageUri,
          Publish: this.__input.publish,
          DryRun: this.__input.dryRun,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionCode.PackageType', props);
    return resource.getResponseField('PackageType') as unknown as string;
  }

  public get imageConfigResponse(): LambdaResponsesUpdateFunctionCodeImageConfigResponse {
    return new LambdaResponsesUpdateFunctionCodeImageConfigResponse(this.__scope, this.__resources, this.__input);
  }

  public get signingProfileVersionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionCode',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionCode.SigningProfileVersionArn'),
        outputPath: 'SigningProfileVersionArn',
        parameters: {
          FunctionName: this.__input.functionName,
          ZipFile: {
          },
          S3Bucket: this.__input.s3Bucket,
          S3Key: this.__input.s3Key,
          S3ObjectVersion: this.__input.s3ObjectVersion,
          ImageUri: this.__input.imageUri,
          Publish: this.__input.publish,
          DryRun: this.__input.dryRun,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionCode.SigningProfileVersionArn', props);
    return resource.getResponseField('SigningProfileVersionArn') as unknown as string;
  }

  public get signingJobArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionCode',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionCode.SigningJobArn'),
        outputPath: 'SigningJobArn',
        parameters: {
          FunctionName: this.__input.functionName,
          ZipFile: {
          },
          S3Bucket: this.__input.s3Bucket,
          S3Key: this.__input.s3Key,
          S3ObjectVersion: this.__input.s3ObjectVersion,
          ImageUri: this.__input.imageUri,
          Publish: this.__input.publish,
          DryRun: this.__input.dryRun,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionCode.SigningJobArn', props);
    return resource.getResponseField('SigningJobArn') as unknown as string;
  }

}

export class LambdaResponsesUpdateFunctionCodeVpcConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaUpdateFunctionCodeRequest) {
  }

  public get subnetIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionCode',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionCode.VpcConfig.SubnetIds'),
        outputPath: 'VpcConfig.SubnetIds',
        parameters: {
          FunctionName: this.__input.functionName,
          ZipFile: {
          },
          S3Bucket: this.__input.s3Bucket,
          S3Key: this.__input.s3Key,
          S3ObjectVersion: this.__input.s3ObjectVersion,
          ImageUri: this.__input.imageUri,
          Publish: this.__input.publish,
          DryRun: this.__input.dryRun,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionCode.VpcConfig.SubnetIds', props);
    return resource.getResponseField('VpcConfig.SubnetIds') as unknown as string[];
  }

  public get securityGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionCode',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionCode.VpcConfig.SecurityGroupIds'),
        outputPath: 'VpcConfig.SecurityGroupIds',
        parameters: {
          FunctionName: this.__input.functionName,
          ZipFile: {
          },
          S3Bucket: this.__input.s3Bucket,
          S3Key: this.__input.s3Key,
          S3ObjectVersion: this.__input.s3ObjectVersion,
          ImageUri: this.__input.imageUri,
          Publish: this.__input.publish,
          DryRun: this.__input.dryRun,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionCode.VpcConfig.SecurityGroupIds', props);
    return resource.getResponseField('VpcConfig.SecurityGroupIds') as unknown as string[];
  }

  public get vpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionCode',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionCode.VpcConfig.VpcId'),
        outputPath: 'VpcConfig.VpcId',
        parameters: {
          FunctionName: this.__input.functionName,
          ZipFile: {
          },
          S3Bucket: this.__input.s3Bucket,
          S3Key: this.__input.s3Key,
          S3ObjectVersion: this.__input.s3ObjectVersion,
          ImageUri: this.__input.imageUri,
          Publish: this.__input.publish,
          DryRun: this.__input.dryRun,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionCode.VpcConfig.VpcId', props);
    return resource.getResponseField('VpcConfig.VpcId') as unknown as string;
  }

}

export class LambdaResponsesUpdateFunctionCodeDeadLetterConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaUpdateFunctionCodeRequest) {
  }

  public get targetArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionCode',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionCode.DeadLetterConfig.TargetArn'),
        outputPath: 'DeadLetterConfig.TargetArn',
        parameters: {
          FunctionName: this.__input.functionName,
          ZipFile: {
          },
          S3Bucket: this.__input.s3Bucket,
          S3Key: this.__input.s3Key,
          S3ObjectVersion: this.__input.s3ObjectVersion,
          ImageUri: this.__input.imageUri,
          Publish: this.__input.publish,
          DryRun: this.__input.dryRun,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionCode.DeadLetterConfig.TargetArn', props);
    return resource.getResponseField('DeadLetterConfig.TargetArn') as unknown as string;
  }

}

export class LambdaResponsesUpdateFunctionCodeEnvironment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaUpdateFunctionCodeRequest) {
  }

  public get variables(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionCode',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionCode.Environment.Variables'),
        outputPath: 'Environment.Variables',
        parameters: {
          FunctionName: this.__input.functionName,
          ZipFile: {
          },
          S3Bucket: this.__input.s3Bucket,
          S3Key: this.__input.s3Key,
          S3ObjectVersion: this.__input.s3ObjectVersion,
          ImageUri: this.__input.imageUri,
          Publish: this.__input.publish,
          DryRun: this.__input.dryRun,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionCode.Environment.Variables', props);
    return resource.getResponseField('Environment.Variables') as unknown as Record<string, string>;
  }

  public get error(): LambdaResponsesUpdateFunctionCodeEnvironmentError {
    return new LambdaResponsesUpdateFunctionCodeEnvironmentError(this.__scope, this.__resources, this.__input);
  }

}

export class LambdaResponsesUpdateFunctionCodeEnvironmentError {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaUpdateFunctionCodeRequest) {
  }

  public get errorCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionCode',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionCode.Environment.Error.ErrorCode'),
        outputPath: 'Environment.Error.ErrorCode',
        parameters: {
          FunctionName: this.__input.functionName,
          ZipFile: {
          },
          S3Bucket: this.__input.s3Bucket,
          S3Key: this.__input.s3Key,
          S3ObjectVersion: this.__input.s3ObjectVersion,
          ImageUri: this.__input.imageUri,
          Publish: this.__input.publish,
          DryRun: this.__input.dryRun,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionCode.Environment.Error.ErrorCode', props);
    return resource.getResponseField('Environment.Error.ErrorCode') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionCode',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionCode.Environment.Error.Message'),
        outputPath: 'Environment.Error.Message',
        parameters: {
          FunctionName: this.__input.functionName,
          ZipFile: {
          },
          S3Bucket: this.__input.s3Bucket,
          S3Key: this.__input.s3Key,
          S3ObjectVersion: this.__input.s3ObjectVersion,
          ImageUri: this.__input.imageUri,
          Publish: this.__input.publish,
          DryRun: this.__input.dryRun,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionCode.Environment.Error.Message', props);
    return resource.getResponseField('Environment.Error.Message') as unknown as string;
  }

}

export class LambdaResponsesUpdateFunctionCodeTracingConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaUpdateFunctionCodeRequest) {
  }

  public get mode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionCode',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionCode.TracingConfig.Mode'),
        outputPath: 'TracingConfig.Mode',
        parameters: {
          FunctionName: this.__input.functionName,
          ZipFile: {
          },
          S3Bucket: this.__input.s3Bucket,
          S3Key: this.__input.s3Key,
          S3ObjectVersion: this.__input.s3ObjectVersion,
          ImageUri: this.__input.imageUri,
          Publish: this.__input.publish,
          DryRun: this.__input.dryRun,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionCode.TracingConfig.Mode', props);
    return resource.getResponseField('TracingConfig.Mode') as unknown as string;
  }

}

export class LambdaResponsesUpdateFunctionCodeImageConfigResponse {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaUpdateFunctionCodeRequest) {
  }

  public get imageConfig(): LambdaResponsesUpdateFunctionCodeImageConfigResponseImageConfig {
    return new LambdaResponsesUpdateFunctionCodeImageConfigResponseImageConfig(this.__scope, this.__resources, this.__input);
  }

  public get error(): LambdaResponsesUpdateFunctionCodeImageConfigResponseError {
    return new LambdaResponsesUpdateFunctionCodeImageConfigResponseError(this.__scope, this.__resources, this.__input);
  }

}

export class LambdaResponsesUpdateFunctionCodeImageConfigResponseImageConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaUpdateFunctionCodeRequest) {
  }

  public get entryPoint(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionCode',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionCode.ImageConfigResponse.ImageConfig.EntryPoint'),
        outputPath: 'ImageConfigResponse.ImageConfig.EntryPoint',
        parameters: {
          FunctionName: this.__input.functionName,
          ZipFile: {
          },
          S3Bucket: this.__input.s3Bucket,
          S3Key: this.__input.s3Key,
          S3ObjectVersion: this.__input.s3ObjectVersion,
          ImageUri: this.__input.imageUri,
          Publish: this.__input.publish,
          DryRun: this.__input.dryRun,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionCode.ImageConfigResponse.ImageConfig.EntryPoint', props);
    return resource.getResponseField('ImageConfigResponse.ImageConfig.EntryPoint') as unknown as string[];
  }

  public get command(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionCode',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionCode.ImageConfigResponse.ImageConfig.Command'),
        outputPath: 'ImageConfigResponse.ImageConfig.Command',
        parameters: {
          FunctionName: this.__input.functionName,
          ZipFile: {
          },
          S3Bucket: this.__input.s3Bucket,
          S3Key: this.__input.s3Key,
          S3ObjectVersion: this.__input.s3ObjectVersion,
          ImageUri: this.__input.imageUri,
          Publish: this.__input.publish,
          DryRun: this.__input.dryRun,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionCode.ImageConfigResponse.ImageConfig.Command', props);
    return resource.getResponseField('ImageConfigResponse.ImageConfig.Command') as unknown as string[];
  }

  public get workingDirectory(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionCode',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionCode.ImageConfigResponse.ImageConfig.WorkingDirectory'),
        outputPath: 'ImageConfigResponse.ImageConfig.WorkingDirectory',
        parameters: {
          FunctionName: this.__input.functionName,
          ZipFile: {
          },
          S3Bucket: this.__input.s3Bucket,
          S3Key: this.__input.s3Key,
          S3ObjectVersion: this.__input.s3ObjectVersion,
          ImageUri: this.__input.imageUri,
          Publish: this.__input.publish,
          DryRun: this.__input.dryRun,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionCode.ImageConfigResponse.ImageConfig.WorkingDirectory', props);
    return resource.getResponseField('ImageConfigResponse.ImageConfig.WorkingDirectory') as unknown as string;
  }

}

export class LambdaResponsesUpdateFunctionCodeImageConfigResponseError {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaUpdateFunctionCodeRequest) {
  }

  public get errorCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionCode',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionCode.ImageConfigResponse.Error.ErrorCode'),
        outputPath: 'ImageConfigResponse.Error.ErrorCode',
        parameters: {
          FunctionName: this.__input.functionName,
          ZipFile: {
          },
          S3Bucket: this.__input.s3Bucket,
          S3Key: this.__input.s3Key,
          S3ObjectVersion: this.__input.s3ObjectVersion,
          ImageUri: this.__input.imageUri,
          Publish: this.__input.publish,
          DryRun: this.__input.dryRun,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionCode.ImageConfigResponse.Error.ErrorCode', props);
    return resource.getResponseField('ImageConfigResponse.Error.ErrorCode') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionCode',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionCode.ImageConfigResponse.Error.Message'),
        outputPath: 'ImageConfigResponse.Error.Message',
        parameters: {
          FunctionName: this.__input.functionName,
          ZipFile: {
          },
          S3Bucket: this.__input.s3Bucket,
          S3Key: this.__input.s3Key,
          S3ObjectVersion: this.__input.s3ObjectVersion,
          ImageUri: this.__input.imageUri,
          Publish: this.__input.publish,
          DryRun: this.__input.dryRun,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionCode.ImageConfigResponse.Error.Message', props);
    return resource.getResponseField('ImageConfigResponse.Error.Message') as unknown as string;
  }

}

export class LambdaResponsesUpdateFunctionConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaUpdateFunctionConfigurationRequest) {
  }

  public get functionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionConfiguration.FunctionName'),
        outputPath: 'FunctionName',
        parameters: {
          FunctionName: this.__input.functionName,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          Runtime: this.__input.runtime,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          RevisionId: this.__input.revisionId,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionConfiguration.FunctionName', props);
    return resource.getResponseField('FunctionName') as unknown as string;
  }

  public get functionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionConfiguration.FunctionArn'),
        outputPath: 'FunctionArn',
        parameters: {
          FunctionName: this.__input.functionName,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          Runtime: this.__input.runtime,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          RevisionId: this.__input.revisionId,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionConfiguration.FunctionArn', props);
    return resource.getResponseField('FunctionArn') as unknown as string;
  }

  public get runtime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionConfiguration.Runtime'),
        outputPath: 'Runtime',
        parameters: {
          FunctionName: this.__input.functionName,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          Runtime: this.__input.runtime,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          RevisionId: this.__input.revisionId,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionConfiguration.Runtime', props);
    return resource.getResponseField('Runtime') as unknown as string;
  }

  public get role(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionConfiguration.Role'),
        outputPath: 'Role',
        parameters: {
          FunctionName: this.__input.functionName,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          Runtime: this.__input.runtime,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          RevisionId: this.__input.revisionId,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionConfiguration.Role', props);
    return resource.getResponseField('Role') as unknown as string;
  }

  public get handler(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionConfiguration.Handler'),
        outputPath: 'Handler',
        parameters: {
          FunctionName: this.__input.functionName,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          Runtime: this.__input.runtime,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          RevisionId: this.__input.revisionId,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionConfiguration.Handler', props);
    return resource.getResponseField('Handler') as unknown as string;
  }

  public get codeSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionConfiguration.CodeSize'),
        outputPath: 'CodeSize',
        parameters: {
          FunctionName: this.__input.functionName,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          Runtime: this.__input.runtime,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          RevisionId: this.__input.revisionId,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionConfiguration.CodeSize', props);
    return resource.getResponseField('CodeSize') as unknown as number;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionConfiguration.Description'),
        outputPath: 'Description',
        parameters: {
          FunctionName: this.__input.functionName,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          Runtime: this.__input.runtime,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          RevisionId: this.__input.revisionId,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionConfiguration.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get timeout(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionConfiguration.Timeout'),
        outputPath: 'Timeout',
        parameters: {
          FunctionName: this.__input.functionName,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          Runtime: this.__input.runtime,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          RevisionId: this.__input.revisionId,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionConfiguration.Timeout', props);
    return resource.getResponseField('Timeout') as unknown as number;
  }

  public get memorySize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionConfiguration.MemorySize'),
        outputPath: 'MemorySize',
        parameters: {
          FunctionName: this.__input.functionName,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          Runtime: this.__input.runtime,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          RevisionId: this.__input.revisionId,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionConfiguration.MemorySize', props);
    return resource.getResponseField('MemorySize') as unknown as number;
  }

  public get lastModified(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionConfiguration.LastModified'),
        outputPath: 'LastModified',
        parameters: {
          FunctionName: this.__input.functionName,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          Runtime: this.__input.runtime,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          RevisionId: this.__input.revisionId,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionConfiguration.LastModified', props);
    return resource.getResponseField('LastModified') as unknown as string;
  }

  public get codeSha256(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionConfiguration.CodeSha256'),
        outputPath: 'CodeSha256',
        parameters: {
          FunctionName: this.__input.functionName,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          Runtime: this.__input.runtime,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          RevisionId: this.__input.revisionId,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionConfiguration.CodeSha256', props);
    return resource.getResponseField('CodeSha256') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionConfiguration.Version'),
        outputPath: 'Version',
        parameters: {
          FunctionName: this.__input.functionName,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          Runtime: this.__input.runtime,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          RevisionId: this.__input.revisionId,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionConfiguration.Version', props);
    return resource.getResponseField('Version') as unknown as string;
  }

  public get vpcConfig(): LambdaResponsesUpdateFunctionConfigurationVpcConfig {
    return new LambdaResponsesUpdateFunctionConfigurationVpcConfig(this.__scope, this.__resources, this.__input);
  }

  public get deadLetterConfig(): LambdaResponsesUpdateFunctionConfigurationDeadLetterConfig {
    return new LambdaResponsesUpdateFunctionConfigurationDeadLetterConfig(this.__scope, this.__resources, this.__input);
  }

  public get environment(): LambdaResponsesUpdateFunctionConfigurationEnvironment {
    return new LambdaResponsesUpdateFunctionConfigurationEnvironment(this.__scope, this.__resources, this.__input);
  }

  public get kmsKeyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionConfiguration.KMSKeyArn'),
        outputPath: 'KMSKeyArn',
        parameters: {
          FunctionName: this.__input.functionName,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          Runtime: this.__input.runtime,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          RevisionId: this.__input.revisionId,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionConfiguration.KMSKeyArn', props);
    return resource.getResponseField('KMSKeyArn') as unknown as string;
  }

  public get tracingConfig(): LambdaResponsesUpdateFunctionConfigurationTracingConfig {
    return new LambdaResponsesUpdateFunctionConfigurationTracingConfig(this.__scope, this.__resources, this.__input);
  }

  public get masterArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionConfiguration.MasterArn'),
        outputPath: 'MasterArn',
        parameters: {
          FunctionName: this.__input.functionName,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          Runtime: this.__input.runtime,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          RevisionId: this.__input.revisionId,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionConfiguration.MasterArn', props);
    return resource.getResponseField('MasterArn') as unknown as string;
  }

  public get revisionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionConfiguration.RevisionId'),
        outputPath: 'RevisionId',
        parameters: {
          FunctionName: this.__input.functionName,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          Runtime: this.__input.runtime,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          RevisionId: this.__input.revisionId,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionConfiguration.RevisionId', props);
    return resource.getResponseField('RevisionId') as unknown as string;
  }

  public get layers(): shapes.LambdaLayer[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionConfiguration.Layers'),
        outputPath: 'Layers',
        parameters: {
          FunctionName: this.__input.functionName,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          Runtime: this.__input.runtime,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          RevisionId: this.__input.revisionId,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionConfiguration.Layers', props);
    return resource.getResponseField('Layers') as unknown as shapes.LambdaLayer[];
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionConfiguration.State'),
        outputPath: 'State',
        parameters: {
          FunctionName: this.__input.functionName,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          Runtime: this.__input.runtime,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          RevisionId: this.__input.revisionId,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionConfiguration.State', props);
    return resource.getResponseField('State') as unknown as string;
  }

  public get stateReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionConfiguration.StateReason'),
        outputPath: 'StateReason',
        parameters: {
          FunctionName: this.__input.functionName,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          Runtime: this.__input.runtime,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          RevisionId: this.__input.revisionId,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionConfiguration.StateReason', props);
    return resource.getResponseField('StateReason') as unknown as string;
  }

  public get stateReasonCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionConfiguration.StateReasonCode'),
        outputPath: 'StateReasonCode',
        parameters: {
          FunctionName: this.__input.functionName,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          Runtime: this.__input.runtime,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          RevisionId: this.__input.revisionId,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionConfiguration.StateReasonCode', props);
    return resource.getResponseField('StateReasonCode') as unknown as string;
  }

  public get lastUpdateStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionConfiguration.LastUpdateStatus'),
        outputPath: 'LastUpdateStatus',
        parameters: {
          FunctionName: this.__input.functionName,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          Runtime: this.__input.runtime,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          RevisionId: this.__input.revisionId,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionConfiguration.LastUpdateStatus', props);
    return resource.getResponseField('LastUpdateStatus') as unknown as string;
  }

  public get lastUpdateStatusReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionConfiguration.LastUpdateStatusReason'),
        outputPath: 'LastUpdateStatusReason',
        parameters: {
          FunctionName: this.__input.functionName,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          Runtime: this.__input.runtime,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          RevisionId: this.__input.revisionId,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionConfiguration.LastUpdateStatusReason', props);
    return resource.getResponseField('LastUpdateStatusReason') as unknown as string;
  }

  public get lastUpdateStatusReasonCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionConfiguration.LastUpdateStatusReasonCode'),
        outputPath: 'LastUpdateStatusReasonCode',
        parameters: {
          FunctionName: this.__input.functionName,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          Runtime: this.__input.runtime,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          RevisionId: this.__input.revisionId,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionConfiguration.LastUpdateStatusReasonCode', props);
    return resource.getResponseField('LastUpdateStatusReasonCode') as unknown as string;
  }

  public get fileSystemConfigs(): shapes.LambdaFileSystemConfig[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionConfiguration.FileSystemConfigs'),
        outputPath: 'FileSystemConfigs',
        parameters: {
          FunctionName: this.__input.functionName,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          Runtime: this.__input.runtime,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          RevisionId: this.__input.revisionId,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionConfiguration.FileSystemConfigs', props);
    return resource.getResponseField('FileSystemConfigs') as unknown as shapes.LambdaFileSystemConfig[];
  }

  public get packageType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionConfiguration.PackageType'),
        outputPath: 'PackageType',
        parameters: {
          FunctionName: this.__input.functionName,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          Runtime: this.__input.runtime,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          RevisionId: this.__input.revisionId,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionConfiguration.PackageType', props);
    return resource.getResponseField('PackageType') as unknown as string;
  }

  public get imageConfigResponse(): LambdaResponsesUpdateFunctionConfigurationImageConfigResponse {
    return new LambdaResponsesUpdateFunctionConfigurationImageConfigResponse(this.__scope, this.__resources, this.__input);
  }

  public get signingProfileVersionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionConfiguration.SigningProfileVersionArn'),
        outputPath: 'SigningProfileVersionArn',
        parameters: {
          FunctionName: this.__input.functionName,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          Runtime: this.__input.runtime,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          RevisionId: this.__input.revisionId,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionConfiguration.SigningProfileVersionArn', props);
    return resource.getResponseField('SigningProfileVersionArn') as unknown as string;
  }

  public get signingJobArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionConfiguration.SigningJobArn'),
        outputPath: 'SigningJobArn',
        parameters: {
          FunctionName: this.__input.functionName,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          Runtime: this.__input.runtime,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          RevisionId: this.__input.revisionId,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionConfiguration.SigningJobArn', props);
    return resource.getResponseField('SigningJobArn') as unknown as string;
  }

}

export class LambdaResponsesUpdateFunctionConfigurationVpcConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaUpdateFunctionConfigurationRequest) {
  }

  public get subnetIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionConfiguration.VpcConfig.SubnetIds'),
        outputPath: 'VpcConfig.SubnetIds',
        parameters: {
          FunctionName: this.__input.functionName,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          Runtime: this.__input.runtime,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          RevisionId: this.__input.revisionId,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionConfiguration.VpcConfig.SubnetIds', props);
    return resource.getResponseField('VpcConfig.SubnetIds') as unknown as string[];
  }

  public get securityGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionConfiguration.VpcConfig.SecurityGroupIds'),
        outputPath: 'VpcConfig.SecurityGroupIds',
        parameters: {
          FunctionName: this.__input.functionName,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          Runtime: this.__input.runtime,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          RevisionId: this.__input.revisionId,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionConfiguration.VpcConfig.SecurityGroupIds', props);
    return resource.getResponseField('VpcConfig.SecurityGroupIds') as unknown as string[];
  }

  public get vpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionConfiguration.VpcConfig.VpcId'),
        outputPath: 'VpcConfig.VpcId',
        parameters: {
          FunctionName: this.__input.functionName,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          Runtime: this.__input.runtime,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          RevisionId: this.__input.revisionId,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionConfiguration.VpcConfig.VpcId', props);
    return resource.getResponseField('VpcConfig.VpcId') as unknown as string;
  }

}

export class LambdaResponsesUpdateFunctionConfigurationDeadLetterConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaUpdateFunctionConfigurationRequest) {
  }

  public get targetArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionConfiguration.DeadLetterConfig.TargetArn'),
        outputPath: 'DeadLetterConfig.TargetArn',
        parameters: {
          FunctionName: this.__input.functionName,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          Runtime: this.__input.runtime,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          RevisionId: this.__input.revisionId,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionConfiguration.DeadLetterConfig.TargetArn', props);
    return resource.getResponseField('DeadLetterConfig.TargetArn') as unknown as string;
  }

}

export class LambdaResponsesUpdateFunctionConfigurationEnvironment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaUpdateFunctionConfigurationRequest) {
  }

  public get variables(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionConfiguration.Environment.Variables'),
        outputPath: 'Environment.Variables',
        parameters: {
          FunctionName: this.__input.functionName,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          Runtime: this.__input.runtime,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          RevisionId: this.__input.revisionId,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionConfiguration.Environment.Variables', props);
    return resource.getResponseField('Environment.Variables') as unknown as Record<string, string>;
  }

  public get error(): LambdaResponsesUpdateFunctionConfigurationEnvironmentError {
    return new LambdaResponsesUpdateFunctionConfigurationEnvironmentError(this.__scope, this.__resources, this.__input);
  }

}

export class LambdaResponsesUpdateFunctionConfigurationEnvironmentError {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaUpdateFunctionConfigurationRequest) {
  }

  public get errorCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionConfiguration.Environment.Error.ErrorCode'),
        outputPath: 'Environment.Error.ErrorCode',
        parameters: {
          FunctionName: this.__input.functionName,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          Runtime: this.__input.runtime,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          RevisionId: this.__input.revisionId,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionConfiguration.Environment.Error.ErrorCode', props);
    return resource.getResponseField('Environment.Error.ErrorCode') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionConfiguration.Environment.Error.Message'),
        outputPath: 'Environment.Error.Message',
        parameters: {
          FunctionName: this.__input.functionName,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          Runtime: this.__input.runtime,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          RevisionId: this.__input.revisionId,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionConfiguration.Environment.Error.Message', props);
    return resource.getResponseField('Environment.Error.Message') as unknown as string;
  }

}

export class LambdaResponsesUpdateFunctionConfigurationTracingConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaUpdateFunctionConfigurationRequest) {
  }

  public get mode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionConfiguration.TracingConfig.Mode'),
        outputPath: 'TracingConfig.Mode',
        parameters: {
          FunctionName: this.__input.functionName,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          Runtime: this.__input.runtime,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          RevisionId: this.__input.revisionId,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionConfiguration.TracingConfig.Mode', props);
    return resource.getResponseField('TracingConfig.Mode') as unknown as string;
  }

}

export class LambdaResponsesUpdateFunctionConfigurationImageConfigResponse {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaUpdateFunctionConfigurationRequest) {
  }

  public get imageConfig(): LambdaResponsesUpdateFunctionConfigurationImageConfigResponseImageConfig {
    return new LambdaResponsesUpdateFunctionConfigurationImageConfigResponseImageConfig(this.__scope, this.__resources, this.__input);
  }

  public get error(): LambdaResponsesUpdateFunctionConfigurationImageConfigResponseError {
    return new LambdaResponsesUpdateFunctionConfigurationImageConfigResponseError(this.__scope, this.__resources, this.__input);
  }

}

export class LambdaResponsesUpdateFunctionConfigurationImageConfigResponseImageConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaUpdateFunctionConfigurationRequest) {
  }

  public get entryPoint(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionConfiguration.ImageConfigResponse.ImageConfig.EntryPoint'),
        outputPath: 'ImageConfigResponse.ImageConfig.EntryPoint',
        parameters: {
          FunctionName: this.__input.functionName,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          Runtime: this.__input.runtime,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          RevisionId: this.__input.revisionId,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionConfiguration.ImageConfigResponse.ImageConfig.EntryPoint', props);
    return resource.getResponseField('ImageConfigResponse.ImageConfig.EntryPoint') as unknown as string[];
  }

  public get command(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionConfiguration.ImageConfigResponse.ImageConfig.Command'),
        outputPath: 'ImageConfigResponse.ImageConfig.Command',
        parameters: {
          FunctionName: this.__input.functionName,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          Runtime: this.__input.runtime,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          RevisionId: this.__input.revisionId,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionConfiguration.ImageConfigResponse.ImageConfig.Command', props);
    return resource.getResponseField('ImageConfigResponse.ImageConfig.Command') as unknown as string[];
  }

  public get workingDirectory(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionConfiguration.ImageConfigResponse.ImageConfig.WorkingDirectory'),
        outputPath: 'ImageConfigResponse.ImageConfig.WorkingDirectory',
        parameters: {
          FunctionName: this.__input.functionName,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          Runtime: this.__input.runtime,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          RevisionId: this.__input.revisionId,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionConfiguration.ImageConfigResponse.ImageConfig.WorkingDirectory', props);
    return resource.getResponseField('ImageConfigResponse.ImageConfig.WorkingDirectory') as unknown as string;
  }

}

export class LambdaResponsesUpdateFunctionConfigurationImageConfigResponseError {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaUpdateFunctionConfigurationRequest) {
  }

  public get errorCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionConfiguration.ImageConfigResponse.Error.ErrorCode'),
        outputPath: 'ImageConfigResponse.Error.ErrorCode',
        parameters: {
          FunctionName: this.__input.functionName,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          Runtime: this.__input.runtime,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          RevisionId: this.__input.revisionId,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionConfiguration.ImageConfigResponse.Error.ErrorCode', props);
    return resource.getResponseField('ImageConfigResponse.Error.ErrorCode') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionConfiguration',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionConfiguration.ImageConfigResponse.Error.Message'),
        outputPath: 'ImageConfigResponse.Error.Message',
        parameters: {
          FunctionName: this.__input.functionName,
          Role: this.__input.role,
          Handler: this.__input.handler,
          Description: this.__input.description,
          Timeout: this.__input.timeout,
          MemorySize: this.__input.memorySize,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.__input.environment?.variables,
          },
          Runtime: this.__input.runtime,
          DeadLetterConfig: {
            TargetArn: this.__input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.__input.kmsKeyArn,
          TracingConfig: {
            Mode: this.__input.tracingConfig?.mode,
          },
          RevisionId: this.__input.revisionId,
          Layers: this.__input.layers,
          FileSystemConfigs: this.__input.fileSystemConfigs,
          ImageConfig: {
            EntryPoint: this.__input.imageConfig?.entryPoint,
            Command: this.__input.imageConfig?.command,
            WorkingDirectory: this.__input.imageConfig?.workingDirectory,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionConfiguration.ImageConfigResponse.Error.Message', props);
    return resource.getResponseField('ImageConfigResponse.Error.Message') as unknown as string;
  }

}

export class LambdaResponsesUpdateFunctionEventInvokeConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaUpdateFunctionEventInvokeConfigRequest) {
  }

  public get lastModified(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionEventInvokeConfig',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionEventInvokeConfig.LastModified'),
        outputPath: 'LastModified',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
          MaximumRetryAttempts: this.__input.maximumRetryAttempts,
          MaximumEventAgeInSeconds: this.__input.maximumEventAgeInSeconds,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.__input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.__input.destinationConfig?.onFailure?.destination,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionEventInvokeConfig.LastModified', props);
    return resource.getResponseField('LastModified') as unknown as string;
  }

  public get functionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionEventInvokeConfig',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionEventInvokeConfig.FunctionArn'),
        outputPath: 'FunctionArn',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
          MaximumRetryAttempts: this.__input.maximumRetryAttempts,
          MaximumEventAgeInSeconds: this.__input.maximumEventAgeInSeconds,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.__input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.__input.destinationConfig?.onFailure?.destination,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionEventInvokeConfig.FunctionArn', props);
    return resource.getResponseField('FunctionArn') as unknown as string;
  }

  public get maximumRetryAttempts(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionEventInvokeConfig',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionEventInvokeConfig.MaximumRetryAttempts'),
        outputPath: 'MaximumRetryAttempts',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
          MaximumRetryAttempts: this.__input.maximumRetryAttempts,
          MaximumEventAgeInSeconds: this.__input.maximumEventAgeInSeconds,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.__input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.__input.destinationConfig?.onFailure?.destination,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionEventInvokeConfig.MaximumRetryAttempts', props);
    return resource.getResponseField('MaximumRetryAttempts') as unknown as number;
  }

  public get maximumEventAgeInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionEventInvokeConfig',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionEventInvokeConfig.MaximumEventAgeInSeconds'),
        outputPath: 'MaximumEventAgeInSeconds',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
          MaximumRetryAttempts: this.__input.maximumRetryAttempts,
          MaximumEventAgeInSeconds: this.__input.maximumEventAgeInSeconds,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.__input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.__input.destinationConfig?.onFailure?.destination,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionEventInvokeConfig.MaximumEventAgeInSeconds', props);
    return resource.getResponseField('MaximumEventAgeInSeconds') as unknown as number;
  }

  public get destinationConfig(): LambdaResponsesUpdateFunctionEventInvokeConfigDestinationConfig {
    return new LambdaResponsesUpdateFunctionEventInvokeConfigDestinationConfig(this.__scope, this.__resources, this.__input);
  }

}

export class LambdaResponsesUpdateFunctionEventInvokeConfigDestinationConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaUpdateFunctionEventInvokeConfigRequest) {
  }

  public get onSuccess(): LambdaResponsesUpdateFunctionEventInvokeConfigDestinationConfigOnSuccess {
    return new LambdaResponsesUpdateFunctionEventInvokeConfigDestinationConfigOnSuccess(this.__scope, this.__resources, this.__input);
  }

  public get onFailure(): LambdaResponsesUpdateFunctionEventInvokeConfigDestinationConfigOnFailure {
    return new LambdaResponsesUpdateFunctionEventInvokeConfigDestinationConfigOnFailure(this.__scope, this.__resources, this.__input);
  }

}

export class LambdaResponsesUpdateFunctionEventInvokeConfigDestinationConfigOnSuccess {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaUpdateFunctionEventInvokeConfigRequest) {
  }

  public get destination(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionEventInvokeConfig',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionEventInvokeConfig.DestinationConfig.OnSuccess.Destination'),
        outputPath: 'DestinationConfig.OnSuccess.Destination',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
          MaximumRetryAttempts: this.__input.maximumRetryAttempts,
          MaximumEventAgeInSeconds: this.__input.maximumEventAgeInSeconds,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.__input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.__input.destinationConfig?.onFailure?.destination,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionEventInvokeConfig.DestinationConfig.OnSuccess.Destination', props);
    return resource.getResponseField('DestinationConfig.OnSuccess.Destination') as unknown as string;
  }

}

export class LambdaResponsesUpdateFunctionEventInvokeConfigDestinationConfigOnFailure {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LambdaUpdateFunctionEventInvokeConfigRequest) {
  }

  public get destination(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionEventInvokeConfig',
        service: 'Lambda',
        physicalResourceId: cr.PhysicalResourceId.of('Lambda.UpdateFunctionEventInvokeConfig.DestinationConfig.OnFailure.Destination'),
        outputPath: 'DestinationConfig.OnFailure.Destination',
        parameters: {
          FunctionName: this.__input.functionName,
          Qualifier: this.__input.qualifier,
          MaximumRetryAttempts: this.__input.maximumRetryAttempts,
          MaximumEventAgeInSeconds: this.__input.maximumEventAgeInSeconds,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.__input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.__input.destinationConfig?.onFailure?.destination,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunctionEventInvokeConfig.DestinationConfig.OnFailure.Destination', props);
    return resource.getResponseField('DestinationConfig.OnFailure.Destination') as unknown as string;
  }

}

