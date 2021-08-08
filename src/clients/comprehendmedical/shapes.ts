/**
 * @schema ComprehendMedicalDescribeEntitiesDetectionV2JobRequest
 */
export interface ComprehendMedicalDescribeEntitiesDetectionV2JobRequest {
  /**
   * @schema ComprehendMedicalDescribeEntitiesDetectionV2JobRequest#JobId
   */
  readonly jobId?: string;

}

/**
 * Converts an object of type 'ComprehendMedicalDescribeEntitiesDetectionV2JobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendMedicalDescribeEntitiesDetectionV2JobRequest(obj: ComprehendMedicalDescribeEntitiesDetectionV2JobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendMedicalDescribeEntitiesDetectionV2JobResponse
 */
export interface ComprehendMedicalDescribeEntitiesDetectionV2JobResponse {
  /**
   * @schema ComprehendMedicalDescribeEntitiesDetectionV2JobResponse#ComprehendMedicalAsyncJobProperties
   */
  readonly comprehendMedicalAsyncJobProperties?: ComprehendMedicalComprehendMedicalAsyncJobProperties;

}

/**
 * Converts an object of type 'ComprehendMedicalDescribeEntitiesDetectionV2JobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendMedicalDescribeEntitiesDetectionV2JobResponse(obj: ComprehendMedicalDescribeEntitiesDetectionV2JobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ComprehendMedicalAsyncJobProperties': toJson_ComprehendMedicalComprehendMedicalAsyncJobProperties(obj.comprehendMedicalAsyncJobProperties),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendMedicalDescribeIcd10CmInferenceJobRequest
 */
export interface ComprehendMedicalDescribeIcd10CmInferenceJobRequest {
  /**
   * @schema ComprehendMedicalDescribeIcd10CmInferenceJobRequest#JobId
   */
  readonly jobId?: string;

}

/**
 * Converts an object of type 'ComprehendMedicalDescribeIcd10CmInferenceJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendMedicalDescribeIcd10CmInferenceJobRequest(obj: ComprehendMedicalDescribeIcd10CmInferenceJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendMedicalDescribeIcd10CmInferenceJobResponse
 */
export interface ComprehendMedicalDescribeIcd10CmInferenceJobResponse {
  /**
   * @schema ComprehendMedicalDescribeIcd10CmInferenceJobResponse#ComprehendMedicalAsyncJobProperties
   */
  readonly comprehendMedicalAsyncJobProperties?: ComprehendMedicalComprehendMedicalAsyncJobProperties;

}

/**
 * Converts an object of type 'ComprehendMedicalDescribeIcd10CmInferenceJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendMedicalDescribeIcd10CmInferenceJobResponse(obj: ComprehendMedicalDescribeIcd10CmInferenceJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ComprehendMedicalAsyncJobProperties': toJson_ComprehendMedicalComprehendMedicalAsyncJobProperties(obj.comprehendMedicalAsyncJobProperties),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendMedicalDescribePhiDetectionJobRequest
 */
export interface ComprehendMedicalDescribePhiDetectionJobRequest {
  /**
   * @schema ComprehendMedicalDescribePhiDetectionJobRequest#JobId
   */
  readonly jobId?: string;

}

/**
 * Converts an object of type 'ComprehendMedicalDescribePhiDetectionJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendMedicalDescribePhiDetectionJobRequest(obj: ComprehendMedicalDescribePhiDetectionJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendMedicalDescribePhiDetectionJobResponse
 */
export interface ComprehendMedicalDescribePhiDetectionJobResponse {
  /**
   * @schema ComprehendMedicalDescribePhiDetectionJobResponse#ComprehendMedicalAsyncJobProperties
   */
  readonly comprehendMedicalAsyncJobProperties?: ComprehendMedicalComprehendMedicalAsyncJobProperties;

}

/**
 * Converts an object of type 'ComprehendMedicalDescribePhiDetectionJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendMedicalDescribePhiDetectionJobResponse(obj: ComprehendMedicalDescribePhiDetectionJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ComprehendMedicalAsyncJobProperties': toJson_ComprehendMedicalComprehendMedicalAsyncJobProperties(obj.comprehendMedicalAsyncJobProperties),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendMedicalDescribeRxNormInferenceJobRequest
 */
export interface ComprehendMedicalDescribeRxNormInferenceJobRequest {
  /**
   * @schema ComprehendMedicalDescribeRxNormInferenceJobRequest#JobId
   */
  readonly jobId?: string;

}

/**
 * Converts an object of type 'ComprehendMedicalDescribeRxNormInferenceJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendMedicalDescribeRxNormInferenceJobRequest(obj: ComprehendMedicalDescribeRxNormInferenceJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendMedicalDescribeRxNormInferenceJobResponse
 */
export interface ComprehendMedicalDescribeRxNormInferenceJobResponse {
  /**
   * @schema ComprehendMedicalDescribeRxNormInferenceJobResponse#ComprehendMedicalAsyncJobProperties
   */
  readonly comprehendMedicalAsyncJobProperties?: ComprehendMedicalComprehendMedicalAsyncJobProperties;

}

/**
 * Converts an object of type 'ComprehendMedicalDescribeRxNormInferenceJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendMedicalDescribeRxNormInferenceJobResponse(obj: ComprehendMedicalDescribeRxNormInferenceJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ComprehendMedicalAsyncJobProperties': toJson_ComprehendMedicalComprehendMedicalAsyncJobProperties(obj.comprehendMedicalAsyncJobProperties),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendMedicalDetectEntitiesRequest
 */
export interface ComprehendMedicalDetectEntitiesRequest {
  /**
   * @schema ComprehendMedicalDetectEntitiesRequest#Text
   */
  readonly text?: string;

}

/**
 * Converts an object of type 'ComprehendMedicalDetectEntitiesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendMedicalDetectEntitiesRequest(obj: ComprehendMedicalDetectEntitiesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Text': obj.text,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendMedicalDetectEntitiesResponse
 */
export interface ComprehendMedicalDetectEntitiesResponse {
  /**
   * @schema ComprehendMedicalDetectEntitiesResponse#Entities
   */
  readonly entities?: ComprehendMedicalEntity[];

  /**
   * @schema ComprehendMedicalDetectEntitiesResponse#UnmappedAttributes
   */
  readonly unmappedAttributes?: ComprehendMedicalUnmappedAttribute[];

  /**
   * @schema ComprehendMedicalDetectEntitiesResponse#PaginationToken
   */
  readonly paginationToken?: string;

