/**
 * @schema EventBridgeActivateEventSourceRequest
 */
export interface EventBridgeActivateEventSourceRequest {
  /**
   * @schema EventBridgeActivateEventSourceRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'EventBridgeActivateEventSourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeActivateEventSourceRequest(obj: EventBridgeActivateEventSourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeCancelReplayRequest
 */
export interface EventBridgeCancelReplayRequest {
  /**
   * @schema EventBridgeCancelReplayRequest#ReplayName
   */
  readonly replayName?: string;

}

/**
 * Converts an object of type 'EventBridgeCancelReplayRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeCancelReplayRequest(obj: EventBridgeCancelReplayRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplayName': obj.replayName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeCancelReplayResponse
 */
export interface EventBridgeCancelReplayResponse {
  /**
   * @schema EventBridgeCancelReplayResponse#ReplayArn
   */
  readonly replayArn?: string;

  /**
   * @schema EventBridgeCancelReplayResponse#State
   */
  readonly state?: string;

  /**
   * @schema EventBridgeCancelReplayResponse#StateReason
   */
  readonly stateReason?: string;

}

/**
 * Converts an object of type 'EventBridgeCancelReplayResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeCancelReplayResponse(obj: EventBridgeCancelReplayResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplayArn': obj.replayArn,
    'State': obj.state,
    'StateReason': obj.stateReason,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeCreateApiDestinationRequest
 */
export interface EventBridgeCreateApiDestinationRequest {
  /**
   * @schema EventBridgeCreateApiDestinationRequest#Name
   */
  readonly name?: string;

  /**
   * @schema EventBridgeCreateApiDestinationRequest#Description
   */
  readonly description?: string;

  /**
   * @schema EventBridgeCreateApiDestinationRequest#ConnectionArn
   */
  readonly connectionArn?: string;

  /**
   * @schema EventBridgeCreateApiDestinationRequest#InvocationEndpoint
   */
  readonly invocationEndpoint?: string;

  /**
   * @schema EventBridgeCreateApiDestinationRequest#HttpMethod
   */
  readonly httpMethod?: string;

  /**
   * @schema EventBridgeCreateApiDestinationRequest#InvocationRateLimitPerSecond
   */
  readonly invocationRateLimitPerSecond?: number;

}

/**
 * Converts an object of type 'EventBridgeCreateApiDestinationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeCreateApiDestinationRequest(obj: EventBridgeCreateApiDestinationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Description': obj.description,
    'ConnectionArn': obj.connectionArn,
    'InvocationEndpoint': obj.invocationEndpoint,
    'HttpMethod': obj.httpMethod,
    'InvocationRateLimitPerSecond': obj.invocationRateLimitPerSecond,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeCreateApiDestinationResponse
 */
export interface EventBridgeCreateApiDestinationResponse {
  /**
   * @schema EventBridgeCreateApiDestinationResponse#ApiDestinationArn
   */
  readonly apiDestinationArn?: string;

  /**
   * @schema EventBridgeCreateApiDestinationResponse#ApiDestinationState
   */
  readonly apiDestinationState?: string;

  /**
   * @schema EventBridgeCreateApiDestinationResponse#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema EventBridgeCreateApiDestinationResponse#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

}

/**
 * Converts an object of type 'EventBridgeCreateApiDestinationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeCreateApiDestinationResponse(obj: EventBridgeCreateApiDestinationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiDestinationArn': obj.apiDestinationArn,
    'ApiDestinationState': obj.apiDestinationState,
    'CreationTime': obj.creationTime,
    'LastModifiedTime': obj.lastModifiedTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeCreateArchiveRequest
 */
export interface EventBridgeCreateArchiveRequest {
  /**
   * @schema EventBridgeCreateArchiveRequest#ArchiveName
   */
  readonly archiveName?: string;

  /**
   * @schema EventBridgeCreateArchiveRequest#EventSourceArn
   */
  readonly eventSourceArn?: string;

  /**
   * @schema EventBridgeCreateArchiveRequest#Description
   */
  readonly description?: string;

  /**
   * @schema EventBridgeCreateArchiveRequest#EventPattern
   */
  readonly eventPattern?: string;

  /**
   * @schema EventBridgeCreateArchiveRequest#RetentionDays
   */
  readonly retentionDays?: number;

}

/**
 * Converts an object of type 'EventBridgeCreateArchiveRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeCreateArchiveRequest(obj: EventBridgeCreateArchiveRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ArchiveName': obj.archiveName,
    'EventSourceArn': obj.eventSourceArn,
    'Description': obj.description,
    'EventPattern': obj.eventPattern,
    'RetentionDays': obj.retentionDays,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeCreateArchiveResponse
 */
export interface EventBridgeCreateArchiveResponse {
  /**
   * @schema EventBridgeCreateArchiveResponse#ArchiveArn
   */
  readonly archiveArn?: string;

  /**
   * @schema EventBridgeCreateArchiveResponse#State
   */
  readonly state?: string;

  /**
   * @schema EventBridgeCreateArchiveResponse#StateReason
   */
  readonly stateReason?: string;

  /**
   * @schema EventBridgeCreateArchiveResponse#CreationTime
   */
  readonly creationTime?: string;

}

/**
 * Converts an object of type 'EventBridgeCreateArchiveResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeCreateArchiveResponse(obj: EventBridgeCreateArchiveResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ArchiveArn': obj.archiveArn,
    'State': obj.state,
    'StateReason': obj.stateReason,
    'CreationTime': obj.creationTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeCreateConnectionRequest
 */
export interface EventBridgeCreateConnectionRequest {
  /**
   * @schema EventBridgeCreateConnectionRequest#Name
   */
  readonly name?: string;

  /**
   * @schema EventBridgeCreateConnectionRequest#Description
   */
  readonly description?: string;

  /**
   * @schema EventBridgeCreateConnectionRequest#AuthorizationType
   */
  readonly authorizationType?: string;

  /**
   * @schema EventBridgeCreateConnectionRequest#AuthParameters
   */
  readonly authParameters?: EventBridgeCreateConnectionAuthRequestParameters;

}

/**
 * Converts an object of type 'EventBridgeCreateConnectionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeCreateConnectionRequest(obj: EventBridgeCreateConnectionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Description': obj.description,
    'AuthorizationType': obj.authorizationType,
    'AuthParameters': toJson_EventBridgeCreateConnectionAuthRequestParameters(obj.authParameters),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeCreateConnectionResponse
 */
export interface EventBridgeCreateConnectionResponse {
  /**
   * @schema EventBridgeCreateConnectionResponse#ConnectionArn
   */
  readonly connectionArn?: string;

  /**
   * @schema EventBridgeCreateConnectionResponse#ConnectionState
   */
  readonly connectionState?: string;

  /**
   * @schema EventBridgeCreateConnectionResponse#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema EventBridgeCreateConnectionResponse#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

}

/**
 * Converts an object of type 'EventBridgeCreateConnectionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeCreateConnectionResponse(obj: EventBridgeCreateConnectionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConnectionArn': obj.connectionArn,
    'ConnectionState': obj.connectionState,
    'CreationTime': obj.creationTime,
    'LastModifiedTime': obj.lastModifiedTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeCreateEventBusRequest
 */
export interface EventBridgeCreateEventBusRequest {
  /**
   * @schema EventBridgeCreateEventBusRequest#Name
   */
  readonly name?: string;

  /**
   * @schema EventBridgeCreateEventBusRequest#EventSourceName
   */
  readonly eventSourceName?: string;

  /**
   * @schema EventBridgeCreateEventBusRequest#Tags
   */
  readonly tags?: EventBridgeTag[];

}

/**
 * Converts an object of type 'EventBridgeCreateEventBusRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeCreateEventBusRequest(obj: EventBridgeCreateEventBusRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'EventSourceName': obj.eventSourceName,
    'Tags': obj.tags?.map(y => toJson_EventBridgeTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeCreateEventBusResponse
 */
export interface EventBridgeCreateEventBusResponse {
  /**
   * @schema EventBridgeCreateEventBusResponse#EventBusArn
   */
  readonly eventBusArn?: string;

}

/**
 * Converts an object of type 'EventBridgeCreateEventBusResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeCreateEventBusResponse(obj: EventBridgeCreateEventBusResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EventBusArn': obj.eventBusArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeCreatePartnerEventSourceRequest
 */
export interface EventBridgeCreatePartnerEventSourceRequest {
  /**
   * @schema EventBridgeCreatePartnerEventSourceRequest#Name
   */
  readonly name?: string;

  /**
   * @schema EventBridgeCreatePartnerEventSourceRequest#Account
   */
  readonly account?: string;

}

/**
 * Converts an object of type 'EventBridgeCreatePartnerEventSourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeCreatePartnerEventSourceRequest(obj: EventBridgeCreatePartnerEventSourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Account': obj.account,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeCreatePartnerEventSourceResponse
 */
export interface EventBridgeCreatePartnerEventSourceResponse {
  /**
   * @schema EventBridgeCreatePartnerEventSourceResponse#EventSourceArn
   */
  readonly eventSourceArn?: string;

}

/**
 * Converts an object of type 'EventBridgeCreatePartnerEventSourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeCreatePartnerEventSourceResponse(obj: EventBridgeCreatePartnerEventSourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EventSourceArn': obj.eventSourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeDeactivateEventSourceRequest
 */
export interface EventBridgeDeactivateEventSourceRequest {
  /**
   * @schema EventBridgeDeactivateEventSourceRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'EventBridgeDeactivateEventSourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeDeactivateEventSourceRequest(obj: EventBridgeDeactivateEventSourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeDeauthorizeConnectionRequest
 */
export interface EventBridgeDeauthorizeConnectionRequest {
  /**
   * @schema EventBridgeDeauthorizeConnectionRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'EventBridgeDeauthorizeConnectionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeDeauthorizeConnectionRequest(obj: EventBridgeDeauthorizeConnectionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeDeauthorizeConnectionResponse
 */
export interface EventBridgeDeauthorizeConnectionResponse {
  /**
   * @schema EventBridgeDeauthorizeConnectionResponse#ConnectionArn
   */
  readonly connectionArn?: string;

  /**
   * @schema EventBridgeDeauthorizeConnectionResponse#ConnectionState
   */
  readonly connectionState?: string;

  /**
   * @schema EventBridgeDeauthorizeConnectionResponse#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema EventBridgeDeauthorizeConnectionResponse#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema EventBridgeDeauthorizeConnectionResponse#LastAuthorizedTime
   */
  readonly lastAuthorizedTime?: string;

}

/**
 * Converts an object of type 'EventBridgeDeauthorizeConnectionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeDeauthorizeConnectionResponse(obj: EventBridgeDeauthorizeConnectionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConnectionArn': obj.connectionArn,
    'ConnectionState': obj.connectionState,
    'CreationTime': obj.creationTime,
    'LastModifiedTime': obj.lastModifiedTime,
    'LastAuthorizedTime': obj.lastAuthorizedTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeDeleteApiDestinationRequest
 */
export interface EventBridgeDeleteApiDestinationRequest {
  /**
   * @schema EventBridgeDeleteApiDestinationRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'EventBridgeDeleteApiDestinationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeDeleteApiDestinationRequest(obj: EventBridgeDeleteApiDestinationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeDeleteApiDestinationResponse
 */
export interface EventBridgeDeleteApiDestinationResponse {
}

/**
 * Converts an object of type 'EventBridgeDeleteApiDestinationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeDeleteApiDestinationResponse(obj: EventBridgeDeleteApiDestinationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeDeleteArchiveRequest
 */
export interface EventBridgeDeleteArchiveRequest {
  /**
   * @schema EventBridgeDeleteArchiveRequest#ArchiveName
   */
  readonly archiveName?: string;

}

/**
 * Converts an object of type 'EventBridgeDeleteArchiveRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeDeleteArchiveRequest(obj: EventBridgeDeleteArchiveRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ArchiveName': obj.archiveName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeDeleteArchiveResponse
 */
export interface EventBridgeDeleteArchiveResponse {
}

/**
 * Converts an object of type 'EventBridgeDeleteArchiveResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeDeleteArchiveResponse(obj: EventBridgeDeleteArchiveResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeDeleteConnectionRequest
 */
export interface EventBridgeDeleteConnectionRequest {
  /**
   * @schema EventBridgeDeleteConnectionRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'EventBridgeDeleteConnectionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeDeleteConnectionRequest(obj: EventBridgeDeleteConnectionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeDeleteConnectionResponse
 */
export interface EventBridgeDeleteConnectionResponse {
  /**
   * @schema EventBridgeDeleteConnectionResponse#ConnectionArn
   */
  readonly connectionArn?: string;

  /**
   * @schema EventBridgeDeleteConnectionResponse#ConnectionState
   */
  readonly connectionState?: string;

  /**
   * @schema EventBridgeDeleteConnectionResponse#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema EventBridgeDeleteConnectionResponse#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema EventBridgeDeleteConnectionResponse#LastAuthorizedTime
   */
  readonly lastAuthorizedTime?: string;

}

/**
 * Converts an object of type 'EventBridgeDeleteConnectionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeDeleteConnectionResponse(obj: EventBridgeDeleteConnectionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConnectionArn': obj.connectionArn,
    'ConnectionState': obj.connectionState,
    'CreationTime': obj.creationTime,
    'LastModifiedTime': obj.lastModifiedTime,
    'LastAuthorizedTime': obj.lastAuthorizedTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeDeleteEventBusRequest
 */
export interface EventBridgeDeleteEventBusRequest {
  /**
   * @schema EventBridgeDeleteEventBusRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'EventBridgeDeleteEventBusRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeDeleteEventBusRequest(obj: EventBridgeDeleteEventBusRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeDeletePartnerEventSourceRequest
 */
export interface EventBridgeDeletePartnerEventSourceRequest {
  /**
   * @schema EventBridgeDeletePartnerEventSourceRequest#Name
   */
  readonly name?: string;

