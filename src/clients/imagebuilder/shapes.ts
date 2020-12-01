/**
 * @schema CancelImageCreationRequest
 */
export interface CancelImageCreationRequest {
  /**
   * @schema CancelImageCreationRequest#imageBuildVersionArn
   */
  readonly imageBuildVersionArn: string;

  /**
   * @schema CancelImageCreationRequest#clientToken
   */
  readonly clientToken: string;

}

/**
 * @schema CancelImageCreationResponse
 */
export interface CancelImageCreationResponse {
  /**
   * @schema CancelImageCreationResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema CancelImageCreationResponse#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema CancelImageCreationResponse#imageBuildVersionArn
   */
  readonly imageBuildVersionArn?: string;

}

/**
 * @schema CreateComponentRequest
 */
export interface CreateComponentRequest {
  /**
   * @schema CreateComponentRequest#name
   */
  readonly name: string;

  /**
   * @schema CreateComponentRequest#semanticVersion
   */
  readonly semanticVersion: string;

  /**
   * @schema CreateComponentRequest#description
   */
  readonly description?: string;

  /**
   * @schema CreateComponentRequest#changeDescription
   */
  readonly changeDescription?: string;

  /**
   * @schema CreateComponentRequest#platform
   */
  readonly platform: string;

  /**
   * @schema CreateComponentRequest#supportedOsVersions
   */
  readonly supportedOsVersions?: string[];

  /**
   * @schema CreateComponentRequest#data
   */
  readonly data?: string;

  /**
   * @schema CreateComponentRequest#uri
   */
  readonly uri?: string;

  /**
   * @schema CreateComponentRequest#kmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema CreateComponentRequest#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema CreateComponentRequest#clientToken
   */
  readonly clientToken: string;

}

/**
 * @schema CreateComponentResponse
 */
export interface CreateComponentResponse {
  /**
   * @schema CreateComponentResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema CreateComponentResponse#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema CreateComponentResponse#componentBuildVersionArn
   */
  readonly componentBuildVersionArn?: string;

}

/**
 * @schema CreateDistributionConfigurationRequest
 */
export interface CreateDistributionConfigurationRequest {
  /**
   * @schema CreateDistributionConfigurationRequest#name
   */
  readonly name: string;

  /**
   * @schema CreateDistributionConfigurationRequest#description
   */
  readonly description?: string;

  /**
   * @schema CreateDistributionConfigurationRequest#distributions
   */
  readonly distributions: Distribution[];

  /**
   * @schema CreateDistributionConfigurationRequest#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema CreateDistributionConfigurationRequest#clientToken
   */
  readonly clientToken: string;

}

/**
 * @schema CreateDistributionConfigurationResponse
 */
export interface CreateDistributionConfigurationResponse {
  /**
   * @schema CreateDistributionConfigurationResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema CreateDistributionConfigurationResponse#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema CreateDistributionConfigurationResponse#distributionConfigurationArn
   */
  readonly distributionConfigurationArn?: string;

}

/**
 * @schema CreateImageRequest
 */
export interface CreateImageRequest {
  /**
   * @schema CreateImageRequest#imageRecipeArn
   */
  readonly imageRecipeArn: string;

  /**
   * @schema CreateImageRequest#distributionConfigurationArn
   */
  readonly distributionConfigurationArn?: string;

  /**
   * @schema CreateImageRequest#infrastructureConfigurationArn
   */
  readonly infrastructureConfigurationArn: string;

  /**
   * @schema CreateImageRequest#imageTestsConfiguration
   */
  readonly imageTestsConfiguration?: ImageTestsConfiguration;

  /**
   * @schema CreateImageRequest#enhancedImageMetadataEnabled
   */
  readonly enhancedImageMetadataEnabled?: boolean;

  /**
   * @schema CreateImageRequest#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema CreateImageRequest#clientToken
   */
  readonly clientToken: string;

}

/**
 * @schema CreateImageResponse
 */
export interface CreateImageResponse {
  /**
   * @schema CreateImageResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema CreateImageResponse#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema CreateImageResponse#imageBuildVersionArn
   */
  readonly imageBuildVersionArn?: string;

}

/**
 * @schema CreateImagePipelineRequest
 */
export interface CreateImagePipelineRequest {
  /**
   * @schema CreateImagePipelineRequest#name
   */
  readonly name: string;

  /**
   * @schema CreateImagePipelineRequest#description
   */
  readonly description?: string;

  /**
   * @schema CreateImagePipelineRequest#imageRecipeArn
   */
  readonly imageRecipeArn: string;

  /**
   * @schema CreateImagePipelineRequest#infrastructureConfigurationArn
   */
  readonly infrastructureConfigurationArn: string;

  /**
   * @schema CreateImagePipelineRequest#distributionConfigurationArn
   */
  readonly distributionConfigurationArn?: string;

  /**
   * @schema CreateImagePipelineRequest#imageTestsConfiguration
   */
  readonly imageTestsConfiguration?: ImageTestsConfiguration;

  /**
   * @schema CreateImagePipelineRequest#enhancedImageMetadataEnabled
   */
  readonly enhancedImageMetadataEnabled?: boolean;

  /**
   * @schema CreateImagePipelineRequest#schedule
   */
  readonly schedule?: Schedule;

  /**
   * @schema CreateImagePipelineRequest#status
   */
  readonly status?: string;

  /**
   * @schema CreateImagePipelineRequest#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema CreateImagePipelineRequest#clientToken
   */
  readonly clientToken: string;

}

/**
 * @schema CreateImagePipelineResponse
 */
export interface CreateImagePipelineResponse {
  /**
   * @schema CreateImagePipelineResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema CreateImagePipelineResponse#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema CreateImagePipelineResponse#imagePipelineArn
   */
  readonly imagePipelineArn?: string;

}

/**
 * @schema CreateImageRecipeRequest
 */
export interface CreateImageRecipeRequest {
  /**
   * @schema CreateImageRecipeRequest#name
   */
  readonly name: string;

  /**
   * @schema CreateImageRecipeRequest#description
   */
  readonly description?: string;

  /**
   * @schema CreateImageRecipeRequest#semanticVersion
   */
  readonly semanticVersion: string;

