import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class ImagebuilderClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public cancelImageCreation(input: shapes.ImagebuilderCancelImageCreationRequest): ImagebuilderCancelImageCreation {
    return new ImagebuilderCancelImageCreation(this, 'CancelImageCreation', this.__resources, input);
  }

  public createComponent(input: shapes.ImagebuilderCreateComponentRequest): ImagebuilderCreateComponent {
    return new ImagebuilderCreateComponent(this, 'CreateComponent', this.__resources, input);
  }

  public createDistributionConfiguration(input: shapes.ImagebuilderCreateDistributionConfigurationRequest): ImagebuilderCreateDistributionConfiguration {
    return new ImagebuilderCreateDistributionConfiguration(this, 'CreateDistributionConfiguration', this.__resources, input);
  }

  public createImage(input: shapes.ImagebuilderCreateImageRequest): ImagebuilderCreateImage {
    return new ImagebuilderCreateImage(this, 'CreateImage', this.__resources, input);
  }

  public createImagePipeline(input: shapes.ImagebuilderCreateImagePipelineRequest): ImagebuilderCreateImagePipeline {
    return new ImagebuilderCreateImagePipeline(this, 'CreateImagePipeline', this.__resources, input);
  }

  public createImageRecipe(input: shapes.ImagebuilderCreateImageRecipeRequest): ImagebuilderCreateImageRecipe {
    return new ImagebuilderCreateImageRecipe(this, 'CreateImageRecipe', this.__resources, input);
  }

  public createInfrastructureConfiguration(input: shapes.ImagebuilderCreateInfrastructureConfigurationRequest): ImagebuilderCreateInfrastructureConfiguration {
    return new ImagebuilderCreateInfrastructureConfiguration(this, 'CreateInfrastructureConfiguration', this.__resources, input);
  }

  public deleteComponent(input: shapes.ImagebuilderDeleteComponentRequest): ImagebuilderDeleteComponent {
    return new ImagebuilderDeleteComponent(this, 'DeleteComponent', this.__resources, input);
  }

  public deleteDistributionConfiguration(input: shapes.ImagebuilderDeleteDistributionConfigurationRequest): ImagebuilderDeleteDistributionConfiguration {
    return new ImagebuilderDeleteDistributionConfiguration(this, 'DeleteDistributionConfiguration', this.__resources, input);
  }

  public deleteImage(input: shapes.ImagebuilderDeleteImageRequest): ImagebuilderDeleteImage {
    return new ImagebuilderDeleteImage(this, 'DeleteImage', this.__resources, input);
  }

  public deleteImagePipeline(input: shapes.ImagebuilderDeleteImagePipelineRequest): ImagebuilderDeleteImagePipeline {
    return new ImagebuilderDeleteImagePipeline(this, 'DeleteImagePipeline', this.__resources, input);
  }

  public deleteImageRecipe(input: shapes.ImagebuilderDeleteImageRecipeRequest): ImagebuilderDeleteImageRecipe {
    return new ImagebuilderDeleteImageRecipe(this, 'DeleteImageRecipe', this.__resources, input);
  }

  public deleteInfrastructureConfiguration(input: shapes.ImagebuilderDeleteInfrastructureConfigurationRequest): ImagebuilderDeleteInfrastructureConfiguration {
    return new ImagebuilderDeleteInfrastructureConfiguration(this, 'DeleteInfrastructureConfiguration', this.__resources, input);
  }

  public fetchComponent(input: shapes.ImagebuilderGetComponentRequest): ImagebuilderFetchComponent {
    return new ImagebuilderFetchComponent(this, 'FetchComponent', this.__resources, input);
  }

  public fetchComponentPolicy(input: shapes.ImagebuilderGetComponentPolicyRequest): ImagebuilderFetchComponentPolicy {
    return new ImagebuilderFetchComponentPolicy(this, 'FetchComponentPolicy', this.__resources, input);
  }

  public fetchDistributionConfiguration(input: shapes.ImagebuilderGetDistributionConfigurationRequest): ImagebuilderFetchDistributionConfiguration {
    return new ImagebuilderFetchDistributionConfiguration(this, 'FetchDistributionConfiguration', this.__resources, input);
  }

  public fetchImage(input: shapes.ImagebuilderGetImageRequest): ImagebuilderFetchImage {
    return new ImagebuilderFetchImage(this, 'FetchImage', this.__resources, input);
  }

  public fetchImagePipeline(input: shapes.ImagebuilderGetImagePipelineRequest): ImagebuilderFetchImagePipeline {
    return new ImagebuilderFetchImagePipeline(this, 'FetchImagePipeline', this.__resources, input);
  }

  public fetchImagePolicy(input: shapes.ImagebuilderGetImagePolicyRequest): ImagebuilderFetchImagePolicy {
    return new ImagebuilderFetchImagePolicy(this, 'FetchImagePolicy', this.__resources, input);
  }

  public fetchImageRecipe(input: shapes.ImagebuilderGetImageRecipeRequest): ImagebuilderFetchImageRecipe {
    return new ImagebuilderFetchImageRecipe(this, 'FetchImageRecipe', this.__resources, input);
  }

  public fetchImageRecipePolicy(input: shapes.ImagebuilderGetImageRecipePolicyRequest): ImagebuilderFetchImageRecipePolicy {
    return new ImagebuilderFetchImageRecipePolicy(this, 'FetchImageRecipePolicy', this.__resources, input);
  }

  public fetchInfrastructureConfiguration(input: shapes.ImagebuilderGetInfrastructureConfigurationRequest): ImagebuilderFetchInfrastructureConfiguration {
    return new ImagebuilderFetchInfrastructureConfiguration(this, 'FetchInfrastructureConfiguration', this.__resources, input);
  }

  public importComponent(input: shapes.ImagebuilderImportComponentRequest): ImagebuilderImportComponent {
    return new ImagebuilderImportComponent(this, 'ImportComponent', this.__resources, input);
  }

  public listComponentBuildVersions(input: shapes.ImagebuilderListComponentBuildVersionsRequest): ImagebuilderListComponentBuildVersions {
    return new ImagebuilderListComponentBuildVersions(this, 'ListComponentBuildVersions', this.__resources, input);
  }

  public listComponents(input: shapes.ImagebuilderListComponentsRequest): ImagebuilderListComponents {
    return new ImagebuilderListComponents(this, 'ListComponents', this.__resources, input);
  }

  public listDistributionConfigurations(input: shapes.ImagebuilderListDistributionConfigurationsRequest): ImagebuilderListDistributionConfigurations {
    return new ImagebuilderListDistributionConfigurations(this, 'ListDistributionConfigurations', this.__resources, input);
  }

  public listImageBuildVersions(input: shapes.ImagebuilderListImageBuildVersionsRequest): ImagebuilderListImageBuildVersions {
    return new ImagebuilderListImageBuildVersions(this, 'ListImageBuildVersions', this.__resources, input);
  }

  public listImagePipelineImages(input: shapes.ImagebuilderListImagePipelineImagesRequest): ImagebuilderListImagePipelineImages {
    return new ImagebuilderListImagePipelineImages(this, 'ListImagePipelineImages', this.__resources, input);
  }

  public listImagePipelines(input: shapes.ImagebuilderListImagePipelinesRequest): ImagebuilderListImagePipelines {
    return new ImagebuilderListImagePipelines(this, 'ListImagePipelines', this.__resources, input);
  }

  public listImageRecipes(input: shapes.ImagebuilderListImageRecipesRequest): ImagebuilderListImageRecipes {
    return new ImagebuilderListImageRecipes(this, 'ListImageRecipes', this.__resources, input);
  }

  public listImages(input: shapes.ImagebuilderListImagesRequest): ImagebuilderListImages {
    return new ImagebuilderListImages(this, 'ListImages', this.__resources, input);
  }

  public listInfrastructureConfigurations(input: shapes.ImagebuilderListInfrastructureConfigurationsRequest): ImagebuilderListInfrastructureConfigurations {
    return new ImagebuilderListInfrastructureConfigurations(this, 'ListInfrastructureConfigurations', this.__resources, input);
  }

  public listTagsForResource(input: shapes.ImagebuilderListTagsForResourceRequest): ImagebuilderListTagsForResource {
    return new ImagebuilderListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public putComponentPolicy(input: shapes.ImagebuilderPutComponentPolicyRequest): ImagebuilderPutComponentPolicy {
    return new ImagebuilderPutComponentPolicy(this, 'PutComponentPolicy', this.__resources, input);
  }

  public putImagePolicy(input: shapes.ImagebuilderPutImagePolicyRequest): ImagebuilderPutImagePolicy {
    return new ImagebuilderPutImagePolicy(this, 'PutImagePolicy', this.__resources, input);
  }

  public putImageRecipePolicy(input: shapes.ImagebuilderPutImageRecipePolicyRequest): ImagebuilderPutImageRecipePolicy {
    return new ImagebuilderPutImageRecipePolicy(this, 'PutImageRecipePolicy', this.__resources, input);
  }

  public startImagePipelineExecution(input: shapes.ImagebuilderStartImagePipelineExecutionRequest): ImagebuilderStartImagePipelineExecution {
    return new ImagebuilderStartImagePipelineExecution(this, 'StartImagePipelineExecution', this.__resources, input);
  }

  public tagResource(input: shapes.ImagebuilderTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.TagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.ImagebuilderUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.UntagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateDistributionConfiguration(input: shapes.ImagebuilderUpdateDistributionConfigurationRequest): ImagebuilderUpdateDistributionConfiguration {
    return new ImagebuilderUpdateDistributionConfiguration(this, 'UpdateDistributionConfiguration', this.__resources, input);
  }

  public updateImagePipeline(input: shapes.ImagebuilderUpdateImagePipelineRequest): ImagebuilderUpdateImagePipeline {
    return new ImagebuilderUpdateImagePipeline(this, 'UpdateImagePipeline', this.__resources, input);
  }

  public updateInfrastructureConfiguration(input: shapes.ImagebuilderUpdateInfrastructureConfigurationRequest): ImagebuilderUpdateInfrastructureConfiguration {
    return new ImagebuilderUpdateInfrastructureConfiguration(this, 'UpdateInfrastructureConfiguration', this.__resources, input);
  }

}

export class ImagebuilderCancelImageCreation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ImagebuilderCancelImageCreationRequest) {
    super(scope, id);
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelImageCreation',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.CancelImageCreation.requestId'),
        outputPath: 'requestId',
        parameters: {
          imageBuildVersionArn: this.input.imageBuildVersionArn,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CancelImageCreation.requestId', props);
    return resource.getResponseField('requestId') as unknown as string;
  }

  public get clientToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelImageCreation',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.CancelImageCreation.clientToken'),
        outputPath: 'clientToken',
        parameters: {
          imageBuildVersionArn: this.input.imageBuildVersionArn,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CancelImageCreation.clientToken', props);
    return resource.getResponseField('clientToken') as unknown as string;
  }

  public get imageBuildVersionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelImageCreation',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.CancelImageCreation.imageBuildVersionArn'),
        outputPath: 'imageBuildVersionArn',
        parameters: {
          imageBuildVersionArn: this.input.imageBuildVersionArn,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CancelImageCreation.imageBuildVersionArn', props);
    return resource.getResponseField('imageBuildVersionArn') as unknown as string;
  }

}

export class ImagebuilderCreateComponent extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ImagebuilderCreateComponentRequest) {
    super(scope, id);
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createComponent',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.CreateComponent.requestId'),
        outputPath: 'requestId',
        parameters: {
          name: this.input.name,
          semanticVersion: this.input.semanticVersion,
          description: this.input.description,
          changeDescription: this.input.changeDescription,
          platform: this.input.platform,
          supportedOsVersions: this.input.supportedOsVersions,
          data: this.input.data,
          uri: this.input.uri,
          kmsKeyId: this.input.kmsKeyId,
          tags: this.input.tags,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateComponent.requestId', props);
    return resource.getResponseField('requestId') as unknown as string;
  }

  public get clientToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createComponent',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.CreateComponent.clientToken'),
        outputPath: 'clientToken',
        parameters: {
          name: this.input.name,
          semanticVersion: this.input.semanticVersion,
          description: this.input.description,
          changeDescription: this.input.changeDescription,
          platform: this.input.platform,
          supportedOsVersions: this.input.supportedOsVersions,
          data: this.input.data,
          uri: this.input.uri,
          kmsKeyId: this.input.kmsKeyId,
          tags: this.input.tags,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateComponent.clientToken', props);
    return resource.getResponseField('clientToken') as unknown as string;
  }

  public get componentBuildVersionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createComponent',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.CreateComponent.componentBuildVersionArn'),
        outputPath: 'componentBuildVersionArn',
        parameters: {
          name: this.input.name,
          semanticVersion: this.input.semanticVersion,
          description: this.input.description,
          changeDescription: this.input.changeDescription,
          platform: this.input.platform,
          supportedOsVersions: this.input.supportedOsVersions,
          data: this.input.data,
          uri: this.input.uri,
          kmsKeyId: this.input.kmsKeyId,
          tags: this.input.tags,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateComponent.componentBuildVersionArn', props);
    return resource.getResponseField('componentBuildVersionArn') as unknown as string;
  }

}

export class ImagebuilderCreateDistributionConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ImagebuilderCreateDistributionConfigurationRequest) {
    super(scope, id);
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDistributionConfiguration',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.CreateDistributionConfiguration.requestId'),
        outputPath: 'requestId',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          distributions: this.input.distributions,
          tags: this.input.tags,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionConfiguration.requestId', props);
    return resource.getResponseField('requestId') as unknown as string;
  }

  public get clientToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDistributionConfiguration',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.CreateDistributionConfiguration.clientToken'),
        outputPath: 'clientToken',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          distributions: this.input.distributions,
          tags: this.input.tags,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionConfiguration.clientToken', props);
    return resource.getResponseField('clientToken') as unknown as string;
  }

  public get distributionConfigurationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDistributionConfiguration',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.CreateDistributionConfiguration.distributionConfigurationArn'),
        outputPath: 'distributionConfigurationArn',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          distributions: this.input.distributions,
          tags: this.input.tags,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistributionConfiguration.distributionConfigurationArn', props);
    return resource.getResponseField('distributionConfigurationArn') as unknown as string;
  }

}

export class ImagebuilderCreateImage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ImagebuilderCreateImageRequest) {
    super(scope, id);
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.CreateImage.requestId'),
        outputPath: 'requestId',
        parameters: {
          imageRecipeArn: this.input.imageRecipeArn,
          distributionConfigurationArn: this.input.distributionConfigurationArn,
          infrastructureConfigurationArn: this.input.infrastructureConfigurationArn,
          imageTestsConfiguration: {
            imageTestsEnabled: this.input.imageTestsConfiguration?.imageTestsEnabled,
            timeoutMinutes: this.input.imageTestsConfiguration?.timeoutMinutes,
          },
          enhancedImageMetadataEnabled: this.input.enhancedImageMetadataEnabled,
          tags: this.input.tags,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateImage.requestId', props);
    return resource.getResponseField('requestId') as unknown as string;
  }

  public get clientToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.CreateImage.clientToken'),
        outputPath: 'clientToken',
        parameters: {
          imageRecipeArn: this.input.imageRecipeArn,
          distributionConfigurationArn: this.input.distributionConfigurationArn,
          infrastructureConfigurationArn: this.input.infrastructureConfigurationArn,
          imageTestsConfiguration: {
            imageTestsEnabled: this.input.imageTestsConfiguration?.imageTestsEnabled,
            timeoutMinutes: this.input.imageTestsConfiguration?.timeoutMinutes,
          },
          enhancedImageMetadataEnabled: this.input.enhancedImageMetadataEnabled,
          tags: this.input.tags,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateImage.clientToken', props);
    return resource.getResponseField('clientToken') as unknown as string;
  }

  public get imageBuildVersionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.CreateImage.imageBuildVersionArn'),
        outputPath: 'imageBuildVersionArn',
        parameters: {
          imageRecipeArn: this.input.imageRecipeArn,
          distributionConfigurationArn: this.input.distributionConfigurationArn,
          infrastructureConfigurationArn: this.input.infrastructureConfigurationArn,
          imageTestsConfiguration: {
            imageTestsEnabled: this.input.imageTestsConfiguration?.imageTestsEnabled,
            timeoutMinutes: this.input.imageTestsConfiguration?.timeoutMinutes,
          },
          enhancedImageMetadataEnabled: this.input.enhancedImageMetadataEnabled,
          tags: this.input.tags,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateImage.imageBuildVersionArn', props);
    return resource.getResponseField('imageBuildVersionArn') as unknown as string;
  }

}

export class ImagebuilderCreateImagePipeline extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ImagebuilderCreateImagePipelineRequest) {
    super(scope, id);
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createImagePipeline',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.CreateImagePipeline.requestId'),
        outputPath: 'requestId',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          imageRecipeArn: this.input.imageRecipeArn,
          infrastructureConfigurationArn: this.input.infrastructureConfigurationArn,
          distributionConfigurationArn: this.input.distributionConfigurationArn,
          imageTestsConfiguration: {
            imageTestsEnabled: this.input.imageTestsConfiguration?.imageTestsEnabled,
            timeoutMinutes: this.input.imageTestsConfiguration?.timeoutMinutes,
          },
          enhancedImageMetadataEnabled: this.input.enhancedImageMetadataEnabled,
          schedule: {
            scheduleExpression: this.input.schedule?.scheduleExpression,
            pipelineExecutionStartCondition: this.input.schedule?.pipelineExecutionStartCondition,
          },
          status: this.input.status,
          tags: this.input.tags,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateImagePipeline.requestId', props);
    return resource.getResponseField('requestId') as unknown as string;
  }

  public get clientToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createImagePipeline',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.CreateImagePipeline.clientToken'),
        outputPath: 'clientToken',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          imageRecipeArn: this.input.imageRecipeArn,
          infrastructureConfigurationArn: this.input.infrastructureConfigurationArn,
          distributionConfigurationArn: this.input.distributionConfigurationArn,
          imageTestsConfiguration: {
            imageTestsEnabled: this.input.imageTestsConfiguration?.imageTestsEnabled,
            timeoutMinutes: this.input.imageTestsConfiguration?.timeoutMinutes,
          },
          enhancedImageMetadataEnabled: this.input.enhancedImageMetadataEnabled,
          schedule: {
            scheduleExpression: this.input.schedule?.scheduleExpression,
            pipelineExecutionStartCondition: this.input.schedule?.pipelineExecutionStartCondition,
          },
          status: this.input.status,
          tags: this.input.tags,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateImagePipeline.clientToken', props);
    return resource.getResponseField('clientToken') as unknown as string;
  }

  public get imagePipelineArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createImagePipeline',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.CreateImagePipeline.imagePipelineArn'),
        outputPath: 'imagePipelineArn',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          imageRecipeArn: this.input.imageRecipeArn,
          infrastructureConfigurationArn: this.input.infrastructureConfigurationArn,
          distributionConfigurationArn: this.input.distributionConfigurationArn,
          imageTestsConfiguration: {
            imageTestsEnabled: this.input.imageTestsConfiguration?.imageTestsEnabled,
            timeoutMinutes: this.input.imageTestsConfiguration?.timeoutMinutes,
          },
          enhancedImageMetadataEnabled: this.input.enhancedImageMetadataEnabled,
          schedule: {
            scheduleExpression: this.input.schedule?.scheduleExpression,
            pipelineExecutionStartCondition: this.input.schedule?.pipelineExecutionStartCondition,
          },
          status: this.input.status,
          tags: this.input.tags,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateImagePipeline.imagePipelineArn', props);
    return resource.getResponseField('imagePipelineArn') as unknown as string;
  }

}

export class ImagebuilderCreateImageRecipe extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ImagebuilderCreateImageRecipeRequest) {
    super(scope, id);
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createImageRecipe',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.CreateImageRecipe.requestId'),
        outputPath: 'requestId',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          semanticVersion: this.input.semanticVersion,
          components: this.input.components,
          parentImage: this.input.parentImage,
          blockDeviceMappings: this.input.blockDeviceMappings,
          tags: this.input.tags,
          workingDirectory: this.input.workingDirectory,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateImageRecipe.requestId', props);
    return resource.getResponseField('requestId') as unknown as string;
  }

  public get clientToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createImageRecipe',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.CreateImageRecipe.clientToken'),
        outputPath: 'clientToken',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          semanticVersion: this.input.semanticVersion,
          components: this.input.components,
          parentImage: this.input.parentImage,
          blockDeviceMappings: this.input.blockDeviceMappings,
          tags: this.input.tags,
          workingDirectory: this.input.workingDirectory,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateImageRecipe.clientToken', props);
    return resource.getResponseField('clientToken') as unknown as string;
  }

  public get imageRecipeArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createImageRecipe',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.CreateImageRecipe.imageRecipeArn'),
        outputPath: 'imageRecipeArn',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          semanticVersion: this.input.semanticVersion,
          components: this.input.components,
          parentImage: this.input.parentImage,
          blockDeviceMappings: this.input.blockDeviceMappings,
          tags: this.input.tags,
          workingDirectory: this.input.workingDirectory,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateImageRecipe.imageRecipeArn', props);
    return resource.getResponseField('imageRecipeArn') as unknown as string;
  }

}

export class ImagebuilderCreateInfrastructureConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ImagebuilderCreateInfrastructureConfigurationRequest) {
    super(scope, id);
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createInfrastructureConfiguration',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.CreateInfrastructureConfiguration.requestId'),
        outputPath: 'requestId',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          instanceTypes: this.input.instanceTypes,
          instanceProfileName: this.input.instanceProfileName,
          securityGroupIds: this.input.securityGroupIds,
          subnetId: this.input.subnetId,
          logging: {
            s3Logs: {
              s3BucketName: this.input.logging?.s3Logs?.s3BucketName,
              s3KeyPrefix: this.input.logging?.s3Logs?.s3KeyPrefix,
            },
          },
          keyPair: this.input.keyPair,
          terminateInstanceOnFailure: this.input.terminateInstanceOnFailure,
          snsTopicArn: this.input.snsTopicArn,
          resourceTags: this.input.resourceTags,
          tags: this.input.tags,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateInfrastructureConfiguration.requestId', props);
    return resource.getResponseField('requestId') as unknown as string;
  }

  public get clientToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createInfrastructureConfiguration',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.CreateInfrastructureConfiguration.clientToken'),
        outputPath: 'clientToken',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          instanceTypes: this.input.instanceTypes,
          instanceProfileName: this.input.instanceProfileName,
          securityGroupIds: this.input.securityGroupIds,
          subnetId: this.input.subnetId,
          logging: {
            s3Logs: {
              s3BucketName: this.input.logging?.s3Logs?.s3BucketName,
              s3KeyPrefix: this.input.logging?.s3Logs?.s3KeyPrefix,
            },
          },
          keyPair: this.input.keyPair,
          terminateInstanceOnFailure: this.input.terminateInstanceOnFailure,
          snsTopicArn: this.input.snsTopicArn,
          resourceTags: this.input.resourceTags,
          tags: this.input.tags,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateInfrastructureConfiguration.clientToken', props);
    return resource.getResponseField('clientToken') as unknown as string;
  }

  public get infrastructureConfigurationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createInfrastructureConfiguration',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.CreateInfrastructureConfiguration.infrastructureConfigurationArn'),
        outputPath: 'infrastructureConfigurationArn',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          instanceTypes: this.input.instanceTypes,
          instanceProfileName: this.input.instanceProfileName,
          securityGroupIds: this.input.securityGroupIds,
          subnetId: this.input.subnetId,
          logging: {
            s3Logs: {
              s3BucketName: this.input.logging?.s3Logs?.s3BucketName,
              s3KeyPrefix: this.input.logging?.s3Logs?.s3KeyPrefix,
            },
          },
          keyPair: this.input.keyPair,
          terminateInstanceOnFailure: this.input.terminateInstanceOnFailure,
          snsTopicArn: this.input.snsTopicArn,
          resourceTags: this.input.resourceTags,
          tags: this.input.tags,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateInfrastructureConfiguration.infrastructureConfigurationArn', props);
    return resource.getResponseField('infrastructureConfigurationArn') as unknown as string;
  }

}

export class ImagebuilderDeleteComponent extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ImagebuilderDeleteComponentRequest) {
    super(scope, id);
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteComponent',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.DeleteComponent.requestId'),
        outputPath: 'requestId',
        parameters: {
          componentBuildVersionArn: this.input.componentBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteComponent.requestId', props);
    return resource.getResponseField('requestId') as unknown as string;
  }

  public get componentBuildVersionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteComponent',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.DeleteComponent.componentBuildVersionArn'),
        outputPath: 'componentBuildVersionArn',
        parameters: {
          componentBuildVersionArn: this.input.componentBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteComponent.componentBuildVersionArn', props);
    return resource.getResponseField('componentBuildVersionArn') as unknown as string;
  }

}

export class ImagebuilderDeleteDistributionConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ImagebuilderDeleteDistributionConfigurationRequest) {
    super(scope, id);
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDistributionConfiguration',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.DeleteDistributionConfiguration.requestId'),
        outputPath: 'requestId',
        parameters: {
          distributionConfigurationArn: this.input.distributionConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDistributionConfiguration.requestId', props);
    return resource.getResponseField('requestId') as unknown as string;
  }

  public get distributionConfigurationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDistributionConfiguration',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.DeleteDistributionConfiguration.distributionConfigurationArn'),
        outputPath: 'distributionConfigurationArn',
        parameters: {
          distributionConfigurationArn: this.input.distributionConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDistributionConfiguration.distributionConfigurationArn', props);
    return resource.getResponseField('distributionConfigurationArn') as unknown as string;
  }

}

