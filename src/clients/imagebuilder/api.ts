import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class ImagebuilderClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public cancelImageCreation(input: shapes.ImagebuilderCancelImageCreationRequest): ImagebuilderResponsesCancelImageCreation {
    return new ImagebuilderResponsesCancelImageCreation(this, this.__resources, input);
  }

  public createComponent(input: shapes.ImagebuilderCreateComponentRequest): ImagebuilderResponsesCreateComponent {
    return new ImagebuilderResponsesCreateComponent(this, this.__resources, input);
  }

  public createContainerRecipe(input: shapes.ImagebuilderCreateContainerRecipeRequest): ImagebuilderResponsesCreateContainerRecipe {
    return new ImagebuilderResponsesCreateContainerRecipe(this, this.__resources, input);
  }

  public createDistributionConfiguration(input: shapes.ImagebuilderCreateDistributionConfigurationRequest): ImagebuilderResponsesCreateDistributionConfiguration {
    return new ImagebuilderResponsesCreateDistributionConfiguration(this, this.__resources, input);
  }

  public createImage(input: shapes.ImagebuilderCreateImageRequest): ImagebuilderResponsesCreateImage {
    return new ImagebuilderResponsesCreateImage(this, this.__resources, input);
  }

  public createImagePipeline(input: shapes.ImagebuilderCreateImagePipelineRequest): ImagebuilderResponsesCreateImagePipeline {
    return new ImagebuilderResponsesCreateImagePipeline(this, this.__resources, input);
  }

  public createImageRecipe(input: shapes.ImagebuilderCreateImageRecipeRequest): ImagebuilderResponsesCreateImageRecipe {
    return new ImagebuilderResponsesCreateImageRecipe(this, this.__resources, input);
  }

  public createInfrastructureConfiguration(input: shapes.ImagebuilderCreateInfrastructureConfigurationRequest): ImagebuilderResponsesCreateInfrastructureConfiguration {
    return new ImagebuilderResponsesCreateInfrastructureConfiguration(this, this.__resources, input);
  }

  public deleteComponent(input: shapes.ImagebuilderDeleteComponentRequest): ImagebuilderResponsesDeleteComponent {
    return new ImagebuilderResponsesDeleteComponent(this, this.__resources, input);
  }

  public deleteContainerRecipe(input: shapes.ImagebuilderDeleteContainerRecipeRequest): ImagebuilderResponsesDeleteContainerRecipe {
    return new ImagebuilderResponsesDeleteContainerRecipe(this, this.__resources, input);
  }

  public deleteDistributionConfiguration(input: shapes.ImagebuilderDeleteDistributionConfigurationRequest): ImagebuilderResponsesDeleteDistributionConfiguration {
    return new ImagebuilderResponsesDeleteDistributionConfiguration(this, this.__resources, input);
  }

  public deleteImage(input: shapes.ImagebuilderDeleteImageRequest): ImagebuilderResponsesDeleteImage {
    return new ImagebuilderResponsesDeleteImage(this, this.__resources, input);
  }

  public deleteImagePipeline(input: shapes.ImagebuilderDeleteImagePipelineRequest): ImagebuilderResponsesDeleteImagePipeline {
    return new ImagebuilderResponsesDeleteImagePipeline(this, this.__resources, input);
  }

  public deleteImageRecipe(input: shapes.ImagebuilderDeleteImageRecipeRequest): ImagebuilderResponsesDeleteImageRecipe {
    return new ImagebuilderResponsesDeleteImageRecipe(this, this.__resources, input);
  }

  public deleteInfrastructureConfiguration(input: shapes.ImagebuilderDeleteInfrastructureConfigurationRequest): ImagebuilderResponsesDeleteInfrastructureConfiguration {
    return new ImagebuilderResponsesDeleteInfrastructureConfiguration(this, this.__resources, input);
  }

  public fetchComponent(input: shapes.ImagebuilderGetComponentRequest): ImagebuilderResponsesFetchComponent {
    return new ImagebuilderResponsesFetchComponent(this, this.__resources, input);
  }

  public fetchComponentPolicy(input: shapes.ImagebuilderGetComponentPolicyRequest): ImagebuilderResponsesFetchComponentPolicy {
    return new ImagebuilderResponsesFetchComponentPolicy(this, this.__resources, input);
  }

  public fetchContainerRecipe(input: shapes.ImagebuilderGetContainerRecipeRequest): ImagebuilderResponsesFetchContainerRecipe {
    return new ImagebuilderResponsesFetchContainerRecipe(this, this.__resources, input);
  }

  public fetchContainerRecipePolicy(input: shapes.ImagebuilderGetContainerRecipePolicyRequest): ImagebuilderResponsesFetchContainerRecipePolicy {
    return new ImagebuilderResponsesFetchContainerRecipePolicy(this, this.__resources, input);
  }

  public fetchDistributionConfiguration(input: shapes.ImagebuilderGetDistributionConfigurationRequest): ImagebuilderResponsesFetchDistributionConfiguration {
    return new ImagebuilderResponsesFetchDistributionConfiguration(this, this.__resources, input);
  }

  public fetchImage(input: shapes.ImagebuilderGetImageRequest): ImagebuilderResponsesFetchImage {
    return new ImagebuilderResponsesFetchImage(this, this.__resources, input);
  }

  public fetchImagePipeline(input: shapes.ImagebuilderGetImagePipelineRequest): ImagebuilderResponsesFetchImagePipeline {
    return new ImagebuilderResponsesFetchImagePipeline(this, this.__resources, input);
  }

  public fetchImagePolicy(input: shapes.ImagebuilderGetImagePolicyRequest): ImagebuilderResponsesFetchImagePolicy {
    return new ImagebuilderResponsesFetchImagePolicy(this, this.__resources, input);
  }

  public fetchImageRecipe(input: shapes.ImagebuilderGetImageRecipeRequest): ImagebuilderResponsesFetchImageRecipe {
    return new ImagebuilderResponsesFetchImageRecipe(this, this.__resources, input);
  }

  public fetchImageRecipePolicy(input: shapes.ImagebuilderGetImageRecipePolicyRequest): ImagebuilderResponsesFetchImageRecipePolicy {
    return new ImagebuilderResponsesFetchImageRecipePolicy(this, this.__resources, input);
  }

  public fetchInfrastructureConfiguration(input: shapes.ImagebuilderGetInfrastructureConfigurationRequest): ImagebuilderResponsesFetchInfrastructureConfiguration {
    return new ImagebuilderResponsesFetchInfrastructureConfiguration(this, this.__resources, input);
  }

  public importComponent(input: shapes.ImagebuilderImportComponentRequest): ImagebuilderResponsesImportComponent {
    return new ImagebuilderResponsesImportComponent(this, this.__resources, input);
  }

  public listComponentBuildVersions(input: shapes.ImagebuilderListComponentBuildVersionsRequest): ImagebuilderResponsesListComponentBuildVersions {
    return new ImagebuilderResponsesListComponentBuildVersions(this, this.__resources, input);
  }

  public listComponents(input: shapes.ImagebuilderListComponentsRequest): ImagebuilderResponsesListComponents {
    return new ImagebuilderResponsesListComponents(this, this.__resources, input);
  }

  public listContainerRecipes(input: shapes.ImagebuilderListContainerRecipesRequest): ImagebuilderResponsesListContainerRecipes {
    return new ImagebuilderResponsesListContainerRecipes(this, this.__resources, input);
  }

  public listDistributionConfigurations(input: shapes.ImagebuilderListDistributionConfigurationsRequest): ImagebuilderResponsesListDistributionConfigurations {
    return new ImagebuilderResponsesListDistributionConfigurations(this, this.__resources, input);
  }

  public listImageBuildVersions(input: shapes.ImagebuilderListImageBuildVersionsRequest): ImagebuilderResponsesListImageBuildVersions {
    return new ImagebuilderResponsesListImageBuildVersions(this, this.__resources, input);
  }

  public listImagePackages(input: shapes.ImagebuilderListImagePackagesRequest): ImagebuilderResponsesListImagePackages {
    return new ImagebuilderResponsesListImagePackages(this, this.__resources, input);
  }

  public listImagePipelineImages(input: shapes.ImagebuilderListImagePipelineImagesRequest): ImagebuilderResponsesListImagePipelineImages {
    return new ImagebuilderResponsesListImagePipelineImages(this, this.__resources, input);
  }

  public listImagePipelines(input: shapes.ImagebuilderListImagePipelinesRequest): ImagebuilderResponsesListImagePipelines {
    return new ImagebuilderResponsesListImagePipelines(this, this.__resources, input);
  }

  public listImageRecipes(input: shapes.ImagebuilderListImageRecipesRequest): ImagebuilderResponsesListImageRecipes {
    return new ImagebuilderResponsesListImageRecipes(this, this.__resources, input);
  }

  public listImages(input: shapes.ImagebuilderListImagesRequest): ImagebuilderResponsesListImages {
    return new ImagebuilderResponsesListImages(this, this.__resources, input);
  }

  public listInfrastructureConfigurations(input: shapes.ImagebuilderListInfrastructureConfigurationsRequest): ImagebuilderResponsesListInfrastructureConfigurations {
    return new ImagebuilderResponsesListInfrastructureConfigurations(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.ImagebuilderListTagsForResourceRequest): ImagebuilderResponsesListTagsForResource {
    return new ImagebuilderResponsesListTagsForResource(this, this.__resources, input);
  }

  public putComponentPolicy(input: shapes.ImagebuilderPutComponentPolicyRequest): ImagebuilderResponsesPutComponentPolicy {
    return new ImagebuilderResponsesPutComponentPolicy(this, this.__resources, input);
  }

  public putContainerRecipePolicy(input: shapes.ImagebuilderPutContainerRecipePolicyRequest): ImagebuilderResponsesPutContainerRecipePolicy {
    return new ImagebuilderResponsesPutContainerRecipePolicy(this, this.__resources, input);
  }

  public putImagePolicy(input: shapes.ImagebuilderPutImagePolicyRequest): ImagebuilderResponsesPutImagePolicy {
    return new ImagebuilderResponsesPutImagePolicy(this, this.__resources, input);
  }

  public putImageRecipePolicy(input: shapes.ImagebuilderPutImageRecipePolicyRequest): ImagebuilderResponsesPutImageRecipePolicy {
    return new ImagebuilderResponsesPutImageRecipePolicy(this, this.__resources, input);
  }

  public startImagePipelineExecution(input: shapes.ImagebuilderStartImagePipelineExecutionRequest): ImagebuilderResponsesStartImagePipelineExecution {
    return new ImagebuilderResponsesStartImagePipelineExecution(this, this.__resources, input);
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

  public updateDistributionConfiguration(input: shapes.ImagebuilderUpdateDistributionConfigurationRequest): ImagebuilderResponsesUpdateDistributionConfiguration {
    return new ImagebuilderResponsesUpdateDistributionConfiguration(this, this.__resources, input);
  }

  public updateImagePipeline(input: shapes.ImagebuilderUpdateImagePipelineRequest): ImagebuilderResponsesUpdateImagePipeline {
    return new ImagebuilderResponsesUpdateImagePipeline(this, this.__resources, input);
  }

  public updateInfrastructureConfiguration(input: shapes.ImagebuilderUpdateInfrastructureConfigurationRequest): ImagebuilderResponsesUpdateInfrastructureConfiguration {
    return new ImagebuilderResponsesUpdateInfrastructureConfiguration(this, this.__resources, input);
  }

}

export class ImagebuilderResponsesCancelImageCreation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderCancelImageCreationRequest) {
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
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelImageCreation.requestId', props);
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
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelImageCreation.clientToken', props);
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
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelImageCreation.imageBuildVersionArn', props);
    return resource.getResponseField('imageBuildVersionArn') as unknown as string;
  }

}

