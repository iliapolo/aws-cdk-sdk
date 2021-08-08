/**
 * @schema GuardDutyAcceptInvitationRequest
 */
export interface GuardDutyAcceptInvitationRequest {
  /**
   * @schema GuardDutyAcceptInvitationRequest#DetectorId
   */
  readonly detectorId?: string;

  /**
   * @schema GuardDutyAcceptInvitationRequest#MasterId
   */
  readonly masterId?: string;

  /**
   * @schema GuardDutyAcceptInvitationRequest#InvitationId
   */
  readonly invitationId?: string;

}

/**
 * Converts an object of type 'GuardDutyAcceptInvitationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyAcceptInvitationRequest(obj: GuardDutyAcceptInvitationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DetectorId': obj.detectorId,
    'MasterId': obj.masterId,
    'InvitationId': obj.invitationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyAcceptInvitationResponse
 */
export interface GuardDutyAcceptInvitationResponse {
}

/**
 * Converts an object of type 'GuardDutyAcceptInvitationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyAcceptInvitationResponse(obj: GuardDutyAcceptInvitationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyArchiveFindingsRequest
 */
export interface GuardDutyArchiveFindingsRequest {
  /**
   * @schema GuardDutyArchiveFindingsRequest#DetectorId
   */
  readonly detectorId?: string;

  /**
   * @schema GuardDutyArchiveFindingsRequest#FindingIds
   */
  readonly findingIds?: string[];

}

/**
 * Converts an object of type 'GuardDutyArchiveFindingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyArchiveFindingsRequest(obj: GuardDutyArchiveFindingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DetectorId': obj.detectorId,
    'FindingIds': obj.findingIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyArchiveFindingsResponse
 */
export interface GuardDutyArchiveFindingsResponse {
}

/**
 * Converts an object of type 'GuardDutyArchiveFindingsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyArchiveFindingsResponse(obj: GuardDutyArchiveFindingsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyCreateDetectorRequest
 */
export interface GuardDutyCreateDetectorRequest {
  /**
   * @schema GuardDutyCreateDetectorRequest#Enable
   */
  readonly enable?: boolean;

  /**
   * @schema GuardDutyCreateDetectorRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema GuardDutyCreateDetectorRequest#FindingPublishingFrequency
   */
  readonly findingPublishingFrequency?: string;

  /**
   * @schema GuardDutyCreateDetectorRequest#DataSources
   */
  readonly dataSources?: GuardDutyDataSourceConfigurations;

  /**
   * @schema GuardDutyCreateDetectorRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'GuardDutyCreateDetectorRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyCreateDetectorRequest(obj: GuardDutyCreateDetectorRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Enable': obj.enable,
    'ClientToken': obj.clientToken,
    'FindingPublishingFrequency': obj.findingPublishingFrequency,
    'DataSources': toJson_GuardDutyDataSourceConfigurations(obj.dataSources),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyCreateDetectorResponse
 */
export interface GuardDutyCreateDetectorResponse {
  /**
   * @schema GuardDutyCreateDetectorResponse#DetectorId
   */
  readonly detectorId?: string;

}

/**
 * Converts an object of type 'GuardDutyCreateDetectorResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyCreateDetectorResponse(obj: GuardDutyCreateDetectorResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DetectorId': obj.detectorId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyCreateFilterRequest
 */
export interface GuardDutyCreateFilterRequest {
  /**
   * @schema GuardDutyCreateFilterRequest#DetectorId
   */
  readonly detectorId?: string;

  /**
   * @schema GuardDutyCreateFilterRequest#Name
   */
  readonly name?: string;

  /**
   * @schema GuardDutyCreateFilterRequest#Description
   */
  readonly description?: string;

  /**
   * @schema GuardDutyCreateFilterRequest#Action
   */
  readonly action?: string;

  /**
   * @schema GuardDutyCreateFilterRequest#Rank
   */
  readonly rank?: number;

  /**
   * @schema GuardDutyCreateFilterRequest#FindingCriteria
   */
  readonly findingCriteria?: GuardDutyFindingCriteria;

  /**
   * @schema GuardDutyCreateFilterRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema GuardDutyCreateFilterRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'GuardDutyCreateFilterRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyCreateFilterRequest(obj: GuardDutyCreateFilterRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DetectorId': obj.detectorId,
    'Name': obj.name,
    'Description': obj.description,
    'Action': obj.action,
    'Rank': obj.rank,
    'FindingCriteria': toJson_GuardDutyFindingCriteria(obj.findingCriteria),
    'ClientToken': obj.clientToken,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyCreateFilterResponse
 */
export interface GuardDutyCreateFilterResponse {
  /**
   * @schema GuardDutyCreateFilterResponse#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'GuardDutyCreateFilterResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyCreateFilterResponse(obj: GuardDutyCreateFilterResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyCreateIpSetRequest
 */
export interface GuardDutyCreateIpSetRequest {
  /**
   * @schema GuardDutyCreateIpSetRequest#DetectorId
   */
  readonly detectorId?: string;

  /**
   * @schema GuardDutyCreateIpSetRequest#Name
   */
  readonly name?: string;

  /**
   * @schema GuardDutyCreateIpSetRequest#Format
   */
  readonly format?: string;

  /**
   * @schema GuardDutyCreateIpSetRequest#Location
   */
  readonly location?: string;

  /**
   * @schema GuardDutyCreateIpSetRequest#Activate
   */
  readonly activate?: boolean;

  /**
   * @schema GuardDutyCreateIpSetRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema GuardDutyCreateIpSetRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'GuardDutyCreateIpSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyCreateIpSetRequest(obj: GuardDutyCreateIpSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DetectorId': obj.detectorId,
    'Name': obj.name,
    'Format': obj.format,
    'Location': obj.location,
    'Activate': obj.activate,
    'ClientToken': obj.clientToken,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyCreateIpSetResponse
 */
export interface GuardDutyCreateIpSetResponse {
  /**
   * @schema GuardDutyCreateIpSetResponse#IpSetId
   */
  readonly ipSetId?: string;

}

/**
 * Converts an object of type 'GuardDutyCreateIpSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyCreateIpSetResponse(obj: GuardDutyCreateIpSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IpSetId': obj.ipSetId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyCreateMembersRequest
 */
export interface GuardDutyCreateMembersRequest {
  /**
   * @schema GuardDutyCreateMembersRequest#DetectorId
   */
  readonly detectorId?: string;

  /**
   * @schema GuardDutyCreateMembersRequest#AccountDetails
   */
  readonly accountDetails?: GuardDutyAccountDetail[];

}

/**
 * Converts an object of type 'GuardDutyCreateMembersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyCreateMembersRequest(obj: GuardDutyCreateMembersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DetectorId': obj.detectorId,
    'AccountDetails': obj.accountDetails?.map(y => toJson_GuardDutyAccountDetail(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyCreateMembersResponse
 */
export interface GuardDutyCreateMembersResponse {
  /**
   * @schema GuardDutyCreateMembersResponse#UnprocessedAccounts
   */
  readonly unprocessedAccounts?: GuardDutyUnprocessedAccount[];

}

/**
 * Converts an object of type 'GuardDutyCreateMembersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyCreateMembersResponse(obj: GuardDutyCreateMembersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UnprocessedAccounts': obj.unprocessedAccounts?.map(y => toJson_GuardDutyUnprocessedAccount(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyCreatePublishingDestinationRequest
 */
export interface GuardDutyCreatePublishingDestinationRequest {
  /**
   * @schema GuardDutyCreatePublishingDestinationRequest#DetectorId
   */
  readonly detectorId?: string;

  /**
   * @schema GuardDutyCreatePublishingDestinationRequest#DestinationType
   */
  readonly destinationType?: string;

  /**
   * @schema GuardDutyCreatePublishingDestinationRequest#DestinationProperties
   */
  readonly destinationProperties?: GuardDutyDestinationProperties;

  /**
   * @schema GuardDutyCreatePublishingDestinationRequest#ClientToken
   */
  readonly clientToken?: string;

}

/**
 * Converts an object of type 'GuardDutyCreatePublishingDestinationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyCreatePublishingDestinationRequest(obj: GuardDutyCreatePublishingDestinationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DetectorId': obj.detectorId,
    'DestinationType': obj.destinationType,
    'DestinationProperties': toJson_GuardDutyDestinationProperties(obj.destinationProperties),
    'ClientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyCreatePublishingDestinationResponse
 */
export interface GuardDutyCreatePublishingDestinationResponse {
  /**
   * @schema GuardDutyCreatePublishingDestinationResponse#DestinationId
   */
  readonly destinationId?: string;

}

/**
 * Converts an object of type 'GuardDutyCreatePublishingDestinationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyCreatePublishingDestinationResponse(obj: GuardDutyCreatePublishingDestinationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DestinationId': obj.destinationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyCreateSampleFindingsRequest
 */
export interface GuardDutyCreateSampleFindingsRequest {
  /**
   * @schema GuardDutyCreateSampleFindingsRequest#DetectorId
   */
  readonly detectorId?: string;

  /**
   * @schema GuardDutyCreateSampleFindingsRequest#FindingTypes
   */
  readonly findingTypes?: string[];

}

/**
 * Converts an object of type 'GuardDutyCreateSampleFindingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyCreateSampleFindingsRequest(obj: GuardDutyCreateSampleFindingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DetectorId': obj.detectorId,
    'FindingTypes': obj.findingTypes?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyCreateSampleFindingsResponse
 */
export interface GuardDutyCreateSampleFindingsResponse {
}

/**
 * Converts an object of type 'GuardDutyCreateSampleFindingsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyCreateSampleFindingsResponse(obj: GuardDutyCreateSampleFindingsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyCreateThreatIntelSetRequest
 */
export interface GuardDutyCreateThreatIntelSetRequest {
  /**
   * @schema GuardDutyCreateThreatIntelSetRequest#DetectorId
   */
  readonly detectorId?: string;

  /**
   * @schema GuardDutyCreateThreatIntelSetRequest#Name
   */
  readonly name?: string;

  /**
   * @schema GuardDutyCreateThreatIntelSetRequest#Format
   */
  readonly format?: string;

  /**
   * @schema GuardDutyCreateThreatIntelSetRequest#Location
   */
  readonly location?: string;

  /**
   * @schema GuardDutyCreateThreatIntelSetRequest#Activate
   */
  readonly activate?: boolean;

  /**
   * @schema GuardDutyCreateThreatIntelSetRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema GuardDutyCreateThreatIntelSetRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'GuardDutyCreateThreatIntelSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyCreateThreatIntelSetRequest(obj: GuardDutyCreateThreatIntelSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DetectorId': obj.detectorId,
    'Name': obj.name,
    'Format': obj.format,
    'Location': obj.location,
    'Activate': obj.activate,
    'ClientToken': obj.clientToken,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyCreateThreatIntelSetResponse
 */
export interface GuardDutyCreateThreatIntelSetResponse {
  /**
   * @schema GuardDutyCreateThreatIntelSetResponse#ThreatIntelSetId
   */
  readonly threatIntelSetId?: string;

}

/**
 * Converts an object of type 'GuardDutyCreateThreatIntelSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyCreateThreatIntelSetResponse(obj: GuardDutyCreateThreatIntelSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ThreatIntelSetId': obj.threatIntelSetId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyDeclineInvitationsRequest
 */
export interface GuardDutyDeclineInvitationsRequest {
  /**
   * @schema GuardDutyDeclineInvitationsRequest#AccountIds
   */
  readonly accountIds?: string[];

}

/**
 * Converts an object of type 'GuardDutyDeclineInvitationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyDeclineInvitationsRequest(obj: GuardDutyDeclineInvitationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountIds': obj.accountIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyDeclineInvitationsResponse
 */
export interface GuardDutyDeclineInvitationsResponse {
  /**
   * @schema GuardDutyDeclineInvitationsResponse#UnprocessedAccounts
   */
  readonly unprocessedAccounts?: GuardDutyUnprocessedAccount[];

}

/**
 * Converts an object of type 'GuardDutyDeclineInvitationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyDeclineInvitationsResponse(obj: GuardDutyDeclineInvitationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UnprocessedAccounts': obj.unprocessedAccounts?.map(y => toJson_GuardDutyUnprocessedAccount(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyDeleteDetectorRequest
 */
export interface GuardDutyDeleteDetectorRequest {
  /**
   * @schema GuardDutyDeleteDetectorRequest#DetectorId
   */
  readonly detectorId?: string;

}

/**
 * Converts an object of type 'GuardDutyDeleteDetectorRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyDeleteDetectorRequest(obj: GuardDutyDeleteDetectorRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DetectorId': obj.detectorId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyDeleteDetectorResponse
 */
export interface GuardDutyDeleteDetectorResponse {
}

/**
 * Converts an object of type 'GuardDutyDeleteDetectorResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyDeleteDetectorResponse(obj: GuardDutyDeleteDetectorResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyDeleteFilterRequest
 */
export interface GuardDutyDeleteFilterRequest {
  /**
   * @schema GuardDutyDeleteFilterRequest#DetectorId
   */
  readonly detectorId?: string;

  /**
   * @schema GuardDutyDeleteFilterRequest#FilterName
   */
  readonly filterName?: string;

}

/**
 * Converts an object of type 'GuardDutyDeleteFilterRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyDeleteFilterRequest(obj: GuardDutyDeleteFilterRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DetectorId': obj.detectorId,
    'FilterName': obj.filterName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyDeleteFilterResponse
 */
export interface GuardDutyDeleteFilterResponse {
}

/**
 * Converts an object of type 'GuardDutyDeleteFilterResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyDeleteFilterResponse(obj: GuardDutyDeleteFilterResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyDeleteIpSetRequest
 */
export interface GuardDutyDeleteIpSetRequest {
  /**
   * @schema GuardDutyDeleteIpSetRequest#DetectorId
   */
  readonly detectorId?: string;

