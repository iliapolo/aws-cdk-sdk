/**
 * @schema TranslateCreateParallelDataRequest
 */
export interface TranslateCreateParallelDataRequest {
  /**
   * @schema TranslateCreateParallelDataRequest#Name
   */
  readonly name?: string;

  /**
   * @schema TranslateCreateParallelDataRequest#Description
   */
  readonly description?: string;

  /**
   * @schema TranslateCreateParallelDataRequest#ParallelDataConfig
   */
  readonly parallelDataConfig?: TranslateParallelDataConfig;

  /**
   * @schema TranslateCreateParallelDataRequest#EncryptionKey
   */
  readonly encryptionKey?: TranslateEncryptionKey;

  /**
   * @schema TranslateCreateParallelDataRequest#ClientToken
   */
  readonly clientToken?: string;

}

/**
 * Converts an object of type 'TranslateCreateParallelDataRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TranslateCreateParallelDataRequest(obj: TranslateCreateParallelDataRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Description': obj.description,
    'ParallelDataConfig': toJson_TranslateParallelDataConfig(obj.parallelDataConfig),
    'EncryptionKey': toJson_TranslateEncryptionKey(obj.encryptionKey),
    'ClientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TranslateCreateParallelDataResponse
 */
export interface TranslateCreateParallelDataResponse {
  /**
   * @schema TranslateCreateParallelDataResponse#Name
   */
  readonly name?: string;

  /**
   * @schema TranslateCreateParallelDataResponse#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'TranslateCreateParallelDataResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TranslateCreateParallelDataResponse(obj: TranslateCreateParallelDataResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TranslateDeleteParallelDataRequest
 */
export interface TranslateDeleteParallelDataRequest {
  /**
   * @schema TranslateDeleteParallelDataRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'TranslateDeleteParallelDataRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TranslateDeleteParallelDataRequest(obj: TranslateDeleteParallelDataRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TranslateDeleteParallelDataResponse
 */
export interface TranslateDeleteParallelDataResponse {
  /**
   * @schema TranslateDeleteParallelDataResponse#Name
   */
  readonly name?: string;

  /**
   * @schema TranslateDeleteParallelDataResponse#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'TranslateDeleteParallelDataResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TranslateDeleteParallelDataResponse(obj: TranslateDeleteParallelDataResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TranslateDeleteTerminologyRequest
 */
export interface TranslateDeleteTerminologyRequest {
  /**
   * @schema TranslateDeleteTerminologyRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'TranslateDeleteTerminologyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TranslateDeleteTerminologyRequest(obj: TranslateDeleteTerminologyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TranslateDescribeTextTranslationJobRequest
 */
export interface TranslateDescribeTextTranslationJobRequest {
  /**
   * @schema TranslateDescribeTextTranslationJobRequest#JobId
   */
  readonly jobId?: string;

}

/**
 * Converts an object of type 'TranslateDescribeTextTranslationJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TranslateDescribeTextTranslationJobRequest(obj: TranslateDescribeTextTranslationJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TranslateDescribeTextTranslationJobResponse
 */
export interface TranslateDescribeTextTranslationJobResponse {
  /**
   * @schema TranslateDescribeTextTranslationJobResponse#TextTranslationJobProperties
   */
  readonly textTranslationJobProperties?: TranslateTextTranslationJobProperties;

}

/**
 * Converts an object of type 'TranslateDescribeTextTranslationJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TranslateDescribeTextTranslationJobResponse(obj: TranslateDescribeTextTranslationJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TextTranslationJobProperties': toJson_TranslateTextTranslationJobProperties(obj.textTranslationJobProperties),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TranslateGetParallelDataRequest
 */
export interface TranslateGetParallelDataRequest {
  /**
   * @schema TranslateGetParallelDataRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'TranslateGetParallelDataRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TranslateGetParallelDataRequest(obj: TranslateGetParallelDataRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TranslateGetParallelDataResponse
 */
export interface TranslateGetParallelDataResponse {
  /**
   * @schema TranslateGetParallelDataResponse#ParallelDataProperties
   */
  readonly parallelDataProperties?: TranslateParallelDataProperties;

