/**
 * @schema PricingDescribeServicesRequest
 */
export interface PricingDescribeServicesRequest {
  /**
   * @schema PricingDescribeServicesRequest#ServiceCode
   */
  readonly serviceCode?: string;

  /**
   * @schema PricingDescribeServicesRequest#FormatVersion
   */
  readonly formatVersion?: string;

  /**
   * @schema PricingDescribeServicesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema PricingDescribeServicesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'PricingDescribeServicesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PricingDescribeServicesRequest(obj: PricingDescribeServicesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceCode': obj.serviceCode,
    'FormatVersion': obj.formatVersion,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PricingDescribeServicesResponse
 */
export interface PricingDescribeServicesResponse {
  /**
   * @schema PricingDescribeServicesResponse#Services
   */
  readonly services?: PricingService[];

  /**
   * @schema PricingDescribeServicesResponse#FormatVersion
   */
  readonly formatVersion?: string;

  /**
   * @schema PricingDescribeServicesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'PricingDescribeServicesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PricingDescribeServicesResponse(obj: PricingDescribeServicesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Services': obj.services?.map(y => toJson_PricingService(y)),
    'FormatVersion': obj.formatVersion,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PricingGetAttributeValuesRequest
 */
export interface PricingGetAttributeValuesRequest {
  /**
   * @schema PricingGetAttributeValuesRequest#ServiceCode
   */
  readonly serviceCode?: string;

  /**
   * @schema PricingGetAttributeValuesRequest#AttributeName
   */
  readonly attributeName?: string;

  /**
   * @schema PricingGetAttributeValuesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema PricingGetAttributeValuesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'PricingGetAttributeValuesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PricingGetAttributeValuesRequest(obj: PricingGetAttributeValuesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceCode': obj.serviceCode,
    'AttributeName': obj.attributeName,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PricingGetAttributeValuesResponse
 */
export interface PricingGetAttributeValuesResponse {
  /**
   * @schema PricingGetAttributeValuesResponse#AttributeValues
   */
  readonly attributeValues?: PricingAttributeValue[];

  /**
   * @schema PricingGetAttributeValuesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'PricingGetAttributeValuesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PricingGetAttributeValuesResponse(obj: PricingGetAttributeValuesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AttributeValues': obj.attributeValues?.map(y => toJson_PricingAttributeValue(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PricingGetProductsRequest
 */
export interface PricingGetProductsRequest {
  /**
   * @schema PricingGetProductsRequest#ServiceCode
   */
  readonly serviceCode?: string;

  /**
   * @schema PricingGetProductsRequest#Filters
   */
  readonly filters?: PricingFilter[];

  /**
   * @schema PricingGetProductsRequest#FormatVersion
   */
  readonly formatVersion?: string;

  /**
   * @schema PricingGetProductsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema PricingGetProductsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'PricingGetProductsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PricingGetProductsRequest(obj: PricingGetProductsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceCode': obj.serviceCode,
    'Filters': obj.filters?.map(y => toJson_PricingFilter(y)),
    'FormatVersion': obj.formatVersion,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PricingGetProductsResponse
 */
export interface PricingGetProductsResponse {
  /**
   * @schema PricingGetProductsResponse#FormatVersion
   */
  readonly formatVersion?: string;

  /**
   * @schema PricingGetProductsResponse#PriceList
   */
  readonly priceList?: string[];

  /**
   * @schema PricingGetProductsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'PricingGetProductsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PricingGetProductsResponse(obj: PricingGetProductsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FormatVersion': obj.formatVersion,
    'PriceList': obj.priceList?.map(y => y),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PricingService
 */
export interface PricingService {
  /**
   * @schema PricingService#ServiceCode
   */
  readonly serviceCode?: string;

  /**
   * @schema PricingService#AttributeNames
   */
  readonly attributeNames?: string[];

}

/**
 * Converts an object of type 'PricingService' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PricingService(obj: PricingService | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceCode': obj.serviceCode,
    'AttributeNames': obj.attributeNames?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PricingAttributeValue
 */
export interface PricingAttributeValue {
  /**
   * @schema PricingAttributeValue#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'PricingAttributeValue' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PricingAttributeValue(obj: PricingAttributeValue | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PricingFilter
 */
export interface PricingFilter {
  /**
   * @schema PricingFilter#Type
   */
  readonly type?: string;

  /**
   * @schema PricingFilter#Field
   */
  readonly field?: string;

  /**
   * @schema PricingFilter#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'PricingFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PricingFilter(obj: PricingFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Field': obj.field,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
