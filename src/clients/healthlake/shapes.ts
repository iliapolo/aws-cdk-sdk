/**
 * @schema HealthLakeCreateFhirDatastoreRequest
 */
export interface HealthLakeCreateFhirDatastoreRequest {
  /**
   * @schema HealthLakeCreateFhirDatastoreRequest#DatastoreName
   */
  readonly datastoreName?: string;

  /**
   * @schema HealthLakeCreateFhirDatastoreRequest#DatastoreTypeVersion
   */
  readonly datastoreTypeVersion?: string;

  /**
   * @schema HealthLakeCreateFhirDatastoreRequest#SseConfiguration
   */
  readonly sseConfiguration?: HealthLakeSseConfiguration;

  /**
   * @schema HealthLakeCreateFhirDatastoreRequest#PreloadDataConfig
   */
  readonly preloadDataConfig?: HealthLakePreloadDataConfig;

  /**
   * @schema HealthLakeCreateFhirDatastoreRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema HealthLakeCreateFhirDatastoreRequest#Tags
   */
  readonly tags?: HealthLakeTag[];

}

/**
 * Converts an object of type 'HealthLakeCreateFhirDatastoreRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthLakeCreateFhirDatastoreRequest(obj: HealthLakeCreateFhirDatastoreRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DatastoreName': obj.datastoreName,
    'DatastoreTypeVersion': obj.datastoreTypeVersion,
    'SseConfiguration': toJson_HealthLakeSseConfiguration(obj.sseConfiguration),
    'PreloadDataConfig': toJson_HealthLakePreloadDataConfig(obj.preloadDataConfig),
    'ClientToken': obj.clientToken,
    'Tags': obj.tags?.map(y => toJson_HealthLakeTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthLakeCreateFhirDatastoreResponse
 */
export interface HealthLakeCreateFhirDatastoreResponse {
  /**
   * @schema HealthLakeCreateFhirDatastoreResponse#DatastoreId
   */
  readonly datastoreId?: string;

  /**
   * @schema HealthLakeCreateFhirDatastoreResponse#DatastoreArn
   */
  readonly datastoreArn?: string;

  /**
   * @schema HealthLakeCreateFhirDatastoreResponse#DatastoreStatus
   */
  readonly datastoreStatus?: string;

  /**
   * @schema HealthLakeCreateFhirDatastoreResponse#DatastoreEndpoint
   */
  readonly datastoreEndpoint?: string;

}

/**
 * Converts an object of type 'HealthLakeCreateFhirDatastoreResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthLakeCreateFhirDatastoreResponse(obj: HealthLakeCreateFhirDatastoreResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DatastoreId': obj.datastoreId,
    'DatastoreArn': obj.datastoreArn,
    'DatastoreStatus': obj.datastoreStatus,
    'DatastoreEndpoint': obj.datastoreEndpoint,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthLakeDeleteFhirDatastoreRequest
 */
export interface HealthLakeDeleteFhirDatastoreRequest {
  /**
   * @schema HealthLakeDeleteFhirDatastoreRequest#DatastoreId
   */
  readonly datastoreId?: string;

}

/**
 * Converts an object of type 'HealthLakeDeleteFhirDatastoreRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthLakeDeleteFhirDatastoreRequest(obj: HealthLakeDeleteFhirDatastoreRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DatastoreId': obj.datastoreId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthLakeDeleteFhirDatastoreResponse
 */
export interface HealthLakeDeleteFhirDatastoreResponse {
  /**
   * @schema HealthLakeDeleteFhirDatastoreResponse#DatastoreId
   */
  readonly datastoreId?: string;

  /**
   * @schema HealthLakeDeleteFhirDatastoreResponse#DatastoreArn
   */
  readonly datastoreArn?: string;

  /**
   * @schema HealthLakeDeleteFhirDatastoreResponse#DatastoreStatus
   */
  readonly datastoreStatus?: string;

  /**
   * @schema HealthLakeDeleteFhirDatastoreResponse#DatastoreEndpoint
   */
  readonly datastoreEndpoint?: string;

}