  /**
   * @schema GuardDutyDeleteIpSetRequest#IpSetId
   */
  readonly ipSetId?: string;

}

/**
 * Converts an object of type 'GuardDutyDeleteIpSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyDeleteIpSetRequest(obj: GuardDutyDeleteIpSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DetectorId': obj.detectorId,
    'IpSetId': obj.ipSetId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyDeleteIpSetResponse
 */
export interface GuardDutyDeleteIpSetResponse {
}

/**
 * Converts an object of type 'GuardDutyDeleteIpSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyDeleteIpSetResponse(obj: GuardDutyDeleteIpSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyDeleteInvitationsRequest
 */
export interface GuardDutyDeleteInvitationsRequest {
  /**
   * @schema GuardDutyDeleteInvitationsRequest#AccountIds
   */
  readonly accountIds?: string[];

}

/**
 * Converts an object of type 'GuardDutyDeleteInvitationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyDeleteInvitationsRequest(obj: GuardDutyDeleteInvitationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountIds': obj.accountIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyDeleteInvitationsResponse
 */
export interface GuardDutyDeleteInvitationsResponse {
  /**
   * @schema GuardDutyDeleteInvitationsResponse#UnprocessedAccounts
   */
  readonly unprocessedAccounts?: GuardDutyUnprocessedAccount[];

}

/**
 * Converts an object of type 'GuardDutyDeleteInvitationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyDeleteInvitationsResponse(obj: GuardDutyDeleteInvitationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UnprocessedAccounts': obj.unprocessedAccounts?.map(y => toJson_GuardDutyUnprocessedAccount(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyDeleteMembersRequest
 */
export interface GuardDutyDeleteMembersRequest {
  /**
   * @schema GuardDutyDeleteMembersRequest#DetectorId
   */
  readonly detectorId?: string;

  /**
   * @schema GuardDutyDeleteMembersRequest#AccountIds
   */
  readonly accountIds?: string[];

}

/**
 * Converts an object of type 'GuardDutyDeleteMembersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyDeleteMembersRequest(obj: GuardDutyDeleteMembersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DetectorId': obj.detectorId,
    'AccountIds': obj.accountIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyDeleteMembersResponse
 */
export interface GuardDutyDeleteMembersResponse {
  /**
   * @schema GuardDutyDeleteMembersResponse#UnprocessedAccounts
   */
  readonly unprocessedAccounts?: GuardDutyUnprocessedAccount[];

}

/**
 * Converts an object of type 'GuardDutyDeleteMembersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyDeleteMembersResponse(obj: GuardDutyDeleteMembersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UnprocessedAccounts': obj.unprocessedAccounts?.map(y => toJson_GuardDutyUnprocessedAccount(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyDeletePublishingDestinationRequest
 */
export interface GuardDutyDeletePublishingDestinationRequest {
  /**
   * @schema GuardDutyDeletePublishingDestinationRequest#DetectorId
   */
  readonly detectorId?: string;

  /**
   * @schema GuardDutyDeletePublishingDestinationRequest#DestinationId
   */
  readonly destinationId?: string;

}

/**
 * Converts an object of type 'GuardDutyDeletePublishingDestinationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyDeletePublishingDestinationRequest(obj: GuardDutyDeletePublishingDestinationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DetectorId': obj.detectorId,
    'DestinationId': obj.destinationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyDeletePublishingDestinationResponse
 */
export interface GuardDutyDeletePublishingDestinationResponse {
}

/**
 * Converts an object of type 'GuardDutyDeletePublishingDestinationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyDeletePublishingDestinationResponse(obj: GuardDutyDeletePublishingDestinationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyDeleteThreatIntelSetRequest
 */
export interface GuardDutyDeleteThreatIntelSetRequest {
  /**
   * @schema GuardDutyDeleteThreatIntelSetRequest#DetectorId
   */
  readonly detectorId?: string;

  /**
   * @schema GuardDutyDeleteThreatIntelSetRequest#ThreatIntelSetId
   */
  readonly threatIntelSetId?: string;

}

/**
 * Converts an object of type 'GuardDutyDeleteThreatIntelSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyDeleteThreatIntelSetRequest(obj: GuardDutyDeleteThreatIntelSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DetectorId': obj.detectorId,
    'ThreatIntelSetId': obj.threatIntelSetId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyDeleteThreatIntelSetResponse
 */
export interface GuardDutyDeleteThreatIntelSetResponse {
}

/**
 * Converts an object of type 'GuardDutyDeleteThreatIntelSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyDeleteThreatIntelSetResponse(obj: GuardDutyDeleteThreatIntelSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyDescribeOrganizationConfigurationRequest
 */
export interface GuardDutyDescribeOrganizationConfigurationRequest {
  /**
   * @schema GuardDutyDescribeOrganizationConfigurationRequest#DetectorId
   */
  readonly detectorId?: string;

}

/**
 * Converts an object of type 'GuardDutyDescribeOrganizationConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyDescribeOrganizationConfigurationRequest(obj: GuardDutyDescribeOrganizationConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DetectorId': obj.detectorId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyDescribeOrganizationConfigurationResponse
 */
export interface GuardDutyDescribeOrganizationConfigurationResponse {
  /**
   * @schema GuardDutyDescribeOrganizationConfigurationResponse#AutoEnable
   */
  readonly autoEnable?: boolean;

  /**
   * @schema GuardDutyDescribeOrganizationConfigurationResponse#MemberAccountLimitReached
   */
  readonly memberAccountLimitReached?: boolean;

  /**
   * @schema GuardDutyDescribeOrganizationConfigurationResponse#DataSources
   */
  readonly dataSources?: GuardDutyOrganizationDataSourceConfigurationsResult;

}

/**
 * Converts an object of type 'GuardDutyDescribeOrganizationConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyDescribeOrganizationConfigurationResponse(obj: GuardDutyDescribeOrganizationConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoEnable': obj.autoEnable,
    'MemberAccountLimitReached': obj.memberAccountLimitReached,
    'DataSources': toJson_GuardDutyOrganizationDataSourceConfigurationsResult(obj.dataSources),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyDescribePublishingDestinationRequest
 */
export interface GuardDutyDescribePublishingDestinationRequest {
  /**
   * @schema GuardDutyDescribePublishingDestinationRequest#DetectorId
   */
  readonly detectorId?: string;

  /**
   * @schema GuardDutyDescribePublishingDestinationRequest#DestinationId
   */
  readonly destinationId?: string;

}

/**
 * Converts an object of type 'GuardDutyDescribePublishingDestinationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyDescribePublishingDestinationRequest(obj: GuardDutyDescribePublishingDestinationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DetectorId': obj.detectorId,
    'DestinationId': obj.destinationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyDescribePublishingDestinationResponse
 */
export interface GuardDutyDescribePublishingDestinationResponse {
  /**
   * @schema GuardDutyDescribePublishingDestinationResponse#DestinationId
   */
  readonly destinationId?: string;

  /**
   * @schema GuardDutyDescribePublishingDestinationResponse#DestinationType
   */
  readonly destinationType?: string;

  /**
   * @schema GuardDutyDescribePublishingDestinationResponse#Status
   */
  readonly status?: string;

  /**
   * @schema GuardDutyDescribePublishingDestinationResponse#PublishingFailureStartTimestamp
   */
  readonly publishingFailureStartTimestamp?: number;

  /**
   * @schema GuardDutyDescribePublishingDestinationResponse#DestinationProperties
   */
  readonly destinationProperties?: GuardDutyDestinationProperties;

}

/**
 * Converts an object of type 'GuardDutyDescribePublishingDestinationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyDescribePublishingDestinationResponse(obj: GuardDutyDescribePublishingDestinationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DestinationId': obj.destinationId,
    'DestinationType': obj.destinationType,
    'Status': obj.status,
    'PublishingFailureStartTimestamp': obj.publishingFailureStartTimestamp,
    'DestinationProperties': toJson_GuardDutyDestinationProperties(obj.destinationProperties),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyDisableOrganizationAdminAccountRequest
 */
export interface GuardDutyDisableOrganizationAdminAccountRequest {
  /**
   * @schema GuardDutyDisableOrganizationAdminAccountRequest#AdminAccountId
   */
  readonly adminAccountId?: string;

}

/**
 * Converts an object of type 'GuardDutyDisableOrganizationAdminAccountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyDisableOrganizationAdminAccountRequest(obj: GuardDutyDisableOrganizationAdminAccountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AdminAccountId': obj.adminAccountId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyDisableOrganizationAdminAccountResponse
 */
export interface GuardDutyDisableOrganizationAdminAccountResponse {
}

/**
 * Converts an object of type 'GuardDutyDisableOrganizationAdminAccountResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyDisableOrganizationAdminAccountResponse(obj: GuardDutyDisableOrganizationAdminAccountResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyDisassociateFromMasterAccountRequest
 */
export interface GuardDutyDisassociateFromMasterAccountRequest {
  /**
   * @schema GuardDutyDisassociateFromMasterAccountRequest#DetectorId
   */
  readonly detectorId?: string;

}

/**
 * Converts an object of type 'GuardDutyDisassociateFromMasterAccountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyDisassociateFromMasterAccountRequest(obj: GuardDutyDisassociateFromMasterAccountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DetectorId': obj.detectorId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyDisassociateFromMasterAccountResponse
 */
export interface GuardDutyDisassociateFromMasterAccountResponse {
}

/**
 * Converts an object of type 'GuardDutyDisassociateFromMasterAccountResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyDisassociateFromMasterAccountResponse(obj: GuardDutyDisassociateFromMasterAccountResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyDisassociateMembersRequest
 */
export interface GuardDutyDisassociateMembersRequest {
  /**
   * @schema GuardDutyDisassociateMembersRequest#DetectorId
   */
  readonly detectorId?: string;

  /**
   * @schema GuardDutyDisassociateMembersRequest#AccountIds
   */
  readonly accountIds?: string[];

}

/**
 * Converts an object of type 'GuardDutyDisassociateMembersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyDisassociateMembersRequest(obj: GuardDutyDisassociateMembersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DetectorId': obj.detectorId,
    'AccountIds': obj.accountIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyDisassociateMembersResponse
 */
export interface GuardDutyDisassociateMembersResponse {
  /**
   * @schema GuardDutyDisassociateMembersResponse#UnprocessedAccounts
   */
  readonly unprocessedAccounts?: GuardDutyUnprocessedAccount[];

}

/**
 * Converts an object of type 'GuardDutyDisassociateMembersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyDisassociateMembersResponse(obj: GuardDutyDisassociateMembersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UnprocessedAccounts': obj.unprocessedAccounts?.map(y => toJson_GuardDutyUnprocessedAccount(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyEnableOrganizationAdminAccountRequest
 */
export interface GuardDutyEnableOrganizationAdminAccountRequest {
  /**
   * @schema GuardDutyEnableOrganizationAdminAccountRequest#AdminAccountId
   */
  readonly adminAccountId?: string;

}

/**
 * Converts an object of type 'GuardDutyEnableOrganizationAdminAccountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyEnableOrganizationAdminAccountRequest(obj: GuardDutyEnableOrganizationAdminAccountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AdminAccountId': obj.adminAccountId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyEnableOrganizationAdminAccountResponse
 */
export interface GuardDutyEnableOrganizationAdminAccountResponse {
}

/**
 * Converts an object of type 'GuardDutyEnableOrganizationAdminAccountResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyEnableOrganizationAdminAccountResponse(obj: GuardDutyEnableOrganizationAdminAccountResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyGetDetectorRequest
 */
export interface GuardDutyGetDetectorRequest {
  /**
   * @schema GuardDutyGetDetectorRequest#DetectorId
   */
  readonly detectorId?: string;

}

/**
 * Converts an object of type 'GuardDutyGetDetectorRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyGetDetectorRequest(obj: GuardDutyGetDetectorRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DetectorId': obj.detectorId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyGetDetectorResponse
 */
export interface GuardDutyGetDetectorResponse {
  /**
   * @schema GuardDutyGetDetectorResponse#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema GuardDutyGetDetectorResponse#FindingPublishingFrequency
   */
  readonly findingPublishingFrequency?: string;

  /**
   * @schema GuardDutyGetDetectorResponse#ServiceRole
   */
  readonly serviceRole?: string;

  /**
   * @schema GuardDutyGetDetectorResponse#Status
   */
  readonly status?: string;

  /**
   * @schema GuardDutyGetDetectorResponse#UpdatedAt
   */
  readonly updatedAt?: string;

  /**
   * @schema GuardDutyGetDetectorResponse#DataSources
   */
  readonly dataSources?: GuardDutyDataSourceConfigurationsResult;

  /**
   * @schema GuardDutyGetDetectorResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'GuardDutyGetDetectorResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyGetDetectorResponse(obj: GuardDutyGetDetectorResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CreatedAt': obj.createdAt,
    'FindingPublishingFrequency': obj.findingPublishingFrequency,
    'ServiceRole': obj.serviceRole,
    'Status': obj.status,
    'UpdatedAt': obj.updatedAt,
    'DataSources': toJson_GuardDutyDataSourceConfigurationsResult(obj.dataSources),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyGetFilterRequest
 */
export interface GuardDutyGetFilterRequest {
  /**
   * @schema GuardDutyGetFilterRequest#DetectorId
   */
  readonly detectorId?: string;

  /**
   * @schema GuardDutyGetFilterRequest#FilterName
   */
  readonly filterName?: string;

}

/**
 * Converts an object of type 'GuardDutyGetFilterRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyGetFilterRequest(obj: GuardDutyGetFilterRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DetectorId': obj.detectorId,
    'FilterName': obj.filterName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyGetFilterResponse
 */
export interface GuardDutyGetFilterResponse {
  /**
   * @schema GuardDutyGetFilterResponse#Name
   */
  readonly name?: string;

  /**
   * @schema GuardDutyGetFilterResponse#Description
   */
  readonly description?: string;

  /**
   * @schema GuardDutyGetFilterResponse#Action
   */
  readonly action?: string;

  /**
   * @schema GuardDutyGetFilterResponse#Rank
   */
  readonly rank?: number;

  /**
   * @schema GuardDutyGetFilterResponse#FindingCriteria
   */
  readonly findingCriteria?: GuardDutyFindingCriteria;

  /**
   * @schema GuardDutyGetFilterResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'GuardDutyGetFilterResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyGetFilterResponse(obj: GuardDutyGetFilterResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Description': obj.description,
    'Action': obj.action,
    'Rank': obj.rank,
    'FindingCriteria': toJson_GuardDutyFindingCriteria(obj.findingCriteria),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyGetFindingsRequest
 */
export interface GuardDutyGetFindingsRequest {
  /**
   * @schema GuardDutyGetFindingsRequest#DetectorId
   */
  readonly detectorId?: string;

  /**
   * @schema GuardDutyGetFindingsRequest#FindingIds
   */
  readonly findingIds?: string[];

