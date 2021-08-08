/**
 * @schema Macie2AcceptInvitationRequest
 */
export interface Macie2AcceptInvitationRequest {
  /**
   * @schema Macie2AcceptInvitationRequest#administratorAccountId
   */
  readonly administratorAccountId?: string;

  /**
   * @schema Macie2AcceptInvitationRequest#invitationId
   */
  readonly invitationId: string;

  /**
   * @schema Macie2AcceptInvitationRequest#masterAccount
   */
  readonly masterAccount?: string;

}

/**
 * Converts an object of type 'Macie2AcceptInvitationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2AcceptInvitationRequest(obj: Macie2AcceptInvitationRequest | undefined): Record<string, any> | undefined {
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
 * @schema Macie2AcceptInvitationResponse
 */
export interface Macie2AcceptInvitationResponse {
}

/**
 * Converts an object of type 'Macie2AcceptInvitationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2AcceptInvitationResponse(obj: Macie2AcceptInvitationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2BatchGetCustomDataIdentifiersRequest
 */
export interface Macie2BatchGetCustomDataIdentifiersRequest {
  /**
   * @schema Macie2BatchGetCustomDataIdentifiersRequest#ids
   */
  readonly ids?: string[];

}

/**
 * Converts an object of type 'Macie2BatchGetCustomDataIdentifiersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2BatchGetCustomDataIdentifiersRequest(obj: Macie2BatchGetCustomDataIdentifiersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ids': obj.ids?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2BatchGetCustomDataIdentifiersResponse
 */
export interface Macie2BatchGetCustomDataIdentifiersResponse {
  /**
   * @schema Macie2BatchGetCustomDataIdentifiersResponse#customDataIdentifiers
   */
  readonly customDataIdentifiers?: Macie2BatchGetCustomDataIdentifierSummary[];

  /**
   * @schema Macie2BatchGetCustomDataIdentifiersResponse#notFoundIdentifierIds
   */
  readonly notFoundIdentifierIds?: string[];

}

/**
 * Converts an object of type 'Macie2BatchGetCustomDataIdentifiersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2BatchGetCustomDataIdentifiersResponse(obj: Macie2BatchGetCustomDataIdentifiersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'customDataIdentifiers': obj.customDataIdentifiers?.map(y => toJson_Macie2BatchGetCustomDataIdentifierSummary(y)),
    'notFoundIdentifierIds': obj.notFoundIdentifierIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2CreateClassificationJobRequest
 */
export interface Macie2CreateClassificationJobRequest {
  /**
   * @schema Macie2CreateClassificationJobRequest#clientToken
   */
  readonly clientToken: string;

  /**
   * @schema Macie2CreateClassificationJobRequest#customDataIdentifierIds
   */
  readonly customDataIdentifierIds?: string[];

  /**
   * @schema Macie2CreateClassificationJobRequest#description
   */
  readonly description?: string;

  /**
   * @schema Macie2CreateClassificationJobRequest#initialRun
   */
  readonly initialRun?: boolean;

  /**
   * @schema Macie2CreateClassificationJobRequest#jobType
   */
  readonly jobType: string;

  /**
   * @schema Macie2CreateClassificationJobRequest#name
   */
  readonly name: string;

  /**
   * @schema Macie2CreateClassificationJobRequest#s3JobDefinition
   */
  readonly s3JobDefinition: Macie2S3JobDefinition;

  /**
   * @schema Macie2CreateClassificationJobRequest#samplingPercentage
   */
  readonly samplingPercentage?: number;

  /**
   * @schema Macie2CreateClassificationJobRequest#scheduleFrequency
   */
  readonly scheduleFrequency?: Macie2JobScheduleFrequency;

  /**
   * @schema Macie2CreateClassificationJobRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'Macie2CreateClassificationJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2CreateClassificationJobRequest(obj: Macie2CreateClassificationJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientToken': obj.clientToken,
    'customDataIdentifierIds': obj.customDataIdentifierIds?.map(y => y),
    'description': obj.description,
    'initialRun': obj.initialRun,
    'jobType': obj.jobType,
    'name': obj.name,
    's3JobDefinition': toJson_Macie2S3JobDefinition(obj.s3JobDefinition),
    'samplingPercentage': obj.samplingPercentage,
    'scheduleFrequency': toJson_Macie2JobScheduleFrequency(obj.scheduleFrequency),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2CreateClassificationJobResponse
 */
export interface Macie2CreateClassificationJobResponse {
  /**
   * @schema Macie2CreateClassificationJobResponse#jobArn
   */
  readonly jobArn?: string;

  /**
   * @schema Macie2CreateClassificationJobResponse#jobId
   */
  readonly jobId?: string;

}

/**
 * Converts an object of type 'Macie2CreateClassificationJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2CreateClassificationJobResponse(obj: Macie2CreateClassificationJobResponse | undefined): Record<string, any> | undefined {
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
 * @schema Macie2CreateCustomDataIdentifierRequest
 */
export interface Macie2CreateCustomDataIdentifierRequest {
  /**
   * @schema Macie2CreateCustomDataIdentifierRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema Macie2CreateCustomDataIdentifierRequest#description
   */
  readonly description?: string;

  /**
   * @schema Macie2CreateCustomDataIdentifierRequest#ignoreWords
   */
  readonly ignoreWords?: string[];

  /**
   * @schema Macie2CreateCustomDataIdentifierRequest#keywords
   */
  readonly keywords?: string[];

  /**
   * @schema Macie2CreateCustomDataIdentifierRequest#maximumMatchDistance
   */
  readonly maximumMatchDistance?: number;

  /**
   * @schema Macie2CreateCustomDataIdentifierRequest#name
   */
  readonly name?: string;

  /**
   * @schema Macie2CreateCustomDataIdentifierRequest#regex
   */
  readonly regex?: string;

  /**
   * @schema Macie2CreateCustomDataIdentifierRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'Macie2CreateCustomDataIdentifierRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2CreateCustomDataIdentifierRequest(obj: Macie2CreateCustomDataIdentifierRequest | undefined): Record<string, any> | undefined {
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
 * @schema Macie2CreateCustomDataIdentifierResponse
 */
export interface Macie2CreateCustomDataIdentifierResponse {
  /**
   * @schema Macie2CreateCustomDataIdentifierResponse#customDataIdentifierId
   */
  readonly customDataIdentifierId?: string;

}

/**
 * Converts an object of type 'Macie2CreateCustomDataIdentifierResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2CreateCustomDataIdentifierResponse(obj: Macie2CreateCustomDataIdentifierResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'customDataIdentifierId': obj.customDataIdentifierId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2CreateFindingsFilterRequest
 */
export interface Macie2CreateFindingsFilterRequest {
  /**
   * @schema Macie2CreateFindingsFilterRequest#action
   */
  readonly action: string;

  /**
   * @schema Macie2CreateFindingsFilterRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema Macie2CreateFindingsFilterRequest#description
   */
  readonly description?: string;

  /**
   * @schema Macie2CreateFindingsFilterRequest#findingCriteria
   */
  readonly findingCriteria: Macie2FindingCriteria;

  /**
   * @schema Macie2CreateFindingsFilterRequest#name
   */
  readonly name: string;

  /**
   * @schema Macie2CreateFindingsFilterRequest#position
   */
  readonly position?: number;

  /**
   * @schema Macie2CreateFindingsFilterRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'Macie2CreateFindingsFilterRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2CreateFindingsFilterRequest(obj: Macie2CreateFindingsFilterRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'action': obj.action,
    'clientToken': obj.clientToken,
    'description': obj.description,
    'findingCriteria': toJson_Macie2FindingCriteria(obj.findingCriteria),
    'name': obj.name,
    'position': obj.position,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2CreateFindingsFilterResponse
 */
export interface Macie2CreateFindingsFilterResponse {
  /**
   * @schema Macie2CreateFindingsFilterResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema Macie2CreateFindingsFilterResponse#id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'Macie2CreateFindingsFilterResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2CreateFindingsFilterResponse(obj: Macie2CreateFindingsFilterResponse | undefined): Record<string, any> | undefined {
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
 * @schema Macie2CreateInvitationsRequest
 */
export interface Macie2CreateInvitationsRequest {
  /**
   * @schema Macie2CreateInvitationsRequest#accountIds
   */
  readonly accountIds: string[];

  /**
   * @schema Macie2CreateInvitationsRequest#disableEmailNotification
   */
  readonly disableEmailNotification?: boolean;

  /**
   * @schema Macie2CreateInvitationsRequest#message
   */
  readonly message?: string;

}

/**
 * Converts an object of type 'Macie2CreateInvitationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2CreateInvitationsRequest(obj: Macie2CreateInvitationsRequest | undefined): Record<string, any> | undefined {
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
 * @schema Macie2CreateInvitationsResponse
 */
export interface Macie2CreateInvitationsResponse {
  /**
   * @schema Macie2CreateInvitationsResponse#unprocessedAccounts
   */
  readonly unprocessedAccounts?: Macie2UnprocessedAccount[];

}

/**
 * Converts an object of type 'Macie2CreateInvitationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2CreateInvitationsResponse(obj: Macie2CreateInvitationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'unprocessedAccounts': obj.unprocessedAccounts?.map(y => toJson_Macie2UnprocessedAccount(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2CreateMemberRequest
 */
export interface Macie2CreateMemberRequest {
  /**
   * @schema Macie2CreateMemberRequest#account
   */
  readonly account: Macie2AccountDetail;

  /**
   * @schema Macie2CreateMemberRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'Macie2CreateMemberRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2CreateMemberRequest(obj: Macie2CreateMemberRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'account': toJson_Macie2AccountDetail(obj.account),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2CreateMemberResponse
 */
export interface Macie2CreateMemberResponse {
  /**
   * @schema Macie2CreateMemberResponse#arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'Macie2CreateMemberResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2CreateMemberResponse(obj: Macie2CreateMemberResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2CreateSampleFindingsRequest
 */
export interface Macie2CreateSampleFindingsRequest {
  /**
   * @schema Macie2CreateSampleFindingsRequest#findingTypes
   */
  readonly findingTypes?: string[];

}

/**
 * Converts an object of type 'Macie2CreateSampleFindingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2CreateSampleFindingsRequest(obj: Macie2CreateSampleFindingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'findingTypes': obj.findingTypes?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2CreateSampleFindingsResponse
 */
export interface Macie2CreateSampleFindingsResponse {
}

/**
 * Converts an object of type 'Macie2CreateSampleFindingsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2CreateSampleFindingsResponse(obj: Macie2CreateSampleFindingsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2DeclineInvitationsRequest
 */
export interface Macie2DeclineInvitationsRequest {
  /**
   * @schema Macie2DeclineInvitationsRequest#accountIds
   */
  readonly accountIds: string[];

}

/**
 * Converts an object of type 'Macie2DeclineInvitationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2DeclineInvitationsRequest(obj: Macie2DeclineInvitationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountIds': obj.accountIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2DeclineInvitationsResponse
 */
export interface Macie2DeclineInvitationsResponse {
  /**
   * @schema Macie2DeclineInvitationsResponse#unprocessedAccounts
   */
  readonly unprocessedAccounts?: Macie2UnprocessedAccount[];

}

/**
 * Converts an object of type 'Macie2DeclineInvitationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2DeclineInvitationsResponse(obj: Macie2DeclineInvitationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'unprocessedAccounts': obj.unprocessedAccounts?.map(y => toJson_Macie2UnprocessedAccount(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2DeleteCustomDataIdentifierRequest
 */
export interface Macie2DeleteCustomDataIdentifierRequest {
  /**
   * @schema Macie2DeleteCustomDataIdentifierRequest#id
   */
  readonly id: string;

}

/**
 * Converts an object of type 'Macie2DeleteCustomDataIdentifierRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2DeleteCustomDataIdentifierRequest(obj: Macie2DeleteCustomDataIdentifierRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2DeleteCustomDataIdentifierResponse
 */
export interface Macie2DeleteCustomDataIdentifierResponse {
}

/**
 * Converts an object of type 'Macie2DeleteCustomDataIdentifierResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2DeleteCustomDataIdentifierResponse(obj: Macie2DeleteCustomDataIdentifierResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2DeleteFindingsFilterRequest
 */
export interface Macie2DeleteFindingsFilterRequest {
  /**
   * @schema Macie2DeleteFindingsFilterRequest#id
   */
  readonly id: string;

}

/**
 * Converts an object of type 'Macie2DeleteFindingsFilterRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2DeleteFindingsFilterRequest(obj: Macie2DeleteFindingsFilterRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2DeleteFindingsFilterResponse
 */
export interface Macie2DeleteFindingsFilterResponse {
}

/**
 * Converts an object of type 'Macie2DeleteFindingsFilterResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2DeleteFindingsFilterResponse(obj: Macie2DeleteFindingsFilterResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2DeleteInvitationsRequest
 */
export interface Macie2DeleteInvitationsRequest {
  /**
   * @schema Macie2DeleteInvitationsRequest#accountIds
   */
  readonly accountIds: string[];

}

/**
 * Converts an object of type 'Macie2DeleteInvitationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2DeleteInvitationsRequest(obj: Macie2DeleteInvitationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountIds': obj.accountIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2DeleteInvitationsResponse
 */
export interface Macie2DeleteInvitationsResponse {
  /**
   * @schema Macie2DeleteInvitationsResponse#unprocessedAccounts
   */
  readonly unprocessedAccounts?: Macie2UnprocessedAccount[];

}

/**
 * Converts an object of type 'Macie2DeleteInvitationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2DeleteInvitationsResponse(obj: Macie2DeleteInvitationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'unprocessedAccounts': obj.unprocessedAccounts?.map(y => toJson_Macie2UnprocessedAccount(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2DeleteMemberRequest
 */
export interface Macie2DeleteMemberRequest {
  /**
   * @schema Macie2DeleteMemberRequest#id
   */
  readonly id: string;

}

/**
 * Converts an object of type 'Macie2DeleteMemberRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2DeleteMemberRequest(obj: Macie2DeleteMemberRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2DeleteMemberResponse
 */
export interface Macie2DeleteMemberResponse {
}

/**
 * Converts an object of type 'Macie2DeleteMemberResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2DeleteMemberResponse(obj: Macie2DeleteMemberResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2DescribeBucketsRequest
 */
export interface Macie2DescribeBucketsRequest {
  /**
   * @schema Macie2DescribeBucketsRequest#criteria
   */
  readonly criteria?: { [key: string]: Macie2BucketCriteriaAdditionalProperties };

  /**
   * @schema Macie2DescribeBucketsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Macie2DescribeBucketsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Macie2DescribeBucketsRequest#sortCriteria
   */
  readonly sortCriteria?: Macie2BucketSortCriteria;

}

/**
 * Converts an object of type 'Macie2DescribeBucketsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2DescribeBucketsRequest(obj: Macie2DescribeBucketsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'criteria': ((obj.criteria) === undefined) ? undefined : (Object.entries(obj.criteria).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_Macie2BucketCriteriaAdditionalProperties(i[1]) }), {})),
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
    'sortCriteria': toJson_Macie2BucketSortCriteria(obj.sortCriteria),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2DescribeBucketsResponse
 */
export interface Macie2DescribeBucketsResponse {
  /**
   * @schema Macie2DescribeBucketsResponse#buckets
   */
  readonly buckets?: Macie2BucketMetadata[];

  /**
   * @schema Macie2DescribeBucketsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'Macie2DescribeBucketsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2DescribeBucketsResponse(obj: Macie2DescribeBucketsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'buckets': obj.buckets?.map(y => toJson_Macie2BucketMetadata(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2DescribeClassificationJobRequest
 */
export interface Macie2DescribeClassificationJobRequest {
  /**
   * @schema Macie2DescribeClassificationJobRequest#jobId
   */
  readonly jobId: string;

}

/**
 * Converts an object of type 'Macie2DescribeClassificationJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2DescribeClassificationJobRequest(obj: Macie2DescribeClassificationJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2DescribeClassificationJobResponse
 */
export interface Macie2DescribeClassificationJobResponse {
  /**
   * @schema Macie2DescribeClassificationJobResponse#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema Macie2DescribeClassificationJobResponse#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema Macie2DescribeClassificationJobResponse#customDataIdentifierIds
   */
  readonly customDataIdentifierIds?: string[];

  /**
   * @schema Macie2DescribeClassificationJobResponse#description
   */
  readonly description?: string;

  /**
   * @schema Macie2DescribeClassificationJobResponse#initialRun
   */
  readonly initialRun?: boolean;

  /**
   * @schema Macie2DescribeClassificationJobResponse#jobArn
   */
  readonly jobArn?: string;

  /**
   * @schema Macie2DescribeClassificationJobResponse#jobId
   */
  readonly jobId?: string;

  /**
   * @schema Macie2DescribeClassificationJobResponse#jobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema Macie2DescribeClassificationJobResponse#jobType
   */
  readonly jobType?: string;

  /**
   * @schema Macie2DescribeClassificationJobResponse#lastRunErrorStatus
   */
  readonly lastRunErrorStatus?: Macie2LastRunErrorStatus;

  /**
   * @schema Macie2DescribeClassificationJobResponse#lastRunTime
   */
  readonly lastRunTime?: string;

  /**
   * @schema Macie2DescribeClassificationJobResponse#name
   */
  readonly name?: string;

  /**
   * @schema Macie2DescribeClassificationJobResponse#s3JobDefinition
   */
  readonly s3JobDefinition?: Macie2S3JobDefinition;

  /**
   * @schema Macie2DescribeClassificationJobResponse#samplingPercentage
   */
  readonly samplingPercentage?: number;

  /**
   * @schema Macie2DescribeClassificationJobResponse#scheduleFrequency
   */
  readonly scheduleFrequency?: Macie2JobScheduleFrequency;

  /**
   * @schema Macie2DescribeClassificationJobResponse#statistics
   */
  readonly statistics?: Macie2Statistics;

