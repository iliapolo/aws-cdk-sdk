/**
 * @schema MediaTailorDeletePlaybackConfigurationRequest
 */
export interface MediaTailorDeletePlaybackConfigurationRequest {
  /**
   * @schema MediaTailorDeletePlaybackConfigurationRequest#Name
   */
  readonly name: string;

}

/**
 * @schema MediaTailorDeletePlaybackConfigurationResponse
 */
export interface MediaTailorDeletePlaybackConfigurationResponse {
}

/**
 * @schema MediaTailorGetPlaybackConfigurationRequest
 */
export interface MediaTailorGetPlaybackConfigurationRequest {
  /**
   * @schema MediaTailorGetPlaybackConfigurationRequest#Name
   */
  readonly name: string;

}

/**
 * @schema MediaTailorGetPlaybackConfigurationResponse
 */
export interface MediaTailorGetPlaybackConfigurationResponse {
  /**
   * @schema MediaTailorGetPlaybackConfigurationResponse#AdDecisionServerUrl
   */
  readonly adDecisionServerUrl?: string;

  /**
   * @schema MediaTailorGetPlaybackConfigurationResponse#AvailSuppression
   */
  readonly availSuppression?: MediaTailorAvailSuppression;

  /**
   * @schema MediaTailorGetPlaybackConfigurationResponse#Bumper
   */
  readonly bumper?: MediaTailorBumper;

  /**
   * @schema MediaTailorGetPlaybackConfigurationResponse#CdnConfiguration
   */
  readonly cdnConfiguration?: MediaTailorCdnConfiguration;

  /**
   * @schema MediaTailorGetPlaybackConfigurationResponse#DashConfiguration
   */
  readonly dashConfiguration?: MediaTailorDashConfiguration;

  /**
   * @schema MediaTailorGetPlaybackConfigurationResponse#HlsConfiguration
   */
  readonly hlsConfiguration?: MediaTailorHlsConfiguration;

  /**
   * @schema MediaTailorGetPlaybackConfigurationResponse#LivePreRollConfiguration
   */
  readonly livePreRollConfiguration?: MediaTailorLivePreRollConfiguration;

  /**
   * @schema MediaTailorGetPlaybackConfigurationResponse#ManifestProcessingRules
   */
  readonly manifestProcessingRules?: MediaTailorManifestProcessingRules;

  /**
   * @schema MediaTailorGetPlaybackConfigurationResponse#Name
   */
  readonly name?: string;

  /**
   * @schema MediaTailorGetPlaybackConfigurationResponse#PersonalizationThresholdSeconds
   */
  readonly personalizationThresholdSeconds?: number;

  /**
   * @schema MediaTailorGetPlaybackConfigurationResponse#PlaybackConfigurationArn
   */
  readonly playbackConfigurationArn?: string;

  /**
   * @schema MediaTailorGetPlaybackConfigurationResponse#PlaybackEndpointPrefix
   */
  readonly playbackEndpointPrefix?: string;

  /**
   * @schema MediaTailorGetPlaybackConfigurationResponse#SessionInitializationEndpointPrefix
   */
  readonly sessionInitializationEndpointPrefix?: string;

  /**
   * @schema MediaTailorGetPlaybackConfigurationResponse#SlateAdUrl
   */
  readonly slateAdUrl?: string;

  /**
   * @schema MediaTailorGetPlaybackConfigurationResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema MediaTailorGetPlaybackConfigurationResponse#TranscodeProfileName
   */
  readonly transcodeProfileName?: string;

  /**
   * @schema MediaTailorGetPlaybackConfigurationResponse#VideoContentSourceUrl
   */
  readonly videoContentSourceUrl?: string;

}

/**
 * @schema MediaTailorListPlaybackConfigurationsRequest
 */
