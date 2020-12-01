/**
 * @schema AddTagsToStreamInput
 */
export interface AddTagsToStreamInput {
  /**
   * @schema AddTagsToStreamInput#StreamName
   */
  readonly streamName: string;

  /**
   * @schema AddTagsToStreamInput#Tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema CreateStreamInput
 */
export interface CreateStreamInput {
  /**
   * @schema CreateStreamInput#StreamName
   */
  readonly streamName: string;

  /**
   * @schema CreateStreamInput#ShardCount
   */
  readonly shardCount: number;

}

/**
 * @schema DecreaseStreamRetentionPeriodInput
 */
export interface DecreaseStreamRetentionPeriodInput {
  /**
   * @schema DecreaseStreamRetentionPeriodInput#StreamName
   */
  readonly streamName: string;

  /**
   * @schema DecreaseStreamRetentionPeriodInput#RetentionPeriodHours
   */
  readonly retentionPeriodHours: number;

}

/**
 * @schema DeleteStreamInput
 */
export interface DeleteStreamInput {
  /**
   * @schema DeleteStreamInput#StreamName
   */
  readonly streamName: string;

  /**
   * @schema DeleteStreamInput#EnforceConsumerDeletion
   */
  readonly enforceConsumerDeletion?: boolean;

}

/**
 * @schema DeregisterStreamConsumerInput
 */
export interface DeregisterStreamConsumerInput {
  /**
   * @schema DeregisterStreamConsumerInput#StreamARN
   */
  readonly streamArn?: string;

  /**
   * @schema DeregisterStreamConsumerInput#ConsumerName
   */
  readonly consumerName?: string;

  /**
   * @schema DeregisterStreamConsumerInput#ConsumerARN
   */
  readonly consumerArn?: string;

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
   * @schema DescribeLimitsOutput#ShardLimit
   */
  readonly shardLimit: number;

  /**
   * @schema DescribeLimitsOutput#OpenShardCount
   */
  readonly openShardCount: number;

}

/**
 * @schema DescribeStreamInput
 */
export interface DescribeStreamInput {
  /**
   * @schema DescribeStreamInput#StreamName
   */
  readonly streamName: string;

  /**
   * @schema DescribeStreamInput#Limit
   */
  readonly limit?: number;

  /**
   * @schema DescribeStreamInput#ExclusiveStartShardId
   */
  readonly exclusiveStartShardId?: string;

}

/**
 * @schema DescribeStreamOutput
 */
export interface DescribeStreamOutput {
  /**
   * @schema DescribeStreamOutput#StreamDescription
   */
  readonly streamDescription: StreamDescription;

}

/**
 * @schema DescribeStreamConsumerInput
 */
export interface DescribeStreamConsumerInput {
  /**
   * @schema DescribeStreamConsumerInput#StreamARN
   */
  readonly streamArn?: string;

  /**
   * @schema DescribeStreamConsumerInput#ConsumerName
   */
  readonly consumerName?: string;

  /**
   * @schema DescribeStreamConsumerInput#ConsumerARN
   */
  readonly consumerArn?: string;

}

/**
 * @schema DescribeStreamConsumerOutput
 */
export interface DescribeStreamConsumerOutput {
  /**
   * @schema DescribeStreamConsumerOutput#ConsumerDescription
   */
  readonly consumerDescription: ConsumerDescription;

}

/**
 * @schema DescribeStreamSummaryInput
 */
export interface DescribeStreamSummaryInput {
  /**
   * @schema DescribeStreamSummaryInput#StreamName
   */
  readonly streamName: string;

}

/**
 * @schema DescribeStreamSummaryOutput
 */
export interface DescribeStreamSummaryOutput {
  /**
   * @schema DescribeStreamSummaryOutput#StreamDescriptionSummary
   */
  readonly streamDescriptionSummary: StreamDescriptionSummary;

}

/**
 * @schema DisableEnhancedMonitoringInput
 */
export interface DisableEnhancedMonitoringInput {
  /**
   * @schema DisableEnhancedMonitoringInput#StreamName
   */
  readonly streamName: string;

  /**
   * @schema DisableEnhancedMonitoringInput#ShardLevelMetrics
   */
  readonly shardLevelMetrics: string[];

}

/**
 * @schema EnhancedMonitoringOutput
 */
export interface EnhancedMonitoringOutput {
  /**
   * @schema EnhancedMonitoringOutput#StreamName
   */
  readonly streamName?: string;

