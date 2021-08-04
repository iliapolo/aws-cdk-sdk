/**
 * @schema RedshiftDataCancelStatementRequest
 */
export interface RedshiftDataCancelStatementRequest {
  /**
   * @schema RedshiftDataCancelStatementRequest#Id
   */
  readonly id: string;

}

/**
 * @schema RedshiftDataCancelStatementResponse
 */
export interface RedshiftDataCancelStatementResponse {
  /**
   * @schema RedshiftDataCancelStatementResponse#Status
   */
  readonly status?: boolean;

}

/**
 * @schema RedshiftDataDescribeStatementRequest
 */
export interface RedshiftDataDescribeStatementRequest {
  /**
   * @schema RedshiftDataDescribeStatementRequest#Id
   */
  readonly id: string;

}

/**
 * @schema RedshiftDataDescribeStatementResponse
 */
export interface RedshiftDataDescribeStatementResponse {
  /**
   * @schema RedshiftDataDescribeStatementResponse#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema RedshiftDataDescribeStatementResponse#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema RedshiftDataDescribeStatementResponse#Database
   */
  readonly database?: string;

  /**
   * @schema RedshiftDataDescribeStatementResponse#DbUser
   */
  readonly dbUser?: string;

  /**
   * @schema RedshiftDataDescribeStatementResponse#Duration
   */
  readonly duration?: number;

  /**
   * @schema RedshiftDataDescribeStatementResponse#Error
   */
  readonly error?: string;

  /**
   * @schema RedshiftDataDescribeStatementResponse#Id
   */
  readonly id: string;

  /**
   * @schema RedshiftDataDescribeStatementResponse#QueryString
   */
  readonly queryString?: string;

  /**
   * @schema RedshiftDataDescribeStatementResponse#RedshiftPid
   */
  readonly redshiftPid?: number;

  /**
   * @schema RedshiftDataDescribeStatementResponse#RedshiftQueryId
   */
  readonly redshiftQueryId?: number;

  /**
   * @schema RedshiftDataDescribeStatementResponse#ResultRows
   */
  readonly resultRows?: number;

  /**
   * @schema RedshiftDataDescribeStatementResponse#ResultSize
   */
  readonly resultSize?: number;

  /**
   * @schema RedshiftDataDescribeStatementResponse#SecretArn
   */
  readonly secretArn?: string;

  /**
   * @schema RedshiftDataDescribeStatementResponse#Status
   */
  readonly status?: string;

  /**
   * @schema RedshiftDataDescribeStatementResponse#UpdatedAt
   */
  readonly updatedAt?: string;

}

/**
 * @schema RedshiftDataDescribeTableRequest
 */
export interface RedshiftDataDescribeTableRequest {
  /**
   * @schema RedshiftDataDescribeTableRequest#ClusterIdentifier
   */
  readonly clusterIdentifier: string;

  /**
   * @schema RedshiftDataDescribeTableRequest#Database
   */
  readonly database?: string;

  /**
   * @schema RedshiftDataDescribeTableRequest#DbUser
   */
  readonly dbUser?: string;

  /**
   * @schema RedshiftDataDescribeTableRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema RedshiftDataDescribeTableRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RedshiftDataDescribeTableRequest#Schema
   */
  readonly schema?: string;

  /**
   * @schema RedshiftDataDescribeTableRequest#SecretArn
   */
  readonly secretArn?: string;

  /**
   * @schema RedshiftDataDescribeTableRequest#Table
   */
  readonly table?: string;

}

/**
 * @schema RedshiftDataDescribeTableResponse
 */
export interface RedshiftDataDescribeTableResponse {
  /**
   * @schema RedshiftDataDescribeTableResponse#ColumnList
   */
  readonly columnList?: RedshiftDataColumnMetadata[];

  /**
   * @schema RedshiftDataDescribeTableResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RedshiftDataDescribeTableResponse#TableName
   */
  readonly tableName?: string;

}

/**
 * @schema RedshiftDataExecuteStatementInput
 */
export interface RedshiftDataExecuteStatementInput {
  /**
   * @schema RedshiftDataExecuteStatementInput#ClusterIdentifier
   */
  readonly clusterIdentifier: string;

  /**
   * @schema RedshiftDataExecuteStatementInput#Database
   */
  readonly database?: string;

  /**
   * @schema RedshiftDataExecuteStatementInput#DbUser
   */
  readonly dbUser?: string;

  /**
   * @schema RedshiftDataExecuteStatementInput#SecretArn
   */
  readonly secretArn?: string;