  /**
   * @schema TranslateGetParallelDataResponse#DataLocation
   */
  readonly dataLocation?: TranslateParallelDataDataLocation;

  /**
   * @schema TranslateGetParallelDataResponse#AuxiliaryDataLocation
   */
  readonly auxiliaryDataLocation?: TranslateParallelDataDataLocation;

  /**
   * @schema TranslateGetParallelDataResponse#LatestUpdateAttemptAuxiliaryDataLocation
   */
  readonly latestUpdateAttemptAuxiliaryDataLocation?: TranslateParallelDataDataLocation;

}

/**
 * Converts an object of type 'TranslateGetParallelDataResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TranslateGetParallelDataResponse(obj: TranslateGetParallelDataResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ParallelDataProperties': toJson_TranslateParallelDataProperties(obj.parallelDataProperties),
    'DataLocation': toJson_TranslateParallelDataDataLocation(obj.dataLocation),
    'AuxiliaryDataLocation': toJson_TranslateParallelDataDataLocation(obj.auxiliaryDataLocation),
    'LatestUpdateAttemptAuxiliaryDataLocation': toJson_TranslateParallelDataDataLocation(obj.latestUpdateAttemptAuxiliaryDataLocation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TranslateGetTerminologyRequest
 */
export interface TranslateGetTerminologyRequest {
  /**
   * @schema TranslateGetTerminologyRequest#Name
   */
  readonly name?: string;

  /**
   * @schema TranslateGetTerminologyRequest#TerminologyDataFormat
   */
  readonly terminologyDataFormat?: string;

}

/**
 * Converts an object of type 'TranslateGetTerminologyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TranslateGetTerminologyRequest(obj: TranslateGetTerminologyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'TerminologyDataFormat': obj.terminologyDataFormat,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TranslateGetTerminologyResponse
 */
export interface TranslateGetTerminologyResponse {
  /**
   * @schema TranslateGetTerminologyResponse#TerminologyProperties
   */
  readonly terminologyProperties?: TranslateTerminologyProperties;

  /**
   * @schema TranslateGetTerminologyResponse#TerminologyDataLocation
   */
  readonly terminologyDataLocation?: TranslateTerminologyDataLocation;

}

/**
 * Converts an object of type 'TranslateGetTerminologyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TranslateGetTerminologyResponse(obj: TranslateGetTerminologyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TerminologyProperties': toJson_TranslateTerminologyProperties(obj.terminologyProperties),
    'TerminologyDataLocation': toJson_TranslateTerminologyDataLocation(obj.terminologyDataLocation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TranslateImportTerminologyRequest
 */
export interface TranslateImportTerminologyRequest {
  /**
   * @schema TranslateImportTerminologyRequest#Name
   */
  readonly name?: string;

  /**
   * @schema TranslateImportTerminologyRequest#MergeStrategy
   */
  readonly mergeStrategy?: string;

  /**
   * @schema TranslateImportTerminologyRequest#Description
   */
  readonly description?: string;

  /**
   * @schema TranslateImportTerminologyRequest#TerminologyData
   */
  readonly terminologyData?: TranslateTerminologyData;

  /**
   * @schema TranslateImportTerminologyRequest#EncryptionKey
   */
  readonly encryptionKey?: TranslateEncryptionKey;

}

/**
 * Converts an object of type 'TranslateImportTerminologyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TranslateImportTerminologyRequest(obj: TranslateImportTerminologyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'MergeStrategy': obj.mergeStrategy,
    'Description': obj.description,
    'TerminologyData': toJson_TranslateTerminologyData(obj.terminologyData),
    'EncryptionKey': toJson_TranslateEncryptionKey(obj.encryptionKey),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TranslateImportTerminologyResponse
 */
export interface TranslateImportTerminologyResponse {
  /**
   * @schema TranslateImportTerminologyResponse#TerminologyProperties
   */
  readonly terminologyProperties?: TranslateTerminologyProperties;

}

/**
 * Converts an object of type 'TranslateImportTerminologyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TranslateImportTerminologyResponse(obj: TranslateImportTerminologyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TerminologyProperties': toJson_TranslateTerminologyProperties(obj.terminologyProperties),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TranslateListParallelDataRequest
 */
export interface TranslateListParallelDataRequest {
  /**
   * @schema TranslateListParallelDataRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema TranslateListParallelDataRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'TranslateListParallelDataRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TranslateListParallelDataRequest(obj: TranslateListParallelDataRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TranslateListParallelDataResponse
 */
export interface TranslateListParallelDataResponse {
  /**
   * @schema TranslateListParallelDataResponse#ParallelDataPropertiesList
   */
  readonly parallelDataPropertiesList?: TranslateParallelDataProperties[];

