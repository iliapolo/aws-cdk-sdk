/**
 * @schema CognitoSyncBulkPublishRequest
 */
export interface CognitoSyncBulkPublishRequest {
  /**
   * @schema CognitoSyncBulkPublishRequest#IdentityPoolId
   */
  readonly identityPoolId?: string;

}

/**
 * Converts an object of type 'CognitoSyncBulkPublishRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoSyncBulkPublishRequest(obj: CognitoSyncBulkPublishRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityPoolId': obj.identityPoolId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoSyncBulkPublishResponse
 */
export interface CognitoSyncBulkPublishResponse {
  /**
   * @schema CognitoSyncBulkPublishResponse#IdentityPoolId
   */
  readonly identityPoolId?: string;

}

/**
 * Converts an object of type 'CognitoSyncBulkPublishResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoSyncBulkPublishResponse(obj: CognitoSyncBulkPublishResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityPoolId': obj.identityPoolId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoSyncDeleteDatasetRequest
 */
export interface CognitoSyncDeleteDatasetRequest {
  /**
   * @schema CognitoSyncDeleteDatasetRequest#IdentityPoolId
   */
  readonly identityPoolId?: string;

  /**
   * @schema CognitoSyncDeleteDatasetRequest#IdentityId
   */
  readonly identityId?: string;

  /**
   * @schema CognitoSyncDeleteDatasetRequest#DatasetName
   */
  readonly datasetName?: string;

}

/**
 * Converts an object of type 'CognitoSyncDeleteDatasetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoSyncDeleteDatasetRequest(obj: CognitoSyncDeleteDatasetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityPoolId': obj.identityPoolId,
    'IdentityId': obj.identityId,
    'DatasetName': obj.datasetName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoSyncDeleteDatasetResponse
 */
export interface CognitoSyncDeleteDatasetResponse {
  /**
   * @schema CognitoSyncDeleteDatasetResponse#Dataset
   */
  readonly dataset?: CognitoSyncDataset;

}

/**
 * Converts an object of type 'CognitoSyncDeleteDatasetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoSyncDeleteDatasetResponse(obj: CognitoSyncDeleteDatasetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Dataset': toJson_CognitoSyncDataset(obj.dataset),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoSyncDescribeDatasetRequest
 */
export interface CognitoSyncDescribeDatasetRequest {
  /**
   * @schema CognitoSyncDescribeDatasetRequest#IdentityPoolId
   */
  readonly identityPoolId?: string;

  /**
   * @schema CognitoSyncDescribeDatasetRequest#IdentityId
   */
  readonly identityId?: string;

  /**
   * @schema CognitoSyncDescribeDatasetRequest#DatasetName
   */
  readonly datasetName?: string;

}

/**
 * Converts an object of type 'CognitoSyncDescribeDatasetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoSyncDescribeDatasetRequest(obj: CognitoSyncDescribeDatasetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityPoolId': obj.identityPoolId,
    'IdentityId': obj.identityId,
    'DatasetName': obj.datasetName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoSyncDescribeDatasetResponse
 */
export interface CognitoSyncDescribeDatasetResponse {
  /**
   * @schema CognitoSyncDescribeDatasetResponse#Dataset
   */
  readonly dataset?: CognitoSyncDataset;

}

/**
 * Converts an object of type 'CognitoSyncDescribeDatasetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoSyncDescribeDatasetResponse(obj: CognitoSyncDescribeDatasetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Dataset': toJson_CognitoSyncDataset(obj.dataset),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoSyncDescribeIdentityPoolUsageRequest
 */
export interface CognitoSyncDescribeIdentityPoolUsageRequest {
  /**
   * @schema CognitoSyncDescribeIdentityPoolUsageRequest#IdentityPoolId
   */
  readonly identityPoolId?: string;

}

