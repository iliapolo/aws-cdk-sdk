/**
 * @schema DataExchangeCancelJobRequest
 */
export interface DataExchangeCancelJobRequest {
  /**
   * @schema DataExchangeCancelJobRequest#JobId
   */
  readonly jobId?: string;

}

/**
 * Converts an object of type 'DataExchangeCancelJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataExchangeCancelJobRequest(obj: DataExchangeCancelJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataExchangeCreateDataSetRequest
 */
export interface DataExchangeCreateDataSetRequest {
  /**
   * @schema DataExchangeCreateDataSetRequest#AssetType
   */
  readonly assetType?: string;

  /**
   * @schema DataExchangeCreateDataSetRequest#Description
   */
  readonly description?: string;

  /**
   * @schema DataExchangeCreateDataSetRequest#Name
   */
  readonly name?: string;

  /**
   * @schema DataExchangeCreateDataSetRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'DataExchangeCreateDataSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataExchangeCreateDataSetRequest(obj: DataExchangeCreateDataSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssetType': obj.assetType,
    'Description': obj.description,
    'Name': obj.name,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataExchangeCreateDataSetResponse
 */
export interface DataExchangeCreateDataSetResponse {
  /**
   * @schema DataExchangeCreateDataSetResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema DataExchangeCreateDataSetResponse#AssetType
   */
  readonly assetType?: string;

  /**
   * @schema DataExchangeCreateDataSetResponse#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema DataExchangeCreateDataSetResponse#Description
   */
  readonly description?: string;

  /**
   * @schema DataExchangeCreateDataSetResponse#Id
   */
  readonly id?: string;

  /**
   * @schema DataExchangeCreateDataSetResponse#Name
   */
  readonly name?: string;

  /**
   * @schema DataExchangeCreateDataSetResponse#Origin
   */
  readonly origin?: string;

  /**
   * @schema DataExchangeCreateDataSetResponse#OriginDetails
   */
  readonly originDetails?: DataExchangeOriginDetails;

  /**
   * @schema DataExchangeCreateDataSetResponse#SourceId
   */
  readonly sourceId?: string;

  /**
   * @schema DataExchangeCreateDataSetResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema DataExchangeCreateDataSetResponse#UpdatedAt
   */
  readonly updatedAt?: string;

}

/**
 * Converts an object of type 'DataExchangeCreateDataSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataExchangeCreateDataSetResponse(obj: DataExchangeCreateDataSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'AssetType': obj.assetType,
    'CreatedAt': obj.createdAt,
    'Description': obj.description,
    'Id': obj.id,
    'Name': obj.name,
    'Origin': obj.origin,
    'OriginDetails': toJson_DataExchangeOriginDetails(obj.originDetails),
    'SourceId': obj.sourceId,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'UpdatedAt': obj.updatedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataExchangeCreateJobRequest
 */
export interface DataExchangeCreateJobRequest {
  /**
   * @schema DataExchangeCreateJobRequest#Details
   */
  readonly details?: DataExchangeRequestDetails;

  /**
   * @schema DataExchangeCreateJobRequest#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'DataExchangeCreateJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataExchangeCreateJobRequest(obj: DataExchangeCreateJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Details': toJson_DataExchangeRequestDetails(obj.details),
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataExchangeCreateJobResponse
 */
export interface DataExchangeCreateJobResponse {
  /**
   * @schema DataExchangeCreateJobResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema DataExchangeCreateJobResponse#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema DataExchangeCreateJobResponse#Details
   */
  readonly details?: DataExchangeResponseDetails;

  /**
   * @schema DataExchangeCreateJobResponse#Errors
   */
  readonly errors?: DataExchangeJobError[];

  /**
   * @schema DataExchangeCreateJobResponse#Id
   */
  readonly id?: string;

  /**
   * @schema DataExchangeCreateJobResponse#State
   */
  readonly state?: string;

  /**
   * @schema DataExchangeCreateJobResponse#Type
   */
  readonly type?: string;

  /**
   * @schema DataExchangeCreateJobResponse#UpdatedAt
   */
  readonly updatedAt?: string;

}

/**
 * Converts an object of type 'DataExchangeCreateJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataExchangeCreateJobResponse(obj: DataExchangeCreateJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CreatedAt': obj.createdAt,
    'Details': toJson_DataExchangeResponseDetails(obj.details),
    'Errors': obj.errors?.map(y => toJson_DataExchangeJobError(y)),
    'Id': obj.id,
    'State': obj.state,
    'Type': obj.type,
    'UpdatedAt': obj.updatedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataExchangeCreateRevisionRequest
 */
export interface DataExchangeCreateRevisionRequest {
  /**
   * @schema DataExchangeCreateRevisionRequest#Comment
   */
  readonly comment?: string;

  /**
   * @schema DataExchangeCreateRevisionRequest#DataSetId
   */
  readonly dataSetId?: string;

  /**
   * @schema DataExchangeCreateRevisionRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'DataExchangeCreateRevisionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataExchangeCreateRevisionRequest(obj: DataExchangeCreateRevisionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Comment': obj.comment,
    'DataSetId': obj.dataSetId,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataExchangeCreateRevisionResponse
 */
export interface DataExchangeCreateRevisionResponse {
  /**
   * @schema DataExchangeCreateRevisionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema DataExchangeCreateRevisionResponse#Comment
   */
  readonly comment?: string;

  /**
   * @schema DataExchangeCreateRevisionResponse#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema DataExchangeCreateRevisionResponse#DataSetId
   */
  readonly dataSetId?: string;

  /**
   * @schema DataExchangeCreateRevisionResponse#Finalized
   */
  readonly finalized?: boolean;

  /**
   * @schema DataExchangeCreateRevisionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema DataExchangeCreateRevisionResponse#SourceId
   */
  readonly sourceId?: string;

  /**
   * @schema DataExchangeCreateRevisionResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema DataExchangeCreateRevisionResponse#UpdatedAt
   */
  readonly updatedAt?: string;

}

/**
 * Converts an object of type 'DataExchangeCreateRevisionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataExchangeCreateRevisionResponse(obj: DataExchangeCreateRevisionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Comment': obj.comment,
    'CreatedAt': obj.createdAt,
    'DataSetId': obj.dataSetId,
    'Finalized': obj.finalized,
    'Id': obj.id,
    'SourceId': obj.sourceId,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'UpdatedAt': obj.updatedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataExchangeDeleteAssetRequest
 */
export interface DataExchangeDeleteAssetRequest {
  /**
   * @schema DataExchangeDeleteAssetRequest#AssetId
   */
  readonly assetId?: string;

  /**
   * @schema DataExchangeDeleteAssetRequest#DataSetId
   */
  readonly dataSetId?: string;

