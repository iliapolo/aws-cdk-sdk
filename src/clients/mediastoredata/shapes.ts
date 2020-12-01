/**
 * @schema DeleteObjectRequest
 */
export interface DeleteObjectRequest {
  /**
   * @schema DeleteObjectRequest#Path
   */
  readonly path: string;

}

/**
 * @schema DeleteObjectResponse
 */
export interface DeleteObjectResponse {
}

/**
 * @schema DescribeObjectRequest
 */
export interface DescribeObjectRequest {
  /**
   * @schema DescribeObjectRequest#Path
   */
  readonly path: string;

}

/**
 * @schema DescribeObjectResponse
 */
export interface DescribeObjectResponse {
  /**
   * @schema DescribeObjectResponse#ETag
   */
  readonly eTag?: string;

  /**
   * @schema DescribeObjectResponse#ContentType
   */
  readonly contentType?: string;

  /**
   * @schema DescribeObjectResponse#ContentLength
   */
  readonly contentLength?: number;

  /**
   * @schema DescribeObjectResponse#CacheControl
   */
  readonly cacheControl?: string;

  /**
   * @schema DescribeObjectResponse#LastModified
   */
  readonly lastModified?: string;

}

/**
 * @schema GetObjectRequest
 */
export interface GetObjectRequest {
  /**
   * @schema GetObjectRequest#Path
   */
  readonly path: string;

  /**
   * @schema GetObjectRequest#Range
   */
  readonly range?: string;

}

/**
 * @schema GetObjectResponse
 */
export interface GetObjectResponse {
  /**
   * @schema GetObjectResponse#Body
   */
  readonly body?: any;

  /**
   * @schema GetObjectResponse#CacheControl
   */
  readonly cacheControl?: string;

  /**
   * @schema GetObjectResponse#ContentRange
   */
  readonly contentRange?: string;

  /**
   * @schema GetObjectResponse#ContentLength
   */
  readonly contentLength?: number;

  /**
   * @schema GetObjectResponse#ContentType
   */
  readonly contentType?: string;

  /**
   * @schema GetObjectResponse#ETag
   */
  readonly eTag?: string;

  /**
   * @schema GetObjectResponse#LastModified
   */
  readonly lastModified?: string;

  /**
   * @schema GetObjectResponse#StatusCode
   */
  readonly statusCode: number;

}

/**
 * @schema ListItemsRequest
 */
export interface ListItemsRequest {
  /**
   * @schema ListItemsRequest#Path
   */
  readonly path?: string;

  /**
   * @schema ListItemsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListItemsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListItemsResponse
 */
export interface ListItemsResponse {
  /**
   * @schema ListItemsResponse#Items
   */
  readonly items?: Item[];

  /**
   * @schema ListItemsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema PutObjectRequest
 */
export interface PutObjectRequest {
  /**
   * @schema PutObjectRequest#Body
   */
  readonly body: any;

  /**
   * @schema PutObjectRequest#Path
   */
  readonly path: string;

  /**
   * @schema PutObjectRequest#ContentType
   */
  readonly contentType?: string;

  /**
   * @schema PutObjectRequest#CacheControl
   */
  readonly cacheControl?: string;

  /**
   * @schema PutObjectRequest#StorageClass
   */
  readonly storageClass?: string;

  /**
   * @schema PutObjectRequest#UploadAvailability
   */
  readonly uploadAvailability?: string;

}

/**
 * @schema PutObjectResponse
 */
export interface PutObjectResponse {
  /**
   * @schema PutObjectResponse#ContentSHA256
   */
  readonly contentSha256?: string;

  /**
   * @schema PutObjectResponse#ETag
   */
  readonly eTag?: string;

  /**
   * @schema PutObjectResponse#StorageClass
   */
  readonly storageClass?: string;

}

/**
 * @schema Item
 */
export interface Item {
  /**
   * @schema Item#Name
   */
  readonly name?: string;

  /**
   * @schema Item#Type
   */
  readonly type?: string;

  /**
   * @schema Item#ETag
   */
  readonly eTag?: string;

  /**
   * @schema Item#LastModified
   */
  readonly lastModified?: string;

  /**
   * @schema Item#ContentType
   */
  readonly contentType?: string;

  /**
   * @schema Item#ContentLength
   */
  readonly contentLength?: number;

}