export class ImagebuilderResponsesCreateComponent {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderCreateComponentRequest) {
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
          name: this.__input.name,
          semanticVersion: this.__input.semanticVersion,
          description: this.__input.description,
          changeDescription: this.__input.changeDescription,
          platform: this.__input.platform,
          supportedOsVersions: this.__input.supportedOsVersions,
          data: this.__input.data,
          uri: this.__input.uri,
          kmsKeyId: this.__input.kmsKeyId,
          tags: this.__input.tags,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateComponent.requestId', props);
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
          name: this.__input.name,
          semanticVersion: this.__input.semanticVersion,
          description: this.__input.description,
          changeDescription: this.__input.changeDescription,
          platform: this.__input.platform,
          supportedOsVersions: this.__input.supportedOsVersions,
          data: this.__input.data,
          uri: this.__input.uri,
          kmsKeyId: this.__input.kmsKeyId,
          tags: this.__input.tags,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateComponent.clientToken', props);
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
          name: this.__input.name,
          semanticVersion: this.__input.semanticVersion,
          description: this.__input.description,
          changeDescription: this.__input.changeDescription,
          platform: this.__input.platform,
          supportedOsVersions: this.__input.supportedOsVersions,
          data: this.__input.data,
          uri: this.__input.uri,
          kmsKeyId: this.__input.kmsKeyId,
          tags: this.__input.tags,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateComponent.componentBuildVersionArn', props);
    return resource.getResponseField('componentBuildVersionArn') as unknown as string;
  }

}

export class ImagebuilderResponsesCreateContainerRecipe {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderCreateContainerRecipeRequest) {
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerRecipe',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.CreateContainerRecipe.requestId'),
        outputPath: 'requestId',
        parameters: {
          containerType: this.__input.containerType,
          name: this.__input.name,
          description: this.__input.description,
          semanticVersion: this.__input.semanticVersion,
          components: this.__input.components,
          instanceConfiguration: {
            image: this.__input.instanceConfiguration?.image,
            blockDeviceMappings: this.__input.instanceConfiguration?.blockDeviceMappings,
          },
          dockerfileTemplateData: this.__input.dockerfileTemplateData,
          dockerfileTemplateUri: this.__input.dockerfileTemplateUri,
          platformOverride: this.__input.platformOverride,
          imageOsVersionOverride: this.__input.imageOsVersionOverride,
          parentImage: this.__input.parentImage,
          tags: this.__input.tags,
          workingDirectory: this.__input.workingDirectory,
          targetRepository: {
            service: this.__input.targetRepository.service,
            repositoryName: this.__input.targetRepository.repositoryName,
          },
          kmsKeyId: this.__input.kmsKeyId,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerRecipe.requestId', props);
    return resource.getResponseField('requestId') as unknown as string;
  }

  public get clientToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerRecipe',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.CreateContainerRecipe.clientToken'),
        outputPath: 'clientToken',
        parameters: {
          containerType: this.__input.containerType,
          name: this.__input.name,
          description: this.__input.description,
          semanticVersion: this.__input.semanticVersion,
          components: this.__input.components,
          instanceConfiguration: {
            image: this.__input.instanceConfiguration?.image,
            blockDeviceMappings: this.__input.instanceConfiguration?.blockDeviceMappings,
          },
          dockerfileTemplateData: this.__input.dockerfileTemplateData,
          dockerfileTemplateUri: this.__input.dockerfileTemplateUri,
          platformOverride: this.__input.platformOverride,
          imageOsVersionOverride: this.__input.imageOsVersionOverride,
          parentImage: this.__input.parentImage,
          tags: this.__input.tags,
          workingDirectory: this.__input.workingDirectory,
          targetRepository: {
            service: this.__input.targetRepository.service,
            repositoryName: this.__input.targetRepository.repositoryName,
          },
          kmsKeyId: this.__input.kmsKeyId,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerRecipe.clientToken', props);
    return resource.getResponseField('clientToken') as unknown as string;
  }

  public get containerRecipeArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerRecipe',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.CreateContainerRecipe.containerRecipeArn'),
        outputPath: 'containerRecipeArn',
        parameters: {
          containerType: this.__input.containerType,
          name: this.__input.name,
          description: this.__input.description,
          semanticVersion: this.__input.semanticVersion,
          components: this.__input.components,
          instanceConfiguration: {
            image: this.__input.instanceConfiguration?.image,
            blockDeviceMappings: this.__input.instanceConfiguration?.blockDeviceMappings,
          },
          dockerfileTemplateData: this.__input.dockerfileTemplateData,
          dockerfileTemplateUri: this.__input.dockerfileTemplateUri,
          platformOverride: this.__input.platformOverride,
          imageOsVersionOverride: this.__input.imageOsVersionOverride,
          parentImage: this.__input.parentImage,
          tags: this.__input.tags,
          workingDirectory: this.__input.workingDirectory,
          targetRepository: {
            service: this.__input.targetRepository.service,
            repositoryName: this.__input.targetRepository.repositoryName,
          },
          kmsKeyId: this.__input.kmsKeyId,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerRecipe.containerRecipeArn', props);
    return resource.getResponseField('containerRecipeArn') as unknown as string;
  }

}

export class ImagebuilderResponsesCreateDistributionConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderCreateDistributionConfigurationRequest) {
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
          name: this.__input.name,
          description: this.__input.description,
          distributions: this.__input.distributions,
          tags: this.__input.tags,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDistributionConfiguration.requestId', props);
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
          name: this.__input.name,
          description: this.__input.description,
          distributions: this.__input.distributions,
          tags: this.__input.tags,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDistributionConfiguration.clientToken', props);
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
          name: this.__input.name,
          description: this.__input.description,
          distributions: this.__input.distributions,
          tags: this.__input.tags,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDistributionConfiguration.distributionConfigurationArn', props);
    return resource.getResponseField('distributionConfigurationArn') as unknown as string;
  }

}

export class ImagebuilderResponsesCreateImage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderCreateImageRequest) {
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
          imageRecipeArn: this.__input.imageRecipeArn,
          containerRecipeArn: this.__input.containerRecipeArn,
          distributionConfigurationArn: this.__input.distributionConfigurationArn,
          infrastructureConfigurationArn: this.__input.infrastructureConfigurationArn,
          imageTestsConfiguration: {
            imageTestsEnabled: this.__input.imageTestsConfiguration?.imageTestsEnabled,
            timeoutMinutes: this.__input.imageTestsConfiguration?.timeoutMinutes,
          },
          enhancedImageMetadataEnabled: this.__input.enhancedImageMetadataEnabled,
          tags: this.__input.tags,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateImage.requestId', props);
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
          imageRecipeArn: this.__input.imageRecipeArn,
          containerRecipeArn: this.__input.containerRecipeArn,
          distributionConfigurationArn: this.__input.distributionConfigurationArn,
          infrastructureConfigurationArn: this.__input.infrastructureConfigurationArn,
          imageTestsConfiguration: {
            imageTestsEnabled: this.__input.imageTestsConfiguration?.imageTestsEnabled,
            timeoutMinutes: this.__input.imageTestsConfiguration?.timeoutMinutes,
          },
          enhancedImageMetadataEnabled: this.__input.enhancedImageMetadataEnabled,
          tags: this.__input.tags,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateImage.clientToken', props);
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
          imageRecipeArn: this.__input.imageRecipeArn,
          containerRecipeArn: this.__input.containerRecipeArn,
          distributionConfigurationArn: this.__input.distributionConfigurationArn,
          infrastructureConfigurationArn: this.__input.infrastructureConfigurationArn,
          imageTestsConfiguration: {
            imageTestsEnabled: this.__input.imageTestsConfiguration?.imageTestsEnabled,
            timeoutMinutes: this.__input.imageTestsConfiguration?.timeoutMinutes,
          },
          enhancedImageMetadataEnabled: this.__input.enhancedImageMetadataEnabled,
          tags: this.__input.tags,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateImage.imageBuildVersionArn', props);
    return resource.getResponseField('imageBuildVersionArn') as unknown as string;
  }

}

export class ImagebuilderResponsesCreateImagePipeline {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderCreateImagePipelineRequest) {
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
          name: this.__input.name,
          description: this.__input.description,
          imageRecipeArn: this.__input.imageRecipeArn,
          containerRecipeArn: this.__input.containerRecipeArn,
          infrastructureConfigurationArn: this.__input.infrastructureConfigurationArn,
          distributionConfigurationArn: this.__input.distributionConfigurationArn,
          imageTestsConfiguration: {
            imageTestsEnabled: this.__input.imageTestsConfiguration?.imageTestsEnabled,
            timeoutMinutes: this.__input.imageTestsConfiguration?.timeoutMinutes,
          },
          enhancedImageMetadataEnabled: this.__input.enhancedImageMetadataEnabled,
          schedule: {
            scheduleExpression: this.__input.schedule?.scheduleExpression,
            timezone: this.__input.schedule?.timezone,
            pipelineExecutionStartCondition: this.__input.schedule?.pipelineExecutionStartCondition,
          },
          status: this.__input.status,
          tags: this.__input.tags,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateImagePipeline.requestId', props);
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
          name: this.__input.name,
          description: this.__input.description,
          imageRecipeArn: this.__input.imageRecipeArn,
          containerRecipeArn: this.__input.containerRecipeArn,
          infrastructureConfigurationArn: this.__input.infrastructureConfigurationArn,
          distributionConfigurationArn: this.__input.distributionConfigurationArn,
          imageTestsConfiguration: {
            imageTestsEnabled: this.__input.imageTestsConfiguration?.imageTestsEnabled,
            timeoutMinutes: this.__input.imageTestsConfiguration?.timeoutMinutes,
          },
          enhancedImageMetadataEnabled: this.__input.enhancedImageMetadataEnabled,
          schedule: {
            scheduleExpression: this.__input.schedule?.scheduleExpression,
            timezone: this.__input.schedule?.timezone,
            pipelineExecutionStartCondition: this.__input.schedule?.pipelineExecutionStartCondition,
          },
          status: this.__input.status,
          tags: this.__input.tags,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateImagePipeline.clientToken', props);
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
          name: this.__input.name,
          description: this.__input.description,
          imageRecipeArn: this.__input.imageRecipeArn,
          containerRecipeArn: this.__input.containerRecipeArn,
          infrastructureConfigurationArn: this.__input.infrastructureConfigurationArn,
          distributionConfigurationArn: this.__input.distributionConfigurationArn,
          imageTestsConfiguration: {
            imageTestsEnabled: this.__input.imageTestsConfiguration?.imageTestsEnabled,
            timeoutMinutes: this.__input.imageTestsConfiguration?.timeoutMinutes,
          },
          enhancedImageMetadataEnabled: this.__input.enhancedImageMetadataEnabled,
          schedule: {
            scheduleExpression: this.__input.schedule?.scheduleExpression,
            timezone: this.__input.schedule?.timezone,
            pipelineExecutionStartCondition: this.__input.schedule?.pipelineExecutionStartCondition,
          },
          status: this.__input.status,
          tags: this.__input.tags,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateImagePipeline.imagePipelineArn', props);
    return resource.getResponseField('imagePipelineArn') as unknown as string;
  }

}

