/**
 * @schema ImagebuilderCancelImageCreationRequest
 */
export interface ImagebuilderCancelImageCreationRequest {
  /**
   * @schema ImagebuilderCancelImageCreationRequest#imageBuildVersionArn
   */
  readonly imageBuildVersionArn: string;

  /**
   * @schema ImagebuilderCancelImageCreationRequest#clientToken
   */
  readonly clientToken: string;

}

/**
 * Converts an object of type 'ImagebuilderCancelImageCreationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderCancelImageCreationRequest(obj: ImagebuilderCancelImageCreationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'imageBuildVersionArn': obj.imageBuildVersionArn,
    'clientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderCancelImageCreationResponse
 */
export interface ImagebuilderCancelImageCreationResponse {
  /**
   * @schema ImagebuilderCancelImageCreationResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema ImagebuilderCancelImageCreationResponse#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema ImagebuilderCancelImageCreationResponse#imageBuildVersionArn
   */
  readonly imageBuildVersionArn?: string;

}

/**
 * Converts an object of type 'ImagebuilderCancelImageCreationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderCancelImageCreationResponse(obj: ImagebuilderCancelImageCreationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'requestId': obj.requestId,
    'clientToken': obj.clientToken,
    'imageBuildVersionArn': obj.imageBuildVersionArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderCreateComponentRequest
 */
export interface ImagebuilderCreateComponentRequest {
  /**
   * @schema ImagebuilderCreateComponentRequest#name
   */
  readonly name: string;

  /**
   * @schema ImagebuilderCreateComponentRequest#semanticVersion
   */
  readonly semanticVersion: string;

  /**
   * @schema ImagebuilderCreateComponentRequest#description
   */
  readonly description?: string;

  /**
   * @schema ImagebuilderCreateComponentRequest#changeDescription
   */
  readonly changeDescription?: string;

  /**
   * @schema ImagebuilderCreateComponentRequest#platform
   */
  readonly platform: string;

  /**
   * @schema ImagebuilderCreateComponentRequest#supportedOsVersions
   */
  readonly supportedOsVersions?: string[];

  /**
   * @schema ImagebuilderCreateComponentRequest#data
   */
  readonly data?: string;

  /**
   * @schema ImagebuilderCreateComponentRequest#uri
   */
  readonly uri?: string;

  /**
   * @schema ImagebuilderCreateComponentRequest#kmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema ImagebuilderCreateComponentRequest#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema ImagebuilderCreateComponentRequest#clientToken
   */
  readonly clientToken: string;

}

/**
 * Converts an object of type 'ImagebuilderCreateComponentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderCreateComponentRequest(obj: ImagebuilderCreateComponentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'semanticVersion': obj.semanticVersion,
    'description': obj.description,
    'changeDescription': obj.changeDescription,
    'platform': obj.platform,
    'supportedOsVersions': obj.supportedOsVersions?.map(y => y),
    'data': obj.data,
    'uri': obj.uri,
    'kmsKeyId': obj.kmsKeyId,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'clientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderCreateComponentResponse
 */
export interface ImagebuilderCreateComponentResponse {
  /**
   * @schema ImagebuilderCreateComponentResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema ImagebuilderCreateComponentResponse#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema ImagebuilderCreateComponentResponse#componentBuildVersionArn
   */
  readonly componentBuildVersionArn?: string;

}

/**
 * Converts an object of type 'ImagebuilderCreateComponentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderCreateComponentResponse(obj: ImagebuilderCreateComponentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'requestId': obj.requestId,
    'clientToken': obj.clientToken,
    'componentBuildVersionArn': obj.componentBuildVersionArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderCreateContainerRecipeRequest
 */
export interface ImagebuilderCreateContainerRecipeRequest {
  /**
   * @schema ImagebuilderCreateContainerRecipeRequest#containerType
   */
  readonly containerType: string;

  /**
   * @schema ImagebuilderCreateContainerRecipeRequest#name
   */
  readonly name: string;

  /**
   * @schema ImagebuilderCreateContainerRecipeRequest#description
   */
  readonly description?: string;

  /**
   * @schema ImagebuilderCreateContainerRecipeRequest#semanticVersion
   */
  readonly semanticVersion: string;

  /**
   * @schema ImagebuilderCreateContainerRecipeRequest#components
   */
  readonly components: ImagebuilderComponentConfiguration[];

  /**
   * @schema ImagebuilderCreateContainerRecipeRequest#instanceConfiguration
   */
  readonly instanceConfiguration?: ImagebuilderInstanceConfiguration;

  /**
   * @schema ImagebuilderCreateContainerRecipeRequest#dockerfileTemplateData
   */
  readonly dockerfileTemplateData?: string;

  /**
   * @schema ImagebuilderCreateContainerRecipeRequest#dockerfileTemplateUri
   */
  readonly dockerfileTemplateUri?: string;

  /**
   * @schema ImagebuilderCreateContainerRecipeRequest#platformOverride
   */
  readonly platformOverride?: string;

  /**
   * @schema ImagebuilderCreateContainerRecipeRequest#imageOsVersionOverride
   */
  readonly imageOsVersionOverride?: string;

  /**
   * @schema ImagebuilderCreateContainerRecipeRequest#parentImage
   */
  readonly parentImage: string;

  /**
   * @schema ImagebuilderCreateContainerRecipeRequest#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema ImagebuilderCreateContainerRecipeRequest#workingDirectory
   */
  readonly workingDirectory?: string;

  /**
   * @schema ImagebuilderCreateContainerRecipeRequest#targetRepository
   */
  readonly targetRepository: ImagebuilderTargetContainerRepository;

  /**
   * @schema ImagebuilderCreateContainerRecipeRequest#kmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema ImagebuilderCreateContainerRecipeRequest#clientToken
   */
  readonly clientToken: string;

}

/**
 * Converts an object of type 'ImagebuilderCreateContainerRecipeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderCreateContainerRecipeRequest(obj: ImagebuilderCreateContainerRecipeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'containerType': obj.containerType,
    'name': obj.name,
    'description': obj.description,
    'semanticVersion': obj.semanticVersion,
    'components': obj.components?.map(y => toJson_ImagebuilderComponentConfiguration(y)),
    'instanceConfiguration': toJson_ImagebuilderInstanceConfiguration(obj.instanceConfiguration),
    'dockerfileTemplateData': obj.dockerfileTemplateData,
    'dockerfileTemplateUri': obj.dockerfileTemplateUri,
    'platformOverride': obj.platformOverride,
    'imageOsVersionOverride': obj.imageOsVersionOverride,
    'parentImage': obj.parentImage,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'workingDirectory': obj.workingDirectory,
    'targetRepository': toJson_ImagebuilderTargetContainerRepository(obj.targetRepository),
    'kmsKeyId': obj.kmsKeyId,
    'clientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderCreateContainerRecipeResponse
 */
export interface ImagebuilderCreateContainerRecipeResponse {
  /**
   * @schema ImagebuilderCreateContainerRecipeResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema ImagebuilderCreateContainerRecipeResponse#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema ImagebuilderCreateContainerRecipeResponse#containerRecipeArn
   */
  readonly containerRecipeArn?: string;

}

/**
 * Converts an object of type 'ImagebuilderCreateContainerRecipeResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderCreateContainerRecipeResponse(obj: ImagebuilderCreateContainerRecipeResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'requestId': obj.requestId,
    'clientToken': obj.clientToken,
    'containerRecipeArn': obj.containerRecipeArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderCreateDistributionConfigurationRequest
 */
export interface ImagebuilderCreateDistributionConfigurationRequest {
  /**
   * @schema ImagebuilderCreateDistributionConfigurationRequest#name
   */
  readonly name: string;

  /**
   * @schema ImagebuilderCreateDistributionConfigurationRequest#description
   */
  readonly description?: string;

  /**
   * @schema ImagebuilderCreateDistributionConfigurationRequest#distributions
   */
  readonly distributions: ImagebuilderDistribution[];

  /**
   * @schema ImagebuilderCreateDistributionConfigurationRequest#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema ImagebuilderCreateDistributionConfigurationRequest#clientToken
   */
  readonly clientToken: string;

}

/**
 * Converts an object of type 'ImagebuilderCreateDistributionConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderCreateDistributionConfigurationRequest(obj: ImagebuilderCreateDistributionConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'description': obj.description,
    'distributions': obj.distributions?.map(y => toJson_ImagebuilderDistribution(y)),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'clientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderCreateDistributionConfigurationResponse
 */
export interface ImagebuilderCreateDistributionConfigurationResponse {
  /**
   * @schema ImagebuilderCreateDistributionConfigurationResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema ImagebuilderCreateDistributionConfigurationResponse#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema ImagebuilderCreateDistributionConfigurationResponse#distributionConfigurationArn
   */
  readonly distributionConfigurationArn?: string;

}

/**
 * Converts an object of type 'ImagebuilderCreateDistributionConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderCreateDistributionConfigurationResponse(obj: ImagebuilderCreateDistributionConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'requestId': obj.requestId,
    'clientToken': obj.clientToken,
    'distributionConfigurationArn': obj.distributionConfigurationArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderCreateImageRequest
 */
export interface ImagebuilderCreateImageRequest {
  /**
   * @schema ImagebuilderCreateImageRequest#imageRecipeArn
   */
  readonly imageRecipeArn?: string;

  /**
   * @schema ImagebuilderCreateImageRequest#containerRecipeArn
   */
  readonly containerRecipeArn?: string;

  /**
   * @schema ImagebuilderCreateImageRequest#distributionConfigurationArn
   */
  readonly distributionConfigurationArn?: string;

  /**
   * @schema ImagebuilderCreateImageRequest#infrastructureConfigurationArn
   */
  readonly infrastructureConfigurationArn: string;

  /**
   * @schema ImagebuilderCreateImageRequest#imageTestsConfiguration
   */
  readonly imageTestsConfiguration?: ImagebuilderImageTestsConfiguration;

  /**
   * @schema ImagebuilderCreateImageRequest#enhancedImageMetadataEnabled
   */
  readonly enhancedImageMetadataEnabled?: boolean;

  /**
   * @schema ImagebuilderCreateImageRequest#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema ImagebuilderCreateImageRequest#clientToken
   */
  readonly clientToken: string;

}

/**
 * Converts an object of type 'ImagebuilderCreateImageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderCreateImageRequest(obj: ImagebuilderCreateImageRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'imageRecipeArn': obj.imageRecipeArn,
    'containerRecipeArn': obj.containerRecipeArn,
    'distributionConfigurationArn': obj.distributionConfigurationArn,
    'infrastructureConfigurationArn': obj.infrastructureConfigurationArn,
    'imageTestsConfiguration': toJson_ImagebuilderImageTestsConfiguration(obj.imageTestsConfiguration),
    'enhancedImageMetadataEnabled': obj.enhancedImageMetadataEnabled,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'clientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderCreateImageResponse
 */
export interface ImagebuilderCreateImageResponse {
  /**
   * @schema ImagebuilderCreateImageResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema ImagebuilderCreateImageResponse#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema ImagebuilderCreateImageResponse#imageBuildVersionArn
   */
  readonly imageBuildVersionArn?: string;

}

/**
 * Converts an object of type 'ImagebuilderCreateImageResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderCreateImageResponse(obj: ImagebuilderCreateImageResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'requestId': obj.requestId,
    'clientToken': obj.clientToken,
    'imageBuildVersionArn': obj.imageBuildVersionArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderCreateImagePipelineRequest
 */
export interface ImagebuilderCreateImagePipelineRequest {
  /**
   * @schema ImagebuilderCreateImagePipelineRequest#name
   */
  readonly name: string;

  /**
   * @schema ImagebuilderCreateImagePipelineRequest#description
   */
  readonly description?: string;

  /**
   * @schema ImagebuilderCreateImagePipelineRequest#imageRecipeArn
   */
  readonly imageRecipeArn?: string;

  /**
   * @schema ImagebuilderCreateImagePipelineRequest#containerRecipeArn
   */
  readonly containerRecipeArn?: string;

  /**
   * @schema ImagebuilderCreateImagePipelineRequest#infrastructureConfigurationArn
   */
  readonly infrastructureConfigurationArn: string;

  /**
   * @schema ImagebuilderCreateImagePipelineRequest#distributionConfigurationArn
   */
  readonly distributionConfigurationArn?: string;

  /**
   * @schema ImagebuilderCreateImagePipelineRequest#imageTestsConfiguration
   */
  readonly imageTestsConfiguration?: ImagebuilderImageTestsConfiguration;

  /**
   * @schema ImagebuilderCreateImagePipelineRequest#enhancedImageMetadataEnabled
   */
  readonly enhancedImageMetadataEnabled?: boolean;

  /**
   * @schema ImagebuilderCreateImagePipelineRequest#schedule
   */
  readonly schedule?: ImagebuilderSchedule;

  /**
   * @schema ImagebuilderCreateImagePipelineRequest#status
   */
  readonly status?: string;

  /**
   * @schema ImagebuilderCreateImagePipelineRequest#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema ImagebuilderCreateImagePipelineRequest#clientToken
   */
  readonly clientToken: string;

}

/**
 * Converts an object of type 'ImagebuilderCreateImagePipelineRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderCreateImagePipelineRequest(obj: ImagebuilderCreateImagePipelineRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'description': obj.description,
    'imageRecipeArn': obj.imageRecipeArn,
    'containerRecipeArn': obj.containerRecipeArn,
    'infrastructureConfigurationArn': obj.infrastructureConfigurationArn,
    'distributionConfigurationArn': obj.distributionConfigurationArn,
    'imageTestsConfiguration': toJson_ImagebuilderImageTestsConfiguration(obj.imageTestsConfiguration),
    'enhancedImageMetadataEnabled': obj.enhancedImageMetadataEnabled,
    'schedule': toJson_ImagebuilderSchedule(obj.schedule),
    'status': obj.status,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'clientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderCreateImagePipelineResponse
 */
export interface ImagebuilderCreateImagePipelineResponse {
  /**
   * @schema ImagebuilderCreateImagePipelineResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema ImagebuilderCreateImagePipelineResponse#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema ImagebuilderCreateImagePipelineResponse#imagePipelineArn
   */
  readonly imagePipelineArn?: string;

}

/**
 * Converts an object of type 'ImagebuilderCreateImagePipelineResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderCreateImagePipelineResponse(obj: ImagebuilderCreateImagePipelineResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'requestId': obj.requestId,
    'clientToken': obj.clientToken,
    'imagePipelineArn': obj.imagePipelineArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderCreateImageRecipeRequest
 */
export interface ImagebuilderCreateImageRecipeRequest {
  /**
   * @schema ImagebuilderCreateImageRecipeRequest#name
   */
  readonly name: string;

