/**
 * @schema BatchCheckLayerAvailabilityRequest
 */
export interface BatchCheckLayerAvailabilityRequest {
  /**
   * @schema BatchCheckLayerAvailabilityRequest#registryId
   */
  readonly registryId?: string;

  /**
   * @schema BatchCheckLayerAvailabilityRequest#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema BatchCheckLayerAvailabilityRequest#layerDigests
   */
  readonly layerDigests: string[];

}

/**
 * @schema BatchCheckLayerAvailabilityResponse
 */
export interface BatchCheckLayerAvailabilityResponse {
  /**
   * @schema BatchCheckLayerAvailabilityResponse#layers
   */
  readonly layers?: Layer[];

  /**
   * @schema BatchCheckLayerAvailabilityResponse#failures
   */
  readonly failures?: LayerFailure[];

}

/**
 * @schema BatchDeleteImageRequest
 */
export interface BatchDeleteImageRequest {
  /**
   * @schema BatchDeleteImageRequest#registryId
   */
  readonly registryId?: string;

  /**
   * @schema BatchDeleteImageRequest#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema BatchDeleteImageRequest#imageIds
   */
  readonly imageIds: ImageIdentifier[];

}

/**
 * @schema BatchDeleteImageResponse
 */
export interface BatchDeleteImageResponse {
  /**
   * @schema BatchDeleteImageResponse#imageIds
   */
  readonly imageIds?: ImageIdentifier[];

  /**
   * @schema BatchDeleteImageResponse#failures
   */
  readonly failures?: ImageFailure[];

}

/**
 * @schema BatchGetImageRequest
 */
export interface BatchGetImageRequest {
  /**
   * @schema BatchGetImageRequest#registryId
   */
  readonly registryId?: string;

  /**
   * @schema BatchGetImageRequest#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema BatchGetImageRequest#imageIds
   */
  readonly imageIds: ImageIdentifier[];

  /**
   * @schema BatchGetImageRequest#acceptedMediaTypes
   */
  readonly acceptedMediaTypes?: string[];

}

/**
 * @schema BatchGetImageResponse
 */
export interface BatchGetImageResponse {
  /**
   * @schema BatchGetImageResponse#images
   */
  readonly images?: Image[];

  /**
   * @schema BatchGetImageResponse#failures
   */
  readonly failures?: ImageFailure[];

}

/**
 * @schema CompleteLayerUploadRequest
 */
export interface CompleteLayerUploadRequest {
  /**
   * @schema CompleteLayerUploadRequest#registryId
   */
  readonly registryId?: string;

  /**
   * @schema CompleteLayerUploadRequest#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema CompleteLayerUploadRequest#uploadId
   */
  readonly uploadId: string;

  /**
   * @schema CompleteLayerUploadRequest#layerDigests
   */
  readonly layerDigests: string[];

}

/**
 * @schema CompleteLayerUploadResponse
 */
export interface CompleteLayerUploadResponse {
  /**
   * @schema CompleteLayerUploadResponse#registryId
   */
  readonly registryId?: string;

  /**
   * @schema CompleteLayerUploadResponse#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema CompleteLayerUploadResponse#uploadId
   */
  readonly uploadId?: string;

  /**
   * @schema CompleteLayerUploadResponse#layerDigest
   */
  readonly layerDigest?: string;

}

/**
 * @schema CreateRepositoryRequest
 */
export interface CreateRepositoryRequest {
  /**
   * @schema CreateRepositoryRequest#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema CreateRepositoryRequest#tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateRepositoryRequest#imageTagMutability
   */
  readonly imageTagMutability?: string;

  /**
   * @schema CreateRepositoryRequest#imageScanningConfiguration
   */
  readonly imageScanningConfiguration?: ImageScanningConfiguration;

  /**
   * @schema CreateRepositoryRequest#encryptionConfiguration
   */
  readonly encryptionConfiguration?: EncryptionConfiguration;

}

/**
 * @schema CreateRepositoryResponse
 */
export interface CreateRepositoryResponse {
  /**
   * @schema CreateRepositoryResponse#repository
   */
  readonly repository?: Repository;

}

/**
 * @schema DeleteLifecyclePolicyRequest
 */
export interface DeleteLifecyclePolicyRequest {
  /**
   * @schema DeleteLifecyclePolicyRequest#registryId
   */
  readonly registryId?: string;