  /**
   * @schema EventBridgeDeletePartnerEventSourceRequest#Account
   */
  readonly account?: string;

}

/**
 * Converts an object of type 'EventBridgeDeletePartnerEventSourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeDeletePartnerEventSourceRequest(obj: EventBridgeDeletePartnerEventSourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Account': obj.account,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeDeleteRuleRequest
 */
export interface EventBridgeDeleteRuleRequest {
  /**
   * @schema EventBridgeDeleteRuleRequest#Name
   */
  readonly name?: string;

  /**
   * @schema EventBridgeDeleteRuleRequest#EventBusName
   */
  readonly eventBusName?: string;

  /**
   * @schema EventBridgeDeleteRuleRequest#Force
   */
  readonly force?: boolean;

}

/**
 * Converts an object of type 'EventBridgeDeleteRuleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeDeleteRuleRequest(obj: EventBridgeDeleteRuleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'EventBusName': obj.eventBusName,
    'Force': obj.force,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeDescribeApiDestinationRequest
 */
export interface EventBridgeDescribeApiDestinationRequest {
  /**
   * @schema EventBridgeDescribeApiDestinationRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'EventBridgeDescribeApiDestinationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeDescribeApiDestinationRequest(obj: EventBridgeDescribeApiDestinationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeDescribeApiDestinationResponse
 */
export interface EventBridgeDescribeApiDestinationResponse {
  /**
   * @schema EventBridgeDescribeApiDestinationResponse#ApiDestinationArn
   */
  readonly apiDestinationArn?: string;

  /**
   * @schema EventBridgeDescribeApiDestinationResponse#Name
   */
  readonly name?: string;

  /**
   * @schema EventBridgeDescribeApiDestinationResponse#Description
   */
  readonly description?: string;

  /**
   * @schema EventBridgeDescribeApiDestinationResponse#ApiDestinationState
   */
  readonly apiDestinationState?: string;

  /**
   * @schema EventBridgeDescribeApiDestinationResponse#ConnectionArn
   */
  readonly connectionArn?: string;

  /**
   * @schema EventBridgeDescribeApiDestinationResponse#InvocationEndpoint
   */
  readonly invocationEndpoint?: string;

  /**
   * @schema EventBridgeDescribeApiDestinationResponse#HttpMethod
   */
  readonly httpMethod?: string;

  /**
   * @schema EventBridgeDescribeApiDestinationResponse#InvocationRateLimitPerSecond
   */
  readonly invocationRateLimitPerSecond?: number;

  /**
   * @schema EventBridgeDescribeApiDestinationResponse#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema EventBridgeDescribeApiDestinationResponse#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

}

/**
 * Converts an object of type 'EventBridgeDescribeApiDestinationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeDescribeApiDestinationResponse(obj: EventBridgeDescribeApiDestinationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiDestinationArn': obj.apiDestinationArn,
    'Name': obj.name,
    'Description': obj.description,
    'ApiDestinationState': obj.apiDestinationState,
    'ConnectionArn': obj.connectionArn,
    'InvocationEndpoint': obj.invocationEndpoint,
    'HttpMethod': obj.httpMethod,
    'InvocationRateLimitPerSecond': obj.invocationRateLimitPerSecond,
    'CreationTime': obj.creationTime,
    'LastModifiedTime': obj.lastModifiedTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeDescribeArchiveRequest
 */
export interface EventBridgeDescribeArchiveRequest {
  /**
   * @schema EventBridgeDescribeArchiveRequest#ArchiveName
   */
  readonly archiveName?: string;

}

/**
 * Converts an object of type 'EventBridgeDescribeArchiveRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeDescribeArchiveRequest(obj: EventBridgeDescribeArchiveRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ArchiveName': obj.archiveName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeDescribeArchiveResponse
 */
export interface EventBridgeDescribeArchiveResponse {
  /**
   * @schema EventBridgeDescribeArchiveResponse#ArchiveArn
   */
  readonly archiveArn?: string;

  /**
   * @schema EventBridgeDescribeArchiveResponse#ArchiveName
   */
  readonly archiveName?: string;

  /**
   * @schema EventBridgeDescribeArchiveResponse#EventSourceArn
   */
  readonly eventSourceArn?: string;

  /**
   * @schema EventBridgeDescribeArchiveResponse#Description
   */
  readonly description?: string;

  /**
   * @schema EventBridgeDescribeArchiveResponse#EventPattern
   */
  readonly eventPattern?: string;

  /**
   * @schema EventBridgeDescribeArchiveResponse#State
   */
  readonly state?: string;

  /**
   * @schema EventBridgeDescribeArchiveResponse#StateReason
   */
  readonly stateReason?: string;

  /**
   * @schema EventBridgeDescribeArchiveResponse#RetentionDays
   */
  readonly retentionDays?: number;

  /**
   * @schema EventBridgeDescribeArchiveResponse#SizeBytes
   */
  readonly sizeBytes?: number;

  /**
   * @schema EventBridgeDescribeArchiveResponse#EventCount
   */
  readonly eventCount?: number;

  /**
   * @schema EventBridgeDescribeArchiveResponse#CreationTime
   */
  readonly creationTime?: string;

}

/**
 * Converts an object of type 'EventBridgeDescribeArchiveResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeDescribeArchiveResponse(obj: EventBridgeDescribeArchiveResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ArchiveArn': obj.archiveArn,
    'ArchiveName': obj.archiveName,
    'EventSourceArn': obj.eventSourceArn,
    'Description': obj.description,
    'EventPattern': obj.eventPattern,
    'State': obj.state,
    'StateReason': obj.stateReason,
    'RetentionDays': obj.retentionDays,
    'SizeBytes': obj.sizeBytes,
    'EventCount': obj.eventCount,
    'CreationTime': obj.creationTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeDescribeConnectionRequest
 */
export interface EventBridgeDescribeConnectionRequest {
  /**
   * @schema EventBridgeDescribeConnectionRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'EventBridgeDescribeConnectionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeDescribeConnectionRequest(obj: EventBridgeDescribeConnectionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeDescribeConnectionResponse
 */
export interface EventBridgeDescribeConnectionResponse {
  /**
   * @schema EventBridgeDescribeConnectionResponse#ConnectionArn
   */
  readonly connectionArn?: string;

  /**
   * @schema EventBridgeDescribeConnectionResponse#Name
   */
  readonly name?: string;

  /**
   * @schema EventBridgeDescribeConnectionResponse#Description
   */
  readonly description?: string;

  /**
   * @schema EventBridgeDescribeConnectionResponse#ConnectionState
   */
  readonly connectionState?: string;

  /**
   * @schema EventBridgeDescribeConnectionResponse#StateReason
   */
  readonly stateReason?: string;

  /**
   * @schema EventBridgeDescribeConnectionResponse#AuthorizationType
   */
  readonly authorizationType?: string;

  /**
   * @schema EventBridgeDescribeConnectionResponse#SecretArn
   */
  readonly secretArn?: string;

  /**
   * @schema EventBridgeDescribeConnectionResponse#AuthParameters
   */
  readonly authParameters?: EventBridgeConnectionAuthResponseParameters;

  /**
   * @schema EventBridgeDescribeConnectionResponse#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema EventBridgeDescribeConnectionResponse#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema EventBridgeDescribeConnectionResponse#LastAuthorizedTime
   */
  readonly lastAuthorizedTime?: string;

}

/**
 * Converts an object of type 'EventBridgeDescribeConnectionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeDescribeConnectionResponse(obj: EventBridgeDescribeConnectionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConnectionArn': obj.connectionArn,
    'Name': obj.name,
    'Description': obj.description,
    'ConnectionState': obj.connectionState,
    'StateReason': obj.stateReason,
    'AuthorizationType': obj.authorizationType,
    'SecretArn': obj.secretArn,
    'AuthParameters': toJson_EventBridgeConnectionAuthResponseParameters(obj.authParameters),
    'CreationTime': obj.creationTime,
    'LastModifiedTime': obj.lastModifiedTime,
    'LastAuthorizedTime': obj.lastAuthorizedTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeDescribeEventBusRequest
 */
export interface EventBridgeDescribeEventBusRequest {
  /**
   * @schema EventBridgeDescribeEventBusRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'EventBridgeDescribeEventBusRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeDescribeEventBusRequest(obj: EventBridgeDescribeEventBusRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeDescribeEventBusResponse
 */
export interface EventBridgeDescribeEventBusResponse {
  /**
   * @schema EventBridgeDescribeEventBusResponse#Name
   */
  readonly name?: string;

  /**
   * @schema EventBridgeDescribeEventBusResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema EventBridgeDescribeEventBusResponse#Policy
   */
  readonly policy?: string;

}

/**
 * Converts an object of type 'EventBridgeDescribeEventBusResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeDescribeEventBusResponse(obj: EventBridgeDescribeEventBusResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Arn': obj.arn,
    'Policy': obj.policy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeDescribeEventSourceRequest
 */
export interface EventBridgeDescribeEventSourceRequest {
  /**
   * @schema EventBridgeDescribeEventSourceRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'EventBridgeDescribeEventSourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeDescribeEventSourceRequest(obj: EventBridgeDescribeEventSourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeDescribeEventSourceResponse
 */
export interface EventBridgeDescribeEventSourceResponse {
  /**
   * @schema EventBridgeDescribeEventSourceResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema EventBridgeDescribeEventSourceResponse#CreatedBy
   */
  readonly createdBy?: string;

  /**
   * @schema EventBridgeDescribeEventSourceResponse#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema EventBridgeDescribeEventSourceResponse#ExpirationTime
   */
  readonly expirationTime?: string;

  /**
   * @schema EventBridgeDescribeEventSourceResponse#Name
   */
  readonly name?: string;

  /**
   * @schema EventBridgeDescribeEventSourceResponse#State
   */
  readonly state?: string;

}

/**
 * Converts an object of type 'EventBridgeDescribeEventSourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeDescribeEventSourceResponse(obj: EventBridgeDescribeEventSourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CreatedBy': obj.createdBy,
    'CreationTime': obj.creationTime,
    'ExpirationTime': obj.expirationTime,
    'Name': obj.name,
    'State': obj.state,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeDescribePartnerEventSourceRequest
 */
export interface EventBridgeDescribePartnerEventSourceRequest {
  /**
   * @schema EventBridgeDescribePartnerEventSourceRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'EventBridgeDescribePartnerEventSourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeDescribePartnerEventSourceRequest(obj: EventBridgeDescribePartnerEventSourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeDescribePartnerEventSourceResponse
 */
export interface EventBridgeDescribePartnerEventSourceResponse {
  /**
   * @schema EventBridgeDescribePartnerEventSourceResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema EventBridgeDescribePartnerEventSourceResponse#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'EventBridgeDescribePartnerEventSourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeDescribePartnerEventSourceResponse(obj: EventBridgeDescribePartnerEventSourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeDescribeReplayRequest
 */
export interface EventBridgeDescribeReplayRequest {
  /**
   * @schema EventBridgeDescribeReplayRequest#ReplayName
   */
  readonly replayName?: string;

}

/**
 * Converts an object of type 'EventBridgeDescribeReplayRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeDescribeReplayRequest(obj: EventBridgeDescribeReplayRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplayName': obj.replayName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeDescribeReplayResponse
 */
export interface EventBridgeDescribeReplayResponse {
  /**
   * @schema EventBridgeDescribeReplayResponse#ReplayName
   */
  readonly replayName?: string;

  /**
   * @schema EventBridgeDescribeReplayResponse#ReplayArn
   */
  readonly replayArn?: string;

  /**
   * @schema EventBridgeDescribeReplayResponse#Description
   */
  readonly description?: string;

  /**
   * @schema EventBridgeDescribeReplayResponse#State
   */
  readonly state?: string;

  /**
   * @schema EventBridgeDescribeReplayResponse#StateReason
   */
  readonly stateReason?: string;

  /**
   * @schema EventBridgeDescribeReplayResponse#EventSourceArn
   */
  readonly eventSourceArn?: string;

  /**
   * @schema EventBridgeDescribeReplayResponse#Destination
   */
  readonly destination?: EventBridgeReplayDestination;

  /**
   * @schema EventBridgeDescribeReplayResponse#EventStartTime
   */
  readonly eventStartTime?: string;

  /**
   * @schema EventBridgeDescribeReplayResponse#EventEndTime
   */
  readonly eventEndTime?: string;

  /**
   * @schema EventBridgeDescribeReplayResponse#EventLastReplayedTime
   */
  readonly eventLastReplayedTime?: string;

  /**
   * @schema EventBridgeDescribeReplayResponse#ReplayStartTime
   */
  readonly replayStartTime?: string;

  /**
   * @schema EventBridgeDescribeReplayResponse#ReplayEndTime
   */
  readonly replayEndTime?: string;

}

/**
 * Converts an object of type 'EventBridgeDescribeReplayResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeDescribeReplayResponse(obj: EventBridgeDescribeReplayResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplayName': obj.replayName,
    'ReplayArn': obj.replayArn,
    'Description': obj.description,
    'State': obj.state,
    'StateReason': obj.stateReason,
    'EventSourceArn': obj.eventSourceArn,
    'Destination': toJson_EventBridgeReplayDestination(obj.destination),
    'EventStartTime': obj.eventStartTime,
    'EventEndTime': obj.eventEndTime,
    'EventLastReplayedTime': obj.eventLastReplayedTime,
    'ReplayStartTime': obj.replayStartTime,
    'ReplayEndTime': obj.replayEndTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeDescribeRuleRequest
 */
export interface EventBridgeDescribeRuleRequest {
  /**
   * @schema EventBridgeDescribeRuleRequest#Name
   */
  readonly name?: string;

  /**
   * @schema EventBridgeDescribeRuleRequest#EventBusName
   */
  readonly eventBusName?: string;

}

/**
 * Converts an object of type 'EventBridgeDescribeRuleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeDescribeRuleRequest(obj: EventBridgeDescribeRuleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'EventBusName': obj.eventBusName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeDescribeRuleResponse
 */
export interface EventBridgeDescribeRuleResponse {
  /**
   * @schema EventBridgeDescribeRuleResponse#Name
   */
  readonly name?: string;

  /**
   * @schema EventBridgeDescribeRuleResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema EventBridgeDescribeRuleResponse#EventPattern
   */
  readonly eventPattern?: string;

