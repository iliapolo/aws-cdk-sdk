/**
 * @schema XRayBatchGetTracesRequest
 */
export interface XRayBatchGetTracesRequest {
  /**
   * @schema XRayBatchGetTracesRequest#TraceIds
   */
  readonly traceIds?: string[];

  /**
   * @schema XRayBatchGetTracesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'XRayBatchGetTracesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayBatchGetTracesRequest(obj: XRayBatchGetTracesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TraceIds': obj.traceIds?.map(y => y),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayBatchGetTracesResult
 */
export interface XRayBatchGetTracesResult {
  /**
   * @schema XRayBatchGetTracesResult#Traces
   */
  readonly traces?: XRayTrace[];

  /**
   * @schema XRayBatchGetTracesResult#UnprocessedTraceIds
   */
  readonly unprocessedTraceIds?: string[];

  /**
   * @schema XRayBatchGetTracesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'XRayBatchGetTracesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayBatchGetTracesResult(obj: XRayBatchGetTracesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Traces': obj.traces?.map(y => toJson_XRayTrace(y)),
    'UnprocessedTraceIds': obj.unprocessedTraceIds?.map(y => y),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayCreateGroupRequest
 */
export interface XRayCreateGroupRequest {
  /**
   * @schema XRayCreateGroupRequest#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema XRayCreateGroupRequest#FilterExpression
   */
  readonly filterExpression?: string;

  /**
   * @schema XRayCreateGroupRequest#InsightsConfiguration
   */
  readonly insightsConfiguration?: XRayInsightsConfiguration;

  /**
   * @schema XRayCreateGroupRequest#Tags
   */
  readonly tags?: XRayTag[];

}

/**
 * Converts an object of type 'XRayCreateGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayCreateGroupRequest(obj: XRayCreateGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupName': obj.groupName,
    'FilterExpression': obj.filterExpression,
    'InsightsConfiguration': toJson_XRayInsightsConfiguration(obj.insightsConfiguration),
    'Tags': obj.tags?.map(y => toJson_XRayTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayCreateGroupResult
 */
export interface XRayCreateGroupResult {
  /**
   * @schema XRayCreateGroupResult#Group
   */
  readonly group?: XRayGroup;

}

/**
 * Converts an object of type 'XRayCreateGroupResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayCreateGroupResult(obj: XRayCreateGroupResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Group': toJson_XRayGroup(obj.group),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayCreateSamplingRuleRequest
 */
export interface XRayCreateSamplingRuleRequest {
  /**
   * @schema XRayCreateSamplingRuleRequest#SamplingRule
   */
  readonly samplingRule?: XRaySamplingRule;

  /**
   * @schema XRayCreateSamplingRuleRequest#Tags
   */
  readonly tags?: XRayTag[];

}

/**
 * Converts an object of type 'XRayCreateSamplingRuleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayCreateSamplingRuleRequest(obj: XRayCreateSamplingRuleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SamplingRule': toJson_XRaySamplingRule(obj.samplingRule),
    'Tags': obj.tags?.map(y => toJson_XRayTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayCreateSamplingRuleResult
 */
export interface XRayCreateSamplingRuleResult {
  /**
   * @schema XRayCreateSamplingRuleResult#SamplingRuleRecord
   */
  readonly samplingRuleRecord?: XRaySamplingRuleRecord;

}

/**
 * Converts an object of type 'XRayCreateSamplingRuleResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayCreateSamplingRuleResult(obj: XRayCreateSamplingRuleResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SamplingRuleRecord': toJson_XRaySamplingRuleRecord(obj.samplingRuleRecord),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayDeleteGroupRequest
 */
export interface XRayDeleteGroupRequest {
  /**
   * @schema XRayDeleteGroupRequest#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema XRayDeleteGroupRequest#GroupARN
   */
  readonly groupArn?: string;

}

/**
 * Converts an object of type 'XRayDeleteGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayDeleteGroupRequest(obj: XRayDeleteGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupName': obj.groupName,
    'GroupARN': obj.groupArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayDeleteGroupResult
 */
export interface XRayDeleteGroupResult {
}

/**
 * Converts an object of type 'XRayDeleteGroupResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayDeleteGroupResult(obj: XRayDeleteGroupResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayDeleteSamplingRuleRequest
 */
export interface XRayDeleteSamplingRuleRequest {
  /**
   * @schema XRayDeleteSamplingRuleRequest#RuleName
   */
  readonly ruleName?: string;

  /**
   * @schema XRayDeleteSamplingRuleRequest#RuleARN
   */
  readonly ruleArn?: string;

}

/**
 * Converts an object of type 'XRayDeleteSamplingRuleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayDeleteSamplingRuleRequest(obj: XRayDeleteSamplingRuleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RuleName': obj.ruleName,
    'RuleARN': obj.ruleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayDeleteSamplingRuleResult
 */
export interface XRayDeleteSamplingRuleResult {
  /**
   * @schema XRayDeleteSamplingRuleResult#SamplingRuleRecord
   */
  readonly samplingRuleRecord?: XRaySamplingRuleRecord;

}

/**
 * Converts an object of type 'XRayDeleteSamplingRuleResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayDeleteSamplingRuleResult(obj: XRayDeleteSamplingRuleResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SamplingRuleRecord': toJson_XRaySamplingRuleRecord(obj.samplingRuleRecord),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayGetEncryptionConfigRequest
 */
export interface XRayGetEncryptionConfigRequest {
}

/**
 * Converts an object of type 'XRayGetEncryptionConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayGetEncryptionConfigRequest(obj: XRayGetEncryptionConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayGetEncryptionConfigResult
 */
export interface XRayGetEncryptionConfigResult {
  /**
   * @schema XRayGetEncryptionConfigResult#EncryptionConfig
   */
  readonly encryptionConfig?: XRayEncryptionConfig;

}

/**
 * Converts an object of type 'XRayGetEncryptionConfigResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayGetEncryptionConfigResult(obj: XRayGetEncryptionConfigResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EncryptionConfig': toJson_XRayEncryptionConfig(obj.encryptionConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayGetGroupRequest
 */
export interface XRayGetGroupRequest {
  /**
   * @schema XRayGetGroupRequest#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema XRayGetGroupRequest#GroupARN
   */
  readonly groupArn?: string;

}

/**
 * Converts an object of type 'XRayGetGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayGetGroupRequest(obj: XRayGetGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupName': obj.groupName,
    'GroupARN': obj.groupArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayGetGroupResult
 */
export interface XRayGetGroupResult {
  /**
   * @schema XRayGetGroupResult#Group
   */
  readonly group?: XRayGroup;

}

/**
 * Converts an object of type 'XRayGetGroupResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayGetGroupResult(obj: XRayGetGroupResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Group': toJson_XRayGroup(obj.group),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayGetGroupsRequest
 */
export interface XRayGetGroupsRequest {
  /**
   * @schema XRayGetGroupsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'XRayGetGroupsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayGetGroupsRequest(obj: XRayGetGroupsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayGetGroupsResult
 */
export interface XRayGetGroupsResult {
  /**
   * @schema XRayGetGroupsResult#Groups
   */
  readonly groups?: XRayGroupSummary[];

  /**
   * @schema XRayGetGroupsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'XRayGetGroupsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayGetGroupsResult(obj: XRayGetGroupsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Groups': obj.groups?.map(y => toJson_XRayGroupSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayGetInsightRequest
 */
export interface XRayGetInsightRequest {
  /**
   * @schema XRayGetInsightRequest#InsightId
   */
  readonly insightId?: string;

}

/**
 * Converts an object of type 'XRayGetInsightRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayGetInsightRequest(obj: XRayGetInsightRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InsightId': obj.insightId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayGetInsightResult
 */
export interface XRayGetInsightResult {
  /**
   * @schema XRayGetInsightResult#Insight
   */
  readonly insight?: XRayInsight;

}

/**
 * Converts an object of type 'XRayGetInsightResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayGetInsightResult(obj: XRayGetInsightResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Insight': toJson_XRayInsight(obj.insight),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayGetInsightEventsRequest
 */
export interface XRayGetInsightEventsRequest {
  /**
   * @schema XRayGetInsightEventsRequest#InsightId
   */
  readonly insightId?: string;

  /**
   * @schema XRayGetInsightEventsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema XRayGetInsightEventsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'XRayGetInsightEventsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayGetInsightEventsRequest(obj: XRayGetInsightEventsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InsightId': obj.insightId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayGetInsightEventsResult
 */
export interface XRayGetInsightEventsResult {
  /**
   * @schema XRayGetInsightEventsResult#InsightEvents
   */
  readonly insightEvents?: XRayInsightEvent[];

  /**
   * @schema XRayGetInsightEventsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'XRayGetInsightEventsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayGetInsightEventsResult(obj: XRayGetInsightEventsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InsightEvents': obj.insightEvents?.map(y => toJson_XRayInsightEvent(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayGetInsightImpactGraphRequest
 */
export interface XRayGetInsightImpactGraphRequest {
  /**
   * @schema XRayGetInsightImpactGraphRequest#InsightId
   */
  readonly insightId?: string;

  /**
   * @schema XRayGetInsightImpactGraphRequest#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema XRayGetInsightImpactGraphRequest#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema XRayGetInsightImpactGraphRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'XRayGetInsightImpactGraphRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayGetInsightImpactGraphRequest(obj: XRayGetInsightImpactGraphRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InsightId': obj.insightId,
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayGetInsightImpactGraphResult
 */
export interface XRayGetInsightImpactGraphResult {
  /**
   * @schema XRayGetInsightImpactGraphResult#InsightId
   */
  readonly insightId?: string;

