/**
 * @schema PutEventsInput
 */
export interface PutEventsInput {
  /**
   * @schema PutEventsInput#events
   */
  readonly events: Event[];

  /**
   * @schema PutEventsInput#clientContext
   */
  readonly clientContext: string;

  /**
   * @schema PutEventsInput#clientContextEncoding
   */
  readonly clientContextEncoding?: string;

}

/**
 * @schema Event
 */
export interface Event {
  /**
   * @schema Event#eventType
   */
  readonly eventType: string;

  /**
   * @schema Event#timestamp
   */
  readonly timestamp: string;

  /**
   * @schema Event#session
   */
  readonly session?: Session;

  /**
   * @schema Event#version
   */
  readonly version?: string;

  /**
   * @schema Event#attributes
   */
  readonly attributes?: { [key: string]: string };

  /**
   * @schema Event#metrics
   */
  readonly metrics?: { [key: string]: number };

}

/**
 * @schema Session
 */
export interface Session {
  /**
   * @schema Session#id
   */
  readonly id?: string;

  /**
   * @schema Session#duration
   */
  readonly duration?: number;

  /**
   * @schema Session#startTimestamp
   */
  readonly startTimestamp?: string;

  /**
   * @schema Session#stopTimestamp
   */
  readonly stopTimestamp?: string;

}
