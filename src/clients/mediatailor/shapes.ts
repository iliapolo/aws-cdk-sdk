/**
 * @schema MediaTailorCreateChannelRequest
 */
export interface MediaTailorCreateChannelRequest {
  /**
   * @schema MediaTailorCreateChannelRequest#ChannelName
   */
  readonly channelName?: string;

  /**
   * @schema MediaTailorCreateChannelRequest#Outputs
   */
  readonly outputs?: MediaTailorRequestOutputItem[];

  /**
   * @schema MediaTailorCreateChannelRequest#PlaybackMode
   */
  readonly playbackMode?: string;

  /**
   * @schema MediaTailorCreateChannelRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'MediaTailorCreateChannelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorCreateChannelRequest(obj: MediaTailorCreateChannelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelName': obj.channelName,
    'Outputs': obj.outputs?.map(y => toJson_MediaTailorRequestOutputItem(y)),
    'PlaybackMode': obj.playbackMode,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorCreateChannelResponse
 */
export interface MediaTailorCreateChannelResponse {
  /**
   * @schema MediaTailorCreateChannelResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaTailorCreateChannelResponse#ChannelName
   */
  readonly channelName?: string;

  /**
   * @schema MediaTailorCreateChannelResponse#ChannelState
   */
  readonly channelState?: string;

  /**
   * @schema MediaTailorCreateChannelResponse#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema MediaTailorCreateChannelResponse#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema MediaTailorCreateChannelResponse#Outputs
   */
  readonly outputs?: MediaTailorResponseOutputItem[];

  /**
   * @schema MediaTailorCreateChannelResponse#PlaybackMode
   */
  readonly playbackMode?: string;

  /**
   * @schema MediaTailorCreateChannelResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'MediaTailorCreateChannelResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorCreateChannelResponse(obj: MediaTailorCreateChannelResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'ChannelName': obj.channelName,
    'ChannelState': obj.channelState,
    'CreationTime': obj.creationTime,
    'LastModifiedTime': obj.lastModifiedTime,
    'Outputs': obj.outputs?.map(y => toJson_MediaTailorResponseOutputItem(y)),
    'PlaybackMode': obj.playbackMode,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorCreateProgramRequest
 */
export interface MediaTailorCreateProgramRequest {
  /**
   * @schema MediaTailorCreateProgramRequest#AdBreaks
   */
  readonly adBreaks?: MediaTailorAdBreak[];

  /**
   * @schema MediaTailorCreateProgramRequest#ChannelName
   */
  readonly channelName?: string;

  /**
   * @schema MediaTailorCreateProgramRequest#ProgramName
   */
  readonly programName?: string;

  /**
   * @schema MediaTailorCreateProgramRequest#ScheduleConfiguration
   */
  readonly scheduleConfiguration?: MediaTailorScheduleConfiguration;

  /**
   * @schema MediaTailorCreateProgramRequest#SourceLocationName
   */
  readonly sourceLocationName?: string;

  /**
   * @schema MediaTailorCreateProgramRequest#VodSourceName
   */
  readonly vodSourceName?: string;

}

/**
 * Converts an object of type 'MediaTailorCreateProgramRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorCreateProgramRequest(obj: MediaTailorCreateProgramRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AdBreaks': obj.adBreaks?.map(y => toJson_MediaTailorAdBreak(y)),
    'ChannelName': obj.channelName,
    'ProgramName': obj.programName,
    'ScheduleConfiguration': toJson_MediaTailorScheduleConfiguration(obj.scheduleConfiguration),
    'SourceLocationName': obj.sourceLocationName,
    'VodSourceName': obj.vodSourceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorCreateProgramResponse
 */
export interface MediaTailorCreateProgramResponse {
  /**
   * @schema MediaTailorCreateProgramResponse#AdBreaks
   */
  readonly adBreaks?: MediaTailorAdBreak[];

  /**
   * @schema MediaTailorCreateProgramResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaTailorCreateProgramResponse#ChannelName
   */
  readonly channelName?: string;

  /**
   * @schema MediaTailorCreateProgramResponse#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema MediaTailorCreateProgramResponse#ProgramName
   */
  readonly programName?: string;

  /**
   * @schema MediaTailorCreateProgramResponse#SourceLocationName
   */
  readonly sourceLocationName?: string;

  /**
   * @schema MediaTailorCreateProgramResponse#VodSourceName
   */
  readonly vodSourceName?: string;

}

/**
 * Converts an object of type 'MediaTailorCreateProgramResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorCreateProgramResponse(obj: MediaTailorCreateProgramResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AdBreaks': obj.adBreaks?.map(y => toJson_MediaTailorAdBreak(y)),
    'Arn': obj.arn,
    'ChannelName': obj.channelName,
    'CreationTime': obj.creationTime,
    'ProgramName': obj.programName,
    'SourceLocationName': obj.sourceLocationName,
    'VodSourceName': obj.vodSourceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorCreateSourceLocationRequest
 */
export interface MediaTailorCreateSourceLocationRequest {
  /**
   * @schema MediaTailorCreateSourceLocationRequest#AccessConfiguration
   */
  readonly accessConfiguration?: MediaTailorAccessConfiguration;

  /**
   * @schema MediaTailorCreateSourceLocationRequest#DefaultSegmentDeliveryConfiguration
   */
  readonly defaultSegmentDeliveryConfiguration?: MediaTailorDefaultSegmentDeliveryConfiguration;

  /**
   * @schema MediaTailorCreateSourceLocationRequest#HttpConfiguration
   */
  readonly httpConfiguration?: MediaTailorHttpConfiguration;

  /**
   * @schema MediaTailorCreateSourceLocationRequest#SourceLocationName
   */
  readonly sourceLocationName?: string;

  /**
   * @schema MediaTailorCreateSourceLocationRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'MediaTailorCreateSourceLocationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorCreateSourceLocationRequest(obj: MediaTailorCreateSourceLocationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccessConfiguration': toJson_MediaTailorAccessConfiguration(obj.accessConfiguration),
    'DefaultSegmentDeliveryConfiguration': toJson_MediaTailorDefaultSegmentDeliveryConfiguration(obj.defaultSegmentDeliveryConfiguration),
    'HttpConfiguration': toJson_MediaTailorHttpConfiguration(obj.httpConfiguration),
    'SourceLocationName': obj.sourceLocationName,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorCreateSourceLocationResponse
 */
export interface MediaTailorCreateSourceLocationResponse {
  /**
   * @schema MediaTailorCreateSourceLocationResponse#AccessConfiguration
   */
  readonly accessConfiguration?: MediaTailorAccessConfiguration;

  /**
   * @schema MediaTailorCreateSourceLocationResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaTailorCreateSourceLocationResponse#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema MediaTailorCreateSourceLocationResponse#DefaultSegmentDeliveryConfiguration
   */
  readonly defaultSegmentDeliveryConfiguration?: MediaTailorDefaultSegmentDeliveryConfiguration;

  /**
   * @schema MediaTailorCreateSourceLocationResponse#HttpConfiguration
   */
  readonly httpConfiguration?: MediaTailorHttpConfiguration;

  /**
   * @schema MediaTailorCreateSourceLocationResponse#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema MediaTailorCreateSourceLocationResponse#SourceLocationName
   */
  readonly sourceLocationName?: string;

  /**
   * @schema MediaTailorCreateSourceLocationResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'MediaTailorCreateSourceLocationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorCreateSourceLocationResponse(obj: MediaTailorCreateSourceLocationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccessConfiguration': toJson_MediaTailorAccessConfiguration(obj.accessConfiguration),
    'Arn': obj.arn,
    'CreationTime': obj.creationTime,
    'DefaultSegmentDeliveryConfiguration': toJson_MediaTailorDefaultSegmentDeliveryConfiguration(obj.defaultSegmentDeliveryConfiguration),
    'HttpConfiguration': toJson_MediaTailorHttpConfiguration(obj.httpConfiguration),
    'LastModifiedTime': obj.lastModifiedTime,
    'SourceLocationName': obj.sourceLocationName,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorCreateVodSourceRequest
 */
export interface MediaTailorCreateVodSourceRequest {
  /**
   * @schema MediaTailorCreateVodSourceRequest#HttpPackageConfigurations
   */
  readonly httpPackageConfigurations?: MediaTailorHttpPackageConfiguration[];

