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
 * Converts an object of type 'SavingsPlansCreateSavingsPlanRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SavingsPlansCreateSavingsPlanRequest(obj: SavingsPlansCreateSavingsPlanRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'savingsPlanOfferingId': obj.savingsPlanOfferingId,
    'commitment': obj.commitment,
    'upfrontPaymentAmount': obj.upfrontPaymentAmount,
    'purchaseTime': obj.purchaseTime,
    'clientToken': obj.clientToken,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SavingsPlansCreateSavingsPlanResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SavingsPlansCreateSavingsPlanResponse(obj: SavingsPlansCreateSavingsPlanResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'savingsPlanId': obj.savingsPlanId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SavingsPlansDeleteQueuedSavingsPlanRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SavingsPlansDeleteQueuedSavingsPlanRequest(obj: SavingsPlansDeleteQueuedSavingsPlanRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'savingsPlanId': obj.savingsPlanId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SavingsPlansDeleteQueuedSavingsPlanResponse
 */
export interface SavingsPlansDeleteQueuedSavingsPlanResponse {
}

/**
 * Converts an object of type 'SavingsPlansDeleteQueuedSavingsPlanResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SavingsPlansDeleteQueuedSavingsPlanResponse(obj: SavingsPlansDeleteQueuedSavingsPlanResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SavingsPlansDescribeSavingsPlanRatesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SavingsPlansDescribeSavingsPlanRatesRequest(obj: SavingsPlansDescribeSavingsPlanRatesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'savingsPlanId': obj.savingsPlanId,
    'filters': obj.filters?.map(y => toJson_SavingsPlansSavingsPlanRateFilter(y)),
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SavingsPlansDescribeSavingsPlanRatesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SavingsPlansDescribeSavingsPlanRatesResponse(obj: SavingsPlansDescribeSavingsPlanRatesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'savingsPlanId': obj.savingsPlanId,
    'searchResults': obj.searchResults?.map(y => toJson_SavingsPlansSavingsPlanRate(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SavingsPlansDescribeSavingsPlansRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SavingsPlansDescribeSavingsPlansRequest(obj: SavingsPlansDescribeSavingsPlansRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'savingsPlanArns': obj.savingsPlanArns?.map(y => y),
    'savingsPlanIds': obj.savingsPlanIds?.map(y => y),
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
    'states': obj.states?.map(y => y),
    'filters': obj.filters?.map(y => toJson_SavingsPlansSavingsPlanFilter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SavingsPlansDescribeSavingsPlansResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SavingsPlansDescribeSavingsPlansResponse(obj: SavingsPlansDescribeSavingsPlansResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'savingsPlans': obj.savingsPlans?.map(y => toJson_SavingsPlansSavingsPlan(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SavingsPlansDescribeSavingsPlansOfferingRatesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SavingsPlansDescribeSavingsPlansOfferingRatesRequest(obj: SavingsPlansDescribeSavingsPlansOfferingRatesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'savingsPlanOfferingIds': obj.savingsPlanOfferingIds?.map(y => y),
    'savingsPlanPaymentOptions': obj.savingsPlanPaymentOptions?.map(y => y),
    'savingsPlanTypes': obj.savingsPlanTypes?.map(y => y),
    'products': obj.products?.map(y => y),
    'serviceCodes': obj.serviceCodes?.map(y => y),
    'usageTypes': obj.usageTypes?.map(y => y),
    'operations': obj.operations?.map(y => y),
    'filters': obj.filters?.map(y => toJson_SavingsPlansSavingsPlanOfferingRateFilterElement(y)),
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SavingsPlansDescribeSavingsPlansOfferingRatesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SavingsPlansDescribeSavingsPlansOfferingRatesResponse(obj: SavingsPlansDescribeSavingsPlansOfferingRatesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'searchResults': obj.searchResults?.map(y => toJson_SavingsPlansSavingsPlanOfferingRate(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SavingsPlansDescribeSavingsPlansOfferingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SavingsPlansDescribeSavingsPlansOfferingsRequest(obj: SavingsPlansDescribeSavingsPlansOfferingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'offeringIds': obj.offeringIds?.map(y => y),
    'paymentOptions': obj.paymentOptions?.map(y => y),
    'productType': obj.productType,
    'planTypes': obj.planTypes?.map(y => y),
    'durations': obj.durations?.map(y => y),
    'currencies': obj.currencies?.map(y => y),
    'descriptions': obj.descriptions?.map(y => y),
    'serviceCodes': obj.serviceCodes?.map(y => y),
    'usageTypes': obj.usageTypes?.map(y => y),
    'operations': obj.operations?.map(y => y),
    'filters': obj.filters?.map(y => toJson_SavingsPlansSavingsPlanOfferingFilterElement(y)),
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SavingsPlansDescribeSavingsPlansOfferingsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SavingsPlansDescribeSavingsPlansOfferingsResponse(obj: SavingsPlansDescribeSavingsPlansOfferingsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'searchResults': obj.searchResults?.map(y => toJson_SavingsPlansSavingsPlanOffering(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SavingsPlansListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SavingsPlansListTagsForResourceRequest(obj: SavingsPlansListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SavingsPlansListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SavingsPlansListTagsForResourceResponse(obj: SavingsPlansListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SavingsPlansTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SavingsPlansTagResourceRequest(obj: SavingsPlansTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SavingsPlansTagResourceResponse
 */
export interface SavingsPlansTagResourceResponse {
}

/**
 * Converts an object of type 'SavingsPlansTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SavingsPlansTagResourceResponse(obj: SavingsPlansTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SavingsPlansUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SavingsPlansUntagResourceRequest(obj: SavingsPlansUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
    'tagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SavingsPlansUntagResourceResponse
 */
export interface SavingsPlansUntagResourceResponse {
}

/**
 * Converts an object of type 'SavingsPlansUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SavingsPlansUntagResourceResponse(obj: SavingsPlansUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SavingsPlansSavingsPlanRateFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SavingsPlansSavingsPlanRateFilter(obj: SavingsPlansSavingsPlanRateFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'values': obj.values?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SavingsPlansSavingsPlanRate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SavingsPlansSavingsPlanRate(obj: SavingsPlansSavingsPlanRate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'rate': obj.rate,
    'currency': obj.currency,
    'unit': obj.unit,
    'productType': obj.productType,
    'serviceCode': obj.serviceCode,
    'usageType': obj.usageType,
    'operation': obj.operation,
    'properties': obj.properties?.map(y => toJson_SavingsPlansSavingsPlanRateProperty(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SavingsPlansSavingsPlanFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SavingsPlansSavingsPlanFilter(obj: SavingsPlansSavingsPlanFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'values': obj.values?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SavingsPlansSavingsPlan' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SavingsPlansSavingsPlan(obj: SavingsPlansSavingsPlan | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'offeringId': obj.offeringId,
    'savingsPlanId': obj.savingsPlanId,
    'savingsPlanArn': obj.savingsPlanArn,
    'description': obj.description,
    'start': obj.start,
    'end': obj.end,
    'state': obj.state,
    'region': obj.region,
    'ec2InstanceFamily': obj.ec2InstanceFamily,
    'savingsPlanType': obj.savingsPlanType,
    'paymentOption': obj.paymentOption,
    'productTypes': obj.productTypes?.map(y => y),
    'currency': obj.currency,
    'commitment': obj.commitment,
    'upfrontPaymentAmount': obj.upfrontPaymentAmount,
    'recurringPaymentAmount': obj.recurringPaymentAmount,
    'termDurationInSeconds': obj.termDurationInSeconds,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SavingsPlansSavingsPlanOfferingRateFilterElement' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SavingsPlansSavingsPlanOfferingRateFilterElement(obj: SavingsPlansSavingsPlanOfferingRateFilterElement | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'values': obj.values?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SavingsPlansSavingsPlanOfferingRate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SavingsPlansSavingsPlanOfferingRate(obj: SavingsPlansSavingsPlanOfferingRate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'savingsPlanOffering': toJson_SavingsPlansParentSavingsPlanOffering(obj.savingsPlanOffering),
    'rate': obj.rate,
    'unit': obj.unit,
    'productType': obj.productType,
    'serviceCode': obj.serviceCode,
    'usageType': obj.usageType,
    'operation': obj.operation,
    'properties': obj.properties?.map(y => toJson_SavingsPlansSavingsPlanOfferingRateProperty(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SavingsPlansSavingsPlanOfferingFilterElement' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SavingsPlansSavingsPlanOfferingFilterElement(obj: SavingsPlansSavingsPlanOfferingFilterElement | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'values': obj.values?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SavingsPlansSavingsPlanOffering' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SavingsPlansSavingsPlanOffering(obj: SavingsPlansSavingsPlanOffering | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'offeringId': obj.offeringId,
    'productTypes': obj.productTypes?.map(y => y),
    'planType': obj.planType,
    'description': obj.description,
    'paymentOption': obj.paymentOption,
    'durationSeconds': obj.durationSeconds,
    'currency': obj.currency,
    'serviceCode': obj.serviceCode,
    'usageType': obj.usageType,
    'operation': obj.operation,
    'properties': obj.properties?.map(y => toJson_SavingsPlansSavingsPlanOfferingProperty(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SavingsPlansSavingsPlanRateProperty' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SavingsPlansSavingsPlanRateProperty(obj: SavingsPlansSavingsPlanRateProperty | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SavingsPlansParentSavingsPlanOffering' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SavingsPlansParentSavingsPlanOffering(obj: SavingsPlansParentSavingsPlanOffering | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'offeringId': obj.offeringId,
    'paymentOption': obj.paymentOption,
    'planType': obj.planType,
    'durationSeconds': obj.durationSeconds,
    'currency': obj.currency,
    'planDescription': obj.planDescription,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SavingsPlansSavingsPlanOfferingRateProperty' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SavingsPlansSavingsPlanOfferingRateProperty(obj: SavingsPlansSavingsPlanOfferingRateProperty | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

/**
 * Converts an object of type 'SavingsPlansSavingsPlanOfferingProperty' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SavingsPlansSavingsPlanOfferingProperty(obj: SavingsPlansSavingsPlanOfferingProperty | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