/**
 * Converts an object of type 'HealthLakeDeleteFhirDatastoreResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthLakeDeleteFhirDatastoreResponse(obj: HealthLakeDeleteFhirDatastoreResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DatastoreId': obj.datastoreId,
    'DatastoreArn': obj.datastoreArn,
    'DatastoreStatus': obj.datastoreStatus,
    'DatastoreEndpoint': obj.datastoreEndpoint,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthLakeDescribeFhirDatastoreRequest
 */
export interface HealthLakeDescribeFhirDatastoreRequest {
  /**
   * @schema HealthLakeDescribeFhirDatastoreRequest#DatastoreId
   */
  readonly datastoreId?: string;

}

/**
 * Converts an object of type 'HealthLakeDescribeFhirDatastoreRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthLakeDescribeFhirDatastoreRequest(obj: HealthLakeDescribeFhirDatastoreRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DatastoreId': obj.datastoreId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthLakeDescribeFhirDatastoreResponse
 */
export interface HealthLakeDescribeFhirDatastoreResponse {
  /**
   * @schema HealthLakeDescribeFhirDatastoreResponse#DatastoreProperties
   */
  readonly datastoreProperties?: HealthLakeDatastoreProperties;

}

/**
 * Converts an object of type 'HealthLakeDescribeFhirDatastoreResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthLakeDescribeFhirDatastoreResponse(obj: HealthLakeDescribeFhirDatastoreResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DatastoreProperties': toJson_HealthLakeDatastoreProperties(obj.datastoreProperties),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthLakeDescribeFhirExportJobRequest
 */
export interface HealthLakeDescribeFhirExportJobRequest {
  /**
   * @schema HealthLakeDescribeFhirExportJobRequest#DatastoreId
   */
  readonly datastoreId?: string;

  /**
   * @schema HealthLakeDescribeFhirExportJobRequest#JobId
   */
  readonly jobId?: string;

}

/**
 * Converts an object of type 'HealthLakeDescribeFhirExportJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthLakeDescribeFhirExportJobRequest(obj: HealthLakeDescribeFhirExportJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DatastoreId': obj.datastoreId,
    'JobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthLakeDescribeFhirExportJobResponse
 */
export interface HealthLakeDescribeFhirExportJobResponse {
  /**
   * @schema HealthLakeDescribeFhirExportJobResponse#ExportJobProperties
   */
  readonly exportJobProperties?: HealthLakeExportJobProperties;

}

/**
 * Converts an object of type 'HealthLakeDescribeFhirExportJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthLakeDescribeFhirExportJobResponse(obj: HealthLakeDescribeFhirExportJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ExportJobProperties': toJson_HealthLakeExportJobProperties(obj.exportJobProperties),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthLakeDescribeFhirImportJobRequest
 */
export interface HealthLakeDescribeFhirImportJobRequest {
  /**
   * @schema HealthLakeDescribeFhirImportJobRequest#DatastoreId
   */
  readonly datastoreId?: string;

  /**
   * @schema HealthLakeDescribeFhirImportJobRequest#JobId
   */
  readonly jobId?: string;

}

/**
 * Converts an object of type 'HealthLakeDescribeFhirImportJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthLakeDescribeFhirImportJobRequest(obj: HealthLakeDescribeFhirImportJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DatastoreId': obj.datastoreId,
    'JobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthLakeDescribeFhirImportJobResponse
 */
export interface HealthLakeDescribeFhirImportJobResponse {
  /**
   * @schema HealthLakeDescribeFhirImportJobResponse#ImportJobProperties
   */
  readonly importJobProperties?: HealthLakeImportJobProperties;

}

/**
 * Converts an object of type 'HealthLakeDescribeFhirImportJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthLakeDescribeFhirImportJobResponse(obj: HealthLakeDescribeFhirImportJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ImportJobProperties': toJson_HealthLakeImportJobProperties(obj.importJobProperties),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthLakeListFhirDatastoresRequest
 */
