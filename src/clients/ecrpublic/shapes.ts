/**
 * @schema EcrpublicBatchCheckLayerAvailabilityRequest
 */
export interface EcrpublicBatchCheckLayerAvailabilityRequest {
  /**
   * @schema EcrpublicBatchCheckLayerAvailabilityRequest#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrpublicBatchCheckLayerAvailabilityRequest#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema EcrpublicBatchCheckLayerAvailabilityRequest#layerDigests
   */
  readonly layerDigests: string[];

}

/**
 * Converts an object of type 'EcrpublicBatchCheckLayerAvailabilityRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrpublicBatchCheckLayerAvailabilityRequest(obj: EcrpublicBatchCheckLayerAvailabilityRequest | undefined): Record<string, any> | undefined {
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
 * @schema EcrpublicBatchCheckLayerAvailabilityResponse
 */
export interface EcrpublicBatchCheckLayerAvailabilityResponse {
  /**
   * @schema EcrpublicBatchCheckLayerAvailabilityResponse#layers
   */
  readonly layers?: EcrpublicLayer[];

  /**
   * @schema EcrpublicBatchCheckLayerAvailabilityResponse#failures
   */
  readonly failures?: EcrpublicLayerFailure[];

}

/**
 * Converts an object of type 'EcrpublicBatchCheckLayerAvailabilityResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrpublicBatchCheckLayerAvailabilityResponse(obj: EcrpublicBatchCheckLayerAvailabilityResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'layers': obj.layers?.map(y => toJson_EcrpublicLayer(y)),
    'failures': obj.failures?.map(y => toJson_EcrpublicLayerFailure(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcrpublicBatchDeleteImageRequest
 */
export interface EcrpublicBatchDeleteImageRequest {
  /**
   * @schema EcrpublicBatchDeleteImageRequest#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrpublicBatchDeleteImageRequest#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema EcrpublicBatchDeleteImageRequest#imageIds
   */
  readonly imageIds: EcrpublicImageIdentifier[];

}

/**
 * Converts an object of type 'EcrpublicBatchDeleteImageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrpublicBatchDeleteImageRequest(obj: EcrpublicBatchDeleteImageRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'registryId': obj.registryId,
    'repositoryName': obj.repositoryName,
    'imageIds': obj.imageIds?.map(y => toJson_EcrpublicImageIdentifier(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcrpublicBatchDeleteImageResponse
 */
export interface EcrpublicBatchDeleteImageResponse {
  /**
   * @schema EcrpublicBatchDeleteImageResponse#imageIds
   */
  readonly imageIds?: EcrpublicImageIdentifier[];

  /**
   * @schema EcrpublicBatchDeleteImageResponse#failures
   */
  readonly failures?: EcrpublicImageFailure[];

}

/**
 * Converts an object of type 'EcrpublicBatchDeleteImageResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrpublicBatchDeleteImageResponse(obj: EcrpublicBatchDeleteImageResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'imageIds': obj.imageIds?.map(y => toJson_EcrpublicImageIdentifier(y)),
    'failures': obj.failures?.map(y => toJson_EcrpublicImageFailure(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcrpublicCompleteLayerUploadRequest
 */
export interface EcrpublicCompleteLayerUploadRequest {
  /**
   * @schema EcrpublicCompleteLayerUploadRequest#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrpublicCompleteLayerUploadRequest#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema EcrpublicCompleteLayerUploadRequest#uploadId
   */
  readonly uploadId: string;

  /**
   * @schema EcrpublicCompleteLayerUploadRequest#layerDigests
   */
  readonly layerDigests: string[];

}

/**
 * Converts an object of type 'EcrpublicCompleteLayerUploadRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrpublicCompleteLayerUploadRequest(obj: EcrpublicCompleteLayerUploadRequest | undefined): Record<string, any> | undefined {
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
 * @schema EcrpublicCompleteLayerUploadResponse
 */
export interface EcrpublicCompleteLayerUploadResponse {
  /**
   * @schema EcrpublicCompleteLayerUploadResponse#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrpublicCompleteLayerUploadResponse#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema EcrpublicCompleteLayerUploadResponse#uploadId
   */
  readonly uploadId?: string;

  /**
   * @schema EcrpublicCompleteLayerUploadResponse#layerDigest
   */
  readonly layerDigest?: string;

}

/**
 * Converts an object of type 'EcrpublicCompleteLayerUploadResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrpublicCompleteLayerUploadResponse(obj: EcrpublicCompleteLayerUploadResponse | undefined): Record<string, any> | undefined {
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
 * @schema EcrpublicCreateRepositoryRequest
 */
export interface EcrpublicCreateRepositoryRequest {
  /**
   * @schema EcrpublicCreateRepositoryRequest#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema EcrpublicCreateRepositoryRequest#catalogData
   */
  readonly catalogData?: EcrpublicRepositoryCatalogDataInput;

  /**
   * @schema EcrpublicCreateRepositoryRequest#tags
   */
  readonly tags?: EcrpublicTag[];

}

