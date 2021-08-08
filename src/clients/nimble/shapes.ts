/**
 * @schema NimbleAcceptEulasRequest
 */
export interface NimbleAcceptEulasRequest {
  /**
   * @schema NimbleAcceptEulasRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema NimbleAcceptEulasRequest#eulaIds
   */
  readonly eulaIds?: string[];

  /**
   * @schema NimbleAcceptEulasRequest#studioId
   */
  readonly studioId: string;

}

/**
 * Converts an object of type 'NimbleAcceptEulasRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleAcceptEulasRequest(obj: NimbleAcceptEulasRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientToken': obj.clientToken,
    'eulaIds': obj.eulaIds?.map(y => y),
    'studioId': obj.studioId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleAcceptEulasResponse
 */
export interface NimbleAcceptEulasResponse {
  /**
   * @schema NimbleAcceptEulasResponse#eulaAcceptances
   */
  readonly eulaAcceptances?: NimbleEulaAcceptance[];

}

/**
 * Converts an object of type 'NimbleAcceptEulasResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleAcceptEulasResponse(obj: NimbleAcceptEulasResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'eulaAcceptances': obj.eulaAcceptances?.map(y => toJson_NimbleEulaAcceptance(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleCreateLaunchProfileRequest
 */
export interface NimbleCreateLaunchProfileRequest {
  /**
   * @schema NimbleCreateLaunchProfileRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema NimbleCreateLaunchProfileRequest#description
   */
  readonly description?: string;

  /**
   * @schema NimbleCreateLaunchProfileRequest#ec2SubnetIds
   */
  readonly ec2SubnetIds: string[];

  /**
   * @schema NimbleCreateLaunchProfileRequest#launchProfileProtocolVersions
   */
  readonly launchProfileProtocolVersions: string[];

  /**
   * @schema NimbleCreateLaunchProfileRequest#name
   */
  readonly name: string;

  /**
   * @schema NimbleCreateLaunchProfileRequest#streamConfiguration
   */
  readonly streamConfiguration: NimbleStreamConfigurationCreate;

  /**
   * @schema NimbleCreateLaunchProfileRequest#studioComponentIds
   */
  readonly studioComponentIds: string[];

  /**
   * @schema NimbleCreateLaunchProfileRequest#studioId
   */
  readonly studioId: string;

  /**
   * @schema NimbleCreateLaunchProfileRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'NimbleCreateLaunchProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleCreateLaunchProfileRequest(obj: NimbleCreateLaunchProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientToken': obj.clientToken,
    'description': obj.description,
    'ec2SubnetIds': obj.ec2SubnetIds?.map(y => y),
    'launchProfileProtocolVersions': obj.launchProfileProtocolVersions?.map(y => y),
    'name': obj.name,
    'streamConfiguration': toJson_NimbleStreamConfigurationCreate(obj.streamConfiguration),
    'studioComponentIds': obj.studioComponentIds?.map(y => y),
    'studioId': obj.studioId,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleCreateLaunchProfileResponse
 */
export interface NimbleCreateLaunchProfileResponse {
  /**
   * @schema NimbleCreateLaunchProfileResponse#launchProfile
   */
  readonly launchProfile?: NimbleLaunchProfile;

}

/**
 * Converts an object of type 'NimbleCreateLaunchProfileResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleCreateLaunchProfileResponse(obj: NimbleCreateLaunchProfileResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'launchProfile': toJson_NimbleLaunchProfile(obj.launchProfile),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleCreateStreamingImageRequest
 */
export interface NimbleCreateStreamingImageRequest {
  /**
   * @schema NimbleCreateStreamingImageRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema NimbleCreateStreamingImageRequest#description
   */
  readonly description?: string;

  /**
   * @schema NimbleCreateStreamingImageRequest#ec2ImageId
   */
  readonly ec2ImageId: string;

  /**
   * @schema NimbleCreateStreamingImageRequest#name
   */
  readonly name: string;

  /**
   * @schema NimbleCreateStreamingImageRequest#studioId
   */
  readonly studioId: string;

  /**
   * @schema NimbleCreateStreamingImageRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'NimbleCreateStreamingImageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleCreateStreamingImageRequest(obj: NimbleCreateStreamingImageRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientToken': obj.clientToken,
    'description': obj.description,
    'ec2ImageId': obj.ec2ImageId,
    'name': obj.name,
    'studioId': obj.studioId,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleCreateStreamingImageResponse
 */
export interface NimbleCreateStreamingImageResponse {
  /**
   * @schema NimbleCreateStreamingImageResponse#streamingImage
   */
  readonly streamingImage?: NimbleStreamingImage;

}

/**
 * Converts an object of type 'NimbleCreateStreamingImageResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleCreateStreamingImageResponse(obj: NimbleCreateStreamingImageResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'streamingImage': toJson_NimbleStreamingImage(obj.streamingImage),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleCreateStreamingSessionRequest
 */
export interface NimbleCreateStreamingSessionRequest {
  /**
   * @schema NimbleCreateStreamingSessionRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema NimbleCreateStreamingSessionRequest#ec2InstanceType
   */
  readonly ec2InstanceType?: string;

  /**
   * @schema NimbleCreateStreamingSessionRequest#launchProfileId
   */
  readonly launchProfileId?: string;

  /**
   * @schema NimbleCreateStreamingSessionRequest#streamingImageId
   */
  readonly streamingImageId?: string;

  /**
   * @schema NimbleCreateStreamingSessionRequest#studioId
   */
  readonly studioId: string;

  /**
   * @schema NimbleCreateStreamingSessionRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'NimbleCreateStreamingSessionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleCreateStreamingSessionRequest(obj: NimbleCreateStreamingSessionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientToken': obj.clientToken,
    'ec2InstanceType': obj.ec2InstanceType,
    'launchProfileId': obj.launchProfileId,
    'streamingImageId': obj.streamingImageId,
    'studioId': obj.studioId,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleCreateStreamingSessionResponse
 */
export interface NimbleCreateStreamingSessionResponse {
  /**
   * @schema NimbleCreateStreamingSessionResponse#session
   */
  readonly session?: NimbleStreamingSession;

}

/**
 * Converts an object of type 'NimbleCreateStreamingSessionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleCreateStreamingSessionResponse(obj: NimbleCreateStreamingSessionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'session': toJson_NimbleStreamingSession(obj.session),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleCreateStreamingSessionStreamRequest
 */
export interface NimbleCreateStreamingSessionStreamRequest {
  /**
   * @schema NimbleCreateStreamingSessionStreamRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema NimbleCreateStreamingSessionStreamRequest#expirationInSeconds
   */
  readonly expirationInSeconds?: number;

  /**
   * @schema NimbleCreateStreamingSessionStreamRequest#sessionId
   */
  readonly sessionId: string;

  /**
   * @schema NimbleCreateStreamingSessionStreamRequest#studioId
   */
  readonly studioId: string;

}

/**
 * Converts an object of type 'NimbleCreateStreamingSessionStreamRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleCreateStreamingSessionStreamRequest(obj: NimbleCreateStreamingSessionStreamRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientToken': obj.clientToken,
    'expirationInSeconds': obj.expirationInSeconds,
    'sessionId': obj.sessionId,
    'studioId': obj.studioId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleCreateStreamingSessionStreamResponse
 */
export interface NimbleCreateStreamingSessionStreamResponse {
  /**
   * @schema NimbleCreateStreamingSessionStreamResponse#stream
   */
  readonly stream?: NimbleStreamingSessionStream;

}

/**
 * Converts an object of type 'NimbleCreateStreamingSessionStreamResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleCreateStreamingSessionStreamResponse(obj: NimbleCreateStreamingSessionStreamResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'stream': toJson_NimbleStreamingSessionStream(obj.stream),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleCreateStudioRequest
 */
export interface NimbleCreateStudioRequest {
  /**
   * @schema NimbleCreateStudioRequest#adminRoleArn
   */
  readonly adminRoleArn: string;

  /**
   * @schema NimbleCreateStudioRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema NimbleCreateStudioRequest#displayName
   */
  readonly displayName: string;

  /**
   * @schema NimbleCreateStudioRequest#studioEncryptionConfiguration
   */
  readonly studioEncryptionConfiguration?: NimbleStudioEncryptionConfiguration;

  /**
   * @schema NimbleCreateStudioRequest#studioName
   */
  readonly studioName: string;

  /**
   * @schema NimbleCreateStudioRequest#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema NimbleCreateStudioRequest#userRoleArn
   */
  readonly userRoleArn: string;

}

/**
 * Converts an object of type 'NimbleCreateStudioRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleCreateStudioRequest(obj: NimbleCreateStudioRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'adminRoleArn': obj.adminRoleArn,
    'clientToken': obj.clientToken,
    'displayName': obj.displayName,
    'studioEncryptionConfiguration': toJson_NimbleStudioEncryptionConfiguration(obj.studioEncryptionConfiguration),
    'studioName': obj.studioName,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'userRoleArn': obj.userRoleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleCreateStudioResponse
 */
export interface NimbleCreateStudioResponse {
  /**
   * @schema NimbleCreateStudioResponse#studio
   */
  readonly studio?: NimbleStudio;

}

/**
 * Converts an object of type 'NimbleCreateStudioResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleCreateStudioResponse(obj: NimbleCreateStudioResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'studio': toJson_NimbleStudio(obj.studio),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleCreateStudioComponentRequest
 */
export interface NimbleCreateStudioComponentRequest {
  /**
   * @schema NimbleCreateStudioComponentRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema NimbleCreateStudioComponentRequest#configuration
   */
  readonly configuration?: NimbleStudioComponentConfiguration;

  /**
   * @schema NimbleCreateStudioComponentRequest#description
   */
  readonly description?: string;

  /**
   * @schema NimbleCreateStudioComponentRequest#ec2SecurityGroupIds
   */
  readonly ec2SecurityGroupIds?: string[];

  /**
   * @schema NimbleCreateStudioComponentRequest#initializationScripts
   */
  readonly initializationScripts?: NimbleStudioComponentInitializationScript[];

  /**
   * @schema NimbleCreateStudioComponentRequest#name
   */
  readonly name: string;

  /**
   * @schema NimbleCreateStudioComponentRequest#scriptParameters
   */
  readonly scriptParameters?: NimbleScriptParameterKeyValue[];

  /**
   * @schema NimbleCreateStudioComponentRequest#studioId
   */
  readonly studioId: string;

  /**
   * @schema NimbleCreateStudioComponentRequest#subtype
   */
  readonly subtype?: string;