  /**
   * @schema GuardDutyGetFindingsRequest#SortCriteria
   */
  readonly sortCriteria?: GuardDutySortCriteria;

}

/**
 * Converts an object of type 'GuardDutyGetFindingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyGetFindingsRequest(obj: GuardDutyGetFindingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DetectorId': obj.detectorId,
    'FindingIds': obj.findingIds?.map(y => y),
    'SortCriteria': toJson_GuardDutySortCriteria(obj.sortCriteria),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyGetFindingsResponse
 */
export interface GuardDutyGetFindingsResponse {
  /**
   * @schema GuardDutyGetFindingsResponse#Findings
   */
  readonly findings?: GuardDutyFinding[];

}

/**
 * Converts an object of type 'GuardDutyGetFindingsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyGetFindingsResponse(obj: GuardDutyGetFindingsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Findings': obj.findings?.map(y => toJson_GuardDutyFinding(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyGetFindingsStatisticsRequest
 */
export interface GuardDutyGetFindingsStatisticsRequest {
  /**
   * @schema GuardDutyGetFindingsStatisticsRequest#DetectorId
   */
  readonly detectorId?: string;

  /**
   * @schema GuardDutyGetFindingsStatisticsRequest#FindingStatisticTypes
   */
  readonly findingStatisticTypes?: string[];

  /**
   * @schema GuardDutyGetFindingsStatisticsRequest#FindingCriteria
   */
  readonly findingCriteria?: GuardDutyFindingCriteria;

}

/**
 * Converts an object of type 'GuardDutyGetFindingsStatisticsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyGetFindingsStatisticsRequest(obj: GuardDutyGetFindingsStatisticsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DetectorId': obj.detectorId,
    'FindingStatisticTypes': obj.findingStatisticTypes?.map(y => y),
    'FindingCriteria': toJson_GuardDutyFindingCriteria(obj.findingCriteria),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyGetFindingsStatisticsResponse
 */
export interface GuardDutyGetFindingsStatisticsResponse {
  /**
   * @schema GuardDutyGetFindingsStatisticsResponse#FindingStatistics
   */
  readonly findingStatistics?: GuardDutyFindingStatistics;

}

/**
 * Converts an object of type 'GuardDutyGetFindingsStatisticsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyGetFindingsStatisticsResponse(obj: GuardDutyGetFindingsStatisticsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FindingStatistics': toJson_GuardDutyFindingStatistics(obj.findingStatistics),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyGetIpSetRequest
 */
export interface GuardDutyGetIpSetRequest {
  /**
   * @schema GuardDutyGetIpSetRequest#DetectorId
   */
  readonly detectorId?: string;

  /**
   * @schema GuardDutyGetIpSetRequest#IpSetId
   */
  readonly ipSetId?: string;

}

/**
 * Converts an object of type 'GuardDutyGetIpSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyGetIpSetRequest(obj: GuardDutyGetIpSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DetectorId': obj.detectorId,
    'IpSetId': obj.ipSetId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyGetIpSetResponse
 */
export interface GuardDutyGetIpSetResponse {
  /**
   * @schema GuardDutyGetIpSetResponse#Name
   */
  readonly name?: string;

  /**
   * @schema GuardDutyGetIpSetResponse#Format
   */
  readonly format?: string;

  /**
   * @schema GuardDutyGetIpSetResponse#Location
   */
  readonly location?: string;

  /**
   * @schema GuardDutyGetIpSetResponse#Status
   */
  readonly status?: string;

  /**
   * @schema GuardDutyGetIpSetResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'GuardDutyGetIpSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyGetIpSetResponse(obj: GuardDutyGetIpSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Format': obj.format,
    'Location': obj.location,
    'Status': obj.status,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyGetInvitationsCountRequest
 */
export interface GuardDutyGetInvitationsCountRequest {
}

/**
 * Converts an object of type 'GuardDutyGetInvitationsCountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyGetInvitationsCountRequest(obj: GuardDutyGetInvitationsCountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyGetInvitationsCountResponse
 */
export interface GuardDutyGetInvitationsCountResponse {
  /**
   * @schema GuardDutyGetInvitationsCountResponse#InvitationsCount
   */
  readonly invitationsCount?: number;

}

/**
 * Converts an object of type 'GuardDutyGetInvitationsCountResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyGetInvitationsCountResponse(obj: GuardDutyGetInvitationsCountResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InvitationsCount': obj.invitationsCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyGetMasterAccountRequest
 */
export interface GuardDutyGetMasterAccountRequest {
  /**
   * @schema GuardDutyGetMasterAccountRequest#DetectorId
   */
  readonly detectorId?: string;

}

/**
 * Converts an object of type 'GuardDutyGetMasterAccountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyGetMasterAccountRequest(obj: GuardDutyGetMasterAccountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DetectorId': obj.detectorId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyGetMasterAccountResponse
 */
export interface GuardDutyGetMasterAccountResponse {
  /**
   * @schema GuardDutyGetMasterAccountResponse#Master
   */
  readonly master?: GuardDutyMaster;

}

/**
 * Converts an object of type 'GuardDutyGetMasterAccountResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyGetMasterAccountResponse(obj: GuardDutyGetMasterAccountResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Master': toJson_GuardDutyMaster(obj.master),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyGetMemberDetectorsRequest
 */
export interface GuardDutyGetMemberDetectorsRequest {
  /**
   * @schema GuardDutyGetMemberDetectorsRequest#DetectorId
   */
  readonly detectorId?: string;

  /**
   * @schema GuardDutyGetMemberDetectorsRequest#AccountIds
   */
  readonly accountIds?: string[];

}

/**
 * Converts an object of type 'GuardDutyGetMemberDetectorsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyGetMemberDetectorsRequest(obj: GuardDutyGetMemberDetectorsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DetectorId': obj.detectorId,
    'AccountIds': obj.accountIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyGetMemberDetectorsResponse
 */
export interface GuardDutyGetMemberDetectorsResponse {
  /**
   * @schema GuardDutyGetMemberDetectorsResponse#MemberDataSourceConfigurations
   */
  readonly memberDataSourceConfigurations?: GuardDutyMemberDataSourceConfiguration[];

  /**
   * @schema GuardDutyGetMemberDetectorsResponse#UnprocessedAccounts
   */
  readonly unprocessedAccounts?: GuardDutyUnprocessedAccount[];

}

/**
 * Converts an object of type 'GuardDutyGetMemberDetectorsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyGetMemberDetectorsResponse(obj: GuardDutyGetMemberDetectorsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MemberDataSourceConfigurations': obj.memberDataSourceConfigurations?.map(y => toJson_GuardDutyMemberDataSourceConfiguration(y)),
    'UnprocessedAccounts': obj.unprocessedAccounts?.map(y => toJson_GuardDutyUnprocessedAccount(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyGetMembersRequest
 */
export interface GuardDutyGetMembersRequest {
  /**
   * @schema GuardDutyGetMembersRequest#DetectorId
   */
  readonly detectorId?: string;

  /**
   * @schema GuardDutyGetMembersRequest#AccountIds
   */
  readonly accountIds?: string[];

}

/**
 * Converts an object of type 'GuardDutyGetMembersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyGetMembersRequest(obj: GuardDutyGetMembersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DetectorId': obj.detectorId,
    'AccountIds': obj.accountIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyGetMembersResponse
 */
export interface GuardDutyGetMembersResponse {
  /**
   * @schema GuardDutyGetMembersResponse#Members
   */
  readonly members?: GuardDutyMember[];

  /**
   * @schema GuardDutyGetMembersResponse#UnprocessedAccounts
   */
  readonly unprocessedAccounts?: GuardDutyUnprocessedAccount[];

}

/**
 * Converts an object of type 'GuardDutyGetMembersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyGetMembersResponse(obj: GuardDutyGetMembersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Members': obj.members?.map(y => toJson_GuardDutyMember(y)),
    'UnprocessedAccounts': obj.unprocessedAccounts?.map(y => toJson_GuardDutyUnprocessedAccount(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyGetThreatIntelSetRequest
 */
export interface GuardDutyGetThreatIntelSetRequest {
  /**
   * @schema GuardDutyGetThreatIntelSetRequest#DetectorId
   */
  readonly detectorId?: string;

  /**
   * @schema GuardDutyGetThreatIntelSetRequest#ThreatIntelSetId
   */
  readonly threatIntelSetId?: string;

}

/**
 * Converts an object of type 'GuardDutyGetThreatIntelSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyGetThreatIntelSetRequest(obj: GuardDutyGetThreatIntelSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DetectorId': obj.detectorId,
    'ThreatIntelSetId': obj.threatIntelSetId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyGetThreatIntelSetResponse
 */
export interface GuardDutyGetThreatIntelSetResponse {
  /**
   * @schema GuardDutyGetThreatIntelSetResponse#Name
   */
  readonly name?: string;

  /**
   * @schema GuardDutyGetThreatIntelSetResponse#Format
   */
  readonly format?: string;

  /**
   * @schema GuardDutyGetThreatIntelSetResponse#Location
   */
  readonly location?: string;

  /**
   * @schema GuardDutyGetThreatIntelSetResponse#Status
   */
  readonly status?: string;

  /**
   * @schema GuardDutyGetThreatIntelSetResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'GuardDutyGetThreatIntelSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyGetThreatIntelSetResponse(obj: GuardDutyGetThreatIntelSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Format': obj.format,
    'Location': obj.location,
    'Status': obj.status,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyGetUsageStatisticsRequest
 */
export interface GuardDutyGetUsageStatisticsRequest {
  /**
   * @schema GuardDutyGetUsageStatisticsRequest#DetectorId
   */
  readonly detectorId?: string;

  /**
   * @schema GuardDutyGetUsageStatisticsRequest#UsageStatisticType
   */
  readonly usageStatisticType?: string;

  /**
   * @schema GuardDutyGetUsageStatisticsRequest#UsageCriteria
   */
  readonly usageCriteria?: GuardDutyUsageCriteria;

  /**
   * @schema GuardDutyGetUsageStatisticsRequest#Unit
   */
  readonly unit?: string;

  /**
   * @schema GuardDutyGetUsageStatisticsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GuardDutyGetUsageStatisticsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GuardDutyGetUsageStatisticsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyGetUsageStatisticsRequest(obj: GuardDutyGetUsageStatisticsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DetectorId': obj.detectorId,
    'UsageStatisticType': obj.usageStatisticType,
    'UsageCriteria': toJson_GuardDutyUsageCriteria(obj.usageCriteria),
    'Unit': obj.unit,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyGetUsageStatisticsResponse
 */
export interface GuardDutyGetUsageStatisticsResponse {
  /**
   * @schema GuardDutyGetUsageStatisticsResponse#UsageStatistics
   */
  readonly usageStatistics?: GuardDutyUsageStatistics;

  /**
   * @schema GuardDutyGetUsageStatisticsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GuardDutyGetUsageStatisticsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyGetUsageStatisticsResponse(obj: GuardDutyGetUsageStatisticsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UsageStatistics': toJson_GuardDutyUsageStatistics(obj.usageStatistics),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyInviteMembersRequest
 */
export interface GuardDutyInviteMembersRequest {
  /**
   * @schema GuardDutyInviteMembersRequest#DetectorId
   */
  readonly detectorId?: string;

  /**
   * @schema GuardDutyInviteMembersRequest#AccountIds
   */
  readonly accountIds?: string[];

  /**
   * @schema GuardDutyInviteMembersRequest#DisableEmailNotification
   */
  readonly disableEmailNotification?: boolean;

  /**
   * @schema GuardDutyInviteMembersRequest#Message
   */
  readonly message?: string;

}

/**
 * Converts an object of type 'GuardDutyInviteMembersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyInviteMembersRequest(obj: GuardDutyInviteMembersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DetectorId': obj.detectorId,
    'AccountIds': obj.accountIds?.map(y => y),
    'DisableEmailNotification': obj.disableEmailNotification,
    'Message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyInviteMembersResponse
 */
export interface GuardDutyInviteMembersResponse {
  /**
   * @schema GuardDutyInviteMembersResponse#UnprocessedAccounts
   */
  readonly unprocessedAccounts?: GuardDutyUnprocessedAccount[];

}

/**
 * Converts an object of type 'GuardDutyInviteMembersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyInviteMembersResponse(obj: GuardDutyInviteMembersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UnprocessedAccounts': obj.unprocessedAccounts?.map(y => toJson_GuardDutyUnprocessedAccount(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyListDetectorsRequest
 */
export interface GuardDutyListDetectorsRequest {
  /**
   * @schema GuardDutyListDetectorsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GuardDutyListDetectorsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GuardDutyListDetectorsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyListDetectorsRequest(obj: GuardDutyListDetectorsRequest | undefined): Record<string, any> | undefined {
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
 * @schema GuardDutyListDetectorsResponse
 */
export interface GuardDutyListDetectorsResponse {
  /**
   * @schema GuardDutyListDetectorsResponse#DetectorIds
   */
  readonly detectorIds?: string[];

  /**
   * @schema GuardDutyListDetectorsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GuardDutyListDetectorsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyListDetectorsResponse(obj: GuardDutyListDetectorsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DetectorIds': obj.detectorIds?.map(y => y),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyListFiltersRequest
 */
export interface GuardDutyListFiltersRequest {
  /**
   * @schema GuardDutyListFiltersRequest#DetectorId
   */
  readonly detectorId?: string;

  /**
   * @schema GuardDutyListFiltersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GuardDutyListFiltersRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GuardDutyListFiltersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyListFiltersRequest(obj: GuardDutyListFiltersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DetectorId': obj.detectorId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyListFiltersResponse
 */
export interface GuardDutyListFiltersResponse {
  /**
   * @schema GuardDutyListFiltersResponse#FilterNames
   */
  readonly filterNames?: string[];

  /**
   * @schema GuardDutyListFiltersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GuardDutyListFiltersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyListFiltersResponse(obj: GuardDutyListFiltersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FilterNames': obj.filterNames?.map(y => y),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyListFindingsRequest
 */
export interface GuardDutyListFindingsRequest {
  /**
   * @schema GuardDutyListFindingsRequest#DetectorId
   */
  readonly detectorId?: string;

  /**
   * @schema GuardDutyListFindingsRequest#FindingCriteria
   */
  readonly findingCriteria?: GuardDutyFindingCriteria;

  /**
   * @schema GuardDutyListFindingsRequest#SortCriteria
   */
  readonly sortCriteria?: GuardDutySortCriteria;

