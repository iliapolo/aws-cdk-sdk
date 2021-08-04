/**
 * @schema KinesisAddTagsToStreamInput
 */
export interface KinesisAddTagsToStreamInput {
  /**
   * @schema KinesisAddTagsToStreamInput#StreamName
   */
  readonly streamName: string;

  /**
   * @schema KinesisAddTagsToStreamInput#Tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema KinesisCreateStreamInput
 */
export interface KinesisCreateStreamInput {
  /**
   * @schema KinesisCreateStreamInput#StreamName
   */
  readonly streamName: string;

  /**
   * @schema KinesisCreateStreamInput#ShardCount
   */
  readonly shardCount: number;

}

/**
 * @schema KinesisDecreaseStreamRetentionPeriodInput
 */
export interface KinesisDecreaseStreamRetentionPeriodInput {
  /**
   * @schema KinesisDecreaseStreamRetentionPeriodInput#StreamName
   */
  readonly streamName: string;

  /**
   * @schema KinesisDecreaseStreamRetentionPeriodInput#RetentionPeriodHours
   */
  readonly retentionPeriodHours: number;

}

/**
 * @schema KinesisDeleteStreamInput
 */
export interface KinesisDeleteStreamInput {
  /**
   * @schema KinesisDeleteStreamInput#StreamName
   */
  readonly streamName: string;

  /**
   * @schema KinesisDeleteStreamInput#EnforceConsumerDeletion
   */
  readonly enforceConsumerDeletion?: boolean;

}

/**
 * @schema KinesisDeregisterStreamConsumerInput
 */
export interface KinesisDeregisterStreamConsumerInput {
  /**
   * @schema KinesisDeregisterStreamConsumerInput#StreamARN
   */
  readonly streamArn?: string;

  /**
   * @schema KinesisDeregisterStreamConsumerInput#ConsumerName
   */
  readonly consumerName?: string;

  /**
   * @schema KinesisDeregisterStreamConsumerInput#ConsumerARN
   */
  readonly consumerArn?: string;

}

/**
 * @schema KinesisDescribeLimitsInput
 */
export interface KinesisDescribeLimitsInput {
}

/**
 * @schema KinesisDescribeLimitsOutput
 */
export interface KinesisDescribeLimitsOutput {
  /**
   * @schema KinesisDescribeLimitsOutput#ShardLimit
   */
  readonly shardLimit: number;

  /**
   * @schema KinesisDescribeLimitsOutput#OpenShardCount
   */
  readonly openShardCount: number;

}

/**
 * @schema KinesisDescribeStreamInput
 */
export interface KinesisDescribeStreamInput {
  /**
   * @schema KinesisDescribeStreamInput#StreamName
   */
  readonly streamName: string;

  /**
   * @schema KinesisDescribeStreamInput#Limit
   */
  readonly limit?: number;

  /**
   * @schema KinesisDescribeStreamInput#ExclusiveStartShardId
   */
  readonly exclusiveStartShardId?: string;

}

/**
 * @schema KinesisDescribeStreamOutput
 */
export interface KinesisDescribeStreamOutput {
  /**
   * @schema KinesisDescribeStreamOutput#StreamDescription
   */
  readonly streamDescription: KinesisStreamDescription;

}

/**
 * @schema KinesisDescribeStreamConsumerInput
 */
export interface KinesisDescribeStreamConsumerInput {
  /**
   * @schema KinesisDescribeStreamConsumerInput#StreamARN
   */
  readonly streamArn?: string;

  /**
   * @schema KinesisDescribeStreamConsumerInput#ConsumerName
   */
  readonly consumerName?: string;

