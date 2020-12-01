/**
 * @schema CreateSavingsPlanRequest
 */
export interface CreateSavingsPlanRequest {
  /**
   * @schema CreateSavingsPlanRequest#savingsPlanOfferingId
   */
  readonly savingsPlanOfferingId: string;

  /**
   * @schema CreateSavingsPlanRequest#commitment
   */
  readonly commitment: string;

  /**
   * @schema CreateSavingsPlanRequest#upfrontPaymentAmount
   */
  readonly upfrontPaymentAmount?: string;

  /**
   * @schema CreateSavingsPlanRequest#purchaseTime
   */
  readonly purchaseTime?: string;

  /**
   * @schema CreateSavingsPlanRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema CreateSavingsPlanRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateSavingsPlanResponse
 */
export interface CreateSavingsPlanResponse {
  /**
   * @schema CreateSavingsPlanResponse#savingsPlanId
   */
  readonly savingsPlanId?: string;

}

/**
 * @schema DeleteQueuedSavingsPlanRequest
 */
export interface DeleteQueuedSavingsPlanRequest {
  /**
   * @schema DeleteQueuedSavingsPlanRequest#savingsPlanId
   */
  readonly savingsPlanId: string;

}

/**
 * @schema DeleteQueuedSavingsPlanResponse
 */
export interface DeleteQueuedSavingsPlanResponse {
}

/**
 * @schema DescribeSavingsPlanRatesRequest
 */
export interface DescribeSavingsPlanRatesRequest {
  /**
   * @schema DescribeSavingsPlanRatesRequest#savingsPlanId
   */
  readonly savingsPlanId: string;

  /**
   * @schema DescribeSavingsPlanRatesRequest#filters
   */
  readonly filters?: SavingsPlanRateFilter[];

  /**
   * @schema DescribeSavingsPlanRatesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeSavingsPlanRatesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema DescribeSavingsPlanRatesResponse
 */
export interface DescribeSavingsPlanRatesResponse {
  /**
   * @schema DescribeSavingsPlanRatesResponse#savingsPlanId
   */
  readonly savingsPlanId?: string;

  /**
   * @schema DescribeSavingsPlanRatesResponse#searchResults
   */
  readonly searchResults?: SavingsPlanRate[];

  /**
   * @schema DescribeSavingsPlanRatesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeSavingsPlansRequest
 */
export interface DescribeSavingsPlansRequest {
  /**
   * @schema DescribeSavingsPlansRequest#savingsPlanArns
   */
  readonly savingsPlanArns?: string[];

  /**
   * @schema DescribeSavingsPlansRequest#savingsPlanIds
   */
  readonly savingsPlanIds?: string[];

  /**
   * @schema DescribeSavingsPlansRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeSavingsPlansRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeSavingsPlansRequest#states
   */
  readonly states?: string[];

  /**
   * @schema DescribeSavingsPlansRequest#filters
   */
  readonly filters?: SavingsPlanFilter[];

}

/**
 * @schema DescribeSavingsPlansResponse
 */
export interface DescribeSavingsPlansResponse {
  /**
   * @schema DescribeSavingsPlansResponse#savingsPlans
   */
  readonly savingsPlans?: SavingsPlan[];

  /**
   * @schema DescribeSavingsPlansResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeSavingsPlansOfferingRatesRequest
 */
export interface DescribeSavingsPlansOfferingRatesRequest {
  /**
   * @schema DescribeSavingsPlansOfferingRatesRequest#savingsPlanOfferingIds
   */
  readonly savingsPlanOfferingIds?: string[];

  /**
   * @schema DescribeSavingsPlansOfferingRatesRequest#savingsPlanPaymentOptions
   */
  readonly savingsPlanPaymentOptions?: string[];

  /**
   * @schema DescribeSavingsPlansOfferingRatesRequest#savingsPlanTypes
   */
  readonly savingsPlanTypes?: string[];

  /**
   * @schema DescribeSavingsPlansOfferingRatesRequest#products
   */
  readonly products?: string[];

  /**
   * @schema DescribeSavingsPlansOfferingRatesRequest#serviceCodes
   */
  readonly serviceCodes?: string[];

  /**
   * @schema DescribeSavingsPlansOfferingRatesRequest#usageTypes
   */
  readonly usageTypes?: string[];

  /**
   * @schema DescribeSavingsPlansOfferingRatesRequest#operations
   */
  readonly operations?: string[];

  /**
   * @schema DescribeSavingsPlansOfferingRatesRequest#filters
   */
  readonly filters?: SavingsPlanOfferingRateFilterElement[];

  /**
   * @schema DescribeSavingsPlansOfferingRatesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeSavingsPlansOfferingRatesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema DescribeSavingsPlansOfferingRatesResponse
 */
export interface DescribeSavingsPlansOfferingRatesResponse {
  /**
   * @schema DescribeSavingsPlansOfferingRatesResponse#searchResults
   */
  readonly searchResults?: SavingsPlanOfferingRate[];

  /**
   * @schema DescribeSavingsPlansOfferingRatesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeSavingsPlansOfferingsRequest
 */
export interface DescribeSavingsPlansOfferingsRequest {
  /**
   * @schema DescribeSavingsPlansOfferingsRequest#offeringIds
   */
  readonly offeringIds?: string[];

