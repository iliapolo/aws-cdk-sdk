/**
 * @schema EcrBatchCheckLayerAvailabilityRequest
 */
export interface EcrBatchCheckLayerAvailabilityRequest {
  /**
   * @schema EcrBatchCheckLayerAvailabilityRequest#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrBatchCheckLayerAvailabilityRequest#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema EcrBatchCheckLayerAvailabilityRequest#layerDigests
   */
  readonly layerDigests: string[];

}

/**
 * @schema EcrBatchCheckLayerAvailabilityResponse
 */
export interface EcrBatchCheckLayerAvailabilityResponse {
  /**
   * @schema EcrBatchCheckLayerAvailabilityResponse#layers
   */
  readonly layers?: EcrLayer[];

  /**
   * @schema EcrBatchCheckLayerAvailabilityResponse#failures
   */
  readonly failures?: EcrLayerFailure[];

}

/**
 * @schema EcrBatchDeleteImageRequest
 */
export interface EcrBatchDeleteImageRequest {
  /**
   * @schema EcrBatchDeleteImageRequest#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrBatchDeleteImageRequest#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema EcrBatchDeleteImageRequest#imageIds
   */
  readonly imageIds: EcrImageIdentifier[];

}

/**
 * @schema EcrBatchDeleteImageResponse
 */
export interface EcrBatchDeleteImageResponse {
  /**
   * @schema EcrBatchDeleteImageResponse#imageIds
   */
  readonly imageIds?: EcrImageIdentifier[];

  /**
   * @schema EcrBatchDeleteImageResponse#failures
   */
  readonly failures?: EcrImageFailure[];

}

/**
 * @schema EcrBatchGetImageRequest
 */
export interface EcrBatchGetImageRequest {
  /**
   * @schema EcrBatchGetImageRequest#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrBatchGetImageRequest#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema EcrBatchGetImageRequest#imageIds
   */
  readonly imageIds: EcrImageIdentifier[];

  /**
   * @schema EcrBatchGetImageRequest#acceptedMediaTypes
   */
  readonly acceptedMediaTypes?: string[];

}

/**
 * @schema EcrBatchGetImageResponse
 */
export interface EcrBatchGetImageResponse {
  /**
   * @schema EcrBatchGetImageResponse#images
   */
  readonly images?: EcrImage[];

  /**
   * @schema EcrBatchGetImageResponse#failures
   */
  readonly failures?: EcrImageFailure[];

}

/**
 * @schema EcrCompleteLayerUploadRequest
 */
export interface EcrCompleteLayerUploadRequest {
  /**
   * @schema EcrCompleteLayerUploadRequest#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrCompleteLayerUploadRequest#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema EcrCompleteLayerUploadRequest#uploadId
   */
  readonly uploadId: string;

  /**
   * @schema EcrCompleteLayerUploadRequest#layerDigests
   */
  readonly layerDigests: string[];

}

/**
 * @schema EcrCompleteLayerUploadResponse
 */
export interface EcrCompleteLayerUploadResponse {
  /**
   * @schema EcrCompleteLayerUploadResponse#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrCompleteLayerUploadResponse#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema EcrCompleteLayerUploadResponse#uploadId
   */
  readonly uploadId?: string;

  /**
   * @schema EcrCompleteLayerUploadResponse#layerDigest
   */
  readonly layerDigest?: string;

}

/**
 * @schema EcrCreateRepositoryRequest
 */
export interface EcrCreateRepositoryRequest {
  /**
   * @schema EcrCreateRepositoryRequest#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema EcrCreateRepositoryRequest#tags
   */
  readonly tags?: EcrTag[];

  /**
   * @schema EcrCreateRepositoryRequest#imageTagMutability
   */
  readonly imageTagMutability?: string;

  /**
   * @schema EcrCreateRepositoryRequest#imageScanningConfiguration
   */
  readonly imageScanningConfiguration?: EcrImageScanningConfiguration;

