/**
 * @schema SignerAddProfilePermissionRequest
 */
export interface SignerAddProfilePermissionRequest {
  /**
   * @schema SignerAddProfilePermissionRequest#profileName
   */
  readonly profileName: string;

  /**
   * @schema SignerAddProfilePermissionRequest#profileVersion
   */
  readonly profileVersion?: string;

  /**
   * @schema SignerAddProfilePermissionRequest#action
   */
  readonly action: string;

  /**
   * @schema SignerAddProfilePermissionRequest#principal
   */
  readonly principal: string;

  /**
   * @schema SignerAddProfilePermissionRequest#revisionId
   */
  readonly revisionId?: string;

  /**
   * @schema SignerAddProfilePermissionRequest#statementId
   */
  readonly statementId: string;

}

/**
 * Converts an object of type 'SignerAddProfilePermissionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SignerAddProfilePermissionRequest(obj: SignerAddProfilePermissionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'profileName': obj.profileName,
    'profileVersion': obj.profileVersion,
    'action': obj.action,
    'principal': obj.principal,
    'revisionId': obj.revisionId,
    'statementId': obj.statementId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SignerAddProfilePermissionResponse
 */
export interface SignerAddProfilePermissionResponse {
  /**
   * @schema SignerAddProfilePermissionResponse#revisionId
   */
  readonly revisionId?: string;

}

/**
 * Converts an object of type 'SignerAddProfilePermissionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SignerAddProfilePermissionResponse(obj: SignerAddProfilePermissionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'revisionId': obj.revisionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SignerCancelSigningProfileRequest
 */
export interface SignerCancelSigningProfileRequest {
  /**
   * @schema SignerCancelSigningProfileRequest#profileName
   */
  readonly profileName: string;

}

/**
 * Converts an object of type 'SignerCancelSigningProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SignerCancelSigningProfileRequest(obj: SignerCancelSigningProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'profileName': obj.profileName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SignerDescribeSigningJobRequest
 */
export interface SignerDescribeSigningJobRequest {
  /**
   * @schema SignerDescribeSigningJobRequest#jobId
   */
  readonly jobId: string;

}

/**
 * Converts an object of type 'SignerDescribeSigningJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SignerDescribeSigningJobRequest(obj: SignerDescribeSigningJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SignerDescribeSigningJobResponse
 */
export interface SignerDescribeSigningJobResponse {
  /**
   * @schema SignerDescribeSigningJobResponse#jobId
   */
  readonly jobId?: string;

  /**
   * @schema SignerDescribeSigningJobResponse#source
   */
  readonly source?: SignerSource;

  /**
   * @schema SignerDescribeSigningJobResponse#signingMaterial
   */
  readonly signingMaterial?: SignerSigningMaterial;

  /**
   * @schema SignerDescribeSigningJobResponse#platformId
   */
  readonly platformId?: string;

  /**
   * @schema SignerDescribeSigningJobResponse#platformDisplayName
   */
  readonly platformDisplayName?: string;

  /**
   * @schema SignerDescribeSigningJobResponse#profileName
   */
  readonly profileName?: string;

  /**
   * @schema SignerDescribeSigningJobResponse#profileVersion
   */
  readonly profileVersion?: string;

  /**
   * @schema SignerDescribeSigningJobResponse#overrides
   */
  readonly overrides?: SignerSigningPlatformOverrides;

  /**
   * @schema SignerDescribeSigningJobResponse#signingParameters
   */
  readonly signingParameters?: { [key: string]: string };

  /**
   * @schema SignerDescribeSigningJobResponse#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema SignerDescribeSigningJobResponse#completedAt
   */
  readonly completedAt?: string;

  /**
   * @schema SignerDescribeSigningJobResponse#signatureExpiresAt
   */
  readonly signatureExpiresAt?: string;

  /**
   * @schema SignerDescribeSigningJobResponse#requestedBy
   */
  readonly requestedBy?: string;

  /**
   * @schema SignerDescribeSigningJobResponse#status
   */
  readonly status?: string;

  /**
   * @schema SignerDescribeSigningJobResponse#statusReason
   */
  readonly statusReason?: string;

  /**
   * @schema SignerDescribeSigningJobResponse#revocationRecord
   */
  readonly revocationRecord?: SignerSigningJobRevocationRecord;

  /**
   * @schema SignerDescribeSigningJobResponse#signedObject
   */
  readonly signedObject?: SignerSignedObject;

  /**
   * @schema SignerDescribeSigningJobResponse#jobOwner
   */
  readonly jobOwner?: string;

  /**
   * @schema SignerDescribeSigningJobResponse#jobInvoker
   */
  readonly jobInvoker?: string;

}