  /**
   * @schema EnhancedMonitoringOutput#CurrentShardLevelMetrics
   */
  readonly currentShardLevelMetrics?: string[];

  /**
   * @schema EnhancedMonitoringOutput#DesiredShardLevelMetrics
   */
  readonly desiredShardLevelMetrics?: string[];

}

/**
 * @schema EnableEnhancedMonitoringInput
 */
export interface EnableEnhancedMonitoringInput {
  /**
   * @schema EnableEnhancedMonitoringInput#StreamName
   */
  readonly streamName: string;

  /**
   * @schema EnableEnhancedMonitoringInput#ShardLevelMetrics
   */
  readonly shardLevelMetrics: string[];

}

/**
 * @schema GetRecordsInput
 */
export interface GetRecordsInput {
  /**
   * @schema GetRecordsInput#ShardIterator
   */
  readonly shardIterator: string;

  /**
   * @schema GetRecordsInput#Limit
   */
  readonly limit?: number;

}

/**
 * @schema GetRecordsOutput
 */
export interface GetRecordsOutput {
  /**
   * @schema GetRecordsOutput#Records
   */
  readonly records: Record[];

  /**
   * @schema GetRecordsOutput#NextShardIterator
   */
  readonly nextShardIterator?: string;

  /**
   * @schema GetRecordsOutput#MillisBehindLatest
   */
  readonly millisBehindLatest?: number;

  /**
   * @schema GetRecordsOutput#ChildShards
   */
  readonly childShards?: ChildShard[];

}

/**
 * @schema GetShardIteratorInput
 */
export interface GetShardIteratorInput {
  /**
   * @schema GetShardIteratorInput#StreamName
   */
  readonly streamName: string;

  /**
   * @schema GetShardIteratorInput#ShardId
   */
  readonly shardId: string;

  /**
   * @schema GetShardIteratorInput#ShardIteratorType
   */
  readonly shardIteratorType: string;

  /**
   * @schema GetShardIteratorInput#StartingSequenceNumber
   */
  readonly startingSequenceNumber?: string;

  /**
   * @schema GetShardIteratorInput#Timestamp
   */
  readonly timestamp?: string;

}

/**
 * @schema GetShardIteratorOutput
 */
export interface GetShardIteratorOutput {
  /**
   * @schema GetShardIteratorOutput#ShardIterator
   */
  readonly shardIterator?: string;

}

/**
 * @schema IncreaseStreamRetentionPeriodInput
 */
export interface IncreaseStreamRetentionPeriodInput {
  /**
   * @schema IncreaseStreamRetentionPeriodInput#StreamName
   */
  readonly streamName: string;

  /**
   * @schema IncreaseStreamRetentionPeriodInput#RetentionPeriodHours
   */
  readonly retentionPeriodHours: number;

}

/**
 * @schema ListShardsInput
 */
export interface ListShardsInput {
  /**
   * @schema ListShardsInput#StreamName
   */
  readonly streamName?: string;

  /**
   * @schema ListShardsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListShardsInput#ExclusiveStartShardId
   */
  readonly exclusiveStartShardId?: string;

  /**
   * @schema ListShardsInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListShardsInput#StreamCreationTimestamp
   */
  readonly streamCreationTimestamp?: string;

  /**
   * @schema ListShardsInput#ShardFilter
   */
  readonly shardFilter?: ShardFilter;

}

/**
 * @schema ListShardsOutput
 */
export interface ListShardsOutput {
  /**
   * @schema ListShardsOutput#Shards
   */
  readonly shards?: Shard[];

  /**
   * @schema ListShardsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListStreamConsumersInput
 */
export interface ListStreamConsumersInput {
  /**
   * @schema ListStreamConsumersInput#StreamARN
   */
  readonly streamArn: string;

  /**
   * @schema ListStreamConsumersInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListStreamConsumersInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListStreamConsumersInput#StreamCreationTimestamp
   */
  readonly streamCreationTimestamp?: string;

}

/**
 * @schema ListStreamConsumersOutput
 */
export interface ListStreamConsumersOutput {
  /**
   * @schema ListStreamConsumersOutput#Consumers
   */
  readonly consumers?: Consumer[];

  /**
   * @schema ListStreamConsumersOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListStreamsInput
 */
export interface ListStreamsInput {
  /**
   * @schema ListStreamsInput#Limit
   */
  readonly limit?: number;