export interface MediaTailorListPlaybackConfigurationsRequest {
  /**
   * @schema MediaTailorListPlaybackConfigurationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MediaTailorListPlaybackConfigurationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MediaTailorListPlaybackConfigurationsResponse
 */
export interface MediaTailorListPlaybackConfigurationsResponse {
  /**
   * @schema MediaTailorListPlaybackConfigurationsResponse#Items
   */
  readonly items?: MediaTailorPlaybackConfiguration[];

  /**
   * @schema MediaTailorListPlaybackConfigurationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MediaTailorListTagsForResourceRequest
 */
export interface MediaTailorListTagsForResourceRequest {
  /**
   * @schema MediaTailorListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema MediaTailorListTagsForResourceResponse
 */
export interface MediaTailorListTagsForResourceResponse {
  /**
   * @schema MediaTailorListTagsForResourceResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema MediaTailorPutPlaybackConfigurationRequest
 */
export interface MediaTailorPutPlaybackConfigurationRequest {
  /**
   * @schema MediaTailorPutPlaybackConfigurationRequest#AdDecisionServerUrl
   */
  readonly adDecisionServerUrl?: string;

  /**
   * @schema MediaTailorPutPlaybackConfigurationRequest#AvailSuppression
   */
  readonly availSuppression?: MediaTailorAvailSuppression;

  /**
   * @schema MediaTailorPutPlaybackConfigurationRequest#Bumper
   */
  readonly bumper?: MediaTailorBumper;

  /**
   * @schema MediaTailorPutPlaybackConfigurationRequest#CdnConfiguration
   */
  readonly cdnConfiguration?: MediaTailorCdnConfiguration;

  /**
   * @schema MediaTailorPutPlaybackConfigurationRequest#DashConfiguration
   */
  readonly dashConfiguration?: MediaTailorDashConfigurationForPut;

  /**
   * @schema MediaTailorPutPlaybackConfigurationRequest#LivePreRollConfiguration
   */
  readonly livePreRollConfiguration?: MediaTailorLivePreRollConfiguration;

  /**
   * @schema MediaTailorPutPlaybackConfigurationRequest#ManifestProcessingRules
   */
  readonly manifestProcessingRules?: MediaTailorManifestProcessingRules;

  /**
   * @schema MediaTailorPutPlaybackConfigurationRequest#Name
   */
  readonly name?: string;

  /**
   * @schema MediaTailorPutPlaybackConfigurationRequest#PersonalizationThresholdSeconds
   */
  readonly personalizationThresholdSeconds?: number;

  /**
   * @schema MediaTailorPutPlaybackConfigurationRequest#SlateAdUrl
   */
  readonly slateAdUrl?: string;

  /**
   * @schema MediaTailorPutPlaybackConfigurationRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema MediaTailorPutPlaybackConfigurationRequest#TranscodeProfileName
   */
  readonly transcodeProfileName?: string;

  /**
   * @schema MediaTailorPutPlaybackConfigurationRequest#VideoContentSourceUrl
   */
  readonly videoContentSourceUrl?: string;

}

/**
 * @schema MediaTailorPutPlaybackConfigurationResponse
 */
export interface MediaTailorPutPlaybackConfigurationResponse {
  /**
   * @schema MediaTailorPutPlaybackConfigurationResponse#AdDecisionServerUrl
   */
  readonly adDecisionServerUrl?: string;

  /**
   * @schema MediaTailorPutPlaybackConfigurationResponse#AvailSuppression
   */
  readonly availSuppression?: MediaTailorAvailSuppression;

  /**
   * @schema MediaTailorPutPlaybackConfigurationResponse#Bumper
   */
  readonly bumper?: MediaTailorBumper;

  /**
   * @schema MediaTailorPutPlaybackConfigurationResponse#CdnConfiguration
   */
  readonly cdnConfiguration?: MediaTailorCdnConfiguration;

  /**
   * @schema MediaTailorPutPlaybackConfigurationResponse#DashConfiguration
   */
  readonly dashConfiguration?: MediaTailorDashConfiguration;

  /**
   * @schema MediaTailorPutPlaybackConfigurationResponse#HlsConfiguration
   */
  readonly hlsConfiguration?: MediaTailorHlsConfiguration;