  /**
   * @schema ImagebuilderCreateImageRecipeRequest#description
   */
  readonly description?: string;

  /**
   * @schema ImagebuilderCreateImageRecipeRequest#semanticVersion
   */
  readonly semanticVersion: string;

  /**
   * @schema ImagebuilderCreateImageRecipeRequest#components
   */
  readonly components: ImagebuilderComponentConfiguration[];

  /**
   * @schema ImagebuilderCreateImageRecipeRequest#parentImage
   */
  readonly parentImage: string;

  /**
   * @schema ImagebuilderCreateImageRecipeRequest#blockDeviceMappings
   */
  readonly blockDeviceMappings?: ImagebuilderInstanceBlockDeviceMapping[];

  /**
   * @schema ImagebuilderCreateImageRecipeRequest#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema ImagebuilderCreateImageRecipeRequest#workingDirectory
   */
  readonly workingDirectory?: string;

  /**
   * @schema ImagebuilderCreateImageRecipeRequest#additionalInstanceConfiguration
   */
  readonly additionalInstanceConfiguration?: ImagebuilderAdditionalInstanceConfiguration;

  /**
   * @schema ImagebuilderCreateImageRecipeRequest#clientToken
   */
  readonly clientToken: string;

}

/**
 * Converts an object of type 'ImagebuilderCreateImageRecipeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderCreateImageRecipeRequest(obj: ImagebuilderCreateImageRecipeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'description': obj.description,
    'semanticVersion': obj.semanticVersion,
    'components': obj.components?.map(y => toJson_ImagebuilderComponentConfiguration(y)),
    'parentImage': obj.parentImage,
    'blockDeviceMappings': obj.blockDeviceMappings?.map(y => toJson_ImagebuilderInstanceBlockDeviceMapping(y)),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'workingDirectory': obj.workingDirectory,
    'additionalInstanceConfiguration': toJson_ImagebuilderAdditionalInstanceConfiguration(obj.additionalInstanceConfiguration),
    'clientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderCreateImageRecipeResponse
 */
export interface ImagebuilderCreateImageRecipeResponse {
  /**
   * @schema ImagebuilderCreateImageRecipeResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema ImagebuilderCreateImageRecipeResponse#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema ImagebuilderCreateImageRecipeResponse#imageRecipeArn
   */
  readonly imageRecipeArn?: string;

}

/**
 * Converts an object of type 'ImagebuilderCreateImageRecipeResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderCreateImageRecipeResponse(obj: ImagebuilderCreateImageRecipeResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'requestId': obj.requestId,
    'clientToken': obj.clientToken,
    'imageRecipeArn': obj.imageRecipeArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderCreateInfrastructureConfigurationRequest
 */
export interface ImagebuilderCreateInfrastructureConfigurationRequest {
  /**
   * @schema ImagebuilderCreateInfrastructureConfigurationRequest#name
   */
  readonly name: string;

  /**
   * @schema ImagebuilderCreateInfrastructureConfigurationRequest#description
   */
  readonly description?: string;

  /**
   * @schema ImagebuilderCreateInfrastructureConfigurationRequest#instanceTypes
   */
  readonly instanceTypes?: string[];

  /**
   * @schema ImagebuilderCreateInfrastructureConfigurationRequest#instanceProfileName
   */
  readonly instanceProfileName: string;

  /**
   * @schema ImagebuilderCreateInfrastructureConfigurationRequest#securityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema ImagebuilderCreateInfrastructureConfigurationRequest#subnetId
   */
  readonly subnetId?: string;

  /**
   * @schema ImagebuilderCreateInfrastructureConfigurationRequest#logging
   */
  readonly logging?: ImagebuilderLogging;

  /**
   * @schema ImagebuilderCreateInfrastructureConfigurationRequest#keyPair
   */
  readonly keyPair?: string;

  /**
   * @schema ImagebuilderCreateInfrastructureConfigurationRequest#terminateInstanceOnFailure
   */
  readonly terminateInstanceOnFailure?: boolean;

  /**
   * @schema ImagebuilderCreateInfrastructureConfigurationRequest#snsTopicArn
   */
  readonly snsTopicArn?: string;

  /**
   * @schema ImagebuilderCreateInfrastructureConfigurationRequest#resourceTags
   */
  readonly resourceTags?: { [key: string]: string };

  /**
   * @schema ImagebuilderCreateInfrastructureConfigurationRequest#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema ImagebuilderCreateInfrastructureConfigurationRequest#clientToken
   */
  readonly clientToken: string;

}

/**
 * Converts an object of type 'ImagebuilderCreateInfrastructureConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderCreateInfrastructureConfigurationRequest(obj: ImagebuilderCreateInfrastructureConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'description': obj.description,
    'instanceTypes': obj.instanceTypes?.map(y => y),
    'instanceProfileName': obj.instanceProfileName,
    'securityGroupIds': obj.securityGroupIds?.map(y => y),
    'subnetId': obj.subnetId,
    'logging': toJson_ImagebuilderLogging(obj.logging),
    'keyPair': obj.keyPair,
    'terminateInstanceOnFailure': obj.terminateInstanceOnFailure,
    'snsTopicArn': obj.snsTopicArn,
    'resourceTags': ((obj.resourceTags) === undefined) ? undefined : (Object.entries(obj.resourceTags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'clientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderCreateInfrastructureConfigurationResponse
 */
export interface ImagebuilderCreateInfrastructureConfigurationResponse {
  /**
   * @schema ImagebuilderCreateInfrastructureConfigurationResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema ImagebuilderCreateInfrastructureConfigurationResponse#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema ImagebuilderCreateInfrastructureConfigurationResponse#infrastructureConfigurationArn
   */
  readonly infrastructureConfigurationArn?: string;

}

/**
 * Converts an object of type 'ImagebuilderCreateInfrastructureConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderCreateInfrastructureConfigurationResponse(obj: ImagebuilderCreateInfrastructureConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'requestId': obj.requestId,
    'clientToken': obj.clientToken,
    'infrastructureConfigurationArn': obj.infrastructureConfigurationArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderDeleteComponentRequest
 */
export interface ImagebuilderDeleteComponentRequest {
  /**
   * @schema ImagebuilderDeleteComponentRequest#componentBuildVersionArn
   */
  readonly componentBuildVersionArn: string;

}

/**
 * Converts an object of type 'ImagebuilderDeleteComponentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderDeleteComponentRequest(obj: ImagebuilderDeleteComponentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'componentBuildVersionArn': obj.componentBuildVersionArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderDeleteComponentResponse
 */
export interface ImagebuilderDeleteComponentResponse {
  /**
   * @schema ImagebuilderDeleteComponentResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema ImagebuilderDeleteComponentResponse#componentBuildVersionArn
   */
  readonly componentBuildVersionArn?: string;

}

/**
 * Converts an object of type 'ImagebuilderDeleteComponentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderDeleteComponentResponse(obj: ImagebuilderDeleteComponentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'requestId': obj.requestId,
    'componentBuildVersionArn': obj.componentBuildVersionArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderDeleteContainerRecipeRequest
 */
export interface ImagebuilderDeleteContainerRecipeRequest {
  /**
   * @schema ImagebuilderDeleteContainerRecipeRequest#containerRecipeArn
   */
  readonly containerRecipeArn: string;

}

/**
 * Converts an object of type 'ImagebuilderDeleteContainerRecipeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderDeleteContainerRecipeRequest(obj: ImagebuilderDeleteContainerRecipeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'containerRecipeArn': obj.containerRecipeArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderDeleteContainerRecipeResponse
 */
export interface ImagebuilderDeleteContainerRecipeResponse {
  /**
   * @schema ImagebuilderDeleteContainerRecipeResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema ImagebuilderDeleteContainerRecipeResponse#containerRecipeArn
   */
  readonly containerRecipeArn?: string;

}

/**
 * Converts an object of type 'ImagebuilderDeleteContainerRecipeResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderDeleteContainerRecipeResponse(obj: ImagebuilderDeleteContainerRecipeResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'requestId': obj.requestId,
    'containerRecipeArn': obj.containerRecipeArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderDeleteDistributionConfigurationRequest
 */
export interface ImagebuilderDeleteDistributionConfigurationRequest {
  /**
   * @schema ImagebuilderDeleteDistributionConfigurationRequest#distributionConfigurationArn
   */
  readonly distributionConfigurationArn: string;

}

/**
 * Converts an object of type 'ImagebuilderDeleteDistributionConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderDeleteDistributionConfigurationRequest(obj: ImagebuilderDeleteDistributionConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'distributionConfigurationArn': obj.distributionConfigurationArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderDeleteDistributionConfigurationResponse
 */
export interface ImagebuilderDeleteDistributionConfigurationResponse {
  /**
   * @schema ImagebuilderDeleteDistributionConfigurationResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema ImagebuilderDeleteDistributionConfigurationResponse#distributionConfigurationArn
   */
  readonly distributionConfigurationArn?: string;

}

/**
 * Converts an object of type 'ImagebuilderDeleteDistributionConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderDeleteDistributionConfigurationResponse(obj: ImagebuilderDeleteDistributionConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'requestId': obj.requestId,
    'distributionConfigurationArn': obj.distributionConfigurationArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderDeleteImageRequest
 */
export interface ImagebuilderDeleteImageRequest {
  /**
   * @schema ImagebuilderDeleteImageRequest#imageBuildVersionArn
   */
  readonly imageBuildVersionArn: string;

}

/**
 * Converts an object of type 'ImagebuilderDeleteImageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderDeleteImageRequest(obj: ImagebuilderDeleteImageRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'imageBuildVersionArn': obj.imageBuildVersionArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderDeleteImageResponse
 */
export interface ImagebuilderDeleteImageResponse {
  /**
   * @schema ImagebuilderDeleteImageResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema ImagebuilderDeleteImageResponse#imageBuildVersionArn
   */
  readonly imageBuildVersionArn?: string;

}

/**
 * Converts an object of type 'ImagebuilderDeleteImageResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderDeleteImageResponse(obj: ImagebuilderDeleteImageResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'requestId': obj.requestId,
    'imageBuildVersionArn': obj.imageBuildVersionArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderDeleteImagePipelineRequest
 */
export interface ImagebuilderDeleteImagePipelineRequest {
  /**
   * @schema ImagebuilderDeleteImagePipelineRequest#imagePipelineArn
   */
  readonly imagePipelineArn: string;

}

/**
 * Converts an object of type 'ImagebuilderDeleteImagePipelineRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderDeleteImagePipelineRequest(obj: ImagebuilderDeleteImagePipelineRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'imagePipelineArn': obj.imagePipelineArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderDeleteImagePipelineResponse
 */
export interface ImagebuilderDeleteImagePipelineResponse {
  /**
   * @schema ImagebuilderDeleteImagePipelineResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema ImagebuilderDeleteImagePipelineResponse#imagePipelineArn
   */
  readonly imagePipelineArn?: string;

}

/**
 * Converts an object of type 'ImagebuilderDeleteImagePipelineResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderDeleteImagePipelineResponse(obj: ImagebuilderDeleteImagePipelineResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'requestId': obj.requestId,
    'imagePipelineArn': obj.imagePipelineArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderDeleteImageRecipeRequest
 */
export interface ImagebuilderDeleteImageRecipeRequest {
  /**
   * @schema ImagebuilderDeleteImageRecipeRequest#imageRecipeArn
   */
  readonly imageRecipeArn: string;

}

/**
 * Converts an object of type 'ImagebuilderDeleteImageRecipeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderDeleteImageRecipeRequest(obj: ImagebuilderDeleteImageRecipeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'imageRecipeArn': obj.imageRecipeArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderDeleteImageRecipeResponse
 */
export interface ImagebuilderDeleteImageRecipeResponse {
  /**
   * @schema ImagebuilderDeleteImageRecipeResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema ImagebuilderDeleteImageRecipeResponse#imageRecipeArn
   */
  readonly imageRecipeArn?: string;

}

/**
 * Converts an object of type 'ImagebuilderDeleteImageRecipeResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderDeleteImageRecipeResponse(obj: ImagebuilderDeleteImageRecipeResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'requestId': obj.requestId,
    'imageRecipeArn': obj.imageRecipeArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderDeleteInfrastructureConfigurationRequest
 */
export interface ImagebuilderDeleteInfrastructureConfigurationRequest {
  /**
   * @schema ImagebuilderDeleteInfrastructureConfigurationRequest#infrastructureConfigurationArn
   */
  readonly infrastructureConfigurationArn: string;

}

/**
 * Converts an object of type 'ImagebuilderDeleteInfrastructureConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderDeleteInfrastructureConfigurationRequest(obj: ImagebuilderDeleteInfrastructureConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'infrastructureConfigurationArn': obj.infrastructureConfigurationArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderDeleteInfrastructureConfigurationResponse
 */
export interface ImagebuilderDeleteInfrastructureConfigurationResponse {
  /**
   * @schema ImagebuilderDeleteInfrastructureConfigurationResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema ImagebuilderDeleteInfrastructureConfigurationResponse#infrastructureConfigurationArn
   */
  readonly infrastructureConfigurationArn?: string;

}

/**
 * Converts an object of type 'ImagebuilderDeleteInfrastructureConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderDeleteInfrastructureConfigurationResponse(obj: ImagebuilderDeleteInfrastructureConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'requestId': obj.requestId,
    'infrastructureConfigurationArn': obj.infrastructureConfigurationArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderGetComponentRequest
 */
export interface ImagebuilderGetComponentRequest {
  /**
   * @schema ImagebuilderGetComponentRequest#componentBuildVersionArn
   */
  readonly componentBuildVersionArn: string;

}

/**
 * Converts an object of type 'ImagebuilderGetComponentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderGetComponentRequest(obj: ImagebuilderGetComponentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'componentBuildVersionArn': obj.componentBuildVersionArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderGetComponentResponse
 */
export interface ImagebuilderGetComponentResponse {
  /**
   * @schema ImagebuilderGetComponentResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema ImagebuilderGetComponentResponse#component
   */
  readonly component?: ImagebuilderComponent;

}

/**
 * Converts an object of type 'ImagebuilderGetComponentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderGetComponentResponse(obj: ImagebuilderGetComponentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'requestId': obj.requestId,
    'component': toJson_ImagebuilderComponent(obj.component),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderGetComponentPolicyRequest
 */
export interface ImagebuilderGetComponentPolicyRequest {
  /**
   * @schema ImagebuilderGetComponentPolicyRequest#componentArn
   */
  readonly componentArn: string;

}

