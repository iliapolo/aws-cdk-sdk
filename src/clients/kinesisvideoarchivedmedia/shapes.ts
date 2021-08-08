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
  readonly clipFragmentSelector?: KinesisVideoArchivedMediaClipFragmentSelector;

}

/**
 * Converts an object of type 'KinesisVideoArchivedMediaGetClipInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoArchivedMediaGetClipInput(obj: KinesisVideoArchivedMediaGetClipInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamName': obj.streamName,
    'StreamARN': obj.streamArn,
    'ClipFragmentSelector': toJson_KinesisVideoArchivedMediaClipFragmentSelector(obj.clipFragmentSelector),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'KinesisVideoArchivedMediaGetClipOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoArchivedMediaGetClipOutput(obj: KinesisVideoArchivedMediaGetClipOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContentType': obj.contentType,
    'Payload': obj.payload,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'KinesisVideoArchivedMediaGetDashStreamingSessionUrlInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoArchivedMediaGetDashStreamingSessionUrlInput(obj: KinesisVideoArchivedMediaGetDashStreamingSessionUrlInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamName': obj.streamName,
    'StreamARN': obj.streamArn,
    'PlaybackMode': obj.playbackMode,
    'DisplayFragmentTimestamp': obj.displayFragmentTimestamp,
    'DisplayFragmentNumber': obj.displayFragmentNumber,
    'DASHFragmentSelector': toJson_KinesisVideoArchivedMediaDashFragmentSelector(obj.dashFragmentSelector),
    'Expires': obj.expires,
    'MaxManifestFragmentResults': obj.maxManifestFragmentResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'KinesisVideoArchivedMediaGetDashStreamingSessionUrlOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoArchivedMediaGetDashStreamingSessionUrlOutput(obj: KinesisVideoArchivedMediaGetDashStreamingSessionUrlOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DASHStreamingSessionURL': obj.dashStreamingSessionUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'KinesisVideoArchivedMediaGetHlsStreamingSessionUrlInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoArchivedMediaGetHlsStreamingSessionUrlInput(obj: KinesisVideoArchivedMediaGetHlsStreamingSessionUrlInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamName': obj.streamName,
    'StreamARN': obj.streamArn,
    'PlaybackMode': obj.playbackMode,
    'HLSFragmentSelector': toJson_KinesisVideoArchivedMediaHlsFragmentSelector(obj.hlsFragmentSelector),
    'ContainerFormat': obj.containerFormat,
    'DiscontinuityMode': obj.discontinuityMode,
    'DisplayFragmentTimestamp': obj.displayFragmentTimestamp,
    'Expires': obj.expires,
    'MaxMediaPlaylistFragmentResults': obj.maxMediaPlaylistFragmentResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'KinesisVideoArchivedMediaGetHlsStreamingSessionUrlOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoArchivedMediaGetHlsStreamingSessionUrlOutput(obj: KinesisVideoArchivedMediaGetHlsStreamingSessionUrlOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HLSStreamingSessionURL': obj.hlsStreamingSessionUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisVideoArchivedMediaGetMediaForFragmentListInput
 */
export interface KinesisVideoArchivedMediaGetMediaForFragmentListInput {
  /**
   * @schema KinesisVideoArchivedMediaGetMediaForFragmentListInput#StreamName
   */
  readonly streamName?: string;

  /**
   * @schema KinesisVideoArchivedMediaGetMediaForFragmentListInput#StreamARN
   */
  readonly streamArn?: string;

  /**
   * @schema KinesisVideoArchivedMediaGetMediaForFragmentListInput#Fragments
   */
  readonly fragments?: string[];

}

/**
 * Converts an object of type 'KinesisVideoArchivedMediaGetMediaForFragmentListInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoArchivedMediaGetMediaForFragmentListInput(obj: KinesisVideoArchivedMediaGetMediaForFragmentListInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamName': obj.streamName,
    'StreamARN': obj.streamArn,
    'Fragments': obj.fragments?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'KinesisVideoArchivedMediaGetMediaForFragmentListOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoArchivedMediaGetMediaForFragmentListOutput(obj: KinesisVideoArchivedMediaGetMediaForFragmentListOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContentType': obj.contentType,
    'Payload': obj.payload,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisVideoArchivedMediaListFragmentsInput
 */
export interface KinesisVideoArchivedMediaListFragmentsInput {
  /**
   * @schema KinesisVideoArchivedMediaListFragmentsInput#StreamName
   */
  readonly streamName?: string;

