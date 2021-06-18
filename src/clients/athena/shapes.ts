/**
 * @schema AthenaBatchGetNamedQueryInput
 */
export interface AthenaBatchGetNamedQueryInput {
  /**
   * @schema AthenaBatchGetNamedQueryInput#NamedQueryIds
   */
  readonly namedQueryIds: string[];

}

/**
 * @schema AthenaBatchGetNamedQueryOutput
 */
export interface AthenaBatchGetNamedQueryOutput {
  /**
   * @schema AthenaBatchGetNamedQueryOutput#NamedQueries
   */
  readonly namedQueries?: AthenaNamedQuery[];

  /**
   * @schema AthenaBatchGetNamedQueryOutput#UnprocessedNamedQueryIds
   */
  readonly unprocessedNamedQueryIds?: AthenaUnprocessedNamedQueryId[];

}

/**
 * @schema AthenaBatchGetQueryExecutionInput
 */
export interface AthenaBatchGetQueryExecutionInput {
  /**
   * @schema AthenaBatchGetQueryExecutionInput#QueryExecutionIds
   */
  readonly queryExecutionIds: string[];

}

/**
 * @schema AthenaBatchGetQueryExecutionOutput
 */
export interface AthenaBatchGetQueryExecutionOutput {
  /**
   * @schema AthenaBatchGetQueryExecutionOutput#QueryExecutions
   */
  readonly queryExecutions?: AthenaQueryExecution[];

  /**
   * @schema AthenaBatchGetQueryExecutionOutput#UnprocessedQueryExecutionIds
   */
  readonly unprocessedQueryExecutionIds?: AthenaUnprocessedQueryExecutionId[];

}

/**
 * @schema AthenaCreateDataCatalogInput
 */
export interface AthenaCreateDataCatalogInput {
  /**
   * @schema AthenaCreateDataCatalogInput#Name
   */
  readonly name: string;

  /**
   * @schema AthenaCreateDataCatalogInput#Type
   */
  readonly type: string;

  /**
   * @schema AthenaCreateDataCatalogInput#Description
   */
  readonly description?: string;

  /**
   * @schema AthenaCreateDataCatalogInput#Parameters
   */
  readonly parameters?: { [key: string]: string };

  /**
   * @schema AthenaCreateDataCatalogInput#Tags
   */
  readonly tags?: AthenaTag[];

}

/**
 * @schema AthenaCreateDataCatalogOutput
 */
export interface AthenaCreateDataCatalogOutput {
}

/**
 * @schema AthenaCreateNamedQueryInput
 */
export interface AthenaCreateNamedQueryInput {
  /**
   * @schema AthenaCreateNamedQueryInput#Name
   */
  readonly name: string;

  /**
   * @schema AthenaCreateNamedQueryInput#Description
   */
  readonly description?: string;

  /**
   * @schema AthenaCreateNamedQueryInput#Database
   */
  readonly database: string;

  /**
   * @schema AthenaCreateNamedQueryInput#QueryString
   */
  readonly queryString: string;

  /**
   * @schema AthenaCreateNamedQueryInput#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema AthenaCreateNamedQueryInput#WorkGroup
   */
  readonly workGroup?: string;

}

/**
 * @schema AthenaCreateNamedQueryOutput
 */
export interface AthenaCreateNamedQueryOutput {
  /**
   * @schema AthenaCreateNamedQueryOutput#NamedQueryId
   */
  readonly namedQueryId?: string;

}

/**
 * @schema AthenaCreateWorkGroupInput
 */
export interface AthenaCreateWorkGroupInput {
  /**
   * @schema AthenaCreateWorkGroupInput#Name
   */
  readonly name: string;

  /**
   * @schema AthenaCreateWorkGroupInput#Configuration
   */
  readonly configuration?: AthenaWorkGroupConfiguration;

  /**
   * @schema AthenaCreateWorkGroupInput#Description
   */
  readonly description?: string;