  /**
   * @schema KinesisDescribeStreamConsumerInput#ConsumerARN
   */
  readonly consumerArn?: string;

}

/**
 * @schema KinesisDescribeStreamConsumerOutput
 */
export interface KinesisDescribeStreamConsumerOutput {
  /**
   * @schema KinesisDescribeStreamConsumerOutput#ConsumerDescription
   */
  readonly consumerDescription: KinesisConsumerDescription;

}

/**
 * @schema KinesisDescribeStreamSummaryInput
 */
export interface KinesisDescribeStreamSummaryInput {
  /**
   * @schema KinesisDescribeStreamSummaryInput#StreamName
   */
  readonly streamName: string;

}

/**
 * @schema KinesisDescribeStreamSummaryOutput
 */
export interface KinesisDescribeStreamSummaryOutput {
  /**
   * @schema KinesisDescribeStreamSummaryOutput#StreamDescriptionSummary
   */
  readonly streamDescriptionSummary: KinesisStreamDescriptionSummary;

}

/**
 * @schema KinesisDisableEnhancedMonitoringInput
 */
export interface KinesisDisableEnhancedMonitoringInput {
  /**
   * @schema KinesisDisableEnhancedMonitoringInput#StreamName
   */
  readonly streamName: string;

  /**
   * @schema KinesisDisableEnhancedMonitoringInput#ShardLevelMetrics
   */
  readonly shardLevelMetrics: string[];

}

/**
 * @schema KinesisEnhancedMonitoringOutput
 */
export interface KinesisEnhancedMonitoringOutput {
  /**
   * @schema KinesisEnhancedMonitoringOutput#StreamName
   */
  readonly streamName?: string;

  /**
   * @schema KinesisEnhancedMonitoringOutput#CurrentShardLevelMetrics
   */
  readonly currentShardLevelMetrics?: string[];

  /**
   * @schema KinesisEnhancedMonitoringOutput#DesiredShardLevelMetrics
   */
  readonly desiredShardLevelMetrics?: string[];

}

/**
 * @schema KinesisEnableEnhancedMonitoringInput
 */
export interface KinesisEnableEnhancedMonitoringInput {
  /**
   * @schema KinesisEnableEnhancedMonitoringInput#StreamName
   */
  readonly streamName: string;

  /**
   * @schema KinesisEnableEnhancedMonitoringInput#ShardLevelMetrics
   */
  readonly shardLevelMetrics: string[];

}

/**
 * @schema KinesisGetRecordsInput
 */
export interface KinesisGetRecordsInput {
  /**
   * @schema KinesisGetRecordsInput#ShardIterator
   */
  readonly shardIterator: string;

  /**
   * @schema KinesisGetRecordsInput#Limit
   */
  readonly limit?: number;

}

/**
 * @schema KinesisGetRecordsOutput
 */
export interface KinesisGetRecordsOutput {
  /**
   * @schema KinesisGetRecordsOutput#Records
   */
  readonly records: KinesisRecord[];

  /**
   * @schema KinesisGetRecordsOutput#NextShardIterator
   */
  readonly nextShardIterator?: string;

  /**
   * @schema KinesisGetRecordsOutput#MillisBehindLatest
   */
  readonly millisBehindLatest?: number;

  /**
   * @schema KinesisGetRecordsOutput#ChildShards
   */
  readonly childShards?: KinesisChildShard[];

}

/**
 * @schema KinesisGetShardIteratorInput
 */
export interface KinesisGetShardIteratorInput {
  /**
   * @schema KinesisGetShardIteratorInput#StreamName
   */
  readonly streamName: string;

  /**
   * @schema KinesisGetShardIteratorInput#ShardId
   */
  readonly shardId: string;

  /**
   * @schema KinesisGetShardIteratorInput#ShardIteratorType
   */
  readonly shardIteratorType: string;

  /**
   * @schema KinesisGetShardIteratorInput#StartingSequenceNumber
   */
  readonly startingSequenceNumber?: string;

  /**
   * @schema KinesisGetShardIteratorInput#Timestamp
   */
  readonly timestamp?: string;

}

/**
 * @schema KinesisGetShardIteratorOutput
 */
export interface KinesisGetShardIteratorOutput {
  /**
   * @schema KinesisGetShardIteratorOutput#ShardIterator
   */
  readonly shardIterator?: string;

}

/**
 * @schema KinesisIncreaseStreamRetentionPeriodInput
 */
export interface KinesisIncreaseStreamRetentionPeriodInput {
  /**
   * @schema KinesisIncreaseStreamRetentionPeriodInput#StreamName
   */
  readonly streamName: string;

  /**
   * @schema KinesisIncreaseStreamRetentionPeriodInput#RetentionPeriodHours
   */
  readonly retentionPeriodHours: number;

}

/**
 * @schema KinesisListShardsInput
 */
export interface KinesisListShardsInput {
  /**
   * @schema KinesisListShardsInput#StreamName
   */
  readonly streamName?: string;