export class ImagebuilderResponsesCreateImageRecipe {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderCreateImageRecipeRequest) {
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
          name: this.__input.name,
          description: this.__input.description,
          semanticVersion: this.__input.semanticVersion,
          components: this.__input.components,
          parentImage: this.__input.parentImage,
          blockDeviceMappings: this.__input.blockDeviceMappings,
          tags: this.__input.tags,
          workingDirectory: this.__input.workingDirectory,
          additionalInstanceConfiguration: {
            systemsManagerAgent: {
              uninstallAfterBuild: this.__input.additionalInstanceConfiguration?.systemsManagerAgent?.uninstallAfterBuild,
            },
            userDataOverride: this.__input.additionalInstanceConfiguration?.userDataOverride,
          },
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateImageRecipe.requestId', props);
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
          name: this.__input.name,
          description: this.__input.description,
          semanticVersion: this.__input.semanticVersion,
          components: this.__input.components,
          parentImage: this.__input.parentImage,
          blockDeviceMappings: this.__input.blockDeviceMappings,
          tags: this.__input.tags,
          workingDirectory: this.__input.workingDirectory,
          additionalInstanceConfiguration: {
            systemsManagerAgent: {
              uninstallAfterBuild: this.__input.additionalInstanceConfiguration?.systemsManagerAgent?.uninstallAfterBuild,
            },
            userDataOverride: this.__input.additionalInstanceConfiguration?.userDataOverride,
          },
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateImageRecipe.clientToken', props);
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
          name: this.__input.name,
          description: this.__input.description,
          semanticVersion: this.__input.semanticVersion,
          components: this.__input.components,
          parentImage: this.__input.parentImage,
          blockDeviceMappings: this.__input.blockDeviceMappings,
          tags: this.__input.tags,
          workingDirectory: this.__input.workingDirectory,
          additionalInstanceConfiguration: {
            systemsManagerAgent: {
              uninstallAfterBuild: this.__input.additionalInstanceConfiguration?.systemsManagerAgent?.uninstallAfterBuild,
            },
            userDataOverride: this.__input.additionalInstanceConfiguration?.userDataOverride,
          },
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateImageRecipe.imageRecipeArn', props);
    return resource.getResponseField('imageRecipeArn') as unknown as string;
  }

}

export class ImagebuilderResponsesCreateInfrastructureConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderCreateInfrastructureConfigurationRequest) {
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
          name: this.__input.name,
          description: this.__input.description,
          instanceTypes: this.__input.instanceTypes,
          instanceProfileName: this.__input.instanceProfileName,
          securityGroupIds: this.__input.securityGroupIds,
          subnetId: this.__input.subnetId,
          logging: {
            s3Logs: {
              s3BucketName: this.__input.logging?.s3Logs?.s3BucketName,
              s3KeyPrefix: this.__input.logging?.s3Logs?.s3KeyPrefix,
            },
          },
          keyPair: this.__input.keyPair,
          terminateInstanceOnFailure: this.__input.terminateInstanceOnFailure,
          snsTopicArn: this.__input.snsTopicArn,
          resourceTags: this.__input.resourceTags,
          tags: this.__input.tags,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateInfrastructureConfiguration.requestId', props);
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
          name: this.__input.name,
          description: this.__input.description,
          instanceTypes: this.__input.instanceTypes,
          instanceProfileName: this.__input.instanceProfileName,
          securityGroupIds: this.__input.securityGroupIds,
          subnetId: this.__input.subnetId,
          logging: {
            s3Logs: {
              s3BucketName: this.__input.logging?.s3Logs?.s3BucketName,
              s3KeyPrefix: this.__input.logging?.s3Logs?.s3KeyPrefix,
            },
          },
          keyPair: this.__input.keyPair,
          terminateInstanceOnFailure: this.__input.terminateInstanceOnFailure,
          snsTopicArn: this.__input.snsTopicArn,
          resourceTags: this.__input.resourceTags,
          tags: this.__input.tags,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateInfrastructureConfiguration.clientToken', props);
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
          name: this.__input.name,
          description: this.__input.description,
          instanceTypes: this.__input.instanceTypes,
          instanceProfileName: this.__input.instanceProfileName,
          securityGroupIds: this.__input.securityGroupIds,
          subnetId: this.__input.subnetId,
          logging: {
            s3Logs: {
              s3BucketName: this.__input.logging?.s3Logs?.s3BucketName,
              s3KeyPrefix: this.__input.logging?.s3Logs?.s3KeyPrefix,
            },
          },
          keyPair: this.__input.keyPair,
          terminateInstanceOnFailure: this.__input.terminateInstanceOnFailure,
          snsTopicArn: this.__input.snsTopicArn,
          resourceTags: this.__input.resourceTags,
          tags: this.__input.tags,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateInfrastructureConfiguration.infrastructureConfigurationArn', props);
    return resource.getResponseField('infrastructureConfigurationArn') as unknown as string;
  }

}

export class ImagebuilderResponsesDeleteComponent {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderDeleteComponentRequest) {
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
          componentBuildVersionArn: this.__input.componentBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteComponent.requestId', props);
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
          componentBuildVersionArn: this.__input.componentBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteComponent.componentBuildVersionArn', props);
    return resource.getResponseField('componentBuildVersionArn') as unknown as string;
  }

}

export class ImagebuilderResponsesDeleteContainerRecipe {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderDeleteContainerRecipeRequest) {
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteContainerRecipe',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.DeleteContainerRecipe.requestId'),
        outputPath: 'requestId',
        parameters: {
          containerRecipeArn: this.__input.containerRecipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteContainerRecipe.requestId', props);
    return resource.getResponseField('requestId') as unknown as string;
  }

  public get containerRecipeArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteContainerRecipe',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.DeleteContainerRecipe.containerRecipeArn'),
        outputPath: 'containerRecipeArn',
        parameters: {
          containerRecipeArn: this.__input.containerRecipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteContainerRecipe.containerRecipeArn', props);
    return resource.getResponseField('containerRecipeArn') as unknown as string;
  }

}

export class ImagebuilderResponsesDeleteDistributionConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderDeleteDistributionConfigurationRequest) {
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
          distributionConfigurationArn: this.__input.distributionConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDistributionConfiguration.requestId', props);
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
          distributionConfigurationArn: this.__input.distributionConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDistributionConfiguration.distributionConfigurationArn', props);
    return resource.getResponseField('distributionConfigurationArn') as unknown as string;
  }

}

export class ImagebuilderResponsesDeleteImage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderDeleteImageRequest) {
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
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteImage.requestId', props);
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
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteImage.imageBuildVersionArn', props);
    return resource.getResponseField('imageBuildVersionArn') as unknown as string;
  }

}

export class ImagebuilderResponsesDeleteImagePipeline {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderDeleteImagePipelineRequest) {
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
          imagePipelineArn: this.__input.imagePipelineArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteImagePipeline.requestId', props);
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
          imagePipelineArn: this.__input.imagePipelineArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteImagePipeline.imagePipelineArn', props);
    return resource.getResponseField('imagePipelineArn') as unknown as string;
  }

}

export class ImagebuilderResponsesDeleteImageRecipe {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderDeleteImageRecipeRequest) {
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
          imageRecipeArn: this.__input.imageRecipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteImageRecipe.requestId', props);
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
          imageRecipeArn: this.__input.imageRecipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteImageRecipe.imageRecipeArn', props);
    return resource.getResponseField('imageRecipeArn') as unknown as string;
  }

}

export class ImagebuilderResponsesDeleteInfrastructureConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderDeleteInfrastructureConfigurationRequest) {
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
          infrastructureConfigurationArn: this.__input.infrastructureConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteInfrastructureConfiguration.requestId', props);
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
          infrastructureConfigurationArn: this.__input.infrastructureConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteInfrastructureConfiguration.infrastructureConfigurationArn', props);
    return resource.getResponseField('infrastructureConfigurationArn') as unknown as string;
  }

}

export class ImagebuilderResponsesFetchComponent {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderGetComponentRequest) {
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
          componentBuildVersionArn: this.__input.componentBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetComponent.requestId', props);
    return resource.getResponseField('requestId') as unknown as string;
  }

  public get component(): ImagebuilderResponsesFetchComponentComponent {
    return new ImagebuilderResponsesFetchComponentComponent(this.__scope, this.__resources, this.__input);
  }

}

export class ImagebuilderResponsesFetchComponentComponent {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderGetComponentRequest) {
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
          componentBuildVersionArn: this.__input.componentBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetComponent.component.arn', props);
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
          componentBuildVersionArn: this.__input.componentBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetComponent.component.name', props);
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
          componentBuildVersionArn: this.__input.componentBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetComponent.component.version', props);
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
          componentBuildVersionArn: this.__input.componentBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetComponent.component.description', props);
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
          componentBuildVersionArn: this.__input.componentBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetComponent.component.changeDescription', props);
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
          componentBuildVersionArn: this.__input.componentBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetComponent.component.type', props);
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
          componentBuildVersionArn: this.__input.componentBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetComponent.component.platform', props);
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
          componentBuildVersionArn: this.__input.componentBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetComponent.component.supportedOsVersions', props);
    return resource.getResponseField('component.supportedOsVersions') as unknown as string[];
  }

  public get parameters(): shapes.ImagebuilderComponentParameterDetail[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getComponent',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetComponent.component.parameters'),
        outputPath: 'component.parameters',
        parameters: {
          componentBuildVersionArn: this.__input.componentBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetComponent.component.parameters', props);
    return resource.getResponseField('component.parameters') as unknown as shapes.ImagebuilderComponentParameterDetail[];
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
          componentBuildVersionArn: this.__input.componentBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetComponent.component.owner', props);
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
          componentBuildVersionArn: this.__input.componentBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetComponent.component.data', props);
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
          componentBuildVersionArn: this.__input.componentBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetComponent.component.kmsKeyId', props);
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
          componentBuildVersionArn: this.__input.componentBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetComponent.component.encrypted', props);
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
          componentBuildVersionArn: this.__input.componentBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetComponent.component.dateCreated', props);
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
          componentBuildVersionArn: this.__input.componentBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetComponent.component.tags', props);
    return resource.getResponseField('component.tags') as unknown as Record<string, string>;
  }

}

export class ImagebuilderResponsesFetchComponentPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderGetComponentPolicyRequest) {
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
          componentArn: this.__input.componentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetComponentPolicy.requestId', props);
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
          componentArn: this.__input.componentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetComponentPolicy.policy', props);
    return resource.getResponseField('policy') as unknown as string;
  }

}

export class ImagebuilderResponsesFetchContainerRecipe {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderGetContainerRecipeRequest) {
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContainerRecipe',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetContainerRecipe.requestId'),
        outputPath: 'requestId',
        parameters: {
          containerRecipeArn: this.__input.containerRecipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContainerRecipe.requestId', props);
    return resource.getResponseField('requestId') as unknown as string;
  }

  public get containerRecipe(): ImagebuilderResponsesFetchContainerRecipeContainerRecipe {
    return new ImagebuilderResponsesFetchContainerRecipeContainerRecipe(this.__scope, this.__resources, this.__input);
  }

}

