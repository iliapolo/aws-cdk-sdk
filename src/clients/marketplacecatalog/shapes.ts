/**
 * @schema CancelChangeSetRequest
 */
export interface CancelChangeSetRequest {
  /**
   * @schema CancelChangeSetRequest#Catalog
   */
  readonly catalog: string;

  /**
   * @schema CancelChangeSetRequest#ChangeSetId
   */
  readonly changeSetId: string;

}

/**
 * @schema CancelChangeSetResponse
 */
export interface CancelChangeSetResponse {
  /**
   * @schema CancelChangeSetResponse#ChangeSetId
   */
  readonly changeSetId?: string;

  /**
   * @schema CancelChangeSetResponse#ChangeSetArn
   */
  readonly changeSetArn?: string;

}

/**
 * @schema DescribeChangeSetRequest
 */
export interface DescribeChangeSetRequest {
  /**
   * @schema DescribeChangeSetRequest#Catalog
   */
  readonly catalog: string;

  /**
   * @schema DescribeChangeSetRequest#ChangeSetId
   */
  readonly changeSetId: string;

}

/**
 * @schema DescribeChangeSetResponse
 */
export interface DescribeChangeSetResponse {
  /**
   * @schema DescribeChangeSetResponse#ChangeSetId
   */
  readonly changeSetId?: string;

  /**
   * @schema DescribeChangeSetResponse#ChangeSetArn
   */
  readonly changeSetArn?: string;

  /**
   * @schema DescribeChangeSetResponse#ChangeSetName
   */
  readonly changeSetName?: string;

  /**
   * @schema DescribeChangeSetResponse#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema DescribeChangeSetResponse#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema DescribeChangeSetResponse#Status
   */
  readonly status?: string;

  /**
   * @schema DescribeChangeSetResponse#FailureCode
   */
  readonly failureCode?: string;

  /**
   * @schema DescribeChangeSetResponse#FailureDescription
   */
  readonly failureDescription?: string;

  /**
   * @schema DescribeChangeSetResponse#ChangeSet
   */
  readonly changeSet?: ChangeSummary[];

}

/**
 * @schema DescribeEntityRequest
 */
export interface DescribeEntityRequest {
  /**
   * @schema DescribeEntityRequest#Catalog
   */
  readonly catalog: string;

  /**
   * @schema DescribeEntityRequest#EntityId
   */
  readonly entityId: string;

}

/**
 * @schema DescribeEntityResponse
 */
export interface DescribeEntityResponse {
  /**
   * @schema DescribeEntityResponse#EntityType
   */
  readonly entityType?: string;

  /**
   * @schema DescribeEntityResponse#EntityIdentifier
   */
  readonly entityIdentifier?: string;

  /**
   * @schema DescribeEntityResponse#EntityArn
   */
  readonly entityArn?: string;

  /**
   * @schema DescribeEntityResponse#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema DescribeEntityResponse#Details
   */
  readonly details?: string;

}

/**
 * @schema ListChangeSetsRequest
 */
export interface ListChangeSetsRequest {
  /**
   * @schema ListChangeSetsRequest#Catalog
   */
  readonly catalog: string;

  /**
   * @schema ListChangeSetsRequest#FilterList
   */
  readonly filterList?: Filter[];

  /**
   * @schema ListChangeSetsRequest#Sort
   */
  readonly sort?: Sort;

  /**
   * @schema ListChangeSetsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListChangeSetsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListChangeSetsResponse
 */
export interface ListChangeSetsResponse {
  /**
   * @schema ListChangeSetsResponse#ChangeSetSummaryList
   */
  readonly changeSetSummaryList?: ChangeSetSummaryListItem[];

  /**
   * @schema ListChangeSetsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListEntitiesRequest
 */
export interface ListEntitiesRequest {
  /**
   * @schema ListEntitiesRequest#Catalog
   */
  readonly catalog: string;

  /**
   * @schema ListEntitiesRequest#EntityType
   */
  readonly entityType: string;

  /**
   * @schema ListEntitiesRequest#FilterList
   */
  readonly filterList?: Filter[];

  /**
   * @schema ListEntitiesRequest#Sort
   */
  readonly sort?: Sort;