  /**
   * @schema XRayGetInsightImpactGraphResult#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema XRayGetInsightImpactGraphResult#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema XRayGetInsightImpactGraphResult#ServiceGraphStartTime
   */
  readonly serviceGraphStartTime?: string;

  /**
   * @schema XRayGetInsightImpactGraphResult#ServiceGraphEndTime
   */
  readonly serviceGraphEndTime?: string;

  /**
   * @schema XRayGetInsightImpactGraphResult#Services
   */
  readonly services?: XRayInsightImpactGraphService[];

  /**
   * @schema XRayGetInsightImpactGraphResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'XRayGetInsightImpactGraphResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayGetInsightImpactGraphResult(obj: XRayGetInsightImpactGraphResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InsightId': obj.insightId,
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
    'ServiceGraphStartTime': obj.serviceGraphStartTime,
    'ServiceGraphEndTime': obj.serviceGraphEndTime,
    'Services': obj.services?.map(y => toJson_XRayInsightImpactGraphService(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayGetInsightSummariesRequest
 */
export interface XRayGetInsightSummariesRequest {
  /**
   * @schema XRayGetInsightSummariesRequest#States
   */
  readonly states?: string[];

  /**
   * @schema XRayGetInsightSummariesRequest#GroupARN
   */
  readonly groupArn?: string;

  /**
   * @schema XRayGetInsightSummariesRequest#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema XRayGetInsightSummariesRequest#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema XRayGetInsightSummariesRequest#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema XRayGetInsightSummariesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema XRayGetInsightSummariesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'XRayGetInsightSummariesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayGetInsightSummariesRequest(obj: XRayGetInsightSummariesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'States': obj.states?.map(y => y),
    'GroupARN': obj.groupArn,
    'GroupName': obj.groupName,
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayGetInsightSummariesResult
 */
export interface XRayGetInsightSummariesResult {
  /**
   * @schema XRayGetInsightSummariesResult#InsightSummaries
   */
  readonly insightSummaries?: XRayInsightSummary[];

  /**
   * @schema XRayGetInsightSummariesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'XRayGetInsightSummariesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayGetInsightSummariesResult(obj: XRayGetInsightSummariesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InsightSummaries': obj.insightSummaries?.map(y => toJson_XRayInsightSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayGetSamplingRulesRequest
 */
export interface XRayGetSamplingRulesRequest {
  /**
   * @schema XRayGetSamplingRulesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'XRayGetSamplingRulesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayGetSamplingRulesRequest(obj: XRayGetSamplingRulesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayGetSamplingRulesResult
 */
export interface XRayGetSamplingRulesResult {
  /**
   * @schema XRayGetSamplingRulesResult#SamplingRuleRecords
   */
  readonly samplingRuleRecords?: XRaySamplingRuleRecord[];

  /**
   * @schema XRayGetSamplingRulesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'XRayGetSamplingRulesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayGetSamplingRulesResult(obj: XRayGetSamplingRulesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SamplingRuleRecords': obj.samplingRuleRecords?.map(y => toJson_XRaySamplingRuleRecord(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayGetSamplingStatisticSummariesRequest
 */
export interface XRayGetSamplingStatisticSummariesRequest {
  /**
   * @schema XRayGetSamplingStatisticSummariesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'XRayGetSamplingStatisticSummariesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayGetSamplingStatisticSummariesRequest(obj: XRayGetSamplingStatisticSummariesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayGetSamplingStatisticSummariesResult
 */
export interface XRayGetSamplingStatisticSummariesResult {
  /**
   * @schema XRayGetSamplingStatisticSummariesResult#SamplingStatisticSummaries
   */
  readonly samplingStatisticSummaries?: XRaySamplingStatisticSummary[];

  /**
   * @schema XRayGetSamplingStatisticSummariesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'XRayGetSamplingStatisticSummariesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayGetSamplingStatisticSummariesResult(obj: XRayGetSamplingStatisticSummariesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SamplingStatisticSummaries': obj.samplingStatisticSummaries?.map(y => toJson_XRaySamplingStatisticSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayGetSamplingTargetsRequest
 */
export interface XRayGetSamplingTargetsRequest {
  /**
   * @schema XRayGetSamplingTargetsRequest#SamplingStatisticsDocuments
   */
  readonly samplingStatisticsDocuments?: XRaySamplingStatisticsDocument[];

}

/**
 * Converts an object of type 'XRayGetSamplingTargetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayGetSamplingTargetsRequest(obj: XRayGetSamplingTargetsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SamplingStatisticsDocuments': obj.samplingStatisticsDocuments?.map(y => toJson_XRaySamplingStatisticsDocument(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayGetSamplingTargetsResult
 */
export interface XRayGetSamplingTargetsResult {
  /**
   * @schema XRayGetSamplingTargetsResult#SamplingTargetDocuments
   */
  readonly samplingTargetDocuments?: XRaySamplingTargetDocument[];

  /**
   * @schema XRayGetSamplingTargetsResult#LastRuleModification
   */
  readonly lastRuleModification?: string;

  /**
   * @schema XRayGetSamplingTargetsResult#UnprocessedStatistics
   */
  readonly unprocessedStatistics?: XRayUnprocessedStatistics[];

}

/**
 * Converts an object of type 'XRayGetSamplingTargetsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayGetSamplingTargetsResult(obj: XRayGetSamplingTargetsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SamplingTargetDocuments': obj.samplingTargetDocuments?.map(y => toJson_XRaySamplingTargetDocument(y)),
    'LastRuleModification': obj.lastRuleModification,
    'UnprocessedStatistics': obj.unprocessedStatistics?.map(y => toJson_XRayUnprocessedStatistics(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayGetServiceGraphRequest
 */
export interface XRayGetServiceGraphRequest {
  /**
   * @schema XRayGetServiceGraphRequest#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema XRayGetServiceGraphRequest#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema XRayGetServiceGraphRequest#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema XRayGetServiceGraphRequest#GroupARN
   */
  readonly groupArn?: string;

  /**
   * @schema XRayGetServiceGraphRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'XRayGetServiceGraphRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayGetServiceGraphRequest(obj: XRayGetServiceGraphRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
    'GroupName': obj.groupName,
    'GroupARN': obj.groupArn,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayGetServiceGraphResult
 */
export interface XRayGetServiceGraphResult {
  /**
   * @schema XRayGetServiceGraphResult#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema XRayGetServiceGraphResult#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema XRayGetServiceGraphResult#Services
   */
  readonly services?: XRayService[];

  /**
   * @schema XRayGetServiceGraphResult#ContainsOldGroupVersions
   */
  readonly containsOldGroupVersions?: boolean;

  /**
   * @schema XRayGetServiceGraphResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'XRayGetServiceGraphResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayGetServiceGraphResult(obj: XRayGetServiceGraphResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
    'Services': obj.services?.map(y => toJson_XRayService(y)),
    'ContainsOldGroupVersions': obj.containsOldGroupVersions,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayGetTimeSeriesServiceStatisticsRequest
 */
export interface XRayGetTimeSeriesServiceStatisticsRequest {
  /**
   * @schema XRayGetTimeSeriesServiceStatisticsRequest#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema XRayGetTimeSeriesServiceStatisticsRequest#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema XRayGetTimeSeriesServiceStatisticsRequest#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema XRayGetTimeSeriesServiceStatisticsRequest#GroupARN
   */
  readonly groupArn?: string;

  /**
   * @schema XRayGetTimeSeriesServiceStatisticsRequest#EntitySelectorExpression
   */
  readonly entitySelectorExpression?: string;

  /**
   * @schema XRayGetTimeSeriesServiceStatisticsRequest#Period
   */
  readonly period?: number;

  /**
   * @schema XRayGetTimeSeriesServiceStatisticsRequest#ForecastStatistics
   */
  readonly forecastStatistics?: boolean;

  /**
   * @schema XRayGetTimeSeriesServiceStatisticsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'XRayGetTimeSeriesServiceStatisticsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayGetTimeSeriesServiceStatisticsRequest(obj: XRayGetTimeSeriesServiceStatisticsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
    'GroupName': obj.groupName,
    'GroupARN': obj.groupArn,
    'EntitySelectorExpression': obj.entitySelectorExpression,
    'Period': obj.period,
    'ForecastStatistics': obj.forecastStatistics,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayGetTimeSeriesServiceStatisticsResult
 */
export interface XRayGetTimeSeriesServiceStatisticsResult {
  /**
   * @schema XRayGetTimeSeriesServiceStatisticsResult#TimeSeriesServiceStatistics
   */
  readonly timeSeriesServiceStatistics?: XRayTimeSeriesServiceStatistics[];

  /**
   * @schema XRayGetTimeSeriesServiceStatisticsResult#ContainsOldGroupVersions
   */
  readonly containsOldGroupVersions?: boolean;

  /**
   * @schema XRayGetTimeSeriesServiceStatisticsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'XRayGetTimeSeriesServiceStatisticsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayGetTimeSeriesServiceStatisticsResult(obj: XRayGetTimeSeriesServiceStatisticsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TimeSeriesServiceStatistics': obj.timeSeriesServiceStatistics?.map(y => toJson_XRayTimeSeriesServiceStatistics(y)),
    'ContainsOldGroupVersions': obj.containsOldGroupVersions,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayGetTraceGraphRequest
 */
export interface XRayGetTraceGraphRequest {
  /**
   * @schema XRayGetTraceGraphRequest#TraceIds
   */
  readonly traceIds?: string[];