/**
 * Converts an object of type 'ImagebuilderGetComponentPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderGetComponentPolicyRequest(obj: ImagebuilderGetComponentPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'componentArn': obj.componentArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderGetComponentPolicyResponse
 */
export interface ImagebuilderGetComponentPolicyResponse {
  /**
   * @schema ImagebuilderGetComponentPolicyResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema ImagebuilderGetComponentPolicyResponse#policy
   */
  readonly policy?: string;

}

/**
 * Converts an object of type 'ImagebuilderGetComponentPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderGetComponentPolicyResponse(obj: ImagebuilderGetComponentPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'requestId': obj.requestId,
    'policy': obj.policy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderGetContainerRecipeRequest
 */
export interface ImagebuilderGetContainerRecipeRequest {
  /**
   * @schema ImagebuilderGetContainerRecipeRequest#containerRecipeArn
   */
  readonly containerRecipeArn: string;

}

/**
 * Converts an object of type 'ImagebuilderGetContainerRecipeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderGetContainerRecipeRequest(obj: ImagebuilderGetContainerRecipeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'containerRecipeArn': obj.containerRecipeArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderGetContainerRecipeResponse
 */
export interface ImagebuilderGetContainerRecipeResponse {
  /**
   * @schema ImagebuilderGetContainerRecipeResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema ImagebuilderGetContainerRecipeResponse#containerRecipe
   */
  readonly containerRecipe?: ImagebuilderContainerRecipe;

}

/**
 * Converts an object of type 'ImagebuilderGetContainerRecipeResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderGetContainerRecipeResponse(obj: ImagebuilderGetContainerRecipeResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'requestId': obj.requestId,
    'containerRecipe': toJson_ImagebuilderContainerRecipe(obj.containerRecipe),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderGetContainerRecipePolicyRequest
 */
export interface ImagebuilderGetContainerRecipePolicyRequest {
  /**
   * @schema ImagebuilderGetContainerRecipePolicyRequest#containerRecipeArn
   */
  readonly containerRecipeArn: string;

}

/**
 * Converts an object of type 'ImagebuilderGetContainerRecipePolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderGetContainerRecipePolicyRequest(obj: ImagebuilderGetContainerRecipePolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'containerRecipeArn': obj.containerRecipeArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderGetContainerRecipePolicyResponse
 */
export interface ImagebuilderGetContainerRecipePolicyResponse {
  /**
   * @schema ImagebuilderGetContainerRecipePolicyResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema ImagebuilderGetContainerRecipePolicyResponse#policy
   */
  readonly policy?: string;

}

/**
 * Converts an object of type 'ImagebuilderGetContainerRecipePolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderGetContainerRecipePolicyResponse(obj: ImagebuilderGetContainerRecipePolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'requestId': obj.requestId,
    'policy': obj.policy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderGetDistributionConfigurationRequest
 */
export interface ImagebuilderGetDistributionConfigurationRequest {
  /**
   * @schema ImagebuilderGetDistributionConfigurationRequest#distributionConfigurationArn
   */
  readonly distributionConfigurationArn: string;

}

/**
 * Converts an object of type 'ImagebuilderGetDistributionConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderGetDistributionConfigurationRequest(obj: ImagebuilderGetDistributionConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'distributionConfigurationArn': obj.distributionConfigurationArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderGetDistributionConfigurationResponse
 */
export interface ImagebuilderGetDistributionConfigurationResponse {
  /**
   * @schema ImagebuilderGetDistributionConfigurationResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema ImagebuilderGetDistributionConfigurationResponse#distributionConfiguration
   */
  readonly distributionConfiguration?: ImagebuilderDistributionConfiguration;

}

/**
 * Converts an object of type 'ImagebuilderGetDistributionConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderGetDistributionConfigurationResponse(obj: ImagebuilderGetDistributionConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'requestId': obj.requestId,
    'distributionConfiguration': toJson_ImagebuilderDistributionConfiguration(obj.distributionConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderGetImageRequest
 */
export interface ImagebuilderGetImageRequest {
  /**
   * @schema ImagebuilderGetImageRequest#imageBuildVersionArn
   */
  readonly imageBuildVersionArn: string;

}

/**
 * Converts an object of type 'ImagebuilderGetImageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderGetImageRequest(obj: ImagebuilderGetImageRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'imageBuildVersionArn': obj.imageBuildVersionArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderGetImageResponse
 */
export interface ImagebuilderGetImageResponse {
  /**
   * @schema ImagebuilderGetImageResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema ImagebuilderGetImageResponse#image
   */
  readonly image?: ImagebuilderImage;

}

/**
 * Converts an object of type 'ImagebuilderGetImageResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderGetImageResponse(obj: ImagebuilderGetImageResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'requestId': obj.requestId,
    'image': toJson_ImagebuilderImage(obj.image),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderGetImagePipelineRequest
 */
export interface ImagebuilderGetImagePipelineRequest {
  /**
   * @schema ImagebuilderGetImagePipelineRequest#imagePipelineArn
   */
  readonly imagePipelineArn: string;

}

/**
 * Converts an object of type 'ImagebuilderGetImagePipelineRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderGetImagePipelineRequest(obj: ImagebuilderGetImagePipelineRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'imagePipelineArn': obj.imagePipelineArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderGetImagePipelineResponse
 */
export interface ImagebuilderGetImagePipelineResponse {
  /**
   * @schema ImagebuilderGetImagePipelineResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema ImagebuilderGetImagePipelineResponse#imagePipeline
   */
  readonly imagePipeline?: ImagebuilderImagePipeline;

}

/**
 * Converts an object of type 'ImagebuilderGetImagePipelineResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderGetImagePipelineResponse(obj: ImagebuilderGetImagePipelineResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'requestId': obj.requestId,
    'imagePipeline': toJson_ImagebuilderImagePipeline(obj.imagePipeline),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderGetImagePolicyRequest
 */
export interface ImagebuilderGetImagePolicyRequest {
  /**
   * @schema ImagebuilderGetImagePolicyRequest#imageArn
   */
  readonly imageArn: string;

}

/**
 * Converts an object of type 'ImagebuilderGetImagePolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderGetImagePolicyRequest(obj: ImagebuilderGetImagePolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'imageArn': obj.imageArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderGetImagePolicyResponse
 */
export interface ImagebuilderGetImagePolicyResponse {
  /**
   * @schema ImagebuilderGetImagePolicyResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema ImagebuilderGetImagePolicyResponse#policy
   */
  readonly policy?: string;

}

/**
 * Converts an object of type 'ImagebuilderGetImagePolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderGetImagePolicyResponse(obj: ImagebuilderGetImagePolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'requestId': obj.requestId,
    'policy': obj.policy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderGetImageRecipeRequest
 */
export interface ImagebuilderGetImageRecipeRequest {
  /**
   * @schema ImagebuilderGetImageRecipeRequest#imageRecipeArn
   */
  readonly imageRecipeArn: string;

}

/**
 * Converts an object of type 'ImagebuilderGetImageRecipeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderGetImageRecipeRequest(obj: ImagebuilderGetImageRecipeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'imageRecipeArn': obj.imageRecipeArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderGetImageRecipeResponse
 */
export interface ImagebuilderGetImageRecipeResponse {
  /**
   * @schema ImagebuilderGetImageRecipeResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema ImagebuilderGetImageRecipeResponse#imageRecipe
   */
  readonly imageRecipe?: ImagebuilderImageRecipe;

}

/**
 * Converts an object of type 'ImagebuilderGetImageRecipeResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderGetImageRecipeResponse(obj: ImagebuilderGetImageRecipeResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'requestId': obj.requestId,
    'imageRecipe': toJson_ImagebuilderImageRecipe(obj.imageRecipe),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderGetImageRecipePolicyRequest
 */
export interface ImagebuilderGetImageRecipePolicyRequest {
  /**
   * @schema ImagebuilderGetImageRecipePolicyRequest#imageRecipeArn
   */
  readonly imageRecipeArn: string;

}

/**
 * Converts an object of type 'ImagebuilderGetImageRecipePolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderGetImageRecipePolicyRequest(obj: ImagebuilderGetImageRecipePolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'imageRecipeArn': obj.imageRecipeArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderGetImageRecipePolicyResponse
 */
export interface ImagebuilderGetImageRecipePolicyResponse {
  /**
   * @schema ImagebuilderGetImageRecipePolicyResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema ImagebuilderGetImageRecipePolicyResponse#policy
   */
  readonly policy?: string;

}

/**
 * Converts an object of type 'ImagebuilderGetImageRecipePolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderGetImageRecipePolicyResponse(obj: ImagebuilderGetImageRecipePolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'requestId': obj.requestId,
    'policy': obj.policy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderGetInfrastructureConfigurationRequest
 */
export interface ImagebuilderGetInfrastructureConfigurationRequest {
  /**
   * @schema ImagebuilderGetInfrastructureConfigurationRequest#infrastructureConfigurationArn
   */
  readonly infrastructureConfigurationArn: string;

}

/**
 * Converts an object of type 'ImagebuilderGetInfrastructureConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderGetInfrastructureConfigurationRequest(obj: ImagebuilderGetInfrastructureConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'infrastructureConfigurationArn': obj.infrastructureConfigurationArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderGetInfrastructureConfigurationResponse
 */
export interface ImagebuilderGetInfrastructureConfigurationResponse {
  /**
   * @schema ImagebuilderGetInfrastructureConfigurationResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema ImagebuilderGetInfrastructureConfigurationResponse#infrastructureConfiguration
   */
  readonly infrastructureConfiguration?: ImagebuilderInfrastructureConfiguration;

}

/**
 * Converts an object of type 'ImagebuilderGetInfrastructureConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderGetInfrastructureConfigurationResponse(obj: ImagebuilderGetInfrastructureConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'requestId': obj.requestId,
    'infrastructureConfiguration': toJson_ImagebuilderInfrastructureConfiguration(obj.infrastructureConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderImportComponentRequest
 */
export interface ImagebuilderImportComponentRequest {
  /**
   * @schema ImagebuilderImportComponentRequest#name
   */
  readonly name: string;

  /**
   * @schema ImagebuilderImportComponentRequest#semanticVersion
   */
  readonly semanticVersion: string;

  /**
   * @schema ImagebuilderImportComponentRequest#description
   */
  readonly description?: string;

  /**
   * @schema ImagebuilderImportComponentRequest#changeDescription
   */
  readonly changeDescription?: string;

  /**
   * @schema ImagebuilderImportComponentRequest#type
   */
  readonly type: string;

  /**
   * @schema ImagebuilderImportComponentRequest#format
   */
  readonly format: string;

  /**
   * @schema ImagebuilderImportComponentRequest#platform
   */
  readonly platform: string;

  /**
   * @schema ImagebuilderImportComponentRequest#data
   */
  readonly data?: string;

  /**
   * @schema ImagebuilderImportComponentRequest#uri
   */
  readonly uri?: string;

  /**
   * @schema ImagebuilderImportComponentRequest#kmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema ImagebuilderImportComponentRequest#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema ImagebuilderImportComponentRequest#clientToken
   */
  readonly clientToken: string;

}

/**
 * Converts an object of type 'ImagebuilderImportComponentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderImportComponentRequest(obj: ImagebuilderImportComponentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'semanticVersion': obj.semanticVersion,
    'description': obj.description,
    'changeDescription': obj.changeDescription,
    'type': obj.type,
    'format': obj.format,
    'platform': obj.platform,
    'data': obj.data,
    'uri': obj.uri,
    'kmsKeyId': obj.kmsKeyId,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'clientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderImportComponentResponse
 */
export interface ImagebuilderImportComponentResponse {
  /**
   * @schema ImagebuilderImportComponentResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema ImagebuilderImportComponentResponse#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema ImagebuilderImportComponentResponse#componentBuildVersionArn
   */
  readonly componentBuildVersionArn?: string;

}

/**
 * Converts an object of type 'ImagebuilderImportComponentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderImportComponentResponse(obj: ImagebuilderImportComponentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'requestId': obj.requestId,
    'clientToken': obj.clientToken,
    'componentBuildVersionArn': obj.componentBuildVersionArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderListComponentBuildVersionsRequest
 */
export interface ImagebuilderListComponentBuildVersionsRequest {
  /**
   * @schema ImagebuilderListComponentBuildVersionsRequest#componentVersionArn
   */
  readonly componentVersionArn: string;

  /**
   * @schema ImagebuilderListComponentBuildVersionsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ImagebuilderListComponentBuildVersionsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ImagebuilderListComponentBuildVersionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderListComponentBuildVersionsRequest(obj: ImagebuilderListComponentBuildVersionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'componentVersionArn': obj.componentVersionArn,
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderListComponentBuildVersionsResponse
 */
export interface ImagebuilderListComponentBuildVersionsResponse {
  /**
   * @schema ImagebuilderListComponentBuildVersionsResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema ImagebuilderListComponentBuildVersionsResponse#componentSummaryList
   */
  readonly componentSummaryList?: ImagebuilderComponentSummary[];

  /**
   * @schema ImagebuilderListComponentBuildVersionsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ImagebuilderListComponentBuildVersionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderListComponentBuildVersionsResponse(obj: ImagebuilderListComponentBuildVersionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'requestId': obj.requestId,
    'componentSummaryList': obj.componentSummaryList?.map(y => toJson_ImagebuilderComponentSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderListComponentsRequest
 */
export interface ImagebuilderListComponentsRequest {
  /**
   * @schema ImagebuilderListComponentsRequest#owner
   */
  readonly owner?: string;

  /**
   * @schema ImagebuilderListComponentsRequest#filters
   */
  readonly filters?: ImagebuilderFilter[];

  /**
   * @schema ImagebuilderListComponentsRequest#byName
   */
  readonly byName?: boolean;

  /**
   * @schema ImagebuilderListComponentsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ImagebuilderListComponentsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ImagebuilderListComponentsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderListComponentsRequest(obj: ImagebuilderListComponentsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'owner': obj.owner,
    'filters': obj.filters?.map(y => toJson_ImagebuilderFilter(y)),
    'byName': obj.byName,
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderListComponentsResponse
 */
export interface ImagebuilderListComponentsResponse {
  /**
   * @schema ImagebuilderListComponentsResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema ImagebuilderListComponentsResponse#componentVersionList
   */
  readonly componentVersionList?: ImagebuilderComponentVersion[];

  /**
   * @schema ImagebuilderListComponentsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ImagebuilderListComponentsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderListComponentsResponse(obj: ImagebuilderListComponentsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'requestId': obj.requestId,
    'componentVersionList': obj.componentVersionList?.map(y => toJson_ImagebuilderComponentVersion(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderListContainerRecipesRequest
 */
export interface ImagebuilderListContainerRecipesRequest {
  /**
   * @schema ImagebuilderListContainerRecipesRequest#owner
   */
  readonly owner?: string;