/**
 * Converts an object of type 'SignerDescribeSigningJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SignerDescribeSigningJobResponse(obj: SignerDescribeSigningJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobId': obj.jobId,
    'source': toJson_SignerSource(obj.source),
    'signingMaterial': toJson_SignerSigningMaterial(obj.signingMaterial),
    'platformId': obj.platformId,
    'platformDisplayName': obj.platformDisplayName,
    'profileName': obj.profileName,
    'profileVersion': obj.profileVersion,
    'overrides': toJson_SignerSigningPlatformOverrides(obj.overrides),
    'signingParameters': ((obj.signingParameters) === undefined) ? undefined : (Object.entries(obj.signingParameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'createdAt': obj.createdAt,
    'completedAt': obj.completedAt,
    'signatureExpiresAt': obj.signatureExpiresAt,
    'requestedBy': obj.requestedBy,
    'status': obj.status,
    'statusReason': obj.statusReason,
    'revocationRecord': toJson_SignerSigningJobRevocationRecord(obj.revocationRecord),
    'signedObject': toJson_SignerSignedObject(obj.signedObject),
    'jobOwner': obj.jobOwner,
    'jobInvoker': obj.jobInvoker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SignerGetSigningPlatformRequest
 */
export interface SignerGetSigningPlatformRequest {
  /**
   * @schema SignerGetSigningPlatformRequest#platformId
   */
  readonly platformId: string;

}

/**
 * Converts an object of type 'SignerGetSigningPlatformRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SignerGetSigningPlatformRequest(obj: SignerGetSigningPlatformRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'platformId': obj.platformId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SignerGetSigningPlatformResponse
 */
export interface SignerGetSigningPlatformResponse {
  /**
   * @schema SignerGetSigningPlatformResponse#platformId
   */
  readonly platformId?: string;

  /**
   * @schema SignerGetSigningPlatformResponse#displayName
   */
  readonly displayName?: string;

  /**
   * @schema SignerGetSigningPlatformResponse#partner
   */
  readonly partner?: string;

  /**
   * @schema SignerGetSigningPlatformResponse#target
   */
  readonly target?: string;

  /**
   * @schema SignerGetSigningPlatformResponse#category
   */
  readonly category?: string;

  /**
   * @schema SignerGetSigningPlatformResponse#signingConfiguration
   */
  readonly signingConfiguration?: SignerSigningConfiguration;

  /**
   * @schema SignerGetSigningPlatformResponse#signingImageFormat
   */
  readonly signingImageFormat?: SignerSigningImageFormat;

  /**
   * @schema SignerGetSigningPlatformResponse#maxSizeInMB
   */
  readonly maxSizeInMb?: number;

  /**
   * @schema SignerGetSigningPlatformResponse#revocationSupported
   */
  readonly revocationSupported?: boolean;

}

/**
 * Converts an object of type 'SignerGetSigningPlatformResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SignerGetSigningPlatformResponse(obj: SignerGetSigningPlatformResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'platformId': obj.platformId,
    'displayName': obj.displayName,
    'partner': obj.partner,
    'target': obj.target,
    'category': obj.category,
    'signingConfiguration': toJson_SignerSigningConfiguration(obj.signingConfiguration),
    'signingImageFormat': toJson_SignerSigningImageFormat(obj.signingImageFormat),
    'maxSizeInMB': obj.maxSizeInMb,
    'revocationSupported': obj.revocationSupported,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SignerGetSigningProfileRequest
 */
export interface SignerGetSigningProfileRequest {
  /**
   * @schema SignerGetSigningProfileRequest#profileName
   */
  readonly profileName: string;

  /**
   * @schema SignerGetSigningProfileRequest#profileOwner
   */
  readonly profileOwner?: string;

}

/**
 * Converts an object of type 'SignerGetSigningProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SignerGetSigningProfileRequest(obj: SignerGetSigningProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'profileName': obj.profileName,
    'profileOwner': obj.profileOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SignerGetSigningProfileResponse
 */
export interface SignerGetSigningProfileResponse {
  /**
   * @schema SignerGetSigningProfileResponse#profileName
   */
  readonly profileName?: string;

  /**
   * @schema SignerGetSigningProfileResponse#profileVersion
   */
  readonly profileVersion?: string;

  /**
   * @schema SignerGetSigningProfileResponse#profileVersionArn
   */
  readonly profileVersionArn?: string;

  /**
   * @schema SignerGetSigningProfileResponse#revocationRecord
   */
  readonly revocationRecord?: SignerSigningProfileRevocationRecord;

  /**
   * @schema SignerGetSigningProfileResponse#signingMaterial
   */
  readonly signingMaterial?: SignerSigningMaterial;

  /**
   * @schema SignerGetSigningProfileResponse#platformId
   */
  readonly platformId?: string;

  /**
   * @schema SignerGetSigningProfileResponse#platformDisplayName
   */
  readonly platformDisplayName?: string;

  /**
   * @schema SignerGetSigningProfileResponse#signatureValidityPeriod
   */
  readonly signatureValidityPeriod?: SignerSignatureValidityPeriod;

  /**
   * @schema SignerGetSigningProfileResponse#overrides
   */
  readonly overrides?: SignerSigningPlatformOverrides;