  /**
   * @schema DescribeSavingsPlansOfferingsRequest#paymentOptions
   */
  readonly paymentOptions?: string[];

  /**
   * @schema DescribeSavingsPlansOfferingsRequest#productType
   */
  readonly productType?: string;

  /**
   * @schema DescribeSavingsPlansOfferingsRequest#planTypes
   */
  readonly planTypes?: string[];

  /**
   * @schema DescribeSavingsPlansOfferingsRequest#durations
   */
  readonly durations?: number[];

  /**
   * @schema DescribeSavingsPlansOfferingsRequest#currencies
   */
  readonly currencies?: string[];

  /**
   * @schema DescribeSavingsPlansOfferingsRequest#descriptions
   */
  readonly descriptions?: string[];

  /**
   * @schema DescribeSavingsPlansOfferingsRequest#serviceCodes
   */
  readonly serviceCodes?: string[];

  /**
   * @schema DescribeSavingsPlansOfferingsRequest#usageTypes
   */
  readonly usageTypes?: string[];

  /**
   * @schema DescribeSavingsPlansOfferingsRequest#operations
   */
  readonly operations?: string[];

  /**
   * @schema DescribeSavingsPlansOfferingsRequest#filters
   */
  readonly filters?: SavingsPlanOfferingFilterElement[];

  /**
   * @schema DescribeSavingsPlansOfferingsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeSavingsPlansOfferingsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema DescribeSavingsPlansOfferingsResponse
 */
export interface DescribeSavingsPlansOfferingsResponse {
  /**
   * @schema DescribeSavingsPlansOfferingsResponse#searchResults
   */
  readonly searchResults?: SavingsPlanOffering[];

  /**
   * @schema DescribeSavingsPlansOfferingsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * @schema ListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema ListTagsForResourceResponse
 */
export interface ListTagsForResourceResponse {
  /**
   * @schema ListTagsForResourceResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema TagResourceRequest#tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema TagResourceResponse
 */
export interface TagResourceResponse {
}

/**
 * @schema UntagResourceRequest
 */
export interface UntagResourceRequest {
  /**
   * @schema UntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema UntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UntagResourceResponse
 */
export interface UntagResourceResponse {
}

/**
 * @schema SavingsPlanRateFilter
 */
export interface SavingsPlanRateFilter {
  /**
   * @schema SavingsPlanRateFilter#name
   */
  readonly name?: string;

  /**
   * @schema SavingsPlanRateFilter#values
   */
  readonly values?: string[];

}

/**
 * @schema SavingsPlanRate
 */
export interface SavingsPlanRate {
  /**
   * @schema SavingsPlanRate#rate
   */
  readonly rate?: string;

  /**
   * @schema SavingsPlanRate#currency
   */
  readonly currency?: string;

  /**
   * @schema SavingsPlanRate#unit
   */
  readonly unit?: string;

  /**
   * @schema SavingsPlanRate#productType
   */
  readonly productType?: string;

  /**
   * @schema SavingsPlanRate#serviceCode
   */
  readonly serviceCode?: string;

  /**
   * @schema SavingsPlanRate#usageType
   */
  readonly usageType?: string;

  /**
   * @schema SavingsPlanRate#operation
   */
  readonly operation?: string;

  /**
   * @schema SavingsPlanRate#properties
   */
  readonly properties?: SavingsPlanRateProperty[];

}

/**
 * @schema SavingsPlanFilter
 */
export interface SavingsPlanFilter {
  /**
   * @schema SavingsPlanFilter#name
   */
  readonly name?: string;

  /**
   * @schema SavingsPlanFilter#values
   */
  readonly values?: string[];

}

/**
 * @schema SavingsPlan
 */
export interface SavingsPlan {
  /**
   * @schema SavingsPlan#offeringId
   */
  readonly offeringId?: string;

  /**
   * @schema SavingsPlan#savingsPlanId
   */
  readonly savingsPlanId?: string;

  /**
   * @schema SavingsPlan#savingsPlanArn
   */
  readonly savingsPlanArn?: string;

  /**
   * @schema SavingsPlan#description
   */
  readonly description?: string;

  /**
   * @schema SavingsPlan#start
   */
  readonly start?: string;

  /**
   * @schema SavingsPlan#end
   */
  readonly end?: string;

  /**
   * @schema SavingsPlan#state
   */
  readonly state?: string;

  /**
   * @schema SavingsPlan#region
   */
  readonly region?: string;

  /**
   * @schema SavingsPlan#ec2InstanceFamily
   */
  readonly ec2InstanceFamily?: string;

  /**
   * @schema SavingsPlan#savingsPlanType
   */
  readonly savingsPlanType?: string;

  /**
   * @schema SavingsPlan#paymentOption
   */
  readonly paymentOption?: string;

  /**
   * @schema SavingsPlan#productTypes
   */
  readonly productTypes?: string[];

  /**
   * @schema SavingsPlan#currency
   */
  readonly currency?: string;