  /**
   * @schema RedshiftDataExecuteStatementInput#Sql
   */
  readonly sql: string;

  /**
   * @schema RedshiftDataExecuteStatementInput#StatementName
   */
  readonly statementName?: string;

  /**
   * @schema RedshiftDataExecuteStatementInput#WithEvent
   */
  readonly withEvent?: boolean;

}

/**
 * @schema RedshiftDataExecuteStatementOutput
 */
export interface RedshiftDataExecuteStatementOutput {
  /**
   * @schema RedshiftDataExecuteStatementOutput#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema RedshiftDataExecuteStatementOutput#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema RedshiftDataExecuteStatementOutput#Database
   */
  readonly database?: string;

  /**
   * @schema RedshiftDataExecuteStatementOutput#DbUser
   */
  readonly dbUser?: string;

  /**
   * @schema RedshiftDataExecuteStatementOutput#Id
   */
  readonly id?: string;

  /**
   * @schema RedshiftDataExecuteStatementOutput#SecretArn
   */
  readonly secretArn?: string;

}

/**
 * @schema RedshiftDataGetStatementResultRequest
 */
export interface RedshiftDataGetStatementResultRequest {
  /**
   * @schema RedshiftDataGetStatementResultRequest#Id
   */
  readonly id: string;

  /**
   * @schema RedshiftDataGetStatementResultRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema RedshiftDataGetStatementResultResponse
 */
export interface RedshiftDataGetStatementResultResponse {
  /**
   * @schema RedshiftDataGetStatementResultResponse#ColumnMetadata
   */
  readonly columnMetadata?: RedshiftDataColumnMetadata[];

  /**
   * @schema RedshiftDataGetStatementResultResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RedshiftDataGetStatementResultResponse#Records
   */
  readonly records: RedshiftDataField[][];

  /**
   * @schema RedshiftDataGetStatementResultResponse#TotalNumRows
   */
  readonly totalNumRows?: number;

}

/**
 * @schema RedshiftDataListDatabasesRequest
 */
export interface RedshiftDataListDatabasesRequest {
  /**
   * @schema RedshiftDataListDatabasesRequest#ClusterIdentifier
   */
  readonly clusterIdentifier: string;

  /**
   * @schema RedshiftDataListDatabasesRequest#Database
   */
  readonly database?: string;

  /**
   * @schema RedshiftDataListDatabasesRequest#DbUser
   */
  readonly dbUser?: string;

  /**
   * @schema RedshiftDataListDatabasesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema RedshiftDataListDatabasesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RedshiftDataListDatabasesRequest#SecretArn
   */
  readonly secretArn?: string;

}

/**
 * @schema RedshiftDataListDatabasesResponse
 */
export interface RedshiftDataListDatabasesResponse {
  /**
   * @schema RedshiftDataListDatabasesResponse#Databases
   */
  readonly databases?: string[];

  /**
   * @schema RedshiftDataListDatabasesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema RedshiftDataListSchemasRequest
 */
export interface RedshiftDataListSchemasRequest {
  /**
   * @schema RedshiftDataListSchemasRequest#ClusterIdentifier
   */
  readonly clusterIdentifier: string;

  /**
   * @schema RedshiftDataListSchemasRequest#Database
   */
  readonly database: string;

  /**
   * @schema RedshiftDataListSchemasRequest#DbUser
   */
  readonly dbUser?: string;

  /**
   * @schema RedshiftDataListSchemasRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema RedshiftDataListSchemasRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RedshiftDataListSchemasRequest#SchemaPattern
   */
  readonly schemaPattern?: string;

  /**
   * @schema RedshiftDataListSchemasRequest#SecretArn
   */
  readonly secretArn?: string;

}

/**
 * @schema RedshiftDataListSchemasResponse
 */
export interface RedshiftDataListSchemasResponse {
  /**
   * @schema RedshiftDataListSchemasResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RedshiftDataListSchemasResponse#Schemas
   */
  readonly schemas?: string[];

}

/**
 * @schema RedshiftDataListStatementsRequest
 */
export interface RedshiftDataListStatementsRequest {
  /**
   * @schema RedshiftDataListStatementsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema RedshiftDataListStatementsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RedshiftDataListStatementsRequest#StatementName
   */
  readonly statementName?: string;

  /**
   * @schema RedshiftDataListStatementsRequest#Status
   */
  readonly status?: string;

}

/**
 * @schema RedshiftDataListStatementsResponse
 */
export interface RedshiftDataListStatementsResponse {
  /**
   * @schema RedshiftDataListStatementsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RedshiftDataListStatementsResponse#Statements
   */
  readonly statements: RedshiftDataStatementData[];

}

/**
 * @schema RedshiftDataListTablesRequest
 */
export interface RedshiftDataListTablesRequest {
  /**
   * @schema RedshiftDataListTablesRequest#ClusterIdentifier
   */
  readonly clusterIdentifier: string;

