import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class IvsClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public batchGetChannel(input: shapes.IvsBatchGetChannelRequest): IVSBatchGetChannel {
    return new IVSBatchGetChannel(this, 'BatchGetChannel', this.__resources, input);
  }

  public batchGetStreamKey(input: shapes.IvsBatchGetStreamKeyRequest): IVSBatchGetStreamKey {
    return new IVSBatchGetStreamKey(this, 'BatchGetStreamKey', this.__resources, input);
  }

  public createChannel(input: shapes.IvsCreateChannelRequest): IVSCreateChannel {
    return new IVSCreateChannel(this, 'CreateChannel', this.__resources, input);
  }

  public createStreamKey(input: shapes.IvsCreateStreamKeyRequest): IVSCreateStreamKey {
    return new IVSCreateStreamKey(this, 'CreateStreamKey', this.__resources, input);
  }

  public deleteChannel(input: shapes.IvsDeleteChannelRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteChannel',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.DeleteChannel'),
        parameters: {
          arn: input.arn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteChannel', props);
  }

  public deletePlaybackKeyPair(input: shapes.IvsDeletePlaybackKeyPairRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deletePlaybackKeyPair',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.DeletePlaybackKeyPair'),
        parameters: {
          arn: input.arn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeletePlaybackKeyPair', props);
  }

  public deleteStreamKey(input: shapes.IvsDeleteStreamKeyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStreamKey',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.DeleteStreamKey'),
        parameters: {
          arn: input.arn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteStreamKey', props);
  }

  public fetchChannel(input: shapes.IvsGetChannelRequest): IVSFetchChannel {
    return new IVSFetchChannel(this, 'FetchChannel', this.__resources, input);
  }

  public fetchPlaybackKeyPair(input: shapes.IvsGetPlaybackKeyPairRequest): IVSFetchPlaybackKeyPair {
    return new IVSFetchPlaybackKeyPair(this, 'FetchPlaybackKeyPair', this.__resources, input);
  }

  public fetchStream(input: shapes.IvsGetStreamRequest): IVSFetchStream {
    return new IVSFetchStream(this, 'FetchStream', this.__resources, input);
  }

  public fetchStreamKey(input: shapes.IvsGetStreamKeyRequest): IVSFetchStreamKey {
    return new IVSFetchStreamKey(this, 'FetchStreamKey', this.__resources, input);
  }

  public importPlaybackKeyPair(input: shapes.IvsImportPlaybackKeyPairRequest): IVSImportPlaybackKeyPair {
    return new IVSImportPlaybackKeyPair(this, 'ImportPlaybackKeyPair', this.__resources, input);
  }

  public listChannels(input: shapes.IvsListChannelsRequest): IVSListChannels {
    return new IVSListChannels(this, 'ListChannels', this.__resources, input);
  }

  public listPlaybackKeyPairs(input: shapes.IvsListPlaybackKeyPairsRequest): IVSListPlaybackKeyPairs {
    return new IVSListPlaybackKeyPairs(this, 'ListPlaybackKeyPairs', this.__resources, input);
  }

  public listStreamKeys(input: shapes.IvsListStreamKeysRequest): IVSListStreamKeys {
    return new IVSListStreamKeys(this, 'ListStreamKeys', this.__resources, input);
  }

  public listStreams(input: shapes.IvsListStreamsRequest): IVSListStreams {
    return new IVSListStreams(this, 'ListStreams', this.__resources, input);
  }

  public listTagsForResource(input: shapes.IvsListTagsForResourceRequest): IVSListTagsForResource {
    return new IVSListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public putMetadata(input: shapes.IvsPutMetadataRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putMetadata',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.PutMetadata'),
        parameters: {
          channelArn: input.channelArn,
          metadata: input.metadata,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutMetadata', props);
  }

  public stopStream(input: shapes.IvsStopStreamRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopStream',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.StopStream'),
        parameters: {
          channelArn: input.channelArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StopStream', props);
  }

  public tagResource(input: shapes.IvsTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.TagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.IvsUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.UntagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateChannel(input: shapes.IvsUpdateChannelRequest): IVSUpdateChannel {
    return new IVSUpdateChannel(this, 'UpdateChannel', this.__resources, input);
  }

}

export class IVSBatchGetChannel extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IvsBatchGetChannelRequest) {
    super(scope, id);
  }

  public get channels(): shapes.IvsChannel[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetChannel',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.BatchGetChannel.channels'),
        outputPath: 'channels',
        parameters: {
          arns: this.input.arns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchGetChannel.channels', props);
    return resource.getResponseField('channels') as unknown as shapes.IvsChannel[];
  }

  public get errors(): shapes.IvsBatchError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetChannel',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.BatchGetChannel.errors'),
        outputPath: 'errors',
        parameters: {
          arns: this.input.arns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchGetChannel.errors', props);
    return resource.getResponseField('errors') as unknown as shapes.IvsBatchError[];
  }

}

