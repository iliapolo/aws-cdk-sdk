import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class LambdaClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public addLayerVersionPermission(input: shapes.LambdaAddLayerVersionPermissionRequest): LambdaAddLayerVersionPermission {
    return new LambdaAddLayerVersionPermission(this, 'AddLayerVersionPermission', this.__resources, input);
  }

  public addPermission(input: shapes.LambdaAddPermissionRequest): LambdaAddPermission {
    return new LambdaAddPermission(this, 'AddPermission', this.__resources, input);
  }

  public createAlias(input: shapes.LambdaCreateAliasRequest): LambdaCreateAlias {
    return new LambdaCreateAlias(this, 'CreateAlias', this.__resources, input);
  }

  public createCodeSigningConfig(input: shapes.LambdaCreateCodeSigningConfigRequest): LambdaCreateCodeSigningConfig {
    return new LambdaCreateCodeSigningConfig(this, 'CreateCodeSigningConfig', this.__resources, input);
  }

  public createEventSourceMapping(input: shapes.LambdaCreateEventSourceMappingRequest): LambdaCreateEventSourceMapping {
    return new LambdaCreateEventSourceMapping(this, 'CreateEventSourceMapping', this.__resources, input);
  }

  public createFunction(input: shapes.LambdaCreateFunctionRequest): LambdaCreateFunction {
    return new LambdaCreateFunction(this, 'CreateFunction', this.__resources, input);
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

  public deleteEventSourceMapping(input: shapes.LambdaDeleteEventSourceMappingRequest): LambdaDeleteEventSourceMapping {
    return new LambdaDeleteEventSourceMapping(this, 'DeleteEventSourceMapping', this.__resources, input);
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

  public fetchAccountSettings(): LambdaFetchAccountSettings {
    return new LambdaFetchAccountSettings(this, 'FetchAccountSettings', this.__resources);
  }

  public fetchAlias(input: shapes.LambdaGetAliasRequest): LambdaFetchAlias {
    return new LambdaFetchAlias(this, 'FetchAlias', this.__resources, input);
  }

  public fetchCodeSigningConfig(input: shapes.LambdaGetCodeSigningConfigRequest): LambdaFetchCodeSigningConfig {
    return new LambdaFetchCodeSigningConfig(this, 'FetchCodeSigningConfig', this.__resources, input);
  }

  public fetchEventSourceMapping(input: shapes.LambdaGetEventSourceMappingRequest): LambdaFetchEventSourceMapping {
    return new LambdaFetchEventSourceMapping(this, 'FetchEventSourceMapping', this.__resources, input);
  }

  public fetchFunction(input: shapes.LambdaGetFunctionRequest): LambdaFetchFunction {
    return new LambdaFetchFunction(this, 'FetchFunction', this.__resources, input);
  }

  public fetchFunctionCodeSigningConfig(input: shapes.LambdaGetFunctionCodeSigningConfigRequest): LambdaFetchFunctionCodeSigningConfig {
    return new LambdaFetchFunctionCodeSigningConfig(this, 'FetchFunctionCodeSigningConfig', this.__resources, input);
  }

  public fetchFunctionConcurrency(input: shapes.LambdaGetFunctionConcurrencyRequest): LambdaFetchFunctionConcurrency {
    return new LambdaFetchFunctionConcurrency(this, 'FetchFunctionConcurrency', this.__resources, input);
  }

  public fetchFunctionConfiguration(input: shapes.LambdaGetFunctionConfigurationRequest): LambdaFetchFunctionConfiguration {
    return new LambdaFetchFunctionConfiguration(this, 'FetchFunctionConfiguration', this.__resources, input);
  }

  public fetchFunctionEventInvokeConfig(input: shapes.LambdaGetFunctionEventInvokeConfigRequest): LambdaFetchFunctionEventInvokeConfig {
    return new LambdaFetchFunctionEventInvokeConfig(this, 'FetchFunctionEventInvokeConfig', this.__resources, input);
  }

  public fetchLayerVersion(input: shapes.LambdaGetLayerVersionRequest): LambdaFetchLayerVersion {
    return new LambdaFetchLayerVersion(this, 'FetchLayerVersion', this.__resources, input);
  }

  public fetchLayerVersionByArn(input: shapes.LambdaGetLayerVersionByArnRequest): LambdaFetchLayerVersionByArn {
    return new LambdaFetchLayerVersionByArn(this, 'FetchLayerVersionByArn', this.__resources, input);
  }

  public fetchLayerVersionPolicy(input: shapes.LambdaGetLayerVersionPolicyRequest): LambdaFetchLayerVersionPolicy {
    return new LambdaFetchLayerVersionPolicy(this, 'FetchLayerVersionPolicy', this.__resources, input);
  }

  public fetchPolicy(input: shapes.LambdaGetPolicyRequest): LambdaFetchPolicy {
    return new LambdaFetchPolicy(this, 'FetchPolicy', this.__resources, input);
  }

  public fetchProvisionedConcurrencyConfig(input: shapes.LambdaGetProvisionedConcurrencyConfigRequest): LambdaFetchProvisionedConcurrencyConfig {
    return new LambdaFetchProvisionedConcurrencyConfig(this, 'FetchProvisionedConcurrencyConfig', this.__resources, input);
  }

  public invoke(input: shapes.LambdaInvocationRequest): LambdaInvoke {
    return new LambdaInvoke(this, 'Invoke', this.__resources, input);
  }

  public invokeAsync(input: shapes.LambdaInvokeAsyncRequest): LambdaInvokeAsync {
    return new LambdaInvokeAsync(this, 'InvokeAsync', this.__resources, input);
  }

  public listAliases(input: shapes.LambdaListAliasesRequest): LambdaListAliases {
    return new LambdaListAliases(this, 'ListAliases', this.__resources, input);
  }

  public listCodeSigningConfigs(input: shapes.LambdaListCodeSigningConfigsRequest): LambdaListCodeSigningConfigs {
    return new LambdaListCodeSigningConfigs(this, 'ListCodeSigningConfigs', this.__resources, input);
  }

  public listEventSourceMappings(input: shapes.LambdaListEventSourceMappingsRequest): LambdaListEventSourceMappings {
    return new LambdaListEventSourceMappings(this, 'ListEventSourceMappings', this.__resources, input);
  }

  public listFunctionEventInvokeConfigs(input: shapes.LambdaListFunctionEventInvokeConfigsRequest): LambdaListFunctionEventInvokeConfigs {
    return new LambdaListFunctionEventInvokeConfigs(this, 'ListFunctionEventInvokeConfigs', this.__resources, input);
  }

  public listFunctions(input: shapes.LambdaListFunctionsRequest): LambdaListFunctions {
    return new LambdaListFunctions(this, 'ListFunctions', this.__resources, input);
  }

  public listFunctionsByCodeSigningConfig(input: shapes.LambdaListFunctionsByCodeSigningConfigRequest): LambdaListFunctionsByCodeSigningConfig {
    return new LambdaListFunctionsByCodeSigningConfig(this, 'ListFunctionsByCodeSigningConfig', this.__resources, input);
  }

  public listLayerVersions(input: shapes.LambdaListLayerVersionsRequest): LambdaListLayerVersions {
    return new LambdaListLayerVersions(this, 'ListLayerVersions', this.__resources, input);
  }

  public listLayers(input: shapes.LambdaListLayersRequest): LambdaListLayers {
    return new LambdaListLayers(this, 'ListLayers', this.__resources, input);
  }

  public listProvisionedConcurrencyConfigs(input: shapes.LambdaListProvisionedConcurrencyConfigsRequest): LambdaListProvisionedConcurrencyConfigs {
    return new LambdaListProvisionedConcurrencyConfigs(this, 'ListProvisionedConcurrencyConfigs', this.__resources, input);
  }

  public listTags(input: shapes.LambdaListTagsRequest): LambdaListTags {
    return new LambdaListTags(this, 'ListTags', this.__resources, input);
  }

  public listVersionsByFunction(input: shapes.LambdaListVersionsByFunctionRequest): LambdaListVersionsByFunction {
    return new LambdaListVersionsByFunction(this, 'ListVersionsByFunction', this.__resources, input);
  }

  public publishLayerVersion(input: shapes.LambdaPublishLayerVersionRequest): LambdaPublishLayerVersion {
    return new LambdaPublishLayerVersion(this, 'PublishLayerVersion', this.__resources, input);
  }

  public publishVersion(input: shapes.LambdaPublishVersionRequest): LambdaPublishVersion {
    return new LambdaPublishVersion(this, 'PublishVersion', this.__resources, input);
  }

  public putFunctionCodeSigningConfig(input: shapes.LambdaPutFunctionCodeSigningConfigRequest): LambdaPutFunctionCodeSigningConfig {
    return new LambdaPutFunctionCodeSigningConfig(this, 'PutFunctionCodeSigningConfig', this.__resources, input);
  }

  public putFunctionConcurrency(input: shapes.LambdaPutFunctionConcurrencyRequest): LambdaPutFunctionConcurrency {
    return new LambdaPutFunctionConcurrency(this, 'PutFunctionConcurrency', this.__resources, input);
  }

  public putFunctionEventInvokeConfig(input: shapes.LambdaPutFunctionEventInvokeConfigRequest): LambdaPutFunctionEventInvokeConfig {
    return new LambdaPutFunctionEventInvokeConfig(this, 'PutFunctionEventInvokeConfig', this.__resources, input);
  }

  public putProvisionedConcurrencyConfig(input: shapes.LambdaPutProvisionedConcurrencyConfigRequest): LambdaPutProvisionedConcurrencyConfig {
    return new LambdaPutProvisionedConcurrencyConfig(this, 'PutProvisionedConcurrencyConfig', this.__resources, input);
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

  public updateAlias(input: shapes.LambdaUpdateAliasRequest): LambdaUpdateAlias {
    return new LambdaUpdateAlias(this, 'UpdateAlias', this.__resources, input);
  }

  public updateCodeSigningConfig(input: shapes.LambdaUpdateCodeSigningConfigRequest): LambdaUpdateCodeSigningConfig {
    return new LambdaUpdateCodeSigningConfig(this, 'UpdateCodeSigningConfig', this.__resources, input);
  }

  public updateEventSourceMapping(input: shapes.LambdaUpdateEventSourceMappingRequest): LambdaUpdateEventSourceMapping {
    return new LambdaUpdateEventSourceMapping(this, 'UpdateEventSourceMapping', this.__resources, input);
  }

  public updateFunctionCode(input: shapes.LambdaUpdateFunctionCodeRequest): LambdaUpdateFunctionCode {
    return new LambdaUpdateFunctionCode(this, 'UpdateFunctionCode', this.__resources, input);
  }

  public updateFunctionConfiguration(input: shapes.LambdaUpdateFunctionConfigurationRequest): LambdaUpdateFunctionConfiguration {
    return new LambdaUpdateFunctionConfiguration(this, 'UpdateFunctionConfiguration', this.__resources, input);
  }

  public updateFunctionEventInvokeConfig(input: shapes.LambdaUpdateFunctionEventInvokeConfigRequest): LambdaUpdateFunctionEventInvokeConfig {
    return new LambdaUpdateFunctionEventInvokeConfig(this, 'UpdateFunctionEventInvokeConfig', this.__resources, input);
  }

}

export class LambdaAddLayerVersionPermission extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaAddLayerVersionPermissionRequest) {
    super(scope, id);
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
          LayerName: this.input.layerName,
          VersionNumber: this.input.versionNumber,
          StatementId: this.input.statementId,
          Action: this.input.action,
          Principal: this.input.principal,
          OrganizationId: this.input.organizationId,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AddLayerVersionPermission.Statement', props);
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
          LayerName: this.input.layerName,
          VersionNumber: this.input.versionNumber,
          StatementId: this.input.statementId,
          Action: this.input.action,
          Principal: this.input.principal,
          OrganizationId: this.input.organizationId,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AddLayerVersionPermission.RevisionId', props);
    return resource.getResponseField('RevisionId') as unknown as string;
  }

}

export class LambdaAddPermission extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaAddPermissionRequest) {
    super(scope, id);
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
          FunctionName: this.input.functionName,
          StatementId: this.input.statementId,
          Action: this.input.action,
          Principal: this.input.principal,
          SourceArn: this.input.sourceArn,
          SourceAccount: this.input.sourceAccount,
          EventSourceToken: this.input.eventSourceToken,
          Qualifier: this.input.qualifier,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AddPermission.Statement', props);
    return resource.getResponseField('Statement') as unknown as string;
  }

}

export class LambdaCreateAlias extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaCreateAliasRequest) {
    super(scope, id);
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
          FunctionName: this.input.functionName,
          Name: this.input.name,
          FunctionVersion: this.input.functionVersion,
          Description: this.input.description,
          RoutingConfig: {
            AdditionalVersionWeights: this.input.routingConfig?.additionalVersionWeights,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAlias.AliasArn', props);
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
          FunctionName: this.input.functionName,
          Name: this.input.name,
          FunctionVersion: this.input.functionVersion,
          Description: this.input.description,
          RoutingConfig: {
            AdditionalVersionWeights: this.input.routingConfig?.additionalVersionWeights,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAlias.Name', props);
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
          FunctionName: this.input.functionName,
          Name: this.input.name,
          FunctionVersion: this.input.functionVersion,
          Description: this.input.description,
          RoutingConfig: {
            AdditionalVersionWeights: this.input.routingConfig?.additionalVersionWeights,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAlias.FunctionVersion', props);
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
          FunctionName: this.input.functionName,
          Name: this.input.name,
          FunctionVersion: this.input.functionVersion,
          Description: this.input.description,
          RoutingConfig: {
            AdditionalVersionWeights: this.input.routingConfig?.additionalVersionWeights,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAlias.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get routingConfig(): LambdaCreateAliasRoutingConfig {
    return new LambdaCreateAliasRoutingConfig(this, 'RoutingConfig', this.__resources, this.input);
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
          FunctionName: this.input.functionName,
          Name: this.input.name,
          FunctionVersion: this.input.functionVersion,
          Description: this.input.description,
          RoutingConfig: {
            AdditionalVersionWeights: this.input.routingConfig?.additionalVersionWeights,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAlias.RevisionId', props);
    return resource.getResponseField('RevisionId') as unknown as string;
  }

}

export class LambdaCreateAliasRoutingConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaCreateAliasRequest) {
    super(scope, id);
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
          FunctionName: this.input.functionName,
          Name: this.input.name,
          FunctionVersion: this.input.functionVersion,
          Description: this.input.description,
          RoutingConfig: {
            AdditionalVersionWeights: this.input.routingConfig?.additionalVersionWeights,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAlias.RoutingConfig.AdditionalVersionWeights', props);
    return resource.getResponseField('RoutingConfig.AdditionalVersionWeights') as unknown as Record<string, number>;
  }

}

export class LambdaCreateCodeSigningConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaCreateCodeSigningConfigRequest) {
    super(scope, id);
  }

  public get codeSigningConfig(): LambdaCreateCodeSigningConfigCodeSigningConfig {
    return new LambdaCreateCodeSigningConfigCodeSigningConfig(this, 'CodeSigningConfig', this.__resources, this.input);
  }

}

export class LambdaCreateCodeSigningConfigCodeSigningConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaCreateCodeSigningConfigRequest) {
    super(scope, id);
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
          Description: this.input.description,
          AllowedPublishers: {
            SigningProfileVersionArns: this.input.allowedPublishers.signingProfileVersionArns,
          },
          CodeSigningPolicies: {
            UntrustedArtifactOnDeployment: this.input.codeSigningPolicies?.untrustedArtifactOnDeployment,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCodeSigningConfig.CodeSigningConfig.CodeSigningConfigId', props);
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
          Description: this.input.description,
          AllowedPublishers: {
            SigningProfileVersionArns: this.input.allowedPublishers.signingProfileVersionArns,
          },
          CodeSigningPolicies: {
            UntrustedArtifactOnDeployment: this.input.codeSigningPolicies?.untrustedArtifactOnDeployment,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCodeSigningConfig.CodeSigningConfig.CodeSigningConfigArn', props);
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
          Description: this.input.description,
          AllowedPublishers: {
            SigningProfileVersionArns: this.input.allowedPublishers.signingProfileVersionArns,
          },
          CodeSigningPolicies: {
            UntrustedArtifactOnDeployment: this.input.codeSigningPolicies?.untrustedArtifactOnDeployment,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCodeSigningConfig.CodeSigningConfig.Description', props);
    return resource.getResponseField('CodeSigningConfig.Description') as unknown as string;
  }

  public get allowedPublishers(): LambdaCreateCodeSigningConfigCodeSigningConfigAllowedPublishers {
    return new LambdaCreateCodeSigningConfigCodeSigningConfigAllowedPublishers(this, 'AllowedPublishers', this.__resources, this.input);
  }

  public get codeSigningPolicies(): LambdaCreateCodeSigningConfigCodeSigningConfigCodeSigningPolicies {
    return new LambdaCreateCodeSigningConfigCodeSigningConfigCodeSigningPolicies(this, 'CodeSigningPolicies', this.__resources, this.input);
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
          Description: this.input.description,
          AllowedPublishers: {
            SigningProfileVersionArns: this.input.allowedPublishers.signingProfileVersionArns,
          },
          CodeSigningPolicies: {
            UntrustedArtifactOnDeployment: this.input.codeSigningPolicies?.untrustedArtifactOnDeployment,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCodeSigningConfig.CodeSigningConfig.LastModified', props);
    return resource.getResponseField('CodeSigningConfig.LastModified') as unknown as string;
  }

}

export class LambdaCreateCodeSigningConfigCodeSigningConfigAllowedPublishers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaCreateCodeSigningConfigRequest) {
    super(scope, id);
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
          Description: this.input.description,
          AllowedPublishers: {
            SigningProfileVersionArns: this.input.allowedPublishers.signingProfileVersionArns,
          },
          CodeSigningPolicies: {
            UntrustedArtifactOnDeployment: this.input.codeSigningPolicies?.untrustedArtifactOnDeployment,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCodeSigningConfig.CodeSigningConfig.AllowedPublishers.SigningProfileVersionArns', props);
    return resource.getResponseField('CodeSigningConfig.AllowedPublishers.SigningProfileVersionArns') as unknown as string[];
  }

}

export class LambdaCreateCodeSigningConfigCodeSigningConfigCodeSigningPolicies extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaCreateCodeSigningConfigRequest) {
    super(scope, id);
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
          Description: this.input.description,
          AllowedPublishers: {
            SigningProfileVersionArns: this.input.allowedPublishers.signingProfileVersionArns,
          },
          CodeSigningPolicies: {
            UntrustedArtifactOnDeployment: this.input.codeSigningPolicies?.untrustedArtifactOnDeployment,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCodeSigningConfig.CodeSigningConfig.CodeSigningPolicies.UntrustedArtifactOnDeployment', props);
    return resource.getResponseField('CodeSigningConfig.CodeSigningPolicies.UntrustedArtifactOnDeployment') as unknown as string;
  }

}

export class LambdaCreateEventSourceMapping extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaCreateEventSourceMappingRequest) {
    super(scope, id);
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
          EventSourceArn: this.input.eventSourceArn,
          FunctionName: this.input.functionName,
          Enabled: this.input.enabled,
          BatchSize: this.input.batchSize,
          MaximumBatchingWindowInSeconds: this.input.maximumBatchingWindowInSeconds,
          ParallelizationFactor: this.input.parallelizationFactor,
          StartingPosition: this.input.startingPosition,
          StartingPositionTimestamp: this.input.startingPositionTimestamp,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.input.maximumRetryAttempts,
          Topics: this.input.topics,
          Queues: this.input.queues,
          SourceAccessConfigurations: this.input.sourceAccessConfigurations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEventSourceMapping.UUID', props);
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
          EventSourceArn: this.input.eventSourceArn,
          FunctionName: this.input.functionName,
          Enabled: this.input.enabled,
          BatchSize: this.input.batchSize,
          MaximumBatchingWindowInSeconds: this.input.maximumBatchingWindowInSeconds,
          ParallelizationFactor: this.input.parallelizationFactor,
          StartingPosition: this.input.startingPosition,
          StartingPositionTimestamp: this.input.startingPositionTimestamp,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.input.maximumRetryAttempts,
          Topics: this.input.topics,
          Queues: this.input.queues,
          SourceAccessConfigurations: this.input.sourceAccessConfigurations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEventSourceMapping.StartingPosition', props);
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
          EventSourceArn: this.input.eventSourceArn,
          FunctionName: this.input.functionName,
          Enabled: this.input.enabled,
          BatchSize: this.input.batchSize,
          MaximumBatchingWindowInSeconds: this.input.maximumBatchingWindowInSeconds,
          ParallelizationFactor: this.input.parallelizationFactor,
          StartingPosition: this.input.startingPosition,
          StartingPositionTimestamp: this.input.startingPositionTimestamp,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.input.maximumRetryAttempts,
          Topics: this.input.topics,
          Queues: this.input.queues,
          SourceAccessConfigurations: this.input.sourceAccessConfigurations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEventSourceMapping.StartingPositionTimestamp', props);
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
          EventSourceArn: this.input.eventSourceArn,
          FunctionName: this.input.functionName,
          Enabled: this.input.enabled,
          BatchSize: this.input.batchSize,
          MaximumBatchingWindowInSeconds: this.input.maximumBatchingWindowInSeconds,
          ParallelizationFactor: this.input.parallelizationFactor,
          StartingPosition: this.input.startingPosition,
          StartingPositionTimestamp: this.input.startingPositionTimestamp,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.input.maximumRetryAttempts,
          Topics: this.input.topics,
          Queues: this.input.queues,
          SourceAccessConfigurations: this.input.sourceAccessConfigurations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEventSourceMapping.BatchSize', props);
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
          EventSourceArn: this.input.eventSourceArn,
          FunctionName: this.input.functionName,
          Enabled: this.input.enabled,
          BatchSize: this.input.batchSize,
          MaximumBatchingWindowInSeconds: this.input.maximumBatchingWindowInSeconds,
          ParallelizationFactor: this.input.parallelizationFactor,
          StartingPosition: this.input.startingPosition,
          StartingPositionTimestamp: this.input.startingPositionTimestamp,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.input.maximumRetryAttempts,
          Topics: this.input.topics,
          Queues: this.input.queues,
          SourceAccessConfigurations: this.input.sourceAccessConfigurations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEventSourceMapping.MaximumBatchingWindowInSeconds', props);
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
          EventSourceArn: this.input.eventSourceArn,
          FunctionName: this.input.functionName,
          Enabled: this.input.enabled,
          BatchSize: this.input.batchSize,
          MaximumBatchingWindowInSeconds: this.input.maximumBatchingWindowInSeconds,
          ParallelizationFactor: this.input.parallelizationFactor,
          StartingPosition: this.input.startingPosition,
          StartingPositionTimestamp: this.input.startingPositionTimestamp,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.input.maximumRetryAttempts,
          Topics: this.input.topics,
          Queues: this.input.queues,
          SourceAccessConfigurations: this.input.sourceAccessConfigurations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEventSourceMapping.ParallelizationFactor', props);
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
          EventSourceArn: this.input.eventSourceArn,
          FunctionName: this.input.functionName,
          Enabled: this.input.enabled,
          BatchSize: this.input.batchSize,
          MaximumBatchingWindowInSeconds: this.input.maximumBatchingWindowInSeconds,
          ParallelizationFactor: this.input.parallelizationFactor,
          StartingPosition: this.input.startingPosition,
          StartingPositionTimestamp: this.input.startingPositionTimestamp,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.input.maximumRetryAttempts,
          Topics: this.input.topics,
          Queues: this.input.queues,
          SourceAccessConfigurations: this.input.sourceAccessConfigurations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEventSourceMapping.EventSourceArn', props);
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
          EventSourceArn: this.input.eventSourceArn,
          FunctionName: this.input.functionName,
          Enabled: this.input.enabled,
          BatchSize: this.input.batchSize,
          MaximumBatchingWindowInSeconds: this.input.maximumBatchingWindowInSeconds,
          ParallelizationFactor: this.input.parallelizationFactor,
          StartingPosition: this.input.startingPosition,
          StartingPositionTimestamp: this.input.startingPositionTimestamp,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.input.maximumRetryAttempts,
          Topics: this.input.topics,
          Queues: this.input.queues,
          SourceAccessConfigurations: this.input.sourceAccessConfigurations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEventSourceMapping.FunctionArn', props);
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
          EventSourceArn: this.input.eventSourceArn,
          FunctionName: this.input.functionName,
          Enabled: this.input.enabled,
          BatchSize: this.input.batchSize,
          MaximumBatchingWindowInSeconds: this.input.maximumBatchingWindowInSeconds,
          ParallelizationFactor: this.input.parallelizationFactor,
          StartingPosition: this.input.startingPosition,
          StartingPositionTimestamp: this.input.startingPositionTimestamp,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.input.maximumRetryAttempts,
          Topics: this.input.topics,
          Queues: this.input.queues,
          SourceAccessConfigurations: this.input.sourceAccessConfigurations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEventSourceMapping.LastModified', props);
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
          EventSourceArn: this.input.eventSourceArn,
          FunctionName: this.input.functionName,
          Enabled: this.input.enabled,
          BatchSize: this.input.batchSize,
          MaximumBatchingWindowInSeconds: this.input.maximumBatchingWindowInSeconds,
          ParallelizationFactor: this.input.parallelizationFactor,
          StartingPosition: this.input.startingPosition,
          StartingPositionTimestamp: this.input.startingPositionTimestamp,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.input.maximumRetryAttempts,
          Topics: this.input.topics,
          Queues: this.input.queues,
          SourceAccessConfigurations: this.input.sourceAccessConfigurations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEventSourceMapping.LastProcessingResult', props);
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
          EventSourceArn: this.input.eventSourceArn,
          FunctionName: this.input.functionName,
          Enabled: this.input.enabled,
          BatchSize: this.input.batchSize,
          MaximumBatchingWindowInSeconds: this.input.maximumBatchingWindowInSeconds,
          ParallelizationFactor: this.input.parallelizationFactor,
          StartingPosition: this.input.startingPosition,
          StartingPositionTimestamp: this.input.startingPositionTimestamp,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.input.maximumRetryAttempts,
          Topics: this.input.topics,
          Queues: this.input.queues,
          SourceAccessConfigurations: this.input.sourceAccessConfigurations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEventSourceMapping.State', props);
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
          EventSourceArn: this.input.eventSourceArn,
          FunctionName: this.input.functionName,
          Enabled: this.input.enabled,
          BatchSize: this.input.batchSize,
          MaximumBatchingWindowInSeconds: this.input.maximumBatchingWindowInSeconds,
          ParallelizationFactor: this.input.parallelizationFactor,
          StartingPosition: this.input.startingPosition,
          StartingPositionTimestamp: this.input.startingPositionTimestamp,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.input.maximumRetryAttempts,
          Topics: this.input.topics,
          Queues: this.input.queues,
          SourceAccessConfigurations: this.input.sourceAccessConfigurations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEventSourceMapping.StateTransitionReason', props);
    return resource.getResponseField('StateTransitionReason') as unknown as string;
  }