  /**
   * @schema ComprehendMedicalDetectEntitiesResponse#ModelVersion
   */
  readonly modelVersion?: string;

}

/**
 * Converts an object of type 'ComprehendMedicalDetectEntitiesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendMedicalDetectEntitiesResponse(obj: ComprehendMedicalDetectEntitiesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Entities': obj.entities?.map(y => toJson_ComprehendMedicalEntity(y)),
    'UnmappedAttributes': obj.unmappedAttributes?.map(y => toJson_ComprehendMedicalUnmappedAttribute(y)),
    'PaginationToken': obj.paginationToken,
    'ModelVersion': obj.modelVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendMedicalDetectEntitiesV2Request
 */
export interface ComprehendMedicalDetectEntitiesV2Request {
  /**
   * @schema ComprehendMedicalDetectEntitiesV2Request#Text
   */
  readonly text?: string;

}

/**
 * Converts an object of type 'ComprehendMedicalDetectEntitiesV2Request' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendMedicalDetectEntitiesV2Request(obj: ComprehendMedicalDetectEntitiesV2Request | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Text': obj.text,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendMedicalDetectEntitiesV2Response
 */
export interface ComprehendMedicalDetectEntitiesV2Response {
  /**
   * @schema ComprehendMedicalDetectEntitiesV2Response#Entities
   */
  readonly entities?: ComprehendMedicalEntity[];

  /**
   * @schema ComprehendMedicalDetectEntitiesV2Response#UnmappedAttributes
   */
  readonly unmappedAttributes?: ComprehendMedicalUnmappedAttribute[];

  /**
   * @schema ComprehendMedicalDetectEntitiesV2Response#PaginationToken
   */
  readonly paginationToken?: string;

  /**
   * @schema ComprehendMedicalDetectEntitiesV2Response#ModelVersion
   */
  readonly modelVersion?: string;

}

/**
 * Converts an object of type 'ComprehendMedicalDetectEntitiesV2Response' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendMedicalDetectEntitiesV2Response(obj: ComprehendMedicalDetectEntitiesV2Response | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Entities': obj.entities?.map(y => toJson_ComprehendMedicalEntity(y)),
    'UnmappedAttributes': obj.unmappedAttributes?.map(y => toJson_ComprehendMedicalUnmappedAttribute(y)),
    'PaginationToken': obj.paginationToken,
    'ModelVersion': obj.modelVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendMedicalDetectPhiRequest
 */
export interface ComprehendMedicalDetectPhiRequest {
  /**
   * @schema ComprehendMedicalDetectPhiRequest#Text
   */
  readonly text?: string;

}

/**
 * Converts an object of type 'ComprehendMedicalDetectPhiRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendMedicalDetectPhiRequest(obj: ComprehendMedicalDetectPhiRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Text': obj.text,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendMedicalDetectPhiResponse
 */
export interface ComprehendMedicalDetectPhiResponse {
  /**
   * @schema ComprehendMedicalDetectPhiResponse#Entities
   */
  readonly entities?: ComprehendMedicalEntity[];

  /**
   * @schema ComprehendMedicalDetectPhiResponse#PaginationToken
   */
  readonly paginationToken?: string;

  /**
   * @schema ComprehendMedicalDetectPhiResponse#ModelVersion
   */
  readonly modelVersion?: string;

}

/**
 * Converts an object of type 'ComprehendMedicalDetectPhiResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendMedicalDetectPhiResponse(obj: ComprehendMedicalDetectPhiResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Entities': obj.entities?.map(y => toJson_ComprehendMedicalEntity(y)),
    'PaginationToken': obj.paginationToken,
    'ModelVersion': obj.modelVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendMedicalInferIcd10CmRequest
 */
export interface ComprehendMedicalInferIcd10CmRequest {
  /**
   * @schema ComprehendMedicalInferIcd10CmRequest#Text
   */
  readonly text?: string;

}

/**
 * Converts an object of type 'ComprehendMedicalInferIcd10CmRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendMedicalInferIcd10CmRequest(obj: ComprehendMedicalInferIcd10CmRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Text': obj.text,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendMedicalInferIcd10CmResponse
 */
export interface ComprehendMedicalInferIcd10CmResponse {
  /**
   * @schema ComprehendMedicalInferIcd10CmResponse#Entities
   */
  readonly entities?: ComprehendMedicalIcd10CmEntity[];

  /**
   * @schema ComprehendMedicalInferIcd10CmResponse#PaginationToken
   */
  readonly paginationToken?: string;

  /**
   * @schema ComprehendMedicalInferIcd10CmResponse#ModelVersion
   */
  readonly modelVersion?: string;

}

/**
 * Converts an object of type 'ComprehendMedicalInferIcd10CmResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendMedicalInferIcd10CmResponse(obj: ComprehendMedicalInferIcd10CmResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Entities': obj.entities?.map(y => toJson_ComprehendMedicalIcd10CmEntity(y)),
    'PaginationToken': obj.paginationToken,
    'ModelVersion': obj.modelVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendMedicalInferRxNormRequest
 */
export interface ComprehendMedicalInferRxNormRequest {
  /**
   * @schema ComprehendMedicalInferRxNormRequest#Text
   */
  readonly text?: string;

}

/**
 * Converts an object of type 'ComprehendMedicalInferRxNormRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendMedicalInferRxNormRequest(obj: ComprehendMedicalInferRxNormRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Text': obj.text,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendMedicalInferRxNormResponse
 */
export interface ComprehendMedicalInferRxNormResponse {
  /**
   * @schema ComprehendMedicalInferRxNormResponse#Entities
   */
  readonly entities?: ComprehendMedicalRxNormEntity[];

  /**
   * @schema ComprehendMedicalInferRxNormResponse#PaginationToken
   */
  readonly paginationToken?: string;

  /**
   * @schema ComprehendMedicalInferRxNormResponse#ModelVersion
   */
  readonly modelVersion?: string;

}

/**
 * Converts an object of type 'ComprehendMedicalInferRxNormResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendMedicalInferRxNormResponse(obj: ComprehendMedicalInferRxNormResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Entities': obj.entities?.map(y => toJson_ComprehendMedicalRxNormEntity(y)),
    'PaginationToken': obj.paginationToken,
    'ModelVersion': obj.modelVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendMedicalListEntitiesDetectionV2JobsRequest
 */
export interface ComprehendMedicalListEntitiesDetectionV2JobsRequest {
  /**
   * @schema ComprehendMedicalListEntitiesDetectionV2JobsRequest#Filter
   */
  readonly filter?: ComprehendMedicalComprehendMedicalAsyncJobFilter;