  /**
   * @schema EcrCreateRepositoryRequest#encryptionConfiguration
   */
  readonly encryptionConfiguration?: EcrEncryptionConfiguration;

}

/**
 * @schema EcrCreateRepositoryResponse
 */
export interface EcrCreateRepositoryResponse {
  /**
   * @schema EcrCreateRepositoryResponse#repository
   */
  readonly repository?: EcrRepository;

}

/**
 * @schema EcrDeleteLifecyclePolicyRequest
 */
export interface EcrDeleteLifecyclePolicyRequest {
  /**
   * @schema EcrDeleteLifecyclePolicyRequest#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrDeleteLifecyclePolicyRequest#repositoryName
   */
  readonly repositoryName: string;

}

/**
 * @schema EcrDeleteLifecyclePolicyResponse
 */
export interface EcrDeleteLifecyclePolicyResponse {
  /**
   * @schema EcrDeleteLifecyclePolicyResponse#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrDeleteLifecyclePolicyResponse#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema EcrDeleteLifecyclePolicyResponse#lifecyclePolicyText
   */
  readonly lifecyclePolicyText?: string;

  /**
   * @schema EcrDeleteLifecyclePolicyResponse#lastEvaluatedAt
   */
  readonly lastEvaluatedAt?: string;

}

/**
 * @schema EcrDeleteRepositoryRequest
 */
export interface EcrDeleteRepositoryRequest {
  /**
   * @schema EcrDeleteRepositoryRequest#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrDeleteRepositoryRequest#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema EcrDeleteRepositoryRequest#force
   */
  readonly force?: boolean;

}

/**
 * @schema EcrDeleteRepositoryResponse
 */
export interface EcrDeleteRepositoryResponse {
  /**
   * @schema EcrDeleteRepositoryResponse#repository
   */
  readonly repository?: EcrRepository;

}

/**
 * @schema EcrDeleteRepositoryPolicyRequest
 */
export interface EcrDeleteRepositoryPolicyRequest {
  /**
   * @schema EcrDeleteRepositoryPolicyRequest#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrDeleteRepositoryPolicyRequest#repositoryName
   */
  readonly repositoryName: string;

}

/**
 * @schema EcrDeleteRepositoryPolicyResponse
 */
export interface EcrDeleteRepositoryPolicyResponse {
  /**
   * @schema EcrDeleteRepositoryPolicyResponse#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrDeleteRepositoryPolicyResponse#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema EcrDeleteRepositoryPolicyResponse#policyText
   */
  readonly policyText?: string;

}

/**
 * @schema EcrDescribeImageScanFindingsRequest
 */
export interface EcrDescribeImageScanFindingsRequest {
  /**
   * @schema EcrDescribeImageScanFindingsRequest#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrDescribeImageScanFindingsRequest#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema EcrDescribeImageScanFindingsRequest#imageId
   */
  readonly imageId: EcrImageIdentifier;

  /**
   * @schema EcrDescribeImageScanFindingsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema EcrDescribeImageScanFindingsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema EcrDescribeImageScanFindingsResponse
 */
export interface EcrDescribeImageScanFindingsResponse {
  /**
   * @schema EcrDescribeImageScanFindingsResponse#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrDescribeImageScanFindingsResponse#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema EcrDescribeImageScanFindingsResponse#imageId
   */
  readonly imageId?: EcrImageIdentifier;

  /**
   * @schema EcrDescribeImageScanFindingsResponse#imageScanStatus
   */
  readonly imageScanStatus?: EcrImageScanStatus;

  /**
   * @schema EcrDescribeImageScanFindingsResponse#imageScanFindings
   */
  readonly imageScanFindings?: EcrImageScanFindings;

  /**
   * @schema EcrDescribeImageScanFindingsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema EcrDescribeImagesRequest
 */
export interface EcrDescribeImagesRequest {
  /**
   * @schema EcrDescribeImagesRequest#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrDescribeImagesRequest#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema EcrDescribeImagesRequest#imageIds
   */
  readonly imageIds?: EcrImageIdentifier[];