  public get destinationConfig(): LambdaCreateEventSourceMappingDestinationConfig {
    return new LambdaCreateEventSourceMappingDestinationConfig(this, 'DestinationConfig', this.__resources, this.input);
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
          EventSourceArn: this.input.eventSourceArn,
          FunctionName: this.input.functionName,
          Enabled: this.input.enabled,
          BatchSize: this.input.batchSize,
          MaximumBatchingWindowInSeconds: this.input.maximumBatchingWindowInSeconds,
          ParallelizationFactor: this.input.parallelizationFactor,
          StartingPosition: this.input.startingPosition,
          StartingPositionTimestamp: this.input.startingPositionTimestamp,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.input.maximumRetryAttempts,
          Topics: this.input.topics,
          Queues: this.input.queues,
          SourceAccessConfigurations: this.input.sourceAccessConfigurations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEventSourceMapping.Topics', props);
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
          EventSourceArn: this.input.eventSourceArn,
          FunctionName: this.input.functionName,
          Enabled: this.input.enabled,
          BatchSize: this.input.batchSize,
          MaximumBatchingWindowInSeconds: this.input.maximumBatchingWindowInSeconds,
          ParallelizationFactor: this.input.parallelizationFactor,
          StartingPosition: this.input.startingPosition,
          StartingPositionTimestamp: this.input.startingPositionTimestamp,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.input.maximumRetryAttempts,
          Topics: this.input.topics,
          Queues: this.input.queues,
          SourceAccessConfigurations: this.input.sourceAccessConfigurations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEventSourceMapping.Queues', props);
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
          EventSourceArn: this.input.eventSourceArn,
          FunctionName: this.input.functionName,
          Enabled: this.input.enabled,
          BatchSize: this.input.batchSize,
          MaximumBatchingWindowInSeconds: this.input.maximumBatchingWindowInSeconds,
          ParallelizationFactor: this.input.parallelizationFactor,
          StartingPosition: this.input.startingPosition,
          StartingPositionTimestamp: this.input.startingPositionTimestamp,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.input.maximumRetryAttempts,
          Topics: this.input.topics,
          Queues: this.input.queues,
          SourceAccessConfigurations: this.input.sourceAccessConfigurations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEventSourceMapping.SourceAccessConfigurations', props);
    return resource.getResponseField('SourceAccessConfigurations') as unknown as shapes.LambdaSourceAccessConfiguration[];
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
          EventSourceArn: this.input.eventSourceArn,
          FunctionName: this.input.functionName,
          Enabled: this.input.enabled,
          BatchSize: this.input.batchSize,
          MaximumBatchingWindowInSeconds: this.input.maximumBatchingWindowInSeconds,
          ParallelizationFactor: this.input.parallelizationFactor,
          StartingPosition: this.input.startingPosition,
          StartingPositionTimestamp: this.input.startingPositionTimestamp,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.input.maximumRetryAttempts,
          Topics: this.input.topics,
          Queues: this.input.queues,
          SourceAccessConfigurations: this.input.sourceAccessConfigurations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEventSourceMapping.MaximumRecordAgeInSeconds', props);
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
          EventSourceArn: this.input.eventSourceArn,
          FunctionName: this.input.functionName,
          Enabled: this.input.enabled,
          BatchSize: this.input.batchSize,
          MaximumBatchingWindowInSeconds: this.input.maximumBatchingWindowInSeconds,
          ParallelizationFactor: this.input.parallelizationFactor,
          StartingPosition: this.input.startingPosition,
          StartingPositionTimestamp: this.input.startingPositionTimestamp,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.input.maximumRetryAttempts,
          Topics: this.input.topics,
          Queues: this.input.queues,
          SourceAccessConfigurations: this.input.sourceAccessConfigurations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEventSourceMapping.BisectBatchOnFunctionError', props);
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
          EventSourceArn: this.input.eventSourceArn,
          FunctionName: this.input.functionName,
          Enabled: this.input.enabled,
          BatchSize: this.input.batchSize,
          MaximumBatchingWindowInSeconds: this.input.maximumBatchingWindowInSeconds,
          ParallelizationFactor: this.input.parallelizationFactor,
          StartingPosition: this.input.startingPosition,
          StartingPositionTimestamp: this.input.startingPositionTimestamp,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.input.maximumRetryAttempts,
          Topics: this.input.topics,
          Queues: this.input.queues,
          SourceAccessConfigurations: this.input.sourceAccessConfigurations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEventSourceMapping.MaximumRetryAttempts', props);
    return resource.getResponseField('MaximumRetryAttempts') as unknown as number;
  }

}

export class LambdaCreateEventSourceMappingDestinationConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaCreateEventSourceMappingRequest) {
    super(scope, id);
  }

  public get onSuccess(): LambdaCreateEventSourceMappingDestinationConfigOnSuccess {
    return new LambdaCreateEventSourceMappingDestinationConfigOnSuccess(this, 'OnSuccess', this.__resources, this.input);
  }

  public get onFailure(): LambdaCreateEventSourceMappingDestinationConfigOnFailure {
    return new LambdaCreateEventSourceMappingDestinationConfigOnFailure(this, 'OnFailure', this.__resources, this.input);
  }

}

export class LambdaCreateEventSourceMappingDestinationConfigOnSuccess extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaCreateEventSourceMappingRequest) {
    super(scope, id);
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
          EventSourceArn: this.input.eventSourceArn,
          FunctionName: this.input.functionName,
          Enabled: this.input.enabled,
          BatchSize: this.input.batchSize,
          MaximumBatchingWindowInSeconds: this.input.maximumBatchingWindowInSeconds,
          ParallelizationFactor: this.input.parallelizationFactor,
          StartingPosition: this.input.startingPosition,
          StartingPositionTimestamp: this.input.startingPositionTimestamp,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.input.maximumRetryAttempts,
          Topics: this.input.topics,
          Queues: this.input.queues,
          SourceAccessConfigurations: this.input.sourceAccessConfigurations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEventSourceMapping.DestinationConfig.OnSuccess.Destination', props);
    return resource.getResponseField('DestinationConfig.OnSuccess.Destination') as unknown as string;
  }

}

export class LambdaCreateEventSourceMappingDestinationConfigOnFailure extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaCreateEventSourceMappingRequest) {
    super(scope, id);
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
          EventSourceArn: this.input.eventSourceArn,
          FunctionName: this.input.functionName,
          Enabled: this.input.enabled,
          BatchSize: this.input.batchSize,
          MaximumBatchingWindowInSeconds: this.input.maximumBatchingWindowInSeconds,
          ParallelizationFactor: this.input.parallelizationFactor,
          StartingPosition: this.input.startingPosition,
          StartingPositionTimestamp: this.input.startingPositionTimestamp,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.input.maximumRetryAttempts,
          Topics: this.input.topics,
          Queues: this.input.queues,
          SourceAccessConfigurations: this.input.sourceAccessConfigurations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEventSourceMapping.DestinationConfig.OnFailure.Destination', props);
    return resource.getResponseField('DestinationConfig.OnFailure.Destination') as unknown as string;
  }

}

