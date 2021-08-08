/**
 * @schema ApplicationInsightsCreateApplicationRequest
 */
export interface ApplicationInsightsCreateApplicationRequest {
  /**
   * @schema ApplicationInsightsCreateApplicationRequest#ResourceGroupName
   */
  readonly resourceGroupName?: string;

  /**
   * @schema ApplicationInsightsCreateApplicationRequest#OpsCenterEnabled
   */
  readonly opsCenterEnabled?: boolean;

  /**
   * @schema ApplicationInsightsCreateApplicationRequest#CWEMonitorEnabled
   */
  readonly cweMonitorEnabled?: boolean;

  /**
   * @schema ApplicationInsightsCreateApplicationRequest#OpsItemSNSTopicArn
   */
  readonly opsItemSnsTopicArn?: string;

  /**
   * @schema ApplicationInsightsCreateApplicationRequest#Tags
   */
  readonly tags?: ApplicationInsightsTag[];

}

/**
 * Converts an object of type 'ApplicationInsightsCreateApplicationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationInsightsCreateApplicationRequest(obj: ApplicationInsightsCreateApplicationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceGroupName': obj.resourceGroupName,
    'OpsCenterEnabled': obj.opsCenterEnabled,
    'CWEMonitorEnabled': obj.cweMonitorEnabled,
    'OpsItemSNSTopicArn': obj.opsItemSnsTopicArn,
    'Tags': obj.tags?.map(y => toJson_ApplicationInsightsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationInsightsCreateApplicationResponse
 */
export interface ApplicationInsightsCreateApplicationResponse {
  /**
   * @schema ApplicationInsightsCreateApplicationResponse#ApplicationInfo
   */
  readonly applicationInfo?: ApplicationInsightsApplicationInfo;

}

/**
 * Converts an object of type 'ApplicationInsightsCreateApplicationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationInsightsCreateApplicationResponse(obj: ApplicationInsightsCreateApplicationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationInfo': toJson_ApplicationInsightsApplicationInfo(obj.applicationInfo),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationInsightsCreateComponentRequest
 */
export interface ApplicationInsightsCreateComponentRequest {
  /**
   * @schema ApplicationInsightsCreateComponentRequest#ResourceGroupName
   */
  readonly resourceGroupName?: string;

  /**
   * @schema ApplicationInsightsCreateComponentRequest#ComponentName
   */
  readonly componentName?: string;

  /**
   * @schema ApplicationInsightsCreateComponentRequest#ResourceList
   */
  readonly resourceList?: string[];

}

/**
 * Converts an object of type 'ApplicationInsightsCreateComponentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationInsightsCreateComponentRequest(obj: ApplicationInsightsCreateComponentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceGroupName': obj.resourceGroupName,
    'ComponentName': obj.componentName,
    'ResourceList': obj.resourceList?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationInsightsCreateComponentResponse
 */
export interface ApplicationInsightsCreateComponentResponse {
}

/**
 * Converts an object of type 'ApplicationInsightsCreateComponentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationInsightsCreateComponentResponse(obj: ApplicationInsightsCreateComponentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationInsightsCreateLogPatternRequest
 */
export interface ApplicationInsightsCreateLogPatternRequest {
  /**
   * @schema ApplicationInsightsCreateLogPatternRequest#ResourceGroupName
   */
  readonly resourceGroupName?: string;

  /**
   * @schema ApplicationInsightsCreateLogPatternRequest#PatternSetName
   */
  readonly patternSetName?: string;

  /**
   * @schema ApplicationInsightsCreateLogPatternRequest#PatternName
   */
  readonly patternName?: string;

  /**
   * @schema ApplicationInsightsCreateLogPatternRequest#Pattern
   */
  readonly pattern?: string;

  /**
   * @schema ApplicationInsightsCreateLogPatternRequest#Rank
   */
  readonly rank?: number;

}

/**
 * Converts an object of type 'ApplicationInsightsCreateLogPatternRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationInsightsCreateLogPatternRequest(obj: ApplicationInsightsCreateLogPatternRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceGroupName': obj.resourceGroupName,
    'PatternSetName': obj.patternSetName,
    'PatternName': obj.patternName,
    'Pattern': obj.pattern,
    'Rank': obj.rank,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationInsightsCreateLogPatternResponse
 */
export interface ApplicationInsightsCreateLogPatternResponse {
  /**
   * @schema ApplicationInsightsCreateLogPatternResponse#LogPattern
   */
  readonly logPattern?: ApplicationInsightsLogPattern;

  /**
   * @schema ApplicationInsightsCreateLogPatternResponse#ResourceGroupName
   */
  readonly resourceGroupName?: string;

}

/**
 * Converts an object of type 'ApplicationInsightsCreateLogPatternResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationInsightsCreateLogPatternResponse(obj: ApplicationInsightsCreateLogPatternResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LogPattern': toJson_ApplicationInsightsLogPattern(obj.logPattern),
    'ResourceGroupName': obj.resourceGroupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationInsightsDeleteApplicationRequest
 */
export interface ApplicationInsightsDeleteApplicationRequest {
  /**
   * @schema ApplicationInsightsDeleteApplicationRequest#ResourceGroupName
   */
  readonly resourceGroupName?: string;

}

/**
 * Converts an object of type 'ApplicationInsightsDeleteApplicationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationInsightsDeleteApplicationRequest(obj: ApplicationInsightsDeleteApplicationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceGroupName': obj.resourceGroupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationInsightsDeleteApplicationResponse
 */
export interface ApplicationInsightsDeleteApplicationResponse {
}

/**
 * Converts an object of type 'ApplicationInsightsDeleteApplicationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationInsightsDeleteApplicationResponse(obj: ApplicationInsightsDeleteApplicationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationInsightsDeleteComponentRequest
 */
export interface ApplicationInsightsDeleteComponentRequest {
  /**
   * @schema ApplicationInsightsDeleteComponentRequest#ResourceGroupName
   */
  readonly resourceGroupName?: string;

  /**
   * @schema ApplicationInsightsDeleteComponentRequest#ComponentName
   */
  readonly componentName?: string;

}

