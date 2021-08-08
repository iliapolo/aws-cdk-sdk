/**
 * @schema LookoutVisionCreateDatasetRequest
 */
export interface LookoutVisionCreateDatasetRequest {
  /**
   * @schema LookoutVisionCreateDatasetRequest#ProjectName
   */
  readonly projectName?: string;

  /**
   * @schema LookoutVisionCreateDatasetRequest#DatasetType
   */
  readonly datasetType?: string;

  /**
   * @schema LookoutVisionCreateDatasetRequest#DatasetSource
   */
  readonly datasetSource?: LookoutVisionDatasetSource;

  /**
   * @schema LookoutVisionCreateDatasetRequest#ClientToken
   */
  readonly clientToken?: string;

}

/**
 * Converts an object of type 'LookoutVisionCreateDatasetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutVisionCreateDatasetRequest(obj: LookoutVisionCreateDatasetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProjectName': obj.projectName,
    'DatasetType': obj.datasetType,
    'DatasetSource': toJson_LookoutVisionDatasetSource(obj.datasetSource),
    'ClientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutVisionCreateDatasetResponse
 */
export interface LookoutVisionCreateDatasetResponse {
  /**
   * @schema LookoutVisionCreateDatasetResponse#DatasetMetadata
   */
  readonly datasetMetadata?: LookoutVisionDatasetMetadata;

}

/**
 * Converts an object of type 'LookoutVisionCreateDatasetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutVisionCreateDatasetResponse(obj: LookoutVisionCreateDatasetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DatasetMetadata': toJson_LookoutVisionDatasetMetadata(obj.datasetMetadata),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutVisionCreateModelRequest
 */
export interface LookoutVisionCreateModelRequest {
  /**
   * @schema LookoutVisionCreateModelRequest#ProjectName
   */
  readonly projectName?: string;

  /**
   * @schema LookoutVisionCreateModelRequest#Description
   */
  readonly description?: string;

  /**
   * @schema LookoutVisionCreateModelRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema LookoutVisionCreateModelRequest#OutputConfig
   */
  readonly outputConfig?: LookoutVisionOutputConfig;

  /**
   * @schema LookoutVisionCreateModelRequest#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema LookoutVisionCreateModelRequest#Tags
   */
  readonly tags?: LookoutVisionTag[];

}

/**
 * Converts an object of type 'LookoutVisionCreateModelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutVisionCreateModelRequest(obj: LookoutVisionCreateModelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProjectName': obj.projectName,
    'Description': obj.description,
    'ClientToken': obj.clientToken,
    'OutputConfig': toJson_LookoutVisionOutputConfig(obj.outputConfig),
    'KmsKeyId': obj.kmsKeyId,
    'Tags': obj.tags?.map(y => toJson_LookoutVisionTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutVisionCreateModelResponse
 */
export interface LookoutVisionCreateModelResponse {
  /**
   * @schema LookoutVisionCreateModelResponse#ModelMetadata
   */
  readonly modelMetadata?: LookoutVisionModelMetadata;

}

/**
 * Converts an object of type 'LookoutVisionCreateModelResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutVisionCreateModelResponse(obj: LookoutVisionCreateModelResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ModelMetadata': toJson_LookoutVisionModelMetadata(obj.modelMetadata),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutVisionCreateProjectRequest
 */
export interface LookoutVisionCreateProjectRequest {
  /**
   * @schema LookoutVisionCreateProjectRequest#ProjectName
   */
  readonly projectName?: string;

  /**
   * @schema LookoutVisionCreateProjectRequest#ClientToken
   */
  readonly clientToken?: string;

}

/**
 * Converts an object of type 'LookoutVisionCreateProjectRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutVisionCreateProjectRequest(obj: LookoutVisionCreateProjectRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProjectName': obj.projectName,
    'ClientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutVisionCreateProjectResponse
 */
export interface LookoutVisionCreateProjectResponse {
  /**
   * @schema LookoutVisionCreateProjectResponse#ProjectMetadata
   */
  readonly projectMetadata?: LookoutVisionProjectMetadata;

}

/**
 * Converts an object of type 'LookoutVisionCreateProjectResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutVisionCreateProjectResponse(obj: LookoutVisionCreateProjectResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProjectMetadata': toJson_LookoutVisionProjectMetadata(obj.projectMetadata),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutVisionDeleteDatasetRequest
 */