  /**
   * @schema NimbleCreateStudioComponentRequest#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema NimbleCreateStudioComponentRequest#type
   */
  readonly type: string;

}

/**
 * Converts an object of type 'NimbleCreateStudioComponentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleCreateStudioComponentRequest(obj: NimbleCreateStudioComponentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientToken': obj.clientToken,
    'configuration': toJson_NimbleStudioComponentConfiguration(obj.configuration),
    'description': obj.description,
    'ec2SecurityGroupIds': obj.ec2SecurityGroupIds?.map(y => y),
    'initializationScripts': obj.initializationScripts?.map(y => toJson_NimbleStudioComponentInitializationScript(y)),
    'name': obj.name,
    'scriptParameters': obj.scriptParameters?.map(y => toJson_NimbleScriptParameterKeyValue(y)),
    'studioId': obj.studioId,
    'subtype': obj.subtype,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleCreateStudioComponentResponse
 */
export interface NimbleCreateStudioComponentResponse {
  /**
   * @schema NimbleCreateStudioComponentResponse#studioComponent
   */
  readonly studioComponent?: NimbleStudioComponent;

}

/**
 * Converts an object of type 'NimbleCreateStudioComponentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleCreateStudioComponentResponse(obj: NimbleCreateStudioComponentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'studioComponent': toJson_NimbleStudioComponent(obj.studioComponent),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleDeleteLaunchProfileRequest
 */
export interface NimbleDeleteLaunchProfileRequest {
  /**
   * @schema NimbleDeleteLaunchProfileRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema NimbleDeleteLaunchProfileRequest#launchProfileId
   */
  readonly launchProfileId: string;

  /**
   * @schema NimbleDeleteLaunchProfileRequest#studioId
   */
  readonly studioId: string;

}

/**
 * Converts an object of type 'NimbleDeleteLaunchProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleDeleteLaunchProfileRequest(obj: NimbleDeleteLaunchProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientToken': obj.clientToken,
    'launchProfileId': obj.launchProfileId,
    'studioId': obj.studioId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleDeleteLaunchProfileResponse
 */
export interface NimbleDeleteLaunchProfileResponse {
  /**
   * @schema NimbleDeleteLaunchProfileResponse#launchProfile
   */
  readonly launchProfile?: NimbleLaunchProfile;

}

/**
 * Converts an object of type 'NimbleDeleteLaunchProfileResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleDeleteLaunchProfileResponse(obj: NimbleDeleteLaunchProfileResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'launchProfile': toJson_NimbleLaunchProfile(obj.launchProfile),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleDeleteLaunchProfileMemberRequest
 */
export interface NimbleDeleteLaunchProfileMemberRequest {
  /**
   * @schema NimbleDeleteLaunchProfileMemberRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema NimbleDeleteLaunchProfileMemberRequest#launchProfileId
   */
  readonly launchProfileId: string;

  /**
   * @schema NimbleDeleteLaunchProfileMemberRequest#principalId
   */
  readonly principalId: string;

  /**
   * @schema NimbleDeleteLaunchProfileMemberRequest#studioId
   */
  readonly studioId: string;

}

/**
 * Converts an object of type 'NimbleDeleteLaunchProfileMemberRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleDeleteLaunchProfileMemberRequest(obj: NimbleDeleteLaunchProfileMemberRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientToken': obj.clientToken,
    'launchProfileId': obj.launchProfileId,
    'principalId': obj.principalId,
    'studioId': obj.studioId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleDeleteLaunchProfileMemberResponse
 */
export interface NimbleDeleteLaunchProfileMemberResponse {
}

/**
 * Converts an object of type 'NimbleDeleteLaunchProfileMemberResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleDeleteLaunchProfileMemberResponse(obj: NimbleDeleteLaunchProfileMemberResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleDeleteStreamingImageRequest
 */
export interface NimbleDeleteStreamingImageRequest {
  /**
   * @schema NimbleDeleteStreamingImageRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema NimbleDeleteStreamingImageRequest#streamingImageId
   */
  readonly streamingImageId: string;

  /**
   * @schema NimbleDeleteStreamingImageRequest#studioId
   */
  readonly studioId: string;

}

/**
 * Converts an object of type 'NimbleDeleteStreamingImageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleDeleteStreamingImageRequest(obj: NimbleDeleteStreamingImageRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientToken': obj.clientToken,
    'streamingImageId': obj.streamingImageId,
    'studioId': obj.studioId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleDeleteStreamingImageResponse
 */
export interface NimbleDeleteStreamingImageResponse {
  /**
   * @schema NimbleDeleteStreamingImageResponse#streamingImage
   */
  readonly streamingImage?: NimbleStreamingImage;

}

/**
 * Converts an object of type 'NimbleDeleteStreamingImageResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleDeleteStreamingImageResponse(obj: NimbleDeleteStreamingImageResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'streamingImage': toJson_NimbleStreamingImage(obj.streamingImage),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleDeleteStreamingSessionRequest
 */
export interface NimbleDeleteStreamingSessionRequest {
  /**
   * @schema NimbleDeleteStreamingSessionRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema NimbleDeleteStreamingSessionRequest#sessionId
   */
  readonly sessionId: string;

  /**
   * @schema NimbleDeleteStreamingSessionRequest#studioId
   */
  readonly studioId: string;

}

/**
 * Converts an object of type 'NimbleDeleteStreamingSessionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleDeleteStreamingSessionRequest(obj: NimbleDeleteStreamingSessionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientToken': obj.clientToken,
    'sessionId': obj.sessionId,
    'studioId': obj.studioId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleDeleteStreamingSessionResponse
 */
export interface NimbleDeleteStreamingSessionResponse {
  /**
   * @schema NimbleDeleteStreamingSessionResponse#session
   */
  readonly session?: NimbleStreamingSession;

}

/**
 * Converts an object of type 'NimbleDeleteStreamingSessionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleDeleteStreamingSessionResponse(obj: NimbleDeleteStreamingSessionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'session': toJson_NimbleStreamingSession(obj.session),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleDeleteStudioRequest
 */
export interface NimbleDeleteStudioRequest {
  /**
   * @schema NimbleDeleteStudioRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema NimbleDeleteStudioRequest#studioId
   */
  readonly studioId: string;

}

/**
 * Converts an object of type 'NimbleDeleteStudioRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleDeleteStudioRequest(obj: NimbleDeleteStudioRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientToken': obj.clientToken,
    'studioId': obj.studioId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleDeleteStudioResponse
 */
export interface NimbleDeleteStudioResponse {
  /**
   * @schema NimbleDeleteStudioResponse#studio
   */
  readonly studio?: NimbleStudio;

}

/**
 * Converts an object of type 'NimbleDeleteStudioResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleDeleteStudioResponse(obj: NimbleDeleteStudioResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'studio': toJson_NimbleStudio(obj.studio),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleDeleteStudioComponentRequest
 */
export interface NimbleDeleteStudioComponentRequest {
  /**
   * @schema NimbleDeleteStudioComponentRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema NimbleDeleteStudioComponentRequest#studioComponentId
   */
  readonly studioComponentId: string;

  /**
   * @schema NimbleDeleteStudioComponentRequest#studioId
   */
  readonly studioId: string;

}

/**
 * Converts an object of type 'NimbleDeleteStudioComponentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleDeleteStudioComponentRequest(obj: NimbleDeleteStudioComponentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientToken': obj.clientToken,
    'studioComponentId': obj.studioComponentId,
    'studioId': obj.studioId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleDeleteStudioComponentResponse
 */
export interface NimbleDeleteStudioComponentResponse {
  /**
   * @schema NimbleDeleteStudioComponentResponse#studioComponent
   */
  readonly studioComponent?: NimbleStudioComponent;

}

/**
 * Converts an object of type 'NimbleDeleteStudioComponentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleDeleteStudioComponentResponse(obj: NimbleDeleteStudioComponentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'studioComponent': toJson_NimbleStudioComponent(obj.studioComponent),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleDeleteStudioMemberRequest
 */
export interface NimbleDeleteStudioMemberRequest {
  /**
   * @schema NimbleDeleteStudioMemberRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema NimbleDeleteStudioMemberRequest#principalId
   */
  readonly principalId: string;

  /**
   * @schema NimbleDeleteStudioMemberRequest#studioId
   */
  readonly studioId: string;

}

/**
 * Converts an object of type 'NimbleDeleteStudioMemberRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleDeleteStudioMemberRequest(obj: NimbleDeleteStudioMemberRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientToken': obj.clientToken,
    'principalId': obj.principalId,
    'studioId': obj.studioId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleDeleteStudioMemberResponse
 */
export interface NimbleDeleteStudioMemberResponse {
}

/**
 * Converts an object of type 'NimbleDeleteStudioMemberResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleDeleteStudioMemberResponse(obj: NimbleDeleteStudioMemberResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleGetEulaRequest
 */
export interface NimbleGetEulaRequest {
  /**
   * @schema NimbleGetEulaRequest#eulaId
   */
  readonly eulaId: string;

}

/**
 * Converts an object of type 'NimbleGetEulaRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleGetEulaRequest(obj: NimbleGetEulaRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'eulaId': obj.eulaId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleGetEulaResponse
 */
export interface NimbleGetEulaResponse {
  /**
   * @schema NimbleGetEulaResponse#eula
   */
  readonly eula?: NimbleEula;

}

/**
 * Converts an object of type 'NimbleGetEulaResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleGetEulaResponse(obj: NimbleGetEulaResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'eula': toJson_NimbleEula(obj.eula),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleGetLaunchProfileRequest
 */
export interface NimbleGetLaunchProfileRequest {
  /**
   * @schema NimbleGetLaunchProfileRequest#launchProfileId
   */
  readonly launchProfileId: string;

  /**
   * @schema NimbleGetLaunchProfileRequest#studioId
   */
  readonly studioId: string;

}

/**
 * Converts an object of type 'NimbleGetLaunchProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleGetLaunchProfileRequest(obj: NimbleGetLaunchProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'launchProfileId': obj.launchProfileId,
    'studioId': obj.studioId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleGetLaunchProfileResponse
 */
export interface NimbleGetLaunchProfileResponse {
  /**
   * @schema NimbleGetLaunchProfileResponse#launchProfile
   */
  readonly launchProfile?: NimbleLaunchProfile;

}

/**
 * Converts an object of type 'NimbleGetLaunchProfileResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleGetLaunchProfileResponse(obj: NimbleGetLaunchProfileResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'launchProfile': toJson_NimbleLaunchProfile(obj.launchProfile),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleGetLaunchProfileDetailsRequest
 */
export interface NimbleGetLaunchProfileDetailsRequest {
  /**
   * @schema NimbleGetLaunchProfileDetailsRequest#launchProfileId
   */
  readonly launchProfileId: string;

  /**
   * @schema NimbleGetLaunchProfileDetailsRequest#studioId
   */
  readonly studioId: string;

}

/**
 * Converts an object of type 'NimbleGetLaunchProfileDetailsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleGetLaunchProfileDetailsRequest(obj: NimbleGetLaunchProfileDetailsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'launchProfileId': obj.launchProfileId,
    'studioId': obj.studioId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleGetLaunchProfileDetailsResponse
 */
export interface NimbleGetLaunchProfileDetailsResponse {
  /**
   * @schema NimbleGetLaunchProfileDetailsResponse#launchProfile
   */
  readonly launchProfile?: NimbleLaunchProfile;

