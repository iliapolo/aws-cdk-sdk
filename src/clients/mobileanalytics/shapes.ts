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
