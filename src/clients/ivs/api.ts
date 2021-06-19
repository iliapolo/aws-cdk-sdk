import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class IvsClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public batchGetChannel(input: shapes.IvsBatchGetChannelRequest): IVSResponsesBatchGetChannel {
    return new IVSResponsesBatchGetChannel(this, this.__resources, input);
  }

  public batchGetStreamKey(input: shapes.IvsBatchGetStreamKeyRequest): IVSResponsesBatchGetStreamKey {
    return new IVSResponsesBatchGetStreamKey(this, this.__resources, input);
  }

  public createChannel(input: shapes.IvsCreateChannelRequest): IVSResponsesCreateChannel {
    return new IVSResponsesCreateChannel(this, this.__resources, input);
  }

  public createStreamKey(input: shapes.IvsCreateStreamKeyRequest): IVSResponsesCreateStreamKey {
    return new IVSResponsesCreateStreamKey(this, this.__resources, input);
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

  public fetchChannel(input: shapes.IvsGetChannelRequest): IVSResponsesFetchChannel {
    return new IVSResponsesFetchChannel(this, this.__resources, input);
  }

  public fetchPlaybackKeyPair(input: shapes.IvsGetPlaybackKeyPairRequest): IVSResponsesFetchPlaybackKeyPair {
    return new IVSResponsesFetchPlaybackKeyPair(this, this.__resources, input);
  }

  public fetchStream(input: shapes.IvsGetStreamRequest): IVSResponsesFetchStream {
    return new IVSResponsesFetchStream(this, this.__resources, input);
  }

  public fetchStreamKey(input: shapes.IvsGetStreamKeyRequest): IVSResponsesFetchStreamKey {
    return new IVSResponsesFetchStreamKey(this, this.__resources, input);
  }

  public importPlaybackKeyPair(input: shapes.IvsImportPlaybackKeyPairRequest): IVSResponsesImportPlaybackKeyPair {
    return new IVSResponsesImportPlaybackKeyPair(this, this.__resources, input);
  }

  public listChannels(input: shapes.IvsListChannelsRequest): IVSResponsesListChannels {
    return new IVSResponsesListChannels(this, this.__resources, input);
  }

  public listPlaybackKeyPairs(input: shapes.IvsListPlaybackKeyPairsRequest): IVSResponsesListPlaybackKeyPairs {
    return new IVSResponsesListPlaybackKeyPairs(this, this.__resources, input);
  }

  public listStreamKeys(input: shapes.IvsListStreamKeysRequest): IVSResponsesListStreamKeys {
    return new IVSResponsesListStreamKeys(this, this.__resources, input);
  }

  public listStreams(input: shapes.IvsListStreamsRequest): IVSResponsesListStreams {
    return new IVSResponsesListStreams(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.IvsListTagsForResourceRequest): IVSResponsesListTagsForResource {
    return new IVSResponsesListTagsForResource(this, this.__resources, input);
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

  public updateChannel(input: shapes.IvsUpdateChannelRequest): IVSResponsesUpdateChannel {
    return new IVSResponsesUpdateChannel(this, this.__resources, input);
  }

}

export class IVSResponsesBatchGetChannel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IvsBatchGetChannelRequest) {
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
          arns: this.__input.arns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchGetChannel.channels', props);
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
          arns: this.__input.arns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchGetChannel.errors', props);
    return resource.getResponseField('errors') as unknown as shapes.IvsBatchError[];
  }

}

export class IVSResponsesBatchGetStreamKey {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IvsBatchGetStreamKeyRequest) {
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
          arns: this.__input.arns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchGetStreamKey.streamKeys', props);
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
          arns: this.__input.arns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchGetStreamKey.errors', props);
    return resource.getResponseField('errors') as unknown as shapes.IvsBatchError[];
  }

}

export class IVSResponsesCreateChannel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IvsCreateChannelRequest) {
  }

  public get channel(): IVSResponsesCreateChannelChannel {
    return new IVSResponsesCreateChannelChannel(this.__scope, this.__resources, this.__input);
  }

  public get streamKey(): IVSResponsesCreateChannelStreamKey {
    return new IVSResponsesCreateChannelStreamKey(this.__scope, this.__resources, this.__input);
  }

}

