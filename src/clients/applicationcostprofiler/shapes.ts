/**
 * @schema ApplicationCostProfilerDeleteReportDefinitionRequest
 */
export interface ApplicationCostProfilerDeleteReportDefinitionRequest {
  /**
   * @schema ApplicationCostProfilerDeleteReportDefinitionRequest#reportId
   */
  readonly reportId: string;

}

/**
 * Converts an object of type 'ApplicationCostProfilerDeleteReportDefinitionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationCostProfilerDeleteReportDefinitionRequest(obj: ApplicationCostProfilerDeleteReportDefinitionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'reportId': obj.reportId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationCostProfilerDeleteReportDefinitionResult
 */
export interface ApplicationCostProfilerDeleteReportDefinitionResult {
  /**
   * @schema ApplicationCostProfilerDeleteReportDefinitionResult#reportId
   */
  readonly reportId?: string;

}

/**
 * Converts an object of type 'ApplicationCostProfilerDeleteReportDefinitionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationCostProfilerDeleteReportDefinitionResult(obj: ApplicationCostProfilerDeleteReportDefinitionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'reportId': obj.reportId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationCostProfilerGetReportDefinitionRequest
 */
export interface ApplicationCostProfilerGetReportDefinitionRequest {
  /**
   * @schema ApplicationCostProfilerGetReportDefinitionRequest#reportId
   */
  readonly reportId: string;

}

/**
 * Converts an object of type 'ApplicationCostProfilerGetReportDefinitionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationCostProfilerGetReportDefinitionRequest(obj: ApplicationCostProfilerGetReportDefinitionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'reportId': obj.reportId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationCostProfilerGetReportDefinitionResult
 */
export interface ApplicationCostProfilerGetReportDefinitionResult {
  /**
   * @schema ApplicationCostProfilerGetReportDefinitionResult#reportId
   */
  readonly reportId: string;

  /**
   * @schema ApplicationCostProfilerGetReportDefinitionResult#reportDescription
   */
  readonly reportDescription: string;

  /**
   * @schema ApplicationCostProfilerGetReportDefinitionResult#reportFrequency
   */
  readonly reportFrequency: string;

  /**
   * @schema ApplicationCostProfilerGetReportDefinitionResult#format
   */
  readonly format: string;

  /**
   * @schema ApplicationCostProfilerGetReportDefinitionResult#destinationS3Location
   */
  readonly destinationS3Location: ApplicationCostProfilerS3Location;

  /**
   * @schema ApplicationCostProfilerGetReportDefinitionResult#createdAt
   */
  readonly createdAt: string;

  /**
   * @schema ApplicationCostProfilerGetReportDefinitionResult#lastUpdated
   */
  readonly lastUpdated: string;

}

/**
 * Converts an object of type 'ApplicationCostProfilerGetReportDefinitionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationCostProfilerGetReportDefinitionResult(obj: ApplicationCostProfilerGetReportDefinitionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'reportId': obj.reportId,
    'reportDescription': obj.reportDescription,
    'reportFrequency': obj.reportFrequency,
    'format': obj.format,
    'destinationS3Location': toJson_ApplicationCostProfilerS3Location(obj.destinationS3Location),
    'createdAt': obj.createdAt,
    'lastUpdated': obj.lastUpdated,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationCostProfilerImportApplicationUsageRequest
 */
export interface ApplicationCostProfilerImportApplicationUsageRequest {
  /**
   * @schema ApplicationCostProfilerImportApplicationUsageRequest#sourceS3Location
   */
  readonly sourceS3Location: ApplicationCostProfilerSourceS3Location;

}

/**
 * Converts an object of type 'ApplicationCostProfilerImportApplicationUsageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationCostProfilerImportApplicationUsageRequest(obj: ApplicationCostProfilerImportApplicationUsageRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'sourceS3Location': toJson_ApplicationCostProfilerSourceS3Location(obj.sourceS3Location),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationCostProfilerImportApplicationUsageResult
 */