export class ImagebuilderResponsesFetchContainerRecipeContainerRecipe {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderGetContainerRecipeRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContainerRecipe',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetContainerRecipe.containerRecipe.arn'),
        outputPath: 'containerRecipe.arn',
        parameters: {
          containerRecipeArn: this.__input.containerRecipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContainerRecipe.containerRecipe.arn', props);
    return resource.getResponseField('containerRecipe.arn') as unknown as string;
  }

  public get containerType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContainerRecipe',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetContainerRecipe.containerRecipe.containerType'),
        outputPath: 'containerRecipe.containerType',
        parameters: {
          containerRecipeArn: this.__input.containerRecipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContainerRecipe.containerRecipe.containerType', props);
    return resource.getResponseField('containerRecipe.containerType') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContainerRecipe',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetContainerRecipe.containerRecipe.name'),
        outputPath: 'containerRecipe.name',
        parameters: {
          containerRecipeArn: this.__input.containerRecipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContainerRecipe.containerRecipe.name', props);
    return resource.getResponseField('containerRecipe.name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContainerRecipe',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetContainerRecipe.containerRecipe.description'),
        outputPath: 'containerRecipe.description',
        parameters: {
          containerRecipeArn: this.__input.containerRecipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContainerRecipe.containerRecipe.description', props);
    return resource.getResponseField('containerRecipe.description') as unknown as string;
  }

  public get platform(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContainerRecipe',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetContainerRecipe.containerRecipe.platform'),
        outputPath: 'containerRecipe.platform',
        parameters: {
          containerRecipeArn: this.__input.containerRecipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContainerRecipe.containerRecipe.platform', props);
    return resource.getResponseField('containerRecipe.platform') as unknown as string;
  }

  public get owner(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContainerRecipe',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetContainerRecipe.containerRecipe.owner'),
        outputPath: 'containerRecipe.owner',
        parameters: {
          containerRecipeArn: this.__input.containerRecipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContainerRecipe.containerRecipe.owner', props);
    return resource.getResponseField('containerRecipe.owner') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContainerRecipe',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetContainerRecipe.containerRecipe.version'),
        outputPath: 'containerRecipe.version',
        parameters: {
          containerRecipeArn: this.__input.containerRecipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContainerRecipe.containerRecipe.version', props);
    return resource.getResponseField('containerRecipe.version') as unknown as string;
  }

  public get components(): shapes.ImagebuilderComponentConfiguration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContainerRecipe',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetContainerRecipe.containerRecipe.components'),
        outputPath: 'containerRecipe.components',
        parameters: {
          containerRecipeArn: this.__input.containerRecipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContainerRecipe.containerRecipe.components', props);
    return resource.getResponseField('containerRecipe.components') as unknown as shapes.ImagebuilderComponentConfiguration[];
  }

  public get instanceConfiguration(): ImagebuilderResponsesFetchContainerRecipeContainerRecipeInstanceConfiguration {
    return new ImagebuilderResponsesFetchContainerRecipeContainerRecipeInstanceConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get dockerfileTemplateData(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContainerRecipe',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetContainerRecipe.containerRecipe.dockerfileTemplateData'),
        outputPath: 'containerRecipe.dockerfileTemplateData',
        parameters: {
          containerRecipeArn: this.__input.containerRecipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContainerRecipe.containerRecipe.dockerfileTemplateData', props);
    return resource.getResponseField('containerRecipe.dockerfileTemplateData') as unknown as string;
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContainerRecipe',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetContainerRecipe.containerRecipe.kmsKeyId'),
        outputPath: 'containerRecipe.kmsKeyId',
        parameters: {
          containerRecipeArn: this.__input.containerRecipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContainerRecipe.containerRecipe.kmsKeyId', props);
    return resource.getResponseField('containerRecipe.kmsKeyId') as unknown as string;
  }

  public get encrypted(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContainerRecipe',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetContainerRecipe.containerRecipe.encrypted'),
        outputPath: 'containerRecipe.encrypted',
        parameters: {
          containerRecipeArn: this.__input.containerRecipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContainerRecipe.containerRecipe.encrypted', props);
    return resource.getResponseField('containerRecipe.encrypted') as unknown as boolean;
  }

  public get parentImage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContainerRecipe',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetContainerRecipe.containerRecipe.parentImage'),
        outputPath: 'containerRecipe.parentImage',
        parameters: {
          containerRecipeArn: this.__input.containerRecipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContainerRecipe.containerRecipe.parentImage', props);
    return resource.getResponseField('containerRecipe.parentImage') as unknown as string;
  }

  public get dateCreated(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContainerRecipe',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetContainerRecipe.containerRecipe.dateCreated'),
        outputPath: 'containerRecipe.dateCreated',
        parameters: {
          containerRecipeArn: this.__input.containerRecipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContainerRecipe.containerRecipe.dateCreated', props);
    return resource.getResponseField('containerRecipe.dateCreated') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContainerRecipe',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetContainerRecipe.containerRecipe.tags'),
        outputPath: 'containerRecipe.tags',
        parameters: {
          containerRecipeArn: this.__input.containerRecipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContainerRecipe.containerRecipe.tags', props);
    return resource.getResponseField('containerRecipe.tags') as unknown as Record<string, string>;
  }

  public get workingDirectory(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContainerRecipe',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetContainerRecipe.containerRecipe.workingDirectory'),
        outputPath: 'containerRecipe.workingDirectory',
        parameters: {
          containerRecipeArn: this.__input.containerRecipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContainerRecipe.containerRecipe.workingDirectory', props);
    return resource.getResponseField('containerRecipe.workingDirectory') as unknown as string;
  }

  public get targetRepository(): ImagebuilderResponsesFetchContainerRecipeContainerRecipeTargetRepository {
    return new ImagebuilderResponsesFetchContainerRecipeContainerRecipeTargetRepository(this.__scope, this.__resources, this.__input);
  }

}

export class ImagebuilderResponsesFetchContainerRecipeContainerRecipeInstanceConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderGetContainerRecipeRequest) {
  }

  public get image(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContainerRecipe',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetContainerRecipe.containerRecipe.instanceConfiguration.image'),
        outputPath: 'containerRecipe.instanceConfiguration.image',
        parameters: {
          containerRecipeArn: this.__input.containerRecipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContainerRecipe.containerRecipe.instanceConfiguration.image', props);
    return resource.getResponseField('containerRecipe.instanceConfiguration.image') as unknown as string;
  }

  public get blockDeviceMappings(): shapes.ImagebuilderInstanceBlockDeviceMapping[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContainerRecipe',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetContainerRecipe.containerRecipe.instanceConfiguration.blockDeviceMappings'),
        outputPath: 'containerRecipe.instanceConfiguration.blockDeviceMappings',
        parameters: {
          containerRecipeArn: this.__input.containerRecipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContainerRecipe.containerRecipe.instanceConfiguration.blockDeviceMappings', props);
    return resource.getResponseField('containerRecipe.instanceConfiguration.blockDeviceMappings') as unknown as shapes.ImagebuilderInstanceBlockDeviceMapping[];
  }

}

export class ImagebuilderResponsesFetchContainerRecipeContainerRecipeTargetRepository {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderGetContainerRecipeRequest) {
  }

  public get service(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContainerRecipe',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetContainerRecipe.containerRecipe.targetRepository.service'),
        outputPath: 'containerRecipe.targetRepository.service',
        parameters: {
          containerRecipeArn: this.__input.containerRecipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContainerRecipe.containerRecipe.targetRepository.service', props);
    return resource.getResponseField('containerRecipe.targetRepository.service') as unknown as string;
  }

  public get repositoryName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContainerRecipe',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetContainerRecipe.containerRecipe.targetRepository.repositoryName'),
        outputPath: 'containerRecipe.targetRepository.repositoryName',
        parameters: {
          containerRecipeArn: this.__input.containerRecipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContainerRecipe.containerRecipe.targetRepository.repositoryName', props);
    return resource.getResponseField('containerRecipe.targetRepository.repositoryName') as unknown as string;
  }

}

export class ImagebuilderResponsesFetchContainerRecipePolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderGetContainerRecipePolicyRequest) {
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContainerRecipePolicy',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetContainerRecipePolicy.requestId'),
        outputPath: 'requestId',
        parameters: {
          containerRecipeArn: this.__input.containerRecipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContainerRecipePolicy.requestId', props);
    return resource.getResponseField('requestId') as unknown as string;
  }

  public get policy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContainerRecipePolicy',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetContainerRecipePolicy.policy'),
        outputPath: 'policy',
        parameters: {
          containerRecipeArn: this.__input.containerRecipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContainerRecipePolicy.policy', props);
    return resource.getResponseField('policy') as unknown as string;
  }

}

export class ImagebuilderResponsesFetchDistributionConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderGetDistributionConfigurationRequest) {
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
          distributionConfigurationArn: this.__input.distributionConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDistributionConfiguration.requestId', props);
    return resource.getResponseField('requestId') as unknown as string;
  }

  public get distributionConfiguration(): ImagebuilderResponsesFetchDistributionConfigurationDistributionConfiguration {
    return new ImagebuilderResponsesFetchDistributionConfigurationDistributionConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class ImagebuilderResponsesFetchDistributionConfigurationDistributionConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderGetDistributionConfigurationRequest) {
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
          distributionConfigurationArn: this.__input.distributionConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDistributionConfiguration.distributionConfiguration.arn', props);
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
          distributionConfigurationArn: this.__input.distributionConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDistributionConfiguration.distributionConfiguration.name', props);
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
          distributionConfigurationArn: this.__input.distributionConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDistributionConfiguration.distributionConfiguration.description', props);
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
          distributionConfigurationArn: this.__input.distributionConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDistributionConfiguration.distributionConfiguration.distributions', props);
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
          distributionConfigurationArn: this.__input.distributionConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDistributionConfiguration.distributionConfiguration.timeoutMinutes', props);
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
          distributionConfigurationArn: this.__input.distributionConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDistributionConfiguration.distributionConfiguration.dateCreated', props);
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
          distributionConfigurationArn: this.__input.distributionConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDistributionConfiguration.distributionConfiguration.dateUpdated', props);
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
          distributionConfigurationArn: this.__input.distributionConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDistributionConfiguration.distributionConfiguration.tags', props);
    return resource.getResponseField('distributionConfiguration.tags') as unknown as Record<string, string>;
  }

}

export class ImagebuilderResponsesFetchImage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderGetImageRequest) {
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
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.requestId', props);
    return resource.getResponseField('requestId') as unknown as string;
  }

  public get image(): ImagebuilderResponsesFetchImageImage {
    return new ImagebuilderResponsesFetchImageImage(this.__scope, this.__resources, this.__input);
  }

}

export class ImagebuilderResponsesFetchImageImage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderGetImageRequest) {
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
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.arn', props);
    return resource.getResponseField('image.arn') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.type'),
        outputPath: 'image.type',
        parameters: {
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.type', props);
    return resource.getResponseField('image.type') as unknown as string;
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
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.name', props);
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
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.version', props);
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
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.platform', props);
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
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.enhancedImageMetadataEnabled', props);
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
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.osVersion', props);
    return resource.getResponseField('image.osVersion') as unknown as string;
  }

  public get state(): ImagebuilderResponsesFetchImageImageState {
    return new ImagebuilderResponsesFetchImageImageState(this.__scope, this.__resources, this.__input);
  }