export interface HealthLakeListFhirDatastoresRequest {
  /**
   * @schema HealthLakeListFhirDatastoresRequest#Filter
   */
  readonly filter?: HealthLakeDatastoreFilter;

  /**
   * @schema HealthLakeListFhirDatastoresRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema HealthLakeListFhirDatastoresRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'HealthLakeListFhirDatastoresRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthLakeListFhirDatastoresRequest(obj: HealthLakeListFhirDatastoresRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Filter': toJson_HealthLakeDatastoreFilter(obj.filter),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthLakeListFhirDatastoresResponse
 */
export interface HealthLakeListFhirDatastoresResponse {
  /**
   * @schema HealthLakeListFhirDatastoresResponse#DatastorePropertiesList
   */
  readonly datastorePropertiesList?: HealthLakeDatastoreProperties[];

  /**
   * @schema HealthLakeListFhirDatastoresResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'HealthLakeListFhirDatastoresResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthLakeListFhirDatastoresResponse(obj: HealthLakeListFhirDatastoresResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DatastorePropertiesList': obj.datastorePropertiesList?.map(y => toJson_HealthLakeDatastoreProperties(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthLakeListFhirExportJobsRequest
 */
export interface HealthLakeListFhirExportJobsRequest {
  /**
   * @schema HealthLakeListFhirExportJobsRequest#DatastoreId
   */
  readonly datastoreId?: string;

  /**
   * @schema HealthLakeListFhirExportJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema HealthLakeListFhirExportJobsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema HealthLakeListFhirExportJobsRequest#JobName
   */
  readonly jobName?: string;

  /**
   * @schema HealthLakeListFhirExportJobsRequest#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema HealthLakeListFhirExportJobsRequest#SubmittedBefore
   */
  readonly submittedBefore?: string;

  /**
   * @schema HealthLakeListFhirExportJobsRequest#SubmittedAfter
   */
  readonly submittedAfter?: string;

}

/**
 * Converts an object of type 'HealthLakeListFhirExportJobsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthLakeListFhirExportJobsRequest(obj: HealthLakeListFhirExportJobsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DatastoreId': obj.datastoreId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'JobName': obj.jobName,
    'JobStatus': obj.jobStatus,
    'SubmittedBefore': obj.submittedBefore,
    'SubmittedAfter': obj.submittedAfter,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthLakeListFhirExportJobsResponse
 */
export interface HealthLakeListFhirExportJobsResponse {
  /**
   * @schema HealthLakeListFhirExportJobsResponse#ExportJobPropertiesList
   */
  readonly exportJobPropertiesList?: HealthLakeExportJobProperties[];

  /**
   * @schema HealthLakeListFhirExportJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'HealthLakeListFhirExportJobsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthLakeListFhirExportJobsResponse(obj: HealthLakeListFhirExportJobsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ExportJobPropertiesList': obj.exportJobPropertiesList?.map(y => toJson_HealthLakeExportJobProperties(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthLakeListFhirImportJobsRequest
 */
export interface HealthLakeListFhirImportJobsRequest {
  /**
   * @schema HealthLakeListFhirImportJobsRequest#DatastoreId
   */
  readonly datastoreId?: string;

  /**
   * @schema HealthLakeListFhirImportJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema HealthLakeListFhirImportJobsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema HealthLakeListFhirImportJobsRequest#JobName
   */
  readonly jobName?: string;

  /**
   * @schema HealthLakeListFhirImportJobsRequest#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema HealthLakeListFhirImportJobsRequest#SubmittedBefore
   */
  readonly submittedBefore?: string;

