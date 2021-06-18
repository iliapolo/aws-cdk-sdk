import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class KinesisVideoClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createSignalingChannel(input: shapes.KinesisVideoCreateSignalingChannelInput): KinesisVideoCreateSignalingChannel {
    return new KinesisVideoCreateSignalingChannel(this, 'CreateSignalingChannel', this.__resources, input);
  }

  public createStream(input: shapes.KinesisVideoCreateStreamInput): KinesisVideoCreateStream {
    return new KinesisVideoCreateStream(this, 'CreateStream', this.__resources, input);
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

  public describeSignalingChannel(input: shapes.KinesisVideoDescribeSignalingChannelInput): KinesisVideoDescribeSignalingChannel {
    return new KinesisVideoDescribeSignalingChannel(this, 'DescribeSignalingChannel', this.__resources, input);
  }

  public describeStream(input: shapes.KinesisVideoDescribeStreamInput): KinesisVideoDescribeStream {
    return new KinesisVideoDescribeStream(this, 'DescribeStream', this.__resources, input);
  }

  public fetchDataEndpoint(input: shapes.KinesisVideoGetDataEndpointInput): KinesisVideoFetchDataEndpoint {
    return new KinesisVideoFetchDataEndpoint(this, 'FetchDataEndpoint', this.__resources, input);
  }

  public fetchSignalingChannelEndpoint(input: shapes.KinesisVideoGetSignalingChannelEndpointInput): KinesisVideoFetchSignalingChannelEndpoint {
    return new KinesisVideoFetchSignalingChannelEndpoint(this, 'FetchSignalingChannelEndpoint', this.__resources, input);
  }

  public listSignalingChannels(input: shapes.KinesisVideoListSignalingChannelsInput): KinesisVideoListSignalingChannels {
    return new KinesisVideoListSignalingChannels(this, 'ListSignalingChannels', this.__resources, input);
  }

  public listStreams(input: shapes.KinesisVideoListStreamsInput): KinesisVideoListStreams {
    return new KinesisVideoListStreams(this, 'ListStreams', this.__resources, input);
  }

  public listTagsForResource(input: shapes.KinesisVideoListTagsForResourceInput): KinesisVideoListTagsForResource {
    return new KinesisVideoListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public listTagsForStream(input: shapes.KinesisVideoListTagsForStreamInput): KinesisVideoListTagsForStream {
    return new KinesisVideoListTagsForStream(this, 'ListTagsForStream', this.__resources, input);
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

export class KinesisVideoCreateSignalingChannel extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisVideoCreateSignalingChannelInput) {
    super(scope, id);
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
          ChannelName: this.input.channelName,
          ChannelType: this.input.channelType,
          SingleMasterConfiguration: {
            MessageTtlSeconds: this.input.singleMasterConfiguration?.messageTtlSeconds,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSignalingChannel.ChannelARN', props);
    return resource.getResponseField('ChannelARN') as unknown as string;
  }

}

export class KinesisVideoCreateStream extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisVideoCreateStreamInput) {
    super(scope, id);
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
          DeviceName: this.input.deviceName,
          StreamName: this.input.streamName,
          MediaType: this.input.mediaType,
          KmsKeyId: this.input.kmsKeyId,
          DataRetentionInHours: this.input.dataRetentionInHours,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStream.StreamARN', props);
    return resource.getResponseField('StreamARN') as unknown as string;
  }

}

export class KinesisVideoDescribeSignalingChannel extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisVideoDescribeSignalingChannelInput) {
    super(scope, id);
  }

  public get channelInfo(): KinesisVideoDescribeSignalingChannelChannelInfo {
    return new KinesisVideoDescribeSignalingChannelChannelInfo(this, 'ChannelInfo', this.__resources, this.input);
  }

}

export class KinesisVideoDescribeSignalingChannelChannelInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisVideoDescribeSignalingChannelInput) {
    super(scope, id);
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
          ChannelName: this.input.channelName,
          ChannelARN: this.input.channelArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSignalingChannel.ChannelInfo.ChannelName', props);
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
          ChannelName: this.input.channelName,
          ChannelARN: this.input.channelArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSignalingChannel.ChannelInfo.ChannelARN', props);
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
          ChannelName: this.input.channelName,
          ChannelARN: this.input.channelArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSignalingChannel.ChannelInfo.ChannelType', props);
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
          ChannelName: this.input.channelName,
          ChannelARN: this.input.channelArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSignalingChannel.ChannelInfo.ChannelStatus', props);
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
          ChannelName: this.input.channelName,
          ChannelARN: this.input.channelArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSignalingChannel.ChannelInfo.CreationTime', props);
    return resource.getResponseField('ChannelInfo.CreationTime') as unknown as string;
  }

  public get singleMasterConfiguration(): KinesisVideoDescribeSignalingChannelChannelInfoSingleMasterConfiguration {
    return new KinesisVideoDescribeSignalingChannelChannelInfoSingleMasterConfiguration(this, 'SingleMasterConfiguration', this.__resources, this.input);
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
          ChannelName: this.input.channelName,
          ChannelARN: this.input.channelArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSignalingChannel.ChannelInfo.Version', props);
    return resource.getResponseField('ChannelInfo.Version') as unknown as string;
  }

}