  /**
   * @schema EventBridgeDescribeRuleResponse#ScheduleExpression
   */
  readonly scheduleExpression?: string;

  /**
   * @schema EventBridgeDescribeRuleResponse#State
   */
  readonly state?: string;

  /**
   * @schema EventBridgeDescribeRuleResponse#Description
   */
  readonly description?: string;

  /**
   * @schema EventBridgeDescribeRuleResponse#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema EventBridgeDescribeRuleResponse#ManagedBy
   */
  readonly managedBy?: string;

  /**
   * @schema EventBridgeDescribeRuleResponse#EventBusName
   */
  readonly eventBusName?: string;

  /**
   * @schema EventBridgeDescribeRuleResponse#CreatedBy
   */
  readonly createdBy?: string;

}

/**
 * Converts an object of type 'EventBridgeDescribeRuleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeDescribeRuleResponse(obj: EventBridgeDescribeRuleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Arn': obj.arn,
    'EventPattern': obj.eventPattern,
    'ScheduleExpression': obj.scheduleExpression,
    'State': obj.state,
    'Description': obj.description,
    'RoleArn': obj.roleArn,
    'ManagedBy': obj.managedBy,
    'EventBusName': obj.eventBusName,
    'CreatedBy': obj.createdBy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeDisableRuleRequest
 */
export interface EventBridgeDisableRuleRequest {
  /**
   * @schema EventBridgeDisableRuleRequest#Name
   */
  readonly name?: string;

  /**
   * @schema EventBridgeDisableRuleRequest#EventBusName
   */
  readonly eventBusName?: string;

}

/**
 * Converts an object of type 'EventBridgeDisableRuleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeDisableRuleRequest(obj: EventBridgeDisableRuleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'EventBusName': obj.eventBusName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeEnableRuleRequest
 */
export interface EventBridgeEnableRuleRequest {
  /**
   * @schema EventBridgeEnableRuleRequest#Name
   */
  readonly name?: string;

  /**
   * @schema EventBridgeEnableRuleRequest#EventBusName
   */
  readonly eventBusName?: string;

}

/**
 * Converts an object of type 'EventBridgeEnableRuleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeEnableRuleRequest(obj: EventBridgeEnableRuleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'EventBusName': obj.eventBusName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeListApiDestinationsRequest
 */
export interface EventBridgeListApiDestinationsRequest {
  /**
   * @schema EventBridgeListApiDestinationsRequest#NamePrefix
   */
  readonly namePrefix?: string;

  /**
   * @schema EventBridgeListApiDestinationsRequest#ConnectionArn
   */
  readonly connectionArn?: string;

  /**
   * @schema EventBridgeListApiDestinationsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema EventBridgeListApiDestinationsRequest#Limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'EventBridgeListApiDestinationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeListApiDestinationsRequest(obj: EventBridgeListApiDestinationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NamePrefix': obj.namePrefix,
    'ConnectionArn': obj.connectionArn,
    'NextToken': obj.nextToken,
    'Limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeListApiDestinationsResponse
 */
export interface EventBridgeListApiDestinationsResponse {
  /**
   * @schema EventBridgeListApiDestinationsResponse#ApiDestinations
   */
  readonly apiDestinations?: EventBridgeApiDestination[];

  /**
   * @schema EventBridgeListApiDestinationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'EventBridgeListApiDestinationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeListApiDestinationsResponse(obj: EventBridgeListApiDestinationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiDestinations': obj.apiDestinations?.map(y => toJson_EventBridgeApiDestination(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeListArchivesRequest
 */
export interface EventBridgeListArchivesRequest {
  /**
   * @schema EventBridgeListArchivesRequest#NamePrefix
   */
  readonly namePrefix?: string;

  /**
   * @schema EventBridgeListArchivesRequest#EventSourceArn
   */
  readonly eventSourceArn?: string;

  /**
   * @schema EventBridgeListArchivesRequest#State
   */
  readonly state?: string;

  /**
   * @schema EventBridgeListArchivesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema EventBridgeListArchivesRequest#Limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'EventBridgeListArchivesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeListArchivesRequest(obj: EventBridgeListArchivesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NamePrefix': obj.namePrefix,
    'EventSourceArn': obj.eventSourceArn,
    'State': obj.state,
    'NextToken': obj.nextToken,
    'Limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeListArchivesResponse
 */
export interface EventBridgeListArchivesResponse {
  /**
   * @schema EventBridgeListArchivesResponse#Archives
   */
  readonly archives?: EventBridgeArchive[];

  /**
   * @schema EventBridgeListArchivesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'EventBridgeListArchivesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeListArchivesResponse(obj: EventBridgeListArchivesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Archives': obj.archives?.map(y => toJson_EventBridgeArchive(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeListConnectionsRequest
 */
export interface EventBridgeListConnectionsRequest {
  /**
   * @schema EventBridgeListConnectionsRequest#NamePrefix
   */
  readonly namePrefix?: string;

  /**
   * @schema EventBridgeListConnectionsRequest#ConnectionState
   */
  readonly connectionState?: string;

  /**
   * @schema EventBridgeListConnectionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema EventBridgeListConnectionsRequest#Limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'EventBridgeListConnectionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeListConnectionsRequest(obj: EventBridgeListConnectionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NamePrefix': obj.namePrefix,
    'ConnectionState': obj.connectionState,
    'NextToken': obj.nextToken,
    'Limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeListConnectionsResponse
 */
export interface EventBridgeListConnectionsResponse {
  /**
   * @schema EventBridgeListConnectionsResponse#Connections
   */
  readonly connections?: EventBridgeConnection[];

  /**
   * @schema EventBridgeListConnectionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'EventBridgeListConnectionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeListConnectionsResponse(obj: EventBridgeListConnectionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Connections': obj.connections?.map(y => toJson_EventBridgeConnection(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeListEventBusesRequest
 */
export interface EventBridgeListEventBusesRequest {
  /**
   * @schema EventBridgeListEventBusesRequest#NamePrefix
   */
  readonly namePrefix?: string;

  /**
   * @schema EventBridgeListEventBusesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema EventBridgeListEventBusesRequest#Limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'EventBridgeListEventBusesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeListEventBusesRequest(obj: EventBridgeListEventBusesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NamePrefix': obj.namePrefix,
    'NextToken': obj.nextToken,
    'Limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeListEventBusesResponse
 */
export interface EventBridgeListEventBusesResponse {
  /**
   * @schema EventBridgeListEventBusesResponse#EventBuses
   */
  readonly eventBuses?: EventBridgeEventBus[];

  /**
   * @schema EventBridgeListEventBusesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'EventBridgeListEventBusesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeListEventBusesResponse(obj: EventBridgeListEventBusesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EventBuses': obj.eventBuses?.map(y => toJson_EventBridgeEventBus(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeListEventSourcesRequest
 */
export interface EventBridgeListEventSourcesRequest {
  /**
   * @schema EventBridgeListEventSourcesRequest#NamePrefix
   */
  readonly namePrefix?: string;

  /**
   * @schema EventBridgeListEventSourcesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema EventBridgeListEventSourcesRequest#Limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'EventBridgeListEventSourcesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeListEventSourcesRequest(obj: EventBridgeListEventSourcesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NamePrefix': obj.namePrefix,
    'NextToken': obj.nextToken,
    'Limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeListEventSourcesResponse
 */
export interface EventBridgeListEventSourcesResponse {
  /**
   * @schema EventBridgeListEventSourcesResponse#EventSources
   */
  readonly eventSources?: EventBridgeEventSource[];

  /**
   * @schema EventBridgeListEventSourcesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'EventBridgeListEventSourcesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeListEventSourcesResponse(obj: EventBridgeListEventSourcesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EventSources': obj.eventSources?.map(y => toJson_EventBridgeEventSource(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeListPartnerEventSourceAccountsRequest
 */
export interface EventBridgeListPartnerEventSourceAccountsRequest {
  /**
   * @schema EventBridgeListPartnerEventSourceAccountsRequest#EventSourceName
   */
  readonly eventSourceName?: string;

  /**
   * @schema EventBridgeListPartnerEventSourceAccountsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema EventBridgeListPartnerEventSourceAccountsRequest#Limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'EventBridgeListPartnerEventSourceAccountsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeListPartnerEventSourceAccountsRequest(obj: EventBridgeListPartnerEventSourceAccountsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EventSourceName': obj.eventSourceName,
    'NextToken': obj.nextToken,
    'Limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeListPartnerEventSourceAccountsResponse
 */
export interface EventBridgeListPartnerEventSourceAccountsResponse {
  /**
   * @schema EventBridgeListPartnerEventSourceAccountsResponse#PartnerEventSourceAccounts
   */
  readonly partnerEventSourceAccounts?: EventBridgePartnerEventSourceAccount[];

  /**
   * @schema EventBridgeListPartnerEventSourceAccountsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'EventBridgeListPartnerEventSourceAccountsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeListPartnerEventSourceAccountsResponse(obj: EventBridgeListPartnerEventSourceAccountsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PartnerEventSourceAccounts': obj.partnerEventSourceAccounts?.map(y => toJson_EventBridgePartnerEventSourceAccount(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeListPartnerEventSourcesRequest
 */
export interface EventBridgeListPartnerEventSourcesRequest {
  /**
   * @schema EventBridgeListPartnerEventSourcesRequest#NamePrefix
   */
  readonly namePrefix?: string;

  /**
   * @schema EventBridgeListPartnerEventSourcesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema EventBridgeListPartnerEventSourcesRequest#Limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'EventBridgeListPartnerEventSourcesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeListPartnerEventSourcesRequest(obj: EventBridgeListPartnerEventSourcesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NamePrefix': obj.namePrefix,
    'NextToken': obj.nextToken,
    'Limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeListPartnerEventSourcesResponse
 */
export interface EventBridgeListPartnerEventSourcesResponse {
  /**
   * @schema EventBridgeListPartnerEventSourcesResponse#PartnerEventSources
   */
  readonly partnerEventSources?: EventBridgePartnerEventSource[];

  /**
   * @schema EventBridgeListPartnerEventSourcesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'EventBridgeListPartnerEventSourcesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeListPartnerEventSourcesResponse(obj: EventBridgeListPartnerEventSourcesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PartnerEventSources': obj.partnerEventSources?.map(y => toJson_EventBridgePartnerEventSource(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeListReplaysRequest
 */
export interface EventBridgeListReplaysRequest {
  /**
   * @schema EventBridgeListReplaysRequest#NamePrefix
   */
  readonly namePrefix?: string;

  /**
   * @schema EventBridgeListReplaysRequest#State
   */
  readonly state?: string;

  /**
   * @schema EventBridgeListReplaysRequest#EventSourceArn
   */
  readonly eventSourceArn?: string;

  /**
   * @schema EventBridgeListReplaysRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema EventBridgeListReplaysRequest#Limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'EventBridgeListReplaysRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeListReplaysRequest(obj: EventBridgeListReplaysRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NamePrefix': obj.namePrefix,
    'State': obj.state,
    'EventSourceArn': obj.eventSourceArn,
    'NextToken': obj.nextToken,
    'Limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeListReplaysResponse
 */
export interface EventBridgeListReplaysResponse {
  /**
   * @schema EventBridgeListReplaysResponse#Replays
   */
  readonly replays?: EventBridgeReplay[];

  /**
   * @schema EventBridgeListReplaysResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'EventBridgeListReplaysResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeListReplaysResponse(obj: EventBridgeListReplaysResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Replays': obj.replays?.map(y => toJson_EventBridgeReplay(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeListRuleNamesByTargetRequest
 */
export interface EventBridgeListRuleNamesByTargetRequest {
  /**
   * @schema EventBridgeListRuleNamesByTargetRequest#TargetArn
   */
  readonly targetArn?: string;

  /**
   * @schema EventBridgeListRuleNamesByTargetRequest#EventBusName
   */
  readonly eventBusName?: string;

  /**
   * @schema EventBridgeListRuleNamesByTargetRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema EventBridgeListRuleNamesByTargetRequest#Limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'EventBridgeListRuleNamesByTargetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeListRuleNamesByTargetRequest(obj: EventBridgeListRuleNamesByTargetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TargetArn': obj.targetArn,
    'EventBusName': obj.eventBusName,
    'NextToken': obj.nextToken,
    'Limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeListRuleNamesByTargetResponse
 */
export interface EventBridgeListRuleNamesByTargetResponse {
  /**
   * @schema EventBridgeListRuleNamesByTargetResponse#RuleNames
   */
  readonly ruleNames?: string[];

  /**
   * @schema EventBridgeListRuleNamesByTargetResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'EventBridgeListRuleNamesByTargetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeListRuleNamesByTargetResponse(obj: EventBridgeListRuleNamesByTargetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RuleNames': obj.ruleNames?.map(y => y),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeListRulesRequest
 */
export interface EventBridgeListRulesRequest {
  /**
   * @schema EventBridgeListRulesRequest#NamePrefix
   */
  readonly namePrefix?: string;

  /**
   * @schema EventBridgeListRulesRequest#EventBusName
   */
  readonly eventBusName?: string;

  /**
   * @schema EventBridgeListRulesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema EventBridgeListRulesRequest#Limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'EventBridgeListRulesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeListRulesRequest(obj: EventBridgeListRulesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NamePrefix': obj.namePrefix,
    'EventBusName': obj.eventBusName,
    'NextToken': obj.nextToken,
    'Limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeListRulesResponse
 */
export interface EventBridgeListRulesResponse {
  /**
   * @schema EventBridgeListRulesResponse#Rules
   */
  readonly rules?: EventBridgeRule[];

  /**
   * @schema EventBridgeListRulesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'EventBridgeListRulesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeListRulesResponse(obj: EventBridgeListRulesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Rules': obj.rules?.map(y => toJson_EventBridgeRule(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeListTagsForResourceRequest
 */
export interface EventBridgeListTagsForResourceRequest {
  /**
   * @schema EventBridgeListTagsForResourceRequest#ResourceARN
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'EventBridgeListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeListTagsForResourceRequest(obj: EventBridgeListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeListTagsForResourceResponse
 */
export interface EventBridgeListTagsForResourceResponse {
  /**
   * @schema EventBridgeListTagsForResourceResponse#Tags
   */
  readonly tags?: EventBridgeTag[];

}

/**
 * Converts an object of type 'EventBridgeListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeListTagsForResourceResponse(obj: EventBridgeListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': obj.tags?.map(y => toJson_EventBridgeTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeListTargetsByRuleRequest
 */
export interface EventBridgeListTargetsByRuleRequest {
  /**
   * @schema EventBridgeListTargetsByRuleRequest#Rule
   */
  readonly rule?: string;