/**
 * Converts an object of type 'ApplicationInsightsDeleteComponentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationInsightsDeleteComponentRequest(obj: ApplicationInsightsDeleteComponentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceGroupName': obj.resourceGroupName,
    'ComponentName': obj.componentName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationInsightsDeleteComponentResponse
 */
export interface ApplicationInsightsDeleteComponentResponse {
}

/**
 * Converts an object of type 'ApplicationInsightsDeleteComponentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationInsightsDeleteComponentResponse(obj: ApplicationInsightsDeleteComponentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationInsightsDeleteLogPatternRequest
 */
export interface ApplicationInsightsDeleteLogPatternRequest {
  /**
   * @schema ApplicationInsightsDeleteLogPatternRequest#ResourceGroupName
   */
  readonly resourceGroupName?: string;

  /**
   * @schema ApplicationInsightsDeleteLogPatternRequest#PatternSetName
   */
  readonly patternSetName?: string;

  /**
   * @schema ApplicationInsightsDeleteLogPatternRequest#PatternName
   */
  readonly patternName?: string;

}

/**
 * Converts an object of type 'ApplicationInsightsDeleteLogPatternRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationInsightsDeleteLogPatternRequest(obj: ApplicationInsightsDeleteLogPatternRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceGroupName': obj.resourceGroupName,
    'PatternSetName': obj.patternSetName,
    'PatternName': obj.patternName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationInsightsDeleteLogPatternResponse
 */
export interface ApplicationInsightsDeleteLogPatternResponse {
}

/**
 * Converts an object of type 'ApplicationInsightsDeleteLogPatternResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationInsightsDeleteLogPatternResponse(obj: ApplicationInsightsDeleteLogPatternResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationInsightsDescribeApplicationRequest
 */
export interface ApplicationInsightsDescribeApplicationRequest {
  /**
   * @schema ApplicationInsightsDescribeApplicationRequest#ResourceGroupName
   */
  readonly resourceGroupName?: string;

}

/**
 * Converts an object of type 'ApplicationInsightsDescribeApplicationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationInsightsDescribeApplicationRequest(obj: ApplicationInsightsDescribeApplicationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceGroupName': obj.resourceGroupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationInsightsDescribeApplicationResponse
 */
export interface ApplicationInsightsDescribeApplicationResponse {
  /**
   * @schema ApplicationInsightsDescribeApplicationResponse#ApplicationInfo
   */
  readonly applicationInfo?: ApplicationInsightsApplicationInfo;

}

/**
 * Converts an object of type 'ApplicationInsightsDescribeApplicationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationInsightsDescribeApplicationResponse(obj: ApplicationInsightsDescribeApplicationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationInfo': toJson_ApplicationInsightsApplicationInfo(obj.applicationInfo),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationInsightsDescribeComponentRequest
 */
export interface ApplicationInsightsDescribeComponentRequest {
  /**
   * @schema ApplicationInsightsDescribeComponentRequest#ResourceGroupName
   */
  readonly resourceGroupName?: string;

  /**
   * @schema ApplicationInsightsDescribeComponentRequest#ComponentName
   */
  readonly componentName?: string;

}

/**
 * Converts an object of type 'ApplicationInsightsDescribeComponentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationInsightsDescribeComponentRequest(obj: ApplicationInsightsDescribeComponentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceGroupName': obj.resourceGroupName,
    'ComponentName': obj.componentName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationInsightsDescribeComponentResponse
 */
export interface ApplicationInsightsDescribeComponentResponse {
  /**
   * @schema ApplicationInsightsDescribeComponentResponse#ApplicationComponent
   */
  readonly applicationComponent?: ApplicationInsightsApplicationComponent;

  /**
   * @schema ApplicationInsightsDescribeComponentResponse#ResourceList
   */
  readonly resourceList?: string[];

}

/**
 * Converts an object of type 'ApplicationInsightsDescribeComponentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationInsightsDescribeComponentResponse(obj: ApplicationInsightsDescribeComponentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationComponent': toJson_ApplicationInsightsApplicationComponent(obj.applicationComponent),
    'ResourceList': obj.resourceList?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationInsightsDescribeComponentConfigurationRequest
 */
export interface ApplicationInsightsDescribeComponentConfigurationRequest {
  /**
   * @schema ApplicationInsightsDescribeComponentConfigurationRequest#ResourceGroupName
   */
  readonly resourceGroupName?: string;

  /**
   * @schema ApplicationInsightsDescribeComponentConfigurationRequest#ComponentName
   */
  readonly componentName?: string;

}

/**
 * Converts an object of type 'ApplicationInsightsDescribeComponentConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationInsightsDescribeComponentConfigurationRequest(obj: ApplicationInsightsDescribeComponentConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceGroupName': obj.resourceGroupName,
    'ComponentName': obj.componentName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationInsightsDescribeComponentConfigurationResponse
 */
export interface ApplicationInsightsDescribeComponentConfigurationResponse {
  /**
   * @schema ApplicationInsightsDescribeComponentConfigurationResponse#Monitor
   */
  readonly monitor?: boolean;

  /**
   * @schema ApplicationInsightsDescribeComponentConfigurationResponse#Tier
   */
  readonly tier?: string;

  /**
   * @schema ApplicationInsightsDescribeComponentConfigurationResponse#ComponentConfiguration
   */
  readonly componentConfiguration?: string;

}

/**
 * Converts an object of type 'ApplicationInsightsDescribeComponentConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationInsightsDescribeComponentConfigurationResponse(obj: ApplicationInsightsDescribeComponentConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Monitor': obj.monitor,
    'Tier': obj.tier,
    'ComponentConfiguration': obj.componentConfiguration,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationInsightsDescribeComponentConfigurationRecommendationRequest
 */
export interface ApplicationInsightsDescribeComponentConfigurationRecommendationRequest {
  /**
   * @schema ApplicationInsightsDescribeComponentConfigurationRecommendationRequest#ResourceGroupName
   */
  readonly resourceGroupName?: string;

  /**
   * @schema ApplicationInsightsDescribeComponentConfigurationRecommendationRequest#ComponentName
   */
  readonly componentName?: string;

  /**
   * @schema ApplicationInsightsDescribeComponentConfigurationRecommendationRequest#Tier
   */
  readonly tier?: string;

}