  /**
   * @schema AthenaCreateWorkGroupInput#Tags
   */
  readonly tags?: AthenaTag[];

}

/**
 * @schema AthenaCreateWorkGroupOutput
 */
export interface AthenaCreateWorkGroupOutput {
}

/**
 * @schema AthenaDeleteDataCatalogInput
 */
export interface AthenaDeleteDataCatalogInput {
  /**
   * @schema AthenaDeleteDataCatalogInput#Name
   */
  readonly name: string;

}

/**
 * @schema AthenaDeleteDataCatalogOutput
 */
export interface AthenaDeleteDataCatalogOutput {
}

/**
 * @schema AthenaDeleteNamedQueryInput
 */
export interface AthenaDeleteNamedQueryInput {
  /**
   * @schema AthenaDeleteNamedQueryInput#NamedQueryId
   */
  readonly namedQueryId: string;

}

/**
 * @schema AthenaDeleteNamedQueryOutput
 */
export interface AthenaDeleteNamedQueryOutput {
}

/**
 * @schema AthenaDeleteWorkGroupInput
 */
export interface AthenaDeleteWorkGroupInput {
  /**
   * @schema AthenaDeleteWorkGroupInput#WorkGroup
   */
  readonly workGroup: string;

  /**
   * @schema AthenaDeleteWorkGroupInput#RecursiveDeleteOption
   */
  readonly recursiveDeleteOption?: boolean;

}

/**
 * @schema AthenaDeleteWorkGroupOutput
 */
export interface AthenaDeleteWorkGroupOutput {
}

/**
 * @schema AthenaGetDataCatalogInput
 */
export interface AthenaGetDataCatalogInput {
  /**
   * @schema AthenaGetDataCatalogInput#Name
   */
  readonly name: string;

}

/**
 * @schema AthenaGetDataCatalogOutput
 */
export interface AthenaGetDataCatalogOutput {
  /**
   * @schema AthenaGetDataCatalogOutput#DataCatalog
   */
  readonly dataCatalog?: AthenaDataCatalog;

}

/**
 * @schema AthenaGetDatabaseInput
 */
export interface AthenaGetDatabaseInput {
  /**
   * @schema AthenaGetDatabaseInput#CatalogName
   */
  readonly catalogName: string;

  /**
   * @schema AthenaGetDatabaseInput#DatabaseName
   */
  readonly databaseName: string;

}

/**
 * @schema AthenaGetDatabaseOutput
 */
export interface AthenaGetDatabaseOutput {
  /**
   * @schema AthenaGetDatabaseOutput#Database
   */
  readonly database?: AthenaDatabase;

}

/**
 * @schema AthenaGetNamedQueryInput
 */
export interface AthenaGetNamedQueryInput {
  /**
   * @schema AthenaGetNamedQueryInput#NamedQueryId
   */
  readonly namedQueryId: string;

}

/**
 * @schema AthenaGetNamedQueryOutput
 */
export interface AthenaGetNamedQueryOutput {
  /**
   * @schema AthenaGetNamedQueryOutput#NamedQuery
   */
  readonly namedQuery?: AthenaNamedQuery;

}

/**
 * @schema AthenaGetQueryExecutionInput
 */
export interface AthenaGetQueryExecutionInput {
  /**
   * @schema AthenaGetQueryExecutionInput#QueryExecutionId
   */
  readonly queryExecutionId: string;

}

/**
 * @schema AthenaGetQueryExecutionOutput
 */
export interface AthenaGetQueryExecutionOutput {
  /**
   * @schema AthenaGetQueryExecutionOutput#QueryExecution
   */
  readonly queryExecution?: AthenaQueryExecution;

}

/**
 * @schema AthenaGetQueryResultsInput
 */
export interface AthenaGetQueryResultsInput {
  /**
   * @schema AthenaGetQueryResultsInput#QueryExecutionId
   */
  readonly queryExecutionId: string;