  /**
   * @schema EventBridgeListTargetsByRuleRequest#EventBusName
   */
  readonly eventBusName?: string;

  /**
   * @schema EventBridgeListTargetsByRuleRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema EventBridgeListTargetsByRuleRequest#Limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'EventBridgeListTargetsByRuleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeListTargetsByRuleRequest(obj: EventBridgeListTargetsByRuleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Rule': obj.rule,
    'EventBusName': obj.eventBusName,
    'NextToken': obj.nextToken,
    'Limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeListTargetsByRuleResponse
 */
export interface EventBridgeListTargetsByRuleResponse {
  /**
   * @schema EventBridgeListTargetsByRuleResponse#Targets
   */
  readonly targets?: EventBridgeTarget[];

  /**
   * @schema EventBridgeListTargetsByRuleResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'EventBridgeListTargetsByRuleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeListTargetsByRuleResponse(obj: EventBridgeListTargetsByRuleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Targets': obj.targets?.map(y => toJson_EventBridgeTarget(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgePutEventsRequest
 */
export interface EventBridgePutEventsRequest {
  /**
   * @schema EventBridgePutEventsRequest#Entries
   */
  readonly entries?: EventBridgePutEventsRequestEntry[];

}

/**
 * Converts an object of type 'EventBridgePutEventsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgePutEventsRequest(obj: EventBridgePutEventsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Entries': obj.entries?.map(y => toJson_EventBridgePutEventsRequestEntry(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgePutEventsResponse
 */
export interface EventBridgePutEventsResponse {
  /**
   * @schema EventBridgePutEventsResponse#FailedEntryCount
   */
  readonly failedEntryCount?: number;

  /**
   * @schema EventBridgePutEventsResponse#Entries
   */
  readonly entries?: EventBridgePutEventsResultEntry[];

}

/**
 * Converts an object of type 'EventBridgePutEventsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgePutEventsResponse(obj: EventBridgePutEventsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FailedEntryCount': obj.failedEntryCount,
    'Entries': obj.entries?.map(y => toJson_EventBridgePutEventsResultEntry(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgePutPartnerEventsRequest
 */
export interface EventBridgePutPartnerEventsRequest {
  /**
   * @schema EventBridgePutPartnerEventsRequest#Entries
   */
  readonly entries?: EventBridgePutPartnerEventsRequestEntry[];

}

/**
 * Converts an object of type 'EventBridgePutPartnerEventsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgePutPartnerEventsRequest(obj: EventBridgePutPartnerEventsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Entries': obj.entries?.map(y => toJson_EventBridgePutPartnerEventsRequestEntry(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgePutPartnerEventsResponse
 */
export interface EventBridgePutPartnerEventsResponse {
  /**
   * @schema EventBridgePutPartnerEventsResponse#FailedEntryCount
   */
  readonly failedEntryCount?: number;

  /**
   * @schema EventBridgePutPartnerEventsResponse#Entries
   */
  readonly entries?: EventBridgePutPartnerEventsResultEntry[];

}

/**
 * Converts an object of type 'EventBridgePutPartnerEventsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgePutPartnerEventsResponse(obj: EventBridgePutPartnerEventsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FailedEntryCount': obj.failedEntryCount,
    'Entries': obj.entries?.map(y => toJson_EventBridgePutPartnerEventsResultEntry(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgePutPermissionRequest
 */
export interface EventBridgePutPermissionRequest {
  /**
   * @schema EventBridgePutPermissionRequest#EventBusName
   */
  readonly eventBusName?: string;

  /**
   * @schema EventBridgePutPermissionRequest#Action
   */
  readonly action?: string;

  /**
   * @schema EventBridgePutPermissionRequest#Principal
   */
  readonly principal?: string;

  /**
   * @schema EventBridgePutPermissionRequest#StatementId
   */
  readonly statementId?: string;

  /**
   * @schema EventBridgePutPermissionRequest#Condition
   */
  readonly condition?: EventBridgeCondition;

  /**
   * @schema EventBridgePutPermissionRequest#Policy
   */
  readonly policy?: string;

}

/**
 * Converts an object of type 'EventBridgePutPermissionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgePutPermissionRequest(obj: EventBridgePutPermissionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EventBusName': obj.eventBusName,
    'Action': obj.action,
    'Principal': obj.principal,
    'StatementId': obj.statementId,
    'Condition': toJson_EventBridgeCondition(obj.condition),
    'Policy': obj.policy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgePutRuleRequest
 */
export interface EventBridgePutRuleRequest {
  /**
   * @schema EventBridgePutRuleRequest#Name
   */
  readonly name?: string;

  /**
   * @schema EventBridgePutRuleRequest#ScheduleExpression
   */
  readonly scheduleExpression?: string;

  /**
   * @schema EventBridgePutRuleRequest#EventPattern
   */
  readonly eventPattern?: string;

  /**
   * @schema EventBridgePutRuleRequest#State
   */
  readonly state?: string;

  /**
   * @schema EventBridgePutRuleRequest#Description
   */
  readonly description?: string;

  /**
   * @schema EventBridgePutRuleRequest#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema EventBridgePutRuleRequest#Tags
   */
  readonly tags?: EventBridgeTag[];

  /**
   * @schema EventBridgePutRuleRequest#EventBusName
   */
  readonly eventBusName?: string;

}

/**
 * Converts an object of type 'EventBridgePutRuleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgePutRuleRequest(obj: EventBridgePutRuleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'ScheduleExpression': obj.scheduleExpression,
    'EventPattern': obj.eventPattern,
    'State': obj.state,
    'Description': obj.description,
    'RoleArn': obj.roleArn,
    'Tags': obj.tags?.map(y => toJson_EventBridgeTag(y)),
    'EventBusName': obj.eventBusName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgePutRuleResponse
 */
export interface EventBridgePutRuleResponse {
  /**
   * @schema EventBridgePutRuleResponse#RuleArn
   */
  readonly ruleArn?: string;

}

/**
 * Converts an object of type 'EventBridgePutRuleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgePutRuleResponse(obj: EventBridgePutRuleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RuleArn': obj.ruleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgePutTargetsRequest
 */
export interface EventBridgePutTargetsRequest {
  /**
   * @schema EventBridgePutTargetsRequest#Rule
   */
  readonly rule?: string;

  /**
   * @schema EventBridgePutTargetsRequest#EventBusName
   */
  readonly eventBusName?: string;

  /**
   * @schema EventBridgePutTargetsRequest#Targets
   */
  readonly targets?: EventBridgeTarget[];

}

/**
 * Converts an object of type 'EventBridgePutTargetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgePutTargetsRequest(obj: EventBridgePutTargetsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Rule': obj.rule,
    'EventBusName': obj.eventBusName,
    'Targets': obj.targets?.map(y => toJson_EventBridgeTarget(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgePutTargetsResponse
 */
export interface EventBridgePutTargetsResponse {
  /**
   * @schema EventBridgePutTargetsResponse#FailedEntryCount
   */
  readonly failedEntryCount?: number;

  /**
   * @schema EventBridgePutTargetsResponse#FailedEntries
   */
  readonly failedEntries?: EventBridgePutTargetsResultEntry[];

}

/**
 * Converts an object of type 'EventBridgePutTargetsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgePutTargetsResponse(obj: EventBridgePutTargetsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FailedEntryCount': obj.failedEntryCount,
    'FailedEntries': obj.failedEntries?.map(y => toJson_EventBridgePutTargetsResultEntry(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeRemovePermissionRequest
 */
export interface EventBridgeRemovePermissionRequest {
  /**
   * @schema EventBridgeRemovePermissionRequest#StatementId
   */
  readonly statementId?: string;

  /**
   * @schema EventBridgeRemovePermissionRequest#RemoveAllPermissions
   */
  readonly removeAllPermissions?: boolean;

  /**
   * @schema EventBridgeRemovePermissionRequest#EventBusName
   */
  readonly eventBusName?: string;

}

/**
 * Converts an object of type 'EventBridgeRemovePermissionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeRemovePermissionRequest(obj: EventBridgeRemovePermissionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StatementId': obj.statementId,
    'RemoveAllPermissions': obj.removeAllPermissions,
    'EventBusName': obj.eventBusName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeRemoveTargetsRequest
 */
export interface EventBridgeRemoveTargetsRequest {
  /**
   * @schema EventBridgeRemoveTargetsRequest#Rule
   */
  readonly rule?: string;

  /**
   * @schema EventBridgeRemoveTargetsRequest#EventBusName
   */
  readonly eventBusName?: string;

  /**
   * @schema EventBridgeRemoveTargetsRequest#Ids
   */
  readonly ids?: string[];

  /**
   * @schema EventBridgeRemoveTargetsRequest#Force
   */
  readonly force?: boolean;

}

/**
 * Converts an object of type 'EventBridgeRemoveTargetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeRemoveTargetsRequest(obj: EventBridgeRemoveTargetsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Rule': obj.rule,
    'EventBusName': obj.eventBusName,
    'Ids': obj.ids?.map(y => y),
    'Force': obj.force,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeRemoveTargetsResponse
 */
export interface EventBridgeRemoveTargetsResponse {
  /**
   * @schema EventBridgeRemoveTargetsResponse#FailedEntryCount
   */
  readonly failedEntryCount?: number;

  /**
   * @schema EventBridgeRemoveTargetsResponse#FailedEntries
   */
  readonly failedEntries?: EventBridgeRemoveTargetsResultEntry[];

}

/**
 * Converts an object of type 'EventBridgeRemoveTargetsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeRemoveTargetsResponse(obj: EventBridgeRemoveTargetsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FailedEntryCount': obj.failedEntryCount,
    'FailedEntries': obj.failedEntries?.map(y => toJson_EventBridgeRemoveTargetsResultEntry(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeStartReplayRequest
 */
export interface EventBridgeStartReplayRequest {
  /**
   * @schema EventBridgeStartReplayRequest#ReplayName
   */
  readonly replayName?: string;

  /**
   * @schema EventBridgeStartReplayRequest#Description
   */
  readonly description?: string;

  /**
   * @schema EventBridgeStartReplayRequest#EventSourceArn
   */
  readonly eventSourceArn?: string;

  /**
   * @schema EventBridgeStartReplayRequest#EventStartTime
   */
  readonly eventStartTime?: string;

  /**
   * @schema EventBridgeStartReplayRequest#EventEndTime
   */
  readonly eventEndTime?: string;

  /**
   * @schema EventBridgeStartReplayRequest#Destination
   */
  readonly destination?: EventBridgeReplayDestination;

}

/**
 * Converts an object of type 'EventBridgeStartReplayRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeStartReplayRequest(obj: EventBridgeStartReplayRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplayName': obj.replayName,
    'Description': obj.description,
    'EventSourceArn': obj.eventSourceArn,
    'EventStartTime': obj.eventStartTime,
    'EventEndTime': obj.eventEndTime,
    'Destination': toJson_EventBridgeReplayDestination(obj.destination),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeStartReplayResponse
 */
export interface EventBridgeStartReplayResponse {
  /**
   * @schema EventBridgeStartReplayResponse#ReplayArn
   */
  readonly replayArn?: string;

  /**
   * @schema EventBridgeStartReplayResponse#State
   */
  readonly state?: string;

  /**
   * @schema EventBridgeStartReplayResponse#StateReason
   */
  readonly stateReason?: string;

  /**
   * @schema EventBridgeStartReplayResponse#ReplayStartTime
   */
  readonly replayStartTime?: string;

}

/**
 * Converts an object of type 'EventBridgeStartReplayResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeStartReplayResponse(obj: EventBridgeStartReplayResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplayArn': obj.replayArn,
    'State': obj.state,
    'StateReason': obj.stateReason,
    'ReplayStartTime': obj.replayStartTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeTagResourceRequest
 */
export interface EventBridgeTagResourceRequest {
  /**
   * @schema EventBridgeTagResourceRequest#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema EventBridgeTagResourceRequest#Tags
   */
  readonly tags?: EventBridgeTag[];

}

/**
 * Converts an object of type 'EventBridgeTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeTagResourceRequest(obj: EventBridgeTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
    'Tags': obj.tags?.map(y => toJson_EventBridgeTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeTagResourceResponse
 */
export interface EventBridgeTagResourceResponse {
}

/**
 * Converts an object of type 'EventBridgeTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeTagResourceResponse(obj: EventBridgeTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeTestEventPatternRequest
 */
export interface EventBridgeTestEventPatternRequest {
  /**
   * @schema EventBridgeTestEventPatternRequest#EventPattern
   */
  readonly eventPattern?: string;

  /**
   * @schema EventBridgeTestEventPatternRequest#Event
   */
  readonly event?: string;

}

/**
 * Converts an object of type 'EventBridgeTestEventPatternRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeTestEventPatternRequest(obj: EventBridgeTestEventPatternRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EventPattern': obj.eventPattern,
    'Event': obj.event,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeTestEventPatternResponse
 */
export interface EventBridgeTestEventPatternResponse {
  /**
   * @schema EventBridgeTestEventPatternResponse#Result
   */
  readonly result?: boolean;

}

/**
 * Converts an object of type 'EventBridgeTestEventPatternResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeTestEventPatternResponse(obj: EventBridgeTestEventPatternResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Result': obj.result,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeUntagResourceRequest
 */
export interface EventBridgeUntagResourceRequest {
  /**
   * @schema EventBridgeUntagResourceRequest#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema EventBridgeUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'EventBridgeUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeUntagResourceRequest(obj: EventBridgeUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeUntagResourceResponse
 */
export interface EventBridgeUntagResourceResponse {
}

/**
 * Converts an object of type 'EventBridgeUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeUntagResourceResponse(obj: EventBridgeUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeUpdateApiDestinationRequest
 */
export interface EventBridgeUpdateApiDestinationRequest {
  /**
   * @schema EventBridgeUpdateApiDestinationRequest#Name
   */
  readonly name?: string;

