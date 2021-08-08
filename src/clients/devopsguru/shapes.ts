/**
 * @schema DevOpsGuruAddNotificationChannelRequest
 */
export interface DevOpsGuruAddNotificationChannelRequest {
  /**
   * @schema DevOpsGuruAddNotificationChannelRequest#Config
   */
  readonly config?: DevOpsGuruNotificationChannelConfig;

}

/**
 * Converts an object of type 'DevOpsGuruAddNotificationChannelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruAddNotificationChannelRequest(obj: DevOpsGuruAddNotificationChannelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Config': toJson_DevOpsGuruNotificationChannelConfig(obj.config),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruAddNotificationChannelResponse
 */
export interface DevOpsGuruAddNotificationChannelResponse {
  /**
   * @schema DevOpsGuruAddNotificationChannelResponse#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'DevOpsGuruAddNotificationChannelResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruAddNotificationChannelResponse(obj: DevOpsGuruAddNotificationChannelResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruDescribeAccountHealthRequest
 */
export interface DevOpsGuruDescribeAccountHealthRequest {
}

/**
 * Converts an object of type 'DevOpsGuruDescribeAccountHealthRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruDescribeAccountHealthRequest(obj: DevOpsGuruDescribeAccountHealthRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruDescribeAccountHealthResponse
 */
export interface DevOpsGuruDescribeAccountHealthResponse {
  /**
   * @schema DevOpsGuruDescribeAccountHealthResponse#OpenReactiveInsights
   */
  readonly openReactiveInsights?: number;

  /**
   * @schema DevOpsGuruDescribeAccountHealthResponse#OpenProactiveInsights
   */
  readonly openProactiveInsights?: number;

  /**
   * @schema DevOpsGuruDescribeAccountHealthResponse#MetricsAnalyzed
   */
  readonly metricsAnalyzed?: number;

  /**
   * @schema DevOpsGuruDescribeAccountHealthResponse#ResourceHours
   */
  readonly resourceHours?: number;

}

/**
 * Converts an object of type 'DevOpsGuruDescribeAccountHealthResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruDescribeAccountHealthResponse(obj: DevOpsGuruDescribeAccountHealthResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OpenReactiveInsights': obj.openReactiveInsights,
    'OpenProactiveInsights': obj.openProactiveInsights,
    'MetricsAnalyzed': obj.metricsAnalyzed,
    'ResourceHours': obj.resourceHours,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruDescribeAccountOverviewRequest
 */
export interface DevOpsGuruDescribeAccountOverviewRequest {
  /**
   * @schema DevOpsGuruDescribeAccountOverviewRequest#FromTime
   */
  readonly fromTime?: string;

  /**
   * @schema DevOpsGuruDescribeAccountOverviewRequest#ToTime
   */
  readonly toTime?: string;

}

/**
 * Converts an object of type 'DevOpsGuruDescribeAccountOverviewRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruDescribeAccountOverviewRequest(obj: DevOpsGuruDescribeAccountOverviewRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FromTime': obj.fromTime,
    'ToTime': obj.toTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruDescribeAccountOverviewResponse
 */
export interface DevOpsGuruDescribeAccountOverviewResponse {
  /**
   * @schema DevOpsGuruDescribeAccountOverviewResponse#ReactiveInsights
   */
  readonly reactiveInsights?: number;

  /**
   * @schema DevOpsGuruDescribeAccountOverviewResponse#ProactiveInsights
   */
  readonly proactiveInsights?: number;

  /**
   * @schema DevOpsGuruDescribeAccountOverviewResponse#MeanTimeToRecoverInMilliseconds
   */
  readonly meanTimeToRecoverInMilliseconds?: number;

}

/**
 * Converts an object of type 'DevOpsGuruDescribeAccountOverviewResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruDescribeAccountOverviewResponse(obj: DevOpsGuruDescribeAccountOverviewResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReactiveInsights': obj.reactiveInsights,
    'ProactiveInsights': obj.proactiveInsights,
    'MeanTimeToRecoverInMilliseconds': obj.meanTimeToRecoverInMilliseconds,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruDescribeAnomalyRequest
 */
export interface DevOpsGuruDescribeAnomalyRequest {
  /**
   * @schema DevOpsGuruDescribeAnomalyRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'DevOpsGuruDescribeAnomalyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruDescribeAnomalyRequest(obj: DevOpsGuruDescribeAnomalyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruDescribeAnomalyResponse
 */
export interface DevOpsGuruDescribeAnomalyResponse {
  /**
   * @schema DevOpsGuruDescribeAnomalyResponse#ProactiveAnomaly
   */
  readonly proactiveAnomaly?: DevOpsGuruProactiveAnomaly;

  /**
   * @schema DevOpsGuruDescribeAnomalyResponse#ReactiveAnomaly
   */
  readonly reactiveAnomaly?: DevOpsGuruReactiveAnomaly;

}

/**
 * Converts an object of type 'DevOpsGuruDescribeAnomalyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruDescribeAnomalyResponse(obj: DevOpsGuruDescribeAnomalyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProactiveAnomaly': toJson_DevOpsGuruProactiveAnomaly(obj.proactiveAnomaly),
    'ReactiveAnomaly': toJson_DevOpsGuruReactiveAnomaly(obj.reactiveAnomaly),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruDescribeFeedbackRequest
 */
export interface DevOpsGuruDescribeFeedbackRequest {
  /**
   * @schema DevOpsGuruDescribeFeedbackRequest#InsightId
   */
  readonly insightId?: string;

}

/**
 * Converts an object of type 'DevOpsGuruDescribeFeedbackRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruDescribeFeedbackRequest(obj: DevOpsGuruDescribeFeedbackRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InsightId': obj.insightId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruDescribeFeedbackResponse
 */
export interface DevOpsGuruDescribeFeedbackResponse {
  /**
   * @schema DevOpsGuruDescribeFeedbackResponse#InsightFeedback
   */
  readonly insightFeedback?: DevOpsGuruInsightFeedback;

}

/**
 * Converts an object of type 'DevOpsGuruDescribeFeedbackResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruDescribeFeedbackResponse(obj: DevOpsGuruDescribeFeedbackResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InsightFeedback': toJson_DevOpsGuruInsightFeedback(obj.insightFeedback),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruDescribeInsightRequest
 */
export interface DevOpsGuruDescribeInsightRequest {
  /**
   * @schema DevOpsGuruDescribeInsightRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'DevOpsGuruDescribeInsightRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruDescribeInsightRequest(obj: DevOpsGuruDescribeInsightRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruDescribeInsightResponse
 */
export interface DevOpsGuruDescribeInsightResponse {
  /**
   * @schema DevOpsGuruDescribeInsightResponse#ProactiveInsight
   */
  readonly proactiveInsight?: DevOpsGuruProactiveInsight;

  /**
   * @schema DevOpsGuruDescribeInsightResponse#ReactiveInsight
   */
  readonly reactiveInsight?: DevOpsGuruReactiveInsight;

}

/**
 * Converts an object of type 'DevOpsGuruDescribeInsightResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruDescribeInsightResponse(obj: DevOpsGuruDescribeInsightResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProactiveInsight': toJson_DevOpsGuruProactiveInsight(obj.proactiveInsight),
    'ReactiveInsight': toJson_DevOpsGuruReactiveInsight(obj.reactiveInsight),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruDescribeResourceCollectionHealthRequest
 */
export interface DevOpsGuruDescribeResourceCollectionHealthRequest {
  /**
   * @schema DevOpsGuruDescribeResourceCollectionHealthRequest#ResourceCollectionType
   */
  readonly resourceCollectionType?: string;

  /**
   * @schema DevOpsGuruDescribeResourceCollectionHealthRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DevOpsGuruDescribeResourceCollectionHealthRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruDescribeResourceCollectionHealthRequest(obj: DevOpsGuruDescribeResourceCollectionHealthRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceCollectionType': obj.resourceCollectionType,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruDescribeResourceCollectionHealthResponse
 */
export interface DevOpsGuruDescribeResourceCollectionHealthResponse {
  /**
   * @schema DevOpsGuruDescribeResourceCollectionHealthResponse#CloudFormation
   */
  readonly cloudFormation?: DevOpsGuruCloudFormationHealth[];

  /**
   * @schema DevOpsGuruDescribeResourceCollectionHealthResponse#Service
   */
  readonly service?: DevOpsGuruServiceHealth[];

