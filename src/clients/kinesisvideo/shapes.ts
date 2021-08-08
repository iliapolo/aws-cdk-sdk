/**
 * @schema KinesisVideoCreateSignalingChannelInput
 */
export interface KinesisVideoCreateSignalingChannelInput {
  /**
   * @schema KinesisVideoCreateSignalingChannelInput#ChannelName
   */
  readonly channelName?: string;

  /**
   * @schema KinesisVideoCreateSignalingChannelInput#ChannelType
   */
  readonly channelType?: string;

  /**
   * @schema KinesisVideoCreateSignalingChannelInput#SingleMasterConfiguration
   */
  readonly singleMasterConfiguration?: KinesisVideoSingleMasterConfiguration;

  /**
   * @schema KinesisVideoCreateSignalingChannelInput#Tags
   */
  readonly tags?: KinesisVideoTag[];

}

/**
 * Converts an object of type 'KinesisVideoCreateSignalingChannelInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoCreateSignalingChannelInput(obj: KinesisVideoCreateSignalingChannelInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelName': obj.channelName,
    'ChannelType': obj.channelType,
    'SingleMasterConfiguration': toJson_KinesisVideoSingleMasterConfiguration(obj.singleMasterConfiguration),
    'Tags': obj.tags?.map(y => toJson_KinesisVideoTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisVideoCreateSignalingChannelOutput
 */
export interface KinesisVideoCreateSignalingChannelOutput {
  /**
   * @schema KinesisVideoCreateSignalingChannelOutput#ChannelARN
   */
  readonly channelArn?: string;

}

/**
 * Converts an object of type 'KinesisVideoCreateSignalingChannelOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoCreateSignalingChannelOutput(obj: KinesisVideoCreateSignalingChannelOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelARN': obj.channelArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisVideoCreateStreamInput
 */
export interface KinesisVideoCreateStreamInput {
  /**
   * @schema KinesisVideoCreateStreamInput#DeviceName
   */
  readonly deviceName?: string;

  /**
   * @schema KinesisVideoCreateStreamInput#StreamName
   */
  readonly streamName?: string;

  /**
   * @schema KinesisVideoCreateStreamInput#MediaType
   */
  readonly mediaType?: string;

  /**
   * @schema KinesisVideoCreateStreamInput#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema KinesisVideoCreateStreamInput#DataRetentionInHours
   */
  readonly dataRetentionInHours?: number;

  /**
   * @schema KinesisVideoCreateStreamInput#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'KinesisVideoCreateStreamInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoCreateStreamInput(obj: KinesisVideoCreateStreamInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeviceName': obj.deviceName,
    'StreamName': obj.streamName,
    'MediaType': obj.mediaType,
    'KmsKeyId': obj.kmsKeyId,
    'DataRetentionInHours': obj.dataRetentionInHours,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisVideoCreateStreamOutput
 */
export interface KinesisVideoCreateStreamOutput {
  /**
   * @schema KinesisVideoCreateStreamOutput#StreamARN
   */
  readonly streamArn?: string;

}

/**
 * Converts an object of type 'KinesisVideoCreateStreamOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoCreateStreamOutput(obj: KinesisVideoCreateStreamOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamARN': obj.streamArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisVideoDeleteSignalingChannelInput
 */
export interface KinesisVideoDeleteSignalingChannelInput {
  /**
   * @schema KinesisVideoDeleteSignalingChannelInput#ChannelARN
   */
  readonly channelArn?: string;

