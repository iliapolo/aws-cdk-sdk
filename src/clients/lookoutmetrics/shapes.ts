/**
 * @schema LookoutMetricsActivateAnomalyDetectorRequest
 */
export interface LookoutMetricsActivateAnomalyDetectorRequest {
  /**
   * @schema LookoutMetricsActivateAnomalyDetectorRequest#AnomalyDetectorArn
   */
  readonly anomalyDetectorArn?: string;

}

/**
 * Converts an object of type 'LookoutMetricsActivateAnomalyDetectorRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsActivateAnomalyDetectorRequest(obj: LookoutMetricsActivateAnomalyDetectorRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AnomalyDetectorArn': obj.anomalyDetectorArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsActivateAnomalyDetectorResponse
 */
export interface LookoutMetricsActivateAnomalyDetectorResponse {
}

/**
 * Converts an object of type 'LookoutMetricsActivateAnomalyDetectorResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsActivateAnomalyDetectorResponse(obj: LookoutMetricsActivateAnomalyDetectorResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsBackTestAnomalyDetectorRequest
 */
export interface LookoutMetricsBackTestAnomalyDetectorRequest {
  /**
   * @schema LookoutMetricsBackTestAnomalyDetectorRequest#AnomalyDetectorArn
   */
  readonly anomalyDetectorArn?: string;

}

/**
 * Converts an object of type 'LookoutMetricsBackTestAnomalyDetectorRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsBackTestAnomalyDetectorRequest(obj: LookoutMetricsBackTestAnomalyDetectorRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AnomalyDetectorArn': obj.anomalyDetectorArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsBackTestAnomalyDetectorResponse
 */
export interface LookoutMetricsBackTestAnomalyDetectorResponse {
}

/**
 * Converts an object of type 'LookoutMetricsBackTestAnomalyDetectorResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsBackTestAnomalyDetectorResponse(obj: LookoutMetricsBackTestAnomalyDetectorResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsCreateAlertRequest
 */
export interface LookoutMetricsCreateAlertRequest {
  /**
   * @schema LookoutMetricsCreateAlertRequest#AlertName
   */
  readonly alertName?: string;

  /**
   * @schema LookoutMetricsCreateAlertRequest#AlertSensitivityThreshold
   */
  readonly alertSensitivityThreshold?: number;

  /**
   * @schema LookoutMetricsCreateAlertRequest#AlertDescription
   */
  readonly alertDescription?: string;

  /**
   * @schema LookoutMetricsCreateAlertRequest#AnomalyDetectorArn
   */
  readonly anomalyDetectorArn?: string;

  /**
   * @schema LookoutMetricsCreateAlertRequest#Action
   */
  readonly action?: LookoutMetricsAction;

  /**
   * @schema LookoutMetricsCreateAlertRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'LookoutMetricsCreateAlertRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsCreateAlertRequest(obj: LookoutMetricsCreateAlertRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AlertName': obj.alertName,
    'AlertSensitivityThreshold': obj.alertSensitivityThreshold,
    'AlertDescription': obj.alertDescription,
    'AnomalyDetectorArn': obj.anomalyDetectorArn,
    'Action': toJson_LookoutMetricsAction(obj.action),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsCreateAlertResponse
 */
export interface LookoutMetricsCreateAlertResponse {
  /**
   * @schema LookoutMetricsCreateAlertResponse#AlertArn
   */
  readonly alertArn?: string;

}

/**
 * Converts an object of type 'LookoutMetricsCreateAlertResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsCreateAlertResponse(obj: LookoutMetricsCreateAlertResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AlertArn': obj.alertArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsCreateAnomalyDetectorRequest
 */
export interface LookoutMetricsCreateAnomalyDetectorRequest {
  /**
   * @schema LookoutMetricsCreateAnomalyDetectorRequest#AnomalyDetectorName
   */
  readonly anomalyDetectorName?: string;

  /**
   * @schema LookoutMetricsCreateAnomalyDetectorRequest#AnomalyDetectorDescription
   */
  readonly anomalyDetectorDescription?: string;

  /**
   * @schema LookoutMetricsCreateAnomalyDetectorRequest#AnomalyDetectorConfig
   */
  readonly anomalyDetectorConfig?: LookoutMetricsAnomalyDetectorConfig;

  /**
   * @schema LookoutMetricsCreateAnomalyDetectorRequest#KmsKeyArn
   */
  readonly kmsKeyArn?: string;

  /**
   * @schema LookoutMetricsCreateAnomalyDetectorRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'LookoutMetricsCreateAnomalyDetectorRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsCreateAnomalyDetectorRequest(obj: LookoutMetricsCreateAnomalyDetectorRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AnomalyDetectorName': obj.anomalyDetectorName,
    'AnomalyDetectorDescription': obj.anomalyDetectorDescription,
    'AnomalyDetectorConfig': toJson_LookoutMetricsAnomalyDetectorConfig(obj.anomalyDetectorConfig),
    'KmsKeyArn': obj.kmsKeyArn,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsCreateAnomalyDetectorResponse
 */
export interface LookoutMetricsCreateAnomalyDetectorResponse {
  /**
   * @schema LookoutMetricsCreateAnomalyDetectorResponse#AnomalyDetectorArn
   */
  readonly anomalyDetectorArn?: string;

}

/**
 * Converts an object of type 'LookoutMetricsCreateAnomalyDetectorResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsCreateAnomalyDetectorResponse(obj: LookoutMetricsCreateAnomalyDetectorResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AnomalyDetectorArn': obj.anomalyDetectorArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsCreateMetricSetRequest
 */
export interface LookoutMetricsCreateMetricSetRequest {
  /**
   * @schema LookoutMetricsCreateMetricSetRequest#AnomalyDetectorArn
   */
  readonly anomalyDetectorArn?: string;

  /**
   * @schema LookoutMetricsCreateMetricSetRequest#MetricSetName
   */
  readonly metricSetName?: string;

  /**
   * @schema LookoutMetricsCreateMetricSetRequest#MetricSetDescription
   */
  readonly metricSetDescription?: string;

  /**
   * @schema LookoutMetricsCreateMetricSetRequest#MetricList
   */
  readonly metricList?: LookoutMetricsMetric[];

  /**
   * @schema LookoutMetricsCreateMetricSetRequest#Offset
   */
  readonly offset?: number;

  /**
   * @schema LookoutMetricsCreateMetricSetRequest#TimestampColumn
   */
  readonly timestampColumn?: LookoutMetricsTimestampColumn;

  /**
   * @schema LookoutMetricsCreateMetricSetRequest#DimensionList
   */
  readonly dimensionList?: string[];

  /**
   * @schema LookoutMetricsCreateMetricSetRequest#MetricSetFrequency
   */
  readonly metricSetFrequency?: string;

  /**
   * @schema LookoutMetricsCreateMetricSetRequest#MetricSource
   */
  readonly metricSource?: LookoutMetricsMetricSource;

  /**
   * @schema LookoutMetricsCreateMetricSetRequest#Timezone
   */
  readonly timezone?: string;

