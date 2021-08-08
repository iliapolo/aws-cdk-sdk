/**
 * @schema KinesisAddTagsToStreamInput
 */
export interface KinesisAddTagsToStreamInput {
  /**
   * @schema KinesisAddTagsToStreamInput#StreamName
   */
  readonly streamName?: string;

  /**
   * @schema KinesisAddTagsToStreamInput#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'KinesisAddTagsToStreamInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAddTagsToStreamInput(obj: KinesisAddTagsToStreamInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamName': obj.streamName,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisCreateStreamInput
 */
export interface KinesisCreateStreamInput {
  /**
   * @schema KinesisCreateStreamInput#StreamName
   */
  readonly streamName?: string;

  /**
   * @schema KinesisCreateStreamInput#ShardCount
   */
  readonly shardCount?: number;

}

/**
 * Converts an object of type 'KinesisCreateStreamInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisCreateStreamInput(obj: KinesisCreateStreamInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamName': obj.streamName,
    'ShardCount': obj.shardCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisDecreaseStreamRetentionPeriodInput
 */
export interface KinesisDecreaseStreamRetentionPeriodInput {
  /**
   * @schema KinesisDecreaseStreamRetentionPeriodInput#StreamName
   */
  readonly streamName?: string;

  /**
   * @schema KinesisDecreaseStreamRetentionPeriodInput#RetentionPeriodHours
   */
  readonly retentionPeriodHours?: number;

}

/**
 * Converts an object of type 'KinesisDecreaseStreamRetentionPeriodInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisDecreaseStreamRetentionPeriodInput(obj: KinesisDecreaseStreamRetentionPeriodInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamName': obj.streamName,
    'RetentionPeriodHours': obj.retentionPeriodHours,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisDeleteStreamInput
 */
export interface KinesisDeleteStreamInput {
  /**
   * @schema KinesisDeleteStreamInput#StreamName
   */
  readonly streamName?: string;

  /**
   * @schema KinesisDeleteStreamInput#EnforceConsumerDeletion
   */
  readonly enforceConsumerDeletion?: boolean;

}

/**
 * Converts an object of type 'KinesisDeleteStreamInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisDeleteStreamInput(obj: KinesisDeleteStreamInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamName': obj.streamName,
    'EnforceConsumerDeletion': obj.enforceConsumerDeletion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'KinesisDeregisterStreamConsumerInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisDeregisterStreamConsumerInput(obj: KinesisDeregisterStreamConsumerInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamARN': obj.streamArn,
    'ConsumerName': obj.consumerName,
    'ConsumerARN': obj.consumerArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisDescribeLimitsInput
 */
export interface KinesisDescribeLimitsInput {
}

/**
 * Converts an object of type 'KinesisDescribeLimitsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisDescribeLimitsInput(obj: KinesisDescribeLimitsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisDescribeLimitsOutput
 */
export interface KinesisDescribeLimitsOutput {
  /**
   * @schema KinesisDescribeLimitsOutput#ShardLimit
   */
  readonly shardLimit?: number;