  /**
   * @schema DevOpsGuruDescribeResourceCollectionHealthResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DevOpsGuruDescribeResourceCollectionHealthResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruDescribeResourceCollectionHealthResponse(obj: DevOpsGuruDescribeResourceCollectionHealthResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CloudFormation': obj.cloudFormation?.map(y => toJson_DevOpsGuruCloudFormationHealth(y)),
    'Service': obj.service?.map(y => toJson_DevOpsGuruServiceHealth(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruDescribeServiceIntegrationRequest
 */
export interface DevOpsGuruDescribeServiceIntegrationRequest {
}

/**
 * Converts an object of type 'DevOpsGuruDescribeServiceIntegrationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruDescribeServiceIntegrationRequest(obj: DevOpsGuruDescribeServiceIntegrationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruDescribeServiceIntegrationResponse
 */
export interface DevOpsGuruDescribeServiceIntegrationResponse {
  /**
   * @schema DevOpsGuruDescribeServiceIntegrationResponse#ServiceIntegration
   */
  readonly serviceIntegration?: DevOpsGuruServiceIntegrationConfig;

}

/**
 * Converts an object of type 'DevOpsGuruDescribeServiceIntegrationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruDescribeServiceIntegrationResponse(obj: DevOpsGuruDescribeServiceIntegrationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceIntegration': toJson_DevOpsGuruServiceIntegrationConfig(obj.serviceIntegration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruGetCostEstimationRequest
 */
export interface DevOpsGuruGetCostEstimationRequest {
  /**
   * @schema DevOpsGuruGetCostEstimationRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DevOpsGuruGetCostEstimationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruGetCostEstimationRequest(obj: DevOpsGuruGetCostEstimationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruGetCostEstimationResponse
 */
export interface DevOpsGuruGetCostEstimationResponse {
  /**
   * @schema DevOpsGuruGetCostEstimationResponse#ResourceCollection
   */
  readonly resourceCollection?: DevOpsGuruCostEstimationResourceCollectionFilter;

  /**
   * @schema DevOpsGuruGetCostEstimationResponse#Status
   */
  readonly status?: string;

  /**
   * @schema DevOpsGuruGetCostEstimationResponse#Costs
   */
  readonly costs?: DevOpsGuruServiceResourceCost[];

  /**
   * @schema DevOpsGuruGetCostEstimationResponse#TimeRange
   */
  readonly timeRange?: DevOpsGuruCostEstimationTimeRange;

  /**
   * @schema DevOpsGuruGetCostEstimationResponse#TotalCost
   */
  readonly totalCost?: number;

  /**
   * @schema DevOpsGuruGetCostEstimationResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DevOpsGuruGetCostEstimationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruGetCostEstimationResponse(obj: DevOpsGuruGetCostEstimationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceCollection': toJson_DevOpsGuruCostEstimationResourceCollectionFilter(obj.resourceCollection),
    'Status': obj.status,
    'Costs': obj.costs?.map(y => toJson_DevOpsGuruServiceResourceCost(y)),
    'TimeRange': toJson_DevOpsGuruCostEstimationTimeRange(obj.timeRange),
    'TotalCost': obj.totalCost,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruGetResourceCollectionRequest
 */
export interface DevOpsGuruGetResourceCollectionRequest {
  /**
   * @schema DevOpsGuruGetResourceCollectionRequest#ResourceCollectionType
   */
  readonly resourceCollectionType?: string;

  /**
   * @schema DevOpsGuruGetResourceCollectionRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DevOpsGuruGetResourceCollectionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruGetResourceCollectionRequest(obj: DevOpsGuruGetResourceCollectionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceCollectionType': obj.resourceCollectionType,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruGetResourceCollectionResponse
 */
export interface DevOpsGuruGetResourceCollectionResponse {
  /**
   * @schema DevOpsGuruGetResourceCollectionResponse#ResourceCollection
   */
  readonly resourceCollection?: DevOpsGuruResourceCollectionFilter;

  /**
   * @schema DevOpsGuruGetResourceCollectionResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DevOpsGuruGetResourceCollectionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruGetResourceCollectionResponse(obj: DevOpsGuruGetResourceCollectionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceCollection': toJson_DevOpsGuruResourceCollectionFilter(obj.resourceCollection),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruListAnomaliesForInsightRequest
 */
export interface DevOpsGuruListAnomaliesForInsightRequest {
  /**
   * @schema DevOpsGuruListAnomaliesForInsightRequest#InsightId
   */
  readonly insightId?: string;

  /**
   * @schema DevOpsGuruListAnomaliesForInsightRequest#StartTimeRange
   */
  readonly startTimeRange?: DevOpsGuruStartTimeRange;

  /**
   * @schema DevOpsGuruListAnomaliesForInsightRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DevOpsGuruListAnomaliesForInsightRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DevOpsGuruListAnomaliesForInsightRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruListAnomaliesForInsightRequest(obj: DevOpsGuruListAnomaliesForInsightRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InsightId': obj.insightId,
    'StartTimeRange': toJson_DevOpsGuruStartTimeRange(obj.startTimeRange),
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruListAnomaliesForInsightResponse
 */
export interface DevOpsGuruListAnomaliesForInsightResponse {
  /**
   * @schema DevOpsGuruListAnomaliesForInsightResponse#ProactiveAnomalies
   */
  readonly proactiveAnomalies?: DevOpsGuruProactiveAnomalySummary[];

  /**
   * @schema DevOpsGuruListAnomaliesForInsightResponse#ReactiveAnomalies
   */
  readonly reactiveAnomalies?: DevOpsGuruReactiveAnomalySummary[];

  /**
   * @schema DevOpsGuruListAnomaliesForInsightResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DevOpsGuruListAnomaliesForInsightResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruListAnomaliesForInsightResponse(obj: DevOpsGuruListAnomaliesForInsightResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProactiveAnomalies': obj.proactiveAnomalies?.map(y => toJson_DevOpsGuruProactiveAnomalySummary(y)),
    'ReactiveAnomalies': obj.reactiveAnomalies?.map(y => toJson_DevOpsGuruReactiveAnomalySummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruListEventsRequest
 */
export interface DevOpsGuruListEventsRequest {
  /**
   * @schema DevOpsGuruListEventsRequest#Filters
   */
  readonly filters?: DevOpsGuruListEventsFilters;

  /**
   * @schema DevOpsGuruListEventsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DevOpsGuruListEventsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DevOpsGuruListEventsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruListEventsRequest(obj: DevOpsGuruListEventsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Filters': toJson_DevOpsGuruListEventsFilters(obj.filters),
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruListEventsResponse
 */
export interface DevOpsGuruListEventsResponse {
  /**
   * @schema DevOpsGuruListEventsResponse#Events
   */
  readonly events?: DevOpsGuruEvent[];

  /**
   * @schema DevOpsGuruListEventsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DevOpsGuruListEventsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruListEventsResponse(obj: DevOpsGuruListEventsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Events': obj.events?.map(y => toJson_DevOpsGuruEvent(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruListInsightsRequest
 */
export interface DevOpsGuruListInsightsRequest {
  /**
   * @schema DevOpsGuruListInsightsRequest#StatusFilter
   */
  readonly statusFilter?: DevOpsGuruListInsightsStatusFilter;

  /**
   * @schema DevOpsGuruListInsightsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DevOpsGuruListInsightsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DevOpsGuruListInsightsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruListInsightsRequest(obj: DevOpsGuruListInsightsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StatusFilter': toJson_DevOpsGuruListInsightsStatusFilter(obj.statusFilter),
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruListInsightsResponse
 */
export interface DevOpsGuruListInsightsResponse {
  /**
   * @schema DevOpsGuruListInsightsResponse#ProactiveInsights
   */
  readonly proactiveInsights?: DevOpsGuruProactiveInsightSummary[];

  /**
   * @schema DevOpsGuruListInsightsResponse#ReactiveInsights
   */
  readonly reactiveInsights?: DevOpsGuruReactiveInsightSummary[];

  /**
   * @schema DevOpsGuruListInsightsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DevOpsGuruListInsightsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruListInsightsResponse(obj: DevOpsGuruListInsightsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProactiveInsights': obj.proactiveInsights?.map(y => toJson_DevOpsGuruProactiveInsightSummary(y)),
    'ReactiveInsights': obj.reactiveInsights?.map(y => toJson_DevOpsGuruReactiveInsightSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruListNotificationChannelsRequest
 */
export interface DevOpsGuruListNotificationChannelsRequest {
  /**
   * @schema DevOpsGuruListNotificationChannelsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DevOpsGuruListNotificationChannelsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruListNotificationChannelsRequest(obj: DevOpsGuruListNotificationChannelsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruListNotificationChannelsResponse
 */
export interface DevOpsGuruListNotificationChannelsResponse {
  /**
   * @schema DevOpsGuruListNotificationChannelsResponse#Channels
   */
  readonly channels?: DevOpsGuruNotificationChannel[];

  /**
   * @schema DevOpsGuruListNotificationChannelsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DevOpsGuruListNotificationChannelsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruListNotificationChannelsResponse(obj: DevOpsGuruListNotificationChannelsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Channels': obj.channels?.map(y => toJson_DevOpsGuruNotificationChannel(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruListRecommendationsRequest
 */
export interface DevOpsGuruListRecommendationsRequest {
  /**
   * @schema DevOpsGuruListRecommendationsRequest#InsightId
   */
  readonly insightId?: string;

