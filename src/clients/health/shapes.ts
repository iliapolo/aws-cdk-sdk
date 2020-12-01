/**
 * @schema DescribeAffectedAccountsForOrganizationRequest
 */
export interface DescribeAffectedAccountsForOrganizationRequest {
  /**
   * @schema DescribeAffectedAccountsForOrganizationRequest#eventArn
   */
  readonly eventArn: string;

  /**
   * @schema DescribeAffectedAccountsForOrganizationRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeAffectedAccountsForOrganizationRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema DescribeAffectedAccountsForOrganizationResponse
 */
export interface DescribeAffectedAccountsForOrganizationResponse {
  /**
   * @schema DescribeAffectedAccountsForOrganizationResponse#affectedAccounts
   */
  readonly affectedAccounts?: string[];

  /**
   * @schema DescribeAffectedAccountsForOrganizationResponse#eventScopeCode
   */
  readonly eventScopeCode?: string;

  /**
   * @schema DescribeAffectedAccountsForOrganizationResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeAffectedEntitiesRequest
 */
export interface DescribeAffectedEntitiesRequest {
  /**
   * @schema DescribeAffectedEntitiesRequest#filter
   */
  readonly filter: EntityFilter;

  /**
   * @schema DescribeAffectedEntitiesRequest#locale
   */
  readonly locale?: string;

  /**
   * @schema DescribeAffectedEntitiesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeAffectedEntitiesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema DescribeAffectedEntitiesResponse
 */
export interface DescribeAffectedEntitiesResponse {
  /**
   * @schema DescribeAffectedEntitiesResponse#entities
   */
  readonly entities?: AffectedEntity[];

  /**
   * @schema DescribeAffectedEntitiesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeAffectedEntitiesForOrganizationRequest
 */
export interface DescribeAffectedEntitiesForOrganizationRequest {
  /**
   * @schema DescribeAffectedEntitiesForOrganizationRequest#organizationEntityFilters
   */
  readonly organizationEntityFilters: EventAccountFilter[];

  /**
   * @schema DescribeAffectedEntitiesForOrganizationRequest#locale
   */
  readonly locale?: string;

  /**
   * @schema DescribeAffectedEntitiesForOrganizationRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeAffectedEntitiesForOrganizationRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema DescribeAffectedEntitiesForOrganizationResponse
 */
export interface DescribeAffectedEntitiesForOrganizationResponse {
  /**
   * @schema DescribeAffectedEntitiesForOrganizationResponse#entities
   */
  readonly entities?: AffectedEntity[];

  /**
   * @schema DescribeAffectedEntitiesForOrganizationResponse#failedSet
   */
  readonly failedSet?: OrganizationAffectedEntitiesErrorItem[];

  /**
   * @schema DescribeAffectedEntitiesForOrganizationResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeEntityAggregatesRequest
 */
export interface DescribeEntityAggregatesRequest {
  /**
   * @schema DescribeEntityAggregatesRequest#eventArns
   */
  readonly eventArns?: string[];

}

/**
 * @schema DescribeEntityAggregatesResponse
 */
export interface DescribeEntityAggregatesResponse {
  /**
   * @schema DescribeEntityAggregatesResponse#entityAggregates
   */
  readonly entityAggregates?: EntityAggregate[];

}

/**
 * @schema DescribeEventAggregatesRequest
 */
export interface DescribeEventAggregatesRequest {
  /**
   * @schema DescribeEventAggregatesRequest#filter
   */
  readonly filter?: EventFilter;

  /**
   * @schema DescribeEventAggregatesRequest#aggregateField
   */
  readonly aggregateField: string;

  /**
   * @schema DescribeEventAggregatesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeEventAggregatesRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeEventAggregatesResponse
 */
export interface DescribeEventAggregatesResponse {
  /**
   * @schema DescribeEventAggregatesResponse#eventAggregates
   */
  readonly eventAggregates?: EventAggregate[];

  /**
   * @schema DescribeEventAggregatesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeEventDetailsRequest
 */
export interface DescribeEventDetailsRequest {
  /**
   * @schema DescribeEventDetailsRequest#eventArns
   */
  readonly eventArns: string[];

  /**
   * @schema DescribeEventDetailsRequest#locale
   */
  readonly locale?: string;

}

/**
 * @schema DescribeEventDetailsResponse
 */
export interface DescribeEventDetailsResponse {
  /**
   * @schema DescribeEventDetailsResponse#successfulSet
   */
  readonly successfulSet?: EventDetails[];

