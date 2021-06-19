/**
 * @schema DynamoDbBatchExecuteStatementInput
 */
export interface DynamoDbBatchExecuteStatementInput {
  /**
   * @schema DynamoDbBatchExecuteStatementInput#Statements
   */
  readonly statements: DynamoDbBatchStatementRequest[];

}

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
 * @schema DynamoDbBatchGetItemInput
 */
export interface DynamoDbBatchGetItemInput {
  /**
   * @schema DynamoDbBatchGetItemInput#RequestItems
   */
  readonly requestItems: { [key: string]: DynamoDbKeysAndAttributes };

  /**
   * @schema DynamoDbBatchGetItemInput#ReturnConsumedCapacity
   */
  readonly returnConsumedCapacity?: string;

}

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
 * @schema DynamoDbBatchWriteItemInput
 */
export interface DynamoDbBatchWriteItemInput {
  /**
   * @schema DynamoDbBatchWriteItemInput#RequestItems
   */
  readonly requestItems: { [key: string]: DynamoDbWriteRequest[] };

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
 * @schema DynamoDbCreateBackupInput
 */
export interface DynamoDbCreateBackupInput {
  /**
   * @schema DynamoDbCreateBackupInput#TableName
   */
  readonly tableName: string;

  /**
   * @schema DynamoDbCreateBackupInput#BackupName
   */
  readonly backupName: string;

}

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
 * @schema DynamoDbCreateGlobalTableInput
 */
export interface DynamoDbCreateGlobalTableInput {
  /**
   * @schema DynamoDbCreateGlobalTableInput#GlobalTableName
   */
  readonly globalTableName: string;

  /**
   * @schema DynamoDbCreateGlobalTableInput#ReplicationGroup
   */
  readonly replicationGroup: DynamoDbReplica[];

}

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
 * @schema DynamoDbCreateTableInput
 */
export interface DynamoDbCreateTableInput {
  /**
   * @schema DynamoDbCreateTableInput#AttributeDefinitions
   */
  readonly attributeDefinitions: DynamoDbAttributeDefinition[];

  /**
   * @schema DynamoDbCreateTableInput#TableName
   */
  readonly tableName: string;

  /**
   * @schema DynamoDbCreateTableInput#KeySchema
   */
  readonly keySchema: DynamoDbKeySchemaElement[];

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
 * @schema DynamoDbCreateTableOutput
 */
export interface DynamoDbCreateTableOutput {
  /**
   * @schema DynamoDbCreateTableOutput#TableDescription
   */
  readonly tableDescription?: DynamoDbTableDescription;

}

/**
 * @schema DynamoDbDeleteBackupInput
 */
export interface DynamoDbDeleteBackupInput {
  /**
   * @schema DynamoDbDeleteBackupInput#BackupArn
   */
  readonly backupArn: string;

}

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
 * @schema DynamoDbDeleteItemInput
 */
export interface DynamoDbDeleteItemInput {
  /**
   * @schema DynamoDbDeleteItemInput#TableName
   */
  readonly tableName: string;

  /**
   * @schema DynamoDbDeleteItemInput#Key
   */
  readonly key: { [key: string]: DynamoDbAttributeValue };

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
 * @schema DynamoDbDeleteTableInput
 */
export interface DynamoDbDeleteTableInput {
  /**
   * @schema DynamoDbDeleteTableInput#TableName
   */
  readonly tableName: string;

}

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
 * @schema DynamoDbDescribeBackupInput
 */
export interface DynamoDbDescribeBackupInput {
  /**
   * @schema DynamoDbDescribeBackupInput#BackupArn
   */
  readonly backupArn: string;

}

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
 * @schema DynamoDbDescribeContinuousBackupsInput
 */
export interface DynamoDbDescribeContinuousBackupsInput {
  /**
   * @schema DynamoDbDescribeContinuousBackupsInput#TableName
   */
  readonly tableName: string;

}

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
 * @schema DynamoDbDescribeContributorInsightsInput
 */
export interface DynamoDbDescribeContributorInsightsInput {
  /**
   * @schema DynamoDbDescribeContributorInsightsInput#TableName
   */
  readonly tableName: string;

