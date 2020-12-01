/**
 * @schema BatchExecuteStatementInput
 */
export interface BatchExecuteStatementInput {
  /**
   * @schema BatchExecuteStatementInput#Statements
   */
  readonly statements: BatchStatementRequest[];

}

/**
 * @schema BatchExecuteStatementOutput
 */
export interface BatchExecuteStatementOutput {
  /**
   * @schema BatchExecuteStatementOutput#Responses
   */
  readonly responses?: BatchStatementResponse[];

}

/**
 * @schema BatchGetItemInput
 */
export interface BatchGetItemInput {
  /**
   * @schema BatchGetItemInput#RequestItems
   */
  readonly requestItems: { [key: string]: KeysAndAttributes };

  /**
   * @schema BatchGetItemInput#ReturnConsumedCapacity
   */
  readonly returnConsumedCapacity?: string;

}

/**
 * @schema BatchGetItemOutput
 */
export interface BatchGetItemOutput {
  /**
   * @schema BatchGetItemOutput#Responses
   */
  readonly responses?: { [key: string]: { [key: string]: AttributeValue }[] };

  /**
   * @schema BatchGetItemOutput#UnprocessedKeys
   */
  readonly unprocessedKeys?: { [key: string]: KeysAndAttributes };

  /**
   * @schema BatchGetItemOutput#ConsumedCapacity
   */
  readonly consumedCapacity?: ConsumedCapacity[];

}

/**
 * @schema BatchWriteItemInput
 */
export interface BatchWriteItemInput {
  /**
   * @schema BatchWriteItemInput#RequestItems
   */
  readonly requestItems: { [key: string]: WriteRequest[] };

  /**
   * @schema BatchWriteItemInput#ReturnConsumedCapacity
   */
  readonly returnConsumedCapacity?: string;

  /**
   * @schema BatchWriteItemInput#ReturnItemCollectionMetrics
   */
  readonly returnItemCollectionMetrics?: string;

}

/**
 * @schema BatchWriteItemOutput
 */
export interface BatchWriteItemOutput {
  /**
   * @schema BatchWriteItemOutput#UnprocessedItems
   */
  readonly unprocessedItems?: { [key: string]: WriteRequest[] };

  /**
   * @schema BatchWriteItemOutput#ItemCollectionMetrics
   */
  readonly itemCollectionMetrics?: { [key: string]: ItemCollectionMetrics[] };

  /**
   * @schema BatchWriteItemOutput#ConsumedCapacity
   */
  readonly consumedCapacity?: ConsumedCapacity[];

}

/**
 * @schema CreateBackupInput
 */
export interface CreateBackupInput {
  /**
   * @schema CreateBackupInput#TableName
   */
  readonly tableName: string;

  /**
   * @schema CreateBackupInput#BackupName
   */
  readonly backupName: string;

}

/**
 * @schema CreateBackupOutput
 */
export interface CreateBackupOutput {
  /**
   * @schema CreateBackupOutput#BackupDetails
   */
  readonly backupDetails?: BackupDetails;

}

/**
 * @schema CreateGlobalTableInput
 */
export interface CreateGlobalTableInput {
  /**
   * @schema CreateGlobalTableInput#GlobalTableName
   */
  readonly globalTableName: string;

  /**
   * @schema CreateGlobalTableInput#ReplicationGroup
   */
  readonly replicationGroup: Replica[];

}

/**
 * @schema CreateGlobalTableOutput
 */
export interface CreateGlobalTableOutput {
  /**
   * @schema CreateGlobalTableOutput#GlobalTableDescription
   */
  readonly globalTableDescription?: GlobalTableDescription;

}

/**
 * @schema CreateTableInput
 */
export interface CreateTableInput {
  /**
   * @schema CreateTableInput#AttributeDefinitions
   */
  readonly attributeDefinitions: AttributeDefinition[];

  /**
   * @schema CreateTableInput#TableName
   */
  readonly tableName: string;

  /**
   * @schema CreateTableInput#KeySchema
   */
  readonly keySchema: KeySchemaElement[];

  /**
   * @schema CreateTableInput#LocalSecondaryIndexes
   */
  readonly localSecondaryIndexes?: LocalSecondaryIndex[];

  /**
   * @schema CreateTableInput#GlobalSecondaryIndexes
   */
  readonly globalSecondaryIndexes?: GlobalSecondaryIndex[];

  /**
   * @schema CreateTableInput#BillingMode
   */
  readonly billingMode?: string;

  /**
   * @schema CreateTableInput#ProvisionedThroughput
   */
  readonly provisionedThroughput?: ProvisionedThroughput;

  /**
   * @schema CreateTableInput#StreamSpecification
   */
  readonly streamSpecification?: StreamSpecification;

  /**
   * @schema CreateTableInput#SSESpecification
   */
  readonly sseSpecification?: SseSpecification;

  /**
   * @schema CreateTableInput#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateTableOutput
 */
export interface CreateTableOutput {
  /**
   * @schema CreateTableOutput#TableDescription
   */
  readonly tableDescription?: TableDescription;

}

/**
 * @schema DeleteBackupInput
 */
export interface DeleteBackupInput {
  /**
   * @schema DeleteBackupInput#BackupArn
   */
  readonly backupArn: string;

}

/**
 * @schema DeleteBackupOutput
 */
export interface DeleteBackupOutput {
  /**
   * @schema DeleteBackupOutput#BackupDescription
   */
  readonly backupDescription?: BackupDescription;

}

/**
 * @schema DeleteItemInput
 */
export interface DeleteItemInput {
  /**
   * @schema DeleteItemInput#TableName
   */
  readonly tableName: string;

  /**
   * @schema DeleteItemInput#Key
   */
  readonly key: { [key: string]: AttributeValue };

  /**
   * @schema DeleteItemInput#Expected
   */
  readonly expected?: { [key: string]: ExpectedAttributeValue };

  /**
   * @schema DeleteItemInput#ConditionalOperator
   */
  readonly conditionalOperator?: string;

  /**
   * @schema DeleteItemInput#ReturnValues
   */
  readonly returnValues?: string;

  /**
   * @schema DeleteItemInput#ReturnConsumedCapacity
   */
  readonly returnConsumedCapacity?: string;

  /**
   * @schema DeleteItemInput#ReturnItemCollectionMetrics
   */
  readonly returnItemCollectionMetrics?: string;

  /**
   * @schema DeleteItemInput#ConditionExpression
   */
  readonly conditionExpression?: string;

  /**
   * @schema DeleteItemInput#ExpressionAttributeNames
   */
  readonly expressionAttributeNames?: { [key: string]: string };

  /**
   * @schema DeleteItemInput#ExpressionAttributeValues
   */
  readonly expressionAttributeValues?: { [key: string]: AttributeValue };

}

/**
 * @schema DeleteItemOutput
 */
export interface DeleteItemOutput {
  /**
   * @schema DeleteItemOutput#Attributes
   */
  readonly attributes?: { [key: string]: AttributeValue };

  /**
   * @schema DeleteItemOutput#ConsumedCapacity
   */
  readonly consumedCapacity?: ConsumedCapacity;

  /**
   * @schema DeleteItemOutput#ItemCollectionMetrics
   */
  readonly itemCollectionMetrics?: ItemCollectionMetrics;

}

/**
 * @schema DeleteTableInput
 */
export interface DeleteTableInput {
  /**
   * @schema DeleteTableInput#TableName
   */
  readonly tableName: string;

}

/**
 * @schema DeleteTableOutput
 */
export interface DeleteTableOutput {
  /**
   * @schema DeleteTableOutput#TableDescription
   */
  readonly tableDescription?: TableDescription;

}

/**
 * @schema DescribeBackupInput
 */
export interface DescribeBackupInput {
  /**
   * @schema DescribeBackupInput#BackupArn
   */
  readonly backupArn: string;

}

/**
 * @schema DescribeBackupOutput
 */
export interface DescribeBackupOutput {
  /**
   * @schema DescribeBackupOutput#BackupDescription
   */
  readonly backupDescription?: BackupDescription;

}

/**
 * @schema DescribeContinuousBackupsInput
 */
export interface DescribeContinuousBackupsInput {
  /**
   * @schema DescribeContinuousBackupsInput#TableName
   */
  readonly tableName: string;

}

/**
 * @schema DescribeContinuousBackupsOutput
 */
export interface DescribeContinuousBackupsOutput {
  /**
   * @schema DescribeContinuousBackupsOutput#ContinuousBackupsDescription
   */
  readonly continuousBackupsDescription?: ContinuousBackupsDescription;

}

/**
 * @schema DescribeContributorInsightsInput
 */
export interface DescribeContributorInsightsInput {
  /**
   * @schema DescribeContributorInsightsInput#TableName
   */
  readonly tableName: string;

  /**
   * @schema DescribeContributorInsightsInput#IndexName
   */
  readonly indexName?: string;

}

/**
 * @schema DescribeContributorInsightsOutput
 */
export interface DescribeContributorInsightsOutput {
  /**
   * @schema DescribeContributorInsightsOutput#TableName
   */
  readonly tableName?: string;

  /**
   * @schema DescribeContributorInsightsOutput#IndexName
   */
  readonly indexName?: string;

  /**
   * @schema DescribeContributorInsightsOutput#ContributorInsightsRuleList
   */
  readonly contributorInsightsRuleList?: string[];

  /**
   * @schema DescribeContributorInsightsOutput#ContributorInsightsStatus
   */
  readonly contributorInsightsStatus?: string;

  /**
   * @schema DescribeContributorInsightsOutput#LastUpdateDateTime
   */
  readonly lastUpdateDateTime?: string;

  /**
   * @schema DescribeContributorInsightsOutput#FailureException
   */
  readonly failureException?: FailureException;

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
 * @schema DescribeExportInput
 */
export interface DescribeExportInput {
  /**
   * @schema DescribeExportInput#ExportArn
   */
  readonly exportArn: string;

}

/**
 * @schema DescribeExportOutput
 */
export interface DescribeExportOutput {
  /**
   * @schema DescribeExportOutput#ExportDescription
   */
  readonly exportDescription?: ExportDescription;

}

/**
 * @schema DescribeGlobalTableInput
 */
export interface DescribeGlobalTableInput {
  /**
   * @schema DescribeGlobalTableInput#GlobalTableName
   */
  readonly globalTableName: string;

}

/**
 * @schema DescribeGlobalTableOutput
 */
export interface DescribeGlobalTableOutput {
  /**
   * @schema DescribeGlobalTableOutput#GlobalTableDescription
   */
  readonly globalTableDescription?: GlobalTableDescription;

}

/**
 * @schema DescribeGlobalTableSettingsInput
 */
export interface DescribeGlobalTableSettingsInput {
  /**
   * @schema DescribeGlobalTableSettingsInput#GlobalTableName
   */
  readonly globalTableName: string;

}

/**
 * @schema DescribeGlobalTableSettingsOutput
 */
export interface DescribeGlobalTableSettingsOutput {
  /**
   * @schema DescribeGlobalTableSettingsOutput#GlobalTableName
   */
  readonly globalTableName?: string;

  /**
   * @schema DescribeGlobalTableSettingsOutput#ReplicaSettings
   */
  readonly replicaSettings?: ReplicaSettingsDescription[];

}

/**
 * @schema DescribeKinesisStreamingDestinationInput
 */
export interface DescribeKinesisStreamingDestinationInput {
  /**
   * @schema DescribeKinesisStreamingDestinationInput#TableName
   */
  readonly tableName: string;

}

/**
 * @schema DescribeKinesisStreamingDestinationOutput
 */
export interface DescribeKinesisStreamingDestinationOutput {
  /**
   * @schema DescribeKinesisStreamingDestinationOutput#TableName
   */
  readonly tableName?: string;

  /**
   * @schema DescribeKinesisStreamingDestinationOutput#KinesisDataStreamDestinations
   */
  readonly kinesisDataStreamDestinations?: KinesisDataStreamDestination[];

}

/**
 * @schema DescribeLimitsInput
 */
export interface DescribeLimitsInput {
}

/**
 * @schema DescribeLimitsOutput
 */
export interface DescribeLimitsOutput {
  /**
   * @schema DescribeLimitsOutput#AccountMaxReadCapacityUnits
   */
  readonly accountMaxReadCapacityUnits?: number;