  /**
   * @schema HealthLakeListFhirImportJobsRequest#SubmittedAfter
   */
  readonly submittedAfter?: string;

}

/**
 * Converts an object of type 'HealthLakeListFhirImportJobsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthLakeListFhirImportJobsRequest(obj: HealthLakeListFhirImportJobsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DatastoreId': obj.datastoreId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'JobName': obj.jobName,
    'JobStatus': obj.jobStatus,
    'SubmittedBefore': obj.submittedBefore,
    'SubmittedAfter': obj.submittedAfter,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthLakeListFhirImportJobsResponse
 */
export interface HealthLakeListFhirImportJobsResponse {
  /**
   * @schema HealthLakeListFhirImportJobsResponse#ImportJobPropertiesList
   */
  readonly importJobPropertiesList?: HealthLakeImportJobProperties[];

  /**
   * @schema HealthLakeListFhirImportJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'HealthLakeListFhirImportJobsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthLakeListFhirImportJobsResponse(obj: HealthLakeListFhirImportJobsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ImportJobPropertiesList': obj.importJobPropertiesList?.map(y => toJson_HealthLakeImportJobProperties(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthLakeListTagsForResourceRequest
 */
export interface HealthLakeListTagsForResourceRequest {
  /**
   * @schema HealthLakeListTagsForResourceRequest#ResourceARN
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'HealthLakeListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthLakeListTagsForResourceRequest(obj: HealthLakeListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthLakeListTagsForResourceResponse
 */
export interface HealthLakeListTagsForResourceResponse {
  /**
   * @schema HealthLakeListTagsForResourceResponse#Tags
   */
  readonly tags?: HealthLakeTag[];

}

/**
 * Converts an object of type 'HealthLakeListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthLakeListTagsForResourceResponse(obj: HealthLakeListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': obj.tags?.map(y => toJson_HealthLakeTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthLakeStartFhirExportJobRequest
 */
export interface HealthLakeStartFhirExportJobRequest {
  /**
   * @schema HealthLakeStartFhirExportJobRequest#JobName
   */
  readonly jobName?: string;

  /**
   * @schema HealthLakeStartFhirExportJobRequest#OutputDataConfig
   */
  readonly outputDataConfig?: HealthLakeOutputDataConfig;

  /**
   * @schema HealthLakeStartFhirExportJobRequest#DatastoreId
   */
  readonly datastoreId?: string;

  /**
   * @schema HealthLakeStartFhirExportJobRequest#DataAccessRoleArn
   */
  readonly dataAccessRoleArn?: string;

  /**
   * @schema HealthLakeStartFhirExportJobRequest#ClientToken
   */
  readonly clientToken?: string;

}

/**
 * Converts an object of type 'HealthLakeStartFhirExportJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthLakeStartFhirExportJobRequest(obj: HealthLakeStartFhirExportJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobName': obj.jobName,
    'OutputDataConfig': toJson_HealthLakeOutputDataConfig(obj.outputDataConfig),
    'DatastoreId': obj.datastoreId,
    'DataAccessRoleArn': obj.dataAccessRoleArn,
    'ClientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthLakeStartFhirExportJobResponse
 */
export interface HealthLakeStartFhirExportJobResponse {
  /**
   * @schema HealthLakeStartFhirExportJobResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema HealthLakeStartFhirExportJobResponse#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema HealthLakeStartFhirExportJobResponse#DatastoreId
   */
  readonly datastoreId?: string;

}

/**
 * Converts an object of type 'HealthLakeStartFhirExportJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthLakeStartFhirExportJobResponse(obj: HealthLakeStartFhirExportJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
    'JobStatus': obj.jobStatus,
    'DatastoreId': obj.datastoreId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthLakeStartFhirImportJobRequest
 */
export interface HealthLakeStartFhirImportJobRequest {
  /**
   * @schema HealthLakeStartFhirImportJobRequest#JobName
   */
  readonly jobName?: string;

  /**
   * @schema HealthLakeStartFhirImportJobRequest#InputDataConfig
   */
  readonly inputDataConfig?: HealthLakeInputDataConfig;

  /**
   * @schema HealthLakeStartFhirImportJobRequest#JobOutputDataConfig
   */
  readonly jobOutputDataConfig?: HealthLakeOutputDataConfig;

  /**
   * @schema HealthLakeStartFhirImportJobRequest#DatastoreId
   */
  readonly datastoreId?: string;