export class LambdaCreateFunction extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaCreateFunctionRequest) {
    super(scope, id);
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
          FunctionName: this.input.functionName,
          Runtime: this.input.runtime,
          Role: this.input.role,
          Handler: this.input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.input.code.s3Bucket,
            S3Key: this.input.code.s3Key,
            S3ObjectVersion: this.input.code.s3ObjectVersion,
          },
          Description: this.input.description,
          Timeout: this.input.timeout,
          MemorySize: this.input.memorySize,
          Publish: this.input.publish,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          DeadLetterConfig: {
            TargetArn: this.input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.input.environment?.variables,
          },
          KMSKeyArn: this.input.kmsKeyArn,
          TracingConfig: {
            Mode: this.input.tracingConfig?.mode,
          },
          Tags: this.input.tags,
          Layers: this.input.layers,
          FileSystemConfigs: this.input.fileSystemConfigs,
          CodeSigningConfigArn: this.input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFunction.FunctionName', props);
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
          FunctionName: this.input.functionName,
          Runtime: this.input.runtime,
          Role: this.input.role,
          Handler: this.input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.input.code.s3Bucket,
            S3Key: this.input.code.s3Key,
            S3ObjectVersion: this.input.code.s3ObjectVersion,
          },
          Description: this.input.description,
          Timeout: this.input.timeout,
          MemorySize: this.input.memorySize,
          Publish: this.input.publish,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          DeadLetterConfig: {
            TargetArn: this.input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.input.environment?.variables,
          },
          KMSKeyArn: this.input.kmsKeyArn,
          TracingConfig: {
            Mode: this.input.tracingConfig?.mode,
          },
          Tags: this.input.tags,
          Layers: this.input.layers,
          FileSystemConfigs: this.input.fileSystemConfigs,
          CodeSigningConfigArn: this.input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFunction.FunctionArn', props);
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
          FunctionName: this.input.functionName,
          Runtime: this.input.runtime,
          Role: this.input.role,
          Handler: this.input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.input.code.s3Bucket,
            S3Key: this.input.code.s3Key,
            S3ObjectVersion: this.input.code.s3ObjectVersion,
          },
          Description: this.input.description,
          Timeout: this.input.timeout,
          MemorySize: this.input.memorySize,
          Publish: this.input.publish,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          DeadLetterConfig: {
            TargetArn: this.input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.input.environment?.variables,
          },
          KMSKeyArn: this.input.kmsKeyArn,
          TracingConfig: {
            Mode: this.input.tracingConfig?.mode,
          },
          Tags: this.input.tags,
          Layers: this.input.layers,
          FileSystemConfigs: this.input.fileSystemConfigs,
          CodeSigningConfigArn: this.input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFunction.Runtime', props);
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
          FunctionName: this.input.functionName,
          Runtime: this.input.runtime,
          Role: this.input.role,
          Handler: this.input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.input.code.s3Bucket,
            S3Key: this.input.code.s3Key,
            S3ObjectVersion: this.input.code.s3ObjectVersion,
          },
          Description: this.input.description,
          Timeout: this.input.timeout,
          MemorySize: this.input.memorySize,
          Publish: this.input.publish,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          DeadLetterConfig: {
            TargetArn: this.input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.input.environment?.variables,
          },
          KMSKeyArn: this.input.kmsKeyArn,
          TracingConfig: {
            Mode: this.input.tracingConfig?.mode,
          },
          Tags: this.input.tags,
          Layers: this.input.layers,
          FileSystemConfigs: this.input.fileSystemConfigs,
          CodeSigningConfigArn: this.input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFunction.Role', props);
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
          FunctionName: this.input.functionName,
          Runtime: this.input.runtime,
          Role: this.input.role,
          Handler: this.input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.input.code.s3Bucket,
            S3Key: this.input.code.s3Key,
            S3ObjectVersion: this.input.code.s3ObjectVersion,
          },
          Description: this.input.description,
          Timeout: this.input.timeout,
          MemorySize: this.input.memorySize,
          Publish: this.input.publish,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          DeadLetterConfig: {
            TargetArn: this.input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.input.environment?.variables,
          },
          KMSKeyArn: this.input.kmsKeyArn,
          TracingConfig: {
            Mode: this.input.tracingConfig?.mode,
          },
          Tags: this.input.tags,
          Layers: this.input.layers,
          FileSystemConfigs: this.input.fileSystemConfigs,
          CodeSigningConfigArn: this.input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFunction.Handler', props);
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
          FunctionName: this.input.functionName,
          Runtime: this.input.runtime,
          Role: this.input.role,
          Handler: this.input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.input.code.s3Bucket,
            S3Key: this.input.code.s3Key,
            S3ObjectVersion: this.input.code.s3ObjectVersion,
          },
          Description: this.input.description,
          Timeout: this.input.timeout,
          MemorySize: this.input.memorySize,
          Publish: this.input.publish,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          DeadLetterConfig: {
            TargetArn: this.input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.input.environment?.variables,
          },
          KMSKeyArn: this.input.kmsKeyArn,
          TracingConfig: {
            Mode: this.input.tracingConfig?.mode,
          },
          Tags: this.input.tags,
          Layers: this.input.layers,
          FileSystemConfigs: this.input.fileSystemConfigs,
          CodeSigningConfigArn: this.input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFunction.CodeSize', props);
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
          FunctionName: this.input.functionName,
          Runtime: this.input.runtime,
          Role: this.input.role,
          Handler: this.input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.input.code.s3Bucket,
            S3Key: this.input.code.s3Key,
            S3ObjectVersion: this.input.code.s3ObjectVersion,
          },
          Description: this.input.description,
          Timeout: this.input.timeout,
          MemorySize: this.input.memorySize,
          Publish: this.input.publish,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          DeadLetterConfig: {
            TargetArn: this.input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.input.environment?.variables,
          },
          KMSKeyArn: this.input.kmsKeyArn,
          TracingConfig: {
            Mode: this.input.tracingConfig?.mode,
          },
          Tags: this.input.tags,
          Layers: this.input.layers,
          FileSystemConfigs: this.input.fileSystemConfigs,
          CodeSigningConfigArn: this.input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFunction.Description', props);
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
          FunctionName: this.input.functionName,
          Runtime: this.input.runtime,
          Role: this.input.role,
          Handler: this.input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.input.code.s3Bucket,
            S3Key: this.input.code.s3Key,
            S3ObjectVersion: this.input.code.s3ObjectVersion,
          },
          Description: this.input.description,
          Timeout: this.input.timeout,
          MemorySize: this.input.memorySize,
          Publish: this.input.publish,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          DeadLetterConfig: {
            TargetArn: this.input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.input.environment?.variables,
          },
          KMSKeyArn: this.input.kmsKeyArn,
          TracingConfig: {
            Mode: this.input.tracingConfig?.mode,
          },
          Tags: this.input.tags,
          Layers: this.input.layers,
          FileSystemConfigs: this.input.fileSystemConfigs,
          CodeSigningConfigArn: this.input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFunction.Timeout', props);
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
          FunctionName: this.input.functionName,
          Runtime: this.input.runtime,
          Role: this.input.role,
          Handler: this.input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.input.code.s3Bucket,
            S3Key: this.input.code.s3Key,
            S3ObjectVersion: this.input.code.s3ObjectVersion,
          },
          Description: this.input.description,
          Timeout: this.input.timeout,
          MemorySize: this.input.memorySize,
          Publish: this.input.publish,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          DeadLetterConfig: {
            TargetArn: this.input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.input.environment?.variables,
          },
          KMSKeyArn: this.input.kmsKeyArn,
          TracingConfig: {
            Mode: this.input.tracingConfig?.mode,
          },
          Tags: this.input.tags,
          Layers: this.input.layers,
          FileSystemConfigs: this.input.fileSystemConfigs,
          CodeSigningConfigArn: this.input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFunction.MemorySize', props);
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
          FunctionName: this.input.functionName,
          Runtime: this.input.runtime,
          Role: this.input.role,
          Handler: this.input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.input.code.s3Bucket,
            S3Key: this.input.code.s3Key,
            S3ObjectVersion: this.input.code.s3ObjectVersion,
          },
          Description: this.input.description,
          Timeout: this.input.timeout,
          MemorySize: this.input.memorySize,
          Publish: this.input.publish,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          DeadLetterConfig: {
            TargetArn: this.input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.input.environment?.variables,
          },
          KMSKeyArn: this.input.kmsKeyArn,
          TracingConfig: {
            Mode: this.input.tracingConfig?.mode,
          },
          Tags: this.input.tags,
          Layers: this.input.layers,
          FileSystemConfigs: this.input.fileSystemConfigs,
          CodeSigningConfigArn: this.input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFunction.LastModified', props);
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
          FunctionName: this.input.functionName,
          Runtime: this.input.runtime,
          Role: this.input.role,
          Handler: this.input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.input.code.s3Bucket,
            S3Key: this.input.code.s3Key,
            S3ObjectVersion: this.input.code.s3ObjectVersion,
          },
          Description: this.input.description,
          Timeout: this.input.timeout,
          MemorySize: this.input.memorySize,
          Publish: this.input.publish,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          DeadLetterConfig: {
            TargetArn: this.input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.input.environment?.variables,
          },
          KMSKeyArn: this.input.kmsKeyArn,
          TracingConfig: {
            Mode: this.input.tracingConfig?.mode,
          },
          Tags: this.input.tags,
          Layers: this.input.layers,
          FileSystemConfigs: this.input.fileSystemConfigs,
          CodeSigningConfigArn: this.input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFunction.CodeSha256', props);
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
          FunctionName: this.input.functionName,
          Runtime: this.input.runtime,
          Role: this.input.role,
          Handler: this.input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.input.code.s3Bucket,
            S3Key: this.input.code.s3Key,
            S3ObjectVersion: this.input.code.s3ObjectVersion,
          },
          Description: this.input.description,
          Timeout: this.input.timeout,
          MemorySize: this.input.memorySize,
          Publish: this.input.publish,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          DeadLetterConfig: {
            TargetArn: this.input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.input.environment?.variables,
          },
          KMSKeyArn: this.input.kmsKeyArn,
          TracingConfig: {
            Mode: this.input.tracingConfig?.mode,
          },
          Tags: this.input.tags,
          Layers: this.input.layers,
          FileSystemConfigs: this.input.fileSystemConfigs,
          CodeSigningConfigArn: this.input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFunction.Version', props);
    return resource.getResponseField('Version') as unknown as string;
  }

  public get vpcConfig(): LambdaCreateFunctionVpcConfig {
    return new LambdaCreateFunctionVpcConfig(this, 'VpcConfig', this.__resources, this.input);
  }

  public get deadLetterConfig(): LambdaCreateFunctionDeadLetterConfig {
    return new LambdaCreateFunctionDeadLetterConfig(this, 'DeadLetterConfig', this.__resources, this.input);
  }

  public get environment(): LambdaCreateFunctionEnvironment {
    return new LambdaCreateFunctionEnvironment(this, 'Environment', this.__resources, this.input);
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
          FunctionName: this.input.functionName,
          Runtime: this.input.runtime,
          Role: this.input.role,
          Handler: this.input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.input.code.s3Bucket,
            S3Key: this.input.code.s3Key,
            S3ObjectVersion: this.input.code.s3ObjectVersion,
          },
          Description: this.input.description,
          Timeout: this.input.timeout,
          MemorySize: this.input.memorySize,
          Publish: this.input.publish,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          DeadLetterConfig: {
            TargetArn: this.input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.input.environment?.variables,
          },
          KMSKeyArn: this.input.kmsKeyArn,
          TracingConfig: {
            Mode: this.input.tracingConfig?.mode,
          },
          Tags: this.input.tags,
          Layers: this.input.layers,
          FileSystemConfigs: this.input.fileSystemConfigs,
          CodeSigningConfigArn: this.input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFunction.KMSKeyArn', props);
    return resource.getResponseField('KMSKeyArn') as unknown as string;
  }

  public get tracingConfig(): LambdaCreateFunctionTracingConfig {
    return new LambdaCreateFunctionTracingConfig(this, 'TracingConfig', this.__resources, this.input);
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
          FunctionName: this.input.functionName,
          Runtime: this.input.runtime,
          Role: this.input.role,
          Handler: this.input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.input.code.s3Bucket,
            S3Key: this.input.code.s3Key,
            S3ObjectVersion: this.input.code.s3ObjectVersion,
          },
          Description: this.input.description,
          Timeout: this.input.timeout,
          MemorySize: this.input.memorySize,
          Publish: this.input.publish,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          DeadLetterConfig: {
            TargetArn: this.input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.input.environment?.variables,
          },
          KMSKeyArn: this.input.kmsKeyArn,
          TracingConfig: {
            Mode: this.input.tracingConfig?.mode,
          },
          Tags: this.input.tags,
          Layers: this.input.layers,
          FileSystemConfigs: this.input.fileSystemConfigs,
          CodeSigningConfigArn: this.input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFunction.MasterArn', props);
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
          FunctionName: this.input.functionName,
          Runtime: this.input.runtime,
          Role: this.input.role,
          Handler: this.input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.input.code.s3Bucket,
            S3Key: this.input.code.s3Key,
            S3ObjectVersion: this.input.code.s3ObjectVersion,
          },
          Description: this.input.description,
          Timeout: this.input.timeout,
          MemorySize: this.input.memorySize,
          Publish: this.input.publish,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          DeadLetterConfig: {
            TargetArn: this.input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.input.environment?.variables,
          },
          KMSKeyArn: this.input.kmsKeyArn,
          TracingConfig: {
            Mode: this.input.tracingConfig?.mode,
          },
          Tags: this.input.tags,
          Layers: this.input.layers,
          FileSystemConfigs: this.input.fileSystemConfigs,
          CodeSigningConfigArn: this.input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFunction.RevisionId', props);
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
          FunctionName: this.input.functionName,
          Runtime: this.input.runtime,
          Role: this.input.role,
          Handler: this.input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.input.code.s3Bucket,
            S3Key: this.input.code.s3Key,
            S3ObjectVersion: this.input.code.s3ObjectVersion,
          },
          Description: this.input.description,
          Timeout: this.input.timeout,
          MemorySize: this.input.memorySize,
          Publish: this.input.publish,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          DeadLetterConfig: {
            TargetArn: this.input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.input.environment?.variables,
          },
          KMSKeyArn: this.input.kmsKeyArn,
          TracingConfig: {
            Mode: this.input.tracingConfig?.mode,
          },
          Tags: this.input.tags,
          Layers: this.input.layers,
          FileSystemConfigs: this.input.fileSystemConfigs,
          CodeSigningConfigArn: this.input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFunction.Layers', props);
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
          FunctionName: this.input.functionName,
          Runtime: this.input.runtime,
          Role: this.input.role,
          Handler: this.input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.input.code.s3Bucket,
            S3Key: this.input.code.s3Key,
            S3ObjectVersion: this.input.code.s3ObjectVersion,
          },
          Description: this.input.description,
          Timeout: this.input.timeout,
          MemorySize: this.input.memorySize,
          Publish: this.input.publish,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          DeadLetterConfig: {
            TargetArn: this.input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.input.environment?.variables,
          },
          KMSKeyArn: this.input.kmsKeyArn,
          TracingConfig: {
            Mode: this.input.tracingConfig?.mode,
          },
          Tags: this.input.tags,
          Layers: this.input.layers,
          FileSystemConfigs: this.input.fileSystemConfigs,
          CodeSigningConfigArn: this.input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFunction.State', props);
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
          FunctionName: this.input.functionName,
          Runtime: this.input.runtime,
          Role: this.input.role,
          Handler: this.input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.input.code.s3Bucket,
            S3Key: this.input.code.s3Key,
            S3ObjectVersion: this.input.code.s3ObjectVersion,
          },
          Description: this.input.description,
          Timeout: this.input.timeout,
          MemorySize: this.input.memorySize,
          Publish: this.input.publish,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          DeadLetterConfig: {
            TargetArn: this.input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.input.environment?.variables,
          },
          KMSKeyArn: this.input.kmsKeyArn,
          TracingConfig: {
            Mode: this.input.tracingConfig?.mode,
          },
          Tags: this.input.tags,
          Layers: this.input.layers,
          FileSystemConfigs: this.input.fileSystemConfigs,
          CodeSigningConfigArn: this.input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFunction.StateReason', props);
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
          FunctionName: this.input.functionName,
          Runtime: this.input.runtime,
          Role: this.input.role,
          Handler: this.input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.input.code.s3Bucket,
            S3Key: this.input.code.s3Key,
            S3ObjectVersion: this.input.code.s3ObjectVersion,
          },
          Description: this.input.description,
          Timeout: this.input.timeout,
          MemorySize: this.input.memorySize,
          Publish: this.input.publish,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          DeadLetterConfig: {
            TargetArn: this.input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.input.environment?.variables,
          },
          KMSKeyArn: this.input.kmsKeyArn,
          TracingConfig: {
            Mode: this.input.tracingConfig?.mode,
          },
          Tags: this.input.tags,
          Layers: this.input.layers,
          FileSystemConfigs: this.input.fileSystemConfigs,
          CodeSigningConfigArn: this.input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFunction.StateReasonCode', props);
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
          FunctionName: this.input.functionName,
          Runtime: this.input.runtime,
          Role: this.input.role,
          Handler: this.input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.input.code.s3Bucket,
            S3Key: this.input.code.s3Key,
            S3ObjectVersion: this.input.code.s3ObjectVersion,
          },
          Description: this.input.description,
          Timeout: this.input.timeout,
          MemorySize: this.input.memorySize,
          Publish: this.input.publish,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          DeadLetterConfig: {
            TargetArn: this.input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.input.environment?.variables,
          },
          KMSKeyArn: this.input.kmsKeyArn,
          TracingConfig: {
            Mode: this.input.tracingConfig?.mode,
          },
          Tags: this.input.tags,
          Layers: this.input.layers,
          FileSystemConfigs: this.input.fileSystemConfigs,
          CodeSigningConfigArn: this.input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFunction.LastUpdateStatus', props);
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
          FunctionName: this.input.functionName,
          Runtime: this.input.runtime,
          Role: this.input.role,
          Handler: this.input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.input.code.s3Bucket,
            S3Key: this.input.code.s3Key,
            S3ObjectVersion: this.input.code.s3ObjectVersion,
          },
          Description: this.input.description,
          Timeout: this.input.timeout,
          MemorySize: this.input.memorySize,
          Publish: this.input.publish,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          DeadLetterConfig: {
            TargetArn: this.input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.input.environment?.variables,
          },
          KMSKeyArn: this.input.kmsKeyArn,
          TracingConfig: {
            Mode: this.input.tracingConfig?.mode,
          },
          Tags: this.input.tags,
          Layers: this.input.layers,
          FileSystemConfigs: this.input.fileSystemConfigs,
          CodeSigningConfigArn: this.input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFunction.LastUpdateStatusReason', props);
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
          FunctionName: this.input.functionName,
          Runtime: this.input.runtime,
          Role: this.input.role,
          Handler: this.input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.input.code.s3Bucket,
            S3Key: this.input.code.s3Key,
            S3ObjectVersion: this.input.code.s3ObjectVersion,
          },
          Description: this.input.description,
          Timeout: this.input.timeout,
          MemorySize: this.input.memorySize,
          Publish: this.input.publish,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          DeadLetterConfig: {
            TargetArn: this.input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.input.environment?.variables,
          },
          KMSKeyArn: this.input.kmsKeyArn,
          TracingConfig: {
            Mode: this.input.tracingConfig?.mode,
          },
          Tags: this.input.tags,
          Layers: this.input.layers,
          FileSystemConfigs: this.input.fileSystemConfigs,
          CodeSigningConfigArn: this.input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFunction.LastUpdateStatusReasonCode', props);
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
          FunctionName: this.input.functionName,
          Runtime: this.input.runtime,
          Role: this.input.role,
          Handler: this.input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.input.code.s3Bucket,
            S3Key: this.input.code.s3Key,
            S3ObjectVersion: this.input.code.s3ObjectVersion,
          },
          Description: this.input.description,
          Timeout: this.input.timeout,
          MemorySize: this.input.memorySize,
          Publish: this.input.publish,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          DeadLetterConfig: {
            TargetArn: this.input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.input.environment?.variables,
          },
          KMSKeyArn: this.input.kmsKeyArn,
          TracingConfig: {
            Mode: this.input.tracingConfig?.mode,
          },
          Tags: this.input.tags,
          Layers: this.input.layers,
          FileSystemConfigs: this.input.fileSystemConfigs,
          CodeSigningConfigArn: this.input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFunction.FileSystemConfigs', props);
    return resource.getResponseField('FileSystemConfigs') as unknown as shapes.LambdaFileSystemConfig[];
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
          FunctionName: this.input.functionName,
          Runtime: this.input.runtime,
          Role: this.input.role,
          Handler: this.input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.input.code.s3Bucket,
            S3Key: this.input.code.s3Key,
            S3ObjectVersion: this.input.code.s3ObjectVersion,
          },
          Description: this.input.description,
          Timeout: this.input.timeout,
          MemorySize: this.input.memorySize,
          Publish: this.input.publish,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          DeadLetterConfig: {
            TargetArn: this.input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.input.environment?.variables,
          },
          KMSKeyArn: this.input.kmsKeyArn,
          TracingConfig: {
            Mode: this.input.tracingConfig?.mode,
          },
          Tags: this.input.tags,
          Layers: this.input.layers,
          FileSystemConfigs: this.input.fileSystemConfigs,
          CodeSigningConfigArn: this.input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFunction.SigningProfileVersionArn', props);
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
          FunctionName: this.input.functionName,
          Runtime: this.input.runtime,
          Role: this.input.role,
          Handler: this.input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.input.code.s3Bucket,
            S3Key: this.input.code.s3Key,
            S3ObjectVersion: this.input.code.s3ObjectVersion,
          },
          Description: this.input.description,
          Timeout: this.input.timeout,
          MemorySize: this.input.memorySize,
          Publish: this.input.publish,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          DeadLetterConfig: {
            TargetArn: this.input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.input.environment?.variables,
          },
          KMSKeyArn: this.input.kmsKeyArn,
          TracingConfig: {
            Mode: this.input.tracingConfig?.mode,
          },
          Tags: this.input.tags,
          Layers: this.input.layers,
          FileSystemConfigs: this.input.fileSystemConfigs,
          CodeSigningConfigArn: this.input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFunction.SigningJobArn', props);
    return resource.getResponseField('SigningJobArn') as unknown as string;
  }

}

export class LambdaCreateFunctionVpcConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaCreateFunctionRequest) {
    super(scope, id);
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
          FunctionName: this.input.functionName,
          Runtime: this.input.runtime,
          Role: this.input.role,
          Handler: this.input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.input.code.s3Bucket,
            S3Key: this.input.code.s3Key,
            S3ObjectVersion: this.input.code.s3ObjectVersion,
          },
          Description: this.input.description,
          Timeout: this.input.timeout,
          MemorySize: this.input.memorySize,
          Publish: this.input.publish,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          DeadLetterConfig: {
            TargetArn: this.input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.input.environment?.variables,
          },
          KMSKeyArn: this.input.kmsKeyArn,
          TracingConfig: {
            Mode: this.input.tracingConfig?.mode,
          },
          Tags: this.input.tags,
          Layers: this.input.layers,
          FileSystemConfigs: this.input.fileSystemConfigs,
          CodeSigningConfigArn: this.input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFunction.VpcConfig.SubnetIds', props);
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
          FunctionName: this.input.functionName,
          Runtime: this.input.runtime,
          Role: this.input.role,
          Handler: this.input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.input.code.s3Bucket,
            S3Key: this.input.code.s3Key,
            S3ObjectVersion: this.input.code.s3ObjectVersion,
          },
          Description: this.input.description,
          Timeout: this.input.timeout,
          MemorySize: this.input.memorySize,
          Publish: this.input.publish,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          DeadLetterConfig: {
            TargetArn: this.input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.input.environment?.variables,
          },
          KMSKeyArn: this.input.kmsKeyArn,
          TracingConfig: {
            Mode: this.input.tracingConfig?.mode,
          },
          Tags: this.input.tags,
          Layers: this.input.layers,
          FileSystemConfigs: this.input.fileSystemConfigs,
          CodeSigningConfigArn: this.input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFunction.VpcConfig.SecurityGroupIds', props);
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
          FunctionName: this.input.functionName,
          Runtime: this.input.runtime,
          Role: this.input.role,
          Handler: this.input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.input.code.s3Bucket,
            S3Key: this.input.code.s3Key,
            S3ObjectVersion: this.input.code.s3ObjectVersion,
          },
          Description: this.input.description,
          Timeout: this.input.timeout,
          MemorySize: this.input.memorySize,
          Publish: this.input.publish,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          DeadLetterConfig: {
            TargetArn: this.input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.input.environment?.variables,
          },
          KMSKeyArn: this.input.kmsKeyArn,
          TracingConfig: {
            Mode: this.input.tracingConfig?.mode,
          },
          Tags: this.input.tags,
          Layers: this.input.layers,
          FileSystemConfigs: this.input.fileSystemConfigs,
          CodeSigningConfigArn: this.input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFunction.VpcConfig.VpcId', props);
    return resource.getResponseField('VpcConfig.VpcId') as unknown as string;
  }

}

export class LambdaCreateFunctionDeadLetterConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaCreateFunctionRequest) {
    super(scope, id);
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
          FunctionName: this.input.functionName,
          Runtime: this.input.runtime,
          Role: this.input.role,
          Handler: this.input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.input.code.s3Bucket,
            S3Key: this.input.code.s3Key,
            S3ObjectVersion: this.input.code.s3ObjectVersion,
          },
          Description: this.input.description,
          Timeout: this.input.timeout,
          MemorySize: this.input.memorySize,
          Publish: this.input.publish,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          DeadLetterConfig: {
            TargetArn: this.input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.input.environment?.variables,
          },
          KMSKeyArn: this.input.kmsKeyArn,
          TracingConfig: {
            Mode: this.input.tracingConfig?.mode,
          },
          Tags: this.input.tags,
          Layers: this.input.layers,
          FileSystemConfigs: this.input.fileSystemConfigs,
          CodeSigningConfigArn: this.input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFunction.DeadLetterConfig.TargetArn', props);
    return resource.getResponseField('DeadLetterConfig.TargetArn') as unknown as string;
  }

}

export class LambdaCreateFunctionEnvironment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaCreateFunctionRequest) {
    super(scope, id);
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
          FunctionName: this.input.functionName,
          Runtime: this.input.runtime,
          Role: this.input.role,
          Handler: this.input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.input.code.s3Bucket,
            S3Key: this.input.code.s3Key,
            S3ObjectVersion: this.input.code.s3ObjectVersion,
          },
          Description: this.input.description,
          Timeout: this.input.timeout,
          MemorySize: this.input.memorySize,
          Publish: this.input.publish,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          DeadLetterConfig: {
            TargetArn: this.input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.input.environment?.variables,
          },
          KMSKeyArn: this.input.kmsKeyArn,
          TracingConfig: {
            Mode: this.input.tracingConfig?.mode,
          },
          Tags: this.input.tags,
          Layers: this.input.layers,
          FileSystemConfigs: this.input.fileSystemConfigs,
          CodeSigningConfigArn: this.input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFunction.Environment.Variables', props);
    return resource.getResponseField('Environment.Variables') as unknown as Record<string, string>;
  }

  public get error(): LambdaCreateFunctionEnvironmentError {
    return new LambdaCreateFunctionEnvironmentError(this, 'Error', this.__resources, this.input);
  }

}

export class LambdaCreateFunctionEnvironmentError extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaCreateFunctionRequest) {
    super(scope, id);
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
          FunctionName: this.input.functionName,
          Runtime: this.input.runtime,
          Role: this.input.role,
          Handler: this.input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.input.code.s3Bucket,
            S3Key: this.input.code.s3Key,
            S3ObjectVersion: this.input.code.s3ObjectVersion,
          },
          Description: this.input.description,
          Timeout: this.input.timeout,
          MemorySize: this.input.memorySize,
          Publish: this.input.publish,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          DeadLetterConfig: {
            TargetArn: this.input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.input.environment?.variables,
          },
          KMSKeyArn: this.input.kmsKeyArn,
          TracingConfig: {
            Mode: this.input.tracingConfig?.mode,
          },
          Tags: this.input.tags,
          Layers: this.input.layers,
          FileSystemConfigs: this.input.fileSystemConfigs,
          CodeSigningConfigArn: this.input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFunction.Environment.Error.ErrorCode', props);
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
          FunctionName: this.input.functionName,
          Runtime: this.input.runtime,
          Role: this.input.role,
          Handler: this.input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.input.code.s3Bucket,
            S3Key: this.input.code.s3Key,
            S3ObjectVersion: this.input.code.s3ObjectVersion,
          },
          Description: this.input.description,
          Timeout: this.input.timeout,
          MemorySize: this.input.memorySize,
          Publish: this.input.publish,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          DeadLetterConfig: {
            TargetArn: this.input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.input.environment?.variables,
          },
          KMSKeyArn: this.input.kmsKeyArn,
          TracingConfig: {
            Mode: this.input.tracingConfig?.mode,
          },
          Tags: this.input.tags,
          Layers: this.input.layers,
          FileSystemConfigs: this.input.fileSystemConfigs,
          CodeSigningConfigArn: this.input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFunction.Environment.Error.Message', props);
    return resource.getResponseField('Environment.Error.Message') as unknown as string;
  }

}

export class LambdaCreateFunctionTracingConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaCreateFunctionRequest) {
    super(scope, id);
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
          FunctionName: this.input.functionName,
          Runtime: this.input.runtime,
          Role: this.input.role,
          Handler: this.input.handler,
          Code: {
            ZipFile: {
            },
            S3Bucket: this.input.code.s3Bucket,
            S3Key: this.input.code.s3Key,
            S3ObjectVersion: this.input.code.s3ObjectVersion,
          },
          Description: this.input.description,
          Timeout: this.input.timeout,
          MemorySize: this.input.memorySize,
          Publish: this.input.publish,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          DeadLetterConfig: {
            TargetArn: this.input.deadLetterConfig?.targetArn,
          },
          Environment: {
            Variables: this.input.environment?.variables,
          },
          KMSKeyArn: this.input.kmsKeyArn,
          TracingConfig: {
            Mode: this.input.tracingConfig?.mode,
          },
          Tags: this.input.tags,
          Layers: this.input.layers,
          FileSystemConfigs: this.input.fileSystemConfigs,
          CodeSigningConfigArn: this.input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFunction.TracingConfig.Mode', props);
    return resource.getResponseField('TracingConfig.Mode') as unknown as string;
  }

}