  /**
   * @schema KinesisVideoDeleteSignalingChannelInput#CurrentVersion
   */
  readonly currentVersion?: string;

}

/**
 * Converts an object of type 'KinesisVideoDeleteSignalingChannelInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoDeleteSignalingChannelInput(obj: KinesisVideoDeleteSignalingChannelInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelARN': obj.channelArn,
    'CurrentVersion': obj.currentVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisVideoDeleteSignalingChannelOutput
 */
export interface KinesisVideoDeleteSignalingChannelOutput {
}

/**
 * Converts an object of type 'KinesisVideoDeleteSignalingChannelOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoDeleteSignalingChannelOutput(obj: KinesisVideoDeleteSignalingChannelOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisVideoDeleteStreamInput
 */
export interface KinesisVideoDeleteStreamInput {
  /**
   * @schema KinesisVideoDeleteStreamInput#StreamARN
   */
  readonly streamArn?: string;

  /**
   * @schema KinesisVideoDeleteStreamInput#CurrentVersion
   */
  readonly currentVersion?: string;

}

/**
 * Converts an object of type 'KinesisVideoDeleteStreamInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoDeleteStreamInput(obj: KinesisVideoDeleteStreamInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamARN': obj.streamArn,
    'CurrentVersion': obj.currentVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisVideoDeleteStreamOutput
 */
export interface KinesisVideoDeleteStreamOutput {
}

/**
 * Converts an object of type 'KinesisVideoDeleteStreamOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoDeleteStreamOutput(obj: KinesisVideoDeleteStreamOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisVideoDescribeSignalingChannelInput
 */
export interface KinesisVideoDescribeSignalingChannelInput {
  /**
   * @schema KinesisVideoDescribeSignalingChannelInput#ChannelName
   */
  readonly channelName?: string;

  /**
   * @schema KinesisVideoDescribeSignalingChannelInput#ChannelARN
   */
  readonly channelArn?: string;

}

/**
 * Converts an object of type 'KinesisVideoDescribeSignalingChannelInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoDescribeSignalingChannelInput(obj: KinesisVideoDescribeSignalingChannelInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelName': obj.channelName,
    'ChannelARN': obj.channelArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisVideoDescribeSignalingChannelOutput
 */
export interface KinesisVideoDescribeSignalingChannelOutput {
  /**
   * @schema KinesisVideoDescribeSignalingChannelOutput#ChannelInfo
   */
  readonly channelInfo?: KinesisVideoChannelInfo;

}

/**
 * Converts an object of type 'KinesisVideoDescribeSignalingChannelOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoDescribeSignalingChannelOutput(obj: KinesisVideoDescribeSignalingChannelOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelInfo': toJson_KinesisVideoChannelInfo(obj.channelInfo),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisVideoDescribeStreamInput
 */
export interface KinesisVideoDescribeStreamInput {
  /**
   * @schema KinesisVideoDescribeStreamInput#StreamName
   */
  readonly streamName?: string;

  /**
   * @schema KinesisVideoDescribeStreamInput#StreamARN
   */
  readonly streamArn?: string;

}

/**
 * Converts an object of type 'KinesisVideoDescribeStreamInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoDescribeStreamInput(obj: KinesisVideoDescribeStreamInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamName': obj.streamName,
    'StreamARN': obj.streamArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisVideoDescribeStreamOutput
 */
export interface KinesisVideoDescribeStreamOutput {
  /**
   * @schema KinesisVideoDescribeStreamOutput#StreamInfo
   */
  readonly streamInfo?: KinesisVideoStreamInfo;

}

/**
 * Converts an object of type 'KinesisVideoDescribeStreamOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoDescribeStreamOutput(obj: KinesisVideoDescribeStreamOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamInfo': toJson_KinesisVideoStreamInfo(obj.streamInfo),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisVideoGetDataEndpointInput
 */
export interface KinesisVideoGetDataEndpointInput {
  /**
   * @schema KinesisVideoGetDataEndpointInput#StreamName
   */
  readonly streamName?: string;

  /**
   * @schema KinesisVideoGetDataEndpointInput#StreamARN
   */
  readonly streamArn?: string;