/**
 * Converts an object of type 'ApplicationInsightsDescribeComponentConfigurationRecommendationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationInsightsDescribeComponentConfigurationRecommendationRequest(obj: ApplicationInsightsDescribeComponentConfigurationRecommendationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceGroupName': obj.resourceGroupName,
    'ComponentName': obj.componentName,
    'Tier': obj.tier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationInsightsDescribeComponentConfigurationRecommendationResponse
 */
export interface ApplicationInsightsDescribeComponentConfigurationRecommendationResponse {
  /**
   * @schema ApplicationInsightsDescribeComponentConfigurationRecommendationResponse#ComponentConfiguration
   */
  readonly componentConfiguration?: string;

}

/**
 * Converts an object of type 'ApplicationInsightsDescribeComponentConfigurationRecommendationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationInsightsDescribeComponentConfigurationRecommendationResponse(obj: ApplicationInsightsDescribeComponentConfigurationRecommendationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ComponentConfiguration': obj.componentConfiguration,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationInsightsDescribeLogPatternRequest
 */
export interface ApplicationInsightsDescribeLogPatternRequest {
  /**
   * @schema ApplicationInsightsDescribeLogPatternRequest#ResourceGroupName
   */
  readonly resourceGroupName?: string;

  /**
   * @schema ApplicationInsightsDescribeLogPatternRequest#PatternSetName
   */
  readonly patternSetName?: string;

  /**
   * @schema ApplicationInsightsDescribeLogPatternRequest#PatternName
   */
  readonly patternName?: string;

}

/**
 * Converts an object of type 'ApplicationInsightsDescribeLogPatternRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationInsightsDescribeLogPatternRequest(obj: ApplicationInsightsDescribeLogPatternRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceGroupName': obj.resourceGroupName,
    'PatternSetName': obj.patternSetName,
    'PatternName': obj.patternName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationInsightsDescribeLogPatternResponse
 */
export interface ApplicationInsightsDescribeLogPatternResponse {
  /**
   * @schema ApplicationInsightsDescribeLogPatternResponse#ResourceGroupName
   */
  readonly resourceGroupName?: string;

  /**
   * @schema ApplicationInsightsDescribeLogPatternResponse#LogPattern
   */
  readonly logPattern?: ApplicationInsightsLogPattern;

}

/**
 * Converts an object of type 'ApplicationInsightsDescribeLogPatternResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationInsightsDescribeLogPatternResponse(obj: ApplicationInsightsDescribeLogPatternResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceGroupName': obj.resourceGroupName,
    'LogPattern': toJson_ApplicationInsightsLogPattern(obj.logPattern),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationInsightsDescribeObservationRequest
 */
export interface ApplicationInsightsDescribeObservationRequest {
  /**
   * @schema ApplicationInsightsDescribeObservationRequest#ObservationId
   */
  readonly observationId?: string;

}

/**
 * Converts an object of type 'ApplicationInsightsDescribeObservationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationInsightsDescribeObservationRequest(obj: ApplicationInsightsDescribeObservationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ObservationId': obj.observationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationInsightsDescribeObservationResponse
 */
export interface ApplicationInsightsDescribeObservationResponse {
  /**
   * @schema ApplicationInsightsDescribeObservationResponse#Observation
   */
  readonly observation?: ApplicationInsightsObservation;

}

/**
 * Converts an object of type 'ApplicationInsightsDescribeObservationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationInsightsDescribeObservationResponse(obj: ApplicationInsightsDescribeObservationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Observation': toJson_ApplicationInsightsObservation(obj.observation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationInsightsDescribeProblemRequest
 */
export interface ApplicationInsightsDescribeProblemRequest {
  /**
   * @schema ApplicationInsightsDescribeProblemRequest#ProblemId
   */
  readonly problemId?: string;

}

/**
 * Converts an object of type 'ApplicationInsightsDescribeProblemRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationInsightsDescribeProblemRequest(obj: ApplicationInsightsDescribeProblemRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProblemId': obj.problemId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationInsightsDescribeProblemResponse
 */
export interface ApplicationInsightsDescribeProblemResponse {
  /**
   * @schema ApplicationInsightsDescribeProblemResponse#Problem
   */
  readonly problem?: ApplicationInsightsProblem;

}

/**
 * Converts an object of type 'ApplicationInsightsDescribeProblemResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationInsightsDescribeProblemResponse(obj: ApplicationInsightsDescribeProblemResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Problem': toJson_ApplicationInsightsProblem(obj.problem),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationInsightsDescribeProblemObservationsRequest
 */
export interface ApplicationInsightsDescribeProblemObservationsRequest {
  /**
   * @schema ApplicationInsightsDescribeProblemObservationsRequest#ProblemId
   */
  readonly problemId?: string;

}

/**
 * Converts an object of type 'ApplicationInsightsDescribeProblemObservationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationInsightsDescribeProblemObservationsRequest(obj: ApplicationInsightsDescribeProblemObservationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProblemId': obj.problemId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationInsightsDescribeProblemObservationsResponse
 */
export interface ApplicationInsightsDescribeProblemObservationsResponse {
  /**
   * @schema ApplicationInsightsDescribeProblemObservationsResponse#RelatedObservations
   */
  readonly relatedObservations?: ApplicationInsightsRelatedObservations;

}

/**
 * Converts an object of type 'ApplicationInsightsDescribeProblemObservationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationInsightsDescribeProblemObservationsResponse(obj: ApplicationInsightsDescribeProblemObservationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RelatedObservations': toJson_ApplicationInsightsRelatedObservations(obj.relatedObservations),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationInsightsListApplicationsRequest
 */
export interface ApplicationInsightsListApplicationsRequest {
  /**
   * @schema ApplicationInsightsListApplicationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ApplicationInsightsListApplicationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ApplicationInsightsListApplicationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationInsightsListApplicationsRequest(obj: ApplicationInsightsListApplicationsRequest | undefined): Record<string, any> | undefined {
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
 * @schema ApplicationInsightsListApplicationsResponse
 */
export interface ApplicationInsightsListApplicationsResponse {
  /**
   * @schema ApplicationInsightsListApplicationsResponse#ApplicationInfoList
   */
  readonly applicationInfoList?: ApplicationInsightsApplicationInfo[];