export class LambdaDeleteEventSourceMapping extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaDeleteEventSourceMappingRequest) {
    super(scope, id);
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
          UUID: this.input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteEventSourceMapping.UUID', props);
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
          UUID: this.input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteEventSourceMapping.StartingPosition', props);
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
          UUID: this.input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteEventSourceMapping.StartingPositionTimestamp', props);
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
          UUID: this.input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteEventSourceMapping.BatchSize', props);
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
          UUID: this.input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteEventSourceMapping.MaximumBatchingWindowInSeconds', props);
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
          UUID: this.input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteEventSourceMapping.ParallelizationFactor', props);
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
          UUID: this.input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteEventSourceMapping.EventSourceArn', props);
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
          UUID: this.input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteEventSourceMapping.FunctionArn', props);
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
          UUID: this.input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteEventSourceMapping.LastModified', props);
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
          UUID: this.input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteEventSourceMapping.LastProcessingResult', props);
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
          UUID: this.input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteEventSourceMapping.State', props);
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
          UUID: this.input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteEventSourceMapping.StateTransitionReason', props);
    return resource.getResponseField('StateTransitionReason') as unknown as string;
  }

  public get destinationConfig(): LambdaDeleteEventSourceMappingDestinationConfig {
    return new LambdaDeleteEventSourceMappingDestinationConfig(this, 'DestinationConfig', this.__resources, this.input);
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
          UUID: this.input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteEventSourceMapping.Topics', props);
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
          UUID: this.input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteEventSourceMapping.Queues', props);
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
          UUID: this.input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteEventSourceMapping.SourceAccessConfigurations', props);
    return resource.getResponseField('SourceAccessConfigurations') as unknown as shapes.LambdaSourceAccessConfiguration[];
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
          UUID: this.input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteEventSourceMapping.MaximumRecordAgeInSeconds', props);
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
          UUID: this.input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteEventSourceMapping.BisectBatchOnFunctionError', props);
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
          UUID: this.input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteEventSourceMapping.MaximumRetryAttempts', props);
    return resource.getResponseField('MaximumRetryAttempts') as unknown as number;
  }

}

export class LambdaDeleteEventSourceMappingDestinationConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaDeleteEventSourceMappingRequest) {
    super(scope, id);
  }

  public get onSuccess(): LambdaDeleteEventSourceMappingDestinationConfigOnSuccess {
    return new LambdaDeleteEventSourceMappingDestinationConfigOnSuccess(this, 'OnSuccess', this.__resources, this.input);
  }

  public get onFailure(): LambdaDeleteEventSourceMappingDestinationConfigOnFailure {
    return new LambdaDeleteEventSourceMappingDestinationConfigOnFailure(this, 'OnFailure', this.__resources, this.input);
  }

}

export class LambdaDeleteEventSourceMappingDestinationConfigOnSuccess extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaDeleteEventSourceMappingRequest) {
    super(scope, id);
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
          UUID: this.input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteEventSourceMapping.DestinationConfig.OnSuccess.Destination', props);
    return resource.getResponseField('DestinationConfig.OnSuccess.Destination') as unknown as string;
  }

}

export class LambdaDeleteEventSourceMappingDestinationConfigOnFailure extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaDeleteEventSourceMappingRequest) {
    super(scope, id);
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
          UUID: this.input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteEventSourceMapping.DestinationConfig.OnFailure.Destination', props);
    return resource.getResponseField('DestinationConfig.OnFailure.Destination') as unknown as string;
  }

}

export class LambdaFetchAccountSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get accountLimit(): LambdaFetchAccountSettingsAccountLimit {
    return new LambdaFetchAccountSettingsAccountLimit(this, 'AccountLimit', this.__resources);
  }

  public get accountUsage(): LambdaFetchAccountSettingsAccountUsage {
    return new LambdaFetchAccountSettingsAccountUsage(this, 'AccountUsage', this.__resources);
  }

}

export class LambdaFetchAccountSettingsAccountLimit extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'GetAccountSettings.AccountLimit.TotalCodeSize', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetAccountSettings.AccountLimit.CodeSizeUnzipped', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetAccountSettings.AccountLimit.CodeSizeZipped', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetAccountSettings.AccountLimit.ConcurrentExecutions', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetAccountSettings.AccountLimit.UnreservedConcurrentExecutions', props);
    return resource.getResponseField('AccountLimit.UnreservedConcurrentExecutions') as unknown as number;
  }

}

export class LambdaFetchAccountSettingsAccountUsage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'GetAccountSettings.AccountUsage.TotalCodeSize', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetAccountSettings.AccountUsage.FunctionCount', props);
    return resource.getResponseField('AccountUsage.FunctionCount') as unknown as number;
  }

}

export class LambdaFetchAlias extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaGetAliasRequest) {
    super(scope, id);
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
          FunctionName: this.input.functionName,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAlias.AliasArn', props);
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
          FunctionName: this.input.functionName,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAlias.Name', props);
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
          FunctionName: this.input.functionName,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAlias.FunctionVersion', props);
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
          FunctionName: this.input.functionName,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAlias.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get routingConfig(): LambdaFetchAliasRoutingConfig {
    return new LambdaFetchAliasRoutingConfig(this, 'RoutingConfig', this.__resources, this.input);
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
          FunctionName: this.input.functionName,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAlias.RevisionId', props);
    return resource.getResponseField('RevisionId') as unknown as string;
  }

}

export class LambdaFetchAliasRoutingConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaGetAliasRequest) {
    super(scope, id);
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
          FunctionName: this.input.functionName,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAlias.RoutingConfig.AdditionalVersionWeights', props);
    return resource.getResponseField('RoutingConfig.AdditionalVersionWeights') as unknown as Record<string, number>;
  }

}

export class LambdaFetchCodeSigningConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaGetCodeSigningConfigRequest) {
    super(scope, id);
  }

  public get codeSigningConfig(): LambdaFetchCodeSigningConfigCodeSigningConfig {
    return new LambdaFetchCodeSigningConfigCodeSigningConfig(this, 'CodeSigningConfig', this.__resources, this.input);
  }

}

export class LambdaFetchCodeSigningConfigCodeSigningConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaGetCodeSigningConfigRequest) {
    super(scope, id);
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
          CodeSigningConfigArn: this.input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCodeSigningConfig.CodeSigningConfig.CodeSigningConfigId', props);
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
          CodeSigningConfigArn: this.input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCodeSigningConfig.CodeSigningConfig.CodeSigningConfigArn', props);
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
          CodeSigningConfigArn: this.input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCodeSigningConfig.CodeSigningConfig.Description', props);
    return resource.getResponseField('CodeSigningConfig.Description') as unknown as string;
  }

  public get allowedPublishers(): LambdaFetchCodeSigningConfigCodeSigningConfigAllowedPublishers {
    return new LambdaFetchCodeSigningConfigCodeSigningConfigAllowedPublishers(this, 'AllowedPublishers', this.__resources, this.input);
  }

  public get codeSigningPolicies(): LambdaFetchCodeSigningConfigCodeSigningConfigCodeSigningPolicies {
    return new LambdaFetchCodeSigningConfigCodeSigningConfigCodeSigningPolicies(this, 'CodeSigningPolicies', this.__resources, this.input);
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
          CodeSigningConfigArn: this.input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCodeSigningConfig.CodeSigningConfig.LastModified', props);
    return resource.getResponseField('CodeSigningConfig.LastModified') as unknown as string;
  }

}

export class LambdaFetchCodeSigningConfigCodeSigningConfigAllowedPublishers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaGetCodeSigningConfigRequest) {
    super(scope, id);
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
          CodeSigningConfigArn: this.input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCodeSigningConfig.CodeSigningConfig.AllowedPublishers.SigningProfileVersionArns', props);
    return resource.getResponseField('CodeSigningConfig.AllowedPublishers.SigningProfileVersionArns') as unknown as string[];
  }

}

export class LambdaFetchCodeSigningConfigCodeSigningConfigCodeSigningPolicies extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaGetCodeSigningConfigRequest) {
    super(scope, id);
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
          CodeSigningConfigArn: this.input.codeSigningConfigArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCodeSigningConfig.CodeSigningConfig.CodeSigningPolicies.UntrustedArtifactOnDeployment', props);
    return resource.getResponseField('CodeSigningConfig.CodeSigningPolicies.UntrustedArtifactOnDeployment') as unknown as string;
  }

}

export class LambdaFetchEventSourceMapping extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaGetEventSourceMappingRequest) {
    super(scope, id);
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
          UUID: this.input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEventSourceMapping.UUID', props);
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
          UUID: this.input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEventSourceMapping.StartingPosition', props);
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
          UUID: this.input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEventSourceMapping.StartingPositionTimestamp', props);
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
          UUID: this.input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEventSourceMapping.BatchSize', props);
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
          UUID: this.input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEventSourceMapping.MaximumBatchingWindowInSeconds', props);
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
          UUID: this.input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEventSourceMapping.ParallelizationFactor', props);
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
          UUID: this.input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEventSourceMapping.EventSourceArn', props);
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
          UUID: this.input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEventSourceMapping.FunctionArn', props);
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
          UUID: this.input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEventSourceMapping.LastModified', props);
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
          UUID: this.input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEventSourceMapping.LastProcessingResult', props);
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
          UUID: this.input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEventSourceMapping.State', props);
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
          UUID: this.input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEventSourceMapping.StateTransitionReason', props);
    return resource.getResponseField('StateTransitionReason') as unknown as string;
  }

  public get destinationConfig(): LambdaFetchEventSourceMappingDestinationConfig {
    return new LambdaFetchEventSourceMappingDestinationConfig(this, 'DestinationConfig', this.__resources, this.input);
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
          UUID: this.input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEventSourceMapping.Topics', props);
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
          UUID: this.input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEventSourceMapping.Queues', props);
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
          UUID: this.input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEventSourceMapping.SourceAccessConfigurations', props);
    return resource.getResponseField('SourceAccessConfigurations') as unknown as shapes.LambdaSourceAccessConfiguration[];
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
          UUID: this.input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEventSourceMapping.MaximumRecordAgeInSeconds', props);
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
          UUID: this.input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEventSourceMapping.BisectBatchOnFunctionError', props);
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
          UUID: this.input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEventSourceMapping.MaximumRetryAttempts', props);
    return resource.getResponseField('MaximumRetryAttempts') as unknown as number;
  }

}

export class LambdaFetchEventSourceMappingDestinationConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaGetEventSourceMappingRequest) {
    super(scope, id);
  }

  public get onSuccess(): LambdaFetchEventSourceMappingDestinationConfigOnSuccess {
    return new LambdaFetchEventSourceMappingDestinationConfigOnSuccess(this, 'OnSuccess', this.__resources, this.input);
  }

  public get onFailure(): LambdaFetchEventSourceMappingDestinationConfigOnFailure {
    return new LambdaFetchEventSourceMappingDestinationConfigOnFailure(this, 'OnFailure', this.__resources, this.input);
  }

}

export class LambdaFetchEventSourceMappingDestinationConfigOnSuccess extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaGetEventSourceMappingRequest) {
    super(scope, id);
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
          UUID: this.input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEventSourceMapping.DestinationConfig.OnSuccess.Destination', props);
    return resource.getResponseField('DestinationConfig.OnSuccess.Destination') as unknown as string;
  }

}

export class LambdaFetchEventSourceMappingDestinationConfigOnFailure extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaGetEventSourceMappingRequest) {
    super(scope, id);
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
          UUID: this.input.uuid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEventSourceMapping.DestinationConfig.OnFailure.Destination', props);
    return resource.getResponseField('DestinationConfig.OnFailure.Destination') as unknown as string;
  }

}

export class LambdaFetchFunction extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaGetFunctionRequest) {
    super(scope, id);
  }

  public get configuration(): LambdaFetchFunctionConfiguration {
    return new LambdaFetchFunctionConfiguration(this, 'Configuration', this.__resources, this.input);
  }

  public get code(): LambdaFetchFunctionCode {
    return new LambdaFetchFunctionCode(this, 'Code', this.__resources, this.input);
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunction.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

  public get concurrency(): LambdaFetchFunctionConcurrency {
    return new LambdaFetchFunctionConcurrency(this, 'Concurrency', this.__resources, this.input);
  }

}

export class LambdaFetchFunctionCode extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaGetFunctionRequest) {
    super(scope, id);
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunction.Code.RepositoryType', props);
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunction.Code.Location', props);
    return resource.getResponseField('Code.Location') as unknown as string;
  }

}

export class LambdaFetchFunctionCodeSigningConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaGetFunctionCodeSigningConfigRequest) {
    super(scope, id);
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
          FunctionName: this.input.functionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunctionCodeSigningConfig.CodeSigningConfigArn', props);
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
          FunctionName: this.input.functionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunctionCodeSigningConfig.FunctionName', props);
    return resource.getResponseField('FunctionName') as unknown as string;
  }

}

export class LambdaFetchFunctionConcurrency extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaGetFunctionConcurrencyRequest) {
    super(scope, id);
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
          FunctionName: this.input.functionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunctionConcurrency.ReservedConcurrentExecutions', props);
    return resource.getResponseField('ReservedConcurrentExecutions') as unknown as number;
  }

}

export class LambdaFetchFunctionConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaGetFunctionConfigurationRequest) {
    super(scope, id);
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunctionConfiguration.FunctionName', props);
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunctionConfiguration.FunctionArn', props);
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunctionConfiguration.Runtime', props);
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunctionConfiguration.Role', props);
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunctionConfiguration.Handler', props);
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunctionConfiguration.CodeSize', props);
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunctionConfiguration.Description', props);
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunctionConfiguration.Timeout', props);
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunctionConfiguration.MemorySize', props);
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunctionConfiguration.LastModified', props);
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunctionConfiguration.CodeSha256', props);
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunctionConfiguration.Version', props);
    return resource.getResponseField('Version') as unknown as string;
  }

  public get vpcConfig(): LambdaFetchFunctionConfigurationVpcConfig {
    return new LambdaFetchFunctionConfigurationVpcConfig(this, 'VpcConfig', this.__resources, this.input);
  }

  public get deadLetterConfig(): LambdaFetchFunctionConfigurationDeadLetterConfig {
    return new LambdaFetchFunctionConfigurationDeadLetterConfig(this, 'DeadLetterConfig', this.__resources, this.input);
  }

  public get environment(): LambdaFetchFunctionConfigurationEnvironment {
    return new LambdaFetchFunctionConfigurationEnvironment(this, 'Environment', this.__resources, this.input);
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunctionConfiguration.KMSKeyArn', props);
    return resource.getResponseField('KMSKeyArn') as unknown as string;
  }

  public get tracingConfig(): LambdaFetchFunctionConfigurationTracingConfig {
    return new LambdaFetchFunctionConfigurationTracingConfig(this, 'TracingConfig', this.__resources, this.input);
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunctionConfiguration.MasterArn', props);
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunctionConfiguration.RevisionId', props);
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunctionConfiguration.Layers', props);
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunctionConfiguration.State', props);
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunctionConfiguration.StateReason', props);
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunctionConfiguration.StateReasonCode', props);
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunctionConfiguration.LastUpdateStatus', props);
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunctionConfiguration.LastUpdateStatusReason', props);
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunctionConfiguration.LastUpdateStatusReasonCode', props);
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunctionConfiguration.FileSystemConfigs', props);
    return resource.getResponseField('FileSystemConfigs') as unknown as shapes.LambdaFileSystemConfig[];
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunctionConfiguration.SigningProfileVersionArn', props);
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunctionConfiguration.SigningJobArn', props);
    return resource.getResponseField('SigningJobArn') as unknown as string;
  }

}

export class LambdaFetchFunctionConfigurationVpcConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaGetFunctionConfigurationRequest) {
    super(scope, id);
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunctionConfiguration.VpcConfig.SubnetIds', props);
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunctionConfiguration.VpcConfig.SecurityGroupIds', props);
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunctionConfiguration.VpcConfig.VpcId', props);
    return resource.getResponseField('VpcConfig.VpcId') as unknown as string;
  }

}

export class LambdaFetchFunctionConfigurationDeadLetterConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaGetFunctionConfigurationRequest) {
    super(scope, id);
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunctionConfiguration.DeadLetterConfig.TargetArn', props);
    return resource.getResponseField('DeadLetterConfig.TargetArn') as unknown as string;
  }

}

export class LambdaFetchFunctionConfigurationEnvironment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaGetFunctionConfigurationRequest) {
    super(scope, id);
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunctionConfiguration.Environment.Variables', props);
    return resource.getResponseField('Environment.Variables') as unknown as Record<string, string>;
  }

  public get error(): LambdaFetchFunctionConfigurationEnvironmentError {
    return new LambdaFetchFunctionConfigurationEnvironmentError(this, 'Error', this.__resources, this.input);
  }

}

export class LambdaFetchFunctionConfigurationEnvironmentError extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaGetFunctionConfigurationRequest) {
    super(scope, id);
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunctionConfiguration.Environment.Error.ErrorCode', props);
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunctionConfiguration.Environment.Error.Message', props);
    return resource.getResponseField('Environment.Error.Message') as unknown as string;
  }

}

export class LambdaFetchFunctionConfigurationTracingConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaGetFunctionConfigurationRequest) {
    super(scope, id);
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunctionConfiguration.TracingConfig.Mode', props);
    return resource.getResponseField('TracingConfig.Mode') as unknown as string;
  }

}

export class LambdaFetchFunctionEventInvokeConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaGetFunctionEventInvokeConfigRequest) {
    super(scope, id);
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunctionEventInvokeConfig.LastModified', props);
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunctionEventInvokeConfig.FunctionArn', props);
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunctionEventInvokeConfig.MaximumRetryAttempts', props);
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunctionEventInvokeConfig.MaximumEventAgeInSeconds', props);
    return resource.getResponseField('MaximumEventAgeInSeconds') as unknown as number;
  }

  public get destinationConfig(): LambdaFetchFunctionEventInvokeConfigDestinationConfig {
    return new LambdaFetchFunctionEventInvokeConfigDestinationConfig(this, 'DestinationConfig', this.__resources, this.input);
  }

}

export class LambdaFetchFunctionEventInvokeConfigDestinationConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaGetFunctionEventInvokeConfigRequest) {
    super(scope, id);
  }

  public get onSuccess(): LambdaFetchFunctionEventInvokeConfigDestinationConfigOnSuccess {
    return new LambdaFetchFunctionEventInvokeConfigDestinationConfigOnSuccess(this, 'OnSuccess', this.__resources, this.input);
  }

  public get onFailure(): LambdaFetchFunctionEventInvokeConfigDestinationConfigOnFailure {
    return new LambdaFetchFunctionEventInvokeConfigDestinationConfigOnFailure(this, 'OnFailure', this.__resources, this.input);
  }

}

export class LambdaFetchFunctionEventInvokeConfigDestinationConfigOnSuccess extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaGetFunctionEventInvokeConfigRequest) {
    super(scope, id);
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunctionEventInvokeConfig.DestinationConfig.OnSuccess.Destination', props);
    return resource.getResponseField('DestinationConfig.OnSuccess.Destination') as unknown as string;
  }

}

export class LambdaFetchFunctionEventInvokeConfigDestinationConfigOnFailure extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaGetFunctionEventInvokeConfigRequest) {
    super(scope, id);
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunctionEventInvokeConfig.DestinationConfig.OnFailure.Destination', props);
    return resource.getResponseField('DestinationConfig.OnFailure.Destination') as unknown as string;
  }

}

export class LambdaFetchLayerVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaGetLayerVersionRequest) {
    super(scope, id);
  }

  public get content(): LambdaFetchLayerVersionContent {
    return new LambdaFetchLayerVersionContent(this, 'Content', this.__resources, this.input);
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
          LayerName: this.input.layerName,
          VersionNumber: this.input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLayerVersion.LayerArn', props);
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
          LayerName: this.input.layerName,
          VersionNumber: this.input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLayerVersion.LayerVersionArn', props);
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
          LayerName: this.input.layerName,
          VersionNumber: this.input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLayerVersion.Description', props);
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
          LayerName: this.input.layerName,
          VersionNumber: this.input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLayerVersion.CreatedDate', props);
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
          LayerName: this.input.layerName,
          VersionNumber: this.input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLayerVersion.Version', props);
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
          LayerName: this.input.layerName,
          VersionNumber: this.input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLayerVersion.CompatibleRuntimes', props);
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
          LayerName: this.input.layerName,
          VersionNumber: this.input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLayerVersion.LicenseInfo', props);
    return resource.getResponseField('LicenseInfo') as unknown as string;
  }

}

export class LambdaFetchLayerVersionContent extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaGetLayerVersionRequest) {
    super(scope, id);
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
          LayerName: this.input.layerName,
          VersionNumber: this.input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLayerVersion.Content.Location', props);
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
          LayerName: this.input.layerName,
          VersionNumber: this.input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLayerVersion.Content.CodeSha256', props);
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
          LayerName: this.input.layerName,
          VersionNumber: this.input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLayerVersion.Content.CodeSize', props);
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
          LayerName: this.input.layerName,
          VersionNumber: this.input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLayerVersion.Content.SigningProfileVersionArn', props);
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
          LayerName: this.input.layerName,
          VersionNumber: this.input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLayerVersion.Content.SigningJobArn', props);
    return resource.getResponseField('Content.SigningJobArn') as unknown as string;
  }

}

export class LambdaFetchLayerVersionByArn extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaGetLayerVersionByArnRequest) {
    super(scope, id);
  }

  public get content(): LambdaFetchLayerVersionByArnContent {
    return new LambdaFetchLayerVersionByArnContent(this, 'Content', this.__resources, this.input);
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
          Arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLayerVersionByArn.LayerArn', props);
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
          Arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLayerVersionByArn.LayerVersionArn', props);
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
          Arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLayerVersionByArn.Description', props);
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
          Arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLayerVersionByArn.CreatedDate', props);
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
          Arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLayerVersionByArn.Version', props);
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
          Arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLayerVersionByArn.CompatibleRuntimes', props);
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
          Arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLayerVersionByArn.LicenseInfo', props);
    return resource.getResponseField('LicenseInfo') as unknown as string;
  }

}