  /**
   * @schema EcrDescribeImagesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema EcrDescribeImagesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema EcrDescribeImagesRequest#filter
   */
  readonly filter?: EcrDescribeImagesFilter;

}

/**
 * @schema EcrDescribeImagesResponse
 */
export interface EcrDescribeImagesResponse {
  /**
   * @schema EcrDescribeImagesResponse#imageDetails
   */
  readonly imageDetails?: EcrImageDetail[];

  /**
   * @schema EcrDescribeImagesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema EcrDescribeRepositoriesRequest
 */
export interface EcrDescribeRepositoriesRequest {
  /**
   * @schema EcrDescribeRepositoriesRequest#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrDescribeRepositoriesRequest#repositoryNames
   */
  readonly repositoryNames?: string[];

  /**
   * @schema EcrDescribeRepositoriesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema EcrDescribeRepositoriesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema EcrDescribeRepositoriesResponse
 */
export interface EcrDescribeRepositoriesResponse {
  /**
   * @schema EcrDescribeRepositoriesResponse#repositories
   */
  readonly repositories?: EcrRepository[];

  /**
   * @schema EcrDescribeRepositoriesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema EcrGetAuthorizationTokenRequest
 */
export interface EcrGetAuthorizationTokenRequest {
  /**
   * @schema EcrGetAuthorizationTokenRequest#registryIds
   */
  readonly registryIds?: string[];

}

/**
 * @schema EcrGetAuthorizationTokenResponse
 */
export interface EcrGetAuthorizationTokenResponse {
  /**
   * @schema EcrGetAuthorizationTokenResponse#authorizationData
   */
  readonly authorizationData?: EcrAuthorizationData[];

}

/**
 * @schema EcrGetDownloadUrlForLayerRequest
 */
export interface EcrGetDownloadUrlForLayerRequest {
  /**
   * @schema EcrGetDownloadUrlForLayerRequest#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrGetDownloadUrlForLayerRequest#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema EcrGetDownloadUrlForLayerRequest#layerDigest
   */
  readonly layerDigest: string;

}

/**
 * @schema EcrGetDownloadUrlForLayerResponse
 */
export interface EcrGetDownloadUrlForLayerResponse {
  /**
   * @schema EcrGetDownloadUrlForLayerResponse#downloadUrl
   */
  readonly downloadUrl?: string;

  /**
   * @schema EcrGetDownloadUrlForLayerResponse#layerDigest
   */
  readonly layerDigest?: string;

}

/**
 * @schema EcrGetLifecyclePolicyRequest
 */
export interface EcrGetLifecyclePolicyRequest {
  /**
   * @schema EcrGetLifecyclePolicyRequest#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrGetLifecyclePolicyRequest#repositoryName
   */
  readonly repositoryName: string;

}

/**
 * @schema EcrGetLifecyclePolicyResponse
 */
export interface EcrGetLifecyclePolicyResponse {
  /**
   * @schema EcrGetLifecyclePolicyResponse#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrGetLifecyclePolicyResponse#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema EcrGetLifecyclePolicyResponse#lifecyclePolicyText
   */
  readonly lifecyclePolicyText?: string;

  /**
   * @schema EcrGetLifecyclePolicyResponse#lastEvaluatedAt
   */
  readonly lastEvaluatedAt?: string;

}

/**
 * @schema EcrGetLifecyclePolicyPreviewRequest
 */
export interface EcrGetLifecyclePolicyPreviewRequest {
  /**
   * @schema EcrGetLifecyclePolicyPreviewRequest#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrGetLifecyclePolicyPreviewRequest#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema EcrGetLifecyclePolicyPreviewRequest#imageIds
   */
  readonly imageIds?: EcrImageIdentifier[];

