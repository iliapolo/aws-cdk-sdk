/**
 * @schema CancelStatementRequest
 */
export interface CancelStatementRequest {
  /**
   * @schema CancelStatementRequest#Id
   */
  readonly id: string;

}

/**
 * @schema CancelStatementResponse
 */
export interface CancelStatementResponse {
  /**
   * @schema CancelStatementResponse#Status
   */
  readonly status?: boolean;

}

/**
 * @schema DescribeStatementRequest
 */
export interface DescribeStatementRequest {
  /**
   * @schema DescribeStatementRequest#Id
   */
  readonly id: string;

}

/**
 * @schema DescribeStatementResponse
 */
export interface DescribeStatementResponse {
  /**
   * @schema DescribeStatementResponse#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema DescribeStatementResponse#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema DescribeStatementResponse#Database
   */
  readonly database?: string;

  /**
   * @schema DescribeStatementResponse#DbUser
   */
  readonly dbUser?: string;

  /**
   * @schema DescribeStatementResponse#Duration
   */
  readonly duration?: number;

  /**
   * @schema DescribeStatementResponse#Error
   */
  readonly error?: string;

  /**
   * @schema DescribeStatementResponse#Id
   */
  readonly id: string;

  /**
   * @schema DescribeStatementResponse#QueryString
   */
  readonly queryString?: string;

  /**
   * @schema DescribeStatementResponse#RedshiftPid
   */
  readonly redshiftPid?: number;

  /**
   * @schema DescribeStatementResponse#RedshiftQueryId
   */
  readonly redshiftQueryId?: number;

  /**
   * @schema DescribeStatementResponse#ResultRows
   */
  readonly resultRows?: number;

  /**
   * @schema DescribeStatementResponse#ResultSize
   */
  readonly resultSize?: number;

  /**
   * @schema DescribeStatementResponse#SecretArn
   */
  readonly secretArn?: string;

  /**
   * @schema DescribeStatementResponse#Status
   */
  readonly status?: string;

  /**
   * @schema DescribeStatementResponse#UpdatedAt
   */
  readonly updatedAt?: string;

}

/**
 * @schema DescribeTableRequest
 */
export interface DescribeTableRequest {
  /**
   * @schema DescribeTableRequest#ClusterIdentifier
   */
  readonly clusterIdentifier: string;

  /**
   * @schema DescribeTableRequest#Database
   */
  readonly database?: string;

  /**
   * @schema DescribeTableRequest#DbUser
   */
  readonly dbUser?: string;

  /**
   * @schema DescribeTableRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeTableRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeTableRequest#Schema
   */
  readonly schema?: string;

  /**
   * @schema DescribeTableRequest#SecretArn
   */
  readonly secretArn?: string;

  /**
   * @schema DescribeTableRequest#Table
   */
  readonly table?: string;

}

/**
 * @schema DescribeTableResponse
 */
export interface DescribeTableResponse {
  /**
   * @schema DescribeTableResponse#ColumnList
   */
  readonly columnList?: ColumnMetadata[];

  /**
   * @schema DescribeTableResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeTableResponse#TableName
   */
  readonly tableName?: string;

}

/**
 * @schema ExecuteStatementInput
 */
export interface ExecuteStatementInput {
  /**
   * @schema ExecuteStatementInput#ClusterIdentifier
   */
  readonly clusterIdentifier: string;

  /**
   * @schema ExecuteStatementInput#Database
   */
  readonly database?: string;

  /**
   * @schema ExecuteStatementInput#DbUser
   */
  readonly dbUser?: string;

  /**
   * @schema ExecuteStatementInput#SecretArn
   */
  readonly secretArn?: string;

  /**
   * @schema ExecuteStatementInput#Sql
   */
  readonly sql: string;

  /**
   * @schema ExecuteStatementInput#StatementName
   */
  readonly statementName?: string;

  /**
   * @schema ExecuteStatementInput#WithEvent
   */
  readonly withEvent?: boolean;

}

/**
 * @schema ExecuteStatementOutput
 */
export interface ExecuteStatementOutput {
  /**
   * @schema ExecuteStatementOutput#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema ExecuteStatementOutput#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema ExecuteStatementOutput#Database
   */
  readonly database?: string;

  /**
   * @schema ExecuteStatementOutput#DbUser
   */
  readonly dbUser?: string;

  /**
   * @schema ExecuteStatementOutput#Id
   */
  readonly id?: string;

  /**
   * @schema ExecuteStatementOutput#SecretArn
   */
  readonly secretArn?: string;

}

/**
 * @schema GetStatementResultRequest
 */
export interface GetStatementResultRequest {
  /**
   * @schema GetStatementResultRequest#Id
   */
  readonly id: string;

  /**
   * @schema GetStatementResultRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetStatementResultResponse
 */
export interface GetStatementResultResponse {
  /**
   * @schema GetStatementResultResponse#ColumnMetadata
   */
  readonly columnMetadata?: ColumnMetadata[];

  /**
   * @schema GetStatementResultResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetStatementResultResponse#Records
   */
  readonly records: Field[][];

  /**
   * @schema GetStatementResultResponse#TotalNumRows
   */
  readonly totalNumRows?: number;

}

/**
 * @schema ListDatabasesRequest
 */
export interface ListDatabasesRequest {
  /**
   * @schema ListDatabasesRequest#ClusterIdentifier
   */
  readonly clusterIdentifier: string;

  /**
   * @schema ListDatabasesRequest#Database
   */
  readonly database?: string;

