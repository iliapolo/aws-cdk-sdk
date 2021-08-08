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
 * Converts an object of type 'CurDeleteReportDefinitionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CurDeleteReportDefinitionRequest(obj: CurDeleteReportDefinitionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReportName': obj.reportName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CurDeleteReportDefinitionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CurDeleteReportDefinitionResponse(obj: CurDeleteReportDefinitionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResponseMessage': obj.responseMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CurDescribeReportDefinitionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CurDescribeReportDefinitionsRequest(obj: CurDescribeReportDefinitionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CurDescribeReportDefinitionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CurDescribeReportDefinitionsResponse(obj: CurDescribeReportDefinitionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReportDefinitions': obj.reportDefinitions?.map(y => toJson_CurReportDefinition(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CurModifyReportDefinitionRequest
 */
export interface CurModifyReportDefinitionRequest {
  /**
   * @schema CurModifyReportDefinitionRequest#ReportName
   */
  readonly reportName?: string;

  /**
   * @schema CurModifyReportDefinitionRequest#ReportDefinition
   */
  readonly reportDefinition?: CurReportDefinition;

}

/**
 * Converts an object of type 'CurModifyReportDefinitionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CurModifyReportDefinitionRequest(obj: CurModifyReportDefinitionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReportName': obj.reportName,
    'ReportDefinition': toJson_CurReportDefinition(obj.reportDefinition),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CurModifyReportDefinitionResponse
 */
export interface CurModifyReportDefinitionResponse {
}

/**
 * Converts an object of type 'CurModifyReportDefinitionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CurModifyReportDefinitionResponse(obj: CurModifyReportDefinitionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CurPutReportDefinitionRequest
 */
export interface CurPutReportDefinitionRequest {
  /**
   * @schema CurPutReportDefinitionRequest#ReportDefinition
   */
  readonly reportDefinition?: CurReportDefinition;

}

/**
 * Converts an object of type 'CurPutReportDefinitionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CurPutReportDefinitionRequest(obj: CurPutReportDefinitionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReportDefinition': toJson_CurReportDefinition(obj.reportDefinition),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CurPutReportDefinitionResponse
 */
export interface CurPutReportDefinitionResponse {
}

/**
 * Converts an object of type 'CurPutReportDefinitionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CurPutReportDefinitionResponse(obj: CurPutReportDefinitionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CurReportDefinition
 */
export interface CurReportDefinition {
  /**
   * @schema CurReportDefinition#ReportName
   */
  readonly reportName?: string;

  /**
   * @schema CurReportDefinition#TimeUnit
   */
  readonly timeUnit?: string;

  /**
   * @schema CurReportDefinition#Format
   */
  readonly format?: string;

  /**
   * @schema CurReportDefinition#Compression
   */
  readonly compression?: string;

  /**
   * @schema CurReportDefinition#AdditionalSchemaElements
   */
  readonly additionalSchemaElements?: string[];

  /**
   * @schema CurReportDefinition#S3Bucket
   */
  readonly s3Bucket?: string;

  /**
   * @schema CurReportDefinition#S3Prefix
   */
  readonly s3Prefix?: string;

  /**
   * @schema CurReportDefinition#S3Region
   */
  readonly s3Region?: string;

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

  /**
   * @schema CurReportDefinition#BillingViewArn
   */
  readonly billingViewArn?: string;

}

/**
 * Converts an object of type 'CurReportDefinition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CurReportDefinition(obj: CurReportDefinition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReportName': obj.reportName,
    'TimeUnit': obj.timeUnit,
    'Format': obj.format,
    'Compression': obj.compression,
    'AdditionalSchemaElements': obj.additionalSchemaElements?.map(y => y),
    'S3Bucket': obj.s3Bucket,
    'S3Prefix': obj.s3Prefix,
    'S3Region': obj.s3Region,
    'AdditionalArtifacts': obj.additionalArtifacts?.map(y => y),
    'RefreshClosedReports': obj.refreshClosedReports,
    'ReportVersioning': obj.reportVersioning,
    'BillingViewArn': obj.billingViewArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
