/**
 * @schema MarketplaceCatalogCancelChangeSetRequest
 */
export interface MarketplaceCatalogCancelChangeSetRequest {
  /**
   * @schema MarketplaceCatalogCancelChangeSetRequest#Catalog
   */
  readonly catalog?: string;

  /**
   * @schema MarketplaceCatalogCancelChangeSetRequest#ChangeSetId
   */
  readonly changeSetId?: string;

}

/**
 * Converts an object of type 'MarketplaceCatalogCancelChangeSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MarketplaceCatalogCancelChangeSetRequest(obj: MarketplaceCatalogCancelChangeSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Catalog': obj.catalog,
    'ChangeSetId': obj.changeSetId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MarketplaceCatalogCancelChangeSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MarketplaceCatalogCancelChangeSetResponse(obj: MarketplaceCatalogCancelChangeSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeSetId': obj.changeSetId,
    'ChangeSetArn': obj.changeSetArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MarketplaceCatalogDescribeChangeSetRequest
 */
export interface MarketplaceCatalogDescribeChangeSetRequest {
  /**
   * @schema MarketplaceCatalogDescribeChangeSetRequest#Catalog
   */
  readonly catalog?: string;

  /**
   * @schema MarketplaceCatalogDescribeChangeSetRequest#ChangeSetId
   */
  readonly changeSetId?: string;

}

/**
 * Converts an object of type 'MarketplaceCatalogDescribeChangeSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MarketplaceCatalogDescribeChangeSetRequest(obj: MarketplaceCatalogDescribeChangeSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Catalog': obj.catalog,
    'ChangeSetId': obj.changeSetId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MarketplaceCatalogDescribeChangeSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MarketplaceCatalogDescribeChangeSetResponse(obj: MarketplaceCatalogDescribeChangeSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeSetId': obj.changeSetId,
    'ChangeSetArn': obj.changeSetArn,
    'ChangeSetName': obj.changeSetName,
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
    'Status': obj.status,
    'FailureCode': obj.failureCode,
    'FailureDescription': obj.failureDescription,
    'ChangeSet': obj.changeSet?.map(y => toJson_MarketplaceCatalogChangeSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MarketplaceCatalogDescribeEntityRequest
 */
export interface MarketplaceCatalogDescribeEntityRequest {
  /**
   * @schema MarketplaceCatalogDescribeEntityRequest#Catalog
   */
  readonly catalog?: string;

  /**
   * @schema MarketplaceCatalogDescribeEntityRequest#EntityId
   */
  readonly entityId?: string;

}

/**
 * Converts an object of type 'MarketplaceCatalogDescribeEntityRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MarketplaceCatalogDescribeEntityRequest(obj: MarketplaceCatalogDescribeEntityRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Catalog': obj.catalog,
    'EntityId': obj.entityId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MarketplaceCatalogDescribeEntityResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MarketplaceCatalogDescribeEntityResponse(obj: MarketplaceCatalogDescribeEntityResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EntityType': obj.entityType,
    'EntityIdentifier': obj.entityIdentifier,
    'EntityArn': obj.entityArn,
    'LastModifiedDate': obj.lastModifiedDate,
    'Details': obj.details,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MarketplaceCatalogListChangeSetsRequest
 */