export class IVSBatchGetStreamKey extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IvsBatchGetStreamKeyRequest) {
    super(scope, id);
  }

  public get streamKeys(): shapes.IvsStreamKey[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetStreamKey',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.BatchGetStreamKey.streamKeys'),
        outputPath: 'streamKeys',
        parameters: {
          arns: this.input.arns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchGetStreamKey.streamKeys', props);
    return resource.getResponseField('streamKeys') as unknown as shapes.IvsStreamKey[];
  }

  public get errors(): shapes.IvsBatchError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetStreamKey',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.BatchGetStreamKey.errors'),
        outputPath: 'errors',
        parameters: {
          arns: this.input.arns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchGetStreamKey.errors', props);
    return resource.getResponseField('errors') as unknown as shapes.IvsBatchError[];
  }

}

export class IVSCreateChannel extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IvsCreateChannelRequest) {
    super(scope, id);
  }

  public get channel(): IVSCreateChannelChannel {
    return new IVSCreateChannelChannel(this, 'Channel', this.__resources, this.input);
  }

  public get streamKey(): IVSCreateChannelStreamKey {
    return new IVSCreateChannelStreamKey(this, 'StreamKey', this.__resources, this.input);
  }

}

export class IVSCreateChannelChannel extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IvsCreateChannelRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createChannel',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.CreateChannel.channel.arn'),
        outputPath: 'channel.arn',
        parameters: {
          name: this.input.name,
          latencyMode: this.input.latencyMode,
          type: this.input.type,
          authorized: this.input.authorized,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateChannel.channel.arn', props);
    return resource.getResponseField('channel.arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createChannel',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.CreateChannel.channel.name'),
        outputPath: 'channel.name',
        parameters: {
          name: this.input.name,
          latencyMode: this.input.latencyMode,
          type: this.input.type,
          authorized: this.input.authorized,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateChannel.channel.name', props);
    return resource.getResponseField('channel.name') as unknown as string;
  }

  public get latencyMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createChannel',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.CreateChannel.channel.latencyMode'),
        outputPath: 'channel.latencyMode',
        parameters: {
          name: this.input.name,
          latencyMode: this.input.latencyMode,
          type: this.input.type,
          authorized: this.input.authorized,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateChannel.channel.latencyMode', props);
    return resource.getResponseField('channel.latencyMode') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createChannel',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.CreateChannel.channel.type'),
        outputPath: 'channel.type',
        parameters: {
          name: this.input.name,
          latencyMode: this.input.latencyMode,
          type: this.input.type,
          authorized: this.input.authorized,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateChannel.channel.type', props);
    return resource.getResponseField('channel.type') as unknown as string;
  }

  public get ingestEndpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createChannel',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.CreateChannel.channel.ingestEndpoint'),
        outputPath: 'channel.ingestEndpoint',
        parameters: {
          name: this.input.name,
          latencyMode: this.input.latencyMode,
          type: this.input.type,
          authorized: this.input.authorized,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateChannel.channel.ingestEndpoint', props);
    return resource.getResponseField('channel.ingestEndpoint') as unknown as string;
  }

  public get playbackUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createChannel',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.CreateChannel.channel.playbackUrl'),
        outputPath: 'channel.playbackUrl',
        parameters: {
          name: this.input.name,
          latencyMode: this.input.latencyMode,
          type: this.input.type,
          authorized: this.input.authorized,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateChannel.channel.playbackUrl', props);
    return resource.getResponseField('channel.playbackUrl') as unknown as string;
  }

  public get authorized(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createChannel',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.CreateChannel.channel.authorized'),
        outputPath: 'channel.authorized',
        parameters: {
          name: this.input.name,
          latencyMode: this.input.latencyMode,
          type: this.input.type,
          authorized: this.input.authorized,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateChannel.channel.authorized', props);
    return resource.getResponseField('channel.authorized') as unknown as boolean;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createChannel',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.CreateChannel.channel.tags'),
        outputPath: 'channel.tags',
        parameters: {
          name: this.input.name,
          latencyMode: this.input.latencyMode,
          type: this.input.type,
          authorized: this.input.authorized,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateChannel.channel.tags', props);
    return resource.getResponseField('channel.tags') as unknown as Record<string, string>;
  }

}