  /**
   * @schema GuardDutyListFindingsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GuardDutyListFindingsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GuardDutyListFindingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyListFindingsRequest(obj: GuardDutyListFindingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DetectorId': obj.detectorId,
    'FindingCriteria': toJson_GuardDutyFindingCriteria(obj.findingCriteria),
    'SortCriteria': toJson_GuardDutySortCriteria(obj.sortCriteria),
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyListFindingsResponse
 */
export interface GuardDutyListFindingsResponse {
  /**
   * @schema GuardDutyListFindingsResponse#FindingIds
   */
  readonly findingIds?: string[];

  /**
   * @schema GuardDutyListFindingsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GuardDutyListFindingsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyListFindingsResponse(obj: GuardDutyListFindingsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FindingIds': obj.findingIds?.map(y => y),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyListIpSetsRequest
 */
export interface GuardDutyListIpSetsRequest {
  /**
   * @schema GuardDutyListIpSetsRequest#DetectorId
   */
  readonly detectorId?: string;

  /**
   * @schema GuardDutyListIpSetsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GuardDutyListIpSetsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GuardDutyListIpSetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyListIpSetsRequest(obj: GuardDutyListIpSetsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DetectorId': obj.detectorId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyListIpSetsResponse
 */
export interface GuardDutyListIpSetsResponse {
  /**
   * @schema GuardDutyListIpSetsResponse#IpSetIds
   */
  readonly ipSetIds?: string[];

  /**
   * @schema GuardDutyListIpSetsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GuardDutyListIpSetsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyListIpSetsResponse(obj: GuardDutyListIpSetsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IpSetIds': obj.ipSetIds?.map(y => y),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyListInvitationsRequest
 */
export interface GuardDutyListInvitationsRequest {
  /**
   * @schema GuardDutyListInvitationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GuardDutyListInvitationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GuardDutyListInvitationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyListInvitationsRequest(obj: GuardDutyListInvitationsRequest | undefined): Record<string, any> | undefined {
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
 * @schema GuardDutyListInvitationsResponse
 */
export interface GuardDutyListInvitationsResponse {
  /**
   * @schema GuardDutyListInvitationsResponse#Invitations
   */
  readonly invitations?: GuardDutyInvitation[];

  /**
   * @schema GuardDutyListInvitationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GuardDutyListInvitationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyListInvitationsResponse(obj: GuardDutyListInvitationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Invitations': obj.invitations?.map(y => toJson_GuardDutyInvitation(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyListMembersRequest
 */
export interface GuardDutyListMembersRequest {
  /**
   * @schema GuardDutyListMembersRequest#DetectorId
   */
  readonly detectorId?: string;

  /**
   * @schema GuardDutyListMembersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GuardDutyListMembersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GuardDutyListMembersRequest#OnlyAssociated
   */
  readonly onlyAssociated?: string;

}

/**
 * Converts an object of type 'GuardDutyListMembersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyListMembersRequest(obj: GuardDutyListMembersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DetectorId': obj.detectorId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'OnlyAssociated': obj.onlyAssociated,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyListMembersResponse
 */
export interface GuardDutyListMembersResponse {
  /**
   * @schema GuardDutyListMembersResponse#Members
   */
  readonly members?: GuardDutyMember[];

  /**
   * @schema GuardDutyListMembersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GuardDutyListMembersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyListMembersResponse(obj: GuardDutyListMembersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Members': obj.members?.map(y => toJson_GuardDutyMember(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyListOrganizationAdminAccountsRequest
 */
export interface GuardDutyListOrganizationAdminAccountsRequest {
  /**
   * @schema GuardDutyListOrganizationAdminAccountsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GuardDutyListOrganizationAdminAccountsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GuardDutyListOrganizationAdminAccountsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyListOrganizationAdminAccountsRequest(obj: GuardDutyListOrganizationAdminAccountsRequest | undefined): Record<string, any> | undefined {
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
 * @schema GuardDutyListOrganizationAdminAccountsResponse
 */
export interface GuardDutyListOrganizationAdminAccountsResponse {
  /**
   * @schema GuardDutyListOrganizationAdminAccountsResponse#AdminAccounts
   */
  readonly adminAccounts?: GuardDutyAdminAccount[];

  /**
   * @schema GuardDutyListOrganizationAdminAccountsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GuardDutyListOrganizationAdminAccountsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyListOrganizationAdminAccountsResponse(obj: GuardDutyListOrganizationAdminAccountsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AdminAccounts': obj.adminAccounts?.map(y => toJson_GuardDutyAdminAccount(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyListPublishingDestinationsRequest
 */
export interface GuardDutyListPublishingDestinationsRequest {
  /**
   * @schema GuardDutyListPublishingDestinationsRequest#DetectorId
   */
  readonly detectorId?: string;

  /**
   * @schema GuardDutyListPublishingDestinationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GuardDutyListPublishingDestinationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GuardDutyListPublishingDestinationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyListPublishingDestinationsRequest(obj: GuardDutyListPublishingDestinationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DetectorId': obj.detectorId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyListPublishingDestinationsResponse
 */
export interface GuardDutyListPublishingDestinationsResponse {
  /**
   * @schema GuardDutyListPublishingDestinationsResponse#Destinations
   */
  readonly destinations?: GuardDutyDestination[];

  /**
   * @schema GuardDutyListPublishingDestinationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GuardDutyListPublishingDestinationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyListPublishingDestinationsResponse(obj: GuardDutyListPublishingDestinationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Destinations': obj.destinations?.map(y => toJson_GuardDutyDestination(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyListTagsForResourceRequest
 */
export interface GuardDutyListTagsForResourceRequest {
  /**
   * @schema GuardDutyListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'GuardDutyListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyListTagsForResourceRequest(obj: GuardDutyListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyListTagsForResourceResponse
 */
export interface GuardDutyListTagsForResourceResponse {
  /**
   * @schema GuardDutyListTagsForResourceResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'GuardDutyListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyListTagsForResourceResponse(obj: GuardDutyListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyListThreatIntelSetsRequest
 */
export interface GuardDutyListThreatIntelSetsRequest {
  /**
   * @schema GuardDutyListThreatIntelSetsRequest#DetectorId
   */
  readonly detectorId?: string;

  /**
   * @schema GuardDutyListThreatIntelSetsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GuardDutyListThreatIntelSetsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GuardDutyListThreatIntelSetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyListThreatIntelSetsRequest(obj: GuardDutyListThreatIntelSetsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DetectorId': obj.detectorId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyListThreatIntelSetsResponse
 */
export interface GuardDutyListThreatIntelSetsResponse {
  /**
   * @schema GuardDutyListThreatIntelSetsResponse#ThreatIntelSetIds
   */
  readonly threatIntelSetIds?: string[];

  /**
   * @schema GuardDutyListThreatIntelSetsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GuardDutyListThreatIntelSetsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyListThreatIntelSetsResponse(obj: GuardDutyListThreatIntelSetsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ThreatIntelSetIds': obj.threatIntelSetIds?.map(y => y),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyStartMonitoringMembersRequest
 */
export interface GuardDutyStartMonitoringMembersRequest {
  /**
   * @schema GuardDutyStartMonitoringMembersRequest#DetectorId
   */
  readonly detectorId?: string;

  /**
   * @schema GuardDutyStartMonitoringMembersRequest#AccountIds
   */
  readonly accountIds?: string[];

}

/**
 * Converts an object of type 'GuardDutyStartMonitoringMembersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyStartMonitoringMembersRequest(obj: GuardDutyStartMonitoringMembersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DetectorId': obj.detectorId,
    'AccountIds': obj.accountIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyStartMonitoringMembersResponse
 */
export interface GuardDutyStartMonitoringMembersResponse {
  /**
   * @schema GuardDutyStartMonitoringMembersResponse#UnprocessedAccounts
   */
  readonly unprocessedAccounts?: GuardDutyUnprocessedAccount[];

}

/**
 * Converts an object of type 'GuardDutyStartMonitoringMembersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyStartMonitoringMembersResponse(obj: GuardDutyStartMonitoringMembersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UnprocessedAccounts': obj.unprocessedAccounts?.map(y => toJson_GuardDutyUnprocessedAccount(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyStopMonitoringMembersRequest
 */
export interface GuardDutyStopMonitoringMembersRequest {
  /**
   * @schema GuardDutyStopMonitoringMembersRequest#DetectorId
   */
  readonly detectorId?: string;

  /**
   * @schema GuardDutyStopMonitoringMembersRequest#AccountIds
   */
  readonly accountIds?: string[];

}

/**
 * Converts an object of type 'GuardDutyStopMonitoringMembersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyStopMonitoringMembersRequest(obj: GuardDutyStopMonitoringMembersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DetectorId': obj.detectorId,
    'AccountIds': obj.accountIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyStopMonitoringMembersResponse
 */
export interface GuardDutyStopMonitoringMembersResponse {
  /**
   * @schema GuardDutyStopMonitoringMembersResponse#UnprocessedAccounts
   */
  readonly unprocessedAccounts?: GuardDutyUnprocessedAccount[];

}

/**
 * Converts an object of type 'GuardDutyStopMonitoringMembersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyStopMonitoringMembersResponse(obj: GuardDutyStopMonitoringMembersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UnprocessedAccounts': obj.unprocessedAccounts?.map(y => toJson_GuardDutyUnprocessedAccount(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyTagResourceRequest
 */
export interface GuardDutyTagResourceRequest {
  /**
   * @schema GuardDutyTagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema GuardDutyTagResourceRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'GuardDutyTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyTagResourceRequest(obj: GuardDutyTagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema GuardDutyTagResourceResponse
 */
export interface GuardDutyTagResourceResponse {
}

/**
 * Converts an object of type 'GuardDutyTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyTagResourceResponse(obj: GuardDutyTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyUnarchiveFindingsRequest
 */
export interface GuardDutyUnarchiveFindingsRequest {
  /**
   * @schema GuardDutyUnarchiveFindingsRequest#DetectorId
   */
  readonly detectorId?: string;

  /**
   * @schema GuardDutyUnarchiveFindingsRequest#FindingIds
   */
  readonly findingIds?: string[];

}

/**
 * Converts an object of type 'GuardDutyUnarchiveFindingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyUnarchiveFindingsRequest(obj: GuardDutyUnarchiveFindingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DetectorId': obj.detectorId,
    'FindingIds': obj.findingIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyUnarchiveFindingsResponse
 */
export interface GuardDutyUnarchiveFindingsResponse {
}

/**
 * Converts an object of type 'GuardDutyUnarchiveFindingsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyUnarchiveFindingsResponse(obj: GuardDutyUnarchiveFindingsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyUntagResourceRequest
 */
export interface GuardDutyUntagResourceRequest {
  /**
   * @schema GuardDutyUntagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema GuardDutyUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'GuardDutyUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyUntagResourceRequest(obj: GuardDutyUntagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema GuardDutyUntagResourceResponse
 */
export interface GuardDutyUntagResourceResponse {
}

/**
 * Converts an object of type 'GuardDutyUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyUntagResourceResponse(obj: GuardDutyUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyUpdateDetectorRequest
 */
export interface GuardDutyUpdateDetectorRequest {
  /**
   * @schema GuardDutyUpdateDetectorRequest#DetectorId
   */
  readonly detectorId?: string;

  /**
   * @schema GuardDutyUpdateDetectorRequest#Enable
   */
  readonly enable?: boolean;

  /**
   * @schema GuardDutyUpdateDetectorRequest#FindingPublishingFrequency
   */
  readonly findingPublishingFrequency?: string;

  /**
   * @schema GuardDutyUpdateDetectorRequest#DataSources
   */
  readonly dataSources?: GuardDutyDataSourceConfigurations;

}

/**
 * Converts an object of type 'GuardDutyUpdateDetectorRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyUpdateDetectorRequest(obj: GuardDutyUpdateDetectorRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DetectorId': obj.detectorId,
    'Enable': obj.enable,
    'FindingPublishingFrequency': obj.findingPublishingFrequency,
    'DataSources': toJson_GuardDutyDataSourceConfigurations(obj.dataSources),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyUpdateDetectorResponse
 */
export interface GuardDutyUpdateDetectorResponse {
}

/**
 * Converts an object of type 'GuardDutyUpdateDetectorResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyUpdateDetectorResponse(obj: GuardDutyUpdateDetectorResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyUpdateFilterRequest
 */
export interface GuardDutyUpdateFilterRequest {
  /**
   * @schema GuardDutyUpdateFilterRequest#DetectorId
   */
  readonly detectorId?: string;

  /**
   * @schema GuardDutyUpdateFilterRequest#FilterName
   */
  readonly filterName?: string;

  /**
   * @schema GuardDutyUpdateFilterRequest#Description
   */
  readonly description?: string;

  /**
   * @schema GuardDutyUpdateFilterRequest#Action
   */
  readonly action?: string;

  /**
   * @schema GuardDutyUpdateFilterRequest#Rank
   */
  readonly rank?: number;

  /**
   * @schema GuardDutyUpdateFilterRequest#FindingCriteria
   */
  readonly findingCriteria?: GuardDutyFindingCriteria;

}

/**
 * Converts an object of type 'GuardDutyUpdateFilterRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyUpdateFilterRequest(obj: GuardDutyUpdateFilterRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DetectorId': obj.detectorId,
    'FilterName': obj.filterName,
    'Description': obj.description,
    'Action': obj.action,
    'Rank': obj.rank,
    'FindingCriteria': toJson_GuardDutyFindingCriteria(obj.findingCriteria),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyUpdateFilterResponse
 */
export interface GuardDutyUpdateFilterResponse {
  /**
   * @schema GuardDutyUpdateFilterResponse#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'GuardDutyUpdateFilterResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyUpdateFilterResponse(obj: GuardDutyUpdateFilterResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyUpdateFindingsFeedbackRequest
 */
export interface GuardDutyUpdateFindingsFeedbackRequest {
  /**
   * @schema GuardDutyUpdateFindingsFeedbackRequest#DetectorId
   */
  readonly detectorId?: string;

  /**
   * @schema GuardDutyUpdateFindingsFeedbackRequest#FindingIds
   */
  readonly findingIds?: string[];

  /**
   * @schema GuardDutyUpdateFindingsFeedbackRequest#Feedback
   */
  readonly feedback?: string;

