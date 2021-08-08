/**
 * @schema RedshiftDataBatchExecuteStatementInput
 */
export interface RedshiftDataBatchExecuteStatementInput {
  /**
   * @schema RedshiftDataBatchExecuteStatementInput#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema RedshiftDataBatchExecuteStatementInput#Database
   */
  readonly database?: string;

  /**
   * @schema RedshiftDataBatchExecuteStatementInput#DbUser
   */
  readonly dbUser?: string;

  /**
   * @schema RedshiftDataBatchExecuteStatementInput#SecretArn
   */
  readonly secretArn?: string;

  /**
   * @schema RedshiftDataBatchExecuteStatementInput#Sqls
   */
  readonly sqls?: string[];

  /**
   * @schema RedshiftDataBatchExecuteStatementInput#StatementName
   */
  readonly statementName?: string;

  /**
   * @schema RedshiftDataBatchExecuteStatementInput#WithEvent
   */
  readonly withEvent?: boolean;

}

/**
 * Converts an object of type 'RedshiftDataBatchExecuteStatementInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDataBatchExecuteStatementInput(obj: RedshiftDataBatchExecuteStatementInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterIdentifier': obj.clusterIdentifier,
    'Database': obj.database,
    'DbUser': obj.dbUser,
    'SecretArn': obj.secretArn,
    'Sqls': obj.sqls?.map(y => y),
    'StatementName': obj.statementName,
    'WithEvent': obj.withEvent,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDataBatchExecuteStatementOutput
 */
export interface RedshiftDataBatchExecuteStatementOutput {
  /**
   * @schema RedshiftDataBatchExecuteStatementOutput#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema RedshiftDataBatchExecuteStatementOutput#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema RedshiftDataBatchExecuteStatementOutput#Database
   */
  readonly database?: string;

  /**
   * @schema RedshiftDataBatchExecuteStatementOutput#DbUser
   */
  readonly dbUser?: string;

  /**
   * @schema RedshiftDataBatchExecuteStatementOutput#Id
   */
  readonly id?: string;

  /**
   * @schema RedshiftDataBatchExecuteStatementOutput#SecretArn
   */
  readonly secretArn?: string;

}

/**
 * Converts an object of type 'RedshiftDataBatchExecuteStatementOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDataBatchExecuteStatementOutput(obj: RedshiftDataBatchExecuteStatementOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterIdentifier': obj.clusterIdentifier,
    'CreatedAt': obj.createdAt,
    'Database': obj.database,
    'DbUser': obj.dbUser,
    'Id': obj.id,
    'SecretArn': obj.secretArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDataCancelStatementRequest
 */
export interface RedshiftDataCancelStatementRequest {
  /**
   * @schema RedshiftDataCancelStatementRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'RedshiftDataCancelStatementRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDataCancelStatementRequest(obj: RedshiftDataCancelStatementRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RedshiftDataCancelStatementResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDataCancelStatementResponse(obj: RedshiftDataCancelStatementResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDataDescribeStatementRequest
 */
export interface RedshiftDataDescribeStatementRequest {
  /**
   * @schema RedshiftDataDescribeStatementRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'RedshiftDataDescribeStatementRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDataDescribeStatementRequest(obj: RedshiftDataDescribeStatementRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
   * @schema RedshiftDataDescribeStatementResponse#HasResultSet
   */
  readonly hasResultSet?: boolean;

  /**
   * @schema RedshiftDataDescribeStatementResponse#Id
   */
  readonly id?: string;

  /**
   * @schema RedshiftDataDescribeStatementResponse#QueryParameters
   */
  readonly queryParameters?: RedshiftDataSqlParameter[];

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
   * @schema RedshiftDataDescribeStatementResponse#SubStatements
   */
  readonly subStatements?: RedshiftDataSubStatementData[];