  /**
   * @schema Macie2DescribeClassificationJobResponse#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema Macie2DescribeClassificationJobResponse#userPausedDetails
   */
  readonly userPausedDetails?: Macie2UserPausedDetails;

}

/**
 * Converts an object of type 'Macie2DescribeClassificationJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2DescribeClassificationJobResponse(obj: Macie2DescribeClassificationJobResponse | undefined): Record<string, any> | undefined {
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
    'lastRunErrorStatus': toJson_Macie2LastRunErrorStatus(obj.lastRunErrorStatus),
    'lastRunTime': obj.lastRunTime,
    'name': obj.name,
    's3JobDefinition': toJson_Macie2S3JobDefinition(obj.s3JobDefinition),
    'samplingPercentage': obj.samplingPercentage,
    'scheduleFrequency': toJson_Macie2JobScheduleFrequency(obj.scheduleFrequency),
    'statistics': toJson_Macie2Statistics(obj.statistics),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'userPausedDetails': toJson_Macie2UserPausedDetails(obj.userPausedDetails),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2DescribeOrganizationConfigurationRequest
 */
export interface Macie2DescribeOrganizationConfigurationRequest {
}

/**
 * Converts an object of type 'Macie2DescribeOrganizationConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2DescribeOrganizationConfigurationRequest(obj: Macie2DescribeOrganizationConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2DescribeOrganizationConfigurationResponse
 */
export interface Macie2DescribeOrganizationConfigurationResponse {
  /**
   * @schema Macie2DescribeOrganizationConfigurationResponse#autoEnable
   */
  readonly autoEnable?: boolean;

  /**
   * @schema Macie2DescribeOrganizationConfigurationResponse#maxAccountLimitReached
   */
  readonly maxAccountLimitReached?: boolean;

}

/**
 * Converts an object of type 'Macie2DescribeOrganizationConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2DescribeOrganizationConfigurationResponse(obj: Macie2DescribeOrganizationConfigurationResponse | undefined): Record<string, any> | undefined {
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
 * @schema Macie2DisableMacieRequest
 */
export interface Macie2DisableMacieRequest {
}

/**
 * Converts an object of type 'Macie2DisableMacieRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2DisableMacieRequest(obj: Macie2DisableMacieRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2DisableMacieResponse
 */
export interface Macie2DisableMacieResponse {
}

/**
 * Converts an object of type 'Macie2DisableMacieResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2DisableMacieResponse(obj: Macie2DisableMacieResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2DisableOrganizationAdminAccountRequest
 */
export interface Macie2DisableOrganizationAdminAccountRequest {
  /**
   * @schema Macie2DisableOrganizationAdminAccountRequest#adminAccountId
   */
  readonly adminAccountId: string;

}

/**
 * Converts an object of type 'Macie2DisableOrganizationAdminAccountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2DisableOrganizationAdminAccountRequest(obj: Macie2DisableOrganizationAdminAccountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'adminAccountId': obj.adminAccountId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2DisableOrganizationAdminAccountResponse
 */
export interface Macie2DisableOrganizationAdminAccountResponse {
}

/**
 * Converts an object of type 'Macie2DisableOrganizationAdminAccountResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2DisableOrganizationAdminAccountResponse(obj: Macie2DisableOrganizationAdminAccountResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2DisassociateFromAdministratorAccountRequest
 */
export interface Macie2DisassociateFromAdministratorAccountRequest {
}

/**
 * Converts an object of type 'Macie2DisassociateFromAdministratorAccountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2DisassociateFromAdministratorAccountRequest(obj: Macie2DisassociateFromAdministratorAccountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2DisassociateFromAdministratorAccountResponse
 */
export interface Macie2DisassociateFromAdministratorAccountResponse {
}

/**
 * Converts an object of type 'Macie2DisassociateFromAdministratorAccountResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2DisassociateFromAdministratorAccountResponse(obj: Macie2DisassociateFromAdministratorAccountResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2DisassociateFromMasterAccountRequest
 */
export interface Macie2DisassociateFromMasterAccountRequest {
}

/**
 * Converts an object of type 'Macie2DisassociateFromMasterAccountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2DisassociateFromMasterAccountRequest(obj: Macie2DisassociateFromMasterAccountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2DisassociateFromMasterAccountResponse
 */
export interface Macie2DisassociateFromMasterAccountResponse {
}

/**
 * Converts an object of type 'Macie2DisassociateFromMasterAccountResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2DisassociateFromMasterAccountResponse(obj: Macie2DisassociateFromMasterAccountResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2DisassociateMemberRequest
 */
export interface Macie2DisassociateMemberRequest {
  /**
   * @schema Macie2DisassociateMemberRequest#id
   */
  readonly id: string;

}

/**
 * Converts an object of type 'Macie2DisassociateMemberRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2DisassociateMemberRequest(obj: Macie2DisassociateMemberRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2DisassociateMemberResponse
 */
export interface Macie2DisassociateMemberResponse {
}

/**
 * Converts an object of type 'Macie2DisassociateMemberResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2DisassociateMemberResponse(obj: Macie2DisassociateMemberResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2EnableMacieRequest
 */
export interface Macie2EnableMacieRequest {
  /**
   * @schema Macie2EnableMacieRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema Macie2EnableMacieRequest#findingPublishingFrequency
   */
  readonly findingPublishingFrequency?: string;

  /**
   * @schema Macie2EnableMacieRequest#status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'Macie2EnableMacieRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2EnableMacieRequest(obj: Macie2EnableMacieRequest | undefined): Record<string, any> | undefined {
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
 * @schema Macie2EnableMacieResponse
 */
export interface Macie2EnableMacieResponse {
}

/**
 * Converts an object of type 'Macie2EnableMacieResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2EnableMacieResponse(obj: Macie2EnableMacieResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2EnableOrganizationAdminAccountRequest
 */
export interface Macie2EnableOrganizationAdminAccountRequest {
  /**
   * @schema Macie2EnableOrganizationAdminAccountRequest#adminAccountId
   */
  readonly adminAccountId: string;

  /**
   * @schema Macie2EnableOrganizationAdminAccountRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * Converts an object of type 'Macie2EnableOrganizationAdminAccountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2EnableOrganizationAdminAccountRequest(obj: Macie2EnableOrganizationAdminAccountRequest | undefined): Record<string, any> | undefined {
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
 * @schema Macie2EnableOrganizationAdminAccountResponse
 */
export interface Macie2EnableOrganizationAdminAccountResponse {
}

/**
 * Converts an object of type 'Macie2EnableOrganizationAdminAccountResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2EnableOrganizationAdminAccountResponse(obj: Macie2EnableOrganizationAdminAccountResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2GetAdministratorAccountRequest
 */
export interface Macie2GetAdministratorAccountRequest {
}

/**
 * Converts an object of type 'Macie2GetAdministratorAccountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2GetAdministratorAccountRequest(obj: Macie2GetAdministratorAccountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2GetAdministratorAccountResponse
 */
export interface Macie2GetAdministratorAccountResponse {
  /**
   * @schema Macie2GetAdministratorAccountResponse#administrator
   */
  readonly administrator?: Macie2Invitation;

}

/**
 * Converts an object of type 'Macie2GetAdministratorAccountResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2GetAdministratorAccountResponse(obj: Macie2GetAdministratorAccountResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'administrator': toJson_Macie2Invitation(obj.administrator),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2GetBucketStatisticsRequest
 */
export interface Macie2GetBucketStatisticsRequest {
  /**
   * @schema Macie2GetBucketStatisticsRequest#accountId
   */
  readonly accountId?: string;

}

/**
 * Converts an object of type 'Macie2GetBucketStatisticsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2GetBucketStatisticsRequest(obj: Macie2GetBucketStatisticsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountId': obj.accountId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2GetBucketStatisticsResponse
 */
export interface Macie2GetBucketStatisticsResponse {
  /**
   * @schema Macie2GetBucketStatisticsResponse#bucketCount
   */
  readonly bucketCount?: number;

  /**
   * @schema Macie2GetBucketStatisticsResponse#bucketCountByEffectivePermission
   */
  readonly bucketCountByEffectivePermission?: Macie2BucketCountByEffectivePermission;

  /**
   * @schema Macie2GetBucketStatisticsResponse#bucketCountByEncryptionType
   */
  readonly bucketCountByEncryptionType?: Macie2BucketCountByEncryptionType;

  /**
   * @schema Macie2GetBucketStatisticsResponse#bucketCountByObjectEncryptionRequirement
   */
  readonly bucketCountByObjectEncryptionRequirement?: Macie2BucketCountPolicyAllowsUnencryptedObjectUploads;

  /**
   * @schema Macie2GetBucketStatisticsResponse#bucketCountBySharedAccessType
   */
  readonly bucketCountBySharedAccessType?: Macie2BucketCountBySharedAccessType;

  /**
   * @schema Macie2GetBucketStatisticsResponse#classifiableObjectCount
   */
  readonly classifiableObjectCount?: number;

  /**
   * @schema Macie2GetBucketStatisticsResponse#classifiableSizeInBytes
   */
  readonly classifiableSizeInBytes?: number;

  /**
   * @schema Macie2GetBucketStatisticsResponse#lastUpdated
   */
  readonly lastUpdated?: string;

  /**
   * @schema Macie2GetBucketStatisticsResponse#objectCount
   */
  readonly objectCount?: number;

  /**
   * @schema Macie2GetBucketStatisticsResponse#sizeInBytes
   */
  readonly sizeInBytes?: number;

  /**
   * @schema Macie2GetBucketStatisticsResponse#sizeInBytesCompressed
   */
  readonly sizeInBytesCompressed?: number;

  /**
   * @schema Macie2GetBucketStatisticsResponse#unclassifiableObjectCount
   */
  readonly unclassifiableObjectCount?: Macie2ObjectLevelStatistics;

  /**
   * @schema Macie2GetBucketStatisticsResponse#unclassifiableObjectSizeInBytes
   */
  readonly unclassifiableObjectSizeInBytes?: Macie2ObjectLevelStatistics;

}

/**
 * Converts an object of type 'Macie2GetBucketStatisticsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2GetBucketStatisticsResponse(obj: Macie2GetBucketStatisticsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bucketCount': obj.bucketCount,
    'bucketCountByEffectivePermission': toJson_Macie2BucketCountByEffectivePermission(obj.bucketCountByEffectivePermission),
    'bucketCountByEncryptionType': toJson_Macie2BucketCountByEncryptionType(obj.bucketCountByEncryptionType),
    'bucketCountByObjectEncryptionRequirement': toJson_Macie2BucketCountPolicyAllowsUnencryptedObjectUploads(obj.bucketCountByObjectEncryptionRequirement),
    'bucketCountBySharedAccessType': toJson_Macie2BucketCountBySharedAccessType(obj.bucketCountBySharedAccessType),
    'classifiableObjectCount': obj.classifiableObjectCount,
    'classifiableSizeInBytes': obj.classifiableSizeInBytes,
    'lastUpdated': obj.lastUpdated,
    'objectCount': obj.objectCount,
    'sizeInBytes': obj.sizeInBytes,
    'sizeInBytesCompressed': obj.sizeInBytesCompressed,
    'unclassifiableObjectCount': toJson_Macie2ObjectLevelStatistics(obj.unclassifiableObjectCount),
    'unclassifiableObjectSizeInBytes': toJson_Macie2ObjectLevelStatistics(obj.unclassifiableObjectSizeInBytes),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2GetClassificationExportConfigurationRequest
 */
export interface Macie2GetClassificationExportConfigurationRequest {
}

/**
 * Converts an object of type 'Macie2GetClassificationExportConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2GetClassificationExportConfigurationRequest(obj: Macie2GetClassificationExportConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2GetClassificationExportConfigurationResponse
 */
export interface Macie2GetClassificationExportConfigurationResponse {
  /**
   * @schema Macie2GetClassificationExportConfigurationResponse#configuration
   */
  readonly configuration?: Macie2ClassificationExportConfiguration;

}

/**
 * Converts an object of type 'Macie2GetClassificationExportConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2GetClassificationExportConfigurationResponse(obj: Macie2GetClassificationExportConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'configuration': toJson_Macie2ClassificationExportConfiguration(obj.configuration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2GetCustomDataIdentifierRequest
 */
export interface Macie2GetCustomDataIdentifierRequest {
  /**
   * @schema Macie2GetCustomDataIdentifierRequest#id
   */
  readonly id: string;

}

/**
 * Converts an object of type 'Macie2GetCustomDataIdentifierRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2GetCustomDataIdentifierRequest(obj: Macie2GetCustomDataIdentifierRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2GetCustomDataIdentifierResponse
 */
export interface Macie2GetCustomDataIdentifierResponse {
  /**
   * @schema Macie2GetCustomDataIdentifierResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema Macie2GetCustomDataIdentifierResponse#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema Macie2GetCustomDataIdentifierResponse#deleted
   */
  readonly deleted?: boolean;

  /**
   * @schema Macie2GetCustomDataIdentifierResponse#description
   */
  readonly description?: string;

  /**
   * @schema Macie2GetCustomDataIdentifierResponse#id
   */
  readonly id?: string;

  /**
   * @schema Macie2GetCustomDataIdentifierResponse#ignoreWords
   */
  readonly ignoreWords?: string[];

  /**
   * @schema Macie2GetCustomDataIdentifierResponse#keywords
   */
  readonly keywords?: string[];

  /**
   * @schema Macie2GetCustomDataIdentifierResponse#maximumMatchDistance
   */
  readonly maximumMatchDistance?: number;

  /**
   * @schema Macie2GetCustomDataIdentifierResponse#name
   */
  readonly name?: string;

  /**
   * @schema Macie2GetCustomDataIdentifierResponse#regex
   */
  readonly regex?: string;

  /**
   * @schema Macie2GetCustomDataIdentifierResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'Macie2GetCustomDataIdentifierResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2GetCustomDataIdentifierResponse(obj: Macie2GetCustomDataIdentifierResponse | undefined): Record<string, any> | undefined {
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
 * @schema Macie2GetFindingStatisticsRequest
 */
export interface Macie2GetFindingStatisticsRequest {
  /**
   * @schema Macie2GetFindingStatisticsRequest#findingCriteria
   */
  readonly findingCriteria?: Macie2FindingCriteria;

  /**
   * @schema Macie2GetFindingStatisticsRequest#groupBy
   */
  readonly groupBy: string;

  /**
   * @schema Macie2GetFindingStatisticsRequest#size
   */
  readonly size?: number;

  /**
   * @schema Macie2GetFindingStatisticsRequest#sortCriteria
   */
  readonly sortCriteria?: Macie2FindingStatisticsSortCriteria;

}

/**
 * Converts an object of type 'Macie2GetFindingStatisticsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2GetFindingStatisticsRequest(obj: Macie2GetFindingStatisticsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'findingCriteria': toJson_Macie2FindingCriteria(obj.findingCriteria),
    'groupBy': obj.groupBy,
    'size': obj.size,
    'sortCriteria': toJson_Macie2FindingStatisticsSortCriteria(obj.sortCriteria),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2GetFindingStatisticsResponse
 */
export interface Macie2GetFindingStatisticsResponse {
  /**
   * @schema Macie2GetFindingStatisticsResponse#countsByGroup
   */
  readonly countsByGroup?: Macie2GroupCount[];

}

/**
 * Converts an object of type 'Macie2GetFindingStatisticsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2GetFindingStatisticsResponse(obj: Macie2GetFindingStatisticsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'countsByGroup': obj.countsByGroup?.map(y => toJson_Macie2GroupCount(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2GetFindingsRequest
 */
export interface Macie2GetFindingsRequest {
  /**
   * @schema Macie2GetFindingsRequest#findingIds
   */
  readonly findingIds: string[];

  /**
   * @schema Macie2GetFindingsRequest#sortCriteria
   */
  readonly sortCriteria?: Macie2SortCriteria;

}

/**
 * Converts an object of type 'Macie2GetFindingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2GetFindingsRequest(obj: Macie2GetFindingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'findingIds': obj.findingIds?.map(y => y),
    'sortCriteria': toJson_Macie2SortCriteria(obj.sortCriteria),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2GetFindingsResponse
 */
export interface Macie2GetFindingsResponse {
  /**
   * @schema Macie2GetFindingsResponse#findings
   */
  readonly findings?: Macie2Finding[];

}

/**
 * Converts an object of type 'Macie2GetFindingsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2GetFindingsResponse(obj: Macie2GetFindingsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'findings': obj.findings?.map(y => toJson_Macie2Finding(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2GetFindingsFilterRequest
 */
export interface Macie2GetFindingsFilterRequest {
  /**
   * @schema Macie2GetFindingsFilterRequest#id
   */
  readonly id: string;

}

/**
 * Converts an object of type 'Macie2GetFindingsFilterRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2GetFindingsFilterRequest(obj: Macie2GetFindingsFilterRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2GetFindingsFilterResponse
 */
export interface Macie2GetFindingsFilterResponse {
  /**
   * @schema Macie2GetFindingsFilterResponse#action
   */
  readonly action?: string;

  /**
   * @schema Macie2GetFindingsFilterResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema Macie2GetFindingsFilterResponse#description
   */
  readonly description?: string;

  /**
   * @schema Macie2GetFindingsFilterResponse#findingCriteria
   */
  readonly findingCriteria?: Macie2FindingCriteria;

  /**
   * @schema Macie2GetFindingsFilterResponse#id
   */
  readonly id?: string;

  /**
   * @schema Macie2GetFindingsFilterResponse#name
   */
  readonly name?: string;

  /**
   * @schema Macie2GetFindingsFilterResponse#position
   */
  readonly position?: number;

