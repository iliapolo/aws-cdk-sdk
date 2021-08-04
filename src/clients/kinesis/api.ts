import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class KinesisClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public addTagsToStream(input: shapes.KinesisAddTagsToStreamInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addTagsToStream',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.AddTagsToStream'),
        parameters: {
          StreamName: input.streamName,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AddTagsToStream', props);
  }

  public createStream(input: shapes.KinesisCreateStreamInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStream',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.CreateStream'),
        parameters: {
          StreamName: input.streamName,
          ShardCount: input.shardCount,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreateStream', props);
  }

  public decreaseStreamRetentionPeriod(input: shapes.KinesisDecreaseStreamRetentionPeriodInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decreaseStreamRetentionPeriod',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.DecreaseStreamRetentionPeriod'),
        parameters: {
          StreamName: input.streamName,
          RetentionPeriodHours: input.retentionPeriodHours,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DecreaseStreamRetentionPeriod', props);
  }

  public deleteStream(input: shapes.KinesisDeleteStreamInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStream',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.DeleteStream'),
        parameters: {
          StreamName: input.streamName,
          EnforceConsumerDeletion: input.enforceConsumerDeletion,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteStream', props);
  }

  public deregisterStreamConsumer(input: shapes.KinesisDeregisterStreamConsumerInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterStreamConsumer',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.DeregisterStreamConsumer'),
        parameters: {
          StreamARN: input.streamArn,
          ConsumerName: input.consumerName,
          ConsumerARN: input.consumerArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeregisterStreamConsumer', props);
  }

  public describeLimits(): KinesisResponsesDescribeLimits {
    return new KinesisResponsesDescribeLimits(this, this.__resources);
  }

  public describeStream(input: shapes.KinesisDescribeStreamInput): KinesisResponsesDescribeStream {
    return new KinesisResponsesDescribeStream(this, this.__resources, input);
  }

  public describeStreamConsumer(input: shapes.KinesisDescribeStreamConsumerInput): KinesisResponsesDescribeStreamConsumer {
    return new KinesisResponsesDescribeStreamConsumer(this, this.__resources, input);
  }

  public describeStreamSummary(input: shapes.KinesisDescribeStreamSummaryInput): KinesisResponsesDescribeStreamSummary {
    return new KinesisResponsesDescribeStreamSummary(this, this.__resources, input);
  }

  public disableEnhancedMonitoring(input: shapes.KinesisDisableEnhancedMonitoringInput): KinesisResponsesDisableEnhancedMonitoring {
    return new KinesisResponsesDisableEnhancedMonitoring(this, this.__resources, input);
  }

  public enableEnhancedMonitoring(input: shapes.KinesisEnableEnhancedMonitoringInput): KinesisResponsesEnableEnhancedMonitoring {
    return new KinesisResponsesEnableEnhancedMonitoring(this, this.__resources, input);
  }

  public fetchRecords(input: shapes.KinesisGetRecordsInput): KinesisResponsesFetchRecords {
    return new KinesisResponsesFetchRecords(this, this.__resources, input);
  }

  public fetchShardIterator(input: shapes.KinesisGetShardIteratorInput): KinesisResponsesFetchShardIterator {
    return new KinesisResponsesFetchShardIterator(this, this.__resources, input);
  }

  public increaseStreamRetentionPeriod(input: shapes.KinesisIncreaseStreamRetentionPeriodInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'increaseStreamRetentionPeriod',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.IncreaseStreamRetentionPeriod'),
        parameters: {
          StreamName: input.streamName,
          RetentionPeriodHours: input.retentionPeriodHours,
        },
      },
    };
    new cr.AwsCustomResource(this, 'IncreaseStreamRetentionPeriod', props);
  }

  public listShards(input: shapes.KinesisListShardsInput): KinesisResponsesListShards {
    return new KinesisResponsesListShards(this, this.__resources, input);
  }

  public listStreamConsumers(input: shapes.KinesisListStreamConsumersInput): KinesisResponsesListStreamConsumers {
    return new KinesisResponsesListStreamConsumers(this, this.__resources, input);
  }

  public listStreams(input: shapes.KinesisListStreamsInput): KinesisResponsesListStreams {
    return new KinesisResponsesListStreams(this, this.__resources, input);
  }

  public listTagsForStream(input: shapes.KinesisListTagsForStreamInput): KinesisResponsesListTagsForStream {
    return new KinesisResponsesListTagsForStream(this, this.__resources, input);
  }

  public mergeShards(input: shapes.KinesisMergeShardsInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'mergeShards',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.MergeShards'),
        parameters: {
          StreamName: input.streamName,
          ShardToMerge: input.shardToMerge,
          AdjacentShardToMerge: input.adjacentShardToMerge,
        },
      },
    };
    new cr.AwsCustomResource(this, 'MergeShards', props);
  }

  public putRecord(input: shapes.KinesisPutRecordInput): KinesisResponsesPutRecord {
    return new KinesisResponsesPutRecord(this, this.__resources, input);
  }

  public putRecords(input: shapes.KinesisPutRecordsInput): KinesisResponsesPutRecords {
    return new KinesisResponsesPutRecords(this, this.__resources, input);
  }

  public registerStreamConsumer(input: shapes.KinesisRegisterStreamConsumerInput): KinesisResponsesRegisterStreamConsumer {
    return new KinesisResponsesRegisterStreamConsumer(this, this.__resources, input);
  }

  public removeTagsFromStream(input: shapes.KinesisRemoveTagsFromStreamInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'removeTagsFromStream',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.RemoveTagsFromStream'),
        parameters: {
          StreamName: input.streamName,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RemoveTagsFromStream', props);
  }

  public splitShard(input: shapes.KinesisSplitShardInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'splitShard',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.SplitShard'),
        parameters: {
          StreamName: input.streamName,
          ShardToSplit: input.shardToSplit,
          NewStartingHashKey: input.newStartingHashKey,
        },
      },
    };
    new cr.AwsCustomResource(this, 'SplitShard', props);
  }

  public startStreamEncryption(input: shapes.KinesisStartStreamEncryptionInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startStreamEncryption',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.StartStreamEncryption'),
        parameters: {
          StreamName: input.streamName,
          EncryptionType: input.encryptionType,
          KeyId: input.keyId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StartStreamEncryption', props);
  }

  public stopStreamEncryption(input: shapes.KinesisStopStreamEncryptionInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopStreamEncryption',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.StopStreamEncryption'),
        parameters: {
          StreamName: input.streamName,
          EncryptionType: input.encryptionType,
          KeyId: input.keyId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StopStreamEncryption', props);
  }

  public updateShardCount(input: shapes.KinesisUpdateShardCountInput): KinesisResponsesUpdateShardCount {
    return new KinesisResponsesUpdateShardCount(this, this.__resources, input);
  }

}