  /**
   * @schema DescribeLimitsOutput#AccountMaxWriteCapacityUnits
   */
  readonly accountMaxWriteCapacityUnits?: number;

  /**
   * @schema DescribeLimitsOutput#TableMaxReadCapacityUnits
   */
  readonly tableMaxReadCapacityUnits?: number;

  /**
   * @schema DescribeLimitsOutput#TableMaxWriteCapacityUnits
   */
  readonly tableMaxWriteCapacityUnits?: number;

}

/**
 * @schema DescribeTableInput
 */
export interface DescribeTableInput {
  /**
   * @schema DescribeTableInput#TableName
   */
  readonly tableName: string;

}

/**
 * @schema DescribeTableOutput
 */
export interface DescribeTableOutput {
  /**
   * @schema DescribeTableOutput#Table
   */
  readonly table?: TableDescription;

}

/**
 * @schema DescribeTableReplicaAutoScalingInput
 */
export interface DescribeTableReplicaAutoScalingInput {
  /**
   * @schema DescribeTableReplicaAutoScalingInput#TableName
   */
  readonly tableName: string;

}

/**
 * @schema DescribeTableReplicaAutoScalingOutput
 */
export interface DescribeTableReplicaAutoScalingOutput {
  /**
   * @schema DescribeTableReplicaAutoScalingOutput#TableAutoScalingDescription
   */
  readonly tableAutoScalingDescription?: TableAutoScalingDescription;

}

/**
 * @schema DescribeTimeToLiveInput
 */
export interface DescribeTimeToLiveInput {
  /**
   * @schema DescribeTimeToLiveInput#TableName
   */
  readonly tableName: string;

}

/**
 * @schema DescribeTimeToLiveOutput
 */
export interface DescribeTimeToLiveOutput {
  /**
   * @schema DescribeTimeToLiveOutput#TimeToLiveDescription
   */
  readonly timeToLiveDescription?: TimeToLiveDescription;

}

/**
 * @schema KinesisStreamingDestinationInput
 */
export interface KinesisStreamingDestinationInput {
  /**
   * @schema KinesisStreamingDestinationInput#TableName
   */
  readonly tableName: string;

  /**
   * @schema KinesisStreamingDestinationInput#StreamArn
   */
  readonly streamArn: string;

}

/**
 * @schema KinesisStreamingDestinationOutput
 */
export interface KinesisStreamingDestinationOutput {
  /**
   * @schema KinesisStreamingDestinationOutput#TableName
   */
  readonly tableName?: string;

  /**
   * @schema KinesisStreamingDestinationOutput#StreamArn
   */
  readonly streamArn?: string;

  /**
   * @schema KinesisStreamingDestinationOutput#DestinationStatus
   */
  readonly destinationStatus?: string;

}

/**
 * @schema ExecuteStatementInput
 */
export interface ExecuteStatementInput {
  /**
   * @schema ExecuteStatementInput#Statement
   */
  readonly statement: string;

  /**
   * @schema ExecuteStatementInput#Parameters
   */
  readonly parameters?: AttributeValue[];

  /**
   * @schema ExecuteStatementInput#ConsistentRead
   */
  readonly consistentRead?: boolean;

  /**
   * @schema ExecuteStatementInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ExecuteStatementOutput
 */
export interface ExecuteStatementOutput {
  /**
   * @schema ExecuteStatementOutput#Items
   */
  readonly items?: { [key: string]: AttributeValue }[];

  /**
   * @schema ExecuteStatementOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ExecuteTransactionInput
 */
export interface ExecuteTransactionInput {
  /**
   * @schema ExecuteTransactionInput#TransactStatements
   */
  readonly transactStatements: ParameterizedStatement[];

  /**
   * @schema ExecuteTransactionInput#ClientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * @schema ExecuteTransactionOutput
 */
export interface ExecuteTransactionOutput {
  /**
   * @schema ExecuteTransactionOutput#Responses
   */
  readonly responses?: ItemResponse[];

}

/**
 * @schema ExportTableToPointInTimeInput
 */
export interface ExportTableToPointInTimeInput {
  /**
   * @schema ExportTableToPointInTimeInput#TableArn
   */
  readonly tableArn: string;

  /**
   * @schema ExportTableToPointInTimeInput#ExportTime
   */
  readonly exportTime?: string;

  /**
   * @schema ExportTableToPointInTimeInput#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema ExportTableToPointInTimeInput#S3Bucket
   */
  readonly s3Bucket: string;

  /**
   * @schema ExportTableToPointInTimeInput#S3BucketOwner
   */
  readonly s3BucketOwner?: string;

  /**
   * @schema ExportTableToPointInTimeInput#S3Prefix
   */
  readonly s3Prefix?: string;

  /**
   * @schema ExportTableToPointInTimeInput#S3SseAlgorithm
   */
  readonly s3SseAlgorithm?: string;

  /**
   * @schema ExportTableToPointInTimeInput#S3SseKmsKeyId
   */
  readonly s3SseKmsKeyId?: string;

  /**
   * @schema ExportTableToPointInTimeInput#ExportFormat
   */
  readonly exportFormat?: string;

}

/**
 * @schema ExportTableToPointInTimeOutput
 */
export interface ExportTableToPointInTimeOutput {
  /**
   * @schema ExportTableToPointInTimeOutput#ExportDescription
   */
  readonly exportDescription?: ExportDescription;

}

/**
 * @schema GetItemInput
 */
export interface GetItemInput {
  /**
   * @schema GetItemInput#TableName
   */
  readonly tableName: string;

  /**
   * @schema GetItemInput#Key
   */
  readonly key: { [key: string]: AttributeValue };

  /**
   * @schema GetItemInput#AttributesToGet
   */
  readonly attributesToGet?: string[];

  /**
   * @schema GetItemInput#ConsistentRead
   */
  readonly consistentRead?: boolean;

  /**
   * @schema GetItemInput#ReturnConsumedCapacity
   */
  readonly returnConsumedCapacity?: string;

  /**
   * @schema GetItemInput#ProjectionExpression
   */
  readonly projectionExpression?: string;

  /**
   * @schema GetItemInput#ExpressionAttributeNames
   */
  readonly expressionAttributeNames?: { [key: string]: string };

}

/**
 * @schema GetItemOutput
 */
export interface GetItemOutput {
  /**
   * @schema GetItemOutput#Item
   */
  readonly item?: { [key: string]: AttributeValue };

  /**
   * @schema GetItemOutput#ConsumedCapacity
   */
  readonly consumedCapacity?: ConsumedCapacity;

}

/**
 * @schema ListBackupsInput
 */
export interface ListBackupsInput {
  /**
   * @schema ListBackupsInput#TableName
   */
  readonly tableName?: string;

  /**
   * @schema ListBackupsInput#Limit
   */
  readonly limit?: number;

  /**
   * @schema ListBackupsInput#TimeRangeLowerBound
   */
  readonly timeRangeLowerBound?: string;

  /**
   * @schema ListBackupsInput#TimeRangeUpperBound
   */
  readonly timeRangeUpperBound?: string;

  /**
   * @schema ListBackupsInput#ExclusiveStartBackupArn
   */
  readonly exclusiveStartBackupArn?: string;

  /**
   * @schema ListBackupsInput#BackupType
   */
  readonly backupType?: string;

}

/**
 * @schema ListBackupsOutput
 */
export interface ListBackupsOutput {
  /**
   * @schema ListBackupsOutput#BackupSummaries
   */
  readonly backupSummaries?: BackupSummary[];

  /**
   * @schema ListBackupsOutput#LastEvaluatedBackupArn
   */
  readonly lastEvaluatedBackupArn?: string;

}

/**
 * @schema ListContributorInsightsInput
 */
export interface ListContributorInsightsInput {
  /**
   * @schema ListContributorInsightsInput#TableName
   */
  readonly tableName?: string;

  /**
   * @schema ListContributorInsightsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListContributorInsightsInput#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListContributorInsightsOutput
 */
export interface ListContributorInsightsOutput {
  /**
   * @schema ListContributorInsightsOutput#ContributorInsightsSummaries
   */
  readonly contributorInsightsSummaries?: ContributorInsightsSummary[];

  /**
   * @schema ListContributorInsightsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListExportsInput
 */
export interface ListExportsInput {
  /**
   * @schema ListExportsInput#TableArn
   */
  readonly tableArn?: string;

  /**
   * @schema ListExportsInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListExportsInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListExportsOutput
 */
export interface ListExportsOutput {
  /**
   * @schema ListExportsOutput#ExportSummaries
   */
  readonly exportSummaries?: ExportSummary[];

  /**
   * @schema ListExportsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListGlobalTablesInput
 */
export interface ListGlobalTablesInput {
  /**
   * @schema ListGlobalTablesInput#ExclusiveStartGlobalTableName
   */
  readonly exclusiveStartGlobalTableName?: string;

  /**
   * @schema ListGlobalTablesInput#Limit
   */
  readonly limit?: number;

  /**
   * @schema ListGlobalTablesInput#RegionName
   */
  readonly regionName?: string;

}

/**
 * @schema ListGlobalTablesOutput
 */
export interface ListGlobalTablesOutput {
  /**
   * @schema ListGlobalTablesOutput#GlobalTables
   */
  readonly globalTables?: GlobalTable[];

  /**
   * @schema ListGlobalTablesOutput#LastEvaluatedGlobalTableName
   */
  readonly lastEvaluatedGlobalTableName?: string;

}

/**
 * @schema ListTablesInput
 */
export interface ListTablesInput {
  /**
   * @schema ListTablesInput#ExclusiveStartTableName
   */
  readonly exclusiveStartTableName?: string;

  /**
   * @schema ListTablesInput#Limit
   */
  readonly limit?: number;

}

/**
 * @schema ListTablesOutput
 */
export interface ListTablesOutput {
  /**
   * @schema ListTablesOutput#TableNames
   */
  readonly tableNames?: string[];

  /**
   * @schema ListTablesOutput#LastEvaluatedTableName
   */
  readonly lastEvaluatedTableName?: string;

}

/**
 * @schema ListTagsOfResourceInput
 */
export interface ListTagsOfResourceInput {
  /**
   * @schema ListTagsOfResourceInput#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema ListTagsOfResourceInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsOfResourceOutput
 */
export interface ListTagsOfResourceOutput {
  /**
   * @schema ListTagsOfResourceOutput#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema ListTagsOfResourceOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema PutItemInput
 */
export interface PutItemInput {
  /**
   * @schema PutItemInput#TableName
   */
  readonly tableName: string;

  /**
   * @schema PutItemInput#Item
   */
  readonly item: { [key: string]: AttributeValue };

  /**
   * @schema PutItemInput#Expected
   */
  readonly expected?: { [key: string]: ExpectedAttributeValue };

  /**
   * @schema PutItemInput#ReturnValues
   */
  readonly returnValues?: string;

  /**
   * @schema PutItemInput#ReturnConsumedCapacity
   */
  readonly returnConsumedCapacity?: string;

  /**
   * @schema PutItemInput#ReturnItemCollectionMetrics
   */
  readonly returnItemCollectionMetrics?: string;

  /**
   * @schema PutItemInput#ConditionalOperator
   */
  readonly conditionalOperator?: string;

  /**
   * @schema PutItemInput#ConditionExpression
   */
  readonly conditionExpression?: string;

  /**
   * @schema PutItemInput#ExpressionAttributeNames
   */
  readonly expressionAttributeNames?: { [key: string]: string };

  /**
   * @schema PutItemInput#ExpressionAttributeValues
   */
  readonly expressionAttributeValues?: { [key: string]: AttributeValue };

}

/**
 * @schema PutItemOutput
 */
export interface PutItemOutput {
  /**
   * @schema PutItemOutput#Attributes
   */
  readonly attributes?: { [key: string]: AttributeValue };

  /**
   * @schema PutItemOutput#ConsumedCapacity
   */
  readonly consumedCapacity?: ConsumedCapacity;

