/**
 * @schema BatchGetNamedQueryInput
 */
export interface BatchGetNamedQueryInput {
  /**
   * @schema BatchGetNamedQueryInput#NamedQueryIds
   */
  readonly namedQueryIds: string[];

}

/**
 * @schema BatchGetNamedQueryOutput
 */
export interface BatchGetNamedQueryOutput {
  /**
   * @schema BatchGetNamedQueryOutput#NamedQueries
   */
  readonly namedQueries?: NamedQuery[];

  /**
   * @schema BatchGetNamedQueryOutput#UnprocessedNamedQueryIds
   */
  readonly unprocessedNamedQueryIds?: UnprocessedNamedQueryId[];

}

/**
 * @schema BatchGetQueryExecutionInput
 */
export interface BatchGetQueryExecutionInput {
  /**
   * @schema BatchGetQueryExecutionInput#QueryExecutionIds
   */
  readonly queryExecutionIds: string[];

}

/**
 * @schema BatchGetQueryExecutionOutput
 */
export interface BatchGetQueryExecutionOutput {
  /**
   * @schema BatchGetQueryExecutionOutput#QueryExecutions
   */
  readonly queryExecutions?: QueryExecution[];

  /**
   * @schema BatchGetQueryExecutionOutput#UnprocessedQueryExecutionIds
   */
  readonly unprocessedQueryExecutionIds?: UnprocessedQueryExecutionId[];

}

/**
 * @schema CreateDataCatalogInput
 */
export interface CreateDataCatalogInput {
  /**
   * @schema CreateDataCatalogInput#Name
   */
  readonly name: string;

  /**
   * @schema CreateDataCatalogInput#Type
   */
  readonly type: string;

  /**
   * @schema CreateDataCatalogInput#Description
   */
  readonly description?: string;

  /**
   * @schema CreateDataCatalogInput#Parameters
   */
  readonly parameters?: { [key: string]: string };

  /**
   * @schema CreateDataCatalogInput#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateDataCatalogOutput
 */
export interface CreateDataCatalogOutput {
}

/**
 * @schema CreateNamedQueryInput
 */
export interface CreateNamedQueryInput {
  /**
   * @schema CreateNamedQueryInput#Name
   */
  readonly name: string;

  /**
   * @schema CreateNamedQueryInput#Description
   */
  readonly description?: string;

  /**
   * @schema CreateNamedQueryInput#Database
   */
  readonly database: string;

  /**
   * @schema CreateNamedQueryInput#QueryString
   */
  readonly queryString: string;

  /**
   * @schema CreateNamedQueryInput#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema CreateNamedQueryInput#WorkGroup
   */
  readonly workGroup?: string;

}

/**
 * @schema CreateNamedQueryOutput
 */
export interface CreateNamedQueryOutput {
  /**
   * @schema CreateNamedQueryOutput#NamedQueryId
   */
  readonly namedQueryId?: string;

}

/**
 * @schema CreateWorkGroupInput
 */
export interface CreateWorkGroupInput {
  /**
   * @schema CreateWorkGroupInput#Name
   */
  readonly name: string;

  /**
   * @schema CreateWorkGroupInput#Configuration
   */
  readonly configuration?: WorkGroupConfiguration;

  /**
   * @schema CreateWorkGroupInput#Description
   */
  readonly description?: string;

  /**
   * @schema CreateWorkGroupInput#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateWorkGroupOutput
 */
export interface CreateWorkGroupOutput {
}

/**
 * @schema DeleteDataCatalogInput
 */
export interface DeleteDataCatalogInput {
  /**
   * @schema DeleteDataCatalogInput#Name
   */
  readonly name: string;

}

/**
 * @schema DeleteDataCatalogOutput
 */
export interface DeleteDataCatalogOutput {
}

/**
 * @schema DeleteNamedQueryInput
 */
export interface DeleteNamedQueryInput {
  /**
   * @schema DeleteNamedQueryInput#NamedQueryId
   */
  readonly namedQueryId: string;

}

/**
 * @schema DeleteNamedQueryOutput
 */
export interface DeleteNamedQueryOutput {
}

/**
 * @schema DeleteWorkGroupInput
 */
export interface DeleteWorkGroupInput {
  /**
   * @schema DeleteWorkGroupInput#WorkGroup
   */
  readonly workGroup: string;

