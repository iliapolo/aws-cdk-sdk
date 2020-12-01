/**
 * @schema DeleteConnectionRequest
 */
export interface DeleteConnectionRequest {
  /**
   * @schema DeleteConnectionRequest#ConnectionId
   */
  readonly connectionId: string;

}

/**
 * @schema GetConnectionRequest
 */
export interface GetConnectionRequest {
  /**
   * @schema GetConnectionRequest#ConnectionId
   */
  readonly connectionId: string;

}

/**
 * @schema GetConnectionResponse
 */
export interface GetConnectionResponse {
  /**
   * @schema GetConnectionResponse#ConnectedAt
   */
  readonly connectedAt?: string;

  /**
   * @schema GetConnectionResponse#Identity
   */
  readonly identity?: Identity;

  /**
   * @schema GetConnectionResponse#LastActiveAt
   */
  readonly lastActiveAt?: string;

}

/**
 * @schema PostToConnectionRequest
 */
export interface PostToConnectionRequest {
  /**
   * @schema PostToConnectionRequest#Data
   */
  readonly data: any;

  /**
   * @schema PostToConnectionRequest#ConnectionId
   */
  readonly connectionId: string;

}

/**
 * @schema Identity
 */
export interface Identity {
  /**
   * @schema Identity#SourceIp
   */
  readonly sourceIp: string;

  /**
   * @schema Identity#UserAgent
   */
  readonly userAgent: string;

}