  /**
   * @schema LookoutMetricsCreateMetricSetRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'LookoutMetricsCreateMetricSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsCreateMetricSetRequest(obj: LookoutMetricsCreateMetricSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AnomalyDetectorArn': obj.anomalyDetectorArn,
    'MetricSetName': obj.metricSetName,
    'MetricSetDescription': obj.metricSetDescription,
    'MetricList': obj.metricList?.map(y => toJson_LookoutMetricsMetric(y)),
    'Offset': obj.offset,
    'TimestampColumn': toJson_LookoutMetricsTimestampColumn(obj.timestampColumn),
    'DimensionList': obj.dimensionList?.map(y => y),
    'MetricSetFrequency': obj.metricSetFrequency,
    'MetricSource': toJson_LookoutMetricsMetricSource(obj.metricSource),
    'Timezone': obj.timezone,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsCreateMetricSetResponse
 */
export interface LookoutMetricsCreateMetricSetResponse {
  /**
   * @schema LookoutMetricsCreateMetricSetResponse#MetricSetArn
   */
  readonly metricSetArn?: string;

}

/**
 * Converts an object of type 'LookoutMetricsCreateMetricSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsCreateMetricSetResponse(obj: LookoutMetricsCreateMetricSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MetricSetArn': obj.metricSetArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsDeleteAlertRequest
 */
export interface LookoutMetricsDeleteAlertRequest {
  /**
   * @schema LookoutMetricsDeleteAlertRequest#AlertArn
   */
  readonly alertArn?: string;

}

/**
 * Converts an object of type 'LookoutMetricsDeleteAlertRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsDeleteAlertRequest(obj: LookoutMetricsDeleteAlertRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AlertArn': obj.alertArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsDeleteAlertResponse
 */
export interface LookoutMetricsDeleteAlertResponse {
}

/**
 * Converts an object of type 'LookoutMetricsDeleteAlertResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsDeleteAlertResponse(obj: LookoutMetricsDeleteAlertResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsDeleteAnomalyDetectorRequest
 */
export interface LookoutMetricsDeleteAnomalyDetectorRequest {
  /**
   * @schema LookoutMetricsDeleteAnomalyDetectorRequest#AnomalyDetectorArn
   */
  readonly anomalyDetectorArn?: string;

}

/**
 * Converts an object of type 'LookoutMetricsDeleteAnomalyDetectorRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsDeleteAnomalyDetectorRequest(obj: LookoutMetricsDeleteAnomalyDetectorRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AnomalyDetectorArn': obj.anomalyDetectorArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsDeleteAnomalyDetectorResponse
 */
export interface LookoutMetricsDeleteAnomalyDetectorResponse {
}

/**
 * Converts an object of type 'LookoutMetricsDeleteAnomalyDetectorResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsDeleteAnomalyDetectorResponse(obj: LookoutMetricsDeleteAnomalyDetectorResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsDescribeAlertRequest
 */
export interface LookoutMetricsDescribeAlertRequest {
  /**
   * @schema LookoutMetricsDescribeAlertRequest#AlertArn
   */
  readonly alertArn?: string;

}

/**
 * Converts an object of type 'LookoutMetricsDescribeAlertRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsDescribeAlertRequest(obj: LookoutMetricsDescribeAlertRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AlertArn': obj.alertArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsDescribeAlertResponse
 */
export interface LookoutMetricsDescribeAlertResponse {
  /**
   * @schema LookoutMetricsDescribeAlertResponse#Alert
   */
  readonly alert?: LookoutMetricsAlert;

}

/**
 * Converts an object of type 'LookoutMetricsDescribeAlertResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsDescribeAlertResponse(obj: LookoutMetricsDescribeAlertResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Alert': toJson_LookoutMetricsAlert(obj.alert),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsDescribeAnomalyDetectionExecutionsRequest
 */
export interface LookoutMetricsDescribeAnomalyDetectionExecutionsRequest {
  /**
   * @schema LookoutMetricsDescribeAnomalyDetectionExecutionsRequest#AnomalyDetectorArn
   */
  readonly anomalyDetectorArn?: string;

  /**
   * @schema LookoutMetricsDescribeAnomalyDetectionExecutionsRequest#Timestamp
   */
  readonly timestamp?: string;

  /**
   * @schema LookoutMetricsDescribeAnomalyDetectionExecutionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema LookoutMetricsDescribeAnomalyDetectionExecutionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'LookoutMetricsDescribeAnomalyDetectionExecutionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsDescribeAnomalyDetectionExecutionsRequest(obj: LookoutMetricsDescribeAnomalyDetectionExecutionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AnomalyDetectorArn': obj.anomalyDetectorArn,
    'Timestamp': obj.timestamp,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsDescribeAnomalyDetectionExecutionsResponse
 */
export interface LookoutMetricsDescribeAnomalyDetectionExecutionsResponse {
  /**
   * @schema LookoutMetricsDescribeAnomalyDetectionExecutionsResponse#ExecutionList
   */
  readonly executionList?: LookoutMetricsExecutionStatus[];

  /**
   * @schema LookoutMetricsDescribeAnomalyDetectionExecutionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'LookoutMetricsDescribeAnomalyDetectionExecutionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsDescribeAnomalyDetectionExecutionsResponse(obj: LookoutMetricsDescribeAnomalyDetectionExecutionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ExecutionList': obj.executionList?.map(y => toJson_LookoutMetricsExecutionStatus(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsDescribeAnomalyDetectorRequest
 */
export interface LookoutMetricsDescribeAnomalyDetectorRequest {
  /**
   * @schema LookoutMetricsDescribeAnomalyDetectorRequest#AnomalyDetectorArn
   */
  readonly anomalyDetectorArn?: string;

}

/**
 * Converts an object of type 'LookoutMetricsDescribeAnomalyDetectorRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsDescribeAnomalyDetectorRequest(obj: LookoutMetricsDescribeAnomalyDetectorRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AnomalyDetectorArn': obj.anomalyDetectorArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsDescribeAnomalyDetectorResponse
 */
export interface LookoutMetricsDescribeAnomalyDetectorResponse {
  /**
   * @schema LookoutMetricsDescribeAnomalyDetectorResponse#AnomalyDetectorArn
   */
  readonly anomalyDetectorArn?: string;

  /**
   * @schema LookoutMetricsDescribeAnomalyDetectorResponse#AnomalyDetectorName
   */
  readonly anomalyDetectorName?: string;

  /**
   * @schema LookoutMetricsDescribeAnomalyDetectorResponse#AnomalyDetectorDescription
   */
  readonly anomalyDetectorDescription?: string;

  /**
   * @schema LookoutMetricsDescribeAnomalyDetectorResponse#AnomalyDetectorConfig
   */
  readonly anomalyDetectorConfig?: LookoutMetricsAnomalyDetectorConfigSummary;

  /**
   * @schema LookoutMetricsDescribeAnomalyDetectorResponse#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema LookoutMetricsDescribeAnomalyDetectorResponse#LastModificationTime
   */
  readonly lastModificationTime?: string;

  /**
   * @schema LookoutMetricsDescribeAnomalyDetectorResponse#Status
   */
  readonly status?: string;

  /**
   * @schema LookoutMetricsDescribeAnomalyDetectorResponse#FailureReason
   */
  readonly failureReason?: string;

  /**
   * @schema LookoutMetricsDescribeAnomalyDetectorResponse#KmsKeyArn
   */
  readonly kmsKeyArn?: string;

}

/**
 * Converts an object of type 'LookoutMetricsDescribeAnomalyDetectorResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsDescribeAnomalyDetectorResponse(obj: LookoutMetricsDescribeAnomalyDetectorResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AnomalyDetectorArn': obj.anomalyDetectorArn,
    'AnomalyDetectorName': obj.anomalyDetectorName,
    'AnomalyDetectorDescription': obj.anomalyDetectorDescription,
    'AnomalyDetectorConfig': toJson_LookoutMetricsAnomalyDetectorConfigSummary(obj.anomalyDetectorConfig),
    'CreationTime': obj.creationTime,
    'LastModificationTime': obj.lastModificationTime,
    'Status': obj.status,
    'FailureReason': obj.failureReason,
    'KmsKeyArn': obj.kmsKeyArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsDescribeMetricSetRequest
 */
export interface LookoutMetricsDescribeMetricSetRequest {
  /**
   * @schema LookoutMetricsDescribeMetricSetRequest#MetricSetArn
   */
  readonly metricSetArn?: string;

}

/**
 * Converts an object of type 'LookoutMetricsDescribeMetricSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsDescribeMetricSetRequest(obj: LookoutMetricsDescribeMetricSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MetricSetArn': obj.metricSetArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsDescribeMetricSetResponse
 */
export interface LookoutMetricsDescribeMetricSetResponse {
  /**
   * @schema LookoutMetricsDescribeMetricSetResponse#MetricSetArn
   */
  readonly metricSetArn?: string;

  /**
   * @schema LookoutMetricsDescribeMetricSetResponse#AnomalyDetectorArn
   */
  readonly anomalyDetectorArn?: string;

  /**
   * @schema LookoutMetricsDescribeMetricSetResponse#MetricSetName
   */
  readonly metricSetName?: string;

  /**
   * @schema LookoutMetricsDescribeMetricSetResponse#MetricSetDescription
   */
  readonly metricSetDescription?: string;

  /**
   * @schema LookoutMetricsDescribeMetricSetResponse#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema LookoutMetricsDescribeMetricSetResponse#LastModificationTime
   */
  readonly lastModificationTime?: string;

  /**
   * @schema LookoutMetricsDescribeMetricSetResponse#Offset
   */
  readonly offset?: number;

  /**
   * @schema LookoutMetricsDescribeMetricSetResponse#MetricList
   */
  readonly metricList?: LookoutMetricsMetric[];

  /**
   * @schema LookoutMetricsDescribeMetricSetResponse#TimestampColumn
   */
  readonly timestampColumn?: LookoutMetricsTimestampColumn;

  /**
   * @schema LookoutMetricsDescribeMetricSetResponse#DimensionList
   */
  readonly dimensionList?: string[];

  /**
   * @schema LookoutMetricsDescribeMetricSetResponse#MetricSetFrequency
   */
  readonly metricSetFrequency?: string;

  /**
   * @schema LookoutMetricsDescribeMetricSetResponse#Timezone
   */
  readonly timezone?: string;