  /**
   * @schema EventBridgeUpdateApiDestinationRequest#Description
   */
  readonly description?: string;

  /**
   * @schema EventBridgeUpdateApiDestinationRequest#ConnectionArn
   */
  readonly connectionArn?: string;

  /**
   * @schema EventBridgeUpdateApiDestinationRequest#InvocationEndpoint
   */
  readonly invocationEndpoint?: string;

  /**
   * @schema EventBridgeUpdateApiDestinationRequest#HttpMethod
   */
  readonly httpMethod?: string;

  /**
   * @schema EventBridgeUpdateApiDestinationRequest#InvocationRateLimitPerSecond
   */
  readonly invocationRateLimitPerSecond?: number;

}

/**
 * Converts an object of type 'EventBridgeUpdateApiDestinationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeUpdateApiDestinationRequest(obj: EventBridgeUpdateApiDestinationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Description': obj.description,
    'ConnectionArn': obj.connectionArn,
    'InvocationEndpoint': obj.invocationEndpoint,
    'HttpMethod': obj.httpMethod,
    'InvocationRateLimitPerSecond': obj.invocationRateLimitPerSecond,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeUpdateApiDestinationResponse
 */
export interface EventBridgeUpdateApiDestinationResponse {
  /**
   * @schema EventBridgeUpdateApiDestinationResponse#ApiDestinationArn
   */
  readonly apiDestinationArn?: string;

  /**
   * @schema EventBridgeUpdateApiDestinationResponse#ApiDestinationState
   */
  readonly apiDestinationState?: string;

  /**
   * @schema EventBridgeUpdateApiDestinationResponse#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema EventBridgeUpdateApiDestinationResponse#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

}

/**
 * Converts an object of type 'EventBridgeUpdateApiDestinationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeUpdateApiDestinationResponse(obj: EventBridgeUpdateApiDestinationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiDestinationArn': obj.apiDestinationArn,
    'ApiDestinationState': obj.apiDestinationState,
    'CreationTime': obj.creationTime,
    'LastModifiedTime': obj.lastModifiedTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeUpdateArchiveRequest
 */
export interface EventBridgeUpdateArchiveRequest {
  /**
   * @schema EventBridgeUpdateArchiveRequest#ArchiveName
   */
  readonly archiveName?: string;

  /**
   * @schema EventBridgeUpdateArchiveRequest#Description
   */
  readonly description?: string;

  /**
   * @schema EventBridgeUpdateArchiveRequest#EventPattern
   */
  readonly eventPattern?: string;

  /**
   * @schema EventBridgeUpdateArchiveRequest#RetentionDays
   */
  readonly retentionDays?: number;

}

/**
 * Converts an object of type 'EventBridgeUpdateArchiveRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeUpdateArchiveRequest(obj: EventBridgeUpdateArchiveRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ArchiveName': obj.archiveName,
    'Description': obj.description,
    'EventPattern': obj.eventPattern,
    'RetentionDays': obj.retentionDays,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeUpdateArchiveResponse
 */
export interface EventBridgeUpdateArchiveResponse {
  /**
   * @schema EventBridgeUpdateArchiveResponse#ArchiveArn
   */
  readonly archiveArn?: string;

  /**
   * @schema EventBridgeUpdateArchiveResponse#State
   */
  readonly state?: string;

  /**
   * @schema EventBridgeUpdateArchiveResponse#StateReason
   */
  readonly stateReason?: string;

  /**
   * @schema EventBridgeUpdateArchiveResponse#CreationTime
   */
  readonly creationTime?: string;

}

/**
 * Converts an object of type 'EventBridgeUpdateArchiveResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeUpdateArchiveResponse(obj: EventBridgeUpdateArchiveResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ArchiveArn': obj.archiveArn,
    'State': obj.state,
    'StateReason': obj.stateReason,
    'CreationTime': obj.creationTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeUpdateConnectionRequest
 */
export interface EventBridgeUpdateConnectionRequest {
  /**
   * @schema EventBridgeUpdateConnectionRequest#Name
   */
  readonly name?: string;

  /**
   * @schema EventBridgeUpdateConnectionRequest#Description
   */
  readonly description?: string;

  /**
   * @schema EventBridgeUpdateConnectionRequest#AuthorizationType
   */
  readonly authorizationType?: string;

  /**
   * @schema EventBridgeUpdateConnectionRequest#AuthParameters
   */
  readonly authParameters?: EventBridgeUpdateConnectionAuthRequestParameters;

}

/**
 * Converts an object of type 'EventBridgeUpdateConnectionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeUpdateConnectionRequest(obj: EventBridgeUpdateConnectionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Description': obj.description,
    'AuthorizationType': obj.authorizationType,
    'AuthParameters': toJson_EventBridgeUpdateConnectionAuthRequestParameters(obj.authParameters),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeUpdateConnectionResponse
 */
export interface EventBridgeUpdateConnectionResponse {
  /**
   * @schema EventBridgeUpdateConnectionResponse#ConnectionArn
   */
  readonly connectionArn?: string;

  /**
   * @schema EventBridgeUpdateConnectionResponse#ConnectionState
   */
  readonly connectionState?: string;

  /**
   * @schema EventBridgeUpdateConnectionResponse#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema EventBridgeUpdateConnectionResponse#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema EventBridgeUpdateConnectionResponse#LastAuthorizedTime
   */
  readonly lastAuthorizedTime?: string;

}

/**
 * Converts an object of type 'EventBridgeUpdateConnectionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeUpdateConnectionResponse(obj: EventBridgeUpdateConnectionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConnectionArn': obj.connectionArn,
    'ConnectionState': obj.connectionState,
    'CreationTime': obj.creationTime,
    'LastModifiedTime': obj.lastModifiedTime,
    'LastAuthorizedTime': obj.lastAuthorizedTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeCreateConnectionAuthRequestParameters
 */
export interface EventBridgeCreateConnectionAuthRequestParameters {
  /**
   * @schema EventBridgeCreateConnectionAuthRequestParameters#BasicAuthParameters
   */
  readonly basicAuthParameters?: EventBridgeCreateConnectionBasicAuthRequestParameters;

  /**
   * @schema EventBridgeCreateConnectionAuthRequestParameters#OAuthParameters
   */
  readonly oAuthParameters?: EventBridgeCreateConnectionOAuthRequestParameters;

  /**
   * @schema EventBridgeCreateConnectionAuthRequestParameters#ApiKeyAuthParameters
   */
  readonly apiKeyAuthParameters?: EventBridgeCreateConnectionApiKeyAuthRequestParameters;

  /**
   * @schema EventBridgeCreateConnectionAuthRequestParameters#InvocationHttpParameters
   */
  readonly invocationHttpParameters?: EventBridgeConnectionHttpParameters;

}

/**
 * Converts an object of type 'EventBridgeCreateConnectionAuthRequestParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeCreateConnectionAuthRequestParameters(obj: EventBridgeCreateConnectionAuthRequestParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BasicAuthParameters': toJson_EventBridgeCreateConnectionBasicAuthRequestParameters(obj.basicAuthParameters),
    'OAuthParameters': toJson_EventBridgeCreateConnectionOAuthRequestParameters(obj.oAuthParameters),
    'ApiKeyAuthParameters': toJson_EventBridgeCreateConnectionApiKeyAuthRequestParameters(obj.apiKeyAuthParameters),
    'InvocationHttpParameters': toJson_EventBridgeConnectionHttpParameters(obj.invocationHttpParameters),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeTag
 */
export interface EventBridgeTag {
  /**
   * @schema EventBridgeTag#Key
   */
  readonly key?: string;

  /**
   * @schema EventBridgeTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'EventBridgeTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeTag(obj: EventBridgeTag | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeConnectionAuthResponseParameters
 */
export interface EventBridgeConnectionAuthResponseParameters {
  /**
   * @schema EventBridgeConnectionAuthResponseParameters#BasicAuthParameters
   */
  readonly basicAuthParameters?: EventBridgeConnectionBasicAuthResponseParameters;

  /**
   * @schema EventBridgeConnectionAuthResponseParameters#OAuthParameters
   */
  readonly oAuthParameters?: EventBridgeConnectionOAuthResponseParameters;

  /**
   * @schema EventBridgeConnectionAuthResponseParameters#ApiKeyAuthParameters
   */
  readonly apiKeyAuthParameters?: EventBridgeConnectionApiKeyAuthResponseParameters;

  /**
   * @schema EventBridgeConnectionAuthResponseParameters#InvocationHttpParameters
   */
  readonly invocationHttpParameters?: EventBridgeConnectionHttpParameters;

}

/**
 * Converts an object of type 'EventBridgeConnectionAuthResponseParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeConnectionAuthResponseParameters(obj: EventBridgeConnectionAuthResponseParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BasicAuthParameters': toJson_EventBridgeConnectionBasicAuthResponseParameters(obj.basicAuthParameters),
    'OAuthParameters': toJson_EventBridgeConnectionOAuthResponseParameters(obj.oAuthParameters),
    'ApiKeyAuthParameters': toJson_EventBridgeConnectionApiKeyAuthResponseParameters(obj.apiKeyAuthParameters),
    'InvocationHttpParameters': toJson_EventBridgeConnectionHttpParameters(obj.invocationHttpParameters),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeReplayDestination
 */
export interface EventBridgeReplayDestination {
  /**
   * @schema EventBridgeReplayDestination#Arn
   */
  readonly arn?: string;

  /**
   * @schema EventBridgeReplayDestination#FilterArns
   */
  readonly filterArns?: string[];

}

/**
 * Converts an object of type 'EventBridgeReplayDestination' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeReplayDestination(obj: EventBridgeReplayDestination | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'FilterArns': obj.filterArns?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeApiDestination
 */
export interface EventBridgeApiDestination {
  /**
   * @schema EventBridgeApiDestination#ApiDestinationArn
   */
  readonly apiDestinationArn?: string;

  /**
   * @schema EventBridgeApiDestination#Name
   */
  readonly name?: string;

  /**
   * @schema EventBridgeApiDestination#ApiDestinationState
   */
  readonly apiDestinationState?: string;

  /**
   * @schema EventBridgeApiDestination#ConnectionArn
   */
  readonly connectionArn?: string;

  /**
   * @schema EventBridgeApiDestination#InvocationEndpoint
   */
  readonly invocationEndpoint?: string;

  /**
   * @schema EventBridgeApiDestination#HttpMethod
   */
  readonly httpMethod?: string;

  /**
   * @schema EventBridgeApiDestination#InvocationRateLimitPerSecond
   */
  readonly invocationRateLimitPerSecond?: number;

  /**
   * @schema EventBridgeApiDestination#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema EventBridgeApiDestination#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

}

/**
 * Converts an object of type 'EventBridgeApiDestination' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeApiDestination(obj: EventBridgeApiDestination | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiDestinationArn': obj.apiDestinationArn,
    'Name': obj.name,
    'ApiDestinationState': obj.apiDestinationState,
    'ConnectionArn': obj.connectionArn,
    'InvocationEndpoint': obj.invocationEndpoint,
    'HttpMethod': obj.httpMethod,
    'InvocationRateLimitPerSecond': obj.invocationRateLimitPerSecond,
    'CreationTime': obj.creationTime,
    'LastModifiedTime': obj.lastModifiedTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeArchive
 */
export interface EventBridgeArchive {
  /**
   * @schema EventBridgeArchive#ArchiveName
   */
  readonly archiveName?: string;

  /**
   * @schema EventBridgeArchive#EventSourceArn
   */
  readonly eventSourceArn?: string;

  /**
   * @schema EventBridgeArchive#State
   */
  readonly state?: string;

  /**
   * @schema EventBridgeArchive#StateReason
   */
  readonly stateReason?: string;

  /**
   * @schema EventBridgeArchive#RetentionDays
   */
  readonly retentionDays?: number;

  /**
   * @schema EventBridgeArchive#SizeBytes
   */
  readonly sizeBytes?: number;

  /**
   * @schema EventBridgeArchive#EventCount
   */
  readonly eventCount?: number;

  /**
   * @schema EventBridgeArchive#CreationTime
   */
  readonly creationTime?: string;

}

/**
 * Converts an object of type 'EventBridgeArchive' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeArchive(obj: EventBridgeArchive | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ArchiveName': obj.archiveName,
    'EventSourceArn': obj.eventSourceArn,
    'State': obj.state,
    'StateReason': obj.stateReason,
    'RetentionDays': obj.retentionDays,
    'SizeBytes': obj.sizeBytes,
    'EventCount': obj.eventCount,
    'CreationTime': obj.creationTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeConnection
 */
export interface EventBridgeConnection {
  /**
   * @schema EventBridgeConnection#ConnectionArn
   */
  readonly connectionArn?: string;

  /**
   * @schema EventBridgeConnection#Name
   */
  readonly name?: string;

  /**
   * @schema EventBridgeConnection#ConnectionState
   */
  readonly connectionState?: string;

  /**
   * @schema EventBridgeConnection#StateReason
   */
  readonly stateReason?: string;

  /**
   * @schema EventBridgeConnection#AuthorizationType
   */
  readonly authorizationType?: string;

  /**
   * @schema EventBridgeConnection#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema EventBridgeConnection#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema EventBridgeConnection#LastAuthorizedTime
   */
  readonly lastAuthorizedTime?: string;

}

/**
 * Converts an object of type 'EventBridgeConnection' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeConnection(obj: EventBridgeConnection | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConnectionArn': obj.connectionArn,
    'Name': obj.name,
    'ConnectionState': obj.connectionState,
    'StateReason': obj.stateReason,
    'AuthorizationType': obj.authorizationType,
    'CreationTime': obj.creationTime,
    'LastModifiedTime': obj.lastModifiedTime,
    'LastAuthorizedTime': obj.lastAuthorizedTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeEventBus
 */
export interface EventBridgeEventBus {
  /**
   * @schema EventBridgeEventBus#Name
   */
  readonly name?: string;

  /**
   * @schema EventBridgeEventBus#Arn
   */
  readonly arn?: string;