  /**
   * @schema GuardDutyUpdateFindingsFeedbackRequest#Comments
   */
  readonly comments?: string;

}

/**
 * Converts an object of type 'GuardDutyUpdateFindingsFeedbackRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyUpdateFindingsFeedbackRequest(obj: GuardDutyUpdateFindingsFeedbackRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DetectorId': obj.detectorId,
    'FindingIds': obj.findingIds?.map(y => y),
    'Feedback': obj.feedback,
    'Comments': obj.comments,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyUpdateFindingsFeedbackResponse
 */
export interface GuardDutyUpdateFindingsFeedbackResponse {
}

/**
 * Converts an object of type 'GuardDutyUpdateFindingsFeedbackResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyUpdateFindingsFeedbackResponse(obj: GuardDutyUpdateFindingsFeedbackResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyUpdateIpSetRequest
 */
export interface GuardDutyUpdateIpSetRequest {
  /**
   * @schema GuardDutyUpdateIpSetRequest#DetectorId
   */
  readonly detectorId?: string;

  /**
   * @schema GuardDutyUpdateIpSetRequest#IpSetId
   */
  readonly ipSetId?: string;

  /**
   * @schema GuardDutyUpdateIpSetRequest#Name
   */
  readonly name?: string;

  /**
   * @schema GuardDutyUpdateIpSetRequest#Location
   */
  readonly location?: string;

  /**
   * @schema GuardDutyUpdateIpSetRequest#Activate
   */
  readonly activate?: boolean;

}

/**
 * Converts an object of type 'GuardDutyUpdateIpSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyUpdateIpSetRequest(obj: GuardDutyUpdateIpSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DetectorId': obj.detectorId,
    'IpSetId': obj.ipSetId,
    'Name': obj.name,
    'Location': obj.location,
    'Activate': obj.activate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyUpdateIpSetResponse
 */
export interface GuardDutyUpdateIpSetResponse {
}

/**
 * Converts an object of type 'GuardDutyUpdateIpSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyUpdateIpSetResponse(obj: GuardDutyUpdateIpSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyUpdateMemberDetectorsRequest
 */
export interface GuardDutyUpdateMemberDetectorsRequest {
  /**
   * @schema GuardDutyUpdateMemberDetectorsRequest#DetectorId
   */
  readonly detectorId?: string;

  /**
   * @schema GuardDutyUpdateMemberDetectorsRequest#AccountIds
   */
  readonly accountIds?: string[];

  /**
   * @schema GuardDutyUpdateMemberDetectorsRequest#DataSources
   */
  readonly dataSources?: GuardDutyDataSourceConfigurations;

}

/**
 * Converts an object of type 'GuardDutyUpdateMemberDetectorsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyUpdateMemberDetectorsRequest(obj: GuardDutyUpdateMemberDetectorsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DetectorId': obj.detectorId,
    'AccountIds': obj.accountIds?.map(y => y),
    'DataSources': toJson_GuardDutyDataSourceConfigurations(obj.dataSources),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyUpdateMemberDetectorsResponse
 */
export interface GuardDutyUpdateMemberDetectorsResponse {
  /**
   * @schema GuardDutyUpdateMemberDetectorsResponse#UnprocessedAccounts
   */
  readonly unprocessedAccounts?: GuardDutyUnprocessedAccount[];

}

/**
 * Converts an object of type 'GuardDutyUpdateMemberDetectorsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyUpdateMemberDetectorsResponse(obj: GuardDutyUpdateMemberDetectorsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UnprocessedAccounts': obj.unprocessedAccounts?.map(y => toJson_GuardDutyUnprocessedAccount(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyUpdateOrganizationConfigurationRequest
 */
export interface GuardDutyUpdateOrganizationConfigurationRequest {
  /**
   * @schema GuardDutyUpdateOrganizationConfigurationRequest#DetectorId
   */
  readonly detectorId?: string;

  /**
   * @schema GuardDutyUpdateOrganizationConfigurationRequest#AutoEnable
   */
  readonly autoEnable?: boolean;

  /**
   * @schema GuardDutyUpdateOrganizationConfigurationRequest#DataSources
   */
  readonly dataSources?: GuardDutyOrganizationDataSourceConfigurations;

}

/**
 * Converts an object of type 'GuardDutyUpdateOrganizationConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyUpdateOrganizationConfigurationRequest(obj: GuardDutyUpdateOrganizationConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DetectorId': obj.detectorId,
    'AutoEnable': obj.autoEnable,
    'DataSources': toJson_GuardDutyOrganizationDataSourceConfigurations(obj.dataSources),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyUpdateOrganizationConfigurationResponse
 */
export interface GuardDutyUpdateOrganizationConfigurationResponse {
}

/**
 * Converts an object of type 'GuardDutyUpdateOrganizationConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyUpdateOrganizationConfigurationResponse(obj: GuardDutyUpdateOrganizationConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyUpdatePublishingDestinationRequest
 */
export interface GuardDutyUpdatePublishingDestinationRequest {
  /**
   * @schema GuardDutyUpdatePublishingDestinationRequest#DetectorId
   */
  readonly detectorId?: string;

  /**
   * @schema GuardDutyUpdatePublishingDestinationRequest#DestinationId
   */
  readonly destinationId?: string;

  /**
   * @schema GuardDutyUpdatePublishingDestinationRequest#DestinationProperties
   */
  readonly destinationProperties?: GuardDutyDestinationProperties;

}

/**
 * Converts an object of type 'GuardDutyUpdatePublishingDestinationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyUpdatePublishingDestinationRequest(obj: GuardDutyUpdatePublishingDestinationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DetectorId': obj.detectorId,
    'DestinationId': obj.destinationId,
    'DestinationProperties': toJson_GuardDutyDestinationProperties(obj.destinationProperties),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyUpdatePublishingDestinationResponse
 */
export interface GuardDutyUpdatePublishingDestinationResponse {
}

/**
 * Converts an object of type 'GuardDutyUpdatePublishingDestinationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyUpdatePublishingDestinationResponse(obj: GuardDutyUpdatePublishingDestinationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyUpdateThreatIntelSetRequest
 */
export interface GuardDutyUpdateThreatIntelSetRequest {
  /**
   * @schema GuardDutyUpdateThreatIntelSetRequest#DetectorId
   */
  readonly detectorId?: string;

  /**
   * @schema GuardDutyUpdateThreatIntelSetRequest#ThreatIntelSetId
   */
  readonly threatIntelSetId?: string;

  /**
   * @schema GuardDutyUpdateThreatIntelSetRequest#Name
   */
  readonly name?: string;

  /**
   * @schema GuardDutyUpdateThreatIntelSetRequest#Location
   */
  readonly location?: string;

  /**
   * @schema GuardDutyUpdateThreatIntelSetRequest#Activate
   */
  readonly activate?: boolean;

}

/**
 * Converts an object of type 'GuardDutyUpdateThreatIntelSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyUpdateThreatIntelSetRequest(obj: GuardDutyUpdateThreatIntelSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DetectorId': obj.detectorId,
    'ThreatIntelSetId': obj.threatIntelSetId,
    'Name': obj.name,
    'Location': obj.location,
    'Activate': obj.activate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyUpdateThreatIntelSetResponse
 */
export interface GuardDutyUpdateThreatIntelSetResponse {
}

/**
 * Converts an object of type 'GuardDutyUpdateThreatIntelSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyUpdateThreatIntelSetResponse(obj: GuardDutyUpdateThreatIntelSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyDataSourceConfigurations
 */
export interface GuardDutyDataSourceConfigurations {
  /**
   * @schema GuardDutyDataSourceConfigurations#S3Logs
   */
  readonly s3Logs?: GuardDutyS3LogsConfiguration;

}

/**
 * Converts an object of type 'GuardDutyDataSourceConfigurations' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyDataSourceConfigurations(obj: GuardDutyDataSourceConfigurations | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S3Logs': toJson_GuardDutyS3LogsConfiguration(obj.s3Logs),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyFindingCriteria
 */
export interface GuardDutyFindingCriteria {
  /**
   * @schema GuardDutyFindingCriteria#Criterion
   */
  readonly criterion?: { [key: string]: GuardDutyCondition };

}

/**
 * Converts an object of type 'GuardDutyFindingCriteria' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyFindingCriteria(obj: GuardDutyFindingCriteria | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Criterion': ((obj.criterion) === undefined) ? undefined : (Object.entries(obj.criterion).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_GuardDutyCondition(i[1]) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyAccountDetail
 */
export interface GuardDutyAccountDetail {
  /**
   * @schema GuardDutyAccountDetail#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema GuardDutyAccountDetail#Email
   */
  readonly email?: string;

}

/**
 * Converts an object of type 'GuardDutyAccountDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyAccountDetail(obj: GuardDutyAccountDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'Email': obj.email,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyUnprocessedAccount
 */
export interface GuardDutyUnprocessedAccount {
  /**
   * @schema GuardDutyUnprocessedAccount#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema GuardDutyUnprocessedAccount#Result
   */
  readonly result?: string;

}

/**
 * Converts an object of type 'GuardDutyUnprocessedAccount' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyUnprocessedAccount(obj: GuardDutyUnprocessedAccount | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'Result': obj.result,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyDestinationProperties
 */
export interface GuardDutyDestinationProperties {
  /**
   * @schema GuardDutyDestinationProperties#DestinationArn
   */
  readonly destinationArn?: string;

  /**
   * @schema GuardDutyDestinationProperties#KmsKeyArn
   */
  readonly kmsKeyArn?: string;

}

/**
 * Converts an object of type 'GuardDutyDestinationProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyDestinationProperties(obj: GuardDutyDestinationProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DestinationArn': obj.destinationArn,
    'KmsKeyArn': obj.kmsKeyArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyOrganizationDataSourceConfigurationsResult
 */
export interface GuardDutyOrganizationDataSourceConfigurationsResult {
  /**
   * @schema GuardDutyOrganizationDataSourceConfigurationsResult#S3Logs
   */
  readonly s3Logs?: GuardDutyOrganizationS3LogsConfigurationResult;

}

/**
 * Converts an object of type 'GuardDutyOrganizationDataSourceConfigurationsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyOrganizationDataSourceConfigurationsResult(obj: GuardDutyOrganizationDataSourceConfigurationsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S3Logs': toJson_GuardDutyOrganizationS3LogsConfigurationResult(obj.s3Logs),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyDataSourceConfigurationsResult
 */
export interface GuardDutyDataSourceConfigurationsResult {
  /**
   * @schema GuardDutyDataSourceConfigurationsResult#CloudTrail
   */
  readonly cloudTrail?: GuardDutyCloudTrailConfigurationResult;

  /**
   * @schema GuardDutyDataSourceConfigurationsResult#DNSLogs
   */
  readonly dnsLogs?: GuardDutyDnsLogsConfigurationResult;

  /**
   * @schema GuardDutyDataSourceConfigurationsResult#FlowLogs
   */
  readonly flowLogs?: GuardDutyFlowLogsConfigurationResult;

  /**
   * @schema GuardDutyDataSourceConfigurationsResult#S3Logs
   */
  readonly s3Logs?: GuardDutyS3LogsConfigurationResult;

}

/**
 * Converts an object of type 'GuardDutyDataSourceConfigurationsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyDataSourceConfigurationsResult(obj: GuardDutyDataSourceConfigurationsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CloudTrail': toJson_GuardDutyCloudTrailConfigurationResult(obj.cloudTrail),
    'DNSLogs': toJson_GuardDutyDnsLogsConfigurationResult(obj.dnsLogs),
    'FlowLogs': toJson_GuardDutyFlowLogsConfigurationResult(obj.flowLogs),
    'S3Logs': toJson_GuardDutyS3LogsConfigurationResult(obj.s3Logs),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutySortCriteria
 */
export interface GuardDutySortCriteria {
  /**
   * @schema GuardDutySortCriteria#AttributeName
   */
  readonly attributeName?: string;

  /**
   * @schema GuardDutySortCriteria#OrderBy
   */
  readonly orderBy?: string;

}

/**
 * Converts an object of type 'GuardDutySortCriteria' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutySortCriteria(obj: GuardDutySortCriteria | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AttributeName': obj.attributeName,
    'OrderBy': obj.orderBy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyFinding
 */
export interface GuardDutyFinding {
  /**
   * @schema GuardDutyFinding#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema GuardDutyFinding#Arn
   */
  readonly arn?: string;

  /**
   * @schema GuardDutyFinding#Confidence
   */
  readonly confidence?: number;

  /**
   * @schema GuardDutyFinding#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema GuardDutyFinding#Description
   */
  readonly description?: string;

  /**
   * @schema GuardDutyFinding#Id
   */
  readonly id?: string;

  /**
   * @schema GuardDutyFinding#Partition
   */
  readonly partition?: string;

  /**
   * @schema GuardDutyFinding#Region
   */
  readonly region?: string;

  /**
   * @schema GuardDutyFinding#Resource
   */
  readonly resource?: GuardDutyResource;

  /**
   * @schema GuardDutyFinding#SchemaVersion
   */
  readonly schemaVersion?: string;

  /**
   * @schema GuardDutyFinding#Service
   */
  readonly service?: GuardDutyService;

  /**
   * @schema GuardDutyFinding#Severity
   */
  readonly severity?: number;

  /**
   * @schema GuardDutyFinding#Title
   */
  readonly title?: string;

  /**
   * @schema GuardDutyFinding#Type
   */
  readonly type?: string;

  /**
   * @schema GuardDutyFinding#UpdatedAt
   */
  readonly updatedAt?: string;

}

/**
 * Converts an object of type 'GuardDutyFinding' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyFinding(obj: GuardDutyFinding | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'Arn': obj.arn,
    'Confidence': obj.confidence,
    'CreatedAt': obj.createdAt,
    'Description': obj.description,
    'Id': obj.id,
    'Partition': obj.partition,
    'Region': obj.region,
    'Resource': toJson_GuardDutyResource(obj.resource),
    'SchemaVersion': obj.schemaVersion,
    'Service': toJson_GuardDutyService(obj.service),
    'Severity': obj.severity,
    'Title': obj.title,
    'Type': obj.type,
    'UpdatedAt': obj.updatedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyFindingStatistics
 */
export interface GuardDutyFindingStatistics {
  /**
   * @schema GuardDutyFindingStatistics#CountBySeverity
   */
  readonly countBySeverity?: { [key: string]: number };

}

/**
 * Converts an object of type 'GuardDutyFindingStatistics' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyFindingStatistics(obj: GuardDutyFindingStatistics | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CountBySeverity': ((obj.countBySeverity) === undefined) ? undefined : (Object.entries(obj.countBySeverity).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyMaster
 */
export interface GuardDutyMaster {
  /**
   * @schema GuardDutyMaster#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema GuardDutyMaster#InvitationId
   */
  readonly invitationId?: string;