  /**
   * @schema DeleteWorkGroupInput#RecursiveDeleteOption
   */
  readonly recursiveDeleteOption?: boolean;

}

/**
 * @schema DeleteWorkGroupOutput
 */
export interface DeleteWorkGroupOutput {
}

/**
 * @schema GetDataCatalogInput
 */
export interface GetDataCatalogInput {
  /**
   * @schema GetDataCatalogInput#Name
   */
  readonly name: string;

}

/**
 * @schema GetDataCatalogOutput
 */
export interface GetDataCatalogOutput {
  /**
   * @schema GetDataCatalogOutput#DataCatalog
   */
  readonly dataCatalog?: DataCatalog;

}

/**
 * @schema GetDatabaseInput
 */
export interface GetDatabaseInput {
  /**
   * @schema GetDatabaseInput#CatalogName
   */
  readonly catalogName: string;

  /**
   * @schema GetDatabaseInput#DatabaseName
   */
  readonly databaseName: string;

}

/**
 * @schema GetDatabaseOutput
 */
export interface GetDatabaseOutput {
  /**
   * @schema GetDatabaseOutput#Database
   */
  readonly database?: Database;

}

/**
 * @schema GetNamedQueryInput
 */
export interface GetNamedQueryInput {
  /**
   * @schema GetNamedQueryInput#NamedQueryId
   */
  readonly namedQueryId: string;

}

/**
 * @schema GetNamedQueryOutput
 */
export interface GetNamedQueryOutput {
  /**
   * @schema GetNamedQueryOutput#NamedQuery
   */
  readonly namedQuery?: NamedQuery;

}

/**
 * @schema GetQueryExecutionInput
 */
export interface GetQueryExecutionInput {
  /**
   * @schema GetQueryExecutionInput#QueryExecutionId
   */
  readonly queryExecutionId: string;

}

/**
 * @schema GetQueryExecutionOutput
 */
export interface GetQueryExecutionOutput {
  /**
   * @schema GetQueryExecutionOutput#QueryExecution
   */
  readonly queryExecution?: QueryExecution;

}

/**
 * @schema GetQueryResultsInput
 */
export interface GetQueryResultsInput {
  /**
   * @schema GetQueryResultsInput#QueryExecutionId
   */
  readonly queryExecutionId: string;

  /**
   * @schema GetQueryResultsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetQueryResultsInput#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema GetQueryResultsOutput
 */
export interface GetQueryResultsOutput {
  /**
   * @schema GetQueryResultsOutput#UpdateCount
   */
  readonly updateCount?: number;

  /**
   * @schema GetQueryResultsOutput#ResultSet
   */
  readonly resultSet?: ResultSet;

  /**
   * @schema GetQueryResultsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetTableMetadataInput
 */
export interface GetTableMetadataInput {
  /**
   * @schema GetTableMetadataInput#CatalogName
   */
  readonly catalogName: string;

  /**
   * @schema GetTableMetadataInput#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema GetTableMetadataInput#TableName
   */
  readonly tableName: string;

}

/**
 * @schema GetTableMetadataOutput
 */
export interface GetTableMetadataOutput {
  /**
   * @schema GetTableMetadataOutput#TableMetadata
   */
  readonly tableMetadata?: TableMetadata;

}

/**
 * @schema GetWorkGroupInput
 */
export interface GetWorkGroupInput {
  /**
   * @schema GetWorkGroupInput#WorkGroup
   */
  readonly workGroup: string;

}

/**
 * @schema GetWorkGroupOutput
 */
export interface GetWorkGroupOutput {
  /**
   * @schema GetWorkGroupOutput#WorkGroup
   */
  readonly workGroup?: WorkGroup;

}

/**
 * @schema ListDataCatalogsInput
 */
export interface ListDataCatalogsInput {
  /**
   * @schema ListDataCatalogsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListDataCatalogsInput#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListDataCatalogsOutput
 */
export interface ListDataCatalogsOutput {
  /**
   * @schema ListDataCatalogsOutput#DataCatalogsSummary
   */
  readonly dataCatalogsSummary?: DataCatalogSummary[];

  /**
   * @schema ListDataCatalogsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListDatabasesInput
 */
export interface ListDatabasesInput {
  /**
   * @schema ListDatabasesInput#CatalogName
   */
  readonly catalogName: string;

  /**
   * @schema ListDatabasesInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListDatabasesInput#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListDatabasesOutput
 */
export interface ListDatabasesOutput {
  /**
   * @schema ListDatabasesOutput#DatabaseList
   */
  readonly databaseList?: Database[];

