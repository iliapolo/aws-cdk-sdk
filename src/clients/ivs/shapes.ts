/**
 * @schema BatchGetChannelRequest
 */
export interface BatchGetChannelRequest {
  /**
   * @schema BatchGetChannelRequest#arns
   */
  readonly arns: string[];

}

/**
 * @schema BatchGetChannelResponse
 */
export interface BatchGetChannelResponse {
  /**
   * @schema BatchGetChannelResponse#channels
   */
  readonly channels?: Channel[];

  /**
   * @schema BatchGetChannelResponse#errors
   */
  readonly errors?: BatchError[];

}

/**
 * @schema BatchGetStreamKeyRequest
 */
export interface BatchGetStreamKeyRequest {
  /**
   * @schema BatchGetStreamKeyRequest#arns
   */
  readonly arns: string[];

}

/**
 * @schema BatchGetStreamKeyResponse
 */
export interface BatchGetStreamKeyResponse {
  /**
   * @schema BatchGetStreamKeyResponse#streamKeys
   */
  readonly streamKeys?: StreamKey[];

  /**
   * @schema BatchGetStreamKeyResponse#errors
   */
  readonly errors?: BatchError[];

}

/**
 * @schema CreateChannelRequest
 */
export interface CreateChannelRequest {
  /**
   * @schema CreateChannelRequest#name
   */
  readonly name?: string;

  /**
   * @schema CreateChannelRequest#latencyMode
   */
  readonly latencyMode?: string;

  /**
   * @schema CreateChannelRequest#type
   */
  readonly type?: string;

  /**
   * @schema CreateChannelRequest#authorized
   */
  readonly authorized?: boolean;

  /**
   * @schema CreateChannelRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateChannelResponse
 */
export interface CreateChannelResponse {
  /**
   * @schema CreateChannelResponse#channel
   */
  readonly channel?: Channel;

  /**
   * @schema CreateChannelResponse#streamKey
   */
  readonly streamKey?: StreamKey;

}

/**
 * @schema CreateStreamKeyRequest
 */
export interface CreateStreamKeyRequest {
  /**
   * @schema CreateStreamKeyRequest#channelArn
   */
  readonly channelArn: string;

  /**
   * @schema CreateStreamKeyRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateStreamKeyResponse
 */
export interface CreateStreamKeyResponse {
  /**
   * @schema CreateStreamKeyResponse#streamKey
   */
  readonly streamKey?: StreamKey;

}

/**
 * @schema DeleteChannelRequest
 */
export interface DeleteChannelRequest {
  /**
   * @schema DeleteChannelRequest#arn
   */
  readonly arn: string;

}

/**
 * @schema DeletePlaybackKeyPairRequest
 */
export interface DeletePlaybackKeyPairRequest {
  /**
   * @schema DeletePlaybackKeyPairRequest#arn
   */
  readonly arn: string;

}

/**
 * @schema DeletePlaybackKeyPairResponse
 */
export interface DeletePlaybackKeyPairResponse {
}

/**
 * @schema DeleteStreamKeyRequest
 */
export interface DeleteStreamKeyRequest {
  /**
   * @schema DeleteStreamKeyRequest#arn
   */
  readonly arn: string;

}

/**
 * @schema GetChannelRequest
 */
export interface GetChannelRequest {
  /**
   * @schema GetChannelRequest#arn
   */
  readonly arn: string;

}

/**
 * @schema GetChannelResponse
 */
export interface GetChannelResponse {
  /**
   * @schema GetChannelResponse#channel
   */
  readonly channel?: Channel;

}

/**
 * @schema GetPlaybackKeyPairRequest
 */
export interface GetPlaybackKeyPairRequest {
  /**
   * @schema GetPlaybackKeyPairRequest#arn
   */
  readonly arn: string;

}

/**
 * @schema GetPlaybackKeyPairResponse
 */
export interface GetPlaybackKeyPairResponse {
  /**
   * @schema GetPlaybackKeyPairResponse#keyPair
   */
  readonly keyPair?: PlaybackKeyPair;

}

/**
 * @schema GetStreamRequest
 */
export interface GetStreamRequest {
  /**
   * @schema GetStreamRequest#channelArn
   */
  readonly channelArn: string;

}

/**
 * @schema GetStreamResponse
 */
export interface GetStreamResponse {
  /**
   * @schema GetStreamResponse#stream
   */
  readonly stream?: Stream;

}

/**
 * @schema GetStreamKeyRequest
 */
export interface GetStreamKeyRequest {
  /**
   * @schema GetStreamKeyRequest#arn
   */
  readonly arn: string;

}

/**
 * @schema GetStreamKeyResponse
 */
export interface GetStreamKeyResponse {
  /**
   * @schema GetStreamKeyResponse#streamKey
   */
  readonly streamKey?: StreamKey;

}

/**
 * @schema ImportPlaybackKeyPairRequest
 */
export interface ImportPlaybackKeyPairRequest {
  /**
   * @schema ImportPlaybackKeyPairRequest#publicKeyMaterial
   */
  readonly publicKeyMaterial: string;

