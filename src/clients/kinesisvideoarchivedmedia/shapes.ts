/**
 * @schema KinesisVideoArchivedMediaGetClipInput
 */
export interface KinesisVideoArchivedMediaGetClipInput {
  /**
   * @schema KinesisVideoArchivedMediaGetClipInput#StreamName
   */
  readonly streamName?: string;

  /**
   * @schema KinesisVideoArchivedMediaGetClipInput#StreamARN
   */
  readonly streamArn?: string;

  /**
   * @schema KinesisVideoArchivedMediaGetClipInput#ClipFragmentSelector
   */
  readonly clipFragmentSelector: KinesisVideoArchivedMediaClipFragmentSelector;

}

/**
 * @schema KinesisVideoArchivedMediaGetClipOutput
 */
export interface KinesisVideoArchivedMediaGetClipOutput {
  /**
   * @schema KinesisVideoArchivedMediaGetClipOutput#ContentType
   */
  readonly contentType?: string;

  /**
   * @schema KinesisVideoArchivedMediaGetClipOutput#Payload
   */
  readonly payload?: any;

}

/**
 * @schema KinesisVideoArchivedMediaGetDashStreamingSessionUrlInput
 */
export interface KinesisVideoArchivedMediaGetDashStreamingSessionUrlInput {
  /**
   * @schema KinesisVideoArchivedMediaGetDashStreamingSessionUrlInput#StreamName
   */
  readonly streamName?: string;

  /**
   * @schema KinesisVideoArchivedMediaGetDashStreamingSessionUrlInput#StreamARN
   */
  readonly streamArn?: string;

  /**
   * @schema KinesisVideoArchivedMediaGetDashStreamingSessionUrlInput#PlaybackMode
   */
  readonly playbackMode?: string;

  /**
   * @schema KinesisVideoArchivedMediaGetDashStreamingSessionUrlInput#DisplayFragmentTimestamp
   */
  readonly displayFragmentTimestamp?: string;

  /**
   * @schema KinesisVideoArchivedMediaGetDashStreamingSessionUrlInput#DisplayFragmentNumber
   */
  readonly displayFragmentNumber?: string;

  /**
   * @schema KinesisVideoArchivedMediaGetDashStreamingSessionUrlInput#DASHFragmentSelector
   */
  readonly dashFragmentSelector?: KinesisVideoArchivedMediaDashFragmentSelector;

  /**
   * @schema KinesisVideoArchivedMediaGetDashStreamingSessionUrlInput#Expires
   */
  readonly expires?: number;

  /**
   * @schema KinesisVideoArchivedMediaGetDashStreamingSessionUrlInput#MaxManifestFragmentResults
   */
  readonly maxManifestFragmentResults?: number;

}

/**
 * @schema KinesisVideoArchivedMediaGetDashStreamingSessionUrlOutput
 */
export interface KinesisVideoArchivedMediaGetDashStreamingSessionUrlOutput {
  /**
   * @schema KinesisVideoArchivedMediaGetDashStreamingSessionUrlOutput#DASHStreamingSessionURL
   */
  readonly dashStreamingSessionUrl?: string;

}

/**
 * @schema KinesisVideoArchivedMediaGetHlsStreamingSessionUrlInput
 */
export interface KinesisVideoArchivedMediaGetHlsStreamingSessionUrlInput {
  /**
   * @schema KinesisVideoArchivedMediaGetHlsStreamingSessionUrlInput#StreamName
   */
  readonly streamName?: string;

  /**
   * @schema KinesisVideoArchivedMediaGetHlsStreamingSessionUrlInput#StreamARN
   */
  readonly streamArn?: string;

  /**
   * @schema KinesisVideoArchivedMediaGetHlsStreamingSessionUrlInput#PlaybackMode
   */
  readonly playbackMode?: string;

  /**
   * @schema KinesisVideoArchivedMediaGetHlsStreamingSessionUrlInput#HLSFragmentSelector
   */
  readonly hlsFragmentSelector?: KinesisVideoArchivedMediaHlsFragmentSelector;

