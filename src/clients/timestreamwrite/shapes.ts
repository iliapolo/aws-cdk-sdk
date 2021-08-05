/**
 * @schema TimestreamWriteCreateDatabaseRequest
 */
export interface TimestreamWriteCreateDatabaseRequest {
  /**
   * @schema TimestreamWriteCreateDatabaseRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema TimestreamWriteCreateDatabaseRequest#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema TimestreamWriteCreateDatabaseRequest#Tags
   */
  readonly tags?: TimestreamWriteTag[];

}

/**
 * @schema TimestreamWriteCreateDatabaseResponse
 */
export interface TimestreamWriteCreateDatabaseResponse {
  /**
   * @schema TimestreamWriteCreateDatabaseResponse#Database
   */
  readonly database?: TimestreamWriteDatabase;

}

/**
 * @schema TimestreamWriteCreateTableRequest
 */
export interface TimestreamWriteCreateTableRequest {
  /**
   * @schema TimestreamWriteCreateTableRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema TimestreamWriteCreateTableRequest#TableName
   */
  readonly tableName: string;

  /**
   * @schema TimestreamWriteCreateTableRequest#RetentionProperties
   */
  readonly retentionProperties?: TimestreamWriteRetentionProperties;

  /**
   * @schema TimestreamWriteCreateTableRequest#Tags
   */
  readonly tags?: TimestreamWriteTag[];

}

/**
 * @schema TimestreamWriteCreateTableResponse
 */
export interface TimestreamWriteCreateTableResponse {
  /**
   * @schema TimestreamWriteCreateTableResponse#Table
   */
  readonly table?: TimestreamWriteTable;

}

/**
 * @schema TimestreamWriteDeleteDatabaseRequest
 */
export interface TimestreamWriteDeleteDatabaseRequest {
  /**
   * @schema TimestreamWriteDeleteDatabaseRequest#DatabaseName
   */
  readonly databaseName: string;

}

/**
 * @schema TimestreamWriteDeleteTableRequest
 */
export interface TimestreamWriteDeleteTableRequest {
  /**
   * @schema TimestreamWriteDeleteTableRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema TimestreamWriteDeleteTableRequest#TableName
   */
  readonly tableName: string;

}

/**
 * @schema TimestreamWriteDescribeDatabaseRequest
 */
export interface TimestreamWriteDescribeDatabaseRequest {
  /**
   * @schema TimestreamWriteDescribeDatabaseRequest#DatabaseName
   */
  readonly databaseName: string;

}

/**
 * @schema TimestreamWriteDescribeDatabaseResponse
 */
export interface TimestreamWriteDescribeDatabaseResponse {
  /**
   * @schema TimestreamWriteDescribeDatabaseResponse#Database
   */
  readonly database?: TimestreamWriteDatabase;

}

/**
 * @schema TimestreamWriteDescribeEndpointsRequest
 */
export interface TimestreamWriteDescribeEndpointsRequest {
}

/**
 * @schema TimestreamWriteDescribeEndpointsResponse
 */
export interface TimestreamWriteDescribeEndpointsResponse {
  /**
   * @schema TimestreamWriteDescribeEndpointsResponse#Endpoints
   */
  readonly endpoints: TimestreamWriteEndpoint[];

}

/**
 * @schema TimestreamWriteDescribeTableRequest
 */
export interface TimestreamWriteDescribeTableRequest {
  /**
   * @schema TimestreamWriteDescribeTableRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema TimestreamWriteDescribeTableRequest#TableName
   */
  readonly tableName: string;

}

/**
 * @schema TimestreamWriteDescribeTableResponse
 */
export interface TimestreamWriteDescribeTableResponse {
  /**
   * @schema TimestreamWriteDescribeTableResponse#Table
   */
  readonly table?: TimestreamWriteTable;

}

/**
 * @schema TimestreamWriteListDatabasesRequest
 */
