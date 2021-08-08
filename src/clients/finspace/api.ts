import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class FinspaceClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createEnvironment(input: shapes.FinspaceCreateEnvironmentRequest): FinspaceResponsesCreateEnvironment {
    return new FinspaceResponsesCreateEnvironment(this, this.__resources, input);
  }

  public deleteEnvironment(input: shapes.FinspaceDeleteEnvironmentRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEnvironment',
        service: 'Finspace',
        physicalResourceId: cr.PhysicalResourceId.of('Finspace.DeleteEnvironment'),
        parameters: {
          environmentId: input.environmentId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteEnvironment', props);
  }

  public fetchEnvironment(input: shapes.FinspaceGetEnvironmentRequest): FinspaceResponsesFetchEnvironment {
    return new FinspaceResponsesFetchEnvironment(this, this.__resources, input);
  }

  public listEnvironments(input: shapes.FinspaceListEnvironmentsRequest): FinspaceResponsesListEnvironments {
    return new FinspaceResponsesListEnvironments(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.FinspaceListTagsForResourceRequest): FinspaceResponsesListTagsForResource {
    return new FinspaceResponsesListTagsForResource(this, this.__resources, input);
  }

  public tagResource(input: shapes.FinspaceTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'Finspace',
        physicalResourceId: cr.PhysicalResourceId.of('Finspace.TagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.FinspaceUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'Finspace',
        physicalResourceId: cr.PhysicalResourceId.of('Finspace.UntagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateEnvironment(input: shapes.FinspaceUpdateEnvironmentRequest): FinspaceResponsesUpdateEnvironment {
    return new FinspaceResponsesUpdateEnvironment(this, this.__resources, input);
  }

}

export class FinspaceResponsesCreateEnvironment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FinspaceCreateEnvironmentRequest) {
  }

  public get environmentId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironment',
        service: 'Finspace',
        physicalResourceId: cr.PhysicalResourceId.of('Finspace.CreateEnvironment.environmentId'),
        outputPath: 'environmentId',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          kmsKeyId: this.__input.kmsKeyId,
          tags: this.__input.tags,
          federationMode: this.__input.federationMode,
          federationParameters: {
            samlMetadataDocument: this.__input.federationParameters?.samlMetadataDocument,
            samlMetadataURL: this.__input.federationParameters?.samlMetadataURL,
            applicationCallBackURL: this.__input.federationParameters?.applicationCallBackURL,
            federationURN: this.__input.federationParameters?.federationURN,
            federationProviderName: this.__input.federationParameters?.federationProviderName,
            attributeMap: this.__input.federationParameters?.attributeMap,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironment.environmentId', props);
    return resource.getResponseField('environmentId') as unknown as string;
  }

  public get environmentArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironment',
        service: 'Finspace',
        physicalResourceId: cr.PhysicalResourceId.of('Finspace.CreateEnvironment.environmentArn'),
        outputPath: 'environmentArn',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          kmsKeyId: this.__input.kmsKeyId,
          tags: this.__input.tags,
          federationMode: this.__input.federationMode,
          federationParameters: {
            samlMetadataDocument: this.__input.federationParameters?.samlMetadataDocument,
            samlMetadataURL: this.__input.federationParameters?.samlMetadataURL,
            applicationCallBackURL: this.__input.federationParameters?.applicationCallBackURL,
            federationURN: this.__input.federationParameters?.federationURN,
            federationProviderName: this.__input.federationParameters?.federationProviderName,
            attributeMap: this.__input.federationParameters?.attributeMap,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironment.environmentArn', props);
    return resource.getResponseField('environmentArn') as unknown as string;
  }

  public get environmentUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironment',
        service: 'Finspace',
        physicalResourceId: cr.PhysicalResourceId.of('Finspace.CreateEnvironment.environmentUrl'),
        outputPath: 'environmentUrl',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          kmsKeyId: this.__input.kmsKeyId,
          tags: this.__input.tags,
          federationMode: this.__input.federationMode,
          federationParameters: {
            samlMetadataDocument: this.__input.federationParameters?.samlMetadataDocument,
            samlMetadataURL: this.__input.federationParameters?.samlMetadataURL,
            applicationCallBackURL: this.__input.federationParameters?.applicationCallBackURL,
            federationURN: this.__input.federationParameters?.federationURN,
            federationProviderName: this.__input.federationParameters?.federationProviderName,
            attributeMap: this.__input.federationParameters?.attributeMap,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironment.environmentUrl', props);
    return resource.getResponseField('environmentUrl') as unknown as string;
  }

}

export class FinspaceResponsesFetchEnvironment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FinspaceGetEnvironmentRequest) {
  }

  public get environment(): FinspaceResponsesFetchEnvironmentEnvironment {
    return new FinspaceResponsesFetchEnvironmentEnvironment(this.__scope, this.__resources, this.__input);
  }

}

