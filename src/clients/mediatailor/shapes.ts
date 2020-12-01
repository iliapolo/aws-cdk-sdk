/**
 * @schema DeletePlaybackConfigurationRequest
 */
export interface DeletePlaybackConfigurationRequest {
  /**
   * @schema DeletePlaybackConfigurationRequest#Name
   */
  readonly name: string;

}

/**
 * @schema DeletePlaybackConfigurationResponse
 */
export interface DeletePlaybackConfigurationResponse {
}

/**
 * @schema GetPlaybackConfigurationRequest
 */
export interface GetPlaybackConfigurationRequest {
  /**
   * @schema GetPlaybackConfigurationRequest#Name
   */
  readonly name: string;

}

/**
 * @schema GetPlaybackConfigurationResponse
 */
export interface GetPlaybackConfigurationResponse {
  /**
   * @schema GetPlaybackConfigurationResponse#AdDecisionServerUrl
   */
  readonly adDecisionServerUrl?: string;

  /**
   * @schema GetPlaybackConfigurationResponse#AvailSuppression
   */
  readonly availSuppression?: AvailSuppression;

  /**
   * @schema GetPlaybackConfigurationResponse#Bumper
   */
  readonly bumper?: Bumper;

  /**
   * @schema GetPlaybackConfigurationResponse#CdnConfiguration
   */
  readonly cdnConfiguration?: CdnConfiguration;

  /**
   * @schema GetPlaybackConfigurationResponse#DashConfiguration
   */
  readonly dashConfiguration?: DashConfiguration;

  /**
   * @schema GetPlaybackConfigurationResponse#HlsConfiguration
   */
  readonly hlsConfiguration?: HlsConfiguration;

  /**
   * @schema GetPlaybackConfigurationResponse#LivePreRollConfiguration
   */
  readonly livePreRollConfiguration?: LivePreRollConfiguration;

  /**
   * @schema GetPlaybackConfigurationResponse#ManifestProcessingRules
   */
  readonly manifestProcessingRules?: ManifestProcessingRules;

  /**
   * @schema GetPlaybackConfigurationResponse#Name
   */
  readonly name?: string;

  /**
   * @schema GetPlaybackConfigurationResponse#PersonalizationThresholdSeconds
   */
  readonly personalizationThresholdSeconds?: number;

  /**
   * @schema GetPlaybackConfigurationResponse#PlaybackConfigurationArn
   */
  readonly playbackConfigurationArn?: string;

  /**
   * @schema GetPlaybackConfigurationResponse#PlaybackEndpointPrefix
   */
  readonly playbackEndpointPrefix?: string;

  /**
   * @schema GetPlaybackConfigurationResponse#SessionInitializationEndpointPrefix
   */
  readonly sessionInitializationEndpointPrefix?: string;

  /**
   * @schema GetPlaybackConfigurationResponse#SlateAdUrl
   */
  readonly slateAdUrl?: string;

  /**
   * @schema GetPlaybackConfigurationResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema GetPlaybackConfigurationResponse#TranscodeProfileName
   */
  readonly transcodeProfileName?: string;

  /**
   * @schema GetPlaybackConfigurationResponse#VideoContentSourceUrl
   */
  readonly videoContentSourceUrl?: string;

}

/**
 * @schema ListPlaybackConfigurationsRequest
 */
export interface ListPlaybackConfigurationsRequest {
  /**
   * @schema ListPlaybackConfigurationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListPlaybackConfigurationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListPlaybackConfigurationsResponse
 */
export interface ListPlaybackConfigurationsResponse {
  /**
   * @schema ListPlaybackConfigurationsResponse#Items
   */
  readonly items?: PlaybackConfiguration[];

  /**
   * @schema ListPlaybackConfigurationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * @schema ListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema ListTagsForResourceResponse
 */
export interface ListTagsForResourceResponse {
  /**
   * @schema ListTagsForResourceResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema PutPlaybackConfigurationRequest
 */
export interface PutPlaybackConfigurationRequest {
  /**
   * @schema PutPlaybackConfigurationRequest#AdDecisionServerUrl
   */
  readonly adDecisionServerUrl?: string;

  /**
   * @schema PutPlaybackConfigurationRequest#AvailSuppression
   */
  readonly availSuppression?: AvailSuppression;

  /**
   * @schema PutPlaybackConfigurationRequest#Bumper
   */
  readonly bumper?: Bumper;