export interface TimestreamWriteListDatabasesRequest {
  /**
   * @schema TimestreamWriteListDatabasesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema TimestreamWriteListDatabasesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema TimestreamWriteListDatabasesResponse
 */
export interface TimestreamWriteListDatabasesResponse {
  /**
   * @schema TimestreamWriteListDatabasesResponse#Databases
   */
  readonly databases?: TimestreamWriteDatabase[];

  /**
   * @schema TimestreamWriteListDatabasesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema TimestreamWriteListTablesRequest
 */
export interface TimestreamWriteListTablesRequest {
  /**
   * @schema TimestreamWriteListTablesRequest#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema TimestreamWriteListTablesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema TimestreamWriteListTablesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema TimestreamWriteListTablesResponse
 */
export interface TimestreamWriteListTablesResponse {
  /**
   * @schema TimestreamWriteListTablesResponse#Tables
   */
  readonly tables?: TimestreamWriteTable[];

  /**
   * @schema TimestreamWriteListTablesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema TimestreamWriteListTagsForResourceRequest
 */
export interface TimestreamWriteListTagsForResourceRequest {
  /**
   * @schema TimestreamWriteListTagsForResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

}

/**
 * @schema TimestreamWriteListTagsForResourceResponse
 */
export interface TimestreamWriteListTagsForResourceResponse {
  /**
   * @schema TimestreamWriteListTagsForResourceResponse#Tags
   */
  readonly tags?: TimestreamWriteTag[];

}

/**
 * @schema TimestreamWriteTagResourceRequest
 */
export interface TimestreamWriteTagResourceRequest {
  /**
   * @schema TimestreamWriteTagResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema TimestreamWriteTagResourceRequest#Tags
   */
  readonly tags: TimestreamWriteTag[];

}

/**
 * @schema TimestreamWriteTagResourceResponse
 */
export interface TimestreamWriteTagResourceResponse {
}

/**
 * @schema TimestreamWriteUntagResourceRequest
 */
export interface TimestreamWriteUntagResourceRequest {
  /**
   * @schema TimestreamWriteUntagResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema TimestreamWriteUntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema TimestreamWriteUntagResourceResponse
 */
export interface TimestreamWriteUntagResourceResponse {
}

/**
 * @schema TimestreamWriteUpdateDatabaseRequest
 */
export interface TimestreamWriteUpdateDatabaseRequest {
  /**
   * @schema TimestreamWriteUpdateDatabaseRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema TimestreamWriteUpdateDatabaseRequest#KmsKeyId
   */
  readonly kmsKeyId: string;

}

/**
 * @schema TimestreamWriteUpdateDatabaseResponse
 */
export interface TimestreamWriteUpdateDatabaseResponse {
  /**
   * @schema TimestreamWriteUpdateDatabaseResponse#Database
   */
  readonly database?: TimestreamWriteDatabase;

}

/**
 * @schema TimestreamWriteUpdateTableRequest
 */
export interface TimestreamWriteUpdateTableRequest {
  /**
   * @schema TimestreamWriteUpdateTableRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema TimestreamWriteUpdateTableRequest#TableName
   */
  readonly tableName: string;

  /**
   * @schema TimestreamWriteUpdateTableRequest#RetentionProperties
   */
  readonly retentionProperties: TimestreamWriteRetentionProperties;

}

/**
 * @schema TimestreamWriteUpdateTableResponse
 */
export interface TimestreamWriteUpdateTableResponse {
  /**
   * @schema TimestreamWriteUpdateTableResponse#Table
   */
  readonly table?: TimestreamWriteTable;

}

/**
 * @schema TimestreamWriteWriteRecordsRequest
 */
export interface TimestreamWriteWriteRecordsRequest {
  /**
   * @schema TimestreamWriteWriteRecordsRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema TimestreamWriteWriteRecordsRequest#TableName
   */
  readonly tableName: string;