/**
 * Converts an object of type 'EcrpublicCreateRepositoryRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrpublicCreateRepositoryRequest(obj: EcrpublicCreateRepositoryRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repositoryName': obj.repositoryName,
    'catalogData': toJson_EcrpublicRepositoryCatalogDataInput(obj.catalogData),
    'tags': obj.tags?.map(y => toJson_EcrpublicTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcrpublicCreateRepositoryResponse
 */
export interface EcrpublicCreateRepositoryResponse {
  /**
   * @schema EcrpublicCreateRepositoryResponse#repository
   */
  readonly repository?: EcrpublicRepository;

  /**
   * @schema EcrpublicCreateRepositoryResponse#catalogData
   */
  readonly catalogData?: EcrpublicRepositoryCatalogData;

}

/**
 * Converts an object of type 'EcrpublicCreateRepositoryResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrpublicCreateRepositoryResponse(obj: EcrpublicCreateRepositoryResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repository': toJson_EcrpublicRepository(obj.repository),
    'catalogData': toJson_EcrpublicRepositoryCatalogData(obj.catalogData),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcrpublicDeleteRepositoryRequest
 */
export interface EcrpublicDeleteRepositoryRequest {
  /**
   * @schema EcrpublicDeleteRepositoryRequest#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrpublicDeleteRepositoryRequest#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema EcrpublicDeleteRepositoryRequest#force
   */
  readonly force?: boolean;

}

/**
 * Converts an object of type 'EcrpublicDeleteRepositoryRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrpublicDeleteRepositoryRequest(obj: EcrpublicDeleteRepositoryRequest | undefined): Record<string, any> | undefined {
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
 * @schema EcrpublicDeleteRepositoryResponse
 */
export interface EcrpublicDeleteRepositoryResponse {
  /**
   * @schema EcrpublicDeleteRepositoryResponse#repository
   */
  readonly repository?: EcrpublicRepository;

}

/**
 * Converts an object of type 'EcrpublicDeleteRepositoryResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrpublicDeleteRepositoryResponse(obj: EcrpublicDeleteRepositoryResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repository': toJson_EcrpublicRepository(obj.repository),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcrpublicDeleteRepositoryPolicyRequest
 */
export interface EcrpublicDeleteRepositoryPolicyRequest {
  /**
   * @schema EcrpublicDeleteRepositoryPolicyRequest#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrpublicDeleteRepositoryPolicyRequest#repositoryName
   */
  readonly repositoryName: string;

}

/**
 * Converts an object of type 'EcrpublicDeleteRepositoryPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrpublicDeleteRepositoryPolicyRequest(obj: EcrpublicDeleteRepositoryPolicyRequest | undefined): Record<string, any> | undefined {
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
 * @schema EcrpublicDeleteRepositoryPolicyResponse
 */
export interface EcrpublicDeleteRepositoryPolicyResponse {
  /**
   * @schema EcrpublicDeleteRepositoryPolicyResponse#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrpublicDeleteRepositoryPolicyResponse#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema EcrpublicDeleteRepositoryPolicyResponse#policyText
   */
  readonly policyText?: string;

}

/**
 * Converts an object of type 'EcrpublicDeleteRepositoryPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrpublicDeleteRepositoryPolicyResponse(obj: EcrpublicDeleteRepositoryPolicyResponse | undefined): Record<string, any> | undefined {
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
 * @schema EcrpublicDescribeImageTagsRequest
 */
export interface EcrpublicDescribeImageTagsRequest {
  /**
   * @schema EcrpublicDescribeImageTagsRequest#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrpublicDescribeImageTagsRequest#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema EcrpublicDescribeImageTagsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema EcrpublicDescribeImageTagsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'EcrpublicDescribeImageTagsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrpublicDescribeImageTagsRequest(obj: EcrpublicDescribeImageTagsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'registryId': obj.registryId,
    'repositoryName': obj.repositoryName,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcrpublicDescribeImageTagsResponse
 */
export interface EcrpublicDescribeImageTagsResponse {
  /**
   * @schema EcrpublicDescribeImageTagsResponse#imageTagDetails
   */
  readonly imageTagDetails?: EcrpublicImageTagDetail[];

  /**
   * @schema EcrpublicDescribeImageTagsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'EcrpublicDescribeImageTagsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrpublicDescribeImageTagsResponse(obj: EcrpublicDescribeImageTagsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'imageTagDetails': obj.imageTagDetails?.map(y => toJson_EcrpublicImageTagDetail(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcrpublicDescribeImagesRequest
 */
export interface EcrpublicDescribeImagesRequest {
  /**
   * @schema EcrpublicDescribeImagesRequest#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrpublicDescribeImagesRequest#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema EcrpublicDescribeImagesRequest#imageIds
   */
  readonly imageIds?: EcrpublicImageIdentifier[];

