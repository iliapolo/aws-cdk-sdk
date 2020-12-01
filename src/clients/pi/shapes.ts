/**
 * @schema DescribeDimensionKeysRequest
 */
export interface DescribeDimensionKeysRequest {
  /**
   * @schema DescribeDimensionKeysRequest#ServiceType
   */
  readonly serviceType: string;

  /**
   * @schema DescribeDimensionKeysRequest#Identifier
   */
  readonly identifier: string;

  /**
   * @schema DescribeDimensionKeysRequest#StartTime
   */
  readonly startTime: string;

  /**
   * @schema DescribeDimensionKeysRequest#EndTime
   */
  readonly endTime: string;

  /**
   * @schema DescribeDimensionKeysRequest#Metric
   */
  readonly metric: string;

  /**
   * @schema DescribeDimensionKeysRequest#PeriodInSeconds
   */
  readonly periodInSeconds?: number;

  /**
   * @schema DescribeDimensionKeysRequest#GroupBy
   */
  readonly groupBy: DimensionGroup;

  /**
   * @schema DescribeDimensionKeysRequest#PartitionBy
   */
  readonly partitionBy?: DimensionGroup;

  /**
   * @schema DescribeDimensionKeysRequest#Filter
   */
  readonly filter?: { [key: string]: string };

  /**
   * @schema DescribeDimensionKeysRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeDimensionKeysRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeDimensionKeysResponse
 */
export interface DescribeDimensionKeysResponse {
  /**
   * @schema DescribeDimensionKeysResponse#AlignedStartTime
   */
  readonly alignedStartTime?: string;

  /**
   * @schema DescribeDimensionKeysResponse#AlignedEndTime
   */
  readonly alignedEndTime?: string;

  /**
   * @schema DescribeDimensionKeysResponse#PartitionKeys
   */
  readonly partitionKeys?: ResponsePartitionKey[];

  /**
   * @schema DescribeDimensionKeysResponse#Keys
   */
  readonly keys?: DimensionKeyDescription[];

  /**
   * @schema DescribeDimensionKeysResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetResourceMetricsRequest
 */
export interface GetResourceMetricsRequest {
  /**
   * @schema GetResourceMetricsRequest#ServiceType
   */
  readonly serviceType: string;

  /**
   * @schema GetResourceMetricsRequest#Identifier
   */
  readonly identifier: string;

  /**
   * @schema GetResourceMetricsRequest#MetricQueries
   */
  readonly metricQueries: MetricQuery[];

  /**
   * @schema GetResourceMetricsRequest#StartTime
   */
  readonly startTime: string;

  /**
   * @schema GetResourceMetricsRequest#EndTime
   */
  readonly endTime: string;

  /**
   * @schema GetResourceMetricsRequest#PeriodInSeconds
   */
  readonly periodInSeconds?: number;

  /**
   * @schema GetResourceMetricsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GetResourceMetricsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetResourceMetricsResponse
 */
export interface GetResourceMetricsResponse {
  /**
   * @schema GetResourceMetricsResponse#AlignedStartTime
   */
  readonly alignedStartTime?: string;

  /**
   * @schema GetResourceMetricsResponse#AlignedEndTime
   */
  readonly alignedEndTime?: string;

  /**
   * @schema GetResourceMetricsResponse#Identifier
   */
  readonly identifier?: string;

  /**
   * @schema GetResourceMetricsResponse#MetricList
   */
  readonly metricList?: MetricKeyDataPoints[];

  /**
   * @schema GetResourceMetricsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DimensionGroup
 */
export interface DimensionGroup {
  /**
   * @schema DimensionGroup#Group
   */
  readonly group: string;

  /**
   * @schema DimensionGroup#Dimensions
   */
  readonly dimensions?: string[];

  /**
   * @schema DimensionGroup#Limit
   */
  readonly limit?: number;

}

/**
 * @schema ResponsePartitionKey
 */
export interface ResponsePartitionKey {
  /**
   * @schema ResponsePartitionKey#Dimensions
   */
  readonly dimensions: { [key: string]: string };

}

/**
 * @schema DimensionKeyDescription
 */
export interface DimensionKeyDescription {
  /**
   * @schema DimensionKeyDescription#Dimensions
   */
  readonly dimensions?: { [key: string]: string };

  /**
   * @schema DimensionKeyDescription#Total
   */
  readonly total?: number;

  /**
   * @schema DimensionKeyDescription#Partitions
   */
  readonly partitions?: number[];

}

/**
 * @schema MetricQuery
 */
export interface MetricQuery {
  /**
   * @schema MetricQuery#Metric
   */
  readonly metric: string;

  /**
   * @schema MetricQuery#GroupBy
   */
  readonly groupBy?: DimensionGroup;

  /**
   * @schema MetricQuery#Filter
   */
  readonly filter?: { [key: string]: string };

}

/**
 * @schema MetricKeyDataPoints
 */
export interface MetricKeyDataPoints {
  /**
   * @schema MetricKeyDataPoints#Key
   */
  readonly key?: ResponseResourceMetricKey;

  /**
   * @schema MetricKeyDataPoints#DataPoints
   */
  readonly dataPoints?: DataPoint[];

}

/**
 * @schema ResponseResourceMetricKey
 */
export interface ResponseResourceMetricKey {
  /**
   * @schema ResponseResourceMetricKey#Metric
   */
  readonly metric: string;

  /**
   * @schema ResponseResourceMetricKey#Dimensions
   */
  readonly dimensions?: { [key: string]: string };

}

/**
 * @schema DataPoint
 */
export interface DataPoint {
  /**
   * @schema DataPoint#Timestamp
   */
  readonly timestamp: string;

  /**
   * @schema DataPoint#Value
   */
  readonly value: number;

}