/**
 * Converts an object of type 'CognitoSyncDescribeIdentityPoolUsageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoSyncDescribeIdentityPoolUsageRequest(obj: CognitoSyncDescribeIdentityPoolUsageRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityPoolId': obj.identityPoolId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoSyncDescribeIdentityPoolUsageResponse
 */
export interface CognitoSyncDescribeIdentityPoolUsageResponse {
  /**
   * @schema CognitoSyncDescribeIdentityPoolUsageResponse#IdentityPoolUsage
   */
  readonly identityPoolUsage?: CognitoSyncIdentityPoolUsage;

}

/**
 * Converts an object of type 'CognitoSyncDescribeIdentityPoolUsageResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoSyncDescribeIdentityPoolUsageResponse(obj: CognitoSyncDescribeIdentityPoolUsageResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityPoolUsage': toJson_CognitoSyncIdentityPoolUsage(obj.identityPoolUsage),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoSyncDescribeIdentityUsageRequest
 */
export interface CognitoSyncDescribeIdentityUsageRequest {
  /**
   * @schema CognitoSyncDescribeIdentityUsageRequest#IdentityPoolId
   */
  readonly identityPoolId?: string;

  /**
   * @schema CognitoSyncDescribeIdentityUsageRequest#IdentityId
   */
  readonly identityId?: string;

}

/**
 * Converts an object of type 'CognitoSyncDescribeIdentityUsageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoSyncDescribeIdentityUsageRequest(obj: CognitoSyncDescribeIdentityUsageRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityPoolId': obj.identityPoolId,
    'IdentityId': obj.identityId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoSyncDescribeIdentityUsageResponse
 */
export interface CognitoSyncDescribeIdentityUsageResponse {
  /**
   * @schema CognitoSyncDescribeIdentityUsageResponse#IdentityUsage
   */
  readonly identityUsage?: CognitoSyncIdentityUsage;

}

/**
 * Converts an object of type 'CognitoSyncDescribeIdentityUsageResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoSyncDescribeIdentityUsageResponse(obj: CognitoSyncDescribeIdentityUsageResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityUsage': toJson_CognitoSyncIdentityUsage(obj.identityUsage),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoSyncGetBulkPublishDetailsRequest
 */
export interface CognitoSyncGetBulkPublishDetailsRequest {
  /**
   * @schema CognitoSyncGetBulkPublishDetailsRequest#IdentityPoolId
   */
  readonly identityPoolId?: string;

}

/**
 * Converts an object of type 'CognitoSyncGetBulkPublishDetailsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoSyncGetBulkPublishDetailsRequest(obj: CognitoSyncGetBulkPublishDetailsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityPoolId': obj.identityPoolId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoSyncGetBulkPublishDetailsResponse
 */
export interface CognitoSyncGetBulkPublishDetailsResponse {
  /**
   * @schema CognitoSyncGetBulkPublishDetailsResponse#IdentityPoolId
   */
  readonly identityPoolId?: string;

  /**
   * @schema CognitoSyncGetBulkPublishDetailsResponse#BulkPublishStartTime
   */
  readonly bulkPublishStartTime?: string;

  /**
   * @schema CognitoSyncGetBulkPublishDetailsResponse#BulkPublishCompleteTime
   */
  readonly bulkPublishCompleteTime?: string;

  /**
   * @schema CognitoSyncGetBulkPublishDetailsResponse#BulkPublishStatus
   */
  readonly bulkPublishStatus?: string;

  /**
   * @schema CognitoSyncGetBulkPublishDetailsResponse#FailureMessage
   */
  readonly failureMessage?: string;

}

/**
 * Converts an object of type 'CognitoSyncGetBulkPublishDetailsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoSyncGetBulkPublishDetailsResponse(obj: CognitoSyncGetBulkPublishDetailsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityPoolId': obj.identityPoolId,
    'BulkPublishStartTime': obj.bulkPublishStartTime,
    'BulkPublishCompleteTime': obj.bulkPublishCompleteTime,
    'BulkPublishStatus': obj.bulkPublishStatus,
    'FailureMessage': obj.failureMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoSyncGetCognitoEventsRequest
 */
