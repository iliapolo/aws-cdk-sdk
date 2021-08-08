/**
 * @schema MediaStoreDataDeleteObjectRequest
 */
export interface MediaStoreDataDeleteObjectRequest {
  /**
   * @schema MediaStoreDataDeleteObjectRequest#Path
   */
  readonly path?: string;

}

/**
 * Converts an object of type 'MediaStoreDataDeleteObjectRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaStoreDataDeleteObjectRequest(obj: MediaStoreDataDeleteObjectRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Path': obj.path,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaStoreDataDeleteObjectResponse
 */
export interface MediaStoreDataDeleteObjectResponse {
}

/**
 * Converts an object of type 'MediaStoreDataDeleteObjectResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaStoreDataDeleteObjectResponse(obj: MediaStoreDataDeleteObjectResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaStoreDataDescribeObjectRequest
 */
export interface MediaStoreDataDescribeObjectRequest {
  /**
   * @schema MediaStoreDataDescribeObjectRequest#Path
   */
  readonly path?: string;

}

/**
 * Converts an object of type 'MediaStoreDataDescribeObjectRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaStoreDataDescribeObjectRequest(obj: MediaStoreDataDescribeObjectRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Path': obj.path,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaStoreDataDescribeObjectResponse
 */
export interface MediaStoreDataDescribeObjectResponse {
  /**
   * @schema MediaStoreDataDescribeObjectResponse#ETag
   */
  readonly eTag?: string;

  /**
   * @schema MediaStoreDataDescribeObjectResponse#ContentType
   */
  readonly contentType?: string;

  /**
   * @schema MediaStoreDataDescribeObjectResponse#ContentLength
   */
  readonly contentLength?: number;

  /**
   * @schema MediaStoreDataDescribeObjectResponse#CacheControl
   */
  readonly cacheControl?: string;

  /**
   * @schema MediaStoreDataDescribeObjectResponse#LastModified
   */
  readonly lastModified?: string;

}

/**
 * Converts an object of type 'MediaStoreDataDescribeObjectResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaStoreDataDescribeObjectResponse(obj: MediaStoreDataDescribeObjectResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ETag': obj.eTag,
    'ContentType': obj.contentType,
    'ContentLength': obj.contentLength,
    'CacheControl': obj.cacheControl,
    'LastModified': obj.lastModified,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaStoreDataGetObjectRequest
 */
export interface MediaStoreDataGetObjectRequest {
  /**
   * @schema MediaStoreDataGetObjectRequest#Path
   */
  readonly path?: string;

  /**
   * @schema MediaStoreDataGetObjectRequest#Range
   */
  readonly range?: string;

}

/**
 * Converts an object of type 'MediaStoreDataGetObjectRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaStoreDataGetObjectRequest(obj: MediaStoreDataGetObjectRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Path': obj.path,
    'Range': obj.range,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaStoreDataGetObjectResponse
 */
export interface MediaStoreDataGetObjectResponse {
  /**
   * @schema MediaStoreDataGetObjectResponse#Body
   */
  readonly body?: any;

  /**
   * @schema MediaStoreDataGetObjectResponse#CacheControl
   */
  readonly cacheControl?: string;

  /**
   * @schema MediaStoreDataGetObjectResponse#ContentRange
   */
  readonly contentRange?: string;

  /**
   * @schema MediaStoreDataGetObjectResponse#ContentLength
   */
  readonly contentLength?: number;

  /**
   * @schema MediaStoreDataGetObjectResponse#ContentType
   */
  readonly contentType?: string;

  /**
   * @schema MediaStoreDataGetObjectResponse#ETag
   */
  readonly eTag?: string;

  /**
   * @schema MediaStoreDataGetObjectResponse#LastModified
   */
  readonly lastModified?: string;

  /**
   * @schema MediaStoreDataGetObjectResponse#StatusCode
   */
  readonly statusCode?: number;

}

