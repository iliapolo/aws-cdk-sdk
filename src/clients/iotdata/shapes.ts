/**
 * @schema DeleteThingShadowRequest
 */
export interface DeleteThingShadowRequest {
  /**
   * @schema DeleteThingShadowRequest#thingName
   */
  readonly thingName: string;

  /**
   * @schema DeleteThingShadowRequest#shadowName
   */
  readonly shadowName?: string;

}

/**
 * @schema DeleteThingShadowResponse
 */
export interface DeleteThingShadowResponse {
  /**
   * @schema DeleteThingShadowResponse#payload
   */
  readonly payload: any;

}

/**
 * @schema GetThingShadowRequest
 */
export interface GetThingShadowRequest {
  /**
   * @schema GetThingShadowRequest#thingName
   */
  readonly thingName: string;

  /**
   * @schema GetThingShadowRequest#shadowName
   */
  readonly shadowName?: string;

}

/**
 * @schema GetThingShadowResponse
 */
export interface GetThingShadowResponse {
  /**
   * @schema GetThingShadowResponse#payload
   */
  readonly payload?: any;

}

/**
 * @schema ListNamedShadowsForThingRequest
 */
export interface ListNamedShadowsForThingRequest {
  /**
   * @schema ListNamedShadowsForThingRequest#thingName
   */
  readonly thingName: string;

  /**
   * @schema ListNamedShadowsForThingRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListNamedShadowsForThingRequest#pageSize
   */
  readonly pageSize?: number;

}

/**
 * @schema ListNamedShadowsForThingResponse
 */
export interface ListNamedShadowsForThingResponse {
  /**
   * @schema ListNamedShadowsForThingResponse#results
   */
  readonly results?: string[];

  /**
   * @schema ListNamedShadowsForThingResponse#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListNamedShadowsForThingResponse#timestamp
   */
  readonly timestamp?: number;

}

/**
 * @schema PublishRequest
 */
export interface PublishRequest {
  /**
   * @schema PublishRequest#topic
   */
  readonly topic: string;

  /**
   * @schema PublishRequest#qos
   */
  readonly qos?: number;

  /**
   * @schema PublishRequest#payload
   */
  readonly payload?: any;

}

/**
 * @schema UpdateThingShadowRequest
 */
export interface UpdateThingShadowRequest {
  /**
   * @schema UpdateThingShadowRequest#thingName
   */
  readonly thingName: string;

  /**
   * @schema UpdateThingShadowRequest#shadowName
   */
  readonly shadowName?: string;

  /**
   * @schema UpdateThingShadowRequest#payload
   */
  readonly payload: any;

}

/**
 * @schema UpdateThingShadowResponse
 */
export interface UpdateThingShadowResponse {
  /**
   * @schema UpdateThingShadowResponse#payload
   */
  readonly payload?: any;

}