  /**
   * @schema DescribeEventDetailsResponse#failedSet
   */
  readonly failedSet?: EventDetailsErrorItem[];

}

/**
 * @schema DescribeEventDetailsForOrganizationRequest
 */
export interface DescribeEventDetailsForOrganizationRequest {
  /**
   * @schema DescribeEventDetailsForOrganizationRequest#organizationEventDetailFilters
   */
  readonly organizationEventDetailFilters: EventAccountFilter[];

  /**
   * @schema DescribeEventDetailsForOrganizationRequest#locale
   */
  readonly locale?: string;

}

/**
 * @schema DescribeEventDetailsForOrganizationResponse
 */
export interface DescribeEventDetailsForOrganizationResponse {
  /**
   * @schema DescribeEventDetailsForOrganizationResponse#successfulSet
   */
  readonly successfulSet?: OrganizationEventDetails[];

  /**
   * @schema DescribeEventDetailsForOrganizationResponse#failedSet
   */
  readonly failedSet?: OrganizationEventDetailsErrorItem[];

}

/**
 * @schema DescribeEventTypesRequest
 */
export interface DescribeEventTypesRequest {
  /**
   * @schema DescribeEventTypesRequest#filter
   */
  readonly filter?: EventTypeFilter;

  /**
   * @schema DescribeEventTypesRequest#locale
   */
  readonly locale?: string;

  /**
   * @schema DescribeEventTypesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeEventTypesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema DescribeEventTypesResponse
 */
export interface DescribeEventTypesResponse {
  /**
   * @schema DescribeEventTypesResponse#eventTypes
   */
  readonly eventTypes?: EventType[];

  /**
   * @schema DescribeEventTypesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeEventsRequest
 */
export interface DescribeEventsRequest {
  /**
   * @schema DescribeEventsRequest#filter
   */
  readonly filter?: EventFilter;

  /**
   * @schema DescribeEventsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeEventsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeEventsRequest#locale
   */
  readonly locale?: string;

}

/**
 * @schema DescribeEventsResponse
 */
export interface DescribeEventsResponse {
  /**
   * @schema DescribeEventsResponse#events
   */
  readonly events?: Event[];

  /**
   * @schema DescribeEventsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeEventsForOrganizationRequest
 */
export interface DescribeEventsForOrganizationRequest {
  /**
   * @schema DescribeEventsForOrganizationRequest#filter
   */
  readonly filter?: OrganizationEventFilter;

  /**
   * @schema DescribeEventsForOrganizationRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeEventsForOrganizationRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeEventsForOrganizationRequest#locale
   */
  readonly locale?: string;

}

/**
 * @schema DescribeEventsForOrganizationResponse
 */
export interface DescribeEventsForOrganizationResponse {
  /**
   * @schema DescribeEventsForOrganizationResponse#events
   */
  readonly events?: OrganizationEvent[];

  /**
   * @schema DescribeEventsForOrganizationResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeHealthServiceStatusForOrganizationResponse
 */
export interface DescribeHealthServiceStatusForOrganizationResponse {
  /**
   * @schema DescribeHealthServiceStatusForOrganizationResponse#healthServiceAccessStatusForOrganization
   */
  readonly healthServiceAccessStatusForOrganization?: string;

}

/**
 * @schema EntityFilter
 */
export interface EntityFilter {
  /**
   * @schema EntityFilter#eventArns
   */
  readonly eventArns: string[];

  /**
   * @schema EntityFilter#entityArns
   */
  readonly entityArns?: string[];

  /**
   * @schema EntityFilter#entityValues
   */
  readonly entityValues?: string[];

  /**
   * @schema EntityFilter#lastUpdatedTimes
   */
  readonly lastUpdatedTimes?: DateTimeRange[];

  /**
   * @schema EntityFilter#tags
   */
  readonly tags?: { [key: string]: string }[];

  /**
   * @schema EntityFilter#statusCodes
   */
  readonly statusCodes?: string[];

}

/**
 * @schema AffectedEntity
 */
export interface AffectedEntity {
  /**
   * @schema AffectedEntity#entityArn
   */
  readonly entityArn?: string;

  /**
   * @schema AffectedEntity#eventArn
   */
  readonly eventArn?: string;

  /**
   * @schema AffectedEntity#entityValue
   */
  readonly entityValue?: string;

  /**
   * @schema AffectedEntity#entityUrl
   */
  readonly entityUrl?: string;