  /**
   * @schema SignerGetSigningProfileResponse#signingParameters
   */
  readonly signingParameters?: { [key: string]: string };

  /**
   * @schema SignerGetSigningProfileResponse#status
   */
  readonly status?: string;

  /**
   * @schema SignerGetSigningProfileResponse#statusReason
   */
  readonly statusReason?: string;

  /**
   * @schema SignerGetSigningProfileResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema SignerGetSigningProfileResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'SignerGetSigningProfileResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SignerGetSigningProfileResponse(obj: SignerGetSigningProfileResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'profileName': obj.profileName,
    'profileVersion': obj.profileVersion,
    'profileVersionArn': obj.profileVersionArn,
    'revocationRecord': toJson_SignerSigningProfileRevocationRecord(obj.revocationRecord),
    'signingMaterial': toJson_SignerSigningMaterial(obj.signingMaterial),
    'platformId': obj.platformId,
    'platformDisplayName': obj.platformDisplayName,
    'signatureValidityPeriod': toJson_SignerSignatureValidityPeriod(obj.signatureValidityPeriod),
    'overrides': toJson_SignerSigningPlatformOverrides(obj.overrides),
    'signingParameters': ((obj.signingParameters) === undefined) ? undefined : (Object.entries(obj.signingParameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'status': obj.status,
    'statusReason': obj.statusReason,
    'arn': obj.arn,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SignerListProfilePermissionsRequest
 */
export interface SignerListProfilePermissionsRequest {
  /**
   * @schema SignerListProfilePermissionsRequest#profileName
   */
  readonly profileName: string;

  /**
   * @schema SignerListProfilePermissionsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SignerListProfilePermissionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SignerListProfilePermissionsRequest(obj: SignerListProfilePermissionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'profileName': obj.profileName,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SignerListProfilePermissionsResponse
 */
export interface SignerListProfilePermissionsResponse {
  /**
   * @schema SignerListProfilePermissionsResponse#revisionId
   */
  readonly revisionId?: string;

  /**
   * @schema SignerListProfilePermissionsResponse#policySizeBytes
   */
  readonly policySizeBytes?: number;

  /**
   * @schema SignerListProfilePermissionsResponse#permissions
   */
  readonly permissions?: SignerPermission[];

  /**
   * @schema SignerListProfilePermissionsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SignerListProfilePermissionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SignerListProfilePermissionsResponse(obj: SignerListProfilePermissionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'revisionId': obj.revisionId,
    'policySizeBytes': obj.policySizeBytes,
    'permissions': obj.permissions?.map(y => toJson_SignerPermission(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SignerListSigningJobsRequest
 */
export interface SignerListSigningJobsRequest {
  /**
   * @schema SignerListSigningJobsRequest#status
   */
  readonly status?: string;

  /**
   * @schema SignerListSigningJobsRequest#platformId
   */
  readonly platformId?: string;

  /**
   * @schema SignerListSigningJobsRequest#requestedBy
   */
  readonly requestedBy?: string;

  /**
   * @schema SignerListSigningJobsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SignerListSigningJobsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SignerListSigningJobsRequest#isRevoked
   */
  readonly isRevoked?: boolean;

  /**
   * @schema SignerListSigningJobsRequest#signatureExpiresBefore
   */
  readonly signatureExpiresBefore?: string;

  /**
   * @schema SignerListSigningJobsRequest#signatureExpiresAfter
   */
  readonly signatureExpiresAfter?: string;

  /**
   * @schema SignerListSigningJobsRequest#jobInvoker
   */
  readonly jobInvoker?: string;

}

/**
 * Converts an object of type 'SignerListSigningJobsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SignerListSigningJobsRequest(obj: SignerListSigningJobsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'status': obj.status,
    'platformId': obj.platformId,
    'requestedBy': obj.requestedBy,
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
    'isRevoked': obj.isRevoked,
    'signatureExpiresBefore': obj.signatureExpiresBefore,
    'signatureExpiresAfter': obj.signatureExpiresAfter,
    'jobInvoker': obj.jobInvoker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SignerListSigningJobsResponse
 */
export interface SignerListSigningJobsResponse {
  /**
   * @schema SignerListSigningJobsResponse#jobs
   */
  readonly jobs?: SignerSigningJob[];

  /**
   * @schema SignerListSigningJobsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SignerListSigningJobsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SignerListSigningJobsResponse(obj: SignerListSigningJobsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobs': obj.jobs?.map(y => toJson_SignerSigningJob(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SignerListSigningPlatformsRequest
 */
export interface SignerListSigningPlatformsRequest {
  /**
   * @schema SignerListSigningPlatformsRequest#category
   */
  readonly category?: string;

  /**
   * @schema SignerListSigningPlatformsRequest#partner
   */
  readonly partner?: string;

  /**
   * @schema SignerListSigningPlatformsRequest#target
   */
  readonly target?: string;