  /**
   * @schema HealthLakeStartFhirImportJobRequest#DataAccessRoleArn
   */
  readonly dataAccessRoleArn?: string;

  /**
   * @schema HealthLakeStartFhirImportJobRequest#ClientToken
   */
  readonly clientToken?: string;

}

/**
 * Converts an object of type 'HealthLakeStartFhirImportJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthLakeStartFhirImportJobRequest(obj: HealthLakeStartFhirImportJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobName': obj.jobName,
    'InputDataConfig': toJson_HealthLakeInputDataConfig(obj.inputDataConfig),
    'JobOutputDataConfig': toJson_HealthLakeOutputDataConfig(obj.jobOutputDataConfig),
    'DatastoreId': obj.datastoreId,
    'DataAccessRoleArn': obj.dataAccessRoleArn,
    'ClientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthLakeStartFhirImportJobResponse
 */
export interface HealthLakeStartFhirImportJobResponse {
  /**
   * @schema HealthLakeStartFhirImportJobResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema HealthLakeStartFhirImportJobResponse#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema HealthLakeStartFhirImportJobResponse#DatastoreId
   */
  readonly datastoreId?: string;

}

/**
 * Converts an object of type 'HealthLakeStartFhirImportJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthLakeStartFhirImportJobResponse(obj: HealthLakeStartFhirImportJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
    'JobStatus': obj.jobStatus,
    'DatastoreId': obj.datastoreId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthLakeTagResourceRequest
 */
export interface HealthLakeTagResourceRequest {
  /**
   * @schema HealthLakeTagResourceRequest#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema HealthLakeTagResourceRequest#Tags
   */
  readonly tags?: HealthLakeTag[];

}

/**
 * Converts an object of type 'HealthLakeTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthLakeTagResourceRequest(obj: HealthLakeTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
    'Tags': obj.tags?.map(y => toJson_HealthLakeTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthLakeTagResourceResponse
 */
export interface HealthLakeTagResourceResponse {
}

/**
 * Converts an object of type 'HealthLakeTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthLakeTagResourceResponse(obj: HealthLakeTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthLakeUntagResourceRequest
 */
export interface HealthLakeUntagResourceRequest {
  /**
   * @schema HealthLakeUntagResourceRequest#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema HealthLakeUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'HealthLakeUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthLakeUntagResourceRequest(obj: HealthLakeUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthLakeUntagResourceResponse
 */
export interface HealthLakeUntagResourceResponse {
}

/**
 * Converts an object of type 'HealthLakeUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthLakeUntagResourceResponse(obj: HealthLakeUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthLakeSseConfiguration
 */
export interface HealthLakeSseConfiguration {
  /**
   * @schema HealthLakeSseConfiguration#KmsEncryptionConfig
   */
  readonly kmsEncryptionConfig?: HealthLakeKmsEncryptionConfig;

}

/**
 * Converts an object of type 'HealthLakeSseConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthLakeSseConfiguration(obj: HealthLakeSseConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KmsEncryptionConfig': toJson_HealthLakeKmsEncryptionConfig(obj.kmsEncryptionConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthLakePreloadDataConfig
 */
export interface HealthLakePreloadDataConfig {
  /**
   * @schema HealthLakePreloadDataConfig#PreloadDataType
   */
  readonly preloadDataType?: string;

}

/**
 * Converts an object of type 'HealthLakePreloadDataConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthLakePreloadDataConfig(obj: HealthLakePreloadDataConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PreloadDataType': obj.preloadDataType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthLakeTag
 */
export interface HealthLakeTag {
  /**
   * @schema HealthLakeTag#Key
   */
  readonly key?: string;

  /**
   * @schema HealthLakeTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'HealthLakeTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthLakeTag(obj: HealthLakeTag | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthLakeDatastoreProperties
 */
export interface HealthLakeDatastoreProperties {
  /**
   * @schema HealthLakeDatastoreProperties#DatastoreId
   */
  readonly datastoreId?: string;