  /**
   * @schema DynamoDbDescribeContributorInsightsInput#IndexName
   */
  readonly indexName?: string;

}

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
 * @schema DynamoDbDescribeEndpointsRequest
 */
export interface DynamoDbDescribeEndpointsRequest {
}

/**
 * @schema DynamoDbDescribeEndpointsResponse
 */
export interface DynamoDbDescribeEndpointsResponse {
  /**
   * @schema DynamoDbDescribeEndpointsResponse#Endpoints
   */
  readonly endpoints: DynamoDbEndpoint[];

}

/**
 * @schema DynamoDbDescribeExportInput
 */
export interface DynamoDbDescribeExportInput {
  /**
   * @schema DynamoDbDescribeExportInput#ExportArn
   */
  readonly exportArn: string;

}

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
 * @schema DynamoDbDescribeGlobalTableInput
 */
export interface DynamoDbDescribeGlobalTableInput {
  /**
   * @schema DynamoDbDescribeGlobalTableInput#GlobalTableName
   */
  readonly globalTableName: string;

}

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
 * @schema DynamoDbDescribeGlobalTableSettingsInput
 */
export interface DynamoDbDescribeGlobalTableSettingsInput {
  /**
   * @schema DynamoDbDescribeGlobalTableSettingsInput#GlobalTableName
   */
  readonly globalTableName: string;

}

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
 * @schema DynamoDbDescribeKinesisStreamingDestinationInput
 */
export interface DynamoDbDescribeKinesisStreamingDestinationInput {
  /**
   * @schema DynamoDbDescribeKinesisStreamingDestinationInput#TableName
   */
  readonly tableName: string;

}

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
 * @schema DynamoDbDescribeLimitsInput
 */
export interface DynamoDbDescribeLimitsInput {
}

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
 * @schema DynamoDbDescribeTableInput
 */
export interface DynamoDbDescribeTableInput {
  /**
   * @schema DynamoDbDescribeTableInput#TableName
   */
  readonly tableName: string;

}

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
 * @schema DynamoDbDescribeTableReplicaAutoScalingInput
 */
export interface DynamoDbDescribeTableReplicaAutoScalingInput {
  /**
   * @schema DynamoDbDescribeTableReplicaAutoScalingInput#TableName
   */
  readonly tableName: string;

}

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
 * @schema DynamoDbDescribeTimeToLiveInput
 */
export interface DynamoDbDescribeTimeToLiveInput {
  /**
   * @schema DynamoDbDescribeTimeToLiveInput#TableName
   */
  readonly tableName: string;

}

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
 * @schema DynamoDbKinesisStreamingDestinationInput
 */
export interface DynamoDbKinesisStreamingDestinationInput {
  /**
   * @schema DynamoDbKinesisStreamingDestinationInput#TableName
   */
  readonly tableName: string;

  /**
   * @schema DynamoDbKinesisStreamingDestinationInput#StreamArn
   */
  readonly streamArn: string;

}

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
 * @schema DynamoDbExecuteStatementInput
 */
export interface DynamoDbExecuteStatementInput {
  /**
   * @schema DynamoDbExecuteStatementInput#Statement
   */
  readonly statement: string;

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
 * @schema DynamoDbExecuteTransactionInput
 */
export interface DynamoDbExecuteTransactionInput {
  /**
   * @schema DynamoDbExecuteTransactionInput#TransactStatements
   */
  readonly transactStatements: DynamoDbParameterizedStatement[];

  /**
   * @schema DynamoDbExecuteTransactionInput#ClientRequestToken
   */
  readonly clientRequestToken?: string;

}

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
 * @schema DynamoDbExportTableToPointInTimeInput
 */
export interface DynamoDbExportTableToPointInTimeInput {
  /**
   * @schema DynamoDbExportTableToPointInTimeInput#TableArn
   */
  readonly tableArn: string;

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
  readonly s3Bucket: string;

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
 * @schema DynamoDbExportTableToPointInTimeOutput
 */
export interface DynamoDbExportTableToPointInTimeOutput {
  /**
   * @schema DynamoDbExportTableToPointInTimeOutput#ExportDescription
   */
  readonly exportDescription?: DynamoDbExportDescription;

}

/**
 * @schema DynamoDbGetItemInput
 */
export interface DynamoDbGetItemInput {
  /**
   * @schema DynamoDbGetItemInput#TableName
   */
  readonly tableName: string;