  /**
   * @schema EcrGetLifecyclePolicyPreviewRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema EcrGetLifecyclePolicyPreviewRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema EcrGetLifecyclePolicyPreviewRequest#filter
   */
  readonly filter?: EcrLifecyclePolicyPreviewFilter;

}

/**
 * @schema EcrGetLifecyclePolicyPreviewResponse
 */
export interface EcrGetLifecyclePolicyPreviewResponse {
  /**
   * @schema EcrGetLifecyclePolicyPreviewResponse#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrGetLifecyclePolicyPreviewResponse#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema EcrGetLifecyclePolicyPreviewResponse#lifecyclePolicyText
   */
  readonly lifecyclePolicyText?: string;

  /**
   * @schema EcrGetLifecyclePolicyPreviewResponse#status
   */
  readonly status?: string;

  /**
   * @schema EcrGetLifecyclePolicyPreviewResponse#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema EcrGetLifecyclePolicyPreviewResponse#previewResults
   */
  readonly previewResults?: EcrLifecyclePolicyPreviewResult[];

  /**
   * @schema EcrGetLifecyclePolicyPreviewResponse#summary
   */
  readonly summary?: EcrLifecyclePolicyPreviewSummary;

}

/**
 * @schema EcrGetRepositoryPolicyRequest
 */
export interface EcrGetRepositoryPolicyRequest {
  /**
   * @schema EcrGetRepositoryPolicyRequest#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrGetRepositoryPolicyRequest#repositoryName
   */
  readonly repositoryName: string;

}

/**
 * @schema EcrGetRepositoryPolicyResponse
 */
export interface EcrGetRepositoryPolicyResponse {
  /**
   * @schema EcrGetRepositoryPolicyResponse#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrGetRepositoryPolicyResponse#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema EcrGetRepositoryPolicyResponse#policyText
   */
  readonly policyText?: string;

}

/**
 * @schema EcrInitiateLayerUploadRequest
 */
export interface EcrInitiateLayerUploadRequest {
  /**
   * @schema EcrInitiateLayerUploadRequest#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrInitiateLayerUploadRequest#repositoryName
   */
  readonly repositoryName: string;

}

/**
 * @schema EcrInitiateLayerUploadResponse
 */
export interface EcrInitiateLayerUploadResponse {
  /**
   * @schema EcrInitiateLayerUploadResponse#uploadId
   */
  readonly uploadId?: string;

  /**
   * @schema EcrInitiateLayerUploadResponse#partSize
   */
  readonly partSize?: number;

}

/**
 * @schema EcrListImagesRequest
 */
export interface EcrListImagesRequest {
  /**
   * @schema EcrListImagesRequest#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrListImagesRequest#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema EcrListImagesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema EcrListImagesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema EcrListImagesRequest#filter
   */
  readonly filter?: EcrListImagesFilter;

}

/**
 * @schema EcrListImagesResponse
 */
export interface EcrListImagesResponse {
  /**
   * @schema EcrListImagesResponse#imageIds
   */
  readonly imageIds?: EcrImageIdentifier[];

  /**
   * @schema EcrListImagesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema EcrListTagsForResourceRequest
 */
export interface EcrListTagsForResourceRequest {
  /**
   * @schema EcrListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema EcrListTagsForResourceResponse
 */
export interface EcrListTagsForResourceResponse {
  /**
   * @schema EcrListTagsForResourceResponse#tags
   */
  readonly tags?: EcrTag[];

}

/**
 * @schema EcrPutImageRequest
 */
export interface EcrPutImageRequest {
  /**
   * @schema EcrPutImageRequest#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrPutImageRequest#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema EcrPutImageRequest#imageManifest
   */
  readonly imageManifest: string;

  /**
   * @schema EcrPutImageRequest#imageManifestMediaType
   */
  readonly imageManifestMediaType?: string;

  /**
   * @schema EcrPutImageRequest#imageTag
   */
  readonly imageTag?: string;