  /**
   * @schema DeleteLifecyclePolicyRequest#repositoryName
   */
  readonly repositoryName: string;

}

/**
 * @schema DeleteLifecyclePolicyResponse
 */
export interface DeleteLifecyclePolicyResponse {
  /**
   * @schema DeleteLifecyclePolicyResponse#registryId
   */
  readonly registryId?: string;

  /**
   * @schema DeleteLifecyclePolicyResponse#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema DeleteLifecyclePolicyResponse#lifecyclePolicyText
   */
  readonly lifecyclePolicyText?: string;

  /**
   * @schema DeleteLifecyclePolicyResponse#lastEvaluatedAt
   */
  readonly lastEvaluatedAt?: string;

}

/**
 * @schema DeleteRepositoryRequest
 */
export interface DeleteRepositoryRequest {
  /**
   * @schema DeleteRepositoryRequest#registryId
   */
  readonly registryId?: string;

  /**
   * @schema DeleteRepositoryRequest#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema DeleteRepositoryRequest#force
   */
  readonly force?: boolean;

}

/**
 * @schema DeleteRepositoryResponse
 */
export interface DeleteRepositoryResponse {
  /**
   * @schema DeleteRepositoryResponse#repository
   */
  readonly repository?: Repository;

}

/**
 * @schema DeleteRepositoryPolicyRequest
 */
export interface DeleteRepositoryPolicyRequest {
  /**
   * @schema DeleteRepositoryPolicyRequest#registryId
   */
  readonly registryId?: string;

  /**
   * @schema DeleteRepositoryPolicyRequest#repositoryName
   */
  readonly repositoryName: string;

}

/**
 * @schema DeleteRepositoryPolicyResponse
 */
export interface DeleteRepositoryPolicyResponse {
  /**
   * @schema DeleteRepositoryPolicyResponse#registryId
   */
  readonly registryId?: string;

  /**
   * @schema DeleteRepositoryPolicyResponse#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema DeleteRepositoryPolicyResponse#policyText
   */
  readonly policyText?: string;

}

/**
 * @schema DescribeImageScanFindingsRequest
 */
export interface DescribeImageScanFindingsRequest {
  /**
   * @schema DescribeImageScanFindingsRequest#registryId
   */
  readonly registryId?: string;

  /**
   * @schema DescribeImageScanFindingsRequest#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema DescribeImageScanFindingsRequest#imageId
   */
  readonly imageId: ImageIdentifier;

  /**
   * @schema DescribeImageScanFindingsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeImageScanFindingsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema DescribeImageScanFindingsResponse
 */
export interface DescribeImageScanFindingsResponse {
  /**
   * @schema DescribeImageScanFindingsResponse#registryId
   */
  readonly registryId?: string;

  /**
   * @schema DescribeImageScanFindingsResponse#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema DescribeImageScanFindingsResponse#imageId
   */
  readonly imageId?: ImageIdentifier;

  /**
   * @schema DescribeImageScanFindingsResponse#imageScanStatus
   */
  readonly imageScanStatus?: ImageScanStatus;

  /**
   * @schema DescribeImageScanFindingsResponse#imageScanFindings
   */
  readonly imageScanFindings?: ImageScanFindings;

  /**
   * @schema DescribeImageScanFindingsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeImagesRequest
 */
export interface DescribeImagesRequest {
  /**
   * @schema DescribeImagesRequest#registryId
   */
  readonly registryId?: string;

  /**
   * @schema DescribeImagesRequest#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema DescribeImagesRequest#imageIds
   */
  readonly imageIds?: ImageIdentifier[];

  /**
   * @schema DescribeImagesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeImagesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeImagesRequest#filter
   */
  readonly filter?: DescribeImagesFilter;

}

/**
 * @schema DescribeImagesResponse
 */
export interface DescribeImagesResponse {
  /**
   * @schema DescribeImagesResponse#imageDetails
   */
  readonly imageDetails?: ImageDetail[];

  /**
   * @schema DescribeImagesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeRepositoriesRequest
 */
export interface DescribeRepositoriesRequest {
  /**
   * @schema DescribeRepositoriesRequest#registryId
   */
  readonly registryId?: string;

  /**
   * @schema DescribeRepositoriesRequest#repositoryNames
   */
  readonly repositoryNames?: string[];

  /**
   * @schema DescribeRepositoriesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeRepositoriesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema DescribeRepositoriesResponse
 */
export interface DescribeRepositoriesResponse {
  /**
   * @schema DescribeRepositoriesResponse#repositories
   */
  readonly repositories?: Repository[];