export interface LookoutVisionDeleteDatasetRequest {
  /**
   * @schema LookoutVisionDeleteDatasetRequest#ProjectName
   */
  readonly projectName?: string;

  /**
   * @schema LookoutVisionDeleteDatasetRequest#DatasetType
   */
  readonly datasetType?: string;

  /**
   * @schema LookoutVisionDeleteDatasetRequest#ClientToken
   */
  readonly clientToken?: string;

}

/**
 * Converts an object of type 'LookoutVisionDeleteDatasetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutVisionDeleteDatasetRequest(obj: LookoutVisionDeleteDatasetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProjectName': obj.projectName,
    'DatasetType': obj.datasetType,
    'ClientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutVisionDeleteDatasetResponse
 */
export interface LookoutVisionDeleteDatasetResponse {
}

/**
 * Converts an object of type 'LookoutVisionDeleteDatasetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutVisionDeleteDatasetResponse(obj: LookoutVisionDeleteDatasetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutVisionDeleteModelRequest
 */
export interface LookoutVisionDeleteModelRequest {
  /**
   * @schema LookoutVisionDeleteModelRequest#ProjectName
   */
  readonly projectName?: string;

  /**
   * @schema LookoutVisionDeleteModelRequest#ModelVersion
   */
  readonly modelVersion?: string;

  /**
   * @schema LookoutVisionDeleteModelRequest#ClientToken
   */
  readonly clientToken?: string;

}

/**
 * Converts an object of type 'LookoutVisionDeleteModelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutVisionDeleteModelRequest(obj: LookoutVisionDeleteModelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProjectName': obj.projectName,
    'ModelVersion': obj.modelVersion,
    'ClientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutVisionDeleteModelResponse
 */
export interface LookoutVisionDeleteModelResponse {
  /**
   * @schema LookoutVisionDeleteModelResponse#ModelArn
   */
  readonly modelArn?: string;

}

/**
 * Converts an object of type 'LookoutVisionDeleteModelResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutVisionDeleteModelResponse(obj: LookoutVisionDeleteModelResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ModelArn': obj.modelArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutVisionDeleteProjectRequest
 */
export interface LookoutVisionDeleteProjectRequest {
  /**
   * @schema LookoutVisionDeleteProjectRequest#ProjectName
   */
  readonly projectName?: string;

  /**
   * @schema LookoutVisionDeleteProjectRequest#ClientToken
   */
  readonly clientToken?: string;

}

/**
 * Converts an object of type 'LookoutVisionDeleteProjectRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutVisionDeleteProjectRequest(obj: LookoutVisionDeleteProjectRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProjectName': obj.projectName,
    'ClientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutVisionDeleteProjectResponse
 */
export interface LookoutVisionDeleteProjectResponse {
  /**
   * @schema LookoutVisionDeleteProjectResponse#ProjectArn
   */
  readonly projectArn?: string;

}

/**
 * Converts an object of type 'LookoutVisionDeleteProjectResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutVisionDeleteProjectResponse(obj: LookoutVisionDeleteProjectResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProjectArn': obj.projectArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutVisionDescribeDatasetRequest
 */
export interface LookoutVisionDescribeDatasetRequest {
  /**
   * @schema LookoutVisionDescribeDatasetRequest#ProjectName
   */
  readonly projectName?: string;

  /**
   * @schema LookoutVisionDescribeDatasetRequest#DatasetType
   */
  readonly datasetType?: string;

}

/**
 * Converts an object of type 'LookoutVisionDescribeDatasetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutVisionDescribeDatasetRequest(obj: LookoutVisionDescribeDatasetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProjectName': obj.projectName,
    'DatasetType': obj.datasetType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutVisionDescribeDatasetResponse
 */
export interface LookoutVisionDescribeDatasetResponse {
  /**
   * @schema LookoutVisionDescribeDatasetResponse#DatasetDescription
   */
  readonly datasetDescription?: LookoutVisionDatasetDescription;

}

/**
 * Converts an object of type 'LookoutVisionDescribeDatasetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutVisionDescribeDatasetResponse(obj: LookoutVisionDescribeDatasetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DatasetDescription': toJson_LookoutVisionDatasetDescription(obj.datasetDescription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutVisionDescribeModelRequest
 */