  /**
   * @schema NimbleGetLaunchProfileDetailsResponse#streamingImages
   */
  readonly streamingImages?: NimbleStreamingImage[];

  /**
   * @schema NimbleGetLaunchProfileDetailsResponse#studioComponentSummaries
   */
  readonly studioComponentSummaries?: NimbleStudioComponentSummary[];

}

/**
 * Converts an object of type 'NimbleGetLaunchProfileDetailsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleGetLaunchProfileDetailsResponse(obj: NimbleGetLaunchProfileDetailsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'launchProfile': toJson_NimbleLaunchProfile(obj.launchProfile),
    'streamingImages': obj.streamingImages?.map(y => toJson_NimbleStreamingImage(y)),
    'studioComponentSummaries': obj.studioComponentSummaries?.map(y => toJson_NimbleStudioComponentSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleGetLaunchProfileInitializationRequest
 */
export interface NimbleGetLaunchProfileInitializationRequest {
  /**
   * @schema NimbleGetLaunchProfileInitializationRequest#launchProfileId
   */
  readonly launchProfileId: string;

  /**
   * @schema NimbleGetLaunchProfileInitializationRequest#launchProfileProtocolVersions
   */
  readonly launchProfileProtocolVersions: string[];

  /**
   * @schema NimbleGetLaunchProfileInitializationRequest#launchPurpose
   */
  readonly launchPurpose: string;

  /**
   * @schema NimbleGetLaunchProfileInitializationRequest#platform
   */
  readonly platform: string;

  /**
   * @schema NimbleGetLaunchProfileInitializationRequest#studioId
   */
  readonly studioId: string;

}

/**
 * Converts an object of type 'NimbleGetLaunchProfileInitializationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleGetLaunchProfileInitializationRequest(obj: NimbleGetLaunchProfileInitializationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'launchProfileId': obj.launchProfileId,
    'launchProfileProtocolVersions': obj.launchProfileProtocolVersions?.map(y => y),
    'launchPurpose': obj.launchPurpose,
    'platform': obj.platform,
    'studioId': obj.studioId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleGetLaunchProfileInitializationResponse
 */
export interface NimbleGetLaunchProfileInitializationResponse {
  /**
   * @schema NimbleGetLaunchProfileInitializationResponse#launchProfileInitialization
   */
  readonly launchProfileInitialization?: NimbleLaunchProfileInitialization;

}

/**
 * Converts an object of type 'NimbleGetLaunchProfileInitializationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleGetLaunchProfileInitializationResponse(obj: NimbleGetLaunchProfileInitializationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'launchProfileInitialization': toJson_NimbleLaunchProfileInitialization(obj.launchProfileInitialization),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleGetLaunchProfileMemberRequest
 */
export interface NimbleGetLaunchProfileMemberRequest {
  /**
   * @schema NimbleGetLaunchProfileMemberRequest#launchProfileId
   */
  readonly launchProfileId: string;

  /**
   * @schema NimbleGetLaunchProfileMemberRequest#principalId
   */
  readonly principalId: string;

  /**
   * @schema NimbleGetLaunchProfileMemberRequest#studioId
   */
  readonly studioId: string;

}

/**
 * Converts an object of type 'NimbleGetLaunchProfileMemberRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleGetLaunchProfileMemberRequest(obj: NimbleGetLaunchProfileMemberRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'launchProfileId': obj.launchProfileId,
    'principalId': obj.principalId,
    'studioId': obj.studioId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleGetLaunchProfileMemberResponse
 */
export interface NimbleGetLaunchProfileMemberResponse {
  /**
   * @schema NimbleGetLaunchProfileMemberResponse#member
   */
  readonly member?: NimbleLaunchProfileMembership;

}

/**
 * Converts an object of type 'NimbleGetLaunchProfileMemberResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleGetLaunchProfileMemberResponse(obj: NimbleGetLaunchProfileMemberResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'member': toJson_NimbleLaunchProfileMembership(obj.member),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleGetStreamingImageRequest
 */
export interface NimbleGetStreamingImageRequest {
  /**
   * @schema NimbleGetStreamingImageRequest#streamingImageId
   */
  readonly streamingImageId: string;

  /**
   * @schema NimbleGetStreamingImageRequest#studioId
   */
  readonly studioId: string;

}

/**
 * Converts an object of type 'NimbleGetStreamingImageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleGetStreamingImageRequest(obj: NimbleGetStreamingImageRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'streamingImageId': obj.streamingImageId,
    'studioId': obj.studioId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleGetStreamingImageResponse
 */
export interface NimbleGetStreamingImageResponse {
  /**
   * @schema NimbleGetStreamingImageResponse#streamingImage
   */
  readonly streamingImage?: NimbleStreamingImage;

}

/**
 * Converts an object of type 'NimbleGetStreamingImageResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleGetStreamingImageResponse(obj: NimbleGetStreamingImageResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'streamingImage': toJson_NimbleStreamingImage(obj.streamingImage),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleGetStreamingSessionRequest
 */
export interface NimbleGetStreamingSessionRequest {
  /**
   * @schema NimbleGetStreamingSessionRequest#sessionId
   */
  readonly sessionId: string;

  /**
   * @schema NimbleGetStreamingSessionRequest#studioId
   */
  readonly studioId: string;

}

/**
 * Converts an object of type 'NimbleGetStreamingSessionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleGetStreamingSessionRequest(obj: NimbleGetStreamingSessionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'sessionId': obj.sessionId,
    'studioId': obj.studioId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleGetStreamingSessionResponse
 */
export interface NimbleGetStreamingSessionResponse {
  /**
   * @schema NimbleGetStreamingSessionResponse#session
   */
  readonly session?: NimbleStreamingSession;

}

/**
 * Converts an object of type 'NimbleGetStreamingSessionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleGetStreamingSessionResponse(obj: NimbleGetStreamingSessionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'session': toJson_NimbleStreamingSession(obj.session),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleGetStreamingSessionStreamRequest
 */
export interface NimbleGetStreamingSessionStreamRequest {
  /**
   * @schema NimbleGetStreamingSessionStreamRequest#sessionId
   */
  readonly sessionId: string;

  /**
   * @schema NimbleGetStreamingSessionStreamRequest#streamId
   */
  readonly streamId: string;

  /**
   * @schema NimbleGetStreamingSessionStreamRequest#studioId
   */
  readonly studioId: string;

}

/**
 * Converts an object of type 'NimbleGetStreamingSessionStreamRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleGetStreamingSessionStreamRequest(obj: NimbleGetStreamingSessionStreamRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'sessionId': obj.sessionId,
    'streamId': obj.streamId,
    'studioId': obj.studioId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleGetStreamingSessionStreamResponse
 */
export interface NimbleGetStreamingSessionStreamResponse {
  /**
   * @schema NimbleGetStreamingSessionStreamResponse#stream
   */
  readonly stream?: NimbleStreamingSessionStream;

}

/**
 * Converts an object of type 'NimbleGetStreamingSessionStreamResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleGetStreamingSessionStreamResponse(obj: NimbleGetStreamingSessionStreamResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'stream': toJson_NimbleStreamingSessionStream(obj.stream),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleGetStudioRequest
 */
export interface NimbleGetStudioRequest {
  /**
   * @schema NimbleGetStudioRequest#studioId
   */
  readonly studioId: string;

}

/**
 * Converts an object of type 'NimbleGetStudioRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleGetStudioRequest(obj: NimbleGetStudioRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'studioId': obj.studioId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleGetStudioResponse
 */
export interface NimbleGetStudioResponse {
  /**
   * @schema NimbleGetStudioResponse#studio
   */
  readonly studio?: NimbleStudio;

}

/**
 * Converts an object of type 'NimbleGetStudioResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleGetStudioResponse(obj: NimbleGetStudioResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'studio': toJson_NimbleStudio(obj.studio),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleGetStudioComponentRequest
 */
export interface NimbleGetStudioComponentRequest {
  /**
   * @schema NimbleGetStudioComponentRequest#studioComponentId
   */
  readonly studioComponentId: string;

  /**
   * @schema NimbleGetStudioComponentRequest#studioId
   */
  readonly studioId: string;

}

/**
 * Converts an object of type 'NimbleGetStudioComponentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleGetStudioComponentRequest(obj: NimbleGetStudioComponentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'studioComponentId': obj.studioComponentId,
    'studioId': obj.studioId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleGetStudioComponentResponse
 */
export interface NimbleGetStudioComponentResponse {
  /**
   * @schema NimbleGetStudioComponentResponse#studioComponent
   */
  readonly studioComponent?: NimbleStudioComponent;

}

/**
 * Converts an object of type 'NimbleGetStudioComponentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleGetStudioComponentResponse(obj: NimbleGetStudioComponentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'studioComponent': toJson_NimbleStudioComponent(obj.studioComponent),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleGetStudioMemberRequest
 */
export interface NimbleGetStudioMemberRequest {
  /**
   * @schema NimbleGetStudioMemberRequest#principalId
   */
  readonly principalId: string;

  /**
   * @schema NimbleGetStudioMemberRequest#studioId
   */
  readonly studioId: string;

}

/**
 * Converts an object of type 'NimbleGetStudioMemberRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleGetStudioMemberRequest(obj: NimbleGetStudioMemberRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'principalId': obj.principalId,
    'studioId': obj.studioId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleGetStudioMemberResponse
 */
export interface NimbleGetStudioMemberResponse {
  /**
   * @schema NimbleGetStudioMemberResponse#member
   */
  readonly member?: NimbleStudioMembership;

}

/**
 * Converts an object of type 'NimbleGetStudioMemberResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleGetStudioMemberResponse(obj: NimbleGetStudioMemberResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'member': toJson_NimbleStudioMembership(obj.member),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleListEulaAcceptancesRequest
 */
export interface NimbleListEulaAcceptancesRequest {
  /**
   * @schema NimbleListEulaAcceptancesRequest#eulaIds
   */
  readonly eulaIds?: string[];

  /**
   * @schema NimbleListEulaAcceptancesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema NimbleListEulaAcceptancesRequest#studioId
   */
  readonly studioId: string;

}

/**
 * Converts an object of type 'NimbleListEulaAcceptancesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleListEulaAcceptancesRequest(obj: NimbleListEulaAcceptancesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'eulaIds': obj.eulaIds?.map(y => y),
    'nextToken': obj.nextToken,
    'studioId': obj.studioId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleListEulaAcceptancesResponse
 */
export interface NimbleListEulaAcceptancesResponse {
  /**
   * @schema NimbleListEulaAcceptancesResponse#eulaAcceptances
   */
  readonly eulaAcceptances?: NimbleEulaAcceptance[];