  /**
   * @schema SignerListSigningPlatformsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SignerListSigningPlatformsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SignerListSigningPlatformsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SignerListSigningPlatformsRequest(obj: SignerListSigningPlatformsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'category': obj.category,
    'partner': obj.partner,
    'target': obj.target,
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SignerListSigningPlatformsResponse
 */
export interface SignerListSigningPlatformsResponse {
  /**
   * @schema SignerListSigningPlatformsResponse#platforms
   */
  readonly platforms?: SignerSigningPlatform[];

  /**
   * @schema SignerListSigningPlatformsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SignerListSigningPlatformsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SignerListSigningPlatformsResponse(obj: SignerListSigningPlatformsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'platforms': obj.platforms?.map(y => toJson_SignerSigningPlatform(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SignerListSigningProfilesRequest
 */
export interface SignerListSigningProfilesRequest {
  /**
   * @schema SignerListSigningProfilesRequest#includeCanceled
   */
  readonly includeCanceled?: boolean;

  /**
   * @schema SignerListSigningProfilesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SignerListSigningProfilesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SignerListSigningProfilesRequest#platformId
   */
  readonly platformId?: string;

  /**
   * @schema SignerListSigningProfilesRequest#statuses
   */
  readonly statuses?: string[];

}

/**
 * Converts an object of type 'SignerListSigningProfilesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SignerListSigningProfilesRequest(obj: SignerListSigningProfilesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'includeCanceled': obj.includeCanceled,
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
    'platformId': obj.platformId,
    'statuses': obj.statuses?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SignerListSigningProfilesResponse
 */
export interface SignerListSigningProfilesResponse {
  /**
   * @schema SignerListSigningProfilesResponse#profiles
   */
  readonly profiles?: SignerSigningProfile[];

  /**
   * @schema SignerListSigningProfilesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SignerListSigningProfilesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SignerListSigningProfilesResponse(obj: SignerListSigningProfilesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'profiles': obj.profiles?.map(y => toJson_SignerSigningProfile(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SignerListTagsForResourceRequest
 */
export interface SignerListTagsForResourceRequest {
  /**
   * @schema SignerListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * Converts an object of type 'SignerListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SignerListTagsForResourceRequest(obj: SignerListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SignerListTagsForResourceResponse
 */
export interface SignerListTagsForResourceResponse {
  /**
   * @schema SignerListTagsForResourceResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'SignerListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SignerListTagsForResourceResponse(obj: SignerListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SignerPutSigningProfileRequest
 */
export interface SignerPutSigningProfileRequest {
  /**
   * @schema SignerPutSigningProfileRequest#profileName
   */
  readonly profileName: string;

  /**
   * @schema SignerPutSigningProfileRequest#signingMaterial
   */
  readonly signingMaterial?: SignerSigningMaterial;

  /**
   * @schema SignerPutSigningProfileRequest#signatureValidityPeriod
   */
  readonly signatureValidityPeriod?: SignerSignatureValidityPeriod;

  /**
   * @schema SignerPutSigningProfileRequest#platformId
   */
  readonly platformId: string;

  /**
   * @schema SignerPutSigningProfileRequest#overrides
   */
  readonly overrides?: SignerSigningPlatformOverrides;

  /**
   * @schema SignerPutSigningProfileRequest#signingParameters
   */
  readonly signingParameters?: { [key: string]: string };

  /**
   * @schema SignerPutSigningProfileRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'SignerPutSigningProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SignerPutSigningProfileRequest(obj: SignerPutSigningProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'profileName': obj.profileName,
    'signingMaterial': toJson_SignerSigningMaterial(obj.signingMaterial),
    'signatureValidityPeriod': toJson_SignerSignatureValidityPeriod(obj.signatureValidityPeriod),
    'platformId': obj.platformId,
    'overrides': toJson_SignerSigningPlatformOverrides(obj.overrides),
    'signingParameters': ((obj.signingParameters) === undefined) ? undefined : (Object.entries(obj.signingParameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SignerPutSigningProfileResponse
 */
export interface SignerPutSigningProfileResponse {
  /**
   * @schema SignerPutSigningProfileResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema SignerPutSigningProfileResponse#profileVersion
   */
  readonly profileVersion?: string;

  /**
   * @schema SignerPutSigningProfileResponse#profileVersionArn
   */
  readonly profileVersionArn?: string;

}

/**
 * Converts an object of type 'SignerPutSigningProfileResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SignerPutSigningProfileResponse(obj: SignerPutSigningProfileResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'profileVersion': obj.profileVersion,
    'profileVersionArn': obj.profileVersionArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SignerRemoveProfilePermissionRequest
 */
export interface SignerRemoveProfilePermissionRequest {
  /**
   * @schema SignerRemoveProfilePermissionRequest#profileName
   */
  readonly profileName: string;

  /**
   * @schema SignerRemoveProfilePermissionRequest#revisionId
   */
  readonly revisionId: string;

