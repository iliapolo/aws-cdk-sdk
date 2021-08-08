/**
 * @schema PiDescribeDimensionKeysRequest
 */
export interface PiDescribeDimensionKeysRequest {
  /**
   * @schema PiDescribeDimensionKeysRequest#ServiceType
   */
  readonly serviceType?: string;

  /**
   * @schema PiDescribeDimensionKeysRequest#Identifier
   */
  readonly identifier?: string;

  /**
   * @schema PiDescribeDimensionKeysRequest#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema PiDescribeDimensionKeysRequest#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema PiDescribeDimensionKeysRequest#Metric
   */
  readonly metric?: string;

  /**
   * @schema PiDescribeDimensionKeysRequest#PeriodInSeconds
   */
  readonly periodInSeconds?: number;

  /**
   * @schema PiDescribeDimensionKeysRequest#GroupBy
   */
  readonly groupBy?: PiDimensionGroup;

  /**
   * @schema PiDescribeDimensionKeysRequest#PartitionBy
   */
  readonly partitionBy?: PiDimensionGroup;

  /**
   * @schema PiDescribeDimensionKeysRequest#Filter
   */
  readonly filter?: { [key: string]: string };

  /**
   * @schema PiDescribeDimensionKeysRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema PiDescribeDimensionKeysRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'PiDescribeDimensionKeysRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PiDescribeDimensionKeysRequest(obj: PiDescribeDimensionKeysRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceType': obj.serviceType,
    'Identifier': obj.identifier,
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
    'Metric': obj.metric,
    'PeriodInSeconds': obj.periodInSeconds,
    'GroupBy': toJson_PiDimensionGroup(obj.groupBy),
    'PartitionBy': toJson_PiDimensionGroup(obj.partitionBy),
    'Filter': ((obj.filter) === undefined) ? undefined : (Object.entries(obj.filter).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PiDescribeDimensionKeysResponse
 */
export interface PiDescribeDimensionKeysResponse {
  /**
   * @schema PiDescribeDimensionKeysResponse#AlignedStartTime
   */
  readonly alignedStartTime?: string;

  /**
   * @schema PiDescribeDimensionKeysResponse#AlignedEndTime
   */
  readonly alignedEndTime?: string;

  /**
   * @schema PiDescribeDimensionKeysResponse#PartitionKeys
   */
  readonly partitionKeys?: PiResponsePartitionKey[];

  /**
   * @schema PiDescribeDimensionKeysResponse#Keys
   */
  readonly keys?: PiDimensionKeyDescription[];

  /**
   * @schema PiDescribeDimensionKeysResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'PiDescribeDimensionKeysResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PiDescribeDimensionKeysResponse(obj: PiDescribeDimensionKeysResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AlignedStartTime': obj.alignedStartTime,
    'AlignedEndTime': obj.alignedEndTime,
    'PartitionKeys': obj.partitionKeys?.map(y => toJson_PiResponsePartitionKey(y)),
    'Keys': obj.keys?.map(y => toJson_PiDimensionKeyDescription(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PiGetDimensionKeyDetailsRequest
 */
export interface PiGetDimensionKeyDetailsRequest {
  /**
   * @schema PiGetDimensionKeyDetailsRequest#ServiceType
   */
  readonly serviceType?: string;

  /**
   * @schema PiGetDimensionKeyDetailsRequest#Identifier
   */
  readonly identifier?: string;

  /**
   * @schema PiGetDimensionKeyDetailsRequest#Group
   */
  readonly group?: string;

  /**
   * @schema PiGetDimensionKeyDetailsRequest#GroupIdentifier
   */
  readonly groupIdentifier?: string;

  /**
   * @schema PiGetDimensionKeyDetailsRequest#RequestedDimensions
   */
  readonly requestedDimensions?: string[];

}

/**
 * Converts an object of type 'PiGetDimensionKeyDetailsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PiGetDimensionKeyDetailsRequest(obj: PiGetDimensionKeyDetailsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceType': obj.serviceType,
    'Identifier': obj.identifier,
    'Group': obj.group,
    'GroupIdentifier': obj.groupIdentifier,
    'RequestedDimensions': obj.requestedDimensions?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PiGetDimensionKeyDetailsResponse
 */
export interface PiGetDimensionKeyDetailsResponse {
  /**
   * @schema PiGetDimensionKeyDetailsResponse#Dimensions
   */
  readonly dimensions?: PiDimensionKeyDetail[];

}

/**
 * Converts an object of type 'PiGetDimensionKeyDetailsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PiGetDimensionKeyDetailsResponse(obj: PiGetDimensionKeyDetailsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Dimensions': obj.dimensions?.map(y => toJson_PiDimensionKeyDetail(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PiGetResourceMetricsRequest
 */
export interface PiGetResourceMetricsRequest {
  /**
   * @schema PiGetResourceMetricsRequest#ServiceType
   */
  readonly serviceType?: string;

  /**
   * @schema PiGetResourceMetricsRequest#Identifier
   */
  readonly identifier?: string;

  /**
   * @schema PiGetResourceMetricsRequest#MetricQueries
   */
  readonly metricQueries?: PiMetricQuery[];

  /**
   * @schema PiGetResourceMetricsRequest#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema PiGetResourceMetricsRequest#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema PiGetResourceMetricsRequest#PeriodInSeconds
   */
  readonly periodInSeconds?: number;