  /**
   * @schema NimbleListEulaAcceptancesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'NimbleListEulaAcceptancesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleListEulaAcceptancesResponse(obj: NimbleListEulaAcceptancesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'eulaAcceptances': obj.eulaAcceptances?.map(y => toJson_NimbleEulaAcceptance(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleListEulasRequest
 */
export interface NimbleListEulasRequest {
  /**
   * @schema NimbleListEulasRequest#eulaIds
   */
  readonly eulaIds?: string[];

  /**
   * @schema NimbleListEulasRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'NimbleListEulasRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleListEulasRequest(obj: NimbleListEulasRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'eulaIds': obj.eulaIds?.map(y => y),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleListEulasResponse
 */
export interface NimbleListEulasResponse {
  /**
   * @schema NimbleListEulasResponse#eulas
   */
  readonly eulas?: NimbleEula[];

  /**
   * @schema NimbleListEulasResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'NimbleListEulasResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleListEulasResponse(obj: NimbleListEulasResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'eulas': obj.eulas?.map(y => toJson_NimbleEula(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleListLaunchProfileMembersRequest
 */
export interface NimbleListLaunchProfileMembersRequest {
  /**
   * @schema NimbleListLaunchProfileMembersRequest#launchProfileId
   */
  readonly launchProfileId: string;

  /**
   * @schema NimbleListLaunchProfileMembersRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema NimbleListLaunchProfileMembersRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema NimbleListLaunchProfileMembersRequest#studioId
   */
  readonly studioId: string;

}

/**
 * Converts an object of type 'NimbleListLaunchProfileMembersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleListLaunchProfileMembersRequest(obj: NimbleListLaunchProfileMembersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'launchProfileId': obj.launchProfileId,
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
    'studioId': obj.studioId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleListLaunchProfileMembersResponse
 */
export interface NimbleListLaunchProfileMembersResponse {
  /**
   * @schema NimbleListLaunchProfileMembersResponse#members
   */
  readonly members?: NimbleLaunchProfileMembership[];

  /**
   * @schema NimbleListLaunchProfileMembersResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'NimbleListLaunchProfileMembersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleListLaunchProfileMembersResponse(obj: NimbleListLaunchProfileMembersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'members': obj.members?.map(y => toJson_NimbleLaunchProfileMembership(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleListLaunchProfilesRequest
 */
export interface NimbleListLaunchProfilesRequest {
  /**
   * @schema NimbleListLaunchProfilesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema NimbleListLaunchProfilesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema NimbleListLaunchProfilesRequest#principalId
   */
  readonly principalId?: string;

  /**
   * @schema NimbleListLaunchProfilesRequest#states
   */
  readonly states?: string[];

  /**
   * @schema NimbleListLaunchProfilesRequest#studioId
   */
  readonly studioId: string;

}

/**
 * Converts an object of type 'NimbleListLaunchProfilesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleListLaunchProfilesRequest(obj: NimbleListLaunchProfilesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
    'principalId': obj.principalId,
    'states': obj.states?.map(y => y),
    'studioId': obj.studioId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleListLaunchProfilesResponse
 */
export interface NimbleListLaunchProfilesResponse {
  /**
   * @schema NimbleListLaunchProfilesResponse#launchProfiles
   */
  readonly launchProfiles?: NimbleLaunchProfile[];

  /**
   * @schema NimbleListLaunchProfilesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'NimbleListLaunchProfilesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleListLaunchProfilesResponse(obj: NimbleListLaunchProfilesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'launchProfiles': obj.launchProfiles?.map(y => toJson_NimbleLaunchProfile(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleListStreamingImagesRequest
 */
export interface NimbleListStreamingImagesRequest {
  /**
   * @schema NimbleListStreamingImagesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema NimbleListStreamingImagesRequest#owner
   */
  readonly owner?: string;

  /**
   * @schema NimbleListStreamingImagesRequest#studioId
   */
  readonly studioId: string;

}

/**
 * Converts an object of type 'NimbleListStreamingImagesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleListStreamingImagesRequest(obj: NimbleListStreamingImagesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'owner': obj.owner,
    'studioId': obj.studioId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleListStreamingImagesResponse
 */
export interface NimbleListStreamingImagesResponse {
  /**
   * @schema NimbleListStreamingImagesResponse#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema NimbleListStreamingImagesResponse#streamingImages
   */
  readonly streamingImages?: NimbleStreamingImage[];

}

/**
 * Converts an object of type 'NimbleListStreamingImagesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleListStreamingImagesResponse(obj: NimbleListStreamingImagesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'streamingImages': obj.streamingImages?.map(y => toJson_NimbleStreamingImage(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleListStreamingSessionsRequest
 */
export interface NimbleListStreamingSessionsRequest {
  /**
   * @schema NimbleListStreamingSessionsRequest#createdBy
   */
  readonly createdBy?: string;

  /**
   * @schema NimbleListStreamingSessionsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema NimbleListStreamingSessionsRequest#sessionIds
   */
  readonly sessionIds?: string;

  /**
   * @schema NimbleListStreamingSessionsRequest#studioId
   */
  readonly studioId: string;

}

/**
 * Converts an object of type 'NimbleListStreamingSessionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleListStreamingSessionsRequest(obj: NimbleListStreamingSessionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'createdBy': obj.createdBy,
    'nextToken': obj.nextToken,
    'sessionIds': obj.sessionIds,
    'studioId': obj.studioId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleListStreamingSessionsResponse
 */
export interface NimbleListStreamingSessionsResponse {
  /**
   * @schema NimbleListStreamingSessionsResponse#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema NimbleListStreamingSessionsResponse#sessions
   */
  readonly sessions?: NimbleStreamingSession[];

}

/**
 * Converts an object of type 'NimbleListStreamingSessionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleListStreamingSessionsResponse(obj: NimbleListStreamingSessionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'sessions': obj.sessions?.map(y => toJson_NimbleStreamingSession(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleListStudioComponentsRequest
 */
export interface NimbleListStudioComponentsRequest {
  /**
   * @schema NimbleListStudioComponentsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema NimbleListStudioComponentsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema NimbleListStudioComponentsRequest#states
   */
  readonly states?: string[];

  /**
   * @schema NimbleListStudioComponentsRequest#studioId
   */
  readonly studioId: string;

  /**
   * @schema NimbleListStudioComponentsRequest#types
   */
  readonly types?: string[];

}

/**
 * Converts an object of type 'NimbleListStudioComponentsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleListStudioComponentsRequest(obj: NimbleListStudioComponentsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
    'states': obj.states?.map(y => y),
    'studioId': obj.studioId,
    'types': obj.types?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleListStudioComponentsResponse
 */
export interface NimbleListStudioComponentsResponse {
  /**
   * @schema NimbleListStudioComponentsResponse#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema NimbleListStudioComponentsResponse#studioComponents
   */
  readonly studioComponents?: NimbleStudioComponent[];

}

/**
 * Converts an object of type 'NimbleListStudioComponentsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleListStudioComponentsResponse(obj: NimbleListStudioComponentsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'studioComponents': obj.studioComponents?.map(y => toJson_NimbleStudioComponent(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleListStudioMembersRequest
 */
export interface NimbleListStudioMembersRequest {
  /**
   * @schema NimbleListStudioMembersRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema NimbleListStudioMembersRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema NimbleListStudioMembersRequest#studioId
   */
  readonly studioId: string;

}

/**
 * Converts an object of type 'NimbleListStudioMembersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleListStudioMembersRequest(obj: NimbleListStudioMembersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
    'studioId': obj.studioId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleListStudioMembersResponse
 */
export interface NimbleListStudioMembersResponse {
  /**
   * @schema NimbleListStudioMembersResponse#members
   */
  readonly members?: NimbleStudioMembership[];

  /**
   * @schema NimbleListStudioMembersResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'NimbleListStudioMembersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleListStudioMembersResponse(obj: NimbleListStudioMembersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'members': obj.members?.map(y => toJson_NimbleStudioMembership(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleListStudiosRequest
 */
export interface NimbleListStudiosRequest {
  /**
   * @schema NimbleListStudiosRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'NimbleListStudiosRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleListStudiosRequest(obj: NimbleListStudiosRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleListStudiosResponse
 */
export interface NimbleListStudiosResponse {
  /**
   * @schema NimbleListStudiosResponse#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema NimbleListStudiosResponse#studios
   */
  readonly studios?: NimbleStudio[];

}

/**
 * Converts an object of type 'NimbleListStudiosResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleListStudiosResponse(obj: NimbleListStudiosResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'studios': obj.studios?.map(y => toJson_NimbleStudio(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleListTagsForResourceRequest
 */
export interface NimbleListTagsForResourceRequest {
  /**
   * @schema NimbleListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * Converts an object of type 'NimbleListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleListTagsForResourceRequest(obj: NimbleListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleListTagsForResourceResponse
 */
export interface NimbleListTagsForResourceResponse {
  /**
   * @schema NimbleListTagsForResourceResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'NimbleListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleListTagsForResourceResponse(obj: NimbleListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimblePutLaunchProfileMembersRequest
 */
export interface NimblePutLaunchProfileMembersRequest {
  /**
   * @schema NimblePutLaunchProfileMembersRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema NimblePutLaunchProfileMembersRequest#identityStoreId
   */
  readonly identityStoreId: string;

  /**
   * @schema NimblePutLaunchProfileMembersRequest#launchProfileId
   */
  readonly launchProfileId: string;

  /**
   * @schema NimblePutLaunchProfileMembersRequest#members
   */
  readonly members: NimbleNewLaunchProfileMember[];

  /**
   * @schema NimblePutLaunchProfileMembersRequest#studioId
   */
  readonly studioId: string;

}

/**
 * Converts an object of type 'NimblePutLaunchProfileMembersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimblePutLaunchProfileMembersRequest(obj: NimblePutLaunchProfileMembersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientToken': obj.clientToken,
    'identityStoreId': obj.identityStoreId,
    'launchProfileId': obj.launchProfileId,
    'members': obj.members?.map(y => toJson_NimbleNewLaunchProfileMember(y)),
    'studioId': obj.studioId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimblePutLaunchProfileMembersResponse
 */
export interface NimblePutLaunchProfileMembersResponse {
}

/**
 * Converts an object of type 'NimblePutLaunchProfileMembersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimblePutLaunchProfileMembersResponse(obj: NimblePutLaunchProfileMembersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimblePutStudioMembersRequest
 */
export interface NimblePutStudioMembersRequest {
  /**
   * @schema NimblePutStudioMembersRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema NimblePutStudioMembersRequest#identityStoreId
   */
  readonly identityStoreId: string;

  /**
   * @schema NimblePutStudioMembersRequest#members
   */
  readonly members: NimbleNewStudioMember[];