  /**
   * @schema TimestreamWriteWriteRecordsRequest#CommonAttributes
   */
  readonly commonAttributes?: TimestreamWriteRecord;

  /**
   * @schema TimestreamWriteWriteRecordsRequest#Records
   */
  readonly records: TimestreamWriteRecord[];

}

/**
 * @schema TimestreamWriteTag
 */
export interface TimestreamWriteTag {
  /**
   * @schema TimestreamWriteTag#Key
   */
  readonly key: string;

  /**
   * @schema TimestreamWriteTag#Value
   */
  readonly value: string;

}

/**
 * @schema TimestreamWriteDatabase
 */
export interface TimestreamWriteDatabase {
  /**
   * @schema TimestreamWriteDatabase#Arn
   */
  readonly arn?: string;

  /**
   * @schema TimestreamWriteDatabase#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema TimestreamWriteDatabase#TableCount
   */
  readonly tableCount?: number;

  /**
   * @schema TimestreamWriteDatabase#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema TimestreamWriteDatabase#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema TimestreamWriteDatabase#LastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

}

/**
 * @schema TimestreamWriteRetentionProperties
 */
export interface TimestreamWriteRetentionProperties {
  /**
   * @schema TimestreamWriteRetentionProperties#MemoryStoreRetentionPeriodInHours
   */
  readonly memoryStoreRetentionPeriodInHours: number;

  /**
   * @schema TimestreamWriteRetentionProperties#MagneticStoreRetentionPeriodInDays
   */
  readonly magneticStoreRetentionPeriodInDays: number;

}

/**
 * @schema TimestreamWriteTable
 */
export interface TimestreamWriteTable {
  /**
   * @schema TimestreamWriteTable#Arn
   */
  readonly arn?: string;

  /**
   * @schema TimestreamWriteTable#TableName
   */
  readonly tableName?: string;

  /**
   * @schema TimestreamWriteTable#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema TimestreamWriteTable#TableStatus
   */
  readonly tableStatus?: string;

  /**
   * @schema TimestreamWriteTable#RetentionProperties
   */
  readonly retentionProperties?: TimestreamWriteRetentionProperties;

  /**
   * @schema TimestreamWriteTable#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema TimestreamWriteTable#LastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

}

/**
 * @schema TimestreamWriteEndpoint
 */
export interface TimestreamWriteEndpoint {
  /**
   * @schema TimestreamWriteEndpoint#Address
   */
  readonly address: string;

  /**
   * @schema TimestreamWriteEndpoint#CachePeriodInMinutes
   */
  readonly cachePeriodInMinutes: number;

}

/**
 * @schema TimestreamWriteRecord
 */
export interface TimestreamWriteRecord {
  /**
   * @schema TimestreamWriteRecord#Dimensions
   */
  readonly dimensions?: TimestreamWriteDimension[];

  /**
   * @schema TimestreamWriteRecord#MeasureName
   */
  readonly measureName?: string;

  /**
   * @schema TimestreamWriteRecord#MeasureValue
   */
  readonly measureValue?: string;

  /**
   * @schema TimestreamWriteRecord#MeasureValueType
   */
  readonly measureValueType?: string;

  /**
   * @schema TimestreamWriteRecord#Time
   */
  readonly time?: string;

  /**
   * @schema TimestreamWriteRecord#TimeUnit
   */
  readonly timeUnit?: string;

  /**
   * @schema TimestreamWriteRecord#Version
   */
  readonly version?: number;

}

/**
 * @schema TimestreamWriteDimension
 */
export interface TimestreamWriteDimension {
  /**
   * @schema TimestreamWriteDimension#Name
   */
  readonly name: string;

  /**
   * @schema TimestreamWriteDimension#Value
   */
  readonly value: string;

  /**
   * @schema TimestreamWriteDimension#DimensionValueType
   */
  readonly dimensionValueType?: string;

}