/**
 * Converts an object of type 'MediaStoreDataGetObjectResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaStoreDataGetObjectResponse(obj: MediaStoreDataGetObjectResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Body': obj.body,
    'CacheControl': obj.cacheControl,
    'ContentRange': obj.contentRange,
    'ContentLength': obj.contentLength,
    'ContentType': obj.contentType,
    'ETag': obj.eTag,
    'LastModified': obj.lastModified,
    'StatusCode': obj.statusCode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaStoreDataListItemsRequest
 */
export interface MediaStoreDataListItemsRequest {
  /**
   * @schema MediaStoreDataListItemsRequest#Path
   */
  readonly path?: string;

  /**
   * @schema MediaStoreDataListItemsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MediaStoreDataListItemsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'MediaStoreDataListItemsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaStoreDataListItemsRequest(obj: MediaStoreDataListItemsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Path': obj.path,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaStoreDataListItemsResponse
 */
export interface MediaStoreDataListItemsResponse {
  /**
   * @schema MediaStoreDataListItemsResponse#Items
   */
  readonly items?: MediaStoreDataItem[];

  /**
   * @schema MediaStoreDataListItemsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'MediaStoreDataListItemsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaStoreDataListItemsResponse(obj: MediaStoreDataListItemsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Items': obj.items?.map(y => toJson_MediaStoreDataItem(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaStoreDataPutObjectRequest
 */
export interface MediaStoreDataPutObjectRequest {
  /**
   * @schema MediaStoreDataPutObjectRequest#Body
   */
  readonly body?: any;

  /**
   * @schema MediaStoreDataPutObjectRequest#Path
   */
  readonly path?: string;

  /**
   * @schema MediaStoreDataPutObjectRequest#ContentType
   */
  readonly contentType?: string;

  /**
   * @schema MediaStoreDataPutObjectRequest#CacheControl
   */
  readonly cacheControl?: string;

  /**
   * @schema MediaStoreDataPutObjectRequest#StorageClass
   */
  readonly storageClass?: string;

  /**
   * @schema MediaStoreDataPutObjectRequest#UploadAvailability
   */
  readonly uploadAvailability?: string;

}

/**
 * Converts an object of type 'MediaStoreDataPutObjectRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaStoreDataPutObjectRequest(obj: MediaStoreDataPutObjectRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Body': obj.body,
    'Path': obj.path,
    'ContentType': obj.contentType,
    'CacheControl': obj.cacheControl,
    'StorageClass': obj.storageClass,
    'UploadAvailability': obj.uploadAvailability,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaStoreDataPutObjectResponse
 */
export interface MediaStoreDataPutObjectResponse {
  /**
   * @schema MediaStoreDataPutObjectResponse#ContentSHA256
   */
  readonly contentSha256?: string;

  /**
   * @schema MediaStoreDataPutObjectResponse#ETag
   */
  readonly eTag?: string;

  /**
   * @schema MediaStoreDataPutObjectResponse#StorageClass
   */
  readonly storageClass?: string;

}

/**
 * Converts an object of type 'MediaStoreDataPutObjectResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaStoreDataPutObjectResponse(obj: MediaStoreDataPutObjectResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContentSHA256': obj.contentSha256,
    'ETag': obj.eTag,
    'StorageClass': obj.storageClass,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaStoreDataItem
 */
export interface MediaStoreDataItem {
  /**
   * @schema MediaStoreDataItem#Name
   */
  readonly name?: string;

  /**
   * @schema MediaStoreDataItem#Type
   */
  readonly type?: string;

  /**
   * @schema MediaStoreDataItem#ETag
   */
  readonly eTag?: string;

  /**
   * @schema MediaStoreDataItem#LastModified
   */
  readonly lastModified?: string;

  /**
   * @schema MediaStoreDataItem#ContentType
   */
  readonly contentType?: string;

  /**
   * @schema MediaStoreDataItem#ContentLength
   */
  readonly contentLength?: number;

}

/**
 * Converts an object of type 'MediaStoreDataItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaStoreDataItem(obj: MediaStoreDataItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Type': obj.type,
    'ETag': obj.eTag,
    'LastModified': obj.lastModified,
    'ContentType': obj.contentType,
    'ContentLength': obj.contentLength,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
