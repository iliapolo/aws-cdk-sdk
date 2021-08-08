/**
 * @schema FinspacedataCreateChangesetRequest
 */
export interface FinspacedataCreateChangesetRequest {
  /**
   * @schema FinspacedataCreateChangesetRequest#datasetId
   */
  readonly datasetId: string;

  /**
   * @schema FinspacedataCreateChangesetRequest#changeType
   */
  readonly changeType: string;

  /**
   * @schema FinspacedataCreateChangesetRequest#sourceType
   */
  readonly sourceType: string;

  /**
   * @schema FinspacedataCreateChangesetRequest#sourceParams
   */
  readonly sourceParams: { [key: string]: string };

  /**
   * @schema FinspacedataCreateChangesetRequest#formatType
   */
  readonly formatType?: string;

  /**
   * @schema FinspacedataCreateChangesetRequest#formatParams
   */
  readonly formatParams?: { [key: string]: string };

  /**
   * @schema FinspacedataCreateChangesetRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'FinspacedataCreateChangesetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FinspacedataCreateChangesetRequest(obj: FinspacedataCreateChangesetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'datasetId': obj.datasetId,
    'changeType': obj.changeType,
    'sourceType': obj.sourceType,
    'sourceParams': ((obj.sourceParams) === undefined) ? undefined : (Object.entries(obj.sourceParams).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'formatType': obj.formatType,
    'formatParams': ((obj.formatParams) === undefined) ? undefined : (Object.entries(obj.formatParams).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FinspacedataCreateChangesetResponse
 */
export interface FinspacedataCreateChangesetResponse {
  /**
   * @schema FinspacedataCreateChangesetResponse#changeset
   */
  readonly changeset?: FinspacedataChangesetInfo;

}

/**
 * Converts an object of type 'FinspacedataCreateChangesetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FinspacedataCreateChangesetResponse(obj: FinspacedataCreateChangesetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'changeset': toJson_FinspacedataChangesetInfo(obj.changeset),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FinspacedataGetProgrammaticAccessCredentialsRequest
 */
export interface FinspacedataGetProgrammaticAccessCredentialsRequest {
  /**
   * @schema FinspacedataGetProgrammaticAccessCredentialsRequest#durationInMinutes
   */
  readonly durationInMinutes?: number;

  /**
   * @schema FinspacedataGetProgrammaticAccessCredentialsRequest#environmentId
   */
  readonly environmentId: string;

}

/**
 * Converts an object of type 'FinspacedataGetProgrammaticAccessCredentialsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FinspacedataGetProgrammaticAccessCredentialsRequest(obj: FinspacedataGetProgrammaticAccessCredentialsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'durationInMinutes': obj.durationInMinutes,
    'environmentId': obj.environmentId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FinspacedataGetProgrammaticAccessCredentialsResponse
 */
export interface FinspacedataGetProgrammaticAccessCredentialsResponse {
  /**
   * @schema FinspacedataGetProgrammaticAccessCredentialsResponse#credentials
   */
  readonly credentials?: FinspacedataCredentials;

  /**
   * @schema FinspacedataGetProgrammaticAccessCredentialsResponse#durationInMinutes
   */
  readonly durationInMinutes?: number;

}

/**
 * Converts an object of type 'FinspacedataGetProgrammaticAccessCredentialsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FinspacedataGetProgrammaticAccessCredentialsResponse(obj: FinspacedataGetProgrammaticAccessCredentialsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'credentials': toJson_FinspacedataCredentials(obj.credentials),
    'durationInMinutes': obj.durationInMinutes,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FinspacedataGetWorkingLocationRequest
 */
export interface FinspacedataGetWorkingLocationRequest {
  /**
   * @schema FinspacedataGetWorkingLocationRequest#locationType
   */
  readonly locationType?: string;

}

/**
 * Converts an object of type 'FinspacedataGetWorkingLocationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FinspacedataGetWorkingLocationRequest(obj: FinspacedataGetWorkingLocationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'locationType': obj.locationType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FinspacedataGetWorkingLocationResponse
 */
export interface FinspacedataGetWorkingLocationResponse {
  /**
   * @schema FinspacedataGetWorkingLocationResponse#s3Uri
   */
  readonly s3Uri?: string;

  /**
   * @schema FinspacedataGetWorkingLocationResponse#s3Path
   */
  readonly s3Path?: string;