  /**
   * @schema KinesisVideoGetDataEndpointInput#APIName
   */
  readonly apiName?: string;

}

/**
 * Converts an object of type 'KinesisVideoGetDataEndpointInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoGetDataEndpointInput(obj: KinesisVideoGetDataEndpointInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamName': obj.streamName,
    'StreamARN': obj.streamArn,
    'APIName': obj.apiName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisVideoGetDataEndpointOutput
 */
export interface KinesisVideoGetDataEndpointOutput {
  /**
   * @schema KinesisVideoGetDataEndpointOutput#DataEndpoint
   */
  readonly dataEndpoint?: string;

}

/**
 * Converts an object of type 'KinesisVideoGetDataEndpointOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoGetDataEndpointOutput(obj: KinesisVideoGetDataEndpointOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataEndpoint': obj.dataEndpoint,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisVideoGetSignalingChannelEndpointInput
 */
export interface KinesisVideoGetSignalingChannelEndpointInput {
  /**
   * @schema KinesisVideoGetSignalingChannelEndpointInput#ChannelARN
   */
  readonly channelArn?: string;

  /**
   * @schema KinesisVideoGetSignalingChannelEndpointInput#SingleMasterChannelEndpointConfiguration
   */
  readonly singleMasterChannelEndpointConfiguration?: KinesisVideoSingleMasterChannelEndpointConfiguration;

}

/**
 * Converts an object of type 'KinesisVideoGetSignalingChannelEndpointInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoGetSignalingChannelEndpointInput(obj: KinesisVideoGetSignalingChannelEndpointInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelARN': obj.channelArn,
    'SingleMasterChannelEndpointConfiguration': toJson_KinesisVideoSingleMasterChannelEndpointConfiguration(obj.singleMasterChannelEndpointConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisVideoGetSignalingChannelEndpointOutput
 */
export interface KinesisVideoGetSignalingChannelEndpointOutput {
  /**
   * @schema KinesisVideoGetSignalingChannelEndpointOutput#ResourceEndpointList
   */
  readonly resourceEndpointList?: KinesisVideoResourceEndpointListItem[];

}

/**
 * Converts an object of type 'KinesisVideoGetSignalingChannelEndpointOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoGetSignalingChannelEndpointOutput(obj: KinesisVideoGetSignalingChannelEndpointOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceEndpointList': obj.resourceEndpointList?.map(y => toJson_KinesisVideoResourceEndpointListItem(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisVideoListSignalingChannelsInput
 */
export interface KinesisVideoListSignalingChannelsInput {
  /**
   * @schema KinesisVideoListSignalingChannelsInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema KinesisVideoListSignalingChannelsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema KinesisVideoListSignalingChannelsInput#ChannelNameCondition
   */
  readonly channelNameCondition?: KinesisVideoChannelNameCondition;

}

/**
 * Converts an object of type 'KinesisVideoListSignalingChannelsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoListSignalingChannelsInput(obj: KinesisVideoListSignalingChannelsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'ChannelNameCondition': toJson_KinesisVideoChannelNameCondition(obj.channelNameCondition),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisVideoListSignalingChannelsOutput
 */
export interface KinesisVideoListSignalingChannelsOutput {
  /**
   * @schema KinesisVideoListSignalingChannelsOutput#ChannelInfoList
   */
  readonly channelInfoList?: KinesisVideoChannelInfo[];

  /**
   * @schema KinesisVideoListSignalingChannelsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'KinesisVideoListSignalingChannelsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoListSignalingChannelsOutput(obj: KinesisVideoListSignalingChannelsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelInfoList': obj.channelInfoList?.map(y => toJson_KinesisVideoChannelInfo(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisVideoListStreamsInput
 */
export interface KinesisVideoListStreamsInput {
  /**
   * @schema KinesisVideoListStreamsInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema KinesisVideoListStreamsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema KinesisVideoListStreamsInput#StreamNameCondition
   */
  readonly streamNameCondition?: KinesisVideoStreamNameCondition;

}

/**
 * Converts an object of type 'KinesisVideoListStreamsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoListStreamsInput(obj: KinesisVideoListStreamsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'StreamNameCondition': toJson_KinesisVideoStreamNameCondition(obj.streamNameCondition),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisVideoListStreamsOutput
 */
export interface KinesisVideoListStreamsOutput {
  /**
   * @schema KinesisVideoListStreamsOutput#StreamInfoList
   */
  readonly streamInfoList?: KinesisVideoStreamInfo[];