  /**
   * @schema DataExchangeDeleteAssetRequest#RevisionId
   */
  readonly revisionId?: string;

}

/**
 * Converts an object of type 'DataExchangeDeleteAssetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataExchangeDeleteAssetRequest(obj: DataExchangeDeleteAssetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssetId': obj.assetId,
    'DataSetId': obj.dataSetId,
    'RevisionId': obj.revisionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataExchangeDeleteDataSetRequest
 */
export interface DataExchangeDeleteDataSetRequest {
  /**
   * @schema DataExchangeDeleteDataSetRequest#DataSetId
   */
  readonly dataSetId?: string;

}

/**
 * Converts an object of type 'DataExchangeDeleteDataSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataExchangeDeleteDataSetRequest(obj: DataExchangeDeleteDataSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataSetId': obj.dataSetId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataExchangeDeleteRevisionRequest
 */
export interface DataExchangeDeleteRevisionRequest {
  /**
   * @schema DataExchangeDeleteRevisionRequest#DataSetId
   */
  readonly dataSetId?: string;

  /**
   * @schema DataExchangeDeleteRevisionRequest#RevisionId
   */
  readonly revisionId?: string;

}

/**
 * Converts an object of type 'DataExchangeDeleteRevisionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataExchangeDeleteRevisionRequest(obj: DataExchangeDeleteRevisionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataSetId': obj.dataSetId,
    'RevisionId': obj.revisionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataExchangeGetAssetRequest
 */
export interface DataExchangeGetAssetRequest {
  /**
   * @schema DataExchangeGetAssetRequest#AssetId
   */
  readonly assetId?: string;

  /**
   * @schema DataExchangeGetAssetRequest#DataSetId
   */
  readonly dataSetId?: string;

  /**
   * @schema DataExchangeGetAssetRequest#RevisionId
   */
  readonly revisionId?: string;

}

/**
 * Converts an object of type 'DataExchangeGetAssetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataExchangeGetAssetRequest(obj: DataExchangeGetAssetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssetId': obj.assetId,
    'DataSetId': obj.dataSetId,
    'RevisionId': obj.revisionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataExchangeGetAssetResponse
 */
export interface DataExchangeGetAssetResponse {
  /**
   * @schema DataExchangeGetAssetResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema DataExchangeGetAssetResponse#AssetDetails
   */
  readonly assetDetails?: DataExchangeAssetDetails;

  /**
   * @schema DataExchangeGetAssetResponse#AssetType
   */
  readonly assetType?: string;

  /**
   * @schema DataExchangeGetAssetResponse#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema DataExchangeGetAssetResponse#DataSetId
   */
  readonly dataSetId?: string;

  /**
   * @schema DataExchangeGetAssetResponse#Id
   */
  readonly id?: string;

  /**
   * @schema DataExchangeGetAssetResponse#Name
   */
  readonly name?: string;

  /**
   * @schema DataExchangeGetAssetResponse#RevisionId
   */
  readonly revisionId?: string;

  /**
   * @schema DataExchangeGetAssetResponse#SourceId
   */
  readonly sourceId?: string;

  /**
   * @schema DataExchangeGetAssetResponse#UpdatedAt
   */
  readonly updatedAt?: string;

}

/**
 * Converts an object of type 'DataExchangeGetAssetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataExchangeGetAssetResponse(obj: DataExchangeGetAssetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'AssetDetails': toJson_DataExchangeAssetDetails(obj.assetDetails),
    'AssetType': obj.assetType,
    'CreatedAt': obj.createdAt,
    'DataSetId': obj.dataSetId,
    'Id': obj.id,
    'Name': obj.name,
    'RevisionId': obj.revisionId,
    'SourceId': obj.sourceId,
    'UpdatedAt': obj.updatedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataExchangeGetDataSetRequest
 */
export interface DataExchangeGetDataSetRequest {
  /**
   * @schema DataExchangeGetDataSetRequest#DataSetId
   */
  readonly dataSetId?: string;

}

/**
 * Converts an object of type 'DataExchangeGetDataSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataExchangeGetDataSetRequest(obj: DataExchangeGetDataSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataSetId': obj.dataSetId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataExchangeGetDataSetResponse
 */
export interface DataExchangeGetDataSetResponse {
  /**
   * @schema DataExchangeGetDataSetResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema DataExchangeGetDataSetResponse#AssetType
   */
  readonly assetType?: string;

  /**
   * @schema DataExchangeGetDataSetResponse#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema DataExchangeGetDataSetResponse#Description
   */
  readonly description?: string;

  /**
   * @schema DataExchangeGetDataSetResponse#Id
   */
  readonly id?: string;

  /**
   * @schema DataExchangeGetDataSetResponse#Name
   */
  readonly name?: string;

  /**
   * @schema DataExchangeGetDataSetResponse#Origin
   */
  readonly origin?: string;

  /**
   * @schema DataExchangeGetDataSetResponse#OriginDetails
   */
  readonly originDetails?: DataExchangeOriginDetails;

  /**
   * @schema DataExchangeGetDataSetResponse#SourceId
   */
  readonly sourceId?: string;

  /**
   * @schema DataExchangeGetDataSetResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema DataExchangeGetDataSetResponse#UpdatedAt
   */
  readonly updatedAt?: string;

}

/**
 * Converts an object of type 'DataExchangeGetDataSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataExchangeGetDataSetResponse(obj: DataExchangeGetDataSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'AssetType': obj.assetType,
    'CreatedAt': obj.createdAt,
    'Description': obj.description,
    'Id': obj.id,
    'Name': obj.name,
    'Origin': obj.origin,
    'OriginDetails': toJson_DataExchangeOriginDetails(obj.originDetails),
    'SourceId': obj.sourceId,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'UpdatedAt': obj.updatedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataExchangeGetJobRequest
 */
export interface DataExchangeGetJobRequest {
  /**
   * @schema DataExchangeGetJobRequest#JobId
   */
  readonly jobId?: string;

}

/**
 * Converts an object of type 'DataExchangeGetJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataExchangeGetJobRequest(obj: DataExchangeGetJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataExchangeGetJobResponse
 */
export interface DataExchangeGetJobResponse {
  /**
   * @schema DataExchangeGetJobResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema DataExchangeGetJobResponse#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema DataExchangeGetJobResponse#Details
   */
  readonly details?: DataExchangeResponseDetails;

  /**
   * @schema DataExchangeGetJobResponse#Errors
   */
  readonly errors?: DataExchangeJobError[];

  /**
   * @schema DataExchangeGetJobResponse#Id
   */
  readonly id?: string;

  /**
   * @schema DataExchangeGetJobResponse#State
   */
  readonly state?: string;

  /**
   * @schema DataExchangeGetJobResponse#Type
   */
  readonly type?: string;

  /**
   * @schema DataExchangeGetJobResponse#UpdatedAt
   */
  readonly updatedAt?: string;

}

/**
 * Converts an object of type 'DataExchangeGetJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataExchangeGetJobResponse(obj: DataExchangeGetJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CreatedAt': obj.createdAt,
    'Details': toJson_DataExchangeResponseDetails(obj.details),
    'Errors': obj.errors?.map(y => toJson_DataExchangeJobError(y)),
    'Id': obj.id,
    'State': obj.state,
    'Type': obj.type,
    'UpdatedAt': obj.updatedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataExchangeGetRevisionRequest
 */
export interface DataExchangeGetRevisionRequest {
  /**
   * @schema DataExchangeGetRevisionRequest#DataSetId
   */
  readonly dataSetId?: string;