  /**
   * @schema DynamoDbGetItemInput#Key
   */
  readonly key: { [key: string]: DynamoDbAttributeValue };

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
 * @schema DynamoDbListTagsOfResourceInput
 */
export interface DynamoDbListTagsOfResourceInput {
  /**
   * @schema DynamoDbListTagsOfResourceInput#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema DynamoDbListTagsOfResourceInput#NextToken
   */
  readonly nextToken?: string;

}

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
 * @schema DynamoDbPutItemInput
 */
export interface DynamoDbPutItemInput {
  /**
   * @schema DynamoDbPutItemInput#TableName
   */
  readonly tableName: string;

  /**
   * @schema DynamoDbPutItemInput#Item
   */
  readonly item: { [key: string]: DynamoDbAttributeValue };

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
 * @schema DynamoDbQueryInput
 */
export interface DynamoDbQueryInput {
  /**
   * @schema DynamoDbQueryInput#TableName
   */
  readonly tableName: string;

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
 * @schema DynamoDbRestoreTableFromBackupInput
 */
export interface DynamoDbRestoreTableFromBackupInput {
  /**
   * @schema DynamoDbRestoreTableFromBackupInput#TargetTableName
   */
  readonly targetTableName: string;

  /**
   * @schema DynamoDbRestoreTableFromBackupInput#BackupArn
   */
  readonly backupArn: string;

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
 * @schema DynamoDbRestoreTableFromBackupOutput
 */
export interface DynamoDbRestoreTableFromBackupOutput {
  /**
   * @schema DynamoDbRestoreTableFromBackupOutput#TableDescription
   */
  readonly tableDescription?: DynamoDbTableDescription;

}

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
  readonly targetTableName: string;

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
 * @schema DynamoDbRestoreTableToPointInTimeOutput
 */
export interface DynamoDbRestoreTableToPointInTimeOutput {
  /**
   * @schema DynamoDbRestoreTableToPointInTimeOutput#TableDescription
   */
  readonly tableDescription?: DynamoDbTableDescription;

}

/**
 * @schema DynamoDbScanInput
 */
export interface DynamoDbScanInput {
  /**
   * @schema DynamoDbScanInput#TableName
   */
  readonly tableName: string;

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
 * @schema DynamoDbTagResourceInput
 */
export interface DynamoDbTagResourceInput {
  /**
   * @schema DynamoDbTagResourceInput#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema DynamoDbTagResourceInput#Tags
   */
  readonly tags: DynamoDbTag[];

}

/**
 * @schema DynamoDbTransactGetItemsInput
 */
export interface DynamoDbTransactGetItemsInput {
  /**
   * @schema DynamoDbTransactGetItemsInput#TransactItems
   */
  readonly transactItems: DynamoDbTransactGetItem[];

  /**
   * @schema DynamoDbTransactGetItemsInput#ReturnConsumedCapacity
   */
  readonly returnConsumedCapacity?: string;

}

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
 * @schema DynamoDbTransactWriteItemsInput
 */
export interface DynamoDbTransactWriteItemsInput {
  /**
   * @schema DynamoDbTransactWriteItemsInput#TransactItems
   */
  readonly transactItems: DynamoDbTransactWriteItem[];

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
 * @schema DynamoDbUntagResourceInput
 */
export interface DynamoDbUntagResourceInput {
  /**
   * @schema DynamoDbUntagResourceInput#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema DynamoDbUntagResourceInput#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema DynamoDbUpdateContinuousBackupsInput
 */
export interface DynamoDbUpdateContinuousBackupsInput {
  /**
   * @schema DynamoDbUpdateContinuousBackupsInput#TableName
   */
  readonly tableName: string;

  /**
   * @schema DynamoDbUpdateContinuousBackupsInput#PointInTimeRecoverySpecification
   */
  readonly pointInTimeRecoverySpecification: DynamoDbPointInTimeRecoverySpecification;

}

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
 * @schema DynamoDbUpdateContributorInsightsInput
 */
export interface DynamoDbUpdateContributorInsightsInput {
  /**
   * @schema DynamoDbUpdateContributorInsightsInput#TableName
   */
  readonly tableName: string;

  /**
   * @schema DynamoDbUpdateContributorInsightsInput#IndexName
   */
  readonly indexName?: string;

  /**
   * @schema DynamoDbUpdateContributorInsightsInput#ContributorInsightsAction
   */
  readonly contributorInsightsAction: string;

}

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
 * @schema DynamoDbUpdateGlobalTableInput
 */
export interface DynamoDbUpdateGlobalTableInput {
  /**
   * @schema DynamoDbUpdateGlobalTableInput#GlobalTableName
   */
  readonly globalTableName: string;

