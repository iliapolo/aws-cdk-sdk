/**
 * @schema MarketplaceCatalogCancelChangeSetRequest
 */
export interface MarketplaceCatalogCancelChangeSetRequest {
  /**
   * @schema MarketplaceCatalogCancelChangeSetRequest#Catalog
   */
  readonly catalog: string;

  /**
   * @schema MarketplaceCatalogCancelChangeSetRequest#ChangeSetId
   */
  readonly changeSetId: string;

}

/**
 * @schema MarketplaceCatalogCancelChangeSetResponse
 */
export interface MarketplaceCatalogCancelChangeSetResponse {
  /**
   * @schema MarketplaceCatalogCancelChangeSetResponse#ChangeSetId
   */
  readonly changeSetId?: string;

  /**
   * @schema MarketplaceCatalogCancelChangeSetResponse#ChangeSetArn
   */
  readonly changeSetArn?: string;

}

/**
 * @schema MarketplaceCatalogDescribeChangeSetRequest
 */
export interface MarketplaceCatalogDescribeChangeSetRequest {
  /**
   * @schema MarketplaceCatalogDescribeChangeSetRequest#Catalog
   */
  readonly catalog: string;

  /**
   * @schema MarketplaceCatalogDescribeChangeSetRequest#ChangeSetId
   */
  readonly changeSetId: string;

}

/**
 * @schema MarketplaceCatalogDescribeChangeSetResponse
 */
export interface MarketplaceCatalogDescribeChangeSetResponse {
  /**
   * @schema MarketplaceCatalogDescribeChangeSetResponse#ChangeSetId
   */
  readonly changeSetId?: string;

  /**
   * @schema MarketplaceCatalogDescribeChangeSetResponse#ChangeSetArn
   */
  readonly changeSetArn?: string;

  /**
   * @schema MarketplaceCatalogDescribeChangeSetResponse#ChangeSetName
   */
  readonly changeSetName?: string;

  /**
   * @schema MarketplaceCatalogDescribeChangeSetResponse#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema MarketplaceCatalogDescribeChangeSetResponse#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema MarketplaceCatalogDescribeChangeSetResponse#Status
   */
  readonly status?: string;

  /**
   * @schema MarketplaceCatalogDescribeChangeSetResponse#FailureCode
   */
  readonly failureCode?: string;

  /**
   * @schema MarketplaceCatalogDescribeChangeSetResponse#FailureDescription
   */
  readonly failureDescription?: string;

  /**
   * @schema MarketplaceCatalogDescribeChangeSetResponse#ChangeSet
   */
  readonly changeSet?: MarketplaceCatalogChangeSummary[];

}

/**
 * @schema MarketplaceCatalogDescribeEntityRequest
 */
export interface MarketplaceCatalogDescribeEntityRequest {
  /**
   * @schema MarketplaceCatalogDescribeEntityRequest#Catalog
   */
  readonly catalog: string;

  /**
   * @schema MarketplaceCatalogDescribeEntityRequest#EntityId
   */
  readonly entityId: string;

}

/**
 * @schema MarketplaceCatalogDescribeEntityResponse
 */
export interface MarketplaceCatalogDescribeEntityResponse {
  /**
   * @schema MarketplaceCatalogDescribeEntityResponse#EntityType
   */
  readonly entityType?: string;

  /**
   * @schema MarketplaceCatalogDescribeEntityResponse#EntityIdentifier
   */
  readonly entityIdentifier?: string;

  /**
   * @schema MarketplaceCatalogDescribeEntityResponse#EntityArn
   */
  readonly entityArn?: string;

  /**
   * @schema MarketplaceCatalogDescribeEntityResponse#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema MarketplaceCatalogDescribeEntityResponse#Details
   */
  readonly details?: string;

}

/**
 * @schema MarketplaceCatalogListChangeSetsRequest
 */
export interface MarketplaceCatalogListChangeSetsRequest {
  /**
   * @schema MarketplaceCatalogListChangeSetsRequest#Catalog
   */
  readonly catalog: string;

  /**
   * @schema MarketplaceCatalogListChangeSetsRequest#FilterList
   */
  readonly filterList?: MarketplaceCatalogFilter[];

  /**
   * @schema MarketplaceCatalogListChangeSetsRequest#Sort
   */
  readonly sort?: MarketplaceCatalogSort;

  /**
   * @schema MarketplaceCatalogListChangeSetsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MarketplaceCatalogListChangeSetsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MarketplaceCatalogListChangeSetsResponse
 */
export interface MarketplaceCatalogListChangeSetsResponse {
  /**
   * @schema MarketplaceCatalogListChangeSetsResponse#ChangeSetSummaryList
   */
  readonly changeSetSummaryList?: MarketplaceCatalogChangeSetSummaryListItem[];

  /**
   * @schema MarketplaceCatalogListChangeSetsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MarketplaceCatalogListEntitiesRequest
 */
export interface MarketplaceCatalogListEntitiesRequest {
  /**
   * @schema MarketplaceCatalogListEntitiesRequest#Catalog
   */
  readonly catalog: string;

  /**
   * @schema MarketplaceCatalogListEntitiesRequest#EntityType
   */
  readonly entityType: string;

  /**
   * @schema MarketplaceCatalogListEntitiesRequest#FilterList
   */
  readonly filterList?: MarketplaceCatalogFilter[];

  /**
   * @schema MarketplaceCatalogListEntitiesRequest#Sort
   */
  readonly sort?: MarketplaceCatalogSort;