  /**
   * @schema LookoutMetricsDescribeMetricSetResponse#MetricSource
   */
  readonly metricSource?: LookoutMetricsMetricSource;

}

/**
 * Converts an object of type 'LookoutMetricsDescribeMetricSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsDescribeMetricSetResponse(obj: LookoutMetricsDescribeMetricSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MetricSetArn': obj.metricSetArn,
    'AnomalyDetectorArn': obj.anomalyDetectorArn,
    'MetricSetName': obj.metricSetName,
    'MetricSetDescription': obj.metricSetDescription,
    'CreationTime': obj.creationTime,
    'LastModificationTime': obj.lastModificationTime,
    'Offset': obj.offset,
    'MetricList': obj.metricList?.map(y => toJson_LookoutMetricsMetric(y)),
    'TimestampColumn': toJson_LookoutMetricsTimestampColumn(obj.timestampColumn),
    'DimensionList': obj.dimensionList?.map(y => y),
    'MetricSetFrequency': obj.metricSetFrequency,
    'Timezone': obj.timezone,
    'MetricSource': toJson_LookoutMetricsMetricSource(obj.metricSource),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsGetAnomalyGroupRequest
 */
export interface LookoutMetricsGetAnomalyGroupRequest {
  /**
   * @schema LookoutMetricsGetAnomalyGroupRequest#AnomalyGroupId
   */
  readonly anomalyGroupId?: string;

  /**
   * @schema LookoutMetricsGetAnomalyGroupRequest#AnomalyDetectorArn
   */
  readonly anomalyDetectorArn?: string;

}

/**
 * Converts an object of type 'LookoutMetricsGetAnomalyGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsGetAnomalyGroupRequest(obj: LookoutMetricsGetAnomalyGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AnomalyGroupId': obj.anomalyGroupId,
    'AnomalyDetectorArn': obj.anomalyDetectorArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsGetAnomalyGroupResponse
 */
export interface LookoutMetricsGetAnomalyGroupResponse {
  /**
   * @schema LookoutMetricsGetAnomalyGroupResponse#AnomalyGroup
   */
  readonly anomalyGroup?: LookoutMetricsAnomalyGroup;

}

/**
 * Converts an object of type 'LookoutMetricsGetAnomalyGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsGetAnomalyGroupResponse(obj: LookoutMetricsGetAnomalyGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AnomalyGroup': toJson_LookoutMetricsAnomalyGroup(obj.anomalyGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsGetFeedbackRequest
 */
export interface LookoutMetricsGetFeedbackRequest {
  /**
   * @schema LookoutMetricsGetFeedbackRequest#AnomalyDetectorArn
   */
  readonly anomalyDetectorArn?: string;

  /**
   * @schema LookoutMetricsGetFeedbackRequest#AnomalyGroupTimeSeriesFeedback
   */
  readonly anomalyGroupTimeSeriesFeedback?: LookoutMetricsAnomalyGroupTimeSeries;

  /**
   * @schema LookoutMetricsGetFeedbackRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema LookoutMetricsGetFeedbackRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'LookoutMetricsGetFeedbackRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsGetFeedbackRequest(obj: LookoutMetricsGetFeedbackRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AnomalyDetectorArn': obj.anomalyDetectorArn,
    'AnomalyGroupTimeSeriesFeedback': toJson_LookoutMetricsAnomalyGroupTimeSeries(obj.anomalyGroupTimeSeriesFeedback),
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsGetFeedbackResponse
 */
export interface LookoutMetricsGetFeedbackResponse {
  /**
   * @schema LookoutMetricsGetFeedbackResponse#AnomalyGroupTimeSeriesFeedback
   */
  readonly anomalyGroupTimeSeriesFeedback?: LookoutMetricsTimeSeriesFeedback[];

  /**
   * @schema LookoutMetricsGetFeedbackResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'LookoutMetricsGetFeedbackResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsGetFeedbackResponse(obj: LookoutMetricsGetFeedbackResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AnomalyGroupTimeSeriesFeedback': obj.anomalyGroupTimeSeriesFeedback?.map(y => toJson_LookoutMetricsTimeSeriesFeedback(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsGetSampleDataRequest
 */
export interface LookoutMetricsGetSampleDataRequest {
  /**
   * @schema LookoutMetricsGetSampleDataRequest#S3SourceConfig
   */
  readonly s3SourceConfig?: LookoutMetricsSampleDataS3SourceConfig;

}

/**
 * Converts an object of type 'LookoutMetricsGetSampleDataRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsGetSampleDataRequest(obj: LookoutMetricsGetSampleDataRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S3SourceConfig': toJson_LookoutMetricsSampleDataS3SourceConfig(obj.s3SourceConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsGetSampleDataResponse
 */
export interface LookoutMetricsGetSampleDataResponse {
  /**
   * @schema LookoutMetricsGetSampleDataResponse#HeaderValues
   */
  readonly headerValues?: string[];

  /**
   * @schema LookoutMetricsGetSampleDataResponse#SampleRows
   */
  readonly sampleRows?: string[][];

}

/**
 * Converts an object of type 'LookoutMetricsGetSampleDataResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsGetSampleDataResponse(obj: LookoutMetricsGetSampleDataResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HeaderValues': obj.headerValues?.map(y => y),
    'SampleRows': obj.sampleRows?.map(y => y?.map(y => y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsListAlertsRequest
 */
export interface LookoutMetricsListAlertsRequest {
  /**
   * @schema LookoutMetricsListAlertsRequest#AnomalyDetectorArn
   */
  readonly anomalyDetectorArn?: string;

  /**
   * @schema LookoutMetricsListAlertsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema LookoutMetricsListAlertsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'LookoutMetricsListAlertsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsListAlertsRequest(obj: LookoutMetricsListAlertsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AnomalyDetectorArn': obj.anomalyDetectorArn,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsListAlertsResponse
 */
export interface LookoutMetricsListAlertsResponse {
  /**
   * @schema LookoutMetricsListAlertsResponse#AlertSummaryList
   */
  readonly alertSummaryList?: LookoutMetricsAlertSummary[];

  /**
   * @schema LookoutMetricsListAlertsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'LookoutMetricsListAlertsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsListAlertsResponse(obj: LookoutMetricsListAlertsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AlertSummaryList': obj.alertSummaryList?.map(y => toJson_LookoutMetricsAlertSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsListAnomalyDetectorsRequest
 */
export interface LookoutMetricsListAnomalyDetectorsRequest {
  /**
   * @schema LookoutMetricsListAnomalyDetectorsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema LookoutMetricsListAnomalyDetectorsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'LookoutMetricsListAnomalyDetectorsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsListAnomalyDetectorsRequest(obj: LookoutMetricsListAnomalyDetectorsRequest | undefined): Record<string, any> | undefined {
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
 * @schema LookoutMetricsListAnomalyDetectorsResponse
 */
export interface LookoutMetricsListAnomalyDetectorsResponse {
  /**
   * @schema LookoutMetricsListAnomalyDetectorsResponse#AnomalyDetectorSummaryList
   */
  readonly anomalyDetectorSummaryList?: LookoutMetricsAnomalyDetectorSummary[];

  /**
   * @schema LookoutMetricsListAnomalyDetectorsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'LookoutMetricsListAnomalyDetectorsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsListAnomalyDetectorsResponse(obj: LookoutMetricsListAnomalyDetectorsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AnomalyDetectorSummaryList': obj.anomalyDetectorSummaryList?.map(y => toJson_LookoutMetricsAnomalyDetectorSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsListAnomalyGroupSummariesRequest
 */
export interface LookoutMetricsListAnomalyGroupSummariesRequest {
  /**
   * @schema LookoutMetricsListAnomalyGroupSummariesRequest#AnomalyDetectorArn
   */
  readonly anomalyDetectorArn?: string;

  /**
   * @schema LookoutMetricsListAnomalyGroupSummariesRequest#SensitivityThreshold
   */
  readonly sensitivityThreshold?: number;

  /**
   * @schema LookoutMetricsListAnomalyGroupSummariesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema LookoutMetricsListAnomalyGroupSummariesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'LookoutMetricsListAnomalyGroupSummariesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsListAnomalyGroupSummariesRequest(obj: LookoutMetricsListAnomalyGroupSummariesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AnomalyDetectorArn': obj.anomalyDetectorArn,
    'SensitivityThreshold': obj.sensitivityThreshold,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsListAnomalyGroupSummariesResponse
 */
export interface LookoutMetricsListAnomalyGroupSummariesResponse {
  /**
   * @schema LookoutMetricsListAnomalyGroupSummariesResponse#AnomalyGroupSummaryList
   */
  readonly anomalyGroupSummaryList?: LookoutMetricsAnomalyGroupSummary[];

  /**
   * @schema LookoutMetricsListAnomalyGroupSummariesResponse#AnomalyGroupStatistics
   */
  readonly anomalyGroupStatistics?: LookoutMetricsAnomalyGroupStatistics;