export interface LookoutVisionDescribeModelRequest {
  /**
   * @schema LookoutVisionDescribeModelRequest#ProjectName
   */
  readonly projectName?: string;

  /**
   * @schema LookoutVisionDescribeModelRequest#ModelVersion
   */
  readonly modelVersion?: string;

}

/**
 * Converts an object of type 'LookoutVisionDescribeModelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutVisionDescribeModelRequest(obj: LookoutVisionDescribeModelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProjectName': obj.projectName,
    'ModelVersion': obj.modelVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutVisionDescribeModelResponse
 */
export interface LookoutVisionDescribeModelResponse {
  /**
   * @schema LookoutVisionDescribeModelResponse#ModelDescription
   */
  readonly modelDescription?: LookoutVisionModelDescription;

}

/**
 * Converts an object of type 'LookoutVisionDescribeModelResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutVisionDescribeModelResponse(obj: LookoutVisionDescribeModelResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ModelDescription': toJson_LookoutVisionModelDescription(obj.modelDescription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutVisionDescribeProjectRequest
 */
export interface LookoutVisionDescribeProjectRequest {
  /**
   * @schema LookoutVisionDescribeProjectRequest#ProjectName
   */
  readonly projectName?: string;

}

/**
 * Converts an object of type 'LookoutVisionDescribeProjectRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutVisionDescribeProjectRequest(obj: LookoutVisionDescribeProjectRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProjectName': obj.projectName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutVisionDescribeProjectResponse
 */
export interface LookoutVisionDescribeProjectResponse {
  /**
   * @schema LookoutVisionDescribeProjectResponse#ProjectDescription
   */
  readonly projectDescription?: LookoutVisionProjectDescription;

}

/**
 * Converts an object of type 'LookoutVisionDescribeProjectResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutVisionDescribeProjectResponse(obj: LookoutVisionDescribeProjectResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProjectDescription': toJson_LookoutVisionProjectDescription(obj.projectDescription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutVisionDetectAnomaliesRequest
 */
export interface LookoutVisionDetectAnomaliesRequest {
  /**
   * @schema LookoutVisionDetectAnomaliesRequest#ProjectName
   */
  readonly projectName?: string;

  /**
   * @schema LookoutVisionDetectAnomaliesRequest#ModelVersion
   */
  readonly modelVersion?: string;

  /**
   * @schema LookoutVisionDetectAnomaliesRequest#Body
   */
  readonly body?: any;

  /**
   * @schema LookoutVisionDetectAnomaliesRequest#ContentType
   */
  readonly contentType?: string;

}

/**
 * Converts an object of type 'LookoutVisionDetectAnomaliesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutVisionDetectAnomaliesRequest(obj: LookoutVisionDetectAnomaliesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProjectName': obj.projectName,
    'ModelVersion': obj.modelVersion,
    'Body': obj.body,
    'ContentType': obj.contentType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutVisionDetectAnomaliesResponse
 */
export interface LookoutVisionDetectAnomaliesResponse {
  /**
   * @schema LookoutVisionDetectAnomaliesResponse#DetectAnomalyResult
   */
  readonly detectAnomalyResult?: LookoutVisionDetectAnomalyResult;

}

/**
 * Converts an object of type 'LookoutVisionDetectAnomaliesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutVisionDetectAnomaliesResponse(obj: LookoutVisionDetectAnomaliesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DetectAnomalyResult': toJson_LookoutVisionDetectAnomalyResult(obj.detectAnomalyResult),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutVisionListDatasetEntriesRequest
 */
export interface LookoutVisionListDatasetEntriesRequest {
  /**
   * @schema LookoutVisionListDatasetEntriesRequest#ProjectName
   */
  readonly projectName?: string;

  /**
   * @schema LookoutVisionListDatasetEntriesRequest#DatasetType
   */
  readonly datasetType?: string;

  /**
   * @schema LookoutVisionListDatasetEntriesRequest#Labeled
   */
  readonly labeled?: boolean;

  /**
   * @schema LookoutVisionListDatasetEntriesRequest#AnomalyClass
   */
  readonly anomalyClass?: string;