  /**
   * @schema CreateImageRecipeRequest#components
   */
  readonly components: ComponentConfiguration[];

  /**
   * @schema CreateImageRecipeRequest#parentImage
   */
  readonly parentImage: string;

  /**
   * @schema CreateImageRecipeRequest#blockDeviceMappings
   */
  readonly blockDeviceMappings?: InstanceBlockDeviceMapping[];

  /**
   * @schema CreateImageRecipeRequest#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema CreateImageRecipeRequest#workingDirectory
   */
  readonly workingDirectory?: string;

  /**
   * @schema CreateImageRecipeRequest#clientToken
   */
  readonly clientToken: string;

}

/**
 * @schema CreateImageRecipeResponse
 */
export interface CreateImageRecipeResponse {
  /**
   * @schema CreateImageRecipeResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema CreateImageRecipeResponse#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema CreateImageRecipeResponse#imageRecipeArn
   */
  readonly imageRecipeArn?: string;

}

/**
 * @schema CreateInfrastructureConfigurationRequest
 */
export interface CreateInfrastructureConfigurationRequest {
  /**
   * @schema CreateInfrastructureConfigurationRequest#name
   */
  readonly name: string;

  /**
   * @schema CreateInfrastructureConfigurationRequest#description
   */
  readonly description?: string;

  /**
   * @schema CreateInfrastructureConfigurationRequest#instanceTypes
   */
  readonly instanceTypes?: string[];

  /**
   * @schema CreateInfrastructureConfigurationRequest#instanceProfileName
   */
  readonly instanceProfileName: string;

  /**
   * @schema CreateInfrastructureConfigurationRequest#securityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema CreateInfrastructureConfigurationRequest#subnetId
   */
  readonly subnetId?: string;

  /**
   * @schema CreateInfrastructureConfigurationRequest#logging
   */
  readonly logging?: Logging;

  /**
   * @schema CreateInfrastructureConfigurationRequest#keyPair
   */
  readonly keyPair?: string;

  /**
   * @schema CreateInfrastructureConfigurationRequest#terminateInstanceOnFailure
   */
  readonly terminateInstanceOnFailure?: boolean;

  /**
   * @schema CreateInfrastructureConfigurationRequest#snsTopicArn
   */
  readonly snsTopicArn?: string;

  /**
   * @schema CreateInfrastructureConfigurationRequest#resourceTags
   */
  readonly resourceTags?: { [key: string]: string };

  /**
   * @schema CreateInfrastructureConfigurationRequest#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema CreateInfrastructureConfigurationRequest#clientToken
   */
  readonly clientToken: string;

}

/**
 * @schema CreateInfrastructureConfigurationResponse
 */
export interface CreateInfrastructureConfigurationResponse {
  /**
   * @schema CreateInfrastructureConfigurationResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema CreateInfrastructureConfigurationResponse#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema CreateInfrastructureConfigurationResponse#infrastructureConfigurationArn
   */
  readonly infrastructureConfigurationArn?: string;

}

/**
 * @schema DeleteComponentRequest
 */
export interface DeleteComponentRequest {
  /**
   * @schema DeleteComponentRequest#componentBuildVersionArn
   */
  readonly componentBuildVersionArn: string;

}

/**
 * @schema DeleteComponentResponse
 */
export interface DeleteComponentResponse {
  /**
   * @schema DeleteComponentResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema DeleteComponentResponse#componentBuildVersionArn
   */
  readonly componentBuildVersionArn?: string;

}

/**
 * @schema DeleteDistributionConfigurationRequest
 */
export interface DeleteDistributionConfigurationRequest {
  /**
   * @schema DeleteDistributionConfigurationRequest#distributionConfigurationArn
   */
  readonly distributionConfigurationArn: string;

}

/**
 * @schema DeleteDistributionConfigurationResponse
 */
export interface DeleteDistributionConfigurationResponse {
  /**
   * @schema DeleteDistributionConfigurationResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema DeleteDistributionConfigurationResponse#distributionConfigurationArn
   */
  readonly distributionConfigurationArn?: string;

}

/**
 * @schema DeleteImageRequest
 */
export interface DeleteImageRequest {
  /**
   * @schema DeleteImageRequest#imageBuildVersionArn
   */
  readonly imageBuildVersionArn: string;

}

/**
 * @schema DeleteImageResponse
 */
export interface DeleteImageResponse {
  /**
   * @schema DeleteImageResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema DeleteImageResponse#imageBuildVersionArn
   */
  readonly imageBuildVersionArn?: string;

}

/**
 * @schema DeleteImagePipelineRequest
 */
export interface DeleteImagePipelineRequest {
  /**
   * @schema DeleteImagePipelineRequest#imagePipelineArn
   */
  readonly imagePipelineArn: string;

}

/**
 * @schema DeleteImagePipelineResponse
 */
export interface DeleteImagePipelineResponse {
  /**
   * @schema DeleteImagePipelineResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema DeleteImagePipelineResponse#imagePipelineArn
   */
  readonly imagePipelineArn?: string;

}

/**
 * @schema DeleteImageRecipeRequest
 */
export interface DeleteImageRecipeRequest {
  /**
   * @schema DeleteImageRecipeRequest#imageRecipeArn
   */
  readonly imageRecipeArn: string;

}

/**
 * @schema DeleteImageRecipeResponse
 */
export interface DeleteImageRecipeResponse {
  /**
   * @schema DeleteImageRecipeResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema DeleteImageRecipeResponse#imageRecipeArn
   */
  readonly imageRecipeArn?: string;

}

/**
 * @schema DeleteInfrastructureConfigurationRequest
 */
export interface DeleteInfrastructureConfigurationRequest {
  /**
   * @schema DeleteInfrastructureConfigurationRequest#infrastructureConfigurationArn
   */
  readonly infrastructureConfigurationArn: string;

}

/**
 * @schema DeleteInfrastructureConfigurationResponse
 */
export interface DeleteInfrastructureConfigurationResponse {
  /**
   * @schema DeleteInfrastructureConfigurationResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema DeleteInfrastructureConfigurationResponse#infrastructureConfigurationArn
   */
  readonly infrastructureConfigurationArn?: string;

}

/**
 * @schema GetComponentRequest
 */