  /**
   * @schema MediaTailorCreateVodSourceRequest#SourceLocationName
   */
  readonly sourceLocationName?: string;

  /**
   * @schema MediaTailorCreateVodSourceRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema MediaTailorCreateVodSourceRequest#VodSourceName
   */
  readonly vodSourceName?: string;

}

/**
 * Converts an object of type 'MediaTailorCreateVodSourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorCreateVodSourceRequest(obj: MediaTailorCreateVodSourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HttpPackageConfigurations': obj.httpPackageConfigurations?.map(y => toJson_MediaTailorHttpPackageConfiguration(y)),
    'SourceLocationName': obj.sourceLocationName,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'VodSourceName': obj.vodSourceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorCreateVodSourceResponse
 */
export interface MediaTailorCreateVodSourceResponse {
  /**
   * @schema MediaTailorCreateVodSourceResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaTailorCreateVodSourceResponse#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema MediaTailorCreateVodSourceResponse#HttpPackageConfigurations
   */
  readonly httpPackageConfigurations?: MediaTailorHttpPackageConfiguration[];

  /**
   * @schema MediaTailorCreateVodSourceResponse#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema MediaTailorCreateVodSourceResponse#SourceLocationName
   */
  readonly sourceLocationName?: string;

  /**
   * @schema MediaTailorCreateVodSourceResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema MediaTailorCreateVodSourceResponse#VodSourceName
   */
  readonly vodSourceName?: string;

}

/**
 * Converts an object of type 'MediaTailorCreateVodSourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorCreateVodSourceResponse(obj: MediaTailorCreateVodSourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CreationTime': obj.creationTime,
    'HttpPackageConfigurations': obj.httpPackageConfigurations?.map(y => toJson_MediaTailorHttpPackageConfiguration(y)),
    'LastModifiedTime': obj.lastModifiedTime,
    'SourceLocationName': obj.sourceLocationName,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'VodSourceName': obj.vodSourceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorDeleteChannelRequest
 */
export interface MediaTailorDeleteChannelRequest {
  /**
   * @schema MediaTailorDeleteChannelRequest#ChannelName
   */
  readonly channelName?: string;

}

/**
 * Converts an object of type 'MediaTailorDeleteChannelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorDeleteChannelRequest(obj: MediaTailorDeleteChannelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelName': obj.channelName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorDeleteChannelResponse
 */
export interface MediaTailorDeleteChannelResponse {
}

/**
 * Converts an object of type 'MediaTailorDeleteChannelResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorDeleteChannelResponse(obj: MediaTailorDeleteChannelResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorDeleteChannelPolicyRequest
 */
export interface MediaTailorDeleteChannelPolicyRequest {
  /**
   * @schema MediaTailorDeleteChannelPolicyRequest#ChannelName
   */
  readonly channelName?: string;

}

/**
 * Converts an object of type 'MediaTailorDeleteChannelPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorDeleteChannelPolicyRequest(obj: MediaTailorDeleteChannelPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelName': obj.channelName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorDeleteChannelPolicyResponse
 */
export interface MediaTailorDeleteChannelPolicyResponse {
}

/**
 * Converts an object of type 'MediaTailorDeleteChannelPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorDeleteChannelPolicyResponse(obj: MediaTailorDeleteChannelPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorDeletePlaybackConfigurationRequest
 */
export interface MediaTailorDeletePlaybackConfigurationRequest {
  /**
   * @schema MediaTailorDeletePlaybackConfigurationRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'MediaTailorDeletePlaybackConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorDeletePlaybackConfigurationRequest(obj: MediaTailorDeletePlaybackConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorDeletePlaybackConfigurationResponse
 */
export interface MediaTailorDeletePlaybackConfigurationResponse {
}

/**
 * Converts an object of type 'MediaTailorDeletePlaybackConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorDeletePlaybackConfigurationResponse(obj: MediaTailorDeletePlaybackConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorDeleteProgramRequest
 */
export interface MediaTailorDeleteProgramRequest {
  /**
   * @schema MediaTailorDeleteProgramRequest#ChannelName
   */
  readonly channelName?: string;

  /**
   * @schema MediaTailorDeleteProgramRequest#ProgramName
   */
  readonly programName?: string;

}

/**
 * Converts an object of type 'MediaTailorDeleteProgramRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorDeleteProgramRequest(obj: MediaTailorDeleteProgramRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelName': obj.channelName,
    'ProgramName': obj.programName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorDeleteProgramResponse
 */
export interface MediaTailorDeleteProgramResponse {
}

/**
 * Converts an object of type 'MediaTailorDeleteProgramResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorDeleteProgramResponse(obj: MediaTailorDeleteProgramResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorDeleteSourceLocationRequest
 */
export interface MediaTailorDeleteSourceLocationRequest {
  /**
   * @schema MediaTailorDeleteSourceLocationRequest#SourceLocationName
   */
  readonly sourceLocationName?: string;

}

/**
 * Converts an object of type 'MediaTailorDeleteSourceLocationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorDeleteSourceLocationRequest(obj: MediaTailorDeleteSourceLocationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceLocationName': obj.sourceLocationName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorDeleteSourceLocationResponse
 */
export interface MediaTailorDeleteSourceLocationResponse {
}

/**
 * Converts an object of type 'MediaTailorDeleteSourceLocationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorDeleteSourceLocationResponse(obj: MediaTailorDeleteSourceLocationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorDeleteVodSourceRequest
 */
export interface MediaTailorDeleteVodSourceRequest {
  /**
   * @schema MediaTailorDeleteVodSourceRequest#SourceLocationName
   */
  readonly sourceLocationName?: string;

  /**
   * @schema MediaTailorDeleteVodSourceRequest#VodSourceName
   */
  readonly vodSourceName?: string;

}

/**
 * Converts an object of type 'MediaTailorDeleteVodSourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorDeleteVodSourceRequest(obj: MediaTailorDeleteVodSourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceLocationName': obj.sourceLocationName,
    'VodSourceName': obj.vodSourceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorDeleteVodSourceResponse
 */
export interface MediaTailorDeleteVodSourceResponse {
}

/**
 * Converts an object of type 'MediaTailorDeleteVodSourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorDeleteVodSourceResponse(obj: MediaTailorDeleteVodSourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorDescribeChannelRequest
 */
export interface MediaTailorDescribeChannelRequest {
  /**
   * @schema MediaTailorDescribeChannelRequest#ChannelName
   */
  readonly channelName?: string;

}

/**
 * Converts an object of type 'MediaTailorDescribeChannelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorDescribeChannelRequest(obj: MediaTailorDescribeChannelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelName': obj.channelName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorDescribeChannelResponse
 */
export interface MediaTailorDescribeChannelResponse {
  /**
   * @schema MediaTailorDescribeChannelResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaTailorDescribeChannelResponse#ChannelName
   */
  readonly channelName?: string;

  /**
   * @schema MediaTailorDescribeChannelResponse#ChannelState
   */
  readonly channelState?: string;

  /**
   * @schema MediaTailorDescribeChannelResponse#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema MediaTailorDescribeChannelResponse#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema MediaTailorDescribeChannelResponse#Outputs
   */
  readonly outputs?: MediaTailorResponseOutputItem[];

  /**
   * @schema MediaTailorDescribeChannelResponse#PlaybackMode
   */
  readonly playbackMode?: string;

  /**
   * @schema MediaTailorDescribeChannelResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'MediaTailorDescribeChannelResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorDescribeChannelResponse(obj: MediaTailorDescribeChannelResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'ChannelName': obj.channelName,
    'ChannelState': obj.channelState,
    'CreationTime': obj.creationTime,
    'LastModifiedTime': obj.lastModifiedTime,
    'Outputs': obj.outputs?.map(y => toJson_MediaTailorResponseOutputItem(y)),
    'PlaybackMode': obj.playbackMode,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorDescribeProgramRequest
 */
export interface MediaTailorDescribeProgramRequest {
  /**
   * @schema MediaTailorDescribeProgramRequest#ChannelName
   */
  readonly channelName?: string;