  /**
   * @schema DevOpsGuruListRecommendationsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DevOpsGuruListRecommendationsRequest#Locale
   */
  readonly locale?: string;

}

/**
 * Converts an object of type 'DevOpsGuruListRecommendationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruListRecommendationsRequest(obj: DevOpsGuruListRecommendationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InsightId': obj.insightId,
    'NextToken': obj.nextToken,
    'Locale': obj.locale,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruListRecommendationsResponse
 */
export interface DevOpsGuruListRecommendationsResponse {
  /**
   * @schema DevOpsGuruListRecommendationsResponse#Recommendations
   */
  readonly recommendations?: DevOpsGuruRecommendation[];

  /**
   * @schema DevOpsGuruListRecommendationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DevOpsGuruListRecommendationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruListRecommendationsResponse(obj: DevOpsGuruListRecommendationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Recommendations': obj.recommendations?.map(y => toJson_DevOpsGuruRecommendation(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruPutFeedbackRequest
 */
export interface DevOpsGuruPutFeedbackRequest {
  /**
   * @schema DevOpsGuruPutFeedbackRequest#InsightFeedback
   */
  readonly insightFeedback?: DevOpsGuruInsightFeedback;

}

/**
 * Converts an object of type 'DevOpsGuruPutFeedbackRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruPutFeedbackRequest(obj: DevOpsGuruPutFeedbackRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InsightFeedback': toJson_DevOpsGuruInsightFeedback(obj.insightFeedback),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruPutFeedbackResponse
 */
export interface DevOpsGuruPutFeedbackResponse {
}

/**
 * Converts an object of type 'DevOpsGuruPutFeedbackResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruPutFeedbackResponse(obj: DevOpsGuruPutFeedbackResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruRemoveNotificationChannelRequest
 */
export interface DevOpsGuruRemoveNotificationChannelRequest {
  /**
   * @schema DevOpsGuruRemoveNotificationChannelRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'DevOpsGuruRemoveNotificationChannelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruRemoveNotificationChannelRequest(obj: DevOpsGuruRemoveNotificationChannelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruRemoveNotificationChannelResponse
 */
export interface DevOpsGuruRemoveNotificationChannelResponse {
}

/**
 * Converts an object of type 'DevOpsGuruRemoveNotificationChannelResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruRemoveNotificationChannelResponse(obj: DevOpsGuruRemoveNotificationChannelResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruSearchInsightsRequest
 */
export interface DevOpsGuruSearchInsightsRequest {
  /**
   * @schema DevOpsGuruSearchInsightsRequest#StartTimeRange
   */
  readonly startTimeRange?: DevOpsGuruStartTimeRange;

  /**
   * @schema DevOpsGuruSearchInsightsRequest#Filters
   */
  readonly filters?: DevOpsGuruSearchInsightsFilters;

  /**
   * @schema DevOpsGuruSearchInsightsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DevOpsGuruSearchInsightsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DevOpsGuruSearchInsightsRequest#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'DevOpsGuruSearchInsightsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruSearchInsightsRequest(obj: DevOpsGuruSearchInsightsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StartTimeRange': toJson_DevOpsGuruStartTimeRange(obj.startTimeRange),
    'Filters': toJson_DevOpsGuruSearchInsightsFilters(obj.filters),
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruSearchInsightsResponse
 */
export interface DevOpsGuruSearchInsightsResponse {
  /**
   * @schema DevOpsGuruSearchInsightsResponse#ProactiveInsights
   */
  readonly proactiveInsights?: DevOpsGuruProactiveInsightSummary[];

  /**
   * @schema DevOpsGuruSearchInsightsResponse#ReactiveInsights
   */
  readonly reactiveInsights?: DevOpsGuruReactiveInsightSummary[];

  /**
   * @schema DevOpsGuruSearchInsightsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DevOpsGuruSearchInsightsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruSearchInsightsResponse(obj: DevOpsGuruSearchInsightsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProactiveInsights': obj.proactiveInsights?.map(y => toJson_DevOpsGuruProactiveInsightSummary(y)),
    'ReactiveInsights': obj.reactiveInsights?.map(y => toJson_DevOpsGuruReactiveInsightSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruStartCostEstimationRequest
 */
export interface DevOpsGuruStartCostEstimationRequest {
  /**
   * @schema DevOpsGuruStartCostEstimationRequest#ResourceCollection
   */
  readonly resourceCollection?: DevOpsGuruCostEstimationResourceCollectionFilter;

  /**
   * @schema DevOpsGuruStartCostEstimationRequest#ClientToken
   */
  readonly clientToken?: string;

}

/**
 * Converts an object of type 'DevOpsGuruStartCostEstimationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruStartCostEstimationRequest(obj: DevOpsGuruStartCostEstimationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceCollection': toJson_DevOpsGuruCostEstimationResourceCollectionFilter(obj.resourceCollection),
    'ClientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruStartCostEstimationResponse
 */
export interface DevOpsGuruStartCostEstimationResponse {
}

/**
 * Converts an object of type 'DevOpsGuruStartCostEstimationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruStartCostEstimationResponse(obj: DevOpsGuruStartCostEstimationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruUpdateResourceCollectionRequest
 */
export interface DevOpsGuruUpdateResourceCollectionRequest {
  /**
   * @schema DevOpsGuruUpdateResourceCollectionRequest#Action
   */
  readonly action?: string;

  /**
   * @schema DevOpsGuruUpdateResourceCollectionRequest#ResourceCollection
   */
  readonly resourceCollection?: DevOpsGuruUpdateResourceCollectionFilter;

}

/**
 * Converts an object of type 'DevOpsGuruUpdateResourceCollectionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruUpdateResourceCollectionRequest(obj: DevOpsGuruUpdateResourceCollectionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Action': obj.action,
    'ResourceCollection': toJson_DevOpsGuruUpdateResourceCollectionFilter(obj.resourceCollection),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruUpdateResourceCollectionResponse
 */
export interface DevOpsGuruUpdateResourceCollectionResponse {
}

/**
 * Converts an object of type 'DevOpsGuruUpdateResourceCollectionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruUpdateResourceCollectionResponse(obj: DevOpsGuruUpdateResourceCollectionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruUpdateServiceIntegrationRequest
 */
export interface DevOpsGuruUpdateServiceIntegrationRequest {
  /**
   * @schema DevOpsGuruUpdateServiceIntegrationRequest#ServiceIntegration
   */
  readonly serviceIntegration?: DevOpsGuruUpdateServiceIntegrationConfig;

}

/**
 * Converts an object of type 'DevOpsGuruUpdateServiceIntegrationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruUpdateServiceIntegrationRequest(obj: DevOpsGuruUpdateServiceIntegrationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceIntegration': toJson_DevOpsGuruUpdateServiceIntegrationConfig(obj.serviceIntegration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruUpdateServiceIntegrationResponse
 */
export interface DevOpsGuruUpdateServiceIntegrationResponse {
}

/**
 * Converts an object of type 'DevOpsGuruUpdateServiceIntegrationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruUpdateServiceIntegrationResponse(obj: DevOpsGuruUpdateServiceIntegrationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruNotificationChannelConfig
 */
export interface DevOpsGuruNotificationChannelConfig {
  /**
   * @schema DevOpsGuruNotificationChannelConfig#Sns
   */
  readonly sns?: DevOpsGuruSnsChannelConfig;

}

/**
 * Converts an object of type 'DevOpsGuruNotificationChannelConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruNotificationChannelConfig(obj: DevOpsGuruNotificationChannelConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Sns': toJson_DevOpsGuruSnsChannelConfig(obj.sns),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruProactiveAnomaly
 */
export interface DevOpsGuruProactiveAnomaly {
  /**
   * @schema DevOpsGuruProactiveAnomaly#Id
   */
  readonly id?: string;

  /**
   * @schema DevOpsGuruProactiveAnomaly#Severity
   */
  readonly severity?: string;

  /**
   * @schema DevOpsGuruProactiveAnomaly#Status
   */
  readonly status?: string;

  /**
   * @schema DevOpsGuruProactiveAnomaly#UpdateTime
   */
  readonly updateTime?: string;

  /**
   * @schema DevOpsGuruProactiveAnomaly#AnomalyTimeRange
   */
  readonly anomalyTimeRange?: DevOpsGuruAnomalyTimeRange;

  /**
   * @schema DevOpsGuruProactiveAnomaly#AnomalyReportedTimeRange
   */
  readonly anomalyReportedTimeRange?: DevOpsGuruAnomalyReportedTimeRange;

  /**
   * @schema DevOpsGuruProactiveAnomaly#PredictionTimeRange
   */
  readonly predictionTimeRange?: DevOpsGuruPredictionTimeRange;

  /**
   * @schema DevOpsGuruProactiveAnomaly#SourceDetails
   */
  readonly sourceDetails?: DevOpsGuruAnomalySourceDetails;

  /**
   * @schema DevOpsGuruProactiveAnomaly#AssociatedInsightId
   */
  readonly associatedInsightId?: string;

  /**
   * @schema DevOpsGuruProactiveAnomaly#ResourceCollection
   */
  readonly resourceCollection?: DevOpsGuruResourceCollection;

