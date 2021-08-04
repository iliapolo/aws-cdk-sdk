/**
 * @schema SavingsPlansCreateSavingsPlanRequest
 */
export interface SavingsPlansCreateSavingsPlanRequest {
  /**
   * @schema SavingsPlansCreateSavingsPlanRequest#savingsPlanOfferingId
   */
  readonly savingsPlanOfferingId: string;

  /**
   * @schema SavingsPlansCreateSavingsPlanRequest#commitment
   */
  readonly commitment: string;

  /**
   * @schema SavingsPlansCreateSavingsPlanRequest#upfrontPaymentAmount
   */
  readonly upfrontPaymentAmount?: string;

  /**
   * @schema SavingsPlansCreateSavingsPlanRequest#purchaseTime
   */
  readonly purchaseTime?: string;

  /**
   * @schema SavingsPlansCreateSavingsPlanRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema SavingsPlansCreateSavingsPlanRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema SavingsPlansCreateSavingsPlanResponse
 */
export interface SavingsPlansCreateSavingsPlanResponse {
  /**
   * @schema SavingsPlansCreateSavingsPlanResponse#savingsPlanId
   */
  readonly savingsPlanId?: string;

}

/**
 * @schema SavingsPlansDeleteQueuedSavingsPlanRequest
 */
export interface SavingsPlansDeleteQueuedSavingsPlanRequest {
  /**
   * @schema SavingsPlansDeleteQueuedSavingsPlanRequest#savingsPlanId
   */
  readonly savingsPlanId: string;

}

/**
 * @schema SavingsPlansDeleteQueuedSavingsPlanResponse
 */
export interface SavingsPlansDeleteQueuedSavingsPlanResponse {
}

/**
 * @schema SavingsPlansDescribeSavingsPlanRatesRequest
 */
export interface SavingsPlansDescribeSavingsPlanRatesRequest {
  /**
   * @schema SavingsPlansDescribeSavingsPlanRatesRequest#savingsPlanId
   */
  readonly savingsPlanId: string;

  /**
   * @schema SavingsPlansDescribeSavingsPlanRatesRequest#filters
   */
  readonly filters?: SavingsPlansSavingsPlanRateFilter[];

  /**
   * @schema SavingsPlansDescribeSavingsPlanRatesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SavingsPlansDescribeSavingsPlanRatesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema SavingsPlansDescribeSavingsPlanRatesResponse
 */
export interface SavingsPlansDescribeSavingsPlanRatesResponse {
  /**
   * @schema SavingsPlansDescribeSavingsPlanRatesResponse#savingsPlanId
   */
  readonly savingsPlanId?: string;

  /**
   * @schema SavingsPlansDescribeSavingsPlanRatesResponse#searchResults
   */
  readonly searchResults?: SavingsPlansSavingsPlanRate[];

  /**
   * @schema SavingsPlansDescribeSavingsPlanRatesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SavingsPlansDescribeSavingsPlansRequest
 */
export interface SavingsPlansDescribeSavingsPlansRequest {
  /**
   * @schema SavingsPlansDescribeSavingsPlansRequest#savingsPlanArns
   */
  readonly savingsPlanArns?: string[];

  /**
   * @schema SavingsPlansDescribeSavingsPlansRequest#savingsPlanIds
   */
  readonly savingsPlanIds?: string[];

  /**
   * @schema SavingsPlansDescribeSavingsPlansRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SavingsPlansDescribeSavingsPlansRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SavingsPlansDescribeSavingsPlansRequest#states
   */
  readonly states?: string[];

  /**
   * @schema SavingsPlansDescribeSavingsPlansRequest#filters
   */
  readonly filters?: SavingsPlansSavingsPlanFilter[];

}

/**
 * @schema SavingsPlansDescribeSavingsPlansResponse
 */
export interface SavingsPlansDescribeSavingsPlansResponse {
  /**
   * @schema SavingsPlansDescribeSavingsPlansResponse#savingsPlans
   */
  readonly savingsPlans?: SavingsPlansSavingsPlan[];

  /**
   * @schema SavingsPlansDescribeSavingsPlansResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SavingsPlansDescribeSavingsPlansOfferingRatesRequest
 */
export interface SavingsPlansDescribeSavingsPlansOfferingRatesRequest {
  /**
   * @schema SavingsPlansDescribeSavingsPlansOfferingRatesRequest#savingsPlanOfferingIds
   */
  readonly savingsPlanOfferingIds?: string[];

  /**
   * @schema SavingsPlansDescribeSavingsPlansOfferingRatesRequest#savingsPlanPaymentOptions
   */
  readonly savingsPlanPaymentOptions?: string[];

  /**
   * @schema SavingsPlansDescribeSavingsPlansOfferingRatesRequest#savingsPlanTypes
   */
  readonly savingsPlanTypes?: string[];