  /**
   * @schema MediaTailorDescribeProgramRequest#ProgramName
   */
  readonly programName?: string;

}

/**
 * Converts an object of type 'MediaTailorDescribeProgramRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorDescribeProgramRequest(obj: MediaTailorDescribeProgramRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelName': obj.channelName,
    'ProgramName': obj.programName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorDescribeProgramResponse
 */
export interface MediaTailorDescribeProgramResponse {
  /**
   * @schema MediaTailorDescribeProgramResponse#AdBreaks
   */
  readonly adBreaks?: MediaTailorAdBreak[];

  /**
   * @schema MediaTailorDescribeProgramResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaTailorDescribeProgramResponse#ChannelName
   */
  readonly channelName?: string;

  /**
   * @schema MediaTailorDescribeProgramResponse#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema MediaTailorDescribeProgramResponse#ProgramName
   */
  readonly programName?: string;

  /**
   * @schema MediaTailorDescribeProgramResponse#SourceLocationName
   */
  readonly sourceLocationName?: string;

  /**
   * @schema MediaTailorDescribeProgramResponse#VodSourceName
   */
  readonly vodSourceName?: string;

}

/**
 * Converts an object of type 'MediaTailorDescribeProgramResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorDescribeProgramResponse(obj: MediaTailorDescribeProgramResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AdBreaks': obj.adBreaks?.map(y => toJson_MediaTailorAdBreak(y)),
    'Arn': obj.arn,
    'ChannelName': obj.channelName,
    'CreationTime': obj.creationTime,
    'ProgramName': obj.programName,
    'SourceLocationName': obj.sourceLocationName,
    'VodSourceName': obj.vodSourceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorDescribeSourceLocationRequest
 */
export interface MediaTailorDescribeSourceLocationRequest {
  /**
   * @schema MediaTailorDescribeSourceLocationRequest#SourceLocationName
   */
  readonly sourceLocationName?: string;

}

/**
 * Converts an object of type 'MediaTailorDescribeSourceLocationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorDescribeSourceLocationRequest(obj: MediaTailorDescribeSourceLocationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceLocationName': obj.sourceLocationName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorDescribeSourceLocationResponse
 */
export interface MediaTailorDescribeSourceLocationResponse {
  /**
   * @schema MediaTailorDescribeSourceLocationResponse#AccessConfiguration
   */
  readonly accessConfiguration?: MediaTailorAccessConfiguration;

  /**
   * @schema MediaTailorDescribeSourceLocationResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaTailorDescribeSourceLocationResponse#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema MediaTailorDescribeSourceLocationResponse#DefaultSegmentDeliveryConfiguration
   */
  readonly defaultSegmentDeliveryConfiguration?: MediaTailorDefaultSegmentDeliveryConfiguration;

  /**
   * @schema MediaTailorDescribeSourceLocationResponse#HttpConfiguration
   */
  readonly httpConfiguration?: MediaTailorHttpConfiguration;

  /**
   * @schema MediaTailorDescribeSourceLocationResponse#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema MediaTailorDescribeSourceLocationResponse#SourceLocationName
   */
  readonly sourceLocationName?: string;

  /**
   * @schema MediaTailorDescribeSourceLocationResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'MediaTailorDescribeSourceLocationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorDescribeSourceLocationResponse(obj: MediaTailorDescribeSourceLocationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccessConfiguration': toJson_MediaTailorAccessConfiguration(obj.accessConfiguration),
    'Arn': obj.arn,
    'CreationTime': obj.creationTime,
    'DefaultSegmentDeliveryConfiguration': toJson_MediaTailorDefaultSegmentDeliveryConfiguration(obj.defaultSegmentDeliveryConfiguration),
    'HttpConfiguration': toJson_MediaTailorHttpConfiguration(obj.httpConfiguration),
    'LastModifiedTime': obj.lastModifiedTime,
    'SourceLocationName': obj.sourceLocationName,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorDescribeVodSourceRequest
 */
export interface MediaTailorDescribeVodSourceRequest {
  /**
   * @schema MediaTailorDescribeVodSourceRequest#SourceLocationName
   */
  readonly sourceLocationName?: string;

  /**
   * @schema MediaTailorDescribeVodSourceRequest#VodSourceName
   */
  readonly vodSourceName?: string;

}

/**
 * Converts an object of type 'MediaTailorDescribeVodSourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorDescribeVodSourceRequest(obj: MediaTailorDescribeVodSourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceLocationName': obj.sourceLocationName,
    'VodSourceName': obj.vodSourceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorDescribeVodSourceResponse
 */
export interface MediaTailorDescribeVodSourceResponse {
  /**
   * @schema MediaTailorDescribeVodSourceResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaTailorDescribeVodSourceResponse#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema MediaTailorDescribeVodSourceResponse#HttpPackageConfigurations
   */
  readonly httpPackageConfigurations?: MediaTailorHttpPackageConfiguration[];

  /**
   * @schema MediaTailorDescribeVodSourceResponse#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema MediaTailorDescribeVodSourceResponse#SourceLocationName
   */
  readonly sourceLocationName?: string;

  /**
   * @schema MediaTailorDescribeVodSourceResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema MediaTailorDescribeVodSourceResponse#VodSourceName
   */
  readonly vodSourceName?: string;

}

/**
 * Converts an object of type 'MediaTailorDescribeVodSourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorDescribeVodSourceResponse(obj: MediaTailorDescribeVodSourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CreationTime': obj.creationTime,
    'HttpPackageConfigurations': obj.httpPackageConfigurations?.map(y => toJson_MediaTailorHttpPackageConfiguration(y)),
    'LastModifiedTime': obj.lastModifiedTime,
    'SourceLocationName': obj.sourceLocationName,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'VodSourceName': obj.vodSourceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorGetChannelPolicyRequest
 */
export interface MediaTailorGetChannelPolicyRequest {
  /**
   * @schema MediaTailorGetChannelPolicyRequest#ChannelName
   */
  readonly channelName?: string;

}

/**
 * Converts an object of type 'MediaTailorGetChannelPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorGetChannelPolicyRequest(obj: MediaTailorGetChannelPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelName': obj.channelName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorGetChannelPolicyResponse
 */
export interface MediaTailorGetChannelPolicyResponse {
  /**
   * @schema MediaTailorGetChannelPolicyResponse#Policy
   */
  readonly policy?: string;

}

/**
 * Converts an object of type 'MediaTailorGetChannelPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorGetChannelPolicyResponse(obj: MediaTailorGetChannelPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Policy': obj.policy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorGetChannelScheduleRequest
 */
export interface MediaTailorGetChannelScheduleRequest {
  /**
   * @schema MediaTailorGetChannelScheduleRequest#ChannelName
   */
  readonly channelName?: string;

  /**
   * @schema MediaTailorGetChannelScheduleRequest#DurationMinutes
   */
  readonly durationMinutes?: string;

  /**
   * @schema MediaTailorGetChannelScheduleRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MediaTailorGetChannelScheduleRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'MediaTailorGetChannelScheduleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorGetChannelScheduleRequest(obj: MediaTailorGetChannelScheduleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelName': obj.channelName,
    'DurationMinutes': obj.durationMinutes,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorGetChannelScheduleResponse
 */
export interface MediaTailorGetChannelScheduleResponse {
  /**
   * @schema MediaTailorGetChannelScheduleResponse#Items
   */
  readonly items?: MediaTailorScheduleEntry[];