  /**
   * @schema TranslateListParallelDataResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'TranslateListParallelDataResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TranslateListParallelDataResponse(obj: TranslateListParallelDataResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ParallelDataPropertiesList': obj.parallelDataPropertiesList?.map(y => toJson_TranslateParallelDataProperties(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TranslateListTerminologiesRequest
 */
export interface TranslateListTerminologiesRequest {
  /**
   * @schema TranslateListTerminologiesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema TranslateListTerminologiesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'TranslateListTerminologiesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TranslateListTerminologiesRequest(obj: TranslateListTerminologiesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TranslateListTerminologiesResponse
 */
export interface TranslateListTerminologiesResponse {
  /**
   * @schema TranslateListTerminologiesResponse#TerminologyPropertiesList
   */
  readonly terminologyPropertiesList?: TranslateTerminologyProperties[];

  /**
   * @schema TranslateListTerminologiesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'TranslateListTerminologiesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TranslateListTerminologiesResponse(obj: TranslateListTerminologiesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TerminologyPropertiesList': obj.terminologyPropertiesList?.map(y => toJson_TranslateTerminologyProperties(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TranslateListTextTranslationJobsRequest
 */
export interface TranslateListTextTranslationJobsRequest {
  /**
   * @schema TranslateListTextTranslationJobsRequest#Filter
   */
  readonly filter?: TranslateTextTranslationJobFilter;

  /**
   * @schema TranslateListTextTranslationJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema TranslateListTextTranslationJobsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'TranslateListTextTranslationJobsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TranslateListTextTranslationJobsRequest(obj: TranslateListTextTranslationJobsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Filter': toJson_TranslateTextTranslationJobFilter(obj.filter),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TranslateListTextTranslationJobsResponse
 */
export interface TranslateListTextTranslationJobsResponse {
  /**
   * @schema TranslateListTextTranslationJobsResponse#TextTranslationJobPropertiesList
   */
  readonly textTranslationJobPropertiesList?: TranslateTextTranslationJobProperties[];

  /**
   * @schema TranslateListTextTranslationJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'TranslateListTextTranslationJobsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TranslateListTextTranslationJobsResponse(obj: TranslateListTextTranslationJobsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TextTranslationJobPropertiesList': obj.textTranslationJobPropertiesList?.map(y => toJson_TranslateTextTranslationJobProperties(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TranslateStartTextTranslationJobRequest
 */
export interface TranslateStartTextTranslationJobRequest {
  /**
   * @schema TranslateStartTextTranslationJobRequest#JobName
   */
  readonly jobName?: string;

  /**
   * @schema TranslateStartTextTranslationJobRequest#InputDataConfig
   */
  readonly inputDataConfig?: TranslateInputDataConfig;

  /**
   * @schema TranslateStartTextTranslationJobRequest#OutputDataConfig
   */
  readonly outputDataConfig?: TranslateOutputDataConfig;

  /**
   * @schema TranslateStartTextTranslationJobRequest#DataAccessRoleArn
   */
  readonly dataAccessRoleArn?: string;

  /**
   * @schema TranslateStartTextTranslationJobRequest#SourceLanguageCode
   */
  readonly sourceLanguageCode?: string;