export interface GetComponentRequest {
  /**
   * @schema GetComponentRequest#componentBuildVersionArn
   */
  readonly componentBuildVersionArn: string;

}

/**
 * @schema GetComponentResponse
 */
export interface GetComponentResponse {
  /**
   * @schema GetComponentResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema GetComponentResponse#component
   */
  readonly component?: Component;

}

/**
 * @schema GetComponentPolicyRequest
 */
export interface GetComponentPolicyRequest {
  /**
   * @schema GetComponentPolicyRequest#componentArn
   */
  readonly componentArn: string;

}

/**
 * @schema GetComponentPolicyResponse
 */
export interface GetComponentPolicyResponse {
  /**
   * @schema GetComponentPolicyResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema GetComponentPolicyResponse#policy
   */
  readonly policy?: string;

}

/**
 * @schema GetDistributionConfigurationRequest
 */
export interface GetDistributionConfigurationRequest {
  /**
   * @schema GetDistributionConfigurationRequest#distributionConfigurationArn
   */
  readonly distributionConfigurationArn: string;

}

/**
 * @schema GetDistributionConfigurationResponse
 */
export interface GetDistributionConfigurationResponse {
  /**
   * @schema GetDistributionConfigurationResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema GetDistributionConfigurationResponse#distributionConfiguration
   */
  readonly distributionConfiguration?: DistributionConfiguration;

}

/**
 * @schema GetImageRequest
 */
export interface GetImageRequest {
  /**
   * @schema GetImageRequest#imageBuildVersionArn
   */
  readonly imageBuildVersionArn: string;

}

/**
 * @schema GetImageResponse
 */
export interface GetImageResponse {
  /**
   * @schema GetImageResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema GetImageResponse#image
   */
  readonly image?: Image;

}

/**
 * @schema GetImagePipelineRequest
 */
export interface GetImagePipelineRequest {
  /**
   * @schema GetImagePipelineRequest#imagePipelineArn
   */
  readonly imagePipelineArn: string;

}

/**
 * @schema GetImagePipelineResponse
 */
export interface GetImagePipelineResponse {
  /**
   * @schema GetImagePipelineResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema GetImagePipelineResponse#imagePipeline
   */
  readonly imagePipeline?: ImagePipeline;

}

/**
 * @schema GetImagePolicyRequest
 */
export interface GetImagePolicyRequest {
  /**
   * @schema GetImagePolicyRequest#imageArn
   */
  readonly imageArn: string;

}

/**
 * @schema GetImagePolicyResponse
 */
export interface GetImagePolicyResponse {
  /**
   * @schema GetImagePolicyResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema GetImagePolicyResponse#policy
   */
  readonly policy?: string;

}

/**
 * @schema GetImageRecipeRequest
 */
export interface GetImageRecipeRequest {
  /**
   * @schema GetImageRecipeRequest#imageRecipeArn
   */
  readonly imageRecipeArn: string;

}

/**
 * @schema GetImageRecipeResponse
 */
export interface GetImageRecipeResponse {
  /**
   * @schema GetImageRecipeResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema GetImageRecipeResponse#imageRecipe
   */
  readonly imageRecipe?: ImageRecipe;

}

/**
 * @schema GetImageRecipePolicyRequest
 */
export interface GetImageRecipePolicyRequest {
  /**
   * @schema GetImageRecipePolicyRequest#imageRecipeArn
   */
  readonly imageRecipeArn: string;

}

/**
 * @schema GetImageRecipePolicyResponse
 */
export interface GetImageRecipePolicyResponse {
  /**
   * @schema GetImageRecipePolicyResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema GetImageRecipePolicyResponse#policy
   */
  readonly policy?: string;

}

/**
 * @schema GetInfrastructureConfigurationRequest
 */
export interface GetInfrastructureConfigurationRequest {
  /**
   * @schema GetInfrastructureConfigurationRequest#infrastructureConfigurationArn
   */
  readonly infrastructureConfigurationArn: string;

}

/**
 * @schema GetInfrastructureConfigurationResponse
 */
export interface GetInfrastructureConfigurationResponse {
  /**
   * @schema GetInfrastructureConfigurationResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema GetInfrastructureConfigurationResponse#infrastructureConfiguration
   */
  readonly infrastructureConfiguration?: InfrastructureConfiguration;

}

/**
 * @schema ImportComponentRequest
 */
export interface ImportComponentRequest {
  /**
   * @schema ImportComponentRequest#name
   */
  readonly name: string;

  /**
   * @schema ImportComponentRequest#semanticVersion
   */
  readonly semanticVersion: string;

  /**
   * @schema ImportComponentRequest#description
   */
  readonly description?: string;

  /**
   * @schema ImportComponentRequest#changeDescription
   */
  readonly changeDescription?: string;

  /**
   * @schema ImportComponentRequest#type
   */
  readonly type: string;

  /**
   * @schema ImportComponentRequest#format
   */
  readonly format: string;

  /**
   * @schema ImportComponentRequest#platform
   */
  readonly platform: string;

  /**
   * @schema ImportComponentRequest#data
   */
  readonly data?: string;

  /**
   * @schema ImportComponentRequest#uri
   */
  readonly uri?: string;

  /**
   * @schema ImportComponentRequest#kmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema ImportComponentRequest#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema ImportComponentRequest#clientToken
   */
  readonly clientToken: string;

}

/**
 * @schema ImportComponentResponse
 */
export interface ImportComponentResponse {
  /**
   * @schema ImportComponentResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema ImportComponentResponse#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema ImportComponentResponse#componentBuildVersionArn
   */
  readonly componentBuildVersionArn?: string;

}

/**
 * @schema ListComponentBuildVersionsRequest
 */
export interface ListComponentBuildVersionsRequest {
  /**
   * @schema ListComponentBuildVersionsRequest#componentVersionArn
   */
  readonly componentVersionArn: string;

  /**
   * @schema ListComponentBuildVersionsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListComponentBuildVersionsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListComponentBuildVersionsResponse
 */
export interface ListComponentBuildVersionsResponse {
  /**
   * @schema ListComponentBuildVersionsResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema ListComponentBuildVersionsResponse#componentSummaryList
   */
  readonly componentSummaryList?: ComponentSummary[];

