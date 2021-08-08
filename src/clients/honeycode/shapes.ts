/**
 * @schema HoneycodeBatchCreateTableRowsRequest
 */
export interface HoneycodeBatchCreateTableRowsRequest {
  /**
   * @schema HoneycodeBatchCreateTableRowsRequest#workbookId
   */
  readonly workbookId: string;

  /**
   * @schema HoneycodeBatchCreateTableRowsRequest#tableId
   */
  readonly tableId: string;

  /**
   * @schema HoneycodeBatchCreateTableRowsRequest#rowsToCreate
   */
  readonly rowsToCreate: HoneycodeCreateRowData[];

  /**
   * @schema HoneycodeBatchCreateTableRowsRequest#clientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * Converts an object of type 'HoneycodeBatchCreateTableRowsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HoneycodeBatchCreateTableRowsRequest(obj: HoneycodeBatchCreateTableRowsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'workbookId': obj.workbookId,
    'tableId': obj.tableId,
    'rowsToCreate': obj.rowsToCreate?.map(y => toJson_HoneycodeCreateRowData(y)),
    'clientRequestToken': obj.clientRequestToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HoneycodeBatchCreateTableRowsResult
 */
export interface HoneycodeBatchCreateTableRowsResult {
  /**
   * @schema HoneycodeBatchCreateTableRowsResult#workbookCursor
   */
  readonly workbookCursor: number;

  /**
   * @schema HoneycodeBatchCreateTableRowsResult#createdRows
   */
  readonly createdRows: { [key: string]: string };

  /**
   * @schema HoneycodeBatchCreateTableRowsResult#failedBatchItems
   */
  readonly failedBatchItems?: HoneycodeFailedBatchItem[];

}

/**
 * Converts an object of type 'HoneycodeBatchCreateTableRowsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HoneycodeBatchCreateTableRowsResult(obj: HoneycodeBatchCreateTableRowsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'workbookCursor': obj.workbookCursor,
    'createdRows': ((obj.createdRows) === undefined) ? undefined : (Object.entries(obj.createdRows).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'failedBatchItems': obj.failedBatchItems?.map(y => toJson_HoneycodeFailedBatchItem(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HoneycodeBatchDeleteTableRowsRequest
 */
export interface HoneycodeBatchDeleteTableRowsRequest {
  /**
   * @schema HoneycodeBatchDeleteTableRowsRequest#workbookId
   */
  readonly workbookId: string;

  /**
   * @schema HoneycodeBatchDeleteTableRowsRequest#tableId
   */
  readonly tableId: string;

  /**
   * @schema HoneycodeBatchDeleteTableRowsRequest#rowIds
   */
  readonly rowIds: string[];

  /**
   * @schema HoneycodeBatchDeleteTableRowsRequest#clientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * Converts an object of type 'HoneycodeBatchDeleteTableRowsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HoneycodeBatchDeleteTableRowsRequest(obj: HoneycodeBatchDeleteTableRowsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'workbookId': obj.workbookId,
    'tableId': obj.tableId,
    'rowIds': obj.rowIds?.map(y => y),
    'clientRequestToken': obj.clientRequestToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HoneycodeBatchDeleteTableRowsResult
 */
export interface HoneycodeBatchDeleteTableRowsResult {
  /**
   * @schema HoneycodeBatchDeleteTableRowsResult#workbookCursor
   */
  readonly workbookCursor: number;

  /**
   * @schema HoneycodeBatchDeleteTableRowsResult#failedBatchItems
   */
  readonly failedBatchItems?: HoneycodeFailedBatchItem[];

}

/**
 * Converts an object of type 'HoneycodeBatchDeleteTableRowsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HoneycodeBatchDeleteTableRowsResult(obj: HoneycodeBatchDeleteTableRowsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'workbookCursor': obj.workbookCursor,
    'failedBatchItems': obj.failedBatchItems?.map(y => toJson_HoneycodeFailedBatchItem(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HoneycodeBatchUpdateTableRowsRequest
 */
export interface HoneycodeBatchUpdateTableRowsRequest {
  /**
   * @schema HoneycodeBatchUpdateTableRowsRequest#workbookId
   */
  readonly workbookId: string;

  /**
   * @schema HoneycodeBatchUpdateTableRowsRequest#tableId
   */
  readonly tableId: string;

  /**
   * @schema HoneycodeBatchUpdateTableRowsRequest#rowsToUpdate
   */
  readonly rowsToUpdate: HoneycodeUpdateRowData[];