  /**
   * @schema LookoutVisionListDatasetEntriesRequest#BeforeCreationDate
   */
  readonly beforeCreationDate?: string;

  /**
   * @schema LookoutVisionListDatasetEntriesRequest#AfterCreationDate
   */
  readonly afterCreationDate?: string;

  /**
   * @schema LookoutVisionListDatasetEntriesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema LookoutVisionListDatasetEntriesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema LookoutVisionListDatasetEntriesRequest#SourceRefContains
   */
  readonly sourceRefContains?: string;

}

/**
 * Converts an object of type 'LookoutVisionListDatasetEntriesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutVisionListDatasetEntriesRequest(obj: LookoutVisionListDatasetEntriesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProjectName': obj.projectName,
    'DatasetType': obj.datasetType,
    'Labeled': obj.labeled,
    'AnomalyClass': obj.anomalyClass,
    'BeforeCreationDate': obj.beforeCreationDate,
    'AfterCreationDate': obj.afterCreationDate,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'SourceRefContains': obj.sourceRefContains,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutVisionListDatasetEntriesResponse
 */
export interface LookoutVisionListDatasetEntriesResponse {
  /**
   * @schema LookoutVisionListDatasetEntriesResponse#DatasetEntries
   */
  readonly datasetEntries?: string[];

  /**
   * @schema LookoutVisionListDatasetEntriesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'LookoutVisionListDatasetEntriesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutVisionListDatasetEntriesResponse(obj: LookoutVisionListDatasetEntriesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DatasetEntries': obj.datasetEntries?.map(y => y),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutVisionListModelsRequest
 */
export interface LookoutVisionListModelsRequest {
  /**
   * @schema LookoutVisionListModelsRequest#ProjectName
   */
  readonly projectName?: string;

  /**
   * @schema LookoutVisionListModelsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema LookoutVisionListModelsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'LookoutVisionListModelsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutVisionListModelsRequest(obj: LookoutVisionListModelsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProjectName': obj.projectName,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutVisionListModelsResponse
 */
export interface LookoutVisionListModelsResponse {
  /**
   * @schema LookoutVisionListModelsResponse#Models
   */
  readonly models?: LookoutVisionModelMetadata[];

  /**
   * @schema LookoutVisionListModelsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'LookoutVisionListModelsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutVisionListModelsResponse(obj: LookoutVisionListModelsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Models': obj.models?.map(y => toJson_LookoutVisionModelMetadata(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutVisionListProjectsRequest
 */
export interface LookoutVisionListProjectsRequest {
  /**
   * @schema LookoutVisionListProjectsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema LookoutVisionListProjectsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'LookoutVisionListProjectsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutVisionListProjectsRequest(obj: LookoutVisionListProjectsRequest | undefined): Record<string, any> | undefined {
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
 * @schema LookoutVisionListProjectsResponse
 */
export interface LookoutVisionListProjectsResponse {
  /**
   * @schema LookoutVisionListProjectsResponse#Projects
   */
  readonly projects?: LookoutVisionProjectMetadata[];

  /**
   * @schema LookoutVisionListProjectsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'LookoutVisionListProjectsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutVisionListProjectsResponse(obj: LookoutVisionListProjectsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Projects': obj.projects?.map(y => toJson_LookoutVisionProjectMetadata(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutVisionListTagsForResourceRequest
 */
export interface LookoutVisionListTagsForResourceRequest {
  /**
   * @schema LookoutVisionListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'LookoutVisionListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutVisionListTagsForResourceRequest(obj: LookoutVisionListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutVisionListTagsForResourceResponse
 */
export interface LookoutVisionListTagsForResourceResponse {
  /**
   * @schema LookoutVisionListTagsForResourceResponse#Tags
   */
  readonly tags?: LookoutVisionTag[];

}

/**
 * Converts an object of type 'LookoutVisionListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutVisionListTagsForResourceResponse(obj: LookoutVisionListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': obj.tags?.map(y => toJson_LookoutVisionTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutVisionStartModelRequest
 */
export interface LookoutVisionStartModelRequest {
  /**
   * @schema LookoutVisionStartModelRequest#ProjectName
   */
  readonly projectName?: string;

  /**
   * @schema LookoutVisionStartModelRequest#ModelVersion
   */
  readonly modelVersion?: string;

