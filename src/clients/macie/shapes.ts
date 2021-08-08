/**
 * @schema MacieAcceptInvitationRequest
 */
export interface MacieAcceptInvitationRequest {
  /**
   * @schema MacieAcceptInvitationRequest#administratorAccountId
   */
  readonly administratorAccountId?: string;

  /**
   * @schema MacieAcceptInvitationRequest#invitationId
   */
  readonly invitationId: string;

  /**
   * @schema MacieAcceptInvitationRequest#masterAccount
   */
  readonly masterAccount?: string;

}

/**
 * Converts an object of type 'MacieAcceptInvitationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieAcceptInvitationRequest(obj: MacieAcceptInvitationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'administratorAccountId': obj.administratorAccountId,
    'invitationId': obj.invitationId,
    'masterAccount': obj.masterAccount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieAcceptInvitationResponse
 */
export interface MacieAcceptInvitationResponse {
}

/**
 * Converts an object of type 'MacieAcceptInvitationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieAcceptInvitationResponse(obj: MacieAcceptInvitationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieBatchGetCustomDataIdentifiersRequest
 */
export interface MacieBatchGetCustomDataIdentifiersRequest {
  /**
   * @schema MacieBatchGetCustomDataIdentifiersRequest#ids
   */
  readonly ids?: string[];

}

/**
 * Converts an object of type 'MacieBatchGetCustomDataIdentifiersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieBatchGetCustomDataIdentifiersRequest(obj: MacieBatchGetCustomDataIdentifiersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ids': obj.ids?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieBatchGetCustomDataIdentifiersResponse
 */
export interface MacieBatchGetCustomDataIdentifiersResponse {
  /**
   * @schema MacieBatchGetCustomDataIdentifiersResponse#customDataIdentifiers
   */
  readonly customDataIdentifiers?: MacieBatchGetCustomDataIdentifierSummary[];

  /**
   * @schema MacieBatchGetCustomDataIdentifiersResponse#notFoundIdentifierIds
   */
  readonly notFoundIdentifierIds?: string[];

}

/**
 * Converts an object of type 'MacieBatchGetCustomDataIdentifiersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieBatchGetCustomDataIdentifiersResponse(obj: MacieBatchGetCustomDataIdentifiersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'customDataIdentifiers': obj.customDataIdentifiers?.map(y => toJson_MacieBatchGetCustomDataIdentifierSummary(y)),
    'notFoundIdentifierIds': obj.notFoundIdentifierIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieCreateClassificationJobRequest
 */
export interface MacieCreateClassificationJobRequest {
  /**
   * @schema MacieCreateClassificationJobRequest#clientToken
   */
  readonly clientToken: string;

  /**
   * @schema MacieCreateClassificationJobRequest#customDataIdentifierIds
   */
  readonly customDataIdentifierIds?: string[];

  /**
   * @schema MacieCreateClassificationJobRequest#description
   */
  readonly description?: string;

  /**
   * @schema MacieCreateClassificationJobRequest#initialRun
   */
  readonly initialRun?: boolean;

  /**
   * @schema MacieCreateClassificationJobRequest#jobType
   */
  readonly jobType: string;

  /**
   * @schema MacieCreateClassificationJobRequest#name
   */
  readonly name: string;

  /**
   * @schema MacieCreateClassificationJobRequest#s3JobDefinition
   */
  readonly s3JobDefinition: MacieS3JobDefinition;

  /**
   * @schema MacieCreateClassificationJobRequest#samplingPercentage
   */
  readonly samplingPercentage?: number;

  /**
   * @schema MacieCreateClassificationJobRequest#scheduleFrequency
   */
  readonly scheduleFrequency?: MacieJobScheduleFrequency;

  /**
   * @schema MacieCreateClassificationJobRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'MacieCreateClassificationJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieCreateClassificationJobRequest(obj: MacieCreateClassificationJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientToken': obj.clientToken,
    'customDataIdentifierIds': obj.customDataIdentifierIds?.map(y => y),
    'description': obj.description,
    'initialRun': obj.initialRun,
    'jobType': obj.jobType,
    'name': obj.name,
    's3JobDefinition': toJson_MacieS3JobDefinition(obj.s3JobDefinition),
    'samplingPercentage': obj.samplingPercentage,
    'scheduleFrequency': toJson_MacieJobScheduleFrequency(obj.scheduleFrequency),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieCreateClassificationJobResponse
 */
export interface MacieCreateClassificationJobResponse {
  /**
   * @schema MacieCreateClassificationJobResponse#jobArn
   */
  readonly jobArn?: string;

  /**
   * @schema MacieCreateClassificationJobResponse#jobId
   */
  readonly jobId?: string;

}

/**
 * Converts an object of type 'MacieCreateClassificationJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieCreateClassificationJobResponse(obj: MacieCreateClassificationJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobArn': obj.jobArn,
    'jobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieCreateCustomDataIdentifierRequest
 */
export interface MacieCreateCustomDataIdentifierRequest {
  /**
   * @schema MacieCreateCustomDataIdentifierRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema MacieCreateCustomDataIdentifierRequest#description
   */
  readonly description?: string;

  /**
   * @schema MacieCreateCustomDataIdentifierRequest#ignoreWords
   */
  readonly ignoreWords?: string[];

  /**
   * @schema MacieCreateCustomDataIdentifierRequest#keywords
   */
  readonly keywords?: string[];

  /**
   * @schema MacieCreateCustomDataIdentifierRequest#maximumMatchDistance
   */
  readonly maximumMatchDistance?: number;

  /**
   * @schema MacieCreateCustomDataIdentifierRequest#name
   */
  readonly name?: string;

  /**
   * @schema MacieCreateCustomDataIdentifierRequest#regex
   */
  readonly regex?: string;

  /**
   * @schema MacieCreateCustomDataIdentifierRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'MacieCreateCustomDataIdentifierRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieCreateCustomDataIdentifierRequest(obj: MacieCreateCustomDataIdentifierRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientToken': obj.clientToken,
    'description': obj.description,
    'ignoreWords': obj.ignoreWords?.map(y => y),
    'keywords': obj.keywords?.map(y => y),
    'maximumMatchDistance': obj.maximumMatchDistance,
    'name': obj.name,
    'regex': obj.regex,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieCreateCustomDataIdentifierResponse
 */
export interface MacieCreateCustomDataIdentifierResponse {
  /**
   * @schema MacieCreateCustomDataIdentifierResponse#customDataIdentifierId
   */
  readonly customDataIdentifierId?: string;

}

/**
 * Converts an object of type 'MacieCreateCustomDataIdentifierResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieCreateCustomDataIdentifierResponse(obj: MacieCreateCustomDataIdentifierResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'customDataIdentifierId': obj.customDataIdentifierId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieCreateFindingsFilterRequest
 */
export interface MacieCreateFindingsFilterRequest {
  /**
   * @schema MacieCreateFindingsFilterRequest#action
   */
  readonly action: string;

  /**
   * @schema MacieCreateFindingsFilterRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema MacieCreateFindingsFilterRequest#description
   */
  readonly description?: string;

  /**
   * @schema MacieCreateFindingsFilterRequest#findingCriteria
   */
  readonly findingCriteria: MacieFindingCriteria;

  /**
   * @schema MacieCreateFindingsFilterRequest#name
   */
  readonly name: string;

  /**
   * @schema MacieCreateFindingsFilterRequest#position
   */
  readonly position?: number;

  /**
   * @schema MacieCreateFindingsFilterRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'MacieCreateFindingsFilterRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieCreateFindingsFilterRequest(obj: MacieCreateFindingsFilterRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'action': obj.action,
    'clientToken': obj.clientToken,
    'description': obj.description,
    'findingCriteria': toJson_MacieFindingCriteria(obj.findingCriteria),
    'name': obj.name,
    'position': obj.position,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieCreateFindingsFilterResponse
 */
export interface MacieCreateFindingsFilterResponse {
  /**
   * @schema MacieCreateFindingsFilterResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema MacieCreateFindingsFilterResponse#id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'MacieCreateFindingsFilterResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieCreateFindingsFilterResponse(obj: MacieCreateFindingsFilterResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieCreateInvitationsRequest
 */
export interface MacieCreateInvitationsRequest {
  /**
   * @schema MacieCreateInvitationsRequest#accountIds
   */
  readonly accountIds: string[];

  /**
   * @schema MacieCreateInvitationsRequest#disableEmailNotification
   */
  readonly disableEmailNotification?: boolean;

  /**
   * @schema MacieCreateInvitationsRequest#message
   */
  readonly message?: string;

}

/**
 * Converts an object of type 'MacieCreateInvitationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieCreateInvitationsRequest(obj: MacieCreateInvitationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountIds': obj.accountIds?.map(y => y),
    'disableEmailNotification': obj.disableEmailNotification,
    'message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieCreateInvitationsResponse
 */
export interface MacieCreateInvitationsResponse {
  /**
   * @schema MacieCreateInvitationsResponse#unprocessedAccounts
   */
  readonly unprocessedAccounts?: MacieUnprocessedAccount[];

}

/**
 * Converts an object of type 'MacieCreateInvitationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieCreateInvitationsResponse(obj: MacieCreateInvitationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'unprocessedAccounts': obj.unprocessedAccounts?.map(y => toJson_MacieUnprocessedAccount(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieCreateMemberRequest
 */
export interface MacieCreateMemberRequest {
  /**
   * @schema MacieCreateMemberRequest#account
   */
  readonly account: MacieAccountDetail;

  /**
   * @schema MacieCreateMemberRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'MacieCreateMemberRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieCreateMemberRequest(obj: MacieCreateMemberRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'account': toJson_MacieAccountDetail(obj.account),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieCreateMemberResponse
 */
export interface MacieCreateMemberResponse {
  /**
   * @schema MacieCreateMemberResponse#arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'MacieCreateMemberResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieCreateMemberResponse(obj: MacieCreateMemberResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieCreateSampleFindingsRequest
 */
export interface MacieCreateSampleFindingsRequest {
  /**
   * @schema MacieCreateSampleFindingsRequest#findingTypes
   */
  readonly findingTypes?: string[];

}

/**
 * Converts an object of type 'MacieCreateSampleFindingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieCreateSampleFindingsRequest(obj: MacieCreateSampleFindingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'findingTypes': obj.findingTypes?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieCreateSampleFindingsResponse
 */
export interface MacieCreateSampleFindingsResponse {
}

/**
 * Converts an object of type 'MacieCreateSampleFindingsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieCreateSampleFindingsResponse(obj: MacieCreateSampleFindingsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieDeclineInvitationsRequest
 */
export interface MacieDeclineInvitationsRequest {
  /**
   * @schema MacieDeclineInvitationsRequest#accountIds
   */
  readonly accountIds: string[];

}

/**
 * Converts an object of type 'MacieDeclineInvitationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieDeclineInvitationsRequest(obj: MacieDeclineInvitationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountIds': obj.accountIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieDeclineInvitationsResponse
 */
export interface MacieDeclineInvitationsResponse {
  /**
   * @schema MacieDeclineInvitationsResponse#unprocessedAccounts
   */
  readonly unprocessedAccounts?: MacieUnprocessedAccount[];

}

/**
 * Converts an object of type 'MacieDeclineInvitationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieDeclineInvitationsResponse(obj: MacieDeclineInvitationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'unprocessedAccounts': obj.unprocessedAccounts?.map(y => toJson_MacieUnprocessedAccount(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieDeleteCustomDataIdentifierRequest
 */
export interface MacieDeleteCustomDataIdentifierRequest {
  /**
   * @schema MacieDeleteCustomDataIdentifierRequest#id
   */
  readonly id: string;

}

/**
 * Converts an object of type 'MacieDeleteCustomDataIdentifierRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieDeleteCustomDataIdentifierRequest(obj: MacieDeleteCustomDataIdentifierRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieDeleteCustomDataIdentifierResponse
 */
export interface MacieDeleteCustomDataIdentifierResponse {
}

/**
 * Converts an object of type 'MacieDeleteCustomDataIdentifierResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieDeleteCustomDataIdentifierResponse(obj: MacieDeleteCustomDataIdentifierResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieDeleteFindingsFilterRequest
 */
export interface MacieDeleteFindingsFilterRequest {
  /**
   * @schema MacieDeleteFindingsFilterRequest#id
   */
  readonly id: string;

}

/**
 * Converts an object of type 'MacieDeleteFindingsFilterRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieDeleteFindingsFilterRequest(obj: MacieDeleteFindingsFilterRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieDeleteFindingsFilterResponse
 */
export interface MacieDeleteFindingsFilterResponse {
}

/**
 * Converts an object of type 'MacieDeleteFindingsFilterResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieDeleteFindingsFilterResponse(obj: MacieDeleteFindingsFilterResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieDeleteInvitationsRequest
 */
export interface MacieDeleteInvitationsRequest {
  /**
   * @schema MacieDeleteInvitationsRequest#accountIds
   */
  readonly accountIds: string[];

}

/**
 * Converts an object of type 'MacieDeleteInvitationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieDeleteInvitationsRequest(obj: MacieDeleteInvitationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountIds': obj.accountIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieDeleteInvitationsResponse
 */
export interface MacieDeleteInvitationsResponse {
  /**
   * @schema MacieDeleteInvitationsResponse#unprocessedAccounts
   */
  readonly unprocessedAccounts?: MacieUnprocessedAccount[];

}

/**
 * Converts an object of type 'MacieDeleteInvitationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieDeleteInvitationsResponse(obj: MacieDeleteInvitationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'unprocessedAccounts': obj.unprocessedAccounts?.map(y => toJson_MacieUnprocessedAccount(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieDeleteMemberRequest
 */
export interface MacieDeleteMemberRequest {
  /**
   * @schema MacieDeleteMemberRequest#id
   */
  readonly id: string;

}

/**
 * Converts an object of type 'MacieDeleteMemberRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieDeleteMemberRequest(obj: MacieDeleteMemberRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieDeleteMemberResponse
 */
export interface MacieDeleteMemberResponse {
}

/**
 * Converts an object of type 'MacieDeleteMemberResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieDeleteMemberResponse(obj: MacieDeleteMemberResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieDescribeBucketsRequest
 */
export interface MacieDescribeBucketsRequest {
  /**
   * @schema MacieDescribeBucketsRequest#criteria
   */
  readonly criteria?: { [key: string]: MacieBucketCriteriaAdditionalProperties };

  /**
   * @schema MacieDescribeBucketsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MacieDescribeBucketsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema MacieDescribeBucketsRequest#sortCriteria
   */
  readonly sortCriteria?: MacieBucketSortCriteria;

}

/**
 * Converts an object of type 'MacieDescribeBucketsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieDescribeBucketsRequest(obj: MacieDescribeBucketsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'criteria': ((obj.criteria) === undefined) ? undefined : (Object.entries(obj.criteria).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_MacieBucketCriteriaAdditionalProperties(i[1]) }), {})),
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
    'sortCriteria': toJson_MacieBucketSortCriteria(obj.sortCriteria),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieDescribeBucketsResponse
 */
export interface MacieDescribeBucketsResponse {
  /**
   * @schema MacieDescribeBucketsResponse#buckets
   */
  readonly buckets?: MacieBucketMetadata[];

  /**
   * @schema MacieDescribeBucketsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'MacieDescribeBucketsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieDescribeBucketsResponse(obj: MacieDescribeBucketsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'buckets': obj.buckets?.map(y => toJson_MacieBucketMetadata(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieDescribeClassificationJobRequest
 */
export interface MacieDescribeClassificationJobRequest {
  /**
   * @schema MacieDescribeClassificationJobRequest#jobId
   */
  readonly jobId: string;

}

/**
 * Converts an object of type 'MacieDescribeClassificationJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieDescribeClassificationJobRequest(obj: MacieDescribeClassificationJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieDescribeClassificationJobResponse
 */
export interface MacieDescribeClassificationJobResponse {
  /**
   * @schema MacieDescribeClassificationJobResponse#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema MacieDescribeClassificationJobResponse#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema MacieDescribeClassificationJobResponse#customDataIdentifierIds
   */
  readonly customDataIdentifierIds?: string[];

  /**
   * @schema MacieDescribeClassificationJobResponse#description
   */
  readonly description?: string;

  /**
   * @schema MacieDescribeClassificationJobResponse#initialRun
   */
  readonly initialRun?: boolean;

  /**
   * @schema MacieDescribeClassificationJobResponse#jobArn
   */
  readonly jobArn?: string;

  /**
   * @schema MacieDescribeClassificationJobResponse#jobId
   */
  readonly jobId?: string;

  /**
   * @schema MacieDescribeClassificationJobResponse#jobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema MacieDescribeClassificationJobResponse#jobType
   */
  readonly jobType?: string;

  /**
   * @schema MacieDescribeClassificationJobResponse#lastRunErrorStatus
   */
  readonly lastRunErrorStatus?: MacieLastRunErrorStatus;

  /**
   * @schema MacieDescribeClassificationJobResponse#lastRunTime
   */
  readonly lastRunTime?: string;

  /**
   * @schema MacieDescribeClassificationJobResponse#name
   */
  readonly name?: string;

  /**
   * @schema MacieDescribeClassificationJobResponse#s3JobDefinition
   */
  readonly s3JobDefinition?: MacieS3JobDefinition;

  /**
   * @schema MacieDescribeClassificationJobResponse#samplingPercentage
   */
  readonly samplingPercentage?: number;

  /**
   * @schema MacieDescribeClassificationJobResponse#scheduleFrequency
   */
  readonly scheduleFrequency?: MacieJobScheduleFrequency;

  /**
   * @schema MacieDescribeClassificationJobResponse#statistics
   */
  readonly statistics?: MacieStatistics;

