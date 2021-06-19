/**
 * @schema ApiGatewayManagementApiDeleteConnectionRequest
 */
export interface ApiGatewayManagementApiDeleteConnectionRequest {
  /**
   * @schema ApiGatewayManagementApiDeleteConnectionRequest#ConnectionId
   */
  readonly connectionId: string;

}

/**
 * @schema ApiGatewayManagementApiGetConnectionRequest
 */
export interface ApiGatewayManagementApiGetConnectionRequest {
  /**
   * @schema ApiGatewayManagementApiGetConnectionRequest#ConnectionId
   */
  readonly connectionId: string;

}

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
 * @schema ApiGatewayManagementApiPostToConnectionRequest
 */
export interface ApiGatewayManagementApiPostToConnectionRequest {
  /**
   * @schema ApiGatewayManagementApiPostToConnectionRequest#Data
   */
  readonly data: any;

  /**
   * @schema ApiGatewayManagementApiPostToConnectionRequest#ConnectionId
   */
  readonly connectionId: string;

}

/**
 * @schema ApiGatewayManagementApiIdentity
 */
export interface ApiGatewayManagementApiIdentity {
  /**
   * @schema ApiGatewayManagementApiIdentity#SourceIp
   */
  readonly sourceIp: string;

  /**
   * @schema ApiGatewayManagementApiIdentity#UserAgent
   */
  readonly userAgent: string;

}
