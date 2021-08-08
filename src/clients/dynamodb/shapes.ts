/**
 * @schema DynamoDbBatchExecuteStatementInput
 */
export interface DynamoDbBatchExecuteStatementInput {
  /**
   * @schema DynamoDbBatchExecuteStatementInput#Statements
   */
  readonly statements?: DynamoDbBatchStatementRequest[];

}

/**
 * Converts an object of type 'DynamoDbBatchExecuteStatementInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbBatchExecuteStatementInput(obj: DynamoDbBatchExecuteStatementInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Statements': obj.statements?.map(y => toJson_DynamoDbBatchStatementRequest(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbBatchExecuteStatementOutput
 */
export interface DynamoDbBatchExecuteStatementOutput {
  /**
   * @schema DynamoDbBatchExecuteStatementOutput#Responses
   */
  readonly responses?: DynamoDbBatchStatementResponse[];

}

/**
 * Converts an object of type 'DynamoDbBatchExecuteStatementOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbBatchExecuteStatementOutput(obj: DynamoDbBatchExecuteStatementOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Responses': obj.responses?.map(y => toJson_DynamoDbBatchStatementResponse(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbBatchGetItemInput
 */
export interface DynamoDbBatchGetItemInput {
  /**
   * @schema DynamoDbBatchGetItemInput#RequestItems
   */
  readonly requestItems?: { [key: string]: DynamoDbKeysAndAttributes };

  /**
   * @schema DynamoDbBatchGetItemInput#ReturnConsumedCapacity
   */
  readonly returnConsumedCapacity?: string;

}

/**
 * Converts an object of type 'DynamoDbBatchGetItemInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbBatchGetItemInput(obj: DynamoDbBatchGetItemInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RequestItems': ((obj.requestItems) === undefined) ? undefined : (Object.entries(obj.requestItems).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_DynamoDbKeysAndAttributes(i[1]) }), {})),
    'ReturnConsumedCapacity': obj.returnConsumedCapacity,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbBatchGetItemOutput
 */
export interface DynamoDbBatchGetItemOutput {
  /**
   * @schema DynamoDbBatchGetItemOutput#Responses
   */
  readonly responses?: { [key: string]: { [key: string]: DynamoDbAttributeValue }[] };

  /**
   * @schema DynamoDbBatchGetItemOutput#UnprocessedKeys
   */
  readonly unprocessedKeys?: { [key: string]: DynamoDbKeysAndAttributes };

  /**
   * @schema DynamoDbBatchGetItemOutput#ConsumedCapacity
   */
  readonly consumedCapacity?: DynamoDbConsumedCapacity[];

}

/**
 * Converts an object of type 'DynamoDbBatchGetItemOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbBatchGetItemOutput(obj: DynamoDbBatchGetItemOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Responses': ((obj.responses) === undefined) ? undefined : (Object.entries(obj.responses).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => ((y) === undefined) ? undefined : (Object.entries(y).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_DynamoDbAttributeValue(i[1]) }), {}))) }), {})),
    'UnprocessedKeys': ((obj.unprocessedKeys) === undefined) ? undefined : (Object.entries(obj.unprocessedKeys).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_DynamoDbKeysAndAttributes(i[1]) }), {})),
    'ConsumedCapacity': obj.consumedCapacity?.map(y => toJson_DynamoDbConsumedCapacity(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbBatchWriteItemInput
 */
export interface DynamoDbBatchWriteItemInput {
  /**
   * @schema DynamoDbBatchWriteItemInput#RequestItems
   */
  readonly requestItems?: { [key: string]: DynamoDbWriteRequest[] };

  /**
   * @schema DynamoDbBatchWriteItemInput#ReturnConsumedCapacity
   */
  readonly returnConsumedCapacity?: string;

  /**
   * @schema DynamoDbBatchWriteItemInput#ReturnItemCollectionMetrics
   */
  readonly returnItemCollectionMetrics?: string;

}

/**
 * Converts an object of type 'DynamoDbBatchWriteItemInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbBatchWriteItemInput(obj: DynamoDbBatchWriteItemInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RequestItems': ((obj.requestItems) === undefined) ? undefined : (Object.entries(obj.requestItems).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => toJson_DynamoDbWriteRequest(y)) }), {})),
    'ReturnConsumedCapacity': obj.returnConsumedCapacity,
    'ReturnItemCollectionMetrics': obj.returnItemCollectionMetrics,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbBatchWriteItemOutput
 */
export interface DynamoDbBatchWriteItemOutput {
  /**
   * @schema DynamoDbBatchWriteItemOutput#UnprocessedItems
   */
  readonly unprocessedItems?: { [key: string]: DynamoDbWriteRequest[] };

  /**
   * @schema DynamoDbBatchWriteItemOutput#ItemCollectionMetrics
   */
  readonly itemCollectionMetrics?: { [key: string]: DynamoDbItemCollectionMetrics[] };

  /**
   * @schema DynamoDbBatchWriteItemOutput#ConsumedCapacity
   */
  readonly consumedCapacity?: DynamoDbConsumedCapacity[];

}

/**
 * Converts an object of type 'DynamoDbBatchWriteItemOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbBatchWriteItemOutput(obj: DynamoDbBatchWriteItemOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UnprocessedItems': ((obj.unprocessedItems) === undefined) ? undefined : (Object.entries(obj.unprocessedItems).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => toJson_DynamoDbWriteRequest(y)) }), {})),
    'ItemCollectionMetrics': ((obj.itemCollectionMetrics) === undefined) ? undefined : (Object.entries(obj.itemCollectionMetrics).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => toJson_DynamoDbItemCollectionMetrics(y)) }), {})),
    'ConsumedCapacity': obj.consumedCapacity?.map(y => toJson_DynamoDbConsumedCapacity(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbCreateBackupInput
 */
export interface DynamoDbCreateBackupInput {
  /**
   * @schema DynamoDbCreateBackupInput#TableName
   */
  readonly tableName?: string;

  /**
   * @schema DynamoDbCreateBackupInput#BackupName
   */
  readonly backupName?: string;

}

/**
 * Converts an object of type 'DynamoDbCreateBackupInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbCreateBackupInput(obj: DynamoDbCreateBackupInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TableName': obj.tableName,
    'BackupName': obj.backupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbCreateBackupOutput
 */
export interface DynamoDbCreateBackupOutput {
  /**
   * @schema DynamoDbCreateBackupOutput#BackupDetails
   */
  readonly backupDetails?: DynamoDbBackupDetails;

}

/**
 * Converts an object of type 'DynamoDbCreateBackupOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbCreateBackupOutput(obj: DynamoDbCreateBackupOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupDetails': toJson_DynamoDbBackupDetails(obj.backupDetails),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbCreateGlobalTableInput
 */
export interface DynamoDbCreateGlobalTableInput {
  /**
   * @schema DynamoDbCreateGlobalTableInput#GlobalTableName
   */
  readonly globalTableName?: string;

  /**
   * @schema DynamoDbCreateGlobalTableInput#ReplicationGroup
   */
  readonly replicationGroup?: DynamoDbReplica[];

}

/**
 * Converts an object of type 'DynamoDbCreateGlobalTableInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbCreateGlobalTableInput(obj: DynamoDbCreateGlobalTableInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalTableName': obj.globalTableName,
    'ReplicationGroup': obj.replicationGroup?.map(y => toJson_DynamoDbReplica(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbCreateGlobalTableOutput
 */
export interface DynamoDbCreateGlobalTableOutput {
  /**
   * @schema DynamoDbCreateGlobalTableOutput#GlobalTableDescription
   */
  readonly globalTableDescription?: DynamoDbGlobalTableDescription;

}

/**
 * Converts an object of type 'DynamoDbCreateGlobalTableOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbCreateGlobalTableOutput(obj: DynamoDbCreateGlobalTableOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalTableDescription': toJson_DynamoDbGlobalTableDescription(obj.globalTableDescription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbCreateTableInput
 */
export interface DynamoDbCreateTableInput {
  /**
   * @schema DynamoDbCreateTableInput#AttributeDefinitions
   */
  readonly attributeDefinitions?: DynamoDbAttributeDefinition[];

  /**
   * @schema DynamoDbCreateTableInput#TableName
   */
  readonly tableName?: string;

  /**
   * @schema DynamoDbCreateTableInput#KeySchema
   */
  readonly keySchema?: DynamoDbKeySchemaElement[];

  /**
   * @schema DynamoDbCreateTableInput#LocalSecondaryIndexes
   */
  readonly localSecondaryIndexes?: DynamoDbLocalSecondaryIndex[];

  /**
   * @schema DynamoDbCreateTableInput#GlobalSecondaryIndexes
   */
  readonly globalSecondaryIndexes?: DynamoDbGlobalSecondaryIndex[];

  /**
   * @schema DynamoDbCreateTableInput#BillingMode
   */
  readonly billingMode?: string;

  /**
   * @schema DynamoDbCreateTableInput#ProvisionedThroughput
   */
  readonly provisionedThroughput?: DynamoDbProvisionedThroughput;

  /**
   * @schema DynamoDbCreateTableInput#StreamSpecification
   */
  readonly streamSpecification?: DynamoDbStreamSpecification;

  /**
   * @schema DynamoDbCreateTableInput#SSESpecification
   */
  readonly sseSpecification?: DynamoDbsseSpecification;

  /**
   * @schema DynamoDbCreateTableInput#Tags
   */
  readonly tags?: DynamoDbTag[];

}

/**
 * Converts an object of type 'DynamoDbCreateTableInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbCreateTableInput(obj: DynamoDbCreateTableInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AttributeDefinitions': obj.attributeDefinitions?.map(y => toJson_DynamoDbAttributeDefinition(y)),
    'TableName': obj.tableName,
    'KeySchema': obj.keySchema?.map(y => toJson_DynamoDbKeySchemaElement(y)),
    'LocalSecondaryIndexes': obj.localSecondaryIndexes?.map(y => toJson_DynamoDbLocalSecondaryIndex(y)),
    'GlobalSecondaryIndexes': obj.globalSecondaryIndexes?.map(y => toJson_DynamoDbGlobalSecondaryIndex(y)),
    'BillingMode': obj.billingMode,
    'ProvisionedThroughput': toJson_DynamoDbProvisionedThroughput(obj.provisionedThroughput),
    'StreamSpecification': toJson_DynamoDbStreamSpecification(obj.streamSpecification),
    'SSESpecification': toJson_DynamoDbsseSpecification(obj.sseSpecification),
    'Tags': obj.tags?.map(y => toJson_DynamoDbTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbCreateTableOutput
 */
export interface DynamoDbCreateTableOutput {
  /**
   * @schema DynamoDbCreateTableOutput#TableDescription
   */
  readonly tableDescription?: DynamoDbTableDescription;

}

/**
 * Converts an object of type 'DynamoDbCreateTableOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbCreateTableOutput(obj: DynamoDbCreateTableOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TableDescription': toJson_DynamoDbTableDescription(obj.tableDescription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbDeleteBackupInput
 */
export interface DynamoDbDeleteBackupInput {
  /**
   * @schema DynamoDbDeleteBackupInput#BackupArn
   */
  readonly backupArn?: string;

}

/**
 * Converts an object of type 'DynamoDbDeleteBackupInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbDeleteBackupInput(obj: DynamoDbDeleteBackupInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupArn': obj.backupArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbDeleteBackupOutput
 */
export interface DynamoDbDeleteBackupOutput {
  /**
   * @schema DynamoDbDeleteBackupOutput#BackupDescription
   */
  readonly backupDescription?: DynamoDbBackupDescription;

}

/**
 * Converts an object of type 'DynamoDbDeleteBackupOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbDeleteBackupOutput(obj: DynamoDbDeleteBackupOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupDescription': toJson_DynamoDbBackupDescription(obj.backupDescription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbDeleteItemInput
 */
export interface DynamoDbDeleteItemInput {
  /**
   * @schema DynamoDbDeleteItemInput#TableName
   */
  readonly tableName?: string;

  /**
   * @schema DynamoDbDeleteItemInput#Key
   */
  readonly key?: { [key: string]: DynamoDbAttributeValue };

  /**
   * @schema DynamoDbDeleteItemInput#Expected
   */
  readonly expected?: { [key: string]: DynamoDbExpectedAttributeValue };

  /**
   * @schema DynamoDbDeleteItemInput#ConditionalOperator
   */
  readonly conditionalOperator?: string;

  /**
   * @schema DynamoDbDeleteItemInput#ReturnValues
   */
  readonly returnValues?: string;

  /**
   * @schema DynamoDbDeleteItemInput#ReturnConsumedCapacity
   */
  readonly returnConsumedCapacity?: string;

  /**
   * @schema DynamoDbDeleteItemInput#ReturnItemCollectionMetrics
   */
  readonly returnItemCollectionMetrics?: string;

  /**
   * @schema DynamoDbDeleteItemInput#ConditionExpression
   */
  readonly conditionExpression?: string;

  /**
   * @schema DynamoDbDeleteItemInput#ExpressionAttributeNames
   */
  readonly expressionAttributeNames?: { [key: string]: string };

  /**
   * @schema DynamoDbDeleteItemInput#ExpressionAttributeValues
   */
  readonly expressionAttributeValues?: { [key: string]: DynamoDbAttributeValue };

}

/**
 * Converts an object of type 'DynamoDbDeleteItemInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbDeleteItemInput(obj: DynamoDbDeleteItemInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TableName': obj.tableName,
    'Key': ((obj.key) === undefined) ? undefined : (Object.entries(obj.key).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_DynamoDbAttributeValue(i[1]) }), {})),
    'Expected': ((obj.expected) === undefined) ? undefined : (Object.entries(obj.expected).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_DynamoDbExpectedAttributeValue(i[1]) }), {})),
    'ConditionalOperator': obj.conditionalOperator,
    'ReturnValues': obj.returnValues,
    'ReturnConsumedCapacity': obj.returnConsumedCapacity,
    'ReturnItemCollectionMetrics': obj.returnItemCollectionMetrics,
    'ConditionExpression': obj.conditionExpression,
    'ExpressionAttributeNames': ((obj.expressionAttributeNames) === undefined) ? undefined : (Object.entries(obj.expressionAttributeNames).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'ExpressionAttributeValues': ((obj.expressionAttributeValues) === undefined) ? undefined : (Object.entries(obj.expressionAttributeValues).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_DynamoDbAttributeValue(i[1]) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbDeleteItemOutput
 */
export interface DynamoDbDeleteItemOutput {
  /**
   * @schema DynamoDbDeleteItemOutput#Attributes
   */
  readonly attributes?: { [key: string]: DynamoDbAttributeValue };

  /**
   * @schema DynamoDbDeleteItemOutput#ConsumedCapacity
   */
  readonly consumedCapacity?: DynamoDbConsumedCapacity;

  /**
   * @schema DynamoDbDeleteItemOutput#ItemCollectionMetrics
   */
  readonly itemCollectionMetrics?: DynamoDbItemCollectionMetrics;

}

/**
 * Converts an object of type 'DynamoDbDeleteItemOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbDeleteItemOutput(obj: DynamoDbDeleteItemOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Attributes': ((obj.attributes) === undefined) ? undefined : (Object.entries(obj.attributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_DynamoDbAttributeValue(i[1]) }), {})),
    'ConsumedCapacity': toJson_DynamoDbConsumedCapacity(obj.consumedCapacity),
    'ItemCollectionMetrics': toJson_DynamoDbItemCollectionMetrics(obj.itemCollectionMetrics),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbDeleteTableInput
 */
export interface DynamoDbDeleteTableInput {
  /**
   * @schema DynamoDbDeleteTableInput#TableName
   */
  readonly tableName?: string;

}

/**
 * Converts an object of type 'DynamoDbDeleteTableInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbDeleteTableInput(obj: DynamoDbDeleteTableInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TableName': obj.tableName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbDeleteTableOutput
 */
export interface DynamoDbDeleteTableOutput {
  /**
   * @schema DynamoDbDeleteTableOutput#TableDescription
   */
  readonly tableDescription?: DynamoDbTableDescription;

}

/**
 * Converts an object of type 'DynamoDbDeleteTableOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbDeleteTableOutput(obj: DynamoDbDeleteTableOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TableDescription': toJson_DynamoDbTableDescription(obj.tableDescription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbDescribeBackupInput
 */
export interface DynamoDbDescribeBackupInput {
  /**
   * @schema DynamoDbDescribeBackupInput#BackupArn
   */
  readonly backupArn?: string;

}

/**
 * Converts an object of type 'DynamoDbDescribeBackupInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbDescribeBackupInput(obj: DynamoDbDescribeBackupInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupArn': obj.backupArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbDescribeBackupOutput
 */
export interface DynamoDbDescribeBackupOutput {
  /**
   * @schema DynamoDbDescribeBackupOutput#BackupDescription
   */
  readonly backupDescription?: DynamoDbBackupDescription;

}

/**
 * Converts an object of type 'DynamoDbDescribeBackupOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbDescribeBackupOutput(obj: DynamoDbDescribeBackupOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupDescription': toJson_DynamoDbBackupDescription(obj.backupDescription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbDescribeContinuousBackupsInput
 */
export interface DynamoDbDescribeContinuousBackupsInput {
  /**
   * @schema DynamoDbDescribeContinuousBackupsInput#TableName
   */
  readonly tableName?: string;

}

/**
 * Converts an object of type 'DynamoDbDescribeContinuousBackupsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbDescribeContinuousBackupsInput(obj: DynamoDbDescribeContinuousBackupsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TableName': obj.tableName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbDescribeContinuousBackupsOutput
 */
export interface DynamoDbDescribeContinuousBackupsOutput {
  /**
   * @schema DynamoDbDescribeContinuousBackupsOutput#ContinuousBackupsDescription
   */
  readonly continuousBackupsDescription?: DynamoDbContinuousBackupsDescription;

}

/**
 * Converts an object of type 'DynamoDbDescribeContinuousBackupsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbDescribeContinuousBackupsOutput(obj: DynamoDbDescribeContinuousBackupsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContinuousBackupsDescription': toJson_DynamoDbContinuousBackupsDescription(obj.continuousBackupsDescription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbDescribeContributorInsightsInput
 */
export interface DynamoDbDescribeContributorInsightsInput {
  /**
   * @schema DynamoDbDescribeContributorInsightsInput#TableName
   */
  readonly tableName?: string;

  /**
   * @schema DynamoDbDescribeContributorInsightsInput#IndexName
   */
  readonly indexName?: string;

}

/**
 * Converts an object of type 'DynamoDbDescribeContributorInsightsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbDescribeContributorInsightsInput(obj: DynamoDbDescribeContributorInsightsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TableName': obj.tableName,
    'IndexName': obj.indexName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbDescribeContributorInsightsOutput
 */
export interface DynamoDbDescribeContributorInsightsOutput {
  /**
   * @schema DynamoDbDescribeContributorInsightsOutput#TableName
   */
  readonly tableName?: string;

  /**
   * @schema DynamoDbDescribeContributorInsightsOutput#IndexName
   */
  readonly indexName?: string;

  /**
   * @schema DynamoDbDescribeContributorInsightsOutput#ContributorInsightsRuleList
   */
  readonly contributorInsightsRuleList?: string[];

  /**
   * @schema DynamoDbDescribeContributorInsightsOutput#ContributorInsightsStatus
   */
  readonly contributorInsightsStatus?: string;

  /**
   * @schema DynamoDbDescribeContributorInsightsOutput#LastUpdateDateTime
   */
  readonly lastUpdateDateTime?: string;

  /**
   * @schema DynamoDbDescribeContributorInsightsOutput#FailureException
   */
  readonly failureException?: DynamoDbFailureException;

}

/**
 * Converts an object of type 'DynamoDbDescribeContributorInsightsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbDescribeContributorInsightsOutput(obj: DynamoDbDescribeContributorInsightsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TableName': obj.tableName,
    'IndexName': obj.indexName,
    'ContributorInsightsRuleList': obj.contributorInsightsRuleList?.map(y => y),
    'ContributorInsightsStatus': obj.contributorInsightsStatus,
    'LastUpdateDateTime': obj.lastUpdateDateTime,
    'FailureException': toJson_DynamoDbFailureException(obj.failureException),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbDescribeEndpointsRequest
 */
export interface DynamoDbDescribeEndpointsRequest {
}

/**
 * Converts an object of type 'DynamoDbDescribeEndpointsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbDescribeEndpointsRequest(obj: DynamoDbDescribeEndpointsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbDescribeEndpointsResponse
 */
export interface DynamoDbDescribeEndpointsResponse {
  /**
   * @schema DynamoDbDescribeEndpointsResponse#Endpoints
   */
  readonly endpoints?: DynamoDbEndpoint[];

}

/**
 * Converts an object of type 'DynamoDbDescribeEndpointsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbDescribeEndpointsResponse(obj: DynamoDbDescribeEndpointsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Endpoints': obj.endpoints?.map(y => toJson_DynamoDbEndpoint(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbDescribeExportInput
 */
export interface DynamoDbDescribeExportInput {
  /**
   * @schema DynamoDbDescribeExportInput#ExportArn
   */
  readonly exportArn?: string;

}

/**
 * Converts an object of type 'DynamoDbDescribeExportInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbDescribeExportInput(obj: DynamoDbDescribeExportInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ExportArn': obj.exportArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbDescribeExportOutput
 */
export interface DynamoDbDescribeExportOutput {
  /**
   * @schema DynamoDbDescribeExportOutput#ExportDescription
   */
  readonly exportDescription?: DynamoDbExportDescription;

}

/**
 * Converts an object of type 'DynamoDbDescribeExportOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbDescribeExportOutput(obj: DynamoDbDescribeExportOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ExportDescription': toJson_DynamoDbExportDescription(obj.exportDescription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbDescribeGlobalTableInput
 */
export interface DynamoDbDescribeGlobalTableInput {
  /**
   * @schema DynamoDbDescribeGlobalTableInput#GlobalTableName
   */
  readonly globalTableName?: string;

}

/**
 * Converts an object of type 'DynamoDbDescribeGlobalTableInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbDescribeGlobalTableInput(obj: DynamoDbDescribeGlobalTableInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalTableName': obj.globalTableName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbDescribeGlobalTableOutput
 */
export interface DynamoDbDescribeGlobalTableOutput {
  /**
   * @schema DynamoDbDescribeGlobalTableOutput#GlobalTableDescription
   */
  readonly globalTableDescription?: DynamoDbGlobalTableDescription;

}

/**
 * Converts an object of type 'DynamoDbDescribeGlobalTableOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbDescribeGlobalTableOutput(obj: DynamoDbDescribeGlobalTableOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalTableDescription': toJson_DynamoDbGlobalTableDescription(obj.globalTableDescription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbDescribeGlobalTableSettingsInput
 */
export interface DynamoDbDescribeGlobalTableSettingsInput {
  /**
   * @schema DynamoDbDescribeGlobalTableSettingsInput#GlobalTableName
   */
  readonly globalTableName?: string;

}

/**
 * Converts an object of type 'DynamoDbDescribeGlobalTableSettingsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbDescribeGlobalTableSettingsInput(obj: DynamoDbDescribeGlobalTableSettingsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalTableName': obj.globalTableName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbDescribeGlobalTableSettingsOutput
 */
export interface DynamoDbDescribeGlobalTableSettingsOutput {
  /**
   * @schema DynamoDbDescribeGlobalTableSettingsOutput#GlobalTableName
   */
  readonly globalTableName?: string;

