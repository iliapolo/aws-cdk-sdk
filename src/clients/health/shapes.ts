/**
 * @schema HealthDescribeAffectedAccountsForOrganizationRequest
 */
export interface HealthDescribeAffectedAccountsForOrganizationRequest {
  /**
   * @schema HealthDescribeAffectedAccountsForOrganizationRequest#eventArn
   */
  readonly eventArn: string;

  /**
   * @schema HealthDescribeAffectedAccountsForOrganizationRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema HealthDescribeAffectedAccountsForOrganizationRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'HealthDescribeAffectedAccountsForOrganizationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthDescribeAffectedAccountsForOrganizationRequest(obj: HealthDescribeAffectedAccountsForOrganizationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'eventArn': obj.eventArn,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthDescribeAffectedAccountsForOrganizationResponse
 */
export interface HealthDescribeAffectedAccountsForOrganizationResponse {
  /**
   * @schema HealthDescribeAffectedAccountsForOrganizationResponse#affectedAccounts
   */
  readonly affectedAccounts?: string[];

  /**
   * @schema HealthDescribeAffectedAccountsForOrganizationResponse#eventScopeCode
   */
  readonly eventScopeCode?: string;

  /**
   * @schema HealthDescribeAffectedAccountsForOrganizationResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'HealthDescribeAffectedAccountsForOrganizationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthDescribeAffectedAccountsForOrganizationResponse(obj: HealthDescribeAffectedAccountsForOrganizationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'affectedAccounts': obj.affectedAccounts?.map(y => y),
    'eventScopeCode': obj.eventScopeCode,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthDescribeAffectedEntitiesRequest
 */
export interface HealthDescribeAffectedEntitiesRequest {
  /**
   * @schema HealthDescribeAffectedEntitiesRequest#filter
   */
  readonly filter: HealthEntityFilter;

  /**
   * @schema HealthDescribeAffectedEntitiesRequest#locale
   */
  readonly locale?: string;

  /**
   * @schema HealthDescribeAffectedEntitiesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema HealthDescribeAffectedEntitiesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'HealthDescribeAffectedEntitiesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthDescribeAffectedEntitiesRequest(obj: HealthDescribeAffectedEntitiesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'filter': toJson_HealthEntityFilter(obj.filter),
    'locale': obj.locale,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthDescribeAffectedEntitiesResponse
 */
export interface HealthDescribeAffectedEntitiesResponse {
  /**
   * @schema HealthDescribeAffectedEntitiesResponse#entities
   */
  readonly entities?: HealthAffectedEntity[];

  /**
   * @schema HealthDescribeAffectedEntitiesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'HealthDescribeAffectedEntitiesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthDescribeAffectedEntitiesResponse(obj: HealthDescribeAffectedEntitiesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'entities': obj.entities?.map(y => toJson_HealthAffectedEntity(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthDescribeAffectedEntitiesForOrganizationRequest
 */
export interface HealthDescribeAffectedEntitiesForOrganizationRequest {
  /**
   * @schema HealthDescribeAffectedEntitiesForOrganizationRequest#organizationEntityFilters
   */
  readonly organizationEntityFilters: HealthEventAccountFilter[];

  /**
   * @schema HealthDescribeAffectedEntitiesForOrganizationRequest#locale
   */
  readonly locale?: string;

  /**
   * @schema HealthDescribeAffectedEntitiesForOrganizationRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema HealthDescribeAffectedEntitiesForOrganizationRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'HealthDescribeAffectedEntitiesForOrganizationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthDescribeAffectedEntitiesForOrganizationRequest(obj: HealthDescribeAffectedEntitiesForOrganizationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'organizationEntityFilters': obj.organizationEntityFilters?.map(y => toJson_HealthEventAccountFilter(y)),
    'locale': obj.locale,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthDescribeAffectedEntitiesForOrganizationResponse
 */
export interface HealthDescribeAffectedEntitiesForOrganizationResponse {
  /**
   * @schema HealthDescribeAffectedEntitiesForOrganizationResponse#entities
   */
  readonly entities?: HealthAffectedEntity[];