  /**
   * @schema XRayGetTraceGraphRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'XRayGetTraceGraphRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayGetTraceGraphRequest(obj: XRayGetTraceGraphRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TraceIds': obj.traceIds?.map(y => y),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayGetTraceGraphResult
 */
export interface XRayGetTraceGraphResult {
  /**
   * @schema XRayGetTraceGraphResult#Services
   */
  readonly services?: XRayService[];

  /**
   * @schema XRayGetTraceGraphResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'XRayGetTraceGraphResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayGetTraceGraphResult(obj: XRayGetTraceGraphResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Services': obj.services?.map(y => toJson_XRayService(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayGetTraceSummariesRequest
 */
export interface XRayGetTraceSummariesRequest {
  /**
   * @schema XRayGetTraceSummariesRequest#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema XRayGetTraceSummariesRequest#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema XRayGetTraceSummariesRequest#TimeRangeType
   */
  readonly timeRangeType?: string;

  /**
   * @schema XRayGetTraceSummariesRequest#Sampling
   */
  readonly sampling?: boolean;

  /**
   * @schema XRayGetTraceSummariesRequest#SamplingStrategy
   */
  readonly samplingStrategy?: XRaySamplingStrategy;

  /**
   * @schema XRayGetTraceSummariesRequest#FilterExpression
   */
  readonly filterExpression?: string;

  /**
   * @schema XRayGetTraceSummariesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'XRayGetTraceSummariesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayGetTraceSummariesRequest(obj: XRayGetTraceSummariesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
    'TimeRangeType': obj.timeRangeType,
    'Sampling': obj.sampling,
    'SamplingStrategy': toJson_XRaySamplingStrategy(obj.samplingStrategy),
    'FilterExpression': obj.filterExpression,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayGetTraceSummariesResult
 */
export interface XRayGetTraceSummariesResult {
  /**
   * @schema XRayGetTraceSummariesResult#TraceSummaries
   */
  readonly traceSummaries?: XRayTraceSummary[];

  /**
   * @schema XRayGetTraceSummariesResult#ApproximateTime
   */
  readonly approximateTime?: string;

  /**
   * @schema XRayGetTraceSummariesResult#TracesProcessedCount
   */
  readonly tracesProcessedCount?: number;

  /**
   * @schema XRayGetTraceSummariesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'XRayGetTraceSummariesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayGetTraceSummariesResult(obj: XRayGetTraceSummariesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TraceSummaries': obj.traceSummaries?.map(y => toJson_XRayTraceSummary(y)),
    'ApproximateTime': obj.approximateTime,
    'TracesProcessedCount': obj.tracesProcessedCount,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayListTagsForResourceRequest
 */
export interface XRayListTagsForResourceRequest {
  /**
   * @schema XRayListTagsForResourceRequest#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema XRayListTagsForResourceRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'XRayListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayListTagsForResourceRequest(obj: XRayListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayListTagsForResourceResponse
 */
export interface XRayListTagsForResourceResponse {
  /**
   * @schema XRayListTagsForResourceResponse#Tags
   */
  readonly tags?: XRayTag[];

  /**
   * @schema XRayListTagsForResourceResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'XRayListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayListTagsForResourceResponse(obj: XRayListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': obj.tags?.map(y => toJson_XRayTag(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayPutEncryptionConfigRequest
 */
export interface XRayPutEncryptionConfigRequest {
  /**
   * @schema XRayPutEncryptionConfigRequest#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema XRayPutEncryptionConfigRequest#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'XRayPutEncryptionConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayPutEncryptionConfigRequest(obj: XRayPutEncryptionConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KeyId': obj.keyId,
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayPutEncryptionConfigResult
 */
export interface XRayPutEncryptionConfigResult {
  /**
   * @schema XRayPutEncryptionConfigResult#EncryptionConfig
   */
  readonly encryptionConfig?: XRayEncryptionConfig;

}

/**
 * Converts an object of type 'XRayPutEncryptionConfigResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayPutEncryptionConfigResult(obj: XRayPutEncryptionConfigResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EncryptionConfig': toJson_XRayEncryptionConfig(obj.encryptionConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayPutTelemetryRecordsRequest
 */
export interface XRayPutTelemetryRecordsRequest {
  /**
   * @schema XRayPutTelemetryRecordsRequest#TelemetryRecords
   */
  readonly telemetryRecords?: XRayTelemetryRecord[];

  /**
   * @schema XRayPutTelemetryRecordsRequest#EC2InstanceId
   */
  readonly ec2InstanceId?: string;

  /**
   * @schema XRayPutTelemetryRecordsRequest#Hostname
   */
  readonly hostname?: string;

  /**
   * @schema XRayPutTelemetryRecordsRequest#ResourceARN
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'XRayPutTelemetryRecordsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayPutTelemetryRecordsRequest(obj: XRayPutTelemetryRecordsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TelemetryRecords': obj.telemetryRecords?.map(y => toJson_XRayTelemetryRecord(y)),
    'EC2InstanceId': obj.ec2InstanceId,
    'Hostname': obj.hostname,
    'ResourceARN': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayPutTelemetryRecordsResult
 */
export interface XRayPutTelemetryRecordsResult {
}

/**
 * Converts an object of type 'XRayPutTelemetryRecordsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayPutTelemetryRecordsResult(obj: XRayPutTelemetryRecordsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayPutTraceSegmentsRequest
 */
export interface XRayPutTraceSegmentsRequest {
  /**
   * @schema XRayPutTraceSegmentsRequest#TraceSegmentDocuments
   */
  readonly traceSegmentDocuments?: string[];

}

/**
 * Converts an object of type 'XRayPutTraceSegmentsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayPutTraceSegmentsRequest(obj: XRayPutTraceSegmentsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TraceSegmentDocuments': obj.traceSegmentDocuments?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayPutTraceSegmentsResult
 */
export interface XRayPutTraceSegmentsResult {
  /**
   * @schema XRayPutTraceSegmentsResult#UnprocessedTraceSegments
   */
  readonly unprocessedTraceSegments?: XRayUnprocessedTraceSegment[];

}

/**
 * Converts an object of type 'XRayPutTraceSegmentsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayPutTraceSegmentsResult(obj: XRayPutTraceSegmentsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UnprocessedTraceSegments': obj.unprocessedTraceSegments?.map(y => toJson_XRayUnprocessedTraceSegment(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayTagResourceRequest
 */
export interface XRayTagResourceRequest {
  /**
   * @schema XRayTagResourceRequest#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema XRayTagResourceRequest#Tags
   */
  readonly tags?: XRayTag[];

}

/**
 * Converts an object of type 'XRayTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayTagResourceRequest(obj: XRayTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
    'Tags': obj.tags?.map(y => toJson_XRayTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayTagResourceResponse
 */
export interface XRayTagResourceResponse {
}

/**
 * Converts an object of type 'XRayTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayTagResourceResponse(obj: XRayTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayUntagResourceRequest
 */
export interface XRayUntagResourceRequest {
  /**
   * @schema XRayUntagResourceRequest#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema XRayUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'XRayUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayUntagResourceRequest(obj: XRayUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayUntagResourceResponse
 */
export interface XRayUntagResourceResponse {
}

/**
 * Converts an object of type 'XRayUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayUntagResourceResponse(obj: XRayUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayUpdateGroupRequest
 */
export interface XRayUpdateGroupRequest {
  /**
   * @schema XRayUpdateGroupRequest#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema XRayUpdateGroupRequest#GroupARN
   */
  readonly groupArn?: string;

  /**
   * @schema XRayUpdateGroupRequest#FilterExpression
   */
  readonly filterExpression?: string;

  /**
   * @schema XRayUpdateGroupRequest#InsightsConfiguration
   */
  readonly insightsConfiguration?: XRayInsightsConfiguration;

}

/**
 * Converts an object of type 'XRayUpdateGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayUpdateGroupRequest(obj: XRayUpdateGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupName': obj.groupName,
    'GroupARN': obj.groupArn,
    'FilterExpression': obj.filterExpression,
    'InsightsConfiguration': toJson_XRayInsightsConfiguration(obj.insightsConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayUpdateGroupResult
 */
export interface XRayUpdateGroupResult {
  /**
   * @schema XRayUpdateGroupResult#Group
   */
  readonly group?: XRayGroup;

}

/**
 * Converts an object of type 'XRayUpdateGroupResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayUpdateGroupResult(obj: XRayUpdateGroupResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Group': toJson_XRayGroup(obj.group),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayUpdateSamplingRuleRequest
 */
export interface XRayUpdateSamplingRuleRequest {
  /**
   * @schema XRayUpdateSamplingRuleRequest#SamplingRuleUpdate
   */
  readonly samplingRuleUpdate?: XRaySamplingRuleUpdate;

}

/**
 * Converts an object of type 'XRayUpdateSamplingRuleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayUpdateSamplingRuleRequest(obj: XRayUpdateSamplingRuleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SamplingRuleUpdate': toJson_XRaySamplingRuleUpdate(obj.samplingRuleUpdate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayUpdateSamplingRuleResult
 */
export interface XRayUpdateSamplingRuleResult {
  /**
   * @schema XRayUpdateSamplingRuleResult#SamplingRuleRecord
   */
  readonly samplingRuleRecord?: XRaySamplingRuleRecord;

}

/**
 * Converts an object of type 'XRayUpdateSamplingRuleResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayUpdateSamplingRuleResult(obj: XRayUpdateSamplingRuleResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SamplingRuleRecord': toJson_XRaySamplingRuleRecord(obj.samplingRuleRecord),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayTrace
 */
export interface XRayTrace {
  /**
   * @schema XRayTrace#Id
   */
  readonly id?: string;

  /**
   * @schema XRayTrace#Duration
   */
  readonly duration?: number;