  /**
   * @schema EcrpublicDescribeImagesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema EcrpublicDescribeImagesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'EcrpublicDescribeImagesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrpublicDescribeImagesRequest(obj: EcrpublicDescribeImagesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'registryId': obj.registryId,
    'repositoryName': obj.repositoryName,
    'imageIds': obj.imageIds?.map(y => toJson_EcrpublicImageIdentifier(y)),
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcrpublicDescribeImagesResponse
 */
export interface EcrpublicDescribeImagesResponse {
  /**
   * @schema EcrpublicDescribeImagesResponse#imageDetails
   */
  readonly imageDetails?: EcrpublicImageDetail[];

  /**
   * @schema EcrpublicDescribeImagesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'EcrpublicDescribeImagesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrpublicDescribeImagesResponse(obj: EcrpublicDescribeImagesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'imageDetails': obj.imageDetails?.map(y => toJson_EcrpublicImageDetail(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcrpublicDescribeRegistriesRequest
 */
export interface EcrpublicDescribeRegistriesRequest {
  /**
   * @schema EcrpublicDescribeRegistriesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema EcrpublicDescribeRegistriesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'EcrpublicDescribeRegistriesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrpublicDescribeRegistriesRequest(obj: EcrpublicDescribeRegistriesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcrpublicDescribeRegistriesResponse
 */
export interface EcrpublicDescribeRegistriesResponse {
  /**
   * @schema EcrpublicDescribeRegistriesResponse#registries
   */
  readonly registries: EcrpublicRegistry[];

  /**
   * @schema EcrpublicDescribeRegistriesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'EcrpublicDescribeRegistriesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrpublicDescribeRegistriesResponse(obj: EcrpublicDescribeRegistriesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'registries': obj.registries?.map(y => toJson_EcrpublicRegistry(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcrpublicDescribeRepositoriesRequest
 */
export interface EcrpublicDescribeRepositoriesRequest {
  /**
   * @schema EcrpublicDescribeRepositoriesRequest#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrpublicDescribeRepositoriesRequest#repositoryNames
   */
  readonly repositoryNames?: string[];

  /**
   * @schema EcrpublicDescribeRepositoriesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema EcrpublicDescribeRepositoriesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'EcrpublicDescribeRepositoriesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrpublicDescribeRepositoriesRequest(obj: EcrpublicDescribeRepositoriesRequest | undefined): Record<string, any> | undefined {
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
 * @schema EcrpublicDescribeRepositoriesResponse
 */
export interface EcrpublicDescribeRepositoriesResponse {
  /**
   * @schema EcrpublicDescribeRepositoriesResponse#repositories
   */
  readonly repositories?: EcrpublicRepository[];