  /**
   * @schema DynamoDbUpdateGlobalTableInput#ReplicaUpdates
   */
  readonly replicaUpdates: DynamoDbReplicaUpdate[];

}

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
 * @schema DynamoDbUpdateGlobalTableSettingsInput
 */
export interface DynamoDbUpdateGlobalTableSettingsInput {
  /**
   * @schema DynamoDbUpdateGlobalTableSettingsInput#GlobalTableName
   */
  readonly globalTableName: string;

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
 * @schema DynamoDbUpdateItemInput
 */
export interface DynamoDbUpdateItemInput {
  /**
   * @schema DynamoDbUpdateItemInput#TableName
   */
  readonly tableName: string;

  /**
   * @schema DynamoDbUpdateItemInput#Key
   */
  readonly key: { [key: string]: DynamoDbAttributeValue };

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
  readonly tableName: string;

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
 * @schema DynamoDbUpdateTableOutput
 */
export interface DynamoDbUpdateTableOutput {
  /**
   * @schema DynamoDbUpdateTableOutput#TableDescription
   */
  readonly tableDescription?: DynamoDbTableDescription;

}

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
  readonly tableName: string;

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
 * @schema DynamoDbUpdateTableReplicaAutoScalingOutput
 */
export interface DynamoDbUpdateTableReplicaAutoScalingOutput {
  /**
   * @schema DynamoDbUpdateTableReplicaAutoScalingOutput#TableAutoScalingDescription
   */
  readonly tableAutoScalingDescription?: DynamoDbTableAutoScalingDescription;

}

/**
 * @schema DynamoDbUpdateTimeToLiveInput
 */
export interface DynamoDbUpdateTimeToLiveInput {
  /**
   * @schema DynamoDbUpdateTimeToLiveInput#TableName
   */
  readonly tableName: string;

  /**
   * @schema DynamoDbUpdateTimeToLiveInput#TimeToLiveSpecification
   */
  readonly timeToLiveSpecification: DynamoDbTimeToLiveSpecification;

}

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
 * @schema DynamoDbBatchStatementRequest
 */
export interface DynamoDbBatchStatementRequest {
  /**
   * @schema DynamoDbBatchStatementRequest#Statement
   */
  readonly statement: string;

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
 * @schema DynamoDbKeysAndAttributes
 */
export interface DynamoDbKeysAndAttributes {
  /**
   * @schema DynamoDbKeysAndAttributes#Keys
   */
  readonly keys: { [key: string]: DynamoDbAttributeValue }[];

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
 * @schema DynamoDbBackupDetails
 */
export interface DynamoDbBackupDetails {
  /**
   * @schema DynamoDbBackupDetails#BackupArn
   */
  readonly backupArn: string;

  /**
   * @schema DynamoDbBackupDetails#BackupName
   */
  readonly backupName: string;

  /**
   * @schema DynamoDbBackupDetails#BackupSizeBytes
   */
  readonly backupSizeBytes?: number;

  /**
   * @schema DynamoDbBackupDetails#BackupStatus
   */
  readonly backupStatus: string;

  /**
   * @schema DynamoDbBackupDetails#BackupType
   */
  readonly backupType: string;

  /**
   * @schema DynamoDbBackupDetails#BackupCreationDateTime
   */
  readonly backupCreationDateTime: string;

  /**
   * @schema DynamoDbBackupDetails#BackupExpiryDateTime
   */
  readonly backupExpiryDateTime?: string;

}

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
 * @schema DynamoDbAttributeDefinition
 */
export interface DynamoDbAttributeDefinition {
  /**
   * @schema DynamoDbAttributeDefinition#AttributeName
   */
  readonly attributeName: string;

  /**
   * @schema DynamoDbAttributeDefinition#AttributeType
   */
  readonly attributeType: string;

}

/**
 * @schema DynamoDbKeySchemaElement
 */
export interface DynamoDbKeySchemaElement {
  /**
   * @schema DynamoDbKeySchemaElement#AttributeName
   */
  readonly attributeName: string;

  /**
   * @schema DynamoDbKeySchemaElement#KeyType
   */
  readonly keyType: string;

}

/**
 * @schema DynamoDbLocalSecondaryIndex
 */
export interface DynamoDbLocalSecondaryIndex {
  /**
   * @schema DynamoDbLocalSecondaryIndex#IndexName
   */
  readonly indexName: string;