export interface CognitoSyncGetCognitoEventsRequest {
  /**
   * @schema CognitoSyncGetCognitoEventsRequest#IdentityPoolId
   */
  readonly identityPoolId?: string;

}

/**
 * Converts an object of type 'CognitoSyncGetCognitoEventsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoSyncGetCognitoEventsRequest(obj: CognitoSyncGetCognitoEventsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityPoolId': obj.identityPoolId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoSyncGetCognitoEventsResponse
 */
export interface CognitoSyncGetCognitoEventsResponse {
  /**
   * @schema CognitoSyncGetCognitoEventsResponse#Events
   */
  readonly events?: { [key: string]: string };

}

/**
 * Converts an object of type 'CognitoSyncGetCognitoEventsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoSyncGetCognitoEventsResponse(obj: CognitoSyncGetCognitoEventsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Events': ((obj.events) === undefined) ? undefined : (Object.entries(obj.events).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoSyncGetIdentityPoolConfigurationRequest
 */
export interface CognitoSyncGetIdentityPoolConfigurationRequest {
  /**
   * @schema CognitoSyncGetIdentityPoolConfigurationRequest#IdentityPoolId
   */
  readonly identityPoolId?: string;

}

/**
 * Converts an object of type 'CognitoSyncGetIdentityPoolConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoSyncGetIdentityPoolConfigurationRequest(obj: CognitoSyncGetIdentityPoolConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityPoolId': obj.identityPoolId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoSyncGetIdentityPoolConfigurationResponse
 */
export interface CognitoSyncGetIdentityPoolConfigurationResponse {
  /**
   * @schema CognitoSyncGetIdentityPoolConfigurationResponse#IdentityPoolId
   */
  readonly identityPoolId?: string;

  /**
   * @schema CognitoSyncGetIdentityPoolConfigurationResponse#PushSync
   */
  readonly pushSync?: CognitoSyncPushSync;

  /**
   * @schema CognitoSyncGetIdentityPoolConfigurationResponse#CognitoStreams
   */
  readonly cognitoStreams?: CognitoSyncCognitoStreams;

}

/**
 * Converts an object of type 'CognitoSyncGetIdentityPoolConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoSyncGetIdentityPoolConfigurationResponse(obj: CognitoSyncGetIdentityPoolConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityPoolId': obj.identityPoolId,
    'PushSync': toJson_CognitoSyncPushSync(obj.pushSync),
    'CognitoStreams': toJson_CognitoSyncCognitoStreams(obj.cognitoStreams),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoSyncListDatasetsRequest
 */
export interface CognitoSyncListDatasetsRequest {
  /**
   * @schema CognitoSyncListDatasetsRequest#IdentityPoolId
   */
  readonly identityPoolId?: string;

  /**
   * @schema CognitoSyncListDatasetsRequest#IdentityId
   */
  readonly identityId?: string;

  /**
   * @schema CognitoSyncListDatasetsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CognitoSyncListDatasetsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'CognitoSyncListDatasetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoSyncListDatasetsRequest(obj: CognitoSyncListDatasetsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityPoolId': obj.identityPoolId,
    'IdentityId': obj.identityId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoSyncListDatasetsResponse
 */
export interface CognitoSyncListDatasetsResponse {
  /**
   * @schema CognitoSyncListDatasetsResponse#Datasets
   */
  readonly datasets?: CognitoSyncDataset[];

  /**
   * @schema CognitoSyncListDatasetsResponse#Count
   */
  readonly count?: number;

