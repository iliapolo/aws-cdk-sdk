/**
 * @schema CognitoSyncBulkPublishRequest
 */
export interface CognitoSyncBulkPublishRequest {
  /**
   * @schema CognitoSyncBulkPublishRequest#IdentityPoolId
   */
  readonly identityPoolId: string;

}

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
 * @schema CognitoSyncDeleteDatasetRequest
 */
export interface CognitoSyncDeleteDatasetRequest {
  /**
   * @schema CognitoSyncDeleteDatasetRequest#IdentityPoolId
   */
  readonly identityPoolId: string;

  /**
   * @schema CognitoSyncDeleteDatasetRequest#IdentityId
   */
  readonly identityId: string;

  /**
   * @schema CognitoSyncDeleteDatasetRequest#DatasetName
   */
  readonly datasetName: string;

}

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
 * @schema CognitoSyncDescribeDatasetRequest
 */
export interface CognitoSyncDescribeDatasetRequest {
  /**
   * @schema CognitoSyncDescribeDatasetRequest#IdentityPoolId
   */
  readonly identityPoolId: string;

  /**
   * @schema CognitoSyncDescribeDatasetRequest#IdentityId
   */
  readonly identityId: string;

  /**
   * @schema CognitoSyncDescribeDatasetRequest#DatasetName
   */
  readonly datasetName: string;

}

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
 * @schema CognitoSyncDescribeIdentityPoolUsageRequest
 */
export interface CognitoSyncDescribeIdentityPoolUsageRequest {
  /**
   * @schema CognitoSyncDescribeIdentityPoolUsageRequest#IdentityPoolId
   */
  readonly identityPoolId: string;

}

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
 * @schema CognitoSyncDescribeIdentityUsageRequest
 */
export interface CognitoSyncDescribeIdentityUsageRequest {
  /**
   * @schema CognitoSyncDescribeIdentityUsageRequest#IdentityPoolId
   */
  readonly identityPoolId: string;

  /**
   * @schema CognitoSyncDescribeIdentityUsageRequest#IdentityId
   */
  readonly identityId: string;

}

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
 * @schema CognitoSyncGetBulkPublishDetailsRequest
 */
export interface CognitoSyncGetBulkPublishDetailsRequest {
  /**
   * @schema CognitoSyncGetBulkPublishDetailsRequest#IdentityPoolId
   */
  readonly identityPoolId: string;

}

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
 * @schema CognitoSyncGetCognitoEventsRequest
 */
export interface CognitoSyncGetCognitoEventsRequest {
  /**
   * @schema CognitoSyncGetCognitoEventsRequest#IdentityPoolId
   */
  readonly identityPoolId: string;

}

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
 * @schema CognitoSyncGetIdentityPoolConfigurationRequest
 */
export interface CognitoSyncGetIdentityPoolConfigurationRequest {
  /**
   * @schema CognitoSyncGetIdentityPoolConfigurationRequest#IdentityPoolId
   */
  readonly identityPoolId: string;

}

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
 * @schema CognitoSyncListDatasetsRequest
 */
export interface CognitoSyncListDatasetsRequest {
  /**
   * @schema CognitoSyncListDatasetsRequest#IdentityPoolId
   */
  readonly identityPoolId: string;

  /**
   * @schema CognitoSyncListDatasetsRequest#IdentityId
   */
  readonly identityId: string;

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
 * @schema CognitoSyncListRecordsRequest
 */
export interface CognitoSyncListRecordsRequest {
  /**
   * @schema CognitoSyncListRecordsRequest#IdentityPoolId
   */
  readonly identityPoolId: string;

  /**
   * @schema CognitoSyncListRecordsRequest#IdentityId
   */
  readonly identityId: string;

  /**
   * @schema CognitoSyncListRecordsRequest#DatasetName
   */
  readonly datasetName: string;

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
 * @schema CognitoSyncRegisterDeviceRequest
 */
export interface CognitoSyncRegisterDeviceRequest {
  /**
   * @schema CognitoSyncRegisterDeviceRequest#IdentityPoolId
   */
  readonly identityPoolId: string;