  /**
   * @schema MediaTailorPutPlaybackConfigurationResponse#LivePreRollConfiguration
   */
  readonly livePreRollConfiguration?: MediaTailorLivePreRollConfiguration;

  /**
   * @schema MediaTailorPutPlaybackConfigurationResponse#ManifestProcessingRules
   */
  readonly manifestProcessingRules?: MediaTailorManifestProcessingRules;

  /**
   * @schema MediaTailorPutPlaybackConfigurationResponse#Name
   */
  readonly name?: string;

  /**
   * @schema MediaTailorPutPlaybackConfigurationResponse#PersonalizationThresholdSeconds
   */
  readonly personalizationThresholdSeconds?: number;

  /**
   * @schema MediaTailorPutPlaybackConfigurationResponse#PlaybackConfigurationArn
   */
  readonly playbackConfigurationArn?: string;

  /**
   * @schema MediaTailorPutPlaybackConfigurationResponse#PlaybackEndpointPrefix
   */
  readonly playbackEndpointPrefix?: string;

  /**
   * @schema MediaTailorPutPlaybackConfigurationResponse#SessionInitializationEndpointPrefix
   */
  readonly sessionInitializationEndpointPrefix?: string;

  /**
   * @schema MediaTailorPutPlaybackConfigurationResponse#SlateAdUrl
   */
  readonly slateAdUrl?: string;

  /**
   * @schema MediaTailorPutPlaybackConfigurationResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema MediaTailorPutPlaybackConfigurationResponse#TranscodeProfileName
   */
  readonly transcodeProfileName?: string;

  /**
   * @schema MediaTailorPutPlaybackConfigurationResponse#VideoContentSourceUrl
   */
  readonly videoContentSourceUrl?: string;

}

/**
 * @schema MediaTailorTagResourceRequest
 */
export interface MediaTailorTagResourceRequest {
  /**
   * @schema MediaTailorTagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema MediaTailorTagResourceRequest#Tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema MediaTailorUntagResourceRequest
 */
export interface MediaTailorUntagResourceRequest {
  /**
   * @schema MediaTailorUntagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema MediaTailorUntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema MediaTailorAvailSuppression
 */
export interface MediaTailorAvailSuppression {
  /**
   * @schema MediaTailorAvailSuppression#Mode
   */
  readonly mode?: string;

  /**
   * @schema MediaTailorAvailSuppression#Value
   */
  readonly value?: string;

}

/**
 * @schema MediaTailorBumper
 */
export interface MediaTailorBumper {
  /**
   * @schema MediaTailorBumper#EndUrl
   */
  readonly endUrl?: string;

  /**
   * @schema MediaTailorBumper#StartUrl
   */
  readonly startUrl?: string;

}

/**
 * @schema MediaTailorCdnConfiguration
 */
export interface MediaTailorCdnConfiguration {
  /**
   * @schema MediaTailorCdnConfiguration#AdSegmentUrlPrefix
   */
  readonly adSegmentUrlPrefix?: string;

  /**
   * @schema MediaTailorCdnConfiguration#ContentSegmentUrlPrefix
   */
  readonly contentSegmentUrlPrefix?: string;

}

/**
 * @schema MediaTailorDashConfiguration
 */
export interface MediaTailorDashConfiguration {
  /**
   * @schema MediaTailorDashConfiguration#ManifestEndpointPrefix
   */
  readonly manifestEndpointPrefix?: string;

  /**
   * @schema MediaTailorDashConfiguration#MpdLocation
   */
  readonly mpdLocation?: string;