  /**
   * @schema CognitoSyncListDatasetsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CognitoSyncListDatasetsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoSyncListDatasetsResponse(obj: CognitoSyncListDatasetsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Datasets': obj.datasets?.map(y => toJson_CognitoSyncDataset(y)),
    'Count': obj.count,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoSyncListIdentityPoolUsageRequest
 */
export interface CognitoSyncListIdentityPoolUsageRequest {
  /**
   * @schema CognitoSyncListIdentityPoolUsageRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CognitoSyncListIdentityPoolUsageRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'CognitoSyncListIdentityPoolUsageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoSyncListIdentityPoolUsageRequest(obj: CognitoSyncListIdentityPoolUsageRequest | undefined): Record<string, any> | undefined {
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
 * @schema CognitoSyncListIdentityPoolUsageResponse
 */
export interface CognitoSyncListIdentityPoolUsageResponse {
  /**
   * @schema CognitoSyncListIdentityPoolUsageResponse#IdentityPoolUsages
   */
  readonly identityPoolUsages?: CognitoSyncIdentityPoolUsage[];

  /**
   * @schema CognitoSyncListIdentityPoolUsageResponse#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CognitoSyncListIdentityPoolUsageResponse#Count
   */
  readonly count?: number;

  /**
   * @schema CognitoSyncListIdentityPoolUsageResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CognitoSyncListIdentityPoolUsageResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoSyncListIdentityPoolUsageResponse(obj: CognitoSyncListIdentityPoolUsageResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityPoolUsages': obj.identityPoolUsages?.map(y => toJson_CognitoSyncIdentityPoolUsage(y)),
    'MaxResults': obj.maxResults,
    'Count': obj.count,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoSyncListRecordsRequest
 */
export interface CognitoSyncListRecordsRequest {
  /**
   * @schema CognitoSyncListRecordsRequest#IdentityPoolId
   */
  readonly identityPoolId?: string;

  /**
   * @schema CognitoSyncListRecordsRequest#IdentityId
   */
  readonly identityId?: string;

  /**
   * @schema CognitoSyncListRecordsRequest#DatasetName
   */
  readonly datasetName?: string;

  /**
   * @schema CognitoSyncListRecordsRequest#LastSyncCount
   */
  readonly lastSyncCount?: number;

  /**
   * @schema CognitoSyncListRecordsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CognitoSyncListRecordsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CognitoSyncListRecordsRequest#SyncSessionToken
   */
  readonly syncSessionToken?: string;

}

/**
 * Converts an object of type 'CognitoSyncListRecordsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoSyncListRecordsRequest(obj: CognitoSyncListRecordsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityPoolId': obj.identityPoolId,
    'IdentityId': obj.identityId,
    'DatasetName': obj.datasetName,
    'LastSyncCount': obj.lastSyncCount,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'SyncSessionToken': obj.syncSessionToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoSyncListRecordsResponse
 */
export interface CognitoSyncListRecordsResponse {
  /**
   * @schema CognitoSyncListRecordsResponse#Records
   */
  readonly records?: CognitoSyncRecord[];

  /**
   * @schema CognitoSyncListRecordsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CognitoSyncListRecordsResponse#Count
   */
  readonly count?: number;

  /**
   * @schema CognitoSyncListRecordsResponse#DatasetSyncCount
   */
  readonly datasetSyncCount?: number;

  /**
   * @schema CognitoSyncListRecordsResponse#LastModifiedBy
   */
  readonly lastModifiedBy?: string;

  /**
   * @schema CognitoSyncListRecordsResponse#MergedDatasetNames
   */
  readonly mergedDatasetNames?: string[];

  /**
   * @schema CognitoSyncListRecordsResponse#DatasetExists
   */
  readonly datasetExists?: boolean;

  /**
   * @schema CognitoSyncListRecordsResponse#DatasetDeletedAfterRequestedSyncCount
   */
  readonly datasetDeletedAfterRequestedSyncCount?: boolean;