  /**
   * @schema PutItemOutput#ItemCollectionMetrics
   */
  readonly itemCollectionMetrics?: ItemCollectionMetrics;

}

/**
 * @schema QueryInput
 */
export interface QueryInput {
  /**
   * @schema QueryInput#TableName
   */
  readonly tableName: string;

  /**
   * @schema QueryInput#IndexName
   */
  readonly indexName?: string;

  /**
   * @schema QueryInput#Select
   */
  readonly select?: string;

  /**
   * @schema QueryInput#AttributesToGet
   */
  readonly attributesToGet?: string[];

  /**
   * @schema QueryInput#Limit
   */
  readonly limit?: number;

  /**
   * @schema QueryInput#ConsistentRead
   */
  readonly consistentRead?: boolean;

  /**
   * @schema QueryInput#KeyConditions
   */
  readonly keyConditions?: { [key: string]: Condition };

  /**
   * @schema QueryInput#QueryFilter
   */
  readonly queryFilter?: { [key: string]: Condition };

  /**
   * @schema QueryInput#ConditionalOperator
   */
  readonly conditionalOperator?: string;

  /**
   * @schema QueryInput#ScanIndexForward
   */
  readonly scanIndexForward?: boolean;

  /**
   * @schema QueryInput#ExclusiveStartKey
   */
  readonly exclusiveStartKey?: { [key: string]: AttributeValue };

  /**
   * @schema QueryInput#ReturnConsumedCapacity
   */
  readonly returnConsumedCapacity?: string;

  /**
   * @schema QueryInput#ProjectionExpression
   */
  readonly projectionExpression?: string;

  /**
   * @schema QueryInput#FilterExpression
   */
  readonly filterExpression?: string;

  /**
   * @schema QueryInput#KeyConditionExpression
   */
  readonly keyConditionExpression?: string;

  /**
   * @schema QueryInput#ExpressionAttributeNames
   */
  readonly expressionAttributeNames?: { [key: string]: string };

  /**
   * @schema QueryInput#ExpressionAttributeValues
   */
  readonly expressionAttributeValues?: { [key: string]: AttributeValue };

}

/**
 * @schema QueryOutput
 */
export interface QueryOutput {
  /**
   * @schema QueryOutput#Items
   */
  readonly items?: { [key: string]: AttributeValue }[];

  /**
   * @schema QueryOutput#Count
   */
  readonly count?: number;

  /**
   * @schema QueryOutput#ScannedCount
   */
  readonly scannedCount?: number;

  /**
   * @schema QueryOutput#LastEvaluatedKey
   */
  readonly lastEvaluatedKey?: { [key: string]: AttributeValue };

  /**
   * @schema QueryOutput#ConsumedCapacity
   */
  readonly consumedCapacity?: ConsumedCapacity;

}

/**
 * @schema RestoreTableFromBackupInput
 */
export interface RestoreTableFromBackupInput {
  /**
   * @schema RestoreTableFromBackupInput#TargetTableName
   */
  readonly targetTableName: string;

  /**
   * @schema RestoreTableFromBackupInput#BackupArn
   */
  readonly backupArn: string;

  /**
   * @schema RestoreTableFromBackupInput#BillingModeOverride
   */
  readonly billingModeOverride?: string;

  /**
   * @schema RestoreTableFromBackupInput#GlobalSecondaryIndexOverride
   */
  readonly globalSecondaryIndexOverride?: GlobalSecondaryIndex[];

  /**
   * @schema RestoreTableFromBackupInput#LocalSecondaryIndexOverride
   */
  readonly localSecondaryIndexOverride?: LocalSecondaryIndex[];

  /**
   * @schema RestoreTableFromBackupInput#ProvisionedThroughputOverride
   */
  readonly provisionedThroughputOverride?: ProvisionedThroughput;

  /**
   * @schema RestoreTableFromBackupInput#SSESpecificationOverride
   */
  readonly sseSpecificationOverride?: SseSpecification;

}

/**
 * @schema RestoreTableFromBackupOutput
 */
export interface RestoreTableFromBackupOutput {
  /**
   * @schema RestoreTableFromBackupOutput#TableDescription
   */
  readonly tableDescription?: TableDescription;

}

/**
 * @schema RestoreTableToPointInTimeInput
 */
export interface RestoreTableToPointInTimeInput {
  /**
   * @schema RestoreTableToPointInTimeInput#SourceTableArn
   */
  readonly sourceTableArn?: string;

  /**
   * @schema RestoreTableToPointInTimeInput#SourceTableName
   */
  readonly sourceTableName?: string;

  /**
   * @schema RestoreTableToPointInTimeInput#TargetTableName
   */
  readonly targetTableName: string;

  /**
   * @schema RestoreTableToPointInTimeInput#UseLatestRestorableTime
   */
  readonly useLatestRestorableTime?: boolean;

  /**
   * @schema RestoreTableToPointInTimeInput#RestoreDateTime
   */
  readonly restoreDateTime?: string;

  /**
   * @schema RestoreTableToPointInTimeInput#BillingModeOverride
   */
  readonly billingModeOverride?: string;

  /**
   * @schema RestoreTableToPointInTimeInput#GlobalSecondaryIndexOverride
   */
  readonly globalSecondaryIndexOverride?: GlobalSecondaryIndex[];

  /**
   * @schema RestoreTableToPointInTimeInput#LocalSecondaryIndexOverride
   */
  readonly localSecondaryIndexOverride?: LocalSecondaryIndex[];

  /**
   * @schema RestoreTableToPointInTimeInput#ProvisionedThroughputOverride
   */
  readonly provisionedThroughputOverride?: ProvisionedThroughput;

  /**
   * @schema RestoreTableToPointInTimeInput#SSESpecificationOverride
   */
  readonly sseSpecificationOverride?: SseSpecification;

}

/**
 * @schema RestoreTableToPointInTimeOutput
 */
export interface RestoreTableToPointInTimeOutput {
  /**
   * @schema RestoreTableToPointInTimeOutput#TableDescription
   */
  readonly tableDescription?: TableDescription;

}

/**
 * @schema ScanInput
 */
export interface ScanInput {
  /**
   * @schema ScanInput#TableName
   */
  readonly tableName: string;

  /**
   * @schema ScanInput#IndexName
   */
  readonly indexName?: string;

  /**
   * @schema ScanInput#AttributesToGet
   */
  readonly attributesToGet?: string[];

  /**
   * @schema ScanInput#Limit
   */
  readonly limit?: number;

  /**
   * @schema ScanInput#Select
   */
  readonly select?: string;

  /**
   * @schema ScanInput#ScanFilter
   */
  readonly scanFilter?: { [key: string]: Condition };

  /**
   * @schema ScanInput#ConditionalOperator
   */
  readonly conditionalOperator?: string;

  /**
   * @schema ScanInput#ExclusiveStartKey
   */
  readonly exclusiveStartKey?: { [key: string]: AttributeValue };

  /**
   * @schema ScanInput#ReturnConsumedCapacity
   */
  readonly returnConsumedCapacity?: string;

  /**
   * @schema ScanInput#TotalSegments
   */
  readonly totalSegments?: number;

  /**
   * @schema ScanInput#Segment
   */
  readonly segment?: number;

  /**
   * @schema ScanInput#ProjectionExpression
   */
  readonly projectionExpression?: string;

  /**
   * @schema ScanInput#FilterExpression
   */
  readonly filterExpression?: string;

  /**
   * @schema ScanInput#ExpressionAttributeNames
   */
  readonly expressionAttributeNames?: { [key: string]: string };

  /**
   * @schema ScanInput#ExpressionAttributeValues
   */
  readonly expressionAttributeValues?: { [key: string]: AttributeValue };

  /**
   * @schema ScanInput#ConsistentRead
   */
  readonly consistentRead?: boolean;

}

/**
 * @schema ScanOutput
 */
export interface ScanOutput {
  /**
   * @schema ScanOutput#Items
   */
  readonly items?: { [key: string]: AttributeValue }[];

  /**
   * @schema ScanOutput#Count
   */
  readonly count?: number;

  /**
   * @schema ScanOutput#ScannedCount
   */
  readonly scannedCount?: number;

  /**
   * @schema ScanOutput#LastEvaluatedKey
   */
  readonly lastEvaluatedKey?: { [key: string]: AttributeValue };

  /**
   * @schema ScanOutput#ConsumedCapacity
   */
  readonly consumedCapacity?: ConsumedCapacity;

}

/**
 * @schema TagResourceInput
 */
export interface TagResourceInput {
  /**
   * @schema TagResourceInput#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema TagResourceInput#Tags
   */
  readonly tags: Tag[];

}

/**
 * @schema TransactGetItemsInput
 */
export interface TransactGetItemsInput {
  /**
   * @schema TransactGetItemsInput#TransactItems
   */
  readonly transactItems: TransactGetItem[];

  /**
   * @schema TransactGetItemsInput#ReturnConsumedCapacity
   */
  readonly returnConsumedCapacity?: string;

}

/**
 * @schema TransactGetItemsOutput
 */
export interface TransactGetItemsOutput {
  /**
   * @schema TransactGetItemsOutput#ConsumedCapacity
   */
  readonly consumedCapacity?: ConsumedCapacity[];

  /**
   * @schema TransactGetItemsOutput#Responses
   */
  readonly responses?: ItemResponse[];

}

/**
 * @schema TransactWriteItemsInput
 */
export interface TransactWriteItemsInput {
  /**
   * @schema TransactWriteItemsInput#TransactItems
   */
  readonly transactItems: TransactWriteItem[];

  /**
   * @schema TransactWriteItemsInput#ReturnConsumedCapacity
   */
  readonly returnConsumedCapacity?: string;

  /**
   * @schema TransactWriteItemsInput#ReturnItemCollectionMetrics
   */
  readonly returnItemCollectionMetrics?: string;

  /**
   * @schema TransactWriteItemsInput#ClientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * @schema TransactWriteItemsOutput
 */
export interface TransactWriteItemsOutput {
  /**
   * @schema TransactWriteItemsOutput#ConsumedCapacity
   */
  readonly consumedCapacity?: ConsumedCapacity[];

  /**
   * @schema TransactWriteItemsOutput#ItemCollectionMetrics
   */
  readonly itemCollectionMetrics?: { [key: string]: ItemCollectionMetrics[] };

}

/**
 * @schema UntagResourceInput
 */
export interface UntagResourceInput {
  /**
   * @schema UntagResourceInput#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema UntagResourceInput#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UpdateContinuousBackupsInput
 */
export interface UpdateContinuousBackupsInput {
  /**
   * @schema UpdateContinuousBackupsInput#TableName
   */
  readonly tableName: string;

  /**
   * @schema UpdateContinuousBackupsInput#PointInTimeRecoverySpecification
   */
  readonly pointInTimeRecoverySpecification: PointInTimeRecoverySpecification;

}

/**
 * @schema UpdateContinuousBackupsOutput
 */
export interface UpdateContinuousBackupsOutput {
  /**
   * @schema UpdateContinuousBackupsOutput#ContinuousBackupsDescription
   */
  readonly continuousBackupsDescription?: ContinuousBackupsDescription;

}

/**
 * @schema UpdateContributorInsightsInput
 */
export interface UpdateContributorInsightsInput {
  /**
   * @schema UpdateContributorInsightsInput#TableName
   */
  readonly tableName: string;

  /**
   * @schema UpdateContributorInsightsInput#IndexName
   */
  readonly indexName?: string;

  /**
   * @schema UpdateContributorInsightsInput#ContributorInsightsAction
   */
  readonly contributorInsightsAction: string;

}

/**
 * @schema UpdateContributorInsightsOutput
 */
export interface UpdateContributorInsightsOutput {
  /**
   * @schema UpdateContributorInsightsOutput#TableName
   */
  readonly tableName?: string;

  /**
   * @schema UpdateContributorInsightsOutput#IndexName
   */
  readonly indexName?: string;

  /**
   * @schema UpdateContributorInsightsOutput#ContributorInsightsStatus
   */
  readonly contributorInsightsStatus?: string;

}

/**
 * @schema UpdateGlobalTableInput
 */
export interface UpdateGlobalTableInput {
  /**
   * @schema UpdateGlobalTableInput#GlobalTableName
   */
  readonly globalTableName: string;