  /**
   * @schema KinesisVideoListStreamsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'KinesisVideoListStreamsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoListStreamsOutput(obj: KinesisVideoListStreamsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamInfoList': obj.streamInfoList?.map(y => toJson_KinesisVideoStreamInfo(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisVideoListTagsForResourceInput
 */
export interface KinesisVideoListTagsForResourceInput {
  /**
   * @schema KinesisVideoListTagsForResourceInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema KinesisVideoListTagsForResourceInput#ResourceARN
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'KinesisVideoListTagsForResourceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoListTagsForResourceInput(obj: KinesisVideoListTagsForResourceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'ResourceARN': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisVideoListTagsForResourceOutput
 */
export interface KinesisVideoListTagsForResourceOutput {
  /**
   * @schema KinesisVideoListTagsForResourceOutput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema KinesisVideoListTagsForResourceOutput#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'KinesisVideoListTagsForResourceOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoListTagsForResourceOutput(obj: KinesisVideoListTagsForResourceOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisVideoListTagsForStreamInput
 */
export interface KinesisVideoListTagsForStreamInput {
  /**
   * @schema KinesisVideoListTagsForStreamInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema KinesisVideoListTagsForStreamInput#StreamARN
   */
  readonly streamArn?: string;

  /**
   * @schema KinesisVideoListTagsForStreamInput#StreamName
   */
  readonly streamName?: string;

}

/**
 * Converts an object of type 'KinesisVideoListTagsForStreamInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoListTagsForStreamInput(obj: KinesisVideoListTagsForStreamInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'StreamARN': obj.streamArn,
    'StreamName': obj.streamName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisVideoListTagsForStreamOutput
 */
export interface KinesisVideoListTagsForStreamOutput {
  /**
   * @schema KinesisVideoListTagsForStreamOutput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema KinesisVideoListTagsForStreamOutput#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'KinesisVideoListTagsForStreamOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoListTagsForStreamOutput(obj: KinesisVideoListTagsForStreamOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisVideoTagResourceInput
 */
export interface KinesisVideoTagResourceInput {
  /**
   * @schema KinesisVideoTagResourceInput#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema KinesisVideoTagResourceInput#Tags
   */
  readonly tags?: KinesisVideoTag[];

}

/**
 * Converts an object of type 'KinesisVideoTagResourceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoTagResourceInput(obj: KinesisVideoTagResourceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
    'Tags': obj.tags?.map(y => toJson_KinesisVideoTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisVideoTagResourceOutput
 */
export interface KinesisVideoTagResourceOutput {
}

/**
 * Converts an object of type 'KinesisVideoTagResourceOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoTagResourceOutput(obj: KinesisVideoTagResourceOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisVideoTagStreamInput
 */
export interface KinesisVideoTagStreamInput {
  /**
   * @schema KinesisVideoTagStreamInput#StreamARN
   */
  readonly streamArn?: string;

  /**
   * @schema KinesisVideoTagStreamInput#StreamName
   */
  readonly streamName?: string;

