/**
 * @schema IvsBatchGetChannelRequest
 */
export interface IvsBatchGetChannelRequest {
  /**
   * @schema IvsBatchGetChannelRequest#arns
   */
  readonly arns: string[];

}

/**
 * @schema IvsBatchGetChannelResponse
 */
export interface IvsBatchGetChannelResponse {
  /**
   * @schema IvsBatchGetChannelResponse#channels
   */
  readonly channels?: IvsChannel[];

  /**
   * @schema IvsBatchGetChannelResponse#errors
   */
  readonly errors?: IvsBatchError[];

}

/**
 * @schema IvsBatchGetStreamKeyRequest
 */
export interface IvsBatchGetStreamKeyRequest {
  /**
   * @schema IvsBatchGetStreamKeyRequest#arns
   */
  readonly arns: string[];

}

/**
 * @schema IvsBatchGetStreamKeyResponse
 */
export interface IvsBatchGetStreamKeyResponse {
  /**
   * @schema IvsBatchGetStreamKeyResponse#streamKeys
   */
  readonly streamKeys?: IvsStreamKey[];

  /**
   * @schema IvsBatchGetStreamKeyResponse#errors
   */
  readonly errors?: IvsBatchError[];

}

/**
 * @schema IvsCreateChannelRequest
 */
export interface IvsCreateChannelRequest {
  /**
   * @schema IvsCreateChannelRequest#name
   */
  readonly name?: string;

  /**
   * @schema IvsCreateChannelRequest#latencyMode
   */
  readonly latencyMode?: string;

  /**
   * @schema IvsCreateChannelRequest#type
   */
  readonly type?: string;

  /**
   * @schema IvsCreateChannelRequest#authorized
   */
  readonly authorized?: boolean;

  /**
   * @schema IvsCreateChannelRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema IvsCreateChannelResponse
 */
export interface IvsCreateChannelResponse {
  /**
   * @schema IvsCreateChannelResponse#channel
   */
  readonly channel?: IvsChannel;

  /**
   * @schema IvsCreateChannelResponse#streamKey
   */
  readonly streamKey?: IvsStreamKey;

}

/**
 * @schema IvsCreateStreamKeyRequest
 */
export interface IvsCreateStreamKeyRequest {
  /**
   * @schema IvsCreateStreamKeyRequest#channelArn
   */
  readonly channelArn: string;

  /**
   * @schema IvsCreateStreamKeyRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema IvsCreateStreamKeyResponse
 */
export interface IvsCreateStreamKeyResponse {
  /**
   * @schema IvsCreateStreamKeyResponse#streamKey
   */
  readonly streamKey?: IvsStreamKey;

}

/**
 * @schema IvsDeleteChannelRequest
 */
export interface IvsDeleteChannelRequest {
  /**
   * @schema IvsDeleteChannelRequest#arn
   */
  readonly arn: string;

}

/**
 * @schema IvsDeletePlaybackKeyPairRequest
 */
export interface IvsDeletePlaybackKeyPairRequest {
  /**
   * @schema IvsDeletePlaybackKeyPairRequest#arn
   */
  readonly arn: string;

}

/**
 * @schema IvsDeletePlaybackKeyPairResponse
 */
export interface IvsDeletePlaybackKeyPairResponse {
}

/**
 * @schema IvsDeleteStreamKeyRequest
 */
export interface IvsDeleteStreamKeyRequest {
  /**
   * @schema IvsDeleteStreamKeyRequest#arn
   */
  readonly arn: string;

}

/**
 * @schema IvsGetChannelRequest
 */
export interface IvsGetChannelRequest {
  /**
   * @schema IvsGetChannelRequest#arn
   */
  readonly arn: string;

}

/**
 * @schema IvsGetChannelResponse
 */
export interface IvsGetChannelResponse {
  /**
   * @schema IvsGetChannelResponse#channel
   */
  readonly channel?: IvsChannel;

}

/**
 * @schema IvsGetPlaybackKeyPairRequest
 */
export interface IvsGetPlaybackKeyPairRequest {
  /**
   * @schema IvsGetPlaybackKeyPairRequest#arn
   */
  readonly arn: string;

}

/**
 * @schema IvsGetPlaybackKeyPairResponse
 */
export interface IvsGetPlaybackKeyPairResponse {
  /**
   * @schema IvsGetPlaybackKeyPairResponse#keyPair
   */
  readonly keyPair?: IvsPlaybackKeyPair;

}

/**
 * @schema IvsGetStreamRequest
 */
export interface IvsGetStreamRequest {
  /**
   * @schema IvsGetStreamRequest#channelArn
   */
  readonly channelArn: string;

}

/**
 * @schema IvsGetStreamResponse
 */
export interface IvsGetStreamResponse {
  /**
   * @schema IvsGetStreamResponse#stream
   */
  readonly stream?: IvsStream;

}

/**
 * @schema IvsGetStreamKeyRequest
 */
export interface IvsGetStreamKeyRequest {
  /**
   * @schema IvsGetStreamKeyRequest#arn
   */
  readonly arn: string;

}

/**
 * @schema IvsGetStreamKeyResponse
 */
export interface IvsGetStreamKeyResponse {
  /**
   * @schema IvsGetStreamKeyResponse#streamKey
   */
  readonly streamKey?: IvsStreamKey;

}

/**
 * @schema IvsImportPlaybackKeyPairRequest
 */
export interface IvsImportPlaybackKeyPairRequest {
  /**
   * @schema IvsImportPlaybackKeyPairRequest#publicKeyMaterial
   */
  readonly publicKeyMaterial: string;