  /**
   * @schema HoneycodeBatchUpdateTableRowsRequest#clientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * Converts an object of type 'HoneycodeBatchUpdateTableRowsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HoneycodeBatchUpdateTableRowsRequest(obj: HoneycodeBatchUpdateTableRowsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'workbookId': obj.workbookId,
    'tableId': obj.tableId,
    'rowsToUpdate': obj.rowsToUpdate?.map(y => toJson_HoneycodeUpdateRowData(y)),
    'clientRequestToken': obj.clientRequestToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HoneycodeBatchUpdateTableRowsResult
 */
export interface HoneycodeBatchUpdateTableRowsResult {
  /**
   * @schema HoneycodeBatchUpdateTableRowsResult#workbookCursor
   */
  readonly workbookCursor: number;

  /**
   * @schema HoneycodeBatchUpdateTableRowsResult#failedBatchItems
   */
  readonly failedBatchItems?: HoneycodeFailedBatchItem[];

}

/**
 * Converts an object of type 'HoneycodeBatchUpdateTableRowsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HoneycodeBatchUpdateTableRowsResult(obj: HoneycodeBatchUpdateTableRowsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'workbookCursor': obj.workbookCursor,
    'failedBatchItems': obj.failedBatchItems?.map(y => toJson_HoneycodeFailedBatchItem(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HoneycodeBatchUpsertTableRowsRequest
 */
export interface HoneycodeBatchUpsertTableRowsRequest {
  /**
   * @schema HoneycodeBatchUpsertTableRowsRequest#workbookId
   */
  readonly workbookId: string;

  /**
   * @schema HoneycodeBatchUpsertTableRowsRequest#tableId
   */
  readonly tableId: string;

  /**
   * @schema HoneycodeBatchUpsertTableRowsRequest#rowsToUpsert
   */
  readonly rowsToUpsert: HoneycodeUpsertRowData[];

  /**
   * @schema HoneycodeBatchUpsertTableRowsRequest#clientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * Converts an object of type 'HoneycodeBatchUpsertTableRowsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HoneycodeBatchUpsertTableRowsRequest(obj: HoneycodeBatchUpsertTableRowsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'workbookId': obj.workbookId,
    'tableId': obj.tableId,
    'rowsToUpsert': obj.rowsToUpsert?.map(y => toJson_HoneycodeUpsertRowData(y)),
    'clientRequestToken': obj.clientRequestToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HoneycodeBatchUpsertTableRowsResult
 */
export interface HoneycodeBatchUpsertTableRowsResult {
  /**
   * @schema HoneycodeBatchUpsertTableRowsResult#rows
   */
  readonly rows: { [key: string]: HoneycodeUpsertRowsResult };

  /**
   * @schema HoneycodeBatchUpsertTableRowsResult#workbookCursor
   */
  readonly workbookCursor: number;

  /**
   * @schema HoneycodeBatchUpsertTableRowsResult#failedBatchItems
   */
  readonly failedBatchItems?: HoneycodeFailedBatchItem[];

}

/**
 * Converts an object of type 'HoneycodeBatchUpsertTableRowsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HoneycodeBatchUpsertTableRowsResult(obj: HoneycodeBatchUpsertTableRowsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'rows': ((obj.rows) === undefined) ? undefined : (Object.entries(obj.rows).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_HoneycodeUpsertRowsResult(i[1]) }), {})),
    'workbookCursor': obj.workbookCursor,
    'failedBatchItems': obj.failedBatchItems?.map(y => toJson_HoneycodeFailedBatchItem(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HoneycodeDescribeTableDataImportJobRequest
 */
export interface HoneycodeDescribeTableDataImportJobRequest {
  /**
   * @schema HoneycodeDescribeTableDataImportJobRequest#workbookId
   */
  readonly workbookId: string;

  /**
   * @schema HoneycodeDescribeTableDataImportJobRequest#tableId
   */
  readonly tableId: string;

  /**
   * @schema HoneycodeDescribeTableDataImportJobRequest#jobId
   */
  readonly jobId: string;

}

/**
 * Converts an object of type 'HoneycodeDescribeTableDataImportJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HoneycodeDescribeTableDataImportJobRequest(obj: HoneycodeDescribeTableDataImportJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'workbookId': obj.workbookId,
    'tableId': obj.tableId,
    'jobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HoneycodeDescribeTableDataImportJobResult
 */
export interface HoneycodeDescribeTableDataImportJobResult {
  /**
   * @schema HoneycodeDescribeTableDataImportJobResult#jobStatus
   */
  readonly jobStatus: string;

  /**
   * @schema HoneycodeDescribeTableDataImportJobResult#message
   */
  readonly message: string;