  /**
   * @schema HealthDescribeAffectedEntitiesForOrganizationResponse#failedSet
   */
  readonly failedSet?: HealthOrganizationAffectedEntitiesErrorItem[];

  /**
   * @schema HealthDescribeAffectedEntitiesForOrganizationResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'HealthDescribeAffectedEntitiesForOrganizationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthDescribeAffectedEntitiesForOrganizationResponse(obj: HealthDescribeAffectedEntitiesForOrganizationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'entities': obj.entities?.map(y => toJson_HealthAffectedEntity(y)),
    'failedSet': obj.failedSet?.map(y => toJson_HealthOrganizationAffectedEntitiesErrorItem(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthDescribeEntityAggregatesRequest
 */
export interface HealthDescribeEntityAggregatesRequest {
  /**
   * @schema HealthDescribeEntityAggregatesRequest#eventArns
   */
  readonly eventArns?: string[];

}

/**
 * Converts an object of type 'HealthDescribeEntityAggregatesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthDescribeEntityAggregatesRequest(obj: HealthDescribeEntityAggregatesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'eventArns': obj.eventArns?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthDescribeEntityAggregatesResponse
 */
export interface HealthDescribeEntityAggregatesResponse {
  /**
   * @schema HealthDescribeEntityAggregatesResponse#entityAggregates
   */
  readonly entityAggregates?: HealthEntityAggregate[];

}

/**
 * Converts an object of type 'HealthDescribeEntityAggregatesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthDescribeEntityAggregatesResponse(obj: HealthDescribeEntityAggregatesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'entityAggregates': obj.entityAggregates?.map(y => toJson_HealthEntityAggregate(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthDescribeEventAggregatesRequest
 */
export interface HealthDescribeEventAggregatesRequest {
  /**
   * @schema HealthDescribeEventAggregatesRequest#filter
   */
  readonly filter?: HealthEventFilter;

  /**
   * @schema HealthDescribeEventAggregatesRequest#aggregateField
   */
  readonly aggregateField: string;

  /**
   * @schema HealthDescribeEventAggregatesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema HealthDescribeEventAggregatesRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'HealthDescribeEventAggregatesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthDescribeEventAggregatesRequest(obj: HealthDescribeEventAggregatesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'filter': toJson_HealthEventFilter(obj.filter),
    'aggregateField': obj.aggregateField,
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthDescribeEventAggregatesResponse
 */
export interface HealthDescribeEventAggregatesResponse {
  /**
   * @schema HealthDescribeEventAggregatesResponse#eventAggregates
   */
  readonly eventAggregates?: HealthEventAggregate[];

  /**
   * @schema HealthDescribeEventAggregatesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'HealthDescribeEventAggregatesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthDescribeEventAggregatesResponse(obj: HealthDescribeEventAggregatesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'eventAggregates': obj.eventAggregates?.map(y => toJson_HealthEventAggregate(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthDescribeEventDetailsRequest
 */
export interface HealthDescribeEventDetailsRequest {
  /**
   * @schema HealthDescribeEventDetailsRequest#eventArns
   */
  readonly eventArns: string[];

  /**
   * @schema HealthDescribeEventDetailsRequest#locale
   */
  readonly locale?: string;

}

/**
 * Converts an object of type 'HealthDescribeEventDetailsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthDescribeEventDetailsRequest(obj: HealthDescribeEventDetailsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'eventArns': obj.eventArns?.map(y => y),
    'locale': obj.locale,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthDescribeEventDetailsResponse
 */
export interface HealthDescribeEventDetailsResponse {
  /**
   * @schema HealthDescribeEventDetailsResponse#successfulSet
   */
  readonly successfulSet?: HealthEventDetails[];