  /**
   * @schema DevOpsGuruProactiveAnomaly#Limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'DevOpsGuruProactiveAnomaly' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruProactiveAnomaly(obj: DevOpsGuruProactiveAnomaly | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Severity': obj.severity,
    'Status': obj.status,
    'UpdateTime': obj.updateTime,
    'AnomalyTimeRange': toJson_DevOpsGuruAnomalyTimeRange(obj.anomalyTimeRange),
    'AnomalyReportedTimeRange': toJson_DevOpsGuruAnomalyReportedTimeRange(obj.anomalyReportedTimeRange),
    'PredictionTimeRange': toJson_DevOpsGuruPredictionTimeRange(obj.predictionTimeRange),
    'SourceDetails': toJson_DevOpsGuruAnomalySourceDetails(obj.sourceDetails),
    'AssociatedInsightId': obj.associatedInsightId,
    'ResourceCollection': toJson_DevOpsGuruResourceCollection(obj.resourceCollection),
    'Limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruReactiveAnomaly
 */
export interface DevOpsGuruReactiveAnomaly {
  /**
   * @schema DevOpsGuruReactiveAnomaly#Id
   */
  readonly id?: string;

  /**
   * @schema DevOpsGuruReactiveAnomaly#Severity
   */
  readonly severity?: string;

  /**
   * @schema DevOpsGuruReactiveAnomaly#Status
   */
  readonly status?: string;

  /**
   * @schema DevOpsGuruReactiveAnomaly#AnomalyTimeRange
   */
  readonly anomalyTimeRange?: DevOpsGuruAnomalyTimeRange;

  /**
   * @schema DevOpsGuruReactiveAnomaly#AnomalyReportedTimeRange
   */
  readonly anomalyReportedTimeRange?: DevOpsGuruAnomalyReportedTimeRange;

  /**
   * @schema DevOpsGuruReactiveAnomaly#SourceDetails
   */
  readonly sourceDetails?: DevOpsGuruAnomalySourceDetails;

  /**
   * @schema DevOpsGuruReactiveAnomaly#AssociatedInsightId
   */
  readonly associatedInsightId?: string;

  /**
   * @schema DevOpsGuruReactiveAnomaly#ResourceCollection
   */
  readonly resourceCollection?: DevOpsGuruResourceCollection;

}

/**
 * Converts an object of type 'DevOpsGuruReactiveAnomaly' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruReactiveAnomaly(obj: DevOpsGuruReactiveAnomaly | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Severity': obj.severity,
    'Status': obj.status,
    'AnomalyTimeRange': toJson_DevOpsGuruAnomalyTimeRange(obj.anomalyTimeRange),
    'AnomalyReportedTimeRange': toJson_DevOpsGuruAnomalyReportedTimeRange(obj.anomalyReportedTimeRange),
    'SourceDetails': toJson_DevOpsGuruAnomalySourceDetails(obj.sourceDetails),
    'AssociatedInsightId': obj.associatedInsightId,
    'ResourceCollection': toJson_DevOpsGuruResourceCollection(obj.resourceCollection),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruInsightFeedback
 */
export interface DevOpsGuruInsightFeedback {
  /**
   * @schema DevOpsGuruInsightFeedback#Id
   */
  readonly id?: string;

  /**
   * @schema DevOpsGuruInsightFeedback#Feedback
   */
  readonly feedback?: string;

}

/**
 * Converts an object of type 'DevOpsGuruInsightFeedback' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruInsightFeedback(obj: DevOpsGuruInsightFeedback | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Feedback': obj.feedback,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruProactiveInsight
 */
export interface DevOpsGuruProactiveInsight {
  /**
   * @schema DevOpsGuruProactiveInsight#Id
   */
  readonly id?: string;

  /**
   * @schema DevOpsGuruProactiveInsight#Name
   */
  readonly name?: string;

  /**
   * @schema DevOpsGuruProactiveInsight#Severity
   */
  readonly severity?: string;

  /**
   * @schema DevOpsGuruProactiveInsight#Status
   */
  readonly status?: string;

  /**
   * @schema DevOpsGuruProactiveInsight#InsightTimeRange
   */
  readonly insightTimeRange?: DevOpsGuruInsightTimeRange;

  /**
   * @schema DevOpsGuruProactiveInsight#PredictionTimeRange
   */
  readonly predictionTimeRange?: DevOpsGuruPredictionTimeRange;

  /**
   * @schema DevOpsGuruProactiveInsight#ResourceCollection
   */
  readonly resourceCollection?: DevOpsGuruResourceCollection;

  /**
   * @schema DevOpsGuruProactiveInsight#SsmOpsItemId
   */
  readonly ssmOpsItemId?: string;

}

/**
 * Converts an object of type 'DevOpsGuruProactiveInsight' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruProactiveInsight(obj: DevOpsGuruProactiveInsight | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Name': obj.name,
    'Severity': obj.severity,
    'Status': obj.status,
    'InsightTimeRange': toJson_DevOpsGuruInsightTimeRange(obj.insightTimeRange),
    'PredictionTimeRange': toJson_DevOpsGuruPredictionTimeRange(obj.predictionTimeRange),
    'ResourceCollection': toJson_DevOpsGuruResourceCollection(obj.resourceCollection),
    'SsmOpsItemId': obj.ssmOpsItemId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruReactiveInsight
 */
export interface DevOpsGuruReactiveInsight {
  /**
   * @schema DevOpsGuruReactiveInsight#Id
   */
  readonly id?: string;

  /**
   * @schema DevOpsGuruReactiveInsight#Name
   */
  readonly name?: string;

  /**
   * @schema DevOpsGuruReactiveInsight#Severity
   */
  readonly severity?: string;

  /**
   * @schema DevOpsGuruReactiveInsight#Status
   */
  readonly status?: string;

  /**
   * @schema DevOpsGuruReactiveInsight#InsightTimeRange
   */
  readonly insightTimeRange?: DevOpsGuruInsightTimeRange;

  /**
   * @schema DevOpsGuruReactiveInsight#ResourceCollection
   */
  readonly resourceCollection?: DevOpsGuruResourceCollection;

  /**
   * @schema DevOpsGuruReactiveInsight#SsmOpsItemId
   */
  readonly ssmOpsItemId?: string;

}

/**
 * Converts an object of type 'DevOpsGuruReactiveInsight' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruReactiveInsight(obj: DevOpsGuruReactiveInsight | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Name': obj.name,
    'Severity': obj.severity,
    'Status': obj.status,
    'InsightTimeRange': toJson_DevOpsGuruInsightTimeRange(obj.insightTimeRange),
    'ResourceCollection': toJson_DevOpsGuruResourceCollection(obj.resourceCollection),
    'SsmOpsItemId': obj.ssmOpsItemId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruCloudFormationHealth
 */
export interface DevOpsGuruCloudFormationHealth {
  /**
   * @schema DevOpsGuruCloudFormationHealth#StackName
   */
  readonly stackName?: string;

  /**
   * @schema DevOpsGuruCloudFormationHealth#Insight
   */
  readonly insight?: DevOpsGuruInsightHealth;

}

/**
 * Converts an object of type 'DevOpsGuruCloudFormationHealth' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruCloudFormationHealth(obj: DevOpsGuruCloudFormationHealth | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackName': obj.stackName,
    'Insight': toJson_DevOpsGuruInsightHealth(obj.insight),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruServiceHealth
 */
export interface DevOpsGuruServiceHealth {
  /**
   * @schema DevOpsGuruServiceHealth#ServiceName
   */
  readonly serviceName?: string;

  /**
   * @schema DevOpsGuruServiceHealth#Insight
   */
  readonly insight?: DevOpsGuruServiceInsightHealth;

}

/**
 * Converts an object of type 'DevOpsGuruServiceHealth' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruServiceHealth(obj: DevOpsGuruServiceHealth | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceName': obj.serviceName,
    'Insight': toJson_DevOpsGuruServiceInsightHealth(obj.insight),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruServiceIntegrationConfig
 */
export interface DevOpsGuruServiceIntegrationConfig {
  /**
   * @schema DevOpsGuruServiceIntegrationConfig#OpsCenter
   */
  readonly opsCenter?: DevOpsGuruOpsCenterIntegration;

}

/**
 * Converts an object of type 'DevOpsGuruServiceIntegrationConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruServiceIntegrationConfig(obj: DevOpsGuruServiceIntegrationConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OpsCenter': toJson_DevOpsGuruOpsCenterIntegration(obj.opsCenter),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruCostEstimationResourceCollectionFilter
 */
export interface DevOpsGuruCostEstimationResourceCollectionFilter {
  /**
   * @schema DevOpsGuruCostEstimationResourceCollectionFilter#CloudFormation
   */
  readonly cloudFormation?: DevOpsGuruCloudFormationCostEstimationResourceCollectionFilter;

}

/**
 * Converts an object of type 'DevOpsGuruCostEstimationResourceCollectionFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruCostEstimationResourceCollectionFilter(obj: DevOpsGuruCostEstimationResourceCollectionFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CloudFormation': toJson_DevOpsGuruCloudFormationCostEstimationResourceCollectionFilter(obj.cloudFormation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruServiceResourceCost
 */
export interface DevOpsGuruServiceResourceCost {
  /**
   * @schema DevOpsGuruServiceResourceCost#Type
   */
  readonly type?: string;