export class KinesisResponsesDescribeLimits {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get shardLimit(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLimits',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.DescribeLimits.ShardLimit'),
        outputPath: 'ShardLimit',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLimits.ShardLimit', props);
    return resource.getResponseField('ShardLimit') as unknown as number;
  }

  public get openShardCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLimits',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.DescribeLimits.OpenShardCount'),
        outputPath: 'OpenShardCount',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLimits.OpenShardCount', props);
    return resource.getResponseField('OpenShardCount') as unknown as number;
  }

}

export class KinesisResponsesDescribeStream {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisDescribeStreamInput) {
  }

  public get streamDescription(): KinesisResponsesDescribeStreamStreamDescription {
    return new KinesisResponsesDescribeStreamStreamDescription(this.__scope, this.__resources, this.__input);
  }

}

export class KinesisResponsesDescribeStreamStreamDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisDescribeStreamInput) {
  }

  public get streamName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStream',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.DescribeStream.StreamDescription.StreamName'),
        outputPath: 'StreamDescription.StreamName',
        parameters: {
          StreamName: this.__input.streamName,
          Limit: this.__input.limit,
          ExclusiveStartShardId: this.__input.exclusiveStartShardId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStream.StreamDescription.StreamName', props);
    return resource.getResponseField('StreamDescription.StreamName') as unknown as string;
  }

  public get streamArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStream',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.DescribeStream.StreamDescription.StreamARN'),
        outputPath: 'StreamDescription.StreamARN',
        parameters: {
          StreamName: this.__input.streamName,
          Limit: this.__input.limit,
          ExclusiveStartShardId: this.__input.exclusiveStartShardId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStream.StreamDescription.StreamARN', props);
    return resource.getResponseField('StreamDescription.StreamARN') as unknown as string;
  }

  public get streamStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStream',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.DescribeStream.StreamDescription.StreamStatus'),
        outputPath: 'StreamDescription.StreamStatus',
        parameters: {
          StreamName: this.__input.streamName,
          Limit: this.__input.limit,
          ExclusiveStartShardId: this.__input.exclusiveStartShardId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStream.StreamDescription.StreamStatus', props);
    return resource.getResponseField('StreamDescription.StreamStatus') as unknown as string;
  }

  public get shards(): shapes.KinesisShard[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStream',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.DescribeStream.StreamDescription.Shards'),
        outputPath: 'StreamDescription.Shards',
        parameters: {
          StreamName: this.__input.streamName,
          Limit: this.__input.limit,
          ExclusiveStartShardId: this.__input.exclusiveStartShardId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStream.StreamDescription.Shards', props);
    return resource.getResponseField('StreamDescription.Shards') as unknown as shapes.KinesisShard[];
  }

  public get hasMoreShards(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStream',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.DescribeStream.StreamDescription.HasMoreShards'),
        outputPath: 'StreamDescription.HasMoreShards',
        parameters: {
          StreamName: this.__input.streamName,
          Limit: this.__input.limit,
          ExclusiveStartShardId: this.__input.exclusiveStartShardId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStream.StreamDescription.HasMoreShards', props);
    return resource.getResponseField('StreamDescription.HasMoreShards') as unknown as boolean;
  }

  public get retentionPeriodHours(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStream',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.DescribeStream.StreamDescription.RetentionPeriodHours'),
        outputPath: 'StreamDescription.RetentionPeriodHours',
        parameters: {
          StreamName: this.__input.streamName,
          Limit: this.__input.limit,
          ExclusiveStartShardId: this.__input.exclusiveStartShardId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStream.StreamDescription.RetentionPeriodHours', props);
    return resource.getResponseField('StreamDescription.RetentionPeriodHours') as unknown as number;
  }

  public get streamCreationTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStream',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.DescribeStream.StreamDescription.StreamCreationTimestamp'),
        outputPath: 'StreamDescription.StreamCreationTimestamp',
        parameters: {
          StreamName: this.__input.streamName,
          Limit: this.__input.limit,
          ExclusiveStartShardId: this.__input.exclusiveStartShardId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStream.StreamDescription.StreamCreationTimestamp', props);
    return resource.getResponseField('StreamDescription.StreamCreationTimestamp') as unknown as string;
  }

  public get enhancedMonitoring(): shapes.KinesisEnhancedMetrics[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStream',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.DescribeStream.StreamDescription.EnhancedMonitoring'),
        outputPath: 'StreamDescription.EnhancedMonitoring',
        parameters: {
          StreamName: this.__input.streamName,
          Limit: this.__input.limit,
          ExclusiveStartShardId: this.__input.exclusiveStartShardId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStream.StreamDescription.EnhancedMonitoring', props);
    return resource.getResponseField('StreamDescription.EnhancedMonitoring') as unknown as shapes.KinesisEnhancedMetrics[];
  }

  public get encryptionType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStream',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.DescribeStream.StreamDescription.EncryptionType'),
        outputPath: 'StreamDescription.EncryptionType',
        parameters: {
          StreamName: this.__input.streamName,
          Limit: this.__input.limit,
          ExclusiveStartShardId: this.__input.exclusiveStartShardId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStream.StreamDescription.EncryptionType', props);
    return resource.getResponseField('StreamDescription.EncryptionType') as unknown as string;
  }

  public get keyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStream',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.DescribeStream.StreamDescription.KeyId'),
        outputPath: 'StreamDescription.KeyId',
        parameters: {
          StreamName: this.__input.streamName,
          Limit: this.__input.limit,
          ExclusiveStartShardId: this.__input.exclusiveStartShardId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStream.StreamDescription.KeyId', props);
    return resource.getResponseField('StreamDescription.KeyId') as unknown as string;
  }

}