  /**
   * @schema TranslateStartTextTranslationJobRequest#TargetLanguageCodes
   */
  readonly targetLanguageCodes?: string[];

  /**
   * @schema TranslateStartTextTranslationJobRequest#TerminologyNames
   */
  readonly terminologyNames?: string[];

  /**
   * @schema TranslateStartTextTranslationJobRequest#ParallelDataNames
   */
  readonly parallelDataNames?: string[];

  /**
   * @schema TranslateStartTextTranslationJobRequest#ClientToken
   */
  readonly clientToken?: string;

}

/**
 * Converts an object of type 'TranslateStartTextTranslationJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TranslateStartTextTranslationJobRequest(obj: TranslateStartTextTranslationJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobName': obj.jobName,
    'InputDataConfig': toJson_TranslateInputDataConfig(obj.inputDataConfig),
    'OutputDataConfig': toJson_TranslateOutputDataConfig(obj.outputDataConfig),
    'DataAccessRoleArn': obj.dataAccessRoleArn,
    'SourceLanguageCode': obj.sourceLanguageCode,
    'TargetLanguageCodes': obj.targetLanguageCodes?.map(y => y),
    'TerminologyNames': obj.terminologyNames?.map(y => y),
    'ParallelDataNames': obj.parallelDataNames?.map(y => y),
    'ClientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TranslateStartTextTranslationJobResponse
 */
export interface TranslateStartTextTranslationJobResponse {
  /**
   * @schema TranslateStartTextTranslationJobResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema TranslateStartTextTranslationJobResponse#JobStatus
   */
  readonly jobStatus?: string;

}

/**
 * Converts an object of type 'TranslateStartTextTranslationJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TranslateStartTextTranslationJobResponse(obj: TranslateStartTextTranslationJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
    'JobStatus': obj.jobStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TranslateStopTextTranslationJobRequest
 */
export interface TranslateStopTextTranslationJobRequest {
  /**
   * @schema TranslateStopTextTranslationJobRequest#JobId
   */
  readonly jobId?: string;

}

/**
 * Converts an object of type 'TranslateStopTextTranslationJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TranslateStopTextTranslationJobRequest(obj: TranslateStopTextTranslationJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TranslateStopTextTranslationJobResponse
 */
export interface TranslateStopTextTranslationJobResponse {
  /**
   * @schema TranslateStopTextTranslationJobResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema TranslateStopTextTranslationJobResponse#JobStatus
   */
  readonly jobStatus?: string;

}

/**
 * Converts an object of type 'TranslateStopTextTranslationJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TranslateStopTextTranslationJobResponse(obj: TranslateStopTextTranslationJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
    'JobStatus': obj.jobStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TranslateTranslateTextRequest
 */
export interface TranslateTranslateTextRequest {
  /**
   * @schema TranslateTranslateTextRequest#Text
   */
  readonly text?: string;

  /**
   * @schema TranslateTranslateTextRequest#TerminologyNames
   */
  readonly terminologyNames?: string[];

  /**
   * @schema TranslateTranslateTextRequest#SourceLanguageCode
   */
  readonly sourceLanguageCode?: string;

  /**
   * @schema TranslateTranslateTextRequest#TargetLanguageCode
   */
  readonly targetLanguageCode?: string;

}

/**
 * Converts an object of type 'TranslateTranslateTextRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TranslateTranslateTextRequest(obj: TranslateTranslateTextRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Text': obj.text,
    'TerminologyNames': obj.terminologyNames?.map(y => y),
    'SourceLanguageCode': obj.sourceLanguageCode,
    'TargetLanguageCode': obj.targetLanguageCode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TranslateTranslateTextResponse
 */
export interface TranslateTranslateTextResponse {
  /**
   * @schema TranslateTranslateTextResponse#TranslatedText
   */
  readonly translatedText?: string;

  /**
   * @schema TranslateTranslateTextResponse#SourceLanguageCode
   */
  readonly sourceLanguageCode?: string;

  /**
   * @schema TranslateTranslateTextResponse#TargetLanguageCode
   */
  readonly targetLanguageCode?: string;