  /**
   * @schema UpdateGlobalTableInput#ReplicaUpdates
   */
  readonly replicaUpdates: ReplicaUpdate[];

}

/**
 * @schema UpdateGlobalTableOutput
 */
export interface UpdateGlobalTableOutput {
  /**
   * @schema UpdateGlobalTableOutput#GlobalTableDescription
   */
  readonly globalTableDescription?: GlobalTableDescription;

}

/**
 * @schema UpdateGlobalTableSettingsInput
 */
export interface UpdateGlobalTableSettingsInput {
  /**
   * @schema UpdateGlobalTableSettingsInput#GlobalTableName
   */
  readonly globalTableName: string;

  /**
   * @schema UpdateGlobalTableSettingsInput#GlobalTableBillingMode
   */
  readonly globalTableBillingMode?: string;

  /**
   * @schema UpdateGlobalTableSettingsInput#GlobalTableProvisionedWriteCapacityUnits
   */
  readonly globalTableProvisionedWriteCapacityUnits?: number;

  /**
   * @schema UpdateGlobalTableSettingsInput#GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate
   */
  readonly globalTableProvisionedWriteCapacityAutoScalingSettingsUpdate?: AutoScalingSettingsUpdate;

  /**
   * @schema UpdateGlobalTableSettingsInput#GlobalTableGlobalSecondaryIndexSettingsUpdate
   */
  readonly globalTableGlobalSecondaryIndexSettingsUpdate?: GlobalTableGlobalSecondaryIndexSettingsUpdate[];

  /**
   * @schema UpdateGlobalTableSettingsInput#ReplicaSettingsUpdate
   */
  readonly replicaSettingsUpdate?: ReplicaSettingsUpdate[];

}

/**
 * @schema UpdateGlobalTableSettingsOutput
 */
export interface UpdateGlobalTableSettingsOutput {
  /**
   * @schema UpdateGlobalTableSettingsOutput#GlobalTableName
   */
  readonly globalTableName?: string;

  /**
   * @schema UpdateGlobalTableSettingsOutput#ReplicaSettings
   */
  readonly replicaSettings?: ReplicaSettingsDescription[];

}

/**
 * @schema UpdateItemInput
 */
export interface UpdateItemInput {
  /**
   * @schema UpdateItemInput#TableName
   */
  readonly tableName: string;

  /**
   * @schema UpdateItemInput#Key
   */
  readonly key: { [key: string]: AttributeValue };

  /**
   * @schema UpdateItemInput#AttributeUpdates
   */
  readonly attributeUpdates?: { [key: string]: AttributeValueUpdate };

  /**
   * @schema UpdateItemInput#Expected
   */
  readonly expected?: { [key: string]: ExpectedAttributeValue };

  /**
   * @schema UpdateItemInput#ConditionalOperator
   */
  readonly conditionalOperator?: string;

  /**
   * @schema UpdateItemInput#ReturnValues
   */
  readonly returnValues?: string;

  /**
   * @schema UpdateItemInput#ReturnConsumedCapacity
   */
  readonly returnConsumedCapacity?: string;

  /**
   * @schema UpdateItemInput#ReturnItemCollectionMetrics
   */
  readonly returnItemCollectionMetrics?: string;

  /**
   * @schema UpdateItemInput#UpdateExpression
   */
  readonly updateExpression?: string;

  /**
   * @schema UpdateItemInput#ConditionExpression
   */
  readonly conditionExpression?: string;

  /**
   * @schema UpdateItemInput#ExpressionAttributeNames
   */
  readonly expressionAttributeNames?: { [key: string]: string };

  /**
   * @schema UpdateItemInput#ExpressionAttributeValues
   */
  readonly expressionAttributeValues?: { [key: string]: AttributeValue };

}

/**
 * @schema UpdateItemOutput
 */
export interface UpdateItemOutput {
  /**
   * @schema UpdateItemOutput#Attributes
   */
  readonly attributes?: { [key: string]: AttributeValue };

  /**
   * @schema UpdateItemOutput#ConsumedCapacity
   */
  readonly consumedCapacity?: ConsumedCapacity;

  /**
   * @schema UpdateItemOutput#ItemCollectionMetrics
   */
  readonly itemCollectionMetrics?: ItemCollectionMetrics;

}

/**
 * @schema UpdateTableInput
 */
export interface UpdateTableInput {
  /**
   * @schema UpdateTableInput#AttributeDefinitions
   */
  readonly attributeDefinitions?: AttributeDefinition[];

  /**
   * @schema UpdateTableInput#TableName
   */
  readonly tableName: string;

  /**
   * @schema UpdateTableInput#BillingMode
   */
  readonly billingMode?: string;

  /**
   * @schema UpdateTableInput#ProvisionedThroughput
   */
  readonly provisionedThroughput?: ProvisionedThroughput;

  /**
   * @schema UpdateTableInput#GlobalSecondaryIndexUpdates
   */
  readonly globalSecondaryIndexUpdates?: GlobalSecondaryIndexUpdate[];

  /**
   * @schema UpdateTableInput#StreamSpecification
   */
  readonly streamSpecification?: StreamSpecification;

  /**
   * @schema UpdateTableInput#SSESpecification
   */
  readonly sseSpecification?: SseSpecification;

  /**
   * @schema UpdateTableInput#ReplicaUpdates
   */
  readonly replicaUpdates?: ReplicationGroupUpdate[];

}

/**
 * @schema UpdateTableOutput
 */
export interface UpdateTableOutput {
  /**
   * @schema UpdateTableOutput#TableDescription
   */
  readonly tableDescription?: TableDescription;

}

/**
 * @schema UpdateTableReplicaAutoScalingInput
 */
export interface UpdateTableReplicaAutoScalingInput {
  /**
   * @schema UpdateTableReplicaAutoScalingInput#GlobalSecondaryIndexUpdates
   */
  readonly globalSecondaryIndexUpdates?: GlobalSecondaryIndexAutoScalingUpdate[];

  /**
   * @schema UpdateTableReplicaAutoScalingInput#TableName
   */
  readonly tableName: string;

  /**
   * @schema UpdateTableReplicaAutoScalingInput#ProvisionedWriteCapacityAutoScalingUpdate
   */
  readonly provisionedWriteCapacityAutoScalingUpdate?: AutoScalingSettingsUpdate;

  /**
   * @schema UpdateTableReplicaAutoScalingInput#ReplicaUpdates
   */
  readonly replicaUpdates?: ReplicaAutoScalingUpdate[];

}

/**
 * @schema UpdateTableReplicaAutoScalingOutput
 */
export interface UpdateTableReplicaAutoScalingOutput {
  /**
   * @schema UpdateTableReplicaAutoScalingOutput#TableAutoScalingDescription
   */
  readonly tableAutoScalingDescription?: TableAutoScalingDescription;

}

/**
 * @schema UpdateTimeToLiveInput
 */
export interface UpdateTimeToLiveInput {
  /**
   * @schema UpdateTimeToLiveInput#TableName
   */
  readonly tableName: string;

  /**
   * @schema UpdateTimeToLiveInput#TimeToLiveSpecification
   */
  readonly timeToLiveSpecification: TimeToLiveSpecification;

}

/**
 * @schema UpdateTimeToLiveOutput
 */
export interface UpdateTimeToLiveOutput {
  /**
   * @schema UpdateTimeToLiveOutput#TimeToLiveSpecification
   */
  readonly timeToLiveSpecification?: TimeToLiveSpecification;

}

/**
 * @schema BatchStatementRequest
 */
export interface BatchStatementRequest {
  /**
   * @schema BatchStatementRequest#Statement
   */
  readonly statement: string;

  /**
   * @schema BatchStatementRequest#Parameters
   */
  readonly parameters?: AttributeValue[];

  /**
   * @schema BatchStatementRequest#ConsistentRead
   */
  readonly consistentRead?: boolean;

}

/**
 * @schema BatchStatementResponse
 */
export interface BatchStatementResponse {
  /**
   * @schema BatchStatementResponse#Error
   */
  readonly error?: BatchStatementError;

  /**
   * @schema BatchStatementResponse#TableName
   */
  readonly tableName?: string;

  /**
   * @schema BatchStatementResponse#Item
   */
  readonly item?: { [key: string]: AttributeValue };

}

/**
 * @schema KeysAndAttributes
 */
export interface KeysAndAttributes {
  /**
   * @schema KeysAndAttributes#Keys
   */
  readonly keys: { [key: string]: AttributeValue }[];

  /**
   * @schema KeysAndAttributes#AttributesToGet
   */
  readonly attributesToGet?: string[];

  /**
   * @schema KeysAndAttributes#ConsistentRead
   */
  readonly consistentRead?: boolean;

  /**
   * @schema KeysAndAttributes#ProjectionExpression
   */
  readonly projectionExpression?: string;

  /**
   * @schema KeysAndAttributes#ExpressionAttributeNames
   */
  readonly expressionAttributeNames?: { [key: string]: string };

}

/**
 * @schema AttributeValue
 */
export interface AttributeValue {
  /**
   * @schema AttributeValue#S
   */
  readonly s?: string;

  /**
   * @schema AttributeValue#N
   */
  readonly n?: string;

  /**
   * @schema AttributeValue#B
   */
  readonly b?: any;

  /**
   * @schema AttributeValue#SS
   */
  readonly ss?: string[];

  /**
   * @schema AttributeValue#NS
   */
  readonly ns?: string[];

  /**
   * @schema AttributeValue#BS
   */
  readonly bs?: any[];

  /**
   * @schema AttributeValue#M
   */
  readonly m?: { [key: string]: AttributeValue };

  /**
   * @schema AttributeValue#L
   */
  readonly l?: AttributeValue[];

  /**
   * @schema AttributeValue#NULL
   */
  readonly null?: boolean;

  /**
   * @schema AttributeValue#BOOL
   */
  readonly bool?: boolean;

}

/**
 * @schema ConsumedCapacity
 */
export interface ConsumedCapacity {
  /**
   * @schema ConsumedCapacity#TableName
   */
  readonly tableName?: string;

  /**
   * @schema ConsumedCapacity#CapacityUnits
   */
  readonly capacityUnits?: number;

  /**
   * @schema ConsumedCapacity#ReadCapacityUnits
   */
  readonly readCapacityUnits?: number;

  /**
   * @schema ConsumedCapacity#WriteCapacityUnits
   */
  readonly writeCapacityUnits?: number;

  /**
   * @schema ConsumedCapacity#Table
   */
  readonly table?: Capacity;

  /**
   * @schema ConsumedCapacity#LocalSecondaryIndexes
   */
  readonly localSecondaryIndexes?: { [key: string]: Capacity };

  /**
   * @schema ConsumedCapacity#GlobalSecondaryIndexes
   */
  readonly globalSecondaryIndexes?: { [key: string]: Capacity };

}

/**
 * @schema WriteRequest
 */
export interface WriteRequest {
  /**
   * @schema WriteRequest#PutRequest
   */
  readonly putRequest?: PutRequest;

  /**
   * @schema WriteRequest#DeleteRequest
   */
  readonly deleteRequest?: DeleteRequest;

}

/**
 * @schema ItemCollectionMetrics
 */
export interface ItemCollectionMetrics {
  /**
   * @schema ItemCollectionMetrics#ItemCollectionKey
   */
  readonly itemCollectionKey?: { [key: string]: AttributeValue };

  /**
   * @schema ItemCollectionMetrics#SizeEstimateRangeGB
   */
  readonly sizeEstimateRangeGb?: number[];

}

/**
 * @schema BackupDetails
 */
export interface BackupDetails {
  /**
   * @schema BackupDetails#BackupArn
   */
  readonly backupArn: string;

  /**
   * @schema BackupDetails#BackupName
   */
  readonly backupName: string;

  /**
   * @schema BackupDetails#BackupSizeBytes
   */
  readonly backupSizeBytes?: number;

  /**
   * @schema BackupDetails#BackupStatus
   */
  readonly backupStatus: string;

  /**
   * @schema BackupDetails#BackupType
   */
  readonly backupType: string;