  /**
   * @schema FinspacedataGetWorkingLocationResponse#s3Bucket
   */
  readonly s3Bucket?: string;

}

/**
 * Converts an object of type 'FinspacedataGetWorkingLocationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FinspacedataGetWorkingLocationResponse(obj: FinspacedataGetWorkingLocationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    's3Uri': obj.s3Uri,
    's3Path': obj.s3Path,
    's3Bucket': obj.s3Bucket,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FinspacedataChangesetInfo
 */
export interface FinspacedataChangesetInfo {
  /**
   * @schema FinspacedataChangesetInfo#id
   */
  readonly id?: string;

  /**
   * @schema FinspacedataChangesetInfo#changesetArn
   */
  readonly changesetArn?: string;

  /**
   * @schema FinspacedataChangesetInfo#datasetId
   */
  readonly datasetId?: string;

  /**
   * @schema FinspacedataChangesetInfo#changeType
   */
  readonly changeType?: string;

  /**
   * @schema FinspacedataChangesetInfo#sourceType
   */
  readonly sourceType?: string;

  /**
   * @schema FinspacedataChangesetInfo#sourceParams
   */
  readonly sourceParams?: { [key: string]: string };

  /**
   * @schema FinspacedataChangesetInfo#formatType
   */
  readonly formatType?: string;

  /**
   * @schema FinspacedataChangesetInfo#formatParams
   */
  readonly formatParams?: { [key: string]: string };

  /**
   * @schema FinspacedataChangesetInfo#createTimestamp
   */
  readonly createTimestamp?: string;

  /**
   * @schema FinspacedataChangesetInfo#status
   */
  readonly status?: string;

  /**
   * @schema FinspacedataChangesetInfo#errorInfo
   */
  readonly errorInfo?: FinspacedataErrorInfo;

  /**
   * @schema FinspacedataChangesetInfo#changesetLabels
   */
  readonly changesetLabels?: { [key: string]: string };

  /**
   * @schema FinspacedataChangesetInfo#updatesChangesetId
   */
  readonly updatesChangesetId?: string;

  /**
   * @schema FinspacedataChangesetInfo#updatedByChangesetId
   */
  readonly updatedByChangesetId?: string;

}

/**
 * Converts an object of type 'FinspacedataChangesetInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FinspacedataChangesetInfo(obj: FinspacedataChangesetInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'changesetArn': obj.changesetArn,
    'datasetId': obj.datasetId,
    'changeType': obj.changeType,
    'sourceType': obj.sourceType,
    'sourceParams': ((obj.sourceParams) === undefined) ? undefined : (Object.entries(obj.sourceParams).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'formatType': obj.formatType,
    'formatParams': ((obj.formatParams) === undefined) ? undefined : (Object.entries(obj.formatParams).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'createTimestamp': obj.createTimestamp,
    'status': obj.status,
    'errorInfo': toJson_FinspacedataErrorInfo(obj.errorInfo),
    'changesetLabels': ((obj.changesetLabels) === undefined) ? undefined : (Object.entries(obj.changesetLabels).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'updatesChangesetId': obj.updatesChangesetId,
    'updatedByChangesetId': obj.updatedByChangesetId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FinspacedataCredentials
 */
export interface FinspacedataCredentials {
  /**
   * @schema FinspacedataCredentials#accessKeyId
   */
  readonly accessKeyId?: string;

  /**
   * @schema FinspacedataCredentials#secretAccessKey
   */
  readonly secretAccessKey?: string;

  /**
   * @schema FinspacedataCredentials#sessionToken
   */
  readonly sessionToken?: string;

}

/**
 * Converts an object of type 'FinspacedataCredentials' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FinspacedataCredentials(obj: FinspacedataCredentials | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accessKeyId': obj.accessKeyId,
    'secretAccessKey': obj.secretAccessKey,
    'sessionToken': obj.sessionToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FinspacedataErrorInfo
 */
export interface FinspacedataErrorInfo {
  /**
   * @schema FinspacedataErrorInfo#errorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema FinspacedataErrorInfo#errorCategory
   */
  readonly errorCategory?: string;

}

/**
 * Converts an object of type 'FinspacedataErrorInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FinspacedataErrorInfo(obj: FinspacedataErrorInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'errorMessage': obj.errorMessage,
    'errorCategory': obj.errorCategory,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
