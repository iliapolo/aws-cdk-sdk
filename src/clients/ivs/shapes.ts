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
 * Converts an object of type 'IvsBatchGetChannelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IvsBatchGetChannelRequest(obj: IvsBatchGetChannelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arns': obj.arns?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IvsBatchGetChannelResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IvsBatchGetChannelResponse(obj: IvsBatchGetChannelResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'channels': obj.channels?.map(y => toJson_IvsChannel(y)),
    'errors': obj.errors?.map(y => toJson_IvsBatchError(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IvsBatchGetStreamKeyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IvsBatchGetStreamKeyRequest(obj: IvsBatchGetStreamKeyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arns': obj.arns?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IvsBatchGetStreamKeyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IvsBatchGetStreamKeyResponse(obj: IvsBatchGetStreamKeyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'streamKeys': obj.streamKeys?.map(y => toJson_IvsStreamKey(y)),
    'errors': obj.errors?.map(y => toJson_IvsBatchError(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
   * @schema IvsCreateChannelRequest#recordingConfigurationArn
   */
  readonly recordingConfigurationArn?: string;

  /**
   * @schema IvsCreateChannelRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'IvsCreateChannelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IvsCreateChannelRequest(obj: IvsCreateChannelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'latencyMode': obj.latencyMode,
    'type': obj.type,
    'authorized': obj.authorized,
    'recordingConfigurationArn': obj.recordingConfigurationArn,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IvsCreateChannelResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IvsCreateChannelResponse(obj: IvsCreateChannelResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'channel': toJson_IvsChannel(obj.channel),
    'streamKey': toJson_IvsStreamKey(obj.streamKey),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IvsCreateRecordingConfigurationRequest
 */
export interface IvsCreateRecordingConfigurationRequest {
  /**
   * @schema IvsCreateRecordingConfigurationRequest#name
   */
  readonly name?: string;

  /**
   * @schema IvsCreateRecordingConfigurationRequest#destinationConfiguration
   */
  readonly destinationConfiguration: IvsDestinationConfiguration;

  /**
   * @schema IvsCreateRecordingConfigurationRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'IvsCreateRecordingConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IvsCreateRecordingConfigurationRequest(obj: IvsCreateRecordingConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'destinationConfiguration': toJson_IvsDestinationConfiguration(obj.destinationConfiguration),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IvsCreateRecordingConfigurationResponse
 */
export interface IvsCreateRecordingConfigurationResponse {
  /**
   * @schema IvsCreateRecordingConfigurationResponse#recordingConfiguration
   */
  readonly recordingConfiguration?: IvsRecordingConfiguration;

}

/**
 * Converts an object of type 'IvsCreateRecordingConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IvsCreateRecordingConfigurationResponse(obj: IvsCreateRecordingConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'recordingConfiguration': toJson_IvsRecordingConfiguration(obj.recordingConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IvsCreateStreamKeyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IvsCreateStreamKeyRequest(obj: IvsCreateStreamKeyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'channelArn': obj.channelArn,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IvsCreateStreamKeyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IvsCreateStreamKeyResponse(obj: IvsCreateStreamKeyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'streamKey': toJson_IvsStreamKey(obj.streamKey),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IvsDeleteChannelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IvsDeleteChannelRequest(obj: IvsDeleteChannelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IvsDeletePlaybackKeyPairRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IvsDeletePlaybackKeyPairRequest(obj: IvsDeletePlaybackKeyPairRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IvsDeletePlaybackKeyPairResponse
 */
export interface IvsDeletePlaybackKeyPairResponse {
}

/**
 * Converts an object of type 'IvsDeletePlaybackKeyPairResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IvsDeletePlaybackKeyPairResponse(obj: IvsDeletePlaybackKeyPairResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IvsDeleteRecordingConfigurationRequest
 */
export interface IvsDeleteRecordingConfigurationRequest {
  /**
   * @schema IvsDeleteRecordingConfigurationRequest#arn
   */
  readonly arn: string;

}

/**
 * Converts an object of type 'IvsDeleteRecordingConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IvsDeleteRecordingConfigurationRequest(obj: IvsDeleteRecordingConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IvsDeleteStreamKeyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IvsDeleteStreamKeyRequest(obj: IvsDeleteStreamKeyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IvsGetChannelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IvsGetChannelRequest(obj: IvsGetChannelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IvsGetChannelResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IvsGetChannelResponse(obj: IvsGetChannelResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'channel': toJson_IvsChannel(obj.channel),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IvsGetPlaybackKeyPairRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IvsGetPlaybackKeyPairRequest(obj: IvsGetPlaybackKeyPairRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IvsGetPlaybackKeyPairResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IvsGetPlaybackKeyPairResponse(obj: IvsGetPlaybackKeyPairResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'keyPair': toJson_IvsPlaybackKeyPair(obj.keyPair),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IvsGetRecordingConfigurationRequest
 */
export interface IvsGetRecordingConfigurationRequest {
  /**
   * @schema IvsGetRecordingConfigurationRequest#arn
   */
  readonly arn: string;

}

/**
 * Converts an object of type 'IvsGetRecordingConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IvsGetRecordingConfigurationRequest(obj: IvsGetRecordingConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IvsGetRecordingConfigurationResponse
 */
export interface IvsGetRecordingConfigurationResponse {
  /**
   * @schema IvsGetRecordingConfigurationResponse#recordingConfiguration
   */
  readonly recordingConfiguration?: IvsRecordingConfiguration;

}

/**
 * Converts an object of type 'IvsGetRecordingConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IvsGetRecordingConfigurationResponse(obj: IvsGetRecordingConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'recordingConfiguration': toJson_IvsRecordingConfiguration(obj.recordingConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IvsGetStreamRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IvsGetStreamRequest(obj: IvsGetStreamRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'channelArn': obj.channelArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IvsGetStreamResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IvsGetStreamResponse(obj: IvsGetStreamResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'stream': toJson_IvsStream(obj.stream),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IvsGetStreamKeyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IvsGetStreamKeyRequest(obj: IvsGetStreamKeyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IvsGetStreamKeyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IvsGetStreamKeyResponse(obj: IvsGetStreamKeyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'streamKey': toJson_IvsStreamKey(obj.streamKey),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IvsImportPlaybackKeyPairRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IvsImportPlaybackKeyPairRequest(obj: IvsImportPlaybackKeyPairRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'publicKeyMaterial': obj.publicKeyMaterial,
    'name': obj.name,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IvsImportPlaybackKeyPairResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IvsImportPlaybackKeyPairResponse(obj: IvsImportPlaybackKeyPairResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'keyPair': toJson_IvsPlaybackKeyPair(obj.keyPair),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IvsListChannelsRequest
 */
export interface IvsListChannelsRequest {
  /**
   * @schema IvsListChannelsRequest#filterByName
   */
  readonly filterByName?: string;

  /**
   * @schema IvsListChannelsRequest#filterByRecordingConfigurationArn
   */
  readonly filterByRecordingConfigurationArn?: string;

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
 * Converts an object of type 'IvsListChannelsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IvsListChannelsRequest(obj: IvsListChannelsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'filterByName': obj.filterByName,
    'filterByRecordingConfigurationArn': obj.filterByRecordingConfigurationArn,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IvsListChannelsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IvsListChannelsResponse(obj: IvsListChannelsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'channels': obj.channels?.map(y => toJson_IvsChannelSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IvsListPlaybackKeyPairsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IvsListPlaybackKeyPairsRequest(obj: IvsListPlaybackKeyPairsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IvsListPlaybackKeyPairsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IvsListPlaybackKeyPairsResponse(obj: IvsListPlaybackKeyPairsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'keyPairs': obj.keyPairs?.map(y => toJson_IvsPlaybackKeyPairSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IvsListRecordingConfigurationsRequest
 */
export interface IvsListRecordingConfigurationsRequest {
  /**
   * @schema IvsListRecordingConfigurationsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IvsListRecordingConfigurationsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'IvsListRecordingConfigurationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IvsListRecordingConfigurationsRequest(obj: IvsListRecordingConfigurationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IvsListRecordingConfigurationsResponse
 */
export interface IvsListRecordingConfigurationsResponse {
  /**
   * @schema IvsListRecordingConfigurationsResponse#recordingConfigurations
   */
  readonly recordingConfigurations: IvsRecordingConfigurationSummary[];

  /**
   * @schema IvsListRecordingConfigurationsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'IvsListRecordingConfigurationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IvsListRecordingConfigurationsResponse(obj: IvsListRecordingConfigurationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'recordingConfigurations': obj.recordingConfigurations?.map(y => toJson_IvsRecordingConfigurationSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IvsListStreamKeysRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IvsListStreamKeysRequest(obj: IvsListStreamKeysRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'channelArn': obj.channelArn,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IvsListStreamKeysResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IvsListStreamKeysResponse(obj: IvsListStreamKeysResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'streamKeys': obj.streamKeys?.map(y => toJson_IvsStreamKeySummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IvsListStreamsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IvsListStreamsRequest(obj: IvsListStreamsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IvsListStreamsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IvsListStreamsResponse(obj: IvsListStreamsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'streams': obj.streams?.map(y => toJson_IvsStreamSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IvsListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IvsListTagsForResourceRequest(obj: IvsListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IvsListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IvsListTagsForResourceResponse(obj: IvsListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IvsPutMetadataRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IvsPutMetadataRequest(obj: IvsPutMetadataRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'channelArn': obj.channelArn,
    'metadata': obj.metadata,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IvsStopStreamRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IvsStopStreamRequest(obj: IvsStopStreamRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'channelArn': obj.channelArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IvsStopStreamResponse
 */
export interface IvsStopStreamResponse {
}

/**
 * Converts an object of type 'IvsStopStreamResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IvsStopStreamResponse(obj: IvsStopStreamResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IvsTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IvsTagResourceRequest(obj: IvsTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IvsTagResourceResponse
 */
export interface IvsTagResourceResponse {
}

/**
 * Converts an object of type 'IvsTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IvsTagResourceResponse(obj: IvsTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IvsUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IvsUntagResourceRequest(obj: IvsUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
    'tagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IvsUntagResourceResponse
 */
export interface IvsUntagResourceResponse {
}

/**
 * Converts an object of type 'IvsUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IvsUntagResourceResponse(obj: IvsUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema IvsUpdateChannelRequest#recordingConfigurationArn
   */
  readonly recordingConfigurationArn?: string;

}

/**
 * Converts an object of type 'IvsUpdateChannelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IvsUpdateChannelRequest(obj: IvsUpdateChannelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'name': obj.name,
    'latencyMode': obj.latencyMode,
    'type': obj.type,
    'authorized': obj.authorized,
    'recordingConfigurationArn': obj.recordingConfigurationArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IvsUpdateChannelResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IvsUpdateChannelResponse(obj: IvsUpdateChannelResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'channel': toJson_IvsChannel(obj.channel),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
   * @schema IvsChannel#recordingConfigurationArn
   */
  readonly recordingConfigurationArn?: string;

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
 * Converts an object of type 'IvsChannel' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IvsChannel(obj: IvsChannel | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'name': obj.name,
    'latencyMode': obj.latencyMode,
    'type': obj.type,
    'recordingConfigurationArn': obj.recordingConfigurationArn,
    'ingestEndpoint': obj.ingestEndpoint,
    'playbackUrl': obj.playbackUrl,
    'authorized': obj.authorized,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IvsBatchError' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IvsBatchError(obj: IvsBatchError | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'code': obj.code,
    'message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IvsStreamKey' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IvsStreamKey(obj: IvsStreamKey | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'value': obj.value,
    'channelArn': obj.channelArn,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IvsDestinationConfiguration
 */
export interface IvsDestinationConfiguration {
  /**
   * @schema IvsDestinationConfiguration#s3
   */
  readonly s3?: Ivss3DestinationConfiguration;

}

/**
 * Converts an object of type 'IvsDestinationConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IvsDestinationConfiguration(obj: IvsDestinationConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    's3': toJson_Ivss3DestinationConfiguration(obj.s3),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IvsRecordingConfiguration
 */
export interface IvsRecordingConfiguration {
  /**
   * @schema IvsRecordingConfiguration#arn
   */
  readonly arn: string;

  /**
   * @schema IvsRecordingConfiguration#name
   */
  readonly name?: string;

  /**
   * @schema IvsRecordingConfiguration#destinationConfiguration
   */
  readonly destinationConfiguration: IvsDestinationConfiguration;

  /**
   * @schema IvsRecordingConfiguration#state
   */
  readonly state: string;

  /**
   * @schema IvsRecordingConfiguration#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'IvsRecordingConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IvsRecordingConfiguration(obj: IvsRecordingConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'name': obj.name,
    'destinationConfiguration': toJson_IvsDestinationConfiguration(obj.destinationConfiguration),
    'state': obj.state,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IvsPlaybackKeyPair' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IvsPlaybackKeyPair(obj: IvsPlaybackKeyPair | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'name': obj.name,
    'fingerprint': obj.fingerprint,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IvsStream' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IvsStream(obj: IvsStream | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'channelArn': obj.channelArn,
    'playbackUrl': obj.playbackUrl,
    'startTime': obj.startTime,
    'state': obj.state,
    'health': obj.health,
    'viewerCount': obj.viewerCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
   * @schema IvsChannelSummary#recordingConfigurationArn
   */
  readonly recordingConfigurationArn?: string;

  /**
   * @schema IvsChannelSummary#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'IvsChannelSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IvsChannelSummary(obj: IvsChannelSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'name': obj.name,
    'latencyMode': obj.latencyMode,
    'authorized': obj.authorized,
    'recordingConfigurationArn': obj.recordingConfigurationArn,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IvsPlaybackKeyPairSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IvsPlaybackKeyPairSummary(obj: IvsPlaybackKeyPairSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'name': obj.name,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IvsRecordingConfigurationSummary
 */
export interface IvsRecordingConfigurationSummary {
  /**
   * @schema IvsRecordingConfigurationSummary#arn
   */
  readonly arn: string;

  /**
   * @schema IvsRecordingConfigurationSummary#name
   */
  readonly name?: string;

  /**
   * @schema IvsRecordingConfigurationSummary#destinationConfiguration
   */
  readonly destinationConfiguration: IvsDestinationConfiguration;

  /**
   * @schema IvsRecordingConfigurationSummary#state
   */
  readonly state: string;

  /**
   * @schema IvsRecordingConfigurationSummary#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'IvsRecordingConfigurationSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IvsRecordingConfigurationSummary(obj: IvsRecordingConfigurationSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'name': obj.name,
    'destinationConfiguration': toJson_IvsDestinationConfiguration(obj.destinationConfiguration),
    'state': obj.state,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IvsStreamKeySummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IvsStreamKeySummary(obj: IvsStreamKeySummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'channelArn': obj.channelArn,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

/**
 * Converts an object of type 'IvsStreamSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IvsStreamSummary(obj: IvsStreamSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'channelArn': obj.channelArn,
    'state': obj.state,
    'health': obj.health,
    'viewerCount': obj.viewerCount,
    'startTime': obj.startTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Ivss3DestinationConfiguration
 */
export interface Ivss3DestinationConfiguration {
  /**
   * @schema Ivss3DestinationConfiguration#bucketName
   */
  readonly bucketName: string;

}

/**
 * Converts an object of type 'Ivss3DestinationConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Ivss3DestinationConfiguration(obj: Ivss3DestinationConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bucketName': obj.bucketName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