  /**
   * @schema MediaTailorGetChannelScheduleResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'MediaTailorGetChannelScheduleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorGetChannelScheduleResponse(obj: MediaTailorGetChannelScheduleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Items': obj.items?.map(y => toJson_MediaTailorScheduleEntry(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorGetPlaybackConfigurationRequest
 */
export interface MediaTailorGetPlaybackConfigurationRequest {
  /**
   * @schema MediaTailorGetPlaybackConfigurationRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'MediaTailorGetPlaybackConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorGetPlaybackConfigurationRequest(obj: MediaTailorGetPlaybackConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
   * @schema MediaTailorGetPlaybackConfigurationResponse#ConfigurationAliases
   */
  readonly configurationAliases?: { [key: string]: { [key: string]: string } };

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
 * Converts an object of type 'MediaTailorGetPlaybackConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorGetPlaybackConfigurationResponse(obj: MediaTailorGetPlaybackConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AdDecisionServerUrl': obj.adDecisionServerUrl,
    'AvailSuppression': toJson_MediaTailorAvailSuppression(obj.availSuppression),
    'Bumper': toJson_MediaTailorBumper(obj.bumper),
    'CdnConfiguration': toJson_MediaTailorCdnConfiguration(obj.cdnConfiguration),
    'ConfigurationAliases': ((obj.configurationAliases) === undefined) ? undefined : (Object.entries(obj.configurationAliases).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: ((i[1]) === undefined) ? undefined : (Object.entries(i[1]).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})) }), {})),
    'DashConfiguration': toJson_MediaTailorDashConfiguration(obj.dashConfiguration),
    'HlsConfiguration': toJson_MediaTailorHlsConfiguration(obj.hlsConfiguration),
    'LivePreRollConfiguration': toJson_MediaTailorLivePreRollConfiguration(obj.livePreRollConfiguration),
    'ManifestProcessingRules': toJson_MediaTailorManifestProcessingRules(obj.manifestProcessingRules),
    'Name': obj.name,
    'PersonalizationThresholdSeconds': obj.personalizationThresholdSeconds,
    'PlaybackConfigurationArn': obj.playbackConfigurationArn,
    'PlaybackEndpointPrefix': obj.playbackEndpointPrefix,
    'SessionInitializationEndpointPrefix': obj.sessionInitializationEndpointPrefix,
    'SlateAdUrl': obj.slateAdUrl,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'TranscodeProfileName': obj.transcodeProfileName,
    'VideoContentSourceUrl': obj.videoContentSourceUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorListAlertsRequest
 */
export interface MediaTailorListAlertsRequest {
  /**
   * @schema MediaTailorListAlertsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MediaTailorListAlertsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema MediaTailorListAlertsRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'MediaTailorListAlertsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorListAlertsRequest(obj: MediaTailorListAlertsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorListAlertsResponse
 */
export interface MediaTailorListAlertsResponse {
  /**
   * @schema MediaTailorListAlertsResponse#Items
   */
  readonly items?: MediaTailorAlert[];

  /**
   * @schema MediaTailorListAlertsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'MediaTailorListAlertsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorListAlertsResponse(obj: MediaTailorListAlertsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Items': obj.items?.map(y => toJson_MediaTailorAlert(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorListChannelsRequest
 */
export interface MediaTailorListChannelsRequest {
  /**
   * @schema MediaTailorListChannelsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MediaTailorListChannelsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'MediaTailorListChannelsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorListChannelsRequest(obj: MediaTailorListChannelsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorListChannelsResponse
 */
export interface MediaTailorListChannelsResponse {
  /**
   * @schema MediaTailorListChannelsResponse#Items
   */
  readonly items?: MediaTailorChannel[];

  /**
   * @schema MediaTailorListChannelsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'MediaTailorListChannelsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorListChannelsResponse(obj: MediaTailorListChannelsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Items': obj.items?.map(y => toJson_MediaTailorChannel(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaTailorListPlaybackConfigurationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorListPlaybackConfigurationsRequest(obj: MediaTailorListPlaybackConfigurationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaTailorListPlaybackConfigurationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorListPlaybackConfigurationsResponse(obj: MediaTailorListPlaybackConfigurationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Items': obj.items?.map(y => toJson_MediaTailorPlaybackConfiguration(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorListSourceLocationsRequest
 */
export interface MediaTailorListSourceLocationsRequest {
  /**
   * @schema MediaTailorListSourceLocationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MediaTailorListSourceLocationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'MediaTailorListSourceLocationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorListSourceLocationsRequest(obj: MediaTailorListSourceLocationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorListSourceLocationsResponse
 */
export interface MediaTailorListSourceLocationsResponse {
  /**
   * @schema MediaTailorListSourceLocationsResponse#Items
   */
  readonly items?: MediaTailorSourceLocation[];

  /**
   * @schema MediaTailorListSourceLocationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'MediaTailorListSourceLocationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorListSourceLocationsResponse(obj: MediaTailorListSourceLocationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Items': obj.items?.map(y => toJson_MediaTailorSourceLocation(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorListTagsForResourceRequest
 */
export interface MediaTailorListTagsForResourceRequest {
  /**
   * @schema MediaTailorListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'MediaTailorListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorListTagsForResourceRequest(obj: MediaTailorListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaTailorListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorListTagsForResourceResponse(obj: MediaTailorListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorListVodSourcesRequest
 */
export interface MediaTailorListVodSourcesRequest {
  /**
   * @schema MediaTailorListVodSourcesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MediaTailorListVodSourcesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema MediaTailorListVodSourcesRequest#SourceLocationName
   */
  readonly sourceLocationName?: string;

}

/**
 * Converts an object of type 'MediaTailorListVodSourcesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorListVodSourcesRequest(obj: MediaTailorListVodSourcesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'SourceLocationName': obj.sourceLocationName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorListVodSourcesResponse
 */
export interface MediaTailorListVodSourcesResponse {
  /**
   * @schema MediaTailorListVodSourcesResponse#Items
   */
  readonly items?: MediaTailorVodSource[];

  /**
   * @schema MediaTailorListVodSourcesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'MediaTailorListVodSourcesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorListVodSourcesResponse(obj: MediaTailorListVodSourcesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Items': obj.items?.map(y => toJson_MediaTailorVodSource(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorPutChannelPolicyRequest
 */
export interface MediaTailorPutChannelPolicyRequest {
  /**
   * @schema MediaTailorPutChannelPolicyRequest#ChannelName
   */
  readonly channelName?: string;