export interface MarketplaceCatalogListChangeSetsRequest {
  /**
   * @schema MarketplaceCatalogListChangeSetsRequest#Catalog
   */
  readonly catalog?: string;

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
 * Converts an object of type 'MarketplaceCatalogListChangeSetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MarketplaceCatalogListChangeSetsRequest(obj: MarketplaceCatalogListChangeSetsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Catalog': obj.catalog,
    'FilterList': obj.filterList?.map(y => toJson_MarketplaceCatalogFilter(y)),
    'Sort': toJson_MarketplaceCatalogSort(obj.sort),
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MarketplaceCatalogListChangeSetsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MarketplaceCatalogListChangeSetsResponse(obj: MarketplaceCatalogListChangeSetsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeSetSummaryList': obj.changeSetSummaryList?.map(y => toJson_MarketplaceCatalogChangeSetSummaryListItem(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MarketplaceCatalogListEntitiesRequest
 */
export interface MarketplaceCatalogListEntitiesRequest {
  /**
   * @schema MarketplaceCatalogListEntitiesRequest#Catalog
   */
  readonly catalog?: string;

  /**
   * @schema MarketplaceCatalogListEntitiesRequest#EntityType
   */
  readonly entityType?: string;

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
 * Converts an object of type 'MarketplaceCatalogListEntitiesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MarketplaceCatalogListEntitiesRequest(obj: MarketplaceCatalogListEntitiesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Catalog': obj.catalog,
    'EntityType': obj.entityType,
    'FilterList': obj.filterList?.map(y => toJson_MarketplaceCatalogFilter(y)),
    'Sort': toJson_MarketplaceCatalogSort(obj.sort),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MarketplaceCatalogListEntitiesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MarketplaceCatalogListEntitiesResponse(obj: MarketplaceCatalogListEntitiesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EntitySummaryList': obj.entitySummaryList?.map(y => toJson_MarketplaceCatalogEntitySummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MarketplaceCatalogStartChangeSetRequest
 */
export interface MarketplaceCatalogStartChangeSetRequest {
  /**
   * @schema MarketplaceCatalogStartChangeSetRequest#Catalog
   */
  readonly catalog?: string;

  /**
   * @schema MarketplaceCatalogStartChangeSetRequest#ChangeSet
   */
  readonly changeSet?: MarketplaceCatalogChange[];

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
 * Converts an object of type 'MarketplaceCatalogStartChangeSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MarketplaceCatalogStartChangeSetRequest(obj: MarketplaceCatalogStartChangeSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Catalog': obj.catalog,
    'ChangeSet': obj.changeSet?.map(y => toJson_MarketplaceCatalogChange(y)),
    'ChangeSetName': obj.changeSetName,
    'ClientRequestToken': obj.clientRequestToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MarketplaceCatalogStartChangeSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MarketplaceCatalogStartChangeSetResponse(obj: MarketplaceCatalogStartChangeSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeSetId': obj.changeSetId,
    'ChangeSetArn': obj.changeSetArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema MarketplaceCatalogChangeSummary#ChangeName
   */
  readonly changeName?: string;

}

/**
 * Converts an object of type 'MarketplaceCatalogChangeSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MarketplaceCatalogChangeSummary(obj: MarketplaceCatalogChangeSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeType': obj.changeType,
    'Entity': toJson_MarketplaceCatalogEntity(obj.entity),
    'Details': obj.details,
    'ErrorDetailList': obj.errorDetailList?.map(y => toJson_MarketplaceCatalogErrorDetail(y)),
    'ChangeName': obj.changeName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MarketplaceCatalogFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MarketplaceCatalogFilter(obj: MarketplaceCatalogFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'ValueList': obj.valueList?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MarketplaceCatalogSort' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MarketplaceCatalogSort(obj: MarketplaceCatalogSort | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SortBy': obj.sortBy,
    'SortOrder': obj.sortOrder,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MarketplaceCatalogChangeSetSummaryListItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MarketplaceCatalogChangeSetSummaryListItem(obj: MarketplaceCatalogChangeSetSummaryListItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeSetId': obj.changeSetId,
    'ChangeSetArn': obj.changeSetArn,
    'ChangeSetName': obj.changeSetName,
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
    'Status': obj.status,
    'EntityIdList': obj.entityIdList?.map(y => y),
    'FailureCode': obj.failureCode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MarketplaceCatalogEntitySummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MarketplaceCatalogEntitySummary(obj: MarketplaceCatalogEntitySummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'EntityType': obj.entityType,
    'EntityId': obj.entityId,
    'EntityArn': obj.entityArn,
    'LastModifiedDate': obj.lastModifiedDate,
    'Visibility': obj.visibility,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MarketplaceCatalogChange
 */
export interface MarketplaceCatalogChange {
  /**
   * @schema MarketplaceCatalogChange#ChangeType
   */
  readonly changeType?: string;

  /**
   * @schema MarketplaceCatalogChange#Entity
   */
  readonly entity?: MarketplaceCatalogEntity;

  /**
   * @schema MarketplaceCatalogChange#Details
   */
  readonly details?: string;

  /**
   * @schema MarketplaceCatalogChange#ChangeName
   */
  readonly changeName?: string;

}

/**
 * Converts an object of type 'MarketplaceCatalogChange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MarketplaceCatalogChange(obj: MarketplaceCatalogChange | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeType': obj.changeType,
    'Entity': toJson_MarketplaceCatalogEntity(obj.entity),
    'Details': obj.details,
    'ChangeName': obj.changeName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MarketplaceCatalogEntity
 */
export interface MarketplaceCatalogEntity {
  /**
   * @schema MarketplaceCatalogEntity#Type
   */
  readonly type?: string;

  /**
   * @schema MarketplaceCatalogEntity#Identifier
   */
  readonly identifier?: string;

}

/**
 * Converts an object of type 'MarketplaceCatalogEntity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MarketplaceCatalogEntity(obj: MarketplaceCatalogEntity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Identifier': obj.identifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

/**
 * Converts an object of type 'MarketplaceCatalogErrorDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MarketplaceCatalogErrorDetail(obj: MarketplaceCatalogErrorDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ErrorCode': obj.errorCode,
    'ErrorMessage': obj.errorMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
