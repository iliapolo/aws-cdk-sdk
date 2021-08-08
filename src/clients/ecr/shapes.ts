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
 * Converts an object of type 'EcrBatchCheckLayerAvailabilityRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrBatchCheckLayerAvailabilityRequest(obj: EcrBatchCheckLayerAvailabilityRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'registryId': obj.registryId,
    'repositoryName': obj.repositoryName,
    'layerDigests': obj.layerDigests?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrBatchCheckLayerAvailabilityResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrBatchCheckLayerAvailabilityResponse(obj: EcrBatchCheckLayerAvailabilityResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'layers': obj.layers?.map(y => toJson_EcrLayer(y)),
    'failures': obj.failures?.map(y => toJson_EcrLayerFailure(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrBatchDeleteImageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrBatchDeleteImageRequest(obj: EcrBatchDeleteImageRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'registryId': obj.registryId,
    'repositoryName': obj.repositoryName,
    'imageIds': obj.imageIds?.map(y => toJson_EcrImageIdentifier(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrBatchDeleteImageResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrBatchDeleteImageResponse(obj: EcrBatchDeleteImageResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'imageIds': obj.imageIds?.map(y => toJson_EcrImageIdentifier(y)),
    'failures': obj.failures?.map(y => toJson_EcrImageFailure(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrBatchGetImageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrBatchGetImageRequest(obj: EcrBatchGetImageRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'registryId': obj.registryId,
    'repositoryName': obj.repositoryName,
    'imageIds': obj.imageIds?.map(y => toJson_EcrImageIdentifier(y)),
    'acceptedMediaTypes': obj.acceptedMediaTypes?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrBatchGetImageResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrBatchGetImageResponse(obj: EcrBatchGetImageResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'images': obj.images?.map(y => toJson_EcrImage(y)),
    'failures': obj.failures?.map(y => toJson_EcrImageFailure(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrCompleteLayerUploadRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrCompleteLayerUploadRequest(obj: EcrCompleteLayerUploadRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'registryId': obj.registryId,
    'repositoryName': obj.repositoryName,
    'uploadId': obj.uploadId,
    'layerDigests': obj.layerDigests?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrCompleteLayerUploadResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrCompleteLayerUploadResponse(obj: EcrCompleteLayerUploadResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'registryId': obj.registryId,
    'repositoryName': obj.repositoryName,
    'uploadId': obj.uploadId,
    'layerDigest': obj.layerDigest,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrCreateRepositoryRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrCreateRepositoryRequest(obj: EcrCreateRepositoryRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repositoryName': obj.repositoryName,
    'tags': obj.tags?.map(y => toJson_EcrTag(y)),
    'imageTagMutability': obj.imageTagMutability,
    'imageScanningConfiguration': toJson_EcrImageScanningConfiguration(obj.imageScanningConfiguration),
    'encryptionConfiguration': toJson_EcrEncryptionConfiguration(obj.encryptionConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrCreateRepositoryResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrCreateRepositoryResponse(obj: EcrCreateRepositoryResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repository': toJson_EcrRepository(obj.repository),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrDeleteLifecyclePolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrDeleteLifecyclePolicyRequest(obj: EcrDeleteLifecyclePolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'registryId': obj.registryId,
    'repositoryName': obj.repositoryName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrDeleteLifecyclePolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrDeleteLifecyclePolicyResponse(obj: EcrDeleteLifecyclePolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'registryId': obj.registryId,
    'repositoryName': obj.repositoryName,
    'lifecyclePolicyText': obj.lifecyclePolicyText,
    'lastEvaluatedAt': obj.lastEvaluatedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcrDeleteRegistryPolicyRequest
 */
export interface EcrDeleteRegistryPolicyRequest {
}

/**
 * Converts an object of type 'EcrDeleteRegistryPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrDeleteRegistryPolicyRequest(obj: EcrDeleteRegistryPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcrDeleteRegistryPolicyResponse
 */
export interface EcrDeleteRegistryPolicyResponse {
  /**
   * @schema EcrDeleteRegistryPolicyResponse#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrDeleteRegistryPolicyResponse#policyText
   */
  readonly policyText?: string;

}

/**
 * Converts an object of type 'EcrDeleteRegistryPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrDeleteRegistryPolicyResponse(obj: EcrDeleteRegistryPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'registryId': obj.registryId,
    'policyText': obj.policyText,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrDeleteRepositoryRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrDeleteRepositoryRequest(obj: EcrDeleteRepositoryRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'registryId': obj.registryId,
    'repositoryName': obj.repositoryName,
    'force': obj.force,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrDeleteRepositoryResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrDeleteRepositoryResponse(obj: EcrDeleteRepositoryResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repository': toJson_EcrRepository(obj.repository),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrDeleteRepositoryPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrDeleteRepositoryPolicyRequest(obj: EcrDeleteRepositoryPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'registryId': obj.registryId,
    'repositoryName': obj.repositoryName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrDeleteRepositoryPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrDeleteRepositoryPolicyResponse(obj: EcrDeleteRepositoryPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'registryId': obj.registryId,
    'repositoryName': obj.repositoryName,
    'policyText': obj.policyText,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrDescribeImageScanFindingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrDescribeImageScanFindingsRequest(obj: EcrDescribeImageScanFindingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'registryId': obj.registryId,
    'repositoryName': obj.repositoryName,
    'imageId': toJson_EcrImageIdentifier(obj.imageId),
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrDescribeImageScanFindingsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrDescribeImageScanFindingsResponse(obj: EcrDescribeImageScanFindingsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'registryId': obj.registryId,
    'repositoryName': obj.repositoryName,
    'imageId': toJson_EcrImageIdentifier(obj.imageId),
    'imageScanStatus': toJson_EcrImageScanStatus(obj.imageScanStatus),
    'imageScanFindings': toJson_EcrImageScanFindings(obj.imageScanFindings),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrDescribeImagesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrDescribeImagesRequest(obj: EcrDescribeImagesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'registryId': obj.registryId,
    'repositoryName': obj.repositoryName,
    'imageIds': obj.imageIds?.map(y => toJson_EcrImageIdentifier(y)),
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
    'filter': toJson_EcrDescribeImagesFilter(obj.filter),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrDescribeImagesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrDescribeImagesResponse(obj: EcrDescribeImagesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'imageDetails': obj.imageDetails?.map(y => toJson_EcrImageDetail(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcrDescribeRegistryRequest
 */
export interface EcrDescribeRegistryRequest {
}

/**
 * Converts an object of type 'EcrDescribeRegistryRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrDescribeRegistryRequest(obj: EcrDescribeRegistryRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcrDescribeRegistryResponse
 */
export interface EcrDescribeRegistryResponse {
  /**
   * @schema EcrDescribeRegistryResponse#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrDescribeRegistryResponse#replicationConfiguration
   */
  readonly replicationConfiguration?: EcrReplicationConfiguration;

}

/**
 * Converts an object of type 'EcrDescribeRegistryResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrDescribeRegistryResponse(obj: EcrDescribeRegistryResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'registryId': obj.registryId,
    'replicationConfiguration': toJson_EcrReplicationConfiguration(obj.replicationConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrDescribeRepositoriesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrDescribeRepositoriesRequest(obj: EcrDescribeRepositoriesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'registryId': obj.registryId,
    'repositoryNames': obj.repositoryNames?.map(y => y),
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrDescribeRepositoriesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrDescribeRepositoriesResponse(obj: EcrDescribeRepositoriesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repositories': obj.repositories?.map(y => toJson_EcrRepository(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrGetAuthorizationTokenRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrGetAuthorizationTokenRequest(obj: EcrGetAuthorizationTokenRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'registryIds': obj.registryIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrGetAuthorizationTokenResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrGetAuthorizationTokenResponse(obj: EcrGetAuthorizationTokenResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'authorizationData': obj.authorizationData?.map(y => toJson_EcrAuthorizationData(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrGetDownloadUrlForLayerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrGetDownloadUrlForLayerRequest(obj: EcrGetDownloadUrlForLayerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'registryId': obj.registryId,
    'repositoryName': obj.repositoryName,
    'layerDigest': obj.layerDigest,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrGetDownloadUrlForLayerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrGetDownloadUrlForLayerResponse(obj: EcrGetDownloadUrlForLayerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'downloadUrl': obj.downloadUrl,
    'layerDigest': obj.layerDigest,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrGetLifecyclePolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrGetLifecyclePolicyRequest(obj: EcrGetLifecyclePolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'registryId': obj.registryId,
    'repositoryName': obj.repositoryName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrGetLifecyclePolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrGetLifecyclePolicyResponse(obj: EcrGetLifecyclePolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'registryId': obj.registryId,
    'repositoryName': obj.repositoryName,
    'lifecyclePolicyText': obj.lifecyclePolicyText,
    'lastEvaluatedAt': obj.lastEvaluatedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrGetLifecyclePolicyPreviewRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrGetLifecyclePolicyPreviewRequest(obj: EcrGetLifecyclePolicyPreviewRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'registryId': obj.registryId,
    'repositoryName': obj.repositoryName,
    'imageIds': obj.imageIds?.map(y => toJson_EcrImageIdentifier(y)),
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
    'filter': toJson_EcrLifecyclePolicyPreviewFilter(obj.filter),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrGetLifecyclePolicyPreviewResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrGetLifecyclePolicyPreviewResponse(obj: EcrGetLifecyclePolicyPreviewResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'registryId': obj.registryId,
    'repositoryName': obj.repositoryName,
    'lifecyclePolicyText': obj.lifecyclePolicyText,
    'status': obj.status,
    'nextToken': obj.nextToken,
    'previewResults': obj.previewResults?.map(y => toJson_EcrLifecyclePolicyPreviewResult(y)),
    'summary': toJson_EcrLifecyclePolicyPreviewSummary(obj.summary),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcrGetRegistryPolicyRequest
 */
export interface EcrGetRegistryPolicyRequest {
}

/**
 * Converts an object of type 'EcrGetRegistryPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrGetRegistryPolicyRequest(obj: EcrGetRegistryPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcrGetRegistryPolicyResponse
 */
export interface EcrGetRegistryPolicyResponse {
  /**
   * @schema EcrGetRegistryPolicyResponse#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrGetRegistryPolicyResponse#policyText
   */
  readonly policyText?: string;

}

/**
 * Converts an object of type 'EcrGetRegistryPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrGetRegistryPolicyResponse(obj: EcrGetRegistryPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'registryId': obj.registryId,
    'policyText': obj.policyText,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrGetRepositoryPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrGetRepositoryPolicyRequest(obj: EcrGetRepositoryPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'registryId': obj.registryId,
    'repositoryName': obj.repositoryName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrGetRepositoryPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrGetRepositoryPolicyResponse(obj: EcrGetRepositoryPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'registryId': obj.registryId,
    'repositoryName': obj.repositoryName,
    'policyText': obj.policyText,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrInitiateLayerUploadRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrInitiateLayerUploadRequest(obj: EcrInitiateLayerUploadRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'registryId': obj.registryId,
    'repositoryName': obj.repositoryName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrInitiateLayerUploadResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrInitiateLayerUploadResponse(obj: EcrInitiateLayerUploadResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'uploadId': obj.uploadId,
    'partSize': obj.partSize,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrListImagesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrListImagesRequest(obj: EcrListImagesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'registryId': obj.registryId,
    'repositoryName': obj.repositoryName,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
    'filter': toJson_EcrListImagesFilter(obj.filter),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrListImagesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrListImagesResponse(obj: EcrListImagesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'imageIds': obj.imageIds?.map(y => toJson_EcrImageIdentifier(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrListTagsForResourceRequest(obj: EcrListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrListTagsForResourceResponse(obj: EcrListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tags': obj.tags?.map(y => toJson_EcrTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrPutImageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrPutImageRequest(obj: EcrPutImageRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'registryId': obj.registryId,
    'repositoryName': obj.repositoryName,
    'imageManifest': obj.imageManifest,
    'imageManifestMediaType': obj.imageManifestMediaType,
    'imageTag': obj.imageTag,
    'imageDigest': obj.imageDigest,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrPutImageResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrPutImageResponse(obj: EcrPutImageResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'image': toJson_EcrImage(obj.image),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrPutImageScanningConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrPutImageScanningConfigurationRequest(obj: EcrPutImageScanningConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'registryId': obj.registryId,
    'repositoryName': obj.repositoryName,
    'imageScanningConfiguration': toJson_EcrImageScanningConfiguration(obj.imageScanningConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrPutImageScanningConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrPutImageScanningConfigurationResponse(obj: EcrPutImageScanningConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'registryId': obj.registryId,
    'repositoryName': obj.repositoryName,
    'imageScanningConfiguration': toJson_EcrImageScanningConfiguration(obj.imageScanningConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrPutImageTagMutabilityRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrPutImageTagMutabilityRequest(obj: EcrPutImageTagMutabilityRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'registryId': obj.registryId,
    'repositoryName': obj.repositoryName,
    'imageTagMutability': obj.imageTagMutability,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrPutImageTagMutabilityResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrPutImageTagMutabilityResponse(obj: EcrPutImageTagMutabilityResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'registryId': obj.registryId,
    'repositoryName': obj.repositoryName,
    'imageTagMutability': obj.imageTagMutability,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrPutLifecyclePolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrPutLifecyclePolicyRequest(obj: EcrPutLifecyclePolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'registryId': obj.registryId,
    'repositoryName': obj.repositoryName,
    'lifecyclePolicyText': obj.lifecyclePolicyText,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrPutLifecyclePolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrPutLifecyclePolicyResponse(obj: EcrPutLifecyclePolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'registryId': obj.registryId,
    'repositoryName': obj.repositoryName,
    'lifecyclePolicyText': obj.lifecyclePolicyText,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcrPutRegistryPolicyRequest
 */
export interface EcrPutRegistryPolicyRequest {
  /**
   * @schema EcrPutRegistryPolicyRequest#policyText
   */
  readonly policyText: string;

}

/**
 * Converts an object of type 'EcrPutRegistryPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrPutRegistryPolicyRequest(obj: EcrPutRegistryPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'policyText': obj.policyText,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcrPutRegistryPolicyResponse
 */
export interface EcrPutRegistryPolicyResponse {
  /**
   * @schema EcrPutRegistryPolicyResponse#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrPutRegistryPolicyResponse#policyText
   */
  readonly policyText?: string;

}

/**
 * Converts an object of type 'EcrPutRegistryPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrPutRegistryPolicyResponse(obj: EcrPutRegistryPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'registryId': obj.registryId,
    'policyText': obj.policyText,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcrPutReplicationConfigurationRequest
 */
export interface EcrPutReplicationConfigurationRequest {
  /**
   * @schema EcrPutReplicationConfigurationRequest#replicationConfiguration
   */
  readonly replicationConfiguration: EcrReplicationConfiguration;

}

/**
 * Converts an object of type 'EcrPutReplicationConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrPutReplicationConfigurationRequest(obj: EcrPutReplicationConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'replicationConfiguration': toJson_EcrReplicationConfiguration(obj.replicationConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcrPutReplicationConfigurationResponse
 */
export interface EcrPutReplicationConfigurationResponse {
  /**
   * @schema EcrPutReplicationConfigurationResponse#replicationConfiguration
   */
  readonly replicationConfiguration?: EcrReplicationConfiguration;

}

/**
 * Converts an object of type 'EcrPutReplicationConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrPutReplicationConfigurationResponse(obj: EcrPutReplicationConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'replicationConfiguration': toJson_EcrReplicationConfiguration(obj.replicationConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrSetRepositoryPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrSetRepositoryPolicyRequest(obj: EcrSetRepositoryPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'registryId': obj.registryId,
    'repositoryName': obj.repositoryName,
    'policyText': obj.policyText,
    'force': obj.force,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrSetRepositoryPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrSetRepositoryPolicyResponse(obj: EcrSetRepositoryPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'registryId': obj.registryId,
    'repositoryName': obj.repositoryName,
    'policyText': obj.policyText,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrStartImageScanRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrStartImageScanRequest(obj: EcrStartImageScanRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'registryId': obj.registryId,
    'repositoryName': obj.repositoryName,
    'imageId': toJson_EcrImageIdentifier(obj.imageId),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrStartImageScanResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrStartImageScanResponse(obj: EcrStartImageScanResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'registryId': obj.registryId,
    'repositoryName': obj.repositoryName,
    'imageId': toJson_EcrImageIdentifier(obj.imageId),
    'imageScanStatus': toJson_EcrImageScanStatus(obj.imageScanStatus),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrStartLifecyclePolicyPreviewRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrStartLifecyclePolicyPreviewRequest(obj: EcrStartLifecyclePolicyPreviewRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'registryId': obj.registryId,
    'repositoryName': obj.repositoryName,
    'lifecyclePolicyText': obj.lifecyclePolicyText,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrStartLifecyclePolicyPreviewResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrStartLifecyclePolicyPreviewResponse(obj: EcrStartLifecyclePolicyPreviewResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'registryId': obj.registryId,
    'repositoryName': obj.repositoryName,
    'lifecyclePolicyText': obj.lifecyclePolicyText,
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrTagResourceRequest(obj: EcrTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
    'tags': obj.tags?.map(y => toJson_EcrTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcrTagResourceResponse
 */
export interface EcrTagResourceResponse {
}

/**
 * Converts an object of type 'EcrTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrTagResourceResponse(obj: EcrTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrUntagResourceRequest(obj: EcrUntagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema EcrUntagResourceResponse
 */
export interface EcrUntagResourceResponse {
}

/**
 * Converts an object of type 'EcrUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrUntagResourceResponse(obj: EcrUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrUploadLayerPartRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrUploadLayerPartRequest(obj: EcrUploadLayerPartRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'registryId': obj.registryId,
    'repositoryName': obj.repositoryName,
    'uploadId': obj.uploadId,
    'partFirstByte': obj.partFirstByte,
    'partLastByte': obj.partLastByte,
    'layerPartBlob': obj.layerPartBlob,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrUploadLayerPartResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrUploadLayerPartResponse(obj: EcrUploadLayerPartResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'registryId': obj.registryId,
    'repositoryName': obj.repositoryName,
    'uploadId': obj.uploadId,
    'lastByteReceived': obj.lastByteReceived,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrLayer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrLayer(obj: EcrLayer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'layerDigest': obj.layerDigest,
    'layerAvailability': obj.layerAvailability,
    'layerSize': obj.layerSize,
    'mediaType': obj.mediaType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrLayerFailure' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrLayerFailure(obj: EcrLayerFailure | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'layerDigest': obj.layerDigest,
    'failureCode': obj.failureCode,
    'failureReason': obj.failureReason,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrImageIdentifier' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrImageIdentifier(obj: EcrImageIdentifier | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'imageDigest': obj.imageDigest,
    'imageTag': obj.imageTag,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrImageFailure' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrImageFailure(obj: EcrImageFailure | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'imageId': toJson_EcrImageIdentifier(obj.imageId),
    'failureCode': obj.failureCode,
    'failureReason': obj.failureReason,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrImage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrImage(obj: EcrImage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'registryId': obj.registryId,
    'repositoryName': obj.repositoryName,
    'imageId': toJson_EcrImageIdentifier(obj.imageId),
    'imageManifest': obj.imageManifest,
    'imageManifestMediaType': obj.imageManifestMediaType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrTag(obj: EcrTag | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrImageScanningConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrImageScanningConfiguration(obj: EcrImageScanningConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'scanOnPush': obj.scanOnPush,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrEncryptionConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrEncryptionConfiguration(obj: EcrEncryptionConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'encryptionType': obj.encryptionType,
    'kmsKey': obj.kmsKey,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrRepository' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrRepository(obj: EcrRepository | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repositoryArn': obj.repositoryArn,
    'registryId': obj.registryId,
    'repositoryName': obj.repositoryName,
    'repositoryUri': obj.repositoryUri,
    'createdAt': obj.createdAt,
    'imageTagMutability': obj.imageTagMutability,
    'imageScanningConfiguration': toJson_EcrImageScanningConfiguration(obj.imageScanningConfiguration),
    'encryptionConfiguration': toJson_EcrEncryptionConfiguration(obj.encryptionConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrImageScanStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrImageScanStatus(obj: EcrImageScanStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'status': obj.status,
    'description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrImageScanFindings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrImageScanFindings(obj: EcrImageScanFindings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'imageScanCompletedAt': obj.imageScanCompletedAt,
    'vulnerabilitySourceUpdatedAt': obj.vulnerabilitySourceUpdatedAt,
    'findings': obj.findings?.map(y => toJson_EcrImageScanFinding(y)),
    'findingSeverityCounts': ((obj.findingSeverityCounts) === undefined) ? undefined : (Object.entries(obj.findingSeverityCounts).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrDescribeImagesFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrDescribeImagesFilter(obj: EcrDescribeImagesFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tagStatus': obj.tagStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrImageDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrImageDetail(obj: EcrImageDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'registryId': obj.registryId,
    'repositoryName': obj.repositoryName,
    'imageDigest': obj.imageDigest,
    'imageTags': obj.imageTags?.map(y => y),
    'imageSizeInBytes': obj.imageSizeInBytes,
    'imagePushedAt': obj.imagePushedAt,
    'imageScanStatus': toJson_EcrImageScanStatus(obj.imageScanStatus),
    'imageScanFindingsSummary': toJson_EcrImageScanFindingsSummary(obj.imageScanFindingsSummary),
    'imageManifestMediaType': obj.imageManifestMediaType,
    'artifactMediaType': obj.artifactMediaType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcrReplicationConfiguration
 */
export interface EcrReplicationConfiguration {
  /**
   * @schema EcrReplicationConfiguration#rules
   */
  readonly rules: EcrReplicationRule[];

}

/**
 * Converts an object of type 'EcrReplicationConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrReplicationConfiguration(obj: EcrReplicationConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'rules': obj.rules?.map(y => toJson_EcrReplicationRule(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrAuthorizationData' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrAuthorizationData(obj: EcrAuthorizationData | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'authorizationToken': obj.authorizationToken,
    'expiresAt': obj.expiresAt,
    'proxyEndpoint': obj.proxyEndpoint,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrLifecyclePolicyPreviewFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrLifecyclePolicyPreviewFilter(obj: EcrLifecyclePolicyPreviewFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tagStatus': obj.tagStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrLifecyclePolicyPreviewResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrLifecyclePolicyPreviewResult(obj: EcrLifecyclePolicyPreviewResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'imageTags': obj.imageTags?.map(y => y),
    'imageDigest': obj.imageDigest,
    'imagePushedAt': obj.imagePushedAt,
    'action': toJson_EcrLifecyclePolicyRuleAction(obj.action),
    'appliedRulePriority': obj.appliedRulePriority,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrLifecyclePolicyPreviewSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrLifecyclePolicyPreviewSummary(obj: EcrLifecyclePolicyPreviewSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'expiringImageTotalCount': obj.expiringImageTotalCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrListImagesFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrListImagesFilter(obj: EcrListImagesFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tagStatus': obj.tagStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrImageScanFinding' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrImageScanFinding(obj: EcrImageScanFinding | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'description': obj.description,
    'uri': obj.uri,
    'severity': obj.severity,
    'attributes': obj.attributes?.map(y => toJson_EcrAttribute(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrImageScanFindingsSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrImageScanFindingsSummary(obj: EcrImageScanFindingsSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'imageScanCompletedAt': obj.imageScanCompletedAt,
    'vulnerabilitySourceUpdatedAt': obj.vulnerabilitySourceUpdatedAt,
    'findingSeverityCounts': ((obj.findingSeverityCounts) === undefined) ? undefined : (Object.entries(obj.findingSeverityCounts).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcrReplicationRule
 */
export interface EcrReplicationRule {
  /**
   * @schema EcrReplicationRule#destinations
   */
  readonly destinations: EcrReplicationDestination[];

}

/**
 * Converts an object of type 'EcrReplicationRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrReplicationRule(obj: EcrReplicationRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'destinations': obj.destinations?.map(y => toJson_EcrReplicationDestination(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EcrLifecyclePolicyRuleAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrLifecyclePolicyRuleAction(obj: EcrLifecyclePolicyRuleAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

/**
 * Converts an object of type 'EcrAttribute' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrAttribute(obj: EcrAttribute | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'key': obj.key,
    'value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcrReplicationDestination
 */
export interface EcrReplicationDestination {
  /**
   * @schema EcrReplicationDestination#region
   */
  readonly region: string;

  /**
   * @schema EcrReplicationDestination#registryId
   */
  readonly registryId: string;

}

/**
 * Converts an object of type 'EcrReplicationDestination' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrReplicationDestination(obj: EcrReplicationDestination | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'region': obj.region,
    'registryId': obj.registryId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
