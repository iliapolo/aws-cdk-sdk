/**
 * @schema DeleteReportDefinitionRequest
 */
export interface DeleteReportDefinitionRequest {
  /**
   * @schema DeleteReportDefinitionRequest#ReportName
   */
  readonly reportName?: string;

}

/**
 * @schema DeleteReportDefinitionResponse
 */
export interface DeleteReportDefinitionResponse {
  /**
   * @schema DeleteReportDefinitionResponse#ResponseMessage
   */
  readonly responseMessage?: string;

}

/**
 * @schema DescribeReportDefinitionsRequest
 */
export interface DescribeReportDefinitionsRequest {
  /**
   * @schema DescribeReportDefinitionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeReportDefinitionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeReportDefinitionsResponse
 */
export interface DescribeReportDefinitionsResponse {
  /**
   * @schema DescribeReportDefinitionsResponse#ReportDefinitions
   */
  readonly reportDefinitions?: ReportDefinition[];

  /**
   * @schema DescribeReportDefinitionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ModifyReportDefinitionRequest
 */
export interface ModifyReportDefinitionRequest {
  /**
   * @schema ModifyReportDefinitionRequest#ReportName
   */
  readonly reportName: string;

  /**
   * @schema ModifyReportDefinitionRequest#ReportDefinition
   */
  readonly reportDefinition: ReportDefinition;

}

/**
 * @schema ModifyReportDefinitionResponse
 */
export interface ModifyReportDefinitionResponse {
}

/**
 * @schema PutReportDefinitionRequest
 */
export interface PutReportDefinitionRequest {
  /**
   * @schema PutReportDefinitionRequest#ReportDefinition
   */
  readonly reportDefinition: ReportDefinition;

}

/**
 * @schema PutReportDefinitionResponse
 */
export interface PutReportDefinitionResponse {
}

/**
 * @schema ReportDefinition
 */
export interface ReportDefinition {
  /**
   * @schema ReportDefinition#ReportName
   */
  readonly reportName: string;

  /**
   * @schema ReportDefinition#TimeUnit
   */
  readonly timeUnit: string;

  /**
   * @schema ReportDefinition#Format
   */
  readonly format: string;

  /**
   * @schema ReportDefinition#Compression
   */
  readonly compression: string;

  /**
   * @schema ReportDefinition#AdditionalSchemaElements
   */
  readonly additionalSchemaElements: string[];

  /**
   * @schema ReportDefinition#S3Bucket
   */
  readonly s3Bucket: string;

  /**
   * @schema ReportDefinition#S3Prefix
   */
  readonly s3Prefix: string;

  /**
   * @schema ReportDefinition#S3Region
   */
  readonly s3Region: string;

  /**
   * @schema ReportDefinition#AdditionalArtifacts
   */
  readonly additionalArtifacts?: string[];

  /**
   * @schema ReportDefinition#RefreshClosedReports
   */
  readonly refreshClosedReports?: boolean;

  /**
   * @schema ReportDefinition#ReportVersioning
   */
  readonly reportVersioning?: string;

}