  /**
   * @schema EcrPutImageRequest#imageDigest
   */
  readonly imageDigest?: string;

}

/**
 * @schema EcrPutImageResponse
 */
export interface EcrPutImageResponse {
  /**
   * @schema EcrPutImageResponse#image
   */
  readonly image?: EcrImage;

}

/**
 * @schema EcrPutImageScanningConfigurationRequest
 */
export interface EcrPutImageScanningConfigurationRequest {
  /**
   * @schema EcrPutImageScanningConfigurationRequest#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrPutImageScanningConfigurationRequest#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema EcrPutImageScanningConfigurationRequest#imageScanningConfiguration
   */
  readonly imageScanningConfiguration: EcrImageScanningConfiguration;

}

/**
 * @schema EcrPutImageScanningConfigurationResponse
 */
export interface EcrPutImageScanningConfigurationResponse {
  /**
   * @schema EcrPutImageScanningConfigurationResponse#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrPutImageScanningConfigurationResponse#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema EcrPutImageScanningConfigurationResponse#imageScanningConfiguration
   */
  readonly imageScanningConfiguration?: EcrImageScanningConfiguration;

}

/**
 * @schema EcrPutImageTagMutabilityRequest
 */
export interface EcrPutImageTagMutabilityRequest {
  /**
   * @schema EcrPutImageTagMutabilityRequest#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrPutImageTagMutabilityRequest#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema EcrPutImageTagMutabilityRequest#imageTagMutability
   */
  readonly imageTagMutability: string;

}

/**
 * @schema EcrPutImageTagMutabilityResponse
 */
export interface EcrPutImageTagMutabilityResponse {
  /**
   * @schema EcrPutImageTagMutabilityResponse#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrPutImageTagMutabilityResponse#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema EcrPutImageTagMutabilityResponse#imageTagMutability
   */
  readonly imageTagMutability?: string;

}

/**
 * @schema EcrPutLifecyclePolicyRequest
 */
export interface EcrPutLifecyclePolicyRequest {
  /**
   * @schema EcrPutLifecyclePolicyRequest#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrPutLifecyclePolicyRequest#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema EcrPutLifecyclePolicyRequest#lifecyclePolicyText
   */
  readonly lifecyclePolicyText: string;

}

/**
 * @schema EcrPutLifecyclePolicyResponse
 */
export interface EcrPutLifecyclePolicyResponse {
  /**
   * @schema EcrPutLifecyclePolicyResponse#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrPutLifecyclePolicyResponse#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema EcrPutLifecyclePolicyResponse#lifecyclePolicyText
   */
  readonly lifecyclePolicyText?: string;

}

/**
 * @schema EcrSetRepositoryPolicyRequest
 */
export interface EcrSetRepositoryPolicyRequest {
  /**
   * @schema EcrSetRepositoryPolicyRequest#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrSetRepositoryPolicyRequest#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema EcrSetRepositoryPolicyRequest#policyText
   */
  readonly policyText: string;

  /**
   * @schema EcrSetRepositoryPolicyRequest#force
   */
  readonly force?: boolean;

}

/**
 * @schema EcrSetRepositoryPolicyResponse
 */
export interface EcrSetRepositoryPolicyResponse {
  /**
   * @schema EcrSetRepositoryPolicyResponse#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrSetRepositoryPolicyResponse#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema EcrSetRepositoryPolicyResponse#policyText
   */
  readonly policyText?: string;

}

/**
 * @schema EcrStartImageScanRequest
 */
export interface EcrStartImageScanRequest {
  /**
   * @schema EcrStartImageScanRequest#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrStartImageScanRequest#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema EcrStartImageScanRequest#imageId
   */
  readonly imageId: EcrImageIdentifier;

}

/**
 * @schema EcrStartImageScanResponse
 */
export interface EcrStartImageScanResponse {
  /**
   * @schema EcrStartImageScanResponse#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrStartImageScanResponse#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema EcrStartImageScanResponse#imageId
   */
  readonly imageId?: EcrImageIdentifier;