  /**
   * @schema AthenaGetQueryResultsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AthenaGetQueryResultsInput#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema AthenaGetQueryResultsOutput
 */
export interface AthenaGetQueryResultsOutput {
  /**
   * @schema AthenaGetQueryResultsOutput#UpdateCount
   */
  readonly updateCount?: number;

  /**
   * @schema AthenaGetQueryResultsOutput#ResultSet
   */
  readonly resultSet?: AthenaResultSet;

  /**
   * @schema AthenaGetQueryResultsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AthenaGetTableMetadataInput
 */
export interface AthenaGetTableMetadataInput {
  /**
   * @schema AthenaGetTableMetadataInput#CatalogName
   */
  readonly catalogName: string;

  /**
   * @schema AthenaGetTableMetadataInput#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema AthenaGetTableMetadataInput#TableName
   */
  readonly tableName: string;

}

/**
 * @schema AthenaGetTableMetadataOutput
 */
export interface AthenaGetTableMetadataOutput {
  /**
   * @schema AthenaGetTableMetadataOutput#TableMetadata
   */
  readonly tableMetadata?: AthenaTableMetadata;

}

/**
 * @schema AthenaGetWorkGroupInput
 */
export interface AthenaGetWorkGroupInput {
  /**
   * @schema AthenaGetWorkGroupInput#WorkGroup
   */
  readonly workGroup: string;

}

/**
 * @schema AthenaGetWorkGroupOutput
 */
export interface AthenaGetWorkGroupOutput {
  /**
   * @schema AthenaGetWorkGroupOutput#WorkGroup
   */
  readonly workGroup?: AthenaWorkGroup;

}

/**
 * @schema AthenaListDataCatalogsInput
 */
export interface AthenaListDataCatalogsInput {
  /**
   * @schema AthenaListDataCatalogsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AthenaListDataCatalogsInput#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema AthenaListDataCatalogsOutput
 */
export interface AthenaListDataCatalogsOutput {
  /**
   * @schema AthenaListDataCatalogsOutput#DataCatalogsSummary
   */
  readonly dataCatalogsSummary?: AthenaDataCatalogSummary[];

  /**
   * @schema AthenaListDataCatalogsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AthenaListDatabasesInput
 */
export interface AthenaListDatabasesInput {
  /**
   * @schema AthenaListDatabasesInput#CatalogName
   */
  readonly catalogName: string;

  /**
   * @schema AthenaListDatabasesInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AthenaListDatabasesInput#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema AthenaListDatabasesOutput
 */
export interface AthenaListDatabasesOutput {
  /**
   * @schema AthenaListDatabasesOutput#DatabaseList
   */
  readonly databaseList?: AthenaDatabase[];

  /**
   * @schema AthenaListDatabasesOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AthenaListNamedQueriesInput
 */
export interface AthenaListNamedQueriesInput {
  /**
   * @schema AthenaListNamedQueriesInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AthenaListNamedQueriesInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema AthenaListNamedQueriesInput#WorkGroup
   */
  readonly workGroup?: string;

}

/**
 * @schema AthenaListNamedQueriesOutput
 */
export interface AthenaListNamedQueriesOutput {
  /**
   * @schema AthenaListNamedQueriesOutput#NamedQueryIds
   */
  readonly namedQueryIds?: string[];

  /**
   * @schema AthenaListNamedQueriesOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AthenaListQueryExecutionsInput
 */
export interface AthenaListQueryExecutionsInput {
  /**
   * @schema AthenaListQueryExecutionsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AthenaListQueryExecutionsInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema AthenaListQueryExecutionsInput#WorkGroup
   */
  readonly workGroup?: string;

}

/**
 * @schema AthenaListQueryExecutionsOutput
 */
export interface AthenaListQueryExecutionsOutput {
  /**
   * @schema AthenaListQueryExecutionsOutput#QueryExecutionIds
   */
  readonly queryExecutionIds?: string[];