  /**
   * @schema LookoutMetricsListAnomalyGroupSummariesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'LookoutMetricsListAnomalyGroupSummariesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsListAnomalyGroupSummariesResponse(obj: LookoutMetricsListAnomalyGroupSummariesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AnomalyGroupSummaryList': obj.anomalyGroupSummaryList?.map(y => toJson_LookoutMetricsAnomalyGroupSummary(y)),
    'AnomalyGroupStatistics': toJson_LookoutMetricsAnomalyGroupStatistics(obj.anomalyGroupStatistics),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsListAnomalyGroupTimeSeriesRequest
 */
export interface LookoutMetricsListAnomalyGroupTimeSeriesRequest {
  /**
   * @schema LookoutMetricsListAnomalyGroupTimeSeriesRequest#AnomalyDetectorArn
   */
  readonly anomalyDetectorArn?: string;

  /**
   * @schema LookoutMetricsListAnomalyGroupTimeSeriesRequest#AnomalyGroupId
   */
  readonly anomalyGroupId?: string;

  /**
   * @schema LookoutMetricsListAnomalyGroupTimeSeriesRequest#MetricName
   */
  readonly metricName?: string;

  /**
   * @schema LookoutMetricsListAnomalyGroupTimeSeriesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema LookoutMetricsListAnomalyGroupTimeSeriesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'LookoutMetricsListAnomalyGroupTimeSeriesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsListAnomalyGroupTimeSeriesRequest(obj: LookoutMetricsListAnomalyGroupTimeSeriesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AnomalyDetectorArn': obj.anomalyDetectorArn,
    'AnomalyGroupId': obj.anomalyGroupId,
    'MetricName': obj.metricName,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsListAnomalyGroupTimeSeriesResponse
 */
export interface LookoutMetricsListAnomalyGroupTimeSeriesResponse {
  /**
   * @schema LookoutMetricsListAnomalyGroupTimeSeriesResponse#AnomalyGroupId
   */
  readonly anomalyGroupId?: string;

  /**
   * @schema LookoutMetricsListAnomalyGroupTimeSeriesResponse#MetricName
   */
  readonly metricName?: string;

  /**
   * @schema LookoutMetricsListAnomalyGroupTimeSeriesResponse#TimestampList
   */
  readonly timestampList?: string[];

  /**
   * @schema LookoutMetricsListAnomalyGroupTimeSeriesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema LookoutMetricsListAnomalyGroupTimeSeriesResponse#TimeSeriesList
   */
  readonly timeSeriesList?: LookoutMetricsTimeSeries[];

}

/**
 * Converts an object of type 'LookoutMetricsListAnomalyGroupTimeSeriesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsListAnomalyGroupTimeSeriesResponse(obj: LookoutMetricsListAnomalyGroupTimeSeriesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AnomalyGroupId': obj.anomalyGroupId,
    'MetricName': obj.metricName,
    'TimestampList': obj.timestampList?.map(y => y),
    'NextToken': obj.nextToken,
    'TimeSeriesList': obj.timeSeriesList?.map(y => toJson_LookoutMetricsTimeSeries(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsListMetricSetsRequest
 */
export interface LookoutMetricsListMetricSetsRequest {
  /**
   * @schema LookoutMetricsListMetricSetsRequest#AnomalyDetectorArn
   */
  readonly anomalyDetectorArn?: string;

  /**
   * @schema LookoutMetricsListMetricSetsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema LookoutMetricsListMetricSetsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'LookoutMetricsListMetricSetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsListMetricSetsRequest(obj: LookoutMetricsListMetricSetsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AnomalyDetectorArn': obj.anomalyDetectorArn,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsListMetricSetsResponse
 */
export interface LookoutMetricsListMetricSetsResponse {
  /**
   * @schema LookoutMetricsListMetricSetsResponse#MetricSetSummaryList
   */
  readonly metricSetSummaryList?: LookoutMetricsMetricSetSummary[];

  /**
   * @schema LookoutMetricsListMetricSetsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'LookoutMetricsListMetricSetsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsListMetricSetsResponse(obj: LookoutMetricsListMetricSetsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MetricSetSummaryList': obj.metricSetSummaryList?.map(y => toJson_LookoutMetricsMetricSetSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsListTagsForResourceRequest
 */
export interface LookoutMetricsListTagsForResourceRequest {
  /**
   * @schema LookoutMetricsListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'LookoutMetricsListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsListTagsForResourceRequest(obj: LookoutMetricsListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsListTagsForResourceResponse
 */
export interface LookoutMetricsListTagsForResourceResponse {
  /**
   * @schema LookoutMetricsListTagsForResourceResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'LookoutMetricsListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsListTagsForResourceResponse(obj: LookoutMetricsListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsPutFeedbackRequest
 */
export interface LookoutMetricsPutFeedbackRequest {
  /**
   * @schema LookoutMetricsPutFeedbackRequest#AnomalyDetectorArn
   */
  readonly anomalyDetectorArn?: string;

  /**
   * @schema LookoutMetricsPutFeedbackRequest#AnomalyGroupTimeSeriesFeedback
   */
  readonly anomalyGroupTimeSeriesFeedback?: LookoutMetricsAnomalyGroupTimeSeriesFeedback;

}

/**
 * Converts an object of type 'LookoutMetricsPutFeedbackRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsPutFeedbackRequest(obj: LookoutMetricsPutFeedbackRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AnomalyDetectorArn': obj.anomalyDetectorArn,
    'AnomalyGroupTimeSeriesFeedback': toJson_LookoutMetricsAnomalyGroupTimeSeriesFeedback(obj.anomalyGroupTimeSeriesFeedback),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsPutFeedbackResponse
 */
export interface LookoutMetricsPutFeedbackResponse {
}

/**
 * Converts an object of type 'LookoutMetricsPutFeedbackResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsPutFeedbackResponse(obj: LookoutMetricsPutFeedbackResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsTagResourceRequest
 */
export interface LookoutMetricsTagResourceRequest {
  /**
   * @schema LookoutMetricsTagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema LookoutMetricsTagResourceRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'LookoutMetricsTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsTagResourceRequest(obj: LookoutMetricsTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsTagResourceResponse
 */
export interface LookoutMetricsTagResourceResponse {
}

/**
 * Converts an object of type 'LookoutMetricsTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsTagResourceResponse(obj: LookoutMetricsTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsUntagResourceRequest
 */
export interface LookoutMetricsUntagResourceRequest {
  /**
   * @schema LookoutMetricsUntagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema LookoutMetricsUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'LookoutMetricsUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsUntagResourceRequest(obj: LookoutMetricsUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsUntagResourceResponse
 */
export interface LookoutMetricsUntagResourceResponse {
}

/**
 * Converts an object of type 'LookoutMetricsUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsUntagResourceResponse(obj: LookoutMetricsUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsUpdateAnomalyDetectorRequest
 */
export interface LookoutMetricsUpdateAnomalyDetectorRequest {
  /**
   * @schema LookoutMetricsUpdateAnomalyDetectorRequest#AnomalyDetectorArn
   */
  readonly anomalyDetectorArn?: string;

  /**
   * @schema LookoutMetricsUpdateAnomalyDetectorRequest#KmsKeyArn
   */
  readonly kmsKeyArn?: string;

  /**
   * @schema LookoutMetricsUpdateAnomalyDetectorRequest#AnomalyDetectorDescription
   */
  readonly anomalyDetectorDescription?: string;

  /**
   * @schema LookoutMetricsUpdateAnomalyDetectorRequest#AnomalyDetectorConfig
   */
  readonly anomalyDetectorConfig?: LookoutMetricsAnomalyDetectorConfig;

}

/**
 * Converts an object of type 'LookoutMetricsUpdateAnomalyDetectorRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsUpdateAnomalyDetectorRequest(obj: LookoutMetricsUpdateAnomalyDetectorRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AnomalyDetectorArn': obj.anomalyDetectorArn,
    'KmsKeyArn': obj.kmsKeyArn,
    'AnomalyDetectorDescription': obj.anomalyDetectorDescription,
    'AnomalyDetectorConfig': toJson_LookoutMetricsAnomalyDetectorConfig(obj.anomalyDetectorConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsUpdateAnomalyDetectorResponse
 */
export interface LookoutMetricsUpdateAnomalyDetectorResponse {
  /**
   * @schema LookoutMetricsUpdateAnomalyDetectorResponse#AnomalyDetectorArn
   */
  readonly anomalyDetectorArn?: string;

}

/**
 * Converts an object of type 'LookoutMetricsUpdateAnomalyDetectorResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsUpdateAnomalyDetectorResponse(obj: LookoutMetricsUpdateAnomalyDetectorResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AnomalyDetectorArn': obj.anomalyDetectorArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsUpdateMetricSetRequest
 */
export interface LookoutMetricsUpdateMetricSetRequest {
  /**
   * @schema LookoutMetricsUpdateMetricSetRequest#MetricSetArn
   */
  readonly metricSetArn?: string;