  /**
   * @schema SavingsPlansDescribeSavingsPlansOfferingRatesRequest#products
   */
  readonly products?: string[];

  /**
   * @schema SavingsPlansDescribeSavingsPlansOfferingRatesRequest#serviceCodes
   */
  readonly serviceCodes?: string[];

  /**
   * @schema SavingsPlansDescribeSavingsPlansOfferingRatesRequest#usageTypes
   */
  readonly usageTypes?: string[];

  /**
   * @schema SavingsPlansDescribeSavingsPlansOfferingRatesRequest#operations
   */
  readonly operations?: string[];

  /**
   * @schema SavingsPlansDescribeSavingsPlansOfferingRatesRequest#filters
   */
  readonly filters?: SavingsPlansSavingsPlanOfferingRateFilterElement[];

  /**
   * @schema SavingsPlansDescribeSavingsPlansOfferingRatesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SavingsPlansDescribeSavingsPlansOfferingRatesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema SavingsPlansDescribeSavingsPlansOfferingRatesResponse
 */
export interface SavingsPlansDescribeSavingsPlansOfferingRatesResponse {
  /**
   * @schema SavingsPlansDescribeSavingsPlansOfferingRatesResponse#searchResults
   */
  readonly searchResults?: SavingsPlansSavingsPlanOfferingRate[];

  /**
   * @schema SavingsPlansDescribeSavingsPlansOfferingRatesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SavingsPlansDescribeSavingsPlansOfferingsRequest
 */
export interface SavingsPlansDescribeSavingsPlansOfferingsRequest {
  /**
   * @schema SavingsPlansDescribeSavingsPlansOfferingsRequest#offeringIds
   */
  readonly offeringIds?: string[];

  /**
   * @schema SavingsPlansDescribeSavingsPlansOfferingsRequest#paymentOptions
   */
  readonly paymentOptions?: string[];

  /**
   * @schema SavingsPlansDescribeSavingsPlansOfferingsRequest#productType
   */
  readonly productType?: string;

  /**
   * @schema SavingsPlansDescribeSavingsPlansOfferingsRequest#planTypes
   */
  readonly planTypes?: string[];

  /**
   * @schema SavingsPlansDescribeSavingsPlansOfferingsRequest#durations
   */
  readonly durations?: number[];

  /**
   * @schema SavingsPlansDescribeSavingsPlansOfferingsRequest#currencies
   */
  readonly currencies?: string[];

  /**
   * @schema SavingsPlansDescribeSavingsPlansOfferingsRequest#descriptions
   */
  readonly descriptions?: string[];

  /**
   * @schema SavingsPlansDescribeSavingsPlansOfferingsRequest#serviceCodes
   */
  readonly serviceCodes?: string[];

  /**
   * @schema SavingsPlansDescribeSavingsPlansOfferingsRequest#usageTypes
   */
  readonly usageTypes?: string[];

  /**
   * @schema SavingsPlansDescribeSavingsPlansOfferingsRequest#operations
   */
  readonly operations?: string[];

  /**
   * @schema SavingsPlansDescribeSavingsPlansOfferingsRequest#filters
   */
  readonly filters?: SavingsPlansSavingsPlanOfferingFilterElement[];

  /**
   * @schema SavingsPlansDescribeSavingsPlansOfferingsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SavingsPlansDescribeSavingsPlansOfferingsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema SavingsPlansDescribeSavingsPlansOfferingsResponse
 */
export interface SavingsPlansDescribeSavingsPlansOfferingsResponse {
  /**
   * @schema SavingsPlansDescribeSavingsPlansOfferingsResponse#searchResults
   */
  readonly searchResults?: SavingsPlansSavingsPlanOffering[];

  /**
   * @schema SavingsPlansDescribeSavingsPlansOfferingsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SavingsPlansListTagsForResourceRequest
 */
export interface SavingsPlansListTagsForResourceRequest {
  /**
   * @schema SavingsPlansListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema SavingsPlansListTagsForResourceResponse
 */
export interface SavingsPlansListTagsForResourceResponse {
  /**
   * @schema SavingsPlansListTagsForResourceResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema SavingsPlansTagResourceRequest
 */
export interface SavingsPlansTagResourceRequest {
  /**
   * @schema SavingsPlansTagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema SavingsPlansTagResourceRequest#tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema SavingsPlansTagResourceResponse
 */
export interface SavingsPlansTagResourceResponse {
}

/**
 * @schema SavingsPlansUntagResourceRequest
 */
export interface SavingsPlansUntagResourceRequest {
  /**
   * @schema SavingsPlansUntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema SavingsPlansUntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema SavingsPlansUntagResourceResponse
 */
export interface SavingsPlansUntagResourceResponse {
}

/**
 * @schema SavingsPlansSavingsPlanRateFilter
 */
export interface SavingsPlansSavingsPlanRateFilter {
  /**
   * @schema SavingsPlansSavingsPlanRateFilter#name
   */
  readonly name?: string;