  /**
   * @schema AthenaListQueryExecutionsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AthenaListTableMetadataInput
 */
export interface AthenaListTableMetadataInput {
  /**
   * @schema AthenaListTableMetadataInput#CatalogName
   */
  readonly catalogName: string;

  /**
   * @schema AthenaListTableMetadataInput#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema AthenaListTableMetadataInput#Expression
   */
  readonly expression?: string;

  /**
   * @schema AthenaListTableMetadataInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AthenaListTableMetadataInput#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema AthenaListTableMetadataOutput
 */
export interface AthenaListTableMetadataOutput {
  /**
   * @schema AthenaListTableMetadataOutput#TableMetadataList
   */
  readonly tableMetadataList?: AthenaTableMetadata[];

  /**
   * @schema AthenaListTableMetadataOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AthenaListTagsForResourceInput
 */
export interface AthenaListTagsForResourceInput {
  /**
   * @schema AthenaListTagsForResourceInput#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema AthenaListTagsForResourceInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AthenaListTagsForResourceInput#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema AthenaListTagsForResourceOutput
 */
export interface AthenaListTagsForResourceOutput {
  /**
   * @schema AthenaListTagsForResourceOutput#Tags
   */
  readonly tags?: AthenaTag[];

  /**
   * @schema AthenaListTagsForResourceOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AthenaListWorkGroupsInput
 */
export interface AthenaListWorkGroupsInput {
  /**
   * @schema AthenaListWorkGroupsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AthenaListWorkGroupsInput#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema AthenaListWorkGroupsOutput
 */
export interface AthenaListWorkGroupsOutput {
  /**
   * @schema AthenaListWorkGroupsOutput#WorkGroups
   */
  readonly workGroups?: AthenaWorkGroupSummary[];

  /**
   * @schema AthenaListWorkGroupsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AthenaStartQueryExecutionInput
 */
export interface AthenaStartQueryExecutionInput {
  /**
   * @schema AthenaStartQueryExecutionInput#QueryString
   */
  readonly queryString: string;

  /**
   * @schema AthenaStartQueryExecutionInput#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema AthenaStartQueryExecutionInput#QueryExecutionContext
   */
  readonly queryExecutionContext?: AthenaQueryExecutionContext;

  /**
   * @schema AthenaStartQueryExecutionInput#ResultConfiguration
   */
  readonly resultConfiguration?: AthenaResultConfiguration;

  /**
   * @schema AthenaStartQueryExecutionInput#WorkGroup
   */
  readonly workGroup?: string;

}

/**
 * @schema AthenaStartQueryExecutionOutput
 */
export interface AthenaStartQueryExecutionOutput {
  /**
   * @schema AthenaStartQueryExecutionOutput#QueryExecutionId
   */
  readonly queryExecutionId?: string;

}

/**
 * @schema AthenaStopQueryExecutionInput
 */
export interface AthenaStopQueryExecutionInput {
  /**
   * @schema AthenaStopQueryExecutionInput#QueryExecutionId
   */
  readonly queryExecutionId: string;

}

/**
 * @schema AthenaStopQueryExecutionOutput
 */
export interface AthenaStopQueryExecutionOutput {
}

/**
 * @schema AthenaTagResourceInput
 */
export interface AthenaTagResourceInput {
  /**
   * @schema AthenaTagResourceInput#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema AthenaTagResourceInput#Tags
   */
  readonly tags: AthenaTag[];

}

/**
 * @schema AthenaTagResourceOutput
 */
export interface AthenaTagResourceOutput {
}

/**
 * @schema AthenaUntagResourceInput
 */
export interface AthenaUntagResourceInput {
  /**
   * @schema AthenaUntagResourceInput#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema AthenaUntagResourceInput#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema AthenaUntagResourceOutput
 */
export interface AthenaUntagResourceOutput {
}

/**
 * @schema AthenaUpdateDataCatalogInput
 */
export interface AthenaUpdateDataCatalogInput {
  /**
   * @schema AthenaUpdateDataCatalogInput#Name
   */
  readonly name: string;