  /**
   * @schema TranslateTranslateTextResponse#AppliedTerminologies
   */
  readonly appliedTerminologies?: TranslateAppliedTerminology[];

}

/**
 * Converts an object of type 'TranslateTranslateTextResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TranslateTranslateTextResponse(obj: TranslateTranslateTextResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TranslatedText': obj.translatedText,
    'SourceLanguageCode': obj.sourceLanguageCode,
    'TargetLanguageCode': obj.targetLanguageCode,
    'AppliedTerminologies': obj.appliedTerminologies?.map(y => toJson_TranslateAppliedTerminology(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TranslateUpdateParallelDataRequest
 */
export interface TranslateUpdateParallelDataRequest {
  /**
   * @schema TranslateUpdateParallelDataRequest#Name
   */
  readonly name?: string;

  /**
   * @schema TranslateUpdateParallelDataRequest#Description
   */
  readonly description?: string;

  /**
   * @schema TranslateUpdateParallelDataRequest#ParallelDataConfig
   */
  readonly parallelDataConfig?: TranslateParallelDataConfig;

  /**
   * @schema TranslateUpdateParallelDataRequest#ClientToken
   */
  readonly clientToken?: string;

}

/**
 * Converts an object of type 'TranslateUpdateParallelDataRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TranslateUpdateParallelDataRequest(obj: TranslateUpdateParallelDataRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Description': obj.description,
    'ParallelDataConfig': toJson_TranslateParallelDataConfig(obj.parallelDataConfig),
    'ClientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TranslateUpdateParallelDataResponse
 */
export interface TranslateUpdateParallelDataResponse {
  /**
   * @schema TranslateUpdateParallelDataResponse#Name
   */
  readonly name?: string;

  /**
   * @schema TranslateUpdateParallelDataResponse#Status
   */
  readonly status?: string;

  /**
   * @schema TranslateUpdateParallelDataResponse#LatestUpdateAttemptStatus
   */
  readonly latestUpdateAttemptStatus?: string;

  /**
   * @schema TranslateUpdateParallelDataResponse#LatestUpdateAttemptAt
   */
  readonly latestUpdateAttemptAt?: string;

}

/**
 * Converts an object of type 'TranslateUpdateParallelDataResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TranslateUpdateParallelDataResponse(obj: TranslateUpdateParallelDataResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Status': obj.status,
    'LatestUpdateAttemptStatus': obj.latestUpdateAttemptStatus,
    'LatestUpdateAttemptAt': obj.latestUpdateAttemptAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TranslateParallelDataConfig
 */
export interface TranslateParallelDataConfig {
  /**
   * @schema TranslateParallelDataConfig#S3Uri
   */
  readonly s3Uri?: string;

  /**
   * @schema TranslateParallelDataConfig#Format
   */
  readonly format?: string;

}

/**
 * Converts an object of type 'TranslateParallelDataConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TranslateParallelDataConfig(obj: TranslateParallelDataConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S3Uri': obj.s3Uri,
    'Format': obj.format,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TranslateEncryptionKey
 */
export interface TranslateEncryptionKey {
  /**
   * @schema TranslateEncryptionKey#Type
   */
  readonly type?: string;

  /**
   * @schema TranslateEncryptionKey#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'TranslateEncryptionKey' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TranslateEncryptionKey(obj: TranslateEncryptionKey | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TranslateTextTranslationJobProperties
 */
export interface TranslateTextTranslationJobProperties {
  /**
   * @schema TranslateTextTranslationJobProperties#JobId
   */
  readonly jobId?: string;

  /**
   * @schema TranslateTextTranslationJobProperties#JobName
   */
  readonly jobName?: string;

  /**
   * @schema TranslateTextTranslationJobProperties#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema TranslateTextTranslationJobProperties#JobDetails
   */
  readonly jobDetails?: TranslateJobDetails;

  /**
   * @schema TranslateTextTranslationJobProperties#SourceLanguageCode
   */
  readonly sourceLanguageCode?: string;