  /**
   * @schema NimblePutStudioMembersRequest#studioId
   */
  readonly studioId: string;

}

/**
 * Converts an object of type 'NimblePutStudioMembersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimblePutStudioMembersRequest(obj: NimblePutStudioMembersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientToken': obj.clientToken,
    'identityStoreId': obj.identityStoreId,
    'members': obj.members?.map(y => toJson_NimbleNewStudioMember(y)),
    'studioId': obj.studioId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimblePutStudioMembersResponse
 */
export interface NimblePutStudioMembersResponse {
}

/**
 * Converts an object of type 'NimblePutStudioMembersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimblePutStudioMembersResponse(obj: NimblePutStudioMembersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleStartStudioSsoConfigurationRepairRequest
 */
export interface NimbleStartStudioSsoConfigurationRepairRequest {
  /**
   * @schema NimbleStartStudioSsoConfigurationRepairRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema NimbleStartStudioSsoConfigurationRepairRequest#studioId
   */
  readonly studioId: string;

}

/**
 * Converts an object of type 'NimbleStartStudioSsoConfigurationRepairRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleStartStudioSsoConfigurationRepairRequest(obj: NimbleStartStudioSsoConfigurationRepairRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientToken': obj.clientToken,
    'studioId': obj.studioId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleStartStudioSsoConfigurationRepairResponse
 */
export interface NimbleStartStudioSsoConfigurationRepairResponse {
  /**
   * @schema NimbleStartStudioSsoConfigurationRepairResponse#studio
   */
  readonly studio?: NimbleStudio;

}

/**
 * Converts an object of type 'NimbleStartStudioSsoConfigurationRepairResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleStartStudioSsoConfigurationRepairResponse(obj: NimbleStartStudioSsoConfigurationRepairResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'studio': toJson_NimbleStudio(obj.studio),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleTagResourceRequest
 */
export interface NimbleTagResourceRequest {
  /**
   * @schema NimbleTagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema NimbleTagResourceRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'NimbleTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleTagResourceRequest(obj: NimbleTagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema NimbleTagResourceResponse
 */
export interface NimbleTagResourceResponse {
}

/**
 * Converts an object of type 'NimbleTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleTagResourceResponse(obj: NimbleTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleUntagResourceRequest
 */
export interface NimbleUntagResourceRequest {
  /**
   * @schema NimbleUntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema NimbleUntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * Converts an object of type 'NimbleUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleUntagResourceRequest(obj: NimbleUntagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema NimbleUntagResourceResponse
 */
export interface NimbleUntagResourceResponse {
}

/**
 * Converts an object of type 'NimbleUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleUntagResourceResponse(obj: NimbleUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleUpdateLaunchProfileRequest
 */
export interface NimbleUpdateLaunchProfileRequest {
  /**
   * @schema NimbleUpdateLaunchProfileRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema NimbleUpdateLaunchProfileRequest#description
   */
  readonly description?: string;

  /**
   * @schema NimbleUpdateLaunchProfileRequest#launchProfileId
   */
  readonly launchProfileId: string;

  /**
   * @schema NimbleUpdateLaunchProfileRequest#launchProfileProtocolVersions
   */
  readonly launchProfileProtocolVersions?: string[];

  /**
   * @schema NimbleUpdateLaunchProfileRequest#name
   */
  readonly name?: string;

  /**
   * @schema NimbleUpdateLaunchProfileRequest#streamConfiguration
   */
  readonly streamConfiguration?: NimbleStreamConfigurationCreate;

  /**
   * @schema NimbleUpdateLaunchProfileRequest#studioComponentIds
   */
  readonly studioComponentIds?: string[];

  /**
   * @schema NimbleUpdateLaunchProfileRequest#studioId
   */
  readonly studioId: string;

}

/**
 * Converts an object of type 'NimbleUpdateLaunchProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleUpdateLaunchProfileRequest(obj: NimbleUpdateLaunchProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientToken': obj.clientToken,
    'description': obj.description,
    'launchProfileId': obj.launchProfileId,
    'launchProfileProtocolVersions': obj.launchProfileProtocolVersions?.map(y => y),
    'name': obj.name,
    'streamConfiguration': toJson_NimbleStreamConfigurationCreate(obj.streamConfiguration),
    'studioComponentIds': obj.studioComponentIds?.map(y => y),
    'studioId': obj.studioId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleUpdateLaunchProfileResponse
 */
export interface NimbleUpdateLaunchProfileResponse {
  /**
   * @schema NimbleUpdateLaunchProfileResponse#launchProfile
   */
  readonly launchProfile?: NimbleLaunchProfile;

}

/**
 * Converts an object of type 'NimbleUpdateLaunchProfileResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleUpdateLaunchProfileResponse(obj: NimbleUpdateLaunchProfileResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'launchProfile': toJson_NimbleLaunchProfile(obj.launchProfile),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleUpdateLaunchProfileMemberRequest
 */
export interface NimbleUpdateLaunchProfileMemberRequest {
  /**
   * @schema NimbleUpdateLaunchProfileMemberRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema NimbleUpdateLaunchProfileMemberRequest#launchProfileId
   */
  readonly launchProfileId: string;

  /**
   * @schema NimbleUpdateLaunchProfileMemberRequest#persona
   */
  readonly persona: string;

  /**
   * @schema NimbleUpdateLaunchProfileMemberRequest#principalId
   */
  readonly principalId: string;

  /**
   * @schema NimbleUpdateLaunchProfileMemberRequest#studioId
   */
  readonly studioId: string;

}

/**
 * Converts an object of type 'NimbleUpdateLaunchProfileMemberRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleUpdateLaunchProfileMemberRequest(obj: NimbleUpdateLaunchProfileMemberRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientToken': obj.clientToken,
    'launchProfileId': obj.launchProfileId,
    'persona': obj.persona,
    'principalId': obj.principalId,
    'studioId': obj.studioId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleUpdateLaunchProfileMemberResponse
 */
export interface NimbleUpdateLaunchProfileMemberResponse {
  /**
   * @schema NimbleUpdateLaunchProfileMemberResponse#member
   */
  readonly member?: NimbleLaunchProfileMembership;

}

/**
 * Converts an object of type 'NimbleUpdateLaunchProfileMemberResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleUpdateLaunchProfileMemberResponse(obj: NimbleUpdateLaunchProfileMemberResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'member': toJson_NimbleLaunchProfileMembership(obj.member),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleUpdateStreamingImageRequest
 */
export interface NimbleUpdateStreamingImageRequest {
  /**
   * @schema NimbleUpdateStreamingImageRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema NimbleUpdateStreamingImageRequest#description
   */
  readonly description?: string;

  /**
   * @schema NimbleUpdateStreamingImageRequest#name
   */
  readonly name?: string;

  /**
   * @schema NimbleUpdateStreamingImageRequest#streamingImageId
   */
  readonly streamingImageId: string;

  /**
   * @schema NimbleUpdateStreamingImageRequest#studioId
   */
  readonly studioId: string;

}

/**
 * Converts an object of type 'NimbleUpdateStreamingImageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleUpdateStreamingImageRequest(obj: NimbleUpdateStreamingImageRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientToken': obj.clientToken,
    'description': obj.description,
    'name': obj.name,
    'streamingImageId': obj.streamingImageId,
    'studioId': obj.studioId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleUpdateStreamingImageResponse
 */
export interface NimbleUpdateStreamingImageResponse {
  /**
   * @schema NimbleUpdateStreamingImageResponse#streamingImage
   */
  readonly streamingImage?: NimbleStreamingImage;

}

/**
 * Converts an object of type 'NimbleUpdateStreamingImageResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleUpdateStreamingImageResponse(obj: NimbleUpdateStreamingImageResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'streamingImage': toJson_NimbleStreamingImage(obj.streamingImage),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleUpdateStudioRequest
 */
export interface NimbleUpdateStudioRequest {
  /**
   * @schema NimbleUpdateStudioRequest#adminRoleArn
   */
  readonly adminRoleArn?: string;

  /**
   * @schema NimbleUpdateStudioRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema NimbleUpdateStudioRequest#displayName
   */
  readonly displayName?: string;

  /**
   * @schema NimbleUpdateStudioRequest#studioId
   */
  readonly studioId: string;

  /**
   * @schema NimbleUpdateStudioRequest#userRoleArn
   */
  readonly userRoleArn?: string;

}

/**
 * Converts an object of type 'NimbleUpdateStudioRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleUpdateStudioRequest(obj: NimbleUpdateStudioRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'adminRoleArn': obj.adminRoleArn,
    'clientToken': obj.clientToken,
    'displayName': obj.displayName,
    'studioId': obj.studioId,
    'userRoleArn': obj.userRoleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleUpdateStudioResponse
 */
export interface NimbleUpdateStudioResponse {
  /**
   * @schema NimbleUpdateStudioResponse#studio
   */
  readonly studio?: NimbleStudio;

}

/**
 * Converts an object of type 'NimbleUpdateStudioResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleUpdateStudioResponse(obj: NimbleUpdateStudioResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'studio': toJson_NimbleStudio(obj.studio),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleUpdateStudioComponentRequest
 */
export interface NimbleUpdateStudioComponentRequest {
  /**
   * @schema NimbleUpdateStudioComponentRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema NimbleUpdateStudioComponentRequest#configuration
   */
  readonly configuration?: NimbleStudioComponentConfiguration;

  /**
   * @schema NimbleUpdateStudioComponentRequest#description
   */
  readonly description?: string;

  /**
   * @schema NimbleUpdateStudioComponentRequest#ec2SecurityGroupIds
   */
  readonly ec2SecurityGroupIds?: string[];

  /**
   * @schema NimbleUpdateStudioComponentRequest#initializationScripts
   */
  readonly initializationScripts?: NimbleStudioComponentInitializationScript[];

  /**
   * @schema NimbleUpdateStudioComponentRequest#name
   */
  readonly name?: string;

  /**
   * @schema NimbleUpdateStudioComponentRequest#scriptParameters
   */
  readonly scriptParameters?: NimbleScriptParameterKeyValue[];

  /**
   * @schema NimbleUpdateStudioComponentRequest#studioComponentId
   */
  readonly studioComponentId: string;

  /**
   * @schema NimbleUpdateStudioComponentRequest#studioId
   */
  readonly studioId: string;

  /**
   * @schema NimbleUpdateStudioComponentRequest#subtype
   */
  readonly subtype?: string;

  /**
   * @schema NimbleUpdateStudioComponentRequest#type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'NimbleUpdateStudioComponentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleUpdateStudioComponentRequest(obj: NimbleUpdateStudioComponentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientToken': obj.clientToken,
    'configuration': toJson_NimbleStudioComponentConfiguration(obj.configuration),
    'description': obj.description,
    'ec2SecurityGroupIds': obj.ec2SecurityGroupIds?.map(y => y),
    'initializationScripts': obj.initializationScripts?.map(y => toJson_NimbleStudioComponentInitializationScript(y)),
    'name': obj.name,
    'scriptParameters': obj.scriptParameters?.map(y => toJson_NimbleScriptParameterKeyValue(y)),
    'studioComponentId': obj.studioComponentId,
    'studioId': obj.studioId,
    'subtype': obj.subtype,
    'type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleUpdateStudioComponentResponse
 */
export interface NimbleUpdateStudioComponentResponse {
  /**
   * @schema NimbleUpdateStudioComponentResponse#studioComponent
   */
  readonly studioComponent?: NimbleStudioComponent;

}

/**
 * Converts an object of type 'NimbleUpdateStudioComponentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleUpdateStudioComponentResponse(obj: NimbleUpdateStudioComponentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'studioComponent': toJson_NimbleStudioComponent(obj.studioComponent),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleEulaAcceptance
 */
export interface NimbleEulaAcceptance {
  /**
   * @schema NimbleEulaAcceptance#acceptedAt
   */
  readonly acceptedAt?: string;