export interface ApplicationCostProfilerImportApplicationUsageResult {
  /**
   * @schema ApplicationCostProfilerImportApplicationUsageResult#importId
   */
  readonly importId: string;

}

/**
 * Converts an object of type 'ApplicationCostProfilerImportApplicationUsageResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationCostProfilerImportApplicationUsageResult(obj: ApplicationCostProfilerImportApplicationUsageResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'importId': obj.importId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationCostProfilerListReportDefinitionsRequest
 */
export interface ApplicationCostProfilerListReportDefinitionsRequest {
  /**
   * @schema ApplicationCostProfilerListReportDefinitionsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ApplicationCostProfilerListReportDefinitionsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'ApplicationCostProfilerListReportDefinitionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationCostProfilerListReportDefinitionsRequest(obj: ApplicationCostProfilerListReportDefinitionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationCostProfilerListReportDefinitionsResult
 */
export interface ApplicationCostProfilerListReportDefinitionsResult {
  /**
   * @schema ApplicationCostProfilerListReportDefinitionsResult#reportDefinitions
   */
  readonly reportDefinitions?: ApplicationCostProfilerReportDefinition[];

  /**
   * @schema ApplicationCostProfilerListReportDefinitionsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ApplicationCostProfilerListReportDefinitionsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationCostProfilerListReportDefinitionsResult(obj: ApplicationCostProfilerListReportDefinitionsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'reportDefinitions': obj.reportDefinitions?.map(y => toJson_ApplicationCostProfilerReportDefinition(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationCostProfilerPutReportDefinitionRequest
 */
export interface ApplicationCostProfilerPutReportDefinitionRequest {
  /**
   * @schema ApplicationCostProfilerPutReportDefinitionRequest#reportId
   */
  readonly reportId: string;

  /**
   * @schema ApplicationCostProfilerPutReportDefinitionRequest#reportDescription
   */
  readonly reportDescription: string;

  /**
   * @schema ApplicationCostProfilerPutReportDefinitionRequest#reportFrequency
   */
  readonly reportFrequency: string;

  /**
   * @schema ApplicationCostProfilerPutReportDefinitionRequest#format
   */
  readonly format: string;

  /**
   * @schema ApplicationCostProfilerPutReportDefinitionRequest#destinationS3Location
   */
  readonly destinationS3Location: ApplicationCostProfilerS3Location;

}

/**
 * Converts an object of type 'ApplicationCostProfilerPutReportDefinitionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationCostProfilerPutReportDefinitionRequest(obj: ApplicationCostProfilerPutReportDefinitionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'reportId': obj.reportId,
    'reportDescription': obj.reportDescription,
    'reportFrequency': obj.reportFrequency,
    'format': obj.format,
    'destinationS3Location': toJson_ApplicationCostProfilerS3Location(obj.destinationS3Location),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationCostProfilerPutReportDefinitionResult
 */
export interface ApplicationCostProfilerPutReportDefinitionResult {
  /**
   * @schema ApplicationCostProfilerPutReportDefinitionResult#reportId
   */
  readonly reportId?: string;

}

/**
 * Converts an object of type 'ApplicationCostProfilerPutReportDefinitionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationCostProfilerPutReportDefinitionResult(obj: ApplicationCostProfilerPutReportDefinitionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'reportId': obj.reportId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationCostProfilerUpdateReportDefinitionRequest
 */
export interface ApplicationCostProfilerUpdateReportDefinitionRequest {
  /**
   * @schema ApplicationCostProfilerUpdateReportDefinitionRequest#reportId
   */
  readonly reportId: string;

  /**
   * @schema ApplicationCostProfilerUpdateReportDefinitionRequest#reportDescription
   */
  readonly reportDescription: string;

  /**
   * @schema ApplicationCostProfilerUpdateReportDefinitionRequest#reportFrequency
   */
  readonly reportFrequency: string;

