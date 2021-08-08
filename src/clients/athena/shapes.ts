/**
 * @schema AthenaBatchGetNamedQueryInput
 */
export interface AthenaBatchGetNamedQueryInput {
  /**
   * @schema AthenaBatchGetNamedQueryInput#NamedQueryIds
   */
  readonly namedQueryIds?: string[];

}

/**
 * Converts an object of type 'AthenaBatchGetNamedQueryInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaBatchGetNamedQueryInput(obj: AthenaBatchGetNamedQueryInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NamedQueryIds': obj.namedQueryIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AthenaBatchGetNamedQueryOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaBatchGetNamedQueryOutput(obj: AthenaBatchGetNamedQueryOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NamedQueries': obj.namedQueries?.map(y => toJson_AthenaNamedQuery(y)),
    'UnprocessedNamedQueryIds': obj.unprocessedNamedQueryIds?.map(y => toJson_AthenaUnprocessedNamedQueryId(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AthenaBatchGetQueryExecutionInput
 */
export interface AthenaBatchGetQueryExecutionInput {
  /**
   * @schema AthenaBatchGetQueryExecutionInput#QueryExecutionIds
   */
  readonly queryExecutionIds?: string[];

}

/**
 * Converts an object of type 'AthenaBatchGetQueryExecutionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaBatchGetQueryExecutionInput(obj: AthenaBatchGetQueryExecutionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'QueryExecutionIds': obj.queryExecutionIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AthenaBatchGetQueryExecutionOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaBatchGetQueryExecutionOutput(obj: AthenaBatchGetQueryExecutionOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'QueryExecutions': obj.queryExecutions?.map(y => toJson_AthenaQueryExecution(y)),
    'UnprocessedQueryExecutionIds': obj.unprocessedQueryExecutionIds?.map(y => toJson_AthenaUnprocessedQueryExecutionId(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AthenaCreateDataCatalogInput
 */
export interface AthenaCreateDataCatalogInput {
  /**
   * @schema AthenaCreateDataCatalogInput#Name
   */
  readonly name?: string;