  public get imageRecipe(): ImagebuilderResponsesFetchImageImageImageRecipe {
    return new ImagebuilderResponsesFetchImageImageImageRecipe(this.__scope, this.__resources, this.__input);
  }

  public get containerRecipe(): ImagebuilderResponsesFetchImageImageContainerRecipe {
    return new ImagebuilderResponsesFetchImageImageContainerRecipe(this.__scope, this.__resources, this.__input);
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
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.sourcePipelineName', props);
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
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.sourcePipelineArn', props);
    return resource.getResponseField('image.sourcePipelineArn') as unknown as string;
  }

  public get infrastructureConfiguration(): ImagebuilderResponsesFetchImageImageInfrastructureConfiguration {
    return new ImagebuilderResponsesFetchImageImageInfrastructureConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get distributionConfiguration(): ImagebuilderResponsesFetchImageImageDistributionConfiguration {
    return new ImagebuilderResponsesFetchImageImageDistributionConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get imageTestsConfiguration(): ImagebuilderResponsesFetchImageImageImageTestsConfiguration {
    return new ImagebuilderResponsesFetchImageImageImageTestsConfiguration(this.__scope, this.__resources, this.__input);
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
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.dateCreated', props);
    return resource.getResponseField('image.dateCreated') as unknown as string;
  }

  public get outputResources(): ImagebuilderResponsesFetchImageImageOutputResources {
    return new ImagebuilderResponsesFetchImageImageOutputResources(this.__scope, this.__resources, this.__input);
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
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.tags', props);
    return resource.getResponseField('image.tags') as unknown as Record<string, string>;
  }

}

export class ImagebuilderResponsesFetchImageImageState {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderGetImageRequest) {
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
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.state.status', props);
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
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.state.reason', props);
    return resource.getResponseField('image.state.reason') as unknown as string;
  }

}

export class ImagebuilderResponsesFetchImageImageImageRecipe {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderGetImageRequest) {
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
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.imageRecipe.arn', props);
    return resource.getResponseField('image.imageRecipe.arn') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.imageRecipe.type'),
        outputPath: 'image.imageRecipe.type',
        parameters: {
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.imageRecipe.type', props);
    return resource.getResponseField('image.imageRecipe.type') as unknown as string;
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
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.imageRecipe.name', props);
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
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.imageRecipe.description', props);
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
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.imageRecipe.platform', props);
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
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.imageRecipe.owner', props);
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
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.imageRecipe.version', props);
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
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.imageRecipe.components', props);
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
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.imageRecipe.parentImage', props);
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
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.imageRecipe.blockDeviceMappings', props);
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
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.imageRecipe.dateCreated', props);
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
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.imageRecipe.tags', props);
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
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.imageRecipe.workingDirectory', props);
    return resource.getResponseField('image.imageRecipe.workingDirectory') as unknown as string;
  }

  public get additionalInstanceConfiguration(): ImagebuilderResponsesFetchImageImageImageRecipeAdditionalInstanceConfiguration {
    return new ImagebuilderResponsesFetchImageImageImageRecipeAdditionalInstanceConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class ImagebuilderResponsesFetchImageImageImageRecipeAdditionalInstanceConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderGetImageRequest) {
  }

  public get systemsManagerAgent(): ImagebuilderResponsesFetchImageImageImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent {
    return new ImagebuilderResponsesFetchImageImageImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent(this.__scope, this.__resources, this.__input);
  }

  public get userDataOverride(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.imageRecipe.additionalInstanceConfiguration.userDataOverride'),
        outputPath: 'image.imageRecipe.additionalInstanceConfiguration.userDataOverride',
        parameters: {
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.imageRecipe.additionalInstanceConfiguration.userDataOverride', props);
    return resource.getResponseField('image.imageRecipe.additionalInstanceConfiguration.userDataOverride') as unknown as string;
  }

}

export class ImagebuilderResponsesFetchImageImageImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderGetImageRequest) {
  }

  public get uninstallAfterBuild(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.imageRecipe.additionalInstanceConfiguration.systemsManagerAgent.uninstallAfterBuild'),
        outputPath: 'image.imageRecipe.additionalInstanceConfiguration.systemsManagerAgent.uninstallAfterBuild',
        parameters: {
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.imageRecipe.additionalInstanceConfiguration.systemsManagerAgent.uninstallAfterBuild', props);
    return resource.getResponseField('image.imageRecipe.additionalInstanceConfiguration.systemsManagerAgent.uninstallAfterBuild') as unknown as boolean;
  }

}

export class ImagebuilderResponsesFetchImageImageContainerRecipe {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderGetImageRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.containerRecipe.arn'),
        outputPath: 'image.containerRecipe.arn',
        parameters: {
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.containerRecipe.arn', props);
    return resource.getResponseField('image.containerRecipe.arn') as unknown as string;
  }

  public get containerType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.containerRecipe.containerType'),
        outputPath: 'image.containerRecipe.containerType',
        parameters: {
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.containerRecipe.containerType', props);
    return resource.getResponseField('image.containerRecipe.containerType') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.containerRecipe.name'),
        outputPath: 'image.containerRecipe.name',
        parameters: {
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.containerRecipe.name', props);
    return resource.getResponseField('image.containerRecipe.name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.containerRecipe.description'),
        outputPath: 'image.containerRecipe.description',
        parameters: {
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.containerRecipe.description', props);
    return resource.getResponseField('image.containerRecipe.description') as unknown as string;
  }

  public get platform(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.containerRecipe.platform'),
        outputPath: 'image.containerRecipe.platform',
        parameters: {
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.containerRecipe.platform', props);
    return resource.getResponseField('image.containerRecipe.platform') as unknown as string;
  }

  public get owner(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.containerRecipe.owner'),
        outputPath: 'image.containerRecipe.owner',
        parameters: {
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.containerRecipe.owner', props);
    return resource.getResponseField('image.containerRecipe.owner') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.containerRecipe.version'),
        outputPath: 'image.containerRecipe.version',
        parameters: {
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.containerRecipe.version', props);
    return resource.getResponseField('image.containerRecipe.version') as unknown as string;
  }

  public get components(): shapes.ImagebuilderComponentConfiguration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.containerRecipe.components'),
        outputPath: 'image.containerRecipe.components',
        parameters: {
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.containerRecipe.components', props);
    return resource.getResponseField('image.containerRecipe.components') as unknown as shapes.ImagebuilderComponentConfiguration[];
  }

  public get instanceConfiguration(): ImagebuilderResponsesFetchImageImageContainerRecipeInstanceConfiguration {
    return new ImagebuilderResponsesFetchImageImageContainerRecipeInstanceConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get dockerfileTemplateData(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.containerRecipe.dockerfileTemplateData'),
        outputPath: 'image.containerRecipe.dockerfileTemplateData',
        parameters: {
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.containerRecipe.dockerfileTemplateData', props);
    return resource.getResponseField('image.containerRecipe.dockerfileTemplateData') as unknown as string;
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.containerRecipe.kmsKeyId'),
        outputPath: 'image.containerRecipe.kmsKeyId',
        parameters: {
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.containerRecipe.kmsKeyId', props);
    return resource.getResponseField('image.containerRecipe.kmsKeyId') as unknown as string;
  }

  public get encrypted(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.containerRecipe.encrypted'),
        outputPath: 'image.containerRecipe.encrypted',
        parameters: {
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.containerRecipe.encrypted', props);
    return resource.getResponseField('image.containerRecipe.encrypted') as unknown as boolean;
  }

  public get parentImage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.containerRecipe.parentImage'),
        outputPath: 'image.containerRecipe.parentImage',
        parameters: {
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.containerRecipe.parentImage', props);
    return resource.getResponseField('image.containerRecipe.parentImage') as unknown as string;
  }

  public get dateCreated(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.containerRecipe.dateCreated'),
        outputPath: 'image.containerRecipe.dateCreated',
        parameters: {
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.containerRecipe.dateCreated', props);
    return resource.getResponseField('image.containerRecipe.dateCreated') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.containerRecipe.tags'),
        outputPath: 'image.containerRecipe.tags',
        parameters: {
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.containerRecipe.tags', props);
    return resource.getResponseField('image.containerRecipe.tags') as unknown as Record<string, string>;
  }

  public get workingDirectory(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.containerRecipe.workingDirectory'),
        outputPath: 'image.containerRecipe.workingDirectory',
        parameters: {
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.containerRecipe.workingDirectory', props);
    return resource.getResponseField('image.containerRecipe.workingDirectory') as unknown as string;
  }

  public get targetRepository(): ImagebuilderResponsesFetchImageImageContainerRecipeTargetRepository {
    return new ImagebuilderResponsesFetchImageImageContainerRecipeTargetRepository(this.__scope, this.__resources, this.__input);
  }

}

export class ImagebuilderResponsesFetchImageImageContainerRecipeInstanceConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderGetImageRequest) {
  }

  public get image(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.containerRecipe.instanceConfiguration.image'),
        outputPath: 'image.containerRecipe.instanceConfiguration.image',
        parameters: {
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.containerRecipe.instanceConfiguration.image', props);
    return resource.getResponseField('image.containerRecipe.instanceConfiguration.image') as unknown as string;
  }

  public get blockDeviceMappings(): shapes.ImagebuilderInstanceBlockDeviceMapping[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.containerRecipe.instanceConfiguration.blockDeviceMappings'),
        outputPath: 'image.containerRecipe.instanceConfiguration.blockDeviceMappings',
        parameters: {
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.containerRecipe.instanceConfiguration.blockDeviceMappings', props);
    return resource.getResponseField('image.containerRecipe.instanceConfiguration.blockDeviceMappings') as unknown as shapes.ImagebuilderInstanceBlockDeviceMapping[];
  }

}

export class ImagebuilderResponsesFetchImageImageContainerRecipeTargetRepository {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderGetImageRequest) {
  }

  public get service(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.containerRecipe.targetRepository.service'),
        outputPath: 'image.containerRecipe.targetRepository.service',
        parameters: {
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.containerRecipe.targetRepository.service', props);
    return resource.getResponseField('image.containerRecipe.targetRepository.service') as unknown as string;
  }

  public get repositoryName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.containerRecipe.targetRepository.repositoryName'),
        outputPath: 'image.containerRecipe.targetRepository.repositoryName',
        parameters: {
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.containerRecipe.targetRepository.repositoryName', props);
    return resource.getResponseField('image.containerRecipe.targetRepository.repositoryName') as unknown as string;
  }

}

export class ImagebuilderResponsesFetchImageImageInfrastructureConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderGetImageRequest) {
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
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.infrastructureConfiguration.arn', props);
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
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.infrastructureConfiguration.name', props);
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
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.infrastructureConfiguration.description', props);
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
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.infrastructureConfiguration.instanceTypes', props);
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
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.infrastructureConfiguration.instanceProfileName', props);
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
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.infrastructureConfiguration.securityGroupIds', props);
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
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.infrastructureConfiguration.subnetId', props);
    return resource.getResponseField('image.infrastructureConfiguration.subnetId') as unknown as string;
  }

  public get logging(): ImagebuilderResponsesFetchImageImageInfrastructureConfigurationLogging {
    return new ImagebuilderResponsesFetchImageImageInfrastructureConfigurationLogging(this.__scope, this.__resources, this.__input);
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
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.infrastructureConfiguration.keyPair', props);
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
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.infrastructureConfiguration.terminateInstanceOnFailure', props);
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
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.infrastructureConfiguration.snsTopicArn', props);
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
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.infrastructureConfiguration.dateCreated', props);
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
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.infrastructureConfiguration.dateUpdated', props);
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
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.infrastructureConfiguration.resourceTags', props);
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
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.infrastructureConfiguration.tags', props);
    return resource.getResponseField('image.infrastructureConfiguration.tags') as unknown as Record<string, string>;
  }

}

export class ImagebuilderResponsesFetchImageImageInfrastructureConfigurationLogging {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderGetImageRequest) {
  }

  public get s3Logs(): ImagebuilderResponsesFetchImageImageInfrastructureConfigurationLoggingS3Logs {
    return new ImagebuilderResponsesFetchImageImageInfrastructureConfigurationLoggingS3Logs(this.__scope, this.__resources, this.__input);
  }

}

export class ImagebuilderResponsesFetchImageImageInfrastructureConfigurationLoggingS3Logs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderGetImageRequest) {
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
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.infrastructureConfiguration.logging.s3Logs.s3BucketName', props);
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
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.infrastructureConfiguration.logging.s3Logs.s3KeyPrefix', props);
    return resource.getResponseField('image.infrastructureConfiguration.logging.s3Logs.s3KeyPrefix') as unknown as string;
  }

}

export class ImagebuilderResponsesFetchImageImageDistributionConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderGetImageRequest) {
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
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.distributionConfiguration.arn', props);
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
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.distributionConfiguration.name', props);
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
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.distributionConfiguration.description', props);
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
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.distributionConfiguration.distributions', props);
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
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.distributionConfiguration.timeoutMinutes', props);
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
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.distributionConfiguration.dateCreated', props);
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
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.distributionConfiguration.dateUpdated', props);
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
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.distributionConfiguration.tags', props);
    return resource.getResponseField('image.distributionConfiguration.tags') as unknown as Record<string, string>;
  }

}

export class ImagebuilderResponsesFetchImageImageImageTestsConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderGetImageRequest) {
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
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.imageTestsConfiguration.imageTestsEnabled', props);
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
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.imageTestsConfiguration.timeoutMinutes', props);
    return resource.getResponseField('image.imageTestsConfiguration.timeoutMinutes') as unknown as number;
  }

}

export class ImagebuilderResponsesFetchImageImageOutputResources {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderGetImageRequest) {
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
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.outputResources.amis', props);
    return resource.getResponseField('image.outputResources.amis') as unknown as shapes.ImagebuilderAmi[];
  }

  public get containers(): shapes.ImagebuilderContainer[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImage',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImage.image.outputResources.containers'),
        outputPath: 'image.outputResources.containers',
        parameters: {
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImage.image.outputResources.containers', props);
    return resource.getResponseField('image.outputResources.containers') as unknown as shapes.ImagebuilderContainer[];
  }

}

export class ImagebuilderResponsesFetchImagePipeline {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderGetImagePipelineRequest) {
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
          imagePipelineArn: this.__input.imagePipelineArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImagePipeline.requestId', props);
    return resource.getResponseField('requestId') as unknown as string;
  }

  public get imagePipeline(): ImagebuilderResponsesFetchImagePipelineImagePipeline {
    return new ImagebuilderResponsesFetchImagePipelineImagePipeline(this.__scope, this.__resources, this.__input);
  }

}

export class ImagebuilderResponsesFetchImagePipelineImagePipeline {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderGetImagePipelineRequest) {
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
          imagePipelineArn: this.__input.imagePipelineArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImagePipeline.imagePipeline.arn', props);
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
          imagePipelineArn: this.__input.imagePipelineArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImagePipeline.imagePipeline.name', props);
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
          imagePipelineArn: this.__input.imagePipelineArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImagePipeline.imagePipeline.description', props);
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
          imagePipelineArn: this.__input.imagePipelineArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImagePipeline.imagePipeline.platform', props);
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
          imagePipelineArn: this.__input.imagePipelineArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImagePipeline.imagePipeline.enhancedImageMetadataEnabled', props);
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
          imagePipelineArn: this.__input.imagePipelineArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImagePipeline.imagePipeline.imageRecipeArn', props);
    return resource.getResponseField('imagePipeline.imageRecipeArn') as unknown as string;
  }