  /**
   * @schema ListComponentBuildVersionsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListComponentsRequest
 */
export interface ListComponentsRequest {
  /**
   * @schema ListComponentsRequest#owner
   */
  readonly owner?: string;

  /**
   * @schema ListComponentsRequest#filters
   */
  readonly filters?: Filter[];

  /**
   * @schema ListComponentsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListComponentsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListComponentsResponse
 */
export interface ListComponentsResponse {
  /**
   * @schema ListComponentsResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema ListComponentsResponse#componentVersionList
   */
  readonly componentVersionList?: ComponentVersion[];

  /**
   * @schema ListComponentsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListDistributionConfigurationsRequest
 */
export interface ListDistributionConfigurationsRequest {
  /**
   * @schema ListDistributionConfigurationsRequest#filters
   */
  readonly filters?: Filter[];

  /**
   * @schema ListDistributionConfigurationsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListDistributionConfigurationsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListDistributionConfigurationsResponse
 */
export interface ListDistributionConfigurationsResponse {
  /**
   * @schema ListDistributionConfigurationsResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema ListDistributionConfigurationsResponse#distributionConfigurationSummaryList
   */
  readonly distributionConfigurationSummaryList?: DistributionConfigurationSummary[];

  /**
   * @schema ListDistributionConfigurationsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListImageBuildVersionsRequest
 */
export interface ListImageBuildVersionsRequest {
  /**
   * @schema ListImageBuildVersionsRequest#imageVersionArn
   */
  readonly imageVersionArn: string;

  /**
   * @schema ListImageBuildVersionsRequest#filters
   */
  readonly filters?: Filter[];

  /**
   * @schema ListImageBuildVersionsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListImageBuildVersionsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListImageBuildVersionsResponse
 */
export interface ListImageBuildVersionsResponse {
  /**
   * @schema ListImageBuildVersionsResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema ListImageBuildVersionsResponse#imageSummaryList
   */
  readonly imageSummaryList?: ImageSummary[];

  /**
   * @schema ListImageBuildVersionsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListImagePipelineImagesRequest
 */
export interface ListImagePipelineImagesRequest {
  /**
   * @schema ListImagePipelineImagesRequest#imagePipelineArn
   */
  readonly imagePipelineArn: string;

  /**
   * @schema ListImagePipelineImagesRequest#filters
   */
  readonly filters?: Filter[];

  /**
   * @schema ListImagePipelineImagesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListImagePipelineImagesRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListImagePipelineImagesResponse
 */
export interface ListImagePipelineImagesResponse {
  /**
   * @schema ListImagePipelineImagesResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema ListImagePipelineImagesResponse#imageSummaryList
   */
  readonly imageSummaryList?: ImageSummary[];

  /**
   * @schema ListImagePipelineImagesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListImagePipelinesRequest
 */
export interface ListImagePipelinesRequest {
  /**
   * @schema ListImagePipelinesRequest#filters
   */
  readonly filters?: Filter[];

  /**
   * @schema ListImagePipelinesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListImagePipelinesRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListImagePipelinesResponse
 */
export interface ListImagePipelinesResponse {
  /**
   * @schema ListImagePipelinesResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema ListImagePipelinesResponse#imagePipelineList
   */
  readonly imagePipelineList?: ImagePipeline[];

  /**
   * @schema ListImagePipelinesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListImageRecipesRequest
 */
export interface ListImageRecipesRequest {
  /**
   * @schema ListImageRecipesRequest#owner
   */
  readonly owner?: string;

  /**
   * @schema ListImageRecipesRequest#filters
   */
  readonly filters?: Filter[];

  /**
   * @schema ListImageRecipesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListImageRecipesRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListImageRecipesResponse
 */
export interface ListImageRecipesResponse {
  /**
   * @schema ListImageRecipesResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema ListImageRecipesResponse#imageRecipeSummaryList
   */
  readonly imageRecipeSummaryList?: ImageRecipeSummary[];

  /**
   * @schema ListImageRecipesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListImagesRequest
 */
export interface ListImagesRequest {
  /**
   * @schema ListImagesRequest#owner
   */
  readonly owner?: string;

  /**
   * @schema ListImagesRequest#filters
   */
  readonly filters?: Filter[];

  /**
   * @schema ListImagesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListImagesRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListImagesResponse
 */
export interface ListImagesResponse {
  /**
   * @schema ListImagesResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema ListImagesResponse#imageVersionList
   */
  readonly imageVersionList?: ImageVersion[];

  /**
   * @schema ListImagesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListInfrastructureConfigurationsRequest
 */
export interface ListInfrastructureConfigurationsRequest {
  /**
   * @schema ListInfrastructureConfigurationsRequest#filters
   */
  readonly filters?: Filter[];

  /**
   * @schema ListInfrastructureConfigurationsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListInfrastructureConfigurationsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListInfrastructureConfigurationsResponse
 */
export interface ListInfrastructureConfigurationsResponse {
  /**
   * @schema ListInfrastructureConfigurationsResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema ListInfrastructureConfigurationsResponse#infrastructureConfigurationSummaryList
   */
  readonly infrastructureConfigurationSummaryList?: InfrastructureConfigurationSummary[];

  /**
   * @schema ListInfrastructureConfigurationsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * @schema ListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema ListTagsForResourceResponse
 */
export interface ListTagsForResourceResponse {
  /**
   * @schema ListTagsForResourceResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema PutComponentPolicyRequest
 */
export interface PutComponentPolicyRequest {
  /**
   * @schema PutComponentPolicyRequest#componentArn
   */
  readonly componentArn: string;

  /**
   * @schema PutComponentPolicyRequest#policy
   */
  readonly policy: string;

}

/**
 * @schema PutComponentPolicyResponse
 */
export interface PutComponentPolicyResponse {
  /**
   * @schema PutComponentPolicyResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema PutComponentPolicyResponse#componentArn
   */
  readonly componentArn?: string;

}

/**
 * @schema PutImagePolicyRequest
 */
export interface PutImagePolicyRequest {
  /**
   * @schema PutImagePolicyRequest#imageArn
   */
  readonly imageArn: string;