export class IVSResponsesCreateChannelChannel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IvsCreateChannelRequest) {
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
          name: this.__input.name,
          latencyMode: this.__input.latencyMode,
          type: this.__input.type,
          authorized: this.__input.authorized,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateChannel.channel.arn', props);
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
          name: this.__input.name,
          latencyMode: this.__input.latencyMode,
          type: this.__input.type,
          authorized: this.__input.authorized,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateChannel.channel.name', props);
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
          name: this.__input.name,
          latencyMode: this.__input.latencyMode,
          type: this.__input.type,
          authorized: this.__input.authorized,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateChannel.channel.latencyMode', props);
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
          name: this.__input.name,
          latencyMode: this.__input.latencyMode,
          type: this.__input.type,
          authorized: this.__input.authorized,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateChannel.channel.type', props);
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
          name: this.__input.name,
          latencyMode: this.__input.latencyMode,
          type: this.__input.type,
          authorized: this.__input.authorized,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateChannel.channel.ingestEndpoint', props);
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
          name: this.__input.name,
          latencyMode: this.__input.latencyMode,
          type: this.__input.type,
          authorized: this.__input.authorized,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateChannel.channel.playbackUrl', props);
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
          name: this.__input.name,
          latencyMode: this.__input.latencyMode,
          type: this.__input.type,
          authorized: this.__input.authorized,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateChannel.channel.authorized', props);
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
          name: this.__input.name,
          latencyMode: this.__input.latencyMode,
          type: this.__input.type,
          authorized: this.__input.authorized,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateChannel.channel.tags', props);
    return resource.getResponseField('channel.tags') as unknown as Record<string, string>;
  }

}

export class IVSResponsesCreateChannelStreamKey {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IvsCreateChannelRequest) {
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
          name: this.__input.name,
          latencyMode: this.__input.latencyMode,
          type: this.__input.type,
          authorized: this.__input.authorized,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateChannel.streamKey.arn', props);
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
          name: this.__input.name,
          latencyMode: this.__input.latencyMode,
          type: this.__input.type,
          authorized: this.__input.authorized,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateChannel.streamKey.value', props);
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
          name: this.__input.name,
          latencyMode: this.__input.latencyMode,
          type: this.__input.type,
          authorized: this.__input.authorized,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateChannel.streamKey.channelArn', props);
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
          name: this.__input.name,
          latencyMode: this.__input.latencyMode,
          type: this.__input.type,
          authorized: this.__input.authorized,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateChannel.streamKey.tags', props);
    return resource.getResponseField('streamKey.tags') as unknown as Record<string, string>;
  }

}

export class IVSResponsesCreateStreamKey {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IvsCreateStreamKeyRequest) {
  }

  public get streamKey(): IVSResponsesCreateStreamKeyStreamKey {
    return new IVSResponsesCreateStreamKeyStreamKey(this.__scope, this.__resources, this.__input);
  }

}

export class IVSResponsesCreateStreamKeyStreamKey {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IvsCreateStreamKeyRequest) {
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
          channelArn: this.__input.channelArn,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStreamKey.streamKey.arn', props);
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
          channelArn: this.__input.channelArn,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStreamKey.streamKey.value', props);
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
          channelArn: this.__input.channelArn,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStreamKey.streamKey.channelArn', props);
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
          channelArn: this.__input.channelArn,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStreamKey.streamKey.tags', props);
    return resource.getResponseField('streamKey.tags') as unknown as Record<string, string>;
  }

}

export class IVSResponsesFetchChannel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IvsGetChannelRequest) {
  }

  public get channel(): IVSResponsesFetchChannelChannel {
    return new IVSResponsesFetchChannelChannel(this.__scope, this.__resources, this.__input);
  }

}

export class IVSResponsesFetchChannelChannel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IvsGetChannelRequest) {
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetChannel.channel.arn', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetChannel.channel.name', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetChannel.channel.latencyMode', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetChannel.channel.type', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetChannel.channel.ingestEndpoint', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetChannel.channel.playbackUrl', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetChannel.channel.authorized', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetChannel.channel.tags', props);
    return resource.getResponseField('channel.tags') as unknown as Record<string, string>;
  }

}

export class IVSResponsesFetchPlaybackKeyPair {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IvsGetPlaybackKeyPairRequest) {
  }

  public get keyPair(): IVSResponsesFetchPlaybackKeyPairKeyPair {
    return new IVSResponsesFetchPlaybackKeyPairKeyPair(this.__scope, this.__resources, this.__input);
  }

}

export class IVSResponsesFetchPlaybackKeyPairKeyPair {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IvsGetPlaybackKeyPairRequest) {
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPlaybackKeyPair.keyPair.arn', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPlaybackKeyPair.keyPair.name', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPlaybackKeyPair.keyPair.fingerprint', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPlaybackKeyPair.keyPair.tags', props);
    return resource.getResponseField('keyPair.tags') as unknown as Record<string, string>;
  }

}

export class IVSResponsesFetchStream {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IvsGetStreamRequest) {
  }

  public get stream(): IVSResponsesFetchStreamStream {
    return new IVSResponsesFetchStreamStream(this.__scope, this.__resources, this.__input);
  }

}

export class IVSResponsesFetchStreamStream {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IvsGetStreamRequest) {
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
          channelArn: this.__input.channelArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStream.stream.channelArn', props);
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
          channelArn: this.__input.channelArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStream.stream.playbackUrl', props);
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
          channelArn: this.__input.channelArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStream.stream.startTime', props);
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
          channelArn: this.__input.channelArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStream.stream.state', props);
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
          channelArn: this.__input.channelArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStream.stream.health', props);
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
          channelArn: this.__input.channelArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStream.stream.viewerCount', props);
    return resource.getResponseField('stream.viewerCount') as unknown as number;
  }

}