  /**
   * @schema DataExchangeGetRevisionRequest#RevisionId
   */
  readonly revisionId?: string;

}

/**
 * Converts an object of type 'DataExchangeGetRevisionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataExchangeGetRevisionRequest(obj: DataExchangeGetRevisionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataSetId': obj.dataSetId,
    'RevisionId': obj.revisionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataExchangeGetRevisionResponse
 */
export interface DataExchangeGetRevisionResponse {
  /**
   * @schema DataExchangeGetRevisionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema DataExchangeGetRevisionResponse#Comment
   */
  readonly comment?: string;

  /**
   * @schema DataExchangeGetRevisionResponse#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema DataExchangeGetRevisionResponse#DataSetId
   */
  readonly dataSetId?: string;

  /**
   * @schema DataExchangeGetRevisionResponse#Finalized
   */
  readonly finalized?: boolean;

  /**
   * @schema DataExchangeGetRevisionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema DataExchangeGetRevisionResponse#SourceId
   */
  readonly sourceId?: string;

  /**
   * @schema DataExchangeGetRevisionResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema DataExchangeGetRevisionResponse#UpdatedAt
   */
  readonly updatedAt?: string;

}

/**
 * Converts an object of type 'DataExchangeGetRevisionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataExchangeGetRevisionResponse(obj: DataExchangeGetRevisionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Comment': obj.comment,
    'CreatedAt': obj.createdAt,
    'DataSetId': obj.dataSetId,
    'Finalized': obj.finalized,
    'Id': obj.id,
    'SourceId': obj.sourceId,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'UpdatedAt': obj.updatedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataExchangeListDataSetRevisionsRequest
 */
export interface DataExchangeListDataSetRevisionsRequest {
  /**
   * @schema DataExchangeListDataSetRevisionsRequest#DataSetId
   */
  readonly dataSetId?: string;

  /**
   * @schema DataExchangeListDataSetRevisionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DataExchangeListDataSetRevisionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DataExchangeListDataSetRevisionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataExchangeListDataSetRevisionsRequest(obj: DataExchangeListDataSetRevisionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataSetId': obj.dataSetId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataExchangeListDataSetRevisionsResponse
 */
export interface DataExchangeListDataSetRevisionsResponse {
  /**
   * @schema DataExchangeListDataSetRevisionsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DataExchangeListDataSetRevisionsResponse#Revisions
   */
  readonly revisions?: DataExchangeRevisionEntry[];

}

/**
 * Converts an object of type 'DataExchangeListDataSetRevisionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataExchangeListDataSetRevisionsResponse(obj: DataExchangeListDataSetRevisionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'Revisions': obj.revisions?.map(y => toJson_DataExchangeRevisionEntry(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataExchangeListDataSetsRequest
 */
export interface DataExchangeListDataSetsRequest {
  /**
   * @schema DataExchangeListDataSetsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DataExchangeListDataSetsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DataExchangeListDataSetsRequest#Origin
   */
  readonly origin?: string;

}

/**
 * Converts an object of type 'DataExchangeListDataSetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataExchangeListDataSetsRequest(obj: DataExchangeListDataSetsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'Origin': obj.origin,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataExchangeListDataSetsResponse
 */
export interface DataExchangeListDataSetsResponse {
  /**
   * @schema DataExchangeListDataSetsResponse#DataSets
   */
  readonly dataSets?: DataExchangeDataSetEntry[];

  /**
   * @schema DataExchangeListDataSetsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DataExchangeListDataSetsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataExchangeListDataSetsResponse(obj: DataExchangeListDataSetsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataSets': obj.dataSets?.map(y => toJson_DataExchangeDataSetEntry(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataExchangeListJobsRequest
 */
export interface DataExchangeListJobsRequest {
  /**
   * @schema DataExchangeListJobsRequest#DataSetId
   */
  readonly dataSetId?: string;

  /**
   * @schema DataExchangeListJobsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DataExchangeListJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DataExchangeListJobsRequest#RevisionId
   */
  readonly revisionId?: string;

}

/**
 * Converts an object of type 'DataExchangeListJobsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataExchangeListJobsRequest(obj: DataExchangeListJobsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataSetId': obj.dataSetId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'RevisionId': obj.revisionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataExchangeListJobsResponse
 */
export interface DataExchangeListJobsResponse {
  /**
   * @schema DataExchangeListJobsResponse#Jobs
   */
  readonly jobs?: DataExchangeJobEntry[];

  /**
   * @schema DataExchangeListJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DataExchangeListJobsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataExchangeListJobsResponse(obj: DataExchangeListJobsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Jobs': obj.jobs?.map(y => toJson_DataExchangeJobEntry(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataExchangeListRevisionAssetsRequest
 */
export interface DataExchangeListRevisionAssetsRequest {
  /**
   * @schema DataExchangeListRevisionAssetsRequest#DataSetId
   */
  readonly dataSetId?: string;

  /**
   * @schema DataExchangeListRevisionAssetsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DataExchangeListRevisionAssetsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DataExchangeListRevisionAssetsRequest#RevisionId
   */
  readonly revisionId?: string;

}

/**
 * Converts an object of type 'DataExchangeListRevisionAssetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataExchangeListRevisionAssetsRequest(obj: DataExchangeListRevisionAssetsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataSetId': obj.dataSetId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'RevisionId': obj.revisionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataExchangeListRevisionAssetsResponse
 */
export interface DataExchangeListRevisionAssetsResponse {
  /**
   * @schema DataExchangeListRevisionAssetsResponse#Assets
   */
  readonly assets?: DataExchangeAssetEntry[];

  /**
   * @schema DataExchangeListRevisionAssetsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DataExchangeListRevisionAssetsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataExchangeListRevisionAssetsResponse(obj: DataExchangeListRevisionAssetsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Assets': obj.assets?.map(y => toJson_DataExchangeAssetEntry(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataExchangeListTagsForResourceRequest
 */
export interface DataExchangeListTagsForResourceRequest {
  /**
   * @schema DataExchangeListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'DataExchangeListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataExchangeListTagsForResourceRequest(obj: DataExchangeListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataExchangeListTagsForResourceResponse
 */
export interface DataExchangeListTagsForResourceResponse {
  /**
   * @schema DataExchangeListTagsForResourceResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'DataExchangeListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataExchangeListTagsForResourceResponse(obj: DataExchangeListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataExchangeStartJobRequest
 */
export interface DataExchangeStartJobRequest {
  /**
   * @schema DataExchangeStartJobRequest#JobId
   */
  readonly jobId?: string;

}

/**
 * Converts an object of type 'DataExchangeStartJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataExchangeStartJobRequest(obj: DataExchangeStartJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataExchangeStartJobResponse
 */
export interface DataExchangeStartJobResponse {
}

/**
 * Converts an object of type 'DataExchangeStartJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataExchangeStartJobResponse(obj: DataExchangeStartJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataExchangeTagResourceRequest
 */
export interface DataExchangeTagResourceRequest {
  /**
   * @schema DataExchangeTagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema DataExchangeTagResourceRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'DataExchangeTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataExchangeTagResourceRequest(obj: DataExchangeTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataExchangeUntagResourceRequest
 */
export interface DataExchangeUntagResourceRequest {
  /**
   * @schema DataExchangeUntagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema DataExchangeUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'DataExchangeUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataExchangeUntagResourceRequest(obj: DataExchangeUntagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema DataExchangeUpdateAssetRequest
 */
export interface DataExchangeUpdateAssetRequest {
  /**
   * @schema DataExchangeUpdateAssetRequest#AssetId
   */
  readonly assetId?: string;