export class IVSCreateChannelStreamKey extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IvsCreateChannelRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createChannel',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.CreateChannel.streamKey.arn'),
        outputPath: 'streamKey.arn',
        parameters: {
          name: this.input.name,
          latencyMode: this.input.latencyMode,
          type: this.input.type,
          authorized: this.input.authorized,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateChannel.streamKey.arn', props);
    return resource.getResponseField('streamKey.arn') as unknown as string;
  }

  public get value(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createChannel',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.CreateChannel.streamKey.value'),
        outputPath: 'streamKey.value',
        parameters: {
          name: this.input.name,
          latencyMode: this.input.latencyMode,
          type: this.input.type,
          authorized: this.input.authorized,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateChannel.streamKey.value', props);
    return resource.getResponseField('streamKey.value') as unknown as string;
  }

  public get channelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createChannel',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.CreateChannel.streamKey.channelArn'),
        outputPath: 'streamKey.channelArn',
        parameters: {
          name: this.input.name,
          latencyMode: this.input.latencyMode,
          type: this.input.type,
          authorized: this.input.authorized,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateChannel.streamKey.channelArn', props);
    return resource.getResponseField('streamKey.channelArn') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createChannel',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.CreateChannel.streamKey.tags'),
        outputPath: 'streamKey.tags',
        parameters: {
          name: this.input.name,
          latencyMode: this.input.latencyMode,
          type: this.input.type,
          authorized: this.input.authorized,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateChannel.streamKey.tags', props);
    return resource.getResponseField('streamKey.tags') as unknown as Record<string, string>;
  }

}

export class IVSCreateStreamKey extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IvsCreateStreamKeyRequest) {
    super(scope, id);
  }

  public get streamKey(): IVSCreateStreamKeyStreamKey {
    return new IVSCreateStreamKeyStreamKey(this, 'StreamKey', this.__resources, this.input);
  }

}

export class IVSCreateStreamKeyStreamKey extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IvsCreateStreamKeyRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStreamKey',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.CreateStreamKey.streamKey.arn'),
        outputPath: 'streamKey.arn',
        parameters: {
          channelArn: this.input.channelArn,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStreamKey.streamKey.arn', props);
    return resource.getResponseField('streamKey.arn') as unknown as string;
  }

  public get value(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStreamKey',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.CreateStreamKey.streamKey.value'),
        outputPath: 'streamKey.value',
        parameters: {
          channelArn: this.input.channelArn,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStreamKey.streamKey.value', props);
    return resource.getResponseField('streamKey.value') as unknown as string;
  }

  public get channelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStreamKey',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.CreateStreamKey.streamKey.channelArn'),
        outputPath: 'streamKey.channelArn',
        parameters: {
          channelArn: this.input.channelArn,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStreamKey.streamKey.channelArn', props);
    return resource.getResponseField('streamKey.channelArn') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStreamKey',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.CreateStreamKey.streamKey.tags'),
        outputPath: 'streamKey.tags',
        parameters: {
          channelArn: this.input.channelArn,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStreamKey.streamKey.tags', props);
    return resource.getResponseField('streamKey.tags') as unknown as Record<string, string>;
  }

}

export class IVSFetchChannel extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IvsGetChannelRequest) {
    super(scope, id);
  }

  public get channel(): IVSFetchChannelChannel {
    return new IVSFetchChannelChannel(this, 'Channel', this.__resources, this.input);
  }

}

export class IVSFetchChannelChannel extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IvsGetChannelRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getChannel',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.GetChannel.channel.arn'),
        outputPath: 'channel.arn',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetChannel.channel.arn', props);
    return resource.getResponseField('channel.arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getChannel',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.GetChannel.channel.name'),
        outputPath: 'channel.name',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetChannel.channel.name', props);
    return resource.getResponseField('channel.name') as unknown as string;
  }

  public get latencyMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getChannel',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.GetChannel.channel.latencyMode'),
        outputPath: 'channel.latencyMode',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetChannel.channel.latencyMode', props);
    return resource.getResponseField('channel.latencyMode') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getChannel',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.GetChannel.channel.type'),
        outputPath: 'channel.type',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetChannel.channel.type', props);
    return resource.getResponseField('channel.type') as unknown as string;
  }

  public get ingestEndpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getChannel',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.GetChannel.channel.ingestEndpoint'),
        outputPath: 'channel.ingestEndpoint',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetChannel.channel.ingestEndpoint', props);
    return resource.getResponseField('channel.ingestEndpoint') as unknown as string;
  }

  public get playbackUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getChannel',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.GetChannel.channel.playbackUrl'),
        outputPath: 'channel.playbackUrl',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetChannel.channel.playbackUrl', props);
    return resource.getResponseField('channel.playbackUrl') as unknown as string;
  }

  public get authorized(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getChannel',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.GetChannel.channel.authorized'),
        outputPath: 'channel.authorized',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetChannel.channel.authorized', props);
    return resource.getResponseField('channel.authorized') as unknown as boolean;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getChannel',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.GetChannel.channel.tags'),
        outputPath: 'channel.tags',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetChannel.channel.tags', props);
    return resource.getResponseField('channel.tags') as unknown as Record<string, string>;
  }

}