  /**
   * @schema ApplicationInsightsListApplicationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ApplicationInsightsListApplicationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationInsightsListApplicationsResponse(obj: ApplicationInsightsListApplicationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationInfoList': obj.applicationInfoList?.map(y => toJson_ApplicationInsightsApplicationInfo(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationInsightsListComponentsRequest
 */
export interface ApplicationInsightsListComponentsRequest {
  /**
   * @schema ApplicationInsightsListComponentsRequest#ResourceGroupName
   */
  readonly resourceGroupName?: string;

  /**
   * @schema ApplicationInsightsListComponentsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ApplicationInsightsListComponentsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ApplicationInsightsListComponentsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationInsightsListComponentsRequest(obj: ApplicationInsightsListComponentsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceGroupName': obj.resourceGroupName,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationInsightsListComponentsResponse
 */
export interface ApplicationInsightsListComponentsResponse {
  /**
   * @schema ApplicationInsightsListComponentsResponse#ApplicationComponentList
   */
  readonly applicationComponentList?: ApplicationInsightsApplicationComponent[];

  /**
   * @schema ApplicationInsightsListComponentsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ApplicationInsightsListComponentsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationInsightsListComponentsResponse(obj: ApplicationInsightsListComponentsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationComponentList': obj.applicationComponentList?.map(y => toJson_ApplicationInsightsApplicationComponent(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationInsightsListConfigurationHistoryRequest
 */
export interface ApplicationInsightsListConfigurationHistoryRequest {
  /**
   * @schema ApplicationInsightsListConfigurationHistoryRequest#ResourceGroupName
   */
  readonly resourceGroupName?: string;

  /**
   * @schema ApplicationInsightsListConfigurationHistoryRequest#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema ApplicationInsightsListConfigurationHistoryRequest#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema ApplicationInsightsListConfigurationHistoryRequest#EventStatus
   */
  readonly eventStatus?: string;

  /**
   * @schema ApplicationInsightsListConfigurationHistoryRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ApplicationInsightsListConfigurationHistoryRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ApplicationInsightsListConfigurationHistoryRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationInsightsListConfigurationHistoryRequest(obj: ApplicationInsightsListConfigurationHistoryRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceGroupName': obj.resourceGroupName,
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
    'EventStatus': obj.eventStatus,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationInsightsListConfigurationHistoryResponse
 */
export interface ApplicationInsightsListConfigurationHistoryResponse {
  /**
   * @schema ApplicationInsightsListConfigurationHistoryResponse#EventList
   */
  readonly eventList?: ApplicationInsightsConfigurationEvent[];

  /**
   * @schema ApplicationInsightsListConfigurationHistoryResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ApplicationInsightsListConfigurationHistoryResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationInsightsListConfigurationHistoryResponse(obj: ApplicationInsightsListConfigurationHistoryResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EventList': obj.eventList?.map(y => toJson_ApplicationInsightsConfigurationEvent(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationInsightsListLogPatternSetsRequest
 */
export interface ApplicationInsightsListLogPatternSetsRequest {
  /**
   * @schema ApplicationInsightsListLogPatternSetsRequest#ResourceGroupName
   */
  readonly resourceGroupName?: string;

  /**
   * @schema ApplicationInsightsListLogPatternSetsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ApplicationInsightsListLogPatternSetsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ApplicationInsightsListLogPatternSetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationInsightsListLogPatternSetsRequest(obj: ApplicationInsightsListLogPatternSetsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceGroupName': obj.resourceGroupName,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationInsightsListLogPatternSetsResponse
 */
export interface ApplicationInsightsListLogPatternSetsResponse {
  /**
   * @schema ApplicationInsightsListLogPatternSetsResponse#ResourceGroupName
   */
  readonly resourceGroupName?: string;

  /**
   * @schema ApplicationInsightsListLogPatternSetsResponse#LogPatternSets
   */
  readonly logPatternSets?: string[];

  /**
   * @schema ApplicationInsightsListLogPatternSetsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ApplicationInsightsListLogPatternSetsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationInsightsListLogPatternSetsResponse(obj: ApplicationInsightsListLogPatternSetsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceGroupName': obj.resourceGroupName,
    'LogPatternSets': obj.logPatternSets?.map(y => y),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationInsightsListLogPatternsRequest
 */
export interface ApplicationInsightsListLogPatternsRequest {
  /**
   * @schema ApplicationInsightsListLogPatternsRequest#ResourceGroupName
   */
  readonly resourceGroupName?: string;

  /**
   * @schema ApplicationInsightsListLogPatternsRequest#PatternSetName
   */
  readonly patternSetName?: string;

  /**
   * @schema ApplicationInsightsListLogPatternsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ApplicationInsightsListLogPatternsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ApplicationInsightsListLogPatternsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationInsightsListLogPatternsRequest(obj: ApplicationInsightsListLogPatternsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceGroupName': obj.resourceGroupName,
    'PatternSetName': obj.patternSetName,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationInsightsListLogPatternsResponse
 */
export interface ApplicationInsightsListLogPatternsResponse {
  /**
   * @schema ApplicationInsightsListLogPatternsResponse#ResourceGroupName
   */
  readonly resourceGroupName?: string;

  /**
   * @schema ApplicationInsightsListLogPatternsResponse#LogPatterns
   */
  readonly logPatterns?: ApplicationInsightsLogPattern[];

  /**
   * @schema ApplicationInsightsListLogPatternsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ApplicationInsightsListLogPatternsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationInsightsListLogPatternsResponse(obj: ApplicationInsightsListLogPatternsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceGroupName': obj.resourceGroupName,
    'LogPatterns': obj.logPatterns?.map(y => toJson_ApplicationInsightsLogPattern(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationInsightsListProblemsRequest
 */
export interface ApplicationInsightsListProblemsRequest {
  /**
   * @schema ApplicationInsightsListProblemsRequest#ResourceGroupName
   */
  readonly resourceGroupName?: string;