  /**
   * @schema DataExchangeUpdateAssetRequest#DataSetId
   */
  readonly dataSetId?: string;

  /**
   * @schema DataExchangeUpdateAssetRequest#Name
   */
  readonly name?: string;

  /**
   * @schema DataExchangeUpdateAssetRequest#RevisionId
   */
  readonly revisionId?: string;

}

/**
 * Converts an object of type 'DataExchangeUpdateAssetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataExchangeUpdateAssetRequest(obj: DataExchangeUpdateAssetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssetId': obj.assetId,
    'DataSetId': obj.dataSetId,
    'Name': obj.name,
    'RevisionId': obj.revisionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataExchangeUpdateAssetResponse
 */
export interface DataExchangeUpdateAssetResponse {
  /**
   * @schema DataExchangeUpdateAssetResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema DataExchangeUpdateAssetResponse#AssetDetails
   */
  readonly assetDetails?: DataExchangeAssetDetails;

  /**
   * @schema DataExchangeUpdateAssetResponse#AssetType
   */
  readonly assetType?: string;

  /**
   * @schema DataExchangeUpdateAssetResponse#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema DataExchangeUpdateAssetResponse#DataSetId
   */
  readonly dataSetId?: string;

  /**
   * @schema DataExchangeUpdateAssetResponse#Id
   */
  readonly id?: string;

  /**
   * @schema DataExchangeUpdateAssetResponse#Name
   */
  readonly name?: string;

  /**
   * @schema DataExchangeUpdateAssetResponse#RevisionId
   */
  readonly revisionId?: string;

  /**
   * @schema DataExchangeUpdateAssetResponse#SourceId
   */
  readonly sourceId?: string;

  /**
   * @schema DataExchangeUpdateAssetResponse#UpdatedAt
   */
  readonly updatedAt?: string;

}

/**
 * Converts an object of type 'DataExchangeUpdateAssetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataExchangeUpdateAssetResponse(obj: DataExchangeUpdateAssetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'AssetDetails': toJson_DataExchangeAssetDetails(obj.assetDetails),
    'AssetType': obj.assetType,
    'CreatedAt': obj.createdAt,
    'DataSetId': obj.dataSetId,
    'Id': obj.id,
    'Name': obj.name,
    'RevisionId': obj.revisionId,
    'SourceId': obj.sourceId,
    'UpdatedAt': obj.updatedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataExchangeUpdateDataSetRequest
 */
export interface DataExchangeUpdateDataSetRequest {
  /**
   * @schema DataExchangeUpdateDataSetRequest#DataSetId
   */
  readonly dataSetId?: string;

  /**
   * @schema DataExchangeUpdateDataSetRequest#Description
   */
  readonly description?: string;

  /**
   * @schema DataExchangeUpdateDataSetRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'DataExchangeUpdateDataSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataExchangeUpdateDataSetRequest(obj: DataExchangeUpdateDataSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataSetId': obj.dataSetId,
    'Description': obj.description,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataExchangeUpdateDataSetResponse
 */
export interface DataExchangeUpdateDataSetResponse {
  /**
   * @schema DataExchangeUpdateDataSetResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema DataExchangeUpdateDataSetResponse#AssetType
   */
  readonly assetType?: string;

  /**
   * @schema DataExchangeUpdateDataSetResponse#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema DataExchangeUpdateDataSetResponse#Description
   */
  readonly description?: string;

  /**
   * @schema DataExchangeUpdateDataSetResponse#Id
   */
  readonly id?: string;

  /**
   * @schema DataExchangeUpdateDataSetResponse#Name
   */
  readonly name?: string;

  /**
   * @schema DataExchangeUpdateDataSetResponse#Origin
   */
  readonly origin?: string;

  /**
   * @schema DataExchangeUpdateDataSetResponse#OriginDetails
   */
  readonly originDetails?: DataExchangeOriginDetails;

  /**
   * @schema DataExchangeUpdateDataSetResponse#SourceId
   */
  readonly sourceId?: string;

  /**
   * @schema DataExchangeUpdateDataSetResponse#UpdatedAt
   */
  readonly updatedAt?: string;

}

/**
 * Converts an object of type 'DataExchangeUpdateDataSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataExchangeUpdateDataSetResponse(obj: DataExchangeUpdateDataSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'AssetType': obj.assetType,
    'CreatedAt': obj.createdAt,
    'Description': obj.description,
    'Id': obj.id,
    'Name': obj.name,
    'Origin': obj.origin,
    'OriginDetails': toJson_DataExchangeOriginDetails(obj.originDetails),
    'SourceId': obj.sourceId,
    'UpdatedAt': obj.updatedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataExchangeUpdateRevisionRequest
 */
export interface DataExchangeUpdateRevisionRequest {
  /**
   * @schema DataExchangeUpdateRevisionRequest#Comment
   */
  readonly comment?: string;

  /**
   * @schema DataExchangeUpdateRevisionRequest#DataSetId
   */
  readonly dataSetId?: string;

  /**
   * @schema DataExchangeUpdateRevisionRequest#Finalized
   */
  readonly finalized?: boolean;

  /**
   * @schema DataExchangeUpdateRevisionRequest#RevisionId
   */
  readonly revisionId?: string;

}

/**
 * Converts an object of type 'DataExchangeUpdateRevisionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataExchangeUpdateRevisionRequest(obj: DataExchangeUpdateRevisionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Comment': obj.comment,
    'DataSetId': obj.dataSetId,
    'Finalized': obj.finalized,
    'RevisionId': obj.revisionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataExchangeUpdateRevisionResponse
 */
export interface DataExchangeUpdateRevisionResponse {
  /**
   * @schema DataExchangeUpdateRevisionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema DataExchangeUpdateRevisionResponse#Comment
   */
  readonly comment?: string;

  /**
   * @schema DataExchangeUpdateRevisionResponse#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema DataExchangeUpdateRevisionResponse#DataSetId
   */
  readonly dataSetId?: string;

  /**
   * @schema DataExchangeUpdateRevisionResponse#Finalized
   */
  readonly finalized?: boolean;