  /**
   * @schema CognitoSyncRegisterDeviceRequest#IdentityId
   */
  readonly identityId: string;

  /**
   * @schema CognitoSyncRegisterDeviceRequest#Platform
   */
  readonly platform: string;

  /**
   * @schema CognitoSyncRegisterDeviceRequest#Token
   */
  readonly token: string;

}

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
 * @schema CognitoSyncSetCognitoEventsRequest
 */
export interface CognitoSyncSetCognitoEventsRequest {
  /**
   * @schema CognitoSyncSetCognitoEventsRequest#IdentityPoolId
   */
  readonly identityPoolId: string;

  /**
   * @schema CognitoSyncSetCognitoEventsRequest#Events
   */
  readonly events: { [key: string]: string };

}

/**
 * @schema CognitoSyncSetIdentityPoolConfigurationRequest
 */
export interface CognitoSyncSetIdentityPoolConfigurationRequest {
  /**
   * @schema CognitoSyncSetIdentityPoolConfigurationRequest#IdentityPoolId
   */
  readonly identityPoolId: string;

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
 * @schema CognitoSyncSubscribeToDatasetRequest
 */
export interface CognitoSyncSubscribeToDatasetRequest {
  /**
   * @schema CognitoSyncSubscribeToDatasetRequest#IdentityPoolId
   */
  readonly identityPoolId: string;

  /**
   * @schema CognitoSyncSubscribeToDatasetRequest#IdentityId
   */
  readonly identityId: string;

  /**
   * @schema CognitoSyncSubscribeToDatasetRequest#DatasetName
   */
  readonly datasetName: string;

  /**
   * @schema CognitoSyncSubscribeToDatasetRequest#DeviceId
   */
  readonly deviceId: string;

}

/**
 * @schema CognitoSyncSubscribeToDatasetResponse
 */
export interface CognitoSyncSubscribeToDatasetResponse {
}

/**
 * @schema CognitoSyncUnsubscribeFromDatasetRequest
 */
export interface CognitoSyncUnsubscribeFromDatasetRequest {
  /**
   * @schema CognitoSyncUnsubscribeFromDatasetRequest#IdentityPoolId
   */
  readonly identityPoolId: string;

  /**
   * @schema CognitoSyncUnsubscribeFromDatasetRequest#IdentityId
   */
  readonly identityId: string;

  /**
   * @schema CognitoSyncUnsubscribeFromDatasetRequest#DatasetName
   */
  readonly datasetName: string;

  /**
   * @schema CognitoSyncUnsubscribeFromDatasetRequest#DeviceId
   */
  readonly deviceId: string;

}

/**
 * @schema CognitoSyncUnsubscribeFromDatasetResponse
 */
export interface CognitoSyncUnsubscribeFromDatasetResponse {
}

/**
 * @schema CognitoSyncUpdateRecordsRequest
 */
export interface CognitoSyncUpdateRecordsRequest {
  /**
   * @schema CognitoSyncUpdateRecordsRequest#IdentityPoolId
   */
  readonly identityPoolId: string;

  /**
   * @schema CognitoSyncUpdateRecordsRequest#IdentityId
   */
  readonly identityId: string;

  /**
   * @schema CognitoSyncUpdateRecordsRequest#DatasetName
   */
  readonly datasetName: string;

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
  readonly syncSessionToken: string;

  /**
   * @schema CognitoSyncUpdateRecordsRequest#ClientContext
   */
  readonly clientContext?: string;

}

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
 * @schema CognitoSyncRecordPatch
 */
export interface CognitoSyncRecordPatch {
  /**
   * @schema CognitoSyncRecordPatch#Op
   */
  readonly op: string;

  /**
   * @schema CognitoSyncRecordPatch#Key
   */
  readonly key: string;

  /**
   * @schema CognitoSyncRecordPatch#Value
   */
  readonly value?: string;

  /**
   * @schema CognitoSyncRecordPatch#SyncCount
   */
  readonly syncCount: number;

  /**
   * @schema CognitoSyncRecordPatch#DeviceLastModifiedDate
   */
  readonly deviceLastModifiedDate?: string;

}