export class LambdaFetchLayerVersionByArnContent extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaGetLayerVersionByArnRequest) {
    super(scope, id);
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
          Arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLayerVersionByArn.Content.Location', props);
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
          Arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLayerVersionByArn.Content.CodeSha256', props);
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
          Arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLayerVersionByArn.Content.CodeSize', props);
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
          Arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLayerVersionByArn.Content.SigningProfileVersionArn', props);
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
          Arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLayerVersionByArn.Content.SigningJobArn', props);
    return resource.getResponseField('Content.SigningJobArn') as unknown as string;
  }

}

export class LambdaFetchLayerVersionPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaGetLayerVersionPolicyRequest) {
    super(scope, id);
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
          LayerName: this.input.layerName,
          VersionNumber: this.input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLayerVersionPolicy.Policy', props);
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
          LayerName: this.input.layerName,
          VersionNumber: this.input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLayerVersionPolicy.RevisionId', props);
    return resource.getResponseField('RevisionId') as unknown as string;
  }

}

export class LambdaFetchPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaGetPolicyRequest) {
    super(scope, id);
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPolicy.Policy', props);
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPolicy.RevisionId', props);
    return resource.getResponseField('RevisionId') as unknown as string;
  }

}

export class LambdaFetchProvisionedConcurrencyConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaGetProvisionedConcurrencyConfigRequest) {
    super(scope, id);
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetProvisionedConcurrencyConfig.RequestedProvisionedConcurrentExecutions', props);
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetProvisionedConcurrencyConfig.AvailableProvisionedConcurrentExecutions', props);
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetProvisionedConcurrencyConfig.AllocatedProvisionedConcurrentExecutions', props);
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetProvisionedConcurrencyConfig.Status', props);
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetProvisionedConcurrencyConfig.StatusReason', props);
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetProvisionedConcurrencyConfig.LastModified', props);
    return resource.getResponseField('LastModified') as unknown as string;
  }

}

export class LambdaInvoke extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaInvocationRequest) {
    super(scope, id);
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
          FunctionName: this.input.functionName,
          InvocationType: this.input.invocationType,
          LogType: this.input.logType,
          ClientContext: this.input.clientContext,
          Payload: {
          },
          Qualifier: this.input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Invoke.StatusCode', props);
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
          FunctionName: this.input.functionName,
          InvocationType: this.input.invocationType,
          LogType: this.input.logType,
          ClientContext: this.input.clientContext,
          Payload: {
          },
          Qualifier: this.input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Invoke.FunctionError', props);
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
          FunctionName: this.input.functionName,
          InvocationType: this.input.invocationType,
          LogType: this.input.logType,
          ClientContext: this.input.clientContext,
          Payload: {
          },
          Qualifier: this.input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Invoke.LogResult', props);
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
          FunctionName: this.input.functionName,
          InvocationType: this.input.invocationType,
          LogType: this.input.logType,
          ClientContext: this.input.clientContext,
          Payload: {
          },
          Qualifier: this.input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Invoke.Payload', props);
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
          FunctionName: this.input.functionName,
          InvocationType: this.input.invocationType,
          LogType: this.input.logType,
          ClientContext: this.input.clientContext,
          Payload: {
          },
          Qualifier: this.input.qualifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Invoke.ExecutedVersion', props);
    return resource.getResponseField('ExecutedVersion') as unknown as string;
  }

}

export class LambdaInvokeAsync extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaInvokeAsyncRequest) {
    super(scope, id);
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
          FunctionName: this.input.functionName,
          InvokeArgs: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'InvokeAsync.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class LambdaListAliases extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaListAliasesRequest) {
    super(scope, id);
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
          FunctionName: this.input.functionName,
          FunctionVersion: this.input.functionVersion,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAliases.NextMarker', props);
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
          FunctionName: this.input.functionName,
          FunctionVersion: this.input.functionVersion,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAliases.Aliases', props);
    return resource.getResponseField('Aliases') as unknown as shapes.LambdaAliasConfiguration[];
  }

}

export class LambdaListCodeSigningConfigs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaListCodeSigningConfigsRequest) {
    super(scope, id);
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
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListCodeSigningConfigs.NextMarker', props);
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
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListCodeSigningConfigs.CodeSigningConfigs', props);
    return resource.getResponseField('CodeSigningConfigs') as unknown as shapes.LambdaCodeSigningConfig[];
  }

}

export class LambdaListEventSourceMappings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaListEventSourceMappingsRequest) {
    super(scope, id);
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
          EventSourceArn: this.input.eventSourceArn,
          FunctionName: this.input.functionName,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListEventSourceMappings.NextMarker', props);
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
          EventSourceArn: this.input.eventSourceArn,
          FunctionName: this.input.functionName,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListEventSourceMappings.EventSourceMappings', props);
    return resource.getResponseField('EventSourceMappings') as unknown as shapes.LambdaEventSourceMappingConfiguration[];
  }

}

export class LambdaListFunctionEventInvokeConfigs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaListFunctionEventInvokeConfigsRequest) {
    super(scope, id);
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
          FunctionName: this.input.functionName,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListFunctionEventInvokeConfigs.FunctionEventInvokeConfigs', props);
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
          FunctionName: this.input.functionName,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListFunctionEventInvokeConfigs.NextMarker', props);
    return resource.getResponseField('NextMarker') as unknown as string;
  }

}

export class LambdaListFunctions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaListFunctionsRequest) {
    super(scope, id);
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
          MasterRegion: this.input.masterRegion,
          FunctionVersion: this.input.functionVersion,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListFunctions.NextMarker', props);
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
          MasterRegion: this.input.masterRegion,
          FunctionVersion: this.input.functionVersion,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListFunctions.Functions', props);
    return resource.getResponseField('Functions') as unknown as shapes.LambdaFunctionConfiguration[];
  }

}

export class LambdaListFunctionsByCodeSigningConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaListFunctionsByCodeSigningConfigRequest) {
    super(scope, id);
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
          CodeSigningConfigArn: this.input.codeSigningConfigArn,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListFunctionsByCodeSigningConfig.NextMarker', props);
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
          CodeSigningConfigArn: this.input.codeSigningConfigArn,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListFunctionsByCodeSigningConfig.FunctionArns', props);
    return resource.getResponseField('FunctionArns') as unknown as string[];
  }

}

export class LambdaListLayerVersions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaListLayerVersionsRequest) {
    super(scope, id);
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
          CompatibleRuntime: this.input.compatibleRuntime,
          LayerName: this.input.layerName,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListLayerVersions.NextMarker', props);
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
          CompatibleRuntime: this.input.compatibleRuntime,
          LayerName: this.input.layerName,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListLayerVersions.LayerVersions', props);
    return resource.getResponseField('LayerVersions') as unknown as shapes.LambdaLayerVersionsListItem[];
  }

}

export class LambdaListLayers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaListLayersRequest) {
    super(scope, id);
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
          CompatibleRuntime: this.input.compatibleRuntime,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListLayers.NextMarker', props);
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
          CompatibleRuntime: this.input.compatibleRuntime,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListLayers.Layers', props);
    return resource.getResponseField('Layers') as unknown as shapes.LambdaLayersListItem[];
  }

}

export class LambdaListProvisionedConcurrencyConfigs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaListProvisionedConcurrencyConfigsRequest) {
    super(scope, id);
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
          FunctionName: this.input.functionName,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListProvisionedConcurrencyConfigs.ProvisionedConcurrencyConfigs', props);
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
          FunctionName: this.input.functionName,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListProvisionedConcurrencyConfigs.NextMarker', props);
    return resource.getResponseField('NextMarker') as unknown as string;
  }

}

export class LambdaListTags extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaListTagsRequest) {
    super(scope, id);
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
          Resource: this.input.resource,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTags.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class LambdaListVersionsByFunction extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaListVersionsByFunctionRequest) {
    super(scope, id);
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
          FunctionName: this.input.functionName,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListVersionsByFunction.NextMarker', props);
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
          FunctionName: this.input.functionName,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListVersionsByFunction.Versions', props);
    return resource.getResponseField('Versions') as unknown as shapes.LambdaFunctionConfiguration[];
  }

}

export class LambdaPublishLayerVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaPublishLayerVersionRequest) {
    super(scope, id);
  }

  public get content(): LambdaPublishLayerVersionContent {
    return new LambdaPublishLayerVersionContent(this, 'Content', this.__resources, this.input);
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
          LayerName: this.input.layerName,
          Description: this.input.description,
          Content: {
            S3Bucket: this.input.content.s3Bucket,
            S3Key: this.input.content.s3Key,
            S3ObjectVersion: this.input.content.s3ObjectVersion,
            ZipFile: {
            },
          },
          CompatibleRuntimes: this.input.compatibleRuntimes,
          LicenseInfo: this.input.licenseInfo,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PublishLayerVersion.LayerArn', props);
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
          LayerName: this.input.layerName,
          Description: this.input.description,
          Content: {
            S3Bucket: this.input.content.s3Bucket,
            S3Key: this.input.content.s3Key,
            S3ObjectVersion: this.input.content.s3ObjectVersion,
            ZipFile: {
            },
          },
          CompatibleRuntimes: this.input.compatibleRuntimes,
          LicenseInfo: this.input.licenseInfo,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PublishLayerVersion.LayerVersionArn', props);
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
          LayerName: this.input.layerName,
          Description: this.input.description,
          Content: {
            S3Bucket: this.input.content.s3Bucket,
            S3Key: this.input.content.s3Key,
            S3ObjectVersion: this.input.content.s3ObjectVersion,
            ZipFile: {
            },
          },
          CompatibleRuntimes: this.input.compatibleRuntimes,
          LicenseInfo: this.input.licenseInfo,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PublishLayerVersion.Description', props);
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
          LayerName: this.input.layerName,
          Description: this.input.description,
          Content: {
            S3Bucket: this.input.content.s3Bucket,
            S3Key: this.input.content.s3Key,
            S3ObjectVersion: this.input.content.s3ObjectVersion,
            ZipFile: {
            },
          },
          CompatibleRuntimes: this.input.compatibleRuntimes,
          LicenseInfo: this.input.licenseInfo,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PublishLayerVersion.CreatedDate', props);
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
          LayerName: this.input.layerName,
          Description: this.input.description,
          Content: {
            S3Bucket: this.input.content.s3Bucket,
            S3Key: this.input.content.s3Key,
            S3ObjectVersion: this.input.content.s3ObjectVersion,
            ZipFile: {
            },
          },
          CompatibleRuntimes: this.input.compatibleRuntimes,
          LicenseInfo: this.input.licenseInfo,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PublishLayerVersion.Version', props);
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
          LayerName: this.input.layerName,
          Description: this.input.description,
          Content: {
            S3Bucket: this.input.content.s3Bucket,
            S3Key: this.input.content.s3Key,
            S3ObjectVersion: this.input.content.s3ObjectVersion,
            ZipFile: {
            },
          },
          CompatibleRuntimes: this.input.compatibleRuntimes,
          LicenseInfo: this.input.licenseInfo,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PublishLayerVersion.CompatibleRuntimes', props);
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
          LayerName: this.input.layerName,
          Description: this.input.description,
          Content: {
            S3Bucket: this.input.content.s3Bucket,
            S3Key: this.input.content.s3Key,
            S3ObjectVersion: this.input.content.s3ObjectVersion,
            ZipFile: {
            },
          },
          CompatibleRuntimes: this.input.compatibleRuntimes,
          LicenseInfo: this.input.licenseInfo,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PublishLayerVersion.LicenseInfo', props);
    return resource.getResponseField('LicenseInfo') as unknown as string;
  }

}

export class LambdaPublishLayerVersionContent extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaPublishLayerVersionRequest) {
    super(scope, id);
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
          LayerName: this.input.layerName,
          Description: this.input.description,
          Content: {
            S3Bucket: this.input.content.s3Bucket,
            S3Key: this.input.content.s3Key,
            S3ObjectVersion: this.input.content.s3ObjectVersion,
            ZipFile: {
            },
          },
          CompatibleRuntimes: this.input.compatibleRuntimes,
          LicenseInfo: this.input.licenseInfo,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PublishLayerVersion.Content.Location', props);
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
          LayerName: this.input.layerName,
          Description: this.input.description,
          Content: {
            S3Bucket: this.input.content.s3Bucket,
            S3Key: this.input.content.s3Key,
            S3ObjectVersion: this.input.content.s3ObjectVersion,
            ZipFile: {
            },
          },
          CompatibleRuntimes: this.input.compatibleRuntimes,
          LicenseInfo: this.input.licenseInfo,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PublishLayerVersion.Content.CodeSha256', props);
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
          LayerName: this.input.layerName,
          Description: this.input.description,
          Content: {
            S3Bucket: this.input.content.s3Bucket,
            S3Key: this.input.content.s3Key,
            S3ObjectVersion: this.input.content.s3ObjectVersion,
            ZipFile: {
            },
          },
          CompatibleRuntimes: this.input.compatibleRuntimes,
          LicenseInfo: this.input.licenseInfo,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PublishLayerVersion.Content.CodeSize', props);
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
          LayerName: this.input.layerName,
          Description: this.input.description,
          Content: {
            S3Bucket: this.input.content.s3Bucket,
            S3Key: this.input.content.s3Key,
            S3ObjectVersion: this.input.content.s3ObjectVersion,
            ZipFile: {
            },
          },
          CompatibleRuntimes: this.input.compatibleRuntimes,
          LicenseInfo: this.input.licenseInfo,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PublishLayerVersion.Content.SigningProfileVersionArn', props);
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
          LayerName: this.input.layerName,
          Description: this.input.description,
          Content: {
            S3Bucket: this.input.content.s3Bucket,
            S3Key: this.input.content.s3Key,
            S3ObjectVersion: this.input.content.s3ObjectVersion,
            ZipFile: {
            },
          },
          CompatibleRuntimes: this.input.compatibleRuntimes,
          LicenseInfo: this.input.licenseInfo,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PublishLayerVersion.Content.SigningJobArn', props);
    return resource.getResponseField('Content.SigningJobArn') as unknown as string;
  }

}

export class LambdaPublishVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaPublishVersionRequest) {
    super(scope, id);
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
          FunctionName: this.input.functionName,
          CodeSha256: this.input.codeSha256,
          Description: this.input.description,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PublishVersion.FunctionName', props);
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
          FunctionName: this.input.functionName,
          CodeSha256: this.input.codeSha256,
          Description: this.input.description,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PublishVersion.FunctionArn', props);
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
          FunctionName: this.input.functionName,
          CodeSha256: this.input.codeSha256,
          Description: this.input.description,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PublishVersion.Runtime', props);
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
          FunctionName: this.input.functionName,
          CodeSha256: this.input.codeSha256,
          Description: this.input.description,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PublishVersion.Role', props);
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
          FunctionName: this.input.functionName,
          CodeSha256: this.input.codeSha256,
          Description: this.input.description,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PublishVersion.Handler', props);
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
          FunctionName: this.input.functionName,
          CodeSha256: this.input.codeSha256,
          Description: this.input.description,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PublishVersion.CodeSize', props);
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
          FunctionName: this.input.functionName,
          CodeSha256: this.input.codeSha256,
          Description: this.input.description,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PublishVersion.Description', props);
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
          FunctionName: this.input.functionName,
          CodeSha256: this.input.codeSha256,
          Description: this.input.description,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PublishVersion.Timeout', props);
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
          FunctionName: this.input.functionName,
          CodeSha256: this.input.codeSha256,
          Description: this.input.description,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PublishVersion.MemorySize', props);
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
          FunctionName: this.input.functionName,
          CodeSha256: this.input.codeSha256,
          Description: this.input.description,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PublishVersion.LastModified', props);
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
          FunctionName: this.input.functionName,
          CodeSha256: this.input.codeSha256,
          Description: this.input.description,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PublishVersion.CodeSha256', props);
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
          FunctionName: this.input.functionName,
          CodeSha256: this.input.codeSha256,
          Description: this.input.description,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PublishVersion.Version', props);
    return resource.getResponseField('Version') as unknown as string;
  }

  public get vpcConfig(): LambdaPublishVersionVpcConfig {
    return new LambdaPublishVersionVpcConfig(this, 'VpcConfig', this.__resources, this.input);
  }

  public get deadLetterConfig(): LambdaPublishVersionDeadLetterConfig {
    return new LambdaPublishVersionDeadLetterConfig(this, 'DeadLetterConfig', this.__resources, this.input);
  }

  public get environment(): LambdaPublishVersionEnvironment {
    return new LambdaPublishVersionEnvironment(this, 'Environment', this.__resources, this.input);
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
          FunctionName: this.input.functionName,
          CodeSha256: this.input.codeSha256,
          Description: this.input.description,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PublishVersion.KMSKeyArn', props);
    return resource.getResponseField('KMSKeyArn') as unknown as string;
  }

  public get tracingConfig(): LambdaPublishVersionTracingConfig {
    return new LambdaPublishVersionTracingConfig(this, 'TracingConfig', this.__resources, this.input);
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
          FunctionName: this.input.functionName,
          CodeSha256: this.input.codeSha256,
          Description: this.input.description,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PublishVersion.MasterArn', props);
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
          FunctionName: this.input.functionName,
          CodeSha256: this.input.codeSha256,
          Description: this.input.description,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PublishVersion.RevisionId', props);
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
          FunctionName: this.input.functionName,
          CodeSha256: this.input.codeSha256,
          Description: this.input.description,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PublishVersion.Layers', props);
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
          FunctionName: this.input.functionName,
          CodeSha256: this.input.codeSha256,
          Description: this.input.description,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PublishVersion.State', props);
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
          FunctionName: this.input.functionName,
          CodeSha256: this.input.codeSha256,
          Description: this.input.description,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PublishVersion.StateReason', props);
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
          FunctionName: this.input.functionName,
          CodeSha256: this.input.codeSha256,
          Description: this.input.description,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PublishVersion.StateReasonCode', props);
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
          FunctionName: this.input.functionName,
          CodeSha256: this.input.codeSha256,
          Description: this.input.description,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PublishVersion.LastUpdateStatus', props);
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
          FunctionName: this.input.functionName,
          CodeSha256: this.input.codeSha256,
          Description: this.input.description,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PublishVersion.LastUpdateStatusReason', props);
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
          FunctionName: this.input.functionName,
          CodeSha256: this.input.codeSha256,
          Description: this.input.description,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PublishVersion.LastUpdateStatusReasonCode', props);
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
          FunctionName: this.input.functionName,
          CodeSha256: this.input.codeSha256,
          Description: this.input.description,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PublishVersion.FileSystemConfigs', props);
    return resource.getResponseField('FileSystemConfigs') as unknown as shapes.LambdaFileSystemConfig[];
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
          FunctionName: this.input.functionName,
          CodeSha256: this.input.codeSha256,
          Description: this.input.description,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PublishVersion.SigningProfileVersionArn', props);
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
          FunctionName: this.input.functionName,
          CodeSha256: this.input.codeSha256,
          Description: this.input.description,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PublishVersion.SigningJobArn', props);
    return resource.getResponseField('SigningJobArn') as unknown as string;
  }

}

export class LambdaPublishVersionVpcConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaPublishVersionRequest) {
    super(scope, id);
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
          FunctionName: this.input.functionName,
          CodeSha256: this.input.codeSha256,
          Description: this.input.description,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PublishVersion.VpcConfig.SubnetIds', props);
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
          FunctionName: this.input.functionName,
          CodeSha256: this.input.codeSha256,
          Description: this.input.description,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PublishVersion.VpcConfig.SecurityGroupIds', props);
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
          FunctionName: this.input.functionName,
          CodeSha256: this.input.codeSha256,
          Description: this.input.description,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PublishVersion.VpcConfig.VpcId', props);
    return resource.getResponseField('VpcConfig.VpcId') as unknown as string;
  }

}

export class LambdaPublishVersionDeadLetterConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaPublishVersionRequest) {
    super(scope, id);
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
          FunctionName: this.input.functionName,
          CodeSha256: this.input.codeSha256,
          Description: this.input.description,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PublishVersion.DeadLetterConfig.TargetArn', props);
    return resource.getResponseField('DeadLetterConfig.TargetArn') as unknown as string;
  }

}

export class LambdaPublishVersionEnvironment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaPublishVersionRequest) {
    super(scope, id);
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
          FunctionName: this.input.functionName,
          CodeSha256: this.input.codeSha256,
          Description: this.input.description,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PublishVersion.Environment.Variables', props);
    return resource.getResponseField('Environment.Variables') as unknown as Record<string, string>;
  }

  public get error(): LambdaPublishVersionEnvironmentError {
    return new LambdaPublishVersionEnvironmentError(this, 'Error', this.__resources, this.input);
  }

}

export class LambdaPublishVersionEnvironmentError extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaPublishVersionRequest) {
    super(scope, id);
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
          FunctionName: this.input.functionName,
          CodeSha256: this.input.codeSha256,
          Description: this.input.description,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PublishVersion.Environment.Error.ErrorCode', props);
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
          FunctionName: this.input.functionName,
          CodeSha256: this.input.codeSha256,
          Description: this.input.description,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PublishVersion.Environment.Error.Message', props);
    return resource.getResponseField('Environment.Error.Message') as unknown as string;
  }

}

export class LambdaPublishVersionTracingConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaPublishVersionRequest) {
    super(scope, id);
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
          FunctionName: this.input.functionName,
          CodeSha256: this.input.codeSha256,
          Description: this.input.description,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PublishVersion.TracingConfig.Mode', props);
    return resource.getResponseField('TracingConfig.Mode') as unknown as string;
  }

}

export class LambdaPutFunctionCodeSigningConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaPutFunctionCodeSigningConfigRequest) {
    super(scope, id);
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
          CodeSigningConfigArn: this.input.codeSigningConfigArn,
          FunctionName: this.input.functionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutFunctionCodeSigningConfig.CodeSigningConfigArn', props);
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
          CodeSigningConfigArn: this.input.codeSigningConfigArn,
          FunctionName: this.input.functionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutFunctionCodeSigningConfig.FunctionName', props);
    return resource.getResponseField('FunctionName') as unknown as string;
  }

}

export class LambdaPutFunctionConcurrency extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaPutFunctionConcurrencyRequest) {
    super(scope, id);
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
          FunctionName: this.input.functionName,
          ReservedConcurrentExecutions: this.input.reservedConcurrentExecutions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutFunctionConcurrency.ReservedConcurrentExecutions', props);
    return resource.getResponseField('ReservedConcurrentExecutions') as unknown as number;
  }

}

export class LambdaPutFunctionEventInvokeConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaPutFunctionEventInvokeConfigRequest) {
    super(scope, id);
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
          MaximumRetryAttempts: this.input.maximumRetryAttempts,
          MaximumEventAgeInSeconds: this.input.maximumEventAgeInSeconds,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.input.destinationConfig?.onFailure?.destination,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutFunctionEventInvokeConfig.LastModified', props);
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
          MaximumRetryAttempts: this.input.maximumRetryAttempts,
          MaximumEventAgeInSeconds: this.input.maximumEventAgeInSeconds,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.input.destinationConfig?.onFailure?.destination,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutFunctionEventInvokeConfig.FunctionArn', props);
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
          MaximumRetryAttempts: this.input.maximumRetryAttempts,
          MaximumEventAgeInSeconds: this.input.maximumEventAgeInSeconds,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.input.destinationConfig?.onFailure?.destination,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutFunctionEventInvokeConfig.MaximumRetryAttempts', props);
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
          MaximumRetryAttempts: this.input.maximumRetryAttempts,
          MaximumEventAgeInSeconds: this.input.maximumEventAgeInSeconds,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.input.destinationConfig?.onFailure?.destination,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutFunctionEventInvokeConfig.MaximumEventAgeInSeconds', props);
    return resource.getResponseField('MaximumEventAgeInSeconds') as unknown as number;
  }

  public get destinationConfig(): LambdaPutFunctionEventInvokeConfigDestinationConfig {
    return new LambdaPutFunctionEventInvokeConfigDestinationConfig(this, 'DestinationConfig', this.__resources, this.input);
  }

}

export class LambdaPutFunctionEventInvokeConfigDestinationConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaPutFunctionEventInvokeConfigRequest) {
    super(scope, id);
  }

  public get onSuccess(): LambdaPutFunctionEventInvokeConfigDestinationConfigOnSuccess {
    return new LambdaPutFunctionEventInvokeConfigDestinationConfigOnSuccess(this, 'OnSuccess', this.__resources, this.input);
  }

  public get onFailure(): LambdaPutFunctionEventInvokeConfigDestinationConfigOnFailure {
    return new LambdaPutFunctionEventInvokeConfigDestinationConfigOnFailure(this, 'OnFailure', this.__resources, this.input);
  }

}

export class LambdaPutFunctionEventInvokeConfigDestinationConfigOnSuccess extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaPutFunctionEventInvokeConfigRequest) {
    super(scope, id);
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
          MaximumRetryAttempts: this.input.maximumRetryAttempts,
          MaximumEventAgeInSeconds: this.input.maximumEventAgeInSeconds,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.input.destinationConfig?.onFailure?.destination,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutFunctionEventInvokeConfig.DestinationConfig.OnSuccess.Destination', props);
    return resource.getResponseField('DestinationConfig.OnSuccess.Destination') as unknown as string;
  }

}

export class LambdaPutFunctionEventInvokeConfigDestinationConfigOnFailure extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaPutFunctionEventInvokeConfigRequest) {
    super(scope, id);
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
          MaximumRetryAttempts: this.input.maximumRetryAttempts,
          MaximumEventAgeInSeconds: this.input.maximumEventAgeInSeconds,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.input.destinationConfig?.onFailure?.destination,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutFunctionEventInvokeConfig.DestinationConfig.OnFailure.Destination', props);
    return resource.getResponseField('DestinationConfig.OnFailure.Destination') as unknown as string;
  }

}

export class LambdaPutProvisionedConcurrencyConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaPutProvisionedConcurrencyConfigRequest) {
    super(scope, id);
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
          ProvisionedConcurrentExecutions: this.input.provisionedConcurrentExecutions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutProvisionedConcurrencyConfig.RequestedProvisionedConcurrentExecutions', props);
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
          ProvisionedConcurrentExecutions: this.input.provisionedConcurrentExecutions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutProvisionedConcurrencyConfig.AvailableProvisionedConcurrentExecutions', props);
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
          ProvisionedConcurrentExecutions: this.input.provisionedConcurrentExecutions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutProvisionedConcurrencyConfig.AllocatedProvisionedConcurrentExecutions', props);
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
          ProvisionedConcurrentExecutions: this.input.provisionedConcurrentExecutions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutProvisionedConcurrencyConfig.Status', props);
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
          ProvisionedConcurrentExecutions: this.input.provisionedConcurrentExecutions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutProvisionedConcurrencyConfig.StatusReason', props);
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
          ProvisionedConcurrentExecutions: this.input.provisionedConcurrentExecutions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutProvisionedConcurrencyConfig.LastModified', props);
    return resource.getResponseField('LastModified') as unknown as string;
  }

}

export class LambdaUpdateAlias extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaUpdateAliasRequest) {
    super(scope, id);
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
          FunctionName: this.input.functionName,
          Name: this.input.name,
          FunctionVersion: this.input.functionVersion,
          Description: this.input.description,
          RoutingConfig: {
            AdditionalVersionWeights: this.input.routingConfig?.additionalVersionWeights,
          },
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAlias.AliasArn', props);
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
          FunctionName: this.input.functionName,
          Name: this.input.name,
          FunctionVersion: this.input.functionVersion,
          Description: this.input.description,
          RoutingConfig: {
            AdditionalVersionWeights: this.input.routingConfig?.additionalVersionWeights,
          },
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAlias.Name', props);
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
          FunctionName: this.input.functionName,
          Name: this.input.name,
          FunctionVersion: this.input.functionVersion,
          Description: this.input.description,
          RoutingConfig: {
            AdditionalVersionWeights: this.input.routingConfig?.additionalVersionWeights,
          },
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAlias.FunctionVersion', props);
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
          FunctionName: this.input.functionName,
          Name: this.input.name,
          FunctionVersion: this.input.functionVersion,
          Description: this.input.description,
          RoutingConfig: {
            AdditionalVersionWeights: this.input.routingConfig?.additionalVersionWeights,
          },
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAlias.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get routingConfig(): LambdaUpdateAliasRoutingConfig {
    return new LambdaUpdateAliasRoutingConfig(this, 'RoutingConfig', this.__resources, this.input);
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
          FunctionName: this.input.functionName,
          Name: this.input.name,
          FunctionVersion: this.input.functionVersion,
          Description: this.input.description,
          RoutingConfig: {
            AdditionalVersionWeights: this.input.routingConfig?.additionalVersionWeights,
          },
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAlias.RevisionId', props);
    return resource.getResponseField('RevisionId') as unknown as string;
  }

}

export class LambdaUpdateAliasRoutingConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaUpdateAliasRequest) {
    super(scope, id);
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
          FunctionName: this.input.functionName,
          Name: this.input.name,
          FunctionVersion: this.input.functionVersion,
          Description: this.input.description,
          RoutingConfig: {
            AdditionalVersionWeights: this.input.routingConfig?.additionalVersionWeights,
          },
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAlias.RoutingConfig.AdditionalVersionWeights', props);
    return resource.getResponseField('RoutingConfig.AdditionalVersionWeights') as unknown as Record<string, number>;
  }

}

export class LambdaUpdateCodeSigningConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaUpdateCodeSigningConfigRequest) {
    super(scope, id);
  }

  public get codeSigningConfig(): LambdaUpdateCodeSigningConfigCodeSigningConfig {
    return new LambdaUpdateCodeSigningConfigCodeSigningConfig(this, 'CodeSigningConfig', this.__resources, this.input);
  }

}

export class LambdaUpdateCodeSigningConfigCodeSigningConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaUpdateCodeSigningConfigRequest) {
    super(scope, id);
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
          CodeSigningConfigArn: this.input.codeSigningConfigArn,
          Description: this.input.description,
          AllowedPublishers: {
            SigningProfileVersionArns: this.input.allowedPublishers?.signingProfileVersionArns,
          },
          CodeSigningPolicies: {
            UntrustedArtifactOnDeployment: this.input.codeSigningPolicies?.untrustedArtifactOnDeployment,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateCodeSigningConfig.CodeSigningConfig.CodeSigningConfigId', props);
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
          CodeSigningConfigArn: this.input.codeSigningConfigArn,
          Description: this.input.description,
          AllowedPublishers: {
            SigningProfileVersionArns: this.input.allowedPublishers?.signingProfileVersionArns,
          },
          CodeSigningPolicies: {
            UntrustedArtifactOnDeployment: this.input.codeSigningPolicies?.untrustedArtifactOnDeployment,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateCodeSigningConfig.CodeSigningConfig.CodeSigningConfigArn', props);
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
          CodeSigningConfigArn: this.input.codeSigningConfigArn,
          Description: this.input.description,
          AllowedPublishers: {
            SigningProfileVersionArns: this.input.allowedPublishers?.signingProfileVersionArns,
          },
          CodeSigningPolicies: {
            UntrustedArtifactOnDeployment: this.input.codeSigningPolicies?.untrustedArtifactOnDeployment,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateCodeSigningConfig.CodeSigningConfig.Description', props);
    return resource.getResponseField('CodeSigningConfig.Description') as unknown as string;
  }

  public get allowedPublishers(): LambdaUpdateCodeSigningConfigCodeSigningConfigAllowedPublishers {
    return new LambdaUpdateCodeSigningConfigCodeSigningConfigAllowedPublishers(this, 'AllowedPublishers', this.__resources, this.input);
  }

  public get codeSigningPolicies(): LambdaUpdateCodeSigningConfigCodeSigningConfigCodeSigningPolicies {
    return new LambdaUpdateCodeSigningConfigCodeSigningConfigCodeSigningPolicies(this, 'CodeSigningPolicies', this.__resources, this.input);
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
          CodeSigningConfigArn: this.input.codeSigningConfigArn,
          Description: this.input.description,
          AllowedPublishers: {
            SigningProfileVersionArns: this.input.allowedPublishers?.signingProfileVersionArns,
          },
          CodeSigningPolicies: {
            UntrustedArtifactOnDeployment: this.input.codeSigningPolicies?.untrustedArtifactOnDeployment,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateCodeSigningConfig.CodeSigningConfig.LastModified', props);
    return resource.getResponseField('CodeSigningConfig.LastModified') as unknown as string;
  }

}

export class LambdaUpdateCodeSigningConfigCodeSigningConfigAllowedPublishers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaUpdateCodeSigningConfigRequest) {
    super(scope, id);
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
          CodeSigningConfigArn: this.input.codeSigningConfigArn,
          Description: this.input.description,
          AllowedPublishers: {
            SigningProfileVersionArns: this.input.allowedPublishers?.signingProfileVersionArns,
          },
          CodeSigningPolicies: {
            UntrustedArtifactOnDeployment: this.input.codeSigningPolicies?.untrustedArtifactOnDeployment,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateCodeSigningConfig.CodeSigningConfig.AllowedPublishers.SigningProfileVersionArns', props);
    return resource.getResponseField('CodeSigningConfig.AllowedPublishers.SigningProfileVersionArns') as unknown as string[];
  }

}

export class LambdaUpdateCodeSigningConfigCodeSigningConfigCodeSigningPolicies extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaUpdateCodeSigningConfigRequest) {
    super(scope, id);
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
          CodeSigningConfigArn: this.input.codeSigningConfigArn,
          Description: this.input.description,
          AllowedPublishers: {
            SigningProfileVersionArns: this.input.allowedPublishers?.signingProfileVersionArns,
          },
          CodeSigningPolicies: {
            UntrustedArtifactOnDeployment: this.input.codeSigningPolicies?.untrustedArtifactOnDeployment,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateCodeSigningConfig.CodeSigningConfig.CodeSigningPolicies.UntrustedArtifactOnDeployment', props);
    return resource.getResponseField('CodeSigningConfig.CodeSigningPolicies.UntrustedArtifactOnDeployment') as unknown as string;
  }

}

export class LambdaUpdateEventSourceMapping extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaUpdateEventSourceMappingRequest) {
    super(scope, id);
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
          UUID: this.input.uuid,
          FunctionName: this.input.functionName,
          Enabled: this.input.enabled,
          BatchSize: this.input.batchSize,
          MaximumBatchingWindowInSeconds: this.input.maximumBatchingWindowInSeconds,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.input.maximumRetryAttempts,
          ParallelizationFactor: this.input.parallelizationFactor,
          SourceAccessConfigurations: this.input.sourceAccessConfigurations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEventSourceMapping.UUID', props);
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
          UUID: this.input.uuid,
          FunctionName: this.input.functionName,
          Enabled: this.input.enabled,
          BatchSize: this.input.batchSize,
          MaximumBatchingWindowInSeconds: this.input.maximumBatchingWindowInSeconds,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.input.maximumRetryAttempts,
          ParallelizationFactor: this.input.parallelizationFactor,
          SourceAccessConfigurations: this.input.sourceAccessConfigurations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEventSourceMapping.StartingPosition', props);
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
          UUID: this.input.uuid,
          FunctionName: this.input.functionName,
          Enabled: this.input.enabled,
          BatchSize: this.input.batchSize,
          MaximumBatchingWindowInSeconds: this.input.maximumBatchingWindowInSeconds,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.input.maximumRetryAttempts,
          ParallelizationFactor: this.input.parallelizationFactor,
          SourceAccessConfigurations: this.input.sourceAccessConfigurations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEventSourceMapping.StartingPositionTimestamp', props);
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
          UUID: this.input.uuid,
          FunctionName: this.input.functionName,
          Enabled: this.input.enabled,
          BatchSize: this.input.batchSize,
          MaximumBatchingWindowInSeconds: this.input.maximumBatchingWindowInSeconds,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.input.maximumRetryAttempts,
          ParallelizationFactor: this.input.parallelizationFactor,
          SourceAccessConfigurations: this.input.sourceAccessConfigurations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEventSourceMapping.BatchSize', props);
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
          UUID: this.input.uuid,
          FunctionName: this.input.functionName,
          Enabled: this.input.enabled,
          BatchSize: this.input.batchSize,
          MaximumBatchingWindowInSeconds: this.input.maximumBatchingWindowInSeconds,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.input.maximumRetryAttempts,
          ParallelizationFactor: this.input.parallelizationFactor,
          SourceAccessConfigurations: this.input.sourceAccessConfigurations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEventSourceMapping.MaximumBatchingWindowInSeconds', props);
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
          UUID: this.input.uuid,
          FunctionName: this.input.functionName,
          Enabled: this.input.enabled,
          BatchSize: this.input.batchSize,
          MaximumBatchingWindowInSeconds: this.input.maximumBatchingWindowInSeconds,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.input.maximumRetryAttempts,
          ParallelizationFactor: this.input.parallelizationFactor,
          SourceAccessConfigurations: this.input.sourceAccessConfigurations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEventSourceMapping.ParallelizationFactor', props);
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
          UUID: this.input.uuid,
          FunctionName: this.input.functionName,
          Enabled: this.input.enabled,
          BatchSize: this.input.batchSize,
          MaximumBatchingWindowInSeconds: this.input.maximumBatchingWindowInSeconds,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.input.maximumRetryAttempts,
          ParallelizationFactor: this.input.parallelizationFactor,
          SourceAccessConfigurations: this.input.sourceAccessConfigurations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEventSourceMapping.EventSourceArn', props);
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
          UUID: this.input.uuid,
          FunctionName: this.input.functionName,
          Enabled: this.input.enabled,
          BatchSize: this.input.batchSize,
          MaximumBatchingWindowInSeconds: this.input.maximumBatchingWindowInSeconds,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.input.maximumRetryAttempts,
          ParallelizationFactor: this.input.parallelizationFactor,
          SourceAccessConfigurations: this.input.sourceAccessConfigurations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEventSourceMapping.FunctionArn', props);
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
          UUID: this.input.uuid,
          FunctionName: this.input.functionName,
          Enabled: this.input.enabled,
          BatchSize: this.input.batchSize,
          MaximumBatchingWindowInSeconds: this.input.maximumBatchingWindowInSeconds,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.input.maximumRetryAttempts,
          ParallelizationFactor: this.input.parallelizationFactor,
          SourceAccessConfigurations: this.input.sourceAccessConfigurations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEventSourceMapping.LastModified', props);
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
          UUID: this.input.uuid,
          FunctionName: this.input.functionName,
          Enabled: this.input.enabled,
          BatchSize: this.input.batchSize,
          MaximumBatchingWindowInSeconds: this.input.maximumBatchingWindowInSeconds,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.input.maximumRetryAttempts,
          ParallelizationFactor: this.input.parallelizationFactor,
          SourceAccessConfigurations: this.input.sourceAccessConfigurations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEventSourceMapping.LastProcessingResult', props);
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
          UUID: this.input.uuid,
          FunctionName: this.input.functionName,
          Enabled: this.input.enabled,
          BatchSize: this.input.batchSize,
          MaximumBatchingWindowInSeconds: this.input.maximumBatchingWindowInSeconds,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.input.maximumRetryAttempts,
          ParallelizationFactor: this.input.parallelizationFactor,
          SourceAccessConfigurations: this.input.sourceAccessConfigurations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEventSourceMapping.State', props);
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
          UUID: this.input.uuid,
          FunctionName: this.input.functionName,
          Enabled: this.input.enabled,
          BatchSize: this.input.batchSize,
          MaximumBatchingWindowInSeconds: this.input.maximumBatchingWindowInSeconds,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.input.maximumRetryAttempts,
          ParallelizationFactor: this.input.parallelizationFactor,
          SourceAccessConfigurations: this.input.sourceAccessConfigurations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEventSourceMapping.StateTransitionReason', props);
    return resource.getResponseField('StateTransitionReason') as unknown as string;
  }

  public get destinationConfig(): LambdaUpdateEventSourceMappingDestinationConfig {
    return new LambdaUpdateEventSourceMappingDestinationConfig(this, 'DestinationConfig', this.__resources, this.input);
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
          UUID: this.input.uuid,
          FunctionName: this.input.functionName,
          Enabled: this.input.enabled,
          BatchSize: this.input.batchSize,
          MaximumBatchingWindowInSeconds: this.input.maximumBatchingWindowInSeconds,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.input.maximumRetryAttempts,
          ParallelizationFactor: this.input.parallelizationFactor,
          SourceAccessConfigurations: this.input.sourceAccessConfigurations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEventSourceMapping.Topics', props);
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
          UUID: this.input.uuid,
          FunctionName: this.input.functionName,
          Enabled: this.input.enabled,
          BatchSize: this.input.batchSize,
          MaximumBatchingWindowInSeconds: this.input.maximumBatchingWindowInSeconds,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.input.maximumRetryAttempts,
          ParallelizationFactor: this.input.parallelizationFactor,
          SourceAccessConfigurations: this.input.sourceAccessConfigurations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEventSourceMapping.Queues', props);
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
          UUID: this.input.uuid,
          FunctionName: this.input.functionName,
          Enabled: this.input.enabled,
          BatchSize: this.input.batchSize,
          MaximumBatchingWindowInSeconds: this.input.maximumBatchingWindowInSeconds,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.input.maximumRetryAttempts,
          ParallelizationFactor: this.input.parallelizationFactor,
          SourceAccessConfigurations: this.input.sourceAccessConfigurations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEventSourceMapping.SourceAccessConfigurations', props);
    return resource.getResponseField('SourceAccessConfigurations') as unknown as shapes.LambdaSourceAccessConfiguration[];
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
          UUID: this.input.uuid,
          FunctionName: this.input.functionName,
          Enabled: this.input.enabled,
          BatchSize: this.input.batchSize,
          MaximumBatchingWindowInSeconds: this.input.maximumBatchingWindowInSeconds,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.input.maximumRetryAttempts,
          ParallelizationFactor: this.input.parallelizationFactor,
          SourceAccessConfigurations: this.input.sourceAccessConfigurations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEventSourceMapping.MaximumRecordAgeInSeconds', props);
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
          UUID: this.input.uuid,
          FunctionName: this.input.functionName,
          Enabled: this.input.enabled,
          BatchSize: this.input.batchSize,
          MaximumBatchingWindowInSeconds: this.input.maximumBatchingWindowInSeconds,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.input.maximumRetryAttempts,
          ParallelizationFactor: this.input.parallelizationFactor,
          SourceAccessConfigurations: this.input.sourceAccessConfigurations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEventSourceMapping.BisectBatchOnFunctionError', props);
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
          UUID: this.input.uuid,
          FunctionName: this.input.functionName,
          Enabled: this.input.enabled,
          BatchSize: this.input.batchSize,
          MaximumBatchingWindowInSeconds: this.input.maximumBatchingWindowInSeconds,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.input.maximumRetryAttempts,
          ParallelizationFactor: this.input.parallelizationFactor,
          SourceAccessConfigurations: this.input.sourceAccessConfigurations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEventSourceMapping.MaximumRetryAttempts', props);
    return resource.getResponseField('MaximumRetryAttempts') as unknown as number;
  }

}