  /**
   * @schema DynamoDbDescribeGlobalTableSettingsOutput#ReplicaSettings
   */
  readonly replicaSettings?: DynamoDbReplicaSettingsDescription[];

}

/**
 * Converts an object of type 'DynamoDbDescribeGlobalTableSettingsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbDescribeGlobalTableSettingsOutput(obj: DynamoDbDescribeGlobalTableSettingsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalTableName': obj.globalTableName,
    'ReplicaSettings': obj.replicaSettings?.map(y => toJson_DynamoDbReplicaSettingsDescription(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbDescribeKinesisStreamingDestinationInput
 */
export interface DynamoDbDescribeKinesisStreamingDestinationInput {
  /**
   * @schema DynamoDbDescribeKinesisStreamingDestinationInput#TableName
   */
  readonly tableName?: string;

}

/**
 * Converts an object of type 'DynamoDbDescribeKinesisStreamingDestinationInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbDescribeKinesisStreamingDestinationInput(obj: DynamoDbDescribeKinesisStreamingDestinationInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TableName': obj.tableName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbDescribeKinesisStreamingDestinationOutput
 */
export interface DynamoDbDescribeKinesisStreamingDestinationOutput {
  /**
   * @schema DynamoDbDescribeKinesisStreamingDestinationOutput#TableName
   */
  readonly tableName?: string;

  /**
   * @schema DynamoDbDescribeKinesisStreamingDestinationOutput#KinesisDataStreamDestinations
   */
  readonly kinesisDataStreamDestinations?: DynamoDbKinesisDataStreamDestination[];

}

/**
 * Converts an object of type 'DynamoDbDescribeKinesisStreamingDestinationOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbDescribeKinesisStreamingDestinationOutput(obj: DynamoDbDescribeKinesisStreamingDestinationOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TableName': obj.tableName,
    'KinesisDataStreamDestinations': obj.kinesisDataStreamDestinations?.map(y => toJson_DynamoDbKinesisDataStreamDestination(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbDescribeLimitsInput
 */
export interface DynamoDbDescribeLimitsInput {
}

/**
 * Converts an object of type 'DynamoDbDescribeLimitsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbDescribeLimitsInput(obj: DynamoDbDescribeLimitsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbDescribeLimitsOutput
 */
export interface DynamoDbDescribeLimitsOutput {
  /**
   * @schema DynamoDbDescribeLimitsOutput#AccountMaxReadCapacityUnits
   */
  readonly accountMaxReadCapacityUnits?: number;

  /**
   * @schema DynamoDbDescribeLimitsOutput#AccountMaxWriteCapacityUnits
   */
  readonly accountMaxWriteCapacityUnits?: number;

  /**
   * @schema DynamoDbDescribeLimitsOutput#TableMaxReadCapacityUnits
   */
  readonly tableMaxReadCapacityUnits?: number;

  /**
   * @schema DynamoDbDescribeLimitsOutput#TableMaxWriteCapacityUnits
   */
  readonly tableMaxWriteCapacityUnits?: number;

}

/**
 * Converts an object of type 'DynamoDbDescribeLimitsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbDescribeLimitsOutput(obj: DynamoDbDescribeLimitsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountMaxReadCapacityUnits': obj.accountMaxReadCapacityUnits,
    'AccountMaxWriteCapacityUnits': obj.accountMaxWriteCapacityUnits,
    'TableMaxReadCapacityUnits': obj.tableMaxReadCapacityUnits,
    'TableMaxWriteCapacityUnits': obj.tableMaxWriteCapacityUnits,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbDescribeTableInput
 */
export interface DynamoDbDescribeTableInput {
  /**
   * @schema DynamoDbDescribeTableInput#TableName
   */
  readonly tableName?: string;

}

/**
 * Converts an object of type 'DynamoDbDescribeTableInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbDescribeTableInput(obj: DynamoDbDescribeTableInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TableName': obj.tableName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbDescribeTableOutput
 */
export interface DynamoDbDescribeTableOutput {
  /**
   * @schema DynamoDbDescribeTableOutput#Table
   */
  readonly table?: DynamoDbTableDescription;

}

/**
 * Converts an object of type 'DynamoDbDescribeTableOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbDescribeTableOutput(obj: DynamoDbDescribeTableOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Table': toJson_DynamoDbTableDescription(obj.table),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbDescribeTableReplicaAutoScalingInput
 */
export interface DynamoDbDescribeTableReplicaAutoScalingInput {
  /**
   * @schema DynamoDbDescribeTableReplicaAutoScalingInput#TableName
   */
  readonly tableName?: string;

}

/**
 * Converts an object of type 'DynamoDbDescribeTableReplicaAutoScalingInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbDescribeTableReplicaAutoScalingInput(obj: DynamoDbDescribeTableReplicaAutoScalingInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TableName': obj.tableName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbDescribeTableReplicaAutoScalingOutput
 */
export interface DynamoDbDescribeTableReplicaAutoScalingOutput {
  /**
   * @schema DynamoDbDescribeTableReplicaAutoScalingOutput#TableAutoScalingDescription
   */
  readonly tableAutoScalingDescription?: DynamoDbTableAutoScalingDescription;

}

/**
 * Converts an object of type 'DynamoDbDescribeTableReplicaAutoScalingOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbDescribeTableReplicaAutoScalingOutput(obj: DynamoDbDescribeTableReplicaAutoScalingOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TableAutoScalingDescription': toJson_DynamoDbTableAutoScalingDescription(obj.tableAutoScalingDescription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbDescribeTimeToLiveInput
 */
export interface DynamoDbDescribeTimeToLiveInput {
  /**
   * @schema DynamoDbDescribeTimeToLiveInput#TableName
   */
  readonly tableName?: string;

}

/**
 * Converts an object of type 'DynamoDbDescribeTimeToLiveInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbDescribeTimeToLiveInput(obj: DynamoDbDescribeTimeToLiveInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TableName': obj.tableName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbDescribeTimeToLiveOutput
 */
export interface DynamoDbDescribeTimeToLiveOutput {
  /**
   * @schema DynamoDbDescribeTimeToLiveOutput#TimeToLiveDescription
   */
  readonly timeToLiveDescription?: DynamoDbTimeToLiveDescription;

}

/**
 * Converts an object of type 'DynamoDbDescribeTimeToLiveOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbDescribeTimeToLiveOutput(obj: DynamoDbDescribeTimeToLiveOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TimeToLiveDescription': toJson_DynamoDbTimeToLiveDescription(obj.timeToLiveDescription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbKinesisStreamingDestinationInput
 */
export interface DynamoDbKinesisStreamingDestinationInput {
  /**
   * @schema DynamoDbKinesisStreamingDestinationInput#TableName
   */
  readonly tableName?: string;

  /**
   * @schema DynamoDbKinesisStreamingDestinationInput#StreamArn
   */
  readonly streamArn?: string;

}

/**
 * Converts an object of type 'DynamoDbKinesisStreamingDestinationInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbKinesisStreamingDestinationInput(obj: DynamoDbKinesisStreamingDestinationInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TableName': obj.tableName,
    'StreamArn': obj.streamArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbKinesisStreamingDestinationOutput
 */
export interface DynamoDbKinesisStreamingDestinationOutput {
  /**
   * @schema DynamoDbKinesisStreamingDestinationOutput#TableName
   */
  readonly tableName?: string;

  /**
   * @schema DynamoDbKinesisStreamingDestinationOutput#StreamArn
   */
  readonly streamArn?: string;

  /**
   * @schema DynamoDbKinesisStreamingDestinationOutput#DestinationStatus
   */
  readonly destinationStatus?: string;

}

/**
 * Converts an object of type 'DynamoDbKinesisStreamingDestinationOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbKinesisStreamingDestinationOutput(obj: DynamoDbKinesisStreamingDestinationOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TableName': obj.tableName,
    'StreamArn': obj.streamArn,
    'DestinationStatus': obj.destinationStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbExecuteStatementInput
 */
export interface DynamoDbExecuteStatementInput {
  /**
   * @schema DynamoDbExecuteStatementInput#Statement
   */
  readonly statement?: string;

  /**
   * @schema DynamoDbExecuteStatementInput#Parameters
   */
  readonly parameters?: DynamoDbAttributeValue[];

  /**
   * @schema DynamoDbExecuteStatementInput#ConsistentRead
   */
  readonly consistentRead?: boolean;

  /**
   * @schema DynamoDbExecuteStatementInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DynamoDbExecuteStatementInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbExecuteStatementInput(obj: DynamoDbExecuteStatementInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Statement': obj.statement,
    'Parameters': obj.parameters?.map(y => toJson_DynamoDbAttributeValue(y)),
    'ConsistentRead': obj.consistentRead,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbExecuteStatementOutput
 */
export interface DynamoDbExecuteStatementOutput {
  /**
   * @schema DynamoDbExecuteStatementOutput#Items
   */
  readonly items?: { [key: string]: DynamoDbAttributeValue }[];

  /**
   * @schema DynamoDbExecuteStatementOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DynamoDbExecuteStatementOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbExecuteStatementOutput(obj: DynamoDbExecuteStatementOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Items': obj.items?.map(y => ((y) === undefined) ? undefined : (Object.entries(y).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_DynamoDbAttributeValue(i[1]) }), {}))),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbExecuteTransactionInput
 */
export interface DynamoDbExecuteTransactionInput {
  /**
   * @schema DynamoDbExecuteTransactionInput#TransactStatements
   */
  readonly transactStatements?: DynamoDbParameterizedStatement[];

  /**
   * @schema DynamoDbExecuteTransactionInput#ClientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * Converts an object of type 'DynamoDbExecuteTransactionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbExecuteTransactionInput(obj: DynamoDbExecuteTransactionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TransactStatements': obj.transactStatements?.map(y => toJson_DynamoDbParameterizedStatement(y)),
    'ClientRequestToken': obj.clientRequestToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbExecuteTransactionOutput
 */
export interface DynamoDbExecuteTransactionOutput {
  /**
   * @schema DynamoDbExecuteTransactionOutput#Responses
   */
  readonly responses?: DynamoDbItemResponse[];

}

/**
 * Converts an object of type 'DynamoDbExecuteTransactionOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbExecuteTransactionOutput(obj: DynamoDbExecuteTransactionOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Responses': obj.responses?.map(y => toJson_DynamoDbItemResponse(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbExportTableToPointInTimeInput
 */
export interface DynamoDbExportTableToPointInTimeInput {
  /**
   * @schema DynamoDbExportTableToPointInTimeInput#TableArn
   */
  readonly tableArn?: string;

  /**
   * @schema DynamoDbExportTableToPointInTimeInput#ExportTime
   */
  readonly exportTime?: string;

  /**
   * @schema DynamoDbExportTableToPointInTimeInput#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema DynamoDbExportTableToPointInTimeInput#S3Bucket
   */
  readonly s3Bucket?: string;

  /**
   * @schema DynamoDbExportTableToPointInTimeInput#S3BucketOwner
   */
  readonly s3BucketOwner?: string;

  /**
   * @schema DynamoDbExportTableToPointInTimeInput#S3Prefix
   */
  readonly s3Prefix?: string;

  /**
   * @schema DynamoDbExportTableToPointInTimeInput#S3SseAlgorithm
   */
  readonly s3SseAlgorithm?: string;

  /**
   * @schema DynamoDbExportTableToPointInTimeInput#S3SseKmsKeyId
   */
  readonly s3SseKmsKeyId?: string;

  /**
   * @schema DynamoDbExportTableToPointInTimeInput#ExportFormat
   */
  readonly exportFormat?: string;

}

/**
 * Converts an object of type 'DynamoDbExportTableToPointInTimeInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbExportTableToPointInTimeInput(obj: DynamoDbExportTableToPointInTimeInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TableArn': obj.tableArn,
    'ExportTime': obj.exportTime,
    'ClientToken': obj.clientToken,
    'S3Bucket': obj.s3Bucket,
    'S3BucketOwner': obj.s3BucketOwner,
    'S3Prefix': obj.s3Prefix,
    'S3SseAlgorithm': obj.s3SseAlgorithm,
    'S3SseKmsKeyId': obj.s3SseKmsKeyId,
    'ExportFormat': obj.exportFormat,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbExportTableToPointInTimeOutput
 */
export interface DynamoDbExportTableToPointInTimeOutput {
  /**
   * @schema DynamoDbExportTableToPointInTimeOutput#ExportDescription
   */
  readonly exportDescription?: DynamoDbExportDescription;

}

/**
 * Converts an object of type 'DynamoDbExportTableToPointInTimeOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbExportTableToPointInTimeOutput(obj: DynamoDbExportTableToPointInTimeOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ExportDescription': toJson_DynamoDbExportDescription(obj.exportDescription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbGetItemInput
 */
export interface DynamoDbGetItemInput {
  /**
   * @schema DynamoDbGetItemInput#TableName
   */
  readonly tableName?: string;

  /**
   * @schema DynamoDbGetItemInput#Key
   */
  readonly key?: { [key: string]: DynamoDbAttributeValue };

  /**
   * @schema DynamoDbGetItemInput#AttributesToGet
   */
  readonly attributesToGet?: string[];

  /**
   * @schema DynamoDbGetItemInput#ConsistentRead
   */
  readonly consistentRead?: boolean;

  /**
   * @schema DynamoDbGetItemInput#ReturnConsumedCapacity
   */
  readonly returnConsumedCapacity?: string;

  /**
   * @schema DynamoDbGetItemInput#ProjectionExpression
   */
  readonly projectionExpression?: string;

  /**
   * @schema DynamoDbGetItemInput#ExpressionAttributeNames
   */
  readonly expressionAttributeNames?: { [key: string]: string };

}

/**
 * Converts an object of type 'DynamoDbGetItemInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbGetItemInput(obj: DynamoDbGetItemInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TableName': obj.tableName,
    'Key': ((obj.key) === undefined) ? undefined : (Object.entries(obj.key).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_DynamoDbAttributeValue(i[1]) }), {})),
    'AttributesToGet': obj.attributesToGet?.map(y => y),
    'ConsistentRead': obj.consistentRead,
    'ReturnConsumedCapacity': obj.returnConsumedCapacity,
    'ProjectionExpression': obj.projectionExpression,
    'ExpressionAttributeNames': ((obj.expressionAttributeNames) === undefined) ? undefined : (Object.entries(obj.expressionAttributeNames).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbGetItemOutput
 */
export interface DynamoDbGetItemOutput {
  /**
   * @schema DynamoDbGetItemOutput#Item
   */
  readonly item?: { [key: string]: DynamoDbAttributeValue };

  /**
   * @schema DynamoDbGetItemOutput#ConsumedCapacity
   */
  readonly consumedCapacity?: DynamoDbConsumedCapacity;

}

/**
 * Converts an object of type 'DynamoDbGetItemOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbGetItemOutput(obj: DynamoDbGetItemOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Item': ((obj.item) === undefined) ? undefined : (Object.entries(obj.item).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_DynamoDbAttributeValue(i[1]) }), {})),
    'ConsumedCapacity': toJson_DynamoDbConsumedCapacity(obj.consumedCapacity),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbListBackupsInput
 */
export interface DynamoDbListBackupsInput {
  /**
   * @schema DynamoDbListBackupsInput#TableName
   */
  readonly tableName?: string;

  /**
   * @schema DynamoDbListBackupsInput#Limit
   */
  readonly limit?: number;

  /**
   * @schema DynamoDbListBackupsInput#TimeRangeLowerBound
   */
  readonly timeRangeLowerBound?: string;

  /**
   * @schema DynamoDbListBackupsInput#TimeRangeUpperBound
   */
  readonly timeRangeUpperBound?: string;

  /**
   * @schema DynamoDbListBackupsInput#ExclusiveStartBackupArn
   */
  readonly exclusiveStartBackupArn?: string;

  /**
   * @schema DynamoDbListBackupsInput#BackupType
   */
  readonly backupType?: string;

}

/**
 * Converts an object of type 'DynamoDbListBackupsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbListBackupsInput(obj: DynamoDbListBackupsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TableName': obj.tableName,
    'Limit': obj.limit,
    'TimeRangeLowerBound': obj.timeRangeLowerBound,
    'TimeRangeUpperBound': obj.timeRangeUpperBound,
    'ExclusiveStartBackupArn': obj.exclusiveStartBackupArn,
    'BackupType': obj.backupType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbListBackupsOutput
 */
export interface DynamoDbListBackupsOutput {
  /**
   * @schema DynamoDbListBackupsOutput#BackupSummaries
   */
  readonly backupSummaries?: DynamoDbBackupSummary[];

  /**
   * @schema DynamoDbListBackupsOutput#LastEvaluatedBackupArn
   */
  readonly lastEvaluatedBackupArn?: string;

}

/**
 * Converts an object of type 'DynamoDbListBackupsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbListBackupsOutput(obj: DynamoDbListBackupsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupSummaries': obj.backupSummaries?.map(y => toJson_DynamoDbBackupSummary(y)),
    'LastEvaluatedBackupArn': obj.lastEvaluatedBackupArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbListContributorInsightsInput
 */
export interface DynamoDbListContributorInsightsInput {
  /**
   * @schema DynamoDbListContributorInsightsInput#TableName
   */
  readonly tableName?: string;

  /**
   * @schema DynamoDbListContributorInsightsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DynamoDbListContributorInsightsInput#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'DynamoDbListContributorInsightsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbListContributorInsightsInput(obj: DynamoDbListContributorInsightsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TableName': obj.tableName,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbListContributorInsightsOutput
 */
export interface DynamoDbListContributorInsightsOutput {
  /**
   * @schema DynamoDbListContributorInsightsOutput#ContributorInsightsSummaries
   */
  readonly contributorInsightsSummaries?: DynamoDbContributorInsightsSummary[];

  /**
   * @schema DynamoDbListContributorInsightsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DynamoDbListContributorInsightsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbListContributorInsightsOutput(obj: DynamoDbListContributorInsightsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContributorInsightsSummaries': obj.contributorInsightsSummaries?.map(y => toJson_DynamoDbContributorInsightsSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbListExportsInput
 */
export interface DynamoDbListExportsInput {
  /**
   * @schema DynamoDbListExportsInput#TableArn
   */
  readonly tableArn?: string;

  /**
   * @schema DynamoDbListExportsInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DynamoDbListExportsInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DynamoDbListExportsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbListExportsInput(obj: DynamoDbListExportsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TableArn': obj.tableArn,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbListExportsOutput
 */
export interface DynamoDbListExportsOutput {
  /**
   * @schema DynamoDbListExportsOutput#ExportSummaries
   */
  readonly exportSummaries?: DynamoDbExportSummary[];

  /**
   * @schema DynamoDbListExportsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DynamoDbListExportsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbListExportsOutput(obj: DynamoDbListExportsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ExportSummaries': obj.exportSummaries?.map(y => toJson_DynamoDbExportSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbListGlobalTablesInput
 */
export interface DynamoDbListGlobalTablesInput {
  /**
   * @schema DynamoDbListGlobalTablesInput#ExclusiveStartGlobalTableName
   */
  readonly exclusiveStartGlobalTableName?: string;

  /**
   * @schema DynamoDbListGlobalTablesInput#Limit
   */
  readonly limit?: number;

  /**
   * @schema DynamoDbListGlobalTablesInput#RegionName
   */
  readonly regionName?: string;

}

/**
 * Converts an object of type 'DynamoDbListGlobalTablesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbListGlobalTablesInput(obj: DynamoDbListGlobalTablesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ExclusiveStartGlobalTableName': obj.exclusiveStartGlobalTableName,
    'Limit': obj.limit,
    'RegionName': obj.regionName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbListGlobalTablesOutput
 */
export interface DynamoDbListGlobalTablesOutput {
  /**
   * @schema DynamoDbListGlobalTablesOutput#GlobalTables
   */
  readonly globalTables?: DynamoDbGlobalTable[];

  /**
   * @schema DynamoDbListGlobalTablesOutput#LastEvaluatedGlobalTableName
   */
  readonly lastEvaluatedGlobalTableName?: string;

}

/**
 * Converts an object of type 'DynamoDbListGlobalTablesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbListGlobalTablesOutput(obj: DynamoDbListGlobalTablesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalTables': obj.globalTables?.map(y => toJson_DynamoDbGlobalTable(y)),
    'LastEvaluatedGlobalTableName': obj.lastEvaluatedGlobalTableName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbListTablesInput
 */
export interface DynamoDbListTablesInput {
  /**
   * @schema DynamoDbListTablesInput#ExclusiveStartTableName
   */
  readonly exclusiveStartTableName?: string;

  /**
   * @schema DynamoDbListTablesInput#Limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'DynamoDbListTablesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbListTablesInput(obj: DynamoDbListTablesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ExclusiveStartTableName': obj.exclusiveStartTableName,
    'Limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbListTablesOutput
 */
export interface DynamoDbListTablesOutput {
  /**
   * @schema DynamoDbListTablesOutput#TableNames
   */
  readonly tableNames?: string[];

  /**
   * @schema DynamoDbListTablesOutput#LastEvaluatedTableName
   */
  readonly lastEvaluatedTableName?: string;

}

/**
 * Converts an object of type 'DynamoDbListTablesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbListTablesOutput(obj: DynamoDbListTablesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TableNames': obj.tableNames?.map(y => y),
    'LastEvaluatedTableName': obj.lastEvaluatedTableName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbListTagsOfResourceInput
 */
export interface DynamoDbListTagsOfResourceInput {
  /**
   * @schema DynamoDbListTagsOfResourceInput#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema DynamoDbListTagsOfResourceInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DynamoDbListTagsOfResourceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbListTagsOfResourceInput(obj: DynamoDbListTagsOfResourceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbListTagsOfResourceOutput
 */
export interface DynamoDbListTagsOfResourceOutput {
  /**
   * @schema DynamoDbListTagsOfResourceOutput#Tags
   */
  readonly tags?: DynamoDbTag[];

  /**
   * @schema DynamoDbListTagsOfResourceOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DynamoDbListTagsOfResourceOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbListTagsOfResourceOutput(obj: DynamoDbListTagsOfResourceOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': obj.tags?.map(y => toJson_DynamoDbTag(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbPutItemInput
 */
export interface DynamoDbPutItemInput {
  /**
   * @schema DynamoDbPutItemInput#TableName
   */
  readonly tableName?: string;

  /**
   * @schema DynamoDbPutItemInput#Item
   */
  readonly item?: { [key: string]: DynamoDbAttributeValue };

  /**
   * @schema DynamoDbPutItemInput#Expected
   */
  readonly expected?: { [key: string]: DynamoDbExpectedAttributeValue };

  /**
   * @schema DynamoDbPutItemInput#ReturnValues
   */
  readonly returnValues?: string;

  /**
   * @schema DynamoDbPutItemInput#ReturnConsumedCapacity
   */
  readonly returnConsumedCapacity?: string;

  /**
   * @schema DynamoDbPutItemInput#ReturnItemCollectionMetrics
   */
  readonly returnItemCollectionMetrics?: string;

  /**
   * @schema DynamoDbPutItemInput#ConditionalOperator
   */
  readonly conditionalOperator?: string;

  /**
   * @schema DynamoDbPutItemInput#ConditionExpression
   */
  readonly conditionExpression?: string;

  /**
   * @schema DynamoDbPutItemInput#ExpressionAttributeNames
   */
  readonly expressionAttributeNames?: { [key: string]: string };