  /**
   * @schema EcrpublicDescribeRepositoriesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'EcrpublicDescribeRepositoriesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrpublicDescribeRepositoriesResponse(obj: EcrpublicDescribeRepositoriesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repositories': obj.repositories?.map(y => toJson_EcrpublicRepository(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcrpublicGetAuthorizationTokenRequest
 */
export interface EcrpublicGetAuthorizationTokenRequest {
}

/**
 * Converts an object of type 'EcrpublicGetAuthorizationTokenRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrpublicGetAuthorizationTokenRequest(obj: EcrpublicGetAuthorizationTokenRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcrpublicGetAuthorizationTokenResponse
 */
export interface EcrpublicGetAuthorizationTokenResponse {
  /**
   * @schema EcrpublicGetAuthorizationTokenResponse#authorizationData
   */
  readonly authorizationData?: EcrpublicAuthorizationData;

}

/**
 * Converts an object of type 'EcrpublicGetAuthorizationTokenResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrpublicGetAuthorizationTokenResponse(obj: EcrpublicGetAuthorizationTokenResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'authorizationData': toJson_EcrpublicAuthorizationData(obj.authorizationData),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcrpublicGetRegistryCatalogDataRequest
 */
export interface EcrpublicGetRegistryCatalogDataRequest {
}

/**
 * Converts an object of type 'EcrpublicGetRegistryCatalogDataRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrpublicGetRegistryCatalogDataRequest(obj: EcrpublicGetRegistryCatalogDataRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcrpublicGetRegistryCatalogDataResponse
 */
export interface EcrpublicGetRegistryCatalogDataResponse {
  /**
   * @schema EcrpublicGetRegistryCatalogDataResponse#registryCatalogData
   */
  readonly registryCatalogData: EcrpublicRegistryCatalogData;

}

/**
 * Converts an object of type 'EcrpublicGetRegistryCatalogDataResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrpublicGetRegistryCatalogDataResponse(obj: EcrpublicGetRegistryCatalogDataResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'registryCatalogData': toJson_EcrpublicRegistryCatalogData(obj.registryCatalogData),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcrpublicGetRepositoryCatalogDataRequest
 */
export interface EcrpublicGetRepositoryCatalogDataRequest {
  /**
   * @schema EcrpublicGetRepositoryCatalogDataRequest#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrpublicGetRepositoryCatalogDataRequest#repositoryName
   */
  readonly repositoryName: string;

}

/**
 * Converts an object of type 'EcrpublicGetRepositoryCatalogDataRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrpublicGetRepositoryCatalogDataRequest(obj: EcrpublicGetRepositoryCatalogDataRequest | undefined): Record<string, any> | undefined {
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
 * @schema EcrpublicGetRepositoryCatalogDataResponse
 */
export interface EcrpublicGetRepositoryCatalogDataResponse {
  /**
   * @schema EcrpublicGetRepositoryCatalogDataResponse#catalogData
   */
  readonly catalogData?: EcrpublicRepositoryCatalogData;

}

/**
 * Converts an object of type 'EcrpublicGetRepositoryCatalogDataResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrpublicGetRepositoryCatalogDataResponse(obj: EcrpublicGetRepositoryCatalogDataResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'catalogData': toJson_EcrpublicRepositoryCatalogData(obj.catalogData),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcrpublicGetRepositoryPolicyRequest
 */
export interface EcrpublicGetRepositoryPolicyRequest {
  /**
   * @schema EcrpublicGetRepositoryPolicyRequest#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrpublicGetRepositoryPolicyRequest#repositoryName
   */
  readonly repositoryName: string;

}

/**
 * Converts an object of type 'EcrpublicGetRepositoryPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrpublicGetRepositoryPolicyRequest(obj: EcrpublicGetRepositoryPolicyRequest | undefined): Record<string, any> | undefined {
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
 * @schema EcrpublicGetRepositoryPolicyResponse
 */
export interface EcrpublicGetRepositoryPolicyResponse {
  /**
   * @schema EcrpublicGetRepositoryPolicyResponse#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrpublicGetRepositoryPolicyResponse#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema EcrpublicGetRepositoryPolicyResponse#policyText
   */
  readonly policyText?: string;

}

/**
 * Converts an object of type 'EcrpublicGetRepositoryPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrpublicGetRepositoryPolicyResponse(obj: EcrpublicGetRepositoryPolicyResponse | undefined): Record<string, any> | undefined {
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
 * @schema EcrpublicInitiateLayerUploadRequest
 */
export interface EcrpublicInitiateLayerUploadRequest {
  /**
   * @schema EcrpublicInitiateLayerUploadRequest#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrpublicInitiateLayerUploadRequest#repositoryName
   */
  readonly repositoryName: string;

}

/**
 * Converts an object of type 'EcrpublicInitiateLayerUploadRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrpublicInitiateLayerUploadRequest(obj: EcrpublicInitiateLayerUploadRequest | undefined): Record<string, any> | undefined {
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
 * @schema EcrpublicInitiateLayerUploadResponse
 */
export interface EcrpublicInitiateLayerUploadResponse {
  /**
   * @schema EcrpublicInitiateLayerUploadResponse#uploadId
   */
  readonly uploadId?: string;

  /**
   * @schema EcrpublicInitiateLayerUploadResponse#partSize
   */
  readonly partSize?: number;

}

/**
 * Converts an object of type 'EcrpublicInitiateLayerUploadResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrpublicInitiateLayerUploadResponse(obj: EcrpublicInitiateLayerUploadResponse | undefined): Record<string, any> | undefined {
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
 * @schema EcrpublicListTagsForResourceRequest
 */
export interface EcrpublicListTagsForResourceRequest {
  /**
   * @schema EcrpublicListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * Converts an object of type 'EcrpublicListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrpublicListTagsForResourceRequest(obj: EcrpublicListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcrpublicListTagsForResourceResponse
 */
export interface EcrpublicListTagsForResourceResponse {
  /**
   * @schema EcrpublicListTagsForResourceResponse#tags
   */
  readonly tags?: EcrpublicTag[];

}

/**
 * Converts an object of type 'EcrpublicListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrpublicListTagsForResourceResponse(obj: EcrpublicListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tags': obj.tags?.map(y => toJson_EcrpublicTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcrpublicPutImageRequest
 */
export interface EcrpublicPutImageRequest {
  /**
   * @schema EcrpublicPutImageRequest#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrpublicPutImageRequest#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema EcrpublicPutImageRequest#imageManifest
   */
  readonly imageManifest: string;

  /**
   * @schema EcrpublicPutImageRequest#imageManifestMediaType
   */
  readonly imageManifestMediaType?: string;

  /**
   * @schema EcrpublicPutImageRequest#imageTag
   */
  readonly imageTag?: string;