  /**
   * @schema CognitoSyncListRecordsResponse#SyncSessionToken
   */
  readonly syncSessionToken?: string;

}

/**
 * Converts an object of type 'CognitoSyncListRecordsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoSyncListRecordsResponse(obj: CognitoSyncListRecordsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Records': obj.records?.map(y => toJson_CognitoSyncRecord(y)),
    'NextToken': obj.nextToken,
    'Count': obj.count,
    'DatasetSyncCount': obj.datasetSyncCount,
    'LastModifiedBy': obj.lastModifiedBy,
    'MergedDatasetNames': obj.mergedDatasetNames?.map(y => y),
    'DatasetExists': obj.datasetExists,
    'DatasetDeletedAfterRequestedSyncCount': obj.datasetDeletedAfterRequestedSyncCount,
    'SyncSessionToken': obj.syncSessionToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoSyncRegisterDeviceRequest
 */
export interface CognitoSyncRegisterDeviceRequest {
  /**
   * @schema CognitoSyncRegisterDeviceRequest#IdentityPoolId
   */
  readonly identityPoolId?: string;

  /**
   * @schema CognitoSyncRegisterDeviceRequest#IdentityId
   */
  readonly identityId?: string;

  /**
   * @schema CognitoSyncRegisterDeviceRequest#Platform
   */
  readonly platform?: string;

  /**
   * @schema CognitoSyncRegisterDeviceRequest#Token
   */
  readonly token?: string;

}

/**
 * Converts an object of type 'CognitoSyncRegisterDeviceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoSyncRegisterDeviceRequest(obj: CognitoSyncRegisterDeviceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityPoolId': obj.identityPoolId,
    'IdentityId': obj.identityId,
    'Platform': obj.platform,
    'Token': obj.token,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoSyncRegisterDeviceResponse
 */
export interface CognitoSyncRegisterDeviceResponse {
  /**
   * @schema CognitoSyncRegisterDeviceResponse#DeviceId
   */
  readonly deviceId?: string;

}

/**
 * Converts an object of type 'CognitoSyncRegisterDeviceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoSyncRegisterDeviceResponse(obj: CognitoSyncRegisterDeviceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeviceId': obj.deviceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoSyncSetCognitoEventsRequest
 */
export interface CognitoSyncSetCognitoEventsRequest {
  /**
   * @schema CognitoSyncSetCognitoEventsRequest#IdentityPoolId
   */
  readonly identityPoolId?: string;

  /**
   * @schema CognitoSyncSetCognitoEventsRequest#Events
   */
  readonly events?: { [key: string]: string };

}

/**
 * Converts an object of type 'CognitoSyncSetCognitoEventsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoSyncSetCognitoEventsRequest(obj: CognitoSyncSetCognitoEventsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityPoolId': obj.identityPoolId,
    'Events': ((obj.events) === undefined) ? undefined : (Object.entries(obj.events).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoSyncSetIdentityPoolConfigurationRequest
 */
export interface CognitoSyncSetIdentityPoolConfigurationRequest {
  /**
   * @schema CognitoSyncSetIdentityPoolConfigurationRequest#IdentityPoolId
   */
  readonly identityPoolId?: string;

  /**
   * @schema CognitoSyncSetIdentityPoolConfigurationRequest#PushSync
   */
  readonly pushSync?: CognitoSyncPushSync;

  /**
   * @schema CognitoSyncSetIdentityPoolConfigurationRequest#CognitoStreams
   */
  readonly cognitoStreams?: CognitoSyncCognitoStreams;

}

/**
 * Converts an object of type 'CognitoSyncSetIdentityPoolConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoSyncSetIdentityPoolConfigurationRequest(obj: CognitoSyncSetIdentityPoolConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityPoolId': obj.identityPoolId,
    'PushSync': toJson_CognitoSyncPushSync(obj.pushSync),
    'CognitoStreams': toJson_CognitoSyncCognitoStreams(obj.cognitoStreams),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoSyncSetIdentityPoolConfigurationResponse
 */
export interface CognitoSyncSetIdentityPoolConfigurationResponse {
  /**
   * @schema CognitoSyncSetIdentityPoolConfigurationResponse#IdentityPoolId
   */
  readonly identityPoolId?: string;