  /**
   * @schema DescribeRepositoriesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetAuthorizationTokenRequest
 */
export interface GetAuthorizationTokenRequest {
  /**
   * @schema GetAuthorizationTokenRequest#registryIds
   */
  readonly registryIds?: string[];

}

/**
 * @schema GetAuthorizationTokenResponse
 */
export interface GetAuthorizationTokenResponse {
  /**
   * @schema GetAuthorizationTokenResponse#authorizationData
   */
  readonly authorizationData?: AuthorizationData[];

}

/**
 * @schema GetDownloadUrlForLayerRequest
 */
export interface GetDownloadUrlForLayerRequest {
  /**
   * @schema GetDownloadUrlForLayerRequest#registryId
   */
  readonly registryId?: string;

  /**
   * @schema GetDownloadUrlForLayerRequest#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema GetDownloadUrlForLayerRequest#layerDigest
   */
  readonly layerDigest: string;

}

/**
 * @schema GetDownloadUrlForLayerResponse
 */
export interface GetDownloadUrlForLayerResponse {
  /**
   * @schema GetDownloadUrlForLayerResponse#downloadUrl
   */
  readonly downloadUrl?: string;

  /**
   * @schema GetDownloadUrlForLayerResponse#layerDigest
   */
  readonly layerDigest?: string;

}

/**
 * @schema GetLifecyclePolicyRequest
 */
export interface GetLifecyclePolicyRequest {
  /**
   * @schema GetLifecyclePolicyRequest#registryId
   */
  readonly registryId?: string;

  /**
   * @schema GetLifecyclePolicyRequest#repositoryName
   */
  readonly repositoryName: string;

}

/**
 * @schema GetLifecyclePolicyResponse
 */
export interface GetLifecyclePolicyResponse {
  /**
   * @schema GetLifecyclePolicyResponse#registryId
   */
  readonly registryId?: string;

  /**
   * @schema GetLifecyclePolicyResponse#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema GetLifecyclePolicyResponse#lifecyclePolicyText
   */
  readonly lifecyclePolicyText?: string;

  /**
   * @schema GetLifecyclePolicyResponse#lastEvaluatedAt
   */
  readonly lastEvaluatedAt?: string;

}

/**
 * @schema GetLifecyclePolicyPreviewRequest
 */
export interface GetLifecyclePolicyPreviewRequest {
  /**
   * @schema GetLifecyclePolicyPreviewRequest#registryId
   */
  readonly registryId?: string;

  /**
   * @schema GetLifecyclePolicyPreviewRequest#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema GetLifecyclePolicyPreviewRequest#imageIds
   */
  readonly imageIds?: ImageIdentifier[];

  /**
   * @schema GetLifecyclePolicyPreviewRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetLifecyclePolicyPreviewRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GetLifecyclePolicyPreviewRequest#filter
   */
  readonly filter?: LifecyclePolicyPreviewFilter;

}

/**
 * @schema GetLifecyclePolicyPreviewResponse
 */
export interface GetLifecyclePolicyPreviewResponse {
  /**
   * @schema GetLifecyclePolicyPreviewResponse#registryId
   */
  readonly registryId?: string;

  /**
   * @schema GetLifecyclePolicyPreviewResponse#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema GetLifecyclePolicyPreviewResponse#lifecyclePolicyText
   */
  readonly lifecyclePolicyText?: string;

  /**
   * @schema GetLifecyclePolicyPreviewResponse#status
   */
  readonly status?: string;

  /**
   * @schema GetLifecyclePolicyPreviewResponse#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetLifecyclePolicyPreviewResponse#previewResults
   */
  readonly previewResults?: LifecyclePolicyPreviewResult[];

  /**
   * @schema GetLifecyclePolicyPreviewResponse#summary
   */
  readonly summary?: LifecyclePolicyPreviewSummary;

}

/**
 * @schema GetRepositoryPolicyRequest
 */
export interface GetRepositoryPolicyRequest {
  /**
   * @schema GetRepositoryPolicyRequest#registryId
   */
  readonly registryId?: string;

  /**
   * @schema GetRepositoryPolicyRequest#repositoryName
   */
  readonly repositoryName: string;

}

/**
 * @schema GetRepositoryPolicyResponse
 */
export interface GetRepositoryPolicyResponse {
  /**
   * @schema GetRepositoryPolicyResponse#registryId
   */
  readonly registryId?: string;