  /**
   * @schema PutImagePolicyRequest#policy
   */
  readonly policy: string;

}

/**
 * @schema PutImagePolicyResponse
 */
export interface PutImagePolicyResponse {
  /**
   * @schema PutImagePolicyResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema PutImagePolicyResponse#imageArn
   */
  readonly imageArn?: string;

}

/**
 * @schema PutImageRecipePolicyRequest
 */
export interface PutImageRecipePolicyRequest {
  /**
   * @schema PutImageRecipePolicyRequest#imageRecipeArn
   */
  readonly imageRecipeArn: string;

  /**
   * @schema PutImageRecipePolicyRequest#policy
   */
  readonly policy: string;

}

/**
 * @schema PutImageRecipePolicyResponse
 */
export interface PutImageRecipePolicyResponse {
  /**
   * @schema PutImageRecipePolicyResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema PutImageRecipePolicyResponse#imageRecipeArn
   */
  readonly imageRecipeArn?: string;

}

/**
 * @schema StartImagePipelineExecutionRequest
 */
export interface StartImagePipelineExecutionRequest {
  /**
   * @schema StartImagePipelineExecutionRequest#imagePipelineArn
   */
  readonly imagePipelineArn: string;

  /**
   * @schema StartImagePipelineExecutionRequest#clientToken
   */
  readonly clientToken: string;

}

/**
 * @schema StartImagePipelineExecutionResponse
 */
export interface StartImagePipelineExecutionResponse {
  /**
   * @schema StartImagePipelineExecutionResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema StartImagePipelineExecutionResponse#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema StartImagePipelineExecutionResponse#imageBuildVersionArn
   */
  readonly imageBuildVersionArn?: string;

}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema TagResourceRequest#tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema TagResourceResponse
 */
export interface TagResourceResponse {
}

/**
 * @schema UntagResourceRequest
 */
export interface UntagResourceRequest {
  /**
   * @schema UntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema UntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UntagResourceResponse
 */
export interface UntagResourceResponse {
}

/**
 * @schema UpdateDistributionConfigurationRequest
 */
export interface UpdateDistributionConfigurationRequest {
  /**
   * @schema UpdateDistributionConfigurationRequest#distributionConfigurationArn
   */
  readonly distributionConfigurationArn: string;

  /**
   * @schema UpdateDistributionConfigurationRequest#description
   */
  readonly description?: string;

  /**
   * @schema UpdateDistributionConfigurationRequest#distributions
   */
  readonly distributions: Distribution[];

  /**
   * @schema UpdateDistributionConfigurationRequest#clientToken
   */
  readonly clientToken: string;

}

/**
 * @schema UpdateDistributionConfigurationResponse
 */
export interface UpdateDistributionConfigurationResponse {
  /**
   * @schema UpdateDistributionConfigurationResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema UpdateDistributionConfigurationResponse#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema UpdateDistributionConfigurationResponse#distributionConfigurationArn
   */
  readonly distributionConfigurationArn?: string;

}

/**
 * @schema UpdateImagePipelineRequest
 */
export interface UpdateImagePipelineRequest {
  /**
   * @schema UpdateImagePipelineRequest#imagePipelineArn
   */
  readonly imagePipelineArn: string;

  /**
   * @schema UpdateImagePipelineRequest#description
   */
  readonly description?: string;

  /**
   * @schema UpdateImagePipelineRequest#imageRecipeArn
   */
  readonly imageRecipeArn: string;

  /**
   * @schema UpdateImagePipelineRequest#infrastructureConfigurationArn
   */
  readonly infrastructureConfigurationArn: string;

  /**
   * @schema UpdateImagePipelineRequest#distributionConfigurationArn
   */
  readonly distributionConfigurationArn?: string;

  /**
   * @schema UpdateImagePipelineRequest#imageTestsConfiguration
   */
  readonly imageTestsConfiguration?: ImageTestsConfiguration;

  /**
   * @schema UpdateImagePipelineRequest#enhancedImageMetadataEnabled
   */
  readonly enhancedImageMetadataEnabled?: boolean;

  /**
   * @schema UpdateImagePipelineRequest#schedule
   */
  readonly schedule?: Schedule;

  /**
   * @schema UpdateImagePipelineRequest#status
   */
  readonly status?: string;

  /**
   * @schema UpdateImagePipelineRequest#clientToken
   */
  readonly clientToken: string;

}

/**
 * @schema UpdateImagePipelineResponse
 */
export interface UpdateImagePipelineResponse {
  /**
   * @schema UpdateImagePipelineResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema UpdateImagePipelineResponse#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema UpdateImagePipelineResponse#imagePipelineArn
   */
  readonly imagePipelineArn?: string;

}

/**
 * @schema UpdateInfrastructureConfigurationRequest
 */
export interface UpdateInfrastructureConfigurationRequest {
  /**
   * @schema UpdateInfrastructureConfigurationRequest#infrastructureConfigurationArn
   */
  readonly infrastructureConfigurationArn: string;

  /**
   * @schema UpdateInfrastructureConfigurationRequest#description
   */
  readonly description?: string;

  /**
   * @schema UpdateInfrastructureConfigurationRequest#instanceTypes
   */
  readonly instanceTypes?: string[];

  /**
   * @schema UpdateInfrastructureConfigurationRequest#instanceProfileName
   */
  readonly instanceProfileName: string;

  /**
   * @schema UpdateInfrastructureConfigurationRequest#securityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema UpdateInfrastructureConfigurationRequest#subnetId
   */
  readonly subnetId?: string;

  /**
   * @schema UpdateInfrastructureConfigurationRequest#logging
   */
  readonly logging?: Logging;

  /**
   * @schema UpdateInfrastructureConfigurationRequest#keyPair
   */
  readonly keyPair?: string;

  /**
   * @schema UpdateInfrastructureConfigurationRequest#terminateInstanceOnFailure
   */
  readonly terminateInstanceOnFailure?: boolean;

  /**
   * @schema UpdateInfrastructureConfigurationRequest#snsTopicArn
   */
  readonly snsTopicArn?: string;

  /**
   * @schema UpdateInfrastructureConfigurationRequest#clientToken
   */
  readonly clientToken: string;

  /**
   * @schema UpdateInfrastructureConfigurationRequest#resourceTags
   */
  readonly resourceTags?: { [key: string]: string };

}

/**
 * @schema UpdateInfrastructureConfigurationResponse
 */
export interface UpdateInfrastructureConfigurationResponse {
  /**
   * @schema UpdateInfrastructureConfigurationResponse#requestId
   */
  readonly requestId?: string;

