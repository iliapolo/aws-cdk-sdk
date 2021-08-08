/**
 * @schema GlueBatchCreatePartitionRequest
 */
export interface GlueBatchCreatePartitionRequest {
  /**
   * @schema GlueBatchCreatePartitionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueBatchCreatePartitionRequest#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema GlueBatchCreatePartitionRequest#TableName
   */
  readonly tableName?: string;

  /**
   * @schema GlueBatchCreatePartitionRequest#PartitionInputList
   */
  readonly partitionInputList?: GluePartitionInput[];

}

/**
 * Converts an object of type 'GlueBatchCreatePartitionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueBatchCreatePartitionRequest(obj: GlueBatchCreatePartitionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'DatabaseName': obj.databaseName,
    'TableName': obj.tableName,
    'PartitionInputList': obj.partitionInputList?.map(y => toJson_GluePartitionInput(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueBatchCreatePartitionResponse
 */
export interface GlueBatchCreatePartitionResponse {
  /**
   * @schema GlueBatchCreatePartitionResponse#Errors
   */
  readonly errors?: GluePartitionError[];

}

/**
 * Converts an object of type 'GlueBatchCreatePartitionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueBatchCreatePartitionResponse(obj: GlueBatchCreatePartitionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Errors': obj.errors?.map(y => toJson_GluePartitionError(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueBatchDeleteConnectionRequest
 */
export interface GlueBatchDeleteConnectionRequest {
  /**
   * @schema GlueBatchDeleteConnectionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueBatchDeleteConnectionRequest#ConnectionNameList
   */
  readonly connectionNameList?: string[];

}

/**
 * Converts an object of type 'GlueBatchDeleteConnectionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueBatchDeleteConnectionRequest(obj: GlueBatchDeleteConnectionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'ConnectionNameList': obj.connectionNameList?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueBatchDeleteConnectionResponse
 */
export interface GlueBatchDeleteConnectionResponse {
  /**
   * @schema GlueBatchDeleteConnectionResponse#Succeeded
   */
  readonly succeeded?: string[];

  /**
   * @schema GlueBatchDeleteConnectionResponse#Errors
   */
  readonly errors?: { [key: string]: GlueErrorDetail };

}

/**
 * Converts an object of type 'GlueBatchDeleteConnectionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueBatchDeleteConnectionResponse(obj: GlueBatchDeleteConnectionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Succeeded': obj.succeeded?.map(y => y),
    'Errors': ((obj.errors) === undefined) ? undefined : (Object.entries(obj.errors).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_GlueErrorDetail(i[1]) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueBatchDeletePartitionRequest
 */
export interface GlueBatchDeletePartitionRequest {
  /**
   * @schema GlueBatchDeletePartitionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueBatchDeletePartitionRequest#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema GlueBatchDeletePartitionRequest#TableName
   */
  readonly tableName?: string;

  /**
   * @schema GlueBatchDeletePartitionRequest#PartitionsToDelete
   */
  readonly partitionsToDelete?: GluePartitionValueList[];

}

/**
 * Converts an object of type 'GlueBatchDeletePartitionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueBatchDeletePartitionRequest(obj: GlueBatchDeletePartitionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'DatabaseName': obj.databaseName,
    'TableName': obj.tableName,
    'PartitionsToDelete': obj.partitionsToDelete?.map(y => toJson_GluePartitionValueList(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueBatchDeletePartitionResponse
 */
export interface GlueBatchDeletePartitionResponse {
  /**
   * @schema GlueBatchDeletePartitionResponse#Errors
   */
  readonly errors?: GluePartitionError[];

}

/**
 * Converts an object of type 'GlueBatchDeletePartitionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueBatchDeletePartitionResponse(obj: GlueBatchDeletePartitionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Errors': obj.errors?.map(y => toJson_GluePartitionError(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueBatchDeleteTableRequest
 */
export interface GlueBatchDeleteTableRequest {
  /**
   * @schema GlueBatchDeleteTableRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueBatchDeleteTableRequest#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema GlueBatchDeleteTableRequest#TablesToDelete
   */
  readonly tablesToDelete?: string[];

}

/**
 * Converts an object of type 'GlueBatchDeleteTableRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueBatchDeleteTableRequest(obj: GlueBatchDeleteTableRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'DatabaseName': obj.databaseName,
    'TablesToDelete': obj.tablesToDelete?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueBatchDeleteTableResponse
 */
export interface GlueBatchDeleteTableResponse {
  /**
   * @schema GlueBatchDeleteTableResponse#Errors
   */
  readonly errors?: GlueTableError[];

}

/**
 * Converts an object of type 'GlueBatchDeleteTableResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueBatchDeleteTableResponse(obj: GlueBatchDeleteTableResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Errors': obj.errors?.map(y => toJson_GlueTableError(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueBatchDeleteTableVersionRequest
 */
export interface GlueBatchDeleteTableVersionRequest {
  /**
   * @schema GlueBatchDeleteTableVersionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueBatchDeleteTableVersionRequest#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema GlueBatchDeleteTableVersionRequest#TableName
   */
  readonly tableName?: string;

  /**
   * @schema GlueBatchDeleteTableVersionRequest#VersionIds
   */
  readonly versionIds?: string[];

}

/**
 * Converts an object of type 'GlueBatchDeleteTableVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueBatchDeleteTableVersionRequest(obj: GlueBatchDeleteTableVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'DatabaseName': obj.databaseName,
    'TableName': obj.tableName,
    'VersionIds': obj.versionIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueBatchDeleteTableVersionResponse
 */
export interface GlueBatchDeleteTableVersionResponse {
  /**
   * @schema GlueBatchDeleteTableVersionResponse#Errors
   */
  readonly errors?: GlueTableVersionError[];

}

/**
 * Converts an object of type 'GlueBatchDeleteTableVersionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueBatchDeleteTableVersionResponse(obj: GlueBatchDeleteTableVersionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Errors': obj.errors?.map(y => toJson_GlueTableVersionError(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueBatchGetCrawlersRequest
 */
export interface GlueBatchGetCrawlersRequest {
  /**
   * @schema GlueBatchGetCrawlersRequest#CrawlerNames
   */
  readonly crawlerNames?: string[];

}

/**
 * Converts an object of type 'GlueBatchGetCrawlersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueBatchGetCrawlersRequest(obj: GlueBatchGetCrawlersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CrawlerNames': obj.crawlerNames?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueBatchGetCrawlersResponse
 */
export interface GlueBatchGetCrawlersResponse {
  /**
   * @schema GlueBatchGetCrawlersResponse#Crawlers
   */
  readonly crawlers?: GlueCrawler[];

  /**
   * @schema GlueBatchGetCrawlersResponse#CrawlersNotFound
   */
  readonly crawlersNotFound?: string[];

}

/**
 * Converts an object of type 'GlueBatchGetCrawlersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueBatchGetCrawlersResponse(obj: GlueBatchGetCrawlersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Crawlers': obj.crawlers?.map(y => toJson_GlueCrawler(y)),
    'CrawlersNotFound': obj.crawlersNotFound?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueBatchGetDevEndpointsRequest
 */
export interface GlueBatchGetDevEndpointsRequest {
  /**
   * @schema GlueBatchGetDevEndpointsRequest#DevEndpointNames
   */
  readonly devEndpointNames?: string[];

}

/**
 * Converts an object of type 'GlueBatchGetDevEndpointsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueBatchGetDevEndpointsRequest(obj: GlueBatchGetDevEndpointsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DevEndpointNames': obj.devEndpointNames?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueBatchGetDevEndpointsResponse
 */
export interface GlueBatchGetDevEndpointsResponse {
  /**
   * @schema GlueBatchGetDevEndpointsResponse#DevEndpoints
   */
  readonly devEndpoints?: GlueDevEndpoint[];

  /**
   * @schema GlueBatchGetDevEndpointsResponse#DevEndpointsNotFound
   */
  readonly devEndpointsNotFound?: string[];

}

/**
 * Converts an object of type 'GlueBatchGetDevEndpointsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueBatchGetDevEndpointsResponse(obj: GlueBatchGetDevEndpointsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DevEndpoints': obj.devEndpoints?.map(y => toJson_GlueDevEndpoint(y)),
    'DevEndpointsNotFound': obj.devEndpointsNotFound?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueBatchGetJobsRequest
 */
export interface GlueBatchGetJobsRequest {
  /**
   * @schema GlueBatchGetJobsRequest#JobNames
   */
  readonly jobNames?: string[];

}

/**
 * Converts an object of type 'GlueBatchGetJobsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueBatchGetJobsRequest(obj: GlueBatchGetJobsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobNames': obj.jobNames?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueBatchGetJobsResponse
 */
export interface GlueBatchGetJobsResponse {
  /**
   * @schema GlueBatchGetJobsResponse#Jobs
   */
  readonly jobs?: GlueJob[];

  /**
   * @schema GlueBatchGetJobsResponse#JobsNotFound
   */
  readonly jobsNotFound?: string[];

}

/**
 * Converts an object of type 'GlueBatchGetJobsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueBatchGetJobsResponse(obj: GlueBatchGetJobsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Jobs': obj.jobs?.map(y => toJson_GlueJob(y)),
    'JobsNotFound': obj.jobsNotFound?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueBatchGetPartitionRequest
 */
export interface GlueBatchGetPartitionRequest {
  /**
   * @schema GlueBatchGetPartitionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueBatchGetPartitionRequest#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema GlueBatchGetPartitionRequest#TableName
   */
  readonly tableName?: string;

  /**
   * @schema GlueBatchGetPartitionRequest#PartitionsToGet
   */
  readonly partitionsToGet?: GluePartitionValueList[];

}

/**
 * Converts an object of type 'GlueBatchGetPartitionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueBatchGetPartitionRequest(obj: GlueBatchGetPartitionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'DatabaseName': obj.databaseName,
    'TableName': obj.tableName,
    'PartitionsToGet': obj.partitionsToGet?.map(y => toJson_GluePartitionValueList(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueBatchGetPartitionResponse
 */
export interface GlueBatchGetPartitionResponse {
  /**
   * @schema GlueBatchGetPartitionResponse#Partitions
   */
  readonly partitions?: GluePartition[];

  /**
   * @schema GlueBatchGetPartitionResponse#UnprocessedKeys
   */
  readonly unprocessedKeys?: GluePartitionValueList[];

}

/**
 * Converts an object of type 'GlueBatchGetPartitionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueBatchGetPartitionResponse(obj: GlueBatchGetPartitionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Partitions': obj.partitions?.map(y => toJson_GluePartition(y)),
    'UnprocessedKeys': obj.unprocessedKeys?.map(y => toJson_GluePartitionValueList(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueBatchGetTriggersRequest
 */
export interface GlueBatchGetTriggersRequest {
  /**
   * @schema GlueBatchGetTriggersRequest#TriggerNames
   */
  readonly triggerNames?: string[];

}

/**
 * Converts an object of type 'GlueBatchGetTriggersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueBatchGetTriggersRequest(obj: GlueBatchGetTriggersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TriggerNames': obj.triggerNames?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueBatchGetTriggersResponse
 */
export interface GlueBatchGetTriggersResponse {
  /**
   * @schema GlueBatchGetTriggersResponse#Triggers
   */
  readonly triggers?: GlueTrigger[];

  /**
   * @schema GlueBatchGetTriggersResponse#TriggersNotFound
   */
  readonly triggersNotFound?: string[];

}

/**
 * Converts an object of type 'GlueBatchGetTriggersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueBatchGetTriggersResponse(obj: GlueBatchGetTriggersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Triggers': obj.triggers?.map(y => toJson_GlueTrigger(y)),
    'TriggersNotFound': obj.triggersNotFound?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueBatchGetWorkflowsRequest
 */
export interface GlueBatchGetWorkflowsRequest {
  /**
   * @schema GlueBatchGetWorkflowsRequest#Names
   */
  readonly names?: string[];

  /**
   * @schema GlueBatchGetWorkflowsRequest#IncludeGraph
   */
  readonly includeGraph?: boolean;

}

/**
 * Converts an object of type 'GlueBatchGetWorkflowsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueBatchGetWorkflowsRequest(obj: GlueBatchGetWorkflowsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Names': obj.names?.map(y => y),
    'IncludeGraph': obj.includeGraph,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueBatchGetWorkflowsResponse
 */
export interface GlueBatchGetWorkflowsResponse {
  /**
   * @schema GlueBatchGetWorkflowsResponse#Workflows
   */
  readonly workflows?: GlueWorkflow[];

  /**
   * @schema GlueBatchGetWorkflowsResponse#MissingWorkflows
   */
  readonly missingWorkflows?: string[];

}

/**
 * Converts an object of type 'GlueBatchGetWorkflowsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueBatchGetWorkflowsResponse(obj: GlueBatchGetWorkflowsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Workflows': obj.workflows?.map(y => toJson_GlueWorkflow(y)),
    'MissingWorkflows': obj.missingWorkflows?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueBatchStopJobRunRequest
 */
export interface GlueBatchStopJobRunRequest {
  /**
   * @schema GlueBatchStopJobRunRequest#JobName
   */
  readonly jobName?: string;

  /**
   * @schema GlueBatchStopJobRunRequest#JobRunIds
   */
  readonly jobRunIds?: string[];

}

/**
 * Converts an object of type 'GlueBatchStopJobRunRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueBatchStopJobRunRequest(obj: GlueBatchStopJobRunRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobName': obj.jobName,
    'JobRunIds': obj.jobRunIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueBatchStopJobRunResponse
 */
export interface GlueBatchStopJobRunResponse {
  /**
   * @schema GlueBatchStopJobRunResponse#SuccessfulSubmissions
   */
  readonly successfulSubmissions?: GlueBatchStopJobRunSuccessfulSubmission[];

  /**
   * @schema GlueBatchStopJobRunResponse#Errors
   */
  readonly errors?: GlueBatchStopJobRunError[];

}

/**
 * Converts an object of type 'GlueBatchStopJobRunResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueBatchStopJobRunResponse(obj: GlueBatchStopJobRunResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SuccessfulSubmissions': obj.successfulSubmissions?.map(y => toJson_GlueBatchStopJobRunSuccessfulSubmission(y)),
    'Errors': obj.errors?.map(y => toJson_GlueBatchStopJobRunError(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueBatchUpdatePartitionRequest
 */
export interface GlueBatchUpdatePartitionRequest {
  /**
   * @schema GlueBatchUpdatePartitionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueBatchUpdatePartitionRequest#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema GlueBatchUpdatePartitionRequest#TableName
   */
  readonly tableName?: string;

  /**
   * @schema GlueBatchUpdatePartitionRequest#Entries
   */
  readonly entries?: GlueBatchUpdatePartitionRequestEntry[];

}

/**
 * Converts an object of type 'GlueBatchUpdatePartitionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueBatchUpdatePartitionRequest(obj: GlueBatchUpdatePartitionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'DatabaseName': obj.databaseName,
    'TableName': obj.tableName,
    'Entries': obj.entries?.map(y => toJson_GlueBatchUpdatePartitionRequestEntry(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueBatchUpdatePartitionResponse
 */
export interface GlueBatchUpdatePartitionResponse {
  /**
   * @schema GlueBatchUpdatePartitionResponse#Errors
   */
  readonly errors?: GlueBatchUpdatePartitionFailureEntry[];

}

/**
 * Converts an object of type 'GlueBatchUpdatePartitionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueBatchUpdatePartitionResponse(obj: GlueBatchUpdatePartitionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Errors': obj.errors?.map(y => toJson_GlueBatchUpdatePartitionFailureEntry(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueCancelMlTaskRunRequest
 */
export interface GlueCancelMlTaskRunRequest {
  /**
   * @schema GlueCancelMlTaskRunRequest#TransformId
   */
  readonly transformId?: string;

  /**
   * @schema GlueCancelMlTaskRunRequest#TaskRunId
   */
  readonly taskRunId?: string;

}

/**
 * Converts an object of type 'GlueCancelMlTaskRunRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueCancelMlTaskRunRequest(obj: GlueCancelMlTaskRunRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TransformId': obj.transformId,
    'TaskRunId': obj.taskRunId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueCancelMlTaskRunResponse
 */
export interface GlueCancelMlTaskRunResponse {
  /**
   * @schema GlueCancelMlTaskRunResponse#TransformId
   */
  readonly transformId?: string;

  /**
   * @schema GlueCancelMlTaskRunResponse#TaskRunId
   */
  readonly taskRunId?: string;

  /**
   * @schema GlueCancelMlTaskRunResponse#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'GlueCancelMlTaskRunResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueCancelMlTaskRunResponse(obj: GlueCancelMlTaskRunResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TransformId': obj.transformId,
    'TaskRunId': obj.taskRunId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueCheckSchemaVersionValidityInput
 */
export interface GlueCheckSchemaVersionValidityInput {
  /**
   * @schema GlueCheckSchemaVersionValidityInput#DataFormat
   */
  readonly dataFormat?: string;

  /**
   * @schema GlueCheckSchemaVersionValidityInput#SchemaDefinition
   */
  readonly schemaDefinition?: string;

}

/**
 * Converts an object of type 'GlueCheckSchemaVersionValidityInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueCheckSchemaVersionValidityInput(obj: GlueCheckSchemaVersionValidityInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataFormat': obj.dataFormat,
    'SchemaDefinition': obj.schemaDefinition,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueCheckSchemaVersionValidityResponse
 */
export interface GlueCheckSchemaVersionValidityResponse {
  /**
   * @schema GlueCheckSchemaVersionValidityResponse#Valid
   */
  readonly valid?: boolean;

  /**
   * @schema GlueCheckSchemaVersionValidityResponse#Error
   */
  readonly error?: string;

}

/**
 * Converts an object of type 'GlueCheckSchemaVersionValidityResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueCheckSchemaVersionValidityResponse(obj: GlueCheckSchemaVersionValidityResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Valid': obj.valid,
    'Error': obj.error,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueCreateClassifierRequest
 */
export interface GlueCreateClassifierRequest {
  /**
   * @schema GlueCreateClassifierRequest#GrokClassifier
   */
  readonly grokClassifier?: GlueCreateGrokClassifierRequest;

  /**
   * @schema GlueCreateClassifierRequest#XMLClassifier
   */
  readonly xmlClassifier?: GlueCreateXmlClassifierRequest;

  /**
   * @schema GlueCreateClassifierRequest#JsonClassifier
   */
  readonly jsonClassifier?: GlueCreateJsonClassifierRequest;

  /**
   * @schema GlueCreateClassifierRequest#CsvClassifier
   */
  readonly csvClassifier?: GlueCreateCsvClassifierRequest;

}

/**
 * Converts an object of type 'GlueCreateClassifierRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueCreateClassifierRequest(obj: GlueCreateClassifierRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GrokClassifier': toJson_GlueCreateGrokClassifierRequest(obj.grokClassifier),
    'XMLClassifier': toJson_GlueCreateXmlClassifierRequest(obj.xmlClassifier),
    'JsonClassifier': toJson_GlueCreateJsonClassifierRequest(obj.jsonClassifier),
    'CsvClassifier': toJson_GlueCreateCsvClassifierRequest(obj.csvClassifier),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueCreateClassifierResponse
 */
export interface GlueCreateClassifierResponse {
}

/**
 * Converts an object of type 'GlueCreateClassifierResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueCreateClassifierResponse(obj: GlueCreateClassifierResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueCreateConnectionRequest
 */
export interface GlueCreateConnectionRequest {
  /**
   * @schema GlueCreateConnectionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueCreateConnectionRequest#ConnectionInput
   */
  readonly connectionInput?: GlueConnectionInput;

}

/**
 * Converts an object of type 'GlueCreateConnectionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueCreateConnectionRequest(obj: GlueCreateConnectionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'ConnectionInput': toJson_GlueConnectionInput(obj.connectionInput),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueCreateConnectionResponse
 */
export interface GlueCreateConnectionResponse {
}

/**
 * Converts an object of type 'GlueCreateConnectionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueCreateConnectionResponse(obj: GlueCreateConnectionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueCreateCrawlerRequest
 */
export interface GlueCreateCrawlerRequest {
  /**
   * @schema GlueCreateCrawlerRequest#Name
   */
  readonly name?: string;

  /**
   * @schema GlueCreateCrawlerRequest#Role
   */
  readonly role?: string;

  /**
   * @schema GlueCreateCrawlerRequest#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema GlueCreateCrawlerRequest#Description
   */
  readonly description?: string;

  /**
   * @schema GlueCreateCrawlerRequest#Targets
   */
  readonly targets?: GlueCrawlerTargets;

  /**
   * @schema GlueCreateCrawlerRequest#Schedule
   */
  readonly schedule?: string;

  /**
   * @schema GlueCreateCrawlerRequest#Classifiers
   */
  readonly classifiers?: string[];

  /**
   * @schema GlueCreateCrawlerRequest#TablePrefix
   */
  readonly tablePrefix?: string;

  /**
   * @schema GlueCreateCrawlerRequest#SchemaChangePolicy
   */
  readonly schemaChangePolicy?: GlueSchemaChangePolicy;

  /**
   * @schema GlueCreateCrawlerRequest#RecrawlPolicy
   */
  readonly recrawlPolicy?: GlueRecrawlPolicy;

  /**
   * @schema GlueCreateCrawlerRequest#LineageConfiguration
   */
  readonly lineageConfiguration?: GlueLineageConfiguration;

  /**
   * @schema GlueCreateCrawlerRequest#Configuration
   */
  readonly configuration?: string;

  /**
   * @schema GlueCreateCrawlerRequest#CrawlerSecurityConfiguration
   */
  readonly crawlerSecurityConfiguration?: string;

  /**
   * @schema GlueCreateCrawlerRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'GlueCreateCrawlerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueCreateCrawlerRequest(obj: GlueCreateCrawlerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Role': obj.role,
    'DatabaseName': obj.databaseName,
    'Description': obj.description,
    'Targets': toJson_GlueCrawlerTargets(obj.targets),
    'Schedule': obj.schedule,
    'Classifiers': obj.classifiers?.map(y => y),
    'TablePrefix': obj.tablePrefix,
    'SchemaChangePolicy': toJson_GlueSchemaChangePolicy(obj.schemaChangePolicy),
    'RecrawlPolicy': toJson_GlueRecrawlPolicy(obj.recrawlPolicy),
    'LineageConfiguration': toJson_GlueLineageConfiguration(obj.lineageConfiguration),
    'Configuration': obj.configuration,
    'CrawlerSecurityConfiguration': obj.crawlerSecurityConfiguration,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueCreateCrawlerResponse
 */
export interface GlueCreateCrawlerResponse {
}

/**
 * Converts an object of type 'GlueCreateCrawlerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueCreateCrawlerResponse(obj: GlueCreateCrawlerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueCreateDatabaseRequest
 */
export interface GlueCreateDatabaseRequest {
  /**
   * @schema GlueCreateDatabaseRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueCreateDatabaseRequest#DatabaseInput
   */
  readonly databaseInput?: GlueDatabaseInput;

}

/**
 * Converts an object of type 'GlueCreateDatabaseRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueCreateDatabaseRequest(obj: GlueCreateDatabaseRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'DatabaseInput': toJson_GlueDatabaseInput(obj.databaseInput),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueCreateDatabaseResponse
 */
export interface GlueCreateDatabaseResponse {
}

/**
 * Converts an object of type 'GlueCreateDatabaseResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueCreateDatabaseResponse(obj: GlueCreateDatabaseResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueCreateDevEndpointRequest
 */
export interface GlueCreateDevEndpointRequest {
  /**
   * @schema GlueCreateDevEndpointRequest#EndpointName
   */
  readonly endpointName?: string;

  /**
   * @schema GlueCreateDevEndpointRequest#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema GlueCreateDevEndpointRequest#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema GlueCreateDevEndpointRequest#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema GlueCreateDevEndpointRequest#PublicKey
   */
  readonly publicKey?: string;

  /**
   * @schema GlueCreateDevEndpointRequest#PublicKeys
   */
  readonly publicKeys?: string[];

  /**
   * @schema GlueCreateDevEndpointRequest#NumberOfNodes
   */
  readonly numberOfNodes?: number;

  /**
   * @schema GlueCreateDevEndpointRequest#WorkerType
   */
  readonly workerType?: string;

  /**
   * @schema GlueCreateDevEndpointRequest#GlueVersion
   */
  readonly glueVersion?: string;

  /**
   * @schema GlueCreateDevEndpointRequest#NumberOfWorkers
   */
  readonly numberOfWorkers?: number;

  /**
   * @schema GlueCreateDevEndpointRequest#ExtraPythonLibsS3Path
   */
  readonly extraPythonLibsS3Path?: string;

  /**
   * @schema GlueCreateDevEndpointRequest#ExtraJarsS3Path
   */
  readonly extraJarsS3Path?: string;

  /**
   * @schema GlueCreateDevEndpointRequest#SecurityConfiguration
   */
  readonly securityConfiguration?: string;

  /**
   * @schema GlueCreateDevEndpointRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema GlueCreateDevEndpointRequest#Arguments
   */
  readonly arguments?: { [key: string]: string };

}

/**
 * Converts an object of type 'GlueCreateDevEndpointRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueCreateDevEndpointRequest(obj: GlueCreateDevEndpointRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndpointName': obj.endpointName,
    'RoleArn': obj.roleArn,
    'SecurityGroupIds': obj.securityGroupIds?.map(y => y),
    'SubnetId': obj.subnetId,
    'PublicKey': obj.publicKey,
    'PublicKeys': obj.publicKeys?.map(y => y),
    'NumberOfNodes': obj.numberOfNodes,
    'WorkerType': obj.workerType,
    'GlueVersion': obj.glueVersion,
    'NumberOfWorkers': obj.numberOfWorkers,
    'ExtraPythonLibsS3Path': obj.extraPythonLibsS3Path,
    'ExtraJarsS3Path': obj.extraJarsS3Path,
    'SecurityConfiguration': obj.securityConfiguration,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Arguments': ((obj.arguments) === undefined) ? undefined : (Object.entries(obj.arguments).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueCreateDevEndpointResponse
 */
export interface GlueCreateDevEndpointResponse {
  /**
   * @schema GlueCreateDevEndpointResponse#EndpointName
   */
  readonly endpointName?: string;

  /**
   * @schema GlueCreateDevEndpointResponse#Status
   */
  readonly status?: string;

  /**
   * @schema GlueCreateDevEndpointResponse#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema GlueCreateDevEndpointResponse#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema GlueCreateDevEndpointResponse#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema GlueCreateDevEndpointResponse#YarnEndpointAddress
   */
  readonly yarnEndpointAddress?: string;

  /**
   * @schema GlueCreateDevEndpointResponse#ZeppelinRemoteSparkInterpreterPort
   */
  readonly zeppelinRemoteSparkInterpreterPort?: number;

  /**
   * @schema GlueCreateDevEndpointResponse#NumberOfNodes
   */
  readonly numberOfNodes?: number;

  /**
   * @schema GlueCreateDevEndpointResponse#WorkerType
   */
  readonly workerType?: string;

  /**
   * @schema GlueCreateDevEndpointResponse#GlueVersion
   */
  readonly glueVersion?: string;

  /**
   * @schema GlueCreateDevEndpointResponse#NumberOfWorkers
   */
  readonly numberOfWorkers?: number;

  /**
   * @schema GlueCreateDevEndpointResponse#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema GlueCreateDevEndpointResponse#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema GlueCreateDevEndpointResponse#ExtraPythonLibsS3Path
   */
  readonly extraPythonLibsS3Path?: string;

  /**
   * @schema GlueCreateDevEndpointResponse#ExtraJarsS3Path
   */
  readonly extraJarsS3Path?: string;

  /**
   * @schema GlueCreateDevEndpointResponse#FailureReason
   */
  readonly failureReason?: string;

  /**
   * @schema GlueCreateDevEndpointResponse#SecurityConfiguration
   */
  readonly securityConfiguration?: string;

  /**
   * @schema GlueCreateDevEndpointResponse#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema GlueCreateDevEndpointResponse#Arguments
   */
  readonly arguments?: { [key: string]: string };

}

/**
 * Converts an object of type 'GlueCreateDevEndpointResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueCreateDevEndpointResponse(obj: GlueCreateDevEndpointResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndpointName': obj.endpointName,
    'Status': obj.status,
    'SecurityGroupIds': obj.securityGroupIds?.map(y => y),
    'SubnetId': obj.subnetId,
    'RoleArn': obj.roleArn,
    'YarnEndpointAddress': obj.yarnEndpointAddress,
    'ZeppelinRemoteSparkInterpreterPort': obj.zeppelinRemoteSparkInterpreterPort,
    'NumberOfNodes': obj.numberOfNodes,
    'WorkerType': obj.workerType,
    'GlueVersion': obj.glueVersion,
    'NumberOfWorkers': obj.numberOfWorkers,
    'AvailabilityZone': obj.availabilityZone,
    'VpcId': obj.vpcId,
    'ExtraPythonLibsS3Path': obj.extraPythonLibsS3Path,
    'ExtraJarsS3Path': obj.extraJarsS3Path,
    'FailureReason': obj.failureReason,
    'SecurityConfiguration': obj.securityConfiguration,
    'CreatedTimestamp': obj.createdTimestamp,
    'Arguments': ((obj.arguments) === undefined) ? undefined : (Object.entries(obj.arguments).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueCreateJobRequest
 */
export interface GlueCreateJobRequest {
  /**
   * @schema GlueCreateJobRequest#Name
   */
  readonly name?: string;

  /**
   * @schema GlueCreateJobRequest#Description
   */
  readonly description?: string;

  /**
   * @schema GlueCreateJobRequest#LogUri
   */
  readonly logUri?: string;

  /**
   * @schema GlueCreateJobRequest#Role
   */
  readonly role?: string;

  /**
   * @schema GlueCreateJobRequest#ExecutionProperty
   */
  readonly executionProperty?: GlueExecutionProperty;

  /**
   * @schema GlueCreateJobRequest#Command
   */
  readonly command?: GlueJobCommand;

  /**
   * @schema GlueCreateJobRequest#DefaultArguments
   */
  readonly defaultArguments?: { [key: string]: string };

  /**
   * @schema GlueCreateJobRequest#NonOverridableArguments
   */
  readonly nonOverridableArguments?: { [key: string]: string };

  /**
   * @schema GlueCreateJobRequest#Connections
   */
  readonly connections?: GlueConnectionsList;

  /**
   * @schema GlueCreateJobRequest#MaxRetries
   */
  readonly maxRetries?: number;

  /**
   * @schema GlueCreateJobRequest#AllocatedCapacity
   */
  readonly allocatedCapacity?: number;

  /**
   * @schema GlueCreateJobRequest#Timeout
   */
  readonly timeout?: number;

  /**
   * @schema GlueCreateJobRequest#MaxCapacity
   */
  readonly maxCapacity?: number;

  /**
   * @schema GlueCreateJobRequest#SecurityConfiguration
   */
  readonly securityConfiguration?: string;

  /**
   * @schema GlueCreateJobRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema GlueCreateJobRequest#NotificationProperty
   */
  readonly notificationProperty?: GlueNotificationProperty;

  /**
   * @schema GlueCreateJobRequest#GlueVersion
   */
  readonly glueVersion?: string;

  /**
   * @schema GlueCreateJobRequest#NumberOfWorkers
   */
  readonly numberOfWorkers?: number;

  /**
   * @schema GlueCreateJobRequest#WorkerType
   */
  readonly workerType?: string;

}

/**
 * Converts an object of type 'GlueCreateJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueCreateJobRequest(obj: GlueCreateJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Description': obj.description,
    'LogUri': obj.logUri,
    'Role': obj.role,
    'ExecutionProperty': toJson_GlueExecutionProperty(obj.executionProperty),
    'Command': toJson_GlueJobCommand(obj.command),
    'DefaultArguments': ((obj.defaultArguments) === undefined) ? undefined : (Object.entries(obj.defaultArguments).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'NonOverridableArguments': ((obj.nonOverridableArguments) === undefined) ? undefined : (Object.entries(obj.nonOverridableArguments).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Connections': toJson_GlueConnectionsList(obj.connections),
    'MaxRetries': obj.maxRetries,
    'AllocatedCapacity': obj.allocatedCapacity,
    'Timeout': obj.timeout,
    'MaxCapacity': obj.maxCapacity,
    'SecurityConfiguration': obj.securityConfiguration,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'NotificationProperty': toJson_GlueNotificationProperty(obj.notificationProperty),
    'GlueVersion': obj.glueVersion,
    'NumberOfWorkers': obj.numberOfWorkers,
    'WorkerType': obj.workerType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueCreateJobResponse
 */
export interface GlueCreateJobResponse {
  /**
   * @schema GlueCreateJobResponse#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'GlueCreateJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueCreateJobResponse(obj: GlueCreateJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueCreateMlTransformRequest
 */
export interface GlueCreateMlTransformRequest {
  /**
   * @schema GlueCreateMlTransformRequest#Name
   */
  readonly name?: string;

  /**
   * @schema GlueCreateMlTransformRequest#Description
   */
  readonly description?: string;

  /**
   * @schema GlueCreateMlTransformRequest#InputRecordTables
   */
  readonly inputRecordTables?: GlueGlueTable[];

  /**
   * @schema GlueCreateMlTransformRequest#Parameters
   */
  readonly parameters?: GlueTransformParameters;

  /**
   * @schema GlueCreateMlTransformRequest#Role
   */
  readonly role?: string;

  /**
   * @schema GlueCreateMlTransformRequest#GlueVersion
   */
  readonly glueVersion?: string;

  /**
   * @schema GlueCreateMlTransformRequest#MaxCapacity
   */
  readonly maxCapacity?: number;

  /**
   * @schema GlueCreateMlTransformRequest#WorkerType
   */
  readonly workerType?: string;

  /**
   * @schema GlueCreateMlTransformRequest#NumberOfWorkers
   */
  readonly numberOfWorkers?: number;

  /**
   * @schema GlueCreateMlTransformRequest#Timeout
   */
  readonly timeout?: number;

  /**
   * @schema GlueCreateMlTransformRequest#MaxRetries
   */
  readonly maxRetries?: number;

  /**
   * @schema GlueCreateMlTransformRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema GlueCreateMlTransformRequest#TransformEncryption
   */
  readonly transformEncryption?: GlueTransformEncryption;

}

/**
 * Converts an object of type 'GlueCreateMlTransformRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueCreateMlTransformRequest(obj: GlueCreateMlTransformRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Description': obj.description,
    'InputRecordTables': obj.inputRecordTables?.map(y => toJson_GlueGlueTable(y)),
    'Parameters': toJson_GlueTransformParameters(obj.parameters),
    'Role': obj.role,
    'GlueVersion': obj.glueVersion,
    'MaxCapacity': obj.maxCapacity,
    'WorkerType': obj.workerType,
    'NumberOfWorkers': obj.numberOfWorkers,
    'Timeout': obj.timeout,
    'MaxRetries': obj.maxRetries,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'TransformEncryption': toJson_GlueTransformEncryption(obj.transformEncryption),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueCreateMlTransformResponse
 */
export interface GlueCreateMlTransformResponse {
  /**
   * @schema GlueCreateMlTransformResponse#TransformId
   */
  readonly transformId?: string;

}

/**
 * Converts an object of type 'GlueCreateMlTransformResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueCreateMlTransformResponse(obj: GlueCreateMlTransformResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TransformId': obj.transformId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueCreatePartitionRequest
 */
export interface GlueCreatePartitionRequest {
  /**
   * @schema GlueCreatePartitionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueCreatePartitionRequest#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema GlueCreatePartitionRequest#TableName
   */
  readonly tableName?: string;

  /**
   * @schema GlueCreatePartitionRequest#PartitionInput
   */
  readonly partitionInput?: GluePartitionInput;

}

/**
 * Converts an object of type 'GlueCreatePartitionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueCreatePartitionRequest(obj: GlueCreatePartitionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'DatabaseName': obj.databaseName,
    'TableName': obj.tableName,
    'PartitionInput': toJson_GluePartitionInput(obj.partitionInput),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueCreatePartitionResponse
 */
export interface GlueCreatePartitionResponse {
}

/**
 * Converts an object of type 'GlueCreatePartitionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueCreatePartitionResponse(obj: GlueCreatePartitionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueCreatePartitionIndexRequest
 */
export interface GlueCreatePartitionIndexRequest {
  /**
   * @schema GlueCreatePartitionIndexRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueCreatePartitionIndexRequest#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema GlueCreatePartitionIndexRequest#TableName
   */
  readonly tableName?: string;

  /**
   * @schema GlueCreatePartitionIndexRequest#PartitionIndex
   */
  readonly partitionIndex?: GluePartitionIndex;

}

/**
 * Converts an object of type 'GlueCreatePartitionIndexRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueCreatePartitionIndexRequest(obj: GlueCreatePartitionIndexRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'DatabaseName': obj.databaseName,
    'TableName': obj.tableName,
    'PartitionIndex': toJson_GluePartitionIndex(obj.partitionIndex),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueCreatePartitionIndexResponse
 */
export interface GlueCreatePartitionIndexResponse {
}

/**
 * Converts an object of type 'GlueCreatePartitionIndexResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueCreatePartitionIndexResponse(obj: GlueCreatePartitionIndexResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueCreateRegistryInput
 */
export interface GlueCreateRegistryInput {
  /**
   * @schema GlueCreateRegistryInput#RegistryName
   */
  readonly registryName?: string;

  /**
   * @schema GlueCreateRegistryInput#Description
   */
  readonly description?: string;

  /**
   * @schema GlueCreateRegistryInput#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'GlueCreateRegistryInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueCreateRegistryInput(obj: GlueCreateRegistryInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegistryName': obj.registryName,
    'Description': obj.description,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueCreateRegistryResponse
 */
export interface GlueCreateRegistryResponse {
  /**
   * @schema GlueCreateRegistryResponse#RegistryArn
   */
  readonly registryArn?: string;

  /**
   * @schema GlueCreateRegistryResponse#RegistryName
   */
  readonly registryName?: string;

  /**
   * @schema GlueCreateRegistryResponse#Description
   */
  readonly description?: string;

  /**
   * @schema GlueCreateRegistryResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'GlueCreateRegistryResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueCreateRegistryResponse(obj: GlueCreateRegistryResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegistryArn': obj.registryArn,
    'RegistryName': obj.registryName,
    'Description': obj.description,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueCreateSchemaInput
 */
export interface GlueCreateSchemaInput {
  /**
   * @schema GlueCreateSchemaInput#RegistryId
   */
  readonly registryId?: GlueRegistryId;

  /**
   * @schema GlueCreateSchemaInput#SchemaName
   */
  readonly schemaName?: string;

  /**
   * @schema GlueCreateSchemaInput#DataFormat
   */
  readonly dataFormat?: string;

  /**
   * @schema GlueCreateSchemaInput#Compatibility
   */
  readonly compatibility?: string;

  /**
   * @schema GlueCreateSchemaInput#Description
   */
  readonly description?: string;

  /**
   * @schema GlueCreateSchemaInput#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema GlueCreateSchemaInput#SchemaDefinition
   */
  readonly schemaDefinition?: string;

}

/**
 * Converts an object of type 'GlueCreateSchemaInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueCreateSchemaInput(obj: GlueCreateSchemaInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegistryId': toJson_GlueRegistryId(obj.registryId),
    'SchemaName': obj.schemaName,
    'DataFormat': obj.dataFormat,
    'Compatibility': obj.compatibility,
    'Description': obj.description,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'SchemaDefinition': obj.schemaDefinition,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueCreateSchemaResponse
 */
export interface GlueCreateSchemaResponse {
  /**
   * @schema GlueCreateSchemaResponse#RegistryName
   */
  readonly registryName?: string;

  /**
   * @schema GlueCreateSchemaResponse#RegistryArn
   */
  readonly registryArn?: string;

  /**
   * @schema GlueCreateSchemaResponse#SchemaName
   */
  readonly schemaName?: string;

  /**
   * @schema GlueCreateSchemaResponse#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema GlueCreateSchemaResponse#Description
   */
  readonly description?: string;

  /**
   * @schema GlueCreateSchemaResponse#DataFormat
   */
  readonly dataFormat?: string;

  /**
   * @schema GlueCreateSchemaResponse#Compatibility
   */
  readonly compatibility?: string;

  /**
   * @schema GlueCreateSchemaResponse#SchemaCheckpoint
   */
  readonly schemaCheckpoint?: number;

  /**
   * @schema GlueCreateSchemaResponse#LatestSchemaVersion
   */
  readonly latestSchemaVersion?: number;

  /**
   * @schema GlueCreateSchemaResponse#NextSchemaVersion
   */
  readonly nextSchemaVersion?: number;

  /**
   * @schema GlueCreateSchemaResponse#SchemaStatus
   */
  readonly schemaStatus?: string;

  /**
   * @schema GlueCreateSchemaResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema GlueCreateSchemaResponse#SchemaVersionId
   */
  readonly schemaVersionId?: string;

  /**
   * @schema GlueCreateSchemaResponse#SchemaVersionStatus
   */
  readonly schemaVersionStatus?: string;

}

/**
 * Converts an object of type 'GlueCreateSchemaResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueCreateSchemaResponse(obj: GlueCreateSchemaResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegistryName': obj.registryName,
    'RegistryArn': obj.registryArn,
    'SchemaName': obj.schemaName,
    'SchemaArn': obj.schemaArn,
    'Description': obj.description,
    'DataFormat': obj.dataFormat,
    'Compatibility': obj.compatibility,
    'SchemaCheckpoint': obj.schemaCheckpoint,
    'LatestSchemaVersion': obj.latestSchemaVersion,
    'NextSchemaVersion': obj.nextSchemaVersion,
    'SchemaStatus': obj.schemaStatus,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'SchemaVersionId': obj.schemaVersionId,
    'SchemaVersionStatus': obj.schemaVersionStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueCreateScriptRequest
 */
export interface GlueCreateScriptRequest {
  /**
   * @schema GlueCreateScriptRequest#DagNodes
   */
  readonly dagNodes?: GlueCodeGenNode[];

  /**
   * @schema GlueCreateScriptRequest#DagEdges
   */
  readonly dagEdges?: GlueCodeGenEdge[];

  /**
   * @schema GlueCreateScriptRequest#Language
   */
  readonly language?: string;

}

/**
 * Converts an object of type 'GlueCreateScriptRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueCreateScriptRequest(obj: GlueCreateScriptRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DagNodes': obj.dagNodes?.map(y => toJson_GlueCodeGenNode(y)),
    'DagEdges': obj.dagEdges?.map(y => toJson_GlueCodeGenEdge(y)),
    'Language': obj.language,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueCreateScriptResponse
 */
export interface GlueCreateScriptResponse {
  /**
   * @schema GlueCreateScriptResponse#PythonScript
   */
  readonly pythonScript?: string;

  /**
   * @schema GlueCreateScriptResponse#ScalaCode
   */
  readonly scalaCode?: string;

}

/**
 * Converts an object of type 'GlueCreateScriptResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueCreateScriptResponse(obj: GlueCreateScriptResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PythonScript': obj.pythonScript,
    'ScalaCode': obj.scalaCode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueCreateSecurityConfigurationRequest
 */
export interface GlueCreateSecurityConfigurationRequest {
  /**
   * @schema GlueCreateSecurityConfigurationRequest#Name
   */
  readonly name?: string;

  /**
   * @schema GlueCreateSecurityConfigurationRequest#EncryptionConfiguration
   */
  readonly encryptionConfiguration?: GlueEncryptionConfiguration;

}

/**
 * Converts an object of type 'GlueCreateSecurityConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueCreateSecurityConfigurationRequest(obj: GlueCreateSecurityConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'EncryptionConfiguration': toJson_GlueEncryptionConfiguration(obj.encryptionConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueCreateSecurityConfigurationResponse
 */
export interface GlueCreateSecurityConfigurationResponse {
  /**
   * @schema GlueCreateSecurityConfigurationResponse#Name
   */
  readonly name?: string;

  /**
   * @schema GlueCreateSecurityConfigurationResponse#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

}

/**
 * Converts an object of type 'GlueCreateSecurityConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueCreateSecurityConfigurationResponse(obj: GlueCreateSecurityConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'CreatedTimestamp': obj.createdTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueCreateTableRequest
 */
export interface GlueCreateTableRequest {
  /**
   * @schema GlueCreateTableRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueCreateTableRequest#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema GlueCreateTableRequest#TableInput
   */
  readonly tableInput?: GlueTableInput;

  /**
   * @schema GlueCreateTableRequest#PartitionIndexes
   */
  readonly partitionIndexes?: GluePartitionIndex[];

}

/**
 * Converts an object of type 'GlueCreateTableRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueCreateTableRequest(obj: GlueCreateTableRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'DatabaseName': obj.databaseName,
    'TableInput': toJson_GlueTableInput(obj.tableInput),
    'PartitionIndexes': obj.partitionIndexes?.map(y => toJson_GluePartitionIndex(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueCreateTableResponse
 */
export interface GlueCreateTableResponse {
}

/**
 * Converts an object of type 'GlueCreateTableResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueCreateTableResponse(obj: GlueCreateTableResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueCreateTriggerRequest
 */
export interface GlueCreateTriggerRequest {
  /**
   * @schema GlueCreateTriggerRequest#Name
   */
  readonly name?: string;

  /**
   * @schema GlueCreateTriggerRequest#WorkflowName
   */
  readonly workflowName?: string;

  /**
   * @schema GlueCreateTriggerRequest#Type
   */
  readonly type?: string;

  /**
   * @schema GlueCreateTriggerRequest#Schedule
   */
  readonly schedule?: string;

  /**
   * @schema GlueCreateTriggerRequest#Predicate
   */
  readonly predicate?: GluePredicate;

  /**
   * @schema GlueCreateTriggerRequest#Actions
   */
  readonly actions?: GlueAction[];

  /**
   * @schema GlueCreateTriggerRequest#Description
   */
  readonly description?: string;

  /**
   * @schema GlueCreateTriggerRequest#StartOnCreation
   */
  readonly startOnCreation?: boolean;

  /**
   * @schema GlueCreateTriggerRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema GlueCreateTriggerRequest#EventBatchingCondition
   */
  readonly eventBatchingCondition?: GlueEventBatchingCondition;

}

/**
 * Converts an object of type 'GlueCreateTriggerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueCreateTriggerRequest(obj: GlueCreateTriggerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'WorkflowName': obj.workflowName,
    'Type': obj.type,
    'Schedule': obj.schedule,
    'Predicate': toJson_GluePredicate(obj.predicate),
    'Actions': obj.actions?.map(y => toJson_GlueAction(y)),
    'Description': obj.description,
    'StartOnCreation': obj.startOnCreation,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'EventBatchingCondition': toJson_GlueEventBatchingCondition(obj.eventBatchingCondition),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueCreateTriggerResponse
 */
export interface GlueCreateTriggerResponse {
  /**
   * @schema GlueCreateTriggerResponse#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'GlueCreateTriggerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueCreateTriggerResponse(obj: GlueCreateTriggerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueCreateUserDefinedFunctionRequest
 */
export interface GlueCreateUserDefinedFunctionRequest {
  /**
   * @schema GlueCreateUserDefinedFunctionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueCreateUserDefinedFunctionRequest#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema GlueCreateUserDefinedFunctionRequest#FunctionInput
   */
  readonly functionInput?: GlueUserDefinedFunctionInput;

}

/**
 * Converts an object of type 'GlueCreateUserDefinedFunctionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueCreateUserDefinedFunctionRequest(obj: GlueCreateUserDefinedFunctionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'DatabaseName': obj.databaseName,
    'FunctionInput': toJson_GlueUserDefinedFunctionInput(obj.functionInput),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueCreateUserDefinedFunctionResponse
 */
export interface GlueCreateUserDefinedFunctionResponse {
}

/**
 * Converts an object of type 'GlueCreateUserDefinedFunctionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueCreateUserDefinedFunctionResponse(obj: GlueCreateUserDefinedFunctionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueCreateWorkflowRequest
 */
export interface GlueCreateWorkflowRequest {
  /**
   * @schema GlueCreateWorkflowRequest#Name
   */
  readonly name?: string;

  /**
   * @schema GlueCreateWorkflowRequest#Description
   */
  readonly description?: string;

  /**
   * @schema GlueCreateWorkflowRequest#DefaultRunProperties
   */
  readonly defaultRunProperties?: { [key: string]: string };

  /**
   * @schema GlueCreateWorkflowRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema GlueCreateWorkflowRequest#MaxConcurrentRuns
   */
  readonly maxConcurrentRuns?: number;

}

/**
 * Converts an object of type 'GlueCreateWorkflowRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueCreateWorkflowRequest(obj: GlueCreateWorkflowRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Description': obj.description,
    'DefaultRunProperties': ((obj.defaultRunProperties) === undefined) ? undefined : (Object.entries(obj.defaultRunProperties).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'MaxConcurrentRuns': obj.maxConcurrentRuns,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueCreateWorkflowResponse
 */
export interface GlueCreateWorkflowResponse {
  /**
   * @schema GlueCreateWorkflowResponse#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'GlueCreateWorkflowResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueCreateWorkflowResponse(obj: GlueCreateWorkflowResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueDeleteClassifierRequest
 */
export interface GlueDeleteClassifierRequest {
  /**
   * @schema GlueDeleteClassifierRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'GlueDeleteClassifierRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueDeleteClassifierRequest(obj: GlueDeleteClassifierRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueDeleteClassifierResponse
 */
export interface GlueDeleteClassifierResponse {
}

/**
 * Converts an object of type 'GlueDeleteClassifierResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueDeleteClassifierResponse(obj: GlueDeleteClassifierResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueDeleteColumnStatisticsForPartitionRequest
 */
export interface GlueDeleteColumnStatisticsForPartitionRequest {
  /**
   * @schema GlueDeleteColumnStatisticsForPartitionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueDeleteColumnStatisticsForPartitionRequest#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema GlueDeleteColumnStatisticsForPartitionRequest#TableName
   */
  readonly tableName?: string;

  /**
   * @schema GlueDeleteColumnStatisticsForPartitionRequest#PartitionValues
   */
  readonly partitionValues?: string[];

  /**
   * @schema GlueDeleteColumnStatisticsForPartitionRequest#ColumnName
   */
  readonly columnName?: string;

}

/**
 * Converts an object of type 'GlueDeleteColumnStatisticsForPartitionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueDeleteColumnStatisticsForPartitionRequest(obj: GlueDeleteColumnStatisticsForPartitionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'DatabaseName': obj.databaseName,
    'TableName': obj.tableName,
    'PartitionValues': obj.partitionValues?.map(y => y),
    'ColumnName': obj.columnName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueDeleteColumnStatisticsForPartitionResponse
 */
export interface GlueDeleteColumnStatisticsForPartitionResponse {
}

/**
 * Converts an object of type 'GlueDeleteColumnStatisticsForPartitionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueDeleteColumnStatisticsForPartitionResponse(obj: GlueDeleteColumnStatisticsForPartitionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueDeleteColumnStatisticsForTableRequest
 */
export interface GlueDeleteColumnStatisticsForTableRequest {
  /**
   * @schema GlueDeleteColumnStatisticsForTableRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueDeleteColumnStatisticsForTableRequest#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema GlueDeleteColumnStatisticsForTableRequest#TableName
   */
  readonly tableName?: string;

  /**
   * @schema GlueDeleteColumnStatisticsForTableRequest#ColumnName
   */
  readonly columnName?: string;

}

/**
 * Converts an object of type 'GlueDeleteColumnStatisticsForTableRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueDeleteColumnStatisticsForTableRequest(obj: GlueDeleteColumnStatisticsForTableRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'DatabaseName': obj.databaseName,
    'TableName': obj.tableName,
    'ColumnName': obj.columnName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueDeleteColumnStatisticsForTableResponse
 */
export interface GlueDeleteColumnStatisticsForTableResponse {
}

/**
 * Converts an object of type 'GlueDeleteColumnStatisticsForTableResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueDeleteColumnStatisticsForTableResponse(obj: GlueDeleteColumnStatisticsForTableResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueDeleteConnectionRequest
 */
export interface GlueDeleteConnectionRequest {
  /**
   * @schema GlueDeleteConnectionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueDeleteConnectionRequest#ConnectionName
   */
  readonly connectionName?: string;

}

/**
 * Converts an object of type 'GlueDeleteConnectionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueDeleteConnectionRequest(obj: GlueDeleteConnectionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'ConnectionName': obj.connectionName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueDeleteConnectionResponse
 */
export interface GlueDeleteConnectionResponse {
}

/**
 * Converts an object of type 'GlueDeleteConnectionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueDeleteConnectionResponse(obj: GlueDeleteConnectionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueDeleteCrawlerRequest
 */
export interface GlueDeleteCrawlerRequest {
  /**
   * @schema GlueDeleteCrawlerRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'GlueDeleteCrawlerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueDeleteCrawlerRequest(obj: GlueDeleteCrawlerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueDeleteCrawlerResponse
 */
export interface GlueDeleteCrawlerResponse {
}

/**
 * Converts an object of type 'GlueDeleteCrawlerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueDeleteCrawlerResponse(obj: GlueDeleteCrawlerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueDeleteDatabaseRequest
 */
export interface GlueDeleteDatabaseRequest {
  /**
   * @schema GlueDeleteDatabaseRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueDeleteDatabaseRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'GlueDeleteDatabaseRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueDeleteDatabaseRequest(obj: GlueDeleteDatabaseRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueDeleteDatabaseResponse
 */
export interface GlueDeleteDatabaseResponse {
}

/**
 * Converts an object of type 'GlueDeleteDatabaseResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueDeleteDatabaseResponse(obj: GlueDeleteDatabaseResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueDeleteDevEndpointRequest
 */
export interface GlueDeleteDevEndpointRequest {
  /**
   * @schema GlueDeleteDevEndpointRequest#EndpointName
   */
  readonly endpointName?: string;

}

/**
 * Converts an object of type 'GlueDeleteDevEndpointRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueDeleteDevEndpointRequest(obj: GlueDeleteDevEndpointRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndpointName': obj.endpointName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueDeleteDevEndpointResponse
 */
export interface GlueDeleteDevEndpointResponse {
}

/**
 * Converts an object of type 'GlueDeleteDevEndpointResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueDeleteDevEndpointResponse(obj: GlueDeleteDevEndpointResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueDeleteJobRequest
 */
export interface GlueDeleteJobRequest {
  /**
   * @schema GlueDeleteJobRequest#JobName
   */
  readonly jobName?: string;

}

/**
 * Converts an object of type 'GlueDeleteJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueDeleteJobRequest(obj: GlueDeleteJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobName': obj.jobName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueDeleteJobResponse
 */
export interface GlueDeleteJobResponse {
  /**
   * @schema GlueDeleteJobResponse#JobName
   */
  readonly jobName?: string;

}

/**
 * Converts an object of type 'GlueDeleteJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueDeleteJobResponse(obj: GlueDeleteJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobName': obj.jobName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueDeleteMlTransformRequest
 */
export interface GlueDeleteMlTransformRequest {
  /**
   * @schema GlueDeleteMlTransformRequest#TransformId
   */
  readonly transformId?: string;

}

/**
 * Converts an object of type 'GlueDeleteMlTransformRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueDeleteMlTransformRequest(obj: GlueDeleteMlTransformRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TransformId': obj.transformId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueDeleteMlTransformResponse
 */
export interface GlueDeleteMlTransformResponse {
  /**
   * @schema GlueDeleteMlTransformResponse#TransformId
   */
  readonly transformId?: string;

}

/**
 * Converts an object of type 'GlueDeleteMlTransformResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueDeleteMlTransformResponse(obj: GlueDeleteMlTransformResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TransformId': obj.transformId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueDeletePartitionRequest
 */
export interface GlueDeletePartitionRequest {
  /**
   * @schema GlueDeletePartitionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueDeletePartitionRequest#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema GlueDeletePartitionRequest#TableName
   */
  readonly tableName?: string;

  /**
   * @schema GlueDeletePartitionRequest#PartitionValues
   */
  readonly partitionValues?: string[];

}

/**
 * Converts an object of type 'GlueDeletePartitionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueDeletePartitionRequest(obj: GlueDeletePartitionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'DatabaseName': obj.databaseName,
    'TableName': obj.tableName,
    'PartitionValues': obj.partitionValues?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueDeletePartitionResponse
 */
export interface GlueDeletePartitionResponse {
}

/**
 * Converts an object of type 'GlueDeletePartitionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueDeletePartitionResponse(obj: GlueDeletePartitionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueDeletePartitionIndexRequest
 */
export interface GlueDeletePartitionIndexRequest {
  /**
   * @schema GlueDeletePartitionIndexRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueDeletePartitionIndexRequest#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema GlueDeletePartitionIndexRequest#TableName
   */
  readonly tableName?: string;

  /**
   * @schema GlueDeletePartitionIndexRequest#IndexName
   */
  readonly indexName?: string;

}

/**
 * Converts an object of type 'GlueDeletePartitionIndexRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueDeletePartitionIndexRequest(obj: GlueDeletePartitionIndexRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'DatabaseName': obj.databaseName,
    'TableName': obj.tableName,
    'IndexName': obj.indexName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueDeletePartitionIndexResponse
 */
export interface GlueDeletePartitionIndexResponse {
}

/**
 * Converts an object of type 'GlueDeletePartitionIndexResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueDeletePartitionIndexResponse(obj: GlueDeletePartitionIndexResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueDeleteRegistryInput
 */
export interface GlueDeleteRegistryInput {
  /**
   * @schema GlueDeleteRegistryInput#RegistryId
   */
  readonly registryId?: GlueRegistryId;

}

/**
 * Converts an object of type 'GlueDeleteRegistryInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueDeleteRegistryInput(obj: GlueDeleteRegistryInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegistryId': toJson_GlueRegistryId(obj.registryId),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueDeleteRegistryResponse
 */
export interface GlueDeleteRegistryResponse {
  /**
   * @schema GlueDeleteRegistryResponse#RegistryName
   */
  readonly registryName?: string;

  /**
   * @schema GlueDeleteRegistryResponse#RegistryArn
   */
  readonly registryArn?: string;

  /**
   * @schema GlueDeleteRegistryResponse#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'GlueDeleteRegistryResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueDeleteRegistryResponse(obj: GlueDeleteRegistryResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegistryName': obj.registryName,
    'RegistryArn': obj.registryArn,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueDeleteResourcePolicyRequest
 */
export interface GlueDeleteResourcePolicyRequest {
  /**
   * @schema GlueDeleteResourcePolicyRequest#PolicyHashCondition
   */
  readonly policyHashCondition?: string;

  /**
   * @schema GlueDeleteResourcePolicyRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'GlueDeleteResourcePolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueDeleteResourcePolicyRequest(obj: GlueDeleteResourcePolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyHashCondition': obj.policyHashCondition,
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueDeleteResourcePolicyResponse
 */
export interface GlueDeleteResourcePolicyResponse {
}

/**
 * Converts an object of type 'GlueDeleteResourcePolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueDeleteResourcePolicyResponse(obj: GlueDeleteResourcePolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueDeleteSchemaInput
 */
export interface GlueDeleteSchemaInput {
  /**
   * @schema GlueDeleteSchemaInput#SchemaId
   */
  readonly schemaId?: GlueSchemaId;

}

/**
 * Converts an object of type 'GlueDeleteSchemaInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueDeleteSchemaInput(obj: GlueDeleteSchemaInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SchemaId': toJson_GlueSchemaId(obj.schemaId),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueDeleteSchemaResponse
 */
export interface GlueDeleteSchemaResponse {
  /**
   * @schema GlueDeleteSchemaResponse#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema GlueDeleteSchemaResponse#SchemaName
   */
  readonly schemaName?: string;

  /**
   * @schema GlueDeleteSchemaResponse#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'GlueDeleteSchemaResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueDeleteSchemaResponse(obj: GlueDeleteSchemaResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SchemaArn': obj.schemaArn,
    'SchemaName': obj.schemaName,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueDeleteSchemaVersionsInput
 */
export interface GlueDeleteSchemaVersionsInput {
  /**
   * @schema GlueDeleteSchemaVersionsInput#SchemaId
   */
  readonly schemaId?: GlueSchemaId;

  /**
   * @schema GlueDeleteSchemaVersionsInput#Versions
   */
  readonly versions?: string;

}

/**
 * Converts an object of type 'GlueDeleteSchemaVersionsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueDeleteSchemaVersionsInput(obj: GlueDeleteSchemaVersionsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SchemaId': toJson_GlueSchemaId(obj.schemaId),
    'Versions': obj.versions,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueDeleteSchemaVersionsResponse
 */
export interface GlueDeleteSchemaVersionsResponse {
  /**
   * @schema GlueDeleteSchemaVersionsResponse#SchemaVersionErrors
   */
  readonly schemaVersionErrors?: GlueSchemaVersionErrorItem[];

}

/**
 * Converts an object of type 'GlueDeleteSchemaVersionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueDeleteSchemaVersionsResponse(obj: GlueDeleteSchemaVersionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SchemaVersionErrors': obj.schemaVersionErrors?.map(y => toJson_GlueSchemaVersionErrorItem(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueDeleteSecurityConfigurationRequest
 */
export interface GlueDeleteSecurityConfigurationRequest {
  /**
   * @schema GlueDeleteSecurityConfigurationRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'GlueDeleteSecurityConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueDeleteSecurityConfigurationRequest(obj: GlueDeleteSecurityConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueDeleteSecurityConfigurationResponse
 */
export interface GlueDeleteSecurityConfigurationResponse {
}

/**
 * Converts an object of type 'GlueDeleteSecurityConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueDeleteSecurityConfigurationResponse(obj: GlueDeleteSecurityConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueDeleteTableRequest
 */
export interface GlueDeleteTableRequest {
  /**
   * @schema GlueDeleteTableRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueDeleteTableRequest#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema GlueDeleteTableRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'GlueDeleteTableRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueDeleteTableRequest(obj: GlueDeleteTableRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'DatabaseName': obj.databaseName,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueDeleteTableResponse
 */
export interface GlueDeleteTableResponse {
}

/**
 * Converts an object of type 'GlueDeleteTableResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueDeleteTableResponse(obj: GlueDeleteTableResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueDeleteTableVersionRequest
 */
export interface GlueDeleteTableVersionRequest {
  /**
   * @schema GlueDeleteTableVersionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueDeleteTableVersionRequest#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema GlueDeleteTableVersionRequest#TableName
   */
  readonly tableName?: string;

  /**
   * @schema GlueDeleteTableVersionRequest#VersionId
   */
  readonly versionId?: string;

}

/**
 * Converts an object of type 'GlueDeleteTableVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueDeleteTableVersionRequest(obj: GlueDeleteTableVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'DatabaseName': obj.databaseName,
    'TableName': obj.tableName,
    'VersionId': obj.versionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueDeleteTableVersionResponse
 */
export interface GlueDeleteTableVersionResponse {
}

/**
 * Converts an object of type 'GlueDeleteTableVersionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueDeleteTableVersionResponse(obj: GlueDeleteTableVersionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueDeleteTriggerRequest
 */
export interface GlueDeleteTriggerRequest {
  /**
   * @schema GlueDeleteTriggerRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'GlueDeleteTriggerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueDeleteTriggerRequest(obj: GlueDeleteTriggerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueDeleteTriggerResponse
 */
export interface GlueDeleteTriggerResponse {
  /**
   * @schema GlueDeleteTriggerResponse#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'GlueDeleteTriggerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueDeleteTriggerResponse(obj: GlueDeleteTriggerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueDeleteUserDefinedFunctionRequest
 */
export interface GlueDeleteUserDefinedFunctionRequest {
  /**
   * @schema GlueDeleteUserDefinedFunctionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueDeleteUserDefinedFunctionRequest#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema GlueDeleteUserDefinedFunctionRequest#FunctionName
   */
  readonly functionName?: string;

}

/**
 * Converts an object of type 'GlueDeleteUserDefinedFunctionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueDeleteUserDefinedFunctionRequest(obj: GlueDeleteUserDefinedFunctionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'DatabaseName': obj.databaseName,
    'FunctionName': obj.functionName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueDeleteUserDefinedFunctionResponse
 */
export interface GlueDeleteUserDefinedFunctionResponse {
}

/**
 * Converts an object of type 'GlueDeleteUserDefinedFunctionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueDeleteUserDefinedFunctionResponse(obj: GlueDeleteUserDefinedFunctionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueDeleteWorkflowRequest
 */
export interface GlueDeleteWorkflowRequest {
  /**
   * @schema GlueDeleteWorkflowRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'GlueDeleteWorkflowRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueDeleteWorkflowRequest(obj: GlueDeleteWorkflowRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueDeleteWorkflowResponse
 */
export interface GlueDeleteWorkflowResponse {
  /**
   * @schema GlueDeleteWorkflowResponse#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'GlueDeleteWorkflowResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueDeleteWorkflowResponse(obj: GlueDeleteWorkflowResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetCatalogImportStatusRequest
 */
export interface GlueGetCatalogImportStatusRequest {
  /**
   * @schema GlueGetCatalogImportStatusRequest#CatalogId
   */
  readonly catalogId?: string;

}

/**
 * Converts an object of type 'GlueGetCatalogImportStatusRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetCatalogImportStatusRequest(obj: GlueGetCatalogImportStatusRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetCatalogImportStatusResponse
 */
export interface GlueGetCatalogImportStatusResponse {
  /**
   * @schema GlueGetCatalogImportStatusResponse#ImportStatus
   */
  readonly importStatus?: GlueCatalogImportStatus;

}

/**
 * Converts an object of type 'GlueGetCatalogImportStatusResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetCatalogImportStatusResponse(obj: GlueGetCatalogImportStatusResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ImportStatus': toJson_GlueCatalogImportStatus(obj.importStatus),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetClassifierRequest
 */
export interface GlueGetClassifierRequest {
  /**
   * @schema GlueGetClassifierRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'GlueGetClassifierRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetClassifierRequest(obj: GlueGetClassifierRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetClassifierResponse
 */
export interface GlueGetClassifierResponse {
  /**
   * @schema GlueGetClassifierResponse#Classifier
   */
  readonly classifier?: GlueClassifier;

}

/**
 * Converts an object of type 'GlueGetClassifierResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetClassifierResponse(obj: GlueGetClassifierResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Classifier': toJson_GlueClassifier(obj.classifier),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetClassifiersRequest
 */
export interface GlueGetClassifiersRequest {
  /**
   * @schema GlueGetClassifiersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GlueGetClassifiersRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GlueGetClassifiersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetClassifiersRequest(obj: GlueGetClassifiersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetClassifiersResponse
 */
export interface GlueGetClassifiersResponse {
  /**
   * @schema GlueGetClassifiersResponse#Classifiers
   */
  readonly classifiers?: GlueClassifier[];

  /**
   * @schema GlueGetClassifiersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GlueGetClassifiersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetClassifiersResponse(obj: GlueGetClassifiersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Classifiers': obj.classifiers?.map(y => toJson_GlueClassifier(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetColumnStatisticsForPartitionRequest
 */
export interface GlueGetColumnStatisticsForPartitionRequest {
  /**
   * @schema GlueGetColumnStatisticsForPartitionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueGetColumnStatisticsForPartitionRequest#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema GlueGetColumnStatisticsForPartitionRequest#TableName
   */
  readonly tableName?: string;

  /**
   * @schema GlueGetColumnStatisticsForPartitionRequest#PartitionValues
   */
  readonly partitionValues?: string[];

  /**
   * @schema GlueGetColumnStatisticsForPartitionRequest#ColumnNames
   */
  readonly columnNames?: string[];

}

/**
 * Converts an object of type 'GlueGetColumnStatisticsForPartitionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetColumnStatisticsForPartitionRequest(obj: GlueGetColumnStatisticsForPartitionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'DatabaseName': obj.databaseName,
    'TableName': obj.tableName,
    'PartitionValues': obj.partitionValues?.map(y => y),
    'ColumnNames': obj.columnNames?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetColumnStatisticsForPartitionResponse
 */
export interface GlueGetColumnStatisticsForPartitionResponse {
  /**
   * @schema GlueGetColumnStatisticsForPartitionResponse#ColumnStatisticsList
   */
  readonly columnStatisticsList?: GlueColumnStatistics[];

  /**
   * @schema GlueGetColumnStatisticsForPartitionResponse#Errors
   */
  readonly errors?: GlueColumnError[];

}

/**
 * Converts an object of type 'GlueGetColumnStatisticsForPartitionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetColumnStatisticsForPartitionResponse(obj: GlueGetColumnStatisticsForPartitionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ColumnStatisticsList': obj.columnStatisticsList?.map(y => toJson_GlueColumnStatistics(y)),
    'Errors': obj.errors?.map(y => toJson_GlueColumnError(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetColumnStatisticsForTableRequest
 */
export interface GlueGetColumnStatisticsForTableRequest {
  /**
   * @schema GlueGetColumnStatisticsForTableRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueGetColumnStatisticsForTableRequest#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema GlueGetColumnStatisticsForTableRequest#TableName
   */
  readonly tableName?: string;

  /**
   * @schema GlueGetColumnStatisticsForTableRequest#ColumnNames
   */
  readonly columnNames?: string[];

}

/**
 * Converts an object of type 'GlueGetColumnStatisticsForTableRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetColumnStatisticsForTableRequest(obj: GlueGetColumnStatisticsForTableRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'DatabaseName': obj.databaseName,
    'TableName': obj.tableName,
    'ColumnNames': obj.columnNames?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetColumnStatisticsForTableResponse
 */
export interface GlueGetColumnStatisticsForTableResponse {
  /**
   * @schema GlueGetColumnStatisticsForTableResponse#ColumnStatisticsList
   */
  readonly columnStatisticsList?: GlueColumnStatistics[];

  /**
   * @schema GlueGetColumnStatisticsForTableResponse#Errors
   */
  readonly errors?: GlueColumnError[];

}

/**
 * Converts an object of type 'GlueGetColumnStatisticsForTableResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetColumnStatisticsForTableResponse(obj: GlueGetColumnStatisticsForTableResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ColumnStatisticsList': obj.columnStatisticsList?.map(y => toJson_GlueColumnStatistics(y)),
    'Errors': obj.errors?.map(y => toJson_GlueColumnError(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetConnectionRequest
 */
export interface GlueGetConnectionRequest {
  /**
   * @schema GlueGetConnectionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueGetConnectionRequest#Name
   */
  readonly name?: string;

  /**
   * @schema GlueGetConnectionRequest#HidePassword
   */
  readonly hidePassword?: boolean;

}

/**
 * Converts an object of type 'GlueGetConnectionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetConnectionRequest(obj: GlueGetConnectionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'Name': obj.name,
    'HidePassword': obj.hidePassword,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetConnectionResponse
 */
export interface GlueGetConnectionResponse {
  /**
   * @schema GlueGetConnectionResponse#Connection
   */
  readonly connection?: GlueConnection;

}

/**
 * Converts an object of type 'GlueGetConnectionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetConnectionResponse(obj: GlueGetConnectionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Connection': toJson_GlueConnection(obj.connection),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetConnectionsRequest
 */
export interface GlueGetConnectionsRequest {
  /**
   * @schema GlueGetConnectionsRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueGetConnectionsRequest#Filter
   */
  readonly filter?: GlueGetConnectionsFilter;

  /**
   * @schema GlueGetConnectionsRequest#HidePassword
   */
  readonly hidePassword?: boolean;

  /**
   * @schema GlueGetConnectionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GlueGetConnectionsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'GlueGetConnectionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetConnectionsRequest(obj: GlueGetConnectionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'Filter': toJson_GlueGetConnectionsFilter(obj.filter),
    'HidePassword': obj.hidePassword,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetConnectionsResponse
 */
export interface GlueGetConnectionsResponse {
  /**
   * @schema GlueGetConnectionsResponse#ConnectionList
   */
  readonly connectionList?: GlueConnection[];

  /**
   * @schema GlueGetConnectionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GlueGetConnectionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetConnectionsResponse(obj: GlueGetConnectionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConnectionList': obj.connectionList?.map(y => toJson_GlueConnection(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetCrawlerRequest
 */
export interface GlueGetCrawlerRequest {
  /**
   * @schema GlueGetCrawlerRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'GlueGetCrawlerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetCrawlerRequest(obj: GlueGetCrawlerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetCrawlerResponse
 */
export interface GlueGetCrawlerResponse {
  /**
   * @schema GlueGetCrawlerResponse#Crawler
   */
  readonly crawler?: GlueCrawler;

}

/**
 * Converts an object of type 'GlueGetCrawlerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetCrawlerResponse(obj: GlueGetCrawlerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Crawler': toJson_GlueCrawler(obj.crawler),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetCrawlerMetricsRequest
 */
export interface GlueGetCrawlerMetricsRequest {
  /**
   * @schema GlueGetCrawlerMetricsRequest#CrawlerNameList
   */
  readonly crawlerNameList?: string[];

  /**
   * @schema GlueGetCrawlerMetricsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GlueGetCrawlerMetricsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GlueGetCrawlerMetricsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetCrawlerMetricsRequest(obj: GlueGetCrawlerMetricsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CrawlerNameList': obj.crawlerNameList?.map(y => y),
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetCrawlerMetricsResponse
 */
export interface GlueGetCrawlerMetricsResponse {
  /**
   * @schema GlueGetCrawlerMetricsResponse#CrawlerMetricsList
   */
  readonly crawlerMetricsList?: GlueCrawlerMetrics[];

  /**
   * @schema GlueGetCrawlerMetricsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GlueGetCrawlerMetricsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetCrawlerMetricsResponse(obj: GlueGetCrawlerMetricsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CrawlerMetricsList': obj.crawlerMetricsList?.map(y => toJson_GlueCrawlerMetrics(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetCrawlersRequest
 */
export interface GlueGetCrawlersRequest {
  /**
   * @schema GlueGetCrawlersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GlueGetCrawlersRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GlueGetCrawlersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetCrawlersRequest(obj: GlueGetCrawlersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetCrawlersResponse
 */
export interface GlueGetCrawlersResponse {
  /**
   * @schema GlueGetCrawlersResponse#Crawlers
   */
  readonly crawlers?: GlueCrawler[];

  /**
   * @schema GlueGetCrawlersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GlueGetCrawlersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetCrawlersResponse(obj: GlueGetCrawlersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Crawlers': obj.crawlers?.map(y => toJson_GlueCrawler(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetDataCatalogEncryptionSettingsRequest
 */
export interface GlueGetDataCatalogEncryptionSettingsRequest {
  /**
   * @schema GlueGetDataCatalogEncryptionSettingsRequest#CatalogId
   */
  readonly catalogId?: string;

}

/**
 * Converts an object of type 'GlueGetDataCatalogEncryptionSettingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetDataCatalogEncryptionSettingsRequest(obj: GlueGetDataCatalogEncryptionSettingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetDataCatalogEncryptionSettingsResponse
 */
export interface GlueGetDataCatalogEncryptionSettingsResponse {
  /**
   * @schema GlueGetDataCatalogEncryptionSettingsResponse#DataCatalogEncryptionSettings
   */
  readonly dataCatalogEncryptionSettings?: GlueDataCatalogEncryptionSettings;

}

/**
 * Converts an object of type 'GlueGetDataCatalogEncryptionSettingsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetDataCatalogEncryptionSettingsResponse(obj: GlueGetDataCatalogEncryptionSettingsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataCatalogEncryptionSettings': toJson_GlueDataCatalogEncryptionSettings(obj.dataCatalogEncryptionSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetDatabaseRequest
 */
export interface GlueGetDatabaseRequest {
  /**
   * @schema GlueGetDatabaseRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueGetDatabaseRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'GlueGetDatabaseRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetDatabaseRequest(obj: GlueGetDatabaseRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetDatabaseResponse
 */
export interface GlueGetDatabaseResponse {
  /**
   * @schema GlueGetDatabaseResponse#Database
   */
  readonly database?: GlueDatabase;

}

/**
 * Converts an object of type 'GlueGetDatabaseResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetDatabaseResponse(obj: GlueGetDatabaseResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Database': toJson_GlueDatabase(obj.database),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetDatabasesRequest
 */
export interface GlueGetDatabasesRequest {
  /**
   * @schema GlueGetDatabasesRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueGetDatabasesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GlueGetDatabasesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GlueGetDatabasesRequest#ResourceShareType
   */
  readonly resourceShareType?: string;

}

/**
 * Converts an object of type 'GlueGetDatabasesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetDatabasesRequest(obj: GlueGetDatabasesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'ResourceShareType': obj.resourceShareType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetDatabasesResponse
 */
export interface GlueGetDatabasesResponse {
  /**
   * @schema GlueGetDatabasesResponse#DatabaseList
   */
  readonly databaseList?: GlueDatabase[];

  /**
   * @schema GlueGetDatabasesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GlueGetDatabasesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetDatabasesResponse(obj: GlueGetDatabasesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DatabaseList': obj.databaseList?.map(y => toJson_GlueDatabase(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetDataflowGraphRequest
 */
export interface GlueGetDataflowGraphRequest {
  /**
   * @schema GlueGetDataflowGraphRequest#PythonScript
   */
  readonly pythonScript?: string;

}

/**
 * Converts an object of type 'GlueGetDataflowGraphRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetDataflowGraphRequest(obj: GlueGetDataflowGraphRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PythonScript': obj.pythonScript,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetDataflowGraphResponse
 */
export interface GlueGetDataflowGraphResponse {
  /**
   * @schema GlueGetDataflowGraphResponse#DagNodes
   */
  readonly dagNodes?: GlueCodeGenNode[];

  /**
   * @schema GlueGetDataflowGraphResponse#DagEdges
   */
  readonly dagEdges?: GlueCodeGenEdge[];

}

/**
 * Converts an object of type 'GlueGetDataflowGraphResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetDataflowGraphResponse(obj: GlueGetDataflowGraphResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DagNodes': obj.dagNodes?.map(y => toJson_GlueCodeGenNode(y)),
    'DagEdges': obj.dagEdges?.map(y => toJson_GlueCodeGenEdge(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetDevEndpointRequest
 */
export interface GlueGetDevEndpointRequest {
  /**
   * @schema GlueGetDevEndpointRequest#EndpointName
   */
  readonly endpointName?: string;

}

/**
 * Converts an object of type 'GlueGetDevEndpointRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetDevEndpointRequest(obj: GlueGetDevEndpointRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndpointName': obj.endpointName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetDevEndpointResponse
 */
export interface GlueGetDevEndpointResponse {
  /**
   * @schema GlueGetDevEndpointResponse#DevEndpoint
   */
  readonly devEndpoint?: GlueDevEndpoint;

}

/**
 * Converts an object of type 'GlueGetDevEndpointResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetDevEndpointResponse(obj: GlueGetDevEndpointResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DevEndpoint': toJson_GlueDevEndpoint(obj.devEndpoint),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetDevEndpointsRequest
 */
export interface GlueGetDevEndpointsRequest {
  /**
   * @schema GlueGetDevEndpointsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GlueGetDevEndpointsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GlueGetDevEndpointsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetDevEndpointsRequest(obj: GlueGetDevEndpointsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetDevEndpointsResponse
 */
export interface GlueGetDevEndpointsResponse {
  /**
   * @schema GlueGetDevEndpointsResponse#DevEndpoints
   */
  readonly devEndpoints?: GlueDevEndpoint[];

  /**
   * @schema GlueGetDevEndpointsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GlueGetDevEndpointsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetDevEndpointsResponse(obj: GlueGetDevEndpointsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DevEndpoints': obj.devEndpoints?.map(y => toJson_GlueDevEndpoint(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetJobRequest
 */
export interface GlueGetJobRequest {
  /**
   * @schema GlueGetJobRequest#JobName
   */
  readonly jobName?: string;

}

/**
 * Converts an object of type 'GlueGetJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetJobRequest(obj: GlueGetJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobName': obj.jobName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetJobResponse
 */
export interface GlueGetJobResponse {
  /**
   * @schema GlueGetJobResponse#Job
   */
  readonly job?: GlueJob;

}

/**
 * Converts an object of type 'GlueGetJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetJobResponse(obj: GlueGetJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Job': toJson_GlueJob(obj.job),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetJobBookmarkRequest
 */
export interface GlueGetJobBookmarkRequest {
  /**
   * @schema GlueGetJobBookmarkRequest#JobName
   */
  readonly jobName?: string;

  /**
   * @schema GlueGetJobBookmarkRequest#RunId
   */
  readonly runId?: string;

}

/**
 * Converts an object of type 'GlueGetJobBookmarkRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetJobBookmarkRequest(obj: GlueGetJobBookmarkRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobName': obj.jobName,
    'RunId': obj.runId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetJobBookmarkResponse
 */
export interface GlueGetJobBookmarkResponse {
  /**
   * @schema GlueGetJobBookmarkResponse#JobBookmarkEntry
   */
  readonly jobBookmarkEntry?: GlueJobBookmarkEntry;

}

/**
 * Converts an object of type 'GlueGetJobBookmarkResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetJobBookmarkResponse(obj: GlueGetJobBookmarkResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobBookmarkEntry': toJson_GlueJobBookmarkEntry(obj.jobBookmarkEntry),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetJobRunRequest
 */
export interface GlueGetJobRunRequest {
  /**
   * @schema GlueGetJobRunRequest#JobName
   */
  readonly jobName?: string;

  /**
   * @schema GlueGetJobRunRequest#RunId
   */
  readonly runId?: string;

  /**
   * @schema GlueGetJobRunRequest#PredecessorsIncluded
   */
  readonly predecessorsIncluded?: boolean;

}

/**
 * Converts an object of type 'GlueGetJobRunRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetJobRunRequest(obj: GlueGetJobRunRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobName': obj.jobName,
    'RunId': obj.runId,
    'PredecessorsIncluded': obj.predecessorsIncluded,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetJobRunResponse
 */
export interface GlueGetJobRunResponse {
  /**
   * @schema GlueGetJobRunResponse#JobRun
   */
  readonly jobRun?: GlueJobRun;

}

/**
 * Converts an object of type 'GlueGetJobRunResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetJobRunResponse(obj: GlueGetJobRunResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobRun': toJson_GlueJobRun(obj.jobRun),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetJobRunsRequest
 */
export interface GlueGetJobRunsRequest {
  /**
   * @schema GlueGetJobRunsRequest#JobName
   */
  readonly jobName?: string;

  /**
   * @schema GlueGetJobRunsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GlueGetJobRunsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'GlueGetJobRunsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetJobRunsRequest(obj: GlueGetJobRunsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobName': obj.jobName,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetJobRunsResponse
 */
export interface GlueGetJobRunsResponse {
  /**
   * @schema GlueGetJobRunsResponse#JobRuns
   */
  readonly jobRuns?: GlueJobRun[];

  /**
   * @schema GlueGetJobRunsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GlueGetJobRunsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetJobRunsResponse(obj: GlueGetJobRunsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobRuns': obj.jobRuns?.map(y => toJson_GlueJobRun(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetJobsRequest
 */
export interface GlueGetJobsRequest {
  /**
   * @schema GlueGetJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GlueGetJobsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'GlueGetJobsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetJobsRequest(obj: GlueGetJobsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetJobsResponse
 */
export interface GlueGetJobsResponse {
  /**
   * @schema GlueGetJobsResponse#Jobs
   */
  readonly jobs?: GlueJob[];

  /**
   * @schema GlueGetJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GlueGetJobsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetJobsResponse(obj: GlueGetJobsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Jobs': obj.jobs?.map(y => toJson_GlueJob(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetMlTaskRunRequest
 */
export interface GlueGetMlTaskRunRequest {
  /**
   * @schema GlueGetMlTaskRunRequest#TransformId
   */
  readonly transformId?: string;

  /**
   * @schema GlueGetMlTaskRunRequest#TaskRunId
   */
  readonly taskRunId?: string;

}

/**
 * Converts an object of type 'GlueGetMlTaskRunRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetMlTaskRunRequest(obj: GlueGetMlTaskRunRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TransformId': obj.transformId,
    'TaskRunId': obj.taskRunId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetMlTaskRunResponse
 */
export interface GlueGetMlTaskRunResponse {
  /**
   * @schema GlueGetMlTaskRunResponse#TransformId
   */
  readonly transformId?: string;

  /**
   * @schema GlueGetMlTaskRunResponse#TaskRunId
   */
  readonly taskRunId?: string;

  /**
   * @schema GlueGetMlTaskRunResponse#Status
   */
  readonly status?: string;

  /**
   * @schema GlueGetMlTaskRunResponse#LogGroupName
   */
  readonly logGroupName?: string;

  /**
   * @schema GlueGetMlTaskRunResponse#Properties
   */
  readonly properties?: GlueTaskRunProperties;

  /**
   * @schema GlueGetMlTaskRunResponse#ErrorString
   */
  readonly errorString?: string;

  /**
   * @schema GlueGetMlTaskRunResponse#StartedOn
   */
  readonly startedOn?: string;

  /**
   * @schema GlueGetMlTaskRunResponse#LastModifiedOn
   */
  readonly lastModifiedOn?: string;

  /**
   * @schema GlueGetMlTaskRunResponse#CompletedOn
   */
  readonly completedOn?: string;

  /**
   * @schema GlueGetMlTaskRunResponse#ExecutionTime
   */
  readonly executionTime?: number;

}

/**
 * Converts an object of type 'GlueGetMlTaskRunResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetMlTaskRunResponse(obj: GlueGetMlTaskRunResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TransformId': obj.transformId,
    'TaskRunId': obj.taskRunId,
    'Status': obj.status,
    'LogGroupName': obj.logGroupName,
    'Properties': toJson_GlueTaskRunProperties(obj.properties),
    'ErrorString': obj.errorString,
    'StartedOn': obj.startedOn,
    'LastModifiedOn': obj.lastModifiedOn,
    'CompletedOn': obj.completedOn,
    'ExecutionTime': obj.executionTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetMlTaskRunsRequest
 */
export interface GlueGetMlTaskRunsRequest {
  /**
   * @schema GlueGetMlTaskRunsRequest#TransformId
   */
  readonly transformId?: string;

  /**
   * @schema GlueGetMlTaskRunsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GlueGetMlTaskRunsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GlueGetMlTaskRunsRequest#Filter
   */
  readonly filter?: GlueTaskRunFilterCriteria;

  /**
   * @schema GlueGetMlTaskRunsRequest#Sort
   */
  readonly sort?: GlueTaskRunSortCriteria;

}

/**
 * Converts an object of type 'GlueGetMlTaskRunsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetMlTaskRunsRequest(obj: GlueGetMlTaskRunsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TransformId': obj.transformId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'Filter': toJson_GlueTaskRunFilterCriteria(obj.filter),
    'Sort': toJson_GlueTaskRunSortCriteria(obj.sort),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetMlTaskRunsResponse
 */
export interface GlueGetMlTaskRunsResponse {
  /**
   * @schema GlueGetMlTaskRunsResponse#TaskRuns
   */
  readonly taskRuns?: GlueTaskRun[];

  /**
   * @schema GlueGetMlTaskRunsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GlueGetMlTaskRunsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetMlTaskRunsResponse(obj: GlueGetMlTaskRunsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TaskRuns': obj.taskRuns?.map(y => toJson_GlueTaskRun(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetMlTransformRequest
 */
export interface GlueGetMlTransformRequest {
  /**
   * @schema GlueGetMlTransformRequest#TransformId
   */
  readonly transformId?: string;

}

/**
 * Converts an object of type 'GlueGetMlTransformRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetMlTransformRequest(obj: GlueGetMlTransformRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TransformId': obj.transformId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetMlTransformResponse
 */
export interface GlueGetMlTransformResponse {
  /**
   * @schema GlueGetMlTransformResponse#TransformId
   */
  readonly transformId?: string;

  /**
   * @schema GlueGetMlTransformResponse#Name
   */
  readonly name?: string;

  /**
   * @schema GlueGetMlTransformResponse#Description
   */
  readonly description?: string;

  /**
   * @schema GlueGetMlTransformResponse#Status
   */
  readonly status?: string;

  /**
   * @schema GlueGetMlTransformResponse#CreatedOn
   */
  readonly createdOn?: string;

  /**
   * @schema GlueGetMlTransformResponse#LastModifiedOn
   */
  readonly lastModifiedOn?: string;

  /**
   * @schema GlueGetMlTransformResponse#InputRecordTables
   */
  readonly inputRecordTables?: GlueGlueTable[];

  /**
   * @schema GlueGetMlTransformResponse#Parameters
   */
  readonly parameters?: GlueTransformParameters;

  /**
   * @schema GlueGetMlTransformResponse#EvaluationMetrics
   */
  readonly evaluationMetrics?: GlueEvaluationMetrics;

  /**
   * @schema GlueGetMlTransformResponse#LabelCount
   */
  readonly labelCount?: number;

  /**
   * @schema GlueGetMlTransformResponse#Schema
   */
  readonly schema?: GlueSchemaColumn[];

  /**
   * @schema GlueGetMlTransformResponse#Role
   */
  readonly role?: string;

  /**
   * @schema GlueGetMlTransformResponse#GlueVersion
   */
  readonly glueVersion?: string;

  /**
   * @schema GlueGetMlTransformResponse#MaxCapacity
   */
  readonly maxCapacity?: number;

  /**
   * @schema GlueGetMlTransformResponse#WorkerType
   */
  readonly workerType?: string;

  /**
   * @schema GlueGetMlTransformResponse#NumberOfWorkers
   */
  readonly numberOfWorkers?: number;

  /**
   * @schema GlueGetMlTransformResponse#Timeout
   */
  readonly timeout?: number;

  /**
   * @schema GlueGetMlTransformResponse#MaxRetries
   */
  readonly maxRetries?: number;

  /**
   * @schema GlueGetMlTransformResponse#TransformEncryption
   */
  readonly transformEncryption?: GlueTransformEncryption;

}

/**
 * Converts an object of type 'GlueGetMlTransformResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetMlTransformResponse(obj: GlueGetMlTransformResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TransformId': obj.transformId,
    'Name': obj.name,
    'Description': obj.description,
    'Status': obj.status,
    'CreatedOn': obj.createdOn,
    'LastModifiedOn': obj.lastModifiedOn,
    'InputRecordTables': obj.inputRecordTables?.map(y => toJson_GlueGlueTable(y)),
    'Parameters': toJson_GlueTransformParameters(obj.parameters),
    'EvaluationMetrics': toJson_GlueEvaluationMetrics(obj.evaluationMetrics),
    'LabelCount': obj.labelCount,
    'Schema': obj.schema?.map(y => toJson_GlueSchemaColumn(y)),
    'Role': obj.role,
    'GlueVersion': obj.glueVersion,
    'MaxCapacity': obj.maxCapacity,
    'WorkerType': obj.workerType,
    'NumberOfWorkers': obj.numberOfWorkers,
    'Timeout': obj.timeout,
    'MaxRetries': obj.maxRetries,
    'TransformEncryption': toJson_GlueTransformEncryption(obj.transformEncryption),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetMlTransformsRequest
 */
export interface GlueGetMlTransformsRequest {
  /**
   * @schema GlueGetMlTransformsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GlueGetMlTransformsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GlueGetMlTransformsRequest#Filter
   */
  readonly filter?: GlueTransformFilterCriteria;

  /**
   * @schema GlueGetMlTransformsRequest#Sort
   */
  readonly sort?: GlueTransformSortCriteria;

}

/**
 * Converts an object of type 'GlueGetMlTransformsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetMlTransformsRequest(obj: GlueGetMlTransformsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'Filter': toJson_GlueTransformFilterCriteria(obj.filter),
    'Sort': toJson_GlueTransformSortCriteria(obj.sort),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetMlTransformsResponse
 */
export interface GlueGetMlTransformsResponse {
  /**
   * @schema GlueGetMlTransformsResponse#Transforms
   */
  readonly transforms?: GlueMlTransform[];

  /**
   * @schema GlueGetMlTransformsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GlueGetMlTransformsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetMlTransformsResponse(obj: GlueGetMlTransformsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Transforms': obj.transforms?.map(y => toJson_GlueMlTransform(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetMappingRequest
 */
export interface GlueGetMappingRequest {
  /**
   * @schema GlueGetMappingRequest#Source
   */
  readonly source?: GlueCatalogEntry;

  /**
   * @schema GlueGetMappingRequest#Sinks
   */
  readonly sinks?: GlueCatalogEntry[];

  /**
   * @schema GlueGetMappingRequest#Location
   */
  readonly location?: GlueLocation;

}

/**
 * Converts an object of type 'GlueGetMappingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetMappingRequest(obj: GlueGetMappingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Source': toJson_GlueCatalogEntry(obj.source),
    'Sinks': obj.sinks?.map(y => toJson_GlueCatalogEntry(y)),
    'Location': toJson_GlueLocation(obj.location),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetMappingResponse
 */
export interface GlueGetMappingResponse {
  /**
   * @schema GlueGetMappingResponse#Mapping
   */
  readonly mapping?: GlueMappingEntry[];

}

/**
 * Converts an object of type 'GlueGetMappingResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetMappingResponse(obj: GlueGetMappingResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Mapping': obj.mapping?.map(y => toJson_GlueMappingEntry(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetPartitionRequest
 */
export interface GlueGetPartitionRequest {
  /**
   * @schema GlueGetPartitionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueGetPartitionRequest#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema GlueGetPartitionRequest#TableName
   */
  readonly tableName?: string;

  /**
   * @schema GlueGetPartitionRequest#PartitionValues
   */
  readonly partitionValues?: string[];

}

/**
 * Converts an object of type 'GlueGetPartitionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetPartitionRequest(obj: GlueGetPartitionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'DatabaseName': obj.databaseName,
    'TableName': obj.tableName,
    'PartitionValues': obj.partitionValues?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetPartitionResponse
 */
export interface GlueGetPartitionResponse {
  /**
   * @schema GlueGetPartitionResponse#Partition
   */
  readonly partition?: GluePartition;

}

/**
 * Converts an object of type 'GlueGetPartitionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetPartitionResponse(obj: GlueGetPartitionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Partition': toJson_GluePartition(obj.partition),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetPartitionIndexesRequest
 */
export interface GlueGetPartitionIndexesRequest {
  /**
   * @schema GlueGetPartitionIndexesRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueGetPartitionIndexesRequest#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema GlueGetPartitionIndexesRequest#TableName
   */
  readonly tableName?: string;

  /**
   * @schema GlueGetPartitionIndexesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GlueGetPartitionIndexesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetPartitionIndexesRequest(obj: GlueGetPartitionIndexesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'DatabaseName': obj.databaseName,
    'TableName': obj.tableName,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetPartitionIndexesResponse
 */
export interface GlueGetPartitionIndexesResponse {
  /**
   * @schema GlueGetPartitionIndexesResponse#PartitionIndexDescriptorList
   */
  readonly partitionIndexDescriptorList?: GluePartitionIndexDescriptor[];

  /**
   * @schema GlueGetPartitionIndexesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GlueGetPartitionIndexesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetPartitionIndexesResponse(obj: GlueGetPartitionIndexesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PartitionIndexDescriptorList': obj.partitionIndexDescriptorList?.map(y => toJson_GluePartitionIndexDescriptor(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetPartitionsRequest
 */
export interface GlueGetPartitionsRequest {
  /**
   * @schema GlueGetPartitionsRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueGetPartitionsRequest#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema GlueGetPartitionsRequest#TableName
   */
  readonly tableName?: string;

  /**
   * @schema GlueGetPartitionsRequest#Expression
   */
  readonly expression?: string;

  /**
   * @schema GlueGetPartitionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GlueGetPartitionsRequest#Segment
   */
  readonly segment?: GlueSegment;

  /**
   * @schema GlueGetPartitionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GlueGetPartitionsRequest#ExcludeColumnSchema
   */
  readonly excludeColumnSchema?: boolean;

}

/**
 * Converts an object of type 'GlueGetPartitionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetPartitionsRequest(obj: GlueGetPartitionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'DatabaseName': obj.databaseName,
    'TableName': obj.tableName,
    'Expression': obj.expression,
    'NextToken': obj.nextToken,
    'Segment': toJson_GlueSegment(obj.segment),
    'MaxResults': obj.maxResults,
    'ExcludeColumnSchema': obj.excludeColumnSchema,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetPartitionsResponse
 */
export interface GlueGetPartitionsResponse {
  /**
   * @schema GlueGetPartitionsResponse#Partitions
   */
  readonly partitions?: GluePartition[];

  /**
   * @schema GlueGetPartitionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GlueGetPartitionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetPartitionsResponse(obj: GlueGetPartitionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Partitions': obj.partitions?.map(y => toJson_GluePartition(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetPlanRequest
 */
export interface GlueGetPlanRequest {
  /**
   * @schema GlueGetPlanRequest#Mapping
   */
  readonly mapping?: GlueMappingEntry[];

  /**
   * @schema GlueGetPlanRequest#Source
   */
  readonly source?: GlueCatalogEntry;

  /**
   * @schema GlueGetPlanRequest#Sinks
   */
  readonly sinks?: GlueCatalogEntry[];

  /**
   * @schema GlueGetPlanRequest#Location
   */
  readonly location?: GlueLocation;

  /**
   * @schema GlueGetPlanRequest#Language
   */
  readonly language?: string;

  /**
   * @schema GlueGetPlanRequest#AdditionalPlanOptionsMap
   */
  readonly additionalPlanOptionsMap?: { [key: string]: string };

}

/**
 * Converts an object of type 'GlueGetPlanRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetPlanRequest(obj: GlueGetPlanRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Mapping': obj.mapping?.map(y => toJson_GlueMappingEntry(y)),
    'Source': toJson_GlueCatalogEntry(obj.source),
    'Sinks': obj.sinks?.map(y => toJson_GlueCatalogEntry(y)),
    'Location': toJson_GlueLocation(obj.location),
    'Language': obj.language,
    'AdditionalPlanOptionsMap': ((obj.additionalPlanOptionsMap) === undefined) ? undefined : (Object.entries(obj.additionalPlanOptionsMap).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetPlanResponse
 */
export interface GlueGetPlanResponse {
  /**
   * @schema GlueGetPlanResponse#PythonScript
   */
  readonly pythonScript?: string;

  /**
   * @schema GlueGetPlanResponse#ScalaCode
   */
  readonly scalaCode?: string;

}

/**
 * Converts an object of type 'GlueGetPlanResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetPlanResponse(obj: GlueGetPlanResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PythonScript': obj.pythonScript,
    'ScalaCode': obj.scalaCode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetRegistryInput
 */
export interface GlueGetRegistryInput {
  /**
   * @schema GlueGetRegistryInput#RegistryId
   */
  readonly registryId?: GlueRegistryId;

}

/**
 * Converts an object of type 'GlueGetRegistryInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetRegistryInput(obj: GlueGetRegistryInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegistryId': toJson_GlueRegistryId(obj.registryId),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetRegistryResponse
 */
export interface GlueGetRegistryResponse {
  /**
   * @schema GlueGetRegistryResponse#RegistryName
   */
  readonly registryName?: string;

  /**
   * @schema GlueGetRegistryResponse#RegistryArn
   */
  readonly registryArn?: string;

  /**
   * @schema GlueGetRegistryResponse#Description
   */
  readonly description?: string;

  /**
   * @schema GlueGetRegistryResponse#Status
   */
  readonly status?: string;

  /**
   * @schema GlueGetRegistryResponse#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema GlueGetRegistryResponse#UpdatedTime
   */
  readonly updatedTime?: string;

}

/**
 * Converts an object of type 'GlueGetRegistryResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetRegistryResponse(obj: GlueGetRegistryResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegistryName': obj.registryName,
    'RegistryArn': obj.registryArn,
    'Description': obj.description,
    'Status': obj.status,
    'CreatedTime': obj.createdTime,
    'UpdatedTime': obj.updatedTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetResourcePoliciesRequest
 */
export interface GlueGetResourcePoliciesRequest {
  /**
   * @schema GlueGetResourcePoliciesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GlueGetResourcePoliciesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'GlueGetResourcePoliciesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetResourcePoliciesRequest(obj: GlueGetResourcePoliciesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetResourcePoliciesResponse
 */
export interface GlueGetResourcePoliciesResponse {
  /**
   * @schema GlueGetResourcePoliciesResponse#FetchResourcePoliciesResponseList
   */
  readonly fetchResourcePoliciesResponseList?: GlueGluePolicy[];

  /**
   * @schema GlueGetResourcePoliciesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GlueGetResourcePoliciesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetResourcePoliciesResponse(obj: GlueGetResourcePoliciesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FetchResourcePoliciesResponseList': obj.fetchResourcePoliciesResponseList?.map(y => toJson_GlueGluePolicy(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetResourcePolicyRequest
 */
export interface GlueGetResourcePolicyRequest {
  /**
   * @schema GlueGetResourcePolicyRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'GlueGetResourcePolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetResourcePolicyRequest(obj: GlueGetResourcePolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetResourcePolicyResponse
 */
export interface GlueGetResourcePolicyResponse {
  /**
   * @schema GlueGetResourcePolicyResponse#PolicyInJson
   */
  readonly policyInJson?: string;

  /**
   * @schema GlueGetResourcePolicyResponse#PolicyHash
   */
  readonly policyHash?: string;

  /**
   * @schema GlueGetResourcePolicyResponse#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema GlueGetResourcePolicyResponse#UpdateTime
   */
  readonly updateTime?: string;

}

/**
 * Converts an object of type 'GlueGetResourcePolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetResourcePolicyResponse(obj: GlueGetResourcePolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyInJson': obj.policyInJson,
    'PolicyHash': obj.policyHash,
    'CreateTime': obj.createTime,
    'UpdateTime': obj.updateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetSchemaInput
 */
export interface GlueGetSchemaInput {
  /**
   * @schema GlueGetSchemaInput#SchemaId
   */
  readonly schemaId?: GlueSchemaId;

}

/**
 * Converts an object of type 'GlueGetSchemaInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetSchemaInput(obj: GlueGetSchemaInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SchemaId': toJson_GlueSchemaId(obj.schemaId),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetSchemaResponse
 */
export interface GlueGetSchemaResponse {
  /**
   * @schema GlueGetSchemaResponse#RegistryName
   */
  readonly registryName?: string;

  /**
   * @schema GlueGetSchemaResponse#RegistryArn
   */
  readonly registryArn?: string;

  /**
   * @schema GlueGetSchemaResponse#SchemaName
   */
  readonly schemaName?: string;

  /**
   * @schema GlueGetSchemaResponse#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema GlueGetSchemaResponse#Description
   */
  readonly description?: string;

  /**
   * @schema GlueGetSchemaResponse#DataFormat
   */
  readonly dataFormat?: string;

  /**
   * @schema GlueGetSchemaResponse#Compatibility
   */
  readonly compatibility?: string;

  /**
   * @schema GlueGetSchemaResponse#SchemaCheckpoint
   */
  readonly schemaCheckpoint?: number;

  /**
   * @schema GlueGetSchemaResponse#LatestSchemaVersion
   */
  readonly latestSchemaVersion?: number;

  /**
   * @schema GlueGetSchemaResponse#NextSchemaVersion
   */
  readonly nextSchemaVersion?: number;

  /**
   * @schema GlueGetSchemaResponse#SchemaStatus
   */
  readonly schemaStatus?: string;

  /**
   * @schema GlueGetSchemaResponse#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema GlueGetSchemaResponse#UpdatedTime
   */
  readonly updatedTime?: string;

}

/**
 * Converts an object of type 'GlueGetSchemaResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetSchemaResponse(obj: GlueGetSchemaResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegistryName': obj.registryName,
    'RegistryArn': obj.registryArn,
    'SchemaName': obj.schemaName,
    'SchemaArn': obj.schemaArn,
    'Description': obj.description,
    'DataFormat': obj.dataFormat,
    'Compatibility': obj.compatibility,
    'SchemaCheckpoint': obj.schemaCheckpoint,
    'LatestSchemaVersion': obj.latestSchemaVersion,
    'NextSchemaVersion': obj.nextSchemaVersion,
    'SchemaStatus': obj.schemaStatus,
    'CreatedTime': obj.createdTime,
    'UpdatedTime': obj.updatedTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetSchemaByDefinitionInput
 */
export interface GlueGetSchemaByDefinitionInput {
  /**
   * @schema GlueGetSchemaByDefinitionInput#SchemaId
   */
  readonly schemaId?: GlueSchemaId;

  /**
   * @schema GlueGetSchemaByDefinitionInput#SchemaDefinition
   */
  readonly schemaDefinition?: string;

}

/**
 * Converts an object of type 'GlueGetSchemaByDefinitionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetSchemaByDefinitionInput(obj: GlueGetSchemaByDefinitionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SchemaId': toJson_GlueSchemaId(obj.schemaId),
    'SchemaDefinition': obj.schemaDefinition,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetSchemaByDefinitionResponse
 */
export interface GlueGetSchemaByDefinitionResponse {
  /**
   * @schema GlueGetSchemaByDefinitionResponse#SchemaVersionId
   */
  readonly schemaVersionId?: string;

  /**
   * @schema GlueGetSchemaByDefinitionResponse#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema GlueGetSchemaByDefinitionResponse#DataFormat
   */
  readonly dataFormat?: string;

  /**
   * @schema GlueGetSchemaByDefinitionResponse#Status
   */
  readonly status?: string;

  /**
   * @schema GlueGetSchemaByDefinitionResponse#CreatedTime
   */
  readonly createdTime?: string;

}

/**
 * Converts an object of type 'GlueGetSchemaByDefinitionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetSchemaByDefinitionResponse(obj: GlueGetSchemaByDefinitionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SchemaVersionId': obj.schemaVersionId,
    'SchemaArn': obj.schemaArn,
    'DataFormat': obj.dataFormat,
    'Status': obj.status,
    'CreatedTime': obj.createdTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetSchemaVersionInput
 */
export interface GlueGetSchemaVersionInput {
  /**
   * @schema GlueGetSchemaVersionInput#SchemaId
   */
  readonly schemaId?: GlueSchemaId;

  /**
   * @schema GlueGetSchemaVersionInput#SchemaVersionId
   */
  readonly schemaVersionId?: string;

  /**
   * @schema GlueGetSchemaVersionInput#SchemaVersionNumber
   */
  readonly schemaVersionNumber?: GlueSchemaVersionNumber;

}

/**
 * Converts an object of type 'GlueGetSchemaVersionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetSchemaVersionInput(obj: GlueGetSchemaVersionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SchemaId': toJson_GlueSchemaId(obj.schemaId),
    'SchemaVersionId': obj.schemaVersionId,
    'SchemaVersionNumber': toJson_GlueSchemaVersionNumber(obj.schemaVersionNumber),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetSchemaVersionResponse
 */
export interface GlueGetSchemaVersionResponse {
  /**
   * @schema GlueGetSchemaVersionResponse#SchemaVersionId
   */
  readonly schemaVersionId?: string;

  /**
   * @schema GlueGetSchemaVersionResponse#SchemaDefinition
   */
  readonly schemaDefinition?: string;

  /**
   * @schema GlueGetSchemaVersionResponse#DataFormat
   */
  readonly dataFormat?: string;

  /**
   * @schema GlueGetSchemaVersionResponse#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema GlueGetSchemaVersionResponse#VersionNumber
   */
  readonly versionNumber?: number;

  /**
   * @schema GlueGetSchemaVersionResponse#Status
   */
  readonly status?: string;

  /**
   * @schema GlueGetSchemaVersionResponse#CreatedTime
   */
  readonly createdTime?: string;

}

/**
 * Converts an object of type 'GlueGetSchemaVersionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetSchemaVersionResponse(obj: GlueGetSchemaVersionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SchemaVersionId': obj.schemaVersionId,
    'SchemaDefinition': obj.schemaDefinition,
    'DataFormat': obj.dataFormat,
    'SchemaArn': obj.schemaArn,
    'VersionNumber': obj.versionNumber,
    'Status': obj.status,
    'CreatedTime': obj.createdTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetSchemaVersionsDiffInput
 */
export interface GlueGetSchemaVersionsDiffInput {
  /**
   * @schema GlueGetSchemaVersionsDiffInput#SchemaId
   */
  readonly schemaId?: GlueSchemaId;

  /**
   * @schema GlueGetSchemaVersionsDiffInput#FirstSchemaVersionNumber
   */
  readonly firstSchemaVersionNumber?: GlueSchemaVersionNumber;

  /**
   * @schema GlueGetSchemaVersionsDiffInput#SecondSchemaVersionNumber
   */
  readonly secondSchemaVersionNumber?: GlueSchemaVersionNumber;

  /**
   * @schema GlueGetSchemaVersionsDiffInput#SchemaDiffType
   */
  readonly schemaDiffType?: string;

}

/**
 * Converts an object of type 'GlueGetSchemaVersionsDiffInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetSchemaVersionsDiffInput(obj: GlueGetSchemaVersionsDiffInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SchemaId': toJson_GlueSchemaId(obj.schemaId),
    'FirstSchemaVersionNumber': toJson_GlueSchemaVersionNumber(obj.firstSchemaVersionNumber),
    'SecondSchemaVersionNumber': toJson_GlueSchemaVersionNumber(obj.secondSchemaVersionNumber),
    'SchemaDiffType': obj.schemaDiffType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetSchemaVersionsDiffResponse
 */
export interface GlueGetSchemaVersionsDiffResponse {
  /**
   * @schema GlueGetSchemaVersionsDiffResponse#Diff
   */
  readonly diff?: string;

}

/**
 * Converts an object of type 'GlueGetSchemaVersionsDiffResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetSchemaVersionsDiffResponse(obj: GlueGetSchemaVersionsDiffResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Diff': obj.diff,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetSecurityConfigurationRequest
 */
export interface GlueGetSecurityConfigurationRequest {
  /**
   * @schema GlueGetSecurityConfigurationRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'GlueGetSecurityConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetSecurityConfigurationRequest(obj: GlueGetSecurityConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetSecurityConfigurationResponse
 */
export interface GlueGetSecurityConfigurationResponse {
  /**
   * @schema GlueGetSecurityConfigurationResponse#SecurityConfiguration
   */
  readonly securityConfiguration?: GlueSecurityConfiguration;

}

/**
 * Converts an object of type 'GlueGetSecurityConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetSecurityConfigurationResponse(obj: GlueGetSecurityConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SecurityConfiguration': toJson_GlueSecurityConfiguration(obj.securityConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetSecurityConfigurationsRequest
 */
export interface GlueGetSecurityConfigurationsRequest {
  /**
   * @schema GlueGetSecurityConfigurationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GlueGetSecurityConfigurationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GlueGetSecurityConfigurationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetSecurityConfigurationsRequest(obj: GlueGetSecurityConfigurationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetSecurityConfigurationsResponse
 */
export interface GlueGetSecurityConfigurationsResponse {
  /**
   * @schema GlueGetSecurityConfigurationsResponse#SecurityConfigurations
   */
  readonly securityConfigurations?: GlueSecurityConfiguration[];

  /**
   * @schema GlueGetSecurityConfigurationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GlueGetSecurityConfigurationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetSecurityConfigurationsResponse(obj: GlueGetSecurityConfigurationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SecurityConfigurations': obj.securityConfigurations?.map(y => toJson_GlueSecurityConfiguration(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetTableRequest
 */
export interface GlueGetTableRequest {
  /**
   * @schema GlueGetTableRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueGetTableRequest#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema GlueGetTableRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'GlueGetTableRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetTableRequest(obj: GlueGetTableRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'DatabaseName': obj.databaseName,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetTableResponse
 */
export interface GlueGetTableResponse {
  /**
   * @schema GlueGetTableResponse#Table
   */
  readonly table?: GlueTable;

}

/**
 * Converts an object of type 'GlueGetTableResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetTableResponse(obj: GlueGetTableResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Table': toJson_GlueTable(obj.table),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetTableVersionRequest
 */
export interface GlueGetTableVersionRequest {
  /**
   * @schema GlueGetTableVersionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueGetTableVersionRequest#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema GlueGetTableVersionRequest#TableName
   */
  readonly tableName?: string;

  /**
   * @schema GlueGetTableVersionRequest#VersionId
   */
  readonly versionId?: string;

}

/**
 * Converts an object of type 'GlueGetTableVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetTableVersionRequest(obj: GlueGetTableVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'DatabaseName': obj.databaseName,
    'TableName': obj.tableName,
    'VersionId': obj.versionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetTableVersionResponse
 */
export interface GlueGetTableVersionResponse {
  /**
   * @schema GlueGetTableVersionResponse#TableVersion
   */
  readonly tableVersion?: GlueTableVersion;

}

/**
 * Converts an object of type 'GlueGetTableVersionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetTableVersionResponse(obj: GlueGetTableVersionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TableVersion': toJson_GlueTableVersion(obj.tableVersion),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetTableVersionsRequest
 */
export interface GlueGetTableVersionsRequest {
  /**
   * @schema GlueGetTableVersionsRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueGetTableVersionsRequest#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema GlueGetTableVersionsRequest#TableName
   */
  readonly tableName?: string;

  /**
   * @schema GlueGetTableVersionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GlueGetTableVersionsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'GlueGetTableVersionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetTableVersionsRequest(obj: GlueGetTableVersionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'DatabaseName': obj.databaseName,
    'TableName': obj.tableName,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetTableVersionsResponse
 */
export interface GlueGetTableVersionsResponse {
  /**
   * @schema GlueGetTableVersionsResponse#TableVersions
   */
  readonly tableVersions?: GlueTableVersion[];

  /**
   * @schema GlueGetTableVersionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GlueGetTableVersionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetTableVersionsResponse(obj: GlueGetTableVersionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TableVersions': obj.tableVersions?.map(y => toJson_GlueTableVersion(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetTablesRequest
 */
export interface GlueGetTablesRequest {
  /**
   * @schema GlueGetTablesRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueGetTablesRequest#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema GlueGetTablesRequest#Expression
   */
  readonly expression?: string;

  /**
   * @schema GlueGetTablesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GlueGetTablesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'GlueGetTablesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetTablesRequest(obj: GlueGetTablesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'DatabaseName': obj.databaseName,
    'Expression': obj.expression,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetTablesResponse
 */
export interface GlueGetTablesResponse {
  /**
   * @schema GlueGetTablesResponse#TableList
   */
  readonly tableList?: GlueTable[];

  /**
   * @schema GlueGetTablesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GlueGetTablesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetTablesResponse(obj: GlueGetTablesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TableList': obj.tableList?.map(y => toJson_GlueTable(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetTagsRequest
 */
export interface GlueGetTagsRequest {
  /**
   * @schema GlueGetTagsRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'GlueGetTagsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetTagsRequest(obj: GlueGetTagsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetTagsResponse
 */
export interface GlueGetTagsResponse {
  /**
   * @schema GlueGetTagsResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'GlueGetTagsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetTagsResponse(obj: GlueGetTagsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetTriggerRequest
 */
export interface GlueGetTriggerRequest {
  /**
   * @schema GlueGetTriggerRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'GlueGetTriggerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetTriggerRequest(obj: GlueGetTriggerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetTriggerResponse
 */
export interface GlueGetTriggerResponse {
  /**
   * @schema GlueGetTriggerResponse#Trigger
   */
  readonly trigger?: GlueTrigger;

}

/**
 * Converts an object of type 'GlueGetTriggerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetTriggerResponse(obj: GlueGetTriggerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Trigger': toJson_GlueTrigger(obj.trigger),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetTriggersRequest
 */
export interface GlueGetTriggersRequest {
  /**
   * @schema GlueGetTriggersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GlueGetTriggersRequest#DependentJobName
   */
  readonly dependentJobName?: string;

  /**
   * @schema GlueGetTriggersRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'GlueGetTriggersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetTriggersRequest(obj: GlueGetTriggersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'DependentJobName': obj.dependentJobName,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetTriggersResponse
 */
export interface GlueGetTriggersResponse {
  /**
   * @schema GlueGetTriggersResponse#Triggers
   */
  readonly triggers?: GlueTrigger[];

  /**
   * @schema GlueGetTriggersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GlueGetTriggersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetTriggersResponse(obj: GlueGetTriggersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Triggers': obj.triggers?.map(y => toJson_GlueTrigger(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetUserDefinedFunctionRequest
 */
export interface GlueGetUserDefinedFunctionRequest {
  /**
   * @schema GlueGetUserDefinedFunctionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueGetUserDefinedFunctionRequest#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema GlueGetUserDefinedFunctionRequest#FunctionName
   */
  readonly functionName?: string;

}

/**
 * Converts an object of type 'GlueGetUserDefinedFunctionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetUserDefinedFunctionRequest(obj: GlueGetUserDefinedFunctionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'DatabaseName': obj.databaseName,
    'FunctionName': obj.functionName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetUserDefinedFunctionResponse
 */
export interface GlueGetUserDefinedFunctionResponse {
  /**
   * @schema GlueGetUserDefinedFunctionResponse#UserDefinedFunction
   */
  readonly userDefinedFunction?: GlueUserDefinedFunction;

}

/**
 * Converts an object of type 'GlueGetUserDefinedFunctionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetUserDefinedFunctionResponse(obj: GlueGetUserDefinedFunctionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserDefinedFunction': toJson_GlueUserDefinedFunction(obj.userDefinedFunction),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetUserDefinedFunctionsRequest
 */
export interface GlueGetUserDefinedFunctionsRequest {
  /**
   * @schema GlueGetUserDefinedFunctionsRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueGetUserDefinedFunctionsRequest#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema GlueGetUserDefinedFunctionsRequest#Pattern
   */
  readonly pattern?: string;

  /**
   * @schema GlueGetUserDefinedFunctionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GlueGetUserDefinedFunctionsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'GlueGetUserDefinedFunctionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetUserDefinedFunctionsRequest(obj: GlueGetUserDefinedFunctionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'DatabaseName': obj.databaseName,
    'Pattern': obj.pattern,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetUserDefinedFunctionsResponse
 */
export interface GlueGetUserDefinedFunctionsResponse {
  /**
   * @schema GlueGetUserDefinedFunctionsResponse#UserDefinedFunctions
   */
  readonly userDefinedFunctions?: GlueUserDefinedFunction[];

  /**
   * @schema GlueGetUserDefinedFunctionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GlueGetUserDefinedFunctionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetUserDefinedFunctionsResponse(obj: GlueGetUserDefinedFunctionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserDefinedFunctions': obj.userDefinedFunctions?.map(y => toJson_GlueUserDefinedFunction(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetWorkflowRequest
 */
export interface GlueGetWorkflowRequest {
  /**
   * @schema GlueGetWorkflowRequest#Name
   */
  readonly name?: string;

  /**
   * @schema GlueGetWorkflowRequest#IncludeGraph
   */
  readonly includeGraph?: boolean;

}

/**
 * Converts an object of type 'GlueGetWorkflowRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetWorkflowRequest(obj: GlueGetWorkflowRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'IncludeGraph': obj.includeGraph,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetWorkflowResponse
 */
export interface GlueGetWorkflowResponse {
  /**
   * @schema GlueGetWorkflowResponse#Workflow
   */
  readonly workflow?: GlueWorkflow;

}

/**
 * Converts an object of type 'GlueGetWorkflowResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetWorkflowResponse(obj: GlueGetWorkflowResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Workflow': toJson_GlueWorkflow(obj.workflow),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetWorkflowRunRequest
 */
export interface GlueGetWorkflowRunRequest {
  /**
   * @schema GlueGetWorkflowRunRequest#Name
   */
  readonly name?: string;

  /**
   * @schema GlueGetWorkflowRunRequest#RunId
   */
  readonly runId?: string;

  /**
   * @schema GlueGetWorkflowRunRequest#IncludeGraph
   */
  readonly includeGraph?: boolean;

}

/**
 * Converts an object of type 'GlueGetWorkflowRunRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetWorkflowRunRequest(obj: GlueGetWorkflowRunRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'RunId': obj.runId,
    'IncludeGraph': obj.includeGraph,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetWorkflowRunResponse
 */
export interface GlueGetWorkflowRunResponse {
  /**
   * @schema GlueGetWorkflowRunResponse#Run
   */
  readonly run?: GlueWorkflowRun;

}

/**
 * Converts an object of type 'GlueGetWorkflowRunResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetWorkflowRunResponse(obj: GlueGetWorkflowRunResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Run': toJson_GlueWorkflowRun(obj.run),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetWorkflowRunPropertiesRequest
 */
export interface GlueGetWorkflowRunPropertiesRequest {
  /**
   * @schema GlueGetWorkflowRunPropertiesRequest#Name
   */
  readonly name?: string;

  /**
   * @schema GlueGetWorkflowRunPropertiesRequest#RunId
   */
  readonly runId?: string;

}

/**
 * Converts an object of type 'GlueGetWorkflowRunPropertiesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetWorkflowRunPropertiesRequest(obj: GlueGetWorkflowRunPropertiesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'RunId': obj.runId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetWorkflowRunPropertiesResponse
 */
export interface GlueGetWorkflowRunPropertiesResponse {
  /**
   * @schema GlueGetWorkflowRunPropertiesResponse#RunProperties
   */
  readonly runProperties?: { [key: string]: string };

}

/**
 * Converts an object of type 'GlueGetWorkflowRunPropertiesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetWorkflowRunPropertiesResponse(obj: GlueGetWorkflowRunPropertiesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RunProperties': ((obj.runProperties) === undefined) ? undefined : (Object.entries(obj.runProperties).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetWorkflowRunsRequest
 */
export interface GlueGetWorkflowRunsRequest {
  /**
   * @schema GlueGetWorkflowRunsRequest#Name
   */
  readonly name?: string;

  /**
   * @schema GlueGetWorkflowRunsRequest#IncludeGraph
   */
  readonly includeGraph?: boolean;

  /**
   * @schema GlueGetWorkflowRunsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GlueGetWorkflowRunsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'GlueGetWorkflowRunsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetWorkflowRunsRequest(obj: GlueGetWorkflowRunsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'IncludeGraph': obj.includeGraph,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetWorkflowRunsResponse
 */
export interface GlueGetWorkflowRunsResponse {
  /**
   * @schema GlueGetWorkflowRunsResponse#Runs
   */
  readonly runs?: GlueWorkflowRun[];

  /**
   * @schema GlueGetWorkflowRunsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GlueGetWorkflowRunsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetWorkflowRunsResponse(obj: GlueGetWorkflowRunsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Runs': obj.runs?.map(y => toJson_GlueWorkflowRun(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueImportCatalogToGlueRequest
 */
export interface GlueImportCatalogToGlueRequest {
  /**
   * @schema GlueImportCatalogToGlueRequest#CatalogId
   */
  readonly catalogId?: string;

}

/**
 * Converts an object of type 'GlueImportCatalogToGlueRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueImportCatalogToGlueRequest(obj: GlueImportCatalogToGlueRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueImportCatalogToGlueResponse
 */
export interface GlueImportCatalogToGlueResponse {
}

/**
 * Converts an object of type 'GlueImportCatalogToGlueResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueImportCatalogToGlueResponse(obj: GlueImportCatalogToGlueResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueListCrawlersRequest
 */
export interface GlueListCrawlersRequest {
  /**
   * @schema GlueListCrawlersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GlueListCrawlersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GlueListCrawlersRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'GlueListCrawlersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueListCrawlersRequest(obj: GlueListCrawlersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueListCrawlersResponse
 */
export interface GlueListCrawlersResponse {
  /**
   * @schema GlueListCrawlersResponse#CrawlerNames
   */
  readonly crawlerNames?: string[];

  /**
   * @schema GlueListCrawlersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GlueListCrawlersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueListCrawlersResponse(obj: GlueListCrawlersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CrawlerNames': obj.crawlerNames?.map(y => y),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueListDevEndpointsRequest
 */
export interface GlueListDevEndpointsRequest {
  /**
   * @schema GlueListDevEndpointsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GlueListDevEndpointsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GlueListDevEndpointsRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'GlueListDevEndpointsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueListDevEndpointsRequest(obj: GlueListDevEndpointsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueListDevEndpointsResponse
 */
export interface GlueListDevEndpointsResponse {
  /**
   * @schema GlueListDevEndpointsResponse#DevEndpointNames
   */
  readonly devEndpointNames?: string[];

  /**
   * @schema GlueListDevEndpointsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GlueListDevEndpointsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueListDevEndpointsResponse(obj: GlueListDevEndpointsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DevEndpointNames': obj.devEndpointNames?.map(y => y),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueListJobsRequest
 */
export interface GlueListJobsRequest {
  /**
   * @schema GlueListJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GlueListJobsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GlueListJobsRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'GlueListJobsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueListJobsRequest(obj: GlueListJobsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueListJobsResponse
 */
export interface GlueListJobsResponse {
  /**
   * @schema GlueListJobsResponse#JobNames
   */
  readonly jobNames?: string[];

  /**
   * @schema GlueListJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GlueListJobsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueListJobsResponse(obj: GlueListJobsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobNames': obj.jobNames?.map(y => y),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueListMlTransformsRequest
 */
export interface GlueListMlTransformsRequest {
  /**
   * @schema GlueListMlTransformsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GlueListMlTransformsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GlueListMlTransformsRequest#Filter
   */
  readonly filter?: GlueTransformFilterCriteria;

  /**
   * @schema GlueListMlTransformsRequest#Sort
   */
  readonly sort?: GlueTransformSortCriteria;

  /**
   * @schema GlueListMlTransformsRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'GlueListMlTransformsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueListMlTransformsRequest(obj: GlueListMlTransformsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'Filter': toJson_GlueTransformFilterCriteria(obj.filter),
    'Sort': toJson_GlueTransformSortCriteria(obj.sort),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueListMlTransformsResponse
 */
export interface GlueListMlTransformsResponse {
  /**
   * @schema GlueListMlTransformsResponse#TransformIds
   */
  readonly transformIds?: string[];

  /**
   * @schema GlueListMlTransformsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GlueListMlTransformsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueListMlTransformsResponse(obj: GlueListMlTransformsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TransformIds': obj.transformIds?.map(y => y),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueListRegistriesInput
 */
export interface GlueListRegistriesInput {
  /**
   * @schema GlueListRegistriesInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GlueListRegistriesInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GlueListRegistriesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueListRegistriesInput(obj: GlueListRegistriesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueListRegistriesResponse
 */
export interface GlueListRegistriesResponse {
  /**
   * @schema GlueListRegistriesResponse#Registries
   */
  readonly registries?: GlueRegistryListItem[];

  /**
   * @schema GlueListRegistriesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GlueListRegistriesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueListRegistriesResponse(obj: GlueListRegistriesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Registries': obj.registries?.map(y => toJson_GlueRegistryListItem(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueListSchemaVersionsInput
 */
export interface GlueListSchemaVersionsInput {
  /**
   * @schema GlueListSchemaVersionsInput#SchemaId
   */
  readonly schemaId?: GlueSchemaId;

  /**
   * @schema GlueListSchemaVersionsInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GlueListSchemaVersionsInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GlueListSchemaVersionsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueListSchemaVersionsInput(obj: GlueListSchemaVersionsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SchemaId': toJson_GlueSchemaId(obj.schemaId),
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueListSchemaVersionsResponse
 */
export interface GlueListSchemaVersionsResponse {
  /**
   * @schema GlueListSchemaVersionsResponse#Schemas
   */
  readonly schemas?: GlueSchemaVersionListItem[];

  /**
   * @schema GlueListSchemaVersionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GlueListSchemaVersionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueListSchemaVersionsResponse(obj: GlueListSchemaVersionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Schemas': obj.schemas?.map(y => toJson_GlueSchemaVersionListItem(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueListSchemasInput
 */
export interface GlueListSchemasInput {
  /**
   * @schema GlueListSchemasInput#RegistryId
   */
  readonly registryId?: GlueRegistryId;

  /**
   * @schema GlueListSchemasInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GlueListSchemasInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GlueListSchemasInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueListSchemasInput(obj: GlueListSchemasInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegistryId': toJson_GlueRegistryId(obj.registryId),
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueListSchemasResponse
 */
export interface GlueListSchemasResponse {
  /**
   * @schema GlueListSchemasResponse#Schemas
   */
  readonly schemas?: GlueSchemaListItem[];

  /**
   * @schema GlueListSchemasResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GlueListSchemasResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueListSchemasResponse(obj: GlueListSchemasResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Schemas': obj.schemas?.map(y => toJson_GlueSchemaListItem(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueListTriggersRequest
 */
export interface GlueListTriggersRequest {
  /**
   * @schema GlueListTriggersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GlueListTriggersRequest#DependentJobName
   */
  readonly dependentJobName?: string;

  /**
   * @schema GlueListTriggersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GlueListTriggersRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'GlueListTriggersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueListTriggersRequest(obj: GlueListTriggersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'DependentJobName': obj.dependentJobName,
    'MaxResults': obj.maxResults,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueListTriggersResponse
 */
export interface GlueListTriggersResponse {
  /**
   * @schema GlueListTriggersResponse#TriggerNames
   */
  readonly triggerNames?: string[];

  /**
   * @schema GlueListTriggersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GlueListTriggersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueListTriggersResponse(obj: GlueListTriggersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TriggerNames': obj.triggerNames?.map(y => y),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueListWorkflowsRequest
 */
export interface GlueListWorkflowsRequest {
  /**
   * @schema GlueListWorkflowsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GlueListWorkflowsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'GlueListWorkflowsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueListWorkflowsRequest(obj: GlueListWorkflowsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueListWorkflowsResponse
 */
export interface GlueListWorkflowsResponse {
  /**
   * @schema GlueListWorkflowsResponse#Workflows
   */
  readonly workflows?: string[];

  /**
   * @schema GlueListWorkflowsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GlueListWorkflowsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueListWorkflowsResponse(obj: GlueListWorkflowsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Workflows': obj.workflows?.map(y => y),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GluePutDataCatalogEncryptionSettingsRequest
 */
export interface GluePutDataCatalogEncryptionSettingsRequest {
  /**
   * @schema GluePutDataCatalogEncryptionSettingsRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GluePutDataCatalogEncryptionSettingsRequest#DataCatalogEncryptionSettings
   */
  readonly dataCatalogEncryptionSettings?: GlueDataCatalogEncryptionSettings;

}

/**
 * Converts an object of type 'GluePutDataCatalogEncryptionSettingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GluePutDataCatalogEncryptionSettingsRequest(obj: GluePutDataCatalogEncryptionSettingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'DataCatalogEncryptionSettings': toJson_GlueDataCatalogEncryptionSettings(obj.dataCatalogEncryptionSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GluePutDataCatalogEncryptionSettingsResponse
 */
export interface GluePutDataCatalogEncryptionSettingsResponse {
}

/**
 * Converts an object of type 'GluePutDataCatalogEncryptionSettingsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GluePutDataCatalogEncryptionSettingsResponse(obj: GluePutDataCatalogEncryptionSettingsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GluePutResourcePolicyRequest
 */
export interface GluePutResourcePolicyRequest {
  /**
   * @schema GluePutResourcePolicyRequest#PolicyInJson
   */
  readonly policyInJson?: string;

  /**
   * @schema GluePutResourcePolicyRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema GluePutResourcePolicyRequest#PolicyHashCondition
   */
  readonly policyHashCondition?: string;

  /**
   * @schema GluePutResourcePolicyRequest#PolicyExistsCondition
   */
  readonly policyExistsCondition?: string;

  /**
   * @schema GluePutResourcePolicyRequest#EnableHybrid
   */
  readonly enableHybrid?: string;

}

/**
 * Converts an object of type 'GluePutResourcePolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GluePutResourcePolicyRequest(obj: GluePutResourcePolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyInJson': obj.policyInJson,
    'ResourceArn': obj.resourceArn,
    'PolicyHashCondition': obj.policyHashCondition,
    'PolicyExistsCondition': obj.policyExistsCondition,
    'EnableHybrid': obj.enableHybrid,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GluePutResourcePolicyResponse
 */
export interface GluePutResourcePolicyResponse {
  /**
   * @schema GluePutResourcePolicyResponse#PolicyHash
   */
  readonly policyHash?: string;

}

/**
 * Converts an object of type 'GluePutResourcePolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GluePutResourcePolicyResponse(obj: GluePutResourcePolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyHash': obj.policyHash,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GluePutSchemaVersionMetadataInput
 */
export interface GluePutSchemaVersionMetadataInput {
  /**
   * @schema GluePutSchemaVersionMetadataInput#SchemaId
   */
  readonly schemaId?: GlueSchemaId;

  /**
   * @schema GluePutSchemaVersionMetadataInput#SchemaVersionNumber
   */
  readonly schemaVersionNumber?: GlueSchemaVersionNumber;

  /**
   * @schema GluePutSchemaVersionMetadataInput#SchemaVersionId
   */
  readonly schemaVersionId?: string;

  /**
   * @schema GluePutSchemaVersionMetadataInput#MetadataKeyValue
   */
  readonly metadataKeyValue?: GlueMetadataKeyValuePair;

}

/**
 * Converts an object of type 'GluePutSchemaVersionMetadataInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GluePutSchemaVersionMetadataInput(obj: GluePutSchemaVersionMetadataInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SchemaId': toJson_GlueSchemaId(obj.schemaId),
    'SchemaVersionNumber': toJson_GlueSchemaVersionNumber(obj.schemaVersionNumber),
    'SchemaVersionId': obj.schemaVersionId,
    'MetadataKeyValue': toJson_GlueMetadataKeyValuePair(obj.metadataKeyValue),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GluePutSchemaVersionMetadataResponse
 */
export interface GluePutSchemaVersionMetadataResponse {
  /**
   * @schema GluePutSchemaVersionMetadataResponse#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema GluePutSchemaVersionMetadataResponse#SchemaName
   */
  readonly schemaName?: string;

  /**
   * @schema GluePutSchemaVersionMetadataResponse#RegistryName
   */
  readonly registryName?: string;

  /**
   * @schema GluePutSchemaVersionMetadataResponse#LatestVersion
   */
  readonly latestVersion?: boolean;

  /**
   * @schema GluePutSchemaVersionMetadataResponse#VersionNumber
   */
  readonly versionNumber?: number;

  /**
   * @schema GluePutSchemaVersionMetadataResponse#SchemaVersionId
   */
  readonly schemaVersionId?: string;

  /**
   * @schema GluePutSchemaVersionMetadataResponse#MetadataKey
   */
  readonly metadataKey?: string;

  /**
   * @schema GluePutSchemaVersionMetadataResponse#MetadataValue
   */
  readonly metadataValue?: string;

}

/**
 * Converts an object of type 'GluePutSchemaVersionMetadataResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GluePutSchemaVersionMetadataResponse(obj: GluePutSchemaVersionMetadataResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SchemaArn': obj.schemaArn,
    'SchemaName': obj.schemaName,
    'RegistryName': obj.registryName,
    'LatestVersion': obj.latestVersion,
    'VersionNumber': obj.versionNumber,
    'SchemaVersionId': obj.schemaVersionId,
    'MetadataKey': obj.metadataKey,
    'MetadataValue': obj.metadataValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GluePutWorkflowRunPropertiesRequest
 */
export interface GluePutWorkflowRunPropertiesRequest {
  /**
   * @schema GluePutWorkflowRunPropertiesRequest#Name
   */
  readonly name?: string;

  /**
   * @schema GluePutWorkflowRunPropertiesRequest#RunId
   */
  readonly runId?: string;

  /**
   * @schema GluePutWorkflowRunPropertiesRequest#RunProperties
   */
  readonly runProperties?: { [key: string]: string };

}

/**
 * Converts an object of type 'GluePutWorkflowRunPropertiesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GluePutWorkflowRunPropertiesRequest(obj: GluePutWorkflowRunPropertiesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'RunId': obj.runId,
    'RunProperties': ((obj.runProperties) === undefined) ? undefined : (Object.entries(obj.runProperties).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GluePutWorkflowRunPropertiesResponse
 */
export interface GluePutWorkflowRunPropertiesResponse {
}

/**
 * Converts an object of type 'GluePutWorkflowRunPropertiesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GluePutWorkflowRunPropertiesResponse(obj: GluePutWorkflowRunPropertiesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueQuerySchemaVersionMetadataInput
 */
export interface GlueQuerySchemaVersionMetadataInput {
  /**
   * @schema GlueQuerySchemaVersionMetadataInput#SchemaId
   */
  readonly schemaId?: GlueSchemaId;

  /**
   * @schema GlueQuerySchemaVersionMetadataInput#SchemaVersionNumber
   */
  readonly schemaVersionNumber?: GlueSchemaVersionNumber;

  /**
   * @schema GlueQuerySchemaVersionMetadataInput#SchemaVersionId
   */
  readonly schemaVersionId?: string;

  /**
   * @schema GlueQuerySchemaVersionMetadataInput#MetadataList
   */
  readonly metadataList?: GlueMetadataKeyValuePair[];

  /**
   * @schema GlueQuerySchemaVersionMetadataInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GlueQuerySchemaVersionMetadataInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GlueQuerySchemaVersionMetadataInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueQuerySchemaVersionMetadataInput(obj: GlueQuerySchemaVersionMetadataInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SchemaId': toJson_GlueSchemaId(obj.schemaId),
    'SchemaVersionNumber': toJson_GlueSchemaVersionNumber(obj.schemaVersionNumber),
    'SchemaVersionId': obj.schemaVersionId,
    'MetadataList': obj.metadataList?.map(y => toJson_GlueMetadataKeyValuePair(y)),
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueQuerySchemaVersionMetadataResponse
 */
export interface GlueQuerySchemaVersionMetadataResponse {
  /**
   * @schema GlueQuerySchemaVersionMetadataResponse#MetadataInfoMap
   */
  readonly metadataInfoMap?: { [key: string]: GlueMetadataInfo };

  /**
   * @schema GlueQuerySchemaVersionMetadataResponse#SchemaVersionId
   */
  readonly schemaVersionId?: string;

  /**
   * @schema GlueQuerySchemaVersionMetadataResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GlueQuerySchemaVersionMetadataResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueQuerySchemaVersionMetadataResponse(obj: GlueQuerySchemaVersionMetadataResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MetadataInfoMap': ((obj.metadataInfoMap) === undefined) ? undefined : (Object.entries(obj.metadataInfoMap).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_GlueMetadataInfo(i[1]) }), {})),
    'SchemaVersionId': obj.schemaVersionId,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueRegisterSchemaVersionInput
 */
export interface GlueRegisterSchemaVersionInput {
  /**
   * @schema GlueRegisterSchemaVersionInput#SchemaId
   */
  readonly schemaId?: GlueSchemaId;

  /**
   * @schema GlueRegisterSchemaVersionInput#SchemaDefinition
   */
  readonly schemaDefinition?: string;

}

/**
 * Converts an object of type 'GlueRegisterSchemaVersionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueRegisterSchemaVersionInput(obj: GlueRegisterSchemaVersionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SchemaId': toJson_GlueSchemaId(obj.schemaId),
    'SchemaDefinition': obj.schemaDefinition,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueRegisterSchemaVersionResponse
 */
export interface GlueRegisterSchemaVersionResponse {
  /**
   * @schema GlueRegisterSchemaVersionResponse#SchemaVersionId
   */
  readonly schemaVersionId?: string;

  /**
   * @schema GlueRegisterSchemaVersionResponse#VersionNumber
   */
  readonly versionNumber?: number;

  /**
   * @schema GlueRegisterSchemaVersionResponse#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'GlueRegisterSchemaVersionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueRegisterSchemaVersionResponse(obj: GlueRegisterSchemaVersionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SchemaVersionId': obj.schemaVersionId,
    'VersionNumber': obj.versionNumber,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueRemoveSchemaVersionMetadataInput
 */
export interface GlueRemoveSchemaVersionMetadataInput {
  /**
   * @schema GlueRemoveSchemaVersionMetadataInput#SchemaId
   */
  readonly schemaId?: GlueSchemaId;

  /**
   * @schema GlueRemoveSchemaVersionMetadataInput#SchemaVersionNumber
   */
  readonly schemaVersionNumber?: GlueSchemaVersionNumber;

  /**
   * @schema GlueRemoveSchemaVersionMetadataInput#SchemaVersionId
   */
  readonly schemaVersionId?: string;

  /**
   * @schema GlueRemoveSchemaVersionMetadataInput#MetadataKeyValue
   */
  readonly metadataKeyValue?: GlueMetadataKeyValuePair;

}

/**
 * Converts an object of type 'GlueRemoveSchemaVersionMetadataInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueRemoveSchemaVersionMetadataInput(obj: GlueRemoveSchemaVersionMetadataInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SchemaId': toJson_GlueSchemaId(obj.schemaId),
    'SchemaVersionNumber': toJson_GlueSchemaVersionNumber(obj.schemaVersionNumber),
    'SchemaVersionId': obj.schemaVersionId,
    'MetadataKeyValue': toJson_GlueMetadataKeyValuePair(obj.metadataKeyValue),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueRemoveSchemaVersionMetadataResponse
 */
export interface GlueRemoveSchemaVersionMetadataResponse {
  /**
   * @schema GlueRemoveSchemaVersionMetadataResponse#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema GlueRemoveSchemaVersionMetadataResponse#SchemaName
   */
  readonly schemaName?: string;

  /**
   * @schema GlueRemoveSchemaVersionMetadataResponse#RegistryName
   */
  readonly registryName?: string;

  /**
   * @schema GlueRemoveSchemaVersionMetadataResponse#LatestVersion
   */
  readonly latestVersion?: boolean;

  /**
   * @schema GlueRemoveSchemaVersionMetadataResponse#VersionNumber
   */
  readonly versionNumber?: number;

  /**
   * @schema GlueRemoveSchemaVersionMetadataResponse#SchemaVersionId
   */
  readonly schemaVersionId?: string;

  /**
   * @schema GlueRemoveSchemaVersionMetadataResponse#MetadataKey
   */
  readonly metadataKey?: string;

  /**
   * @schema GlueRemoveSchemaVersionMetadataResponse#MetadataValue
   */
  readonly metadataValue?: string;

}

/**
 * Converts an object of type 'GlueRemoveSchemaVersionMetadataResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueRemoveSchemaVersionMetadataResponse(obj: GlueRemoveSchemaVersionMetadataResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SchemaArn': obj.schemaArn,
    'SchemaName': obj.schemaName,
    'RegistryName': obj.registryName,
    'LatestVersion': obj.latestVersion,
    'VersionNumber': obj.versionNumber,
    'SchemaVersionId': obj.schemaVersionId,
    'MetadataKey': obj.metadataKey,
    'MetadataValue': obj.metadataValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueResetJobBookmarkRequest
 */
export interface GlueResetJobBookmarkRequest {
  /**
   * @schema GlueResetJobBookmarkRequest#JobName
   */
  readonly jobName?: string;

  /**
   * @schema GlueResetJobBookmarkRequest#RunId
   */
  readonly runId?: string;

}

/**
 * Converts an object of type 'GlueResetJobBookmarkRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueResetJobBookmarkRequest(obj: GlueResetJobBookmarkRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobName': obj.jobName,
    'RunId': obj.runId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueResetJobBookmarkResponse
 */
export interface GlueResetJobBookmarkResponse {
  /**
   * @schema GlueResetJobBookmarkResponse#JobBookmarkEntry
   */
  readonly jobBookmarkEntry?: GlueJobBookmarkEntry;

}

/**
 * Converts an object of type 'GlueResetJobBookmarkResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueResetJobBookmarkResponse(obj: GlueResetJobBookmarkResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobBookmarkEntry': toJson_GlueJobBookmarkEntry(obj.jobBookmarkEntry),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueResumeWorkflowRunRequest
 */
export interface GlueResumeWorkflowRunRequest {
  /**
   * @schema GlueResumeWorkflowRunRequest#Name
   */
  readonly name?: string;

  /**
   * @schema GlueResumeWorkflowRunRequest#RunId
   */
  readonly runId?: string;

  /**
   * @schema GlueResumeWorkflowRunRequest#NodeIds
   */
  readonly nodeIds?: string[];

}

/**
 * Converts an object of type 'GlueResumeWorkflowRunRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueResumeWorkflowRunRequest(obj: GlueResumeWorkflowRunRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'RunId': obj.runId,
    'NodeIds': obj.nodeIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueResumeWorkflowRunResponse
 */
export interface GlueResumeWorkflowRunResponse {
  /**
   * @schema GlueResumeWorkflowRunResponse#RunId
   */
  readonly runId?: string;

  /**
   * @schema GlueResumeWorkflowRunResponse#NodeIds
   */
  readonly nodeIds?: string[];

}

/**
 * Converts an object of type 'GlueResumeWorkflowRunResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueResumeWorkflowRunResponse(obj: GlueResumeWorkflowRunResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RunId': obj.runId,
    'NodeIds': obj.nodeIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueSearchTablesRequest
 */
export interface GlueSearchTablesRequest {
  /**
   * @schema GlueSearchTablesRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueSearchTablesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GlueSearchTablesRequest#Filters
   */
  readonly filters?: GluePropertyPredicate[];

  /**
   * @schema GlueSearchTablesRequest#SearchText
   */
  readonly searchText?: string;

  /**
   * @schema GlueSearchTablesRequest#SortCriteria
   */
  readonly sortCriteria?: GlueSortCriterion[];

  /**
   * @schema GlueSearchTablesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GlueSearchTablesRequest#ResourceShareType
   */
  readonly resourceShareType?: string;

}

/**
 * Converts an object of type 'GlueSearchTablesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueSearchTablesRequest(obj: GlueSearchTablesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'NextToken': obj.nextToken,
    'Filters': obj.filters?.map(y => toJson_GluePropertyPredicate(y)),
    'SearchText': obj.searchText,
    'SortCriteria': obj.sortCriteria?.map(y => toJson_GlueSortCriterion(y)),
    'MaxResults': obj.maxResults,
    'ResourceShareType': obj.resourceShareType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueSearchTablesResponse
 */
export interface GlueSearchTablesResponse {
  /**
   * @schema GlueSearchTablesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GlueSearchTablesResponse#TableList
   */
  readonly tableList?: GlueTable[];

}

/**
 * Converts an object of type 'GlueSearchTablesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueSearchTablesResponse(obj: GlueSearchTablesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'TableList': obj.tableList?.map(y => toJson_GlueTable(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueStartCrawlerRequest
 */
export interface GlueStartCrawlerRequest {
  /**
   * @schema GlueStartCrawlerRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'GlueStartCrawlerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueStartCrawlerRequest(obj: GlueStartCrawlerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueStartCrawlerResponse
 */
export interface GlueStartCrawlerResponse {
}

/**
 * Converts an object of type 'GlueStartCrawlerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueStartCrawlerResponse(obj: GlueStartCrawlerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueStartCrawlerScheduleRequest
 */
export interface GlueStartCrawlerScheduleRequest {
  /**
   * @schema GlueStartCrawlerScheduleRequest#CrawlerName
   */
  readonly crawlerName?: string;

}

/**
 * Converts an object of type 'GlueStartCrawlerScheduleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueStartCrawlerScheduleRequest(obj: GlueStartCrawlerScheduleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CrawlerName': obj.crawlerName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueStartCrawlerScheduleResponse
 */
export interface GlueStartCrawlerScheduleResponse {
}

/**
 * Converts an object of type 'GlueStartCrawlerScheduleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueStartCrawlerScheduleResponse(obj: GlueStartCrawlerScheduleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueStartExportLabelsTaskRunRequest
 */
export interface GlueStartExportLabelsTaskRunRequest {
  /**
   * @schema GlueStartExportLabelsTaskRunRequest#TransformId
   */
  readonly transformId?: string;

  /**
   * @schema GlueStartExportLabelsTaskRunRequest#OutputS3Path
   */
  readonly outputS3Path?: string;

}

/**
 * Converts an object of type 'GlueStartExportLabelsTaskRunRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueStartExportLabelsTaskRunRequest(obj: GlueStartExportLabelsTaskRunRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TransformId': obj.transformId,
    'OutputS3Path': obj.outputS3Path,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueStartExportLabelsTaskRunResponse
 */
export interface GlueStartExportLabelsTaskRunResponse {
  /**
   * @schema GlueStartExportLabelsTaskRunResponse#TaskRunId
   */
  readonly taskRunId?: string;

}

/**
 * Converts an object of type 'GlueStartExportLabelsTaskRunResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueStartExportLabelsTaskRunResponse(obj: GlueStartExportLabelsTaskRunResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TaskRunId': obj.taskRunId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueStartImportLabelsTaskRunRequest
 */
export interface GlueStartImportLabelsTaskRunRequest {
  /**
   * @schema GlueStartImportLabelsTaskRunRequest#TransformId
   */
  readonly transformId?: string;

  /**
   * @schema GlueStartImportLabelsTaskRunRequest#InputS3Path
   */
  readonly inputS3Path?: string;

  /**
   * @schema GlueStartImportLabelsTaskRunRequest#ReplaceAllLabels
   */
  readonly replaceAllLabels?: boolean;

}

/**
 * Converts an object of type 'GlueStartImportLabelsTaskRunRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueStartImportLabelsTaskRunRequest(obj: GlueStartImportLabelsTaskRunRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TransformId': obj.transformId,
    'InputS3Path': obj.inputS3Path,
    'ReplaceAllLabels': obj.replaceAllLabels,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueStartImportLabelsTaskRunResponse
 */
export interface GlueStartImportLabelsTaskRunResponse {
  /**
   * @schema GlueStartImportLabelsTaskRunResponse#TaskRunId
   */
  readonly taskRunId?: string;

}

/**
 * Converts an object of type 'GlueStartImportLabelsTaskRunResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueStartImportLabelsTaskRunResponse(obj: GlueStartImportLabelsTaskRunResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TaskRunId': obj.taskRunId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueStartJobRunRequest
 */
export interface GlueStartJobRunRequest {
  /**
   * @schema GlueStartJobRunRequest#JobName
   */
  readonly jobName?: string;

  /**
   * @schema GlueStartJobRunRequest#JobRunId
   */
  readonly jobRunId?: string;

  /**
   * @schema GlueStartJobRunRequest#Arguments
   */
  readonly arguments?: { [key: string]: string };

  /**
   * @schema GlueStartJobRunRequest#AllocatedCapacity
   */
  readonly allocatedCapacity?: number;

  /**
   * @schema GlueStartJobRunRequest#Timeout
   */
  readonly timeout?: number;

  /**
   * @schema GlueStartJobRunRequest#MaxCapacity
   */
  readonly maxCapacity?: number;

  /**
   * @schema GlueStartJobRunRequest#SecurityConfiguration
   */
  readonly securityConfiguration?: string;

  /**
   * @schema GlueStartJobRunRequest#NotificationProperty
   */
  readonly notificationProperty?: GlueNotificationProperty;

  /**
   * @schema GlueStartJobRunRequest#WorkerType
   */
  readonly workerType?: string;

  /**
   * @schema GlueStartJobRunRequest#NumberOfWorkers
   */
  readonly numberOfWorkers?: number;

}

/**
 * Converts an object of type 'GlueStartJobRunRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueStartJobRunRequest(obj: GlueStartJobRunRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobName': obj.jobName,
    'JobRunId': obj.jobRunId,
    'Arguments': ((obj.arguments) === undefined) ? undefined : (Object.entries(obj.arguments).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'AllocatedCapacity': obj.allocatedCapacity,
    'Timeout': obj.timeout,
    'MaxCapacity': obj.maxCapacity,
    'SecurityConfiguration': obj.securityConfiguration,
    'NotificationProperty': toJson_GlueNotificationProperty(obj.notificationProperty),
    'WorkerType': obj.workerType,
    'NumberOfWorkers': obj.numberOfWorkers,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueStartJobRunResponse
 */
export interface GlueStartJobRunResponse {
  /**
   * @schema GlueStartJobRunResponse#JobRunId
   */
  readonly jobRunId?: string;

}

/**
 * Converts an object of type 'GlueStartJobRunResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueStartJobRunResponse(obj: GlueStartJobRunResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobRunId': obj.jobRunId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueStartMlEvaluationTaskRunRequest
 */
export interface GlueStartMlEvaluationTaskRunRequest {
  /**
   * @schema GlueStartMlEvaluationTaskRunRequest#TransformId
   */
  readonly transformId?: string;

}

/**
 * Converts an object of type 'GlueStartMlEvaluationTaskRunRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueStartMlEvaluationTaskRunRequest(obj: GlueStartMlEvaluationTaskRunRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TransformId': obj.transformId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueStartMlEvaluationTaskRunResponse
 */
export interface GlueStartMlEvaluationTaskRunResponse {
  /**
   * @schema GlueStartMlEvaluationTaskRunResponse#TaskRunId
   */
  readonly taskRunId?: string;

}

/**
 * Converts an object of type 'GlueStartMlEvaluationTaskRunResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueStartMlEvaluationTaskRunResponse(obj: GlueStartMlEvaluationTaskRunResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TaskRunId': obj.taskRunId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueStartMlLabelingSetGenerationTaskRunRequest
 */
export interface GlueStartMlLabelingSetGenerationTaskRunRequest {
  /**
   * @schema GlueStartMlLabelingSetGenerationTaskRunRequest#TransformId
   */
  readonly transformId?: string;

  /**
   * @schema GlueStartMlLabelingSetGenerationTaskRunRequest#OutputS3Path
   */
  readonly outputS3Path?: string;

}

/**
 * Converts an object of type 'GlueStartMlLabelingSetGenerationTaskRunRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueStartMlLabelingSetGenerationTaskRunRequest(obj: GlueStartMlLabelingSetGenerationTaskRunRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TransformId': obj.transformId,
    'OutputS3Path': obj.outputS3Path,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueStartMlLabelingSetGenerationTaskRunResponse
 */
export interface GlueStartMlLabelingSetGenerationTaskRunResponse {
  /**
   * @schema GlueStartMlLabelingSetGenerationTaskRunResponse#TaskRunId
   */
  readonly taskRunId?: string;

}

/**
 * Converts an object of type 'GlueStartMlLabelingSetGenerationTaskRunResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueStartMlLabelingSetGenerationTaskRunResponse(obj: GlueStartMlLabelingSetGenerationTaskRunResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TaskRunId': obj.taskRunId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueStartTriggerRequest
 */
export interface GlueStartTriggerRequest {
  /**
   * @schema GlueStartTriggerRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'GlueStartTriggerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueStartTriggerRequest(obj: GlueStartTriggerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueStartTriggerResponse
 */
export interface GlueStartTriggerResponse {
  /**
   * @schema GlueStartTriggerResponse#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'GlueStartTriggerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueStartTriggerResponse(obj: GlueStartTriggerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueStartWorkflowRunRequest
 */
export interface GlueStartWorkflowRunRequest {
  /**
   * @schema GlueStartWorkflowRunRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'GlueStartWorkflowRunRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueStartWorkflowRunRequest(obj: GlueStartWorkflowRunRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueStartWorkflowRunResponse
 */
export interface GlueStartWorkflowRunResponse {
  /**
   * @schema GlueStartWorkflowRunResponse#RunId
   */
  readonly runId?: string;

}

/**
 * Converts an object of type 'GlueStartWorkflowRunResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueStartWorkflowRunResponse(obj: GlueStartWorkflowRunResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RunId': obj.runId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueStopCrawlerRequest
 */
export interface GlueStopCrawlerRequest {
  /**
   * @schema GlueStopCrawlerRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'GlueStopCrawlerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueStopCrawlerRequest(obj: GlueStopCrawlerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueStopCrawlerResponse
 */
export interface GlueStopCrawlerResponse {
}

/**
 * Converts an object of type 'GlueStopCrawlerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueStopCrawlerResponse(obj: GlueStopCrawlerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueStopCrawlerScheduleRequest
 */
export interface GlueStopCrawlerScheduleRequest {
  /**
   * @schema GlueStopCrawlerScheduleRequest#CrawlerName
   */
  readonly crawlerName?: string;

}

/**
 * Converts an object of type 'GlueStopCrawlerScheduleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueStopCrawlerScheduleRequest(obj: GlueStopCrawlerScheduleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CrawlerName': obj.crawlerName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueStopCrawlerScheduleResponse
 */
export interface GlueStopCrawlerScheduleResponse {
}

/**
 * Converts an object of type 'GlueStopCrawlerScheduleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueStopCrawlerScheduleResponse(obj: GlueStopCrawlerScheduleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueStopTriggerRequest
 */
export interface GlueStopTriggerRequest {
  /**
   * @schema GlueStopTriggerRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'GlueStopTriggerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueStopTriggerRequest(obj: GlueStopTriggerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueStopTriggerResponse
 */
export interface GlueStopTriggerResponse {
  /**
   * @schema GlueStopTriggerResponse#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'GlueStopTriggerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueStopTriggerResponse(obj: GlueStopTriggerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueStopWorkflowRunRequest
 */
export interface GlueStopWorkflowRunRequest {
  /**
   * @schema GlueStopWorkflowRunRequest#Name
   */
  readonly name?: string;

  /**
   * @schema GlueStopWorkflowRunRequest#RunId
   */
  readonly runId?: string;

}

/**
 * Converts an object of type 'GlueStopWorkflowRunRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueStopWorkflowRunRequest(obj: GlueStopWorkflowRunRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'RunId': obj.runId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueStopWorkflowRunResponse
 */
export interface GlueStopWorkflowRunResponse {
}

/**
 * Converts an object of type 'GlueStopWorkflowRunResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueStopWorkflowRunResponse(obj: GlueStopWorkflowRunResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueTagResourceRequest
 */
export interface GlueTagResourceRequest {
  /**
   * @schema GlueTagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema GlueTagResourceRequest#TagsToAdd
   */
  readonly tagsToAdd?: { [key: string]: string };

}

/**
 * Converts an object of type 'GlueTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueTagResourceRequest(obj: GlueTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'TagsToAdd': ((obj.tagsToAdd) === undefined) ? undefined : (Object.entries(obj.tagsToAdd).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueTagResourceResponse
 */
export interface GlueTagResourceResponse {
}

/**
 * Converts an object of type 'GlueTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueTagResourceResponse(obj: GlueTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueUntagResourceRequest
 */
export interface GlueUntagResourceRequest {
  /**
   * @schema GlueUntagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema GlueUntagResourceRequest#TagsToRemove
   */
  readonly tagsToRemove?: string[];

}

/**
 * Converts an object of type 'GlueUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueUntagResourceRequest(obj: GlueUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'TagsToRemove': obj.tagsToRemove?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueUntagResourceResponse
 */
export interface GlueUntagResourceResponse {
}

/**
 * Converts an object of type 'GlueUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueUntagResourceResponse(obj: GlueUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueUpdateClassifierRequest
 */
export interface GlueUpdateClassifierRequest {
  /**
   * @schema GlueUpdateClassifierRequest#GrokClassifier
   */
  readonly grokClassifier?: GlueUpdateGrokClassifierRequest;

  /**
   * @schema GlueUpdateClassifierRequest#XMLClassifier
   */
  readonly xmlClassifier?: GlueUpdateXmlClassifierRequest;

  /**
   * @schema GlueUpdateClassifierRequest#JsonClassifier
   */
  readonly jsonClassifier?: GlueUpdateJsonClassifierRequest;

  /**
   * @schema GlueUpdateClassifierRequest#CsvClassifier
   */
  readonly csvClassifier?: GlueUpdateCsvClassifierRequest;

}

/**
 * Converts an object of type 'GlueUpdateClassifierRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueUpdateClassifierRequest(obj: GlueUpdateClassifierRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GrokClassifier': toJson_GlueUpdateGrokClassifierRequest(obj.grokClassifier),
    'XMLClassifier': toJson_GlueUpdateXmlClassifierRequest(obj.xmlClassifier),
    'JsonClassifier': toJson_GlueUpdateJsonClassifierRequest(obj.jsonClassifier),
    'CsvClassifier': toJson_GlueUpdateCsvClassifierRequest(obj.csvClassifier),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueUpdateClassifierResponse
 */
export interface GlueUpdateClassifierResponse {
}

/**
 * Converts an object of type 'GlueUpdateClassifierResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueUpdateClassifierResponse(obj: GlueUpdateClassifierResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueUpdateColumnStatisticsForPartitionRequest
 */
export interface GlueUpdateColumnStatisticsForPartitionRequest {
  /**
   * @schema GlueUpdateColumnStatisticsForPartitionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueUpdateColumnStatisticsForPartitionRequest#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema GlueUpdateColumnStatisticsForPartitionRequest#TableName
   */
  readonly tableName?: string;

  /**
   * @schema GlueUpdateColumnStatisticsForPartitionRequest#PartitionValues
   */
  readonly partitionValues?: string[];

  /**
   * @schema GlueUpdateColumnStatisticsForPartitionRequest#ColumnStatisticsList
   */
  readonly columnStatisticsList?: GlueColumnStatistics[];

}

/**
 * Converts an object of type 'GlueUpdateColumnStatisticsForPartitionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueUpdateColumnStatisticsForPartitionRequest(obj: GlueUpdateColumnStatisticsForPartitionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'DatabaseName': obj.databaseName,
    'TableName': obj.tableName,
    'PartitionValues': obj.partitionValues?.map(y => y),
    'ColumnStatisticsList': obj.columnStatisticsList?.map(y => toJson_GlueColumnStatistics(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueUpdateColumnStatisticsForPartitionResponse
 */
export interface GlueUpdateColumnStatisticsForPartitionResponse {
  /**
   * @schema GlueUpdateColumnStatisticsForPartitionResponse#Errors
   */
  readonly errors?: GlueColumnStatisticsError[];

}

/**
 * Converts an object of type 'GlueUpdateColumnStatisticsForPartitionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueUpdateColumnStatisticsForPartitionResponse(obj: GlueUpdateColumnStatisticsForPartitionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Errors': obj.errors?.map(y => toJson_GlueColumnStatisticsError(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueUpdateColumnStatisticsForTableRequest
 */
export interface GlueUpdateColumnStatisticsForTableRequest {
  /**
   * @schema GlueUpdateColumnStatisticsForTableRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueUpdateColumnStatisticsForTableRequest#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema GlueUpdateColumnStatisticsForTableRequest#TableName
   */
  readonly tableName?: string;

  /**
   * @schema GlueUpdateColumnStatisticsForTableRequest#ColumnStatisticsList
   */
  readonly columnStatisticsList?: GlueColumnStatistics[];

}

/**
 * Converts an object of type 'GlueUpdateColumnStatisticsForTableRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueUpdateColumnStatisticsForTableRequest(obj: GlueUpdateColumnStatisticsForTableRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'DatabaseName': obj.databaseName,
    'TableName': obj.tableName,
    'ColumnStatisticsList': obj.columnStatisticsList?.map(y => toJson_GlueColumnStatistics(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueUpdateColumnStatisticsForTableResponse
 */
export interface GlueUpdateColumnStatisticsForTableResponse {
  /**
   * @schema GlueUpdateColumnStatisticsForTableResponse#Errors
   */
  readonly errors?: GlueColumnStatisticsError[];

}

/**
 * Converts an object of type 'GlueUpdateColumnStatisticsForTableResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueUpdateColumnStatisticsForTableResponse(obj: GlueUpdateColumnStatisticsForTableResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Errors': obj.errors?.map(y => toJson_GlueColumnStatisticsError(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueUpdateConnectionRequest
 */
export interface GlueUpdateConnectionRequest {
  /**
   * @schema GlueUpdateConnectionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueUpdateConnectionRequest#Name
   */
  readonly name?: string;

  /**
   * @schema GlueUpdateConnectionRequest#ConnectionInput
   */
  readonly connectionInput?: GlueConnectionInput;

}

/**
 * Converts an object of type 'GlueUpdateConnectionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueUpdateConnectionRequest(obj: GlueUpdateConnectionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'Name': obj.name,
    'ConnectionInput': toJson_GlueConnectionInput(obj.connectionInput),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueUpdateConnectionResponse
 */
export interface GlueUpdateConnectionResponse {
}

/**
 * Converts an object of type 'GlueUpdateConnectionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueUpdateConnectionResponse(obj: GlueUpdateConnectionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueUpdateCrawlerRequest
 */
export interface GlueUpdateCrawlerRequest {
  /**
   * @schema GlueUpdateCrawlerRequest#Name
   */
  readonly name?: string;

  /**
   * @schema GlueUpdateCrawlerRequest#Role
   */
  readonly role?: string;

  /**
   * @schema GlueUpdateCrawlerRequest#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema GlueUpdateCrawlerRequest#Description
   */
  readonly description?: string;

  /**
   * @schema GlueUpdateCrawlerRequest#Targets
   */
  readonly targets?: GlueCrawlerTargets;

  /**
   * @schema GlueUpdateCrawlerRequest#Schedule
   */
  readonly schedule?: string;

  /**
   * @schema GlueUpdateCrawlerRequest#Classifiers
   */
  readonly classifiers?: string[];

  /**
   * @schema GlueUpdateCrawlerRequest#TablePrefix
   */
  readonly tablePrefix?: string;

  /**
   * @schema GlueUpdateCrawlerRequest#SchemaChangePolicy
   */
  readonly schemaChangePolicy?: GlueSchemaChangePolicy;

  /**
   * @schema GlueUpdateCrawlerRequest#RecrawlPolicy
   */
  readonly recrawlPolicy?: GlueRecrawlPolicy;

  /**
   * @schema GlueUpdateCrawlerRequest#LineageConfiguration
   */
  readonly lineageConfiguration?: GlueLineageConfiguration;

  /**
   * @schema GlueUpdateCrawlerRequest#Configuration
   */
  readonly configuration?: string;

  /**
   * @schema GlueUpdateCrawlerRequest#CrawlerSecurityConfiguration
   */
  readonly crawlerSecurityConfiguration?: string;

}

/**
 * Converts an object of type 'GlueUpdateCrawlerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueUpdateCrawlerRequest(obj: GlueUpdateCrawlerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Role': obj.role,
    'DatabaseName': obj.databaseName,
    'Description': obj.description,
    'Targets': toJson_GlueCrawlerTargets(obj.targets),
    'Schedule': obj.schedule,
    'Classifiers': obj.classifiers?.map(y => y),
    'TablePrefix': obj.tablePrefix,
    'SchemaChangePolicy': toJson_GlueSchemaChangePolicy(obj.schemaChangePolicy),
    'RecrawlPolicy': toJson_GlueRecrawlPolicy(obj.recrawlPolicy),
    'LineageConfiguration': toJson_GlueLineageConfiguration(obj.lineageConfiguration),
    'Configuration': obj.configuration,
    'CrawlerSecurityConfiguration': obj.crawlerSecurityConfiguration,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueUpdateCrawlerResponse
 */
export interface GlueUpdateCrawlerResponse {
}

/**
 * Converts an object of type 'GlueUpdateCrawlerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueUpdateCrawlerResponse(obj: GlueUpdateCrawlerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueUpdateCrawlerScheduleRequest
 */
export interface GlueUpdateCrawlerScheduleRequest {
  /**
   * @schema GlueUpdateCrawlerScheduleRequest#CrawlerName
   */
  readonly crawlerName?: string;

  /**
   * @schema GlueUpdateCrawlerScheduleRequest#Schedule
   */
  readonly schedule?: string;

}

/**
 * Converts an object of type 'GlueUpdateCrawlerScheduleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueUpdateCrawlerScheduleRequest(obj: GlueUpdateCrawlerScheduleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CrawlerName': obj.crawlerName,
    'Schedule': obj.schedule,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueUpdateCrawlerScheduleResponse
 */
export interface GlueUpdateCrawlerScheduleResponse {
}

/**
 * Converts an object of type 'GlueUpdateCrawlerScheduleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueUpdateCrawlerScheduleResponse(obj: GlueUpdateCrawlerScheduleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueUpdateDatabaseRequest
 */
export interface GlueUpdateDatabaseRequest {
  /**
   * @schema GlueUpdateDatabaseRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueUpdateDatabaseRequest#Name
   */
  readonly name?: string;

  /**
   * @schema GlueUpdateDatabaseRequest#DatabaseInput
   */
  readonly databaseInput?: GlueDatabaseInput;

}

/**
 * Converts an object of type 'GlueUpdateDatabaseRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueUpdateDatabaseRequest(obj: GlueUpdateDatabaseRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'Name': obj.name,
    'DatabaseInput': toJson_GlueDatabaseInput(obj.databaseInput),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueUpdateDatabaseResponse
 */
export interface GlueUpdateDatabaseResponse {
}

/**
 * Converts an object of type 'GlueUpdateDatabaseResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueUpdateDatabaseResponse(obj: GlueUpdateDatabaseResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueUpdateDevEndpointRequest
 */
export interface GlueUpdateDevEndpointRequest {
  /**
   * @schema GlueUpdateDevEndpointRequest#EndpointName
   */
  readonly endpointName?: string;

  /**
   * @schema GlueUpdateDevEndpointRequest#PublicKey
   */
  readonly publicKey?: string;

  /**
   * @schema GlueUpdateDevEndpointRequest#AddPublicKeys
   */
  readonly addPublicKeys?: string[];

  /**
   * @schema GlueUpdateDevEndpointRequest#DeletePublicKeys
   */
  readonly deletePublicKeys?: string[];

  /**
   * @schema GlueUpdateDevEndpointRequest#CustomLibraries
   */
  readonly customLibraries?: GlueDevEndpointCustomLibraries;

  /**
   * @schema GlueUpdateDevEndpointRequest#UpdateEtlLibraries
   */
  readonly updateEtlLibraries?: boolean;

  /**
   * @schema GlueUpdateDevEndpointRequest#DeleteArguments
   */
  readonly deleteArguments?: string[];

  /**
   * @schema GlueUpdateDevEndpointRequest#AddArguments
   */
  readonly addArguments?: { [key: string]: string };

}

/**
 * Converts an object of type 'GlueUpdateDevEndpointRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueUpdateDevEndpointRequest(obj: GlueUpdateDevEndpointRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndpointName': obj.endpointName,
    'PublicKey': obj.publicKey,
    'AddPublicKeys': obj.addPublicKeys?.map(y => y),
    'DeletePublicKeys': obj.deletePublicKeys?.map(y => y),
    'CustomLibraries': toJson_GlueDevEndpointCustomLibraries(obj.customLibraries),
    'UpdateEtlLibraries': obj.updateEtlLibraries,
    'DeleteArguments': obj.deleteArguments?.map(y => y),
    'AddArguments': ((obj.addArguments) === undefined) ? undefined : (Object.entries(obj.addArguments).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueUpdateDevEndpointResponse
 */
export interface GlueUpdateDevEndpointResponse {
}

/**
 * Converts an object of type 'GlueUpdateDevEndpointResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueUpdateDevEndpointResponse(obj: GlueUpdateDevEndpointResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueUpdateJobRequest
 */
export interface GlueUpdateJobRequest {
  /**
   * @schema GlueUpdateJobRequest#JobName
   */
  readonly jobName?: string;

  /**
   * @schema GlueUpdateJobRequest#JobUpdate
   */
  readonly jobUpdate?: GlueJobUpdate;

}

/**
 * Converts an object of type 'GlueUpdateJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueUpdateJobRequest(obj: GlueUpdateJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobName': obj.jobName,
    'JobUpdate': toJson_GlueJobUpdate(obj.jobUpdate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueUpdateJobResponse
 */
export interface GlueUpdateJobResponse {
  /**
   * @schema GlueUpdateJobResponse#JobName
   */
  readonly jobName?: string;

}

/**
 * Converts an object of type 'GlueUpdateJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueUpdateJobResponse(obj: GlueUpdateJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobName': obj.jobName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueUpdateMlTransformRequest
 */
export interface GlueUpdateMlTransformRequest {
  /**
   * @schema GlueUpdateMlTransformRequest#TransformId
   */
  readonly transformId?: string;

  /**
   * @schema GlueUpdateMlTransformRequest#Name
   */
  readonly name?: string;

  /**
   * @schema GlueUpdateMlTransformRequest#Description
   */
  readonly description?: string;

  /**
   * @schema GlueUpdateMlTransformRequest#Parameters
   */
  readonly parameters?: GlueTransformParameters;

  /**
   * @schema GlueUpdateMlTransformRequest#Role
   */
  readonly role?: string;

  /**
   * @schema GlueUpdateMlTransformRequest#GlueVersion
   */
  readonly glueVersion?: string;

  /**
   * @schema GlueUpdateMlTransformRequest#MaxCapacity
   */
  readonly maxCapacity?: number;

  /**
   * @schema GlueUpdateMlTransformRequest#WorkerType
   */
  readonly workerType?: string;

  /**
   * @schema GlueUpdateMlTransformRequest#NumberOfWorkers
   */
  readonly numberOfWorkers?: number;

  /**
   * @schema GlueUpdateMlTransformRequest#Timeout
   */
  readonly timeout?: number;

  /**
   * @schema GlueUpdateMlTransformRequest#MaxRetries
   */
  readonly maxRetries?: number;

}

/**
 * Converts an object of type 'GlueUpdateMlTransformRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueUpdateMlTransformRequest(obj: GlueUpdateMlTransformRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TransformId': obj.transformId,
    'Name': obj.name,
    'Description': obj.description,
    'Parameters': toJson_GlueTransformParameters(obj.parameters),
    'Role': obj.role,
    'GlueVersion': obj.glueVersion,
    'MaxCapacity': obj.maxCapacity,
    'WorkerType': obj.workerType,
    'NumberOfWorkers': obj.numberOfWorkers,
    'Timeout': obj.timeout,
    'MaxRetries': obj.maxRetries,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueUpdateMlTransformResponse
 */
export interface GlueUpdateMlTransformResponse {
  /**
   * @schema GlueUpdateMlTransformResponse#TransformId
   */
  readonly transformId?: string;

}

/**
 * Converts an object of type 'GlueUpdateMlTransformResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueUpdateMlTransformResponse(obj: GlueUpdateMlTransformResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TransformId': obj.transformId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueUpdatePartitionRequest
 */
export interface GlueUpdatePartitionRequest {
  /**
   * @schema GlueUpdatePartitionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueUpdatePartitionRequest#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema GlueUpdatePartitionRequest#TableName
   */
  readonly tableName?: string;

  /**
   * @schema GlueUpdatePartitionRequest#PartitionValueList
   */
  readonly partitionValueList?: string[];

  /**
   * @schema GlueUpdatePartitionRequest#PartitionInput
   */
  readonly partitionInput?: GluePartitionInput;

}

/**
 * Converts an object of type 'GlueUpdatePartitionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueUpdatePartitionRequest(obj: GlueUpdatePartitionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'DatabaseName': obj.databaseName,
    'TableName': obj.tableName,
    'PartitionValueList': obj.partitionValueList?.map(y => y),
    'PartitionInput': toJson_GluePartitionInput(obj.partitionInput),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueUpdatePartitionResponse
 */
export interface GlueUpdatePartitionResponse {
}

/**
 * Converts an object of type 'GlueUpdatePartitionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueUpdatePartitionResponse(obj: GlueUpdatePartitionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueUpdateRegistryInput
 */
export interface GlueUpdateRegistryInput {
  /**
   * @schema GlueUpdateRegistryInput#RegistryId
   */
  readonly registryId?: GlueRegistryId;

  /**
   * @schema GlueUpdateRegistryInput#Description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'GlueUpdateRegistryInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueUpdateRegistryInput(obj: GlueUpdateRegistryInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegistryId': toJson_GlueRegistryId(obj.registryId),
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueUpdateRegistryResponse
 */
export interface GlueUpdateRegistryResponse {
  /**
   * @schema GlueUpdateRegistryResponse#RegistryName
   */
  readonly registryName?: string;

  /**
   * @schema GlueUpdateRegistryResponse#RegistryArn
   */
  readonly registryArn?: string;

}

/**
 * Converts an object of type 'GlueUpdateRegistryResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueUpdateRegistryResponse(obj: GlueUpdateRegistryResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegistryName': obj.registryName,
    'RegistryArn': obj.registryArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueUpdateSchemaInput
 */
export interface GlueUpdateSchemaInput {
  /**
   * @schema GlueUpdateSchemaInput#SchemaId
   */
  readonly schemaId?: GlueSchemaId;

  /**
   * @schema GlueUpdateSchemaInput#SchemaVersionNumber
   */
  readonly schemaVersionNumber?: GlueSchemaVersionNumber;

  /**
   * @schema GlueUpdateSchemaInput#Compatibility
   */
  readonly compatibility?: string;

  /**
   * @schema GlueUpdateSchemaInput#Description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'GlueUpdateSchemaInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueUpdateSchemaInput(obj: GlueUpdateSchemaInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SchemaId': toJson_GlueSchemaId(obj.schemaId),
    'SchemaVersionNumber': toJson_GlueSchemaVersionNumber(obj.schemaVersionNumber),
    'Compatibility': obj.compatibility,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueUpdateSchemaResponse
 */
export interface GlueUpdateSchemaResponse {
  /**
   * @schema GlueUpdateSchemaResponse#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema GlueUpdateSchemaResponse#SchemaName
   */
  readonly schemaName?: string;

  /**
   * @schema GlueUpdateSchemaResponse#RegistryName
   */
  readonly registryName?: string;

}

/**
 * Converts an object of type 'GlueUpdateSchemaResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueUpdateSchemaResponse(obj: GlueUpdateSchemaResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SchemaArn': obj.schemaArn,
    'SchemaName': obj.schemaName,
    'RegistryName': obj.registryName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueUpdateTableRequest
 */
export interface GlueUpdateTableRequest {
  /**
   * @schema GlueUpdateTableRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueUpdateTableRequest#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema GlueUpdateTableRequest#TableInput
   */
  readonly tableInput?: GlueTableInput;

  /**
   * @schema GlueUpdateTableRequest#SkipArchive
   */
  readonly skipArchive?: boolean;

}

/**
 * Converts an object of type 'GlueUpdateTableRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueUpdateTableRequest(obj: GlueUpdateTableRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'DatabaseName': obj.databaseName,
    'TableInput': toJson_GlueTableInput(obj.tableInput),
    'SkipArchive': obj.skipArchive,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueUpdateTableResponse
 */
export interface GlueUpdateTableResponse {
}

/**
 * Converts an object of type 'GlueUpdateTableResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueUpdateTableResponse(obj: GlueUpdateTableResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueUpdateTriggerRequest
 */
export interface GlueUpdateTriggerRequest {
  /**
   * @schema GlueUpdateTriggerRequest#Name
   */
  readonly name?: string;

  /**
   * @schema GlueUpdateTriggerRequest#TriggerUpdate
   */
  readonly triggerUpdate?: GlueTriggerUpdate;

}

/**
 * Converts an object of type 'GlueUpdateTriggerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueUpdateTriggerRequest(obj: GlueUpdateTriggerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'TriggerUpdate': toJson_GlueTriggerUpdate(obj.triggerUpdate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueUpdateTriggerResponse
 */
export interface GlueUpdateTriggerResponse {
  /**
   * @schema GlueUpdateTriggerResponse#Trigger
   */
  readonly trigger?: GlueTrigger;

}

/**
 * Converts an object of type 'GlueUpdateTriggerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueUpdateTriggerResponse(obj: GlueUpdateTriggerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Trigger': toJson_GlueTrigger(obj.trigger),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueUpdateUserDefinedFunctionRequest
 */
export interface GlueUpdateUserDefinedFunctionRequest {
  /**
   * @schema GlueUpdateUserDefinedFunctionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueUpdateUserDefinedFunctionRequest#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema GlueUpdateUserDefinedFunctionRequest#FunctionName
   */
  readonly functionName?: string;

  /**
   * @schema GlueUpdateUserDefinedFunctionRequest#FunctionInput
   */
  readonly functionInput?: GlueUserDefinedFunctionInput;

}

/**
 * Converts an object of type 'GlueUpdateUserDefinedFunctionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueUpdateUserDefinedFunctionRequest(obj: GlueUpdateUserDefinedFunctionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'DatabaseName': obj.databaseName,
    'FunctionName': obj.functionName,
    'FunctionInput': toJson_GlueUserDefinedFunctionInput(obj.functionInput),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueUpdateUserDefinedFunctionResponse
 */
export interface GlueUpdateUserDefinedFunctionResponse {
}

/**
 * Converts an object of type 'GlueUpdateUserDefinedFunctionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueUpdateUserDefinedFunctionResponse(obj: GlueUpdateUserDefinedFunctionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueUpdateWorkflowRequest
 */
export interface GlueUpdateWorkflowRequest {
  /**
   * @schema GlueUpdateWorkflowRequest#Name
   */
  readonly name?: string;

  /**
   * @schema GlueUpdateWorkflowRequest#Description
   */
  readonly description?: string;

  /**
   * @schema GlueUpdateWorkflowRequest#DefaultRunProperties
   */
  readonly defaultRunProperties?: { [key: string]: string };

  /**
   * @schema GlueUpdateWorkflowRequest#MaxConcurrentRuns
   */
  readonly maxConcurrentRuns?: number;

}

/**
 * Converts an object of type 'GlueUpdateWorkflowRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueUpdateWorkflowRequest(obj: GlueUpdateWorkflowRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Description': obj.description,
    'DefaultRunProperties': ((obj.defaultRunProperties) === undefined) ? undefined : (Object.entries(obj.defaultRunProperties).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'MaxConcurrentRuns': obj.maxConcurrentRuns,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueUpdateWorkflowResponse
 */
export interface GlueUpdateWorkflowResponse {
  /**
   * @schema GlueUpdateWorkflowResponse#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'GlueUpdateWorkflowResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueUpdateWorkflowResponse(obj: GlueUpdateWorkflowResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GluePartitionInput
 */
export interface GluePartitionInput {
  /**
   * @schema GluePartitionInput#Values
   */
  readonly values?: string[];

  /**
   * @schema GluePartitionInput#LastAccessTime
   */
  readonly lastAccessTime?: string;

  /**
   * @schema GluePartitionInput#StorageDescriptor
   */
  readonly storageDescriptor?: GlueStorageDescriptor;

  /**
   * @schema GluePartitionInput#Parameters
   */
  readonly parameters?: { [key: string]: string };

  /**
   * @schema GluePartitionInput#LastAnalyzedTime
   */
  readonly lastAnalyzedTime?: string;

}

/**
 * Converts an object of type 'GluePartitionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GluePartitionInput(obj: GluePartitionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Values': obj.values?.map(y => y),
    'LastAccessTime': obj.lastAccessTime,
    'StorageDescriptor': toJson_GlueStorageDescriptor(obj.storageDescriptor),
    'Parameters': ((obj.parameters) === undefined) ? undefined : (Object.entries(obj.parameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'LastAnalyzedTime': obj.lastAnalyzedTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GluePartitionError
 */
export interface GluePartitionError {
  /**
   * @schema GluePartitionError#PartitionValues
   */
  readonly partitionValues?: string[];

  /**
   * @schema GluePartitionError#ErrorDetail
   */
  readonly errorDetail?: GlueErrorDetail;

}

/**
 * Converts an object of type 'GluePartitionError' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GluePartitionError(obj: GluePartitionError | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PartitionValues': obj.partitionValues?.map(y => y),
    'ErrorDetail': toJson_GlueErrorDetail(obj.errorDetail),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueErrorDetail
 */
export interface GlueErrorDetail {
  /**
   * @schema GlueErrorDetail#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema GlueErrorDetail#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * Converts an object of type 'GlueErrorDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueErrorDetail(obj: GlueErrorDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ErrorCode': obj.errorCode,
    'ErrorMessage': obj.errorMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GluePartitionValueList
 */
export interface GluePartitionValueList {
  /**
   * @schema GluePartitionValueList#Values
   */
  readonly values?: string[];

}

/**
 * Converts an object of type 'GluePartitionValueList' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GluePartitionValueList(obj: GluePartitionValueList | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Values': obj.values?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueTableError
 */
export interface GlueTableError {
  /**
   * @schema GlueTableError#TableName
   */
  readonly tableName?: string;

  /**
   * @schema GlueTableError#ErrorDetail
   */
  readonly errorDetail?: GlueErrorDetail;

}

/**
 * Converts an object of type 'GlueTableError' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueTableError(obj: GlueTableError | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TableName': obj.tableName,
    'ErrorDetail': toJson_GlueErrorDetail(obj.errorDetail),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueTableVersionError
 */
export interface GlueTableVersionError {
  /**
   * @schema GlueTableVersionError#TableName
   */
  readonly tableName?: string;

  /**
   * @schema GlueTableVersionError#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema GlueTableVersionError#ErrorDetail
   */
  readonly errorDetail?: GlueErrorDetail;

}

/**
 * Converts an object of type 'GlueTableVersionError' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueTableVersionError(obj: GlueTableVersionError | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TableName': obj.tableName,
    'VersionId': obj.versionId,
    'ErrorDetail': toJson_GlueErrorDetail(obj.errorDetail),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueCrawler
 */
export interface GlueCrawler {
  /**
   * @schema GlueCrawler#Name
   */
  readonly name?: string;

  /**
   * @schema GlueCrawler#Role
   */
  readonly role?: string;

  /**
   * @schema GlueCrawler#Targets
   */
  readonly targets?: GlueCrawlerTargets;

  /**
   * @schema GlueCrawler#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema GlueCrawler#Description
   */
  readonly description?: string;

  /**
   * @schema GlueCrawler#Classifiers
   */
  readonly classifiers?: string[];

  /**
   * @schema GlueCrawler#RecrawlPolicy
   */
  readonly recrawlPolicy?: GlueRecrawlPolicy;

  /**
   * @schema GlueCrawler#SchemaChangePolicy
   */
  readonly schemaChangePolicy?: GlueSchemaChangePolicy;

  /**
   * @schema GlueCrawler#LineageConfiguration
   */
  readonly lineageConfiguration?: GlueLineageConfiguration;

  /**
   * @schema GlueCrawler#State
   */
  readonly state?: string;

  /**
   * @schema GlueCrawler#TablePrefix
   */
  readonly tablePrefix?: string;

  /**
   * @schema GlueCrawler#Schedule
   */
  readonly schedule?: GlueSchedule;

  /**
   * @schema GlueCrawler#CrawlElapsedTime
   */
  readonly crawlElapsedTime?: number;

  /**
   * @schema GlueCrawler#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema GlueCrawler#LastUpdated
   */
  readonly lastUpdated?: string;

  /**
   * @schema GlueCrawler#LastCrawl
   */
  readonly lastCrawl?: GlueLastCrawlInfo;

  /**
   * @schema GlueCrawler#Version
   */
  readonly version?: number;

  /**
   * @schema GlueCrawler#Configuration
   */
  readonly configuration?: string;

  /**
   * @schema GlueCrawler#CrawlerSecurityConfiguration
   */
  readonly crawlerSecurityConfiguration?: string;

}

/**
 * Converts an object of type 'GlueCrawler' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueCrawler(obj: GlueCrawler | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Role': obj.role,
    'Targets': toJson_GlueCrawlerTargets(obj.targets),
    'DatabaseName': obj.databaseName,
    'Description': obj.description,
    'Classifiers': obj.classifiers?.map(y => y),
    'RecrawlPolicy': toJson_GlueRecrawlPolicy(obj.recrawlPolicy),
    'SchemaChangePolicy': toJson_GlueSchemaChangePolicy(obj.schemaChangePolicy),
    'LineageConfiguration': toJson_GlueLineageConfiguration(obj.lineageConfiguration),
    'State': obj.state,
    'TablePrefix': obj.tablePrefix,
    'Schedule': toJson_GlueSchedule(obj.schedule),
    'CrawlElapsedTime': obj.crawlElapsedTime,
    'CreationTime': obj.creationTime,
    'LastUpdated': obj.lastUpdated,
    'LastCrawl': toJson_GlueLastCrawlInfo(obj.lastCrawl),
    'Version': obj.version,
    'Configuration': obj.configuration,
    'CrawlerSecurityConfiguration': obj.crawlerSecurityConfiguration,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueDevEndpoint
 */
export interface GlueDevEndpoint {
  /**
   * @schema GlueDevEndpoint#EndpointName
   */
  readonly endpointName?: string;

  /**
   * @schema GlueDevEndpoint#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema GlueDevEndpoint#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema GlueDevEndpoint#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema GlueDevEndpoint#YarnEndpointAddress
   */
  readonly yarnEndpointAddress?: string;

  /**
   * @schema GlueDevEndpoint#PrivateAddress
   */
  readonly privateAddress?: string;

  /**
   * @schema GlueDevEndpoint#ZeppelinRemoteSparkInterpreterPort
   */
  readonly zeppelinRemoteSparkInterpreterPort?: number;

  /**
   * @schema GlueDevEndpoint#PublicAddress
   */
  readonly publicAddress?: string;

  /**
   * @schema GlueDevEndpoint#Status
   */
  readonly status?: string;

  /**
   * @schema GlueDevEndpoint#WorkerType
   */
  readonly workerType?: string;

  /**
   * @schema GlueDevEndpoint#GlueVersion
   */
  readonly glueVersion?: string;

  /**
   * @schema GlueDevEndpoint#NumberOfWorkers
   */
  readonly numberOfWorkers?: number;

  /**
   * @schema GlueDevEndpoint#NumberOfNodes
   */
  readonly numberOfNodes?: number;

  /**
   * @schema GlueDevEndpoint#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema GlueDevEndpoint#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema GlueDevEndpoint#ExtraPythonLibsS3Path
   */
  readonly extraPythonLibsS3Path?: string;

  /**
   * @schema GlueDevEndpoint#ExtraJarsS3Path
   */
  readonly extraJarsS3Path?: string;

  /**
   * @schema GlueDevEndpoint#FailureReason
   */
  readonly failureReason?: string;

  /**
   * @schema GlueDevEndpoint#LastUpdateStatus
   */
  readonly lastUpdateStatus?: string;

  /**
   * @schema GlueDevEndpoint#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema GlueDevEndpoint#LastModifiedTimestamp
   */
  readonly lastModifiedTimestamp?: string;

  /**
   * @schema GlueDevEndpoint#PublicKey
   */
  readonly publicKey?: string;

  /**
   * @schema GlueDevEndpoint#PublicKeys
   */
  readonly publicKeys?: string[];

  /**
   * @schema GlueDevEndpoint#SecurityConfiguration
   */
  readonly securityConfiguration?: string;

  /**
   * @schema GlueDevEndpoint#Arguments
   */
  readonly arguments?: { [key: string]: string };

}

/**
 * Converts an object of type 'GlueDevEndpoint' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueDevEndpoint(obj: GlueDevEndpoint | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndpointName': obj.endpointName,
    'RoleArn': obj.roleArn,
    'SecurityGroupIds': obj.securityGroupIds?.map(y => y),
    'SubnetId': obj.subnetId,
    'YarnEndpointAddress': obj.yarnEndpointAddress,
    'PrivateAddress': obj.privateAddress,
    'ZeppelinRemoteSparkInterpreterPort': obj.zeppelinRemoteSparkInterpreterPort,
    'PublicAddress': obj.publicAddress,
    'Status': obj.status,
    'WorkerType': obj.workerType,
    'GlueVersion': obj.glueVersion,
    'NumberOfWorkers': obj.numberOfWorkers,
    'NumberOfNodes': obj.numberOfNodes,
    'AvailabilityZone': obj.availabilityZone,
    'VpcId': obj.vpcId,
    'ExtraPythonLibsS3Path': obj.extraPythonLibsS3Path,
    'ExtraJarsS3Path': obj.extraJarsS3Path,
    'FailureReason': obj.failureReason,
    'LastUpdateStatus': obj.lastUpdateStatus,
    'CreatedTimestamp': obj.createdTimestamp,
    'LastModifiedTimestamp': obj.lastModifiedTimestamp,
    'PublicKey': obj.publicKey,
    'PublicKeys': obj.publicKeys?.map(y => y),
    'SecurityConfiguration': obj.securityConfiguration,
    'Arguments': ((obj.arguments) === undefined) ? undefined : (Object.entries(obj.arguments).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueJob
 */
export interface GlueJob {
  /**
   * @schema GlueJob#Name
   */
  readonly name?: string;

  /**
   * @schema GlueJob#Description
   */
  readonly description?: string;

  /**
   * @schema GlueJob#LogUri
   */
  readonly logUri?: string;

  /**
   * @schema GlueJob#Role
   */
  readonly role?: string;

  /**
   * @schema GlueJob#CreatedOn
   */
  readonly createdOn?: string;

  /**
   * @schema GlueJob#LastModifiedOn
   */
  readonly lastModifiedOn?: string;

  /**
   * @schema GlueJob#ExecutionProperty
   */
  readonly executionProperty?: GlueExecutionProperty;

  /**
   * @schema GlueJob#Command
   */
  readonly command?: GlueJobCommand;

  /**
   * @schema GlueJob#DefaultArguments
   */
  readonly defaultArguments?: { [key: string]: string };

  /**
   * @schema GlueJob#NonOverridableArguments
   */
  readonly nonOverridableArguments?: { [key: string]: string };

  /**
   * @schema GlueJob#Connections
   */
  readonly connections?: GlueConnectionsList;

  /**
   * @schema GlueJob#MaxRetries
   */
  readonly maxRetries?: number;

  /**
   * @schema GlueJob#AllocatedCapacity
   */
  readonly allocatedCapacity?: number;

  /**
   * @schema GlueJob#Timeout
   */
  readonly timeout?: number;

  /**
   * @schema GlueJob#MaxCapacity
   */
  readonly maxCapacity?: number;

  /**
   * @schema GlueJob#WorkerType
   */
  readonly workerType?: string;

  /**
   * @schema GlueJob#NumberOfWorkers
   */
  readonly numberOfWorkers?: number;

  /**
   * @schema GlueJob#SecurityConfiguration
   */
  readonly securityConfiguration?: string;

  /**
   * @schema GlueJob#NotificationProperty
   */
  readonly notificationProperty?: GlueNotificationProperty;

  /**
   * @schema GlueJob#GlueVersion
   */
  readonly glueVersion?: string;

}

/**
 * Converts an object of type 'GlueJob' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueJob(obj: GlueJob | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Description': obj.description,
    'LogUri': obj.logUri,
    'Role': obj.role,
    'CreatedOn': obj.createdOn,
    'LastModifiedOn': obj.lastModifiedOn,
    'ExecutionProperty': toJson_GlueExecutionProperty(obj.executionProperty),
    'Command': toJson_GlueJobCommand(obj.command),
    'DefaultArguments': ((obj.defaultArguments) === undefined) ? undefined : (Object.entries(obj.defaultArguments).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'NonOverridableArguments': ((obj.nonOverridableArguments) === undefined) ? undefined : (Object.entries(obj.nonOverridableArguments).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Connections': toJson_GlueConnectionsList(obj.connections),
    'MaxRetries': obj.maxRetries,
    'AllocatedCapacity': obj.allocatedCapacity,
    'Timeout': obj.timeout,
    'MaxCapacity': obj.maxCapacity,
    'WorkerType': obj.workerType,
    'NumberOfWorkers': obj.numberOfWorkers,
    'SecurityConfiguration': obj.securityConfiguration,
    'NotificationProperty': toJson_GlueNotificationProperty(obj.notificationProperty),
    'GlueVersion': obj.glueVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GluePartition
 */
export interface GluePartition {
  /**
   * @schema GluePartition#Values
   */
  readonly values?: string[];

  /**
   * @schema GluePartition#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema GluePartition#TableName
   */
  readonly tableName?: string;

  /**
   * @schema GluePartition#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema GluePartition#LastAccessTime
   */
  readonly lastAccessTime?: string;

  /**
   * @schema GluePartition#StorageDescriptor
   */
  readonly storageDescriptor?: GlueStorageDescriptor;

  /**
   * @schema GluePartition#Parameters
   */
  readonly parameters?: { [key: string]: string };

  /**
   * @schema GluePartition#LastAnalyzedTime
   */
  readonly lastAnalyzedTime?: string;

  /**
   * @schema GluePartition#CatalogId
   */
  readonly catalogId?: string;

}

/**
 * Converts an object of type 'GluePartition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GluePartition(obj: GluePartition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Values': obj.values?.map(y => y),
    'DatabaseName': obj.databaseName,
    'TableName': obj.tableName,
    'CreationTime': obj.creationTime,
    'LastAccessTime': obj.lastAccessTime,
    'StorageDescriptor': toJson_GlueStorageDescriptor(obj.storageDescriptor),
    'Parameters': ((obj.parameters) === undefined) ? undefined : (Object.entries(obj.parameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'LastAnalyzedTime': obj.lastAnalyzedTime,
    'CatalogId': obj.catalogId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueTrigger
 */
export interface GlueTrigger {
  /**
   * @schema GlueTrigger#Name
   */
  readonly name?: string;

  /**
   * @schema GlueTrigger#WorkflowName
   */
  readonly workflowName?: string;

  /**
   * @schema GlueTrigger#Id
   */
  readonly id?: string;

  /**
   * @schema GlueTrigger#Type
   */
  readonly type?: string;

  /**
   * @schema GlueTrigger#State
   */
  readonly state?: string;

  /**
   * @schema GlueTrigger#Description
   */
  readonly description?: string;

  /**
   * @schema GlueTrigger#Schedule
   */
  readonly schedule?: string;

  /**
   * @schema GlueTrigger#Actions
   */
  readonly actions?: GlueAction[];

  /**
   * @schema GlueTrigger#Predicate
   */
  readonly predicate?: GluePredicate;

  /**
   * @schema GlueTrigger#EventBatchingCondition
   */
  readonly eventBatchingCondition?: GlueEventBatchingCondition;

}

/**
 * Converts an object of type 'GlueTrigger' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueTrigger(obj: GlueTrigger | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'WorkflowName': obj.workflowName,
    'Id': obj.id,
    'Type': obj.type,
    'State': obj.state,
    'Description': obj.description,
    'Schedule': obj.schedule,
    'Actions': obj.actions?.map(y => toJson_GlueAction(y)),
    'Predicate': toJson_GluePredicate(obj.predicate),
    'EventBatchingCondition': toJson_GlueEventBatchingCondition(obj.eventBatchingCondition),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueWorkflow
 */
export interface GlueWorkflow {
  /**
   * @schema GlueWorkflow#Name
   */
  readonly name?: string;

  /**
   * @schema GlueWorkflow#Description
   */
  readonly description?: string;

  /**
   * @schema GlueWorkflow#DefaultRunProperties
   */
  readonly defaultRunProperties?: { [key: string]: string };

  /**
   * @schema GlueWorkflow#CreatedOn
   */
  readonly createdOn?: string;

  /**
   * @schema GlueWorkflow#LastModifiedOn
   */
  readonly lastModifiedOn?: string;

  /**
   * @schema GlueWorkflow#LastRun
   */
  readonly lastRun?: GlueWorkflowRun;

  /**
   * @schema GlueWorkflow#Graph
   */
  readonly graph?: GlueWorkflowGraph;

  /**
   * @schema GlueWorkflow#MaxConcurrentRuns
   */
  readonly maxConcurrentRuns?: number;

}

/**
 * Converts an object of type 'GlueWorkflow' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueWorkflow(obj: GlueWorkflow | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Description': obj.description,
    'DefaultRunProperties': ((obj.defaultRunProperties) === undefined) ? undefined : (Object.entries(obj.defaultRunProperties).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'CreatedOn': obj.createdOn,
    'LastModifiedOn': obj.lastModifiedOn,
    'LastRun': toJson_GlueWorkflowRun(obj.lastRun),
    'Graph': toJson_GlueWorkflowGraph(obj.graph),
    'MaxConcurrentRuns': obj.maxConcurrentRuns,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueBatchStopJobRunSuccessfulSubmission
 */
export interface GlueBatchStopJobRunSuccessfulSubmission {
  /**
   * @schema GlueBatchStopJobRunSuccessfulSubmission#JobName
   */
  readonly jobName?: string;

  /**
   * @schema GlueBatchStopJobRunSuccessfulSubmission#JobRunId
   */
  readonly jobRunId?: string;

}

/**
 * Converts an object of type 'GlueBatchStopJobRunSuccessfulSubmission' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueBatchStopJobRunSuccessfulSubmission(obj: GlueBatchStopJobRunSuccessfulSubmission | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobName': obj.jobName,
    'JobRunId': obj.jobRunId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueBatchStopJobRunError
 */
export interface GlueBatchStopJobRunError {
  /**
   * @schema GlueBatchStopJobRunError#JobName
   */
  readonly jobName?: string;

  /**
   * @schema GlueBatchStopJobRunError#JobRunId
   */
  readonly jobRunId?: string;

  /**
   * @schema GlueBatchStopJobRunError#ErrorDetail
   */
  readonly errorDetail?: GlueErrorDetail;

}

/**
 * Converts an object of type 'GlueBatchStopJobRunError' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueBatchStopJobRunError(obj: GlueBatchStopJobRunError | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobName': obj.jobName,
    'JobRunId': obj.jobRunId,
    'ErrorDetail': toJson_GlueErrorDetail(obj.errorDetail),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueBatchUpdatePartitionRequestEntry
 */
export interface GlueBatchUpdatePartitionRequestEntry {
  /**
   * @schema GlueBatchUpdatePartitionRequestEntry#PartitionValueList
   */
  readonly partitionValueList?: string[];

  /**
   * @schema GlueBatchUpdatePartitionRequestEntry#PartitionInput
   */
  readonly partitionInput?: GluePartitionInput;

}

/**
 * Converts an object of type 'GlueBatchUpdatePartitionRequestEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueBatchUpdatePartitionRequestEntry(obj: GlueBatchUpdatePartitionRequestEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PartitionValueList': obj.partitionValueList?.map(y => y),
    'PartitionInput': toJson_GluePartitionInput(obj.partitionInput),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueBatchUpdatePartitionFailureEntry
 */
export interface GlueBatchUpdatePartitionFailureEntry {
  /**
   * @schema GlueBatchUpdatePartitionFailureEntry#PartitionValueList
   */
  readonly partitionValueList?: string[];

  /**
   * @schema GlueBatchUpdatePartitionFailureEntry#ErrorDetail
   */
  readonly errorDetail?: GlueErrorDetail;

}

/**
 * Converts an object of type 'GlueBatchUpdatePartitionFailureEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueBatchUpdatePartitionFailureEntry(obj: GlueBatchUpdatePartitionFailureEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PartitionValueList': obj.partitionValueList?.map(y => y),
    'ErrorDetail': toJson_GlueErrorDetail(obj.errorDetail),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueCreateGrokClassifierRequest
 */
export interface GlueCreateGrokClassifierRequest {
  /**
   * @schema GlueCreateGrokClassifierRequest#Classification
   */
  readonly classification?: string;

  /**
   * @schema GlueCreateGrokClassifierRequest#Name
   */
  readonly name?: string;

  /**
   * @schema GlueCreateGrokClassifierRequest#GrokPattern
   */
  readonly grokPattern?: string;

  /**
   * @schema GlueCreateGrokClassifierRequest#CustomPatterns
   */
  readonly customPatterns?: string;

}

/**
 * Converts an object of type 'GlueCreateGrokClassifierRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueCreateGrokClassifierRequest(obj: GlueCreateGrokClassifierRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Classification': obj.classification,
    'Name': obj.name,
    'GrokPattern': obj.grokPattern,
    'CustomPatterns': obj.customPatterns,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueCreateXmlClassifierRequest
 */
export interface GlueCreateXmlClassifierRequest {
  /**
   * @schema GlueCreateXmlClassifierRequest#Classification
   */
  readonly classification?: string;

  /**
   * @schema GlueCreateXmlClassifierRequest#Name
   */
  readonly name?: string;

  /**
   * @schema GlueCreateXmlClassifierRequest#RowTag
   */
  readonly rowTag?: string;

}

/**
 * Converts an object of type 'GlueCreateXmlClassifierRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueCreateXmlClassifierRequest(obj: GlueCreateXmlClassifierRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Classification': obj.classification,
    'Name': obj.name,
    'RowTag': obj.rowTag,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueCreateJsonClassifierRequest
 */
export interface GlueCreateJsonClassifierRequest {
  /**
   * @schema GlueCreateJsonClassifierRequest#Name
   */
  readonly name?: string;

  /**
   * @schema GlueCreateJsonClassifierRequest#JsonPath
   */
  readonly jsonPath?: string;

}

/**
 * Converts an object of type 'GlueCreateJsonClassifierRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueCreateJsonClassifierRequest(obj: GlueCreateJsonClassifierRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'JsonPath': obj.jsonPath,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueCreateCsvClassifierRequest
 */
export interface GlueCreateCsvClassifierRequest {
  /**
   * @schema GlueCreateCsvClassifierRequest#Name
   */
  readonly name?: string;

  /**
   * @schema GlueCreateCsvClassifierRequest#Delimiter
   */
  readonly delimiter?: string;

  /**
   * @schema GlueCreateCsvClassifierRequest#QuoteSymbol
   */
  readonly quoteSymbol?: string;

  /**
   * @schema GlueCreateCsvClassifierRequest#ContainsHeader
   */
  readonly containsHeader?: string;

  /**
   * @schema GlueCreateCsvClassifierRequest#Header
   */
  readonly header?: string[];

  /**
   * @schema GlueCreateCsvClassifierRequest#DisableValueTrimming
   */
  readonly disableValueTrimming?: boolean;

  /**
   * @schema GlueCreateCsvClassifierRequest#AllowSingleColumn
   */
  readonly allowSingleColumn?: boolean;

}

/**
 * Converts an object of type 'GlueCreateCsvClassifierRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueCreateCsvClassifierRequest(obj: GlueCreateCsvClassifierRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Delimiter': obj.delimiter,
    'QuoteSymbol': obj.quoteSymbol,
    'ContainsHeader': obj.containsHeader,
    'Header': obj.header?.map(y => y),
    'DisableValueTrimming': obj.disableValueTrimming,
    'AllowSingleColumn': obj.allowSingleColumn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueConnectionInput
 */
export interface GlueConnectionInput {
  /**
   * @schema GlueConnectionInput#Name
   */
  readonly name?: string;

  /**
   * @schema GlueConnectionInput#Description
   */
  readonly description?: string;

  /**
   * @schema GlueConnectionInput#ConnectionType
   */
  readonly connectionType?: string;

  /**
   * @schema GlueConnectionInput#MatchCriteria
   */
  readonly matchCriteria?: string[];

  /**
   * @schema GlueConnectionInput#ConnectionProperties
   */
  readonly connectionProperties?: { [key: string]: string };

  /**
   * @schema GlueConnectionInput#PhysicalConnectionRequirements
   */
  readonly physicalConnectionRequirements?: GluePhysicalConnectionRequirements;

}

/**
 * Converts an object of type 'GlueConnectionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueConnectionInput(obj: GlueConnectionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Description': obj.description,
    'ConnectionType': obj.connectionType,
    'MatchCriteria': obj.matchCriteria?.map(y => y),
    'ConnectionProperties': ((obj.connectionProperties) === undefined) ? undefined : (Object.entries(obj.connectionProperties).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'PhysicalConnectionRequirements': toJson_GluePhysicalConnectionRequirements(obj.physicalConnectionRequirements),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueCrawlerTargets
 */
export interface GlueCrawlerTargets {
  /**
   * @schema GlueCrawlerTargets#S3Targets
   */
  readonly s3Targets?: GlueS3Target[];

  /**
   * @schema GlueCrawlerTargets#JdbcTargets
   */
  readonly jdbcTargets?: GlueJdbcTarget[];

  /**
   * @schema GlueCrawlerTargets#MongoDBTargets
   */
  readonly mongoDbTargets?: GlueMongoDbTarget[];

  /**
   * @schema GlueCrawlerTargets#DynamoDBTargets
   */
  readonly dynamoDbTargets?: GlueDynamoDbTarget[];

  /**
   * @schema GlueCrawlerTargets#CatalogTargets
   */
  readonly catalogTargets?: GlueCatalogTarget[];

}

/**
 * Converts an object of type 'GlueCrawlerTargets' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueCrawlerTargets(obj: GlueCrawlerTargets | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S3Targets': obj.s3Targets?.map(y => toJson_GlueS3Target(y)),
    'JdbcTargets': obj.jdbcTargets?.map(y => toJson_GlueJdbcTarget(y)),
    'MongoDBTargets': obj.mongoDbTargets?.map(y => toJson_GlueMongoDbTarget(y)),
    'DynamoDBTargets': obj.dynamoDbTargets?.map(y => toJson_GlueDynamoDbTarget(y)),
    'CatalogTargets': obj.catalogTargets?.map(y => toJson_GlueCatalogTarget(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueSchemaChangePolicy
 */
export interface GlueSchemaChangePolicy {
  /**
   * @schema GlueSchemaChangePolicy#UpdateBehavior
   */
  readonly updateBehavior?: string;

  /**
   * @schema GlueSchemaChangePolicy#DeleteBehavior
   */
  readonly deleteBehavior?: string;

}

/**
 * Converts an object of type 'GlueSchemaChangePolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueSchemaChangePolicy(obj: GlueSchemaChangePolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UpdateBehavior': obj.updateBehavior,
    'DeleteBehavior': obj.deleteBehavior,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueRecrawlPolicy
 */
export interface GlueRecrawlPolicy {
  /**
   * @schema GlueRecrawlPolicy#RecrawlBehavior
   */
  readonly recrawlBehavior?: string;

}

/**
 * Converts an object of type 'GlueRecrawlPolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueRecrawlPolicy(obj: GlueRecrawlPolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RecrawlBehavior': obj.recrawlBehavior,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueLineageConfiguration
 */
export interface GlueLineageConfiguration {
  /**
   * @schema GlueLineageConfiguration#CrawlerLineageSettings
   */
  readonly crawlerLineageSettings?: string;

}

/**
 * Converts an object of type 'GlueLineageConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueLineageConfiguration(obj: GlueLineageConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CrawlerLineageSettings': obj.crawlerLineageSettings,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueDatabaseInput
 */
export interface GlueDatabaseInput {
  /**
   * @schema GlueDatabaseInput#Name
   */
  readonly name?: string;

  /**
   * @schema GlueDatabaseInput#Description
   */
  readonly description?: string;

  /**
   * @schema GlueDatabaseInput#LocationUri
   */
  readonly locationUri?: string;

  /**
   * @schema GlueDatabaseInput#Parameters
   */
  readonly parameters?: { [key: string]: string };

  /**
   * @schema GlueDatabaseInput#CreateTableDefaultPermissions
   */
  readonly createTableDefaultPermissions?: GluePrincipalPermissions[];

  /**
   * @schema GlueDatabaseInput#TargetDatabase
   */
  readonly targetDatabase?: GlueDatabaseIdentifier;

}

/**
 * Converts an object of type 'GlueDatabaseInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueDatabaseInput(obj: GlueDatabaseInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Description': obj.description,
    'LocationUri': obj.locationUri,
    'Parameters': ((obj.parameters) === undefined) ? undefined : (Object.entries(obj.parameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'CreateTableDefaultPermissions': obj.createTableDefaultPermissions?.map(y => toJson_GluePrincipalPermissions(y)),
    'TargetDatabase': toJson_GlueDatabaseIdentifier(obj.targetDatabase),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueExecutionProperty
 */
export interface GlueExecutionProperty {
  /**
   * @schema GlueExecutionProperty#MaxConcurrentRuns
   */
  readonly maxConcurrentRuns?: number;

}

/**
 * Converts an object of type 'GlueExecutionProperty' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueExecutionProperty(obj: GlueExecutionProperty | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxConcurrentRuns': obj.maxConcurrentRuns,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueJobCommand
 */
export interface GlueJobCommand {
  /**
   * @schema GlueJobCommand#Name
   */
  readonly name?: string;

  /**
   * @schema GlueJobCommand#ScriptLocation
   */
  readonly scriptLocation?: string;

  /**
   * @schema GlueJobCommand#PythonVersion
   */
  readonly pythonVersion?: string;

}

/**
 * Converts an object of type 'GlueJobCommand' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueJobCommand(obj: GlueJobCommand | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'ScriptLocation': obj.scriptLocation,
    'PythonVersion': obj.pythonVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueConnectionsList
 */
export interface GlueConnectionsList {
  /**
   * @schema GlueConnectionsList#Connections
   */
  readonly connections?: string[];

}

/**
 * Converts an object of type 'GlueConnectionsList' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueConnectionsList(obj: GlueConnectionsList | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Connections': obj.connections?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueNotificationProperty
 */
export interface GlueNotificationProperty {
  /**
   * @schema GlueNotificationProperty#NotifyDelayAfter
   */
  readonly notifyDelayAfter?: number;

}

/**
 * Converts an object of type 'GlueNotificationProperty' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueNotificationProperty(obj: GlueNotificationProperty | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NotifyDelayAfter': obj.notifyDelayAfter,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGlueTable
 */
export interface GlueGlueTable {
  /**
   * @schema GlueGlueTable#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema GlueGlueTable#TableName
   */
  readonly tableName?: string;

  /**
   * @schema GlueGlueTable#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueGlueTable#ConnectionName
   */
  readonly connectionName?: string;

}

/**
 * Converts an object of type 'GlueGlueTable' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGlueTable(obj: GlueGlueTable | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DatabaseName': obj.databaseName,
    'TableName': obj.tableName,
    'CatalogId': obj.catalogId,
    'ConnectionName': obj.connectionName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueTransformParameters
 */
export interface GlueTransformParameters {
  /**
   * @schema GlueTransformParameters#TransformType
   */
  readonly transformType?: string;

  /**
   * @schema GlueTransformParameters#FindMatchesParameters
   */
  readonly findMatchesParameters?: GlueFindMatchesParameters;

}

/**
 * Converts an object of type 'GlueTransformParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueTransformParameters(obj: GlueTransformParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TransformType': obj.transformType,
    'FindMatchesParameters': toJson_GlueFindMatchesParameters(obj.findMatchesParameters),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueTransformEncryption
 */
export interface GlueTransformEncryption {
  /**
   * @schema GlueTransformEncryption#MlUserDataEncryption
   */
  readonly mlUserDataEncryption?: GlueMlUserDataEncryption;

  /**
   * @schema GlueTransformEncryption#TaskRunSecurityConfigurationName
   */
  readonly taskRunSecurityConfigurationName?: string;

}

/**
 * Converts an object of type 'GlueTransformEncryption' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueTransformEncryption(obj: GlueTransformEncryption | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MlUserDataEncryption': toJson_GlueMlUserDataEncryption(obj.mlUserDataEncryption),
    'TaskRunSecurityConfigurationName': obj.taskRunSecurityConfigurationName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GluePartitionIndex
 */
export interface GluePartitionIndex {
  /**
   * @schema GluePartitionIndex#Keys
   */
  readonly keys?: string[];

  /**
   * @schema GluePartitionIndex#IndexName
   */
  readonly indexName?: string;

}

/**
 * Converts an object of type 'GluePartitionIndex' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GluePartitionIndex(obj: GluePartitionIndex | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Keys': obj.keys?.map(y => y),
    'IndexName': obj.indexName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueRegistryId
 */
export interface GlueRegistryId {
  /**
   * @schema GlueRegistryId#RegistryName
   */
  readonly registryName?: string;

  /**
   * @schema GlueRegistryId#RegistryArn
   */
  readonly registryArn?: string;

}

/**
 * Converts an object of type 'GlueRegistryId' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueRegistryId(obj: GlueRegistryId | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegistryName': obj.registryName,
    'RegistryArn': obj.registryArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueCodeGenNode
 */
export interface GlueCodeGenNode {
  /**
   * @schema GlueCodeGenNode#Id
   */
  readonly id?: string;

  /**
   * @schema GlueCodeGenNode#NodeType
   */
  readonly nodeType?: string;

  /**
   * @schema GlueCodeGenNode#Args
   */
  readonly args?: GlueCodeGenNodeArg[];

  /**
   * @schema GlueCodeGenNode#LineNumber
   */
  readonly lineNumber?: number;

}

/**
 * Converts an object of type 'GlueCodeGenNode' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueCodeGenNode(obj: GlueCodeGenNode | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'NodeType': obj.nodeType,
    'Args': obj.args?.map(y => toJson_GlueCodeGenNodeArg(y)),
    'LineNumber': obj.lineNumber,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueCodeGenEdge
 */
export interface GlueCodeGenEdge {
  /**
   * @schema GlueCodeGenEdge#Source
   */
  readonly source?: string;

  /**
   * @schema GlueCodeGenEdge#Target
   */
  readonly target?: string;

  /**
   * @schema GlueCodeGenEdge#TargetParameter
   */
  readonly targetParameter?: string;

}

/**
 * Converts an object of type 'GlueCodeGenEdge' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueCodeGenEdge(obj: GlueCodeGenEdge | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Source': obj.source,
    'Target': obj.target,
    'TargetParameter': obj.targetParameter,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueEncryptionConfiguration
 */
export interface GlueEncryptionConfiguration {
  /**
   * @schema GlueEncryptionConfiguration#S3Encryption
   */
  readonly s3Encryption?: GlueS3Encryption[];

  /**
   * @schema GlueEncryptionConfiguration#CloudWatchEncryption
   */
  readonly cloudWatchEncryption?: GlueCloudWatchEncryption;

  /**
   * @schema GlueEncryptionConfiguration#JobBookmarksEncryption
   */
  readonly jobBookmarksEncryption?: GlueJobBookmarksEncryption;

}

/**
 * Converts an object of type 'GlueEncryptionConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueEncryptionConfiguration(obj: GlueEncryptionConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S3Encryption': obj.s3Encryption?.map(y => toJson_GlueS3Encryption(y)),
    'CloudWatchEncryption': toJson_GlueCloudWatchEncryption(obj.cloudWatchEncryption),
    'JobBookmarksEncryption': toJson_GlueJobBookmarksEncryption(obj.jobBookmarksEncryption),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueTableInput
 */
export interface GlueTableInput {
  /**
   * @schema GlueTableInput#Name
   */
  readonly name?: string;

  /**
   * @schema GlueTableInput#Description
   */
  readonly description?: string;

  /**
   * @schema GlueTableInput#Owner
   */
  readonly owner?: string;

  /**
   * @schema GlueTableInput#LastAccessTime
   */
  readonly lastAccessTime?: string;

  /**
   * @schema GlueTableInput#LastAnalyzedTime
   */
  readonly lastAnalyzedTime?: string;

  /**
   * @schema GlueTableInput#Retention
   */
  readonly retention?: number;

  /**
   * @schema GlueTableInput#StorageDescriptor
   */
  readonly storageDescriptor?: GlueStorageDescriptor;

  /**
   * @schema GlueTableInput#PartitionKeys
   */
  readonly partitionKeys?: GlueColumn[];

  /**
   * @schema GlueTableInput#ViewOriginalText
   */
  readonly viewOriginalText?: string;

  /**
   * @schema GlueTableInput#ViewExpandedText
   */
  readonly viewExpandedText?: string;

  /**
   * @schema GlueTableInput#TableType
   */
  readonly tableType?: string;

  /**
   * @schema GlueTableInput#Parameters
   */
  readonly parameters?: { [key: string]: string };

  /**
   * @schema GlueTableInput#TargetTable
   */
  readonly targetTable?: GlueTableIdentifier;

}

/**
 * Converts an object of type 'GlueTableInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueTableInput(obj: GlueTableInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Description': obj.description,
    'Owner': obj.owner,
    'LastAccessTime': obj.lastAccessTime,
    'LastAnalyzedTime': obj.lastAnalyzedTime,
    'Retention': obj.retention,
    'StorageDescriptor': toJson_GlueStorageDescriptor(obj.storageDescriptor),
    'PartitionKeys': obj.partitionKeys?.map(y => toJson_GlueColumn(y)),
    'ViewOriginalText': obj.viewOriginalText,
    'ViewExpandedText': obj.viewExpandedText,
    'TableType': obj.tableType,
    'Parameters': ((obj.parameters) === undefined) ? undefined : (Object.entries(obj.parameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'TargetTable': toJson_GlueTableIdentifier(obj.targetTable),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GluePredicate
 */
export interface GluePredicate {
  /**
   * @schema GluePredicate#Logical
   */
  readonly logical?: string;

  /**
   * @schema GluePredicate#Conditions
   */
  readonly conditions?: GlueCondition[];

}

/**
 * Converts an object of type 'GluePredicate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GluePredicate(obj: GluePredicate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Logical': obj.logical,
    'Conditions': obj.conditions?.map(y => toJson_GlueCondition(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueAction
 */
export interface GlueAction {
  /**
   * @schema GlueAction#JobName
   */
  readonly jobName?: string;

  /**
   * @schema GlueAction#Arguments
   */
  readonly arguments?: { [key: string]: string };

  /**
   * @schema GlueAction#Timeout
   */
  readonly timeout?: number;

  /**
   * @schema GlueAction#SecurityConfiguration
   */
  readonly securityConfiguration?: string;

  /**
   * @schema GlueAction#NotificationProperty
   */
  readonly notificationProperty?: GlueNotificationProperty;

  /**
   * @schema GlueAction#CrawlerName
   */
  readonly crawlerName?: string;

}

/**
 * Converts an object of type 'GlueAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueAction(obj: GlueAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobName': obj.jobName,
    'Arguments': ((obj.arguments) === undefined) ? undefined : (Object.entries(obj.arguments).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Timeout': obj.timeout,
    'SecurityConfiguration': obj.securityConfiguration,
    'NotificationProperty': toJson_GlueNotificationProperty(obj.notificationProperty),
    'CrawlerName': obj.crawlerName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueEventBatchingCondition
 */
export interface GlueEventBatchingCondition {
  /**
   * @schema GlueEventBatchingCondition#BatchSize
   */
  readonly batchSize?: number;

  /**
   * @schema GlueEventBatchingCondition#BatchWindow
   */
  readonly batchWindow?: number;

}

/**
 * Converts an object of type 'GlueEventBatchingCondition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueEventBatchingCondition(obj: GlueEventBatchingCondition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BatchSize': obj.batchSize,
    'BatchWindow': obj.batchWindow,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueUserDefinedFunctionInput
 */
export interface GlueUserDefinedFunctionInput {
  /**
   * @schema GlueUserDefinedFunctionInput#FunctionName
   */
  readonly functionName?: string;

  /**
   * @schema GlueUserDefinedFunctionInput#ClassName
   */
  readonly className?: string;

  /**
   * @schema GlueUserDefinedFunctionInput#OwnerName
   */
  readonly ownerName?: string;

  /**
   * @schema GlueUserDefinedFunctionInput#OwnerType
   */
  readonly ownerType?: string;

  /**
   * @schema GlueUserDefinedFunctionInput#ResourceUris
   */
  readonly resourceUris?: GlueResourceUri[];

}

/**
 * Converts an object of type 'GlueUserDefinedFunctionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueUserDefinedFunctionInput(obj: GlueUserDefinedFunctionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FunctionName': obj.functionName,
    'ClassName': obj.className,
    'OwnerName': obj.ownerName,
    'OwnerType': obj.ownerType,
    'ResourceUris': obj.resourceUris?.map(y => toJson_GlueResourceUri(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueSchemaId
 */
export interface GlueSchemaId {
  /**
   * @schema GlueSchemaId#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema GlueSchemaId#SchemaName
   */
  readonly schemaName?: string;

  /**
   * @schema GlueSchemaId#RegistryName
   */
  readonly registryName?: string;

}

/**
 * Converts an object of type 'GlueSchemaId' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueSchemaId(obj: GlueSchemaId | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SchemaArn': obj.schemaArn,
    'SchemaName': obj.schemaName,
    'RegistryName': obj.registryName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueSchemaVersionErrorItem
 */
export interface GlueSchemaVersionErrorItem {
  /**
   * @schema GlueSchemaVersionErrorItem#VersionNumber
   */
  readonly versionNumber?: number;

  /**
   * @schema GlueSchemaVersionErrorItem#ErrorDetails
   */
  readonly errorDetails?: GlueErrorDetails;

}

/**
 * Converts an object of type 'GlueSchemaVersionErrorItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueSchemaVersionErrorItem(obj: GlueSchemaVersionErrorItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VersionNumber': obj.versionNumber,
    'ErrorDetails': toJson_GlueErrorDetails(obj.errorDetails),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueCatalogImportStatus
 */
export interface GlueCatalogImportStatus {
  /**
   * @schema GlueCatalogImportStatus#ImportCompleted
   */
  readonly importCompleted?: boolean;

  /**
   * @schema GlueCatalogImportStatus#ImportTime
   */
  readonly importTime?: string;

  /**
   * @schema GlueCatalogImportStatus#ImportedBy
   */
  readonly importedBy?: string;

}

/**
 * Converts an object of type 'GlueCatalogImportStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueCatalogImportStatus(obj: GlueCatalogImportStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ImportCompleted': obj.importCompleted,
    'ImportTime': obj.importTime,
    'ImportedBy': obj.importedBy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueClassifier
 */
export interface GlueClassifier {
  /**
   * @schema GlueClassifier#GrokClassifier
   */
  readonly grokClassifier?: GlueGrokClassifier;

  /**
   * @schema GlueClassifier#XMLClassifier
   */
  readonly xmlClassifier?: GlueXmlClassifier;

  /**
   * @schema GlueClassifier#JsonClassifier
   */
  readonly jsonClassifier?: GlueJsonClassifier;

  /**
   * @schema GlueClassifier#CsvClassifier
   */
  readonly csvClassifier?: GlueCsvClassifier;

}

/**
 * Converts an object of type 'GlueClassifier' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueClassifier(obj: GlueClassifier | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GrokClassifier': toJson_GlueGrokClassifier(obj.grokClassifier),
    'XMLClassifier': toJson_GlueXmlClassifier(obj.xmlClassifier),
    'JsonClassifier': toJson_GlueJsonClassifier(obj.jsonClassifier),
    'CsvClassifier': toJson_GlueCsvClassifier(obj.csvClassifier),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueColumnStatistics
 */
export interface GlueColumnStatistics {
  /**
   * @schema GlueColumnStatistics#ColumnName
   */
  readonly columnName?: string;

  /**
   * @schema GlueColumnStatistics#ColumnType
   */
  readonly columnType?: string;

  /**
   * @schema GlueColumnStatistics#AnalyzedTime
   */
  readonly analyzedTime?: string;

  /**
   * @schema GlueColumnStatistics#StatisticsData
   */
  readonly statisticsData?: GlueColumnStatisticsData;

}

/**
 * Converts an object of type 'GlueColumnStatistics' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueColumnStatistics(obj: GlueColumnStatistics | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ColumnName': obj.columnName,
    'ColumnType': obj.columnType,
    'AnalyzedTime': obj.analyzedTime,
    'StatisticsData': toJson_GlueColumnStatisticsData(obj.statisticsData),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueColumnError
 */
export interface GlueColumnError {
  /**
   * @schema GlueColumnError#ColumnName
   */
  readonly columnName?: string;

  /**
   * @schema GlueColumnError#Error
   */
  readonly error?: GlueErrorDetail;

}

/**
 * Converts an object of type 'GlueColumnError' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueColumnError(obj: GlueColumnError | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ColumnName': obj.columnName,
    'Error': toJson_GlueErrorDetail(obj.error),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueConnection
 */
export interface GlueConnection {
  /**
   * @schema GlueConnection#Name
   */
  readonly name?: string;

  /**
   * @schema GlueConnection#Description
   */
  readonly description?: string;

  /**
   * @schema GlueConnection#ConnectionType
   */
  readonly connectionType?: string;

  /**
   * @schema GlueConnection#MatchCriteria
   */
  readonly matchCriteria?: string[];

  /**
   * @schema GlueConnection#ConnectionProperties
   */
  readonly connectionProperties?: { [key: string]: string };

  /**
   * @schema GlueConnection#PhysicalConnectionRequirements
   */
  readonly physicalConnectionRequirements?: GluePhysicalConnectionRequirements;

  /**
   * @schema GlueConnection#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema GlueConnection#LastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

  /**
   * @schema GlueConnection#LastUpdatedBy
   */
  readonly lastUpdatedBy?: string;

}

/**
 * Converts an object of type 'GlueConnection' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueConnection(obj: GlueConnection | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Description': obj.description,
    'ConnectionType': obj.connectionType,
    'MatchCriteria': obj.matchCriteria?.map(y => y),
    'ConnectionProperties': ((obj.connectionProperties) === undefined) ? undefined : (Object.entries(obj.connectionProperties).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'PhysicalConnectionRequirements': toJson_GluePhysicalConnectionRequirements(obj.physicalConnectionRequirements),
    'CreationTime': obj.creationTime,
    'LastUpdatedTime': obj.lastUpdatedTime,
    'LastUpdatedBy': obj.lastUpdatedBy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGetConnectionsFilter
 */
export interface GlueGetConnectionsFilter {
  /**
   * @schema GlueGetConnectionsFilter#MatchCriteria
   */
  readonly matchCriteria?: string[];

  /**
   * @schema GlueGetConnectionsFilter#ConnectionType
   */
  readonly connectionType?: string;

}

/**
 * Converts an object of type 'GlueGetConnectionsFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGetConnectionsFilter(obj: GlueGetConnectionsFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MatchCriteria': obj.matchCriteria?.map(y => y),
    'ConnectionType': obj.connectionType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueCrawlerMetrics
 */
export interface GlueCrawlerMetrics {
  /**
   * @schema GlueCrawlerMetrics#CrawlerName
   */
  readonly crawlerName?: string;

  /**
   * @schema GlueCrawlerMetrics#TimeLeftSeconds
   */
  readonly timeLeftSeconds?: number;

  /**
   * @schema GlueCrawlerMetrics#StillEstimating
   */
  readonly stillEstimating?: boolean;

  /**
   * @schema GlueCrawlerMetrics#LastRuntimeSeconds
   */
  readonly lastRuntimeSeconds?: number;

  /**
   * @schema GlueCrawlerMetrics#MedianRuntimeSeconds
   */
  readonly medianRuntimeSeconds?: number;

  /**
   * @schema GlueCrawlerMetrics#TablesCreated
   */
  readonly tablesCreated?: number;

  /**
   * @schema GlueCrawlerMetrics#TablesUpdated
   */
  readonly tablesUpdated?: number;

  /**
   * @schema GlueCrawlerMetrics#TablesDeleted
   */
  readonly tablesDeleted?: number;

}

/**
 * Converts an object of type 'GlueCrawlerMetrics' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueCrawlerMetrics(obj: GlueCrawlerMetrics | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CrawlerName': obj.crawlerName,
    'TimeLeftSeconds': obj.timeLeftSeconds,
    'StillEstimating': obj.stillEstimating,
    'LastRuntimeSeconds': obj.lastRuntimeSeconds,
    'MedianRuntimeSeconds': obj.medianRuntimeSeconds,
    'TablesCreated': obj.tablesCreated,
    'TablesUpdated': obj.tablesUpdated,
    'TablesDeleted': obj.tablesDeleted,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueDataCatalogEncryptionSettings
 */
export interface GlueDataCatalogEncryptionSettings {
  /**
   * @schema GlueDataCatalogEncryptionSettings#EncryptionAtRest
   */
  readonly encryptionAtRest?: GlueEncryptionAtRest;

  /**
   * @schema GlueDataCatalogEncryptionSettings#ConnectionPasswordEncryption
   */
  readonly connectionPasswordEncryption?: GlueConnectionPasswordEncryption;

}

/**
 * Converts an object of type 'GlueDataCatalogEncryptionSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueDataCatalogEncryptionSettings(obj: GlueDataCatalogEncryptionSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EncryptionAtRest': toJson_GlueEncryptionAtRest(obj.encryptionAtRest),
    'ConnectionPasswordEncryption': toJson_GlueConnectionPasswordEncryption(obj.connectionPasswordEncryption),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueDatabase
 */
export interface GlueDatabase {
  /**
   * @schema GlueDatabase#Name
   */
  readonly name?: string;

  /**
   * @schema GlueDatabase#Description
   */
  readonly description?: string;

  /**
   * @schema GlueDatabase#LocationUri
   */
  readonly locationUri?: string;

  /**
   * @schema GlueDatabase#Parameters
   */
  readonly parameters?: { [key: string]: string };

  /**
   * @schema GlueDatabase#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema GlueDatabase#CreateTableDefaultPermissions
   */
  readonly createTableDefaultPermissions?: GluePrincipalPermissions[];

  /**
   * @schema GlueDatabase#TargetDatabase
   */
  readonly targetDatabase?: GlueDatabaseIdentifier;

  /**
   * @schema GlueDatabase#CatalogId
   */
  readonly catalogId?: string;

}

/**
 * Converts an object of type 'GlueDatabase' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueDatabase(obj: GlueDatabase | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Description': obj.description,
    'LocationUri': obj.locationUri,
    'Parameters': ((obj.parameters) === undefined) ? undefined : (Object.entries(obj.parameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'CreateTime': obj.createTime,
    'CreateTableDefaultPermissions': obj.createTableDefaultPermissions?.map(y => toJson_GluePrincipalPermissions(y)),
    'TargetDatabase': toJson_GlueDatabaseIdentifier(obj.targetDatabase),
    'CatalogId': obj.catalogId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueJobBookmarkEntry
 */
export interface GlueJobBookmarkEntry {
  /**
   * @schema GlueJobBookmarkEntry#JobName
   */
  readonly jobName?: string;

  /**
   * @schema GlueJobBookmarkEntry#Version
   */
  readonly version?: number;

  /**
   * @schema GlueJobBookmarkEntry#Run
   */
  readonly run?: number;

  /**
   * @schema GlueJobBookmarkEntry#Attempt
   */
  readonly attempt?: number;

  /**
   * @schema GlueJobBookmarkEntry#PreviousRunId
   */
  readonly previousRunId?: string;

  /**
   * @schema GlueJobBookmarkEntry#RunId
   */
  readonly runId?: string;

  /**
   * @schema GlueJobBookmarkEntry#JobBookmark
   */
  readonly jobBookmark?: string;

}

/**
 * Converts an object of type 'GlueJobBookmarkEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueJobBookmarkEntry(obj: GlueJobBookmarkEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobName': obj.jobName,
    'Version': obj.version,
    'Run': obj.run,
    'Attempt': obj.attempt,
    'PreviousRunId': obj.previousRunId,
    'RunId': obj.runId,
    'JobBookmark': obj.jobBookmark,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueJobRun
 */
export interface GlueJobRun {
  /**
   * @schema GlueJobRun#Id
   */
  readonly id?: string;

  /**
   * @schema GlueJobRun#Attempt
   */
  readonly attempt?: number;

  /**
   * @schema GlueJobRun#PreviousRunId
   */
  readonly previousRunId?: string;

  /**
   * @schema GlueJobRun#TriggerName
   */
  readonly triggerName?: string;

  /**
   * @schema GlueJobRun#JobName
   */
  readonly jobName?: string;

  /**
   * @schema GlueJobRun#StartedOn
   */
  readonly startedOn?: string;

  /**
   * @schema GlueJobRun#LastModifiedOn
   */
  readonly lastModifiedOn?: string;

  /**
   * @schema GlueJobRun#CompletedOn
   */
  readonly completedOn?: string;

  /**
   * @schema GlueJobRun#JobRunState
   */
  readonly jobRunState?: string;

  /**
   * @schema GlueJobRun#Arguments
   */
  readonly arguments?: { [key: string]: string };

  /**
   * @schema GlueJobRun#ErrorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema GlueJobRun#PredecessorRuns
   */
  readonly predecessorRuns?: GluePredecessor[];

  /**
   * @schema GlueJobRun#AllocatedCapacity
   */
  readonly allocatedCapacity?: number;

  /**
   * @schema GlueJobRun#ExecutionTime
   */
  readonly executionTime?: number;

  /**
   * @schema GlueJobRun#Timeout
   */
  readonly timeout?: number;

  /**
   * @schema GlueJobRun#MaxCapacity
   */
  readonly maxCapacity?: number;

  /**
   * @schema GlueJobRun#WorkerType
   */
  readonly workerType?: string;

  /**
   * @schema GlueJobRun#NumberOfWorkers
   */
  readonly numberOfWorkers?: number;

  /**
   * @schema GlueJobRun#SecurityConfiguration
   */
  readonly securityConfiguration?: string;

  /**
   * @schema GlueJobRun#LogGroupName
   */
  readonly logGroupName?: string;

  /**
   * @schema GlueJobRun#NotificationProperty
   */
  readonly notificationProperty?: GlueNotificationProperty;

  /**
   * @schema GlueJobRun#GlueVersion
   */
  readonly glueVersion?: string;

}

/**
 * Converts an object of type 'GlueJobRun' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueJobRun(obj: GlueJobRun | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Attempt': obj.attempt,
    'PreviousRunId': obj.previousRunId,
    'TriggerName': obj.triggerName,
    'JobName': obj.jobName,
    'StartedOn': obj.startedOn,
    'LastModifiedOn': obj.lastModifiedOn,
    'CompletedOn': obj.completedOn,
    'JobRunState': obj.jobRunState,
    'Arguments': ((obj.arguments) === undefined) ? undefined : (Object.entries(obj.arguments).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'ErrorMessage': obj.errorMessage,
    'PredecessorRuns': obj.predecessorRuns?.map(y => toJson_GluePredecessor(y)),
    'AllocatedCapacity': obj.allocatedCapacity,
    'ExecutionTime': obj.executionTime,
    'Timeout': obj.timeout,
    'MaxCapacity': obj.maxCapacity,
    'WorkerType': obj.workerType,
    'NumberOfWorkers': obj.numberOfWorkers,
    'SecurityConfiguration': obj.securityConfiguration,
    'LogGroupName': obj.logGroupName,
    'NotificationProperty': toJson_GlueNotificationProperty(obj.notificationProperty),
    'GlueVersion': obj.glueVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueTaskRunProperties
 */
export interface GlueTaskRunProperties {
  /**
   * @schema GlueTaskRunProperties#TaskType
   */
  readonly taskType?: string;

  /**
   * @schema GlueTaskRunProperties#ImportLabelsTaskRunProperties
   */
  readonly importLabelsTaskRunProperties?: GlueImportLabelsTaskRunProperties;

  /**
   * @schema GlueTaskRunProperties#ExportLabelsTaskRunProperties
   */
  readonly exportLabelsTaskRunProperties?: GlueExportLabelsTaskRunProperties;

  /**
   * @schema GlueTaskRunProperties#LabelingSetGenerationTaskRunProperties
   */
  readonly labelingSetGenerationTaskRunProperties?: GlueLabelingSetGenerationTaskRunProperties;

  /**
   * @schema GlueTaskRunProperties#FindMatchesTaskRunProperties
   */
  readonly findMatchesTaskRunProperties?: GlueFindMatchesTaskRunProperties;

}

/**
 * Converts an object of type 'GlueTaskRunProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueTaskRunProperties(obj: GlueTaskRunProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TaskType': obj.taskType,
    'ImportLabelsTaskRunProperties': toJson_GlueImportLabelsTaskRunProperties(obj.importLabelsTaskRunProperties),
    'ExportLabelsTaskRunProperties': toJson_GlueExportLabelsTaskRunProperties(obj.exportLabelsTaskRunProperties),
    'LabelingSetGenerationTaskRunProperties': toJson_GlueLabelingSetGenerationTaskRunProperties(obj.labelingSetGenerationTaskRunProperties),
    'FindMatchesTaskRunProperties': toJson_GlueFindMatchesTaskRunProperties(obj.findMatchesTaskRunProperties),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueTaskRunFilterCriteria
 */
export interface GlueTaskRunFilterCriteria {
  /**
   * @schema GlueTaskRunFilterCriteria#TaskRunType
   */
  readonly taskRunType?: string;

  /**
   * @schema GlueTaskRunFilterCriteria#Status
   */
  readonly status?: string;

  /**
   * @schema GlueTaskRunFilterCriteria#StartedBefore
   */
  readonly startedBefore?: string;

  /**
   * @schema GlueTaskRunFilterCriteria#StartedAfter
   */
  readonly startedAfter?: string;

}

/**
 * Converts an object of type 'GlueTaskRunFilterCriteria' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueTaskRunFilterCriteria(obj: GlueTaskRunFilterCriteria | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TaskRunType': obj.taskRunType,
    'Status': obj.status,
    'StartedBefore': obj.startedBefore,
    'StartedAfter': obj.startedAfter,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueTaskRunSortCriteria
 */
export interface GlueTaskRunSortCriteria {
  /**
   * @schema GlueTaskRunSortCriteria#Column
   */
  readonly column?: string;

  /**
   * @schema GlueTaskRunSortCriteria#SortDirection
   */
  readonly sortDirection?: string;

}

/**
 * Converts an object of type 'GlueTaskRunSortCriteria' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueTaskRunSortCriteria(obj: GlueTaskRunSortCriteria | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Column': obj.column,
    'SortDirection': obj.sortDirection,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueTaskRun
 */
export interface GlueTaskRun {
  /**
   * @schema GlueTaskRun#TransformId
   */
  readonly transformId?: string;

  /**
   * @schema GlueTaskRun#TaskRunId
   */
  readonly taskRunId?: string;

  /**
   * @schema GlueTaskRun#Status
   */
  readonly status?: string;

  /**
   * @schema GlueTaskRun#LogGroupName
   */
  readonly logGroupName?: string;

  /**
   * @schema GlueTaskRun#Properties
   */
  readonly properties?: GlueTaskRunProperties;

  /**
   * @schema GlueTaskRun#ErrorString
   */
  readonly errorString?: string;

  /**
   * @schema GlueTaskRun#StartedOn
   */
  readonly startedOn?: string;

  /**
   * @schema GlueTaskRun#LastModifiedOn
   */
  readonly lastModifiedOn?: string;

  /**
   * @schema GlueTaskRun#CompletedOn
   */
  readonly completedOn?: string;

  /**
   * @schema GlueTaskRun#ExecutionTime
   */
  readonly executionTime?: number;

}

/**
 * Converts an object of type 'GlueTaskRun' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueTaskRun(obj: GlueTaskRun | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TransformId': obj.transformId,
    'TaskRunId': obj.taskRunId,
    'Status': obj.status,
    'LogGroupName': obj.logGroupName,
    'Properties': toJson_GlueTaskRunProperties(obj.properties),
    'ErrorString': obj.errorString,
    'StartedOn': obj.startedOn,
    'LastModifiedOn': obj.lastModifiedOn,
    'CompletedOn': obj.completedOn,
    'ExecutionTime': obj.executionTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueEvaluationMetrics
 */
export interface GlueEvaluationMetrics {
  /**
   * @schema GlueEvaluationMetrics#TransformType
   */
  readonly transformType?: string;

  /**
   * @schema GlueEvaluationMetrics#FindMatchesMetrics
   */
  readonly findMatchesMetrics?: GlueFindMatchesMetrics;

}

/**
 * Converts an object of type 'GlueEvaluationMetrics' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueEvaluationMetrics(obj: GlueEvaluationMetrics | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TransformType': obj.transformType,
    'FindMatchesMetrics': toJson_GlueFindMatchesMetrics(obj.findMatchesMetrics),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueSchemaColumn
 */
export interface GlueSchemaColumn {
  /**
   * @schema GlueSchemaColumn#Name
   */
  readonly name?: string;

  /**
   * @schema GlueSchemaColumn#DataType
   */
  readonly dataType?: string;

}

/**
 * Converts an object of type 'GlueSchemaColumn' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueSchemaColumn(obj: GlueSchemaColumn | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'DataType': obj.dataType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueTransformFilterCriteria
 */
export interface GlueTransformFilterCriteria {
  /**
   * @schema GlueTransformFilterCriteria#Name
   */
  readonly name?: string;

  /**
   * @schema GlueTransformFilterCriteria#TransformType
   */
  readonly transformType?: string;

  /**
   * @schema GlueTransformFilterCriteria#Status
   */
  readonly status?: string;

  /**
   * @schema GlueTransformFilterCriteria#GlueVersion
   */
  readonly glueVersion?: string;

  /**
   * @schema GlueTransformFilterCriteria#CreatedBefore
   */
  readonly createdBefore?: string;

  /**
   * @schema GlueTransformFilterCriteria#CreatedAfter
   */
  readonly createdAfter?: string;

  /**
   * @schema GlueTransformFilterCriteria#LastModifiedBefore
   */
  readonly lastModifiedBefore?: string;

  /**
   * @schema GlueTransformFilterCriteria#LastModifiedAfter
   */
  readonly lastModifiedAfter?: string;

  /**
   * @schema GlueTransformFilterCriteria#Schema
   */
  readonly schema?: GlueSchemaColumn[];

}

/**
 * Converts an object of type 'GlueTransformFilterCriteria' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueTransformFilterCriteria(obj: GlueTransformFilterCriteria | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'TransformType': obj.transformType,
    'Status': obj.status,
    'GlueVersion': obj.glueVersion,
    'CreatedBefore': obj.createdBefore,
    'CreatedAfter': obj.createdAfter,
    'LastModifiedBefore': obj.lastModifiedBefore,
    'LastModifiedAfter': obj.lastModifiedAfter,
    'Schema': obj.schema?.map(y => toJson_GlueSchemaColumn(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueTransformSortCriteria
 */
export interface GlueTransformSortCriteria {
  /**
   * @schema GlueTransformSortCriteria#Column
   */
  readonly column?: string;

  /**
   * @schema GlueTransformSortCriteria#SortDirection
   */
  readonly sortDirection?: string;

}

/**
 * Converts an object of type 'GlueTransformSortCriteria' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueTransformSortCriteria(obj: GlueTransformSortCriteria | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Column': obj.column,
    'SortDirection': obj.sortDirection,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueMlTransform
 */
export interface GlueMlTransform {
  /**
   * @schema GlueMlTransform#TransformId
   */
  readonly transformId?: string;

  /**
   * @schema GlueMlTransform#Name
   */
  readonly name?: string;

  /**
   * @schema GlueMlTransform#Description
   */
  readonly description?: string;

  /**
   * @schema GlueMlTransform#Status
   */
  readonly status?: string;

  /**
   * @schema GlueMlTransform#CreatedOn
   */
  readonly createdOn?: string;

  /**
   * @schema GlueMlTransform#LastModifiedOn
   */
  readonly lastModifiedOn?: string;

  /**
   * @schema GlueMlTransform#InputRecordTables
   */
  readonly inputRecordTables?: GlueGlueTable[];

  /**
   * @schema GlueMlTransform#Parameters
   */
  readonly parameters?: GlueTransformParameters;

  /**
   * @schema GlueMlTransform#EvaluationMetrics
   */
  readonly evaluationMetrics?: GlueEvaluationMetrics;

  /**
   * @schema GlueMlTransform#LabelCount
   */
  readonly labelCount?: number;

  /**
   * @schema GlueMlTransform#Schema
   */
  readonly schema?: GlueSchemaColumn[];

  /**
   * @schema GlueMlTransform#Role
   */
  readonly role?: string;

  /**
   * @schema GlueMlTransform#GlueVersion
   */
  readonly glueVersion?: string;

  /**
   * @schema GlueMlTransform#MaxCapacity
   */
  readonly maxCapacity?: number;

  /**
   * @schema GlueMlTransform#WorkerType
   */
  readonly workerType?: string;

  /**
   * @schema GlueMlTransform#NumberOfWorkers
   */
  readonly numberOfWorkers?: number;

  /**
   * @schema GlueMlTransform#Timeout
   */
  readonly timeout?: number;

  /**
   * @schema GlueMlTransform#MaxRetries
   */
  readonly maxRetries?: number;

  /**
   * @schema GlueMlTransform#TransformEncryption
   */
  readonly transformEncryption?: GlueTransformEncryption;

}

/**
 * Converts an object of type 'GlueMlTransform' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueMlTransform(obj: GlueMlTransform | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TransformId': obj.transformId,
    'Name': obj.name,
    'Description': obj.description,
    'Status': obj.status,
    'CreatedOn': obj.createdOn,
    'LastModifiedOn': obj.lastModifiedOn,
    'InputRecordTables': obj.inputRecordTables?.map(y => toJson_GlueGlueTable(y)),
    'Parameters': toJson_GlueTransformParameters(obj.parameters),
    'EvaluationMetrics': toJson_GlueEvaluationMetrics(obj.evaluationMetrics),
    'LabelCount': obj.labelCount,
    'Schema': obj.schema?.map(y => toJson_GlueSchemaColumn(y)),
    'Role': obj.role,
    'GlueVersion': obj.glueVersion,
    'MaxCapacity': obj.maxCapacity,
    'WorkerType': obj.workerType,
    'NumberOfWorkers': obj.numberOfWorkers,
    'Timeout': obj.timeout,
    'MaxRetries': obj.maxRetries,
    'TransformEncryption': toJson_GlueTransformEncryption(obj.transformEncryption),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueCatalogEntry
 */
export interface GlueCatalogEntry {
  /**
   * @schema GlueCatalogEntry#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema GlueCatalogEntry#TableName
   */
  readonly tableName?: string;

}

/**
 * Converts an object of type 'GlueCatalogEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueCatalogEntry(obj: GlueCatalogEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DatabaseName': obj.databaseName,
    'TableName': obj.tableName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueLocation
 */
export interface GlueLocation {
  /**
   * @schema GlueLocation#Jdbc
   */
  readonly jdbc?: GlueCodeGenNodeArg[];

  /**
   * @schema GlueLocation#S3
   */
  readonly s3?: GlueCodeGenNodeArg[];

  /**
   * @schema GlueLocation#DynamoDB
   */
  readonly dynamoDb?: GlueCodeGenNodeArg[];

}

/**
 * Converts an object of type 'GlueLocation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueLocation(obj: GlueLocation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Jdbc': obj.jdbc?.map(y => toJson_GlueCodeGenNodeArg(y)),
    'S3': obj.s3?.map(y => toJson_GlueCodeGenNodeArg(y)),
    'DynamoDB': obj.dynamoDb?.map(y => toJson_GlueCodeGenNodeArg(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueMappingEntry
 */
export interface GlueMappingEntry {
  /**
   * @schema GlueMappingEntry#SourceTable
   */
  readonly sourceTable?: string;

  /**
   * @schema GlueMappingEntry#SourcePath
   */
  readonly sourcePath?: string;

  /**
   * @schema GlueMappingEntry#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema GlueMappingEntry#TargetTable
   */
  readonly targetTable?: string;

  /**
   * @schema GlueMappingEntry#TargetPath
   */
  readonly targetPath?: string;

  /**
   * @schema GlueMappingEntry#TargetType
   */
  readonly targetType?: string;

}

/**
 * Converts an object of type 'GlueMappingEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueMappingEntry(obj: GlueMappingEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceTable': obj.sourceTable,
    'SourcePath': obj.sourcePath,
    'SourceType': obj.sourceType,
    'TargetTable': obj.targetTable,
    'TargetPath': obj.targetPath,
    'TargetType': obj.targetType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GluePartitionIndexDescriptor
 */
export interface GluePartitionIndexDescriptor {
  /**
   * @schema GluePartitionIndexDescriptor#IndexName
   */
  readonly indexName?: string;

  /**
   * @schema GluePartitionIndexDescriptor#Keys
   */
  readonly keys?: GlueKeySchemaElement[];

  /**
   * @schema GluePartitionIndexDescriptor#IndexStatus
   */
  readonly indexStatus?: string;

  /**
   * @schema GluePartitionIndexDescriptor#BackfillErrors
   */
  readonly backfillErrors?: GlueBackfillError[];

}

/**
 * Converts an object of type 'GluePartitionIndexDescriptor' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GluePartitionIndexDescriptor(obj: GluePartitionIndexDescriptor | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IndexName': obj.indexName,
    'Keys': obj.keys?.map(y => toJson_GlueKeySchemaElement(y)),
    'IndexStatus': obj.indexStatus,
    'BackfillErrors': obj.backfillErrors?.map(y => toJson_GlueBackfillError(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueSegment
 */
export interface GlueSegment {
  /**
   * @schema GlueSegment#SegmentNumber
   */
  readonly segmentNumber?: number;

  /**
   * @schema GlueSegment#TotalSegments
   */
  readonly totalSegments?: number;

}

/**
 * Converts an object of type 'GlueSegment' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueSegment(obj: GlueSegment | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SegmentNumber': obj.segmentNumber,
    'TotalSegments': obj.totalSegments,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGluePolicy
 */
export interface GlueGluePolicy {
  /**
   * @schema GlueGluePolicy#PolicyInJson
   */
  readonly policyInJson?: string;

  /**
   * @schema GlueGluePolicy#PolicyHash
   */
  readonly policyHash?: string;

  /**
   * @schema GlueGluePolicy#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema GlueGluePolicy#UpdateTime
   */
  readonly updateTime?: string;

}

/**
 * Converts an object of type 'GlueGluePolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGluePolicy(obj: GlueGluePolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyInJson': obj.policyInJson,
    'PolicyHash': obj.policyHash,
    'CreateTime': obj.createTime,
    'UpdateTime': obj.updateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueSchemaVersionNumber
 */
export interface GlueSchemaVersionNumber {
  /**
   * @schema GlueSchemaVersionNumber#LatestVersion
   */
  readonly latestVersion?: boolean;

  /**
   * @schema GlueSchemaVersionNumber#VersionNumber
   */
  readonly versionNumber?: number;

}

/**
 * Converts an object of type 'GlueSchemaVersionNumber' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueSchemaVersionNumber(obj: GlueSchemaVersionNumber | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LatestVersion': obj.latestVersion,
    'VersionNumber': obj.versionNumber,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueSecurityConfiguration
 */
export interface GlueSecurityConfiguration {
  /**
   * @schema GlueSecurityConfiguration#Name
   */
  readonly name?: string;

  /**
   * @schema GlueSecurityConfiguration#CreatedTimeStamp
   */
  readonly createdTimeStamp?: string;

  /**
   * @schema GlueSecurityConfiguration#EncryptionConfiguration
   */
  readonly encryptionConfiguration?: GlueEncryptionConfiguration;

}

/**
 * Converts an object of type 'GlueSecurityConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueSecurityConfiguration(obj: GlueSecurityConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'CreatedTimeStamp': obj.createdTimeStamp,
    'EncryptionConfiguration': toJson_GlueEncryptionConfiguration(obj.encryptionConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueTable
 */
export interface GlueTable {
  /**
   * @schema GlueTable#Name
   */
  readonly name?: string;

  /**
   * @schema GlueTable#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema GlueTable#Description
   */
  readonly description?: string;

  /**
   * @schema GlueTable#Owner
   */
  readonly owner?: string;

  /**
   * @schema GlueTable#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema GlueTable#UpdateTime
   */
  readonly updateTime?: string;

  /**
   * @schema GlueTable#LastAccessTime
   */
  readonly lastAccessTime?: string;

  /**
   * @schema GlueTable#LastAnalyzedTime
   */
  readonly lastAnalyzedTime?: string;

  /**
   * @schema GlueTable#Retention
   */
  readonly retention?: number;

  /**
   * @schema GlueTable#StorageDescriptor
   */
  readonly storageDescriptor?: GlueStorageDescriptor;

  /**
   * @schema GlueTable#PartitionKeys
   */
  readonly partitionKeys?: GlueColumn[];

  /**
   * @schema GlueTable#ViewOriginalText
   */
  readonly viewOriginalText?: string;

  /**
   * @schema GlueTable#ViewExpandedText
   */
  readonly viewExpandedText?: string;

  /**
   * @schema GlueTable#TableType
   */
  readonly tableType?: string;

  /**
   * @schema GlueTable#Parameters
   */
  readonly parameters?: { [key: string]: string };

  /**
   * @schema GlueTable#CreatedBy
   */
  readonly createdBy?: string;

  /**
   * @schema GlueTable#IsRegisteredWithLakeFormation
   */
  readonly isRegisteredWithLakeFormation?: boolean;

  /**
   * @schema GlueTable#TargetTable
   */
  readonly targetTable?: GlueTableIdentifier;

  /**
   * @schema GlueTable#CatalogId
   */
  readonly catalogId?: string;

}

/**
 * Converts an object of type 'GlueTable' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueTable(obj: GlueTable | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'DatabaseName': obj.databaseName,
    'Description': obj.description,
    'Owner': obj.owner,
    'CreateTime': obj.createTime,
    'UpdateTime': obj.updateTime,
    'LastAccessTime': obj.lastAccessTime,
    'LastAnalyzedTime': obj.lastAnalyzedTime,
    'Retention': obj.retention,
    'StorageDescriptor': toJson_GlueStorageDescriptor(obj.storageDescriptor),
    'PartitionKeys': obj.partitionKeys?.map(y => toJson_GlueColumn(y)),
    'ViewOriginalText': obj.viewOriginalText,
    'ViewExpandedText': obj.viewExpandedText,
    'TableType': obj.tableType,
    'Parameters': ((obj.parameters) === undefined) ? undefined : (Object.entries(obj.parameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'CreatedBy': obj.createdBy,
    'IsRegisteredWithLakeFormation': obj.isRegisteredWithLakeFormation,
    'TargetTable': toJson_GlueTableIdentifier(obj.targetTable),
    'CatalogId': obj.catalogId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueTableVersion
 */
export interface GlueTableVersion {
  /**
   * @schema GlueTableVersion#Table
   */
  readonly table?: GlueTable;

  /**
   * @schema GlueTableVersion#VersionId
   */
  readonly versionId?: string;

}

/**
 * Converts an object of type 'GlueTableVersion' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueTableVersion(obj: GlueTableVersion | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Table': toJson_GlueTable(obj.table),
    'VersionId': obj.versionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueUserDefinedFunction
 */
export interface GlueUserDefinedFunction {
  /**
   * @schema GlueUserDefinedFunction#FunctionName
   */
  readonly functionName?: string;

  /**
   * @schema GlueUserDefinedFunction#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema GlueUserDefinedFunction#ClassName
   */
  readonly className?: string;

  /**
   * @schema GlueUserDefinedFunction#OwnerName
   */
  readonly ownerName?: string;

  /**
   * @schema GlueUserDefinedFunction#OwnerType
   */
  readonly ownerType?: string;

  /**
   * @schema GlueUserDefinedFunction#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema GlueUserDefinedFunction#ResourceUris
   */
  readonly resourceUris?: GlueResourceUri[];

  /**
   * @schema GlueUserDefinedFunction#CatalogId
   */
  readonly catalogId?: string;

}

/**
 * Converts an object of type 'GlueUserDefinedFunction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueUserDefinedFunction(obj: GlueUserDefinedFunction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FunctionName': obj.functionName,
    'DatabaseName': obj.databaseName,
    'ClassName': obj.className,
    'OwnerName': obj.ownerName,
    'OwnerType': obj.ownerType,
    'CreateTime': obj.createTime,
    'ResourceUris': obj.resourceUris?.map(y => toJson_GlueResourceUri(y)),
    'CatalogId': obj.catalogId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueWorkflowRun
 */
export interface GlueWorkflowRun {
  /**
   * @schema GlueWorkflowRun#Name
   */
  readonly name?: string;

  /**
   * @schema GlueWorkflowRun#WorkflowRunId
   */
  readonly workflowRunId?: string;

  /**
   * @schema GlueWorkflowRun#PreviousRunId
   */
  readonly previousRunId?: string;

  /**
   * @schema GlueWorkflowRun#WorkflowRunProperties
   */
  readonly workflowRunProperties?: { [key: string]: string };

  /**
   * @schema GlueWorkflowRun#StartedOn
   */
  readonly startedOn?: string;

  /**
   * @schema GlueWorkflowRun#CompletedOn
   */
  readonly completedOn?: string;

  /**
   * @schema GlueWorkflowRun#Status
   */
  readonly status?: string;

  /**
   * @schema GlueWorkflowRun#ErrorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema GlueWorkflowRun#Statistics
   */
  readonly statistics?: GlueWorkflowRunStatistics;

  /**
   * @schema GlueWorkflowRun#Graph
   */
  readonly graph?: GlueWorkflowGraph;

  /**
   * @schema GlueWorkflowRun#StartingEventBatchCondition
   */
  readonly startingEventBatchCondition?: GlueStartingEventBatchCondition;

}

/**
 * Converts an object of type 'GlueWorkflowRun' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueWorkflowRun(obj: GlueWorkflowRun | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'WorkflowRunId': obj.workflowRunId,
    'PreviousRunId': obj.previousRunId,
    'WorkflowRunProperties': ((obj.workflowRunProperties) === undefined) ? undefined : (Object.entries(obj.workflowRunProperties).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'StartedOn': obj.startedOn,
    'CompletedOn': obj.completedOn,
    'Status': obj.status,
    'ErrorMessage': obj.errorMessage,
    'Statistics': toJson_GlueWorkflowRunStatistics(obj.statistics),
    'Graph': toJson_GlueWorkflowGraph(obj.graph),
    'StartingEventBatchCondition': toJson_GlueStartingEventBatchCondition(obj.startingEventBatchCondition),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueRegistryListItem
 */
export interface GlueRegistryListItem {
  /**
   * @schema GlueRegistryListItem#RegistryName
   */
  readonly registryName?: string;

  /**
   * @schema GlueRegistryListItem#RegistryArn
   */
  readonly registryArn?: string;

  /**
   * @schema GlueRegistryListItem#Description
   */
  readonly description?: string;

  /**
   * @schema GlueRegistryListItem#Status
   */
  readonly status?: string;

  /**
   * @schema GlueRegistryListItem#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema GlueRegistryListItem#UpdatedTime
   */
  readonly updatedTime?: string;

}

/**
 * Converts an object of type 'GlueRegistryListItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueRegistryListItem(obj: GlueRegistryListItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegistryName': obj.registryName,
    'RegistryArn': obj.registryArn,
    'Description': obj.description,
    'Status': obj.status,
    'CreatedTime': obj.createdTime,
    'UpdatedTime': obj.updatedTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueSchemaVersionListItem
 */
export interface GlueSchemaVersionListItem {
  /**
   * @schema GlueSchemaVersionListItem#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema GlueSchemaVersionListItem#SchemaVersionId
   */
  readonly schemaVersionId?: string;

  /**
   * @schema GlueSchemaVersionListItem#VersionNumber
   */
  readonly versionNumber?: number;

  /**
   * @schema GlueSchemaVersionListItem#Status
   */
  readonly status?: string;

  /**
   * @schema GlueSchemaVersionListItem#CreatedTime
   */
  readonly createdTime?: string;

}

/**
 * Converts an object of type 'GlueSchemaVersionListItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueSchemaVersionListItem(obj: GlueSchemaVersionListItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SchemaArn': obj.schemaArn,
    'SchemaVersionId': obj.schemaVersionId,
    'VersionNumber': obj.versionNumber,
    'Status': obj.status,
    'CreatedTime': obj.createdTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueSchemaListItem
 */
export interface GlueSchemaListItem {
  /**
   * @schema GlueSchemaListItem#RegistryName
   */
  readonly registryName?: string;

  /**
   * @schema GlueSchemaListItem#SchemaName
   */
  readonly schemaName?: string;

  /**
   * @schema GlueSchemaListItem#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema GlueSchemaListItem#Description
   */
  readonly description?: string;

  /**
   * @schema GlueSchemaListItem#SchemaStatus
   */
  readonly schemaStatus?: string;

  /**
   * @schema GlueSchemaListItem#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema GlueSchemaListItem#UpdatedTime
   */
  readonly updatedTime?: string;

}

/**
 * Converts an object of type 'GlueSchemaListItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueSchemaListItem(obj: GlueSchemaListItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegistryName': obj.registryName,
    'SchemaName': obj.schemaName,
    'SchemaArn': obj.schemaArn,
    'Description': obj.description,
    'SchemaStatus': obj.schemaStatus,
    'CreatedTime': obj.createdTime,
    'UpdatedTime': obj.updatedTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueMetadataKeyValuePair
 */
export interface GlueMetadataKeyValuePair {
  /**
   * @schema GlueMetadataKeyValuePair#MetadataKey
   */
  readonly metadataKey?: string;

  /**
   * @schema GlueMetadataKeyValuePair#MetadataValue
   */
  readonly metadataValue?: string;

}

/**
 * Converts an object of type 'GlueMetadataKeyValuePair' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueMetadataKeyValuePair(obj: GlueMetadataKeyValuePair | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MetadataKey': obj.metadataKey,
    'MetadataValue': obj.metadataValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueMetadataInfo
 */
export interface GlueMetadataInfo {
  /**
   * @schema GlueMetadataInfo#MetadataValue
   */
  readonly metadataValue?: string;

  /**
   * @schema GlueMetadataInfo#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema GlueMetadataInfo#OtherMetadataValueList
   */
  readonly otherMetadataValueList?: GlueOtherMetadataValueListItem[];

}

/**
 * Converts an object of type 'GlueMetadataInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueMetadataInfo(obj: GlueMetadataInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MetadataValue': obj.metadataValue,
    'CreatedTime': obj.createdTime,
    'OtherMetadataValueList': obj.otherMetadataValueList?.map(y => toJson_GlueOtherMetadataValueListItem(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GluePropertyPredicate
 */
export interface GluePropertyPredicate {
  /**
   * @schema GluePropertyPredicate#Key
   */
  readonly key?: string;

  /**
   * @schema GluePropertyPredicate#Value
   */
  readonly value?: string;

  /**
   * @schema GluePropertyPredicate#Comparator
   */
  readonly comparator?: string;

}

/**
 * Converts an object of type 'GluePropertyPredicate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GluePropertyPredicate(obj: GluePropertyPredicate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Value': obj.value,
    'Comparator': obj.comparator,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueSortCriterion
 */
export interface GlueSortCriterion {
  /**
   * @schema GlueSortCriterion#FieldName
   */
  readonly fieldName?: string;

  /**
   * @schema GlueSortCriterion#Sort
   */
  readonly sort?: string;

}

/**
 * Converts an object of type 'GlueSortCriterion' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueSortCriterion(obj: GlueSortCriterion | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FieldName': obj.fieldName,
    'Sort': obj.sort,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueUpdateGrokClassifierRequest
 */
export interface GlueUpdateGrokClassifierRequest {
  /**
   * @schema GlueUpdateGrokClassifierRequest#Name
   */
  readonly name?: string;

  /**
   * @schema GlueUpdateGrokClassifierRequest#Classification
   */
  readonly classification?: string;

  /**
   * @schema GlueUpdateGrokClassifierRequest#GrokPattern
   */
  readonly grokPattern?: string;

  /**
   * @schema GlueUpdateGrokClassifierRequest#CustomPatterns
   */
  readonly customPatterns?: string;

}

/**
 * Converts an object of type 'GlueUpdateGrokClassifierRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueUpdateGrokClassifierRequest(obj: GlueUpdateGrokClassifierRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Classification': obj.classification,
    'GrokPattern': obj.grokPattern,
    'CustomPatterns': obj.customPatterns,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueUpdateXmlClassifierRequest
 */
export interface GlueUpdateXmlClassifierRequest {
  /**
   * @schema GlueUpdateXmlClassifierRequest#Name
   */
  readonly name?: string;

  /**
   * @schema GlueUpdateXmlClassifierRequest#Classification
   */
  readonly classification?: string;

  /**
   * @schema GlueUpdateXmlClassifierRequest#RowTag
   */
  readonly rowTag?: string;

}

/**
 * Converts an object of type 'GlueUpdateXmlClassifierRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueUpdateXmlClassifierRequest(obj: GlueUpdateXmlClassifierRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Classification': obj.classification,
    'RowTag': obj.rowTag,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueUpdateJsonClassifierRequest
 */
export interface GlueUpdateJsonClassifierRequest {
  /**
   * @schema GlueUpdateJsonClassifierRequest#Name
   */
  readonly name?: string;

  /**
   * @schema GlueUpdateJsonClassifierRequest#JsonPath
   */
  readonly jsonPath?: string;

}

/**
 * Converts an object of type 'GlueUpdateJsonClassifierRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueUpdateJsonClassifierRequest(obj: GlueUpdateJsonClassifierRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'JsonPath': obj.jsonPath,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueUpdateCsvClassifierRequest
 */
export interface GlueUpdateCsvClassifierRequest {
  /**
   * @schema GlueUpdateCsvClassifierRequest#Name
   */
  readonly name?: string;

  /**
   * @schema GlueUpdateCsvClassifierRequest#Delimiter
   */
  readonly delimiter?: string;

  /**
   * @schema GlueUpdateCsvClassifierRequest#QuoteSymbol
   */
  readonly quoteSymbol?: string;

  /**
   * @schema GlueUpdateCsvClassifierRequest#ContainsHeader
   */
  readonly containsHeader?: string;

  /**
   * @schema GlueUpdateCsvClassifierRequest#Header
   */
  readonly header?: string[];

  /**
   * @schema GlueUpdateCsvClassifierRequest#DisableValueTrimming
   */
  readonly disableValueTrimming?: boolean;

  /**
   * @schema GlueUpdateCsvClassifierRequest#AllowSingleColumn
   */
  readonly allowSingleColumn?: boolean;

}

/**
 * Converts an object of type 'GlueUpdateCsvClassifierRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueUpdateCsvClassifierRequest(obj: GlueUpdateCsvClassifierRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Delimiter': obj.delimiter,
    'QuoteSymbol': obj.quoteSymbol,
    'ContainsHeader': obj.containsHeader,
    'Header': obj.header?.map(y => y),
    'DisableValueTrimming': obj.disableValueTrimming,
    'AllowSingleColumn': obj.allowSingleColumn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueColumnStatisticsError
 */
export interface GlueColumnStatisticsError {
  /**
   * @schema GlueColumnStatisticsError#ColumnStatistics
   */
  readonly columnStatistics?: GlueColumnStatistics;

  /**
   * @schema GlueColumnStatisticsError#Error
   */
  readonly error?: GlueErrorDetail;

}

/**
 * Converts an object of type 'GlueColumnStatisticsError' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueColumnStatisticsError(obj: GlueColumnStatisticsError | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ColumnStatistics': toJson_GlueColumnStatistics(obj.columnStatistics),
    'Error': toJson_GlueErrorDetail(obj.error),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueDevEndpointCustomLibraries
 */
export interface GlueDevEndpointCustomLibraries {
  /**
   * @schema GlueDevEndpointCustomLibraries#ExtraPythonLibsS3Path
   */
  readonly extraPythonLibsS3Path?: string;

  /**
   * @schema GlueDevEndpointCustomLibraries#ExtraJarsS3Path
   */
  readonly extraJarsS3Path?: string;

}

/**
 * Converts an object of type 'GlueDevEndpointCustomLibraries' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueDevEndpointCustomLibraries(obj: GlueDevEndpointCustomLibraries | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ExtraPythonLibsS3Path': obj.extraPythonLibsS3Path,
    'ExtraJarsS3Path': obj.extraJarsS3Path,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueJobUpdate
 */
export interface GlueJobUpdate {
  /**
   * @schema GlueJobUpdate#Description
   */
  readonly description?: string;

  /**
   * @schema GlueJobUpdate#LogUri
   */
  readonly logUri?: string;

  /**
   * @schema GlueJobUpdate#Role
   */
  readonly role?: string;

  /**
   * @schema GlueJobUpdate#ExecutionProperty
   */
  readonly executionProperty?: GlueExecutionProperty;

  /**
   * @schema GlueJobUpdate#Command
   */
  readonly command?: GlueJobCommand;

  /**
   * @schema GlueJobUpdate#DefaultArguments
   */
  readonly defaultArguments?: { [key: string]: string };

  /**
   * @schema GlueJobUpdate#NonOverridableArguments
   */
  readonly nonOverridableArguments?: { [key: string]: string };

  /**
   * @schema GlueJobUpdate#Connections
   */
  readonly connections?: GlueConnectionsList;

  /**
   * @schema GlueJobUpdate#MaxRetries
   */
  readonly maxRetries?: number;

  /**
   * @schema GlueJobUpdate#AllocatedCapacity
   */
  readonly allocatedCapacity?: number;

  /**
   * @schema GlueJobUpdate#Timeout
   */
  readonly timeout?: number;

  /**
   * @schema GlueJobUpdate#MaxCapacity
   */
  readonly maxCapacity?: number;

  /**
   * @schema GlueJobUpdate#WorkerType
   */
  readonly workerType?: string;

  /**
   * @schema GlueJobUpdate#NumberOfWorkers
   */
  readonly numberOfWorkers?: number;

  /**
   * @schema GlueJobUpdate#SecurityConfiguration
   */
  readonly securityConfiguration?: string;

  /**
   * @schema GlueJobUpdate#NotificationProperty
   */
  readonly notificationProperty?: GlueNotificationProperty;

  /**
   * @schema GlueJobUpdate#GlueVersion
   */
  readonly glueVersion?: string;

}

/**
 * Converts an object of type 'GlueJobUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueJobUpdate(obj: GlueJobUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Description': obj.description,
    'LogUri': obj.logUri,
    'Role': obj.role,
    'ExecutionProperty': toJson_GlueExecutionProperty(obj.executionProperty),
    'Command': toJson_GlueJobCommand(obj.command),
    'DefaultArguments': ((obj.defaultArguments) === undefined) ? undefined : (Object.entries(obj.defaultArguments).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'NonOverridableArguments': ((obj.nonOverridableArguments) === undefined) ? undefined : (Object.entries(obj.nonOverridableArguments).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Connections': toJson_GlueConnectionsList(obj.connections),
    'MaxRetries': obj.maxRetries,
    'AllocatedCapacity': obj.allocatedCapacity,
    'Timeout': obj.timeout,
    'MaxCapacity': obj.maxCapacity,
    'WorkerType': obj.workerType,
    'NumberOfWorkers': obj.numberOfWorkers,
    'SecurityConfiguration': obj.securityConfiguration,
    'NotificationProperty': toJson_GlueNotificationProperty(obj.notificationProperty),
    'GlueVersion': obj.glueVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueTriggerUpdate
 */
export interface GlueTriggerUpdate {
  /**
   * @schema GlueTriggerUpdate#Name
   */
  readonly name?: string;

  /**
   * @schema GlueTriggerUpdate#Description
   */
  readonly description?: string;

  /**
   * @schema GlueTriggerUpdate#Schedule
   */
  readonly schedule?: string;

  /**
   * @schema GlueTriggerUpdate#Actions
   */
  readonly actions?: GlueAction[];

  /**
   * @schema GlueTriggerUpdate#Predicate
   */
  readonly predicate?: GluePredicate;

  /**
   * @schema GlueTriggerUpdate#EventBatchingCondition
   */
  readonly eventBatchingCondition?: GlueEventBatchingCondition;

}

/**
 * Converts an object of type 'GlueTriggerUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueTriggerUpdate(obj: GlueTriggerUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Description': obj.description,
    'Schedule': obj.schedule,
    'Actions': obj.actions?.map(y => toJson_GlueAction(y)),
    'Predicate': toJson_GluePredicate(obj.predicate),
    'EventBatchingCondition': toJson_GlueEventBatchingCondition(obj.eventBatchingCondition),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueStorageDescriptor
 */
export interface GlueStorageDescriptor {
  /**
   * @schema GlueStorageDescriptor#Columns
   */
  readonly columns?: GlueColumn[];

  /**
   * @schema GlueStorageDescriptor#Location
   */
  readonly location?: string;

  /**
   * @schema GlueStorageDescriptor#InputFormat
   */
  readonly inputFormat?: string;

  /**
   * @schema GlueStorageDescriptor#OutputFormat
   */
  readonly outputFormat?: string;

  /**
   * @schema GlueStorageDescriptor#Compressed
   */
  readonly compressed?: boolean;

  /**
   * @schema GlueStorageDescriptor#NumberOfBuckets
   */
  readonly numberOfBuckets?: number;

  /**
   * @schema GlueStorageDescriptor#SerdeInfo
   */
  readonly serdeInfo?: GlueSerDeInfo;

  /**
   * @schema GlueStorageDescriptor#BucketColumns
   */
  readonly bucketColumns?: string[];

  /**
   * @schema GlueStorageDescriptor#SortColumns
   */
  readonly sortColumns?: GlueOrder[];

  /**
   * @schema GlueStorageDescriptor#Parameters
   */
  readonly parameters?: { [key: string]: string };

  /**
   * @schema GlueStorageDescriptor#SkewedInfo
   */
  readonly skewedInfo?: GlueSkewedInfo;

  /**
   * @schema GlueStorageDescriptor#StoredAsSubDirectories
   */
  readonly storedAsSubDirectories?: boolean;

  /**
   * @schema GlueStorageDescriptor#SchemaReference
   */
  readonly schemaReference?: GlueSchemaReference;

}

/**
 * Converts an object of type 'GlueStorageDescriptor' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueStorageDescriptor(obj: GlueStorageDescriptor | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Columns': obj.columns?.map(y => toJson_GlueColumn(y)),
    'Location': obj.location,
    'InputFormat': obj.inputFormat,
    'OutputFormat': obj.outputFormat,
    'Compressed': obj.compressed,
    'NumberOfBuckets': obj.numberOfBuckets,
    'SerdeInfo': toJson_GlueSerDeInfo(obj.serdeInfo),
    'BucketColumns': obj.bucketColumns?.map(y => y),
    'SortColumns': obj.sortColumns?.map(y => toJson_GlueOrder(y)),
    'Parameters': ((obj.parameters) === undefined) ? undefined : (Object.entries(obj.parameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'SkewedInfo': toJson_GlueSkewedInfo(obj.skewedInfo),
    'StoredAsSubDirectories': obj.storedAsSubDirectories,
    'SchemaReference': toJson_GlueSchemaReference(obj.schemaReference),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueSchedule
 */
export interface GlueSchedule {
  /**
   * @schema GlueSchedule#ScheduleExpression
   */
  readonly scheduleExpression?: string;

  /**
   * @schema GlueSchedule#State
   */
  readonly state?: string;

}

/**
 * Converts an object of type 'GlueSchedule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueSchedule(obj: GlueSchedule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ScheduleExpression': obj.scheduleExpression,
    'State': obj.state,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueLastCrawlInfo
 */
export interface GlueLastCrawlInfo {
  /**
   * @schema GlueLastCrawlInfo#Status
   */
  readonly status?: string;

  /**
   * @schema GlueLastCrawlInfo#ErrorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema GlueLastCrawlInfo#LogGroup
   */
  readonly logGroup?: string;

  /**
   * @schema GlueLastCrawlInfo#LogStream
   */
  readonly logStream?: string;

  /**
   * @schema GlueLastCrawlInfo#MessagePrefix
   */
  readonly messagePrefix?: string;

  /**
   * @schema GlueLastCrawlInfo#StartTime
   */
  readonly startTime?: string;

}

/**
 * Converts an object of type 'GlueLastCrawlInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueLastCrawlInfo(obj: GlueLastCrawlInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
    'ErrorMessage': obj.errorMessage,
    'LogGroup': obj.logGroup,
    'LogStream': obj.logStream,
    'MessagePrefix': obj.messagePrefix,
    'StartTime': obj.startTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueWorkflowGraph
 */
export interface GlueWorkflowGraph {
  /**
   * @schema GlueWorkflowGraph#Nodes
   */
  readonly nodes?: GlueNode[];

  /**
   * @schema GlueWorkflowGraph#Edges
   */
  readonly edges?: GlueEdge[];

}

/**
 * Converts an object of type 'GlueWorkflowGraph' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueWorkflowGraph(obj: GlueWorkflowGraph | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Nodes': obj.nodes?.map(y => toJson_GlueNode(y)),
    'Edges': obj.edges?.map(y => toJson_GlueEdge(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GluePhysicalConnectionRequirements
 */
export interface GluePhysicalConnectionRequirements {
  /**
   * @schema GluePhysicalConnectionRequirements#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema GluePhysicalConnectionRequirements#SecurityGroupIdList
   */
  readonly securityGroupIdList?: string[];

  /**
   * @schema GluePhysicalConnectionRequirements#AvailabilityZone
   */
  readonly availabilityZone?: string;

}

/**
 * Converts an object of type 'GluePhysicalConnectionRequirements' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GluePhysicalConnectionRequirements(obj: GluePhysicalConnectionRequirements | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SubnetId': obj.subnetId,
    'SecurityGroupIdList': obj.securityGroupIdList?.map(y => y),
    'AvailabilityZone': obj.availabilityZone,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueS3Target
 */
export interface GlueS3Target {
  /**
   * @schema GlueS3Target#Path
   */
  readonly path?: string;

  /**
   * @schema GlueS3Target#Exclusions
   */
  readonly exclusions?: string[];

  /**
   * @schema GlueS3Target#ConnectionName
   */
  readonly connectionName?: string;

  /**
   * @schema GlueS3Target#SampleSize
   */
  readonly sampleSize?: number;

}

/**
 * Converts an object of type 'GlueS3Target' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueS3Target(obj: GlueS3Target | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Path': obj.path,
    'Exclusions': obj.exclusions?.map(y => y),
    'ConnectionName': obj.connectionName,
    'SampleSize': obj.sampleSize,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueJdbcTarget
 */
export interface GlueJdbcTarget {
  /**
   * @schema GlueJdbcTarget#ConnectionName
   */
  readonly connectionName?: string;

  /**
   * @schema GlueJdbcTarget#Path
   */
  readonly path?: string;

  /**
   * @schema GlueJdbcTarget#Exclusions
   */
  readonly exclusions?: string[];

}

/**
 * Converts an object of type 'GlueJdbcTarget' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueJdbcTarget(obj: GlueJdbcTarget | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConnectionName': obj.connectionName,
    'Path': obj.path,
    'Exclusions': obj.exclusions?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueMongoDbTarget
 */
export interface GlueMongoDbTarget {
  /**
   * @schema GlueMongoDbTarget#ConnectionName
   */
  readonly connectionName?: string;

  /**
   * @schema GlueMongoDbTarget#Path
   */
  readonly path?: string;

  /**
   * @schema GlueMongoDbTarget#ScanAll
   */
  readonly scanAll?: boolean;

}

/**
 * Converts an object of type 'GlueMongoDbTarget' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueMongoDbTarget(obj: GlueMongoDbTarget | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConnectionName': obj.connectionName,
    'Path': obj.path,
    'ScanAll': obj.scanAll,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueDynamoDbTarget
 */
export interface GlueDynamoDbTarget {
  /**
   * @schema GlueDynamoDbTarget#Path
   */
  readonly path?: string;

  /**
   * @schema GlueDynamoDbTarget#scanAll
   */
  readonly scanAll?: boolean;

  /**
   * @schema GlueDynamoDbTarget#scanRate
   */
  readonly scanRate?: number;

}

/**
 * Converts an object of type 'GlueDynamoDbTarget' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueDynamoDbTarget(obj: GlueDynamoDbTarget | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Path': obj.path,
    'scanAll': obj.scanAll,
    'scanRate': obj.scanRate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueCatalogTarget
 */
export interface GlueCatalogTarget {
  /**
   * @schema GlueCatalogTarget#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema GlueCatalogTarget#Tables
   */
  readonly tables?: string[];

}

/**
 * Converts an object of type 'GlueCatalogTarget' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueCatalogTarget(obj: GlueCatalogTarget | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DatabaseName': obj.databaseName,
    'Tables': obj.tables?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GluePrincipalPermissions
 */
export interface GluePrincipalPermissions {
  /**
   * @schema GluePrincipalPermissions#Principal
   */
  readonly principal?: GlueDataLakePrincipal;

  /**
   * @schema GluePrincipalPermissions#Permissions
   */
  readonly permissions?: string[];

}

/**
 * Converts an object of type 'GluePrincipalPermissions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GluePrincipalPermissions(obj: GluePrincipalPermissions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Principal': toJson_GlueDataLakePrincipal(obj.principal),
    'Permissions': obj.permissions?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueDatabaseIdentifier
 */
export interface GlueDatabaseIdentifier {
  /**
   * @schema GlueDatabaseIdentifier#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueDatabaseIdentifier#DatabaseName
   */
  readonly databaseName?: string;

}

/**
 * Converts an object of type 'GlueDatabaseIdentifier' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueDatabaseIdentifier(obj: GlueDatabaseIdentifier | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'DatabaseName': obj.databaseName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueFindMatchesParameters
 */
export interface GlueFindMatchesParameters {
  /**
   * @schema GlueFindMatchesParameters#PrimaryKeyColumnName
   */
  readonly primaryKeyColumnName?: string;

  /**
   * @schema GlueFindMatchesParameters#PrecisionRecallTradeoff
   */
  readonly precisionRecallTradeoff?: number;

  /**
   * @schema GlueFindMatchesParameters#AccuracyCostTradeoff
   */
  readonly accuracyCostTradeoff?: number;

  /**
   * @schema GlueFindMatchesParameters#EnforceProvidedLabels
   */
  readonly enforceProvidedLabels?: boolean;

}

/**
 * Converts an object of type 'GlueFindMatchesParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueFindMatchesParameters(obj: GlueFindMatchesParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PrimaryKeyColumnName': obj.primaryKeyColumnName,
    'PrecisionRecallTradeoff': obj.precisionRecallTradeoff,
    'AccuracyCostTradeoff': obj.accuracyCostTradeoff,
    'EnforceProvidedLabels': obj.enforceProvidedLabels,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueMlUserDataEncryption
 */
export interface GlueMlUserDataEncryption {
  /**
   * @schema GlueMlUserDataEncryption#MlUserDataEncryptionMode
   */
  readonly mlUserDataEncryptionMode?: string;

  /**
   * @schema GlueMlUserDataEncryption#KmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * Converts an object of type 'GlueMlUserDataEncryption' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueMlUserDataEncryption(obj: GlueMlUserDataEncryption | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MlUserDataEncryptionMode': obj.mlUserDataEncryptionMode,
    'KmsKeyId': obj.kmsKeyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueCodeGenNodeArg
 */
export interface GlueCodeGenNodeArg {
  /**
   * @schema GlueCodeGenNodeArg#Name
   */
  readonly name?: string;

  /**
   * @schema GlueCodeGenNodeArg#Value
   */
  readonly value?: string;

  /**
   * @schema GlueCodeGenNodeArg#Param
   */
  readonly param?: boolean;

}

/**
 * Converts an object of type 'GlueCodeGenNodeArg' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueCodeGenNodeArg(obj: GlueCodeGenNodeArg | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Value': obj.value,
    'Param': obj.param,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueS3Encryption
 */
export interface GlueS3Encryption {
  /**
   * @schema GlueS3Encryption#S3EncryptionMode
   */
  readonly s3EncryptionMode?: string;

  /**
   * @schema GlueS3Encryption#KmsKeyArn
   */
  readonly kmsKeyArn?: string;

}

/**
 * Converts an object of type 'GlueS3Encryption' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueS3Encryption(obj: GlueS3Encryption | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S3EncryptionMode': obj.s3EncryptionMode,
    'KmsKeyArn': obj.kmsKeyArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueCloudWatchEncryption
 */
export interface GlueCloudWatchEncryption {
  /**
   * @schema GlueCloudWatchEncryption#CloudWatchEncryptionMode
   */
  readonly cloudWatchEncryptionMode?: string;

  /**
   * @schema GlueCloudWatchEncryption#KmsKeyArn
   */
  readonly kmsKeyArn?: string;

}

/**
 * Converts an object of type 'GlueCloudWatchEncryption' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueCloudWatchEncryption(obj: GlueCloudWatchEncryption | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CloudWatchEncryptionMode': obj.cloudWatchEncryptionMode,
    'KmsKeyArn': obj.kmsKeyArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueJobBookmarksEncryption
 */
export interface GlueJobBookmarksEncryption {
  /**
   * @schema GlueJobBookmarksEncryption#JobBookmarksEncryptionMode
   */
  readonly jobBookmarksEncryptionMode?: string;

  /**
   * @schema GlueJobBookmarksEncryption#KmsKeyArn
   */
  readonly kmsKeyArn?: string;

}

/**
 * Converts an object of type 'GlueJobBookmarksEncryption' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueJobBookmarksEncryption(obj: GlueJobBookmarksEncryption | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobBookmarksEncryptionMode': obj.jobBookmarksEncryptionMode,
    'KmsKeyArn': obj.kmsKeyArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueColumn
 */
export interface GlueColumn {
  /**
   * @schema GlueColumn#Name
   */
  readonly name?: string;

  /**
   * @schema GlueColumn#Type
   */
  readonly type?: string;

  /**
   * @schema GlueColumn#Comment
   */
  readonly comment?: string;

  /**
   * @schema GlueColumn#Parameters
   */
  readonly parameters?: { [key: string]: string };

}

/**
 * Converts an object of type 'GlueColumn' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueColumn(obj: GlueColumn | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Type': obj.type,
    'Comment': obj.comment,
    'Parameters': ((obj.parameters) === undefined) ? undefined : (Object.entries(obj.parameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueTableIdentifier
 */
export interface GlueTableIdentifier {
  /**
   * @schema GlueTableIdentifier#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueTableIdentifier#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema GlueTableIdentifier#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'GlueTableIdentifier' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueTableIdentifier(obj: GlueTableIdentifier | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'DatabaseName': obj.databaseName,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueCondition
 */
export interface GlueCondition {
  /**
   * @schema GlueCondition#LogicalOperator
   */
  readonly logicalOperator?: string;

  /**
   * @schema GlueCondition#JobName
   */
  readonly jobName?: string;

  /**
   * @schema GlueCondition#State
   */
  readonly state?: string;

  /**
   * @schema GlueCondition#CrawlerName
   */
  readonly crawlerName?: string;

  /**
   * @schema GlueCondition#CrawlState
   */
  readonly crawlState?: string;

}

/**
 * Converts an object of type 'GlueCondition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueCondition(obj: GlueCondition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LogicalOperator': obj.logicalOperator,
    'JobName': obj.jobName,
    'State': obj.state,
    'CrawlerName': obj.crawlerName,
    'CrawlState': obj.crawlState,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueResourceUri
 */
export interface GlueResourceUri {
  /**
   * @schema GlueResourceUri#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema GlueResourceUri#Uri
   */
  readonly uri?: string;

}

/**
 * Converts an object of type 'GlueResourceUri' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueResourceUri(obj: GlueResourceUri | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceType': obj.resourceType,
    'Uri': obj.uri,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueErrorDetails
 */
export interface GlueErrorDetails {
  /**
   * @schema GlueErrorDetails#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema GlueErrorDetails#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * Converts an object of type 'GlueErrorDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueErrorDetails(obj: GlueErrorDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ErrorCode': obj.errorCode,
    'ErrorMessage': obj.errorMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueGrokClassifier
 */
export interface GlueGrokClassifier {
  /**
   * @schema GlueGrokClassifier#Name
   */
  readonly name?: string;

  /**
   * @schema GlueGrokClassifier#Classification
   */
  readonly classification?: string;

  /**
   * @schema GlueGrokClassifier#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema GlueGrokClassifier#LastUpdated
   */
  readonly lastUpdated?: string;

  /**
   * @schema GlueGrokClassifier#Version
   */
  readonly version?: number;

  /**
   * @schema GlueGrokClassifier#GrokPattern
   */
  readonly grokPattern?: string;

  /**
   * @schema GlueGrokClassifier#CustomPatterns
   */
  readonly customPatterns?: string;

}

/**
 * Converts an object of type 'GlueGrokClassifier' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueGrokClassifier(obj: GlueGrokClassifier | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Classification': obj.classification,
    'CreationTime': obj.creationTime,
    'LastUpdated': obj.lastUpdated,
    'Version': obj.version,
    'GrokPattern': obj.grokPattern,
    'CustomPatterns': obj.customPatterns,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueXmlClassifier
 */
export interface GlueXmlClassifier {
  /**
   * @schema GlueXmlClassifier#Name
   */
  readonly name?: string;

  /**
   * @schema GlueXmlClassifier#Classification
   */
  readonly classification?: string;

  /**
   * @schema GlueXmlClassifier#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema GlueXmlClassifier#LastUpdated
   */
  readonly lastUpdated?: string;

  /**
   * @schema GlueXmlClassifier#Version
   */
  readonly version?: number;

  /**
   * @schema GlueXmlClassifier#RowTag
   */
  readonly rowTag?: string;

}

/**
 * Converts an object of type 'GlueXmlClassifier' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueXmlClassifier(obj: GlueXmlClassifier | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Classification': obj.classification,
    'CreationTime': obj.creationTime,
    'LastUpdated': obj.lastUpdated,
    'Version': obj.version,
    'RowTag': obj.rowTag,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueJsonClassifier
 */
export interface GlueJsonClassifier {
  /**
   * @schema GlueJsonClassifier#Name
   */
  readonly name?: string;

  /**
   * @schema GlueJsonClassifier#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema GlueJsonClassifier#LastUpdated
   */
  readonly lastUpdated?: string;

  /**
   * @schema GlueJsonClassifier#Version
   */
  readonly version?: number;

  /**
   * @schema GlueJsonClassifier#JsonPath
   */
  readonly jsonPath?: string;

}

/**
 * Converts an object of type 'GlueJsonClassifier' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueJsonClassifier(obj: GlueJsonClassifier | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'CreationTime': obj.creationTime,
    'LastUpdated': obj.lastUpdated,
    'Version': obj.version,
    'JsonPath': obj.jsonPath,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueCsvClassifier
 */
export interface GlueCsvClassifier {
  /**
   * @schema GlueCsvClassifier#Name
   */
  readonly name?: string;

  /**
   * @schema GlueCsvClassifier#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema GlueCsvClassifier#LastUpdated
   */
  readonly lastUpdated?: string;

  /**
   * @schema GlueCsvClassifier#Version
   */
  readonly version?: number;

  /**
   * @schema GlueCsvClassifier#Delimiter
   */
  readonly delimiter?: string;

  /**
   * @schema GlueCsvClassifier#QuoteSymbol
   */
  readonly quoteSymbol?: string;

  /**
   * @schema GlueCsvClassifier#ContainsHeader
   */
  readonly containsHeader?: string;

  /**
   * @schema GlueCsvClassifier#Header
   */
  readonly header?: string[];

  /**
   * @schema GlueCsvClassifier#DisableValueTrimming
   */
  readonly disableValueTrimming?: boolean;

  /**
   * @schema GlueCsvClassifier#AllowSingleColumn
   */
  readonly allowSingleColumn?: boolean;

}

/**
 * Converts an object of type 'GlueCsvClassifier' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueCsvClassifier(obj: GlueCsvClassifier | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'CreationTime': obj.creationTime,
    'LastUpdated': obj.lastUpdated,
    'Version': obj.version,
    'Delimiter': obj.delimiter,
    'QuoteSymbol': obj.quoteSymbol,
    'ContainsHeader': obj.containsHeader,
    'Header': obj.header?.map(y => y),
    'DisableValueTrimming': obj.disableValueTrimming,
    'AllowSingleColumn': obj.allowSingleColumn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueColumnStatisticsData
 */
export interface GlueColumnStatisticsData {
  /**
   * @schema GlueColumnStatisticsData#Type
   */
  readonly type?: string;

  /**
   * @schema GlueColumnStatisticsData#BooleanColumnStatisticsData
   */
  readonly booleanColumnStatisticsData?: GlueBooleanColumnStatisticsData;

  /**
   * @schema GlueColumnStatisticsData#DateColumnStatisticsData
   */
  readonly dateColumnStatisticsData?: GlueDateColumnStatisticsData;

  /**
   * @schema GlueColumnStatisticsData#DecimalColumnStatisticsData
   */
  readonly decimalColumnStatisticsData?: GlueDecimalColumnStatisticsData;

  /**
   * @schema GlueColumnStatisticsData#DoubleColumnStatisticsData
   */
  readonly doubleColumnStatisticsData?: GlueDoubleColumnStatisticsData;

  /**
   * @schema GlueColumnStatisticsData#LongColumnStatisticsData
   */
  readonly longColumnStatisticsData?: GlueLongColumnStatisticsData;

  /**
   * @schema GlueColumnStatisticsData#StringColumnStatisticsData
   */
  readonly stringColumnStatisticsData?: GlueStringColumnStatisticsData;

  /**
   * @schema GlueColumnStatisticsData#BinaryColumnStatisticsData
   */
  readonly binaryColumnStatisticsData?: GlueBinaryColumnStatisticsData;

}

/**
 * Converts an object of type 'GlueColumnStatisticsData' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueColumnStatisticsData(obj: GlueColumnStatisticsData | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'BooleanColumnStatisticsData': toJson_GlueBooleanColumnStatisticsData(obj.booleanColumnStatisticsData),
    'DateColumnStatisticsData': toJson_GlueDateColumnStatisticsData(obj.dateColumnStatisticsData),
    'DecimalColumnStatisticsData': toJson_GlueDecimalColumnStatisticsData(obj.decimalColumnStatisticsData),
    'DoubleColumnStatisticsData': toJson_GlueDoubleColumnStatisticsData(obj.doubleColumnStatisticsData),
    'LongColumnStatisticsData': toJson_GlueLongColumnStatisticsData(obj.longColumnStatisticsData),
    'StringColumnStatisticsData': toJson_GlueStringColumnStatisticsData(obj.stringColumnStatisticsData),
    'BinaryColumnStatisticsData': toJson_GlueBinaryColumnStatisticsData(obj.binaryColumnStatisticsData),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueEncryptionAtRest
 */
export interface GlueEncryptionAtRest {
  /**
   * @schema GlueEncryptionAtRest#CatalogEncryptionMode
   */
  readonly catalogEncryptionMode?: string;

  /**
   * @schema GlueEncryptionAtRest#SseAwsKmsKeyId
   */
  readonly sseAwsKmsKeyId?: string;

}

/**
 * Converts an object of type 'GlueEncryptionAtRest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueEncryptionAtRest(obj: GlueEncryptionAtRest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogEncryptionMode': obj.catalogEncryptionMode,
    'SseAwsKmsKeyId': obj.sseAwsKmsKeyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueConnectionPasswordEncryption
 */
export interface GlueConnectionPasswordEncryption {
  /**
   * @schema GlueConnectionPasswordEncryption#ReturnConnectionPasswordEncrypted
   */
  readonly returnConnectionPasswordEncrypted?: boolean;

  /**
   * @schema GlueConnectionPasswordEncryption#AwsKmsKeyId
   */
  readonly awsKmsKeyId?: string;

}

/**
 * Converts an object of type 'GlueConnectionPasswordEncryption' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueConnectionPasswordEncryption(obj: GlueConnectionPasswordEncryption | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReturnConnectionPasswordEncrypted': obj.returnConnectionPasswordEncrypted,
    'AwsKmsKeyId': obj.awsKmsKeyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GluePredecessor
 */
export interface GluePredecessor {
  /**
   * @schema GluePredecessor#JobName
   */
  readonly jobName?: string;

  /**
   * @schema GluePredecessor#RunId
   */
  readonly runId?: string;

}

/**
 * Converts an object of type 'GluePredecessor' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GluePredecessor(obj: GluePredecessor | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobName': obj.jobName,
    'RunId': obj.runId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueImportLabelsTaskRunProperties
 */
export interface GlueImportLabelsTaskRunProperties {
  /**
   * @schema GlueImportLabelsTaskRunProperties#InputS3Path
   */
  readonly inputS3Path?: string;

  /**
   * @schema GlueImportLabelsTaskRunProperties#Replace
   */
  readonly replace?: boolean;

}

/**
 * Converts an object of type 'GlueImportLabelsTaskRunProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueImportLabelsTaskRunProperties(obj: GlueImportLabelsTaskRunProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InputS3Path': obj.inputS3Path,
    'Replace': obj.replace,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueExportLabelsTaskRunProperties
 */
export interface GlueExportLabelsTaskRunProperties {
  /**
   * @schema GlueExportLabelsTaskRunProperties#OutputS3Path
   */
  readonly outputS3Path?: string;

}

/**
 * Converts an object of type 'GlueExportLabelsTaskRunProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueExportLabelsTaskRunProperties(obj: GlueExportLabelsTaskRunProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OutputS3Path': obj.outputS3Path,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueLabelingSetGenerationTaskRunProperties
 */
export interface GlueLabelingSetGenerationTaskRunProperties {
  /**
   * @schema GlueLabelingSetGenerationTaskRunProperties#OutputS3Path
   */
  readonly outputS3Path?: string;

}

/**
 * Converts an object of type 'GlueLabelingSetGenerationTaskRunProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueLabelingSetGenerationTaskRunProperties(obj: GlueLabelingSetGenerationTaskRunProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OutputS3Path': obj.outputS3Path,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueFindMatchesTaskRunProperties
 */
export interface GlueFindMatchesTaskRunProperties {
  /**
   * @schema GlueFindMatchesTaskRunProperties#JobId
   */
  readonly jobId?: string;

  /**
   * @schema GlueFindMatchesTaskRunProperties#JobName
   */
  readonly jobName?: string;

  /**
   * @schema GlueFindMatchesTaskRunProperties#JobRunId
   */
  readonly jobRunId?: string;

}

/**
 * Converts an object of type 'GlueFindMatchesTaskRunProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueFindMatchesTaskRunProperties(obj: GlueFindMatchesTaskRunProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
    'JobName': obj.jobName,
    'JobRunId': obj.jobRunId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueFindMatchesMetrics
 */
export interface GlueFindMatchesMetrics {
  /**
   * @schema GlueFindMatchesMetrics#AreaUnderPRCurve
   */
  readonly areaUnderPrCurve?: number;

  /**
   * @schema GlueFindMatchesMetrics#Precision
   */
  readonly precision?: number;

  /**
   * @schema GlueFindMatchesMetrics#Recall
   */
  readonly recall?: number;

  /**
   * @schema GlueFindMatchesMetrics#F1
   */
  readonly f1?: number;

  /**
   * @schema GlueFindMatchesMetrics#ConfusionMatrix
   */
  readonly confusionMatrix?: GlueConfusionMatrix;

  /**
   * @schema GlueFindMatchesMetrics#ColumnImportances
   */
  readonly columnImportances?: GlueColumnImportance[];

}

/**
 * Converts an object of type 'GlueFindMatchesMetrics' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueFindMatchesMetrics(obj: GlueFindMatchesMetrics | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AreaUnderPRCurve': obj.areaUnderPrCurve,
    'Precision': obj.precision,
    'Recall': obj.recall,
    'F1': obj.f1,
    'ConfusionMatrix': toJson_GlueConfusionMatrix(obj.confusionMatrix),
    'ColumnImportances': obj.columnImportances?.map(y => toJson_GlueColumnImportance(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueKeySchemaElement
 */
export interface GlueKeySchemaElement {
  /**
   * @schema GlueKeySchemaElement#Name
   */
  readonly name?: string;

  /**
   * @schema GlueKeySchemaElement#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'GlueKeySchemaElement' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueKeySchemaElement(obj: GlueKeySchemaElement | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueBackfillError
 */
export interface GlueBackfillError {
  /**
   * @schema GlueBackfillError#Code
   */
  readonly code?: string;

  /**
   * @schema GlueBackfillError#Partitions
   */
  readonly partitions?: GluePartitionValueList[];

}

/**
 * Converts an object of type 'GlueBackfillError' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueBackfillError(obj: GlueBackfillError | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Code': obj.code,
    'Partitions': obj.partitions?.map(y => toJson_GluePartitionValueList(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueWorkflowRunStatistics
 */
export interface GlueWorkflowRunStatistics {
  /**
   * @schema GlueWorkflowRunStatistics#TotalActions
   */
  readonly totalActions?: number;

  /**
   * @schema GlueWorkflowRunStatistics#TimeoutActions
   */
  readonly timeoutActions?: number;

  /**
   * @schema GlueWorkflowRunStatistics#FailedActions
   */
  readonly failedActions?: number;

  /**
   * @schema GlueWorkflowRunStatistics#StoppedActions
   */
  readonly stoppedActions?: number;

  /**
   * @schema GlueWorkflowRunStatistics#SucceededActions
   */
  readonly succeededActions?: number;

  /**
   * @schema GlueWorkflowRunStatistics#RunningActions
   */
  readonly runningActions?: number;

}

/**
 * Converts an object of type 'GlueWorkflowRunStatistics' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueWorkflowRunStatistics(obj: GlueWorkflowRunStatistics | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TotalActions': obj.totalActions,
    'TimeoutActions': obj.timeoutActions,
    'FailedActions': obj.failedActions,
    'StoppedActions': obj.stoppedActions,
    'SucceededActions': obj.succeededActions,
    'RunningActions': obj.runningActions,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueStartingEventBatchCondition
 */
export interface GlueStartingEventBatchCondition {
  /**
   * @schema GlueStartingEventBatchCondition#BatchSize
   */
  readonly batchSize?: number;

  /**
   * @schema GlueStartingEventBatchCondition#BatchWindow
   */
  readonly batchWindow?: number;

}

/**
 * Converts an object of type 'GlueStartingEventBatchCondition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueStartingEventBatchCondition(obj: GlueStartingEventBatchCondition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BatchSize': obj.batchSize,
    'BatchWindow': obj.batchWindow,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueOtherMetadataValueListItem
 */
export interface GlueOtherMetadataValueListItem {
  /**
   * @schema GlueOtherMetadataValueListItem#MetadataValue
   */
  readonly metadataValue?: string;

  /**
   * @schema GlueOtherMetadataValueListItem#CreatedTime
   */
  readonly createdTime?: string;

}

/**
 * Converts an object of type 'GlueOtherMetadataValueListItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueOtherMetadataValueListItem(obj: GlueOtherMetadataValueListItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MetadataValue': obj.metadataValue,
    'CreatedTime': obj.createdTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueSerDeInfo
 */
export interface GlueSerDeInfo {
  /**
   * @schema GlueSerDeInfo#Name
   */
  readonly name?: string;

  /**
   * @schema GlueSerDeInfo#SerializationLibrary
   */
  readonly serializationLibrary?: string;

  /**
   * @schema GlueSerDeInfo#Parameters
   */
  readonly parameters?: { [key: string]: string };

}

/**
 * Converts an object of type 'GlueSerDeInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueSerDeInfo(obj: GlueSerDeInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'SerializationLibrary': obj.serializationLibrary,
    'Parameters': ((obj.parameters) === undefined) ? undefined : (Object.entries(obj.parameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueOrder
 */
export interface GlueOrder {
  /**
   * @schema GlueOrder#Column
   */
  readonly column?: string;

  /**
   * @schema GlueOrder#SortOrder
   */
  readonly sortOrder?: number;

}

/**
 * Converts an object of type 'GlueOrder' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueOrder(obj: GlueOrder | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Column': obj.column,
    'SortOrder': obj.sortOrder,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueSkewedInfo
 */
export interface GlueSkewedInfo {
  /**
   * @schema GlueSkewedInfo#SkewedColumnNames
   */
  readonly skewedColumnNames?: string[];

  /**
   * @schema GlueSkewedInfo#SkewedColumnValues
   */
  readonly skewedColumnValues?: string[];

  /**
   * @schema GlueSkewedInfo#SkewedColumnValueLocationMaps
   */
  readonly skewedColumnValueLocationMaps?: { [key: string]: string };

}

/**
 * Converts an object of type 'GlueSkewedInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueSkewedInfo(obj: GlueSkewedInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SkewedColumnNames': obj.skewedColumnNames?.map(y => y),
    'SkewedColumnValues': obj.skewedColumnValues?.map(y => y),
    'SkewedColumnValueLocationMaps': ((obj.skewedColumnValueLocationMaps) === undefined) ? undefined : (Object.entries(obj.skewedColumnValueLocationMaps).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueSchemaReference
 */
export interface GlueSchemaReference {
  /**
   * @schema GlueSchemaReference#SchemaId
   */
  readonly schemaId?: GlueSchemaId;

  /**
   * @schema GlueSchemaReference#SchemaVersionId
   */
  readonly schemaVersionId?: string;

  /**
   * @schema GlueSchemaReference#SchemaVersionNumber
   */
  readonly schemaVersionNumber?: number;

}

/**
 * Converts an object of type 'GlueSchemaReference' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueSchemaReference(obj: GlueSchemaReference | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SchemaId': toJson_GlueSchemaId(obj.schemaId),
    'SchemaVersionId': obj.schemaVersionId,
    'SchemaVersionNumber': obj.schemaVersionNumber,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueNode
 */
export interface GlueNode {
  /**
   * @schema GlueNode#Type
   */
  readonly type?: string;

  /**
   * @schema GlueNode#Name
   */
  readonly name?: string;

  /**
   * @schema GlueNode#UniqueId
   */
  readonly uniqueId?: string;

  /**
   * @schema GlueNode#TriggerDetails
   */
  readonly triggerDetails?: GlueTriggerNodeDetails;

  /**
   * @schema GlueNode#JobDetails
   */
  readonly jobDetails?: GlueJobNodeDetails;

  /**
   * @schema GlueNode#CrawlerDetails
   */
  readonly crawlerDetails?: GlueCrawlerNodeDetails;

}

/**
 * Converts an object of type 'GlueNode' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueNode(obj: GlueNode | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Name': obj.name,
    'UniqueId': obj.uniqueId,
    'TriggerDetails': toJson_GlueTriggerNodeDetails(obj.triggerDetails),
    'JobDetails': toJson_GlueJobNodeDetails(obj.jobDetails),
    'CrawlerDetails': toJson_GlueCrawlerNodeDetails(obj.crawlerDetails),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueEdge
 */
export interface GlueEdge {
  /**
   * @schema GlueEdge#SourceId
   */
  readonly sourceId?: string;

  /**
   * @schema GlueEdge#DestinationId
   */
  readonly destinationId?: string;

}

/**
 * Converts an object of type 'GlueEdge' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueEdge(obj: GlueEdge | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceId': obj.sourceId,
    'DestinationId': obj.destinationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueDataLakePrincipal
 */
export interface GlueDataLakePrincipal {
  /**
   * @schema GlueDataLakePrincipal#DataLakePrincipalIdentifier
   */
  readonly dataLakePrincipalIdentifier?: string;

}

/**
 * Converts an object of type 'GlueDataLakePrincipal' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueDataLakePrincipal(obj: GlueDataLakePrincipal | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataLakePrincipalIdentifier': obj.dataLakePrincipalIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueBooleanColumnStatisticsData
 */
export interface GlueBooleanColumnStatisticsData {
  /**
   * @schema GlueBooleanColumnStatisticsData#NumberOfTrues
   */
  readonly numberOfTrues?: number;

  /**
   * @schema GlueBooleanColumnStatisticsData#NumberOfFalses
   */
  readonly numberOfFalses?: number;

  /**
   * @schema GlueBooleanColumnStatisticsData#NumberOfNulls
   */
  readonly numberOfNulls?: number;

}

/**
 * Converts an object of type 'GlueBooleanColumnStatisticsData' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueBooleanColumnStatisticsData(obj: GlueBooleanColumnStatisticsData | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NumberOfTrues': obj.numberOfTrues,
    'NumberOfFalses': obj.numberOfFalses,
    'NumberOfNulls': obj.numberOfNulls,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueDateColumnStatisticsData
 */
export interface GlueDateColumnStatisticsData {
  /**
   * @schema GlueDateColumnStatisticsData#MinimumValue
   */
  readonly minimumValue?: string;

  /**
   * @schema GlueDateColumnStatisticsData#MaximumValue
   */
  readonly maximumValue?: string;

  /**
   * @schema GlueDateColumnStatisticsData#NumberOfNulls
   */
  readonly numberOfNulls?: number;

  /**
   * @schema GlueDateColumnStatisticsData#NumberOfDistinctValues
   */
  readonly numberOfDistinctValues?: number;

}

/**
 * Converts an object of type 'GlueDateColumnStatisticsData' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueDateColumnStatisticsData(obj: GlueDateColumnStatisticsData | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MinimumValue': obj.minimumValue,
    'MaximumValue': obj.maximumValue,
    'NumberOfNulls': obj.numberOfNulls,
    'NumberOfDistinctValues': obj.numberOfDistinctValues,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueDecimalColumnStatisticsData
 */
export interface GlueDecimalColumnStatisticsData {
  /**
   * @schema GlueDecimalColumnStatisticsData#MinimumValue
   */
  readonly minimumValue?: GlueDecimalNumber;

  /**
   * @schema GlueDecimalColumnStatisticsData#MaximumValue
   */
  readonly maximumValue?: GlueDecimalNumber;

  /**
   * @schema GlueDecimalColumnStatisticsData#NumberOfNulls
   */
  readonly numberOfNulls?: number;

  /**
   * @schema GlueDecimalColumnStatisticsData#NumberOfDistinctValues
   */
  readonly numberOfDistinctValues?: number;

}

/**
 * Converts an object of type 'GlueDecimalColumnStatisticsData' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueDecimalColumnStatisticsData(obj: GlueDecimalColumnStatisticsData | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MinimumValue': toJson_GlueDecimalNumber(obj.minimumValue),
    'MaximumValue': toJson_GlueDecimalNumber(obj.maximumValue),
    'NumberOfNulls': obj.numberOfNulls,
    'NumberOfDistinctValues': obj.numberOfDistinctValues,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueDoubleColumnStatisticsData
 */
export interface GlueDoubleColumnStatisticsData {
  /**
   * @schema GlueDoubleColumnStatisticsData#MinimumValue
   */
  readonly minimumValue?: number;

  /**
   * @schema GlueDoubleColumnStatisticsData#MaximumValue
   */
  readonly maximumValue?: number;

  /**
   * @schema GlueDoubleColumnStatisticsData#NumberOfNulls
   */
  readonly numberOfNulls?: number;

  /**
   * @schema GlueDoubleColumnStatisticsData#NumberOfDistinctValues
   */
  readonly numberOfDistinctValues?: number;

}

/**
 * Converts an object of type 'GlueDoubleColumnStatisticsData' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueDoubleColumnStatisticsData(obj: GlueDoubleColumnStatisticsData | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MinimumValue': obj.minimumValue,
    'MaximumValue': obj.maximumValue,
    'NumberOfNulls': obj.numberOfNulls,
    'NumberOfDistinctValues': obj.numberOfDistinctValues,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueLongColumnStatisticsData
 */
export interface GlueLongColumnStatisticsData {
  /**
   * @schema GlueLongColumnStatisticsData#MinimumValue
   */
  readonly minimumValue?: number;

  /**
   * @schema GlueLongColumnStatisticsData#MaximumValue
   */
  readonly maximumValue?: number;

  /**
   * @schema GlueLongColumnStatisticsData#NumberOfNulls
   */
  readonly numberOfNulls?: number;

  /**
   * @schema GlueLongColumnStatisticsData#NumberOfDistinctValues
   */
  readonly numberOfDistinctValues?: number;

}

/**
 * Converts an object of type 'GlueLongColumnStatisticsData' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueLongColumnStatisticsData(obj: GlueLongColumnStatisticsData | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MinimumValue': obj.minimumValue,
    'MaximumValue': obj.maximumValue,
    'NumberOfNulls': obj.numberOfNulls,
    'NumberOfDistinctValues': obj.numberOfDistinctValues,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueStringColumnStatisticsData
 */
export interface GlueStringColumnStatisticsData {
  /**
   * @schema GlueStringColumnStatisticsData#MaximumLength
   */
  readonly maximumLength?: number;

  /**
   * @schema GlueStringColumnStatisticsData#AverageLength
   */
  readonly averageLength?: number;

  /**
   * @schema GlueStringColumnStatisticsData#NumberOfNulls
   */
  readonly numberOfNulls?: number;

  /**
   * @schema GlueStringColumnStatisticsData#NumberOfDistinctValues
   */
  readonly numberOfDistinctValues?: number;

}

/**
 * Converts an object of type 'GlueStringColumnStatisticsData' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueStringColumnStatisticsData(obj: GlueStringColumnStatisticsData | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaximumLength': obj.maximumLength,
    'AverageLength': obj.averageLength,
    'NumberOfNulls': obj.numberOfNulls,
    'NumberOfDistinctValues': obj.numberOfDistinctValues,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueBinaryColumnStatisticsData
 */
export interface GlueBinaryColumnStatisticsData {
  /**
   * @schema GlueBinaryColumnStatisticsData#MaximumLength
   */
  readonly maximumLength?: number;

  /**
   * @schema GlueBinaryColumnStatisticsData#AverageLength
   */
  readonly averageLength?: number;

  /**
   * @schema GlueBinaryColumnStatisticsData#NumberOfNulls
   */
  readonly numberOfNulls?: number;

}

/**
 * Converts an object of type 'GlueBinaryColumnStatisticsData' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueBinaryColumnStatisticsData(obj: GlueBinaryColumnStatisticsData | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaximumLength': obj.maximumLength,
    'AverageLength': obj.averageLength,
    'NumberOfNulls': obj.numberOfNulls,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueConfusionMatrix
 */
export interface GlueConfusionMatrix {
  /**
   * @schema GlueConfusionMatrix#NumTruePositives
   */
  readonly numTruePositives?: number;

  /**
   * @schema GlueConfusionMatrix#NumFalsePositives
   */
  readonly numFalsePositives?: number;

  /**
   * @schema GlueConfusionMatrix#NumTrueNegatives
   */
  readonly numTrueNegatives?: number;

  /**
   * @schema GlueConfusionMatrix#NumFalseNegatives
   */
  readonly numFalseNegatives?: number;

}

/**
 * Converts an object of type 'GlueConfusionMatrix' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueConfusionMatrix(obj: GlueConfusionMatrix | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NumTruePositives': obj.numTruePositives,
    'NumFalsePositives': obj.numFalsePositives,
    'NumTrueNegatives': obj.numTrueNegatives,
    'NumFalseNegatives': obj.numFalseNegatives,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueColumnImportance
 */
export interface GlueColumnImportance {
  /**
   * @schema GlueColumnImportance#ColumnName
   */
  readonly columnName?: string;

  /**
   * @schema GlueColumnImportance#Importance
   */
  readonly importance?: number;

}

/**
 * Converts an object of type 'GlueColumnImportance' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueColumnImportance(obj: GlueColumnImportance | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ColumnName': obj.columnName,
    'Importance': obj.importance,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueTriggerNodeDetails
 */
export interface GlueTriggerNodeDetails {
  /**
   * @schema GlueTriggerNodeDetails#Trigger
   */
  readonly trigger?: GlueTrigger;

}

/**
 * Converts an object of type 'GlueTriggerNodeDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueTriggerNodeDetails(obj: GlueTriggerNodeDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Trigger': toJson_GlueTrigger(obj.trigger),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueJobNodeDetails
 */
export interface GlueJobNodeDetails {
  /**
   * @schema GlueJobNodeDetails#JobRuns
   */
  readonly jobRuns?: GlueJobRun[];

}

/**
 * Converts an object of type 'GlueJobNodeDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueJobNodeDetails(obj: GlueJobNodeDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobRuns': obj.jobRuns?.map(y => toJson_GlueJobRun(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueCrawlerNodeDetails
 */
export interface GlueCrawlerNodeDetails {
  /**
   * @schema GlueCrawlerNodeDetails#Crawls
   */
  readonly crawls?: GlueCrawl[];

}

/**
 * Converts an object of type 'GlueCrawlerNodeDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueCrawlerNodeDetails(obj: GlueCrawlerNodeDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Crawls': obj.crawls?.map(y => toJson_GlueCrawl(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueDecimalNumber
 */
export interface GlueDecimalNumber {
  /**
   * @schema GlueDecimalNumber#UnscaledValue
   */
  readonly unscaledValue?: any;

  /**
   * @schema GlueDecimalNumber#Scale
   */
  readonly scale?: number;

}

/**
 * Converts an object of type 'GlueDecimalNumber' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueDecimalNumber(obj: GlueDecimalNumber | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UnscaledValue': obj.unscaledValue,
    'Scale': obj.scale,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlueCrawl
 */
export interface GlueCrawl {
  /**
   * @schema GlueCrawl#State
   */
  readonly state?: string;

  /**
   * @schema GlueCrawl#StartedOn
   */
  readonly startedOn?: string;

  /**
   * @schema GlueCrawl#CompletedOn
   */
  readonly completedOn?: string;

  /**
   * @schema GlueCrawl#ErrorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema GlueCrawl#LogGroup
   */
  readonly logGroup?: string;

  /**
   * @schema GlueCrawl#LogStream
   */
  readonly logStream?: string;

}

/**
 * Converts an object of type 'GlueCrawl' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlueCrawl(obj: GlueCrawl | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'State': obj.state,
    'StartedOn': obj.startedOn,
    'CompletedOn': obj.completedOn,
    'ErrorMessage': obj.errorMessage,
    'LogGroup': obj.logGroup,
    'LogStream': obj.logStream,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