  /**
   * @schema MarketplaceCatalogListEntitiesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema MarketplaceCatalogListEntitiesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema MarketplaceCatalogListEntitiesResponse
 */
export interface MarketplaceCatalogListEntitiesResponse {
  /**
   * @schema MarketplaceCatalogListEntitiesResponse#EntitySummaryList
   */
  readonly entitySummaryList?: MarketplaceCatalogEntitySummary[];

  /**
   * @schema MarketplaceCatalogListEntitiesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MarketplaceCatalogStartChangeSetRequest
 */
export interface MarketplaceCatalogStartChangeSetRequest {
  /**
   * @schema MarketplaceCatalogStartChangeSetRequest#Catalog
   */
  readonly catalog: string;

  /**
   * @schema MarketplaceCatalogStartChangeSetRequest#ChangeSet
   */
  readonly changeSet: MarketplaceCatalogChange[];

  /**
   * @schema MarketplaceCatalogStartChangeSetRequest#ChangeSetName
   */
  readonly changeSetName?: string;

  /**
   * @schema MarketplaceCatalogStartChangeSetRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * @schema MarketplaceCatalogStartChangeSetResponse
 */
export interface MarketplaceCatalogStartChangeSetResponse {
  /**
   * @schema MarketplaceCatalogStartChangeSetResponse#ChangeSetId
   */
  readonly changeSetId?: string;

  /**
   * @schema MarketplaceCatalogStartChangeSetResponse#ChangeSetArn
   */
  readonly changeSetArn?: string;

}

/**
 * @schema MarketplaceCatalogChangeSummary
 */
export interface MarketplaceCatalogChangeSummary {
  /**
   * @schema MarketplaceCatalogChangeSummary#ChangeType
   */
  readonly changeType?: string;

  /**
   * @schema MarketplaceCatalogChangeSummary#Entity
   */
  readonly entity?: MarketplaceCatalogEntity;

  /**
   * @schema MarketplaceCatalogChangeSummary#Details
   */
  readonly details?: string;

  /**
   * @schema MarketplaceCatalogChangeSummary#ErrorDetailList
   */
  readonly errorDetailList?: MarketplaceCatalogErrorDetail[];

}

/**
 * @schema MarketplaceCatalogFilter
 */
export interface MarketplaceCatalogFilter {
  /**
   * @schema MarketplaceCatalogFilter#Name
   */
  readonly name?: string;

  /**
   * @schema MarketplaceCatalogFilter#ValueList
   */
  readonly valueList?: string[];

}

/**
 * @schema MarketplaceCatalogSort
 */
export interface MarketplaceCatalogSort {
  /**
   * @schema MarketplaceCatalogSort#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema MarketplaceCatalogSort#SortOrder
   */
  readonly sortOrder?: string;

}

/**
 * @schema MarketplaceCatalogChangeSetSummaryListItem
 */
export interface MarketplaceCatalogChangeSetSummaryListItem {
  /**
   * @schema MarketplaceCatalogChangeSetSummaryListItem#ChangeSetId
   */
  readonly changeSetId?: string;

  /**
   * @schema MarketplaceCatalogChangeSetSummaryListItem#ChangeSetArn
   */
  readonly changeSetArn?: string;

  /**
   * @schema MarketplaceCatalogChangeSetSummaryListItem#ChangeSetName
   */
  readonly changeSetName?: string;

  /**
   * @schema MarketplaceCatalogChangeSetSummaryListItem#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema MarketplaceCatalogChangeSetSummaryListItem#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema MarketplaceCatalogChangeSetSummaryListItem#Status
   */
  readonly status?: string;

  /**
   * @schema MarketplaceCatalogChangeSetSummaryListItem#EntityIdList
   */
  readonly entityIdList?: string[];

  /**
   * @schema MarketplaceCatalogChangeSetSummaryListItem#FailureCode
   */
  readonly failureCode?: string;

}

/**
 * @schema MarketplaceCatalogEntitySummary
 */
export interface MarketplaceCatalogEntitySummary {
  /**
   * @schema MarketplaceCatalogEntitySummary#Name
   */
  readonly name?: string;

  /**
   * @schema MarketplaceCatalogEntitySummary#EntityType
   */
  readonly entityType?: string;

  /**
   * @schema MarketplaceCatalogEntitySummary#EntityId
   */
  readonly entityId?: string;

  /**
   * @schema MarketplaceCatalogEntitySummary#EntityArn
   */
  readonly entityArn?: string;

  /**
   * @schema MarketplaceCatalogEntitySummary#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema MarketplaceCatalogEntitySummary#Visibility
   */
  readonly visibility?: string;

}

/**
 * @schema MarketplaceCatalogChange
 */
export interface MarketplaceCatalogChange {
  /**
   * @schema MarketplaceCatalogChange#ChangeType
   */
  readonly changeType: string;

  /**
   * @schema MarketplaceCatalogChange#Entity
   */
  readonly entity: MarketplaceCatalogEntity;

  /**
   * @schema MarketplaceCatalogChange#Details
   */
  readonly details: string;

}

/**
 * @schema MarketplaceCatalogEntity
 */
export interface MarketplaceCatalogEntity {
  /**
   * @schema MarketplaceCatalogEntity#Type
   */
  readonly type: string;

  /**
   * @schema MarketplaceCatalogEntity#Identifier
   */
  readonly identifier?: string;

}

/**
 * @schema MarketplaceCatalogErrorDetail
 */
export interface MarketplaceCatalogErrorDetail {
  /**
   * @schema MarketplaceCatalogErrorDetail#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema MarketplaceCatalogErrorDetail#ErrorMessage
   */
  readonly errorMessage?: string;

}