  /**
   * @schema Macie2GetFindingsFilterResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'Macie2GetFindingsFilterResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2GetFindingsFilterResponse(obj: Macie2GetFindingsFilterResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'action': obj.action,
    'arn': obj.arn,
    'description': obj.description,
    'findingCriteria': toJson_Macie2FindingCriteria(obj.findingCriteria),
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
 * @schema Macie2GetFindingsPublicationConfigurationRequest
 */
export interface Macie2GetFindingsPublicationConfigurationRequest {
}

/**
 * Converts an object of type 'Macie2GetFindingsPublicationConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2GetFindingsPublicationConfigurationRequest(obj: Macie2GetFindingsPublicationConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2GetFindingsPublicationConfigurationResponse
 */
export interface Macie2GetFindingsPublicationConfigurationResponse {
  /**
   * @schema Macie2GetFindingsPublicationConfigurationResponse#securityHubConfiguration
   */
  readonly securityHubConfiguration?: Macie2SecurityHubConfiguration;

}

/**
 * Converts an object of type 'Macie2GetFindingsPublicationConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2GetFindingsPublicationConfigurationResponse(obj: Macie2GetFindingsPublicationConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'securityHubConfiguration': toJson_Macie2SecurityHubConfiguration(obj.securityHubConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2GetInvitationsCountRequest
 */
export interface Macie2GetInvitationsCountRequest {
}

/**
 * Converts an object of type 'Macie2GetInvitationsCountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2GetInvitationsCountRequest(obj: Macie2GetInvitationsCountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2GetInvitationsCountResponse
 */
export interface Macie2GetInvitationsCountResponse {
  /**
   * @schema Macie2GetInvitationsCountResponse#invitationsCount
   */
  readonly invitationsCount?: number;

}

/**
 * Converts an object of type 'Macie2GetInvitationsCountResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2GetInvitationsCountResponse(obj: Macie2GetInvitationsCountResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'invitationsCount': obj.invitationsCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2GetMacieSessionRequest
 */
export interface Macie2GetMacieSessionRequest {
}

/**
 * Converts an object of type 'Macie2GetMacieSessionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2GetMacieSessionRequest(obj: Macie2GetMacieSessionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2GetMacieSessionResponse
 */
export interface Macie2GetMacieSessionResponse {
  /**
   * @schema Macie2GetMacieSessionResponse#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema Macie2GetMacieSessionResponse#findingPublishingFrequency
   */
  readonly findingPublishingFrequency?: string;

  /**
   * @schema Macie2GetMacieSessionResponse#serviceRole
   */
  readonly serviceRole?: string;

  /**
   * @schema Macie2GetMacieSessionResponse#status
   */
  readonly status?: string;

  /**
   * @schema Macie2GetMacieSessionResponse#updatedAt
   */
  readonly updatedAt?: string;

}

/**
 * Converts an object of type 'Macie2GetMacieSessionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2GetMacieSessionResponse(obj: Macie2GetMacieSessionResponse | undefined): Record<string, any> | undefined {
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
 * @schema Macie2GetMasterAccountRequest
 */
export interface Macie2GetMasterAccountRequest {
}

/**
 * Converts an object of type 'Macie2GetMasterAccountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2GetMasterAccountRequest(obj: Macie2GetMasterAccountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2GetMasterAccountResponse
 */
export interface Macie2GetMasterAccountResponse {
  /**
   * @schema Macie2GetMasterAccountResponse#master
   */
  readonly master?: Macie2Invitation;

}

/**
 * Converts an object of type 'Macie2GetMasterAccountResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2GetMasterAccountResponse(obj: Macie2GetMasterAccountResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'master': toJson_Macie2Invitation(obj.master),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2GetMemberRequest
 */
export interface Macie2GetMemberRequest {
  /**
   * @schema Macie2GetMemberRequest#id
   */
  readonly id: string;

}

/**
 * Converts an object of type 'Macie2GetMemberRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2GetMemberRequest(obj: Macie2GetMemberRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2GetMemberResponse
 */
export interface Macie2GetMemberResponse {
  /**
   * @schema Macie2GetMemberResponse#accountId
   */
  readonly accountId?: string;

  /**
   * @schema Macie2GetMemberResponse#administratorAccountId
   */
  readonly administratorAccountId?: string;

  /**
   * @schema Macie2GetMemberResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema Macie2GetMemberResponse#email
   */
  readonly email?: string;

  /**
   * @schema Macie2GetMemberResponse#invitedAt
   */
  readonly invitedAt?: string;

  /**
   * @schema Macie2GetMemberResponse#masterAccountId
   */
  readonly masterAccountId?: string;

  /**
   * @schema Macie2GetMemberResponse#relationshipStatus
   */
  readonly relationshipStatus?: string;

  /**
   * @schema Macie2GetMemberResponse#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema Macie2GetMemberResponse#updatedAt
   */
  readonly updatedAt?: string;

}

/**
 * Converts an object of type 'Macie2GetMemberResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2GetMemberResponse(obj: Macie2GetMemberResponse | undefined): Record<string, any> | undefined {
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
 * @schema Macie2GetUsageStatisticsRequest
 */
export interface Macie2GetUsageStatisticsRequest {
  /**
   * @schema Macie2GetUsageStatisticsRequest#filterBy
   */
  readonly filterBy?: Macie2UsageStatisticsFilter[];

  /**
   * @schema Macie2GetUsageStatisticsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Macie2GetUsageStatisticsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Macie2GetUsageStatisticsRequest#sortBy
   */
  readonly sortBy?: Macie2UsageStatisticsSortBy;

  /**
   * @schema Macie2GetUsageStatisticsRequest#timeRange
   */
  readonly timeRange?: string;

}

/**
 * Converts an object of type 'Macie2GetUsageStatisticsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2GetUsageStatisticsRequest(obj: Macie2GetUsageStatisticsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'filterBy': obj.filterBy?.map(y => toJson_Macie2UsageStatisticsFilter(y)),
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
    'sortBy': toJson_Macie2UsageStatisticsSortBy(obj.sortBy),
    'timeRange': obj.timeRange,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2GetUsageStatisticsResponse
 */
export interface Macie2GetUsageStatisticsResponse {
  /**
   * @schema Macie2GetUsageStatisticsResponse#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Macie2GetUsageStatisticsResponse#records
   */
  readonly records?: Macie2UsageRecord[];

  /**
   * @schema Macie2GetUsageStatisticsResponse#timeRange
   */
  readonly timeRange?: string;

}

/**
 * Converts an object of type 'Macie2GetUsageStatisticsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2GetUsageStatisticsResponse(obj: Macie2GetUsageStatisticsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'records': obj.records?.map(y => toJson_Macie2UsageRecord(y)),
    'timeRange': obj.timeRange,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2GetUsageTotalsRequest
 */
export interface Macie2GetUsageTotalsRequest {
  /**
   * @schema Macie2GetUsageTotalsRequest#timeRange
   */
  readonly timeRange?: string;

}

/**
 * Converts an object of type 'Macie2GetUsageTotalsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2GetUsageTotalsRequest(obj: Macie2GetUsageTotalsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'timeRange': obj.timeRange,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2GetUsageTotalsResponse
 */
export interface Macie2GetUsageTotalsResponse {
  /**
   * @schema Macie2GetUsageTotalsResponse#timeRange
   */
  readonly timeRange?: string;

  /**
   * @schema Macie2GetUsageTotalsResponse#usageTotals
   */
  readonly usageTotals?: Macie2UsageTotal[];

}

/**
 * Converts an object of type 'Macie2GetUsageTotalsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2GetUsageTotalsResponse(obj: Macie2GetUsageTotalsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'timeRange': obj.timeRange,
    'usageTotals': obj.usageTotals?.map(y => toJson_Macie2UsageTotal(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2ListClassificationJobsRequest
 */
export interface Macie2ListClassificationJobsRequest {
  /**
   * @schema Macie2ListClassificationJobsRequest#filterCriteria
   */
  readonly filterCriteria?: Macie2ListJobsFilterCriteria;

  /**
   * @schema Macie2ListClassificationJobsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Macie2ListClassificationJobsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Macie2ListClassificationJobsRequest#sortCriteria
   */
  readonly sortCriteria?: Macie2ListJobsSortCriteria;

}

/**
 * Converts an object of type 'Macie2ListClassificationJobsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2ListClassificationJobsRequest(obj: Macie2ListClassificationJobsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'filterCriteria': toJson_Macie2ListJobsFilterCriteria(obj.filterCriteria),
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
    'sortCriteria': toJson_Macie2ListJobsSortCriteria(obj.sortCriteria),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2ListClassificationJobsResponse
 */
export interface Macie2ListClassificationJobsResponse {
  /**
   * @schema Macie2ListClassificationJobsResponse#items
   */
  readonly items?: Macie2JobSummary[];

  /**
   * @schema Macie2ListClassificationJobsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'Macie2ListClassificationJobsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2ListClassificationJobsResponse(obj: Macie2ListClassificationJobsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'items': obj.items?.map(y => toJson_Macie2JobSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2ListCustomDataIdentifiersRequest
 */
export interface Macie2ListCustomDataIdentifiersRequest {
  /**
   * @schema Macie2ListCustomDataIdentifiersRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Macie2ListCustomDataIdentifiersRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'Macie2ListCustomDataIdentifiersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2ListCustomDataIdentifiersRequest(obj: Macie2ListCustomDataIdentifiersRequest | undefined): Record<string, any> | undefined {
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
 * @schema Macie2ListCustomDataIdentifiersResponse
 */
export interface Macie2ListCustomDataIdentifiersResponse {
  /**
   * @schema Macie2ListCustomDataIdentifiersResponse#items
   */
  readonly items?: Macie2CustomDataIdentifierSummary[];

  /**
   * @schema Macie2ListCustomDataIdentifiersResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'Macie2ListCustomDataIdentifiersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2ListCustomDataIdentifiersResponse(obj: Macie2ListCustomDataIdentifiersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'items': obj.items?.map(y => toJson_Macie2CustomDataIdentifierSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2ListFindingsRequest
 */
export interface Macie2ListFindingsRequest {
  /**
   * @schema Macie2ListFindingsRequest#findingCriteria
   */
  readonly findingCriteria?: Macie2FindingCriteria;

  /**
   * @schema Macie2ListFindingsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Macie2ListFindingsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Macie2ListFindingsRequest#sortCriteria
   */
  readonly sortCriteria?: Macie2SortCriteria;

}

/**
 * Converts an object of type 'Macie2ListFindingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2ListFindingsRequest(obj: Macie2ListFindingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'findingCriteria': toJson_Macie2FindingCriteria(obj.findingCriteria),
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
    'sortCriteria': toJson_Macie2SortCriteria(obj.sortCriteria),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2ListFindingsResponse
 */
export interface Macie2ListFindingsResponse {
  /**
   * @schema Macie2ListFindingsResponse#findingIds
   */
  readonly findingIds?: string[];

  /**
   * @schema Macie2ListFindingsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'Macie2ListFindingsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2ListFindingsResponse(obj: Macie2ListFindingsResponse | undefined): Record<string, any> | undefined {
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
 * @schema Macie2ListFindingsFiltersRequest
 */
export interface Macie2ListFindingsFiltersRequest {
  /**
   * @schema Macie2ListFindingsFiltersRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Macie2ListFindingsFiltersRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'Macie2ListFindingsFiltersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2ListFindingsFiltersRequest(obj: Macie2ListFindingsFiltersRequest | undefined): Record<string, any> | undefined {
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
 * @schema Macie2ListFindingsFiltersResponse
 */
export interface Macie2ListFindingsFiltersResponse {
  /**
   * @schema Macie2ListFindingsFiltersResponse#findingsFilterListItems
   */
  readonly findingsFilterListItems?: Macie2FindingsFilterListItem[];

  /**
   * @schema Macie2ListFindingsFiltersResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'Macie2ListFindingsFiltersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2ListFindingsFiltersResponse(obj: Macie2ListFindingsFiltersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'findingsFilterListItems': obj.findingsFilterListItems?.map(y => toJson_Macie2FindingsFilterListItem(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2ListInvitationsRequest
 */
export interface Macie2ListInvitationsRequest {
  /**
   * @schema Macie2ListInvitationsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Macie2ListInvitationsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'Macie2ListInvitationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2ListInvitationsRequest(obj: Macie2ListInvitationsRequest | undefined): Record<string, any> | undefined {
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
 * @schema Macie2ListInvitationsResponse
 */
export interface Macie2ListInvitationsResponse {
  /**
   * @schema Macie2ListInvitationsResponse#invitations
   */
  readonly invitations?: Macie2Invitation[];

  /**
   * @schema Macie2ListInvitationsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'Macie2ListInvitationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2ListInvitationsResponse(obj: Macie2ListInvitationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'invitations': obj.invitations?.map(y => toJson_Macie2Invitation(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2ListMembersRequest
 */
export interface Macie2ListMembersRequest {
  /**
   * @schema Macie2ListMembersRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Macie2ListMembersRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Macie2ListMembersRequest#onlyAssociated
   */
  readonly onlyAssociated?: string;

}

/**
 * Converts an object of type 'Macie2ListMembersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2ListMembersRequest(obj: Macie2ListMembersRequest | undefined): Record<string, any> | undefined {
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
 * @schema Macie2ListMembersResponse
 */
export interface Macie2ListMembersResponse {
  /**
   * @schema Macie2ListMembersResponse#members
   */
  readonly members?: Macie2Member[];

  /**
   * @schema Macie2ListMembersResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'Macie2ListMembersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2ListMembersResponse(obj: Macie2ListMembersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'members': obj.members?.map(y => toJson_Macie2Member(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2ListOrganizationAdminAccountsRequest
 */
export interface Macie2ListOrganizationAdminAccountsRequest {
  /**
   * @schema Macie2ListOrganizationAdminAccountsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Macie2ListOrganizationAdminAccountsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'Macie2ListOrganizationAdminAccountsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2ListOrganizationAdminAccountsRequest(obj: Macie2ListOrganizationAdminAccountsRequest | undefined): Record<string, any> | undefined {
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
 * @schema Macie2ListOrganizationAdminAccountsResponse
 */
export interface Macie2ListOrganizationAdminAccountsResponse {
  /**
   * @schema Macie2ListOrganizationAdminAccountsResponse#adminAccounts
   */
  readonly adminAccounts?: Macie2AdminAccount[];

  /**
   * @schema Macie2ListOrganizationAdminAccountsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'Macie2ListOrganizationAdminAccountsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2ListOrganizationAdminAccountsResponse(obj: Macie2ListOrganizationAdminAccountsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'adminAccounts': obj.adminAccounts?.map(y => toJson_Macie2AdminAccount(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2ListTagsForResourceRequest
 */
export interface Macie2ListTagsForResourceRequest {
  /**
   * @schema Macie2ListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * Converts an object of type 'Macie2ListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2ListTagsForResourceRequest(obj: Macie2ListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2ListTagsForResourceResponse
 */
export interface Macie2ListTagsForResourceResponse {
  /**
   * @schema Macie2ListTagsForResourceResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'Macie2ListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2ListTagsForResourceResponse(obj: Macie2ListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2PutClassificationExportConfigurationRequest
 */
export interface Macie2PutClassificationExportConfigurationRequest {
  /**
   * @schema Macie2PutClassificationExportConfigurationRequest#configuration
   */
  readonly configuration: Macie2ClassificationExportConfiguration;

}

/**
 * Converts an object of type 'Macie2PutClassificationExportConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2PutClassificationExportConfigurationRequest(obj: Macie2PutClassificationExportConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'configuration': toJson_Macie2ClassificationExportConfiguration(obj.configuration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2PutClassificationExportConfigurationResponse
 */
export interface Macie2PutClassificationExportConfigurationResponse {
  /**
   * @schema Macie2PutClassificationExportConfigurationResponse#configuration
   */
  readonly configuration?: Macie2ClassificationExportConfiguration;

}

/**
 * Converts an object of type 'Macie2PutClassificationExportConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2PutClassificationExportConfigurationResponse(obj: Macie2PutClassificationExportConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'configuration': toJson_Macie2ClassificationExportConfiguration(obj.configuration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2PutFindingsPublicationConfigurationRequest
 */
export interface Macie2PutFindingsPublicationConfigurationRequest {
  /**
   * @schema Macie2PutFindingsPublicationConfigurationRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema Macie2PutFindingsPublicationConfigurationRequest#securityHubConfiguration
   */
  readonly securityHubConfiguration?: Macie2SecurityHubConfiguration;

}

/**
 * Converts an object of type 'Macie2PutFindingsPublicationConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2PutFindingsPublicationConfigurationRequest(obj: Macie2PutFindingsPublicationConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientToken': obj.clientToken,
    'securityHubConfiguration': toJson_Macie2SecurityHubConfiguration(obj.securityHubConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2PutFindingsPublicationConfigurationResponse
 */
export interface Macie2PutFindingsPublicationConfigurationResponse {
}

/**
 * Converts an object of type 'Macie2PutFindingsPublicationConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2PutFindingsPublicationConfigurationResponse(obj: Macie2PutFindingsPublicationConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2SearchResourcesRequest
 */
export interface Macie2SearchResourcesRequest {
  /**
   * @schema Macie2SearchResourcesRequest#bucketCriteria
   */
  readonly bucketCriteria?: Macie2SearchResourcesBucketCriteria;

  /**
   * @schema Macie2SearchResourcesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Macie2SearchResourcesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Macie2SearchResourcesRequest#sortCriteria
   */
  readonly sortCriteria?: Macie2SearchResourcesSortCriteria;

}

/**
 * Converts an object of type 'Macie2SearchResourcesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2SearchResourcesRequest(obj: Macie2SearchResourcesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bucketCriteria': toJson_Macie2SearchResourcesBucketCriteria(obj.bucketCriteria),
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
    'sortCriteria': toJson_Macie2SearchResourcesSortCriteria(obj.sortCriteria),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2SearchResourcesResponse
 */
export interface Macie2SearchResourcesResponse {
  /**
   * @schema Macie2SearchResourcesResponse#matchingResources
   */
  readonly matchingResources?: Macie2MatchingResource[];

  /**
   * @schema Macie2SearchResourcesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'Macie2SearchResourcesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2SearchResourcesResponse(obj: Macie2SearchResourcesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'matchingResources': obj.matchingResources?.map(y => toJson_Macie2MatchingResource(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2TagResourceRequest
 */
export interface Macie2TagResourceRequest {
  /**
   * @schema Macie2TagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema Macie2TagResourceRequest#tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * Converts an object of type 'Macie2TagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2TagResourceRequest(obj: Macie2TagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema Macie2TagResourceResponse
 */
export interface Macie2TagResourceResponse {
}

/**
 * Converts an object of type 'Macie2TagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2TagResourceResponse(obj: Macie2TagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2TestCustomDataIdentifierRequest
 */
export interface Macie2TestCustomDataIdentifierRequest {
  /**
   * @schema Macie2TestCustomDataIdentifierRequest#ignoreWords
   */
  readonly ignoreWords?: string[];