  /**
   * @schema MacieDescribeClassificationJobResponse#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema MacieDescribeClassificationJobResponse#userPausedDetails
   */
  readonly userPausedDetails?: MacieUserPausedDetails;

}

/**
 * Converts an object of type 'MacieDescribeClassificationJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieDescribeClassificationJobResponse(obj: MacieDescribeClassificationJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientToken': obj.clientToken,
    'createdAt': obj.createdAt,
    'customDataIdentifierIds': obj.customDataIdentifierIds?.map(y => y),
    'description': obj.description,
    'initialRun': obj.initialRun,
    'jobArn': obj.jobArn,
    'jobId': obj.jobId,
    'jobStatus': obj.jobStatus,
    'jobType': obj.jobType,
    'lastRunErrorStatus': toJson_MacieLastRunErrorStatus(obj.lastRunErrorStatus),
    'lastRunTime': obj.lastRunTime,
    'name': obj.name,
    's3JobDefinition': toJson_MacieS3JobDefinition(obj.s3JobDefinition),
    'samplingPercentage': obj.samplingPercentage,
    'scheduleFrequency': toJson_MacieJobScheduleFrequency(obj.scheduleFrequency),
    'statistics': toJson_MacieStatistics(obj.statistics),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'userPausedDetails': toJson_MacieUserPausedDetails(obj.userPausedDetails),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieDescribeOrganizationConfigurationRequest
 */
export interface MacieDescribeOrganizationConfigurationRequest {
}

/**
 * Converts an object of type 'MacieDescribeOrganizationConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieDescribeOrganizationConfigurationRequest(obj: MacieDescribeOrganizationConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieDescribeOrganizationConfigurationResponse
 */
export interface MacieDescribeOrganizationConfigurationResponse {
  /**
   * @schema MacieDescribeOrganizationConfigurationResponse#autoEnable
   */
  readonly autoEnable?: boolean;

  /**
   * @schema MacieDescribeOrganizationConfigurationResponse#maxAccountLimitReached
   */
  readonly maxAccountLimitReached?: boolean;

}

/**
 * Converts an object of type 'MacieDescribeOrganizationConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieDescribeOrganizationConfigurationResponse(obj: MacieDescribeOrganizationConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'autoEnable': obj.autoEnable,
    'maxAccountLimitReached': obj.maxAccountLimitReached,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieDisableMacieRequest
 */
export interface MacieDisableMacieRequest {
}

/**
 * Converts an object of type 'MacieDisableMacieRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieDisableMacieRequest(obj: MacieDisableMacieRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieDisableMacieResponse
 */
export interface MacieDisableMacieResponse {
}

/**
 * Converts an object of type 'MacieDisableMacieResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieDisableMacieResponse(obj: MacieDisableMacieResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieDisableOrganizationAdminAccountRequest
 */
export interface MacieDisableOrganizationAdminAccountRequest {
  /**
   * @schema MacieDisableOrganizationAdminAccountRequest#adminAccountId
   */
  readonly adminAccountId: string;

}

/**
 * Converts an object of type 'MacieDisableOrganizationAdminAccountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieDisableOrganizationAdminAccountRequest(obj: MacieDisableOrganizationAdminAccountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'adminAccountId': obj.adminAccountId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieDisableOrganizationAdminAccountResponse
 */
export interface MacieDisableOrganizationAdminAccountResponse {
}

/**
 * Converts an object of type 'MacieDisableOrganizationAdminAccountResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieDisableOrganizationAdminAccountResponse(obj: MacieDisableOrganizationAdminAccountResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieDisassociateFromAdministratorAccountRequest
 */
export interface MacieDisassociateFromAdministratorAccountRequest {
}

/**
 * Converts an object of type 'MacieDisassociateFromAdministratorAccountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieDisassociateFromAdministratorAccountRequest(obj: MacieDisassociateFromAdministratorAccountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieDisassociateFromAdministratorAccountResponse
 */
export interface MacieDisassociateFromAdministratorAccountResponse {
}

/**
 * Converts an object of type 'MacieDisassociateFromAdministratorAccountResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieDisassociateFromAdministratorAccountResponse(obj: MacieDisassociateFromAdministratorAccountResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieDisassociateFromMasterAccountRequest
 */
export interface MacieDisassociateFromMasterAccountRequest {
}

/**
 * Converts an object of type 'MacieDisassociateFromMasterAccountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieDisassociateFromMasterAccountRequest(obj: MacieDisassociateFromMasterAccountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieDisassociateFromMasterAccountResponse
 */
export interface MacieDisassociateFromMasterAccountResponse {
}

/**
 * Converts an object of type 'MacieDisassociateFromMasterAccountResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieDisassociateFromMasterAccountResponse(obj: MacieDisassociateFromMasterAccountResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieDisassociateMemberRequest
 */
export interface MacieDisassociateMemberRequest {
  /**
   * @schema MacieDisassociateMemberRequest#id
   */
  readonly id: string;

}

/**
 * Converts an object of type 'MacieDisassociateMemberRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieDisassociateMemberRequest(obj: MacieDisassociateMemberRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieDisassociateMemberResponse
 */
export interface MacieDisassociateMemberResponse {
}

/**
 * Converts an object of type 'MacieDisassociateMemberResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieDisassociateMemberResponse(obj: MacieDisassociateMemberResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieEnableMacieRequest
 */
export interface MacieEnableMacieRequest {
  /**
   * @schema MacieEnableMacieRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema MacieEnableMacieRequest#findingPublishingFrequency
   */
  readonly findingPublishingFrequency?: string;

  /**
   * @schema MacieEnableMacieRequest#status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'MacieEnableMacieRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieEnableMacieRequest(obj: MacieEnableMacieRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientToken': obj.clientToken,
    'findingPublishingFrequency': obj.findingPublishingFrequency,
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieEnableMacieResponse
 */
export interface MacieEnableMacieResponse {
}

/**
 * Converts an object of type 'MacieEnableMacieResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieEnableMacieResponse(obj: MacieEnableMacieResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieEnableOrganizationAdminAccountRequest
 */
export interface MacieEnableOrganizationAdminAccountRequest {
  /**
   * @schema MacieEnableOrganizationAdminAccountRequest#adminAccountId
   */
  readonly adminAccountId: string;

  /**
   * @schema MacieEnableOrganizationAdminAccountRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * Converts an object of type 'MacieEnableOrganizationAdminAccountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieEnableOrganizationAdminAccountRequest(obj: MacieEnableOrganizationAdminAccountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'adminAccountId': obj.adminAccountId,
    'clientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieEnableOrganizationAdminAccountResponse
 */
export interface MacieEnableOrganizationAdminAccountResponse {
}

/**
 * Converts an object of type 'MacieEnableOrganizationAdminAccountResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieEnableOrganizationAdminAccountResponse(obj: MacieEnableOrganizationAdminAccountResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieGetAdministratorAccountRequest
 */
export interface MacieGetAdministratorAccountRequest {
}

/**
 * Converts an object of type 'MacieGetAdministratorAccountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieGetAdministratorAccountRequest(obj: MacieGetAdministratorAccountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieGetAdministratorAccountResponse
 */
export interface MacieGetAdministratorAccountResponse {
  /**
   * @schema MacieGetAdministratorAccountResponse#administrator
   */
  readonly administrator?: MacieInvitation;

}

/**
 * Converts an object of type 'MacieGetAdministratorAccountResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieGetAdministratorAccountResponse(obj: MacieGetAdministratorAccountResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'administrator': toJson_MacieInvitation(obj.administrator),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieGetBucketStatisticsRequest
 */
export interface MacieGetBucketStatisticsRequest {
  /**
   * @schema MacieGetBucketStatisticsRequest#accountId
   */
  readonly accountId?: string;

}

/**
 * Converts an object of type 'MacieGetBucketStatisticsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieGetBucketStatisticsRequest(obj: MacieGetBucketStatisticsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountId': obj.accountId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieGetBucketStatisticsResponse
 */
export interface MacieGetBucketStatisticsResponse {
  /**
   * @schema MacieGetBucketStatisticsResponse#bucketCount
   */
  readonly bucketCount?: number;

  /**
   * @schema MacieGetBucketStatisticsResponse#bucketCountByEffectivePermission
   */
  readonly bucketCountByEffectivePermission?: MacieBucketCountByEffectivePermission;

  /**
   * @schema MacieGetBucketStatisticsResponse#bucketCountByEncryptionType
   */
  readonly bucketCountByEncryptionType?: MacieBucketCountByEncryptionType;

  /**
   * @schema MacieGetBucketStatisticsResponse#bucketCountByObjectEncryptionRequirement
   */
  readonly bucketCountByObjectEncryptionRequirement?: MacieBucketCountPolicyAllowsUnencryptedObjectUploads;

  /**
   * @schema MacieGetBucketStatisticsResponse#bucketCountBySharedAccessType
   */
  readonly bucketCountBySharedAccessType?: MacieBucketCountBySharedAccessType;

  /**
   * @schema MacieGetBucketStatisticsResponse#classifiableObjectCount
   */
  readonly classifiableObjectCount?: number;

  /**
   * @schema MacieGetBucketStatisticsResponse#classifiableSizeInBytes
   */
  readonly classifiableSizeInBytes?: number;

  /**
   * @schema MacieGetBucketStatisticsResponse#lastUpdated
   */
  readonly lastUpdated?: string;

  /**
   * @schema MacieGetBucketStatisticsResponse#objectCount
   */
  readonly objectCount?: number;

  /**
   * @schema MacieGetBucketStatisticsResponse#sizeInBytes
   */
  readonly sizeInBytes?: number;

  /**
   * @schema MacieGetBucketStatisticsResponse#sizeInBytesCompressed
   */
  readonly sizeInBytesCompressed?: number;

  /**
   * @schema MacieGetBucketStatisticsResponse#unclassifiableObjectCount
   */
  readonly unclassifiableObjectCount?: MacieObjectLevelStatistics;

  /**
   * @schema MacieGetBucketStatisticsResponse#unclassifiableObjectSizeInBytes
   */
  readonly unclassifiableObjectSizeInBytes?: MacieObjectLevelStatistics;

}

/**
 * Converts an object of type 'MacieGetBucketStatisticsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieGetBucketStatisticsResponse(obj: MacieGetBucketStatisticsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bucketCount': obj.bucketCount,
    'bucketCountByEffectivePermission': toJson_MacieBucketCountByEffectivePermission(obj.bucketCountByEffectivePermission),
    'bucketCountByEncryptionType': toJson_MacieBucketCountByEncryptionType(obj.bucketCountByEncryptionType),
    'bucketCountByObjectEncryptionRequirement': toJson_MacieBucketCountPolicyAllowsUnencryptedObjectUploads(obj.bucketCountByObjectEncryptionRequirement),
    'bucketCountBySharedAccessType': toJson_MacieBucketCountBySharedAccessType(obj.bucketCountBySharedAccessType),
    'classifiableObjectCount': obj.classifiableObjectCount,
    'classifiableSizeInBytes': obj.classifiableSizeInBytes,
    'lastUpdated': obj.lastUpdated,
    'objectCount': obj.objectCount,
    'sizeInBytes': obj.sizeInBytes,
    'sizeInBytesCompressed': obj.sizeInBytesCompressed,
    'unclassifiableObjectCount': toJson_MacieObjectLevelStatistics(obj.unclassifiableObjectCount),
    'unclassifiableObjectSizeInBytes': toJson_MacieObjectLevelStatistics(obj.unclassifiableObjectSizeInBytes),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieGetClassificationExportConfigurationRequest
 */
export interface MacieGetClassificationExportConfigurationRequest {
}

/**
 * Converts an object of type 'MacieGetClassificationExportConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieGetClassificationExportConfigurationRequest(obj: MacieGetClassificationExportConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieGetClassificationExportConfigurationResponse
 */
export interface MacieGetClassificationExportConfigurationResponse {
  /**
   * @schema MacieGetClassificationExportConfigurationResponse#configuration
   */
  readonly configuration?: MacieClassificationExportConfiguration;

}

/**
 * Converts an object of type 'MacieGetClassificationExportConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieGetClassificationExportConfigurationResponse(obj: MacieGetClassificationExportConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'configuration': toJson_MacieClassificationExportConfiguration(obj.configuration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieGetCustomDataIdentifierRequest
 */
export interface MacieGetCustomDataIdentifierRequest {
  /**
   * @schema MacieGetCustomDataIdentifierRequest#id
   */
  readonly id: string;

}

/**
 * Converts an object of type 'MacieGetCustomDataIdentifierRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieGetCustomDataIdentifierRequest(obj: MacieGetCustomDataIdentifierRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieGetCustomDataIdentifierResponse
 */
export interface MacieGetCustomDataIdentifierResponse {
  /**
   * @schema MacieGetCustomDataIdentifierResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema MacieGetCustomDataIdentifierResponse#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema MacieGetCustomDataIdentifierResponse#deleted
   */
  readonly deleted?: boolean;

  /**
   * @schema MacieGetCustomDataIdentifierResponse#description
   */
  readonly description?: string;

  /**
   * @schema MacieGetCustomDataIdentifierResponse#id
   */
  readonly id?: string;

  /**
   * @schema MacieGetCustomDataIdentifierResponse#ignoreWords
   */
  readonly ignoreWords?: string[];

  /**
   * @schema MacieGetCustomDataIdentifierResponse#keywords
   */
  readonly keywords?: string[];

  /**
   * @schema MacieGetCustomDataIdentifierResponse#maximumMatchDistance
   */
  readonly maximumMatchDistance?: number;

  /**
   * @schema MacieGetCustomDataIdentifierResponse#name
   */
  readonly name?: string;

  /**
   * @schema MacieGetCustomDataIdentifierResponse#regex
   */
  readonly regex?: string;

  /**
   * @schema MacieGetCustomDataIdentifierResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'MacieGetCustomDataIdentifierResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieGetCustomDataIdentifierResponse(obj: MacieGetCustomDataIdentifierResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'createdAt': obj.createdAt,
    'deleted': obj.deleted,
    'description': obj.description,
    'id': obj.id,
    'ignoreWords': obj.ignoreWords?.map(y => y),
    'keywords': obj.keywords?.map(y => y),
    'maximumMatchDistance': obj.maximumMatchDistance,
    'name': obj.name,
    'regex': obj.regex,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieGetFindingStatisticsRequest
 */
export interface MacieGetFindingStatisticsRequest {
  /**
   * @schema MacieGetFindingStatisticsRequest#findingCriteria
   */
  readonly findingCriteria?: MacieFindingCriteria;

  /**
   * @schema MacieGetFindingStatisticsRequest#groupBy
   */
  readonly groupBy: string;

  /**
   * @schema MacieGetFindingStatisticsRequest#size
   */
  readonly size?: number;

  /**
   * @schema MacieGetFindingStatisticsRequest#sortCriteria
   */
  readonly sortCriteria?: MacieFindingStatisticsSortCriteria;

}

/**
 * Converts an object of type 'MacieGetFindingStatisticsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieGetFindingStatisticsRequest(obj: MacieGetFindingStatisticsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'findingCriteria': toJson_MacieFindingCriteria(obj.findingCriteria),
    'groupBy': obj.groupBy,
    'size': obj.size,
    'sortCriteria': toJson_MacieFindingStatisticsSortCriteria(obj.sortCriteria),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieGetFindingStatisticsResponse
 */
export interface MacieGetFindingStatisticsResponse {
  /**
   * @schema MacieGetFindingStatisticsResponse#countsByGroup
   */
  readonly countsByGroup?: MacieGroupCount[];

}

/**
 * Converts an object of type 'MacieGetFindingStatisticsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieGetFindingStatisticsResponse(obj: MacieGetFindingStatisticsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'countsByGroup': obj.countsByGroup?.map(y => toJson_MacieGroupCount(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieGetFindingsRequest
 */
export interface MacieGetFindingsRequest {
  /**
   * @schema MacieGetFindingsRequest#findingIds
   */
  readonly findingIds: string[];

  /**
   * @schema MacieGetFindingsRequest#sortCriteria
   */
  readonly sortCriteria?: MacieSortCriteria;

}

/**
 * Converts an object of type 'MacieGetFindingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieGetFindingsRequest(obj: MacieGetFindingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'findingIds': obj.findingIds?.map(y => y),
    'sortCriteria': toJson_MacieSortCriteria(obj.sortCriteria),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieGetFindingsResponse
 */
export interface MacieGetFindingsResponse {
  /**
   * @schema MacieGetFindingsResponse#findings
   */
  readonly findings?: MacieFinding[];

}

/**
 * Converts an object of type 'MacieGetFindingsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieGetFindingsResponse(obj: MacieGetFindingsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'findings': obj.findings?.map(y => toJson_MacieFinding(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieGetFindingsFilterRequest
 */
export interface MacieGetFindingsFilterRequest {
  /**
   * @schema MacieGetFindingsFilterRequest#id
   */
  readonly id: string;

}

/**
 * Converts an object of type 'MacieGetFindingsFilterRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieGetFindingsFilterRequest(obj: MacieGetFindingsFilterRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieGetFindingsFilterResponse
 */
export interface MacieGetFindingsFilterResponse {
  /**
   * @schema MacieGetFindingsFilterResponse#action
   */
  readonly action?: string;

  /**
   * @schema MacieGetFindingsFilterResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema MacieGetFindingsFilterResponse#description
   */
  readonly description?: string;

  /**
   * @schema MacieGetFindingsFilterResponse#findingCriteria
   */
  readonly findingCriteria?: MacieFindingCriteria;

  /**
   * @schema MacieGetFindingsFilterResponse#id
   */
  readonly id?: string;

  /**
   * @schema MacieGetFindingsFilterResponse#name
   */
  readonly name?: string;

  /**
   * @schema MacieGetFindingsFilterResponse#position
   */
  readonly position?: number;