  /**
   * @schema DynamoDbLocalSecondaryIndex#KeySchema
   */
  readonly keySchema: DynamoDbKeySchemaElement[];

  /**
   * @schema DynamoDbLocalSecondaryIndex#Projection
   */
  readonly projection: DynamoDbProjection;

}

/**
 * @schema DynamoDbGlobalSecondaryIndex
 */
export interface DynamoDbGlobalSecondaryIndex {
  /**
   * @schema DynamoDbGlobalSecondaryIndex#IndexName
   */
  readonly indexName: string;

  /**
   * @schema DynamoDbGlobalSecondaryIndex#KeySchema
   */
  readonly keySchema: DynamoDbKeySchemaElement[];

  /**
   * @schema DynamoDbGlobalSecondaryIndex#Projection
   */
  readonly projection: DynamoDbProjection;

  /**
   * @schema DynamoDbGlobalSecondaryIndex#ProvisionedThroughput
   */
  readonly provisionedThroughput?: DynamoDbProvisionedThroughput;

}

/**
 * @schema DynamoDbProvisionedThroughput
 */
export interface DynamoDbProvisionedThroughput {
  /**
   * @schema DynamoDbProvisionedThroughput#ReadCapacityUnits
   */
  readonly readCapacityUnits: number;

  /**
   * @schema DynamoDbProvisionedThroughput#WriteCapacityUnits
   */
  readonly writeCapacityUnits: number;

}

/**
 * @schema DynamoDbStreamSpecification
 */
export interface DynamoDbStreamSpecification {
  /**
   * @schema DynamoDbStreamSpecification#StreamEnabled
   */
  readonly streamEnabled: boolean;

  /**
   * @schema DynamoDbStreamSpecification#StreamViewType
   */
  readonly streamViewType?: string;

}

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
 * @schema DynamoDbTag
 */
export interface DynamoDbTag {
  /**
   * @schema DynamoDbTag#Key
   */
  readonly key: string;

  /**
   * @schema DynamoDbTag#Value
   */
  readonly value: string;

}

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
 * @schema DynamoDbContinuousBackupsDescription
 */
export interface DynamoDbContinuousBackupsDescription {
  /**
   * @schema DynamoDbContinuousBackupsDescription#ContinuousBackupsStatus
   */
  readonly continuousBackupsStatus: string;

  /**
   * @schema DynamoDbContinuousBackupsDescription#PointInTimeRecoveryDescription
   */
  readonly pointInTimeRecoveryDescription?: DynamoDbPointInTimeRecoveryDescription;

}

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
 * @schema DynamoDbEndpoint
 */
export interface DynamoDbEndpoint {
  /**
   * @schema DynamoDbEndpoint#Address
   */
  readonly address: string;

  /**
   * @schema DynamoDbEndpoint#CachePeriodInMinutes
   */
  readonly cachePeriodInMinutes: number;

}

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
 * @schema DynamoDbReplicaSettingsDescription
 */
export interface DynamoDbReplicaSettingsDescription {
  /**
   * @schema DynamoDbReplicaSettingsDescription#RegionName
   */
  readonly regionName: string;

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
 * @schema DynamoDbParameterizedStatement
 */
export interface DynamoDbParameterizedStatement {
  /**
   * @schema DynamoDbParameterizedStatement#Statement
   */
  readonly statement: string;

  /**
   * @schema DynamoDbParameterizedStatement#Parameters
   */
  readonly parameters?: DynamoDbAttributeValue[];

}

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
  readonly comparisonOperator: string;

}

/**
 * @schema DynamoDbTransactGetItem
 */
export interface DynamoDbTransactGetItem {
  /**
   * @schema DynamoDbTransactGetItem#Get
   */
  readonly get: DynamoDbGet;

}

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
 * @schema DynamoDbPointInTimeRecoverySpecification
 */
export interface DynamoDbPointInTimeRecoverySpecification {
  /**
   * @schema DynamoDbPointInTimeRecoverySpecification#PointInTimeRecoveryEnabled
   */
  readonly pointInTimeRecoveryEnabled: boolean;

}

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
 * @schema DynamoDbGlobalTableGlobalSecondaryIndexSettingsUpdate
 */
export interface DynamoDbGlobalTableGlobalSecondaryIndexSettingsUpdate {
  /**
   * @schema DynamoDbGlobalTableGlobalSecondaryIndexSettingsUpdate#IndexName
   */
  readonly indexName: string;

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
 * @schema DynamoDbReplicaSettingsUpdate
 */
export interface DynamoDbReplicaSettingsUpdate {
  /**
   * @schema DynamoDbReplicaSettingsUpdate#RegionName
   */
  readonly regionName: string;

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
 * @schema DynamoDbReplicaAutoScalingUpdate
 */
export interface DynamoDbReplicaAutoScalingUpdate {
  /**
   * @schema DynamoDbReplicaAutoScalingUpdate#RegionName
   */
  readonly regionName: string;

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
 * @schema DynamoDbTimeToLiveSpecification
 */
export interface DynamoDbTimeToLiveSpecification {
  /**
   * @schema DynamoDbTimeToLiveSpecification#Enabled
   */
  readonly enabled: boolean;

