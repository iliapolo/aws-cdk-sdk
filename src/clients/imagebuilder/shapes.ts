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
 * @schema ImagebuilderCreateImageRequest
 */
export interface ImagebuilderCreateImageRequest {
  /**
   * @schema ImagebuilderCreateImageRequest#imageRecipeArn
   */
  readonly imageRecipeArn: string;

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
  readonly imageRecipeArn: string;

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
   * @schema ImagebuilderCreateImageRecipeRequest#clientToken
   */
  readonly clientToken: string;

}

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
 * @schema ImagebuilderDeleteComponentRequest
 */
export interface ImagebuilderDeleteComponentRequest {
  /**
   * @schema ImagebuilderDeleteComponentRequest#componentBuildVersionArn
   */
  readonly componentBuildVersionArn: string;

}

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
 * @schema ImagebuilderDeleteDistributionConfigurationRequest
 */
export interface ImagebuilderDeleteDistributionConfigurationRequest {
  /**
   * @schema ImagebuilderDeleteDistributionConfigurationRequest#distributionConfigurationArn
   */
  readonly distributionConfigurationArn: string;

}

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
 * @schema ImagebuilderDeleteImageRequest
 */
export interface ImagebuilderDeleteImageRequest {
  /**
   * @schema ImagebuilderDeleteImageRequest#imageBuildVersionArn
   */
  readonly imageBuildVersionArn: string;

}

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
 * @schema ImagebuilderDeleteImagePipelineRequest
 */
export interface ImagebuilderDeleteImagePipelineRequest {
  /**
   * @schema ImagebuilderDeleteImagePipelineRequest#imagePipelineArn
   */
  readonly imagePipelineArn: string;

}

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
 * @schema ImagebuilderDeleteImageRecipeRequest
 */
export interface ImagebuilderDeleteImageRecipeRequest {
  /**
   * @schema ImagebuilderDeleteImageRecipeRequest#imageRecipeArn
   */
  readonly imageRecipeArn: string;

}

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
 * @schema ImagebuilderDeleteInfrastructureConfigurationRequest
 */
export interface ImagebuilderDeleteInfrastructureConfigurationRequest {
  /**
   * @schema ImagebuilderDeleteInfrastructureConfigurationRequest#infrastructureConfigurationArn
   */
  readonly infrastructureConfigurationArn: string;

}

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
 * @schema ImagebuilderGetComponentRequest
 */
export interface ImagebuilderGetComponentRequest {
  /**
   * @schema ImagebuilderGetComponentRequest#componentBuildVersionArn
   */
  readonly componentBuildVersionArn: string;

}

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
 * @schema ImagebuilderGetComponentPolicyRequest
 */
export interface ImagebuilderGetComponentPolicyRequest {
  /**
   * @schema ImagebuilderGetComponentPolicyRequest#componentArn
   */
  readonly componentArn: string;

}

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
 * @schema ImagebuilderGetDistributionConfigurationRequest
 */
export interface ImagebuilderGetDistributionConfigurationRequest {
  /**
   * @schema ImagebuilderGetDistributionConfigurationRequest#distributionConfigurationArn
   */
  readonly distributionConfigurationArn: string;

}

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
 * @schema ImagebuilderGetImageRequest
 */
export interface ImagebuilderGetImageRequest {
  /**
   * @schema ImagebuilderGetImageRequest#imageBuildVersionArn
   */
  readonly imageBuildVersionArn: string;

}

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
 * @schema ImagebuilderGetImagePipelineRequest
 */
export interface ImagebuilderGetImagePipelineRequest {
  /**
   * @schema ImagebuilderGetImagePipelineRequest#imagePipelineArn
   */
  readonly imagePipelineArn: string;

}

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
 * @schema ImagebuilderGetImagePolicyRequest
 */
export interface ImagebuilderGetImagePolicyRequest {
  /**
   * @schema ImagebuilderGetImagePolicyRequest#imageArn
   */
  readonly imageArn: string;

}

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
 * @schema ImagebuilderGetImageRecipeRequest
 */
export interface ImagebuilderGetImageRecipeRequest {
  /**
   * @schema ImagebuilderGetImageRecipeRequest#imageRecipeArn
   */
  readonly imageRecipeArn: string;

}

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
 * @schema ImagebuilderGetImageRecipePolicyRequest
 */
export interface ImagebuilderGetImageRecipePolicyRequest {
  /**
   * @schema ImagebuilderGetImageRecipePolicyRequest#imageRecipeArn
   */
  readonly imageRecipeArn: string;

}

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
 * @schema ImagebuilderGetInfrastructureConfigurationRequest
 */
export interface ImagebuilderGetInfrastructureConfigurationRequest {
  /**
   * @schema ImagebuilderGetInfrastructureConfigurationRequest#infrastructureConfigurationArn
   */
  readonly infrastructureConfigurationArn: string;

}

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
   * @schema ImagebuilderListComponentsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ImagebuilderListComponentsRequest#nextToken
   */
  readonly nextToken?: string;

}

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
   * @schema ImagebuilderListImagesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ImagebuilderListImagesRequest#nextToken
   */
  readonly nextToken?: string;

}

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
 * @schema ImagebuilderListTagsForResourceRequest
 */
export interface ImagebuilderListTagsForResourceRequest {
  /**
   * @schema ImagebuilderListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

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
 * @schema ImagebuilderTagResourceResponse
 */
export interface ImagebuilderTagResourceResponse {
}

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
 * @schema ImagebuilderUntagResourceResponse
 */
export interface ImagebuilderUntagResourceResponse {
}

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
  readonly imageRecipeArn: string;

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
   * @schema ImagebuilderDistribution#licenseConfigurationArns
   */
  readonly licenseConfigurationArns?: string[];

}

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
 * @schema ImagebuilderSchedule
 */
export interface ImagebuilderSchedule {
  /**
   * @schema ImagebuilderSchedule#scheduleExpression
   */
  readonly scheduleExpression?: string;

  /**
   * @schema ImagebuilderSchedule#pipelineExecutionStartCondition
   */
  readonly pipelineExecutionStartCondition?: string;

}

/**
 * @schema ImagebuilderComponentConfiguration
 */
export interface ImagebuilderComponentConfiguration {
  /**
   * @schema ImagebuilderComponentConfiguration#componentArn
   */
  readonly componentArn: string;

}

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
 * @schema ImagebuilderLogging
 */
export interface ImagebuilderLogging {
  /**
   * @schema ImagebuilderLogging#s3Logs
   */
  readonly s3Logs?: ImagebuilderS3Logs;

}

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
 * @schema ImagebuilderImage
 */
export interface ImagebuilderImage {
  /**
   * @schema ImagebuilderImage#arn
   */
  readonly arn?: string;

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
 * @schema ImagebuilderImageRecipe
 */
export interface ImagebuilderImageRecipe {
  /**
   * @schema ImagebuilderImageRecipe#arn
   */
  readonly arn?: string;

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

}

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

}

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

}

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
 * @schema ImagebuilderOutputResources
 */
export interface ImagebuilderOutputResources {
  /**
   * @schema ImagebuilderOutputResources#amis
   */
  readonly amis?: ImagebuilderAmi[];

}

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