  /**
   * @schema UpdateInfrastructureConfigurationResponse#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema UpdateInfrastructureConfigurationResponse#infrastructureConfigurationArn
   */
  readonly infrastructureConfigurationArn?: string;

}

/**
 * @schema Distribution
 */
export interface Distribution {
  /**
   * @schema Distribution#region
   */
  readonly region: string;

  /**
   * @schema Distribution#amiDistributionConfiguration
   */
  readonly amiDistributionConfiguration?: AmiDistributionConfiguration;

  /**
   * @schema Distribution#licenseConfigurationArns
   */
  readonly licenseConfigurationArns?: string[];

}

/**
 * @schema ImageTestsConfiguration
 */
export interface ImageTestsConfiguration {
  /**
   * @schema ImageTestsConfiguration#imageTestsEnabled
   */
  readonly imageTestsEnabled?: boolean;

  /**
   * @schema ImageTestsConfiguration#timeoutMinutes
   */
  readonly timeoutMinutes?: number;

}

/**
 * @schema Schedule
 */
export interface Schedule {
  /**
   * @schema Schedule#scheduleExpression
   */
  readonly scheduleExpression?: string;

  /**
   * @schema Schedule#pipelineExecutionStartCondition
   */
  readonly pipelineExecutionStartCondition?: string;

}

/**
 * @schema ComponentConfiguration
 */
export interface ComponentConfiguration {
  /**
   * @schema ComponentConfiguration#componentArn
   */
  readonly componentArn: string;

}

/**
 * @schema InstanceBlockDeviceMapping
 */
export interface InstanceBlockDeviceMapping {
  /**
   * @schema InstanceBlockDeviceMapping#deviceName
   */
  readonly deviceName?: string;

  /**
   * @schema InstanceBlockDeviceMapping#ebs
   */
  readonly ebs?: EbsInstanceBlockDeviceSpecification;

  /**
   * @schema InstanceBlockDeviceMapping#virtualName
   */
  readonly virtualName?: string;

  /**
   * @schema InstanceBlockDeviceMapping#noDevice
   */
  readonly noDevice?: string;

}

/**
 * @schema Logging
 */
export interface Logging {
  /**
   * @schema Logging#s3Logs
   */
  readonly s3Logs?: S3Logs;

}

/**
 * @schema Component
 */
export interface Component {
  /**
   * @schema Component#arn
   */
  readonly arn?: string;

  /**
   * @schema Component#name
   */
  readonly name?: string;

  /**
   * @schema Component#version
   */
  readonly version?: string;

  /**
   * @schema Component#description
   */
  readonly description?: string;

  /**
   * @schema Component#changeDescription
   */
  readonly changeDescription?: string;

  /**
   * @schema Component#type
   */
  readonly type?: string;

  /**
   * @schema Component#platform
   */
  readonly platform?: string;

  /**
   * @schema Component#supportedOsVersions
   */
  readonly supportedOsVersions?: string[];

  /**
   * @schema Component#owner
   */
  readonly owner?: string;

  /**
   * @schema Component#data
   */
  readonly data?: string;

  /**
   * @schema Component#kmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema Component#encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema Component#dateCreated
   */
  readonly dateCreated?: string;

  /**
   * @schema Component#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema DistributionConfiguration
 */
export interface DistributionConfiguration {
  /**
   * @schema DistributionConfiguration#arn
   */
  readonly arn?: string;

  /**
   * @schema DistributionConfiguration#name
   */
  readonly name?: string;

  /**
   * @schema DistributionConfiguration#description
   */
  readonly description?: string;

  /**
   * @schema DistributionConfiguration#distributions
   */
  readonly distributions?: Distribution[];

  /**
   * @schema DistributionConfiguration#timeoutMinutes
   */
  readonly timeoutMinutes: number;

  /**
   * @schema DistributionConfiguration#dateCreated
   */
  readonly dateCreated?: string;

  /**
   * @schema DistributionConfiguration#dateUpdated
   */
  readonly dateUpdated?: string;

  /**
   * @schema DistributionConfiguration#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema Image
 */
export interface Image {
  /**
   * @schema Image#arn
   */
  readonly arn?: string;

  /**
   * @schema Image#name
   */
  readonly name?: string;

  /**
   * @schema Image#version
   */
  readonly version?: string;

  /**
   * @schema Image#platform
   */
  readonly platform?: string;

  /**
   * @schema Image#enhancedImageMetadataEnabled
   */
  readonly enhancedImageMetadataEnabled?: boolean;

  /**
   * @schema Image#osVersion
   */
  readonly osVersion?: string;

  /**
   * @schema Image#state
   */
  readonly state?: ImageState;

  /**
   * @schema Image#imageRecipe
   */
  readonly imageRecipe?: ImageRecipe;

  /**
   * @schema Image#sourcePipelineName
   */
  readonly sourcePipelineName?: string;

  /**
   * @schema Image#sourcePipelineArn
   */
  readonly sourcePipelineArn?: string;

  /**
   * @schema Image#infrastructureConfiguration
   */
  readonly infrastructureConfiguration?: InfrastructureConfiguration;

  /**
   * @schema Image#distributionConfiguration
   */
  readonly distributionConfiguration?: DistributionConfiguration;

  /**
   * @schema Image#imageTestsConfiguration
   */
  readonly imageTestsConfiguration?: ImageTestsConfiguration;

  /**
   * @schema Image#dateCreated
   */
  readonly dateCreated?: string;

  /**
   * @schema Image#outputResources
   */
  readonly outputResources?: OutputResources;

  /**
   * @schema Image#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema ImagePipeline
 */
export interface ImagePipeline {
  /**
   * @schema ImagePipeline#arn
   */
  readonly arn?: string;

  /**
   * @schema ImagePipeline#name
   */
  readonly name?: string;

  /**
   * @schema ImagePipeline#description
   */
  readonly description?: string;

  /**
   * @schema ImagePipeline#platform
   */
  readonly platform?: string;

  /**
   * @schema ImagePipeline#enhancedImageMetadataEnabled
   */
  readonly enhancedImageMetadataEnabled?: boolean;