  /**
   * @schema MediaTailorPutChannelPolicyRequest#Policy
   */
  readonly policy?: string;

}

/**
 * Converts an object of type 'MediaTailorPutChannelPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorPutChannelPolicyRequest(obj: MediaTailorPutChannelPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelName': obj.channelName,
    'Policy': obj.policy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorPutChannelPolicyResponse
 */
export interface MediaTailorPutChannelPolicyResponse {
}

/**
 * Converts an object of type 'MediaTailorPutChannelPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorPutChannelPolicyResponse(obj: MediaTailorPutChannelPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
   * @schema MediaTailorPutPlaybackConfigurationRequest#ConfigurationAliases
   */
  readonly configurationAliases?: { [key: string]: { [key: string]: string } };

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
 * Converts an object of type 'MediaTailorPutPlaybackConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorPutPlaybackConfigurationRequest(obj: MediaTailorPutPlaybackConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AdDecisionServerUrl': obj.adDecisionServerUrl,
    'AvailSuppression': toJson_MediaTailorAvailSuppression(obj.availSuppression),
    'Bumper': toJson_MediaTailorBumper(obj.bumper),
    'CdnConfiguration': toJson_MediaTailorCdnConfiguration(obj.cdnConfiguration),
    'ConfigurationAliases': ((obj.configurationAliases) === undefined) ? undefined : (Object.entries(obj.configurationAliases).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: ((i[1]) === undefined) ? undefined : (Object.entries(i[1]).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})) }), {})),
    'DashConfiguration': toJson_MediaTailorDashConfigurationForPut(obj.dashConfiguration),
    'LivePreRollConfiguration': toJson_MediaTailorLivePreRollConfiguration(obj.livePreRollConfiguration),
    'ManifestProcessingRules': toJson_MediaTailorManifestProcessingRules(obj.manifestProcessingRules),
    'Name': obj.name,
    'PersonalizationThresholdSeconds': obj.personalizationThresholdSeconds,
    'SlateAdUrl': obj.slateAdUrl,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'TranscodeProfileName': obj.transcodeProfileName,
    'VideoContentSourceUrl': obj.videoContentSourceUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
   * @schema MediaTailorPutPlaybackConfigurationResponse#ConfigurationAliases
   */
  readonly configurationAliases?: { [key: string]: { [key: string]: string } };

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
 * Converts an object of type 'MediaTailorPutPlaybackConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorPutPlaybackConfigurationResponse(obj: MediaTailorPutPlaybackConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AdDecisionServerUrl': obj.adDecisionServerUrl,
    'AvailSuppression': toJson_MediaTailorAvailSuppression(obj.availSuppression),
    'Bumper': toJson_MediaTailorBumper(obj.bumper),
    'CdnConfiguration': toJson_MediaTailorCdnConfiguration(obj.cdnConfiguration),
    'ConfigurationAliases': ((obj.configurationAliases) === undefined) ? undefined : (Object.entries(obj.configurationAliases).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: ((i[1]) === undefined) ? undefined : (Object.entries(i[1]).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})) }), {})),
    'DashConfiguration': toJson_MediaTailorDashConfiguration(obj.dashConfiguration),
    'HlsConfiguration': toJson_MediaTailorHlsConfiguration(obj.hlsConfiguration),
    'LivePreRollConfiguration': toJson_MediaTailorLivePreRollConfiguration(obj.livePreRollConfiguration),
    'ManifestProcessingRules': toJson_MediaTailorManifestProcessingRules(obj.manifestProcessingRules),
    'Name': obj.name,
    'PersonalizationThresholdSeconds': obj.personalizationThresholdSeconds,
    'PlaybackConfigurationArn': obj.playbackConfigurationArn,
    'PlaybackEndpointPrefix': obj.playbackEndpointPrefix,
    'SessionInitializationEndpointPrefix': obj.sessionInitializationEndpointPrefix,
    'SlateAdUrl': obj.slateAdUrl,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'TranscodeProfileName': obj.transcodeProfileName,
    'VideoContentSourceUrl': obj.videoContentSourceUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorStartChannelRequest
 */
export interface MediaTailorStartChannelRequest {
  /**
   * @schema MediaTailorStartChannelRequest#ChannelName
   */
  readonly channelName?: string;

}

/**
 * Converts an object of type 'MediaTailorStartChannelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorStartChannelRequest(obj: MediaTailorStartChannelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelName': obj.channelName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorStartChannelResponse
 */
export interface MediaTailorStartChannelResponse {
}

/**
 * Converts an object of type 'MediaTailorStartChannelResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorStartChannelResponse(obj: MediaTailorStartChannelResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorStopChannelRequest
 */
export interface MediaTailorStopChannelRequest {
  /**
   * @schema MediaTailorStopChannelRequest#ChannelName
   */
  readonly channelName?: string;

}

/**
 * Converts an object of type 'MediaTailorStopChannelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorStopChannelRequest(obj: MediaTailorStopChannelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelName': obj.channelName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorStopChannelResponse
 */
export interface MediaTailorStopChannelResponse {
}

/**
 * Converts an object of type 'MediaTailorStopChannelResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorStopChannelResponse(obj: MediaTailorStopChannelResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorTagResourceRequest
 */
export interface MediaTailorTagResourceRequest {
  /**
   * @schema MediaTailorTagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema MediaTailorTagResourceRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'MediaTailorTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorTagResourceRequest(obj: MediaTailorTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorUntagResourceRequest
 */
export interface MediaTailorUntagResourceRequest {
  /**
   * @schema MediaTailorUntagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema MediaTailorUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'MediaTailorUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorUntagResourceRequest(obj: MediaTailorUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorUpdateChannelRequest
 */
export interface MediaTailorUpdateChannelRequest {
  /**
   * @schema MediaTailorUpdateChannelRequest#ChannelName
   */
  readonly channelName?: string;

  /**
   * @schema MediaTailorUpdateChannelRequest#Outputs
   */
  readonly outputs?: MediaTailorRequestOutputItem[];

}

/**
 * Converts an object of type 'MediaTailorUpdateChannelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorUpdateChannelRequest(obj: MediaTailorUpdateChannelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelName': obj.channelName,
    'Outputs': obj.outputs?.map(y => toJson_MediaTailorRequestOutputItem(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorUpdateChannelResponse
 */
export interface MediaTailorUpdateChannelResponse {
  /**
   * @schema MediaTailorUpdateChannelResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaTailorUpdateChannelResponse#ChannelName
   */
  readonly channelName?: string;

  /**
   * @schema MediaTailorUpdateChannelResponse#ChannelState
   */
  readonly channelState?: string;

  /**
   * @schema MediaTailorUpdateChannelResponse#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema MediaTailorUpdateChannelResponse#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema MediaTailorUpdateChannelResponse#Outputs
   */
  readonly outputs?: MediaTailorResponseOutputItem[];

  /**
   * @schema MediaTailorUpdateChannelResponse#PlaybackMode
   */
  readonly playbackMode?: string;

  /**
   * @schema MediaTailorUpdateChannelResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'MediaTailorUpdateChannelResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorUpdateChannelResponse(obj: MediaTailorUpdateChannelResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'ChannelName': obj.channelName,
    'ChannelState': obj.channelState,
    'CreationTime': obj.creationTime,
    'LastModifiedTime': obj.lastModifiedTime,
    'Outputs': obj.outputs?.map(y => toJson_MediaTailorResponseOutputItem(y)),
    'PlaybackMode': obj.playbackMode,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorUpdateSourceLocationRequest
 */
export interface MediaTailorUpdateSourceLocationRequest {
  /**
   * @schema MediaTailorUpdateSourceLocationRequest#AccessConfiguration
   */
  readonly accessConfiguration?: MediaTailorAccessConfiguration;

  /**
   * @schema MediaTailorUpdateSourceLocationRequest#DefaultSegmentDeliveryConfiguration
   */
  readonly defaultSegmentDeliveryConfiguration?: MediaTailorDefaultSegmentDeliveryConfiguration;

  /**
   * @schema MediaTailorUpdateSourceLocationRequest#HttpConfiguration
   */
  readonly httpConfiguration?: MediaTailorHttpConfiguration;

  /**
   * @schema MediaTailorUpdateSourceLocationRequest#SourceLocationName
   */
  readonly sourceLocationName?: string;

}

/**
 * Converts an object of type 'MediaTailorUpdateSourceLocationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorUpdateSourceLocationRequest(obj: MediaTailorUpdateSourceLocationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccessConfiguration': toJson_MediaTailorAccessConfiguration(obj.accessConfiguration),
    'DefaultSegmentDeliveryConfiguration': toJson_MediaTailorDefaultSegmentDeliveryConfiguration(obj.defaultSegmentDeliveryConfiguration),
    'HttpConfiguration': toJson_MediaTailorHttpConfiguration(obj.httpConfiguration),
    'SourceLocationName': obj.sourceLocationName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorUpdateSourceLocationResponse
 */
export interface MediaTailorUpdateSourceLocationResponse {
  /**
   * @schema MediaTailorUpdateSourceLocationResponse#AccessConfiguration
   */
  readonly accessConfiguration?: MediaTailorAccessConfiguration;

  /**
   * @schema MediaTailorUpdateSourceLocationResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaTailorUpdateSourceLocationResponse#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema MediaTailorUpdateSourceLocationResponse#DefaultSegmentDeliveryConfiguration
   */
  readonly defaultSegmentDeliveryConfiguration?: MediaTailorDefaultSegmentDeliveryConfiguration;

  /**
   * @schema MediaTailorUpdateSourceLocationResponse#HttpConfiguration
   */
  readonly httpConfiguration?: MediaTailorHttpConfiguration;

  /**
   * @schema MediaTailorUpdateSourceLocationResponse#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema MediaTailorUpdateSourceLocationResponse#SourceLocationName
   */
  readonly sourceLocationName?: string;

  /**
   * @schema MediaTailorUpdateSourceLocationResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'MediaTailorUpdateSourceLocationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorUpdateSourceLocationResponse(obj: MediaTailorUpdateSourceLocationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccessConfiguration': toJson_MediaTailorAccessConfiguration(obj.accessConfiguration),
    'Arn': obj.arn,
    'CreationTime': obj.creationTime,
    'DefaultSegmentDeliveryConfiguration': toJson_MediaTailorDefaultSegmentDeliveryConfiguration(obj.defaultSegmentDeliveryConfiguration),
    'HttpConfiguration': toJson_MediaTailorHttpConfiguration(obj.httpConfiguration),
    'LastModifiedTime': obj.lastModifiedTime,
    'SourceLocationName': obj.sourceLocationName,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorUpdateVodSourceRequest
 */
export interface MediaTailorUpdateVodSourceRequest {
  /**
   * @schema MediaTailorUpdateVodSourceRequest#HttpPackageConfigurations
   */
  readonly httpPackageConfigurations?: MediaTailorHttpPackageConfiguration[];

