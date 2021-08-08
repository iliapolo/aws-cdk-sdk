/**
 * @schema PersonalizeRuntimeGetPersonalizedRankingRequest
 */
export interface PersonalizeRuntimeGetPersonalizedRankingRequest {
  /**
   * @schema PersonalizeRuntimeGetPersonalizedRankingRequest#campaignArn
   */
  readonly campaignArn: string;

  /**
   * @schema PersonalizeRuntimeGetPersonalizedRankingRequest#inputList
   */
  readonly inputList: string[];

  /**
   * @schema PersonalizeRuntimeGetPersonalizedRankingRequest#userId
   */
  readonly userId: string;

  /**
   * @schema PersonalizeRuntimeGetPersonalizedRankingRequest#context
   */
  readonly context?: { [key: string]: string };

  /**
   * @schema PersonalizeRuntimeGetPersonalizedRankingRequest#filterArn
   */
  readonly filterArn?: string;

  /**
   * @schema PersonalizeRuntimeGetPersonalizedRankingRequest#filterValues
   */
  readonly filterValues?: { [key: string]: string };

}

/**
 * Converts an object of type 'PersonalizeRuntimeGetPersonalizedRankingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeRuntimeGetPersonalizedRankingRequest(obj: PersonalizeRuntimeGetPersonalizedRankingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'campaignArn': obj.campaignArn,
    'inputList': obj.inputList?.map(y => y),
    'userId': obj.userId,
    'context': ((obj.context) === undefined) ? undefined : (Object.entries(obj.context).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'filterArn': obj.filterArn,
    'filterValues': ((obj.filterValues) === undefined) ? undefined : (Object.entries(obj.filterValues).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeRuntimeGetPersonalizedRankingResponse
 */
export interface PersonalizeRuntimeGetPersonalizedRankingResponse {
  /**
   * @schema PersonalizeRuntimeGetPersonalizedRankingResponse#personalizedRanking
   */
  readonly personalizedRanking?: PersonalizeRuntimePredictedItem[];

  /**
   * @schema PersonalizeRuntimeGetPersonalizedRankingResponse#recommendationId
   */
  readonly recommendationId?: string;

}

/**
 * Converts an object of type 'PersonalizeRuntimeGetPersonalizedRankingResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeRuntimeGetPersonalizedRankingResponse(obj: PersonalizeRuntimeGetPersonalizedRankingResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'personalizedRanking': obj.personalizedRanking?.map(y => toJson_PersonalizeRuntimePredictedItem(y)),
    'recommendationId': obj.recommendationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeRuntimeGetRecommendationsRequest
 */
export interface PersonalizeRuntimeGetRecommendationsRequest {
  /**
   * @schema PersonalizeRuntimeGetRecommendationsRequest#campaignArn
   */
  readonly campaignArn: string;

  /**
   * @schema PersonalizeRuntimeGetRecommendationsRequest#itemId
   */
  readonly itemId?: string;

  /**
   * @schema PersonalizeRuntimeGetRecommendationsRequest#userId
   */
  readonly userId?: string;

  /**
   * @schema PersonalizeRuntimeGetRecommendationsRequest#numResults
   */
  readonly numResults?: number;

  /**
   * @schema PersonalizeRuntimeGetRecommendationsRequest#context
   */
  readonly context?: { [key: string]: string };

  /**
   * @schema PersonalizeRuntimeGetRecommendationsRequest#filterArn
   */
  readonly filterArn?: string;

  /**
   * @schema PersonalizeRuntimeGetRecommendationsRequest#filterValues
   */
  readonly filterValues?: { [key: string]: string };

}

/**
 * Converts an object of type 'PersonalizeRuntimeGetRecommendationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeRuntimeGetRecommendationsRequest(obj: PersonalizeRuntimeGetRecommendationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'campaignArn': obj.campaignArn,
    'itemId': obj.itemId,
    'userId': obj.userId,
    'numResults': obj.numResults,
    'context': ((obj.context) === undefined) ? undefined : (Object.entries(obj.context).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'filterArn': obj.filterArn,
    'filterValues': ((obj.filterValues) === undefined) ? undefined : (Object.entries(obj.filterValues).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeRuntimeGetRecommendationsResponse
 */
export interface PersonalizeRuntimeGetRecommendationsResponse {
  /**
   * @schema PersonalizeRuntimeGetRecommendationsResponse#itemList
   */
  readonly itemList?: PersonalizeRuntimePredictedItem[];

  /**
   * @schema PersonalizeRuntimeGetRecommendationsResponse#recommendationId
   */
  readonly recommendationId?: string;

}

/**
 * Converts an object of type 'PersonalizeRuntimeGetRecommendationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeRuntimeGetRecommendationsResponse(obj: PersonalizeRuntimeGetRecommendationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'itemList': obj.itemList?.map(y => toJson_PersonalizeRuntimePredictedItem(y)),
    'recommendationId': obj.recommendationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeRuntimePredictedItem
 */
export interface PersonalizeRuntimePredictedItem {
  /**
   * @schema PersonalizeRuntimePredictedItem#itemId
   */
  readonly itemId?: string;

  /**
   * @schema PersonalizeRuntimePredictedItem#score
   */
  readonly score?: number;

}

/**
 * Converts an object of type 'PersonalizeRuntimePredictedItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeRuntimePredictedItem(obj: PersonalizeRuntimePredictedItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'itemId': obj.itemId,
    'score': obj.score,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
