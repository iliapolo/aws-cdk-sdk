/**
 * @schema TimestreamQueryCancelQueryRequest
 */
export interface TimestreamQueryCancelQueryRequest {
  /**
   * @schema TimestreamQueryCancelQueryRequest#QueryId
   */
  readonly queryId?: string;

}

/**
 * Converts an object of type 'TimestreamQueryCancelQueryRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TimestreamQueryCancelQueryRequest(obj: TimestreamQueryCancelQueryRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'QueryId': obj.queryId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'TimestreamQueryCancelQueryResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TimestreamQueryCancelQueryResponse(obj: TimestreamQueryCancelQueryResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CancellationMessage': obj.cancellationMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TimestreamQueryDescribeEndpointsRequest
 */
export interface TimestreamQueryDescribeEndpointsRequest {
}

/**
 * Converts an object of type 'TimestreamQueryDescribeEndpointsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TimestreamQueryDescribeEndpointsRequest(obj: TimestreamQueryDescribeEndpointsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TimestreamQueryDescribeEndpointsResponse
 */
export interface TimestreamQueryDescribeEndpointsResponse {
  /**
   * @schema TimestreamQueryDescribeEndpointsResponse#Endpoints
   */
  readonly endpoints?: TimestreamQueryEndpoint[];

}

/**
 * Converts an object of type 'TimestreamQueryDescribeEndpointsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TimestreamQueryDescribeEndpointsResponse(obj: TimestreamQueryDescribeEndpointsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Endpoints': obj.endpoints?.map(y => toJson_TimestreamQueryEndpoint(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TimestreamQueryQueryRequest
 */
export interface TimestreamQueryQueryRequest {
  /**
   * @schema TimestreamQueryQueryRequest#QueryString
   */
  readonly queryString?: string;

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
 * Converts an object of type 'TimestreamQueryQueryRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TimestreamQueryQueryRequest(obj: TimestreamQueryQueryRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'QueryString': obj.queryString,
    'ClientToken': obj.clientToken,
    'NextToken': obj.nextToken,
    'MaxRows': obj.maxRows,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TimestreamQueryQueryResponse
 */
export interface TimestreamQueryQueryResponse {
  /**
   * @schema TimestreamQueryQueryResponse#QueryId
   */
  readonly queryId?: string;

  /**
   * @schema TimestreamQueryQueryResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema TimestreamQueryQueryResponse#Rows
   */
  readonly rows?: TimestreamQueryRow[];

  /**
   * @schema TimestreamQueryQueryResponse#ColumnInfo
   */
  readonly columnInfo?: TimestreamQueryColumnInfo[];

  /**
   * @schema TimestreamQueryQueryResponse#QueryStatus
   */
  readonly queryStatus?: TimestreamQueryQueryStatus;

}

/**
 * Converts an object of type 'TimestreamQueryQueryResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TimestreamQueryQueryResponse(obj: TimestreamQueryQueryResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'QueryId': obj.queryId,
    'NextToken': obj.nextToken,
    'Rows': obj.rows?.map(y => toJson_TimestreamQueryRow(y)),
    'ColumnInfo': obj.columnInfo?.map(y => toJson_TimestreamQueryColumnInfo(y)),
    'QueryStatus': toJson_TimestreamQueryQueryStatus(obj.queryStatus),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TimestreamQueryEndpoint
 */
export interface TimestreamQueryEndpoint {
  /**
   * @schema TimestreamQueryEndpoint#Address
   */
  readonly address?: string;

  /**
   * @schema TimestreamQueryEndpoint#CachePeriodInMinutes
   */
  readonly cachePeriodInMinutes?: number;

}

/**
 * Converts an object of type 'TimestreamQueryEndpoint' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TimestreamQueryEndpoint(obj: TimestreamQueryEndpoint | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Address': obj.address,
    'CachePeriodInMinutes': obj.cachePeriodInMinutes,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TimestreamQueryRow
 */
export interface TimestreamQueryRow {
  /**
   * @schema TimestreamQueryRow#Data
   */
  readonly data?: TimestreamQueryDatum[];

}

/**
 * Converts an object of type 'TimestreamQueryRow' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TimestreamQueryRow(obj: TimestreamQueryRow | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Data': obj.data?.map(y => toJson_TimestreamQueryDatum(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly type?: TimestreamQueryType;

}

/**
 * Converts an object of type 'TimestreamQueryColumnInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TimestreamQueryColumnInfo(obj: TimestreamQueryColumnInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Type': toJson_TimestreamQueryType(obj.type),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'TimestreamQueryQueryStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TimestreamQueryQueryStatus(obj: TimestreamQueryQueryStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProgressPercentage': obj.progressPercentage,
    'CumulativeBytesScanned': obj.cumulativeBytesScanned,
    'CumulativeBytesMetered': obj.cumulativeBytesMetered,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'TimestreamQueryDatum' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TimestreamQueryDatum(obj: TimestreamQueryDatum | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ScalarValue': obj.scalarValue,
    'TimeSeriesValue': obj.timeSeriesValue?.map(y => toJson_TimestreamQueryTimeSeriesDataPoint(y)),
    'ArrayValue': obj.arrayValue?.map(y => toJson_TimestreamQueryDatum(y)),
    'RowValue': toJson_TimestreamQueryRow(obj.rowValue),
    'NullValue': obj.nullValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'TimestreamQueryType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TimestreamQueryType(obj: TimestreamQueryType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ScalarType': obj.scalarType,
    'ArrayColumnInfo': toJson_TimestreamQueryColumnInfo(obj.arrayColumnInfo),
    'TimeSeriesMeasureValueColumnInfo': toJson_TimestreamQueryColumnInfo(obj.timeSeriesMeasureValueColumnInfo),
    'RowColumnInfo': obj.rowColumnInfo?.map(y => toJson_TimestreamQueryColumnInfo(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TimestreamQueryTimeSeriesDataPoint
 */
export interface TimestreamQueryTimeSeriesDataPoint {
  /**
   * @schema TimestreamQueryTimeSeriesDataPoint#Time
   */
  readonly time?: string;

  /**
   * @schema TimestreamQueryTimeSeriesDataPoint#Value
   */
  readonly value?: TimestreamQueryDatum;

}

/**
 * Converts an object of type 'TimestreamQueryTimeSeriesDataPoint' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TimestreamQueryTimeSeriesDataPoint(obj: TimestreamQueryTimeSeriesDataPoint | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Time': obj.time,
    'Value': toJson_TimestreamQueryDatum(obj.value),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