  /**
   * @schema HealthDescribeEventDetailsResponse#failedSet
   */
  readonly failedSet?: HealthEventDetailsErrorItem[];

}

/**
 * Converts an object of type 'HealthDescribeEventDetailsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthDescribeEventDetailsResponse(obj: HealthDescribeEventDetailsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'successfulSet': obj.successfulSet?.map(y => toJson_HealthEventDetails(y)),
    'failedSet': obj.failedSet?.map(y => toJson_HealthEventDetailsErrorItem(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthDescribeEventDetailsForOrganizationRequest
 */
export interface HealthDescribeEventDetailsForOrganizationRequest {
  /**
   * @schema HealthDescribeEventDetailsForOrganizationRequest#organizationEventDetailFilters
   */
  readonly organizationEventDetailFilters: HealthEventAccountFilter[];

  /**
   * @schema HealthDescribeEventDetailsForOrganizationRequest#locale
   */
  readonly locale?: string;

}

/**
 * Converts an object of type 'HealthDescribeEventDetailsForOrganizationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthDescribeEventDetailsForOrganizationRequest(obj: HealthDescribeEventDetailsForOrganizationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'organizationEventDetailFilters': obj.organizationEventDetailFilters?.map(y => toJson_HealthEventAccountFilter(y)),
    'locale': obj.locale,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthDescribeEventDetailsForOrganizationResponse
 */
export interface HealthDescribeEventDetailsForOrganizationResponse {
  /**
   * @schema HealthDescribeEventDetailsForOrganizationResponse#successfulSet
   */
  readonly successfulSet?: HealthOrganizationEventDetails[];

  /**
   * @schema HealthDescribeEventDetailsForOrganizationResponse#failedSet
   */
  readonly failedSet?: HealthOrganizationEventDetailsErrorItem[];

}

/**
 * Converts an object of type 'HealthDescribeEventDetailsForOrganizationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthDescribeEventDetailsForOrganizationResponse(obj: HealthDescribeEventDetailsForOrganizationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'successfulSet': obj.successfulSet?.map(y => toJson_HealthOrganizationEventDetails(y)),
    'failedSet': obj.failedSet?.map(y => toJson_HealthOrganizationEventDetailsErrorItem(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthDescribeEventTypesRequest
 */
export interface HealthDescribeEventTypesRequest {
  /**
   * @schema HealthDescribeEventTypesRequest#filter
   */
  readonly filter?: HealthEventTypeFilter;

  /**
   * @schema HealthDescribeEventTypesRequest#locale
   */
  readonly locale?: string;

  /**
   * @schema HealthDescribeEventTypesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema HealthDescribeEventTypesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'HealthDescribeEventTypesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthDescribeEventTypesRequest(obj: HealthDescribeEventTypesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'filter': toJson_HealthEventTypeFilter(obj.filter),
    'locale': obj.locale,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthDescribeEventTypesResponse
 */
export interface HealthDescribeEventTypesResponse {
  /**
   * @schema HealthDescribeEventTypesResponse#eventTypes
   */
  readonly eventTypes?: HealthEventType[];

  /**
   * @schema HealthDescribeEventTypesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'HealthDescribeEventTypesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthDescribeEventTypesResponse(obj: HealthDescribeEventTypesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'eventTypes': obj.eventTypes?.map(y => toJson_HealthEventType(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthDescribeEventsRequest
 */
export interface HealthDescribeEventsRequest {
  /**
   * @schema HealthDescribeEventsRequest#filter
   */
  readonly filter?: HealthEventFilter;

  /**
   * @schema HealthDescribeEventsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema HealthDescribeEventsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema HealthDescribeEventsRequest#locale
   */
  readonly locale?: string;

}

/**
 * Converts an object of type 'HealthDescribeEventsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthDescribeEventsRequest(obj: HealthDescribeEventsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'filter': toJson_HealthEventFilter(obj.filter),
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
    'locale': obj.locale,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthDescribeEventsResponse
 */
export interface HealthDescribeEventsResponse {
  /**
   * @schema HealthDescribeEventsResponse#events
   */
  readonly events?: HealthEvent[];