  /**
   * @schema BackupDetails#BackupCreationDateTime
   */
  readonly backupCreationDateTime: string;

  /**
   * @schema BackupDetails#BackupExpiryDateTime
   */
  readonly backupExpiryDateTime?: string;

}

/**
 * @schema Replica
 */
export interface Replica {
  /**
   * @schema Replica#RegionName
   */
  readonly regionName?: string;

}

/**
 * @schema GlobalTableDescription
 */
export interface GlobalTableDescription {
  /**
   * @schema GlobalTableDescription#ReplicationGroup
   */
  readonly replicationGroup?: ReplicaDescription[];

  /**
   * @schema GlobalTableDescription#GlobalTableArn
   */
  readonly globalTableArn?: string;

  /**
   * @schema GlobalTableDescription#CreationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema GlobalTableDescription#GlobalTableStatus
   */
  readonly globalTableStatus?: string;

  /**
   * @schema GlobalTableDescription#GlobalTableName
   */
  readonly globalTableName?: string;

}

/**
 * @schema AttributeDefinition
 */
export interface AttributeDefinition {
  /**
   * @schema AttributeDefinition#AttributeName
   */
  readonly attributeName: string;

  /**
   * @schema AttributeDefinition#AttributeType
   */
  readonly attributeType: string;

}

/**
 * @schema KeySchemaElement
 */
export interface KeySchemaElement {
  /**
   * @schema KeySchemaElement#AttributeName
   */
  readonly attributeName: string;

  /**
   * @schema KeySchemaElement#KeyType
   */
  readonly keyType: string;

}

/**
 * @schema LocalSecondaryIndex
 */
export interface LocalSecondaryIndex {
  /**
   * @schema LocalSecondaryIndex#IndexName
   */
  readonly indexName: string;

  /**
   * @schema LocalSecondaryIndex#KeySchema
   */
  readonly keySchema: KeySchemaElement[];

  /**
   * @schema LocalSecondaryIndex#Projection
   */
  readonly projection: Projection;

}

/**
 * @schema GlobalSecondaryIndex
 */
export interface GlobalSecondaryIndex {
  /**
   * @schema GlobalSecondaryIndex#IndexName
   */
  readonly indexName: string;

  /**
   * @schema GlobalSecondaryIndex#KeySchema
   */
  readonly keySchema: KeySchemaElement[];

  /**
   * @schema GlobalSecondaryIndex#Projection
   */
  readonly projection: Projection;

  /**
   * @schema GlobalSecondaryIndex#ProvisionedThroughput
   */
  readonly provisionedThroughput?: ProvisionedThroughput;

}

/**
 * @schema ProvisionedThroughput
 */
export interface ProvisionedThroughput {
  /**
   * @schema ProvisionedThroughput#ReadCapacityUnits
   */
  readonly readCapacityUnits: number;

  /**
   * @schema ProvisionedThroughput#WriteCapacityUnits
   */
  readonly writeCapacityUnits: number;

}

/**
 * @schema StreamSpecification
 */
export interface StreamSpecification {
  /**
   * @schema StreamSpecification#StreamEnabled
   */
  readonly streamEnabled: boolean;

  /**
   * @schema StreamSpecification#StreamViewType
   */
  readonly streamViewType?: string;

}

/**
 * @schema SseSpecification
 */
export interface SseSpecification {
  /**
   * @schema SseSpecification#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema SseSpecification#SSEType
   */
  readonly sseType?: string;

  /**
   * @schema SseSpecification#KMSMasterKeyId
   */
  readonly kmsMasterKeyId?: string;

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
 * @schema TableDescription
 */
export interface TableDescription {
  /**
   * @schema TableDescription#AttributeDefinitions
   */
  readonly attributeDefinitions?: AttributeDefinition[];

  /**
   * @schema TableDescription#TableName
   */
  readonly tableName?: string;

  /**
   * @schema TableDescription#KeySchema
   */
  readonly keySchema?: KeySchemaElement[];

  /**
   * @schema TableDescription#TableStatus
   */
  readonly tableStatus?: string;

  /**
   * @schema TableDescription#CreationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema TableDescription#ProvisionedThroughput
   */
  readonly provisionedThroughput?: ProvisionedThroughputDescription;

  /**
   * @schema TableDescription#TableSizeBytes
   */
  readonly tableSizeBytes?: number;

  /**
   * @schema TableDescription#ItemCount
   */
  readonly itemCount?: number;

  /**
   * @schema TableDescription#TableArn
   */
  readonly tableArn?: string;

  /**
   * @schema TableDescription#TableId
   */
  readonly tableId?: string;

  /**
   * @schema TableDescription#BillingModeSummary
   */
  readonly billingModeSummary?: BillingModeSummary;

  /**
   * @schema TableDescription#LocalSecondaryIndexes
   */
  readonly localSecondaryIndexes?: LocalSecondaryIndexDescription[];

  /**
   * @schema TableDescription#GlobalSecondaryIndexes
   */
  readonly globalSecondaryIndexes?: GlobalSecondaryIndexDescription[];

  /**
   * @schema TableDescription#StreamSpecification
   */
  readonly streamSpecification?: StreamSpecification;

  /**
   * @schema TableDescription#LatestStreamLabel
   */
  readonly latestStreamLabel?: string;

  /**
   * @schema TableDescription#LatestStreamArn
   */
  readonly latestStreamArn?: string;

  /**
   * @schema TableDescription#GlobalTableVersion
   */
  readonly globalTableVersion?: string;

  /**
   * @schema TableDescription#Replicas
   */
  readonly replicas?: ReplicaDescription[];

  /**
   * @schema TableDescription#RestoreSummary
   */
  readonly restoreSummary?: RestoreSummary;

  /**
   * @schema TableDescription#SSEDescription
   */
  readonly sseDescription?: SseDescription;

  /**
   * @schema TableDescription#ArchivalSummary
   */
  readonly archivalSummary?: ArchivalSummary;

}

/**
 * @schema BackupDescription
 */
export interface BackupDescription {
  /**
   * @schema BackupDescription#BackupDetails
   */
  readonly backupDetails?: BackupDetails;

  /**
   * @schema BackupDescription#SourceTableDetails
   */
  readonly sourceTableDetails?: SourceTableDetails;

  /**
   * @schema BackupDescription#SourceTableFeatureDetails
   */
  readonly sourceTableFeatureDetails?: SourceTableFeatureDetails;

}

/**
 * @schema ExpectedAttributeValue
 */
export interface ExpectedAttributeValue {
  /**
   * @schema ExpectedAttributeValue#Value
   */
  readonly value?: AttributeValue;

  /**
   * @schema ExpectedAttributeValue#Exists
   */
  readonly exists?: boolean;

  /**
   * @schema ExpectedAttributeValue#ComparisonOperator
   */
  readonly comparisonOperator?: string;

  /**
   * @schema ExpectedAttributeValue#AttributeValueList
   */
  readonly attributeValueList?: AttributeValue[];

}

/**
 * @schema ContinuousBackupsDescription
 */
export interface ContinuousBackupsDescription {
  /**
   * @schema ContinuousBackupsDescription#ContinuousBackupsStatus
   */
  readonly continuousBackupsStatus: string;

  /**
   * @schema ContinuousBackupsDescription#PointInTimeRecoveryDescription
   */
  readonly pointInTimeRecoveryDescription?: PointInTimeRecoveryDescription;

}

/**
 * @schema FailureException
 */
export interface FailureException {
  /**
   * @schema FailureException#ExceptionName
   */
  readonly exceptionName?: string;

  /**
   * @schema FailureException#ExceptionDescription
   */
  readonly exceptionDescription?: string;

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
 * @schema ExportDescription
 */
export interface ExportDescription {
  /**
   * @schema ExportDescription#ExportArn
   */
  readonly exportArn?: string;

  /**
   * @schema ExportDescription#ExportStatus
   */
  readonly exportStatus?: string;

  /**
   * @schema ExportDescription#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema ExportDescription#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema ExportDescription#ExportManifest
   */
  readonly exportManifest?: string;

  /**
   * @schema ExportDescription#TableArn
   */
  readonly tableArn?: string;

  /**
   * @schema ExportDescription#TableId
   */
  readonly tableId?: string;

  /**
   * @schema ExportDescription#ExportTime
   */
  readonly exportTime?: string;

  /**
   * @schema ExportDescription#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema ExportDescription#S3Bucket
   */
  readonly s3Bucket?: string;

  /**
   * @schema ExportDescription#S3BucketOwner
   */
  readonly s3BucketOwner?: string;

  /**
   * @schema ExportDescription#S3Prefix
   */
  readonly s3Prefix?: string;

  /**
   * @schema ExportDescription#S3SseAlgorithm
   */
  readonly s3SseAlgorithm?: string;

  /**
   * @schema ExportDescription#S3SseKmsKeyId
   */
  readonly s3SseKmsKeyId?: string;

  /**
   * @schema ExportDescription#FailureCode
   */
  readonly failureCode?: string;

  /**
   * @schema ExportDescription#FailureMessage
   */
  readonly failureMessage?: string;

  /**
   * @schema ExportDescription#ExportFormat
   */
  readonly exportFormat?: string;

  /**
   * @schema ExportDescription#BilledSizeBytes
   */
  readonly billedSizeBytes?: number;

  /**
   * @schema ExportDescription#ItemCount
   */
  readonly itemCount?: number;

}

/**
 * @schema ReplicaSettingsDescription
 */
export interface ReplicaSettingsDescription {
  /**
   * @schema ReplicaSettingsDescription#RegionName
   */
  readonly regionName: string;

  /**
   * @schema ReplicaSettingsDescription#ReplicaStatus
   */
  readonly replicaStatus?: string;

  /**
   * @schema ReplicaSettingsDescription#ReplicaBillingModeSummary
   */
  readonly replicaBillingModeSummary?: BillingModeSummary;

  /**
   * @schema ReplicaSettingsDescription#ReplicaProvisionedReadCapacityUnits
   */
  readonly replicaProvisionedReadCapacityUnits?: number;

  /**
   * @schema ReplicaSettingsDescription#ReplicaProvisionedReadCapacityAutoScalingSettings
   */
  readonly replicaProvisionedReadCapacityAutoScalingSettings?: AutoScalingSettingsDescription;

  /**
   * @schema ReplicaSettingsDescription#ReplicaProvisionedWriteCapacityUnits
   */
  readonly replicaProvisionedWriteCapacityUnits?: number;

  /**
   * @schema ReplicaSettingsDescription#ReplicaProvisionedWriteCapacityAutoScalingSettings
   */
  readonly replicaProvisionedWriteCapacityAutoScalingSettings?: AutoScalingSettingsDescription;

  /**
   * @schema ReplicaSettingsDescription#ReplicaGlobalSecondaryIndexSettings
   */
  readonly replicaGlobalSecondaryIndexSettings?: ReplicaGlobalSecondaryIndexSettingsDescription[];

}

/**
 * @schema KinesisDataStreamDestination
 */
export interface KinesisDataStreamDestination {
  /**
   * @schema KinesisDataStreamDestination#StreamArn
   */
  readonly streamArn?: string;

  /**
   * @schema KinesisDataStreamDestination#DestinationStatus
   */
  readonly destinationStatus?: string;

  /**
   * @schema KinesisDataStreamDestination#DestinationStatusDescription
   */
  readonly destinationStatusDescription?: string;

}

/**
 * @schema TableAutoScalingDescription
 */
export interface TableAutoScalingDescription {
  /**
   * @schema TableAutoScalingDescription#TableName
   */
  readonly tableName?: string;

  /**
   * @schema TableAutoScalingDescription#TableStatus
   */
  readonly tableStatus?: string;

  /**
   * @schema TableAutoScalingDescription#Replicas
   */
  readonly replicas?: ReplicaAutoScalingDescription[];

}

/**
 * @schema TimeToLiveDescription
 */
export interface TimeToLiveDescription {
  /**
   * @schema TimeToLiveDescription#TimeToLiveStatus
   */
  readonly timeToLiveStatus?: string;

