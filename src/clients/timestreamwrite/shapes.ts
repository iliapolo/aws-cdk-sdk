/**
 * @schema CreateDatabaseRequest
 */
export interface CreateDatabaseRequest {
  /**
   * @schema CreateDatabaseRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema CreateDatabaseRequest#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema CreateDatabaseRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateDatabaseResponse
 */
export interface CreateDatabaseResponse {
  /**
   * @schema CreateDatabaseResponse#Database
   */
  readonly database?: Database;

}

/**
 * @schema CreateTableRequest
 */
export interface CreateTableRequest {
  /**
   * @schema CreateTableRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema CreateTableRequest#TableName
   */
  readonly tableName: string;

  /**
   * @schema CreateTableRequest#RetentionProperties
   */
  readonly retentionProperties?: RetentionProperties;

  /**
   * @schema CreateTableRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateTableResponse
 */
export interface CreateTableResponse {
  /**
   * @schema CreateTableResponse#Table
   */
  readonly table?: Table;

}

/**
 * @schema DeleteDatabaseRequest
 */
export interface DeleteDatabaseRequest {
  /**
   * @schema DeleteDatabaseRequest#DatabaseName
   */
  readonly databaseName: string;

}

/**
 * @schema DeleteTableRequest
 */
export interface DeleteTableRequest {
  /**
   * @schema DeleteTableRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema DeleteTableRequest#TableName
   */
  readonly tableName: string;

}

/**
 * @schema DescribeDatabaseRequest
 */
export interface DescribeDatabaseRequest {
  /**
   * @schema DescribeDatabaseRequest#DatabaseName
   */
  readonly databaseName: string;

}

/**
 * @schema DescribeDatabaseResponse
 */
export interface DescribeDatabaseResponse {
  /**
   * @schema DescribeDatabaseResponse#Database
   */
  readonly database?: Database;

}

/**
 * @schema DescribeEndpointsRequest
 */
export interface DescribeEndpointsRequest {
}

/**
 * @schema DescribeEndpointsResponse
 */
export interface DescribeEndpointsResponse {
  /**
   * @schema DescribeEndpointsResponse#Endpoints
   */
  readonly endpoints: Endpoint[];

}

/**
 * @schema DescribeTableRequest
 */
export interface DescribeTableRequest {
  /**
   * @schema DescribeTableRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema DescribeTableRequest#TableName
   */
  readonly tableName: string;

}

/**
 * @schema DescribeTableResponse
 */
export interface DescribeTableResponse {
  /**
   * @schema DescribeTableResponse#Table
   */
  readonly table?: Table;

}

/**
 * @schema ListDatabasesRequest
 */
export interface ListDatabasesRequest {
  /**
   * @schema ListDatabasesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListDatabasesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListDatabasesResponse
 */
export interface ListDatabasesResponse {
  /**
   * @schema ListDatabasesResponse#Databases
   */
  readonly databases?: Database[];

  /**
   * @schema ListDatabasesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTablesRequest
 */
export interface ListTablesRequest {
  /**
   * @schema ListTablesRequest#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema ListTablesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListTablesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListTablesResponse
 */
export interface ListTablesResponse {
  /**
   * @schema ListTablesResponse#Tables
   */
  readonly tables?: Table[];

  /**
   * @schema ListTablesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * @schema ListTagsForResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

}

/**
 * @schema ListTagsForResourceResponse
 */
export interface ListTagsForResourceResponse {
  /**
   * @schema ListTagsForResourceResponse#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema TagResourceRequest#Tags
   */
  readonly tags: Tag[];

}

/**
 * @schema TagResourceResponse
 */
export interface TagResourceResponse {
}

/**
 * @schema UntagResourceRequest
 */
export interface UntagResourceRequest {
  /**
   * @schema UntagResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema UntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UntagResourceResponse
 */
export interface UntagResourceResponse {
}

/**
 * @schema UpdateDatabaseRequest
 */
export interface UpdateDatabaseRequest {
  /**
   * @schema UpdateDatabaseRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema UpdateDatabaseRequest#KmsKeyId
   */
  readonly kmsKeyId: string;

}

/**
 * @schema UpdateDatabaseResponse
 */
export interface UpdateDatabaseResponse {
  /**
   * @schema UpdateDatabaseResponse#Database
   */
  readonly database?: Database;

}

/**
 * @schema UpdateTableRequest
 */
export interface UpdateTableRequest {
  /**
   * @schema UpdateTableRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema UpdateTableRequest#TableName
   */
  readonly tableName: string;

