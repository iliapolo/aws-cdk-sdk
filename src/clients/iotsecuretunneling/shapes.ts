/**
 * @schema IoTSecureTunnelingCloseTunnelRequest
 */
export interface IoTSecureTunnelingCloseTunnelRequest {
  /**
   * @schema IoTSecureTunnelingCloseTunnelRequest#tunnelId
   */
  readonly tunnelId: string;

  /**
   * @schema IoTSecureTunnelingCloseTunnelRequest#delete
   */
  readonly delete?: boolean;

}

/**
 * @schema IoTSecureTunnelingCloseTunnelResponse
 */
export interface IoTSecureTunnelingCloseTunnelResponse {
}

/**
 * @schema IoTSecureTunnelingDescribeTunnelRequest
 */
export interface IoTSecureTunnelingDescribeTunnelRequest {
  /**
   * @schema IoTSecureTunnelingDescribeTunnelRequest#tunnelId
   */
  readonly tunnelId: string;

}

/**
 * @schema IoTSecureTunnelingDescribeTunnelResponse
 */
export interface IoTSecureTunnelingDescribeTunnelResponse {
  /**
   * @schema IoTSecureTunnelingDescribeTunnelResponse#tunnel
   */
  readonly tunnel?: IoTSecureTunnelingTunnel;

}

/**
 * @schema IoTSecureTunnelingListTagsForResourceRequest
 */
export interface IoTSecureTunnelingListTagsForResourceRequest {
  /**
   * @schema IoTSecureTunnelingListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema IoTSecureTunnelingListTagsForResourceResponse
 */
export interface IoTSecureTunnelingListTagsForResourceResponse {
  /**
   * @schema IoTSecureTunnelingListTagsForResourceResponse#tags
   */
  readonly tags?: IoTSecureTunnelingTag[];

}

/**
 * @schema IoTSecureTunnelingListTunnelsRequest
 */
export interface IoTSecureTunnelingListTunnelsRequest {
  /**
   * @schema IoTSecureTunnelingListTunnelsRequest#thingName
   */
  readonly thingName?: string;

  /**
   * @schema IoTSecureTunnelingListTunnelsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema IoTSecureTunnelingListTunnelsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IoTSecureTunnelingListTunnelsResponse
 */
export interface IoTSecureTunnelingListTunnelsResponse {
  /**
   * @schema IoTSecureTunnelingListTunnelsResponse#tunnelSummaries
   */
  readonly tunnelSummaries?: IoTSecureTunnelingTunnelSummary[];

  /**
   * @schema IoTSecureTunnelingListTunnelsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IoTSecureTunnelingOpenTunnelRequest
 */
export interface IoTSecureTunnelingOpenTunnelRequest {
  /**
   * @schema IoTSecureTunnelingOpenTunnelRequest#description
   */
  readonly description?: string;

  /**
   * @schema IoTSecureTunnelingOpenTunnelRequest#tags
   */
  readonly tags?: IoTSecureTunnelingTag[];

  /**
   * @schema IoTSecureTunnelingOpenTunnelRequest#destinationConfig
   */
  readonly destinationConfig?: IoTSecureTunnelingDestinationConfig;

  /**
   * @schema IoTSecureTunnelingOpenTunnelRequest#timeoutConfig
   */
  readonly timeoutConfig?: IoTSecureTunnelingTimeoutConfig;

}

/**
 * @schema IoTSecureTunnelingOpenTunnelResponse
 */
export interface IoTSecureTunnelingOpenTunnelResponse {
  /**
   * @schema IoTSecureTunnelingOpenTunnelResponse#tunnelId
   */
  readonly tunnelId?: string;

  /**
   * @schema IoTSecureTunnelingOpenTunnelResponse#tunnelArn
   */
  readonly tunnelArn?: string;

  /**
   * @schema IoTSecureTunnelingOpenTunnelResponse#sourceAccessToken
   */
  readonly sourceAccessToken?: string;