  /**
   * @schema IvsImportPlaybackKeyPairRequest#name
   */
  readonly name?: string;

  /**
   * @schema IvsImportPlaybackKeyPairRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema IvsImportPlaybackKeyPairResponse
 */
export interface IvsImportPlaybackKeyPairResponse {
  /**
   * @schema IvsImportPlaybackKeyPairResponse#keyPair
   */
  readonly keyPair?: IvsPlaybackKeyPair;

}

/**
 * @schema IvsListChannelsRequest
 */
export interface IvsListChannelsRequest {
  /**
   * @schema IvsListChannelsRequest#filterByName
   */
  readonly filterByName?: string;

  /**
   * @schema IvsListChannelsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IvsListChannelsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema IvsListChannelsResponse
 */
export interface IvsListChannelsResponse {
  /**
   * @schema IvsListChannelsResponse#channels
   */
  readonly channels: IvsChannelSummary[];

  /**
   * @schema IvsListChannelsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IvsListPlaybackKeyPairsRequest
 */
export interface IvsListPlaybackKeyPairsRequest {
  /**
   * @schema IvsListPlaybackKeyPairsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IvsListPlaybackKeyPairsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema IvsListPlaybackKeyPairsResponse
 */
export interface IvsListPlaybackKeyPairsResponse {
  /**
   * @schema IvsListPlaybackKeyPairsResponse#keyPairs
   */
  readonly keyPairs: IvsPlaybackKeyPairSummary[];

  /**
   * @schema IvsListPlaybackKeyPairsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IvsListStreamKeysRequest
 */
export interface IvsListStreamKeysRequest {
  /**
   * @schema IvsListStreamKeysRequest#channelArn
   */
  readonly channelArn: string;

  /**
   * @schema IvsListStreamKeysRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IvsListStreamKeysRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema IvsListStreamKeysResponse
 */
export interface IvsListStreamKeysResponse {
  /**
   * @schema IvsListStreamKeysResponse#streamKeys
   */
  readonly streamKeys: IvsStreamKeySummary[];

  /**
   * @schema IvsListStreamKeysResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IvsListStreamsRequest
 */
export interface IvsListStreamsRequest {
  /**
   * @schema IvsListStreamsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IvsListStreamsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema IvsListStreamsResponse
 */
export interface IvsListStreamsResponse {
  /**
   * @schema IvsListStreamsResponse#streams
   */
  readonly streams: IvsStreamSummary[];

  /**
   * @schema IvsListStreamsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IvsListTagsForResourceRequest
 */
export interface IvsListTagsForResourceRequest {
  /**
   * @schema IvsListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema IvsListTagsForResourceRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IvsListTagsForResourceRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema IvsListTagsForResourceResponse
 */
export interface IvsListTagsForResourceResponse {
  /**
   * @schema IvsListTagsForResourceResponse#tags
   */
  readonly tags: { [key: string]: string };

  /**
   * @schema IvsListTagsForResourceResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IvsPutMetadataRequest
 */
export interface IvsPutMetadataRequest {
  /**
   * @schema IvsPutMetadataRequest#channelArn
   */
  readonly channelArn: string;

  /**
   * @schema IvsPutMetadataRequest#metadata
   */
  readonly metadata: string;

}

/**
 * @schema IvsStopStreamRequest
 */
export interface IvsStopStreamRequest {
  /**
   * @schema IvsStopStreamRequest#channelArn
   */
  readonly channelArn: string;

}

/**
 * @schema IvsStopStreamResponse
 */
export interface IvsStopStreamResponse {
}

/**
 * @schema IvsTagResourceRequest
 */
export interface IvsTagResourceRequest {
  /**
   * @schema IvsTagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema IvsTagResourceRequest#tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema IvsTagResourceResponse
 */
export interface IvsTagResourceResponse {
}

/**
 * @schema IvsUntagResourceRequest
 */
export interface IvsUntagResourceRequest {
  /**
   * @schema IvsUntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema IvsUntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema IvsUntagResourceResponse
 */
export interface IvsUntagResourceResponse {
}

/**
 * @schema IvsUpdateChannelRequest
 */
export interface IvsUpdateChannelRequest {
  /**
   * @schema IvsUpdateChannelRequest#arn
   */
  readonly arn: string;