  /**
   * @schema DynamoDbPutItemInput#ExpressionAttributeValues
   */
  readonly expressionAttributeValues?: { [key: string]: DynamoDbAttributeValue };

}

/**
 * Converts an object of type 'DynamoDbPutItemInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbPutItemInput(obj: DynamoDbPutItemInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TableName': obj.tableName,
    'Item': ((obj.item) === undefined) ? undefined : (Object.entries(obj.item).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_DynamoDbAttributeValue(i[1]) }), {})),
    'Expected': ((obj.expected) === undefined) ? undefined : (Object.entries(obj.expected).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_DynamoDbExpectedAttributeValue(i[1]) }), {})),
    'ReturnValues': obj.returnValues,
    'ReturnConsumedCapacity': obj.returnConsumedCapacity,
    'ReturnItemCollectionMetrics': obj.returnItemCollectionMetrics,
    'ConditionalOperator': obj.conditionalOperator,
    'ConditionExpression': obj.conditionExpression,
    'ExpressionAttributeNames': ((obj.expressionAttributeNames) === undefined) ? undefined : (Object.entries(obj.expressionAttributeNames).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'ExpressionAttributeValues': ((obj.expressionAttributeValues) === undefined) ? undefined : (Object.entries(obj.expressionAttributeValues).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_DynamoDbAttributeValue(i[1]) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbPutItemOutput
 */
export interface DynamoDbPutItemOutput {
  /**
   * @schema DynamoDbPutItemOutput#Attributes
   */
  readonly attributes?: { [key: string]: DynamoDbAttributeValue };

  /**
   * @schema DynamoDbPutItemOutput#ConsumedCapacity
   */
  readonly consumedCapacity?: DynamoDbConsumedCapacity;

  /**
   * @schema DynamoDbPutItemOutput#ItemCollectionMetrics
   */
  readonly itemCollectionMetrics?: DynamoDbItemCollectionMetrics;

}

/**
 * Converts an object of type 'DynamoDbPutItemOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbPutItemOutput(obj: DynamoDbPutItemOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Attributes': ((obj.attributes) === undefined) ? undefined : (Object.entries(obj.attributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_DynamoDbAttributeValue(i[1]) }), {})),
    'ConsumedCapacity': toJson_DynamoDbConsumedCapacity(obj.consumedCapacity),
    'ItemCollectionMetrics': toJson_DynamoDbItemCollectionMetrics(obj.itemCollectionMetrics),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbQueryInput
 */
export interface DynamoDbQueryInput {
  /**
   * @schema DynamoDbQueryInput#TableName
   */
  readonly tableName?: string;

  /**
   * @schema DynamoDbQueryInput#IndexName
   */
  readonly indexName?: string;

  /**
   * @schema DynamoDbQueryInput#Select
   */
  readonly select?: string;

  /**
   * @schema DynamoDbQueryInput#AttributesToGet
   */
  readonly attributesToGet?: string[];

  /**
   * @schema DynamoDbQueryInput#Limit
   */
  readonly limit?: number;

  /**
   * @schema DynamoDbQueryInput#ConsistentRead
   */
  readonly consistentRead?: boolean;

  /**
   * @schema DynamoDbQueryInput#KeyConditions
   */
  readonly keyConditions?: { [key: string]: DynamoDbCondition };

  /**
   * @schema DynamoDbQueryInput#QueryFilter
   */
  readonly queryFilter?: { [key: string]: DynamoDbCondition };

  /**
   * @schema DynamoDbQueryInput#ConditionalOperator
   */
  readonly conditionalOperator?: string;

  /**
   * @schema DynamoDbQueryInput#ScanIndexForward
   */
  readonly scanIndexForward?: boolean;

  /**
   * @schema DynamoDbQueryInput#ExclusiveStartKey
   */
  readonly exclusiveStartKey?: { [key: string]: DynamoDbAttributeValue };

  /**
   * @schema DynamoDbQueryInput#ReturnConsumedCapacity
   */
  readonly returnConsumedCapacity?: string;

  /**
   * @schema DynamoDbQueryInput#ProjectionExpression
   */
  readonly projectionExpression?: string;

  /**
   * @schema DynamoDbQueryInput#FilterExpression
   */
  readonly filterExpression?: string;

  /**
   * @schema DynamoDbQueryInput#KeyConditionExpression
   */
  readonly keyConditionExpression?: string;

  /**
   * @schema DynamoDbQueryInput#ExpressionAttributeNames
   */
  readonly expressionAttributeNames?: { [key: string]: string };

  /**
   * @schema DynamoDbQueryInput#ExpressionAttributeValues
   */
  readonly expressionAttributeValues?: { [key: string]: DynamoDbAttributeValue };

}

/**
 * Converts an object of type 'DynamoDbQueryInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbQueryInput(obj: DynamoDbQueryInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TableName': obj.tableName,
    'IndexName': obj.indexName,
    'Select': obj.select,
    'AttributesToGet': obj.attributesToGet?.map(y => y),
    'Limit': obj.limit,
    'ConsistentRead': obj.consistentRead,
    'KeyConditions': ((obj.keyConditions) === undefined) ? undefined : (Object.entries(obj.keyConditions).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_DynamoDbCondition(i[1]) }), {})),
    'QueryFilter': ((obj.queryFilter) === undefined) ? undefined : (Object.entries(obj.queryFilter).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_DynamoDbCondition(i[1]) }), {})),
    'ConditionalOperator': obj.conditionalOperator,
    'ScanIndexForward': obj.scanIndexForward,
    'ExclusiveStartKey': ((obj.exclusiveStartKey) === undefined) ? undefined : (Object.entries(obj.exclusiveStartKey).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_DynamoDbAttributeValue(i[1]) }), {})),
    'ReturnConsumedCapacity': obj.returnConsumedCapacity,
    'ProjectionExpression': obj.projectionExpression,
    'FilterExpression': obj.filterExpression,
    'KeyConditionExpression': obj.keyConditionExpression,
    'ExpressionAttributeNames': ((obj.expressionAttributeNames) === undefined) ? undefined : (Object.entries(obj.expressionAttributeNames).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'ExpressionAttributeValues': ((obj.expressionAttributeValues) === undefined) ? undefined : (Object.entries(obj.expressionAttributeValues).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_DynamoDbAttributeValue(i[1]) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbQueryOutput
 */
export interface DynamoDbQueryOutput {
  /**
   * @schema DynamoDbQueryOutput#Items
   */
  readonly items?: { [key: string]: DynamoDbAttributeValue }[];

  /**
   * @schema DynamoDbQueryOutput#Count
   */
  readonly count?: number;

  /**
   * @schema DynamoDbQueryOutput#ScannedCount
   */
  readonly scannedCount?: number;

  /**
   * @schema DynamoDbQueryOutput#LastEvaluatedKey
   */
  readonly lastEvaluatedKey?: { [key: string]: DynamoDbAttributeValue };

  /**
   * @schema DynamoDbQueryOutput#ConsumedCapacity
   */
  readonly consumedCapacity?: DynamoDbConsumedCapacity;

}

/**
 * Converts an object of type 'DynamoDbQueryOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbQueryOutput(obj: DynamoDbQueryOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Items': obj.items?.map(y => ((y) === undefined) ? undefined : (Object.entries(y).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_DynamoDbAttributeValue(i[1]) }), {}))),
    'Count': obj.count,
    'ScannedCount': obj.scannedCount,
    'LastEvaluatedKey': ((obj.lastEvaluatedKey) === undefined) ? undefined : (Object.entries(obj.lastEvaluatedKey).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_DynamoDbAttributeValue(i[1]) }), {})),
    'ConsumedCapacity': toJson_DynamoDbConsumedCapacity(obj.consumedCapacity),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbRestoreTableFromBackupInput
 */
export interface DynamoDbRestoreTableFromBackupInput {
  /**
   * @schema DynamoDbRestoreTableFromBackupInput#TargetTableName
   */
  readonly targetTableName?: string;

  /**
   * @schema DynamoDbRestoreTableFromBackupInput#BackupArn
   */
  readonly backupArn?: string;

  /**
   * @schema DynamoDbRestoreTableFromBackupInput#BillingModeOverride
   */
  readonly billingModeOverride?: string;

  /**
   * @schema DynamoDbRestoreTableFromBackupInput#GlobalSecondaryIndexOverride
   */
  readonly globalSecondaryIndexOverride?: DynamoDbGlobalSecondaryIndex[];

  /**
   * @schema DynamoDbRestoreTableFromBackupInput#LocalSecondaryIndexOverride
   */
  readonly localSecondaryIndexOverride?: DynamoDbLocalSecondaryIndex[];

  /**
   * @schema DynamoDbRestoreTableFromBackupInput#ProvisionedThroughputOverride
   */
  readonly provisionedThroughputOverride?: DynamoDbProvisionedThroughput;

  /**
   * @schema DynamoDbRestoreTableFromBackupInput#SSESpecificationOverride
   */
  readonly sseSpecificationOverride?: DynamoDbsseSpecification;

}

/**
 * Converts an object of type 'DynamoDbRestoreTableFromBackupInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbRestoreTableFromBackupInput(obj: DynamoDbRestoreTableFromBackupInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TargetTableName': obj.targetTableName,
    'BackupArn': obj.backupArn,
    'BillingModeOverride': obj.billingModeOverride,
    'GlobalSecondaryIndexOverride': obj.globalSecondaryIndexOverride?.map(y => toJson_DynamoDbGlobalSecondaryIndex(y)),
    'LocalSecondaryIndexOverride': obj.localSecondaryIndexOverride?.map(y => toJson_DynamoDbLocalSecondaryIndex(y)),
    'ProvisionedThroughputOverride': toJson_DynamoDbProvisionedThroughput(obj.provisionedThroughputOverride),
    'SSESpecificationOverride': toJson_DynamoDbsseSpecification(obj.sseSpecificationOverride),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbRestoreTableFromBackupOutput
 */
export interface DynamoDbRestoreTableFromBackupOutput {
  /**
   * @schema DynamoDbRestoreTableFromBackupOutput#TableDescription
   */
  readonly tableDescription?: DynamoDbTableDescription;

}

/**
 * Converts an object of type 'DynamoDbRestoreTableFromBackupOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbRestoreTableFromBackupOutput(obj: DynamoDbRestoreTableFromBackupOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TableDescription': toJson_DynamoDbTableDescription(obj.tableDescription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbRestoreTableToPointInTimeInput
 */
export interface DynamoDbRestoreTableToPointInTimeInput {
  /**
   * @schema DynamoDbRestoreTableToPointInTimeInput#SourceTableArn
   */
  readonly sourceTableArn?: string;

  /**
   * @schema DynamoDbRestoreTableToPointInTimeInput#SourceTableName
   */
  readonly sourceTableName?: string;

  /**
   * @schema DynamoDbRestoreTableToPointInTimeInput#TargetTableName
   */
  readonly targetTableName?: string;

  /**
   * @schema DynamoDbRestoreTableToPointInTimeInput#UseLatestRestorableTime
   */
  readonly useLatestRestorableTime?: boolean;

  /**
   * @schema DynamoDbRestoreTableToPointInTimeInput#RestoreDateTime
   */
  readonly restoreDateTime?: string;

  /**
   * @schema DynamoDbRestoreTableToPointInTimeInput#BillingModeOverride
   */
  readonly billingModeOverride?: string;

  /**
   * @schema DynamoDbRestoreTableToPointInTimeInput#GlobalSecondaryIndexOverride
   */
  readonly globalSecondaryIndexOverride?: DynamoDbGlobalSecondaryIndex[];

  /**
   * @schema DynamoDbRestoreTableToPointInTimeInput#LocalSecondaryIndexOverride
   */
  readonly localSecondaryIndexOverride?: DynamoDbLocalSecondaryIndex[];

  /**
   * @schema DynamoDbRestoreTableToPointInTimeInput#ProvisionedThroughputOverride
   */
  readonly provisionedThroughputOverride?: DynamoDbProvisionedThroughput;

  /**
   * @schema DynamoDbRestoreTableToPointInTimeInput#SSESpecificationOverride
   */
  readonly sseSpecificationOverride?: DynamoDbsseSpecification;

}

/**
 * Converts an object of type 'DynamoDbRestoreTableToPointInTimeInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbRestoreTableToPointInTimeInput(obj: DynamoDbRestoreTableToPointInTimeInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceTableArn': obj.sourceTableArn,
    'SourceTableName': obj.sourceTableName,
    'TargetTableName': obj.targetTableName,
    'UseLatestRestorableTime': obj.useLatestRestorableTime,
    'RestoreDateTime': obj.restoreDateTime,
    'BillingModeOverride': obj.billingModeOverride,
    'GlobalSecondaryIndexOverride': obj.globalSecondaryIndexOverride?.map(y => toJson_DynamoDbGlobalSecondaryIndex(y)),
    'LocalSecondaryIndexOverride': obj.localSecondaryIndexOverride?.map(y => toJson_DynamoDbLocalSecondaryIndex(y)),
    'ProvisionedThroughputOverride': toJson_DynamoDbProvisionedThroughput(obj.provisionedThroughputOverride),
    'SSESpecificationOverride': toJson_DynamoDbsseSpecification(obj.sseSpecificationOverride),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbRestoreTableToPointInTimeOutput
 */
export interface DynamoDbRestoreTableToPointInTimeOutput {
  /**
   * @schema DynamoDbRestoreTableToPointInTimeOutput#TableDescription
   */
  readonly tableDescription?: DynamoDbTableDescription;

}

/**
 * Converts an object of type 'DynamoDbRestoreTableToPointInTimeOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbRestoreTableToPointInTimeOutput(obj: DynamoDbRestoreTableToPointInTimeOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TableDescription': toJson_DynamoDbTableDescription(obj.tableDescription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbScanInput
 */
export interface DynamoDbScanInput {
  /**
   * @schema DynamoDbScanInput#TableName
   */
  readonly tableName?: string;

  /**
   * @schema DynamoDbScanInput#IndexName
   */
  readonly indexName?: string;

  /**
   * @schema DynamoDbScanInput#AttributesToGet
   */
  readonly attributesToGet?: string[];

  /**
   * @schema DynamoDbScanInput#Limit
   */
  readonly limit?: number;

  /**
   * @schema DynamoDbScanInput#Select
   */
  readonly select?: string;

  /**
   * @schema DynamoDbScanInput#ScanFilter
   */
  readonly scanFilter?: { [key: string]: DynamoDbCondition };

  /**
   * @schema DynamoDbScanInput#ConditionalOperator
   */
  readonly conditionalOperator?: string;

  /**
   * @schema DynamoDbScanInput#ExclusiveStartKey
   */
  readonly exclusiveStartKey?: { [key: string]: DynamoDbAttributeValue };

  /**
   * @schema DynamoDbScanInput#ReturnConsumedCapacity
   */
  readonly returnConsumedCapacity?: string;

  /**
   * @schema DynamoDbScanInput#TotalSegments
   */
  readonly totalSegments?: number;

  /**
   * @schema DynamoDbScanInput#Segment
   */
  readonly segment?: number;

  /**
   * @schema DynamoDbScanInput#ProjectionExpression
   */
  readonly projectionExpression?: string;

  /**
   * @schema DynamoDbScanInput#FilterExpression
   */
  readonly filterExpression?: string;

  /**
   * @schema DynamoDbScanInput#ExpressionAttributeNames
   */
  readonly expressionAttributeNames?: { [key: string]: string };

  /**
   * @schema DynamoDbScanInput#ExpressionAttributeValues
   */
  readonly expressionAttributeValues?: { [key: string]: DynamoDbAttributeValue };

  /**
   * @schema DynamoDbScanInput#ConsistentRead
   */
  readonly consistentRead?: boolean;

}

/**
 * Converts an object of type 'DynamoDbScanInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbScanInput(obj: DynamoDbScanInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TableName': obj.tableName,
    'IndexName': obj.indexName,
    'AttributesToGet': obj.attributesToGet?.map(y => y),
    'Limit': obj.limit,
    'Select': obj.select,
    'ScanFilter': ((obj.scanFilter) === undefined) ? undefined : (Object.entries(obj.scanFilter).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_DynamoDbCondition(i[1]) }), {})),
    'ConditionalOperator': obj.conditionalOperator,
    'ExclusiveStartKey': ((obj.exclusiveStartKey) === undefined) ? undefined : (Object.entries(obj.exclusiveStartKey).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_DynamoDbAttributeValue(i[1]) }), {})),
    'ReturnConsumedCapacity': obj.returnConsumedCapacity,
    'TotalSegments': obj.totalSegments,
    'Segment': obj.segment,
    'ProjectionExpression': obj.projectionExpression,
    'FilterExpression': obj.filterExpression,
    'ExpressionAttributeNames': ((obj.expressionAttributeNames) === undefined) ? undefined : (Object.entries(obj.expressionAttributeNames).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'ExpressionAttributeValues': ((obj.expressionAttributeValues) === undefined) ? undefined : (Object.entries(obj.expressionAttributeValues).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_DynamoDbAttributeValue(i[1]) }), {})),
    'ConsistentRead': obj.consistentRead,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbScanOutput
 */
export interface DynamoDbScanOutput {
  /**
   * @schema DynamoDbScanOutput#Items
   */
  readonly items?: { [key: string]: DynamoDbAttributeValue }[];

  /**
   * @schema DynamoDbScanOutput#Count
   */
  readonly count?: number;

  /**
   * @schema DynamoDbScanOutput#ScannedCount
   */
  readonly scannedCount?: number;

  /**
   * @schema DynamoDbScanOutput#LastEvaluatedKey
   */
  readonly lastEvaluatedKey?: { [key: string]: DynamoDbAttributeValue };

  /**
   * @schema DynamoDbScanOutput#ConsumedCapacity
   */
  readonly consumedCapacity?: DynamoDbConsumedCapacity;

}

/**
 * Converts an object of type 'DynamoDbScanOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbScanOutput(obj: DynamoDbScanOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Items': obj.items?.map(y => ((y) === undefined) ? undefined : (Object.entries(y).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_DynamoDbAttributeValue(i[1]) }), {}))),
    'Count': obj.count,
    'ScannedCount': obj.scannedCount,
    'LastEvaluatedKey': ((obj.lastEvaluatedKey) === undefined) ? undefined : (Object.entries(obj.lastEvaluatedKey).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_DynamoDbAttributeValue(i[1]) }), {})),
    'ConsumedCapacity': toJson_DynamoDbConsumedCapacity(obj.consumedCapacity),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbTagResourceInput
 */
export interface DynamoDbTagResourceInput {
  /**
   * @schema DynamoDbTagResourceInput#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema DynamoDbTagResourceInput#Tags
   */
  readonly tags?: DynamoDbTag[];

}

/**
 * Converts an object of type 'DynamoDbTagResourceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbTagResourceInput(obj: DynamoDbTagResourceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'Tags': obj.tags?.map(y => toJson_DynamoDbTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbTransactGetItemsInput
 */
export interface DynamoDbTransactGetItemsInput {
  /**
   * @schema DynamoDbTransactGetItemsInput#TransactItems
   */
  readonly transactItems?: DynamoDbTransactGetItem[];

  /**
   * @schema DynamoDbTransactGetItemsInput#ReturnConsumedCapacity
   */
  readonly returnConsumedCapacity?: string;

}

/**
 * Converts an object of type 'DynamoDbTransactGetItemsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbTransactGetItemsInput(obj: DynamoDbTransactGetItemsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TransactItems': obj.transactItems?.map(y => toJson_DynamoDbTransactGetItem(y)),
    'ReturnConsumedCapacity': obj.returnConsumedCapacity,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbTransactGetItemsOutput
 */
export interface DynamoDbTransactGetItemsOutput {
  /**
   * @schema DynamoDbTransactGetItemsOutput#ConsumedCapacity
   */
  readonly consumedCapacity?: DynamoDbConsumedCapacity[];

  /**
   * @schema DynamoDbTransactGetItemsOutput#Responses
   */
  readonly responses?: DynamoDbItemResponse[];

}

/**
 * Converts an object of type 'DynamoDbTransactGetItemsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbTransactGetItemsOutput(obj: DynamoDbTransactGetItemsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConsumedCapacity': obj.consumedCapacity?.map(y => toJson_DynamoDbConsumedCapacity(y)),
    'Responses': obj.responses?.map(y => toJson_DynamoDbItemResponse(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbTransactWriteItemsInput
 */
export interface DynamoDbTransactWriteItemsInput {
  /**
   * @schema DynamoDbTransactWriteItemsInput#TransactItems
   */
  readonly transactItems?: DynamoDbTransactWriteItem[];

  /**
   * @schema DynamoDbTransactWriteItemsInput#ReturnConsumedCapacity
   */
  readonly returnConsumedCapacity?: string;

  /**
   * @schema DynamoDbTransactWriteItemsInput#ReturnItemCollectionMetrics
   */
  readonly returnItemCollectionMetrics?: string;

  /**
   * @schema DynamoDbTransactWriteItemsInput#ClientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * Converts an object of type 'DynamoDbTransactWriteItemsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbTransactWriteItemsInput(obj: DynamoDbTransactWriteItemsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TransactItems': obj.transactItems?.map(y => toJson_DynamoDbTransactWriteItem(y)),
    'ReturnConsumedCapacity': obj.returnConsumedCapacity,
    'ReturnItemCollectionMetrics': obj.returnItemCollectionMetrics,
    'ClientRequestToken': obj.clientRequestToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbTransactWriteItemsOutput
 */
export interface DynamoDbTransactWriteItemsOutput {
  /**
   * @schema DynamoDbTransactWriteItemsOutput#ConsumedCapacity
   */
  readonly consumedCapacity?: DynamoDbConsumedCapacity[];

  /**
   * @schema DynamoDbTransactWriteItemsOutput#ItemCollectionMetrics
   */
  readonly itemCollectionMetrics?: { [key: string]: DynamoDbItemCollectionMetrics[] };

}

/**
 * Converts an object of type 'DynamoDbTransactWriteItemsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbTransactWriteItemsOutput(obj: DynamoDbTransactWriteItemsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConsumedCapacity': obj.consumedCapacity?.map(y => toJson_DynamoDbConsumedCapacity(y)),
    'ItemCollectionMetrics': ((obj.itemCollectionMetrics) === undefined) ? undefined : (Object.entries(obj.itemCollectionMetrics).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => toJson_DynamoDbItemCollectionMetrics(y)) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbUntagResourceInput
 */
export interface DynamoDbUntagResourceInput {
  /**
   * @schema DynamoDbUntagResourceInput#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema DynamoDbUntagResourceInput#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'DynamoDbUntagResourceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbUntagResourceInput(obj: DynamoDbUntagResourceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbUpdateContinuousBackupsInput
 */
export interface DynamoDbUpdateContinuousBackupsInput {
  /**
   * @schema DynamoDbUpdateContinuousBackupsInput#TableName
   */
  readonly tableName?: string;

  /**
   * @schema DynamoDbUpdateContinuousBackupsInput#PointInTimeRecoverySpecification
   */
  readonly pointInTimeRecoverySpecification?: DynamoDbPointInTimeRecoverySpecification;

}

/**
 * Converts an object of type 'DynamoDbUpdateContinuousBackupsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbUpdateContinuousBackupsInput(obj: DynamoDbUpdateContinuousBackupsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TableName': obj.tableName,
    'PointInTimeRecoverySpecification': toJson_DynamoDbPointInTimeRecoverySpecification(obj.pointInTimeRecoverySpecification),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbUpdateContinuousBackupsOutput
 */
export interface DynamoDbUpdateContinuousBackupsOutput {
  /**
   * @schema DynamoDbUpdateContinuousBackupsOutput#ContinuousBackupsDescription
   */
  readonly continuousBackupsDescription?: DynamoDbContinuousBackupsDescription;

}

/**
 * Converts an object of type 'DynamoDbUpdateContinuousBackupsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbUpdateContinuousBackupsOutput(obj: DynamoDbUpdateContinuousBackupsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContinuousBackupsDescription': toJson_DynamoDbContinuousBackupsDescription(obj.continuousBackupsDescription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbUpdateContributorInsightsInput
 */
export interface DynamoDbUpdateContributorInsightsInput {
  /**
   * @schema DynamoDbUpdateContributorInsightsInput#TableName
   */
  readonly tableName?: string;

