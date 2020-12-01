/**
 * @schema CloseTunnelRequest
 */
export interface CloseTunnelRequest {
  /**
   * @schema CloseTunnelRequest#tunnelId
   */
  readonly tunnelId: string;

  /**
   * @schema CloseTunnelRequest#delete
   */
  readonly delete?: boolean;

}

/**
 * @schema CloseTunnelResponse
 */
export interface CloseTunnelResponse {
}

/**
 * @schema DescribeTunnelRequest
 */
export interface DescribeTunnelRequest {
  /**
   * @schema DescribeTunnelRequest#tunnelId
   */
  readonly tunnelId: string;

}

/**
 * @schema DescribeTunnelResponse
 */
export interface DescribeTunnelResponse {
  /**
   * @schema DescribeTunnelResponse#tunnel
   */
  readonly tunnel?: Tunnel;

}

/**
 * @schema ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * @schema ListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema ListTagsForResourceResponse
 */
export interface ListTagsForResourceResponse {
  /**
   * @schema ListTagsForResourceResponse#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema ListTunnelsRequest
 */
export interface ListTunnelsRequest {
  /**
   * @schema ListTunnelsRequest#thingName
   */
  readonly thingName?: string;

  /**
   * @schema ListTunnelsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListTunnelsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTunnelsResponse
 */
export interface ListTunnelsResponse {
  /**
   * @schema ListTunnelsResponse#tunnelSummaries
   */
  readonly tunnelSummaries?: TunnelSummary[];

  /**
   * @schema ListTunnelsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema OpenTunnelRequest
 */
export interface OpenTunnelRequest {
  /**
   * @schema OpenTunnelRequest#description
   */
  readonly description?: string;

  /**
   * @schema OpenTunnelRequest#tags
   */
  readonly tags?: Tag[];

  /**
   * @schema OpenTunnelRequest#destinationConfig
   */
  readonly destinationConfig?: DestinationConfig;

  /**
   * @schema OpenTunnelRequest#timeoutConfig
   */
  readonly timeoutConfig?: TimeoutConfig;

}

/**
 * @schema OpenTunnelResponse
 */
export interface OpenTunnelResponse {
  /**
   * @schema OpenTunnelResponse#tunnelId
   */
  readonly tunnelId?: string;

  /**
   * @schema OpenTunnelResponse#tunnelArn
   */
  readonly tunnelArn?: string;

  /**
   * @schema OpenTunnelResponse#sourceAccessToken
   */
  readonly sourceAccessToken?: string;

  /**
   * @schema OpenTunnelResponse#destinationAccessToken
   */
  readonly destinationAccessToken?: string;

}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema TagResourceRequest#tags
   */
  readonly tags: Tag[];

}

/**
 * @schema TagResourceResponse
 */
export interface TagResourceResponse {
}

/**
 * @schema UntagResourceRequest
 */
export interface UntagResourceRequest {
  /**
   * @schema UntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema UntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UntagResourceResponse
 */
export interface UntagResourceResponse {
}

/**
 * @schema Tunnel
 */
export interface Tunnel {
  /**
   * @schema Tunnel#tunnelId
   */
  readonly tunnelId?: string;

  /**
   * @schema Tunnel#tunnelArn
   */
  readonly tunnelArn?: string;

  /**
   * @schema Tunnel#status
   */
  readonly status?: string;

  /**
   * @schema Tunnel#sourceConnectionState
   */
  readonly sourceConnectionState?: ConnectionState;

  /**
   * @schema Tunnel#destinationConnectionState
   */
  readonly destinationConnectionState?: ConnectionState;

  /**
   * @schema Tunnel#description
   */
  readonly description?: string;

  /**
   * @schema Tunnel#destinationConfig
   */
  readonly destinationConfig?: DestinationConfig;

  /**
   * @schema Tunnel#timeoutConfig
   */
  readonly timeoutConfig?: TimeoutConfig;

  /**
   * @schema Tunnel#tags
   */
  readonly tags?: Tag[];

  /**
   * @schema Tunnel#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema Tunnel#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

}

/**
 * @schema Tag
 */
export interface Tag {
  /**
   * @schema Tag#key
   */
  readonly key: string;

  /**
   * @schema Tag#value
   */
  readonly value: string;

}

/**
 * @schema TunnelSummary
 */
export interface TunnelSummary {
  /**
   * @schema TunnelSummary#tunnelId
   */
  readonly tunnelId?: string;

  /**
   * @schema TunnelSummary#tunnelArn
   */
  readonly tunnelArn?: string;

  /**
   * @schema TunnelSummary#status
   */
  readonly status?: string;

  /**
   * @schema TunnelSummary#description
   */
  readonly description?: string;

  /**
   * @schema TunnelSummary#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema TunnelSummary#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

}

/**
 * @schema DestinationConfig
 */
export interface DestinationConfig {
  /**
   * @schema DestinationConfig#thingName
   */
  readonly thingName?: string;

  /**
   * @schema DestinationConfig#services
   */
  readonly services: string[];

}

/**
 * @schema TimeoutConfig
 */
export interface TimeoutConfig {
  /**
   * @schema TimeoutConfig#maxLifetimeTimeoutMinutes
   */
  readonly maxLifetimeTimeoutMinutes?: number;

}

/**
 * @schema ConnectionState
 */
export interface ConnectionState {
  /**
   * @schema ConnectionState#status
   */
  readonly status?: string;

  /**
   * @schema ConnectionState#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

}