  /**
   * @schema SavingsPlan#commitment
   */
  readonly commitment?: string;

  /**
   * @schema SavingsPlan#upfrontPaymentAmount
   */
  readonly upfrontPaymentAmount?: string;

  /**
   * @schema SavingsPlan#recurringPaymentAmount
   */
  readonly recurringPaymentAmount?: string;

  /**
   * @schema SavingsPlan#termDurationInSeconds
   */
  readonly termDurationInSeconds?: number;

  /**
   * @schema SavingsPlan#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema SavingsPlanOfferingRateFilterElement
 */
export interface SavingsPlanOfferingRateFilterElement {
  /**
   * @schema SavingsPlanOfferingRateFilterElement#name
   */
  readonly name?: string;

  /**
   * @schema SavingsPlanOfferingRateFilterElement#values
   */
  readonly values?: string[];

}

/**
 * @schema SavingsPlanOfferingRate
 */
export interface SavingsPlanOfferingRate {
  /**
   * @schema SavingsPlanOfferingRate#savingsPlanOffering
   */
  readonly savingsPlanOffering?: ParentSavingsPlanOffering;

  /**
   * @schema SavingsPlanOfferingRate#rate
   */
  readonly rate?: string;

  /**
   * @schema SavingsPlanOfferingRate#unit
   */
  readonly unit?: string;

  /**
   * @schema SavingsPlanOfferingRate#productType
   */
  readonly productType?: string;

  /**
   * @schema SavingsPlanOfferingRate#serviceCode
   */
  readonly serviceCode?: string;

  /**
   * @schema SavingsPlanOfferingRate#usageType
   */
  readonly usageType?: string;

  /**
   * @schema SavingsPlanOfferingRate#operation
   */
  readonly operation?: string;

  /**
   * @schema SavingsPlanOfferingRate#properties
   */
  readonly properties?: SavingsPlanOfferingRateProperty[];

}

/**
 * @schema SavingsPlanOfferingFilterElement
 */
export interface SavingsPlanOfferingFilterElement {
  /**
   * @schema SavingsPlanOfferingFilterElement#name
   */
  readonly name?: string;

  /**
   * @schema SavingsPlanOfferingFilterElement#values
   */
  readonly values?: string[];

}

/**
 * @schema SavingsPlanOffering
 */
export interface SavingsPlanOffering {
  /**
   * @schema SavingsPlanOffering#offeringId
   */
  readonly offeringId?: string;

  /**
   * @schema SavingsPlanOffering#productTypes
   */
  readonly productTypes?: string[];

  /**
   * @schema SavingsPlanOffering#planType
   */
  readonly planType?: string;

  /**
   * @schema SavingsPlanOffering#description
   */
  readonly description?: string;

  /**
   * @schema SavingsPlanOffering#paymentOption
   */
  readonly paymentOption?: string;

  /**
   * @schema SavingsPlanOffering#durationSeconds
   */
  readonly durationSeconds?: number;

  /**
   * @schema SavingsPlanOffering#currency
   */
  readonly currency?: string;

  /**
   * @schema SavingsPlanOffering#serviceCode
   */
  readonly serviceCode?: string;

  /**
   * @schema SavingsPlanOffering#usageType
   */
  readonly usageType?: string;

  /**
   * @schema SavingsPlanOffering#operation
   */
  readonly operation?: string;

  /**
   * @schema SavingsPlanOffering#properties
   */
  readonly properties?: SavingsPlanOfferingProperty[];

}

/**
 * @schema SavingsPlanRateProperty
 */
export interface SavingsPlanRateProperty {
  /**
   * @schema SavingsPlanRateProperty#name
   */
  readonly name?: string;

  /**
   * @schema SavingsPlanRateProperty#value
   */
  readonly value?: string;

}

/**
 * @schema ParentSavingsPlanOffering
 */
export interface ParentSavingsPlanOffering {
  /**
   * @schema ParentSavingsPlanOffering#offeringId
   */
  readonly offeringId?: string;

  /**
   * @schema ParentSavingsPlanOffering#paymentOption
   */
  readonly paymentOption?: string;

  /**
   * @schema ParentSavingsPlanOffering#planType
   */
  readonly planType?: string;

  /**
   * @schema ParentSavingsPlanOffering#durationSeconds
   */
  readonly durationSeconds?: number;

  /**
   * @schema ParentSavingsPlanOffering#currency
   */
  readonly currency?: string;

  /**
   * @schema ParentSavingsPlanOffering#planDescription
   */
  readonly planDescription?: string;

}

/**
 * @schema SavingsPlanOfferingRateProperty
 */
export interface SavingsPlanOfferingRateProperty {
  /**
   * @schema SavingsPlanOfferingRateProperty#name
   */
  readonly name?: string;

  /**
   * @schema SavingsPlanOfferingRateProperty#value
   */
  readonly value?: string;

}

/**
 * @schema SavingsPlanOfferingProperty
 */
export interface SavingsPlanOfferingProperty {
  /**
   * @schema SavingsPlanOfferingProperty#name
   */
  readonly name?: string;

  /**
   * @schema SavingsPlanOfferingProperty#value
   */
  readonly value?: string;

}
