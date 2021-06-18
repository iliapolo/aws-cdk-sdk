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
 * @schema IotDataDeleteThingShadowResponse
 */
export interface IotDataDeleteThingShadowResponse {
  /**
   * @schema IotDataDeleteThingShadowResponse#payload
   */
  readonly payload: any;

}

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
 * @schema IotDataGetThingShadowResponse
 */
export interface IotDataGetThingShadowResponse {
  /**
   * @schema IotDataGetThingShadowResponse#payload
   */
  readonly payload?: any;

}

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
 * @schema IotDataUpdateThingShadowResponse
 */
export interface IotDataUpdateThingShadowResponse {
  /**
   * @schema IotDataUpdateThingShadowResponse#payload
   */
  readonly payload?: any;

}