  /**
   * @schema LookoutMetricsUpdateMetricSetRequest#MetricSetDescription
   */
  readonly metricSetDescription?: string;

  /**
   * @schema LookoutMetricsUpdateMetricSetRequest#MetricList
   */
  readonly metricList?: LookoutMetricsMetric[];

  /**
   * @schema LookoutMetricsUpdateMetricSetRequest#Offset
   */
  readonly offset?: number;

  /**
   * @schema LookoutMetricsUpdateMetricSetRequest#TimestampColumn
   */
  readonly timestampColumn?: LookoutMetricsTimestampColumn;

  /**
   * @schema LookoutMetricsUpdateMetricSetRequest#DimensionList
   */
  readonly dimensionList?: string[];

  /**
   * @schema LookoutMetricsUpdateMetricSetRequest#MetricSetFrequency
   */
  readonly metricSetFrequency?: string;

  /**
   * @schema LookoutMetricsUpdateMetricSetRequest#MetricSource
   */
  readonly metricSource?: LookoutMetricsMetricSource;

}

/**
 * Converts an object of type 'LookoutMetricsUpdateMetricSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsUpdateMetricSetRequest(obj: LookoutMetricsUpdateMetricSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MetricSetArn': obj.metricSetArn,
    'MetricSetDescription': obj.metricSetDescription,
    'MetricList': obj.metricList?.map(y => toJson_LookoutMetricsMetric(y)),
    'Offset': obj.offset,
    'TimestampColumn': toJson_LookoutMetricsTimestampColumn(obj.timestampColumn),
    'DimensionList': obj.dimensionList?.map(y => y),
    'MetricSetFrequency': obj.metricSetFrequency,
    'MetricSource': toJson_LookoutMetricsMetricSource(obj.metricSource),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsUpdateMetricSetResponse
 */
export interface LookoutMetricsUpdateMetricSetResponse {
  /**
   * @schema LookoutMetricsUpdateMetricSetResponse#MetricSetArn
   */
  readonly metricSetArn?: string;

}

/**
 * Converts an object of type 'LookoutMetricsUpdateMetricSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsUpdateMetricSetResponse(obj: LookoutMetricsUpdateMetricSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MetricSetArn': obj.metricSetArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsAction
 */
export interface LookoutMetricsAction {
  /**
   * @schema LookoutMetricsAction#SNSConfiguration
   */
  readonly snsConfiguration?: LookoutMetricsSnsConfiguration;

  /**
   * @schema LookoutMetricsAction#LambdaConfiguration
   */
  readonly lambdaConfiguration?: LookoutMetricsLambdaConfiguration;

}

/**
 * Converts an object of type 'LookoutMetricsAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsAction(obj: LookoutMetricsAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SNSConfiguration': toJson_LookoutMetricsSnsConfiguration(obj.snsConfiguration),
    'LambdaConfiguration': toJson_LookoutMetricsLambdaConfiguration(obj.lambdaConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsAnomalyDetectorConfig
 */
export interface LookoutMetricsAnomalyDetectorConfig {
  /**
   * @schema LookoutMetricsAnomalyDetectorConfig#AnomalyDetectorFrequency
   */
  readonly anomalyDetectorFrequency?: string;

}

/**
 * Converts an object of type 'LookoutMetricsAnomalyDetectorConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsAnomalyDetectorConfig(obj: LookoutMetricsAnomalyDetectorConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AnomalyDetectorFrequency': obj.anomalyDetectorFrequency,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsMetric
 */
export interface LookoutMetricsMetric {
  /**
   * @schema LookoutMetricsMetric#MetricName
   */
  readonly metricName?: string;

  /**
   * @schema LookoutMetricsMetric#AggregationFunction
   */
  readonly aggregationFunction?: string;

  /**
   * @schema LookoutMetricsMetric#Namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'LookoutMetricsMetric' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsMetric(obj: LookoutMetricsMetric | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MetricName': obj.metricName,
    'AggregationFunction': obj.aggregationFunction,
    'Namespace': obj.namespace,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsTimestampColumn
 */
export interface LookoutMetricsTimestampColumn {
  /**
   * @schema LookoutMetricsTimestampColumn#ColumnName
   */
  readonly columnName?: string;

  /**
   * @schema LookoutMetricsTimestampColumn#ColumnFormat
   */
  readonly columnFormat?: string;

}

/**
 * Converts an object of type 'LookoutMetricsTimestampColumn' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsTimestampColumn(obj: LookoutMetricsTimestampColumn | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ColumnName': obj.columnName,
    'ColumnFormat': obj.columnFormat,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsMetricSource
 */
export interface LookoutMetricsMetricSource {
  /**
   * @schema LookoutMetricsMetricSource#S3SourceConfig
   */
  readonly s3SourceConfig?: LookoutMetricsS3SourceConfig;

  /**
   * @schema LookoutMetricsMetricSource#AppFlowConfig
   */
  readonly appFlowConfig?: LookoutMetricsAppFlowConfig;

  /**
   * @schema LookoutMetricsMetricSource#CloudWatchConfig
   */
  readonly cloudWatchConfig?: LookoutMetricsCloudWatchConfig;

  /**
   * @schema LookoutMetricsMetricSource#RDSSourceConfig
   */
  readonly rdsSourceConfig?: LookoutMetricsRdsSourceConfig;

  /**
   * @schema LookoutMetricsMetricSource#RedshiftSourceConfig
   */
  readonly redshiftSourceConfig?: LookoutMetricsRedshiftSourceConfig;

}

/**
 * Converts an object of type 'LookoutMetricsMetricSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsMetricSource(obj: LookoutMetricsMetricSource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S3SourceConfig': toJson_LookoutMetricsS3SourceConfig(obj.s3SourceConfig),
    'AppFlowConfig': toJson_LookoutMetricsAppFlowConfig(obj.appFlowConfig),
    'CloudWatchConfig': toJson_LookoutMetricsCloudWatchConfig(obj.cloudWatchConfig),
    'RDSSourceConfig': toJson_LookoutMetricsRdsSourceConfig(obj.rdsSourceConfig),
    'RedshiftSourceConfig': toJson_LookoutMetricsRedshiftSourceConfig(obj.redshiftSourceConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsAlert
 */
export interface LookoutMetricsAlert {
  /**
   * @schema LookoutMetricsAlert#Action
   */
  readonly action?: LookoutMetricsAction;

  /**
   * @schema LookoutMetricsAlert#AlertDescription
   */
  readonly alertDescription?: string;

  /**
   * @schema LookoutMetricsAlert#AlertArn
   */
  readonly alertArn?: string;

  /**
   * @schema LookoutMetricsAlert#AnomalyDetectorArn
   */
  readonly anomalyDetectorArn?: string;

  /**
   * @schema LookoutMetricsAlert#AlertName
   */
  readonly alertName?: string;

  /**
   * @schema LookoutMetricsAlert#AlertSensitivityThreshold
   */
  readonly alertSensitivityThreshold?: number;

  /**
   * @schema LookoutMetricsAlert#AlertType
   */
  readonly alertType?: string;

  /**
   * @schema LookoutMetricsAlert#AlertStatus
   */
  readonly alertStatus?: string;

  /**
   * @schema LookoutMetricsAlert#LastModificationTime
   */
  readonly lastModificationTime?: string;

  /**
   * @schema LookoutMetricsAlert#CreationTime
   */
  readonly creationTime?: string;

}

/**
 * Converts an object of type 'LookoutMetricsAlert' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsAlert(obj: LookoutMetricsAlert | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Action': toJson_LookoutMetricsAction(obj.action),
    'AlertDescription': obj.alertDescription,
    'AlertArn': obj.alertArn,
    'AnomalyDetectorArn': obj.anomalyDetectorArn,
    'AlertName': obj.alertName,
    'AlertSensitivityThreshold': obj.alertSensitivityThreshold,
    'AlertType': obj.alertType,
    'AlertStatus': obj.alertStatus,
    'LastModificationTime': obj.lastModificationTime,
    'CreationTime': obj.creationTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsExecutionStatus
 */
export interface LookoutMetricsExecutionStatus {
  /**
   * @schema LookoutMetricsExecutionStatus#Timestamp
   */
  readonly timestamp?: string;

  /**
   * @schema LookoutMetricsExecutionStatus#Status
   */
  readonly status?: string;