  /**
   * @schema ListStreamsInput#ExclusiveStartStreamName
   */
  readonly exclusiveStartStreamName?: string;

}

/**
 * @schema ListStreamsOutput
 */
export interface ListStreamsOutput {
  /**
   * @schema ListStreamsOutput#StreamNames
   */
  readonly streamNames: string[];

  /**
   * @schema ListStreamsOutput#HasMoreStreams
   */
  readonly hasMoreStreams: boolean;

}

/**
 * @schema ListTagsForStreamInput
 */
export interface ListTagsForStreamInput {
  /**
   * @schema ListTagsForStreamInput#StreamName
   */
  readonly streamName: string;

  /**
   * @schema ListTagsForStreamInput#ExclusiveStartTagKey
   */
  readonly exclusiveStartTagKey?: string;

  /**
   * @schema ListTagsForStreamInput#Limit
   */
  readonly limit?: number;

}

/**
 * @schema ListTagsForStreamOutput
 */
export interface ListTagsForStreamOutput {
  /**
   * @schema ListTagsForStreamOutput#Tags
   */
  readonly tags: Tag[];

  /**
   * @schema ListTagsForStreamOutput#HasMoreTags
   */
  readonly hasMoreTags: boolean;

}

/**
 * @schema MergeShardsInput
 */
export interface MergeShardsInput {
  /**
   * @schema MergeShardsInput#StreamName
   */
  readonly streamName: string;

  /**
   * @schema MergeShardsInput#ShardToMerge
   */
  readonly shardToMerge: string;

  /**
   * @schema MergeShardsInput#AdjacentShardToMerge
   */
  readonly adjacentShardToMerge: string;

}

/**
 * @schema PutRecordInput
 */
export interface PutRecordInput {
  /**
   * @schema PutRecordInput#StreamName
   */
  readonly streamName: string;

  /**
   * @schema PutRecordInput#Data
   */
  readonly data: any;

  /**
   * @schema PutRecordInput#PartitionKey
   */
  readonly partitionKey: string;

  /**
   * @schema PutRecordInput#ExplicitHashKey
   */
  readonly explicitHashKey?: string;

  /**
   * @schema PutRecordInput#SequenceNumberForOrdering
   */
  readonly sequenceNumberForOrdering?: string;

}

/**
 * @schema PutRecordOutput
 */
export interface PutRecordOutput {
  /**
   * @schema PutRecordOutput#ShardId
   */
  readonly shardId: string;

  /**
   * @schema PutRecordOutput#SequenceNumber
   */
  readonly sequenceNumber: string;

  /**
   * @schema PutRecordOutput#EncryptionType
   */
  readonly encryptionType?: string;

}

/**
 * @schema PutRecordsInput
 */
export interface PutRecordsInput {
  /**
   * @schema PutRecordsInput#Records
   */
  readonly records: PutRecordsRequestEntry[];

  /**
   * @schema PutRecordsInput#StreamName
   */
  readonly streamName: string;

}

/**
 * @schema PutRecordsOutput
 */
export interface PutRecordsOutput {
  /**
   * @schema PutRecordsOutput#FailedRecordCount
   */
  readonly failedRecordCount?: number;

  /**
   * @schema PutRecordsOutput#Records
   */
  readonly records: PutRecordsResultEntry[];

  /**
   * @schema PutRecordsOutput#EncryptionType
   */
  readonly encryptionType?: string;

}

/**
 * @schema RegisterStreamConsumerInput
 */
export interface RegisterStreamConsumerInput {
  /**
   * @schema RegisterStreamConsumerInput#StreamARN
   */
  readonly streamArn: string;

  /**
   * @schema RegisterStreamConsumerInput#ConsumerName
   */
  readonly consumerName: string;

}

/**
 * @schema RegisterStreamConsumerOutput
 */
export interface RegisterStreamConsumerOutput {
  /**
   * @schema RegisterStreamConsumerOutput#Consumer
   */
  readonly consumer: Consumer;

}

/**
 * @schema RemoveTagsFromStreamInput
 */
export interface RemoveTagsFromStreamInput {
  /**
   * @schema RemoveTagsFromStreamInput#StreamName
   */
  readonly streamName: string;

  /**
   * @schema RemoveTagsFromStreamInput#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema SplitShardInput
 */
export interface SplitShardInput {
  /**
   * @schema SplitShardInput#StreamName
   */
  readonly streamName: string;

  /**
   * @schema SplitShardInput#ShardToSplit
   */
  readonly shardToSplit: string;