  /**
   * @schema NimbleEulaAcceptance#acceptedBy
   */
  readonly acceptedBy?: string;

  /**
   * @schema NimbleEulaAcceptance#accepteeId
   */
  readonly accepteeId?: string;

  /**
   * @schema NimbleEulaAcceptance#eulaAcceptanceId
   */
  readonly eulaAcceptanceId?: string;

  /**
   * @schema NimbleEulaAcceptance#eulaId
   */
  readonly eulaId?: string;

}

/**
 * Converts an object of type 'NimbleEulaAcceptance' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleEulaAcceptance(obj: NimbleEulaAcceptance | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'acceptedAt': obj.acceptedAt,
    'acceptedBy': obj.acceptedBy,
    'accepteeId': obj.accepteeId,
    'eulaAcceptanceId': obj.eulaAcceptanceId,
    'eulaId': obj.eulaId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleStreamConfigurationCreate
 */
export interface NimbleStreamConfigurationCreate {
  /**
   * @schema NimbleStreamConfigurationCreate#clipboardMode
   */
  readonly clipboardMode: string;

  /**
   * @schema NimbleStreamConfigurationCreate#ec2InstanceTypes
   */
  readonly ec2InstanceTypes: string[];

  /**
   * @schema NimbleStreamConfigurationCreate#maxSessionLengthInMinutes
   */
  readonly maxSessionLengthInMinutes?: number;

  /**
   * @schema NimbleStreamConfigurationCreate#streamingImageIds
   */
  readonly streamingImageIds: string[];

}

/**
 * Converts an object of type 'NimbleStreamConfigurationCreate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleStreamConfigurationCreate(obj: NimbleStreamConfigurationCreate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clipboardMode': obj.clipboardMode,
    'ec2InstanceTypes': obj.ec2InstanceTypes?.map(y => y),
    'maxSessionLengthInMinutes': obj.maxSessionLengthInMinutes,
    'streamingImageIds': obj.streamingImageIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleLaunchProfile
 */
export interface NimbleLaunchProfile {
  /**
   * @schema NimbleLaunchProfile#arn
   */
  readonly arn?: string;

  /**
   * @schema NimbleLaunchProfile#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema NimbleLaunchProfile#createdBy
   */
  readonly createdBy?: string;

  /**
   * @schema NimbleLaunchProfile#description
   */
  readonly description?: string;

  /**
   * @schema NimbleLaunchProfile#ec2SubnetIds
   */
  readonly ec2SubnetIds?: string[];

  /**
   * @schema NimbleLaunchProfile#launchProfileId
   */
  readonly launchProfileId?: string;

  /**
   * @schema NimbleLaunchProfile#launchProfileProtocolVersions
   */
  readonly launchProfileProtocolVersions?: string[];

  /**
   * @schema NimbleLaunchProfile#name
   */
  readonly name?: string;

  /**
   * @schema NimbleLaunchProfile#state
   */
  readonly state?: string;

  /**
   * @schema NimbleLaunchProfile#statusCode
   */
  readonly statusCode?: string;

  /**
   * @schema NimbleLaunchProfile#statusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema NimbleLaunchProfile#streamConfiguration
   */
  readonly streamConfiguration?: NimbleStreamConfiguration;

  /**
   * @schema NimbleLaunchProfile#studioComponentIds
   */
  readonly studioComponentIds?: string[];

  /**
   * @schema NimbleLaunchProfile#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema NimbleLaunchProfile#updatedAt
   */
  readonly updatedAt?: string;

  /**
   * @schema NimbleLaunchProfile#updatedBy
   */
  readonly updatedBy?: string;

}

/**
 * Converts an object of type 'NimbleLaunchProfile' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleLaunchProfile(obj: NimbleLaunchProfile | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'createdAt': obj.createdAt,
    'createdBy': obj.createdBy,
    'description': obj.description,
    'ec2SubnetIds': obj.ec2SubnetIds?.map(y => y),
    'launchProfileId': obj.launchProfileId,
    'launchProfileProtocolVersions': obj.launchProfileProtocolVersions?.map(y => y),
    'name': obj.name,
    'state': obj.state,
    'statusCode': obj.statusCode,
    'statusMessage': obj.statusMessage,
    'streamConfiguration': toJson_NimbleStreamConfiguration(obj.streamConfiguration),
    'studioComponentIds': obj.studioComponentIds?.map(y => y),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'updatedAt': obj.updatedAt,
    'updatedBy': obj.updatedBy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleStreamingImage
 */
export interface NimbleStreamingImage {
  /**
   * @schema NimbleStreamingImage#arn
   */
  readonly arn?: string;

  /**
   * @schema NimbleStreamingImage#description
   */
  readonly description?: string;

  /**
   * @schema NimbleStreamingImage#ec2ImageId
   */
  readonly ec2ImageId?: string;

  /**
   * @schema NimbleStreamingImage#encryptionConfiguration
   */
  readonly encryptionConfiguration?: NimbleStreamingImageEncryptionConfiguration;

  /**
   * @schema NimbleStreamingImage#eulaIds
   */
  readonly eulaIds?: string[];

  /**
   * @schema NimbleStreamingImage#name
   */
  readonly name?: string;

  /**
   * @schema NimbleStreamingImage#owner
   */
  readonly owner?: string;

  /**
   * @schema NimbleStreamingImage#platform
   */
  readonly platform?: string;

  /**
   * @schema NimbleStreamingImage#state
   */
  readonly state?: string;

  /**
   * @schema NimbleStreamingImage#statusCode
   */
  readonly statusCode?: string;

  /**
   * @schema NimbleStreamingImage#statusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema NimbleStreamingImage#streamingImageId
   */
  readonly streamingImageId?: string;

  /**
   * @schema NimbleStreamingImage#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'NimbleStreamingImage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleStreamingImage(obj: NimbleStreamingImage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'description': obj.description,
    'ec2ImageId': obj.ec2ImageId,
    'encryptionConfiguration': toJson_NimbleStreamingImageEncryptionConfiguration(obj.encryptionConfiguration),
    'eulaIds': obj.eulaIds?.map(y => y),
    'name': obj.name,
    'owner': obj.owner,
    'platform': obj.platform,
    'state': obj.state,
    'statusCode': obj.statusCode,
    'statusMessage': obj.statusMessage,
    'streamingImageId': obj.streamingImageId,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleStreamingSession
 */
export interface NimbleStreamingSession {
  /**
   * @schema NimbleStreamingSession#arn
   */
  readonly arn?: string;

  /**
   * @schema NimbleStreamingSession#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema NimbleStreamingSession#createdBy
   */
  readonly createdBy?: string;

  /**
   * @schema NimbleStreamingSession#ec2InstanceType
   */
  readonly ec2InstanceType?: string;

  /**
   * @schema NimbleStreamingSession#launchProfileId
   */
  readonly launchProfileId?: string;

  /**
   * @schema NimbleStreamingSession#sessionId
   */
  readonly sessionId?: string;

  /**
   * @schema NimbleStreamingSession#state
   */
  readonly state?: string;

  /**
   * @schema NimbleStreamingSession#statusCode
   */
  readonly statusCode?: string;

  /**
   * @schema NimbleStreamingSession#statusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema NimbleStreamingSession#streamingImageId
   */
  readonly streamingImageId?: string;

  /**
   * @schema NimbleStreamingSession#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema NimbleStreamingSession#terminateAt
   */
  readonly terminateAt?: string;

  /**
   * @schema NimbleStreamingSession#updatedAt
   */
  readonly updatedAt?: string;

  /**
   * @schema NimbleStreamingSession#updatedBy
   */
  readonly updatedBy?: string;

}

/**
 * Converts an object of type 'NimbleStreamingSession' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleStreamingSession(obj: NimbleStreamingSession | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'createdAt': obj.createdAt,
    'createdBy': obj.createdBy,
    'ec2InstanceType': obj.ec2InstanceType,
    'launchProfileId': obj.launchProfileId,
    'sessionId': obj.sessionId,
    'state': obj.state,
    'statusCode': obj.statusCode,
    'statusMessage': obj.statusMessage,
    'streamingImageId': obj.streamingImageId,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'terminateAt': obj.terminateAt,
    'updatedAt': obj.updatedAt,
    'updatedBy': obj.updatedBy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleStreamingSessionStream
 */
export interface NimbleStreamingSessionStream {
  /**
   * @schema NimbleStreamingSessionStream#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema NimbleStreamingSessionStream#createdBy
   */
  readonly createdBy?: string;

  /**
   * @schema NimbleStreamingSessionStream#expiresAt
   */
  readonly expiresAt?: string;

  /**
   * @schema NimbleStreamingSessionStream#state
   */
  readonly state?: string;

  /**
   * @schema NimbleStreamingSessionStream#statusCode
   */
  readonly statusCode?: string;

  /**
   * @schema NimbleStreamingSessionStream#streamId
   */
  readonly streamId?: string;

  /**
   * @schema NimbleStreamingSessionStream#url
   */
  readonly url?: string;

}

/**
 * Converts an object of type 'NimbleStreamingSessionStream' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleStreamingSessionStream(obj: NimbleStreamingSessionStream | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'createdAt': obj.createdAt,
    'createdBy': obj.createdBy,
    'expiresAt': obj.expiresAt,
    'state': obj.state,
    'statusCode': obj.statusCode,
    'streamId': obj.streamId,
    'url': obj.url,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleStudioEncryptionConfiguration
 */
export interface NimbleStudioEncryptionConfiguration {
  /**
   * @schema NimbleStudioEncryptionConfiguration#keyArn
   */
  readonly keyArn?: string;

  /**
   * @schema NimbleStudioEncryptionConfiguration#keyType
   */
  readonly keyType: string;

}

/**
 * Converts an object of type 'NimbleStudioEncryptionConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleStudioEncryptionConfiguration(obj: NimbleStudioEncryptionConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'keyArn': obj.keyArn,
    'keyType': obj.keyType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleStudio
 */
export interface NimbleStudio {
  /**
   * @schema NimbleStudio#adminRoleArn
   */
  readonly adminRoleArn?: string;

  /**
   * @schema NimbleStudio#arn
   */
  readonly arn?: string;