  /**
   * @schema MacieGetFindingsFilterResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'MacieGetFindingsFilterResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieGetFindingsFilterResponse(obj: MacieGetFindingsFilterResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'action': obj.action,
    'arn': obj.arn,
    'description': obj.description,
    'findingCriteria': toJson_MacieFindingCriteria(obj.findingCriteria),
    'id': obj.id,
    'name': obj.name,
    'position': obj.position,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieGetFindingsPublicationConfigurationRequest
 */
export interface MacieGetFindingsPublicationConfigurationRequest {
}

/**
 * Converts an object of type 'MacieGetFindingsPublicationConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieGetFindingsPublicationConfigurationRequest(obj: MacieGetFindingsPublicationConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieGetFindingsPublicationConfigurationResponse
 */
export interface MacieGetFindingsPublicationConfigurationResponse {
  /**
   * @schema MacieGetFindingsPublicationConfigurationResponse#securityHubConfiguration
   */
  readonly securityHubConfiguration?: MacieSecurityHubConfiguration;

}

/**
 * Converts an object of type 'MacieGetFindingsPublicationConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieGetFindingsPublicationConfigurationResponse(obj: MacieGetFindingsPublicationConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'securityHubConfiguration': toJson_MacieSecurityHubConfiguration(obj.securityHubConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieGetInvitationsCountRequest
 */
export interface MacieGetInvitationsCountRequest {
}

/**
 * Converts an object of type 'MacieGetInvitationsCountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieGetInvitationsCountRequest(obj: MacieGetInvitationsCountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieGetInvitationsCountResponse
 */
export interface MacieGetInvitationsCountResponse {
  /**
   * @schema MacieGetInvitationsCountResponse#invitationsCount
   */
  readonly invitationsCount?: number;

}

/**
 * Converts an object of type 'MacieGetInvitationsCountResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieGetInvitationsCountResponse(obj: MacieGetInvitationsCountResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'invitationsCount': obj.invitationsCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieGetMacieSessionRequest
 */
export interface MacieGetMacieSessionRequest {
}

/**
 * Converts an object of type 'MacieGetMacieSessionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieGetMacieSessionRequest(obj: MacieGetMacieSessionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieGetMacieSessionResponse
 */
export interface MacieGetMacieSessionResponse {
  /**
   * @schema MacieGetMacieSessionResponse#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema MacieGetMacieSessionResponse#findingPublishingFrequency
   */
  readonly findingPublishingFrequency?: string;

  /**
   * @schema MacieGetMacieSessionResponse#serviceRole
   */
  readonly serviceRole?: string;

  /**
   * @schema MacieGetMacieSessionResponse#status
   */
  readonly status?: string;

  /**
   * @schema MacieGetMacieSessionResponse#updatedAt
   */
  readonly updatedAt?: string;

}

/**
 * Converts an object of type 'MacieGetMacieSessionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieGetMacieSessionResponse(obj: MacieGetMacieSessionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'createdAt': obj.createdAt,
    'findingPublishingFrequency': obj.findingPublishingFrequency,
    'serviceRole': obj.serviceRole,
    'status': obj.status,
    'updatedAt': obj.updatedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieGetMasterAccountRequest
 */
export interface MacieGetMasterAccountRequest {
}

/**
 * Converts an object of type 'MacieGetMasterAccountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieGetMasterAccountRequest(obj: MacieGetMasterAccountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieGetMasterAccountResponse
 */
export interface MacieGetMasterAccountResponse {
  /**
   * @schema MacieGetMasterAccountResponse#master
   */
  readonly master?: MacieInvitation;

}

/**
 * Converts an object of type 'MacieGetMasterAccountResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieGetMasterAccountResponse(obj: MacieGetMasterAccountResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'master': toJson_MacieInvitation(obj.master),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieGetMemberRequest
 */
export interface MacieGetMemberRequest {
  /**
   * @schema MacieGetMemberRequest#id
   */
  readonly id: string;

}

/**
 * Converts an object of type 'MacieGetMemberRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieGetMemberRequest(obj: MacieGetMemberRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieGetMemberResponse
 */
export interface MacieGetMemberResponse {
  /**
   * @schema MacieGetMemberResponse#accountId
   */
  readonly accountId?: string;

  /**
   * @schema MacieGetMemberResponse#administratorAccountId
   */
  readonly administratorAccountId?: string;

  /**
   * @schema MacieGetMemberResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema MacieGetMemberResponse#email
   */
  readonly email?: string;

  /**
   * @schema MacieGetMemberResponse#invitedAt
   */
  readonly invitedAt?: string;

  /**
   * @schema MacieGetMemberResponse#masterAccountId
   */
  readonly masterAccountId?: string;

  /**
   * @schema MacieGetMemberResponse#relationshipStatus
   */
  readonly relationshipStatus?: string;

  /**
   * @schema MacieGetMemberResponse#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema MacieGetMemberResponse#updatedAt
   */
  readonly updatedAt?: string;

}

/**
 * Converts an object of type 'MacieGetMemberResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieGetMemberResponse(obj: MacieGetMemberResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountId': obj.accountId,
    'administratorAccountId': obj.administratorAccountId,
    'arn': obj.arn,
    'email': obj.email,
    'invitedAt': obj.invitedAt,
    'masterAccountId': obj.masterAccountId,
    'relationshipStatus': obj.relationshipStatus,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'updatedAt': obj.updatedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieGetUsageStatisticsRequest
 */
export interface MacieGetUsageStatisticsRequest {
  /**
   * @schema MacieGetUsageStatisticsRequest#filterBy
   */
  readonly filterBy?: MacieUsageStatisticsFilter[];

  /**
   * @schema MacieGetUsageStatisticsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MacieGetUsageStatisticsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema MacieGetUsageStatisticsRequest#sortBy
   */
  readonly sortBy?: MacieUsageStatisticsSortBy;

  /**
   * @schema MacieGetUsageStatisticsRequest#timeRange
   */
  readonly timeRange?: string;

}

/**
 * Converts an object of type 'MacieGetUsageStatisticsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieGetUsageStatisticsRequest(obj: MacieGetUsageStatisticsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'filterBy': obj.filterBy?.map(y => toJson_MacieUsageStatisticsFilter(y)),
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
    'sortBy': toJson_MacieUsageStatisticsSortBy(obj.sortBy),
    'timeRange': obj.timeRange,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieGetUsageStatisticsResponse
 */
export interface MacieGetUsageStatisticsResponse {
  /**
   * @schema MacieGetUsageStatisticsResponse#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema MacieGetUsageStatisticsResponse#records
   */
  readonly records?: MacieUsageRecord[];

  /**
   * @schema MacieGetUsageStatisticsResponse#timeRange
   */
  readonly timeRange?: string;

}

/**
 * Converts an object of type 'MacieGetUsageStatisticsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieGetUsageStatisticsResponse(obj: MacieGetUsageStatisticsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'records': obj.records?.map(y => toJson_MacieUsageRecord(y)),
    'timeRange': obj.timeRange,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieGetUsageTotalsRequest
 */
export interface MacieGetUsageTotalsRequest {
  /**
   * @schema MacieGetUsageTotalsRequest#timeRange
   */
  readonly timeRange?: string;

}

/**
 * Converts an object of type 'MacieGetUsageTotalsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieGetUsageTotalsRequest(obj: MacieGetUsageTotalsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'timeRange': obj.timeRange,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieGetUsageTotalsResponse
 */
export interface MacieGetUsageTotalsResponse {
  /**
   * @schema MacieGetUsageTotalsResponse#timeRange
   */
  readonly timeRange?: string;

  /**
   * @schema MacieGetUsageTotalsResponse#usageTotals
   */
  readonly usageTotals?: MacieUsageTotal[];

}

/**
 * Converts an object of type 'MacieGetUsageTotalsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieGetUsageTotalsResponse(obj: MacieGetUsageTotalsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'timeRange': obj.timeRange,
    'usageTotals': obj.usageTotals?.map(y => toJson_MacieUsageTotal(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieListClassificationJobsRequest
 */
export interface MacieListClassificationJobsRequest {
  /**
   * @schema MacieListClassificationJobsRequest#filterCriteria
   */
  readonly filterCriteria?: MacieListJobsFilterCriteria;

  /**
   * @schema MacieListClassificationJobsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MacieListClassificationJobsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema MacieListClassificationJobsRequest#sortCriteria
   */
  readonly sortCriteria?: MacieListJobsSortCriteria;

}

/**
 * Converts an object of type 'MacieListClassificationJobsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieListClassificationJobsRequest(obj: MacieListClassificationJobsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'filterCriteria': toJson_MacieListJobsFilterCriteria(obj.filterCriteria),
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
    'sortCriteria': toJson_MacieListJobsSortCriteria(obj.sortCriteria),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieListClassificationJobsResponse
 */
export interface MacieListClassificationJobsResponse {
  /**
   * @schema MacieListClassificationJobsResponse#items
   */
  readonly items?: MacieJobSummary[];

  /**
   * @schema MacieListClassificationJobsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'MacieListClassificationJobsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieListClassificationJobsResponse(obj: MacieListClassificationJobsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'items': obj.items?.map(y => toJson_MacieJobSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieListCustomDataIdentifiersRequest
 */
export interface MacieListCustomDataIdentifiersRequest {
  /**
   * @schema MacieListCustomDataIdentifiersRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MacieListCustomDataIdentifiersRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'MacieListCustomDataIdentifiersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieListCustomDataIdentifiersRequest(obj: MacieListCustomDataIdentifiersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieListCustomDataIdentifiersResponse
 */
export interface MacieListCustomDataIdentifiersResponse {
  /**
   * @schema MacieListCustomDataIdentifiersResponse#items
   */
  readonly items?: MacieCustomDataIdentifierSummary[];

  /**
   * @schema MacieListCustomDataIdentifiersResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'MacieListCustomDataIdentifiersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieListCustomDataIdentifiersResponse(obj: MacieListCustomDataIdentifiersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'items': obj.items?.map(y => toJson_MacieCustomDataIdentifierSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieListFindingsRequest
 */
export interface MacieListFindingsRequest {
  /**
   * @schema MacieListFindingsRequest#findingCriteria
   */
  readonly findingCriteria?: MacieFindingCriteria;

  /**
   * @schema MacieListFindingsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MacieListFindingsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema MacieListFindingsRequest#sortCriteria
   */
  readonly sortCriteria?: MacieSortCriteria;

}

/**
 * Converts an object of type 'MacieListFindingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieListFindingsRequest(obj: MacieListFindingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'findingCriteria': toJson_MacieFindingCriteria(obj.findingCriteria),
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
    'sortCriteria': toJson_MacieSortCriteria(obj.sortCriteria),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieListFindingsResponse
 */
export interface MacieListFindingsResponse {
  /**
   * @schema MacieListFindingsResponse#findingIds
   */
  readonly findingIds?: string[];

  /**
   * @schema MacieListFindingsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'MacieListFindingsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieListFindingsResponse(obj: MacieListFindingsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'findingIds': obj.findingIds?.map(y => y),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieListFindingsFiltersRequest
 */
export interface MacieListFindingsFiltersRequest {
  /**
   * @schema MacieListFindingsFiltersRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MacieListFindingsFiltersRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'MacieListFindingsFiltersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieListFindingsFiltersRequest(obj: MacieListFindingsFiltersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieListFindingsFiltersResponse
 */
export interface MacieListFindingsFiltersResponse {
  /**
   * @schema MacieListFindingsFiltersResponse#findingsFilterListItems
   */
  readonly findingsFilterListItems?: MacieFindingsFilterListItem[];

  /**
   * @schema MacieListFindingsFiltersResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'MacieListFindingsFiltersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieListFindingsFiltersResponse(obj: MacieListFindingsFiltersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'findingsFilterListItems': obj.findingsFilterListItems?.map(y => toJson_MacieFindingsFilterListItem(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieListInvitationsRequest
 */
export interface MacieListInvitationsRequest {
  /**
   * @schema MacieListInvitationsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MacieListInvitationsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'MacieListInvitationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieListInvitationsRequest(obj: MacieListInvitationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieListInvitationsResponse
 */
export interface MacieListInvitationsResponse {
  /**
   * @schema MacieListInvitationsResponse#invitations
   */
  readonly invitations?: MacieInvitation[];

  /**
   * @schema MacieListInvitationsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'MacieListInvitationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieListInvitationsResponse(obj: MacieListInvitationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'invitations': obj.invitations?.map(y => toJson_MacieInvitation(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieListMembersRequest
 */
export interface MacieListMembersRequest {
  /**
   * @schema MacieListMembersRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MacieListMembersRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema MacieListMembersRequest#onlyAssociated
   */
  readonly onlyAssociated?: string;

}

/**
 * Converts an object of type 'MacieListMembersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieListMembersRequest(obj: MacieListMembersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
    'onlyAssociated': obj.onlyAssociated,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieListMembersResponse
 */
export interface MacieListMembersResponse {
  /**
   * @schema MacieListMembersResponse#members
   */
  readonly members?: MacieMember[];

  /**
   * @schema MacieListMembersResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'MacieListMembersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieListMembersResponse(obj: MacieListMembersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'members': obj.members?.map(y => toJson_MacieMember(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieListOrganizationAdminAccountsRequest
 */
export interface MacieListOrganizationAdminAccountsRequest {
  /**
   * @schema MacieListOrganizationAdminAccountsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MacieListOrganizationAdminAccountsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'MacieListOrganizationAdminAccountsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieListOrganizationAdminAccountsRequest(obj: MacieListOrganizationAdminAccountsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieListOrganizationAdminAccountsResponse
 */
export interface MacieListOrganizationAdminAccountsResponse {
  /**
   * @schema MacieListOrganizationAdminAccountsResponse#adminAccounts
   */
  readonly adminAccounts?: MacieAdminAccount[];

  /**
   * @schema MacieListOrganizationAdminAccountsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'MacieListOrganizationAdminAccountsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieListOrganizationAdminAccountsResponse(obj: MacieListOrganizationAdminAccountsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'adminAccounts': obj.adminAccounts?.map(y => toJson_MacieAdminAccount(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieListTagsForResourceRequest
 */
export interface MacieListTagsForResourceRequest {
  /**
   * @schema MacieListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * Converts an object of type 'MacieListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieListTagsForResourceRequest(obj: MacieListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieListTagsForResourceResponse
 */
export interface MacieListTagsForResourceResponse {
  /**
   * @schema MacieListTagsForResourceResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'MacieListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieListTagsForResourceResponse(obj: MacieListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MaciePutClassificationExportConfigurationRequest
 */
export interface MaciePutClassificationExportConfigurationRequest {
  /**
   * @schema MaciePutClassificationExportConfigurationRequest#configuration
   */
  readonly configuration: MacieClassificationExportConfiguration;

}

/**
 * Converts an object of type 'MaciePutClassificationExportConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MaciePutClassificationExportConfigurationRequest(obj: MaciePutClassificationExportConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'configuration': toJson_MacieClassificationExportConfiguration(obj.configuration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MaciePutClassificationExportConfigurationResponse
 */
export interface MaciePutClassificationExportConfigurationResponse {
  /**
   * @schema MaciePutClassificationExportConfigurationResponse#configuration
   */
  readonly configuration?: MacieClassificationExportConfiguration;

}

/**
 * Converts an object of type 'MaciePutClassificationExportConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MaciePutClassificationExportConfigurationResponse(obj: MaciePutClassificationExportConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'configuration': toJson_MacieClassificationExportConfiguration(obj.configuration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MaciePutFindingsPublicationConfigurationRequest
 */
export interface MaciePutFindingsPublicationConfigurationRequest {
  /**
   * @schema MaciePutFindingsPublicationConfigurationRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema MaciePutFindingsPublicationConfigurationRequest#securityHubConfiguration
   */
  readonly securityHubConfiguration?: MacieSecurityHubConfiguration;

}

/**
 * Converts an object of type 'MaciePutFindingsPublicationConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MaciePutFindingsPublicationConfigurationRequest(obj: MaciePutFindingsPublicationConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientToken': obj.clientToken,
    'securityHubConfiguration': toJson_MacieSecurityHubConfiguration(obj.securityHubConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MaciePutFindingsPublicationConfigurationResponse
 */
export interface MaciePutFindingsPublicationConfigurationResponse {
}

/**
 * Converts an object of type 'MaciePutFindingsPublicationConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MaciePutFindingsPublicationConfigurationResponse(obj: MaciePutFindingsPublicationConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieSearchResourcesRequest
 */
export interface MacieSearchResourcesRequest {
  /**
   * @schema MacieSearchResourcesRequest#bucketCriteria
   */
  readonly bucketCriteria?: MacieSearchResourcesBucketCriteria;

  /**
   * @schema MacieSearchResourcesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MacieSearchResourcesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema MacieSearchResourcesRequest#sortCriteria
   */
  readonly sortCriteria?: MacieSearchResourcesSortCriteria;

}

/**
 * Converts an object of type 'MacieSearchResourcesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieSearchResourcesRequest(obj: MacieSearchResourcesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bucketCriteria': toJson_MacieSearchResourcesBucketCriteria(obj.bucketCriteria),
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
    'sortCriteria': toJson_MacieSearchResourcesSortCriteria(obj.sortCriteria),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieSearchResourcesResponse
 */
export interface MacieSearchResourcesResponse {
  /**
   * @schema MacieSearchResourcesResponse#matchingResources
   */
  readonly matchingResources?: MacieMatchingResource[];

  /**
   * @schema MacieSearchResourcesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'MacieSearchResourcesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieSearchResourcesResponse(obj: MacieSearchResourcesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'matchingResources': obj.matchingResources?.map(y => toJson_MacieMatchingResource(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieTagResourceRequest
 */
export interface MacieTagResourceRequest {
  /**
   * @schema MacieTagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema MacieTagResourceRequest#tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * Converts an object of type 'MacieTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieTagResourceRequest(obj: MacieTagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema MacieTagResourceResponse
 */
export interface MacieTagResourceResponse {
}

/**
 * Converts an object of type 'MacieTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieTagResourceResponse(obj: MacieTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieTestCustomDataIdentifierRequest
 */
export interface MacieTestCustomDataIdentifierRequest {
  /**
   * @schema MacieTestCustomDataIdentifierRequest#ignoreWords
   */
  readonly ignoreWords?: string[];

  /**
   * @schema MacieTestCustomDataIdentifierRequest#keywords
   */
  readonly keywords?: string[];