  /**
   * @schema KinesisDescribeLimitsOutput#OpenShardCount
   */
  readonly openShardCount?: number;

}

/**
 * Converts an object of type 'KinesisDescribeLimitsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisDescribeLimitsOutput(obj: KinesisDescribeLimitsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ShardLimit': obj.shardLimit,
    'OpenShardCount': obj.openShardCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisDescribeStreamInput
 */
export interface KinesisDescribeStreamInput {
  /**
   * @schema KinesisDescribeStreamInput#StreamName
   */
  readonly streamName?: string;

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
 * Converts an object of type 'KinesisDescribeStreamInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisDescribeStreamInput(obj: KinesisDescribeStreamInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamName': obj.streamName,
    'Limit': obj.limit,
    'ExclusiveStartShardId': obj.exclusiveStartShardId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisDescribeStreamOutput
 */
export interface KinesisDescribeStreamOutput {
  /**
   * @schema KinesisDescribeStreamOutput#StreamDescription
   */
  readonly streamDescription?: KinesisStreamDescription;

}

/**
 * Converts an object of type 'KinesisDescribeStreamOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisDescribeStreamOutput(obj: KinesisDescribeStreamOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamDescription': toJson_KinesisStreamDescription(obj.streamDescription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'KinesisDescribeStreamConsumerInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisDescribeStreamConsumerInput(obj: KinesisDescribeStreamConsumerInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamARN': obj.streamArn,
    'ConsumerName': obj.consumerName,
    'ConsumerARN': obj.consumerArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisDescribeStreamConsumerOutput
 */
export interface KinesisDescribeStreamConsumerOutput {
  /**
   * @schema KinesisDescribeStreamConsumerOutput#ConsumerDescription
   */
  readonly consumerDescription?: KinesisConsumerDescription;

}

/**
 * Converts an object of type 'KinesisDescribeStreamConsumerOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisDescribeStreamConsumerOutput(obj: KinesisDescribeStreamConsumerOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConsumerDescription': toJson_KinesisConsumerDescription(obj.consumerDescription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisDescribeStreamSummaryInput
 */
export interface KinesisDescribeStreamSummaryInput {
  /**
   * @schema KinesisDescribeStreamSummaryInput#StreamName
   */
  readonly streamName?: string;

}

/**
 * Converts an object of type 'KinesisDescribeStreamSummaryInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisDescribeStreamSummaryInput(obj: KinesisDescribeStreamSummaryInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamName': obj.streamName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisDescribeStreamSummaryOutput
 */
export interface KinesisDescribeStreamSummaryOutput {
  /**
   * @schema KinesisDescribeStreamSummaryOutput#StreamDescriptionSummary
   */
  readonly streamDescriptionSummary?: KinesisStreamDescriptionSummary;

}

/**
 * Converts an object of type 'KinesisDescribeStreamSummaryOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisDescribeStreamSummaryOutput(obj: KinesisDescribeStreamSummaryOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamDescriptionSummary': toJson_KinesisStreamDescriptionSummary(obj.streamDescriptionSummary),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisDisableEnhancedMonitoringInput
 */
export interface KinesisDisableEnhancedMonitoringInput {
  /**
   * @schema KinesisDisableEnhancedMonitoringInput#StreamName
   */
  readonly streamName?: string;

  /**
   * @schema KinesisDisableEnhancedMonitoringInput#ShardLevelMetrics
   */
  readonly shardLevelMetrics?: string[];

}

/**
 * Converts an object of type 'KinesisDisableEnhancedMonitoringInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisDisableEnhancedMonitoringInput(obj: KinesisDisableEnhancedMonitoringInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamName': obj.streamName,
    'ShardLevelMetrics': obj.shardLevelMetrics?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'KinesisEnhancedMonitoringOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisEnhancedMonitoringOutput(obj: KinesisEnhancedMonitoringOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamName': obj.streamName,
    'CurrentShardLevelMetrics': obj.currentShardLevelMetrics?.map(y => y),
    'DesiredShardLevelMetrics': obj.desiredShardLevelMetrics?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisEnableEnhancedMonitoringInput
 */
export interface KinesisEnableEnhancedMonitoringInput {
  /**
   * @schema KinesisEnableEnhancedMonitoringInput#StreamName
   */
  readonly streamName?: string;

  /**
   * @schema KinesisEnableEnhancedMonitoringInput#ShardLevelMetrics
   */
  readonly shardLevelMetrics?: string[];

}

/**
 * Converts an object of type 'KinesisEnableEnhancedMonitoringInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisEnableEnhancedMonitoringInput(obj: KinesisEnableEnhancedMonitoringInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamName': obj.streamName,
    'ShardLevelMetrics': obj.shardLevelMetrics?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisGetRecordsInput
 */
export interface KinesisGetRecordsInput {
  /**
   * @schema KinesisGetRecordsInput#ShardIterator
   */
  readonly shardIterator?: string;