  /**
   * @schema DynamoDbUpdateContributorInsightsInput#IndexName
   */
  readonly indexName?: string;

  /**
   * @schema DynamoDbUpdateContributorInsightsInput#ContributorInsightsAction
   */
  readonly contributorInsightsAction?: string;

}

/**
 * Converts an object of type 'DynamoDbUpdateContributorInsightsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbUpdateContributorInsightsInput(obj: DynamoDbUpdateContributorInsightsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TableName': obj.tableName,
    'IndexName': obj.indexName,
    'ContributorInsightsAction': obj.contributorInsightsAction,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbUpdateContributorInsightsOutput
 */
export interface DynamoDbUpdateContributorInsightsOutput {
  /**
   * @schema DynamoDbUpdateContributorInsightsOutput#TableName
   */
  readonly tableName?: string;

  /**
   * @schema DynamoDbUpdateContributorInsightsOutput#IndexName
   */
  readonly indexName?: string;

  /**
   * @schema DynamoDbUpdateContributorInsightsOutput#ContributorInsightsStatus
   */
  readonly contributorInsightsStatus?: string;

}

/**
 * Converts an object of type 'DynamoDbUpdateContributorInsightsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbUpdateContributorInsightsOutput(obj: DynamoDbUpdateContributorInsightsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TableName': obj.tableName,
    'IndexName': obj.indexName,
    'ContributorInsightsStatus': obj.contributorInsightsStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbUpdateGlobalTableInput
 */
export interface DynamoDbUpdateGlobalTableInput {
  /**
   * @schema DynamoDbUpdateGlobalTableInput#GlobalTableName
   */
  readonly globalTableName?: string;

  /**
   * @schema DynamoDbUpdateGlobalTableInput#ReplicaUpdates
   */
  readonly replicaUpdates?: DynamoDbReplicaUpdate[];

}

/**
 * Converts an object of type 'DynamoDbUpdateGlobalTableInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbUpdateGlobalTableInput(obj: DynamoDbUpdateGlobalTableInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalTableName': obj.globalTableName,
    'ReplicaUpdates': obj.replicaUpdates?.map(y => toJson_DynamoDbReplicaUpdate(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbUpdateGlobalTableOutput
 */
export interface DynamoDbUpdateGlobalTableOutput {
  /**
   * @schema DynamoDbUpdateGlobalTableOutput#GlobalTableDescription
   */
  readonly globalTableDescription?: DynamoDbGlobalTableDescription;

}

/**
 * Converts an object of type 'DynamoDbUpdateGlobalTableOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbUpdateGlobalTableOutput(obj: DynamoDbUpdateGlobalTableOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalTableDescription': toJson_DynamoDbGlobalTableDescription(obj.globalTableDescription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbUpdateGlobalTableSettingsInput
 */
export interface DynamoDbUpdateGlobalTableSettingsInput {
  /**
   * @schema DynamoDbUpdateGlobalTableSettingsInput#GlobalTableName
   */
  readonly globalTableName?: string;

  /**
   * @schema DynamoDbUpdateGlobalTableSettingsInput#GlobalTableBillingMode
   */
  readonly globalTableBillingMode?: string;

  /**
   * @schema DynamoDbUpdateGlobalTableSettingsInput#GlobalTableProvisionedWriteCapacityUnits
   */
  readonly globalTableProvisionedWriteCapacityUnits?: number;

  /**
   * @schema DynamoDbUpdateGlobalTableSettingsInput#GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate
   */
  readonly globalTableProvisionedWriteCapacityAutoScalingSettingsUpdate?: DynamoDbAutoScalingSettingsUpdate;

  /**
   * @schema DynamoDbUpdateGlobalTableSettingsInput#GlobalTableGlobalSecondaryIndexSettingsUpdate
   */
  readonly globalTableGlobalSecondaryIndexSettingsUpdate?: DynamoDbGlobalTableGlobalSecondaryIndexSettingsUpdate[];

  /**
   * @schema DynamoDbUpdateGlobalTableSettingsInput#ReplicaSettingsUpdate
   */
  readonly replicaSettingsUpdate?: DynamoDbReplicaSettingsUpdate[];

}

/**
 * Converts an object of type 'DynamoDbUpdateGlobalTableSettingsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbUpdateGlobalTableSettingsInput(obj: DynamoDbUpdateGlobalTableSettingsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalTableName': obj.globalTableName,
    'GlobalTableBillingMode': obj.globalTableBillingMode,
    'GlobalTableProvisionedWriteCapacityUnits': obj.globalTableProvisionedWriteCapacityUnits,
    'GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate': toJson_DynamoDbAutoScalingSettingsUpdate(obj.globalTableProvisionedWriteCapacityAutoScalingSettingsUpdate),
    'GlobalTableGlobalSecondaryIndexSettingsUpdate': obj.globalTableGlobalSecondaryIndexSettingsUpdate?.map(y => toJson_DynamoDbGlobalTableGlobalSecondaryIndexSettingsUpdate(y)),
    'ReplicaSettingsUpdate': obj.replicaSettingsUpdate?.map(y => toJson_DynamoDbReplicaSettingsUpdate(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbUpdateGlobalTableSettingsOutput
 */
export interface DynamoDbUpdateGlobalTableSettingsOutput {
  /**
   * @schema DynamoDbUpdateGlobalTableSettingsOutput#GlobalTableName
   */
  readonly globalTableName?: string;

  /**
   * @schema DynamoDbUpdateGlobalTableSettingsOutput#ReplicaSettings
   */
  readonly replicaSettings?: DynamoDbReplicaSettingsDescription[];

}

/**
 * Converts an object of type 'DynamoDbUpdateGlobalTableSettingsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbUpdateGlobalTableSettingsOutput(obj: DynamoDbUpdateGlobalTableSettingsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalTableName': obj.globalTableName,
    'ReplicaSettings': obj.replicaSettings?.map(y => toJson_DynamoDbReplicaSettingsDescription(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbUpdateItemInput
 */
export interface DynamoDbUpdateItemInput {
  /**
   * @schema DynamoDbUpdateItemInput#TableName
   */
  readonly tableName?: string;

  /**
   * @schema DynamoDbUpdateItemInput#Key
   */
  readonly key?: { [key: string]: DynamoDbAttributeValue };

  /**
   * @schema DynamoDbUpdateItemInput#AttributeUpdates
   */
  readonly attributeUpdates?: { [key: string]: DynamoDbAttributeValueUpdate };

  /**
   * @schema DynamoDbUpdateItemInput#Expected
   */
  readonly expected?: { [key: string]: DynamoDbExpectedAttributeValue };

  /**
   * @schema DynamoDbUpdateItemInput#ConditionalOperator
   */
  readonly conditionalOperator?: string;

  /**
   * @schema DynamoDbUpdateItemInput#ReturnValues
   */
  readonly returnValues?: string;

  /**
   * @schema DynamoDbUpdateItemInput#ReturnConsumedCapacity
   */
  readonly returnConsumedCapacity?: string;

  /**
   * @schema DynamoDbUpdateItemInput#ReturnItemCollectionMetrics
   */
  readonly returnItemCollectionMetrics?: string;

  /**
   * @schema DynamoDbUpdateItemInput#UpdateExpression
   */
  readonly updateExpression?: string;

  /**
   * @schema DynamoDbUpdateItemInput#ConditionExpression
   */
  readonly conditionExpression?: string;

  /**
   * @schema DynamoDbUpdateItemInput#ExpressionAttributeNames
   */
  readonly expressionAttributeNames?: { [key: string]: string };

  /**
   * @schema DynamoDbUpdateItemInput#ExpressionAttributeValues
   */
  readonly expressionAttributeValues?: { [key: string]: DynamoDbAttributeValue };

}

/**
 * Converts an object of type 'DynamoDbUpdateItemInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbUpdateItemInput(obj: DynamoDbUpdateItemInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TableName': obj.tableName,
    'Key': ((obj.key) === undefined) ? undefined : (Object.entries(obj.key).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_DynamoDbAttributeValue(i[1]) }), {})),
    'AttributeUpdates': ((obj.attributeUpdates) === undefined) ? undefined : (Object.entries(obj.attributeUpdates).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_DynamoDbAttributeValueUpdate(i[1]) }), {})),
    'Expected': ((obj.expected) === undefined) ? undefined : (Object.entries(obj.expected).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_DynamoDbExpectedAttributeValue(i[1]) }), {})),
    'ConditionalOperator': obj.conditionalOperator,
    'ReturnValues': obj.returnValues,
    'ReturnConsumedCapacity': obj.returnConsumedCapacity,
    'ReturnItemCollectionMetrics': obj.returnItemCollectionMetrics,
    'UpdateExpression': obj.updateExpression,
    'ConditionExpression': obj.conditionExpression,
    'ExpressionAttributeNames': ((obj.expressionAttributeNames) === undefined) ? undefined : (Object.entries(obj.expressionAttributeNames).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'ExpressionAttributeValues': ((obj.expressionAttributeValues) === undefined) ? undefined : (Object.entries(obj.expressionAttributeValues).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_DynamoDbAttributeValue(i[1]) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbUpdateItemOutput
 */
export interface DynamoDbUpdateItemOutput {
  /**
   * @schema DynamoDbUpdateItemOutput#Attributes
   */
  readonly attributes?: { [key: string]: DynamoDbAttributeValue };

  /**
   * @schema DynamoDbUpdateItemOutput#ConsumedCapacity
   */
  readonly consumedCapacity?: DynamoDbConsumedCapacity;

  /**
   * @schema DynamoDbUpdateItemOutput#ItemCollectionMetrics
   */
  readonly itemCollectionMetrics?: DynamoDbItemCollectionMetrics;

}

/**
 * Converts an object of type 'DynamoDbUpdateItemOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbUpdateItemOutput(obj: DynamoDbUpdateItemOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Attributes': ((obj.attributes) === undefined) ? undefined : (Object.entries(obj.attributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_DynamoDbAttributeValue(i[1]) }), {})),
    'ConsumedCapacity': toJson_DynamoDbConsumedCapacity(obj.consumedCapacity),
    'ItemCollectionMetrics': toJson_DynamoDbItemCollectionMetrics(obj.itemCollectionMetrics),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbUpdateTableInput
 */
export interface DynamoDbUpdateTableInput {
  /**
   * @schema DynamoDbUpdateTableInput#AttributeDefinitions
   */
  readonly attributeDefinitions?: DynamoDbAttributeDefinition[];

  /**
   * @schema DynamoDbUpdateTableInput#TableName
   */
  readonly tableName?: string;

  /**
   * @schema DynamoDbUpdateTableInput#BillingMode
   */
  readonly billingMode?: string;

  /**
   * @schema DynamoDbUpdateTableInput#ProvisionedThroughput
   */
  readonly provisionedThroughput?: DynamoDbProvisionedThroughput;

  /**
   * @schema DynamoDbUpdateTableInput#GlobalSecondaryIndexUpdates
   */
  readonly globalSecondaryIndexUpdates?: DynamoDbGlobalSecondaryIndexUpdate[];

  /**
   * @schema DynamoDbUpdateTableInput#StreamSpecification
   */
  readonly streamSpecification?: DynamoDbStreamSpecification;

  /**
   * @schema DynamoDbUpdateTableInput#SSESpecification
   */
  readonly sseSpecification?: DynamoDbsseSpecification;

  /**
   * @schema DynamoDbUpdateTableInput#ReplicaUpdates
   */
  readonly replicaUpdates?: DynamoDbReplicationGroupUpdate[];

}

/**
 * Converts an object of type 'DynamoDbUpdateTableInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbUpdateTableInput(obj: DynamoDbUpdateTableInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AttributeDefinitions': obj.attributeDefinitions?.map(y => toJson_DynamoDbAttributeDefinition(y)),
    'TableName': obj.tableName,
    'BillingMode': obj.billingMode,
    'ProvisionedThroughput': toJson_DynamoDbProvisionedThroughput(obj.provisionedThroughput),
    'GlobalSecondaryIndexUpdates': obj.globalSecondaryIndexUpdates?.map(y => toJson_DynamoDbGlobalSecondaryIndexUpdate(y)),
    'StreamSpecification': toJson_DynamoDbStreamSpecification(obj.streamSpecification),
    'SSESpecification': toJson_DynamoDbsseSpecification(obj.sseSpecification),
    'ReplicaUpdates': obj.replicaUpdates?.map(y => toJson_DynamoDbReplicationGroupUpdate(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbUpdateTableOutput
 */
export interface DynamoDbUpdateTableOutput {
  /**
   * @schema DynamoDbUpdateTableOutput#TableDescription
   */
  readonly tableDescription?: DynamoDbTableDescription;

}

/**
 * Converts an object of type 'DynamoDbUpdateTableOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbUpdateTableOutput(obj: DynamoDbUpdateTableOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TableDescription': toJson_DynamoDbTableDescription(obj.tableDescription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbUpdateTableReplicaAutoScalingInput
 */
export interface DynamoDbUpdateTableReplicaAutoScalingInput {
  /**
   * @schema DynamoDbUpdateTableReplicaAutoScalingInput#GlobalSecondaryIndexUpdates
   */
  readonly globalSecondaryIndexUpdates?: DynamoDbGlobalSecondaryIndexAutoScalingUpdate[];

  /**
   * @schema DynamoDbUpdateTableReplicaAutoScalingInput#TableName
   */
  readonly tableName?: string;

  /**
   * @schema DynamoDbUpdateTableReplicaAutoScalingInput#ProvisionedWriteCapacityAutoScalingUpdate
   */
  readonly provisionedWriteCapacityAutoScalingUpdate?: DynamoDbAutoScalingSettingsUpdate;

  /**
   * @schema DynamoDbUpdateTableReplicaAutoScalingInput#ReplicaUpdates
   */
  readonly replicaUpdates?: DynamoDbReplicaAutoScalingUpdate[];

}

/**
 * Converts an object of type 'DynamoDbUpdateTableReplicaAutoScalingInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbUpdateTableReplicaAutoScalingInput(obj: DynamoDbUpdateTableReplicaAutoScalingInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalSecondaryIndexUpdates': obj.globalSecondaryIndexUpdates?.map(y => toJson_DynamoDbGlobalSecondaryIndexAutoScalingUpdate(y)),
    'TableName': obj.tableName,
    'ProvisionedWriteCapacityAutoScalingUpdate': toJson_DynamoDbAutoScalingSettingsUpdate(obj.provisionedWriteCapacityAutoScalingUpdate),
    'ReplicaUpdates': obj.replicaUpdates?.map(y => toJson_DynamoDbReplicaAutoScalingUpdate(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbUpdateTableReplicaAutoScalingOutput
 */
export interface DynamoDbUpdateTableReplicaAutoScalingOutput {
  /**
   * @schema DynamoDbUpdateTableReplicaAutoScalingOutput#TableAutoScalingDescription
   */
  readonly tableAutoScalingDescription?: DynamoDbTableAutoScalingDescription;

}

/**
 * Converts an object of type 'DynamoDbUpdateTableReplicaAutoScalingOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbUpdateTableReplicaAutoScalingOutput(obj: DynamoDbUpdateTableReplicaAutoScalingOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TableAutoScalingDescription': toJson_DynamoDbTableAutoScalingDescription(obj.tableAutoScalingDescription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbUpdateTimeToLiveInput
 */
export interface DynamoDbUpdateTimeToLiveInput {
  /**
   * @schema DynamoDbUpdateTimeToLiveInput#TableName
   */
  readonly tableName?: string;

  /**
   * @schema DynamoDbUpdateTimeToLiveInput#TimeToLiveSpecification
   */
  readonly timeToLiveSpecification?: DynamoDbTimeToLiveSpecification;

}

/**
 * Converts an object of type 'DynamoDbUpdateTimeToLiveInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbUpdateTimeToLiveInput(obj: DynamoDbUpdateTimeToLiveInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TableName': obj.tableName,
    'TimeToLiveSpecification': toJson_DynamoDbTimeToLiveSpecification(obj.timeToLiveSpecification),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbUpdateTimeToLiveOutput
 */
export interface DynamoDbUpdateTimeToLiveOutput {
  /**
   * @schema DynamoDbUpdateTimeToLiveOutput#TimeToLiveSpecification
   */
  readonly timeToLiveSpecification?: DynamoDbTimeToLiveSpecification;

}

/**
 * Converts an object of type 'DynamoDbUpdateTimeToLiveOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbUpdateTimeToLiveOutput(obj: DynamoDbUpdateTimeToLiveOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TimeToLiveSpecification': toJson_DynamoDbTimeToLiveSpecification(obj.timeToLiveSpecification),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbBatchStatementRequest
 */
export interface DynamoDbBatchStatementRequest {
  /**
   * @schema DynamoDbBatchStatementRequest#Statement
   */
  readonly statement?: string;

  /**
   * @schema DynamoDbBatchStatementRequest#Parameters
   */
  readonly parameters?: DynamoDbAttributeValue[];

  /**
   * @schema DynamoDbBatchStatementRequest#ConsistentRead
   */
  readonly consistentRead?: boolean;

}

/**
 * Converts an object of type 'DynamoDbBatchStatementRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbBatchStatementRequest(obj: DynamoDbBatchStatementRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Statement': obj.statement,
    'Parameters': obj.parameters?.map(y => toJson_DynamoDbAttributeValue(y)),
    'ConsistentRead': obj.consistentRead,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbBatchStatementResponse
 */
export interface DynamoDbBatchStatementResponse {
  /**
   * @schema DynamoDbBatchStatementResponse#Error
   */
  readonly error?: DynamoDbBatchStatementError;

  /**
   * @schema DynamoDbBatchStatementResponse#TableName
   */
  readonly tableName?: string;

  /**
   * @schema DynamoDbBatchStatementResponse#Item
   */
  readonly item?: { [key: string]: DynamoDbAttributeValue };

}

/**
 * Converts an object of type 'DynamoDbBatchStatementResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbBatchStatementResponse(obj: DynamoDbBatchStatementResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Error': toJson_DynamoDbBatchStatementError(obj.error),
    'TableName': obj.tableName,
    'Item': ((obj.item) === undefined) ? undefined : (Object.entries(obj.item).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_DynamoDbAttributeValue(i[1]) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbKeysAndAttributes
 */
export interface DynamoDbKeysAndAttributes {
  /**
   * @schema DynamoDbKeysAndAttributes#Keys
   */
  readonly keys?: { [key: string]: DynamoDbAttributeValue }[];

  /**
   * @schema DynamoDbKeysAndAttributes#AttributesToGet
   */
  readonly attributesToGet?: string[];

  /**
   * @schema DynamoDbKeysAndAttributes#ConsistentRead
   */
  readonly consistentRead?: boolean;

  /**
   * @schema DynamoDbKeysAndAttributes#ProjectionExpression
   */
  readonly projectionExpression?: string;

  /**
   * @schema DynamoDbKeysAndAttributes#ExpressionAttributeNames
   */
  readonly expressionAttributeNames?: { [key: string]: string };

}

/**
 * Converts an object of type 'DynamoDbKeysAndAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbKeysAndAttributes(obj: DynamoDbKeysAndAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Keys': obj.keys?.map(y => ((y) === undefined) ? undefined : (Object.entries(y).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_DynamoDbAttributeValue(i[1]) }), {}))),
    'AttributesToGet': obj.attributesToGet?.map(y => y),
    'ConsistentRead': obj.consistentRead,
    'ProjectionExpression': obj.projectionExpression,
    'ExpressionAttributeNames': ((obj.expressionAttributeNames) === undefined) ? undefined : (Object.entries(obj.expressionAttributeNames).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbAttributeValue
 */
export interface DynamoDbAttributeValue {
  /**
   * @schema DynamoDbAttributeValue#S
   */
  readonly s?: string;

  /**
   * @schema DynamoDbAttributeValue#N
   */
  readonly n?: string;

  /**
   * @schema DynamoDbAttributeValue#B
   */
  readonly b?: any;

  /**
   * @schema DynamoDbAttributeValue#SS
   */
  readonly ss?: string[];

  /**
   * @schema DynamoDbAttributeValue#NS
   */
  readonly ns?: string[];

  /**
   * @schema DynamoDbAttributeValue#BS
   */
  readonly bs?: any[];

  /**
   * @schema DynamoDbAttributeValue#M
   */
  readonly m?: { [key: string]: DynamoDbAttributeValue };

  /**
   * @schema DynamoDbAttributeValue#L
   */
  readonly l?: DynamoDbAttributeValue[];

  /**
   * @schema DynamoDbAttributeValue#NULL
   */
  readonly null?: boolean;

  /**
   * @schema DynamoDbAttributeValue#BOOL
   */
  readonly bool?: boolean;

}

/**
 * Converts an object of type 'DynamoDbAttributeValue' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbAttributeValue(obj: DynamoDbAttributeValue | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S': obj.s,
    'N': obj.n,
    'B': obj.b,
    'SS': obj.ss?.map(y => y),
    'NS': obj.ns?.map(y => y),
    'BS': obj.bs?.map(y => y),
    'M': ((obj.m) === undefined) ? undefined : (Object.entries(obj.m).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_DynamoDbAttributeValue(i[1]) }), {})),
    'L': obj.l?.map(y => toJson_DynamoDbAttributeValue(y)),
    'NULL': obj.null,
    'BOOL': obj.bool,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbConsumedCapacity
 */
export interface DynamoDbConsumedCapacity {
  /**
   * @schema DynamoDbConsumedCapacity#TableName
   */
  readonly tableName?: string;

  /**
   * @schema DynamoDbConsumedCapacity#CapacityUnits
   */
  readonly capacityUnits?: number;

  /**
   * @schema DynamoDbConsumedCapacity#ReadCapacityUnits
   */
  readonly readCapacityUnits?: number;

  /**
   * @schema DynamoDbConsumedCapacity#WriteCapacityUnits
   */
  readonly writeCapacityUnits?: number;

  /**
   * @schema DynamoDbConsumedCapacity#Table
   */
  readonly table?: DynamoDbCapacity;

  /**
   * @schema DynamoDbConsumedCapacity#LocalSecondaryIndexes
   */
  readonly localSecondaryIndexes?: { [key: string]: DynamoDbCapacity };

  /**
   * @schema DynamoDbConsumedCapacity#GlobalSecondaryIndexes
   */
  readonly globalSecondaryIndexes?: { [key: string]: DynamoDbCapacity };

}

/**
 * Converts an object of type 'DynamoDbConsumedCapacity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbConsumedCapacity(obj: DynamoDbConsumedCapacity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TableName': obj.tableName,
    'CapacityUnits': obj.capacityUnits,
    'ReadCapacityUnits': obj.readCapacityUnits,
    'WriteCapacityUnits': obj.writeCapacityUnits,
    'Table': toJson_DynamoDbCapacity(obj.table),
    'LocalSecondaryIndexes': ((obj.localSecondaryIndexes) === undefined) ? undefined : (Object.entries(obj.localSecondaryIndexes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_DynamoDbCapacity(i[1]) }), {})),
    'GlobalSecondaryIndexes': ((obj.globalSecondaryIndexes) === undefined) ? undefined : (Object.entries(obj.globalSecondaryIndexes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_DynamoDbCapacity(i[1]) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbWriteRequest
 */
export interface DynamoDbWriteRequest {
  /**
   * @schema DynamoDbWriteRequest#PutRequest
   */
  readonly putRequest?: DynamoDbPutRequest;