  /**
   * @schema HoneycodeDescribeTableDataImportJobResult#jobMetadata
   */
  readonly jobMetadata: HoneycodeTableDataImportJobMetadata;

}

/**
 * Converts an object of type 'HoneycodeDescribeTableDataImportJobResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HoneycodeDescribeTableDataImportJobResult(obj: HoneycodeDescribeTableDataImportJobResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobStatus': obj.jobStatus,
    'message': obj.message,
    'jobMetadata': toJson_HoneycodeTableDataImportJobMetadata(obj.jobMetadata),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HoneycodeGetScreenDataRequest
 */
export interface HoneycodeGetScreenDataRequest {
  /**
   * @schema HoneycodeGetScreenDataRequest#workbookId
   */
  readonly workbookId: string;

  /**
   * @schema HoneycodeGetScreenDataRequest#appId
   */
  readonly appId: string;

  /**
   * @schema HoneycodeGetScreenDataRequest#screenId
   */
  readonly screenId: string;

  /**
   * @schema HoneycodeGetScreenDataRequest#variables
   */
  readonly variables?: { [key: string]: HoneycodeVariableValue };

  /**
   * @schema HoneycodeGetScreenDataRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema HoneycodeGetScreenDataRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'HoneycodeGetScreenDataRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HoneycodeGetScreenDataRequest(obj: HoneycodeGetScreenDataRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'workbookId': obj.workbookId,
    'appId': obj.appId,
    'screenId': obj.screenId,
    'variables': ((obj.variables) === undefined) ? undefined : (Object.entries(obj.variables).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_HoneycodeVariableValue(i[1]) }), {})),
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HoneycodeGetScreenDataResult
 */
export interface HoneycodeGetScreenDataResult {
  /**
   * @schema HoneycodeGetScreenDataResult#results
   */
  readonly results: { [key: string]: HoneycodeResultSet };

  /**
   * @schema HoneycodeGetScreenDataResult#workbookCursor
   */
  readonly workbookCursor: number;

  /**
   * @schema HoneycodeGetScreenDataResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'HoneycodeGetScreenDataResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HoneycodeGetScreenDataResult(obj: HoneycodeGetScreenDataResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'results': ((obj.results) === undefined) ? undefined : (Object.entries(obj.results).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_HoneycodeResultSet(i[1]) }), {})),
    'workbookCursor': obj.workbookCursor,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HoneycodeInvokeScreenAutomationRequest
 */
export interface HoneycodeInvokeScreenAutomationRequest {
  /**
   * @schema HoneycodeInvokeScreenAutomationRequest#workbookId
   */
  readonly workbookId: string;

  /**
   * @schema HoneycodeInvokeScreenAutomationRequest#appId
   */
  readonly appId: string;

  /**
   * @schema HoneycodeInvokeScreenAutomationRequest#screenId
   */
  readonly screenId: string;

  /**
   * @schema HoneycodeInvokeScreenAutomationRequest#screenAutomationId
   */
  readonly screenAutomationId: string;

  /**
   * @schema HoneycodeInvokeScreenAutomationRequest#variables
   */
  readonly variables?: { [key: string]: HoneycodeVariableValue };

  /**
   * @schema HoneycodeInvokeScreenAutomationRequest#rowId
   */
  readonly rowId?: string;

  /**
   * @schema HoneycodeInvokeScreenAutomationRequest#clientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * Converts an object of type 'HoneycodeInvokeScreenAutomationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HoneycodeInvokeScreenAutomationRequest(obj: HoneycodeInvokeScreenAutomationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'workbookId': obj.workbookId,
    'appId': obj.appId,
    'screenId': obj.screenId,
    'screenAutomationId': obj.screenAutomationId,
    'variables': ((obj.variables) === undefined) ? undefined : (Object.entries(obj.variables).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_HoneycodeVariableValue(i[1]) }), {})),
    'rowId': obj.rowId,
    'clientRequestToken': obj.clientRequestToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HoneycodeInvokeScreenAutomationResult
 */
export interface HoneycodeInvokeScreenAutomationResult {
  /**
   * @schema HoneycodeInvokeScreenAutomationResult#workbookCursor
   */
  readonly workbookCursor: number;

}

/**
 * Converts an object of type 'HoneycodeInvokeScreenAutomationResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HoneycodeInvokeScreenAutomationResult(obj: HoneycodeInvokeScreenAutomationResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'workbookCursor': obj.workbookCursor,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HoneycodeListTableColumnsRequest
 */
export interface HoneycodeListTableColumnsRequest {
  /**
   * @schema HoneycodeListTableColumnsRequest#workbookId
   */
  readonly workbookId: string;