  /**
   * @schema GuardDutyMaster#RelationshipStatus
   */
  readonly relationshipStatus?: string;

  /**
   * @schema GuardDutyMaster#InvitedAt
   */
  readonly invitedAt?: string;

}

/**
 * Converts an object of type 'GuardDutyMaster' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyMaster(obj: GuardDutyMaster | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'InvitationId': obj.invitationId,
    'RelationshipStatus': obj.relationshipStatus,
    'InvitedAt': obj.invitedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyMemberDataSourceConfiguration
 */
export interface GuardDutyMemberDataSourceConfiguration {
  /**
   * @schema GuardDutyMemberDataSourceConfiguration#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema GuardDutyMemberDataSourceConfiguration#DataSources
   */
  readonly dataSources?: GuardDutyDataSourceConfigurationsResult;

}

/**
 * Converts an object of type 'GuardDutyMemberDataSourceConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyMemberDataSourceConfiguration(obj: GuardDutyMemberDataSourceConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'DataSources': toJson_GuardDutyDataSourceConfigurationsResult(obj.dataSources),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyMember
 */
export interface GuardDutyMember {
  /**
   * @schema GuardDutyMember#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema GuardDutyMember#DetectorId
   */
  readonly detectorId?: string;

  /**
   * @schema GuardDutyMember#MasterId
   */
  readonly masterId?: string;

  /**
   * @schema GuardDutyMember#Email
   */
  readonly email?: string;

  /**
   * @schema GuardDutyMember#RelationshipStatus
   */
  readonly relationshipStatus?: string;

  /**
   * @schema GuardDutyMember#InvitedAt
   */
  readonly invitedAt?: string;

  /**
   * @schema GuardDutyMember#UpdatedAt
   */
  readonly updatedAt?: string;

}

/**
 * Converts an object of type 'GuardDutyMember' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyMember(obj: GuardDutyMember | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'DetectorId': obj.detectorId,
    'MasterId': obj.masterId,
    'Email': obj.email,
    'RelationshipStatus': obj.relationshipStatus,
    'InvitedAt': obj.invitedAt,
    'UpdatedAt': obj.updatedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyUsageCriteria
 */
export interface GuardDutyUsageCriteria {
  /**
   * @schema GuardDutyUsageCriteria#AccountIds
   */
  readonly accountIds?: string[];

  /**
   * @schema GuardDutyUsageCriteria#DataSources
   */
  readonly dataSources?: string[];

  /**
   * @schema GuardDutyUsageCriteria#Resources
   */
  readonly resources?: string[];

}

/**
 * Converts an object of type 'GuardDutyUsageCriteria' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyUsageCriteria(obj: GuardDutyUsageCriteria | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountIds': obj.accountIds?.map(y => y),
    'DataSources': obj.dataSources?.map(y => y),
    'Resources': obj.resources?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyUsageStatistics
 */
export interface GuardDutyUsageStatistics {
  /**
   * @schema GuardDutyUsageStatistics#SumByAccount
   */
  readonly sumByAccount?: GuardDutyUsageAccountResult[];

  /**
   * @schema GuardDutyUsageStatistics#SumByDataSource
   */
  readonly sumByDataSource?: GuardDutyUsageDataSourceResult[];

  /**
   * @schema GuardDutyUsageStatistics#SumByResource
   */
  readonly sumByResource?: GuardDutyUsageResourceResult[];

  /**
   * @schema GuardDutyUsageStatistics#TopResources
   */
  readonly topResources?: GuardDutyUsageResourceResult[];

}

/**
 * Converts an object of type 'GuardDutyUsageStatistics' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyUsageStatistics(obj: GuardDutyUsageStatistics | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SumByAccount': obj.sumByAccount?.map(y => toJson_GuardDutyUsageAccountResult(y)),
    'SumByDataSource': obj.sumByDataSource?.map(y => toJson_GuardDutyUsageDataSourceResult(y)),
    'SumByResource': obj.sumByResource?.map(y => toJson_GuardDutyUsageResourceResult(y)),
    'TopResources': obj.topResources?.map(y => toJson_GuardDutyUsageResourceResult(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyInvitation
 */
export interface GuardDutyInvitation {
  /**
   * @schema GuardDutyInvitation#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema GuardDutyInvitation#InvitationId
   */
  readonly invitationId?: string;

  /**
   * @schema GuardDutyInvitation#RelationshipStatus
   */
  readonly relationshipStatus?: string;

  /**
   * @schema GuardDutyInvitation#InvitedAt
   */
  readonly invitedAt?: string;

}

/**
 * Converts an object of type 'GuardDutyInvitation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyInvitation(obj: GuardDutyInvitation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'InvitationId': obj.invitationId,
    'RelationshipStatus': obj.relationshipStatus,
    'InvitedAt': obj.invitedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyAdminAccount
 */
export interface GuardDutyAdminAccount {
  /**
   * @schema GuardDutyAdminAccount#AdminAccountId
   */
  readonly adminAccountId?: string;

  /**
   * @schema GuardDutyAdminAccount#AdminStatus
   */
  readonly adminStatus?: string;

}

/**
 * Converts an object of type 'GuardDutyAdminAccount' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyAdminAccount(obj: GuardDutyAdminAccount | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AdminAccountId': obj.adminAccountId,
    'AdminStatus': obj.adminStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyDestination
 */
export interface GuardDutyDestination {
  /**
   * @schema GuardDutyDestination#DestinationId
   */
  readonly destinationId?: string;

  /**
   * @schema GuardDutyDestination#DestinationType
   */
  readonly destinationType?: string;

  /**
   * @schema GuardDutyDestination#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'GuardDutyDestination' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyDestination(obj: GuardDutyDestination | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DestinationId': obj.destinationId,
    'DestinationType': obj.destinationType,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyOrganizationDataSourceConfigurations
 */
export interface GuardDutyOrganizationDataSourceConfigurations {
  /**
   * @schema GuardDutyOrganizationDataSourceConfigurations#S3Logs
   */
  readonly s3Logs?: GuardDutyOrganizationS3LogsConfiguration;

}

/**
 * Converts an object of type 'GuardDutyOrganizationDataSourceConfigurations' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyOrganizationDataSourceConfigurations(obj: GuardDutyOrganizationDataSourceConfigurations | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S3Logs': toJson_GuardDutyOrganizationS3LogsConfiguration(obj.s3Logs),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyS3LogsConfiguration
 */
export interface GuardDutyS3LogsConfiguration {
  /**
   * @schema GuardDutyS3LogsConfiguration#Enable
   */
  readonly enable?: boolean;

}

/**
 * Converts an object of type 'GuardDutyS3LogsConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyS3LogsConfiguration(obj: GuardDutyS3LogsConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Enable': obj.enable,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyCondition
 */
export interface GuardDutyCondition {
  /**
   * @schema GuardDutyCondition#Eq
   */
  readonly eq?: string[];

  /**
   * @schema GuardDutyCondition#Neq
   */
  readonly neq?: string[];

  /**
   * @schema GuardDutyCondition#Gt
   */
  readonly gt?: number;

  /**
   * @schema GuardDutyCondition#Gte
   */
  readonly gte?: number;

  /**
   * @schema GuardDutyCondition#Lt
   */
  readonly lt?: number;

  /**
   * @schema GuardDutyCondition#Lte
   */
  readonly lte?: number;

  /**
   * @schema GuardDutyCondition#Equals2
   */
  readonly equals2?: string[];

  /**
   * @schema GuardDutyCondition#NotEquals
   */
  readonly notEquals?: string[];

  /**
   * @schema GuardDutyCondition#GreaterThan
   */
  readonly greaterThan?: number;

  /**
   * @schema GuardDutyCondition#GreaterThanOrEqual
   */
  readonly greaterThanOrEqual?: number;

  /**
   * @schema GuardDutyCondition#LessThan
   */
  readonly lessThan?: number;

  /**
   * @schema GuardDutyCondition#LessThanOrEqual
   */
  readonly lessThanOrEqual?: number;

}

/**
 * Converts an object of type 'GuardDutyCondition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyCondition(obj: GuardDutyCondition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Eq': obj.eq?.map(y => y),
    'Neq': obj.neq?.map(y => y),
    'Gt': obj.gt,
    'Gte': obj.gte,
    'Lt': obj.lt,
    'Lte': obj.lte,
    'Equals2': obj.equals2?.map(y => y),
    'NotEquals': obj.notEquals?.map(y => y),
    'GreaterThan': obj.greaterThan,
    'GreaterThanOrEqual': obj.greaterThanOrEqual,
    'LessThan': obj.lessThan,
    'LessThanOrEqual': obj.lessThanOrEqual,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyOrganizationS3LogsConfigurationResult
 */
export interface GuardDutyOrganizationS3LogsConfigurationResult {
  /**
   * @schema GuardDutyOrganizationS3LogsConfigurationResult#AutoEnable
   */
  readonly autoEnable?: boolean;

}

/**
 * Converts an object of type 'GuardDutyOrganizationS3LogsConfigurationResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyOrganizationS3LogsConfigurationResult(obj: GuardDutyOrganizationS3LogsConfigurationResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoEnable': obj.autoEnable,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyCloudTrailConfigurationResult
 */
export interface GuardDutyCloudTrailConfigurationResult {
  /**
   * @schema GuardDutyCloudTrailConfigurationResult#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'GuardDutyCloudTrailConfigurationResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyCloudTrailConfigurationResult(obj: GuardDutyCloudTrailConfigurationResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyDnsLogsConfigurationResult
 */
export interface GuardDutyDnsLogsConfigurationResult {
  /**
   * @schema GuardDutyDnsLogsConfigurationResult#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'GuardDutyDnsLogsConfigurationResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyDnsLogsConfigurationResult(obj: GuardDutyDnsLogsConfigurationResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyFlowLogsConfigurationResult
 */
export interface GuardDutyFlowLogsConfigurationResult {
  /**
   * @schema GuardDutyFlowLogsConfigurationResult#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'GuardDutyFlowLogsConfigurationResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyFlowLogsConfigurationResult(obj: GuardDutyFlowLogsConfigurationResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyS3LogsConfigurationResult
 */
export interface GuardDutyS3LogsConfigurationResult {
  /**
   * @schema GuardDutyS3LogsConfigurationResult#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'GuardDutyS3LogsConfigurationResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyS3LogsConfigurationResult(obj: GuardDutyS3LogsConfigurationResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyResource
 */
export interface GuardDutyResource {
  /**
   * @schema GuardDutyResource#AccessKeyDetails
   */
  readonly accessKeyDetails?: GuardDutyAccessKeyDetails;

  /**
   * @schema GuardDutyResource#S3BucketDetails
   */
  readonly s3BucketDetails?: GuardDutyS3BucketDetail[];

  /**
   * @schema GuardDutyResource#InstanceDetails
   */
  readonly instanceDetails?: GuardDutyInstanceDetails;

  /**
   * @schema GuardDutyResource#ResourceType
   */
  readonly resourceType?: string;

}

/**
 * Converts an object of type 'GuardDutyResource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyResource(obj: GuardDutyResource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccessKeyDetails': toJson_GuardDutyAccessKeyDetails(obj.accessKeyDetails),
    'S3BucketDetails': obj.s3BucketDetails?.map(y => toJson_GuardDutyS3BucketDetail(y)),
    'InstanceDetails': toJson_GuardDutyInstanceDetails(obj.instanceDetails),
    'ResourceType': obj.resourceType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyService
 */
export interface GuardDutyService {
  /**
   * @schema GuardDutyService#Action
   */
  readonly action?: GuardDutyAction;

  /**
   * @schema GuardDutyService#Evidence
   */
  readonly evidence?: GuardDutyEvidence;

  /**
   * @schema GuardDutyService#Archived
   */
  readonly archived?: boolean;

  /**
   * @schema GuardDutyService#Count
   */
  readonly count?: number;

  /**
   * @schema GuardDutyService#DetectorId
   */
  readonly detectorId?: string;

  /**
   * @schema GuardDutyService#EventFirstSeen
   */
  readonly eventFirstSeen?: string;

  /**
   * @schema GuardDutyService#EventLastSeen
   */
  readonly eventLastSeen?: string;

  /**
   * @schema GuardDutyService#ResourceRole
   */
  readonly resourceRole?: string;

  /**
   * @schema GuardDutyService#ServiceName
   */
  readonly serviceName?: string;

  /**
   * @schema GuardDutyService#UserFeedback
   */
  readonly userFeedback?: string;

}

/**
 * Converts an object of type 'GuardDutyService' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyService(obj: GuardDutyService | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Action': toJson_GuardDutyAction(obj.action),
    'Evidence': toJson_GuardDutyEvidence(obj.evidence),
    'Archived': obj.archived,
    'Count': obj.count,
    'DetectorId': obj.detectorId,
    'EventFirstSeen': obj.eventFirstSeen,
    'EventLastSeen': obj.eventLastSeen,
    'ResourceRole': obj.resourceRole,
    'ServiceName': obj.serviceName,
    'UserFeedback': obj.userFeedback,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyUsageAccountResult
 */
export interface GuardDutyUsageAccountResult {
  /**
   * @schema GuardDutyUsageAccountResult#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema GuardDutyUsageAccountResult#Total
   */
  readonly total?: GuardDutyTotal;

}

/**
 * Converts an object of type 'GuardDutyUsageAccountResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyUsageAccountResult(obj: GuardDutyUsageAccountResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'Total': toJson_GuardDutyTotal(obj.total),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyUsageDataSourceResult
 */
export interface GuardDutyUsageDataSourceResult {
  /**
   * @schema GuardDutyUsageDataSourceResult#DataSource
   */
  readonly dataSource?: string;

  /**
   * @schema GuardDutyUsageDataSourceResult#Total
   */
  readonly total?: GuardDutyTotal;

}

/**
 * Converts an object of type 'GuardDutyUsageDataSourceResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyUsageDataSourceResult(obj: GuardDutyUsageDataSourceResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataSource': obj.dataSource,
    'Total': toJson_GuardDutyTotal(obj.total),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyUsageResourceResult
 */
export interface GuardDutyUsageResourceResult {
  /**
   * @schema GuardDutyUsageResourceResult#Resource
   */
  readonly resource?: string;