export class FinspaceResponsesFetchEnvironmentEnvironment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FinspaceGetEnvironmentRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'Finspace',
        physicalResourceId: cr.PhysicalResourceId.of('Finspace.GetEnvironment.environment.name'),
        outputPath: 'environment.name',
        parameters: {
          environmentId: this.__input.environmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.environment.name', props);
    return resource.getResponseField('environment.name') as unknown as string;
  }

  public get environmentId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'Finspace',
        physicalResourceId: cr.PhysicalResourceId.of('Finspace.GetEnvironment.environment.environmentId'),
        outputPath: 'environment.environmentId',
        parameters: {
          environmentId: this.__input.environmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.environment.environmentId', props);
    return resource.getResponseField('environment.environmentId') as unknown as string;
  }

  public get awsAccountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'Finspace',
        physicalResourceId: cr.PhysicalResourceId.of('Finspace.GetEnvironment.environment.awsAccountId'),
        outputPath: 'environment.awsAccountId',
        parameters: {
          environmentId: this.__input.environmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.environment.awsAccountId', props);
    return resource.getResponseField('environment.awsAccountId') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'Finspace',
        physicalResourceId: cr.PhysicalResourceId.of('Finspace.GetEnvironment.environment.status'),
        outputPath: 'environment.status',
        parameters: {
          environmentId: this.__input.environmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.environment.status', props);
    return resource.getResponseField('environment.status') as unknown as string;
  }

  public get environmentUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'Finspace',
        physicalResourceId: cr.PhysicalResourceId.of('Finspace.GetEnvironment.environment.environmentUrl'),
        outputPath: 'environment.environmentUrl',
        parameters: {
          environmentId: this.__input.environmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.environment.environmentUrl', props);
    return resource.getResponseField('environment.environmentUrl') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'Finspace',
        physicalResourceId: cr.PhysicalResourceId.of('Finspace.GetEnvironment.environment.description'),
        outputPath: 'environment.description',
        parameters: {
          environmentId: this.__input.environmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.environment.description', props);
    return resource.getResponseField('environment.description') as unknown as string;
  }

  public get environmentArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'Finspace',
        physicalResourceId: cr.PhysicalResourceId.of('Finspace.GetEnvironment.environment.environmentArn'),
        outputPath: 'environment.environmentArn',
        parameters: {
          environmentId: this.__input.environmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.environment.environmentArn', props);
    return resource.getResponseField('environment.environmentArn') as unknown as string;
  }

  public get sageMakerStudioDomainUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'Finspace',
        physicalResourceId: cr.PhysicalResourceId.of('Finspace.GetEnvironment.environment.sageMakerStudioDomainUrl'),
        outputPath: 'environment.sageMakerStudioDomainUrl',
        parameters: {
          environmentId: this.__input.environmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.environment.sageMakerStudioDomainUrl', props);
    return resource.getResponseField('environment.sageMakerStudioDomainUrl') as unknown as string;
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'Finspace',
        physicalResourceId: cr.PhysicalResourceId.of('Finspace.GetEnvironment.environment.kmsKeyId'),
        outputPath: 'environment.kmsKeyId',
        parameters: {
          environmentId: this.__input.environmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.environment.kmsKeyId', props);
    return resource.getResponseField('environment.kmsKeyId') as unknown as string;
  }

  public get dedicatedServiceAccountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'Finspace',
        physicalResourceId: cr.PhysicalResourceId.of('Finspace.GetEnvironment.environment.dedicatedServiceAccountId'),
        outputPath: 'environment.dedicatedServiceAccountId',
        parameters: {
          environmentId: this.__input.environmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.environment.dedicatedServiceAccountId', props);
    return resource.getResponseField('environment.dedicatedServiceAccountId') as unknown as string;
  }

  public get federationMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'Finspace',
        physicalResourceId: cr.PhysicalResourceId.of('Finspace.GetEnvironment.environment.federationMode'),
        outputPath: 'environment.federationMode',
        parameters: {
          environmentId: this.__input.environmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.environment.federationMode', props);
    return resource.getResponseField('environment.federationMode') as unknown as string;
  }

  public get federationParameters(): FinspaceResponsesFetchEnvironmentEnvironmentFederationParameters {
    return new FinspaceResponsesFetchEnvironmentEnvironmentFederationParameters(this.__scope, this.__resources, this.__input);
  }

}

export class FinspaceResponsesFetchEnvironmentEnvironmentFederationParameters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FinspaceGetEnvironmentRequest) {
  }

  public get samlMetadataDocument(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'Finspace',
        physicalResourceId: cr.PhysicalResourceId.of('Finspace.GetEnvironment.environment.federationParameters.samlMetadataDocument'),
        outputPath: 'environment.federationParameters.samlMetadataDocument',
        parameters: {
          environmentId: this.__input.environmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.environment.federationParameters.samlMetadataDocument', props);
    return resource.getResponseField('environment.federationParameters.samlMetadataDocument') as unknown as string;
  }

  public get samlMetadataUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'Finspace',
        physicalResourceId: cr.PhysicalResourceId.of('Finspace.GetEnvironment.environment.federationParameters.samlMetadataURL'),
        outputPath: 'environment.federationParameters.samlMetadataURL',
        parameters: {
          environmentId: this.__input.environmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.environment.federationParameters.samlMetadataURL', props);
    return resource.getResponseField('environment.federationParameters.samlMetadataURL') as unknown as string;
  }

  public get applicationCallBackUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'Finspace',
        physicalResourceId: cr.PhysicalResourceId.of('Finspace.GetEnvironment.environment.federationParameters.applicationCallBackURL'),
        outputPath: 'environment.federationParameters.applicationCallBackURL',
        parameters: {
          environmentId: this.__input.environmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.environment.federationParameters.applicationCallBackURL', props);
    return resource.getResponseField('environment.federationParameters.applicationCallBackURL') as unknown as string;
  }

  public get federationUrn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'Finspace',
        physicalResourceId: cr.PhysicalResourceId.of('Finspace.GetEnvironment.environment.federationParameters.federationURN'),
        outputPath: 'environment.federationParameters.federationURN',
        parameters: {
          environmentId: this.__input.environmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.environment.federationParameters.federationURN', props);
    return resource.getResponseField('environment.federationParameters.federationURN') as unknown as string;
  }

  public get federationProviderName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'Finspace',
        physicalResourceId: cr.PhysicalResourceId.of('Finspace.GetEnvironment.environment.federationParameters.federationProviderName'),
        outputPath: 'environment.federationParameters.federationProviderName',
        parameters: {
          environmentId: this.__input.environmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.environment.federationParameters.federationProviderName', props);
    return resource.getResponseField('environment.federationParameters.federationProviderName') as unknown as string;
  }

  public get attributeMap(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'Finspace',
        physicalResourceId: cr.PhysicalResourceId.of('Finspace.GetEnvironment.environment.federationParameters.attributeMap'),
        outputPath: 'environment.federationParameters.attributeMap',
        parameters: {
          environmentId: this.__input.environmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.environment.federationParameters.attributeMap', props);
    return resource.getResponseField('environment.federationParameters.attributeMap') as unknown as Record<string, string>;
  }

}

export class FinspaceResponsesListEnvironments {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FinspaceListEnvironmentsRequest) {
  }

  public get environments(): shapes.FinspaceEnvironment[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEnvironments',
        service: 'Finspace',
        physicalResourceId: cr.PhysicalResourceId.of('Finspace.ListEnvironments.environments'),
        outputPath: 'environments',
        parameters: {
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEnvironments.environments', props);
    return resource.getResponseField('environments') as unknown as shapes.FinspaceEnvironment[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEnvironments',
        service: 'Finspace',
        physicalResourceId: cr.PhysicalResourceId.of('Finspace.ListEnvironments.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEnvironments.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class FinspaceResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FinspaceListTagsForResourceRequest) {
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'Finspace',
        physicalResourceId: cr.PhysicalResourceId.of('Finspace.ListTagsForResource.tags'),
        outputPath: 'tags',
        parameters: {
          resourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class FinspaceResponsesUpdateEnvironment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FinspaceUpdateEnvironmentRequest) {
  }

  public get environment(): FinspaceResponsesUpdateEnvironmentEnvironment {
    return new FinspaceResponsesUpdateEnvironmentEnvironment(this.__scope, this.__resources, this.__input);
  }

}

export class FinspaceResponsesUpdateEnvironmentEnvironment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FinspaceUpdateEnvironmentRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironment',
        service: 'Finspace',
        physicalResourceId: cr.PhysicalResourceId.of('Finspace.UpdateEnvironment.environment.name'),
        outputPath: 'environment.name',
        parameters: {
          environmentId: this.__input.environmentId,
          name: this.__input.name,
          description: this.__input.description,
          federationMode: this.__input.federationMode,
          federationParameters: {
            samlMetadataDocument: this.__input.federationParameters?.samlMetadataDocument,
            samlMetadataURL: this.__input.federationParameters?.samlMetadataURL,
            applicationCallBackURL: this.__input.federationParameters?.applicationCallBackURL,
            federationURN: this.__input.federationParameters?.federationURN,
            federationProviderName: this.__input.federationParameters?.federationProviderName,
            attributeMap: this.__input.federationParameters?.attributeMap,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironment.environment.name', props);
    return resource.getResponseField('environment.name') as unknown as string;
  }

  public get environmentId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironment',
        service: 'Finspace',
        physicalResourceId: cr.PhysicalResourceId.of('Finspace.UpdateEnvironment.environment.environmentId'),
        outputPath: 'environment.environmentId',
        parameters: {
          environmentId: this.__input.environmentId,
          name: this.__input.name,
          description: this.__input.description,
          federationMode: this.__input.federationMode,
          federationParameters: {
            samlMetadataDocument: this.__input.federationParameters?.samlMetadataDocument,
            samlMetadataURL: this.__input.federationParameters?.samlMetadataURL,
            applicationCallBackURL: this.__input.federationParameters?.applicationCallBackURL,
            federationURN: this.__input.federationParameters?.federationURN,
            federationProviderName: this.__input.federationParameters?.federationProviderName,
            attributeMap: this.__input.federationParameters?.attributeMap,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironment.environment.environmentId', props);
    return resource.getResponseField('environment.environmentId') as unknown as string;
  }

  public get awsAccountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironment',
        service: 'Finspace',
        physicalResourceId: cr.PhysicalResourceId.of('Finspace.UpdateEnvironment.environment.awsAccountId'),
        outputPath: 'environment.awsAccountId',
        parameters: {
          environmentId: this.__input.environmentId,
          name: this.__input.name,
          description: this.__input.description,
          federationMode: this.__input.federationMode,
          federationParameters: {
            samlMetadataDocument: this.__input.federationParameters?.samlMetadataDocument,
            samlMetadataURL: this.__input.federationParameters?.samlMetadataURL,
            applicationCallBackURL: this.__input.federationParameters?.applicationCallBackURL,
            federationURN: this.__input.federationParameters?.federationURN,
            federationProviderName: this.__input.federationParameters?.federationProviderName,
            attributeMap: this.__input.federationParameters?.attributeMap,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironment.environment.awsAccountId', props);
    return resource.getResponseField('environment.awsAccountId') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironment',
        service: 'Finspace',
        physicalResourceId: cr.PhysicalResourceId.of('Finspace.UpdateEnvironment.environment.status'),
        outputPath: 'environment.status',
        parameters: {
          environmentId: this.__input.environmentId,
          name: this.__input.name,
          description: this.__input.description,
          federationMode: this.__input.federationMode,
          federationParameters: {
            samlMetadataDocument: this.__input.federationParameters?.samlMetadataDocument,
            samlMetadataURL: this.__input.federationParameters?.samlMetadataURL,
            applicationCallBackURL: this.__input.federationParameters?.applicationCallBackURL,
            federationURN: this.__input.federationParameters?.federationURN,
            federationProviderName: this.__input.federationParameters?.federationProviderName,
            attributeMap: this.__input.federationParameters?.attributeMap,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironment.environment.status', props);
    return resource.getResponseField('environment.status') as unknown as string;
  }

  public get environmentUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironment',
        service: 'Finspace',
        physicalResourceId: cr.PhysicalResourceId.of('Finspace.UpdateEnvironment.environment.environmentUrl'),
        outputPath: 'environment.environmentUrl',
        parameters: {
          environmentId: this.__input.environmentId,
          name: this.__input.name,
          description: this.__input.description,
          federationMode: this.__input.federationMode,
          federationParameters: {
            samlMetadataDocument: this.__input.federationParameters?.samlMetadataDocument,
            samlMetadataURL: this.__input.federationParameters?.samlMetadataURL,
            applicationCallBackURL: this.__input.federationParameters?.applicationCallBackURL,
            federationURN: this.__input.federationParameters?.federationURN,
            federationProviderName: this.__input.federationParameters?.federationProviderName,
            attributeMap: this.__input.federationParameters?.attributeMap,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironment.environment.environmentUrl', props);
    return resource.getResponseField('environment.environmentUrl') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironment',
        service: 'Finspace',
        physicalResourceId: cr.PhysicalResourceId.of('Finspace.UpdateEnvironment.environment.description'),
        outputPath: 'environment.description',
        parameters: {
          environmentId: this.__input.environmentId,
          name: this.__input.name,
          description: this.__input.description,
          federationMode: this.__input.federationMode,
          federationParameters: {
            samlMetadataDocument: this.__input.federationParameters?.samlMetadataDocument,
            samlMetadataURL: this.__input.federationParameters?.samlMetadataURL,
            applicationCallBackURL: this.__input.federationParameters?.applicationCallBackURL,
            federationURN: this.__input.federationParameters?.federationURN,
            federationProviderName: this.__input.federationParameters?.federationProviderName,
            attributeMap: this.__input.federationParameters?.attributeMap,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironment.environment.description', props);
    return resource.getResponseField('environment.description') as unknown as string;
  }

  public get environmentArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironment',
        service: 'Finspace',
        physicalResourceId: cr.PhysicalResourceId.of('Finspace.UpdateEnvironment.environment.environmentArn'),
        outputPath: 'environment.environmentArn',
        parameters: {
          environmentId: this.__input.environmentId,
          name: this.__input.name,
          description: this.__input.description,
          federationMode: this.__input.federationMode,
          federationParameters: {
            samlMetadataDocument: this.__input.federationParameters?.samlMetadataDocument,
            samlMetadataURL: this.__input.federationParameters?.samlMetadataURL,
            applicationCallBackURL: this.__input.federationParameters?.applicationCallBackURL,
            federationURN: this.__input.federationParameters?.federationURN,
            federationProviderName: this.__input.federationParameters?.federationProviderName,
            attributeMap: this.__input.federationParameters?.attributeMap,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironment.environment.environmentArn', props);
    return resource.getResponseField('environment.environmentArn') as unknown as string;
  }

  public get sageMakerStudioDomainUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironment',
        service: 'Finspace',
        physicalResourceId: cr.PhysicalResourceId.of('Finspace.UpdateEnvironment.environment.sageMakerStudioDomainUrl'),
        outputPath: 'environment.sageMakerStudioDomainUrl',
        parameters: {
          environmentId: this.__input.environmentId,
          name: this.__input.name,
          description: this.__input.description,
          federationMode: this.__input.federationMode,
          federationParameters: {
            samlMetadataDocument: this.__input.federationParameters?.samlMetadataDocument,
            samlMetadataURL: this.__input.federationParameters?.samlMetadataURL,
            applicationCallBackURL: this.__input.federationParameters?.applicationCallBackURL,
            federationURN: this.__input.federationParameters?.federationURN,
            federationProviderName: this.__input.federationParameters?.federationProviderName,
            attributeMap: this.__input.federationParameters?.attributeMap,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironment.environment.sageMakerStudioDomainUrl', props);
    return resource.getResponseField('environment.sageMakerStudioDomainUrl') as unknown as string;
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironment',
        service: 'Finspace',
        physicalResourceId: cr.PhysicalResourceId.of('Finspace.UpdateEnvironment.environment.kmsKeyId'),
        outputPath: 'environment.kmsKeyId',
        parameters: {
          environmentId: this.__input.environmentId,
          name: this.__input.name,
          description: this.__input.description,
          federationMode: this.__input.federationMode,
          federationParameters: {
            samlMetadataDocument: this.__input.federationParameters?.samlMetadataDocument,
            samlMetadataURL: this.__input.federationParameters?.samlMetadataURL,
            applicationCallBackURL: this.__input.federationParameters?.applicationCallBackURL,
            federationURN: this.__input.federationParameters?.federationURN,
            federationProviderName: this.__input.federationParameters?.federationProviderName,
            attributeMap: this.__input.federationParameters?.attributeMap,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironment.environment.kmsKeyId', props);
    return resource.getResponseField('environment.kmsKeyId') as unknown as string;
  }

  public get dedicatedServiceAccountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironment',
        service: 'Finspace',
        physicalResourceId: cr.PhysicalResourceId.of('Finspace.UpdateEnvironment.environment.dedicatedServiceAccountId'),
        outputPath: 'environment.dedicatedServiceAccountId',
        parameters: {
          environmentId: this.__input.environmentId,
          name: this.__input.name,
          description: this.__input.description,
          federationMode: this.__input.federationMode,
          federationParameters: {
            samlMetadataDocument: this.__input.federationParameters?.samlMetadataDocument,
            samlMetadataURL: this.__input.federationParameters?.samlMetadataURL,
            applicationCallBackURL: this.__input.federationParameters?.applicationCallBackURL,
            federationURN: this.__input.federationParameters?.federationURN,
            federationProviderName: this.__input.federationParameters?.federationProviderName,
            attributeMap: this.__input.federationParameters?.attributeMap,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironment.environment.dedicatedServiceAccountId', props);
    return resource.getResponseField('environment.dedicatedServiceAccountId') as unknown as string;
  }

  public get federationMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironment',
        service: 'Finspace',
        physicalResourceId: cr.PhysicalResourceId.of('Finspace.UpdateEnvironment.environment.federationMode'),
        outputPath: 'environment.federationMode',
        parameters: {
          environmentId: this.__input.environmentId,
          name: this.__input.name,
          description: this.__input.description,
          federationMode: this.__input.federationMode,
          federationParameters: {
            samlMetadataDocument: this.__input.federationParameters?.samlMetadataDocument,
            samlMetadataURL: this.__input.federationParameters?.samlMetadataURL,
            applicationCallBackURL: this.__input.federationParameters?.applicationCallBackURL,
            federationURN: this.__input.federationParameters?.federationURN,
            federationProviderName: this.__input.federationParameters?.federationProviderName,
            attributeMap: this.__input.federationParameters?.attributeMap,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironment.environment.federationMode', props);
    return resource.getResponseField('environment.federationMode') as unknown as string;
  }

  public get federationParameters(): FinspaceResponsesUpdateEnvironmentEnvironmentFederationParameters {
    return new FinspaceResponsesUpdateEnvironmentEnvironmentFederationParameters(this.__scope, this.__resources, this.__input);
  }

}

export class FinspaceResponsesUpdateEnvironmentEnvironmentFederationParameters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FinspaceUpdateEnvironmentRequest) {
  }

  public get samlMetadataDocument(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironment',
        service: 'Finspace',
        physicalResourceId: cr.PhysicalResourceId.of('Finspace.UpdateEnvironment.environment.federationParameters.samlMetadataDocument'),
        outputPath: 'environment.federationParameters.samlMetadataDocument',
        parameters: {
          environmentId: this.__input.environmentId,
          name: this.__input.name,
          description: this.__input.description,
          federationMode: this.__input.federationMode,
          federationParameters: {
            samlMetadataDocument: this.__input.federationParameters?.samlMetadataDocument,
            samlMetadataURL: this.__input.federationParameters?.samlMetadataURL,
            applicationCallBackURL: this.__input.federationParameters?.applicationCallBackURL,
            federationURN: this.__input.federationParameters?.federationURN,
            federationProviderName: this.__input.federationParameters?.federationProviderName,
            attributeMap: this.__input.federationParameters?.attributeMap,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironment.environment.federationParameters.samlMetadataDocument', props);
    return resource.getResponseField('environment.federationParameters.samlMetadataDocument') as unknown as string;
  }

  public get samlMetadataUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironment',
        service: 'Finspace',
        physicalResourceId: cr.PhysicalResourceId.of('Finspace.UpdateEnvironment.environment.federationParameters.samlMetadataURL'),
        outputPath: 'environment.federationParameters.samlMetadataURL',
        parameters: {
          environmentId: this.__input.environmentId,
          name: this.__input.name,
          description: this.__input.description,
          federationMode: this.__input.federationMode,
          federationParameters: {
            samlMetadataDocument: this.__input.federationParameters?.samlMetadataDocument,
            samlMetadataURL: this.__input.federationParameters?.samlMetadataURL,
            applicationCallBackURL: this.__input.federationParameters?.applicationCallBackURL,
            federationURN: this.__input.federationParameters?.federationURN,
            federationProviderName: this.__input.federationParameters?.federationProviderName,
            attributeMap: this.__input.federationParameters?.attributeMap,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironment.environment.federationParameters.samlMetadataURL', props);
    return resource.getResponseField('environment.federationParameters.samlMetadataURL') as unknown as string;
  }

  public get applicationCallBackUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironment',
        service: 'Finspace',
        physicalResourceId: cr.PhysicalResourceId.of('Finspace.UpdateEnvironment.environment.federationParameters.applicationCallBackURL'),
        outputPath: 'environment.federationParameters.applicationCallBackURL',
        parameters: {
          environmentId: this.__input.environmentId,
          name: this.__input.name,
          description: this.__input.description,
          federationMode: this.__input.federationMode,
          federationParameters: {
            samlMetadataDocument: this.__input.federationParameters?.samlMetadataDocument,
            samlMetadataURL: this.__input.federationParameters?.samlMetadataURL,
            applicationCallBackURL: this.__input.federationParameters?.applicationCallBackURL,
            federationURN: this.__input.federationParameters?.federationURN,
            federationProviderName: this.__input.federationParameters?.federationProviderName,
            attributeMap: this.__input.federationParameters?.attributeMap,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironment.environment.federationParameters.applicationCallBackURL', props);
    return resource.getResponseField('environment.federationParameters.applicationCallBackURL') as unknown as string;
  }

  public get federationUrn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironment',
        service: 'Finspace',
        physicalResourceId: cr.PhysicalResourceId.of('Finspace.UpdateEnvironment.environment.federationParameters.federationURN'),
        outputPath: 'environment.federationParameters.federationURN',
        parameters: {
          environmentId: this.__input.environmentId,
          name: this.__input.name,
          description: this.__input.description,
          federationMode: this.__input.federationMode,
          federationParameters: {
            samlMetadataDocument: this.__input.federationParameters?.samlMetadataDocument,
            samlMetadataURL: this.__input.federationParameters?.samlMetadataURL,
            applicationCallBackURL: this.__input.federationParameters?.applicationCallBackURL,
            federationURN: this.__input.federationParameters?.federationURN,
            federationProviderName: this.__input.federationParameters?.federationProviderName,
            attributeMap: this.__input.federationParameters?.attributeMap,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironment.environment.federationParameters.federationURN', props);
    return resource.getResponseField('environment.federationParameters.federationURN') as unknown as string;
  }

  public get federationProviderName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironment',
        service: 'Finspace',
        physicalResourceId: cr.PhysicalResourceId.of('Finspace.UpdateEnvironment.environment.federationParameters.federationProviderName'),
        outputPath: 'environment.federationParameters.federationProviderName',
        parameters: {
          environmentId: this.__input.environmentId,
          name: this.__input.name,
          description: this.__input.description,
          federationMode: this.__input.federationMode,
          federationParameters: {
            samlMetadataDocument: this.__input.federationParameters?.samlMetadataDocument,
            samlMetadataURL: this.__input.federationParameters?.samlMetadataURL,
            applicationCallBackURL: this.__input.federationParameters?.applicationCallBackURL,
            federationURN: this.__input.federationParameters?.federationURN,
            federationProviderName: this.__input.federationParameters?.federationProviderName,
            attributeMap: this.__input.federationParameters?.attributeMap,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironment.environment.federationParameters.federationProviderName', props);
    return resource.getResponseField('environment.federationParameters.federationProviderName') as unknown as string;
  }

  public get attributeMap(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironment',
        service: 'Finspace',
        physicalResourceId: cr.PhysicalResourceId.of('Finspace.UpdateEnvironment.environment.federationParameters.attributeMap'),
        outputPath: 'environment.federationParameters.attributeMap',
        parameters: {
          environmentId: this.__input.environmentId,
          name: this.__input.name,
          description: this.__input.description,
          federationMode: this.__input.federationMode,
          federationParameters: {
            samlMetadataDocument: this.__input.federationParameters?.samlMetadataDocument,
            samlMetadataURL: this.__input.federationParameters?.samlMetadataURL,
            applicationCallBackURL: this.__input.federationParameters?.applicationCallBackURL,
            federationURN: this.__input.federationParameters?.federationURN,
            federationProviderName: this.__input.federationParameters?.federationProviderName,
            attributeMap: this.__input.federationParameters?.attributeMap,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironment.environment.federationParameters.attributeMap', props);
    return resource.getResponseField('environment.federationParameters.attributeMap') as unknown as Record<string, string>;
  }

}