  /**
   * @schema DynamoDbWriteRequest#DeleteRequest
   */
  readonly deleteRequest?: DynamoDbDeleteRequest;

}

/**
 * Converts an object of type 'DynamoDbWriteRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbWriteRequest(obj: DynamoDbWriteRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PutRequest': toJson_DynamoDbPutRequest(obj.putRequest),
    'DeleteRequest': toJson_DynamoDbDeleteRequest(obj.deleteRequest),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbItemCollectionMetrics
 */
export interface DynamoDbItemCollectionMetrics {
  /**
   * @schema DynamoDbItemCollectionMetrics#ItemCollectionKey
   */
  readonly itemCollectionKey?: { [key: string]: DynamoDbAttributeValue };

  /**
   * @schema DynamoDbItemCollectionMetrics#SizeEstimateRangeGB
   */
  readonly sizeEstimateRangeGb?: number[];

}

/**
 * Converts an object of type 'DynamoDbItemCollectionMetrics' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbItemCollectionMetrics(obj: DynamoDbItemCollectionMetrics | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ItemCollectionKey': ((obj.itemCollectionKey) === undefined) ? undefined : (Object.entries(obj.itemCollectionKey).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_DynamoDbAttributeValue(i[1]) }), {})),
    'SizeEstimateRangeGB': obj.sizeEstimateRangeGb?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbBackupDetails
 */
export interface DynamoDbBackupDetails {
  /**
   * @schema DynamoDbBackupDetails#BackupArn
   */
  readonly backupArn?: string;

  /**
   * @schema DynamoDbBackupDetails#BackupName
   */
  readonly backupName?: string;

  /**
   * @schema DynamoDbBackupDetails#BackupSizeBytes
   */
  readonly backupSizeBytes?: number;

  /**
   * @schema DynamoDbBackupDetails#BackupStatus
   */
  readonly backupStatus?: string;

  /**
   * @schema DynamoDbBackupDetails#BackupType
   */
  readonly backupType?: string;

  /**
   * @schema DynamoDbBackupDetails#BackupCreationDateTime
   */
  readonly backupCreationDateTime?: string;

  /**
   * @schema DynamoDbBackupDetails#BackupExpiryDateTime
   */
  readonly backupExpiryDateTime?: string;

}

/**
 * Converts an object of type 'DynamoDbBackupDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbBackupDetails(obj: DynamoDbBackupDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupArn': obj.backupArn,
    'BackupName': obj.backupName,
    'BackupSizeBytes': obj.backupSizeBytes,
    'BackupStatus': obj.backupStatus,
    'BackupType': obj.backupType,
    'BackupCreationDateTime': obj.backupCreationDateTime,
    'BackupExpiryDateTime': obj.backupExpiryDateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbReplica
 */
export interface DynamoDbReplica {
  /**
   * @schema DynamoDbReplica#RegionName
   */
  readonly regionName?: string;

}

/**
 * Converts an object of type 'DynamoDbReplica' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbReplica(obj: DynamoDbReplica | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegionName': obj.regionName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbGlobalTableDescription
 */
export interface DynamoDbGlobalTableDescription {
  /**
   * @schema DynamoDbGlobalTableDescription#ReplicationGroup
   */
  readonly replicationGroup?: DynamoDbReplicaDescription[];

  /**
   * @schema DynamoDbGlobalTableDescription#GlobalTableArn
   */
  readonly globalTableArn?: string;

  /**
   * @schema DynamoDbGlobalTableDescription#CreationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema DynamoDbGlobalTableDescription#GlobalTableStatus
   */
  readonly globalTableStatus?: string;

  /**
   * @schema DynamoDbGlobalTableDescription#GlobalTableName
   */
  readonly globalTableName?: string;

}

/**
 * Converts an object of type 'DynamoDbGlobalTableDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbGlobalTableDescription(obj: DynamoDbGlobalTableDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationGroup': obj.replicationGroup?.map(y => toJson_DynamoDbReplicaDescription(y)),
    'GlobalTableArn': obj.globalTableArn,
    'CreationDateTime': obj.creationDateTime,
    'GlobalTableStatus': obj.globalTableStatus,
    'GlobalTableName': obj.globalTableName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbAttributeDefinition
 */
export interface DynamoDbAttributeDefinition {
  /**
   * @schema DynamoDbAttributeDefinition#AttributeName
   */
  readonly attributeName?: string;

  /**
   * @schema DynamoDbAttributeDefinition#AttributeType
   */
  readonly attributeType?: string;

}

/**
 * Converts an object of type 'DynamoDbAttributeDefinition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbAttributeDefinition(obj: DynamoDbAttributeDefinition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AttributeName': obj.attributeName,
    'AttributeType': obj.attributeType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbKeySchemaElement
 */
export interface DynamoDbKeySchemaElement {
  /**
   * @schema DynamoDbKeySchemaElement#AttributeName
   */
  readonly attributeName?: string;

  /**
   * @schema DynamoDbKeySchemaElement#KeyType
   */
  readonly keyType?: string;

}

/**
 * Converts an object of type 'DynamoDbKeySchemaElement' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbKeySchemaElement(obj: DynamoDbKeySchemaElement | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AttributeName': obj.attributeName,
    'KeyType': obj.keyType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbLocalSecondaryIndex
 */
export interface DynamoDbLocalSecondaryIndex {
  /**
   * @schema DynamoDbLocalSecondaryIndex#IndexName
   */
  readonly indexName?: string;

  /**
   * @schema DynamoDbLocalSecondaryIndex#KeySchema
   */
  readonly keySchema?: DynamoDbKeySchemaElement[];

  /**
   * @schema DynamoDbLocalSecondaryIndex#Projection
   */
  readonly projection?: DynamoDbProjection;

}

/**
 * Converts an object of type 'DynamoDbLocalSecondaryIndex' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbLocalSecondaryIndex(obj: DynamoDbLocalSecondaryIndex | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IndexName': obj.indexName,
    'KeySchema': obj.keySchema?.map(y => toJson_DynamoDbKeySchemaElement(y)),
    'Projection': toJson_DynamoDbProjection(obj.projection),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbGlobalSecondaryIndex
 */
export interface DynamoDbGlobalSecondaryIndex {
  /**
   * @schema DynamoDbGlobalSecondaryIndex#IndexName
   */
  readonly indexName?: string;

  /**
   * @schema DynamoDbGlobalSecondaryIndex#KeySchema
   */
  readonly keySchema?: DynamoDbKeySchemaElement[];

  /**
   * @schema DynamoDbGlobalSecondaryIndex#Projection
   */
  readonly projection?: DynamoDbProjection;

  /**
   * @schema DynamoDbGlobalSecondaryIndex#ProvisionedThroughput
   */
  readonly provisionedThroughput?: DynamoDbProvisionedThroughput;

}

/**
 * Converts an object of type 'DynamoDbGlobalSecondaryIndex' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbGlobalSecondaryIndex(obj: DynamoDbGlobalSecondaryIndex | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IndexName': obj.indexName,
    'KeySchema': obj.keySchema?.map(y => toJson_DynamoDbKeySchemaElement(y)),
    'Projection': toJson_DynamoDbProjection(obj.projection),
    'ProvisionedThroughput': toJson_DynamoDbProvisionedThroughput(obj.provisionedThroughput),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbProvisionedThroughput
 */
export interface DynamoDbProvisionedThroughput {
  /**
   * @schema DynamoDbProvisionedThroughput#ReadCapacityUnits
   */
  readonly readCapacityUnits?: number;

  /**
   * @schema DynamoDbProvisionedThroughput#WriteCapacityUnits
   */
  readonly writeCapacityUnits?: number;

}

/**
 * Converts an object of type 'DynamoDbProvisionedThroughput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbProvisionedThroughput(obj: DynamoDbProvisionedThroughput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReadCapacityUnits': obj.readCapacityUnits,
    'WriteCapacityUnits': obj.writeCapacityUnits,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbStreamSpecification
 */
export interface DynamoDbStreamSpecification {
  /**
   * @schema DynamoDbStreamSpecification#StreamEnabled
   */
  readonly streamEnabled?: boolean;

  /**
   * @schema DynamoDbStreamSpecification#StreamViewType
   */
  readonly streamViewType?: string;

}

/**
 * Converts an object of type 'DynamoDbStreamSpecification' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbStreamSpecification(obj: DynamoDbStreamSpecification | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamEnabled': obj.streamEnabled,
    'StreamViewType': obj.streamViewType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbsseSpecification
 */
export interface DynamoDbsseSpecification {
  /**
   * @schema DynamoDbsseSpecification#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema DynamoDbsseSpecification#SSEType
   */
  readonly sseType?: string;

  /**
   * @schema DynamoDbsseSpecification#KMSMasterKeyId
   */
  readonly kmsMasterKeyId?: string;

}

/**
 * Converts an object of type 'DynamoDbsseSpecification' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbsseSpecification(obj: DynamoDbsseSpecification | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Enabled': obj.enabled,
    'SSEType': obj.sseType,
    'KMSMasterKeyId': obj.kmsMasterKeyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbTag
 */
export interface DynamoDbTag {
  /**
   * @schema DynamoDbTag#Key
   */
  readonly key?: string;

  /**
   * @schema DynamoDbTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'DynamoDbTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbTag(obj: DynamoDbTag | undefined): Record<string, any> | undefined {
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
 * @schema DynamoDbTableDescription
 */
export interface DynamoDbTableDescription {
  /**
   * @schema DynamoDbTableDescription#AttributeDefinitions
   */
  readonly attributeDefinitions?: DynamoDbAttributeDefinition[];

  /**
   * @schema DynamoDbTableDescription#TableName
   */
  readonly tableName?: string;

  /**
   * @schema DynamoDbTableDescription#KeySchema
   */
  readonly keySchema?: DynamoDbKeySchemaElement[];

  /**
   * @schema DynamoDbTableDescription#TableStatus
   */
  readonly tableStatus?: string;

  /**
   * @schema DynamoDbTableDescription#CreationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema DynamoDbTableDescription#ProvisionedThroughput
   */
  readonly provisionedThroughput?: DynamoDbProvisionedThroughputDescription;

  /**
   * @schema DynamoDbTableDescription#TableSizeBytes
   */
  readonly tableSizeBytes?: number;

  /**
   * @schema DynamoDbTableDescription#ItemCount
   */
  readonly itemCount?: number;

  /**
   * @schema DynamoDbTableDescription#TableArn
   */
  readonly tableArn?: string;

  /**
   * @schema DynamoDbTableDescription#TableId
   */
  readonly tableId?: string;

  /**
   * @schema DynamoDbTableDescription#BillingModeSummary
   */
  readonly billingModeSummary?: DynamoDbBillingModeSummary;

  /**
   * @schema DynamoDbTableDescription#LocalSecondaryIndexes
   */
  readonly localSecondaryIndexes?: DynamoDbLocalSecondaryIndexDescription[];

  /**
   * @schema DynamoDbTableDescription#GlobalSecondaryIndexes
   */
  readonly globalSecondaryIndexes?: DynamoDbGlobalSecondaryIndexDescription[];

  /**
   * @schema DynamoDbTableDescription#StreamSpecification
   */
  readonly streamSpecification?: DynamoDbStreamSpecification;

  /**
   * @schema DynamoDbTableDescription#LatestStreamLabel
   */
  readonly latestStreamLabel?: string;

  /**
   * @schema DynamoDbTableDescription#LatestStreamArn
   */
  readonly latestStreamArn?: string;

  /**
   * @schema DynamoDbTableDescription#GlobalTableVersion
   */
  readonly globalTableVersion?: string;

  /**
   * @schema DynamoDbTableDescription#Replicas
   */
  readonly replicas?: DynamoDbReplicaDescription[];

  /**
   * @schema DynamoDbTableDescription#RestoreSummary
   */
  readonly restoreSummary?: DynamoDbRestoreSummary;

  /**
   * @schema DynamoDbTableDescription#SSEDescription
   */
  readonly sseDescription?: DynamoDbsseDescription;

  /**
   * @schema DynamoDbTableDescription#ArchivalSummary
   */
  readonly archivalSummary?: DynamoDbArchivalSummary;

}

/**
 * Converts an object of type 'DynamoDbTableDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbTableDescription(obj: DynamoDbTableDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AttributeDefinitions': obj.attributeDefinitions?.map(y => toJson_DynamoDbAttributeDefinition(y)),
    'TableName': obj.tableName,
    'KeySchema': obj.keySchema?.map(y => toJson_DynamoDbKeySchemaElement(y)),
    'TableStatus': obj.tableStatus,
    'CreationDateTime': obj.creationDateTime,
    'ProvisionedThroughput': toJson_DynamoDbProvisionedThroughputDescription(obj.provisionedThroughput),
    'TableSizeBytes': obj.tableSizeBytes,
    'ItemCount': obj.itemCount,
    'TableArn': obj.tableArn,
    'TableId': obj.tableId,
    'BillingModeSummary': toJson_DynamoDbBillingModeSummary(obj.billingModeSummary),
    'LocalSecondaryIndexes': obj.localSecondaryIndexes?.map(y => toJson_DynamoDbLocalSecondaryIndexDescription(y)),
    'GlobalSecondaryIndexes': obj.globalSecondaryIndexes?.map(y => toJson_DynamoDbGlobalSecondaryIndexDescription(y)),
    'StreamSpecification': toJson_DynamoDbStreamSpecification(obj.streamSpecification),
    'LatestStreamLabel': obj.latestStreamLabel,
    'LatestStreamArn': obj.latestStreamArn,
    'GlobalTableVersion': obj.globalTableVersion,
    'Replicas': obj.replicas?.map(y => toJson_DynamoDbReplicaDescription(y)),
    'RestoreSummary': toJson_DynamoDbRestoreSummary(obj.restoreSummary),
    'SSEDescription': toJson_DynamoDbsseDescription(obj.sseDescription),
    'ArchivalSummary': toJson_DynamoDbArchivalSummary(obj.archivalSummary),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbBackupDescription
 */
export interface DynamoDbBackupDescription {
  /**
   * @schema DynamoDbBackupDescription#BackupDetails
   */
  readonly backupDetails?: DynamoDbBackupDetails;

  /**
   * @schema DynamoDbBackupDescription#SourceTableDetails
   */
  readonly sourceTableDetails?: DynamoDbSourceTableDetails;

  /**
   * @schema DynamoDbBackupDescription#SourceTableFeatureDetails
   */
  readonly sourceTableFeatureDetails?: DynamoDbSourceTableFeatureDetails;

}

/**
 * Converts an object of type 'DynamoDbBackupDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbBackupDescription(obj: DynamoDbBackupDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupDetails': toJson_DynamoDbBackupDetails(obj.backupDetails),
    'SourceTableDetails': toJson_DynamoDbSourceTableDetails(obj.sourceTableDetails),
    'SourceTableFeatureDetails': toJson_DynamoDbSourceTableFeatureDetails(obj.sourceTableFeatureDetails),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbExpectedAttributeValue
 */
export interface DynamoDbExpectedAttributeValue {
  /**
   * @schema DynamoDbExpectedAttributeValue#Value
   */
  readonly value?: DynamoDbAttributeValue;

  /**
   * @schema DynamoDbExpectedAttributeValue#Exists
   */
  readonly exists?: boolean;

  /**
   * @schema DynamoDbExpectedAttributeValue#ComparisonOperator
   */
  readonly comparisonOperator?: string;

  /**
   * @schema DynamoDbExpectedAttributeValue#AttributeValueList
   */
  readonly attributeValueList?: DynamoDbAttributeValue[];

}

/**
 * Converts an object of type 'DynamoDbExpectedAttributeValue' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbExpectedAttributeValue(obj: DynamoDbExpectedAttributeValue | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Value': toJson_DynamoDbAttributeValue(obj.value),
    'Exists': obj.exists,
    'ComparisonOperator': obj.comparisonOperator,
    'AttributeValueList': obj.attributeValueList?.map(y => toJson_DynamoDbAttributeValue(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbContinuousBackupsDescription
 */
export interface DynamoDbContinuousBackupsDescription {
  /**
   * @schema DynamoDbContinuousBackupsDescription#ContinuousBackupsStatus
   */
  readonly continuousBackupsStatus?: string;

  /**
   * @schema DynamoDbContinuousBackupsDescription#PointInTimeRecoveryDescription
   */
  readonly pointInTimeRecoveryDescription?: DynamoDbPointInTimeRecoveryDescription;

}

/**
 * Converts an object of type 'DynamoDbContinuousBackupsDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbContinuousBackupsDescription(obj: DynamoDbContinuousBackupsDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContinuousBackupsStatus': obj.continuousBackupsStatus,
    'PointInTimeRecoveryDescription': toJson_DynamoDbPointInTimeRecoveryDescription(obj.pointInTimeRecoveryDescription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbFailureException
 */
export interface DynamoDbFailureException {
  /**
   * @schema DynamoDbFailureException#ExceptionName
   */
  readonly exceptionName?: string;

  /**
   * @schema DynamoDbFailureException#ExceptionDescription
   */
  readonly exceptionDescription?: string;

}

/**
 * Converts an object of type 'DynamoDbFailureException' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbFailureException(obj: DynamoDbFailureException | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ExceptionName': obj.exceptionName,
    'ExceptionDescription': obj.exceptionDescription,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbEndpoint
 */
export interface DynamoDbEndpoint {
  /**
   * @schema DynamoDbEndpoint#Address
   */
  readonly address?: string;

  /**
   * @schema DynamoDbEndpoint#CachePeriodInMinutes
   */
  readonly cachePeriodInMinutes?: number;

}

/**
 * Converts an object of type 'DynamoDbEndpoint' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbEndpoint(obj: DynamoDbEndpoint | undefined): Record<string, any> | undefined {
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
 * @schema DynamoDbExportDescription
 */
export interface DynamoDbExportDescription {
  /**
   * @schema DynamoDbExportDescription#ExportArn
   */
  readonly exportArn?: string;

  /**
   * @schema DynamoDbExportDescription#ExportStatus
   */
  readonly exportStatus?: string;

  /**
   * @schema DynamoDbExportDescription#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema DynamoDbExportDescription#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema DynamoDbExportDescription#ExportManifest
   */
  readonly exportManifest?: string;

  /**
   * @schema DynamoDbExportDescription#TableArn
   */
  readonly tableArn?: string;

  /**
   * @schema DynamoDbExportDescription#TableId
   */
  readonly tableId?: string;

  /**
   * @schema DynamoDbExportDescription#ExportTime
   */
  readonly exportTime?: string;

  /**
   * @schema DynamoDbExportDescription#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema DynamoDbExportDescription#S3Bucket
   */
  readonly s3Bucket?: string;

  /**
   * @schema DynamoDbExportDescription#S3BucketOwner
   */
  readonly s3BucketOwner?: string;

  /**
   * @schema DynamoDbExportDescription#S3Prefix
   */
  readonly s3Prefix?: string;

  /**
   * @schema DynamoDbExportDescription#S3SseAlgorithm
   */
  readonly s3SseAlgorithm?: string;

  /**
   * @schema DynamoDbExportDescription#S3SseKmsKeyId
   */
  readonly s3SseKmsKeyId?: string;

  /**
   * @schema DynamoDbExportDescription#FailureCode
   */
  readonly failureCode?: string;

  /**
   * @schema DynamoDbExportDescription#FailureMessage
   */
  readonly failureMessage?: string;

  /**
   * @schema DynamoDbExportDescription#ExportFormat
   */
  readonly exportFormat?: string;

  /**
   * @schema DynamoDbExportDescription#BilledSizeBytes
   */
  readonly billedSizeBytes?: number;

  /**
   * @schema DynamoDbExportDescription#ItemCount
   */
  readonly itemCount?: number;

}

/**
 * Converts an object of type 'DynamoDbExportDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbExportDescription(obj: DynamoDbExportDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ExportArn': obj.exportArn,
    'ExportStatus': obj.exportStatus,
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
    'ExportManifest': obj.exportManifest,
    'TableArn': obj.tableArn,
    'TableId': obj.tableId,
    'ExportTime': obj.exportTime,
    'ClientToken': obj.clientToken,
    'S3Bucket': obj.s3Bucket,
    'S3BucketOwner': obj.s3BucketOwner,
    'S3Prefix': obj.s3Prefix,
    'S3SseAlgorithm': obj.s3SseAlgorithm,
    'S3SseKmsKeyId': obj.s3SseKmsKeyId,
    'FailureCode': obj.failureCode,
    'FailureMessage': obj.failureMessage,
    'ExportFormat': obj.exportFormat,
    'BilledSizeBytes': obj.billedSizeBytes,
    'ItemCount': obj.itemCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbReplicaSettingsDescription
 */
export interface DynamoDbReplicaSettingsDescription {
  /**
   * @schema DynamoDbReplicaSettingsDescription#RegionName
   */
  readonly regionName?: string;

  /**
   * @schema DynamoDbReplicaSettingsDescription#ReplicaStatus
   */
  readonly replicaStatus?: string;

  /**
   * @schema DynamoDbReplicaSettingsDescription#ReplicaBillingModeSummary
   */
  readonly replicaBillingModeSummary?: DynamoDbBillingModeSummary;

  /**
   * @schema DynamoDbReplicaSettingsDescription#ReplicaProvisionedReadCapacityUnits
   */
  readonly replicaProvisionedReadCapacityUnits?: number;

  /**
   * @schema DynamoDbReplicaSettingsDescription#ReplicaProvisionedReadCapacityAutoScalingSettings
   */
  readonly replicaProvisionedReadCapacityAutoScalingSettings?: DynamoDbAutoScalingSettingsDescription;

  /**
   * @schema DynamoDbReplicaSettingsDescription#ReplicaProvisionedWriteCapacityUnits
   */
  readonly replicaProvisionedWriteCapacityUnits?: number;

  /**
   * @schema DynamoDbReplicaSettingsDescription#ReplicaProvisionedWriteCapacityAutoScalingSettings
   */
  readonly replicaProvisionedWriteCapacityAutoScalingSettings?: DynamoDbAutoScalingSettingsDescription;

  /**
   * @schema DynamoDbReplicaSettingsDescription#ReplicaGlobalSecondaryIndexSettings
   */
  readonly replicaGlobalSecondaryIndexSettings?: DynamoDbReplicaGlobalSecondaryIndexSettingsDescription[];

}

/**
 * Converts an object of type 'DynamoDbReplicaSettingsDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbReplicaSettingsDescription(obj: DynamoDbReplicaSettingsDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegionName': obj.regionName,
    'ReplicaStatus': obj.replicaStatus,
    'ReplicaBillingModeSummary': toJson_DynamoDbBillingModeSummary(obj.replicaBillingModeSummary),
    'ReplicaProvisionedReadCapacityUnits': obj.replicaProvisionedReadCapacityUnits,
    'ReplicaProvisionedReadCapacityAutoScalingSettings': toJson_DynamoDbAutoScalingSettingsDescription(obj.replicaProvisionedReadCapacityAutoScalingSettings),
    'ReplicaProvisionedWriteCapacityUnits': obj.replicaProvisionedWriteCapacityUnits,
    'ReplicaProvisionedWriteCapacityAutoScalingSettings': toJson_DynamoDbAutoScalingSettingsDescription(obj.replicaProvisionedWriteCapacityAutoScalingSettings),
    'ReplicaGlobalSecondaryIndexSettings': obj.replicaGlobalSecondaryIndexSettings?.map(y => toJson_DynamoDbReplicaGlobalSecondaryIndexSettingsDescription(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbKinesisDataStreamDestination
 */
export interface DynamoDbKinesisDataStreamDestination {
  /**
   * @schema DynamoDbKinesisDataStreamDestination#StreamArn
   */
  readonly streamArn?: string;

