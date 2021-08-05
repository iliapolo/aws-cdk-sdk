/**
 * @schema PiDescribeDimensionKeysRequest
 */
export interface PiDescribeDimensionKeysRequest {
  /**
   * @schema PiDescribeDimensionKeysRequest#ServiceType
   */
  readonly serviceType: string;

  /**
   * @schema PiDescribeDimensionKeysRequest#Identifier
   */
  readonly identifier: string;

  /**
   * @schema PiDescribeDimensionKeysRequest#StartTime
   */
  readonly startTime: string;

  /**
   * @schema PiDescribeDimensionKeysRequest#EndTime
   */
  readonly endTime: string;

  /**
   * @schema PiDescribeDimensionKeysRequest#Metric
   */
  readonly metric: string;

  /**
   * @schema PiDescribeDimensionKeysRequest#PeriodInSeconds
   */
  readonly periodInSeconds?: number;

  /**
   * @schema PiDescribeDimensionKeysRequest#GroupBy
   */
  readonly groupBy: PiDimensionGroup;

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
 * @schema PiGetResourceMetricsRequest
 */
export interface PiGetResourceMetricsRequest {
  /**
   * @schema PiGetResourceMetricsRequest#ServiceType
   */
  readonly serviceType: string;

  /**
   * @schema PiGetResourceMetricsRequest#Identifier
   */
  readonly identifier: string;

  /**
   * @schema PiGetResourceMetricsRequest#MetricQueries
   */
  readonly metricQueries: PiMetricQuery[];

  /**
   * @schema PiGetResourceMetricsRequest#StartTime
   */
  readonly startTime: string;

  /**
   * @schema PiGetResourceMetricsRequest#EndTime
   */
  readonly endTime: string;

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
 * @schema PiDimensionGroup
 */
export interface PiDimensionGroup {
  /**
   * @schema PiDimensionGroup#Group
   */
  readonly group: string;

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
 * @schema PiResponsePartitionKey
 */
export interface PiResponsePartitionKey {
  /**
   * @schema PiResponsePartitionKey#Dimensions
   */
  readonly dimensions: { [key: string]: string };

}

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
 * @schema PiMetricQuery
 */
export interface PiMetricQuery {
  /**
   * @schema PiMetricQuery#Metric
   */
  readonly metric: string;

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
 * @schema PiResponseResourceMetricKey
 */
export interface PiResponseResourceMetricKey {
  /**
   * @schema PiResponseResourceMetricKey#Metric
   */
  readonly metric: string;

  /**
   * @schema PiResponseResourceMetricKey#Dimensions
   */
  readonly dimensions?: { [key: string]: string };

}

/**
 * @schema PiDataPoint
 */
export interface PiDataPoint {
  /**
   * @schema PiDataPoint#Timestamp
   */
  readonly timestamp: string;

  /**
   * @schema PiDataPoint#Value
   */
  readonly value: number;

}
