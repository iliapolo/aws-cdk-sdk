/**
 * @schema DescribeAcceleratorOfferingsRequest
 */
export interface DescribeAcceleratorOfferingsRequest {
  /**
   * @schema DescribeAcceleratorOfferingsRequest#locationType
   */
  readonly locationType: string;

  /**
   * @schema DescribeAcceleratorOfferingsRequest#acceleratorTypes
   */
  readonly acceleratorTypes?: string[];

}

/**
 * @schema DescribeAcceleratorOfferingsResponse
 */
export interface DescribeAcceleratorOfferingsResponse {
  /**
   * @schema DescribeAcceleratorOfferingsResponse#acceleratorTypeOfferings
   */
  readonly acceleratorTypeOfferings?: AcceleratorTypeOffering[];

}

/**
 * @schema DescribeAcceleratorTypesRequest
 */
export interface DescribeAcceleratorTypesRequest {
}

/**
 * @schema DescribeAcceleratorTypesResponse
 */
export interface DescribeAcceleratorTypesResponse {
  /**
   * @schema DescribeAcceleratorTypesResponse#acceleratorTypes
   */
  readonly acceleratorTypes?: AcceleratorType[];

}

/**
 * @schema DescribeAcceleratorsRequest
 */
export interface DescribeAcceleratorsRequest {
  /**
   * @schema DescribeAcceleratorsRequest#acceleratorIds
   */
  readonly acceleratorIds?: string[];

  /**
   * @schema DescribeAcceleratorsRequest#filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeAcceleratorsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeAcceleratorsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeAcceleratorsResponse
 */
export interface DescribeAcceleratorsResponse {
  /**
   * @schema DescribeAcceleratorsResponse#acceleratorSet
   */
  readonly acceleratorSet?: ElasticInferenceAccelerator[];

  /**
   * @schema DescribeAcceleratorsResponse#nextToken
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
 * @schema ListTagsForResourceResult
 */
export interface ListTagsForResourceResult {
  /**
   * @schema ListTagsForResourceResult#tags
   */
  readonly tags?: { [key: string]: string };

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
 * @schema TagResourceResult
 */
export interface TagResourceResult {
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
 * @schema UntagResourceResult
 */
export interface UntagResourceResult {
}

/**
 * @schema AcceleratorTypeOffering
 */
export interface AcceleratorTypeOffering {
  /**
   * @schema AcceleratorTypeOffering#acceleratorType
   */
  readonly acceleratorType?: string;

  /**
   * @schema AcceleratorTypeOffering#locationType
   */
  readonly locationType?: string;

  /**
   * @schema AcceleratorTypeOffering#location
   */
  readonly location?: string;

}

/**
 * @schema AcceleratorType
 */
export interface AcceleratorType {
  /**
   * @schema AcceleratorType#acceleratorTypeName
   */
  readonly acceleratorTypeName?: string;

  /**
   * @schema AcceleratorType#memoryInfo
   */
  readonly memoryInfo?: MemoryInfo;

  /**
   * @schema AcceleratorType#throughputInfo
   */
  readonly throughputInfo?: KeyValuePair[];

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
 * @schema ElasticInferenceAccelerator
 */
export interface ElasticInferenceAccelerator {
  /**
   * @schema ElasticInferenceAccelerator#acceleratorHealth
   */
  readonly acceleratorHealth?: ElasticInferenceAcceleratorHealth;

  /**
   * @schema ElasticInferenceAccelerator#acceleratorType
   */
  readonly acceleratorType?: string;

  /**
   * @schema ElasticInferenceAccelerator#acceleratorId
   */
  readonly acceleratorId?: string;

  /**
   * @schema ElasticInferenceAccelerator#availabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema ElasticInferenceAccelerator#attachedResource
   */
  readonly attachedResource?: string;

}

/**
 * @schema MemoryInfo
 */
export interface MemoryInfo {
  /**
   * @schema MemoryInfo#sizeInMiB
   */
  readonly sizeInMiB?: number;

}

/**
 * @schema KeyValuePair
 */
export interface KeyValuePair {
  /**
   * @schema KeyValuePair#key
   */
  readonly key?: string;

  /**
   * @schema KeyValuePair#value
   */
  readonly value?: number;

}

/**
 * @schema ElasticInferenceAcceleratorHealth
 */
export interface ElasticInferenceAcceleratorHealth {
  /**
   * @schema ElasticInferenceAcceleratorHealth#status
   */
  readonly status?: string;

}