  /**
   * @schema XRayTrace#LimitExceeded
   */
  readonly limitExceeded?: boolean;

  /**
   * @schema XRayTrace#Segments
   */
  readonly segments?: XRaySegment[];

}

/**
 * Converts an object of type 'XRayTrace' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayTrace(obj: XRayTrace | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Duration': obj.duration,
    'LimitExceeded': obj.limitExceeded,
    'Segments': obj.segments?.map(y => toJson_XRaySegment(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayInsightsConfiguration
 */
export interface XRayInsightsConfiguration {
  /**
   * @schema XRayInsightsConfiguration#InsightsEnabled
   */
  readonly insightsEnabled?: boolean;

  /**
   * @schema XRayInsightsConfiguration#NotificationsEnabled
   */
  readonly notificationsEnabled?: boolean;

}

/**
 * Converts an object of type 'XRayInsightsConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayInsightsConfiguration(obj: XRayInsightsConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InsightsEnabled': obj.insightsEnabled,
    'NotificationsEnabled': obj.notificationsEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayTag
 */
export interface XRayTag {
  /**
   * @schema XRayTag#Key
   */
  readonly key?: string;

  /**
   * @schema XRayTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'XRayTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayTag(obj: XRayTag | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayGroup
 */
export interface XRayGroup {
  /**
   * @schema XRayGroup#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema XRayGroup#GroupARN
   */
  readonly groupArn?: string;

  /**
   * @schema XRayGroup#FilterExpression
   */
  readonly filterExpression?: string;

  /**
   * @schema XRayGroup#InsightsConfiguration
   */
  readonly insightsConfiguration?: XRayInsightsConfiguration;

}

/**
 * Converts an object of type 'XRayGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayGroup(obj: XRayGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupName': obj.groupName,
    'GroupARN': obj.groupArn,
    'FilterExpression': obj.filterExpression,
    'InsightsConfiguration': toJson_XRayInsightsConfiguration(obj.insightsConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRaySamplingRule
 */
export interface XRaySamplingRule {
  /**
   * @schema XRaySamplingRule#RuleName
   */
  readonly ruleName?: string;

  /**
   * @schema XRaySamplingRule#RuleARN
   */
  readonly ruleArn?: string;

  /**
   * @schema XRaySamplingRule#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema XRaySamplingRule#Priority
   */
  readonly priority?: number;

  /**
   * @schema XRaySamplingRule#FixedRate
   */
  readonly fixedRate?: number;

  /**
   * @schema XRaySamplingRule#ReservoirSize
   */
  readonly reservoirSize?: number;

  /**
   * @schema XRaySamplingRule#ServiceName
   */
  readonly serviceName?: string;

  /**
   * @schema XRaySamplingRule#ServiceType
   */
  readonly serviceType?: string;

  /**
   * @schema XRaySamplingRule#Host
   */
  readonly host?: string;

  /**
   * @schema XRaySamplingRule#HTTPMethod
   */
  readonly httpMethod?: string;

  /**
   * @schema XRaySamplingRule#URLPath
   */
  readonly urlPath?: string;

  /**
   * @schema XRaySamplingRule#Version
   */
  readonly version?: number;

  /**
   * @schema XRaySamplingRule#Attributes
   */
  readonly attributes?: { [key: string]: string };

}

/**
 * Converts an object of type 'XRaySamplingRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRaySamplingRule(obj: XRaySamplingRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RuleName': obj.ruleName,
    'RuleARN': obj.ruleArn,
    'ResourceARN': obj.resourceArn,
    'Priority': obj.priority,
    'FixedRate': obj.fixedRate,
    'ReservoirSize': obj.reservoirSize,
    'ServiceName': obj.serviceName,
    'ServiceType': obj.serviceType,
    'Host': obj.host,
    'HTTPMethod': obj.httpMethod,
    'URLPath': obj.urlPath,
    'Version': obj.version,
    'Attributes': ((obj.attributes) === undefined) ? undefined : (Object.entries(obj.attributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRaySamplingRuleRecord
 */
export interface XRaySamplingRuleRecord {
  /**
   * @schema XRaySamplingRuleRecord#SamplingRule
   */
  readonly samplingRule?: XRaySamplingRule;

  /**
   * @schema XRaySamplingRuleRecord#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema XRaySamplingRuleRecord#ModifiedAt
   */
  readonly modifiedAt?: string;

}

/**
 * Converts an object of type 'XRaySamplingRuleRecord' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRaySamplingRuleRecord(obj: XRaySamplingRuleRecord | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SamplingRule': toJson_XRaySamplingRule(obj.samplingRule),
    'CreatedAt': obj.createdAt,
    'ModifiedAt': obj.modifiedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayEncryptionConfig
 */
export interface XRayEncryptionConfig {
  /**
   * @schema XRayEncryptionConfig#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema XRayEncryptionConfig#Status
   */
  readonly status?: string;

  /**
   * @schema XRayEncryptionConfig#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'XRayEncryptionConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayEncryptionConfig(obj: XRayEncryptionConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KeyId': obj.keyId,
    'Status': obj.status,
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayGroupSummary
 */
export interface XRayGroupSummary {
  /**
   * @schema XRayGroupSummary#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema XRayGroupSummary#GroupARN
   */
  readonly groupArn?: string;

  /**
   * @schema XRayGroupSummary#FilterExpression
   */
  readonly filterExpression?: string;

  /**
   * @schema XRayGroupSummary#InsightsConfiguration
   */
  readonly insightsConfiguration?: XRayInsightsConfiguration;

}

/**
 * Converts an object of type 'XRayGroupSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayGroupSummary(obj: XRayGroupSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupName': obj.groupName,
    'GroupARN': obj.groupArn,
    'FilterExpression': obj.filterExpression,
    'InsightsConfiguration': toJson_XRayInsightsConfiguration(obj.insightsConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayInsight
 */
export interface XRayInsight {
  /**
   * @schema XRayInsight#InsightId
   */
  readonly insightId?: string;

  /**
   * @schema XRayInsight#GroupARN
   */
  readonly groupArn?: string;

  /**
   * @schema XRayInsight#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema XRayInsight#RootCauseServiceId
   */
  readonly rootCauseServiceId?: XRayServiceId;

  /**
   * @schema XRayInsight#Categories
   */
  readonly categories?: string[];

  /**
   * @schema XRayInsight#State
   */
  readonly state?: string;

  /**
   * @schema XRayInsight#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema XRayInsight#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema XRayInsight#Summary
   */
  readonly summary?: string;

  /**
   * @schema XRayInsight#ClientRequestImpactStatistics
   */
  readonly clientRequestImpactStatistics?: XRayRequestImpactStatistics;

  /**
   * @schema XRayInsight#RootCauseServiceRequestImpactStatistics
   */
  readonly rootCauseServiceRequestImpactStatistics?: XRayRequestImpactStatistics;

  /**
   * @schema XRayInsight#TopAnomalousServices
   */
  readonly topAnomalousServices?: XRayAnomalousService[];

}

/**
 * Converts an object of type 'XRayInsight' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayInsight(obj: XRayInsight | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InsightId': obj.insightId,
    'GroupARN': obj.groupArn,
    'GroupName': obj.groupName,
    'RootCauseServiceId': toJson_XRayServiceId(obj.rootCauseServiceId),
    'Categories': obj.categories?.map(y => y),
    'State': obj.state,
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
    'Summary': obj.summary,
    'ClientRequestImpactStatistics': toJson_XRayRequestImpactStatistics(obj.clientRequestImpactStatistics),
    'RootCauseServiceRequestImpactStatistics': toJson_XRayRequestImpactStatistics(obj.rootCauseServiceRequestImpactStatistics),
    'TopAnomalousServices': obj.topAnomalousServices?.map(y => toJson_XRayAnomalousService(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayInsightEvent
 */
export interface XRayInsightEvent {
  /**
   * @schema XRayInsightEvent#Summary
   */
  readonly summary?: string;

  /**
   * @schema XRayInsightEvent#EventTime
   */
  readonly eventTime?: string;

  /**
   * @schema XRayInsightEvent#ClientRequestImpactStatistics
   */
  readonly clientRequestImpactStatistics?: XRayRequestImpactStatistics;

  /**
   * @schema XRayInsightEvent#RootCauseServiceRequestImpactStatistics
   */
  readonly rootCauseServiceRequestImpactStatistics?: XRayRequestImpactStatistics;

  /**
   * @schema XRayInsightEvent#TopAnomalousServices
   */
  readonly topAnomalousServices?: XRayAnomalousService[];

}

/**
 * Converts an object of type 'XRayInsightEvent' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayInsightEvent(obj: XRayInsightEvent | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Summary': obj.summary,
    'EventTime': obj.eventTime,
    'ClientRequestImpactStatistics': toJson_XRayRequestImpactStatistics(obj.clientRequestImpactStatistics),
    'RootCauseServiceRequestImpactStatistics': toJson_XRayRequestImpactStatistics(obj.rootCauseServiceRequestImpactStatistics),
    'TopAnomalousServices': obj.topAnomalousServices?.map(y => toJson_XRayAnomalousService(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayInsightImpactGraphService
 */
export interface XRayInsightImpactGraphService {
  /**
   * @schema XRayInsightImpactGraphService#ReferenceId
   */
  readonly referenceId?: number;

  /**
   * @schema XRayInsightImpactGraphService#Type
   */
  readonly type?: string;

  /**
   * @schema XRayInsightImpactGraphService#Name
   */
  readonly name?: string;

  /**
   * @schema XRayInsightImpactGraphService#Names
   */
  readonly names?: string[];