  /**
   * @schema TranslateTextTranslationJobProperties#TargetLanguageCodes
   */
  readonly targetLanguageCodes?: string[];

  /**
   * @schema TranslateTextTranslationJobProperties#TerminologyNames
   */
  readonly terminologyNames?: string[];

  /**
   * @schema TranslateTextTranslationJobProperties#ParallelDataNames
   */
  readonly parallelDataNames?: string[];

  /**
   * @schema TranslateTextTranslationJobProperties#Message
   */
  readonly message?: string;

  /**
   * @schema TranslateTextTranslationJobProperties#SubmittedTime
   */
  readonly submittedTime?: string;

  /**
   * @schema TranslateTextTranslationJobProperties#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema TranslateTextTranslationJobProperties#InputDataConfig
   */
  readonly inputDataConfig?: TranslateInputDataConfig;

  /**
   * @schema TranslateTextTranslationJobProperties#OutputDataConfig
   */
  readonly outputDataConfig?: TranslateOutputDataConfig;

  /**
   * @schema TranslateTextTranslationJobProperties#DataAccessRoleArn
   */
  readonly dataAccessRoleArn?: string;

}

/**
 * Converts an object of type 'TranslateTextTranslationJobProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TranslateTextTranslationJobProperties(obj: TranslateTextTranslationJobProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
    'JobName': obj.jobName,
    'JobStatus': obj.jobStatus,
    'JobDetails': toJson_TranslateJobDetails(obj.jobDetails),
    'SourceLanguageCode': obj.sourceLanguageCode,
    'TargetLanguageCodes': obj.targetLanguageCodes?.map(y => y),
    'TerminologyNames': obj.terminologyNames?.map(y => y),
    'ParallelDataNames': obj.parallelDataNames?.map(y => y),
    'Message': obj.message,
    'SubmittedTime': obj.submittedTime,
    'EndTime': obj.endTime,
    'InputDataConfig': toJson_TranslateInputDataConfig(obj.inputDataConfig),
    'OutputDataConfig': toJson_TranslateOutputDataConfig(obj.outputDataConfig),
    'DataAccessRoleArn': obj.dataAccessRoleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TranslateParallelDataProperties
 */
export interface TranslateParallelDataProperties {
  /**
   * @schema TranslateParallelDataProperties#Name
   */
  readonly name?: string;

  /**
   * @schema TranslateParallelDataProperties#Arn
   */
  readonly arn?: string;

  /**
   * @schema TranslateParallelDataProperties#Description
   */
  readonly description?: string;

  /**
   * @schema TranslateParallelDataProperties#Status
   */
  readonly status?: string;

  /**
   * @schema TranslateParallelDataProperties#SourceLanguageCode
   */
  readonly sourceLanguageCode?: string;

  /**
   * @schema TranslateParallelDataProperties#TargetLanguageCodes
   */
  readonly targetLanguageCodes?: string[];

  /**
   * @schema TranslateParallelDataProperties#ParallelDataConfig
   */
  readonly parallelDataConfig?: TranslateParallelDataConfig;

  /**
   * @schema TranslateParallelDataProperties#Message
   */
  readonly message?: string;

  /**
   * @schema TranslateParallelDataProperties#ImportedDataSize
   */
  readonly importedDataSize?: number;

  /**
   * @schema TranslateParallelDataProperties#ImportedRecordCount
   */
  readonly importedRecordCount?: number;

  /**
   * @schema TranslateParallelDataProperties#FailedRecordCount
   */
  readonly failedRecordCount?: number;

  /**
   * @schema TranslateParallelDataProperties#SkippedRecordCount
   */
  readonly skippedRecordCount?: number;

  /**
   * @schema TranslateParallelDataProperties#EncryptionKey
   */
  readonly encryptionKey?: TranslateEncryptionKey;

  /**
   * @schema TranslateParallelDataProperties#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema TranslateParallelDataProperties#LastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema TranslateParallelDataProperties#LatestUpdateAttemptStatus
   */
  readonly latestUpdateAttemptStatus?: string;