  /**
   * @schema Macie2TestCustomDataIdentifierRequest#keywords
   */
  readonly keywords?: string[];

  /**
   * @schema Macie2TestCustomDataIdentifierRequest#maximumMatchDistance
   */
  readonly maximumMatchDistance?: number;

  /**
   * @schema Macie2TestCustomDataIdentifierRequest#regex
   */
  readonly regex: string;

  /**
   * @schema Macie2TestCustomDataIdentifierRequest#sampleText
   */
  readonly sampleText: string;

}

/**
 * Converts an object of type 'Macie2TestCustomDataIdentifierRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2TestCustomDataIdentifierRequest(obj: Macie2TestCustomDataIdentifierRequest | undefined): Record<string, any> | undefined {
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
 * @schema Macie2TestCustomDataIdentifierResponse
 */
export interface Macie2TestCustomDataIdentifierResponse {
  /**
   * @schema Macie2TestCustomDataIdentifierResponse#matchCount
   */
  readonly matchCount?: number;

}

/**
 * Converts an object of type 'Macie2TestCustomDataIdentifierResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2TestCustomDataIdentifierResponse(obj: Macie2TestCustomDataIdentifierResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'matchCount': obj.matchCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2UntagResourceRequest
 */
export interface Macie2UntagResourceRequest {
  /**
   * @schema Macie2UntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema Macie2UntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * Converts an object of type 'Macie2UntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2UntagResourceRequest(obj: Macie2UntagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema Macie2UntagResourceResponse
 */
export interface Macie2UntagResourceResponse {
}

/**
 * Converts an object of type 'Macie2UntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2UntagResourceResponse(obj: Macie2UntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2UpdateClassificationJobRequest
 */
export interface Macie2UpdateClassificationJobRequest {
  /**
   * @schema Macie2UpdateClassificationJobRequest#jobId
   */
  readonly jobId: string;

  /**
   * @schema Macie2UpdateClassificationJobRequest#jobStatus
   */
  readonly jobStatus: string;

}

/**
 * Converts an object of type 'Macie2UpdateClassificationJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2UpdateClassificationJobRequest(obj: Macie2UpdateClassificationJobRequest | undefined): Record<string, any> | undefined {
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
 * @schema Macie2UpdateClassificationJobResponse
 */
export interface Macie2UpdateClassificationJobResponse {
}

/**
 * Converts an object of type 'Macie2UpdateClassificationJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2UpdateClassificationJobResponse(obj: Macie2UpdateClassificationJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2UpdateFindingsFilterRequest
 */
export interface Macie2UpdateFindingsFilterRequest {
  /**
   * @schema Macie2UpdateFindingsFilterRequest#action
   */
  readonly action?: string;

  /**
   * @schema Macie2UpdateFindingsFilterRequest#description
   */
  readonly description?: string;

  /**
   * @schema Macie2UpdateFindingsFilterRequest#findingCriteria
   */
  readonly findingCriteria?: Macie2FindingCriteria;

  /**
   * @schema Macie2UpdateFindingsFilterRequest#id
   */
  readonly id: string;

  /**
   * @schema Macie2UpdateFindingsFilterRequest#name
   */
  readonly name?: string;

  /**
   * @schema Macie2UpdateFindingsFilterRequest#position
   */
  readonly position?: number;

  /**
   * @schema Macie2UpdateFindingsFilterRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * Converts an object of type 'Macie2UpdateFindingsFilterRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2UpdateFindingsFilterRequest(obj: Macie2UpdateFindingsFilterRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'action': obj.action,
    'description': obj.description,
    'findingCriteria': toJson_Macie2FindingCriteria(obj.findingCriteria),
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
 * @schema Macie2UpdateFindingsFilterResponse
 */
export interface Macie2UpdateFindingsFilterResponse {
  /**
   * @schema Macie2UpdateFindingsFilterResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema Macie2UpdateFindingsFilterResponse#id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'Macie2UpdateFindingsFilterResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2UpdateFindingsFilterResponse(obj: Macie2UpdateFindingsFilterResponse | undefined): Record<string, any> | undefined {
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
 * @schema Macie2UpdateMacieSessionRequest
 */
export interface Macie2UpdateMacieSessionRequest {
  /**
   * @schema Macie2UpdateMacieSessionRequest#findingPublishingFrequency
   */
  readonly findingPublishingFrequency?: string;

  /**
   * @schema Macie2UpdateMacieSessionRequest#status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'Macie2UpdateMacieSessionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2UpdateMacieSessionRequest(obj: Macie2UpdateMacieSessionRequest | undefined): Record<string, any> | undefined {
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
 * @schema Macie2UpdateMacieSessionResponse
 */
export interface Macie2UpdateMacieSessionResponse {
}

/**
 * Converts an object of type 'Macie2UpdateMacieSessionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2UpdateMacieSessionResponse(obj: Macie2UpdateMacieSessionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2UpdateMemberSessionRequest
 */
export interface Macie2UpdateMemberSessionRequest {
  /**
   * @schema Macie2UpdateMemberSessionRequest#id
   */
  readonly id: string;

  /**
   * @schema Macie2UpdateMemberSessionRequest#status
   */
  readonly status: string;

}

/**
 * Converts an object of type 'Macie2UpdateMemberSessionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2UpdateMemberSessionRequest(obj: Macie2UpdateMemberSessionRequest | undefined): Record<string, any> | undefined {
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
 * @schema Macie2UpdateMemberSessionResponse
 */
export interface Macie2UpdateMemberSessionResponse {
}

/**
 * Converts an object of type 'Macie2UpdateMemberSessionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2UpdateMemberSessionResponse(obj: Macie2UpdateMemberSessionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2UpdateOrganizationConfigurationRequest
 */
export interface Macie2UpdateOrganizationConfigurationRequest {
  /**
   * @schema Macie2UpdateOrganizationConfigurationRequest#autoEnable
   */
  readonly autoEnable: boolean;

}

/**
 * Converts an object of type 'Macie2UpdateOrganizationConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2UpdateOrganizationConfigurationRequest(obj: Macie2UpdateOrganizationConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'autoEnable': obj.autoEnable,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2UpdateOrganizationConfigurationResponse
 */
export interface Macie2UpdateOrganizationConfigurationResponse {
}

/**
 * Converts an object of type 'Macie2UpdateOrganizationConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2UpdateOrganizationConfigurationResponse(obj: Macie2UpdateOrganizationConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2BatchGetCustomDataIdentifierSummary
 */
export interface Macie2BatchGetCustomDataIdentifierSummary {
  /**
   * @schema Macie2BatchGetCustomDataIdentifierSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema Macie2BatchGetCustomDataIdentifierSummary#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema Macie2BatchGetCustomDataIdentifierSummary#deleted
   */
  readonly deleted?: boolean;

  /**
   * @schema Macie2BatchGetCustomDataIdentifierSummary#description
   */
  readonly description?: string;

  /**
   * @schema Macie2BatchGetCustomDataIdentifierSummary#id
   */
  readonly id?: string;

  /**
   * @schema Macie2BatchGetCustomDataIdentifierSummary#name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'Macie2BatchGetCustomDataIdentifierSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2BatchGetCustomDataIdentifierSummary(obj: Macie2BatchGetCustomDataIdentifierSummary | undefined): Record<string, any> | undefined {
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
 * @schema Macie2S3JobDefinition
 */
export interface Macie2S3JobDefinition {
  /**
   * @schema Macie2S3JobDefinition#bucketDefinitions
   */
  readonly bucketDefinitions?: Macie2S3BucketDefinitionForJob[];

  /**
   * @schema Macie2S3JobDefinition#scoping
   */
  readonly scoping?: Macie2Scoping;

  /**
   * @schema Macie2S3JobDefinition#bucketCriteria
   */
  readonly bucketCriteria?: Macie2S3BucketCriteriaForJob;

}

/**
 * Converts an object of type 'Macie2S3JobDefinition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2S3JobDefinition(obj: Macie2S3JobDefinition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bucketDefinitions': obj.bucketDefinitions?.map(y => toJson_Macie2S3BucketDefinitionForJob(y)),
    'scoping': toJson_Macie2Scoping(obj.scoping),
    'bucketCriteria': toJson_Macie2S3BucketCriteriaForJob(obj.bucketCriteria),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2JobScheduleFrequency
 */
export interface Macie2JobScheduleFrequency {
  /**
   * @schema Macie2JobScheduleFrequency#dailySchedule
   */
  readonly dailySchedule?: Macie2DailySchedule;

  /**
   * @schema Macie2JobScheduleFrequency#monthlySchedule
   */
  readonly monthlySchedule?: Macie2MonthlySchedule;

  /**
   * @schema Macie2JobScheduleFrequency#weeklySchedule
   */
  readonly weeklySchedule?: Macie2WeeklySchedule;

}

/**
 * Converts an object of type 'Macie2JobScheduleFrequency' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2JobScheduleFrequency(obj: Macie2JobScheduleFrequency | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'dailySchedule': toJson_Macie2DailySchedule(obj.dailySchedule),
    'monthlySchedule': toJson_Macie2MonthlySchedule(obj.monthlySchedule),
    'weeklySchedule': toJson_Macie2WeeklySchedule(obj.weeklySchedule),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2FindingCriteria
 */
export interface Macie2FindingCriteria {
  /**
   * @schema Macie2FindingCriteria#criterion
   */
  readonly criterion?: { [key: string]: Macie2CriterionAdditionalProperties };

}

/**
 * Converts an object of type 'Macie2FindingCriteria' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2FindingCriteria(obj: Macie2FindingCriteria | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'criterion': ((obj.criterion) === undefined) ? undefined : (Object.entries(obj.criterion).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_Macie2CriterionAdditionalProperties(i[1]) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2UnprocessedAccount
 */
export interface Macie2UnprocessedAccount {
  /**
   * @schema Macie2UnprocessedAccount#accountId
   */
  readonly accountId?: string;

  /**
   * @schema Macie2UnprocessedAccount#errorCode
   */
  readonly errorCode?: string;

  /**
   * @schema Macie2UnprocessedAccount#errorMessage
   */
  readonly errorMessage?: string;

}

/**
 * Converts an object of type 'Macie2UnprocessedAccount' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2UnprocessedAccount(obj: Macie2UnprocessedAccount | undefined): Record<string, any> | undefined {
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
 * @schema Macie2AccountDetail
 */
export interface Macie2AccountDetail {
  /**
   * @schema Macie2AccountDetail#accountId
   */
  readonly accountId: string;

  /**
   * @schema Macie2AccountDetail#email
   */
  readonly email: string;

}

/**
 * Converts an object of type 'Macie2AccountDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2AccountDetail(obj: Macie2AccountDetail | undefined): Record<string, any> | undefined {
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
 * @schema Macie2BucketCriteriaAdditionalProperties
 */
export interface Macie2BucketCriteriaAdditionalProperties {
  /**
   * @schema Macie2BucketCriteriaAdditionalProperties#eq
   */
  readonly eq?: string[];

  /**
   * @schema Macie2BucketCriteriaAdditionalProperties#gt
   */
  readonly gt?: number;

  /**
   * @schema Macie2BucketCriteriaAdditionalProperties#gte
   */
  readonly gte?: number;

  /**
   * @schema Macie2BucketCriteriaAdditionalProperties#lt
   */
  readonly lt?: number;

  /**
   * @schema Macie2BucketCriteriaAdditionalProperties#lte
   */
  readonly lte?: number;

  /**
   * @schema Macie2BucketCriteriaAdditionalProperties#neq
   */
  readonly neq?: string[];

  /**
   * @schema Macie2BucketCriteriaAdditionalProperties#prefix
   */
  readonly prefix?: string;

}

/**
 * Converts an object of type 'Macie2BucketCriteriaAdditionalProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2BucketCriteriaAdditionalProperties(obj: Macie2BucketCriteriaAdditionalProperties | undefined): Record<string, any> | undefined {
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
 * @schema Macie2BucketSortCriteria
 */
export interface Macie2BucketSortCriteria {
  /**
   * @schema Macie2BucketSortCriteria#attributeName
   */
  readonly attributeName?: string;

  /**
   * @schema Macie2BucketSortCriteria#orderBy
   */
  readonly orderBy?: string;

}

/**
 * Converts an object of type 'Macie2BucketSortCriteria' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2BucketSortCriteria(obj: Macie2BucketSortCriteria | undefined): Record<string, any> | undefined {
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
 * @schema Macie2BucketMetadata
 */
export interface Macie2BucketMetadata {
  /**
   * @schema Macie2BucketMetadata#accountId
   */
  readonly accountId?: string;

  /**
   * @schema Macie2BucketMetadata#allowsUnencryptedObjectUploads
   */
  readonly allowsUnencryptedObjectUploads?: string;

  /**
   * @schema Macie2BucketMetadata#bucketArn
   */
  readonly bucketArn?: string;

  /**
   * @schema Macie2BucketMetadata#bucketCreatedAt
   */
  readonly bucketCreatedAt?: string;

  /**
   * @schema Macie2BucketMetadata#bucketName
   */
  readonly bucketName?: string;

  /**
   * @schema Macie2BucketMetadata#classifiableObjectCount
   */
  readonly classifiableObjectCount?: number;

  /**
   * @schema Macie2BucketMetadata#classifiableSizeInBytes
   */
  readonly classifiableSizeInBytes?: number;

  /**
   * @schema Macie2BucketMetadata#jobDetails
   */
  readonly jobDetails?: Macie2JobDetails;

  /**
   * @schema Macie2BucketMetadata#lastUpdated
   */
  readonly lastUpdated?: string;

  /**
   * @schema Macie2BucketMetadata#objectCount
   */
  readonly objectCount?: number;

  /**
   * @schema Macie2BucketMetadata#objectCountByEncryptionType
   */
  readonly objectCountByEncryptionType?: Macie2ObjectCountByEncryptionType;

  /**
   * @schema Macie2BucketMetadata#publicAccess
   */
  readonly publicAccess?: Macie2BucketPublicAccess;

  /**
   * @schema Macie2BucketMetadata#region
   */
  readonly region?: string;

  /**
   * @schema Macie2BucketMetadata#replicationDetails
   */
  readonly replicationDetails?: Macie2ReplicationDetails;

  /**
   * @schema Macie2BucketMetadata#serverSideEncryption
   */
  readonly serverSideEncryption?: Macie2BucketServerSideEncryption;

  /**
   * @schema Macie2BucketMetadata#sharedAccess
   */
  readonly sharedAccess?: string;

  /**
   * @schema Macie2BucketMetadata#sizeInBytes
   */
  readonly sizeInBytes?: number;

  /**
   * @schema Macie2BucketMetadata#sizeInBytesCompressed
   */
  readonly sizeInBytesCompressed?: number;

  /**
   * @schema Macie2BucketMetadata#tags
   */
  readonly tags?: Macie2KeyValuePair[];

  /**
   * @schema Macie2BucketMetadata#unclassifiableObjectCount
   */
  readonly unclassifiableObjectCount?: Macie2ObjectLevelStatistics;

  /**
   * @schema Macie2BucketMetadata#unclassifiableObjectSizeInBytes
   */
  readonly unclassifiableObjectSizeInBytes?: Macie2ObjectLevelStatistics;

  /**
   * @schema Macie2BucketMetadata#versioning
   */
  readonly versioning?: boolean;

}

/**
 * Converts an object of type 'Macie2BucketMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2BucketMetadata(obj: Macie2BucketMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountId': obj.accountId,
    'allowsUnencryptedObjectUploads': obj.allowsUnencryptedObjectUploads,
    'bucketArn': obj.bucketArn,
    'bucketCreatedAt': obj.bucketCreatedAt,
    'bucketName': obj.bucketName,
    'classifiableObjectCount': obj.classifiableObjectCount,
    'classifiableSizeInBytes': obj.classifiableSizeInBytes,
    'jobDetails': toJson_Macie2JobDetails(obj.jobDetails),
    'lastUpdated': obj.lastUpdated,
    'objectCount': obj.objectCount,
    'objectCountByEncryptionType': toJson_Macie2ObjectCountByEncryptionType(obj.objectCountByEncryptionType),
    'publicAccess': toJson_Macie2BucketPublicAccess(obj.publicAccess),
    'region': obj.region,
    'replicationDetails': toJson_Macie2ReplicationDetails(obj.replicationDetails),
    'serverSideEncryption': toJson_Macie2BucketServerSideEncryption(obj.serverSideEncryption),
    'sharedAccess': obj.sharedAccess,
    'sizeInBytes': obj.sizeInBytes,
    'sizeInBytesCompressed': obj.sizeInBytesCompressed,
    'tags': obj.tags?.map(y => toJson_Macie2KeyValuePair(y)),
    'unclassifiableObjectCount': toJson_Macie2ObjectLevelStatistics(obj.unclassifiableObjectCount),
    'unclassifiableObjectSizeInBytes': toJson_Macie2ObjectLevelStatistics(obj.unclassifiableObjectSizeInBytes),
    'versioning': obj.versioning,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2LastRunErrorStatus
 */
export interface Macie2LastRunErrorStatus {
  /**
   * @schema Macie2LastRunErrorStatus#code
   */
  readonly code?: string;

}

/**
 * Converts an object of type 'Macie2LastRunErrorStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2LastRunErrorStatus(obj: Macie2LastRunErrorStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'code': obj.code,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2Statistics
 */
export interface Macie2Statistics {
  /**
   * @schema Macie2Statistics#approximateNumberOfObjectsToProcess
   */
  readonly approximateNumberOfObjectsToProcess?: number;

  /**
   * @schema Macie2Statistics#numberOfRuns
   */
  readonly numberOfRuns?: number;

}

/**
 * Converts an object of type 'Macie2Statistics' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2Statistics(obj: Macie2Statistics | undefined): Record<string, any> | undefined {
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
 * @schema Macie2UserPausedDetails
 */
export interface Macie2UserPausedDetails {
  /**
   * @schema Macie2UserPausedDetails#jobExpiresAt
   */
  readonly jobExpiresAt?: string;