  /**
   * @schema ListEntitiesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListEntitiesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListEntitiesResponse
 */
export interface ListEntitiesResponse {
  /**
   * @schema ListEntitiesResponse#EntitySummaryList
   */
  readonly entitySummaryList?: EntitySummary[];

  /**
   * @schema ListEntitiesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema StartChangeSetRequest
 */
export interface StartChangeSetRequest {
  /**
   * @schema StartChangeSetRequest#Catalog
   */
  readonly catalog: string;

  /**
   * @schema StartChangeSetRequest#ChangeSet
   */
  readonly changeSet: Change[];

  /**
   * @schema StartChangeSetRequest#ChangeSetName
   */
  readonly changeSetName?: string;

  /**
   * @schema StartChangeSetRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * @schema StartChangeSetResponse
 */
export interface StartChangeSetResponse {
  /**
   * @schema StartChangeSetResponse#ChangeSetId
   */
  readonly changeSetId?: string;

  /**
   * @schema StartChangeSetResponse#ChangeSetArn
   */
  readonly changeSetArn?: string;

}

/**
 * @schema ChangeSummary
 */
export interface ChangeSummary {
  /**
   * @schema ChangeSummary#ChangeType
   */
  readonly changeType?: string;

  /**
   * @schema ChangeSummary#Entity
   */
  readonly entity?: Entity;

  /**
   * @schema ChangeSummary#Details
   */
  readonly details?: string;

  /**
   * @schema ChangeSummary#ErrorDetailList
   */
  readonly errorDetailList?: ErrorDetail[];

}

/**
 * @schema Filter
 */
export interface Filter {
  /**
   * @schema Filter#Name
   */
  readonly name?: string;

  /**
   * @schema Filter#ValueList
   */
  readonly valueList?: string[];

}

/**
 * @schema Sort
 */
export interface Sort {
  /**
   * @schema Sort#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema Sort#SortOrder
   */
  readonly sortOrder?: string;

}

/**
 * @schema ChangeSetSummaryListItem
 */
export interface ChangeSetSummaryListItem {
  /**
   * @schema ChangeSetSummaryListItem#ChangeSetId
   */
  readonly changeSetId?: string;

  /**
   * @schema ChangeSetSummaryListItem#ChangeSetArn
   */
  readonly changeSetArn?: string;

  /**
   * @schema ChangeSetSummaryListItem#ChangeSetName
   */
  readonly changeSetName?: string;

  /**
   * @schema ChangeSetSummaryListItem#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema ChangeSetSummaryListItem#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema ChangeSetSummaryListItem#Status
   */
  readonly status?: string;

  /**
   * @schema ChangeSetSummaryListItem#EntityIdList
   */
  readonly entityIdList?: string[];

  /**
   * @schema ChangeSetSummaryListItem#FailureCode
   */
  readonly failureCode?: string;

}

/**
 * @schema EntitySummary
 */
export interface EntitySummary {
  /**
   * @schema EntitySummary#Name
   */
  readonly name?: string;

  /**
   * @schema EntitySummary#EntityType
   */
  readonly entityType?: string;

  /**
   * @schema EntitySummary#EntityId
   */
  readonly entityId?: string;

  /**
   * @schema EntitySummary#EntityArn
   */
  readonly entityArn?: string;

  /**
   * @schema EntitySummary#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema EntitySummary#Visibility
   */
  readonly visibility?: string;

}

/**
 * @schema Change
 */
export interface Change {
  /**
   * @schema Change#ChangeType
   */
  readonly changeType: string;

  /**
   * @schema Change#Entity
   */
  readonly entity: Entity;

  /**
   * @schema Change#Details
   */
  readonly details: string;

}

/**
 * @schema Entity
 */
export interface Entity {
  /**
   * @schema Entity#Type
   */
  readonly type: string;

  /**
   * @schema Entity#Identifier
   */
  readonly identifier?: string;

}

/**
 * @schema ErrorDetail
 */
export interface ErrorDetail {
  /**
   * @schema ErrorDetail#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema ErrorDetail#ErrorMessage
   */
  readonly errorMessage?: string;

}
