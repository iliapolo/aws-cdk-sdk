/**
 * @schema TimestreamWriteCreateDatabaseRequest
 */
export interface TimestreamWriteCreateDatabaseRequest {
  /**
   * @schema TimestreamWriteCreateDatabaseRequest#DatabaseName
   */
  readonly databaseName?: string;

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
 * Converts an object of type 'TimestreamWriteCreateDatabaseRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TimestreamWriteCreateDatabaseRequest(obj: TimestreamWriteCreateDatabaseRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DatabaseName': obj.databaseName,
    'KmsKeyId': obj.kmsKeyId,
    'Tags': obj.tags?.map(y => toJson_TimestreamWriteTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'TimestreamWriteCreateDatabaseResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TimestreamWriteCreateDatabaseResponse(obj: TimestreamWriteCreateDatabaseResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Database': toJson_TimestreamWriteDatabase(obj.database),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TimestreamWriteCreateTableRequest
 */
export interface TimestreamWriteCreateTableRequest {
  /**
   * @schema TimestreamWriteCreateTableRequest#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema TimestreamWriteCreateTableRequest#TableName
   */
  readonly tableName?: string;

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
 * Converts an object of type 'TimestreamWriteCreateTableRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TimestreamWriteCreateTableRequest(obj: TimestreamWriteCreateTableRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DatabaseName': obj.databaseName,
    'TableName': obj.tableName,
    'RetentionProperties': toJson_TimestreamWriteRetentionProperties(obj.retentionProperties),
    'Tags': obj.tags?.map(y => toJson_TimestreamWriteTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'TimestreamWriteCreateTableResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TimestreamWriteCreateTableResponse(obj: TimestreamWriteCreateTableResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Table': toJson_TimestreamWriteTable(obj.table),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TimestreamWriteDeleteDatabaseRequest
 */
export interface TimestreamWriteDeleteDatabaseRequest {
  /**
   * @schema TimestreamWriteDeleteDatabaseRequest#DatabaseName
   */
  readonly databaseName?: string;

}

/**
 * Converts an object of type 'TimestreamWriteDeleteDatabaseRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TimestreamWriteDeleteDatabaseRequest(obj: TimestreamWriteDeleteDatabaseRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DatabaseName': obj.databaseName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TimestreamWriteDeleteTableRequest
 */
export interface TimestreamWriteDeleteTableRequest {
  /**
   * @schema TimestreamWriteDeleteTableRequest#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema TimestreamWriteDeleteTableRequest#TableName
   */
  readonly tableName?: string;

}

/**
 * Converts an object of type 'TimestreamWriteDeleteTableRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TimestreamWriteDeleteTableRequest(obj: TimestreamWriteDeleteTableRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DatabaseName': obj.databaseName,
    'TableName': obj.tableName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TimestreamWriteDescribeDatabaseRequest
 */
export interface TimestreamWriteDescribeDatabaseRequest {
  /**
   * @schema TimestreamWriteDescribeDatabaseRequest#DatabaseName
   */
  readonly databaseName?: string;

}

/**
 * Converts an object of type 'TimestreamWriteDescribeDatabaseRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TimestreamWriteDescribeDatabaseRequest(obj: TimestreamWriteDescribeDatabaseRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DatabaseName': obj.databaseName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'TimestreamWriteDescribeDatabaseResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TimestreamWriteDescribeDatabaseResponse(obj: TimestreamWriteDescribeDatabaseResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Database': toJson_TimestreamWriteDatabase(obj.database),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TimestreamWriteDescribeEndpointsRequest
 */
export interface TimestreamWriteDescribeEndpointsRequest {
}

/**
 * Converts an object of type 'TimestreamWriteDescribeEndpointsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TimestreamWriteDescribeEndpointsRequest(obj: TimestreamWriteDescribeEndpointsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TimestreamWriteDescribeEndpointsResponse
 */
export interface TimestreamWriteDescribeEndpointsResponse {
  /**
   * @schema TimestreamWriteDescribeEndpointsResponse#Endpoints
   */
  readonly endpoints?: TimestreamWriteEndpoint[];

}

/**
 * Converts an object of type 'TimestreamWriteDescribeEndpointsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TimestreamWriteDescribeEndpointsResponse(obj: TimestreamWriteDescribeEndpointsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Endpoints': obj.endpoints?.map(y => toJson_TimestreamWriteEndpoint(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TimestreamWriteDescribeTableRequest
 */
export interface TimestreamWriteDescribeTableRequest {
  /**
   * @schema TimestreamWriteDescribeTableRequest#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema TimestreamWriteDescribeTableRequest#TableName
   */
  readonly tableName?: string;

}

/**
 * Converts an object of type 'TimestreamWriteDescribeTableRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TimestreamWriteDescribeTableRequest(obj: TimestreamWriteDescribeTableRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DatabaseName': obj.databaseName,
    'TableName': obj.tableName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'TimestreamWriteDescribeTableResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TimestreamWriteDescribeTableResponse(obj: TimestreamWriteDescribeTableResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Table': toJson_TimestreamWriteTable(obj.table),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'TimestreamWriteListDatabasesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TimestreamWriteListDatabasesRequest(obj: TimestreamWriteListDatabasesRequest | undefined): Record<string, any> | undefined {
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
 * Converts an object of type 'TimestreamWriteListDatabasesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TimestreamWriteListDatabasesResponse(obj: TimestreamWriteListDatabasesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Databases': obj.databases?.map(y => toJson_TimestreamWriteDatabase(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'TimestreamWriteListTablesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TimestreamWriteListTablesRequest(obj: TimestreamWriteListTablesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DatabaseName': obj.databaseName,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'TimestreamWriteListTablesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TimestreamWriteListTablesResponse(obj: TimestreamWriteListTablesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tables': obj.tables?.map(y => toJson_TimestreamWriteTable(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TimestreamWriteListTagsForResourceRequest
 */
export interface TimestreamWriteListTagsForResourceRequest {
  /**
   * @schema TimestreamWriteListTagsForResourceRequest#ResourceARN
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'TimestreamWriteListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TimestreamWriteListTagsForResourceRequest(obj: TimestreamWriteListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'TimestreamWriteListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TimestreamWriteListTagsForResourceResponse(obj: TimestreamWriteListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': obj.tags?.map(y => toJson_TimestreamWriteTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TimestreamWriteTagResourceRequest
 */
export interface TimestreamWriteTagResourceRequest {
  /**
   * @schema TimestreamWriteTagResourceRequest#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema TimestreamWriteTagResourceRequest#Tags
   */
  readonly tags?: TimestreamWriteTag[];

}

/**
 * Converts an object of type 'TimestreamWriteTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TimestreamWriteTagResourceRequest(obj: TimestreamWriteTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
    'Tags': obj.tags?.map(y => toJson_TimestreamWriteTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TimestreamWriteTagResourceResponse
 */
export interface TimestreamWriteTagResourceResponse {
}

/**
 * Converts an object of type 'TimestreamWriteTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TimestreamWriteTagResourceResponse(obj: TimestreamWriteTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TimestreamWriteUntagResourceRequest
 */
export interface TimestreamWriteUntagResourceRequest {
  /**
   * @schema TimestreamWriteUntagResourceRequest#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema TimestreamWriteUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'TimestreamWriteUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TimestreamWriteUntagResourceRequest(obj: TimestreamWriteUntagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema TimestreamWriteUntagResourceResponse
 */
export interface TimestreamWriteUntagResourceResponse {
}

/**
 * Converts an object of type 'TimestreamWriteUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TimestreamWriteUntagResourceResponse(obj: TimestreamWriteUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TimestreamWriteUpdateDatabaseRequest
 */
export interface TimestreamWriteUpdateDatabaseRequest {
  /**
   * @schema TimestreamWriteUpdateDatabaseRequest#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema TimestreamWriteUpdateDatabaseRequest#KmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * Converts an object of type 'TimestreamWriteUpdateDatabaseRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TimestreamWriteUpdateDatabaseRequest(obj: TimestreamWriteUpdateDatabaseRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DatabaseName': obj.databaseName,
    'KmsKeyId': obj.kmsKeyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'TimestreamWriteUpdateDatabaseResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TimestreamWriteUpdateDatabaseResponse(obj: TimestreamWriteUpdateDatabaseResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Database': toJson_TimestreamWriteDatabase(obj.database),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TimestreamWriteUpdateTableRequest
 */
export interface TimestreamWriteUpdateTableRequest {
  /**
   * @schema TimestreamWriteUpdateTableRequest#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema TimestreamWriteUpdateTableRequest#TableName
   */
  readonly tableName?: string;

  /**
   * @schema TimestreamWriteUpdateTableRequest#RetentionProperties
   */
  readonly retentionProperties?: TimestreamWriteRetentionProperties;

}

/**
 * Converts an object of type 'TimestreamWriteUpdateTableRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TimestreamWriteUpdateTableRequest(obj: TimestreamWriteUpdateTableRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DatabaseName': obj.databaseName,
    'TableName': obj.tableName,
    'RetentionProperties': toJson_TimestreamWriteRetentionProperties(obj.retentionProperties),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'TimestreamWriteUpdateTableResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TimestreamWriteUpdateTableResponse(obj: TimestreamWriteUpdateTableResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Table': toJson_TimestreamWriteTable(obj.table),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TimestreamWriteWriteRecordsRequest
 */
export interface TimestreamWriteWriteRecordsRequest {
  /**
   * @schema TimestreamWriteWriteRecordsRequest#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema TimestreamWriteWriteRecordsRequest#TableName
   */
  readonly tableName?: string;

  /**
   * @schema TimestreamWriteWriteRecordsRequest#CommonAttributes
   */
  readonly commonAttributes?: TimestreamWriteRecord;

  /**
   * @schema TimestreamWriteWriteRecordsRequest#Records
   */
  readonly records?: TimestreamWriteRecord[];

}

/**
 * Converts an object of type 'TimestreamWriteWriteRecordsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TimestreamWriteWriteRecordsRequest(obj: TimestreamWriteWriteRecordsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DatabaseName': obj.databaseName,
    'TableName': obj.tableName,
    'CommonAttributes': toJson_TimestreamWriteRecord(obj.commonAttributes),
    'Records': obj.records?.map(y => toJson_TimestreamWriteRecord(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TimestreamWriteTag
 */
export interface TimestreamWriteTag {
  /**
   * @schema TimestreamWriteTag#Key
   */
  readonly key?: string;

  /**
   * @schema TimestreamWriteTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'TimestreamWriteTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TimestreamWriteTag(obj: TimestreamWriteTag | undefined): Record<string, any> | undefined {
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
 * Converts an object of type 'TimestreamWriteDatabase' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TimestreamWriteDatabase(obj: TimestreamWriteDatabase | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'DatabaseName': obj.databaseName,
    'TableCount': obj.tableCount,
    'KmsKeyId': obj.kmsKeyId,
    'CreationTime': obj.creationTime,
    'LastUpdatedTime': obj.lastUpdatedTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TimestreamWriteRetentionProperties
 */
export interface TimestreamWriteRetentionProperties {
  /**
   * @schema TimestreamWriteRetentionProperties#MemoryStoreRetentionPeriodInHours
   */
  readonly memoryStoreRetentionPeriodInHours?: number;

  /**
   * @schema TimestreamWriteRetentionProperties#MagneticStoreRetentionPeriodInDays
   */
  readonly magneticStoreRetentionPeriodInDays?: number;

}

/**
 * Converts an object of type 'TimestreamWriteRetentionProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TimestreamWriteRetentionProperties(obj: TimestreamWriteRetentionProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MemoryStoreRetentionPeriodInHours': obj.memoryStoreRetentionPeriodInHours,
    'MagneticStoreRetentionPeriodInDays': obj.magneticStoreRetentionPeriodInDays,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'TimestreamWriteTable' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TimestreamWriteTable(obj: TimestreamWriteTable | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'TableName': obj.tableName,
    'DatabaseName': obj.databaseName,
    'TableStatus': obj.tableStatus,
    'RetentionProperties': toJson_TimestreamWriteRetentionProperties(obj.retentionProperties),
    'CreationTime': obj.creationTime,
    'LastUpdatedTime': obj.lastUpdatedTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TimestreamWriteEndpoint
 */
export interface TimestreamWriteEndpoint {
  /**
   * @schema TimestreamWriteEndpoint#Address
   */
  readonly address?: string;

  /**
   * @schema TimestreamWriteEndpoint#CachePeriodInMinutes
   */
  readonly cachePeriodInMinutes?: number;

}

/**
 * Converts an object of type 'TimestreamWriteEndpoint' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TimestreamWriteEndpoint(obj: TimestreamWriteEndpoint | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Address': obj.address,
    'CachePeriodInMinutes': obj.cachePeriodInMinutes,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'TimestreamWriteRecord' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TimestreamWriteRecord(obj: TimestreamWriteRecord | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Dimensions': obj.dimensions?.map(y => toJson_TimestreamWriteDimension(y)),
    'MeasureName': obj.measureName,
    'MeasureValue': obj.measureValue,
    'MeasureValueType': obj.measureValueType,
    'Time': obj.time,
    'TimeUnit': obj.timeUnit,
    'Version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TimestreamWriteDimension
 */
export interface TimestreamWriteDimension {
  /**
   * @schema TimestreamWriteDimension#Name
   */
  readonly name?: string;

  /**
   * @schema TimestreamWriteDimension#Value
   */
  readonly value?: string;

  /**
   * @schema TimestreamWriteDimension#DimensionValueType
   */
  readonly dimensionValueType?: string;

}

/**
 * Converts an object of type 'TimestreamWriteDimension' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TimestreamWriteDimension(obj: TimestreamWriteDimension | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Value': obj.value,
    'DimensionValueType': obj.dimensionValueType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