  /**
   * @schema PiGetResourceMetricsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema PiGetResourceMetricsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'PiGetResourceMetricsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PiGetResourceMetricsRequest(obj: PiGetResourceMetricsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceType': obj.serviceType,
    'Identifier': obj.identifier,
    'MetricQueries': obj.metricQueries?.map(y => toJson_PiMetricQuery(y)),
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
    'PeriodInSeconds': obj.periodInSeconds,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PiGetResourceMetricsResponse
 */
export interface PiGetResourceMetricsResponse {
  /**
   * @schema PiGetResourceMetricsResponse#AlignedStartTime
   */
  readonly alignedStartTime?: string;

  /**
   * @schema PiGetResourceMetricsResponse#AlignedEndTime
   */
  readonly alignedEndTime?: string;

  /**
   * @schema PiGetResourceMetricsResponse#Identifier
   */
  readonly identifier?: string;

  /**
   * @schema PiGetResourceMetricsResponse#MetricList
   */
  readonly metricList?: PiMetricKeyDataPoints[];

  /**
   * @schema PiGetResourceMetricsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'PiGetResourceMetricsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PiGetResourceMetricsResponse(obj: PiGetResourceMetricsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AlignedStartTime': obj.alignedStartTime,
    'AlignedEndTime': obj.alignedEndTime,
    'Identifier': obj.identifier,
    'MetricList': obj.metricList?.map(y => toJson_PiMetricKeyDataPoints(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PiDimensionGroup
 */
export interface PiDimensionGroup {
  /**
   * @schema PiDimensionGroup#Group
   */
  readonly group?: string;

  /**
   * @schema PiDimensionGroup#Dimensions
   */
  readonly dimensions?: string[];

  /**
   * @schema PiDimensionGroup#Limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'PiDimensionGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PiDimensionGroup(obj: PiDimensionGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Group': obj.group,
    'Dimensions': obj.dimensions?.map(y => y),
    'Limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PiResponsePartitionKey
 */
export interface PiResponsePartitionKey {
  /**
   * @schema PiResponsePartitionKey#Dimensions
   */
  readonly dimensions?: { [key: string]: string };

}

/**
 * Converts an object of type 'PiResponsePartitionKey' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PiResponsePartitionKey(obj: PiResponsePartitionKey | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Dimensions': ((obj.dimensions) === undefined) ? undefined : (Object.entries(obj.dimensions).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PiDimensionKeyDescription
 */
export interface PiDimensionKeyDescription {
  /**
   * @schema PiDimensionKeyDescription#Dimensions
   */
  readonly dimensions?: { [key: string]: string };

  /**
   * @schema PiDimensionKeyDescription#Total
   */
  readonly total?: number;

  /**
   * @schema PiDimensionKeyDescription#Partitions
   */
  readonly partitions?: number[];

}

/**
 * Converts an object of type 'PiDimensionKeyDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PiDimensionKeyDescription(obj: PiDimensionKeyDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Dimensions': ((obj.dimensions) === undefined) ? undefined : (Object.entries(obj.dimensions).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Total': obj.total,
    'Partitions': obj.partitions?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PiDimensionKeyDetail
 */
export interface PiDimensionKeyDetail {
  /**
   * @schema PiDimensionKeyDetail#Value
   */
  readonly value?: string;

  /**
   * @schema PiDimensionKeyDetail#Dimension
   */
  readonly dimension?: string;

  /**
   * @schema PiDimensionKeyDetail#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'PiDimensionKeyDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PiDimensionKeyDetail(obj: PiDimensionKeyDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Value': obj.value,
    'Dimension': obj.dimension,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PiMetricQuery
 */
export interface PiMetricQuery {
  /**
   * @schema PiMetricQuery#Metric
   */
  readonly metric?: string;

  /**
   * @schema PiMetricQuery#GroupBy
   */
  readonly groupBy?: PiDimensionGroup;

  /**
   * @schema PiMetricQuery#Filter
   */
  readonly filter?: { [key: string]: string };

}

/**
 * Converts an object of type 'PiMetricQuery' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PiMetricQuery(obj: PiMetricQuery | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Metric': obj.metric,
    'GroupBy': toJson_PiDimensionGroup(obj.groupBy),
    'Filter': ((obj.filter) === undefined) ? undefined : (Object.entries(obj.filter).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PiMetricKeyDataPoints
 */
export interface PiMetricKeyDataPoints {
  /**
   * @schema PiMetricKeyDataPoints#Key
   */
  readonly key?: PiResponseResourceMetricKey;

  /**
   * @schema PiMetricKeyDataPoints#DataPoints
   */
  readonly dataPoints?: PiDataPoint[];

}

/**
 * Converts an object of type 'PiMetricKeyDataPoints' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PiMetricKeyDataPoints(obj: PiMetricKeyDataPoints | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': toJson_PiResponseResourceMetricKey(obj.key),
    'DataPoints': obj.dataPoints?.map(y => toJson_PiDataPoint(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PiResponseResourceMetricKey
 */
export interface PiResponseResourceMetricKey {
  /**
   * @schema PiResponseResourceMetricKey#Metric
   */
  readonly metric?: string;

  /**
   * @schema PiResponseResourceMetricKey#Dimensions
   */
  readonly dimensions?: { [key: string]: string };

}

/**
 * Converts an object of type 'PiResponseResourceMetricKey' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PiResponseResourceMetricKey(obj: PiResponseResourceMetricKey | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Metric': obj.metric,
    'Dimensions': ((obj.dimensions) === undefined) ? undefined : (Object.entries(obj.dimensions).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PiDataPoint
 */
export interface PiDataPoint {
  /**
   * @schema PiDataPoint#Timestamp
   */
  readonly timestamp?: string;

  /**
   * @schema PiDataPoint#Value
   */
  readonly value?: number;

}

/**
 * Converts an object of type 'PiDataPoint' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PiDataPoint(obj: PiDataPoint | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Timestamp': obj.timestamp,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