  /**
   * @schema TimeToLiveDescription#AttributeName
   */
  readonly attributeName?: string;

}

/**
 * @schema ParameterizedStatement
 */
export interface ParameterizedStatement {
  /**
   * @schema ParameterizedStatement#Statement
   */
  readonly statement: string;

  /**
   * @schema ParameterizedStatement#Parameters
   */
  readonly parameters?: AttributeValue[];

}

/**
 * @schema ItemResponse
 */
export interface ItemResponse {
  /**
   * @schema ItemResponse#Item
   */
  readonly item?: { [key: string]: AttributeValue };

}

/**
 * @schema BackupSummary
 */
export interface BackupSummary {
  /**
   * @schema BackupSummary#TableName
   */
  readonly tableName?: string;

  /**
   * @schema BackupSummary#TableId
   */
  readonly tableId?: string;

  /**
   * @schema BackupSummary#TableArn
   */
  readonly tableArn?: string;

  /**
   * @schema BackupSummary#BackupArn
   */
  readonly backupArn?: string;

  /**
   * @schema BackupSummary#BackupName
   */
  readonly backupName?: string;

  /**
   * @schema BackupSummary#BackupCreationDateTime
   */
  readonly backupCreationDateTime?: string;

  /**
   * @schema BackupSummary#BackupExpiryDateTime
   */
  readonly backupExpiryDateTime?: string;

  /**
   * @schema BackupSummary#BackupStatus
   */
  readonly backupStatus?: string;

  /**
   * @schema BackupSummary#BackupType
   */
  readonly backupType?: string;

  /**
   * @schema BackupSummary#BackupSizeBytes
   */
  readonly backupSizeBytes?: number;

}

/**
 * @schema ContributorInsightsSummary
 */
export interface ContributorInsightsSummary {
  /**
   * @schema ContributorInsightsSummary#TableName
   */
  readonly tableName?: string;

  /**
   * @schema ContributorInsightsSummary#IndexName
   */
  readonly indexName?: string;

  /**
   * @schema ContributorInsightsSummary#ContributorInsightsStatus
   */
  readonly contributorInsightsStatus?: string;

}

/**
 * @schema ExportSummary
 */
export interface ExportSummary {
  /**
   * @schema ExportSummary#ExportArn
   */
  readonly exportArn?: string;

  /**
   * @schema ExportSummary#ExportStatus
   */
  readonly exportStatus?: string;

}

/**
 * @schema GlobalTable
 */
export interface GlobalTable {
  /**
   * @schema GlobalTable#GlobalTableName
   */
  readonly globalTableName?: string;

  /**
   * @schema GlobalTable#ReplicationGroup
   */
  readonly replicationGroup?: Replica[];

}

/**
 * @schema Condition
 */
export interface Condition {
  /**
   * @schema Condition#AttributeValueList
   */
  readonly attributeValueList?: AttributeValue[];

  /**
   * @schema Condition#ComparisonOperator
   */
  readonly comparisonOperator: string;

}

/**
 * @schema TransactGetItem
 */
export interface TransactGetItem {
  /**
   * @schema TransactGetItem#Get
   */
  readonly get: Get;

}

/**
 * @schema TransactWriteItem
 */
export interface TransactWriteItem {
  /**
   * @schema TransactWriteItem#ConditionCheck
   */
  readonly conditionCheck?: ConditionCheck;

  /**
   * @schema TransactWriteItem#Put
   */
  readonly put?: Put;

  /**
   * @schema TransactWriteItem#Delete
   */
  readonly delete?: Delete;

  /**
   * @schema TransactWriteItem#Update
   */
  readonly update?: Update;

}

/**
 * @schema PointInTimeRecoverySpecification
 */
export interface PointInTimeRecoverySpecification {
  /**
   * @schema PointInTimeRecoverySpecification#PointInTimeRecoveryEnabled
   */
  readonly pointInTimeRecoveryEnabled: boolean;

}

/**
 * @schema ReplicaUpdate
 */
export interface ReplicaUpdate {
  /**
   * @schema ReplicaUpdate#Create
   */
  readonly create?: CreateReplicaAction;

  /**
   * @schema ReplicaUpdate#Delete
   */
  readonly delete?: DeleteReplicaAction;

}

/**
 * @schema AutoScalingSettingsUpdate
 */
export interface AutoScalingSettingsUpdate {
  /**
   * @schema AutoScalingSettingsUpdate#MinimumUnits
   */
  readonly minimumUnits?: number;

  /**
   * @schema AutoScalingSettingsUpdate#MaximumUnits
   */
  readonly maximumUnits?: number;

  /**
   * @schema AutoScalingSettingsUpdate#AutoScalingDisabled
   */
  readonly autoScalingDisabled?: boolean;

  /**
   * @schema AutoScalingSettingsUpdate#AutoScalingRoleArn
   */
  readonly autoScalingRoleArn?: string;

  /**
   * @schema AutoScalingSettingsUpdate#ScalingPolicyUpdate
   */
  readonly scalingPolicyUpdate?: AutoScalingPolicyUpdate;

}

/**
 * @schema GlobalTableGlobalSecondaryIndexSettingsUpdate
 */
export interface GlobalTableGlobalSecondaryIndexSettingsUpdate {
  /**
   * @schema GlobalTableGlobalSecondaryIndexSettingsUpdate#IndexName
   */
  readonly indexName: string;

  /**
   * @schema GlobalTableGlobalSecondaryIndexSettingsUpdate#ProvisionedWriteCapacityUnits
   */
  readonly provisionedWriteCapacityUnits?: number;

  /**
   * @schema GlobalTableGlobalSecondaryIndexSettingsUpdate#ProvisionedWriteCapacityAutoScalingSettingsUpdate
   */
  readonly provisionedWriteCapacityAutoScalingSettingsUpdate?: AutoScalingSettingsUpdate;

}

/**
 * @schema ReplicaSettingsUpdate
 */
export interface ReplicaSettingsUpdate {
  /**
   * @schema ReplicaSettingsUpdate#RegionName
   */
  readonly regionName: string;

  /**
   * @schema ReplicaSettingsUpdate#ReplicaProvisionedReadCapacityUnits
   */
  readonly replicaProvisionedReadCapacityUnits?: number;

  /**
   * @schema ReplicaSettingsUpdate#ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate
   */
  readonly replicaProvisionedReadCapacityAutoScalingSettingsUpdate?: AutoScalingSettingsUpdate;

  /**
   * @schema ReplicaSettingsUpdate#ReplicaGlobalSecondaryIndexSettingsUpdate
   */
  readonly replicaGlobalSecondaryIndexSettingsUpdate?: ReplicaGlobalSecondaryIndexSettingsUpdate[];

}

/**
 * @schema AttributeValueUpdate
 */
export interface AttributeValueUpdate {
  /**
   * @schema AttributeValueUpdate#Value
   */
  readonly value?: AttributeValue;

  /**
   * @schema AttributeValueUpdate#Action
   */
  readonly action?: string;

}

/**
 * @schema GlobalSecondaryIndexUpdate
 */
export interface GlobalSecondaryIndexUpdate {
  /**
   * @schema GlobalSecondaryIndexUpdate#Update
   */
  readonly update?: UpdateGlobalSecondaryIndexAction;

  /**
   * @schema GlobalSecondaryIndexUpdate#Create
   */
  readonly create?: CreateGlobalSecondaryIndexAction;

  /**
   * @schema GlobalSecondaryIndexUpdate#Delete
   */
  readonly delete?: DeleteGlobalSecondaryIndexAction;

}

/**
 * @schema ReplicationGroupUpdate
 */
export interface ReplicationGroupUpdate {
  /**
   * @schema ReplicationGroupUpdate#Create
   */
  readonly create?: CreateReplicationGroupMemberAction;

  /**
   * @schema ReplicationGroupUpdate#Update
   */
  readonly update?: UpdateReplicationGroupMemberAction;

  /**
   * @schema ReplicationGroupUpdate#Delete
   */
  readonly delete?: DeleteReplicationGroupMemberAction;

}

/**
 * @schema GlobalSecondaryIndexAutoScalingUpdate
 */
export interface GlobalSecondaryIndexAutoScalingUpdate {
  /**
   * @schema GlobalSecondaryIndexAutoScalingUpdate#IndexName
   */
  readonly indexName?: string;

  /**
   * @schema GlobalSecondaryIndexAutoScalingUpdate#ProvisionedWriteCapacityAutoScalingUpdate
   */
  readonly provisionedWriteCapacityAutoScalingUpdate?: AutoScalingSettingsUpdate;

}

/**
 * @schema ReplicaAutoScalingUpdate
 */
export interface ReplicaAutoScalingUpdate {
  /**
   * @schema ReplicaAutoScalingUpdate#RegionName
   */
  readonly regionName: string;

  /**
   * @schema ReplicaAutoScalingUpdate#ReplicaGlobalSecondaryIndexUpdates
   */
  readonly replicaGlobalSecondaryIndexUpdates?: ReplicaGlobalSecondaryIndexAutoScalingUpdate[];

  /**
   * @schema ReplicaAutoScalingUpdate#ReplicaProvisionedReadCapacityAutoScalingUpdate
   */
  readonly replicaProvisionedReadCapacityAutoScalingUpdate?: AutoScalingSettingsUpdate;

}

/**
 * @schema TimeToLiveSpecification
 */
export interface TimeToLiveSpecification {
  /**
   * @schema TimeToLiveSpecification#Enabled
   */
  readonly enabled: boolean;

  /**
   * @schema TimeToLiveSpecification#AttributeName
   */
  readonly attributeName: string;

}

/**
 * @schema BatchStatementError
 */
export interface BatchStatementError {
  /**
   * @schema BatchStatementError#Code
   */
  readonly code?: string;

  /**
   * @schema BatchStatementError#Message
   */
  readonly message?: string;

}

/**
 * @schema Capacity
 */
export interface Capacity {
  /**
   * @schema Capacity#ReadCapacityUnits
   */
  readonly readCapacityUnits?: number;

  /**
   * @schema Capacity#WriteCapacityUnits
   */
  readonly writeCapacityUnits?: number;

  /**
   * @schema Capacity#CapacityUnits
   */
  readonly capacityUnits?: number;

}

/**
 * @schema PutRequest
 */
export interface PutRequest {
  /**
   * @schema PutRequest#Item
   */
  readonly item: { [key: string]: AttributeValue };

}

/**
 * @schema DeleteRequest
 */
export interface DeleteRequest {
  /**
   * @schema DeleteRequest#Key
   */
  readonly key: { [key: string]: AttributeValue };

}

/**
 * @schema ReplicaDescription
 */
export interface ReplicaDescription {
  /**
   * @schema ReplicaDescription#RegionName
   */
  readonly regionName?: string;

  /**
   * @schema ReplicaDescription#ReplicaStatus
   */
  readonly replicaStatus?: string;

  /**
   * @schema ReplicaDescription#ReplicaStatusDescription
   */
  readonly replicaStatusDescription?: string;

  /**
   * @schema ReplicaDescription#ReplicaStatusPercentProgress
   */
  readonly replicaStatusPercentProgress?: string;

  /**
   * @schema ReplicaDescription#KMSMasterKeyId
   */
  readonly kmsMasterKeyId?: string;

  /**
   * @schema ReplicaDescription#ProvisionedThroughputOverride
   */
  readonly provisionedThroughputOverride?: ProvisionedThroughputOverride;

  /**
   * @schema ReplicaDescription#GlobalSecondaryIndexes
   */
  readonly globalSecondaryIndexes?: ReplicaGlobalSecondaryIndexDescription[];

  /**
   * @schema ReplicaDescription#ReplicaInaccessibleDateTime
   */
  readonly replicaInaccessibleDateTime?: string;

}

/**
 * @schema Projection
 */
export interface Projection {
  /**
   * @schema Projection#ProjectionType
   */
  readonly projectionType?: string;

  /**
   * @schema Projection#NonKeyAttributes
   */
  readonly nonKeyAttributes?: string[];

}

/**
 * @schema ProvisionedThroughputDescription
 */
export interface ProvisionedThroughputDescription {
  /**
   * @schema ProvisionedThroughputDescription#LastIncreaseDateTime
   */
  readonly lastIncreaseDateTime?: string;

