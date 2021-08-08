/**
 * @schema ApiGatewayManagementApiDeleteConnectionRequest
 */
export interface ApiGatewayManagementApiDeleteConnectionRequest {
  /**
   * @schema ApiGatewayManagementApiDeleteConnectionRequest#ConnectionId
   */
  readonly connectionId?: string;

}

/**
 * Converts an object of type 'ApiGatewayManagementApiDeleteConnectionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayManagementApiDeleteConnectionRequest(obj: ApiGatewayManagementApiDeleteConnectionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConnectionId': obj.connectionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayManagementApiGetConnectionRequest
 */
export interface ApiGatewayManagementApiGetConnectionRequest {
  /**
   * @schema ApiGatewayManagementApiGetConnectionRequest#ConnectionId
   */
  readonly connectionId?: string;

}

/**
 * Converts an object of type 'ApiGatewayManagementApiGetConnectionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayManagementApiGetConnectionRequest(obj: ApiGatewayManagementApiGetConnectionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConnectionId': obj.connectionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayManagementApiGetConnectionResponse
 */
export interface ApiGatewayManagementApiGetConnectionResponse {
  /**
   * @schema ApiGatewayManagementApiGetConnectionResponse#ConnectedAt
   */
  readonly connectedAt?: string;

  /**
   * @schema ApiGatewayManagementApiGetConnectionResponse#Identity
   */
  readonly identity?: ApiGatewayManagementApiIdentity;

  /**
   * @schema ApiGatewayManagementApiGetConnectionResponse#LastActiveAt
   */
  readonly lastActiveAt?: string;

}

/**
 * Converts an object of type 'ApiGatewayManagementApiGetConnectionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayManagementApiGetConnectionResponse(obj: ApiGatewayManagementApiGetConnectionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConnectedAt': obj.connectedAt,
    'Identity': toJson_ApiGatewayManagementApiIdentity(obj.identity),
    'LastActiveAt': obj.lastActiveAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayManagementApiPostToConnectionRequest
 */
export interface ApiGatewayManagementApiPostToConnectionRequest {
  /**
   * @schema ApiGatewayManagementApiPostToConnectionRequest#Data
   */
  readonly data?: any;

  /**
   * @schema ApiGatewayManagementApiPostToConnectionRequest#ConnectionId
   */
  readonly connectionId?: string;

}

/**
 * Converts an object of type 'ApiGatewayManagementApiPostToConnectionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayManagementApiPostToConnectionRequest(obj: ApiGatewayManagementApiPostToConnectionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Data': obj.data,
    'ConnectionId': obj.connectionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayManagementApiIdentity
 */
export interface ApiGatewayManagementApiIdentity {
  /**
   * @schema ApiGatewayManagementApiIdentity#SourceIp
   */
  readonly sourceIp?: string;

  /**
   * @schema ApiGatewayManagementApiIdentity#UserAgent
   */
  readonly userAgent?: string;

}

/**
 * Converts an object of type 'ApiGatewayManagementApiIdentity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayManagementApiIdentity(obj: ApiGatewayManagementApiIdentity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceIp': obj.sourceIp,
    'UserAgent': obj.userAgent,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