  /**
   * @schema DevOpsGuruServiceResourceCost#State
   */
  readonly state?: string;

  /**
   * @schema DevOpsGuruServiceResourceCost#Count
   */
  readonly count?: number;

  /**
   * @schema DevOpsGuruServiceResourceCost#UnitCost
   */
  readonly unitCost?: number;

  /**
   * @schema DevOpsGuruServiceResourceCost#Cost
   */
  readonly cost?: number;

}

/**
 * Converts an object of type 'DevOpsGuruServiceResourceCost' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruServiceResourceCost(obj: DevOpsGuruServiceResourceCost | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'State': obj.state,
    'Count': obj.count,
    'UnitCost': obj.unitCost,
    'Cost': obj.cost,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruCostEstimationTimeRange
 */
export interface DevOpsGuruCostEstimationTimeRange {
  /**
   * @schema DevOpsGuruCostEstimationTimeRange#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema DevOpsGuruCostEstimationTimeRange#EndTime
   */
  readonly endTime?: string;

}

/**
 * Converts an object of type 'DevOpsGuruCostEstimationTimeRange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruCostEstimationTimeRange(obj: DevOpsGuruCostEstimationTimeRange | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruResourceCollectionFilter
 */
export interface DevOpsGuruResourceCollectionFilter {
  /**
   * @schema DevOpsGuruResourceCollectionFilter#CloudFormation
   */
  readonly cloudFormation?: DevOpsGuruCloudFormationCollectionFilter;

}

/**
 * Converts an object of type 'DevOpsGuruResourceCollectionFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruResourceCollectionFilter(obj: DevOpsGuruResourceCollectionFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CloudFormation': toJson_DevOpsGuruCloudFormationCollectionFilter(obj.cloudFormation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruStartTimeRange
 */
export interface DevOpsGuruStartTimeRange {
  /**
   * @schema DevOpsGuruStartTimeRange#FromTime
   */
  readonly fromTime?: string;

  /**
   * @schema DevOpsGuruStartTimeRange#ToTime
   */
  readonly toTime?: string;

}

/**
 * Converts an object of type 'DevOpsGuruStartTimeRange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruStartTimeRange(obj: DevOpsGuruStartTimeRange | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FromTime': obj.fromTime,
    'ToTime': obj.toTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruProactiveAnomalySummary
 */
export interface DevOpsGuruProactiveAnomalySummary {
  /**
   * @schema DevOpsGuruProactiveAnomalySummary#Id
   */
  readonly id?: string;

  /**
   * @schema DevOpsGuruProactiveAnomalySummary#Severity
   */
  readonly severity?: string;

  /**
   * @schema DevOpsGuruProactiveAnomalySummary#Status
   */
  readonly status?: string;

  /**
   * @schema DevOpsGuruProactiveAnomalySummary#UpdateTime
   */
  readonly updateTime?: string;

  /**
   * @schema DevOpsGuruProactiveAnomalySummary#AnomalyTimeRange
   */
  readonly anomalyTimeRange?: DevOpsGuruAnomalyTimeRange;

  /**
   * @schema DevOpsGuruProactiveAnomalySummary#AnomalyReportedTimeRange
   */
  readonly anomalyReportedTimeRange?: DevOpsGuruAnomalyReportedTimeRange;

  /**
   * @schema DevOpsGuruProactiveAnomalySummary#PredictionTimeRange
   */
  readonly predictionTimeRange?: DevOpsGuruPredictionTimeRange;

  /**
   * @schema DevOpsGuruProactiveAnomalySummary#SourceDetails
   */
  readonly sourceDetails?: DevOpsGuruAnomalySourceDetails;

  /**
   * @schema DevOpsGuruProactiveAnomalySummary#AssociatedInsightId
   */
  readonly associatedInsightId?: string;

  /**
   * @schema DevOpsGuruProactiveAnomalySummary#ResourceCollection
   */
  readonly resourceCollection?: DevOpsGuruResourceCollection;

  /**
   * @schema DevOpsGuruProactiveAnomalySummary#Limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'DevOpsGuruProactiveAnomalySummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruProactiveAnomalySummary(obj: DevOpsGuruProactiveAnomalySummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Severity': obj.severity,
    'Status': obj.status,
    'UpdateTime': obj.updateTime,
    'AnomalyTimeRange': toJson_DevOpsGuruAnomalyTimeRange(obj.anomalyTimeRange),
    'AnomalyReportedTimeRange': toJson_DevOpsGuruAnomalyReportedTimeRange(obj.anomalyReportedTimeRange),
    'PredictionTimeRange': toJson_DevOpsGuruPredictionTimeRange(obj.predictionTimeRange),
    'SourceDetails': toJson_DevOpsGuruAnomalySourceDetails(obj.sourceDetails),
    'AssociatedInsightId': obj.associatedInsightId,
    'ResourceCollection': toJson_DevOpsGuruResourceCollection(obj.resourceCollection),
    'Limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruReactiveAnomalySummary
 */
export interface DevOpsGuruReactiveAnomalySummary {
  /**
   * @schema DevOpsGuruReactiveAnomalySummary#Id
   */
  readonly id?: string;

  /**
   * @schema DevOpsGuruReactiveAnomalySummary#Severity
   */
  readonly severity?: string;

  /**
   * @schema DevOpsGuruReactiveAnomalySummary#Status
   */
  readonly status?: string;

  /**
   * @schema DevOpsGuruReactiveAnomalySummary#AnomalyTimeRange
   */
  readonly anomalyTimeRange?: DevOpsGuruAnomalyTimeRange;

  /**
   * @schema DevOpsGuruReactiveAnomalySummary#AnomalyReportedTimeRange
   */
  readonly anomalyReportedTimeRange?: DevOpsGuruAnomalyReportedTimeRange;

  /**
   * @schema DevOpsGuruReactiveAnomalySummary#SourceDetails
   */
  readonly sourceDetails?: DevOpsGuruAnomalySourceDetails;

  /**
   * @schema DevOpsGuruReactiveAnomalySummary#AssociatedInsightId
   */
  readonly associatedInsightId?: string;

  /**
   * @schema DevOpsGuruReactiveAnomalySummary#ResourceCollection
   */
  readonly resourceCollection?: DevOpsGuruResourceCollection;

}

/**
 * Converts an object of type 'DevOpsGuruReactiveAnomalySummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruReactiveAnomalySummary(obj: DevOpsGuruReactiveAnomalySummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Severity': obj.severity,
    'Status': obj.status,
    'AnomalyTimeRange': toJson_DevOpsGuruAnomalyTimeRange(obj.anomalyTimeRange),
    'AnomalyReportedTimeRange': toJson_DevOpsGuruAnomalyReportedTimeRange(obj.anomalyReportedTimeRange),
    'SourceDetails': toJson_DevOpsGuruAnomalySourceDetails(obj.sourceDetails),
    'AssociatedInsightId': obj.associatedInsightId,
    'ResourceCollection': toJson_DevOpsGuruResourceCollection(obj.resourceCollection),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruListEventsFilters
 */
export interface DevOpsGuruListEventsFilters {
  /**
   * @schema DevOpsGuruListEventsFilters#InsightId
   */
  readonly insightId?: string;

  /**
   * @schema DevOpsGuruListEventsFilters#EventTimeRange
   */
  readonly eventTimeRange?: DevOpsGuruEventTimeRange;

  /**
   * @schema DevOpsGuruListEventsFilters#EventClass
   */
  readonly eventClass?: string;

  /**
   * @schema DevOpsGuruListEventsFilters#EventSource
   */
  readonly eventSource?: string;

  /**
   * @schema DevOpsGuruListEventsFilters#DataSource
   */
  readonly dataSource?: string;

  /**
   * @schema DevOpsGuruListEventsFilters#ResourceCollection
   */
  readonly resourceCollection?: DevOpsGuruResourceCollection;

}

/**
 * Converts an object of type 'DevOpsGuruListEventsFilters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruListEventsFilters(obj: DevOpsGuruListEventsFilters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InsightId': obj.insightId,
    'EventTimeRange': toJson_DevOpsGuruEventTimeRange(obj.eventTimeRange),
    'EventClass': obj.eventClass,
    'EventSource': obj.eventSource,
    'DataSource': obj.dataSource,
    'ResourceCollection': toJson_DevOpsGuruResourceCollection(obj.resourceCollection),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruEvent
 */
export interface DevOpsGuruEvent {
  /**
   * @schema DevOpsGuruEvent#ResourceCollection
   */
  readonly resourceCollection?: DevOpsGuruResourceCollection;

  /**
   * @schema DevOpsGuruEvent#Id
   */
  readonly id?: string;

  /**
   * @schema DevOpsGuruEvent#Time
   */
  readonly time?: string;

  /**
   * @schema DevOpsGuruEvent#EventSource
   */
  readonly eventSource?: string;

  /**
   * @schema DevOpsGuruEvent#Name
   */
  readonly name?: string;

  /**
   * @schema DevOpsGuruEvent#DataSource
   */
  readonly dataSource?: string;