  /**
   * @schema GuardDutyUsageResourceResult#Total
   */
  readonly total?: GuardDutyTotal;

}

/**
 * Converts an object of type 'GuardDutyUsageResourceResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyUsageResourceResult(obj: GuardDutyUsageResourceResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Resource': obj.resource,
    'Total': toJson_GuardDutyTotal(obj.total),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyOrganizationS3LogsConfiguration
 */
export interface GuardDutyOrganizationS3LogsConfiguration {
  /**
   * @schema GuardDutyOrganizationS3LogsConfiguration#AutoEnable
   */
  readonly autoEnable?: boolean;

}

/**
 * Converts an object of type 'GuardDutyOrganizationS3LogsConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyOrganizationS3LogsConfiguration(obj: GuardDutyOrganizationS3LogsConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoEnable': obj.autoEnable,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyAccessKeyDetails
 */
export interface GuardDutyAccessKeyDetails {
  /**
   * @schema GuardDutyAccessKeyDetails#AccessKeyId
   */
  readonly accessKeyId?: string;

  /**
   * @schema GuardDutyAccessKeyDetails#PrincipalId
   */
  readonly principalId?: string;

  /**
   * @schema GuardDutyAccessKeyDetails#UserName
   */
  readonly userName?: string;

  /**
   * @schema GuardDutyAccessKeyDetails#UserType
   */
  readonly userType?: string;

}

/**
 * Converts an object of type 'GuardDutyAccessKeyDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyAccessKeyDetails(obj: GuardDutyAccessKeyDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccessKeyId': obj.accessKeyId,
    'PrincipalId': obj.principalId,
    'UserName': obj.userName,
    'UserType': obj.userType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyS3BucketDetail
 */
export interface GuardDutyS3BucketDetail {
  /**
   * @schema GuardDutyS3BucketDetail#Arn
   */
  readonly arn?: string;

  /**
   * @schema GuardDutyS3BucketDetail#Name
   */
  readonly name?: string;

  /**
   * @schema GuardDutyS3BucketDetail#Type
   */
  readonly type?: string;

  /**
   * @schema GuardDutyS3BucketDetail#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema GuardDutyS3BucketDetail#Owner
   */
  readonly owner?: GuardDutyOwner;

  /**
   * @schema GuardDutyS3BucketDetail#Tags
   */
  readonly tags?: GuardDutyTag[];

  /**
   * @schema GuardDutyS3BucketDetail#DefaultServerSideEncryption
   */
  readonly defaultServerSideEncryption?: GuardDutyDefaultServerSideEncryption;

  /**
   * @schema GuardDutyS3BucketDetail#PublicAccess
   */
  readonly publicAccess?: GuardDutyPublicAccess;

}

/**
 * Converts an object of type 'GuardDutyS3BucketDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyS3BucketDetail(obj: GuardDutyS3BucketDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Name': obj.name,
    'Type': obj.type,
    'CreatedAt': obj.createdAt,
    'Owner': toJson_GuardDutyOwner(obj.owner),
    'Tags': obj.tags?.map(y => toJson_GuardDutyTag(y)),
    'DefaultServerSideEncryption': toJson_GuardDutyDefaultServerSideEncryption(obj.defaultServerSideEncryption),
    'PublicAccess': toJson_GuardDutyPublicAccess(obj.publicAccess),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyInstanceDetails
 */
export interface GuardDutyInstanceDetails {
  /**
   * @schema GuardDutyInstanceDetails#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema GuardDutyInstanceDetails#IamInstanceProfile
   */
  readonly iamInstanceProfile?: GuardDutyIamInstanceProfile;

  /**
   * @schema GuardDutyInstanceDetails#ImageDescription
   */
  readonly imageDescription?: string;

  /**
   * @schema GuardDutyInstanceDetails#ImageId
   */
  readonly imageId?: string;

  /**
   * @schema GuardDutyInstanceDetails#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema GuardDutyInstanceDetails#InstanceState
   */
  readonly instanceState?: string;

  /**
   * @schema GuardDutyInstanceDetails#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema GuardDutyInstanceDetails#OutpostArn
   */
  readonly outpostArn?: string;

  /**
   * @schema GuardDutyInstanceDetails#LaunchTime
   */
  readonly launchTime?: string;

  /**
   * @schema GuardDutyInstanceDetails#NetworkInterfaces
   */
  readonly networkInterfaces?: GuardDutyNetworkInterface[];

  /**
   * @schema GuardDutyInstanceDetails#Platform
   */
  readonly platform?: string;

  /**
   * @schema GuardDutyInstanceDetails#ProductCodes
   */
  readonly productCodes?: GuardDutyProductCode[];

  /**
   * @schema GuardDutyInstanceDetails#Tags
   */
  readonly tags?: GuardDutyTag[];

}

/**
 * Converts an object of type 'GuardDutyInstanceDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyInstanceDetails(obj: GuardDutyInstanceDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AvailabilityZone': obj.availabilityZone,
    'IamInstanceProfile': toJson_GuardDutyIamInstanceProfile(obj.iamInstanceProfile),
    'ImageDescription': obj.imageDescription,
    'ImageId': obj.imageId,
    'InstanceId': obj.instanceId,
    'InstanceState': obj.instanceState,
    'InstanceType': obj.instanceType,
    'OutpostArn': obj.outpostArn,
    'LaunchTime': obj.launchTime,
    'NetworkInterfaces': obj.networkInterfaces?.map(y => toJson_GuardDutyNetworkInterface(y)),
    'Platform': obj.platform,
    'ProductCodes': obj.productCodes?.map(y => toJson_GuardDutyProductCode(y)),
    'Tags': obj.tags?.map(y => toJson_GuardDutyTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyAction
 */
export interface GuardDutyAction {
  /**
   * @schema GuardDutyAction#ActionType
   */
  readonly actionType?: string;

  /**
   * @schema GuardDutyAction#AwsApiCallAction
   */
  readonly awsApiCallAction?: GuardDutyAwsApiCallAction;

  /**
   * @schema GuardDutyAction#DnsRequestAction
   */
  readonly dnsRequestAction?: GuardDutyDnsRequestAction;

  /**
   * @schema GuardDutyAction#NetworkConnectionAction
   */
  readonly networkConnectionAction?: GuardDutyNetworkConnectionAction;

  /**
   * @schema GuardDutyAction#PortProbeAction
   */
  readonly portProbeAction?: GuardDutyPortProbeAction;

}

/**
 * Converts an object of type 'GuardDutyAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyAction(obj: GuardDutyAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ActionType': obj.actionType,
    'AwsApiCallAction': toJson_GuardDutyAwsApiCallAction(obj.awsApiCallAction),
    'DnsRequestAction': toJson_GuardDutyDnsRequestAction(obj.dnsRequestAction),
    'NetworkConnectionAction': toJson_GuardDutyNetworkConnectionAction(obj.networkConnectionAction),
    'PortProbeAction': toJson_GuardDutyPortProbeAction(obj.portProbeAction),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyEvidence
 */
export interface GuardDutyEvidence {
  /**
   * @schema GuardDutyEvidence#ThreatIntelligenceDetails
   */
  readonly threatIntelligenceDetails?: GuardDutyThreatIntelligenceDetail[];

}

/**
 * Converts an object of type 'GuardDutyEvidence' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyEvidence(obj: GuardDutyEvidence | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ThreatIntelligenceDetails': obj.threatIntelligenceDetails?.map(y => toJson_GuardDutyThreatIntelligenceDetail(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyTotal
 */
export interface GuardDutyTotal {
  /**
   * @schema GuardDutyTotal#Amount
   */
  readonly amount?: string;

  /**
   * @schema GuardDutyTotal#Unit
   */
  readonly unit?: string;

}

/**
 * Converts an object of type 'GuardDutyTotal' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyTotal(obj: GuardDutyTotal | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Amount': obj.amount,
    'Unit': obj.unit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyOwner
 */
export interface GuardDutyOwner {
  /**
   * @schema GuardDutyOwner#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'GuardDutyOwner' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyOwner(obj: GuardDutyOwner | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyTag
 */
export interface GuardDutyTag {
  /**
   * @schema GuardDutyTag#Key
   */
  readonly key?: string;

  /**
   * @schema GuardDutyTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'GuardDutyTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyTag(obj: GuardDutyTag | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyDefaultServerSideEncryption
 */
export interface GuardDutyDefaultServerSideEncryption {
  /**
   * @schema GuardDutyDefaultServerSideEncryption#EncryptionType
   */
  readonly encryptionType?: string;

  /**
   * @schema GuardDutyDefaultServerSideEncryption#KmsMasterKeyArn
   */
  readonly kmsMasterKeyArn?: string;

}

/**
 * Converts an object of type 'GuardDutyDefaultServerSideEncryption' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyDefaultServerSideEncryption(obj: GuardDutyDefaultServerSideEncryption | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EncryptionType': obj.encryptionType,
    'KmsMasterKeyArn': obj.kmsMasterKeyArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyPublicAccess
 */
export interface GuardDutyPublicAccess {
  /**
   * @schema GuardDutyPublicAccess#PermissionConfiguration
   */
  readonly permissionConfiguration?: GuardDutyPermissionConfiguration;

  /**
   * @schema GuardDutyPublicAccess#EffectivePermission
   */
  readonly effectivePermission?: string;

}

/**
 * Converts an object of type 'GuardDutyPublicAccess' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyPublicAccess(obj: GuardDutyPublicAccess | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PermissionConfiguration': toJson_GuardDutyPermissionConfiguration(obj.permissionConfiguration),
    'EffectivePermission': obj.effectivePermission,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyIamInstanceProfile
 */
export interface GuardDutyIamInstanceProfile {
  /**
   * @schema GuardDutyIamInstanceProfile#Arn
   */
  readonly arn?: string;

  /**
   * @schema GuardDutyIamInstanceProfile#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'GuardDutyIamInstanceProfile' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyIamInstanceProfile(obj: GuardDutyIamInstanceProfile | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyNetworkInterface
 */
export interface GuardDutyNetworkInterface {
  /**
   * @schema GuardDutyNetworkInterface#Ipv6Addresses
   */
  readonly ipv6Addresses?: string[];

  /**
   * @schema GuardDutyNetworkInterface#NetworkInterfaceId
   */
  readonly networkInterfaceId?: string;

  /**
   * @schema GuardDutyNetworkInterface#PrivateDnsName
   */
  readonly privateDnsName?: string;

  /**
   * @schema GuardDutyNetworkInterface#PrivateIpAddress
   */
  readonly privateIpAddress?: string;

  /**
   * @schema GuardDutyNetworkInterface#PrivateIpAddresses
   */
  readonly privateIpAddresses?: GuardDutyPrivateIpAddressDetails[];

  /**
   * @schema GuardDutyNetworkInterface#PublicDnsName
   */
  readonly publicDnsName?: string;

  /**
   * @schema GuardDutyNetworkInterface#PublicIp
   */
  readonly publicIp?: string;

  /**
   * @schema GuardDutyNetworkInterface#SecurityGroups
   */
  readonly securityGroups?: GuardDutySecurityGroup[];

  /**
   * @schema GuardDutyNetworkInterface#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema GuardDutyNetworkInterface#VpcId
   */
  readonly vpcId?: string;

}

/**
 * Converts an object of type 'GuardDutyNetworkInterface' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyNetworkInterface(obj: GuardDutyNetworkInterface | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Ipv6Addresses': obj.ipv6Addresses?.map(y => y),
    'NetworkInterfaceId': obj.networkInterfaceId,
    'PrivateDnsName': obj.privateDnsName,
    'PrivateIpAddress': obj.privateIpAddress,
    'PrivateIpAddresses': obj.privateIpAddresses?.map(y => toJson_GuardDutyPrivateIpAddressDetails(y)),
    'PublicDnsName': obj.publicDnsName,
    'PublicIp': obj.publicIp,
    'SecurityGroups': obj.securityGroups?.map(y => toJson_GuardDutySecurityGroup(y)),
    'SubnetId': obj.subnetId,
    'VpcId': obj.vpcId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyProductCode
 */
export interface GuardDutyProductCode {
  /**
   * @schema GuardDutyProductCode#Code
   */
  readonly code?: string;

  /**
   * @schema GuardDutyProductCode#ProductType
   */
  readonly productType?: string;

}

/**
 * Converts an object of type 'GuardDutyProductCode' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyProductCode(obj: GuardDutyProductCode | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Code': obj.code,
    'ProductType': obj.productType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyAwsApiCallAction
 */
export interface GuardDutyAwsApiCallAction {
  /**
   * @schema GuardDutyAwsApiCallAction#Api
   */
  readonly api?: string;

  /**
   * @schema GuardDutyAwsApiCallAction#CallerType
   */
  readonly callerType?: string;

  /**
   * @schema GuardDutyAwsApiCallAction#DomainDetails
   */
  readonly domainDetails?: GuardDutyDomainDetails;

  /**
   * @schema GuardDutyAwsApiCallAction#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema GuardDutyAwsApiCallAction#RemoteIpDetails
   */
  readonly remoteIpDetails?: GuardDutyRemoteIpDetails;

  /**
   * @schema GuardDutyAwsApiCallAction#ServiceName
   */
  readonly serviceName?: string;

}

/**
 * Converts an object of type 'GuardDutyAwsApiCallAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyAwsApiCallAction(obj: GuardDutyAwsApiCallAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Api': obj.api,
    'CallerType': obj.callerType,
    'DomainDetails': toJson_GuardDutyDomainDetails(obj.domainDetails),
    'ErrorCode': obj.errorCode,
    'RemoteIpDetails': toJson_GuardDutyRemoteIpDetails(obj.remoteIpDetails),
    'ServiceName': obj.serviceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyDnsRequestAction
 */
export interface GuardDutyDnsRequestAction {
  /**
   * @schema GuardDutyDnsRequestAction#Domain
   */
  readonly domain?: string;

}

/**
 * Converts an object of type 'GuardDutyDnsRequestAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyDnsRequestAction(obj: GuardDutyDnsRequestAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Domain': obj.domain,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyNetworkConnectionAction
 */
export interface GuardDutyNetworkConnectionAction {
  /**
   * @schema GuardDutyNetworkConnectionAction#Blocked
   */
  readonly blocked?: boolean;