  /**
   * @schema HoneycodeListTableColumnsRequest#tableId
   */
  readonly tableId: string;

  /**
   * @schema HoneycodeListTableColumnsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'HoneycodeListTableColumnsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HoneycodeListTableColumnsRequest(obj: HoneycodeListTableColumnsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'workbookId': obj.workbookId,
    'tableId': obj.tableId,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HoneycodeListTableColumnsResult
 */
export interface HoneycodeListTableColumnsResult {
  /**
   * @schema HoneycodeListTableColumnsResult#tableColumns
   */
  readonly tableColumns: HoneycodeTableColumn[];

  /**
   * @schema HoneycodeListTableColumnsResult#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema HoneycodeListTableColumnsResult#workbookCursor
   */
  readonly workbookCursor?: number;

}

/**
 * Converts an object of type 'HoneycodeListTableColumnsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HoneycodeListTableColumnsResult(obj: HoneycodeListTableColumnsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tableColumns': obj.tableColumns?.map(y => toJson_HoneycodeTableColumn(y)),
    'nextToken': obj.nextToken,
    'workbookCursor': obj.workbookCursor,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HoneycodeListTableRowsRequest
 */
export interface HoneycodeListTableRowsRequest {
  /**
   * @schema HoneycodeListTableRowsRequest#workbookId
   */
  readonly workbookId: string;

  /**
   * @schema HoneycodeListTableRowsRequest#tableId
   */
  readonly tableId: string;

  /**
   * @schema HoneycodeListTableRowsRequest#rowIds
   */
  readonly rowIds?: string[];

  /**
   * @schema HoneycodeListTableRowsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema HoneycodeListTableRowsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'HoneycodeListTableRowsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HoneycodeListTableRowsRequest(obj: HoneycodeListTableRowsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'workbookId': obj.workbookId,
    'tableId': obj.tableId,
    'rowIds': obj.rowIds?.map(y => y),
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HoneycodeListTableRowsResult
 */
export interface HoneycodeListTableRowsResult {
  /**
   * @schema HoneycodeListTableRowsResult#columnIds
   */
  readonly columnIds: string[];

  /**
   * @schema HoneycodeListTableRowsResult#rows
   */
  readonly rows: HoneycodeTableRow[];

  /**
   * @schema HoneycodeListTableRowsResult#rowIdsNotFound
   */
  readonly rowIdsNotFound?: string[];

  /**
   * @schema HoneycodeListTableRowsResult#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema HoneycodeListTableRowsResult#workbookCursor
   */
  readonly workbookCursor: number;

}

/**
 * Converts an object of type 'HoneycodeListTableRowsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HoneycodeListTableRowsResult(obj: HoneycodeListTableRowsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'columnIds': obj.columnIds?.map(y => y),
    'rows': obj.rows?.map(y => toJson_HoneycodeTableRow(y)),
    'rowIdsNotFound': obj.rowIdsNotFound?.map(y => y),
    'nextToken': obj.nextToken,
    'workbookCursor': obj.workbookCursor,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HoneycodeListTablesRequest
 */
export interface HoneycodeListTablesRequest {
  /**
   * @schema HoneycodeListTablesRequest#workbookId
   */
  readonly workbookId: string;

  /**
   * @schema HoneycodeListTablesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema HoneycodeListTablesRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'HoneycodeListTablesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HoneycodeListTablesRequest(obj: HoneycodeListTablesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'workbookId': obj.workbookId,
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HoneycodeListTablesResult
 */
export interface HoneycodeListTablesResult {
  /**
   * @schema HoneycodeListTablesResult#tables
   */
  readonly tables: HoneycodeTable[];

  /**
   * @schema HoneycodeListTablesResult#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema HoneycodeListTablesResult#workbookCursor
   */
  readonly workbookCursor?: number;

}

/**
 * Converts an object of type 'HoneycodeListTablesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HoneycodeListTablesResult(obj: HoneycodeListTablesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tables': obj.tables?.map(y => toJson_HoneycodeTable(y)),
    'nextToken': obj.nextToken,
    'workbookCursor': obj.workbookCursor,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HoneycodeQueryTableRowsRequest
 */
export interface HoneycodeQueryTableRowsRequest {
  /**
   * @schema HoneycodeQueryTableRowsRequest#workbookId
   */
  readonly workbookId: string;

  /**
   * @schema HoneycodeQueryTableRowsRequest#tableId
   */
  readonly tableId: string;