  /**
   * @schema KinesisListShardsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema KinesisListShardsInput#ExclusiveStartShardId
   */
  readonly exclusiveStartShardId?: string;

  /**
   * @schema KinesisListShardsInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema KinesisListShardsInput#StreamCreationTimestamp
   */
  readonly streamCreationTimestamp?: string;

  /**
   * @schema KinesisListShardsInput#ShardFilter
   */
  readonly shardFilter?: KinesisShardFilter;

}

/**
 * @schema KinesisListShardsOutput
 */
export interface KinesisListShardsOutput {
  /**
   * @schema KinesisListShardsOutput#Shards
   */
  readonly shards?: KinesisShard[];

  /**
   * @schema KinesisListShardsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema KinesisListStreamConsumersInput
 */
export interface KinesisListStreamConsumersInput {
  /**
   * @schema KinesisListStreamConsumersInput#StreamARN
   */
  readonly streamArn: string;

  /**
   * @schema KinesisListStreamConsumersInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema KinesisListStreamConsumersInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema KinesisListStreamConsumersInput#StreamCreationTimestamp
   */
  readonly streamCreationTimestamp?: string;

}

/**
 * @schema KinesisListStreamConsumersOutput
 */
export interface KinesisListStreamConsumersOutput {
  /**
   * @schema KinesisListStreamConsumersOutput#Consumers
   */
  readonly consumers?: KinesisConsumer[];

  /**
   * @schema KinesisListStreamConsumersOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema KinesisListStreamsInput
 */
export interface KinesisListStreamsInput {
  /**
   * @schema KinesisListStreamsInput#Limit
   */
  readonly limit?: number;

  /**
   * @schema KinesisListStreamsInput#ExclusiveStartStreamName
   */
  readonly exclusiveStartStreamName?: string;

}

/**
 * @schema KinesisListStreamsOutput
 */
export interface KinesisListStreamsOutput {
  /**
   * @schema KinesisListStreamsOutput#StreamNames
   */
  readonly streamNames: string[];

  /**
   * @schema KinesisListStreamsOutput#HasMoreStreams
   */
  readonly hasMoreStreams: boolean;

}

/**
 * @schema KinesisListTagsForStreamInput
 */
export interface KinesisListTagsForStreamInput {
  /**
   * @schema KinesisListTagsForStreamInput#StreamName
   */
  readonly streamName: string;

  /**
   * @schema KinesisListTagsForStreamInput#ExclusiveStartTagKey
   */
  readonly exclusiveStartTagKey?: string;

  /**
   * @schema KinesisListTagsForStreamInput#Limit
   */
  readonly limit?: number;

}

/**
 * @schema KinesisListTagsForStreamOutput
 */
export interface KinesisListTagsForStreamOutput {
  /**
   * @schema KinesisListTagsForStreamOutput#Tags
   */
  readonly tags: KinesisTag[];

  /**
   * @schema KinesisListTagsForStreamOutput#HasMoreTags
   */
  readonly hasMoreTags: boolean;

}

/**
 * @schema KinesisMergeShardsInput
 */
export interface KinesisMergeShardsInput {
  /**
   * @schema KinesisMergeShardsInput#StreamName
   */
  readonly streamName: string;

  /**
   * @schema KinesisMergeShardsInput#ShardToMerge
   */
  readonly shardToMerge: string;

  /**
   * @schema KinesisMergeShardsInput#AdjacentShardToMerge
   */
  readonly adjacentShardToMerge: string;

}

/**
 * @schema KinesisPutRecordInput
 */
export interface KinesisPutRecordInput {
  /**
   * @schema KinesisPutRecordInput#StreamName
   */
  readonly streamName: string;

  /**
   * @schema KinesisPutRecordInput#Data
   */
  readonly data: any;

  /**
   * @schema KinesisPutRecordInput#PartitionKey
   */
  readonly partitionKey: string;

  /**
   * @schema KinesisPutRecordInput#ExplicitHashKey
   */
  readonly explicitHashKey?: string;

