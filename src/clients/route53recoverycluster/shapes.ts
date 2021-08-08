/**
 * @schema Route53RecoveryClusterGetRoutingControlStateRequest
 */
export interface Route53RecoveryClusterGetRoutingControlStateRequest {
  /**
   * @schema Route53RecoveryClusterGetRoutingControlStateRequest#RoutingControlArn
   */
  readonly routingControlArn?: string;

}

/**
 * Converts an object of type 'Route53RecoveryClusterGetRoutingControlStateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryClusterGetRoutingControlStateRequest(obj: Route53RecoveryClusterGetRoutingControlStateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoutingControlArn': obj.routingControlArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryClusterGetRoutingControlStateResponse
 */
export interface Route53RecoveryClusterGetRoutingControlStateResponse {
  /**
   * @schema Route53RecoveryClusterGetRoutingControlStateResponse#RoutingControlArn
   */
  readonly routingControlArn?: string;

  /**
   * @schema Route53RecoveryClusterGetRoutingControlStateResponse#RoutingControlState
   */
  readonly routingControlState?: string;

}

/**
 * Converts an object of type 'Route53RecoveryClusterGetRoutingControlStateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryClusterGetRoutingControlStateResponse(obj: Route53RecoveryClusterGetRoutingControlStateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoutingControlArn': obj.routingControlArn,
    'RoutingControlState': obj.routingControlState,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryClusterUpdateRoutingControlStateRequest
 */
export interface Route53RecoveryClusterUpdateRoutingControlStateRequest {
  /**
   * @schema Route53RecoveryClusterUpdateRoutingControlStateRequest#RoutingControlArn
   */
  readonly routingControlArn?: string;

  /**
   * @schema Route53RecoveryClusterUpdateRoutingControlStateRequest#RoutingControlState
   */
  readonly routingControlState?: string;

}

/**
 * Converts an object of type 'Route53RecoveryClusterUpdateRoutingControlStateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryClusterUpdateRoutingControlStateRequest(obj: Route53RecoveryClusterUpdateRoutingControlStateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoutingControlArn': obj.routingControlArn,
    'RoutingControlState': obj.routingControlState,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryClusterUpdateRoutingControlStateResponse
 */
export interface Route53RecoveryClusterUpdateRoutingControlStateResponse {
}

/**
 * Converts an object of type 'Route53RecoveryClusterUpdateRoutingControlStateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryClusterUpdateRoutingControlStateResponse(obj: Route53RecoveryClusterUpdateRoutingControlStateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryClusterUpdateRoutingControlStatesRequest
 */
export interface Route53RecoveryClusterUpdateRoutingControlStatesRequest {
  /**
   * @schema Route53RecoveryClusterUpdateRoutingControlStatesRequest#UpdateRoutingControlStateEntries
   */
  readonly updateRoutingControlStateEntries?: Route53RecoveryClusterUpdateRoutingControlStateEntry[];

}

/**
 * Converts an object of type 'Route53RecoveryClusterUpdateRoutingControlStatesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryClusterUpdateRoutingControlStatesRequest(obj: Route53RecoveryClusterUpdateRoutingControlStatesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UpdateRoutingControlStateEntries': obj.updateRoutingControlStateEntries?.map(y => toJson_Route53RecoveryClusterUpdateRoutingControlStateEntry(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryClusterUpdateRoutingControlStatesResponse
 */
export interface Route53RecoveryClusterUpdateRoutingControlStatesResponse {
}

/**
 * Converts an object of type 'Route53RecoveryClusterUpdateRoutingControlStatesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryClusterUpdateRoutingControlStatesResponse(obj: Route53RecoveryClusterUpdateRoutingControlStatesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryClusterUpdateRoutingControlStateEntry
 */
export interface Route53RecoveryClusterUpdateRoutingControlStateEntry {
  /**
   * @schema Route53RecoveryClusterUpdateRoutingControlStateEntry#RoutingControlArn
   */
  readonly routingControlArn?: string;

  /**
   * @schema Route53RecoveryClusterUpdateRoutingControlStateEntry#RoutingControlState
   */
  readonly routingControlState?: string;

}

/**
 * Converts an object of type 'Route53RecoveryClusterUpdateRoutingControlStateEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryClusterUpdateRoutingControlStateEntry(obj: Route53RecoveryClusterUpdateRoutingControlStateEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoutingControlArn': obj.routingControlArn,
    'RoutingControlState': obj.routingControlState,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