  /**
   * @schema EcrStartImageScanResponse#imageScanStatus
   */
  readonly imageScanStatus?: EcrImageScanStatus;

}

/**
 * @schema EcrStartLifecyclePolicyPreviewRequest
 */
export interface EcrStartLifecyclePolicyPreviewRequest {
  /**
   * @schema EcrStartLifecyclePolicyPreviewRequest#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrStartLifecyclePolicyPreviewRequest#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema EcrStartLifecyclePolicyPreviewRequest#lifecyclePolicyText
   */
  readonly lifecyclePolicyText?: string;

}

/**
 * @schema EcrStartLifecyclePolicyPreviewResponse
 */
export interface EcrStartLifecyclePolicyPreviewResponse {
  /**
   * @schema EcrStartLifecyclePolicyPreviewResponse#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrStartLifecyclePolicyPreviewResponse#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema EcrStartLifecyclePolicyPreviewResponse#lifecyclePolicyText
   */
  readonly lifecyclePolicyText?: string;

  /**
   * @schema EcrStartLifecyclePolicyPreviewResponse#status
   */
  readonly status?: string;

}

/**
 * @schema EcrTagResourceRequest
 */
export interface EcrTagResourceRequest {
  /**
   * @schema EcrTagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema EcrTagResourceRequest#tags
   */
  readonly tags: EcrTag[];

}

/**
 * @schema EcrTagResourceResponse
 */
export interface EcrTagResourceResponse {
}

/**
 * @schema EcrUntagResourceRequest
 */
export interface EcrUntagResourceRequest {
  /**
   * @schema EcrUntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema EcrUntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema EcrUntagResourceResponse
 */
export interface EcrUntagResourceResponse {
}

/**
 * @schema EcrUploadLayerPartRequest
 */
export interface EcrUploadLayerPartRequest {
  /**
   * @schema EcrUploadLayerPartRequest#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrUploadLayerPartRequest#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema EcrUploadLayerPartRequest#uploadId
   */
  readonly uploadId: string;

  /**
   * @schema EcrUploadLayerPartRequest#partFirstByte
   */
  readonly partFirstByte: number;

  /**
   * @schema EcrUploadLayerPartRequest#partLastByte
   */
  readonly partLastByte: number;

  /**
   * @schema EcrUploadLayerPartRequest#layerPartBlob
   */
  readonly layerPartBlob: any;

}

/**
 * @schema EcrUploadLayerPartResponse
 */
export interface EcrUploadLayerPartResponse {
  /**
   * @schema EcrUploadLayerPartResponse#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrUploadLayerPartResponse#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema EcrUploadLayerPartResponse#uploadId
   */
  readonly uploadId?: string;

  /**
   * @schema EcrUploadLayerPartResponse#lastByteReceived
   */
  readonly lastByteReceived?: number;

}

/**
 * @schema EcrLayer
 */
export interface EcrLayer {
  /**
   * @schema EcrLayer#layerDigest
   */
  readonly layerDigest?: string;

  /**
   * @schema EcrLayer#layerAvailability
   */
  readonly layerAvailability?: string;

  /**
   * @schema EcrLayer#layerSize
   */
  readonly layerSize?: number;

  /**
   * @schema EcrLayer#mediaType
   */
  readonly mediaType?: string;

}

/**
 * @schema EcrLayerFailure
 */
export interface EcrLayerFailure {
  /**
   * @schema EcrLayerFailure#layerDigest
   */
  readonly layerDigest?: string;

  /**
   * @schema EcrLayerFailure#failureCode
   */
  readonly failureCode?: string;

  /**
   * @schema EcrLayerFailure#failureReason
   */
  readonly failureReason?: string;

}

/**
 * @schema EcrImageIdentifier
 */
export interface EcrImageIdentifier {
  /**
   * @schema EcrImageIdentifier#imageDigest
   */
  readonly imageDigest?: string;

  /**
   * @schema EcrImageIdentifier#imageTag
   */
  readonly imageTag?: string;

}

/**
 * @schema EcrImageFailure
 */
export interface EcrImageFailure {
  /**
   * @schema EcrImageFailure#imageId
   */
  readonly imageId?: EcrImageIdentifier;

  /**
   * @schema EcrImageFailure#failureCode
   */
  readonly failureCode?: string;