  /**
   * @schema SplitShardInput#NewStartingHashKey
   */
  readonly newStartingHashKey: string;

}

/**
 * @schema StartStreamEncryptionInput
 */
export interface StartStreamEncryptionInput {
  /**
   * @schema StartStreamEncryptionInput#StreamName
   */
  readonly streamName: string;

  /**
   * @schema StartStreamEncryptionInput#EncryptionType
   */
  readonly encryptionType: string;

  /**
   * @schema StartStreamEncryptionInput#KeyId
   */
  readonly keyId: string;

}

/**
 * @schema StopStreamEncryptionInput
 */
export interface StopStreamEncryptionInput {
  /**
   * @schema StopStreamEncryptionInput#StreamName
   */
  readonly streamName: string;

  /**
   * @schema StopStreamEncryptionInput#EncryptionType
   */
  readonly encryptionType: string;

  /**
   * @schema StopStreamEncryptionInput#KeyId
   */
  readonly keyId: string;

}

/**
 * @schema UpdateShardCountInput
 */
export interface UpdateShardCountInput {
  /**
   * @schema UpdateShardCountInput#StreamName
   */
  readonly streamName: string;

  /**
   * @schema UpdateShardCountInput#TargetShardCount
   */
  readonly targetShardCount: number;

  /**
   * @schema UpdateShardCountInput#ScalingType
   */
  readonly scalingType: string;

}

/**
 * @schema UpdateShardCountOutput
 */
export interface UpdateShardCountOutput {
  /**
   * @schema UpdateShardCountOutput#StreamName
   */
  readonly streamName?: string;

  /**
   * @schema UpdateShardCountOutput#CurrentShardCount
   */
  readonly currentShardCount?: number;

  /**
   * @schema UpdateShardCountOutput#TargetShardCount
   */
  readonly targetShardCount?: number;

}

/**
 * @schema StreamDescription
 */
export interface StreamDescription {
  /**
   * @schema StreamDescription#StreamName
   */
  readonly streamName: string;

  /**
   * @schema StreamDescription#StreamARN
   */
  readonly streamArn: string;

  /**
   * @schema StreamDescription#StreamStatus
   */
  readonly streamStatus: string;

  /**
   * @schema StreamDescription#Shards
   */
  readonly shards: Shard[];

  /**
   * @schema StreamDescription#HasMoreShards
   */
  readonly hasMoreShards: boolean;

  /**
   * @schema StreamDescription#RetentionPeriodHours
   */
  readonly retentionPeriodHours: number;

  /**
   * @schema StreamDescription#StreamCreationTimestamp
   */
  readonly streamCreationTimestamp: string;

  /**
   * @schema StreamDescription#EnhancedMonitoring
   */
  readonly enhancedMonitoring: EnhancedMetrics[];

  /**
   * @schema StreamDescription#EncryptionType
   */
  readonly encryptionType?: string;

  /**
   * @schema StreamDescription#KeyId
   */
  readonly keyId?: string;

}

/**
 * @schema ConsumerDescription
 */
export interface ConsumerDescription {
  /**
   * @schema ConsumerDescription#ConsumerName
   */
  readonly consumerName: string;

  /**
   * @schema ConsumerDescription#ConsumerARN
   */
  readonly consumerArn: string;

  /**
   * @schema ConsumerDescription#ConsumerStatus
   */
  readonly consumerStatus: string;

  /**
   * @schema ConsumerDescription#ConsumerCreationTimestamp
   */
  readonly consumerCreationTimestamp: string;

  /**
   * @schema ConsumerDescription#StreamARN
   */
  readonly streamArn: string;

}

/**
 * @schema StreamDescriptionSummary
 */
export interface StreamDescriptionSummary {
  /**
   * @schema StreamDescriptionSummary#StreamName
   */
  readonly streamName: string;

  /**
   * @schema StreamDescriptionSummary#StreamARN
   */
  readonly streamArn: string;

  /**
   * @schema StreamDescriptionSummary#StreamStatus
   */
  readonly streamStatus: string;

  /**
   * @schema StreamDescriptionSummary#RetentionPeriodHours
   */
  readonly retentionPeriodHours: number;

  /**
   * @schema StreamDescriptionSummary#StreamCreationTimestamp
   */
  readonly streamCreationTimestamp: string;

  /**
   * @schema StreamDescriptionSummary#EnhancedMonitoring
   */
  readonly enhancedMonitoring: EnhancedMetrics[];