export class IVSResponsesFetchStreamKey {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IvsGetStreamKeyRequest) {
  }

  public get streamKey(): IVSResponsesFetchStreamKeyStreamKey {
    return new IVSResponsesFetchStreamKeyStreamKey(this.__scope, this.__resources, this.__input);
  }

}

export class IVSResponsesFetchStreamKeyStreamKey {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IvsGetStreamKeyRequest) {
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStreamKey.streamKey.arn', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStreamKey.streamKey.value', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStreamKey.streamKey.channelArn', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStreamKey.streamKey.tags', props);
    return resource.getResponseField('streamKey.tags') as unknown as Record<string, string>;
  }

}

export class IVSResponsesImportPlaybackKeyPair {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IvsImportPlaybackKeyPairRequest) {
  }

  public get keyPair(): IVSResponsesImportPlaybackKeyPairKeyPair {
    return new IVSResponsesImportPlaybackKeyPairKeyPair(this.__scope, this.__resources, this.__input);
  }

}

export class IVSResponsesImportPlaybackKeyPairKeyPair {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IvsImportPlaybackKeyPairRequest) {
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
          publicKeyMaterial: this.__input.publicKeyMaterial,
          name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportPlaybackKeyPair.keyPair.arn', props);
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
          publicKeyMaterial: this.__input.publicKeyMaterial,
          name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportPlaybackKeyPair.keyPair.name', props);
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
          publicKeyMaterial: this.__input.publicKeyMaterial,
          name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportPlaybackKeyPair.keyPair.fingerprint', props);
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
          publicKeyMaterial: this.__input.publicKeyMaterial,
          name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportPlaybackKeyPair.keyPair.tags', props);
    return resource.getResponseField('keyPair.tags') as unknown as Record<string, string>;
  }

}

export class IVSResponsesListChannels {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IvsListChannelsRequest) {
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
          filterByName: this.__input.filterByName,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListChannels.channels', props);
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
          filterByName: this.__input.filterByName,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListChannels.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IVSResponsesListPlaybackKeyPairs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IvsListPlaybackKeyPairsRequest) {
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPlaybackKeyPairs.keyPairs', props);
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPlaybackKeyPairs.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IVSResponsesListStreamKeys {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IvsListStreamKeysRequest) {
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
          channelArn: this.__input.channelArn,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListStreamKeys.streamKeys', props);
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
          channelArn: this.__input.channelArn,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListStreamKeys.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IVSResponsesListStreams {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IvsListStreamsRequest) {
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListStreams.streams', props);
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListStreams.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IVSResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IvsListTagsForResourceRequest) {
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
          resourceArn: this.__input.resourceArn,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.tags', props);
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
          resourceArn: this.__input.resourceArn,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IVSResponsesUpdateChannel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IvsUpdateChannelRequest) {
  }

  public get channel(): IVSResponsesUpdateChannelChannel {
    return new IVSResponsesUpdateChannelChannel(this.__scope, this.__resources, this.__input);
  }

}

export class IVSResponsesUpdateChannelChannel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IvsUpdateChannelRequest) {
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
          arn: this.__input.arn,
          name: this.__input.name,
          latencyMode: this.__input.latencyMode,
          type: this.__input.type,
          authorized: this.__input.authorized,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateChannel.channel.arn', props);
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
          arn: this.__input.arn,
          name: this.__input.name,
          latencyMode: this.__input.latencyMode,
          type: this.__input.type,
          authorized: this.__input.authorized,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateChannel.channel.name', props);
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
          arn: this.__input.arn,
          name: this.__input.name,
          latencyMode: this.__input.latencyMode,
          type: this.__input.type,
          authorized: this.__input.authorized,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateChannel.channel.latencyMode', props);
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
          arn: this.__input.arn,
          name: this.__input.name,
          latencyMode: this.__input.latencyMode,
          type: this.__input.type,
          authorized: this.__input.authorized,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateChannel.channel.type', props);
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
          arn: this.__input.arn,
          name: this.__input.name,
          latencyMode: this.__input.latencyMode,
          type: this.__input.type,
          authorized: this.__input.authorized,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateChannel.channel.ingestEndpoint', props);
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
          arn: this.__input.arn,
          name: this.__input.name,
          latencyMode: this.__input.latencyMode,
          type: this.__input.type,
          authorized: this.__input.authorized,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateChannel.channel.playbackUrl', props);
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
          arn: this.__input.arn,
          name: this.__input.name,
          latencyMode: this.__input.latencyMode,
          type: this.__input.type,
          authorized: this.__input.authorized,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateChannel.channel.authorized', props);
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
          arn: this.__input.arn,
          name: this.__input.name,
          latencyMode: this.__input.latencyMode,
          type: this.__input.type,
          authorized: this.__input.authorized,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateChannel.channel.tags', props);
    return resource.getResponseField('channel.tags') as unknown as Record<string, string>;
  }

}

