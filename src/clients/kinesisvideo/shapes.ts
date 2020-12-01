/**
 * @schema CreateSignalingChannelInput
 */
export interface CreateSignalingChannelInput {
  /**
   * @schema CreateSignalingChannelInput#ChannelName
   */
  readonly channelName: string;

  /**
   * @schema CreateSignalingChannelInput#ChannelType
   */
  readonly channelType?: string;

  /**
   * @schema CreateSignalingChannelInput#SingleMasterConfiguration
   */
  readonly singleMasterConfiguration?: SingleMasterConfiguration;

  /**
   * @schema CreateSignalingChannelInput#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateSignalingChannelOutput
 */
export interface CreateSignalingChannelOutput {
  /**
   * @schema CreateSignalingChannelOutput#ChannelARN
   */
  readonly channelArn?: string;

}

/**
 * @schema CreateStreamInput
 */
export interface CreateStreamInput {
  /**
   * @schema CreateStreamInput#DeviceName
   */
  readonly deviceName?: string;

  /**
   * @schema CreateStreamInput#StreamName
   */
  readonly streamName: string;

  /**
   * @schema CreateStreamInput#MediaType
   */
  readonly mediaType?: string;

  /**
   * @schema CreateStreamInput#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema CreateStreamInput#DataRetentionInHours
   */
  readonly dataRetentionInHours?: number;

  /**
   * @schema CreateStreamInput#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateStreamOutput
 */
export interface CreateStreamOutput {
  /**
   * @schema CreateStreamOutput#StreamARN
   */
  readonly streamArn?: string;

}

/**
 * @schema DeleteSignalingChannelInput
 */
export interface DeleteSignalingChannelInput {
  /**
   * @schema DeleteSignalingChannelInput#ChannelARN
   */
  readonly channelArn: string;

  /**
   * @schema DeleteSignalingChannelInput#CurrentVersion
   */
  readonly currentVersion?: string;

}

/**
 * @schema DeleteSignalingChannelOutput
 */
export interface DeleteSignalingChannelOutput {
}

/**
 * @schema DeleteStreamInput
 */
export interface DeleteStreamInput {
  /**
   * @schema DeleteStreamInput#StreamARN
   */
  readonly streamArn: string;

  /**
   * @schema DeleteStreamInput#CurrentVersion
   */
  readonly currentVersion?: string;

}

/**
 * @schema DeleteStreamOutput
 */
export interface DeleteStreamOutput {
}

/**
 * @schema DescribeSignalingChannelInput
 */
export interface DescribeSignalingChannelInput {
  /**
   * @schema DescribeSignalingChannelInput#ChannelName
   */
  readonly channelName?: string;

  /**
   * @schema DescribeSignalingChannelInput#ChannelARN
   */
  readonly channelArn?: string;

}

/**
 * @schema DescribeSignalingChannelOutput
 */
export interface DescribeSignalingChannelOutput {
  /**
   * @schema DescribeSignalingChannelOutput#ChannelInfo
   */
  readonly channelInfo?: ChannelInfo;

}

/**
 * @schema DescribeStreamInput
 */
export interface DescribeStreamInput {
  /**
   * @schema DescribeStreamInput#StreamName
   */
  readonly streamName?: string;

  /**
   * @schema DescribeStreamInput#StreamARN
   */
  readonly streamArn?: string;

}

/**
 * @schema DescribeStreamOutput
 */
export interface DescribeStreamOutput {
  /**
   * @schema DescribeStreamOutput#StreamInfo
   */
  readonly streamInfo?: StreamInfo;

}

/**
 * @schema GetDataEndpointInput
 */
export interface GetDataEndpointInput {
  /**
   * @schema GetDataEndpointInput#StreamName
   */
  readonly streamName?: string;

  /**
   * @schema GetDataEndpointInput#StreamARN
   */
  readonly streamArn?: string;

  /**
   * @schema GetDataEndpointInput#APIName
   */
  readonly apiName: string;

}

/**
 * @schema GetDataEndpointOutput
 */
export interface GetDataEndpointOutput {
  /**
   * @schema GetDataEndpointOutput#DataEndpoint
   */
  readonly dataEndpoint?: string;

}

/**
 * @schema GetSignalingChannelEndpointInput
 */
export interface GetSignalingChannelEndpointInput {
  /**
   * @schema GetSignalingChannelEndpointInput#ChannelARN
   */
  readonly channelArn: string;

