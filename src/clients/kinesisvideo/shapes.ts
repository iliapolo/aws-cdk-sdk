/**
 * @schema KinesisVideoCreateSignalingChannelInput
 */
export interface KinesisVideoCreateSignalingChannelInput {
  /**
   * @schema KinesisVideoCreateSignalingChannelInput#ChannelName
   */
  readonly channelName: string;

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
 * @schema KinesisVideoCreateSignalingChannelOutput
 */
export interface KinesisVideoCreateSignalingChannelOutput {
  /**
   * @schema KinesisVideoCreateSignalingChannelOutput#ChannelARN
   */
  readonly channelArn?: string;

}

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
  readonly streamName: string;

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
 * @schema KinesisVideoCreateStreamOutput
 */
export interface KinesisVideoCreateStreamOutput {
  /**
   * @schema KinesisVideoCreateStreamOutput#StreamARN
   */
  readonly streamArn?: string;

}

/**
 * @schema KinesisVideoDeleteSignalingChannelInput
 */
export interface KinesisVideoDeleteSignalingChannelInput {
  /**
   * @schema KinesisVideoDeleteSignalingChannelInput#ChannelARN
   */
  readonly channelArn: string;

  /**
   * @schema KinesisVideoDeleteSignalingChannelInput#CurrentVersion
   */
  readonly currentVersion?: string;

}

/**
 * @schema KinesisVideoDeleteSignalingChannelOutput
 */
export interface KinesisVideoDeleteSignalingChannelOutput {
}

/**
 * @schema KinesisVideoDeleteStreamInput
 */
export interface KinesisVideoDeleteStreamInput {
  /**
   * @schema KinesisVideoDeleteStreamInput#StreamARN
   */
  readonly streamArn: string;

  /**
   * @schema KinesisVideoDeleteStreamInput#CurrentVersion
   */
  readonly currentVersion?: string;

}

/**
 * @schema KinesisVideoDeleteStreamOutput
 */
export interface KinesisVideoDeleteStreamOutput {
}

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
 * @schema KinesisVideoDescribeSignalingChannelOutput
 */
export interface KinesisVideoDescribeSignalingChannelOutput {
  /**
   * @schema KinesisVideoDescribeSignalingChannelOutput#ChannelInfo
   */
  readonly channelInfo?: KinesisVideoChannelInfo;

}

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
 * @schema KinesisVideoDescribeStreamOutput
 */
export interface KinesisVideoDescribeStreamOutput {
  /**
   * @schema KinesisVideoDescribeStreamOutput#StreamInfo
   */
  readonly streamInfo?: KinesisVideoStreamInfo;

}

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
  readonly apiName: string;

}

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
 * @schema KinesisVideoGetSignalingChannelEndpointInput
 */
export interface KinesisVideoGetSignalingChannelEndpointInput {
  /**
   * @schema KinesisVideoGetSignalingChannelEndpointInput#ChannelARN
   */
  readonly channelArn: string;

  /**
   * @schema KinesisVideoGetSignalingChannelEndpointInput#SingleMasterChannelEndpointConfiguration
   */
  readonly singleMasterChannelEndpointConfiguration?: KinesisVideoSingleMasterChannelEndpointConfiguration;

}

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
  readonly resourceArn: string;

}

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
 * @schema KinesisVideoTagResourceInput
 */
export interface KinesisVideoTagResourceInput {
  /**
   * @schema KinesisVideoTagResourceInput#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema KinesisVideoTagResourceInput#Tags
   */
  readonly tags: KinesisVideoTag[];

}

/**
 * @schema KinesisVideoTagResourceOutput
 */
export interface KinesisVideoTagResourceOutput {
}

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
  readonly tags: { [key: string]: string };

}

/**
 * @schema KinesisVideoTagStreamOutput
 */
export interface KinesisVideoTagStreamOutput {
}

/**
 * @schema KinesisVideoUntagResourceInput
 */
export interface KinesisVideoUntagResourceInput {
  /**
   * @schema KinesisVideoUntagResourceInput#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema KinesisVideoUntagResourceInput#TagKeyList
   */
  readonly tagKeyList: string[];

}

/**
 * @schema KinesisVideoUntagResourceOutput
 */
export interface KinesisVideoUntagResourceOutput {
}

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
  readonly tagKeyList: string[];

}

/**
 * @schema KinesisVideoUntagStreamOutput
 */
export interface KinesisVideoUntagStreamOutput {
}

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
  readonly currentVersion: string;

  /**
   * @schema KinesisVideoUpdateDataRetentionInput#Operation
   */
  readonly operation: string;

  /**
   * @schema KinesisVideoUpdateDataRetentionInput#DataRetentionChangeInHours
   */
  readonly dataRetentionChangeInHours: number;

}

/**
 * @schema KinesisVideoUpdateDataRetentionOutput
 */
export interface KinesisVideoUpdateDataRetentionOutput {
}

/**
 * @schema KinesisVideoUpdateSignalingChannelInput
 */
export interface KinesisVideoUpdateSignalingChannelInput {
  /**
   * @schema KinesisVideoUpdateSignalingChannelInput#ChannelARN
   */
  readonly channelArn: string;

  /**
   * @schema KinesisVideoUpdateSignalingChannelInput#CurrentVersion
   */
  readonly currentVersion: string;

  /**
   * @schema KinesisVideoUpdateSignalingChannelInput#SingleMasterConfiguration
   */
  readonly singleMasterConfiguration?: KinesisVideoSingleMasterConfiguration;

}

/**
 * @schema KinesisVideoUpdateSignalingChannelOutput
 */
export interface KinesisVideoUpdateSignalingChannelOutput {
}

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
  readonly currentVersion: string;

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
 * @schema KinesisVideoUpdateStreamOutput
 */
export interface KinesisVideoUpdateStreamOutput {
}

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
 * @schema KinesisVideoTag
 */
export interface KinesisVideoTag {
  /**
   * @schema KinesisVideoTag#Key
   */
  readonly key: string;

  /**
   * @schema KinesisVideoTag#Value
   */
  readonly value: string;

}

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