  /**
   * @schema LookoutMetricsExecutionStatus#FailureReason
   */
  readonly failureReason?: string;

}

/**
 * Converts an object of type 'LookoutMetricsExecutionStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsExecutionStatus(obj: LookoutMetricsExecutionStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Timestamp': obj.timestamp,
    'Status': obj.status,
    'FailureReason': obj.failureReason,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsAnomalyDetectorConfigSummary
 */
export interface LookoutMetricsAnomalyDetectorConfigSummary {
  /**
   * @schema LookoutMetricsAnomalyDetectorConfigSummary#AnomalyDetectorFrequency
   */
  readonly anomalyDetectorFrequency?: string;

}

/**
 * Converts an object of type 'LookoutMetricsAnomalyDetectorConfigSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsAnomalyDetectorConfigSummary(obj: LookoutMetricsAnomalyDetectorConfigSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AnomalyDetectorFrequency': obj.anomalyDetectorFrequency,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsAnomalyGroup
 */
export interface LookoutMetricsAnomalyGroup {
  /**
   * @schema LookoutMetricsAnomalyGroup#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema LookoutMetricsAnomalyGroup#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema LookoutMetricsAnomalyGroup#AnomalyGroupId
   */
  readonly anomalyGroupId?: string;

  /**
   * @schema LookoutMetricsAnomalyGroup#AnomalyGroupScore
   */
  readonly anomalyGroupScore?: number;

  /**
   * @schema LookoutMetricsAnomalyGroup#PrimaryMetricName
   */
  readonly primaryMetricName?: string;

  /**
   * @schema LookoutMetricsAnomalyGroup#MetricLevelImpactList
   */
  readonly metricLevelImpactList?: LookoutMetricsMetricLevelImpact[];

}

/**
 * Converts an object of type 'LookoutMetricsAnomalyGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsAnomalyGroup(obj: LookoutMetricsAnomalyGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
    'AnomalyGroupId': obj.anomalyGroupId,
    'AnomalyGroupScore': obj.anomalyGroupScore,
    'PrimaryMetricName': obj.primaryMetricName,
    'MetricLevelImpactList': obj.metricLevelImpactList?.map(y => toJson_LookoutMetricsMetricLevelImpact(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsAnomalyGroupTimeSeries
 */
export interface LookoutMetricsAnomalyGroupTimeSeries {
  /**
   * @schema LookoutMetricsAnomalyGroupTimeSeries#AnomalyGroupId
   */
  readonly anomalyGroupId?: string;

  /**
   * @schema LookoutMetricsAnomalyGroupTimeSeries#TimeSeriesId
   */
  readonly timeSeriesId?: string;

}

/**
 * Converts an object of type 'LookoutMetricsAnomalyGroupTimeSeries' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsAnomalyGroupTimeSeries(obj: LookoutMetricsAnomalyGroupTimeSeries | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AnomalyGroupId': obj.anomalyGroupId,
    'TimeSeriesId': obj.timeSeriesId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsTimeSeriesFeedback
 */
export interface LookoutMetricsTimeSeriesFeedback {
  /**
   * @schema LookoutMetricsTimeSeriesFeedback#TimeSeriesId
   */
  readonly timeSeriesId?: string;

  /**
   * @schema LookoutMetricsTimeSeriesFeedback#IsAnomaly
   */
  readonly isAnomaly?: boolean;

}

/**
 * Converts an object of type 'LookoutMetricsTimeSeriesFeedback' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsTimeSeriesFeedback(obj: LookoutMetricsTimeSeriesFeedback | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TimeSeriesId': obj.timeSeriesId,
    'IsAnomaly': obj.isAnomaly,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsSampleDataS3SourceConfig
 */
export interface LookoutMetricsSampleDataS3SourceConfig {
  /**
   * @schema LookoutMetricsSampleDataS3SourceConfig#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema LookoutMetricsSampleDataS3SourceConfig#TemplatedPathList
   */
  readonly templatedPathList?: string[];

  /**
   * @schema LookoutMetricsSampleDataS3SourceConfig#HistoricalDataPathList
   */
  readonly historicalDataPathList?: string[];

  /**
   * @schema LookoutMetricsSampleDataS3SourceConfig#FileFormatDescriptor
   */
  readonly fileFormatDescriptor?: LookoutMetricsFileFormatDescriptor;

}

/**
 * Converts an object of type 'LookoutMetricsSampleDataS3SourceConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsSampleDataS3SourceConfig(obj: LookoutMetricsSampleDataS3SourceConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoleArn': obj.roleArn,
    'TemplatedPathList': obj.templatedPathList?.map(y => y),
    'HistoricalDataPathList': obj.historicalDataPathList?.map(y => y),
    'FileFormatDescriptor': toJson_LookoutMetricsFileFormatDescriptor(obj.fileFormatDescriptor),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsAlertSummary
 */
export interface LookoutMetricsAlertSummary {
  /**
   * @schema LookoutMetricsAlertSummary#AlertArn
   */
  readonly alertArn?: string;

  /**
   * @schema LookoutMetricsAlertSummary#AnomalyDetectorArn
   */
  readonly anomalyDetectorArn?: string;

  /**
   * @schema LookoutMetricsAlertSummary#AlertName
   */
  readonly alertName?: string;

  /**
   * @schema LookoutMetricsAlertSummary#AlertSensitivityThreshold
   */
  readonly alertSensitivityThreshold?: number;

  /**
   * @schema LookoutMetricsAlertSummary#AlertType
   */
  readonly alertType?: string;

  /**
   * @schema LookoutMetricsAlertSummary#AlertStatus
   */
  readonly alertStatus?: string;

  /**
   * @schema LookoutMetricsAlertSummary#LastModificationTime
   */
  readonly lastModificationTime?: string;

  /**
   * @schema LookoutMetricsAlertSummary#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema LookoutMetricsAlertSummary#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'LookoutMetricsAlertSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsAlertSummary(obj: LookoutMetricsAlertSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AlertArn': obj.alertArn,
    'AnomalyDetectorArn': obj.anomalyDetectorArn,
    'AlertName': obj.alertName,
    'AlertSensitivityThreshold': obj.alertSensitivityThreshold,
    'AlertType': obj.alertType,
    'AlertStatus': obj.alertStatus,
    'LastModificationTime': obj.lastModificationTime,
    'CreationTime': obj.creationTime,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsAnomalyDetectorSummary
 */
export interface LookoutMetricsAnomalyDetectorSummary {
  /**
   * @schema LookoutMetricsAnomalyDetectorSummary#AnomalyDetectorArn
   */
  readonly anomalyDetectorArn?: string;

  /**
   * @schema LookoutMetricsAnomalyDetectorSummary#AnomalyDetectorName
   */
  readonly anomalyDetectorName?: string;

  /**
   * @schema LookoutMetricsAnomalyDetectorSummary#AnomalyDetectorDescription
   */
  readonly anomalyDetectorDescription?: string;

  /**
   * @schema LookoutMetricsAnomalyDetectorSummary#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema LookoutMetricsAnomalyDetectorSummary#LastModificationTime
   */
  readonly lastModificationTime?: string;

  /**
   * @schema LookoutMetricsAnomalyDetectorSummary#Status
   */
  readonly status?: string;

  /**
   * @schema LookoutMetricsAnomalyDetectorSummary#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'LookoutMetricsAnomalyDetectorSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsAnomalyDetectorSummary(obj: LookoutMetricsAnomalyDetectorSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AnomalyDetectorArn': obj.anomalyDetectorArn,
    'AnomalyDetectorName': obj.anomalyDetectorName,
    'AnomalyDetectorDescription': obj.anomalyDetectorDescription,
    'CreationTime': obj.creationTime,
    'LastModificationTime': obj.lastModificationTime,
    'Status': obj.status,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsAnomalyGroupSummary
 */
export interface LookoutMetricsAnomalyGroupSummary {
  /**
   * @schema LookoutMetricsAnomalyGroupSummary#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema LookoutMetricsAnomalyGroupSummary#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema LookoutMetricsAnomalyGroupSummary#AnomalyGroupId
   */
  readonly anomalyGroupId?: string;

  /**
   * @schema LookoutMetricsAnomalyGroupSummary#AnomalyGroupScore
   */
  readonly anomalyGroupScore?: number;

  /**
   * @schema LookoutMetricsAnomalyGroupSummary#PrimaryMetricName
   */
  readonly primaryMetricName?: string;

}

/**
 * Converts an object of type 'LookoutMetricsAnomalyGroupSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsAnomalyGroupSummary(obj: LookoutMetricsAnomalyGroupSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
    'AnomalyGroupId': obj.anomalyGroupId,
    'AnomalyGroupScore': obj.anomalyGroupScore,
    'PrimaryMetricName': obj.primaryMetricName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsAnomalyGroupStatistics
 */
export interface LookoutMetricsAnomalyGroupStatistics {
  /**
   * @schema LookoutMetricsAnomalyGroupStatistics#EvaluationStartDate
   */
  readonly evaluationStartDate?: string;

