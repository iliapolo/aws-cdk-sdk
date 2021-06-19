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
 * @schema PricingGetAttributeValuesRequest
 */
export interface PricingGetAttributeValuesRequest {
  /**
   * @schema PricingGetAttributeValuesRequest#ServiceCode
   */
  readonly serviceCode: string;

  /**
   * @schema PricingGetAttributeValuesRequest#AttributeName
   */
  readonly attributeName: string;

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
 * @schema PricingAttributeValue
 */
export interface PricingAttributeValue {
  /**
   * @schema PricingAttributeValue#Value
   */
  readonly value?: string;

}

/**
 * @schema PricingFilter
 */
export interface PricingFilter {
  /**
   * @schema PricingFilter#Type
   */
  readonly type: string;

  /**
   * @schema PricingFilter#Field
   */
  readonly field: string;

  /**
   * @schema PricingFilter#Value
   */
  readonly value: string;

}
