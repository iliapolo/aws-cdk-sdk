/**
 * @schema PutEventsRequest
 */
export interface PutEventsRequest {
  /**
   * @schema PutEventsRequest#trackingId
   */
  readonly trackingId: string;

  /**
   * @schema PutEventsRequest#userId
   */
  readonly userId?: string;

  /**
   * @schema PutEventsRequest#sessionId
   */
  readonly sessionId: string;

  /**
   * @schema PutEventsRequest#eventList
   */
  readonly eventList: Event[];

}

/**
 * @schema PutItemsRequest
 */
export interface PutItemsRequest {
  /**
   * @schema PutItemsRequest#datasetArn
   */
  readonly datasetArn: string;

  /**
   * @schema PutItemsRequest#items
   */
  readonly items: Item[];

}

/**
 * @schema PutUsersRequest
 */
export interface PutUsersRequest {
  /**
   * @schema PutUsersRequest#datasetArn
   */
  readonly datasetArn: string;

  /**
   * @schema PutUsersRequest#users
   */
  readonly users: User[];

}

/**
 * @schema Event
 */
export interface Event {
  /**
   * @schema Event#eventId
   */
  readonly eventId?: string;

  /**
   * @schema Event#eventType
   */
  readonly eventType: string;

  /**
   * @schema Event#eventValue
   */
  readonly eventValue?: number;

  /**
   * @schema Event#itemId
   */
  readonly itemId?: string;

  /**
   * @schema Event#properties
   */
  readonly properties?: string;

  /**
   * @schema Event#sentAt
   */
  readonly sentAt: string;

  /**
   * @schema Event#recommendationId
   */
  readonly recommendationId?: string;

  /**
   * @schema Event#impression
   */
  readonly impression?: string[];

}

/**
 * @schema Item
 */
export interface Item {
  /**
   * @schema Item#itemId
   */
  readonly itemId: string;

  /**
   * @schema Item#properties
   */
  readonly properties?: string;

}

/**
 * @schema User
 */
export interface User {
  /**
   * @schema User#userId
   */
  readonly userId: string;

  /**
   * @schema User#properties
   */
  readonly properties?: string;

}