  /**
   * @schema GetRepositoryPolicyResponse#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema GetRepositoryPolicyResponse#policyText
   */
  readonly policyText?: string;

}

/**
 * @schema InitiateLayerUploadRequest
 */
export interface InitiateLayerUploadRequest {
  /**
   * @schema InitiateLayerUploadRequest#registryId
   */
  readonly registryId?: string;

  /**
   * @schema InitiateLayerUploadRequest#repositoryName
   */
  readonly repositoryName: string;

}

/**
 * @schema InitiateLayerUploadResponse
 */
export interface InitiateLayerUploadResponse {
  /**
   * @schema InitiateLayerUploadResponse#uploadId
   */
  readonly uploadId?: string;

  /**
   * @schema InitiateLayerUploadResponse#partSize
   */
  readonly partSize?: number;

}

/**
 * @schema ListImagesRequest
 */
export interface ListImagesRequest {
  /**
   * @schema ListImagesRequest#registryId
   */
  readonly registryId?: string;

  /**
   * @schema ListImagesRequest#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema ListImagesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListImagesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListImagesRequest#filter
   */
  readonly filter?: ListImagesFilter;

}

/**
 * @schema ListImagesResponse
 */
export interface ListImagesResponse {
  /**
   * @schema ListImagesResponse#imageIds
   */
  readonly imageIds?: ImageIdentifier[];

  /**
   * @schema ListImagesResponse#nextToken
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
  readonly tags?: Tag[];

}

/**
 * @schema PutImageRequest
 */
export interface PutImageRequest {
  /**
   * @schema PutImageRequest#registryId
   */
  readonly registryId?: string;

  /**
   * @schema PutImageRequest#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema PutImageRequest#imageManifest
   */
  readonly imageManifest: string;

  /**
   * @schema PutImageRequest#imageManifestMediaType
   */
  readonly imageManifestMediaType?: string;

  /**
   * @schema PutImageRequest#imageTag
   */
  readonly imageTag?: string;

  /**
   * @schema PutImageRequest#imageDigest
   */
  readonly imageDigest?: string;

}

/**
 * @schema PutImageResponse
 */
export interface PutImageResponse {
  /**
   * @schema PutImageResponse#image
   */
  readonly image?: Image;

}

/**
 * @schema PutImageScanningConfigurationRequest
 */
export interface PutImageScanningConfigurationRequest {
  /**
   * @schema PutImageScanningConfigurationRequest#registryId
   */
  readonly registryId?: string;

  /**
   * @schema PutImageScanningConfigurationRequest#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema PutImageScanningConfigurationRequest#imageScanningConfiguration
   */
  readonly imageScanningConfiguration: ImageScanningConfiguration;

}

/**
 * @schema PutImageScanningConfigurationResponse
 */
export interface PutImageScanningConfigurationResponse {
  /**
   * @schema PutImageScanningConfigurationResponse#registryId
   */
  readonly registryId?: string;

  /**
   * @schema PutImageScanningConfigurationResponse#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema PutImageScanningConfigurationResponse#imageScanningConfiguration
   */
  readonly imageScanningConfiguration?: ImageScanningConfiguration;

}

/**
 * @schema PutImageTagMutabilityRequest
 */
export interface PutImageTagMutabilityRequest {
  /**
   * @schema PutImageTagMutabilityRequest#registryId
   */
  readonly registryId?: string;

  /**
   * @schema PutImageTagMutabilityRequest#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema PutImageTagMutabilityRequest#imageTagMutability
   */
  readonly imageTagMutability: string;

}

/**
 * @schema PutImageTagMutabilityResponse
 */
export interface PutImageTagMutabilityResponse {
  /**
   * @schema PutImageTagMutabilityResponse#registryId
   */
  readonly registryId?: string;

  /**
   * @schema PutImageTagMutabilityResponse#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema PutImageTagMutabilityResponse#imageTagMutability
   */
  readonly imageTagMutability?: string;

}

/**
 * @schema PutLifecyclePolicyRequest
 */
export interface PutLifecyclePolicyRequest {
  /**
   * @schema PutLifecyclePolicyRequest#registryId
   */
  readonly registryId?: string;

  /**
   * @schema PutLifecyclePolicyRequest#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema PutLifecyclePolicyRequest#lifecyclePolicyText
   */
  readonly lifecyclePolicyText: string;

}

/**
 * @schema PutLifecyclePolicyResponse
 */
export interface PutLifecyclePolicyResponse {
  /**
   * @schema PutLifecyclePolicyResponse#registryId
   */
  readonly registryId?: string;