  /**
   * @schema TranslateParallelDataProperties#LatestUpdateAttemptAt
   */
  readonly latestUpdateAttemptAt?: string;

}

/**
 * Converts an object of type 'TranslateParallelDataProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TranslateParallelDataProperties(obj: TranslateParallelDataProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Arn': obj.arn,
    'Description': obj.description,
    'Status': obj.status,
    'SourceLanguageCode': obj.sourceLanguageCode,
    'TargetLanguageCodes': obj.targetLanguageCodes?.map(y => y),
    'ParallelDataConfig': toJson_TranslateParallelDataConfig(obj.parallelDataConfig),
    'Message': obj.message,
    'ImportedDataSize': obj.importedDataSize,
    'ImportedRecordCount': obj.importedRecordCount,
    'FailedRecordCount': obj.failedRecordCount,
    'SkippedRecordCount': obj.skippedRecordCount,
    'EncryptionKey': toJson_TranslateEncryptionKey(obj.encryptionKey),
    'CreatedAt': obj.createdAt,
    'LastUpdatedAt': obj.lastUpdatedAt,
    'LatestUpdateAttemptStatus': obj.latestUpdateAttemptStatus,
    'LatestUpdateAttemptAt': obj.latestUpdateAttemptAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TranslateParallelDataDataLocation
 */
export interface TranslateParallelDataDataLocation {
  /**
   * @schema TranslateParallelDataDataLocation#RepositoryType
   */
  readonly repositoryType?: string;

  /**
   * @schema TranslateParallelDataDataLocation#Location
   */
  readonly location?: string;

}

/**
 * Converts an object of type 'TranslateParallelDataDataLocation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TranslateParallelDataDataLocation(obj: TranslateParallelDataDataLocation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RepositoryType': obj.repositoryType,
    'Location': obj.location,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TranslateTerminologyProperties
 */
export interface TranslateTerminologyProperties {
  /**
   * @schema TranslateTerminologyProperties#Name
   */
  readonly name?: string;

  /**
   * @schema TranslateTerminologyProperties#Description
   */
  readonly description?: string;

  /**
   * @schema TranslateTerminologyProperties#Arn
   */
  readonly arn?: string;

  /**
   * @schema TranslateTerminologyProperties#SourceLanguageCode
   */
  readonly sourceLanguageCode?: string;

  /**
   * @schema TranslateTerminologyProperties#TargetLanguageCodes
   */
  readonly targetLanguageCodes?: string[];

  /**
   * @schema TranslateTerminologyProperties#EncryptionKey
   */
  readonly encryptionKey?: TranslateEncryptionKey;

  /**
   * @schema TranslateTerminologyProperties#SizeBytes
   */
  readonly sizeBytes?: number;

  /**
   * @schema TranslateTerminologyProperties#TermCount
   */
  readonly termCount?: number;

  /**
   * @schema TranslateTerminologyProperties#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema TranslateTerminologyProperties#LastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

}

/**
 * Converts an object of type 'TranslateTerminologyProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TranslateTerminologyProperties(obj: TranslateTerminologyProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Description': obj.description,
    'Arn': obj.arn,
    'SourceLanguageCode': obj.sourceLanguageCode,
    'TargetLanguageCodes': obj.targetLanguageCodes?.map(y => y),
    'EncryptionKey': toJson_TranslateEncryptionKey(obj.encryptionKey),
    'SizeBytes': obj.sizeBytes,
    'TermCount': obj.termCount,
    'CreatedAt': obj.createdAt,
    'LastUpdatedAt': obj.lastUpdatedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TranslateTerminologyDataLocation
 */
export interface TranslateTerminologyDataLocation {
  /**
   * @schema TranslateTerminologyDataLocation#RepositoryType
   */
  readonly repositoryType?: string;

  /**
   * @schema TranslateTerminologyDataLocation#Location
   */
  readonly location?: string;

}

/**
 * Converts an object of type 'TranslateTerminologyDataLocation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TranslateTerminologyDataLocation(obj: TranslateTerminologyDataLocation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RepositoryType': obj.repositoryType,
    'Location': obj.location,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TranslateTerminologyData
 */
export interface TranslateTerminologyData {
  /**
   * @schema TranslateTerminologyData#File
   */
  readonly file?: any;