  /**
   * @schema EventBridgeEventBus#Policy
   */
  readonly policy?: string;

}

/**
 * Converts an object of type 'EventBridgeEventBus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeEventBus(obj: EventBridgeEventBus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Arn': obj.arn,
    'Policy': obj.policy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeEventSource
 */
export interface EventBridgeEventSource {
  /**
   * @schema EventBridgeEventSource#Arn
   */
  readonly arn?: string;

  /**
   * @schema EventBridgeEventSource#CreatedBy
   */
  readonly createdBy?: string;

  /**
   * @schema EventBridgeEventSource#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema EventBridgeEventSource#ExpirationTime
   */
  readonly expirationTime?: string;

  /**
   * @schema EventBridgeEventSource#Name
   */
  readonly name?: string;

  /**
   * @schema EventBridgeEventSource#State
   */
  readonly state?: string;

}

/**
 * Converts an object of type 'EventBridgeEventSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeEventSource(obj: EventBridgeEventSource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CreatedBy': obj.createdBy,
    'CreationTime': obj.creationTime,
    'ExpirationTime': obj.expirationTime,
    'Name': obj.name,
    'State': obj.state,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgePartnerEventSourceAccount
 */
export interface EventBridgePartnerEventSourceAccount {
  /**
   * @schema EventBridgePartnerEventSourceAccount#Account
   */
  readonly account?: string;

  /**
   * @schema EventBridgePartnerEventSourceAccount#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema EventBridgePartnerEventSourceAccount#ExpirationTime
   */
  readonly expirationTime?: string;

  /**
   * @schema EventBridgePartnerEventSourceAccount#State
   */
  readonly state?: string;

}

/**
 * Converts an object of type 'EventBridgePartnerEventSourceAccount' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgePartnerEventSourceAccount(obj: EventBridgePartnerEventSourceAccount | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Account': obj.account,
    'CreationTime': obj.creationTime,
    'ExpirationTime': obj.expirationTime,
    'State': obj.state,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgePartnerEventSource
 */
export interface EventBridgePartnerEventSource {
  /**
   * @schema EventBridgePartnerEventSource#Arn
   */
  readonly arn?: string;

  /**
   * @schema EventBridgePartnerEventSource#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'EventBridgePartnerEventSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgePartnerEventSource(obj: EventBridgePartnerEventSource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeReplay
 */
export interface EventBridgeReplay {
  /**
   * @schema EventBridgeReplay#ReplayName
   */
  readonly replayName?: string;

  /**
   * @schema EventBridgeReplay#EventSourceArn
   */
  readonly eventSourceArn?: string;

  /**
   * @schema EventBridgeReplay#State
   */
  readonly state?: string;

  /**
   * @schema EventBridgeReplay#StateReason
   */
  readonly stateReason?: string;

  /**
   * @schema EventBridgeReplay#EventStartTime
   */
  readonly eventStartTime?: string;

  /**
   * @schema EventBridgeReplay#EventEndTime
   */
  readonly eventEndTime?: string;

  /**
   * @schema EventBridgeReplay#EventLastReplayedTime
   */
  readonly eventLastReplayedTime?: string;

  /**
   * @schema EventBridgeReplay#ReplayStartTime
   */
  readonly replayStartTime?: string;

  /**
   * @schema EventBridgeReplay#ReplayEndTime
   */
  readonly replayEndTime?: string;

}

/**
 * Converts an object of type 'EventBridgeReplay' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeReplay(obj: EventBridgeReplay | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplayName': obj.replayName,
    'EventSourceArn': obj.eventSourceArn,
    'State': obj.state,
    'StateReason': obj.stateReason,
    'EventStartTime': obj.eventStartTime,
    'EventEndTime': obj.eventEndTime,
    'EventLastReplayedTime': obj.eventLastReplayedTime,
    'ReplayStartTime': obj.replayStartTime,
    'ReplayEndTime': obj.replayEndTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeRule
 */
export interface EventBridgeRule {
  /**
   * @schema EventBridgeRule#Name
   */
  readonly name?: string;

  /**
   * @schema EventBridgeRule#Arn
   */
  readonly arn?: string;

  /**
   * @schema EventBridgeRule#EventPattern
   */
  readonly eventPattern?: string;

  /**
   * @schema EventBridgeRule#State
   */
  readonly state?: string;

  /**
   * @schema EventBridgeRule#Description
   */
  readonly description?: string;

  /**
   * @schema EventBridgeRule#ScheduleExpression
   */
  readonly scheduleExpression?: string;

  /**
   * @schema EventBridgeRule#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema EventBridgeRule#ManagedBy
   */
  readonly managedBy?: string;

  /**
   * @schema EventBridgeRule#EventBusName
   */
  readonly eventBusName?: string;

}

/**
 * Converts an object of type 'EventBridgeRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeRule(obj: EventBridgeRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Arn': obj.arn,
    'EventPattern': obj.eventPattern,
    'State': obj.state,
    'Description': obj.description,
    'ScheduleExpression': obj.scheduleExpression,
    'RoleArn': obj.roleArn,
    'ManagedBy': obj.managedBy,
    'EventBusName': obj.eventBusName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeTarget
 */
export interface EventBridgeTarget {
  /**
   * @schema EventBridgeTarget#Id
   */
  readonly id?: string;

  /**
   * @schema EventBridgeTarget#Arn
   */
  readonly arn?: string;

  /**
   * @schema EventBridgeTarget#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema EventBridgeTarget#Input
   */
  readonly input?: string;

  /**
   * @schema EventBridgeTarget#InputPath
   */
  readonly inputPath?: string;

  /**
   * @schema EventBridgeTarget#InputTransformer
   */
  readonly inputTransformer?: EventBridgeInputTransformer;

  /**
   * @schema EventBridgeTarget#KinesisParameters
   */
  readonly kinesisParameters?: EventBridgeKinesisParameters;

  /**
   * @schema EventBridgeTarget#RunCommandParameters
   */
  readonly runCommandParameters?: EventBridgeRunCommandParameters;

  /**
   * @schema EventBridgeTarget#EcsParameters
   */
  readonly ecsParameters?: EventBridgeEcsParameters;

  /**
   * @schema EventBridgeTarget#BatchParameters
   */
  readonly batchParameters?: EventBridgeBatchParameters;

  /**
   * @schema EventBridgeTarget#SqsParameters
   */
  readonly sqsParameters?: EventBridgeSqsParameters;

  /**
   * @schema EventBridgeTarget#HttpParameters
   */
  readonly httpParameters?: EventBridgeHttpParameters;

  /**
   * @schema EventBridgeTarget#RedshiftDataParameters
   */
  readonly redshiftDataParameters?: EventBridgeRedshiftDataParameters;

  /**
   * @schema EventBridgeTarget#SageMakerPipelineParameters
   */
  readonly sageMakerPipelineParameters?: EventBridgeSageMakerPipelineParameters;

  /**
   * @schema EventBridgeTarget#DeadLetterConfig
   */
  readonly deadLetterConfig?: EventBridgeDeadLetterConfig;

  /**
   * @schema EventBridgeTarget#RetryPolicy
   */
  readonly retryPolicy?: EventBridgeRetryPolicy;

}

/**
 * Converts an object of type 'EventBridgeTarget' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeTarget(obj: EventBridgeTarget | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Arn': obj.arn,
    'RoleArn': obj.roleArn,
    'Input': obj.input,
    'InputPath': obj.inputPath,
    'InputTransformer': toJson_EventBridgeInputTransformer(obj.inputTransformer),
    'KinesisParameters': toJson_EventBridgeKinesisParameters(obj.kinesisParameters),
    'RunCommandParameters': toJson_EventBridgeRunCommandParameters(obj.runCommandParameters),
    'EcsParameters': toJson_EventBridgeEcsParameters(obj.ecsParameters),
    'BatchParameters': toJson_EventBridgeBatchParameters(obj.batchParameters),
    'SqsParameters': toJson_EventBridgeSqsParameters(obj.sqsParameters),
    'HttpParameters': toJson_EventBridgeHttpParameters(obj.httpParameters),
    'RedshiftDataParameters': toJson_EventBridgeRedshiftDataParameters(obj.redshiftDataParameters),
    'SageMakerPipelineParameters': toJson_EventBridgeSageMakerPipelineParameters(obj.sageMakerPipelineParameters),
    'DeadLetterConfig': toJson_EventBridgeDeadLetterConfig(obj.deadLetterConfig),
    'RetryPolicy': toJson_EventBridgeRetryPolicy(obj.retryPolicy),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgePutEventsRequestEntry
 */
export interface EventBridgePutEventsRequestEntry {
  /**
   * @schema EventBridgePutEventsRequestEntry#Time
   */
  readonly time?: string;

  /**
   * @schema EventBridgePutEventsRequestEntry#Source
   */
  readonly source?: string;

  /**
   * @schema EventBridgePutEventsRequestEntry#Resources
   */
  readonly resources?: string[];

  /**
   * @schema EventBridgePutEventsRequestEntry#DetailType
   */
  readonly detailType?: string;

  /**
   * @schema EventBridgePutEventsRequestEntry#Detail
   */
  readonly detail?: string;

  /**
   * @schema EventBridgePutEventsRequestEntry#EventBusName
   */
  readonly eventBusName?: string;

  /**
   * @schema EventBridgePutEventsRequestEntry#TraceHeader
   */
  readonly traceHeader?: string;

}

/**
 * Converts an object of type 'EventBridgePutEventsRequestEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgePutEventsRequestEntry(obj: EventBridgePutEventsRequestEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Time': obj.time,
    'Source': obj.source,
    'Resources': obj.resources?.map(y => y),
    'DetailType': obj.detailType,
    'Detail': obj.detail,
    'EventBusName': obj.eventBusName,
    'TraceHeader': obj.traceHeader,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgePutEventsResultEntry
 */
export interface EventBridgePutEventsResultEntry {
  /**
   * @schema EventBridgePutEventsResultEntry#EventId
   */
  readonly eventId?: string;

  /**
   * @schema EventBridgePutEventsResultEntry#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema EventBridgePutEventsResultEntry#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * Converts an object of type 'EventBridgePutEventsResultEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgePutEventsResultEntry(obj: EventBridgePutEventsResultEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EventId': obj.eventId,
    'ErrorCode': obj.errorCode,
    'ErrorMessage': obj.errorMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgePutPartnerEventsRequestEntry
 */
export interface EventBridgePutPartnerEventsRequestEntry {
  /**
   * @schema EventBridgePutPartnerEventsRequestEntry#Time
   */
  readonly time?: string;

  /**
   * @schema EventBridgePutPartnerEventsRequestEntry#Source
   */
  readonly source?: string;

  /**
   * @schema EventBridgePutPartnerEventsRequestEntry#Resources
   */
  readonly resources?: string[];

  /**
   * @schema EventBridgePutPartnerEventsRequestEntry#DetailType
   */
  readonly detailType?: string;

  /**
   * @schema EventBridgePutPartnerEventsRequestEntry#Detail
   */
  readonly detail?: string;

}

/**
 * Converts an object of type 'EventBridgePutPartnerEventsRequestEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgePutPartnerEventsRequestEntry(obj: EventBridgePutPartnerEventsRequestEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Time': obj.time,
    'Source': obj.source,
    'Resources': obj.resources?.map(y => y),
    'DetailType': obj.detailType,
    'Detail': obj.detail,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgePutPartnerEventsResultEntry
 */
export interface EventBridgePutPartnerEventsResultEntry {
  /**
   * @schema EventBridgePutPartnerEventsResultEntry#EventId
   */
  readonly eventId?: string;

  /**
   * @schema EventBridgePutPartnerEventsResultEntry#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema EventBridgePutPartnerEventsResultEntry#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * Converts an object of type 'EventBridgePutPartnerEventsResultEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgePutPartnerEventsResultEntry(obj: EventBridgePutPartnerEventsResultEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EventId': obj.eventId,
    'ErrorCode': obj.errorCode,
    'ErrorMessage': obj.errorMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeCondition
 */
export interface EventBridgeCondition {
  /**
   * @schema EventBridgeCondition#Type
   */
  readonly type?: string;

  /**
   * @schema EventBridgeCondition#Key
   */
  readonly key?: string;

  /**
   * @schema EventBridgeCondition#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'EventBridgeCondition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeCondition(obj: EventBridgeCondition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Key': obj.key,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgePutTargetsResultEntry
 */
export interface EventBridgePutTargetsResultEntry {
  /**
   * @schema EventBridgePutTargetsResultEntry#TargetId
   */
  readonly targetId?: string;

  /**
   * @schema EventBridgePutTargetsResultEntry#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema EventBridgePutTargetsResultEntry#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * Converts an object of type 'EventBridgePutTargetsResultEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgePutTargetsResultEntry(obj: EventBridgePutTargetsResultEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TargetId': obj.targetId,
    'ErrorCode': obj.errorCode,
    'ErrorMessage': obj.errorMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeRemoveTargetsResultEntry
 */
export interface EventBridgeRemoveTargetsResultEntry {
  /**
   * @schema EventBridgeRemoveTargetsResultEntry#TargetId
   */
  readonly targetId?: string;

  /**
   * @schema EventBridgeRemoveTargetsResultEntry#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema EventBridgeRemoveTargetsResultEntry#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * Converts an object of type 'EventBridgeRemoveTargetsResultEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeRemoveTargetsResultEntry(obj: EventBridgeRemoveTargetsResultEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TargetId': obj.targetId,
    'ErrorCode': obj.errorCode,
    'ErrorMessage': obj.errorMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeUpdateConnectionAuthRequestParameters
 */
export interface EventBridgeUpdateConnectionAuthRequestParameters {
  /**
   * @schema EventBridgeUpdateConnectionAuthRequestParameters#BasicAuthParameters
   */
  readonly basicAuthParameters?: EventBridgeUpdateConnectionBasicAuthRequestParameters;

  /**
   * @schema EventBridgeUpdateConnectionAuthRequestParameters#OAuthParameters
   */
  readonly oAuthParameters?: EventBridgeUpdateConnectionOAuthRequestParameters;