  /**
   * @schema ImagePipeline#imageRecipeArn
   */
  readonly imageRecipeArn?: string;

  /**
   * @schema ImagePipeline#infrastructureConfigurationArn
   */
  readonly infrastructureConfigurationArn?: string;

  /**
   * @schema ImagePipeline#distributionConfigurationArn
   */
  readonly distributionConfigurationArn?: string;

  /**
   * @schema ImagePipeline#imageTestsConfiguration
   */
  readonly imageTestsConfiguration?: ImageTestsConfiguration;

  /**
   * @schema ImagePipeline#schedule
   */
  readonly schedule?: Schedule;

  /**
   * @schema ImagePipeline#status
   */
  readonly status?: string;

  /**
   * @schema ImagePipeline#dateCreated
   */
  readonly dateCreated?: string;

  /**
   * @schema ImagePipeline#dateUpdated
   */
  readonly dateUpdated?: string;

  /**
   * @schema ImagePipeline#dateLastRun
   */
  readonly dateLastRun?: string;

  /**
   * @schema ImagePipeline#dateNextRun
   */
  readonly dateNextRun?: string;

  /**
   * @schema ImagePipeline#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema ImageRecipe
 */
export interface ImageRecipe {
  /**
   * @schema ImageRecipe#arn
   */
  readonly arn?: string;

  /**
   * @schema ImageRecipe#name
   */
  readonly name?: string;

  /**
   * @schema ImageRecipe#description
   */
  readonly description?: string;

  /**
   * @schema ImageRecipe#platform
   */
  readonly platform?: string;

  /**
   * @schema ImageRecipe#owner
   */
  readonly owner?: string;

  /**
   * @schema ImageRecipe#version
   */
  readonly version?: string;

  /**
   * @schema ImageRecipe#components
   */
  readonly components?: ComponentConfiguration[];

  /**
   * @schema ImageRecipe#parentImage
   */
  readonly parentImage?: string;

  /**
   * @schema ImageRecipe#blockDeviceMappings
   */
  readonly blockDeviceMappings?: InstanceBlockDeviceMapping[];

  /**
   * @schema ImageRecipe#dateCreated
   */
  readonly dateCreated?: string;

  /**
   * @schema ImageRecipe#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema ImageRecipe#workingDirectory
   */
  readonly workingDirectory?: string;

}

/**
 * @schema InfrastructureConfiguration
 */
export interface InfrastructureConfiguration {
  /**
   * @schema InfrastructureConfiguration#arn
   */
  readonly arn?: string;

  /**
   * @schema InfrastructureConfiguration#name
   */
  readonly name?: string;

  /**
   * @schema InfrastructureConfiguration#description
   */
  readonly description?: string;

  /**
   * @schema InfrastructureConfiguration#instanceTypes
   */
  readonly instanceTypes?: string[];

  /**
   * @schema InfrastructureConfiguration#instanceProfileName
   */
  readonly instanceProfileName?: string;

  /**
   * @schema InfrastructureConfiguration#securityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema InfrastructureConfiguration#subnetId
   */
  readonly subnetId?: string;

  /**
   * @schema InfrastructureConfiguration#logging
   */
  readonly logging?: Logging;

  /**
   * @schema InfrastructureConfiguration#keyPair
   */
  readonly keyPair?: string;

  /**
   * @schema InfrastructureConfiguration#terminateInstanceOnFailure
   */
  readonly terminateInstanceOnFailure?: boolean;

  /**
   * @schema InfrastructureConfiguration#snsTopicArn
   */
  readonly snsTopicArn?: string;

  /**
   * @schema InfrastructureConfiguration#dateCreated
   */
  readonly dateCreated?: string;

  /**
   * @schema InfrastructureConfiguration#dateUpdated
   */
  readonly dateUpdated?: string;

  /**
   * @schema InfrastructureConfiguration#resourceTags
   */
  readonly resourceTags?: { [key: string]: string };

  /**
   * @schema InfrastructureConfiguration#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema ComponentSummary
 */
export interface ComponentSummary {
  /**
   * @schema ComponentSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema ComponentSummary#name
   */
  readonly name?: string;

  /**
   * @schema ComponentSummary#version
   */
  readonly version?: string;

  /**
   * @schema ComponentSummary#platform
   */
  readonly platform?: string;

  /**
   * @schema ComponentSummary#supportedOsVersions
   */
  readonly supportedOsVersions?: string[];

  /**
   * @schema ComponentSummary#type
   */
  readonly type?: string;

  /**
   * @schema ComponentSummary#owner
   */
  readonly owner?: string;

  /**
   * @schema ComponentSummary#description
   */
  readonly description?: string;

  /**
   * @schema ComponentSummary#changeDescription
   */
  readonly changeDescription?: string;

  /**
   * @schema ComponentSummary#dateCreated
   */
  readonly dateCreated?: string;

  /**
   * @schema ComponentSummary#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema Filter
 */
export interface Filter {
  /**
   * @schema Filter#name
   */
  readonly name?: string;

  /**
   * @schema Filter#values
   */
  readonly values?: string[];

}

/**
 * @schema ComponentVersion
 */
export interface ComponentVersion {
  /**
   * @schema ComponentVersion#arn
   */
  readonly arn?: string;

  /**
   * @schema ComponentVersion#name
   */
  readonly name?: string;

  /**
   * @schema ComponentVersion#version
   */
  readonly version?: string;

  /**
   * @schema ComponentVersion#description
   */
  readonly description?: string;

  /**
   * @schema ComponentVersion#platform
   */
  readonly platform?: string;

  /**
   * @schema ComponentVersion#supportedOsVersions
   */
  readonly supportedOsVersions?: string[];

  /**
   * @schema ComponentVersion#type
   */
  readonly type?: string;

  /**
   * @schema ComponentVersion#owner
   */
  readonly owner?: string;

  /**
   * @schema ComponentVersion#dateCreated
   */
  readonly dateCreated?: string;

}

/**
 * @schema DistributionConfigurationSummary
 */
export interface DistributionConfigurationSummary {
  /**
   * @schema DistributionConfigurationSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema DistributionConfigurationSummary#name
   */
  readonly name?: string;

  /**
   * @schema DistributionConfigurationSummary#description
   */
  readonly description?: string;