  /**
   * @schema Macie2UserPausedDetails#jobImminentExpirationHealthEventArn
   */
  readonly jobImminentExpirationHealthEventArn?: string;

  /**
   * @schema Macie2UserPausedDetails#jobPausedAt
   */
  readonly jobPausedAt?: string;

}

/**
 * Converts an object of type 'Macie2UserPausedDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2UserPausedDetails(obj: Macie2UserPausedDetails | undefined): Record<string, any> | undefined {
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
 * @schema Macie2Invitation
 */
export interface Macie2Invitation {
  /**
   * @schema Macie2Invitation#accountId
   */
  readonly accountId?: string;

  /**
   * @schema Macie2Invitation#invitationId
   */
  readonly invitationId?: string;

  /**
   * @schema Macie2Invitation#invitedAt
   */
  readonly invitedAt?: string;

  /**
   * @schema Macie2Invitation#relationshipStatus
   */
  readonly relationshipStatus?: string;

}

/**
 * Converts an object of type 'Macie2Invitation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2Invitation(obj: Macie2Invitation | undefined): Record<string, any> | undefined {
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
 * @schema Macie2BucketCountByEffectivePermission
 */
export interface Macie2BucketCountByEffectivePermission {
  /**
   * @schema Macie2BucketCountByEffectivePermission#publiclyAccessible
   */
  readonly publiclyAccessible?: number;

  /**
   * @schema Macie2BucketCountByEffectivePermission#publiclyReadable
   */
  readonly publiclyReadable?: number;

  /**
   * @schema Macie2BucketCountByEffectivePermission#publiclyWritable
   */
  readonly publiclyWritable?: number;

  /**
   * @schema Macie2BucketCountByEffectivePermission#unknown
   */
  readonly unknown?: number;

}

/**
 * Converts an object of type 'Macie2BucketCountByEffectivePermission' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2BucketCountByEffectivePermission(obj: Macie2BucketCountByEffectivePermission | undefined): Record<string, any> | undefined {
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
 * @schema Macie2BucketCountByEncryptionType
 */
export interface Macie2BucketCountByEncryptionType {
  /**
   * @schema Macie2BucketCountByEncryptionType#kmsManaged
   */
  readonly kmsManaged?: number;

  /**
   * @schema Macie2BucketCountByEncryptionType#s3Managed
   */
  readonly s3Managed?: number;

  /**
   * @schema Macie2BucketCountByEncryptionType#unencrypted
   */
  readonly unencrypted?: number;

  /**
   * @schema Macie2BucketCountByEncryptionType#unknown
   */
  readonly unknown?: number;

}

/**
 * Converts an object of type 'Macie2BucketCountByEncryptionType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2BucketCountByEncryptionType(obj: Macie2BucketCountByEncryptionType | undefined): Record<string, any> | undefined {
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
 * @schema Macie2BucketCountPolicyAllowsUnencryptedObjectUploads
 */
export interface Macie2BucketCountPolicyAllowsUnencryptedObjectUploads {
  /**
   * @schema Macie2BucketCountPolicyAllowsUnencryptedObjectUploads#allowsUnencryptedObjectUploads
   */
  readonly allowsUnencryptedObjectUploads?: number;

  /**
   * @schema Macie2BucketCountPolicyAllowsUnencryptedObjectUploads#deniesUnencryptedObjectUploads
   */
  readonly deniesUnencryptedObjectUploads?: number;

  /**
   * @schema Macie2BucketCountPolicyAllowsUnencryptedObjectUploads#unknown
   */
  readonly unknown?: number;

}

/**
 * Converts an object of type 'Macie2BucketCountPolicyAllowsUnencryptedObjectUploads' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2BucketCountPolicyAllowsUnencryptedObjectUploads(obj: Macie2BucketCountPolicyAllowsUnencryptedObjectUploads | undefined): Record<string, any> | undefined {
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
 * @schema Macie2BucketCountBySharedAccessType
 */
export interface Macie2BucketCountBySharedAccessType {
  /**
   * @schema Macie2BucketCountBySharedAccessType#external
   */
  readonly external?: number;

  /**
   * @schema Macie2BucketCountBySharedAccessType#internal
   */
  readonly internal?: number;

  /**
   * @schema Macie2BucketCountBySharedAccessType#notShared
   */
  readonly notShared?: number;

  /**
   * @schema Macie2BucketCountBySharedAccessType#unknown
   */
  readonly unknown?: number;

}

/**
 * Converts an object of type 'Macie2BucketCountBySharedAccessType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2BucketCountBySharedAccessType(obj: Macie2BucketCountBySharedAccessType | undefined): Record<string, any> | undefined {
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
 * @schema Macie2ObjectLevelStatistics
 */
export interface Macie2ObjectLevelStatistics {
  /**
   * @schema Macie2ObjectLevelStatistics#fileType
   */
  readonly fileType?: number;

  /**
   * @schema Macie2ObjectLevelStatistics#storageClass
   */
  readonly storageClass?: number;

  /**
   * @schema Macie2ObjectLevelStatistics#total
   */
  readonly total?: number;

}

/**
 * Converts an object of type 'Macie2ObjectLevelStatistics' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2ObjectLevelStatistics(obj: Macie2ObjectLevelStatistics | undefined): Record<string, any> | undefined {
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
 * @schema Macie2ClassificationExportConfiguration
 */
export interface Macie2ClassificationExportConfiguration {
  /**
   * @schema Macie2ClassificationExportConfiguration#s3Destination
   */
  readonly s3Destination?: Macie2S3Destination;

}

/**
 * Converts an object of type 'Macie2ClassificationExportConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2ClassificationExportConfiguration(obj: Macie2ClassificationExportConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    's3Destination': toJson_Macie2S3Destination(obj.s3Destination),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2FindingStatisticsSortCriteria
 */
export interface Macie2FindingStatisticsSortCriteria {
  /**
   * @schema Macie2FindingStatisticsSortCriteria#attributeName
   */
  readonly attributeName?: string;

  /**
   * @schema Macie2FindingStatisticsSortCriteria#orderBy
   */
  readonly orderBy?: string;

}

/**
 * Converts an object of type 'Macie2FindingStatisticsSortCriteria' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2FindingStatisticsSortCriteria(obj: Macie2FindingStatisticsSortCriteria | undefined): Record<string, any> | undefined {
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
 * @schema Macie2GroupCount
 */
export interface Macie2GroupCount {
  /**
   * @schema Macie2GroupCount#count
   */
  readonly count?: number;

  /**
   * @schema Macie2GroupCount#groupKey
   */
  readonly groupKey?: string;

}

/**
 * Converts an object of type 'Macie2GroupCount' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2GroupCount(obj: Macie2GroupCount | undefined): Record<string, any> | undefined {
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
 * @schema Macie2SortCriteria
 */
export interface Macie2SortCriteria {
  /**
   * @schema Macie2SortCriteria#attributeName
   */
  readonly attributeName?: string;

  /**
   * @schema Macie2SortCriteria#orderBy
   */
  readonly orderBy?: string;

}

/**
 * Converts an object of type 'Macie2SortCriteria' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2SortCriteria(obj: Macie2SortCriteria | undefined): Record<string, any> | undefined {
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
 * @schema Macie2Finding
 */
export interface Macie2Finding {
  /**
   * @schema Macie2Finding#accountId
   */
  readonly accountId?: string;

  /**
   * @schema Macie2Finding#archived
   */
  readonly archived?: boolean;

  /**
   * @schema Macie2Finding#category
   */
  readonly category?: string;

  /**
   * @schema Macie2Finding#classificationDetails
   */
  readonly classificationDetails?: Macie2ClassificationDetails;

  /**
   * @schema Macie2Finding#count
   */
  readonly count?: number;

  /**
   * @schema Macie2Finding#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema Macie2Finding#description
   */
  readonly description?: string;

  /**
   * @schema Macie2Finding#id
   */
  readonly id?: string;

  /**
   * @schema Macie2Finding#partition
   */
  readonly partition?: string;

  /**
   * @schema Macie2Finding#policyDetails
   */
  readonly policyDetails?: Macie2PolicyDetails;

  /**
   * @schema Macie2Finding#region
   */
  readonly region?: string;

  /**
   * @schema Macie2Finding#resourcesAffected
   */
  readonly resourcesAffected?: Macie2ResourcesAffected;

  /**
   * @schema Macie2Finding#sample
   */
  readonly sample?: boolean;

  /**
   * @schema Macie2Finding#schemaVersion
   */
  readonly schemaVersion?: string;

  /**
   * @schema Macie2Finding#severity
   */
  readonly severity?: Macie2Severity;

  /**
   * @schema Macie2Finding#title
   */
  readonly title?: string;

  /**
   * @schema Macie2Finding#type
   */
  readonly type?: string;

  /**
   * @schema Macie2Finding#updatedAt
   */
  readonly updatedAt?: string;

}

/**
 * Converts an object of type 'Macie2Finding' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2Finding(obj: Macie2Finding | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountId': obj.accountId,
    'archived': obj.archived,
    'category': obj.category,
    'classificationDetails': toJson_Macie2ClassificationDetails(obj.classificationDetails),
    'count': obj.count,
    'createdAt': obj.createdAt,
    'description': obj.description,
    'id': obj.id,
    'partition': obj.partition,
    'policyDetails': toJson_Macie2PolicyDetails(obj.policyDetails),
    'region': obj.region,
    'resourcesAffected': toJson_Macie2ResourcesAffected(obj.resourcesAffected),
    'sample': obj.sample,
    'schemaVersion': obj.schemaVersion,
    'severity': toJson_Macie2Severity(obj.severity),
    'title': obj.title,
    'type': obj.type,
    'updatedAt': obj.updatedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2SecurityHubConfiguration
 */
export interface Macie2SecurityHubConfiguration {
  /**
   * @schema Macie2SecurityHubConfiguration#publishClassificationFindings
   */
  readonly publishClassificationFindings: boolean;

  /**
   * @schema Macie2SecurityHubConfiguration#publishPolicyFindings
   */
  readonly publishPolicyFindings: boolean;

}

/**
 * Converts an object of type 'Macie2SecurityHubConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2SecurityHubConfiguration(obj: Macie2SecurityHubConfiguration | undefined): Record<string, any> | undefined {
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
 * @schema Macie2UsageStatisticsFilter
 */
export interface Macie2UsageStatisticsFilter {
  /**
   * @schema Macie2UsageStatisticsFilter#comparator
   */
  readonly comparator?: string;

  /**
   * @schema Macie2UsageStatisticsFilter#key
   */
  readonly key?: string;

  /**
   * @schema Macie2UsageStatisticsFilter#values
   */
  readonly values?: string[];

}

/**
 * Converts an object of type 'Macie2UsageStatisticsFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2UsageStatisticsFilter(obj: Macie2UsageStatisticsFilter | undefined): Record<string, any> | undefined {
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
 * @schema Macie2UsageStatisticsSortBy
 */
export interface Macie2UsageStatisticsSortBy {
  /**
   * @schema Macie2UsageStatisticsSortBy#key
   */
  readonly key?: string;

  /**
   * @schema Macie2UsageStatisticsSortBy#orderBy
   */
  readonly orderBy?: string;

}

/**
 * Converts an object of type 'Macie2UsageStatisticsSortBy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2UsageStatisticsSortBy(obj: Macie2UsageStatisticsSortBy | undefined): Record<string, any> | undefined {
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
 * @schema Macie2UsageRecord
 */
export interface Macie2UsageRecord {
  /**
   * @schema Macie2UsageRecord#accountId
   */
  readonly accountId?: string;

  /**
   * @schema Macie2UsageRecord#freeTrialStartDate
   */
  readonly freeTrialStartDate?: string;

  /**
   * @schema Macie2UsageRecord#usage
   */
  readonly usage?: Macie2UsageByAccount[];

}

/**
 * Converts an object of type 'Macie2UsageRecord' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2UsageRecord(obj: Macie2UsageRecord | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountId': obj.accountId,
    'freeTrialStartDate': obj.freeTrialStartDate,
    'usage': obj.usage?.map(y => toJson_Macie2UsageByAccount(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2UsageTotal
 */
export interface Macie2UsageTotal {
  /**
   * @schema Macie2UsageTotal#currency
   */
  readonly currency?: string;

  /**
   * @schema Macie2UsageTotal#estimatedCost
   */
  readonly estimatedCost?: string;

  /**
   * @schema Macie2UsageTotal#type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'Macie2UsageTotal' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2UsageTotal(obj: Macie2UsageTotal | undefined): Record<string, any> | undefined {
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
 * @schema Macie2ListJobsFilterCriteria
 */
export interface Macie2ListJobsFilterCriteria {
  /**
   * @schema Macie2ListJobsFilterCriteria#excludes
   */
  readonly excludes?: Macie2ListJobsFilterTerm[];

  /**
   * @schema Macie2ListJobsFilterCriteria#includes
   */
  readonly includes?: Macie2ListJobsFilterTerm[];

}

/**
 * Converts an object of type 'Macie2ListJobsFilterCriteria' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2ListJobsFilterCriteria(obj: Macie2ListJobsFilterCriteria | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'excludes': obj.excludes?.map(y => toJson_Macie2ListJobsFilterTerm(y)),
    'includes': obj.includes?.map(y => toJson_Macie2ListJobsFilterTerm(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2ListJobsSortCriteria
 */
export interface Macie2ListJobsSortCriteria {
  /**
   * @schema Macie2ListJobsSortCriteria#attributeName
   */
  readonly attributeName?: string;

  /**
   * @schema Macie2ListJobsSortCriteria#orderBy
   */
  readonly orderBy?: string;

}

/**
 * Converts an object of type 'Macie2ListJobsSortCriteria' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2ListJobsSortCriteria(obj: Macie2ListJobsSortCriteria | undefined): Record<string, any> | undefined {
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
 * @schema Macie2JobSummary
 */
export interface Macie2JobSummary {
  /**
   * @schema Macie2JobSummary#bucketDefinitions
   */
  readonly bucketDefinitions?: Macie2S3BucketDefinitionForJob[];

  /**
   * @schema Macie2JobSummary#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema Macie2JobSummary#jobId
   */
  readonly jobId?: string;

  /**
   * @schema Macie2JobSummary#jobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema Macie2JobSummary#jobType
   */
  readonly jobType?: string;

  /**
   * @schema Macie2JobSummary#lastRunErrorStatus
   */
  readonly lastRunErrorStatus?: Macie2LastRunErrorStatus;

  /**
   * @schema Macie2JobSummary#name
   */
  readonly name?: string;

  /**
   * @schema Macie2JobSummary#userPausedDetails
   */
  readonly userPausedDetails?: Macie2UserPausedDetails;

  /**
   * @schema Macie2JobSummary#bucketCriteria
   */
  readonly bucketCriteria?: Macie2S3BucketCriteriaForJob;

}

/**
 * Converts an object of type 'Macie2JobSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2JobSummary(obj: Macie2JobSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bucketDefinitions': obj.bucketDefinitions?.map(y => toJson_Macie2S3BucketDefinitionForJob(y)),
    'createdAt': obj.createdAt,
    'jobId': obj.jobId,
    'jobStatus': obj.jobStatus,
    'jobType': obj.jobType,
    'lastRunErrorStatus': toJson_Macie2LastRunErrorStatus(obj.lastRunErrorStatus),
    'name': obj.name,
    'userPausedDetails': toJson_Macie2UserPausedDetails(obj.userPausedDetails),
    'bucketCriteria': toJson_Macie2S3BucketCriteriaForJob(obj.bucketCriteria),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2CustomDataIdentifierSummary
 */
export interface Macie2CustomDataIdentifierSummary {
  /**
   * @schema Macie2CustomDataIdentifierSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema Macie2CustomDataIdentifierSummary#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema Macie2CustomDataIdentifierSummary#description
   */
  readonly description?: string;

  /**
   * @schema Macie2CustomDataIdentifierSummary#id
   */
  readonly id?: string;

  /**
   * @schema Macie2CustomDataIdentifierSummary#name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'Macie2CustomDataIdentifierSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2CustomDataIdentifierSummary(obj: Macie2CustomDataIdentifierSummary | undefined): Record<string, any> | undefined {
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
 * @schema Macie2FindingsFilterListItem
 */
export interface Macie2FindingsFilterListItem {
  /**
   * @schema Macie2FindingsFilterListItem#action
   */
  readonly action?: string;

  /**
   * @schema Macie2FindingsFilterListItem#arn
   */
  readonly arn?: string;

  /**
   * @schema Macie2FindingsFilterListItem#id
   */
  readonly id?: string;

  /**
   * @schema Macie2FindingsFilterListItem#name
   */
  readonly name?: string;

  /**
   * @schema Macie2FindingsFilterListItem#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'Macie2FindingsFilterListItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2FindingsFilterListItem(obj: Macie2FindingsFilterListItem | undefined): Record<string, any> | undefined {
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
 * @schema Macie2Member
 */
export interface Macie2Member {
  /**
   * @schema Macie2Member#accountId
   */
  readonly accountId?: string;

  /**
   * @schema Macie2Member#administratorAccountId
   */
  readonly administratorAccountId?: string;

  /**
   * @schema Macie2Member#arn
   */
  readonly arn?: string;

  /**
   * @schema Macie2Member#email
   */
  readonly email?: string;

  /**
   * @schema Macie2Member#invitedAt
   */
  readonly invitedAt?: string;

  /**
   * @schema Macie2Member#masterAccountId
   */
  readonly masterAccountId?: string;

  /**
   * @schema Macie2Member#relationshipStatus
   */
  readonly relationshipStatus?: string;

  /**
   * @schema Macie2Member#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema Macie2Member#updatedAt
   */
  readonly updatedAt?: string;

}

/**
 * Converts an object of type 'Macie2Member' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2Member(obj: Macie2Member | undefined): Record<string, any> | undefined {
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
 * @schema Macie2AdminAccount
 */
export interface Macie2AdminAccount {
  /**
   * @schema Macie2AdminAccount#accountId
   */
  readonly accountId?: string;

