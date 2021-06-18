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

  public describeLimits(): KinesisDescribeLimits {
    return new KinesisDescribeLimits(this, 'DescribeLimits', this.__resources);
  }

  public describeStream(input: shapes.KinesisDescribeStreamInput): KinesisDescribeStream {
    return new KinesisDescribeStream(this, 'DescribeStream', this.__resources, input);
  }

  public describeStreamConsumer(input: shapes.KinesisDescribeStreamConsumerInput): KinesisDescribeStreamConsumer {
    return new KinesisDescribeStreamConsumer(this, 'DescribeStreamConsumer', this.__resources, input);
  }

  public describeStreamSummary(input: shapes.KinesisDescribeStreamSummaryInput): KinesisDescribeStreamSummary {
    return new KinesisDescribeStreamSummary(this, 'DescribeStreamSummary', this.__resources, input);
  }

  public disableEnhancedMonitoring(input: shapes.KinesisDisableEnhancedMonitoringInput): KinesisDisableEnhancedMonitoring {
    return new KinesisDisableEnhancedMonitoring(this, 'DisableEnhancedMonitoring', this.__resources, input);
  }

  public enableEnhancedMonitoring(input: shapes.KinesisEnableEnhancedMonitoringInput): KinesisEnableEnhancedMonitoring {
    return new KinesisEnableEnhancedMonitoring(this, 'EnableEnhancedMonitoring', this.__resources, input);
  }

  public fetchRecords(input: shapes.KinesisGetRecordsInput): KinesisFetchRecords {
    return new KinesisFetchRecords(this, 'FetchRecords', this.__resources, input);
  }

  public fetchShardIterator(input: shapes.KinesisGetShardIteratorInput): KinesisFetchShardIterator {
    return new KinesisFetchShardIterator(this, 'FetchShardIterator', this.__resources, input);
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

  public listShards(input: shapes.KinesisListShardsInput): KinesisListShards {
    return new KinesisListShards(this, 'ListShards', this.__resources, input);
  }

  public listStreamConsumers(input: shapes.KinesisListStreamConsumersInput): KinesisListStreamConsumers {
    return new KinesisListStreamConsumers(this, 'ListStreamConsumers', this.__resources, input);
  }

  public listStreams(input: shapes.KinesisListStreamsInput): KinesisListStreams {
    return new KinesisListStreams(this, 'ListStreams', this.__resources, input);
  }

  public listTagsForStream(input: shapes.KinesisListTagsForStreamInput): KinesisListTagsForStream {
    return new KinesisListTagsForStream(this, 'ListTagsForStream', this.__resources, input);
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

  public putRecord(input: shapes.KinesisPutRecordInput): KinesisPutRecord {
    return new KinesisPutRecord(this, 'PutRecord', this.__resources, input);
  }

  public putRecords(input: shapes.KinesisPutRecordsInput): KinesisPutRecords {
    return new KinesisPutRecords(this, 'PutRecords', this.__resources, input);
  }

  public registerStreamConsumer(input: shapes.KinesisRegisterStreamConsumerInput): KinesisRegisterStreamConsumer {
    return new KinesisRegisterStreamConsumer(this, 'RegisterStreamConsumer', this.__resources, input);
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

  public updateShardCount(input: shapes.KinesisUpdateShardCountInput): KinesisUpdateShardCount {
    return new KinesisUpdateShardCount(this, 'UpdateShardCount', this.__resources, input);
  }

}

export class KinesisDescribeLimits extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'DescribeLimits.ShardLimit', props);
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
    const resource = new cr.AwsCustomResource(this, 'DescribeLimits.OpenShardCount', props);
    return resource.getResponseField('OpenShardCount') as unknown as number;
  }

}

export class KinesisDescribeStream extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisDescribeStreamInput) {
    super(scope, id);
  }

  public get streamDescription(): KinesisDescribeStreamStreamDescription {
    return new KinesisDescribeStreamStreamDescription(this, 'StreamDescription', this.__resources, this.input);
  }

}

export class KinesisDescribeStreamStreamDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisDescribeStreamInput) {
    super(scope, id);
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
          StreamName: this.input.streamName,
          Limit: this.input.limit,
          ExclusiveStartShardId: this.input.exclusiveStartShardId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStream.StreamDescription.StreamName', props);
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
          StreamName: this.input.streamName,
          Limit: this.input.limit,
          ExclusiveStartShardId: this.input.exclusiveStartShardId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStream.StreamDescription.StreamARN', props);
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
          StreamName: this.input.streamName,
          Limit: this.input.limit,
          ExclusiveStartShardId: this.input.exclusiveStartShardId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStream.StreamDescription.StreamStatus', props);
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
          StreamName: this.input.streamName,
          Limit: this.input.limit,
          ExclusiveStartShardId: this.input.exclusiveStartShardId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStream.StreamDescription.Shards', props);
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
          StreamName: this.input.streamName,
          Limit: this.input.limit,
          ExclusiveStartShardId: this.input.exclusiveStartShardId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStream.StreamDescription.HasMoreShards', props);
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
          StreamName: this.input.streamName,
          Limit: this.input.limit,
          ExclusiveStartShardId: this.input.exclusiveStartShardId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStream.StreamDescription.RetentionPeriodHours', props);
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
          StreamName: this.input.streamName,
          Limit: this.input.limit,
          ExclusiveStartShardId: this.input.exclusiveStartShardId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStream.StreamDescription.StreamCreationTimestamp', props);
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
          StreamName: this.input.streamName,
          Limit: this.input.limit,
          ExclusiveStartShardId: this.input.exclusiveStartShardId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStream.StreamDescription.EnhancedMonitoring', props);
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
          StreamName: this.input.streamName,
          Limit: this.input.limit,
          ExclusiveStartShardId: this.input.exclusiveStartShardId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStream.StreamDescription.EncryptionType', props);
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
          StreamName: this.input.streamName,
          Limit: this.input.limit,
          ExclusiveStartShardId: this.input.exclusiveStartShardId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStream.StreamDescription.KeyId', props);
    return resource.getResponseField('StreamDescription.KeyId') as unknown as string;
  }

}

export class KinesisDescribeStreamConsumer extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisDescribeStreamConsumerInput) {
    super(scope, id);
  }

  public get consumerDescription(): KinesisDescribeStreamConsumerConsumerDescription {
    return new KinesisDescribeStreamConsumerConsumerDescription(this, 'ConsumerDescription', this.__resources, this.input);
  }

}

export class KinesisDescribeStreamConsumerConsumerDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisDescribeStreamConsumerInput) {
    super(scope, id);
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
          StreamARN: this.input.streamArn,
          ConsumerName: this.input.consumerName,
          ConsumerARN: this.input.consumerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStreamConsumer.ConsumerDescription.ConsumerName', props);
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
          StreamARN: this.input.streamArn,
          ConsumerName: this.input.consumerName,
          ConsumerARN: this.input.consumerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStreamConsumer.ConsumerDescription.ConsumerARN', props);
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
          StreamARN: this.input.streamArn,
          ConsumerName: this.input.consumerName,
          ConsumerARN: this.input.consumerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStreamConsumer.ConsumerDescription.ConsumerStatus', props);
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
          StreamARN: this.input.streamArn,
          ConsumerName: this.input.consumerName,
          ConsumerARN: this.input.consumerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStreamConsumer.ConsumerDescription.ConsumerCreationTimestamp', props);
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
          StreamARN: this.input.streamArn,
          ConsumerName: this.input.consumerName,
          ConsumerARN: this.input.consumerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStreamConsumer.ConsumerDescription.StreamARN', props);
    return resource.getResponseField('ConsumerDescription.StreamARN') as unknown as string;
  }

}

export class KinesisDescribeStreamSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisDescribeStreamSummaryInput) {
    super(scope, id);
  }

  public get streamDescriptionSummary(): KinesisDescribeStreamSummaryStreamDescriptionSummary {
    return new KinesisDescribeStreamSummaryStreamDescriptionSummary(this, 'StreamDescriptionSummary', this.__resources, this.input);
  }

}

export class KinesisDescribeStreamSummaryStreamDescriptionSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisDescribeStreamSummaryInput) {
    super(scope, id);
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
          StreamName: this.input.streamName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStreamSummary.StreamDescriptionSummary.StreamName', props);
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
          StreamName: this.input.streamName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStreamSummary.StreamDescriptionSummary.StreamARN', props);
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
          StreamName: this.input.streamName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStreamSummary.StreamDescriptionSummary.StreamStatus', props);
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
          StreamName: this.input.streamName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStreamSummary.StreamDescriptionSummary.RetentionPeriodHours', props);
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
          StreamName: this.input.streamName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStreamSummary.StreamDescriptionSummary.StreamCreationTimestamp', props);
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
          StreamName: this.input.streamName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStreamSummary.StreamDescriptionSummary.EnhancedMonitoring', props);
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
          StreamName: this.input.streamName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStreamSummary.StreamDescriptionSummary.EncryptionType', props);
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
          StreamName: this.input.streamName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStreamSummary.StreamDescriptionSummary.KeyId', props);
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
          StreamName: this.input.streamName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStreamSummary.StreamDescriptionSummary.OpenShardCount', props);
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
          StreamName: this.input.streamName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStreamSummary.StreamDescriptionSummary.ConsumerCount', props);
    return resource.getResponseField('StreamDescriptionSummary.ConsumerCount') as unknown as number;
  }

}