  /**
   * @schema MediaTailorUpdateVodSourceRequest#SourceLocationName
   */
  readonly sourceLocationName?: string;

  /**
   * @schema MediaTailorUpdateVodSourceRequest#VodSourceName
   */
  readonly vodSourceName?: string;

}

/**
 * Converts an object of type 'MediaTailorUpdateVodSourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorUpdateVodSourceRequest(obj: MediaTailorUpdateVodSourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HttpPackageConfigurations': obj.httpPackageConfigurations?.map(y => toJson_MediaTailorHttpPackageConfiguration(y)),
    'SourceLocationName': obj.sourceLocationName,
    'VodSourceName': obj.vodSourceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorUpdateVodSourceResponse
 */
export interface MediaTailorUpdateVodSourceResponse {
  /**
   * @schema MediaTailorUpdateVodSourceResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaTailorUpdateVodSourceResponse#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema MediaTailorUpdateVodSourceResponse#HttpPackageConfigurations
   */
  readonly httpPackageConfigurations?: MediaTailorHttpPackageConfiguration[];

  /**
   * @schema MediaTailorUpdateVodSourceResponse#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema MediaTailorUpdateVodSourceResponse#SourceLocationName
   */
  readonly sourceLocationName?: string;

  /**
   * @schema MediaTailorUpdateVodSourceResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema MediaTailorUpdateVodSourceResponse#VodSourceName
   */
  readonly vodSourceName?: string;

}

/**
 * Converts an object of type 'MediaTailorUpdateVodSourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorUpdateVodSourceResponse(obj: MediaTailorUpdateVodSourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CreationTime': obj.creationTime,
    'HttpPackageConfigurations': obj.httpPackageConfigurations?.map(y => toJson_MediaTailorHttpPackageConfiguration(y)),
    'LastModifiedTime': obj.lastModifiedTime,
    'SourceLocationName': obj.sourceLocationName,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'VodSourceName': obj.vodSourceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorRequestOutputItem
 */
export interface MediaTailorRequestOutputItem {
  /**
   * @schema MediaTailorRequestOutputItem#DashPlaylistSettings
   */
  readonly dashPlaylistSettings?: MediaTailorDashPlaylistSettings;

  /**
   * @schema MediaTailorRequestOutputItem#HlsPlaylistSettings
   */
  readonly hlsPlaylistSettings?: MediaTailorHlsPlaylistSettings;

  /**
   * @schema MediaTailorRequestOutputItem#ManifestName
   */
  readonly manifestName?: string;

  /**
   * @schema MediaTailorRequestOutputItem#SourceGroup
   */
  readonly sourceGroup?: string;

}

/**
 * Converts an object of type 'MediaTailorRequestOutputItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorRequestOutputItem(obj: MediaTailorRequestOutputItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DashPlaylistSettings': toJson_MediaTailorDashPlaylistSettings(obj.dashPlaylistSettings),
    'HlsPlaylistSettings': toJson_MediaTailorHlsPlaylistSettings(obj.hlsPlaylistSettings),
    'ManifestName': obj.manifestName,
    'SourceGroup': obj.sourceGroup,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorResponseOutputItem
 */
export interface MediaTailorResponseOutputItem {
  /**
   * @schema MediaTailorResponseOutputItem#DashPlaylistSettings
   */
  readonly dashPlaylistSettings?: MediaTailorDashPlaylistSettings;

  /**
   * @schema MediaTailorResponseOutputItem#HlsPlaylistSettings
   */
  readonly hlsPlaylistSettings?: MediaTailorHlsPlaylistSettings;

  /**
   * @schema MediaTailorResponseOutputItem#ManifestName
   */
  readonly manifestName?: string;

  /**
   * @schema MediaTailorResponseOutputItem#PlaybackUrl
   */
  readonly playbackUrl?: string;

  /**
   * @schema MediaTailorResponseOutputItem#SourceGroup
   */
  readonly sourceGroup?: string;

}

/**
 * Converts an object of type 'MediaTailorResponseOutputItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorResponseOutputItem(obj: MediaTailorResponseOutputItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DashPlaylistSettings': toJson_MediaTailorDashPlaylistSettings(obj.dashPlaylistSettings),
    'HlsPlaylistSettings': toJson_MediaTailorHlsPlaylistSettings(obj.hlsPlaylistSettings),
    'ManifestName': obj.manifestName,
    'PlaybackUrl': obj.playbackUrl,
    'SourceGroup': obj.sourceGroup,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorAdBreak
 */
export interface MediaTailorAdBreak {
  /**
   * @schema MediaTailorAdBreak#MessageType
   */
  readonly messageType?: string;

  /**
   * @schema MediaTailorAdBreak#OffsetMillis
   */
  readonly offsetMillis?: number;

  /**
   * @schema MediaTailorAdBreak#Slate
   */
  readonly slate?: MediaTailorSlateSource;

  /**
   * @schema MediaTailorAdBreak#SpliceInsertMessage
   */
  readonly spliceInsertMessage?: MediaTailorSpliceInsertMessage;

}

/**
 * Converts an object of type 'MediaTailorAdBreak' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorAdBreak(obj: MediaTailorAdBreak | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MessageType': obj.messageType,
    'OffsetMillis': obj.offsetMillis,
    'Slate': toJson_MediaTailorSlateSource(obj.slate),
    'SpliceInsertMessage': toJson_MediaTailorSpliceInsertMessage(obj.spliceInsertMessage),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorScheduleConfiguration
 */
export interface MediaTailorScheduleConfiguration {
  /**
   * @schema MediaTailorScheduleConfiguration#Transition
   */
  readonly transition?: MediaTailorTransition;

}

/**
 * Converts an object of type 'MediaTailorScheduleConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorScheduleConfiguration(obj: MediaTailorScheduleConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Transition': toJson_MediaTailorTransition(obj.transition),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorAccessConfiguration
 */
export interface MediaTailorAccessConfiguration {
  /**
   * @schema MediaTailorAccessConfiguration#AccessType
   */
  readonly accessType?: string;

  /**
   * @schema MediaTailorAccessConfiguration#SecretsManagerAccessTokenConfiguration
   */
  readonly secretsManagerAccessTokenConfiguration?: MediaTailorSecretsManagerAccessTokenConfiguration;

}

/**
 * Converts an object of type 'MediaTailorAccessConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorAccessConfiguration(obj: MediaTailorAccessConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccessType': obj.accessType,
    'SecretsManagerAccessTokenConfiguration': toJson_MediaTailorSecretsManagerAccessTokenConfiguration(obj.secretsManagerAccessTokenConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorDefaultSegmentDeliveryConfiguration
 */
export interface MediaTailorDefaultSegmentDeliveryConfiguration {
  /**
   * @schema MediaTailorDefaultSegmentDeliveryConfiguration#BaseUrl
   */
  readonly baseUrl?: string;

}

/**
 * Converts an object of type 'MediaTailorDefaultSegmentDeliveryConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorDefaultSegmentDeliveryConfiguration(obj: MediaTailorDefaultSegmentDeliveryConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BaseUrl': obj.baseUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorHttpConfiguration
 */
export interface MediaTailorHttpConfiguration {
  /**
   * @schema MediaTailorHttpConfiguration#BaseUrl
   */
  readonly baseUrl?: string;

}

/**
 * Converts an object of type 'MediaTailorHttpConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorHttpConfiguration(obj: MediaTailorHttpConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BaseUrl': obj.baseUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorHttpPackageConfiguration
 */
export interface MediaTailorHttpPackageConfiguration {
  /**
   * @schema MediaTailorHttpPackageConfiguration#Path
   */
  readonly path?: string;

  /**
   * @schema MediaTailorHttpPackageConfiguration#SourceGroup
   */
  readonly sourceGroup?: string;

  /**
   * @schema MediaTailorHttpPackageConfiguration#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'MediaTailorHttpPackageConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorHttpPackageConfiguration(obj: MediaTailorHttpPackageConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Path': obj.path,
    'SourceGroup': obj.sourceGroup,
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorScheduleEntry
 */
export interface MediaTailorScheduleEntry {
  /**
   * @schema MediaTailorScheduleEntry#ApproximateDurationSeconds
   */
  readonly approximateDurationSeconds?: number;