export class ImagebuilderDeleteImage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ImagebuilderDeleteImageRequest) {
    super(scope, id);
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.DeleteImage.requestId'),
        outputPath: 'requestId',
        parameters: {
          imageBuildVersionArn: this.input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteImage.requestId', props);
    return resource.getResponseField('requestId') as unknown as string;
  }

  public get imageBuildVersionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.DeleteImage.imageBuildVersionArn'),
        outputPath: 'imageBuildVersionArn',
        parameters: {
          imageBuildVersionArn: this.input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteImage.imageBuildVersionArn', props);
    return resource.getResponseField('imageBuildVersionArn') as unknown as string;
  }

}

export class ImagebuilderDeleteImagePipeline extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ImagebuilderDeleteImagePipelineRequest) {
    super(scope, id);
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteImagePipeline',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.DeleteImagePipeline.requestId'),
        outputPath: 'requestId',
        parameters: {
          imagePipelineArn: this.input.imagePipelineArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteImagePipeline.requestId', props);
    return resource.getResponseField('requestId') as unknown as string;
  }

  public get imagePipelineArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteImagePipeline',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.DeleteImagePipeline.imagePipelineArn'),
        outputPath: 'imagePipelineArn',
        parameters: {
          imagePipelineArn: this.input.imagePipelineArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteImagePipeline.imagePipelineArn', props);
    return resource.getResponseField('imagePipelineArn') as unknown as string;
  }

}

export class ImagebuilderDeleteImageRecipe extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ImagebuilderDeleteImageRecipeRequest) {
    super(scope, id);
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteImageRecipe',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.DeleteImageRecipe.requestId'),
        outputPath: 'requestId',
        parameters: {
          imageRecipeArn: this.input.imageRecipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteImageRecipe.requestId', props);
    return resource.getResponseField('requestId') as unknown as string;
  }

  public get imageRecipeArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteImageRecipe',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.DeleteImageRecipe.imageRecipeArn'),
        outputPath: 'imageRecipeArn',
        parameters: {
          imageRecipeArn: this.input.imageRecipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteImageRecipe.imageRecipeArn', props);
    return resource.getResponseField('imageRecipeArn') as unknown as string;
  }

}

export class ImagebuilderDeleteInfrastructureConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ImagebuilderDeleteInfrastructureConfigurationRequest) {
    super(scope, id);
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteInfrastructureConfiguration',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.DeleteInfrastructureConfiguration.requestId'),
        outputPath: 'requestId',
        parameters: {
          infrastructureConfigurationArn: this.input.infrastructureConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteInfrastructureConfiguration.requestId', props);
    return resource.getResponseField('requestId') as unknown as string;
  }

  public get infrastructureConfigurationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteInfrastructureConfiguration',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.DeleteInfrastructureConfiguration.infrastructureConfigurationArn'),
        outputPath: 'infrastructureConfigurationArn',
        parameters: {
          infrastructureConfigurationArn: this.input.infrastructureConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteInfrastructureConfiguration.infrastructureConfigurationArn', props);
    return resource.getResponseField('infrastructureConfigurationArn') as unknown as string;
  }

}

export class ImagebuilderFetchComponent extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ImagebuilderGetComponentRequest) {
    super(scope, id);
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getComponent',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetComponent.requestId'),
        outputPath: 'requestId',
        parameters: {
          componentBuildVersionArn: this.input.componentBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetComponent.requestId', props);
    return resource.getResponseField('requestId') as unknown as string;
  }

  public get component(): ImagebuilderFetchComponentComponent {
    return new ImagebuilderFetchComponentComponent(this, 'Component', this.__resources, this.input);
  }

}

export class ImagebuilderFetchComponentComponent extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ImagebuilderGetComponentRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getComponent',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetComponent.component.arn'),
        outputPath: 'component.arn',
        parameters: {
          componentBuildVersionArn: this.input.componentBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetComponent.component.arn', props);
    return resource.getResponseField('component.arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getComponent',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetComponent.component.name'),
        outputPath: 'component.name',
        parameters: {
          componentBuildVersionArn: this.input.componentBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetComponent.component.name', props);
    return resource.getResponseField('component.name') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getComponent',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetComponent.component.version'),
        outputPath: 'component.version',
        parameters: {
          componentBuildVersionArn: this.input.componentBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetComponent.component.version', props);
    return resource.getResponseField('component.version') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getComponent',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetComponent.component.description'),
        outputPath: 'component.description',
        parameters: {
          componentBuildVersionArn: this.input.componentBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetComponent.component.description', props);
    return resource.getResponseField('component.description') as unknown as string;
  }

  public get changeDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getComponent',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetComponent.component.changeDescription'),
        outputPath: 'component.changeDescription',
        parameters: {
          componentBuildVersionArn: this.input.componentBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetComponent.component.changeDescription', props);
    return resource.getResponseField('component.changeDescription') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getComponent',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetComponent.component.type'),
        outputPath: 'component.type',
        parameters: {
          componentBuildVersionArn: this.input.componentBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetComponent.component.type', props);
    return resource.getResponseField('component.type') as unknown as string;
  }

  public get platform(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getComponent',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetComponent.component.platform'),
        outputPath: 'component.platform',
        parameters: {
          componentBuildVersionArn: this.input.componentBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetComponent.component.platform', props);
    return resource.getResponseField('component.platform') as unknown as string;
  }

  public get supportedOsVersions(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getComponent',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetComponent.component.supportedOsVersions'),
        outputPath: 'component.supportedOsVersions',
        parameters: {
          componentBuildVersionArn: this.input.componentBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetComponent.component.supportedOsVersions', props);
    return resource.getResponseField('component.supportedOsVersions') as unknown as string[];
  }

  public get owner(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getComponent',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetComponent.component.owner'),
        outputPath: 'component.owner',
        parameters: {
          componentBuildVersionArn: this.input.componentBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetComponent.component.owner', props);
    return resource.getResponseField('component.owner') as unknown as string;
  }

  public get data(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getComponent',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetComponent.component.data'),
        outputPath: 'component.data',
        parameters: {
          componentBuildVersionArn: this.input.componentBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetComponent.component.data', props);
    return resource.getResponseField('component.data') as unknown as string;
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getComponent',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetComponent.component.kmsKeyId'),
        outputPath: 'component.kmsKeyId',
        parameters: {
          componentBuildVersionArn: this.input.componentBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetComponent.component.kmsKeyId', props);
    return resource.getResponseField('component.kmsKeyId') as unknown as string;
  }

  public get encrypted(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getComponent',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetComponent.component.encrypted'),
        outputPath: 'component.encrypted',
        parameters: {
          componentBuildVersionArn: this.input.componentBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetComponent.component.encrypted', props);
    return resource.getResponseField('component.encrypted') as unknown as boolean;
  }

  public get dateCreated(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getComponent',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetComponent.component.dateCreated'),
        outputPath: 'component.dateCreated',
        parameters: {
          componentBuildVersionArn: this.input.componentBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetComponent.component.dateCreated', props);
    return resource.getResponseField('component.dateCreated') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getComponent',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetComponent.component.tags'),
        outputPath: 'component.tags',
        parameters: {
          componentBuildVersionArn: this.input.componentBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetComponent.component.tags', props);
    return resource.getResponseField('component.tags') as unknown as Record<string, string>;
  }

}

export class ImagebuilderFetchComponentPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ImagebuilderGetComponentPolicyRequest) {
    super(scope, id);
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getComponentPolicy',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetComponentPolicy.requestId'),
        outputPath: 'requestId',
        parameters: {
          componentArn: this.input.componentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetComponentPolicy.requestId', props);
    return resource.getResponseField('requestId') as unknown as string;
  }

  public get policy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getComponentPolicy',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetComponentPolicy.policy'),
        outputPath: 'policy',
        parameters: {
          componentArn: this.input.componentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetComponentPolicy.policy', props);
    return resource.getResponseField('policy') as unknown as string;
  }

}

export class ImagebuilderFetchDistributionConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ImagebuilderGetDistributionConfigurationRequest) {
    super(scope, id);
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDistributionConfiguration',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetDistributionConfiguration.requestId'),
        outputPath: 'requestId',
        parameters: {
          distributionConfigurationArn: this.input.distributionConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfiguration.requestId', props);
    return resource.getResponseField('requestId') as unknown as string;
  }

  public get distributionConfiguration(): ImagebuilderFetchDistributionConfigurationDistributionConfiguration {
    return new ImagebuilderFetchDistributionConfigurationDistributionConfiguration(this, 'DistributionConfiguration', this.__resources, this.input);
  }

}

