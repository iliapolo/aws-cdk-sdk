import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class KinesisVideoClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createSignalingChannel(input: shapes.KinesisVideoCreateSignalingChannelInput): KinesisVideoResponsesCreateSignalingChannel {
    return new KinesisVideoResponsesCreateSignalingChannel(this, this.__resources, input);
  }

  public createStream(input: shapes.KinesisVideoCreateStreamInput): KinesisVideoResponsesCreateStream {
    return new KinesisVideoResponsesCreateStream(this, this.__resources, input);
  }

  public deleteSignalingChannel(input: shapes.KinesisVideoDeleteSignalingChannelInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSignalingChannel',
        service: 'KinesisVideo',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisVideo.DeleteSignalingChannel'),
        parameters: {
          ChannelARN: input.channelArn,
          CurrentVersion: input.currentVersion,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteSignalingChannel', props);
  }

  public deleteStream(input: shapes.KinesisVideoDeleteStreamInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStream',
        service: 'KinesisVideo',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisVideo.DeleteStream'),
        parameters: {
          StreamARN: input.streamArn,
          CurrentVersion: input.currentVersion,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteStream', props);
  }

  public describeSignalingChannel(input: shapes.KinesisVideoDescribeSignalingChannelInput): KinesisVideoResponsesDescribeSignalingChannel {
    return new KinesisVideoResponsesDescribeSignalingChannel(this, this.__resources, input);
  }

  public describeStream(input: shapes.KinesisVideoDescribeStreamInput): KinesisVideoResponsesDescribeStream {
    return new KinesisVideoResponsesDescribeStream(this, this.__resources, input);
  }

  public fetchDataEndpoint(input: shapes.KinesisVideoGetDataEndpointInput): KinesisVideoResponsesFetchDataEndpoint {
    return new KinesisVideoResponsesFetchDataEndpoint(this, this.__resources, input);
  }

  public fetchSignalingChannelEndpoint(input: shapes.KinesisVideoGetSignalingChannelEndpointInput): KinesisVideoResponsesFetchSignalingChannelEndpoint {
    return new KinesisVideoResponsesFetchSignalingChannelEndpoint(this, this.__resources, input);
  }

  public listSignalingChannels(input: shapes.KinesisVideoListSignalingChannelsInput): KinesisVideoResponsesListSignalingChannels {
    return new KinesisVideoResponsesListSignalingChannels(this, this.__resources, input);
  }

  public listStreams(input: shapes.KinesisVideoListStreamsInput): KinesisVideoResponsesListStreams {
    return new KinesisVideoResponsesListStreams(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.KinesisVideoListTagsForResourceInput): KinesisVideoResponsesListTagsForResource {
    return new KinesisVideoResponsesListTagsForResource(this, this.__resources, input);
  }

  public listTagsForStream(input: shapes.KinesisVideoListTagsForStreamInput): KinesisVideoResponsesListTagsForStream {
    return new KinesisVideoResponsesListTagsForStream(this, this.__resources, input);
  }

  public tagResource(input: shapes.KinesisVideoTagResourceInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'KinesisVideo',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisVideo.TagResource'),
        parameters: {
          ResourceARN: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public tagStream(input: shapes.KinesisVideoTagStreamInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagStream',
        service: 'KinesisVideo',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisVideo.TagStream'),
        parameters: {
          StreamARN: input.streamArn,
          StreamName: input.streamName,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagStream', props);
  }

  public untagResource(input: shapes.KinesisVideoUntagResourceInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'KinesisVideo',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisVideo.UntagResource'),
        parameters: {
          ResourceARN: input.resourceArn,
          TagKeyList: input.tagKeyList,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public untagStream(input: shapes.KinesisVideoUntagStreamInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagStream',
        service: 'KinesisVideo',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisVideo.UntagStream'),
        parameters: {
          StreamARN: input.streamArn,
          StreamName: input.streamName,
          TagKeyList: input.tagKeyList,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagStream', props);
  }

  public updateDataRetention(input: shapes.KinesisVideoUpdateDataRetentionInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDataRetention',
        service: 'KinesisVideo',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisVideo.UpdateDataRetention'),
        parameters: {
          StreamName: input.streamName,
          StreamARN: input.streamArn,
          CurrentVersion: input.currentVersion,
          Operation: input.operation,
          DataRetentionChangeInHours: input.dataRetentionChangeInHours,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateDataRetention', props);
  }

  public updateSignalingChannel(input: shapes.KinesisVideoUpdateSignalingChannelInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSignalingChannel',
        service: 'KinesisVideo',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisVideo.UpdateSignalingChannel'),
        parameters: {
          ChannelARN: input.channelArn,
          CurrentVersion: input.currentVersion,
          SingleMasterConfiguration: {
            MessageTtlSeconds: input.singleMasterConfiguration?.messageTtlSeconds,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateSignalingChannel', props);
  }

  public updateStream(input: shapes.KinesisVideoUpdateStreamInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStream',
        service: 'KinesisVideo',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisVideo.UpdateStream'),
        parameters: {
          StreamName: input.streamName,
          StreamARN: input.streamArn,
          CurrentVersion: input.currentVersion,
          DeviceName: input.deviceName,
          MediaType: input.mediaType,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateStream', props);
  }

}

export class KinesisVideoResponsesCreateSignalingChannel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisVideoCreateSignalingChannelInput) {
  }

  public get channelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSignalingChannel',
        service: 'KinesisVideo',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisVideo.CreateSignalingChannel.ChannelARN'),
        outputPath: 'ChannelARN',
        parameters: {
          ChannelName: this.__input.channelName,
          ChannelType: this.__input.channelType,
          SingleMasterConfiguration: {
            MessageTtlSeconds: this.__input.singleMasterConfiguration?.messageTtlSeconds,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSignalingChannel.ChannelARN', props);
    return resource.getResponseField('ChannelARN') as unknown as string;
  }

}

export class KinesisVideoResponsesCreateStream {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisVideoCreateStreamInput) {
  }

  public get streamArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStream',
        service: 'KinesisVideo',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisVideo.CreateStream.StreamARN'),
        outputPath: 'StreamARN',
        parameters: {
          DeviceName: this.__input.deviceName,
          StreamName: this.__input.streamName,
          MediaType: this.__input.mediaType,
          KmsKeyId: this.__input.kmsKeyId,
          DataRetentionInHours: this.__input.dataRetentionInHours,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStream.StreamARN', props);
    return resource.getResponseField('StreamARN') as unknown as string;
  }

}

export class KinesisVideoResponsesDescribeSignalingChannel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisVideoDescribeSignalingChannelInput) {
  }

  public get channelInfo(): KinesisVideoResponsesDescribeSignalingChannelChannelInfo {
    return new KinesisVideoResponsesDescribeSignalingChannelChannelInfo(this.__scope, this.__resources, this.__input);
  }

}

export class KinesisVideoResponsesDescribeSignalingChannelChannelInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisVideoDescribeSignalingChannelInput) {
  }

  public get channelName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSignalingChannel',
        service: 'KinesisVideo',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisVideo.DescribeSignalingChannel.ChannelInfo.ChannelName'),
        outputPath: 'ChannelInfo.ChannelName',
        parameters: {
          ChannelName: this.__input.channelName,
          ChannelARN: this.__input.channelArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSignalingChannel.ChannelInfo.ChannelName', props);
    return resource.getResponseField('ChannelInfo.ChannelName') as unknown as string;
  }

  public get channelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSignalingChannel',
        service: 'KinesisVideo',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisVideo.DescribeSignalingChannel.ChannelInfo.ChannelARN'),
        outputPath: 'ChannelInfo.ChannelARN',
        parameters: {
          ChannelName: this.__input.channelName,
          ChannelARN: this.__input.channelArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSignalingChannel.ChannelInfo.ChannelARN', props);
    return resource.getResponseField('ChannelInfo.ChannelARN') as unknown as string;
  }

  public get channelType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSignalingChannel',
        service: 'KinesisVideo',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisVideo.DescribeSignalingChannel.ChannelInfo.ChannelType'),
        outputPath: 'ChannelInfo.ChannelType',
        parameters: {
          ChannelName: this.__input.channelName,
          ChannelARN: this.__input.channelArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSignalingChannel.ChannelInfo.ChannelType', props);
    return resource.getResponseField('ChannelInfo.ChannelType') as unknown as string;
  }

  public get channelStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSignalingChannel',
        service: 'KinesisVideo',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisVideo.DescribeSignalingChannel.ChannelInfo.ChannelStatus'),
        outputPath: 'ChannelInfo.ChannelStatus',
        parameters: {
          ChannelName: this.__input.channelName,
          ChannelARN: this.__input.channelArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSignalingChannel.ChannelInfo.ChannelStatus', props);
    return resource.getResponseField('ChannelInfo.ChannelStatus') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSignalingChannel',
        service: 'KinesisVideo',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisVideo.DescribeSignalingChannel.ChannelInfo.CreationTime'),
        outputPath: 'ChannelInfo.CreationTime',
        parameters: {
          ChannelName: this.__input.channelName,
          ChannelARN: this.__input.channelArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSignalingChannel.ChannelInfo.CreationTime', props);
    return resource.getResponseField('ChannelInfo.CreationTime') as unknown as string;
  }

  public get singleMasterConfiguration(): KinesisVideoResponsesDescribeSignalingChannelChannelInfoSingleMasterConfiguration {
    return new KinesisVideoResponsesDescribeSignalingChannelChannelInfoSingleMasterConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSignalingChannel',
        service: 'KinesisVideo',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisVideo.DescribeSignalingChannel.ChannelInfo.Version'),
        outputPath: 'ChannelInfo.Version',
        parameters: {
          ChannelName: this.__input.channelName,
          ChannelARN: this.__input.channelArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSignalingChannel.ChannelInfo.Version', props);
    return resource.getResponseField('ChannelInfo.Version') as unknown as string;
  }

}

export class KinesisVideoResponsesDescribeSignalingChannelChannelInfoSingleMasterConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisVideoDescribeSignalingChannelInput) {
  }

  public get messageTtlSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSignalingChannel',
        service: 'KinesisVideo',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisVideo.DescribeSignalingChannel.ChannelInfo.SingleMasterConfiguration.MessageTtlSeconds'),
        outputPath: 'ChannelInfo.SingleMasterConfiguration.MessageTtlSeconds',
        parameters: {
          ChannelName: this.__input.channelName,
          ChannelARN: this.__input.channelArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSignalingChannel.ChannelInfo.SingleMasterConfiguration.MessageTtlSeconds', props);
    return resource.getResponseField('ChannelInfo.SingleMasterConfiguration.MessageTtlSeconds') as unknown as number;
  }

}

export class KinesisVideoResponsesDescribeStream {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisVideoDescribeStreamInput) {
  }

  public get streamInfo(): KinesisVideoResponsesDescribeStreamStreamInfo {
    return new KinesisVideoResponsesDescribeStreamStreamInfo(this.__scope, this.__resources, this.__input);
  }

}

export class KinesisVideoResponsesDescribeStreamStreamInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisVideoDescribeStreamInput) {
  }

  public get deviceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStream',
        service: 'KinesisVideo',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisVideo.DescribeStream.StreamInfo.DeviceName'),
        outputPath: 'StreamInfo.DeviceName',
        parameters: {
          StreamName: this.__input.streamName,
          StreamARN: this.__input.streamArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStream.StreamInfo.DeviceName', props);
    return resource.getResponseField('StreamInfo.DeviceName') as unknown as string;
  }

  public get streamName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStream',
        service: 'KinesisVideo',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisVideo.DescribeStream.StreamInfo.StreamName'),
        outputPath: 'StreamInfo.StreamName',
        parameters: {
          StreamName: this.__input.streamName,
          StreamARN: this.__input.streamArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStream.StreamInfo.StreamName', props);
    return resource.getResponseField('StreamInfo.StreamName') as unknown as string;
  }

  public get streamArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStream',
        service: 'KinesisVideo',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisVideo.DescribeStream.StreamInfo.StreamARN'),
        outputPath: 'StreamInfo.StreamARN',
        parameters: {
          StreamName: this.__input.streamName,
          StreamARN: this.__input.streamArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStream.StreamInfo.StreamARN', props);
    return resource.getResponseField('StreamInfo.StreamARN') as unknown as string;
  }

  public get mediaType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStream',
        service: 'KinesisVideo',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisVideo.DescribeStream.StreamInfo.MediaType'),
        outputPath: 'StreamInfo.MediaType',
        parameters: {
          StreamName: this.__input.streamName,
          StreamARN: this.__input.streamArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStream.StreamInfo.MediaType', props);
    return resource.getResponseField('StreamInfo.MediaType') as unknown as string;
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStream',
        service: 'KinesisVideo',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisVideo.DescribeStream.StreamInfo.KmsKeyId'),
        outputPath: 'StreamInfo.KmsKeyId',
        parameters: {
          StreamName: this.__input.streamName,
          StreamARN: this.__input.streamArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStream.StreamInfo.KmsKeyId', props);
    return resource.getResponseField('StreamInfo.KmsKeyId') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStream',
        service: 'KinesisVideo',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisVideo.DescribeStream.StreamInfo.Version'),
        outputPath: 'StreamInfo.Version',
        parameters: {
          StreamName: this.__input.streamName,
          StreamARN: this.__input.streamArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStream.StreamInfo.Version', props);
    return resource.getResponseField('StreamInfo.Version') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStream',
        service: 'KinesisVideo',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisVideo.DescribeStream.StreamInfo.Status'),
        outputPath: 'StreamInfo.Status',
        parameters: {
          StreamName: this.__input.streamName,
          StreamARN: this.__input.streamArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStream.StreamInfo.Status', props);
    return resource.getResponseField('StreamInfo.Status') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStream',
        service: 'KinesisVideo',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisVideo.DescribeStream.StreamInfo.CreationTime'),
        outputPath: 'StreamInfo.CreationTime',
        parameters: {
          StreamName: this.__input.streamName,
          StreamARN: this.__input.streamArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStream.StreamInfo.CreationTime', props);
    return resource.getResponseField('StreamInfo.CreationTime') as unknown as string;
  }

  public get dataRetentionInHours(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStream',
        service: 'KinesisVideo',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisVideo.DescribeStream.StreamInfo.DataRetentionInHours'),
        outputPath: 'StreamInfo.DataRetentionInHours',
        parameters: {
          StreamName: this.__input.streamName,
          StreamARN: this.__input.streamArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStream.StreamInfo.DataRetentionInHours', props);
    return resource.getResponseField('StreamInfo.DataRetentionInHours') as unknown as number;
  }

}

export class KinesisVideoResponsesFetchDataEndpoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisVideoGetDataEndpointInput) {
  }

  public get dataEndpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataEndpoint',
        service: 'KinesisVideo',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisVideo.GetDataEndpoint.DataEndpoint'),
        outputPath: 'DataEndpoint',
        parameters: {
          StreamName: this.__input.streamName,
          StreamARN: this.__input.streamArn,
          APIName: this.__input.apiName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataEndpoint.DataEndpoint', props);
    return resource.getResponseField('DataEndpoint') as unknown as string;
  }

}

export class KinesisVideoResponsesFetchSignalingChannelEndpoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisVideoGetSignalingChannelEndpointInput) {
  }

  public get resourceEndpointList(): shapes.KinesisVideoResourceEndpointListItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSignalingChannelEndpoint',
        service: 'KinesisVideo',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisVideo.GetSignalingChannelEndpoint.ResourceEndpointList'),
        outputPath: 'ResourceEndpointList',
        parameters: {
          ChannelARN: this.__input.channelArn,
          SingleMasterChannelEndpointConfiguration: {
            Protocols: this.__input.singleMasterChannelEndpointConfiguration?.protocols,
            Role: this.__input.singleMasterChannelEndpointConfiguration?.role,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSignalingChannelEndpoint.ResourceEndpointList', props);
    return resource.getResponseField('ResourceEndpointList') as unknown as shapes.KinesisVideoResourceEndpointListItem[];
  }

}

export class KinesisVideoResponsesListSignalingChannels {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisVideoListSignalingChannelsInput) {
  }

  public get channelInfoList(): shapes.KinesisVideoChannelInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSignalingChannels',
        service: 'KinesisVideo',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisVideo.ListSignalingChannels.ChannelInfoList'),
        outputPath: 'ChannelInfoList',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          ChannelNameCondition: {
            ComparisonOperator: this.__input.channelNameCondition?.comparisonOperator,
            ComparisonValue: this.__input.channelNameCondition?.comparisonValue,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSignalingChannels.ChannelInfoList', props);
    return resource.getResponseField('ChannelInfoList') as unknown as shapes.KinesisVideoChannelInfo[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSignalingChannels',
        service: 'KinesisVideo',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisVideo.ListSignalingChannels.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          ChannelNameCondition: {
            ComparisonOperator: this.__input.channelNameCondition?.comparisonOperator,
            ComparisonValue: this.__input.channelNameCondition?.comparisonValue,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSignalingChannels.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class KinesisVideoResponsesListStreams {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisVideoListStreamsInput) {
  }

  public get streamInfoList(): shapes.KinesisVideoStreamInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listStreams',
        service: 'KinesisVideo',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisVideo.ListStreams.StreamInfoList'),
        outputPath: 'StreamInfoList',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          StreamNameCondition: {
            ComparisonOperator: this.__input.streamNameCondition?.comparisonOperator,
            ComparisonValue: this.__input.streamNameCondition?.comparisonValue,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListStreams.StreamInfoList', props);
    return resource.getResponseField('StreamInfoList') as unknown as shapes.KinesisVideoStreamInfo[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listStreams',
        service: 'KinesisVideo',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisVideo.ListStreams.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          StreamNameCondition: {
            ComparisonOperator: this.__input.streamNameCondition?.comparisonOperator,
            ComparisonValue: this.__input.streamNameCondition?.comparisonValue,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListStreams.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class KinesisVideoResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisVideoListTagsForResourceInput) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'KinesisVideo',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisVideo.ListTagsForResource.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          ResourceARN: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'KinesisVideo',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisVideo.ListTagsForResource.Tags'),
        outputPath: 'Tags',
        parameters: {
          NextToken: this.__input.nextToken,
          ResourceARN: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class KinesisVideoResponsesListTagsForStream {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisVideoListTagsForStreamInput) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForStream',
        service: 'KinesisVideo',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisVideo.ListTagsForStream.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          StreamARN: this.__input.streamArn,
          StreamName: this.__input.streamName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForStream.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForStream',
        service: 'KinesisVideo',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisVideo.ListTagsForStream.Tags'),
        outputPath: 'Tags',
        parameters: {
          NextToken: this.__input.nextToken,
          StreamARN: this.__input.streamArn,
          StreamName: this.__input.streamName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForStream.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