  /**
   * @schema XRayInsightImpactGraphService#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema XRayInsightImpactGraphService#Edges
   */
  readonly edges?: XRayInsightImpactGraphEdge[];

}

/**
 * Converts an object of type 'XRayInsightImpactGraphService' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayInsightImpactGraphService(obj: XRayInsightImpactGraphService | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReferenceId': obj.referenceId,
    'Type': obj.type,
    'Name': obj.name,
    'Names': obj.names?.map(y => y),
    'AccountId': obj.accountId,
    'Edges': obj.edges?.map(y => toJson_XRayInsightImpactGraphEdge(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayInsightSummary
 */
export interface XRayInsightSummary {
  /**
   * @schema XRayInsightSummary#InsightId
   */
  readonly insightId?: string;

  /**
   * @schema XRayInsightSummary#GroupARN
   */
  readonly groupArn?: string;

  /**
   * @schema XRayInsightSummary#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema XRayInsightSummary#RootCauseServiceId
   */
  readonly rootCauseServiceId?: XRayServiceId;

  /**
   * @schema XRayInsightSummary#Categories
   */
  readonly categories?: string[];

  /**
   * @schema XRayInsightSummary#State
   */
  readonly state?: string;

  /**
   * @schema XRayInsightSummary#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema XRayInsightSummary#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema XRayInsightSummary#Summary
   */
  readonly summary?: string;

  /**
   * @schema XRayInsightSummary#ClientRequestImpactStatistics
   */
  readonly clientRequestImpactStatistics?: XRayRequestImpactStatistics;

  /**
   * @schema XRayInsightSummary#RootCauseServiceRequestImpactStatistics
   */
  readonly rootCauseServiceRequestImpactStatistics?: XRayRequestImpactStatistics;

  /**
   * @schema XRayInsightSummary#TopAnomalousServices
   */
  readonly topAnomalousServices?: XRayAnomalousService[];

  /**
   * @schema XRayInsightSummary#LastUpdateTime
   */
  readonly lastUpdateTime?: string;

}

/**
 * Converts an object of type 'XRayInsightSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayInsightSummary(obj: XRayInsightSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InsightId': obj.insightId,
    'GroupARN': obj.groupArn,
    'GroupName': obj.groupName,
    'RootCauseServiceId': toJson_XRayServiceId(obj.rootCauseServiceId),
    'Categories': obj.categories?.map(y => y),
    'State': obj.state,
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
    'Summary': obj.summary,
    'ClientRequestImpactStatistics': toJson_XRayRequestImpactStatistics(obj.clientRequestImpactStatistics),
    'RootCauseServiceRequestImpactStatistics': toJson_XRayRequestImpactStatistics(obj.rootCauseServiceRequestImpactStatistics),
    'TopAnomalousServices': obj.topAnomalousServices?.map(y => toJson_XRayAnomalousService(y)),
    'LastUpdateTime': obj.lastUpdateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRaySamplingStatisticSummary
 */
export interface XRaySamplingStatisticSummary {
  /**
   * @schema XRaySamplingStatisticSummary#RuleName
   */
  readonly ruleName?: string;

  /**
   * @schema XRaySamplingStatisticSummary#Timestamp
   */
  readonly timestamp?: string;

  /**
   * @schema XRaySamplingStatisticSummary#RequestCount
   */
  readonly requestCount?: number;

  /**
   * @schema XRaySamplingStatisticSummary#BorrowCount
   */
  readonly borrowCount?: number;

  /**
   * @schema XRaySamplingStatisticSummary#SampledCount
   */
  readonly sampledCount?: number;

}

/**
 * Converts an object of type 'XRaySamplingStatisticSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRaySamplingStatisticSummary(obj: XRaySamplingStatisticSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RuleName': obj.ruleName,
    'Timestamp': obj.timestamp,
    'RequestCount': obj.requestCount,
    'BorrowCount': obj.borrowCount,
    'SampledCount': obj.sampledCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRaySamplingStatisticsDocument
 */
export interface XRaySamplingStatisticsDocument {
  /**
   * @schema XRaySamplingStatisticsDocument#RuleName
   */
  readonly ruleName?: string;

  /**
   * @schema XRaySamplingStatisticsDocument#ClientID
   */
  readonly clientId?: string;

  /**
   * @schema XRaySamplingStatisticsDocument#Timestamp
   */
  readonly timestamp?: string;

  /**
   * @schema XRaySamplingStatisticsDocument#RequestCount
   */
  readonly requestCount?: number;

  /**
   * @schema XRaySamplingStatisticsDocument#SampledCount
   */
  readonly sampledCount?: number;

  /**
   * @schema XRaySamplingStatisticsDocument#BorrowCount
   */
  readonly borrowCount?: number;

}

/**
 * Converts an object of type 'XRaySamplingStatisticsDocument' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRaySamplingStatisticsDocument(obj: XRaySamplingStatisticsDocument | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RuleName': obj.ruleName,
    'ClientID': obj.clientId,
    'Timestamp': obj.timestamp,
    'RequestCount': obj.requestCount,
    'SampledCount': obj.sampledCount,
    'BorrowCount': obj.borrowCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRaySamplingTargetDocument
 */
export interface XRaySamplingTargetDocument {
  /**
   * @schema XRaySamplingTargetDocument#RuleName
   */
  readonly ruleName?: string;

  /**
   * @schema XRaySamplingTargetDocument#FixedRate
   */
  readonly fixedRate?: number;

  /**
   * @schema XRaySamplingTargetDocument#ReservoirQuota
   */
  readonly reservoirQuota?: number;

  /**
   * @schema XRaySamplingTargetDocument#ReservoirQuotaTTL
   */
  readonly reservoirQuotaTtl?: string;

  /**
   * @schema XRaySamplingTargetDocument#Interval
   */
  readonly interval?: number;

}

/**
 * Converts an object of type 'XRaySamplingTargetDocument' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRaySamplingTargetDocument(obj: XRaySamplingTargetDocument | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RuleName': obj.ruleName,
    'FixedRate': obj.fixedRate,
    'ReservoirQuota': obj.reservoirQuota,
    'ReservoirQuotaTTL': obj.reservoirQuotaTtl,
    'Interval': obj.interval,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayUnprocessedStatistics
 */
export interface XRayUnprocessedStatistics {
  /**
   * @schema XRayUnprocessedStatistics#RuleName
   */
  readonly ruleName?: string;

  /**
   * @schema XRayUnprocessedStatistics#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema XRayUnprocessedStatistics#Message
   */
  readonly message?: string;

}

/**
 * Converts an object of type 'XRayUnprocessedStatistics' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayUnprocessedStatistics(obj: XRayUnprocessedStatistics | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RuleName': obj.ruleName,
    'ErrorCode': obj.errorCode,
    'Message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayService
 */
export interface XRayService {
  /**
   * @schema XRayService#ReferenceId
   */
  readonly referenceId?: number;

  /**
   * @schema XRayService#Name
   */
  readonly name?: string;

  /**
   * @schema XRayService#Names
   */
  readonly names?: string[];

  /**
   * @schema XRayService#Root
   */
  readonly root?: boolean;

  /**
   * @schema XRayService#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema XRayService#Type
   */
  readonly type?: string;

  /**
   * @schema XRayService#State
   */
  readonly state?: string;

  /**
   * @schema XRayService#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema XRayService#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema XRayService#Edges
   */
  readonly edges?: XRayEdge[];

  /**
   * @schema XRayService#SummaryStatistics
   */
  readonly summaryStatistics?: XRayServiceStatistics;

  /**
   * @schema XRayService#DurationHistogram
   */
  readonly durationHistogram?: XRayHistogramEntry[];

  /**
   * @schema XRayService#ResponseTimeHistogram
   */
  readonly responseTimeHistogram?: XRayHistogramEntry[];

}

/**
 * Converts an object of type 'XRayService' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayService(obj: XRayService | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReferenceId': obj.referenceId,
    'Name': obj.name,
    'Names': obj.names?.map(y => y),
    'Root': obj.root,
    'AccountId': obj.accountId,
    'Type': obj.type,
    'State': obj.state,
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
    'Edges': obj.edges?.map(y => toJson_XRayEdge(y)),
    'SummaryStatistics': toJson_XRayServiceStatistics(obj.summaryStatistics),
    'DurationHistogram': obj.durationHistogram?.map(y => toJson_XRayHistogramEntry(y)),
    'ResponseTimeHistogram': obj.responseTimeHistogram?.map(y => toJson_XRayHistogramEntry(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayTimeSeriesServiceStatistics
 */
export interface XRayTimeSeriesServiceStatistics {
  /**
   * @schema XRayTimeSeriesServiceStatistics#Timestamp
   */
  readonly timestamp?: string;

  /**
   * @schema XRayTimeSeriesServiceStatistics#EdgeSummaryStatistics
   */
  readonly edgeSummaryStatistics?: XRayEdgeStatistics;

  /**
   * @schema XRayTimeSeriesServiceStatistics#ServiceSummaryStatistics
   */
  readonly serviceSummaryStatistics?: XRayServiceStatistics;

  /**
   * @schema XRayTimeSeriesServiceStatistics#ServiceForecastStatistics
   */
  readonly serviceForecastStatistics?: XRayForecastStatistics;

  /**
   * @schema XRayTimeSeriesServiceStatistics#ResponseTimeHistogram
   */
  readonly responseTimeHistogram?: XRayHistogramEntry[];

}

/**
 * Converts an object of type 'XRayTimeSeriesServiceStatistics' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayTimeSeriesServiceStatistics(obj: XRayTimeSeriesServiceStatistics | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Timestamp': obj.timestamp,
    'EdgeSummaryStatistics': toJson_XRayEdgeStatistics(obj.edgeSummaryStatistics),
    'ServiceSummaryStatistics': toJson_XRayServiceStatistics(obj.serviceSummaryStatistics),
    'ServiceForecastStatistics': toJson_XRayForecastStatistics(obj.serviceForecastStatistics),
    'ResponseTimeHistogram': obj.responseTimeHistogram?.map(y => toJson_XRayHistogramEntry(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRaySamplingStrategy
 */
export interface XRaySamplingStrategy {
  /**
   * @schema XRaySamplingStrategy#Name
   */
  readonly name?: string;