  /**
   * @schema HoneycodeQueryTableRowsRequest#filterFormula
   */
  readonly filterFormula: HoneycodeFilter;

  /**
   * @schema HoneycodeQueryTableRowsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema HoneycodeQueryTableRowsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'HoneycodeQueryTableRowsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HoneycodeQueryTableRowsRequest(obj: HoneycodeQueryTableRowsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'workbookId': obj.workbookId,
    'tableId': obj.tableId,
    'filterFormula': toJson_HoneycodeFilter(obj.filterFormula),
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HoneycodeQueryTableRowsResult
 */
export interface HoneycodeQueryTableRowsResult {
  /**
   * @schema HoneycodeQueryTableRowsResult#columnIds
   */
  readonly columnIds: string[];

  /**
   * @schema HoneycodeQueryTableRowsResult#rows
   */
  readonly rows: HoneycodeTableRow[];

  /**
   * @schema HoneycodeQueryTableRowsResult#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema HoneycodeQueryTableRowsResult#workbookCursor
   */
  readonly workbookCursor: number;

}

/**
 * Converts an object of type 'HoneycodeQueryTableRowsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HoneycodeQueryTableRowsResult(obj: HoneycodeQueryTableRowsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'columnIds': obj.columnIds?.map(y => y),
    'rows': obj.rows?.map(y => toJson_HoneycodeTableRow(y)),
    'nextToken': obj.nextToken,
    'workbookCursor': obj.workbookCursor,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HoneycodeStartTableDataImportJobRequest
 */
export interface HoneycodeStartTableDataImportJobRequest {
  /**
   * @schema HoneycodeStartTableDataImportJobRequest#workbookId
   */
  readonly workbookId: string;

  /**
   * @schema HoneycodeStartTableDataImportJobRequest#dataSource
   */
  readonly dataSource: HoneycodeImportDataSource;

  /**
   * @schema HoneycodeStartTableDataImportJobRequest#dataFormat
   */
  readonly dataFormat: string;

  /**
   * @schema HoneycodeStartTableDataImportJobRequest#destinationTableId
   */
  readonly destinationTableId: string;

  /**
   * @schema HoneycodeStartTableDataImportJobRequest#importOptions
   */
  readonly importOptions: HoneycodeImportOptions;

  /**
   * @schema HoneycodeStartTableDataImportJobRequest#clientRequestToken
   */
  readonly clientRequestToken: string;

}

/**
 * Converts an object of type 'HoneycodeStartTableDataImportJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HoneycodeStartTableDataImportJobRequest(obj: HoneycodeStartTableDataImportJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'workbookId': obj.workbookId,
    'dataSource': toJson_HoneycodeImportDataSource(obj.dataSource),
    'dataFormat': obj.dataFormat,
    'destinationTableId': obj.destinationTableId,
    'importOptions': toJson_HoneycodeImportOptions(obj.importOptions),
    'clientRequestToken': obj.clientRequestToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HoneycodeStartTableDataImportJobResult
 */
export interface HoneycodeStartTableDataImportJobResult {
  /**
   * @schema HoneycodeStartTableDataImportJobResult#jobId
   */
  readonly jobId: string;

  /**
   * @schema HoneycodeStartTableDataImportJobResult#jobStatus
   */
  readonly jobStatus: string;

}

/**
 * Converts an object of type 'HoneycodeStartTableDataImportJobResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HoneycodeStartTableDataImportJobResult(obj: HoneycodeStartTableDataImportJobResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobId': obj.jobId,
    'jobStatus': obj.jobStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HoneycodeCreateRowData
 */
export interface HoneycodeCreateRowData {
  /**
   * @schema HoneycodeCreateRowData#batchItemId
   */
  readonly batchItemId: string;

  /**
   * @schema HoneycodeCreateRowData#cellsToCreate
   */
  readonly cellsToCreate: { [key: string]: HoneycodeCellInput };

}

/**
 * Converts an object of type 'HoneycodeCreateRowData' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HoneycodeCreateRowData(obj: HoneycodeCreateRowData | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'batchItemId': obj.batchItemId,
    'cellsToCreate': ((obj.cellsToCreate) === undefined) ? undefined : (Object.entries(obj.cellsToCreate).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_HoneycodeCellInput(i[1]) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HoneycodeFailedBatchItem
 */
export interface HoneycodeFailedBatchItem {
  /**
   * @schema HoneycodeFailedBatchItem#id
   */
  readonly id: string;