  /**
   * @schema MediaTailorScheduleEntry#ApproximateStartTime
   */
  readonly approximateStartTime?: string;

  /**
   * @schema MediaTailorScheduleEntry#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaTailorScheduleEntry#ChannelName
   */
  readonly channelName?: string;

  /**
   * @schema MediaTailorScheduleEntry#ProgramName
   */
  readonly programName?: string;

  /**
   * @schema MediaTailorScheduleEntry#ScheduleAdBreaks
   */
  readonly scheduleAdBreaks?: MediaTailorScheduleAdBreak[];

  /**
   * @schema MediaTailorScheduleEntry#SourceLocationName
   */
  readonly sourceLocationName?: string;

  /**
   * @schema MediaTailorScheduleEntry#VodSourceName
   */
  readonly vodSourceName?: string;

}

/**
 * Converts an object of type 'MediaTailorScheduleEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorScheduleEntry(obj: MediaTailorScheduleEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApproximateDurationSeconds': obj.approximateDurationSeconds,
    'ApproximateStartTime': obj.approximateStartTime,
    'Arn': obj.arn,
    'ChannelName': obj.channelName,
    'ProgramName': obj.programName,
    'ScheduleAdBreaks': obj.scheduleAdBreaks?.map(y => toJson_MediaTailorScheduleAdBreak(y)),
    'SourceLocationName': obj.sourceLocationName,
    'VodSourceName': obj.vodSourceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaTailorAvailSuppression' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorAvailSuppression(obj: MediaTailorAvailSuppression | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Mode': obj.mode,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaTailorBumper' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorBumper(obj: MediaTailorBumper | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndUrl': obj.endUrl,
    'StartUrl': obj.startUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaTailorCdnConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorCdnConfiguration(obj: MediaTailorCdnConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AdSegmentUrlPrefix': obj.adSegmentUrlPrefix,
    'ContentSegmentUrlPrefix': obj.contentSegmentUrlPrefix,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaTailorDashConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorDashConfiguration(obj: MediaTailorDashConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ManifestEndpointPrefix': obj.manifestEndpointPrefix,
    'MpdLocation': obj.mpdLocation,
    'OriginManifestType': obj.originManifestType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaTailorHlsConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorHlsConfiguration(obj: MediaTailorHlsConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ManifestEndpointPrefix': obj.manifestEndpointPrefix,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaTailorLivePreRollConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorLivePreRollConfiguration(obj: MediaTailorLivePreRollConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AdDecisionServerUrl': obj.adDecisionServerUrl,
    'MaxDurationSeconds': obj.maxDurationSeconds,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaTailorManifestProcessingRules' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorManifestProcessingRules(obj: MediaTailorManifestProcessingRules | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AdMarkerPassthrough': toJson_MediaTailorAdMarkerPassthrough(obj.adMarkerPassthrough),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorAlert
 */
export interface MediaTailorAlert {
  /**
   * @schema MediaTailorAlert#AlertCode
   */
  readonly alertCode?: string;

  /**
   * @schema MediaTailorAlert#AlertMessage
   */
  readonly alertMessage?: string;

  /**
   * @schema MediaTailorAlert#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema MediaTailorAlert#RelatedResourceArns
   */
  readonly relatedResourceArns?: string[];

  /**
   * @schema MediaTailorAlert#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'MediaTailorAlert' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorAlert(obj: MediaTailorAlert | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AlertCode': obj.alertCode,
    'AlertMessage': obj.alertMessage,
    'LastModifiedTime': obj.lastModifiedTime,
    'RelatedResourceArns': obj.relatedResourceArns?.map(y => y),
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorChannel
 */
export interface MediaTailorChannel {
  /**
   * @schema MediaTailorChannel#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaTailorChannel#ChannelName
   */
  readonly channelName?: string;

  /**
   * @schema MediaTailorChannel#ChannelState
   */
  readonly channelState?: string;

  /**
   * @schema MediaTailorChannel#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema MediaTailorChannel#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema MediaTailorChannel#Outputs
   */
  readonly outputs?: MediaTailorResponseOutputItem[];

  /**
   * @schema MediaTailorChannel#PlaybackMode
   */
  readonly playbackMode?: string;

  /**
   * @schema MediaTailorChannel#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'MediaTailorChannel' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorChannel(obj: MediaTailorChannel | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'ChannelName': obj.channelName,
    'ChannelState': obj.channelState,
    'CreationTime': obj.creationTime,
    'LastModifiedTime': obj.lastModifiedTime,
    'Outputs': obj.outputs?.map(y => toJson_MediaTailorResponseOutputItem(y)),
    'PlaybackMode': obj.playbackMode,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
   * @schema MediaTailorPlaybackConfiguration#ConfigurationAliases
   */
  readonly configurationAliases?: { [key: string]: { [key: string]: string } };

  /**
   * @schema MediaTailorPlaybackConfiguration#DashConfiguration
   */
  readonly dashConfiguration?: MediaTailorDashConfiguration;

  /**
   * @schema MediaTailorPlaybackConfiguration#HlsConfiguration
   */
  readonly hlsConfiguration?: MediaTailorHlsConfiguration;

  /**
   * @schema MediaTailorPlaybackConfiguration#LivePreRollConfiguration
   */
  readonly livePreRollConfiguration?: MediaTailorLivePreRollConfiguration;

  /**
   * @schema MediaTailorPlaybackConfiguration#ManifestProcessingRules
   */
  readonly manifestProcessingRules?: MediaTailorManifestProcessingRules;

  /**
   * @schema MediaTailorPlaybackConfiguration#Name
   */
  readonly name?: string;

  /**
   * @schema MediaTailorPlaybackConfiguration#PersonalizationThresholdSeconds
   */
  readonly personalizationThresholdSeconds?: number;

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
   * @schema MediaTailorPlaybackConfiguration#VideoContentSourceUrl
   */
  readonly videoContentSourceUrl?: string;

}

/**
 * Converts an object of type 'MediaTailorPlaybackConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorPlaybackConfiguration(obj: MediaTailorPlaybackConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AdDecisionServerUrl': obj.adDecisionServerUrl,
    'AvailSuppression': toJson_MediaTailorAvailSuppression(obj.availSuppression),
    'Bumper': toJson_MediaTailorBumper(obj.bumper),
    'CdnConfiguration': toJson_MediaTailorCdnConfiguration(obj.cdnConfiguration),
    'ConfigurationAliases': ((obj.configurationAliases) === undefined) ? undefined : (Object.entries(obj.configurationAliases).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: ((i[1]) === undefined) ? undefined : (Object.entries(i[1]).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})) }), {})),
    'DashConfiguration': toJson_MediaTailorDashConfiguration(obj.dashConfiguration),
    'HlsConfiguration': toJson_MediaTailorHlsConfiguration(obj.hlsConfiguration),
    'LivePreRollConfiguration': toJson_MediaTailorLivePreRollConfiguration(obj.livePreRollConfiguration),
    'ManifestProcessingRules': toJson_MediaTailorManifestProcessingRules(obj.manifestProcessingRules),
    'Name': obj.name,
    'PersonalizationThresholdSeconds': obj.personalizationThresholdSeconds,
    'PlaybackConfigurationArn': obj.playbackConfigurationArn,
    'PlaybackEndpointPrefix': obj.playbackEndpointPrefix,
    'SessionInitializationEndpointPrefix': obj.sessionInitializationEndpointPrefix,
    'SlateAdUrl': obj.slateAdUrl,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'TranscodeProfileName': obj.transcodeProfileName,
    'VideoContentSourceUrl': obj.videoContentSourceUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorSourceLocation
 */
export interface MediaTailorSourceLocation {
  /**
   * @schema MediaTailorSourceLocation#AccessConfiguration
   */
  readonly accessConfiguration?: MediaTailorAccessConfiguration;

  /**
   * @schema MediaTailorSourceLocation#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaTailorSourceLocation#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema MediaTailorSourceLocation#DefaultSegmentDeliveryConfiguration
   */
  readonly defaultSegmentDeliveryConfiguration?: MediaTailorDefaultSegmentDeliveryConfiguration;