  /**
   * @schema SignerRemoveProfilePermissionRequest#statementId
   */
  readonly statementId: string;

}

/**
 * Converts an object of type 'SignerRemoveProfilePermissionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SignerRemoveProfilePermissionRequest(obj: SignerRemoveProfilePermissionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'profileName': obj.profileName,
    'revisionId': obj.revisionId,
    'statementId': obj.statementId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SignerRemoveProfilePermissionResponse
 */
export interface SignerRemoveProfilePermissionResponse {
  /**
   * @schema SignerRemoveProfilePermissionResponse#revisionId
   */
  readonly revisionId?: string;

}

/**
 * Converts an object of type 'SignerRemoveProfilePermissionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SignerRemoveProfilePermissionResponse(obj: SignerRemoveProfilePermissionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'revisionId': obj.revisionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SignerRevokeSignatureRequest
 */
export interface SignerRevokeSignatureRequest {
  /**
   * @schema SignerRevokeSignatureRequest#jobId
   */
  readonly jobId: string;

  /**
   * @schema SignerRevokeSignatureRequest#jobOwner
   */
  readonly jobOwner?: string;

  /**
   * @schema SignerRevokeSignatureRequest#reason
   */
  readonly reason: string;

}

/**
 * Converts an object of type 'SignerRevokeSignatureRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SignerRevokeSignatureRequest(obj: SignerRevokeSignatureRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobId': obj.jobId,
    'jobOwner': obj.jobOwner,
    'reason': obj.reason,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SignerRevokeSigningProfileRequest
 */
export interface SignerRevokeSigningProfileRequest {
  /**
   * @schema SignerRevokeSigningProfileRequest#profileName
   */
  readonly profileName: string;

  /**
   * @schema SignerRevokeSigningProfileRequest#profileVersion
   */
  readonly profileVersion: string;

  /**
   * @schema SignerRevokeSigningProfileRequest#reason
   */
  readonly reason: string;

  /**
   * @schema SignerRevokeSigningProfileRequest#effectiveTime
   */
  readonly effectiveTime: string;

}

/**
 * Converts an object of type 'SignerRevokeSigningProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SignerRevokeSigningProfileRequest(obj: SignerRevokeSigningProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'profileName': obj.profileName,
    'profileVersion': obj.profileVersion,
    'reason': obj.reason,
    'effectiveTime': obj.effectiveTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SignerStartSigningJobRequest
 */
export interface SignerStartSigningJobRequest {
  /**
   * @schema SignerStartSigningJobRequest#source
   */
  readonly source: SignerSource;

  /**
   * @schema SignerStartSigningJobRequest#destination
   */
  readonly destination: SignerDestination;

  /**
   * @schema SignerStartSigningJobRequest#profileName
   */
  readonly profileName: string;

  /**
   * @schema SignerStartSigningJobRequest#clientRequestToken
   */
  readonly clientRequestToken: string;

  /**
   * @schema SignerStartSigningJobRequest#profileOwner
   */
  readonly profileOwner?: string;

}

/**
 * Converts an object of type 'SignerStartSigningJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SignerStartSigningJobRequest(obj: SignerStartSigningJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'source': toJson_SignerSource(obj.source),
    'destination': toJson_SignerDestination(obj.destination),
    'profileName': obj.profileName,
    'clientRequestToken': obj.clientRequestToken,
    'profileOwner': obj.profileOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SignerStartSigningJobResponse
 */
export interface SignerStartSigningJobResponse {
  /**
   * @schema SignerStartSigningJobResponse#jobId
   */
  readonly jobId?: string;

  /**
   * @schema SignerStartSigningJobResponse#jobOwner
   */
  readonly jobOwner?: string;

}

/**
 * Converts an object of type 'SignerStartSigningJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SignerStartSigningJobResponse(obj: SignerStartSigningJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobId': obj.jobId,
    'jobOwner': obj.jobOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SignerTagResourceRequest
 */
export interface SignerTagResourceRequest {
  /**
   * @schema SignerTagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema SignerTagResourceRequest#tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * Converts an object of type 'SignerTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SignerTagResourceRequest(obj: SignerTagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema SignerTagResourceResponse
 */
export interface SignerTagResourceResponse {
}

/**
 * Converts an object of type 'SignerTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SignerTagResourceResponse(obj: SignerTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SignerUntagResourceRequest
 */
export interface SignerUntagResourceRequest {
  /**
   * @schema SignerUntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema SignerUntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * Converts an object of type 'SignerUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SignerUntagResourceRequest(obj: SignerUntagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema SignerUntagResourceResponse
 */
export interface SignerUntagResourceResponse {
}

/**
 * Converts an object of type 'SignerUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SignerUntagResourceResponse(obj: SignerUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SignerSource
 */
export interface SignerSource {
  /**
   * @schema SignerSource#s3
   */
  readonly s3?: SignerS3Source;

}

/**
 * Converts an object of type 'SignerSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SignerSource(obj: SignerSource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    's3': toJson_SignerS3Source(obj.s3),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SignerSigningMaterial
 */
export interface SignerSigningMaterial {
  /**
   * @schema SignerSigningMaterial#certificateArn
   */
  readonly certificateArn: string;

}

/**
 * Converts an object of type 'SignerSigningMaterial' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SignerSigningMaterial(obj: SignerSigningMaterial | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'certificateArn': obj.certificateArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SignerSigningPlatformOverrides
 */
export interface SignerSigningPlatformOverrides {
  /**
   * @schema SignerSigningPlatformOverrides#signingConfiguration
   */
  readonly signingConfiguration?: SignerSigningConfigurationOverrides;