  /**
   * @schema CognitoSyncSetIdentityPoolConfigurationResponse#PushSync
   */
  readonly pushSync?: CognitoSyncPushSync;

  /**
   * @schema CognitoSyncSetIdentityPoolConfigurationResponse#CognitoStreams
   */
  readonly cognitoStreams?: CognitoSyncCognitoStreams;

}

/**
 * Converts an object of type 'CognitoSyncSetIdentityPoolConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoSyncSetIdentityPoolConfigurationResponse(obj: CognitoSyncSetIdentityPoolConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityPoolId': obj.identityPoolId,
    'PushSync': toJson_CognitoSyncPushSync(obj.pushSync),
    'CognitoStreams': toJson_CognitoSyncCognitoStreams(obj.cognitoStreams),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoSyncSubscribeToDatasetRequest
 */
export interface CognitoSyncSubscribeToDatasetRequest {
  /**
   * @schema CognitoSyncSubscribeToDatasetRequest#IdentityPoolId
   */
  readonly identityPoolId?: string;

  /**
   * @schema CognitoSyncSubscribeToDatasetRequest#IdentityId
   */
  readonly identityId?: string;

  /**
   * @schema CognitoSyncSubscribeToDatasetRequest#DatasetName
   */
  readonly datasetName?: string;

  /**
   * @schema CognitoSyncSubscribeToDatasetRequest#DeviceId
   */
  readonly deviceId?: string;

}

/**
 * Converts an object of type 'CognitoSyncSubscribeToDatasetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoSyncSubscribeToDatasetRequest(obj: CognitoSyncSubscribeToDatasetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityPoolId': obj.identityPoolId,
    'IdentityId': obj.identityId,
    'DatasetName': obj.datasetName,
    'DeviceId': obj.deviceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoSyncSubscribeToDatasetResponse
 */
export interface CognitoSyncSubscribeToDatasetResponse {
}

/**
 * Converts an object of type 'CognitoSyncSubscribeToDatasetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoSyncSubscribeToDatasetResponse(obj: CognitoSyncSubscribeToDatasetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoSyncUnsubscribeFromDatasetRequest
 */
export interface CognitoSyncUnsubscribeFromDatasetRequest {
  /**
   * @schema CognitoSyncUnsubscribeFromDatasetRequest#IdentityPoolId
   */
  readonly identityPoolId?: string;

  /**
   * @schema CognitoSyncUnsubscribeFromDatasetRequest#IdentityId
   */
  readonly identityId?: string;

  /**
   * @schema CognitoSyncUnsubscribeFromDatasetRequest#DatasetName
   */
  readonly datasetName?: string;

  /**
   * @schema CognitoSyncUnsubscribeFromDatasetRequest#DeviceId
   */
  readonly deviceId?: string;

}

/**
 * Converts an object of type 'CognitoSyncUnsubscribeFromDatasetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoSyncUnsubscribeFromDatasetRequest(obj: CognitoSyncUnsubscribeFromDatasetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityPoolId': obj.identityPoolId,
    'IdentityId': obj.identityId,
    'DatasetName': obj.datasetName,
    'DeviceId': obj.deviceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoSyncUnsubscribeFromDatasetResponse
 */
export interface CognitoSyncUnsubscribeFromDatasetResponse {
}

/**
 * Converts an object of type 'CognitoSyncUnsubscribeFromDatasetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoSyncUnsubscribeFromDatasetResponse(obj: CognitoSyncUnsubscribeFromDatasetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoSyncUpdateRecordsRequest
 */
export interface CognitoSyncUpdateRecordsRequest {
  /**
   * @schema CognitoSyncUpdateRecordsRequest#IdentityPoolId
   */
  readonly identityPoolId?: string;

  /**
   * @schema CognitoSyncUpdateRecordsRequest#IdentityId
   */
  readonly identityId?: string;

  /**
   * @schema CognitoSyncUpdateRecordsRequest#DatasetName
   */
  readonly datasetName?: string;