  /**
   * @schema SavingsPlansSavingsPlanRateFilter#values
   */
  readonly values?: string[];

}

/**
 * @schema SavingsPlansSavingsPlanRate
 */
export interface SavingsPlansSavingsPlanRate {
  /**
   * @schema SavingsPlansSavingsPlanRate#rate
   */
  readonly rate?: string;

  /**
   * @schema SavingsPlansSavingsPlanRate#currency
   */
  readonly currency?: string;

  /**
   * @schema SavingsPlansSavingsPlanRate#unit
   */
  readonly unit?: string;

  /**
   * @schema SavingsPlansSavingsPlanRate#productType
   */
  readonly productType?: string;

  /**
   * @schema SavingsPlansSavingsPlanRate#serviceCode
   */
  readonly serviceCode?: string;

  /**
   * @schema SavingsPlansSavingsPlanRate#usageType
   */
  readonly usageType?: string;

  /**
   * @schema SavingsPlansSavingsPlanRate#operation
   */
  readonly operation?: string;

  /**
   * @schema SavingsPlansSavingsPlanRate#properties
   */
  readonly properties?: SavingsPlansSavingsPlanRateProperty[];

}

/**
 * @schema SavingsPlansSavingsPlanFilter
 */
export interface SavingsPlansSavingsPlanFilter {
  /**
   * @schema SavingsPlansSavingsPlanFilter#name
   */
  readonly name?: string;

  /**
   * @schema SavingsPlansSavingsPlanFilter#values
   */
  readonly values?: string[];

}

/**
 * @schema SavingsPlansSavingsPlan
 */
export interface SavingsPlansSavingsPlan {
  /**
   * @schema SavingsPlansSavingsPlan#offeringId
   */
  readonly offeringId?: string;

  /**
   * @schema SavingsPlansSavingsPlan#savingsPlanId
   */
  readonly savingsPlanId?: string;

  /**
   * @schema SavingsPlansSavingsPlan#savingsPlanArn
   */
  readonly savingsPlanArn?: string;

  /**
   * @schema SavingsPlansSavingsPlan#description
   */
  readonly description?: string;

  /**
   * @schema SavingsPlansSavingsPlan#start
   */
  readonly start?: string;

  /**
   * @schema SavingsPlansSavingsPlan#end
   */
  readonly end?: string;

  /**
   * @schema SavingsPlansSavingsPlan#state
   */
  readonly state?: string;

  /**
   * @schema SavingsPlansSavingsPlan#region
   */
  readonly region?: string;

  /**
   * @schema SavingsPlansSavingsPlan#ec2InstanceFamily
   */
  readonly ec2InstanceFamily?: string;

  /**
   * @schema SavingsPlansSavingsPlan#savingsPlanType
   */
  readonly savingsPlanType?: string;

  /**
   * @schema SavingsPlansSavingsPlan#paymentOption
   */
  readonly paymentOption?: string;

  /**
   * @schema SavingsPlansSavingsPlan#productTypes
   */
  readonly productTypes?: string[];

  /**
   * @schema SavingsPlansSavingsPlan#currency
   */
  readonly currency?: string;

  /**
   * @schema SavingsPlansSavingsPlan#commitment
   */
  readonly commitment?: string;

  /**
   * @schema SavingsPlansSavingsPlan#upfrontPaymentAmount
   */
  readonly upfrontPaymentAmount?: string;

  /**
   * @schema SavingsPlansSavingsPlan#recurringPaymentAmount
   */
  readonly recurringPaymentAmount?: string;

  /**
   * @schema SavingsPlansSavingsPlan#termDurationInSeconds
   */
  readonly termDurationInSeconds?: number;

  /**
   * @schema SavingsPlansSavingsPlan#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema SavingsPlansSavingsPlanOfferingRateFilterElement
 */
export interface SavingsPlansSavingsPlanOfferingRateFilterElement {
  /**
   * @schema SavingsPlansSavingsPlanOfferingRateFilterElement#name
   */
  readonly name?: string;

  /**
   * @schema SavingsPlansSavingsPlanOfferingRateFilterElement#values
   */
  readonly values?: string[];

}

/**
 * @schema SavingsPlansSavingsPlanOfferingRate
 */
export interface SavingsPlansSavingsPlanOfferingRate {
  /**
   * @schema SavingsPlansSavingsPlanOfferingRate#savingsPlanOffering
   */
  readonly savingsPlanOffering?: SavingsPlansParentSavingsPlanOffering;

  /**
   * @schema SavingsPlansSavingsPlanOfferingRate#rate
   */
  readonly rate?: string;