  /**
   * @schema NimbleStudio#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema NimbleStudio#displayName
   */
  readonly displayName?: string;

  /**
   * @schema NimbleStudio#homeRegion
   */
  readonly homeRegion?: string;

  /**
   * @schema NimbleStudio#ssoClientId
   */
  readonly ssoClientId?: string;

  /**
   * @schema NimbleStudio#state
   */
  readonly state?: string;

  /**
   * @schema NimbleStudio#statusCode
   */
  readonly statusCode?: string;

  /**
   * @schema NimbleStudio#statusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema NimbleStudio#studioEncryptionConfiguration
   */
  readonly studioEncryptionConfiguration?: NimbleStudioEncryptionConfiguration;

  /**
   * @schema NimbleStudio#studioId
   */
  readonly studioId?: string;

  /**
   * @schema NimbleStudio#studioName
   */
  readonly studioName?: string;

  /**
   * @schema NimbleStudio#studioUrl
   */
  readonly studioUrl?: string;

  /**
   * @schema NimbleStudio#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema NimbleStudio#updatedAt
   */
  readonly updatedAt?: string;

  /**
   * @schema NimbleStudio#userRoleArn
   */
  readonly userRoleArn?: string;

}

/**
 * Converts an object of type 'NimbleStudio' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleStudio(obj: NimbleStudio | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'adminRoleArn': obj.adminRoleArn,
    'arn': obj.arn,
    'createdAt': obj.createdAt,
    'displayName': obj.displayName,
    'homeRegion': obj.homeRegion,
    'ssoClientId': obj.ssoClientId,
    'state': obj.state,
    'statusCode': obj.statusCode,
    'statusMessage': obj.statusMessage,
    'studioEncryptionConfiguration': toJson_NimbleStudioEncryptionConfiguration(obj.studioEncryptionConfiguration),
    'studioId': obj.studioId,
    'studioName': obj.studioName,
    'studioUrl': obj.studioUrl,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'updatedAt': obj.updatedAt,
    'userRoleArn': obj.userRoleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleStudioComponentConfiguration
 */
export interface NimbleStudioComponentConfiguration {
  /**
   * @schema NimbleStudioComponentConfiguration#activeDirectoryConfiguration
   */
  readonly activeDirectoryConfiguration?: NimbleActiveDirectoryConfiguration;

  /**
   * @schema NimbleStudioComponentConfiguration#computeFarmConfiguration
   */
  readonly computeFarmConfiguration?: NimbleComputeFarmConfiguration;

  /**
   * @schema NimbleStudioComponentConfiguration#licenseServiceConfiguration
   */
  readonly licenseServiceConfiguration?: NimbleLicenseServiceConfiguration;

  /**
   * @schema NimbleStudioComponentConfiguration#sharedFileSystemConfiguration
   */
  readonly sharedFileSystemConfiguration?: NimbleSharedFileSystemConfiguration;

}

/**
 * Converts an object of type 'NimbleStudioComponentConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleStudioComponentConfiguration(obj: NimbleStudioComponentConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'activeDirectoryConfiguration': toJson_NimbleActiveDirectoryConfiguration(obj.activeDirectoryConfiguration),
    'computeFarmConfiguration': toJson_NimbleComputeFarmConfiguration(obj.computeFarmConfiguration),
    'licenseServiceConfiguration': toJson_NimbleLicenseServiceConfiguration(obj.licenseServiceConfiguration),
    'sharedFileSystemConfiguration': toJson_NimbleSharedFileSystemConfiguration(obj.sharedFileSystemConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleStudioComponentInitializationScript
 */
export interface NimbleStudioComponentInitializationScript {
  /**
   * @schema NimbleStudioComponentInitializationScript#launchProfileProtocolVersion
   */
  readonly launchProfileProtocolVersion?: string;

  /**
   * @schema NimbleStudioComponentInitializationScript#platform
   */
  readonly platform?: string;

  /**
   * @schema NimbleStudioComponentInitializationScript#runContext
   */
  readonly runContext?: string;

  /**
   * @schema NimbleStudioComponentInitializationScript#script
   */
  readonly script?: string;

}

/**
 * Converts an object of type 'NimbleStudioComponentInitializationScript' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleStudioComponentInitializationScript(obj: NimbleStudioComponentInitializationScript | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'launchProfileProtocolVersion': obj.launchProfileProtocolVersion,
    'platform': obj.platform,
    'runContext': obj.runContext,
    'script': obj.script,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleScriptParameterKeyValue
 */
export interface NimbleScriptParameterKeyValue {
  /**
   * @schema NimbleScriptParameterKeyValue#key
   */
  readonly key?: string;

  /**
   * @schema NimbleScriptParameterKeyValue#value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'NimbleScriptParameterKeyValue' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleScriptParameterKeyValue(obj: NimbleScriptParameterKeyValue | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'key': obj.key,
    'value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleStudioComponent
 */
export interface NimbleStudioComponent {
  /**
   * @schema NimbleStudioComponent#arn
   */
  readonly arn?: string;

  /**
   * @schema NimbleStudioComponent#configuration
   */
  readonly configuration?: NimbleStudioComponentConfiguration;

  /**
   * @schema NimbleStudioComponent#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema NimbleStudioComponent#createdBy
   */
  readonly createdBy?: string;

  /**
   * @schema NimbleStudioComponent#description
   */
  readonly description?: string;

  /**
   * @schema NimbleStudioComponent#ec2SecurityGroupIds
   */
  readonly ec2SecurityGroupIds?: string[];

  /**
   * @schema NimbleStudioComponent#initializationScripts
   */
  readonly initializationScripts?: NimbleStudioComponentInitializationScript[];

  /**
   * @schema NimbleStudioComponent#name
   */
  readonly name?: string;

  /**
   * @schema NimbleStudioComponent#scriptParameters
   */
  readonly scriptParameters?: NimbleScriptParameterKeyValue[];

  /**
   * @schema NimbleStudioComponent#state
   */
  readonly state?: string;

  /**
   * @schema NimbleStudioComponent#statusCode
   */
  readonly statusCode?: string;

  /**
   * @schema NimbleStudioComponent#statusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema NimbleStudioComponent#studioComponentId
   */
  readonly studioComponentId?: string;

  /**
   * @schema NimbleStudioComponent#subtype
   */
  readonly subtype?: string;

  /**
   * @schema NimbleStudioComponent#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema NimbleStudioComponent#type
   */
  readonly type?: string;

  /**
   * @schema NimbleStudioComponent#updatedAt
   */
  readonly updatedAt?: string;

  /**
   * @schema NimbleStudioComponent#updatedBy
   */
  readonly updatedBy?: string;

}

/**
 * Converts an object of type 'NimbleStudioComponent' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleStudioComponent(obj: NimbleStudioComponent | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'configuration': toJson_NimbleStudioComponentConfiguration(obj.configuration),
    'createdAt': obj.createdAt,
    'createdBy': obj.createdBy,
    'description': obj.description,
    'ec2SecurityGroupIds': obj.ec2SecurityGroupIds?.map(y => y),
    'initializationScripts': obj.initializationScripts?.map(y => toJson_NimbleStudioComponentInitializationScript(y)),
    'name': obj.name,
    'scriptParameters': obj.scriptParameters?.map(y => toJson_NimbleScriptParameterKeyValue(y)),
    'state': obj.state,
    'statusCode': obj.statusCode,
    'statusMessage': obj.statusMessage,
    'studioComponentId': obj.studioComponentId,
    'subtype': obj.subtype,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'type': obj.type,
    'updatedAt': obj.updatedAt,
    'updatedBy': obj.updatedBy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleEula
 */
export interface NimbleEula {
  /**
   * @schema NimbleEula#content
   */
  readonly content?: string;

  /**
   * @schema NimbleEula#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema NimbleEula#eulaId
   */
  readonly eulaId?: string;

  /**
   * @schema NimbleEula#name
   */
  readonly name?: string;

  /**
   * @schema NimbleEula#updatedAt
   */
  readonly updatedAt?: string;

}

/**
 * Converts an object of type 'NimbleEula' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleEula(obj: NimbleEula | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'content': obj.content,
    'createdAt': obj.createdAt,
    'eulaId': obj.eulaId,
    'name': obj.name,
    'updatedAt': obj.updatedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleStudioComponentSummary
 */
export interface NimbleStudioComponentSummary {
  /**
   * @schema NimbleStudioComponentSummary#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema NimbleStudioComponentSummary#createdBy
   */
  readonly createdBy?: string;

  /**
   * @schema NimbleStudioComponentSummary#description
   */
  readonly description?: string;

  /**
   * @schema NimbleStudioComponentSummary#name
   */
  readonly name?: string;

  /**
   * @schema NimbleStudioComponentSummary#studioComponentId
   */
  readonly studioComponentId?: string;

  /**
   * @schema NimbleStudioComponentSummary#subtype
   */
  readonly subtype?: string;

  /**
   * @schema NimbleStudioComponentSummary#type
   */
  readonly type?: string;

  /**
   * @schema NimbleStudioComponentSummary#updatedAt
   */
  readonly updatedAt?: string;

  /**
   * @schema NimbleStudioComponentSummary#updatedBy
   */
  readonly updatedBy?: string;

}

/**
 * Converts an object of type 'NimbleStudioComponentSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleStudioComponentSummary(obj: NimbleStudioComponentSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'createdAt': obj.createdAt,
    'createdBy': obj.createdBy,
    'description': obj.description,
    'name': obj.name,
    'studioComponentId': obj.studioComponentId,
    'subtype': obj.subtype,
    'type': obj.type,
    'updatedAt': obj.updatedAt,
    'updatedBy': obj.updatedBy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleLaunchProfileInitialization
 */
export interface NimbleLaunchProfileInitialization {
  /**
   * @schema NimbleLaunchProfileInitialization#activeDirectory
   */
  readonly activeDirectory?: NimbleLaunchProfileInitializationActiveDirectory;

  /**
   * @schema NimbleLaunchProfileInitialization#ec2SecurityGroupIds
   */
  readonly ec2SecurityGroupIds?: string[];

  /**
   * @schema NimbleLaunchProfileInitialization#launchProfileId
   */
  readonly launchProfileId?: string;

  /**
   * @schema NimbleLaunchProfileInitialization#launchProfileProtocolVersion
   */
  readonly launchProfileProtocolVersion?: string;

  /**
   * @schema NimbleLaunchProfileInitialization#launchPurpose
   */
  readonly launchPurpose?: string;

  /**
   * @schema NimbleLaunchProfileInitialization#name
   */
  readonly name?: string;

  /**
   * @schema NimbleLaunchProfileInitialization#platform
   */
  readonly platform?: string;

  /**
   * @schema NimbleLaunchProfileInitialization#systemInitializationScripts
   */
  readonly systemInitializationScripts?: NimbleLaunchProfileInitializationScript[];