  /**
   * @schema ImagebuilderListContainerRecipesRequest#filters
   */
  readonly filters?: ImagebuilderFilter[];

  /**
   * @schema ImagebuilderListContainerRecipesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ImagebuilderListContainerRecipesRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ImagebuilderListContainerRecipesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderListContainerRecipesRequest(obj: ImagebuilderListContainerRecipesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'owner': obj.owner,
    'filters': obj.filters?.map(y => toJson_ImagebuilderFilter(y)),
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderListContainerRecipesResponse
 */
export interface ImagebuilderListContainerRecipesResponse {
  /**
   * @schema ImagebuilderListContainerRecipesResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema ImagebuilderListContainerRecipesResponse#containerRecipeSummaryList
   */
  readonly containerRecipeSummaryList?: ImagebuilderContainerRecipeSummary[];

  /**
   * @schema ImagebuilderListContainerRecipesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ImagebuilderListContainerRecipesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderListContainerRecipesResponse(obj: ImagebuilderListContainerRecipesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'requestId': obj.requestId,
    'containerRecipeSummaryList': obj.containerRecipeSummaryList?.map(y => toJson_ImagebuilderContainerRecipeSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderListDistributionConfigurationsRequest
 */
export interface ImagebuilderListDistributionConfigurationsRequest {
  /**
   * @schema ImagebuilderListDistributionConfigurationsRequest#filters
   */
  readonly filters?: ImagebuilderFilter[];

  /**
   * @schema ImagebuilderListDistributionConfigurationsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ImagebuilderListDistributionConfigurationsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ImagebuilderListDistributionConfigurationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderListDistributionConfigurationsRequest(obj: ImagebuilderListDistributionConfigurationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'filters': obj.filters?.map(y => toJson_ImagebuilderFilter(y)),
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderListDistributionConfigurationsResponse
 */
export interface ImagebuilderListDistributionConfigurationsResponse {
  /**
   * @schema ImagebuilderListDistributionConfigurationsResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema ImagebuilderListDistributionConfigurationsResponse#distributionConfigurationSummaryList
   */
  readonly distributionConfigurationSummaryList?: ImagebuilderDistributionConfigurationSummary[];

  /**
   * @schema ImagebuilderListDistributionConfigurationsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ImagebuilderListDistributionConfigurationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderListDistributionConfigurationsResponse(obj: ImagebuilderListDistributionConfigurationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'requestId': obj.requestId,
    'distributionConfigurationSummaryList': obj.distributionConfigurationSummaryList?.map(y => toJson_ImagebuilderDistributionConfigurationSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderListImageBuildVersionsRequest
 */
export interface ImagebuilderListImageBuildVersionsRequest {
  /**
   * @schema ImagebuilderListImageBuildVersionsRequest#imageVersionArn
   */
  readonly imageVersionArn: string;

  /**
   * @schema ImagebuilderListImageBuildVersionsRequest#filters
   */
  readonly filters?: ImagebuilderFilter[];

  /**
   * @schema ImagebuilderListImageBuildVersionsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ImagebuilderListImageBuildVersionsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ImagebuilderListImageBuildVersionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderListImageBuildVersionsRequest(obj: ImagebuilderListImageBuildVersionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'imageVersionArn': obj.imageVersionArn,
    'filters': obj.filters?.map(y => toJson_ImagebuilderFilter(y)),
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderListImageBuildVersionsResponse
 */
export interface ImagebuilderListImageBuildVersionsResponse {
  /**
   * @schema ImagebuilderListImageBuildVersionsResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema ImagebuilderListImageBuildVersionsResponse#imageSummaryList
   */
  readonly imageSummaryList?: ImagebuilderImageSummary[];

  /**
   * @schema ImagebuilderListImageBuildVersionsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ImagebuilderListImageBuildVersionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderListImageBuildVersionsResponse(obj: ImagebuilderListImageBuildVersionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'requestId': obj.requestId,
    'imageSummaryList': obj.imageSummaryList?.map(y => toJson_ImagebuilderImageSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderListImagePackagesRequest
 */
export interface ImagebuilderListImagePackagesRequest {
  /**
   * @schema ImagebuilderListImagePackagesRequest#imageBuildVersionArn
   */
  readonly imageBuildVersionArn: string;

  /**
   * @schema ImagebuilderListImagePackagesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ImagebuilderListImagePackagesRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ImagebuilderListImagePackagesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderListImagePackagesRequest(obj: ImagebuilderListImagePackagesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'imageBuildVersionArn': obj.imageBuildVersionArn,
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderListImagePackagesResponse
 */
export interface ImagebuilderListImagePackagesResponse {
  /**
   * @schema ImagebuilderListImagePackagesResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema ImagebuilderListImagePackagesResponse#imagePackageList
   */
  readonly imagePackageList?: ImagebuilderImagePackage[];

  /**
   * @schema ImagebuilderListImagePackagesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ImagebuilderListImagePackagesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderListImagePackagesResponse(obj: ImagebuilderListImagePackagesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'requestId': obj.requestId,
    'imagePackageList': obj.imagePackageList?.map(y => toJson_ImagebuilderImagePackage(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderListImagePipelineImagesRequest
 */
export interface ImagebuilderListImagePipelineImagesRequest {
  /**
   * @schema ImagebuilderListImagePipelineImagesRequest#imagePipelineArn
   */
  readonly imagePipelineArn: string;

  /**
   * @schema ImagebuilderListImagePipelineImagesRequest#filters
   */
  readonly filters?: ImagebuilderFilter[];

  /**
   * @schema ImagebuilderListImagePipelineImagesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ImagebuilderListImagePipelineImagesRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ImagebuilderListImagePipelineImagesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderListImagePipelineImagesRequest(obj: ImagebuilderListImagePipelineImagesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'imagePipelineArn': obj.imagePipelineArn,
    'filters': obj.filters?.map(y => toJson_ImagebuilderFilter(y)),
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderListImagePipelineImagesResponse
 */
export interface ImagebuilderListImagePipelineImagesResponse {
  /**
   * @schema ImagebuilderListImagePipelineImagesResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema ImagebuilderListImagePipelineImagesResponse#imageSummaryList
   */
  readonly imageSummaryList?: ImagebuilderImageSummary[];

  /**
   * @schema ImagebuilderListImagePipelineImagesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ImagebuilderListImagePipelineImagesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderListImagePipelineImagesResponse(obj: ImagebuilderListImagePipelineImagesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'requestId': obj.requestId,
    'imageSummaryList': obj.imageSummaryList?.map(y => toJson_ImagebuilderImageSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderListImagePipelinesRequest
 */
export interface ImagebuilderListImagePipelinesRequest {
  /**
   * @schema ImagebuilderListImagePipelinesRequest#filters
   */
  readonly filters?: ImagebuilderFilter[];

  /**
   * @schema ImagebuilderListImagePipelinesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ImagebuilderListImagePipelinesRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ImagebuilderListImagePipelinesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderListImagePipelinesRequest(obj: ImagebuilderListImagePipelinesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'filters': obj.filters?.map(y => toJson_ImagebuilderFilter(y)),
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderListImagePipelinesResponse
 */
export interface ImagebuilderListImagePipelinesResponse {
  /**
   * @schema ImagebuilderListImagePipelinesResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema ImagebuilderListImagePipelinesResponse#imagePipelineList
   */
  readonly imagePipelineList?: ImagebuilderImagePipeline[];

  /**
   * @schema ImagebuilderListImagePipelinesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ImagebuilderListImagePipelinesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderListImagePipelinesResponse(obj: ImagebuilderListImagePipelinesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'requestId': obj.requestId,
    'imagePipelineList': obj.imagePipelineList?.map(y => toJson_ImagebuilderImagePipeline(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderListImageRecipesRequest
 */
export interface ImagebuilderListImageRecipesRequest {
  /**
   * @schema ImagebuilderListImageRecipesRequest#owner
   */
  readonly owner?: string;

  /**
   * @schema ImagebuilderListImageRecipesRequest#filters
   */
  readonly filters?: ImagebuilderFilter[];

  /**
   * @schema ImagebuilderListImageRecipesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ImagebuilderListImageRecipesRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ImagebuilderListImageRecipesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderListImageRecipesRequest(obj: ImagebuilderListImageRecipesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'owner': obj.owner,
    'filters': obj.filters?.map(y => toJson_ImagebuilderFilter(y)),
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderListImageRecipesResponse
 */
export interface ImagebuilderListImageRecipesResponse {
  /**
   * @schema ImagebuilderListImageRecipesResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema ImagebuilderListImageRecipesResponse#imageRecipeSummaryList
   */
  readonly imageRecipeSummaryList?: ImagebuilderImageRecipeSummary[];

  /**
   * @schema ImagebuilderListImageRecipesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ImagebuilderListImageRecipesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderListImageRecipesResponse(obj: ImagebuilderListImageRecipesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'requestId': obj.requestId,
    'imageRecipeSummaryList': obj.imageRecipeSummaryList?.map(y => toJson_ImagebuilderImageRecipeSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderListImagesRequest
 */
export interface ImagebuilderListImagesRequest {
  /**
   * @schema ImagebuilderListImagesRequest#owner
   */
  readonly owner?: string;

  /**
   * @schema ImagebuilderListImagesRequest#filters
   */
  readonly filters?: ImagebuilderFilter[];

  /**
   * @schema ImagebuilderListImagesRequest#byName
   */
  readonly byName?: boolean;

  /**
   * @schema ImagebuilderListImagesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ImagebuilderListImagesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ImagebuilderListImagesRequest#includeDeprecated
   */
  readonly includeDeprecated?: boolean;

}

/**
 * Converts an object of type 'ImagebuilderListImagesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderListImagesRequest(obj: ImagebuilderListImagesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'owner': obj.owner,
    'filters': obj.filters?.map(y => toJson_ImagebuilderFilter(y)),
    'byName': obj.byName,
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
    'includeDeprecated': obj.includeDeprecated,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderListImagesResponse
 */
export interface ImagebuilderListImagesResponse {
  /**
   * @schema ImagebuilderListImagesResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema ImagebuilderListImagesResponse#imageVersionList
   */
  readonly imageVersionList?: ImagebuilderImageVersion[];

  /**
   * @schema ImagebuilderListImagesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ImagebuilderListImagesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderListImagesResponse(obj: ImagebuilderListImagesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'requestId': obj.requestId,
    'imageVersionList': obj.imageVersionList?.map(y => toJson_ImagebuilderImageVersion(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderListInfrastructureConfigurationsRequest
 */
export interface ImagebuilderListInfrastructureConfigurationsRequest {
  /**
   * @schema ImagebuilderListInfrastructureConfigurationsRequest#filters
   */
  readonly filters?: ImagebuilderFilter[];

  /**
   * @schema ImagebuilderListInfrastructureConfigurationsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ImagebuilderListInfrastructureConfigurationsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ImagebuilderListInfrastructureConfigurationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderListInfrastructureConfigurationsRequest(obj: ImagebuilderListInfrastructureConfigurationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'filters': obj.filters?.map(y => toJson_ImagebuilderFilter(y)),
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderListInfrastructureConfigurationsResponse
 */
export interface ImagebuilderListInfrastructureConfigurationsResponse {
  /**
   * @schema ImagebuilderListInfrastructureConfigurationsResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema ImagebuilderListInfrastructureConfigurationsResponse#infrastructureConfigurationSummaryList
   */
  readonly infrastructureConfigurationSummaryList?: ImagebuilderInfrastructureConfigurationSummary[];

  /**
   * @schema ImagebuilderListInfrastructureConfigurationsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ImagebuilderListInfrastructureConfigurationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderListInfrastructureConfigurationsResponse(obj: ImagebuilderListInfrastructureConfigurationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'requestId': obj.requestId,
    'infrastructureConfigurationSummaryList': obj.infrastructureConfigurationSummaryList?.map(y => toJson_ImagebuilderInfrastructureConfigurationSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderListTagsForResourceRequest
 */
export interface ImagebuilderListTagsForResourceRequest {
  /**
   * @schema ImagebuilderListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * Converts an object of type 'ImagebuilderListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderListTagsForResourceRequest(obj: ImagebuilderListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderListTagsForResourceResponse
 */
export interface ImagebuilderListTagsForResourceResponse {
  /**
   * @schema ImagebuilderListTagsForResourceResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'ImagebuilderListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderListTagsForResourceResponse(obj: ImagebuilderListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderPutComponentPolicyRequest
 */
export interface ImagebuilderPutComponentPolicyRequest {
  /**
   * @schema ImagebuilderPutComponentPolicyRequest#componentArn
   */
  readonly componentArn: string;

  /**
   * @schema ImagebuilderPutComponentPolicyRequest#policy
   */
  readonly policy: string;

}

/**
 * Converts an object of type 'ImagebuilderPutComponentPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderPutComponentPolicyRequest(obj: ImagebuilderPutComponentPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'componentArn': obj.componentArn,
    'policy': obj.policy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderPutComponentPolicyResponse
 */
export interface ImagebuilderPutComponentPolicyResponse {
  /**
   * @schema ImagebuilderPutComponentPolicyResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema ImagebuilderPutComponentPolicyResponse#componentArn
   */
  readonly componentArn?: string;

}

/**
 * Converts an object of type 'ImagebuilderPutComponentPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderPutComponentPolicyResponse(obj: ImagebuilderPutComponentPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'requestId': obj.requestId,
    'componentArn': obj.componentArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderPutContainerRecipePolicyRequest
 */
export interface ImagebuilderPutContainerRecipePolicyRequest {
  /**
   * @schema ImagebuilderPutContainerRecipePolicyRequest#containerRecipeArn
   */
  readonly containerRecipeArn: string;

  /**
   * @schema ImagebuilderPutContainerRecipePolicyRequest#policy
   */
  readonly policy: string;

}

/**
 * Converts an object of type 'ImagebuilderPutContainerRecipePolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderPutContainerRecipePolicyRequest(obj: ImagebuilderPutContainerRecipePolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'containerRecipeArn': obj.containerRecipeArn,
    'policy': obj.policy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderPutContainerRecipePolicyResponse
 */
export interface ImagebuilderPutContainerRecipePolicyResponse {
  /**
   * @schema ImagebuilderPutContainerRecipePolicyResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema ImagebuilderPutContainerRecipePolicyResponse#containerRecipeArn
   */
  readonly containerRecipeArn?: string;

}

/**
 * Converts an object of type 'ImagebuilderPutContainerRecipePolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderPutContainerRecipePolicyResponse(obj: ImagebuilderPutContainerRecipePolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'requestId': obj.requestId,
    'containerRecipeArn': obj.containerRecipeArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderPutImagePolicyRequest
 */
export interface ImagebuilderPutImagePolicyRequest {
  /**
   * @schema ImagebuilderPutImagePolicyRequest#imageArn
   */
  readonly imageArn: string;