  /**
   * @schema HealthDescribeEventsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'HealthDescribeEventsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthDescribeEventsResponse(obj: HealthDescribeEventsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'events': obj.events?.map(y => toJson_HealthEvent(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthDescribeEventsForOrganizationRequest
 */
export interface HealthDescribeEventsForOrganizationRequest {
  /**
   * @schema HealthDescribeEventsForOrganizationRequest#filter
   */
  readonly filter?: HealthOrganizationEventFilter;

  /**
   * @schema HealthDescribeEventsForOrganizationRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema HealthDescribeEventsForOrganizationRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema HealthDescribeEventsForOrganizationRequest#locale
   */
  readonly locale?: string;

}

/**
 * Converts an object of type 'HealthDescribeEventsForOrganizationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthDescribeEventsForOrganizationRequest(obj: HealthDescribeEventsForOrganizationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'filter': toJson_HealthOrganizationEventFilter(obj.filter),
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
    'locale': obj.locale,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthDescribeEventsForOrganizationResponse
 */
export interface HealthDescribeEventsForOrganizationResponse {
  /**
   * @schema HealthDescribeEventsForOrganizationResponse#events
   */
  readonly events?: HealthOrganizationEvent[];

  /**
   * @schema HealthDescribeEventsForOrganizationResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'HealthDescribeEventsForOrganizationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthDescribeEventsForOrganizationResponse(obj: HealthDescribeEventsForOrganizationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'events': obj.events?.map(y => toJson_HealthOrganizationEvent(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthDescribeHealthServiceStatusForOrganizationResponse
 */
export interface HealthDescribeHealthServiceStatusForOrganizationResponse {
  /**
   * @schema HealthDescribeHealthServiceStatusForOrganizationResponse#healthServiceAccessStatusForOrganization
   */
  readonly healthServiceAccessStatusForOrganization?: string;

}

/**
 * Converts an object of type 'HealthDescribeHealthServiceStatusForOrganizationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthDescribeHealthServiceStatusForOrganizationResponse(obj: HealthDescribeHealthServiceStatusForOrganizationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'healthServiceAccessStatusForOrganization': obj.healthServiceAccessStatusForOrganization,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthEntityFilter
 */
export interface HealthEntityFilter {
  /**
   * @schema HealthEntityFilter#eventArns
   */
  readonly eventArns: string[];

  /**
   * @schema HealthEntityFilter#entityArns
   */
  readonly entityArns?: string[];

  /**
   * @schema HealthEntityFilter#entityValues
   */
  readonly entityValues?: string[];

  /**
   * @schema HealthEntityFilter#lastUpdatedTimes
   */
  readonly lastUpdatedTimes?: HealthDateTimeRange[];

  /**
   * @schema HealthEntityFilter#tags
   */
  readonly tags?: { [key: string]: string }[];

  /**
   * @schema HealthEntityFilter#statusCodes
   */
  readonly statusCodes?: string[];

}

/**
 * Converts an object of type 'HealthEntityFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthEntityFilter(obj: HealthEntityFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'eventArns': obj.eventArns?.map(y => y),
    'entityArns': obj.entityArns?.map(y => y),
    'entityValues': obj.entityValues?.map(y => y),
    'lastUpdatedTimes': obj.lastUpdatedTimes?.map(y => toJson_HealthDateTimeRange(y)),
    'tags': obj.tags?.map(y => ((y) === undefined) ? undefined : (Object.entries(y).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {}))),
    'statusCodes': obj.statusCodes?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthAffectedEntity
 */
export interface HealthAffectedEntity {
  /**
   * @schema HealthAffectedEntity#entityArn
   */
  readonly entityArn?: string;

  /**
   * @schema HealthAffectedEntity#eventArn
   */
  readonly eventArn?: string;

  /**
   * @schema HealthAffectedEntity#entityValue
   */
  readonly entityValue?: string;

  /**
   * @schema HealthAffectedEntity#entityUrl
   */
  readonly entityUrl?: string;

  /**
   * @schema HealthAffectedEntity#awsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema HealthAffectedEntity#lastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

  /**
   * @schema HealthAffectedEntity#statusCode
   */
  readonly statusCode?: string;