  /**
   * @schema LookoutMetricsAnomalyGroupStatistics#TotalCount
   */
  readonly totalCount?: number;

  /**
   * @schema LookoutMetricsAnomalyGroupStatistics#ItemizedMetricStatsList
   */
  readonly itemizedMetricStatsList?: LookoutMetricsItemizedMetricStats[];

}

/**
 * Converts an object of type 'LookoutMetricsAnomalyGroupStatistics' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsAnomalyGroupStatistics(obj: LookoutMetricsAnomalyGroupStatistics | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EvaluationStartDate': obj.evaluationStartDate,
    'TotalCount': obj.totalCount,
    'ItemizedMetricStatsList': obj.itemizedMetricStatsList?.map(y => toJson_LookoutMetricsItemizedMetricStats(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsTimeSeries
 */
export interface LookoutMetricsTimeSeries {
  /**
   * @schema LookoutMetricsTimeSeries#TimeSeriesId
   */
  readonly timeSeriesId?: string;

  /**
   * @schema LookoutMetricsTimeSeries#DimensionList
   */
  readonly dimensionList?: LookoutMetricsDimensionNameValue[];

  /**
   * @schema LookoutMetricsTimeSeries#MetricValueList
   */
  readonly metricValueList?: number[];

}

/**
 * Converts an object of type 'LookoutMetricsTimeSeries' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsTimeSeries(obj: LookoutMetricsTimeSeries | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TimeSeriesId': obj.timeSeriesId,
    'DimensionList': obj.dimensionList?.map(y => toJson_LookoutMetricsDimensionNameValue(y)),
    'MetricValueList': obj.metricValueList?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsMetricSetSummary
 */
export interface LookoutMetricsMetricSetSummary {
  /**
   * @schema LookoutMetricsMetricSetSummary#MetricSetArn
   */
  readonly metricSetArn?: string;

  /**
   * @schema LookoutMetricsMetricSetSummary#AnomalyDetectorArn
   */
  readonly anomalyDetectorArn?: string;

  /**
   * @schema LookoutMetricsMetricSetSummary#MetricSetDescription
   */
  readonly metricSetDescription?: string;

  /**
   * @schema LookoutMetricsMetricSetSummary#MetricSetName
   */
  readonly metricSetName?: string;

  /**
   * @schema LookoutMetricsMetricSetSummary#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema LookoutMetricsMetricSetSummary#LastModificationTime
   */
  readonly lastModificationTime?: string;

  /**
   * @schema LookoutMetricsMetricSetSummary#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'LookoutMetricsMetricSetSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsMetricSetSummary(obj: LookoutMetricsMetricSetSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MetricSetArn': obj.metricSetArn,
    'AnomalyDetectorArn': obj.anomalyDetectorArn,
    'MetricSetDescription': obj.metricSetDescription,
    'MetricSetName': obj.metricSetName,
    'CreationTime': obj.creationTime,
    'LastModificationTime': obj.lastModificationTime,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsAnomalyGroupTimeSeriesFeedback
 */
export interface LookoutMetricsAnomalyGroupTimeSeriesFeedback {
  /**
   * @schema LookoutMetricsAnomalyGroupTimeSeriesFeedback#AnomalyGroupId
   */
  readonly anomalyGroupId?: string;

  /**
   * @schema LookoutMetricsAnomalyGroupTimeSeriesFeedback#TimeSeriesId
   */
  readonly timeSeriesId?: string;

  /**
   * @schema LookoutMetricsAnomalyGroupTimeSeriesFeedback#IsAnomaly
   */
  readonly isAnomaly?: boolean;

}

/**
 * Converts an object of type 'LookoutMetricsAnomalyGroupTimeSeriesFeedback' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsAnomalyGroupTimeSeriesFeedback(obj: LookoutMetricsAnomalyGroupTimeSeriesFeedback | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AnomalyGroupId': obj.anomalyGroupId,
    'TimeSeriesId': obj.timeSeriesId,
    'IsAnomaly': obj.isAnomaly,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsSnsConfiguration
 */
export interface LookoutMetricsSnsConfiguration {
  /**
   * @schema LookoutMetricsSnsConfiguration#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema LookoutMetricsSnsConfiguration#SnsTopicArn
   */
  readonly snsTopicArn?: string;

}

/**
 * Converts an object of type 'LookoutMetricsSnsConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsSnsConfiguration(obj: LookoutMetricsSnsConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoleArn': obj.roleArn,
    'SnsTopicArn': obj.snsTopicArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsLambdaConfiguration
 */
export interface LookoutMetricsLambdaConfiguration {
  /**
   * @schema LookoutMetricsLambdaConfiguration#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema LookoutMetricsLambdaConfiguration#LambdaArn
   */
  readonly lambdaArn?: string;

}

/**
 * Converts an object of type 'LookoutMetricsLambdaConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsLambdaConfiguration(obj: LookoutMetricsLambdaConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoleArn': obj.roleArn,
    'LambdaArn': obj.lambdaArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsS3SourceConfig
 */
export interface LookoutMetricsS3SourceConfig {
  /**
   * @schema LookoutMetricsS3SourceConfig#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema LookoutMetricsS3SourceConfig#TemplatedPathList
   */
  readonly templatedPathList?: string[];

  /**
   * @schema LookoutMetricsS3SourceConfig#HistoricalDataPathList
   */
  readonly historicalDataPathList?: string[];

  /**
   * @schema LookoutMetricsS3SourceConfig#FileFormatDescriptor
   */
  readonly fileFormatDescriptor?: LookoutMetricsFileFormatDescriptor;

}

/**
 * Converts an object of type 'LookoutMetricsS3SourceConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsS3SourceConfig(obj: LookoutMetricsS3SourceConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoleArn': obj.roleArn,
    'TemplatedPathList': obj.templatedPathList?.map(y => y),
    'HistoricalDataPathList': obj.historicalDataPathList?.map(y => y),
    'FileFormatDescriptor': toJson_LookoutMetricsFileFormatDescriptor(obj.fileFormatDescriptor),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsAppFlowConfig
 */
export interface LookoutMetricsAppFlowConfig {
  /**
   * @schema LookoutMetricsAppFlowConfig#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema LookoutMetricsAppFlowConfig#FlowName
   */
  readonly flowName?: string;

}

/**
 * Converts an object of type 'LookoutMetricsAppFlowConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsAppFlowConfig(obj: LookoutMetricsAppFlowConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoleArn': obj.roleArn,
    'FlowName': obj.flowName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsCloudWatchConfig
 */
export interface LookoutMetricsCloudWatchConfig {
  /**
   * @schema LookoutMetricsCloudWatchConfig#RoleArn
   */
  readonly roleArn?: string;

}

/**
 * Converts an object of type 'LookoutMetricsCloudWatchConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsCloudWatchConfig(obj: LookoutMetricsCloudWatchConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoleArn': obj.roleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsRdsSourceConfig
 */
export interface LookoutMetricsRdsSourceConfig {
  /**
   * @schema LookoutMetricsRdsSourceConfig#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema LookoutMetricsRdsSourceConfig#DatabaseHost
   */
  readonly databaseHost?: string;

  /**
   * @schema LookoutMetricsRdsSourceConfig#DatabasePort
   */
  readonly databasePort?: number;

  /**
   * @schema LookoutMetricsRdsSourceConfig#SecretManagerArn
   */
  readonly secretManagerArn?: string;

  /**
   * @schema LookoutMetricsRdsSourceConfig#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema LookoutMetricsRdsSourceConfig#TableName
   */
  readonly tableName?: string;

  /**
   * @schema LookoutMetricsRdsSourceConfig#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema LookoutMetricsRdsSourceConfig#VpcConfiguration
   */
  readonly vpcConfiguration?: LookoutMetricsVpcConfiguration;

}

/**
 * Converts an object of type 'LookoutMetricsRdsSourceConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsRdsSourceConfig(obj: LookoutMetricsRdsSourceConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBInstanceIdentifier': obj.dbInstanceIdentifier,
    'DatabaseHost': obj.databaseHost,
    'DatabasePort': obj.databasePort,
    'SecretManagerArn': obj.secretManagerArn,
    'DatabaseName': obj.databaseName,
    'TableName': obj.tableName,
    'RoleArn': obj.roleArn,
    'VpcConfiguration': toJson_LookoutMetricsVpcConfiguration(obj.vpcConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsRedshiftSourceConfig
 */
export interface LookoutMetricsRedshiftSourceConfig {
  /**
   * @schema LookoutMetricsRedshiftSourceConfig#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema LookoutMetricsRedshiftSourceConfig#DatabaseHost
   */
  readonly databaseHost?: string;

