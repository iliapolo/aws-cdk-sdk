/**
 * @schema ElasticInferenceDescribeAcceleratorOfferingsRequest
 */
export interface ElasticInferenceDescribeAcceleratorOfferingsRequest {
  /**
   * @schema ElasticInferenceDescribeAcceleratorOfferingsRequest#locationType
   */
  readonly locationType: string;

  /**
   * @schema ElasticInferenceDescribeAcceleratorOfferingsRequest#acceleratorTypes
   */
  readonly acceleratorTypes?: string[];

}

/**
 * @schema ElasticInferenceDescribeAcceleratorOfferingsResponse
 */
export interface ElasticInferenceDescribeAcceleratorOfferingsResponse {
  /**
   * @schema ElasticInferenceDescribeAcceleratorOfferingsResponse#acceleratorTypeOfferings
   */
  readonly acceleratorTypeOfferings?: ElasticInferenceAcceleratorTypeOffering[];

}

/**
 * @schema ElasticInferenceDescribeAcceleratorTypesRequest
 */
export interface ElasticInferenceDescribeAcceleratorTypesRequest {
}

/**
 * @schema ElasticInferenceDescribeAcceleratorTypesResponse
 */
export interface ElasticInferenceDescribeAcceleratorTypesResponse {
  /**
   * @schema ElasticInferenceDescribeAcceleratorTypesResponse#acceleratorTypes
   */
  readonly acceleratorTypes?: ElasticInferenceAcceleratorType[];

}

/**
 * @schema ElasticInferenceDescribeAcceleratorsRequest
 */
export interface ElasticInferenceDescribeAcceleratorsRequest {
  /**
   * @schema ElasticInferenceDescribeAcceleratorsRequest#acceleratorIds
   */
  readonly acceleratorIds?: string[];

  /**
   * @schema ElasticInferenceDescribeAcceleratorsRequest#filters
   */
  readonly filters?: ElasticInferenceFilter[];

  /**
   * @schema ElasticInferenceDescribeAcceleratorsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ElasticInferenceDescribeAcceleratorsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ElasticInferenceDescribeAcceleratorsResponse
 */
export interface ElasticInferenceDescribeAcceleratorsResponse {
  /**
   * @schema ElasticInferenceDescribeAcceleratorsResponse#acceleratorSet
   */
  readonly acceleratorSet?: ElasticInferenceElasticInferenceAccelerator[];

  /**
   * @schema ElasticInferenceDescribeAcceleratorsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ElasticInferenceListTagsForResourceRequest
 */
export interface ElasticInferenceListTagsForResourceRequest {
  /**
   * @schema ElasticInferenceListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema ElasticInferenceListTagsForResourceResult
 */
export interface ElasticInferenceListTagsForResourceResult {
  /**
   * @schema ElasticInferenceListTagsForResourceResult#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema ElasticInferenceTagResourceRequest
 */
export interface ElasticInferenceTagResourceRequest {
  /**
   * @schema ElasticInferenceTagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema ElasticInferenceTagResourceRequest#tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema ElasticInferenceTagResourceResult
 */
export interface ElasticInferenceTagResourceResult {
}

/**
 * @schema ElasticInferenceUntagResourceRequest
 */
export interface ElasticInferenceUntagResourceRequest {
  /**
   * @schema ElasticInferenceUntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema ElasticInferenceUntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema ElasticInferenceUntagResourceResult
 */
export interface ElasticInferenceUntagResourceResult {
}

/**
 * @schema ElasticInferenceAcceleratorTypeOffering
 */
export interface ElasticInferenceAcceleratorTypeOffering {
  /**
   * @schema ElasticInferenceAcceleratorTypeOffering#acceleratorType
   */
  readonly acceleratorType?: string;

  /**
   * @schema ElasticInferenceAcceleratorTypeOffering#locationType
   */
  readonly locationType?: string;

  /**
   * @schema ElasticInferenceAcceleratorTypeOffering#location
   */
  readonly location?: string;

}

/**
 * @schema ElasticInferenceAcceleratorType
 */
export interface ElasticInferenceAcceleratorType {
  /**
   * @schema ElasticInferenceAcceleratorType#acceleratorTypeName
   */
  readonly acceleratorTypeName?: string;

  /**
   * @schema ElasticInferenceAcceleratorType#memoryInfo
   */
  readonly memoryInfo?: ElasticInferenceMemoryInfo;

  /**
   * @schema ElasticInferenceAcceleratorType#throughputInfo
   */
  readonly throughputInfo?: ElasticInferenceKeyValuePair[];

}

/**
 * @schema ElasticInferenceFilter
 */
export interface ElasticInferenceFilter {
  /**
   * @schema ElasticInferenceFilter#name
   */
  readonly name?: string;

  /**
   * @schema ElasticInferenceFilter#values
   */
  readonly values?: string[];

}

/**
 * @schema ElasticInferenceElasticInferenceAccelerator
 */
export interface ElasticInferenceElasticInferenceAccelerator {
  /**
   * @schema ElasticInferenceElasticInferenceAccelerator#acceleratorHealth
   */
  readonly acceleratorHealth?: ElasticInferenceElasticInferenceAcceleratorHealth;

  /**
   * @schema ElasticInferenceElasticInferenceAccelerator#acceleratorType
   */
  readonly acceleratorType?: string;

  /**
   * @schema ElasticInferenceElasticInferenceAccelerator#acceleratorId
   */
  readonly acceleratorId?: string;

  /**
   * @schema ElasticInferenceElasticInferenceAccelerator#availabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema ElasticInferenceElasticInferenceAccelerator#attachedResource
   */
  readonly attachedResource?: string;

}

/**
 * @schema ElasticInferenceMemoryInfo
 */
export interface ElasticInferenceMemoryInfo {
  /**
   * @schema ElasticInferenceMemoryInfo#sizeInMiB
   */
  readonly sizeInMiB?: number;

}

/**
 * @schema ElasticInferenceKeyValuePair
 */
export interface ElasticInferenceKeyValuePair {
  /**
   * @schema ElasticInferenceKeyValuePair#key
   */
  readonly key?: string;

  /**
   * @schema ElasticInferenceKeyValuePair#value
   */
  readonly value?: number;

}

/**
 * @schema ElasticInferenceElasticInferenceAcceleratorHealth
 */
export interface ElasticInferenceElasticInferenceAcceleratorHealth {
  /**
   * @schema ElasticInferenceElasticInferenceAcceleratorHealth#status
   */
  readonly status?: string;

}