  /**
   * @schema HoneycodeFailedBatchItem#errorMessage
   */
  readonly errorMessage: string;

}

/**
 * Converts an object of type 'HoneycodeFailedBatchItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HoneycodeFailedBatchItem(obj: HoneycodeFailedBatchItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'errorMessage': obj.errorMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HoneycodeUpdateRowData
 */
export interface HoneycodeUpdateRowData {
  /**
   * @schema HoneycodeUpdateRowData#rowId
   */
  readonly rowId: string;

  /**
   * @schema HoneycodeUpdateRowData#cellsToUpdate
   */
  readonly cellsToUpdate: { [key: string]: HoneycodeCellInput };

}

/**
 * Converts an object of type 'HoneycodeUpdateRowData' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HoneycodeUpdateRowData(obj: HoneycodeUpdateRowData | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'rowId': obj.rowId,
    'cellsToUpdate': ((obj.cellsToUpdate) === undefined) ? undefined : (Object.entries(obj.cellsToUpdate).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_HoneycodeCellInput(i[1]) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HoneycodeUpsertRowData
 */
export interface HoneycodeUpsertRowData {
  /**
   * @schema HoneycodeUpsertRowData#batchItemId
   */
  readonly batchItemId: string;

  /**
   * @schema HoneycodeUpsertRowData#filter
   */
  readonly filter: HoneycodeFilter;

  /**
   * @schema HoneycodeUpsertRowData#cellsToUpdate
   */
  readonly cellsToUpdate: { [key: string]: HoneycodeCellInput };

}

/**
 * Converts an object of type 'HoneycodeUpsertRowData' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HoneycodeUpsertRowData(obj: HoneycodeUpsertRowData | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'batchItemId': obj.batchItemId,
    'filter': toJson_HoneycodeFilter(obj.filter),
    'cellsToUpdate': ((obj.cellsToUpdate) === undefined) ? undefined : (Object.entries(obj.cellsToUpdate).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_HoneycodeCellInput(i[1]) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HoneycodeUpsertRowsResult
 */
export interface HoneycodeUpsertRowsResult {
  /**
   * @schema HoneycodeUpsertRowsResult#rowIds
   */
  readonly rowIds: string[];

  /**
   * @schema HoneycodeUpsertRowsResult#upsertAction
   */
  readonly upsertAction: string;

}

/**
 * Converts an object of type 'HoneycodeUpsertRowsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HoneycodeUpsertRowsResult(obj: HoneycodeUpsertRowsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'rowIds': obj.rowIds?.map(y => y),
    'upsertAction': obj.upsertAction,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HoneycodeTableDataImportJobMetadata
 */
export interface HoneycodeTableDataImportJobMetadata {
  /**
   * @schema HoneycodeTableDataImportJobMetadata#submitter
   */
  readonly submitter: HoneycodeImportJobSubmitter;

  /**
   * @schema HoneycodeTableDataImportJobMetadata#submitTime
   */
  readonly submitTime: string;

  /**
   * @schema HoneycodeTableDataImportJobMetadata#importOptions
   */
  readonly importOptions: HoneycodeImportOptions;

  /**
   * @schema HoneycodeTableDataImportJobMetadata#dataSource
   */
  readonly dataSource: HoneycodeImportDataSource;

}

/**
 * Converts an object of type 'HoneycodeTableDataImportJobMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HoneycodeTableDataImportJobMetadata(obj: HoneycodeTableDataImportJobMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'submitter': toJson_HoneycodeImportJobSubmitter(obj.submitter),
    'submitTime': obj.submitTime,
    'importOptions': toJson_HoneycodeImportOptions(obj.importOptions),
    'dataSource': toJson_HoneycodeImportDataSource(obj.dataSource),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HoneycodeVariableValue
 */
export interface HoneycodeVariableValue {
  /**
   * @schema HoneycodeVariableValue#rawValue
   */
  readonly rawValue: string;

}

/**
 * Converts an object of type 'HoneycodeVariableValue' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HoneycodeVariableValue(obj: HoneycodeVariableValue | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'rawValue': obj.rawValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HoneycodeResultSet
 */
export interface HoneycodeResultSet {
  /**
   * @schema HoneycodeResultSet#headers
   */
  readonly headers: HoneycodeColumnMetadata[];

  /**
   * @schema HoneycodeResultSet#rows
   */
  readonly rows: HoneycodeResultRow[];

}

/**
 * Converts an object of type 'HoneycodeResultSet' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HoneycodeResultSet(obj: HoneycodeResultSet | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'headers': obj.headers?.map(y => toJson_HoneycodeColumnMetadata(y)),
    'rows': obj.rows?.map(y => toJson_HoneycodeResultRow(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HoneycodeTableColumn
 */
export interface HoneycodeTableColumn {
  /**
   * @schema HoneycodeTableColumn#tableColumnId
   */
  readonly tableColumnId?: string;

