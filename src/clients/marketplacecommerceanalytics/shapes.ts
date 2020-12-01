/**
 * @schema GenerateDataSetRequest
 */
export interface GenerateDataSetRequest {
  /**
   * @schema GenerateDataSetRequest#dataSetType
   */
  readonly dataSetType: string;

  /**
   * @schema GenerateDataSetRequest#dataSetPublicationDate
   */
  readonly dataSetPublicationDate: string;

  /**
   * @schema GenerateDataSetRequest#roleNameArn
   */
  readonly roleNameArn: string;

  /**
   * @schema GenerateDataSetRequest#destinationS3BucketName
   */
  readonly destinationS3BucketName: string;

  /**
   * @schema GenerateDataSetRequest#destinationS3Prefix
   */
  readonly destinationS3Prefix?: string;

  /**
   * @schema GenerateDataSetRequest#snsTopicArn
   */
  readonly snsTopicArn: string;

  /**
   * @schema GenerateDataSetRequest#customerDefinedValues
   */
  readonly customerDefinedValues?: { [key: string]: string };

}

/**
 * @schema GenerateDataSetResult
 */
export interface GenerateDataSetResult {
  /**
   * @schema GenerateDataSetResult#dataSetRequestId
   */
  readonly dataSetRequestId?: string;

}

/**
 * @schema StartSupportDataExportRequest
 */
export interface StartSupportDataExportRequest {
  /**
   * @schema StartSupportDataExportRequest#dataSetType
   */
  readonly dataSetType: string;

  /**
   * @schema StartSupportDataExportRequest#fromDate
   */
  readonly fromDate: string;

  /**
   * @schema StartSupportDataExportRequest#roleNameArn
   */
  readonly roleNameArn: string;

  /**
   * @schema StartSupportDataExportRequest#destinationS3BucketName
   */
  readonly destinationS3BucketName: string;

  /**
   * @schema StartSupportDataExportRequest#destinationS3Prefix
   */
  readonly destinationS3Prefix?: string;

  /**
   * @schema StartSupportDataExportRequest#snsTopicArn
   */
  readonly snsTopicArn: string;

  /**
   * @schema StartSupportDataExportRequest#customerDefinedValues
   */
  readonly customerDefinedValues?: { [key: string]: string };

}

/**
 * @schema StartSupportDataExportResult
 */
export interface StartSupportDataExportResult {
  /**
   * @schema StartSupportDataExportResult#dataSetRequestId
   */
  readonly dataSetRequestId?: string;

}