  /**
   * @schema IoTSecureTunnelingOpenTunnelResponse#destinationAccessToken
   */
  readonly destinationAccessToken?: string;

}

/**
 * @schema IoTSecureTunnelingTagResourceRequest
 */
export interface IoTSecureTunnelingTagResourceRequest {
  /**
   * @schema IoTSecureTunnelingTagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema IoTSecureTunnelingTagResourceRequest#tags
   */
  readonly tags: IoTSecureTunnelingTag[];

}

/**
 * @schema IoTSecureTunnelingTagResourceResponse
 */
export interface IoTSecureTunnelingTagResourceResponse {
}

/**
 * @schema IoTSecureTunnelingUntagResourceRequest
 */
export interface IoTSecureTunnelingUntagResourceRequest {
  /**
   * @schema IoTSecureTunnelingUntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema IoTSecureTunnelingUntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema IoTSecureTunnelingUntagResourceResponse
 */
export interface IoTSecureTunnelingUntagResourceResponse {
}

/**
 * @schema IoTSecureTunnelingTunnel
 */
export interface IoTSecureTunnelingTunnel {
  /**
   * @schema IoTSecureTunnelingTunnel#tunnelId
   */
  readonly tunnelId?: string;

  /**
   * @schema IoTSecureTunnelingTunnel#tunnelArn
   */
  readonly tunnelArn?: string;

  /**
   * @schema IoTSecureTunnelingTunnel#status
   */
  readonly status?: string;

  /**
   * @schema IoTSecureTunnelingTunnel#sourceConnectionState
   */
  readonly sourceConnectionState?: IoTSecureTunnelingConnectionState;

  /**
   * @schema IoTSecureTunnelingTunnel#destinationConnectionState
   */
  readonly destinationConnectionState?: IoTSecureTunnelingConnectionState;

  /**
   * @schema IoTSecureTunnelingTunnel#description
   */
  readonly description?: string;

  /**
   * @schema IoTSecureTunnelingTunnel#destinationConfig
   */
  readonly destinationConfig?: IoTSecureTunnelingDestinationConfig;

  /**
   * @schema IoTSecureTunnelingTunnel#timeoutConfig
   */
  readonly timeoutConfig?: IoTSecureTunnelingTimeoutConfig;

  /**
   * @schema IoTSecureTunnelingTunnel#tags
   */
  readonly tags?: IoTSecureTunnelingTag[];

  /**
   * @schema IoTSecureTunnelingTunnel#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema IoTSecureTunnelingTunnel#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

}

/**
 * @schema IoTSecureTunnelingTag
 */
export interface IoTSecureTunnelingTag {
  /**
   * @schema IoTSecureTunnelingTag#key
   */
  readonly key: string;

  /**
   * @schema IoTSecureTunnelingTag#value
   */
  readonly value: string;

}

/**
 * @schema IoTSecureTunnelingTunnelSummary
 */
export interface IoTSecureTunnelingTunnelSummary {
  /**
   * @schema IoTSecureTunnelingTunnelSummary#tunnelId
   */
  readonly tunnelId?: string;

  /**
   * @schema IoTSecureTunnelingTunnelSummary#tunnelArn
   */
  readonly tunnelArn?: string;

  /**
   * @schema IoTSecureTunnelingTunnelSummary#status
   */
  readonly status?: string;

  /**
   * @schema IoTSecureTunnelingTunnelSummary#description
   */
  readonly description?: string;

  /**
   * @schema IoTSecureTunnelingTunnelSummary#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema IoTSecureTunnelingTunnelSummary#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

}

/**
 * @schema IoTSecureTunnelingDestinationConfig
 */
export interface IoTSecureTunnelingDestinationConfig {
  /**
   * @schema IoTSecureTunnelingDestinationConfig#thingName
   */
  readonly thingName?: string;

  /**
   * @schema IoTSecureTunnelingDestinationConfig#services
   */
  readonly services: string[];

}

/**
 * @schema IoTSecureTunnelingTimeoutConfig
 */
export interface IoTSecureTunnelingTimeoutConfig {
  /**
   * @schema IoTSecureTunnelingTimeoutConfig#maxLifetimeTimeoutMinutes
   */
  readonly maxLifetimeTimeoutMinutes?: number;

}

/**
 * @schema IoTSecureTunnelingConnectionState
 */
export interface IoTSecureTunnelingConnectionState {
  /**
   * @schema IoTSecureTunnelingConnectionState#status
   */
  readonly status?: string;

  /**
   * @schema IoTSecureTunnelingConnectionState#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

}