  /**
   * @schema DynamoDbTimeToLiveSpecification#AttributeName
   */
  readonly attributeName: string;

}

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
 * @schema DynamoDbPutRequest
 */
export interface DynamoDbPutRequest {
  /**
   * @schema DynamoDbPutRequest#Item
   */
  readonly item: { [key: string]: DynamoDbAttributeValue };

}

/**
 * @schema DynamoDbDeleteRequest
 */
export interface DynamoDbDeleteRequest {
  /**
   * @schema DynamoDbDeleteRequest#Key
   */
  readonly key: { [key: string]: DynamoDbAttributeValue };

}

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
  readonly restoreDateTime: string;

  /**
   * @schema DynamoDbRestoreSummary#RestoreInProgress
   */
  readonly restoreInProgress: boolean;

}

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
 * @schema DynamoDbSourceTableDetails
 */
export interface DynamoDbSourceTableDetails {
  /**
   * @schema DynamoDbSourceTableDetails#TableName
   */
  readonly tableName: string;

  /**
   * @schema DynamoDbSourceTableDetails#TableId
   */
  readonly tableId: string;

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
  readonly keySchema: DynamoDbKeySchemaElement[];

  /**
   * @schema DynamoDbSourceTableDetails#TableCreationDateTime
   */
  readonly tableCreationDateTime: string;

  /**
   * @schema DynamoDbSourceTableDetails#ProvisionedThroughput
   */
  readonly provisionedThroughput: DynamoDbProvisionedThroughput;

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
 * @schema DynamoDbReplicaGlobalSecondaryIndexSettingsDescription
 */
export interface DynamoDbReplicaGlobalSecondaryIndexSettingsDescription {
  /**
   * @schema DynamoDbReplicaGlobalSecondaryIndexSettingsDescription#IndexName
   */
  readonly indexName: string;

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
 * @schema DynamoDbGet
 */
export interface DynamoDbGet {
  /**
   * @schema DynamoDbGet#Key
   */
  readonly key: { [key: string]: DynamoDbAttributeValue };

  /**
   * @schema DynamoDbGet#TableName
   */
  readonly tableName: string;

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
 * @schema DynamoDbConditionCheck
 */
export interface DynamoDbConditionCheck {
  /**
   * @schema DynamoDbConditionCheck#Key
   */
  readonly key: { [key: string]: DynamoDbAttributeValue };

  /**
   * @schema DynamoDbConditionCheck#TableName
   */
  readonly tableName: string;

  /**
   * @schema DynamoDbConditionCheck#ConditionExpression
   */
  readonly conditionExpression: string;

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
 * @schema DynamoDbPut
 */
export interface DynamoDbPut {
  /**
   * @schema DynamoDbPut#Item
   */
  readonly item: { [key: string]: DynamoDbAttributeValue };

  /**
   * @schema DynamoDbPut#TableName
   */
  readonly tableName: string;

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
 * @schema DynamoDbDelete
 */
export interface DynamoDbDelete {
  /**
   * @schema DynamoDbDelete#Key
   */
  readonly key: { [key: string]: DynamoDbAttributeValue };

  /**
   * @schema DynamoDbDelete#TableName
   */
  readonly tableName: string;

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
 * @schema DynamoDbUpdate
 */
export interface DynamoDbUpdate {
  /**
   * @schema DynamoDbUpdate#Key
   */
  readonly key: { [key: string]: DynamoDbAttributeValue };

  /**
   * @schema DynamoDbUpdate#UpdateExpression
   */
  readonly updateExpression: string;

