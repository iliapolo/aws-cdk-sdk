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