  /**
   * @schema LookoutMetricsRedshiftSourceConfig#DatabasePort
   */
  readonly databasePort?: number;

  /**
   * @schema LookoutMetricsRedshiftSourceConfig#SecretManagerArn
   */
  readonly secretManagerArn?: string;

  /**
   * @schema LookoutMetricsRedshiftSourceConfig#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema LookoutMetricsRedshiftSourceConfig#TableName
   */
  readonly tableName?: string;

  /**
   * @schema LookoutMetricsRedshiftSourceConfig#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema LookoutMetricsRedshiftSourceConfig#VpcConfiguration
   */
  readonly vpcConfiguration?: LookoutMetricsVpcConfiguration;

}

/**
 * Converts an object of type 'LookoutMetricsRedshiftSourceConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsRedshiftSourceConfig(obj: LookoutMetricsRedshiftSourceConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterIdentifier': obj.clusterIdentifier,
    'DatabaseHost': obj.databaseHost,
    'DatabasePort': obj.databasePort,
    'SecretManagerArn': obj.secretManagerArn,
    'DatabaseName': obj.databaseName,
    'TableName': obj.tableName,
    'RoleArn': obj.roleArn,
    'VpcConfiguration': toJson_LookoutMetricsVpcConfiguration(obj.vpcConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsMetricLevelImpact
 */
export interface LookoutMetricsMetricLevelImpact {
  /**
   * @schema LookoutMetricsMetricLevelImpact#MetricName
   */
  readonly metricName?: string;

  /**
   * @schema LookoutMetricsMetricLevelImpact#NumTimeSeries
   */
  readonly numTimeSeries?: number;

  /**
   * @schema LookoutMetricsMetricLevelImpact#ContributionMatrix
   */
  readonly contributionMatrix?: LookoutMetricsContributionMatrix;

}

/**
 * Converts an object of type 'LookoutMetricsMetricLevelImpact' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsMetricLevelImpact(obj: LookoutMetricsMetricLevelImpact | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MetricName': obj.metricName,
    'NumTimeSeries': obj.numTimeSeries,
    'ContributionMatrix': toJson_LookoutMetricsContributionMatrix(obj.contributionMatrix),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsFileFormatDescriptor
 */
export interface LookoutMetricsFileFormatDescriptor {
  /**
   * @schema LookoutMetricsFileFormatDescriptor#CsvFormatDescriptor
   */
  readonly csvFormatDescriptor?: LookoutMetricsCsvFormatDescriptor;

  /**
   * @schema LookoutMetricsFileFormatDescriptor#JsonFormatDescriptor
   */
  readonly jsonFormatDescriptor?: LookoutMetricsJsonFormatDescriptor;

}

/**
 * Converts an object of type 'LookoutMetricsFileFormatDescriptor' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsFileFormatDescriptor(obj: LookoutMetricsFileFormatDescriptor | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CsvFormatDescriptor': toJson_LookoutMetricsCsvFormatDescriptor(obj.csvFormatDescriptor),
    'JsonFormatDescriptor': toJson_LookoutMetricsJsonFormatDescriptor(obj.jsonFormatDescriptor),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsItemizedMetricStats
 */
export interface LookoutMetricsItemizedMetricStats {
  /**
   * @schema LookoutMetricsItemizedMetricStats#MetricName
   */
  readonly metricName?: string;

  /**
   * @schema LookoutMetricsItemizedMetricStats#OccurrenceCount
   */
  readonly occurrenceCount?: number;

}

/**
 * Converts an object of type 'LookoutMetricsItemizedMetricStats' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsItemizedMetricStats(obj: LookoutMetricsItemizedMetricStats | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MetricName': obj.metricName,
    'OccurrenceCount': obj.occurrenceCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsDimensionNameValue
 */
export interface LookoutMetricsDimensionNameValue {
  /**
   * @schema LookoutMetricsDimensionNameValue#DimensionName
   */
  readonly dimensionName?: string;

  /**
   * @schema LookoutMetricsDimensionNameValue#DimensionValue
   */
  readonly dimensionValue?: string;

}

/**
 * Converts an object of type 'LookoutMetricsDimensionNameValue' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsDimensionNameValue(obj: LookoutMetricsDimensionNameValue | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DimensionName': obj.dimensionName,
    'DimensionValue': obj.dimensionValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsVpcConfiguration
 */
export interface LookoutMetricsVpcConfiguration {
  /**
   * @schema LookoutMetricsVpcConfiguration#SubnetIdList
   */
  readonly subnetIdList?: string[];

  /**
   * @schema LookoutMetricsVpcConfiguration#SecurityGroupIdList
   */
  readonly securityGroupIdList?: string[];

}

/**
 * Converts an object of type 'LookoutMetricsVpcConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsVpcConfiguration(obj: LookoutMetricsVpcConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SubnetIdList': obj.subnetIdList?.map(y => y),
    'SecurityGroupIdList': obj.securityGroupIdList?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsContributionMatrix
 */
export interface LookoutMetricsContributionMatrix {
  /**
   * @schema LookoutMetricsContributionMatrix#DimensionContributionList
   */
  readonly dimensionContributionList?: LookoutMetricsDimensionContribution[];

}

/**
 * Converts an object of type 'LookoutMetricsContributionMatrix' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsContributionMatrix(obj: LookoutMetricsContributionMatrix | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DimensionContributionList': obj.dimensionContributionList?.map(y => toJson_LookoutMetricsDimensionContribution(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsCsvFormatDescriptor
 */
export interface LookoutMetricsCsvFormatDescriptor {
  /**
   * @schema LookoutMetricsCsvFormatDescriptor#FileCompression
   */
  readonly fileCompression?: string;

  /**
   * @schema LookoutMetricsCsvFormatDescriptor#Charset
   */
  readonly charset?: string;

  /**
   * @schema LookoutMetricsCsvFormatDescriptor#ContainsHeader
   */
  readonly containsHeader?: boolean;

  /**
   * @schema LookoutMetricsCsvFormatDescriptor#Delimiter
   */
  readonly delimiter?: string;

  /**
   * @schema LookoutMetricsCsvFormatDescriptor#HeaderList
   */
  readonly headerList?: string[];

  /**
   * @schema LookoutMetricsCsvFormatDescriptor#QuoteSymbol
   */
  readonly quoteSymbol?: string;

}

/**
 * Converts an object of type 'LookoutMetricsCsvFormatDescriptor' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsCsvFormatDescriptor(obj: LookoutMetricsCsvFormatDescriptor | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FileCompression': obj.fileCompression,
    'Charset': obj.charset,
    'ContainsHeader': obj.containsHeader,
    'Delimiter': obj.delimiter,
    'HeaderList': obj.headerList?.map(y => y),
    'QuoteSymbol': obj.quoteSymbol,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsJsonFormatDescriptor
 */
export interface LookoutMetricsJsonFormatDescriptor {
  /**
   * @schema LookoutMetricsJsonFormatDescriptor#FileCompression
   */
  readonly fileCompression?: string;

  /**
   * @schema LookoutMetricsJsonFormatDescriptor#Charset
   */
  readonly charset?: string;

}

/**
 * Converts an object of type 'LookoutMetricsJsonFormatDescriptor' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsJsonFormatDescriptor(obj: LookoutMetricsJsonFormatDescriptor | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FileCompression': obj.fileCompression,
    'Charset': obj.charset,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsDimensionContribution
 */
export interface LookoutMetricsDimensionContribution {
  /**
   * @schema LookoutMetricsDimensionContribution#DimensionName
   */
  readonly dimensionName?: string;

  /**
   * @schema LookoutMetricsDimensionContribution#DimensionValueContributionList
   */
  readonly dimensionValueContributionList?: LookoutMetricsDimensionValueContribution[];

}

/**
 * Converts an object of type 'LookoutMetricsDimensionContribution' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsDimensionContribution(obj: LookoutMetricsDimensionContribution | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DimensionName': obj.dimensionName,
    'DimensionValueContributionList': obj.dimensionValueContributionList?.map(y => toJson_LookoutMetricsDimensionValueContribution(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutMetricsDimensionValueContribution
 */
export interface LookoutMetricsDimensionValueContribution {
  /**
   * @schema LookoutMetricsDimensionValueContribution#DimensionValue
   */
  readonly dimensionValue?: string;

  /**
   * @schema LookoutMetricsDimensionValueContribution#ContributionScore
   */
  readonly contributionScore?: number;

}

/**
 * Converts an object of type 'LookoutMetricsDimensionValueContribution' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutMetricsDimensionValueContribution(obj: LookoutMetricsDimensionValueContribution | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DimensionValue': obj.dimensionValue,
    'ContributionScore': obj.contributionScore,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