  /**
   * @schema PutLifecyclePolicyResponse#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema PutLifecyclePolicyResponse#lifecyclePolicyText
   */
  readonly lifecyclePolicyText?: string;

}

/**
 * @schema SetRepositoryPolicyRequest
 */
export interface SetRepositoryPolicyRequest {
  /**
   * @schema SetRepositoryPolicyRequest#registryId
   */
  readonly registryId?: string;

  /**
   * @schema SetRepositoryPolicyRequest#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema SetRepositoryPolicyRequest#policyText
   */
  readonly policyText: string;

  /**
   * @schema SetRepositoryPolicyRequest#force
   */
  readonly force?: boolean;

}

/**
 * @schema SetRepositoryPolicyResponse
 */
export interface SetRepositoryPolicyResponse {
  /**
   * @schema SetRepositoryPolicyResponse#registryId
   */
  readonly registryId?: string;

  /**
   * @schema SetRepositoryPolicyResponse#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema SetRepositoryPolicyResponse#policyText
   */
  readonly policyText?: string;

}

/**
 * @schema StartImageScanRequest
 */
export interface StartImageScanRequest {
  /**
   * @schema StartImageScanRequest#registryId
   */
  readonly registryId?: string;

  /**
   * @schema StartImageScanRequest#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema StartImageScanRequest#imageId
   */
  readonly imageId: ImageIdentifier;

}

/**
 * @schema StartImageScanResponse
 */
export interface StartImageScanResponse {
  /**
   * @schema StartImageScanResponse#registryId
   */
  readonly registryId?: string;

  /**
   * @schema StartImageScanResponse#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema StartImageScanResponse#imageId
   */
  readonly imageId?: ImageIdentifier;

  /**
   * @schema StartImageScanResponse#imageScanStatus
   */
  readonly imageScanStatus?: ImageScanStatus;

}

/**
 * @schema StartLifecyclePolicyPreviewRequest
 */
export interface StartLifecyclePolicyPreviewRequest {
  /**
   * @schema StartLifecyclePolicyPreviewRequest#registryId
   */
  readonly registryId?: string;

  /**
   * @schema StartLifecyclePolicyPreviewRequest#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema StartLifecyclePolicyPreviewRequest#lifecyclePolicyText
   */
  readonly lifecyclePolicyText?: string;

}

/**
 * @schema StartLifecyclePolicyPreviewResponse
 */
export interface StartLifecyclePolicyPreviewResponse {
  /**
   * @schema StartLifecyclePolicyPreviewResponse#registryId
   */
  readonly registryId?: string;

  /**
   * @schema StartLifecyclePolicyPreviewResponse#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema StartLifecyclePolicyPreviewResponse#lifecyclePolicyText
   */
  readonly lifecyclePolicyText?: string;

  /**
   * @schema StartLifecyclePolicyPreviewResponse#status
   */
  readonly status?: string;

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
  readonly tags: Tag[];

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
 * @schema UploadLayerPartRequest
 */
export interface UploadLayerPartRequest {
  /**
   * @schema UploadLayerPartRequest#registryId
   */
  readonly registryId?: string;

  /**
   * @schema UploadLayerPartRequest#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema UploadLayerPartRequest#uploadId
   */
  readonly uploadId: string;

  /**
   * @schema UploadLayerPartRequest#partFirstByte
   */
  readonly partFirstByte: number;

  /**
   * @schema UploadLayerPartRequest#partLastByte
   */
  readonly partLastByte: number;

  /**
   * @schema UploadLayerPartRequest#layerPartBlob
   */
  readonly layerPartBlob: any;

}

/**
 * @schema UploadLayerPartResponse
 */
export interface UploadLayerPartResponse {
  /**
   * @schema UploadLayerPartResponse#registryId
   */
  readonly registryId?: string;

  /**
   * @schema UploadLayerPartResponse#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema UploadLayerPartResponse#uploadId
   */
  readonly uploadId?: string;

  /**
   * @schema UploadLayerPartResponse#lastByteReceived
   */
  readonly lastByteReceived?: number;

}

/**
 * @schema Layer
 */
export interface Layer {
  /**
   * @schema Layer#layerDigest
   */
  readonly layerDigest?: string;