  /**
   * @schema ImagebuilderPutImagePolicyRequest#policy
   */
  readonly policy: string;

}

/**
 * Converts an object of type 'ImagebuilderPutImagePolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderPutImagePolicyRequest(obj: ImagebuilderPutImagePolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'imageArn': obj.imageArn,
    'policy': obj.policy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderPutImagePolicyResponse
 */
export interface ImagebuilderPutImagePolicyResponse {
  /**
   * @schema ImagebuilderPutImagePolicyResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema ImagebuilderPutImagePolicyResponse#imageArn
   */
  readonly imageArn?: string;

}

/**
 * Converts an object of type 'ImagebuilderPutImagePolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderPutImagePolicyResponse(obj: ImagebuilderPutImagePolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'requestId': obj.requestId,
    'imageArn': obj.imageArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderPutImageRecipePolicyRequest
 */
export interface ImagebuilderPutImageRecipePolicyRequest {
  /**
   * @schema ImagebuilderPutImageRecipePolicyRequest#imageRecipeArn
   */
  readonly imageRecipeArn: string;

  /**
   * @schema ImagebuilderPutImageRecipePolicyRequest#policy
   */
  readonly policy: string;

}

/**
 * Converts an object of type 'ImagebuilderPutImageRecipePolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderPutImageRecipePolicyRequest(obj: ImagebuilderPutImageRecipePolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'imageRecipeArn': obj.imageRecipeArn,
    'policy': obj.policy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderPutImageRecipePolicyResponse
 */
export interface ImagebuilderPutImageRecipePolicyResponse {
  /**
   * @schema ImagebuilderPutImageRecipePolicyResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema ImagebuilderPutImageRecipePolicyResponse#imageRecipeArn
   */
  readonly imageRecipeArn?: string;

}

/**
 * Converts an object of type 'ImagebuilderPutImageRecipePolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderPutImageRecipePolicyResponse(obj: ImagebuilderPutImageRecipePolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'requestId': obj.requestId,
    'imageRecipeArn': obj.imageRecipeArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderStartImagePipelineExecutionRequest
 */
export interface ImagebuilderStartImagePipelineExecutionRequest {
  /**
   * @schema ImagebuilderStartImagePipelineExecutionRequest#imagePipelineArn
   */
  readonly imagePipelineArn: string;

  /**
   * @schema ImagebuilderStartImagePipelineExecutionRequest#clientToken
   */
  readonly clientToken: string;

}

/**
 * Converts an object of type 'ImagebuilderStartImagePipelineExecutionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderStartImagePipelineExecutionRequest(obj: ImagebuilderStartImagePipelineExecutionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'imagePipelineArn': obj.imagePipelineArn,
    'clientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderStartImagePipelineExecutionResponse
 */
export interface ImagebuilderStartImagePipelineExecutionResponse {
  /**
   * @schema ImagebuilderStartImagePipelineExecutionResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema ImagebuilderStartImagePipelineExecutionResponse#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema ImagebuilderStartImagePipelineExecutionResponse#imageBuildVersionArn
   */
  readonly imageBuildVersionArn?: string;

}

/**
 * Converts an object of type 'ImagebuilderStartImagePipelineExecutionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderStartImagePipelineExecutionResponse(obj: ImagebuilderStartImagePipelineExecutionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'requestId': obj.requestId,
    'clientToken': obj.clientToken,
    'imageBuildVersionArn': obj.imageBuildVersionArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderTagResourceRequest
 */
export interface ImagebuilderTagResourceRequest {
  /**
   * @schema ImagebuilderTagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema ImagebuilderTagResourceRequest#tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * Converts an object of type 'ImagebuilderTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderTagResourceRequest(obj: ImagebuilderTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderTagResourceResponse
 */
export interface ImagebuilderTagResourceResponse {
}

/**
 * Converts an object of type 'ImagebuilderTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderTagResourceResponse(obj: ImagebuilderTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderUntagResourceRequest
 */
export interface ImagebuilderUntagResourceRequest {
  /**
   * @schema ImagebuilderUntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema ImagebuilderUntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * Converts an object of type 'ImagebuilderUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderUntagResourceRequest(obj: ImagebuilderUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
    'tagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderUntagResourceResponse
 */
export interface ImagebuilderUntagResourceResponse {
}

/**
 * Converts an object of type 'ImagebuilderUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderUntagResourceResponse(obj: ImagebuilderUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderUpdateDistributionConfigurationRequest
 */
export interface ImagebuilderUpdateDistributionConfigurationRequest {
  /**
   * @schema ImagebuilderUpdateDistributionConfigurationRequest#distributionConfigurationArn
   */
  readonly distributionConfigurationArn: string;

  /**
   * @schema ImagebuilderUpdateDistributionConfigurationRequest#description
   */
  readonly description?: string;

  /**
   * @schema ImagebuilderUpdateDistributionConfigurationRequest#distributions
   */
  readonly distributions: ImagebuilderDistribution[];

  /**
   * @schema ImagebuilderUpdateDistributionConfigurationRequest#clientToken
   */
  readonly clientToken: string;

}

/**
 * Converts an object of type 'ImagebuilderUpdateDistributionConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderUpdateDistributionConfigurationRequest(obj: ImagebuilderUpdateDistributionConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'distributionConfigurationArn': obj.distributionConfigurationArn,
    'description': obj.description,
    'distributions': obj.distributions?.map(y => toJson_ImagebuilderDistribution(y)),
    'clientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderUpdateDistributionConfigurationResponse
 */
export interface ImagebuilderUpdateDistributionConfigurationResponse {
  /**
   * @schema ImagebuilderUpdateDistributionConfigurationResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema ImagebuilderUpdateDistributionConfigurationResponse#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema ImagebuilderUpdateDistributionConfigurationResponse#distributionConfigurationArn
   */
  readonly distributionConfigurationArn?: string;

}

/**
 * Converts an object of type 'ImagebuilderUpdateDistributionConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderUpdateDistributionConfigurationResponse(obj: ImagebuilderUpdateDistributionConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'requestId': obj.requestId,
    'clientToken': obj.clientToken,
    'distributionConfigurationArn': obj.distributionConfigurationArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderUpdateImagePipelineRequest
 */
export interface ImagebuilderUpdateImagePipelineRequest {
  /**
   * @schema ImagebuilderUpdateImagePipelineRequest#imagePipelineArn
   */
  readonly imagePipelineArn: string;

  /**
   * @schema ImagebuilderUpdateImagePipelineRequest#description
   */
  readonly description?: string;

  /**
   * @schema ImagebuilderUpdateImagePipelineRequest#imageRecipeArn
   */
  readonly imageRecipeArn?: string;

  /**
   * @schema ImagebuilderUpdateImagePipelineRequest#containerRecipeArn
   */
  readonly containerRecipeArn?: string;

  /**
   * @schema ImagebuilderUpdateImagePipelineRequest#infrastructureConfigurationArn
   */
  readonly infrastructureConfigurationArn: string;

  /**
   * @schema ImagebuilderUpdateImagePipelineRequest#distributionConfigurationArn
   */
  readonly distributionConfigurationArn?: string;

  /**
   * @schema ImagebuilderUpdateImagePipelineRequest#imageTestsConfiguration
   */
  readonly imageTestsConfiguration?: ImagebuilderImageTestsConfiguration;

  /**
   * @schema ImagebuilderUpdateImagePipelineRequest#enhancedImageMetadataEnabled
   */
  readonly enhancedImageMetadataEnabled?: boolean;

  /**
   * @schema ImagebuilderUpdateImagePipelineRequest#schedule
   */
  readonly schedule?: ImagebuilderSchedule;

  /**
   * @schema ImagebuilderUpdateImagePipelineRequest#status
   */
  readonly status?: string;

  /**
   * @schema ImagebuilderUpdateImagePipelineRequest#clientToken
   */
  readonly clientToken: string;

}

/**
 * Converts an object of type 'ImagebuilderUpdateImagePipelineRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderUpdateImagePipelineRequest(obj: ImagebuilderUpdateImagePipelineRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'imagePipelineArn': obj.imagePipelineArn,
    'description': obj.description,
    'imageRecipeArn': obj.imageRecipeArn,
    'containerRecipeArn': obj.containerRecipeArn,
    'infrastructureConfigurationArn': obj.infrastructureConfigurationArn,
    'distributionConfigurationArn': obj.distributionConfigurationArn,
    'imageTestsConfiguration': toJson_ImagebuilderImageTestsConfiguration(obj.imageTestsConfiguration),
    'enhancedImageMetadataEnabled': obj.enhancedImageMetadataEnabled,
    'schedule': toJson_ImagebuilderSchedule(obj.schedule),
    'status': obj.status,
    'clientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderUpdateImagePipelineResponse
 */
export interface ImagebuilderUpdateImagePipelineResponse {
  /**
   * @schema ImagebuilderUpdateImagePipelineResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema ImagebuilderUpdateImagePipelineResponse#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema ImagebuilderUpdateImagePipelineResponse#imagePipelineArn
   */
  readonly imagePipelineArn?: string;

}

/**
 * Converts an object of type 'ImagebuilderUpdateImagePipelineResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderUpdateImagePipelineResponse(obj: ImagebuilderUpdateImagePipelineResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'requestId': obj.requestId,
    'clientToken': obj.clientToken,
    'imagePipelineArn': obj.imagePipelineArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderUpdateInfrastructureConfigurationRequest
 */
export interface ImagebuilderUpdateInfrastructureConfigurationRequest {
  /**
   * @schema ImagebuilderUpdateInfrastructureConfigurationRequest#infrastructureConfigurationArn
   */
  readonly infrastructureConfigurationArn: string;

  /**
   * @schema ImagebuilderUpdateInfrastructureConfigurationRequest#description
   */
  readonly description?: string;

  /**
   * @schema ImagebuilderUpdateInfrastructureConfigurationRequest#instanceTypes
   */
  readonly instanceTypes?: string[];

  /**
   * @schema ImagebuilderUpdateInfrastructureConfigurationRequest#instanceProfileName
   */
  readonly instanceProfileName: string;

  /**
   * @schema ImagebuilderUpdateInfrastructureConfigurationRequest#securityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema ImagebuilderUpdateInfrastructureConfigurationRequest#subnetId
   */
  readonly subnetId?: string;

  /**
   * @schema ImagebuilderUpdateInfrastructureConfigurationRequest#logging
   */
  readonly logging?: ImagebuilderLogging;

  /**
   * @schema ImagebuilderUpdateInfrastructureConfigurationRequest#keyPair
   */
  readonly keyPair?: string;

  /**
   * @schema ImagebuilderUpdateInfrastructureConfigurationRequest#terminateInstanceOnFailure
   */
  readonly terminateInstanceOnFailure?: boolean;

  /**
   * @schema ImagebuilderUpdateInfrastructureConfigurationRequest#snsTopicArn
   */
  readonly snsTopicArn?: string;

  /**
   * @schema ImagebuilderUpdateInfrastructureConfigurationRequest#clientToken
   */
  readonly clientToken: string;

  /**
   * @schema ImagebuilderUpdateInfrastructureConfigurationRequest#resourceTags
   */
  readonly resourceTags?: { [key: string]: string };

}

/**
 * Converts an object of type 'ImagebuilderUpdateInfrastructureConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderUpdateInfrastructureConfigurationRequest(obj: ImagebuilderUpdateInfrastructureConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'infrastructureConfigurationArn': obj.infrastructureConfigurationArn,
    'description': obj.description,
    'instanceTypes': obj.instanceTypes?.map(y => y),
    'instanceProfileName': obj.instanceProfileName,
    'securityGroupIds': obj.securityGroupIds?.map(y => y),
    'subnetId': obj.subnetId,
    'logging': toJson_ImagebuilderLogging(obj.logging),
    'keyPair': obj.keyPair,
    'terminateInstanceOnFailure': obj.terminateInstanceOnFailure,
    'snsTopicArn': obj.snsTopicArn,
    'clientToken': obj.clientToken,
    'resourceTags': ((obj.resourceTags) === undefined) ? undefined : (Object.entries(obj.resourceTags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderUpdateInfrastructureConfigurationResponse
 */
export interface ImagebuilderUpdateInfrastructureConfigurationResponse {
  /**
   * @schema ImagebuilderUpdateInfrastructureConfigurationResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema ImagebuilderUpdateInfrastructureConfigurationResponse#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema ImagebuilderUpdateInfrastructureConfigurationResponse#infrastructureConfigurationArn
   */
  readonly infrastructureConfigurationArn?: string;

}

/**
 * Converts an object of type 'ImagebuilderUpdateInfrastructureConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderUpdateInfrastructureConfigurationResponse(obj: ImagebuilderUpdateInfrastructureConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'requestId': obj.requestId,
    'clientToken': obj.clientToken,
    'infrastructureConfigurationArn': obj.infrastructureConfigurationArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderComponentConfiguration
 */
export interface ImagebuilderComponentConfiguration {
  /**
   * @schema ImagebuilderComponentConfiguration#componentArn
   */
  readonly componentArn: string;

  /**
   * @schema ImagebuilderComponentConfiguration#parameters
   */
  readonly parameters?: ImagebuilderComponentParameter[];

}

/**
 * Converts an object of type 'ImagebuilderComponentConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderComponentConfiguration(obj: ImagebuilderComponentConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'componentArn': obj.componentArn,
    'parameters': obj.parameters?.map(y => toJson_ImagebuilderComponentParameter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderInstanceConfiguration
 */
export interface ImagebuilderInstanceConfiguration {
  /**
   * @schema ImagebuilderInstanceConfiguration#image
   */
  readonly image?: string;

  /**
   * @schema ImagebuilderInstanceConfiguration#blockDeviceMappings
   */
  readonly blockDeviceMappings?: ImagebuilderInstanceBlockDeviceMapping[];

}

/**
 * Converts an object of type 'ImagebuilderInstanceConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderInstanceConfiguration(obj: ImagebuilderInstanceConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'image': obj.image,
    'blockDeviceMappings': obj.blockDeviceMappings?.map(y => toJson_ImagebuilderInstanceBlockDeviceMapping(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderTargetContainerRepository
 */
export interface ImagebuilderTargetContainerRepository {
  /**
   * @schema ImagebuilderTargetContainerRepository#service
   */
  readonly service: string;