export class IVSFetchPlaybackKeyPair extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IvsGetPlaybackKeyPairRequest) {
    super(scope, id);
  }

  public get keyPair(): IVSFetchPlaybackKeyPairKeyPair {
    return new IVSFetchPlaybackKeyPairKeyPair(this, 'KeyPair', this.__resources, this.input);
  }

}

export class IVSFetchPlaybackKeyPairKeyPair extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IvsGetPlaybackKeyPairRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPlaybackKeyPair',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.GetPlaybackKeyPair.keyPair.arn'),
        outputPath: 'keyPair.arn',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPlaybackKeyPair.keyPair.arn', props);
    return resource.getResponseField('keyPair.arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPlaybackKeyPair',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.GetPlaybackKeyPair.keyPair.name'),
        outputPath: 'keyPair.name',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPlaybackKeyPair.keyPair.name', props);
    return resource.getResponseField('keyPair.name') as unknown as string;
  }

  public get fingerprint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPlaybackKeyPair',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.GetPlaybackKeyPair.keyPair.fingerprint'),
        outputPath: 'keyPair.fingerprint',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPlaybackKeyPair.keyPair.fingerprint', props);
    return resource.getResponseField('keyPair.fingerprint') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPlaybackKeyPair',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.GetPlaybackKeyPair.keyPair.tags'),
        outputPath: 'keyPair.tags',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPlaybackKeyPair.keyPair.tags', props);
    return resource.getResponseField('keyPair.tags') as unknown as Record<string, string>;
  }

}

export class IVSFetchStream extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IvsGetStreamRequest) {
    super(scope, id);
  }

  public get stream(): IVSFetchStreamStream {
    return new IVSFetchStreamStream(this, 'Stream', this.__resources, this.input);
  }

}

export class IVSFetchStreamStream extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IvsGetStreamRequest) {
    super(scope, id);
  }

  public get channelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStream',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.GetStream.stream.channelArn'),
        outputPath: 'stream.channelArn',
        parameters: {
          channelArn: this.input.channelArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStream.stream.channelArn', props);
    return resource.getResponseField('stream.channelArn') as unknown as string;
  }

  public get playbackUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStream',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.GetStream.stream.playbackUrl'),
        outputPath: 'stream.playbackUrl',
        parameters: {
          channelArn: this.input.channelArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStream.stream.playbackUrl', props);
    return resource.getResponseField('stream.playbackUrl') as unknown as string;
  }

  public get startTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStream',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.GetStream.stream.startTime'),
        outputPath: 'stream.startTime',
        parameters: {
          channelArn: this.input.channelArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStream.stream.startTime', props);
    return resource.getResponseField('stream.startTime') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStream',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.GetStream.stream.state'),
        outputPath: 'stream.state',
        parameters: {
          channelArn: this.input.channelArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStream.stream.state', props);
    return resource.getResponseField('stream.state') as unknown as string;
  }

  public get health(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStream',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.GetStream.stream.health'),
        outputPath: 'stream.health',
        parameters: {
          channelArn: this.input.channelArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStream.stream.health', props);
    return resource.getResponseField('stream.health') as unknown as string;
  }

  public get viewerCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStream',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.GetStream.stream.viewerCount'),
        outputPath: 'stream.viewerCount',
        parameters: {
          channelArn: this.input.channelArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStream.stream.viewerCount', props);
    return resource.getResponseField('stream.viewerCount') as unknown as number;
  }

}

export class IVSFetchStreamKey extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IvsGetStreamKeyRequest) {
    super(scope, id);
  }

  public get streamKey(): IVSFetchStreamKeyStreamKey {
    return new IVSFetchStreamKeyStreamKey(this, 'StreamKey', this.__resources, this.input);
  }

}