  /**
   * @schema DynamoDbKinesisDataStreamDestination#DestinationStatus
   */
  readonly destinationStatus?: string;

  /**
   * @schema DynamoDbKinesisDataStreamDestination#DestinationStatusDescription
   */
  readonly destinationStatusDescription?: string;

}

/**
 * Converts an object of type 'DynamoDbKinesisDataStreamDestination' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbKinesisDataStreamDestination(obj: DynamoDbKinesisDataStreamDestination | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamArn': obj.streamArn,
    'DestinationStatus': obj.destinationStatus,
    'DestinationStatusDescription': obj.destinationStatusDescription,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbTableAutoScalingDescription
 */
export interface DynamoDbTableAutoScalingDescription {
  /**
   * @schema DynamoDbTableAutoScalingDescription#TableName
   */
  readonly tableName?: string;

  /**
   * @schema DynamoDbTableAutoScalingDescription#TableStatus
   */
  readonly tableStatus?: string;

  /**
   * @schema DynamoDbTableAutoScalingDescription#Replicas
   */
  readonly replicas?: DynamoDbReplicaAutoScalingDescription[];

}

/**
 * Converts an object of type 'DynamoDbTableAutoScalingDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbTableAutoScalingDescription(obj: DynamoDbTableAutoScalingDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TableName': obj.tableName,
    'TableStatus': obj.tableStatus,
    'Replicas': obj.replicas?.map(y => toJson_DynamoDbReplicaAutoScalingDescription(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbTimeToLiveDescription
 */
export interface DynamoDbTimeToLiveDescription {
  /**
   * @schema DynamoDbTimeToLiveDescription#TimeToLiveStatus
   */
  readonly timeToLiveStatus?: string;

  /**
   * @schema DynamoDbTimeToLiveDescription#AttributeName
   */
  readonly attributeName?: string;

}

/**
 * Converts an object of type 'DynamoDbTimeToLiveDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbTimeToLiveDescription(obj: DynamoDbTimeToLiveDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TimeToLiveStatus': obj.timeToLiveStatus,
    'AttributeName': obj.attributeName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbParameterizedStatement
 */
export interface DynamoDbParameterizedStatement {
  /**
   * @schema DynamoDbParameterizedStatement#Statement
   */
  readonly statement?: string;

  /**
   * @schema DynamoDbParameterizedStatement#Parameters
   */
  readonly parameters?: DynamoDbAttributeValue[];

}

/**
 * Converts an object of type 'DynamoDbParameterizedStatement' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbParameterizedStatement(obj: DynamoDbParameterizedStatement | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Statement': obj.statement,
    'Parameters': obj.parameters?.map(y => toJson_DynamoDbAttributeValue(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbItemResponse
 */
export interface DynamoDbItemResponse {
  /**
   * @schema DynamoDbItemResponse#Item
   */
  readonly item?: { [key: string]: DynamoDbAttributeValue };

}

/**
 * Converts an object of type 'DynamoDbItemResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbItemResponse(obj: DynamoDbItemResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Item': ((obj.item) === undefined) ? undefined : (Object.entries(obj.item).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_DynamoDbAttributeValue(i[1]) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbBackupSummary
 */
export interface DynamoDbBackupSummary {
  /**
   * @schema DynamoDbBackupSummary#TableName
   */
  readonly tableName?: string;

  /**
   * @schema DynamoDbBackupSummary#TableId
   */
  readonly tableId?: string;

  /**
   * @schema DynamoDbBackupSummary#TableArn
   */
  readonly tableArn?: string;

  /**
   * @schema DynamoDbBackupSummary#BackupArn
   */
  readonly backupArn?: string;

  /**
   * @schema DynamoDbBackupSummary#BackupName
   */
  readonly backupName?: string;

  /**
   * @schema DynamoDbBackupSummary#BackupCreationDateTime
   */
  readonly backupCreationDateTime?: string;

  /**
   * @schema DynamoDbBackupSummary#BackupExpiryDateTime
   */
  readonly backupExpiryDateTime?: string;

  /**
   * @schema DynamoDbBackupSummary#BackupStatus
   */
  readonly backupStatus?: string;

  /**
   * @schema DynamoDbBackupSummary#BackupType
   */
  readonly backupType?: string;

  /**
   * @schema DynamoDbBackupSummary#BackupSizeBytes
   */
  readonly backupSizeBytes?: number;

}

/**
 * Converts an object of type 'DynamoDbBackupSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbBackupSummary(obj: DynamoDbBackupSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TableName': obj.tableName,
    'TableId': obj.tableId,
    'TableArn': obj.tableArn,
    'BackupArn': obj.backupArn,
    'BackupName': obj.backupName,
    'BackupCreationDateTime': obj.backupCreationDateTime,
    'BackupExpiryDateTime': obj.backupExpiryDateTime,
    'BackupStatus': obj.backupStatus,
    'BackupType': obj.backupType,
    'BackupSizeBytes': obj.backupSizeBytes,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbContributorInsightsSummary
 */
export interface DynamoDbContributorInsightsSummary {
  /**
   * @schema DynamoDbContributorInsightsSummary#TableName
   */
  readonly tableName?: string;

  /**
   * @schema DynamoDbContributorInsightsSummary#IndexName
   */
  readonly indexName?: string;

  /**
   * @schema DynamoDbContributorInsightsSummary#ContributorInsightsStatus
   */
  readonly contributorInsightsStatus?: string;

}

/**
 * Converts an object of type 'DynamoDbContributorInsightsSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbContributorInsightsSummary(obj: DynamoDbContributorInsightsSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TableName': obj.tableName,
    'IndexName': obj.indexName,
    'ContributorInsightsStatus': obj.contributorInsightsStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbExportSummary
 */
export interface DynamoDbExportSummary {
  /**
   * @schema DynamoDbExportSummary#ExportArn
   */
  readonly exportArn?: string;

  /**
   * @schema DynamoDbExportSummary#ExportStatus
   */
  readonly exportStatus?: string;

}

/**
 * Converts an object of type 'DynamoDbExportSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbExportSummary(obj: DynamoDbExportSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ExportArn': obj.exportArn,
    'ExportStatus': obj.exportStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbGlobalTable
 */
export interface DynamoDbGlobalTable {
  /**
   * @schema DynamoDbGlobalTable#GlobalTableName
   */
  readonly globalTableName?: string;

  /**
   * @schema DynamoDbGlobalTable#ReplicationGroup
   */
  readonly replicationGroup?: DynamoDbReplica[];

}

/**
 * Converts an object of type 'DynamoDbGlobalTable' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbGlobalTable(obj: DynamoDbGlobalTable | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalTableName': obj.globalTableName,
    'ReplicationGroup': obj.replicationGroup?.map(y => toJson_DynamoDbReplica(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbCondition
 */
export interface DynamoDbCondition {
  /**
   * @schema DynamoDbCondition#AttributeValueList
   */
  readonly attributeValueList?: DynamoDbAttributeValue[];

  /**
   * @schema DynamoDbCondition#ComparisonOperator
   */
  readonly comparisonOperator?: string;

}

/**
 * Converts an object of type 'DynamoDbCondition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbCondition(obj: DynamoDbCondition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AttributeValueList': obj.attributeValueList?.map(y => toJson_DynamoDbAttributeValue(y)),
    'ComparisonOperator': obj.comparisonOperator,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbTransactGetItem
 */
export interface DynamoDbTransactGetItem {
  /**
   * @schema DynamoDbTransactGetItem#Fetch
   */
  readonly fetch?: DynamoDbGet;

}

/**
 * Converts an object of type 'DynamoDbTransactGetItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbTransactGetItem(obj: DynamoDbTransactGetItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Fetch': toJson_DynamoDbGet(obj.fetch),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbTransactWriteItem
 */
export interface DynamoDbTransactWriteItem {
  /**
   * @schema DynamoDbTransactWriteItem#ConditionCheck
   */
  readonly conditionCheck?: DynamoDbConditionCheck;

  /**
   * @schema DynamoDbTransactWriteItem#Put
   */
  readonly put?: DynamoDbPut;

  /**
   * @schema DynamoDbTransactWriteItem#Delete
   */
  readonly delete?: DynamoDbDelete;

  /**
   * @schema DynamoDbTransactWriteItem#Update
   */
  readonly update?: DynamoDbUpdate;

}

/**
 * Converts an object of type 'DynamoDbTransactWriteItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbTransactWriteItem(obj: DynamoDbTransactWriteItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConditionCheck': toJson_DynamoDbConditionCheck(obj.conditionCheck),
    'Put': toJson_DynamoDbPut(obj.put),
    'Delete': toJson_DynamoDbDelete(obj.delete),
    'Update': toJson_DynamoDbUpdate(obj.update),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbPointInTimeRecoverySpecification
 */
export interface DynamoDbPointInTimeRecoverySpecification {
  /**
   * @schema DynamoDbPointInTimeRecoverySpecification#PointInTimeRecoveryEnabled
   */
  readonly pointInTimeRecoveryEnabled?: boolean;

}

/**
 * Converts an object of type 'DynamoDbPointInTimeRecoverySpecification' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbPointInTimeRecoverySpecification(obj: DynamoDbPointInTimeRecoverySpecification | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PointInTimeRecoveryEnabled': obj.pointInTimeRecoveryEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbReplicaUpdate
 */
export interface DynamoDbReplicaUpdate {
  /**
   * @schema DynamoDbReplicaUpdate#Create
   */
  readonly create?: DynamoDbCreateReplicaAction;

  /**
   * @schema DynamoDbReplicaUpdate#Delete
   */
  readonly delete?: DynamoDbDeleteReplicaAction;

}

/**
 * Converts an object of type 'DynamoDbReplicaUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbReplicaUpdate(obj: DynamoDbReplicaUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Create': toJson_DynamoDbCreateReplicaAction(obj.create),
    'Delete': toJson_DynamoDbDeleteReplicaAction(obj.delete),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbAutoScalingSettingsUpdate
 */
export interface DynamoDbAutoScalingSettingsUpdate {
  /**
   * @schema DynamoDbAutoScalingSettingsUpdate#MinimumUnits
   */
  readonly minimumUnits?: number;

  /**
   * @schema DynamoDbAutoScalingSettingsUpdate#MaximumUnits
   */
  readonly maximumUnits?: number;

  /**
   * @schema DynamoDbAutoScalingSettingsUpdate#AutoScalingDisabled
   */
  readonly autoScalingDisabled?: boolean;

  /**
   * @schema DynamoDbAutoScalingSettingsUpdate#AutoScalingRoleArn
   */
  readonly autoScalingRoleArn?: string;

  /**
   * @schema DynamoDbAutoScalingSettingsUpdate#ScalingPolicyUpdate
   */
  readonly scalingPolicyUpdate?: DynamoDbAutoScalingPolicyUpdate;

}

/**
 * Converts an object of type 'DynamoDbAutoScalingSettingsUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbAutoScalingSettingsUpdate(obj: DynamoDbAutoScalingSettingsUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MinimumUnits': obj.minimumUnits,
    'MaximumUnits': obj.maximumUnits,
    'AutoScalingDisabled': obj.autoScalingDisabled,
    'AutoScalingRoleArn': obj.autoScalingRoleArn,
    'ScalingPolicyUpdate': toJson_DynamoDbAutoScalingPolicyUpdate(obj.scalingPolicyUpdate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbGlobalTableGlobalSecondaryIndexSettingsUpdate
 */
export interface DynamoDbGlobalTableGlobalSecondaryIndexSettingsUpdate {
  /**
   * @schema DynamoDbGlobalTableGlobalSecondaryIndexSettingsUpdate#IndexName
   */
  readonly indexName?: string;

  /**
   * @schema DynamoDbGlobalTableGlobalSecondaryIndexSettingsUpdate#ProvisionedWriteCapacityUnits
   */
  readonly provisionedWriteCapacityUnits?: number;

  /**
   * @schema DynamoDbGlobalTableGlobalSecondaryIndexSettingsUpdate#ProvisionedWriteCapacityAutoScalingSettingsUpdate
   */
  readonly provisionedWriteCapacityAutoScalingSettingsUpdate?: DynamoDbAutoScalingSettingsUpdate;

}

/**
 * Converts an object of type 'DynamoDbGlobalTableGlobalSecondaryIndexSettingsUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbGlobalTableGlobalSecondaryIndexSettingsUpdate(obj: DynamoDbGlobalTableGlobalSecondaryIndexSettingsUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IndexName': obj.indexName,
    'ProvisionedWriteCapacityUnits': obj.provisionedWriteCapacityUnits,
    'ProvisionedWriteCapacityAutoScalingSettingsUpdate': toJson_DynamoDbAutoScalingSettingsUpdate(obj.provisionedWriteCapacityAutoScalingSettingsUpdate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbReplicaSettingsUpdate
 */
export interface DynamoDbReplicaSettingsUpdate {
  /**
   * @schema DynamoDbReplicaSettingsUpdate#RegionName
   */
  readonly regionName?: string;

  /**
   * @schema DynamoDbReplicaSettingsUpdate#ReplicaProvisionedReadCapacityUnits
   */
  readonly replicaProvisionedReadCapacityUnits?: number;

  /**
   * @schema DynamoDbReplicaSettingsUpdate#ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate
   */
  readonly replicaProvisionedReadCapacityAutoScalingSettingsUpdate?: DynamoDbAutoScalingSettingsUpdate;

  /**
   * @schema DynamoDbReplicaSettingsUpdate#ReplicaGlobalSecondaryIndexSettingsUpdate
   */
  readonly replicaGlobalSecondaryIndexSettingsUpdate?: DynamoDbReplicaGlobalSecondaryIndexSettingsUpdate[];

}

/**
 * Converts an object of type 'DynamoDbReplicaSettingsUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbReplicaSettingsUpdate(obj: DynamoDbReplicaSettingsUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegionName': obj.regionName,
    'ReplicaProvisionedReadCapacityUnits': obj.replicaProvisionedReadCapacityUnits,
    'ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate': toJson_DynamoDbAutoScalingSettingsUpdate(obj.replicaProvisionedReadCapacityAutoScalingSettingsUpdate),
    'ReplicaGlobalSecondaryIndexSettingsUpdate': obj.replicaGlobalSecondaryIndexSettingsUpdate?.map(y => toJson_DynamoDbReplicaGlobalSecondaryIndexSettingsUpdate(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbAttributeValueUpdate
 */
export interface DynamoDbAttributeValueUpdate {
  /**
   * @schema DynamoDbAttributeValueUpdate#Value
   */
  readonly value?: DynamoDbAttributeValue;

  /**
   * @schema DynamoDbAttributeValueUpdate#Action
   */
  readonly action?: string;

}

/**
 * Converts an object of type 'DynamoDbAttributeValueUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbAttributeValueUpdate(obj: DynamoDbAttributeValueUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Value': toJson_DynamoDbAttributeValue(obj.value),
    'Action': obj.action,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbGlobalSecondaryIndexUpdate
 */
export interface DynamoDbGlobalSecondaryIndexUpdate {
  /**
   * @schema DynamoDbGlobalSecondaryIndexUpdate#Update
   */
  readonly update?: DynamoDbUpdateGlobalSecondaryIndexAction;

  /**
   * @schema DynamoDbGlobalSecondaryIndexUpdate#Create
   */
  readonly create?: DynamoDbCreateGlobalSecondaryIndexAction;

  /**
   * @schema DynamoDbGlobalSecondaryIndexUpdate#Delete
   */
  readonly delete?: DynamoDbDeleteGlobalSecondaryIndexAction;

}

/**
 * Converts an object of type 'DynamoDbGlobalSecondaryIndexUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbGlobalSecondaryIndexUpdate(obj: DynamoDbGlobalSecondaryIndexUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Update': toJson_DynamoDbUpdateGlobalSecondaryIndexAction(obj.update),
    'Create': toJson_DynamoDbCreateGlobalSecondaryIndexAction(obj.create),
    'Delete': toJson_DynamoDbDeleteGlobalSecondaryIndexAction(obj.delete),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbReplicationGroupUpdate
 */
export interface DynamoDbReplicationGroupUpdate {
  /**
   * @schema DynamoDbReplicationGroupUpdate#Create
   */
  readonly create?: DynamoDbCreateReplicationGroupMemberAction;

  /**
   * @schema DynamoDbReplicationGroupUpdate#Update
   */
  readonly update?: DynamoDbUpdateReplicationGroupMemberAction;

  /**
   * @schema DynamoDbReplicationGroupUpdate#Delete
   */
  readonly delete?: DynamoDbDeleteReplicationGroupMemberAction;

}

/**
 * Converts an object of type 'DynamoDbReplicationGroupUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbReplicationGroupUpdate(obj: DynamoDbReplicationGroupUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Create': toJson_DynamoDbCreateReplicationGroupMemberAction(obj.create),
    'Update': toJson_DynamoDbUpdateReplicationGroupMemberAction(obj.update),
    'Delete': toJson_DynamoDbDeleteReplicationGroupMemberAction(obj.delete),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbGlobalSecondaryIndexAutoScalingUpdate
 */
export interface DynamoDbGlobalSecondaryIndexAutoScalingUpdate {
  /**
   * @schema DynamoDbGlobalSecondaryIndexAutoScalingUpdate#IndexName
   */
  readonly indexName?: string;

  /**
   * @schema DynamoDbGlobalSecondaryIndexAutoScalingUpdate#ProvisionedWriteCapacityAutoScalingUpdate
   */
  readonly provisionedWriteCapacityAutoScalingUpdate?: DynamoDbAutoScalingSettingsUpdate;

}

/**
 * Converts an object of type 'DynamoDbGlobalSecondaryIndexAutoScalingUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbGlobalSecondaryIndexAutoScalingUpdate(obj: DynamoDbGlobalSecondaryIndexAutoScalingUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IndexName': obj.indexName,
    'ProvisionedWriteCapacityAutoScalingUpdate': toJson_DynamoDbAutoScalingSettingsUpdate(obj.provisionedWriteCapacityAutoScalingUpdate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbReplicaAutoScalingUpdate
 */
export interface DynamoDbReplicaAutoScalingUpdate {
  /**
   * @schema DynamoDbReplicaAutoScalingUpdate#RegionName
   */
  readonly regionName?: string;

  /**
   * @schema DynamoDbReplicaAutoScalingUpdate#ReplicaGlobalSecondaryIndexUpdates
   */
  readonly replicaGlobalSecondaryIndexUpdates?: DynamoDbReplicaGlobalSecondaryIndexAutoScalingUpdate[];

  /**
   * @schema DynamoDbReplicaAutoScalingUpdate#ReplicaProvisionedReadCapacityAutoScalingUpdate
   */
  readonly replicaProvisionedReadCapacityAutoScalingUpdate?: DynamoDbAutoScalingSettingsUpdate;

}

/**
 * Converts an object of type 'DynamoDbReplicaAutoScalingUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbReplicaAutoScalingUpdate(obj: DynamoDbReplicaAutoScalingUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegionName': obj.regionName,
    'ReplicaGlobalSecondaryIndexUpdates': obj.replicaGlobalSecondaryIndexUpdates?.map(y => toJson_DynamoDbReplicaGlobalSecondaryIndexAutoScalingUpdate(y)),
    'ReplicaProvisionedReadCapacityAutoScalingUpdate': toJson_DynamoDbAutoScalingSettingsUpdate(obj.replicaProvisionedReadCapacityAutoScalingUpdate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbTimeToLiveSpecification
 */
export interface DynamoDbTimeToLiveSpecification {
  /**
   * @schema DynamoDbTimeToLiveSpecification#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema DynamoDbTimeToLiveSpecification#AttributeName
   */
  readonly attributeName?: string;

}

/**
 * Converts an object of type 'DynamoDbTimeToLiveSpecification' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbTimeToLiveSpecification(obj: DynamoDbTimeToLiveSpecification | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Enabled': obj.enabled,
    'AttributeName': obj.attributeName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbBatchStatementError
 */
export interface DynamoDbBatchStatementError {
  /**
   * @schema DynamoDbBatchStatementError#Code
   */
  readonly code?: string;

  /**
   * @schema DynamoDbBatchStatementError#Message
   */
  readonly message?: string;

}

/**
 * Converts an object of type 'DynamoDbBatchStatementError' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbBatchStatementError(obj: DynamoDbBatchStatementError | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Code': obj.code,
    'Message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbCapacity
 */
export interface DynamoDbCapacity {
  /**
   * @schema DynamoDbCapacity#ReadCapacityUnits
   */
  readonly readCapacityUnits?: number;

  /**
   * @schema DynamoDbCapacity#WriteCapacityUnits
   */
  readonly writeCapacityUnits?: number;

  /**
   * @schema DynamoDbCapacity#CapacityUnits
   */
  readonly capacityUnits?: number;

}

/**
 * Converts an object of type 'DynamoDbCapacity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbCapacity(obj: DynamoDbCapacity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReadCapacityUnits': obj.readCapacityUnits,
    'WriteCapacityUnits': obj.writeCapacityUnits,
    'CapacityUnits': obj.capacityUnits,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbPutRequest
 */
export interface DynamoDbPutRequest {
  /**
   * @schema DynamoDbPutRequest#Item
   */
  readonly item?: { [key: string]: DynamoDbAttributeValue };

}

/**
 * Converts an object of type 'DynamoDbPutRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbPutRequest(obj: DynamoDbPutRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Item': ((obj.item) === undefined) ? undefined : (Object.entries(obj.item).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_DynamoDbAttributeValue(i[1]) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbDeleteRequest
 */
export interface DynamoDbDeleteRequest {
  /**
   * @schema DynamoDbDeleteRequest#Key
   */
  readonly key?: { [key: string]: DynamoDbAttributeValue };

}

/**
 * Converts an object of type 'DynamoDbDeleteRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbDeleteRequest(obj: DynamoDbDeleteRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': ((obj.key) === undefined) ? undefined : (Object.entries(obj.key).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_DynamoDbAttributeValue(i[1]) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbReplicaDescription
 */
export interface DynamoDbReplicaDescription {
  /**
   * @schema DynamoDbReplicaDescription#RegionName
   */
  readonly regionName?: string;

  /**
   * @schema DynamoDbReplicaDescription#ReplicaStatus
   */
  readonly replicaStatus?: string;

  /**
   * @schema DynamoDbReplicaDescription#ReplicaStatusDescription
   */
  readonly replicaStatusDescription?: string;

  /**
   * @schema DynamoDbReplicaDescription#ReplicaStatusPercentProgress
   */
  readonly replicaStatusPercentProgress?: string;

  /**
   * @schema DynamoDbReplicaDescription#KMSMasterKeyId
   */
  readonly kmsMasterKeyId?: string;

  /**
   * @schema DynamoDbReplicaDescription#ProvisionedThroughputOverride
   */
  readonly provisionedThroughputOverride?: DynamoDbProvisionedThroughputOverride;

  /**
   * @schema DynamoDbReplicaDescription#GlobalSecondaryIndexes
   */
  readonly globalSecondaryIndexes?: DynamoDbReplicaGlobalSecondaryIndexDescription[];