export class KinesisResponsesDescribeStreamConsumer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisDescribeStreamConsumerInput) {
  }

  public get consumerDescription(): KinesisResponsesDescribeStreamConsumerConsumerDescription {
    return new KinesisResponsesDescribeStreamConsumerConsumerDescription(this.__scope, this.__resources, this.__input);
  }

}

export class KinesisResponsesDescribeStreamConsumerConsumerDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisDescribeStreamConsumerInput) {
  }

  public get consumerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStreamConsumer',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.DescribeStreamConsumer.ConsumerDescription.ConsumerName'),
        outputPath: 'ConsumerDescription.ConsumerName',
        parameters: {
          StreamARN: this.__input.streamArn,
          ConsumerName: this.__input.consumerName,
          ConsumerARN: this.__input.consumerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStreamConsumer.ConsumerDescription.ConsumerName', props);
    return resource.getResponseField('ConsumerDescription.ConsumerName') as unknown as string;
  }

  public get consumerArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStreamConsumer',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.DescribeStreamConsumer.ConsumerDescription.ConsumerARN'),
        outputPath: 'ConsumerDescription.ConsumerARN',
        parameters: {
          StreamARN: this.__input.streamArn,
          ConsumerName: this.__input.consumerName,
          ConsumerARN: this.__input.consumerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStreamConsumer.ConsumerDescription.ConsumerARN', props);
    return resource.getResponseField('ConsumerDescription.ConsumerARN') as unknown as string;
  }

  public get consumerStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStreamConsumer',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.DescribeStreamConsumer.ConsumerDescription.ConsumerStatus'),
        outputPath: 'ConsumerDescription.ConsumerStatus',
        parameters: {
          StreamARN: this.__input.streamArn,
          ConsumerName: this.__input.consumerName,
          ConsumerARN: this.__input.consumerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStreamConsumer.ConsumerDescription.ConsumerStatus', props);
    return resource.getResponseField('ConsumerDescription.ConsumerStatus') as unknown as string;
  }

  public get consumerCreationTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStreamConsumer',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.DescribeStreamConsumer.ConsumerDescription.ConsumerCreationTimestamp'),
        outputPath: 'ConsumerDescription.ConsumerCreationTimestamp',
        parameters: {
          StreamARN: this.__input.streamArn,
          ConsumerName: this.__input.consumerName,
          ConsumerARN: this.__input.consumerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStreamConsumer.ConsumerDescription.ConsumerCreationTimestamp', props);
    return resource.getResponseField('ConsumerDescription.ConsumerCreationTimestamp') as unknown as string;
  }

  public get streamArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStreamConsumer',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.DescribeStreamConsumer.ConsumerDescription.StreamARN'),
        outputPath: 'ConsumerDescription.StreamARN',
        parameters: {
          StreamARN: this.__input.streamArn,
          ConsumerName: this.__input.consumerName,
          ConsumerARN: this.__input.consumerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStreamConsumer.ConsumerDescription.StreamARN', props);
    return resource.getResponseField('ConsumerDescription.StreamARN') as unknown as string;
  }

}

export class KinesisResponsesDescribeStreamSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisDescribeStreamSummaryInput) {
  }

  public get streamDescriptionSummary(): KinesisResponsesDescribeStreamSummaryStreamDescriptionSummary {
    return new KinesisResponsesDescribeStreamSummaryStreamDescriptionSummary(this.__scope, this.__resources, this.__input);
  }

}

export class KinesisResponsesDescribeStreamSummaryStreamDescriptionSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisDescribeStreamSummaryInput) {
  }

  public get streamName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStreamSummary',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.DescribeStreamSummary.StreamDescriptionSummary.StreamName'),
        outputPath: 'StreamDescriptionSummary.StreamName',
        parameters: {
          StreamName: this.__input.streamName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStreamSummary.StreamDescriptionSummary.StreamName', props);
    return resource.getResponseField('StreamDescriptionSummary.StreamName') as unknown as string;
  }

  public get streamArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStreamSummary',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.DescribeStreamSummary.StreamDescriptionSummary.StreamARN'),
        outputPath: 'StreamDescriptionSummary.StreamARN',
        parameters: {
          StreamName: this.__input.streamName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStreamSummary.StreamDescriptionSummary.StreamARN', props);
    return resource.getResponseField('StreamDescriptionSummary.StreamARN') as unknown as string;
  }

  public get streamStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStreamSummary',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.DescribeStreamSummary.StreamDescriptionSummary.StreamStatus'),
        outputPath: 'StreamDescriptionSummary.StreamStatus',
        parameters: {
          StreamName: this.__input.streamName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStreamSummary.StreamDescriptionSummary.StreamStatus', props);
    return resource.getResponseField('StreamDescriptionSummary.StreamStatus') as unknown as string;
  }

  public get retentionPeriodHours(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStreamSummary',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.DescribeStreamSummary.StreamDescriptionSummary.RetentionPeriodHours'),
        outputPath: 'StreamDescriptionSummary.RetentionPeriodHours',
        parameters: {
          StreamName: this.__input.streamName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStreamSummary.StreamDescriptionSummary.RetentionPeriodHours', props);
    return resource.getResponseField('StreamDescriptionSummary.RetentionPeriodHours') as unknown as number;
  }

  public get streamCreationTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStreamSummary',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.DescribeStreamSummary.StreamDescriptionSummary.StreamCreationTimestamp'),
        outputPath: 'StreamDescriptionSummary.StreamCreationTimestamp',
        parameters: {
          StreamName: this.__input.streamName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStreamSummary.StreamDescriptionSummary.StreamCreationTimestamp', props);
    return resource.getResponseField('StreamDescriptionSummary.StreamCreationTimestamp') as unknown as string;
  }

  public get enhancedMonitoring(): shapes.KinesisEnhancedMetrics[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStreamSummary',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.DescribeStreamSummary.StreamDescriptionSummary.EnhancedMonitoring'),
        outputPath: 'StreamDescriptionSummary.EnhancedMonitoring',
        parameters: {
          StreamName: this.__input.streamName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStreamSummary.StreamDescriptionSummary.EnhancedMonitoring', props);
    return resource.getResponseField('StreamDescriptionSummary.EnhancedMonitoring') as unknown as shapes.KinesisEnhancedMetrics[];
  }

  public get encryptionType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStreamSummary',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.DescribeStreamSummary.StreamDescriptionSummary.EncryptionType'),
        outputPath: 'StreamDescriptionSummary.EncryptionType',
        parameters: {
          StreamName: this.__input.streamName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStreamSummary.StreamDescriptionSummary.EncryptionType', props);
    return resource.getResponseField('StreamDescriptionSummary.EncryptionType') as unknown as string;
  }

  public get keyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStreamSummary',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.DescribeStreamSummary.StreamDescriptionSummary.KeyId'),
        outputPath: 'StreamDescriptionSummary.KeyId',
        parameters: {
          StreamName: this.__input.streamName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStreamSummary.StreamDescriptionSummary.KeyId', props);
    return resource.getResponseField('StreamDescriptionSummary.KeyId') as unknown as string;
  }

  public get openShardCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStreamSummary',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.DescribeStreamSummary.StreamDescriptionSummary.OpenShardCount'),
        outputPath: 'StreamDescriptionSummary.OpenShardCount',
        parameters: {
          StreamName: this.__input.streamName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStreamSummary.StreamDescriptionSummary.OpenShardCount', props);
    return resource.getResponseField('StreamDescriptionSummary.OpenShardCount') as unknown as number;
  }

  public get consumerCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStreamSummary',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.DescribeStreamSummary.StreamDescriptionSummary.ConsumerCount'),
        outputPath: 'StreamDescriptionSummary.ConsumerCount',
        parameters: {
          StreamName: this.__input.streamName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStreamSummary.StreamDescriptionSummary.ConsumerCount', props);
    return resource.getResponseField('StreamDescriptionSummary.ConsumerCount') as unknown as number;
  }

}