  /**
   * @schema AthenaCreateDataCatalogInput#Type
   */
  readonly type?: string;

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
 * Converts an object of type 'AthenaCreateDataCatalogInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaCreateDataCatalogInput(obj: AthenaCreateDataCatalogInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Type': obj.type,
    'Description': obj.description,
    'Parameters': ((obj.parameters) === undefined) ? undefined : (Object.entries(obj.parameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Tags': obj.tags?.map(y => toJson_AthenaTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AthenaCreateDataCatalogOutput
 */
export interface AthenaCreateDataCatalogOutput {
}

/**
 * Converts an object of type 'AthenaCreateDataCatalogOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaCreateDataCatalogOutput(obj: AthenaCreateDataCatalogOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AthenaCreateNamedQueryInput
 */
export interface AthenaCreateNamedQueryInput {
  /**
   * @schema AthenaCreateNamedQueryInput#Name
   */
  readonly name?: string;

  /**
   * @schema AthenaCreateNamedQueryInput#Description
   */
  readonly description?: string;

  /**
   * @schema AthenaCreateNamedQueryInput#Database
   */
  readonly database?: string;

  /**
   * @schema AthenaCreateNamedQueryInput#QueryString
   */
  readonly queryString?: string;

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
 * Converts an object of type 'AthenaCreateNamedQueryInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaCreateNamedQueryInput(obj: AthenaCreateNamedQueryInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Description': obj.description,
    'Database': obj.database,
    'QueryString': obj.queryString,
    'ClientRequestToken': obj.clientRequestToken,
    'WorkGroup': obj.workGroup,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AthenaCreateNamedQueryOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaCreateNamedQueryOutput(obj: AthenaCreateNamedQueryOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NamedQueryId': obj.namedQueryId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AthenaCreatePreparedStatementInput
 */
export interface AthenaCreatePreparedStatementInput {
  /**
   * @schema AthenaCreatePreparedStatementInput#StatementName
   */
  readonly statementName?: string;

  /**
   * @schema AthenaCreatePreparedStatementInput#WorkGroup
   */
  readonly workGroup?: string;

  /**
   * @schema AthenaCreatePreparedStatementInput#QueryStatement
   */
  readonly queryStatement?: string;

  /**
   * @schema AthenaCreatePreparedStatementInput#Description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'AthenaCreatePreparedStatementInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaCreatePreparedStatementInput(obj: AthenaCreatePreparedStatementInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StatementName': obj.statementName,
    'WorkGroup': obj.workGroup,
    'QueryStatement': obj.queryStatement,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AthenaCreatePreparedStatementOutput
 */
export interface AthenaCreatePreparedStatementOutput {
}

/**
 * Converts an object of type 'AthenaCreatePreparedStatementOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaCreatePreparedStatementOutput(obj: AthenaCreatePreparedStatementOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AthenaCreateWorkGroupInput
 */
export interface AthenaCreateWorkGroupInput {
  /**
   * @schema AthenaCreateWorkGroupInput#Name
   */
  readonly name?: string;

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
 * Converts an object of type 'AthenaCreateWorkGroupInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaCreateWorkGroupInput(obj: AthenaCreateWorkGroupInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Configuration': toJson_AthenaWorkGroupConfiguration(obj.configuration),
    'Description': obj.description,
    'Tags': obj.tags?.map(y => toJson_AthenaTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AthenaCreateWorkGroupOutput
 */
export interface AthenaCreateWorkGroupOutput {
}

/**
 * Converts an object of type 'AthenaCreateWorkGroupOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaCreateWorkGroupOutput(obj: AthenaCreateWorkGroupOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AthenaDeleteDataCatalogInput
 */
export interface AthenaDeleteDataCatalogInput {
  /**
   * @schema AthenaDeleteDataCatalogInput#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'AthenaDeleteDataCatalogInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaDeleteDataCatalogInput(obj: AthenaDeleteDataCatalogInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AthenaDeleteDataCatalogOutput
 */
export interface AthenaDeleteDataCatalogOutput {
}

/**
 * Converts an object of type 'AthenaDeleteDataCatalogOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaDeleteDataCatalogOutput(obj: AthenaDeleteDataCatalogOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AthenaDeleteNamedQueryInput
 */
export interface AthenaDeleteNamedQueryInput {
  /**
   * @schema AthenaDeleteNamedQueryInput#NamedQueryId
   */
  readonly namedQueryId?: string;

}

/**
 * Converts an object of type 'AthenaDeleteNamedQueryInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaDeleteNamedQueryInput(obj: AthenaDeleteNamedQueryInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NamedQueryId': obj.namedQueryId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AthenaDeleteNamedQueryOutput
 */
export interface AthenaDeleteNamedQueryOutput {
}

/**
 * Converts an object of type 'AthenaDeleteNamedQueryOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaDeleteNamedQueryOutput(obj: AthenaDeleteNamedQueryOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AthenaDeletePreparedStatementInput
 */
export interface AthenaDeletePreparedStatementInput {
  /**
   * @schema AthenaDeletePreparedStatementInput#StatementName
   */
  readonly statementName?: string;

  /**
   * @schema AthenaDeletePreparedStatementInput#WorkGroup
   */
  readonly workGroup?: string;

}

/**
 * Converts an object of type 'AthenaDeletePreparedStatementInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaDeletePreparedStatementInput(obj: AthenaDeletePreparedStatementInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StatementName': obj.statementName,
    'WorkGroup': obj.workGroup,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AthenaDeletePreparedStatementOutput
 */
export interface AthenaDeletePreparedStatementOutput {
}

/**
 * Converts an object of type 'AthenaDeletePreparedStatementOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaDeletePreparedStatementOutput(obj: AthenaDeletePreparedStatementOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AthenaDeleteWorkGroupInput
 */
export interface AthenaDeleteWorkGroupInput {
  /**
   * @schema AthenaDeleteWorkGroupInput#WorkGroup
   */
  readonly workGroup?: string;

  /**
   * @schema AthenaDeleteWorkGroupInput#RecursiveDeleteOption
   */
  readonly recursiveDeleteOption?: boolean;

}

/**
 * Converts an object of type 'AthenaDeleteWorkGroupInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaDeleteWorkGroupInput(obj: AthenaDeleteWorkGroupInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkGroup': obj.workGroup,
    'RecursiveDeleteOption': obj.recursiveDeleteOption,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AthenaDeleteWorkGroupOutput
 */
export interface AthenaDeleteWorkGroupOutput {
}

/**
 * Converts an object of type 'AthenaDeleteWorkGroupOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaDeleteWorkGroupOutput(obj: AthenaDeleteWorkGroupOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AthenaGetDataCatalogInput
 */
export interface AthenaGetDataCatalogInput {
  /**
   * @schema AthenaGetDataCatalogInput#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'AthenaGetDataCatalogInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaGetDataCatalogInput(obj: AthenaGetDataCatalogInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AthenaGetDataCatalogOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaGetDataCatalogOutput(obj: AthenaGetDataCatalogOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataCatalog': toJson_AthenaDataCatalog(obj.dataCatalog),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AthenaGetDatabaseInput
 */
export interface AthenaGetDatabaseInput {
  /**
   * @schema AthenaGetDatabaseInput#CatalogName
   */
  readonly catalogName?: string;

  /**
   * @schema AthenaGetDatabaseInput#DatabaseName
   */
  readonly databaseName?: string;

}

/**
 * Converts an object of type 'AthenaGetDatabaseInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaGetDatabaseInput(obj: AthenaGetDatabaseInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogName': obj.catalogName,
    'DatabaseName': obj.databaseName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AthenaGetDatabaseOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaGetDatabaseOutput(obj: AthenaGetDatabaseOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Database': toJson_AthenaDatabase(obj.database),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AthenaGetNamedQueryInput
 */
export interface AthenaGetNamedQueryInput {
  /**
   * @schema AthenaGetNamedQueryInput#NamedQueryId
   */
  readonly namedQueryId?: string;

}

/**
 * Converts an object of type 'AthenaGetNamedQueryInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaGetNamedQueryInput(obj: AthenaGetNamedQueryInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NamedQueryId': obj.namedQueryId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AthenaGetNamedQueryOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaGetNamedQueryOutput(obj: AthenaGetNamedQueryOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NamedQuery': toJson_AthenaNamedQuery(obj.namedQuery),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AthenaGetPreparedStatementInput
 */
export interface AthenaGetPreparedStatementInput {
  /**
   * @schema AthenaGetPreparedStatementInput#StatementName
   */
  readonly statementName?: string;

  /**
   * @schema AthenaGetPreparedStatementInput#WorkGroup
   */
  readonly workGroup?: string;

}

/**
 * Converts an object of type 'AthenaGetPreparedStatementInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaGetPreparedStatementInput(obj: AthenaGetPreparedStatementInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StatementName': obj.statementName,
    'WorkGroup': obj.workGroup,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AthenaGetPreparedStatementOutput
 */
export interface AthenaGetPreparedStatementOutput {
  /**
   * @schema AthenaGetPreparedStatementOutput#PreparedStatement
   */
  readonly preparedStatement?: AthenaPreparedStatement;

}

/**
 * Converts an object of type 'AthenaGetPreparedStatementOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaGetPreparedStatementOutput(obj: AthenaGetPreparedStatementOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PreparedStatement': toJson_AthenaPreparedStatement(obj.preparedStatement),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AthenaGetQueryExecutionInput
 */
export interface AthenaGetQueryExecutionInput {
  /**
   * @schema AthenaGetQueryExecutionInput#QueryExecutionId
   */
  readonly queryExecutionId?: string;

}

/**
 * Converts an object of type 'AthenaGetQueryExecutionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaGetQueryExecutionInput(obj: AthenaGetQueryExecutionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'QueryExecutionId': obj.queryExecutionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AthenaGetQueryExecutionOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaGetQueryExecutionOutput(obj: AthenaGetQueryExecutionOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'QueryExecution': toJson_AthenaQueryExecution(obj.queryExecution),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AthenaGetQueryResultsInput
 */
export interface AthenaGetQueryResultsInput {
  /**
   * @schema AthenaGetQueryResultsInput#QueryExecutionId
   */
  readonly queryExecutionId?: string;

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
 * Converts an object of type 'AthenaGetQueryResultsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaGetQueryResultsInput(obj: AthenaGetQueryResultsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'QueryExecutionId': obj.queryExecutionId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AthenaGetQueryResultsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaGetQueryResultsOutput(obj: AthenaGetQueryResultsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UpdateCount': obj.updateCount,
    'ResultSet': toJson_AthenaResultSet(obj.resultSet),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AthenaGetTableMetadataInput
 */
export interface AthenaGetTableMetadataInput {
  /**
   * @schema AthenaGetTableMetadataInput#CatalogName
   */
  readonly catalogName?: string;

  /**
   * @schema AthenaGetTableMetadataInput#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema AthenaGetTableMetadataInput#TableName
   */
  readonly tableName?: string;

}

/**
 * Converts an object of type 'AthenaGetTableMetadataInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaGetTableMetadataInput(obj: AthenaGetTableMetadataInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogName': obj.catalogName,
    'DatabaseName': obj.databaseName,
    'TableName': obj.tableName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AthenaGetTableMetadataOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaGetTableMetadataOutput(obj: AthenaGetTableMetadataOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TableMetadata': toJson_AthenaTableMetadata(obj.tableMetadata),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AthenaGetWorkGroupInput
 */
export interface AthenaGetWorkGroupInput {
  /**
   * @schema AthenaGetWorkGroupInput#WorkGroup
   */
  readonly workGroup?: string;

}

/**
 * Converts an object of type 'AthenaGetWorkGroupInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaGetWorkGroupInput(obj: AthenaGetWorkGroupInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkGroup': obj.workGroup,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AthenaGetWorkGroupOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaGetWorkGroupOutput(obj: AthenaGetWorkGroupOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkGroup': toJson_AthenaWorkGroup(obj.workGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AthenaListDataCatalogsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaListDataCatalogsInput(obj: AthenaListDataCatalogsInput | undefined): Record<string, any> | undefined {
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
 * Converts an object of type 'AthenaListDataCatalogsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaListDataCatalogsOutput(obj: AthenaListDataCatalogsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataCatalogsSummary': obj.dataCatalogsSummary?.map(y => toJson_AthenaDataCatalogSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AthenaListDatabasesInput
 */
export interface AthenaListDatabasesInput {
  /**
   * @schema AthenaListDatabasesInput#CatalogName
   */
  readonly catalogName?: string;

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
 * Converts an object of type 'AthenaListDatabasesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaListDatabasesInput(obj: AthenaListDatabasesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogName': obj.catalogName,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AthenaListDatabasesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaListDatabasesOutput(obj: AthenaListDatabasesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DatabaseList': obj.databaseList?.map(y => toJson_AthenaDatabase(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AthenaListEngineVersionsInput
 */
export interface AthenaListEngineVersionsInput {
  /**
   * @schema AthenaListEngineVersionsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AthenaListEngineVersionsInput#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'AthenaListEngineVersionsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaListEngineVersionsInput(obj: AthenaListEngineVersionsInput | undefined): Record<string, any> | undefined {
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
 * @schema AthenaListEngineVersionsOutput
 */
export interface AthenaListEngineVersionsOutput {
  /**
   * @schema AthenaListEngineVersionsOutput#EngineVersions
   */
  readonly engineVersions?: AthenaEngineVersion[];

  /**
   * @schema AthenaListEngineVersionsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AthenaListEngineVersionsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaListEngineVersionsOutput(obj: AthenaListEngineVersionsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EngineVersions': obj.engineVersions?.map(y => toJson_AthenaEngineVersion(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AthenaListNamedQueriesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaListNamedQueriesInput(obj: AthenaListNamedQueriesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'WorkGroup': obj.workGroup,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AthenaListNamedQueriesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaListNamedQueriesOutput(obj: AthenaListNamedQueriesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NamedQueryIds': obj.namedQueryIds?.map(y => y),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AthenaListPreparedStatementsInput
 */
export interface AthenaListPreparedStatementsInput {
  /**
   * @schema AthenaListPreparedStatementsInput#WorkGroup
   */
  readonly workGroup?: string;

  /**
   * @schema AthenaListPreparedStatementsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AthenaListPreparedStatementsInput#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'AthenaListPreparedStatementsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaListPreparedStatementsInput(obj: AthenaListPreparedStatementsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkGroup': obj.workGroup,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AthenaListPreparedStatementsOutput
 */
export interface AthenaListPreparedStatementsOutput {
  /**
   * @schema AthenaListPreparedStatementsOutput#PreparedStatements
   */
  readonly preparedStatements?: AthenaPreparedStatementSummary[];

  /**
   * @schema AthenaListPreparedStatementsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AthenaListPreparedStatementsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaListPreparedStatementsOutput(obj: AthenaListPreparedStatementsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PreparedStatements': obj.preparedStatements?.map(y => toJson_AthenaPreparedStatementSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AthenaListQueryExecutionsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaListQueryExecutionsInput(obj: AthenaListQueryExecutionsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'WorkGroup': obj.workGroup,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AthenaListQueryExecutionsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaListQueryExecutionsOutput(obj: AthenaListQueryExecutionsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'QueryExecutionIds': obj.queryExecutionIds?.map(y => y),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AthenaListTableMetadataInput
 */
export interface AthenaListTableMetadataInput {
  /**
   * @schema AthenaListTableMetadataInput#CatalogName
   */
  readonly catalogName?: string;

  /**
   * @schema AthenaListTableMetadataInput#DatabaseName
   */
  readonly databaseName?: string;

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
 * Converts an object of type 'AthenaListTableMetadataInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaListTableMetadataInput(obj: AthenaListTableMetadataInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogName': obj.catalogName,
    'DatabaseName': obj.databaseName,
    'Expression': obj.expression,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AthenaListTableMetadataOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaListTableMetadataOutput(obj: AthenaListTableMetadataOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TableMetadataList': obj.tableMetadataList?.map(y => toJson_AthenaTableMetadata(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AthenaListTagsForResourceInput
 */
export interface AthenaListTagsForResourceInput {
  /**
   * @schema AthenaListTagsForResourceInput#ResourceARN
   */
  readonly resourceArn?: string;

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
 * Converts an object of type 'AthenaListTagsForResourceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaListTagsForResourceInput(obj: AthenaListTagsForResourceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AthenaListTagsForResourceOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaListTagsForResourceOutput(obj: AthenaListTagsForResourceOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': obj.tags?.map(y => toJson_AthenaTag(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AthenaListWorkGroupsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaListWorkGroupsInput(obj: AthenaListWorkGroupsInput | undefined): Record<string, any> | undefined {
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
 * Converts an object of type 'AthenaListWorkGroupsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaListWorkGroupsOutput(obj: AthenaListWorkGroupsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkGroups': obj.workGroups?.map(y => toJson_AthenaWorkGroupSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AthenaStartQueryExecutionInput
 */
export interface AthenaStartQueryExecutionInput {
  /**
   * @schema AthenaStartQueryExecutionInput#QueryString
   */
  readonly queryString?: string;

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
 * Converts an object of type 'AthenaStartQueryExecutionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaStartQueryExecutionInput(obj: AthenaStartQueryExecutionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'QueryString': obj.queryString,
    'ClientRequestToken': obj.clientRequestToken,
    'QueryExecutionContext': toJson_AthenaQueryExecutionContext(obj.queryExecutionContext),
    'ResultConfiguration': toJson_AthenaResultConfiguration(obj.resultConfiguration),
    'WorkGroup': obj.workGroup,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AthenaStartQueryExecutionOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaStartQueryExecutionOutput(obj: AthenaStartQueryExecutionOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'QueryExecutionId': obj.queryExecutionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AthenaStopQueryExecutionInput
 */
export interface AthenaStopQueryExecutionInput {
  /**
   * @schema AthenaStopQueryExecutionInput#QueryExecutionId
   */
  readonly queryExecutionId?: string;

}

/**
 * Converts an object of type 'AthenaStopQueryExecutionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaStopQueryExecutionInput(obj: AthenaStopQueryExecutionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'QueryExecutionId': obj.queryExecutionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AthenaStopQueryExecutionOutput
 */
export interface AthenaStopQueryExecutionOutput {
}

/**
 * Converts an object of type 'AthenaStopQueryExecutionOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaStopQueryExecutionOutput(obj: AthenaStopQueryExecutionOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AthenaTagResourceInput
 */
export interface AthenaTagResourceInput {
  /**
   * @schema AthenaTagResourceInput#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema AthenaTagResourceInput#Tags
   */
  readonly tags?: AthenaTag[];

}

/**
 * Converts an object of type 'AthenaTagResourceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaTagResourceInput(obj: AthenaTagResourceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
    'Tags': obj.tags?.map(y => toJson_AthenaTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AthenaTagResourceOutput
 */
export interface AthenaTagResourceOutput {
}

/**
 * Converts an object of type 'AthenaTagResourceOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaTagResourceOutput(obj: AthenaTagResourceOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AthenaUntagResourceInput
 */
export interface AthenaUntagResourceInput {
  /**
   * @schema AthenaUntagResourceInput#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema AthenaUntagResourceInput#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'AthenaUntagResourceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaUntagResourceInput(obj: AthenaUntagResourceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AthenaUntagResourceOutput
 */
export interface AthenaUntagResourceOutput {
}

/**
 * Converts an object of type 'AthenaUntagResourceOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaUntagResourceOutput(obj: AthenaUntagResourceOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AthenaUpdateDataCatalogInput
 */
export interface AthenaUpdateDataCatalogInput {
  /**
   * @schema AthenaUpdateDataCatalogInput#Name
   */
  readonly name?: string;

  /**
   * @schema AthenaUpdateDataCatalogInput#Type
   */
  readonly type?: string;

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
 * Converts an object of type 'AthenaUpdateDataCatalogInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaUpdateDataCatalogInput(obj: AthenaUpdateDataCatalogInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Type': obj.type,
    'Description': obj.description,
    'Parameters': ((obj.parameters) === undefined) ? undefined : (Object.entries(obj.parameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AthenaUpdateDataCatalogOutput
 */
export interface AthenaUpdateDataCatalogOutput {
}

/**
 * Converts an object of type 'AthenaUpdateDataCatalogOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaUpdateDataCatalogOutput(obj: AthenaUpdateDataCatalogOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AthenaUpdatePreparedStatementInput
 */
export interface AthenaUpdatePreparedStatementInput {
  /**
   * @schema AthenaUpdatePreparedStatementInput#StatementName
   */
  readonly statementName?: string;

  /**
   * @schema AthenaUpdatePreparedStatementInput#WorkGroup
   */
  readonly workGroup?: string;

  /**
   * @schema AthenaUpdatePreparedStatementInput#QueryStatement
   */
  readonly queryStatement?: string;

  /**
   * @schema AthenaUpdatePreparedStatementInput#Description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'AthenaUpdatePreparedStatementInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaUpdatePreparedStatementInput(obj: AthenaUpdatePreparedStatementInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StatementName': obj.statementName,
    'WorkGroup': obj.workGroup,
    'QueryStatement': obj.queryStatement,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AthenaUpdatePreparedStatementOutput
 */
export interface AthenaUpdatePreparedStatementOutput {
}

/**
 * Converts an object of type 'AthenaUpdatePreparedStatementOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaUpdatePreparedStatementOutput(obj: AthenaUpdatePreparedStatementOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AthenaUpdateWorkGroupInput
 */
export interface AthenaUpdateWorkGroupInput {
  /**
   * @schema AthenaUpdateWorkGroupInput#WorkGroup
   */
  readonly workGroup?: string;

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
 * Converts an object of type 'AthenaUpdateWorkGroupInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaUpdateWorkGroupInput(obj: AthenaUpdateWorkGroupInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkGroup': obj.workGroup,
    'Description': obj.description,
    'ConfigurationUpdates': toJson_AthenaWorkGroupConfigurationUpdates(obj.configurationUpdates),
    'State': obj.state,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AthenaUpdateWorkGroupOutput
 */
export interface AthenaUpdateWorkGroupOutput {
}

/**
 * Converts an object of type 'AthenaUpdateWorkGroupOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaUpdateWorkGroupOutput(obj: AthenaUpdateWorkGroupOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AthenaNamedQuery
 */
export interface AthenaNamedQuery {
  /**
   * @schema AthenaNamedQuery#Name
   */
  readonly name?: string;

  /**
   * @schema AthenaNamedQuery#Description
   */
  readonly description?: string;

  /**
   * @schema AthenaNamedQuery#Database
   */
  readonly database?: string;

  /**
   * @schema AthenaNamedQuery#QueryString
   */
  readonly queryString?: string;

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
 * Converts an object of type 'AthenaNamedQuery' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaNamedQuery(obj: AthenaNamedQuery | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Description': obj.description,
    'Database': obj.database,
    'QueryString': obj.queryString,
    'NamedQueryId': obj.namedQueryId,
    'WorkGroup': obj.workGroup,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AthenaUnprocessedNamedQueryId' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaUnprocessedNamedQueryId(obj: AthenaUnprocessedNamedQueryId | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NamedQueryId': obj.namedQueryId,
    'ErrorCode': obj.errorCode,
    'ErrorMessage': obj.errorMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema AthenaQueryExecution#EngineVersion
   */
  readonly engineVersion?: AthenaEngineVersion;

}

/**
 * Converts an object of type 'AthenaQueryExecution' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaQueryExecution(obj: AthenaQueryExecution | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'QueryExecutionId': obj.queryExecutionId,
    'Query': obj.query,
    'StatementType': obj.statementType,
    'ResultConfiguration': toJson_AthenaResultConfiguration(obj.resultConfiguration),
    'QueryExecutionContext': toJson_AthenaQueryExecutionContext(obj.queryExecutionContext),
    'Status': toJson_AthenaQueryExecutionStatus(obj.status),
    'Statistics': toJson_AthenaQueryExecutionStatistics(obj.statistics),
    'WorkGroup': obj.workGroup,
    'EngineVersion': toJson_AthenaEngineVersion(obj.engineVersion),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AthenaUnprocessedQueryExecutionId' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaUnprocessedQueryExecutionId(obj: AthenaUnprocessedQueryExecutionId | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'QueryExecutionId': obj.queryExecutionId,
    'ErrorCode': obj.errorCode,
    'ErrorMessage': obj.errorMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AthenaTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaTag(obj: AthenaTag | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema AthenaWorkGroupConfiguration#EngineVersion
   */
  readonly engineVersion?: AthenaEngineVersion;

}

/**
 * Converts an object of type 'AthenaWorkGroupConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaWorkGroupConfiguration(obj: AthenaWorkGroupConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResultConfiguration': toJson_AthenaResultConfiguration(obj.resultConfiguration),
    'EnforceWorkGroupConfiguration': obj.enforceWorkGroupConfiguration,
    'PublishCloudWatchMetricsEnabled': obj.publishCloudWatchMetricsEnabled,
    'BytesScannedCutoffPerQuery': obj.bytesScannedCutoffPerQuery,
    'RequesterPaysEnabled': obj.requesterPaysEnabled,
    'EngineVersion': toJson_AthenaEngineVersion(obj.engineVersion),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AthenaDataCatalog
 */
export interface AthenaDataCatalog {
  /**
   * @schema AthenaDataCatalog#Name
   */
  readonly name?: string;

  /**
   * @schema AthenaDataCatalog#Description
   */
  readonly description?: string;

  /**
   * @schema AthenaDataCatalog#Type
   */
  readonly type?: string;

  /**
   * @schema AthenaDataCatalog#Parameters
   */
  readonly parameters?: { [key: string]: string };

}

/**
 * Converts an object of type 'AthenaDataCatalog' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaDataCatalog(obj: AthenaDataCatalog | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Description': obj.description,
    'Type': obj.type,
    'Parameters': ((obj.parameters) === undefined) ? undefined : (Object.entries(obj.parameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AthenaDatabase
 */
export interface AthenaDatabase {
  /**
   * @schema AthenaDatabase#Name
   */
  readonly name?: string;

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
 * Converts an object of type 'AthenaDatabase' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaDatabase(obj: AthenaDatabase | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Description': obj.description,
    'Parameters': ((obj.parameters) === undefined) ? undefined : (Object.entries(obj.parameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AthenaPreparedStatement
 */
export interface AthenaPreparedStatement {
  /**
   * @schema AthenaPreparedStatement#StatementName
   */
  readonly statementName?: string;

  /**
   * @schema AthenaPreparedStatement#QueryStatement
   */
  readonly queryStatement?: string;

  /**
   * @schema AthenaPreparedStatement#WorkGroupName
   */
  readonly workGroupName?: string;

  /**
   * @schema AthenaPreparedStatement#Description
   */
  readonly description?: string;

  /**
   * @schema AthenaPreparedStatement#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

}

/**
 * Converts an object of type 'AthenaPreparedStatement' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaPreparedStatement(obj: AthenaPreparedStatement | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StatementName': obj.statementName,
    'QueryStatement': obj.queryStatement,
    'WorkGroupName': obj.workGroupName,
    'Description': obj.description,
    'LastModifiedTime': obj.lastModifiedTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AthenaResultSet' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaResultSet(obj: AthenaResultSet | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Rows': obj.rows?.map(y => toJson_AthenaRow(y)),
    'ResultSetMetadata': toJson_AthenaResultSetMetadata(obj.resultSetMetadata),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AthenaTableMetadata
 */
export interface AthenaTableMetadata {
  /**
   * @schema AthenaTableMetadata#Name
   */
  readonly name?: string;

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
 * Converts an object of type 'AthenaTableMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaTableMetadata(obj: AthenaTableMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'CreateTime': obj.createTime,
    'LastAccessTime': obj.lastAccessTime,
    'TableType': obj.tableType,
    'Columns': obj.columns?.map(y => toJson_AthenaColumn(y)),
    'PartitionKeys': obj.partitionKeys?.map(y => toJson_AthenaColumn(y)),
    'Parameters': ((obj.parameters) === undefined) ? undefined : (Object.entries(obj.parameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AthenaWorkGroup
 */
export interface AthenaWorkGroup {
  /**
   * @schema AthenaWorkGroup#Name
   */
  readonly name?: string;

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
 * Converts an object of type 'AthenaWorkGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaWorkGroup(obj: AthenaWorkGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'State': obj.state,
    'Configuration': toJson_AthenaWorkGroupConfiguration(obj.configuration),
    'Description': obj.description,
    'CreationTime': obj.creationTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AthenaDataCatalogSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaDataCatalogSummary(obj: AthenaDataCatalogSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogName': obj.catalogName,
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AthenaEngineVersion
 */
export interface AthenaEngineVersion {
  /**
   * @schema AthenaEngineVersion#SelectedEngineVersion
   */
  readonly selectedEngineVersion?: string;

  /**
   * @schema AthenaEngineVersion#EffectiveEngineVersion
   */
  readonly effectiveEngineVersion?: string;

}

/**
 * Converts an object of type 'AthenaEngineVersion' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaEngineVersion(obj: AthenaEngineVersion | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SelectedEngineVersion': obj.selectedEngineVersion,
    'EffectiveEngineVersion': obj.effectiveEngineVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AthenaPreparedStatementSummary
 */
export interface AthenaPreparedStatementSummary {
  /**
   * @schema AthenaPreparedStatementSummary#StatementName
   */
  readonly statementName?: string;

  /**
   * @schema AthenaPreparedStatementSummary#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

}

/**
 * Converts an object of type 'AthenaPreparedStatementSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaPreparedStatementSummary(obj: AthenaPreparedStatementSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StatementName': obj.statementName,
    'LastModifiedTime': obj.lastModifiedTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema AthenaWorkGroupSummary#EngineVersion
   */
  readonly engineVersion?: AthenaEngineVersion;

}

/**
 * Converts an object of type 'AthenaWorkGroupSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaWorkGroupSummary(obj: AthenaWorkGroupSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'State': obj.state,
    'Description': obj.description,
    'CreationTime': obj.creationTime,
    'EngineVersion': toJson_AthenaEngineVersion(obj.engineVersion),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AthenaQueryExecutionContext' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaQueryExecutionContext(obj: AthenaQueryExecutionContext | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Database': obj.database,
    'Catalog': obj.catalog,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AthenaResultConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaResultConfiguration(obj: AthenaResultConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OutputLocation': obj.outputLocation,
    'EncryptionConfiguration': toJson_AthenaEncryptionConfiguration(obj.encryptionConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema AthenaWorkGroupConfigurationUpdates#EngineVersion
   */
  readonly engineVersion?: AthenaEngineVersion;

}

/**
 * Converts an object of type 'AthenaWorkGroupConfigurationUpdates' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaWorkGroupConfigurationUpdates(obj: AthenaWorkGroupConfigurationUpdates | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EnforceWorkGroupConfiguration': obj.enforceWorkGroupConfiguration,
    'ResultConfigurationUpdates': toJson_AthenaResultConfigurationUpdates(obj.resultConfigurationUpdates),
    'PublishCloudWatchMetricsEnabled': obj.publishCloudWatchMetricsEnabled,
    'BytesScannedCutoffPerQuery': obj.bytesScannedCutoffPerQuery,
    'RemoveBytesScannedCutoffPerQuery': obj.removeBytesScannedCutoffPerQuery,
    'RequesterPaysEnabled': obj.requesterPaysEnabled,
    'EngineVersion': toJson_AthenaEngineVersion(obj.engineVersion),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AthenaQueryExecutionStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaQueryExecutionStatus(obj: AthenaQueryExecutionStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'State': obj.state,
    'StateChangeReason': obj.stateChangeReason,
    'SubmissionDateTime': obj.submissionDateTime,
    'CompletionDateTime': obj.completionDateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AthenaQueryExecutionStatistics' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaQueryExecutionStatistics(obj: AthenaQueryExecutionStatistics | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EngineExecutionTimeInMillis': obj.engineExecutionTimeInMillis,
    'DataScannedInBytes': obj.dataScannedInBytes,
    'DataManifestLocation': obj.dataManifestLocation,
    'TotalExecutionTimeInMillis': obj.totalExecutionTimeInMillis,
    'QueryQueueTimeInMillis': obj.queryQueueTimeInMillis,
    'QueryPlanningTimeInMillis': obj.queryPlanningTimeInMillis,
    'ServiceProcessingTimeInMillis': obj.serviceProcessingTimeInMillis,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AthenaRow' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaRow(obj: AthenaRow | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Data': obj.data?.map(y => toJson_AthenaDatum(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AthenaResultSetMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaResultSetMetadata(obj: AthenaResultSetMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ColumnInfo': obj.columnInfo?.map(y => toJson_AthenaColumnInfo(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AthenaColumn
 */
export interface AthenaColumn {
  /**
   * @schema AthenaColumn#Name
   */
  readonly name?: string;

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
 * Converts an object of type 'AthenaColumn' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaColumn(obj: AthenaColumn | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Type': obj.type,
    'Comment': obj.comment,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AthenaEncryptionConfiguration
 */
export interface AthenaEncryptionConfiguration {
  /**
   * @schema AthenaEncryptionConfiguration#EncryptionOption
   */
  readonly encryptionOption?: string;

  /**
   * @schema AthenaEncryptionConfiguration#KmsKey
   */
  readonly kmsKey?: string;

}

/**
 * Converts an object of type 'AthenaEncryptionConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaEncryptionConfiguration(obj: AthenaEncryptionConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EncryptionOption': obj.encryptionOption,
    'KmsKey': obj.kmsKey,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AthenaResultConfigurationUpdates' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaResultConfigurationUpdates(obj: AthenaResultConfigurationUpdates | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OutputLocation': obj.outputLocation,
    'RemoveOutputLocation': obj.removeOutputLocation,
    'EncryptionConfiguration': toJson_AthenaEncryptionConfiguration(obj.encryptionConfiguration),
    'RemoveEncryptionConfiguration': obj.removeEncryptionConfiguration,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AthenaDatum' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaDatum(obj: AthenaDatum | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VarCharValue': obj.varCharValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly name?: string;

  /**
   * @schema AthenaColumnInfo#Label
   */
  readonly label?: string;

  /**
   * @schema AthenaColumnInfo#Type
   */
  readonly type?: string;

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

/**
 * Converts an object of type 'AthenaColumnInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AthenaColumnInfo(obj: AthenaColumnInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogName': obj.catalogName,
    'SchemaName': obj.schemaName,
    'TableName': obj.tableName,
    'Name': obj.name,
    'Label': obj.label,
    'Type': obj.type,
    'Precision': obj.precision,
    'Scale': obj.scale,
    'Nullable': obj.nullable,
    'CaseSensitive': obj.caseSensitive,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