  /**
   * @schema ListDatabasesOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListNamedQueriesInput
 */
export interface ListNamedQueriesInput {
  /**
   * @schema ListNamedQueriesInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListNamedQueriesInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListNamedQueriesInput#WorkGroup
   */
  readonly workGroup?: string;

}

/**
 * @schema ListNamedQueriesOutput
 */
export interface ListNamedQueriesOutput {
  /**
   * @schema ListNamedQueriesOutput#NamedQueryIds
   */
  readonly namedQueryIds?: string[];

  /**
   * @schema ListNamedQueriesOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListQueryExecutionsInput
 */
export interface ListQueryExecutionsInput {
  /**
   * @schema ListQueryExecutionsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListQueryExecutionsInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListQueryExecutionsInput#WorkGroup
   */
  readonly workGroup?: string;

}

/**
 * @schema ListQueryExecutionsOutput
 */
export interface ListQueryExecutionsOutput {
  /**
   * @schema ListQueryExecutionsOutput#QueryExecutionIds
   */
  readonly queryExecutionIds?: string[];

  /**
   * @schema ListQueryExecutionsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTableMetadataInput
 */
export interface ListTableMetadataInput {
  /**
   * @schema ListTableMetadataInput#CatalogName
   */
  readonly catalogName: string;

  /**
   * @schema ListTableMetadataInput#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema ListTableMetadataInput#Expression
   */
  readonly expression?: string;

  /**
   * @schema ListTableMetadataInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListTableMetadataInput#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListTableMetadataOutput
 */
export interface ListTableMetadataOutput {
  /**
   * @schema ListTableMetadataOutput#TableMetadataList
   */
  readonly tableMetadataList?: TableMetadata[];

  /**
   * @schema ListTableMetadataOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsForResourceInput
 */
export interface ListTagsForResourceInput {
  /**
   * @schema ListTagsForResourceInput#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema ListTagsForResourceInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListTagsForResourceInput#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListTagsForResourceOutput
 */
export interface ListTagsForResourceOutput {
  /**
   * @schema ListTagsForResourceOutput#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema ListTagsForResourceOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListWorkGroupsInput
 */
export interface ListWorkGroupsInput {
  /**
   * @schema ListWorkGroupsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListWorkGroupsInput#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListWorkGroupsOutput
 */
export interface ListWorkGroupsOutput {
  /**
   * @schema ListWorkGroupsOutput#WorkGroups
   */
  readonly workGroups?: WorkGroupSummary[];

  /**
   * @schema ListWorkGroupsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema StartQueryExecutionInput
 */
export interface StartQueryExecutionInput {
  /**
   * @schema StartQueryExecutionInput#QueryString
   */
  readonly queryString: string;

  /**
   * @schema StartQueryExecutionInput#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema StartQueryExecutionInput#QueryExecutionContext
   */
  readonly queryExecutionContext?: QueryExecutionContext;

  /**
   * @schema StartQueryExecutionInput#ResultConfiguration
   */
  readonly resultConfiguration?: ResultConfiguration;

  /**
   * @schema StartQueryExecutionInput#WorkGroup
   */
  readonly workGroup?: string;

}

/**
 * @schema StartQueryExecutionOutput
 */
export interface StartQueryExecutionOutput {
  /**
   * @schema StartQueryExecutionOutput#QueryExecutionId
   */
  readonly queryExecutionId?: string;

}

/**
 * @schema StopQueryExecutionInput
 */
export interface StopQueryExecutionInput {
  /**
   * @schema StopQueryExecutionInput#QueryExecutionId
   */
  readonly queryExecutionId: string;

}

/**
 * @schema StopQueryExecutionOutput
 */
export interface StopQueryExecutionOutput {
}

/**
 * @schema TagResourceInput
 */
export interface TagResourceInput {
  /**
   * @schema TagResourceInput#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema TagResourceInput#Tags
   */
  readonly tags: Tag[];

}

/**
 * @schema TagResourceOutput
 */
export interface TagResourceOutput {
}

/**
 * @schema UntagResourceInput
 */
export interface UntagResourceInput {
  /**
   * @schema UntagResourceInput#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema UntagResourceInput#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UntagResourceOutput
 */
export interface UntagResourceOutput {
}

/**
 * @schema UpdateDataCatalogInput
 */
export interface UpdateDataCatalogInput {
  /**
   * @schema UpdateDataCatalogInput#Name
   */
  readonly name: string;

  /**
   * @schema UpdateDataCatalogInput#Type
   */
  readonly type: string;

