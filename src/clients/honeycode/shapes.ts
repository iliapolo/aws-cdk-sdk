/**
 * @schema GetScreenDataRequest
 */
export interface GetScreenDataRequest {
  /**
   * @schema GetScreenDataRequest#workbookId
   */
  readonly workbookId: string;

  /**
   * @schema GetScreenDataRequest#appId
   */
  readonly appId: string;

  /**
   * @schema GetScreenDataRequest#screenId
   */
  readonly screenId: string;

  /**
   * @schema GetScreenDataRequest#variables
   */
  readonly variables?: { [key: string]: VariableValue };

  /**
   * @schema GetScreenDataRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GetScreenDataRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetScreenDataResult
 */
export interface GetScreenDataResult {
  /**
   * @schema GetScreenDataResult#results
   */
  readonly results: { [key: string]: ResultSet };

  /**
   * @schema GetScreenDataResult#workbookCursor
   */
  readonly workbookCursor: number;

  /**
   * @schema GetScreenDataResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema InvokeScreenAutomationRequest
 */
export interface InvokeScreenAutomationRequest {
  /**
   * @schema InvokeScreenAutomationRequest#workbookId
   */
  readonly workbookId: string;

  /**
   * @schema InvokeScreenAutomationRequest#appId
   */
  readonly appId: string;

  /**
   * @schema InvokeScreenAutomationRequest#screenId
   */
  readonly screenId: string;

  /**
   * @schema InvokeScreenAutomationRequest#screenAutomationId
   */
  readonly screenAutomationId: string;

  /**
   * @schema InvokeScreenAutomationRequest#variables
   */
  readonly variables?: { [key: string]: VariableValue };

  /**
   * @schema InvokeScreenAutomationRequest#rowId
   */
  readonly rowId?: string;

  /**
   * @schema InvokeScreenAutomationRequest#clientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * @schema InvokeScreenAutomationResult
 */
export interface InvokeScreenAutomationResult {
  /**
   * @schema InvokeScreenAutomationResult#workbookCursor
   */
  readonly workbookCursor: number;

}

/**
 * @schema VariableValue
 */
export interface VariableValue {
  /**
   * @schema VariableValue#rawValue
   */
  readonly rawValue: string;

}

/**
 * @schema ResultSet
 */
export interface ResultSet {
  /**
   * @schema ResultSet#headers
   */
  readonly headers: ColumnMetadata[];

  /**
   * @schema ResultSet#rows
   */
  readonly rows: ResultRow[];

}

/**
 * @schema ColumnMetadata
 */
export interface ColumnMetadata {
  /**
   * @schema ColumnMetadata#name
   */
  readonly name: string;

  /**
   * @schema ColumnMetadata#format
   */
  readonly format: string;

}

/**
 * @schema ResultRow
 */
export interface ResultRow {
  /**
   * @schema ResultRow#rowId
   */
  readonly rowId?: string;

  /**
   * @schema ResultRow#dataItems
   */
  readonly dataItems: DataItem[];

}

/**
 * @schema DataItem
 */
export interface DataItem {
  /**
   * @schema DataItem#overrideFormat
   */
  readonly overrideFormat?: string;

  /**
   * @schema DataItem#rawValue
   */
  readonly rawValue?: string;

  /**
   * @schema DataItem#formattedValue
   */
  readonly formattedValue?: string;

}