  public get containerRecipeArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImagePipeline',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImagePipeline.imagePipeline.containerRecipeArn'),
        outputPath: 'imagePipeline.containerRecipeArn',
        parameters: {
          imagePipelineArn: this.__input.imagePipelineArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImagePipeline.imagePipeline.containerRecipeArn', props);
    return resource.getResponseField('imagePipeline.containerRecipeArn') as unknown as string;
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
          imagePipelineArn: this.__input.imagePipelineArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImagePipeline.imagePipeline.infrastructureConfigurationArn', props);
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
          imagePipelineArn: this.__input.imagePipelineArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImagePipeline.imagePipeline.distributionConfigurationArn', props);
    return resource.getResponseField('imagePipeline.distributionConfigurationArn') as unknown as string;
  }

  public get imageTestsConfiguration(): ImagebuilderResponsesFetchImagePipelineImagePipelineImageTestsConfiguration {
    return new ImagebuilderResponsesFetchImagePipelineImagePipelineImageTestsConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get schedule(): ImagebuilderResponsesFetchImagePipelineImagePipelineSchedule {
    return new ImagebuilderResponsesFetchImagePipelineImagePipelineSchedule(this.__scope, this.__resources, this.__input);
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
          imagePipelineArn: this.__input.imagePipelineArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImagePipeline.imagePipeline.status', props);
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
          imagePipelineArn: this.__input.imagePipelineArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImagePipeline.imagePipeline.dateCreated', props);
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
          imagePipelineArn: this.__input.imagePipelineArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImagePipeline.imagePipeline.dateUpdated', props);
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
          imagePipelineArn: this.__input.imagePipelineArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImagePipeline.imagePipeline.dateLastRun', props);
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
          imagePipelineArn: this.__input.imagePipelineArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImagePipeline.imagePipeline.dateNextRun', props);
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
          imagePipelineArn: this.__input.imagePipelineArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImagePipeline.imagePipeline.tags', props);
    return resource.getResponseField('imagePipeline.tags') as unknown as Record<string, string>;
  }

}

export class ImagebuilderResponsesFetchImagePipelineImagePipelineImageTestsConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderGetImagePipelineRequest) {
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
          imagePipelineArn: this.__input.imagePipelineArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImagePipeline.imagePipeline.imageTestsConfiguration.imageTestsEnabled', props);
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
          imagePipelineArn: this.__input.imagePipelineArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImagePipeline.imagePipeline.imageTestsConfiguration.timeoutMinutes', props);
    return resource.getResponseField('imagePipeline.imageTestsConfiguration.timeoutMinutes') as unknown as number;
  }

}

export class ImagebuilderResponsesFetchImagePipelineImagePipelineSchedule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderGetImagePipelineRequest) {
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
          imagePipelineArn: this.__input.imagePipelineArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImagePipeline.imagePipeline.schedule.scheduleExpression', props);
    return resource.getResponseField('imagePipeline.schedule.scheduleExpression') as unknown as string;
  }

  public get timezone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImagePipeline',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImagePipeline.imagePipeline.schedule.timezone'),
        outputPath: 'imagePipeline.schedule.timezone',
        parameters: {
          imagePipelineArn: this.__input.imagePipelineArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImagePipeline.imagePipeline.schedule.timezone', props);
    return resource.getResponseField('imagePipeline.schedule.timezone') as unknown as string;
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
          imagePipelineArn: this.__input.imagePipelineArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImagePipeline.imagePipeline.schedule.pipelineExecutionStartCondition', props);
    return resource.getResponseField('imagePipeline.schedule.pipelineExecutionStartCondition') as unknown as string;
  }

}

export class ImagebuilderResponsesFetchImagePolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderGetImagePolicyRequest) {
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
          imageArn: this.__input.imageArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImagePolicy.requestId', props);
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
          imageArn: this.__input.imageArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImagePolicy.policy', props);
    return resource.getResponseField('policy') as unknown as string;
  }

}

export class ImagebuilderResponsesFetchImageRecipe {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderGetImageRecipeRequest) {
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
          imageRecipeArn: this.__input.imageRecipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImageRecipe.requestId', props);
    return resource.getResponseField('requestId') as unknown as string;
  }

  public get imageRecipe(): ImagebuilderResponsesFetchImageRecipeImageRecipe {
    return new ImagebuilderResponsesFetchImageRecipeImageRecipe(this.__scope, this.__resources, this.__input);
  }

}

export class ImagebuilderResponsesFetchImageRecipeImageRecipe {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderGetImageRecipeRequest) {
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
          imageRecipeArn: this.__input.imageRecipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImageRecipe.imageRecipe.arn', props);
    return resource.getResponseField('imageRecipe.arn') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImageRecipe',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImageRecipe.imageRecipe.type'),
        outputPath: 'imageRecipe.type',
        parameters: {
          imageRecipeArn: this.__input.imageRecipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImageRecipe.imageRecipe.type', props);
    return resource.getResponseField('imageRecipe.type') as unknown as string;
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
          imageRecipeArn: this.__input.imageRecipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImageRecipe.imageRecipe.name', props);
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
          imageRecipeArn: this.__input.imageRecipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImageRecipe.imageRecipe.description', props);
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
          imageRecipeArn: this.__input.imageRecipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImageRecipe.imageRecipe.platform', props);
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
          imageRecipeArn: this.__input.imageRecipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImageRecipe.imageRecipe.owner', props);
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
          imageRecipeArn: this.__input.imageRecipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImageRecipe.imageRecipe.version', props);
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
          imageRecipeArn: this.__input.imageRecipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImageRecipe.imageRecipe.components', props);
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
          imageRecipeArn: this.__input.imageRecipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImageRecipe.imageRecipe.parentImage', props);
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
          imageRecipeArn: this.__input.imageRecipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImageRecipe.imageRecipe.blockDeviceMappings', props);
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
          imageRecipeArn: this.__input.imageRecipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImageRecipe.imageRecipe.dateCreated', props);
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
          imageRecipeArn: this.__input.imageRecipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImageRecipe.imageRecipe.tags', props);
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
          imageRecipeArn: this.__input.imageRecipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImageRecipe.imageRecipe.workingDirectory', props);
    return resource.getResponseField('imageRecipe.workingDirectory') as unknown as string;
  }

  public get additionalInstanceConfiguration(): ImagebuilderResponsesFetchImageRecipeImageRecipeAdditionalInstanceConfiguration {
    return new ImagebuilderResponsesFetchImageRecipeImageRecipeAdditionalInstanceConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class ImagebuilderResponsesFetchImageRecipeImageRecipeAdditionalInstanceConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderGetImageRecipeRequest) {
  }

  public get systemsManagerAgent(): ImagebuilderResponsesFetchImageRecipeImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent {
    return new ImagebuilderResponsesFetchImageRecipeImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent(this.__scope, this.__resources, this.__input);
  }

  public get userDataOverride(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImageRecipe',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImageRecipe.imageRecipe.additionalInstanceConfiguration.userDataOverride'),
        outputPath: 'imageRecipe.additionalInstanceConfiguration.userDataOverride',
        parameters: {
          imageRecipeArn: this.__input.imageRecipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImageRecipe.imageRecipe.additionalInstanceConfiguration.userDataOverride', props);
    return resource.getResponseField('imageRecipe.additionalInstanceConfiguration.userDataOverride') as unknown as string;
  }

}

