/**
 * @schema MobileAnalyticsPutEventsInput
 */
export interface MobileAnalyticsPutEventsInput {
  /**
   * @schema MobileAnalyticsPutEventsInput#events
   */
  readonly events: MobileAnalyticsEvent[];

  /**
   * @schema MobileAnalyticsPutEventsInput#clientContext
   */
  readonly clientContext: string;

  /**
   * @schema MobileAnalyticsPutEventsInput#clientContextEncoding
   */
  readonly clientContextEncoding?: string;

}

/**
 * Converts an object of type 'MobileAnalyticsPutEventsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MobileAnalyticsPutEventsInput(obj: MobileAnalyticsPutEventsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'events': obj.events?.map(y => toJson_MobileAnalyticsEvent(y)),
    'clientContext': obj.clientContext,
    'clientContextEncoding': obj.clientContextEncoding,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MobileAnalyticsEvent
 */
export interface MobileAnalyticsEvent {
  /**
   * @schema MobileAnalyticsEvent#eventType
   */
  readonly eventType: string;

  /**
   * @schema MobileAnalyticsEvent#timestamp
   */
  readonly timestamp: string;

  /**
   * @schema MobileAnalyticsEvent#session
   */
  readonly session?: MobileAnalyticsSession;

  /**
   * @schema MobileAnalyticsEvent#version
   */
  readonly version?: string;

  /**
   * @schema MobileAnalyticsEvent#attributes
   */
  readonly attributes?: { [key: string]: string };

  /**
   * @schema MobileAnalyticsEvent#metrics
   */
  readonly metrics?: { [key: string]: number };

}

/**
 * Converts an object of type 'MobileAnalyticsEvent' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MobileAnalyticsEvent(obj: MobileAnalyticsEvent | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'eventType': obj.eventType,
    'timestamp': obj.timestamp,
    'session': toJson_MobileAnalyticsSession(obj.session),
    'version': obj.version,
    'attributes': ((obj.attributes) === undefined) ? undefined : (Object.entries(obj.attributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'metrics': ((obj.metrics) === undefined) ? undefined : (Object.entries(obj.metrics).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MobileAnalyticsSession
 */
export interface MobileAnalyticsSession {
  /**
   * @schema MobileAnalyticsSession#id
   */
  readonly id?: string;

  /**
   * @schema MobileAnalyticsSession#duration
   */
  readonly duration?: number;

  /**
   * @schema MobileAnalyticsSession#startTimestamp
   */
  readonly startTimestamp?: string;

  /**
   * @schema MobileAnalyticsSession#stopTimestamp
   */
  readonly stopTimestamp?: string;

}

/**
 * Converts an object of type 'MobileAnalyticsSession' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MobileAnalyticsSession(obj: MobileAnalyticsSession | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'duration': obj.duration,
    'startTimestamp': obj.startTimestamp,
    'stopTimestamp': obj.stopTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