  /**
   * @schema Layer#layerAvailability
   */
  readonly layerAvailability?: string;

  /**
   * @schema Layer#layerSize
   */
  readonly layerSize?: number;

  /**
   * @schema Layer#mediaType
   */
  readonly mediaType?: string;

}

/**
 * @schema LayerFailure
 */
export interface LayerFailure {
  /**
   * @schema LayerFailure#layerDigest
   */
  readonly layerDigest?: string;

  /**
   * @schema LayerFailure#failureCode
   */
  readonly failureCode?: string;

  /**
   * @schema LayerFailure#failureReason
   */
  readonly failureReason?: string;

}

/**
 * @schema ImageIdentifier
 */
export interface ImageIdentifier {
  /**
   * @schema ImageIdentifier#imageDigest
   */
  readonly imageDigest?: string;

  /**
   * @schema ImageIdentifier#imageTag
   */
  readonly imageTag?: string;

}

/**
 * @schema ImageFailure
 */
export interface ImageFailure {
  /**
   * @schema ImageFailure#imageId
   */
  readonly imageId?: ImageIdentifier;

  /**
   * @schema ImageFailure#failureCode
   */
  readonly failureCode?: string;

  /**
   * @schema ImageFailure#failureReason
   */
  readonly failureReason?: string;

}

/**
 * @schema Image
 */
export interface Image {
  /**
   * @schema Image#registryId
   */
  readonly registryId?: string;

  /**
   * @schema Image#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema Image#imageId
   */
  readonly imageId?: ImageIdentifier;

  /**
   * @schema Image#imageManifest
   */
  readonly imageManifest?: string;

  /**
   * @schema Image#imageManifestMediaType
   */
  readonly imageManifestMediaType?: string;

}

/**
 * @schema Tag
 */
export interface Tag {
  /**
   * @schema Tag#Key
   */
  readonly key?: string;

  /**
   * @schema Tag#Value
   */
  readonly value?: string;

}

/**
 * @schema ImageScanningConfiguration
 */
export interface ImageScanningConfiguration {
  /**
   * @schema ImageScanningConfiguration#scanOnPush
   */
  readonly scanOnPush?: boolean;

}

/**
 * @schema EncryptionConfiguration
 */
export interface EncryptionConfiguration {
  /**
   * @schema EncryptionConfiguration#encryptionType
   */
  readonly encryptionType: string;

  /**
   * @schema EncryptionConfiguration#kmsKey
   */
  readonly kmsKey?: string;

}

/**
 * @schema Repository
 */
export interface Repository {
  /**
   * @schema Repository#repositoryArn
   */
  readonly repositoryArn?: string;

  /**
   * @schema Repository#registryId
   */
  readonly registryId?: string;

  /**
   * @schema Repository#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema Repository#repositoryUri
   */
  readonly repositoryUri?: string;

  /**
   * @schema Repository#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema Repository#imageTagMutability
   */
  readonly imageTagMutability?: string;

  /**
   * @schema Repository#imageScanningConfiguration
   */
  readonly imageScanningConfiguration?: ImageScanningConfiguration;

  /**
   * @schema Repository#encryptionConfiguration
   */
  readonly encryptionConfiguration?: EncryptionConfiguration;

}

/**
 * @schema ImageScanStatus
 */
export interface ImageScanStatus {
  /**
   * @schema ImageScanStatus#status
   */
  readonly status?: string;

  /**
   * @schema ImageScanStatus#description
   */
  readonly description?: string;

}

/**
 * @schema ImageScanFindings
 */
export interface ImageScanFindings {
  /**
   * @schema ImageScanFindings#imageScanCompletedAt
   */
  readonly imageScanCompletedAt?: string;

  /**
   * @schema ImageScanFindings#vulnerabilitySourceUpdatedAt
   */
  readonly vulnerabilitySourceUpdatedAt?: string;

  /**
   * @schema ImageScanFindings#findings
   */
  readonly findings?: ImageScanFinding[];

  /**
   * @schema ImageScanFindings#findingSeverityCounts
   */
  readonly findingSeverityCounts?: { [key: string]: number };

}

/**
 * @schema DescribeImagesFilter
 */
export interface DescribeImagesFilter {
  /**
   * @schema DescribeImagesFilter#tagStatus
   */
  readonly tagStatus?: string;

}

/**
 * @schema ImageDetail
 */
export interface ImageDetail {
  /**
   * @schema ImageDetail#registryId
   */
  readonly registryId?: string;