  /**
   * @schema Macie2AdminAccount#status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'Macie2AdminAccount' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2AdminAccount(obj: Macie2AdminAccount | undefined): Record<string, any> | undefined {
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
 * @schema Macie2SearchResourcesBucketCriteria
 */
export interface Macie2SearchResourcesBucketCriteria {
  /**
   * @schema Macie2SearchResourcesBucketCriteria#excludes
   */
  readonly excludes?: Macie2SearchResourcesCriteriaBlock;

  /**
   * @schema Macie2SearchResourcesBucketCriteria#includes
   */
  readonly includes?: Macie2SearchResourcesCriteriaBlock;

}

/**
 * Converts an object of type 'Macie2SearchResourcesBucketCriteria' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2SearchResourcesBucketCriteria(obj: Macie2SearchResourcesBucketCriteria | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'excludes': toJson_Macie2SearchResourcesCriteriaBlock(obj.excludes),
    'includes': toJson_Macie2SearchResourcesCriteriaBlock(obj.includes),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2SearchResourcesSortCriteria
 */
export interface Macie2SearchResourcesSortCriteria {
  /**
   * @schema Macie2SearchResourcesSortCriteria#attributeName
   */
  readonly attributeName?: string;

  /**
   * @schema Macie2SearchResourcesSortCriteria#orderBy
   */
  readonly orderBy?: string;

}

/**
 * Converts an object of type 'Macie2SearchResourcesSortCriteria' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2SearchResourcesSortCriteria(obj: Macie2SearchResourcesSortCriteria | undefined): Record<string, any> | undefined {
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
 * @schema Macie2MatchingResource
 */
export interface Macie2MatchingResource {
  /**
   * @schema Macie2MatchingResource#matchingBucket
   */
  readonly matchingBucket?: Macie2MatchingBucket;

}

/**
 * Converts an object of type 'Macie2MatchingResource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2MatchingResource(obj: Macie2MatchingResource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'matchingBucket': toJson_Macie2MatchingBucket(obj.matchingBucket),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2S3BucketDefinitionForJob
 */
export interface Macie2S3BucketDefinitionForJob {
  /**
   * @schema Macie2S3BucketDefinitionForJob#accountId
   */
  readonly accountId: string;

  /**
   * @schema Macie2S3BucketDefinitionForJob#buckets
   */
  readonly buckets: string[];

}

/**
 * Converts an object of type 'Macie2S3BucketDefinitionForJob' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2S3BucketDefinitionForJob(obj: Macie2S3BucketDefinitionForJob | undefined): Record<string, any> | undefined {
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
 * @schema Macie2Scoping
 */
export interface Macie2Scoping {
  /**
   * @schema Macie2Scoping#excludes
   */
  readonly excludes?: Macie2JobScopingBlock;

  /**
   * @schema Macie2Scoping#includes
   */
  readonly includes?: Macie2JobScopingBlock;

}

/**
 * Converts an object of type 'Macie2Scoping' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2Scoping(obj: Macie2Scoping | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'excludes': toJson_Macie2JobScopingBlock(obj.excludes),
    'includes': toJson_Macie2JobScopingBlock(obj.includes),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2S3BucketCriteriaForJob
 */
export interface Macie2S3BucketCriteriaForJob {
  /**
   * @schema Macie2S3BucketCriteriaForJob#excludes
   */
  readonly excludes?: Macie2CriteriaBlockForJob;

  /**
   * @schema Macie2S3BucketCriteriaForJob#includes
   */
  readonly includes?: Macie2CriteriaBlockForJob;

}

/**
 * Converts an object of type 'Macie2S3BucketCriteriaForJob' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2S3BucketCriteriaForJob(obj: Macie2S3BucketCriteriaForJob | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'excludes': toJson_Macie2CriteriaBlockForJob(obj.excludes),
    'includes': toJson_Macie2CriteriaBlockForJob(obj.includes),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2DailySchedule
 */
export interface Macie2DailySchedule {
}

/**
 * Converts an object of type 'Macie2DailySchedule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2DailySchedule(obj: Macie2DailySchedule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2MonthlySchedule
 */
export interface Macie2MonthlySchedule {
  /**
   * @schema Macie2MonthlySchedule#dayOfMonth
   */
  readonly dayOfMonth?: number;

}

/**
 * Converts an object of type 'Macie2MonthlySchedule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2MonthlySchedule(obj: Macie2MonthlySchedule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'dayOfMonth': obj.dayOfMonth,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2WeeklySchedule
 */
export interface Macie2WeeklySchedule {
  /**
   * @schema Macie2WeeklySchedule#dayOfWeek
   */
  readonly dayOfWeek?: string;

}

/**
 * Converts an object of type 'Macie2WeeklySchedule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2WeeklySchedule(obj: Macie2WeeklySchedule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'dayOfWeek': obj.dayOfWeek,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2CriterionAdditionalProperties
 */
export interface Macie2CriterionAdditionalProperties {
  /**
   * @schema Macie2CriterionAdditionalProperties#eq
   */
  readonly eq?: string[];

  /**
   * @schema Macie2CriterionAdditionalProperties#eqExactMatch
   */
  readonly eqExactMatch?: string[];

  /**
   * @schema Macie2CriterionAdditionalProperties#gt
   */
  readonly gt?: number;

  /**
   * @schema Macie2CriterionAdditionalProperties#gte
   */
  readonly gte?: number;

  /**
   * @schema Macie2CriterionAdditionalProperties#lt
   */
  readonly lt?: number;

  /**
   * @schema Macie2CriterionAdditionalProperties#lte
   */
  readonly lte?: number;

  /**
   * @schema Macie2CriterionAdditionalProperties#neq
   */
  readonly neq?: string[];

}

/**
 * Converts an object of type 'Macie2CriterionAdditionalProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2CriterionAdditionalProperties(obj: Macie2CriterionAdditionalProperties | undefined): Record<string, any> | undefined {
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
 * @schema Macie2JobDetails
 */
export interface Macie2JobDetails {
  /**
   * @schema Macie2JobDetails#isDefinedInJob
   */
  readonly isDefinedInJob?: string;

  /**
   * @schema Macie2JobDetails#isMonitoredByJob
   */
  readonly isMonitoredByJob?: string;

  /**
   * @schema Macie2JobDetails#lastJobId
   */
  readonly lastJobId?: string;

  /**
   * @schema Macie2JobDetails#lastJobRunTime
   */
  readonly lastJobRunTime?: string;

}

/**
 * Converts an object of type 'Macie2JobDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2JobDetails(obj: Macie2JobDetails | undefined): Record<string, any> | undefined {
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
 * @schema Macie2ObjectCountByEncryptionType
 */
export interface Macie2ObjectCountByEncryptionType {
  /**
   * @schema Macie2ObjectCountByEncryptionType#customerManaged
   */
  readonly customerManaged?: number;

  /**
   * @schema Macie2ObjectCountByEncryptionType#kmsManaged
   */
  readonly kmsManaged?: number;

  /**
   * @schema Macie2ObjectCountByEncryptionType#s3Managed
   */
  readonly s3Managed?: number;

  /**
   * @schema Macie2ObjectCountByEncryptionType#unencrypted
   */
  readonly unencrypted?: number;

  /**
   * @schema Macie2ObjectCountByEncryptionType#unknown
   */
  readonly unknown?: number;

}

/**
 * Converts an object of type 'Macie2ObjectCountByEncryptionType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2ObjectCountByEncryptionType(obj: Macie2ObjectCountByEncryptionType | undefined): Record<string, any> | undefined {
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
 * @schema Macie2BucketPublicAccess
 */
export interface Macie2BucketPublicAccess {
  /**
   * @schema Macie2BucketPublicAccess#effectivePermission
   */
  readonly effectivePermission?: string;

  /**
   * @schema Macie2BucketPublicAccess#permissionConfiguration
   */
  readonly permissionConfiguration?: Macie2BucketPermissionConfiguration;

}

/**
 * Converts an object of type 'Macie2BucketPublicAccess' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2BucketPublicAccess(obj: Macie2BucketPublicAccess | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'effectivePermission': obj.effectivePermission,
    'permissionConfiguration': toJson_Macie2BucketPermissionConfiguration(obj.permissionConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2ReplicationDetails
 */
export interface Macie2ReplicationDetails {
  /**
   * @schema Macie2ReplicationDetails#replicated
   */
  readonly replicated?: boolean;

  /**
   * @schema Macie2ReplicationDetails#replicatedExternally
   */
  readonly replicatedExternally?: boolean;

  /**
   * @schema Macie2ReplicationDetails#replicationAccounts
   */
  readonly replicationAccounts?: string[];

}

/**
 * Converts an object of type 'Macie2ReplicationDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2ReplicationDetails(obj: Macie2ReplicationDetails | undefined): Record<string, any> | undefined {
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
 * @schema Macie2BucketServerSideEncryption
 */
export interface Macie2BucketServerSideEncryption {
  /**
   * @schema Macie2BucketServerSideEncryption#kmsMasterKeyId
   */
  readonly kmsMasterKeyId?: string;

  /**
   * @schema Macie2BucketServerSideEncryption#type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'Macie2BucketServerSideEncryption' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2BucketServerSideEncryption(obj: Macie2BucketServerSideEncryption | undefined): Record<string, any> | undefined {
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
 * @schema Macie2KeyValuePair
 */
export interface Macie2KeyValuePair {
  /**
   * @schema Macie2KeyValuePair#key
   */
  readonly key?: string;

  /**
   * @schema Macie2KeyValuePair#value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'Macie2KeyValuePair' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2KeyValuePair(obj: Macie2KeyValuePair | undefined): Record<string, any> | undefined {
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
 * @schema Macie2S3Destination
 */
export interface Macie2S3Destination {
  /**
   * @schema Macie2S3Destination#bucketName
   */
  readonly bucketName: string;

  /**
   * @schema Macie2S3Destination#keyPrefix
   */
  readonly keyPrefix?: string;

  /**
   * @schema Macie2S3Destination#kmsKeyArn
   */
  readonly kmsKeyArn: string;

}

/**
 * Converts an object of type 'Macie2S3Destination' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2S3Destination(obj: Macie2S3Destination | undefined): Record<string, any> | undefined {
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
 * @schema Macie2ClassificationDetails
 */
export interface Macie2ClassificationDetails {
  /**
   * @schema Macie2ClassificationDetails#detailedResultsLocation
   */
  readonly detailedResultsLocation?: string;

  /**
   * @schema Macie2ClassificationDetails#jobArn
   */
  readonly jobArn?: string;

  /**
   * @schema Macie2ClassificationDetails#jobId
   */
  readonly jobId?: string;

  /**
   * @schema Macie2ClassificationDetails#result
   */
  readonly result?: Macie2ClassificationResult;

}

/**
 * Converts an object of type 'Macie2ClassificationDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2ClassificationDetails(obj: Macie2ClassificationDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'detailedResultsLocation': obj.detailedResultsLocation,
    'jobArn': obj.jobArn,
    'jobId': obj.jobId,
    'result': toJson_Macie2ClassificationResult(obj.result),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2PolicyDetails
 */
export interface Macie2PolicyDetails {
  /**
   * @schema Macie2PolicyDetails#action
   */
  readonly action?: Macie2FindingAction;

  /**
   * @schema Macie2PolicyDetails#actor
   */
  readonly actor?: Macie2FindingActor;

}

/**
 * Converts an object of type 'Macie2PolicyDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2PolicyDetails(obj: Macie2PolicyDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'action': toJson_Macie2FindingAction(obj.action),
    'actor': toJson_Macie2FindingActor(obj.actor),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2ResourcesAffected
 */
export interface Macie2ResourcesAffected {
  /**
   * @schema Macie2ResourcesAffected#s3Bucket
   */
  readonly s3Bucket?: Macie2S3Bucket;

  /**
   * @schema Macie2ResourcesAffected#s3Object
   */
  readonly s3Object?: Macie2S3Object;

}

/**
 * Converts an object of type 'Macie2ResourcesAffected' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2ResourcesAffected(obj: Macie2ResourcesAffected | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    's3Bucket': toJson_Macie2S3Bucket(obj.s3Bucket),
    's3Object': toJson_Macie2S3Object(obj.s3Object),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2Severity
 */
export interface Macie2Severity {
  /**
   * @schema Macie2Severity#description
   */
  readonly description?: string;

  /**
   * @schema Macie2Severity#score
   */
  readonly score?: number;

}

/**
 * Converts an object of type 'Macie2Severity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2Severity(obj: Macie2Severity | undefined): Record<string, any> | undefined {
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
 * @schema Macie2UsageByAccount
 */
export interface Macie2UsageByAccount {
  /**
   * @schema Macie2UsageByAccount#currency
   */
  readonly currency?: string;

  /**
   * @schema Macie2UsageByAccount#estimatedCost
   */
  readonly estimatedCost?: string;

  /**
   * @schema Macie2UsageByAccount#serviceLimit
   */
  readonly serviceLimit?: Macie2ServiceLimit;

  /**
   * @schema Macie2UsageByAccount#type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'Macie2UsageByAccount' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2UsageByAccount(obj: Macie2UsageByAccount | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'currency': obj.currency,
    'estimatedCost': obj.estimatedCost,
    'serviceLimit': toJson_Macie2ServiceLimit(obj.serviceLimit),
    'type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2ListJobsFilterTerm
 */
export interface Macie2ListJobsFilterTerm {
  /**
   * @schema Macie2ListJobsFilterTerm#comparator
   */
  readonly comparator?: string;

  /**
   * @schema Macie2ListJobsFilterTerm#key
   */
  readonly key?: string;

  /**
   * @schema Macie2ListJobsFilterTerm#values
   */
  readonly values?: string[];

}

/**
 * Converts an object of type 'Macie2ListJobsFilterTerm' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2ListJobsFilterTerm(obj: Macie2ListJobsFilterTerm | undefined): Record<string, any> | undefined {
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
 * @schema Macie2SearchResourcesCriteriaBlock
 */
export interface Macie2SearchResourcesCriteriaBlock {
  /**
   * @schema Macie2SearchResourcesCriteriaBlock#and
   */
  readonly and?: Macie2SearchResourcesCriteria[];

}

/**
 * Converts an object of type 'Macie2SearchResourcesCriteriaBlock' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2SearchResourcesCriteriaBlock(obj: Macie2SearchResourcesCriteriaBlock | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'and': obj.and?.map(y => toJson_Macie2SearchResourcesCriteria(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2MatchingBucket
 */
export interface Macie2MatchingBucket {
  /**
   * @schema Macie2MatchingBucket#accountId
   */
  readonly accountId?: string;

  /**
   * @schema Macie2MatchingBucket#bucketName
   */
  readonly bucketName?: string;

  /**
   * @schema Macie2MatchingBucket#classifiableObjectCount
   */
  readonly classifiableObjectCount?: number;

  /**
   * @schema Macie2MatchingBucket#classifiableSizeInBytes
   */
  readonly classifiableSizeInBytes?: number;

  /**
   * @schema Macie2MatchingBucket#jobDetails
   */
  readonly jobDetails?: Macie2JobDetails;

  /**
   * @schema Macie2MatchingBucket#objectCount
   */
  readonly objectCount?: number;

  /**
   * @schema Macie2MatchingBucket#objectCountByEncryptionType
   */
  readonly objectCountByEncryptionType?: Macie2ObjectCountByEncryptionType;

  /**
   * @schema Macie2MatchingBucket#sizeInBytes
   */
  readonly sizeInBytes?: number;

  /**
   * @schema Macie2MatchingBucket#sizeInBytesCompressed
   */
  readonly sizeInBytesCompressed?: number;

  /**
   * @schema Macie2MatchingBucket#unclassifiableObjectCount
   */
  readonly unclassifiableObjectCount?: Macie2ObjectLevelStatistics;

  /**
   * @schema Macie2MatchingBucket#unclassifiableObjectSizeInBytes
   */
  readonly unclassifiableObjectSizeInBytes?: Macie2ObjectLevelStatistics;

}

/**
 * Converts an object of type 'Macie2MatchingBucket' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2MatchingBucket(obj: Macie2MatchingBucket | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountId': obj.accountId,
    'bucketName': obj.bucketName,
    'classifiableObjectCount': obj.classifiableObjectCount,
    'classifiableSizeInBytes': obj.classifiableSizeInBytes,
    'jobDetails': toJson_Macie2JobDetails(obj.jobDetails),
    'objectCount': obj.objectCount,
    'objectCountByEncryptionType': toJson_Macie2ObjectCountByEncryptionType(obj.objectCountByEncryptionType),
    'sizeInBytes': obj.sizeInBytes,
    'sizeInBytesCompressed': obj.sizeInBytesCompressed,
    'unclassifiableObjectCount': toJson_Macie2ObjectLevelStatistics(obj.unclassifiableObjectCount),
    'unclassifiableObjectSizeInBytes': toJson_Macie2ObjectLevelStatistics(obj.unclassifiableObjectSizeInBytes),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2JobScopingBlock
 */
export interface Macie2JobScopingBlock {
  /**
   * @schema Macie2JobScopingBlock#and
   */
  readonly and?: Macie2JobScopeTerm[];

}

/**
 * Converts an object of type 'Macie2JobScopingBlock' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2JobScopingBlock(obj: Macie2JobScopingBlock | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'and': obj.and?.map(y => toJson_Macie2JobScopeTerm(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2CriteriaBlockForJob
 */
export interface Macie2CriteriaBlockForJob {
  /**
   * @schema Macie2CriteriaBlockForJob#and
   */
  readonly and?: Macie2CriteriaForJob[];

}

/**
 * Converts an object of type 'Macie2CriteriaBlockForJob' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2CriteriaBlockForJob(obj: Macie2CriteriaBlockForJob | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'and': obj.and?.map(y => toJson_Macie2CriteriaForJob(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2BucketPermissionConfiguration
 */
export interface Macie2BucketPermissionConfiguration {
  /**
   * @schema Macie2BucketPermissionConfiguration#accountLevelPermissions
   */
  readonly accountLevelPermissions?: Macie2AccountLevelPermissions;