  /**
   * @schema EcrpublicPutImageRequest#imageDigest
   */
  readonly imageDigest?: string;

}

/**
 * Converts an object of type 'EcrpublicPutImageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrpublicPutImageRequest(obj: EcrpublicPutImageRequest | undefined): Record<string, any> | undefined {
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
 * @schema EcrpublicPutImageResponse
 */
export interface EcrpublicPutImageResponse {
  /**
   * @schema EcrpublicPutImageResponse#image
   */
  readonly image?: EcrpublicImage;

}

/**
 * Converts an object of type 'EcrpublicPutImageResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrpublicPutImageResponse(obj: EcrpublicPutImageResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'image': toJson_EcrpublicImage(obj.image),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcrpublicPutRegistryCatalogDataRequest
 */
export interface EcrpublicPutRegistryCatalogDataRequest {
  /**
   * @schema EcrpublicPutRegistryCatalogDataRequest#displayName
   */
  readonly displayName?: string;

}

/**
 * Converts an object of type 'EcrpublicPutRegistryCatalogDataRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrpublicPutRegistryCatalogDataRequest(obj: EcrpublicPutRegistryCatalogDataRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'displayName': obj.displayName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcrpublicPutRegistryCatalogDataResponse
 */
export interface EcrpublicPutRegistryCatalogDataResponse {
  /**
   * @schema EcrpublicPutRegistryCatalogDataResponse#registryCatalogData
   */
  readonly registryCatalogData: EcrpublicRegistryCatalogData;

}

/**
 * Converts an object of type 'EcrpublicPutRegistryCatalogDataResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrpublicPutRegistryCatalogDataResponse(obj: EcrpublicPutRegistryCatalogDataResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'registryCatalogData': toJson_EcrpublicRegistryCatalogData(obj.registryCatalogData),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcrpublicPutRepositoryCatalogDataRequest
 */
export interface EcrpublicPutRepositoryCatalogDataRequest {
  /**
   * @schema EcrpublicPutRepositoryCatalogDataRequest#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrpublicPutRepositoryCatalogDataRequest#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema EcrpublicPutRepositoryCatalogDataRequest#catalogData
   */
  readonly catalogData: EcrpublicRepositoryCatalogDataInput;

}

/**
 * Converts an object of type 'EcrpublicPutRepositoryCatalogDataRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrpublicPutRepositoryCatalogDataRequest(obj: EcrpublicPutRepositoryCatalogDataRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'registryId': obj.registryId,
    'repositoryName': obj.repositoryName,
    'catalogData': toJson_EcrpublicRepositoryCatalogDataInput(obj.catalogData),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcrpublicPutRepositoryCatalogDataResponse
 */
export interface EcrpublicPutRepositoryCatalogDataResponse {
  /**
   * @schema EcrpublicPutRepositoryCatalogDataResponse#catalogData
   */
  readonly catalogData?: EcrpublicRepositoryCatalogData;

}

/**
 * Converts an object of type 'EcrpublicPutRepositoryCatalogDataResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrpublicPutRepositoryCatalogDataResponse(obj: EcrpublicPutRepositoryCatalogDataResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'catalogData': toJson_EcrpublicRepositoryCatalogData(obj.catalogData),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcrpublicSetRepositoryPolicyRequest
 */
export interface EcrpublicSetRepositoryPolicyRequest {
  /**
   * @schema EcrpublicSetRepositoryPolicyRequest#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrpublicSetRepositoryPolicyRequest#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema EcrpublicSetRepositoryPolicyRequest#policyText
   */
  readonly policyText: string;

  /**
   * @schema EcrpublicSetRepositoryPolicyRequest#force
   */
  readonly force?: boolean;

}

/**
 * Converts an object of type 'EcrpublicSetRepositoryPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrpublicSetRepositoryPolicyRequest(obj: EcrpublicSetRepositoryPolicyRequest | undefined): Record<string, any> | undefined {
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
 * @schema EcrpublicSetRepositoryPolicyResponse
 */
export interface EcrpublicSetRepositoryPolicyResponse {
  /**
   * @schema EcrpublicSetRepositoryPolicyResponse#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrpublicSetRepositoryPolicyResponse#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema EcrpublicSetRepositoryPolicyResponse#policyText
   */
  readonly policyText?: string;

}

/**
 * Converts an object of type 'EcrpublicSetRepositoryPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrpublicSetRepositoryPolicyResponse(obj: EcrpublicSetRepositoryPolicyResponse | undefined): Record<string, any> | undefined {
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
 * @schema EcrpublicTagResourceRequest
 */
export interface EcrpublicTagResourceRequest {
  /**
   * @schema EcrpublicTagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema EcrpublicTagResourceRequest#tags
   */
  readonly tags: EcrpublicTag[];

}

/**
 * Converts an object of type 'EcrpublicTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrpublicTagResourceRequest(obj: EcrpublicTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
    'tags': obj.tags?.map(y => toJson_EcrpublicTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcrpublicTagResourceResponse
 */
export interface EcrpublicTagResourceResponse {
}

/**
 * Converts an object of type 'EcrpublicTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrpublicTagResourceResponse(obj: EcrpublicTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcrpublicUntagResourceRequest
 */
export interface EcrpublicUntagResourceRequest {
  /**
   * @schema EcrpublicUntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema EcrpublicUntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * Converts an object of type 'EcrpublicUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrpublicUntagResourceRequest(obj: EcrpublicUntagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema EcrpublicUntagResourceResponse
 */
export interface EcrpublicUntagResourceResponse {
}

/**
 * Converts an object of type 'EcrpublicUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrpublicUntagResourceResponse(obj: EcrpublicUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcrpublicUploadLayerPartRequest
 */
export interface EcrpublicUploadLayerPartRequest {
  /**
   * @schema EcrpublicUploadLayerPartRequest#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrpublicUploadLayerPartRequest#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema EcrpublicUploadLayerPartRequest#uploadId
   */
  readonly uploadId: string;