  /**
   * @schema ImagebuilderTargetContainerRepository#repositoryName
   */
  readonly repositoryName: string;

}

/**
 * Converts an object of type 'ImagebuilderTargetContainerRepository' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderTargetContainerRepository(obj: ImagebuilderTargetContainerRepository | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'service': obj.service,
    'repositoryName': obj.repositoryName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderDistribution
 */
export interface ImagebuilderDistribution {
  /**
   * @schema ImagebuilderDistribution#region
   */
  readonly region: string;

  /**
   * @schema ImagebuilderDistribution#amiDistributionConfiguration
   */
  readonly amiDistributionConfiguration?: ImagebuilderAmiDistributionConfiguration;

  /**
   * @schema ImagebuilderDistribution#containerDistributionConfiguration
   */
  readonly containerDistributionConfiguration?: ImagebuilderContainerDistributionConfiguration;

  /**
   * @schema ImagebuilderDistribution#licenseConfigurationArns
   */
  readonly licenseConfigurationArns?: string[];

  /**
   * @schema ImagebuilderDistribution#launchTemplateConfigurations
   */
  readonly launchTemplateConfigurations?: ImagebuilderLaunchTemplateConfiguration[];

}

/**
 * Converts an object of type 'ImagebuilderDistribution' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderDistribution(obj: ImagebuilderDistribution | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'region': obj.region,
    'amiDistributionConfiguration': toJson_ImagebuilderAmiDistributionConfiguration(obj.amiDistributionConfiguration),
    'containerDistributionConfiguration': toJson_ImagebuilderContainerDistributionConfiguration(obj.containerDistributionConfiguration),
    'licenseConfigurationArns': obj.licenseConfigurationArns?.map(y => y),
    'launchTemplateConfigurations': obj.launchTemplateConfigurations?.map(y => toJson_ImagebuilderLaunchTemplateConfiguration(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderImageTestsConfiguration
 */
export interface ImagebuilderImageTestsConfiguration {
  /**
   * @schema ImagebuilderImageTestsConfiguration#imageTestsEnabled
   */
  readonly imageTestsEnabled?: boolean;

  /**
   * @schema ImagebuilderImageTestsConfiguration#timeoutMinutes
   */
  readonly timeoutMinutes?: number;

}

/**
 * Converts an object of type 'ImagebuilderImageTestsConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderImageTestsConfiguration(obj: ImagebuilderImageTestsConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'imageTestsEnabled': obj.imageTestsEnabled,
    'timeoutMinutes': obj.timeoutMinutes,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderSchedule
 */
export interface ImagebuilderSchedule {
  /**
   * @schema ImagebuilderSchedule#scheduleExpression
   */
  readonly scheduleExpression?: string;

  /**
   * @schema ImagebuilderSchedule#timezone
   */
  readonly timezone?: string;

  /**
   * @schema ImagebuilderSchedule#pipelineExecutionStartCondition
   */
  readonly pipelineExecutionStartCondition?: string;

}

/**
 * Converts an object of type 'ImagebuilderSchedule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderSchedule(obj: ImagebuilderSchedule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'scheduleExpression': obj.scheduleExpression,
    'timezone': obj.timezone,
    'pipelineExecutionStartCondition': obj.pipelineExecutionStartCondition,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderInstanceBlockDeviceMapping
 */
export interface ImagebuilderInstanceBlockDeviceMapping {
  /**
   * @schema ImagebuilderInstanceBlockDeviceMapping#deviceName
   */
  readonly deviceName?: string;

  /**
   * @schema ImagebuilderInstanceBlockDeviceMapping#ebs
   */
  readonly ebs?: ImagebuilderEbsInstanceBlockDeviceSpecification;

  /**
   * @schema ImagebuilderInstanceBlockDeviceMapping#virtualName
   */
  readonly virtualName?: string;

  /**
   * @schema ImagebuilderInstanceBlockDeviceMapping#noDevice
   */
  readonly noDevice?: string;

}

/**
 * Converts an object of type 'ImagebuilderInstanceBlockDeviceMapping' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderInstanceBlockDeviceMapping(obj: ImagebuilderInstanceBlockDeviceMapping | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deviceName': obj.deviceName,
    'ebs': toJson_ImagebuilderEbsInstanceBlockDeviceSpecification(obj.ebs),
    'virtualName': obj.virtualName,
    'noDevice': obj.noDevice,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderAdditionalInstanceConfiguration
 */
export interface ImagebuilderAdditionalInstanceConfiguration {
  /**
   * @schema ImagebuilderAdditionalInstanceConfiguration#systemsManagerAgent
   */
  readonly systemsManagerAgent?: ImagebuilderSystemsManagerAgent;

  /**
   * @schema ImagebuilderAdditionalInstanceConfiguration#userDataOverride
   */
  readonly userDataOverride?: string;

}

/**
 * Converts an object of type 'ImagebuilderAdditionalInstanceConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderAdditionalInstanceConfiguration(obj: ImagebuilderAdditionalInstanceConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'systemsManagerAgent': toJson_ImagebuilderSystemsManagerAgent(obj.systemsManagerAgent),
    'userDataOverride': obj.userDataOverride,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderLogging
 */
export interface ImagebuilderLogging {
  /**
   * @schema ImagebuilderLogging#s3Logs
   */
  readonly s3Logs?: ImagebuilderS3Logs;

}

/**
 * Converts an object of type 'ImagebuilderLogging' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderLogging(obj: ImagebuilderLogging | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    's3Logs': toJson_ImagebuilderS3Logs(obj.s3Logs),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderComponent
 */
export interface ImagebuilderComponent {
  /**
   * @schema ImagebuilderComponent#arn
   */
  readonly arn?: string;

  /**
   * @schema ImagebuilderComponent#name
   */
  readonly name?: string;

  /**
   * @schema ImagebuilderComponent#version
   */
  readonly version?: string;

  /**
   * @schema ImagebuilderComponent#description
   */
  readonly description?: string;

  /**
   * @schema ImagebuilderComponent#changeDescription
   */
  readonly changeDescription?: string;

  /**
   * @schema ImagebuilderComponent#type
   */
  readonly type?: string;

  /**
   * @schema ImagebuilderComponent#platform
   */
  readonly platform?: string;

  /**
   * @schema ImagebuilderComponent#supportedOsVersions
   */
  readonly supportedOsVersions?: string[];

  /**
   * @schema ImagebuilderComponent#parameters
   */
  readonly parameters?: ImagebuilderComponentParameterDetail[];

  /**
   * @schema ImagebuilderComponent#owner
   */
  readonly owner?: string;

  /**
   * @schema ImagebuilderComponent#data
   */
  readonly data?: string;

  /**
   * @schema ImagebuilderComponent#kmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema ImagebuilderComponent#encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema ImagebuilderComponent#dateCreated
   */
  readonly dateCreated?: string;

  /**
   * @schema ImagebuilderComponent#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'ImagebuilderComponent' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderComponent(obj: ImagebuilderComponent | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'name': obj.name,
    'version': obj.version,
    'description': obj.description,
    'changeDescription': obj.changeDescription,
    'type': obj.type,
    'platform': obj.platform,
    'supportedOsVersions': obj.supportedOsVersions?.map(y => y),
    'parameters': obj.parameters?.map(y => toJson_ImagebuilderComponentParameterDetail(y)),
    'owner': obj.owner,
    'data': obj.data,
    'kmsKeyId': obj.kmsKeyId,
    'encrypted': obj.encrypted,
    'dateCreated': obj.dateCreated,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderContainerRecipe
 */
export interface ImagebuilderContainerRecipe {
  /**
   * @schema ImagebuilderContainerRecipe#arn
   */
  readonly arn?: string;

  /**
   * @schema ImagebuilderContainerRecipe#containerType
   */
  readonly containerType?: string;

  /**
   * @schema ImagebuilderContainerRecipe#name
   */
  readonly name?: string;

  /**
   * @schema ImagebuilderContainerRecipe#description
   */
  readonly description?: string;

  /**
   * @schema ImagebuilderContainerRecipe#platform
   */
  readonly platform?: string;

  /**
   * @schema ImagebuilderContainerRecipe#owner
   */
  readonly owner?: string;

  /**
   * @schema ImagebuilderContainerRecipe#version
   */
  readonly version?: string;

  /**
   * @schema ImagebuilderContainerRecipe#components
   */
  readonly components?: ImagebuilderComponentConfiguration[];

  /**
   * @schema ImagebuilderContainerRecipe#instanceConfiguration
   */
  readonly instanceConfiguration?: ImagebuilderInstanceConfiguration;

  /**
   * @schema ImagebuilderContainerRecipe#dockerfileTemplateData
   */
  readonly dockerfileTemplateData?: string;

  /**
   * @schema ImagebuilderContainerRecipe#kmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema ImagebuilderContainerRecipe#encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema ImagebuilderContainerRecipe#parentImage
   */
  readonly parentImage?: string;

  /**
   * @schema ImagebuilderContainerRecipe#dateCreated
   */
  readonly dateCreated?: string;

  /**
   * @schema ImagebuilderContainerRecipe#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema ImagebuilderContainerRecipe#workingDirectory
   */
  readonly workingDirectory?: string;

  /**
   * @schema ImagebuilderContainerRecipe#targetRepository
   */
  readonly targetRepository?: ImagebuilderTargetContainerRepository;

}

/**
 * Converts an object of type 'ImagebuilderContainerRecipe' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderContainerRecipe(obj: ImagebuilderContainerRecipe | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'containerType': obj.containerType,
    'name': obj.name,
    'description': obj.description,
    'platform': obj.platform,
    'owner': obj.owner,
    'version': obj.version,
    'components': obj.components?.map(y => toJson_ImagebuilderComponentConfiguration(y)),
    'instanceConfiguration': toJson_ImagebuilderInstanceConfiguration(obj.instanceConfiguration),
    'dockerfileTemplateData': obj.dockerfileTemplateData,
    'kmsKeyId': obj.kmsKeyId,
    'encrypted': obj.encrypted,
    'parentImage': obj.parentImage,
    'dateCreated': obj.dateCreated,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'workingDirectory': obj.workingDirectory,
    'targetRepository': toJson_ImagebuilderTargetContainerRepository(obj.targetRepository),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderDistributionConfiguration
 */
export interface ImagebuilderDistributionConfiguration {
  /**
   * @schema ImagebuilderDistributionConfiguration#arn
   */
  readonly arn?: string;

  /**
   * @schema ImagebuilderDistributionConfiguration#name
   */
  readonly name?: string;

  /**
   * @schema ImagebuilderDistributionConfiguration#description
   */
  readonly description?: string;

  /**
   * @schema ImagebuilderDistributionConfiguration#distributions
   */
  readonly distributions?: ImagebuilderDistribution[];

  /**
   * @schema ImagebuilderDistributionConfiguration#timeoutMinutes
   */
  readonly timeoutMinutes: number;

  /**
   * @schema ImagebuilderDistributionConfiguration#dateCreated
   */
  readonly dateCreated?: string;

  /**
   * @schema ImagebuilderDistributionConfiguration#dateUpdated
   */
  readonly dateUpdated?: string;

  /**
   * @schema ImagebuilderDistributionConfiguration#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'ImagebuilderDistributionConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderDistributionConfiguration(obj: ImagebuilderDistributionConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'name': obj.name,
    'description': obj.description,
    'distributions': obj.distributions?.map(y => toJson_ImagebuilderDistribution(y)),
    'timeoutMinutes': obj.timeoutMinutes,
    'dateCreated': obj.dateCreated,
    'dateUpdated': obj.dateUpdated,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderImage
 */
export interface ImagebuilderImage {
  /**
   * @schema ImagebuilderImage#arn
   */
  readonly arn?: string;

  /**
   * @schema ImagebuilderImage#type
   */
  readonly type?: string;

  /**
   * @schema ImagebuilderImage#name
   */
  readonly name?: string;

  /**
   * @schema ImagebuilderImage#version
   */
  readonly version?: string;

  /**
   * @schema ImagebuilderImage#platform
   */
  readonly platform?: string;

  /**
   * @schema ImagebuilderImage#enhancedImageMetadataEnabled
   */
  readonly enhancedImageMetadataEnabled?: boolean;

  /**
   * @schema ImagebuilderImage#osVersion
   */
  readonly osVersion?: string;

  /**
   * @schema ImagebuilderImage#state
   */
  readonly state?: ImagebuilderImageState;

  /**
   * @schema ImagebuilderImage#imageRecipe
   */
  readonly imageRecipe?: ImagebuilderImageRecipe;

  /**
   * @schema ImagebuilderImage#containerRecipe
   */
  readonly containerRecipe?: ImagebuilderContainerRecipe;

  /**
   * @schema ImagebuilderImage#sourcePipelineName
   */
  readonly sourcePipelineName?: string;

  /**
   * @schema ImagebuilderImage#sourcePipelineArn
   */
  readonly sourcePipelineArn?: string;

  /**
   * @schema ImagebuilderImage#infrastructureConfiguration
   */
  readonly infrastructureConfiguration?: ImagebuilderInfrastructureConfiguration;

  /**
   * @schema ImagebuilderImage#distributionConfiguration
   */
  readonly distributionConfiguration?: ImagebuilderDistributionConfiguration;

  /**
   * @schema ImagebuilderImage#imageTestsConfiguration
   */
  readonly imageTestsConfiguration?: ImagebuilderImageTestsConfiguration;

  /**
   * @schema ImagebuilderImage#dateCreated
   */
  readonly dateCreated?: string;

  /**
   * @schema ImagebuilderImage#outputResources
   */
  readonly outputResources?: ImagebuilderOutputResources;

  /**
   * @schema ImagebuilderImage#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'ImagebuilderImage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderImage(obj: ImagebuilderImage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'type': obj.type,
    'name': obj.name,
    'version': obj.version,
    'platform': obj.platform,
    'enhancedImageMetadataEnabled': obj.enhancedImageMetadataEnabled,
    'osVersion': obj.osVersion,
    'state': toJson_ImagebuilderImageState(obj.state),
    'imageRecipe': toJson_ImagebuilderImageRecipe(obj.imageRecipe),
    'containerRecipe': toJson_ImagebuilderContainerRecipe(obj.containerRecipe),
    'sourcePipelineName': obj.sourcePipelineName,
    'sourcePipelineArn': obj.sourcePipelineArn,
    'infrastructureConfiguration': toJson_ImagebuilderInfrastructureConfiguration(obj.infrastructureConfiguration),
    'distributionConfiguration': toJson_ImagebuilderDistributionConfiguration(obj.distributionConfiguration),
    'imageTestsConfiguration': toJson_ImagebuilderImageTestsConfiguration(obj.imageTestsConfiguration),
    'dateCreated': obj.dateCreated,
    'outputResources': toJson_ImagebuilderOutputResources(obj.outputResources),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderImagePipeline
 */
export interface ImagebuilderImagePipeline {
  /**
   * @schema ImagebuilderImagePipeline#arn
   */
  readonly arn?: string;