  /**
   * @schema ProvisionedThroughputDescription#LastDecreaseDateTime
   */
  readonly lastDecreaseDateTime?: string;

  /**
   * @schema ProvisionedThroughputDescription#NumberOfDecreasesToday
   */
  readonly numberOfDecreasesToday?: number;

  /**
   * @schema ProvisionedThroughputDescription#ReadCapacityUnits
   */
  readonly readCapacityUnits?: number;

  /**
   * @schema ProvisionedThroughputDescription#WriteCapacityUnits
   */
  readonly writeCapacityUnits?: number;

}

/**
 * @schema BillingModeSummary
 */
export interface BillingModeSummary {
  /**
   * @schema BillingModeSummary#BillingMode
   */
  readonly billingMode?: string;

  /**
   * @schema BillingModeSummary#LastUpdateToPayPerRequestDateTime
   */
  readonly lastUpdateToPayPerRequestDateTime?: string;

}

/**
 * @schema LocalSecondaryIndexDescription
 */
export interface LocalSecondaryIndexDescription {
  /**
   * @schema LocalSecondaryIndexDescription#IndexName
   */
  readonly indexName?: string;

  /**
   * @schema LocalSecondaryIndexDescription#KeySchema
   */
  readonly keySchema?: KeySchemaElement[];

  /**
   * @schema LocalSecondaryIndexDescription#Projection
   */
  readonly projection?: Projection;

  /**
   * @schema LocalSecondaryIndexDescription#IndexSizeBytes
   */
  readonly indexSizeBytes?: number;

  /**
   * @schema LocalSecondaryIndexDescription#ItemCount
   */
  readonly itemCount?: number;

  /**
   * @schema LocalSecondaryIndexDescription#IndexArn
   */
  readonly indexArn?: string;

}

/**
 * @schema GlobalSecondaryIndexDescription
 */
export interface GlobalSecondaryIndexDescription {
  /**
   * @schema GlobalSecondaryIndexDescription#IndexName
   */
  readonly indexName?: string;

  /**
   * @schema GlobalSecondaryIndexDescription#KeySchema
   */
  readonly keySchema?: KeySchemaElement[];

  /**
   * @schema GlobalSecondaryIndexDescription#Projection
   */
  readonly projection?: Projection;

  /**
   * @schema GlobalSecondaryIndexDescription#IndexStatus
   */
  readonly indexStatus?: string;

  /**
   * @schema GlobalSecondaryIndexDescription#Backfilling
   */
  readonly backfilling?: boolean;

  /**
   * @schema GlobalSecondaryIndexDescription#ProvisionedThroughput
   */
  readonly provisionedThroughput?: ProvisionedThroughputDescription;

  /**
   * @schema GlobalSecondaryIndexDescription#IndexSizeBytes
   */
  readonly indexSizeBytes?: number;

  /**
   * @schema GlobalSecondaryIndexDescription#ItemCount
   */
  readonly itemCount?: number;

  /**
   * @schema GlobalSecondaryIndexDescription#IndexArn
   */
  readonly indexArn?: string;

}

/**
 * @schema RestoreSummary
 */
export interface RestoreSummary {
  /**
   * @schema RestoreSummary#SourceBackupArn
   */
  readonly sourceBackupArn?: string;

  /**
   * @schema RestoreSummary#SourceTableArn
   */
  readonly sourceTableArn?: string;

  /**
   * @schema RestoreSummary#RestoreDateTime
   */
  readonly restoreDateTime: string;

  /**
   * @schema RestoreSummary#RestoreInProgress
   */
  readonly restoreInProgress: boolean;

}

/**
 * @schema SseDescription
 */
export interface SseDescription {
  /**
   * @schema SseDescription#Status
   */
  readonly status?: string;

  /**
   * @schema SseDescription#SSEType
   */
  readonly sseType?: string;

  /**
   * @schema SseDescription#KMSMasterKeyArn
   */
  readonly kmsMasterKeyArn?: string;

  /**
   * @schema SseDescription#InaccessibleEncryptionDateTime
   */
  readonly inaccessibleEncryptionDateTime?: string;

}

/**
 * @schema ArchivalSummary
 */
export interface ArchivalSummary {
  /**
   * @schema ArchivalSummary#ArchivalDateTime
   */
  readonly archivalDateTime?: string;

  /**
   * @schema ArchivalSummary#ArchivalReason
   */
  readonly archivalReason?: string;

  /**
   * @schema ArchivalSummary#ArchivalBackupArn
   */
  readonly archivalBackupArn?: string;

}

/**
 * @schema SourceTableDetails
 */
export interface SourceTableDetails {
  /**
   * @schema SourceTableDetails#TableName
   */
  readonly tableName: string;

  /**
   * @schema SourceTableDetails#TableId
   */
  readonly tableId: string;

  /**
   * @schema SourceTableDetails#TableArn
   */
  readonly tableArn?: string;

  /**
   * @schema SourceTableDetails#TableSizeBytes
   */
  readonly tableSizeBytes?: number;

  /**
   * @schema SourceTableDetails#KeySchema
   */
  readonly keySchema: KeySchemaElement[];

  /**
   * @schema SourceTableDetails#TableCreationDateTime
   */
  readonly tableCreationDateTime: string;

  /**
   * @schema SourceTableDetails#ProvisionedThroughput
   */
  readonly provisionedThroughput: ProvisionedThroughput;

  /**
   * @schema SourceTableDetails#ItemCount
   */
  readonly itemCount?: number;

  /**
   * @schema SourceTableDetails#BillingMode
   */
  readonly billingMode?: string;

}

/**
 * @schema SourceTableFeatureDetails
 */
export interface SourceTableFeatureDetails {
  /**
   * @schema SourceTableFeatureDetails#LocalSecondaryIndexes
   */
  readonly localSecondaryIndexes?: LocalSecondaryIndexInfo[];

  /**
   * @schema SourceTableFeatureDetails#GlobalSecondaryIndexes
   */
  readonly globalSecondaryIndexes?: GlobalSecondaryIndexInfo[];

  /**
   * @schema SourceTableFeatureDetails#StreamDescription
   */
  readonly streamDescription?: StreamSpecification;

  /**
   * @schema SourceTableFeatureDetails#TimeToLiveDescription
   */
  readonly timeToLiveDescription?: TimeToLiveDescription;

  /**
   * @schema SourceTableFeatureDetails#SSEDescription
   */
  readonly sseDescription?: SseDescription;

}

/**
 * @schema PointInTimeRecoveryDescription
 */
export interface PointInTimeRecoveryDescription {
  /**
   * @schema PointInTimeRecoveryDescription#PointInTimeRecoveryStatus
   */
  readonly pointInTimeRecoveryStatus?: string;

  /**
   * @schema PointInTimeRecoveryDescription#EarliestRestorableDateTime
   */
  readonly earliestRestorableDateTime?: string;

  /**
   * @schema PointInTimeRecoveryDescription#LatestRestorableDateTime
   */
  readonly latestRestorableDateTime?: string;

}

/**
 * @schema AutoScalingSettingsDescription
 */
export interface AutoScalingSettingsDescription {
  /**
   * @schema AutoScalingSettingsDescription#MinimumUnits
   */
  readonly minimumUnits?: number;

  /**
   * @schema AutoScalingSettingsDescription#MaximumUnits
   */
  readonly maximumUnits?: number;

  /**
   * @schema AutoScalingSettingsDescription#AutoScalingDisabled
   */
  readonly autoScalingDisabled?: boolean;

  /**
   * @schema AutoScalingSettingsDescription#AutoScalingRoleArn
   */
  readonly autoScalingRoleArn?: string;

  /**
   * @schema AutoScalingSettingsDescription#ScalingPolicies
   */
  readonly scalingPolicies?: AutoScalingPolicyDescription[];

}

/**
 * @schema ReplicaGlobalSecondaryIndexSettingsDescription
 */
export interface ReplicaGlobalSecondaryIndexSettingsDescription {
  /**
   * @schema ReplicaGlobalSecondaryIndexSettingsDescription#IndexName
   */
  readonly indexName: string;

  /**
   * @schema ReplicaGlobalSecondaryIndexSettingsDescription#IndexStatus
   */
  readonly indexStatus?: string;

  /**
   * @schema ReplicaGlobalSecondaryIndexSettingsDescription#ProvisionedReadCapacityUnits
   */
  readonly provisionedReadCapacityUnits?: number;

  /**
   * @schema ReplicaGlobalSecondaryIndexSettingsDescription#ProvisionedReadCapacityAutoScalingSettings
   */
  readonly provisionedReadCapacityAutoScalingSettings?: AutoScalingSettingsDescription;

  /**
   * @schema ReplicaGlobalSecondaryIndexSettingsDescription#ProvisionedWriteCapacityUnits
   */
  readonly provisionedWriteCapacityUnits?: number;

  /**
   * @schema ReplicaGlobalSecondaryIndexSettingsDescription#ProvisionedWriteCapacityAutoScalingSettings
   */
  readonly provisionedWriteCapacityAutoScalingSettings?: AutoScalingSettingsDescription;

}

/**
 * @schema ReplicaAutoScalingDescription
 */
export interface ReplicaAutoScalingDescription {
  /**
   * @schema ReplicaAutoScalingDescription#RegionName
   */
  readonly regionName?: string;

  /**
   * @schema ReplicaAutoScalingDescription#GlobalSecondaryIndexes
   */
  readonly globalSecondaryIndexes?: ReplicaGlobalSecondaryIndexAutoScalingDescription[];

  /**
   * @schema ReplicaAutoScalingDescription#ReplicaProvisionedReadCapacityAutoScalingSettings
   */
  readonly replicaProvisionedReadCapacityAutoScalingSettings?: AutoScalingSettingsDescription;

  /**
   * @schema ReplicaAutoScalingDescription#ReplicaProvisionedWriteCapacityAutoScalingSettings
   */
  readonly replicaProvisionedWriteCapacityAutoScalingSettings?: AutoScalingSettingsDescription;

  /**
   * @schema ReplicaAutoScalingDescription#ReplicaStatus
   */
  readonly replicaStatus?: string;

}

/**
 * @schema Get
 */
export interface Get {
  /**
   * @schema Get#Key
   */
  readonly key: { [key: string]: AttributeValue };

  /**
   * @schema Get#TableName
   */
  readonly tableName: string;

  /**
   * @schema Get#ProjectionExpression
   */
  readonly projectionExpression?: string;

  /**
   * @schema Get#ExpressionAttributeNames
   */
  readonly expressionAttributeNames?: { [key: string]: string };

}

/**
 * @schema ConditionCheck
 */
export interface ConditionCheck {
  /**
   * @schema ConditionCheck#Key
   */
  readonly key: { [key: string]: AttributeValue };

  /**
   * @schema ConditionCheck#TableName
   */
  readonly tableName: string;

  /**
   * @schema ConditionCheck#ConditionExpression
   */
  readonly conditionExpression: string;

  /**
   * @schema ConditionCheck#ExpressionAttributeNames
   */
  readonly expressionAttributeNames?: { [key: string]: string };

  /**
   * @schema ConditionCheck#ExpressionAttributeValues
   */
  readonly expressionAttributeValues?: { [key: string]: AttributeValue };

  /**
   * @schema ConditionCheck#ReturnValuesOnConditionCheckFailure
   */
  readonly returnValuesOnConditionCheckFailure?: string;

}

/**
 * @schema Put
 */
export interface Put {
  /**
   * @schema Put#Item
   */
  readonly item: { [key: string]: AttributeValue };

  /**
   * @schema Put#TableName
   */
  readonly tableName: string;

  /**
   * @schema Put#ConditionExpression
   */
  readonly conditionExpression?: string;

  /**
   * @schema Put#ExpressionAttributeNames
   */
  readonly expressionAttributeNames?: { [key: string]: string };

  /**
   * @schema Put#ExpressionAttributeValues
   */
  readonly expressionAttributeValues?: { [key: string]: AttributeValue };

  /**
   * @schema Put#ReturnValuesOnConditionCheckFailure
   */
  readonly returnValuesOnConditionCheckFailure?: string;

}

/**
 * @schema Delete
 */
export interface Delete {
  /**
   * @schema Delete#Key
   */
  readonly key: { [key: string]: AttributeValue };