  /**
   * @schema GetSignalingChannelEndpointInput#SingleMasterChannelEndpointConfiguration
   */
  readonly singleMasterChannelEndpointConfiguration?: SingleMasterChannelEndpointConfiguration;

}

/**
 * @schema GetSignalingChannelEndpointOutput
 */
export interface GetSignalingChannelEndpointOutput {
  /**
   * @schema GetSignalingChannelEndpointOutput#ResourceEndpointList
   */
  readonly resourceEndpointList?: ResourceEndpointListItem[];

}

/**
 * @schema ListSignalingChannelsInput
 */
export interface ListSignalingChannelsInput {
  /**
   * @schema ListSignalingChannelsInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListSignalingChannelsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListSignalingChannelsInput#ChannelNameCondition
   */
  readonly channelNameCondition?: ChannelNameCondition;

}

/**
 * @schema ListSignalingChannelsOutput
 */
export interface ListSignalingChannelsOutput {
  /**
   * @schema ListSignalingChannelsOutput#ChannelInfoList
   */
  readonly channelInfoList?: ChannelInfo[];

  /**
   * @schema ListSignalingChannelsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListStreamsInput
 */
export interface ListStreamsInput {
  /**
   * @schema ListStreamsInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListStreamsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListStreamsInput#StreamNameCondition
   */
  readonly streamNameCondition?: StreamNameCondition;

}

/**
 * @schema ListStreamsOutput
 */
export interface ListStreamsOutput {
  /**
   * @schema ListStreamsOutput#StreamInfoList
   */
  readonly streamInfoList?: StreamInfo[];

  /**
   * @schema ListStreamsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsForResourceInput
 */
export interface ListTagsForResourceInput {
  /**
   * @schema ListTagsForResourceInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListTagsForResourceInput#ResourceARN
   */
  readonly resourceArn: string;

}

/**
 * @schema ListTagsForResourceOutput
 */
export interface ListTagsForResourceOutput {
  /**
   * @schema ListTagsForResourceOutput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListTagsForResourceOutput#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema ListTagsForStreamInput
 */
export interface ListTagsForStreamInput {
  /**
   * @schema ListTagsForStreamInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListTagsForStreamInput#StreamARN
   */
  readonly streamArn?: string;

  /**
   * @schema ListTagsForStreamInput#StreamName
   */
  readonly streamName?: string;

}

/**
 * @schema ListTagsForStreamOutput
 */
export interface ListTagsForStreamOutput {
  /**
   * @schema ListTagsForStreamOutput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListTagsForStreamOutput#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema TagResourceInput
 */
export interface TagResourceInput {
  /**
   * @schema TagResourceInput#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema TagResourceInput#Tags
   */
  readonly tags: Tag[];

}

/**
 * @schema TagResourceOutput
 */
export interface TagResourceOutput {
}

/**
 * @schema TagStreamInput
 */
export interface TagStreamInput {
  /**
   * @schema TagStreamInput#StreamARN
   */
  readonly streamArn?: string;

  /**
   * @schema TagStreamInput#StreamName
   */
  readonly streamName?: string;

  /**
   * @schema TagStreamInput#Tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema TagStreamOutput
 */
export interface TagStreamOutput {
}

/**
 * @schema UntagResourceInput
 */
export interface UntagResourceInput {
  /**
   * @schema UntagResourceInput#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema UntagResourceInput#TagKeyList
   */
  readonly tagKeyList: string[];

}

/**
 * @schema UntagResourceOutput
 */
export interface UntagResourceOutput {
}

/**
 * @schema UntagStreamInput
 */
export interface UntagStreamInput {
  /**
   * @schema UntagStreamInput#StreamARN
   */
  readonly streamArn?: string;

  /**
   * @schema UntagStreamInput#StreamName
   */
  readonly streamName?: string;

  /**
   * @schema UntagStreamInput#TagKeyList
   */
  readonly tagKeyList: string[];

}

/**
 * @schema UntagStreamOutput
 */
export interface UntagStreamOutput {
}

/**
 * @schema UpdateDataRetentionInput
 */
export interface UpdateDataRetentionInput {
  /**
   * @schema UpdateDataRetentionInput#StreamName
   */
  readonly streamName?: string;

  /**
   * @schema UpdateDataRetentionInput#StreamARN
   */
  readonly streamArn?: string;

  /**
   * @schema UpdateDataRetentionInput#CurrentVersion
   */
  readonly currentVersion: string;

  /**
   * @schema UpdateDataRetentionInput#Operation
   */
  readonly operation: string;

  /**
   * @schema UpdateDataRetentionInput#DataRetentionChangeInHours
   */
  readonly dataRetentionChangeInHours: number;

}

/**
 * @schema UpdateDataRetentionOutput
 */
export interface UpdateDataRetentionOutput {
}

/**
 * @schema UpdateSignalingChannelInput
 */
export interface UpdateSignalingChannelInput {
  /**
   * @schema UpdateSignalingChannelInput#ChannelARN
   */
  readonly channelArn: string;

