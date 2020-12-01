/**
 * @schema BulkPublishRequest
 */
export interface BulkPublishRequest {
  /**
   * @schema BulkPublishRequest#IdentityPoolId
   */
  readonly identityPoolId: string;

}

/**
 * @schema BulkPublishResponse
 */
export interface BulkPublishResponse {
  /**
   * @schema BulkPublishResponse#IdentityPoolId
   */
  readonly identityPoolId?: string;

}

/**
 * @schema DeleteDatasetRequest
 */
export interface DeleteDatasetRequest {
  /**
   * @schema DeleteDatasetRequest#IdentityPoolId
   */
  readonly identityPoolId: string;

  /**
   * @schema DeleteDatasetRequest#IdentityId
   */
  readonly identityId: string;

  /**
   * @schema DeleteDatasetRequest#DatasetName
   */
  readonly datasetName: string;

}

/**
 * @schema DeleteDatasetResponse
 */
export interface DeleteDatasetResponse {
  /**
   * @schema DeleteDatasetResponse#Dataset
   */
  readonly dataset?: Dataset;

}

/**
 * @schema DescribeDatasetRequest
 */
export interface DescribeDatasetRequest {
  /**
   * @schema DescribeDatasetRequest#IdentityPoolId
   */
  readonly identityPoolId: string;

  /**
   * @schema DescribeDatasetRequest#IdentityId
   */
  readonly identityId: string;

  /**
   * @schema DescribeDatasetRequest#DatasetName
   */
  readonly datasetName: string;

}

/**
 * @schema DescribeDatasetResponse
 */
export interface DescribeDatasetResponse {
  /**
   * @schema DescribeDatasetResponse#Dataset
   */
  readonly dataset?: Dataset;

}

/**
 * @schema DescribeIdentityPoolUsageRequest
 */
export interface DescribeIdentityPoolUsageRequest {
  /**
   * @schema DescribeIdentityPoolUsageRequest#IdentityPoolId
   */
  readonly identityPoolId: string;

}

/**
 * @schema DescribeIdentityPoolUsageResponse
 */
export interface DescribeIdentityPoolUsageResponse {
  /**
   * @schema DescribeIdentityPoolUsageResponse#IdentityPoolUsage
   */
  readonly identityPoolUsage?: IdentityPoolUsage;

}

/**
 * @schema DescribeIdentityUsageRequest
 */
export interface DescribeIdentityUsageRequest {
  /**
   * @schema DescribeIdentityUsageRequest#IdentityPoolId
   */
  readonly identityPoolId: string;

  /**
   * @schema DescribeIdentityUsageRequest#IdentityId
   */
  readonly identityId: string;

}

/**
 * @schema DescribeIdentityUsageResponse
 */
export interface DescribeIdentityUsageResponse {
  /**
   * @schema DescribeIdentityUsageResponse#IdentityUsage
   */
  readonly identityUsage?: IdentityUsage;

}

/**
 * @schema GetBulkPublishDetailsRequest
 */
export interface GetBulkPublishDetailsRequest {
  /**
   * @schema GetBulkPublishDetailsRequest#IdentityPoolId
   */
  readonly identityPoolId: string;

}

/**
 * @schema GetBulkPublishDetailsResponse
 */
export interface GetBulkPublishDetailsResponse {
  /**
   * @schema GetBulkPublishDetailsResponse#IdentityPoolId
   */
  readonly identityPoolId?: string;

  /**
   * @schema GetBulkPublishDetailsResponse#BulkPublishStartTime
   */
  readonly bulkPublishStartTime?: string;

  /**
   * @schema GetBulkPublishDetailsResponse#BulkPublishCompleteTime
   */
  readonly bulkPublishCompleteTime?: string;

  /**
   * @schema GetBulkPublishDetailsResponse#BulkPublishStatus
   */
  readonly bulkPublishStatus?: string;

  /**
   * @schema GetBulkPublishDetailsResponse#FailureMessage
   */
  readonly failureMessage?: string;

}

/**
 * @schema GetCognitoEventsRequest
 */