  /**
   * @schema LookoutVisionStartModelRequest#MinInferenceUnits
   */
  readonly minInferenceUnits?: number;

  /**
   * @schema LookoutVisionStartModelRequest#ClientToken
   */
  readonly clientToken?: string;

}

/**
 * Converts an object of type 'LookoutVisionStartModelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutVisionStartModelRequest(obj: LookoutVisionStartModelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProjectName': obj.projectName,
    'ModelVersion': obj.modelVersion,
    'MinInferenceUnits': obj.minInferenceUnits,
    'ClientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutVisionStartModelResponse
 */
export interface LookoutVisionStartModelResponse {
  /**
   * @schema LookoutVisionStartModelResponse#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'LookoutVisionStartModelResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutVisionStartModelResponse(obj: LookoutVisionStartModelResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutVisionStopModelRequest
 */
export interface LookoutVisionStopModelRequest {
  /**
   * @schema LookoutVisionStopModelRequest#ProjectName
   */
  readonly projectName?: string;

  /**
   * @schema LookoutVisionStopModelRequest#ModelVersion
   */
  readonly modelVersion?: string;

  /**
   * @schema LookoutVisionStopModelRequest#ClientToken
   */
  readonly clientToken?: string;

}

/**
 * Converts an object of type 'LookoutVisionStopModelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutVisionStopModelRequest(obj: LookoutVisionStopModelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProjectName': obj.projectName,
    'ModelVersion': obj.modelVersion,
    'ClientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutVisionStopModelResponse
 */
export interface LookoutVisionStopModelResponse {
  /**
   * @schema LookoutVisionStopModelResponse#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'LookoutVisionStopModelResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutVisionStopModelResponse(obj: LookoutVisionStopModelResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutVisionTagResourceRequest
 */
export interface LookoutVisionTagResourceRequest {
  /**
   * @schema LookoutVisionTagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema LookoutVisionTagResourceRequest#Tags
   */
  readonly tags?: LookoutVisionTag[];

}

/**
 * Converts an object of type 'LookoutVisionTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutVisionTagResourceRequest(obj: LookoutVisionTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'Tags': obj.tags?.map(y => toJson_LookoutVisionTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutVisionTagResourceResponse
 */
export interface LookoutVisionTagResourceResponse {
}

/**
 * Converts an object of type 'LookoutVisionTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutVisionTagResourceResponse(obj: LookoutVisionTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutVisionUntagResourceRequest
 */
export interface LookoutVisionUntagResourceRequest {
  /**
   * @schema LookoutVisionUntagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema LookoutVisionUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'LookoutVisionUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutVisionUntagResourceRequest(obj: LookoutVisionUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutVisionUntagResourceResponse
 */
export interface LookoutVisionUntagResourceResponse {
}

/**
 * Converts an object of type 'LookoutVisionUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutVisionUntagResourceResponse(obj: LookoutVisionUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutVisionUpdateDatasetEntriesRequest
 */
export interface LookoutVisionUpdateDatasetEntriesRequest {
  /**
   * @schema LookoutVisionUpdateDatasetEntriesRequest#ProjectName
   */
  readonly projectName?: string;

  /**
   * @schema LookoutVisionUpdateDatasetEntriesRequest#DatasetType
   */
  readonly datasetType?: string;

  /**
   * @schema LookoutVisionUpdateDatasetEntriesRequest#Changes
   */
  readonly changes?: any;

  /**
   * @schema LookoutVisionUpdateDatasetEntriesRequest#ClientToken
   */
  readonly clientToken?: string;

}

/**
 * Converts an object of type 'LookoutVisionUpdateDatasetEntriesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutVisionUpdateDatasetEntriesRequest(obj: LookoutVisionUpdateDatasetEntriesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProjectName': obj.projectName,
    'DatasetType': obj.datasetType,
    'Changes': obj.changes,
    'ClientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutVisionUpdateDatasetEntriesResponse
 */
export interface LookoutVisionUpdateDatasetEntriesResponse {
  /**
   * @schema LookoutVisionUpdateDatasetEntriesResponse#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'LookoutVisionUpdateDatasetEntriesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutVisionUpdateDatasetEntriesResponse(obj: LookoutVisionUpdateDatasetEntriesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutVisionDatasetSource
 */
export interface LookoutVisionDatasetSource {
  /**
   * @schema LookoutVisionDatasetSource#GroundTruthManifest
   */
  readonly groundTruthManifest?: LookoutVisionDatasetGroundTruthManifest;

}

/**
 * Converts an object of type 'LookoutVisionDatasetSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutVisionDatasetSource(obj: LookoutVisionDatasetSource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroundTruthManifest': toJson_LookoutVisionDatasetGroundTruthManifest(obj.groundTruthManifest),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutVisionDatasetMetadata
 */
export interface LookoutVisionDatasetMetadata {
  /**
   * @schema LookoutVisionDatasetMetadata#DatasetType
   */
  readonly datasetType?: string;