  /**
   * @schema ComprehendMedicalListEntitiesDetectionV2JobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ComprehendMedicalListEntitiesDetectionV2JobsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'ComprehendMedicalListEntitiesDetectionV2JobsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendMedicalListEntitiesDetectionV2JobsRequest(obj: ComprehendMedicalListEntitiesDetectionV2JobsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Filter': toJson_ComprehendMedicalComprehendMedicalAsyncJobFilter(obj.filter),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendMedicalListEntitiesDetectionV2JobsResponse
 */
export interface ComprehendMedicalListEntitiesDetectionV2JobsResponse {
  /**
   * @schema ComprehendMedicalListEntitiesDetectionV2JobsResponse#ComprehendMedicalAsyncJobPropertiesList
   */
  readonly comprehendMedicalAsyncJobPropertiesList?: ComprehendMedicalComprehendMedicalAsyncJobProperties[];

  /**
   * @schema ComprehendMedicalListEntitiesDetectionV2JobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ComprehendMedicalListEntitiesDetectionV2JobsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendMedicalListEntitiesDetectionV2JobsResponse(obj: ComprehendMedicalListEntitiesDetectionV2JobsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ComprehendMedicalAsyncJobPropertiesList': obj.comprehendMedicalAsyncJobPropertiesList?.map(y => toJson_ComprehendMedicalComprehendMedicalAsyncJobProperties(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendMedicalListIcd10CmInferenceJobsRequest
 */
export interface ComprehendMedicalListIcd10CmInferenceJobsRequest {
  /**
   * @schema ComprehendMedicalListIcd10CmInferenceJobsRequest#Filter
   */
  readonly filter?: ComprehendMedicalComprehendMedicalAsyncJobFilter;

  /**
   * @schema ComprehendMedicalListIcd10CmInferenceJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ComprehendMedicalListIcd10CmInferenceJobsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'ComprehendMedicalListIcd10CmInferenceJobsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendMedicalListIcd10CmInferenceJobsRequest(obj: ComprehendMedicalListIcd10CmInferenceJobsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Filter': toJson_ComprehendMedicalComprehendMedicalAsyncJobFilter(obj.filter),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendMedicalListIcd10CmInferenceJobsResponse
 */
export interface ComprehendMedicalListIcd10CmInferenceJobsResponse {
  /**
   * @schema ComprehendMedicalListIcd10CmInferenceJobsResponse#ComprehendMedicalAsyncJobPropertiesList
   */
  readonly comprehendMedicalAsyncJobPropertiesList?: ComprehendMedicalComprehendMedicalAsyncJobProperties[];

  /**
   * @schema ComprehendMedicalListIcd10CmInferenceJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ComprehendMedicalListIcd10CmInferenceJobsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendMedicalListIcd10CmInferenceJobsResponse(obj: ComprehendMedicalListIcd10CmInferenceJobsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ComprehendMedicalAsyncJobPropertiesList': obj.comprehendMedicalAsyncJobPropertiesList?.map(y => toJson_ComprehendMedicalComprehendMedicalAsyncJobProperties(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendMedicalListPhiDetectionJobsRequest
 */
export interface ComprehendMedicalListPhiDetectionJobsRequest {
  /**
   * @schema ComprehendMedicalListPhiDetectionJobsRequest#Filter
   */
  readonly filter?: ComprehendMedicalComprehendMedicalAsyncJobFilter;

  /**
   * @schema ComprehendMedicalListPhiDetectionJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ComprehendMedicalListPhiDetectionJobsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'ComprehendMedicalListPhiDetectionJobsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendMedicalListPhiDetectionJobsRequest(obj: ComprehendMedicalListPhiDetectionJobsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Filter': toJson_ComprehendMedicalComprehendMedicalAsyncJobFilter(obj.filter),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendMedicalListPhiDetectionJobsResponse
 */
export interface ComprehendMedicalListPhiDetectionJobsResponse {
  /**
   * @schema ComprehendMedicalListPhiDetectionJobsResponse#ComprehendMedicalAsyncJobPropertiesList
   */
  readonly comprehendMedicalAsyncJobPropertiesList?: ComprehendMedicalComprehendMedicalAsyncJobProperties[];

  /**
   * @schema ComprehendMedicalListPhiDetectionJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ComprehendMedicalListPhiDetectionJobsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendMedicalListPhiDetectionJobsResponse(obj: ComprehendMedicalListPhiDetectionJobsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ComprehendMedicalAsyncJobPropertiesList': obj.comprehendMedicalAsyncJobPropertiesList?.map(y => toJson_ComprehendMedicalComprehendMedicalAsyncJobProperties(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendMedicalListRxNormInferenceJobsRequest
 */
export interface ComprehendMedicalListRxNormInferenceJobsRequest {
  /**
   * @schema ComprehendMedicalListRxNormInferenceJobsRequest#Filter
   */
  readonly filter?: ComprehendMedicalComprehendMedicalAsyncJobFilter;

  /**
   * @schema ComprehendMedicalListRxNormInferenceJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ComprehendMedicalListRxNormInferenceJobsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'ComprehendMedicalListRxNormInferenceJobsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendMedicalListRxNormInferenceJobsRequest(obj: ComprehendMedicalListRxNormInferenceJobsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Filter': toJson_ComprehendMedicalComprehendMedicalAsyncJobFilter(obj.filter),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendMedicalListRxNormInferenceJobsResponse
 */
export interface ComprehendMedicalListRxNormInferenceJobsResponse {
  /**
   * @schema ComprehendMedicalListRxNormInferenceJobsResponse#ComprehendMedicalAsyncJobPropertiesList
   */
  readonly comprehendMedicalAsyncJobPropertiesList?: ComprehendMedicalComprehendMedicalAsyncJobProperties[];

  /**
   * @schema ComprehendMedicalListRxNormInferenceJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ComprehendMedicalListRxNormInferenceJobsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendMedicalListRxNormInferenceJobsResponse(obj: ComprehendMedicalListRxNormInferenceJobsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ComprehendMedicalAsyncJobPropertiesList': obj.comprehendMedicalAsyncJobPropertiesList?.map(y => toJson_ComprehendMedicalComprehendMedicalAsyncJobProperties(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendMedicalStartEntitiesDetectionV2JobRequest
 */
export interface ComprehendMedicalStartEntitiesDetectionV2JobRequest {
  /**
   * @schema ComprehendMedicalStartEntitiesDetectionV2JobRequest#InputDataConfig
   */
  readonly inputDataConfig?: ComprehendMedicalInputDataConfig;