export class KinesisResponsesDisableEnhancedMonitoring {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisDisableEnhancedMonitoringInput) {
  }

  public get streamName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disableEnhancedMonitoring',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.DisableEnhancedMonitoring.StreamName'),
        outputPath: 'StreamName',
        parameters: {
          StreamName: this.__input.streamName,
          ShardLevelMetrics: this.__input.shardLevelMetrics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisableEnhancedMonitoring.StreamName', props);
    return resource.getResponseField('StreamName') as unknown as string;
  }

  public get currentShardLevelMetrics(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disableEnhancedMonitoring',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.DisableEnhancedMonitoring.CurrentShardLevelMetrics'),
        outputPath: 'CurrentShardLevelMetrics',
        parameters: {
          StreamName: this.__input.streamName,
          ShardLevelMetrics: this.__input.shardLevelMetrics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisableEnhancedMonitoring.CurrentShardLevelMetrics', props);
    return resource.getResponseField('CurrentShardLevelMetrics') as unknown as string[];
  }

  public get desiredShardLevelMetrics(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disableEnhancedMonitoring',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.DisableEnhancedMonitoring.DesiredShardLevelMetrics'),
        outputPath: 'DesiredShardLevelMetrics',
        parameters: {
          StreamName: this.__input.streamName,
          ShardLevelMetrics: this.__input.shardLevelMetrics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisableEnhancedMonitoring.DesiredShardLevelMetrics', props);
    return resource.getResponseField('DesiredShardLevelMetrics') as unknown as string[];
  }

}

