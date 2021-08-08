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
 * Converts an object of type 'PersonalizeEventsPutEventsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeEventsPutEventsRequest(obj: PersonalizeEventsPutEventsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'trackingId': obj.trackingId,
    'userId': obj.userId,
    'sessionId': obj.sessionId,
    'eventList': obj.eventList?.map(y => toJson_PersonalizeEventsEvent(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'PersonalizeEventsPutItemsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeEventsPutItemsRequest(obj: PersonalizeEventsPutItemsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'datasetArn': obj.datasetArn,
    'items': obj.items?.map(y => toJson_PersonalizeEventsItem(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'PersonalizeEventsPutUsersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeEventsPutUsersRequest(obj: PersonalizeEventsPutUsersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'datasetArn': obj.datasetArn,
    'users': obj.users?.map(y => toJson_PersonalizeEventsUser(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'PersonalizeEventsEvent' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeEventsEvent(obj: PersonalizeEventsEvent | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'eventId': obj.eventId,
    'eventType': obj.eventType,
    'eventValue': obj.eventValue,
    'itemId': obj.itemId,
    'properties': obj.properties,
    'sentAt': obj.sentAt,
    'recommendationId': obj.recommendationId,
    'impression': obj.impression?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'PersonalizeEventsItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeEventsItem(obj: PersonalizeEventsItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'itemId': obj.itemId,
    'properties': obj.properties,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

/**
 * Converts an object of type 'PersonalizeEventsUser' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeEventsUser(obj: PersonalizeEventsUser | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'userId': obj.userId,
    'properties': obj.properties,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