  /**
   * @schema KinesisVideoTagStreamInput#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'KinesisVideoTagStreamInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoTagStreamInput(obj: KinesisVideoTagStreamInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamARN': obj.streamArn,
    'StreamName': obj.streamName,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisVideoTagStreamOutput
 */
export interface KinesisVideoTagStreamOutput {
}

/**
 * Converts an object of type 'KinesisVideoTagStreamOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoTagStreamOutput(obj: KinesisVideoTagStreamOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisVideoUntagResourceInput
 */
export interface KinesisVideoUntagResourceInput {
  /**
   * @schema KinesisVideoUntagResourceInput#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema KinesisVideoUntagResourceInput#TagKeyList
   */
  readonly tagKeyList?: string[];

}

/**
 * Converts an object of type 'KinesisVideoUntagResourceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoUntagResourceInput(obj: KinesisVideoUntagResourceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
    'TagKeyList': obj.tagKeyList?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisVideoUntagResourceOutput
 */
export interface KinesisVideoUntagResourceOutput {
}

/**
 * Converts an object of type 'KinesisVideoUntagResourceOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoUntagResourceOutput(obj: KinesisVideoUntagResourceOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisVideoUntagStreamInput
 */
export interface KinesisVideoUntagStreamInput {
  /**
   * @schema KinesisVideoUntagStreamInput#StreamARN
   */
  readonly streamArn?: string;

  /**
   * @schema KinesisVideoUntagStreamInput#StreamName
   */
  readonly streamName?: string;

  /**
   * @schema KinesisVideoUntagStreamInput#TagKeyList
   */
  readonly tagKeyList?: string[];

}

/**
 * Converts an object of type 'KinesisVideoUntagStreamInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoUntagStreamInput(obj: KinesisVideoUntagStreamInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamARN': obj.streamArn,
    'StreamName': obj.streamName,
    'TagKeyList': obj.tagKeyList?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisVideoUntagStreamOutput
 */
export interface KinesisVideoUntagStreamOutput {
}

/**
 * Converts an object of type 'KinesisVideoUntagStreamOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoUntagStreamOutput(obj: KinesisVideoUntagStreamOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisVideoUpdateDataRetentionInput
 */
export interface KinesisVideoUpdateDataRetentionInput {
  /**
   * @schema KinesisVideoUpdateDataRetentionInput#StreamName
   */
  readonly streamName?: string;

  /**
   * @schema KinesisVideoUpdateDataRetentionInput#StreamARN
   */
  readonly streamArn?: string;

  /**
   * @schema KinesisVideoUpdateDataRetentionInput#CurrentVersion
   */
  readonly currentVersion?: string;

  /**
   * @schema KinesisVideoUpdateDataRetentionInput#Operation
   */
  readonly operation?: string;

  /**
   * @schema KinesisVideoUpdateDataRetentionInput#DataRetentionChangeInHours
   */
  readonly dataRetentionChangeInHours?: number;

}

/**
 * Converts an object of type 'KinesisVideoUpdateDataRetentionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoUpdateDataRetentionInput(obj: KinesisVideoUpdateDataRetentionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamName': obj.streamName,
    'StreamARN': obj.streamArn,
    'CurrentVersion': obj.currentVersion,
    'Operation': obj.operation,
    'DataRetentionChangeInHours': obj.dataRetentionChangeInHours,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisVideoUpdateDataRetentionOutput
 */
export interface KinesisVideoUpdateDataRetentionOutput {
}

/**
 * Converts an object of type 'KinesisVideoUpdateDataRetentionOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoUpdateDataRetentionOutput(obj: KinesisVideoUpdateDataRetentionOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisVideoUpdateSignalingChannelInput
 */
export interface KinesisVideoUpdateSignalingChannelInput {
  /**
   * @schema KinesisVideoUpdateSignalingChannelInput#ChannelARN
   */
  readonly channelArn?: string;

  /**
   * @schema KinesisVideoUpdateSignalingChannelInput#CurrentVersion
   */
  readonly currentVersion?: string;