  /**
   * @schema PutPlaybackConfigurationRequest#CdnConfiguration
   */
  readonly cdnConfiguration?: CdnConfiguration;

  /**
   * @schema PutPlaybackConfigurationRequest#DashConfiguration
   */
  readonly dashConfiguration?: DashConfigurationForPut;

  /**
   * @schema PutPlaybackConfigurationRequest#LivePreRollConfiguration
   */
  readonly livePreRollConfiguration?: LivePreRollConfiguration;

  /**
   * @schema PutPlaybackConfigurationRequest#ManifestProcessingRules
   */
  readonly manifestProcessingRules?: ManifestProcessingRules;

  /**
   * @schema PutPlaybackConfigurationRequest#Name
   */
  readonly name?: string;

  /**
   * @schema PutPlaybackConfigurationRequest#PersonalizationThresholdSeconds
   */
  readonly personalizationThresholdSeconds?: number;

  /**
   * @schema PutPlaybackConfigurationRequest#SlateAdUrl
   */
  readonly slateAdUrl?: string;

  /**
   * @schema PutPlaybackConfigurationRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema PutPlaybackConfigurationRequest#TranscodeProfileName
   */
  readonly transcodeProfileName?: string;

  /**
   * @schema PutPlaybackConfigurationRequest#VideoContentSourceUrl
   */
  readonly videoContentSourceUrl?: string;

}

/**
 * @schema PutPlaybackConfigurationResponse
 */
export interface PutPlaybackConfigurationResponse {
  /**
   * @schema PutPlaybackConfigurationResponse#AdDecisionServerUrl
   */
  readonly adDecisionServerUrl?: string;

  /**
   * @schema PutPlaybackConfigurationResponse#AvailSuppression
   */
  readonly availSuppression?: AvailSuppression;

  /**
   * @schema PutPlaybackConfigurationResponse#Bumper
   */
  readonly bumper?: Bumper;

  /**
   * @schema PutPlaybackConfigurationResponse#CdnConfiguration
   */
  readonly cdnConfiguration?: CdnConfiguration;

  /**
   * @schema PutPlaybackConfigurationResponse#DashConfiguration
   */
  readonly dashConfiguration?: DashConfiguration;

  /**
   * @schema PutPlaybackConfigurationResponse#HlsConfiguration
   */
  readonly hlsConfiguration?: HlsConfiguration;

  /**
   * @schema PutPlaybackConfigurationResponse#LivePreRollConfiguration
   */
  readonly livePreRollConfiguration?: LivePreRollConfiguration;

  /**
   * @schema PutPlaybackConfigurationResponse#ManifestProcessingRules
   */
  readonly manifestProcessingRules?: ManifestProcessingRules;

  /**
   * @schema PutPlaybackConfigurationResponse#Name
   */
  readonly name?: string;

  /**
   * @schema PutPlaybackConfigurationResponse#PersonalizationThresholdSeconds
   */
  readonly personalizationThresholdSeconds?: number;

  /**
   * @schema PutPlaybackConfigurationResponse#PlaybackConfigurationArn
   */
  readonly playbackConfigurationArn?: string;

  /**
   * @schema PutPlaybackConfigurationResponse#PlaybackEndpointPrefix
   */
  readonly playbackEndpointPrefix?: string;

  /**
   * @schema PutPlaybackConfigurationResponse#SessionInitializationEndpointPrefix
   */
  readonly sessionInitializationEndpointPrefix?: string;

  /**
   * @schema PutPlaybackConfigurationResponse#SlateAdUrl
   */
  readonly slateAdUrl?: string;

  /**
   * @schema PutPlaybackConfigurationResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema PutPlaybackConfigurationResponse#TranscodeProfileName
   */
  readonly transcodeProfileName?: string;

  /**
   * @schema PutPlaybackConfigurationResponse#VideoContentSourceUrl
   */
  readonly videoContentSourceUrl?: string;

}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema TagResourceRequest#Tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema UntagResourceRequest
 */
export interface UntagResourceRequest {
  /**
   * @schema UntagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema UntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema AvailSuppression
 */
export interface AvailSuppression {
  /**
   * @schema AvailSuppression#Mode
   */
  readonly mode?: string;

  /**
   * @schema AvailSuppression#Value
   */
  readonly value?: string;

}

/**
 * @schema Bumper
 */
export interface Bumper {
  /**
   * @schema Bumper#EndUrl
   */
  readonly endUrl?: string;