  /**
   * @schema ImagebuilderImagePipeline#name
   */
  readonly name?: string;

  /**
   * @schema ImagebuilderImagePipeline#description
   */
  readonly description?: string;

  /**
   * @schema ImagebuilderImagePipeline#platform
   */
  readonly platform?: string;

  /**
   * @schema ImagebuilderImagePipeline#enhancedImageMetadataEnabled
   */
  readonly enhancedImageMetadataEnabled?: boolean;

  /**
   * @schema ImagebuilderImagePipeline#imageRecipeArn
   */
  readonly imageRecipeArn?: string;

  /**
   * @schema ImagebuilderImagePipeline#containerRecipeArn
   */
  readonly containerRecipeArn?: string;

  /**
   * @schema ImagebuilderImagePipeline#infrastructureConfigurationArn
   */
  readonly infrastructureConfigurationArn?: string;

  /**
   * @schema ImagebuilderImagePipeline#distributionConfigurationArn
   */
  readonly distributionConfigurationArn?: string;

  /**
   * @schema ImagebuilderImagePipeline#imageTestsConfiguration
   */
  readonly imageTestsConfiguration?: ImagebuilderImageTestsConfiguration;

  /**
   * @schema ImagebuilderImagePipeline#schedule
   */
  readonly schedule?: ImagebuilderSchedule;

  /**
   * @schema ImagebuilderImagePipeline#status
   */
  readonly status?: string;

  /**
   * @schema ImagebuilderImagePipeline#dateCreated
   */
  readonly dateCreated?: string;

  /**
   * @schema ImagebuilderImagePipeline#dateUpdated
   */
  readonly dateUpdated?: string;

  /**
   * @schema ImagebuilderImagePipeline#dateLastRun
   */
  readonly dateLastRun?: string;

  /**
   * @schema ImagebuilderImagePipeline#dateNextRun
   */
  readonly dateNextRun?: string;

  /**
   * @schema ImagebuilderImagePipeline#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'ImagebuilderImagePipeline' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderImagePipeline(obj: ImagebuilderImagePipeline | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'name': obj.name,
    'description': obj.description,
    'platform': obj.platform,
    'enhancedImageMetadataEnabled': obj.enhancedImageMetadataEnabled,
    'imageRecipeArn': obj.imageRecipeArn,
    'containerRecipeArn': obj.containerRecipeArn,
    'infrastructureConfigurationArn': obj.infrastructureConfigurationArn,
    'distributionConfigurationArn': obj.distributionConfigurationArn,
    'imageTestsConfiguration': toJson_ImagebuilderImageTestsConfiguration(obj.imageTestsConfiguration),
    'schedule': toJson_ImagebuilderSchedule(obj.schedule),
    'status': obj.status,
    'dateCreated': obj.dateCreated,
    'dateUpdated': obj.dateUpdated,
    'dateLastRun': obj.dateLastRun,
    'dateNextRun': obj.dateNextRun,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderImageRecipe
 */
export interface ImagebuilderImageRecipe {
  /**
   * @schema ImagebuilderImageRecipe#arn
   */
  readonly arn?: string;

  /**
   * @schema ImagebuilderImageRecipe#type
   */
  readonly type?: string;

  /**
   * @schema ImagebuilderImageRecipe#name
   */
  readonly name?: string;

  /**
   * @schema ImagebuilderImageRecipe#description
   */
  readonly description?: string;

  /**
   * @schema ImagebuilderImageRecipe#platform
   */
  readonly platform?: string;

  /**
   * @schema ImagebuilderImageRecipe#owner
   */
  readonly owner?: string;

  /**
   * @schema ImagebuilderImageRecipe#version
   */
  readonly version?: string;

  /**
   * @schema ImagebuilderImageRecipe#components
   */
  readonly components?: ImagebuilderComponentConfiguration[];

  /**
   * @schema ImagebuilderImageRecipe#parentImage
   */
  readonly parentImage?: string;

  /**
   * @schema ImagebuilderImageRecipe#blockDeviceMappings
   */
  readonly blockDeviceMappings?: ImagebuilderInstanceBlockDeviceMapping[];

  /**
   * @schema ImagebuilderImageRecipe#dateCreated
   */
  readonly dateCreated?: string;

  /**
   * @schema ImagebuilderImageRecipe#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema ImagebuilderImageRecipe#workingDirectory
   */
  readonly workingDirectory?: string;

  /**
   * @schema ImagebuilderImageRecipe#additionalInstanceConfiguration
   */
  readonly additionalInstanceConfiguration?: ImagebuilderAdditionalInstanceConfiguration;

}

/**
 * Converts an object of type 'ImagebuilderImageRecipe' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderImageRecipe(obj: ImagebuilderImageRecipe | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'type': obj.type,
    'name': obj.name,
    'description': obj.description,
    'platform': obj.platform,
    'owner': obj.owner,
    'version': obj.version,
    'components': obj.components?.map(y => toJson_ImagebuilderComponentConfiguration(y)),
    'parentImage': obj.parentImage,
    'blockDeviceMappings': obj.blockDeviceMappings?.map(y => toJson_ImagebuilderInstanceBlockDeviceMapping(y)),
    'dateCreated': obj.dateCreated,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'workingDirectory': obj.workingDirectory,
    'additionalInstanceConfiguration': toJson_ImagebuilderAdditionalInstanceConfiguration(obj.additionalInstanceConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderInfrastructureConfiguration
 */
export interface ImagebuilderInfrastructureConfiguration {
  /**
   * @schema ImagebuilderInfrastructureConfiguration#arn
   */
  readonly arn?: string;

  /**
   * @schema ImagebuilderInfrastructureConfiguration#name
   */
  readonly name?: string;

  /**
   * @schema ImagebuilderInfrastructureConfiguration#description
   */
  readonly description?: string;

  /**
   * @schema ImagebuilderInfrastructureConfiguration#instanceTypes
   */
  readonly instanceTypes?: string[];

  /**
   * @schema ImagebuilderInfrastructureConfiguration#instanceProfileName
   */
  readonly instanceProfileName?: string;

  /**
   * @schema ImagebuilderInfrastructureConfiguration#securityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema ImagebuilderInfrastructureConfiguration#subnetId
   */
  readonly subnetId?: string;

  /**
   * @schema ImagebuilderInfrastructureConfiguration#logging
   */
  readonly logging?: ImagebuilderLogging;

  /**
   * @schema ImagebuilderInfrastructureConfiguration#keyPair
   */
  readonly keyPair?: string;

  /**
   * @schema ImagebuilderInfrastructureConfiguration#terminateInstanceOnFailure
   */
  readonly terminateInstanceOnFailure?: boolean;

  /**
   * @schema ImagebuilderInfrastructureConfiguration#snsTopicArn
   */
  readonly snsTopicArn?: string;

  /**
   * @schema ImagebuilderInfrastructureConfiguration#dateCreated
   */
  readonly dateCreated?: string;

  /**
   * @schema ImagebuilderInfrastructureConfiguration#dateUpdated
   */
  readonly dateUpdated?: string;

  /**
   * @schema ImagebuilderInfrastructureConfiguration#resourceTags
   */
  readonly resourceTags?: { [key: string]: string };

  /**
   * @schema ImagebuilderInfrastructureConfiguration#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'ImagebuilderInfrastructureConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderInfrastructureConfiguration(obj: ImagebuilderInfrastructureConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'name': obj.name,
    'description': obj.description,
    'instanceTypes': obj.instanceTypes?.map(y => y),
    'instanceProfileName': obj.instanceProfileName,
    'securityGroupIds': obj.securityGroupIds?.map(y => y),
    'subnetId': obj.subnetId,
    'logging': toJson_ImagebuilderLogging(obj.logging),
    'keyPair': obj.keyPair,
    'terminateInstanceOnFailure': obj.terminateInstanceOnFailure,
    'snsTopicArn': obj.snsTopicArn,
    'dateCreated': obj.dateCreated,
    'dateUpdated': obj.dateUpdated,
    'resourceTags': ((obj.resourceTags) === undefined) ? undefined : (Object.entries(obj.resourceTags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderComponentSummary
 */
export interface ImagebuilderComponentSummary {
  /**
   * @schema ImagebuilderComponentSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema ImagebuilderComponentSummary#name
   */
  readonly name?: string;

  /**
   * @schema ImagebuilderComponentSummary#version
   */
  readonly version?: string;

  /**
   * @schema ImagebuilderComponentSummary#platform
   */
  readonly platform?: string;

  /**
   * @schema ImagebuilderComponentSummary#supportedOsVersions
   */
  readonly supportedOsVersions?: string[];

  /**
   * @schema ImagebuilderComponentSummary#type
   */
  readonly type?: string;

  /**
   * @schema ImagebuilderComponentSummary#owner
   */
  readonly owner?: string;

  /**
   * @schema ImagebuilderComponentSummary#description
   */
  readonly description?: string;

  /**
   * @schema ImagebuilderComponentSummary#changeDescription
   */
  readonly changeDescription?: string;

  /**
   * @schema ImagebuilderComponentSummary#dateCreated
   */
  readonly dateCreated?: string;

  /**
   * @schema ImagebuilderComponentSummary#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'ImagebuilderComponentSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderComponentSummary(obj: ImagebuilderComponentSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'name': obj.name,
    'version': obj.version,
    'platform': obj.platform,
    'supportedOsVersions': obj.supportedOsVersions?.map(y => y),
    'type': obj.type,
    'owner': obj.owner,
    'description': obj.description,
    'changeDescription': obj.changeDescription,
    'dateCreated': obj.dateCreated,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderFilter
 */
export interface ImagebuilderFilter {
  /**
   * @schema ImagebuilderFilter#name
   */
  readonly name?: string;

  /**
   * @schema ImagebuilderFilter#values
   */
  readonly values?: string[];

}

/**
 * Converts an object of type 'ImagebuilderFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderFilter(obj: ImagebuilderFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'values': obj.values?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderComponentVersion
 */
export interface ImagebuilderComponentVersion {
  /**
   * @schema ImagebuilderComponentVersion#arn
   */
  readonly arn?: string;

  /**
   * @schema ImagebuilderComponentVersion#name
   */
  readonly name?: string;

  /**
   * @schema ImagebuilderComponentVersion#version
   */
  readonly version?: string;

  /**
   * @schema ImagebuilderComponentVersion#description
   */
  readonly description?: string;

  /**
   * @schema ImagebuilderComponentVersion#platform
   */
  readonly platform?: string;

  /**
   * @schema ImagebuilderComponentVersion#supportedOsVersions
   */
  readonly supportedOsVersions?: string[];

  /**
   * @schema ImagebuilderComponentVersion#type
   */
  readonly type?: string;

  /**
   * @schema ImagebuilderComponentVersion#owner
   */
  readonly owner?: string;

  /**
   * @schema ImagebuilderComponentVersion#dateCreated
   */
  readonly dateCreated?: string;

}

/**
 * Converts an object of type 'ImagebuilderComponentVersion' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderComponentVersion(obj: ImagebuilderComponentVersion | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'name': obj.name,
    'version': obj.version,
    'description': obj.description,
    'platform': obj.platform,
    'supportedOsVersions': obj.supportedOsVersions?.map(y => y),
    'type': obj.type,
    'owner': obj.owner,
    'dateCreated': obj.dateCreated,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderContainerRecipeSummary
 */
export interface ImagebuilderContainerRecipeSummary {
  /**
   * @schema ImagebuilderContainerRecipeSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema ImagebuilderContainerRecipeSummary#containerType
   */
  readonly containerType?: string;

  /**
   * @schema ImagebuilderContainerRecipeSummary#name
   */
  readonly name?: string;

  /**
   * @schema ImagebuilderContainerRecipeSummary#platform
   */
  readonly platform?: string;

  /**
   * @schema ImagebuilderContainerRecipeSummary#owner
   */
  readonly owner?: string;

  /**
   * @schema ImagebuilderContainerRecipeSummary#parentImage
   */
  readonly parentImage?: string;

  /**
   * @schema ImagebuilderContainerRecipeSummary#dateCreated
   */
  readonly dateCreated?: string;

  /**
   * @schema ImagebuilderContainerRecipeSummary#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'ImagebuilderContainerRecipeSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderContainerRecipeSummary(obj: ImagebuilderContainerRecipeSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'containerType': obj.containerType,
    'name': obj.name,
    'platform': obj.platform,
    'owner': obj.owner,
    'parentImage': obj.parentImage,
    'dateCreated': obj.dateCreated,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderDistributionConfigurationSummary
 */
export interface ImagebuilderDistributionConfigurationSummary {
  /**
   * @schema ImagebuilderDistributionConfigurationSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema ImagebuilderDistributionConfigurationSummary#name
   */
  readonly name?: string;

  /**
   * @schema ImagebuilderDistributionConfigurationSummary#description
   */
  readonly description?: string;

  /**
   * @schema ImagebuilderDistributionConfigurationSummary#dateCreated
   */
  readonly dateCreated?: string;

  /**
   * @schema ImagebuilderDistributionConfigurationSummary#dateUpdated
   */
  readonly dateUpdated?: string;

  /**
   * @schema ImagebuilderDistributionConfigurationSummary#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema ImagebuilderDistributionConfigurationSummary#regions
   */
  readonly regions?: string[];

}

/**
 * Converts an object of type 'ImagebuilderDistributionConfigurationSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderDistributionConfigurationSummary(obj: ImagebuilderDistributionConfigurationSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'name': obj.name,
    'description': obj.description,
    'dateCreated': obj.dateCreated,
    'dateUpdated': obj.dateUpdated,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'regions': obj.regions?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderImageSummary
 */
export interface ImagebuilderImageSummary {
  /**
   * @schema ImagebuilderImageSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema ImagebuilderImageSummary#name
   */
  readonly name?: string;

  /**
   * @schema ImagebuilderImageSummary#type
   */
  readonly type?: string;

  /**
   * @schema ImagebuilderImageSummary#version
   */
  readonly version?: string;

  /**
   * @schema ImagebuilderImageSummary#platform
   */
  readonly platform?: string;

  /**
   * @schema ImagebuilderImageSummary#osVersion
   */
  readonly osVersion?: string;

  /**
   * @schema ImagebuilderImageSummary#state
   */
  readonly state?: ImagebuilderImageState;

  /**
   * @schema ImagebuilderImageSummary#owner
   */
  readonly owner?: string;

  /**
   * @schema ImagebuilderImageSummary#dateCreated
   */
  readonly dateCreated?: string;