  /**
   * @schema HealthLakeDatastoreProperties#DatastoreArn
   */
  readonly datastoreArn?: string;

  /**
   * @schema HealthLakeDatastoreProperties#DatastoreName
   */
  readonly datastoreName?: string;

  /**
   * @schema HealthLakeDatastoreProperties#DatastoreStatus
   */
  readonly datastoreStatus?: string;

  /**
   * @schema HealthLakeDatastoreProperties#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema HealthLakeDatastoreProperties#DatastoreTypeVersion
   */
  readonly datastoreTypeVersion?: string;

  /**
   * @schema HealthLakeDatastoreProperties#DatastoreEndpoint
   */
  readonly datastoreEndpoint?: string;

  /**
   * @schema HealthLakeDatastoreProperties#SseConfiguration
   */
  readonly sseConfiguration?: HealthLakeSseConfiguration;

  /**
   * @schema HealthLakeDatastoreProperties#PreloadDataConfig
   */
  readonly preloadDataConfig?: HealthLakePreloadDataConfig;

}

/**
 * Converts an object of type 'HealthLakeDatastoreProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthLakeDatastoreProperties(obj: HealthLakeDatastoreProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DatastoreId': obj.datastoreId,
    'DatastoreArn': obj.datastoreArn,
    'DatastoreName': obj.datastoreName,
    'DatastoreStatus': obj.datastoreStatus,
    'CreatedAt': obj.createdAt,
    'DatastoreTypeVersion': obj.datastoreTypeVersion,
    'DatastoreEndpoint': obj.datastoreEndpoint,
    'SseConfiguration': toJson_HealthLakeSseConfiguration(obj.sseConfiguration),
    'PreloadDataConfig': toJson_HealthLakePreloadDataConfig(obj.preloadDataConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthLakeExportJobProperties
 */
export interface HealthLakeExportJobProperties {
  /**
   * @schema HealthLakeExportJobProperties#JobId
   */
  readonly jobId?: string;

  /**
   * @schema HealthLakeExportJobProperties#JobName
   */
  readonly jobName?: string;

  /**
   * @schema HealthLakeExportJobProperties#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema HealthLakeExportJobProperties#SubmitTime
   */
  readonly submitTime?: string;

  /**
   * @schema HealthLakeExportJobProperties#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema HealthLakeExportJobProperties#DatastoreId
   */
  readonly datastoreId?: string;

  /**
   * @schema HealthLakeExportJobProperties#OutputDataConfig
   */
  readonly outputDataConfig?: HealthLakeOutputDataConfig;

  /**
   * @schema HealthLakeExportJobProperties#DataAccessRoleArn
   */
  readonly dataAccessRoleArn?: string;

  /**
   * @schema HealthLakeExportJobProperties#Message
   */
  readonly message?: string;

}

/**
 * Converts an object of type 'HealthLakeExportJobProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthLakeExportJobProperties(obj: HealthLakeExportJobProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
    'JobName': obj.jobName,
    'JobStatus': obj.jobStatus,
    'SubmitTime': obj.submitTime,
    'EndTime': obj.endTime,
    'DatastoreId': obj.datastoreId,
    'OutputDataConfig': toJson_HealthLakeOutputDataConfig(obj.outputDataConfig),
    'DataAccessRoleArn': obj.dataAccessRoleArn,
    'Message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthLakeImportJobProperties
 */
export interface HealthLakeImportJobProperties {
  /**
   * @schema HealthLakeImportJobProperties#JobId
   */
  readonly jobId?: string;

  /**
   * @schema HealthLakeImportJobProperties#JobName
   */
  readonly jobName?: string;

  /**
   * @schema HealthLakeImportJobProperties#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema HealthLakeImportJobProperties#SubmitTime
   */
  readonly submitTime?: string;

  /**
   * @schema HealthLakeImportJobProperties#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema HealthLakeImportJobProperties#DatastoreId
   */
  readonly datastoreId?: string;