  /**
   * @schema ApplicationCostProfilerUpdateReportDefinitionRequest#format
   */
  readonly format: string;

  /**
   * @schema ApplicationCostProfilerUpdateReportDefinitionRequest#destinationS3Location
   */
  readonly destinationS3Location: ApplicationCostProfilerS3Location;

}

/**
 * Converts an object of type 'ApplicationCostProfilerUpdateReportDefinitionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationCostProfilerUpdateReportDefinitionRequest(obj: ApplicationCostProfilerUpdateReportDefinitionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'reportId': obj.reportId,
    'reportDescription': obj.reportDescription,
    'reportFrequency': obj.reportFrequency,
    'format': obj.format,
    'destinationS3Location': toJson_ApplicationCostProfilerS3Location(obj.destinationS3Location),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationCostProfilerUpdateReportDefinitionResult
 */
export interface ApplicationCostProfilerUpdateReportDefinitionResult {
  /**
   * @schema ApplicationCostProfilerUpdateReportDefinitionResult#reportId
   */
  readonly reportId?: string;

}

/**
 * Converts an object of type 'ApplicationCostProfilerUpdateReportDefinitionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationCostProfilerUpdateReportDefinitionResult(obj: ApplicationCostProfilerUpdateReportDefinitionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'reportId': obj.reportId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationCostProfilerS3Location
 */
export interface ApplicationCostProfilerS3Location {
  /**
   * @schema ApplicationCostProfilerS3Location#bucket
   */
  readonly bucket: string;

  /**
   * @schema ApplicationCostProfilerS3Location#prefix
   */
  readonly prefix: string;

}

/**
 * Converts an object of type 'ApplicationCostProfilerS3Location' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationCostProfilerS3Location(obj: ApplicationCostProfilerS3Location | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bucket': obj.bucket,
    'prefix': obj.prefix,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationCostProfilerSourceS3Location
 */
export interface ApplicationCostProfilerSourceS3Location {
  /**
   * @schema ApplicationCostProfilerSourceS3Location#bucket
   */
  readonly bucket: string;

  /**
   * @schema ApplicationCostProfilerSourceS3Location#key
   */
  readonly key: string;

  /**
   * @schema ApplicationCostProfilerSourceS3Location#region
   */
  readonly region?: string;

}

/**
 * Converts an object of type 'ApplicationCostProfilerSourceS3Location' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationCostProfilerSourceS3Location(obj: ApplicationCostProfilerSourceS3Location | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bucket': obj.bucket,
    'key': obj.key,
    'region': obj.region,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationCostProfilerReportDefinition
 */
export interface ApplicationCostProfilerReportDefinition {
  /**
   * @schema ApplicationCostProfilerReportDefinition#reportId
   */
  readonly reportId?: string;

  /**
   * @schema ApplicationCostProfilerReportDefinition#reportDescription
   */
  readonly reportDescription?: string;

  /**
   * @schema ApplicationCostProfilerReportDefinition#reportFrequency
   */
  readonly reportFrequency?: string;

  /**
   * @schema ApplicationCostProfilerReportDefinition#format
   */
  readonly format?: string;

  /**
   * @schema ApplicationCostProfilerReportDefinition#destinationS3Location
   */
  readonly destinationS3Location?: ApplicationCostProfilerS3Location;

  /**
   * @schema ApplicationCostProfilerReportDefinition#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema ApplicationCostProfilerReportDefinition#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

}

/**
 * Converts an object of type 'ApplicationCostProfilerReportDefinition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationCostProfilerReportDefinition(obj: ApplicationCostProfilerReportDefinition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'reportId': obj.reportId,
    'reportDescription': obj.reportDescription,
    'reportFrequency': obj.reportFrequency,
    'format': obj.format,
    'destinationS3Location': toJson_ApplicationCostProfilerS3Location(obj.destinationS3Location),
    'createdAt': obj.createdAt,
    'lastUpdatedAt': obj.lastUpdatedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