  /**
   * @schema ImagebuilderImageSummary#outputResources
   */
  readonly outputResources?: ImagebuilderOutputResources;

  /**
   * @schema ImagebuilderImageSummary#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'ImagebuilderImageSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderImageSummary(obj: ImagebuilderImageSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'name': obj.name,
    'type': obj.type,
    'version': obj.version,
    'platform': obj.platform,
    'osVersion': obj.osVersion,
    'state': toJson_ImagebuilderImageState(obj.state),
    'owner': obj.owner,
    'dateCreated': obj.dateCreated,
    'outputResources': toJson_ImagebuilderOutputResources(obj.outputResources),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderImagePackage
 */
export interface ImagebuilderImagePackage {
  /**
   * @schema ImagebuilderImagePackage#packageName
   */
  readonly packageName?: string;

  /**
   * @schema ImagebuilderImagePackage#packageVersion
   */
  readonly packageVersion?: string;

}

/**
 * Converts an object of type 'ImagebuilderImagePackage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderImagePackage(obj: ImagebuilderImagePackage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'packageName': obj.packageName,
    'packageVersion': obj.packageVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderImageRecipeSummary
 */
export interface ImagebuilderImageRecipeSummary {
  /**
   * @schema ImagebuilderImageRecipeSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema ImagebuilderImageRecipeSummary#name
   */
  readonly name?: string;

  /**
   * @schema ImagebuilderImageRecipeSummary#platform
   */
  readonly platform?: string;

  /**
   * @schema ImagebuilderImageRecipeSummary#owner
   */
  readonly owner?: string;

  /**
   * @schema ImagebuilderImageRecipeSummary#parentImage
   */
  readonly parentImage?: string;

  /**
   * @schema ImagebuilderImageRecipeSummary#dateCreated
   */
  readonly dateCreated?: string;

  /**
   * @schema ImagebuilderImageRecipeSummary#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'ImagebuilderImageRecipeSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderImageRecipeSummary(obj: ImagebuilderImageRecipeSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'name': obj.name,
    'platform': obj.platform,
    'owner': obj.owner,
    'parentImage': obj.parentImage,
    'dateCreated': obj.dateCreated,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderImageVersion
 */
export interface ImagebuilderImageVersion {
  /**
   * @schema ImagebuilderImageVersion#arn
   */
  readonly arn?: string;

  /**
   * @schema ImagebuilderImageVersion#name
   */
  readonly name?: string;

  /**
   * @schema ImagebuilderImageVersion#type
   */
  readonly type?: string;

  /**
   * @schema ImagebuilderImageVersion#version
   */
  readonly version?: string;

  /**
   * @schema ImagebuilderImageVersion#platform
   */
  readonly platform?: string;

  /**
   * @schema ImagebuilderImageVersion#osVersion
   */
  readonly osVersion?: string;

  /**
   * @schema ImagebuilderImageVersion#owner
   */
  readonly owner?: string;

  /**
   * @schema ImagebuilderImageVersion#dateCreated
   */
  readonly dateCreated?: string;

}

/**
 * Converts an object of type 'ImagebuilderImageVersion' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderImageVersion(obj: ImagebuilderImageVersion | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'name': obj.name,
    'type': obj.type,
    'version': obj.version,
    'platform': obj.platform,
    'osVersion': obj.osVersion,
    'owner': obj.owner,
    'dateCreated': obj.dateCreated,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderInfrastructureConfigurationSummary
 */
export interface ImagebuilderInfrastructureConfigurationSummary {
  /**
   * @schema ImagebuilderInfrastructureConfigurationSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema ImagebuilderInfrastructureConfigurationSummary#name
   */
  readonly name?: string;

  /**
   * @schema ImagebuilderInfrastructureConfigurationSummary#description
   */
  readonly description?: string;

  /**
   * @schema ImagebuilderInfrastructureConfigurationSummary#dateCreated
   */
  readonly dateCreated?: string;

  /**
   * @schema ImagebuilderInfrastructureConfigurationSummary#dateUpdated
   */
  readonly dateUpdated?: string;

  /**
   * @schema ImagebuilderInfrastructureConfigurationSummary#resourceTags
   */
  readonly resourceTags?: { [key: string]: string };

  /**
   * @schema ImagebuilderInfrastructureConfigurationSummary#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema ImagebuilderInfrastructureConfigurationSummary#instanceTypes
   */
  readonly instanceTypes?: string[];

  /**
   * @schema ImagebuilderInfrastructureConfigurationSummary#instanceProfileName
   */
  readonly instanceProfileName?: string;

}

/**
 * Converts an object of type 'ImagebuilderInfrastructureConfigurationSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderInfrastructureConfigurationSummary(obj: ImagebuilderInfrastructureConfigurationSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'name': obj.name,
    'description': obj.description,
    'dateCreated': obj.dateCreated,
    'dateUpdated': obj.dateUpdated,
    'resourceTags': ((obj.resourceTags) === undefined) ? undefined : (Object.entries(obj.resourceTags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'instanceTypes': obj.instanceTypes?.map(y => y),
    'instanceProfileName': obj.instanceProfileName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderComponentParameter
 */
export interface ImagebuilderComponentParameter {
  /**
   * @schema ImagebuilderComponentParameter#name
   */
  readonly name: string;

  /**
   * @schema ImagebuilderComponentParameter#value
   */
  readonly value: string[];

}

/**
 * Converts an object of type 'ImagebuilderComponentParameter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderComponentParameter(obj: ImagebuilderComponentParameter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'value': obj.value?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderAmiDistributionConfiguration
 */
export interface ImagebuilderAmiDistributionConfiguration {
  /**
   * @schema ImagebuilderAmiDistributionConfiguration#name
   */
  readonly name?: string;

  /**
   * @schema ImagebuilderAmiDistributionConfiguration#description
   */
  readonly description?: string;

  /**
   * @schema ImagebuilderAmiDistributionConfiguration#targetAccountIds
   */
  readonly targetAccountIds?: string[];

  /**
   * @schema ImagebuilderAmiDistributionConfiguration#amiTags
   */
  readonly amiTags?: { [key: string]: string };

  /**
   * @schema ImagebuilderAmiDistributionConfiguration#kmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema ImagebuilderAmiDistributionConfiguration#launchPermission
   */
  readonly launchPermission?: ImagebuilderLaunchPermissionConfiguration;

}

/**
 * Converts an object of type 'ImagebuilderAmiDistributionConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderAmiDistributionConfiguration(obj: ImagebuilderAmiDistributionConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'description': obj.description,
    'targetAccountIds': obj.targetAccountIds?.map(y => y),
    'amiTags': ((obj.amiTags) === undefined) ? undefined : (Object.entries(obj.amiTags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'kmsKeyId': obj.kmsKeyId,
    'launchPermission': toJson_ImagebuilderLaunchPermissionConfiguration(obj.launchPermission),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderContainerDistributionConfiguration
 */
export interface ImagebuilderContainerDistributionConfiguration {
  /**
   * @schema ImagebuilderContainerDistributionConfiguration#description
   */
  readonly description?: string;

  /**
   * @schema ImagebuilderContainerDistributionConfiguration#containerTags
   */
  readonly containerTags?: string[];

  /**
   * @schema ImagebuilderContainerDistributionConfiguration#targetRepository
   */
  readonly targetRepository: ImagebuilderTargetContainerRepository;

}

/**
 * Converts an object of type 'ImagebuilderContainerDistributionConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderContainerDistributionConfiguration(obj: ImagebuilderContainerDistributionConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'description': obj.description,
    'containerTags': obj.containerTags?.map(y => y),
    'targetRepository': toJson_ImagebuilderTargetContainerRepository(obj.targetRepository),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderLaunchTemplateConfiguration
 */
export interface ImagebuilderLaunchTemplateConfiguration {
  /**
   * @schema ImagebuilderLaunchTemplateConfiguration#launchTemplateId
   */
  readonly launchTemplateId: string;

  /**
   * @schema ImagebuilderLaunchTemplateConfiguration#accountId
   */
  readonly accountId?: string;

  /**
   * @schema ImagebuilderLaunchTemplateConfiguration#setDefaultVersion
   */
  readonly setDefaultVersion?: boolean;

}

/**
 * Converts an object of type 'ImagebuilderLaunchTemplateConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderLaunchTemplateConfiguration(obj: ImagebuilderLaunchTemplateConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'launchTemplateId': obj.launchTemplateId,
    'accountId': obj.accountId,
    'setDefaultVersion': obj.setDefaultVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderEbsInstanceBlockDeviceSpecification
 */
export interface ImagebuilderEbsInstanceBlockDeviceSpecification {
  /**
   * @schema ImagebuilderEbsInstanceBlockDeviceSpecification#encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema ImagebuilderEbsInstanceBlockDeviceSpecification#deleteOnTermination
   */
  readonly deleteOnTermination?: boolean;

  /**
   * @schema ImagebuilderEbsInstanceBlockDeviceSpecification#iops
   */
  readonly iops?: number;

  /**
   * @schema ImagebuilderEbsInstanceBlockDeviceSpecification#kmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema ImagebuilderEbsInstanceBlockDeviceSpecification#snapshotId
   */
  readonly snapshotId?: string;

  /**
   * @schema ImagebuilderEbsInstanceBlockDeviceSpecification#volumeSize
   */
  readonly volumeSize?: number;

  /**
   * @schema ImagebuilderEbsInstanceBlockDeviceSpecification#volumeType
   */
  readonly volumeType?: string;

}

/**
 * Converts an object of type 'ImagebuilderEbsInstanceBlockDeviceSpecification' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderEbsInstanceBlockDeviceSpecification(obj: ImagebuilderEbsInstanceBlockDeviceSpecification | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'encrypted': obj.encrypted,
    'deleteOnTermination': obj.deleteOnTermination,
    'iops': obj.iops,
    'kmsKeyId': obj.kmsKeyId,
    'snapshotId': obj.snapshotId,
    'volumeSize': obj.volumeSize,
    'volumeType': obj.volumeType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderSystemsManagerAgent
 */
export interface ImagebuilderSystemsManagerAgent {
  /**
   * @schema ImagebuilderSystemsManagerAgent#uninstallAfterBuild
   */
  readonly uninstallAfterBuild?: boolean;

}

/**
 * Converts an object of type 'ImagebuilderSystemsManagerAgent' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderSystemsManagerAgent(obj: ImagebuilderSystemsManagerAgent | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'uninstallAfterBuild': obj.uninstallAfterBuild,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderS3Logs
 */
export interface ImagebuilderS3Logs {
  /**
   * @schema ImagebuilderS3Logs#s3BucketName
   */
  readonly s3BucketName?: string;

  /**
   * @schema ImagebuilderS3Logs#s3KeyPrefix
   */
  readonly s3KeyPrefix?: string;

}

/**
 * Converts an object of type 'ImagebuilderS3Logs' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderS3Logs(obj: ImagebuilderS3Logs | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    's3BucketName': obj.s3BucketName,
    's3KeyPrefix': obj.s3KeyPrefix,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderComponentParameterDetail
 */
export interface ImagebuilderComponentParameterDetail {
  /**
   * @schema ImagebuilderComponentParameterDetail#name
   */
  readonly name: string;

  /**
   * @schema ImagebuilderComponentParameterDetail#type
   */
  readonly type: string;

  /**
   * @schema ImagebuilderComponentParameterDetail#defaultValue
   */
  readonly defaultValue?: string[];

  /**
   * @schema ImagebuilderComponentParameterDetail#description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'ImagebuilderComponentParameterDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderComponentParameterDetail(obj: ImagebuilderComponentParameterDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'type': obj.type,
    'defaultValue': obj.defaultValue?.map(y => y),
    'description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderImageState
 */
export interface ImagebuilderImageState {
  /**
   * @schema ImagebuilderImageState#status
   */
  readonly status?: string;

  /**
   * @schema ImagebuilderImageState#reason
   */
  readonly reason?: string;

}

/**
 * Converts an object of type 'ImagebuilderImageState' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderImageState(obj: ImagebuilderImageState | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'status': obj.status,
    'reason': obj.reason,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderOutputResources
 */
export interface ImagebuilderOutputResources {
  /**
   * @schema ImagebuilderOutputResources#amis
   */
  readonly amis?: ImagebuilderAmi[];

  /**
   * @schema ImagebuilderOutputResources#containers
   */
  readonly containers?: ImagebuilderContainer[];

}

/**
 * Converts an object of type 'ImagebuilderOutputResources' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderOutputResources(obj: ImagebuilderOutputResources | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'amis': obj.amis?.map(y => toJson_ImagebuilderAmi(y)),
    'containers': obj.containers?.map(y => toJson_ImagebuilderContainer(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderLaunchPermissionConfiguration
 */
export interface ImagebuilderLaunchPermissionConfiguration {
  /**
   * @schema ImagebuilderLaunchPermissionConfiguration#userIds
   */
  readonly userIds?: string[];

  /**
   * @schema ImagebuilderLaunchPermissionConfiguration#userGroups
   */
  readonly userGroups?: string[];

}

/**
 * Converts an object of type 'ImagebuilderLaunchPermissionConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderLaunchPermissionConfiguration(obj: ImagebuilderLaunchPermissionConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'userIds': obj.userIds?.map(y => y),
    'userGroups': obj.userGroups?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderAmi
 */
export interface ImagebuilderAmi {
  /**
   * @schema ImagebuilderAmi#region
   */
  readonly region?: string;

  /**
   * @schema ImagebuilderAmi#image
   */
  readonly image?: string;

  /**
   * @schema ImagebuilderAmi#name
   */
  readonly name?: string;

  /**
   * @schema ImagebuilderAmi#description
   */
  readonly description?: string;

  /**
   * @schema ImagebuilderAmi#state
   */
  readonly state?: ImagebuilderImageState;

  /**
   * @schema ImagebuilderAmi#accountId
   */
  readonly accountId?: string;

}

/**
 * Converts an object of type 'ImagebuilderAmi' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderAmi(obj: ImagebuilderAmi | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'region': obj.region,
    'image': obj.image,
    'name': obj.name,
    'description': obj.description,
    'state': toJson_ImagebuilderImageState(obj.state),
    'accountId': obj.accountId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImagebuilderContainer
 */
export interface ImagebuilderContainer {
  /**
   * @schema ImagebuilderContainer#region
   */
  readonly region?: string;

  /**
   * @schema ImagebuilderContainer#imageUris
   */
  readonly imageUris?: string[];

}

/**
 * Converts an object of type 'ImagebuilderContainer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImagebuilderContainer(obj: ImagebuilderContainer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'region': obj.region,
    'imageUris': obj.imageUris?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