  /**
   * @schema UpdateDataCatalogInput#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateDataCatalogInput#Parameters
   */
  readonly parameters?: { [key: string]: string };

}

/**
 * @schema UpdateDataCatalogOutput
 */
export interface UpdateDataCatalogOutput {
}

/**
 * @schema UpdateWorkGroupInput
 */
export interface UpdateWorkGroupInput {
  /**
   * @schema UpdateWorkGroupInput#WorkGroup
   */
  readonly workGroup: string;

  /**
   * @schema UpdateWorkGroupInput#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateWorkGroupInput#ConfigurationUpdates
   */
  readonly configurationUpdates?: WorkGroupConfigurationUpdates;

  /**
   * @schema UpdateWorkGroupInput#State
   */
  readonly state?: string;

}

/**
 * @schema UpdateWorkGroupOutput
 */
export interface UpdateWorkGroupOutput {
}

/**
 * @schema NamedQuery
 */
export interface NamedQuery {
  /**
   * @schema NamedQuery#Name
   */
  readonly name: string;

  /**
   * @schema NamedQuery#Description
   */
  readonly description?: string;

  /**
   * @schema NamedQuery#Database
   */
  readonly database: string;

  /**
   * @schema NamedQuery#QueryString
   */
  readonly queryString: string;

  /**
   * @schema NamedQuery#NamedQueryId
   */
  readonly namedQueryId?: string;

  /**
   * @schema NamedQuery#WorkGroup
   */
  readonly workGroup?: string;

}

/**
 * @schema UnprocessedNamedQueryId
 */
export interface UnprocessedNamedQueryId {
  /**
   * @schema UnprocessedNamedQueryId#NamedQueryId
   */
  readonly namedQueryId?: string;

  /**
   * @schema UnprocessedNamedQueryId#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema UnprocessedNamedQueryId#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema QueryExecution
 */
export interface QueryExecution {
  /**
   * @schema QueryExecution#QueryExecutionId
   */
  readonly queryExecutionId?: string;

  /**
   * @schema QueryExecution#Query
   */
  readonly query?: string;

  /**
   * @schema QueryExecution#StatementType
   */
  readonly statementType?: string;

  /**
   * @schema QueryExecution#ResultConfiguration
   */
  readonly resultConfiguration?: ResultConfiguration;

  /**
   * @schema QueryExecution#QueryExecutionContext
   */
  readonly queryExecutionContext?: QueryExecutionContext;

  /**
   * @schema QueryExecution#Status
   */
  readonly status?: QueryExecutionStatus;

  /**
   * @schema QueryExecution#Statistics
   */
  readonly statistics?: QueryExecutionStatistics;

  /**
   * @schema QueryExecution#WorkGroup
   */
  readonly workGroup?: string;

}

/**
 * @schema UnprocessedQueryExecutionId
 */
export interface UnprocessedQueryExecutionId {
  /**
   * @schema UnprocessedQueryExecutionId#QueryExecutionId
   */
  readonly queryExecutionId?: string;

  /**
   * @schema UnprocessedQueryExecutionId#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema UnprocessedQueryExecutionId#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema Tag
 */
export interface Tag {
  /**
   * @schema Tag#Key
   */
  readonly key?: string;

  /**
   * @schema Tag#Value
   */
  readonly value?: string;

}

/**
 * @schema WorkGroupConfiguration
 */
export interface WorkGroupConfiguration {
  /**
   * @schema WorkGroupConfiguration#ResultConfiguration
   */
  readonly resultConfiguration?: ResultConfiguration;

  /**
   * @schema WorkGroupConfiguration#EnforceWorkGroupConfiguration
   */
  readonly enforceWorkGroupConfiguration?: boolean;

  /**
   * @schema WorkGroupConfiguration#PublishCloudWatchMetricsEnabled
   */
  readonly publishCloudWatchMetricsEnabled?: boolean;

  /**
   * @schema WorkGroupConfiguration#BytesScannedCutoffPerQuery
   */
  readonly bytesScannedCutoffPerQuery?: number;

  /**
   * @schema WorkGroupConfiguration#RequesterPaysEnabled
   */
  readonly requesterPaysEnabled?: boolean;

}

/**
 * @schema DataCatalog
 */
export interface DataCatalog {
  /**
   * @schema DataCatalog#Name
   */
  readonly name: string;

  /**
   * @schema DataCatalog#Description
   */
  readonly description?: string;