  /**
   * @schema EcrpublicUploadLayerPartRequest#partFirstByte
   */
  readonly partFirstByte: number;

  /**
   * @schema EcrpublicUploadLayerPartRequest#partLastByte
   */
  readonly partLastByte: number;

  /**
   * @schema EcrpublicUploadLayerPartRequest#layerPartBlob
   */
  readonly layerPartBlob: any;

}

/**
 * Converts an object of type 'EcrpublicUploadLayerPartRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrpublicUploadLayerPartRequest(obj: EcrpublicUploadLayerPartRequest | undefined): Record<string, any> | undefined {
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
 * @schema EcrpublicUploadLayerPartResponse
 */
export interface EcrpublicUploadLayerPartResponse {
  /**
   * @schema EcrpublicUploadLayerPartResponse#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrpublicUploadLayerPartResponse#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema EcrpublicUploadLayerPartResponse#uploadId
   */
  readonly uploadId?: string;

  /**
   * @schema EcrpublicUploadLayerPartResponse#lastByteReceived
   */
  readonly lastByteReceived?: number;

}

/**
 * Converts an object of type 'EcrpublicUploadLayerPartResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrpublicUploadLayerPartResponse(obj: EcrpublicUploadLayerPartResponse | undefined): Record<string, any> | undefined {
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
 * @schema EcrpublicLayer
 */
export interface EcrpublicLayer {
  /**
   * @schema EcrpublicLayer#layerDigest
   */
  readonly layerDigest?: string;

  /**
   * @schema EcrpublicLayer#layerAvailability
   */
  readonly layerAvailability?: string;

  /**
   * @schema EcrpublicLayer#layerSize
   */
  readonly layerSize?: number;

  /**
   * @schema EcrpublicLayer#mediaType
   */
  readonly mediaType?: string;

}

/**
 * Converts an object of type 'EcrpublicLayer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrpublicLayer(obj: EcrpublicLayer | undefined): Record<string, any> | undefined {
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
 * @schema EcrpublicLayerFailure
 */
export interface EcrpublicLayerFailure {
  /**
   * @schema EcrpublicLayerFailure#layerDigest
   */
  readonly layerDigest?: string;

  /**
   * @schema EcrpublicLayerFailure#failureCode
   */
  readonly failureCode?: string;

  /**
   * @schema EcrpublicLayerFailure#failureReason
   */
  readonly failureReason?: string;

}

/**
 * Converts an object of type 'EcrpublicLayerFailure' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrpublicLayerFailure(obj: EcrpublicLayerFailure | undefined): Record<string, any> | undefined {
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
 * @schema EcrpublicImageIdentifier
 */
export interface EcrpublicImageIdentifier {
  /**
   * @schema EcrpublicImageIdentifier#imageDigest
   */
  readonly imageDigest?: string;

  /**
   * @schema EcrpublicImageIdentifier#imageTag
   */
  readonly imageTag?: string;

}

/**
 * Converts an object of type 'EcrpublicImageIdentifier' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrpublicImageIdentifier(obj: EcrpublicImageIdentifier | undefined): Record<string, any> | undefined {
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
 * @schema EcrpublicImageFailure
 */
export interface EcrpublicImageFailure {
  /**
   * @schema EcrpublicImageFailure#imageId
   */
  readonly imageId?: EcrpublicImageIdentifier;

  /**
   * @schema EcrpublicImageFailure#failureCode
   */
  readonly failureCode?: string;

  /**
   * @schema EcrpublicImageFailure#failureReason
   */
  readonly failureReason?: string;

}

/**
 * Converts an object of type 'EcrpublicImageFailure' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrpublicImageFailure(obj: EcrpublicImageFailure | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'imageId': toJson_EcrpublicImageIdentifier(obj.imageId),
    'failureCode': obj.failureCode,
    'failureReason': obj.failureReason,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcrpublicRepositoryCatalogDataInput
 */
export interface EcrpublicRepositoryCatalogDataInput {
  /**
   * @schema EcrpublicRepositoryCatalogDataInput#description
   */
  readonly description?: string;

  /**
   * @schema EcrpublicRepositoryCatalogDataInput#architectures
   */
  readonly architectures?: string[];

  /**
   * @schema EcrpublicRepositoryCatalogDataInput#operatingSystems
   */
  readonly operatingSystems?: string[];

  /**
   * @schema EcrpublicRepositoryCatalogDataInput#logoImageBlob
   */
  readonly logoImageBlob?: any;

  /**
   * @schema EcrpublicRepositoryCatalogDataInput#aboutText
   */
  readonly aboutText?: string;