  /**
   * @schema HoneycodeTableColumn#tableColumnName
   */
  readonly tableColumnName?: string;

  /**
   * @schema HoneycodeTableColumn#format
   */
  readonly format?: string;

}

/**
 * Converts an object of type 'HoneycodeTableColumn' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HoneycodeTableColumn(obj: HoneycodeTableColumn | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tableColumnId': obj.tableColumnId,
    'tableColumnName': obj.tableColumnName,
    'format': obj.format,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HoneycodeTableRow
 */
export interface HoneycodeTableRow {
  /**
   * @schema HoneycodeTableRow#rowId
   */
  readonly rowId: string;

  /**
   * @schema HoneycodeTableRow#cells
   */
  readonly cells: HoneycodeCell[];

}

/**
 * Converts an object of type 'HoneycodeTableRow' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HoneycodeTableRow(obj: HoneycodeTableRow | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'rowId': obj.rowId,
    'cells': obj.cells?.map(y => toJson_HoneycodeCell(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HoneycodeTable
 */
export interface HoneycodeTable {
  /**
   * @schema HoneycodeTable#tableId
   */
  readonly tableId?: string;

  /**
   * @schema HoneycodeTable#tableName
   */
  readonly tableName?: string;

}

/**
 * Converts an object of type 'HoneycodeTable' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HoneycodeTable(obj: HoneycodeTable | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tableId': obj.tableId,
    'tableName': obj.tableName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HoneycodeFilter
 */
export interface HoneycodeFilter {
  /**
   * @schema HoneycodeFilter#formula
   */
  readonly formula: string;

  /**
   * @schema HoneycodeFilter#contextRowId
   */
  readonly contextRowId?: string;

}

/**
 * Converts an object of type 'HoneycodeFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HoneycodeFilter(obj: HoneycodeFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'formula': obj.formula,
    'contextRowId': obj.contextRowId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HoneycodeImportDataSource
 */
export interface HoneycodeImportDataSource {
  /**
   * @schema HoneycodeImportDataSource#dataSourceConfig
   */
  readonly dataSourceConfig: HoneycodeImportDataSourceConfig;

}

/**
 * Converts an object of type 'HoneycodeImportDataSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HoneycodeImportDataSource(obj: HoneycodeImportDataSource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'dataSourceConfig': toJson_HoneycodeImportDataSourceConfig(obj.dataSourceConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HoneycodeImportOptions
 */
export interface HoneycodeImportOptions {
  /**
   * @schema HoneycodeImportOptions#destinationOptions
   */
  readonly destinationOptions?: HoneycodeDestinationOptions;

  /**
   * @schema HoneycodeImportOptions#delimitedTextOptions
   */
  readonly delimitedTextOptions?: HoneycodeDelimitedTextImportOptions;

}

/**
 * Converts an object of type 'HoneycodeImportOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HoneycodeImportOptions(obj: HoneycodeImportOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'destinationOptions': toJson_HoneycodeDestinationOptions(obj.destinationOptions),
    'delimitedTextOptions': toJson_HoneycodeDelimitedTextImportOptions(obj.delimitedTextOptions),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HoneycodeCellInput
 */
export interface HoneycodeCellInput {
  /**
   * @schema HoneycodeCellInput#fact
   */
  readonly fact?: string;

}

/**
 * Converts an object of type 'HoneycodeCellInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HoneycodeCellInput(obj: HoneycodeCellInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'fact': obj.fact,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HoneycodeImportJobSubmitter
 */
export interface HoneycodeImportJobSubmitter {
  /**
   * @schema HoneycodeImportJobSubmitter#email
   */
  readonly email?: string;

  /**
   * @schema HoneycodeImportJobSubmitter#userArn
   */
  readonly userArn?: string;

}

/**
 * Converts an object of type 'HoneycodeImportJobSubmitter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HoneycodeImportJobSubmitter(obj: HoneycodeImportJobSubmitter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'email': obj.email,
    'userArn': obj.userArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HoneycodeColumnMetadata
 */
export interface HoneycodeColumnMetadata {
  /**
   * @schema HoneycodeColumnMetadata#name
   */
  readonly name: string;