  /**
   * @schema KinesisVideoArchivedMediaGetHlsStreamingSessionUrlInput#ContainerFormat
   */
  readonly containerFormat?: string;

  /**
   * @schema KinesisVideoArchivedMediaGetHlsStreamingSessionUrlInput#DiscontinuityMode
   */
  readonly discontinuityMode?: string;

  /**
   * @schema KinesisVideoArchivedMediaGetHlsStreamingSessionUrlInput#DisplayFragmentTimestamp
   */
  readonly displayFragmentTimestamp?: string;

  /**
   * @schema KinesisVideoArchivedMediaGetHlsStreamingSessionUrlInput#Expires
   */
  readonly expires?: number;

  /**
   * @schema KinesisVideoArchivedMediaGetHlsStreamingSessionUrlInput#MaxMediaPlaylistFragmentResults
   */
  readonly maxMediaPlaylistFragmentResults?: number;

}

/**
 * @schema KinesisVideoArchivedMediaGetHlsStreamingSessionUrlOutput
 */
export interface KinesisVideoArchivedMediaGetHlsStreamingSessionUrlOutput {
  /**
   * @schema KinesisVideoArchivedMediaGetHlsStreamingSessionUrlOutput#HLSStreamingSessionURL
   */
  readonly hlsStreamingSessionUrl?: string;

}

/**
 * @schema KinesisVideoArchivedMediaGetMediaForFragmentListInput
 */
export interface KinesisVideoArchivedMediaGetMediaForFragmentListInput {
  /**
   * @schema KinesisVideoArchivedMediaGetMediaForFragmentListInput#StreamName
   */
  readonly streamName: string;

  /**
   * @schema KinesisVideoArchivedMediaGetMediaForFragmentListInput#Fragments
   */
  readonly fragments: string[];

}

/**
 * @schema KinesisVideoArchivedMediaGetMediaForFragmentListOutput
 */
export interface KinesisVideoArchivedMediaGetMediaForFragmentListOutput {
  /**
   * @schema KinesisVideoArchivedMediaGetMediaForFragmentListOutput#ContentType
   */
  readonly contentType?: string;

  /**
   * @schema KinesisVideoArchivedMediaGetMediaForFragmentListOutput#Payload
   */
  readonly payload?: any;

}

/**
 * @schema KinesisVideoArchivedMediaListFragmentsInput
 */
export interface KinesisVideoArchivedMediaListFragmentsInput {
  /**
   * @schema KinesisVideoArchivedMediaListFragmentsInput#StreamName
   */
  readonly streamName: string;

  /**
   * @schema KinesisVideoArchivedMediaListFragmentsInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema KinesisVideoArchivedMediaListFragmentsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema KinesisVideoArchivedMediaListFragmentsInput#FragmentSelector
   */
  readonly fragmentSelector?: KinesisVideoArchivedMediaFragmentSelector;

}

/**
 * @schema KinesisVideoArchivedMediaListFragmentsOutput
 */
export interface KinesisVideoArchivedMediaListFragmentsOutput {
  /**
   * @schema KinesisVideoArchivedMediaListFragmentsOutput#Fragments
   */
  readonly fragments?: KinesisVideoArchivedMediaFragment[];

  /**
   * @schema KinesisVideoArchivedMediaListFragmentsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema KinesisVideoArchivedMediaClipFragmentSelector
 */
export interface KinesisVideoArchivedMediaClipFragmentSelector {
  /**
   * @schema KinesisVideoArchivedMediaClipFragmentSelector#FragmentSelectorType
   */
  readonly fragmentSelectorType: string;

  /**
   * @schema KinesisVideoArchivedMediaClipFragmentSelector#TimestampRange
   */
  readonly timestampRange: KinesisVideoArchivedMediaClipTimestampRange;

}

/**
 * @schema KinesisVideoArchivedMediaDashFragmentSelector
 */
export interface KinesisVideoArchivedMediaDashFragmentSelector {
  /**
   * @schema KinesisVideoArchivedMediaDashFragmentSelector#FragmentSelectorType
   */
  readonly fragmentSelectorType?: string;