  /**
   * @schema ComprehendMedicalStartEntitiesDetectionV2JobRequest#OutputDataConfig
   */
  readonly outputDataConfig?: ComprehendMedicalOutputDataConfig;

  /**
   * @schema ComprehendMedicalStartEntitiesDetectionV2JobRequest#DataAccessRoleArn
   */
  readonly dataAccessRoleArn?: string;

  /**
   * @schema ComprehendMedicalStartEntitiesDetectionV2JobRequest#JobName
   */
  readonly jobName?: string;

  /**
   * @schema ComprehendMedicalStartEntitiesDetectionV2JobRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema ComprehendMedicalStartEntitiesDetectionV2JobRequest#KMSKey
   */
  readonly kmsKey?: string;

  /**
   * @schema ComprehendMedicalStartEntitiesDetectionV2JobRequest#LanguageCode
   */
  readonly languageCode?: string;

}

/**
 * Converts an object of type 'ComprehendMedicalStartEntitiesDetectionV2JobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendMedicalStartEntitiesDetectionV2JobRequest(obj: ComprehendMedicalStartEntitiesDetectionV2JobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InputDataConfig': toJson_ComprehendMedicalInputDataConfig(obj.inputDataConfig),
    'OutputDataConfig': toJson_ComprehendMedicalOutputDataConfig(obj.outputDataConfig),
    'DataAccessRoleArn': obj.dataAccessRoleArn,
    'JobName': obj.jobName,
    'ClientRequestToken': obj.clientRequestToken,
    'KMSKey': obj.kmsKey,
    'LanguageCode': obj.languageCode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendMedicalStartEntitiesDetectionV2JobResponse
 */
export interface ComprehendMedicalStartEntitiesDetectionV2JobResponse {
  /**
   * @schema ComprehendMedicalStartEntitiesDetectionV2JobResponse#JobId
   */
  readonly jobId?: string;

}

/**
 * Converts an object of type 'ComprehendMedicalStartEntitiesDetectionV2JobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendMedicalStartEntitiesDetectionV2JobResponse(obj: ComprehendMedicalStartEntitiesDetectionV2JobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendMedicalStartIcd10CmInferenceJobRequest
 */
export interface ComprehendMedicalStartIcd10CmInferenceJobRequest {
  /**
   * @schema ComprehendMedicalStartIcd10CmInferenceJobRequest#InputDataConfig
   */
  readonly inputDataConfig?: ComprehendMedicalInputDataConfig;

  /**
   * @schema ComprehendMedicalStartIcd10CmInferenceJobRequest#OutputDataConfig
   */
  readonly outputDataConfig?: ComprehendMedicalOutputDataConfig;

  /**
   * @schema ComprehendMedicalStartIcd10CmInferenceJobRequest#DataAccessRoleArn
   */
  readonly dataAccessRoleArn?: string;

  /**
   * @schema ComprehendMedicalStartIcd10CmInferenceJobRequest#JobName
   */
  readonly jobName?: string;

  /**
   * @schema ComprehendMedicalStartIcd10CmInferenceJobRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema ComprehendMedicalStartIcd10CmInferenceJobRequest#KMSKey
   */
  readonly kmsKey?: string;

  /**
   * @schema ComprehendMedicalStartIcd10CmInferenceJobRequest#LanguageCode
   */
  readonly languageCode?: string;

}

/**
 * Converts an object of type 'ComprehendMedicalStartIcd10CmInferenceJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendMedicalStartIcd10CmInferenceJobRequest(obj: ComprehendMedicalStartIcd10CmInferenceJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InputDataConfig': toJson_ComprehendMedicalInputDataConfig(obj.inputDataConfig),
    'OutputDataConfig': toJson_ComprehendMedicalOutputDataConfig(obj.outputDataConfig),
    'DataAccessRoleArn': obj.dataAccessRoleArn,
    'JobName': obj.jobName,
    'ClientRequestToken': obj.clientRequestToken,
    'KMSKey': obj.kmsKey,
    'LanguageCode': obj.languageCode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendMedicalStartIcd10CmInferenceJobResponse
 */
export interface ComprehendMedicalStartIcd10CmInferenceJobResponse {
  /**
   * @schema ComprehendMedicalStartIcd10CmInferenceJobResponse#JobId
   */
  readonly jobId?: string;

}

/**
 * Converts an object of type 'ComprehendMedicalStartIcd10CmInferenceJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendMedicalStartIcd10CmInferenceJobResponse(obj: ComprehendMedicalStartIcd10CmInferenceJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendMedicalStartPhiDetectionJobRequest
 */
export interface ComprehendMedicalStartPhiDetectionJobRequest {
  /**
   * @schema ComprehendMedicalStartPhiDetectionJobRequest#InputDataConfig
   */
  readonly inputDataConfig?: ComprehendMedicalInputDataConfig;

  /**
   * @schema ComprehendMedicalStartPhiDetectionJobRequest#OutputDataConfig
   */
  readonly outputDataConfig?: ComprehendMedicalOutputDataConfig;

  /**
   * @schema ComprehendMedicalStartPhiDetectionJobRequest#DataAccessRoleArn
   */
  readonly dataAccessRoleArn?: string;

  /**
   * @schema ComprehendMedicalStartPhiDetectionJobRequest#JobName
   */
  readonly jobName?: string;

  /**
   * @schema ComprehendMedicalStartPhiDetectionJobRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema ComprehendMedicalStartPhiDetectionJobRequest#KMSKey
   */
  readonly kmsKey?: string;

  /**
   * @schema ComprehendMedicalStartPhiDetectionJobRequest#LanguageCode
   */
  readonly languageCode?: string;

}

/**
 * Converts an object of type 'ComprehendMedicalStartPhiDetectionJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendMedicalStartPhiDetectionJobRequest(obj: ComprehendMedicalStartPhiDetectionJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InputDataConfig': toJson_ComprehendMedicalInputDataConfig(obj.inputDataConfig),
    'OutputDataConfig': toJson_ComprehendMedicalOutputDataConfig(obj.outputDataConfig),
    'DataAccessRoleArn': obj.dataAccessRoleArn,
    'JobName': obj.jobName,
    'ClientRequestToken': obj.clientRequestToken,
    'KMSKey': obj.kmsKey,
    'LanguageCode': obj.languageCode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendMedicalStartPhiDetectionJobResponse
 */
export interface ComprehendMedicalStartPhiDetectionJobResponse {
  /**
   * @schema ComprehendMedicalStartPhiDetectionJobResponse#JobId
   */
  readonly jobId?: string;

}

/**
 * Converts an object of type 'ComprehendMedicalStartPhiDetectionJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendMedicalStartPhiDetectionJobResponse(obj: ComprehendMedicalStartPhiDetectionJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendMedicalStartRxNormInferenceJobRequest
 */
export interface ComprehendMedicalStartRxNormInferenceJobRequest {
  /**
   * @schema ComprehendMedicalStartRxNormInferenceJobRequest#InputDataConfig
   */
  readonly inputDataConfig?: ComprehendMedicalInputDataConfig;