  /**
   * @schema SignerSigningPlatformOverrides#signingImageFormat
   */
  readonly signingImageFormat?: string;

}

/**
 * Converts an object of type 'SignerSigningPlatformOverrides' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SignerSigningPlatformOverrides(obj: SignerSigningPlatformOverrides | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'signingConfiguration': toJson_SignerSigningConfigurationOverrides(obj.signingConfiguration),
    'signingImageFormat': obj.signingImageFormat,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SignerSigningJobRevocationRecord
 */
export interface SignerSigningJobRevocationRecord {
  /**
   * @schema SignerSigningJobRevocationRecord#reason
   */
  readonly reason?: string;

  /**
   * @schema SignerSigningJobRevocationRecord#revokedAt
   */
  readonly revokedAt?: string;

  /**
   * @schema SignerSigningJobRevocationRecord#revokedBy
   */
  readonly revokedBy?: string;

}

/**
 * Converts an object of type 'SignerSigningJobRevocationRecord' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SignerSigningJobRevocationRecord(obj: SignerSigningJobRevocationRecord | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'reason': obj.reason,
    'revokedAt': obj.revokedAt,
    'revokedBy': obj.revokedBy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SignerSignedObject
 */
export interface SignerSignedObject {
  /**
   * @schema SignerSignedObject#s3
   */
  readonly s3?: SignerS3SignedObject;

}

/**
 * Converts an object of type 'SignerSignedObject' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SignerSignedObject(obj: SignerSignedObject | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    's3': toJson_SignerS3SignedObject(obj.s3),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SignerSigningConfiguration
 */
export interface SignerSigningConfiguration {
  /**
   * @schema SignerSigningConfiguration#encryptionAlgorithmOptions
   */
  readonly encryptionAlgorithmOptions: SignerEncryptionAlgorithmOptions;

  /**
   * @schema SignerSigningConfiguration#hashAlgorithmOptions
   */
  readonly hashAlgorithmOptions: SignerHashAlgorithmOptions;

}

/**
 * Converts an object of type 'SignerSigningConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SignerSigningConfiguration(obj: SignerSigningConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'encryptionAlgorithmOptions': toJson_SignerEncryptionAlgorithmOptions(obj.encryptionAlgorithmOptions),
    'hashAlgorithmOptions': toJson_SignerHashAlgorithmOptions(obj.hashAlgorithmOptions),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SignerSigningImageFormat
 */
export interface SignerSigningImageFormat {
  /**
   * @schema SignerSigningImageFormat#supportedFormats
   */
  readonly supportedFormats: string[];

  /**
   * @schema SignerSigningImageFormat#defaultFormat
   */
  readonly defaultFormat: string;

}

/**
 * Converts an object of type 'SignerSigningImageFormat' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SignerSigningImageFormat(obj: SignerSigningImageFormat | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'supportedFormats': obj.supportedFormats?.map(y => y),
    'defaultFormat': obj.defaultFormat,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SignerSigningProfileRevocationRecord
 */
export interface SignerSigningProfileRevocationRecord {
  /**
   * @schema SignerSigningProfileRevocationRecord#revocationEffectiveFrom
   */
  readonly revocationEffectiveFrom?: string;

  /**
   * @schema SignerSigningProfileRevocationRecord#revokedAt
   */
  readonly revokedAt?: string;

  /**
   * @schema SignerSigningProfileRevocationRecord#revokedBy
   */
  readonly revokedBy?: string;

}

/**
 * Converts an object of type 'SignerSigningProfileRevocationRecord' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SignerSigningProfileRevocationRecord(obj: SignerSigningProfileRevocationRecord | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'revocationEffectiveFrom': obj.revocationEffectiveFrom,
    'revokedAt': obj.revokedAt,
    'revokedBy': obj.revokedBy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SignerSignatureValidityPeriod
 */
export interface SignerSignatureValidityPeriod {
  /**
   * @schema SignerSignatureValidityPeriod#value
   */
  readonly value?: number;

  /**
   * @schema SignerSignatureValidityPeriod#type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'SignerSignatureValidityPeriod' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SignerSignatureValidityPeriod(obj: SignerSignatureValidityPeriod | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'value': obj.value,
    'type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SignerPermission
 */
export interface SignerPermission {
  /**
   * @schema SignerPermission#action
   */
  readonly action?: string;