  /**
   * @schema ImportPlaybackKeyPairRequest#name
   */
  readonly name?: string;

  /**
   * @schema ImportPlaybackKeyPairRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema ImportPlaybackKeyPairResponse
 */
export interface ImportPlaybackKeyPairResponse {
  /**
   * @schema ImportPlaybackKeyPairResponse#keyPair
   */
  readonly keyPair?: PlaybackKeyPair;

}

/**
 * @schema ListChannelsRequest
 */
export interface ListChannelsRequest {
  /**
   * @schema ListChannelsRequest#filterByName
   */
  readonly filterByName?: string;

  /**
   * @schema ListChannelsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListChannelsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListChannelsResponse
 */
export interface ListChannelsResponse {
  /**
   * @schema ListChannelsResponse#channels
   */
  readonly channels: ChannelSummary[];

  /**
   * @schema ListChannelsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListPlaybackKeyPairsRequest
 */
export interface ListPlaybackKeyPairsRequest {
  /**
   * @schema ListPlaybackKeyPairsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListPlaybackKeyPairsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListPlaybackKeyPairsResponse
 */
export interface ListPlaybackKeyPairsResponse {
  /**
   * @schema ListPlaybackKeyPairsResponse#keyPairs
   */
  readonly keyPairs: PlaybackKeyPairSummary[];

  /**
   * @schema ListPlaybackKeyPairsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListStreamKeysRequest
 */
export interface ListStreamKeysRequest {
  /**
   * @schema ListStreamKeysRequest#channelArn
   */
  readonly channelArn: string;

  /**
   * @schema ListStreamKeysRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListStreamKeysRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListStreamKeysResponse
 */
export interface ListStreamKeysResponse {
  /**
   * @schema ListStreamKeysResponse#streamKeys
   */
  readonly streamKeys: StreamKeySummary[];

  /**
   * @schema ListStreamKeysResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListStreamsRequest
 */
export interface ListStreamsRequest {
  /**
   * @schema ListStreamsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListStreamsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListStreamsResponse
 */
export interface ListStreamsResponse {
  /**
   * @schema ListStreamsResponse#streams
   */
  readonly streams: StreamSummary[];

  /**
   * @schema ListStreamsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * @schema ListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema ListTagsForResourceRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListTagsForResourceRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListTagsForResourceResponse
 */
export interface ListTagsForResourceResponse {
  /**
   * @schema ListTagsForResourceResponse#tags
   */
  readonly tags: { [key: string]: string };

  /**
   * @schema ListTagsForResourceResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema PutMetadataRequest
 */
export interface PutMetadataRequest {
  /**
   * @schema PutMetadataRequest#channelArn
   */
  readonly channelArn: string;

  /**
   * @schema PutMetadataRequest#metadata
   */
  readonly metadata: string;

}

/**
 * @schema StopStreamRequest
 */
export interface StopStreamRequest {
  /**
   * @schema StopStreamRequest#channelArn
   */
  readonly channelArn: string;

}

/**
 * @schema StopStreamResponse
 */
export interface StopStreamResponse {
}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema TagResourceRequest#tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema TagResourceResponse
 */
export interface TagResourceResponse {
}

/**
 * @schema UntagResourceRequest
 */
export interface UntagResourceRequest {
  /**
   * @schema UntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema UntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UntagResourceResponse
 */
export interface UntagResourceResponse {
}

/**
 * @schema UpdateChannelRequest
 */
export interface UpdateChannelRequest {
  /**
   * @schema UpdateChannelRequest#arn
   */
  readonly arn: string;