export class IVSFetchStreamKeyStreamKey extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IvsGetStreamKeyRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStreamKey',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.GetStreamKey.streamKey.arn'),
        outputPath: 'streamKey.arn',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStreamKey.streamKey.arn', props);
    return resource.getResponseField('streamKey.arn') as unknown as string;
  }

  public get value(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStreamKey',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.GetStreamKey.streamKey.value'),
        outputPath: 'streamKey.value',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStreamKey.streamKey.value', props);
    return resource.getResponseField('streamKey.value') as unknown as string;
  }

  public get channelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStreamKey',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.GetStreamKey.streamKey.channelArn'),
        outputPath: 'streamKey.channelArn',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStreamKey.streamKey.channelArn', props);
    return resource.getResponseField('streamKey.channelArn') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStreamKey',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.GetStreamKey.streamKey.tags'),
        outputPath: 'streamKey.tags',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStreamKey.streamKey.tags', props);
    return resource.getResponseField('streamKey.tags') as unknown as Record<string, string>;
  }

}

export class IVSImportPlaybackKeyPair extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IvsImportPlaybackKeyPairRequest) {
    super(scope, id);
  }

  public get keyPair(): IVSImportPlaybackKeyPairKeyPair {
    return new IVSImportPlaybackKeyPairKeyPair(this, 'KeyPair', this.__resources, this.input);
  }

}

export class IVSImportPlaybackKeyPairKeyPair extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IvsImportPlaybackKeyPairRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importPlaybackKeyPair',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.ImportPlaybackKeyPair.keyPair.arn'),
        outputPath: 'keyPair.arn',
        parameters: {
          publicKeyMaterial: this.input.publicKeyMaterial,
          name: this.input.name,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportPlaybackKeyPair.keyPair.arn', props);
    return resource.getResponseField('keyPair.arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importPlaybackKeyPair',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.ImportPlaybackKeyPair.keyPair.name'),
        outputPath: 'keyPair.name',
        parameters: {
          publicKeyMaterial: this.input.publicKeyMaterial,
          name: this.input.name,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportPlaybackKeyPair.keyPair.name', props);
    return resource.getResponseField('keyPair.name') as unknown as string;
  }

  public get fingerprint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importPlaybackKeyPair',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.ImportPlaybackKeyPair.keyPair.fingerprint'),
        outputPath: 'keyPair.fingerprint',
        parameters: {
          publicKeyMaterial: this.input.publicKeyMaterial,
          name: this.input.name,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportPlaybackKeyPair.keyPair.fingerprint', props);
    return resource.getResponseField('keyPair.fingerprint') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importPlaybackKeyPair',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.ImportPlaybackKeyPair.keyPair.tags'),
        outputPath: 'keyPair.tags',
        parameters: {
          publicKeyMaterial: this.input.publicKeyMaterial,
          name: this.input.name,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportPlaybackKeyPair.keyPair.tags', props);
    return resource.getResponseField('keyPair.tags') as unknown as Record<string, string>;
  }

}

export class IVSListChannels extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IvsListChannelsRequest) {
    super(scope, id);
  }

  public get channels(): shapes.IvsChannelSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listChannels',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.ListChannels.channels'),
        outputPath: 'channels',
        parameters: {
          filterByName: this.input.filterByName,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListChannels.channels', props);
    return resource.getResponseField('channels') as unknown as shapes.IvsChannelSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listChannels',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.ListChannels.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          filterByName: this.input.filterByName,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListChannels.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IVSListPlaybackKeyPairs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IvsListPlaybackKeyPairsRequest) {
    super(scope, id);
  }

  public get keyPairs(): shapes.IvsPlaybackKeyPairSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPlaybackKeyPairs',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.ListPlaybackKeyPairs.keyPairs'),
        outputPath: 'keyPairs',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPlaybackKeyPairs.keyPairs', props);
    return resource.getResponseField('keyPairs') as unknown as shapes.IvsPlaybackKeyPairSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPlaybackKeyPairs',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.ListPlaybackKeyPairs.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPlaybackKeyPairs.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IVSListStreamKeys extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IvsListStreamKeysRequest) {
    super(scope, id);
  }

  public get streamKeys(): shapes.IvsStreamKeySummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listStreamKeys',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.ListStreamKeys.streamKeys'),
        outputPath: 'streamKeys',
        parameters: {
          channelArn: this.input.channelArn,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListStreamKeys.streamKeys', props);
    return resource.getResponseField('streamKeys') as unknown as shapes.IvsStreamKeySummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listStreamKeys',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.ListStreamKeys.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          channelArn: this.input.channelArn,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListStreamKeys.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IVSListStreams extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IvsListStreamsRequest) {
    super(scope, id);
  }

  public get streams(): shapes.IvsStreamSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listStreams',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.ListStreams.streams'),
        outputPath: 'streams',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListStreams.streams', props);
    return resource.getResponseField('streams') as unknown as shapes.IvsStreamSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listStreams',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.ListStreams.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListStreams.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IVSListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IvsListTagsForResourceRequest) {
    super(scope, id);
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.ListTagsForResource.tags'),
        outputPath: 'tags',
        parameters: {
          resourceArn: this.input.resourceArn,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.ListTagsForResource.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          resourceArn: this.input.resourceArn,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IVSUpdateChannel extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IvsUpdateChannelRequest) {
    super(scope, id);
  }

  public get channel(): IVSUpdateChannelChannel {
    return new IVSUpdateChannelChannel(this, 'Channel', this.__resources, this.input);
  }

}