  /**
   * @schema StreamDescriptionSummary#EncryptionType
   */
  readonly encryptionType?: string;

  /**
   * @schema StreamDescriptionSummary#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema StreamDescriptionSummary#OpenShardCount
   */
  readonly openShardCount: number;

  /**
   * @schema StreamDescriptionSummary#ConsumerCount
   */
  readonly consumerCount?: number;

}

/**
 * @schema Record
 */
export interface Record {
  /**
   * @schema Record#SequenceNumber
   */
  readonly sequenceNumber: string;

  /**
   * @schema Record#ApproximateArrivalTimestamp
   */
  readonly approximateArrivalTimestamp?: string;

  /**
   * @schema Record#Data
   */
  readonly data: any;

  /**
   * @schema Record#PartitionKey
   */
  readonly partitionKey: string;

  /**
   * @schema Record#EncryptionType
   */
  readonly encryptionType?: string;

}

/**
 * @schema ChildShard
 */
export interface ChildShard {
  /**
   * @schema ChildShard#ShardId
   */
  readonly shardId: string;

  /**
   * @schema ChildShard#ParentShards
   */
  readonly parentShards: string[];

  /**
   * @schema ChildShard#HashKeyRange
   */
  readonly hashKeyRange: HashKeyRange;

}

/**
 * @schema ShardFilter
 */
export interface ShardFilter {
  /**
   * @schema ShardFilter#Type
   */
  readonly type: string;

  /**
   * @schema ShardFilter#ShardId
   */
  readonly shardId?: string;

  /**
   * @schema ShardFilter#Timestamp
   */
  readonly timestamp?: string;

}

/**
 * @schema Shard
 */
export interface Shard {
  /**
   * @schema Shard#ShardId
   */
  readonly shardId: string;

  /**
   * @schema Shard#ParentShardId
   */
  readonly parentShardId?: string;

  /**
   * @schema Shard#AdjacentParentShardId
   */
  readonly adjacentParentShardId?: string;

  /**
   * @schema Shard#HashKeyRange
   */
  readonly hashKeyRange: HashKeyRange;

  /**
   * @schema Shard#SequenceNumberRange
   */
  readonly sequenceNumberRange: SequenceNumberRange;

}

/**
 * @schema Consumer
 */
export interface Consumer {
  /**
   * @schema Consumer#ConsumerName
   */
  readonly consumerName: string;

  /**
   * @schema Consumer#ConsumerARN
   */
  readonly consumerArn: string;

  /**
   * @schema Consumer#ConsumerStatus
   */
  readonly consumerStatus: string;

  /**
   * @schema Consumer#ConsumerCreationTimestamp
   */
  readonly consumerCreationTimestamp: string;

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
  readonly value?: string;

}

/**
 * @schema PutRecordsRequestEntry
 */
export interface PutRecordsRequestEntry {
  /**
   * @schema PutRecordsRequestEntry#Data
   */
  readonly data: any;

  /**
   * @schema PutRecordsRequestEntry#ExplicitHashKey
   */
  readonly explicitHashKey?: string;

  /**
   * @schema PutRecordsRequestEntry#PartitionKey
   */
  readonly partitionKey: string;

}

/**
 * @schema PutRecordsResultEntry
 */
export interface PutRecordsResultEntry {
  /**
   * @schema PutRecordsResultEntry#SequenceNumber
   */
  readonly sequenceNumber?: string;

  /**
   * @schema PutRecordsResultEntry#ShardId
   */
  readonly shardId?: string;

  /**
   * @schema PutRecordsResultEntry#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema PutRecordsResultEntry#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema EnhancedMetrics
 */
export interface EnhancedMetrics {
  /**
   * @schema EnhancedMetrics#ShardLevelMetrics
   */
  readonly shardLevelMetrics?: string[];

}

/**
 * @schema HashKeyRange
 */
export interface HashKeyRange {
  /**
   * @schema HashKeyRange#StartingHashKey
   */
  readonly startingHashKey: string;

  /**
   * @schema HashKeyRange#EndingHashKey
   */
  readonly endingHashKey: string;

}

/**
 * @schema SequenceNumberRange
 */
export interface SequenceNumberRange {
  /**
   * @schema SequenceNumberRange#StartingSequenceNumber
   */
  readonly startingSequenceNumber: string;

  /**
   * @schema SequenceNumberRange#EndingSequenceNumber
   */
  readonly endingSequenceNumber?: string;

}