export interface GetCognitoEventsRequest {
  /**
   * @schema GetCognitoEventsRequest#IdentityPoolId
   */
  readonly identityPoolId: string;

}

/**
 * @schema GetCognitoEventsResponse
 */
export interface GetCognitoEventsResponse {
  /**
   * @schema GetCognitoEventsResponse#Events
   */
  readonly events?: { [key: string]: string };

}

/**
 * @schema GetIdentityPoolConfigurationRequest
 */
export interface GetIdentityPoolConfigurationRequest {
  /**
   * @schema GetIdentityPoolConfigurationRequest#IdentityPoolId
   */
  readonly identityPoolId: string;

}

/**
 * @schema GetIdentityPoolConfigurationResponse
 */
export interface GetIdentityPoolConfigurationResponse {
  /**
   * @schema GetIdentityPoolConfigurationResponse#IdentityPoolId
   */
  readonly identityPoolId?: string;

  /**
   * @schema GetIdentityPoolConfigurationResponse#PushSync
   */
  readonly pushSync?: PushSync;

  /**
   * @schema GetIdentityPoolConfigurationResponse#CognitoStreams
   */
  readonly cognitoStreams?: CognitoStreams;

}

/**
 * @schema ListDatasetsRequest
 */
export interface ListDatasetsRequest {
  /**
   * @schema ListDatasetsRequest#IdentityPoolId
   */
  readonly identityPoolId: string;

  /**
   * @schema ListDatasetsRequest#IdentityId
   */
  readonly identityId: string;

  /**
   * @schema ListDatasetsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListDatasetsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListDatasetsResponse
 */
export interface ListDatasetsResponse {
  /**
   * @schema ListDatasetsResponse#Datasets
   */
  readonly datasets?: Dataset[];

  /**
   * @schema ListDatasetsResponse#Count
   */
  readonly count?: number;

  /**
   * @schema ListDatasetsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListIdentityPoolUsageRequest
 */
export interface ListIdentityPoolUsageRequest {
  /**
   * @schema ListIdentityPoolUsageRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListIdentityPoolUsageRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListIdentityPoolUsageResponse
 */
export interface ListIdentityPoolUsageResponse {
  /**
   * @schema ListIdentityPoolUsageResponse#IdentityPoolUsages
   */
  readonly identityPoolUsages?: IdentityPoolUsage[];

  /**
   * @schema ListIdentityPoolUsageResponse#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListIdentityPoolUsageResponse#Count
   */
  readonly count?: number;

  /**
   * @schema ListIdentityPoolUsageResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListRecordsRequest
 */
export interface ListRecordsRequest {
  /**
   * @schema ListRecordsRequest#IdentityPoolId
   */
  readonly identityPoolId: string;

  /**
   * @schema ListRecordsRequest#IdentityId
   */
  readonly identityId: string;

  /**
   * @schema ListRecordsRequest#DatasetName
   */
  readonly datasetName: string;

  /**
   * @schema ListRecordsRequest#LastSyncCount
   */
  readonly lastSyncCount?: number;

  /**
   * @schema ListRecordsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListRecordsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListRecordsRequest#SyncSessionToken
   */
  readonly syncSessionToken?: string;

}

/**
 * @schema ListRecordsResponse
 */
export interface ListRecordsResponse {
  /**
   * @schema ListRecordsResponse#Records
   */
  readonly records?: Record[];

  /**
   * @schema ListRecordsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListRecordsResponse#Count
   */
  readonly count?: number;

  /**
   * @schema ListRecordsResponse#DatasetSyncCount
   */
  readonly datasetSyncCount?: number;

  /**
   * @schema ListRecordsResponse#LastModifiedBy
   */
  readonly lastModifiedBy?: string;

  /**
   * @schema ListRecordsResponse#MergedDatasetNames
   */
  readonly mergedDatasetNames?: string[];

  /**
   * @schema ListRecordsResponse#DatasetExists
   */
  readonly datasetExists?: boolean;

  /**
   * @schema ListRecordsResponse#DatasetDeletedAfterRequestedSyncCount
   */
  readonly datasetDeletedAfterRequestedSyncCount?: boolean;