  /**
   * @schema ApplicationInsightsListProblemsRequest#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema ApplicationInsightsListProblemsRequest#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema ApplicationInsightsListProblemsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ApplicationInsightsListProblemsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ApplicationInsightsListProblemsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationInsightsListProblemsRequest(obj: ApplicationInsightsListProblemsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceGroupName': obj.resourceGroupName,
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
 * @schema ApplicationInsightsListProblemsResponse
 */
export interface ApplicationInsightsListProblemsResponse {
  /**
   * @schema ApplicationInsightsListProblemsResponse#ProblemList
   */
  readonly problemList?: ApplicationInsightsProblem[];

  /**
   * @schema ApplicationInsightsListProblemsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ApplicationInsightsListProblemsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationInsightsListProblemsResponse(obj: ApplicationInsightsListProblemsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProblemList': obj.problemList?.map(y => toJson_ApplicationInsightsProblem(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationInsightsListTagsForResourceRequest
 */
export interface ApplicationInsightsListTagsForResourceRequest {
  /**
   * @schema ApplicationInsightsListTagsForResourceRequest#ResourceARN
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'ApplicationInsightsListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationInsightsListTagsForResourceRequest(obj: ApplicationInsightsListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationInsightsListTagsForResourceResponse
 */
export interface ApplicationInsightsListTagsForResourceResponse {
  /**
   * @schema ApplicationInsightsListTagsForResourceResponse#Tags
   */
  readonly tags?: ApplicationInsightsTag[];

}

/**
 * Converts an object of type 'ApplicationInsightsListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationInsightsListTagsForResourceResponse(obj: ApplicationInsightsListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': obj.tags?.map(y => toJson_ApplicationInsightsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationInsightsTagResourceRequest
 */
export interface ApplicationInsightsTagResourceRequest {
  /**
   * @schema ApplicationInsightsTagResourceRequest#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema ApplicationInsightsTagResourceRequest#Tags
   */
  readonly tags?: ApplicationInsightsTag[];

}

/**
 * Converts an object of type 'ApplicationInsightsTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationInsightsTagResourceRequest(obj: ApplicationInsightsTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
    'Tags': obj.tags?.map(y => toJson_ApplicationInsightsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationInsightsTagResourceResponse
 */
export interface ApplicationInsightsTagResourceResponse {
}

/**
 * Converts an object of type 'ApplicationInsightsTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationInsightsTagResourceResponse(obj: ApplicationInsightsTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationInsightsUntagResourceRequest
 */
export interface ApplicationInsightsUntagResourceRequest {
  /**
   * @schema ApplicationInsightsUntagResourceRequest#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema ApplicationInsightsUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'ApplicationInsightsUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationInsightsUntagResourceRequest(obj: ApplicationInsightsUntagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema ApplicationInsightsUntagResourceResponse
 */
export interface ApplicationInsightsUntagResourceResponse {
}

/**
 * Converts an object of type 'ApplicationInsightsUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationInsightsUntagResourceResponse(obj: ApplicationInsightsUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationInsightsUpdateApplicationRequest
 */
export interface ApplicationInsightsUpdateApplicationRequest {
  /**
   * @schema ApplicationInsightsUpdateApplicationRequest#ResourceGroupName
   */
  readonly resourceGroupName?: string;

  /**
   * @schema ApplicationInsightsUpdateApplicationRequest#OpsCenterEnabled
   */
  readonly opsCenterEnabled?: boolean;

  /**
   * @schema ApplicationInsightsUpdateApplicationRequest#CWEMonitorEnabled
   */
  readonly cweMonitorEnabled?: boolean;

  /**
   * @schema ApplicationInsightsUpdateApplicationRequest#OpsItemSNSTopicArn
   */
  readonly opsItemSnsTopicArn?: string;

  /**
   * @schema ApplicationInsightsUpdateApplicationRequest#RemoveSNSTopic
   */
  readonly removeSnsTopic?: boolean;

}

/**
 * Converts an object of type 'ApplicationInsightsUpdateApplicationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationInsightsUpdateApplicationRequest(obj: ApplicationInsightsUpdateApplicationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceGroupName': obj.resourceGroupName,
    'OpsCenterEnabled': obj.opsCenterEnabled,
    'CWEMonitorEnabled': obj.cweMonitorEnabled,
    'OpsItemSNSTopicArn': obj.opsItemSnsTopicArn,
    'RemoveSNSTopic': obj.removeSnsTopic,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationInsightsUpdateApplicationResponse
 */
export interface ApplicationInsightsUpdateApplicationResponse {
  /**
   * @schema ApplicationInsightsUpdateApplicationResponse#ApplicationInfo
   */
  readonly applicationInfo?: ApplicationInsightsApplicationInfo;

}

/**
 * Converts an object of type 'ApplicationInsightsUpdateApplicationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationInsightsUpdateApplicationResponse(obj: ApplicationInsightsUpdateApplicationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationInfo': toJson_ApplicationInsightsApplicationInfo(obj.applicationInfo),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationInsightsUpdateComponentRequest
 */
export interface ApplicationInsightsUpdateComponentRequest {
  /**
   * @schema ApplicationInsightsUpdateComponentRequest#ResourceGroupName
   */
  readonly resourceGroupName?: string;

  /**
   * @schema ApplicationInsightsUpdateComponentRequest#ComponentName
   */
  readonly componentName?: string;

  /**
   * @schema ApplicationInsightsUpdateComponentRequest#NewComponentName
   */
  readonly newComponentName?: string;

  /**
   * @schema ApplicationInsightsUpdateComponentRequest#ResourceList
   */
  readonly resourceList?: string[];

}

/**
 * Converts an object of type 'ApplicationInsightsUpdateComponentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationInsightsUpdateComponentRequest(obj: ApplicationInsightsUpdateComponentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceGroupName': obj.resourceGroupName,
    'ComponentName': obj.componentName,
    'NewComponentName': obj.newComponentName,
    'ResourceList': obj.resourceList?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationInsightsUpdateComponentResponse
 */
export interface ApplicationInsightsUpdateComponentResponse {
}

/**
 * Converts an object of type 'ApplicationInsightsUpdateComponentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationInsightsUpdateComponentResponse(obj: ApplicationInsightsUpdateComponentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationInsightsUpdateComponentConfigurationRequest
 */
export interface ApplicationInsightsUpdateComponentConfigurationRequest {
  /**
   * @schema ApplicationInsightsUpdateComponentConfigurationRequest#ResourceGroupName
   */
  readonly resourceGroupName?: string;

