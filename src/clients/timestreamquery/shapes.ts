/**
 * @schema TimestreamQueryCancelQueryRequest
 */
export interface TimestreamQueryCancelQueryRequest {
  /**
   * @schema TimestreamQueryCancelQueryRequest#QueryId
   */
  readonly queryId: string;

}

/**
 * @schema TimestreamQueryCancelQueryResponse
 */
export interface TimestreamQueryCancelQueryResponse {
  /**
   * @schema TimestreamQueryCancelQueryResponse#CancellationMessage
   */
  readonly cancellationMessage?: string;

}

/**
 * @schema TimestreamQueryDescribeEndpointsRequest
 */
export interface TimestreamQueryDescribeEndpointsRequest {
}

/**
 * @schema TimestreamQueryDescribeEndpointsResponse
 */
export interface TimestreamQueryDescribeEndpointsResponse {
  /**
   * @schema TimestreamQueryDescribeEndpointsResponse#Endpoints
   */
  readonly endpoints: TimestreamQueryEndpoint[];

}

/**
 * @schema TimestreamQueryQueryRequest
 */
export interface TimestreamQueryQueryRequest {
  /**
   * @schema TimestreamQueryQueryRequest#QueryString
   */
  readonly queryString: string;

  /**
   * @schema TimestreamQueryQueryRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema TimestreamQueryQueryRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema TimestreamQueryQueryRequest#MaxRows
   */
  readonly maxRows?: number;

}

/**
 * @schema TimestreamQueryQueryResponse
 */
export interface TimestreamQueryQueryResponse {
  /**
   * @schema TimestreamQueryQueryResponse#QueryId
   */
  readonly queryId: string;

  /**
   * @schema TimestreamQueryQueryResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema TimestreamQueryQueryResponse#Rows
   */
  readonly rows: TimestreamQueryRow[];

  /**
   * @schema TimestreamQueryQueryResponse#ColumnInfo
   */
  readonly columnInfo: TimestreamQueryColumnInfo[];

  /**
   * @schema TimestreamQueryQueryResponse#QueryStatus
   */
  readonly queryStatus?: TimestreamQueryQueryStatus;

}

/**
 * @schema TimestreamQueryEndpoint
 */
export interface TimestreamQueryEndpoint {
  /**
   * @schema TimestreamQueryEndpoint#Address
   */
  readonly address: string;

  /**
   * @schema TimestreamQueryEndpoint#CachePeriodInMinutes
   */
  readonly cachePeriodInMinutes: number;

}

/**
 * @schema TimestreamQueryRow
 */
export interface TimestreamQueryRow {
  /**
   * @schema TimestreamQueryRow#Data
   */
  readonly data: TimestreamQueryDatum[];

}

/**
 * @schema TimestreamQueryColumnInfo
 */
export interface TimestreamQueryColumnInfo {
  /**
   * @schema TimestreamQueryColumnInfo#Name
   */
  readonly name?: string;

  /**
   * @schema TimestreamQueryColumnInfo#Type
   */
  readonly type: TimestreamQueryType;

}

/**
 * @schema TimestreamQueryQueryStatus
 */
export interface TimestreamQueryQueryStatus {
  /**
   * @schema TimestreamQueryQueryStatus#ProgressPercentage
   */
  readonly progressPercentage?: number;

  /**
   * @schema TimestreamQueryQueryStatus#CumulativeBytesScanned
   */
  readonly cumulativeBytesScanned?: number;

  /**
   * @schema TimestreamQueryQueryStatus#CumulativeBytesMetered
   */
  readonly cumulativeBytesMetered?: number;

}

/**
 * @schema TimestreamQueryDatum
 */
export interface TimestreamQueryDatum {
  /**
   * @schema TimestreamQueryDatum#ScalarValue
   */
  readonly scalarValue?: string;

  /**
   * @schema TimestreamQueryDatum#TimeSeriesValue
   */
  readonly timeSeriesValue?: TimestreamQueryTimeSeriesDataPoint[];

  /**
   * @schema TimestreamQueryDatum#ArrayValue
   */
  readonly arrayValue?: TimestreamQueryDatum[];

  /**
   * @schema TimestreamQueryDatum#RowValue
   */
  readonly rowValue?: TimestreamQueryRow;

  /**
   * @schema TimestreamQueryDatum#NullValue
   */
  readonly nullValue?: boolean;

}

/**
 * @schema TimestreamQueryType
 */
export interface TimestreamQueryType {
  /**
   * @schema TimestreamQueryType#ScalarType
   */
  readonly scalarType?: string;

  /**
   * @schema TimestreamQueryType#ArrayColumnInfo
   */
  readonly arrayColumnInfo?: TimestreamQueryColumnInfo;

  /**
   * @schema TimestreamQueryType#TimeSeriesMeasureValueColumnInfo
   */
  readonly timeSeriesMeasureValueColumnInfo?: TimestreamQueryColumnInfo;

  /**
   * @schema TimestreamQueryType#RowColumnInfo
   */
  readonly rowColumnInfo?: TimestreamQueryColumnInfo[];

}

/**
 * @schema TimestreamQueryTimeSeriesDataPoint
 */
export interface TimestreamQueryTimeSeriesDataPoint {
  /**
   * @schema TimestreamQueryTimeSeriesDataPoint#Time
   */
  readonly time: string;

  /**
   * @schema TimestreamQueryTimeSeriesDataPoint#Value
   */
  readonly value: TimestreamQueryDatum;

}