  /**
   * @schema AthenaUpdateDataCatalogInput#Type
   */
  readonly type: string;

  /**
   * @schema AthenaUpdateDataCatalogInput#Description
   */
  readonly description?: string;

  /**
   * @schema AthenaUpdateDataCatalogInput#Parameters
   */
  readonly parameters?: { [key: string]: string };

}

/**
 * @schema AthenaUpdateDataCatalogOutput
 */
export interface AthenaUpdateDataCatalogOutput {
}

/**
 * @schema AthenaUpdateWorkGroupInput
 */
export interface AthenaUpdateWorkGroupInput {
  /**
   * @schema AthenaUpdateWorkGroupInput#WorkGroup
   */
  readonly workGroup: string;

  /**
   * @schema AthenaUpdateWorkGroupInput#Description
   */
  readonly description?: string;

  /**
   * @schema AthenaUpdateWorkGroupInput#ConfigurationUpdates
   */
  readonly configurationUpdates?: AthenaWorkGroupConfigurationUpdates;

  /**
   * @schema AthenaUpdateWorkGroupInput#State
   */
  readonly state?: string;

}

/**
 * @schema AthenaUpdateWorkGroupOutput
 */
export interface AthenaUpdateWorkGroupOutput {
}

/**
 * @schema AthenaNamedQuery
 */
export interface AthenaNamedQuery {
  /**
   * @schema AthenaNamedQuery#Name
   */
  readonly name: string;

  /**
   * @schema AthenaNamedQuery#Description
   */
  readonly description?: string;

  /**
   * @schema AthenaNamedQuery#Database
   */
  readonly database: string;

  /**
   * @schema AthenaNamedQuery#QueryString
   */
  readonly queryString: string;

  /**
   * @schema AthenaNamedQuery#NamedQueryId
   */
  readonly namedQueryId?: string;

  /**
   * @schema AthenaNamedQuery#WorkGroup
   */
  readonly workGroup?: string;

}

/**
 * @schema AthenaUnprocessedNamedQueryId
 */
export interface AthenaUnprocessedNamedQueryId {
  /**
   * @schema AthenaUnprocessedNamedQueryId#NamedQueryId
   */
  readonly namedQueryId?: string;

  /**
   * @schema AthenaUnprocessedNamedQueryId#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema AthenaUnprocessedNamedQueryId#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema AthenaQueryExecution
 */
export interface AthenaQueryExecution {
  /**
   * @schema AthenaQueryExecution#QueryExecutionId
   */
  readonly queryExecutionId?: string;

  /**
   * @schema AthenaQueryExecution#Query
   */
  readonly query?: string;

  /**
   * @schema AthenaQueryExecution#StatementType
   */
  readonly statementType?: string;

  /**
   * @schema AthenaQueryExecution#ResultConfiguration
   */
  readonly resultConfiguration?: AthenaResultConfiguration;

  /**
   * @schema AthenaQueryExecution#QueryExecutionContext
   */
  readonly queryExecutionContext?: AthenaQueryExecutionContext;

  /**
   * @schema AthenaQueryExecution#Status
   */
  readonly status?: AthenaQueryExecutionStatus;

  /**
   * @schema AthenaQueryExecution#Statistics
   */
  readonly statistics?: AthenaQueryExecutionStatistics;

  /**
   * @schema AthenaQueryExecution#WorkGroup
   */
  readonly workGroup?: string;

}

/**
 * @schema AthenaUnprocessedQueryExecutionId
 */
export interface AthenaUnprocessedQueryExecutionId {
  /**
   * @schema AthenaUnprocessedQueryExecutionId#QueryExecutionId
   */
  readonly queryExecutionId?: string;