export class IVSUpdateChannelChannel extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IvsUpdateChannelRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateChannel',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.UpdateChannel.channel.arn'),
        outputPath: 'channel.arn',
        parameters: {
          arn: this.input.arn,
          name: this.input.name,
          latencyMode: this.input.latencyMode,
          type: this.input.type,
          authorized: this.input.authorized,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateChannel.channel.arn', props);
    return resource.getResponseField('channel.arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateChannel',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.UpdateChannel.channel.name'),
        outputPath: 'channel.name',
        parameters: {
          arn: this.input.arn,
          name: this.input.name,
          latencyMode: this.input.latencyMode,
          type: this.input.type,
          authorized: this.input.authorized,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateChannel.channel.name', props);
    return resource.getResponseField('channel.name') as unknown as string;
  }

  public get latencyMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateChannel',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.UpdateChannel.channel.latencyMode'),
        outputPath: 'channel.latencyMode',
        parameters: {
          arn: this.input.arn,
          name: this.input.name,
          latencyMode: this.input.latencyMode,
          type: this.input.type,
          authorized: this.input.authorized,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateChannel.channel.latencyMode', props);
    return resource.getResponseField('channel.latencyMode') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateChannel',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.UpdateChannel.channel.type'),
        outputPath: 'channel.type',
        parameters: {
          arn: this.input.arn,
          name: this.input.name,
          latencyMode: this.input.latencyMode,
          type: this.input.type,
          authorized: this.input.authorized,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateChannel.channel.type', props);
    return resource.getResponseField('channel.type') as unknown as string;
  }

  public get ingestEndpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateChannel',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.UpdateChannel.channel.ingestEndpoint'),
        outputPath: 'channel.ingestEndpoint',
        parameters: {
          arn: this.input.arn,
          name: this.input.name,
          latencyMode: this.input.latencyMode,
          type: this.input.type,
          authorized: this.input.authorized,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateChannel.channel.ingestEndpoint', props);
    return resource.getResponseField('channel.ingestEndpoint') as unknown as string;
  }

  public get playbackUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateChannel',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.UpdateChannel.channel.playbackUrl'),
        outputPath: 'channel.playbackUrl',
        parameters: {
          arn: this.input.arn,
          name: this.input.name,
          latencyMode: this.input.latencyMode,
          type: this.input.type,
          authorized: this.input.authorized,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateChannel.channel.playbackUrl', props);
    return resource.getResponseField('channel.playbackUrl') as unknown as string;
  }

  public get authorized(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateChannel',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.UpdateChannel.channel.authorized'),
        outputPath: 'channel.authorized',
        parameters: {
          arn: this.input.arn,
          name: this.input.name,
          latencyMode: this.input.latencyMode,
          type: this.input.type,
          authorized: this.input.authorized,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateChannel.channel.authorized', props);
    return resource.getResponseField('channel.authorized') as unknown as boolean;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateChannel',
        service: 'IVS',
        physicalResourceId: cr.PhysicalResourceId.of('IVS.UpdateChannel.channel.tags'),
        outputPath: 'channel.tags',
        parameters: {
          arn: this.input.arn,
          name: this.input.name,
          latencyMode: this.input.latencyMode,
          type: this.input.type,
          authorized: this.input.authorized,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateChannel.channel.tags', props);
    return resource.getResponseField('channel.tags') as unknown as Record<string, string>;
  }

}