export class ImagebuilderFetchDistributionConfigurationDistributionConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ImagebuilderGetDistributionConfigurationRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDistributionConfiguration',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetDistributionConfiguration.distributionConfiguration.arn'),
        outputPath: 'distributionConfiguration.arn',
        parameters: {
          distributionConfigurationArn: this.input.distributionConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfiguration.distributionConfiguration.arn', props);
    return resource.getResponseField('distributionConfiguration.arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDistributionConfiguration',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetDistributionConfiguration.distributionConfiguration.name'),
        outputPath: 'distributionConfiguration.name',
        parameters: {
          distributionConfigurationArn: this.input.distributionConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfiguration.distributionConfiguration.name', props);
    return resource.getResponseField('distributionConfiguration.name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDistributionConfiguration',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetDistributionConfiguration.distributionConfiguration.description'),
        outputPath: 'distributionConfiguration.description',
        parameters: {
          distributionConfigurationArn: this.input.distributionConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfiguration.distributionConfiguration.description', props);
    return resource.getResponseField('distributionConfiguration.description') as unknown as string;
  }

  public get distributions(): shapes.ImagebuilderDistribution[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDistributionConfiguration',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetDistributionConfiguration.distributionConfiguration.distributions'),
        outputPath: 'distributionConfiguration.distributions',
        parameters: {
          distributionConfigurationArn: this.input.distributionConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfiguration.distributionConfiguration.distributions', props);
    return resource.getResponseField('distributionConfiguration.distributions') as unknown as shapes.ImagebuilderDistribution[];
  }

  public get timeoutMinutes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDistributionConfiguration',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetDistributionConfiguration.distributionConfiguration.timeoutMinutes'),
        outputPath: 'distributionConfiguration.timeoutMinutes',
        parameters: {
          distributionConfigurationArn: this.input.distributionConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfiguration.distributionConfiguration.timeoutMinutes', props);
    return resource.getResponseField('distributionConfiguration.timeoutMinutes') as unknown as number;
  }

  public get dateCreated(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDistributionConfiguration',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetDistributionConfiguration.distributionConfiguration.dateCreated'),
        outputPath: 'distributionConfiguration.dateCreated',
        parameters: {
          distributionConfigurationArn: this.input.distributionConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfiguration.distributionConfiguration.dateCreated', props);
    return resource.getResponseField('distributionConfiguration.dateCreated') as unknown as string;
  }

  public get dateUpdated(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDistributionConfiguration',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetDistributionConfiguration.distributionConfiguration.dateUpdated'),
        outputPath: 'distributionConfiguration.dateUpdated',
        parameters: {
          distributionConfigurationArn: this.input.distributionConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfiguration.distributionConfiguration.dateUpdated', props);
    return resource.getResponseField('distributionConfiguration.dateUpdated') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDistributionConfiguration',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetDistributionConfiguration.distributionConfiguration.tags'),
        outputPath: 'distributionConfiguration.tags',
        parameters: {
          distributionConfigurationArn: this.input.distributionConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionConfiguration.distributionConfiguration.tags', props);
    return resource.getResponseField('distributionConfiguration.tags') as unknown as Record<string, string>;
  }

}

export class ImagebuilderFetchImage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ImagebuilderGetImageRequest) {
    super(scope, id);
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.requestId'),
        outputPath: 'requestId',
        parameters: {
          imageBuildVersionArn: this.input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImage.requestId', props);
    return resource.getResponseField('requestId') as unknown as string;
  }

  public get image(): ImagebuilderFetchImageImage {
    return new ImagebuilderFetchImageImage(this, 'Image', this.__resources, this.input);
  }

}

export class ImagebuilderFetchImageImage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ImagebuilderGetImageRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.arn'),
        outputPath: 'image.arn',
        parameters: {
          imageBuildVersionArn: this.input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImage.image.arn', props);
    return resource.getResponseField('image.arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.name'),
        outputPath: 'image.name',
        parameters: {
          imageBuildVersionArn: this.input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImage.image.name', props);
    return resource.getResponseField('image.name') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.version'),
        outputPath: 'image.version',
        parameters: {
          imageBuildVersionArn: this.input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImage.image.version', props);
    return resource.getResponseField('image.version') as unknown as string;
  }

  public get platform(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.platform'),
        outputPath: 'image.platform',
        parameters: {
          imageBuildVersionArn: this.input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImage.image.platform', props);
    return resource.getResponseField('image.platform') as unknown as string;
  }

  public get enhancedImageMetadataEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.enhancedImageMetadataEnabled'),
        outputPath: 'image.enhancedImageMetadataEnabled',
        parameters: {
          imageBuildVersionArn: this.input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImage.image.enhancedImageMetadataEnabled', props);
    return resource.getResponseField('image.enhancedImageMetadataEnabled') as unknown as boolean;
  }

  public get osVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.osVersion'),
        outputPath: 'image.osVersion',
        parameters: {
          imageBuildVersionArn: this.input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImage.image.osVersion', props);
    return resource.getResponseField('image.osVersion') as unknown as string;
  }

  public get state(): ImagebuilderFetchImageImageState {
    return new ImagebuilderFetchImageImageState(this, 'State', this.__resources, this.input);
  }

  public get imageRecipe(): ImagebuilderFetchImageImageImageRecipe {
    return new ImagebuilderFetchImageImageImageRecipe(this, 'ImageRecipe', this.__resources, this.input);
  }

  public get sourcePipelineName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.sourcePipelineName'),
        outputPath: 'image.sourcePipelineName',
        parameters: {
          imageBuildVersionArn: this.input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImage.image.sourcePipelineName', props);
    return resource.getResponseField('image.sourcePipelineName') as unknown as string;
  }

  public get sourcePipelineArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.sourcePipelineArn'),
        outputPath: 'image.sourcePipelineArn',
        parameters: {
          imageBuildVersionArn: this.input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImage.image.sourcePipelineArn', props);
    return resource.getResponseField('image.sourcePipelineArn') as unknown as string;
  }

  public get infrastructureConfiguration(): ImagebuilderFetchImageImageInfrastructureConfiguration {
    return new ImagebuilderFetchImageImageInfrastructureConfiguration(this, 'InfrastructureConfiguration', this.__resources, this.input);
  }

  public get distributionConfiguration(): ImagebuilderFetchImageImageDistributionConfiguration {
    return new ImagebuilderFetchImageImageDistributionConfiguration(this, 'DistributionConfiguration', this.__resources, this.input);
  }

  public get imageTestsConfiguration(): ImagebuilderFetchImageImageImageTestsConfiguration {
    return new ImagebuilderFetchImageImageImageTestsConfiguration(this, 'ImageTestsConfiguration', this.__resources, this.input);
  }

  public get dateCreated(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.dateCreated'),
        outputPath: 'image.dateCreated',
        parameters: {
          imageBuildVersionArn: this.input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImage.image.dateCreated', props);
    return resource.getResponseField('image.dateCreated') as unknown as string;
  }

  public get outputResources(): ImagebuilderFetchImageImageOutputResources {
    return new ImagebuilderFetchImageImageOutputResources(this, 'OutputResources', this.__resources, this.input);
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.tags'),
        outputPath: 'image.tags',
        parameters: {
          imageBuildVersionArn: this.input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImage.image.tags', props);
    return resource.getResponseField('image.tags') as unknown as Record<string, string>;
  }

}

export class ImagebuilderFetchImageImageState extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ImagebuilderGetImageRequest) {
    super(scope, id);
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.state.status'),
        outputPath: 'image.state.status',
        parameters: {
          imageBuildVersionArn: this.input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImage.image.state.status', props);
    return resource.getResponseField('image.state.status') as unknown as string;
  }

  public get reason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.state.reason'),
        outputPath: 'image.state.reason',
        parameters: {
          imageBuildVersionArn: this.input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImage.image.state.reason', props);
    return resource.getResponseField('image.state.reason') as unknown as string;
  }

}

export class ImagebuilderFetchImageImageImageRecipe extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ImagebuilderGetImageRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.imageRecipe.arn'),
        outputPath: 'image.imageRecipe.arn',
        parameters: {
          imageBuildVersionArn: this.input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImage.image.imageRecipe.arn', props);
    return resource.getResponseField('image.imageRecipe.arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.imageRecipe.name'),
        outputPath: 'image.imageRecipe.name',
        parameters: {
          imageBuildVersionArn: this.input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImage.image.imageRecipe.name', props);
    return resource.getResponseField('image.imageRecipe.name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.imageRecipe.description'),
        outputPath: 'image.imageRecipe.description',
        parameters: {
          imageBuildVersionArn: this.input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImage.image.imageRecipe.description', props);
    return resource.getResponseField('image.imageRecipe.description') as unknown as string;
  }

  public get platform(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.imageRecipe.platform'),
        outputPath: 'image.imageRecipe.platform',
        parameters: {
          imageBuildVersionArn: this.input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImage.image.imageRecipe.platform', props);
    return resource.getResponseField('image.imageRecipe.platform') as unknown as string;
  }

  public get owner(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.imageRecipe.owner'),
        outputPath: 'image.imageRecipe.owner',
        parameters: {
          imageBuildVersionArn: this.input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImage.image.imageRecipe.owner', props);
    return resource.getResponseField('image.imageRecipe.owner') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.imageRecipe.version'),
        outputPath: 'image.imageRecipe.version',
        parameters: {
          imageBuildVersionArn: this.input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImage.image.imageRecipe.version', props);
    return resource.getResponseField('image.imageRecipe.version') as unknown as string;
  }

  public get components(): shapes.ImagebuilderComponentConfiguration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.imageRecipe.components'),
        outputPath: 'image.imageRecipe.components',
        parameters: {
          imageBuildVersionArn: this.input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImage.image.imageRecipe.components', props);
    return resource.getResponseField('image.imageRecipe.components') as unknown as shapes.ImagebuilderComponentConfiguration[];
  }

  public get parentImage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.imageRecipe.parentImage'),
        outputPath: 'image.imageRecipe.parentImage',
        parameters: {
          imageBuildVersionArn: this.input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImage.image.imageRecipe.parentImage', props);
    return resource.getResponseField('image.imageRecipe.parentImage') as unknown as string;
  }

  public get blockDeviceMappings(): shapes.ImagebuilderInstanceBlockDeviceMapping[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.imageRecipe.blockDeviceMappings'),
        outputPath: 'image.imageRecipe.blockDeviceMappings',
        parameters: {
          imageBuildVersionArn: this.input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImage.image.imageRecipe.blockDeviceMappings', props);
    return resource.getResponseField('image.imageRecipe.blockDeviceMappings') as unknown as shapes.ImagebuilderInstanceBlockDeviceMapping[];
  }

  public get dateCreated(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.imageRecipe.dateCreated'),
        outputPath: 'image.imageRecipe.dateCreated',
        parameters: {
          imageBuildVersionArn: this.input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImage.image.imageRecipe.dateCreated', props);
    return resource.getResponseField('image.imageRecipe.dateCreated') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.imageRecipe.tags'),
        outputPath: 'image.imageRecipe.tags',
        parameters: {
          imageBuildVersionArn: this.input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImage.image.imageRecipe.tags', props);
    return resource.getResponseField('image.imageRecipe.tags') as unknown as Record<string, string>;
  }

  public get workingDirectory(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.imageRecipe.workingDirectory'),
        outputPath: 'image.imageRecipe.workingDirectory',
        parameters: {
          imageBuildVersionArn: this.input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImage.image.imageRecipe.workingDirectory', props);
    return resource.getResponseField('image.imageRecipe.workingDirectory') as unknown as string;
  }

}

export class ImagebuilderFetchImageImageInfrastructureConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ImagebuilderGetImageRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.infrastructureConfiguration.arn'),
        outputPath: 'image.infrastructureConfiguration.arn',
        parameters: {
          imageBuildVersionArn: this.input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImage.image.infrastructureConfiguration.arn', props);
    return resource.getResponseField('image.infrastructureConfiguration.arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.infrastructureConfiguration.name'),
        outputPath: 'image.infrastructureConfiguration.name',
        parameters: {
          imageBuildVersionArn: this.input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImage.image.infrastructureConfiguration.name', props);
    return resource.getResponseField('image.infrastructureConfiguration.name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.infrastructureConfiguration.description'),
        outputPath: 'image.infrastructureConfiguration.description',
        parameters: {
          imageBuildVersionArn: this.input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImage.image.infrastructureConfiguration.description', props);
    return resource.getResponseField('image.infrastructureConfiguration.description') as unknown as string;
  }

  public get instanceTypes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.infrastructureConfiguration.instanceTypes'),
        outputPath: 'image.infrastructureConfiguration.instanceTypes',
        parameters: {
          imageBuildVersionArn: this.input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImage.image.infrastructureConfiguration.instanceTypes', props);
    return resource.getResponseField('image.infrastructureConfiguration.instanceTypes') as unknown as string[];
  }

  public get instanceProfileName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.infrastructureConfiguration.instanceProfileName'),
        outputPath: 'image.infrastructureConfiguration.instanceProfileName',
        parameters: {
          imageBuildVersionArn: this.input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImage.image.infrastructureConfiguration.instanceProfileName', props);
    return resource.getResponseField('image.infrastructureConfiguration.instanceProfileName') as unknown as string;
  }

  public get securityGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.infrastructureConfiguration.securityGroupIds'),
        outputPath: 'image.infrastructureConfiguration.securityGroupIds',
        parameters: {
          imageBuildVersionArn: this.input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImage.image.infrastructureConfiguration.securityGroupIds', props);
    return resource.getResponseField('image.infrastructureConfiguration.securityGroupIds') as unknown as string[];
  }

  public get subnetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.infrastructureConfiguration.subnetId'),
        outputPath: 'image.infrastructureConfiguration.subnetId',
        parameters: {
          imageBuildVersionArn: this.input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImage.image.infrastructureConfiguration.subnetId', props);
    return resource.getResponseField('image.infrastructureConfiguration.subnetId') as unknown as string;
  }

  public get logging(): ImagebuilderFetchImageImageInfrastructureConfigurationLogging {
    return new ImagebuilderFetchImageImageInfrastructureConfigurationLogging(this, 'Logging', this.__resources, this.input);
  }

  public get keyPair(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.infrastructureConfiguration.keyPair'),
        outputPath: 'image.infrastructureConfiguration.keyPair',
        parameters: {
          imageBuildVersionArn: this.input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImage.image.infrastructureConfiguration.keyPair', props);
    return resource.getResponseField('image.infrastructureConfiguration.keyPair') as unknown as string;
  }

  public get terminateInstanceOnFailure(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.infrastructureConfiguration.terminateInstanceOnFailure'),
        outputPath: 'image.infrastructureConfiguration.terminateInstanceOnFailure',
        parameters: {
          imageBuildVersionArn: this.input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImage.image.infrastructureConfiguration.terminateInstanceOnFailure', props);
    return resource.getResponseField('image.infrastructureConfiguration.terminateInstanceOnFailure') as unknown as boolean;
  }

  public get snsTopicArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.infrastructureConfiguration.snsTopicArn'),
        outputPath: 'image.infrastructureConfiguration.snsTopicArn',
        parameters: {
          imageBuildVersionArn: this.input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImage.image.infrastructureConfiguration.snsTopicArn', props);
    return resource.getResponseField('image.infrastructureConfiguration.snsTopicArn') as unknown as string;
  }

  public get dateCreated(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.infrastructureConfiguration.dateCreated'),
        outputPath: 'image.infrastructureConfiguration.dateCreated',
        parameters: {
          imageBuildVersionArn: this.input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImage.image.infrastructureConfiguration.dateCreated', props);
    return resource.getResponseField('image.infrastructureConfiguration.dateCreated') as unknown as string;
  }

  public get dateUpdated(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.infrastructureConfiguration.dateUpdated'),
        outputPath: 'image.infrastructureConfiguration.dateUpdated',
        parameters: {
          imageBuildVersionArn: this.input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImage.image.infrastructureConfiguration.dateUpdated', props);
    return resource.getResponseField('image.infrastructureConfiguration.dateUpdated') as unknown as string;
  }

  public get resourceTags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.infrastructureConfiguration.resourceTags'),
        outputPath: 'image.infrastructureConfiguration.resourceTags',
        parameters: {
          imageBuildVersionArn: this.input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImage.image.infrastructureConfiguration.resourceTags', props);
    return resource.getResponseField('image.infrastructureConfiguration.resourceTags') as unknown as Record<string, string>;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.infrastructureConfiguration.tags'),
        outputPath: 'image.infrastructureConfiguration.tags',
        parameters: {
          imageBuildVersionArn: this.input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImage.image.infrastructureConfiguration.tags', props);
    return resource.getResponseField('image.infrastructureConfiguration.tags') as unknown as Record<string, string>;
  }

}

export class ImagebuilderFetchImageImageInfrastructureConfigurationLogging extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ImagebuilderGetImageRequest) {
    super(scope, id);
  }

  public get s3Logs(): ImagebuilderFetchImageImageInfrastructureConfigurationLoggingS3Logs {
    return new ImagebuilderFetchImageImageInfrastructureConfigurationLoggingS3Logs(this, 'S3Logs', this.__resources, this.input);
  }

}

export class ImagebuilderFetchImageImageInfrastructureConfigurationLoggingS3Logs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ImagebuilderGetImageRequest) {
    super(scope, id);
  }

  public get s3BucketName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.infrastructureConfiguration.logging.s3Logs.s3BucketName'),
        outputPath: 'image.infrastructureConfiguration.logging.s3Logs.s3BucketName',
        parameters: {
          imageBuildVersionArn: this.input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImage.image.infrastructureConfiguration.logging.s3Logs.s3BucketName', props);
    return resource.getResponseField('image.infrastructureConfiguration.logging.s3Logs.s3BucketName') as unknown as string;
  }

  public get s3KeyPrefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.infrastructureConfiguration.logging.s3Logs.s3KeyPrefix'),
        outputPath: 'image.infrastructureConfiguration.logging.s3Logs.s3KeyPrefix',
        parameters: {
          imageBuildVersionArn: this.input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImage.image.infrastructureConfiguration.logging.s3Logs.s3KeyPrefix', props);
    return resource.getResponseField('image.infrastructureConfiguration.logging.s3Logs.s3KeyPrefix') as unknown as string;
  }

}

export class ImagebuilderFetchImageImageDistributionConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ImagebuilderGetImageRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.distributionConfiguration.arn'),
        outputPath: 'image.distributionConfiguration.arn',
        parameters: {
          imageBuildVersionArn: this.input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImage.image.distributionConfiguration.arn', props);
    return resource.getResponseField('image.distributionConfiguration.arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.distributionConfiguration.name'),
        outputPath: 'image.distributionConfiguration.name',
        parameters: {
          imageBuildVersionArn: this.input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImage.image.distributionConfiguration.name', props);
    return resource.getResponseField('image.distributionConfiguration.name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.distributionConfiguration.description'),
        outputPath: 'image.distributionConfiguration.description',
        parameters: {
          imageBuildVersionArn: this.input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImage.image.distributionConfiguration.description', props);
    return resource.getResponseField('image.distributionConfiguration.description') as unknown as string;
  }

  public get distributions(): shapes.ImagebuilderDistribution[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.distributionConfiguration.distributions'),
        outputPath: 'image.distributionConfiguration.distributions',
        parameters: {
          imageBuildVersionArn: this.input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImage.image.distributionConfiguration.distributions', props);
    return resource.getResponseField('image.distributionConfiguration.distributions') as unknown as shapes.ImagebuilderDistribution[];
  }

  public get timeoutMinutes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.distributionConfiguration.timeoutMinutes'),
        outputPath: 'image.distributionConfiguration.timeoutMinutes',
        parameters: {
          imageBuildVersionArn: this.input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImage.image.distributionConfiguration.timeoutMinutes', props);
    return resource.getResponseField('image.distributionConfiguration.timeoutMinutes') as unknown as number;
  }

  public get dateCreated(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.distributionConfiguration.dateCreated'),
        outputPath: 'image.distributionConfiguration.dateCreated',
        parameters: {
          imageBuildVersionArn: this.input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImage.image.distributionConfiguration.dateCreated', props);
    return resource.getResponseField('image.distributionConfiguration.dateCreated') as unknown as string;
  }

  public get dateUpdated(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.distributionConfiguration.dateUpdated'),
        outputPath: 'image.distributionConfiguration.dateUpdated',
        parameters: {
          imageBuildVersionArn: this.input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImage.image.distributionConfiguration.dateUpdated', props);
    return resource.getResponseField('image.distributionConfiguration.dateUpdated') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.distributionConfiguration.tags'),
        outputPath: 'image.distributionConfiguration.tags',
        parameters: {
          imageBuildVersionArn: this.input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImage.image.distributionConfiguration.tags', props);
    return resource.getResponseField('image.distributionConfiguration.tags') as unknown as Record<string, string>;
  }

}

export class ImagebuilderFetchImageImageImageTestsConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ImagebuilderGetImageRequest) {
    super(scope, id);
  }

  public get imageTestsEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.imageTestsConfiguration.imageTestsEnabled'),
        outputPath: 'image.imageTestsConfiguration.imageTestsEnabled',
        parameters: {
          imageBuildVersionArn: this.input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImage.image.imageTestsConfiguration.imageTestsEnabled', props);
    return resource.getResponseField('image.imageTestsConfiguration.imageTestsEnabled') as unknown as boolean;
  }

  public get timeoutMinutes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.imageTestsConfiguration.timeoutMinutes'),
        outputPath: 'image.imageTestsConfiguration.timeoutMinutes',
        parameters: {
          imageBuildVersionArn: this.input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImage.image.imageTestsConfiguration.timeoutMinutes', props);
    return resource.getResponseField('image.imageTestsConfiguration.timeoutMinutes') as unknown as number;
  }

}

export class ImagebuilderFetchImageImageOutputResources extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ImagebuilderGetImageRequest) {
    super(scope, id);
  }

  public get amis(): shapes.ImagebuilderAmi[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.outputResources.amis'),
        outputPath: 'image.outputResources.amis',
        parameters: {
          imageBuildVersionArn: this.input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImage.image.outputResources.amis', props);
    return resource.getResponseField('image.outputResources.amis') as unknown as shapes.ImagebuilderAmi[];
  }

}

export class ImagebuilderFetchImagePipeline extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ImagebuilderGetImagePipelineRequest) {
    super(scope, id);
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImagePipeline',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImagePipeline.requestId'),
        outputPath: 'requestId',
        parameters: {
          imagePipelineArn: this.input.imagePipelineArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImagePipeline.requestId', props);
    return resource.getResponseField('requestId') as unknown as string;
  }

  public get imagePipeline(): ImagebuilderFetchImagePipelineImagePipeline {
    return new ImagebuilderFetchImagePipelineImagePipeline(this, 'ImagePipeline', this.__resources, this.input);
  }

}

export class ImagebuilderFetchImagePipelineImagePipeline extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ImagebuilderGetImagePipelineRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImagePipeline',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImagePipeline.imagePipeline.arn'),
        outputPath: 'imagePipeline.arn',
        parameters: {
          imagePipelineArn: this.input.imagePipelineArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImagePipeline.imagePipeline.arn', props);
    return resource.getResponseField('imagePipeline.arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImagePipeline',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImagePipeline.imagePipeline.name'),
        outputPath: 'imagePipeline.name',
        parameters: {
          imagePipelineArn: this.input.imagePipelineArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImagePipeline.imagePipeline.name', props);
    return resource.getResponseField('imagePipeline.name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImagePipeline',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImagePipeline.imagePipeline.description'),
        outputPath: 'imagePipeline.description',
        parameters: {
          imagePipelineArn: this.input.imagePipelineArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImagePipeline.imagePipeline.description', props);
    return resource.getResponseField('imagePipeline.description') as unknown as string;
  }

  public get platform(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImagePipeline',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImagePipeline.imagePipeline.platform'),
        outputPath: 'imagePipeline.platform',
        parameters: {
          imagePipelineArn: this.input.imagePipelineArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImagePipeline.imagePipeline.platform', props);
    return resource.getResponseField('imagePipeline.platform') as unknown as string;
  }

  public get enhancedImageMetadataEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImagePipeline',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImagePipeline.imagePipeline.enhancedImageMetadataEnabled'),
        outputPath: 'imagePipeline.enhancedImageMetadataEnabled',
        parameters: {
          imagePipelineArn: this.input.imagePipelineArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImagePipeline.imagePipeline.enhancedImageMetadataEnabled', props);
    return resource.getResponseField('imagePipeline.enhancedImageMetadataEnabled') as unknown as boolean;
  }

  public get imageRecipeArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImagePipeline',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImagePipeline.imagePipeline.imageRecipeArn'),
        outputPath: 'imagePipeline.imageRecipeArn',
        parameters: {
          imagePipelineArn: this.input.imagePipelineArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImagePipeline.imagePipeline.imageRecipeArn', props);
    return resource.getResponseField('imagePipeline.imageRecipeArn') as unknown as string;
  }

  public get infrastructureConfigurationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImagePipeline',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImagePipeline.imagePipeline.infrastructureConfigurationArn'),
        outputPath: 'imagePipeline.infrastructureConfigurationArn',
        parameters: {
          imagePipelineArn: this.input.imagePipelineArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImagePipeline.imagePipeline.infrastructureConfigurationArn', props);
    return resource.getResponseField('imagePipeline.infrastructureConfigurationArn') as unknown as string;
  }

  public get distributionConfigurationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImagePipeline',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImagePipeline.imagePipeline.distributionConfigurationArn'),
        outputPath: 'imagePipeline.distributionConfigurationArn',
        parameters: {
          imagePipelineArn: this.input.imagePipelineArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImagePipeline.imagePipeline.distributionConfigurationArn', props);
    return resource.getResponseField('imagePipeline.distributionConfigurationArn') as unknown as string;
  }

  public get imageTestsConfiguration(): ImagebuilderFetchImagePipelineImagePipelineImageTestsConfiguration {
    return new ImagebuilderFetchImagePipelineImagePipelineImageTestsConfiguration(this, 'ImageTestsConfiguration', this.__resources, this.input);
  }

  public get schedule(): ImagebuilderFetchImagePipelineImagePipelineSchedule {
    return new ImagebuilderFetchImagePipelineImagePipelineSchedule(this, 'Schedule', this.__resources, this.input);
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImagePipeline',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImagePipeline.imagePipeline.status'),
        outputPath: 'imagePipeline.status',
        parameters: {
          imagePipelineArn: this.input.imagePipelineArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImagePipeline.imagePipeline.status', props);
    return resource.getResponseField('imagePipeline.status') as unknown as string;
  }

  public get dateCreated(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImagePipeline',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImagePipeline.imagePipeline.dateCreated'),
        outputPath: 'imagePipeline.dateCreated',
        parameters: {
          imagePipelineArn: this.input.imagePipelineArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImagePipeline.imagePipeline.dateCreated', props);
    return resource.getResponseField('imagePipeline.dateCreated') as unknown as string;
  }

  public get dateUpdated(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImagePipeline',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImagePipeline.imagePipeline.dateUpdated'),
        outputPath: 'imagePipeline.dateUpdated',
        parameters: {
          imagePipelineArn: this.input.imagePipelineArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImagePipeline.imagePipeline.dateUpdated', props);
    return resource.getResponseField('imagePipeline.dateUpdated') as unknown as string;
  }

  public get dateLastRun(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImagePipeline',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImagePipeline.imagePipeline.dateLastRun'),
        outputPath: 'imagePipeline.dateLastRun',
        parameters: {
          imagePipelineArn: this.input.imagePipelineArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImagePipeline.imagePipeline.dateLastRun', props);
    return resource.getResponseField('imagePipeline.dateLastRun') as unknown as string;
  }

  public get dateNextRun(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImagePipeline',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImagePipeline.imagePipeline.dateNextRun'),
        outputPath: 'imagePipeline.dateNextRun',
        parameters: {
          imagePipelineArn: this.input.imagePipelineArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImagePipeline.imagePipeline.dateNextRun', props);
    return resource.getResponseField('imagePipeline.dateNextRun') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImagePipeline',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImagePipeline.imagePipeline.tags'),
        outputPath: 'imagePipeline.tags',
        parameters: {
          imagePipelineArn: this.input.imagePipelineArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImagePipeline.imagePipeline.tags', props);
    return resource.getResponseField('imagePipeline.tags') as unknown as Record<string, string>;
  }

}

export class ImagebuilderFetchImagePipelineImagePipelineImageTestsConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ImagebuilderGetImagePipelineRequest) {
    super(scope, id);
  }

  public get imageTestsEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImagePipeline',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImagePipeline.imagePipeline.imageTestsConfiguration.imageTestsEnabled'),
        outputPath: 'imagePipeline.imageTestsConfiguration.imageTestsEnabled',
        parameters: {
          imagePipelineArn: this.input.imagePipelineArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImagePipeline.imagePipeline.imageTestsConfiguration.imageTestsEnabled', props);
    return resource.getResponseField('imagePipeline.imageTestsConfiguration.imageTestsEnabled') as unknown as boolean;
  }

  public get timeoutMinutes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImagePipeline',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImagePipeline.imagePipeline.imageTestsConfiguration.timeoutMinutes'),
        outputPath: 'imagePipeline.imageTestsConfiguration.timeoutMinutes',
        parameters: {
          imagePipelineArn: this.input.imagePipelineArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImagePipeline.imagePipeline.imageTestsConfiguration.timeoutMinutes', props);
    return resource.getResponseField('imagePipeline.imageTestsConfiguration.timeoutMinutes') as unknown as number;
  }

}

export class ImagebuilderFetchImagePipelineImagePipelineSchedule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ImagebuilderGetImagePipelineRequest) {
    super(scope, id);
  }

  public get scheduleExpression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImagePipeline',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImagePipeline.imagePipeline.schedule.scheduleExpression'),
        outputPath: 'imagePipeline.schedule.scheduleExpression',
        parameters: {
          imagePipelineArn: this.input.imagePipelineArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImagePipeline.imagePipeline.schedule.scheduleExpression', props);
    return resource.getResponseField('imagePipeline.schedule.scheduleExpression') as unknown as string;
  }

  public get pipelineExecutionStartCondition(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImagePipeline',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImagePipeline.imagePipeline.schedule.pipelineExecutionStartCondition'),
        outputPath: 'imagePipeline.schedule.pipelineExecutionStartCondition',
        parameters: {
          imagePipelineArn: this.input.imagePipelineArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImagePipeline.imagePipeline.schedule.pipelineExecutionStartCondition', props);
    return resource.getResponseField('imagePipeline.schedule.pipelineExecutionStartCondition') as unknown as string;
  }

}

export class ImagebuilderFetchImagePolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ImagebuilderGetImagePolicyRequest) {
    super(scope, id);
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImagePolicy',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImagePolicy.requestId'),
        outputPath: 'requestId',
        parameters: {
          imageArn: this.input.imageArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImagePolicy.requestId', props);
    return resource.getResponseField('requestId') as unknown as string;
  }

  public get policy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImagePolicy',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImagePolicy.policy'),
        outputPath: 'policy',
        parameters: {
          imageArn: this.input.imageArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImagePolicy.policy', props);
    return resource.getResponseField('policy') as unknown as string;
  }

}

export class ImagebuilderFetchImageRecipe extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ImagebuilderGetImageRecipeRequest) {
    super(scope, id);
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImageRecipe',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImageRecipe.requestId'),
        outputPath: 'requestId',
        parameters: {
          imageRecipeArn: this.input.imageRecipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImageRecipe.requestId', props);
    return resource.getResponseField('requestId') as unknown as string;
  }

  public get imageRecipe(): ImagebuilderFetchImageRecipeImageRecipe {
    return new ImagebuilderFetchImageRecipeImageRecipe(this, 'ImageRecipe', this.__resources, this.input);
  }

}