  /**
   * @schema EcrpublicRepositoryCatalogDataInput#usageText
   */
  readonly usageText?: string;

}

/**
 * Converts an object of type 'EcrpublicRepositoryCatalogDataInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrpublicRepositoryCatalogDataInput(obj: EcrpublicRepositoryCatalogDataInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'description': obj.description,
    'architectures': obj.architectures?.map(y => y),
    'operatingSystems': obj.operatingSystems?.map(y => y),
    'logoImageBlob': obj.logoImageBlob,
    'aboutText': obj.aboutText,
    'usageText': obj.usageText,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcrpublicTag
 */
export interface EcrpublicTag {
  /**
   * @schema EcrpublicTag#Key
   */
  readonly key?: string;

  /**
   * @schema EcrpublicTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'EcrpublicTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrpublicTag(obj: EcrpublicTag | undefined): Record<string, any> | undefined {
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
 * @schema EcrpublicRepository
 */
export interface EcrpublicRepository {
  /**
   * @schema EcrpublicRepository#repositoryArn
   */
  readonly repositoryArn?: string;

  /**
   * @schema EcrpublicRepository#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrpublicRepository#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema EcrpublicRepository#repositoryUri
   */
  readonly repositoryUri?: string;

  /**
   * @schema EcrpublicRepository#createdAt
   */
  readonly createdAt?: string;

}

/**
 * Converts an object of type 'EcrpublicRepository' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrpublicRepository(obj: EcrpublicRepository | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repositoryArn': obj.repositoryArn,
    'registryId': obj.registryId,
    'repositoryName': obj.repositoryName,
    'repositoryUri': obj.repositoryUri,
    'createdAt': obj.createdAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcrpublicRepositoryCatalogData
 */
export interface EcrpublicRepositoryCatalogData {
  /**
   * @schema EcrpublicRepositoryCatalogData#description
   */
  readonly description?: string;

  /**
   * @schema EcrpublicRepositoryCatalogData#architectures
   */
  readonly architectures?: string[];

  /**
   * @schema EcrpublicRepositoryCatalogData#operatingSystems
   */
  readonly operatingSystems?: string[];

  /**
   * @schema EcrpublicRepositoryCatalogData#logoUrl
   */
  readonly logoUrl?: string;

  /**
   * @schema EcrpublicRepositoryCatalogData#aboutText
   */
  readonly aboutText?: string;

  /**
   * @schema EcrpublicRepositoryCatalogData#usageText
   */
  readonly usageText?: string;

  /**
   * @schema EcrpublicRepositoryCatalogData#marketplaceCertified
   */
  readonly marketplaceCertified?: boolean;

}

/**
 * Converts an object of type 'EcrpublicRepositoryCatalogData' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrpublicRepositoryCatalogData(obj: EcrpublicRepositoryCatalogData | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'description': obj.description,
    'architectures': obj.architectures?.map(y => y),
    'operatingSystems': obj.operatingSystems?.map(y => y),
    'logoUrl': obj.logoUrl,
    'aboutText': obj.aboutText,
    'usageText': obj.usageText,
    'marketplaceCertified': obj.marketplaceCertified,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcrpublicImageTagDetail
 */
export interface EcrpublicImageTagDetail {
  /**
   * @schema EcrpublicImageTagDetail#imageTag
   */
  readonly imageTag?: string;

  /**
   * @schema EcrpublicImageTagDetail#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema EcrpublicImageTagDetail#imageDetail
   */
  readonly imageDetail?: EcrpublicReferencedImageDetail;

}

/**
 * Converts an object of type 'EcrpublicImageTagDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrpublicImageTagDetail(obj: EcrpublicImageTagDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'imageTag': obj.imageTag,
    'createdAt': obj.createdAt,
    'imageDetail': toJson_EcrpublicReferencedImageDetail(obj.imageDetail),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcrpublicImageDetail
 */
export interface EcrpublicImageDetail {
  /**
   * @schema EcrpublicImageDetail#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrpublicImageDetail#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema EcrpublicImageDetail#imageDigest
   */
  readonly imageDigest?: string;

  /**
   * @schema EcrpublicImageDetail#imageTags
   */
  readonly imageTags?: string[];

  /**
   * @schema EcrpublicImageDetail#imageSizeInBytes
   */
  readonly imageSizeInBytes?: number;

  /**
   * @schema EcrpublicImageDetail#imagePushedAt
   */
  readonly imagePushedAt?: string;

  /**
   * @schema EcrpublicImageDetail#imageManifestMediaType
   */
  readonly imageManifestMediaType?: string;

  /**
   * @schema EcrpublicImageDetail#artifactMediaType
   */
  readonly artifactMediaType?: string;

}

/**
 * Converts an object of type 'EcrpublicImageDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrpublicImageDetail(obj: EcrpublicImageDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'registryId': obj.registryId,
    'repositoryName': obj.repositoryName,
    'imageDigest': obj.imageDigest,
    'imageTags': obj.imageTags?.map(y => y),
    'imageSizeInBytes': obj.imageSizeInBytes,
    'imagePushedAt': obj.imagePushedAt,
    'imageManifestMediaType': obj.imageManifestMediaType,
    'artifactMediaType': obj.artifactMediaType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcrpublicRegistry
 */
export interface EcrpublicRegistry {
  /**
   * @schema EcrpublicRegistry#registryId
   */
  readonly registryId: string;