  /**
   * @schema Macie2BucketPermissionConfiguration#bucketLevelPermissions
   */
  readonly bucketLevelPermissions?: Macie2BucketLevelPermissions;

}

/**
 * Converts an object of type 'Macie2BucketPermissionConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2BucketPermissionConfiguration(obj: Macie2BucketPermissionConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountLevelPermissions': toJson_Macie2AccountLevelPermissions(obj.accountLevelPermissions),
    'bucketLevelPermissions': toJson_Macie2BucketLevelPermissions(obj.bucketLevelPermissions),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2ClassificationResult
 */
export interface Macie2ClassificationResult {
  /**
   * @schema Macie2ClassificationResult#additionalOccurrences
   */
  readonly additionalOccurrences?: boolean;

  /**
   * @schema Macie2ClassificationResult#customDataIdentifiers
   */
  readonly customDataIdentifiers?: Macie2CustomDataIdentifiers;

  /**
   * @schema Macie2ClassificationResult#mimeType
   */
  readonly mimeType?: string;

  /**
   * @schema Macie2ClassificationResult#sensitiveData
   */
  readonly sensitiveData?: Macie2SensitiveDataItem[];

  /**
   * @schema Macie2ClassificationResult#sizeClassified
   */
  readonly sizeClassified?: number;

  /**
   * @schema Macie2ClassificationResult#status
   */
  readonly status?: Macie2ClassificationResultStatus;

}

/**
 * Converts an object of type 'Macie2ClassificationResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2ClassificationResult(obj: Macie2ClassificationResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'additionalOccurrences': obj.additionalOccurrences,
    'customDataIdentifiers': toJson_Macie2CustomDataIdentifiers(obj.customDataIdentifiers),
    'mimeType': obj.mimeType,
    'sensitiveData': obj.sensitiveData?.map(y => toJson_Macie2SensitiveDataItem(y)),
    'sizeClassified': obj.sizeClassified,
    'status': toJson_Macie2ClassificationResultStatus(obj.status),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2FindingAction
 */
export interface Macie2FindingAction {
  /**
   * @schema Macie2FindingAction#actionType
   */
  readonly actionType?: string;

  /**
   * @schema Macie2FindingAction#apiCallDetails
   */
  readonly apiCallDetails?: Macie2ApiCallDetails;

}

/**
 * Converts an object of type 'Macie2FindingAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2FindingAction(obj: Macie2FindingAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'actionType': obj.actionType,
    'apiCallDetails': toJson_Macie2ApiCallDetails(obj.apiCallDetails),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2FindingActor
 */
export interface Macie2FindingActor {
  /**
   * @schema Macie2FindingActor#domainDetails
   */
  readonly domainDetails?: Macie2DomainDetails;

  /**
   * @schema Macie2FindingActor#ipAddressDetails
   */
  readonly ipAddressDetails?: Macie2IpAddressDetails;

  /**
   * @schema Macie2FindingActor#userIdentity
   */
  readonly userIdentity?: Macie2UserIdentity;

}

/**
 * Converts an object of type 'Macie2FindingActor' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2FindingActor(obj: Macie2FindingActor | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domainDetails': toJson_Macie2DomainDetails(obj.domainDetails),
    'ipAddressDetails': toJson_Macie2IpAddressDetails(obj.ipAddressDetails),
    'userIdentity': toJson_Macie2UserIdentity(obj.userIdentity),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2S3Bucket
 */
export interface Macie2S3Bucket {
  /**
   * @schema Macie2S3Bucket#allowsUnencryptedObjectUploads
   */
  readonly allowsUnencryptedObjectUploads?: string;

  /**
   * @schema Macie2S3Bucket#arn
   */
  readonly arn?: string;

  /**
   * @schema Macie2S3Bucket#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema Macie2S3Bucket#defaultServerSideEncryption
   */
  readonly defaultServerSideEncryption?: Macie2ServerSideEncryption;

  /**
   * @schema Macie2S3Bucket#name
   */
  readonly name?: string;

  /**
   * @schema Macie2S3Bucket#owner
   */
  readonly owner?: Macie2S3BucketOwner;

  /**
   * @schema Macie2S3Bucket#publicAccess
   */
  readonly publicAccess?: Macie2BucketPublicAccess;

  /**
   * @schema Macie2S3Bucket#tags
   */
  readonly tags?: Macie2KeyValuePair[];

}

/**
 * Converts an object of type 'Macie2S3Bucket' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2S3Bucket(obj: Macie2S3Bucket | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'allowsUnencryptedObjectUploads': obj.allowsUnencryptedObjectUploads,
    'arn': obj.arn,
    'createdAt': obj.createdAt,
    'defaultServerSideEncryption': toJson_Macie2ServerSideEncryption(obj.defaultServerSideEncryption),
    'name': obj.name,
    'owner': toJson_Macie2S3BucketOwner(obj.owner),
    'publicAccess': toJson_Macie2BucketPublicAccess(obj.publicAccess),
    'tags': obj.tags?.map(y => toJson_Macie2KeyValuePair(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2S3Object
 */
export interface Macie2S3Object {
  /**
   * @schema Macie2S3Object#bucketArn
   */
  readonly bucketArn?: string;

  /**
   * @schema Macie2S3Object#eTag
   */
  readonly eTag?: string;

  /**
   * @schema Macie2S3Object#extension
   */
  readonly extension?: string;

  /**
   * @schema Macie2S3Object#key
   */
  readonly key?: string;

  /**
   * @schema Macie2S3Object#lastModified
   */
  readonly lastModified?: string;

  /**
   * @schema Macie2S3Object#path
   */
  readonly path?: string;

  /**
   * @schema Macie2S3Object#publicAccess
   */
  readonly publicAccess?: boolean;

  /**
   * @schema Macie2S3Object#serverSideEncryption
   */
  readonly serverSideEncryption?: Macie2ServerSideEncryption;

  /**
   * @schema Macie2S3Object#size
   */
  readonly size?: number;

  /**
   * @schema Macie2S3Object#storageClass
   */
  readonly storageClass?: string;

  /**
   * @schema Macie2S3Object#tags
   */
  readonly tags?: Macie2KeyValuePair[];

  /**
   * @schema Macie2S3Object#versionId
   */
  readonly versionId?: string;

}

/**
 * Converts an object of type 'Macie2S3Object' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2S3Object(obj: Macie2S3Object | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bucketArn': obj.bucketArn,
    'eTag': obj.eTag,
    'extension': obj.extension,
    'key': obj.key,
    'lastModified': obj.lastModified,
    'path': obj.path,
    'publicAccess': obj.publicAccess,
    'serverSideEncryption': toJson_Macie2ServerSideEncryption(obj.serverSideEncryption),
    'size': obj.size,
    'storageClass': obj.storageClass,
    'tags': obj.tags?.map(y => toJson_Macie2KeyValuePair(y)),
    'versionId': obj.versionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2ServiceLimit
 */
export interface Macie2ServiceLimit {
  /**
   * @schema Macie2ServiceLimit#isServiceLimited
   */
  readonly isServiceLimited?: boolean;

  /**
   * @schema Macie2ServiceLimit#unit
   */
  readonly unit?: string;

  /**
   * @schema Macie2ServiceLimit#value
   */
  readonly value?: number;

}

/**
 * Converts an object of type 'Macie2ServiceLimit' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2ServiceLimit(obj: Macie2ServiceLimit | undefined): Record<string, any> | undefined {
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
 * @schema Macie2SearchResourcesCriteria
 */
export interface Macie2SearchResourcesCriteria {
  /**
   * @schema Macie2SearchResourcesCriteria#simpleCriterion
   */
  readonly simpleCriterion?: Macie2SearchResourcesSimpleCriterion;

  /**
   * @schema Macie2SearchResourcesCriteria#tagCriterion
   */
  readonly tagCriterion?: Macie2SearchResourcesTagCriterion;

}

/**
 * Converts an object of type 'Macie2SearchResourcesCriteria' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2SearchResourcesCriteria(obj: Macie2SearchResourcesCriteria | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'simpleCriterion': toJson_Macie2SearchResourcesSimpleCriterion(obj.simpleCriterion),
    'tagCriterion': toJson_Macie2SearchResourcesTagCriterion(obj.tagCriterion),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2JobScopeTerm
 */
export interface Macie2JobScopeTerm {
  /**
   * @schema Macie2JobScopeTerm#simpleScopeTerm
   */
  readonly simpleScopeTerm?: Macie2SimpleScopeTerm;

  /**
   * @schema Macie2JobScopeTerm#tagScopeTerm
   */
  readonly tagScopeTerm?: Macie2TagScopeTerm;

}

/**
 * Converts an object of type 'Macie2JobScopeTerm' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2JobScopeTerm(obj: Macie2JobScopeTerm | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'simpleScopeTerm': toJson_Macie2SimpleScopeTerm(obj.simpleScopeTerm),
    'tagScopeTerm': toJson_Macie2TagScopeTerm(obj.tagScopeTerm),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2CriteriaForJob
 */
export interface Macie2CriteriaForJob {
  /**
   * @schema Macie2CriteriaForJob#simpleCriterion
   */
  readonly simpleCriterion?: Macie2SimpleCriterionForJob;

  /**
   * @schema Macie2CriteriaForJob#tagCriterion
   */
  readonly tagCriterion?: Macie2TagCriterionForJob;

}

/**
 * Converts an object of type 'Macie2CriteriaForJob' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2CriteriaForJob(obj: Macie2CriteriaForJob | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'simpleCriterion': toJson_Macie2SimpleCriterionForJob(obj.simpleCriterion),
    'tagCriterion': toJson_Macie2TagCriterionForJob(obj.tagCriterion),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2AccountLevelPermissions
 */
export interface Macie2AccountLevelPermissions {
  /**
   * @schema Macie2AccountLevelPermissions#blockPublicAccess
   */
  readonly blockPublicAccess?: Macie2BlockPublicAccess;

}

/**
 * Converts an object of type 'Macie2AccountLevelPermissions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2AccountLevelPermissions(obj: Macie2AccountLevelPermissions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'blockPublicAccess': toJson_Macie2BlockPublicAccess(obj.blockPublicAccess),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2BucketLevelPermissions
 */
export interface Macie2BucketLevelPermissions {
  /**
   * @schema Macie2BucketLevelPermissions#accessControlList
   */
  readonly accessControlList?: Macie2AccessControlList;

  /**
   * @schema Macie2BucketLevelPermissions#blockPublicAccess
   */
  readonly blockPublicAccess?: Macie2BlockPublicAccess;

  /**
   * @schema Macie2BucketLevelPermissions#bucketPolicy
   */
  readonly bucketPolicy?: Macie2BucketPolicy;

}

/**
 * Converts an object of type 'Macie2BucketLevelPermissions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2BucketLevelPermissions(obj: Macie2BucketLevelPermissions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accessControlList': toJson_Macie2AccessControlList(obj.accessControlList),
    'blockPublicAccess': toJson_Macie2BlockPublicAccess(obj.blockPublicAccess),
    'bucketPolicy': toJson_Macie2BucketPolicy(obj.bucketPolicy),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2CustomDataIdentifiers
 */
export interface Macie2CustomDataIdentifiers {
  /**
   * @schema Macie2CustomDataIdentifiers#detections
   */
  readonly detections?: Macie2CustomDetection[];

  /**
   * @schema Macie2CustomDataIdentifiers#totalCount
   */
  readonly totalCount?: number;

}

/**
 * Converts an object of type 'Macie2CustomDataIdentifiers' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2CustomDataIdentifiers(obj: Macie2CustomDataIdentifiers | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'detections': obj.detections?.map(y => toJson_Macie2CustomDetection(y)),
    'totalCount': obj.totalCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2SensitiveDataItem
 */
export interface Macie2SensitiveDataItem {
  /**
   * @schema Macie2SensitiveDataItem#category
   */
  readonly category?: string;

  /**
   * @schema Macie2SensitiveDataItem#detections
   */
  readonly detections?: Macie2DefaultDetection[];

  /**
   * @schema Macie2SensitiveDataItem#totalCount
   */
  readonly totalCount?: number;

}

/**
 * Converts an object of type 'Macie2SensitiveDataItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2SensitiveDataItem(obj: Macie2SensitiveDataItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'category': obj.category,
    'detections': obj.detections?.map(y => toJson_Macie2DefaultDetection(y)),
    'totalCount': obj.totalCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2ClassificationResultStatus
 */
export interface Macie2ClassificationResultStatus {
  /**
   * @schema Macie2ClassificationResultStatus#code
   */
  readonly code?: string;

  /**
   * @schema Macie2ClassificationResultStatus#reason
   */
  readonly reason?: string;

}

/**
 * Converts an object of type 'Macie2ClassificationResultStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2ClassificationResultStatus(obj: Macie2ClassificationResultStatus | undefined): Record<string, any> | undefined {
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
 * @schema Macie2ApiCallDetails
 */
export interface Macie2ApiCallDetails {
  /**
   * @schema Macie2ApiCallDetails#api
   */
  readonly api?: string;

  /**
   * @schema Macie2ApiCallDetails#apiServiceName
   */
  readonly apiServiceName?: string;

  /**
   * @schema Macie2ApiCallDetails#firstSeen
   */
  readonly firstSeen?: string;

  /**
   * @schema Macie2ApiCallDetails#lastSeen
   */
  readonly lastSeen?: string;

}

/**
 * Converts an object of type 'Macie2ApiCallDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2ApiCallDetails(obj: Macie2ApiCallDetails | undefined): Record<string, any> | undefined {
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
 * @schema Macie2DomainDetails
 */
export interface Macie2DomainDetails {
  /**
   * @schema Macie2DomainDetails#domainName
   */
  readonly domainName?: string;

}

/**
 * Converts an object of type 'Macie2DomainDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2DomainDetails(obj: Macie2DomainDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domainName': obj.domainName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2IpAddressDetails
 */
export interface Macie2IpAddressDetails {
  /**
   * @schema Macie2IpAddressDetails#ipAddressV4
   */
  readonly ipAddressV4?: string;

  /**
   * @schema Macie2IpAddressDetails#ipCity
   */
  readonly ipCity?: Macie2IpCity;

  /**
   * @schema Macie2IpAddressDetails#ipCountry
   */
  readonly ipCountry?: Macie2IpCountry;

  /**
   * @schema Macie2IpAddressDetails#ipGeoLocation
   */
  readonly ipGeoLocation?: Macie2IpGeoLocation;

  /**
   * @schema Macie2IpAddressDetails#ipOwner
   */
  readonly ipOwner?: Macie2IpOwner;

}

/**
 * Converts an object of type 'Macie2IpAddressDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2IpAddressDetails(obj: Macie2IpAddressDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ipAddressV4': obj.ipAddressV4,
    'ipCity': toJson_Macie2IpCity(obj.ipCity),
    'ipCountry': toJson_Macie2IpCountry(obj.ipCountry),
    'ipGeoLocation': toJson_Macie2IpGeoLocation(obj.ipGeoLocation),
    'ipOwner': toJson_Macie2IpOwner(obj.ipOwner),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2UserIdentity
 */
export interface Macie2UserIdentity {
  /**
   * @schema Macie2UserIdentity#assumedRole
   */
  readonly assumedRole?: Macie2AssumedRole;

  /**
   * @schema Macie2UserIdentity#awsAccount
   */
  readonly awsAccount?: Macie2AwsAccount;

  /**
   * @schema Macie2UserIdentity#awsService
   */
  readonly awsService?: Macie2AwsService;

  /**
   * @schema Macie2UserIdentity#federatedUser
   */
  readonly federatedUser?: Macie2FederatedUser;

  /**
   * @schema Macie2UserIdentity#iamUser
   */
  readonly iamUser?: Macie2IamUser;

  /**
   * @schema Macie2UserIdentity#root
   */
  readonly root?: Macie2UserIdentityRoot;

  /**
   * @schema Macie2UserIdentity#type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'Macie2UserIdentity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2UserIdentity(obj: Macie2UserIdentity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assumedRole': toJson_Macie2AssumedRole(obj.assumedRole),
    'awsAccount': toJson_Macie2AwsAccount(obj.awsAccount),
    'awsService': toJson_Macie2AwsService(obj.awsService),
    'federatedUser': toJson_Macie2FederatedUser(obj.federatedUser),
    'iamUser': toJson_Macie2IamUser(obj.iamUser),
    'root': toJson_Macie2UserIdentityRoot(obj.root),
    'type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2ServerSideEncryption
 */
export interface Macie2ServerSideEncryption {
  /**
   * @schema Macie2ServerSideEncryption#encryptionType
   */
  readonly encryptionType?: string;

  /**
   * @schema Macie2ServerSideEncryption#kmsMasterKeyId
   */
  readonly kmsMasterKeyId?: string;

}

/**
 * Converts an object of type 'Macie2ServerSideEncryption' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2ServerSideEncryption(obj: Macie2ServerSideEncryption | undefined): Record<string, any> | undefined {
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
 * @schema Macie2S3BucketOwner
 */
export interface Macie2S3BucketOwner {
  /**
   * @schema Macie2S3BucketOwner#displayName
   */
  readonly displayName?: string;

  /**
   * @schema Macie2S3BucketOwner#id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'Macie2S3BucketOwner' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2S3BucketOwner(obj: Macie2S3BucketOwner | undefined): Record<string, any> | undefined {
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
 * @schema Macie2SearchResourcesSimpleCriterion
 */
export interface Macie2SearchResourcesSimpleCriterion {
  /**
   * @schema Macie2SearchResourcesSimpleCriterion#comparator
   */
  readonly comparator?: string;

  /**
   * @schema Macie2SearchResourcesSimpleCriterion#key
   */
  readonly key?: string;

  /**
   * @schema Macie2SearchResourcesSimpleCriterion#values
   */
  readonly values?: string[];

}

/**
 * Converts an object of type 'Macie2SearchResourcesSimpleCriterion' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2SearchResourcesSimpleCriterion(obj: Macie2SearchResourcesSimpleCriterion | undefined): Record<string, any> | undefined {
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
 * @schema Macie2SearchResourcesTagCriterion
 */
export interface Macie2SearchResourcesTagCriterion {
  /**
   * @schema Macie2SearchResourcesTagCriterion#comparator
   */
  readonly comparator?: string;