export class KinesisResponsesEnableEnhancedMonitoring {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisEnableEnhancedMonitoringInput) {
  }

  public get streamName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'enableEnhancedMonitoring',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.EnableEnhancedMonitoring.StreamName'),
        outputPath: 'StreamName',
        parameters: {
          StreamName: this.__input.streamName,
          ShardLevelMetrics: this.__input.shardLevelMetrics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'EnableEnhancedMonitoring.StreamName', props);
    return resource.getResponseField('StreamName') as unknown as string;
  }

  public get currentShardLevelMetrics(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'enableEnhancedMonitoring',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.EnableEnhancedMonitoring.CurrentShardLevelMetrics'),
        outputPath: 'CurrentShardLevelMetrics',
        parameters: {
          StreamName: this.__input.streamName,
          ShardLevelMetrics: this.__input.shardLevelMetrics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'EnableEnhancedMonitoring.CurrentShardLevelMetrics', props);
    return resource.getResponseField('CurrentShardLevelMetrics') as unknown as string[];
  }

  public get desiredShardLevelMetrics(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'enableEnhancedMonitoring',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.EnableEnhancedMonitoring.DesiredShardLevelMetrics'),
        outputPath: 'DesiredShardLevelMetrics',
        parameters: {
          StreamName: this.__input.streamName,
          ShardLevelMetrics: this.__input.shardLevelMetrics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'EnableEnhancedMonitoring.DesiredShardLevelMetrics', props);
    return resource.getResponseField('DesiredShardLevelMetrics') as unknown as string[];
  }

}

export class KinesisResponsesFetchRecords {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisGetRecordsInput) {
  }

  public get records(): shapes.KinesisRecord[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRecords',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.GetRecords.Records'),
        outputPath: 'Records',
        parameters: {
          ShardIterator: this.__input.shardIterator,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRecords.Records', props);
    return resource.getResponseField('Records') as unknown as shapes.KinesisRecord[];
  }

  public get nextShardIterator(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRecords',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.GetRecords.NextShardIterator'),
        outputPath: 'NextShardIterator',
        parameters: {
          ShardIterator: this.__input.shardIterator,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRecords.NextShardIterator', props);
    return resource.getResponseField('NextShardIterator') as unknown as string;
  }

  public get millisBehindLatest(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRecords',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.GetRecords.MillisBehindLatest'),
        outputPath: 'MillisBehindLatest',
        parameters: {
          ShardIterator: this.__input.shardIterator,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRecords.MillisBehindLatest', props);
    return resource.getResponseField('MillisBehindLatest') as unknown as number;
  }

  public get childShards(): shapes.KinesisChildShard[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRecords',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.GetRecords.ChildShards'),
        outputPath: 'ChildShards',
        parameters: {
          ShardIterator: this.__input.shardIterator,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRecords.ChildShards', props);
    return resource.getResponseField('ChildShards') as unknown as shapes.KinesisChildShard[];
  }

}

export class KinesisResponsesFetchShardIterator {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisGetShardIteratorInput) {
  }

  public get shardIterator(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getShardIterator',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.GetShardIterator.ShardIterator'),
        outputPath: 'ShardIterator',
        parameters: {
          StreamName: this.__input.streamName,
          ShardId: this.__input.shardId,
          ShardIteratorType: this.__input.shardIteratorType,
          StartingSequenceNumber: this.__input.startingSequenceNumber,
          Timestamp: this.__input.timestamp,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetShardIterator.ShardIterator', props);
    return resource.getResponseField('ShardIterator') as unknown as string;
  }

}