  /**
   * @schema MediaTailorDashConfiguration#OriginManifestType
   */
  readonly originManifestType?: string;

}

/**
 * @schema MediaTailorHlsConfiguration
 */
export interface MediaTailorHlsConfiguration {
  /**
   * @schema MediaTailorHlsConfiguration#ManifestEndpointPrefix
   */
  readonly manifestEndpointPrefix?: string;

}

/**
 * @schema MediaTailorLivePreRollConfiguration
 */
export interface MediaTailorLivePreRollConfiguration {
  /**
   * @schema MediaTailorLivePreRollConfiguration#AdDecisionServerUrl
   */
  readonly adDecisionServerUrl?: string;

  /**
   * @schema MediaTailorLivePreRollConfiguration#MaxDurationSeconds
   */
  readonly maxDurationSeconds?: number;

}

/**
 * @schema MediaTailorManifestProcessingRules
 */
export interface MediaTailorManifestProcessingRules {
  /**
   * @schema MediaTailorManifestProcessingRules#AdMarkerPassthrough
   */
  readonly adMarkerPassthrough?: MediaTailorAdMarkerPassthrough;

}

/**
 * @schema MediaTailorPlaybackConfiguration
 */
export interface MediaTailorPlaybackConfiguration {
  /**
   * @schema MediaTailorPlaybackConfiguration#AdDecisionServerUrl
   */
  readonly adDecisionServerUrl?: string;

  /**
   * @schema MediaTailorPlaybackConfiguration#AvailSuppression
   */
  readonly availSuppression?: MediaTailorAvailSuppression;

  /**
   * @schema MediaTailorPlaybackConfiguration#Bumper
   */
  readonly bumper?: MediaTailorBumper;

  /**
   * @schema MediaTailorPlaybackConfiguration#CdnConfiguration
   */
  readonly cdnConfiguration?: MediaTailorCdnConfiguration;

  /**
   * @schema MediaTailorPlaybackConfiguration#DashConfiguration
   */
  readonly dashConfiguration?: MediaTailorDashConfiguration;

  /**
   * @schema MediaTailorPlaybackConfiguration#HlsConfiguration
   */
  readonly hlsConfiguration?: MediaTailorHlsConfiguration;

  /**
   * @schema MediaTailorPlaybackConfiguration#ManifestProcessingRules
   */
  readonly manifestProcessingRules?: MediaTailorManifestProcessingRules;

  /**
   * @schema MediaTailorPlaybackConfiguration#Name
   */
  readonly name?: string;

  /**
   * @schema MediaTailorPlaybackConfiguration#PlaybackConfigurationArn
   */
  readonly playbackConfigurationArn?: string;

  /**
   * @schema MediaTailorPlaybackConfiguration#PlaybackEndpointPrefix
   */
  readonly playbackEndpointPrefix?: string;

  /**
   * @schema MediaTailorPlaybackConfiguration#SessionInitializationEndpointPrefix
   */
  readonly sessionInitializationEndpointPrefix?: string;

  /**
   * @schema MediaTailorPlaybackConfiguration#SlateAdUrl
   */
  readonly slateAdUrl?: string;

  /**
   * @schema MediaTailorPlaybackConfiguration#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema MediaTailorPlaybackConfiguration#TranscodeProfileName
   */
  readonly transcodeProfileName?: string;

  /**
   * @schema MediaTailorPlaybackConfiguration#PersonalizationThresholdSeconds
   */
  readonly personalizationThresholdSeconds?: number;

  /**
   * @schema MediaTailorPlaybackConfiguration#VideoContentSourceUrl
   */
  readonly videoContentSourceUrl?: string;

}

/**
 * @schema MediaTailorDashConfigurationForPut
 */
export interface MediaTailorDashConfigurationForPut {
  /**
   * @schema MediaTailorDashConfigurationForPut#MpdLocation
   */
  readonly mpdLocation?: string;

  /**
   * @schema MediaTailorDashConfigurationForPut#OriginManifestType
   */
  readonly originManifestType?: string;

}

/**
 * @schema MediaTailorAdMarkerPassthrough
 */
export interface MediaTailorAdMarkerPassthrough {
  /**
   * @schema MediaTailorAdMarkerPassthrough#Enabled
   */
  readonly enabled?: boolean;

}