export class KinesisDisableEnhancedMonitoring extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisDisableEnhancedMonitoringInput) {
    super(scope, id);
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
          StreamName: this.input.streamName,
          ShardLevelMetrics: this.input.shardLevelMetrics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisableEnhancedMonitoring.StreamName', props);
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
          StreamName: this.input.streamName,
          ShardLevelMetrics: this.input.shardLevelMetrics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisableEnhancedMonitoring.CurrentShardLevelMetrics', props);
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
          StreamName: this.input.streamName,
          ShardLevelMetrics: this.input.shardLevelMetrics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisableEnhancedMonitoring.DesiredShardLevelMetrics', props);
    return resource.getResponseField('DesiredShardLevelMetrics') as unknown as string[];
  }

}

export class KinesisEnableEnhancedMonitoring extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisEnableEnhancedMonitoringInput) {
    super(scope, id);
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
          StreamName: this.input.streamName,
          ShardLevelMetrics: this.input.shardLevelMetrics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'EnableEnhancedMonitoring.StreamName', props);
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
          StreamName: this.input.streamName,
          ShardLevelMetrics: this.input.shardLevelMetrics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'EnableEnhancedMonitoring.CurrentShardLevelMetrics', props);
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
          StreamName: this.input.streamName,
          ShardLevelMetrics: this.input.shardLevelMetrics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'EnableEnhancedMonitoring.DesiredShardLevelMetrics', props);
    return resource.getResponseField('DesiredShardLevelMetrics') as unknown as string[];
  }

}

export class KinesisFetchRecords extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisGetRecordsInput) {
    super(scope, id);
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
          ShardIterator: this.input.shardIterator,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRecords.Records', props);
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
          ShardIterator: this.input.shardIterator,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRecords.NextShardIterator', props);
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
          ShardIterator: this.input.shardIterator,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRecords.MillisBehindLatest', props);
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
          ShardIterator: this.input.shardIterator,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRecords.ChildShards', props);
    return resource.getResponseField('ChildShards') as unknown as shapes.KinesisChildShard[];
  }

}

export class KinesisFetchShardIterator extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisGetShardIteratorInput) {
    super(scope, id);
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
          StreamName: this.input.streamName,
          ShardId: this.input.shardId,
          ShardIteratorType: this.input.shardIteratorType,
          StartingSequenceNumber: this.input.startingSequenceNumber,
          Timestamp: this.input.timestamp,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetShardIterator.ShardIterator', props);
    return resource.getResponseField('ShardIterator') as unknown as string;
  }

}

export class KinesisListShards extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisListShardsInput) {
    super(scope, id);
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
          StreamName: this.input.streamName,
          NextToken: this.input.nextToken,
          ExclusiveStartShardId: this.input.exclusiveStartShardId,
          MaxResults: this.input.maxResults,
          StreamCreationTimestamp: this.input.streamCreationTimestamp,
          ShardFilter: {
            Type: this.input.shardFilter?.type,
            ShardId: this.input.shardFilter?.shardId,
            Timestamp: this.input.shardFilter?.timestamp,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListShards.Shards', props);
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
          StreamName: this.input.streamName,
          NextToken: this.input.nextToken,
          ExclusiveStartShardId: this.input.exclusiveStartShardId,
          MaxResults: this.input.maxResults,
          StreamCreationTimestamp: this.input.streamCreationTimestamp,
          ShardFilter: {
            Type: this.input.shardFilter?.type,
            ShardId: this.input.shardFilter?.shardId,
            Timestamp: this.input.shardFilter?.timestamp,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListShards.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class KinesisListStreamConsumers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisListStreamConsumersInput) {
    super(scope, id);
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
          StreamARN: this.input.streamArn,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          StreamCreationTimestamp: this.input.streamCreationTimestamp,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListStreamConsumers.Consumers', props);
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
          StreamARN: this.input.streamArn,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          StreamCreationTimestamp: this.input.streamCreationTimestamp,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListStreamConsumers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class KinesisListStreams extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisListStreamsInput) {
    super(scope, id);
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
          Limit: this.input.limit,
          ExclusiveStartStreamName: this.input.exclusiveStartStreamName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListStreams.StreamNames', props);
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
          Limit: this.input.limit,
          ExclusiveStartStreamName: this.input.exclusiveStartStreamName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListStreams.HasMoreStreams', props);
    return resource.getResponseField('HasMoreStreams') as unknown as boolean;
  }

}

export class KinesisListTagsForStream extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisListTagsForStreamInput) {
    super(scope, id);
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
          StreamName: this.input.streamName,
          ExclusiveStartTagKey: this.input.exclusiveStartTagKey,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForStream.Tags', props);
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
          StreamName: this.input.streamName,
          ExclusiveStartTagKey: this.input.exclusiveStartTagKey,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForStream.HasMoreTags', props);
    return resource.getResponseField('HasMoreTags') as unknown as boolean;
  }

}