  /**
   * @schema KinesisGetRecordsInput#Limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'KinesisGetRecordsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisGetRecordsInput(obj: KinesisGetRecordsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ShardIterator': obj.shardIterator,
    'Limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisGetRecordsOutput
 */
export interface KinesisGetRecordsOutput {
  /**
   * @schema KinesisGetRecordsOutput#Records
   */
  readonly records?: KinesisRecord[];

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
 * Converts an object of type 'KinesisGetRecordsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisGetRecordsOutput(obj: KinesisGetRecordsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Records': obj.records?.map(y => toJson_KinesisRecord(y)),
    'NextShardIterator': obj.nextShardIterator,
    'MillisBehindLatest': obj.millisBehindLatest,
    'ChildShards': obj.childShards?.map(y => toJson_KinesisChildShard(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisGetShardIteratorInput
 */
export interface KinesisGetShardIteratorInput {
  /**
   * @schema KinesisGetShardIteratorInput#StreamName
   */
  readonly streamName?: string;

  /**
   * @schema KinesisGetShardIteratorInput#ShardId
   */
  readonly shardId?: string;

  /**
   * @schema KinesisGetShardIteratorInput#ShardIteratorType
   */
  readonly shardIteratorType?: string;

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
 * Converts an object of type 'KinesisGetShardIteratorInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisGetShardIteratorInput(obj: KinesisGetShardIteratorInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamName': obj.streamName,
    'ShardId': obj.shardId,
    'ShardIteratorType': obj.shardIteratorType,
    'StartingSequenceNumber': obj.startingSequenceNumber,
    'Timestamp': obj.timestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'KinesisGetShardIteratorOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisGetShardIteratorOutput(obj: KinesisGetShardIteratorOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ShardIterator': obj.shardIterator,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisIncreaseStreamRetentionPeriodInput
 */
export interface KinesisIncreaseStreamRetentionPeriodInput {
  /**
   * @schema KinesisIncreaseStreamRetentionPeriodInput#StreamName
   */
  readonly streamName?: string;

  /**
   * @schema KinesisIncreaseStreamRetentionPeriodInput#RetentionPeriodHours
   */
  readonly retentionPeriodHours?: number;

}

/**
 * Converts an object of type 'KinesisIncreaseStreamRetentionPeriodInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisIncreaseStreamRetentionPeriodInput(obj: KinesisIncreaseStreamRetentionPeriodInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamName': obj.streamName,
    'RetentionPeriodHours': obj.retentionPeriodHours,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'KinesisListShardsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisListShardsInput(obj: KinesisListShardsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamName': obj.streamName,
    'NextToken': obj.nextToken,
    'ExclusiveStartShardId': obj.exclusiveStartShardId,
    'MaxResults': obj.maxResults,
    'StreamCreationTimestamp': obj.streamCreationTimestamp,
    'ShardFilter': toJson_KinesisShardFilter(obj.shardFilter),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'KinesisListShardsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisListShardsOutput(obj: KinesisListShardsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Shards': obj.shards?.map(y => toJson_KinesisShard(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisListStreamConsumersInput
 */
export interface KinesisListStreamConsumersInput {
  /**
   * @schema KinesisListStreamConsumersInput#StreamARN
   */
  readonly streamArn?: string;

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
 * Converts an object of type 'KinesisListStreamConsumersInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisListStreamConsumersInput(obj: KinesisListStreamConsumersInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamARN': obj.streamArn,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'StreamCreationTimestamp': obj.streamCreationTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'KinesisListStreamConsumersOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisListStreamConsumersOutput(obj: KinesisListStreamConsumersOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Consumers': obj.consumers?.map(y => toJson_KinesisConsumer(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'KinesisListStreamsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisListStreamsInput(obj: KinesisListStreamsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Limit': obj.limit,
    'ExclusiveStartStreamName': obj.exclusiveStartStreamName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisListStreamsOutput
 */
export interface KinesisListStreamsOutput {
  /**
   * @schema KinesisListStreamsOutput#StreamNames
   */
  readonly streamNames?: string[];

  /**
   * @schema KinesisListStreamsOutput#HasMoreStreams
   */
  readonly hasMoreStreams?: boolean;

}

/**
 * Converts an object of type 'KinesisListStreamsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisListStreamsOutput(obj: KinesisListStreamsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamNames': obj.streamNames?.map(y => y),
    'HasMoreStreams': obj.hasMoreStreams,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisListTagsForStreamInput
 */
export interface KinesisListTagsForStreamInput {
  /**
   * @schema KinesisListTagsForStreamInput#StreamName
   */
  readonly streamName?: string;

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
 * Converts an object of type 'KinesisListTagsForStreamInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisListTagsForStreamInput(obj: KinesisListTagsForStreamInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamName': obj.streamName,
    'ExclusiveStartTagKey': obj.exclusiveStartTagKey,
    'Limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisListTagsForStreamOutput
 */
export interface KinesisListTagsForStreamOutput {
  /**
   * @schema KinesisListTagsForStreamOutput#Tags
   */
  readonly tags?: KinesisTag[];

  /**
   * @schema KinesisListTagsForStreamOutput#HasMoreTags
   */
  readonly hasMoreTags?: boolean;

}

/**
 * Converts an object of type 'KinesisListTagsForStreamOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisListTagsForStreamOutput(obj: KinesisListTagsForStreamOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': obj.tags?.map(y => toJson_KinesisTag(y)),
    'HasMoreTags': obj.hasMoreTags,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisMergeShardsInput
 */
export interface KinesisMergeShardsInput {
  /**
   * @schema KinesisMergeShardsInput#StreamName
   */
  readonly streamName?: string;

  /**
   * @schema KinesisMergeShardsInput#ShardToMerge
   */
  readonly shardToMerge?: string;

  /**
   * @schema KinesisMergeShardsInput#AdjacentShardToMerge
   */
  readonly adjacentShardToMerge?: string;

}

/**
 * Converts an object of type 'KinesisMergeShardsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisMergeShardsInput(obj: KinesisMergeShardsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamName': obj.streamName,
    'ShardToMerge': obj.shardToMerge,
    'AdjacentShardToMerge': obj.adjacentShardToMerge,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisPutRecordInput
 */
export interface KinesisPutRecordInput {
  /**
   * @schema KinesisPutRecordInput#StreamName
   */
  readonly streamName?: string;

  /**
   * @schema KinesisPutRecordInput#Data
   */
  readonly data?: any;

  /**
   * @schema KinesisPutRecordInput#PartitionKey
   */
  readonly partitionKey?: string;

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
 * Converts an object of type 'KinesisPutRecordInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisPutRecordInput(obj: KinesisPutRecordInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamName': obj.streamName,
    'Data': obj.data,
    'PartitionKey': obj.partitionKey,
    'ExplicitHashKey': obj.explicitHashKey,
    'SequenceNumberForOrdering': obj.sequenceNumberForOrdering,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisPutRecordOutput
 */
export interface KinesisPutRecordOutput {
  /**
   * @schema KinesisPutRecordOutput#ShardId
   */
  readonly shardId?: string;

  /**
   * @schema KinesisPutRecordOutput#SequenceNumber
   */
  readonly sequenceNumber?: string;

  /**
   * @schema KinesisPutRecordOutput#EncryptionType
   */
  readonly encryptionType?: string;

}

/**
 * Converts an object of type 'KinesisPutRecordOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisPutRecordOutput(obj: KinesisPutRecordOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ShardId': obj.shardId,
    'SequenceNumber': obj.sequenceNumber,
    'EncryptionType': obj.encryptionType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisPutRecordsInput
 */
export interface KinesisPutRecordsInput {
  /**
   * @schema KinesisPutRecordsInput#Records
   */
  readonly records?: KinesisPutRecordsRequestEntry[];

  /**
   * @schema KinesisPutRecordsInput#StreamName
   */
  readonly streamName?: string;

}

/**
 * Converts an object of type 'KinesisPutRecordsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisPutRecordsInput(obj: KinesisPutRecordsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Records': obj.records?.map(y => toJson_KinesisPutRecordsRequestEntry(y)),
    'StreamName': obj.streamName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly records?: KinesisPutRecordsResultEntry[];

  /**
   * @schema KinesisPutRecordsOutput#EncryptionType
   */
  readonly encryptionType?: string;

}

/**
 * Converts an object of type 'KinesisPutRecordsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisPutRecordsOutput(obj: KinesisPutRecordsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FailedRecordCount': obj.failedRecordCount,
    'Records': obj.records?.map(y => toJson_KinesisPutRecordsResultEntry(y)),
    'EncryptionType': obj.encryptionType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisRegisterStreamConsumerInput
 */
export interface KinesisRegisterStreamConsumerInput {
  /**
   * @schema KinesisRegisterStreamConsumerInput#StreamARN
   */
  readonly streamArn?: string;

  /**
   * @schema KinesisRegisterStreamConsumerInput#ConsumerName
   */
  readonly consumerName?: string;

}

/**
 * Converts an object of type 'KinesisRegisterStreamConsumerInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisRegisterStreamConsumerInput(obj: KinesisRegisterStreamConsumerInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamARN': obj.streamArn,
    'ConsumerName': obj.consumerName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisRegisterStreamConsumerOutput
 */
export interface KinesisRegisterStreamConsumerOutput {
  /**
   * @schema KinesisRegisterStreamConsumerOutput#Consumer
   */
  readonly consumer?: KinesisConsumer;

}

/**
 * Converts an object of type 'KinesisRegisterStreamConsumerOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisRegisterStreamConsumerOutput(obj: KinesisRegisterStreamConsumerOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Consumer': toJson_KinesisConsumer(obj.consumer),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisRemoveTagsFromStreamInput
 */
export interface KinesisRemoveTagsFromStreamInput {
  /**
   * @schema KinesisRemoveTagsFromStreamInput#StreamName
   */
  readonly streamName?: string;

  /**
   * @schema KinesisRemoveTagsFromStreamInput#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'KinesisRemoveTagsFromStreamInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisRemoveTagsFromStreamInput(obj: KinesisRemoveTagsFromStreamInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamName': obj.streamName,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisSplitShardInput
 */
export interface KinesisSplitShardInput {
  /**
   * @schema KinesisSplitShardInput#StreamName
   */
  readonly streamName?: string;

  /**
   * @schema KinesisSplitShardInput#ShardToSplit
   */
  readonly shardToSplit?: string;

  /**
   * @schema KinesisSplitShardInput#NewStartingHashKey
   */
  readonly newStartingHashKey?: string;

}

/**
 * Converts an object of type 'KinesisSplitShardInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisSplitShardInput(obj: KinesisSplitShardInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamName': obj.streamName,
    'ShardToSplit': obj.shardToSplit,
    'NewStartingHashKey': obj.newStartingHashKey,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisStartStreamEncryptionInput
 */
export interface KinesisStartStreamEncryptionInput {
  /**
   * @schema KinesisStartStreamEncryptionInput#StreamName
   */
  readonly streamName?: string;

  /**
   * @schema KinesisStartStreamEncryptionInput#EncryptionType
   */
  readonly encryptionType?: string;

  /**
   * @schema KinesisStartStreamEncryptionInput#KeyId
   */
  readonly keyId?: string;

}

/**
 * Converts an object of type 'KinesisStartStreamEncryptionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisStartStreamEncryptionInput(obj: KinesisStartStreamEncryptionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamName': obj.streamName,
    'EncryptionType': obj.encryptionType,
    'KeyId': obj.keyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisStopStreamEncryptionInput
 */
export interface KinesisStopStreamEncryptionInput {
  /**
   * @schema KinesisStopStreamEncryptionInput#StreamName
   */
  readonly streamName?: string;

  /**
   * @schema KinesisStopStreamEncryptionInput#EncryptionType
   */
  readonly encryptionType?: string;

  /**
   * @schema KinesisStopStreamEncryptionInput#KeyId
   */
  readonly keyId?: string;

}

/**
 * Converts an object of type 'KinesisStopStreamEncryptionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisStopStreamEncryptionInput(obj: KinesisStopStreamEncryptionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamName': obj.streamName,
    'EncryptionType': obj.encryptionType,
    'KeyId': obj.keyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisUpdateShardCountInput
 */
export interface KinesisUpdateShardCountInput {
  /**
   * @schema KinesisUpdateShardCountInput#StreamName
   */
  readonly streamName?: string;

  /**
   * @schema KinesisUpdateShardCountInput#TargetShardCount
   */
  readonly targetShardCount?: number;

  /**
   * @schema KinesisUpdateShardCountInput#ScalingType
   */
  readonly scalingType?: string;

}

/**
 * Converts an object of type 'KinesisUpdateShardCountInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisUpdateShardCountInput(obj: KinesisUpdateShardCountInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamName': obj.streamName,
    'TargetShardCount': obj.targetShardCount,
    'ScalingType': obj.scalingType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'KinesisUpdateShardCountOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisUpdateShardCountOutput(obj: KinesisUpdateShardCountOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamName': obj.streamName,
    'CurrentShardCount': obj.currentShardCount,
    'TargetShardCount': obj.targetShardCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisStreamDescription
 */
export interface KinesisStreamDescription {
  /**
   * @schema KinesisStreamDescription#StreamName
   */
  readonly streamName?: string;

  /**
   * @schema KinesisStreamDescription#StreamARN
   */
  readonly streamArn?: string;

  /**
   * @schema KinesisStreamDescription#StreamStatus
   */
  readonly streamStatus?: string;

  /**
   * @schema KinesisStreamDescription#Shards
   */
  readonly shards?: KinesisShard[];

  /**
   * @schema KinesisStreamDescription#HasMoreShards
   */
  readonly hasMoreShards?: boolean;

  /**
   * @schema KinesisStreamDescription#RetentionPeriodHours
   */
  readonly retentionPeriodHours?: number;

  /**
   * @schema KinesisStreamDescription#StreamCreationTimestamp
   */
  readonly streamCreationTimestamp?: string;

  /**
   * @schema KinesisStreamDescription#EnhancedMonitoring
   */
  readonly enhancedMonitoring?: KinesisEnhancedMetrics[];

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
 * Converts an object of type 'KinesisStreamDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisStreamDescription(obj: KinesisStreamDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamName': obj.streamName,
    'StreamARN': obj.streamArn,
    'StreamStatus': obj.streamStatus,
    'Shards': obj.shards?.map(y => toJson_KinesisShard(y)),
    'HasMoreShards': obj.hasMoreShards,
    'RetentionPeriodHours': obj.retentionPeriodHours,
    'StreamCreationTimestamp': obj.streamCreationTimestamp,
    'EnhancedMonitoring': obj.enhancedMonitoring?.map(y => toJson_KinesisEnhancedMetrics(y)),
    'EncryptionType': obj.encryptionType,
    'KeyId': obj.keyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisConsumerDescription
 */
export interface KinesisConsumerDescription {
  /**
   * @schema KinesisConsumerDescription#ConsumerName
   */
  readonly consumerName?: string;

  /**
   * @schema KinesisConsumerDescription#ConsumerARN
   */
  readonly consumerArn?: string;

  /**
   * @schema KinesisConsumerDescription#ConsumerStatus
   */
  readonly consumerStatus?: string;

  /**
   * @schema KinesisConsumerDescription#ConsumerCreationTimestamp
   */
  readonly consumerCreationTimestamp?: string;

  /**
   * @schema KinesisConsumerDescription#StreamARN
   */
  readonly streamArn?: string;

}

/**
 * Converts an object of type 'KinesisConsumerDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisConsumerDescription(obj: KinesisConsumerDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConsumerName': obj.consumerName,
    'ConsumerARN': obj.consumerArn,
    'ConsumerStatus': obj.consumerStatus,
    'ConsumerCreationTimestamp': obj.consumerCreationTimestamp,
    'StreamARN': obj.streamArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisStreamDescriptionSummary
 */
export interface KinesisStreamDescriptionSummary {
  /**
   * @schema KinesisStreamDescriptionSummary#StreamName
   */
  readonly streamName?: string;

  /**
   * @schema KinesisStreamDescriptionSummary#StreamARN
   */
  readonly streamArn?: string;

  /**
   * @schema KinesisStreamDescriptionSummary#StreamStatus
   */
  readonly streamStatus?: string;

  /**
   * @schema KinesisStreamDescriptionSummary#RetentionPeriodHours
   */
  readonly retentionPeriodHours?: number;

  /**
   * @schema KinesisStreamDescriptionSummary#StreamCreationTimestamp
   */
  readonly streamCreationTimestamp?: string;

  /**
   * @schema KinesisStreamDescriptionSummary#EnhancedMonitoring
   */
  readonly enhancedMonitoring?: KinesisEnhancedMetrics[];

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
  readonly openShardCount?: number;

  /**
   * @schema KinesisStreamDescriptionSummary#ConsumerCount
   */
  readonly consumerCount?: number;

}

/**
 * Converts an object of type 'KinesisStreamDescriptionSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisStreamDescriptionSummary(obj: KinesisStreamDescriptionSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamName': obj.streamName,
    'StreamARN': obj.streamArn,
    'StreamStatus': obj.streamStatus,
    'RetentionPeriodHours': obj.retentionPeriodHours,
    'StreamCreationTimestamp': obj.streamCreationTimestamp,
    'EnhancedMonitoring': obj.enhancedMonitoring?.map(y => toJson_KinesisEnhancedMetrics(y)),
    'EncryptionType': obj.encryptionType,
    'KeyId': obj.keyId,
    'OpenShardCount': obj.openShardCount,
    'ConsumerCount': obj.consumerCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisRecord
 */
export interface KinesisRecord {
  /**
   * @schema KinesisRecord#SequenceNumber
   */
  readonly sequenceNumber?: string;

  /**
   * @schema KinesisRecord#ApproximateArrivalTimestamp
   */
  readonly approximateArrivalTimestamp?: string;

  /**
   * @schema KinesisRecord#Data
   */
  readonly data?: any;

  /**
   * @schema KinesisRecord#PartitionKey
   */
  readonly partitionKey?: string;

  /**
   * @schema KinesisRecord#EncryptionType
   */
  readonly encryptionType?: string;

}

/**
 * Converts an object of type 'KinesisRecord' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisRecord(obj: KinesisRecord | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SequenceNumber': obj.sequenceNumber,
    'ApproximateArrivalTimestamp': obj.approximateArrivalTimestamp,
    'Data': obj.data,
    'PartitionKey': obj.partitionKey,
    'EncryptionType': obj.encryptionType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisChildShard
 */
export interface KinesisChildShard {
  /**
   * @schema KinesisChildShard#ShardId
   */
  readonly shardId?: string;

  /**
   * @schema KinesisChildShard#ParentShards
   */
  readonly parentShards?: string[];

  /**
   * @schema KinesisChildShard#HashKeyRange
   */
  readonly hashKeyRange?: KinesisHashKeyRange;

}

/**
 * Converts an object of type 'KinesisChildShard' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisChildShard(obj: KinesisChildShard | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ShardId': obj.shardId,
    'ParentShards': obj.parentShards?.map(y => y),
    'HashKeyRange': toJson_KinesisHashKeyRange(obj.hashKeyRange),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisShardFilter
 */
export interface KinesisShardFilter {
  /**
   * @schema KinesisShardFilter#Type
   */
  readonly type?: string;

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
 * Converts an object of type 'KinesisShardFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisShardFilter(obj: KinesisShardFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'ShardId': obj.shardId,
    'Timestamp': obj.timestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisShard
 */
export interface KinesisShard {
  /**
   * @schema KinesisShard#ShardId
   */
  readonly shardId?: string;

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
  readonly hashKeyRange?: KinesisHashKeyRange;

  /**
   * @schema KinesisShard#SequenceNumberRange
   */
  readonly sequenceNumberRange?: KinesisSequenceNumberRange;

}

/**
 * Converts an object of type 'KinesisShard' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisShard(obj: KinesisShard | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ShardId': obj.shardId,
    'ParentShardId': obj.parentShardId,
    'AdjacentParentShardId': obj.adjacentParentShardId,
    'HashKeyRange': toJson_KinesisHashKeyRange(obj.hashKeyRange),
    'SequenceNumberRange': toJson_KinesisSequenceNumberRange(obj.sequenceNumberRange),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisConsumer
 */
export interface KinesisConsumer {
  /**
   * @schema KinesisConsumer#ConsumerName
   */
  readonly consumerName?: string;

  /**
   * @schema KinesisConsumer#ConsumerARN
   */
  readonly consumerArn?: string;

  /**
   * @schema KinesisConsumer#ConsumerStatus
   */
  readonly consumerStatus?: string;

  /**
   * @schema KinesisConsumer#ConsumerCreationTimestamp
   */
  readonly consumerCreationTimestamp?: string;

}

/**
 * Converts an object of type 'KinesisConsumer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisConsumer(obj: KinesisConsumer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConsumerName': obj.consumerName,
    'ConsumerARN': obj.consumerArn,
    'ConsumerStatus': obj.consumerStatus,
    'ConsumerCreationTimestamp': obj.consumerCreationTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisTag
 */
export interface KinesisTag {
  /**
   * @schema KinesisTag#Key
   */
  readonly key?: string;

  /**
   * @schema KinesisTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'KinesisTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisTag(obj: KinesisTag | undefined): Record<string, any> | undefined {
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
 * @schema KinesisPutRecordsRequestEntry
 */
export interface KinesisPutRecordsRequestEntry {
  /**
   * @schema KinesisPutRecordsRequestEntry#Data
   */
  readonly data?: any;

  /**
   * @schema KinesisPutRecordsRequestEntry#ExplicitHashKey
   */
  readonly explicitHashKey?: string;

  /**
   * @schema KinesisPutRecordsRequestEntry#PartitionKey
   */
  readonly partitionKey?: string;

}

/**
 * Converts an object of type 'KinesisPutRecordsRequestEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisPutRecordsRequestEntry(obj: KinesisPutRecordsRequestEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Data': obj.data,
    'ExplicitHashKey': obj.explicitHashKey,
    'PartitionKey': obj.partitionKey,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'KinesisPutRecordsResultEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisPutRecordsResultEntry(obj: KinesisPutRecordsResultEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SequenceNumber': obj.sequenceNumber,
    'ShardId': obj.shardId,
    'ErrorCode': obj.errorCode,
    'ErrorMessage': obj.errorMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'KinesisEnhancedMetrics' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisEnhancedMetrics(obj: KinesisEnhancedMetrics | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ShardLevelMetrics': obj.shardLevelMetrics?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisHashKeyRange
 */
export interface KinesisHashKeyRange {
  /**
   * @schema KinesisHashKeyRange#StartingHashKey
   */
  readonly startingHashKey?: string;

  /**
   * @schema KinesisHashKeyRange#EndingHashKey
   */
  readonly endingHashKey?: string;

}

/**
 * Converts an object of type 'KinesisHashKeyRange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisHashKeyRange(obj: KinesisHashKeyRange | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StartingHashKey': obj.startingHashKey,
    'EndingHashKey': obj.endingHashKey,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisSequenceNumberRange
 */
export interface KinesisSequenceNumberRange {
  /**
   * @schema KinesisSequenceNumberRange#StartingSequenceNumber
   */
  readonly startingSequenceNumber?: string;

  /**
   * @schema KinesisSequenceNumberRange#EndingSequenceNumber
   */
  readonly endingSequenceNumber?: string;

}

/**
 * Converts an object of type 'KinesisSequenceNumberRange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisSequenceNumberRange(obj: KinesisSequenceNumberRange | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StartingSequenceNumber': obj.startingSequenceNumber,
    'EndingSequenceNumber': obj.endingSequenceNumber,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