  /**
   * @schema XRaySamplingStrategy#Value
   */
  readonly value?: number;

}

/**
 * Converts an object of type 'XRaySamplingStrategy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRaySamplingStrategy(obj: XRaySamplingStrategy | undefined): Record<string, any> | undefined {
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
 * @schema XRayTraceSummary
 */
export interface XRayTraceSummary {
  /**
   * @schema XRayTraceSummary#Id
   */
  readonly id?: string;

  /**
   * @schema XRayTraceSummary#Duration
   */
  readonly duration?: number;

  /**
   * @schema XRayTraceSummary#ResponseTime
   */
  readonly responseTime?: number;

  /**
   * @schema XRayTraceSummary#HasFault
   */
  readonly hasFault?: boolean;

  /**
   * @schema XRayTraceSummary#HasError
   */
  readonly hasError?: boolean;

  /**
   * @schema XRayTraceSummary#HasThrottle
   */
  readonly hasThrottle?: boolean;

  /**
   * @schema XRayTraceSummary#IsPartial
   */
  readonly isPartial?: boolean;

  /**
   * @schema XRayTraceSummary#Http
   */
  readonly http?: XRayHttp;

  /**
   * @schema XRayTraceSummary#Annotations
   */
  readonly annotations?: { [key: string]: XRayValueWithServiceIds[] };

  /**
   * @schema XRayTraceSummary#Users
   */
  readonly users?: XRayTraceUser[];

  /**
   * @schema XRayTraceSummary#ServiceIds
   */
  readonly serviceIds?: XRayServiceId[];

  /**
   * @schema XRayTraceSummary#ResourceARNs
   */
  readonly resourceArNs?: XRayResourceArnDetail[];

  /**
   * @schema XRayTraceSummary#InstanceIds
   */
  readonly instanceIds?: XRayInstanceIdDetail[];

  /**
   * @schema XRayTraceSummary#AvailabilityZones
   */
  readonly availabilityZones?: XRayAvailabilityZoneDetail[];

  /**
   * @schema XRayTraceSummary#EntryPoint
   */
  readonly entryPoint?: XRayServiceId;

  /**
   * @schema XRayTraceSummary#FaultRootCauses
   */
  readonly faultRootCauses?: XRayFaultRootCause[];

  /**
   * @schema XRayTraceSummary#ErrorRootCauses
   */
  readonly errorRootCauses?: XRayErrorRootCause[];

  /**
   * @schema XRayTraceSummary#ResponseTimeRootCauses
   */
  readonly responseTimeRootCauses?: XRayResponseTimeRootCause[];

  /**
   * @schema XRayTraceSummary#Revision
   */
  readonly revision?: number;

  /**
   * @schema XRayTraceSummary#MatchedEventTime
   */
  readonly matchedEventTime?: string;

}

/**
 * Converts an object of type 'XRayTraceSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayTraceSummary(obj: XRayTraceSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Duration': obj.duration,
    'ResponseTime': obj.responseTime,
    'HasFault': obj.hasFault,
    'HasError': obj.hasError,
    'HasThrottle': obj.hasThrottle,
    'IsPartial': obj.isPartial,
    'Http': toJson_XRayHttp(obj.http),
    'Annotations': ((obj.annotations) === undefined) ? undefined : (Object.entries(obj.annotations).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => toJson_XRayValueWithServiceIds(y)) }), {})),
    'Users': obj.users?.map(y => toJson_XRayTraceUser(y)),
    'ServiceIds': obj.serviceIds?.map(y => toJson_XRayServiceId(y)),
    'ResourceARNs': obj.resourceArNs?.map(y => toJson_XRayResourceArnDetail(y)),
    'InstanceIds': obj.instanceIds?.map(y => toJson_XRayInstanceIdDetail(y)),
    'AvailabilityZones': obj.availabilityZones?.map(y => toJson_XRayAvailabilityZoneDetail(y)),
    'EntryPoint': toJson_XRayServiceId(obj.entryPoint),
    'FaultRootCauses': obj.faultRootCauses?.map(y => toJson_XRayFaultRootCause(y)),
    'ErrorRootCauses': obj.errorRootCauses?.map(y => toJson_XRayErrorRootCause(y)),
    'ResponseTimeRootCauses': obj.responseTimeRootCauses?.map(y => toJson_XRayResponseTimeRootCause(y)),
    'Revision': obj.revision,
    'MatchedEventTime': obj.matchedEventTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayTelemetryRecord
 */
export interface XRayTelemetryRecord {
  /**
   * @schema XRayTelemetryRecord#Timestamp
   */
  readonly timestamp?: string;

  /**
   * @schema XRayTelemetryRecord#SegmentsReceivedCount
   */
  readonly segmentsReceivedCount?: number;

  /**
   * @schema XRayTelemetryRecord#SegmentsSentCount
   */
  readonly segmentsSentCount?: number;

  /**
   * @schema XRayTelemetryRecord#SegmentsSpilloverCount
   */
  readonly segmentsSpilloverCount?: number;

  /**
   * @schema XRayTelemetryRecord#SegmentsRejectedCount
   */
  readonly segmentsRejectedCount?: number;

  /**
   * @schema XRayTelemetryRecord#BackendConnectionErrors
   */
  readonly backendConnectionErrors?: XRayBackendConnectionErrors;

}

/**
 * Converts an object of type 'XRayTelemetryRecord' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayTelemetryRecord(obj: XRayTelemetryRecord | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Timestamp': obj.timestamp,
    'SegmentsReceivedCount': obj.segmentsReceivedCount,
    'SegmentsSentCount': obj.segmentsSentCount,
    'SegmentsSpilloverCount': obj.segmentsSpilloverCount,
    'SegmentsRejectedCount': obj.segmentsRejectedCount,
    'BackendConnectionErrors': toJson_XRayBackendConnectionErrors(obj.backendConnectionErrors),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayUnprocessedTraceSegment
 */
export interface XRayUnprocessedTraceSegment {
  /**
   * @schema XRayUnprocessedTraceSegment#Id
   */
  readonly id?: string;

  /**
   * @schema XRayUnprocessedTraceSegment#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema XRayUnprocessedTraceSegment#Message
   */
  readonly message?: string;

}

/**
 * Converts an object of type 'XRayUnprocessedTraceSegment' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayUnprocessedTraceSegment(obj: XRayUnprocessedTraceSegment | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'ErrorCode': obj.errorCode,
    'Message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRaySamplingRuleUpdate
 */
export interface XRaySamplingRuleUpdate {
  /**
   * @schema XRaySamplingRuleUpdate#RuleName
   */
  readonly ruleName?: string;

  /**
   * @schema XRaySamplingRuleUpdate#RuleARN
   */
  readonly ruleArn?: string;

  /**
   * @schema XRaySamplingRuleUpdate#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema XRaySamplingRuleUpdate#Priority
   */
  readonly priority?: number;

  /**
   * @schema XRaySamplingRuleUpdate#FixedRate
   */
  readonly fixedRate?: number;

  /**
   * @schema XRaySamplingRuleUpdate#ReservoirSize
   */
  readonly reservoirSize?: number;

  /**
   * @schema XRaySamplingRuleUpdate#Host
   */
  readonly host?: string;

  /**
   * @schema XRaySamplingRuleUpdate#ServiceName
   */
  readonly serviceName?: string;

  /**
   * @schema XRaySamplingRuleUpdate#ServiceType
   */
  readonly serviceType?: string;

  /**
   * @schema XRaySamplingRuleUpdate#HTTPMethod
   */
  readonly httpMethod?: string;

  /**
   * @schema XRaySamplingRuleUpdate#URLPath
   */
  readonly urlPath?: string;

  /**
   * @schema XRaySamplingRuleUpdate#Attributes
   */
  readonly attributes?: { [key: string]: string };

}

/**
 * Converts an object of type 'XRaySamplingRuleUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRaySamplingRuleUpdate(obj: XRaySamplingRuleUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RuleName': obj.ruleName,
    'RuleARN': obj.ruleArn,
    'ResourceARN': obj.resourceArn,
    'Priority': obj.priority,
    'FixedRate': obj.fixedRate,
    'ReservoirSize': obj.reservoirSize,
    'Host': obj.host,
    'ServiceName': obj.serviceName,
    'ServiceType': obj.serviceType,
    'HTTPMethod': obj.httpMethod,
    'URLPath': obj.urlPath,
    'Attributes': ((obj.attributes) === undefined) ? undefined : (Object.entries(obj.attributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRaySegment
 */
export interface XRaySegment {
  /**
   * @schema XRaySegment#Id
   */
  readonly id?: string;

  /**
   * @schema XRaySegment#Document
   */
  readonly document?: string;

}

/**
 * Converts an object of type 'XRaySegment' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRaySegment(obj: XRaySegment | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Document': obj.document,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayServiceId
 */
export interface XRayServiceId {
  /**
   * @schema XRayServiceId#Name
   */
  readonly name?: string;

  /**
   * @schema XRayServiceId#Names
   */
  readonly names?: string[];

