/**
 * @schema S3OutpostsCreateEndpointRequest
 */
export interface S3OutpostsCreateEndpointRequest {
  /**
   * @schema S3OutpostsCreateEndpointRequest#OutpostId
   */
  readonly outpostId: string;

  /**
   * @schema S3OutpostsCreateEndpointRequest#SubnetId
   */
  readonly subnetId: string;

  /**
   * @schema S3OutpostsCreateEndpointRequest#SecurityGroupId
   */
  readonly securityGroupId: string;

}

/**
 * @schema S3OutpostsCreateEndpointResult
 */
export interface S3OutpostsCreateEndpointResult {
  /**
   * @schema S3OutpostsCreateEndpointResult#EndpointArn
   */
  readonly endpointArn?: string;

}

/**
 * @schema S3OutpostsDeleteEndpointRequest
 */
export interface S3OutpostsDeleteEndpointRequest {
  /**
   * @schema S3OutpostsDeleteEndpointRequest#EndpointId
   */
  readonly endpointId: string;

  /**
   * @schema S3OutpostsDeleteEndpointRequest#OutpostId
   */
  readonly outpostId: string;

}

/**
 * @schema S3OutpostsListEndpointsRequest
 */
export interface S3OutpostsListEndpointsRequest {
  /**
   * @schema S3OutpostsListEndpointsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema S3OutpostsListEndpointsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema S3OutpostsListEndpointsResult
 */
export interface S3OutpostsListEndpointsResult {
  /**
   * @schema S3OutpostsListEndpointsResult#Endpoints
   */
  readonly endpoints?: S3OutpostsEndpoint[];

  /**
   * @schema S3OutpostsListEndpointsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema S3OutpostsEndpoint
 */
export interface S3OutpostsEndpoint {
  /**
   * @schema S3OutpostsEndpoint#EndpointArn
   */
  readonly endpointArn?: string;

  /**
   * @schema S3OutpostsEndpoint#OutpostsId
   */
  readonly outpostsId?: string;

  /**
   * @schema S3OutpostsEndpoint#CidrBlock
   */
  readonly cidrBlock?: string;

  /**
   * @schema S3OutpostsEndpoint#Status
   */
  readonly status?: string;

  /**
   * @schema S3OutpostsEndpoint#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema S3OutpostsEndpoint#NetworkInterfaces
   */
  readonly networkInterfaces?: S3OutpostsNetworkInterface[];

}

/**
 * @schema S3OutpostsNetworkInterface
 */
export interface S3OutpostsNetworkInterface {
  /**
   * @schema S3OutpostsNetworkInterface#NetworkInterfaceId
   */
  readonly networkInterfaceId?: string;

}