  /**
   * @schema UpdateTableRequest#RetentionProperties
   */
  readonly retentionProperties: RetentionProperties;

}

/**
 * @schema UpdateTableResponse
 */
export interface UpdateTableResponse {
  /**
   * @schema UpdateTableResponse#Table
   */
  readonly table?: Table;

}

/**
 * @schema WriteRecordsRequest
 */
export interface WriteRecordsRequest {
  /**
   * @schema WriteRecordsRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema WriteRecordsRequest#TableName
   */
  readonly tableName: string;

  /**
   * @schema WriteRecordsRequest#CommonAttributes
   */
  readonly commonAttributes?: Record;

  /**
   * @schema WriteRecordsRequest#Records
   */
  readonly records: Record[];

}

/**
 * @schema Tag
 */
export interface Tag {
  /**
   * @schema Tag#Key
   */
  readonly key: string;

  /**
   * @schema Tag#Value
   */
  readonly value: string;

}

/**
 * @schema Database
 */
export interface Database {
  /**
   * @schema Database#Arn
   */
  readonly arn?: string;

  /**
   * @schema Database#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema Database#TableCount
   */
  readonly tableCount?: number;

  /**
   * @schema Database#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema Database#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema Database#LastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

}

/**
 * @schema RetentionProperties
 */
export interface RetentionProperties {
  /**
   * @schema RetentionProperties#MemoryStoreRetentionPeriodInHours
   */
  readonly memoryStoreRetentionPeriodInHours: number;

  /**
   * @schema RetentionProperties#MagneticStoreRetentionPeriodInDays
   */
  readonly magneticStoreRetentionPeriodInDays: number;

}

/**
 * @schema Table
 */
export interface Table {
  /**
   * @schema Table#Arn
   */
  readonly arn?: string;

  /**
   * @schema Table#TableName
   */
  readonly tableName?: string;

  /**
   * @schema Table#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema Table#TableStatus
   */
  readonly tableStatus?: string;

  /**
   * @schema Table#RetentionProperties
   */
  readonly retentionProperties?: RetentionProperties;

  /**
   * @schema Table#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema Table#LastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

}

/**
 * @schema Endpoint
 */
export interface Endpoint {
  /**
   * @schema Endpoint#Address
   */
  readonly address: string;

  /**
   * @schema Endpoint#CachePeriodInMinutes
   */
  readonly cachePeriodInMinutes: number;

}

/**
 * @schema Record
 */
export interface Record {
  /**
   * @schema Record#Dimensions
   */
  readonly dimensions?: Dimension[];

  /**
   * @schema Record#MeasureName
   */
  readonly measureName?: string;

  /**
   * @schema Record#MeasureValue
   */
  readonly measureValue?: string;

  /**
   * @schema Record#MeasureValueType
   */
  readonly measureValueType?: string;

  /**
   * @schema Record#Time
   */
  readonly time?: string;

  /**
   * @schema Record#TimeUnit
   */
  readonly timeUnit?: string;

  /**
   * @schema Record#Version
   */
  readonly version?: number;

}

/**
 * @schema Dimension
 */
export interface Dimension {
  /**
   * @schema Dimension#Name
   */
  readonly name: string;

  /**
   * @schema Dimension#Value
   */
  readonly value: string;

  /**
   * @schema Dimension#DimensionValueType
   */
  readonly dimensionValueType?: string;

}