  /**
   * @schema MacieTestCustomDataIdentifierRequest#maximumMatchDistance
   */
  readonly maximumMatchDistance?: number;

  /**
   * @schema MacieTestCustomDataIdentifierRequest#regex
   */
  readonly regex: string;

  /**
   * @schema MacieTestCustomDataIdentifierRequest#sampleText
   */
  readonly sampleText: string;

}

/**
 * Converts an object of type 'MacieTestCustomDataIdentifierRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieTestCustomDataIdentifierRequest(obj: MacieTestCustomDataIdentifierRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ignoreWords': obj.ignoreWords?.map(y => y),
    'keywords': obj.keywords?.map(y => y),
    'maximumMatchDistance': obj.maximumMatchDistance,
    'regex': obj.regex,
    'sampleText': obj.sampleText,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieTestCustomDataIdentifierResponse
 */
export interface MacieTestCustomDataIdentifierResponse {
  /**
   * @schema MacieTestCustomDataIdentifierResponse#matchCount
   */
  readonly matchCount?: number;

}

/**
 * Converts an object of type 'MacieTestCustomDataIdentifierResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieTestCustomDataIdentifierResponse(obj: MacieTestCustomDataIdentifierResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'matchCount': obj.matchCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieUntagResourceRequest
 */
export interface MacieUntagResourceRequest {
  /**
   * @schema MacieUntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema MacieUntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * Converts an object of type 'MacieUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieUntagResourceRequest(obj: MacieUntagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema MacieUntagResourceResponse
 */
export interface MacieUntagResourceResponse {
}

/**
 * Converts an object of type 'MacieUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieUntagResourceResponse(obj: MacieUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieUpdateClassificationJobRequest
 */
export interface MacieUpdateClassificationJobRequest {
  /**
   * @schema MacieUpdateClassificationJobRequest#jobId
   */
  readonly jobId: string;

  /**
   * @schema MacieUpdateClassificationJobRequest#jobStatus
   */
  readonly jobStatus: string;

}

/**
 * Converts an object of type 'MacieUpdateClassificationJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieUpdateClassificationJobRequest(obj: MacieUpdateClassificationJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobId': obj.jobId,
    'jobStatus': obj.jobStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieUpdateClassificationJobResponse
 */
export interface MacieUpdateClassificationJobResponse {
}

/**
 * Converts an object of type 'MacieUpdateClassificationJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieUpdateClassificationJobResponse(obj: MacieUpdateClassificationJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieUpdateFindingsFilterRequest
 */
export interface MacieUpdateFindingsFilterRequest {
  /**
   * @schema MacieUpdateFindingsFilterRequest#action
   */
  readonly action?: string;

  /**
   * @schema MacieUpdateFindingsFilterRequest#description
   */
  readonly description?: string;

  /**
   * @schema MacieUpdateFindingsFilterRequest#findingCriteria
   */
  readonly findingCriteria?: MacieFindingCriteria;

  /**
   * @schema MacieUpdateFindingsFilterRequest#id
   */
  readonly id: string;

  /**
   * @schema MacieUpdateFindingsFilterRequest#name
   */
  readonly name?: string;

  /**
   * @schema MacieUpdateFindingsFilterRequest#position
   */
  readonly position?: number;

  /**
   * @schema MacieUpdateFindingsFilterRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * Converts an object of type 'MacieUpdateFindingsFilterRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieUpdateFindingsFilterRequest(obj: MacieUpdateFindingsFilterRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'action': obj.action,
    'description': obj.description,
    'findingCriteria': toJson_MacieFindingCriteria(obj.findingCriteria),
    'id': obj.id,
    'name': obj.name,
    'position': obj.position,
    'clientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieUpdateFindingsFilterResponse
 */
export interface MacieUpdateFindingsFilterResponse {
  /**
   * @schema MacieUpdateFindingsFilterResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema MacieUpdateFindingsFilterResponse#id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'MacieUpdateFindingsFilterResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieUpdateFindingsFilterResponse(obj: MacieUpdateFindingsFilterResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieUpdateMacieSessionRequest
 */
export interface MacieUpdateMacieSessionRequest {
  /**
   * @schema MacieUpdateMacieSessionRequest#findingPublishingFrequency
   */
  readonly findingPublishingFrequency?: string;

  /**
   * @schema MacieUpdateMacieSessionRequest#status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'MacieUpdateMacieSessionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieUpdateMacieSessionRequest(obj: MacieUpdateMacieSessionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'findingPublishingFrequency': obj.findingPublishingFrequency,
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieUpdateMacieSessionResponse
 */
export interface MacieUpdateMacieSessionResponse {
}

/**
 * Converts an object of type 'MacieUpdateMacieSessionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieUpdateMacieSessionResponse(obj: MacieUpdateMacieSessionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieUpdateMemberSessionRequest
 */
export interface MacieUpdateMemberSessionRequest {
  /**
   * @schema MacieUpdateMemberSessionRequest#id
   */
  readonly id: string;

  /**
   * @schema MacieUpdateMemberSessionRequest#status
   */
  readonly status: string;

}

/**
 * Converts an object of type 'MacieUpdateMemberSessionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieUpdateMemberSessionRequest(obj: MacieUpdateMemberSessionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieUpdateMemberSessionResponse
 */
export interface MacieUpdateMemberSessionResponse {
}

/**
 * Converts an object of type 'MacieUpdateMemberSessionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieUpdateMemberSessionResponse(obj: MacieUpdateMemberSessionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieUpdateOrganizationConfigurationRequest
 */
export interface MacieUpdateOrganizationConfigurationRequest {
  /**
   * @schema MacieUpdateOrganizationConfigurationRequest#autoEnable
   */
  readonly autoEnable: boolean;

}

/**
 * Converts an object of type 'MacieUpdateOrganizationConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieUpdateOrganizationConfigurationRequest(obj: MacieUpdateOrganizationConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'autoEnable': obj.autoEnable,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieUpdateOrganizationConfigurationResponse
 */
export interface MacieUpdateOrganizationConfigurationResponse {
}

/**
 * Converts an object of type 'MacieUpdateOrganizationConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieUpdateOrganizationConfigurationResponse(obj: MacieUpdateOrganizationConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieBatchGetCustomDataIdentifierSummary
 */
export interface MacieBatchGetCustomDataIdentifierSummary {
  /**
   * @schema MacieBatchGetCustomDataIdentifierSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema MacieBatchGetCustomDataIdentifierSummary#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema MacieBatchGetCustomDataIdentifierSummary#deleted
   */
  readonly deleted?: boolean;

  /**
   * @schema MacieBatchGetCustomDataIdentifierSummary#description
   */
  readonly description?: string;

  /**
   * @schema MacieBatchGetCustomDataIdentifierSummary#id
   */
  readonly id?: string;

  /**
   * @schema MacieBatchGetCustomDataIdentifierSummary#name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'MacieBatchGetCustomDataIdentifierSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieBatchGetCustomDataIdentifierSummary(obj: MacieBatchGetCustomDataIdentifierSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'createdAt': obj.createdAt,
    'deleted': obj.deleted,
    'description': obj.description,
    'id': obj.id,
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieS3JobDefinition
 */
export interface MacieS3JobDefinition {
  /**
   * @schema MacieS3JobDefinition#bucketDefinitions
   */
  readonly bucketDefinitions?: MacieS3BucketDefinitionForJob[];

  /**
   * @schema MacieS3JobDefinition#scoping
   */
  readonly scoping?: MacieScoping;

  /**
   * @schema MacieS3JobDefinition#bucketCriteria
   */
  readonly bucketCriteria?: MacieS3BucketCriteriaForJob;

}

/**
 * Converts an object of type 'MacieS3JobDefinition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieS3JobDefinition(obj: MacieS3JobDefinition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bucketDefinitions': obj.bucketDefinitions?.map(y => toJson_MacieS3BucketDefinitionForJob(y)),
    'scoping': toJson_MacieScoping(obj.scoping),
    'bucketCriteria': toJson_MacieS3BucketCriteriaForJob(obj.bucketCriteria),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieJobScheduleFrequency
 */
export interface MacieJobScheduleFrequency {
  /**
   * @schema MacieJobScheduleFrequency#dailySchedule
   */
  readonly dailySchedule?: MacieDailySchedule;

  /**
   * @schema MacieJobScheduleFrequency#monthlySchedule
   */
  readonly monthlySchedule?: MacieMonthlySchedule;

  /**
   * @schema MacieJobScheduleFrequency#weeklySchedule
   */
  readonly weeklySchedule?: MacieWeeklySchedule;

}

/**
 * Converts an object of type 'MacieJobScheduleFrequency' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieJobScheduleFrequency(obj: MacieJobScheduleFrequency | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'dailySchedule': toJson_MacieDailySchedule(obj.dailySchedule),
    'monthlySchedule': toJson_MacieMonthlySchedule(obj.monthlySchedule),
    'weeklySchedule': toJson_MacieWeeklySchedule(obj.weeklySchedule),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieFindingCriteria
 */
export interface MacieFindingCriteria {
  /**
   * @schema MacieFindingCriteria#criterion
   */
  readonly criterion?: { [key: string]: MacieCriterionAdditionalProperties };

}

/**
 * Converts an object of type 'MacieFindingCriteria' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieFindingCriteria(obj: MacieFindingCriteria | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'criterion': ((obj.criterion) === undefined) ? undefined : (Object.entries(obj.criterion).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_MacieCriterionAdditionalProperties(i[1]) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieUnprocessedAccount
 */
export interface MacieUnprocessedAccount {
  /**
   * @schema MacieUnprocessedAccount#accountId
   */
  readonly accountId?: string;

  /**
   * @schema MacieUnprocessedAccount#errorCode
   */
  readonly errorCode?: string;

  /**
   * @schema MacieUnprocessedAccount#errorMessage
   */
  readonly errorMessage?: string;

}

/**
 * Converts an object of type 'MacieUnprocessedAccount' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieUnprocessedAccount(obj: MacieUnprocessedAccount | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountId': obj.accountId,
    'errorCode': obj.errorCode,
    'errorMessage': obj.errorMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieAccountDetail
 */
export interface MacieAccountDetail {
  /**
   * @schema MacieAccountDetail#accountId
   */
  readonly accountId: string;

  /**
   * @schema MacieAccountDetail#email
   */
  readonly email: string;

}

/**
 * Converts an object of type 'MacieAccountDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieAccountDetail(obj: MacieAccountDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountId': obj.accountId,
    'email': obj.email,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieBucketCriteriaAdditionalProperties
 */
export interface MacieBucketCriteriaAdditionalProperties {
  /**
   * @schema MacieBucketCriteriaAdditionalProperties#eq
   */
  readonly eq?: string[];

  /**
   * @schema MacieBucketCriteriaAdditionalProperties#gt
   */
  readonly gt?: number;

  /**
   * @schema MacieBucketCriteriaAdditionalProperties#gte
   */
  readonly gte?: number;

  /**
   * @schema MacieBucketCriteriaAdditionalProperties#lt
   */
  readonly lt?: number;

  /**
   * @schema MacieBucketCriteriaAdditionalProperties#lte
   */
  readonly lte?: number;

  /**
   * @schema MacieBucketCriteriaAdditionalProperties#neq
   */
  readonly neq?: string[];

  /**
   * @schema MacieBucketCriteriaAdditionalProperties#prefix
   */
  readonly prefix?: string;

}

/**
 * Converts an object of type 'MacieBucketCriteriaAdditionalProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieBucketCriteriaAdditionalProperties(obj: MacieBucketCriteriaAdditionalProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'eq': obj.eq?.map(y => y),
    'gt': obj.gt,
    'gte': obj.gte,
    'lt': obj.lt,
    'lte': obj.lte,
    'neq': obj.neq?.map(y => y),
    'prefix': obj.prefix,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieBucketSortCriteria
 */
export interface MacieBucketSortCriteria {
  /**
   * @schema MacieBucketSortCriteria#attributeName
   */
  readonly attributeName?: string;

  /**
   * @schema MacieBucketSortCriteria#orderBy
   */
  readonly orderBy?: string;

}

/**
 * Converts an object of type 'MacieBucketSortCriteria' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieBucketSortCriteria(obj: MacieBucketSortCriteria | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'attributeName': obj.attributeName,
    'orderBy': obj.orderBy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieBucketMetadata
 */
export interface MacieBucketMetadata {
  /**
   * @schema MacieBucketMetadata#accountId
   */
  readonly accountId?: string;

  /**
   * @schema MacieBucketMetadata#allowsUnencryptedObjectUploads
   */
  readonly allowsUnencryptedObjectUploads?: string;

  /**
   * @schema MacieBucketMetadata#bucketArn
   */
  readonly bucketArn?: string;

  /**
   * @schema MacieBucketMetadata#bucketCreatedAt
   */
  readonly bucketCreatedAt?: string;

  /**
   * @schema MacieBucketMetadata#bucketName
   */
  readonly bucketName?: string;

  /**
   * @schema MacieBucketMetadata#classifiableObjectCount
   */
  readonly classifiableObjectCount?: number;

  /**
   * @schema MacieBucketMetadata#classifiableSizeInBytes
   */
  readonly classifiableSizeInBytes?: number;

  /**
   * @schema MacieBucketMetadata#jobDetails
   */
  readonly jobDetails?: MacieJobDetails;

  /**
   * @schema MacieBucketMetadata#lastUpdated
   */
  readonly lastUpdated?: string;

  /**
   * @schema MacieBucketMetadata#objectCount
   */
  readonly objectCount?: number;

  /**
   * @schema MacieBucketMetadata#objectCountByEncryptionType
   */
  readonly objectCountByEncryptionType?: MacieObjectCountByEncryptionType;

  /**
   * @schema MacieBucketMetadata#publicAccess
   */
  readonly publicAccess?: MacieBucketPublicAccess;

  /**
   * @schema MacieBucketMetadata#region
   */
  readonly region?: string;

  /**
   * @schema MacieBucketMetadata#replicationDetails
   */
  readonly replicationDetails?: MacieReplicationDetails;

  /**
   * @schema MacieBucketMetadata#serverSideEncryption
   */
  readonly serverSideEncryption?: MacieBucketServerSideEncryption;

  /**
   * @schema MacieBucketMetadata#sharedAccess
   */
  readonly sharedAccess?: string;

  /**
   * @schema MacieBucketMetadata#sizeInBytes
   */
  readonly sizeInBytes?: number;

  /**
   * @schema MacieBucketMetadata#sizeInBytesCompressed
   */
  readonly sizeInBytesCompressed?: number;

  /**
   * @schema MacieBucketMetadata#tags
   */
  readonly tags?: MacieKeyValuePair[];

  /**
   * @schema MacieBucketMetadata#unclassifiableObjectCount
   */
  readonly unclassifiableObjectCount?: MacieObjectLevelStatistics;

  /**
   * @schema MacieBucketMetadata#unclassifiableObjectSizeInBytes
   */
  readonly unclassifiableObjectSizeInBytes?: MacieObjectLevelStatistics;

  /**
   * @schema MacieBucketMetadata#versioning
   */
  readonly versioning?: boolean;

}

/**
 * Converts an object of type 'MacieBucketMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieBucketMetadata(obj: MacieBucketMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountId': obj.accountId,
    'allowsUnencryptedObjectUploads': obj.allowsUnencryptedObjectUploads,
    'bucketArn': obj.bucketArn,
    'bucketCreatedAt': obj.bucketCreatedAt,
    'bucketName': obj.bucketName,
    'classifiableObjectCount': obj.classifiableObjectCount,
    'classifiableSizeInBytes': obj.classifiableSizeInBytes,
    'jobDetails': toJson_MacieJobDetails(obj.jobDetails),
    'lastUpdated': obj.lastUpdated,
    'objectCount': obj.objectCount,
    'objectCountByEncryptionType': toJson_MacieObjectCountByEncryptionType(obj.objectCountByEncryptionType),
    'publicAccess': toJson_MacieBucketPublicAccess(obj.publicAccess),
    'region': obj.region,
    'replicationDetails': toJson_MacieReplicationDetails(obj.replicationDetails),
    'serverSideEncryption': toJson_MacieBucketServerSideEncryption(obj.serverSideEncryption),
    'sharedAccess': obj.sharedAccess,
    'sizeInBytes': obj.sizeInBytes,
    'sizeInBytesCompressed': obj.sizeInBytesCompressed,
    'tags': obj.tags?.map(y => toJson_MacieKeyValuePair(y)),
    'unclassifiableObjectCount': toJson_MacieObjectLevelStatistics(obj.unclassifiableObjectCount),
    'unclassifiableObjectSizeInBytes': toJson_MacieObjectLevelStatistics(obj.unclassifiableObjectSizeInBytes),
    'versioning': obj.versioning,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieLastRunErrorStatus
 */
export interface MacieLastRunErrorStatus {
  /**
   * @schema MacieLastRunErrorStatus#code
   */
  readonly code?: string;

}

/**
 * Converts an object of type 'MacieLastRunErrorStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieLastRunErrorStatus(obj: MacieLastRunErrorStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'code': obj.code,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieStatistics
 */
export interface MacieStatistics {
  /**
   * @schema MacieStatistics#approximateNumberOfObjectsToProcess
   */
  readonly approximateNumberOfObjectsToProcess?: number;

  /**
   * @schema MacieStatistics#numberOfRuns
   */
  readonly numberOfRuns?: number;

}

/**
 * Converts an object of type 'MacieStatistics' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieStatistics(obj: MacieStatistics | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'approximateNumberOfObjectsToProcess': obj.approximateNumberOfObjectsToProcess,
    'numberOfRuns': obj.numberOfRuns,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieUserPausedDetails
 */
export interface MacieUserPausedDetails {
  /**
   * @schema MacieUserPausedDetails#jobExpiresAt
   */
  readonly jobExpiresAt?: string;

  /**
   * @schema MacieUserPausedDetails#jobImminentExpirationHealthEventArn
   */
  readonly jobImminentExpirationHealthEventArn?: string;