export class KinesisResponsesListShards {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisListShardsInput) {
  }

  public get shards(): shapes.KinesisShard[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listShards',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.ListShards.Shards'),
        outputPath: 'Shards',
        parameters: {
          StreamName: this.__input.streamName,
          NextToken: this.__input.nextToken,
          ExclusiveStartShardId: this.__input.exclusiveStartShardId,
          MaxResults: this.__input.maxResults,
          StreamCreationTimestamp: this.__input.streamCreationTimestamp,
          ShardFilter: {
            Type: this.__input.shardFilter?.type,
            ShardId: this.__input.shardFilter?.shardId,
            Timestamp: this.__input.shardFilter?.timestamp,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListShards.Shards', props);
    return resource.getResponseField('Shards') as unknown as shapes.KinesisShard[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listShards',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.ListShards.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          StreamName: this.__input.streamName,
          NextToken: this.__input.nextToken,
          ExclusiveStartShardId: this.__input.exclusiveStartShardId,
          MaxResults: this.__input.maxResults,
          StreamCreationTimestamp: this.__input.streamCreationTimestamp,
          ShardFilter: {
            Type: this.__input.shardFilter?.type,
            ShardId: this.__input.shardFilter?.shardId,
            Timestamp: this.__input.shardFilter?.timestamp,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListShards.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class KinesisResponsesListStreamConsumers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisListStreamConsumersInput) {
  }

  public get consumers(): shapes.KinesisConsumer[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listStreamConsumers',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.ListStreamConsumers.Consumers'),
        outputPath: 'Consumers',
        parameters: {
          StreamARN: this.__input.streamArn,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          StreamCreationTimestamp: this.__input.streamCreationTimestamp,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListStreamConsumers.Consumers', props);
    return resource.getResponseField('Consumers') as unknown as shapes.KinesisConsumer[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listStreamConsumers',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.ListStreamConsumers.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          StreamARN: this.__input.streamArn,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          StreamCreationTimestamp: this.__input.streamCreationTimestamp,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListStreamConsumers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class KinesisResponsesListStreams {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisListStreamsInput) {
  }

  public get streamNames(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listStreams',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.ListStreams.StreamNames'),
        outputPath: 'StreamNames',
        parameters: {
          Limit: this.__input.limit,
          ExclusiveStartStreamName: this.__input.exclusiveStartStreamName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListStreams.StreamNames', props);
    return resource.getResponseField('StreamNames') as unknown as string[];
  }

  public get hasMoreStreams(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listStreams',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.ListStreams.HasMoreStreams'),
        outputPath: 'HasMoreStreams',
        parameters: {
          Limit: this.__input.limit,
          ExclusiveStartStreamName: this.__input.exclusiveStartStreamName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListStreams.HasMoreStreams', props);
    return resource.getResponseField('HasMoreStreams') as unknown as boolean;
  }

}

export class KinesisResponsesListTagsForStream {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisListTagsForStreamInput) {
  }

  public get tags(): shapes.KinesisTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForStream',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.ListTagsForStream.Tags'),
        outputPath: 'Tags',
        parameters: {
          StreamName: this.__input.streamName,
          ExclusiveStartTagKey: this.__input.exclusiveStartTagKey,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForStream.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.KinesisTag[];
  }

  public get hasMoreTags(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForStream',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.ListTagsForStream.HasMoreTags'),
        outputPath: 'HasMoreTags',
        parameters: {
          StreamName: this.__input.streamName,
          ExclusiveStartTagKey: this.__input.exclusiveStartTagKey,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForStream.HasMoreTags', props);
    return resource.getResponseField('HasMoreTags') as unknown as boolean;
  }

}

export class KinesisResponsesPutRecord {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisPutRecordInput) {
  }

  public get shardId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putRecord',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.PutRecord.ShardId'),
        outputPath: 'ShardId',
        parameters: {
          StreamName: this.__input.streamName,
          Data: {
          },
          PartitionKey: this.__input.partitionKey,
          ExplicitHashKey: this.__input.explicitHashKey,
          SequenceNumberForOrdering: this.__input.sequenceNumberForOrdering,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutRecord.ShardId', props);
    return resource.getResponseField('ShardId') as unknown as string;
  }

  public get sequenceNumber(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putRecord',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.PutRecord.SequenceNumber'),
        outputPath: 'SequenceNumber',
        parameters: {
          StreamName: this.__input.streamName,
          Data: {
          },
          PartitionKey: this.__input.partitionKey,
          ExplicitHashKey: this.__input.explicitHashKey,
          SequenceNumberForOrdering: this.__input.sequenceNumberForOrdering,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutRecord.SequenceNumber', props);
    return resource.getResponseField('SequenceNumber') as unknown as string;
  }

  public get encryptionType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putRecord',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.PutRecord.EncryptionType'),
        outputPath: 'EncryptionType',
        parameters: {
          StreamName: this.__input.streamName,
          Data: {
          },
          PartitionKey: this.__input.partitionKey,
          ExplicitHashKey: this.__input.explicitHashKey,
          SequenceNumberForOrdering: this.__input.sequenceNumberForOrdering,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutRecord.EncryptionType', props);
    return resource.getResponseField('EncryptionType') as unknown as string;
  }

}