  /**
   * @schema IvsUpdateChannelRequest#name
   */
  readonly name?: string;

  /**
   * @schema IvsUpdateChannelRequest#latencyMode
   */
  readonly latencyMode?: string;

  /**
   * @schema IvsUpdateChannelRequest#type
   */
  readonly type?: string;

  /**
   * @schema IvsUpdateChannelRequest#authorized
   */
  readonly authorized?: boolean;

}

/**
 * @schema IvsUpdateChannelResponse
 */
export interface IvsUpdateChannelResponse {
  /**
   * @schema IvsUpdateChannelResponse#channel
   */
  readonly channel?: IvsChannel;

}

/**
 * @schema IvsChannel
 */
export interface IvsChannel {
  /**
   * @schema IvsChannel#arn
   */
  readonly arn?: string;

  /**
   * @schema IvsChannel#name
   */
  readonly name?: string;

  /**
   * @schema IvsChannel#latencyMode
   */
  readonly latencyMode?: string;

  /**
   * @schema IvsChannel#type
   */
  readonly type?: string;

  /**
   * @schema IvsChannel#ingestEndpoint
   */
  readonly ingestEndpoint?: string;

  /**
   * @schema IvsChannel#playbackUrl
   */
  readonly playbackUrl?: string;

  /**
   * @schema IvsChannel#authorized
   */
  readonly authorized?: boolean;

  /**
   * @schema IvsChannel#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema IvsBatchError
 */
export interface IvsBatchError {
  /**
   * @schema IvsBatchError#arn
   */
  readonly arn?: string;

  /**
   * @schema IvsBatchError#code
   */
  readonly code?: string;

  /**
   * @schema IvsBatchError#message
   */
  readonly message?: string;

}

/**
 * @schema IvsStreamKey
 */
export interface IvsStreamKey {
  /**
   * @schema IvsStreamKey#arn
   */
  readonly arn?: string;

  /**
   * @schema IvsStreamKey#value
   */
  readonly value?: string;

  /**
   * @schema IvsStreamKey#channelArn
   */
  readonly channelArn?: string;

  /**
   * @schema IvsStreamKey#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema IvsPlaybackKeyPair
 */
export interface IvsPlaybackKeyPair {
  /**
   * @schema IvsPlaybackKeyPair#arn
   */
  readonly arn?: string;

  /**
   * @schema IvsPlaybackKeyPair#name
   */
  readonly name?: string;

  /**
   * @schema IvsPlaybackKeyPair#fingerprint
   */
  readonly fingerprint?: string;

  /**
   * @schema IvsPlaybackKeyPair#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema IvsStream
 */
export interface IvsStream {
  /**
   * @schema IvsStream#channelArn
   */
  readonly channelArn?: string;

  /**
   * @schema IvsStream#playbackUrl
   */
  readonly playbackUrl?: string;

  /**
   * @schema IvsStream#startTime
   */
  readonly startTime?: string;

  /**
   * @schema IvsStream#state
   */
  readonly state?: string;

  /**
   * @schema IvsStream#health
   */
  readonly health?: string;

  /**
   * @schema IvsStream#viewerCount
   */
  readonly viewerCount?: number;

}

/**
 * @schema IvsChannelSummary
 */
export interface IvsChannelSummary {
  /**
   * @schema IvsChannelSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema IvsChannelSummary#name
   */
  readonly name?: string;

  /**
   * @schema IvsChannelSummary#latencyMode
   */
  readonly latencyMode?: string;

  /**
   * @schema IvsChannelSummary#authorized
   */
  readonly authorized?: boolean;

  /**
   * @schema IvsChannelSummary#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema IvsPlaybackKeyPairSummary
 */
export interface IvsPlaybackKeyPairSummary {
  /**
   * @schema IvsPlaybackKeyPairSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema IvsPlaybackKeyPairSummary#name
   */
  readonly name?: string;

  /**
   * @schema IvsPlaybackKeyPairSummary#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema IvsStreamKeySummary
 */
export interface IvsStreamKeySummary {
  /**
   * @schema IvsStreamKeySummary#arn
   */
  readonly arn?: string;

  /**
   * @schema IvsStreamKeySummary#channelArn
   */
  readonly channelArn?: string;

  /**
   * @schema IvsStreamKeySummary#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema IvsStreamSummary
 */
export interface IvsStreamSummary {
  /**
   * @schema IvsStreamSummary#channelArn
   */
  readonly channelArn?: string;

  /**
   * @schema IvsStreamSummary#state
   */
  readonly state?: string;

  /**
   * @schema IvsStreamSummary#health
   */
  readonly health?: string;

  /**
   * @schema IvsStreamSummary#viewerCount
   */
  readonly viewerCount?: number;

  /**
   * @schema IvsStreamSummary#startTime
   */
  readonly startTime?: string;

}