export class ImagebuilderResponsesFetchImageRecipeImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderGetImageRecipeRequest) {
  }

  public get uninstallAfterBuild(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImageRecipe',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.GetImageRecipe.imageRecipe.additionalInstanceConfiguration.systemsManagerAgent.uninstallAfterBuild'),
        outputPath: 'imageRecipe.additionalInstanceConfiguration.systemsManagerAgent.uninstallAfterBuild',
        parameters: {
          imageRecipeArn: this.__input.imageRecipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImageRecipe.imageRecipe.additionalInstanceConfiguration.systemsManagerAgent.uninstallAfterBuild', props);
    return resource.getResponseField('imageRecipe.additionalInstanceConfiguration.systemsManagerAgent.uninstallAfterBuild') as unknown as boolean;
  }

}

export class ImagebuilderResponsesFetchImageRecipePolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderGetImageRecipePolicyRequest) {
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
          imageRecipeArn: this.__input.imageRecipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImageRecipePolicy.requestId', props);
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
          imageRecipeArn: this.__input.imageRecipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImageRecipePolicy.policy', props);
    return resource.getResponseField('policy') as unknown as string;
  }

}

export class ImagebuilderResponsesFetchInfrastructureConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderGetInfrastructureConfigurationRequest) {
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
          infrastructureConfigurationArn: this.__input.infrastructureConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInfrastructureConfiguration.requestId', props);
    return resource.getResponseField('requestId') as unknown as string;
  }

  public get infrastructureConfiguration(): ImagebuilderResponsesFetchInfrastructureConfigurationInfrastructureConfiguration {
    return new ImagebuilderResponsesFetchInfrastructureConfigurationInfrastructureConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class ImagebuilderResponsesFetchInfrastructureConfigurationInfrastructureConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderGetInfrastructureConfigurationRequest) {
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
          infrastructureConfigurationArn: this.__input.infrastructureConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInfrastructureConfiguration.infrastructureConfiguration.arn', props);
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
          infrastructureConfigurationArn: this.__input.infrastructureConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInfrastructureConfiguration.infrastructureConfiguration.name', props);
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
          infrastructureConfigurationArn: this.__input.infrastructureConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInfrastructureConfiguration.infrastructureConfiguration.description', props);
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
          infrastructureConfigurationArn: this.__input.infrastructureConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInfrastructureConfiguration.infrastructureConfiguration.instanceTypes', props);
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
          infrastructureConfigurationArn: this.__input.infrastructureConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInfrastructureConfiguration.infrastructureConfiguration.instanceProfileName', props);
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
          infrastructureConfigurationArn: this.__input.infrastructureConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInfrastructureConfiguration.infrastructureConfiguration.securityGroupIds', props);
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
          infrastructureConfigurationArn: this.__input.infrastructureConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInfrastructureConfiguration.infrastructureConfiguration.subnetId', props);
    return resource.getResponseField('infrastructureConfiguration.subnetId') as unknown as string;
  }

  public get logging(): ImagebuilderResponsesFetchInfrastructureConfigurationInfrastructureConfigurationLogging {
    return new ImagebuilderResponsesFetchInfrastructureConfigurationInfrastructureConfigurationLogging(this.__scope, this.__resources, this.__input);
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
          infrastructureConfigurationArn: this.__input.infrastructureConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInfrastructureConfiguration.infrastructureConfiguration.keyPair', props);
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
          infrastructureConfigurationArn: this.__input.infrastructureConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInfrastructureConfiguration.infrastructureConfiguration.terminateInstanceOnFailure', props);
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
          infrastructureConfigurationArn: this.__input.infrastructureConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInfrastructureConfiguration.infrastructureConfiguration.snsTopicArn', props);
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
          infrastructureConfigurationArn: this.__input.infrastructureConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInfrastructureConfiguration.infrastructureConfiguration.dateCreated', props);
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
          infrastructureConfigurationArn: this.__input.infrastructureConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInfrastructureConfiguration.infrastructureConfiguration.dateUpdated', props);
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
          infrastructureConfigurationArn: this.__input.infrastructureConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInfrastructureConfiguration.infrastructureConfiguration.resourceTags', props);
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
          infrastructureConfigurationArn: this.__input.infrastructureConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInfrastructureConfiguration.infrastructureConfiguration.tags', props);
    return resource.getResponseField('infrastructureConfiguration.tags') as unknown as Record<string, string>;
  }

}

export class ImagebuilderResponsesFetchInfrastructureConfigurationInfrastructureConfigurationLogging {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderGetInfrastructureConfigurationRequest) {
  }

  public get s3Logs(): ImagebuilderResponsesFetchInfrastructureConfigurationInfrastructureConfigurationLoggingS3Logs {
    return new ImagebuilderResponsesFetchInfrastructureConfigurationInfrastructureConfigurationLoggingS3Logs(this.__scope, this.__resources, this.__input);
  }

}

export class ImagebuilderResponsesFetchInfrastructureConfigurationInfrastructureConfigurationLoggingS3Logs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderGetInfrastructureConfigurationRequest) {
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
          infrastructureConfigurationArn: this.__input.infrastructureConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInfrastructureConfiguration.infrastructureConfiguration.logging.s3Logs.s3BucketName', props);
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
          infrastructureConfigurationArn: this.__input.infrastructureConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInfrastructureConfiguration.infrastructureConfiguration.logging.s3Logs.s3KeyPrefix', props);
    return resource.getResponseField('infrastructureConfiguration.logging.s3Logs.s3KeyPrefix') as unknown as string;
  }

}

export class ImagebuilderResponsesImportComponent {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderImportComponentRequest) {
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
          name: this.__input.name,
          semanticVersion: this.__input.semanticVersion,
          description: this.__input.description,
          changeDescription: this.__input.changeDescription,
          type: this.__input.type,
          format: this.__input.format,
          platform: this.__input.platform,
          data: this.__input.data,
          uri: this.__input.uri,
          kmsKeyId: this.__input.kmsKeyId,
          tags: this.__input.tags,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportComponent.requestId', props);
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
          name: this.__input.name,
          semanticVersion: this.__input.semanticVersion,
          description: this.__input.description,
          changeDescription: this.__input.changeDescription,
          type: this.__input.type,
          format: this.__input.format,
          platform: this.__input.platform,
          data: this.__input.data,
          uri: this.__input.uri,
          kmsKeyId: this.__input.kmsKeyId,
          tags: this.__input.tags,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportComponent.clientToken', props);
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
          name: this.__input.name,
          semanticVersion: this.__input.semanticVersion,
          description: this.__input.description,
          changeDescription: this.__input.changeDescription,
          type: this.__input.type,
          format: this.__input.format,
          platform: this.__input.platform,
          data: this.__input.data,
          uri: this.__input.uri,
          kmsKeyId: this.__input.kmsKeyId,
          tags: this.__input.tags,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportComponent.componentBuildVersionArn', props);
    return resource.getResponseField('componentBuildVersionArn') as unknown as string;
  }

}

export class ImagebuilderResponsesListComponentBuildVersions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderListComponentBuildVersionsRequest) {
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
          componentVersionArn: this.__input.componentVersionArn,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListComponentBuildVersions.requestId', props);
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
          componentVersionArn: this.__input.componentVersionArn,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListComponentBuildVersions.componentSummaryList', props);
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
          componentVersionArn: this.__input.componentVersionArn,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListComponentBuildVersions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class ImagebuilderResponsesListComponents {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderListComponentsRequest) {
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
          owner: this.__input.owner,
          filters: this.__input.filters,
          byName: this.__input.byName,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListComponents.requestId', props);
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
          owner: this.__input.owner,
          filters: this.__input.filters,
          byName: this.__input.byName,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListComponents.componentVersionList', props);
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
          owner: this.__input.owner,
          filters: this.__input.filters,
          byName: this.__input.byName,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListComponents.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class ImagebuilderResponsesListContainerRecipes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderListContainerRecipesRequest) {
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listContainerRecipes',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.ListContainerRecipes.requestId'),
        outputPath: 'requestId',
        parameters: {
          owner: this.__input.owner,
          filters: this.__input.filters,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListContainerRecipes.requestId', props);
    return resource.getResponseField('requestId') as unknown as string;
  }