  /**
   * @schema DataCatalog#Type
   */
  readonly type: string;

  /**
   * @schema DataCatalog#Parameters
   */
  readonly parameters?: { [key: string]: string };

}

/**
 * @schema Database
 */
export interface Database {
  /**
   * @schema Database#Name
   */
  readonly name: string;

  /**
   * @schema Database#Description
   */
  readonly description?: string;

  /**
   * @schema Database#Parameters
   */
  readonly parameters?: { [key: string]: string };

}

/**
 * @schema ResultSet
 */
export interface ResultSet {
  /**
   * @schema ResultSet#Rows
   */
  readonly rows?: Row[];

  /**
   * @schema ResultSet#ResultSetMetadata
   */
  readonly resultSetMetadata?: ResultSetMetadata;

}

/**
 * @schema TableMetadata
 */
export interface TableMetadata {
  /**
   * @schema TableMetadata#Name
   */
  readonly name: string;

  /**
   * @schema TableMetadata#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema TableMetadata#LastAccessTime
   */
  readonly lastAccessTime?: string;

  /**
   * @schema TableMetadata#TableType
   */
  readonly tableType?: string;

  /**
   * @schema TableMetadata#Columns
   */
  readonly columns?: Column[];

  /**
   * @schema TableMetadata#PartitionKeys
   */
  readonly partitionKeys?: Column[];

  /**
   * @schema TableMetadata#Parameters
   */
  readonly parameters?: { [key: string]: string };

}

/**
 * @schema WorkGroup
 */
export interface WorkGroup {
  /**
   * @schema WorkGroup#Name
   */
  readonly name: string;

  /**
   * @schema WorkGroup#State
   */
  readonly state?: string;

  /**
   * @schema WorkGroup#Configuration
   */
  readonly configuration?: WorkGroupConfiguration;

  /**
   * @schema WorkGroup#Description
   */
  readonly description?: string;

  /**
   * @schema WorkGroup#CreationTime
   */
  readonly creationTime?: string;

}

/**
 * @schema DataCatalogSummary
 */
export interface DataCatalogSummary {
  /**
   * @schema DataCatalogSummary#CatalogName
   */
  readonly catalogName?: string;

  /**
   * @schema DataCatalogSummary#Type
   */
  readonly type?: string;

}

/**
 * @schema WorkGroupSummary
 */
export interface WorkGroupSummary {
  /**
   * @schema WorkGroupSummary#Name
   */
  readonly name?: string;

  /**
   * @schema WorkGroupSummary#State
   */
  readonly state?: string;

  /**
   * @schema WorkGroupSummary#Description
   */
  readonly description?: string;

  /**
   * @schema WorkGroupSummary#CreationTime
   */
  readonly creationTime?: string;

}

/**
 * @schema QueryExecutionContext
 */
export interface QueryExecutionContext {
  /**
   * @schema QueryExecutionContext#Database
   */
  readonly database?: string;

  /**
   * @schema QueryExecutionContext#Catalog
   */
  readonly catalog?: string;

}

/**
 * @schema ResultConfiguration
 */
export interface ResultConfiguration {
  /**
   * @schema ResultConfiguration#OutputLocation
   */
  readonly outputLocation?: string;

  /**
   * @schema ResultConfiguration#EncryptionConfiguration
   */
  readonly encryptionConfiguration?: EncryptionConfiguration;

}

/**
 * @schema WorkGroupConfigurationUpdates
 */
export interface WorkGroupConfigurationUpdates {
  /**
   * @schema WorkGroupConfigurationUpdates#EnforceWorkGroupConfiguration
   */
  readonly enforceWorkGroupConfiguration?: boolean;

  /**
   * @schema WorkGroupConfigurationUpdates#ResultConfigurationUpdates
   */
  readonly resultConfigurationUpdates?: ResultConfigurationUpdates;

  /**
   * @schema WorkGroupConfigurationUpdates#PublishCloudWatchMetricsEnabled
   */
  readonly publishCloudWatchMetricsEnabled?: boolean;

  /**
   * @schema WorkGroupConfigurationUpdates#BytesScannedCutoffPerQuery
   */
  readonly bytesScannedCutoffPerQuery?: number;

  /**
   * @schema WorkGroupConfigurationUpdates#RemoveBytesScannedCutoffPerQuery
   */
  readonly removeBytesScannedCutoffPerQuery?: boolean;