  /**
   * @schema DevOpsGuruEvent#EventClass
   */
  readonly eventClass?: string;

  /**
   * @schema DevOpsGuruEvent#Resources
   */
  readonly resources?: DevOpsGuruEventResource[];

}

/**
 * Converts an object of type 'DevOpsGuruEvent' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruEvent(obj: DevOpsGuruEvent | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceCollection': toJson_DevOpsGuruResourceCollection(obj.resourceCollection),
    'Id': obj.id,
    'Time': obj.time,
    'EventSource': obj.eventSource,
    'Name': obj.name,
    'DataSource': obj.dataSource,
    'EventClass': obj.eventClass,
    'Resources': obj.resources?.map(y => toJson_DevOpsGuruEventResource(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruListInsightsStatusFilter
 */
export interface DevOpsGuruListInsightsStatusFilter {
  /**
   * @schema DevOpsGuruListInsightsStatusFilter#Ongoing
   */
  readonly ongoing?: DevOpsGuruListInsightsOngoingStatusFilter;

  /**
   * @schema DevOpsGuruListInsightsStatusFilter#Closed
   */
  readonly closed?: DevOpsGuruListInsightsClosedStatusFilter;

  /**
   * @schema DevOpsGuruListInsightsStatusFilter#Any
   */
  readonly any?: DevOpsGuruListInsightsAnyStatusFilter;

}

/**
 * Converts an object of type 'DevOpsGuruListInsightsStatusFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruListInsightsStatusFilter(obj: DevOpsGuruListInsightsStatusFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Ongoing': toJson_DevOpsGuruListInsightsOngoingStatusFilter(obj.ongoing),
    'Closed': toJson_DevOpsGuruListInsightsClosedStatusFilter(obj.closed),
    'Any': toJson_DevOpsGuruListInsightsAnyStatusFilter(obj.any),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruProactiveInsightSummary
 */
export interface DevOpsGuruProactiveInsightSummary {
  /**
   * @schema DevOpsGuruProactiveInsightSummary#Id
   */
  readonly id?: string;

  /**
   * @schema DevOpsGuruProactiveInsightSummary#Name
   */
  readonly name?: string;

  /**
   * @schema DevOpsGuruProactiveInsightSummary#Severity
   */
  readonly severity?: string;

  /**
   * @schema DevOpsGuruProactiveInsightSummary#Status
   */
  readonly status?: string;

  /**
   * @schema DevOpsGuruProactiveInsightSummary#InsightTimeRange
   */
  readonly insightTimeRange?: DevOpsGuruInsightTimeRange;

  /**
   * @schema DevOpsGuruProactiveInsightSummary#PredictionTimeRange
   */
  readonly predictionTimeRange?: DevOpsGuruPredictionTimeRange;

  /**
   * @schema DevOpsGuruProactiveInsightSummary#ResourceCollection
   */
  readonly resourceCollection?: DevOpsGuruResourceCollection;

  /**
   * @schema DevOpsGuruProactiveInsightSummary#ServiceCollection
   */
  readonly serviceCollection?: DevOpsGuruServiceCollection;

}

/**
 * Converts an object of type 'DevOpsGuruProactiveInsightSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruProactiveInsightSummary(obj: DevOpsGuruProactiveInsightSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Name': obj.name,
    'Severity': obj.severity,
    'Status': obj.status,
    'InsightTimeRange': toJson_DevOpsGuruInsightTimeRange(obj.insightTimeRange),
    'PredictionTimeRange': toJson_DevOpsGuruPredictionTimeRange(obj.predictionTimeRange),
    'ResourceCollection': toJson_DevOpsGuruResourceCollection(obj.resourceCollection),
    'ServiceCollection': toJson_DevOpsGuruServiceCollection(obj.serviceCollection),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruReactiveInsightSummary
 */
export interface DevOpsGuruReactiveInsightSummary {
  /**
   * @schema DevOpsGuruReactiveInsightSummary#Id
   */
  readonly id?: string;

  /**
   * @schema DevOpsGuruReactiveInsightSummary#Name
   */
  readonly name?: string;

  /**
   * @schema DevOpsGuruReactiveInsightSummary#Severity
   */
  readonly severity?: string;

  /**
   * @schema DevOpsGuruReactiveInsightSummary#Status
   */
  readonly status?: string;

  /**
   * @schema DevOpsGuruReactiveInsightSummary#InsightTimeRange
   */
  readonly insightTimeRange?: DevOpsGuruInsightTimeRange;

  /**
   * @schema DevOpsGuruReactiveInsightSummary#ResourceCollection
   */
  readonly resourceCollection?: DevOpsGuruResourceCollection;

  /**
   * @schema DevOpsGuruReactiveInsightSummary#ServiceCollection
   */
  readonly serviceCollection?: DevOpsGuruServiceCollection;

}

/**
 * Converts an object of type 'DevOpsGuruReactiveInsightSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruReactiveInsightSummary(obj: DevOpsGuruReactiveInsightSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Name': obj.name,
    'Severity': obj.severity,
    'Status': obj.status,
    'InsightTimeRange': toJson_DevOpsGuruInsightTimeRange(obj.insightTimeRange),
    'ResourceCollection': toJson_DevOpsGuruResourceCollection(obj.resourceCollection),
    'ServiceCollection': toJson_DevOpsGuruServiceCollection(obj.serviceCollection),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruNotificationChannel
 */
export interface DevOpsGuruNotificationChannel {
  /**
   * @schema DevOpsGuruNotificationChannel#Id
   */
  readonly id?: string;

  /**
   * @schema DevOpsGuruNotificationChannel#Config
   */
  readonly config?: DevOpsGuruNotificationChannelConfig;

}

/**
 * Converts an object of type 'DevOpsGuruNotificationChannel' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruNotificationChannel(obj: DevOpsGuruNotificationChannel | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Config': toJson_DevOpsGuruNotificationChannelConfig(obj.config),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruRecommendation
 */
export interface DevOpsGuruRecommendation {
  /**
   * @schema DevOpsGuruRecommendation#Description
   */
  readonly description?: string;

  /**
   * @schema DevOpsGuruRecommendation#Link
   */
  readonly link?: string;

  /**
   * @schema DevOpsGuruRecommendation#Name
   */
  readonly name?: string;

  /**
   * @schema DevOpsGuruRecommendation#Reason
   */
  readonly reason?: string;

  /**
   * @schema DevOpsGuruRecommendation#RelatedEvents
   */
  readonly relatedEvents?: DevOpsGuruRecommendationRelatedEvent[];

  /**
   * @schema DevOpsGuruRecommendation#RelatedAnomalies
   */
  readonly relatedAnomalies?: DevOpsGuruRecommendationRelatedAnomaly[];

}

/**
 * Converts an object of type 'DevOpsGuruRecommendation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruRecommendation(obj: DevOpsGuruRecommendation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Description': obj.description,
    'Link': obj.link,
    'Name': obj.name,
    'Reason': obj.reason,
    'RelatedEvents': obj.relatedEvents?.map(y => toJson_DevOpsGuruRecommendationRelatedEvent(y)),
    'RelatedAnomalies': obj.relatedAnomalies?.map(y => toJson_DevOpsGuruRecommendationRelatedAnomaly(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruSearchInsightsFilters
 */
export interface DevOpsGuruSearchInsightsFilters {
  /**
   * @schema DevOpsGuruSearchInsightsFilters#Severities
   */
  readonly severities?: string[];

  /**
   * @schema DevOpsGuruSearchInsightsFilters#Statuses
   */
  readonly statuses?: string[];

  /**
   * @schema DevOpsGuruSearchInsightsFilters#ResourceCollection
   */
  readonly resourceCollection?: DevOpsGuruResourceCollection;