  /**
   * @schema LookoutVisionDatasetMetadata#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema LookoutVisionDatasetMetadata#Status
   */
  readonly status?: string;

  /**
   * @schema LookoutVisionDatasetMetadata#StatusMessage
   */
  readonly statusMessage?: string;

}

/**
 * Converts an object of type 'LookoutVisionDatasetMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutVisionDatasetMetadata(obj: LookoutVisionDatasetMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DatasetType': obj.datasetType,
    'CreationTimestamp': obj.creationTimestamp,
    'Status': obj.status,
    'StatusMessage': obj.statusMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutVisionOutputConfig
 */
export interface LookoutVisionOutputConfig {
  /**
   * @schema LookoutVisionOutputConfig#S3Location
   */
  readonly s3Location?: LookoutVisionS3Location;

}

/**
 * Converts an object of type 'LookoutVisionOutputConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutVisionOutputConfig(obj: LookoutVisionOutputConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S3Location': toJson_LookoutVisionS3Location(obj.s3Location),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutVisionTag
 */
export interface LookoutVisionTag {
  /**
   * @schema LookoutVisionTag#Key
   */
  readonly key?: string;

  /**
   * @schema LookoutVisionTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'LookoutVisionTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutVisionTag(obj: LookoutVisionTag | undefined): Record<string, any> | undefined {
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
 * @schema LookoutVisionModelMetadata
 */
export interface LookoutVisionModelMetadata {
  /**
   * @schema LookoutVisionModelMetadata#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema LookoutVisionModelMetadata#ModelVersion
   */
  readonly modelVersion?: string;

  /**
   * @schema LookoutVisionModelMetadata#ModelArn
   */
  readonly modelArn?: string;

  /**
   * @schema LookoutVisionModelMetadata#Description
   */
  readonly description?: string;

  /**
   * @schema LookoutVisionModelMetadata#Status
   */
  readonly status?: string;

  /**
   * @schema LookoutVisionModelMetadata#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema LookoutVisionModelMetadata#Performance
   */
  readonly performance?: LookoutVisionModelPerformance;

}

/**
 * Converts an object of type 'LookoutVisionModelMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutVisionModelMetadata(obj: LookoutVisionModelMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CreationTimestamp': obj.creationTimestamp,
    'ModelVersion': obj.modelVersion,
    'ModelArn': obj.modelArn,
    'Description': obj.description,
    'Status': obj.status,
    'StatusMessage': obj.statusMessage,
    'Performance': toJson_LookoutVisionModelPerformance(obj.performance),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutVisionProjectMetadata
 */
export interface LookoutVisionProjectMetadata {
  /**
   * @schema LookoutVisionProjectMetadata#ProjectArn
   */
  readonly projectArn?: string;

  /**
   * @schema LookoutVisionProjectMetadata#ProjectName
   */
  readonly projectName?: string;

  /**
   * @schema LookoutVisionProjectMetadata#CreationTimestamp
   */
  readonly creationTimestamp?: string;

}

/**
 * Converts an object of type 'LookoutVisionProjectMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutVisionProjectMetadata(obj: LookoutVisionProjectMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProjectArn': obj.projectArn,
    'ProjectName': obj.projectName,
    'CreationTimestamp': obj.creationTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutVisionDatasetDescription
 */
export interface LookoutVisionDatasetDescription {
  /**
   * @schema LookoutVisionDatasetDescription#ProjectName
   */
  readonly projectName?: string;

  /**
   * @schema LookoutVisionDatasetDescription#DatasetType
   */
  readonly datasetType?: string;