  /**
   * @schema EventBridgeUpdateConnectionAuthRequestParameters#ApiKeyAuthParameters
   */
  readonly apiKeyAuthParameters?: EventBridgeUpdateConnectionApiKeyAuthRequestParameters;

  /**
   * @schema EventBridgeUpdateConnectionAuthRequestParameters#InvocationHttpParameters
   */
  readonly invocationHttpParameters?: EventBridgeConnectionHttpParameters;

}

/**
 * Converts an object of type 'EventBridgeUpdateConnectionAuthRequestParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeUpdateConnectionAuthRequestParameters(obj: EventBridgeUpdateConnectionAuthRequestParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BasicAuthParameters': toJson_EventBridgeUpdateConnectionBasicAuthRequestParameters(obj.basicAuthParameters),
    'OAuthParameters': toJson_EventBridgeUpdateConnectionOAuthRequestParameters(obj.oAuthParameters),
    'ApiKeyAuthParameters': toJson_EventBridgeUpdateConnectionApiKeyAuthRequestParameters(obj.apiKeyAuthParameters),
    'InvocationHttpParameters': toJson_EventBridgeConnectionHttpParameters(obj.invocationHttpParameters),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeCreateConnectionBasicAuthRequestParameters
 */
export interface EventBridgeCreateConnectionBasicAuthRequestParameters {
  /**
   * @schema EventBridgeCreateConnectionBasicAuthRequestParameters#Username
   */
  readonly username?: string;

  /**
   * @schema EventBridgeCreateConnectionBasicAuthRequestParameters#Password
   */
  readonly password?: string;

}

/**
 * Converts an object of type 'EventBridgeCreateConnectionBasicAuthRequestParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeCreateConnectionBasicAuthRequestParameters(obj: EventBridgeCreateConnectionBasicAuthRequestParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Username': obj.username,
    'Password': obj.password,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeCreateConnectionOAuthRequestParameters
 */
export interface EventBridgeCreateConnectionOAuthRequestParameters {
  /**
   * @schema EventBridgeCreateConnectionOAuthRequestParameters#ClientParameters
   */
  readonly clientParameters?: EventBridgeCreateConnectionOAuthClientRequestParameters;

  /**
   * @schema EventBridgeCreateConnectionOAuthRequestParameters#AuthorizationEndpoint
   */
  readonly authorizationEndpoint?: string;

  /**
   * @schema EventBridgeCreateConnectionOAuthRequestParameters#HttpMethod
   */
  readonly httpMethod?: string;

  /**
   * @schema EventBridgeCreateConnectionOAuthRequestParameters#OAuthHttpParameters
   */
  readonly oAuthHttpParameters?: EventBridgeConnectionHttpParameters;

}

/**
 * Converts an object of type 'EventBridgeCreateConnectionOAuthRequestParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeCreateConnectionOAuthRequestParameters(obj: EventBridgeCreateConnectionOAuthRequestParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClientParameters': toJson_EventBridgeCreateConnectionOAuthClientRequestParameters(obj.clientParameters),
    'AuthorizationEndpoint': obj.authorizationEndpoint,
    'HttpMethod': obj.httpMethod,
    'OAuthHttpParameters': toJson_EventBridgeConnectionHttpParameters(obj.oAuthHttpParameters),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeCreateConnectionApiKeyAuthRequestParameters
 */
export interface EventBridgeCreateConnectionApiKeyAuthRequestParameters {
  /**
   * @schema EventBridgeCreateConnectionApiKeyAuthRequestParameters#ApiKeyName
   */
  readonly apiKeyName?: string;

  /**
   * @schema EventBridgeCreateConnectionApiKeyAuthRequestParameters#ApiKeyValue
   */
  readonly apiKeyValue?: string;

}

/**
 * Converts an object of type 'EventBridgeCreateConnectionApiKeyAuthRequestParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeCreateConnectionApiKeyAuthRequestParameters(obj: EventBridgeCreateConnectionApiKeyAuthRequestParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiKeyName': obj.apiKeyName,
    'ApiKeyValue': obj.apiKeyValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeConnectionHttpParameters
 */
export interface EventBridgeConnectionHttpParameters {
  /**
   * @schema EventBridgeConnectionHttpParameters#HeaderParameters
   */
  readonly headerParameters?: EventBridgeConnectionHeaderParameter[];

  /**
   * @schema EventBridgeConnectionHttpParameters#QueryStringParameters
   */
  readonly queryStringParameters?: EventBridgeConnectionQueryStringParameter[];

  /**
   * @schema EventBridgeConnectionHttpParameters#BodyParameters
   */
  readonly bodyParameters?: EventBridgeConnectionBodyParameter[];

}

/**
 * Converts an object of type 'EventBridgeConnectionHttpParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeConnectionHttpParameters(obj: EventBridgeConnectionHttpParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HeaderParameters': obj.headerParameters?.map(y => toJson_EventBridgeConnectionHeaderParameter(y)),
    'QueryStringParameters': obj.queryStringParameters?.map(y => toJson_EventBridgeConnectionQueryStringParameter(y)),
    'BodyParameters': obj.bodyParameters?.map(y => toJson_EventBridgeConnectionBodyParameter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeConnectionBasicAuthResponseParameters
 */
export interface EventBridgeConnectionBasicAuthResponseParameters {
  /**
   * @schema EventBridgeConnectionBasicAuthResponseParameters#Username
   */
  readonly username?: string;

}

/**
 * Converts an object of type 'EventBridgeConnectionBasicAuthResponseParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeConnectionBasicAuthResponseParameters(obj: EventBridgeConnectionBasicAuthResponseParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Username': obj.username,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeConnectionOAuthResponseParameters
 */
export interface EventBridgeConnectionOAuthResponseParameters {
  /**
   * @schema EventBridgeConnectionOAuthResponseParameters#ClientParameters
   */
  readonly clientParameters?: EventBridgeConnectionOAuthClientResponseParameters;

  /**
   * @schema EventBridgeConnectionOAuthResponseParameters#AuthorizationEndpoint
   */
  readonly authorizationEndpoint?: string;

  /**
   * @schema EventBridgeConnectionOAuthResponseParameters#HttpMethod
   */
  readonly httpMethod?: string;

  /**
   * @schema EventBridgeConnectionOAuthResponseParameters#OAuthHttpParameters
   */
  readonly oAuthHttpParameters?: EventBridgeConnectionHttpParameters;

}

/**
 * Converts an object of type 'EventBridgeConnectionOAuthResponseParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeConnectionOAuthResponseParameters(obj: EventBridgeConnectionOAuthResponseParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClientParameters': toJson_EventBridgeConnectionOAuthClientResponseParameters(obj.clientParameters),
    'AuthorizationEndpoint': obj.authorizationEndpoint,
    'HttpMethod': obj.httpMethod,
    'OAuthHttpParameters': toJson_EventBridgeConnectionHttpParameters(obj.oAuthHttpParameters),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeConnectionApiKeyAuthResponseParameters
 */
export interface EventBridgeConnectionApiKeyAuthResponseParameters {
  /**
   * @schema EventBridgeConnectionApiKeyAuthResponseParameters#ApiKeyName
   */
  readonly apiKeyName?: string;

}

/**
 * Converts an object of type 'EventBridgeConnectionApiKeyAuthResponseParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeConnectionApiKeyAuthResponseParameters(obj: EventBridgeConnectionApiKeyAuthResponseParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiKeyName': obj.apiKeyName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeInputTransformer
 */
export interface EventBridgeInputTransformer {
  /**
   * @schema EventBridgeInputTransformer#InputPathsMap
   */
  readonly inputPathsMap?: { [key: string]: string };

  /**
   * @schema EventBridgeInputTransformer#InputTemplate
   */
  readonly inputTemplate?: string;

}

/**
 * Converts an object of type 'EventBridgeInputTransformer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeInputTransformer(obj: EventBridgeInputTransformer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InputPathsMap': ((obj.inputPathsMap) === undefined) ? undefined : (Object.entries(obj.inputPathsMap).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'InputTemplate': obj.inputTemplate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeKinesisParameters
 */
export interface EventBridgeKinesisParameters {
  /**
   * @schema EventBridgeKinesisParameters#PartitionKeyPath
   */
  readonly partitionKeyPath?: string;

}

/**
 * Converts an object of type 'EventBridgeKinesisParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeKinesisParameters(obj: EventBridgeKinesisParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PartitionKeyPath': obj.partitionKeyPath,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeRunCommandParameters
 */
export interface EventBridgeRunCommandParameters {
  /**
   * @schema EventBridgeRunCommandParameters#RunCommandTargets
   */
  readonly runCommandTargets?: EventBridgeRunCommandTarget[];

}

/**
 * Converts an object of type 'EventBridgeRunCommandParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeRunCommandParameters(obj: EventBridgeRunCommandParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RunCommandTargets': obj.runCommandTargets?.map(y => toJson_EventBridgeRunCommandTarget(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeEcsParameters
 */
export interface EventBridgeEcsParameters {
  /**
   * @schema EventBridgeEcsParameters#TaskDefinitionArn
   */
  readonly taskDefinitionArn?: string;

  /**
   * @schema EventBridgeEcsParameters#TaskCount
   */
  readonly taskCount?: number;

  /**
   * @schema EventBridgeEcsParameters#LaunchType
   */
  readonly launchType?: string;

  /**
   * @schema EventBridgeEcsParameters#NetworkConfiguration
   */
  readonly networkConfiguration?: EventBridgeNetworkConfiguration;

  /**
   * @schema EventBridgeEcsParameters#PlatformVersion
   */
  readonly platformVersion?: string;

  /**
   * @schema EventBridgeEcsParameters#Group
   */
  readonly group?: string;

  /**
   * @schema EventBridgeEcsParameters#CapacityProviderStrategy
   */
  readonly capacityProviderStrategy?: EventBridgeCapacityProviderStrategyItem[];

  /**
   * @schema EventBridgeEcsParameters#EnableECSManagedTags
   */
  readonly enableEcsManagedTags?: boolean;

  /**
   * @schema EventBridgeEcsParameters#EnableExecuteCommand
   */
  readonly enableExecuteCommand?: boolean;

  /**
   * @schema EventBridgeEcsParameters#PlacementConstraints
   */
  readonly placementConstraints?: EventBridgePlacementConstraint[];

  /**
   * @schema EventBridgeEcsParameters#PlacementStrategy
   */
  readonly placementStrategy?: EventBridgePlacementStrategy[];

  /**
   * @schema EventBridgeEcsParameters#PropagateTags
   */
  readonly propagateTags?: string;

  /**
   * @schema EventBridgeEcsParameters#ReferenceId
   */
  readonly referenceId?: string;

  /**
   * @schema EventBridgeEcsParameters#Tags
   */
  readonly tags?: EventBridgeTag[];

}

/**
 * Converts an object of type 'EventBridgeEcsParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeEcsParameters(obj: EventBridgeEcsParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TaskDefinitionArn': obj.taskDefinitionArn,
    'TaskCount': obj.taskCount,
    'LaunchType': obj.launchType,
    'NetworkConfiguration': toJson_EventBridgeNetworkConfiguration(obj.networkConfiguration),
    'PlatformVersion': obj.platformVersion,
    'Group': obj.group,
    'CapacityProviderStrategy': obj.capacityProviderStrategy?.map(y => toJson_EventBridgeCapacityProviderStrategyItem(y)),
    'EnableECSManagedTags': obj.enableEcsManagedTags,
    'EnableExecuteCommand': obj.enableExecuteCommand,
    'PlacementConstraints': obj.placementConstraints?.map(y => toJson_EventBridgePlacementConstraint(y)),
    'PlacementStrategy': obj.placementStrategy?.map(y => toJson_EventBridgePlacementStrategy(y)),
    'PropagateTags': obj.propagateTags,
    'ReferenceId': obj.referenceId,
    'Tags': obj.tags?.map(y => toJson_EventBridgeTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeBatchParameters
 */
export interface EventBridgeBatchParameters {
  /**
   * @schema EventBridgeBatchParameters#JobDefinition
   */
  readonly jobDefinition?: string;

  /**
   * @schema EventBridgeBatchParameters#JobName
   */
  readonly jobName?: string;

  /**
   * @schema EventBridgeBatchParameters#ArrayProperties
   */
  readonly arrayProperties?: EventBridgeBatchArrayProperties;

  /**
   * @schema EventBridgeBatchParameters#RetryStrategy
   */
  readonly retryStrategy?: EventBridgeBatchRetryStrategy;

}

/**
 * Converts an object of type 'EventBridgeBatchParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeBatchParameters(obj: EventBridgeBatchParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobDefinition': obj.jobDefinition,
    'JobName': obj.jobName,
    'ArrayProperties': toJson_EventBridgeBatchArrayProperties(obj.arrayProperties),
    'RetryStrategy': toJson_EventBridgeBatchRetryStrategy(obj.retryStrategy),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeSqsParameters
 */
export interface EventBridgeSqsParameters {
  /**
   * @schema EventBridgeSqsParameters#MessageGroupId
   */
  readonly messageGroupId?: string;

}

/**
 * Converts an object of type 'EventBridgeSqsParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeSqsParameters(obj: EventBridgeSqsParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MessageGroupId': obj.messageGroupId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeHttpParameters
 */
export interface EventBridgeHttpParameters {
  /**
   * @schema EventBridgeHttpParameters#PathParameterValues
   */
  readonly pathParameterValues?: string[];

  /**
   * @schema EventBridgeHttpParameters#HeaderParameters
   */
  readonly headerParameters?: { [key: string]: string };

  /**
   * @schema EventBridgeHttpParameters#QueryStringParameters
   */
  readonly queryStringParameters?: { [key: string]: string };

}

/**
 * Converts an object of type 'EventBridgeHttpParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeHttpParameters(obj: EventBridgeHttpParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PathParameterValues': obj.pathParameterValues?.map(y => y),
    'HeaderParameters': ((obj.headerParameters) === undefined) ? undefined : (Object.entries(obj.headerParameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'QueryStringParameters': ((obj.queryStringParameters) === undefined) ? undefined : (Object.entries(obj.queryStringParameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeRedshiftDataParameters
 */
export interface EventBridgeRedshiftDataParameters {
  /**
   * @schema EventBridgeRedshiftDataParameters#SecretManagerArn
   */
  readonly secretManagerArn?: string;

