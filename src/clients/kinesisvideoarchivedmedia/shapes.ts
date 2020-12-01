/**
 * @schema GetClipInput
 */
export interface GetClipInput {
  /**
   * @schema GetClipInput#StreamName
   */
  readonly streamName?: string;

  /**
   * @schema GetClipInput#StreamARN
   */
  readonly streamArn?: string;

  /**
   * @schema GetClipInput#ClipFragmentSelector
   */
  readonly clipFragmentSelector: ClipFragmentSelector;

}

/**
 * @schema GetClipOutput
 */
export interface GetClipOutput {
  /**
   * @schema GetClipOutput#ContentType
   */
  readonly contentType?: string;

  /**
   * @schema GetClipOutput#Payload
   */
  readonly payload?: any;

}

/**
 * @schema GetDashStreamingSessionUrlInput
 */
export interface GetDashStreamingSessionUrlInput {
  /**
   * @schema GetDashStreamingSessionUrlInput#StreamName
   */
  readonly streamName?: string;

  /**
   * @schema GetDashStreamingSessionUrlInput#StreamARN
   */
  readonly streamArn?: string;

  /**
   * @schema GetDashStreamingSessionUrlInput#PlaybackMode
   */
  readonly playbackMode?: string;

  /**
   * @schema GetDashStreamingSessionUrlInput#DisplayFragmentTimestamp
   */
  readonly displayFragmentTimestamp?: string;

  /**
   * @schema GetDashStreamingSessionUrlInput#DisplayFragmentNumber
   */
  readonly displayFragmentNumber?: string;

  /**
   * @schema GetDashStreamingSessionUrlInput#DASHFragmentSelector
   */
  readonly dashFragmentSelector?: DashFragmentSelector;

  /**
   * @schema GetDashStreamingSessionUrlInput#Expires
   */
  readonly expires?: number;

  /**
   * @schema GetDashStreamingSessionUrlInput#MaxManifestFragmentResults
   */
  readonly maxManifestFragmentResults?: number;

}

/**
 * @schema GetDashStreamingSessionUrlOutput
 */
export interface GetDashStreamingSessionUrlOutput {
  /**
   * @schema GetDashStreamingSessionUrlOutput#DASHStreamingSessionURL
   */
  readonly dashStreamingSessionUrl?: string;

}

/**
 * @schema GetHlsStreamingSessionUrlInput
 */
export interface GetHlsStreamingSessionUrlInput {
  /**
   * @schema GetHlsStreamingSessionUrlInput#StreamName
   */
  readonly streamName?: string;

  /**
   * @schema GetHlsStreamingSessionUrlInput#StreamARN
   */
  readonly streamArn?: string;

  /**
   * @schema GetHlsStreamingSessionUrlInput#PlaybackMode
   */
  readonly playbackMode?: string;

  /**
   * @schema GetHlsStreamingSessionUrlInput#HLSFragmentSelector
   */
  readonly hlsFragmentSelector?: HlsFragmentSelector;

  /**
   * @schema GetHlsStreamingSessionUrlInput#ContainerFormat
   */
  readonly containerFormat?: string;

  /**
   * @schema GetHlsStreamingSessionUrlInput#DiscontinuityMode
   */
  readonly discontinuityMode?: string;

  /**
   * @schema GetHlsStreamingSessionUrlInput#DisplayFragmentTimestamp
   */
  readonly displayFragmentTimestamp?: string;

  /**
   * @schema GetHlsStreamingSessionUrlInput#Expires
   */
  readonly expires?: number;

  /**
   * @schema GetHlsStreamingSessionUrlInput#MaxMediaPlaylistFragmentResults
   */
  readonly maxMediaPlaylistFragmentResults?: number;

}

/**
 * @schema GetHlsStreamingSessionUrlOutput
 */
export interface GetHlsStreamingSessionUrlOutput {
  /**
   * @schema GetHlsStreamingSessionUrlOutput#HLSStreamingSessionURL
   */
  readonly hlsStreamingSessionUrl?: string;

}

/**
 * @schema GetMediaForFragmentListInput
 */
export interface GetMediaForFragmentListInput {
  /**
   * @schema GetMediaForFragmentListInput#StreamName
   */
  readonly streamName: string;