  /**
   * @schema KinesisPutRecordInput#SequenceNumberForOrdering
   */
  readonly sequenceNumberForOrdering?: string;

}

/**
 * @schema KinesisPutRecordOutput
 */
export interface KinesisPutRecordOutput {
  /**
   * @schema KinesisPutRecordOutput#ShardId
   */
  readonly shardId: string;

  /**
   * @schema KinesisPutRecordOutput#SequenceNumber
   */
  readonly sequenceNumber: string;

  /**
   * @schema KinesisPutRecordOutput#EncryptionType
   */
  readonly encryptionType?: string;

}

/**
 * @schema KinesisPutRecordsInput
 */
export interface KinesisPutRecordsInput {
  /**
   * @schema KinesisPutRecordsInput#Records
   */
  readonly records: KinesisPutRecordsRequestEntry[];

  /**
   * @schema KinesisPutRecordsInput#StreamName
   */
  readonly streamName: string;

}

/**
 * @schema KinesisPutRecordsOutput
 */
export interface KinesisPutRecordsOutput {
  /**
   * @schema KinesisPutRecordsOutput#FailedRecordCount
   */
  readonly failedRecordCount?: number;

  /**
   * @schema KinesisPutRecordsOutput#Records
   */
  readonly records: KinesisPutRecordsResultEntry[];

  /**
   * @schema KinesisPutRecordsOutput#EncryptionType
   */
  readonly encryptionType?: string;

}

/**
 * @schema KinesisRegisterStreamConsumerInput
 */
export interface KinesisRegisterStreamConsumerInput {
  /**
   * @schema KinesisRegisterStreamConsumerInput#StreamARN
   */
  readonly streamArn: string;

  /**
   * @schema KinesisRegisterStreamConsumerInput#ConsumerName
   */
  readonly consumerName: string;

}

/**
 * @schema KinesisRegisterStreamConsumerOutput
 */
export interface KinesisRegisterStreamConsumerOutput {
  /**
   * @schema KinesisRegisterStreamConsumerOutput#Consumer
   */
  readonly consumer: KinesisConsumer;

}

/**
 * @schema KinesisRemoveTagsFromStreamInput
 */
export interface KinesisRemoveTagsFromStreamInput {
  /**
   * @schema KinesisRemoveTagsFromStreamInput#StreamName
   */
  readonly streamName: string;

  /**
   * @schema KinesisRemoveTagsFromStreamInput#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema KinesisSplitShardInput
 */
export interface KinesisSplitShardInput {
  /**
   * @schema KinesisSplitShardInput#StreamName
   */
  readonly streamName: string;

  /**
   * @schema KinesisSplitShardInput#ShardToSplit
   */
  readonly shardToSplit: string;

  /**
   * @schema KinesisSplitShardInput#NewStartingHashKey
   */
  readonly newStartingHashKey: string;

}

/**
 * @schema KinesisStartStreamEncryptionInput
 */
export interface KinesisStartStreamEncryptionInput {
  /**
   * @schema KinesisStartStreamEncryptionInput#StreamName
   */
  readonly streamName: string;

  /**
   * @schema KinesisStartStreamEncryptionInput#EncryptionType
   */
  readonly encryptionType: string;

  /**
   * @schema KinesisStartStreamEncryptionInput#KeyId
   */
  readonly keyId: string;

}

/**
 * @schema KinesisStopStreamEncryptionInput
 */
export interface KinesisStopStreamEncryptionInput {
  /**
   * @schema KinesisStopStreamEncryptionInput#StreamName
   */
  readonly streamName: string;

  /**
   * @schema KinesisStopStreamEncryptionInput#EncryptionType
   */
  readonly encryptionType: string;

  /**
   * @schema KinesisStopStreamEncryptionInput#KeyId
   */
  readonly keyId: string;

}

/**
 * @schema KinesisUpdateShardCountInput
 */
export interface KinesisUpdateShardCountInput {
  /**
   * @schema KinesisUpdateShardCountInput#StreamName
   */
  readonly streamName: string;

  /**
   * @schema KinesisUpdateShardCountInput#TargetShardCount
   */
  readonly targetShardCount: number;

  /**
   * @schema KinesisUpdateShardCountInput#ScalingType
   */
  readonly scalingType: string;

}

/**
 * @schema KinesisUpdateShardCountOutput
 */
export interface KinesisUpdateShardCountOutput {
  /**
   * @schema KinesisUpdateShardCountOutput#StreamName
   */
  readonly streamName?: string;