  /**
   * @schema HoneycodeColumnMetadata#format
   */
  readonly format: string;

}

/**
 * Converts an object of type 'HoneycodeColumnMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HoneycodeColumnMetadata(obj: HoneycodeColumnMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'format': obj.format,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HoneycodeResultRow
 */
export interface HoneycodeResultRow {
  /**
   * @schema HoneycodeResultRow#rowId
   */
  readonly rowId?: string;

  /**
   * @schema HoneycodeResultRow#dataItems
   */
  readonly dataItems: HoneycodeDataItem[];

}

/**
 * Converts an object of type 'HoneycodeResultRow' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HoneycodeResultRow(obj: HoneycodeResultRow | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'rowId': obj.rowId,
    'dataItems': obj.dataItems?.map(y => toJson_HoneycodeDataItem(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HoneycodeCell
 */
export interface HoneycodeCell {
  /**
   * @schema HoneycodeCell#formula
   */
  readonly formula?: string;

  /**
   * @schema HoneycodeCell#format
   */
  readonly format?: string;

  /**
   * @schema HoneycodeCell#rawValue
   */
  readonly rawValue?: string;

  /**
   * @schema HoneycodeCell#formattedValue
   */
  readonly formattedValue?: string;

}

/**
 * Converts an object of type 'HoneycodeCell' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HoneycodeCell(obj: HoneycodeCell | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'formula': obj.formula,
    'format': obj.format,
    'rawValue': obj.rawValue,
    'formattedValue': obj.formattedValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HoneycodeImportDataSourceConfig
 */
export interface HoneycodeImportDataSourceConfig {
  /**
   * @schema HoneycodeImportDataSourceConfig#dataSourceUrl
   */
  readonly dataSourceUrl?: string;

}

/**
 * Converts an object of type 'HoneycodeImportDataSourceConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HoneycodeImportDataSourceConfig(obj: HoneycodeImportDataSourceConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'dataSourceUrl': obj.dataSourceUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HoneycodeDestinationOptions
 */
export interface HoneycodeDestinationOptions {
  /**
   * @schema HoneycodeDestinationOptions#columnMap
   */
  readonly columnMap?: { [key: string]: HoneycodeSourceDataColumnProperties };

}

/**
 * Converts an object of type 'HoneycodeDestinationOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HoneycodeDestinationOptions(obj: HoneycodeDestinationOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'columnMap': ((obj.columnMap) === undefined) ? undefined : (Object.entries(obj.columnMap).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_HoneycodeSourceDataColumnProperties(i[1]) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HoneycodeDelimitedTextImportOptions
 */
export interface HoneycodeDelimitedTextImportOptions {
  /**
   * @schema HoneycodeDelimitedTextImportOptions#delimiter
   */
  readonly delimiter: string;

  /**
   * @schema HoneycodeDelimitedTextImportOptions#hasHeaderRow
   */
  readonly hasHeaderRow?: boolean;

  /**
   * @schema HoneycodeDelimitedTextImportOptions#ignoreEmptyRows
   */
  readonly ignoreEmptyRows?: boolean;

  /**
   * @schema HoneycodeDelimitedTextImportOptions#dataCharacterEncoding
   */
  readonly dataCharacterEncoding?: string;

}

/**
 * Converts an object of type 'HoneycodeDelimitedTextImportOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HoneycodeDelimitedTextImportOptions(obj: HoneycodeDelimitedTextImportOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'delimiter': obj.delimiter,
    'hasHeaderRow': obj.hasHeaderRow,
    'ignoreEmptyRows': obj.ignoreEmptyRows,
    'dataCharacterEncoding': obj.dataCharacterEncoding,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HoneycodeDataItem
 */
export interface HoneycodeDataItem {
  /**
   * @schema HoneycodeDataItem#overrideFormat
   */
  readonly overrideFormat?: string;

  /**
   * @schema HoneycodeDataItem#rawValue
   */
  readonly rawValue?: string;

  /**
   * @schema HoneycodeDataItem#formattedValue
   */
  readonly formattedValue?: string;

}

/**
 * Converts an object of type 'HoneycodeDataItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HoneycodeDataItem(obj: HoneycodeDataItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'overrideFormat': obj.overrideFormat,
    'rawValue': obj.rawValue,
    'formattedValue': obj.formattedValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HoneycodeSourceDataColumnProperties
 */
export interface HoneycodeSourceDataColumnProperties {
  /**
   * @schema HoneycodeSourceDataColumnProperties#columnIndex
   */
  readonly columnIndex?: number;

}

/**
 * Converts an object of type 'HoneycodeSourceDataColumnProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HoneycodeSourceDataColumnProperties(obj: HoneycodeSourceDataColumnProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'columnIndex': obj.columnIndex,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