  /**
   * @schema WorkGroupConfigurationUpdates#RequesterPaysEnabled
   */
  readonly requesterPaysEnabled?: boolean;

}

/**
 * @schema QueryExecutionStatus
 */
export interface QueryExecutionStatus {
  /**
   * @schema QueryExecutionStatus#State
   */
  readonly state?: string;

  /**
   * @schema QueryExecutionStatus#StateChangeReason
   */
  readonly stateChangeReason?: string;

  /**
   * @schema QueryExecutionStatus#SubmissionDateTime
   */
  readonly submissionDateTime?: string;

  /**
   * @schema QueryExecutionStatus#CompletionDateTime
   */
  readonly completionDateTime?: string;

}

/**
 * @schema QueryExecutionStatistics
 */
export interface QueryExecutionStatistics {
  /**
   * @schema QueryExecutionStatistics#EngineExecutionTimeInMillis
   */
  readonly engineExecutionTimeInMillis?: number;

  /**
   * @schema QueryExecutionStatistics#DataScannedInBytes
   */
  readonly dataScannedInBytes?: number;

  /**
   * @schema QueryExecutionStatistics#DataManifestLocation
   */
  readonly dataManifestLocation?: string;

  /**
   * @schema QueryExecutionStatistics#TotalExecutionTimeInMillis
   */
  readonly totalExecutionTimeInMillis?: number;

  /**
   * @schema QueryExecutionStatistics#QueryQueueTimeInMillis
   */
  readonly queryQueueTimeInMillis?: number;

  /**
   * @schema QueryExecutionStatistics#QueryPlanningTimeInMillis
   */
  readonly queryPlanningTimeInMillis?: number;

  /**
   * @schema QueryExecutionStatistics#ServiceProcessingTimeInMillis
   */
  readonly serviceProcessingTimeInMillis?: number;

}

/**
 * @schema Row
 */
export interface Row {
  /**
   * @schema Row#Data
   */
  readonly data?: Datum[];

}

/**
 * @schema ResultSetMetadata
 */
export interface ResultSetMetadata {
  /**
   * @schema ResultSetMetadata#ColumnInfo
   */
  readonly columnInfo?: ColumnInfo[];

}

/**
 * @schema Column
 */
export interface Column {
  /**
   * @schema Column#Name
   */
  readonly name: string;

  /**
   * @schema Column#Type
   */
  readonly type?: string;

  /**
   * @schema Column#Comment
   */
  readonly comment?: string;

}

/**
 * @schema EncryptionConfiguration
 */
export interface EncryptionConfiguration {
  /**
   * @schema EncryptionConfiguration#EncryptionOption
   */
  readonly encryptionOption: string;

  /**
   * @schema EncryptionConfiguration#KmsKey
   */
  readonly kmsKey?: string;

}

/**
 * @schema ResultConfigurationUpdates
 */
export interface ResultConfigurationUpdates {
  /**
   * @schema ResultConfigurationUpdates#OutputLocation
   */
  readonly outputLocation?: string;

  /**
   * @schema ResultConfigurationUpdates#RemoveOutputLocation
   */
  readonly removeOutputLocation?: boolean;

  /**
   * @schema ResultConfigurationUpdates#EncryptionConfiguration
   */
  readonly encryptionConfiguration?: EncryptionConfiguration;

  /**
   * @schema ResultConfigurationUpdates#RemoveEncryptionConfiguration
   */
  readonly removeEncryptionConfiguration?: boolean;

}

/**
 * @schema Datum
 */
export interface Datum {
  /**
   * @schema Datum#VarCharValue
   */
  readonly varCharValue?: string;

}

/**
 * @schema ColumnInfo
 */
export interface ColumnInfo {
  /**
   * @schema ColumnInfo#CatalogName
   */
  readonly catalogName?: string;

  /**
   * @schema ColumnInfo#SchemaName
   */
  readonly schemaName?: string;

  /**
   * @schema ColumnInfo#TableName
   */
  readonly tableName?: string;

  /**
   * @schema ColumnInfo#Name
   */
  readonly name: string;

  /**
   * @schema ColumnInfo#Label
   */
  readonly label?: string;

  /**
   * @schema ColumnInfo#Type
   */
  readonly type: string;

  /**
   * @schema ColumnInfo#Precision
   */
  readonly precision?: number;

  /**
   * @schema ColumnInfo#Scale
   */
  readonly scale?: number;

  /**
   * @schema ColumnInfo#Nullable
   */
  readonly nullable?: string;

  /**
   * @schema ColumnInfo#CaseSensitive
   */
  readonly caseSensitive?: boolean;

}