export class KinesisPutRecord extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisPutRecordInput) {
    super(scope, id);
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
          StreamName: this.input.streamName,
          Data: {
          },
          PartitionKey: this.input.partitionKey,
          ExplicitHashKey: this.input.explicitHashKey,
          SequenceNumberForOrdering: this.input.sequenceNumberForOrdering,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutRecord.ShardId', props);
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
          StreamName: this.input.streamName,
          Data: {
          },
          PartitionKey: this.input.partitionKey,
          ExplicitHashKey: this.input.explicitHashKey,
          SequenceNumberForOrdering: this.input.sequenceNumberForOrdering,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutRecord.SequenceNumber', props);
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
          StreamName: this.input.streamName,
          Data: {
          },
          PartitionKey: this.input.partitionKey,
          ExplicitHashKey: this.input.explicitHashKey,
          SequenceNumberForOrdering: this.input.sequenceNumberForOrdering,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutRecord.EncryptionType', props);
    return resource.getResponseField('EncryptionType') as unknown as string;
  }

}

export class KinesisPutRecords extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisPutRecordsInput) {
    super(scope, id);
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
          Records: this.input.records,
          StreamName: this.input.streamName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutRecords.FailedRecordCount', props);
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
          Records: this.input.records,
          StreamName: this.input.streamName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutRecords.Records', props);
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
          Records: this.input.records,
          StreamName: this.input.streamName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutRecords.EncryptionType', props);
    return resource.getResponseField('EncryptionType') as unknown as string;
  }

}

export class KinesisRegisterStreamConsumer extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisRegisterStreamConsumerInput) {
    super(scope, id);
  }

  public get consumer(): KinesisRegisterStreamConsumerConsumer {
    return new KinesisRegisterStreamConsumerConsumer(this, 'Consumer', this.__resources, this.input);
  }

}

export class KinesisRegisterStreamConsumerConsumer extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisRegisterStreamConsumerInput) {
    super(scope, id);
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
          StreamARN: this.input.streamArn,
          ConsumerName: this.input.consumerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterStreamConsumer.Consumer.ConsumerName', props);
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
          StreamARN: this.input.streamArn,
          ConsumerName: this.input.consumerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterStreamConsumer.Consumer.ConsumerARN', props);
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
          StreamARN: this.input.streamArn,
          ConsumerName: this.input.consumerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterStreamConsumer.Consumer.ConsumerStatus', props);
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
          StreamARN: this.input.streamArn,
          ConsumerName: this.input.consumerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterStreamConsumer.Consumer.ConsumerCreationTimestamp', props);
    return resource.getResponseField('Consumer.ConsumerCreationTimestamp') as unknown as string;
  }

}

export class KinesisUpdateShardCount extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisUpdateShardCountInput) {
    super(scope, id);
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
          StreamName: this.input.streamName,
          TargetShardCount: this.input.targetShardCount,
          ScalingType: this.input.scalingType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateShardCount.StreamName', props);
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
          StreamName: this.input.streamName,
          TargetShardCount: this.input.targetShardCount,
          ScalingType: this.input.scalingType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateShardCount.CurrentShardCount', props);
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
          StreamName: this.input.streamName,
          TargetShardCount: this.input.targetShardCount,
          ScalingType: this.input.scalingType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateShardCount.TargetShardCount', props);
    return resource.getResponseField('TargetShardCount') as unknown as number;
  }

}