  /**
   * @schema AffectedEntity#awsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema AffectedEntity#lastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

  /**
   * @schema AffectedEntity#statusCode
   */
  readonly statusCode?: string;

  /**
   * @schema AffectedEntity#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema EventAccountFilter
 */
export interface EventAccountFilter {
  /**
   * @schema EventAccountFilter#eventArn
   */
  readonly eventArn: string;

  /**
   * @schema EventAccountFilter#awsAccountId
   */
  readonly awsAccountId?: string;

}

/**
 * @schema OrganizationAffectedEntitiesErrorItem
 */
export interface OrganizationAffectedEntitiesErrorItem {
  /**
   * @schema OrganizationAffectedEntitiesErrorItem#awsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema OrganizationAffectedEntitiesErrorItem#eventArn
   */
  readonly eventArn?: string;

  /**
   * @schema OrganizationAffectedEntitiesErrorItem#errorName
   */
  readonly errorName?: string;

  /**
   * @schema OrganizationAffectedEntitiesErrorItem#errorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema EntityAggregate
 */
export interface EntityAggregate {
  /**
   * @schema EntityAggregate#eventArn
   */
  readonly eventArn?: string;

  /**
   * @schema EntityAggregate#count
   */
  readonly count?: number;

}

/**
 * @schema EventFilter
 */
export interface EventFilter {
  /**
   * @schema EventFilter#eventArns
   */
  readonly eventArns?: string[];

  /**
   * @schema EventFilter#eventTypeCodes
   */
  readonly eventTypeCodes?: EventType[];

  /**
   * @schema EventFilter#services
   */
  readonly services?: string[];

  /**
   * @schema EventFilter#regions
   */
  readonly regions?: string[];

  /**
   * @schema EventFilter#availabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema EventFilter#startTimes
   */
  readonly startTimes?: DateTimeRange[];

  /**
   * @schema EventFilter#endTimes
   */
  readonly endTimes?: DateTimeRange[];

  /**
   * @schema EventFilter#lastUpdatedTimes
   */
  readonly lastUpdatedTimes?: DateTimeRange[];

  /**
   * @schema EventFilter#entityArns
   */
  readonly entityArns?: string[];

  /**
   * @schema EventFilter#entityValues
   */
  readonly entityValues?: string[];

  /**
   * @schema EventFilter#eventTypeCategories
   */
  readonly eventTypeCategories?: string[];

  /**
   * @schema EventFilter#tags
   */
  readonly tags?: { [key: string]: string }[];

  /**
   * @schema EventFilter#eventStatusCodes
   */
  readonly eventStatusCodes?: string[];

}

/**
 * @schema EventAggregate
 */
export interface EventAggregate {
  /**
   * @schema EventAggregate#aggregateValue
   */
  readonly aggregateValue?: string;

  /**
   * @schema EventAggregate#count
   */
  readonly count?: number;

}

/**
 * @schema EventDetails
 */
export interface EventDetails {
  /**
   * @schema EventDetails#event
   */
  readonly event?: Event;

  /**
   * @schema EventDetails#eventDescription
   */
  readonly eventDescription?: EventDescription;

  /**
   * @schema EventDetails#eventMetadata
   */
  readonly eventMetadata?: { [key: string]: string };

}

/**
 * @schema EventDetailsErrorItem
 */
export interface EventDetailsErrorItem {
  /**
   * @schema EventDetailsErrorItem#eventArn
   */
  readonly eventArn?: string;

  /**
   * @schema EventDetailsErrorItem#errorName
   */
  readonly errorName?: string;

  /**
   * @schema EventDetailsErrorItem#errorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema OrganizationEventDetails
 */
export interface OrganizationEventDetails {
  /**
   * @schema OrganizationEventDetails#awsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema OrganizationEventDetails#event
   */
  readonly event?: Event;

  /**
   * @schema OrganizationEventDetails#eventDescription
   */
  readonly eventDescription?: EventDescription;

  /**
   * @schema OrganizationEventDetails#eventMetadata
   */
  readonly eventMetadata?: { [key: string]: string };

}

/**
 * @schema OrganizationEventDetailsErrorItem
 */
export interface OrganizationEventDetailsErrorItem {
  /**
   * @schema OrganizationEventDetailsErrorItem#awsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema OrganizationEventDetailsErrorItem#eventArn
   */
  readonly eventArn?: string;

  /**
   * @schema OrganizationEventDetailsErrorItem#errorName
   */
  readonly errorName?: string;