export class ImagebuilderFetchImageRecipeImageRecipe extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ImagebuilderGetImageRecipeRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImageRecipe',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImageRecipe.imageRecipe.arn'),
        outputPath: 'imageRecipe.arn',
        parameters: {
          imageRecipeArn: this.input.imageRecipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImageRecipe.imageRecipe.arn', props);
    return resource.getResponseField('imageRecipe.arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImageRecipe',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImageRecipe.imageRecipe.name'),
        outputPath: 'imageRecipe.name',
        parameters: {
          imageRecipeArn: this.input.imageRecipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImageRecipe.imageRecipe.name', props);
    return resource.getResponseField('imageRecipe.name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImageRecipe',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImageRecipe.imageRecipe.description'),
        outputPath: 'imageRecipe.description',
        parameters: {
          imageRecipeArn: this.input.imageRecipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImageRecipe.imageRecipe.description', props);
    return resource.getResponseField('imageRecipe.description') as unknown as string;
  }

  public get platform(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImageRecipe',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImageRecipe.imageRecipe.platform'),
        outputPath: 'imageRecipe.platform',
        parameters: {
          imageRecipeArn: this.input.imageRecipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImageRecipe.imageRecipe.platform', props);
    return resource.getResponseField('imageRecipe.platform') as unknown as string;
  }

  public get owner(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImageRecipe',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImageRecipe.imageRecipe.owner'),
        outputPath: 'imageRecipe.owner',
        parameters: {
          imageRecipeArn: this.input.imageRecipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImageRecipe.imageRecipe.owner', props);
    return resource.getResponseField('imageRecipe.owner') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImageRecipe',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImageRecipe.imageRecipe.version'),
        outputPath: 'imageRecipe.version',
        parameters: {
          imageRecipeArn: this.input.imageRecipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImageRecipe.imageRecipe.version', props);
    return resource.getResponseField('imageRecipe.version') as unknown as string;
  }

  public get components(): shapes.ImagebuilderComponentConfiguration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImageRecipe',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImageRecipe.imageRecipe.components'),
        outputPath: 'imageRecipe.components',
        parameters: {
          imageRecipeArn: this.input.imageRecipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImageRecipe.imageRecipe.components', props);
    return resource.getResponseField('imageRecipe.components') as unknown as shapes.ImagebuilderComponentConfiguration[];
  }

  public get parentImage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImageRecipe',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImageRecipe.imageRecipe.parentImage'),
        outputPath: 'imageRecipe.parentImage',
        parameters: {
          imageRecipeArn: this.input.imageRecipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImageRecipe.imageRecipe.parentImage', props);
    return resource.getResponseField('imageRecipe.parentImage') as unknown as string;
  }

  public get blockDeviceMappings(): shapes.ImagebuilderInstanceBlockDeviceMapping[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImageRecipe',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImageRecipe.imageRecipe.blockDeviceMappings'),
        outputPath: 'imageRecipe.blockDeviceMappings',
        parameters: {
          imageRecipeArn: this.input.imageRecipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImageRecipe.imageRecipe.blockDeviceMappings', props);
    return resource.getResponseField('imageRecipe.blockDeviceMappings') as unknown as shapes.ImagebuilderInstanceBlockDeviceMapping[];
  }

  public get dateCreated(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImageRecipe',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImageRecipe.imageRecipe.dateCreated'),
        outputPath: 'imageRecipe.dateCreated',
        parameters: {
          imageRecipeArn: this.input.imageRecipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImageRecipe.imageRecipe.dateCreated', props);
    return resource.getResponseField('imageRecipe.dateCreated') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImageRecipe',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImageRecipe.imageRecipe.tags'),
        outputPath: 'imageRecipe.tags',
        parameters: {
          imageRecipeArn: this.input.imageRecipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImageRecipe.imageRecipe.tags', props);
    return resource.getResponseField('imageRecipe.tags') as unknown as Record<string, string>;
  }

  public get workingDirectory(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImageRecipe',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImageRecipe.imageRecipe.workingDirectory'),
        outputPath: 'imageRecipe.workingDirectory',
        parameters: {
          imageRecipeArn: this.input.imageRecipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImageRecipe.imageRecipe.workingDirectory', props);
    return resource.getResponseField('imageRecipe.workingDirectory') as unknown as string;
  }

}

export class ImagebuilderFetchImageRecipePolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ImagebuilderGetImageRecipePolicyRequest) {
    super(scope, id);
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImageRecipePolicy',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImageRecipePolicy.requestId'),
        outputPath: 'requestId',
        parameters: {
          imageRecipeArn: this.input.imageRecipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImageRecipePolicy.requestId', props);
    return resource.getResponseField('requestId') as unknown as string;
  }

  public get policy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImageRecipePolicy',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImageRecipePolicy.policy'),
        outputPath: 'policy',
        parameters: {
          imageRecipeArn: this.input.imageRecipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImageRecipePolicy.policy', props);
    return resource.getResponseField('policy') as unknown as string;
  }

}

export class ImagebuilderFetchInfrastructureConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ImagebuilderGetInfrastructureConfigurationRequest) {
    super(scope, id);
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInfrastructureConfiguration',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetInfrastructureConfiguration.requestId'),
        outputPath: 'requestId',
        parameters: {
          infrastructureConfigurationArn: this.input.infrastructureConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInfrastructureConfiguration.requestId', props);
    return resource.getResponseField('requestId') as unknown as string;
  }

  public get infrastructureConfiguration(): ImagebuilderFetchInfrastructureConfigurationInfrastructureConfiguration {
    return new ImagebuilderFetchInfrastructureConfigurationInfrastructureConfiguration(this, 'InfrastructureConfiguration', this.__resources, this.input);
  }

}

export class ImagebuilderFetchInfrastructureConfigurationInfrastructureConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ImagebuilderGetInfrastructureConfigurationRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInfrastructureConfiguration',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetInfrastructureConfiguration.infrastructureConfiguration.arn'),
        outputPath: 'infrastructureConfiguration.arn',
        parameters: {
          infrastructureConfigurationArn: this.input.infrastructureConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInfrastructureConfiguration.infrastructureConfiguration.arn', props);
    return resource.getResponseField('infrastructureConfiguration.arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInfrastructureConfiguration',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetInfrastructureConfiguration.infrastructureConfiguration.name'),
        outputPath: 'infrastructureConfiguration.name',
        parameters: {
          infrastructureConfigurationArn: this.input.infrastructureConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInfrastructureConfiguration.infrastructureConfiguration.name', props);
    return resource.getResponseField('infrastructureConfiguration.name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInfrastructureConfiguration',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetInfrastructureConfiguration.infrastructureConfiguration.description'),
        outputPath: 'infrastructureConfiguration.description',
        parameters: {
          infrastructureConfigurationArn: this.input.infrastructureConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInfrastructureConfiguration.infrastructureConfiguration.description', props);
    return resource.getResponseField('infrastructureConfiguration.description') as unknown as string;
  }

  public get instanceTypes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInfrastructureConfiguration',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetInfrastructureConfiguration.infrastructureConfiguration.instanceTypes'),
        outputPath: 'infrastructureConfiguration.instanceTypes',
        parameters: {
          infrastructureConfigurationArn: this.input.infrastructureConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInfrastructureConfiguration.infrastructureConfiguration.instanceTypes', props);
    return resource.getResponseField('infrastructureConfiguration.instanceTypes') as unknown as string[];
  }

  public get instanceProfileName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInfrastructureConfiguration',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetInfrastructureConfiguration.infrastructureConfiguration.instanceProfileName'),
        outputPath: 'infrastructureConfiguration.instanceProfileName',
        parameters: {
          infrastructureConfigurationArn: this.input.infrastructureConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInfrastructureConfiguration.infrastructureConfiguration.instanceProfileName', props);
    return resource.getResponseField('infrastructureConfiguration.instanceProfileName') as unknown as string;
  }

  public get securityGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInfrastructureConfiguration',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetInfrastructureConfiguration.infrastructureConfiguration.securityGroupIds'),
        outputPath: 'infrastructureConfiguration.securityGroupIds',
        parameters: {
          infrastructureConfigurationArn: this.input.infrastructureConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInfrastructureConfiguration.infrastructureConfiguration.securityGroupIds', props);
    return resource.getResponseField('infrastructureConfiguration.securityGroupIds') as unknown as string[];
  }

  public get subnetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInfrastructureConfiguration',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetInfrastructureConfiguration.infrastructureConfiguration.subnetId'),
        outputPath: 'infrastructureConfiguration.subnetId',
        parameters: {
          infrastructureConfigurationArn: this.input.infrastructureConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInfrastructureConfiguration.infrastructureConfiguration.subnetId', props);
    return resource.getResponseField('infrastructureConfiguration.subnetId') as unknown as string;
  }

  public get logging(): ImagebuilderFetchInfrastructureConfigurationInfrastructureConfigurationLogging {
    return new ImagebuilderFetchInfrastructureConfigurationInfrastructureConfigurationLogging(this, 'Logging', this.__resources, this.input);
  }

  public get keyPair(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInfrastructureConfiguration',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetInfrastructureConfiguration.infrastructureConfiguration.keyPair'),
        outputPath: 'infrastructureConfiguration.keyPair',
        parameters: {
          infrastructureConfigurationArn: this.input.infrastructureConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInfrastructureConfiguration.infrastructureConfiguration.keyPair', props);
    return resource.getResponseField('infrastructureConfiguration.keyPair') as unknown as string;
  }

  public get terminateInstanceOnFailure(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInfrastructureConfiguration',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetInfrastructureConfiguration.infrastructureConfiguration.terminateInstanceOnFailure'),
        outputPath: 'infrastructureConfiguration.terminateInstanceOnFailure',
        parameters: {
          infrastructureConfigurationArn: this.input.infrastructureConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInfrastructureConfiguration.infrastructureConfiguration.terminateInstanceOnFailure', props);
    return resource.getResponseField('infrastructureConfiguration.terminateInstanceOnFailure') as unknown as boolean;
  }

  public get snsTopicArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInfrastructureConfiguration',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetInfrastructureConfiguration.infrastructureConfiguration.snsTopicArn'),
        outputPath: 'infrastructureConfiguration.snsTopicArn',
        parameters: {
          infrastructureConfigurationArn: this.input.infrastructureConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInfrastructureConfiguration.infrastructureConfiguration.snsTopicArn', props);
    return resource.getResponseField('infrastructureConfiguration.snsTopicArn') as unknown as string;
  }

  public get dateCreated(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInfrastructureConfiguration',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetInfrastructureConfiguration.infrastructureConfiguration.dateCreated'),
        outputPath: 'infrastructureConfiguration.dateCreated',
        parameters: {
          infrastructureConfigurationArn: this.input.infrastructureConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInfrastructureConfiguration.infrastructureConfiguration.dateCreated', props);
    return resource.getResponseField('infrastructureConfiguration.dateCreated') as unknown as string;
  }

  public get dateUpdated(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInfrastructureConfiguration',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetInfrastructureConfiguration.infrastructureConfiguration.dateUpdated'),
        outputPath: 'infrastructureConfiguration.dateUpdated',
        parameters: {
          infrastructureConfigurationArn: this.input.infrastructureConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInfrastructureConfiguration.infrastructureConfiguration.dateUpdated', props);
    return resource.getResponseField('infrastructureConfiguration.dateUpdated') as unknown as string;
  }

  public get resourceTags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInfrastructureConfiguration',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetInfrastructureConfiguration.infrastructureConfiguration.resourceTags'),
        outputPath: 'infrastructureConfiguration.resourceTags',
        parameters: {
          infrastructureConfigurationArn: this.input.infrastructureConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInfrastructureConfiguration.infrastructureConfiguration.resourceTags', props);
    return resource.getResponseField('infrastructureConfiguration.resourceTags') as unknown as Record<string, string>;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInfrastructureConfiguration',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetInfrastructureConfiguration.infrastructureConfiguration.tags'),
        outputPath: 'infrastructureConfiguration.tags',
        parameters: {
          infrastructureConfigurationArn: this.input.infrastructureConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInfrastructureConfiguration.infrastructureConfiguration.tags', props);
    return resource.getResponseField('infrastructureConfiguration.tags') as unknown as Record<string, string>;
  }

}