  /**
   * @schema KinesisUpdateShardCountOutput#CurrentShardCount
   */
  readonly currentShardCount?: number;

  /**
   * @schema KinesisUpdateShardCountOutput#TargetShardCount
   */
  readonly targetShardCount?: number;

}

/**
 * @schema KinesisStreamDescription
 */
export interface KinesisStreamDescription {
  /**
   * @schema KinesisStreamDescription#StreamName
   */
  readonly streamName: string;

  /**
   * @schema KinesisStreamDescription#StreamARN
   */
  readonly streamArn: string;

  /**
   * @schema KinesisStreamDescription#StreamStatus
   */
  readonly streamStatus: string;

  /**
   * @schema KinesisStreamDescription#Shards
   */
  readonly shards: KinesisShard[];

  /**
   * @schema KinesisStreamDescription#HasMoreShards
   */
  readonly hasMoreShards: boolean;

  /**
   * @schema KinesisStreamDescription#RetentionPeriodHours
   */
  readonly retentionPeriodHours: number;

  /**
   * @schema KinesisStreamDescription#StreamCreationTimestamp
   */
  readonly streamCreationTimestamp: string;

  /**
   * @schema KinesisStreamDescription#EnhancedMonitoring
   */
  readonly enhancedMonitoring: KinesisEnhancedMetrics[];

  /**
   * @schema KinesisStreamDescription#EncryptionType
   */
  readonly encryptionType?: string;

  /**
   * @schema KinesisStreamDescription#KeyId
   */
  readonly keyId?: string;

}

/**
 * @schema KinesisConsumerDescription
 */
export interface KinesisConsumerDescription {
  /**
   * @schema KinesisConsumerDescription#ConsumerName
   */
  readonly consumerName: string;

  /**
   * @schema KinesisConsumerDescription#ConsumerARN
   */
  readonly consumerArn: string;

  /**
   * @schema KinesisConsumerDescription#ConsumerStatus
   */
  readonly consumerStatus: string;

  /**
   * @schema KinesisConsumerDescription#ConsumerCreationTimestamp
   */
  readonly consumerCreationTimestamp: string;

  /**
   * @schema KinesisConsumerDescription#StreamARN
   */
  readonly streamArn: string;

}

/**
 * @schema KinesisStreamDescriptionSummary
 */
export interface KinesisStreamDescriptionSummary {
  /**
   * @schema KinesisStreamDescriptionSummary#StreamName
   */
  readonly streamName: string;

  /**
   * @schema KinesisStreamDescriptionSummary#StreamARN
   */
  readonly streamArn: string;

  /**
   * @schema KinesisStreamDescriptionSummary#StreamStatus
   */
  readonly streamStatus: string;

  /**
   * @schema KinesisStreamDescriptionSummary#RetentionPeriodHours
   */
  readonly retentionPeriodHours: number;

  /**
   * @schema KinesisStreamDescriptionSummary#StreamCreationTimestamp
   */
  readonly streamCreationTimestamp: string;

  /**
   * @schema KinesisStreamDescriptionSummary#EnhancedMonitoring
   */
  readonly enhancedMonitoring: KinesisEnhancedMetrics[];

  /**
   * @schema KinesisStreamDescriptionSummary#EncryptionType
   */
  readonly encryptionType?: string;

  /**
   * @schema KinesisStreamDescriptionSummary#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema KinesisStreamDescriptionSummary#OpenShardCount
   */
  readonly openShardCount: number;

  /**
   * @schema KinesisStreamDescriptionSummary#ConsumerCount
   */
  readonly consumerCount?: number;

}

/**
 * @schema KinesisRecord
 */
export interface KinesisRecord {
  /**
   * @schema KinesisRecord#SequenceNumber
   */
  readonly sequenceNumber: string;

  /**
   * @schema KinesisRecord#ApproximateArrivalTimestamp
   */
  readonly approximateArrivalTimestamp?: string;

  /**
   * @schema KinesisRecord#Data
   */
  readonly data: any;

  /**
   * @schema KinesisRecord#PartitionKey
   */
  readonly partitionKey: string;