  /**
   * @schema KinesisVideoArchivedMediaDashFragmentSelector#TimestampRange
   */
  readonly timestampRange?: KinesisVideoArchivedMediaDashTimestampRange;

}

/**
 * @schema KinesisVideoArchivedMediaHlsFragmentSelector
 */
export interface KinesisVideoArchivedMediaHlsFragmentSelector {
  /**
   * @schema KinesisVideoArchivedMediaHlsFragmentSelector#FragmentSelectorType
   */
  readonly fragmentSelectorType?: string;

  /**
   * @schema KinesisVideoArchivedMediaHlsFragmentSelector#TimestampRange
   */
  readonly timestampRange?: KinesisVideoArchivedMediaHlsTimestampRange;

}

/**
 * @schema KinesisVideoArchivedMediaFragmentSelector
 */
export interface KinesisVideoArchivedMediaFragmentSelector {
  /**
   * @schema KinesisVideoArchivedMediaFragmentSelector#FragmentSelectorType
   */
  readonly fragmentSelectorType: string;

  /**
   * @schema KinesisVideoArchivedMediaFragmentSelector#TimestampRange
   */
  readonly timestampRange: KinesisVideoArchivedMediaTimestampRange;

}

/**
 * @schema KinesisVideoArchivedMediaFragment
 */
export interface KinesisVideoArchivedMediaFragment {
  /**
   * @schema KinesisVideoArchivedMediaFragment#FragmentNumber
   */
  readonly fragmentNumber?: string;

  /**
   * @schema KinesisVideoArchivedMediaFragment#FragmentSizeInBytes
   */
  readonly fragmentSizeInBytes?: number;

  /**
   * @schema KinesisVideoArchivedMediaFragment#ProducerTimestamp
   */
  readonly producerTimestamp?: string;

  /**
   * @schema KinesisVideoArchivedMediaFragment#ServerTimestamp
   */
  readonly serverTimestamp?: string;

  /**
   * @schema KinesisVideoArchivedMediaFragment#FragmentLengthInMilliseconds
   */
  readonly fragmentLengthInMilliseconds?: number;

}

/**
 * @schema KinesisVideoArchivedMediaClipTimestampRange
 */
export interface KinesisVideoArchivedMediaClipTimestampRange {
  /**
   * @schema KinesisVideoArchivedMediaClipTimestampRange#StartTimestamp
   */
  readonly startTimestamp: string;

  /**
   * @schema KinesisVideoArchivedMediaClipTimestampRange#EndTimestamp
   */
  readonly endTimestamp: string;

}

/**
 * @schema KinesisVideoArchivedMediaDashTimestampRange
 */
export interface KinesisVideoArchivedMediaDashTimestampRange {
  /**
   * @schema KinesisVideoArchivedMediaDashTimestampRange#StartTimestamp
   */
  readonly startTimestamp?: string;

  /**
   * @schema KinesisVideoArchivedMediaDashTimestampRange#EndTimestamp
   */
  readonly endTimestamp?: string;

}

/**
 * @schema KinesisVideoArchivedMediaHlsTimestampRange
 */
export interface KinesisVideoArchivedMediaHlsTimestampRange {
  /**
   * @schema KinesisVideoArchivedMediaHlsTimestampRange#StartTimestamp
   */
  readonly startTimestamp?: string;

  /**
   * @schema KinesisVideoArchivedMediaHlsTimestampRange#EndTimestamp
   */
  readonly endTimestamp?: string;

}

/**
 * @schema KinesisVideoArchivedMediaTimestampRange
 */
export interface KinesisVideoArchivedMediaTimestampRange {
  /**
   * @schema KinesisVideoArchivedMediaTimestampRange#StartTimestamp
   */
  readonly startTimestamp: string;

  /**
   * @schema KinesisVideoArchivedMediaTimestampRange#EndTimestamp
   */
  readonly endTimestamp: string;

}