  /**
   * @schema TranslateTerminologyData#Format
   */
  readonly format?: string;

}

/**
 * Converts an object of type 'TranslateTerminologyData' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TranslateTerminologyData(obj: TranslateTerminologyData | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'File': obj.file,
    'Format': obj.format,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TranslateTextTranslationJobFilter
 */
export interface TranslateTextTranslationJobFilter {
  /**
   * @schema TranslateTextTranslationJobFilter#JobName
   */
  readonly jobName?: string;

  /**
   * @schema TranslateTextTranslationJobFilter#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema TranslateTextTranslationJobFilter#SubmittedBeforeTime
   */
  readonly submittedBeforeTime?: string;

  /**
   * @schema TranslateTextTranslationJobFilter#SubmittedAfterTime
   */
  readonly submittedAfterTime?: string;

}

/**
 * Converts an object of type 'TranslateTextTranslationJobFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TranslateTextTranslationJobFilter(obj: TranslateTextTranslationJobFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobName': obj.jobName,
    'JobStatus': obj.jobStatus,
    'SubmittedBeforeTime': obj.submittedBeforeTime,
    'SubmittedAfterTime': obj.submittedAfterTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TranslateInputDataConfig
 */
export interface TranslateInputDataConfig {
  /**
   * @schema TranslateInputDataConfig#S3Uri
   */
  readonly s3Uri?: string;

  /**
   * @schema TranslateInputDataConfig#ContentType
   */
  readonly contentType?: string;

}

/**
 * Converts an object of type 'TranslateInputDataConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TranslateInputDataConfig(obj: TranslateInputDataConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S3Uri': obj.s3Uri,
    'ContentType': obj.contentType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TranslateOutputDataConfig
 */
export interface TranslateOutputDataConfig {
  /**
   * @schema TranslateOutputDataConfig#S3Uri
   */
  readonly s3Uri?: string;

}

/**
 * Converts an object of type 'TranslateOutputDataConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TranslateOutputDataConfig(obj: TranslateOutputDataConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S3Uri': obj.s3Uri,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TranslateAppliedTerminology
 */
export interface TranslateAppliedTerminology {
  /**
   * @schema TranslateAppliedTerminology#Name
   */
  readonly name?: string;

  /**
   * @schema TranslateAppliedTerminology#Terms
   */
  readonly terms?: TranslateTerm[];

}

/**
 * Converts an object of type 'TranslateAppliedTerminology' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TranslateAppliedTerminology(obj: TranslateAppliedTerminology | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Terms': obj.terms?.map(y => toJson_TranslateTerm(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TranslateJobDetails
 */
export interface TranslateJobDetails {
  /**
   * @schema TranslateJobDetails#TranslatedDocumentsCount
   */
  readonly translatedDocumentsCount?: number;

  /**
   * @schema TranslateJobDetails#DocumentsWithErrorsCount
   */
  readonly documentsWithErrorsCount?: number;

  /**
   * @schema TranslateJobDetails#InputDocumentsCount
   */
  readonly inputDocumentsCount?: number;

}

/**
 * Converts an object of type 'TranslateJobDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TranslateJobDetails(obj: TranslateJobDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TranslatedDocumentsCount': obj.translatedDocumentsCount,
    'DocumentsWithErrorsCount': obj.documentsWithErrorsCount,
    'InputDocumentsCount': obj.inputDocumentsCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TranslateTerm
 */
export interface TranslateTerm {
  /**
   * @schema TranslateTerm#SourceText
   */
  readonly sourceText?: string;

  /**
   * @schema TranslateTerm#TargetText
   */
  readonly targetText?: string;

}

/**
 * Converts an object of type 'TranslateTerm' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TranslateTerm(obj: TranslateTerm | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceText': obj.sourceText,
    'TargetText': obj.targetText,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