  /**
   * @schema AthenaUnprocessedQueryExecutionId#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema AthenaUnprocessedQueryExecutionId#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema AthenaTag
 */
export interface AthenaTag {
  /**
   * @schema AthenaTag#Key
   */
  readonly key?: string;

  /**
   * @schema AthenaTag#Value
   */
  readonly value?: string;

}

/**
 * @schema AthenaWorkGroupConfiguration
 */
export interface AthenaWorkGroupConfiguration {
  /**
   * @schema AthenaWorkGroupConfiguration#ResultConfiguration
   */
  readonly resultConfiguration?: AthenaResultConfiguration;

  /**
   * @schema AthenaWorkGroupConfiguration#EnforceWorkGroupConfiguration
   */
  readonly enforceWorkGroupConfiguration?: boolean;

  /**
   * @schema AthenaWorkGroupConfiguration#PublishCloudWatchMetricsEnabled
   */
  readonly publishCloudWatchMetricsEnabled?: boolean;

  /**
   * @schema AthenaWorkGroupConfiguration#BytesScannedCutoffPerQuery
   */
  readonly bytesScannedCutoffPerQuery?: number;

  /**
   * @schema AthenaWorkGroupConfiguration#RequesterPaysEnabled
   */
  readonly requesterPaysEnabled?: boolean;

}

/**
 * @schema AthenaDataCatalog
 */
export interface AthenaDataCatalog {
  /**
   * @schema AthenaDataCatalog#Name
   */
  readonly name: string;

  /**
   * @schema AthenaDataCatalog#Description
   */
  readonly description?: string;

  /**
   * @schema AthenaDataCatalog#Type
   */
  readonly type: string;

  /**
   * @schema AthenaDataCatalog#Parameters
   */
  readonly parameters?: { [key: string]: string };

}

/**
 * @schema AthenaDatabase
 */
export interface AthenaDatabase {
  /**
   * @schema AthenaDatabase#Name
   */
  readonly name: string;

  /**
   * @schema AthenaDatabase#Description
   */
  readonly description?: string;

  /**
   * @schema AthenaDatabase#Parameters
   */
  readonly parameters?: { [key: string]: string };

}

/**
 * @schema AthenaResultSet
 */
export interface AthenaResultSet {
  /**
   * @schema AthenaResultSet#Rows
   */
  readonly rows?: AthenaRow[];

  /**
   * @schema AthenaResultSet#ResultSetMetadata
   */
  readonly resultSetMetadata?: AthenaResultSetMetadata;

}

/**
 * @schema AthenaTableMetadata
 */
export interface AthenaTableMetadata {
  /**
   * @schema AthenaTableMetadata#Name
   */
  readonly name: string;

  /**
   * @schema AthenaTableMetadata#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema AthenaTableMetadata#LastAccessTime
   */
  readonly lastAccessTime?: string;

  /**
   * @schema AthenaTableMetadata#TableType
   */
  readonly tableType?: string;

  /**
   * @schema AthenaTableMetadata#Columns
   */
  readonly columns?: AthenaColumn[];

  /**
   * @schema AthenaTableMetadata#PartitionKeys
   */
  readonly partitionKeys?: AthenaColumn[];

  /**
   * @schema AthenaTableMetadata#Parameters
   */
  readonly parameters?: { [key: string]: string };

}

/**
 * @schema AthenaWorkGroup
 */
export interface AthenaWorkGroup {
  /**
   * @schema AthenaWorkGroup#Name
   */
  readonly name: string;

  /**
   * @schema AthenaWorkGroup#State
   */
  readonly state?: string;

  /**
   * @schema AthenaWorkGroup#Configuration
   */
  readonly configuration?: AthenaWorkGroupConfiguration;

  /**
   * @schema AthenaWorkGroup#Description
   */
  readonly description?: string;