  /**
   * @schema HealthAffectedEntity#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'HealthAffectedEntity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthAffectedEntity(obj: HealthAffectedEntity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'entityArn': obj.entityArn,
    'eventArn': obj.eventArn,
    'entityValue': obj.entityValue,
    'entityUrl': obj.entityUrl,
    'awsAccountId': obj.awsAccountId,
    'lastUpdatedTime': obj.lastUpdatedTime,
    'statusCode': obj.statusCode,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthEventAccountFilter
 */
export interface HealthEventAccountFilter {
  /**
   * @schema HealthEventAccountFilter#eventArn
   */
  readonly eventArn: string;

  /**
   * @schema HealthEventAccountFilter#awsAccountId
   */
  readonly awsAccountId?: string;

}

/**
 * Converts an object of type 'HealthEventAccountFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthEventAccountFilter(obj: HealthEventAccountFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'eventArn': obj.eventArn,
    'awsAccountId': obj.awsAccountId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthOrganizationAffectedEntitiesErrorItem
 */
export interface HealthOrganizationAffectedEntitiesErrorItem {
  /**
   * @schema HealthOrganizationAffectedEntitiesErrorItem#awsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema HealthOrganizationAffectedEntitiesErrorItem#eventArn
   */
  readonly eventArn?: string;

  /**
   * @schema HealthOrganizationAffectedEntitiesErrorItem#errorName
   */
  readonly errorName?: string;

  /**
   * @schema HealthOrganizationAffectedEntitiesErrorItem#errorMessage
   */
  readonly errorMessage?: string;

}

/**
 * Converts an object of type 'HealthOrganizationAffectedEntitiesErrorItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthOrganizationAffectedEntitiesErrorItem(obj: HealthOrganizationAffectedEntitiesErrorItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'awsAccountId': obj.awsAccountId,
    'eventArn': obj.eventArn,
    'errorName': obj.errorName,
    'errorMessage': obj.errorMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthEntityAggregate
 */
export interface HealthEntityAggregate {
  /**
   * @schema HealthEntityAggregate#eventArn
   */
  readonly eventArn?: string;

  /**
   * @schema HealthEntityAggregate#count
   */
  readonly count?: number;

}

/**
 * Converts an object of type 'HealthEntityAggregate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthEntityAggregate(obj: HealthEntityAggregate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'eventArn': obj.eventArn,
    'count': obj.count,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthEventFilter
 */
export interface HealthEventFilter {
  /**
   * @schema HealthEventFilter#eventArns
   */
  readonly eventArns?: string[];

  /**
   * @schema HealthEventFilter#eventTypeCodes
   */
  readonly eventTypeCodes?: string[];

  /**
   * @schema HealthEventFilter#services
   */
  readonly services?: string[];

  /**
   * @schema HealthEventFilter#regions
   */
  readonly regions?: string[];

  /**
   * @schema HealthEventFilter#availabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema HealthEventFilter#startTimes
   */
  readonly startTimes?: HealthDateTimeRange[];

  /**
   * @schema HealthEventFilter#endTimes
   */
  readonly endTimes?: HealthDateTimeRange[];

  /**
   * @schema HealthEventFilter#lastUpdatedTimes
   */
  readonly lastUpdatedTimes?: HealthDateTimeRange[];

  /**
   * @schema HealthEventFilter#entityArns
   */
  readonly entityArns?: string[];

  /**
   * @schema HealthEventFilter#entityValues
   */
  readonly entityValues?: string[];

  /**
   * @schema HealthEventFilter#eventTypeCategories
   */
  readonly eventTypeCategories?: string[];

  /**
   * @schema HealthEventFilter#tags
   */
  readonly tags?: { [key: string]: string }[];