  /**
   * @schema Macie2SearchResourcesTagCriterion#tagValues
   */
  readonly tagValues?: Macie2SearchResourcesTagCriterionPair[];

}

/**
 * Converts an object of type 'Macie2SearchResourcesTagCriterion' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2SearchResourcesTagCriterion(obj: Macie2SearchResourcesTagCriterion | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'comparator': obj.comparator,
    'tagValues': obj.tagValues?.map(y => toJson_Macie2SearchResourcesTagCriterionPair(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2SimpleScopeTerm
 */
export interface Macie2SimpleScopeTerm {
  /**
   * @schema Macie2SimpleScopeTerm#comparator
   */
  readonly comparator?: string;

  /**
   * @schema Macie2SimpleScopeTerm#key
   */
  readonly key?: string;

  /**
   * @schema Macie2SimpleScopeTerm#values
   */
  readonly values?: string[];

}

/**
 * Converts an object of type 'Macie2SimpleScopeTerm' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2SimpleScopeTerm(obj: Macie2SimpleScopeTerm | undefined): Record<string, any> | undefined {
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
 * @schema Macie2TagScopeTerm
 */
export interface Macie2TagScopeTerm {
  /**
   * @schema Macie2TagScopeTerm#comparator
   */
  readonly comparator?: string;

  /**
   * @schema Macie2TagScopeTerm#key
   */
  readonly key?: string;

  /**
   * @schema Macie2TagScopeTerm#tagValues
   */
  readonly tagValues?: Macie2TagValuePair[];

  /**
   * @schema Macie2TagScopeTerm#target
   */
  readonly target?: string;

}

/**
 * Converts an object of type 'Macie2TagScopeTerm' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2TagScopeTerm(obj: Macie2TagScopeTerm | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'comparator': obj.comparator,
    'key': obj.key,
    'tagValues': obj.tagValues?.map(y => toJson_Macie2TagValuePair(y)),
    'target': obj.target,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2SimpleCriterionForJob
 */
export interface Macie2SimpleCriterionForJob {
  /**
   * @schema Macie2SimpleCriterionForJob#comparator
   */
  readonly comparator?: string;

  /**
   * @schema Macie2SimpleCriterionForJob#key
   */
  readonly key?: string;

  /**
   * @schema Macie2SimpleCriterionForJob#values
   */
  readonly values?: string[];

}

/**
 * Converts an object of type 'Macie2SimpleCriterionForJob' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2SimpleCriterionForJob(obj: Macie2SimpleCriterionForJob | undefined): Record<string, any> | undefined {
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
 * @schema Macie2TagCriterionForJob
 */
export interface Macie2TagCriterionForJob {
  /**
   * @schema Macie2TagCriterionForJob#comparator
   */
  readonly comparator?: string;

  /**
   * @schema Macie2TagCriterionForJob#tagValues
   */
  readonly tagValues?: Macie2TagCriterionPairForJob[];

}

/**
 * Converts an object of type 'Macie2TagCriterionForJob' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2TagCriterionForJob(obj: Macie2TagCriterionForJob | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'comparator': obj.comparator,
    'tagValues': obj.tagValues?.map(y => toJson_Macie2TagCriterionPairForJob(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2BlockPublicAccess
 */
export interface Macie2BlockPublicAccess {
  /**
   * @schema Macie2BlockPublicAccess#blockPublicAcls
   */
  readonly blockPublicAcls?: boolean;

  /**
   * @schema Macie2BlockPublicAccess#blockPublicPolicy
   */
  readonly blockPublicPolicy?: boolean;

  /**
   * @schema Macie2BlockPublicAccess#ignorePublicAcls
   */
  readonly ignorePublicAcls?: boolean;

  /**
   * @schema Macie2BlockPublicAccess#restrictPublicBuckets
   */
  readonly restrictPublicBuckets?: boolean;

}

/**
 * Converts an object of type 'Macie2BlockPublicAccess' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2BlockPublicAccess(obj: Macie2BlockPublicAccess | undefined): Record<string, any> | undefined {
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
 * @schema Macie2AccessControlList
 */
export interface Macie2AccessControlList {
  /**
   * @schema Macie2AccessControlList#allowsPublicReadAccess
   */
  readonly allowsPublicReadAccess?: boolean;

  /**
   * @schema Macie2AccessControlList#allowsPublicWriteAccess
   */
  readonly allowsPublicWriteAccess?: boolean;

}

/**
 * Converts an object of type 'Macie2AccessControlList' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2AccessControlList(obj: Macie2AccessControlList | undefined): Record<string, any> | undefined {
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
 * @schema Macie2BucketPolicy
 */
export interface Macie2BucketPolicy {
  /**
   * @schema Macie2BucketPolicy#allowsPublicReadAccess
   */
  readonly allowsPublicReadAccess?: boolean;

  /**
   * @schema Macie2BucketPolicy#allowsPublicWriteAccess
   */
  readonly allowsPublicWriteAccess?: boolean;

}

/**
 * Converts an object of type 'Macie2BucketPolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2BucketPolicy(obj: Macie2BucketPolicy | undefined): Record<string, any> | undefined {
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
 * @schema Macie2CustomDetection
 */
export interface Macie2CustomDetection {
  /**
   * @schema Macie2CustomDetection#arn
   */
  readonly arn?: string;

  /**
   * @schema Macie2CustomDetection#count
   */
  readonly count?: number;

  /**
   * @schema Macie2CustomDetection#name
   */
  readonly name?: string;

  /**
   * @schema Macie2CustomDetection#occurrences
   */
  readonly occurrences?: Macie2Occurrences;

}

/**
 * Converts an object of type 'Macie2CustomDetection' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2CustomDetection(obj: Macie2CustomDetection | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'count': obj.count,
    'name': obj.name,
    'occurrences': toJson_Macie2Occurrences(obj.occurrences),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2DefaultDetection
 */
export interface Macie2DefaultDetection {
  /**
   * @schema Macie2DefaultDetection#count
   */
  readonly count?: number;

  /**
   * @schema Macie2DefaultDetection#occurrences
   */
  readonly occurrences?: Macie2Occurrences;

  /**
   * @schema Macie2DefaultDetection#type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'Macie2DefaultDetection' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2DefaultDetection(obj: Macie2DefaultDetection | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'count': obj.count,
    'occurrences': toJson_Macie2Occurrences(obj.occurrences),
    'type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2IpCity
 */
export interface Macie2IpCity {
  /**
   * @schema Macie2IpCity#name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'Macie2IpCity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2IpCity(obj: Macie2IpCity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2IpCountry
 */
export interface Macie2IpCountry {
  /**
   * @schema Macie2IpCountry#code
   */
  readonly code?: string;

  /**
   * @schema Macie2IpCountry#name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'Macie2IpCountry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2IpCountry(obj: Macie2IpCountry | undefined): Record<string, any> | undefined {
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
 * @schema Macie2IpGeoLocation
 */
export interface Macie2IpGeoLocation {
  /**
   * @schema Macie2IpGeoLocation#lat
   */
  readonly lat?: number;

  /**
   * @schema Macie2IpGeoLocation#lon
   */
  readonly lon?: number;

}

/**
 * Converts an object of type 'Macie2IpGeoLocation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2IpGeoLocation(obj: Macie2IpGeoLocation | undefined): Record<string, any> | undefined {
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
 * @schema Macie2IpOwner
 */
export interface Macie2IpOwner {
  /**
   * @schema Macie2IpOwner#asn
   */
  readonly asn?: string;

  /**
   * @schema Macie2IpOwner#asnOrg
   */
  readonly asnOrg?: string;

  /**
   * @schema Macie2IpOwner#isp
   */
  readonly isp?: string;

  /**
   * @schema Macie2IpOwner#org
   */
  readonly org?: string;

}

/**
 * Converts an object of type 'Macie2IpOwner' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2IpOwner(obj: Macie2IpOwner | undefined): Record<string, any> | undefined {
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
 * @schema Macie2AssumedRole
 */
export interface Macie2AssumedRole {
  /**
   * @schema Macie2AssumedRole#accessKeyId
   */
  readonly accessKeyId?: string;

  /**
   * @schema Macie2AssumedRole#accountId
   */
  readonly accountId?: string;

  /**
   * @schema Macie2AssumedRole#arn
   */
  readonly arn?: string;

  /**
   * @schema Macie2AssumedRole#principalId
   */
  readonly principalId?: string;

  /**
   * @schema Macie2AssumedRole#sessionContext
   */
  readonly sessionContext?: Macie2SessionContext;

}

/**
 * Converts an object of type 'Macie2AssumedRole' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2AssumedRole(obj: Macie2AssumedRole | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accessKeyId': obj.accessKeyId,
    'accountId': obj.accountId,
    'arn': obj.arn,
    'principalId': obj.principalId,
    'sessionContext': toJson_Macie2SessionContext(obj.sessionContext),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2AwsAccount
 */
export interface Macie2AwsAccount {
  /**
   * @schema Macie2AwsAccount#accountId
   */
  readonly accountId?: string;

  /**
   * @schema Macie2AwsAccount#principalId
   */
  readonly principalId?: string;

}

/**
 * Converts an object of type 'Macie2AwsAccount' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2AwsAccount(obj: Macie2AwsAccount | undefined): Record<string, any> | undefined {
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
 * @schema Macie2AwsService
 */
export interface Macie2AwsService {
  /**
   * @schema Macie2AwsService#invokedBy
   */
  readonly invokedBy?: string;

}

/**
 * Converts an object of type 'Macie2AwsService' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2AwsService(obj: Macie2AwsService | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'invokedBy': obj.invokedBy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2FederatedUser
 */
export interface Macie2FederatedUser {
  /**
   * @schema Macie2FederatedUser#accessKeyId
   */
  readonly accessKeyId?: string;

  /**
   * @schema Macie2FederatedUser#accountId
   */
  readonly accountId?: string;

  /**
   * @schema Macie2FederatedUser#arn
   */
  readonly arn?: string;

  /**
   * @schema Macie2FederatedUser#principalId
   */
  readonly principalId?: string;

  /**
   * @schema Macie2FederatedUser#sessionContext
   */
  readonly sessionContext?: Macie2SessionContext;

}

/**
 * Converts an object of type 'Macie2FederatedUser' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2FederatedUser(obj: Macie2FederatedUser | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accessKeyId': obj.accessKeyId,
    'accountId': obj.accountId,
    'arn': obj.arn,
    'principalId': obj.principalId,
    'sessionContext': toJson_Macie2SessionContext(obj.sessionContext),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2IamUser
 */
export interface Macie2IamUser {
  /**
   * @schema Macie2IamUser#accountId
   */
  readonly accountId?: string;

  /**
   * @schema Macie2IamUser#arn
   */
  readonly arn?: string;

  /**
   * @schema Macie2IamUser#principalId
   */
  readonly principalId?: string;

  /**
   * @schema Macie2IamUser#userName
   */
  readonly userName?: string;

}

/**
 * Converts an object of type 'Macie2IamUser' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2IamUser(obj: Macie2IamUser | undefined): Record<string, any> | undefined {
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
 * @schema Macie2UserIdentityRoot
 */
export interface Macie2UserIdentityRoot {
  /**
   * @schema Macie2UserIdentityRoot#accountId
   */
  readonly accountId?: string;

  /**
   * @schema Macie2UserIdentityRoot#arn
   */
  readonly arn?: string;

  /**
   * @schema Macie2UserIdentityRoot#principalId
   */
  readonly principalId?: string;

}

/**
 * Converts an object of type 'Macie2UserIdentityRoot' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2UserIdentityRoot(obj: Macie2UserIdentityRoot | undefined): Record<string, any> | undefined {
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
 * @schema Macie2SearchResourcesTagCriterionPair
 */
export interface Macie2SearchResourcesTagCriterionPair {
  /**
   * @schema Macie2SearchResourcesTagCriterionPair#key
   */
  readonly key?: string;

  /**
   * @schema Macie2SearchResourcesTagCriterionPair#value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'Macie2SearchResourcesTagCriterionPair' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2SearchResourcesTagCriterionPair(obj: Macie2SearchResourcesTagCriterionPair | undefined): Record<string, any> | undefined {
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
 * @schema Macie2TagValuePair
 */
export interface Macie2TagValuePair {
  /**
   * @schema Macie2TagValuePair#key
   */
  readonly key?: string;

  /**
   * @schema Macie2TagValuePair#value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'Macie2TagValuePair' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2TagValuePair(obj: Macie2TagValuePair | undefined): Record<string, any> | undefined {
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
 * @schema Macie2TagCriterionPairForJob
 */
export interface Macie2TagCriterionPairForJob {
  /**
   * @schema Macie2TagCriterionPairForJob#key
   */
  readonly key?: string;

  /**
   * @schema Macie2TagCriterionPairForJob#value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'Macie2TagCriterionPairForJob' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2TagCriterionPairForJob(obj: Macie2TagCriterionPairForJob | undefined): Record<string, any> | undefined {
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
 * @schema Macie2Occurrences
 */
export interface Macie2Occurrences {
  /**
   * @schema Macie2Occurrences#cells
   */
  readonly cells?: Macie2Cell[];

  /**
   * @schema Macie2Occurrences#lineRanges
   */
  readonly lineRanges?: Macie2Range[];

  /**
   * @schema Macie2Occurrences#offsetRanges
   */
  readonly offsetRanges?: Macie2Range[];

  /**
   * @schema Macie2Occurrences#pages
   */
  readonly pages?: Macie2Page[];

  /**
   * @schema Macie2Occurrences#records
   */
  readonly records?: Macie2Record[];

}

/**
 * Converts an object of type 'Macie2Occurrences' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2Occurrences(obj: Macie2Occurrences | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'cells': obj.cells?.map(y => toJson_Macie2Cell(y)),
    'lineRanges': obj.lineRanges?.map(y => toJson_Macie2Range(y)),
    'offsetRanges': obj.offsetRanges?.map(y => toJson_Macie2Range(y)),
    'pages': obj.pages?.map(y => toJson_Macie2Page(y)),
    'records': obj.records?.map(y => toJson_Macie2Record(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2SessionContext
 */
export interface Macie2SessionContext {
  /**
   * @schema Macie2SessionContext#attributes
   */
  readonly attributes?: Macie2SessionContextAttributes;

  /**
   * @schema Macie2SessionContext#sessionIssuer
   */
  readonly sessionIssuer?: Macie2SessionIssuer;

}

/**
 * Converts an object of type 'Macie2SessionContext' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2SessionContext(obj: Macie2SessionContext | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'attributes': toJson_Macie2SessionContextAttributes(obj.attributes),
    'sessionIssuer': toJson_Macie2SessionIssuer(obj.sessionIssuer),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2Cell
 */
export interface Macie2Cell {
  /**
   * @schema Macie2Cell#cellReference
   */
  readonly cellReference?: string;

  /**
   * @schema Macie2Cell#column
   */
  readonly column?: number;

  /**
   * @schema Macie2Cell#columnName
   */
  readonly columnName?: string;

  /**
   * @schema Macie2Cell#row
   */
  readonly row?: number;

}

/**
 * Converts an object of type 'Macie2Cell' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2Cell(obj: Macie2Cell | undefined): Record<string, any> | undefined {
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
 * @schema Macie2Range
 */
export interface Macie2Range {
  /**
   * @schema Macie2Range#end
   */
  readonly end?: number;

  /**
   * @schema Macie2Range#start
   */
  readonly start?: number;

  /**
   * @schema Macie2Range#startColumn
   */
  readonly startColumn?: number;

}

/**
 * Converts an object of type 'Macie2Range' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2Range(obj: Macie2Range | undefined): Record<string, any> | undefined {
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
 * @schema Macie2Page
 */
export interface Macie2Page {
  /**
   * @schema Macie2Page#lineRange
   */
  readonly lineRange?: Macie2Range;

  /**
   * @schema Macie2Page#offsetRange
   */
  readonly offsetRange?: Macie2Range;

  /**
   * @schema Macie2Page#pageNumber
   */
  readonly pageNumber?: number;

}

/**
 * Converts an object of type 'Macie2Page' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2Page(obj: Macie2Page | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'lineRange': toJson_Macie2Range(obj.lineRange),
    'offsetRange': toJson_Macie2Range(obj.offsetRange),
    'pageNumber': obj.pageNumber,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Macie2Record
 */
export interface Macie2Record {
  /**
   * @schema Macie2Record#jsonPath
   */
  readonly jsonPath?: string;

  /**
   * @schema Macie2Record#recordIndex
   */
  readonly recordIndex?: number;

}

/**
 * Converts an object of type 'Macie2Record' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2Record(obj: Macie2Record | undefined): Record<string, any> | undefined {
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
 * @schema Macie2SessionContextAttributes
 */
export interface Macie2SessionContextAttributes {
  /**
   * @schema Macie2SessionContextAttributes#creationDate
   */
  readonly creationDate?: string;

  /**
   * @schema Macie2SessionContextAttributes#mfaAuthenticated
   */
  readonly mfaAuthenticated?: boolean;

}

/**
 * Converts an object of type 'Macie2SessionContextAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2SessionContextAttributes(obj: Macie2SessionContextAttributes | undefined): Record<string, any> | undefined {
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
 * @schema Macie2SessionIssuer
 */
export interface Macie2SessionIssuer {
  /**
   * @schema Macie2SessionIssuer#accountId
   */
  readonly accountId?: string;

  /**
   * @schema Macie2SessionIssuer#arn
   */
  readonly arn?: string;

  /**
   * @schema Macie2SessionIssuer#principalId
   */
  readonly principalId?: string;

  /**
   * @schema Macie2SessionIssuer#type
   */
  readonly type?: string;

  /**
   * @schema Macie2SessionIssuer#userName
   */
  readonly userName?: string;

}

/**
 * Converts an object of type 'Macie2SessionIssuer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Macie2SessionIssuer(obj: Macie2SessionIssuer | undefined): Record<string, any> | undefined {
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