  /**
   * @schema ApplicationInsightsUpdateComponentConfigurationRequest#ComponentName
   */
  readonly componentName?: string;

  /**
   * @schema ApplicationInsightsUpdateComponentConfigurationRequest#Monitor
   */
  readonly monitor?: boolean;

  /**
   * @schema ApplicationInsightsUpdateComponentConfigurationRequest#Tier
   */
  readonly tier?: string;

  /**
   * @schema ApplicationInsightsUpdateComponentConfigurationRequest#ComponentConfiguration
   */
  readonly componentConfiguration?: string;

}

/**
 * Converts an object of type 'ApplicationInsightsUpdateComponentConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationInsightsUpdateComponentConfigurationRequest(obj: ApplicationInsightsUpdateComponentConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceGroupName': obj.resourceGroupName,
    'ComponentName': obj.componentName,
    'Monitor': obj.monitor,
    'Tier': obj.tier,
    'ComponentConfiguration': obj.componentConfiguration,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationInsightsUpdateComponentConfigurationResponse
 */
export interface ApplicationInsightsUpdateComponentConfigurationResponse {
}

/**
 * Converts an object of type 'ApplicationInsightsUpdateComponentConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationInsightsUpdateComponentConfigurationResponse(obj: ApplicationInsightsUpdateComponentConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationInsightsUpdateLogPatternRequest
 */
export interface ApplicationInsightsUpdateLogPatternRequest {
  /**
   * @schema ApplicationInsightsUpdateLogPatternRequest#ResourceGroupName
   */
  readonly resourceGroupName?: string;

  /**
   * @schema ApplicationInsightsUpdateLogPatternRequest#PatternSetName
   */
  readonly patternSetName?: string;

  /**
   * @schema ApplicationInsightsUpdateLogPatternRequest#PatternName
   */
  readonly patternName?: string;

  /**
   * @schema ApplicationInsightsUpdateLogPatternRequest#Pattern
   */
  readonly pattern?: string;

  /**
   * @schema ApplicationInsightsUpdateLogPatternRequest#Rank
   */
  readonly rank?: number;

}

/**
 * Converts an object of type 'ApplicationInsightsUpdateLogPatternRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationInsightsUpdateLogPatternRequest(obj: ApplicationInsightsUpdateLogPatternRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceGroupName': obj.resourceGroupName,
    'PatternSetName': obj.patternSetName,
    'PatternName': obj.patternName,
    'Pattern': obj.pattern,
    'Rank': obj.rank,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationInsightsUpdateLogPatternResponse
 */
export interface ApplicationInsightsUpdateLogPatternResponse {
  /**
   * @schema ApplicationInsightsUpdateLogPatternResponse#ResourceGroupName
   */
  readonly resourceGroupName?: string;

  /**
   * @schema ApplicationInsightsUpdateLogPatternResponse#LogPattern
   */
  readonly logPattern?: ApplicationInsightsLogPattern;

}

/**
 * Converts an object of type 'ApplicationInsightsUpdateLogPatternResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationInsightsUpdateLogPatternResponse(obj: ApplicationInsightsUpdateLogPatternResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceGroupName': obj.resourceGroupName,
    'LogPattern': toJson_ApplicationInsightsLogPattern(obj.logPattern),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationInsightsTag
 */
export interface ApplicationInsightsTag {
  /**
   * @schema ApplicationInsightsTag#Key
   */
  readonly key?: string;

  /**
   * @schema ApplicationInsightsTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'ApplicationInsightsTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationInsightsTag(obj: ApplicationInsightsTag | undefined): Record<string, any> | undefined {
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
 * @schema ApplicationInsightsApplicationInfo
 */
export interface ApplicationInsightsApplicationInfo {
  /**
   * @schema ApplicationInsightsApplicationInfo#ResourceGroupName
   */
  readonly resourceGroupName?: string;

  /**
   * @schema ApplicationInsightsApplicationInfo#LifeCycle
   */
  readonly lifeCycle?: string;

  /**
   * @schema ApplicationInsightsApplicationInfo#OpsItemSNSTopicArn
   */
  readonly opsItemSnsTopicArn?: string;

  /**
   * @schema ApplicationInsightsApplicationInfo#OpsCenterEnabled
   */
  readonly opsCenterEnabled?: boolean;

  /**
   * @schema ApplicationInsightsApplicationInfo#CWEMonitorEnabled
   */
  readonly cweMonitorEnabled?: boolean;

  /**
   * @schema ApplicationInsightsApplicationInfo#Remarks
   */
  readonly remarks?: string;

}

/**
 * Converts an object of type 'ApplicationInsightsApplicationInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationInsightsApplicationInfo(obj: ApplicationInsightsApplicationInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceGroupName': obj.resourceGroupName,
    'LifeCycle': obj.lifeCycle,
    'OpsItemSNSTopicArn': obj.opsItemSnsTopicArn,
    'OpsCenterEnabled': obj.opsCenterEnabled,
    'CWEMonitorEnabled': obj.cweMonitorEnabled,
    'Remarks': obj.remarks,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationInsightsLogPattern
 */
export interface ApplicationInsightsLogPattern {
  /**
   * @schema ApplicationInsightsLogPattern#PatternSetName
   */
  readonly patternSetName?: string;

  /**
   * @schema ApplicationInsightsLogPattern#PatternName
   */
  readonly patternName?: string;

  /**
   * @schema ApplicationInsightsLogPattern#Pattern
   */
  readonly pattern?: string;

  /**
   * @schema ApplicationInsightsLogPattern#Rank
   */
  readonly rank?: number;

}

/**
 * Converts an object of type 'ApplicationInsightsLogPattern' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationInsightsLogPattern(obj: ApplicationInsightsLogPattern | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PatternSetName': obj.patternSetName,
    'PatternName': obj.patternName,
    'Pattern': obj.pattern,
    'Rank': obj.rank,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationInsightsApplicationComponent
 */
export interface ApplicationInsightsApplicationComponent {
  /**
   * @schema ApplicationInsightsApplicationComponent#ComponentName
   */
  readonly componentName?: string;