  /**
   * @schema MacieUserPausedDetails#jobPausedAt
   */
  readonly jobPausedAt?: string;

}

/**
 * Converts an object of type 'MacieUserPausedDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieUserPausedDetails(obj: MacieUserPausedDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobExpiresAt': obj.jobExpiresAt,
    'jobImminentExpirationHealthEventArn': obj.jobImminentExpirationHealthEventArn,
    'jobPausedAt': obj.jobPausedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieInvitation
 */
export interface MacieInvitation {
  /**
   * @schema MacieInvitation#accountId
   */
  readonly accountId?: string;

  /**
   * @schema MacieInvitation#invitationId
   */
  readonly invitationId?: string;

  /**
   * @schema MacieInvitation#invitedAt
   */
  readonly invitedAt?: string;

  /**
   * @schema MacieInvitation#relationshipStatus
   */
  readonly relationshipStatus?: string;

}

/**
 * Converts an object of type 'MacieInvitation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieInvitation(obj: MacieInvitation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountId': obj.accountId,
    'invitationId': obj.invitationId,
    'invitedAt': obj.invitedAt,
    'relationshipStatus': obj.relationshipStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieBucketCountByEffectivePermission
 */
export interface MacieBucketCountByEffectivePermission {
  /**
   * @schema MacieBucketCountByEffectivePermission#publiclyAccessible
   */
  readonly publiclyAccessible?: number;

  /**
   * @schema MacieBucketCountByEffectivePermission#publiclyReadable
   */
  readonly publiclyReadable?: number;

  /**
   * @schema MacieBucketCountByEffectivePermission#publiclyWritable
   */
  readonly publiclyWritable?: number;

  /**
   * @schema MacieBucketCountByEffectivePermission#unknown
   */
  readonly unknown?: number;

}

/**
 * Converts an object of type 'MacieBucketCountByEffectivePermission' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieBucketCountByEffectivePermission(obj: MacieBucketCountByEffectivePermission | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'publiclyAccessible': obj.publiclyAccessible,
    'publiclyReadable': obj.publiclyReadable,
    'publiclyWritable': obj.publiclyWritable,
    'unknown': obj.unknown,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieBucketCountByEncryptionType
 */
export interface MacieBucketCountByEncryptionType {
  /**
   * @schema MacieBucketCountByEncryptionType#kmsManaged
   */
  readonly kmsManaged?: number;

  /**
   * @schema MacieBucketCountByEncryptionType#s3Managed
   */
  readonly s3Managed?: number;

  /**
   * @schema MacieBucketCountByEncryptionType#unencrypted
   */
  readonly unencrypted?: number;

  /**
   * @schema MacieBucketCountByEncryptionType#unknown
   */
  readonly unknown?: number;

}

/**
 * Converts an object of type 'MacieBucketCountByEncryptionType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieBucketCountByEncryptionType(obj: MacieBucketCountByEncryptionType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'kmsManaged': obj.kmsManaged,
    's3Managed': obj.s3Managed,
    'unencrypted': obj.unencrypted,
    'unknown': obj.unknown,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieBucketCountPolicyAllowsUnencryptedObjectUploads
 */
export interface MacieBucketCountPolicyAllowsUnencryptedObjectUploads {
  /**
   * @schema MacieBucketCountPolicyAllowsUnencryptedObjectUploads#allowsUnencryptedObjectUploads
   */
  readonly allowsUnencryptedObjectUploads?: number;

  /**
   * @schema MacieBucketCountPolicyAllowsUnencryptedObjectUploads#deniesUnencryptedObjectUploads
   */
  readonly deniesUnencryptedObjectUploads?: number;

  /**
   * @schema MacieBucketCountPolicyAllowsUnencryptedObjectUploads#unknown
   */
  readonly unknown?: number;

}

/**
 * Converts an object of type 'MacieBucketCountPolicyAllowsUnencryptedObjectUploads' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieBucketCountPolicyAllowsUnencryptedObjectUploads(obj: MacieBucketCountPolicyAllowsUnencryptedObjectUploads | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'allowsUnencryptedObjectUploads': obj.allowsUnencryptedObjectUploads,
    'deniesUnencryptedObjectUploads': obj.deniesUnencryptedObjectUploads,
    'unknown': obj.unknown,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieBucketCountBySharedAccessType
 */
export interface MacieBucketCountBySharedAccessType {
  /**
   * @schema MacieBucketCountBySharedAccessType#external
   */
  readonly external?: number;

  /**
   * @schema MacieBucketCountBySharedAccessType#internal
   */
  readonly internal?: number;

  /**
   * @schema MacieBucketCountBySharedAccessType#notShared
   */
  readonly notShared?: number;

  /**
   * @schema MacieBucketCountBySharedAccessType#unknown
   */
  readonly unknown?: number;

}

/**
 * Converts an object of type 'MacieBucketCountBySharedAccessType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieBucketCountBySharedAccessType(obj: MacieBucketCountBySharedAccessType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'external': obj.external,
    'internal': obj.internal,
    'notShared': obj.notShared,
    'unknown': obj.unknown,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieObjectLevelStatistics
 */
export interface MacieObjectLevelStatistics {
  /**
   * @schema MacieObjectLevelStatistics#fileType
   */
  readonly fileType?: number;

  /**
   * @schema MacieObjectLevelStatistics#storageClass
   */
  readonly storageClass?: number;

  /**
   * @schema MacieObjectLevelStatistics#total
   */
  readonly total?: number;

}

/**
 * Converts an object of type 'MacieObjectLevelStatistics' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieObjectLevelStatistics(obj: MacieObjectLevelStatistics | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'fileType': obj.fileType,
    'storageClass': obj.storageClass,
    'total': obj.total,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieClassificationExportConfiguration
 */
export interface MacieClassificationExportConfiguration {
  /**
   * @schema MacieClassificationExportConfiguration#s3Destination
   */
  readonly s3Destination?: MacieS3Destination;

}

/**
 * Converts an object of type 'MacieClassificationExportConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieClassificationExportConfiguration(obj: MacieClassificationExportConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    's3Destination': toJson_MacieS3Destination(obj.s3Destination),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieFindingStatisticsSortCriteria
 */
export interface MacieFindingStatisticsSortCriteria {
  /**
   * @schema MacieFindingStatisticsSortCriteria#attributeName
   */
  readonly attributeName?: string;

  /**
   * @schema MacieFindingStatisticsSortCriteria#orderBy
   */
  readonly orderBy?: string;

}

/**
 * Converts an object of type 'MacieFindingStatisticsSortCriteria' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieFindingStatisticsSortCriteria(obj: MacieFindingStatisticsSortCriteria | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'attributeName': obj.attributeName,
    'orderBy': obj.orderBy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieGroupCount
 */
export interface MacieGroupCount {
  /**
   * @schema MacieGroupCount#count
   */
  readonly count?: number;

  /**
   * @schema MacieGroupCount#groupKey
   */
  readonly groupKey?: string;

}

/**
 * Converts an object of type 'MacieGroupCount' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieGroupCount(obj: MacieGroupCount | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'count': obj.count,
    'groupKey': obj.groupKey,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieSortCriteria
 */
export interface MacieSortCriteria {
  /**
   * @schema MacieSortCriteria#attributeName
   */
  readonly attributeName?: string;

  /**
   * @schema MacieSortCriteria#orderBy
   */
  readonly orderBy?: string;

}

/**
 * Converts an object of type 'MacieSortCriteria' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieSortCriteria(obj: MacieSortCriteria | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'attributeName': obj.attributeName,
    'orderBy': obj.orderBy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieFinding
 */
export interface MacieFinding {
  /**
   * @schema MacieFinding#accountId
   */
  readonly accountId?: string;

  /**
   * @schema MacieFinding#archived
   */
  readonly archived?: boolean;

  /**
   * @schema MacieFinding#category
   */
  readonly category?: string;

  /**
   * @schema MacieFinding#classificationDetails
   */
  readonly classificationDetails?: MacieClassificationDetails;

  /**
   * @schema MacieFinding#count
   */
  readonly count?: number;

  /**
   * @schema MacieFinding#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema MacieFinding#description
   */
  readonly description?: string;

  /**
   * @schema MacieFinding#id
   */
  readonly id?: string;

  /**
   * @schema MacieFinding#partition
   */
  readonly partition?: string;

  /**
   * @schema MacieFinding#policyDetails
   */
  readonly policyDetails?: MaciePolicyDetails;

  /**
   * @schema MacieFinding#region
   */
  readonly region?: string;

  /**
   * @schema MacieFinding#resourcesAffected
   */
  readonly resourcesAffected?: MacieResourcesAffected;

  /**
   * @schema MacieFinding#sample
   */
  readonly sample?: boolean;

  /**
   * @schema MacieFinding#schemaVersion
   */
  readonly schemaVersion?: string;

  /**
   * @schema MacieFinding#severity
   */
  readonly severity?: MacieSeverity;

  /**
   * @schema MacieFinding#title
   */
  readonly title?: string;

  /**
   * @schema MacieFinding#type
   */
  readonly type?: string;

  /**
   * @schema MacieFinding#updatedAt
   */
  readonly updatedAt?: string;

}

/**
 * Converts an object of type 'MacieFinding' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieFinding(obj: MacieFinding | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountId': obj.accountId,
    'archived': obj.archived,
    'category': obj.category,
    'classificationDetails': toJson_MacieClassificationDetails(obj.classificationDetails),
    'count': obj.count,
    'createdAt': obj.createdAt,
    'description': obj.description,
    'id': obj.id,
    'partition': obj.partition,
    'policyDetails': toJson_MaciePolicyDetails(obj.policyDetails),
    'region': obj.region,
    'resourcesAffected': toJson_MacieResourcesAffected(obj.resourcesAffected),
    'sample': obj.sample,
    'schemaVersion': obj.schemaVersion,
    'severity': toJson_MacieSeverity(obj.severity),
    'title': obj.title,
    'type': obj.type,
    'updatedAt': obj.updatedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieSecurityHubConfiguration
 */
export interface MacieSecurityHubConfiguration {
  /**
   * @schema MacieSecurityHubConfiguration#publishClassificationFindings
   */
  readonly publishClassificationFindings: boolean;

  /**
   * @schema MacieSecurityHubConfiguration#publishPolicyFindings
   */
  readonly publishPolicyFindings: boolean;

}

/**
 * Converts an object of type 'MacieSecurityHubConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieSecurityHubConfiguration(obj: MacieSecurityHubConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'publishClassificationFindings': obj.publishClassificationFindings,
    'publishPolicyFindings': obj.publishPolicyFindings,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieUsageStatisticsFilter
 */
export interface MacieUsageStatisticsFilter {
  /**
   * @schema MacieUsageStatisticsFilter#comparator
   */
  readonly comparator?: string;

  /**
   * @schema MacieUsageStatisticsFilter#key
   */
  readonly key?: string;

  /**
   * @schema MacieUsageStatisticsFilter#values
   */
  readonly values?: string[];

}

/**
 * Converts an object of type 'MacieUsageStatisticsFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieUsageStatisticsFilter(obj: MacieUsageStatisticsFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'comparator': obj.comparator,
    'key': obj.key,
    'values': obj.values?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieUsageStatisticsSortBy
 */
export interface MacieUsageStatisticsSortBy {
  /**
   * @schema MacieUsageStatisticsSortBy#key
   */
  readonly key?: string;

  /**
   * @schema MacieUsageStatisticsSortBy#orderBy
   */
  readonly orderBy?: string;

}

/**
 * Converts an object of type 'MacieUsageStatisticsSortBy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieUsageStatisticsSortBy(obj: MacieUsageStatisticsSortBy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'key': obj.key,
    'orderBy': obj.orderBy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieUsageRecord
 */
export interface MacieUsageRecord {
  /**
   * @schema MacieUsageRecord#accountId
   */
  readonly accountId?: string;

  /**
   * @schema MacieUsageRecord#freeTrialStartDate
   */
  readonly freeTrialStartDate?: string;

  /**
   * @schema MacieUsageRecord#usage
   */
  readonly usage?: MacieUsageByAccount[];

}

/**
 * Converts an object of type 'MacieUsageRecord' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieUsageRecord(obj: MacieUsageRecord | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountId': obj.accountId,
    'freeTrialStartDate': obj.freeTrialStartDate,
    'usage': obj.usage?.map(y => toJson_MacieUsageByAccount(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieUsageTotal
 */
export interface MacieUsageTotal {
  /**
   * @schema MacieUsageTotal#currency
   */
  readonly currency?: string;

  /**
   * @schema MacieUsageTotal#estimatedCost
   */
  readonly estimatedCost?: string;

  /**
   * @schema MacieUsageTotal#type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'MacieUsageTotal' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieUsageTotal(obj: MacieUsageTotal | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'currency': obj.currency,
    'estimatedCost': obj.estimatedCost,
    'type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieListJobsFilterCriteria
 */
export interface MacieListJobsFilterCriteria {
  /**
   * @schema MacieListJobsFilterCriteria#excludes
   */
  readonly excludes?: MacieListJobsFilterTerm[];

  /**
   * @schema MacieListJobsFilterCriteria#includes
   */
  readonly includes?: MacieListJobsFilterTerm[];

}

/**
 * Converts an object of type 'MacieListJobsFilterCriteria' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieListJobsFilterCriteria(obj: MacieListJobsFilterCriteria | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'excludes': obj.excludes?.map(y => toJson_MacieListJobsFilterTerm(y)),
    'includes': obj.includes?.map(y => toJson_MacieListJobsFilterTerm(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieListJobsSortCriteria
 */
export interface MacieListJobsSortCriteria {
  /**
   * @schema MacieListJobsSortCriteria#attributeName
   */
  readonly attributeName?: string;

  /**
   * @schema MacieListJobsSortCriteria#orderBy
   */
  readonly orderBy?: string;

}

/**
 * Converts an object of type 'MacieListJobsSortCriteria' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieListJobsSortCriteria(obj: MacieListJobsSortCriteria | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'attributeName': obj.attributeName,
    'orderBy': obj.orderBy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieJobSummary
 */
export interface MacieJobSummary {
  /**
   * @schema MacieJobSummary#bucketDefinitions
   */
  readonly bucketDefinitions?: MacieS3BucketDefinitionForJob[];

  /**
   * @schema MacieJobSummary#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema MacieJobSummary#jobId
   */
  readonly jobId?: string;

  /**
   * @schema MacieJobSummary#jobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema MacieJobSummary#jobType
   */
  readonly jobType?: string;

  /**
   * @schema MacieJobSummary#lastRunErrorStatus
   */
  readonly lastRunErrorStatus?: MacieLastRunErrorStatus;

  /**
   * @schema MacieJobSummary#name
   */
  readonly name?: string;

  /**
   * @schema MacieJobSummary#userPausedDetails
   */
  readonly userPausedDetails?: MacieUserPausedDetails;

  /**
   * @schema MacieJobSummary#bucketCriteria
   */
  readonly bucketCriteria?: MacieS3BucketCriteriaForJob;

}

/**
 * Converts an object of type 'MacieJobSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieJobSummary(obj: MacieJobSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bucketDefinitions': obj.bucketDefinitions?.map(y => toJson_MacieS3BucketDefinitionForJob(y)),
    'createdAt': obj.createdAt,
    'jobId': obj.jobId,
    'jobStatus': obj.jobStatus,
    'jobType': obj.jobType,
    'lastRunErrorStatus': toJson_MacieLastRunErrorStatus(obj.lastRunErrorStatus),
    'name': obj.name,
    'userPausedDetails': toJson_MacieUserPausedDetails(obj.userPausedDetails),
    'bucketCriteria': toJson_MacieS3BucketCriteriaForJob(obj.bucketCriteria),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieCustomDataIdentifierSummary
 */
export interface MacieCustomDataIdentifierSummary {
  /**
   * @schema MacieCustomDataIdentifierSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema MacieCustomDataIdentifierSummary#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema MacieCustomDataIdentifierSummary#description
   */
  readonly description?: string;

  /**
   * @schema MacieCustomDataIdentifierSummary#id
   */
  readonly id?: string;

  /**
   * @schema MacieCustomDataIdentifierSummary#name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'MacieCustomDataIdentifierSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieCustomDataIdentifierSummary(obj: MacieCustomDataIdentifierSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'createdAt': obj.createdAt,
    'description': obj.description,
    'id': obj.id,
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieFindingsFilterListItem
 */
export interface MacieFindingsFilterListItem {
  /**
   * @schema MacieFindingsFilterListItem#action
   */
  readonly action?: string;

  /**
   * @schema MacieFindingsFilterListItem#arn
   */
  readonly arn?: string;

  /**
   * @schema MacieFindingsFilterListItem#id
   */
  readonly id?: string;

  /**
   * @schema MacieFindingsFilterListItem#name
   */
  readonly name?: string;

  /**
   * @schema MacieFindingsFilterListItem#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'MacieFindingsFilterListItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieFindingsFilterListItem(obj: MacieFindingsFilterListItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'action': obj.action,
    'arn': obj.arn,
    'id': obj.id,
    'name': obj.name,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieMember
 */
export interface MacieMember {
  /**
   * @schema MacieMember#accountId
   */
  readonly accountId?: string;

  /**
   * @schema MacieMember#administratorAccountId
   */
  readonly administratorAccountId?: string;

  /**
   * @schema MacieMember#arn
   */
  readonly arn?: string;

  /**
   * @schema MacieMember#email
   */
  readonly email?: string;

  /**
   * @schema MacieMember#invitedAt
   */
  readonly invitedAt?: string;

  /**
   * @schema MacieMember#masterAccountId
   */
  readonly masterAccountId?: string;

  /**
   * @schema MacieMember#relationshipStatus
   */
  readonly relationshipStatus?: string;

  /**
   * @schema MacieMember#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema MacieMember#updatedAt
   */
  readonly updatedAt?: string;

}

/**
 * Converts an object of type 'MacieMember' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieMember(obj: MacieMember | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountId': obj.accountId,
    'administratorAccountId': obj.administratorAccountId,
    'arn': obj.arn,
    'email': obj.email,
    'invitedAt': obj.invitedAt,
    'masterAccountId': obj.masterAccountId,
    'relationshipStatus': obj.relationshipStatus,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'updatedAt': obj.updatedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieAdminAccount
 */
export interface MacieAdminAccount {
  /**
   * @schema MacieAdminAccount#accountId
   */
  readonly accountId?: string;

