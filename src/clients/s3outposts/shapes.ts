/**
 * @schema CreateEndpointRequest
 */
export interface CreateEndpointRequest {
  /**
   * @schema CreateEndpointRequest#OutpostId
   */
  readonly outpostId: string;

  /**
   * @schema CreateEndpointRequest#SubnetId
   */
  readonly subnetId: string;

  /**
   * @schema CreateEndpointRequest#SecurityGroupId
   */
  readonly securityGroupId: string;

}

/**
 * @schema CreateEndpointResult
 */
export interface CreateEndpointResult {
  /**
   * @schema CreateEndpointResult#EndpointArn
   */
  readonly endpointArn?: string;

}

/**
 * @schema DeleteEndpointRequest
 */
export interface DeleteEndpointRequest {
  /**
   * @schema DeleteEndpointRequest#EndpointId
   */
  readonly endpointId: string;

  /**
   * @schema DeleteEndpointRequest#OutpostId
   */
  readonly outpostId: string;

}

/**
 * @schema ListEndpointsRequest
 */
export interface ListEndpointsRequest {
  /**
   * @schema ListEndpointsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListEndpointsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListEndpointsResult
 */
export interface ListEndpointsResult {
  /**
   * @schema ListEndpointsResult#Endpoints
   */
  readonly endpoints?: Endpoint[];

  /**
   * @schema ListEndpointsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Endpoint
 */
export interface Endpoint {
  /**
   * @schema Endpoint#EndpointArn
   */
  readonly endpointArn?: string;

  /**
   * @schema Endpoint#OutpostsId
   */
  readonly outpostsId?: string;

  /**
   * @schema Endpoint#CidrBlock
   */
  readonly cidrBlock?: string;

  /**
   * @schema Endpoint#Status
   */
  readonly status?: string;

  /**
   * @schema Endpoint#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema Endpoint#NetworkInterfaces
   */
  readonly networkInterfaces?: NetworkInterface[];

}

/**
 * @schema NetworkInterface
 */
export interface NetworkInterface {
  /**
   * @schema NetworkInterface#NetworkInterfaceId
   */
  readonly networkInterfaceId?: string;

}