  /**
   * @schema ApplicationInsightsApplicationComponent#ComponentRemarks
   */
  readonly componentRemarks?: string;

  /**
   * @schema ApplicationInsightsApplicationComponent#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema ApplicationInsightsApplicationComponent#OsType
   */
  readonly osType?: string;

  /**
   * @schema ApplicationInsightsApplicationComponent#Tier
   */
  readonly tier?: string;

  /**
   * @schema ApplicationInsightsApplicationComponent#Monitor
   */
  readonly monitor?: boolean;

  /**
   * @schema ApplicationInsightsApplicationComponent#DetectedWorkload
   */
  readonly detectedWorkload?: { [key: string]: { [key: string]: string } };

}

/**
 * Converts an object of type 'ApplicationInsightsApplicationComponent' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationInsightsApplicationComponent(obj: ApplicationInsightsApplicationComponent | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ComponentName': obj.componentName,
    'ComponentRemarks': obj.componentRemarks,
    'ResourceType': obj.resourceType,
    'OsType': obj.osType,
    'Tier': obj.tier,
    'Monitor': obj.monitor,
    'DetectedWorkload': ((obj.detectedWorkload) === undefined) ? undefined : (Object.entries(obj.detectedWorkload).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: ((i[1]) === undefined) ? undefined : (Object.entries(i[1]).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationInsightsObservation
 */
export interface ApplicationInsightsObservation {
  /**
   * @schema ApplicationInsightsObservation#Id
   */
  readonly id?: string;

  /**
   * @schema ApplicationInsightsObservation#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema ApplicationInsightsObservation#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema ApplicationInsightsObservation#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema ApplicationInsightsObservation#SourceARN
   */
  readonly sourceArn?: string;

  /**
   * @schema ApplicationInsightsObservation#LogGroup
   */
  readonly logGroup?: string;

  /**
   * @schema ApplicationInsightsObservation#LineTime
   */
  readonly lineTime?: string;

  /**
   * @schema ApplicationInsightsObservation#LogText
   */
  readonly logText?: string;

  /**
   * @schema ApplicationInsightsObservation#LogFilter
   */
  readonly logFilter?: string;

  /**
   * @schema ApplicationInsightsObservation#MetricNamespace
   */
  readonly metricNamespace?: string;

  /**
   * @schema ApplicationInsightsObservation#MetricName
   */
  readonly metricName?: string;

  /**
   * @schema ApplicationInsightsObservation#Unit
   */
  readonly unit?: string;

  /**
   * @schema ApplicationInsightsObservation#Value
   */
  readonly value?: number;

  /**
   * @schema ApplicationInsightsObservation#CloudWatchEventId
   */
  readonly cloudWatchEventId?: string;

  /**
   * @schema ApplicationInsightsObservation#CloudWatchEventSource
   */
  readonly cloudWatchEventSource?: string;

  /**
   * @schema ApplicationInsightsObservation#CloudWatchEventDetailType
   */
  readonly cloudWatchEventDetailType?: string;

  /**
   * @schema ApplicationInsightsObservation#HealthEventArn
   */
  readonly healthEventArn?: string;

  /**
   * @schema ApplicationInsightsObservation#HealthService
   */
  readonly healthService?: string;

  /**
   * @schema ApplicationInsightsObservation#HealthEventTypeCode
   */
  readonly healthEventTypeCode?: string;

  /**
   * @schema ApplicationInsightsObservation#HealthEventTypeCategory
   */
  readonly healthEventTypeCategory?: string;

  /**
   * @schema ApplicationInsightsObservation#HealthEventDescription
   */
  readonly healthEventDescription?: string;

  /**
   * @schema ApplicationInsightsObservation#CodeDeployDeploymentId
   */
  readonly codeDeployDeploymentId?: string;

  /**
   * @schema ApplicationInsightsObservation#CodeDeployDeploymentGroup
   */
  readonly codeDeployDeploymentGroup?: string;

  /**
   * @schema ApplicationInsightsObservation#CodeDeployState
   */
  readonly codeDeployState?: string;

  /**
   * @schema ApplicationInsightsObservation#CodeDeployApplication
   */
  readonly codeDeployApplication?: string;

  /**
   * @schema ApplicationInsightsObservation#CodeDeployInstanceGroupId
   */
  readonly codeDeployInstanceGroupId?: string;

  /**
   * @schema ApplicationInsightsObservation#Ec2State
   */
  readonly ec2State?: string;

  /**
   * @schema ApplicationInsightsObservation#RdsEventCategories
   */
  readonly rdsEventCategories?: string;

  /**
   * @schema ApplicationInsightsObservation#RdsEventMessage
   */
  readonly rdsEventMessage?: string;

  /**
   * @schema ApplicationInsightsObservation#S3EventName
   */
  readonly s3EventName?: string;

  /**
   * @schema ApplicationInsightsObservation#StatesExecutionArn
   */
  readonly statesExecutionArn?: string;

  /**
   * @schema ApplicationInsightsObservation#StatesArn
   */
  readonly statesArn?: string;

  /**
   * @schema ApplicationInsightsObservation#StatesStatus
   */
  readonly statesStatus?: string;

  /**
   * @schema ApplicationInsightsObservation#StatesInput
   */
  readonly statesInput?: string;

  /**
   * @schema ApplicationInsightsObservation#EbsEvent
   */
  readonly ebsEvent?: string;

  /**
   * @schema ApplicationInsightsObservation#EbsResult
   */
  readonly ebsResult?: string;

  /**
   * @schema ApplicationInsightsObservation#EbsCause
   */
  readonly ebsCause?: string;

  /**
   * @schema ApplicationInsightsObservation#EbsRequestId
   */
  readonly ebsRequestId?: string;

  /**
   * @schema ApplicationInsightsObservation#XRayFaultPercent
   */
  readonly xRayFaultPercent?: number;

  /**
   * @schema ApplicationInsightsObservation#XRayThrottlePercent
   */
  readonly xRayThrottlePercent?: number;

  /**
   * @schema ApplicationInsightsObservation#XRayErrorPercent
   */
  readonly xRayErrorPercent?: number;

  /**
   * @schema ApplicationInsightsObservation#XRayRequestCount
   */
  readonly xRayRequestCount?: number;