  /**
   * @schema MacieAdminAccount#status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'MacieAdminAccount' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieAdminAccount(obj: MacieAdminAccount | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountId': obj.accountId,
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieSearchResourcesBucketCriteria
 */
export interface MacieSearchResourcesBucketCriteria {
  /**
   * @schema MacieSearchResourcesBucketCriteria#excludes
   */
  readonly excludes?: MacieSearchResourcesCriteriaBlock;

  /**
   * @schema MacieSearchResourcesBucketCriteria#includes
   */
  readonly includes?: MacieSearchResourcesCriteriaBlock;

}

/**
 * Converts an object of type 'MacieSearchResourcesBucketCriteria' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieSearchResourcesBucketCriteria(obj: MacieSearchResourcesBucketCriteria | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'excludes': toJson_MacieSearchResourcesCriteriaBlock(obj.excludes),
    'includes': toJson_MacieSearchResourcesCriteriaBlock(obj.includes),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieSearchResourcesSortCriteria
 */
export interface MacieSearchResourcesSortCriteria {
  /**
   * @schema MacieSearchResourcesSortCriteria#attributeName
   */
  readonly attributeName?: string;

  /**
   * @schema MacieSearchResourcesSortCriteria#orderBy
   */
  readonly orderBy?: string;

}

/**
 * Converts an object of type 'MacieSearchResourcesSortCriteria' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieSearchResourcesSortCriteria(obj: MacieSearchResourcesSortCriteria | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'attributeName': obj.attributeName,
    'orderBy': obj.orderBy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieMatchingResource
 */
export interface MacieMatchingResource {
  /**
   * @schema MacieMatchingResource#matchingBucket
   */
  readonly matchingBucket?: MacieMatchingBucket;

}

/**
 * Converts an object of type 'MacieMatchingResource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieMatchingResource(obj: MacieMatchingResource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'matchingBucket': toJson_MacieMatchingBucket(obj.matchingBucket),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieS3BucketDefinitionForJob
 */
export interface MacieS3BucketDefinitionForJob {
  /**
   * @schema MacieS3BucketDefinitionForJob#accountId
   */
  readonly accountId: string;

  /**
   * @schema MacieS3BucketDefinitionForJob#buckets
   */
  readonly buckets: string[];

}

/**
 * Converts an object of type 'MacieS3BucketDefinitionForJob' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieS3BucketDefinitionForJob(obj: MacieS3BucketDefinitionForJob | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountId': obj.accountId,
    'buckets': obj.buckets?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieScoping
 */
export interface MacieScoping {
  /**
   * @schema MacieScoping#excludes
   */
  readonly excludes?: MacieJobScopingBlock;

  /**
   * @schema MacieScoping#includes
   */
  readonly includes?: MacieJobScopingBlock;

}

/**
 * Converts an object of type 'MacieScoping' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieScoping(obj: MacieScoping | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'excludes': toJson_MacieJobScopingBlock(obj.excludes),
    'includes': toJson_MacieJobScopingBlock(obj.includes),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieS3BucketCriteriaForJob
 */
export interface MacieS3BucketCriteriaForJob {
  /**
   * @schema MacieS3BucketCriteriaForJob#excludes
   */
  readonly excludes?: MacieCriteriaBlockForJob;

  /**
   * @schema MacieS3BucketCriteriaForJob#includes
   */
  readonly includes?: MacieCriteriaBlockForJob;

}

/**
 * Converts an object of type 'MacieS3BucketCriteriaForJob' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieS3BucketCriteriaForJob(obj: MacieS3BucketCriteriaForJob | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'excludes': toJson_MacieCriteriaBlockForJob(obj.excludes),
    'includes': toJson_MacieCriteriaBlockForJob(obj.includes),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieDailySchedule
 */
export interface MacieDailySchedule {
}

/**
 * Converts an object of type 'MacieDailySchedule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieDailySchedule(obj: MacieDailySchedule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieMonthlySchedule
 */
export interface MacieMonthlySchedule {
  /**
   * @schema MacieMonthlySchedule#dayOfMonth
   */
  readonly dayOfMonth?: number;

}

/**
 * Converts an object of type 'MacieMonthlySchedule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieMonthlySchedule(obj: MacieMonthlySchedule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'dayOfMonth': obj.dayOfMonth,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieWeeklySchedule
 */
export interface MacieWeeklySchedule {
  /**
   * @schema MacieWeeklySchedule#dayOfWeek
   */
  readonly dayOfWeek?: string;

}

/**
 * Converts an object of type 'MacieWeeklySchedule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieWeeklySchedule(obj: MacieWeeklySchedule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'dayOfWeek': obj.dayOfWeek,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieCriterionAdditionalProperties
 */
export interface MacieCriterionAdditionalProperties {
  /**
   * @schema MacieCriterionAdditionalProperties#eq
   */
  readonly eq?: string[];

  /**
   * @schema MacieCriterionAdditionalProperties#eqExactMatch
   */
  readonly eqExactMatch?: string[];

  /**
   * @schema MacieCriterionAdditionalProperties#gt
   */
  readonly gt?: number;

  /**
   * @schema MacieCriterionAdditionalProperties#gte
   */
  readonly gte?: number;

  /**
   * @schema MacieCriterionAdditionalProperties#lt
   */
  readonly lt?: number;

  /**
   * @schema MacieCriterionAdditionalProperties#lte
   */
  readonly lte?: number;

  /**
   * @schema MacieCriterionAdditionalProperties#neq
   */
  readonly neq?: string[];

}

/**
 * Converts an object of type 'MacieCriterionAdditionalProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieCriterionAdditionalProperties(obj: MacieCriterionAdditionalProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'eq': obj.eq?.map(y => y),
    'eqExactMatch': obj.eqExactMatch?.map(y => y),
    'gt': obj.gt,
    'gte': obj.gte,
    'lt': obj.lt,
    'lte': obj.lte,
    'neq': obj.neq?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieJobDetails
 */
export interface MacieJobDetails {
  /**
   * @schema MacieJobDetails#isDefinedInJob
   */
  readonly isDefinedInJob?: string;

  /**
   * @schema MacieJobDetails#isMonitoredByJob
   */
  readonly isMonitoredByJob?: string;

  /**
   * @schema MacieJobDetails#lastJobId
   */
  readonly lastJobId?: string;

  /**
   * @schema MacieJobDetails#lastJobRunTime
   */
  readonly lastJobRunTime?: string;

}

/**
 * Converts an object of type 'MacieJobDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieJobDetails(obj: MacieJobDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'isDefinedInJob': obj.isDefinedInJob,
    'isMonitoredByJob': obj.isMonitoredByJob,
    'lastJobId': obj.lastJobId,
    'lastJobRunTime': obj.lastJobRunTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieObjectCountByEncryptionType
 */
export interface MacieObjectCountByEncryptionType {
  /**
   * @schema MacieObjectCountByEncryptionType#customerManaged
   */
  readonly customerManaged?: number;

  /**
   * @schema MacieObjectCountByEncryptionType#kmsManaged
   */
  readonly kmsManaged?: number;

  /**
   * @schema MacieObjectCountByEncryptionType#s3Managed
   */
  readonly s3Managed?: number;

  /**
   * @schema MacieObjectCountByEncryptionType#unencrypted
   */
  readonly unencrypted?: number;

  /**
   * @schema MacieObjectCountByEncryptionType#unknown
   */
  readonly unknown?: number;

}

/**
 * Converts an object of type 'MacieObjectCountByEncryptionType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieObjectCountByEncryptionType(obj: MacieObjectCountByEncryptionType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'customerManaged': obj.customerManaged,
    'kmsManaged': obj.kmsManaged,
    's3Managed': obj.s3Managed,
    'unencrypted': obj.unencrypted,
    'unknown': obj.unknown,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieBucketPublicAccess
 */
export interface MacieBucketPublicAccess {
  /**
   * @schema MacieBucketPublicAccess#effectivePermission
   */
  readonly effectivePermission?: string;

  /**
   * @schema MacieBucketPublicAccess#permissionConfiguration
   */
  readonly permissionConfiguration?: MacieBucketPermissionConfiguration;

}

/**
 * Converts an object of type 'MacieBucketPublicAccess' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieBucketPublicAccess(obj: MacieBucketPublicAccess | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'effectivePermission': obj.effectivePermission,
    'permissionConfiguration': toJson_MacieBucketPermissionConfiguration(obj.permissionConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieReplicationDetails
 */
export interface MacieReplicationDetails {
  /**
   * @schema MacieReplicationDetails#replicated
   */
  readonly replicated?: boolean;

  /**
   * @schema MacieReplicationDetails#replicatedExternally
   */
  readonly replicatedExternally?: boolean;

  /**
   * @schema MacieReplicationDetails#replicationAccounts
   */
  readonly replicationAccounts?: string[];

}

/**
 * Converts an object of type 'MacieReplicationDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieReplicationDetails(obj: MacieReplicationDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'replicated': obj.replicated,
    'replicatedExternally': obj.replicatedExternally,
    'replicationAccounts': obj.replicationAccounts?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieBucketServerSideEncryption
 */
export interface MacieBucketServerSideEncryption {
  /**
   * @schema MacieBucketServerSideEncryption#kmsMasterKeyId
   */
  readonly kmsMasterKeyId?: string;

  /**
   * @schema MacieBucketServerSideEncryption#type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'MacieBucketServerSideEncryption' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieBucketServerSideEncryption(obj: MacieBucketServerSideEncryption | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'kmsMasterKeyId': obj.kmsMasterKeyId,
    'type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieKeyValuePair
 */
export interface MacieKeyValuePair {
  /**
   * @schema MacieKeyValuePair#key
   */
  readonly key?: string;

  /**
   * @schema MacieKeyValuePair#value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'MacieKeyValuePair' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieKeyValuePair(obj: MacieKeyValuePair | undefined): Record<string, any> | undefined {
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
 * @schema MacieS3Destination
 */
export interface MacieS3Destination {
  /**
   * @schema MacieS3Destination#bucketName
   */
  readonly bucketName: string;

  /**
   * @schema MacieS3Destination#keyPrefix
   */
  readonly keyPrefix?: string;

  /**
   * @schema MacieS3Destination#kmsKeyArn
   */
  readonly kmsKeyArn: string;

}

/**
 * Converts an object of type 'MacieS3Destination' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieS3Destination(obj: MacieS3Destination | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bucketName': obj.bucketName,
    'keyPrefix': obj.keyPrefix,
    'kmsKeyArn': obj.kmsKeyArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieClassificationDetails
 */
export interface MacieClassificationDetails {
  /**
   * @schema MacieClassificationDetails#detailedResultsLocation
   */
  readonly detailedResultsLocation?: string;

  /**
   * @schema MacieClassificationDetails#jobArn
   */
  readonly jobArn?: string;

  /**
   * @schema MacieClassificationDetails#jobId
   */
  readonly jobId?: string;

  /**
   * @schema MacieClassificationDetails#result
   */
  readonly result?: MacieClassificationResult;

}

/**
 * Converts an object of type 'MacieClassificationDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieClassificationDetails(obj: MacieClassificationDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'detailedResultsLocation': obj.detailedResultsLocation,
    'jobArn': obj.jobArn,
    'jobId': obj.jobId,
    'result': toJson_MacieClassificationResult(obj.result),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MaciePolicyDetails
 */
export interface MaciePolicyDetails {
  /**
   * @schema MaciePolicyDetails#action
   */
  readonly action?: MacieFindingAction;

  /**
   * @schema MaciePolicyDetails#actor
   */
  readonly actor?: MacieFindingActor;

}

/**
 * Converts an object of type 'MaciePolicyDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MaciePolicyDetails(obj: MaciePolicyDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'action': toJson_MacieFindingAction(obj.action),
    'actor': toJson_MacieFindingActor(obj.actor),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieResourcesAffected
 */
export interface MacieResourcesAffected {
  /**
   * @schema MacieResourcesAffected#s3Bucket
   */
  readonly s3Bucket?: MacieS3Bucket;

  /**
   * @schema MacieResourcesAffected#s3Object
   */
  readonly s3Object?: MacieS3Object;

}

/**
 * Converts an object of type 'MacieResourcesAffected' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieResourcesAffected(obj: MacieResourcesAffected | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    's3Bucket': toJson_MacieS3Bucket(obj.s3Bucket),
    's3Object': toJson_MacieS3Object(obj.s3Object),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieSeverity
 */
export interface MacieSeverity {
  /**
   * @schema MacieSeverity#description
   */
  readonly description?: string;

  /**
   * @schema MacieSeverity#score
   */
  readonly score?: number;

}

/**
 * Converts an object of type 'MacieSeverity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieSeverity(obj: MacieSeverity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'description': obj.description,
    'score': obj.score,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieUsageByAccount
 */
export interface MacieUsageByAccount {
  /**
   * @schema MacieUsageByAccount#currency
   */
  readonly currency?: string;

  /**
   * @schema MacieUsageByAccount#estimatedCost
   */
  readonly estimatedCost?: string;

  /**
   * @schema MacieUsageByAccount#serviceLimit
   */
  readonly serviceLimit?: MacieServiceLimit;

  /**
   * @schema MacieUsageByAccount#type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'MacieUsageByAccount' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieUsageByAccount(obj: MacieUsageByAccount | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'currency': obj.currency,
    'estimatedCost': obj.estimatedCost,
    'serviceLimit': toJson_MacieServiceLimit(obj.serviceLimit),
    'type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieListJobsFilterTerm
 */
export interface MacieListJobsFilterTerm {
  /**
   * @schema MacieListJobsFilterTerm#comparator
   */
  readonly comparator?: string;

  /**
   * @schema MacieListJobsFilterTerm#key
   */
  readonly key?: string;

  /**
   * @schema MacieListJobsFilterTerm#values
   */
  readonly values?: string[];

}

/**
 * Converts an object of type 'MacieListJobsFilterTerm' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieListJobsFilterTerm(obj: MacieListJobsFilterTerm | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'comparator': obj.comparator,
    'key': obj.key,
    'values': obj.values?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieSearchResourcesCriteriaBlock
 */
export interface MacieSearchResourcesCriteriaBlock {
  /**
   * @schema MacieSearchResourcesCriteriaBlock#and
   */
  readonly and?: MacieSearchResourcesCriteria[];

}

/**
 * Converts an object of type 'MacieSearchResourcesCriteriaBlock' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieSearchResourcesCriteriaBlock(obj: MacieSearchResourcesCriteriaBlock | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'and': obj.and?.map(y => toJson_MacieSearchResourcesCriteria(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieMatchingBucket
 */
export interface MacieMatchingBucket {
  /**
   * @schema MacieMatchingBucket#accountId
   */
  readonly accountId?: string;

  /**
   * @schema MacieMatchingBucket#bucketName
   */
  readonly bucketName?: string;

  /**
   * @schema MacieMatchingBucket#classifiableObjectCount
   */
  readonly classifiableObjectCount?: number;

  /**
   * @schema MacieMatchingBucket#classifiableSizeInBytes
   */
  readonly classifiableSizeInBytes?: number;

  /**
   * @schema MacieMatchingBucket#jobDetails
   */
  readonly jobDetails?: MacieJobDetails;

  /**
   * @schema MacieMatchingBucket#objectCount
   */
  readonly objectCount?: number;

  /**
   * @schema MacieMatchingBucket#objectCountByEncryptionType
   */
  readonly objectCountByEncryptionType?: MacieObjectCountByEncryptionType;

  /**
   * @schema MacieMatchingBucket#sizeInBytes
   */
  readonly sizeInBytes?: number;

  /**
   * @schema MacieMatchingBucket#sizeInBytesCompressed
   */
  readonly sizeInBytesCompressed?: number;

  /**
   * @schema MacieMatchingBucket#unclassifiableObjectCount
   */
  readonly unclassifiableObjectCount?: MacieObjectLevelStatistics;

  /**
   * @schema MacieMatchingBucket#unclassifiableObjectSizeInBytes
   */
  readonly unclassifiableObjectSizeInBytes?: MacieObjectLevelStatistics;

}

/**
 * Converts an object of type 'MacieMatchingBucket' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieMatchingBucket(obj: MacieMatchingBucket | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountId': obj.accountId,
    'bucketName': obj.bucketName,
    'classifiableObjectCount': obj.classifiableObjectCount,
    'classifiableSizeInBytes': obj.classifiableSizeInBytes,
    'jobDetails': toJson_MacieJobDetails(obj.jobDetails),
    'objectCount': obj.objectCount,
    'objectCountByEncryptionType': toJson_MacieObjectCountByEncryptionType(obj.objectCountByEncryptionType),
    'sizeInBytes': obj.sizeInBytes,
    'sizeInBytesCompressed': obj.sizeInBytesCompressed,
    'unclassifiableObjectCount': toJson_MacieObjectLevelStatistics(obj.unclassifiableObjectCount),
    'unclassifiableObjectSizeInBytes': toJson_MacieObjectLevelStatistics(obj.unclassifiableObjectSizeInBytes),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieJobScopingBlock
 */
export interface MacieJobScopingBlock {
  /**
   * @schema MacieJobScopingBlock#and
   */
  readonly and?: MacieJobScopeTerm[];

}

/**
 * Converts an object of type 'MacieJobScopingBlock' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieJobScopingBlock(obj: MacieJobScopingBlock | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'and': obj.and?.map(y => toJson_MacieJobScopeTerm(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieCriteriaBlockForJob
 */
export interface MacieCriteriaBlockForJob {
  /**
   * @schema MacieCriteriaBlockForJob#and
   */
  readonly and?: MacieCriteriaForJob[];

}

/**
 * Converts an object of type 'MacieCriteriaBlockForJob' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieCriteriaBlockForJob(obj: MacieCriteriaBlockForJob | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'and': obj.and?.map(y => toJson_MacieCriteriaForJob(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieBucketPermissionConfiguration
 */
export interface MacieBucketPermissionConfiguration {
  /**
   * @schema MacieBucketPermissionConfiguration#accountLevelPermissions
   */
  readonly accountLevelPermissions?: MacieAccountLevelPermissions;

