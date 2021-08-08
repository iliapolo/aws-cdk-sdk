/**
 * @schema IotDataDeleteThingShadowRequest
 */
export interface IotDataDeleteThingShadowRequest {
  /**
   * @schema IotDataDeleteThingShadowRequest#thingName
   */
  readonly thingName: string;

  /**
   * @schema IotDataDeleteThingShadowRequest#shadowName
   */
  readonly shadowName?: string;

}

/**
 * Converts an object of type 'IotDataDeleteThingShadowRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDataDeleteThingShadowRequest(obj: IotDataDeleteThingShadowRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'thingName': obj.thingName,
    'shadowName': obj.shadowName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDataDeleteThingShadowResponse
 */
export interface IotDataDeleteThingShadowResponse {
  /**
   * @schema IotDataDeleteThingShadowResponse#payload
   */
  readonly payload: any;

}

/**
 * Converts an object of type 'IotDataDeleteThingShadowResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDataDeleteThingShadowResponse(obj: IotDataDeleteThingShadowResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'payload': obj.payload,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDataGetThingShadowRequest
 */
export interface IotDataGetThingShadowRequest {
  /**
   * @schema IotDataGetThingShadowRequest#thingName
   */
  readonly thingName: string;

  /**
   * @schema IotDataGetThingShadowRequest#shadowName
   */
  readonly shadowName?: string;

}

/**
 * Converts an object of type 'IotDataGetThingShadowRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDataGetThingShadowRequest(obj: IotDataGetThingShadowRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'thingName': obj.thingName,
    'shadowName': obj.shadowName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDataGetThingShadowResponse
 */
export interface IotDataGetThingShadowResponse {
  /**
   * @schema IotDataGetThingShadowResponse#payload
   */
  readonly payload?: any;

}

/**
 * Converts an object of type 'IotDataGetThingShadowResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDataGetThingShadowResponse(obj: IotDataGetThingShadowResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'payload': obj.payload,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDataListNamedShadowsForThingRequest
 */
export interface IotDataListNamedShadowsForThingRequest {
  /**
   * @schema IotDataListNamedShadowsForThingRequest#thingName
   */
  readonly thingName: string;

  /**
   * @schema IotDataListNamedShadowsForThingRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IotDataListNamedShadowsForThingRequest#pageSize
   */
  readonly pageSize?: number;

}

/**
 * Converts an object of type 'IotDataListNamedShadowsForThingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDataListNamedShadowsForThingRequest(obj: IotDataListNamedShadowsForThingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'thingName': obj.thingName,
    'nextToken': obj.nextToken,
    'pageSize': obj.pageSize,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDataListNamedShadowsForThingResponse
 */
export interface IotDataListNamedShadowsForThingResponse {
  /**
   * @schema IotDataListNamedShadowsForThingResponse#results
   */
  readonly results?: string[];

  /**
   * @schema IotDataListNamedShadowsForThingResponse#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IotDataListNamedShadowsForThingResponse#timestamp
   */
  readonly timestamp?: number;

}

/**
 * Converts an object of type 'IotDataListNamedShadowsForThingResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDataListNamedShadowsForThingResponse(obj: IotDataListNamedShadowsForThingResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'results': obj.results?.map(y => y),
    'nextToken': obj.nextToken,
    'timestamp': obj.timestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDataPublishRequest
 */
export interface IotDataPublishRequest {
  /**
   * @schema IotDataPublishRequest#topic
   */
  readonly topic: string;

  /**
   * @schema IotDataPublishRequest#qos
   */
  readonly qos?: number;

  /**
   * @schema IotDataPublishRequest#payload
   */
  readonly payload?: any;

}

/**
 * Converts an object of type 'IotDataPublishRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDataPublishRequest(obj: IotDataPublishRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'topic': obj.topic,
    'qos': obj.qos,
    'payload': obj.payload,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDataUpdateThingShadowRequest
 */
export interface IotDataUpdateThingShadowRequest {
  /**
   * @schema IotDataUpdateThingShadowRequest#thingName
   */
  readonly thingName: string;

  /**
   * @schema IotDataUpdateThingShadowRequest#shadowName
   */
  readonly shadowName?: string;

  /**
   * @schema IotDataUpdateThingShadowRequest#payload
   */
  readonly payload: any;

}

/**
 * Converts an object of type 'IotDataUpdateThingShadowRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDataUpdateThingShadowRequest(obj: IotDataUpdateThingShadowRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'thingName': obj.thingName,
    'shadowName': obj.shadowName,
    'payload': obj.payload,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDataUpdateThingShadowResponse
 */
export interface IotDataUpdateThingShadowResponse {
  /**
   * @schema IotDataUpdateThingShadowResponse#payload
   */
  readonly payload?: any;

}

/**
 * Converts an object of type 'IotDataUpdateThingShadowResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDataUpdateThingShadowResponse(obj: IotDataUpdateThingShadowResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'payload': obj.payload,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