  /**
   * @schema DataExchangeUpdateRevisionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema DataExchangeUpdateRevisionResponse#SourceId
   */
  readonly sourceId?: string;

  /**
   * @schema DataExchangeUpdateRevisionResponse#UpdatedAt
   */
  readonly updatedAt?: string;

}

/**
 * Converts an object of type 'DataExchangeUpdateRevisionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataExchangeUpdateRevisionResponse(obj: DataExchangeUpdateRevisionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Comment': obj.comment,
    'CreatedAt': obj.createdAt,
    'DataSetId': obj.dataSetId,
    'Finalized': obj.finalized,
    'Id': obj.id,
    'SourceId': obj.sourceId,
    'UpdatedAt': obj.updatedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataExchangeOriginDetails
 */
export interface DataExchangeOriginDetails {
  /**
   * @schema DataExchangeOriginDetails#ProductId
   */
  readonly productId?: string;

}

/**
 * Converts an object of type 'DataExchangeOriginDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataExchangeOriginDetails(obj: DataExchangeOriginDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProductId': obj.productId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataExchangeRequestDetails
 */
export interface DataExchangeRequestDetails {
  /**
   * @schema DataExchangeRequestDetails#ExportAssetToSignedUrl
   */
  readonly exportAssetToSignedUrl?: DataExchangeExportAssetToSignedUrlRequestDetails;

  /**
   * @schema DataExchangeRequestDetails#ExportAssetsToS3
   */
  readonly exportAssetsToS3?: DataExchangeExportAssetsToS3RequestDetails;

  /**
   * @schema DataExchangeRequestDetails#ExportRevisionsToS3
   */
  readonly exportRevisionsToS3?: DataExchangeExportRevisionsToS3RequestDetails;

  /**
   * @schema DataExchangeRequestDetails#ImportAssetFromSignedUrl
   */
  readonly importAssetFromSignedUrl?: DataExchangeImportAssetFromSignedUrlRequestDetails;

  /**
   * @schema DataExchangeRequestDetails#ImportAssetsFromS3
   */
  readonly importAssetsFromS3?: DataExchangeImportAssetsFromS3RequestDetails;

}

/**
 * Converts an object of type 'DataExchangeRequestDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataExchangeRequestDetails(obj: DataExchangeRequestDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ExportAssetToSignedUrl': toJson_DataExchangeExportAssetToSignedUrlRequestDetails(obj.exportAssetToSignedUrl),
    'ExportAssetsToS3': toJson_DataExchangeExportAssetsToS3RequestDetails(obj.exportAssetsToS3),
    'ExportRevisionsToS3': toJson_DataExchangeExportRevisionsToS3RequestDetails(obj.exportRevisionsToS3),
    'ImportAssetFromSignedUrl': toJson_DataExchangeImportAssetFromSignedUrlRequestDetails(obj.importAssetFromSignedUrl),
    'ImportAssetsFromS3': toJson_DataExchangeImportAssetsFromS3RequestDetails(obj.importAssetsFromS3),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataExchangeResponseDetails
 */
export interface DataExchangeResponseDetails {
  /**
   * @schema DataExchangeResponseDetails#ExportAssetToSignedUrl
   */
  readonly exportAssetToSignedUrl?: DataExchangeExportAssetToSignedUrlResponseDetails;

  /**
   * @schema DataExchangeResponseDetails#ExportAssetsToS3
   */
  readonly exportAssetsToS3?: DataExchangeExportAssetsToS3ResponseDetails;

  /**
   * @schema DataExchangeResponseDetails#ExportRevisionsToS3
   */
  readonly exportRevisionsToS3?: DataExchangeExportRevisionsToS3ResponseDetails;

  /**
   * @schema DataExchangeResponseDetails#ImportAssetFromSignedUrl
   */
  readonly importAssetFromSignedUrl?: DataExchangeImportAssetFromSignedUrlResponseDetails;

  /**
   * @schema DataExchangeResponseDetails#ImportAssetsFromS3
   */
  readonly importAssetsFromS3?: DataExchangeImportAssetsFromS3ResponseDetails;

}

/**
 * Converts an object of type 'DataExchangeResponseDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataExchangeResponseDetails(obj: DataExchangeResponseDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ExportAssetToSignedUrl': toJson_DataExchangeExportAssetToSignedUrlResponseDetails(obj.exportAssetToSignedUrl),
    'ExportAssetsToS3': toJson_DataExchangeExportAssetsToS3ResponseDetails(obj.exportAssetsToS3),
    'ExportRevisionsToS3': toJson_DataExchangeExportRevisionsToS3ResponseDetails(obj.exportRevisionsToS3),
    'ImportAssetFromSignedUrl': toJson_DataExchangeImportAssetFromSignedUrlResponseDetails(obj.importAssetFromSignedUrl),
    'ImportAssetsFromS3': toJson_DataExchangeImportAssetsFromS3ResponseDetails(obj.importAssetsFromS3),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataExchangeJobError
 */
export interface DataExchangeJobError {
  /**
   * @schema DataExchangeJobError#Code
   */
  readonly code?: string;

  /**
   * @schema DataExchangeJobError#Details
   */
  readonly details?: DataExchangeDetails;

  /**
   * @schema DataExchangeJobError#LimitName
   */
  readonly limitName?: string;

  /**
   * @schema DataExchangeJobError#LimitValue
   */
  readonly limitValue?: number;

  /**
   * @schema DataExchangeJobError#Message
   */
  readonly message?: string;

  /**
   * @schema DataExchangeJobError#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema DataExchangeJobError#ResourceType
   */
  readonly resourceType?: string;

}

/**
 * Converts an object of type 'DataExchangeJobError' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataExchangeJobError(obj: DataExchangeJobError | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Code': obj.code,
    'Details': toJson_DataExchangeDetails(obj.details),
    'LimitName': obj.limitName,
    'LimitValue': obj.limitValue,
    'Message': obj.message,
    'ResourceId': obj.resourceId,
    'ResourceType': obj.resourceType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataExchangeAssetDetails
 */
export interface DataExchangeAssetDetails {
  /**
   * @schema DataExchangeAssetDetails#S3SnapshotAsset
   */
  readonly s3SnapshotAsset?: DataExchangeS3SnapshotAsset;

}

/**
 * Converts an object of type 'DataExchangeAssetDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataExchangeAssetDetails(obj: DataExchangeAssetDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S3SnapshotAsset': toJson_DataExchangeS3SnapshotAsset(obj.s3SnapshotAsset),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataExchangeRevisionEntry
 */
export interface DataExchangeRevisionEntry {
  /**
   * @schema DataExchangeRevisionEntry#Arn
   */
  readonly arn?: string;

  /**
   * @schema DataExchangeRevisionEntry#Comment
   */
  readonly comment?: string;

  /**
   * @schema DataExchangeRevisionEntry#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema DataExchangeRevisionEntry#DataSetId
   */
  readonly dataSetId?: string;

  /**
   * @schema DataExchangeRevisionEntry#Finalized
   */
  readonly finalized?: boolean;