  /**
   * @schema HealthEventFilter#eventStatusCodes
   */
  readonly eventStatusCodes?: string[];

}

/**
 * Converts an object of type 'HealthEventFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthEventFilter(obj: HealthEventFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'eventArns': obj.eventArns?.map(y => y),
    'eventTypeCodes': obj.eventTypeCodes?.map(y => y),
    'services': obj.services?.map(y => y),
    'regions': obj.regions?.map(y => y),
    'availabilityZones': obj.availabilityZones?.map(y => y),
    'startTimes': obj.startTimes?.map(y => toJson_HealthDateTimeRange(y)),
    'endTimes': obj.endTimes?.map(y => toJson_HealthDateTimeRange(y)),
    'lastUpdatedTimes': obj.lastUpdatedTimes?.map(y => toJson_HealthDateTimeRange(y)),
    'entityArns': obj.entityArns?.map(y => y),
    'entityValues': obj.entityValues?.map(y => y),
    'eventTypeCategories': obj.eventTypeCategories?.map(y => y),
    'tags': obj.tags?.map(y => ((y) === undefined) ? undefined : (Object.entries(y).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {}))),
    'eventStatusCodes': obj.eventStatusCodes?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthEventAggregate
 */
export interface HealthEventAggregate {
  /**
   * @schema HealthEventAggregate#aggregateValue
   */
  readonly aggregateValue?: string;

  /**
   * @schema HealthEventAggregate#count
   */
  readonly count?: number;

}

/**
 * Converts an object of type 'HealthEventAggregate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthEventAggregate(obj: HealthEventAggregate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'aggregateValue': obj.aggregateValue,
    'count': obj.count,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthEventDetails
 */
export interface HealthEventDetails {
  /**
   * @schema HealthEventDetails#event
   */
  readonly event?: HealthEvent;

  /**
   * @schema HealthEventDetails#eventDescription
   */
  readonly eventDescription?: HealthEventDescription;

  /**
   * @schema HealthEventDetails#eventMetadata
   */
  readonly eventMetadata?: { [key: string]: string };

}

/**
 * Converts an object of type 'HealthEventDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthEventDetails(obj: HealthEventDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'event': toJson_HealthEvent(obj.event),
    'eventDescription': toJson_HealthEventDescription(obj.eventDescription),
    'eventMetadata': ((obj.eventMetadata) === undefined) ? undefined : (Object.entries(obj.eventMetadata).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthEventDetailsErrorItem
 */
export interface HealthEventDetailsErrorItem {
  /**
   * @schema HealthEventDetailsErrorItem#eventArn
   */
  readonly eventArn?: string;

  /**
   * @schema HealthEventDetailsErrorItem#errorName
   */
  readonly errorName?: string;

  /**
   * @schema HealthEventDetailsErrorItem#errorMessage
   */
  readonly errorMessage?: string;

}

/**
 * Converts an object of type 'HealthEventDetailsErrorItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthEventDetailsErrorItem(obj: HealthEventDetailsErrorItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'eventArn': obj.eventArn,
    'errorName': obj.errorName,
    'errorMessage': obj.errorMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthOrganizationEventDetails
 */
export interface HealthOrganizationEventDetails {
  /**
   * @schema HealthOrganizationEventDetails#awsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema HealthOrganizationEventDetails#event
   */
  readonly event?: HealthEvent;

  /**
   * @schema HealthOrganizationEventDetails#eventDescription
   */
  readonly eventDescription?: HealthEventDescription;

  /**
   * @schema HealthOrganizationEventDetails#eventMetadata
   */
  readonly eventMetadata?: { [key: string]: string };

}

/**
 * Converts an object of type 'HealthOrganizationEventDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthOrganizationEventDetails(obj: HealthOrganizationEventDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'awsAccountId': obj.awsAccountId,
    'event': toJson_HealthEvent(obj.event),
    'eventDescription': toJson_HealthEventDescription(obj.eventDescription),
    'eventMetadata': ((obj.eventMetadata) === undefined) ? undefined : (Object.entries(obj.eventMetadata).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthOrganizationEventDetailsErrorItem
 */
export interface HealthOrganizationEventDetailsErrorItem {
  /**
   * @schema HealthOrganizationEventDetailsErrorItem#awsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema HealthOrganizationEventDetailsErrorItem#eventArn
   */
  readonly eventArn?: string;