  /**
   * @schema ListRecordsResponse#SyncSessionToken
   */
  readonly syncSessionToken?: string;

}

/**
 * @schema RegisterDeviceRequest
 */
export interface RegisterDeviceRequest {
  /**
   * @schema RegisterDeviceRequest#IdentityPoolId
   */
  readonly identityPoolId: string;

  /**
   * @schema RegisterDeviceRequest#IdentityId
   */
  readonly identityId: string;

  /**
   * @schema RegisterDeviceRequest#Platform
   */
  readonly platform: string;

  /**
   * @schema RegisterDeviceRequest#Token
   */
  readonly token: string;

}

/**
 * @schema RegisterDeviceResponse
 */
export interface RegisterDeviceResponse {
  /**
   * @schema RegisterDeviceResponse#DeviceId
   */
  readonly deviceId?: string;

}

/**
 * @schema SetCognitoEventsRequest
 */
export interface SetCognitoEventsRequest {
  /**
   * @schema SetCognitoEventsRequest#IdentityPoolId
   */
  readonly identityPoolId: string;

  /**
   * @schema SetCognitoEventsRequest#Events
   */
  readonly events: { [key: string]: string };

}

/**
 * @schema SetIdentityPoolConfigurationRequest
 */
export interface SetIdentityPoolConfigurationRequest {
  /**
   * @schema SetIdentityPoolConfigurationRequest#IdentityPoolId
   */
  readonly identityPoolId: string;

  /**
   * @schema SetIdentityPoolConfigurationRequest#PushSync
   */
  readonly pushSync?: PushSync;

  /**
   * @schema SetIdentityPoolConfigurationRequest#CognitoStreams
   */
  readonly cognitoStreams?: CognitoStreams;

}

/**
 * @schema SetIdentityPoolConfigurationResponse
 */
export interface SetIdentityPoolConfigurationResponse {
  /**
   * @schema SetIdentityPoolConfigurationResponse#IdentityPoolId
   */
  readonly identityPoolId?: string;

  /**
   * @schema SetIdentityPoolConfigurationResponse#PushSync
   */
  readonly pushSync?: PushSync;

  /**
   * @schema SetIdentityPoolConfigurationResponse#CognitoStreams
   */
  readonly cognitoStreams?: CognitoStreams;

}

/**
 * @schema SubscribeToDatasetRequest
 */
export interface SubscribeToDatasetRequest {
  /**
   * @schema SubscribeToDatasetRequest#IdentityPoolId
   */
  readonly identityPoolId: string;

  /**
   * @schema SubscribeToDatasetRequest#IdentityId
   */
  readonly identityId: string;

  /**
   * @schema SubscribeToDatasetRequest#DatasetName
   */
  readonly datasetName: string;

  /**
   * @schema SubscribeToDatasetRequest#DeviceId
   */
  readonly deviceId: string;

}

/**
 * @schema SubscribeToDatasetResponse
 */
export interface SubscribeToDatasetResponse {
}

/**
 * @schema UnsubscribeFromDatasetRequest
 */
export interface UnsubscribeFromDatasetRequest {
  /**
   * @schema UnsubscribeFromDatasetRequest#IdentityPoolId
   */
  readonly identityPoolId: string;

  /**
   * @schema UnsubscribeFromDatasetRequest#IdentityId
   */
  readonly identityId: string;

  /**
   * @schema UnsubscribeFromDatasetRequest#DatasetName
   */
  readonly datasetName: string;

  /**
   * @schema UnsubscribeFromDatasetRequest#DeviceId
   */
  readonly deviceId: string;

}

/**
 * @schema UnsubscribeFromDatasetResponse
 */
export interface UnsubscribeFromDatasetResponse {
}

/**
 * @schema UpdateRecordsRequest
 */
export interface UpdateRecordsRequest {
  /**
   * @schema UpdateRecordsRequest#IdentityPoolId
   */
  readonly identityPoolId: string;

  /**
   * @schema UpdateRecordsRequest#IdentityId
   */
  readonly identityId: string;