export class KinesisResponsesPutRecords {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisPutRecordsInput) {
  }

  public get failedRecordCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putRecords',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.PutRecords.FailedRecordCount'),
        outputPath: 'FailedRecordCount',
        parameters: {
          Records: this.__input.records,
          StreamName: this.__input.streamName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutRecords.FailedRecordCount', props);
    return resource.getResponseField('FailedRecordCount') as unknown as number;
  }

  public get records(): shapes.KinesisPutRecordsResultEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putRecords',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.PutRecords.Records'),
        outputPath: 'Records',
        parameters: {
          Records: this.__input.records,
          StreamName: this.__input.streamName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutRecords.Records', props);
    return resource.getResponseField('Records') as unknown as shapes.KinesisPutRecordsResultEntry[];
  }

  public get encryptionType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putRecords',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.PutRecords.EncryptionType'),
        outputPath: 'EncryptionType',
        parameters: {
          Records: this.__input.records,
          StreamName: this.__input.streamName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutRecords.EncryptionType', props);
    return resource.getResponseField('EncryptionType') as unknown as string;
  }

}

export class KinesisResponsesRegisterStreamConsumer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisRegisterStreamConsumerInput) {
  }

  public get consumer(): KinesisResponsesRegisterStreamConsumerConsumer {
    return new KinesisResponsesRegisterStreamConsumerConsumer(this.__scope, this.__resources, this.__input);
  }

}

export class KinesisResponsesRegisterStreamConsumerConsumer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisRegisterStreamConsumerInput) {
  }

  public get consumerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerStreamConsumer',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.RegisterStreamConsumer.Consumer.ConsumerName'),
        outputPath: 'Consumer.ConsumerName',
        parameters: {
          StreamARN: this.__input.streamArn,
          ConsumerName: this.__input.consumerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterStreamConsumer.Consumer.ConsumerName', props);
    return resource.getResponseField('Consumer.ConsumerName') as unknown as string;
  }

  public get consumerArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerStreamConsumer',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.RegisterStreamConsumer.Consumer.ConsumerARN'),
        outputPath: 'Consumer.ConsumerARN',
        parameters: {
          StreamARN: this.__input.streamArn,
          ConsumerName: this.__input.consumerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterStreamConsumer.Consumer.ConsumerARN', props);
    return resource.getResponseField('Consumer.ConsumerARN') as unknown as string;
  }

  public get consumerStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerStreamConsumer',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.RegisterStreamConsumer.Consumer.ConsumerStatus'),
        outputPath: 'Consumer.ConsumerStatus',
        parameters: {
          StreamARN: this.__input.streamArn,
          ConsumerName: this.__input.consumerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterStreamConsumer.Consumer.ConsumerStatus', props);
    return resource.getResponseField('Consumer.ConsumerStatus') as unknown as string;
  }

  public get consumerCreationTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerStreamConsumer',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.RegisterStreamConsumer.Consumer.ConsumerCreationTimestamp'),
        outputPath: 'Consumer.ConsumerCreationTimestamp',
        parameters: {
          StreamARN: this.__input.streamArn,
          ConsumerName: this.__input.consumerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterStreamConsumer.Consumer.ConsumerCreationTimestamp', props);
    return resource.getResponseField('Consumer.ConsumerCreationTimestamp') as unknown as string;
  }

}

export class KinesisResponsesUpdateShardCount {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisUpdateShardCountInput) {
  }

  public get streamName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateShardCount',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.UpdateShardCount.StreamName'),
        outputPath: 'StreamName',
        parameters: {
          StreamName: this.__input.streamName,
          TargetShardCount: this.__input.targetShardCount,
          ScalingType: this.__input.scalingType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateShardCount.StreamName', props);
    return resource.getResponseField('StreamName') as unknown as string;
  }

  public get currentShardCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateShardCount',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.UpdateShardCount.CurrentShardCount'),
        outputPath: 'CurrentShardCount',
        parameters: {
          StreamName: this.__input.streamName,
          TargetShardCount: this.__input.targetShardCount,
          ScalingType: this.__input.scalingType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateShardCount.CurrentShardCount', props);
    return resource.getResponseField('CurrentShardCount') as unknown as number;
  }

  public get targetShardCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateShardCount',
        service: 'Kinesis',
        physicalResourceId: cr.PhysicalResourceId.of('Kinesis.UpdateShardCount.TargetShardCount'),
        outputPath: 'TargetShardCount',
        parameters: {
          StreamName: this.__input.streamName,
          TargetShardCount: this.__input.targetShardCount,
          ScalingType: this.__input.scalingType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateShardCount.TargetShardCount', props);
    return resource.getResponseField('TargetShardCount') as unknown as number;
  }

}