  /**
   * @schema DevOpsGuruSearchInsightsFilters#ServiceCollection
   */
  readonly serviceCollection?: DevOpsGuruServiceCollection;

}

/**
 * Converts an object of type 'DevOpsGuruSearchInsightsFilters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruSearchInsightsFilters(obj: DevOpsGuruSearchInsightsFilters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Severities': obj.severities?.map(y => y),
    'Statuses': obj.statuses?.map(y => y),
    'ResourceCollection': toJson_DevOpsGuruResourceCollection(obj.resourceCollection),
    'ServiceCollection': toJson_DevOpsGuruServiceCollection(obj.serviceCollection),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruUpdateResourceCollectionFilter
 */
export interface DevOpsGuruUpdateResourceCollectionFilter {
  /**
   * @schema DevOpsGuruUpdateResourceCollectionFilter#CloudFormation
   */
  readonly cloudFormation?: DevOpsGuruUpdateCloudFormationCollectionFilter;

}

/**
 * Converts an object of type 'DevOpsGuruUpdateResourceCollectionFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruUpdateResourceCollectionFilter(obj: DevOpsGuruUpdateResourceCollectionFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CloudFormation': toJson_DevOpsGuruUpdateCloudFormationCollectionFilter(obj.cloudFormation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruUpdateServiceIntegrationConfig
 */
export interface DevOpsGuruUpdateServiceIntegrationConfig {
  /**
   * @schema DevOpsGuruUpdateServiceIntegrationConfig#OpsCenter
   */
  readonly opsCenter?: DevOpsGuruOpsCenterIntegrationConfig;

}

/**
 * Converts an object of type 'DevOpsGuruUpdateServiceIntegrationConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruUpdateServiceIntegrationConfig(obj: DevOpsGuruUpdateServiceIntegrationConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OpsCenter': toJson_DevOpsGuruOpsCenterIntegrationConfig(obj.opsCenter),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruSnsChannelConfig
 */
export interface DevOpsGuruSnsChannelConfig {
  /**
   * @schema DevOpsGuruSnsChannelConfig#TopicArn
   */
  readonly topicArn?: string;

}

/**
 * Converts an object of type 'DevOpsGuruSnsChannelConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruSnsChannelConfig(obj: DevOpsGuruSnsChannelConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TopicArn': obj.topicArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruAnomalyTimeRange
 */
export interface DevOpsGuruAnomalyTimeRange {
  /**
   * @schema DevOpsGuruAnomalyTimeRange#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema DevOpsGuruAnomalyTimeRange#EndTime
   */
  readonly endTime?: string;

}

/**
 * Converts an object of type 'DevOpsGuruAnomalyTimeRange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruAnomalyTimeRange(obj: DevOpsGuruAnomalyTimeRange | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruAnomalyReportedTimeRange
 */
export interface DevOpsGuruAnomalyReportedTimeRange {
  /**
   * @schema DevOpsGuruAnomalyReportedTimeRange#OpenTime
   */
  readonly openTime?: string;

  /**
   * @schema DevOpsGuruAnomalyReportedTimeRange#CloseTime
   */
  readonly closeTime?: string;

}

/**
 * Converts an object of type 'DevOpsGuruAnomalyReportedTimeRange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruAnomalyReportedTimeRange(obj: DevOpsGuruAnomalyReportedTimeRange | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OpenTime': obj.openTime,
    'CloseTime': obj.closeTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruPredictionTimeRange
 */
export interface DevOpsGuruPredictionTimeRange {
  /**
   * @schema DevOpsGuruPredictionTimeRange#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema DevOpsGuruPredictionTimeRange#EndTime
   */
  readonly endTime?: string;

}

/**
 * Converts an object of type 'DevOpsGuruPredictionTimeRange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruPredictionTimeRange(obj: DevOpsGuruPredictionTimeRange | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruAnomalySourceDetails
 */
export interface DevOpsGuruAnomalySourceDetails {
  /**
   * @schema DevOpsGuruAnomalySourceDetails#CloudWatchMetrics
   */
  readonly cloudWatchMetrics?: DevOpsGuruCloudWatchMetricsDetail[];

}

/**
 * Converts an object of type 'DevOpsGuruAnomalySourceDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruAnomalySourceDetails(obj: DevOpsGuruAnomalySourceDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CloudWatchMetrics': obj.cloudWatchMetrics?.map(y => toJson_DevOpsGuruCloudWatchMetricsDetail(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruResourceCollection
 */
export interface DevOpsGuruResourceCollection {
  /**
   * @schema DevOpsGuruResourceCollection#CloudFormation
   */
  readonly cloudFormation?: DevOpsGuruCloudFormationCollection;

}

/**
 * Converts an object of type 'DevOpsGuruResourceCollection' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruResourceCollection(obj: DevOpsGuruResourceCollection | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CloudFormation': toJson_DevOpsGuruCloudFormationCollection(obj.cloudFormation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruInsightTimeRange
 */
export interface DevOpsGuruInsightTimeRange {
  /**
   * @schema DevOpsGuruInsightTimeRange#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema DevOpsGuruInsightTimeRange#EndTime
   */
  readonly endTime?: string;

}

/**
 * Converts an object of type 'DevOpsGuruInsightTimeRange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruInsightTimeRange(obj: DevOpsGuruInsightTimeRange | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruInsightHealth
 */
export interface DevOpsGuruInsightHealth {
  /**
   * @schema DevOpsGuruInsightHealth#OpenProactiveInsights
   */
  readonly openProactiveInsights?: number;

  /**
   * @schema DevOpsGuruInsightHealth#OpenReactiveInsights
   */
  readonly openReactiveInsights?: number;

  /**
   * @schema DevOpsGuruInsightHealth#MeanTimeToRecoverInMilliseconds
   */
  readonly meanTimeToRecoverInMilliseconds?: number;

}

/**
 * Converts an object of type 'DevOpsGuruInsightHealth' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruInsightHealth(obj: DevOpsGuruInsightHealth | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OpenProactiveInsights': obj.openProactiveInsights,
    'OpenReactiveInsights': obj.openReactiveInsights,
    'MeanTimeToRecoverInMilliseconds': obj.meanTimeToRecoverInMilliseconds,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruServiceInsightHealth
 */
export interface DevOpsGuruServiceInsightHealth {
  /**
   * @schema DevOpsGuruServiceInsightHealth#OpenProactiveInsights
   */
  readonly openProactiveInsights?: number;

  /**
   * @schema DevOpsGuruServiceInsightHealth#OpenReactiveInsights
   */
  readonly openReactiveInsights?: number;

}

/**
 * Converts an object of type 'DevOpsGuruServiceInsightHealth' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruServiceInsightHealth(obj: DevOpsGuruServiceInsightHealth | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OpenProactiveInsights': obj.openProactiveInsights,
    'OpenReactiveInsights': obj.openReactiveInsights,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruOpsCenterIntegration
 */
export interface DevOpsGuruOpsCenterIntegration {
  /**
   * @schema DevOpsGuruOpsCenterIntegration#OptInStatus
   */
  readonly optInStatus?: string;

}

/**
 * Converts an object of type 'DevOpsGuruOpsCenterIntegration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruOpsCenterIntegration(obj: DevOpsGuruOpsCenterIntegration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OptInStatus': obj.optInStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruCloudFormationCostEstimationResourceCollectionFilter
 */
export interface DevOpsGuruCloudFormationCostEstimationResourceCollectionFilter {
  /**
   * @schema DevOpsGuruCloudFormationCostEstimationResourceCollectionFilter#StackNames
   */
  readonly stackNames?: string[];

}

/**
 * Converts an object of type 'DevOpsGuruCloudFormationCostEstimationResourceCollectionFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruCloudFormationCostEstimationResourceCollectionFilter(obj: DevOpsGuruCloudFormationCostEstimationResourceCollectionFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackNames': obj.stackNames?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruCloudFormationCollectionFilter
 */
export interface DevOpsGuruCloudFormationCollectionFilter {
  /**
   * @schema DevOpsGuruCloudFormationCollectionFilter#StackNames
   */
  readonly stackNames?: string[];

}

/**
 * Converts an object of type 'DevOpsGuruCloudFormationCollectionFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruCloudFormationCollectionFilter(obj: DevOpsGuruCloudFormationCollectionFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackNames': obj.stackNames?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruEventTimeRange
 */
export interface DevOpsGuruEventTimeRange {
  /**
   * @schema DevOpsGuruEventTimeRange#FromTime
   */
  readonly fromTime?: string;

  /**
   * @schema DevOpsGuruEventTimeRange#ToTime
   */
  readonly toTime?: string;

}

/**
 * Converts an object of type 'DevOpsGuruEventTimeRange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruEventTimeRange(obj: DevOpsGuruEventTimeRange | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FromTime': obj.fromTime,
    'ToTime': obj.toTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruEventResource
 */
export interface DevOpsGuruEventResource {
  /**
   * @schema DevOpsGuruEventResource#Type
   */
  readonly type?: string;

  /**
   * @schema DevOpsGuruEventResource#Name
   */
  readonly name?: string;

  /**
   * @schema DevOpsGuruEventResource#Arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'DevOpsGuruEventResource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruEventResource(obj: DevOpsGuruEventResource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Name': obj.name,
    'Arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruListInsightsOngoingStatusFilter
 */
export interface DevOpsGuruListInsightsOngoingStatusFilter {
  /**
   * @schema DevOpsGuruListInsightsOngoingStatusFilter#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'DevOpsGuruListInsightsOngoingStatusFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruListInsightsOngoingStatusFilter(obj: DevOpsGuruListInsightsOngoingStatusFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruListInsightsClosedStatusFilter
 */
export interface DevOpsGuruListInsightsClosedStatusFilter {
  /**
   * @schema DevOpsGuruListInsightsClosedStatusFilter#Type
   */
  readonly type?: string;

  /**
   * @schema DevOpsGuruListInsightsClosedStatusFilter#EndTimeRange
   */
  readonly endTimeRange?: DevOpsGuruEndTimeRange;

}

/**
 * Converts an object of type 'DevOpsGuruListInsightsClosedStatusFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruListInsightsClosedStatusFilter(obj: DevOpsGuruListInsightsClosedStatusFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'EndTimeRange': toJson_DevOpsGuruEndTimeRange(obj.endTimeRange),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruListInsightsAnyStatusFilter
 */
export interface DevOpsGuruListInsightsAnyStatusFilter {
  /**
   * @schema DevOpsGuruListInsightsAnyStatusFilter#Type
   */
  readonly type?: string;