  /**
   * @schema RedshiftDataListTablesRequest#Database
   */
  readonly database: string;

  /**
   * @schema RedshiftDataListTablesRequest#DbUser
   */
  readonly dbUser?: string;

  /**
   * @schema RedshiftDataListTablesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema RedshiftDataListTablesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RedshiftDataListTablesRequest#SchemaPattern
   */
  readonly schemaPattern?: string;

  /**
   * @schema RedshiftDataListTablesRequest#SecretArn
   */
  readonly secretArn?: string;

  /**
   * @schema RedshiftDataListTablesRequest#TablePattern
   */
  readonly tablePattern?: string;

}

/**
 * @schema RedshiftDataListTablesResponse
 */
export interface RedshiftDataListTablesResponse {
  /**
   * @schema RedshiftDataListTablesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RedshiftDataListTablesResponse#Tables
   */
  readonly tables?: RedshiftDataTableMember[];

}

/**
 * @schema RedshiftDataColumnMetadata
 */
export interface RedshiftDataColumnMetadata {
  /**
   * @schema RedshiftDataColumnMetadata#columnDefault
   */
  readonly columnDefault?: string;

  /**
   * @schema RedshiftDataColumnMetadata#isCaseSensitive
   */
  readonly isCaseSensitive?: boolean;

  /**
   * @schema RedshiftDataColumnMetadata#isCurrency
   */
  readonly isCurrency?: boolean;

  /**
   * @schema RedshiftDataColumnMetadata#isSigned
   */
  readonly isSigned?: boolean;

  /**
   * @schema RedshiftDataColumnMetadata#label
   */
  readonly label?: string;

  /**
   * @schema RedshiftDataColumnMetadata#length
   */
  readonly length?: number;

  /**
   * @schema RedshiftDataColumnMetadata#name
   */
  readonly name?: string;

  /**
   * @schema RedshiftDataColumnMetadata#nullable
   */
  readonly nullable?: number;

  /**
   * @schema RedshiftDataColumnMetadata#precision
   */
  readonly precision?: number;

  /**
   * @schema RedshiftDataColumnMetadata#scale
   */
  readonly scale?: number;

  /**
   * @schema RedshiftDataColumnMetadata#schemaName
   */
  readonly schemaName?: string;

  /**
   * @schema RedshiftDataColumnMetadata#tableName
   */
  readonly tableName?: string;

  /**
   * @schema RedshiftDataColumnMetadata#typeName
   */
  readonly typeName?: string;

}

/**
 * @schema RedshiftDataField
 */
export interface RedshiftDataField {
  /**
   * @schema RedshiftDataField#blobValue
   */
  readonly blobValue?: any;

  /**
   * @schema RedshiftDataField#booleanValue
   */
  readonly booleanValue?: boolean;

  /**
   * @schema RedshiftDataField#doubleValue
   */
  readonly doubleValue?: number;

  /**
   * @schema RedshiftDataField#isNull
   */
  readonly isNull?: boolean;

  /**
   * @schema RedshiftDataField#longValue
   */
  readonly longValue?: number;

  /**
   * @schema RedshiftDataField#stringValue
   */
  readonly stringValue?: string;

}

/**
 * @schema RedshiftDataStatementData
 */
export interface RedshiftDataStatementData {
  /**
   * @schema RedshiftDataStatementData#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema RedshiftDataStatementData#Id
   */
  readonly id: string;

  /**
   * @schema RedshiftDataStatementData#QueryString
   */
  readonly queryString?: string;

  /**
   * @schema RedshiftDataStatementData#SecretArn
   */
  readonly secretArn?: string;

  /**
   * @schema RedshiftDataStatementData#StatementName
   */
  readonly statementName?: string;

  /**
   * @schema RedshiftDataStatementData#Status
   */
  readonly status?: string;

  /**
   * @schema RedshiftDataStatementData#UpdatedAt
   */
  readonly updatedAt?: string;

}

/**
 * @schema RedshiftDataTableMember
 */
export interface RedshiftDataTableMember {
  /**
   * @schema RedshiftDataTableMember#name
   */
  readonly name?: string;

  /**
   * @schema RedshiftDataTableMember#schema
   */
  readonly schema?: string;

  /**
   * @schema RedshiftDataTableMember#type
   */
  readonly type?: string;

}