  /**
   * @schema DynamoDbReplicaDescription#ReplicaInaccessibleDateTime
   */
  readonly replicaInaccessibleDateTime?: string;

}

/**
 * Converts an object of type 'DynamoDbReplicaDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbReplicaDescription(obj: DynamoDbReplicaDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegionName': obj.regionName,
    'ReplicaStatus': obj.replicaStatus,
    'ReplicaStatusDescription': obj.replicaStatusDescription,
    'ReplicaStatusPercentProgress': obj.replicaStatusPercentProgress,
    'KMSMasterKeyId': obj.kmsMasterKeyId,
    'ProvisionedThroughputOverride': toJson_DynamoDbProvisionedThroughputOverride(obj.provisionedThroughputOverride),
    'GlobalSecondaryIndexes': obj.globalSecondaryIndexes?.map(y => toJson_DynamoDbReplicaGlobalSecondaryIndexDescription(y)),
    'ReplicaInaccessibleDateTime': obj.replicaInaccessibleDateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbProjection
 */
export interface DynamoDbProjection {
  /**
   * @schema DynamoDbProjection#ProjectionType
   */
  readonly projectionType?: string;

  /**
   * @schema DynamoDbProjection#NonKeyAttributes
   */
  readonly nonKeyAttributes?: string[];

}

/**
 * Converts an object of type 'DynamoDbProjection' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbProjection(obj: DynamoDbProjection | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProjectionType': obj.projectionType,
    'NonKeyAttributes': obj.nonKeyAttributes?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbProvisionedThroughputDescription
 */
export interface DynamoDbProvisionedThroughputDescription {
  /**
   * @schema DynamoDbProvisionedThroughputDescription#LastIncreaseDateTime
   */
  readonly lastIncreaseDateTime?: string;

  /**
   * @schema DynamoDbProvisionedThroughputDescription#LastDecreaseDateTime
   */
  readonly lastDecreaseDateTime?: string;

  /**
   * @schema DynamoDbProvisionedThroughputDescription#NumberOfDecreasesToday
   */
  readonly numberOfDecreasesToday?: number;

  /**
   * @schema DynamoDbProvisionedThroughputDescription#ReadCapacityUnits
   */
  readonly readCapacityUnits?: number;

  /**
   * @schema DynamoDbProvisionedThroughputDescription#WriteCapacityUnits
   */
  readonly writeCapacityUnits?: number;

}

/**
 * Converts an object of type 'DynamoDbProvisionedThroughputDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbProvisionedThroughputDescription(obj: DynamoDbProvisionedThroughputDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LastIncreaseDateTime': obj.lastIncreaseDateTime,
    'LastDecreaseDateTime': obj.lastDecreaseDateTime,
    'NumberOfDecreasesToday': obj.numberOfDecreasesToday,
    'ReadCapacityUnits': obj.readCapacityUnits,
    'WriteCapacityUnits': obj.writeCapacityUnits,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbBillingModeSummary
 */
export interface DynamoDbBillingModeSummary {
  /**
   * @schema DynamoDbBillingModeSummary#BillingMode
   */
  readonly billingMode?: string;

  /**
   * @schema DynamoDbBillingModeSummary#LastUpdateToPayPerRequestDateTime
   */
  readonly lastUpdateToPayPerRequestDateTime?: string;

}

/**
 * Converts an object of type 'DynamoDbBillingModeSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbBillingModeSummary(obj: DynamoDbBillingModeSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BillingMode': obj.billingMode,
    'LastUpdateToPayPerRequestDateTime': obj.lastUpdateToPayPerRequestDateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbLocalSecondaryIndexDescription
 */
export interface DynamoDbLocalSecondaryIndexDescription {
  /**
   * @schema DynamoDbLocalSecondaryIndexDescription#IndexName
   */
  readonly indexName?: string;

  /**
   * @schema DynamoDbLocalSecondaryIndexDescription#KeySchema
   */
  readonly keySchema?: DynamoDbKeySchemaElement[];

  /**
   * @schema DynamoDbLocalSecondaryIndexDescription#Projection
   */
  readonly projection?: DynamoDbProjection;

  /**
   * @schema DynamoDbLocalSecondaryIndexDescription#IndexSizeBytes
   */
  readonly indexSizeBytes?: number;

  /**
   * @schema DynamoDbLocalSecondaryIndexDescription#ItemCount
   */
  readonly itemCount?: number;

  /**
   * @schema DynamoDbLocalSecondaryIndexDescription#IndexArn
   */
  readonly indexArn?: string;

}

/**
 * Converts an object of type 'DynamoDbLocalSecondaryIndexDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbLocalSecondaryIndexDescription(obj: DynamoDbLocalSecondaryIndexDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IndexName': obj.indexName,
    'KeySchema': obj.keySchema?.map(y => toJson_DynamoDbKeySchemaElement(y)),
    'Projection': toJson_DynamoDbProjection(obj.projection),
    'IndexSizeBytes': obj.indexSizeBytes,
    'ItemCount': obj.itemCount,
    'IndexArn': obj.indexArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbGlobalSecondaryIndexDescription
 */
export interface DynamoDbGlobalSecondaryIndexDescription {
  /**
   * @schema DynamoDbGlobalSecondaryIndexDescription#IndexName
   */
  readonly indexName?: string;

  /**
   * @schema DynamoDbGlobalSecondaryIndexDescription#KeySchema
   */
  readonly keySchema?: DynamoDbKeySchemaElement[];

  /**
   * @schema DynamoDbGlobalSecondaryIndexDescription#Projection
   */
  readonly projection?: DynamoDbProjection;

  /**
   * @schema DynamoDbGlobalSecondaryIndexDescription#IndexStatus
   */
  readonly indexStatus?: string;

  /**
   * @schema DynamoDbGlobalSecondaryIndexDescription#Backfilling
   */
  readonly backfilling?: boolean;

  /**
   * @schema DynamoDbGlobalSecondaryIndexDescription#ProvisionedThroughput
   */
  readonly provisionedThroughput?: DynamoDbProvisionedThroughputDescription;

  /**
   * @schema DynamoDbGlobalSecondaryIndexDescription#IndexSizeBytes
   */
  readonly indexSizeBytes?: number;

  /**
   * @schema DynamoDbGlobalSecondaryIndexDescription#ItemCount
   */
  readonly itemCount?: number;

  /**
   * @schema DynamoDbGlobalSecondaryIndexDescription#IndexArn
   */
  readonly indexArn?: string;

}

/**
 * Converts an object of type 'DynamoDbGlobalSecondaryIndexDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbGlobalSecondaryIndexDescription(obj: DynamoDbGlobalSecondaryIndexDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IndexName': obj.indexName,
    'KeySchema': obj.keySchema?.map(y => toJson_DynamoDbKeySchemaElement(y)),
    'Projection': toJson_DynamoDbProjection(obj.projection),
    'IndexStatus': obj.indexStatus,
    'Backfilling': obj.backfilling,
    'ProvisionedThroughput': toJson_DynamoDbProvisionedThroughputDescription(obj.provisionedThroughput),
    'IndexSizeBytes': obj.indexSizeBytes,
    'ItemCount': obj.itemCount,
    'IndexArn': obj.indexArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbRestoreSummary
 */
export interface DynamoDbRestoreSummary {
  /**
   * @schema DynamoDbRestoreSummary#SourceBackupArn
   */
  readonly sourceBackupArn?: string;

  /**
   * @schema DynamoDbRestoreSummary#SourceTableArn
   */
  readonly sourceTableArn?: string;

  /**
   * @schema DynamoDbRestoreSummary#RestoreDateTime
   */
  readonly restoreDateTime?: string;

  /**
   * @schema DynamoDbRestoreSummary#RestoreInProgress
   */
  readonly restoreInProgress?: boolean;

}

/**
 * Converts an object of type 'DynamoDbRestoreSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbRestoreSummary(obj: DynamoDbRestoreSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceBackupArn': obj.sourceBackupArn,
    'SourceTableArn': obj.sourceTableArn,
    'RestoreDateTime': obj.restoreDateTime,
    'RestoreInProgress': obj.restoreInProgress,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbsseDescription
 */
export interface DynamoDbsseDescription {
  /**
   * @schema DynamoDbsseDescription#Status
   */
  readonly status?: string;

  /**
   * @schema DynamoDbsseDescription#SSEType
   */
  readonly sseType?: string;

  /**
   * @schema DynamoDbsseDescription#KMSMasterKeyArn
   */
  readonly kmsMasterKeyArn?: string;

  /**
   * @schema DynamoDbsseDescription#InaccessibleEncryptionDateTime
   */
  readonly inaccessibleEncryptionDateTime?: string;

}

/**
 * Converts an object of type 'DynamoDbsseDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbsseDescription(obj: DynamoDbsseDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
    'SSEType': obj.sseType,
    'KMSMasterKeyArn': obj.kmsMasterKeyArn,
    'InaccessibleEncryptionDateTime': obj.inaccessibleEncryptionDateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbArchivalSummary
 */
export interface DynamoDbArchivalSummary {
  /**
   * @schema DynamoDbArchivalSummary#ArchivalDateTime
   */
  readonly archivalDateTime?: string;

  /**
   * @schema DynamoDbArchivalSummary#ArchivalReason
   */
  readonly archivalReason?: string;

  /**
   * @schema DynamoDbArchivalSummary#ArchivalBackupArn
   */
  readonly archivalBackupArn?: string;

}

/**
 * Converts an object of type 'DynamoDbArchivalSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbArchivalSummary(obj: DynamoDbArchivalSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ArchivalDateTime': obj.archivalDateTime,
    'ArchivalReason': obj.archivalReason,
    'ArchivalBackupArn': obj.archivalBackupArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbSourceTableDetails
 */
export interface DynamoDbSourceTableDetails {
  /**
   * @schema DynamoDbSourceTableDetails#TableName
   */
  readonly tableName?: string;

  /**
   * @schema DynamoDbSourceTableDetails#TableId
   */
  readonly tableId?: string;

  /**
   * @schema DynamoDbSourceTableDetails#TableArn
   */
  readonly tableArn?: string;

  /**
   * @schema DynamoDbSourceTableDetails#TableSizeBytes
   */
  readonly tableSizeBytes?: number;

  /**
   * @schema DynamoDbSourceTableDetails#KeySchema
   */
  readonly keySchema?: DynamoDbKeySchemaElement[];

  /**
   * @schema DynamoDbSourceTableDetails#TableCreationDateTime
   */
  readonly tableCreationDateTime?: string;

  /**
   * @schema DynamoDbSourceTableDetails#ProvisionedThroughput
   */
  readonly provisionedThroughput?: DynamoDbProvisionedThroughput;

  /**
   * @schema DynamoDbSourceTableDetails#ItemCount
   */
  readonly itemCount?: number;

  /**
   * @schema DynamoDbSourceTableDetails#BillingMode
   */
  readonly billingMode?: string;

}

/**
 * Converts an object of type 'DynamoDbSourceTableDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbSourceTableDetails(obj: DynamoDbSourceTableDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TableName': obj.tableName,
    'TableId': obj.tableId,
    'TableArn': obj.tableArn,
    'TableSizeBytes': obj.tableSizeBytes,
    'KeySchema': obj.keySchema?.map(y => toJson_DynamoDbKeySchemaElement(y)),
    'TableCreationDateTime': obj.tableCreationDateTime,
    'ProvisionedThroughput': toJson_DynamoDbProvisionedThroughput(obj.provisionedThroughput),
    'ItemCount': obj.itemCount,
    'BillingMode': obj.billingMode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbSourceTableFeatureDetails
 */
export interface DynamoDbSourceTableFeatureDetails {
  /**
   * @schema DynamoDbSourceTableFeatureDetails#LocalSecondaryIndexes
   */
  readonly localSecondaryIndexes?: DynamoDbLocalSecondaryIndexInfo[];

  /**
   * @schema DynamoDbSourceTableFeatureDetails#GlobalSecondaryIndexes
   */
  readonly globalSecondaryIndexes?: DynamoDbGlobalSecondaryIndexInfo[];

  /**
   * @schema DynamoDbSourceTableFeatureDetails#StreamDescription
   */
  readonly streamDescription?: DynamoDbStreamSpecification;

  /**
   * @schema DynamoDbSourceTableFeatureDetails#TimeToLiveDescription
   */
  readonly timeToLiveDescription?: DynamoDbTimeToLiveDescription;

  /**
   * @schema DynamoDbSourceTableFeatureDetails#SSEDescription
   */
  readonly sseDescription?: DynamoDbsseDescription;

}

/**
 * Converts an object of type 'DynamoDbSourceTableFeatureDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbSourceTableFeatureDetails(obj: DynamoDbSourceTableFeatureDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LocalSecondaryIndexes': obj.localSecondaryIndexes?.map(y => toJson_DynamoDbLocalSecondaryIndexInfo(y)),
    'GlobalSecondaryIndexes': obj.globalSecondaryIndexes?.map(y => toJson_DynamoDbGlobalSecondaryIndexInfo(y)),
    'StreamDescription': toJson_DynamoDbStreamSpecification(obj.streamDescription),
    'TimeToLiveDescription': toJson_DynamoDbTimeToLiveDescription(obj.timeToLiveDescription),
    'SSEDescription': toJson_DynamoDbsseDescription(obj.sseDescription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbPointInTimeRecoveryDescription
 */
export interface DynamoDbPointInTimeRecoveryDescription {
  /**
   * @schema DynamoDbPointInTimeRecoveryDescription#PointInTimeRecoveryStatus
   */
  readonly pointInTimeRecoveryStatus?: string;

  /**
   * @schema DynamoDbPointInTimeRecoveryDescription#EarliestRestorableDateTime
   */
  readonly earliestRestorableDateTime?: string;

  /**
   * @schema DynamoDbPointInTimeRecoveryDescription#LatestRestorableDateTime
   */
  readonly latestRestorableDateTime?: string;

}

/**
 * Converts an object of type 'DynamoDbPointInTimeRecoveryDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbPointInTimeRecoveryDescription(obj: DynamoDbPointInTimeRecoveryDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PointInTimeRecoveryStatus': obj.pointInTimeRecoveryStatus,
    'EarliestRestorableDateTime': obj.earliestRestorableDateTime,
    'LatestRestorableDateTime': obj.latestRestorableDateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbAutoScalingSettingsDescription
 */
export interface DynamoDbAutoScalingSettingsDescription {
  /**
   * @schema DynamoDbAutoScalingSettingsDescription#MinimumUnits
   */
  readonly minimumUnits?: number;

  /**
   * @schema DynamoDbAutoScalingSettingsDescription#MaximumUnits
   */
  readonly maximumUnits?: number;

  /**
   * @schema DynamoDbAutoScalingSettingsDescription#AutoScalingDisabled
   */
  readonly autoScalingDisabled?: boolean;

  /**
   * @schema DynamoDbAutoScalingSettingsDescription#AutoScalingRoleArn
   */
  readonly autoScalingRoleArn?: string;

  /**
   * @schema DynamoDbAutoScalingSettingsDescription#ScalingPolicies
   */
  readonly scalingPolicies?: DynamoDbAutoScalingPolicyDescription[];

}

/**
 * Converts an object of type 'DynamoDbAutoScalingSettingsDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbAutoScalingSettingsDescription(obj: DynamoDbAutoScalingSettingsDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MinimumUnits': obj.minimumUnits,
    'MaximumUnits': obj.maximumUnits,
    'AutoScalingDisabled': obj.autoScalingDisabled,
    'AutoScalingRoleArn': obj.autoScalingRoleArn,
    'ScalingPolicies': obj.scalingPolicies?.map(y => toJson_DynamoDbAutoScalingPolicyDescription(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbReplicaGlobalSecondaryIndexSettingsDescription
 */
export interface DynamoDbReplicaGlobalSecondaryIndexSettingsDescription {
  /**
   * @schema DynamoDbReplicaGlobalSecondaryIndexSettingsDescription#IndexName
   */
  readonly indexName?: string;

  /**
   * @schema DynamoDbReplicaGlobalSecondaryIndexSettingsDescription#IndexStatus
   */
  readonly indexStatus?: string;

  /**
   * @schema DynamoDbReplicaGlobalSecondaryIndexSettingsDescription#ProvisionedReadCapacityUnits
   */
  readonly provisionedReadCapacityUnits?: number;

  /**
   * @schema DynamoDbReplicaGlobalSecondaryIndexSettingsDescription#ProvisionedReadCapacityAutoScalingSettings
   */
  readonly provisionedReadCapacityAutoScalingSettings?: DynamoDbAutoScalingSettingsDescription;

  /**
   * @schema DynamoDbReplicaGlobalSecondaryIndexSettingsDescription#ProvisionedWriteCapacityUnits
   */
  readonly provisionedWriteCapacityUnits?: number;

  /**
   * @schema DynamoDbReplicaGlobalSecondaryIndexSettingsDescription#ProvisionedWriteCapacityAutoScalingSettings
   */
  readonly provisionedWriteCapacityAutoScalingSettings?: DynamoDbAutoScalingSettingsDescription;

}

/**
 * Converts an object of type 'DynamoDbReplicaGlobalSecondaryIndexSettingsDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbReplicaGlobalSecondaryIndexSettingsDescription(obj: DynamoDbReplicaGlobalSecondaryIndexSettingsDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IndexName': obj.indexName,
    'IndexStatus': obj.indexStatus,
    'ProvisionedReadCapacityUnits': obj.provisionedReadCapacityUnits,
    'ProvisionedReadCapacityAutoScalingSettings': toJson_DynamoDbAutoScalingSettingsDescription(obj.provisionedReadCapacityAutoScalingSettings),
    'ProvisionedWriteCapacityUnits': obj.provisionedWriteCapacityUnits,
    'ProvisionedWriteCapacityAutoScalingSettings': toJson_DynamoDbAutoScalingSettingsDescription(obj.provisionedWriteCapacityAutoScalingSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbReplicaAutoScalingDescription
 */
export interface DynamoDbReplicaAutoScalingDescription {
  /**
   * @schema DynamoDbReplicaAutoScalingDescription#RegionName
   */
  readonly regionName?: string;

  /**
   * @schema DynamoDbReplicaAutoScalingDescription#GlobalSecondaryIndexes
   */
  readonly globalSecondaryIndexes?: DynamoDbReplicaGlobalSecondaryIndexAutoScalingDescription[];

  /**
   * @schema DynamoDbReplicaAutoScalingDescription#ReplicaProvisionedReadCapacityAutoScalingSettings
   */
  readonly replicaProvisionedReadCapacityAutoScalingSettings?: DynamoDbAutoScalingSettingsDescription;

  /**
   * @schema DynamoDbReplicaAutoScalingDescription#ReplicaProvisionedWriteCapacityAutoScalingSettings
   */
  readonly replicaProvisionedWriteCapacityAutoScalingSettings?: DynamoDbAutoScalingSettingsDescription;

  /**
   * @schema DynamoDbReplicaAutoScalingDescription#ReplicaStatus
   */
  readonly replicaStatus?: string;

}

/**
 * Converts an object of type 'DynamoDbReplicaAutoScalingDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbReplicaAutoScalingDescription(obj: DynamoDbReplicaAutoScalingDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegionName': obj.regionName,
    'GlobalSecondaryIndexes': obj.globalSecondaryIndexes?.map(y => toJson_DynamoDbReplicaGlobalSecondaryIndexAutoScalingDescription(y)),
    'ReplicaProvisionedReadCapacityAutoScalingSettings': toJson_DynamoDbAutoScalingSettingsDescription(obj.replicaProvisionedReadCapacityAutoScalingSettings),
    'ReplicaProvisionedWriteCapacityAutoScalingSettings': toJson_DynamoDbAutoScalingSettingsDescription(obj.replicaProvisionedWriteCapacityAutoScalingSettings),
    'ReplicaStatus': obj.replicaStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbGet
 */
export interface DynamoDbGet {
  /**
   * @schema DynamoDbGet#Key
   */
  readonly key?: { [key: string]: DynamoDbAttributeValue };

  /**
   * @schema DynamoDbGet#TableName
   */
  readonly tableName?: string;

  /**
   * @schema DynamoDbGet#ProjectionExpression
   */
  readonly projectionExpression?: string;

  /**
   * @schema DynamoDbGet#ExpressionAttributeNames
   */
  readonly expressionAttributeNames?: { [key: string]: string };

}

/**
 * Converts an object of type 'DynamoDbGet' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbGet(obj: DynamoDbGet | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': ((obj.key) === undefined) ? undefined : (Object.entries(obj.key).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_DynamoDbAttributeValue(i[1]) }), {})),
    'TableName': obj.tableName,
    'ProjectionExpression': obj.projectionExpression,
    'ExpressionAttributeNames': ((obj.expressionAttributeNames) === undefined) ? undefined : (Object.entries(obj.expressionAttributeNames).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbConditionCheck
 */
export interface DynamoDbConditionCheck {
  /**
   * @schema DynamoDbConditionCheck#Key
   */
  readonly key?: { [key: string]: DynamoDbAttributeValue };

  /**
   * @schema DynamoDbConditionCheck#TableName
   */
  readonly tableName?: string;

  /**
   * @schema DynamoDbConditionCheck#ConditionExpression
   */
  readonly conditionExpression?: string;

  /**
   * @schema DynamoDbConditionCheck#ExpressionAttributeNames
   */
  readonly expressionAttributeNames?: { [key: string]: string };

  /**
   * @schema DynamoDbConditionCheck#ExpressionAttributeValues
   */
  readonly expressionAttributeValues?: { [key: string]: DynamoDbAttributeValue };

  /**
   * @schema DynamoDbConditionCheck#ReturnValuesOnConditionCheckFailure
   */
  readonly returnValuesOnConditionCheckFailure?: string;

}

/**
 * Converts an object of type 'DynamoDbConditionCheck' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbConditionCheck(obj: DynamoDbConditionCheck | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': ((obj.key) === undefined) ? undefined : (Object.entries(obj.key).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_DynamoDbAttributeValue(i[1]) }), {})),
    'TableName': obj.tableName,
    'ConditionExpression': obj.conditionExpression,
    'ExpressionAttributeNames': ((obj.expressionAttributeNames) === undefined) ? undefined : (Object.entries(obj.expressionAttributeNames).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'ExpressionAttributeValues': ((obj.expressionAttributeValues) === undefined) ? undefined : (Object.entries(obj.expressionAttributeValues).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_DynamoDbAttributeValue(i[1]) }), {})),
    'ReturnValuesOnConditionCheckFailure': obj.returnValuesOnConditionCheckFailure,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbPut
 */
export interface DynamoDbPut {
  /**
   * @schema DynamoDbPut#Item
   */
  readonly item?: { [key: string]: DynamoDbAttributeValue };

  /**
   * @schema DynamoDbPut#TableName
   */
  readonly tableName?: string;

  /**
   * @schema DynamoDbPut#ConditionExpression
   */
  readonly conditionExpression?: string;

  /**
   * @schema DynamoDbPut#ExpressionAttributeNames
   */
  readonly expressionAttributeNames?: { [key: string]: string };

  /**
   * @schema DynamoDbPut#ExpressionAttributeValues
   */
  readonly expressionAttributeValues?: { [key: string]: DynamoDbAttributeValue };