  /**
   * @schema KinesisRecord#EncryptionType
   */
  readonly encryptionType?: string;

}

/**
 * @schema KinesisChildShard
 */
export interface KinesisChildShard {
  /**
   * @schema KinesisChildShard#ShardId
   */
  readonly shardId: string;

  /**
   * @schema KinesisChildShard#ParentShards
   */
  readonly parentShards: string[];

  /**
   * @schema KinesisChildShard#HashKeyRange
   */
  readonly hashKeyRange: KinesisHashKeyRange;

}

/**
 * @schema KinesisShardFilter
 */
export interface KinesisShardFilter {
  /**
   * @schema KinesisShardFilter#Type
   */
  readonly type: string;

  /**
   * @schema KinesisShardFilter#ShardId
   */
  readonly shardId?: string;

  /**
   * @schema KinesisShardFilter#Timestamp
   */
  readonly timestamp?: string;

}

/**
 * @schema KinesisShard
 */
export interface KinesisShard {
  /**
   * @schema KinesisShard#ShardId
   */
  readonly shardId: string;

  /**
   * @schema KinesisShard#ParentShardId
   */
  readonly parentShardId?: string;

  /**
   * @schema KinesisShard#AdjacentParentShardId
   */
  readonly adjacentParentShardId?: string;

  /**
   * @schema KinesisShard#HashKeyRange
   */
  readonly hashKeyRange: KinesisHashKeyRange;

  /**
   * @schema KinesisShard#SequenceNumberRange
   */
  readonly sequenceNumberRange: KinesisSequenceNumberRange;

}

/**
 * @schema KinesisConsumer
 */
export interface KinesisConsumer {
  /**
   * @schema KinesisConsumer#ConsumerName
   */
  readonly consumerName: string;

  /**
   * @schema KinesisConsumer#ConsumerARN
   */
  readonly consumerArn: string;

  /**
   * @schema KinesisConsumer#ConsumerStatus
   */
  readonly consumerStatus: string;

  /**
   * @schema KinesisConsumer#ConsumerCreationTimestamp
   */
  readonly consumerCreationTimestamp: string;

}

/**
 * @schema KinesisTag
 */
export interface KinesisTag {
  /**
   * @schema KinesisTag#Key
   */
  readonly key: string;

  /**
   * @schema KinesisTag#Value
   */
  readonly value?: string;

}

/**
 * @schema KinesisPutRecordsRequestEntry
 */
export interface KinesisPutRecordsRequestEntry {
  /**
   * @schema KinesisPutRecordsRequestEntry#Data
   */
  readonly data: any;

  /**
   * @schema KinesisPutRecordsRequestEntry#ExplicitHashKey
   */
  readonly explicitHashKey?: string;

  /**
   * @schema KinesisPutRecordsRequestEntry#PartitionKey
   */
  readonly partitionKey: string;

}

/**
 * @schema KinesisPutRecordsResultEntry
 */
export interface KinesisPutRecordsResultEntry {
  /**
   * @schema KinesisPutRecordsResultEntry#SequenceNumber
   */
  readonly sequenceNumber?: string;

  /**
   * @schema KinesisPutRecordsResultEntry#ShardId
   */
  readonly shardId?: string;

  /**
   * @schema KinesisPutRecordsResultEntry#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema KinesisPutRecordsResultEntry#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema KinesisEnhancedMetrics
 */
export interface KinesisEnhancedMetrics {
  /**
   * @schema KinesisEnhancedMetrics#ShardLevelMetrics
   */
  readonly shardLevelMetrics?: string[];

}

/**
 * @schema KinesisHashKeyRange
 */
export interface KinesisHashKeyRange {
  /**
   * @schema KinesisHashKeyRange#StartingHashKey
   */
  readonly startingHashKey: string;

  /**
   * @schema KinesisHashKeyRange#EndingHashKey
   */
  readonly endingHashKey: string;

}

/**
 * @schema KinesisSequenceNumberRange
 */
export interface KinesisSequenceNumberRange {
  /**
   * @schema KinesisSequenceNumberRange#StartingSequenceNumber
   */
  readonly startingSequenceNumber: string;

  /**
   * @schema KinesisSequenceNumberRange#EndingSequenceNumber
   */
  readonly endingSequenceNumber?: string;

}