  /**
   * @schema RedshiftDataDescribeStatementResponse#UpdatedAt
   */
  readonly updatedAt?: string;

}

/**
 * Converts an object of type 'RedshiftDataDescribeStatementResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDataDescribeStatementResponse(obj: RedshiftDataDescribeStatementResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterIdentifier': obj.clusterIdentifier,
    'CreatedAt': obj.createdAt,
    'Database': obj.database,
    'DbUser': obj.dbUser,
    'Duration': obj.duration,
    'Error': obj.error,
    'HasResultSet': obj.hasResultSet,
    'Id': obj.id,
    'QueryParameters': obj.queryParameters?.map(y => toJson_RedshiftDataSqlParameter(y)),
    'QueryString': obj.queryString,
    'RedshiftPid': obj.redshiftPid,
    'RedshiftQueryId': obj.redshiftQueryId,
    'ResultRows': obj.resultRows,
    'ResultSize': obj.resultSize,
    'SecretArn': obj.secretArn,
    'Status': obj.status,
    'SubStatements': obj.subStatements?.map(y => toJson_RedshiftDataSubStatementData(y)),
    'UpdatedAt': obj.updatedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDataDescribeTableRequest
 */
export interface RedshiftDataDescribeTableRequest {
  /**
   * @schema RedshiftDataDescribeTableRequest#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema RedshiftDataDescribeTableRequest#ConnectedDatabase
   */
  readonly connectedDatabase?: string;

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
 * Converts an object of type 'RedshiftDataDescribeTableRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDataDescribeTableRequest(obj: RedshiftDataDescribeTableRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterIdentifier': obj.clusterIdentifier,
    'ConnectedDatabase': obj.connectedDatabase,
    'Database': obj.database,
    'DbUser': obj.dbUser,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'Schema': obj.schema,
    'SecretArn': obj.secretArn,
    'Table': obj.table,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RedshiftDataDescribeTableResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDataDescribeTableResponse(obj: RedshiftDataDescribeTableResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ColumnList': obj.columnList?.map(y => toJson_RedshiftDataColumnMetadata(y)),
    'NextToken': obj.nextToken,
    'TableName': obj.tableName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDataExecuteStatementInput
 */
export interface RedshiftDataExecuteStatementInput {
  /**
   * @schema RedshiftDataExecuteStatementInput#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema RedshiftDataExecuteStatementInput#Database
   */
  readonly database?: string;

  /**
   * @schema RedshiftDataExecuteStatementInput#DbUser
   */
  readonly dbUser?: string;

  /**
   * @schema RedshiftDataExecuteStatementInput#Parameters
   */
  readonly parameters?: RedshiftDataSqlParameter[];

  /**
   * @schema RedshiftDataExecuteStatementInput#SecretArn
   */
  readonly secretArn?: string;

  /**
   * @schema RedshiftDataExecuteStatementInput#Sql
   */
  readonly sql?: string;

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
 * Converts an object of type 'RedshiftDataExecuteStatementInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDataExecuteStatementInput(obj: RedshiftDataExecuteStatementInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterIdentifier': obj.clusterIdentifier,
    'Database': obj.database,
    'DbUser': obj.dbUser,
    'Parameters': obj.parameters?.map(y => toJson_RedshiftDataSqlParameter(y)),
    'SecretArn': obj.secretArn,
    'Sql': obj.sql,
    'StatementName': obj.statementName,
    'WithEvent': obj.withEvent,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RedshiftDataExecuteStatementOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDataExecuteStatementOutput(obj: RedshiftDataExecuteStatementOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterIdentifier': obj.clusterIdentifier,
    'CreatedAt': obj.createdAt,
    'Database': obj.database,
    'DbUser': obj.dbUser,
    'Id': obj.id,
    'SecretArn': obj.secretArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDataGetStatementResultRequest
 */
export interface RedshiftDataGetStatementResultRequest {
  /**
   * @schema RedshiftDataGetStatementResultRequest#Id
   */
  readonly id?: string;

  /**
   * @schema RedshiftDataGetStatementResultRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'RedshiftDataGetStatementResultRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDataGetStatementResultRequest(obj: RedshiftDataGetStatementResultRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly records?: RedshiftDataField[][];

  /**
   * @schema RedshiftDataGetStatementResultResponse#TotalNumRows
   */
  readonly totalNumRows?: number;

}

/**
 * Converts an object of type 'RedshiftDataGetStatementResultResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDataGetStatementResultResponse(obj: RedshiftDataGetStatementResultResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ColumnMetadata': obj.columnMetadata?.map(y => toJson_RedshiftDataColumnMetadata(y)),
    'NextToken': obj.nextToken,
    'Records': obj.records?.map(y => y?.map(y => toJson_RedshiftDataField(y))),
    'TotalNumRows': obj.totalNumRows,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDataListDatabasesRequest
 */
export interface RedshiftDataListDatabasesRequest {
  /**
   * @schema RedshiftDataListDatabasesRequest#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

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
 * Converts an object of type 'RedshiftDataListDatabasesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDataListDatabasesRequest(obj: RedshiftDataListDatabasesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterIdentifier': obj.clusterIdentifier,
    'Database': obj.database,
    'DbUser': obj.dbUser,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'SecretArn': obj.secretArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RedshiftDataListDatabasesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDataListDatabasesResponse(obj: RedshiftDataListDatabasesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Databases': obj.databases?.map(y => y),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDataListSchemasRequest
 */
export interface RedshiftDataListSchemasRequest {
  /**
   * @schema RedshiftDataListSchemasRequest#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema RedshiftDataListSchemasRequest#ConnectedDatabase
   */
  readonly connectedDatabase?: string;

  /**
   * @schema RedshiftDataListSchemasRequest#Database
   */
  readonly database?: string;

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
 * Converts an object of type 'RedshiftDataListSchemasRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDataListSchemasRequest(obj: RedshiftDataListSchemasRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterIdentifier': obj.clusterIdentifier,
    'ConnectedDatabase': obj.connectedDatabase,
    'Database': obj.database,
    'DbUser': obj.dbUser,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'SchemaPattern': obj.schemaPattern,
    'SecretArn': obj.secretArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RedshiftDataListSchemasResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDataListSchemasResponse(obj: RedshiftDataListSchemasResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'Schemas': obj.schemas?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
   * @schema RedshiftDataListStatementsRequest#RoleLevel
   */
  readonly roleLevel?: boolean;

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
 * Converts an object of type 'RedshiftDataListStatementsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDataListStatementsRequest(obj: RedshiftDataListStatementsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'RoleLevel': obj.roleLevel,
    'StatementName': obj.statementName,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly statements?: RedshiftDataStatementData[];

}

/**
 * Converts an object of type 'RedshiftDataListStatementsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDataListStatementsResponse(obj: RedshiftDataListStatementsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'Statements': obj.statements?.map(y => toJson_RedshiftDataStatementData(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDataListTablesRequest
 */
export interface RedshiftDataListTablesRequest {
  /**
   * @schema RedshiftDataListTablesRequest#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema RedshiftDataListTablesRequest#ConnectedDatabase
   */
  readonly connectedDatabase?: string;

  /**
   * @schema RedshiftDataListTablesRequest#Database
   */
  readonly database?: string;

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
 * Converts an object of type 'RedshiftDataListTablesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDataListTablesRequest(obj: RedshiftDataListTablesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterIdentifier': obj.clusterIdentifier,
    'ConnectedDatabase': obj.connectedDatabase,
    'Database': obj.database,
    'DbUser': obj.dbUser,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'SchemaPattern': obj.schemaPattern,
    'SecretArn': obj.secretArn,
    'TablePattern': obj.tablePattern,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RedshiftDataListTablesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDataListTablesResponse(obj: RedshiftDataListTablesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'Tables': obj.tables?.map(y => toJson_RedshiftDataTableMember(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDataSqlParameter
 */
export interface RedshiftDataSqlParameter {
  /**
   * @schema RedshiftDataSqlParameter#name
   */
  readonly name: string;

  /**
   * @schema RedshiftDataSqlParameter#value
   */
  readonly value: string;

}

/**
 * Converts an object of type 'RedshiftDataSqlParameter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDataSqlParameter(obj: RedshiftDataSqlParameter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDataSubStatementData
 */
export interface RedshiftDataSubStatementData {
  /**
   * @schema RedshiftDataSubStatementData#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema RedshiftDataSubStatementData#Duration
   */
  readonly duration?: number;

  /**
   * @schema RedshiftDataSubStatementData#Error
   */
  readonly error?: string;

  /**
   * @schema RedshiftDataSubStatementData#HasResultSet
   */
  readonly hasResultSet?: boolean;

  /**
   * @schema RedshiftDataSubStatementData#Id
   */
  readonly id?: string;

  /**
   * @schema RedshiftDataSubStatementData#QueryString
   */
  readonly queryString?: string;

  /**
   * @schema RedshiftDataSubStatementData#RedshiftQueryId
   */
  readonly redshiftQueryId?: number;

  /**
   * @schema RedshiftDataSubStatementData#ResultRows
   */
  readonly resultRows?: number;

  /**
   * @schema RedshiftDataSubStatementData#ResultSize
   */
  readonly resultSize?: number;

  /**
   * @schema RedshiftDataSubStatementData#Status
   */
  readonly status?: string;

  /**
   * @schema RedshiftDataSubStatementData#UpdatedAt
   */
  readonly updatedAt?: string;

}

/**
 * Converts an object of type 'RedshiftDataSubStatementData' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDataSubStatementData(obj: RedshiftDataSubStatementData | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CreatedAt': obj.createdAt,
    'Duration': obj.duration,
    'Error': obj.error,
    'HasResultSet': obj.hasResultSet,
    'Id': obj.id,
    'QueryString': obj.queryString,
    'RedshiftQueryId': obj.redshiftQueryId,
    'ResultRows': obj.resultRows,
    'ResultSize': obj.resultSize,
    'Status': obj.status,
    'UpdatedAt': obj.updatedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RedshiftDataColumnMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDataColumnMetadata(obj: RedshiftDataColumnMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'columnDefault': obj.columnDefault,
    'isCaseSensitive': obj.isCaseSensitive,
    'isCurrency': obj.isCurrency,
    'isSigned': obj.isSigned,
    'label': obj.label,
    'length': obj.length,
    'name': obj.name,
    'nullable': obj.nullable,
    'precision': obj.precision,
    'scale': obj.scale,
    'schemaName': obj.schemaName,
    'tableName': obj.tableName,
    'typeName': obj.typeName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RedshiftDataField' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDataField(obj: RedshiftDataField | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'blobValue': obj.blobValue,
    'booleanValue': obj.booleanValue,
    'doubleValue': obj.doubleValue,
    'isNull': obj.isNull,
    'longValue': obj.longValue,
    'stringValue': obj.stringValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly id?: string;

  /**
   * @schema RedshiftDataStatementData#IsBatchStatement
   */
  readonly isBatchStatement?: boolean;

  /**
   * @schema RedshiftDataStatementData#QueryParameters
   */
  readonly queryParameters?: RedshiftDataSqlParameter[];

  /**
   * @schema RedshiftDataStatementData#QueryString
   */
  readonly queryString?: string;

  /**
   * @schema RedshiftDataStatementData#QueryStrings
   */
  readonly queryStrings?: string[];

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
 * Converts an object of type 'RedshiftDataStatementData' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDataStatementData(obj: RedshiftDataStatementData | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CreatedAt': obj.createdAt,
    'Id': obj.id,
    'IsBatchStatement': obj.isBatchStatement,
    'QueryParameters': obj.queryParameters?.map(y => toJson_RedshiftDataSqlParameter(y)),
    'QueryString': obj.queryString,
    'QueryStrings': obj.queryStrings?.map(y => y),
    'SecretArn': obj.secretArn,
    'StatementName': obj.statementName,
    'Status': obj.status,
    'UpdatedAt': obj.updatedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

/**
 * Converts an object of type 'RedshiftDataTableMember' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDataTableMember(obj: RedshiftDataTableMember | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'schema': obj.schema,
    'type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
