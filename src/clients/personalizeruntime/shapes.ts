/**
 * @schema GetPersonalizedRankingRequest
 */
export interface GetPersonalizedRankingRequest {
  /**
   * @schema GetPersonalizedRankingRequest#campaignArn
   */
  readonly campaignArn: string;

  /**
   * @schema GetPersonalizedRankingRequest#inputList
   */
  readonly inputList: string[];

  /**
   * @schema GetPersonalizedRankingRequest#userId
   */
  readonly userId: string;

  /**
   * @schema GetPersonalizedRankingRequest#context
   */
  readonly context?: { [key: string]: string };

  /**
   * @schema GetPersonalizedRankingRequest#filterArn
   */
  readonly filterArn?: string;

  /**
   * @schema GetPersonalizedRankingRequest#filterValues
   */
  readonly filterValues?: { [key: string]: string };

}

/**
 * @schema GetPersonalizedRankingResponse
 */
export interface GetPersonalizedRankingResponse {
  /**
   * @schema GetPersonalizedRankingResponse#personalizedRanking
   */
  readonly personalizedRanking?: PredictedItem[];

  /**
   * @schema GetPersonalizedRankingResponse#recommendationId
   */
  readonly recommendationId?: string;

}

/**
 * @schema GetRecommendationsRequest
 */
export interface GetRecommendationsRequest {
  /**
   * @schema GetRecommendationsRequest#campaignArn
   */
  readonly campaignArn: string;

  /**
   * @schema GetRecommendationsRequest#itemId
   */
  readonly itemId?: string;

  /**
   * @schema GetRecommendationsRequest#userId
   */
  readonly userId?: string;

  /**
   * @schema GetRecommendationsRequest#numResults
   */
  readonly numResults?: number;

  /**
   * @schema GetRecommendationsRequest#context
   */
  readonly context?: { [key: string]: string };

  /**
   * @schema GetRecommendationsRequest#filterArn
   */
  readonly filterArn?: string;

  /**
   * @schema GetRecommendationsRequest#filterValues
   */
  readonly filterValues?: { [key: string]: string };

}

/**
 * @schema GetRecommendationsResponse
 */
export interface GetRecommendationsResponse {
  /**
   * @schema GetRecommendationsResponse#itemList
   */
  readonly itemList?: PredictedItem[];

  /**
   * @schema GetRecommendationsResponse#recommendationId
   */
  readonly recommendationId?: string;

}

/**
 * @schema PredictedItem
 */
export interface PredictedItem {
  /**
   * @schema PredictedItem#itemId
   */
  readonly itemId?: string;

  /**
   * @schema PredictedItem#score
   */
  readonly score?: number;

}