  /**
   * @schema ApplicationInsightsObservation#XRayRequestAverageLatency
   */
  readonly xRayRequestAverageLatency?: number;

  /**
   * @schema ApplicationInsightsObservation#XRayNodeName
   */
  readonly xRayNodeName?: string;

  /**
   * @schema ApplicationInsightsObservation#XRayNodeType
   */
  readonly xRayNodeType?: string;

}

/**
 * Converts an object of type 'ApplicationInsightsObservation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationInsightsObservation(obj: ApplicationInsightsObservation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
    'SourceType': obj.sourceType,
    'SourceARN': obj.sourceArn,
    'LogGroup': obj.logGroup,
    'LineTime': obj.lineTime,
    'LogText': obj.logText,
    'LogFilter': obj.logFilter,
    'MetricNamespace': obj.metricNamespace,
    'MetricName': obj.metricName,
    'Unit': obj.unit,
    'Value': obj.value,
    'CloudWatchEventId': obj.cloudWatchEventId,
    'CloudWatchEventSource': obj.cloudWatchEventSource,
    'CloudWatchEventDetailType': obj.cloudWatchEventDetailType,
    'HealthEventArn': obj.healthEventArn,
    'HealthService': obj.healthService,
    'HealthEventTypeCode': obj.healthEventTypeCode,
    'HealthEventTypeCategory': obj.healthEventTypeCategory,
    'HealthEventDescription': obj.healthEventDescription,
    'CodeDeployDeploymentId': obj.codeDeployDeploymentId,
    'CodeDeployDeploymentGroup': obj.codeDeployDeploymentGroup,
    'CodeDeployState': obj.codeDeployState,
    'CodeDeployApplication': obj.codeDeployApplication,
    'CodeDeployInstanceGroupId': obj.codeDeployInstanceGroupId,
    'Ec2State': obj.ec2State,
    'RdsEventCategories': obj.rdsEventCategories,
    'RdsEventMessage': obj.rdsEventMessage,
    'S3EventName': obj.s3EventName,
    'StatesExecutionArn': obj.statesExecutionArn,
    'StatesArn': obj.statesArn,
    'StatesStatus': obj.statesStatus,
    'StatesInput': obj.statesInput,
    'EbsEvent': obj.ebsEvent,
    'EbsResult': obj.ebsResult,
    'EbsCause': obj.ebsCause,
    'EbsRequestId': obj.ebsRequestId,
    'XRayFaultPercent': obj.xRayFaultPercent,
    'XRayThrottlePercent': obj.xRayThrottlePercent,
    'XRayErrorPercent': obj.xRayErrorPercent,
    'XRayRequestCount': obj.xRayRequestCount,
    'XRayRequestAverageLatency': obj.xRayRequestAverageLatency,
    'XRayNodeName': obj.xRayNodeName,
    'XRayNodeType': obj.xRayNodeType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationInsightsProblem
 */
export interface ApplicationInsightsProblem {
  /**
   * @schema ApplicationInsightsProblem#Id
   */
  readonly id?: string;

  /**
   * @schema ApplicationInsightsProblem#Title
   */
  readonly title?: string;

  /**
   * @schema ApplicationInsightsProblem#Insights
   */
  readonly insights?: string;

  /**
   * @schema ApplicationInsightsProblem#Status
   */
  readonly status?: string;

  /**
   * @schema ApplicationInsightsProblem#AffectedResource
   */
  readonly affectedResource?: string;

  /**
   * @schema ApplicationInsightsProblem#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema ApplicationInsightsProblem#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema ApplicationInsightsProblem#SeverityLevel
   */
  readonly severityLevel?: string;

  /**
   * @schema ApplicationInsightsProblem#ResourceGroupName
   */
  readonly resourceGroupName?: string;

  /**
   * @schema ApplicationInsightsProblem#Feedback
   */
  readonly feedback?: { [key: string]: string };

}

/**
 * Converts an object of type 'ApplicationInsightsProblem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationInsightsProblem(obj: ApplicationInsightsProblem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Title': obj.title,
    'Insights': obj.insights,
    'Status': obj.status,
    'AffectedResource': obj.affectedResource,
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
    'SeverityLevel': obj.severityLevel,
    'ResourceGroupName': obj.resourceGroupName,
    'Feedback': ((obj.feedback) === undefined) ? undefined : (Object.entries(obj.feedback).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationInsightsRelatedObservations
 */
export interface ApplicationInsightsRelatedObservations {
  /**
   * @schema ApplicationInsightsRelatedObservations#ObservationList
   */
  readonly observationList?: ApplicationInsightsObservation[];

}

/**
 * Converts an object of type 'ApplicationInsightsRelatedObservations' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationInsightsRelatedObservations(obj: ApplicationInsightsRelatedObservations | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ObservationList': obj.observationList?.map(y => toJson_ApplicationInsightsObservation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationInsightsConfigurationEvent
 */
export interface ApplicationInsightsConfigurationEvent {
  /**
   * @schema ApplicationInsightsConfigurationEvent#MonitoredResourceARN
   */
  readonly monitoredResourceArn?: string;

  /**
   * @schema ApplicationInsightsConfigurationEvent#EventStatus
   */
  readonly eventStatus?: string;

  /**
   * @schema ApplicationInsightsConfigurationEvent#EventResourceType
   */
  readonly eventResourceType?: string;

  /**
   * @schema ApplicationInsightsConfigurationEvent#EventTime
   */
  readonly eventTime?: string;

  /**
   * @schema ApplicationInsightsConfigurationEvent#EventDetail
   */
  readonly eventDetail?: string;

  /**
   * @schema ApplicationInsightsConfigurationEvent#EventResourceName
   */
  readonly eventResourceName?: string;

}

/**
 * Converts an object of type 'ApplicationInsightsConfigurationEvent' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationInsightsConfigurationEvent(obj: ApplicationInsightsConfigurationEvent | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MonitoredResourceARN': obj.monitoredResourceArn,
    'EventStatus': obj.eventStatus,
    'EventResourceType': obj.eventResourceType,
    'EventTime': obj.eventTime,
    'EventDetail': obj.eventDetail,
    'EventResourceName': obj.eventResourceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