  /**
   * @schema DataExchangeRevisionEntry#Id
   */
  readonly id?: string;

  /**
   * @schema DataExchangeRevisionEntry#SourceId
   */
  readonly sourceId?: string;

  /**
   * @schema DataExchangeRevisionEntry#UpdatedAt
   */
  readonly updatedAt?: string;

}

/**
 * Converts an object of type 'DataExchangeRevisionEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataExchangeRevisionEntry(obj: DataExchangeRevisionEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Comment': obj.comment,
    'CreatedAt': obj.createdAt,
    'DataSetId': obj.dataSetId,
    'Finalized': obj.finalized,
    'Id': obj.id,
    'SourceId': obj.sourceId,
    'UpdatedAt': obj.updatedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataExchangeDataSetEntry
 */
export interface DataExchangeDataSetEntry {
  /**
   * @schema DataExchangeDataSetEntry#Arn
   */
  readonly arn?: string;

  /**
   * @schema DataExchangeDataSetEntry#AssetType
   */
  readonly assetType?: string;

  /**
   * @schema DataExchangeDataSetEntry#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema DataExchangeDataSetEntry#Description
   */
  readonly description?: string;

  /**
   * @schema DataExchangeDataSetEntry#Id
   */
  readonly id?: string;

  /**
   * @schema DataExchangeDataSetEntry#Name
   */
  readonly name?: string;

  /**
   * @schema DataExchangeDataSetEntry#Origin
   */
  readonly origin?: string;

  /**
   * @schema DataExchangeDataSetEntry#OriginDetails
   */
  readonly originDetails?: DataExchangeOriginDetails;

  /**
   * @schema DataExchangeDataSetEntry#SourceId
   */
  readonly sourceId?: string;

  /**
   * @schema DataExchangeDataSetEntry#UpdatedAt
   */
  readonly updatedAt?: string;

}

/**
 * Converts an object of type 'DataExchangeDataSetEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataExchangeDataSetEntry(obj: DataExchangeDataSetEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'AssetType': obj.assetType,
    'CreatedAt': obj.createdAt,
    'Description': obj.description,
    'Id': obj.id,
    'Name': obj.name,
    'Origin': obj.origin,
    'OriginDetails': toJson_DataExchangeOriginDetails(obj.originDetails),
    'SourceId': obj.sourceId,
    'UpdatedAt': obj.updatedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataExchangeJobEntry
 */
export interface DataExchangeJobEntry {
  /**
   * @schema DataExchangeJobEntry#Arn
   */
  readonly arn?: string;

  /**
   * @schema DataExchangeJobEntry#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema DataExchangeJobEntry#Details
   */
  readonly details?: DataExchangeResponseDetails;

  /**
   * @schema DataExchangeJobEntry#Errors
   */
  readonly errors?: DataExchangeJobError[];

  /**
   * @schema DataExchangeJobEntry#Id
   */
  readonly id?: string;

  /**
   * @schema DataExchangeJobEntry#State
   */
  readonly state?: string;

  /**
   * @schema DataExchangeJobEntry#Type
   */
  readonly type?: string;

  /**
   * @schema DataExchangeJobEntry#UpdatedAt
   */
  readonly updatedAt?: string;

}

/**
 * Converts an object of type 'DataExchangeJobEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataExchangeJobEntry(obj: DataExchangeJobEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CreatedAt': obj.createdAt,
    'Details': toJson_DataExchangeResponseDetails(obj.details),
    'Errors': obj.errors?.map(y => toJson_DataExchangeJobError(y)),
    'Id': obj.id,
    'State': obj.state,
    'Type': obj.type,
    'UpdatedAt': obj.updatedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataExchangeAssetEntry
 */
export interface DataExchangeAssetEntry {
  /**
   * @schema DataExchangeAssetEntry#Arn
   */
  readonly arn?: string;

  /**
   * @schema DataExchangeAssetEntry#AssetDetails
   */
  readonly assetDetails?: DataExchangeAssetDetails;

  /**
   * @schema DataExchangeAssetEntry#AssetType
   */
  readonly assetType?: string;

  /**
   * @schema DataExchangeAssetEntry#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema DataExchangeAssetEntry#DataSetId
   */
  readonly dataSetId?: string;

  /**
   * @schema DataExchangeAssetEntry#Id
   */
  readonly id?: string;

  /**
   * @schema DataExchangeAssetEntry#Name
   */
  readonly name?: string;

  /**
   * @schema DataExchangeAssetEntry#RevisionId
   */
  readonly revisionId?: string;

  /**
   * @schema DataExchangeAssetEntry#SourceId
   */
  readonly sourceId?: string;

  /**
   * @schema DataExchangeAssetEntry#UpdatedAt
   */
  readonly updatedAt?: string;

}

/**
 * Converts an object of type 'DataExchangeAssetEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataExchangeAssetEntry(obj: DataExchangeAssetEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'AssetDetails': toJson_DataExchangeAssetDetails(obj.assetDetails),
    'AssetType': obj.assetType,
    'CreatedAt': obj.createdAt,
    'DataSetId': obj.dataSetId,
    'Id': obj.id,
    'Name': obj.name,
    'RevisionId': obj.revisionId,
    'SourceId': obj.sourceId,
    'UpdatedAt': obj.updatedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataExchangeExportAssetToSignedUrlRequestDetails
 */
export interface DataExchangeExportAssetToSignedUrlRequestDetails {
  /**
   * @schema DataExchangeExportAssetToSignedUrlRequestDetails#AssetId
   */
  readonly assetId?: string;

  /**
   * @schema DataExchangeExportAssetToSignedUrlRequestDetails#DataSetId
   */
  readonly dataSetId?: string;

  /**
   * @schema DataExchangeExportAssetToSignedUrlRequestDetails#RevisionId
   */
  readonly revisionId?: string;

}

/**
 * Converts an object of type 'DataExchangeExportAssetToSignedUrlRequestDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataExchangeExportAssetToSignedUrlRequestDetails(obj: DataExchangeExportAssetToSignedUrlRequestDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssetId': obj.assetId,
    'DataSetId': obj.dataSetId,
    'RevisionId': obj.revisionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataExchangeExportAssetsToS3RequestDetails
 */
export interface DataExchangeExportAssetsToS3RequestDetails {
  /**
   * @schema DataExchangeExportAssetsToS3RequestDetails#AssetDestinations
   */
  readonly assetDestinations?: DataExchangeAssetDestinationEntry[];

  /**
   * @schema DataExchangeExportAssetsToS3RequestDetails#DataSetId
   */
  readonly dataSetId?: string;

  /**
   * @schema DataExchangeExportAssetsToS3RequestDetails#Encryption
   */
  readonly encryption?: DataExchangeExportServerSideEncryption;