  /**
   * @schema MediaTailorSourceLocation#HttpConfiguration
   */
  readonly httpConfiguration?: MediaTailorHttpConfiguration;

  /**
   * @schema MediaTailorSourceLocation#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema MediaTailorSourceLocation#SourceLocationName
   */
  readonly sourceLocationName?: string;

  /**
   * @schema MediaTailorSourceLocation#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'MediaTailorSourceLocation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorSourceLocation(obj: MediaTailorSourceLocation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccessConfiguration': toJson_MediaTailorAccessConfiguration(obj.accessConfiguration),
    'Arn': obj.arn,
    'CreationTime': obj.creationTime,
    'DefaultSegmentDeliveryConfiguration': toJson_MediaTailorDefaultSegmentDeliveryConfiguration(obj.defaultSegmentDeliveryConfiguration),
    'HttpConfiguration': toJson_MediaTailorHttpConfiguration(obj.httpConfiguration),
    'LastModifiedTime': obj.lastModifiedTime,
    'SourceLocationName': obj.sourceLocationName,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorVodSource
 */
export interface MediaTailorVodSource {
  /**
   * @schema MediaTailorVodSource#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaTailorVodSource#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema MediaTailorVodSource#HttpPackageConfigurations
   */
  readonly httpPackageConfigurations?: MediaTailorHttpPackageConfiguration[];

  /**
   * @schema MediaTailorVodSource#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema MediaTailorVodSource#SourceLocationName
   */
  readonly sourceLocationName?: string;

  /**
   * @schema MediaTailorVodSource#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema MediaTailorVodSource#VodSourceName
   */
  readonly vodSourceName?: string;

}

/**
 * Converts an object of type 'MediaTailorVodSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorVodSource(obj: MediaTailorVodSource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CreationTime': obj.creationTime,
    'HttpPackageConfigurations': obj.httpPackageConfigurations?.map(y => toJson_MediaTailorHttpPackageConfiguration(y)),
    'LastModifiedTime': obj.lastModifiedTime,
    'SourceLocationName': obj.sourceLocationName,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'VodSourceName': obj.vodSourceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaTailorDashConfigurationForPut' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorDashConfigurationForPut(obj: MediaTailorDashConfigurationForPut | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MpdLocation': obj.mpdLocation,
    'OriginManifestType': obj.originManifestType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorDashPlaylistSettings
 */
export interface MediaTailorDashPlaylistSettings {
  /**
   * @schema MediaTailorDashPlaylistSettings#ManifestWindowSeconds
   */
  readonly manifestWindowSeconds?: number;

  /**
   * @schema MediaTailorDashPlaylistSettings#MinBufferTimeSeconds
   */
  readonly minBufferTimeSeconds?: number;

  /**
   * @schema MediaTailorDashPlaylistSettings#MinUpdatePeriodSeconds
   */
  readonly minUpdatePeriodSeconds?: number;

  /**
   * @schema MediaTailorDashPlaylistSettings#SuggestedPresentationDelaySeconds
   */
  readonly suggestedPresentationDelaySeconds?: number;

}

/**
 * Converts an object of type 'MediaTailorDashPlaylistSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorDashPlaylistSettings(obj: MediaTailorDashPlaylistSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ManifestWindowSeconds': obj.manifestWindowSeconds,
    'MinBufferTimeSeconds': obj.minBufferTimeSeconds,
    'MinUpdatePeriodSeconds': obj.minUpdatePeriodSeconds,
    'SuggestedPresentationDelaySeconds': obj.suggestedPresentationDelaySeconds,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorHlsPlaylistSettings
 */
export interface MediaTailorHlsPlaylistSettings {
  /**
   * @schema MediaTailorHlsPlaylistSettings#ManifestWindowSeconds
   */
  readonly manifestWindowSeconds?: number;

}

/**
 * Converts an object of type 'MediaTailorHlsPlaylistSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorHlsPlaylistSettings(obj: MediaTailorHlsPlaylistSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ManifestWindowSeconds': obj.manifestWindowSeconds,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorSlateSource
 */
export interface MediaTailorSlateSource {
  /**
   * @schema MediaTailorSlateSource#SourceLocationName
   */
  readonly sourceLocationName?: string;

  /**
   * @schema MediaTailorSlateSource#VodSourceName
   */
  readonly vodSourceName?: string;

}

/**
 * Converts an object of type 'MediaTailorSlateSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorSlateSource(obj: MediaTailorSlateSource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceLocationName': obj.sourceLocationName,
    'VodSourceName': obj.vodSourceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorSpliceInsertMessage
 */
export interface MediaTailorSpliceInsertMessage {
  /**
   * @schema MediaTailorSpliceInsertMessage#AvailNum
   */
  readonly availNum?: number;

  /**
   * @schema MediaTailorSpliceInsertMessage#AvailsExpected
   */
  readonly availsExpected?: number;

  /**
   * @schema MediaTailorSpliceInsertMessage#SpliceEventId
   */
  readonly spliceEventId?: number;

  /**
   * @schema MediaTailorSpliceInsertMessage#UniqueProgramId
   */
  readonly uniqueProgramId?: number;

}

/**
 * Converts an object of type 'MediaTailorSpliceInsertMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorSpliceInsertMessage(obj: MediaTailorSpliceInsertMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AvailNum': obj.availNum,
    'AvailsExpected': obj.availsExpected,
    'SpliceEventId': obj.spliceEventId,
    'UniqueProgramId': obj.uniqueProgramId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorTransition
 */
export interface MediaTailorTransition {
  /**
   * @schema MediaTailorTransition#RelativePosition
   */
  readonly relativePosition?: string;

  /**
   * @schema MediaTailorTransition#RelativeProgram
   */
  readonly relativeProgram?: string;

  /**
   * @schema MediaTailorTransition#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'MediaTailorTransition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorTransition(obj: MediaTailorTransition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RelativePosition': obj.relativePosition,
    'RelativeProgram': obj.relativeProgram,
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorSecretsManagerAccessTokenConfiguration
 */
export interface MediaTailorSecretsManagerAccessTokenConfiguration {
  /**
   * @schema MediaTailorSecretsManagerAccessTokenConfiguration#HeaderName
   */
  readonly headerName?: string;

  /**
   * @schema MediaTailorSecretsManagerAccessTokenConfiguration#SecretArn
   */
  readonly secretArn?: string;

  /**
   * @schema MediaTailorSecretsManagerAccessTokenConfiguration#SecretStringKey
   */
  readonly secretStringKey?: string;

}

/**
 * Converts an object of type 'MediaTailorSecretsManagerAccessTokenConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorSecretsManagerAccessTokenConfiguration(obj: MediaTailorSecretsManagerAccessTokenConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HeaderName': obj.headerName,
    'SecretArn': obj.secretArn,
    'SecretStringKey': obj.secretStringKey,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorScheduleAdBreak
 */
export interface MediaTailorScheduleAdBreak {
  /**
   * @schema MediaTailorScheduleAdBreak#ApproximateDurationSeconds
   */
  readonly approximateDurationSeconds?: number;

  /**
   * @schema MediaTailorScheduleAdBreak#ApproximateStartTime
   */
  readonly approximateStartTime?: string;

  /**
   * @schema MediaTailorScheduleAdBreak#SourceLocationName
   */
  readonly sourceLocationName?: string;

  /**
   * @schema MediaTailorScheduleAdBreak#VodSourceName
   */
  readonly vodSourceName?: string;

}

/**
 * Converts an object of type 'MediaTailorScheduleAdBreak' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorScheduleAdBreak(obj: MediaTailorScheduleAdBreak | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApproximateDurationSeconds': obj.approximateDurationSeconds,
    'ApproximateStartTime': obj.approximateStartTime,
    'SourceLocationName': obj.sourceLocationName,
    'VodSourceName': obj.vodSourceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaTailorAdMarkerPassthrough
 */
export interface MediaTailorAdMarkerPassthrough {
  /**
   * @schema MediaTailorAdMarkerPassthrough#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * Converts an object of type 'MediaTailorAdMarkerPassthrough' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaTailorAdMarkerPassthrough(obj: MediaTailorAdMarkerPassthrough | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Enabled': obj.enabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