  /**
   * @schema DistributionConfigurationSummary#dateCreated
   */
  readonly dateCreated?: string;

  /**
   * @schema DistributionConfigurationSummary#dateUpdated
   */
  readonly dateUpdated?: string;

  /**
   * @schema DistributionConfigurationSummary#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema ImageSummary
 */
export interface ImageSummary {
  /**
   * @schema ImageSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema ImageSummary#name
   */
  readonly name?: string;

  /**
   * @schema ImageSummary#version
   */
  readonly version?: string;

  /**
   * @schema ImageSummary#platform
   */
  readonly platform?: string;

  /**
   * @schema ImageSummary#osVersion
   */
  readonly osVersion?: string;

  /**
   * @schema ImageSummary#state
   */
  readonly state?: ImageState;

  /**
   * @schema ImageSummary#owner
   */
  readonly owner?: string;

  /**
   * @schema ImageSummary#dateCreated
   */
  readonly dateCreated?: string;

  /**
   * @schema ImageSummary#outputResources
   */
  readonly outputResources?: OutputResources;

  /**
   * @schema ImageSummary#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema ImageRecipeSummary
 */
export interface ImageRecipeSummary {
  /**
   * @schema ImageRecipeSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema ImageRecipeSummary#name
   */
  readonly name?: string;

  /**
   * @schema ImageRecipeSummary#platform
   */
  readonly platform?: string;

  /**
   * @schema ImageRecipeSummary#owner
   */
  readonly owner?: string;

  /**
   * @schema ImageRecipeSummary#parentImage
   */
  readonly parentImage?: string;

  /**
   * @schema ImageRecipeSummary#dateCreated
   */
  readonly dateCreated?: string;

  /**
   * @schema ImageRecipeSummary#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema ImageVersion
 */
export interface ImageVersion {
  /**
   * @schema ImageVersion#arn
   */
  readonly arn?: string;

  /**
   * @schema ImageVersion#name
   */
  readonly name?: string;

  /**
   * @schema ImageVersion#version
   */
  readonly version?: string;

  /**
   * @schema ImageVersion#platform
   */
  readonly platform?: string;

  /**
   * @schema ImageVersion#osVersion
   */
  readonly osVersion?: string;

  /**
   * @schema ImageVersion#owner
   */
  readonly owner?: string;

  /**
   * @schema ImageVersion#dateCreated
   */
  readonly dateCreated?: string;

}

/**
 * @schema InfrastructureConfigurationSummary
 */
export interface InfrastructureConfigurationSummary {
  /**
   * @schema InfrastructureConfigurationSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema InfrastructureConfigurationSummary#name
   */
  readonly name?: string;

  /**
   * @schema InfrastructureConfigurationSummary#description
   */
  readonly description?: string;

  /**
   * @schema InfrastructureConfigurationSummary#dateCreated
   */
  readonly dateCreated?: string;

  /**
   * @schema InfrastructureConfigurationSummary#dateUpdated
   */
  readonly dateUpdated?: string;

  /**
   * @schema InfrastructureConfigurationSummary#resourceTags
   */
  readonly resourceTags?: { [key: string]: string };

  /**
   * @schema InfrastructureConfigurationSummary#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema AmiDistributionConfiguration
 */
export interface AmiDistributionConfiguration {
  /**
   * @schema AmiDistributionConfiguration#name
   */
  readonly name?: string;

  /**
   * @schema AmiDistributionConfiguration#description
   */
  readonly description?: string;

  /**
   * @schema AmiDistributionConfiguration#targetAccountIds
   */
  readonly targetAccountIds?: string[];

  /**
   * @schema AmiDistributionConfiguration#amiTags
   */
  readonly amiTags?: { [key: string]: string };

  /**
   * @schema AmiDistributionConfiguration#kmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema AmiDistributionConfiguration#launchPermission
   */
  readonly launchPermission?: LaunchPermissionConfiguration;

}

/**
 * @schema EbsInstanceBlockDeviceSpecification
 */
export interface EbsInstanceBlockDeviceSpecification {
  /**
   * @schema EbsInstanceBlockDeviceSpecification#encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema EbsInstanceBlockDeviceSpecification#deleteOnTermination
   */
  readonly deleteOnTermination?: boolean;

  /**
   * @schema EbsInstanceBlockDeviceSpecification#iops
   */
  readonly iops?: number;

  /**
   * @schema EbsInstanceBlockDeviceSpecification#kmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema EbsInstanceBlockDeviceSpecification#snapshotId
   */
  readonly snapshotId?: string;

  /**
   * @schema EbsInstanceBlockDeviceSpecification#volumeSize
   */
  readonly volumeSize?: number;

  /**
   * @schema EbsInstanceBlockDeviceSpecification#volumeType
   */
  readonly volumeType?: string;

}

/**
 * @schema S3Logs
 */
export interface S3Logs {
  /**
   * @schema S3Logs#s3BucketName
   */
  readonly s3BucketName?: string;

  /**
   * @schema S3Logs#s3KeyPrefix
   */
  readonly s3KeyPrefix?: string;

}

/**
 * @schema ImageState
 */
export interface ImageState {
  /**
   * @schema ImageState#status
   */
  readonly status?: string;

  /**
   * @schema ImageState#reason
   */
  readonly reason?: string;

}

/**
 * @schema OutputResources
 */
export interface OutputResources {
  /**
   * @schema OutputResources#amis
   */
  readonly amis?: Ami[];

}

/**
 * @schema LaunchPermissionConfiguration
 */
export interface LaunchPermissionConfiguration {
  /**
   * @schema LaunchPermissionConfiguration#userIds
   */
  readonly userIds?: string[];

  /**
   * @schema LaunchPermissionConfiguration#userGroups
   */
  readonly userGroups?: string[];

}

/**
 * @schema Ami
 */
export interface Ami {
  /**
   * @schema Ami#region
   */
  readonly region?: string;

  /**
   * @schema Ami#image
   */
  readonly image?: string;

  /**
   * @schema Ami#name
   */
  readonly name?: string;

  /**
   * @schema Ami#description
   */
  readonly description?: string;

  /**
   * @schema Ami#state
   */
  readonly state?: ImageState;

  /**
   * @schema Ami#accountId
   */
  readonly accountId?: string;

}
