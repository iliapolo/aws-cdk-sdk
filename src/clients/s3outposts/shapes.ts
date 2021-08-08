/**
 * @schema S3OutpostsCreateEndpointRequest
 */
export interface S3OutpostsCreateEndpointRequest {
  /**
   * @schema S3OutpostsCreateEndpointRequest#OutpostId
   */
  readonly outpostId?: string;

  /**
   * @schema S3OutpostsCreateEndpointRequest#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema S3OutpostsCreateEndpointRequest#SecurityGroupId
   */
  readonly securityGroupId?: string;

  /**
   * @schema S3OutpostsCreateEndpointRequest#AccessType
   */
  readonly accessType?: string;

  /**
   * @schema S3OutpostsCreateEndpointRequest#CustomerOwnedIpv4Pool
   */
  readonly customerOwnedIpv4Pool?: string;

}

/**
 * Converts an object of type 'S3OutpostsCreateEndpointRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3OutpostsCreateEndpointRequest(obj: S3OutpostsCreateEndpointRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OutpostId': obj.outpostId,
    'SubnetId': obj.subnetId,
    'SecurityGroupId': obj.securityGroupId,
    'AccessType': obj.accessType,
    'CustomerOwnedIpv4Pool': obj.customerOwnedIpv4Pool,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3OutpostsCreateEndpointResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3OutpostsCreateEndpointResult(obj: S3OutpostsCreateEndpointResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndpointArn': obj.endpointArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3OutpostsDeleteEndpointRequest
 */
export interface S3OutpostsDeleteEndpointRequest {
  /**
   * @schema S3OutpostsDeleteEndpointRequest#EndpointId
   */
  readonly endpointId?: string;

  /**
   * @schema S3OutpostsDeleteEndpointRequest#OutpostId
   */
  readonly outpostId?: string;

}

/**
 * Converts an object of type 'S3OutpostsDeleteEndpointRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3OutpostsDeleteEndpointRequest(obj: S3OutpostsDeleteEndpointRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndpointId': obj.endpointId,
    'OutpostId': obj.outpostId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3OutpostsListEndpointsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3OutpostsListEndpointsRequest(obj: S3OutpostsListEndpointsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3OutpostsListEndpointsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3OutpostsListEndpointsResult(obj: S3OutpostsListEndpointsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Endpoints': obj.endpoints?.map(y => toJson_S3OutpostsEndpoint(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema S3OutpostsEndpoint#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema S3OutpostsEndpoint#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema S3OutpostsEndpoint#SecurityGroupId
   */
  readonly securityGroupId?: string;

  /**
   * @schema S3OutpostsEndpoint#AccessType
   */
  readonly accessType?: string;

  /**
   * @schema S3OutpostsEndpoint#CustomerOwnedIpv4Pool
   */
  readonly customerOwnedIpv4Pool?: string;

}

/**
 * Converts an object of type 'S3OutpostsEndpoint' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3OutpostsEndpoint(obj: S3OutpostsEndpoint | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndpointArn': obj.endpointArn,
    'OutpostsId': obj.outpostsId,
    'CidrBlock': obj.cidrBlock,
    'Status': obj.status,
    'CreationTime': obj.creationTime,
    'NetworkInterfaces': obj.networkInterfaces?.map(y => toJson_S3OutpostsNetworkInterface(y)),
    'VpcId': obj.vpcId,
    'SubnetId': obj.subnetId,
    'SecurityGroupId': obj.securityGroupId,
    'AccessType': obj.accessType,
    'CustomerOwnedIpv4Pool': obj.customerOwnedIpv4Pool,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3OutpostsNetworkInterface
 */
export interface S3OutpostsNetworkInterface {
  /**
   * @schema S3OutpostsNetworkInterface#NetworkInterfaceId
   */
  readonly networkInterfaceId?: string;

}

/**
 * Converts an object of type 'S3OutpostsNetworkInterface' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3OutpostsNetworkInterface(obj: S3OutpostsNetworkInterface | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NetworkInterfaceId': obj.networkInterfaceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