  /**
   * @schema EcrImageFailure#failureReason
   */
  readonly failureReason?: string;

}

/**
 * @schema EcrImage
 */
export interface EcrImage {
  /**
   * @schema EcrImage#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrImage#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema EcrImage#imageId
   */
  readonly imageId?: EcrImageIdentifier;

  /**
   * @schema EcrImage#imageManifest
   */
  readonly imageManifest?: string;

  /**
   * @schema EcrImage#imageManifestMediaType
   */
  readonly imageManifestMediaType?: string;

}

/**
 * @schema EcrTag
 */
export interface EcrTag {
  /**
   * @schema EcrTag#Key
   */
  readonly key?: string;

  /**
   * @schema EcrTag#Value
   */
  readonly value?: string;

}

/**
 * @schema EcrImageScanningConfiguration
 */
export interface EcrImageScanningConfiguration {
  /**
   * @schema EcrImageScanningConfiguration#scanOnPush
   */
  readonly scanOnPush?: boolean;

}

/**
 * @schema EcrEncryptionConfiguration
 */
export interface EcrEncryptionConfiguration {
  /**
   * @schema EcrEncryptionConfiguration#encryptionType
   */
  readonly encryptionType: string;

  /**
   * @schema EcrEncryptionConfiguration#kmsKey
   */
  readonly kmsKey?: string;

}

/**
 * @schema EcrRepository
 */
export interface EcrRepository {
  /**
   * @schema EcrRepository#repositoryArn
   */
  readonly repositoryArn?: string;

  /**
   * @schema EcrRepository#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrRepository#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema EcrRepository#repositoryUri
   */
  readonly repositoryUri?: string;

  /**
   * @schema EcrRepository#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema EcrRepository#imageTagMutability
   */
  readonly imageTagMutability?: string;

  /**
   * @schema EcrRepository#imageScanningConfiguration
   */
  readonly imageScanningConfiguration?: EcrImageScanningConfiguration;

  /**
   * @schema EcrRepository#encryptionConfiguration
   */
  readonly encryptionConfiguration?: EcrEncryptionConfiguration;

}

/**
 * @schema EcrImageScanStatus
 */
export interface EcrImageScanStatus {
  /**
   * @schema EcrImageScanStatus#status
   */
  readonly status?: string;

  /**
   * @schema EcrImageScanStatus#description
   */
  readonly description?: string;

}

/**
 * @schema EcrImageScanFindings
 */
export interface EcrImageScanFindings {
  /**
   * @schema EcrImageScanFindings#imageScanCompletedAt
   */
  readonly imageScanCompletedAt?: string;

  /**
   * @schema EcrImageScanFindings#vulnerabilitySourceUpdatedAt
   */
  readonly vulnerabilitySourceUpdatedAt?: string;

  /**
   * @schema EcrImageScanFindings#findings
   */
  readonly findings?: EcrImageScanFinding[];

  /**
   * @schema EcrImageScanFindings#findingSeverityCounts
   */
  readonly findingSeverityCounts?: { [key: string]: number };

}

/**
 * @schema EcrDescribeImagesFilter
 */
export interface EcrDescribeImagesFilter {
  /**
   * @schema EcrDescribeImagesFilter#tagStatus
   */
  readonly tagStatus?: string;

}

/**
 * @schema EcrImageDetail
 */
export interface EcrImageDetail {
  /**
   * @schema EcrImageDetail#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrImageDetail#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema EcrImageDetail#imageDigest
   */
  readonly imageDigest?: string;

  /**
   * @schema EcrImageDetail#imageTags
   */
  readonly imageTags?: string[];

  /**
   * @schema EcrImageDetail#imageSizeInBytes
   */
  readonly imageSizeInBytes?: number;

  /**
   * @schema EcrImageDetail#imagePushedAt
   */
  readonly imagePushedAt?: string;

  /**
   * @schema EcrImageDetail#imageScanStatus
   */
  readonly imageScanStatus?: EcrImageScanStatus;

  /**
   * @schema EcrImageDetail#imageScanFindingsSummary
   */
  readonly imageScanFindingsSummary?: EcrImageScanFindingsSummary;

