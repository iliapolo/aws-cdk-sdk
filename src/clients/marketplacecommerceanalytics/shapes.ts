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
 * @schema MarketplaceCommerceAnalyticsGenerateDataSetResult
 */
export interface MarketplaceCommerceAnalyticsGenerateDataSetResult {
  /**
   * @schema MarketplaceCommerceAnalyticsGenerateDataSetResult#dataSetRequestId
   */
  readonly dataSetRequestId?: string;

}

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
 * @schema MarketplaceCommerceAnalyticsStartSupportDataExportResult
 */
export interface MarketplaceCommerceAnalyticsStartSupportDataExportResult {
  /**
   * @schema MarketplaceCommerceAnalyticsStartSupportDataExportResult#dataSetRequestId
   */
  readonly dataSetRequestId?: string;

}