  /**
   * @schema KinesisVideoUpdateSignalingChannelInput#SingleMasterConfiguration
   */
  readonly singleMasterConfiguration?: KinesisVideoSingleMasterConfiguration;

}

/**
 * Converts an object of type 'KinesisVideoUpdateSignalingChannelInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoUpdateSignalingChannelInput(obj: KinesisVideoUpdateSignalingChannelInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelARN': obj.channelArn,
    'CurrentVersion': obj.currentVersion,
    'SingleMasterConfiguration': toJson_KinesisVideoSingleMasterConfiguration(obj.singleMasterConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisVideoUpdateSignalingChannelOutput
 */
export interface KinesisVideoUpdateSignalingChannelOutput {
}

/**
 * Converts an object of type 'KinesisVideoUpdateSignalingChannelOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoUpdateSignalingChannelOutput(obj: KinesisVideoUpdateSignalingChannelOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisVideoUpdateStreamInput
 */
export interface KinesisVideoUpdateStreamInput {
  /**
   * @schema KinesisVideoUpdateStreamInput#StreamName
   */
  readonly streamName?: string;

  /**
   * @schema KinesisVideoUpdateStreamInput#StreamARN
   */
  readonly streamArn?: string;

  /**
   * @schema KinesisVideoUpdateStreamInput#CurrentVersion
   */
  readonly currentVersion?: string;

  /**
   * @schema KinesisVideoUpdateStreamInput#DeviceName
   */
  readonly deviceName?: string;

  /**
   * @schema KinesisVideoUpdateStreamInput#MediaType
   */
  readonly mediaType?: string;

}

/**
 * Converts an object of type 'KinesisVideoUpdateStreamInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoUpdateStreamInput(obj: KinesisVideoUpdateStreamInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamName': obj.streamName,
    'StreamARN': obj.streamArn,
    'CurrentVersion': obj.currentVersion,
    'DeviceName': obj.deviceName,
    'MediaType': obj.mediaType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisVideoUpdateStreamOutput
 */
export interface KinesisVideoUpdateStreamOutput {
}

/**
 * Converts an object of type 'KinesisVideoUpdateStreamOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoUpdateStreamOutput(obj: KinesisVideoUpdateStreamOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisVideoSingleMasterConfiguration
 */
export interface KinesisVideoSingleMasterConfiguration {
  /**
   * @schema KinesisVideoSingleMasterConfiguration#MessageTtlSeconds
   */
  readonly messageTtlSeconds?: number;

}

/**
 * Converts an object of type 'KinesisVideoSingleMasterConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoSingleMasterConfiguration(obj: KinesisVideoSingleMasterConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MessageTtlSeconds': obj.messageTtlSeconds,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisVideoTag
 */
export interface KinesisVideoTag {
  /**
   * @schema KinesisVideoTag#Key
   */
  readonly key?: string;

  /**
   * @schema KinesisVideoTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'KinesisVideoTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoTag(obj: KinesisVideoTag | undefined): Record<string, any> | undefined {
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
 * @schema KinesisVideoChannelInfo
 */
export interface KinesisVideoChannelInfo {
  /**
   * @schema KinesisVideoChannelInfo#ChannelName
   */
  readonly channelName?: string;

  /**
   * @schema KinesisVideoChannelInfo#ChannelARN
   */
  readonly channelArn?: string;

  /**
   * @schema KinesisVideoChannelInfo#ChannelType
   */
  readonly channelType?: string;

  /**
   * @schema KinesisVideoChannelInfo#ChannelStatus
   */
  readonly channelStatus?: string;

  /**
   * @schema KinesisVideoChannelInfo#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema KinesisVideoChannelInfo#SingleMasterConfiguration
   */
  readonly singleMasterConfiguration?: KinesisVideoSingleMasterConfiguration;

  /**
   * @schema KinesisVideoChannelInfo#Version
   */
  readonly version?: string;

}

/**
 * Converts an object of type 'KinesisVideoChannelInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoChannelInfo(obj: KinesisVideoChannelInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelName': obj.channelName,
    'ChannelARN': obj.channelArn,
    'ChannelType': obj.channelType,
    'ChannelStatus': obj.channelStatus,
    'CreationTime': obj.creationTime,
    'SingleMasterConfiguration': toJson_KinesisVideoSingleMasterConfiguration(obj.singleMasterConfiguration),
    'Version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisVideoStreamInfo
 */
export interface KinesisVideoStreamInfo {
  /**
   * @schema KinesisVideoStreamInfo#DeviceName
   */
  readonly deviceName?: string;