  /**
   * @schema SignerPermission#principal
   */
  readonly principal?: string;

  /**
   * @schema SignerPermission#statementId
   */
  readonly statementId?: string;

  /**
   * @schema SignerPermission#profileVersion
   */
  readonly profileVersion?: string;

}

/**
 * Converts an object of type 'SignerPermission' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SignerPermission(obj: SignerPermission | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'action': obj.action,
    'principal': obj.principal,
    'statementId': obj.statementId,
    'profileVersion': obj.profileVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SignerSigningJob
 */
export interface SignerSigningJob {
  /**
   * @schema SignerSigningJob#jobId
   */
  readonly jobId?: string;

  /**
   * @schema SignerSigningJob#source
   */
  readonly source?: SignerSource;

  /**
   * @schema SignerSigningJob#signedObject
   */
  readonly signedObject?: SignerSignedObject;

  /**
   * @schema SignerSigningJob#signingMaterial
   */
  readonly signingMaterial?: SignerSigningMaterial;

  /**
   * @schema SignerSigningJob#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema SignerSigningJob#status
   */
  readonly status?: string;

  /**
   * @schema SignerSigningJob#isRevoked
   */
  readonly isRevoked?: boolean;

  /**
   * @schema SignerSigningJob#profileName
   */
  readonly profileName?: string;

  /**
   * @schema SignerSigningJob#profileVersion
   */
  readonly profileVersion?: string;

  /**
   * @schema SignerSigningJob#platformId
   */
  readonly platformId?: string;

  /**
   * @schema SignerSigningJob#platformDisplayName
   */
  readonly platformDisplayName?: string;

  /**
   * @schema SignerSigningJob#signatureExpiresAt
   */
  readonly signatureExpiresAt?: string;

  /**
   * @schema SignerSigningJob#jobOwner
   */
  readonly jobOwner?: string;

  /**
   * @schema SignerSigningJob#jobInvoker
   */
  readonly jobInvoker?: string;

}

/**
 * Converts an object of type 'SignerSigningJob' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SignerSigningJob(obj: SignerSigningJob | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobId': obj.jobId,
    'source': toJson_SignerSource(obj.source),
    'signedObject': toJson_SignerSignedObject(obj.signedObject),
    'signingMaterial': toJson_SignerSigningMaterial(obj.signingMaterial),
    'createdAt': obj.createdAt,
    'status': obj.status,
    'isRevoked': obj.isRevoked,
    'profileName': obj.profileName,
    'profileVersion': obj.profileVersion,
    'platformId': obj.platformId,
    'platformDisplayName': obj.platformDisplayName,
    'signatureExpiresAt': obj.signatureExpiresAt,
    'jobOwner': obj.jobOwner,
    'jobInvoker': obj.jobInvoker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SignerSigningPlatform
 */
export interface SignerSigningPlatform {
  /**
   * @schema SignerSigningPlatform#platformId
   */
  readonly platformId?: string;

  /**
   * @schema SignerSigningPlatform#displayName
   */
  readonly displayName?: string;

  /**
   * @schema SignerSigningPlatform#partner
   */
  readonly partner?: string;

  /**
   * @schema SignerSigningPlatform#target
   */
  readonly target?: string;

  /**
   * @schema SignerSigningPlatform#category
   */
  readonly category?: string;

  /**
   * @schema SignerSigningPlatform#signingConfiguration
   */
  readonly signingConfiguration?: SignerSigningConfiguration;

  /**
   * @schema SignerSigningPlatform#signingImageFormat
   */
  readonly signingImageFormat?: SignerSigningImageFormat;

  /**
   * @schema SignerSigningPlatform#maxSizeInMB
   */
  readonly maxSizeInMb?: number;

  /**
   * @schema SignerSigningPlatform#revocationSupported
   */
  readonly revocationSupported?: boolean;

}

/**
 * Converts an object of type 'SignerSigningPlatform' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SignerSigningPlatform(obj: SignerSigningPlatform | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'platformId': obj.platformId,
    'displayName': obj.displayName,
    'partner': obj.partner,
    'target': obj.target,
    'category': obj.category,
    'signingConfiguration': toJson_SignerSigningConfiguration(obj.signingConfiguration),
    'signingImageFormat': toJson_SignerSigningImageFormat(obj.signingImageFormat),
    'maxSizeInMB': obj.maxSizeInMb,
    'revocationSupported': obj.revocationSupported,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SignerSigningProfile
 */
export interface SignerSigningProfile {
  /**
   * @schema SignerSigningProfile#profileName
   */
  readonly profileName?: string;

  /**
   * @schema SignerSigningProfile#profileVersion
   */
  readonly profileVersion?: string;

  /**
   * @schema SignerSigningProfile#profileVersionArn
   */
  readonly profileVersionArn?: string;

  /**
   * @schema SignerSigningProfile#signingMaterial
   */
  readonly signingMaterial?: SignerSigningMaterial;