  public get containerRecipeSummaryList(): shapes.ImagebuilderContainerRecipeSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listContainerRecipes',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.ListContainerRecipes.containerRecipeSummaryList'),
        outputPath: 'containerRecipeSummaryList',
        parameters: {
          owner: this.__input.owner,
          filters: this.__input.filters,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListContainerRecipes.containerRecipeSummaryList', props);
    return resource.getResponseField('containerRecipeSummaryList') as unknown as shapes.ImagebuilderContainerRecipeSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listContainerRecipes',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.ListContainerRecipes.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          owner: this.__input.owner,
          filters: this.__input.filters,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListContainerRecipes.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class ImagebuilderResponsesListDistributionConfigurations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderListDistributionConfigurationsRequest) {
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
          filters: this.__input.filters,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDistributionConfigurations.requestId', props);
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
          filters: this.__input.filters,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDistributionConfigurations.distributionConfigurationSummaryList', props);
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
          filters: this.__input.filters,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDistributionConfigurations.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class ImagebuilderResponsesListImageBuildVersions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderListImageBuildVersionsRequest) {
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
          imageVersionArn: this.__input.imageVersionArn,
          filters: this.__input.filters,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListImageBuildVersions.requestId', props);
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
          imageVersionArn: this.__input.imageVersionArn,
          filters: this.__input.filters,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListImageBuildVersions.imageSummaryList', props);
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
          imageVersionArn: this.__input.imageVersionArn,
          filters: this.__input.filters,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListImageBuildVersions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class ImagebuilderResponsesListImagePackages {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderListImagePackagesRequest) {
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listImagePackages',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.ListImagePackages.requestId'),
        outputPath: 'requestId',
        parameters: {
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListImagePackages.requestId', props);
    return resource.getResponseField('requestId') as unknown as string;
  }

  public get imagePackageList(): shapes.ImagebuilderImagePackage[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listImagePackages',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.ListImagePackages.imagePackageList'),
        outputPath: 'imagePackageList',
        parameters: {
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListImagePackages.imagePackageList', props);
    return resource.getResponseField('imagePackageList') as unknown as shapes.ImagebuilderImagePackage[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listImagePackages',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.ListImagePackages.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          imageBuildVersionArn: this.__input.imageBuildVersionArn,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListImagePackages.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class ImagebuilderResponsesListImagePipelineImages {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderListImagePipelineImagesRequest) {
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
          imagePipelineArn: this.__input.imagePipelineArn,
          filters: this.__input.filters,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListImagePipelineImages.requestId', props);
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
          imagePipelineArn: this.__input.imagePipelineArn,
          filters: this.__input.filters,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListImagePipelineImages.imageSummaryList', props);
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
          imagePipelineArn: this.__input.imagePipelineArn,
          filters: this.__input.filters,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListImagePipelineImages.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class ImagebuilderResponsesListImagePipelines {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderListImagePipelinesRequest) {
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
          filters: this.__input.filters,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListImagePipelines.requestId', props);
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
          filters: this.__input.filters,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListImagePipelines.imagePipelineList', props);
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
          filters: this.__input.filters,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListImagePipelines.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class ImagebuilderResponsesListImageRecipes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderListImageRecipesRequest) {
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
          owner: this.__input.owner,
          filters: this.__input.filters,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListImageRecipes.requestId', props);
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
          owner: this.__input.owner,
          filters: this.__input.filters,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListImageRecipes.imageRecipeSummaryList', props);
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
          owner: this.__input.owner,
          filters: this.__input.filters,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListImageRecipes.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class ImagebuilderResponsesListImages {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderListImagesRequest) {
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
          owner: this.__input.owner,
          filters: this.__input.filters,
          byName: this.__input.byName,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          includeDeprecated: this.__input.includeDeprecated,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListImages.requestId', props);
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
          owner: this.__input.owner,
          filters: this.__input.filters,
          byName: this.__input.byName,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          includeDeprecated: this.__input.includeDeprecated,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListImages.imageVersionList', props);
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
          owner: this.__input.owner,
          filters: this.__input.filters,
          byName: this.__input.byName,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          includeDeprecated: this.__input.includeDeprecated,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListImages.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class ImagebuilderResponsesListInfrastructureConfigurations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderListInfrastructureConfigurationsRequest) {
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
          filters: this.__input.filters,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListInfrastructureConfigurations.requestId', props);
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
          filters: this.__input.filters,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListInfrastructureConfigurations.infrastructureConfigurationSummaryList', props);
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
          filters: this.__input.filters,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListInfrastructureConfigurations.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class ImagebuilderResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderListTagsForResourceRequest) {
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
          resourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class ImagebuilderResponsesPutComponentPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderPutComponentPolicyRequest) {
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
          componentArn: this.__input.componentArn,
          policy: this.__input.policy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutComponentPolicy.requestId', props);
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
          componentArn: this.__input.componentArn,
          policy: this.__input.policy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutComponentPolicy.componentArn', props);
    return resource.getResponseField('componentArn') as unknown as string;
  }

}

export class ImagebuilderResponsesPutContainerRecipePolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderPutContainerRecipePolicyRequest) {
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putContainerRecipePolicy',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.PutContainerRecipePolicy.requestId'),
        outputPath: 'requestId',
        parameters: {
          containerRecipeArn: this.__input.containerRecipeArn,
          policy: this.__input.policy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutContainerRecipePolicy.requestId', props);
    return resource.getResponseField('requestId') as unknown as string;
  }

  public get containerRecipeArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putContainerRecipePolicy',
        service: 'Imagebuilder',
        physicalResourceId: cr.PhysicalResourceId.of('Imagebuilder.PutContainerRecipePolicy.containerRecipeArn'),
        outputPath: 'containerRecipeArn',
        parameters: {
          containerRecipeArn: this.__input.containerRecipeArn,
          policy: this.__input.policy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutContainerRecipePolicy.containerRecipeArn', props);
    return resource.getResponseField('containerRecipeArn') as unknown as string;
  }

}

export class ImagebuilderResponsesPutImagePolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderPutImagePolicyRequest) {
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
          imageArn: this.__input.imageArn,
          policy: this.__input.policy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutImagePolicy.requestId', props);
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
          imageArn: this.__input.imageArn,
          policy: this.__input.policy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutImagePolicy.imageArn', props);
    return resource.getResponseField('imageArn') as unknown as string;
  }

}

export class ImagebuilderResponsesPutImageRecipePolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderPutImageRecipePolicyRequest) {
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
          imageRecipeArn: this.__input.imageRecipeArn,
          policy: this.__input.policy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutImageRecipePolicy.requestId', props);
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
          imageRecipeArn: this.__input.imageRecipeArn,
          policy: this.__input.policy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutImageRecipePolicy.imageRecipeArn', props);
    return resource.getResponseField('imageRecipeArn') as unknown as string;
  }

}

export class ImagebuilderResponsesStartImagePipelineExecution {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderStartImagePipelineExecutionRequest) {
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
          imagePipelineArn: this.__input.imagePipelineArn,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartImagePipelineExecution.requestId', props);
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
          imagePipelineArn: this.__input.imagePipelineArn,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartImagePipelineExecution.clientToken', props);
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
          imagePipelineArn: this.__input.imagePipelineArn,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartImagePipelineExecution.imageBuildVersionArn', props);
    return resource.getResponseField('imageBuildVersionArn') as unknown as string;
  }

}

export class ImagebuilderResponsesUpdateDistributionConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderUpdateDistributionConfigurationRequest) {
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
          distributionConfigurationArn: this.__input.distributionConfigurationArn,
          description: this.__input.description,
          distributions: this.__input.distributions,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDistributionConfiguration.requestId', props);
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
          distributionConfigurationArn: this.__input.distributionConfigurationArn,
          description: this.__input.description,
          distributions: this.__input.distributions,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDistributionConfiguration.clientToken', props);
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
          distributionConfigurationArn: this.__input.distributionConfigurationArn,
          description: this.__input.description,
          distributions: this.__input.distributions,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDistributionConfiguration.distributionConfigurationArn', props);
    return resource.getResponseField('distributionConfigurationArn') as unknown as string;
  }

}

export class ImagebuilderResponsesUpdateImagePipeline {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderUpdateImagePipelineRequest) {
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
          imagePipelineArn: this.__input.imagePipelineArn,
          description: this.__input.description,
          imageRecipeArn: this.__input.imageRecipeArn,
          containerRecipeArn: this.__input.containerRecipeArn,
          infrastructureConfigurationArn: this.__input.infrastructureConfigurationArn,
          distributionConfigurationArn: this.__input.distributionConfigurationArn,
          imageTestsConfiguration: {
            imageTestsEnabled: this.__input.imageTestsConfiguration?.imageTestsEnabled,
            timeoutMinutes: this.__input.imageTestsConfiguration?.timeoutMinutes,
          },
          enhancedImageMetadataEnabled: this.__input.enhancedImageMetadataEnabled,
          schedule: {
            scheduleExpression: this.__input.schedule?.scheduleExpression,
            timezone: this.__input.schedule?.timezone,
            pipelineExecutionStartCondition: this.__input.schedule?.pipelineExecutionStartCondition,
          },
          status: this.__input.status,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateImagePipeline.requestId', props);
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
          imagePipelineArn: this.__input.imagePipelineArn,
          description: this.__input.description,
          imageRecipeArn: this.__input.imageRecipeArn,
          containerRecipeArn: this.__input.containerRecipeArn,
          infrastructureConfigurationArn: this.__input.infrastructureConfigurationArn,
          distributionConfigurationArn: this.__input.distributionConfigurationArn,
          imageTestsConfiguration: {
            imageTestsEnabled: this.__input.imageTestsConfiguration?.imageTestsEnabled,
            timeoutMinutes: this.__input.imageTestsConfiguration?.timeoutMinutes,
          },
          enhancedImageMetadataEnabled: this.__input.enhancedImageMetadataEnabled,
          schedule: {
            scheduleExpression: this.__input.schedule?.scheduleExpression,
            timezone: this.__input.schedule?.timezone,
            pipelineExecutionStartCondition: this.__input.schedule?.pipelineExecutionStartCondition,
          },
          status: this.__input.status,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateImagePipeline.clientToken', props);
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
          imagePipelineArn: this.__input.imagePipelineArn,
          description: this.__input.description,
          imageRecipeArn: this.__input.imageRecipeArn,
          containerRecipeArn: this.__input.containerRecipeArn,
          infrastructureConfigurationArn: this.__input.infrastructureConfigurationArn,
          distributionConfigurationArn: this.__input.distributionConfigurationArn,
          imageTestsConfiguration: {
            imageTestsEnabled: this.__input.imageTestsConfiguration?.imageTestsEnabled,
            timeoutMinutes: this.__input.imageTestsConfiguration?.timeoutMinutes,
          },
          enhancedImageMetadataEnabled: this.__input.enhancedImageMetadataEnabled,
          schedule: {
            scheduleExpression: this.__input.schedule?.scheduleExpression,
            timezone: this.__input.schedule?.timezone,
            pipelineExecutionStartCondition: this.__input.schedule?.pipelineExecutionStartCondition,
          },
          status: this.__input.status,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateImagePipeline.imagePipelineArn', props);
    return resource.getResponseField('imagePipelineArn') as unknown as string;
  }

}

export class ImagebuilderResponsesUpdateInfrastructureConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImagebuilderUpdateInfrastructureConfigurationRequest) {
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
          infrastructureConfigurationArn: this.__input.infrastructureConfigurationArn,
          description: this.__input.description,
          instanceTypes: this.__input.instanceTypes,
          instanceProfileName: this.__input.instanceProfileName,
          securityGroupIds: this.__input.securityGroupIds,
          subnetId: this.__input.subnetId,
          logging: {
            s3Logs: {
              s3BucketName: this.__input.logging?.s3Logs?.s3BucketName,
              s3KeyPrefix: this.__input.logging?.s3Logs?.s3KeyPrefix,
            },
          },
          keyPair: this.__input.keyPair,
          terminateInstanceOnFailure: this.__input.terminateInstanceOnFailure,
          snsTopicArn: this.__input.snsTopicArn,
          clientToken: this.__input.clientToken,
          resourceTags: this.__input.resourceTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateInfrastructureConfiguration.requestId', props);
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
          infrastructureConfigurationArn: this.__input.infrastructureConfigurationArn,
          description: this.__input.description,
          instanceTypes: this.__input.instanceTypes,
          instanceProfileName: this.__input.instanceProfileName,
          securityGroupIds: this.__input.securityGroupIds,
          subnetId: this.__input.subnetId,
          logging: {
            s3Logs: {
              s3BucketName: this.__input.logging?.s3Logs?.s3BucketName,
              s3KeyPrefix: this.__input.logging?.s3Logs?.s3KeyPrefix,
            },
          },
          keyPair: this.__input.keyPair,
          terminateInstanceOnFailure: this.__input.terminateInstanceOnFailure,
          snsTopicArn: this.__input.snsTopicArn,
          clientToken: this.__input.clientToken,
          resourceTags: this.__input.resourceTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateInfrastructureConfiguration.clientToken', props);
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
          infrastructureConfigurationArn: this.__input.infrastructureConfigurationArn,
          description: this.__input.description,
          instanceTypes: this.__input.instanceTypes,
          instanceProfileName: this.__input.instanceProfileName,
          securityGroupIds: this.__input.securityGroupIds,
          subnetId: this.__input.subnetId,
          logging: {
            s3Logs: {
              s3BucketName: this.__input.logging?.s3Logs?.s3BucketName,
              s3KeyPrefix: this.__input.logging?.s3Logs?.s3KeyPrefix,
            },
          },
          keyPair: this.__input.keyPair,
          terminateInstanceOnFailure: this.__input.terminateInstanceOnFailure,
          snsTopicArn: this.__input.snsTopicArn,
          clientToken: this.__input.clientToken,
          resourceTags: this.__input.resourceTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateInfrastructureConfiguration.infrastructureConfigurationArn', props);
    return resource.getResponseField('infrastructureConfigurationArn') as unknown as string;
  }

}