  /**
   * @schema AthenaWorkGroup#CreationTime
   */
  readonly creationTime?: string;

}

/**
 * @schema AthenaDataCatalogSummary
 */
export interface AthenaDataCatalogSummary {
  /**
   * @schema AthenaDataCatalogSummary#CatalogName
   */
  readonly catalogName?: string;

  /**
   * @schema AthenaDataCatalogSummary#Type
   */
  readonly type?: string;

}

/**
 * @schema AthenaWorkGroupSummary
 */
export interface AthenaWorkGroupSummary {
  /**
   * @schema AthenaWorkGroupSummary#Name
   */
  readonly name?: string;

  /**
   * @schema AthenaWorkGroupSummary#State
   */
  readonly state?: string;

  /**
   * @schema AthenaWorkGroupSummary#Description
   */
  readonly description?: string;

  /**
   * @schema AthenaWorkGroupSummary#CreationTime
   */
  readonly creationTime?: string;

}

/**
 * @schema AthenaQueryExecutionContext
 */
export interface AthenaQueryExecutionContext {
  /**
   * @schema AthenaQueryExecutionContext#Database
   */
  readonly database?: string;

  /**
   * @schema AthenaQueryExecutionContext#Catalog
   */
  readonly catalog?: string;

}

/**
 * @schema AthenaResultConfiguration
 */
export interface AthenaResultConfiguration {
  /**
   * @schema AthenaResultConfiguration#OutputLocation
   */
  readonly outputLocation?: string;

  /**
   * @schema AthenaResultConfiguration#EncryptionConfiguration
   */
  readonly encryptionConfiguration?: AthenaEncryptionConfiguration;

}

/**
 * @schema AthenaWorkGroupConfigurationUpdates
 */
export interface AthenaWorkGroupConfigurationUpdates {
  /**
   * @schema AthenaWorkGroupConfigurationUpdates#EnforceWorkGroupConfiguration
   */
  readonly enforceWorkGroupConfiguration?: boolean;

  /**
   * @schema AthenaWorkGroupConfigurationUpdates#ResultConfigurationUpdates
   */
  readonly resultConfigurationUpdates?: AthenaResultConfigurationUpdates;

  /**
   * @schema AthenaWorkGroupConfigurationUpdates#PublishCloudWatchMetricsEnabled
   */
  readonly publishCloudWatchMetricsEnabled?: boolean;

  /**
   * @schema AthenaWorkGroupConfigurationUpdates#BytesScannedCutoffPerQuery
   */
  readonly bytesScannedCutoffPerQuery?: number;

  /**
   * @schema AthenaWorkGroupConfigurationUpdates#RemoveBytesScannedCutoffPerQuery
   */
  readonly removeBytesScannedCutoffPerQuery?: boolean;

  /**
   * @schema AthenaWorkGroupConfigurationUpdates#RequesterPaysEnabled
   */
  readonly requesterPaysEnabled?: boolean;

}

/**
 * @schema AthenaQueryExecutionStatus
 */
export interface AthenaQueryExecutionStatus {
  /**
   * @schema AthenaQueryExecutionStatus#State
   */
  readonly state?: string;

  /**
   * @schema AthenaQueryExecutionStatus#StateChangeReason
   */
  readonly stateChangeReason?: string;

  /**
   * @schema AthenaQueryExecutionStatus#SubmissionDateTime
   */
  readonly submissionDateTime?: string;

  /**
   * @schema AthenaQueryExecutionStatus#CompletionDateTime
   */
  readonly completionDateTime?: string;

}

/**
 * @schema AthenaQueryExecutionStatistics
 */
export interface AthenaQueryExecutionStatistics {
  /**
   * @schema AthenaQueryExecutionStatistics#EngineExecutionTimeInMillis
   */
  readonly engineExecutionTimeInMillis?: number;

  /**
   * @schema AthenaQueryExecutionStatistics#DataScannedInBytes
   */
  readonly dataScannedInBytes?: number;