  /**
   * @schema ComprehendMedicalStartRxNormInferenceJobRequest#OutputDataConfig
   */
  readonly outputDataConfig?: ComprehendMedicalOutputDataConfig;

  /**
   * @schema ComprehendMedicalStartRxNormInferenceJobRequest#DataAccessRoleArn
   */
  readonly dataAccessRoleArn?: string;

  /**
   * @schema ComprehendMedicalStartRxNormInferenceJobRequest#JobName
   */
  readonly jobName?: string;

  /**
   * @schema ComprehendMedicalStartRxNormInferenceJobRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema ComprehendMedicalStartRxNormInferenceJobRequest#KMSKey
   */
  readonly kmsKey?: string;

  /**
   * @schema ComprehendMedicalStartRxNormInferenceJobRequest#LanguageCode
   */
  readonly languageCode?: string;

}

/**
 * Converts an object of type 'ComprehendMedicalStartRxNormInferenceJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendMedicalStartRxNormInferenceJobRequest(obj: ComprehendMedicalStartRxNormInferenceJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InputDataConfig': toJson_ComprehendMedicalInputDataConfig(obj.inputDataConfig),
    'OutputDataConfig': toJson_ComprehendMedicalOutputDataConfig(obj.outputDataConfig),
    'DataAccessRoleArn': obj.dataAccessRoleArn,
    'JobName': obj.jobName,
    'ClientRequestToken': obj.clientRequestToken,
    'KMSKey': obj.kmsKey,
    'LanguageCode': obj.languageCode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendMedicalStartRxNormInferenceJobResponse
 */
export interface ComprehendMedicalStartRxNormInferenceJobResponse {
  /**
   * @schema ComprehendMedicalStartRxNormInferenceJobResponse#JobId
   */
  readonly jobId?: string;

}

/**
 * Converts an object of type 'ComprehendMedicalStartRxNormInferenceJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendMedicalStartRxNormInferenceJobResponse(obj: ComprehendMedicalStartRxNormInferenceJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendMedicalStopEntitiesDetectionV2JobRequest
 */
export interface ComprehendMedicalStopEntitiesDetectionV2JobRequest {
  /**
   * @schema ComprehendMedicalStopEntitiesDetectionV2JobRequest#JobId
   */
  readonly jobId?: string;

}

/**
 * Converts an object of type 'ComprehendMedicalStopEntitiesDetectionV2JobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendMedicalStopEntitiesDetectionV2JobRequest(obj: ComprehendMedicalStopEntitiesDetectionV2JobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendMedicalStopEntitiesDetectionV2JobResponse
 */
export interface ComprehendMedicalStopEntitiesDetectionV2JobResponse {
  /**
   * @schema ComprehendMedicalStopEntitiesDetectionV2JobResponse#JobId
   */
  readonly jobId?: string;

}

/**
 * Converts an object of type 'ComprehendMedicalStopEntitiesDetectionV2JobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendMedicalStopEntitiesDetectionV2JobResponse(obj: ComprehendMedicalStopEntitiesDetectionV2JobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendMedicalStopIcd10CmInferenceJobRequest
 */
export interface ComprehendMedicalStopIcd10CmInferenceJobRequest {
  /**
   * @schema ComprehendMedicalStopIcd10CmInferenceJobRequest#JobId
   */
  readonly jobId?: string;

}

/**
 * Converts an object of type 'ComprehendMedicalStopIcd10CmInferenceJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendMedicalStopIcd10CmInferenceJobRequest(obj: ComprehendMedicalStopIcd10CmInferenceJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendMedicalStopIcd10CmInferenceJobResponse
 */
export interface ComprehendMedicalStopIcd10CmInferenceJobResponse {
  /**
   * @schema ComprehendMedicalStopIcd10CmInferenceJobResponse#JobId
   */
  readonly jobId?: string;

}

/**
 * Converts an object of type 'ComprehendMedicalStopIcd10CmInferenceJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendMedicalStopIcd10CmInferenceJobResponse(obj: ComprehendMedicalStopIcd10CmInferenceJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendMedicalStopPhiDetectionJobRequest
 */
export interface ComprehendMedicalStopPhiDetectionJobRequest {
  /**
   * @schema ComprehendMedicalStopPhiDetectionJobRequest#JobId
   */
  readonly jobId?: string;

}

/**
 * Converts an object of type 'ComprehendMedicalStopPhiDetectionJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendMedicalStopPhiDetectionJobRequest(obj: ComprehendMedicalStopPhiDetectionJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendMedicalStopPhiDetectionJobResponse
 */
export interface ComprehendMedicalStopPhiDetectionJobResponse {
  /**
   * @schema ComprehendMedicalStopPhiDetectionJobResponse#JobId
   */
  readonly jobId?: string;

}

/**
 * Converts an object of type 'ComprehendMedicalStopPhiDetectionJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendMedicalStopPhiDetectionJobResponse(obj: ComprehendMedicalStopPhiDetectionJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendMedicalStopRxNormInferenceJobRequest
 */
export interface ComprehendMedicalStopRxNormInferenceJobRequest {
  /**
   * @schema ComprehendMedicalStopRxNormInferenceJobRequest#JobId
   */
  readonly jobId?: string;

}

/**
 * Converts an object of type 'ComprehendMedicalStopRxNormInferenceJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendMedicalStopRxNormInferenceJobRequest(obj: ComprehendMedicalStopRxNormInferenceJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendMedicalStopRxNormInferenceJobResponse
 */
export interface ComprehendMedicalStopRxNormInferenceJobResponse {
  /**
   * @schema ComprehendMedicalStopRxNormInferenceJobResponse#JobId
   */
  readonly jobId?: string;

}

/**
 * Converts an object of type 'ComprehendMedicalStopRxNormInferenceJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendMedicalStopRxNormInferenceJobResponse(obj: ComprehendMedicalStopRxNormInferenceJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendMedicalComprehendMedicalAsyncJobProperties
 */
export interface ComprehendMedicalComprehendMedicalAsyncJobProperties {
  /**
   * @schema ComprehendMedicalComprehendMedicalAsyncJobProperties#JobId
   */
  readonly jobId?: string;

