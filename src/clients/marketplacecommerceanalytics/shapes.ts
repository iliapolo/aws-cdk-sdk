/**
 * @schema MarketplaceCommerceAnalyticsGenerateDataSetRequest
 */
export interface MarketplaceCommerceAnalyticsGenerateDataSetRequest {
  /**
   * @schema MarketplaceCommerceAnalyticsGenerateDataSetRequest#dataSetType
   */
  readonly dataSetType: string;

  /**
   * @schema MarketplaceCommerceAnalyticsGenerateDataSetRequest#dataSetPublicationDate
   */
  readonly dataSetPublicationDate: string;

  /**
   * @schema MarketplaceCommerceAnalyticsGenerateDataSetRequest#roleNameArn
   */
  readonly roleNameArn: string;

  /**
   * @schema MarketplaceCommerceAnalyticsGenerateDataSetRequest#destinationS3BucketName
   */
  readonly destinationS3BucketName: string;

  /**
   * @schema MarketplaceCommerceAnalyticsGenerateDataSetRequest#destinationS3Prefix
   */
  readonly destinationS3Prefix?: string;

  /**
   * @schema MarketplaceCommerceAnalyticsGenerateDataSetRequest#snsTopicArn
   */
  readonly snsTopicArn: string;

  /**
   * @schema MarketplaceCommerceAnalyticsGenerateDataSetRequest#customerDefinedValues
   */
  readonly customerDefinedValues?: { [key: string]: string };

}

/**
 * Converts an object of type 'MarketplaceCommerceAnalyticsGenerateDataSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MarketplaceCommerceAnalyticsGenerateDataSetRequest(obj: MarketplaceCommerceAnalyticsGenerateDataSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'dataSetType': obj.dataSetType,
    'dataSetPublicationDate': obj.dataSetPublicationDate,
    'roleNameArn': obj.roleNameArn,
    'destinationS3BucketName': obj.destinationS3BucketName,
    'destinationS3Prefix': obj.destinationS3Prefix,
    'snsTopicArn': obj.snsTopicArn,
    'customerDefinedValues': ((obj.customerDefinedValues) === undefined) ? undefined : (Object.entries(obj.customerDefinedValues).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MarketplaceCommerceAnalyticsGenerateDataSetResult
 */
export interface MarketplaceCommerceAnalyticsGenerateDataSetResult {
  /**
   * @schema MarketplaceCommerceAnalyticsGenerateDataSetResult#dataSetRequestId
   */
  readonly dataSetRequestId?: string;

}

/**
 * Converts an object of type 'MarketplaceCommerceAnalyticsGenerateDataSetResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MarketplaceCommerceAnalyticsGenerateDataSetResult(obj: MarketplaceCommerceAnalyticsGenerateDataSetResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'dataSetRequestId': obj.dataSetRequestId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MarketplaceCommerceAnalyticsStartSupportDataExportRequest
 */
export interface MarketplaceCommerceAnalyticsStartSupportDataExportRequest {
  /**
   * @schema MarketplaceCommerceAnalyticsStartSupportDataExportRequest#dataSetType
   */
  readonly dataSetType: string;

  /**
   * @schema MarketplaceCommerceAnalyticsStartSupportDataExportRequest#fromDate
   */
  readonly fromDate: string;

  /**
   * @schema MarketplaceCommerceAnalyticsStartSupportDataExportRequest#roleNameArn
   */
  readonly roleNameArn: string;

  /**
   * @schema MarketplaceCommerceAnalyticsStartSupportDataExportRequest#destinationS3BucketName
   */
  readonly destinationS3BucketName: string;

  /**
   * @schema MarketplaceCommerceAnalyticsStartSupportDataExportRequest#destinationS3Prefix
   */
  readonly destinationS3Prefix?: string;

  /**
   * @schema MarketplaceCommerceAnalyticsStartSupportDataExportRequest#snsTopicArn
   */
  readonly snsTopicArn: string;

  /**
   * @schema MarketplaceCommerceAnalyticsStartSupportDataExportRequest#customerDefinedValues
   */
  readonly customerDefinedValues?: { [key: string]: string };

}

/**
 * Converts an object of type 'MarketplaceCommerceAnalyticsStartSupportDataExportRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MarketplaceCommerceAnalyticsStartSupportDataExportRequest(obj: MarketplaceCommerceAnalyticsStartSupportDataExportRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'dataSetType': obj.dataSetType,
    'fromDate': obj.fromDate,
    'roleNameArn': obj.roleNameArn,
    'destinationS3BucketName': obj.destinationS3BucketName,
    'destinationS3Prefix': obj.destinationS3Prefix,
    'snsTopicArn': obj.snsTopicArn,
    'customerDefinedValues': ((obj.customerDefinedValues) === undefined) ? undefined : (Object.entries(obj.customerDefinedValues).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MarketplaceCommerceAnalyticsStartSupportDataExportResult
 */
export interface MarketplaceCommerceAnalyticsStartSupportDataExportResult {
  /**
   * @schema MarketplaceCommerceAnalyticsStartSupportDataExportResult#dataSetRequestId
   */
  readonly dataSetRequestId?: string;

}

/**
 * Converts an object of type 'MarketplaceCommerceAnalyticsStartSupportDataExportResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MarketplaceCommerceAnalyticsStartSupportDataExportResult(obj: MarketplaceCommerceAnalyticsStartSupportDataExportResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'dataSetRequestId': obj.dataSetRequestId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
