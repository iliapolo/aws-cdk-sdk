/**
 * @schema CurDeleteReportDefinitionRequest
 */
export interface CurDeleteReportDefinitionRequest {
  /**
   * @schema CurDeleteReportDefinitionRequest#ReportName
   */
  readonly reportName?: string;

}

/**
 * @schema CurDeleteReportDefinitionResponse
 */
export interface CurDeleteReportDefinitionResponse {
  /**
   * @schema CurDeleteReportDefinitionResponse#ResponseMessage
   */
  readonly responseMessage?: string;

}

/**
 * @schema CurDescribeReportDefinitionsRequest
 */
export interface CurDescribeReportDefinitionsRequest {
  /**
   * @schema CurDescribeReportDefinitionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CurDescribeReportDefinitionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CurDescribeReportDefinitionsResponse
 */
export interface CurDescribeReportDefinitionsResponse {
  /**
   * @schema CurDescribeReportDefinitionsResponse#ReportDefinitions
   */
  readonly reportDefinitions?: CurReportDefinition[];

  /**
   * @schema CurDescribeReportDefinitionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CurModifyReportDefinitionRequest
 */
export interface CurModifyReportDefinitionRequest {
  /**
   * @schema CurModifyReportDefinitionRequest#ReportName
   */
  readonly reportName: string;

  /**
   * @schema CurModifyReportDefinitionRequest#ReportDefinition
   */
  readonly reportDefinition: CurReportDefinition;

}

/**
 * @schema CurModifyReportDefinitionResponse
 */
export interface CurModifyReportDefinitionResponse {
}

/**
 * @schema CurPutReportDefinitionRequest
 */
export interface CurPutReportDefinitionRequest {
  /**
   * @schema CurPutReportDefinitionRequest#ReportDefinition
   */
  readonly reportDefinition: CurReportDefinition;

}

/**
 * @schema CurPutReportDefinitionResponse
 */
export interface CurPutReportDefinitionResponse {
}

/**
 * @schema CurReportDefinition
 */
export interface CurReportDefinition {
  /**
   * @schema CurReportDefinition#ReportName
   */
  readonly reportName: string;

  /**
   * @schema CurReportDefinition#TimeUnit
   */
  readonly timeUnit: string;

  /**
   * @schema CurReportDefinition#Format
   */
  readonly format: string;

  /**
   * @schema CurReportDefinition#Compression
   */
  readonly compression: string;

  /**
   * @schema CurReportDefinition#AdditionalSchemaElements
   */
  readonly additionalSchemaElements: string[];

  /**
   * @schema CurReportDefinition#S3Bucket
   */
  readonly s3Bucket: string;

  /**
   * @schema CurReportDefinition#S3Prefix
   */
  readonly s3Prefix: string;

  /**
   * @schema CurReportDefinition#S3Region
   */
  readonly s3Region: string;

  /**
   * @schema CurReportDefinition#AdditionalArtifacts
   */
  readonly additionalArtifacts?: string[];

  /**
   * @schema CurReportDefinition#RefreshClosedReports
   */
  readonly refreshClosedReports?: boolean;

  /**
   * @schema CurReportDefinition#ReportVersioning
   */
  readonly reportVersioning?: string;

}