  /**
   * @schema ComprehendMedicalComprehendMedicalAsyncJobProperties#JobName
   */
  readonly jobName?: string;

  /**
   * @schema ComprehendMedicalComprehendMedicalAsyncJobProperties#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema ComprehendMedicalComprehendMedicalAsyncJobProperties#Message
   */
  readonly message?: string;

  /**
   * @schema ComprehendMedicalComprehendMedicalAsyncJobProperties#SubmitTime
   */
  readonly submitTime?: string;

  /**
   * @schema ComprehendMedicalComprehendMedicalAsyncJobProperties#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema ComprehendMedicalComprehendMedicalAsyncJobProperties#ExpirationTime
   */
  readonly expirationTime?: string;

  /**
   * @schema ComprehendMedicalComprehendMedicalAsyncJobProperties#InputDataConfig
   */
  readonly inputDataConfig?: ComprehendMedicalInputDataConfig;

  /**
   * @schema ComprehendMedicalComprehendMedicalAsyncJobProperties#OutputDataConfig
   */
  readonly outputDataConfig?: ComprehendMedicalOutputDataConfig;

  /**
   * @schema ComprehendMedicalComprehendMedicalAsyncJobProperties#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema ComprehendMedicalComprehendMedicalAsyncJobProperties#DataAccessRoleArn
   */
  readonly dataAccessRoleArn?: string;

  /**
   * @schema ComprehendMedicalComprehendMedicalAsyncJobProperties#ManifestFilePath
   */
  readonly manifestFilePath?: string;

  /**
   * @schema ComprehendMedicalComprehendMedicalAsyncJobProperties#KMSKey
   */
  readonly kmsKey?: string;

  /**
   * @schema ComprehendMedicalComprehendMedicalAsyncJobProperties#ModelVersion
   */
  readonly modelVersion?: string;

}

/**
 * Converts an object of type 'ComprehendMedicalComprehendMedicalAsyncJobProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendMedicalComprehendMedicalAsyncJobProperties(obj: ComprehendMedicalComprehendMedicalAsyncJobProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
    'JobName': obj.jobName,
    'JobStatus': obj.jobStatus,
    'Message': obj.message,
    'SubmitTime': obj.submitTime,
    'EndTime': obj.endTime,
    'ExpirationTime': obj.expirationTime,
    'InputDataConfig': toJson_ComprehendMedicalInputDataConfig(obj.inputDataConfig),
    'OutputDataConfig': toJson_ComprehendMedicalOutputDataConfig(obj.outputDataConfig),
    'LanguageCode': obj.languageCode,
    'DataAccessRoleArn': obj.dataAccessRoleArn,
    'ManifestFilePath': obj.manifestFilePath,
    'KMSKey': obj.kmsKey,
    'ModelVersion': obj.modelVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendMedicalEntity
 */
export interface ComprehendMedicalEntity {
  /**
   * @schema ComprehendMedicalEntity#Id
   */
  readonly id?: number;

  /**
   * @schema ComprehendMedicalEntity#BeginOffset
   */
  readonly beginOffset?: number;

  /**
   * @schema ComprehendMedicalEntity#EndOffset
   */
  readonly endOffset?: number;

  /**
   * @schema ComprehendMedicalEntity#Score
   */
  readonly score?: number;

  /**
   * @schema ComprehendMedicalEntity#Text
   */
  readonly text?: string;

  /**
   * @schema ComprehendMedicalEntity#Category
   */
  readonly category?: string;

  /**
   * @schema ComprehendMedicalEntity#Type
   */
  readonly type?: string;

  /**
   * @schema ComprehendMedicalEntity#Traits
   */
  readonly traits?: ComprehendMedicalTrait[];

  /**
   * @schema ComprehendMedicalEntity#Attributes
   */
  readonly attributes?: ComprehendMedicalAttribute[];

}

/**
 * Converts an object of type 'ComprehendMedicalEntity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendMedicalEntity(obj: ComprehendMedicalEntity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'BeginOffset': obj.beginOffset,
    'EndOffset': obj.endOffset,
    'Score': obj.score,
    'Text': obj.text,
    'Category': obj.category,
    'Type': obj.type,
    'Traits': obj.traits?.map(y => toJson_ComprehendMedicalTrait(y)),
    'Attributes': obj.attributes?.map(y => toJson_ComprehendMedicalAttribute(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendMedicalUnmappedAttribute
 */
export interface ComprehendMedicalUnmappedAttribute {
  /**
   * @schema ComprehendMedicalUnmappedAttribute#Type
   */
  readonly type?: string;

  /**
   * @schema ComprehendMedicalUnmappedAttribute#Attribute
   */
  readonly attribute?: ComprehendMedicalAttribute;

}

/**
 * Converts an object of type 'ComprehendMedicalUnmappedAttribute' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendMedicalUnmappedAttribute(obj: ComprehendMedicalUnmappedAttribute | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Attribute': toJson_ComprehendMedicalAttribute(obj.attribute),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendMedicalIcd10CmEntity
 */
export interface ComprehendMedicalIcd10CmEntity {
  /**
   * @schema ComprehendMedicalIcd10CmEntity#Id
   */
  readonly id?: number;

  /**
   * @schema ComprehendMedicalIcd10CmEntity#Text
   */
  readonly text?: string;

  /**
   * @schema ComprehendMedicalIcd10CmEntity#Category
   */
  readonly category?: string;

  /**
   * @schema ComprehendMedicalIcd10CmEntity#Type
   */
  readonly type?: string;

  /**
   * @schema ComprehendMedicalIcd10CmEntity#Score
   */
  readonly score?: number;

  /**
   * @schema ComprehendMedicalIcd10CmEntity#BeginOffset
   */
  readonly beginOffset?: number;

  /**
   * @schema ComprehendMedicalIcd10CmEntity#EndOffset
   */
  readonly endOffset?: number;

  /**
   * @schema ComprehendMedicalIcd10CmEntity#Attributes
   */
  readonly attributes?: ComprehendMedicalIcd10CmAttribute[];

  /**
   * @schema ComprehendMedicalIcd10CmEntity#Traits
   */
  readonly traits?: ComprehendMedicalIcd10CmTrait[];