export class LambdaUpdateEventSourceMappingDestinationConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaUpdateEventSourceMappingRequest) {
    super(scope, id);
  }

  public get onSuccess(): LambdaUpdateEventSourceMappingDestinationConfigOnSuccess {
    return new LambdaUpdateEventSourceMappingDestinationConfigOnSuccess(this, 'OnSuccess', this.__resources, this.input);
  }

  public get onFailure(): LambdaUpdateEventSourceMappingDestinationConfigOnFailure {
    return new LambdaUpdateEventSourceMappingDestinationConfigOnFailure(this, 'OnFailure', this.__resources, this.input);
  }

}

export class LambdaUpdateEventSourceMappingDestinationConfigOnSuccess extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaUpdateEventSourceMappingRequest) {
    super(scope, id);
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
          UUID: this.input.uuid,
          FunctionName: this.input.functionName,
          Enabled: this.input.enabled,
          BatchSize: this.input.batchSize,
          MaximumBatchingWindowInSeconds: this.input.maximumBatchingWindowInSeconds,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.input.maximumRetryAttempts,
          ParallelizationFactor: this.input.parallelizationFactor,
          SourceAccessConfigurations: this.input.sourceAccessConfigurations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEventSourceMapping.DestinationConfig.OnSuccess.Destination', props);
    return resource.getResponseField('DestinationConfig.OnSuccess.Destination') as unknown as string;
  }

}

export class LambdaUpdateEventSourceMappingDestinationConfigOnFailure extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaUpdateEventSourceMappingRequest) {
    super(scope, id);
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
          UUID: this.input.uuid,
          FunctionName: this.input.functionName,
          Enabled: this.input.enabled,
          BatchSize: this.input.batchSize,
          MaximumBatchingWindowInSeconds: this.input.maximumBatchingWindowInSeconds,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.input.destinationConfig?.onFailure?.destination,
            },
          },
          MaximumRecordAgeInSeconds: this.input.maximumRecordAgeInSeconds,
          BisectBatchOnFunctionError: this.input.bisectBatchOnFunctionError,
          MaximumRetryAttempts: this.input.maximumRetryAttempts,
          ParallelizationFactor: this.input.parallelizationFactor,
          SourceAccessConfigurations: this.input.sourceAccessConfigurations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEventSourceMapping.DestinationConfig.OnFailure.Destination', props);
    return resource.getResponseField('DestinationConfig.OnFailure.Destination') as unknown as string;
  }

}

export class LambdaUpdateFunctionCode extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaUpdateFunctionCodeRequest) {
    super(scope, id);
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
          FunctionName: this.input.functionName,
          ZipFile: {
          },
          S3Bucket: this.input.s3Bucket,
          S3Key: this.input.s3Key,
          S3ObjectVersion: this.input.s3ObjectVersion,
          Publish: this.input.publish,
          DryRun: this.input.dryRun,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionCode.FunctionName', props);
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
          FunctionName: this.input.functionName,
          ZipFile: {
          },
          S3Bucket: this.input.s3Bucket,
          S3Key: this.input.s3Key,
          S3ObjectVersion: this.input.s3ObjectVersion,
          Publish: this.input.publish,
          DryRun: this.input.dryRun,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionCode.FunctionArn', props);
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
          FunctionName: this.input.functionName,
          ZipFile: {
          },
          S3Bucket: this.input.s3Bucket,
          S3Key: this.input.s3Key,
          S3ObjectVersion: this.input.s3ObjectVersion,
          Publish: this.input.publish,
          DryRun: this.input.dryRun,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionCode.Runtime', props);
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
          FunctionName: this.input.functionName,
          ZipFile: {
          },
          S3Bucket: this.input.s3Bucket,
          S3Key: this.input.s3Key,
          S3ObjectVersion: this.input.s3ObjectVersion,
          Publish: this.input.publish,
          DryRun: this.input.dryRun,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionCode.Role', props);
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
          FunctionName: this.input.functionName,
          ZipFile: {
          },
          S3Bucket: this.input.s3Bucket,
          S3Key: this.input.s3Key,
          S3ObjectVersion: this.input.s3ObjectVersion,
          Publish: this.input.publish,
          DryRun: this.input.dryRun,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionCode.Handler', props);
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
          FunctionName: this.input.functionName,
          ZipFile: {
          },
          S3Bucket: this.input.s3Bucket,
          S3Key: this.input.s3Key,
          S3ObjectVersion: this.input.s3ObjectVersion,
          Publish: this.input.publish,
          DryRun: this.input.dryRun,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionCode.CodeSize', props);
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
          FunctionName: this.input.functionName,
          ZipFile: {
          },
          S3Bucket: this.input.s3Bucket,
          S3Key: this.input.s3Key,
          S3ObjectVersion: this.input.s3ObjectVersion,
          Publish: this.input.publish,
          DryRun: this.input.dryRun,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionCode.Description', props);
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
          FunctionName: this.input.functionName,
          ZipFile: {
          },
          S3Bucket: this.input.s3Bucket,
          S3Key: this.input.s3Key,
          S3ObjectVersion: this.input.s3ObjectVersion,
          Publish: this.input.publish,
          DryRun: this.input.dryRun,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionCode.Timeout', props);
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
          FunctionName: this.input.functionName,
          ZipFile: {
          },
          S3Bucket: this.input.s3Bucket,
          S3Key: this.input.s3Key,
          S3ObjectVersion: this.input.s3ObjectVersion,
          Publish: this.input.publish,
          DryRun: this.input.dryRun,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionCode.MemorySize', props);
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
          FunctionName: this.input.functionName,
          ZipFile: {
          },
          S3Bucket: this.input.s3Bucket,
          S3Key: this.input.s3Key,
          S3ObjectVersion: this.input.s3ObjectVersion,
          Publish: this.input.publish,
          DryRun: this.input.dryRun,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionCode.LastModified', props);
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
          FunctionName: this.input.functionName,
          ZipFile: {
          },
          S3Bucket: this.input.s3Bucket,
          S3Key: this.input.s3Key,
          S3ObjectVersion: this.input.s3ObjectVersion,
          Publish: this.input.publish,
          DryRun: this.input.dryRun,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionCode.CodeSha256', props);
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
          FunctionName: this.input.functionName,
          ZipFile: {
          },
          S3Bucket: this.input.s3Bucket,
          S3Key: this.input.s3Key,
          S3ObjectVersion: this.input.s3ObjectVersion,
          Publish: this.input.publish,
          DryRun: this.input.dryRun,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionCode.Version', props);
    return resource.getResponseField('Version') as unknown as string;
  }

  public get vpcConfig(): LambdaUpdateFunctionCodeVpcConfig {
    return new LambdaUpdateFunctionCodeVpcConfig(this, 'VpcConfig', this.__resources, this.input);
  }

  public get deadLetterConfig(): LambdaUpdateFunctionCodeDeadLetterConfig {
    return new LambdaUpdateFunctionCodeDeadLetterConfig(this, 'DeadLetterConfig', this.__resources, this.input);
  }

  public get environment(): LambdaUpdateFunctionCodeEnvironment {
    return new LambdaUpdateFunctionCodeEnvironment(this, 'Environment', this.__resources, this.input);
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
          FunctionName: this.input.functionName,
          ZipFile: {
          },
          S3Bucket: this.input.s3Bucket,
          S3Key: this.input.s3Key,
          S3ObjectVersion: this.input.s3ObjectVersion,
          Publish: this.input.publish,
          DryRun: this.input.dryRun,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionCode.KMSKeyArn', props);
    return resource.getResponseField('KMSKeyArn') as unknown as string;
  }

  public get tracingConfig(): LambdaUpdateFunctionCodeTracingConfig {
    return new LambdaUpdateFunctionCodeTracingConfig(this, 'TracingConfig', this.__resources, this.input);
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
          FunctionName: this.input.functionName,
          ZipFile: {
          },
          S3Bucket: this.input.s3Bucket,
          S3Key: this.input.s3Key,
          S3ObjectVersion: this.input.s3ObjectVersion,
          Publish: this.input.publish,
          DryRun: this.input.dryRun,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionCode.MasterArn', props);
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
          FunctionName: this.input.functionName,
          ZipFile: {
          },
          S3Bucket: this.input.s3Bucket,
          S3Key: this.input.s3Key,
          S3ObjectVersion: this.input.s3ObjectVersion,
          Publish: this.input.publish,
          DryRun: this.input.dryRun,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionCode.RevisionId', props);
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
          FunctionName: this.input.functionName,
          ZipFile: {
          },
          S3Bucket: this.input.s3Bucket,
          S3Key: this.input.s3Key,
          S3ObjectVersion: this.input.s3ObjectVersion,
          Publish: this.input.publish,
          DryRun: this.input.dryRun,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionCode.Layers', props);
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
          FunctionName: this.input.functionName,
          ZipFile: {
          },
          S3Bucket: this.input.s3Bucket,
          S3Key: this.input.s3Key,
          S3ObjectVersion: this.input.s3ObjectVersion,
          Publish: this.input.publish,
          DryRun: this.input.dryRun,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionCode.State', props);
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
          FunctionName: this.input.functionName,
          ZipFile: {
          },
          S3Bucket: this.input.s3Bucket,
          S3Key: this.input.s3Key,
          S3ObjectVersion: this.input.s3ObjectVersion,
          Publish: this.input.publish,
          DryRun: this.input.dryRun,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionCode.StateReason', props);
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
          FunctionName: this.input.functionName,
          ZipFile: {
          },
          S3Bucket: this.input.s3Bucket,
          S3Key: this.input.s3Key,
          S3ObjectVersion: this.input.s3ObjectVersion,
          Publish: this.input.publish,
          DryRun: this.input.dryRun,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionCode.StateReasonCode', props);
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
          FunctionName: this.input.functionName,
          ZipFile: {
          },
          S3Bucket: this.input.s3Bucket,
          S3Key: this.input.s3Key,
          S3ObjectVersion: this.input.s3ObjectVersion,
          Publish: this.input.publish,
          DryRun: this.input.dryRun,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionCode.LastUpdateStatus', props);
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
          FunctionName: this.input.functionName,
          ZipFile: {
          },
          S3Bucket: this.input.s3Bucket,
          S3Key: this.input.s3Key,
          S3ObjectVersion: this.input.s3ObjectVersion,
          Publish: this.input.publish,
          DryRun: this.input.dryRun,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionCode.LastUpdateStatusReason', props);
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
          FunctionName: this.input.functionName,
          ZipFile: {
          },
          S3Bucket: this.input.s3Bucket,
          S3Key: this.input.s3Key,
          S3ObjectVersion: this.input.s3ObjectVersion,
          Publish: this.input.publish,
          DryRun: this.input.dryRun,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionCode.LastUpdateStatusReasonCode', props);
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
          FunctionName: this.input.functionName,
          ZipFile: {
          },
          S3Bucket: this.input.s3Bucket,
          S3Key: this.input.s3Key,
          S3ObjectVersion: this.input.s3ObjectVersion,
          Publish: this.input.publish,
          DryRun: this.input.dryRun,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionCode.FileSystemConfigs', props);
    return resource.getResponseField('FileSystemConfigs') as unknown as shapes.LambdaFileSystemConfig[];
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
          FunctionName: this.input.functionName,
          ZipFile: {
          },
          S3Bucket: this.input.s3Bucket,
          S3Key: this.input.s3Key,
          S3ObjectVersion: this.input.s3ObjectVersion,
          Publish: this.input.publish,
          DryRun: this.input.dryRun,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionCode.SigningProfileVersionArn', props);
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
          FunctionName: this.input.functionName,
          ZipFile: {
          },
          S3Bucket: this.input.s3Bucket,
          S3Key: this.input.s3Key,
          S3ObjectVersion: this.input.s3ObjectVersion,
          Publish: this.input.publish,
          DryRun: this.input.dryRun,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionCode.SigningJobArn', props);
    return resource.getResponseField('SigningJobArn') as unknown as string;
  }

}

export class LambdaUpdateFunctionCodeVpcConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaUpdateFunctionCodeRequest) {
    super(scope, id);
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
          FunctionName: this.input.functionName,
          ZipFile: {
          },
          S3Bucket: this.input.s3Bucket,
          S3Key: this.input.s3Key,
          S3ObjectVersion: this.input.s3ObjectVersion,
          Publish: this.input.publish,
          DryRun: this.input.dryRun,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionCode.VpcConfig.SubnetIds', props);
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
          FunctionName: this.input.functionName,
          ZipFile: {
          },
          S3Bucket: this.input.s3Bucket,
          S3Key: this.input.s3Key,
          S3ObjectVersion: this.input.s3ObjectVersion,
          Publish: this.input.publish,
          DryRun: this.input.dryRun,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionCode.VpcConfig.SecurityGroupIds', props);
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
          FunctionName: this.input.functionName,
          ZipFile: {
          },
          S3Bucket: this.input.s3Bucket,
          S3Key: this.input.s3Key,
          S3ObjectVersion: this.input.s3ObjectVersion,
          Publish: this.input.publish,
          DryRun: this.input.dryRun,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionCode.VpcConfig.VpcId', props);
    return resource.getResponseField('VpcConfig.VpcId') as unknown as string;
  }

}

export class LambdaUpdateFunctionCodeDeadLetterConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaUpdateFunctionCodeRequest) {
    super(scope, id);
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
          FunctionName: this.input.functionName,
          ZipFile: {
          },
          S3Bucket: this.input.s3Bucket,
          S3Key: this.input.s3Key,
          S3ObjectVersion: this.input.s3ObjectVersion,
          Publish: this.input.publish,
          DryRun: this.input.dryRun,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionCode.DeadLetterConfig.TargetArn', props);
    return resource.getResponseField('DeadLetterConfig.TargetArn') as unknown as string;
  }

}

export class LambdaUpdateFunctionCodeEnvironment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaUpdateFunctionCodeRequest) {
    super(scope, id);
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
          FunctionName: this.input.functionName,
          ZipFile: {
          },
          S3Bucket: this.input.s3Bucket,
          S3Key: this.input.s3Key,
          S3ObjectVersion: this.input.s3ObjectVersion,
          Publish: this.input.publish,
          DryRun: this.input.dryRun,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionCode.Environment.Variables', props);
    return resource.getResponseField('Environment.Variables') as unknown as Record<string, string>;
  }

  public get error(): LambdaUpdateFunctionCodeEnvironmentError {
    return new LambdaUpdateFunctionCodeEnvironmentError(this, 'Error', this.__resources, this.input);
  }

}

export class LambdaUpdateFunctionCodeEnvironmentError extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaUpdateFunctionCodeRequest) {
    super(scope, id);
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
          FunctionName: this.input.functionName,
          ZipFile: {
          },
          S3Bucket: this.input.s3Bucket,
          S3Key: this.input.s3Key,
          S3ObjectVersion: this.input.s3ObjectVersion,
          Publish: this.input.publish,
          DryRun: this.input.dryRun,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionCode.Environment.Error.ErrorCode', props);
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
          FunctionName: this.input.functionName,
          ZipFile: {
          },
          S3Bucket: this.input.s3Bucket,
          S3Key: this.input.s3Key,
          S3ObjectVersion: this.input.s3ObjectVersion,
          Publish: this.input.publish,
          DryRun: this.input.dryRun,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionCode.Environment.Error.Message', props);
    return resource.getResponseField('Environment.Error.Message') as unknown as string;
  }

}

export class LambdaUpdateFunctionCodeTracingConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaUpdateFunctionCodeRequest) {
    super(scope, id);
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
          FunctionName: this.input.functionName,
          ZipFile: {
          },
          S3Bucket: this.input.s3Bucket,
          S3Key: this.input.s3Key,
          S3ObjectVersion: this.input.s3ObjectVersion,
          Publish: this.input.publish,
          DryRun: this.input.dryRun,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionCode.TracingConfig.Mode', props);
    return resource.getResponseField('TracingConfig.Mode') as unknown as string;
  }

}

export class LambdaUpdateFunctionConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaUpdateFunctionConfigurationRequest) {
    super(scope, id);
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
          FunctionName: this.input.functionName,
          Role: this.input.role,
          Handler: this.input.handler,
          Description: this.input.description,
          Timeout: this.input.timeout,
          MemorySize: this.input.memorySize,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.input.environment?.variables,
          },
          Runtime: this.input.runtime,
          DeadLetterConfig: {
            TargetArn: this.input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.input.kmsKeyArn,
          TracingConfig: {
            Mode: this.input.tracingConfig?.mode,
          },
          RevisionId: this.input.revisionId,
          Layers: this.input.layers,
          FileSystemConfigs: this.input.fileSystemConfigs,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionConfiguration.FunctionName', props);
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
          FunctionName: this.input.functionName,
          Role: this.input.role,
          Handler: this.input.handler,
          Description: this.input.description,
          Timeout: this.input.timeout,
          MemorySize: this.input.memorySize,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.input.environment?.variables,
          },
          Runtime: this.input.runtime,
          DeadLetterConfig: {
            TargetArn: this.input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.input.kmsKeyArn,
          TracingConfig: {
            Mode: this.input.tracingConfig?.mode,
          },
          RevisionId: this.input.revisionId,
          Layers: this.input.layers,
          FileSystemConfigs: this.input.fileSystemConfigs,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionConfiguration.FunctionArn', props);
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
          FunctionName: this.input.functionName,
          Role: this.input.role,
          Handler: this.input.handler,
          Description: this.input.description,
          Timeout: this.input.timeout,
          MemorySize: this.input.memorySize,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.input.environment?.variables,
          },
          Runtime: this.input.runtime,
          DeadLetterConfig: {
            TargetArn: this.input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.input.kmsKeyArn,
          TracingConfig: {
            Mode: this.input.tracingConfig?.mode,
          },
          RevisionId: this.input.revisionId,
          Layers: this.input.layers,
          FileSystemConfigs: this.input.fileSystemConfigs,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionConfiguration.Runtime', props);
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
          FunctionName: this.input.functionName,
          Role: this.input.role,
          Handler: this.input.handler,
          Description: this.input.description,
          Timeout: this.input.timeout,
          MemorySize: this.input.memorySize,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.input.environment?.variables,
          },
          Runtime: this.input.runtime,
          DeadLetterConfig: {
            TargetArn: this.input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.input.kmsKeyArn,
          TracingConfig: {
            Mode: this.input.tracingConfig?.mode,
          },
          RevisionId: this.input.revisionId,
          Layers: this.input.layers,
          FileSystemConfigs: this.input.fileSystemConfigs,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionConfiguration.Role', props);
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
          FunctionName: this.input.functionName,
          Role: this.input.role,
          Handler: this.input.handler,
          Description: this.input.description,
          Timeout: this.input.timeout,
          MemorySize: this.input.memorySize,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.input.environment?.variables,
          },
          Runtime: this.input.runtime,
          DeadLetterConfig: {
            TargetArn: this.input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.input.kmsKeyArn,
          TracingConfig: {
            Mode: this.input.tracingConfig?.mode,
          },
          RevisionId: this.input.revisionId,
          Layers: this.input.layers,
          FileSystemConfigs: this.input.fileSystemConfigs,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionConfiguration.Handler', props);
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
          FunctionName: this.input.functionName,
          Role: this.input.role,
          Handler: this.input.handler,
          Description: this.input.description,
          Timeout: this.input.timeout,
          MemorySize: this.input.memorySize,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.input.environment?.variables,
          },
          Runtime: this.input.runtime,
          DeadLetterConfig: {
            TargetArn: this.input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.input.kmsKeyArn,
          TracingConfig: {
            Mode: this.input.tracingConfig?.mode,
          },
          RevisionId: this.input.revisionId,
          Layers: this.input.layers,
          FileSystemConfigs: this.input.fileSystemConfigs,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionConfiguration.CodeSize', props);
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
          FunctionName: this.input.functionName,
          Role: this.input.role,
          Handler: this.input.handler,
          Description: this.input.description,
          Timeout: this.input.timeout,
          MemorySize: this.input.memorySize,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.input.environment?.variables,
          },
          Runtime: this.input.runtime,
          DeadLetterConfig: {
            TargetArn: this.input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.input.kmsKeyArn,
          TracingConfig: {
            Mode: this.input.tracingConfig?.mode,
          },
          RevisionId: this.input.revisionId,
          Layers: this.input.layers,
          FileSystemConfigs: this.input.fileSystemConfigs,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionConfiguration.Description', props);
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
          FunctionName: this.input.functionName,
          Role: this.input.role,
          Handler: this.input.handler,
          Description: this.input.description,
          Timeout: this.input.timeout,
          MemorySize: this.input.memorySize,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.input.environment?.variables,
          },
          Runtime: this.input.runtime,
          DeadLetterConfig: {
            TargetArn: this.input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.input.kmsKeyArn,
          TracingConfig: {
            Mode: this.input.tracingConfig?.mode,
          },
          RevisionId: this.input.revisionId,
          Layers: this.input.layers,
          FileSystemConfigs: this.input.fileSystemConfigs,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionConfiguration.Timeout', props);
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
          FunctionName: this.input.functionName,
          Role: this.input.role,
          Handler: this.input.handler,
          Description: this.input.description,
          Timeout: this.input.timeout,
          MemorySize: this.input.memorySize,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.input.environment?.variables,
          },
          Runtime: this.input.runtime,
          DeadLetterConfig: {
            TargetArn: this.input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.input.kmsKeyArn,
          TracingConfig: {
            Mode: this.input.tracingConfig?.mode,
          },
          RevisionId: this.input.revisionId,
          Layers: this.input.layers,
          FileSystemConfigs: this.input.fileSystemConfigs,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionConfiguration.MemorySize', props);
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
          FunctionName: this.input.functionName,
          Role: this.input.role,
          Handler: this.input.handler,
          Description: this.input.description,
          Timeout: this.input.timeout,
          MemorySize: this.input.memorySize,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.input.environment?.variables,
          },
          Runtime: this.input.runtime,
          DeadLetterConfig: {
            TargetArn: this.input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.input.kmsKeyArn,
          TracingConfig: {
            Mode: this.input.tracingConfig?.mode,
          },
          RevisionId: this.input.revisionId,
          Layers: this.input.layers,
          FileSystemConfigs: this.input.fileSystemConfigs,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionConfiguration.LastModified', props);
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
          FunctionName: this.input.functionName,
          Role: this.input.role,
          Handler: this.input.handler,
          Description: this.input.description,
          Timeout: this.input.timeout,
          MemorySize: this.input.memorySize,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.input.environment?.variables,
          },
          Runtime: this.input.runtime,
          DeadLetterConfig: {
            TargetArn: this.input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.input.kmsKeyArn,
          TracingConfig: {
            Mode: this.input.tracingConfig?.mode,
          },
          RevisionId: this.input.revisionId,
          Layers: this.input.layers,
          FileSystemConfigs: this.input.fileSystemConfigs,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionConfiguration.CodeSha256', props);
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
          FunctionName: this.input.functionName,
          Role: this.input.role,
          Handler: this.input.handler,
          Description: this.input.description,
          Timeout: this.input.timeout,
          MemorySize: this.input.memorySize,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.input.environment?.variables,
          },
          Runtime: this.input.runtime,
          DeadLetterConfig: {
            TargetArn: this.input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.input.kmsKeyArn,
          TracingConfig: {
            Mode: this.input.tracingConfig?.mode,
          },
          RevisionId: this.input.revisionId,
          Layers: this.input.layers,
          FileSystemConfigs: this.input.fileSystemConfigs,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionConfiguration.Version', props);
    return resource.getResponseField('Version') as unknown as string;
  }

  public get vpcConfig(): LambdaUpdateFunctionConfigurationVpcConfig {
    return new LambdaUpdateFunctionConfigurationVpcConfig(this, 'VpcConfig', this.__resources, this.input);
  }

  public get deadLetterConfig(): LambdaUpdateFunctionConfigurationDeadLetterConfig {
    return new LambdaUpdateFunctionConfigurationDeadLetterConfig(this, 'DeadLetterConfig', this.__resources, this.input);
  }

  public get environment(): LambdaUpdateFunctionConfigurationEnvironment {
    return new LambdaUpdateFunctionConfigurationEnvironment(this, 'Environment', this.__resources, this.input);
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
          FunctionName: this.input.functionName,
          Role: this.input.role,
          Handler: this.input.handler,
          Description: this.input.description,
          Timeout: this.input.timeout,
          MemorySize: this.input.memorySize,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.input.environment?.variables,
          },
          Runtime: this.input.runtime,
          DeadLetterConfig: {
            TargetArn: this.input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.input.kmsKeyArn,
          TracingConfig: {
            Mode: this.input.tracingConfig?.mode,
          },
          RevisionId: this.input.revisionId,
          Layers: this.input.layers,
          FileSystemConfigs: this.input.fileSystemConfigs,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionConfiguration.KMSKeyArn', props);
    return resource.getResponseField('KMSKeyArn') as unknown as string;
  }

  public get tracingConfig(): LambdaUpdateFunctionConfigurationTracingConfig {
    return new LambdaUpdateFunctionConfigurationTracingConfig(this, 'TracingConfig', this.__resources, this.input);
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
          FunctionName: this.input.functionName,
          Role: this.input.role,
          Handler: this.input.handler,
          Description: this.input.description,
          Timeout: this.input.timeout,
          MemorySize: this.input.memorySize,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.input.environment?.variables,
          },
          Runtime: this.input.runtime,
          DeadLetterConfig: {
            TargetArn: this.input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.input.kmsKeyArn,
          TracingConfig: {
            Mode: this.input.tracingConfig?.mode,
          },
          RevisionId: this.input.revisionId,
          Layers: this.input.layers,
          FileSystemConfigs: this.input.fileSystemConfigs,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionConfiguration.MasterArn', props);
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
          FunctionName: this.input.functionName,
          Role: this.input.role,
          Handler: this.input.handler,
          Description: this.input.description,
          Timeout: this.input.timeout,
          MemorySize: this.input.memorySize,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.input.environment?.variables,
          },
          Runtime: this.input.runtime,
          DeadLetterConfig: {
            TargetArn: this.input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.input.kmsKeyArn,
          TracingConfig: {
            Mode: this.input.tracingConfig?.mode,
          },
          RevisionId: this.input.revisionId,
          Layers: this.input.layers,
          FileSystemConfigs: this.input.fileSystemConfigs,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionConfiguration.RevisionId', props);
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
          FunctionName: this.input.functionName,
          Role: this.input.role,
          Handler: this.input.handler,
          Description: this.input.description,
          Timeout: this.input.timeout,
          MemorySize: this.input.memorySize,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.input.environment?.variables,
          },
          Runtime: this.input.runtime,
          DeadLetterConfig: {
            TargetArn: this.input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.input.kmsKeyArn,
          TracingConfig: {
            Mode: this.input.tracingConfig?.mode,
          },
          RevisionId: this.input.revisionId,
          Layers: this.input.layers,
          FileSystemConfigs: this.input.fileSystemConfigs,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionConfiguration.Layers', props);
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
          FunctionName: this.input.functionName,
          Role: this.input.role,
          Handler: this.input.handler,
          Description: this.input.description,
          Timeout: this.input.timeout,
          MemorySize: this.input.memorySize,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.input.environment?.variables,
          },
          Runtime: this.input.runtime,
          DeadLetterConfig: {
            TargetArn: this.input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.input.kmsKeyArn,
          TracingConfig: {
            Mode: this.input.tracingConfig?.mode,
          },
          RevisionId: this.input.revisionId,
          Layers: this.input.layers,
          FileSystemConfigs: this.input.fileSystemConfigs,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionConfiguration.State', props);
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
          FunctionName: this.input.functionName,
          Role: this.input.role,
          Handler: this.input.handler,
          Description: this.input.description,
          Timeout: this.input.timeout,
          MemorySize: this.input.memorySize,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.input.environment?.variables,
          },
          Runtime: this.input.runtime,
          DeadLetterConfig: {
            TargetArn: this.input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.input.kmsKeyArn,
          TracingConfig: {
            Mode: this.input.tracingConfig?.mode,
          },
          RevisionId: this.input.revisionId,
          Layers: this.input.layers,
          FileSystemConfigs: this.input.fileSystemConfigs,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionConfiguration.StateReason', props);
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
          FunctionName: this.input.functionName,
          Role: this.input.role,
          Handler: this.input.handler,
          Description: this.input.description,
          Timeout: this.input.timeout,
          MemorySize: this.input.memorySize,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.input.environment?.variables,
          },
          Runtime: this.input.runtime,
          DeadLetterConfig: {
            TargetArn: this.input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.input.kmsKeyArn,
          TracingConfig: {
            Mode: this.input.tracingConfig?.mode,
          },
          RevisionId: this.input.revisionId,
          Layers: this.input.layers,
          FileSystemConfigs: this.input.fileSystemConfigs,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionConfiguration.StateReasonCode', props);
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
          FunctionName: this.input.functionName,
          Role: this.input.role,
          Handler: this.input.handler,
          Description: this.input.description,
          Timeout: this.input.timeout,
          MemorySize: this.input.memorySize,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.input.environment?.variables,
          },
          Runtime: this.input.runtime,
          DeadLetterConfig: {
            TargetArn: this.input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.input.kmsKeyArn,
          TracingConfig: {
            Mode: this.input.tracingConfig?.mode,
          },
          RevisionId: this.input.revisionId,
          Layers: this.input.layers,
          FileSystemConfigs: this.input.fileSystemConfigs,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionConfiguration.LastUpdateStatus', props);
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
          FunctionName: this.input.functionName,
          Role: this.input.role,
          Handler: this.input.handler,
          Description: this.input.description,
          Timeout: this.input.timeout,
          MemorySize: this.input.memorySize,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.input.environment?.variables,
          },
          Runtime: this.input.runtime,
          DeadLetterConfig: {
            TargetArn: this.input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.input.kmsKeyArn,
          TracingConfig: {
            Mode: this.input.tracingConfig?.mode,
          },
          RevisionId: this.input.revisionId,
          Layers: this.input.layers,
          FileSystemConfigs: this.input.fileSystemConfigs,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionConfiguration.LastUpdateStatusReason', props);
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
          FunctionName: this.input.functionName,
          Role: this.input.role,
          Handler: this.input.handler,
          Description: this.input.description,
          Timeout: this.input.timeout,
          MemorySize: this.input.memorySize,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.input.environment?.variables,
          },
          Runtime: this.input.runtime,
          DeadLetterConfig: {
            TargetArn: this.input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.input.kmsKeyArn,
          TracingConfig: {
            Mode: this.input.tracingConfig?.mode,
          },
          RevisionId: this.input.revisionId,
          Layers: this.input.layers,
          FileSystemConfigs: this.input.fileSystemConfigs,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionConfiguration.LastUpdateStatusReasonCode', props);
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
          FunctionName: this.input.functionName,
          Role: this.input.role,
          Handler: this.input.handler,
          Description: this.input.description,
          Timeout: this.input.timeout,
          MemorySize: this.input.memorySize,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.input.environment?.variables,
          },
          Runtime: this.input.runtime,
          DeadLetterConfig: {
            TargetArn: this.input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.input.kmsKeyArn,
          TracingConfig: {
            Mode: this.input.tracingConfig?.mode,
          },
          RevisionId: this.input.revisionId,
          Layers: this.input.layers,
          FileSystemConfigs: this.input.fileSystemConfigs,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionConfiguration.FileSystemConfigs', props);
    return resource.getResponseField('FileSystemConfigs') as unknown as shapes.LambdaFileSystemConfig[];
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
          FunctionName: this.input.functionName,
          Role: this.input.role,
          Handler: this.input.handler,
          Description: this.input.description,
          Timeout: this.input.timeout,
          MemorySize: this.input.memorySize,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.input.environment?.variables,
          },
          Runtime: this.input.runtime,
          DeadLetterConfig: {
            TargetArn: this.input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.input.kmsKeyArn,
          TracingConfig: {
            Mode: this.input.tracingConfig?.mode,
          },
          RevisionId: this.input.revisionId,
          Layers: this.input.layers,
          FileSystemConfigs: this.input.fileSystemConfigs,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionConfiguration.SigningProfileVersionArn', props);
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
          FunctionName: this.input.functionName,
          Role: this.input.role,
          Handler: this.input.handler,
          Description: this.input.description,
          Timeout: this.input.timeout,
          MemorySize: this.input.memorySize,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.input.environment?.variables,
          },
          Runtime: this.input.runtime,
          DeadLetterConfig: {
            TargetArn: this.input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.input.kmsKeyArn,
          TracingConfig: {
            Mode: this.input.tracingConfig?.mode,
          },
          RevisionId: this.input.revisionId,
          Layers: this.input.layers,
          FileSystemConfigs: this.input.fileSystemConfigs,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionConfiguration.SigningJobArn', props);
    return resource.getResponseField('SigningJobArn') as unknown as string;
  }

}

export class LambdaUpdateFunctionConfigurationVpcConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaUpdateFunctionConfigurationRequest) {
    super(scope, id);
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
          FunctionName: this.input.functionName,
          Role: this.input.role,
          Handler: this.input.handler,
          Description: this.input.description,
          Timeout: this.input.timeout,
          MemorySize: this.input.memorySize,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.input.environment?.variables,
          },
          Runtime: this.input.runtime,
          DeadLetterConfig: {
            TargetArn: this.input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.input.kmsKeyArn,
          TracingConfig: {
            Mode: this.input.tracingConfig?.mode,
          },
          RevisionId: this.input.revisionId,
          Layers: this.input.layers,
          FileSystemConfigs: this.input.fileSystemConfigs,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionConfiguration.VpcConfig.SubnetIds', props);
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
          FunctionName: this.input.functionName,
          Role: this.input.role,
          Handler: this.input.handler,
          Description: this.input.description,
          Timeout: this.input.timeout,
          MemorySize: this.input.memorySize,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.input.environment?.variables,
          },
          Runtime: this.input.runtime,
          DeadLetterConfig: {
            TargetArn: this.input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.input.kmsKeyArn,
          TracingConfig: {
            Mode: this.input.tracingConfig?.mode,
          },
          RevisionId: this.input.revisionId,
          Layers: this.input.layers,
          FileSystemConfigs: this.input.fileSystemConfigs,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionConfiguration.VpcConfig.SecurityGroupIds', props);
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
          FunctionName: this.input.functionName,
          Role: this.input.role,
          Handler: this.input.handler,
          Description: this.input.description,
          Timeout: this.input.timeout,
          MemorySize: this.input.memorySize,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.input.environment?.variables,
          },
          Runtime: this.input.runtime,
          DeadLetterConfig: {
            TargetArn: this.input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.input.kmsKeyArn,
          TracingConfig: {
            Mode: this.input.tracingConfig?.mode,
          },
          RevisionId: this.input.revisionId,
          Layers: this.input.layers,
          FileSystemConfigs: this.input.fileSystemConfigs,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionConfiguration.VpcConfig.VpcId', props);
    return resource.getResponseField('VpcConfig.VpcId') as unknown as string;
  }

}

export class LambdaUpdateFunctionConfigurationDeadLetterConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaUpdateFunctionConfigurationRequest) {
    super(scope, id);
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
          FunctionName: this.input.functionName,
          Role: this.input.role,
          Handler: this.input.handler,
          Description: this.input.description,
          Timeout: this.input.timeout,
          MemorySize: this.input.memorySize,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.input.environment?.variables,
          },
          Runtime: this.input.runtime,
          DeadLetterConfig: {
            TargetArn: this.input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.input.kmsKeyArn,
          TracingConfig: {
            Mode: this.input.tracingConfig?.mode,
          },
          RevisionId: this.input.revisionId,
          Layers: this.input.layers,
          FileSystemConfigs: this.input.fileSystemConfigs,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionConfiguration.DeadLetterConfig.TargetArn', props);
    return resource.getResponseField('DeadLetterConfig.TargetArn') as unknown as string;
  }

}

export class LambdaUpdateFunctionConfigurationEnvironment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaUpdateFunctionConfigurationRequest) {
    super(scope, id);
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
          FunctionName: this.input.functionName,
          Role: this.input.role,
          Handler: this.input.handler,
          Description: this.input.description,
          Timeout: this.input.timeout,
          MemorySize: this.input.memorySize,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.input.environment?.variables,
          },
          Runtime: this.input.runtime,
          DeadLetterConfig: {
            TargetArn: this.input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.input.kmsKeyArn,
          TracingConfig: {
            Mode: this.input.tracingConfig?.mode,
          },
          RevisionId: this.input.revisionId,
          Layers: this.input.layers,
          FileSystemConfigs: this.input.fileSystemConfigs,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionConfiguration.Environment.Variables', props);
    return resource.getResponseField('Environment.Variables') as unknown as Record<string, string>;
  }

  public get error(): LambdaUpdateFunctionConfigurationEnvironmentError {
    return new LambdaUpdateFunctionConfigurationEnvironmentError(this, 'Error', this.__resources, this.input);
  }

}

export class LambdaUpdateFunctionConfigurationEnvironmentError extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaUpdateFunctionConfigurationRequest) {
    super(scope, id);
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
          FunctionName: this.input.functionName,
          Role: this.input.role,
          Handler: this.input.handler,
          Description: this.input.description,
          Timeout: this.input.timeout,
          MemorySize: this.input.memorySize,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.input.environment?.variables,
          },
          Runtime: this.input.runtime,
          DeadLetterConfig: {
            TargetArn: this.input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.input.kmsKeyArn,
          TracingConfig: {
            Mode: this.input.tracingConfig?.mode,
          },
          RevisionId: this.input.revisionId,
          Layers: this.input.layers,
          FileSystemConfigs: this.input.fileSystemConfigs,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionConfiguration.Environment.Error.ErrorCode', props);
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
          FunctionName: this.input.functionName,
          Role: this.input.role,
          Handler: this.input.handler,
          Description: this.input.description,
          Timeout: this.input.timeout,
          MemorySize: this.input.memorySize,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.input.environment?.variables,
          },
          Runtime: this.input.runtime,
          DeadLetterConfig: {
            TargetArn: this.input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.input.kmsKeyArn,
          TracingConfig: {
            Mode: this.input.tracingConfig?.mode,
          },
          RevisionId: this.input.revisionId,
          Layers: this.input.layers,
          FileSystemConfigs: this.input.fileSystemConfigs,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionConfiguration.Environment.Error.Message', props);
    return resource.getResponseField('Environment.Error.Message') as unknown as string;
  }

}

export class LambdaUpdateFunctionConfigurationTracingConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaUpdateFunctionConfigurationRequest) {
    super(scope, id);
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
          FunctionName: this.input.functionName,
          Role: this.input.role,
          Handler: this.input.handler,
          Description: this.input.description,
          Timeout: this.input.timeout,
          MemorySize: this.input.memorySize,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          Environment: {
            Variables: this.input.environment?.variables,
          },
          Runtime: this.input.runtime,
          DeadLetterConfig: {
            TargetArn: this.input.deadLetterConfig?.targetArn,
          },
          KMSKeyArn: this.input.kmsKeyArn,
          TracingConfig: {
            Mode: this.input.tracingConfig?.mode,
          },
          RevisionId: this.input.revisionId,
          Layers: this.input.layers,
          FileSystemConfigs: this.input.fileSystemConfigs,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionConfiguration.TracingConfig.Mode', props);
    return resource.getResponseField('TracingConfig.Mode') as unknown as string;
  }

}

export class LambdaUpdateFunctionEventInvokeConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaUpdateFunctionEventInvokeConfigRequest) {
    super(scope, id);
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
          MaximumRetryAttempts: this.input.maximumRetryAttempts,
          MaximumEventAgeInSeconds: this.input.maximumEventAgeInSeconds,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.input.destinationConfig?.onFailure?.destination,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionEventInvokeConfig.LastModified', props);
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
          MaximumRetryAttempts: this.input.maximumRetryAttempts,
          MaximumEventAgeInSeconds: this.input.maximumEventAgeInSeconds,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.input.destinationConfig?.onFailure?.destination,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionEventInvokeConfig.FunctionArn', props);
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
          MaximumRetryAttempts: this.input.maximumRetryAttempts,
          MaximumEventAgeInSeconds: this.input.maximumEventAgeInSeconds,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.input.destinationConfig?.onFailure?.destination,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionEventInvokeConfig.MaximumRetryAttempts', props);
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
          MaximumRetryAttempts: this.input.maximumRetryAttempts,
          MaximumEventAgeInSeconds: this.input.maximumEventAgeInSeconds,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.input.destinationConfig?.onFailure?.destination,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionEventInvokeConfig.MaximumEventAgeInSeconds', props);
    return resource.getResponseField('MaximumEventAgeInSeconds') as unknown as number;
  }

  public get destinationConfig(): LambdaUpdateFunctionEventInvokeConfigDestinationConfig {
    return new LambdaUpdateFunctionEventInvokeConfigDestinationConfig(this, 'DestinationConfig', this.__resources, this.input);
  }

}

export class LambdaUpdateFunctionEventInvokeConfigDestinationConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaUpdateFunctionEventInvokeConfigRequest) {
    super(scope, id);
  }

  public get onSuccess(): LambdaUpdateFunctionEventInvokeConfigDestinationConfigOnSuccess {
    return new LambdaUpdateFunctionEventInvokeConfigDestinationConfigOnSuccess(this, 'OnSuccess', this.__resources, this.input);
  }

  public get onFailure(): LambdaUpdateFunctionEventInvokeConfigDestinationConfigOnFailure {
    return new LambdaUpdateFunctionEventInvokeConfigDestinationConfigOnFailure(this, 'OnFailure', this.__resources, this.input);
  }

}

export class LambdaUpdateFunctionEventInvokeConfigDestinationConfigOnSuccess extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaUpdateFunctionEventInvokeConfigRequest) {
    super(scope, id);
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
          MaximumRetryAttempts: this.input.maximumRetryAttempts,
          MaximumEventAgeInSeconds: this.input.maximumEventAgeInSeconds,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.input.destinationConfig?.onFailure?.destination,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionEventInvokeConfig.DestinationConfig.OnSuccess.Destination', props);
    return resource.getResponseField('DestinationConfig.OnSuccess.Destination') as unknown as string;
  }

}

export class LambdaUpdateFunctionEventInvokeConfigDestinationConfigOnFailure extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LambdaUpdateFunctionEventInvokeConfigRequest) {
    super(scope, id);
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
          FunctionName: this.input.functionName,
          Qualifier: this.input.qualifier,
          MaximumRetryAttempts: this.input.maximumRetryAttempts,
          MaximumEventAgeInSeconds: this.input.maximumEventAgeInSeconds,
          DestinationConfig: {
            OnSuccess: {
              Destination: this.input.destinationConfig?.onSuccess?.destination,
            },
            OnFailure: {
              Destination: this.input.destinationConfig?.onFailure?.destination,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunctionEventInvokeConfig.DestinationConfig.OnFailure.Destination', props);
    return resource.getResponseField('DestinationConfig.OnFailure.Destination') as unknown as string;
  }

}