  /**
   * @schema XRayServiceId#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema XRayServiceId#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'XRayServiceId' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayServiceId(obj: XRayServiceId | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Names': obj.names?.map(y => y),
    'AccountId': obj.accountId,
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayRequestImpactStatistics
 */
export interface XRayRequestImpactStatistics {
  /**
   * @schema XRayRequestImpactStatistics#FaultCount
   */
  readonly faultCount?: number;

  /**
   * @schema XRayRequestImpactStatistics#OkCount
   */
  readonly okCount?: number;

  /**
   * @schema XRayRequestImpactStatistics#TotalCount
   */
  readonly totalCount?: number;

}

/**
 * Converts an object of type 'XRayRequestImpactStatistics' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayRequestImpactStatistics(obj: XRayRequestImpactStatistics | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FaultCount': obj.faultCount,
    'OkCount': obj.okCount,
    'TotalCount': obj.totalCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayAnomalousService
 */
export interface XRayAnomalousService {
  /**
   * @schema XRayAnomalousService#ServiceId
   */
  readonly serviceId?: XRayServiceId;

}

/**
 * Converts an object of type 'XRayAnomalousService' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayAnomalousService(obj: XRayAnomalousService | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceId': toJson_XRayServiceId(obj.serviceId),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayInsightImpactGraphEdge
 */
export interface XRayInsightImpactGraphEdge {
  /**
   * @schema XRayInsightImpactGraphEdge#ReferenceId
   */
  readonly referenceId?: number;

}

/**
 * Converts an object of type 'XRayInsightImpactGraphEdge' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayInsightImpactGraphEdge(obj: XRayInsightImpactGraphEdge | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReferenceId': obj.referenceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayEdge
 */
export interface XRayEdge {
  /**
   * @schema XRayEdge#ReferenceId
   */
  readonly referenceId?: number;

  /**
   * @schema XRayEdge#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema XRayEdge#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema XRayEdge#SummaryStatistics
   */
  readonly summaryStatistics?: XRayEdgeStatistics;

  /**
   * @schema XRayEdge#ResponseTimeHistogram
   */
  readonly responseTimeHistogram?: XRayHistogramEntry[];

  /**
   * @schema XRayEdge#Aliases
   */
  readonly aliases?: XRayAlias[];

}

/**
 * Converts an object of type 'XRayEdge' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayEdge(obj: XRayEdge | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReferenceId': obj.referenceId,
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
    'SummaryStatistics': toJson_XRayEdgeStatistics(obj.summaryStatistics),
    'ResponseTimeHistogram': obj.responseTimeHistogram?.map(y => toJson_XRayHistogramEntry(y)),
    'Aliases': obj.aliases?.map(y => toJson_XRayAlias(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayServiceStatistics
 */
export interface XRayServiceStatistics {
  /**
   * @schema XRayServiceStatistics#OkCount
   */
  readonly okCount?: number;

  /**
   * @schema XRayServiceStatistics#ErrorStatistics
   */
  readonly errorStatistics?: XRayErrorStatistics;

  /**
   * @schema XRayServiceStatistics#FaultStatistics
   */
  readonly faultStatistics?: XRayFaultStatistics;

  /**
   * @schema XRayServiceStatistics#TotalCount
   */
  readonly totalCount?: number;

  /**
   * @schema XRayServiceStatistics#TotalResponseTime
   */
  readonly totalResponseTime?: number;

}

/**
 * Converts an object of type 'XRayServiceStatistics' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayServiceStatistics(obj: XRayServiceStatistics | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OkCount': obj.okCount,
    'ErrorStatistics': toJson_XRayErrorStatistics(obj.errorStatistics),
    'FaultStatistics': toJson_XRayFaultStatistics(obj.faultStatistics),
    'TotalCount': obj.totalCount,
    'TotalResponseTime': obj.totalResponseTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayHistogramEntry
 */
export interface XRayHistogramEntry {
  /**
   * @schema XRayHistogramEntry#Value
   */
  readonly value?: number;

  /**
   * @schema XRayHistogramEntry#Count
   */
  readonly count?: number;

}

/**
 * Converts an object of type 'XRayHistogramEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayHistogramEntry(obj: XRayHistogramEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Value': obj.value,
    'Count': obj.count,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayEdgeStatistics
 */
export interface XRayEdgeStatistics {
  /**
   * @schema XRayEdgeStatistics#OkCount
   */
  readonly okCount?: number;

  /**
   * @schema XRayEdgeStatistics#ErrorStatistics
   */
  readonly errorStatistics?: XRayErrorStatistics;

  /**
   * @schema XRayEdgeStatistics#FaultStatistics
   */
  readonly faultStatistics?: XRayFaultStatistics;

  /**
   * @schema XRayEdgeStatistics#TotalCount
   */
  readonly totalCount?: number;

  /**
   * @schema XRayEdgeStatistics#TotalResponseTime
   */
  readonly totalResponseTime?: number;

}

/**
 * Converts an object of type 'XRayEdgeStatistics' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayEdgeStatistics(obj: XRayEdgeStatistics | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OkCount': obj.okCount,
    'ErrorStatistics': toJson_XRayErrorStatistics(obj.errorStatistics),
    'FaultStatistics': toJson_XRayFaultStatistics(obj.faultStatistics),
    'TotalCount': obj.totalCount,
    'TotalResponseTime': obj.totalResponseTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayForecastStatistics
 */
export interface XRayForecastStatistics {
  /**
   * @schema XRayForecastStatistics#FaultCountHigh
   */
  readonly faultCountHigh?: number;

  /**
   * @schema XRayForecastStatistics#FaultCountLow
   */
  readonly faultCountLow?: number;

}

/**
 * Converts an object of type 'XRayForecastStatistics' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayForecastStatistics(obj: XRayForecastStatistics | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FaultCountHigh': obj.faultCountHigh,
    'FaultCountLow': obj.faultCountLow,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayHttp
 */
export interface XRayHttp {
  /**
   * @schema XRayHttp#HttpURL
   */
  readonly httpUrl?: string;

  /**
   * @schema XRayHttp#HttpStatus
   */
  readonly httpStatus?: number;

  /**
   * @schema XRayHttp#HttpMethod
   */
  readonly httpMethod?: string;

  /**
   * @schema XRayHttp#UserAgent
   */
  readonly userAgent?: string;

  /**
   * @schema XRayHttp#ClientIp
   */
  readonly clientIp?: string;

}

/**
 * Converts an object of type 'XRayHttp' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayHttp(obj: XRayHttp | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HttpURL': obj.httpUrl,
    'HttpStatus': obj.httpStatus,
    'HttpMethod': obj.httpMethod,
    'UserAgent': obj.userAgent,
    'ClientIp': obj.clientIp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayValueWithServiceIds
 */
export interface XRayValueWithServiceIds {
  /**
   * @schema XRayValueWithServiceIds#AnnotationValue
   */
  readonly annotationValue?: XRayAnnotationValue;

  /**
   * @schema XRayValueWithServiceIds#ServiceIds
   */
  readonly serviceIds?: XRayServiceId[];

}

/**
 * Converts an object of type 'XRayValueWithServiceIds' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayValueWithServiceIds(obj: XRayValueWithServiceIds | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AnnotationValue': toJson_XRayAnnotationValue(obj.annotationValue),
    'ServiceIds': obj.serviceIds?.map(y => toJson_XRayServiceId(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayTraceUser
 */
export interface XRayTraceUser {
  /**
   * @schema XRayTraceUser#UserName
   */
  readonly userName?: string;

  /**
   * @schema XRayTraceUser#ServiceIds
   */
  readonly serviceIds?: XRayServiceId[];

}

/**
 * Converts an object of type 'XRayTraceUser' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayTraceUser(obj: XRayTraceUser | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
    'ServiceIds': obj.serviceIds?.map(y => toJson_XRayServiceId(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayResourceArnDetail
 */
export interface XRayResourceArnDetail {
  /**
   * @schema XRayResourceArnDetail#ARN
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'XRayResourceArnDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayResourceArnDetail(obj: XRayResourceArnDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ARN': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayInstanceIdDetail
 */
export interface XRayInstanceIdDetail {
  /**
   * @schema XRayInstanceIdDetail#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'XRayInstanceIdDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayInstanceIdDetail(obj: XRayInstanceIdDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayAvailabilityZoneDetail
 */
export interface XRayAvailabilityZoneDetail {
  /**
   * @schema XRayAvailabilityZoneDetail#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'XRayAvailabilityZoneDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayAvailabilityZoneDetail(obj: XRayAvailabilityZoneDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayFaultRootCause
 */
export interface XRayFaultRootCause {
  /**
   * @schema XRayFaultRootCause#Services
   */
  readonly services?: XRayFaultRootCauseService[];

  /**
   * @schema XRayFaultRootCause#ClientImpacting
   */
  readonly clientImpacting?: boolean;

}

/**
 * Converts an object of type 'XRayFaultRootCause' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayFaultRootCause(obj: XRayFaultRootCause | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Services': obj.services?.map(y => toJson_XRayFaultRootCauseService(y)),
    'ClientImpacting': obj.clientImpacting,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayErrorRootCause
 */
export interface XRayErrorRootCause {
  /**
   * @schema XRayErrorRootCause#Services
   */
  readonly services?: XRayErrorRootCauseService[];

  /**
   * @schema XRayErrorRootCause#ClientImpacting
   */
  readonly clientImpacting?: boolean;

}

/**
 * Converts an object of type 'XRayErrorRootCause' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayErrorRootCause(obj: XRayErrorRootCause | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Services': obj.services?.map(y => toJson_XRayErrorRootCauseService(y)),
    'ClientImpacting': obj.clientImpacting,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayResponseTimeRootCause
 */
export interface XRayResponseTimeRootCause {
  /**
   * @schema XRayResponseTimeRootCause#Services
   */
  readonly services?: XRayResponseTimeRootCauseService[];