  /**
   * @schema DynamoDbUpdate#TableName
   */
  readonly tableName: string;

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
 * @schema DynamoDbCreateReplicaAction
 */
export interface DynamoDbCreateReplicaAction {
  /**
   * @schema DynamoDbCreateReplicaAction#RegionName
   */
  readonly regionName: string;

}

/**
 * @schema DynamoDbDeleteReplicaAction
 */
export interface DynamoDbDeleteReplicaAction {
  /**
   * @schema DynamoDbDeleteReplicaAction#RegionName
   */
  readonly regionName: string;

}

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
  readonly targetTrackingScalingPolicyConfiguration: DynamoDbAutoScalingTargetTrackingScalingPolicyConfigurationUpdate;

}

/**
 * @schema DynamoDbReplicaGlobalSecondaryIndexSettingsUpdate
 */
export interface DynamoDbReplicaGlobalSecondaryIndexSettingsUpdate {
  /**
   * @schema DynamoDbReplicaGlobalSecondaryIndexSettingsUpdate#IndexName
   */
  readonly indexName: string;

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
 * @schema DynamoDbUpdateGlobalSecondaryIndexAction
 */
export interface DynamoDbUpdateGlobalSecondaryIndexAction {
  /**
   * @schema DynamoDbUpdateGlobalSecondaryIndexAction#IndexName
   */
  readonly indexName: string;

  /**
   * @schema DynamoDbUpdateGlobalSecondaryIndexAction#ProvisionedThroughput
   */
  readonly provisionedThroughput: DynamoDbProvisionedThroughput;

}

/**
 * @schema DynamoDbCreateGlobalSecondaryIndexAction
 */
export interface DynamoDbCreateGlobalSecondaryIndexAction {
  /**
   * @schema DynamoDbCreateGlobalSecondaryIndexAction#IndexName
   */
  readonly indexName: string;

  /**
   * @schema DynamoDbCreateGlobalSecondaryIndexAction#KeySchema
   */
  readonly keySchema: DynamoDbKeySchemaElement[];

  /**
   * @schema DynamoDbCreateGlobalSecondaryIndexAction#Projection
   */
  readonly projection: DynamoDbProjection;

  /**
   * @schema DynamoDbCreateGlobalSecondaryIndexAction#ProvisionedThroughput
   */
  readonly provisionedThroughput?: DynamoDbProvisionedThroughput;

}

/**
 * @schema DynamoDbDeleteGlobalSecondaryIndexAction
 */
export interface DynamoDbDeleteGlobalSecondaryIndexAction {
  /**
   * @schema DynamoDbDeleteGlobalSecondaryIndexAction#IndexName
   */
  readonly indexName: string;

}

/**
 * @schema DynamoDbCreateReplicationGroupMemberAction
 */
export interface DynamoDbCreateReplicationGroupMemberAction {
  /**
   * @schema DynamoDbCreateReplicationGroupMemberAction#RegionName
   */
  readonly regionName: string;

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
 * @schema DynamoDbUpdateReplicationGroupMemberAction
 */
export interface DynamoDbUpdateReplicationGroupMemberAction {
  /**
   * @schema DynamoDbUpdateReplicationGroupMemberAction#RegionName
   */
  readonly regionName: string;

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
 * @schema DynamoDbDeleteReplicationGroupMemberAction
 */
export interface DynamoDbDeleteReplicationGroupMemberAction {
  /**
   * @schema DynamoDbDeleteReplicationGroupMemberAction#RegionName
   */
  readonly regionName: string;

}

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
 * @schema DynamoDbProvisionedThroughputOverride
 */
export interface DynamoDbProvisionedThroughputOverride {
  /**
   * @schema DynamoDbProvisionedThroughputOverride#ReadCapacityUnits
   */
  readonly readCapacityUnits?: number;

}

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
  readonly targetValue: number;

}

/**
 * @schema DynamoDbReplicaGlobalSecondaryIndex
 */
export interface DynamoDbReplicaGlobalSecondaryIndex {
  /**
   * @schema DynamoDbReplicaGlobalSecondaryIndex#IndexName
   */
  readonly indexName: string;

  /**
   * @schema DynamoDbReplicaGlobalSecondaryIndex#ProvisionedThroughputOverride
   */
  readonly provisionedThroughputOverride?: DynamoDbProvisionedThroughputOverride;

}

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
  readonly targetValue: number;

}