  /**
   * @schema DynamoDbPut#ReturnValuesOnConditionCheckFailure
   */
  readonly returnValuesOnConditionCheckFailure?: string;

}

/**
 * Converts an object of type 'DynamoDbPut' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbPut(obj: DynamoDbPut | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Item': ((obj.item) === undefined) ? undefined : (Object.entries(obj.item).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_DynamoDbAttributeValue(i[1]) }), {})),
    'TableName': obj.tableName,
    'ConditionExpression': obj.conditionExpression,
    'ExpressionAttributeNames': ((obj.expressionAttributeNames) === undefined) ? undefined : (Object.entries(obj.expressionAttributeNames).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'ExpressionAttributeValues': ((obj.expressionAttributeValues) === undefined) ? undefined : (Object.entries(obj.expressionAttributeValues).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_DynamoDbAttributeValue(i[1]) }), {})),
    'ReturnValuesOnConditionCheckFailure': obj.returnValuesOnConditionCheckFailure,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbDelete
 */
export interface DynamoDbDelete {
  /**
   * @schema DynamoDbDelete#Key
   */
  readonly key?: { [key: string]: DynamoDbAttributeValue };

  /**
   * @schema DynamoDbDelete#TableName
   */
  readonly tableName?: string;

  /**
   * @schema DynamoDbDelete#ConditionExpression
   */
  readonly conditionExpression?: string;

  /**
   * @schema DynamoDbDelete#ExpressionAttributeNames
   */
  readonly expressionAttributeNames?: { [key: string]: string };

  /**
   * @schema DynamoDbDelete#ExpressionAttributeValues
   */
  readonly expressionAttributeValues?: { [key: string]: DynamoDbAttributeValue };

  /**
   * @schema DynamoDbDelete#ReturnValuesOnConditionCheckFailure
   */
  readonly returnValuesOnConditionCheckFailure?: string;

}

/**
 * Converts an object of type 'DynamoDbDelete' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbDelete(obj: DynamoDbDelete | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': ((obj.key) === undefined) ? undefined : (Object.entries(obj.key).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_DynamoDbAttributeValue(i[1]) }), {})),
    'TableName': obj.tableName,
    'ConditionExpression': obj.conditionExpression,
    'ExpressionAttributeNames': ((obj.expressionAttributeNames) === undefined) ? undefined : (Object.entries(obj.expressionAttributeNames).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'ExpressionAttributeValues': ((obj.expressionAttributeValues) === undefined) ? undefined : (Object.entries(obj.expressionAttributeValues).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_DynamoDbAttributeValue(i[1]) }), {})),
    'ReturnValuesOnConditionCheckFailure': obj.returnValuesOnConditionCheckFailure,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbUpdate
 */
export interface DynamoDbUpdate {
  /**
   * @schema DynamoDbUpdate#Key
   */
  readonly key?: { [key: string]: DynamoDbAttributeValue };

  /**
   * @schema DynamoDbUpdate#UpdateExpression
   */
  readonly updateExpression?: string;

  /**
   * @schema DynamoDbUpdate#TableName
   */
  readonly tableName?: string;

  /**
   * @schema DynamoDbUpdate#ConditionExpression
   */
  readonly conditionExpression?: string;

  /**
   * @schema DynamoDbUpdate#ExpressionAttributeNames
   */
  readonly expressionAttributeNames?: { [key: string]: string };

  /**
   * @schema DynamoDbUpdate#ExpressionAttributeValues
   */
  readonly expressionAttributeValues?: { [key: string]: DynamoDbAttributeValue };

  /**
   * @schema DynamoDbUpdate#ReturnValuesOnConditionCheckFailure
   */
  readonly returnValuesOnConditionCheckFailure?: string;

}

/**
 * Converts an object of type 'DynamoDbUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbUpdate(obj: DynamoDbUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': ((obj.key) === undefined) ? undefined : (Object.entries(obj.key).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_DynamoDbAttributeValue(i[1]) }), {})),
    'UpdateExpression': obj.updateExpression,
    'TableName': obj.tableName,
    'ConditionExpression': obj.conditionExpression,
    'ExpressionAttributeNames': ((obj.expressionAttributeNames) === undefined) ? undefined : (Object.entries(obj.expressionAttributeNames).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'ExpressionAttributeValues': ((obj.expressionAttributeValues) === undefined) ? undefined : (Object.entries(obj.expressionAttributeValues).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_DynamoDbAttributeValue(i[1]) }), {})),
    'ReturnValuesOnConditionCheckFailure': obj.returnValuesOnConditionCheckFailure,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbCreateReplicaAction
 */
export interface DynamoDbCreateReplicaAction {
  /**
   * @schema DynamoDbCreateReplicaAction#RegionName
   */
  readonly regionName?: string;

}

/**
 * Converts an object of type 'DynamoDbCreateReplicaAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbCreateReplicaAction(obj: DynamoDbCreateReplicaAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegionName': obj.regionName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbDeleteReplicaAction
 */
export interface DynamoDbDeleteReplicaAction {
  /**
   * @schema DynamoDbDeleteReplicaAction#RegionName
   */
  readonly regionName?: string;

}

/**
 * Converts an object of type 'DynamoDbDeleteReplicaAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbDeleteReplicaAction(obj: DynamoDbDeleteReplicaAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegionName': obj.regionName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbAutoScalingPolicyUpdate
 */
export interface DynamoDbAutoScalingPolicyUpdate {
  /**
   * @schema DynamoDbAutoScalingPolicyUpdate#PolicyName
   */
  readonly policyName?: string;

  /**
   * @schema DynamoDbAutoScalingPolicyUpdate#TargetTrackingScalingPolicyConfiguration
   */
  readonly targetTrackingScalingPolicyConfiguration?: DynamoDbAutoScalingTargetTrackingScalingPolicyConfigurationUpdate;

}

/**
 * Converts an object of type 'DynamoDbAutoScalingPolicyUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbAutoScalingPolicyUpdate(obj: DynamoDbAutoScalingPolicyUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyName': obj.policyName,
    'TargetTrackingScalingPolicyConfiguration': toJson_DynamoDbAutoScalingTargetTrackingScalingPolicyConfigurationUpdate(obj.targetTrackingScalingPolicyConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbReplicaGlobalSecondaryIndexSettingsUpdate
 */
export interface DynamoDbReplicaGlobalSecondaryIndexSettingsUpdate {
  /**
   * @schema DynamoDbReplicaGlobalSecondaryIndexSettingsUpdate#IndexName
   */
  readonly indexName?: string;

  /**
   * @schema DynamoDbReplicaGlobalSecondaryIndexSettingsUpdate#ProvisionedReadCapacityUnits
   */
  readonly provisionedReadCapacityUnits?: number;

  /**
   * @schema DynamoDbReplicaGlobalSecondaryIndexSettingsUpdate#ProvisionedReadCapacityAutoScalingSettingsUpdate
   */
  readonly provisionedReadCapacityAutoScalingSettingsUpdate?: DynamoDbAutoScalingSettingsUpdate;

}

/**
 * Converts an object of type 'DynamoDbReplicaGlobalSecondaryIndexSettingsUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbReplicaGlobalSecondaryIndexSettingsUpdate(obj: DynamoDbReplicaGlobalSecondaryIndexSettingsUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IndexName': obj.indexName,
    'ProvisionedReadCapacityUnits': obj.provisionedReadCapacityUnits,
    'ProvisionedReadCapacityAutoScalingSettingsUpdate': toJson_DynamoDbAutoScalingSettingsUpdate(obj.provisionedReadCapacityAutoScalingSettingsUpdate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbUpdateGlobalSecondaryIndexAction
 */
export interface DynamoDbUpdateGlobalSecondaryIndexAction {
  /**
   * @schema DynamoDbUpdateGlobalSecondaryIndexAction#IndexName
   */
  readonly indexName?: string;

  /**
   * @schema DynamoDbUpdateGlobalSecondaryIndexAction#ProvisionedThroughput
   */
  readonly provisionedThroughput?: DynamoDbProvisionedThroughput;

}

/**
 * Converts an object of type 'DynamoDbUpdateGlobalSecondaryIndexAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbUpdateGlobalSecondaryIndexAction(obj: DynamoDbUpdateGlobalSecondaryIndexAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IndexName': obj.indexName,
    'ProvisionedThroughput': toJson_DynamoDbProvisionedThroughput(obj.provisionedThroughput),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbCreateGlobalSecondaryIndexAction
 */
export interface DynamoDbCreateGlobalSecondaryIndexAction {
  /**
   * @schema DynamoDbCreateGlobalSecondaryIndexAction#IndexName
   */
  readonly indexName?: string;

  /**
   * @schema DynamoDbCreateGlobalSecondaryIndexAction#KeySchema
   */
  readonly keySchema?: DynamoDbKeySchemaElement[];

  /**
   * @schema DynamoDbCreateGlobalSecondaryIndexAction#Projection
   */
  readonly projection?: DynamoDbProjection;

  /**
   * @schema DynamoDbCreateGlobalSecondaryIndexAction#ProvisionedThroughput
   */
  readonly provisionedThroughput?: DynamoDbProvisionedThroughput;

}

/**
 * Converts an object of type 'DynamoDbCreateGlobalSecondaryIndexAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbCreateGlobalSecondaryIndexAction(obj: DynamoDbCreateGlobalSecondaryIndexAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IndexName': obj.indexName,
    'KeySchema': obj.keySchema?.map(y => toJson_DynamoDbKeySchemaElement(y)),
    'Projection': toJson_DynamoDbProjection(obj.projection),
    'ProvisionedThroughput': toJson_DynamoDbProvisionedThroughput(obj.provisionedThroughput),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbDeleteGlobalSecondaryIndexAction
 */
export interface DynamoDbDeleteGlobalSecondaryIndexAction {
  /**
   * @schema DynamoDbDeleteGlobalSecondaryIndexAction#IndexName
   */
  readonly indexName?: string;

}

/**
 * Converts an object of type 'DynamoDbDeleteGlobalSecondaryIndexAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbDeleteGlobalSecondaryIndexAction(obj: DynamoDbDeleteGlobalSecondaryIndexAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IndexName': obj.indexName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbCreateReplicationGroupMemberAction
 */
export interface DynamoDbCreateReplicationGroupMemberAction {
  /**
   * @schema DynamoDbCreateReplicationGroupMemberAction#RegionName
   */
  readonly regionName?: string;

  /**
   * @schema DynamoDbCreateReplicationGroupMemberAction#KMSMasterKeyId
   */
  readonly kmsMasterKeyId?: string;

  /**
   * @schema DynamoDbCreateReplicationGroupMemberAction#ProvisionedThroughputOverride
   */
  readonly provisionedThroughputOverride?: DynamoDbProvisionedThroughputOverride;

  /**
   * @schema DynamoDbCreateReplicationGroupMemberAction#GlobalSecondaryIndexes
   */
  readonly globalSecondaryIndexes?: DynamoDbReplicaGlobalSecondaryIndex[];

}

/**
 * Converts an object of type 'DynamoDbCreateReplicationGroupMemberAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbCreateReplicationGroupMemberAction(obj: DynamoDbCreateReplicationGroupMemberAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegionName': obj.regionName,
    'KMSMasterKeyId': obj.kmsMasterKeyId,
    'ProvisionedThroughputOverride': toJson_DynamoDbProvisionedThroughputOverride(obj.provisionedThroughputOverride),
    'GlobalSecondaryIndexes': obj.globalSecondaryIndexes?.map(y => toJson_DynamoDbReplicaGlobalSecondaryIndex(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbUpdateReplicationGroupMemberAction
 */
export interface DynamoDbUpdateReplicationGroupMemberAction {
  /**
   * @schema DynamoDbUpdateReplicationGroupMemberAction#RegionName
   */
  readonly regionName?: string;

  /**
   * @schema DynamoDbUpdateReplicationGroupMemberAction#KMSMasterKeyId
   */
  readonly kmsMasterKeyId?: string;

  /**
   * @schema DynamoDbUpdateReplicationGroupMemberAction#ProvisionedThroughputOverride
   */
  readonly provisionedThroughputOverride?: DynamoDbProvisionedThroughputOverride;

  /**
   * @schema DynamoDbUpdateReplicationGroupMemberAction#GlobalSecondaryIndexes
   */
  readonly globalSecondaryIndexes?: DynamoDbReplicaGlobalSecondaryIndex[];

}

/**
 * Converts an object of type 'DynamoDbUpdateReplicationGroupMemberAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbUpdateReplicationGroupMemberAction(obj: DynamoDbUpdateReplicationGroupMemberAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegionName': obj.regionName,
    'KMSMasterKeyId': obj.kmsMasterKeyId,
    'ProvisionedThroughputOverride': toJson_DynamoDbProvisionedThroughputOverride(obj.provisionedThroughputOverride),
    'GlobalSecondaryIndexes': obj.globalSecondaryIndexes?.map(y => toJson_DynamoDbReplicaGlobalSecondaryIndex(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbDeleteReplicationGroupMemberAction
 */
export interface DynamoDbDeleteReplicationGroupMemberAction {
  /**
   * @schema DynamoDbDeleteReplicationGroupMemberAction#RegionName
   */
  readonly regionName?: string;

}

/**
 * Converts an object of type 'DynamoDbDeleteReplicationGroupMemberAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbDeleteReplicationGroupMemberAction(obj: DynamoDbDeleteReplicationGroupMemberAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegionName': obj.regionName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbReplicaGlobalSecondaryIndexAutoScalingUpdate
 */
export interface DynamoDbReplicaGlobalSecondaryIndexAutoScalingUpdate {
  /**
   * @schema DynamoDbReplicaGlobalSecondaryIndexAutoScalingUpdate#IndexName
   */
  readonly indexName?: string;

  /**
   * @schema DynamoDbReplicaGlobalSecondaryIndexAutoScalingUpdate#ProvisionedReadCapacityAutoScalingUpdate
   */
  readonly provisionedReadCapacityAutoScalingUpdate?: DynamoDbAutoScalingSettingsUpdate;

}

/**
 * Converts an object of type 'DynamoDbReplicaGlobalSecondaryIndexAutoScalingUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbReplicaGlobalSecondaryIndexAutoScalingUpdate(obj: DynamoDbReplicaGlobalSecondaryIndexAutoScalingUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IndexName': obj.indexName,
    'ProvisionedReadCapacityAutoScalingUpdate': toJson_DynamoDbAutoScalingSettingsUpdate(obj.provisionedReadCapacityAutoScalingUpdate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbProvisionedThroughputOverride
 */
export interface DynamoDbProvisionedThroughputOverride {
  /**
   * @schema DynamoDbProvisionedThroughputOverride#ReadCapacityUnits
   */
  readonly readCapacityUnits?: number;

}

/**
 * Converts an object of type 'DynamoDbProvisionedThroughputOverride' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbProvisionedThroughputOverride(obj: DynamoDbProvisionedThroughputOverride | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReadCapacityUnits': obj.readCapacityUnits,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbReplicaGlobalSecondaryIndexDescription
 */
export interface DynamoDbReplicaGlobalSecondaryIndexDescription {
  /**
   * @schema DynamoDbReplicaGlobalSecondaryIndexDescription#IndexName
   */
  readonly indexName?: string;

  /**
   * @schema DynamoDbReplicaGlobalSecondaryIndexDescription#ProvisionedThroughputOverride
   */
  readonly provisionedThroughputOverride?: DynamoDbProvisionedThroughputOverride;

}

/**
 * Converts an object of type 'DynamoDbReplicaGlobalSecondaryIndexDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbReplicaGlobalSecondaryIndexDescription(obj: DynamoDbReplicaGlobalSecondaryIndexDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IndexName': obj.indexName,
    'ProvisionedThroughputOverride': toJson_DynamoDbProvisionedThroughputOverride(obj.provisionedThroughputOverride),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbLocalSecondaryIndexInfo
 */
export interface DynamoDbLocalSecondaryIndexInfo {
  /**
   * @schema DynamoDbLocalSecondaryIndexInfo#IndexName
   */
  readonly indexName?: string;

  /**
   * @schema DynamoDbLocalSecondaryIndexInfo#KeySchema
   */
  readonly keySchema?: DynamoDbKeySchemaElement[];

  /**
   * @schema DynamoDbLocalSecondaryIndexInfo#Projection
   */
  readonly projection?: DynamoDbProjection;

}

/**
 * Converts an object of type 'DynamoDbLocalSecondaryIndexInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbLocalSecondaryIndexInfo(obj: DynamoDbLocalSecondaryIndexInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IndexName': obj.indexName,
    'KeySchema': obj.keySchema?.map(y => toJson_DynamoDbKeySchemaElement(y)),
    'Projection': toJson_DynamoDbProjection(obj.projection),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbGlobalSecondaryIndexInfo
 */
export interface DynamoDbGlobalSecondaryIndexInfo {
  /**
   * @schema DynamoDbGlobalSecondaryIndexInfo#IndexName
   */
  readonly indexName?: string;

  /**
   * @schema DynamoDbGlobalSecondaryIndexInfo#KeySchema
   */
  readonly keySchema?: DynamoDbKeySchemaElement[];

  /**
   * @schema DynamoDbGlobalSecondaryIndexInfo#Projection
   */
  readonly projection?: DynamoDbProjection;

  /**
   * @schema DynamoDbGlobalSecondaryIndexInfo#ProvisionedThroughput
   */
  readonly provisionedThroughput?: DynamoDbProvisionedThroughput;

}

/**
 * Converts an object of type 'DynamoDbGlobalSecondaryIndexInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbGlobalSecondaryIndexInfo(obj: DynamoDbGlobalSecondaryIndexInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IndexName': obj.indexName,
    'KeySchema': obj.keySchema?.map(y => toJson_DynamoDbKeySchemaElement(y)),
    'Projection': toJson_DynamoDbProjection(obj.projection),
    'ProvisionedThroughput': toJson_DynamoDbProvisionedThroughput(obj.provisionedThroughput),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbAutoScalingPolicyDescription
 */
export interface DynamoDbAutoScalingPolicyDescription {
  /**
   * @schema DynamoDbAutoScalingPolicyDescription#PolicyName
   */
  readonly policyName?: string;

  /**
   * @schema DynamoDbAutoScalingPolicyDescription#TargetTrackingScalingPolicyConfiguration
   */
  readonly targetTrackingScalingPolicyConfiguration?: DynamoDbAutoScalingTargetTrackingScalingPolicyConfigurationDescription;

}

/**
 * Converts an object of type 'DynamoDbAutoScalingPolicyDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbAutoScalingPolicyDescription(obj: DynamoDbAutoScalingPolicyDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyName': obj.policyName,
    'TargetTrackingScalingPolicyConfiguration': toJson_DynamoDbAutoScalingTargetTrackingScalingPolicyConfigurationDescription(obj.targetTrackingScalingPolicyConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbReplicaGlobalSecondaryIndexAutoScalingDescription
 */
export interface DynamoDbReplicaGlobalSecondaryIndexAutoScalingDescription {
  /**
   * @schema DynamoDbReplicaGlobalSecondaryIndexAutoScalingDescription#IndexName
   */
  readonly indexName?: string;

  /**
   * @schema DynamoDbReplicaGlobalSecondaryIndexAutoScalingDescription#IndexStatus
   */
  readonly indexStatus?: string;

  /**
   * @schema DynamoDbReplicaGlobalSecondaryIndexAutoScalingDescription#ProvisionedReadCapacityAutoScalingSettings
   */
  readonly provisionedReadCapacityAutoScalingSettings?: DynamoDbAutoScalingSettingsDescription;

  /**
   * @schema DynamoDbReplicaGlobalSecondaryIndexAutoScalingDescription#ProvisionedWriteCapacityAutoScalingSettings
   */
  readonly provisionedWriteCapacityAutoScalingSettings?: DynamoDbAutoScalingSettingsDescription;

}

/**
 * Converts an object of type 'DynamoDbReplicaGlobalSecondaryIndexAutoScalingDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbReplicaGlobalSecondaryIndexAutoScalingDescription(obj: DynamoDbReplicaGlobalSecondaryIndexAutoScalingDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IndexName': obj.indexName,
    'IndexStatus': obj.indexStatus,
    'ProvisionedReadCapacityAutoScalingSettings': toJson_DynamoDbAutoScalingSettingsDescription(obj.provisionedReadCapacityAutoScalingSettings),
    'ProvisionedWriteCapacityAutoScalingSettings': toJson_DynamoDbAutoScalingSettingsDescription(obj.provisionedWriteCapacityAutoScalingSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbAutoScalingTargetTrackingScalingPolicyConfigurationUpdate
 */
export interface DynamoDbAutoScalingTargetTrackingScalingPolicyConfigurationUpdate {
  /**
   * @schema DynamoDbAutoScalingTargetTrackingScalingPolicyConfigurationUpdate#DisableScaleIn
   */
  readonly disableScaleIn?: boolean;

  /**
   * @schema DynamoDbAutoScalingTargetTrackingScalingPolicyConfigurationUpdate#ScaleInCooldown
   */
  readonly scaleInCooldown?: number;

  /**
   * @schema DynamoDbAutoScalingTargetTrackingScalingPolicyConfigurationUpdate#ScaleOutCooldown
   */
  readonly scaleOutCooldown?: number;

  /**
   * @schema DynamoDbAutoScalingTargetTrackingScalingPolicyConfigurationUpdate#TargetValue
   */
  readonly targetValue?: number;

}

/**
 * Converts an object of type 'DynamoDbAutoScalingTargetTrackingScalingPolicyConfigurationUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbAutoScalingTargetTrackingScalingPolicyConfigurationUpdate(obj: DynamoDbAutoScalingTargetTrackingScalingPolicyConfigurationUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DisableScaleIn': obj.disableScaleIn,
    'ScaleInCooldown': obj.scaleInCooldown,
    'ScaleOutCooldown': obj.scaleOutCooldown,
    'TargetValue': obj.targetValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbReplicaGlobalSecondaryIndex
 */
export interface DynamoDbReplicaGlobalSecondaryIndex {
  /**
   * @schema DynamoDbReplicaGlobalSecondaryIndex#IndexName
   */
  readonly indexName?: string;

  /**
   * @schema DynamoDbReplicaGlobalSecondaryIndex#ProvisionedThroughputOverride
   */
  readonly provisionedThroughputOverride?: DynamoDbProvisionedThroughputOverride;

}

/**
 * Converts an object of type 'DynamoDbReplicaGlobalSecondaryIndex' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbReplicaGlobalSecondaryIndex(obj: DynamoDbReplicaGlobalSecondaryIndex | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IndexName': obj.indexName,
    'ProvisionedThroughputOverride': toJson_DynamoDbProvisionedThroughputOverride(obj.provisionedThroughputOverride),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DynamoDbAutoScalingTargetTrackingScalingPolicyConfigurationDescription
 */
export interface DynamoDbAutoScalingTargetTrackingScalingPolicyConfigurationDescription {
  /**
   * @schema DynamoDbAutoScalingTargetTrackingScalingPolicyConfigurationDescription#DisableScaleIn
   */
  readonly disableScaleIn?: boolean;

  /**
   * @schema DynamoDbAutoScalingTargetTrackingScalingPolicyConfigurationDescription#ScaleInCooldown
   */
  readonly scaleInCooldown?: number;

  /**
   * @schema DynamoDbAutoScalingTargetTrackingScalingPolicyConfigurationDescription#ScaleOutCooldown
   */
  readonly scaleOutCooldown?: number;

  /**
   * @schema DynamoDbAutoScalingTargetTrackingScalingPolicyConfigurationDescription#TargetValue
   */
  readonly targetValue?: number;

}

/**
 * Converts an object of type 'DynamoDbAutoScalingTargetTrackingScalingPolicyConfigurationDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamoDbAutoScalingTargetTrackingScalingPolicyConfigurationDescription(obj: DynamoDbAutoScalingTargetTrackingScalingPolicyConfigurationDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DisableScaleIn': obj.disableScaleIn,
    'ScaleInCooldown': obj.scaleInCooldown,
    'ScaleOutCooldown': obj.scaleOutCooldown,
    'TargetValue': obj.targetValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