  /**
   * @schema EcrImageDetail#imageManifestMediaType
   */
  readonly imageManifestMediaType?: string;

  /**
   * @schema EcrImageDetail#artifactMediaType
   */
  readonly artifactMediaType?: string;

}

/**
 * @schema EcrAuthorizationData
 */
export interface EcrAuthorizationData {
  /**
   * @schema EcrAuthorizationData#authorizationToken
   */
  readonly authorizationToken?: string;

  /**
   * @schema EcrAuthorizationData#expiresAt
   */
  readonly expiresAt?: string;

  /**
   * @schema EcrAuthorizationData#proxyEndpoint
   */
  readonly proxyEndpoint?: string;

}

/**
 * @schema EcrLifecyclePolicyPreviewFilter
 */
export interface EcrLifecyclePolicyPreviewFilter {
  /**
   * @schema EcrLifecyclePolicyPreviewFilter#tagStatus
   */
  readonly tagStatus?: string;

}

/**
 * @schema EcrLifecyclePolicyPreviewResult
 */
export interface EcrLifecyclePolicyPreviewResult {
  /**
   * @schema EcrLifecyclePolicyPreviewResult#imageTags
   */
  readonly imageTags?: string[];

  /**
   * @schema EcrLifecyclePolicyPreviewResult#imageDigest
   */
  readonly imageDigest?: string;

  /**
   * @schema EcrLifecyclePolicyPreviewResult#imagePushedAt
   */
  readonly imagePushedAt?: string;

  /**
   * @schema EcrLifecyclePolicyPreviewResult#action
   */
  readonly action?: EcrLifecyclePolicyRuleAction;

  /**
   * @schema EcrLifecyclePolicyPreviewResult#appliedRulePriority
   */
  readonly appliedRulePriority?: number;

}

/**
 * @schema EcrLifecyclePolicyPreviewSummary
 */
export interface EcrLifecyclePolicyPreviewSummary {
  /**
   * @schema EcrLifecyclePolicyPreviewSummary#expiringImageTotalCount
   */
  readonly expiringImageTotalCount?: number;

}

/**
 * @schema EcrListImagesFilter
 */
export interface EcrListImagesFilter {
  /**
   * @schema EcrListImagesFilter#tagStatus
   */
  readonly tagStatus?: string;

}

/**
 * @schema EcrImageScanFinding
 */
export interface EcrImageScanFinding {
  /**
   * @schema EcrImageScanFinding#name
   */
  readonly name?: string;

  /**
   * @schema EcrImageScanFinding#description
   */
  readonly description?: string;

  /**
   * @schema EcrImageScanFinding#uri
   */
  readonly uri?: string;

  /**
   * @schema EcrImageScanFinding#severity
   */
  readonly severity?: string;

  /**
   * @schema EcrImageScanFinding#attributes
   */
  readonly attributes?: EcrAttribute[];

}

/**
 * @schema EcrImageScanFindingsSummary
 */
export interface EcrImageScanFindingsSummary {
  /**
   * @schema EcrImageScanFindingsSummary#imageScanCompletedAt
   */
  readonly imageScanCompletedAt?: string;

  /**
   * @schema EcrImageScanFindingsSummary#vulnerabilitySourceUpdatedAt
   */
  readonly vulnerabilitySourceUpdatedAt?: string;

  /**
   * @schema EcrImageScanFindingsSummary#findingSeverityCounts
   */
  readonly findingSeverityCounts?: { [key: string]: number };

}

/**
 * @schema EcrLifecyclePolicyRuleAction
 */
export interface EcrLifecyclePolicyRuleAction {
  /**
   * @schema EcrLifecyclePolicyRuleAction#type
   */
  readonly type?: string;

}

/**
 * @schema EcrAttribute
 */
export interface EcrAttribute {
  /**
   * @schema EcrAttribute#key
   */
  readonly key: string;

  /**
   * @schema EcrAttribute#value
   */
  readonly value?: string;

}
