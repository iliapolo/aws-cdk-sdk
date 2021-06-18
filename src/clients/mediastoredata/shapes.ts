/**
 * @schema MediaStoreDataDeleteObjectRequest
 */
export interface MediaStoreDataDeleteObjectRequest {
  /**
   * @schema MediaStoreDataDeleteObjectRequest#Path
   */
  readonly path: string;

}

/**
 * @schema MediaStoreDataDeleteObjectResponse
 */
export interface MediaStoreDataDeleteObjectResponse {
}

/**
 * @schema MediaStoreDataDescribeObjectRequest
 */
export interface MediaStoreDataDescribeObjectRequest {
  /**
   * @schema MediaStoreDataDescribeObjectRequest#Path
   */
  readonly path: string;

}

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
 * @schema MediaStoreDataGetObjectRequest
 */
export interface MediaStoreDataGetObjectRequest {
  /**
   * @schema MediaStoreDataGetObjectRequest#Path
   */
  readonly path: string;

  /**
   * @schema MediaStoreDataGetObjectRequest#Range
   */
  readonly range?: string;

}

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
  readonly statusCode: number;

}

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
 * @schema MediaStoreDataPutObjectRequest
 */
export interface MediaStoreDataPutObjectRequest {
  /**
   * @schema MediaStoreDataPutObjectRequest#Body
   */
  readonly body: any;

  /**
   * @schema MediaStoreDataPutObjectRequest#Path
   */
  readonly path: string;

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