  /**
   * @schema XRayResponseTimeRootCause#ClientImpacting
   */
  readonly clientImpacting?: boolean;

}

/**
 * Converts an object of type 'XRayResponseTimeRootCause' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayResponseTimeRootCause(obj: XRayResponseTimeRootCause | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Services': obj.services?.map(y => toJson_XRayResponseTimeRootCauseService(y)),
    'ClientImpacting': obj.clientImpacting,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayBackendConnectionErrors
 */
export interface XRayBackendConnectionErrors {
  /**
   * @schema XRayBackendConnectionErrors#TimeoutCount
   */
  readonly timeoutCount?: number;

  /**
   * @schema XRayBackendConnectionErrors#ConnectionRefusedCount
   */
  readonly connectionRefusedCount?: number;

  /**
   * @schema XRayBackendConnectionErrors#HTTPCode4XXCount
   */
  readonly httpCode4XxCount?: number;

  /**
   * @schema XRayBackendConnectionErrors#HTTPCode5XXCount
   */
  readonly httpCode5XxCount?: number;

  /**
   * @schema XRayBackendConnectionErrors#UnknownHostCount
   */
  readonly unknownHostCount?: number;

  /**
   * @schema XRayBackendConnectionErrors#OtherCount
   */
  readonly otherCount?: number;

}

/**
 * Converts an object of type 'XRayBackendConnectionErrors' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayBackendConnectionErrors(obj: XRayBackendConnectionErrors | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TimeoutCount': obj.timeoutCount,
    'ConnectionRefusedCount': obj.connectionRefusedCount,
    'HTTPCode4XXCount': obj.httpCode4XxCount,
    'HTTPCode5XXCount': obj.httpCode5XxCount,
    'UnknownHostCount': obj.unknownHostCount,
    'OtherCount': obj.otherCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayAlias
 */
export interface XRayAlias {
  /**
   * @schema XRayAlias#Name
   */
  readonly name?: string;

  /**
   * @schema XRayAlias#Names
   */
  readonly names?: string[];

  /**
   * @schema XRayAlias#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'XRayAlias' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayAlias(obj: XRayAlias | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Names': obj.names?.map(y => y),
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayErrorStatistics
 */
export interface XRayErrorStatistics {
  /**
   * @schema XRayErrorStatistics#ThrottleCount
   */
  readonly throttleCount?: number;

  /**
   * @schema XRayErrorStatistics#OtherCount
   */
  readonly otherCount?: number;

  /**
   * @schema XRayErrorStatistics#TotalCount
   */
  readonly totalCount?: number;

}

/**
 * Converts an object of type 'XRayErrorStatistics' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayErrorStatistics(obj: XRayErrorStatistics | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ThrottleCount': obj.throttleCount,
    'OtherCount': obj.otherCount,
    'TotalCount': obj.totalCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayFaultStatistics
 */
export interface XRayFaultStatistics {
  /**
   * @schema XRayFaultStatistics#OtherCount
   */
  readonly otherCount?: number;

  /**
   * @schema XRayFaultStatistics#TotalCount
   */
  readonly totalCount?: number;

}

/**
 * Converts an object of type 'XRayFaultStatistics' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayFaultStatistics(obj: XRayFaultStatistics | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OtherCount': obj.otherCount,
    'TotalCount': obj.totalCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayAnnotationValue
 */
export interface XRayAnnotationValue {
  /**
   * @schema XRayAnnotationValue#NumberValue
   */
  readonly numberValue?: number;

  /**
   * @schema XRayAnnotationValue#BooleanValue
   */
  readonly booleanValue?: boolean;

  /**
   * @schema XRayAnnotationValue#StringValue
   */
  readonly stringValue?: string;

}

/**
 * Converts an object of type 'XRayAnnotationValue' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayAnnotationValue(obj: XRayAnnotationValue | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NumberValue': obj.numberValue,
    'BooleanValue': obj.booleanValue,
    'StringValue': obj.stringValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayFaultRootCauseService
 */
export interface XRayFaultRootCauseService {
  /**
   * @schema XRayFaultRootCauseService#Name
   */
  readonly name?: string;

  /**
   * @schema XRayFaultRootCauseService#Names
   */
  readonly names?: string[];

  /**
   * @schema XRayFaultRootCauseService#Type
   */
  readonly type?: string;

  /**
   * @schema XRayFaultRootCauseService#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema XRayFaultRootCauseService#EntityPath
   */
  readonly entityPath?: XRayFaultRootCauseEntity[];

  /**
   * @schema XRayFaultRootCauseService#Inferred
   */
  readonly inferred?: boolean;

}

/**
 * Converts an object of type 'XRayFaultRootCauseService' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayFaultRootCauseService(obj: XRayFaultRootCauseService | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Names': obj.names?.map(y => y),
    'Type': obj.type,
    'AccountId': obj.accountId,
    'EntityPath': obj.entityPath?.map(y => toJson_XRayFaultRootCauseEntity(y)),
    'Inferred': obj.inferred,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayErrorRootCauseService
 */
export interface XRayErrorRootCauseService {
  /**
   * @schema XRayErrorRootCauseService#Name
   */
  readonly name?: string;

  /**
   * @schema XRayErrorRootCauseService#Names
   */
  readonly names?: string[];

  /**
   * @schema XRayErrorRootCauseService#Type
   */
  readonly type?: string;

  /**
   * @schema XRayErrorRootCauseService#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema XRayErrorRootCauseService#EntityPath
   */
  readonly entityPath?: XRayErrorRootCauseEntity[];

  /**
   * @schema XRayErrorRootCauseService#Inferred
   */
  readonly inferred?: boolean;

}

/**
 * Converts an object of type 'XRayErrorRootCauseService' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayErrorRootCauseService(obj: XRayErrorRootCauseService | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Names': obj.names?.map(y => y),
    'Type': obj.type,
    'AccountId': obj.accountId,
    'EntityPath': obj.entityPath?.map(y => toJson_XRayErrorRootCauseEntity(y)),
    'Inferred': obj.inferred,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayResponseTimeRootCauseService
 */
export interface XRayResponseTimeRootCauseService {
  /**
   * @schema XRayResponseTimeRootCauseService#Name
   */
  readonly name?: string;

  /**
   * @schema XRayResponseTimeRootCauseService#Names
   */
  readonly names?: string[];

  /**
   * @schema XRayResponseTimeRootCauseService#Type
   */
  readonly type?: string;

  /**
   * @schema XRayResponseTimeRootCauseService#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema XRayResponseTimeRootCauseService#EntityPath
   */
  readonly entityPath?: XRayResponseTimeRootCauseEntity[];

  /**
   * @schema XRayResponseTimeRootCauseService#Inferred
   */
  readonly inferred?: boolean;

}

/**
 * Converts an object of type 'XRayResponseTimeRootCauseService' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayResponseTimeRootCauseService(obj: XRayResponseTimeRootCauseService | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Names': obj.names?.map(y => y),
    'Type': obj.type,
    'AccountId': obj.accountId,
    'EntityPath': obj.entityPath?.map(y => toJson_XRayResponseTimeRootCauseEntity(y)),
    'Inferred': obj.inferred,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayFaultRootCauseEntity
 */
export interface XRayFaultRootCauseEntity {
  /**
   * @schema XRayFaultRootCauseEntity#Name
   */
  readonly name?: string;

  /**
   * @schema XRayFaultRootCauseEntity#Exceptions
   */
  readonly exceptions?: XRayRootCauseException[];

  /**
   * @schema XRayFaultRootCauseEntity#Remote
   */
  readonly remote?: boolean;

}

/**
 * Converts an object of type 'XRayFaultRootCauseEntity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayFaultRootCauseEntity(obj: XRayFaultRootCauseEntity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Exceptions': obj.exceptions?.map(y => toJson_XRayRootCauseException(y)),
    'Remote': obj.remote,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayErrorRootCauseEntity
 */
export interface XRayErrorRootCauseEntity {
  /**
   * @schema XRayErrorRootCauseEntity#Name
   */
  readonly name?: string;

  /**
   * @schema XRayErrorRootCauseEntity#Exceptions
   */
  readonly exceptions?: XRayRootCauseException[];

  /**
   * @schema XRayErrorRootCauseEntity#Remote
   */
  readonly remote?: boolean;

}

/**
 * Converts an object of type 'XRayErrorRootCauseEntity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayErrorRootCauseEntity(obj: XRayErrorRootCauseEntity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Exceptions': obj.exceptions?.map(y => toJson_XRayRootCauseException(y)),
    'Remote': obj.remote,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayResponseTimeRootCauseEntity
 */
export interface XRayResponseTimeRootCauseEntity {
  /**
   * @schema XRayResponseTimeRootCauseEntity#Name
   */
  readonly name?: string;

  /**
   * @schema XRayResponseTimeRootCauseEntity#Coverage
   */
  readonly coverage?: number;

  /**
   * @schema XRayResponseTimeRootCauseEntity#Remote
   */
  readonly remote?: boolean;

}

/**
 * Converts an object of type 'XRayResponseTimeRootCauseEntity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayResponseTimeRootCauseEntity(obj: XRayResponseTimeRootCauseEntity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Coverage': obj.coverage,
    'Remote': obj.remote,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XRayRootCauseException
 */
export interface XRayRootCauseException {
  /**
   * @schema XRayRootCauseException#Name
   */
  readonly name?: string;

  /**
   * @schema XRayRootCauseException#Message
   */
  readonly message?: string;

}

/**
 * Converts an object of type 'XRayRootCauseException' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XRayRootCauseException(obj: XRayRootCauseException | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