  /**
   * @schema KinesisVideoArchivedMediaListFragmentsInput#StreamARN
   */
  readonly streamArn?: string;

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
 * Converts an object of type 'KinesisVideoArchivedMediaListFragmentsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoArchivedMediaListFragmentsInput(obj: KinesisVideoArchivedMediaListFragmentsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamName': obj.streamName,
    'StreamARN': obj.streamArn,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'FragmentSelector': toJson_KinesisVideoArchivedMediaFragmentSelector(obj.fragmentSelector),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'KinesisVideoArchivedMediaListFragmentsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoArchivedMediaListFragmentsOutput(obj: KinesisVideoArchivedMediaListFragmentsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Fragments': obj.fragments?.map(y => toJson_KinesisVideoArchivedMediaFragment(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisVideoArchivedMediaClipFragmentSelector
 */
export interface KinesisVideoArchivedMediaClipFragmentSelector {
  /**
   * @schema KinesisVideoArchivedMediaClipFragmentSelector#FragmentSelectorType
   */
  readonly fragmentSelectorType?: string;

  /**
   * @schema KinesisVideoArchivedMediaClipFragmentSelector#TimestampRange
   */
  readonly timestampRange?: KinesisVideoArchivedMediaClipTimestampRange;

}

/**
 * Converts an object of type 'KinesisVideoArchivedMediaClipFragmentSelector' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoArchivedMediaClipFragmentSelector(obj: KinesisVideoArchivedMediaClipFragmentSelector | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FragmentSelectorType': obj.fragmentSelectorType,
    'TimestampRange': toJson_KinesisVideoArchivedMediaClipTimestampRange(obj.timestampRange),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'KinesisVideoArchivedMediaDashFragmentSelector' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoArchivedMediaDashFragmentSelector(obj: KinesisVideoArchivedMediaDashFragmentSelector | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FragmentSelectorType': obj.fragmentSelectorType,
    'TimestampRange': toJson_KinesisVideoArchivedMediaDashTimestampRange(obj.timestampRange),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'KinesisVideoArchivedMediaHlsFragmentSelector' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoArchivedMediaHlsFragmentSelector(obj: KinesisVideoArchivedMediaHlsFragmentSelector | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FragmentSelectorType': obj.fragmentSelectorType,
    'TimestampRange': toJson_KinesisVideoArchivedMediaHlsTimestampRange(obj.timestampRange),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisVideoArchivedMediaFragmentSelector
 */
export interface KinesisVideoArchivedMediaFragmentSelector {
  /**
   * @schema KinesisVideoArchivedMediaFragmentSelector#FragmentSelectorType
   */
  readonly fragmentSelectorType?: string;

  /**
   * @schema KinesisVideoArchivedMediaFragmentSelector#TimestampRange
   */
  readonly timestampRange?: KinesisVideoArchivedMediaTimestampRange;

}

/**
 * Converts an object of type 'KinesisVideoArchivedMediaFragmentSelector' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoArchivedMediaFragmentSelector(obj: KinesisVideoArchivedMediaFragmentSelector | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FragmentSelectorType': obj.fragmentSelectorType,
    'TimestampRange': toJson_KinesisVideoArchivedMediaTimestampRange(obj.timestampRange),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'KinesisVideoArchivedMediaFragment' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoArchivedMediaFragment(obj: KinesisVideoArchivedMediaFragment | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FragmentNumber': obj.fragmentNumber,
    'FragmentSizeInBytes': obj.fragmentSizeInBytes,
    'ProducerTimestamp': obj.producerTimestamp,
    'ServerTimestamp': obj.serverTimestamp,
    'FragmentLengthInMilliseconds': obj.fragmentLengthInMilliseconds,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisVideoArchivedMediaClipTimestampRange
 */
export interface KinesisVideoArchivedMediaClipTimestampRange {
  /**
   * @schema KinesisVideoArchivedMediaClipTimestampRange#StartTimestamp
   */
  readonly startTimestamp?: string;

  /**
   * @schema KinesisVideoArchivedMediaClipTimestampRange#EndTimestamp
   */
  readonly endTimestamp?: string;

}

/**
 * Converts an object of type 'KinesisVideoArchivedMediaClipTimestampRange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoArchivedMediaClipTimestampRange(obj: KinesisVideoArchivedMediaClipTimestampRange | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StartTimestamp': obj.startTimestamp,
    'EndTimestamp': obj.endTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'KinesisVideoArchivedMediaDashTimestampRange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoArchivedMediaDashTimestampRange(obj: KinesisVideoArchivedMediaDashTimestampRange | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StartTimestamp': obj.startTimestamp,
    'EndTimestamp': obj.endTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'KinesisVideoArchivedMediaHlsTimestampRange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoArchivedMediaHlsTimestampRange(obj: KinesisVideoArchivedMediaHlsTimestampRange | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StartTimestamp': obj.startTimestamp,
    'EndTimestamp': obj.endTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisVideoArchivedMediaTimestampRange
 */
export interface KinesisVideoArchivedMediaTimestampRange {
  /**
   * @schema KinesisVideoArchivedMediaTimestampRange#StartTimestamp
   */
  readonly startTimestamp?: string;

  /**
   * @schema KinesisVideoArchivedMediaTimestampRange#EndTimestamp
   */
  readonly endTimestamp?: string;

}

/**
 * Converts an object of type 'KinesisVideoArchivedMediaTimestampRange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoArchivedMediaTimestampRange(obj: KinesisVideoArchivedMediaTimestampRange | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StartTimestamp': obj.startTimestamp,
    'EndTimestamp': obj.endTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