  /**
   * @schema UpdateSignalingChannelInput#CurrentVersion
   */
  readonly currentVersion: string;

  /**
   * @schema UpdateSignalingChannelInput#SingleMasterConfiguration
   */
  readonly singleMasterConfiguration?: SingleMasterConfiguration;

}

/**
 * @schema UpdateSignalingChannelOutput
 */
export interface UpdateSignalingChannelOutput {
}

/**
 * @schema UpdateStreamInput
 */
export interface UpdateStreamInput {
  /**
   * @schema UpdateStreamInput#StreamName
   */
  readonly streamName?: string;

  /**
   * @schema UpdateStreamInput#StreamARN
   */
  readonly streamArn?: string;

  /**
   * @schema UpdateStreamInput#CurrentVersion
   */
  readonly currentVersion: string;

  /**
   * @schema UpdateStreamInput#DeviceName
   */
  readonly deviceName?: string;

  /**
   * @schema UpdateStreamInput#MediaType
   */
  readonly mediaType?: string;

}

/**
 * @schema UpdateStreamOutput
 */
export interface UpdateStreamOutput {
}

/**
 * @schema SingleMasterConfiguration
 */
export interface SingleMasterConfiguration {
  /**
   * @schema SingleMasterConfiguration#MessageTtlSeconds
   */
  readonly messageTtlSeconds?: number;

}

/**
 * @schema Tag
 */
export interface Tag {
  /**
   * @schema Tag#Key
   */
  readonly key: string;

  /**
   * @schema Tag#Value
   */
  readonly value: string;

}

/**
 * @schema ChannelInfo
 */
export interface ChannelInfo {
  /**
   * @schema ChannelInfo#ChannelName
   */
  readonly channelName?: string;

  /**
   * @schema ChannelInfo#ChannelARN
   */
  readonly channelArn?: string;

  /**
   * @schema ChannelInfo#ChannelType
   */
  readonly channelType?: string;

  /**
   * @schema ChannelInfo#ChannelStatus
   */
  readonly channelStatus?: string;

  /**
   * @schema ChannelInfo#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema ChannelInfo#SingleMasterConfiguration
   */
  readonly singleMasterConfiguration?: SingleMasterConfiguration;

  /**
   * @schema ChannelInfo#Version
   */
  readonly version?: string;

}

/**
 * @schema StreamInfo
 */
export interface StreamInfo {
  /**
   * @schema StreamInfo#DeviceName
   */
  readonly deviceName?: string;

  /**
   * @schema StreamInfo#StreamName
   */
  readonly streamName?: string;

  /**
   * @schema StreamInfo#StreamARN
   */
  readonly streamArn?: string;

  /**
   * @schema StreamInfo#MediaType
   */
  readonly mediaType?: string;

  /**
   * @schema StreamInfo#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema StreamInfo#Version
   */
  readonly version?: string;

  /**
   * @schema StreamInfo#Status
   */
  readonly status?: string;

  /**
   * @schema StreamInfo#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema StreamInfo#DataRetentionInHours
   */
  readonly dataRetentionInHours?: number;

}

/**
 * @schema SingleMasterChannelEndpointConfiguration
 */
export interface SingleMasterChannelEndpointConfiguration {
  /**
   * @schema SingleMasterChannelEndpointConfiguration#Protocols
   */
  readonly protocols?: string[];

  /**
   * @schema SingleMasterChannelEndpointConfiguration#Role
   */
  readonly role?: string;

}

/**
 * @schema ResourceEndpointListItem
 */
export interface ResourceEndpointListItem {
  /**
   * @schema ResourceEndpointListItem#Protocol
   */
  readonly protocol?: string;

  /**
   * @schema ResourceEndpointListItem#ResourceEndpoint
   */
  readonly resourceEndpoint?: string;

}

/**
 * @schema ChannelNameCondition
 */
export interface ChannelNameCondition {
  /**
   * @schema ChannelNameCondition#ComparisonOperator
   */
  readonly comparisonOperator?: string;

  /**
   * @schema ChannelNameCondition#ComparisonValue
   */
  readonly comparisonValue?: string;

}

/**
 * @schema StreamNameCondition
 */
export interface StreamNameCondition {
  /**
   * @schema StreamNameCondition#ComparisonOperator
   */
  readonly comparisonOperator?: string;

  /**
   * @schema StreamNameCondition#ComparisonValue
   */
  readonly comparisonValue?: string;

}