  /**
   * @schema OrganizationEventDetailsErrorItem#errorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema EventTypeFilter
 */
export interface EventTypeFilter {
  /**
   * @schema EventTypeFilter#eventTypeCodes
   */
  readonly eventTypeCodes?: string[];

  /**
   * @schema EventTypeFilter#services
   */
  readonly services?: string[];

  /**
   * @schema EventTypeFilter#eventTypeCategories
   */
  readonly eventTypeCategories?: string[];

}

/**
 * @schema EventType
 */
export interface EventType {
  /**
   * @schema EventType#service
   */
  readonly service?: string;

  /**
   * @schema EventType#code
   */
  readonly code?: string;

  /**
   * @schema EventType#category
   */
  readonly category?: string;

}

/**
 * @schema Event
 */
export interface Event {
  /**
   * @schema Event#arn
   */
  readonly arn?: string;

  /**
   * @schema Event#service
   */
  readonly service?: string;

  /**
   * @schema Event#eventTypeCode
   */
  readonly eventTypeCode?: string;

  /**
   * @schema Event#eventTypeCategory
   */
  readonly eventTypeCategory?: string;

  /**
   * @schema Event#region
   */
  readonly region?: string;

  /**
   * @schema Event#availabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema Event#startTime
   */
  readonly startTime?: string;

  /**
   * @schema Event#endTime
   */
  readonly endTime?: string;

  /**
   * @schema Event#lastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

  /**
   * @schema Event#statusCode
   */
  readonly statusCode?: string;

  /**
   * @schema Event#eventScopeCode
   */
  readonly eventScopeCode?: string;

}

/**
 * @schema OrganizationEventFilter
 */
export interface OrganizationEventFilter {
  /**
   * @schema OrganizationEventFilter#eventTypeCodes
   */
  readonly eventTypeCodes?: EventType[];

  /**
   * @schema OrganizationEventFilter#awsAccountIds
   */
  readonly awsAccountIds?: string[];

  /**
   * @schema OrganizationEventFilter#services
   */
  readonly services?: string[];

  /**
   * @schema OrganizationEventFilter#regions
   */
  readonly regions?: string[];

  /**
   * @schema OrganizationEventFilter#startTime
   */
  readonly startTime?: DateTimeRange;

  /**
   * @schema OrganizationEventFilter#endTime
   */
  readonly endTime?: DateTimeRange;

  /**
   * @schema OrganizationEventFilter#lastUpdatedTime
   */
  readonly lastUpdatedTime?: DateTimeRange;

  /**
   * @schema OrganizationEventFilter#entityArns
   */
  readonly entityArns?: string[];

  /**
   * @schema OrganizationEventFilter#entityValues
   */
  readonly entityValues?: string[];

  /**
   * @schema OrganizationEventFilter#eventTypeCategories
   */
  readonly eventTypeCategories?: string[];

  /**
   * @schema OrganizationEventFilter#eventStatusCodes
   */
  readonly eventStatusCodes?: string[];

}

/**
 * @schema OrganizationEvent
 */
export interface OrganizationEvent {
  /**
   * @schema OrganizationEvent#arn
   */
  readonly arn?: string;

  /**
   * @schema OrganizationEvent#service
   */
  readonly service?: string;

  /**
   * @schema OrganizationEvent#eventTypeCode
   */
  readonly eventTypeCode?: string;

  /**
   * @schema OrganizationEvent#eventTypeCategory
   */
  readonly eventTypeCategory?: string;

  /**
   * @schema OrganizationEvent#eventScopeCode
   */
  readonly eventScopeCode?: string;

  /**
   * @schema OrganizationEvent#region
   */
  readonly region?: string;

  /**
   * @schema OrganizationEvent#startTime
   */
  readonly startTime?: string;

  /**
   * @schema OrganizationEvent#endTime
   */
  readonly endTime?: string;

  /**
   * @schema OrganizationEvent#lastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

  /**
   * @schema OrganizationEvent#statusCode
   */
  readonly statusCode?: string;

}

/**
 * @schema DateTimeRange
 */
export interface DateTimeRange {
  /**
   * @schema DateTimeRange#from
   */
  readonly from?: string;

  /**
   * @schema DateTimeRange#to
   */
  readonly to?: string;

}

/**
 * @schema EventDescription
 */
export interface EventDescription {
  /**
   * @schema EventDescription#latestDescription
   */
  readonly latestDescription?: EventDescription;

}