  /**
   * @schema GetMediaForFragmentListInput#Fragments
   */
  readonly fragments: string[];

}

/**
 * @schema GetMediaForFragmentListOutput
 */
export interface GetMediaForFragmentListOutput {
  /**
   * @schema GetMediaForFragmentListOutput#ContentType
   */
  readonly contentType?: string;

  /**
   * @schema GetMediaForFragmentListOutput#Payload
   */
  readonly payload?: any;

}

/**
 * @schema ListFragmentsInput
 */
export interface ListFragmentsInput {
  /**
   * @schema ListFragmentsInput#StreamName
   */
  readonly streamName: string;

  /**
   * @schema ListFragmentsInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListFragmentsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListFragmentsInput#FragmentSelector
   */
  readonly fragmentSelector?: FragmentSelector;

}

/**
 * @schema ListFragmentsOutput
 */
export interface ListFragmentsOutput {
  /**
   * @schema ListFragmentsOutput#Fragments
   */
  readonly fragments?: Fragment[];

  /**
   * @schema ListFragmentsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ClipFragmentSelector
 */
export interface ClipFragmentSelector {
  /**
   * @schema ClipFragmentSelector#FragmentSelectorType
   */
  readonly fragmentSelectorType: string;

  /**
   * @schema ClipFragmentSelector#TimestampRange
   */
  readonly timestampRange: ClipTimestampRange;

}

/**
 * @schema DashFragmentSelector
 */
export interface DashFragmentSelector {
  /**
   * @schema DashFragmentSelector#FragmentSelectorType
   */
  readonly fragmentSelectorType?: string;

  /**
   * @schema DashFragmentSelector#TimestampRange
   */
  readonly timestampRange?: DashTimestampRange;

}

/**
 * @schema HlsFragmentSelector
 */
export interface HlsFragmentSelector {
  /**
   * @schema HlsFragmentSelector#FragmentSelectorType
   */
  readonly fragmentSelectorType?: string;

  /**
   * @schema HlsFragmentSelector#TimestampRange
   */
  readonly timestampRange?: HlsTimestampRange;

}

/**
 * @schema FragmentSelector
 */
export interface FragmentSelector {
  /**
   * @schema FragmentSelector#FragmentSelectorType
   */
  readonly fragmentSelectorType: string;

  /**
   * @schema FragmentSelector#TimestampRange
   */
  readonly timestampRange: TimestampRange;

}

/**
 * @schema Fragment
 */
export interface Fragment {
  /**
   * @schema Fragment#FragmentNumber
   */
  readonly fragmentNumber?: string;

  /**
   * @schema Fragment#FragmentSizeInBytes
   */
  readonly fragmentSizeInBytes?: number;

  /**
   * @schema Fragment#ProducerTimestamp
   */
  readonly producerTimestamp?: string;

  /**
   * @schema Fragment#ServerTimestamp
   */
  readonly serverTimestamp?: string;

  /**
   * @schema Fragment#FragmentLengthInMilliseconds
   */
  readonly fragmentLengthInMilliseconds?: number;

}

/**
 * @schema ClipTimestampRange
 */
export interface ClipTimestampRange {
  /**
   * @schema ClipTimestampRange#StartTimestamp
   */
  readonly startTimestamp: string;

  /**
   * @schema ClipTimestampRange#EndTimestamp
   */
  readonly endTimestamp: string;

}

/**
 * @schema DashTimestampRange
 */
export interface DashTimestampRange {
  /**
   * @schema DashTimestampRange#StartTimestamp
   */
  readonly startTimestamp?: string;

  /**
   * @schema DashTimestampRange#EndTimestamp
   */
  readonly endTimestamp?: string;

}

/**
 * @schema HlsTimestampRange
 */
export interface HlsTimestampRange {
  /**
   * @schema HlsTimestampRange#StartTimestamp
   */
  readonly startTimestamp?: string;

  /**
   * @schema HlsTimestampRange#EndTimestamp
   */
  readonly endTimestamp?: string;

}

/**
 * @schema TimestampRange
 */
export interface TimestampRange {
  /**
   * @schema TimestampRange#StartTimestamp
   */
  readonly startTimestamp: string;

  /**
   * @schema TimestampRange#EndTimestamp
   */
  readonly endTimestamp: string;

}
