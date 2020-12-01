/**
 * @schema DescribeServicesRequest
 */
export interface DescribeServicesRequest {
  /**
   * @schema DescribeServicesRequest#ServiceCode
   */
  readonly serviceCode?: string;

  /**
   * @schema DescribeServicesRequest#FormatVersion
   */
  readonly formatVersion?: string;

  /**
   * @schema DescribeServicesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeServicesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema DescribeServicesResponse
 */
export interface DescribeServicesResponse {
  /**
   * @schema DescribeServicesResponse#Services
   */
  readonly services?: Service[];

  /**
   * @schema DescribeServicesResponse#FormatVersion
   */
  readonly formatVersion?: string;

  /**
   * @schema DescribeServicesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetAttributeValuesRequest
 */
export interface GetAttributeValuesRequest {
  /**
   * @schema GetAttributeValuesRequest#ServiceCode
   */
  readonly serviceCode: string;

  /**
   * @schema GetAttributeValuesRequest#AttributeName
   */
  readonly attributeName: string;

  /**
   * @schema GetAttributeValuesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetAttributeValuesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema GetAttributeValuesResponse
 */
export interface GetAttributeValuesResponse {
  /**
   * @schema GetAttributeValuesResponse#AttributeValues
   */
  readonly attributeValues?: AttributeValue[];

  /**
   * @schema GetAttributeValuesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetProductsRequest
 */
export interface GetProductsRequest {
  /**
   * @schema GetProductsRequest#ServiceCode
   */
  readonly serviceCode?: string;

  /**
   * @schema GetProductsRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema GetProductsRequest#FormatVersion
   */
  readonly formatVersion?: string;

  /**
   * @schema GetProductsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetProductsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema GetProductsResponse
 */
export interface GetProductsResponse {
  /**
   * @schema GetProductsResponse#FormatVersion
   */
  readonly formatVersion?: string;

  /**
   * @schema GetProductsResponse#PriceList
   */
  readonly priceList?: string[];

  /**
   * @schema GetProductsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Service
 */
export interface Service {
  /**
   * @schema Service#ServiceCode
   */
  readonly serviceCode?: string;

  /**
   * @schema Service#AttributeNames
   */
  readonly attributeNames?: string[];

}

/**
 * @schema AttributeValue
 */
export interface AttributeValue {
  /**
   * @schema AttributeValue#Value
   */
  readonly value?: string;

}

/**
 * @schema Filter
 */
export interface Filter {
  /**
   * @schema Filter#Type
   */
  readonly type: string;

  /**
   * @schema Filter#Field
   */
  readonly field: string;

  /**
   * @schema Filter#Value
   */
  readonly value: string;

}
