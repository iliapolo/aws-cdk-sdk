/**
 * @schema PersonalizeEventsPutEventsRequest
 */
export interface PersonalizeEventsPutEventsRequest {
  /**
   * @schema PersonalizeEventsPutEventsRequest#trackingId
   */
  readonly trackingId: string;

  /**
   * @schema PersonalizeEventsPutEventsRequest#userId
   */
  readonly userId?: string;

  /**
   * @schema PersonalizeEventsPutEventsRequest#sessionId
   */
  readonly sessionId: string;

  /**
   * @schema PersonalizeEventsPutEventsRequest#eventList
   */
  readonly eventList: PersonalizeEventsEvent[];

}

/**
 * @schema PersonalizeEventsPutItemsRequest
 */
export interface PersonalizeEventsPutItemsRequest {
  /**
   * @schema PersonalizeEventsPutItemsRequest#datasetArn
   */
  readonly datasetArn: string;

  /**
   * @schema PersonalizeEventsPutItemsRequest#items
   */
  readonly items: PersonalizeEventsItem[];

}

/**
 * @schema PersonalizeEventsPutUsersRequest
 */
export interface PersonalizeEventsPutUsersRequest {
  /**
   * @schema PersonalizeEventsPutUsersRequest#datasetArn
   */
  readonly datasetArn: string;

  /**
   * @schema PersonalizeEventsPutUsersRequest#users
   */
  readonly users: PersonalizeEventsUser[];

}

/**
 * @schema PersonalizeEventsEvent
 */
export interface PersonalizeEventsEvent {
  /**
   * @schema PersonalizeEventsEvent#eventId
   */
  readonly eventId?: string;

  /**
   * @schema PersonalizeEventsEvent#eventType
   */
  readonly eventType: string;

  /**
   * @schema PersonalizeEventsEvent#eventValue
   */
  readonly eventValue?: number;

  /**
   * @schema PersonalizeEventsEvent#itemId
   */
  readonly itemId?: string;

  /**
   * @schema PersonalizeEventsEvent#properties
   */
  readonly properties?: string;

  /**
   * @schema PersonalizeEventsEvent#sentAt
   */
  readonly sentAt: string;

  /**
   * @schema PersonalizeEventsEvent#recommendationId
   */
  readonly recommendationId?: string;

  /**
   * @schema PersonalizeEventsEvent#impression
   */
  readonly impression?: string[];

}

/**
 * @schema PersonalizeEventsItem
 */
export interface PersonalizeEventsItem {
  /**
   * @schema PersonalizeEventsItem#itemId
   */
  readonly itemId: string;

  /**
   * @schema PersonalizeEventsItem#properties
   */
  readonly properties?: string;

}

/**
 * @schema PersonalizeEventsUser
 */
export interface PersonalizeEventsUser {
  /**
   * @schema PersonalizeEventsUser#userId
   */
  readonly userId: string;

  /**
   * @schema PersonalizeEventsUser#properties
   */
  readonly properties?: string;

}