  /**
   * @schema UpdateChannelRequest#name
   */
  readonly name?: string;

  /**
   * @schema UpdateChannelRequest#latencyMode
   */
  readonly latencyMode?: string;

  /**
   * @schema UpdateChannelRequest#type
   */
  readonly type?: string;

  /**
   * @schema UpdateChannelRequest#authorized
   */
  readonly authorized?: boolean;

}

/**
 * @schema UpdateChannelResponse
 */
export interface UpdateChannelResponse {
  /**
   * @schema UpdateChannelResponse#channel
   */
  readonly channel?: Channel;

}

/**
 * @schema Channel
 */
export interface Channel {
  /**
   * @schema Channel#arn
   */
  readonly arn?: string;

  /**
   * @schema Channel#name
   */
  readonly name?: string;

  /**
   * @schema Channel#latencyMode
   */
  readonly latencyMode?: string;

  /**
   * @schema Channel#type
   */
  readonly type?: string;

  /**
   * @schema Channel#ingestEndpoint
   */
  readonly ingestEndpoint?: string;

  /**
   * @schema Channel#playbackUrl
   */
  readonly playbackUrl?: string;

  /**
   * @schema Channel#authorized
   */
  readonly authorized?: boolean;

  /**
   * @schema Channel#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema BatchError
 */
export interface BatchError {
  /**
   * @schema BatchError#arn
   */
  readonly arn?: string;

  /**
   * @schema BatchError#code
   */
  readonly code?: string;

  /**
   * @schema BatchError#message
   */
  readonly message?: string;

}

/**
 * @schema StreamKey
 */
export interface StreamKey {
  /**
   * @schema StreamKey#arn
   */
  readonly arn?: string;

  /**
   * @schema StreamKey#value
   */
  readonly value?: string;

  /**
   * @schema StreamKey#channelArn
   */
  readonly channelArn?: string;

  /**
   * @schema StreamKey#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema PlaybackKeyPair
 */
export interface PlaybackKeyPair {
  /**
   * @schema PlaybackKeyPair#arn
   */
  readonly arn?: string;

  /**
   * @schema PlaybackKeyPair#name
   */
  readonly name?: string;

  /**
   * @schema PlaybackKeyPair#fingerprint
   */
  readonly fingerprint?: string;

  /**
   * @schema PlaybackKeyPair#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema Stream
 */
export interface Stream {
  /**
   * @schema Stream#channelArn
   */
  readonly channelArn?: string;

  /**
   * @schema Stream#playbackUrl
   */
  readonly playbackUrl?: string;

  /**
   * @schema Stream#startTime
   */
  readonly startTime?: string;

  /**
   * @schema Stream#state
   */
  readonly state?: string;

  /**
   * @schema Stream#health
   */
  readonly health?: string;

  /**
   * @schema Stream#viewerCount
   */
  readonly viewerCount?: number;

}

/**
 * @schema ChannelSummary
 */
export interface ChannelSummary {
  /**
   * @schema ChannelSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema ChannelSummary#name
   */
  readonly name?: string;

  /**
   * @schema ChannelSummary#latencyMode
   */
  readonly latencyMode?: string;

  /**
   * @schema ChannelSummary#authorized
   */
  readonly authorized?: boolean;

  /**
   * @schema ChannelSummary#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema PlaybackKeyPairSummary
 */
export interface PlaybackKeyPairSummary {
  /**
   * @schema PlaybackKeyPairSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema PlaybackKeyPairSummary#name
   */
  readonly name?: string;

  /**
   * @schema PlaybackKeyPairSummary#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema StreamKeySummary
 */
export interface StreamKeySummary {
  /**
   * @schema StreamKeySummary#arn
   */
  readonly arn?: string;

  /**
   * @schema StreamKeySummary#channelArn
   */
  readonly channelArn?: string;

  /**
   * @schema StreamKeySummary#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema StreamSummary
 */
export interface StreamSummary {
  /**
   * @schema StreamSummary#channelArn
   */
  readonly channelArn?: string;

  /**
   * @schema StreamSummary#state
   */
  readonly state?: string;

  /**
   * @schema StreamSummary#health
   */
  readonly health?: string;

  /**
   * @schema StreamSummary#viewerCount
   */
  readonly viewerCount?: number;

  /**
   * @schema StreamSummary#startTime
   */
  readonly startTime?: string;

}