  /**
   * @schema DataExchangeExportAssetsToS3RequestDetails#RevisionId
   */
  readonly revisionId?: string;

}

/**
 * Converts an object of type 'DataExchangeExportAssetsToS3RequestDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataExchangeExportAssetsToS3RequestDetails(obj: DataExchangeExportAssetsToS3RequestDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssetDestinations': obj.assetDestinations?.map(y => toJson_DataExchangeAssetDestinationEntry(y)),
    'DataSetId': obj.dataSetId,
    'Encryption': toJson_DataExchangeExportServerSideEncryption(obj.encryption),
    'RevisionId': obj.revisionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataExchangeExportRevisionsToS3RequestDetails
 */
export interface DataExchangeExportRevisionsToS3RequestDetails {
  /**
   * @schema DataExchangeExportRevisionsToS3RequestDetails#DataSetId
   */
  readonly dataSetId?: string;

  /**
   * @schema DataExchangeExportRevisionsToS3RequestDetails#Encryption
   */
  readonly encryption?: DataExchangeExportServerSideEncryption;

  /**
   * @schema DataExchangeExportRevisionsToS3RequestDetails#RevisionDestinations
   */
  readonly revisionDestinations?: DataExchangeRevisionDestinationEntry[];

}

/**
 * Converts an object of type 'DataExchangeExportRevisionsToS3RequestDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataExchangeExportRevisionsToS3RequestDetails(obj: DataExchangeExportRevisionsToS3RequestDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataSetId': obj.dataSetId,
    'Encryption': toJson_DataExchangeExportServerSideEncryption(obj.encryption),
    'RevisionDestinations': obj.revisionDestinations?.map(y => toJson_DataExchangeRevisionDestinationEntry(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataExchangeImportAssetFromSignedUrlRequestDetails
 */
export interface DataExchangeImportAssetFromSignedUrlRequestDetails {
  /**
   * @schema DataExchangeImportAssetFromSignedUrlRequestDetails#AssetName
   */
  readonly assetName?: string;

  /**
   * @schema DataExchangeImportAssetFromSignedUrlRequestDetails#DataSetId
   */
  readonly dataSetId?: string;

  /**
   * @schema DataExchangeImportAssetFromSignedUrlRequestDetails#Md5Hash
   */
  readonly md5Hash?: string;

  /**
   * @schema DataExchangeImportAssetFromSignedUrlRequestDetails#RevisionId
   */
  readonly revisionId?: string;

}

/**
 * Converts an object of type 'DataExchangeImportAssetFromSignedUrlRequestDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataExchangeImportAssetFromSignedUrlRequestDetails(obj: DataExchangeImportAssetFromSignedUrlRequestDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssetName': obj.assetName,
    'DataSetId': obj.dataSetId,
    'Md5Hash': obj.md5Hash,
    'RevisionId': obj.revisionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataExchangeImportAssetsFromS3RequestDetails
 */
export interface DataExchangeImportAssetsFromS3RequestDetails {
  /**
   * @schema DataExchangeImportAssetsFromS3RequestDetails#AssetSources
   */
  readonly assetSources?: DataExchangeAssetSourceEntry[];

  /**
   * @schema DataExchangeImportAssetsFromS3RequestDetails#DataSetId
   */
  readonly dataSetId?: string;

  /**
   * @schema DataExchangeImportAssetsFromS3RequestDetails#RevisionId
   */
  readonly revisionId?: string;

}

/**
 * Converts an object of type 'DataExchangeImportAssetsFromS3RequestDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataExchangeImportAssetsFromS3RequestDetails(obj: DataExchangeImportAssetsFromS3RequestDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssetSources': obj.assetSources?.map(y => toJson_DataExchangeAssetSourceEntry(y)),
    'DataSetId': obj.dataSetId,
    'RevisionId': obj.revisionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataExchangeExportAssetToSignedUrlResponseDetails
 */
export interface DataExchangeExportAssetToSignedUrlResponseDetails {
  /**
   * @schema DataExchangeExportAssetToSignedUrlResponseDetails#AssetId
   */
  readonly assetId?: string;

  /**
   * @schema DataExchangeExportAssetToSignedUrlResponseDetails#DataSetId
   */
  readonly dataSetId?: string;

  /**
   * @schema DataExchangeExportAssetToSignedUrlResponseDetails#RevisionId
   */
  readonly revisionId?: string;

  /**
   * @schema DataExchangeExportAssetToSignedUrlResponseDetails#SignedUrl
   */
  readonly signedUrl?: string;

  /**
   * @schema DataExchangeExportAssetToSignedUrlResponseDetails#SignedUrlExpiresAt
   */
  readonly signedUrlExpiresAt?: string;

}

/**
 * Converts an object of type 'DataExchangeExportAssetToSignedUrlResponseDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataExchangeExportAssetToSignedUrlResponseDetails(obj: DataExchangeExportAssetToSignedUrlResponseDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssetId': obj.assetId,
    'DataSetId': obj.dataSetId,
    'RevisionId': obj.revisionId,
    'SignedUrl': obj.signedUrl,
    'SignedUrlExpiresAt': obj.signedUrlExpiresAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataExchangeExportAssetsToS3ResponseDetails
 */
export interface DataExchangeExportAssetsToS3ResponseDetails {
  /**
   * @schema DataExchangeExportAssetsToS3ResponseDetails#AssetDestinations
   */
  readonly assetDestinations?: DataExchangeAssetDestinationEntry[];

  /**
   * @schema DataExchangeExportAssetsToS3ResponseDetails#DataSetId
   */
  readonly dataSetId?: string;

  /**
   * @schema DataExchangeExportAssetsToS3ResponseDetails#Encryption
   */
  readonly encryption?: DataExchangeExportServerSideEncryption;

  /**
   * @schema DataExchangeExportAssetsToS3ResponseDetails#RevisionId
   */
  readonly revisionId?: string;

}

/**
 * Converts an object of type 'DataExchangeExportAssetsToS3ResponseDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataExchangeExportAssetsToS3ResponseDetails(obj: DataExchangeExportAssetsToS3ResponseDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssetDestinations': obj.assetDestinations?.map(y => toJson_DataExchangeAssetDestinationEntry(y)),
    'DataSetId': obj.dataSetId,
    'Encryption': toJson_DataExchangeExportServerSideEncryption(obj.encryption),
    'RevisionId': obj.revisionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataExchangeExportRevisionsToS3ResponseDetails
 */
export interface DataExchangeExportRevisionsToS3ResponseDetails {
  /**
   * @schema DataExchangeExportRevisionsToS3ResponseDetails#DataSetId
   */
  readonly dataSetId?: string;

  /**
   * @schema DataExchangeExportRevisionsToS3ResponseDetails#Encryption
   */
  readonly encryption?: DataExchangeExportServerSideEncryption;