  /**
   * @schema NimbleLaunchProfileInitialization#userInitializationScripts
   */
  readonly userInitializationScripts?: NimbleLaunchProfileInitializationScript[];

}

/**
 * Converts an object of type 'NimbleLaunchProfileInitialization' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleLaunchProfileInitialization(obj: NimbleLaunchProfileInitialization | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'activeDirectory': toJson_NimbleLaunchProfileInitializationActiveDirectory(obj.activeDirectory),
    'ec2SecurityGroupIds': obj.ec2SecurityGroupIds?.map(y => y),
    'launchProfileId': obj.launchProfileId,
    'launchProfileProtocolVersion': obj.launchProfileProtocolVersion,
    'launchPurpose': obj.launchPurpose,
    'name': obj.name,
    'platform': obj.platform,
    'systemInitializationScripts': obj.systemInitializationScripts?.map(y => toJson_NimbleLaunchProfileInitializationScript(y)),
    'userInitializationScripts': obj.userInitializationScripts?.map(y => toJson_NimbleLaunchProfileInitializationScript(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleLaunchProfileMembership
 */
export interface NimbleLaunchProfileMembership {
  /**
   * @schema NimbleLaunchProfileMembership#identityStoreId
   */
  readonly identityStoreId?: string;

  /**
   * @schema NimbleLaunchProfileMembership#persona
   */
  readonly persona?: string;

  /**
   * @schema NimbleLaunchProfileMembership#principalId
   */
  readonly principalId?: string;

}

/**
 * Converts an object of type 'NimbleLaunchProfileMembership' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleLaunchProfileMembership(obj: NimbleLaunchProfileMembership | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'identityStoreId': obj.identityStoreId,
    'persona': obj.persona,
    'principalId': obj.principalId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleStudioMembership
 */
export interface NimbleStudioMembership {
  /**
   * @schema NimbleStudioMembership#identityStoreId
   */
  readonly identityStoreId?: string;

  /**
   * @schema NimbleStudioMembership#persona
   */
  readonly persona?: string;

  /**
   * @schema NimbleStudioMembership#principalId
   */
  readonly principalId?: string;

}

/**
 * Converts an object of type 'NimbleStudioMembership' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleStudioMembership(obj: NimbleStudioMembership | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'identityStoreId': obj.identityStoreId,
    'persona': obj.persona,
    'principalId': obj.principalId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleNewLaunchProfileMember
 */
export interface NimbleNewLaunchProfileMember {
  /**
   * @schema NimbleNewLaunchProfileMember#persona
   */
  readonly persona: string;

  /**
   * @schema NimbleNewLaunchProfileMember#principalId
   */
  readonly principalId: string;

}

/**
 * Converts an object of type 'NimbleNewLaunchProfileMember' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleNewLaunchProfileMember(obj: NimbleNewLaunchProfileMember | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'persona': obj.persona,
    'principalId': obj.principalId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleNewStudioMember
 */
export interface NimbleNewStudioMember {
  /**
   * @schema NimbleNewStudioMember#persona
   */
  readonly persona: string;

  /**
   * @schema NimbleNewStudioMember#principalId
   */
  readonly principalId: string;

}

/**
 * Converts an object of type 'NimbleNewStudioMember' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleNewStudioMember(obj: NimbleNewStudioMember | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'persona': obj.persona,
    'principalId': obj.principalId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleStreamConfiguration
 */
export interface NimbleStreamConfiguration {
  /**
   * @schema NimbleStreamConfiguration#clipboardMode
   */
  readonly clipboardMode?: string;

  /**
   * @schema NimbleStreamConfiguration#ec2InstanceTypes
   */
  readonly ec2InstanceTypes?: string[];

  /**
   * @schema NimbleStreamConfiguration#maxSessionLengthInMinutes
   */
  readonly maxSessionLengthInMinutes?: number;

  /**
   * @schema NimbleStreamConfiguration#streamingImageIds
   */
  readonly streamingImageIds?: string[];

}

/**
 * Converts an object of type 'NimbleStreamConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleStreamConfiguration(obj: NimbleStreamConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clipboardMode': obj.clipboardMode,
    'ec2InstanceTypes': obj.ec2InstanceTypes?.map(y => y),
    'maxSessionLengthInMinutes': obj.maxSessionLengthInMinutes,
    'streamingImageIds': obj.streamingImageIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleStreamingImageEncryptionConfiguration
 */
export interface NimbleStreamingImageEncryptionConfiguration {
  /**
   * @schema NimbleStreamingImageEncryptionConfiguration#keyArn
   */
  readonly keyArn?: string;

  /**
   * @schema NimbleStreamingImageEncryptionConfiguration#keyType
   */
  readonly keyType: string;

}

/**
 * Converts an object of type 'NimbleStreamingImageEncryptionConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleStreamingImageEncryptionConfiguration(obj: NimbleStreamingImageEncryptionConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'keyArn': obj.keyArn,
    'keyType': obj.keyType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleActiveDirectoryConfiguration
 */
export interface NimbleActiveDirectoryConfiguration {
  /**
   * @schema NimbleActiveDirectoryConfiguration#computerAttributes
   */
  readonly computerAttributes?: NimbleActiveDirectoryComputerAttribute[];

  /**
   * @schema NimbleActiveDirectoryConfiguration#directoryId
   */
  readonly directoryId?: string;

  /**
   * @schema NimbleActiveDirectoryConfiguration#organizationalUnitDistinguishedName
   */
  readonly organizationalUnitDistinguishedName?: string;

}

/**
 * Converts an object of type 'NimbleActiveDirectoryConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleActiveDirectoryConfiguration(obj: NimbleActiveDirectoryConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'computerAttributes': obj.computerAttributes?.map(y => toJson_NimbleActiveDirectoryComputerAttribute(y)),
    'directoryId': obj.directoryId,
    'organizationalUnitDistinguishedName': obj.organizationalUnitDistinguishedName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleComputeFarmConfiguration
 */
export interface NimbleComputeFarmConfiguration {
  /**
   * @schema NimbleComputeFarmConfiguration#activeDirectoryUser
   */
  readonly activeDirectoryUser?: string;

  /**
   * @schema NimbleComputeFarmConfiguration#endpoint
   */
  readonly endpoint?: string;

}

/**
 * Converts an object of type 'NimbleComputeFarmConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleComputeFarmConfiguration(obj: NimbleComputeFarmConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'activeDirectoryUser': obj.activeDirectoryUser,
    'endpoint': obj.endpoint,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleLicenseServiceConfiguration
 */
export interface NimbleLicenseServiceConfiguration {
  /**
   * @schema NimbleLicenseServiceConfiguration#endpoint
   */
  readonly endpoint?: string;

}

/**
 * Converts an object of type 'NimbleLicenseServiceConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleLicenseServiceConfiguration(obj: NimbleLicenseServiceConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'endpoint': obj.endpoint,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleSharedFileSystemConfiguration
 */
export interface NimbleSharedFileSystemConfiguration {
  /**
   * @schema NimbleSharedFileSystemConfiguration#endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema NimbleSharedFileSystemConfiguration#fileSystemId
   */
  readonly fileSystemId?: string;

  /**
   * @schema NimbleSharedFileSystemConfiguration#linuxMountPoint
   */
  readonly linuxMountPoint?: string;

  /**
   * @schema NimbleSharedFileSystemConfiguration#shareName
   */
  readonly shareName?: string;

  /**
   * @schema NimbleSharedFileSystemConfiguration#windowsMountDrive
   */
  readonly windowsMountDrive?: string;

}

/**
 * Converts an object of type 'NimbleSharedFileSystemConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleSharedFileSystemConfiguration(obj: NimbleSharedFileSystemConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'endpoint': obj.endpoint,
    'fileSystemId': obj.fileSystemId,
    'linuxMountPoint': obj.linuxMountPoint,
    'shareName': obj.shareName,
    'windowsMountDrive': obj.windowsMountDrive,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleLaunchProfileInitializationActiveDirectory
 */
export interface NimbleLaunchProfileInitializationActiveDirectory {
  /**
   * @schema NimbleLaunchProfileInitializationActiveDirectory#computerAttributes
   */
  readonly computerAttributes?: NimbleActiveDirectoryComputerAttribute[];

  /**
   * @schema NimbleLaunchProfileInitializationActiveDirectory#directoryId
   */
  readonly directoryId?: string;

  /**
   * @schema NimbleLaunchProfileInitializationActiveDirectory#directoryName
   */
  readonly directoryName?: string;

  /**
   * @schema NimbleLaunchProfileInitializationActiveDirectory#dnsIpAddresses
   */
  readonly dnsIpAddresses?: string[];

  /**
   * @schema NimbleLaunchProfileInitializationActiveDirectory#organizationalUnitDistinguishedName
   */
  readonly organizationalUnitDistinguishedName?: string;

  /**
   * @schema NimbleLaunchProfileInitializationActiveDirectory#studioComponentId
   */
  readonly studioComponentId?: string;

  /**
   * @schema NimbleLaunchProfileInitializationActiveDirectory#studioComponentName
   */
  readonly studioComponentName?: string;

}

/**
 * Converts an object of type 'NimbleLaunchProfileInitializationActiveDirectory' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleLaunchProfileInitializationActiveDirectory(obj: NimbleLaunchProfileInitializationActiveDirectory | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'computerAttributes': obj.computerAttributes?.map(y => toJson_NimbleActiveDirectoryComputerAttribute(y)),
    'directoryId': obj.directoryId,
    'directoryName': obj.directoryName,
    'dnsIpAddresses': obj.dnsIpAddresses?.map(y => y),
    'organizationalUnitDistinguishedName': obj.organizationalUnitDistinguishedName,
    'studioComponentId': obj.studioComponentId,
    'studioComponentName': obj.studioComponentName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleLaunchProfileInitializationScript
 */
export interface NimbleLaunchProfileInitializationScript {
  /**
   * @schema NimbleLaunchProfileInitializationScript#script
   */
  readonly script?: string;

  /**
   * @schema NimbleLaunchProfileInitializationScript#studioComponentId
   */
  readonly studioComponentId?: string;

  /**
   * @schema NimbleLaunchProfileInitializationScript#studioComponentName
   */
  readonly studioComponentName?: string;

}

/**
 * Converts an object of type 'NimbleLaunchProfileInitializationScript' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleLaunchProfileInitializationScript(obj: NimbleLaunchProfileInitializationScript | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'script': obj.script,
    'studioComponentId': obj.studioComponentId,
    'studioComponentName': obj.studioComponentName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NimbleActiveDirectoryComputerAttribute
 */
export interface NimbleActiveDirectoryComputerAttribute {
  /**
   * @schema NimbleActiveDirectoryComputerAttribute#name
   */
  readonly name?: string;

  /**
   * @schema NimbleActiveDirectoryComputerAttribute#value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'NimbleActiveDirectoryComputerAttribute' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NimbleActiveDirectoryComputerAttribute(obj: NimbleActiveDirectoryComputerAttribute | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