  /**
   * @schema ListDatabasesRequest#DbUser
   */
  readonly dbUser?: string;

  /**
   * @schema ListDatabasesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListDatabasesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListDatabasesRequest#SecretArn
   */
  readonly secretArn?: string;

}

/**
 * @schema ListDatabasesResponse
 */
export interface ListDatabasesResponse {
  /**
   * @schema ListDatabasesResponse#Databases
   */
  readonly databases?: string[];

  /**
   * @schema ListDatabasesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListSchemasRequest
 */
export interface ListSchemasRequest {
  /**
   * @schema ListSchemasRequest#ClusterIdentifier
   */
  readonly clusterIdentifier: string;

  /**
   * @schema ListSchemasRequest#Database
   */
  readonly database: string;

  /**
   * @schema ListSchemasRequest#DbUser
   */
  readonly dbUser?: string;

  /**
   * @schema ListSchemasRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListSchemasRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListSchemasRequest#SchemaPattern
   */
  readonly schemaPattern?: string;

  /**
   * @schema ListSchemasRequest#SecretArn
   */
  readonly secretArn?: string;

}

/**
 * @schema ListSchemasResponse
 */
export interface ListSchemasResponse {
  /**
   * @schema ListSchemasResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListSchemasResponse#Schemas
   */
  readonly schemas?: string[];

}

/**
 * @schema ListStatementsRequest
 */
export interface ListStatementsRequest {
  /**
   * @schema ListStatementsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListStatementsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListStatementsRequest#StatementName
   */
  readonly statementName?: string;

  /**
   * @schema ListStatementsRequest#Status
   */
  readonly status?: string;

}

/**
 * @schema ListStatementsResponse
 */
export interface ListStatementsResponse {
  /**
   * @schema ListStatementsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListStatementsResponse#Statements
   */
  readonly statements: StatementData[];

}

/**
 * @schema ListTablesRequest
 */
export interface ListTablesRequest {
  /**
   * @schema ListTablesRequest#ClusterIdentifier
   */
  readonly clusterIdentifier: string;

  /**
   * @schema ListTablesRequest#Database
   */
  readonly database: string;

  /**
   * @schema ListTablesRequest#DbUser
   */
  readonly dbUser?: string;

  /**
   * @schema ListTablesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListTablesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListTablesRequest#SchemaPattern
   */
  readonly schemaPattern?: string;

  /**
   * @schema ListTablesRequest#SecretArn
   */
  readonly secretArn?: string;

  /**
   * @schema ListTablesRequest#TablePattern
   */
  readonly tablePattern?: string;

}

/**
 * @schema ListTablesResponse
 */
export interface ListTablesResponse {
  /**
   * @schema ListTablesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListTablesResponse#Tables
   */
  readonly tables?: TableMember[];

}

/**
 * @schema ColumnMetadata
 */
export interface ColumnMetadata {
  /**
   * @schema ColumnMetadata#columnDefault
   */
  readonly columnDefault?: string;

  /**
   * @schema ColumnMetadata#isCaseSensitive
   */
  readonly isCaseSensitive?: boolean;

  /**
   * @schema ColumnMetadata#isCurrency
   */
  readonly isCurrency?: boolean;

  /**
   * @schema ColumnMetadata#isSigned
   */
  readonly isSigned?: boolean;

  /**
   * @schema ColumnMetadata#label
   */
  readonly label?: string;

  /**
   * @schema ColumnMetadata#length
   */
  readonly length?: number;

  /**
   * @schema ColumnMetadata#name
   */
  readonly name?: string;

  /**
   * @schema ColumnMetadata#nullable
   */
  readonly nullable?: number;

  /**
   * @schema ColumnMetadata#precision
   */
  readonly precision?: number;

  /**
   * @schema ColumnMetadata#scale
   */
  readonly scale?: number;

  /**
   * @schema ColumnMetadata#schemaName
   */
  readonly schemaName?: string;

  /**
   * @schema ColumnMetadata#tableName
   */
  readonly tableName?: string;

  /**
   * @schema ColumnMetadata#typeName
   */
  readonly typeName?: string;

}

/**
 * @schema Field
 */
export interface Field {
  /**
   * @schema Field#blobValue
   */
  readonly blobValue?: any;

  /**
   * @schema Field#booleanValue
   */
  readonly booleanValue?: boolean;

  /**
   * @schema Field#doubleValue
   */
  readonly doubleValue?: number;

  /**
   * @schema Field#isNull
   */
  readonly isNull?: boolean;

  /**
   * @schema Field#longValue
   */
  readonly longValue?: number;

  /**
   * @schema Field#stringValue
   */
  readonly stringValue?: string;

}

/**
 * @schema StatementData
 */
export interface StatementData {
  /**
   * @schema StatementData#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema StatementData#Id
   */
  readonly id: string;

  /**
   * @schema StatementData#QueryString
   */
  readonly queryString?: string;

  /**
   * @schema StatementData#SecretArn
   */
  readonly secretArn?: string;

  /**
   * @schema StatementData#StatementName
   */
  readonly statementName?: string;

  /**
   * @schema StatementData#Status
   */
  readonly status?: string;

  /**
   * @schema StatementData#UpdatedAt
   */
  readonly updatedAt?: string;

}

/**
 * @schema TableMember
 */
export interface TableMember {
  /**
   * @schema TableMember#name
   */
  readonly name?: string;

  /**
   * @schema TableMember#schema
   */
  readonly schema?: string;

  /**
   * @schema TableMember#type
   */
  readonly type?: string;

}
