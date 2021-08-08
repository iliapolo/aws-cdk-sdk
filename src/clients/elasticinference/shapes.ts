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
 * Converts an object of type 'ElasticInferenceDescribeAcceleratorOfferingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticInferenceDescribeAcceleratorOfferingsRequest(obj: ElasticInferenceDescribeAcceleratorOfferingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'locationType': obj.locationType,
    'acceleratorTypes': obj.acceleratorTypes?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticInferenceDescribeAcceleratorOfferingsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticInferenceDescribeAcceleratorOfferingsResponse(obj: ElasticInferenceDescribeAcceleratorOfferingsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'acceleratorTypeOfferings': obj.acceleratorTypeOfferings?.map(y => toJson_ElasticInferenceAcceleratorTypeOffering(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticInferenceDescribeAcceleratorTypesRequest
 */
export interface ElasticInferenceDescribeAcceleratorTypesRequest {
}

/**
 * Converts an object of type 'ElasticInferenceDescribeAcceleratorTypesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticInferenceDescribeAcceleratorTypesRequest(obj: ElasticInferenceDescribeAcceleratorTypesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticInferenceDescribeAcceleratorTypesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticInferenceDescribeAcceleratorTypesResponse(obj: ElasticInferenceDescribeAcceleratorTypesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'acceleratorTypes': obj.acceleratorTypes?.map(y => toJson_ElasticInferenceAcceleratorType(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticInferenceDescribeAcceleratorsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticInferenceDescribeAcceleratorsRequest(obj: ElasticInferenceDescribeAcceleratorsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'acceleratorIds': obj.acceleratorIds?.map(y => y),
    'filters': obj.filters?.map(y => toJson_ElasticInferenceFilter(y)),
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticInferenceDescribeAcceleratorsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticInferenceDescribeAcceleratorsResponse(obj: ElasticInferenceDescribeAcceleratorsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'acceleratorSet': obj.acceleratorSet?.map(y => toJson_ElasticInferenceElasticInferenceAccelerator(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticInferenceListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticInferenceListTagsForResourceRequest(obj: ElasticInferenceListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticInferenceListTagsForResourceResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticInferenceListTagsForResourceResult(obj: ElasticInferenceListTagsForResourceResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticInferenceTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticInferenceTagResourceRequest(obj: ElasticInferenceTagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema ElasticInferenceTagResourceResult
 */
export interface ElasticInferenceTagResourceResult {
}

/**
 * Converts an object of type 'ElasticInferenceTagResourceResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticInferenceTagResourceResult(obj: ElasticInferenceTagResourceResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticInferenceUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticInferenceUntagResourceRequest(obj: ElasticInferenceUntagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema ElasticInferenceUntagResourceResult
 */
export interface ElasticInferenceUntagResourceResult {
}

/**
 * Converts an object of type 'ElasticInferenceUntagResourceResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticInferenceUntagResourceResult(obj: ElasticInferenceUntagResourceResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticInferenceAcceleratorTypeOffering' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticInferenceAcceleratorTypeOffering(obj: ElasticInferenceAcceleratorTypeOffering | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'acceleratorType': obj.acceleratorType,
    'locationType': obj.locationType,
    'location': obj.location,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticInferenceAcceleratorType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticInferenceAcceleratorType(obj: ElasticInferenceAcceleratorType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'acceleratorTypeName': obj.acceleratorTypeName,
    'memoryInfo': toJson_ElasticInferenceMemoryInfo(obj.memoryInfo),
    'throughputInfo': obj.throughputInfo?.map(y => toJson_ElasticInferenceKeyValuePair(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticInferenceFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticInferenceFilter(obj: ElasticInferenceFilter | undefined): Record<string, any> | undefined {
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
 * Converts an object of type 'ElasticInferenceElasticInferenceAccelerator' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticInferenceElasticInferenceAccelerator(obj: ElasticInferenceElasticInferenceAccelerator | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'acceleratorHealth': toJson_ElasticInferenceElasticInferenceAcceleratorHealth(obj.acceleratorHealth),
    'acceleratorType': obj.acceleratorType,
    'acceleratorId': obj.acceleratorId,
    'availabilityZone': obj.availabilityZone,
    'attachedResource': obj.attachedResource,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticInferenceMemoryInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticInferenceMemoryInfo(obj: ElasticInferenceMemoryInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'sizeInMiB': obj.sizeInMiB,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticInferenceKeyValuePair' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticInferenceKeyValuePair(obj: ElasticInferenceKeyValuePair | undefined): Record<string, any> | undefined {
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
 * @schema ElasticInferenceElasticInferenceAcceleratorHealth
 */
export interface ElasticInferenceElasticInferenceAcceleratorHealth {
  /**
   * @schema ElasticInferenceElasticInferenceAcceleratorHealth#status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'ElasticInferenceElasticInferenceAcceleratorHealth' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticInferenceElasticInferenceAcceleratorHealth(obj: ElasticInferenceElasticInferenceAcceleratorHealth | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