  /**
   * @schema CognitoSyncUpdateRecordsRequest#DeviceId
   */
  readonly deviceId?: string;

  /**
   * @schema CognitoSyncUpdateRecordsRequest#RecordPatches
   */
  readonly recordPatches?: CognitoSyncRecordPatch[];

  /**
   * @schema CognitoSyncUpdateRecordsRequest#SyncSessionToken
   */
  readonly syncSessionToken?: string;

  /**
   * @schema CognitoSyncUpdateRecordsRequest#ClientContext
   */
  readonly clientContext?: string;

}

/**
 * Converts an object of type 'CognitoSyncUpdateRecordsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoSyncUpdateRecordsRequest(obj: CognitoSyncUpdateRecordsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityPoolId': obj.identityPoolId,
    'IdentityId': obj.identityId,
    'DatasetName': obj.datasetName,
    'DeviceId': obj.deviceId,
    'RecordPatches': obj.recordPatches?.map(y => toJson_CognitoSyncRecordPatch(y)),
    'SyncSessionToken': obj.syncSessionToken,
    'ClientContext': obj.clientContext,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoSyncUpdateRecordsResponse
 */
export interface CognitoSyncUpdateRecordsResponse {
  /**
   * @schema CognitoSyncUpdateRecordsResponse#Records
   */
  readonly records?: CognitoSyncRecord[];

}

/**
 * Converts an object of type 'CognitoSyncUpdateRecordsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoSyncUpdateRecordsResponse(obj: CognitoSyncUpdateRecordsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Records': obj.records?.map(y => toJson_CognitoSyncRecord(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoSyncDataset
 */
export interface CognitoSyncDataset {
  /**
   * @schema CognitoSyncDataset#IdentityId
   */
  readonly identityId?: string;

  /**
   * @schema CognitoSyncDataset#DatasetName
   */
  readonly datasetName?: string;

  /**
   * @schema CognitoSyncDataset#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema CognitoSyncDataset#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema CognitoSyncDataset#LastModifiedBy
   */
  readonly lastModifiedBy?: string;

  /**
   * @schema CognitoSyncDataset#DataStorage
   */
  readonly dataStorage?: number;

  /**
   * @schema CognitoSyncDataset#NumRecords
   */
  readonly numRecords?: number;

}

/**
 * Converts an object of type 'CognitoSyncDataset' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoSyncDataset(obj: CognitoSyncDataset | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityId': obj.identityId,
    'DatasetName': obj.datasetName,
    'CreationDate': obj.creationDate,
    'LastModifiedDate': obj.lastModifiedDate,
    'LastModifiedBy': obj.lastModifiedBy,
    'DataStorage': obj.dataStorage,
    'NumRecords': obj.numRecords,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoSyncIdentityPoolUsage
 */
export interface CognitoSyncIdentityPoolUsage {
  /**
   * @schema CognitoSyncIdentityPoolUsage#IdentityPoolId
   */
  readonly identityPoolId?: string;

  /**
   * @schema CognitoSyncIdentityPoolUsage#SyncSessionsCount
   */
  readonly syncSessionsCount?: number;

  /**
   * @schema CognitoSyncIdentityPoolUsage#DataStorage
   */
  readonly dataStorage?: number;

  /**
   * @schema CognitoSyncIdentityPoolUsage#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

}

/**
 * Converts an object of type 'CognitoSyncIdentityPoolUsage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoSyncIdentityPoolUsage(obj: CognitoSyncIdentityPoolUsage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityPoolId': obj.identityPoolId,
    'SyncSessionsCount': obj.syncSessionsCount,
    'DataStorage': obj.dataStorage,
    'LastModifiedDate': obj.lastModifiedDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoSyncIdentityUsage
 */
export interface CognitoSyncIdentityUsage {
  /**
   * @schema CognitoSyncIdentityUsage#IdentityId
   */
  readonly identityId?: string;

  /**
   * @schema CognitoSyncIdentityUsage#IdentityPoolId
   */
  readonly identityPoolId?: string;