  /**
   * @schema EventBridgeRedshiftDataParameters#Database
   */
  readonly database?: string;

  /**
   * @schema EventBridgeRedshiftDataParameters#DbUser
   */
  readonly dbUser?: string;

  /**
   * @schema EventBridgeRedshiftDataParameters#Sql
   */
  readonly sql?: string;

  /**
   * @schema EventBridgeRedshiftDataParameters#StatementName
   */
  readonly statementName?: string;

  /**
   * @schema EventBridgeRedshiftDataParameters#WithEvent
   */
  readonly withEvent?: boolean;

}

/**
 * Converts an object of type 'EventBridgeRedshiftDataParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeRedshiftDataParameters(obj: EventBridgeRedshiftDataParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SecretManagerArn': obj.secretManagerArn,
    'Database': obj.database,
    'DbUser': obj.dbUser,
    'Sql': obj.sql,
    'StatementName': obj.statementName,
    'WithEvent': obj.withEvent,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeSageMakerPipelineParameters
 */
export interface EventBridgeSageMakerPipelineParameters {
  /**
   * @schema EventBridgeSageMakerPipelineParameters#PipelineParameterList
   */
  readonly pipelineParameterList?: EventBridgeSageMakerPipelineParameter[];

}

/**
 * Converts an object of type 'EventBridgeSageMakerPipelineParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeSageMakerPipelineParameters(obj: EventBridgeSageMakerPipelineParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PipelineParameterList': obj.pipelineParameterList?.map(y => toJson_EventBridgeSageMakerPipelineParameter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeDeadLetterConfig
 */
export interface EventBridgeDeadLetterConfig {
  /**
   * @schema EventBridgeDeadLetterConfig#Arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'EventBridgeDeadLetterConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeDeadLetterConfig(obj: EventBridgeDeadLetterConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeRetryPolicy
 */
export interface EventBridgeRetryPolicy {
  /**
   * @schema EventBridgeRetryPolicy#MaximumRetryAttempts
   */
  readonly maximumRetryAttempts?: number;

  /**
   * @schema EventBridgeRetryPolicy#MaximumEventAgeInSeconds
   */
  readonly maximumEventAgeInSeconds?: number;

}

/**
 * Converts an object of type 'EventBridgeRetryPolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeRetryPolicy(obj: EventBridgeRetryPolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaximumRetryAttempts': obj.maximumRetryAttempts,
    'MaximumEventAgeInSeconds': obj.maximumEventAgeInSeconds,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeUpdateConnectionBasicAuthRequestParameters
 */
export interface EventBridgeUpdateConnectionBasicAuthRequestParameters {
  /**
   * @schema EventBridgeUpdateConnectionBasicAuthRequestParameters#Username
   */
  readonly username?: string;

  /**
   * @schema EventBridgeUpdateConnectionBasicAuthRequestParameters#Password
   */
  readonly password?: string;

}

/**
 * Converts an object of type 'EventBridgeUpdateConnectionBasicAuthRequestParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeUpdateConnectionBasicAuthRequestParameters(obj: EventBridgeUpdateConnectionBasicAuthRequestParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Username': obj.username,
    'Password': obj.password,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeUpdateConnectionOAuthRequestParameters
 */
export interface EventBridgeUpdateConnectionOAuthRequestParameters {
  /**
   * @schema EventBridgeUpdateConnectionOAuthRequestParameters#ClientParameters
   */
  readonly clientParameters?: EventBridgeUpdateConnectionOAuthClientRequestParameters;

  /**
   * @schema EventBridgeUpdateConnectionOAuthRequestParameters#AuthorizationEndpoint
   */
  readonly authorizationEndpoint?: string;

  /**
   * @schema EventBridgeUpdateConnectionOAuthRequestParameters#HttpMethod
   */
  readonly httpMethod?: string;

  /**
   * @schema EventBridgeUpdateConnectionOAuthRequestParameters#OAuthHttpParameters
   */
  readonly oAuthHttpParameters?: EventBridgeConnectionHttpParameters;

}

/**
 * Converts an object of type 'EventBridgeUpdateConnectionOAuthRequestParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeUpdateConnectionOAuthRequestParameters(obj: EventBridgeUpdateConnectionOAuthRequestParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClientParameters': toJson_EventBridgeUpdateConnectionOAuthClientRequestParameters(obj.clientParameters),
    'AuthorizationEndpoint': obj.authorizationEndpoint,
    'HttpMethod': obj.httpMethod,
    'OAuthHttpParameters': toJson_EventBridgeConnectionHttpParameters(obj.oAuthHttpParameters),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeUpdateConnectionApiKeyAuthRequestParameters
 */
export interface EventBridgeUpdateConnectionApiKeyAuthRequestParameters {
  /**
   * @schema EventBridgeUpdateConnectionApiKeyAuthRequestParameters#ApiKeyName
   */
  readonly apiKeyName?: string;

  /**
   * @schema EventBridgeUpdateConnectionApiKeyAuthRequestParameters#ApiKeyValue
   */
  readonly apiKeyValue?: string;

}

/**
 * Converts an object of type 'EventBridgeUpdateConnectionApiKeyAuthRequestParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeUpdateConnectionApiKeyAuthRequestParameters(obj: EventBridgeUpdateConnectionApiKeyAuthRequestParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiKeyName': obj.apiKeyName,
    'ApiKeyValue': obj.apiKeyValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeCreateConnectionOAuthClientRequestParameters
 */
export interface EventBridgeCreateConnectionOAuthClientRequestParameters {
  /**
   * @schema EventBridgeCreateConnectionOAuthClientRequestParameters#ClientID
   */
  readonly clientId?: string;

  /**
   * @schema EventBridgeCreateConnectionOAuthClientRequestParameters#ClientSecret
   */
  readonly clientSecret?: string;

}

/**
 * Converts an object of type 'EventBridgeCreateConnectionOAuthClientRequestParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeCreateConnectionOAuthClientRequestParameters(obj: EventBridgeCreateConnectionOAuthClientRequestParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClientID': obj.clientId,
    'ClientSecret': obj.clientSecret,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeConnectionHeaderParameter
 */
export interface EventBridgeConnectionHeaderParameter {
  /**
   * @schema EventBridgeConnectionHeaderParameter#Key
   */
  readonly key?: string;

  /**
   * @schema EventBridgeConnectionHeaderParameter#Value
   */
  readonly value?: string;

  /**
   * @schema EventBridgeConnectionHeaderParameter#IsValueSecret
   */
  readonly isValueSecret?: boolean;

}

/**
 * Converts an object of type 'EventBridgeConnectionHeaderParameter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeConnectionHeaderParameter(obj: EventBridgeConnectionHeaderParameter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Value': obj.value,
    'IsValueSecret': obj.isValueSecret,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeConnectionQueryStringParameter
 */
export interface EventBridgeConnectionQueryStringParameter {
  /**
   * @schema EventBridgeConnectionQueryStringParameter#Key
   */
  readonly key?: string;

  /**
   * @schema EventBridgeConnectionQueryStringParameter#Value
   */
  readonly value?: string;

  /**
   * @schema EventBridgeConnectionQueryStringParameter#IsValueSecret
   */
  readonly isValueSecret?: boolean;

}

/**
 * Converts an object of type 'EventBridgeConnectionQueryStringParameter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeConnectionQueryStringParameter(obj: EventBridgeConnectionQueryStringParameter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Value': obj.value,
    'IsValueSecret': obj.isValueSecret,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeConnectionBodyParameter
 */
export interface EventBridgeConnectionBodyParameter {
  /**
   * @schema EventBridgeConnectionBodyParameter#Key
   */
  readonly key?: string;

  /**
   * @schema EventBridgeConnectionBodyParameter#Value
   */
  readonly value?: string;

  /**
   * @schema EventBridgeConnectionBodyParameter#IsValueSecret
   */
  readonly isValueSecret?: boolean;

}

/**
 * Converts an object of type 'EventBridgeConnectionBodyParameter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeConnectionBodyParameter(obj: EventBridgeConnectionBodyParameter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Value': obj.value,
    'IsValueSecret': obj.isValueSecret,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeConnectionOAuthClientResponseParameters
 */
export interface EventBridgeConnectionOAuthClientResponseParameters {
  /**
   * @schema EventBridgeConnectionOAuthClientResponseParameters#ClientID
   */
  readonly clientId?: string;

}

/**
 * Converts an object of type 'EventBridgeConnectionOAuthClientResponseParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeConnectionOAuthClientResponseParameters(obj: EventBridgeConnectionOAuthClientResponseParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClientID': obj.clientId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeRunCommandTarget
 */
export interface EventBridgeRunCommandTarget {
  /**
   * @schema EventBridgeRunCommandTarget#Key
   */
  readonly key?: string;

  /**
   * @schema EventBridgeRunCommandTarget#Values
   */
  readonly values?: string[];

}

/**
 * Converts an object of type 'EventBridgeRunCommandTarget' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeRunCommandTarget(obj: EventBridgeRunCommandTarget | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Values': obj.values?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeNetworkConfiguration
 */
export interface EventBridgeNetworkConfiguration {
  /**
   * @schema EventBridgeNetworkConfiguration#awsvpcConfiguration
   */
  readonly awsvpcConfiguration?: EventBridgeAwsVpcConfiguration;

}

/**
 * Converts an object of type 'EventBridgeNetworkConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeNetworkConfiguration(obj: EventBridgeNetworkConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'awsvpcConfiguration': toJson_EventBridgeAwsVpcConfiguration(obj.awsvpcConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeCapacityProviderStrategyItem
 */
export interface EventBridgeCapacityProviderStrategyItem {
  /**
   * @schema EventBridgeCapacityProviderStrategyItem#capacityProvider
   */
  readonly capacityProvider: string;

  /**
   * @schema EventBridgeCapacityProviderStrategyItem#weight
   */
  readonly weight?: number;

  /**
   * @schema EventBridgeCapacityProviderStrategyItem#base
   */
  readonly base?: number;

}

/**
 * Converts an object of type 'EventBridgeCapacityProviderStrategyItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeCapacityProviderStrategyItem(obj: EventBridgeCapacityProviderStrategyItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'capacityProvider': obj.capacityProvider,
    'weight': obj.weight,
    'base': obj.base,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgePlacementConstraint
 */
export interface EventBridgePlacementConstraint {
  /**
   * @schema EventBridgePlacementConstraint#type
   */
  readonly type?: string;

  /**
   * @schema EventBridgePlacementConstraint#expression
   */
  readonly expression?: string;

}

/**
 * Converts an object of type 'EventBridgePlacementConstraint' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgePlacementConstraint(obj: EventBridgePlacementConstraint | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'type': obj.type,
    'expression': obj.expression,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgePlacementStrategy
 */
export interface EventBridgePlacementStrategy {
  /**
   * @schema EventBridgePlacementStrategy#type
   */
  readonly type?: string;

  /**
   * @schema EventBridgePlacementStrategy#field
   */
  readonly field?: string;

}

/**
 * Converts an object of type 'EventBridgePlacementStrategy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgePlacementStrategy(obj: EventBridgePlacementStrategy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'type': obj.type,
    'field': obj.field,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeBatchArrayProperties
 */
export interface EventBridgeBatchArrayProperties {
  /**
   * @schema EventBridgeBatchArrayProperties#Size
   */
  readonly size?: number;

}

/**
 * Converts an object of type 'EventBridgeBatchArrayProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeBatchArrayProperties(obj: EventBridgeBatchArrayProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Size': obj.size,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeBatchRetryStrategy
 */
export interface EventBridgeBatchRetryStrategy {
  /**
   * @schema EventBridgeBatchRetryStrategy#Attempts
   */
  readonly attempts?: number;

}

/**
 * Converts an object of type 'EventBridgeBatchRetryStrategy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeBatchRetryStrategy(obj: EventBridgeBatchRetryStrategy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Attempts': obj.attempts,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeSageMakerPipelineParameter
 */
export interface EventBridgeSageMakerPipelineParameter {
  /**
   * @schema EventBridgeSageMakerPipelineParameter#Name
   */
  readonly name?: string;

  /**
   * @schema EventBridgeSageMakerPipelineParameter#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'EventBridgeSageMakerPipelineParameter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeSageMakerPipelineParameter(obj: EventBridgeSageMakerPipelineParameter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeUpdateConnectionOAuthClientRequestParameters
 */
export interface EventBridgeUpdateConnectionOAuthClientRequestParameters {
  /**
   * @schema EventBridgeUpdateConnectionOAuthClientRequestParameters#ClientID
   */
  readonly clientId?: string;

  /**
   * @schema EventBridgeUpdateConnectionOAuthClientRequestParameters#ClientSecret
   */
  readonly clientSecret?: string;

}

/**
 * Converts an object of type 'EventBridgeUpdateConnectionOAuthClientRequestParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeUpdateConnectionOAuthClientRequestParameters(obj: EventBridgeUpdateConnectionOAuthClientRequestParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClientID': obj.clientId,
    'ClientSecret': obj.clientSecret,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EventBridgeAwsVpcConfiguration
 */
export interface EventBridgeAwsVpcConfiguration {
  /**
   * @schema EventBridgeAwsVpcConfiguration#Subnets
   */
  readonly subnets?: string[];

  /**
   * @schema EventBridgeAwsVpcConfiguration#SecurityGroups
   */
  readonly securityGroups?: string[];

  /**
   * @schema EventBridgeAwsVpcConfiguration#AssignPublicIp
   */
  readonly assignPublicIp?: string;

}

/**
 * Converts an object of type 'EventBridgeAwsVpcConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EventBridgeAwsVpcConfiguration(obj: EventBridgeAwsVpcConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Subnets': obj.subnets?.map(y => y),
    'SecurityGroups': obj.securityGroups?.map(y => y),
    'AssignPublicIp': obj.assignPublicIp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