  /**
   * @schema MacieBucketPermissionConfiguration#bucketLevelPermissions
   */
  readonly bucketLevelPermissions?: MacieBucketLevelPermissions;

}

/**
 * Converts an object of type 'MacieBucketPermissionConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieBucketPermissionConfiguration(obj: MacieBucketPermissionConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountLevelPermissions': toJson_MacieAccountLevelPermissions(obj.accountLevelPermissions),
    'bucketLevelPermissions': toJson_MacieBucketLevelPermissions(obj.bucketLevelPermissions),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieClassificationResult
 */
export interface MacieClassificationResult {
  /**
   * @schema MacieClassificationResult#additionalOccurrences
   */
  readonly additionalOccurrences?: boolean;

  /**
   * @schema MacieClassificationResult#customDataIdentifiers
   */
  readonly customDataIdentifiers?: MacieCustomDataIdentifiers;

  /**
   * @schema MacieClassificationResult#mimeType
   */
  readonly mimeType?: string;

  /**
   * @schema MacieClassificationResult#sensitiveData
   */
  readonly sensitiveData?: MacieSensitiveDataItem[];

  /**
   * @schema MacieClassificationResult#sizeClassified
   */
  readonly sizeClassified?: number;

  /**
   * @schema MacieClassificationResult#status
   */
  readonly status?: MacieClassificationResultStatus;

}

/**
 * Converts an object of type 'MacieClassificationResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieClassificationResult(obj: MacieClassificationResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'additionalOccurrences': obj.additionalOccurrences,
    'customDataIdentifiers': toJson_MacieCustomDataIdentifiers(obj.customDataIdentifiers),
    'mimeType': obj.mimeType,
    'sensitiveData': obj.sensitiveData?.map(y => toJson_MacieSensitiveDataItem(y)),
    'sizeClassified': obj.sizeClassified,
    'status': toJson_MacieClassificationResultStatus(obj.status),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieFindingAction
 */
export interface MacieFindingAction {
  /**
   * @schema MacieFindingAction#actionType
   */
  readonly actionType?: string;

  /**
   * @schema MacieFindingAction#apiCallDetails
   */
  readonly apiCallDetails?: MacieApiCallDetails;

}

/**
 * Converts an object of type 'MacieFindingAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieFindingAction(obj: MacieFindingAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'actionType': obj.actionType,
    'apiCallDetails': toJson_MacieApiCallDetails(obj.apiCallDetails),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieFindingActor
 */
export interface MacieFindingActor {
  /**
   * @schema MacieFindingActor#domainDetails
   */
  readonly domainDetails?: MacieDomainDetails;

  /**
   * @schema MacieFindingActor#ipAddressDetails
   */
  readonly ipAddressDetails?: MacieIpAddressDetails;

  /**
   * @schema MacieFindingActor#userIdentity
   */
  readonly userIdentity?: MacieUserIdentity;

}

/**
 * Converts an object of type 'MacieFindingActor' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieFindingActor(obj: MacieFindingActor | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domainDetails': toJson_MacieDomainDetails(obj.domainDetails),
    'ipAddressDetails': toJson_MacieIpAddressDetails(obj.ipAddressDetails),
    'userIdentity': toJson_MacieUserIdentity(obj.userIdentity),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieS3Bucket
 */
export interface MacieS3Bucket {
  /**
   * @schema MacieS3Bucket#allowsUnencryptedObjectUploads
   */
  readonly allowsUnencryptedObjectUploads?: string;

  /**
   * @schema MacieS3Bucket#arn
   */
  readonly arn?: string;

  /**
   * @schema MacieS3Bucket#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema MacieS3Bucket#defaultServerSideEncryption
   */
  readonly defaultServerSideEncryption?: MacieServerSideEncryption;

  /**
   * @schema MacieS3Bucket#name
   */
  readonly name?: string;

  /**
   * @schema MacieS3Bucket#owner
   */
  readonly owner?: MacieS3BucketOwner;

  /**
   * @schema MacieS3Bucket#publicAccess
   */
  readonly publicAccess?: MacieBucketPublicAccess;

  /**
   * @schema MacieS3Bucket#tags
   */
  readonly tags?: MacieKeyValuePair[];

}

/**
 * Converts an object of type 'MacieS3Bucket' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieS3Bucket(obj: MacieS3Bucket | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'allowsUnencryptedObjectUploads': obj.allowsUnencryptedObjectUploads,
    'arn': obj.arn,
    'createdAt': obj.createdAt,
    'defaultServerSideEncryption': toJson_MacieServerSideEncryption(obj.defaultServerSideEncryption),
    'name': obj.name,
    'owner': toJson_MacieS3BucketOwner(obj.owner),
    'publicAccess': toJson_MacieBucketPublicAccess(obj.publicAccess),
    'tags': obj.tags?.map(y => toJson_MacieKeyValuePair(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieS3Object
 */
export interface MacieS3Object {
  /**
   * @schema MacieS3Object#bucketArn
   */
  readonly bucketArn?: string;

  /**
   * @schema MacieS3Object#eTag
   */
  readonly eTag?: string;

  /**
   * @schema MacieS3Object#extension
   */
  readonly extension?: string;

  /**
   * @schema MacieS3Object#key
   */
  readonly key?: string;

  /**
   * @schema MacieS3Object#lastModified
   */
  readonly lastModified?: string;

  /**
   * @schema MacieS3Object#path
   */
  readonly path?: string;

  /**
   * @schema MacieS3Object#publicAccess
   */
  readonly publicAccess?: boolean;

  /**
   * @schema MacieS3Object#serverSideEncryption
   */
  readonly serverSideEncryption?: MacieServerSideEncryption;

  /**
   * @schema MacieS3Object#size
   */
  readonly size?: number;

  /**
   * @schema MacieS3Object#storageClass
   */
  readonly storageClass?: string;

  /**
   * @schema MacieS3Object#tags
   */
  readonly tags?: MacieKeyValuePair[];

  /**
   * @schema MacieS3Object#versionId
   */
  readonly versionId?: string;

}

/**
 * Converts an object of type 'MacieS3Object' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieS3Object(obj: MacieS3Object | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bucketArn': obj.bucketArn,
    'eTag': obj.eTag,
    'extension': obj.extension,
    'key': obj.key,
    'lastModified': obj.lastModified,
    'path': obj.path,
    'publicAccess': obj.publicAccess,
    'serverSideEncryption': toJson_MacieServerSideEncryption(obj.serverSideEncryption),
    'size': obj.size,
    'storageClass': obj.storageClass,
    'tags': obj.tags?.map(y => toJson_MacieKeyValuePair(y)),
    'versionId': obj.versionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieServiceLimit
 */
export interface MacieServiceLimit {
  /**
   * @schema MacieServiceLimit#isServiceLimited
   */
  readonly isServiceLimited?: boolean;

  /**
   * @schema MacieServiceLimit#unit
   */
  readonly unit?: string;

  /**
   * @schema MacieServiceLimit#value
   */
  readonly value?: number;

}

/**
 * Converts an object of type 'MacieServiceLimit' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieServiceLimit(obj: MacieServiceLimit | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'isServiceLimited': obj.isServiceLimited,
    'unit': obj.unit,
    'value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieSearchResourcesCriteria
 */
export interface MacieSearchResourcesCriteria {
  /**
   * @schema MacieSearchResourcesCriteria#simpleCriterion
   */
  readonly simpleCriterion?: MacieSearchResourcesSimpleCriterion;

  /**
   * @schema MacieSearchResourcesCriteria#tagCriterion
   */
  readonly tagCriterion?: MacieSearchResourcesTagCriterion;

}

/**
 * Converts an object of type 'MacieSearchResourcesCriteria' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieSearchResourcesCriteria(obj: MacieSearchResourcesCriteria | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'simpleCriterion': toJson_MacieSearchResourcesSimpleCriterion(obj.simpleCriterion),
    'tagCriterion': toJson_MacieSearchResourcesTagCriterion(obj.tagCriterion),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieJobScopeTerm
 */
export interface MacieJobScopeTerm {
  /**
   * @schema MacieJobScopeTerm#simpleScopeTerm
   */
  readonly simpleScopeTerm?: MacieSimpleScopeTerm;

  /**
   * @schema MacieJobScopeTerm#tagScopeTerm
   */
  readonly tagScopeTerm?: MacieTagScopeTerm;

}

/**
 * Converts an object of type 'MacieJobScopeTerm' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieJobScopeTerm(obj: MacieJobScopeTerm | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'simpleScopeTerm': toJson_MacieSimpleScopeTerm(obj.simpleScopeTerm),
    'tagScopeTerm': toJson_MacieTagScopeTerm(obj.tagScopeTerm),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieCriteriaForJob
 */
export interface MacieCriteriaForJob {
  /**
   * @schema MacieCriteriaForJob#simpleCriterion
   */
  readonly simpleCriterion?: MacieSimpleCriterionForJob;

  /**
   * @schema MacieCriteriaForJob#tagCriterion
   */
  readonly tagCriterion?: MacieTagCriterionForJob;

}

/**
 * Converts an object of type 'MacieCriteriaForJob' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieCriteriaForJob(obj: MacieCriteriaForJob | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'simpleCriterion': toJson_MacieSimpleCriterionForJob(obj.simpleCriterion),
    'tagCriterion': toJson_MacieTagCriterionForJob(obj.tagCriterion),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieAccountLevelPermissions
 */
export interface MacieAccountLevelPermissions {
  /**
   * @schema MacieAccountLevelPermissions#blockPublicAccess
   */
  readonly blockPublicAccess?: MacieBlockPublicAccess;

}

/**
 * Converts an object of type 'MacieAccountLevelPermissions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieAccountLevelPermissions(obj: MacieAccountLevelPermissions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'blockPublicAccess': toJson_MacieBlockPublicAccess(obj.blockPublicAccess),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieBucketLevelPermissions
 */
export interface MacieBucketLevelPermissions {
  /**
   * @schema MacieBucketLevelPermissions#accessControlList
   */
  readonly accessControlList?: MacieAccessControlList;

  /**
   * @schema MacieBucketLevelPermissions#blockPublicAccess
   */
  readonly blockPublicAccess?: MacieBlockPublicAccess;

  /**
   * @schema MacieBucketLevelPermissions#bucketPolicy
   */
  readonly bucketPolicy?: MacieBucketPolicy;

}

/**
 * Converts an object of type 'MacieBucketLevelPermissions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieBucketLevelPermissions(obj: MacieBucketLevelPermissions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accessControlList': toJson_MacieAccessControlList(obj.accessControlList),
    'blockPublicAccess': toJson_MacieBlockPublicAccess(obj.blockPublicAccess),
    'bucketPolicy': toJson_MacieBucketPolicy(obj.bucketPolicy),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieCustomDataIdentifiers
 */
export interface MacieCustomDataIdentifiers {
  /**
   * @schema MacieCustomDataIdentifiers#detections
   */
  readonly detections?: MacieCustomDetection[];

  /**
   * @schema MacieCustomDataIdentifiers#totalCount
   */
  readonly totalCount?: number;

}

/**
 * Converts an object of type 'MacieCustomDataIdentifiers' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieCustomDataIdentifiers(obj: MacieCustomDataIdentifiers | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'detections': obj.detections?.map(y => toJson_MacieCustomDetection(y)),
    'totalCount': obj.totalCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieSensitiveDataItem
 */
export interface MacieSensitiveDataItem {
  /**
   * @schema MacieSensitiveDataItem#category
   */
  readonly category?: string;

  /**
   * @schema MacieSensitiveDataItem#detections
   */
  readonly detections?: MacieDefaultDetection[];

  /**
   * @schema MacieSensitiveDataItem#totalCount
   */
  readonly totalCount?: number;

}

/**
 * Converts an object of type 'MacieSensitiveDataItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieSensitiveDataItem(obj: MacieSensitiveDataItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'category': obj.category,
    'detections': obj.detections?.map(y => toJson_MacieDefaultDetection(y)),
    'totalCount': obj.totalCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieClassificationResultStatus
 */
export interface MacieClassificationResultStatus {
  /**
   * @schema MacieClassificationResultStatus#code
   */
  readonly code?: string;

  /**
   * @schema MacieClassificationResultStatus#reason
   */
  readonly reason?: string;

}

/**
 * Converts an object of type 'MacieClassificationResultStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieClassificationResultStatus(obj: MacieClassificationResultStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'code': obj.code,
    'reason': obj.reason,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieApiCallDetails
 */
export interface MacieApiCallDetails {
  /**
   * @schema MacieApiCallDetails#api
   */
  readonly api?: string;

  /**
   * @schema MacieApiCallDetails#apiServiceName
   */
  readonly apiServiceName?: string;

  /**
   * @schema MacieApiCallDetails#firstSeen
   */
  readonly firstSeen?: string;

  /**
   * @schema MacieApiCallDetails#lastSeen
   */
  readonly lastSeen?: string;

}

/**
 * Converts an object of type 'MacieApiCallDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieApiCallDetails(obj: MacieApiCallDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'api': obj.api,
    'apiServiceName': obj.apiServiceName,
    'firstSeen': obj.firstSeen,
    'lastSeen': obj.lastSeen,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieDomainDetails
 */
export interface MacieDomainDetails {
  /**
   * @schema MacieDomainDetails#domainName
   */
  readonly domainName?: string;

}

/**
 * Converts an object of type 'MacieDomainDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieDomainDetails(obj: MacieDomainDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domainName': obj.domainName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieIpAddressDetails
 */
export interface MacieIpAddressDetails {
  /**
   * @schema MacieIpAddressDetails#ipAddressV4
   */
  readonly ipAddressV4?: string;

  /**
   * @schema MacieIpAddressDetails#ipCity
   */
  readonly ipCity?: MacieIpCity;

  /**
   * @schema MacieIpAddressDetails#ipCountry
   */
  readonly ipCountry?: MacieIpCountry;

  /**
   * @schema MacieIpAddressDetails#ipGeoLocation
   */
  readonly ipGeoLocation?: MacieIpGeoLocation;

  /**
   * @schema MacieIpAddressDetails#ipOwner
   */
  readonly ipOwner?: MacieIpOwner;

}

/**
 * Converts an object of type 'MacieIpAddressDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieIpAddressDetails(obj: MacieIpAddressDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ipAddressV4': obj.ipAddressV4,
    'ipCity': toJson_MacieIpCity(obj.ipCity),
    'ipCountry': toJson_MacieIpCountry(obj.ipCountry),
    'ipGeoLocation': toJson_MacieIpGeoLocation(obj.ipGeoLocation),
    'ipOwner': toJson_MacieIpOwner(obj.ipOwner),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieUserIdentity
 */
export interface MacieUserIdentity {
  /**
   * @schema MacieUserIdentity#assumedRole
   */
  readonly assumedRole?: MacieAssumedRole;

  /**
   * @schema MacieUserIdentity#awsAccount
   */
  readonly awsAccount?: MacieAwsAccount;

  /**
   * @schema MacieUserIdentity#awsService
   */
  readonly awsService?: MacieAwsService;

  /**
   * @schema MacieUserIdentity#federatedUser
   */
  readonly federatedUser?: MacieFederatedUser;

  /**
   * @schema MacieUserIdentity#iamUser
   */
  readonly iamUser?: MacieIamUser;

  /**
   * @schema MacieUserIdentity#root
   */
  readonly root?: MacieUserIdentityRoot;

  /**
   * @schema MacieUserIdentity#type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'MacieUserIdentity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieUserIdentity(obj: MacieUserIdentity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assumedRole': toJson_MacieAssumedRole(obj.assumedRole),
    'awsAccount': toJson_MacieAwsAccount(obj.awsAccount),
    'awsService': toJson_MacieAwsService(obj.awsService),
    'federatedUser': toJson_MacieFederatedUser(obj.federatedUser),
    'iamUser': toJson_MacieIamUser(obj.iamUser),
    'root': toJson_MacieUserIdentityRoot(obj.root),
    'type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieServerSideEncryption
 */
export interface MacieServerSideEncryption {
  /**
   * @schema MacieServerSideEncryption#encryptionType
   */
  readonly encryptionType?: string;

  /**
   * @schema MacieServerSideEncryption#kmsMasterKeyId
   */
  readonly kmsMasterKeyId?: string;

}

/**
 * Converts an object of type 'MacieServerSideEncryption' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieServerSideEncryption(obj: MacieServerSideEncryption | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'encryptionType': obj.encryptionType,
    'kmsMasterKeyId': obj.kmsMasterKeyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieS3BucketOwner
 */
export interface MacieS3BucketOwner {
  /**
   * @schema MacieS3BucketOwner#displayName
   */
  readonly displayName?: string;

  /**
   * @schema MacieS3BucketOwner#id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'MacieS3BucketOwner' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieS3BucketOwner(obj: MacieS3BucketOwner | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'displayName': obj.displayName,
    'id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieSearchResourcesSimpleCriterion
 */
export interface MacieSearchResourcesSimpleCriterion {
  /**
   * @schema MacieSearchResourcesSimpleCriterion#comparator
   */
  readonly comparator?: string;

  /**
   * @schema MacieSearchResourcesSimpleCriterion#key
   */
  readonly key?: string;

  /**
   * @schema MacieSearchResourcesSimpleCriterion#values
   */
  readonly values?: string[];

}

/**
 * Converts an object of type 'MacieSearchResourcesSimpleCriterion' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieSearchResourcesSimpleCriterion(obj: MacieSearchResourcesSimpleCriterion | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'comparator': obj.comparator,
    'key': obj.key,
    'values': obj.values?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieSearchResourcesTagCriterion
 */
export interface MacieSearchResourcesTagCriterion {
  /**
   * @schema MacieSearchResourcesTagCriterion#comparator
   */
  readonly comparator?: string;