  /**
   * @schema ComprehendMedicalIcd10CmEntity#ICD10CMConcepts
   */
  readonly icd10CmConcepts?: ComprehendMedicalIcd10CmConcept[];

}

/**
 * Converts an object of type 'ComprehendMedicalIcd10CmEntity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendMedicalIcd10CmEntity(obj: ComprehendMedicalIcd10CmEntity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Text': obj.text,
    'Category': obj.category,
    'Type': obj.type,
    'Score': obj.score,
    'BeginOffset': obj.beginOffset,
    'EndOffset': obj.endOffset,
    'Attributes': obj.attributes?.map(y => toJson_ComprehendMedicalIcd10CmAttribute(y)),
    'Traits': obj.traits?.map(y => toJson_ComprehendMedicalIcd10CmTrait(y)),
    'ICD10CMConcepts': obj.icd10CmConcepts?.map(y => toJson_ComprehendMedicalIcd10CmConcept(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendMedicalRxNormEntity
 */
export interface ComprehendMedicalRxNormEntity {
  /**
   * @schema ComprehendMedicalRxNormEntity#Id
   */
  readonly id?: number;

  /**
   * @schema ComprehendMedicalRxNormEntity#Text
   */
  readonly text?: string;

  /**
   * @schema ComprehendMedicalRxNormEntity#Category
   */
  readonly category?: string;

  /**
   * @schema ComprehendMedicalRxNormEntity#Type
   */
  readonly type?: string;

  /**
   * @schema ComprehendMedicalRxNormEntity#Score
   */
  readonly score?: number;

  /**
   * @schema ComprehendMedicalRxNormEntity#BeginOffset
   */
  readonly beginOffset?: number;

  /**
   * @schema ComprehendMedicalRxNormEntity#EndOffset
   */
  readonly endOffset?: number;

  /**
   * @schema ComprehendMedicalRxNormEntity#Attributes
   */
  readonly attributes?: ComprehendMedicalRxNormAttribute[];

  /**
   * @schema ComprehendMedicalRxNormEntity#Traits
   */
  readonly traits?: ComprehendMedicalRxNormTrait[];

  /**
   * @schema ComprehendMedicalRxNormEntity#RxNormConcepts
   */
  readonly rxNormConcepts?: ComprehendMedicalRxNormConcept[];

}

/**
 * Converts an object of type 'ComprehendMedicalRxNormEntity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendMedicalRxNormEntity(obj: ComprehendMedicalRxNormEntity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Text': obj.text,
    'Category': obj.category,
    'Type': obj.type,
    'Score': obj.score,
    'BeginOffset': obj.beginOffset,
    'EndOffset': obj.endOffset,
    'Attributes': obj.attributes?.map(y => toJson_ComprehendMedicalRxNormAttribute(y)),
    'Traits': obj.traits?.map(y => toJson_ComprehendMedicalRxNormTrait(y)),
    'RxNormConcepts': obj.rxNormConcepts?.map(y => toJson_ComprehendMedicalRxNormConcept(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendMedicalComprehendMedicalAsyncJobFilter
 */
export interface ComprehendMedicalComprehendMedicalAsyncJobFilter {
  /**
   * @schema ComprehendMedicalComprehendMedicalAsyncJobFilter#JobName
   */
  readonly jobName?: string;

  /**
   * @schema ComprehendMedicalComprehendMedicalAsyncJobFilter#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema ComprehendMedicalComprehendMedicalAsyncJobFilter#SubmitTimeBefore
   */
  readonly submitTimeBefore?: string;

  /**
   * @schema ComprehendMedicalComprehendMedicalAsyncJobFilter#SubmitTimeAfter
   */
  readonly submitTimeAfter?: string;

}

/**
 * Converts an object of type 'ComprehendMedicalComprehendMedicalAsyncJobFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendMedicalComprehendMedicalAsyncJobFilter(obj: ComprehendMedicalComprehendMedicalAsyncJobFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobName': obj.jobName,
    'JobStatus': obj.jobStatus,
    'SubmitTimeBefore': obj.submitTimeBefore,
    'SubmitTimeAfter': obj.submitTimeAfter,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendMedicalInputDataConfig
 */
export interface ComprehendMedicalInputDataConfig {
  /**
   * @schema ComprehendMedicalInputDataConfig#S3Bucket
   */
  readonly s3Bucket?: string;

  /**
   * @schema ComprehendMedicalInputDataConfig#S3Key
   */
  readonly s3Key?: string;

}

/**
 * Converts an object of type 'ComprehendMedicalInputDataConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendMedicalInputDataConfig(obj: ComprehendMedicalInputDataConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S3Bucket': obj.s3Bucket,
    'S3Key': obj.s3Key,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendMedicalOutputDataConfig
 */
export interface ComprehendMedicalOutputDataConfig {
  /**
   * @schema ComprehendMedicalOutputDataConfig#S3Bucket
   */
  readonly s3Bucket?: string;

  /**
   * @schema ComprehendMedicalOutputDataConfig#S3Key
   */
  readonly s3Key?: string;

}

/**
 * Converts an object of type 'ComprehendMedicalOutputDataConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendMedicalOutputDataConfig(obj: ComprehendMedicalOutputDataConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S3Bucket': obj.s3Bucket,
    'S3Key': obj.s3Key,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendMedicalTrait
 */
export interface ComprehendMedicalTrait {
  /**
   * @schema ComprehendMedicalTrait#Name
   */
  readonly name?: string;

  /**
   * @schema ComprehendMedicalTrait#Score
   */
  readonly score?: number;

}

/**
 * Converts an object of type 'ComprehendMedicalTrait' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendMedicalTrait(obj: ComprehendMedicalTrait | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Score': obj.score,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendMedicalAttribute
 */
export interface ComprehendMedicalAttribute {
  /**
   * @schema ComprehendMedicalAttribute#Type
   */
  readonly type?: string;

  /**
   * @schema ComprehendMedicalAttribute#Score
   */
  readonly score?: number;

  /**
   * @schema ComprehendMedicalAttribute#RelationshipScore
   */
  readonly relationshipScore?: number;

  /**
   * @schema ComprehendMedicalAttribute#RelationshipType
   */
  readonly relationshipType?: string;

  /**
   * @schema ComprehendMedicalAttribute#Id
   */
  readonly id?: number;

  /**
   * @schema ComprehendMedicalAttribute#BeginOffset
   */
  readonly beginOffset?: number;

  /**
   * @schema ComprehendMedicalAttribute#EndOffset
   */
  readonly endOffset?: number;

  /**
   * @schema ComprehendMedicalAttribute#Text
   */
  readonly text?: string;

  /**
   * @schema ComprehendMedicalAttribute#Category
   */
  readonly category?: string;

