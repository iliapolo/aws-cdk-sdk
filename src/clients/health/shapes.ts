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
 * @schema HealthDescribeEntityAggregatesRequest
 */
export interface HealthDescribeEntityAggregatesRequest {
  /**
   * @schema HealthDescribeEntityAggregatesRequest#eventArns
   */
  readonly eventArns?: string[];

}

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
 * @schema HealthDescribeHealthServiceStatusForOrganizationResponse
 */
export interface HealthDescribeHealthServiceStatusForOrganizationResponse {
  /**
   * @schema HealthDescribeHealthServiceStatusForOrganizationResponse#healthServiceAccessStatusForOrganization
   */
  readonly healthServiceAccessStatusForOrganization?: string;

}

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
 * @schema HealthEventDescription
 */
export interface HealthEventDescription {
  /**
   * @schema HealthEventDescription#latestDescription
   */
  readonly latestDescription?: string;

}