  /**
   * @schema GuardDutyNetworkConnectionAction#ConnectionDirection
   */
  readonly connectionDirection?: string;

  /**
   * @schema GuardDutyNetworkConnectionAction#LocalPortDetails
   */
  readonly localPortDetails?: GuardDutyLocalPortDetails;

  /**
   * @schema GuardDutyNetworkConnectionAction#Protocol
   */
  readonly protocol?: string;

  /**
   * @schema GuardDutyNetworkConnectionAction#LocalIpDetails
   */
  readonly localIpDetails?: GuardDutyLocalIpDetails;

  /**
   * @schema GuardDutyNetworkConnectionAction#RemoteIpDetails
   */
  readonly remoteIpDetails?: GuardDutyRemoteIpDetails;

  /**
   * @schema GuardDutyNetworkConnectionAction#RemotePortDetails
   */
  readonly remotePortDetails?: GuardDutyRemotePortDetails;

}

/**
 * Converts an object of type 'GuardDutyNetworkConnectionAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyNetworkConnectionAction(obj: GuardDutyNetworkConnectionAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Blocked': obj.blocked,
    'ConnectionDirection': obj.connectionDirection,
    'LocalPortDetails': toJson_GuardDutyLocalPortDetails(obj.localPortDetails),
    'Protocol': obj.protocol,
    'LocalIpDetails': toJson_GuardDutyLocalIpDetails(obj.localIpDetails),
    'RemoteIpDetails': toJson_GuardDutyRemoteIpDetails(obj.remoteIpDetails),
    'RemotePortDetails': toJson_GuardDutyRemotePortDetails(obj.remotePortDetails),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyPortProbeAction
 */
export interface GuardDutyPortProbeAction {
  /**
   * @schema GuardDutyPortProbeAction#Blocked
   */
  readonly blocked?: boolean;

  /**
   * @schema GuardDutyPortProbeAction#PortProbeDetails
   */
  readonly portProbeDetails?: GuardDutyPortProbeDetail[];

}

/**
 * Converts an object of type 'GuardDutyPortProbeAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyPortProbeAction(obj: GuardDutyPortProbeAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Blocked': obj.blocked,
    'PortProbeDetails': obj.portProbeDetails?.map(y => toJson_GuardDutyPortProbeDetail(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyThreatIntelligenceDetail
 */
export interface GuardDutyThreatIntelligenceDetail {
  /**
   * @schema GuardDutyThreatIntelligenceDetail#ThreatListName
   */
  readonly threatListName?: string;

  /**
   * @schema GuardDutyThreatIntelligenceDetail#ThreatNames
   */
  readonly threatNames?: string[];

}

/**
 * Converts an object of type 'GuardDutyThreatIntelligenceDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyThreatIntelligenceDetail(obj: GuardDutyThreatIntelligenceDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ThreatListName': obj.threatListName,
    'ThreatNames': obj.threatNames?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyPermissionConfiguration
 */
export interface GuardDutyPermissionConfiguration {
  /**
   * @schema GuardDutyPermissionConfiguration#BucketLevelPermissions
   */
  readonly bucketLevelPermissions?: GuardDutyBucketLevelPermissions;

  /**
   * @schema GuardDutyPermissionConfiguration#AccountLevelPermissions
   */
  readonly accountLevelPermissions?: GuardDutyAccountLevelPermissions;

}

/**
 * Converts an object of type 'GuardDutyPermissionConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyPermissionConfiguration(obj: GuardDutyPermissionConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BucketLevelPermissions': toJson_GuardDutyBucketLevelPermissions(obj.bucketLevelPermissions),
    'AccountLevelPermissions': toJson_GuardDutyAccountLevelPermissions(obj.accountLevelPermissions),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyPrivateIpAddressDetails
 */
export interface GuardDutyPrivateIpAddressDetails {
  /**
   * @schema GuardDutyPrivateIpAddressDetails#PrivateDnsName
   */
  readonly privateDnsName?: string;

  /**
   * @schema GuardDutyPrivateIpAddressDetails#PrivateIpAddress
   */
  readonly privateIpAddress?: string;

}

/**
 * Converts an object of type 'GuardDutyPrivateIpAddressDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyPrivateIpAddressDetails(obj: GuardDutyPrivateIpAddressDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PrivateDnsName': obj.privateDnsName,
    'PrivateIpAddress': obj.privateIpAddress,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutySecurityGroup
 */
export interface GuardDutySecurityGroup {
  /**
   * @schema GuardDutySecurityGroup#GroupId
   */
  readonly groupId?: string;

  /**
   * @schema GuardDutySecurityGroup#GroupName
   */
  readonly groupName?: string;

}

/**
 * Converts an object of type 'GuardDutySecurityGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutySecurityGroup(obj: GuardDutySecurityGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupId': obj.groupId,
    'GroupName': obj.groupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyDomainDetails
 */
export interface GuardDutyDomainDetails {
  /**
   * @schema GuardDutyDomainDetails#Domain
   */
  readonly domain?: string;

}

/**
 * Converts an object of type 'GuardDutyDomainDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyDomainDetails(obj: GuardDutyDomainDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Domain': obj.domain,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyRemoteIpDetails
 */
export interface GuardDutyRemoteIpDetails {
  /**
   * @schema GuardDutyRemoteIpDetails#City
   */
  readonly city?: GuardDutyCity;

  /**
   * @schema GuardDutyRemoteIpDetails#Country
   */
  readonly country?: GuardDutyCountry;

  /**
   * @schema GuardDutyRemoteIpDetails#GeoLocation
   */
  readonly geoLocation?: GuardDutyGeoLocation;

  /**
   * @schema GuardDutyRemoteIpDetails#IpAddressV4
   */
  readonly ipAddressV4?: string;

  /**
   * @schema GuardDutyRemoteIpDetails#Organization
   */
  readonly organization?: GuardDutyOrganization;

}

/**
 * Converts an object of type 'GuardDutyRemoteIpDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyRemoteIpDetails(obj: GuardDutyRemoteIpDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'City': toJson_GuardDutyCity(obj.city),
    'Country': toJson_GuardDutyCountry(obj.country),
    'GeoLocation': toJson_GuardDutyGeoLocation(obj.geoLocation),
    'IpAddressV4': obj.ipAddressV4,
    'Organization': toJson_GuardDutyOrganization(obj.organization),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyLocalPortDetails
 */
export interface GuardDutyLocalPortDetails {
  /**
   * @schema GuardDutyLocalPortDetails#Port
   */
  readonly port?: number;

  /**
   * @schema GuardDutyLocalPortDetails#PortName
   */
  readonly portName?: string;

}

/**
 * Converts an object of type 'GuardDutyLocalPortDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyLocalPortDetails(obj: GuardDutyLocalPortDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Port': obj.port,
    'PortName': obj.portName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyLocalIpDetails
 */
export interface GuardDutyLocalIpDetails {
  /**
   * @schema GuardDutyLocalIpDetails#IpAddressV4
   */
  readonly ipAddressV4?: string;

}

/**
 * Converts an object of type 'GuardDutyLocalIpDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyLocalIpDetails(obj: GuardDutyLocalIpDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IpAddressV4': obj.ipAddressV4,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyRemotePortDetails
 */
export interface GuardDutyRemotePortDetails {
  /**
   * @schema GuardDutyRemotePortDetails#Port
   */
  readonly port?: number;

  /**
   * @schema GuardDutyRemotePortDetails#PortName
   */
  readonly portName?: string;

}

/**
 * Converts an object of type 'GuardDutyRemotePortDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyRemotePortDetails(obj: GuardDutyRemotePortDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Port': obj.port,
    'PortName': obj.portName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyPortProbeDetail
 */
export interface GuardDutyPortProbeDetail {
  /**
   * @schema GuardDutyPortProbeDetail#LocalPortDetails
   */
  readonly localPortDetails?: GuardDutyLocalPortDetails;

  /**
   * @schema GuardDutyPortProbeDetail#LocalIpDetails
   */
  readonly localIpDetails?: GuardDutyLocalIpDetails;

  /**
   * @schema GuardDutyPortProbeDetail#RemoteIpDetails
   */
  readonly remoteIpDetails?: GuardDutyRemoteIpDetails;

}

/**
 * Converts an object of type 'GuardDutyPortProbeDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyPortProbeDetail(obj: GuardDutyPortProbeDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LocalPortDetails': toJson_GuardDutyLocalPortDetails(obj.localPortDetails),
    'LocalIpDetails': toJson_GuardDutyLocalIpDetails(obj.localIpDetails),
    'RemoteIpDetails': toJson_GuardDutyRemoteIpDetails(obj.remoteIpDetails),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyBucketLevelPermissions
 */
export interface GuardDutyBucketLevelPermissions {
  /**
   * @schema GuardDutyBucketLevelPermissions#AccessControlList
   */
  readonly accessControlList?: GuardDutyAccessControlList;

  /**
   * @schema GuardDutyBucketLevelPermissions#BucketPolicy
   */
  readonly bucketPolicy?: GuardDutyBucketPolicy;

  /**
   * @schema GuardDutyBucketLevelPermissions#BlockPublicAccess
   */
  readonly blockPublicAccess?: GuardDutyBlockPublicAccess;

}

/**
 * Converts an object of type 'GuardDutyBucketLevelPermissions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyBucketLevelPermissions(obj: GuardDutyBucketLevelPermissions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccessControlList': toJson_GuardDutyAccessControlList(obj.accessControlList),
    'BucketPolicy': toJson_GuardDutyBucketPolicy(obj.bucketPolicy),
    'BlockPublicAccess': toJson_GuardDutyBlockPublicAccess(obj.blockPublicAccess),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyAccountLevelPermissions
 */
export interface GuardDutyAccountLevelPermissions {
  /**
   * @schema GuardDutyAccountLevelPermissions#BlockPublicAccess
   */
  readonly blockPublicAccess?: GuardDutyBlockPublicAccess;

}

/**
 * Converts an object of type 'GuardDutyAccountLevelPermissions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyAccountLevelPermissions(obj: GuardDutyAccountLevelPermissions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BlockPublicAccess': toJson_GuardDutyBlockPublicAccess(obj.blockPublicAccess),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyCity
 */
export interface GuardDutyCity {
  /**
   * @schema GuardDutyCity#CityName
   */
  readonly cityName?: string;

}

/**
 * Converts an object of type 'GuardDutyCity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyCity(obj: GuardDutyCity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CityName': obj.cityName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyCountry
 */
export interface GuardDutyCountry {
  /**
   * @schema GuardDutyCountry#CountryCode
   */
  readonly countryCode?: string;

  /**
   * @schema GuardDutyCountry#CountryName
   */
  readonly countryName?: string;

}

/**
 * Converts an object of type 'GuardDutyCountry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyCountry(obj: GuardDutyCountry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CountryCode': obj.countryCode,
    'CountryName': obj.countryName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyGeoLocation
 */
export interface GuardDutyGeoLocation {
  /**
   * @schema GuardDutyGeoLocation#Lat
   */
  readonly lat?: number;

  /**
   * @schema GuardDutyGeoLocation#Lon
   */
  readonly lon?: number;

}

/**
 * Converts an object of type 'GuardDutyGeoLocation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyGeoLocation(obj: GuardDutyGeoLocation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Lat': obj.lat,
    'Lon': obj.lon,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyOrganization
 */
export interface GuardDutyOrganization {
  /**
   * @schema GuardDutyOrganization#Asn
   */
  readonly asn?: string;

  /**
   * @schema GuardDutyOrganization#AsnOrg
   */
  readonly asnOrg?: string;

  /**
   * @schema GuardDutyOrganization#Isp
   */
  readonly isp?: string;

  /**
   * @schema GuardDutyOrganization#Org
   */
  readonly org?: string;

}

/**
 * Converts an object of type 'GuardDutyOrganization' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyOrganization(obj: GuardDutyOrganization | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Asn': obj.asn,
    'AsnOrg': obj.asnOrg,
    'Isp': obj.isp,
    'Org': obj.org,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyAccessControlList
 */
export interface GuardDutyAccessControlList {
  /**
   * @schema GuardDutyAccessControlList#AllowsPublicReadAccess
   */
  readonly allowsPublicReadAccess?: boolean;

  /**
   * @schema GuardDutyAccessControlList#AllowsPublicWriteAccess
   */
  readonly allowsPublicWriteAccess?: boolean;

}

/**
 * Converts an object of type 'GuardDutyAccessControlList' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyAccessControlList(obj: GuardDutyAccessControlList | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AllowsPublicReadAccess': obj.allowsPublicReadAccess,
    'AllowsPublicWriteAccess': obj.allowsPublicWriteAccess,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyBucketPolicy
 */
export interface GuardDutyBucketPolicy {
  /**
   * @schema GuardDutyBucketPolicy#AllowsPublicReadAccess
   */
  readonly allowsPublicReadAccess?: boolean;

  /**
   * @schema GuardDutyBucketPolicy#AllowsPublicWriteAccess
   */
  readonly allowsPublicWriteAccess?: boolean;

}

/**
 * Converts an object of type 'GuardDutyBucketPolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyBucketPolicy(obj: GuardDutyBucketPolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AllowsPublicReadAccess': obj.allowsPublicReadAccess,
    'AllowsPublicWriteAccess': obj.allowsPublicWriteAccess,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GuardDutyBlockPublicAccess
 */
export interface GuardDutyBlockPublicAccess {
  /**
   * @schema GuardDutyBlockPublicAccess#IgnorePublicAcls
   */
  readonly ignorePublicAcls?: boolean;

  /**
   * @schema GuardDutyBlockPublicAccess#RestrictPublicBuckets
   */
  readonly restrictPublicBuckets?: boolean;

  /**
   * @schema GuardDutyBlockPublicAccess#BlockPublicAcls
   */
  readonly blockPublicAcls?: boolean;

  /**
   * @schema GuardDutyBlockPublicAccess#BlockPublicPolicy
   */
  readonly blockPublicPolicy?: boolean;

}

/**
 * Converts an object of type 'GuardDutyBlockPublicAccess' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GuardDutyBlockPublicAccess(obj: GuardDutyBlockPublicAccess | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IgnorePublicAcls': obj.ignorePublicAcls,
    'RestrictPublicBuckets': obj.restrictPublicBuckets,
    'BlockPublicAcls': obj.blockPublicAcls,
    'BlockPublicPolicy': obj.blockPublicPolicy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