  /**
   * @schema UpdateRecordsRequest#DatasetName
   */
  readonly datasetName: string;

  /**
   * @schema UpdateRecordsRequest#DeviceId
   */
  readonly deviceId?: string;

  /**
   * @schema UpdateRecordsRequest#RecordPatches
   */
  readonly recordPatches?: RecordPatch[];

  /**
   * @schema UpdateRecordsRequest#SyncSessionToken
   */
  readonly syncSessionToken: string;

  /**
   * @schema UpdateRecordsRequest#ClientContext
   */
  readonly clientContext?: string;

}

/**
 * @schema UpdateRecordsResponse
 */
export interface UpdateRecordsResponse {
  /**
   * @schema UpdateRecordsResponse#Records
   */
  readonly records?: Record[];

}

/**
 * @schema Dataset
 */
export interface Dataset {
  /**
   * @schema Dataset#IdentityId
   */
  readonly identityId?: string;

  /**
   * @schema Dataset#DatasetName
   */
  readonly datasetName?: string;

  /**
   * @schema Dataset#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema Dataset#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema Dataset#LastModifiedBy
   */
  readonly lastModifiedBy?: string;

  /**
   * @schema Dataset#DataStorage
   */
  readonly dataStorage?: number;

  /**
   * @schema Dataset#NumRecords
   */
  readonly numRecords?: number;

}

/**
 * @schema IdentityPoolUsage
 */
export interface IdentityPoolUsage {
  /**
   * @schema IdentityPoolUsage#IdentityPoolId
   */
  readonly identityPoolId?: string;

  /**
   * @schema IdentityPoolUsage#SyncSessionsCount
   */
  readonly syncSessionsCount?: number;

  /**
   * @schema IdentityPoolUsage#DataStorage
   */
  readonly dataStorage?: number;

  /**
   * @schema IdentityPoolUsage#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

}

/**
 * @schema IdentityUsage
 */
export interface IdentityUsage {
  /**
   * @schema IdentityUsage#IdentityId
   */
  readonly identityId?: string;

  /**
   * @schema IdentityUsage#IdentityPoolId
   */
  readonly identityPoolId?: string;

  /**
   * @schema IdentityUsage#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema IdentityUsage#DatasetCount
   */
  readonly datasetCount?: number;

  /**
   * @schema IdentityUsage#DataStorage
   */
  readonly dataStorage?: number;

}

/**
 * @schema PushSync
 */
export interface PushSync {
  /**
   * @schema PushSync#ApplicationArns
   */
  readonly applicationArns?: string[];

  /**
   * @schema PushSync#RoleArn
   */
  readonly roleArn?: string;

}

/**
 * @schema CognitoStreams
 */
export interface CognitoStreams {
  /**
   * @schema CognitoStreams#StreamName
   */
  readonly streamName?: string;

  /**
   * @schema CognitoStreams#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema CognitoStreams#StreamingStatus
   */
  readonly streamingStatus?: string;

}

/**
 * @schema Record
 */
export interface Record {
  /**
   * @schema Record#Key
   */
  readonly key?: string;

  /**
   * @schema Record#Value
   */
  readonly value?: string;

  /**
   * @schema Record#SyncCount
   */
  readonly syncCount?: number;

  /**
   * @schema Record#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema Record#LastModifiedBy
   */
  readonly lastModifiedBy?: string;

  /**
   * @schema Record#DeviceLastModifiedDate
   */
  readonly deviceLastModifiedDate?: string;

}

/**
 * @schema RecordPatch
 */
export interface RecordPatch {
  /**
   * @schema RecordPatch#Op
   */
  readonly op: string;

  /**
   * @schema RecordPatch#Key
   */
  readonly key: string;

  /**
   * @schema RecordPatch#Value
   */
  readonly value?: string;

  /**
   * @schema RecordPatch#SyncCount
   */
  readonly syncCount: number;

  /**
   * @schema RecordPatch#DeviceLastModifiedDate
   */
  readonly deviceLastModifiedDate?: string;

}