  /**
   * @schema LookoutVisionDatasetDescription#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema LookoutVisionDatasetDescription#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema LookoutVisionDatasetDescription#Status
   */
  readonly status?: string;

  /**
   * @schema LookoutVisionDatasetDescription#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema LookoutVisionDatasetDescription#ImageStats
   */
  readonly imageStats?: LookoutVisionDatasetImageStats;

}

/**
 * Converts an object of type 'LookoutVisionDatasetDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutVisionDatasetDescription(obj: LookoutVisionDatasetDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProjectName': obj.projectName,
    'DatasetType': obj.datasetType,
    'CreationTimestamp': obj.creationTimestamp,
    'LastUpdatedTimestamp': obj.lastUpdatedTimestamp,
    'Status': obj.status,
    'StatusMessage': obj.statusMessage,
    'ImageStats': toJson_LookoutVisionDatasetImageStats(obj.imageStats),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutVisionModelDescription
 */
export interface LookoutVisionModelDescription {
  /**
   * @schema LookoutVisionModelDescription#ModelVersion
   */
  readonly modelVersion?: string;

  /**
   * @schema LookoutVisionModelDescription#ModelArn
   */
  readonly modelArn?: string;

  /**
   * @schema LookoutVisionModelDescription#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema LookoutVisionModelDescription#Description
   */
  readonly description?: string;

  /**
   * @schema LookoutVisionModelDescription#Status
   */
  readonly status?: string;

  /**
   * @schema LookoutVisionModelDescription#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema LookoutVisionModelDescription#Performance
   */
  readonly performance?: LookoutVisionModelPerformance;

  /**
   * @schema LookoutVisionModelDescription#OutputConfig
   */
  readonly outputConfig?: LookoutVisionOutputConfig;

  /**
   * @schema LookoutVisionModelDescription#EvaluationManifest
   */
  readonly evaluationManifest?: LookoutVisionOutputS3Object;

  /**
   * @schema LookoutVisionModelDescription#EvaluationResult
   */
  readonly evaluationResult?: LookoutVisionOutputS3Object;

  /**
   * @schema LookoutVisionModelDescription#EvaluationEndTimestamp
   */
  readonly evaluationEndTimestamp?: string;

  /**
   * @schema LookoutVisionModelDescription#KmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * Converts an object of type 'LookoutVisionModelDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutVisionModelDescription(obj: LookoutVisionModelDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ModelVersion': obj.modelVersion,
    'ModelArn': obj.modelArn,
    'CreationTimestamp': obj.creationTimestamp,
    'Description': obj.description,
    'Status': obj.status,
    'StatusMessage': obj.statusMessage,
    'Performance': toJson_LookoutVisionModelPerformance(obj.performance),
    'OutputConfig': toJson_LookoutVisionOutputConfig(obj.outputConfig),
    'EvaluationManifest': toJson_LookoutVisionOutputS3Object(obj.evaluationManifest),
    'EvaluationResult': toJson_LookoutVisionOutputS3Object(obj.evaluationResult),
    'EvaluationEndTimestamp': obj.evaluationEndTimestamp,
    'KmsKeyId': obj.kmsKeyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutVisionProjectDescription
 */
export interface LookoutVisionProjectDescription {
  /**
   * @schema LookoutVisionProjectDescription#ProjectArn
   */
  readonly projectArn?: string;

  /**
   * @schema LookoutVisionProjectDescription#ProjectName
   */
  readonly projectName?: string;

  /**
   * @schema LookoutVisionProjectDescription#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema LookoutVisionProjectDescription#Datasets
   */
  readonly datasets?: LookoutVisionDatasetMetadata[];

}

/**
 * Converts an object of type 'LookoutVisionProjectDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutVisionProjectDescription(obj: LookoutVisionProjectDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProjectArn': obj.projectArn,
    'ProjectName': obj.projectName,
    'CreationTimestamp': obj.creationTimestamp,
    'Datasets': obj.datasets?.map(y => toJson_LookoutVisionDatasetMetadata(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutVisionDetectAnomalyResult
 */
export interface LookoutVisionDetectAnomalyResult {
  /**
   * @schema LookoutVisionDetectAnomalyResult#Source
   */
  readonly source?: LookoutVisionImageSource;