  /**
   * @schema Bumper#StartUrl
   */
  readonly startUrl?: string;

}

/**
 * @schema CdnConfiguration
 */
export interface CdnConfiguration {
  /**
   * @schema CdnConfiguration#AdSegmentUrlPrefix
   */
  readonly adSegmentUrlPrefix?: string;

  /**
   * @schema CdnConfiguration#ContentSegmentUrlPrefix
   */
  readonly contentSegmentUrlPrefix?: string;

}

/**
 * @schema DashConfiguration
 */
export interface DashConfiguration {
  /**
   * @schema DashConfiguration#ManifestEndpointPrefix
   */
  readonly manifestEndpointPrefix?: string;

  /**
   * @schema DashConfiguration#MpdLocation
   */
  readonly mpdLocation?: string;

  /**
   * @schema DashConfiguration#OriginManifestType
   */
  readonly originManifestType?: string;

}

/**
 * @schema HlsConfiguration
 */
export interface HlsConfiguration {
  /**
   * @schema HlsConfiguration#ManifestEndpointPrefix
   */
  readonly manifestEndpointPrefix?: string;

}

/**
 * @schema LivePreRollConfiguration
 */
export interface LivePreRollConfiguration {
  /**
   * @schema LivePreRollConfiguration#AdDecisionServerUrl
   */
  readonly adDecisionServerUrl?: string;

  /**
   * @schema LivePreRollConfiguration#MaxDurationSeconds
   */
  readonly maxDurationSeconds?: number;

}

/**
 * @schema ManifestProcessingRules
 */
export interface ManifestProcessingRules {
  /**
   * @schema ManifestProcessingRules#AdMarkerPassthrough
   */
  readonly adMarkerPassthrough?: AdMarkerPassthrough;

}

/**
 * @schema PlaybackConfiguration
 */
export interface PlaybackConfiguration {
  /**
   * @schema PlaybackConfiguration#AdDecisionServerUrl
   */
  readonly adDecisionServerUrl?: string;

  /**
   * @schema PlaybackConfiguration#AvailSuppression
   */
  readonly availSuppression?: AvailSuppression;

  /**
   * @schema PlaybackConfiguration#Bumper
   */
  readonly bumper?: Bumper;

  /**
   * @schema PlaybackConfiguration#CdnConfiguration
   */
  readonly cdnConfiguration?: CdnConfiguration;

  /**
   * @schema PlaybackConfiguration#DashConfiguration
   */
  readonly dashConfiguration?: DashConfiguration;

  /**
   * @schema PlaybackConfiguration#HlsConfiguration
   */
  readonly hlsConfiguration?: HlsConfiguration;

  /**
   * @schema PlaybackConfiguration#ManifestProcessingRules
   */
  readonly manifestProcessingRules?: ManifestProcessingRules;

  /**
   * @schema PlaybackConfiguration#Name
   */
  readonly name?: string;

  /**
   * @schema PlaybackConfiguration#PlaybackConfigurationArn
   */
  readonly playbackConfigurationArn?: string;

  /**
   * @schema PlaybackConfiguration#PlaybackEndpointPrefix
   */
  readonly playbackEndpointPrefix?: string;

  /**
   * @schema PlaybackConfiguration#SessionInitializationEndpointPrefix
   */
  readonly sessionInitializationEndpointPrefix?: string;

  /**
   * @schema PlaybackConfiguration#SlateAdUrl
   */
  readonly slateAdUrl?: string;

  /**
   * @schema PlaybackConfiguration#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema PlaybackConfiguration#TranscodeProfileName
   */
  readonly transcodeProfileName?: string;

  /**
   * @schema PlaybackConfiguration#PersonalizationThresholdSeconds
   */
  readonly personalizationThresholdSeconds?: number;

  /**
   * @schema PlaybackConfiguration#VideoContentSourceUrl
   */
  readonly videoContentSourceUrl?: string;

}

/**
 * @schema DashConfigurationForPut
 */
export interface DashConfigurationForPut {
  /**
   * @schema DashConfigurationForPut#MpdLocation
   */
  readonly mpdLocation?: string;

  /**
   * @schema DashConfigurationForPut#OriginManifestType
   */
  readonly originManifestType?: string;

}

/**
 * @schema AdMarkerPassthrough
 */
export interface AdMarkerPassthrough {
  /**
   * @schema AdMarkerPassthrough#Enabled
   */
  readonly enabled?: boolean;

}