  /**
   * @schema HealthOrganizationEventDetailsErrorItem#errorName
   */
  readonly errorName?: string;

  /**
   * @schema HealthOrganizationEventDetailsErrorItem#errorMessage
   */
  readonly errorMessage?: string;

}

/**
 * Converts an object of type 'HealthOrganizationEventDetailsErrorItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthOrganizationEventDetailsErrorItem(obj: HealthOrganizationEventDetailsErrorItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'awsAccountId': obj.awsAccountId,
    'eventArn': obj.eventArn,
    'errorName': obj.errorName,
    'errorMessage': obj.errorMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthEventTypeFilter
 */
export interface HealthEventTypeFilter {
  /**
   * @schema HealthEventTypeFilter#eventTypeCodes
   */
  readonly eventTypeCodes?: string[];

  /**
   * @schema HealthEventTypeFilter#services
   */
  readonly services?: string[];

  /**
   * @schema HealthEventTypeFilter#eventTypeCategories
   */
  readonly eventTypeCategories?: string[];

}

/**
 * Converts an object of type 'HealthEventTypeFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthEventTypeFilter(obj: HealthEventTypeFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'eventTypeCodes': obj.eventTypeCodes?.map(y => y),
    'services': obj.services?.map(y => y),
    'eventTypeCategories': obj.eventTypeCategories?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthEventType
 */
export interface HealthEventType {
  /**
   * @schema HealthEventType#service
   */
  readonly service?: string;

  /**
   * @schema HealthEventType#code
   */
  readonly code?: string;

  /**
   * @schema HealthEventType#category
   */
  readonly category?: string;

}

/**
 * Converts an object of type 'HealthEventType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthEventType(obj: HealthEventType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'service': obj.service,
    'code': obj.code,
    'category': obj.category,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthEvent
 */
export interface HealthEvent {
  /**
   * @schema HealthEvent#arn
   */
  readonly arn?: string;

  /**
   * @schema HealthEvent#service
   */
  readonly service?: string;

  /**
   * @schema HealthEvent#eventTypeCode
   */
  readonly eventTypeCode?: string;

  /**
   * @schema HealthEvent#eventTypeCategory
   */
  readonly eventTypeCategory?: string;

  /**
   * @schema HealthEvent#region
   */
  readonly region?: string;

  /**
   * @schema HealthEvent#availabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema HealthEvent#startTime
   */
  readonly startTime?: string;

  /**
   * @schema HealthEvent#endTime
   */
  readonly endTime?: string;

  /**
   * @schema HealthEvent#lastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

  /**
   * @schema HealthEvent#statusCode
   */
  readonly statusCode?: string;

  /**
   * @schema HealthEvent#eventScopeCode
   */
  readonly eventScopeCode?: string;

}

/**
 * Converts an object of type 'HealthEvent' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthEvent(obj: HealthEvent | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'service': obj.service,
    'eventTypeCode': obj.eventTypeCode,
    'eventTypeCategory': obj.eventTypeCategory,
    'region': obj.region,
    'availabilityZone': obj.availabilityZone,
    'startTime': obj.startTime,
    'endTime': obj.endTime,
    'lastUpdatedTime': obj.lastUpdatedTime,
    'statusCode': obj.statusCode,
    'eventScopeCode': obj.eventScopeCode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthOrganizationEventFilter
 */
export interface HealthOrganizationEventFilter {
  /**
   * @schema HealthOrganizationEventFilter#eventTypeCodes
   */
  readonly eventTypeCodes?: string[];

  /**
   * @schema HealthOrganizationEventFilter#awsAccountIds
   */
  readonly awsAccountIds?: string[];

  /**
   * @schema HealthOrganizationEventFilter#services
   */
  readonly services?: string[];

  /**
   * @schema HealthOrganizationEventFilter#regions
   */
  readonly regions?: string[];

  /**
   * @schema HealthOrganizationEventFilter#startTime
   */
  readonly startTime?: HealthDateTimeRange;