export class ImagebuilderFetchInfrastructureConfigurationInfrastructureConfigurationLogging extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ImagebuilderGetInfrastructureConfigurationRequest) {
    super(scope, id);
  }

  public get s3Logs(): ImagebuilderFetchInfrastructureConfigurationInfrastructureConfigurationLoggingS3Logs {
    return new ImagebuilderFetchInfrastructureConfigurationInfrastructureConfigurationLoggingS3Logs(this, 'S3Logs', this.__resources, this.input);
  }

}

export class ImagebuilderFetchInfrastructureConfigurationInfrastructureConfigurationLoggingS3Logs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ImagebuilderGetInfrastructureConfigurationRequest) {
    super(scope, id);
  }

  public get s3BucketName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInfrastructureConfiguration',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetInfrastructureConfiguration.infrastructureConfiguration.logging.s3Logs.s3BucketName'),
        outputPath: 'infrastructureConfiguration.logging.s3Logs.s3BucketName',
        parameters: {
          infrastructureConfigurationArn: this.input.infrastructureConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInfrastructureConfiguration.infrastructureConfiguration.logging.s3Logs.s3BucketName', props);
    return resource.getResponseField('infrastructureConfiguration.logging.s3Logs.s3BucketName') as unknown as string;
  }

  public get s3KeyPrefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInfrastructureConfiguration',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetInfrastructureConfiguration.infrastructureConfiguration.logging.s3Logs.s3KeyPrefix'),
        outputPath: 'infrastructureConfiguration.logging.s3Logs.s3KeyPrefix',
        parameters: {
          infrastructureConfigurationArn: this.input.infrastructureConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInfrastructureConfiguration.infrastructureConfiguration.logging.s3Logs.s3KeyPrefix', props);
    return resource.getResponseField('infrastructureConfiguration.logging.s3Logs.s3KeyPrefix') as unknown as string;
  }

}

export class ImagebuilderImportComponent extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ImagebuilderImportComponentRequest) {
    super(scope, id);
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importComponent',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.ImportComponent.requestId'),
        outputPath: 'requestId',
        parameters: {
          name: this.input.name,
          semanticVersion: this.input.semanticVersion,
          description: this.input.description,
          changeDescription: this.input.changeDescription,
          type: this.input.type,
          format: this.input.format,
          platform: this.input.platform,
          data: this.input.data,
          uri: this.input.uri,
          kmsKeyId: this.input.kmsKeyId,
          tags: this.input.tags,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportComponent.requestId', props);
    return resource.getResponseField('requestId') as unknown as string;
  }

  public get clientToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importComponent',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.ImportComponent.clientToken'),
        outputPath: 'clientToken',
        parameters: {
          name: this.input.name,
          semanticVersion: this.input.semanticVersion,
          description: this.input.description,
          changeDescription: this.input.changeDescription,
          type: this.input.type,
          format: this.input.format,
          platform: this.input.platform,
          data: this.input.data,
          uri: this.input.uri,
          kmsKeyId: this.input.kmsKeyId,
          tags: this.input.tags,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportComponent.clientToken', props);
    return resource.getResponseField('clientToken') as unknown as string;
  }

  public get componentBuildVersionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importComponent',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.ImportComponent.componentBuildVersionArn'),
        outputPath: 'componentBuildVersionArn',
        parameters: {
          name: this.input.name,
          semanticVersion: this.input.semanticVersion,
          description: this.input.description,
          changeDescription: this.input.changeDescription,
          type: this.input.type,
          format: this.input.format,
          platform: this.input.platform,
          data: this.input.data,
          uri: this.input.uri,
          kmsKeyId: this.input.kmsKeyId,
          tags: this.input.tags,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportComponent.componentBuildVersionArn', props);
    return resource.getResponseField('componentBuildVersionArn') as unknown as string;
  }

}

export class ImagebuilderListComponentBuildVersions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ImagebuilderListComponentBuildVersionsRequest) {
    super(scope, id);
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listComponentBuildVersions',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.ListComponentBuildVersions.requestId'),
        outputPath: 'requestId',
        parameters: {
          componentVersionArn: this.input.componentVersionArn,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListComponentBuildVersions.requestId', props);
    return resource.getResponseField('requestId') as unknown as string;
  }

  public get componentSummaryList(): shapes.ImagebuilderComponentSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listComponentBuildVersions',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.ListComponentBuildVersions.componentSummaryList'),
        outputPath: 'componentSummaryList',
        parameters: {
          componentVersionArn: this.input.componentVersionArn,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListComponentBuildVersions.componentSummaryList', props);
    return resource.getResponseField('componentSummaryList') as unknown as shapes.ImagebuilderComponentSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listComponentBuildVersions',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.ListComponentBuildVersions.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          componentVersionArn: this.input.componentVersionArn,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListComponentBuildVersions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class ImagebuilderListComponents extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ImagebuilderListComponentsRequest) {
    super(scope, id);
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listComponents',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.ListComponents.requestId'),
        outputPath: 'requestId',
        parameters: {
          owner: this.input.owner,
          filters: this.input.filters,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListComponents.requestId', props);
    return resource.getResponseField('requestId') as unknown as string;
  }

  public get componentVersionList(): shapes.ImagebuilderComponentVersion[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listComponents',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.ListComponents.componentVersionList'),
        outputPath: 'componentVersionList',
        parameters: {
          owner: this.input.owner,
          filters: this.input.filters,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListComponents.componentVersionList', props);
    return resource.getResponseField('componentVersionList') as unknown as shapes.ImagebuilderComponentVersion[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listComponents',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.ListComponents.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          owner: this.input.owner,
          filters: this.input.filters,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListComponents.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class ImagebuilderListDistributionConfigurations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ImagebuilderListDistributionConfigurationsRequest) {
    super(scope, id);
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDistributionConfigurations',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.ListDistributionConfigurations.requestId'),
        outputPath: 'requestId',
        parameters: {
          filters: this.input.filters,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDistributionConfigurations.requestId', props);
    return resource.getResponseField('requestId') as unknown as string;
  }

  public get distributionConfigurationSummaryList(): shapes.ImagebuilderDistributionConfigurationSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDistributionConfigurations',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.ListDistributionConfigurations.distributionConfigurationSummaryList'),
        outputPath: 'distributionConfigurationSummaryList',
        parameters: {
          filters: this.input.filters,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDistributionConfigurations.distributionConfigurationSummaryList', props);
    return resource.getResponseField('distributionConfigurationSummaryList') as unknown as shapes.ImagebuilderDistributionConfigurationSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDistributionConfigurations',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.ListDistributionConfigurations.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          filters: this.input.filters,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDistributionConfigurations.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class ImagebuilderListImageBuildVersions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ImagebuilderListImageBuildVersionsRequest) {
    super(scope, id);
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listImageBuildVersions',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.ListImageBuildVersions.requestId'),
        outputPath: 'requestId',
        parameters: {
          imageVersionArn: this.input.imageVersionArn,
          filters: this.input.filters,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListImageBuildVersions.requestId', props);
    return resource.getResponseField('requestId') as unknown as string;
  }

  public get imageSummaryList(): shapes.ImagebuilderImageSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listImageBuildVersions',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.ListImageBuildVersions.imageSummaryList'),
        outputPath: 'imageSummaryList',
        parameters: {
          imageVersionArn: this.input.imageVersionArn,
          filters: this.input.filters,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListImageBuildVersions.imageSummaryList', props);
    return resource.getResponseField('imageSummaryList') as unknown as shapes.ImagebuilderImageSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listImageBuildVersions',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.ListImageBuildVersions.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          imageVersionArn: this.input.imageVersionArn,
          filters: this.input.filters,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListImageBuildVersions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class ImagebuilderListImagePipelineImages extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ImagebuilderListImagePipelineImagesRequest) {
    super(scope, id);
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listImagePipelineImages',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.ListImagePipelineImages.requestId'),
        outputPath: 'requestId',
        parameters: {
          imagePipelineArn: this.input.imagePipelineArn,
          filters: this.input.filters,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListImagePipelineImages.requestId', props);
    return resource.getResponseField('requestId') as unknown as string;
  }

  public get imageSummaryList(): shapes.ImagebuilderImageSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listImagePipelineImages',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.ListImagePipelineImages.imageSummaryList'),
        outputPath: 'imageSummaryList',
        parameters: {
          imagePipelineArn: this.input.imagePipelineArn,
          filters: this.input.filters,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListImagePipelineImages.imageSummaryList', props);
    return resource.getResponseField('imageSummaryList') as unknown as shapes.ImagebuilderImageSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listImagePipelineImages',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.ListImagePipelineImages.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          imagePipelineArn: this.input.imagePipelineArn,
          filters: this.input.filters,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListImagePipelineImages.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class ImagebuilderListImagePipelines extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ImagebuilderListImagePipelinesRequest) {
    super(scope, id);
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listImagePipelines',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.ListImagePipelines.requestId'),
        outputPath: 'requestId',
        parameters: {
          filters: this.input.filters,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListImagePipelines.requestId', props);
    return resource.getResponseField('requestId') as unknown as string;
  }

  public get imagePipelineList(): shapes.ImagebuilderImagePipeline[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listImagePipelines',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.ListImagePipelines.imagePipelineList'),
        outputPath: 'imagePipelineList',
        parameters: {
          filters: this.input.filters,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListImagePipelines.imagePipelineList', props);
    return resource.getResponseField('imagePipelineList') as unknown as shapes.ImagebuilderImagePipeline[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listImagePipelines',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.ListImagePipelines.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          filters: this.input.filters,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListImagePipelines.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class ImagebuilderListImageRecipes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ImagebuilderListImageRecipesRequest) {
    super(scope, id);
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listImageRecipes',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.ListImageRecipes.requestId'),
        outputPath: 'requestId',
        parameters: {
          owner: this.input.owner,
          filters: this.input.filters,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListImageRecipes.requestId', props);
    return resource.getResponseField('requestId') as unknown as string;
  }

  public get imageRecipeSummaryList(): shapes.ImagebuilderImageRecipeSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listImageRecipes',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.ListImageRecipes.imageRecipeSummaryList'),
        outputPath: 'imageRecipeSummaryList',
        parameters: {
          owner: this.input.owner,
          filters: this.input.filters,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListImageRecipes.imageRecipeSummaryList', props);
    return resource.getResponseField('imageRecipeSummaryList') as unknown as shapes.ImagebuilderImageRecipeSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listImageRecipes',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.ListImageRecipes.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          owner: this.input.owner,
          filters: this.input.filters,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListImageRecipes.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class ImagebuilderListImages extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ImagebuilderListImagesRequest) {
    super(scope, id);
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listImages',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.ListImages.requestId'),
        outputPath: 'requestId',
        parameters: {
          owner: this.input.owner,
          filters: this.input.filters,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListImages.requestId', props);
    return resource.getResponseField('requestId') as unknown as string;
  }

  public get imageVersionList(): shapes.ImagebuilderImageVersion[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listImages',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.ListImages.imageVersionList'),
        outputPath: 'imageVersionList',
        parameters: {
          owner: this.input.owner,
          filters: this.input.filters,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListImages.imageVersionList', props);
    return resource.getResponseField('imageVersionList') as unknown as shapes.ImagebuilderImageVersion[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listImages',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.ListImages.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          owner: this.input.owner,
          filters: this.input.filters,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListImages.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class ImagebuilderListInfrastructureConfigurations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ImagebuilderListInfrastructureConfigurationsRequest) {
    super(scope, id);
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listInfrastructureConfigurations',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.ListInfrastructureConfigurations.requestId'),
        outputPath: 'requestId',
        parameters: {
          filters: this.input.filters,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListInfrastructureConfigurations.requestId', props);
    return resource.getResponseField('requestId') as unknown as string;
  }

  public get infrastructureConfigurationSummaryList(): shapes.ImagebuilderInfrastructureConfigurationSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listInfrastructureConfigurations',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.ListInfrastructureConfigurations.infrastructureConfigurationSummaryList'),
        outputPath: 'infrastructureConfigurationSummaryList',
        parameters: {
          filters: this.input.filters,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListInfrastructureConfigurations.infrastructureConfigurationSummaryList', props);
    return resource.getResponseField('infrastructureConfigurationSummaryList') as unknown as shapes.ImagebuilderInfrastructureConfigurationSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listInfrastructureConfigurations',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.ListInfrastructureConfigurations.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          filters: this.input.filters,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListInfrastructureConfigurations.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class ImagebuilderListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ImagebuilderListTagsForResourceRequest) {
    super(scope, id);
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.ListTagsForResource.tags'),
        outputPath: 'tags',
        parameters: {
          resourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class ImagebuilderPutComponentPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ImagebuilderPutComponentPolicyRequest) {
    super(scope, id);
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putComponentPolicy',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.PutComponentPolicy.requestId'),
        outputPath: 'requestId',
        parameters: {
          componentArn: this.input.componentArn,
          policy: this.input.policy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutComponentPolicy.requestId', props);
    return resource.getResponseField('requestId') as unknown as string;
  }

  public get componentArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putComponentPolicy',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.PutComponentPolicy.componentArn'),
        outputPath: 'componentArn',
        parameters: {
          componentArn: this.input.componentArn,
          policy: this.input.policy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutComponentPolicy.componentArn', props);
    return resource.getResponseField('componentArn') as unknown as string;
  }

}

export class ImagebuilderPutImagePolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ImagebuilderPutImagePolicyRequest) {
    super(scope, id);
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putImagePolicy',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.PutImagePolicy.requestId'),
        outputPath: 'requestId',
        parameters: {
          imageArn: this.input.imageArn,
          policy: this.input.policy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutImagePolicy.requestId', props);
    return resource.getResponseField('requestId') as unknown as string;
  }

  public get imageArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putImagePolicy',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.PutImagePolicy.imageArn'),
        outputPath: 'imageArn',
        parameters: {
          imageArn: this.input.imageArn,
          policy: this.input.policy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutImagePolicy.imageArn', props);
    return resource.getResponseField('imageArn') as unknown as string;
  }

}

export class ImagebuilderPutImageRecipePolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ImagebuilderPutImageRecipePolicyRequest) {
    super(scope, id);
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putImageRecipePolicy',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.PutImageRecipePolicy.requestId'),
        outputPath: 'requestId',
        parameters: {
          imageRecipeArn: this.input.imageRecipeArn,
          policy: this.input.policy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutImageRecipePolicy.requestId', props);
    return resource.getResponseField('requestId') as unknown as string;
  }

  public get imageRecipeArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putImageRecipePolicy',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.PutImageRecipePolicy.imageRecipeArn'),
        outputPath: 'imageRecipeArn',
        parameters: {
          imageRecipeArn: this.input.imageRecipeArn,
          policy: this.input.policy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutImageRecipePolicy.imageRecipeArn', props);
    return resource.getResponseField('imageRecipeArn') as unknown as string;
  }

}

export class ImagebuilderStartImagePipelineExecution extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ImagebuilderStartImagePipelineExecutionRequest) {
    super(scope, id);
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startImagePipelineExecution',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.StartImagePipelineExecution.requestId'),
        outputPath: 'requestId',
        parameters: {
          imagePipelineArn: this.input.imagePipelineArn,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartImagePipelineExecution.requestId', props);
    return resource.getResponseField('requestId') as unknown as string;
  }

  public get clientToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startImagePipelineExecution',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.StartImagePipelineExecution.clientToken'),
        outputPath: 'clientToken',
        parameters: {
          imagePipelineArn: this.input.imagePipelineArn,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartImagePipelineExecution.clientToken', props);
    return resource.getResponseField('clientToken') as unknown as string;
  }

  public get imageBuildVersionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startImagePipelineExecution',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.StartImagePipelineExecution.imageBuildVersionArn'),
        outputPath: 'imageBuildVersionArn',
        parameters: {
          imagePipelineArn: this.input.imagePipelineArn,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartImagePipelineExecution.imageBuildVersionArn', props);
    return resource.getResponseField('imageBuildVersionArn') as unknown as string;
  }

}

export class ImagebuilderUpdateDistributionConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ImagebuilderUpdateDistributionConfigurationRequest) {
    super(scope, id);
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDistributionConfiguration',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.UpdateDistributionConfiguration.requestId'),
        outputPath: 'requestId',
        parameters: {
          distributionConfigurationArn: this.input.distributionConfigurationArn,
          description: this.input.description,
          distributions: this.input.distributions,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistributionConfiguration.requestId', props);
    return resource.getResponseField('requestId') as unknown as string;
  }

  public get clientToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDistributionConfiguration',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.UpdateDistributionConfiguration.clientToken'),
        outputPath: 'clientToken',
        parameters: {
          distributionConfigurationArn: this.input.distributionConfigurationArn,
          description: this.input.description,
          distributions: this.input.distributions,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistributionConfiguration.clientToken', props);
    return resource.getResponseField('clientToken') as unknown as string;
  }

  public get distributionConfigurationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDistributionConfiguration',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.UpdateDistributionConfiguration.distributionConfigurationArn'),
        outputPath: 'distributionConfigurationArn',
        parameters: {
          distributionConfigurationArn: this.input.distributionConfigurationArn,
          description: this.input.description,
          distributions: this.input.distributions,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistributionConfiguration.distributionConfigurationArn', props);
    return resource.getResponseField('distributionConfigurationArn') as unknown as string;
  }

}

export class ImagebuilderUpdateImagePipeline extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ImagebuilderUpdateImagePipelineRequest) {
    super(scope, id);
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateImagePipeline',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.UpdateImagePipeline.requestId'),
        outputPath: 'requestId',
        parameters: {
          imagePipelineArn: this.input.imagePipelineArn,
          description: this.input.description,
          imageRecipeArn: this.input.imageRecipeArn,
          infrastructureConfigurationArn: this.input.infrastructureConfigurationArn,
          distributionConfigurationArn: this.input.distributionConfigurationArn,
          imageTestsConfiguration: {
            imageTestsEnabled: this.input.imageTestsConfiguration?.imageTestsEnabled,
            timeoutMinutes: this.input.imageTestsConfiguration?.timeoutMinutes,
          },
          enhancedImageMetadataEnabled: this.input.enhancedImageMetadataEnabled,
          schedule: {
            scheduleExpression: this.input.schedule?.scheduleExpression,
            pipelineExecutionStartCondition: this.input.schedule?.pipelineExecutionStartCondition,
          },
          status: this.input.status,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateImagePipeline.requestId', props);
    return resource.getResponseField('requestId') as unknown as string;
  }

  public get clientToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateImagePipeline',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.UpdateImagePipeline.clientToken'),
        outputPath: 'clientToken',
        parameters: {
          imagePipelineArn: this.input.imagePipelineArn,
          description: this.input.description,
          imageRecipeArn: this.input.imageRecipeArn,
          infrastructureConfigurationArn: this.input.infrastructureConfigurationArn,
          distributionConfigurationArn: this.input.distributionConfigurationArn,
          imageTestsConfiguration: {
            imageTestsEnabled: this.input.imageTestsConfiguration?.imageTestsEnabled,
            timeoutMinutes: this.input.imageTestsConfiguration?.timeoutMinutes,
          },
          enhancedImageMetadataEnabled: this.input.enhancedImageMetadataEnabled,
          schedule: {
            scheduleExpression: this.input.schedule?.scheduleExpression,
            pipelineExecutionStartCondition: this.input.schedule?.pipelineExecutionStartCondition,
          },
          status: this.input.status,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateImagePipeline.clientToken', props);
    return resource.getResponseField('clientToken') as unknown as string;
  }

  public get imagePipelineArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateImagePipeline',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.UpdateImagePipeline.imagePipelineArn'),
        outputPath: 'imagePipelineArn',
        parameters: {
          imagePipelineArn: this.input.imagePipelineArn,
          description: this.input.description,
          imageRecipeArn: this.input.imageRecipeArn,
          infrastructureConfigurationArn: this.input.infrastructureConfigurationArn,
          distributionConfigurationArn: this.input.distributionConfigurationArn,
          imageTestsConfiguration: {
            imageTestsEnabled: this.input.imageTestsConfiguration?.imageTestsEnabled,
            timeoutMinutes: this.input.imageTestsConfiguration?.timeoutMinutes,
          },
          enhancedImageMetadataEnabled: this.input.enhancedImageMetadataEnabled,
          schedule: {
            scheduleExpression: this.input.schedule?.scheduleExpression,
            pipelineExecutionStartCondition: this.input.schedule?.pipelineExecutionStartCondition,
          },
          status: this.input.status,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateImagePipeline.imagePipelineArn', props);
    return resource.getResponseField('imagePipelineArn') as unknown as string;
  }

}

export class ImagebuilderUpdateInfrastructureConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ImagebuilderUpdateInfrastructureConfigurationRequest) {
    super(scope, id);
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateInfrastructureConfiguration',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.UpdateInfrastructureConfiguration.requestId'),
        outputPath: 'requestId',
        parameters: {
          infrastructureConfigurationArn: this.input.infrastructureConfigurationArn,
          description: this.input.description,
          instanceTypes: this.input.instanceTypes,
          instanceProfileName: this.input.instanceProfileName,
          securityGroupIds: this.input.securityGroupIds,
          subnetId: this.input.subnetId,
          logging: {
            s3Logs: {
              s3BucketName: this.input.logging?.s3Logs?.s3BucketName,
              s3KeyPrefix: this.input.logging?.s3Logs?.s3KeyPrefix,
            },
          },
          keyPair: this.input.keyPair,
          terminateInstanceOnFailure: this.input.terminateInstanceOnFailure,
          snsTopicArn: this.input.snsTopicArn,
          clientToken: this.input.clientToken,
          resourceTags: this.input.resourceTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateInfrastructureConfiguration.requestId', props);
    return resource.getResponseField('requestId') as unknown as string;
  }

  public get clientToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateInfrastructureConfiguration',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.UpdateInfrastructureConfiguration.clientToken'),
        outputPath: 'clientToken',
        parameters: {
          infrastructureConfigurationArn: this.input.infrastructureConfigurationArn,
          description: this.input.description,
          instanceTypes: this.input.instanceTypes,
          instanceProfileName: this.input.instanceProfileName,
          securityGroupIds: this.input.securityGroupIds,
          subnetId: this.input.subnetId,
          logging: {
            s3Logs: {
              s3BucketName: this.input.logging?.s3Logs?.s3BucketName,
              s3KeyPrefix: this.input.logging?.s3Logs?.s3KeyPrefix,
            },
          },
          keyPair: this.input.keyPair,
          terminateInstanceOnFailure: this.input.terminateInstanceOnFailure,
          snsTopicArn: this.input.snsTopicArn,
          clientToken: this.input.clientToken,
          resourceTags: this.input.resourceTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateInfrastructureConfiguration.clientToken', props);
    return resource.getResponseField('clientToken') as unknown as string;
  }

  public get infrastructureConfigurationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateInfrastructureConfiguration',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.UpdateInfrastructureConfiguration.infrastructureConfigurationArn'),
        outputPath: 'infrastructureConfigurationArn',
        parameters: {
          infrastructureConfigurationArn: this.input.infrastructureConfigurationArn,
          description: this.input.description,
          instanceTypes: this.input.instanceTypes,
          instanceProfileName: this.input.instanceProfileName,
          securityGroupIds: this.input.securityGroupIds,
          subnetId: this.input.subnetId,
          logging: {
            s3Logs: {
              s3BucketName: this.input.logging?.s3Logs?.s3BucketName,
              s3KeyPrefix: this.input.logging?.s3Logs?.s3KeyPrefix,
            },
          },
          keyPair: this.input.keyPair,
          terminateInstanceOnFailure: this.input.terminateInstanceOnFailure,
          snsTopicArn: this.input.snsTopicArn,
          clientToken: this.input.clientToken,
          resourceTags: this.input.resourceTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateInfrastructureConfiguration.infrastructureConfigurationArn', props);
    return resource.getResponseField('infrastructureConfigurationArn') as unknown as string;
  }

}