  /**
   * @schema CognitoSyncIdentityUsage#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema CognitoSyncIdentityUsage#DatasetCount
   */
  readonly datasetCount?: number;

  /**
   * @schema CognitoSyncIdentityUsage#DataStorage
   */
  readonly dataStorage?: number;

}

/**
 * Converts an object of type 'CognitoSyncIdentityUsage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoSyncIdentityUsage(obj: CognitoSyncIdentityUsage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityId': obj.identityId,
    'IdentityPoolId': obj.identityPoolId,
    'LastModifiedDate': obj.lastModifiedDate,
    'DatasetCount': obj.datasetCount,
    'DataStorage': obj.dataStorage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoSyncPushSync
 */
export interface CognitoSyncPushSync {
  /**
   * @schema CognitoSyncPushSync#ApplicationArns
   */
  readonly applicationArns?: string[];

  /**
   * @schema CognitoSyncPushSync#RoleArn
   */
  readonly roleArn?: string;

}

/**
 * Converts an object of type 'CognitoSyncPushSync' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoSyncPushSync(obj: CognitoSyncPushSync | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationArns': obj.applicationArns?.map(y => y),
    'RoleArn': obj.roleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoSyncCognitoStreams
 */
export interface CognitoSyncCognitoStreams {
  /**
   * @schema CognitoSyncCognitoStreams#StreamName
   */
  readonly streamName?: string;

  /**
   * @schema CognitoSyncCognitoStreams#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema CognitoSyncCognitoStreams#StreamingStatus
   */
  readonly streamingStatus?: string;

}

/**
 * Converts an object of type 'CognitoSyncCognitoStreams' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoSyncCognitoStreams(obj: CognitoSyncCognitoStreams | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamName': obj.streamName,
    'RoleArn': obj.roleArn,
    'StreamingStatus': obj.streamingStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoSyncRecord
 */
export interface CognitoSyncRecord {
  /**
   * @schema CognitoSyncRecord#Key
   */
  readonly key?: string;

  /**
   * @schema CognitoSyncRecord#Value
   */
  readonly value?: string;

  /**
   * @schema CognitoSyncRecord#SyncCount
   */
  readonly syncCount?: number;

  /**
   * @schema CognitoSyncRecord#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema CognitoSyncRecord#LastModifiedBy
   */
  readonly lastModifiedBy?: string;

  /**
   * @schema CognitoSyncRecord#DeviceLastModifiedDate
   */
  readonly deviceLastModifiedDate?: string;

}

/**
 * Converts an object of type 'CognitoSyncRecord' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoSyncRecord(obj: CognitoSyncRecord | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Value': obj.value,
    'SyncCount': obj.syncCount,
    'LastModifiedDate': obj.lastModifiedDate,
    'LastModifiedBy': obj.lastModifiedBy,
    'DeviceLastModifiedDate': obj.deviceLastModifiedDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoSyncRecordPatch
 */
export interface CognitoSyncRecordPatch {
  /**
   * @schema CognitoSyncRecordPatch#Op
   */
  readonly op?: string;

  /**
   * @schema CognitoSyncRecordPatch#Key
   */
  readonly key?: string;

  /**
   * @schema CognitoSyncRecordPatch#Value
   */
  readonly value?: string;

  /**
   * @schema CognitoSyncRecordPatch#SyncCount
   */
  readonly syncCount?: number;

  /**
   * @schema CognitoSyncRecordPatch#DeviceLastModifiedDate
   */
  readonly deviceLastModifiedDate?: string;

}

/**
 * Converts an object of type 'CognitoSyncRecordPatch' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoSyncRecordPatch(obj: CognitoSyncRecordPatch | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Op': obj.op,
    'Key': obj.key,
    'Value': obj.value,
    'SyncCount': obj.syncCount,
    'DeviceLastModifiedDate': obj.deviceLastModifiedDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