  /**
   * @schema ImageDetail#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema ImageDetail#imageDigest
   */
  readonly imageDigest?: string;

  /**
   * @schema ImageDetail#imageTags
   */
  readonly imageTags?: string[];

  /**
   * @schema ImageDetail#imageSizeInBytes
   */
  readonly imageSizeInBytes?: number;

  /**
   * @schema ImageDetail#imagePushedAt
   */
  readonly imagePushedAt?: string;

  /**
   * @schema ImageDetail#imageScanStatus
   */
  readonly imageScanStatus?: ImageScanStatus;

  /**
   * @schema ImageDetail#imageScanFindingsSummary
   */
  readonly imageScanFindingsSummary?: ImageScanFindingsSummary;

  /**
   * @schema ImageDetail#imageManifestMediaType
   */
  readonly imageManifestMediaType?: string;

  /**
   * @schema ImageDetail#artifactMediaType
   */
  readonly artifactMediaType?: string;

}

/**
 * @schema AuthorizationData
 */
export interface AuthorizationData {
  /**
   * @schema AuthorizationData#authorizationToken
   */
  readonly authorizationToken?: string;

  /**
   * @schema AuthorizationData#expiresAt
   */
  readonly expiresAt?: string;

  /**
   * @schema AuthorizationData#proxyEndpoint
   */
  readonly proxyEndpoint?: string;

}

/**
 * @schema LifecyclePolicyPreviewFilter
 */
export interface LifecyclePolicyPreviewFilter {
  /**
   * @schema LifecyclePolicyPreviewFilter#tagStatus
   */
  readonly tagStatus?: string;

}

/**
 * @schema LifecyclePolicyPreviewResult
 */
export interface LifecyclePolicyPreviewResult {
  /**
   * @schema LifecyclePolicyPreviewResult#imageTags
   */
  readonly imageTags?: string[];

  /**
   * @schema LifecyclePolicyPreviewResult#imageDigest
   */
  readonly imageDigest?: string;

  /**
   * @schema LifecyclePolicyPreviewResult#imagePushedAt
   */
  readonly imagePushedAt?: string;

  /**
   * @schema LifecyclePolicyPreviewResult#action
   */
  readonly action?: LifecyclePolicyRuleAction;

  /**
   * @schema LifecyclePolicyPreviewResult#appliedRulePriority
   */
  readonly appliedRulePriority?: number;

}

/**
 * @schema LifecyclePolicyPreviewSummary
 */
export interface LifecyclePolicyPreviewSummary {
  /**
   * @schema LifecyclePolicyPreviewSummary#expiringImageTotalCount
   */
  readonly expiringImageTotalCount?: number;

}

/**
 * @schema ListImagesFilter
 */
export interface ListImagesFilter {
  /**
   * @schema ListImagesFilter#tagStatus
   */
  readonly tagStatus?: string;

}

/**
 * @schema ImageScanFinding
 */
export interface ImageScanFinding {
  /**
   * @schema ImageScanFinding#name
   */
  readonly name?: string;

  /**
   * @schema ImageScanFinding#description
   */
  readonly description?: string;

  /**
   * @schema ImageScanFinding#uri
   */
  readonly uri?: string;

  /**
   * @schema ImageScanFinding#severity
   */
  readonly severity?: string;

  /**
   * @schema ImageScanFinding#attributes
   */
  readonly attributes?: Attribute[];

}

/**
 * @schema ImageScanFindingsSummary
 */
export interface ImageScanFindingsSummary {
  /**
   * @schema ImageScanFindingsSummary#imageScanCompletedAt
   */
  readonly imageScanCompletedAt?: string;

  /**
   * @schema ImageScanFindingsSummary#vulnerabilitySourceUpdatedAt
   */
  readonly vulnerabilitySourceUpdatedAt?: string;

  /**
   * @schema ImageScanFindingsSummary#findingSeverityCounts
   */
  readonly findingSeverityCounts?: { [key: string]: number };

}

/**
 * @schema LifecyclePolicyRuleAction
 */
export interface LifecyclePolicyRuleAction {
  /**
   * @schema LifecyclePolicyRuleAction#type
   */
  readonly type?: string;

}

/**
 * @schema Attribute
 */
export interface Attribute {
  /**
   * @schema Attribute#key
   */
  readonly key: string;

  /**
   * @schema Attribute#value
   */
  readonly value?: string;

}