  /**
   * @schema Delete#TableName
   */
  readonly tableName: string;

  /**
   * @schema Delete#ConditionExpression
   */
  readonly conditionExpression?: string;

  /**
   * @schema Delete#ExpressionAttributeNames
   */
  readonly expressionAttributeNames?: { [key: string]: string };

  /**
   * @schema Delete#ExpressionAttributeValues
   */
  readonly expressionAttributeValues?: { [key: string]: AttributeValue };

  /**
   * @schema Delete#ReturnValuesOnConditionCheckFailure
   */
  readonly returnValuesOnConditionCheckFailure?: string;

}

/**
 * @schema Update
 */
export interface Update {
  /**
   * @schema Update#Key
   */
  readonly key: { [key: string]: AttributeValue };

  /**
   * @schema Update#UpdateExpression
   */
  readonly updateExpression: string;

  /**
   * @schema Update#TableName
   */
  readonly tableName: string;

  /**
   * @schema Update#ConditionExpression
   */
  readonly conditionExpression?: string;

  /**
   * @schema Update#ExpressionAttributeNames
   */
  readonly expressionAttributeNames?: { [key: string]: string };

  /**
   * @schema Update#ExpressionAttributeValues
   */
  readonly expressionAttributeValues?: { [key: string]: AttributeValue };

  /**
   * @schema Update#ReturnValuesOnConditionCheckFailure
   */
  readonly returnValuesOnConditionCheckFailure?: string;

}

/**
 * @schema CreateReplicaAction
 */
export interface CreateReplicaAction {
  /**
   * @schema CreateReplicaAction#RegionName
   */
  readonly regionName: string;

}

/**
 * @schema DeleteReplicaAction
 */
export interface DeleteReplicaAction {
  /**
   * @schema DeleteReplicaAction#RegionName
   */
  readonly regionName: string;

}

/**
 * @schema AutoScalingPolicyUpdate
 */
export interface AutoScalingPolicyUpdate {
  /**
   * @schema AutoScalingPolicyUpdate#PolicyName
   */
  readonly policyName?: string;

  /**
   * @schema AutoScalingPolicyUpdate#TargetTrackingScalingPolicyConfiguration
   */
  readonly targetTrackingScalingPolicyConfiguration: AutoScalingTargetTrackingScalingPolicyConfigurationUpdate;

}

/**
 * @schema ReplicaGlobalSecondaryIndexSettingsUpdate
 */
export interface ReplicaGlobalSecondaryIndexSettingsUpdate {
  /**
   * @schema ReplicaGlobalSecondaryIndexSettingsUpdate#IndexName
   */
  readonly indexName: string;

  /**
   * @schema ReplicaGlobalSecondaryIndexSettingsUpdate#ProvisionedReadCapacityUnits
   */
  readonly provisionedReadCapacityUnits?: number;

  /**
   * @schema ReplicaGlobalSecondaryIndexSettingsUpdate#ProvisionedReadCapacityAutoScalingSettingsUpdate
   */
  readonly provisionedReadCapacityAutoScalingSettingsUpdate?: AutoScalingSettingsUpdate;

}

/**
 * @schema UpdateGlobalSecondaryIndexAction
 */
export interface UpdateGlobalSecondaryIndexAction {
  /**
   * @schema UpdateGlobalSecondaryIndexAction#IndexName
   */
  readonly indexName: string;

  /**
   * @schema UpdateGlobalSecondaryIndexAction#ProvisionedThroughput
   */
  readonly provisionedThroughput: ProvisionedThroughput;

}

/**
 * @schema CreateGlobalSecondaryIndexAction
 */
export interface CreateGlobalSecondaryIndexAction {
  /**
   * @schema CreateGlobalSecondaryIndexAction#IndexName
   */
  readonly indexName: string;

  /**
   * @schema CreateGlobalSecondaryIndexAction#KeySchema
   */
  readonly keySchema: KeySchemaElement[];

  /**
   * @schema CreateGlobalSecondaryIndexAction#Projection
   */
  readonly projection: Projection;

  /**
   * @schema CreateGlobalSecondaryIndexAction#ProvisionedThroughput
   */
  readonly provisionedThroughput?: ProvisionedThroughput;

}

/**
 * @schema DeleteGlobalSecondaryIndexAction
 */
export interface DeleteGlobalSecondaryIndexAction {
  /**
   * @schema DeleteGlobalSecondaryIndexAction#IndexName
   */
  readonly indexName: string;

}

/**
 * @schema CreateReplicationGroupMemberAction
 */
export interface CreateReplicationGroupMemberAction {
  /**
   * @schema CreateReplicationGroupMemberAction#RegionName
   */
  readonly regionName: string;

  /**
   * @schema CreateReplicationGroupMemberAction#KMSMasterKeyId
   */
  readonly kmsMasterKeyId?: string;

  /**
   * @schema CreateReplicationGroupMemberAction#ProvisionedThroughputOverride
   */
  readonly provisionedThroughputOverride?: ProvisionedThroughputOverride;

  /**
   * @schema CreateReplicationGroupMemberAction#GlobalSecondaryIndexes
   */
  readonly globalSecondaryIndexes?: ReplicaGlobalSecondaryIndex[];

}

/**
 * @schema UpdateReplicationGroupMemberAction
 */
export interface UpdateReplicationGroupMemberAction {
  /**
   * @schema UpdateReplicationGroupMemberAction#RegionName
   */
  readonly regionName: string;

  /**
   * @schema UpdateReplicationGroupMemberAction#KMSMasterKeyId
   */
  readonly kmsMasterKeyId?: string;

  /**
   * @schema UpdateReplicationGroupMemberAction#ProvisionedThroughputOverride
   */
  readonly provisionedThroughputOverride?: ProvisionedThroughputOverride;

  /**
   * @schema UpdateReplicationGroupMemberAction#GlobalSecondaryIndexes
   */
  readonly globalSecondaryIndexes?: ReplicaGlobalSecondaryIndex[];

}

/**
 * @schema DeleteReplicationGroupMemberAction
 */
export interface DeleteReplicationGroupMemberAction {
  /**
   * @schema DeleteReplicationGroupMemberAction#RegionName
   */
  readonly regionName: string;

}

/**
 * @schema ReplicaGlobalSecondaryIndexAutoScalingUpdate
 */
export interface ReplicaGlobalSecondaryIndexAutoScalingUpdate {
  /**
   * @schema ReplicaGlobalSecondaryIndexAutoScalingUpdate#IndexName
   */
  readonly indexName?: string;

  /**
   * @schema ReplicaGlobalSecondaryIndexAutoScalingUpdate#ProvisionedReadCapacityAutoScalingUpdate
   */
  readonly provisionedReadCapacityAutoScalingUpdate?: AutoScalingSettingsUpdate;

}

/**
 * @schema ProvisionedThroughputOverride
 */
export interface ProvisionedThroughputOverride {
  /**
   * @schema ProvisionedThroughputOverride#ReadCapacityUnits
   */
  readonly readCapacityUnits?: number;

}

/**
 * @schema ReplicaGlobalSecondaryIndexDescription
 */
export interface ReplicaGlobalSecondaryIndexDescription {
  /**
   * @schema ReplicaGlobalSecondaryIndexDescription#IndexName
   */
  readonly indexName?: string;

  /**
   * @schema ReplicaGlobalSecondaryIndexDescription#ProvisionedThroughputOverride
   */
  readonly provisionedThroughputOverride?: ProvisionedThroughputOverride;

}

/**
 * @schema LocalSecondaryIndexInfo
 */
export interface LocalSecondaryIndexInfo {
  /**
   * @schema LocalSecondaryIndexInfo#IndexName
   */
  readonly indexName?: string;

  /**
   * @schema LocalSecondaryIndexInfo#KeySchema
   */
  readonly keySchema?: KeySchemaElement[];

  /**
   * @schema LocalSecondaryIndexInfo#Projection
   */
  readonly projection?: Projection;

}

/**
 * @schema GlobalSecondaryIndexInfo
 */
export interface GlobalSecondaryIndexInfo {
  /**
   * @schema GlobalSecondaryIndexInfo#IndexName
   */
  readonly indexName?: string;

  /**
   * @schema GlobalSecondaryIndexInfo#KeySchema
   */
  readonly keySchema?: KeySchemaElement[];

  /**
   * @schema GlobalSecondaryIndexInfo#Projection
   */
  readonly projection?: Projection;

  /**
   * @schema GlobalSecondaryIndexInfo#ProvisionedThroughput
   */
  readonly provisionedThroughput?: ProvisionedThroughput;

}

/**
 * @schema AutoScalingPolicyDescription
 */
export interface AutoScalingPolicyDescription {
  /**
   * @schema AutoScalingPolicyDescription#PolicyName
   */
  readonly policyName?: string;

  /**
   * @schema AutoScalingPolicyDescription#TargetTrackingScalingPolicyConfiguration
   */
  readonly targetTrackingScalingPolicyConfiguration?: AutoScalingTargetTrackingScalingPolicyConfigurationDescription;

}

/**
 * @schema ReplicaGlobalSecondaryIndexAutoScalingDescription
 */
export interface ReplicaGlobalSecondaryIndexAutoScalingDescription {
  /**
   * @schema ReplicaGlobalSecondaryIndexAutoScalingDescription#IndexName
   */
  readonly indexName?: string;

  /**
   * @schema ReplicaGlobalSecondaryIndexAutoScalingDescription#IndexStatus
   */
  readonly indexStatus?: string;

  /**
   * @schema ReplicaGlobalSecondaryIndexAutoScalingDescription#ProvisionedReadCapacityAutoScalingSettings
   */
  readonly provisionedReadCapacityAutoScalingSettings?: AutoScalingSettingsDescription;

  /**
   * @schema ReplicaGlobalSecondaryIndexAutoScalingDescription#ProvisionedWriteCapacityAutoScalingSettings
   */
  readonly provisionedWriteCapacityAutoScalingSettings?: AutoScalingSettingsDescription;

}

/**
 * @schema AutoScalingTargetTrackingScalingPolicyConfigurationUpdate
 */
export interface AutoScalingTargetTrackingScalingPolicyConfigurationUpdate {
  /**
   * @schema AutoScalingTargetTrackingScalingPolicyConfigurationUpdate#DisableScaleIn
   */
  readonly disableScaleIn?: boolean;

  /**
   * @schema AutoScalingTargetTrackingScalingPolicyConfigurationUpdate#ScaleInCooldown
   */
  readonly scaleInCooldown?: number;

  /**
   * @schema AutoScalingTargetTrackingScalingPolicyConfigurationUpdate#ScaleOutCooldown
   */
  readonly scaleOutCooldown?: number;

  /**
   * @schema AutoScalingTargetTrackingScalingPolicyConfigurationUpdate#TargetValue
   */
  readonly targetValue: number;

}

/**
 * @schema ReplicaGlobalSecondaryIndex
 */
export interface ReplicaGlobalSecondaryIndex {
  /**
   * @schema ReplicaGlobalSecondaryIndex#IndexName
   */
  readonly indexName: string;

  /**
   * @schema ReplicaGlobalSecondaryIndex#ProvisionedThroughputOverride
   */
  readonly provisionedThroughputOverride?: ProvisionedThroughputOverride;

}

/**
 * @schema AutoScalingTargetTrackingScalingPolicyConfigurationDescription
 */
export interface AutoScalingTargetTrackingScalingPolicyConfigurationDescription {
  /**
   * @schema AutoScalingTargetTrackingScalingPolicyConfigurationDescription#DisableScaleIn
   */
  readonly disableScaleIn?: boolean;

  /**
   * @schema AutoScalingTargetTrackingScalingPolicyConfigurationDescription#ScaleInCooldown
   */
  readonly scaleInCooldown?: number;

  /**
   * @schema AutoScalingTargetTrackingScalingPolicyConfigurationDescription#ScaleOutCooldown
   */
  readonly scaleOutCooldown?: number;

  /**
   * @schema AutoScalingTargetTrackingScalingPolicyConfigurationDescription#TargetValue
   */
  readonly targetValue: number;

}