  /**
   * @schema DataExchangeExportRevisionsToS3ResponseDetails#RevisionDestinations
   */
  readonly revisionDestinations?: DataExchangeRevisionDestinationEntry[];

}

/**
 * Converts an object of type 'DataExchangeExportRevisionsToS3ResponseDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataExchangeExportRevisionsToS3ResponseDetails(obj: DataExchangeExportRevisionsToS3ResponseDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataSetId': obj.dataSetId,
    'Encryption': toJson_DataExchangeExportServerSideEncryption(obj.encryption),
    'RevisionDestinations': obj.revisionDestinations?.map(y => toJson_DataExchangeRevisionDestinationEntry(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataExchangeImportAssetFromSignedUrlResponseDetails
 */
export interface DataExchangeImportAssetFromSignedUrlResponseDetails {
  /**
   * @schema DataExchangeImportAssetFromSignedUrlResponseDetails#AssetName
   */
  readonly assetName?: string;

  /**
   * @schema DataExchangeImportAssetFromSignedUrlResponseDetails#DataSetId
   */
  readonly dataSetId?: string;

  /**
   * @schema DataExchangeImportAssetFromSignedUrlResponseDetails#Md5Hash
   */
  readonly md5Hash?: string;

  /**
   * @schema DataExchangeImportAssetFromSignedUrlResponseDetails#RevisionId
   */
  readonly revisionId?: string;

  /**
   * @schema DataExchangeImportAssetFromSignedUrlResponseDetails#SignedUrl
   */
  readonly signedUrl?: string;

  /**
   * @schema DataExchangeImportAssetFromSignedUrlResponseDetails#SignedUrlExpiresAt
   */
  readonly signedUrlExpiresAt?: string;

}

/**
 * Converts an object of type 'DataExchangeImportAssetFromSignedUrlResponseDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataExchangeImportAssetFromSignedUrlResponseDetails(obj: DataExchangeImportAssetFromSignedUrlResponseDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssetName': obj.assetName,
    'DataSetId': obj.dataSetId,
    'Md5Hash': obj.md5Hash,
    'RevisionId': obj.revisionId,
    'SignedUrl': obj.signedUrl,
    'SignedUrlExpiresAt': obj.signedUrlExpiresAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataExchangeImportAssetsFromS3ResponseDetails
 */
export interface DataExchangeImportAssetsFromS3ResponseDetails {
  /**
   * @schema DataExchangeImportAssetsFromS3ResponseDetails#AssetSources
   */
  readonly assetSources?: DataExchangeAssetSourceEntry[];

  /**
   * @schema DataExchangeImportAssetsFromS3ResponseDetails#DataSetId
   */
  readonly dataSetId?: string;

  /**
   * @schema DataExchangeImportAssetsFromS3ResponseDetails#RevisionId
   */
  readonly revisionId?: string;

}

/**
 * Converts an object of type 'DataExchangeImportAssetsFromS3ResponseDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataExchangeImportAssetsFromS3ResponseDetails(obj: DataExchangeImportAssetsFromS3ResponseDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssetSources': obj.assetSources?.map(y => toJson_DataExchangeAssetSourceEntry(y)),
    'DataSetId': obj.dataSetId,
    'RevisionId': obj.revisionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataExchangeDetails
 */
export interface DataExchangeDetails {
  /**
   * @schema DataExchangeDetails#ImportAssetFromSignedUrlJobErrorDetails
   */
  readonly importAssetFromSignedUrlJobErrorDetails?: DataExchangeImportAssetFromSignedUrlJobErrorDetails;

  /**
   * @schema DataExchangeDetails#ImportAssetsFromS3JobErrorDetails
   */
  readonly importAssetsFromS3JobErrorDetails?: DataExchangeAssetSourceEntry[];

}

/**
 * Converts an object of type 'DataExchangeDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataExchangeDetails(obj: DataExchangeDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ImportAssetFromSignedUrlJobErrorDetails': toJson_DataExchangeImportAssetFromSignedUrlJobErrorDetails(obj.importAssetFromSignedUrlJobErrorDetails),
    'ImportAssetsFromS3JobErrorDetails': obj.importAssetsFromS3JobErrorDetails?.map(y => toJson_DataExchangeAssetSourceEntry(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataExchangeS3SnapshotAsset
 */
export interface DataExchangeS3SnapshotAsset {
  /**
   * @schema DataExchangeS3SnapshotAsset#Size
   */
  readonly size?: number;

}

/**
 * Converts an object of type 'DataExchangeS3SnapshotAsset' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataExchangeS3SnapshotAsset(obj: DataExchangeS3SnapshotAsset | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Size': obj.size,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataExchangeAssetDestinationEntry
 */
export interface DataExchangeAssetDestinationEntry {
  /**
   * @schema DataExchangeAssetDestinationEntry#AssetId
   */
  readonly assetId?: string;

  /**
   * @schema DataExchangeAssetDestinationEntry#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema DataExchangeAssetDestinationEntry#Key
   */
  readonly key?: string;

}

/**
 * Converts an object of type 'DataExchangeAssetDestinationEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataExchangeAssetDestinationEntry(obj: DataExchangeAssetDestinationEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssetId': obj.assetId,
    'Bucket': obj.bucket,
    'Key': obj.key,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataExchangeExportServerSideEncryption
 */
export interface DataExchangeExportServerSideEncryption {
  /**
   * @schema DataExchangeExportServerSideEncryption#KmsKeyArn
   */
  readonly kmsKeyArn?: string;

  /**
   * @schema DataExchangeExportServerSideEncryption#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'DataExchangeExportServerSideEncryption' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataExchangeExportServerSideEncryption(obj: DataExchangeExportServerSideEncryption | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KmsKeyArn': obj.kmsKeyArn,
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataExchangeRevisionDestinationEntry
 */
export interface DataExchangeRevisionDestinationEntry {
  /**
   * @schema DataExchangeRevisionDestinationEntry#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema DataExchangeRevisionDestinationEntry#KeyPattern
   */
  readonly keyPattern?: string;

  /**
   * @schema DataExchangeRevisionDestinationEntry#RevisionId
   */
  readonly revisionId?: string;

}

/**
 * Converts an object of type 'DataExchangeRevisionDestinationEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataExchangeRevisionDestinationEntry(obj: DataExchangeRevisionDestinationEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'KeyPattern': obj.keyPattern,
    'RevisionId': obj.revisionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataExchangeAssetSourceEntry
 */
export interface DataExchangeAssetSourceEntry {
  /**
   * @schema DataExchangeAssetSourceEntry#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema DataExchangeAssetSourceEntry#Key
   */
  readonly key?: string;

}

/**
 * Converts an object of type 'DataExchangeAssetSourceEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataExchangeAssetSourceEntry(obj: DataExchangeAssetSourceEntry | undefined): Record<string, any> | undefined {
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
 * @schema DataExchangeImportAssetFromSignedUrlJobErrorDetails
 */
export interface DataExchangeImportAssetFromSignedUrlJobErrorDetails {
  /**
   * @schema DataExchangeImportAssetFromSignedUrlJobErrorDetails#AssetName
   */
  readonly assetName?: string;

}

/**
 * Converts an object of type 'DataExchangeImportAssetFromSignedUrlJobErrorDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataExchangeImportAssetFromSignedUrlJobErrorDetails(obj: DataExchangeImportAssetFromSignedUrlJobErrorDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssetName': obj.assetName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