  /**
   * @schema EcrpublicRegistry#registryArn
   */
  readonly registryArn: string;

  /**
   * @schema EcrpublicRegistry#registryUri
   */
  readonly registryUri: string;

  /**
   * @schema EcrpublicRegistry#verified
   */
  readonly verified: boolean;

  /**
   * @schema EcrpublicRegistry#aliases
   */
  readonly aliases: EcrpublicRegistryAlias[];

}

/**
 * Converts an object of type 'EcrpublicRegistry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrpublicRegistry(obj: EcrpublicRegistry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'registryId': obj.registryId,
    'registryArn': obj.registryArn,
    'registryUri': obj.registryUri,
    'verified': obj.verified,
    'aliases': obj.aliases?.map(y => toJson_EcrpublicRegistryAlias(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcrpublicAuthorizationData
 */
export interface EcrpublicAuthorizationData {
  /**
   * @schema EcrpublicAuthorizationData#authorizationToken
   */
  readonly authorizationToken?: string;

  /**
   * @schema EcrpublicAuthorizationData#expiresAt
   */
  readonly expiresAt?: string;

}

/**
 * Converts an object of type 'EcrpublicAuthorizationData' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrpublicAuthorizationData(obj: EcrpublicAuthorizationData | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'authorizationToken': obj.authorizationToken,
    'expiresAt': obj.expiresAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcrpublicRegistryCatalogData
 */
export interface EcrpublicRegistryCatalogData {
  /**
   * @schema EcrpublicRegistryCatalogData#displayName
   */
  readonly displayName?: string;

}

/**
 * Converts an object of type 'EcrpublicRegistryCatalogData' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrpublicRegistryCatalogData(obj: EcrpublicRegistryCatalogData | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'displayName': obj.displayName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcrpublicImage
 */
export interface EcrpublicImage {
  /**
   * @schema EcrpublicImage#registryId
   */
  readonly registryId?: string;

  /**
   * @schema EcrpublicImage#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema EcrpublicImage#imageId
   */
  readonly imageId?: EcrpublicImageIdentifier;

  /**
   * @schema EcrpublicImage#imageManifest
   */
  readonly imageManifest?: string;

  /**
   * @schema EcrpublicImage#imageManifestMediaType
   */
  readonly imageManifestMediaType?: string;

}

/**
 * Converts an object of type 'EcrpublicImage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrpublicImage(obj: EcrpublicImage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'registryId': obj.registryId,
    'repositoryName': obj.repositoryName,
    'imageId': toJson_EcrpublicImageIdentifier(obj.imageId),
    'imageManifest': obj.imageManifest,
    'imageManifestMediaType': obj.imageManifestMediaType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcrpublicReferencedImageDetail
 */
export interface EcrpublicReferencedImageDetail {
  /**
   * @schema EcrpublicReferencedImageDetail#imageDigest
   */
  readonly imageDigest?: string;

  /**
   * @schema EcrpublicReferencedImageDetail#imageSizeInBytes
   */
  readonly imageSizeInBytes?: number;

  /**
   * @schema EcrpublicReferencedImageDetail#imagePushedAt
   */
  readonly imagePushedAt?: string;

  /**
   * @schema EcrpublicReferencedImageDetail#imageManifestMediaType
   */
  readonly imageManifestMediaType?: string;

  /**
   * @schema EcrpublicReferencedImageDetail#artifactMediaType
   */
  readonly artifactMediaType?: string;

}

/**
 * Converts an object of type 'EcrpublicReferencedImageDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrpublicReferencedImageDetail(obj: EcrpublicReferencedImageDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'imageDigest': obj.imageDigest,
    'imageSizeInBytes': obj.imageSizeInBytes,
    'imagePushedAt': obj.imagePushedAt,
    'imageManifestMediaType': obj.imageManifestMediaType,
    'artifactMediaType': obj.artifactMediaType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcrpublicRegistryAlias
 */
export interface EcrpublicRegistryAlias {
  /**
   * @schema EcrpublicRegistryAlias#name
   */
  readonly name: string;

  /**
   * @schema EcrpublicRegistryAlias#status
   */
  readonly status: string;

  /**
   * @schema EcrpublicRegistryAlias#primaryRegistryAlias
   */
  readonly primaryRegistryAlias: boolean;

  /**
   * @schema EcrpublicRegistryAlias#defaultRegistryAlias
   */
  readonly defaultRegistryAlias: boolean;

}

/**
 * Converts an object of type 'EcrpublicRegistryAlias' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcrpublicRegistryAlias(obj: EcrpublicRegistryAlias | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'status': obj.status,
    'primaryRegistryAlias': obj.primaryRegistryAlias,
    'defaultRegistryAlias': obj.defaultRegistryAlias,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