  /**
   * @schema ComprehendMedicalAttribute#Traits
   */
  readonly traits?: ComprehendMedicalTrait[];

}

/**
 * Converts an object of type 'ComprehendMedicalAttribute' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendMedicalAttribute(obj: ComprehendMedicalAttribute | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Score': obj.score,
    'RelationshipScore': obj.relationshipScore,
    'RelationshipType': obj.relationshipType,
    'Id': obj.id,
    'BeginOffset': obj.beginOffset,
    'EndOffset': obj.endOffset,
    'Text': obj.text,
    'Category': obj.category,
    'Traits': obj.traits?.map(y => toJson_ComprehendMedicalTrait(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendMedicalIcd10CmAttribute
 */
export interface ComprehendMedicalIcd10CmAttribute {
  /**
   * @schema ComprehendMedicalIcd10CmAttribute#Type
   */
  readonly type?: string;

  /**
   * @schema ComprehendMedicalIcd10CmAttribute#Score
   */
  readonly score?: number;

  /**
   * @schema ComprehendMedicalIcd10CmAttribute#RelationshipScore
   */
  readonly relationshipScore?: number;

  /**
   * @schema ComprehendMedicalIcd10CmAttribute#Id
   */
  readonly id?: number;

  /**
   * @schema ComprehendMedicalIcd10CmAttribute#BeginOffset
   */
  readonly beginOffset?: number;

  /**
   * @schema ComprehendMedicalIcd10CmAttribute#EndOffset
   */
  readonly endOffset?: number;

  /**
   * @schema ComprehendMedicalIcd10CmAttribute#Text
   */
  readonly text?: string;

  /**
   * @schema ComprehendMedicalIcd10CmAttribute#Traits
   */
  readonly traits?: ComprehendMedicalIcd10CmTrait[];

  /**
   * @schema ComprehendMedicalIcd10CmAttribute#Category
   */
  readonly category?: string;

  /**
   * @schema ComprehendMedicalIcd10CmAttribute#RelationshipType
   */
  readonly relationshipType?: string;

}

/**
 * Converts an object of type 'ComprehendMedicalIcd10CmAttribute' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendMedicalIcd10CmAttribute(obj: ComprehendMedicalIcd10CmAttribute | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Score': obj.score,
    'RelationshipScore': obj.relationshipScore,
    'Id': obj.id,
    'BeginOffset': obj.beginOffset,
    'EndOffset': obj.endOffset,
    'Text': obj.text,
    'Traits': obj.traits?.map(y => toJson_ComprehendMedicalIcd10CmTrait(y)),
    'Category': obj.category,
    'RelationshipType': obj.relationshipType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendMedicalIcd10CmTrait
 */
export interface ComprehendMedicalIcd10CmTrait {
  /**
   * @schema ComprehendMedicalIcd10CmTrait#Name
   */
  readonly name?: string;

  /**
   * @schema ComprehendMedicalIcd10CmTrait#Score
   */
  readonly score?: number;

}

/**
 * Converts an object of type 'ComprehendMedicalIcd10CmTrait' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendMedicalIcd10CmTrait(obj: ComprehendMedicalIcd10CmTrait | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Score': obj.score,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendMedicalIcd10CmConcept
 */
export interface ComprehendMedicalIcd10CmConcept {
  /**
   * @schema ComprehendMedicalIcd10CmConcept#Description
   */
  readonly description?: string;

  /**
   * @schema ComprehendMedicalIcd10CmConcept#Code
   */
  readonly code?: string;

  /**
   * @schema ComprehendMedicalIcd10CmConcept#Score
   */
  readonly score?: number;

}

/**
 * Converts an object of type 'ComprehendMedicalIcd10CmConcept' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendMedicalIcd10CmConcept(obj: ComprehendMedicalIcd10CmConcept | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Description': obj.description,
    'Code': obj.code,
    'Score': obj.score,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendMedicalRxNormAttribute
 */
export interface ComprehendMedicalRxNormAttribute {
  /**
   * @schema ComprehendMedicalRxNormAttribute#Type
   */
  readonly type?: string;

  /**
   * @schema ComprehendMedicalRxNormAttribute#Score
   */
  readonly score?: number;

  /**
   * @schema ComprehendMedicalRxNormAttribute#RelationshipScore
   */
  readonly relationshipScore?: number;

  /**
   * @schema ComprehendMedicalRxNormAttribute#Id
   */
  readonly id?: number;

  /**
   * @schema ComprehendMedicalRxNormAttribute#BeginOffset
   */
  readonly beginOffset?: number;

  /**
   * @schema ComprehendMedicalRxNormAttribute#EndOffset
   */
  readonly endOffset?: number;

  /**
   * @schema ComprehendMedicalRxNormAttribute#Text
   */
  readonly text?: string;

  /**
   * @schema ComprehendMedicalRxNormAttribute#Traits
   */
  readonly traits?: ComprehendMedicalRxNormTrait[];

}

/**
 * Converts an object of type 'ComprehendMedicalRxNormAttribute' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendMedicalRxNormAttribute(obj: ComprehendMedicalRxNormAttribute | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Score': obj.score,
    'RelationshipScore': obj.relationshipScore,
    'Id': obj.id,
    'BeginOffset': obj.beginOffset,
    'EndOffset': obj.endOffset,
    'Text': obj.text,
    'Traits': obj.traits?.map(y => toJson_ComprehendMedicalRxNormTrait(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendMedicalRxNormTrait
 */
export interface ComprehendMedicalRxNormTrait {
  /**
   * @schema ComprehendMedicalRxNormTrait#Name
   */
  readonly name?: string;

  /**
   * @schema ComprehendMedicalRxNormTrait#Score
   */
  readonly score?: number;

}

/**
 * Converts an object of type 'ComprehendMedicalRxNormTrait' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendMedicalRxNormTrait(obj: ComprehendMedicalRxNormTrait | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Score': obj.score,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendMedicalRxNormConcept
 */
export interface ComprehendMedicalRxNormConcept {
  /**
   * @schema ComprehendMedicalRxNormConcept#Description
   */
  readonly description?: string;

  /**
   * @schema ComprehendMedicalRxNormConcept#Code
   */
  readonly code?: string;

  /**
   * @schema ComprehendMedicalRxNormConcept#Score
   */
  readonly score?: number;

}

/**
 * Converts an object of type 'ComprehendMedicalRxNormConcept' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendMedicalRxNormConcept(obj: ComprehendMedicalRxNormConcept | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Description': obj.description,
    'Code': obj.code,
    'Score': obj.score,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