  /**
   * @schema MacieSearchResourcesTagCriterion#tagValues
   */
  readonly tagValues?: MacieSearchResourcesTagCriterionPair[];

}

/**
 * Converts an object of type 'MacieSearchResourcesTagCriterion' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieSearchResourcesTagCriterion(obj: MacieSearchResourcesTagCriterion | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'comparator': obj.comparator,
    'tagValues': obj.tagValues?.map(y => toJson_MacieSearchResourcesTagCriterionPair(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieSimpleScopeTerm
 */
export interface MacieSimpleScopeTerm {
  /**
   * @schema MacieSimpleScopeTerm#comparator
   */
  readonly comparator?: string;

  /**
   * @schema MacieSimpleScopeTerm#key
   */
  readonly key?: string;

  /**
   * @schema MacieSimpleScopeTerm#values
   */
  readonly values?: string[];

}

/**
 * Converts an object of type 'MacieSimpleScopeTerm' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieSimpleScopeTerm(obj: MacieSimpleScopeTerm | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'comparator': obj.comparator,
    'key': obj.key,
    'values': obj.values?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieTagScopeTerm
 */
export interface MacieTagScopeTerm {
  /**
   * @schema MacieTagScopeTerm#comparator
   */
  readonly comparator?: string;

  /**
   * @schema MacieTagScopeTerm#key
   */
  readonly key?: string;

  /**
   * @schema MacieTagScopeTerm#tagValues
   */
  readonly tagValues?: MacieTagValuePair[];

  /**
   * @schema MacieTagScopeTerm#target
   */
  readonly target?: string;

}

/**
 * Converts an object of type 'MacieTagScopeTerm' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieTagScopeTerm(obj: MacieTagScopeTerm | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'comparator': obj.comparator,
    'key': obj.key,
    'tagValues': obj.tagValues?.map(y => toJson_MacieTagValuePair(y)),
    'target': obj.target,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieSimpleCriterionForJob
 */
export interface MacieSimpleCriterionForJob {
  /**
   * @schema MacieSimpleCriterionForJob#comparator
   */
  readonly comparator?: string;

  /**
   * @schema MacieSimpleCriterionForJob#key
   */
  readonly key?: string;

  /**
   * @schema MacieSimpleCriterionForJob#values
   */
  readonly values?: string[];

}

/**
 * Converts an object of type 'MacieSimpleCriterionForJob' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieSimpleCriterionForJob(obj: MacieSimpleCriterionForJob | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'comparator': obj.comparator,
    'key': obj.key,
    'values': obj.values?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieTagCriterionForJob
 */
export interface MacieTagCriterionForJob {
  /**
   * @schema MacieTagCriterionForJob#comparator
   */
  readonly comparator?: string;

  /**
   * @schema MacieTagCriterionForJob#tagValues
   */
  readonly tagValues?: MacieTagCriterionPairForJob[];

}

/**
 * Converts an object of type 'MacieTagCriterionForJob' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieTagCriterionForJob(obj: MacieTagCriterionForJob | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'comparator': obj.comparator,
    'tagValues': obj.tagValues?.map(y => toJson_MacieTagCriterionPairForJob(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieBlockPublicAccess
 */
export interface MacieBlockPublicAccess {
  /**
   * @schema MacieBlockPublicAccess#blockPublicAcls
   */
  readonly blockPublicAcls?: boolean;

  /**
   * @schema MacieBlockPublicAccess#blockPublicPolicy
   */
  readonly blockPublicPolicy?: boolean;

  /**
   * @schema MacieBlockPublicAccess#ignorePublicAcls
   */
  readonly ignorePublicAcls?: boolean;

  /**
   * @schema MacieBlockPublicAccess#restrictPublicBuckets
   */
  readonly restrictPublicBuckets?: boolean;

}

/**
 * Converts an object of type 'MacieBlockPublicAccess' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieBlockPublicAccess(obj: MacieBlockPublicAccess | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'blockPublicAcls': obj.blockPublicAcls,
    'blockPublicPolicy': obj.blockPublicPolicy,
    'ignorePublicAcls': obj.ignorePublicAcls,
    'restrictPublicBuckets': obj.restrictPublicBuckets,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieAccessControlList
 */
export interface MacieAccessControlList {
  /**
   * @schema MacieAccessControlList#allowsPublicReadAccess
   */
  readonly allowsPublicReadAccess?: boolean;

  /**
   * @schema MacieAccessControlList#allowsPublicWriteAccess
   */
  readonly allowsPublicWriteAccess?: boolean;

}

/**
 * Converts an object of type 'MacieAccessControlList' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieAccessControlList(obj: MacieAccessControlList | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'allowsPublicReadAccess': obj.allowsPublicReadAccess,
    'allowsPublicWriteAccess': obj.allowsPublicWriteAccess,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieBucketPolicy
 */
export interface MacieBucketPolicy {
  /**
   * @schema MacieBucketPolicy#allowsPublicReadAccess
   */
  readonly allowsPublicReadAccess?: boolean;

  /**
   * @schema MacieBucketPolicy#allowsPublicWriteAccess
   */
  readonly allowsPublicWriteAccess?: boolean;

}

/**
 * Converts an object of type 'MacieBucketPolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieBucketPolicy(obj: MacieBucketPolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'allowsPublicReadAccess': obj.allowsPublicReadAccess,
    'allowsPublicWriteAccess': obj.allowsPublicWriteAccess,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieCustomDetection
 */
export interface MacieCustomDetection {
  /**
   * @schema MacieCustomDetection#arn
   */
  readonly arn?: string;

  /**
   * @schema MacieCustomDetection#count
   */
  readonly count?: number;

  /**
   * @schema MacieCustomDetection#name
   */
  readonly name?: string;

  /**
   * @schema MacieCustomDetection#occurrences
   */
  readonly occurrences?: MacieOccurrences;

}

/**
 * Converts an object of type 'MacieCustomDetection' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieCustomDetection(obj: MacieCustomDetection | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'count': obj.count,
    'name': obj.name,
    'occurrences': toJson_MacieOccurrences(obj.occurrences),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieDefaultDetection
 */
export interface MacieDefaultDetection {
  /**
   * @schema MacieDefaultDetection#count
   */
  readonly count?: number;

  /**
   * @schema MacieDefaultDetection#occurrences
   */
  readonly occurrences?: MacieOccurrences;

  /**
   * @schema MacieDefaultDetection#type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'MacieDefaultDetection' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieDefaultDetection(obj: MacieDefaultDetection | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'count': obj.count,
    'occurrences': toJson_MacieOccurrences(obj.occurrences),
    'type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieIpCity
 */
export interface MacieIpCity {
  /**
   * @schema MacieIpCity#name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'MacieIpCity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieIpCity(obj: MacieIpCity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieIpCountry
 */
export interface MacieIpCountry {
  /**
   * @schema MacieIpCountry#code
   */
  readonly code?: string;

  /**
   * @schema MacieIpCountry#name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'MacieIpCountry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieIpCountry(obj: MacieIpCountry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'code': obj.code,
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieIpGeoLocation
 */
export interface MacieIpGeoLocation {
  /**
   * @schema MacieIpGeoLocation#lat
   */
  readonly lat?: number;

  /**
   * @schema MacieIpGeoLocation#lon
   */
  readonly lon?: number;

}

/**
 * Converts an object of type 'MacieIpGeoLocation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieIpGeoLocation(obj: MacieIpGeoLocation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'lat': obj.lat,
    'lon': obj.lon,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieIpOwner
 */
export interface MacieIpOwner {
  /**
   * @schema MacieIpOwner#asn
   */
  readonly asn?: string;

  /**
   * @schema MacieIpOwner#asnOrg
   */
  readonly asnOrg?: string;

  /**
   * @schema MacieIpOwner#isp
   */
  readonly isp?: string;

  /**
   * @schema MacieIpOwner#org
   */
  readonly org?: string;

}

/**
 * Converts an object of type 'MacieIpOwner' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieIpOwner(obj: MacieIpOwner | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'asn': obj.asn,
    'asnOrg': obj.asnOrg,
    'isp': obj.isp,
    'org': obj.org,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieAssumedRole
 */
export interface MacieAssumedRole {
  /**
   * @schema MacieAssumedRole#accessKeyId
   */
  readonly accessKeyId?: string;

  /**
   * @schema MacieAssumedRole#accountId
   */
  readonly accountId?: string;

  /**
   * @schema MacieAssumedRole#arn
   */
  readonly arn?: string;

  /**
   * @schema MacieAssumedRole#principalId
   */
  readonly principalId?: string;

  /**
   * @schema MacieAssumedRole#sessionContext
   */
  readonly sessionContext?: MacieSessionContext;

}

/**
 * Converts an object of type 'MacieAssumedRole' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieAssumedRole(obj: MacieAssumedRole | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accessKeyId': obj.accessKeyId,
    'accountId': obj.accountId,
    'arn': obj.arn,
    'principalId': obj.principalId,
    'sessionContext': toJson_MacieSessionContext(obj.sessionContext),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieAwsAccount
 */
export interface MacieAwsAccount {
  /**
   * @schema MacieAwsAccount#accountId
   */
  readonly accountId?: string;

  /**
   * @schema MacieAwsAccount#principalId
   */
  readonly principalId?: string;

}

/**
 * Converts an object of type 'MacieAwsAccount' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieAwsAccount(obj: MacieAwsAccount | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountId': obj.accountId,
    'principalId': obj.principalId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieAwsService
 */
export interface MacieAwsService {
  /**
   * @schema MacieAwsService#invokedBy
   */
  readonly invokedBy?: string;

}

/**
 * Converts an object of type 'MacieAwsService' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieAwsService(obj: MacieAwsService | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'invokedBy': obj.invokedBy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieFederatedUser
 */
export interface MacieFederatedUser {
  /**
   * @schema MacieFederatedUser#accessKeyId
   */
  readonly accessKeyId?: string;

  /**
   * @schema MacieFederatedUser#accountId
   */
  readonly accountId?: string;

  /**
   * @schema MacieFederatedUser#arn
   */
  readonly arn?: string;

  /**
   * @schema MacieFederatedUser#principalId
   */
  readonly principalId?: string;

  /**
   * @schema MacieFederatedUser#sessionContext
   */
  readonly sessionContext?: MacieSessionContext;

}

/**
 * Converts an object of type 'MacieFederatedUser' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieFederatedUser(obj: MacieFederatedUser | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accessKeyId': obj.accessKeyId,
    'accountId': obj.accountId,
    'arn': obj.arn,
    'principalId': obj.principalId,
    'sessionContext': toJson_MacieSessionContext(obj.sessionContext),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieIamUser
 */
export interface MacieIamUser {
  /**
   * @schema MacieIamUser#accountId
   */
  readonly accountId?: string;

  /**
   * @schema MacieIamUser#arn
   */
  readonly arn?: string;

  /**
   * @schema MacieIamUser#principalId
   */
  readonly principalId?: string;

  /**
   * @schema MacieIamUser#userName
   */
  readonly userName?: string;

}

/**
 * Converts an object of type 'MacieIamUser' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieIamUser(obj: MacieIamUser | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountId': obj.accountId,
    'arn': obj.arn,
    'principalId': obj.principalId,
    'userName': obj.userName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieUserIdentityRoot
 */
export interface MacieUserIdentityRoot {
  /**
   * @schema MacieUserIdentityRoot#accountId
   */
  readonly accountId?: string;

  /**
   * @schema MacieUserIdentityRoot#arn
   */
  readonly arn?: string;

  /**
   * @schema MacieUserIdentityRoot#principalId
   */
  readonly principalId?: string;

}

/**
 * Converts an object of type 'MacieUserIdentityRoot' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieUserIdentityRoot(obj: MacieUserIdentityRoot | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountId': obj.accountId,
    'arn': obj.arn,
    'principalId': obj.principalId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieSearchResourcesTagCriterionPair
 */
export interface MacieSearchResourcesTagCriterionPair {
  /**
   * @schema MacieSearchResourcesTagCriterionPair#key
   */
  readonly key?: string;

  /**
   * @schema MacieSearchResourcesTagCriterionPair#value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'MacieSearchResourcesTagCriterionPair' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieSearchResourcesTagCriterionPair(obj: MacieSearchResourcesTagCriterionPair | undefined): Record<string, any> | undefined {
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
 * @schema MacieTagValuePair
 */
export interface MacieTagValuePair {
  /**
   * @schema MacieTagValuePair#key
   */
  readonly key?: string;

  /**
   * @schema MacieTagValuePair#value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'MacieTagValuePair' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieTagValuePair(obj: MacieTagValuePair | undefined): Record<string, any> | undefined {
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
 * @schema MacieTagCriterionPairForJob
 */
export interface MacieTagCriterionPairForJob {
  /**
   * @schema MacieTagCriterionPairForJob#key
   */
  readonly key?: string;

  /**
   * @schema MacieTagCriterionPairForJob#value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'MacieTagCriterionPairForJob' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieTagCriterionPairForJob(obj: MacieTagCriterionPairForJob | undefined): Record<string, any> | undefined {
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
 * @schema MacieOccurrences
 */
export interface MacieOccurrences {
  /**
   * @schema MacieOccurrences#cells
   */
  readonly cells?: MacieCell[];

  /**
   * @schema MacieOccurrences#lineRanges
   */
  readonly lineRanges?: MacieRange[];

  /**
   * @schema MacieOccurrences#offsetRanges
   */
  readonly offsetRanges?: MacieRange[];

  /**
   * @schema MacieOccurrences#pages
   */
  readonly pages?: MaciePage[];

  /**
   * @schema MacieOccurrences#records
   */
  readonly records?: MacieRecord[];

}

/**
 * Converts an object of type 'MacieOccurrences' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieOccurrences(obj: MacieOccurrences | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'cells': obj.cells?.map(y => toJson_MacieCell(y)),
    'lineRanges': obj.lineRanges?.map(y => toJson_MacieRange(y)),
    'offsetRanges': obj.offsetRanges?.map(y => toJson_MacieRange(y)),
    'pages': obj.pages?.map(y => toJson_MaciePage(y)),
    'records': obj.records?.map(y => toJson_MacieRecord(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieSessionContext
 */
export interface MacieSessionContext {
  /**
   * @schema MacieSessionContext#attributes
   */
  readonly attributes?: MacieSessionContextAttributes;

  /**
   * @schema MacieSessionContext#sessionIssuer
   */
  readonly sessionIssuer?: MacieSessionIssuer;

}

/**
 * Converts an object of type 'MacieSessionContext' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieSessionContext(obj: MacieSessionContext | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'attributes': toJson_MacieSessionContextAttributes(obj.attributes),
    'sessionIssuer': toJson_MacieSessionIssuer(obj.sessionIssuer),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieCell
 */
export interface MacieCell {
  /**
   * @schema MacieCell#cellReference
   */
  readonly cellReference?: string;

  /**
   * @schema MacieCell#column
   */
  readonly column?: number;

  /**
   * @schema MacieCell#columnName
   */
  readonly columnName?: string;

  /**
   * @schema MacieCell#row
   */
  readonly row?: number;

}

/**
 * Converts an object of type 'MacieCell' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieCell(obj: MacieCell | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'cellReference': obj.cellReference,
    'column': obj.column,
    'columnName': obj.columnName,
    'row': obj.row,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieRange
 */
export interface MacieRange {
  /**
   * @schema MacieRange#end
   */
  readonly end?: number;

  /**
   * @schema MacieRange#start
   */
  readonly start?: number;

  /**
   * @schema MacieRange#startColumn
   */
  readonly startColumn?: number;

}

/**
 * Converts an object of type 'MacieRange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieRange(obj: MacieRange | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'end': obj.end,
    'start': obj.start,
    'startColumn': obj.startColumn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MaciePage
 */
export interface MaciePage {
  /**
   * @schema MaciePage#lineRange
   */
  readonly lineRange?: MacieRange;

  /**
   * @schema MaciePage#offsetRange
   */
  readonly offsetRange?: MacieRange;

  /**
   * @schema MaciePage#pageNumber
   */
  readonly pageNumber?: number;

}

/**
 * Converts an object of type 'MaciePage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MaciePage(obj: MaciePage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'lineRange': toJson_MacieRange(obj.lineRange),
    'offsetRange': toJson_MacieRange(obj.offsetRange),
    'pageNumber': obj.pageNumber,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieRecord
 */
export interface MacieRecord {
  /**
   * @schema MacieRecord#jsonPath
   */
  readonly jsonPath?: string;

  /**
   * @schema MacieRecord#recordIndex
   */
  readonly recordIndex?: number;

}

/**
 * Converts an object of type 'MacieRecord' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieRecord(obj: MacieRecord | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jsonPath': obj.jsonPath,
    'recordIndex': obj.recordIndex,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieSessionContextAttributes
 */
export interface MacieSessionContextAttributes {
  /**
   * @schema MacieSessionContextAttributes#creationDate
   */
  readonly creationDate?: string;

  /**
   * @schema MacieSessionContextAttributes#mfaAuthenticated
   */
  readonly mfaAuthenticated?: boolean;

}

/**
 * Converts an object of type 'MacieSessionContextAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieSessionContextAttributes(obj: MacieSessionContextAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'creationDate': obj.creationDate,
    'mfaAuthenticated': obj.mfaAuthenticated,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MacieSessionIssuer
 */
export interface MacieSessionIssuer {
  /**
   * @schema MacieSessionIssuer#accountId
   */
  readonly accountId?: string;

  /**
   * @schema MacieSessionIssuer#arn
   */
  readonly arn?: string;

  /**
   * @schema MacieSessionIssuer#principalId
   */
  readonly principalId?: string;

  /**
   * @schema MacieSessionIssuer#type
   */
  readonly type?: string;

  /**
   * @schema MacieSessionIssuer#userName
   */
  readonly userName?: string;

}

/**
 * Converts an object of type 'MacieSessionIssuer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MacieSessionIssuer(obj: MacieSessionIssuer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountId': obj.accountId,
    'arn': obj.arn,
    'principalId': obj.principalId,
    'type': obj.type,
    'userName': obj.userName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