  /**
   * @schema DevOpsGuruListInsightsAnyStatusFilter#StartTimeRange
   */
  readonly startTimeRange?: DevOpsGuruStartTimeRange;

}

/**
 * Converts an object of type 'DevOpsGuruListInsightsAnyStatusFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruListInsightsAnyStatusFilter(obj: DevOpsGuruListInsightsAnyStatusFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'StartTimeRange': toJson_DevOpsGuruStartTimeRange(obj.startTimeRange),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruServiceCollection
 */
export interface DevOpsGuruServiceCollection {
  /**
   * @schema DevOpsGuruServiceCollection#ServiceNames
   */
  readonly serviceNames?: string[];

}

/**
 * Converts an object of type 'DevOpsGuruServiceCollection' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruServiceCollection(obj: DevOpsGuruServiceCollection | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceNames': obj.serviceNames?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruRecommendationRelatedEvent
 */
export interface DevOpsGuruRecommendationRelatedEvent {
  /**
   * @schema DevOpsGuruRecommendationRelatedEvent#Name
   */
  readonly name?: string;

  /**
   * @schema DevOpsGuruRecommendationRelatedEvent#Resources
   */
  readonly resources?: DevOpsGuruRecommendationRelatedEventResource[];

}

/**
 * Converts an object of type 'DevOpsGuruRecommendationRelatedEvent' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruRecommendationRelatedEvent(obj: DevOpsGuruRecommendationRelatedEvent | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Resources': obj.resources?.map(y => toJson_DevOpsGuruRecommendationRelatedEventResource(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruRecommendationRelatedAnomaly
 */
export interface DevOpsGuruRecommendationRelatedAnomaly {
  /**
   * @schema DevOpsGuruRecommendationRelatedAnomaly#Resources
   */
  readonly resources?: DevOpsGuruRecommendationRelatedAnomalyResource[];

  /**
   * @schema DevOpsGuruRecommendationRelatedAnomaly#SourceDetails
   */
  readonly sourceDetails?: DevOpsGuruRecommendationRelatedAnomalySourceDetail[];

}

/**
 * Converts an object of type 'DevOpsGuruRecommendationRelatedAnomaly' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruRecommendationRelatedAnomaly(obj: DevOpsGuruRecommendationRelatedAnomaly | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Resources': obj.resources?.map(y => toJson_DevOpsGuruRecommendationRelatedAnomalyResource(y)),
    'SourceDetails': obj.sourceDetails?.map(y => toJson_DevOpsGuruRecommendationRelatedAnomalySourceDetail(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruUpdateCloudFormationCollectionFilter
 */
export interface DevOpsGuruUpdateCloudFormationCollectionFilter {
  /**
   * @schema DevOpsGuruUpdateCloudFormationCollectionFilter#StackNames
   */
  readonly stackNames?: string[];

}

/**
 * Converts an object of type 'DevOpsGuruUpdateCloudFormationCollectionFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruUpdateCloudFormationCollectionFilter(obj: DevOpsGuruUpdateCloudFormationCollectionFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackNames': obj.stackNames?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruOpsCenterIntegrationConfig
 */
export interface DevOpsGuruOpsCenterIntegrationConfig {
  /**
   * @schema DevOpsGuruOpsCenterIntegrationConfig#OptInStatus
   */
  readonly optInStatus?: string;

}

/**
 * Converts an object of type 'DevOpsGuruOpsCenterIntegrationConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruOpsCenterIntegrationConfig(obj: DevOpsGuruOpsCenterIntegrationConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OptInStatus': obj.optInStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruCloudWatchMetricsDetail
 */
export interface DevOpsGuruCloudWatchMetricsDetail {
  /**
   * @schema DevOpsGuruCloudWatchMetricsDetail#MetricName
   */
  readonly metricName?: string;

  /**
   * @schema DevOpsGuruCloudWatchMetricsDetail#Namespace
   */
  readonly namespace?: string;

  /**
   * @schema DevOpsGuruCloudWatchMetricsDetail#Dimensions
   */
  readonly dimensions?: DevOpsGuruCloudWatchMetricsDimension[];

  /**
   * @schema DevOpsGuruCloudWatchMetricsDetail#Stat
   */
  readonly stat?: string;

  /**
   * @schema DevOpsGuruCloudWatchMetricsDetail#Unit
   */
  readonly unit?: string;

  /**
   * @schema DevOpsGuruCloudWatchMetricsDetail#Period
   */
  readonly period?: number;

}

/**
 * Converts an object of type 'DevOpsGuruCloudWatchMetricsDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruCloudWatchMetricsDetail(obj: DevOpsGuruCloudWatchMetricsDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MetricName': obj.metricName,
    'Namespace': obj.namespace,
    'Dimensions': obj.dimensions?.map(y => toJson_DevOpsGuruCloudWatchMetricsDimension(y)),
    'Stat': obj.stat,
    'Unit': obj.unit,
    'Period': obj.period,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruCloudFormationCollection
 */
export interface DevOpsGuruCloudFormationCollection {
  /**
   * @schema DevOpsGuruCloudFormationCollection#StackNames
   */
  readonly stackNames?: string[];

}

/**
 * Converts an object of type 'DevOpsGuruCloudFormationCollection' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruCloudFormationCollection(obj: DevOpsGuruCloudFormationCollection | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackNames': obj.stackNames?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruEndTimeRange
 */
export interface DevOpsGuruEndTimeRange {
  /**
   * @schema DevOpsGuruEndTimeRange#FromTime
   */
  readonly fromTime?: string;

  /**
   * @schema DevOpsGuruEndTimeRange#ToTime
   */
  readonly toTime?: string;

}

/**
 * Converts an object of type 'DevOpsGuruEndTimeRange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruEndTimeRange(obj: DevOpsGuruEndTimeRange | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FromTime': obj.fromTime,
    'ToTime': obj.toTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruRecommendationRelatedEventResource
 */
export interface DevOpsGuruRecommendationRelatedEventResource {
  /**
   * @schema DevOpsGuruRecommendationRelatedEventResource#Name
   */
  readonly name?: string;

  /**
   * @schema DevOpsGuruRecommendationRelatedEventResource#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'DevOpsGuruRecommendationRelatedEventResource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruRecommendationRelatedEventResource(obj: DevOpsGuruRecommendationRelatedEventResource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruRecommendationRelatedAnomalyResource
 */
export interface DevOpsGuruRecommendationRelatedAnomalyResource {
  /**
   * @schema DevOpsGuruRecommendationRelatedAnomalyResource#Name
   */
  readonly name?: string;

  /**
   * @schema DevOpsGuruRecommendationRelatedAnomalyResource#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'DevOpsGuruRecommendationRelatedAnomalyResource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruRecommendationRelatedAnomalyResource(obj: DevOpsGuruRecommendationRelatedAnomalyResource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruRecommendationRelatedAnomalySourceDetail
 */
export interface DevOpsGuruRecommendationRelatedAnomalySourceDetail {
  /**
   * @schema DevOpsGuruRecommendationRelatedAnomalySourceDetail#CloudWatchMetrics
   */
  readonly cloudWatchMetrics?: DevOpsGuruRecommendationRelatedCloudWatchMetricsSourceDetail[];

}

/**
 * Converts an object of type 'DevOpsGuruRecommendationRelatedAnomalySourceDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruRecommendationRelatedAnomalySourceDetail(obj: DevOpsGuruRecommendationRelatedAnomalySourceDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CloudWatchMetrics': obj.cloudWatchMetrics?.map(y => toJson_DevOpsGuruRecommendationRelatedCloudWatchMetricsSourceDetail(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruCloudWatchMetricsDimension
 */
export interface DevOpsGuruCloudWatchMetricsDimension {
  /**
   * @schema DevOpsGuruCloudWatchMetricsDimension#Name
   */
  readonly name?: string;

  /**
   * @schema DevOpsGuruCloudWatchMetricsDimension#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'DevOpsGuruCloudWatchMetricsDimension' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruCloudWatchMetricsDimension(obj: DevOpsGuruCloudWatchMetricsDimension | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DevOpsGuruRecommendationRelatedCloudWatchMetricsSourceDetail
 */
export interface DevOpsGuruRecommendationRelatedCloudWatchMetricsSourceDetail {
  /**
   * @schema DevOpsGuruRecommendationRelatedCloudWatchMetricsSourceDetail#MetricName
   */
  readonly metricName?: string;

  /**
   * @schema DevOpsGuruRecommendationRelatedCloudWatchMetricsSourceDetail#Namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'DevOpsGuruRecommendationRelatedCloudWatchMetricsSourceDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DevOpsGuruRecommendationRelatedCloudWatchMetricsSourceDetail(obj: DevOpsGuruRecommendationRelatedCloudWatchMetricsSourceDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MetricName': obj.metricName,
    'Namespace': obj.namespace,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
