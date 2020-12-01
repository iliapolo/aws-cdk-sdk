/**
 * @schema CancelQueryRequest
 */
export interface CancelQueryRequest {
  /**
   * @schema CancelQueryRequest#QueryId
   */
  readonly queryId: string;

}

/**
 * @schema CancelQueryResponse
 */
export interface CancelQueryResponse {
  /**
   * @schema CancelQueryResponse#CancellationMessage
   */
  readonly cancellationMessage?: string;

}

/**
 * @schema DescribeEndpointsRequest
 */
export interface DescribeEndpointsRequest {
}

/**
 * @schema DescribeEndpointsResponse
 */
export interface DescribeEndpointsResponse {
  /**
   * @schema DescribeEndpointsResponse#Endpoints
   */
  readonly endpoints: Endpoint[];

}

/**
 * @schema QueryRequest
 */
export interface QueryRequest {
  /**
   * @schema QueryRequest#QueryString
   */
  readonly queryString: string;

  /**
   * @schema QueryRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema QueryRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema QueryRequest#MaxRows
   */
  readonly maxRows?: number;

}

/**
 * @schema QueryResponse
 */
export interface QueryResponse {
  /**
   * @schema QueryResponse#QueryId
   */
  readonly queryId: string;

  /**
   * @schema QueryResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema QueryResponse#Rows
   */
  readonly rows: Row[];

  /**
   * @schema QueryResponse#ColumnInfo
   */
  readonly columnInfo: ColumnInfo[];

  /**
   * @schema QueryResponse#QueryStatus
   */
  readonly queryStatus?: QueryStatus;

}

/**
 * @schema Endpoint
 */
export interface Endpoint {
  /**
   * @schema Endpoint#Address
   */
  readonly address: string;

  /**
   * @schema Endpoint#CachePeriodInMinutes
   */
  readonly cachePeriodInMinutes: number;

}

/**
 * @schema Row
 */
export interface Row {
  /**
   * @schema Row#Data
   */
  readonly data: Datum[];

}

/**
 * @schema ColumnInfo
 */
export interface ColumnInfo {
  /**
   * @schema ColumnInfo#Name
   */
  readonly name?: string;

  /**
   * @schema ColumnInfo#Type
   */
  readonly type: Type;

}

/**
 * @schema QueryStatus
 */
export interface QueryStatus {
  /**
   * @schema QueryStatus#ProgressPercentage
   */
  readonly progressPercentage?: number;

  /**
   * @schema QueryStatus#CumulativeBytesScanned
   */
  readonly cumulativeBytesScanned?: number;

  /**
   * @schema QueryStatus#CumulativeBytesMetered
   */
  readonly cumulativeBytesMetered?: number;

}

/**
 * @schema Datum
 */
export interface Datum {
  /**
   * @schema Datum#ScalarValue
   */
  readonly scalarValue?: string;

  /**
   * @schema Datum#TimeSeriesValue
   */
  readonly timeSeriesValue?: TimeSeriesDataPoint[];

  /**
   * @schema Datum#ArrayValue
   */
  readonly arrayValue?: Datum[];

  /**
   * @schema Datum#RowValue
   */
  readonly rowValue?: Row;

  /**
   * @schema Datum#NullValue
   */
  readonly nullValue?: boolean;

}

/**
 * @schema Type
 */
export interface Type {
  /**
   * @schema Type#ScalarType
   */
  readonly scalarType?: string;

  /**
   * @schema Type#ArrayColumnInfo
   */
  readonly arrayColumnInfo?: ColumnInfo;

  /**
   * @schema Type#TimeSeriesMeasureValueColumnInfo
   */
  readonly timeSeriesMeasureValueColumnInfo?: ColumnInfo;

  /**
   * @schema Type#RowColumnInfo
   */
  readonly rowColumnInfo?: ColumnInfo[];

}

/**
 * @schema TimeSeriesDataPoint
 */
export interface TimeSeriesDataPoint {
  /**
   * @schema TimeSeriesDataPoint#Time
   */
  readonly time: string;

  /**
   * @schema TimeSeriesDataPoint#Value
   */
  readonly value: Datum;

}