  /**
   * @schema SignerSigningProfile#signatureValidityPeriod
   */
  readonly signatureValidityPeriod?: SignerSignatureValidityPeriod;

  /**
   * @schema SignerSigningProfile#platformId
   */
  readonly platformId?: string;

  /**
   * @schema SignerSigningProfile#platformDisplayName
   */
  readonly platformDisplayName?: string;

  /**
   * @schema SignerSigningProfile#signingParameters
   */
  readonly signingParameters?: { [key: string]: string };

  /**
   * @schema SignerSigningProfile#status
   */
  readonly status?: string;

  /**
   * @schema SignerSigningProfile#arn
   */
  readonly arn?: string;

  /**
   * @schema SignerSigningProfile#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'SignerSigningProfile' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SignerSigningProfile(obj: SignerSigningProfile | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'profileName': obj.profileName,
    'profileVersion': obj.profileVersion,
    'profileVersionArn': obj.profileVersionArn,
    'signingMaterial': toJson_SignerSigningMaterial(obj.signingMaterial),
    'signatureValidityPeriod': toJson_SignerSignatureValidityPeriod(obj.signatureValidityPeriod),
    'platformId': obj.platformId,
    'platformDisplayName': obj.platformDisplayName,
    'signingParameters': ((obj.signingParameters) === undefined) ? undefined : (Object.entries(obj.signingParameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'status': obj.status,
    'arn': obj.arn,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SignerDestination
 */
export interface SignerDestination {
  /**
   * @schema SignerDestination#s3
   */
  readonly s3?: SignerS3Destination;

}

/**
 * Converts an object of type 'SignerDestination' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SignerDestination(obj: SignerDestination | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    's3': toJson_SignerS3Destination(obj.s3),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SignerS3Source
 */
export interface SignerS3Source {
  /**
   * @schema SignerS3Source#bucketName
   */
  readonly bucketName: string;

  /**
   * @schema SignerS3Source#key
   */
  readonly key: string;

  /**
   * @schema SignerS3Source#version
   */
  readonly version: string;

}

/**
 * Converts an object of type 'SignerS3Source' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SignerS3Source(obj: SignerS3Source | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bucketName': obj.bucketName,
    'key': obj.key,
    'version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SignerSigningConfigurationOverrides
 */
export interface SignerSigningConfigurationOverrides {
  /**
   * @schema SignerSigningConfigurationOverrides#encryptionAlgorithm
   */
  readonly encryptionAlgorithm?: string;

  /**
   * @schema SignerSigningConfigurationOverrides#hashAlgorithm
   */
  readonly hashAlgorithm?: string;

}

/**
 * Converts an object of type 'SignerSigningConfigurationOverrides' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SignerSigningConfigurationOverrides(obj: SignerSigningConfigurationOverrides | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'encryptionAlgorithm': obj.encryptionAlgorithm,
    'hashAlgorithm': obj.hashAlgorithm,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SignerS3SignedObject
 */
export interface SignerS3SignedObject {
  /**
   * @schema SignerS3SignedObject#bucketName
   */
  readonly bucketName?: string;

  /**
   * @schema SignerS3SignedObject#key
   */
  readonly key?: string;

}

/**
 * Converts an object of type 'SignerS3SignedObject' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SignerS3SignedObject(obj: SignerS3SignedObject | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bucketName': obj.bucketName,
    'key': obj.key,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SignerEncryptionAlgorithmOptions
 */
export interface SignerEncryptionAlgorithmOptions {
  /**
   * @schema SignerEncryptionAlgorithmOptions#allowedValues
   */
  readonly allowedValues: string[];

  /**
   * @schema SignerEncryptionAlgorithmOptions#defaultValue
   */
  readonly defaultValue: string;

}

/**
 * Converts an object of type 'SignerEncryptionAlgorithmOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SignerEncryptionAlgorithmOptions(obj: SignerEncryptionAlgorithmOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'allowedValues': obj.allowedValues?.map(y => y),
    'defaultValue': obj.defaultValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SignerHashAlgorithmOptions
 */
export interface SignerHashAlgorithmOptions {
  /**
   * @schema SignerHashAlgorithmOptions#allowedValues
   */
  readonly allowedValues: string[];

  /**
   * @schema SignerHashAlgorithmOptions#defaultValue
   */
  readonly defaultValue: string;

}

/**
 * Converts an object of type 'SignerHashAlgorithmOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SignerHashAlgorithmOptions(obj: SignerHashAlgorithmOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'allowedValues': obj.allowedValues?.map(y => y),
    'defaultValue': obj.defaultValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SignerS3Destination
 */
export interface SignerS3Destination {
  /**
   * @schema SignerS3Destination#bucketName
   */
  readonly bucketName?: string;

  /**
   * @schema SignerS3Destination#prefix
   */
  readonly prefix?: string;

}

/**
 * Converts an object of type 'SignerS3Destination' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SignerS3Destination(obj: SignerS3Destination | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bucketName': obj.bucketName,
    'prefix': obj.prefix,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