  /**
   * @schema LookoutVisionDetectAnomalyResult#IsAnomalous
   */
  readonly isAnomalous?: boolean;

  /**
   * @schema LookoutVisionDetectAnomalyResult#Confidence
   */
  readonly confidence?: number;

}

/**
 * Converts an object of type 'LookoutVisionDetectAnomalyResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutVisionDetectAnomalyResult(obj: LookoutVisionDetectAnomalyResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Source': toJson_LookoutVisionImageSource(obj.source),
    'IsAnomalous': obj.isAnomalous,
    'Confidence': obj.confidence,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutVisionDatasetGroundTruthManifest
 */
export interface LookoutVisionDatasetGroundTruthManifest {
  /**
   * @schema LookoutVisionDatasetGroundTruthManifest#S3Object
   */
  readonly s3Object?: LookoutVisionInputS3Object;

}

/**
 * Converts an object of type 'LookoutVisionDatasetGroundTruthManifest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutVisionDatasetGroundTruthManifest(obj: LookoutVisionDatasetGroundTruthManifest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S3Object': toJson_LookoutVisionInputS3Object(obj.s3Object),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutVisionS3Location
 */
export interface LookoutVisionS3Location {
  /**
   * @schema LookoutVisionS3Location#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema LookoutVisionS3Location#Prefix
   */
  readonly prefix?: string;

}

/**
 * Converts an object of type 'LookoutVisionS3Location' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutVisionS3Location(obj: LookoutVisionS3Location | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'Prefix': obj.prefix,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutVisionModelPerformance
 */
export interface LookoutVisionModelPerformance {
  /**
   * @schema LookoutVisionModelPerformance#F1Score
   */
  readonly f1Score?: number;

  /**
   * @schema LookoutVisionModelPerformance#Recall
   */
  readonly recall?: number;

  /**
   * @schema LookoutVisionModelPerformance#Precision
   */
  readonly precision?: number;

}

/**
 * Converts an object of type 'LookoutVisionModelPerformance' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutVisionModelPerformance(obj: LookoutVisionModelPerformance | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'F1Score': obj.f1Score,
    'Recall': obj.recall,
    'Precision': obj.precision,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutVisionDatasetImageStats
 */
export interface LookoutVisionDatasetImageStats {
  /**
   * @schema LookoutVisionDatasetImageStats#Total
   */
  readonly total?: number;

  /**
   * @schema LookoutVisionDatasetImageStats#Labeled
   */
  readonly labeled?: number;

  /**
   * @schema LookoutVisionDatasetImageStats#Normal
   */
  readonly normal?: number;

  /**
   * @schema LookoutVisionDatasetImageStats#Anomaly
   */
  readonly anomaly?: number;

}

/**
 * Converts an object of type 'LookoutVisionDatasetImageStats' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutVisionDatasetImageStats(obj: LookoutVisionDatasetImageStats | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Total': obj.total,
    'Labeled': obj.labeled,
    'Normal': obj.normal,
    'Anomaly': obj.anomaly,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutVisionOutputS3Object
 */
export interface LookoutVisionOutputS3Object {
  /**
   * @schema LookoutVisionOutputS3Object#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema LookoutVisionOutputS3Object#Key
   */
  readonly key?: string;

}

/**
 * Converts an object of type 'LookoutVisionOutputS3Object' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutVisionOutputS3Object(obj: LookoutVisionOutputS3Object | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'Key': obj.key,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutVisionImageSource
 */
export interface LookoutVisionImageSource {
  /**
   * @schema LookoutVisionImageSource#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'LookoutVisionImageSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutVisionImageSource(obj: LookoutVisionImageSource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutVisionInputS3Object
 */
export interface LookoutVisionInputS3Object {
  /**
   * @schema LookoutVisionInputS3Object#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema LookoutVisionInputS3Object#Key
   */
  readonly key?: string;

  /**
   * @schema LookoutVisionInputS3Object#VersionId
   */
  readonly versionId?: string;

}

/**
 * Converts an object of type 'LookoutVisionInputS3Object' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutVisionInputS3Object(obj: LookoutVisionInputS3Object | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'Key': obj.key,
    'VersionId': obj.versionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