  /**
   * @schema KinesisVideoStreamInfo#StreamName
   */
  readonly streamName?: string;

  /**
   * @schema KinesisVideoStreamInfo#StreamARN
   */
  readonly streamArn?: string;

  /**
   * @schema KinesisVideoStreamInfo#MediaType
   */
  readonly mediaType?: string;

  /**
   * @schema KinesisVideoStreamInfo#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema KinesisVideoStreamInfo#Version
   */
  readonly version?: string;

  /**
   * @schema KinesisVideoStreamInfo#Status
   */
  readonly status?: string;

  /**
   * @schema KinesisVideoStreamInfo#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema KinesisVideoStreamInfo#DataRetentionInHours
   */
  readonly dataRetentionInHours?: number;

}

/**
 * Converts an object of type 'KinesisVideoStreamInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoStreamInfo(obj: KinesisVideoStreamInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeviceName': obj.deviceName,
    'StreamName': obj.streamName,
    'StreamARN': obj.streamArn,
    'MediaType': obj.mediaType,
    'KmsKeyId': obj.kmsKeyId,
    'Version': obj.version,
    'Status': obj.status,
    'CreationTime': obj.creationTime,
    'DataRetentionInHours': obj.dataRetentionInHours,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisVideoSingleMasterChannelEndpointConfiguration
 */
export interface KinesisVideoSingleMasterChannelEndpointConfiguration {
  /**
   * @schema KinesisVideoSingleMasterChannelEndpointConfiguration#Protocols
   */
  readonly protocols?: string[];

  /**
   * @schema KinesisVideoSingleMasterChannelEndpointConfiguration#Role
   */
  readonly role?: string;

}

/**
 * Converts an object of type 'KinesisVideoSingleMasterChannelEndpointConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoSingleMasterChannelEndpointConfiguration(obj: KinesisVideoSingleMasterChannelEndpointConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Protocols': obj.protocols?.map(y => y),
    'Role': obj.role,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisVideoResourceEndpointListItem
 */
export interface KinesisVideoResourceEndpointListItem {
  /**
   * @schema KinesisVideoResourceEndpointListItem#Protocol
   */
  readonly protocol?: string;

  /**
   * @schema KinesisVideoResourceEndpointListItem#ResourceEndpoint
   */
  readonly resourceEndpoint?: string;

}

/**
 * Converts an object of type 'KinesisVideoResourceEndpointListItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoResourceEndpointListItem(obj: KinesisVideoResourceEndpointListItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Protocol': obj.protocol,
    'ResourceEndpoint': obj.resourceEndpoint,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisVideoChannelNameCondition
 */
export interface KinesisVideoChannelNameCondition {
  /**
   * @schema KinesisVideoChannelNameCondition#ComparisonOperator
   */
  readonly comparisonOperator?: string;

  /**
   * @schema KinesisVideoChannelNameCondition#ComparisonValue
   */
  readonly comparisonValue?: string;

}

/**
 * Converts an object of type 'KinesisVideoChannelNameCondition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoChannelNameCondition(obj: KinesisVideoChannelNameCondition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ComparisonOperator': obj.comparisonOperator,
    'ComparisonValue': obj.comparisonValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisVideoStreamNameCondition
 */
export interface KinesisVideoStreamNameCondition {
  /**
   * @schema KinesisVideoStreamNameCondition#ComparisonOperator
   */
  readonly comparisonOperator?: string;

  /**
   * @schema KinesisVideoStreamNameCondition#ComparisonValue
   */
  readonly comparisonValue?: string;

}

/**
 * Converts an object of type 'KinesisVideoStreamNameCondition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoStreamNameCondition(obj: KinesisVideoStreamNameCondition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ComparisonOperator': obj.comparisonOperator,
    'ComparisonValue': obj.comparisonValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