export class KinesisVideoDescribeSignalingChannelChannelInfoSingleMasterConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisVideoDescribeSignalingChannelInput) {
    super(scope, id);
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
          ChannelName: this.input.channelName,
          ChannelARN: this.input.channelArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSignalingChannel.ChannelInfo.SingleMasterConfiguration.MessageTtlSeconds', props);
    return resource.getResponseField('ChannelInfo.SingleMasterConfiguration.MessageTtlSeconds') as unknown as number;
  }

}

export class KinesisVideoDescribeStream extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisVideoDescribeStreamInput) {
    super(scope, id);
  }

  public get streamInfo(): KinesisVideoDescribeStreamStreamInfo {
    return new KinesisVideoDescribeStreamStreamInfo(this, 'StreamInfo', this.__resources, this.input);
  }

}

export class KinesisVideoDescribeStreamStreamInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisVideoDescribeStreamInput) {
    super(scope, id);
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
          StreamName: this.input.streamName,
          StreamARN: this.input.streamArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStream.StreamInfo.DeviceName', props);
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
          StreamName: this.input.streamName,
          StreamARN: this.input.streamArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStream.StreamInfo.StreamName', props);
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
          StreamName: this.input.streamName,
          StreamARN: this.input.streamArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStream.StreamInfo.StreamARN', props);
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
          StreamName: this.input.streamName,
          StreamARN: this.input.streamArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStream.StreamInfo.MediaType', props);
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
          StreamName: this.input.streamName,
          StreamARN: this.input.streamArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStream.StreamInfo.KmsKeyId', props);
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
          StreamName: this.input.streamName,
          StreamARN: this.input.streamArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStream.StreamInfo.Version', props);
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
          StreamName: this.input.streamName,
          StreamARN: this.input.streamArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStream.StreamInfo.Status', props);
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
          StreamName: this.input.streamName,
          StreamARN: this.input.streamArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStream.StreamInfo.CreationTime', props);
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
          StreamName: this.input.streamName,
          StreamARN: this.input.streamArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStream.StreamInfo.DataRetentionInHours', props);
    return resource.getResponseField('StreamInfo.DataRetentionInHours') as unknown as number;
  }

}

export class KinesisVideoFetchDataEndpoint extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisVideoGetDataEndpointInput) {
    super(scope, id);
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
          StreamName: this.input.streamName,
          StreamARN: this.input.streamArn,
          APIName: this.input.apiName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataEndpoint.DataEndpoint', props);
    return resource.getResponseField('DataEndpoint') as unknown as string;
  }

}

export class KinesisVideoFetchSignalingChannelEndpoint extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisVideoGetSignalingChannelEndpointInput) {
    super(scope, id);
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
          ChannelARN: this.input.channelArn,
          SingleMasterChannelEndpointConfiguration: {
            Protocols: this.input.singleMasterChannelEndpointConfiguration?.protocols,
            Role: this.input.singleMasterChannelEndpointConfiguration?.role,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSignalingChannelEndpoint.ResourceEndpointList', props);
    return resource.getResponseField('ResourceEndpointList') as unknown as shapes.KinesisVideoResourceEndpointListItem[];
  }

}

export class KinesisVideoListSignalingChannels extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisVideoListSignalingChannelsInput) {
    super(scope, id);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          ChannelNameCondition: {
            ComparisonOperator: this.input.channelNameCondition?.comparisonOperator,
            ComparisonValue: this.input.channelNameCondition?.comparisonValue,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSignalingChannels.ChannelInfoList', props);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          ChannelNameCondition: {
            ComparisonOperator: this.input.channelNameCondition?.comparisonOperator,
            ComparisonValue: this.input.channelNameCondition?.comparisonValue,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSignalingChannels.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class KinesisVideoListStreams extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisVideoListStreamsInput) {
    super(scope, id);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          StreamNameCondition: {
            ComparisonOperator: this.input.streamNameCondition?.comparisonOperator,
            ComparisonValue: this.input.streamNameCondition?.comparisonValue,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListStreams.StreamInfoList', props);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          StreamNameCondition: {
            ComparisonOperator: this.input.streamNameCondition?.comparisonOperator,
            ComparisonValue: this.input.streamNameCondition?.comparisonValue,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListStreams.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class KinesisVideoListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisVideoListTagsForResourceInput) {
    super(scope, id);
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
          NextToken: this.input.nextToken,
          ResourceARN: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.NextToken', props);
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
          NextToken: this.input.nextToken,
          ResourceARN: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class KinesisVideoListTagsForStream extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisVideoListTagsForStreamInput) {
    super(scope, id);
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
          NextToken: this.input.nextToken,
          StreamARN: this.input.streamArn,
          StreamName: this.input.streamName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForStream.NextToken', props);
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
          NextToken: this.input.nextToken,
          StreamARN: this.input.streamArn,
          StreamName: this.input.streamName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForStream.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