  /**
   * @schema HealthLakeImportJobProperties#InputDataConfig
   */
  readonly inputDataConfig?: HealthLakeInputDataConfig;

  /**
   * @schema HealthLakeImportJobProperties#JobOutputDataConfig
   */
  readonly jobOutputDataConfig?: HealthLakeOutputDataConfig;

  /**
   * @schema HealthLakeImportJobProperties#DataAccessRoleArn
   */
  readonly dataAccessRoleArn?: string;

  /**
   * @schema HealthLakeImportJobProperties#Message
   */
  readonly message?: string;

}

/**
 * Converts an object of type 'HealthLakeImportJobProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthLakeImportJobProperties(obj: HealthLakeImportJobProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
    'JobName': obj.jobName,
    'JobStatus': obj.jobStatus,
    'SubmitTime': obj.submitTime,
    'EndTime': obj.endTime,
    'DatastoreId': obj.datastoreId,
    'InputDataConfig': toJson_HealthLakeInputDataConfig(obj.inputDataConfig),
    'JobOutputDataConfig': toJson_HealthLakeOutputDataConfig(obj.jobOutputDataConfig),
    'DataAccessRoleArn': obj.dataAccessRoleArn,
    'Message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthLakeDatastoreFilter
 */
export interface HealthLakeDatastoreFilter {
  /**
   * @schema HealthLakeDatastoreFilter#DatastoreName
   */
  readonly datastoreName?: string;

  /**
   * @schema HealthLakeDatastoreFilter#DatastoreStatus
   */
  readonly datastoreStatus?: string;

  /**
   * @schema HealthLakeDatastoreFilter#CreatedBefore
   */
  readonly createdBefore?: string;

  /**
   * @schema HealthLakeDatastoreFilter#CreatedAfter
   */
  readonly createdAfter?: string;

}

/**
 * Converts an object of type 'HealthLakeDatastoreFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthLakeDatastoreFilter(obj: HealthLakeDatastoreFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DatastoreName': obj.datastoreName,
    'DatastoreStatus': obj.datastoreStatus,
    'CreatedBefore': obj.createdBefore,
    'CreatedAfter': obj.createdAfter,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthLakeOutputDataConfig
 */
export interface HealthLakeOutputDataConfig {
  /**
   * @schema HealthLakeOutputDataConfig#S3Configuration
   */
  readonly s3Configuration?: HealthLakeS3Configuration;

}

/**
 * Converts an object of type 'HealthLakeOutputDataConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthLakeOutputDataConfig(obj: HealthLakeOutputDataConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S3Configuration': toJson_HealthLakeS3Configuration(obj.s3Configuration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthLakeInputDataConfig
 */
export interface HealthLakeInputDataConfig {
  /**
   * @schema HealthLakeInputDataConfig#S3Uri
   */
  readonly s3Uri?: string;

}

/**
 * Converts an object of type 'HealthLakeInputDataConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthLakeInputDataConfig(obj: HealthLakeInputDataConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S3Uri': obj.s3Uri,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthLakeKmsEncryptionConfig
 */
export interface HealthLakeKmsEncryptionConfig {
  /**
   * @schema HealthLakeKmsEncryptionConfig#CmkType
   */
  readonly cmkType?: string;

  /**
   * @schema HealthLakeKmsEncryptionConfig#KmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * Converts an object of type 'HealthLakeKmsEncryptionConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthLakeKmsEncryptionConfig(obj: HealthLakeKmsEncryptionConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CmkType': obj.cmkType,
    'KmsKeyId': obj.kmsKeyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HealthLakeS3Configuration
 */
export interface HealthLakeS3Configuration {
  /**
   * @schema HealthLakeS3Configuration#S3Uri
   */
  readonly s3Uri?: string;

  /**
   * @schema HealthLakeS3Configuration#KmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * Converts an object of type 'HealthLakeS3Configuration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthLakeS3Configuration(obj: HealthLakeS3Configuration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S3Uri': obj.s3Uri,
    'KmsKeyId': obj.kmsKeyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