  /**
   * @schema HealthOrganizationEventFilter#endTime
   */
  readonly endTime?: HealthDateTimeRange;

  /**
   * @schema HealthOrganizationEventFilter#lastUpdatedTime
   */
  readonly lastUpdatedTime?: HealthDateTimeRange;

  /**
   * @schema HealthOrganizationEventFilter#entityArns
   */
  readonly entityArns?: string[];

  /**
   * @schema HealthOrganizationEventFilter#entityValues
   */
  readonly entityValues?: string[];

  /**
   * @schema HealthOrganizationEventFilter#eventTypeCategories
   */
  readonly eventTypeCategories?: string[];

  /**
   * @schema HealthOrganizationEventFilter#eventStatusCodes
   */
  readonly eventStatusCodes?: string[];

}

/**
 * Converts an object of type 'HealthOrganizationEventFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthOrganizationEventFilter(obj: HealthOrganizationEventFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'eventTypeCodes': obj.eventTypeCodes?.map(y => y),
    'awsAccountIds': obj.awsAccountIds?.map(y => y),
    'services': obj.services?.map(y => y),
    'regions': obj.regions?.map(y => y),
    'startTime': toJson_HealthDateTimeRange(obj.startTime),
    'endTime': toJson_HealthDateTimeRange(obj.endTime),
    'lastUpdatedTime': toJson_HealthDateTimeRange(obj.lastUpdatedTime),
    'entityArns': obj.entityArns?.map(y => y),
    'entityValues': obj.entityValues?.map(y => y),
    'eventTypeCategories': obj.eventTypeCategories?.map(y => y),
    'eventStatusCodes': obj.eventStatusCodes?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthOrganizationEvent
 */
export interface HealthOrganizationEvent {
  /**
   * @schema HealthOrganizationEvent#arn
   */
  readonly arn?: string;

  /**
   * @schema HealthOrganizationEvent#service
   */
  readonly service?: string;

  /**
   * @schema HealthOrganizationEvent#eventTypeCode
   */
  readonly eventTypeCode?: string;

  /**
   * @schema HealthOrganizationEvent#eventTypeCategory
   */
  readonly eventTypeCategory?: string;

  /**
   * @schema HealthOrganizationEvent#eventScopeCode
   */
  readonly eventScopeCode?: string;

  /**
   * @schema HealthOrganizationEvent#region
   */
  readonly region?: string;

  /**
   * @schema HealthOrganizationEvent#startTime
   */
  readonly startTime?: string;

  /**
   * @schema HealthOrganizationEvent#endTime
   */
  readonly endTime?: string;

  /**
   * @schema HealthOrganizationEvent#lastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

  /**
   * @schema HealthOrganizationEvent#statusCode
   */
  readonly statusCode?: string;

}

/**
 * Converts an object of type 'HealthOrganizationEvent' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthOrganizationEvent(obj: HealthOrganizationEvent | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'service': obj.service,
    'eventTypeCode': obj.eventTypeCode,
    'eventTypeCategory': obj.eventTypeCategory,
    'eventScopeCode': obj.eventScopeCode,
    'region': obj.region,
    'startTime': obj.startTime,
    'endTime': obj.endTime,
    'lastUpdatedTime': obj.lastUpdatedTime,
    'statusCode': obj.statusCode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthDateTimeRange
 */
export interface HealthDateTimeRange {
  /**
   * @schema HealthDateTimeRange#from
   */
  readonly from?: string;

  /**
   * @schema HealthDateTimeRange#to
   */
  readonly to?: string;

}

/**
 * Converts an object of type 'HealthDateTimeRange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthDateTimeRange(obj: HealthDateTimeRange | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'from': obj.from,
    'to': obj.to,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthEventDescription
 */
export interface HealthEventDescription {
  /**
   * @schema HealthEventDescription#latestDescription
   */
  readonly latestDescription?: string;

}

/**
 * Converts an object of type 'HealthEventDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthEventDescription(obj: HealthEventDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'latestDescription': obj.latestDescription,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
