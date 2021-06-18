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
 * @schema HoneycodeInvokeScreenAutomationResult
 */
export interface HoneycodeInvokeScreenAutomationResult {
  /**
   * @schema HoneycodeInvokeScreenAutomationResult#workbookCursor
   */
  readonly workbookCursor: number;

}

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