  /**
   * @schema SavingsPlansSavingsPlanOfferingRate#unit
   */
  readonly unit?: string;

  /**
   * @schema SavingsPlansSavingsPlanOfferingRate#productType
   */
  readonly productType?: string;

  /**
   * @schema SavingsPlansSavingsPlanOfferingRate#serviceCode
   */
  readonly serviceCode?: string;

  /**
   * @schema SavingsPlansSavingsPlanOfferingRate#usageType
   */
  readonly usageType?: string;

  /**
   * @schema SavingsPlansSavingsPlanOfferingRate#operation
   */
  readonly operation?: string;

  /**
   * @schema SavingsPlansSavingsPlanOfferingRate#properties
   */
  readonly properties?: SavingsPlansSavingsPlanOfferingRateProperty[];

}

/**
 * @schema SavingsPlansSavingsPlanOfferingFilterElement
 */
export interface SavingsPlansSavingsPlanOfferingFilterElement {
  /**
   * @schema SavingsPlansSavingsPlanOfferingFilterElement#name
   */
  readonly name?: string;

  /**
   * @schema SavingsPlansSavingsPlanOfferingFilterElement#values
   */
  readonly values?: string[];

}

/**
 * @schema SavingsPlansSavingsPlanOffering
 */
export interface SavingsPlansSavingsPlanOffering {
  /**
   * @schema SavingsPlansSavingsPlanOffering#offeringId
   */
  readonly offeringId?: string;

  /**
   * @schema SavingsPlansSavingsPlanOffering#productTypes
   */
  readonly productTypes?: string[];

  /**
   * @schema SavingsPlansSavingsPlanOffering#planType
   */
  readonly planType?: string;

  /**
   * @schema SavingsPlansSavingsPlanOffering#description
   */
  readonly description?: string;

  /**
   * @schema SavingsPlansSavingsPlanOffering#paymentOption
   */
  readonly paymentOption?: string;

  /**
   * @schema SavingsPlansSavingsPlanOffering#durationSeconds
   */
  readonly durationSeconds?: number;

  /**
   * @schema SavingsPlansSavingsPlanOffering#currency
   */
  readonly currency?: string;

  /**
   * @schema SavingsPlansSavingsPlanOffering#serviceCode
   */
  readonly serviceCode?: string;

  /**
   * @schema SavingsPlansSavingsPlanOffering#usageType
   */
  readonly usageType?: string;

  /**
   * @schema SavingsPlansSavingsPlanOffering#operation
   */
  readonly operation?: string;

  /**
   * @schema SavingsPlansSavingsPlanOffering#properties
   */
  readonly properties?: SavingsPlansSavingsPlanOfferingProperty[];

}

/**
 * @schema SavingsPlansSavingsPlanRateProperty
 */
export interface SavingsPlansSavingsPlanRateProperty {
  /**
   * @schema SavingsPlansSavingsPlanRateProperty#name
   */
  readonly name?: string;

  /**
   * @schema SavingsPlansSavingsPlanRateProperty#value
   */
  readonly value?: string;

}

/**
 * @schema SavingsPlansParentSavingsPlanOffering
 */
export interface SavingsPlansParentSavingsPlanOffering {
  /**
   * @schema SavingsPlansParentSavingsPlanOffering#offeringId
   */
  readonly offeringId?: string;

  /**
   * @schema SavingsPlansParentSavingsPlanOffering#paymentOption
   */
  readonly paymentOption?: string;

  /**
   * @schema SavingsPlansParentSavingsPlanOffering#planType
   */
  readonly planType?: string;

  /**
   * @schema SavingsPlansParentSavingsPlanOffering#durationSeconds
   */
  readonly durationSeconds?: number;

  /**
   * @schema SavingsPlansParentSavingsPlanOffering#currency
   */
  readonly currency?: string;

  /**
   * @schema SavingsPlansParentSavingsPlanOffering#planDescription
   */
  readonly planDescription?: string;

}

/**
 * @schema SavingsPlansSavingsPlanOfferingRateProperty
 */
export interface SavingsPlansSavingsPlanOfferingRateProperty {
  /**
   * @schema SavingsPlansSavingsPlanOfferingRateProperty#name
   */
  readonly name?: string;

  /**
   * @schema SavingsPlansSavingsPlanOfferingRateProperty#value
   */
  readonly value?: string;

}

/**
 * @schema SavingsPlansSavingsPlanOfferingProperty
 */
export interface SavingsPlansSavingsPlanOfferingProperty {
  /**
   * @schema SavingsPlansSavingsPlanOfferingProperty#name
   */
  readonly name?: string;

  /**
   * @schema SavingsPlansSavingsPlanOfferingProperty#value
   */
  readonly value?: string;

}