  /**
   * @schema AthenaQueryExecutionStatistics#DataManifestLocation
   */
  readonly dataManifestLocation?: string;

  /**
   * @schema AthenaQueryExecutionStatistics#TotalExecutionTimeInMillis
   */
  readonly totalExecutionTimeInMillis?: number;

  /**
   * @schema AthenaQueryExecutionStatistics#QueryQueueTimeInMillis
   */
  readonly queryQueueTimeInMillis?: number;

  /**
   * @schema AthenaQueryExecutionStatistics#QueryPlanningTimeInMillis
   */
  readonly queryPlanningTimeInMillis?: number;

  /**
   * @schema AthenaQueryExecutionStatistics#ServiceProcessingTimeInMillis
   */
  readonly serviceProcessingTimeInMillis?: number;

}

/**
 * @schema AthenaRow
 */
export interface AthenaRow {
  /**
   * @schema AthenaRow#Data
   */
  readonly data?: AthenaDatum[];

}

/**
 * @schema AthenaResultSetMetadata
 */
export interface AthenaResultSetMetadata {
  /**
   * @schema AthenaResultSetMetadata#ColumnInfo
   */
  readonly columnInfo?: AthenaColumnInfo[];

}

/**
 * @schema AthenaColumn
 */
export interface AthenaColumn {
  /**
   * @schema AthenaColumn#Name
   */
  readonly name: string;

  /**
   * @schema AthenaColumn#Type
   */
  readonly type?: string;

  /**
   * @schema AthenaColumn#Comment
   */
  readonly comment?: string;

}

/**
 * @schema AthenaEncryptionConfiguration
 */
export interface AthenaEncryptionConfiguration {
  /**
   * @schema AthenaEncryptionConfiguration#EncryptionOption
   */
  readonly encryptionOption: string;

  /**
   * @schema AthenaEncryptionConfiguration#KmsKey
   */
  readonly kmsKey?: string;

}

/**
 * @schema AthenaResultConfigurationUpdates
 */
export interface AthenaResultConfigurationUpdates {
  /**
   * @schema AthenaResultConfigurationUpdates#OutputLocation
   */
  readonly outputLocation?: string;

  /**
   * @schema AthenaResultConfigurationUpdates#RemoveOutputLocation
   */
  readonly removeOutputLocation?: boolean;

  /**
   * @schema AthenaResultConfigurationUpdates#EncryptionConfiguration
   */
  readonly encryptionConfiguration?: AthenaEncryptionConfiguration;

  /**
   * @schema AthenaResultConfigurationUpdates#RemoveEncryptionConfiguration
   */
  readonly removeEncryptionConfiguration?: boolean;

}

/**
 * @schema AthenaDatum
 */
export interface AthenaDatum {
  /**
   * @schema AthenaDatum#VarCharValue
   */
  readonly varCharValue?: string;

}

/**
 * @schema AthenaColumnInfo
 */
export interface AthenaColumnInfo {
  /**
   * @schema AthenaColumnInfo#CatalogName
   */
  readonly catalogName?: string;

  /**
   * @schema AthenaColumnInfo#SchemaName
   */
  readonly schemaName?: string;

  /**
   * @schema AthenaColumnInfo#TableName
   */
  readonly tableName?: string;

  /**
   * @schema AthenaColumnInfo#Name
   */
  readonly name: string;

  /**
   * @schema AthenaColumnInfo#Label
   */
  readonly label?: string;

  /**
   * @schema AthenaColumnInfo#Type
   */
  readonly type: string;

  /**
   * @schema AthenaColumnInfo#Precision
   */
  readonly precision?: number;

  /**
   * @schema AthenaColumnInfo#Scale
   */
  readonly scale?: number;

  /**
   * @schema AthenaColumnInfo#Nullable
   */
  readonly nullable?: string;

  /**
   * @schema AthenaColumnInfo#CaseSensitive
   */
  readonly caseSensitive?: boolean;

}
