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
 * Converts an object of type 'IoTSecureTunnelingCloseTunnelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSecureTunnelingCloseTunnelRequest(obj: IoTSecureTunnelingCloseTunnelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tunnelId': obj.tunnelId,
    'delete': obj.delete,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSecureTunnelingCloseTunnelResponse
 */
export interface IoTSecureTunnelingCloseTunnelResponse {
}

/**
 * Converts an object of type 'IoTSecureTunnelingCloseTunnelResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSecureTunnelingCloseTunnelResponse(obj: IoTSecureTunnelingCloseTunnelResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IoTSecureTunnelingDescribeTunnelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSecureTunnelingDescribeTunnelRequest(obj: IoTSecureTunnelingDescribeTunnelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tunnelId': obj.tunnelId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IoTSecureTunnelingDescribeTunnelResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSecureTunnelingDescribeTunnelResponse(obj: IoTSecureTunnelingDescribeTunnelResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tunnel': toJson_IoTSecureTunnelingTunnel(obj.tunnel),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IoTSecureTunnelingListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSecureTunnelingListTagsForResourceRequest(obj: IoTSecureTunnelingListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IoTSecureTunnelingListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSecureTunnelingListTagsForResourceResponse(obj: IoTSecureTunnelingListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tags': obj.tags?.map(y => toJson_IoTSecureTunnelingTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IoTSecureTunnelingListTunnelsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSecureTunnelingListTunnelsRequest(obj: IoTSecureTunnelingListTunnelsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'thingName': obj.thingName,
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IoTSecureTunnelingListTunnelsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSecureTunnelingListTunnelsResponse(obj: IoTSecureTunnelingListTunnelsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tunnelSummaries': obj.tunnelSummaries?.map(y => toJson_IoTSecureTunnelingTunnelSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IoTSecureTunnelingOpenTunnelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSecureTunnelingOpenTunnelRequest(obj: IoTSecureTunnelingOpenTunnelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'description': obj.description,
    'tags': obj.tags?.map(y => toJson_IoTSecureTunnelingTag(y)),
    'destinationConfig': toJson_IoTSecureTunnelingDestinationConfig(obj.destinationConfig),
    'timeoutConfig': toJson_IoTSecureTunnelingTimeoutConfig(obj.timeoutConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IoTSecureTunnelingOpenTunnelResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSecureTunnelingOpenTunnelResponse(obj: IoTSecureTunnelingOpenTunnelResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tunnelId': obj.tunnelId,
    'tunnelArn': obj.tunnelArn,
    'sourceAccessToken': obj.sourceAccessToken,
    'destinationAccessToken': obj.destinationAccessToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IoTSecureTunnelingTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSecureTunnelingTagResourceRequest(obj: IoTSecureTunnelingTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
    'tags': obj.tags?.map(y => toJson_IoTSecureTunnelingTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSecureTunnelingTagResourceResponse
 */
export interface IoTSecureTunnelingTagResourceResponse {
}

/**
 * Converts an object of type 'IoTSecureTunnelingTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSecureTunnelingTagResourceResponse(obj: IoTSecureTunnelingTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IoTSecureTunnelingUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSecureTunnelingUntagResourceRequest(obj: IoTSecureTunnelingUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
    'tagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSecureTunnelingUntagResourceResponse
 */
export interface IoTSecureTunnelingUntagResourceResponse {
}

/**
 * Converts an object of type 'IoTSecureTunnelingUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSecureTunnelingUntagResourceResponse(obj: IoTSecureTunnelingUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IoTSecureTunnelingTunnel' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSecureTunnelingTunnel(obj: IoTSecureTunnelingTunnel | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tunnelId': obj.tunnelId,
    'tunnelArn': obj.tunnelArn,
    'status': obj.status,
    'sourceConnectionState': toJson_IoTSecureTunnelingConnectionState(obj.sourceConnectionState),
    'destinationConnectionState': toJson_IoTSecureTunnelingConnectionState(obj.destinationConnectionState),
    'description': obj.description,
    'destinationConfig': toJson_IoTSecureTunnelingDestinationConfig(obj.destinationConfig),
    'timeoutConfig': toJson_IoTSecureTunnelingTimeoutConfig(obj.timeoutConfig),
    'tags': obj.tags?.map(y => toJson_IoTSecureTunnelingTag(y)),
    'createdAt': obj.createdAt,
    'lastUpdatedAt': obj.lastUpdatedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IoTSecureTunnelingTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSecureTunnelingTag(obj: IoTSecureTunnelingTag | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'key': obj.key,
    'value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IoTSecureTunnelingTunnelSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSecureTunnelingTunnelSummary(obj: IoTSecureTunnelingTunnelSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tunnelId': obj.tunnelId,
    'tunnelArn': obj.tunnelArn,
    'status': obj.status,
    'description': obj.description,
    'createdAt': obj.createdAt,
    'lastUpdatedAt': obj.lastUpdatedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IoTSecureTunnelingDestinationConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSecureTunnelingDestinationConfig(obj: IoTSecureTunnelingDestinationConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'thingName': obj.thingName,
    'services': obj.services?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IoTSecureTunnelingTimeoutConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSecureTunnelingTimeoutConfig(obj: IoTSecureTunnelingTimeoutConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'maxLifetimeTimeoutMinutes': obj.maxLifetimeTimeoutMinutes,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

/**
 * Converts an object of type 'IoTSecureTunnelingConnectionState' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSecureTunnelingConnectionState(obj: IoTSecureTunnelingConnectionState | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'status': obj.status,
    'lastUpdatedAt': obj.lastUpdatedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
