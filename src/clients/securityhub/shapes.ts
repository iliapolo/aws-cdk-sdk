/**
 * @schema SecurityHubAcceptAdministratorInvitationRequest
 */
export interface SecurityHubAcceptAdministratorInvitationRequest {
  /**
   * @schema SecurityHubAcceptAdministratorInvitationRequest#AdministratorId
   */
  readonly administratorId?: string;

  /**
   * @schema SecurityHubAcceptAdministratorInvitationRequest#InvitationId
   */
  readonly invitationId?: string;

}

/**
 * Converts an object of type 'SecurityHubAcceptAdministratorInvitationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAcceptAdministratorInvitationRequest(obj: SecurityHubAcceptAdministratorInvitationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AdministratorId': obj.administratorId,
    'InvitationId': obj.invitationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAcceptAdministratorInvitationResponse
 */
export interface SecurityHubAcceptAdministratorInvitationResponse {
}

/**
 * Converts an object of type 'SecurityHubAcceptAdministratorInvitationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAcceptAdministratorInvitationResponse(obj: SecurityHubAcceptAdministratorInvitationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAcceptInvitationRequest
 */
export interface SecurityHubAcceptInvitationRequest {
  /**
   * @schema SecurityHubAcceptInvitationRequest#MasterId
   */
  readonly masterId?: string;

  /**
   * @schema SecurityHubAcceptInvitationRequest#InvitationId
   */
  readonly invitationId?: string;

}

/**
 * Converts an object of type 'SecurityHubAcceptInvitationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAcceptInvitationRequest(obj: SecurityHubAcceptInvitationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MasterId': obj.masterId,
    'InvitationId': obj.invitationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAcceptInvitationResponse
 */
export interface SecurityHubAcceptInvitationResponse {
}

/**
 * Converts an object of type 'SecurityHubAcceptInvitationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAcceptInvitationResponse(obj: SecurityHubAcceptInvitationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubBatchDisableStandardsRequest
 */
export interface SecurityHubBatchDisableStandardsRequest {
  /**
   * @schema SecurityHubBatchDisableStandardsRequest#StandardsSubscriptionArns
   */
  readonly standardsSubscriptionArns?: string[];

}

/**
 * Converts an object of type 'SecurityHubBatchDisableStandardsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubBatchDisableStandardsRequest(obj: SecurityHubBatchDisableStandardsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StandardsSubscriptionArns': obj.standardsSubscriptionArns?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubBatchDisableStandardsResponse
 */
export interface SecurityHubBatchDisableStandardsResponse {
  /**
   * @schema SecurityHubBatchDisableStandardsResponse#StandardsSubscriptions
   */
  readonly standardsSubscriptions?: SecurityHubStandardsSubscription[];

}

/**
 * Converts an object of type 'SecurityHubBatchDisableStandardsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubBatchDisableStandardsResponse(obj: SecurityHubBatchDisableStandardsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StandardsSubscriptions': obj.standardsSubscriptions?.map(y => toJson_SecurityHubStandardsSubscription(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubBatchEnableStandardsRequest
 */
export interface SecurityHubBatchEnableStandardsRequest {
  /**
   * @schema SecurityHubBatchEnableStandardsRequest#StandardsSubscriptionRequests
   */
  readonly standardsSubscriptionRequests?: SecurityHubStandardsSubscriptionRequest[];

}

/**
 * Converts an object of type 'SecurityHubBatchEnableStandardsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubBatchEnableStandardsRequest(obj: SecurityHubBatchEnableStandardsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StandardsSubscriptionRequests': obj.standardsSubscriptionRequests?.map(y => toJson_SecurityHubStandardsSubscriptionRequest(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubBatchEnableStandardsResponse
 */
export interface SecurityHubBatchEnableStandardsResponse {
  /**
   * @schema SecurityHubBatchEnableStandardsResponse#StandardsSubscriptions
   */
  readonly standardsSubscriptions?: SecurityHubStandardsSubscription[];

}

/**
 * Converts an object of type 'SecurityHubBatchEnableStandardsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubBatchEnableStandardsResponse(obj: SecurityHubBatchEnableStandardsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StandardsSubscriptions': obj.standardsSubscriptions?.map(y => toJson_SecurityHubStandardsSubscription(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubBatchImportFindingsRequest
 */
export interface SecurityHubBatchImportFindingsRequest {
  /**
   * @schema SecurityHubBatchImportFindingsRequest#Findings
   */
  readonly findings?: SecurityHubAwsSecurityFinding[];

}

/**
 * Converts an object of type 'SecurityHubBatchImportFindingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubBatchImportFindingsRequest(obj: SecurityHubBatchImportFindingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Findings': obj.findings?.map(y => toJson_SecurityHubAwsSecurityFinding(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubBatchImportFindingsResponse
 */
export interface SecurityHubBatchImportFindingsResponse {
  /**
   * @schema SecurityHubBatchImportFindingsResponse#FailedCount
   */
  readonly failedCount?: number;

  /**
   * @schema SecurityHubBatchImportFindingsResponse#SuccessCount
   */
  readonly successCount?: number;

  /**
   * @schema SecurityHubBatchImportFindingsResponse#FailedFindings
   */
  readonly failedFindings?: SecurityHubImportFindingsError[];

}

/**
 * Converts an object of type 'SecurityHubBatchImportFindingsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubBatchImportFindingsResponse(obj: SecurityHubBatchImportFindingsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FailedCount': obj.failedCount,
    'SuccessCount': obj.successCount,
    'FailedFindings': obj.failedFindings?.map(y => toJson_SecurityHubImportFindingsError(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubBatchUpdateFindingsRequest
 */
export interface SecurityHubBatchUpdateFindingsRequest {
  /**
   * @schema SecurityHubBatchUpdateFindingsRequest#FindingIdentifiers
   */
  readonly findingIdentifiers?: SecurityHubAwsSecurityFindingIdentifier[];

  /**
   * @schema SecurityHubBatchUpdateFindingsRequest#Note
   */
  readonly note?: SecurityHubNoteUpdate;

  /**
   * @schema SecurityHubBatchUpdateFindingsRequest#Severity
   */
  readonly severity?: SecurityHubSeverityUpdate;

  /**
   * @schema SecurityHubBatchUpdateFindingsRequest#VerificationState
   */
  readonly verificationState?: string;

  /**
   * @schema SecurityHubBatchUpdateFindingsRequest#Confidence
   */
  readonly confidence?: number;

  /**
   * @schema SecurityHubBatchUpdateFindingsRequest#Criticality
   */
  readonly criticality?: number;

  /**
   * @schema SecurityHubBatchUpdateFindingsRequest#Types
   */
  readonly types?: string[];

  /**
   * @schema SecurityHubBatchUpdateFindingsRequest#UserDefinedFields
   */
  readonly userDefinedFields?: { [key: string]: string };

  /**
   * @schema SecurityHubBatchUpdateFindingsRequest#Workflow
   */
  readonly workflow?: SecurityHubWorkflowUpdate;

  /**
   * @schema SecurityHubBatchUpdateFindingsRequest#RelatedFindings
   */
  readonly relatedFindings?: SecurityHubRelatedFinding[];

}

/**
 * Converts an object of type 'SecurityHubBatchUpdateFindingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubBatchUpdateFindingsRequest(obj: SecurityHubBatchUpdateFindingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FindingIdentifiers': obj.findingIdentifiers?.map(y => toJson_SecurityHubAwsSecurityFindingIdentifier(y)),
    'Note': toJson_SecurityHubNoteUpdate(obj.note),
    'Severity': toJson_SecurityHubSeverityUpdate(obj.severity),
    'VerificationState': obj.verificationState,
    'Confidence': obj.confidence,
    'Criticality': obj.criticality,
    'Types': obj.types?.map(y => y),
    'UserDefinedFields': ((obj.userDefinedFields) === undefined) ? undefined : (Object.entries(obj.userDefinedFields).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Workflow': toJson_SecurityHubWorkflowUpdate(obj.workflow),
    'RelatedFindings': obj.relatedFindings?.map(y => toJson_SecurityHubRelatedFinding(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubBatchUpdateFindingsResponse
 */
export interface SecurityHubBatchUpdateFindingsResponse {
  /**
   * @schema SecurityHubBatchUpdateFindingsResponse#ProcessedFindings
   */
  readonly processedFindings?: SecurityHubAwsSecurityFindingIdentifier[];

  /**
   * @schema SecurityHubBatchUpdateFindingsResponse#UnprocessedFindings
   */
  readonly unprocessedFindings?: SecurityHubBatchUpdateFindingsUnprocessedFinding[];

}

/**
 * Converts an object of type 'SecurityHubBatchUpdateFindingsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubBatchUpdateFindingsResponse(obj: SecurityHubBatchUpdateFindingsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProcessedFindings': obj.processedFindings?.map(y => toJson_SecurityHubAwsSecurityFindingIdentifier(y)),
    'UnprocessedFindings': obj.unprocessedFindings?.map(y => toJson_SecurityHubBatchUpdateFindingsUnprocessedFinding(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubCreateActionTargetRequest
 */
export interface SecurityHubCreateActionTargetRequest {
  /**
   * @schema SecurityHubCreateActionTargetRequest#Name
   */
  readonly name?: string;

  /**
   * @schema SecurityHubCreateActionTargetRequest#Description
   */
  readonly description?: string;

  /**
   * @schema SecurityHubCreateActionTargetRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'SecurityHubCreateActionTargetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubCreateActionTargetRequest(obj: SecurityHubCreateActionTargetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Description': obj.description,
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubCreateActionTargetResponse
 */
export interface SecurityHubCreateActionTargetResponse {
  /**
   * @schema SecurityHubCreateActionTargetResponse#ActionTargetArn
   */
  readonly actionTargetArn?: string;

}

/**
 * Converts an object of type 'SecurityHubCreateActionTargetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubCreateActionTargetResponse(obj: SecurityHubCreateActionTargetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ActionTargetArn': obj.actionTargetArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubCreateInsightRequest
 */
export interface SecurityHubCreateInsightRequest {
  /**
   * @schema SecurityHubCreateInsightRequest#Name
   */
  readonly name?: string;

  /**
   * @schema SecurityHubCreateInsightRequest#Filters
   */
  readonly filters?: SecurityHubAwsSecurityFindingFilters;

  /**
   * @schema SecurityHubCreateInsightRequest#GroupByAttribute
   */
  readonly groupByAttribute?: string;

}

/**
 * Converts an object of type 'SecurityHubCreateInsightRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubCreateInsightRequest(obj: SecurityHubCreateInsightRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Filters': toJson_SecurityHubAwsSecurityFindingFilters(obj.filters),
    'GroupByAttribute': obj.groupByAttribute,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubCreateInsightResponse
 */
export interface SecurityHubCreateInsightResponse {
  /**
   * @schema SecurityHubCreateInsightResponse#InsightArn
   */
  readonly insightArn?: string;

}

/**
 * Converts an object of type 'SecurityHubCreateInsightResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubCreateInsightResponse(obj: SecurityHubCreateInsightResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InsightArn': obj.insightArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubCreateMembersRequest
 */
export interface SecurityHubCreateMembersRequest {
  /**
   * @schema SecurityHubCreateMembersRequest#AccountDetails
   */
  readonly accountDetails?: SecurityHubAccountDetails[];

}

/**
 * Converts an object of type 'SecurityHubCreateMembersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubCreateMembersRequest(obj: SecurityHubCreateMembersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountDetails': obj.accountDetails?.map(y => toJson_SecurityHubAccountDetails(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubCreateMembersResponse
 */
export interface SecurityHubCreateMembersResponse {
  /**
   * @schema SecurityHubCreateMembersResponse#UnprocessedAccounts
   */
  readonly unprocessedAccounts?: SecurityHubResult[];

}

/**
 * Converts an object of type 'SecurityHubCreateMembersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubCreateMembersResponse(obj: SecurityHubCreateMembersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UnprocessedAccounts': obj.unprocessedAccounts?.map(y => toJson_SecurityHubResult(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubDeclineInvitationsRequest
 */
export interface SecurityHubDeclineInvitationsRequest {
  /**
   * @schema SecurityHubDeclineInvitationsRequest#AccountIds
   */
  readonly accountIds?: string[];

}

/**
 * Converts an object of type 'SecurityHubDeclineInvitationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubDeclineInvitationsRequest(obj: SecurityHubDeclineInvitationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountIds': obj.accountIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubDeclineInvitationsResponse
 */
export interface SecurityHubDeclineInvitationsResponse {
  /**
   * @schema SecurityHubDeclineInvitationsResponse#UnprocessedAccounts
   */
  readonly unprocessedAccounts?: SecurityHubResult[];

}

/**
 * Converts an object of type 'SecurityHubDeclineInvitationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubDeclineInvitationsResponse(obj: SecurityHubDeclineInvitationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UnprocessedAccounts': obj.unprocessedAccounts?.map(y => toJson_SecurityHubResult(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubDeleteActionTargetRequest
 */
export interface SecurityHubDeleteActionTargetRequest {
  /**
   * @schema SecurityHubDeleteActionTargetRequest#ActionTargetArn
   */
  readonly actionTargetArn?: string;

}

/**
 * Converts an object of type 'SecurityHubDeleteActionTargetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubDeleteActionTargetRequest(obj: SecurityHubDeleteActionTargetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ActionTargetArn': obj.actionTargetArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubDeleteActionTargetResponse
 */
export interface SecurityHubDeleteActionTargetResponse {
  /**
   * @schema SecurityHubDeleteActionTargetResponse#ActionTargetArn
   */
  readonly actionTargetArn?: string;

}

/**
 * Converts an object of type 'SecurityHubDeleteActionTargetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubDeleteActionTargetResponse(obj: SecurityHubDeleteActionTargetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ActionTargetArn': obj.actionTargetArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubDeleteInsightRequest
 */
export interface SecurityHubDeleteInsightRequest {
  /**
   * @schema SecurityHubDeleteInsightRequest#InsightArn
   */
  readonly insightArn?: string;

}

/**
 * Converts an object of type 'SecurityHubDeleteInsightRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubDeleteInsightRequest(obj: SecurityHubDeleteInsightRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InsightArn': obj.insightArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubDeleteInsightResponse
 */
export interface SecurityHubDeleteInsightResponse {
  /**
   * @schema SecurityHubDeleteInsightResponse#InsightArn
   */
  readonly insightArn?: string;

}

/**
 * Converts an object of type 'SecurityHubDeleteInsightResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubDeleteInsightResponse(obj: SecurityHubDeleteInsightResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InsightArn': obj.insightArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubDeleteInvitationsRequest
 */
export interface SecurityHubDeleteInvitationsRequest {
  /**
   * @schema SecurityHubDeleteInvitationsRequest#AccountIds
   */
  readonly accountIds?: string[];

}

/**
 * Converts an object of type 'SecurityHubDeleteInvitationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubDeleteInvitationsRequest(obj: SecurityHubDeleteInvitationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountIds': obj.accountIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubDeleteInvitationsResponse
 */
export interface SecurityHubDeleteInvitationsResponse {
  /**
   * @schema SecurityHubDeleteInvitationsResponse#UnprocessedAccounts
   */
  readonly unprocessedAccounts?: SecurityHubResult[];

}

/**
 * Converts an object of type 'SecurityHubDeleteInvitationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubDeleteInvitationsResponse(obj: SecurityHubDeleteInvitationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UnprocessedAccounts': obj.unprocessedAccounts?.map(y => toJson_SecurityHubResult(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubDeleteMembersRequest
 */
export interface SecurityHubDeleteMembersRequest {
  /**
   * @schema SecurityHubDeleteMembersRequest#AccountIds
   */
  readonly accountIds?: string[];

}

/**
 * Converts an object of type 'SecurityHubDeleteMembersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubDeleteMembersRequest(obj: SecurityHubDeleteMembersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountIds': obj.accountIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubDeleteMembersResponse
 */
export interface SecurityHubDeleteMembersResponse {
  /**
   * @schema SecurityHubDeleteMembersResponse#UnprocessedAccounts
   */
  readonly unprocessedAccounts?: SecurityHubResult[];

}

/**
 * Converts an object of type 'SecurityHubDeleteMembersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubDeleteMembersResponse(obj: SecurityHubDeleteMembersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UnprocessedAccounts': obj.unprocessedAccounts?.map(y => toJson_SecurityHubResult(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubDescribeActionTargetsRequest
 */
export interface SecurityHubDescribeActionTargetsRequest {
  /**
   * @schema SecurityHubDescribeActionTargetsRequest#ActionTargetArns
   */
  readonly actionTargetArns?: string[];

  /**
   * @schema SecurityHubDescribeActionTargetsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SecurityHubDescribeActionTargetsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'SecurityHubDescribeActionTargetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubDescribeActionTargetsRequest(obj: SecurityHubDescribeActionTargetsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ActionTargetArns': obj.actionTargetArns?.map(y => y),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubDescribeActionTargetsResponse
 */
export interface SecurityHubDescribeActionTargetsResponse {
  /**
   * @schema SecurityHubDescribeActionTargetsResponse#ActionTargets
   */
  readonly actionTargets?: SecurityHubActionTarget[];

  /**
   * @schema SecurityHubDescribeActionTargetsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SecurityHubDescribeActionTargetsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubDescribeActionTargetsResponse(obj: SecurityHubDescribeActionTargetsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ActionTargets': obj.actionTargets?.map(y => toJson_SecurityHubActionTarget(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubDescribeHubRequest
 */
export interface SecurityHubDescribeHubRequest {
  /**
   * @schema SecurityHubDescribeHubRequest#HubArn
   */
  readonly hubArn?: string;

}

/**
 * Converts an object of type 'SecurityHubDescribeHubRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubDescribeHubRequest(obj: SecurityHubDescribeHubRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HubArn': obj.hubArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubDescribeHubResponse
 */
export interface SecurityHubDescribeHubResponse {
  /**
   * @schema SecurityHubDescribeHubResponse#HubArn
   */
  readonly hubArn?: string;

  /**
   * @schema SecurityHubDescribeHubResponse#SubscribedAt
   */
  readonly subscribedAt?: string;

  /**
   * @schema SecurityHubDescribeHubResponse#AutoEnableControls
   */
  readonly autoEnableControls?: boolean;

}

/**
 * Converts an object of type 'SecurityHubDescribeHubResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubDescribeHubResponse(obj: SecurityHubDescribeHubResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HubArn': obj.hubArn,
    'SubscribedAt': obj.subscribedAt,
    'AutoEnableControls': obj.autoEnableControls,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubDescribeOrganizationConfigurationRequest
 */
export interface SecurityHubDescribeOrganizationConfigurationRequest {
}

/**
 * Converts an object of type 'SecurityHubDescribeOrganizationConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubDescribeOrganizationConfigurationRequest(obj: SecurityHubDescribeOrganizationConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubDescribeOrganizationConfigurationResponse
 */
export interface SecurityHubDescribeOrganizationConfigurationResponse {
  /**
   * @schema SecurityHubDescribeOrganizationConfigurationResponse#AutoEnable
   */
  readonly autoEnable?: boolean;

  /**
   * @schema SecurityHubDescribeOrganizationConfigurationResponse#MemberAccountLimitReached
   */
  readonly memberAccountLimitReached?: boolean;

}

/**
 * Converts an object of type 'SecurityHubDescribeOrganizationConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubDescribeOrganizationConfigurationResponse(obj: SecurityHubDescribeOrganizationConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoEnable': obj.autoEnable,
    'MemberAccountLimitReached': obj.memberAccountLimitReached,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubDescribeProductsRequest
 */
export interface SecurityHubDescribeProductsRequest {
  /**
   * @schema SecurityHubDescribeProductsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SecurityHubDescribeProductsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SecurityHubDescribeProductsRequest#ProductArn
   */
  readonly productArn?: string;

}

/**
 * Converts an object of type 'SecurityHubDescribeProductsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubDescribeProductsRequest(obj: SecurityHubDescribeProductsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'ProductArn': obj.productArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubDescribeProductsResponse
 */
export interface SecurityHubDescribeProductsResponse {
  /**
   * @schema SecurityHubDescribeProductsResponse#Products
   */
  readonly products?: SecurityHubProduct[];

  /**
   * @schema SecurityHubDescribeProductsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SecurityHubDescribeProductsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubDescribeProductsResponse(obj: SecurityHubDescribeProductsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Products': obj.products?.map(y => toJson_SecurityHubProduct(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubDescribeStandardsRequest
 */
export interface SecurityHubDescribeStandardsRequest {
  /**
   * @schema SecurityHubDescribeStandardsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SecurityHubDescribeStandardsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'SecurityHubDescribeStandardsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubDescribeStandardsRequest(obj: SecurityHubDescribeStandardsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubDescribeStandardsResponse
 */
export interface SecurityHubDescribeStandardsResponse {
  /**
   * @schema SecurityHubDescribeStandardsResponse#Standards
   */
  readonly standards?: SecurityHubStandard[];

  /**
   * @schema SecurityHubDescribeStandardsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SecurityHubDescribeStandardsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubDescribeStandardsResponse(obj: SecurityHubDescribeStandardsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Standards': obj.standards?.map(y => toJson_SecurityHubStandard(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubDescribeStandardsControlsRequest
 */
export interface SecurityHubDescribeStandardsControlsRequest {
  /**
   * @schema SecurityHubDescribeStandardsControlsRequest#StandardsSubscriptionArn
   */
  readonly standardsSubscriptionArn?: string;

  /**
   * @schema SecurityHubDescribeStandardsControlsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SecurityHubDescribeStandardsControlsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'SecurityHubDescribeStandardsControlsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubDescribeStandardsControlsRequest(obj: SecurityHubDescribeStandardsControlsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StandardsSubscriptionArn': obj.standardsSubscriptionArn,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubDescribeStandardsControlsResponse
 */
export interface SecurityHubDescribeStandardsControlsResponse {
  /**
   * @schema SecurityHubDescribeStandardsControlsResponse#Controls
   */
  readonly controls?: SecurityHubStandardsControl[];

  /**
   * @schema SecurityHubDescribeStandardsControlsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SecurityHubDescribeStandardsControlsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubDescribeStandardsControlsResponse(obj: SecurityHubDescribeStandardsControlsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Controls': obj.controls?.map(y => toJson_SecurityHubStandardsControl(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubDisableImportFindingsForProductRequest
 */
export interface SecurityHubDisableImportFindingsForProductRequest {
  /**
   * @schema SecurityHubDisableImportFindingsForProductRequest#ProductSubscriptionArn
   */
  readonly productSubscriptionArn?: string;

}

/**
 * Converts an object of type 'SecurityHubDisableImportFindingsForProductRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubDisableImportFindingsForProductRequest(obj: SecurityHubDisableImportFindingsForProductRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProductSubscriptionArn': obj.productSubscriptionArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubDisableImportFindingsForProductResponse
 */
export interface SecurityHubDisableImportFindingsForProductResponse {
}

/**
 * Converts an object of type 'SecurityHubDisableImportFindingsForProductResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubDisableImportFindingsForProductResponse(obj: SecurityHubDisableImportFindingsForProductResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubDisableOrganizationAdminAccountRequest
 */
export interface SecurityHubDisableOrganizationAdminAccountRequest {
  /**
   * @schema SecurityHubDisableOrganizationAdminAccountRequest#AdminAccountId
   */
  readonly adminAccountId?: string;

}

/**
 * Converts an object of type 'SecurityHubDisableOrganizationAdminAccountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubDisableOrganizationAdminAccountRequest(obj: SecurityHubDisableOrganizationAdminAccountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AdminAccountId': obj.adminAccountId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubDisableOrganizationAdminAccountResponse
 */
export interface SecurityHubDisableOrganizationAdminAccountResponse {
}

/**
 * Converts an object of type 'SecurityHubDisableOrganizationAdminAccountResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubDisableOrganizationAdminAccountResponse(obj: SecurityHubDisableOrganizationAdminAccountResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubDisableSecurityHubRequest
 */
export interface SecurityHubDisableSecurityHubRequest {
}

/**
 * Converts an object of type 'SecurityHubDisableSecurityHubRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubDisableSecurityHubRequest(obj: SecurityHubDisableSecurityHubRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubDisableSecurityHubResponse
 */
export interface SecurityHubDisableSecurityHubResponse {
}

/**
 * Converts an object of type 'SecurityHubDisableSecurityHubResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubDisableSecurityHubResponse(obj: SecurityHubDisableSecurityHubResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubDisassociateFromAdministratorAccountRequest
 */
export interface SecurityHubDisassociateFromAdministratorAccountRequest {
}

/**
 * Converts an object of type 'SecurityHubDisassociateFromAdministratorAccountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubDisassociateFromAdministratorAccountRequest(obj: SecurityHubDisassociateFromAdministratorAccountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubDisassociateFromAdministratorAccountResponse
 */
export interface SecurityHubDisassociateFromAdministratorAccountResponse {
}

/**
 * Converts an object of type 'SecurityHubDisassociateFromAdministratorAccountResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubDisassociateFromAdministratorAccountResponse(obj: SecurityHubDisassociateFromAdministratorAccountResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubDisassociateFromMasterAccountRequest
 */
export interface SecurityHubDisassociateFromMasterAccountRequest {
}

/**
 * Converts an object of type 'SecurityHubDisassociateFromMasterAccountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubDisassociateFromMasterAccountRequest(obj: SecurityHubDisassociateFromMasterAccountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubDisassociateFromMasterAccountResponse
 */
export interface SecurityHubDisassociateFromMasterAccountResponse {
}

/**
 * Converts an object of type 'SecurityHubDisassociateFromMasterAccountResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubDisassociateFromMasterAccountResponse(obj: SecurityHubDisassociateFromMasterAccountResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubDisassociateMembersRequest
 */
export interface SecurityHubDisassociateMembersRequest {
  /**
   * @schema SecurityHubDisassociateMembersRequest#AccountIds
   */
  readonly accountIds?: string[];

}

/**
 * Converts an object of type 'SecurityHubDisassociateMembersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubDisassociateMembersRequest(obj: SecurityHubDisassociateMembersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountIds': obj.accountIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubDisassociateMembersResponse
 */
export interface SecurityHubDisassociateMembersResponse {
}

/**
 * Converts an object of type 'SecurityHubDisassociateMembersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubDisassociateMembersResponse(obj: SecurityHubDisassociateMembersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubEnableImportFindingsForProductRequest
 */
export interface SecurityHubEnableImportFindingsForProductRequest {
  /**
   * @schema SecurityHubEnableImportFindingsForProductRequest#ProductArn
   */
  readonly productArn?: string;

}

/**
 * Converts an object of type 'SecurityHubEnableImportFindingsForProductRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubEnableImportFindingsForProductRequest(obj: SecurityHubEnableImportFindingsForProductRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProductArn': obj.productArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubEnableImportFindingsForProductResponse
 */
export interface SecurityHubEnableImportFindingsForProductResponse {
  /**
   * @schema SecurityHubEnableImportFindingsForProductResponse#ProductSubscriptionArn
   */
  readonly productSubscriptionArn?: string;

}

/**
 * Converts an object of type 'SecurityHubEnableImportFindingsForProductResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubEnableImportFindingsForProductResponse(obj: SecurityHubEnableImportFindingsForProductResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProductSubscriptionArn': obj.productSubscriptionArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubEnableOrganizationAdminAccountRequest
 */
export interface SecurityHubEnableOrganizationAdminAccountRequest {
  /**
   * @schema SecurityHubEnableOrganizationAdminAccountRequest#AdminAccountId
   */
  readonly adminAccountId?: string;

}

/**
 * Converts an object of type 'SecurityHubEnableOrganizationAdminAccountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubEnableOrganizationAdminAccountRequest(obj: SecurityHubEnableOrganizationAdminAccountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AdminAccountId': obj.adminAccountId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubEnableOrganizationAdminAccountResponse
 */
export interface SecurityHubEnableOrganizationAdminAccountResponse {
}

/**
 * Converts an object of type 'SecurityHubEnableOrganizationAdminAccountResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubEnableOrganizationAdminAccountResponse(obj: SecurityHubEnableOrganizationAdminAccountResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubEnableSecurityHubRequest
 */
export interface SecurityHubEnableSecurityHubRequest {
  /**
   * @schema SecurityHubEnableSecurityHubRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema SecurityHubEnableSecurityHubRequest#EnableDefaultStandards
   */
  readonly enableDefaultStandards?: boolean;

}

/**
 * Converts an object of type 'SecurityHubEnableSecurityHubRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubEnableSecurityHubRequest(obj: SecurityHubEnableSecurityHubRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'EnableDefaultStandards': obj.enableDefaultStandards,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubEnableSecurityHubResponse
 */
export interface SecurityHubEnableSecurityHubResponse {
}

/**
 * Converts an object of type 'SecurityHubEnableSecurityHubResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubEnableSecurityHubResponse(obj: SecurityHubEnableSecurityHubResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubGetAdministratorAccountRequest
 */
export interface SecurityHubGetAdministratorAccountRequest {
}

/**
 * Converts an object of type 'SecurityHubGetAdministratorAccountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubGetAdministratorAccountRequest(obj: SecurityHubGetAdministratorAccountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubGetAdministratorAccountResponse
 */
export interface SecurityHubGetAdministratorAccountResponse {
  /**
   * @schema SecurityHubGetAdministratorAccountResponse#Administrator
   */
  readonly administrator?: SecurityHubInvitation;

}

/**
 * Converts an object of type 'SecurityHubGetAdministratorAccountResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubGetAdministratorAccountResponse(obj: SecurityHubGetAdministratorAccountResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Administrator': toJson_SecurityHubInvitation(obj.administrator),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubGetEnabledStandardsRequest
 */
export interface SecurityHubGetEnabledStandardsRequest {
  /**
   * @schema SecurityHubGetEnabledStandardsRequest#StandardsSubscriptionArns
   */
  readonly standardsSubscriptionArns?: string[];

  /**
   * @schema SecurityHubGetEnabledStandardsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SecurityHubGetEnabledStandardsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'SecurityHubGetEnabledStandardsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubGetEnabledStandardsRequest(obj: SecurityHubGetEnabledStandardsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StandardsSubscriptionArns': obj.standardsSubscriptionArns?.map(y => y),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubGetEnabledStandardsResponse
 */
export interface SecurityHubGetEnabledStandardsResponse {
  /**
   * @schema SecurityHubGetEnabledStandardsResponse#StandardsSubscriptions
   */
  readonly standardsSubscriptions?: SecurityHubStandardsSubscription[];

  /**
   * @schema SecurityHubGetEnabledStandardsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SecurityHubGetEnabledStandardsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubGetEnabledStandardsResponse(obj: SecurityHubGetEnabledStandardsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StandardsSubscriptions': obj.standardsSubscriptions?.map(y => toJson_SecurityHubStandardsSubscription(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubGetFindingsRequest
 */
export interface SecurityHubGetFindingsRequest {
  /**
   * @schema SecurityHubGetFindingsRequest#Filters
   */
  readonly filters?: SecurityHubAwsSecurityFindingFilters;

  /**
   * @schema SecurityHubGetFindingsRequest#SortCriteria
   */
  readonly sortCriteria?: SecurityHubSortCriterion[];

  /**
   * @schema SecurityHubGetFindingsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SecurityHubGetFindingsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'SecurityHubGetFindingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubGetFindingsRequest(obj: SecurityHubGetFindingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Filters': toJson_SecurityHubAwsSecurityFindingFilters(obj.filters),
    'SortCriteria': obj.sortCriteria?.map(y => toJson_SecurityHubSortCriterion(y)),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubGetFindingsResponse
 */
export interface SecurityHubGetFindingsResponse {
  /**
   * @schema SecurityHubGetFindingsResponse#Findings
   */
  readonly findings?: SecurityHubAwsSecurityFinding[];

  /**
   * @schema SecurityHubGetFindingsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SecurityHubGetFindingsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubGetFindingsResponse(obj: SecurityHubGetFindingsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Findings': obj.findings?.map(y => toJson_SecurityHubAwsSecurityFinding(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubGetInsightResultsRequest
 */
export interface SecurityHubGetInsightResultsRequest {
  /**
   * @schema SecurityHubGetInsightResultsRequest#InsightArn
   */
  readonly insightArn?: string;

}

/**
 * Converts an object of type 'SecurityHubGetInsightResultsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubGetInsightResultsRequest(obj: SecurityHubGetInsightResultsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InsightArn': obj.insightArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubGetInsightResultsResponse
 */
export interface SecurityHubGetInsightResultsResponse {
  /**
   * @schema SecurityHubGetInsightResultsResponse#InsightResults
   */
  readonly insightResults?: SecurityHubInsightResults;

}

/**
 * Converts an object of type 'SecurityHubGetInsightResultsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubGetInsightResultsResponse(obj: SecurityHubGetInsightResultsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InsightResults': toJson_SecurityHubInsightResults(obj.insightResults),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubGetInsightsRequest
 */
export interface SecurityHubGetInsightsRequest {
  /**
   * @schema SecurityHubGetInsightsRequest#InsightArns
   */
  readonly insightArns?: string[];

  /**
   * @schema SecurityHubGetInsightsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SecurityHubGetInsightsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'SecurityHubGetInsightsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubGetInsightsRequest(obj: SecurityHubGetInsightsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InsightArns': obj.insightArns?.map(y => y),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubGetInsightsResponse
 */
export interface SecurityHubGetInsightsResponse {
  /**
   * @schema SecurityHubGetInsightsResponse#Insights
   */
  readonly insights?: SecurityHubInsight[];

  /**
   * @schema SecurityHubGetInsightsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SecurityHubGetInsightsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubGetInsightsResponse(obj: SecurityHubGetInsightsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Insights': obj.insights?.map(y => toJson_SecurityHubInsight(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubGetInvitationsCountRequest
 */
export interface SecurityHubGetInvitationsCountRequest {
}

/**
 * Converts an object of type 'SecurityHubGetInvitationsCountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubGetInvitationsCountRequest(obj: SecurityHubGetInvitationsCountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubGetInvitationsCountResponse
 */
export interface SecurityHubGetInvitationsCountResponse {
  /**
   * @schema SecurityHubGetInvitationsCountResponse#InvitationsCount
   */
  readonly invitationsCount?: number;

}

/**
 * Converts an object of type 'SecurityHubGetInvitationsCountResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubGetInvitationsCountResponse(obj: SecurityHubGetInvitationsCountResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InvitationsCount': obj.invitationsCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubGetMasterAccountRequest
 */
export interface SecurityHubGetMasterAccountRequest {
}

/**
 * Converts an object of type 'SecurityHubGetMasterAccountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubGetMasterAccountRequest(obj: SecurityHubGetMasterAccountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubGetMasterAccountResponse
 */
export interface SecurityHubGetMasterAccountResponse {
  /**
   * @schema SecurityHubGetMasterAccountResponse#Master
   */
  readonly master?: SecurityHubInvitation;

}

/**
 * Converts an object of type 'SecurityHubGetMasterAccountResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubGetMasterAccountResponse(obj: SecurityHubGetMasterAccountResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Master': toJson_SecurityHubInvitation(obj.master),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubGetMembersRequest
 */
export interface SecurityHubGetMembersRequest {
  /**
   * @schema SecurityHubGetMembersRequest#AccountIds
   */
  readonly accountIds?: string[];

}

/**
 * Converts an object of type 'SecurityHubGetMembersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubGetMembersRequest(obj: SecurityHubGetMembersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountIds': obj.accountIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubGetMembersResponse
 */
export interface SecurityHubGetMembersResponse {
  /**
   * @schema SecurityHubGetMembersResponse#Members
   */
  readonly members?: SecurityHubMember[];

  /**
   * @schema SecurityHubGetMembersResponse#UnprocessedAccounts
   */
  readonly unprocessedAccounts?: SecurityHubResult[];

}

/**
 * Converts an object of type 'SecurityHubGetMembersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubGetMembersResponse(obj: SecurityHubGetMembersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Members': obj.members?.map(y => toJson_SecurityHubMember(y)),
    'UnprocessedAccounts': obj.unprocessedAccounts?.map(y => toJson_SecurityHubResult(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubInviteMembersRequest
 */
export interface SecurityHubInviteMembersRequest {
  /**
   * @schema SecurityHubInviteMembersRequest#AccountIds
   */
  readonly accountIds?: string[];

}

/**
 * Converts an object of type 'SecurityHubInviteMembersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubInviteMembersRequest(obj: SecurityHubInviteMembersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountIds': obj.accountIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubInviteMembersResponse
 */
export interface SecurityHubInviteMembersResponse {
  /**
   * @schema SecurityHubInviteMembersResponse#UnprocessedAccounts
   */
  readonly unprocessedAccounts?: SecurityHubResult[];

}

/**
 * Converts an object of type 'SecurityHubInviteMembersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubInviteMembersResponse(obj: SecurityHubInviteMembersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UnprocessedAccounts': obj.unprocessedAccounts?.map(y => toJson_SecurityHubResult(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubListEnabledProductsForImportRequest
 */
export interface SecurityHubListEnabledProductsForImportRequest {
  /**
   * @schema SecurityHubListEnabledProductsForImportRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SecurityHubListEnabledProductsForImportRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'SecurityHubListEnabledProductsForImportRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubListEnabledProductsForImportRequest(obj: SecurityHubListEnabledProductsForImportRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubListEnabledProductsForImportResponse
 */
export interface SecurityHubListEnabledProductsForImportResponse {
  /**
   * @schema SecurityHubListEnabledProductsForImportResponse#ProductSubscriptions
   */
  readonly productSubscriptions?: string[];

  /**
   * @schema SecurityHubListEnabledProductsForImportResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SecurityHubListEnabledProductsForImportResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubListEnabledProductsForImportResponse(obj: SecurityHubListEnabledProductsForImportResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProductSubscriptions': obj.productSubscriptions?.map(y => y),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubListInvitationsRequest
 */
export interface SecurityHubListInvitationsRequest {
  /**
   * @schema SecurityHubListInvitationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SecurityHubListInvitationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SecurityHubListInvitationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubListInvitationsRequest(obj: SecurityHubListInvitationsRequest | undefined): Record<string, any> | undefined {
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
 * @schema SecurityHubListInvitationsResponse
 */
export interface SecurityHubListInvitationsResponse {
  /**
   * @schema SecurityHubListInvitationsResponse#Invitations
   */
  readonly invitations?: SecurityHubInvitation[];

  /**
   * @schema SecurityHubListInvitationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SecurityHubListInvitationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubListInvitationsResponse(obj: SecurityHubListInvitationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Invitations': obj.invitations?.map(y => toJson_SecurityHubInvitation(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubListMembersRequest
 */
export interface SecurityHubListMembersRequest {
  /**
   * @schema SecurityHubListMembersRequest#OnlyAssociated
   */
  readonly onlyAssociated?: boolean;

  /**
   * @schema SecurityHubListMembersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SecurityHubListMembersRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SecurityHubListMembersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubListMembersRequest(obj: SecurityHubListMembersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OnlyAssociated': obj.onlyAssociated,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubListMembersResponse
 */
export interface SecurityHubListMembersResponse {
  /**
   * @schema SecurityHubListMembersResponse#Members
   */
  readonly members?: SecurityHubMember[];

  /**
   * @schema SecurityHubListMembersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SecurityHubListMembersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubListMembersResponse(obj: SecurityHubListMembersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Members': obj.members?.map(y => toJson_SecurityHubMember(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubListOrganizationAdminAccountsRequest
 */
export interface SecurityHubListOrganizationAdminAccountsRequest {
  /**
   * @schema SecurityHubListOrganizationAdminAccountsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SecurityHubListOrganizationAdminAccountsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SecurityHubListOrganizationAdminAccountsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubListOrganizationAdminAccountsRequest(obj: SecurityHubListOrganizationAdminAccountsRequest | undefined): Record<string, any> | undefined {
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
 * @schema SecurityHubListOrganizationAdminAccountsResponse
 */
export interface SecurityHubListOrganizationAdminAccountsResponse {
  /**
   * @schema SecurityHubListOrganizationAdminAccountsResponse#AdminAccounts
   */
  readonly adminAccounts?: SecurityHubAdminAccount[];

  /**
   * @schema SecurityHubListOrganizationAdminAccountsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SecurityHubListOrganizationAdminAccountsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubListOrganizationAdminAccountsResponse(obj: SecurityHubListOrganizationAdminAccountsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AdminAccounts': obj.adminAccounts?.map(y => toJson_SecurityHubAdminAccount(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubListTagsForResourceRequest
 */
export interface SecurityHubListTagsForResourceRequest {
  /**
   * @schema SecurityHubListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'SecurityHubListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubListTagsForResourceRequest(obj: SecurityHubListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubListTagsForResourceResponse
 */
export interface SecurityHubListTagsForResourceResponse {
  /**
   * @schema SecurityHubListTagsForResourceResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'SecurityHubListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubListTagsForResourceResponse(obj: SecurityHubListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubTagResourceRequest
 */
export interface SecurityHubTagResourceRequest {
  /**
   * @schema SecurityHubTagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema SecurityHubTagResourceRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'SecurityHubTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubTagResourceRequest(obj: SecurityHubTagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema SecurityHubTagResourceResponse
 */
export interface SecurityHubTagResourceResponse {
}

/**
 * Converts an object of type 'SecurityHubTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubTagResourceResponse(obj: SecurityHubTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubUntagResourceRequest
 */
export interface SecurityHubUntagResourceRequest {
  /**
   * @schema SecurityHubUntagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema SecurityHubUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'SecurityHubUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubUntagResourceRequest(obj: SecurityHubUntagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema SecurityHubUntagResourceResponse
 */
export interface SecurityHubUntagResourceResponse {
}

/**
 * Converts an object of type 'SecurityHubUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubUntagResourceResponse(obj: SecurityHubUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubUpdateActionTargetRequest
 */
export interface SecurityHubUpdateActionTargetRequest {
  /**
   * @schema SecurityHubUpdateActionTargetRequest#ActionTargetArn
   */
  readonly actionTargetArn?: string;

  /**
   * @schema SecurityHubUpdateActionTargetRequest#Name
   */
  readonly name?: string;

  /**
   * @schema SecurityHubUpdateActionTargetRequest#Description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'SecurityHubUpdateActionTargetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubUpdateActionTargetRequest(obj: SecurityHubUpdateActionTargetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ActionTargetArn': obj.actionTargetArn,
    'Name': obj.name,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubUpdateActionTargetResponse
 */
export interface SecurityHubUpdateActionTargetResponse {
}

/**
 * Converts an object of type 'SecurityHubUpdateActionTargetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubUpdateActionTargetResponse(obj: SecurityHubUpdateActionTargetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubUpdateFindingsRequest
 */
export interface SecurityHubUpdateFindingsRequest {
  /**
   * @schema SecurityHubUpdateFindingsRequest#Filters
   */
  readonly filters?: SecurityHubAwsSecurityFindingFilters;

  /**
   * @schema SecurityHubUpdateFindingsRequest#Note
   */
  readonly note?: SecurityHubNoteUpdate;

  /**
   * @schema SecurityHubUpdateFindingsRequest#RecordState
   */
  readonly recordState?: string;

}

/**
 * Converts an object of type 'SecurityHubUpdateFindingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubUpdateFindingsRequest(obj: SecurityHubUpdateFindingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Filters': toJson_SecurityHubAwsSecurityFindingFilters(obj.filters),
    'Note': toJson_SecurityHubNoteUpdate(obj.note),
    'RecordState': obj.recordState,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubUpdateFindingsResponse
 */
export interface SecurityHubUpdateFindingsResponse {
}

/**
 * Converts an object of type 'SecurityHubUpdateFindingsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubUpdateFindingsResponse(obj: SecurityHubUpdateFindingsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubUpdateInsightRequest
 */
export interface SecurityHubUpdateInsightRequest {
  /**
   * @schema SecurityHubUpdateInsightRequest#InsightArn
   */
  readonly insightArn?: string;

  /**
   * @schema SecurityHubUpdateInsightRequest#Name
   */
  readonly name?: string;

  /**
   * @schema SecurityHubUpdateInsightRequest#Filters
   */
  readonly filters?: SecurityHubAwsSecurityFindingFilters;

  /**
   * @schema SecurityHubUpdateInsightRequest#GroupByAttribute
   */
  readonly groupByAttribute?: string;

}

/**
 * Converts an object of type 'SecurityHubUpdateInsightRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubUpdateInsightRequest(obj: SecurityHubUpdateInsightRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InsightArn': obj.insightArn,
    'Name': obj.name,
    'Filters': toJson_SecurityHubAwsSecurityFindingFilters(obj.filters),
    'GroupByAttribute': obj.groupByAttribute,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubUpdateInsightResponse
 */
export interface SecurityHubUpdateInsightResponse {
}

/**
 * Converts an object of type 'SecurityHubUpdateInsightResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubUpdateInsightResponse(obj: SecurityHubUpdateInsightResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubUpdateOrganizationConfigurationRequest
 */
export interface SecurityHubUpdateOrganizationConfigurationRequest {
  /**
   * @schema SecurityHubUpdateOrganizationConfigurationRequest#AutoEnable
   */
  readonly autoEnable?: boolean;

}

/**
 * Converts an object of type 'SecurityHubUpdateOrganizationConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubUpdateOrganizationConfigurationRequest(obj: SecurityHubUpdateOrganizationConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoEnable': obj.autoEnable,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubUpdateOrganizationConfigurationResponse
 */
export interface SecurityHubUpdateOrganizationConfigurationResponse {
}

/**
 * Converts an object of type 'SecurityHubUpdateOrganizationConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubUpdateOrganizationConfigurationResponse(obj: SecurityHubUpdateOrganizationConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubUpdateSecurityHubConfigurationRequest
 */
export interface SecurityHubUpdateSecurityHubConfigurationRequest {
  /**
   * @schema SecurityHubUpdateSecurityHubConfigurationRequest#AutoEnableControls
   */
  readonly autoEnableControls?: boolean;

}

/**
 * Converts an object of type 'SecurityHubUpdateSecurityHubConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubUpdateSecurityHubConfigurationRequest(obj: SecurityHubUpdateSecurityHubConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoEnableControls': obj.autoEnableControls,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubUpdateSecurityHubConfigurationResponse
 */
export interface SecurityHubUpdateSecurityHubConfigurationResponse {
}

/**
 * Converts an object of type 'SecurityHubUpdateSecurityHubConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubUpdateSecurityHubConfigurationResponse(obj: SecurityHubUpdateSecurityHubConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubUpdateStandardsControlRequest
 */
export interface SecurityHubUpdateStandardsControlRequest {
  /**
   * @schema SecurityHubUpdateStandardsControlRequest#StandardsControlArn
   */
  readonly standardsControlArn?: string;

  /**
   * @schema SecurityHubUpdateStandardsControlRequest#ControlStatus
   */
  readonly controlStatus?: string;

  /**
   * @schema SecurityHubUpdateStandardsControlRequest#DisabledReason
   */
  readonly disabledReason?: string;

}

/**
 * Converts an object of type 'SecurityHubUpdateStandardsControlRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubUpdateStandardsControlRequest(obj: SecurityHubUpdateStandardsControlRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StandardsControlArn': obj.standardsControlArn,
    'ControlStatus': obj.controlStatus,
    'DisabledReason': obj.disabledReason,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubUpdateStandardsControlResponse
 */
export interface SecurityHubUpdateStandardsControlResponse {
}

/**
 * Converts an object of type 'SecurityHubUpdateStandardsControlResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubUpdateStandardsControlResponse(obj: SecurityHubUpdateStandardsControlResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubStandardsSubscription
 */
export interface SecurityHubStandardsSubscription {
  /**
   * @schema SecurityHubStandardsSubscription#StandardsSubscriptionArn
   */
  readonly standardsSubscriptionArn?: string;

  /**
   * @schema SecurityHubStandardsSubscription#StandardsArn
   */
  readonly standardsArn?: string;

  /**
   * @schema SecurityHubStandardsSubscription#StandardsInput
   */
  readonly standardsInput?: { [key: string]: string };

  /**
   * @schema SecurityHubStandardsSubscription#StandardsStatus
   */
  readonly standardsStatus?: string;

}

/**
 * Converts an object of type 'SecurityHubStandardsSubscription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubStandardsSubscription(obj: SecurityHubStandardsSubscription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StandardsSubscriptionArn': obj.standardsSubscriptionArn,
    'StandardsArn': obj.standardsArn,
    'StandardsInput': ((obj.standardsInput) === undefined) ? undefined : (Object.entries(obj.standardsInput).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'StandardsStatus': obj.standardsStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubStandardsSubscriptionRequest
 */
export interface SecurityHubStandardsSubscriptionRequest {
  /**
   * @schema SecurityHubStandardsSubscriptionRequest#StandardsArn
   */
  readonly standardsArn?: string;

  /**
   * @schema SecurityHubStandardsSubscriptionRequest#StandardsInput
   */
  readonly standardsInput?: { [key: string]: string };

}

/**
 * Converts an object of type 'SecurityHubStandardsSubscriptionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubStandardsSubscriptionRequest(obj: SecurityHubStandardsSubscriptionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StandardsArn': obj.standardsArn,
    'StandardsInput': ((obj.standardsInput) === undefined) ? undefined : (Object.entries(obj.standardsInput).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsSecurityFinding
 */
export interface SecurityHubAwsSecurityFinding {
  /**
   * @schema SecurityHubAwsSecurityFinding#SchemaVersion
   */
  readonly schemaVersion?: string;

  /**
   * @schema SecurityHubAwsSecurityFinding#Id
   */
  readonly id?: string;

  /**
   * @schema SecurityHubAwsSecurityFinding#ProductArn
   */
  readonly productArn?: string;

  /**
   * @schema SecurityHubAwsSecurityFinding#ProductName
   */
  readonly productName?: string;

  /**
   * @schema SecurityHubAwsSecurityFinding#CompanyName
   */
  readonly companyName?: string;

  /**
   * @schema SecurityHubAwsSecurityFinding#Region
   */
  readonly region?: string;

  /**
   * @schema SecurityHubAwsSecurityFinding#GeneratorId
   */
  readonly generatorId?: string;

  /**
   * @schema SecurityHubAwsSecurityFinding#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema SecurityHubAwsSecurityFinding#Types
   */
  readonly types?: string[];

  /**
   * @schema SecurityHubAwsSecurityFinding#FirstObservedAt
   */
  readonly firstObservedAt?: string;

  /**
   * @schema SecurityHubAwsSecurityFinding#LastObservedAt
   */
  readonly lastObservedAt?: string;

  /**
   * @schema SecurityHubAwsSecurityFinding#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema SecurityHubAwsSecurityFinding#UpdatedAt
   */
  readonly updatedAt?: string;

  /**
   * @schema SecurityHubAwsSecurityFinding#Severity
   */
  readonly severity?: SecurityHubSeverity;

  /**
   * @schema SecurityHubAwsSecurityFinding#Confidence
   */
  readonly confidence?: number;

  /**
   * @schema SecurityHubAwsSecurityFinding#Criticality
   */
  readonly criticality?: number;

  /**
   * @schema SecurityHubAwsSecurityFinding#Title
   */
  readonly title?: string;

  /**
   * @schema SecurityHubAwsSecurityFinding#Description
   */
  readonly description?: string;

  /**
   * @schema SecurityHubAwsSecurityFinding#Remediation
   */
  readonly remediation?: SecurityHubRemediation;

  /**
   * @schema SecurityHubAwsSecurityFinding#SourceUrl
   */
  readonly sourceUrl?: string;

  /**
   * @schema SecurityHubAwsSecurityFinding#ProductFields
   */
  readonly productFields?: { [key: string]: string };

  /**
   * @schema SecurityHubAwsSecurityFinding#UserDefinedFields
   */
  readonly userDefinedFields?: { [key: string]: string };

  /**
   * @schema SecurityHubAwsSecurityFinding#Malware
   */
  readonly malware?: SecurityHubMalware[];

  /**
   * @schema SecurityHubAwsSecurityFinding#Network
   */
  readonly network?: SecurityHubNetwork;

  /**
   * @schema SecurityHubAwsSecurityFinding#NetworkPath
   */
  readonly networkPath?: SecurityHubNetworkPathComponent[];

  /**
   * @schema SecurityHubAwsSecurityFinding#Process
   */
  readonly process?: SecurityHubProcessDetails;

  /**
   * @schema SecurityHubAwsSecurityFinding#ThreatIntelIndicators
   */
  readonly threatIntelIndicators?: SecurityHubThreatIntelIndicator[];

  /**
   * @schema SecurityHubAwsSecurityFinding#Resources
   */
  readonly resources?: SecurityHubResource[];

  /**
   * @schema SecurityHubAwsSecurityFinding#Compliance
   */
  readonly compliance?: SecurityHubCompliance;

  /**
   * @schema SecurityHubAwsSecurityFinding#VerificationState
   */
  readonly verificationState?: string;

  /**
   * @schema SecurityHubAwsSecurityFinding#WorkflowState
   */
  readonly workflowState?: string;

  /**
   * @schema SecurityHubAwsSecurityFinding#Workflow
   */
  readonly workflow?: SecurityHubWorkflow;

  /**
   * @schema SecurityHubAwsSecurityFinding#RecordState
   */
  readonly recordState?: string;

  /**
   * @schema SecurityHubAwsSecurityFinding#RelatedFindings
   */
  readonly relatedFindings?: SecurityHubRelatedFinding[];

  /**
   * @schema SecurityHubAwsSecurityFinding#Note
   */
  readonly note?: SecurityHubNote;

  /**
   * @schema SecurityHubAwsSecurityFinding#Vulnerabilities
   */
  readonly vulnerabilities?: SecurityHubVulnerability[];

  /**
   * @schema SecurityHubAwsSecurityFinding#PatchSummary
   */
  readonly patchSummary?: SecurityHubPatchSummary;

  /**
   * @schema SecurityHubAwsSecurityFinding#Action
   */
  readonly action?: SecurityHubAction;

  /**
   * @schema SecurityHubAwsSecurityFinding#FindingProviderFields
   */
  readonly findingProviderFields?: SecurityHubFindingProviderFields;

}

/**
 * Converts an object of type 'SecurityHubAwsSecurityFinding' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsSecurityFinding(obj: SecurityHubAwsSecurityFinding | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SchemaVersion': obj.schemaVersion,
    'Id': obj.id,
    'ProductArn': obj.productArn,
    'ProductName': obj.productName,
    'CompanyName': obj.companyName,
    'Region': obj.region,
    'GeneratorId': obj.generatorId,
    'AwsAccountId': obj.awsAccountId,
    'Types': obj.types?.map(y => y),
    'FirstObservedAt': obj.firstObservedAt,
    'LastObservedAt': obj.lastObservedAt,
    'CreatedAt': obj.createdAt,
    'UpdatedAt': obj.updatedAt,
    'Severity': toJson_SecurityHubSeverity(obj.severity),
    'Confidence': obj.confidence,
    'Criticality': obj.criticality,
    'Title': obj.title,
    'Description': obj.description,
    'Remediation': toJson_SecurityHubRemediation(obj.remediation),
    'SourceUrl': obj.sourceUrl,
    'ProductFields': ((obj.productFields) === undefined) ? undefined : (Object.entries(obj.productFields).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'UserDefinedFields': ((obj.userDefinedFields) === undefined) ? undefined : (Object.entries(obj.userDefinedFields).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Malware': obj.malware?.map(y => toJson_SecurityHubMalware(y)),
    'Network': toJson_SecurityHubNetwork(obj.network),
    'NetworkPath': obj.networkPath?.map(y => toJson_SecurityHubNetworkPathComponent(y)),
    'Process': toJson_SecurityHubProcessDetails(obj.process),
    'ThreatIntelIndicators': obj.threatIntelIndicators?.map(y => toJson_SecurityHubThreatIntelIndicator(y)),
    'Resources': obj.resources?.map(y => toJson_SecurityHubResource(y)),
    'Compliance': toJson_SecurityHubCompliance(obj.compliance),
    'VerificationState': obj.verificationState,
    'WorkflowState': obj.workflowState,
    'Workflow': toJson_SecurityHubWorkflow(obj.workflow),
    'RecordState': obj.recordState,
    'RelatedFindings': obj.relatedFindings?.map(y => toJson_SecurityHubRelatedFinding(y)),
    'Note': toJson_SecurityHubNote(obj.note),
    'Vulnerabilities': obj.vulnerabilities?.map(y => toJson_SecurityHubVulnerability(y)),
    'PatchSummary': toJson_SecurityHubPatchSummary(obj.patchSummary),
    'Action': toJson_SecurityHubAction(obj.action),
    'FindingProviderFields': toJson_SecurityHubFindingProviderFields(obj.findingProviderFields),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubImportFindingsError
 */
export interface SecurityHubImportFindingsError {
  /**
   * @schema SecurityHubImportFindingsError#Id
   */
  readonly id?: string;

  /**
   * @schema SecurityHubImportFindingsError#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema SecurityHubImportFindingsError#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * Converts an object of type 'SecurityHubImportFindingsError' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubImportFindingsError(obj: SecurityHubImportFindingsError | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'ErrorCode': obj.errorCode,
    'ErrorMessage': obj.errorMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsSecurityFindingIdentifier
 */
export interface SecurityHubAwsSecurityFindingIdentifier {
  /**
   * @schema SecurityHubAwsSecurityFindingIdentifier#Id
   */
  readonly id?: string;

  /**
   * @schema SecurityHubAwsSecurityFindingIdentifier#ProductArn
   */
  readonly productArn?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsSecurityFindingIdentifier' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsSecurityFindingIdentifier(obj: SecurityHubAwsSecurityFindingIdentifier | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'ProductArn': obj.productArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubNoteUpdate
 */
export interface SecurityHubNoteUpdate {
  /**
   * @schema SecurityHubNoteUpdate#Text
   */
  readonly text?: string;

  /**
   * @schema SecurityHubNoteUpdate#UpdatedBy
   */
  readonly updatedBy?: string;

}

/**
 * Converts an object of type 'SecurityHubNoteUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubNoteUpdate(obj: SecurityHubNoteUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Text': obj.text,
    'UpdatedBy': obj.updatedBy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubSeverityUpdate
 */
export interface SecurityHubSeverityUpdate {
  /**
   * @schema SecurityHubSeverityUpdate#Normalized
   */
  readonly normalized?: number;

  /**
   * @schema SecurityHubSeverityUpdate#Product
   */
  readonly product?: number;

  /**
   * @schema SecurityHubSeverityUpdate#Label
   */
  readonly label?: string;

}

/**
 * Converts an object of type 'SecurityHubSeverityUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubSeverityUpdate(obj: SecurityHubSeverityUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Normalized': obj.normalized,
    'Product': obj.product,
    'Label': obj.label,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubWorkflowUpdate
 */
export interface SecurityHubWorkflowUpdate {
  /**
   * @schema SecurityHubWorkflowUpdate#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'SecurityHubWorkflowUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubWorkflowUpdate(obj: SecurityHubWorkflowUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubRelatedFinding
 */
export interface SecurityHubRelatedFinding {
  /**
   * @schema SecurityHubRelatedFinding#ProductArn
   */
  readonly productArn?: string;

  /**
   * @schema SecurityHubRelatedFinding#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'SecurityHubRelatedFinding' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubRelatedFinding(obj: SecurityHubRelatedFinding | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProductArn': obj.productArn,
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubBatchUpdateFindingsUnprocessedFinding
 */
export interface SecurityHubBatchUpdateFindingsUnprocessedFinding {
  /**
   * @schema SecurityHubBatchUpdateFindingsUnprocessedFinding#FindingIdentifier
   */
  readonly findingIdentifier?: SecurityHubAwsSecurityFindingIdentifier;

  /**
   * @schema SecurityHubBatchUpdateFindingsUnprocessedFinding#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema SecurityHubBatchUpdateFindingsUnprocessedFinding#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * Converts an object of type 'SecurityHubBatchUpdateFindingsUnprocessedFinding' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubBatchUpdateFindingsUnprocessedFinding(obj: SecurityHubBatchUpdateFindingsUnprocessedFinding | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FindingIdentifier': toJson_SecurityHubAwsSecurityFindingIdentifier(obj.findingIdentifier),
    'ErrorCode': obj.errorCode,
    'ErrorMessage': obj.errorMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsSecurityFindingFilters
 */
export interface SecurityHubAwsSecurityFindingFilters {
  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ProductArn
   */
  readonly productArn?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#AwsAccountId
   */
  readonly awsAccountId?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#Id
   */
  readonly id?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#GeneratorId
   */
  readonly generatorId?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#Region
   */
  readonly region?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#Type
   */
  readonly type?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#FirstObservedAt
   */
  readonly firstObservedAt?: SecurityHubDateFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#LastObservedAt
   */
  readonly lastObservedAt?: SecurityHubDateFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#CreatedAt
   */
  readonly createdAt?: SecurityHubDateFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#UpdatedAt
   */
  readonly updatedAt?: SecurityHubDateFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#SeverityProduct
   */
  readonly severityProduct?: SecurityHubNumberFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#SeverityNormalized
   */
  readonly severityNormalized?: SecurityHubNumberFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#SeverityLabel
   */
  readonly severityLabel?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#Confidence
   */
  readonly confidence?: SecurityHubNumberFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#Criticality
   */
  readonly criticality?: SecurityHubNumberFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#Title
   */
  readonly title?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#Description
   */
  readonly description?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#RecommendationText
   */
  readonly recommendationText?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#SourceUrl
   */
  readonly sourceUrl?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ProductFields
   */
  readonly productFields?: SecurityHubMapFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ProductName
   */
  readonly productName?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#CompanyName
   */
  readonly companyName?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#UserDefinedFields
   */
  readonly userDefinedFields?: SecurityHubMapFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#MalwareName
   */
  readonly malwareName?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#MalwareType
   */
  readonly malwareType?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#MalwarePath
   */
  readonly malwarePath?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#MalwareState
   */
  readonly malwareState?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#NetworkDirection
   */
  readonly networkDirection?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#NetworkProtocol
   */
  readonly networkProtocol?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#NetworkSourceIpV4
   */
  readonly networkSourceIpV4?: SecurityHubIpFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#NetworkSourceIpV6
   */
  readonly networkSourceIpV6?: SecurityHubIpFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#NetworkSourcePort
   */
  readonly networkSourcePort?: SecurityHubNumberFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#NetworkSourceDomain
   */
  readonly networkSourceDomain?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#NetworkSourceMac
   */
  readonly networkSourceMac?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#NetworkDestinationIpV4
   */
  readonly networkDestinationIpV4?: SecurityHubIpFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#NetworkDestinationIpV6
   */
  readonly networkDestinationIpV6?: SecurityHubIpFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#NetworkDestinationPort
   */
  readonly networkDestinationPort?: SecurityHubNumberFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#NetworkDestinationDomain
   */
  readonly networkDestinationDomain?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ProcessName
   */
  readonly processName?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ProcessPath
   */
  readonly processPath?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ProcessPid
   */
  readonly processPid?: SecurityHubNumberFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ProcessParentPid
   */
  readonly processParentPid?: SecurityHubNumberFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ProcessLaunchedAt
   */
  readonly processLaunchedAt?: SecurityHubDateFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ProcessTerminatedAt
   */
  readonly processTerminatedAt?: SecurityHubDateFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ThreatIntelIndicatorType
   */
  readonly threatIntelIndicatorType?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ThreatIntelIndicatorValue
   */
  readonly threatIntelIndicatorValue?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ThreatIntelIndicatorCategory
   */
  readonly threatIntelIndicatorCategory?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ThreatIntelIndicatorLastObservedAt
   */
  readonly threatIntelIndicatorLastObservedAt?: SecurityHubDateFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ThreatIntelIndicatorSource
   */
  readonly threatIntelIndicatorSource?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ThreatIntelIndicatorSourceUrl
   */
  readonly threatIntelIndicatorSourceUrl?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ResourceType
   */
  readonly resourceType?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ResourceId
   */
  readonly resourceId?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ResourcePartition
   */
  readonly resourcePartition?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ResourceRegion
   */
  readonly resourceRegion?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ResourceTags
   */
  readonly resourceTags?: SecurityHubMapFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ResourceAwsEc2InstanceType
   */
  readonly resourceAwsEc2InstanceType?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ResourceAwsEc2InstanceImageId
   */
  readonly resourceAwsEc2InstanceImageId?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ResourceAwsEc2InstanceIpV4Addresses
   */
  readonly resourceAwsEc2InstanceIpV4Addresses?: SecurityHubIpFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ResourceAwsEc2InstanceIpV6Addresses
   */
  readonly resourceAwsEc2InstanceIpV6Addresses?: SecurityHubIpFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ResourceAwsEc2InstanceKeyName
   */
  readonly resourceAwsEc2InstanceKeyName?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ResourceAwsEc2InstanceIamInstanceProfileArn
   */
  readonly resourceAwsEc2InstanceIamInstanceProfileArn?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ResourceAwsEc2InstanceVpcId
   */
  readonly resourceAwsEc2InstanceVpcId?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ResourceAwsEc2InstanceSubnetId
   */
  readonly resourceAwsEc2InstanceSubnetId?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ResourceAwsEc2InstanceLaunchedAt
   */
  readonly resourceAwsEc2InstanceLaunchedAt?: SecurityHubDateFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ResourceAwsS3BucketOwnerId
   */
  readonly resourceAwsS3BucketOwnerId?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ResourceAwsS3BucketOwnerName
   */
  readonly resourceAwsS3BucketOwnerName?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ResourceAwsIamAccessKeyUserName
   */
  readonly resourceAwsIamAccessKeyUserName?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ResourceAwsIamAccessKeyPrincipalName
   */
  readonly resourceAwsIamAccessKeyPrincipalName?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ResourceAwsIamAccessKeyStatus
   */
  readonly resourceAwsIamAccessKeyStatus?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ResourceAwsIamAccessKeyCreatedAt
   */
  readonly resourceAwsIamAccessKeyCreatedAt?: SecurityHubDateFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ResourceAwsIamUserUserName
   */
  readonly resourceAwsIamUserUserName?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ResourceContainerName
   */
  readonly resourceContainerName?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ResourceContainerImageId
   */
  readonly resourceContainerImageId?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ResourceContainerImageName
   */
  readonly resourceContainerImageName?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ResourceContainerLaunchedAt
   */
  readonly resourceContainerLaunchedAt?: SecurityHubDateFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ResourceDetailsOther
   */
  readonly resourceDetailsOther?: SecurityHubMapFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ComplianceStatus
   */
  readonly complianceStatus?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#VerificationState
   */
  readonly verificationState?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#WorkflowState
   */
  readonly workflowState?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#WorkflowStatus
   */
  readonly workflowStatus?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#RecordState
   */
  readonly recordState?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#RelatedFindingsProductArn
   */
  readonly relatedFindingsProductArn?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#RelatedFindingsId
   */
  readonly relatedFindingsId?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#NoteText
   */
  readonly noteText?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#NoteUpdatedAt
   */
  readonly noteUpdatedAt?: SecurityHubDateFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#NoteUpdatedBy
   */
  readonly noteUpdatedBy?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#Keyword
   */
  readonly keyword?: SecurityHubKeywordFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#FindingProviderFieldsConfidence
   */
  readonly findingProviderFieldsConfidence?: SecurityHubNumberFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#FindingProviderFieldsCriticality
   */
  readonly findingProviderFieldsCriticality?: SecurityHubNumberFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#FindingProviderFieldsRelatedFindingsId
   */
  readonly findingProviderFieldsRelatedFindingsId?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#FindingProviderFieldsRelatedFindingsProductArn
   */
  readonly findingProviderFieldsRelatedFindingsProductArn?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#FindingProviderFieldsSeverityLabel
   */
  readonly findingProviderFieldsSeverityLabel?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#FindingProviderFieldsSeverityOriginal
   */
  readonly findingProviderFieldsSeverityOriginal?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#FindingProviderFieldsTypes
   */
  readonly findingProviderFieldsTypes?: SecurityHubStringFilter[];

}

/**
 * Converts an object of type 'SecurityHubAwsSecurityFindingFilters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsSecurityFindingFilters(obj: SecurityHubAwsSecurityFindingFilters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProductArn': obj.productArn?.map(y => toJson_SecurityHubStringFilter(y)),
    'AwsAccountId': obj.awsAccountId?.map(y => toJson_SecurityHubStringFilter(y)),
    'Id': obj.id?.map(y => toJson_SecurityHubStringFilter(y)),
    'GeneratorId': obj.generatorId?.map(y => toJson_SecurityHubStringFilter(y)),
    'Region': obj.region?.map(y => toJson_SecurityHubStringFilter(y)),
    'Type': obj.type?.map(y => toJson_SecurityHubStringFilter(y)),
    'FirstObservedAt': obj.firstObservedAt?.map(y => toJson_SecurityHubDateFilter(y)),
    'LastObservedAt': obj.lastObservedAt?.map(y => toJson_SecurityHubDateFilter(y)),
    'CreatedAt': obj.createdAt?.map(y => toJson_SecurityHubDateFilter(y)),
    'UpdatedAt': obj.updatedAt?.map(y => toJson_SecurityHubDateFilter(y)),
    'SeverityProduct': obj.severityProduct?.map(y => toJson_SecurityHubNumberFilter(y)),
    'SeverityNormalized': obj.severityNormalized?.map(y => toJson_SecurityHubNumberFilter(y)),
    'SeverityLabel': obj.severityLabel?.map(y => toJson_SecurityHubStringFilter(y)),
    'Confidence': obj.confidence?.map(y => toJson_SecurityHubNumberFilter(y)),
    'Criticality': obj.criticality?.map(y => toJson_SecurityHubNumberFilter(y)),
    'Title': obj.title?.map(y => toJson_SecurityHubStringFilter(y)),
    'Description': obj.description?.map(y => toJson_SecurityHubStringFilter(y)),
    'RecommendationText': obj.recommendationText?.map(y => toJson_SecurityHubStringFilter(y)),
    'SourceUrl': obj.sourceUrl?.map(y => toJson_SecurityHubStringFilter(y)),
    'ProductFields': obj.productFields?.map(y => toJson_SecurityHubMapFilter(y)),
    'ProductName': obj.productName?.map(y => toJson_SecurityHubStringFilter(y)),
    'CompanyName': obj.companyName?.map(y => toJson_SecurityHubStringFilter(y)),
    'UserDefinedFields': obj.userDefinedFields?.map(y => toJson_SecurityHubMapFilter(y)),
    'MalwareName': obj.malwareName?.map(y => toJson_SecurityHubStringFilter(y)),
    'MalwareType': obj.malwareType?.map(y => toJson_SecurityHubStringFilter(y)),
    'MalwarePath': obj.malwarePath?.map(y => toJson_SecurityHubStringFilter(y)),
    'MalwareState': obj.malwareState?.map(y => toJson_SecurityHubStringFilter(y)),
    'NetworkDirection': obj.networkDirection?.map(y => toJson_SecurityHubStringFilter(y)),
    'NetworkProtocol': obj.networkProtocol?.map(y => toJson_SecurityHubStringFilter(y)),
    'NetworkSourceIpV4': obj.networkSourceIpV4?.map(y => toJson_SecurityHubIpFilter(y)),
    'NetworkSourceIpV6': obj.networkSourceIpV6?.map(y => toJson_SecurityHubIpFilter(y)),
    'NetworkSourcePort': obj.networkSourcePort?.map(y => toJson_SecurityHubNumberFilter(y)),
    'NetworkSourceDomain': obj.networkSourceDomain?.map(y => toJson_SecurityHubStringFilter(y)),
    'NetworkSourceMac': obj.networkSourceMac?.map(y => toJson_SecurityHubStringFilter(y)),
    'NetworkDestinationIpV4': obj.networkDestinationIpV4?.map(y => toJson_SecurityHubIpFilter(y)),
    'NetworkDestinationIpV6': obj.networkDestinationIpV6?.map(y => toJson_SecurityHubIpFilter(y)),
    'NetworkDestinationPort': obj.networkDestinationPort?.map(y => toJson_SecurityHubNumberFilter(y)),
    'NetworkDestinationDomain': obj.networkDestinationDomain?.map(y => toJson_SecurityHubStringFilter(y)),
    'ProcessName': obj.processName?.map(y => toJson_SecurityHubStringFilter(y)),
    'ProcessPath': obj.processPath?.map(y => toJson_SecurityHubStringFilter(y)),
    'ProcessPid': obj.processPid?.map(y => toJson_SecurityHubNumberFilter(y)),
    'ProcessParentPid': obj.processParentPid?.map(y => toJson_SecurityHubNumberFilter(y)),
    'ProcessLaunchedAt': obj.processLaunchedAt?.map(y => toJson_SecurityHubDateFilter(y)),
    'ProcessTerminatedAt': obj.processTerminatedAt?.map(y => toJson_SecurityHubDateFilter(y)),
    'ThreatIntelIndicatorType': obj.threatIntelIndicatorType?.map(y => toJson_SecurityHubStringFilter(y)),
    'ThreatIntelIndicatorValue': obj.threatIntelIndicatorValue?.map(y => toJson_SecurityHubStringFilter(y)),
    'ThreatIntelIndicatorCategory': obj.threatIntelIndicatorCategory?.map(y => toJson_SecurityHubStringFilter(y)),
    'ThreatIntelIndicatorLastObservedAt': obj.threatIntelIndicatorLastObservedAt?.map(y => toJson_SecurityHubDateFilter(y)),
    'ThreatIntelIndicatorSource': obj.threatIntelIndicatorSource?.map(y => toJson_SecurityHubStringFilter(y)),
    'ThreatIntelIndicatorSourceUrl': obj.threatIntelIndicatorSourceUrl?.map(y => toJson_SecurityHubStringFilter(y)),
    'ResourceType': obj.resourceType?.map(y => toJson_SecurityHubStringFilter(y)),
    'ResourceId': obj.resourceId?.map(y => toJson_SecurityHubStringFilter(y)),
    'ResourcePartition': obj.resourcePartition?.map(y => toJson_SecurityHubStringFilter(y)),
    'ResourceRegion': obj.resourceRegion?.map(y => toJson_SecurityHubStringFilter(y)),
    'ResourceTags': obj.resourceTags?.map(y => toJson_SecurityHubMapFilter(y)),
    'ResourceAwsEc2InstanceType': obj.resourceAwsEc2InstanceType?.map(y => toJson_SecurityHubStringFilter(y)),
    'ResourceAwsEc2InstanceImageId': obj.resourceAwsEc2InstanceImageId?.map(y => toJson_SecurityHubStringFilter(y)),
    'ResourceAwsEc2InstanceIpV4Addresses': obj.resourceAwsEc2InstanceIpV4Addresses?.map(y => toJson_SecurityHubIpFilter(y)),
    'ResourceAwsEc2InstanceIpV6Addresses': obj.resourceAwsEc2InstanceIpV6Addresses?.map(y => toJson_SecurityHubIpFilter(y)),
    'ResourceAwsEc2InstanceKeyName': obj.resourceAwsEc2InstanceKeyName?.map(y => toJson_SecurityHubStringFilter(y)),
    'ResourceAwsEc2InstanceIamInstanceProfileArn': obj.resourceAwsEc2InstanceIamInstanceProfileArn?.map(y => toJson_SecurityHubStringFilter(y)),
    'ResourceAwsEc2InstanceVpcId': obj.resourceAwsEc2InstanceVpcId?.map(y => toJson_SecurityHubStringFilter(y)),
    'ResourceAwsEc2InstanceSubnetId': obj.resourceAwsEc2InstanceSubnetId?.map(y => toJson_SecurityHubStringFilter(y)),
    'ResourceAwsEc2InstanceLaunchedAt': obj.resourceAwsEc2InstanceLaunchedAt?.map(y => toJson_SecurityHubDateFilter(y)),
    'ResourceAwsS3BucketOwnerId': obj.resourceAwsS3BucketOwnerId?.map(y => toJson_SecurityHubStringFilter(y)),
    'ResourceAwsS3BucketOwnerName': obj.resourceAwsS3BucketOwnerName?.map(y => toJson_SecurityHubStringFilter(y)),
    'ResourceAwsIamAccessKeyUserName': obj.resourceAwsIamAccessKeyUserName?.map(y => toJson_SecurityHubStringFilter(y)),
    'ResourceAwsIamAccessKeyPrincipalName': obj.resourceAwsIamAccessKeyPrincipalName?.map(y => toJson_SecurityHubStringFilter(y)),
    'ResourceAwsIamAccessKeyStatus': obj.resourceAwsIamAccessKeyStatus?.map(y => toJson_SecurityHubStringFilter(y)),
    'ResourceAwsIamAccessKeyCreatedAt': obj.resourceAwsIamAccessKeyCreatedAt?.map(y => toJson_SecurityHubDateFilter(y)),
    'ResourceAwsIamUserUserName': obj.resourceAwsIamUserUserName?.map(y => toJson_SecurityHubStringFilter(y)),
    'ResourceContainerName': obj.resourceContainerName?.map(y => toJson_SecurityHubStringFilter(y)),
    'ResourceContainerImageId': obj.resourceContainerImageId?.map(y => toJson_SecurityHubStringFilter(y)),
    'ResourceContainerImageName': obj.resourceContainerImageName?.map(y => toJson_SecurityHubStringFilter(y)),
    'ResourceContainerLaunchedAt': obj.resourceContainerLaunchedAt?.map(y => toJson_SecurityHubDateFilter(y)),
    'ResourceDetailsOther': obj.resourceDetailsOther?.map(y => toJson_SecurityHubMapFilter(y)),
    'ComplianceStatus': obj.complianceStatus?.map(y => toJson_SecurityHubStringFilter(y)),
    'VerificationState': obj.verificationState?.map(y => toJson_SecurityHubStringFilter(y)),
    'WorkflowState': obj.workflowState?.map(y => toJson_SecurityHubStringFilter(y)),
    'WorkflowStatus': obj.workflowStatus?.map(y => toJson_SecurityHubStringFilter(y)),
    'RecordState': obj.recordState?.map(y => toJson_SecurityHubStringFilter(y)),
    'RelatedFindingsProductArn': obj.relatedFindingsProductArn?.map(y => toJson_SecurityHubStringFilter(y)),
    'RelatedFindingsId': obj.relatedFindingsId?.map(y => toJson_SecurityHubStringFilter(y)),
    'NoteText': obj.noteText?.map(y => toJson_SecurityHubStringFilter(y)),
    'NoteUpdatedAt': obj.noteUpdatedAt?.map(y => toJson_SecurityHubDateFilter(y)),
    'NoteUpdatedBy': obj.noteUpdatedBy?.map(y => toJson_SecurityHubStringFilter(y)),
    'Keyword': obj.keyword?.map(y => toJson_SecurityHubKeywordFilter(y)),
    'FindingProviderFieldsConfidence': obj.findingProviderFieldsConfidence?.map(y => toJson_SecurityHubNumberFilter(y)),
    'FindingProviderFieldsCriticality': obj.findingProviderFieldsCriticality?.map(y => toJson_SecurityHubNumberFilter(y)),
    'FindingProviderFieldsRelatedFindingsId': obj.findingProviderFieldsRelatedFindingsId?.map(y => toJson_SecurityHubStringFilter(y)),
    'FindingProviderFieldsRelatedFindingsProductArn': obj.findingProviderFieldsRelatedFindingsProductArn?.map(y => toJson_SecurityHubStringFilter(y)),
    'FindingProviderFieldsSeverityLabel': obj.findingProviderFieldsSeverityLabel?.map(y => toJson_SecurityHubStringFilter(y)),
    'FindingProviderFieldsSeverityOriginal': obj.findingProviderFieldsSeverityOriginal?.map(y => toJson_SecurityHubStringFilter(y)),
    'FindingProviderFieldsTypes': obj.findingProviderFieldsTypes?.map(y => toJson_SecurityHubStringFilter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAccountDetails
 */
export interface SecurityHubAccountDetails {
  /**
   * @schema SecurityHubAccountDetails#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema SecurityHubAccountDetails#Email
   */
  readonly email?: string;

}

/**
 * Converts an object of type 'SecurityHubAccountDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAccountDetails(obj: SecurityHubAccountDetails | undefined): Record<string, any> | undefined {
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
 * @schema SecurityHubResult
 */
export interface SecurityHubResult {
  /**
   * @schema SecurityHubResult#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema SecurityHubResult#ProcessingResult
   */
  readonly processingResult?: string;

}

/**
 * Converts an object of type 'SecurityHubResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubResult(obj: SecurityHubResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'ProcessingResult': obj.processingResult,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubActionTarget
 */
export interface SecurityHubActionTarget {
  /**
   * @schema SecurityHubActionTarget#ActionTargetArn
   */
  readonly actionTargetArn?: string;

  /**
   * @schema SecurityHubActionTarget#Name
   */
  readonly name?: string;

  /**
   * @schema SecurityHubActionTarget#Description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'SecurityHubActionTarget' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubActionTarget(obj: SecurityHubActionTarget | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ActionTargetArn': obj.actionTargetArn,
    'Name': obj.name,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubProduct
 */
export interface SecurityHubProduct {
  /**
   * @schema SecurityHubProduct#ProductArn
   */
  readonly productArn?: string;

  /**
   * @schema SecurityHubProduct#ProductName
   */
  readonly productName?: string;

  /**
   * @schema SecurityHubProduct#CompanyName
   */
  readonly companyName?: string;

  /**
   * @schema SecurityHubProduct#Description
   */
  readonly description?: string;

  /**
   * @schema SecurityHubProduct#Categories
   */
  readonly categories?: string[];

  /**
   * @schema SecurityHubProduct#IntegrationTypes
   */
  readonly integrationTypes?: string[];

  /**
   * @schema SecurityHubProduct#MarketplaceUrl
   */
  readonly marketplaceUrl?: string;

  /**
   * @schema SecurityHubProduct#ActivationUrl
   */
  readonly activationUrl?: string;

  /**
   * @schema SecurityHubProduct#ProductSubscriptionResourcePolicy
   */
  readonly productSubscriptionResourcePolicy?: string;

}

/**
 * Converts an object of type 'SecurityHubProduct' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubProduct(obj: SecurityHubProduct | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProductArn': obj.productArn,
    'ProductName': obj.productName,
    'CompanyName': obj.companyName,
    'Description': obj.description,
    'Categories': obj.categories?.map(y => y),
    'IntegrationTypes': obj.integrationTypes?.map(y => y),
    'MarketplaceUrl': obj.marketplaceUrl,
    'ActivationUrl': obj.activationUrl,
    'ProductSubscriptionResourcePolicy': obj.productSubscriptionResourcePolicy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubStandard
 */
export interface SecurityHubStandard {
  /**
   * @schema SecurityHubStandard#StandardsArn
   */
  readonly standardsArn?: string;

  /**
   * @schema SecurityHubStandard#Name
   */
  readonly name?: string;

  /**
   * @schema SecurityHubStandard#Description
   */
  readonly description?: string;

  /**
   * @schema SecurityHubStandard#EnabledByDefault
   */
  readonly enabledByDefault?: boolean;

}

/**
 * Converts an object of type 'SecurityHubStandard' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubStandard(obj: SecurityHubStandard | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StandardsArn': obj.standardsArn,
    'Name': obj.name,
    'Description': obj.description,
    'EnabledByDefault': obj.enabledByDefault,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubStandardsControl
 */
export interface SecurityHubStandardsControl {
  /**
   * @schema SecurityHubStandardsControl#StandardsControlArn
   */
  readonly standardsControlArn?: string;

  /**
   * @schema SecurityHubStandardsControl#ControlStatus
   */
  readonly controlStatus?: string;

  /**
   * @schema SecurityHubStandardsControl#DisabledReason
   */
  readonly disabledReason?: string;

  /**
   * @schema SecurityHubStandardsControl#ControlStatusUpdatedAt
   */
  readonly controlStatusUpdatedAt?: string;

  /**
   * @schema SecurityHubStandardsControl#ControlId
   */
  readonly controlId?: string;

  /**
   * @schema SecurityHubStandardsControl#Title
   */
  readonly title?: string;

  /**
   * @schema SecurityHubStandardsControl#Description
   */
  readonly description?: string;

  /**
   * @schema SecurityHubStandardsControl#RemediationUrl
   */
  readonly remediationUrl?: string;

  /**
   * @schema SecurityHubStandardsControl#SeverityRating
   */
  readonly severityRating?: string;

  /**
   * @schema SecurityHubStandardsControl#RelatedRequirements
   */
  readonly relatedRequirements?: string[];

}

/**
 * Converts an object of type 'SecurityHubStandardsControl' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubStandardsControl(obj: SecurityHubStandardsControl | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StandardsControlArn': obj.standardsControlArn,
    'ControlStatus': obj.controlStatus,
    'DisabledReason': obj.disabledReason,
    'ControlStatusUpdatedAt': obj.controlStatusUpdatedAt,
    'ControlId': obj.controlId,
    'Title': obj.title,
    'Description': obj.description,
    'RemediationUrl': obj.remediationUrl,
    'SeverityRating': obj.severityRating,
    'RelatedRequirements': obj.relatedRequirements?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubInvitation
 */
export interface SecurityHubInvitation {
  /**
   * @schema SecurityHubInvitation#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema SecurityHubInvitation#InvitationId
   */
  readonly invitationId?: string;

  /**
   * @schema SecurityHubInvitation#InvitedAt
   */
  readonly invitedAt?: string;

  /**
   * @schema SecurityHubInvitation#MemberStatus
   */
  readonly memberStatus?: string;

}

/**
 * Converts an object of type 'SecurityHubInvitation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubInvitation(obj: SecurityHubInvitation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'InvitationId': obj.invitationId,
    'InvitedAt': obj.invitedAt,
    'MemberStatus': obj.memberStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubSortCriterion
 */
export interface SecurityHubSortCriterion {
  /**
   * @schema SecurityHubSortCriterion#Field
   */
  readonly field?: string;

  /**
   * @schema SecurityHubSortCriterion#SortOrder
   */
  readonly sortOrder?: string;

}

/**
 * Converts an object of type 'SecurityHubSortCriterion' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubSortCriterion(obj: SecurityHubSortCriterion | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Field': obj.field,
    'SortOrder': obj.sortOrder,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubInsightResults
 */
export interface SecurityHubInsightResults {
  /**
   * @schema SecurityHubInsightResults#InsightArn
   */
  readonly insightArn?: string;

  /**
   * @schema SecurityHubInsightResults#GroupByAttribute
   */
  readonly groupByAttribute?: string;

  /**
   * @schema SecurityHubInsightResults#ResultValues
   */
  readonly resultValues?: SecurityHubInsightResultValue[];

}

/**
 * Converts an object of type 'SecurityHubInsightResults' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubInsightResults(obj: SecurityHubInsightResults | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InsightArn': obj.insightArn,
    'GroupByAttribute': obj.groupByAttribute,
    'ResultValues': obj.resultValues?.map(y => toJson_SecurityHubInsightResultValue(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubInsight
 */
export interface SecurityHubInsight {
  /**
   * @schema SecurityHubInsight#InsightArn
   */
  readonly insightArn?: string;

  /**
   * @schema SecurityHubInsight#Name
   */
  readonly name?: string;

  /**
   * @schema SecurityHubInsight#Filters
   */
  readonly filters?: SecurityHubAwsSecurityFindingFilters;

  /**
   * @schema SecurityHubInsight#GroupByAttribute
   */
  readonly groupByAttribute?: string;

}

/**
 * Converts an object of type 'SecurityHubInsight' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubInsight(obj: SecurityHubInsight | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InsightArn': obj.insightArn,
    'Name': obj.name,
    'Filters': toJson_SecurityHubAwsSecurityFindingFilters(obj.filters),
    'GroupByAttribute': obj.groupByAttribute,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubMember
 */
export interface SecurityHubMember {
  /**
   * @schema SecurityHubMember#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema SecurityHubMember#Email
   */
  readonly email?: string;

  /**
   * @schema SecurityHubMember#MasterId
   */
  readonly masterId?: string;

  /**
   * @schema SecurityHubMember#AdministratorId
   */
  readonly administratorId?: string;

  /**
   * @schema SecurityHubMember#MemberStatus
   */
  readonly memberStatus?: string;

  /**
   * @schema SecurityHubMember#InvitedAt
   */
  readonly invitedAt?: string;

  /**
   * @schema SecurityHubMember#UpdatedAt
   */
  readonly updatedAt?: string;

}

/**
 * Converts an object of type 'SecurityHubMember' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubMember(obj: SecurityHubMember | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'Email': obj.email,
    'MasterId': obj.masterId,
    'AdministratorId': obj.administratorId,
    'MemberStatus': obj.memberStatus,
    'InvitedAt': obj.invitedAt,
    'UpdatedAt': obj.updatedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAdminAccount
 */
export interface SecurityHubAdminAccount {
  /**
   * @schema SecurityHubAdminAccount#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema SecurityHubAdminAccount#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'SecurityHubAdminAccount' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAdminAccount(obj: SecurityHubAdminAccount | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubSeverity
 */
export interface SecurityHubSeverity {
  /**
   * @schema SecurityHubSeverity#Product
   */
  readonly product?: number;

  /**
   * @schema SecurityHubSeverity#Label
   */
  readonly label?: string;

  /**
   * @schema SecurityHubSeverity#Normalized
   */
  readonly normalized?: number;

  /**
   * @schema SecurityHubSeverity#Original
   */
  readonly original?: string;

}

/**
 * Converts an object of type 'SecurityHubSeverity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubSeverity(obj: SecurityHubSeverity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Product': obj.product,
    'Label': obj.label,
    'Normalized': obj.normalized,
    'Original': obj.original,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubRemediation
 */
export interface SecurityHubRemediation {
  /**
   * @schema SecurityHubRemediation#Recommendation
   */
  readonly recommendation?: SecurityHubRecommendation;

}

/**
 * Converts an object of type 'SecurityHubRemediation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubRemediation(obj: SecurityHubRemediation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Recommendation': toJson_SecurityHubRecommendation(obj.recommendation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubMalware
 */
export interface SecurityHubMalware {
  /**
   * @schema SecurityHubMalware#Name
   */
  readonly name?: string;

  /**
   * @schema SecurityHubMalware#Type
   */
  readonly type?: string;

  /**
   * @schema SecurityHubMalware#Path
   */
  readonly path?: string;

  /**
   * @schema SecurityHubMalware#State
   */
  readonly state?: string;

}

/**
 * Converts an object of type 'SecurityHubMalware' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubMalware(obj: SecurityHubMalware | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Type': obj.type,
    'Path': obj.path,
    'State': obj.state,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubNetwork
 */
export interface SecurityHubNetwork {
  /**
   * @schema SecurityHubNetwork#Direction
   */
  readonly direction?: string;

  /**
   * @schema SecurityHubNetwork#Protocol
   */
  readonly protocol?: string;

  /**
   * @schema SecurityHubNetwork#OpenPortRange
   */
  readonly openPortRange?: SecurityHubPortRange;

  /**
   * @schema SecurityHubNetwork#SourceIpV4
   */
  readonly sourceIpV4?: string;

  /**
   * @schema SecurityHubNetwork#SourceIpV6
   */
  readonly sourceIpV6?: string;

  /**
   * @schema SecurityHubNetwork#SourcePort
   */
  readonly sourcePort?: number;

  /**
   * @schema SecurityHubNetwork#SourceDomain
   */
  readonly sourceDomain?: string;

  /**
   * @schema SecurityHubNetwork#SourceMac
   */
  readonly sourceMac?: string;

  /**
   * @schema SecurityHubNetwork#DestinationIpV4
   */
  readonly destinationIpV4?: string;

  /**
   * @schema SecurityHubNetwork#DestinationIpV6
   */
  readonly destinationIpV6?: string;

  /**
   * @schema SecurityHubNetwork#DestinationPort
   */
  readonly destinationPort?: number;

  /**
   * @schema SecurityHubNetwork#DestinationDomain
   */
  readonly destinationDomain?: string;

}

/**
 * Converts an object of type 'SecurityHubNetwork' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubNetwork(obj: SecurityHubNetwork | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Direction': obj.direction,
    'Protocol': obj.protocol,
    'OpenPortRange': toJson_SecurityHubPortRange(obj.openPortRange),
    'SourceIpV4': obj.sourceIpV4,
    'SourceIpV6': obj.sourceIpV6,
    'SourcePort': obj.sourcePort,
    'SourceDomain': obj.sourceDomain,
    'SourceMac': obj.sourceMac,
    'DestinationIpV4': obj.destinationIpV4,
    'DestinationIpV6': obj.destinationIpV6,
    'DestinationPort': obj.destinationPort,
    'DestinationDomain': obj.destinationDomain,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubNetworkPathComponent
 */
export interface SecurityHubNetworkPathComponent {
  /**
   * @schema SecurityHubNetworkPathComponent#ComponentId
   */
  readonly componentId?: string;

  /**
   * @schema SecurityHubNetworkPathComponent#ComponentType
   */
  readonly componentType?: string;

  /**
   * @schema SecurityHubNetworkPathComponent#Egress
   */
  readonly egress?: SecurityHubNetworkHeader;

  /**
   * @schema SecurityHubNetworkPathComponent#Ingress
   */
  readonly ingress?: SecurityHubNetworkHeader;

}

/**
 * Converts an object of type 'SecurityHubNetworkPathComponent' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubNetworkPathComponent(obj: SecurityHubNetworkPathComponent | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ComponentId': obj.componentId,
    'ComponentType': obj.componentType,
    'Egress': toJson_SecurityHubNetworkHeader(obj.egress),
    'Ingress': toJson_SecurityHubNetworkHeader(obj.ingress),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubProcessDetails
 */
export interface SecurityHubProcessDetails {
  /**
   * @schema SecurityHubProcessDetails#Name
   */
  readonly name?: string;

  /**
   * @schema SecurityHubProcessDetails#Path
   */
  readonly path?: string;

  /**
   * @schema SecurityHubProcessDetails#Pid
   */
  readonly pid?: number;

  /**
   * @schema SecurityHubProcessDetails#ParentPid
   */
  readonly parentPid?: number;

  /**
   * @schema SecurityHubProcessDetails#LaunchedAt
   */
  readonly launchedAt?: string;

  /**
   * @schema SecurityHubProcessDetails#TerminatedAt
   */
  readonly terminatedAt?: string;

}

/**
 * Converts an object of type 'SecurityHubProcessDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubProcessDetails(obj: SecurityHubProcessDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Path': obj.path,
    'Pid': obj.pid,
    'ParentPid': obj.parentPid,
    'LaunchedAt': obj.launchedAt,
    'TerminatedAt': obj.terminatedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubThreatIntelIndicator
 */
export interface SecurityHubThreatIntelIndicator {
  /**
   * @schema SecurityHubThreatIntelIndicator#Type
   */
  readonly type?: string;

  /**
   * @schema SecurityHubThreatIntelIndicator#Value
   */
  readonly value?: string;

  /**
   * @schema SecurityHubThreatIntelIndicator#Category
   */
  readonly category?: string;

  /**
   * @schema SecurityHubThreatIntelIndicator#LastObservedAt
   */
  readonly lastObservedAt?: string;

  /**
   * @schema SecurityHubThreatIntelIndicator#Source
   */
  readonly source?: string;

  /**
   * @schema SecurityHubThreatIntelIndicator#SourceUrl
   */
  readonly sourceUrl?: string;

}

/**
 * Converts an object of type 'SecurityHubThreatIntelIndicator' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubThreatIntelIndicator(obj: SecurityHubThreatIntelIndicator | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Value': obj.value,
    'Category': obj.category,
    'LastObservedAt': obj.lastObservedAt,
    'Source': obj.source,
    'SourceUrl': obj.sourceUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubResource
 */
export interface SecurityHubResource {
  /**
   * @schema SecurityHubResource#Type
   */
  readonly type?: string;

  /**
   * @schema SecurityHubResource#Id
   */
  readonly id?: string;

  /**
   * @schema SecurityHubResource#Partition
   */
  readonly partition?: string;

  /**
   * @schema SecurityHubResource#Region
   */
  readonly region?: string;

  /**
   * @schema SecurityHubResource#ResourceRole
   */
  readonly resourceRole?: string;

  /**
   * @schema SecurityHubResource#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema SecurityHubResource#DataClassification
   */
  readonly dataClassification?: SecurityHubDataClassificationDetails;

  /**
   * @schema SecurityHubResource#Details
   */
  readonly details?: SecurityHubResourceDetails;

}

/**
 * Converts an object of type 'SecurityHubResource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubResource(obj: SecurityHubResource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Id': obj.id,
    'Partition': obj.partition,
    'Region': obj.region,
    'ResourceRole': obj.resourceRole,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'DataClassification': toJson_SecurityHubDataClassificationDetails(obj.dataClassification),
    'Details': toJson_SecurityHubResourceDetails(obj.details),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubCompliance
 */
export interface SecurityHubCompliance {
  /**
   * @schema SecurityHubCompliance#Status
   */
  readonly status?: string;

  /**
   * @schema SecurityHubCompliance#RelatedRequirements
   */
  readonly relatedRequirements?: string[];

  /**
   * @schema SecurityHubCompliance#StatusReasons
   */
  readonly statusReasons?: SecurityHubStatusReason[];

}

/**
 * Converts an object of type 'SecurityHubCompliance' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubCompliance(obj: SecurityHubCompliance | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
    'RelatedRequirements': obj.relatedRequirements?.map(y => y),
    'StatusReasons': obj.statusReasons?.map(y => toJson_SecurityHubStatusReason(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubWorkflow
 */
export interface SecurityHubWorkflow {
  /**
   * @schema SecurityHubWorkflow#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'SecurityHubWorkflow' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubWorkflow(obj: SecurityHubWorkflow | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubNote
 */
export interface SecurityHubNote {
  /**
   * @schema SecurityHubNote#Text
   */
  readonly text?: string;

  /**
   * @schema SecurityHubNote#UpdatedBy
   */
  readonly updatedBy?: string;

  /**
   * @schema SecurityHubNote#UpdatedAt
   */
  readonly updatedAt?: string;

}

/**
 * Converts an object of type 'SecurityHubNote' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubNote(obj: SecurityHubNote | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Text': obj.text,
    'UpdatedBy': obj.updatedBy,
    'UpdatedAt': obj.updatedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubVulnerability
 */
export interface SecurityHubVulnerability {
  /**
   * @schema SecurityHubVulnerability#Id
   */
  readonly id?: string;

  /**
   * @schema SecurityHubVulnerability#VulnerablePackages
   */
  readonly vulnerablePackages?: SecurityHubSoftwarePackage[];

  /**
   * @schema SecurityHubVulnerability#Cvss
   */
  readonly cvss?: SecurityHubCvss[];

  /**
   * @schema SecurityHubVulnerability#RelatedVulnerabilities
   */
  readonly relatedVulnerabilities?: string[];

  /**
   * @schema SecurityHubVulnerability#Vendor
   */
  readonly vendor?: SecurityHubVulnerabilityVendor;

  /**
   * @schema SecurityHubVulnerability#ReferenceUrls
   */
  readonly referenceUrls?: string[];

}

/**
 * Converts an object of type 'SecurityHubVulnerability' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubVulnerability(obj: SecurityHubVulnerability | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'VulnerablePackages': obj.vulnerablePackages?.map(y => toJson_SecurityHubSoftwarePackage(y)),
    'Cvss': obj.cvss?.map(y => toJson_SecurityHubCvss(y)),
    'RelatedVulnerabilities': obj.relatedVulnerabilities?.map(y => y),
    'Vendor': toJson_SecurityHubVulnerabilityVendor(obj.vendor),
    'ReferenceUrls': obj.referenceUrls?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubPatchSummary
 */
export interface SecurityHubPatchSummary {
  /**
   * @schema SecurityHubPatchSummary#Id
   */
  readonly id?: string;

  /**
   * @schema SecurityHubPatchSummary#InstalledCount
   */
  readonly installedCount?: number;

  /**
   * @schema SecurityHubPatchSummary#MissingCount
   */
  readonly missingCount?: number;

  /**
   * @schema SecurityHubPatchSummary#FailedCount
   */
  readonly failedCount?: number;

  /**
   * @schema SecurityHubPatchSummary#InstalledOtherCount
   */
  readonly installedOtherCount?: number;

  /**
   * @schema SecurityHubPatchSummary#InstalledRejectedCount
   */
  readonly installedRejectedCount?: number;

  /**
   * @schema SecurityHubPatchSummary#InstalledPendingReboot
   */
  readonly installedPendingReboot?: number;

  /**
   * @schema SecurityHubPatchSummary#OperationStartTime
   */
  readonly operationStartTime?: string;

  /**
   * @schema SecurityHubPatchSummary#OperationEndTime
   */
  readonly operationEndTime?: string;

  /**
   * @schema SecurityHubPatchSummary#RebootOption
   */
  readonly rebootOption?: string;

  /**
   * @schema SecurityHubPatchSummary#Operation
   */
  readonly operation?: string;

}

/**
 * Converts an object of type 'SecurityHubPatchSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubPatchSummary(obj: SecurityHubPatchSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'InstalledCount': obj.installedCount,
    'MissingCount': obj.missingCount,
    'FailedCount': obj.failedCount,
    'InstalledOtherCount': obj.installedOtherCount,
    'InstalledRejectedCount': obj.installedRejectedCount,
    'InstalledPendingReboot': obj.installedPendingReboot,
    'OperationStartTime': obj.operationStartTime,
    'OperationEndTime': obj.operationEndTime,
    'RebootOption': obj.rebootOption,
    'Operation': obj.operation,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAction
 */
export interface SecurityHubAction {
  /**
   * @schema SecurityHubAction#ActionType
   */
  readonly actionType?: string;

  /**
   * @schema SecurityHubAction#NetworkConnectionAction
   */
  readonly networkConnectionAction?: SecurityHubNetworkConnectionAction;

  /**
   * @schema SecurityHubAction#AwsApiCallAction
   */
  readonly awsApiCallAction?: SecurityHubAwsApiCallAction;

  /**
   * @schema SecurityHubAction#DnsRequestAction
   */
  readonly dnsRequestAction?: SecurityHubDnsRequestAction;

  /**
   * @schema SecurityHubAction#PortProbeAction
   */
  readonly portProbeAction?: SecurityHubPortProbeAction;

}

/**
 * Converts an object of type 'SecurityHubAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAction(obj: SecurityHubAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ActionType': obj.actionType,
    'NetworkConnectionAction': toJson_SecurityHubNetworkConnectionAction(obj.networkConnectionAction),
    'AwsApiCallAction': toJson_SecurityHubAwsApiCallAction(obj.awsApiCallAction),
    'DnsRequestAction': toJson_SecurityHubDnsRequestAction(obj.dnsRequestAction),
    'PortProbeAction': toJson_SecurityHubPortProbeAction(obj.portProbeAction),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubFindingProviderFields
 */
export interface SecurityHubFindingProviderFields {
  /**
   * @schema SecurityHubFindingProviderFields#Confidence
   */
  readonly confidence?: number;

  /**
   * @schema SecurityHubFindingProviderFields#Criticality
   */
  readonly criticality?: number;

  /**
   * @schema SecurityHubFindingProviderFields#RelatedFindings
   */
  readonly relatedFindings?: SecurityHubRelatedFinding[];

  /**
   * @schema SecurityHubFindingProviderFields#Severity
   */
  readonly severity?: SecurityHubFindingProviderSeverity;

  /**
   * @schema SecurityHubFindingProviderFields#Types
   */
  readonly types?: string[];

}

/**
 * Converts an object of type 'SecurityHubFindingProviderFields' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubFindingProviderFields(obj: SecurityHubFindingProviderFields | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Confidence': obj.confidence,
    'Criticality': obj.criticality,
    'RelatedFindings': obj.relatedFindings?.map(y => toJson_SecurityHubRelatedFinding(y)),
    'Severity': toJson_SecurityHubFindingProviderSeverity(obj.severity),
    'Types': obj.types?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubStringFilter
 */
export interface SecurityHubStringFilter {
  /**
   * @schema SecurityHubStringFilter#Value
   */
  readonly value?: string;

  /**
   * @schema SecurityHubStringFilter#Comparison
   */
  readonly comparison?: string;

}

/**
 * Converts an object of type 'SecurityHubStringFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubStringFilter(obj: SecurityHubStringFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Value': obj.value,
    'Comparison': obj.comparison,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubDateFilter
 */
export interface SecurityHubDateFilter {
  /**
   * @schema SecurityHubDateFilter#Start
   */
  readonly start?: string;

  /**
   * @schema SecurityHubDateFilter#End
   */
  readonly end?: string;

  /**
   * @schema SecurityHubDateFilter#DateRange
   */
  readonly dateRange?: SecurityHubDateRange;

}

/**
 * Converts an object of type 'SecurityHubDateFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubDateFilter(obj: SecurityHubDateFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Start': obj.start,
    'End': obj.end,
    'DateRange': toJson_SecurityHubDateRange(obj.dateRange),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubNumberFilter
 */
export interface SecurityHubNumberFilter {
  /**
   * @schema SecurityHubNumberFilter#Gte
   */
  readonly gte?: number;

  /**
   * @schema SecurityHubNumberFilter#Lte
   */
  readonly lte?: number;

  /**
   * @schema SecurityHubNumberFilter#Eq
   */
  readonly eq?: number;

}

/**
 * Converts an object of type 'SecurityHubNumberFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubNumberFilter(obj: SecurityHubNumberFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Gte': obj.gte,
    'Lte': obj.lte,
    'Eq': obj.eq,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubMapFilter
 */
export interface SecurityHubMapFilter {
  /**
   * @schema SecurityHubMapFilter#Key
   */
  readonly key?: string;

  /**
   * @schema SecurityHubMapFilter#Value
   */
  readonly value?: string;

  /**
   * @schema SecurityHubMapFilter#Comparison
   */
  readonly comparison?: string;

}

/**
 * Converts an object of type 'SecurityHubMapFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubMapFilter(obj: SecurityHubMapFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Value': obj.value,
    'Comparison': obj.comparison,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubIpFilter
 */
export interface SecurityHubIpFilter {
  /**
   * @schema SecurityHubIpFilter#Cidr
   */
  readonly cidr?: string;

}

/**
 * Converts an object of type 'SecurityHubIpFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubIpFilter(obj: SecurityHubIpFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Cidr': obj.cidr,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubKeywordFilter
 */
export interface SecurityHubKeywordFilter {
  /**
   * @schema SecurityHubKeywordFilter#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'SecurityHubKeywordFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubKeywordFilter(obj: SecurityHubKeywordFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubInsightResultValue
 */
export interface SecurityHubInsightResultValue {
  /**
   * @schema SecurityHubInsightResultValue#GroupByAttributeValue
   */
  readonly groupByAttributeValue?: string;

  /**
   * @schema SecurityHubInsightResultValue#Count
   */
  readonly count?: number;

}

/**
 * Converts an object of type 'SecurityHubInsightResultValue' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubInsightResultValue(obj: SecurityHubInsightResultValue | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupByAttributeValue': obj.groupByAttributeValue,
    'Count': obj.count,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubRecommendation
 */
export interface SecurityHubRecommendation {
  /**
   * @schema SecurityHubRecommendation#Text
   */
  readonly text?: string;

  /**
   * @schema SecurityHubRecommendation#Url
   */
  readonly url?: string;

}

/**
 * Converts an object of type 'SecurityHubRecommendation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubRecommendation(obj: SecurityHubRecommendation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Text': obj.text,
    'Url': obj.url,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubPortRange
 */
export interface SecurityHubPortRange {
  /**
   * @schema SecurityHubPortRange#Begin
   */
  readonly begin?: number;

  /**
   * @schema SecurityHubPortRange#End
   */
  readonly end?: number;

}

/**
 * Converts an object of type 'SecurityHubPortRange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubPortRange(obj: SecurityHubPortRange | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Begin': obj.begin,
    'End': obj.end,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubNetworkHeader
 */
export interface SecurityHubNetworkHeader {
  /**
   * @schema SecurityHubNetworkHeader#Protocol
   */
  readonly protocol?: string;

  /**
   * @schema SecurityHubNetworkHeader#Destination
   */
  readonly destination?: SecurityHubNetworkPathComponentDetails;

  /**
   * @schema SecurityHubNetworkHeader#Source
   */
  readonly source?: SecurityHubNetworkPathComponentDetails;

}

/**
 * Converts an object of type 'SecurityHubNetworkHeader' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubNetworkHeader(obj: SecurityHubNetworkHeader | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Protocol': obj.protocol,
    'Destination': toJson_SecurityHubNetworkPathComponentDetails(obj.destination),
    'Source': toJson_SecurityHubNetworkPathComponentDetails(obj.source),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubDataClassificationDetails
 */
export interface SecurityHubDataClassificationDetails {
  /**
   * @schema SecurityHubDataClassificationDetails#DetailedResultsLocation
   */
  readonly detailedResultsLocation?: string;

  /**
   * @schema SecurityHubDataClassificationDetails#Result
   */
  readonly result?: SecurityHubClassificationResult;

}

/**
 * Converts an object of type 'SecurityHubDataClassificationDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubDataClassificationDetails(obj: SecurityHubDataClassificationDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DetailedResultsLocation': obj.detailedResultsLocation,
    'Result': toJson_SecurityHubClassificationResult(obj.result),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubResourceDetails
 */
export interface SecurityHubResourceDetails {
  /**
   * @schema SecurityHubResourceDetails#AwsAutoScalingAutoScalingGroup
   */
  readonly awsAutoScalingAutoScalingGroup?: SecurityHubAwsAutoScalingAutoScalingGroupDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsCodeBuildProject
   */
  readonly awsCodeBuildProject?: SecurityHubAwsCodeBuildProjectDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsCloudFrontDistribution
   */
  readonly awsCloudFrontDistribution?: SecurityHubAwsCloudFrontDistributionDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsEc2Instance
   */
  readonly awsEc2Instance?: SecurityHubAwsEc2InstanceDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsEc2NetworkInterface
   */
  readonly awsEc2NetworkInterface?: SecurityHubAwsEc2NetworkInterfaceDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsEc2SecurityGroup
   */
  readonly awsEc2SecurityGroup?: SecurityHubAwsEc2SecurityGroupDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsEc2Volume
   */
  readonly awsEc2Volume?: SecurityHubAwsEc2VolumeDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsEc2Vpc
   */
  readonly awsEc2Vpc?: SecurityHubAwsEc2VpcDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsEc2Eip
   */
  readonly awsEc2Eip?: SecurityHubAwsEc2EipDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsEc2Subnet
   */
  readonly awsEc2Subnet?: SecurityHubAwsEc2SubnetDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsEc2NetworkAcl
   */
  readonly awsEc2NetworkAcl?: SecurityHubAwsEc2NetworkAclDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsElbv2LoadBalancer
   */
  readonly awsElbv2LoadBalancer?: SecurityHubAwsElbv2LoadBalancerDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsElasticBeanstalkEnvironment
   */
  readonly awsElasticBeanstalkEnvironment?: SecurityHubAwsElasticBeanstalkEnvironmentDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsElasticsearchDomain
   */
  readonly awsElasticsearchDomain?: SecurityHubAwsElasticsearchDomainDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsS3Bucket
   */
  readonly awsS3Bucket?: SecurityHubAwsS3BucketDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsS3AccountPublicAccessBlock
   */
  readonly awsS3AccountPublicAccessBlock?: SecurityHubAwsS3AccountPublicAccessBlockDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsS3Object
   */
  readonly awsS3Object?: SecurityHubAwsS3ObjectDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsSecretsManagerSecret
   */
  readonly awsSecretsManagerSecret?: SecurityHubAwsSecretsManagerSecretDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsIamAccessKey
   */
  readonly awsIamAccessKey?: SecurityHubAwsIamAccessKeyDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsIamUser
   */
  readonly awsIamUser?: SecurityHubAwsIamUserDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsIamPolicy
   */
  readonly awsIamPolicy?: SecurityHubAwsIamPolicyDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsApiGatewayV2Stage
   */
  readonly awsApiGatewayV2Stage?: SecurityHubAwsApiGatewayV2StageDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsApiGatewayV2Api
   */
  readonly awsApiGatewayV2Api?: SecurityHubAwsApiGatewayV2ApiDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsDynamoDbTable
   */
  readonly awsDynamoDbTable?: SecurityHubAwsDynamoDbTableDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsApiGatewayStage
   */
  readonly awsApiGatewayStage?: SecurityHubAwsApiGatewayStageDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsApiGatewayRestApi
   */
  readonly awsApiGatewayRestApi?: SecurityHubAwsApiGatewayRestApiDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsCloudTrailTrail
   */
  readonly awsCloudTrailTrail?: SecurityHubAwsCloudTrailTrailDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsSsmPatchCompliance
   */
  readonly awsSsmPatchCompliance?: SecurityHubAwsSsmPatchComplianceDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsCertificateManagerCertificate
   */
  readonly awsCertificateManagerCertificate?: SecurityHubAwsCertificateManagerCertificateDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsRedshiftCluster
   */
  readonly awsRedshiftCluster?: SecurityHubAwsRedshiftClusterDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsElbLoadBalancer
   */
  readonly awsElbLoadBalancer?: SecurityHubAwsElbLoadBalancerDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsIamGroup
   */
  readonly awsIamGroup?: SecurityHubAwsIamGroupDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsIamRole
   */
  readonly awsIamRole?: SecurityHubAwsIamRoleDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsKmsKey
   */
  readonly awsKmsKey?: SecurityHubAwsKmsKeyDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsLambdaFunction
   */
  readonly awsLambdaFunction?: SecurityHubAwsLambdaFunctionDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsLambdaLayerVersion
   */
  readonly awsLambdaLayerVersion?: SecurityHubAwsLambdaLayerVersionDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsRdsDbInstance
   */
  readonly awsRdsDbInstance?: SecurityHubAwsRdsDbInstanceDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsSnsTopic
   */
  readonly awsSnsTopic?: SecurityHubAwsSnsTopicDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsSqsQueue
   */
  readonly awsSqsQueue?: SecurityHubAwsSqsQueueDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsWafWebAcl
   */
  readonly awsWafWebAcl?: SecurityHubAwsWafWebAclDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsRdsDbSnapshot
   */
  readonly awsRdsDbSnapshot?: SecurityHubAwsRdsDbSnapshotDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsRdsDbClusterSnapshot
   */
  readonly awsRdsDbClusterSnapshot?: SecurityHubAwsRdsDbClusterSnapshotDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsRdsDbCluster
   */
  readonly awsRdsDbCluster?: SecurityHubAwsRdsDbClusterDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsEcsCluster
   */
  readonly awsEcsCluster?: SecurityHubAwsEcsClusterDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsEcsTaskDefinition
   */
  readonly awsEcsTaskDefinition?: SecurityHubAwsEcsTaskDefinitionDetails;

  /**
   * @schema SecurityHubResourceDetails#Container
   */
  readonly container?: SecurityHubContainerDetails;

  /**
   * @schema SecurityHubResourceDetails#Other
   */
  readonly other?: { [key: string]: string };

  /**
   * @schema SecurityHubResourceDetails#AwsRdsEventSubscription
   */
  readonly awsRdsEventSubscription?: SecurityHubAwsRdsEventSubscriptionDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsEcsService
   */
  readonly awsEcsService?: SecurityHubAwsEcsServiceDetails;

}

/**
 * Converts an object of type 'SecurityHubResourceDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubResourceDetails(obj: SecurityHubResourceDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAutoScalingAutoScalingGroup': toJson_SecurityHubAwsAutoScalingAutoScalingGroupDetails(obj.awsAutoScalingAutoScalingGroup),
    'AwsCodeBuildProject': toJson_SecurityHubAwsCodeBuildProjectDetails(obj.awsCodeBuildProject),
    'AwsCloudFrontDistribution': toJson_SecurityHubAwsCloudFrontDistributionDetails(obj.awsCloudFrontDistribution),
    'AwsEc2Instance': toJson_SecurityHubAwsEc2InstanceDetails(obj.awsEc2Instance),
    'AwsEc2NetworkInterface': toJson_SecurityHubAwsEc2NetworkInterfaceDetails(obj.awsEc2NetworkInterface),
    'AwsEc2SecurityGroup': toJson_SecurityHubAwsEc2SecurityGroupDetails(obj.awsEc2SecurityGroup),
    'AwsEc2Volume': toJson_SecurityHubAwsEc2VolumeDetails(obj.awsEc2Volume),
    'AwsEc2Vpc': toJson_SecurityHubAwsEc2VpcDetails(obj.awsEc2Vpc),
    'AwsEc2Eip': toJson_SecurityHubAwsEc2EipDetails(obj.awsEc2Eip),
    'AwsEc2Subnet': toJson_SecurityHubAwsEc2SubnetDetails(obj.awsEc2Subnet),
    'AwsEc2NetworkAcl': toJson_SecurityHubAwsEc2NetworkAclDetails(obj.awsEc2NetworkAcl),
    'AwsElbv2LoadBalancer': toJson_SecurityHubAwsElbv2LoadBalancerDetails(obj.awsElbv2LoadBalancer),
    'AwsElasticBeanstalkEnvironment': toJson_SecurityHubAwsElasticBeanstalkEnvironmentDetails(obj.awsElasticBeanstalkEnvironment),
    'AwsElasticsearchDomain': toJson_SecurityHubAwsElasticsearchDomainDetails(obj.awsElasticsearchDomain),
    'AwsS3Bucket': toJson_SecurityHubAwsS3BucketDetails(obj.awsS3Bucket),
    'AwsS3AccountPublicAccessBlock': toJson_SecurityHubAwsS3AccountPublicAccessBlockDetails(obj.awsS3AccountPublicAccessBlock),
    'AwsS3Object': toJson_SecurityHubAwsS3ObjectDetails(obj.awsS3Object),
    'AwsSecretsManagerSecret': toJson_SecurityHubAwsSecretsManagerSecretDetails(obj.awsSecretsManagerSecret),
    'AwsIamAccessKey': toJson_SecurityHubAwsIamAccessKeyDetails(obj.awsIamAccessKey),
    'AwsIamUser': toJson_SecurityHubAwsIamUserDetails(obj.awsIamUser),
    'AwsIamPolicy': toJson_SecurityHubAwsIamPolicyDetails(obj.awsIamPolicy),
    'AwsApiGatewayV2Stage': toJson_SecurityHubAwsApiGatewayV2StageDetails(obj.awsApiGatewayV2Stage),
    'AwsApiGatewayV2Api': toJson_SecurityHubAwsApiGatewayV2ApiDetails(obj.awsApiGatewayV2Api),
    'AwsDynamoDbTable': toJson_SecurityHubAwsDynamoDbTableDetails(obj.awsDynamoDbTable),
    'AwsApiGatewayStage': toJson_SecurityHubAwsApiGatewayStageDetails(obj.awsApiGatewayStage),
    'AwsApiGatewayRestApi': toJson_SecurityHubAwsApiGatewayRestApiDetails(obj.awsApiGatewayRestApi),
    'AwsCloudTrailTrail': toJson_SecurityHubAwsCloudTrailTrailDetails(obj.awsCloudTrailTrail),
    'AwsSsmPatchCompliance': toJson_SecurityHubAwsSsmPatchComplianceDetails(obj.awsSsmPatchCompliance),
    'AwsCertificateManagerCertificate': toJson_SecurityHubAwsCertificateManagerCertificateDetails(obj.awsCertificateManagerCertificate),
    'AwsRedshiftCluster': toJson_SecurityHubAwsRedshiftClusterDetails(obj.awsRedshiftCluster),
    'AwsElbLoadBalancer': toJson_SecurityHubAwsElbLoadBalancerDetails(obj.awsElbLoadBalancer),
    'AwsIamGroup': toJson_SecurityHubAwsIamGroupDetails(obj.awsIamGroup),
    'AwsIamRole': toJson_SecurityHubAwsIamRoleDetails(obj.awsIamRole),
    'AwsKmsKey': toJson_SecurityHubAwsKmsKeyDetails(obj.awsKmsKey),
    'AwsLambdaFunction': toJson_SecurityHubAwsLambdaFunctionDetails(obj.awsLambdaFunction),
    'AwsLambdaLayerVersion': toJson_SecurityHubAwsLambdaLayerVersionDetails(obj.awsLambdaLayerVersion),
    'AwsRdsDbInstance': toJson_SecurityHubAwsRdsDbInstanceDetails(obj.awsRdsDbInstance),
    'AwsSnsTopic': toJson_SecurityHubAwsSnsTopicDetails(obj.awsSnsTopic),
    'AwsSqsQueue': toJson_SecurityHubAwsSqsQueueDetails(obj.awsSqsQueue),
    'AwsWafWebAcl': toJson_SecurityHubAwsWafWebAclDetails(obj.awsWafWebAcl),
    'AwsRdsDbSnapshot': toJson_SecurityHubAwsRdsDbSnapshotDetails(obj.awsRdsDbSnapshot),
    'AwsRdsDbClusterSnapshot': toJson_SecurityHubAwsRdsDbClusterSnapshotDetails(obj.awsRdsDbClusterSnapshot),
    'AwsRdsDbCluster': toJson_SecurityHubAwsRdsDbClusterDetails(obj.awsRdsDbCluster),
    'AwsEcsCluster': toJson_SecurityHubAwsEcsClusterDetails(obj.awsEcsCluster),
    'AwsEcsTaskDefinition': toJson_SecurityHubAwsEcsTaskDefinitionDetails(obj.awsEcsTaskDefinition),
    'Container': toJson_SecurityHubContainerDetails(obj.container),
    'Other': ((obj.other) === undefined) ? undefined : (Object.entries(obj.other).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'AwsRdsEventSubscription': toJson_SecurityHubAwsRdsEventSubscriptionDetails(obj.awsRdsEventSubscription),
    'AwsEcsService': toJson_SecurityHubAwsEcsServiceDetails(obj.awsEcsService),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubStatusReason
 */
export interface SecurityHubStatusReason {
  /**
   * @schema SecurityHubStatusReason#ReasonCode
   */
  readonly reasonCode?: string;

  /**
   * @schema SecurityHubStatusReason#Description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'SecurityHubStatusReason' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubStatusReason(obj: SecurityHubStatusReason | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReasonCode': obj.reasonCode,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubSoftwarePackage
 */
export interface SecurityHubSoftwarePackage {
  /**
   * @schema SecurityHubSoftwarePackage#Name
   */
  readonly name?: string;

  /**
   * @schema SecurityHubSoftwarePackage#Version
   */
  readonly version?: string;

  /**
   * @schema SecurityHubSoftwarePackage#Epoch
   */
  readonly epoch?: string;

  /**
   * @schema SecurityHubSoftwarePackage#Release
   */
  readonly release?: string;

  /**
   * @schema SecurityHubSoftwarePackage#Architecture
   */
  readonly architecture?: string;

}

/**
 * Converts an object of type 'SecurityHubSoftwarePackage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubSoftwarePackage(obj: SecurityHubSoftwarePackage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Version': obj.version,
    'Epoch': obj.epoch,
    'Release': obj.release,
    'Architecture': obj.architecture,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubCvss
 */
export interface SecurityHubCvss {
  /**
   * @schema SecurityHubCvss#Version
   */
  readonly version?: string;

  /**
   * @schema SecurityHubCvss#BaseScore
   */
  readonly baseScore?: number;

  /**
   * @schema SecurityHubCvss#BaseVector
   */
  readonly baseVector?: string;

}

/**
 * Converts an object of type 'SecurityHubCvss' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubCvss(obj: SecurityHubCvss | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Version': obj.version,
    'BaseScore': obj.baseScore,
    'BaseVector': obj.baseVector,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubVulnerabilityVendor
 */
export interface SecurityHubVulnerabilityVendor {
  /**
   * @schema SecurityHubVulnerabilityVendor#Name
   */
  readonly name?: string;

  /**
   * @schema SecurityHubVulnerabilityVendor#Url
   */
  readonly url?: string;

  /**
   * @schema SecurityHubVulnerabilityVendor#VendorSeverity
   */
  readonly vendorSeverity?: string;

  /**
   * @schema SecurityHubVulnerabilityVendor#VendorCreatedAt
   */
  readonly vendorCreatedAt?: string;

  /**
   * @schema SecurityHubVulnerabilityVendor#VendorUpdatedAt
   */
  readonly vendorUpdatedAt?: string;

}

/**
 * Converts an object of type 'SecurityHubVulnerabilityVendor' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubVulnerabilityVendor(obj: SecurityHubVulnerabilityVendor | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Url': obj.url,
    'VendorSeverity': obj.vendorSeverity,
    'VendorCreatedAt': obj.vendorCreatedAt,
    'VendorUpdatedAt': obj.vendorUpdatedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubNetworkConnectionAction
 */
export interface SecurityHubNetworkConnectionAction {
  /**
   * @schema SecurityHubNetworkConnectionAction#ConnectionDirection
   */
  readonly connectionDirection?: string;

  /**
   * @schema SecurityHubNetworkConnectionAction#RemoteIpDetails
   */
  readonly remoteIpDetails?: SecurityHubActionRemoteIpDetails;

  /**
   * @schema SecurityHubNetworkConnectionAction#RemotePortDetails
   */
  readonly remotePortDetails?: SecurityHubActionRemotePortDetails;

  /**
   * @schema SecurityHubNetworkConnectionAction#LocalPortDetails
   */
  readonly localPortDetails?: SecurityHubActionLocalPortDetails;

  /**
   * @schema SecurityHubNetworkConnectionAction#Protocol
   */
  readonly protocol?: string;

  /**
   * @schema SecurityHubNetworkConnectionAction#Blocked
   */
  readonly blocked?: boolean;

}

/**
 * Converts an object of type 'SecurityHubNetworkConnectionAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubNetworkConnectionAction(obj: SecurityHubNetworkConnectionAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConnectionDirection': obj.connectionDirection,
    'RemoteIpDetails': toJson_SecurityHubActionRemoteIpDetails(obj.remoteIpDetails),
    'RemotePortDetails': toJson_SecurityHubActionRemotePortDetails(obj.remotePortDetails),
    'LocalPortDetails': toJson_SecurityHubActionLocalPortDetails(obj.localPortDetails),
    'Protocol': obj.protocol,
    'Blocked': obj.blocked,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsApiCallAction
 */
export interface SecurityHubAwsApiCallAction {
  /**
   * @schema SecurityHubAwsApiCallAction#Api
   */
  readonly api?: string;

  /**
   * @schema SecurityHubAwsApiCallAction#ServiceName
   */
  readonly serviceName?: string;

  /**
   * @schema SecurityHubAwsApiCallAction#CallerType
   */
  readonly callerType?: string;

  /**
   * @schema SecurityHubAwsApiCallAction#RemoteIpDetails
   */
  readonly remoteIpDetails?: SecurityHubActionRemoteIpDetails;

  /**
   * @schema SecurityHubAwsApiCallAction#DomainDetails
   */
  readonly domainDetails?: SecurityHubAwsApiCallActionDomainDetails;

  /**
   * @schema SecurityHubAwsApiCallAction#AffectedResources
   */
  readonly affectedResources?: { [key: string]: string };

  /**
   * @schema SecurityHubAwsApiCallAction#FirstSeen
   */
  readonly firstSeen?: string;

  /**
   * @schema SecurityHubAwsApiCallAction#LastSeen
   */
  readonly lastSeen?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsApiCallAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsApiCallAction(obj: SecurityHubAwsApiCallAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Api': obj.api,
    'ServiceName': obj.serviceName,
    'CallerType': obj.callerType,
    'RemoteIpDetails': toJson_SecurityHubActionRemoteIpDetails(obj.remoteIpDetails),
    'DomainDetails': toJson_SecurityHubAwsApiCallActionDomainDetails(obj.domainDetails),
    'AffectedResources': ((obj.affectedResources) === undefined) ? undefined : (Object.entries(obj.affectedResources).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'FirstSeen': obj.firstSeen,
    'LastSeen': obj.lastSeen,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubDnsRequestAction
 */
export interface SecurityHubDnsRequestAction {
  /**
   * @schema SecurityHubDnsRequestAction#Domain
   */
  readonly domain?: string;

  /**
   * @schema SecurityHubDnsRequestAction#Protocol
   */
  readonly protocol?: string;

  /**
   * @schema SecurityHubDnsRequestAction#Blocked
   */
  readonly blocked?: boolean;

}

/**
 * Converts an object of type 'SecurityHubDnsRequestAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubDnsRequestAction(obj: SecurityHubDnsRequestAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Domain': obj.domain,
    'Protocol': obj.protocol,
    'Blocked': obj.blocked,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubPortProbeAction
 */
export interface SecurityHubPortProbeAction {
  /**
   * @schema SecurityHubPortProbeAction#PortProbeDetails
   */
  readonly portProbeDetails?: SecurityHubPortProbeDetail[];

  /**
   * @schema SecurityHubPortProbeAction#Blocked
   */
  readonly blocked?: boolean;

}

/**
 * Converts an object of type 'SecurityHubPortProbeAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubPortProbeAction(obj: SecurityHubPortProbeAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PortProbeDetails': obj.portProbeDetails?.map(y => toJson_SecurityHubPortProbeDetail(y)),
    'Blocked': obj.blocked,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubFindingProviderSeverity
 */
export interface SecurityHubFindingProviderSeverity {
  /**
   * @schema SecurityHubFindingProviderSeverity#Label
   */
  readonly label?: string;

  /**
   * @schema SecurityHubFindingProviderSeverity#Original
   */
  readonly original?: string;

}

/**
 * Converts an object of type 'SecurityHubFindingProviderSeverity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubFindingProviderSeverity(obj: SecurityHubFindingProviderSeverity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Label': obj.label,
    'Original': obj.original,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubDateRange
 */
export interface SecurityHubDateRange {
  /**
   * @schema SecurityHubDateRange#Value
   */
  readonly value?: number;

  /**
   * @schema SecurityHubDateRange#Unit
   */
  readonly unit?: string;

}

/**
 * Converts an object of type 'SecurityHubDateRange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubDateRange(obj: SecurityHubDateRange | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Value': obj.value,
    'Unit': obj.unit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubNetworkPathComponentDetails
 */
export interface SecurityHubNetworkPathComponentDetails {
  /**
   * @schema SecurityHubNetworkPathComponentDetails#Address
   */
  readonly address?: string[];

  /**
   * @schema SecurityHubNetworkPathComponentDetails#PortRanges
   */
  readonly portRanges?: SecurityHubPortRange[];

}

/**
 * Converts an object of type 'SecurityHubNetworkPathComponentDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubNetworkPathComponentDetails(obj: SecurityHubNetworkPathComponentDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Address': obj.address?.map(y => y),
    'PortRanges': obj.portRanges?.map(y => toJson_SecurityHubPortRange(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubClassificationResult
 */
export interface SecurityHubClassificationResult {
  /**
   * @schema SecurityHubClassificationResult#MimeType
   */
  readonly mimeType?: string;

  /**
   * @schema SecurityHubClassificationResult#SizeClassified
   */
  readonly sizeClassified?: number;

  /**
   * @schema SecurityHubClassificationResult#AdditionalOccurrences
   */
  readonly additionalOccurrences?: boolean;

  /**
   * @schema SecurityHubClassificationResult#Status
   */
  readonly status?: SecurityHubClassificationStatus;

  /**
   * @schema SecurityHubClassificationResult#SensitiveData
   */
  readonly sensitiveData?: SecurityHubSensitiveDataResult[];

  /**
   * @schema SecurityHubClassificationResult#CustomDataIdentifiers
   */
  readonly customDataIdentifiers?: SecurityHubCustomDataIdentifiersResult;

}

/**
 * Converts an object of type 'SecurityHubClassificationResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubClassificationResult(obj: SecurityHubClassificationResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MimeType': obj.mimeType,
    'SizeClassified': obj.sizeClassified,
    'AdditionalOccurrences': obj.additionalOccurrences,
    'Status': toJson_SecurityHubClassificationStatus(obj.status),
    'SensitiveData': obj.sensitiveData?.map(y => toJson_SecurityHubSensitiveDataResult(y)),
    'CustomDataIdentifiers': toJson_SecurityHubCustomDataIdentifiersResult(obj.customDataIdentifiers),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsAutoScalingAutoScalingGroupDetails
 */
export interface SecurityHubAwsAutoScalingAutoScalingGroupDetails {
  /**
   * @schema SecurityHubAwsAutoScalingAutoScalingGroupDetails#LaunchConfigurationName
   */
  readonly launchConfigurationName?: string;

  /**
   * @schema SecurityHubAwsAutoScalingAutoScalingGroupDetails#LoadBalancerNames
   */
  readonly loadBalancerNames?: string[];

  /**
   * @schema SecurityHubAwsAutoScalingAutoScalingGroupDetails#HealthCheckType
   */
  readonly healthCheckType?: string;

  /**
   * @schema SecurityHubAwsAutoScalingAutoScalingGroupDetails#HealthCheckGracePeriod
   */
  readonly healthCheckGracePeriod?: number;

  /**
   * @schema SecurityHubAwsAutoScalingAutoScalingGroupDetails#CreatedTime
   */
  readonly createdTime?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsAutoScalingAutoScalingGroupDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsAutoScalingAutoScalingGroupDetails(obj: SecurityHubAwsAutoScalingAutoScalingGroupDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LaunchConfigurationName': obj.launchConfigurationName,
    'LoadBalancerNames': obj.loadBalancerNames?.map(y => y),
    'HealthCheckType': obj.healthCheckType,
    'HealthCheckGracePeriod': obj.healthCheckGracePeriod,
    'CreatedTime': obj.createdTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsCodeBuildProjectDetails
 */
export interface SecurityHubAwsCodeBuildProjectDetails {
  /**
   * @schema SecurityHubAwsCodeBuildProjectDetails#EncryptionKey
   */
  readonly encryptionKey?: string;

  /**
   * @schema SecurityHubAwsCodeBuildProjectDetails#Environment
   */
  readonly environment?: SecurityHubAwsCodeBuildProjectEnvironment;

  /**
   * @schema SecurityHubAwsCodeBuildProjectDetails#Name
   */
  readonly name?: string;

  /**
   * @schema SecurityHubAwsCodeBuildProjectDetails#Source
   */
  readonly source?: SecurityHubAwsCodeBuildProjectSource;

  /**
   * @schema SecurityHubAwsCodeBuildProjectDetails#ServiceRole
   */
  readonly serviceRole?: string;

  /**
   * @schema SecurityHubAwsCodeBuildProjectDetails#VpcConfig
   */
  readonly vpcConfig?: SecurityHubAwsCodeBuildProjectVpcConfig;

}

/**
 * Converts an object of type 'SecurityHubAwsCodeBuildProjectDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsCodeBuildProjectDetails(obj: SecurityHubAwsCodeBuildProjectDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EncryptionKey': obj.encryptionKey,
    'Environment': toJson_SecurityHubAwsCodeBuildProjectEnvironment(obj.environment),
    'Name': obj.name,
    'Source': toJson_SecurityHubAwsCodeBuildProjectSource(obj.source),
    'ServiceRole': obj.serviceRole,
    'VpcConfig': toJson_SecurityHubAwsCodeBuildProjectVpcConfig(obj.vpcConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsCloudFrontDistributionDetails
 */
export interface SecurityHubAwsCloudFrontDistributionDetails {
  /**
   * @schema SecurityHubAwsCloudFrontDistributionDetails#CacheBehaviors
   */
  readonly cacheBehaviors?: SecurityHubAwsCloudFrontDistributionCacheBehaviors;

  /**
   * @schema SecurityHubAwsCloudFrontDistributionDetails#DefaultCacheBehavior
   */
  readonly defaultCacheBehavior?: SecurityHubAwsCloudFrontDistributionDefaultCacheBehavior;

  /**
   * @schema SecurityHubAwsCloudFrontDistributionDetails#DefaultRootObject
   */
  readonly defaultRootObject?: string;

  /**
   * @schema SecurityHubAwsCloudFrontDistributionDetails#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema SecurityHubAwsCloudFrontDistributionDetails#ETag
   */
  readonly eTag?: string;

  /**
   * @schema SecurityHubAwsCloudFrontDistributionDetails#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema SecurityHubAwsCloudFrontDistributionDetails#Logging
   */
  readonly logging?: SecurityHubAwsCloudFrontDistributionLogging;

  /**
   * @schema SecurityHubAwsCloudFrontDistributionDetails#Origins
   */
  readonly origins?: SecurityHubAwsCloudFrontDistributionOrigins;

  /**
   * @schema SecurityHubAwsCloudFrontDistributionDetails#OriginGroups
   */
  readonly originGroups?: SecurityHubAwsCloudFrontDistributionOriginGroups;

  /**
   * @schema SecurityHubAwsCloudFrontDistributionDetails#Status
   */
  readonly status?: string;

  /**
   * @schema SecurityHubAwsCloudFrontDistributionDetails#WebAclId
   */
  readonly webAclId?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsCloudFrontDistributionDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsCloudFrontDistributionDetails(obj: SecurityHubAwsCloudFrontDistributionDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CacheBehaviors': toJson_SecurityHubAwsCloudFrontDistributionCacheBehaviors(obj.cacheBehaviors),
    'DefaultCacheBehavior': toJson_SecurityHubAwsCloudFrontDistributionDefaultCacheBehavior(obj.defaultCacheBehavior),
    'DefaultRootObject': obj.defaultRootObject,
    'DomainName': obj.domainName,
    'ETag': obj.eTag,
    'LastModifiedTime': obj.lastModifiedTime,
    'Logging': toJson_SecurityHubAwsCloudFrontDistributionLogging(obj.logging),
    'Origins': toJson_SecurityHubAwsCloudFrontDistributionOrigins(obj.origins),
    'OriginGroups': toJson_SecurityHubAwsCloudFrontDistributionOriginGroups(obj.originGroups),
    'Status': obj.status,
    'WebAclId': obj.webAclId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEc2InstanceDetails
 */
export interface SecurityHubAwsEc2InstanceDetails {
  /**
   * @schema SecurityHubAwsEc2InstanceDetails#Type
   */
  readonly type?: string;

  /**
   * @schema SecurityHubAwsEc2InstanceDetails#ImageId
   */
  readonly imageId?: string;

  /**
   * @schema SecurityHubAwsEc2InstanceDetails#IpV4Addresses
   */
  readonly ipV4Addresses?: string[];

  /**
   * @schema SecurityHubAwsEc2InstanceDetails#IpV6Addresses
   */
  readonly ipV6Addresses?: string[];

  /**
   * @schema SecurityHubAwsEc2InstanceDetails#KeyName
   */
  readonly keyName?: string;

  /**
   * @schema SecurityHubAwsEc2InstanceDetails#IamInstanceProfileArn
   */
  readonly iamInstanceProfileArn?: string;

  /**
   * @schema SecurityHubAwsEc2InstanceDetails#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema SecurityHubAwsEc2InstanceDetails#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema SecurityHubAwsEc2InstanceDetails#LaunchedAt
   */
  readonly launchedAt?: string;

  /**
   * @schema SecurityHubAwsEc2InstanceDetails#NetworkInterfaces
   */
  readonly networkInterfaces?: SecurityHubAwsEc2InstanceNetworkInterfacesDetails[];

}

/**
 * Converts an object of type 'SecurityHubAwsEc2InstanceDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEc2InstanceDetails(obj: SecurityHubAwsEc2InstanceDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'ImageId': obj.imageId,
    'IpV4Addresses': obj.ipV4Addresses?.map(y => y),
    'IpV6Addresses': obj.ipV6Addresses?.map(y => y),
    'KeyName': obj.keyName,
    'IamInstanceProfileArn': obj.iamInstanceProfileArn,
    'VpcId': obj.vpcId,
    'SubnetId': obj.subnetId,
    'LaunchedAt': obj.launchedAt,
    'NetworkInterfaces': obj.networkInterfaces?.map(y => toJson_SecurityHubAwsEc2InstanceNetworkInterfacesDetails(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEc2NetworkInterfaceDetails
 */
export interface SecurityHubAwsEc2NetworkInterfaceDetails {
  /**
   * @schema SecurityHubAwsEc2NetworkInterfaceDetails#Attachment
   */
  readonly attachment?: SecurityHubAwsEc2NetworkInterfaceAttachment;

  /**
   * @schema SecurityHubAwsEc2NetworkInterfaceDetails#NetworkInterfaceId
   */
  readonly networkInterfaceId?: string;

  /**
   * @schema SecurityHubAwsEc2NetworkInterfaceDetails#SecurityGroups
   */
  readonly securityGroups?: SecurityHubAwsEc2NetworkInterfaceSecurityGroup[];

  /**
   * @schema SecurityHubAwsEc2NetworkInterfaceDetails#SourceDestCheck
   */
  readonly sourceDestCheck?: boolean;

  /**
   * @schema SecurityHubAwsEc2NetworkInterfaceDetails#IpV6Addresses
   */
  readonly ipV6Addresses?: SecurityHubAwsEc2NetworkInterfaceIpV6AddressDetail[];

  /**
   * @schema SecurityHubAwsEc2NetworkInterfaceDetails#PrivateIpAddresses
   */
  readonly privateIpAddresses?: SecurityHubAwsEc2NetworkInterfacePrivateIpAddressDetail[];

  /**
   * @schema SecurityHubAwsEc2NetworkInterfaceDetails#PublicDnsName
   */
  readonly publicDnsName?: string;

  /**
   * @schema SecurityHubAwsEc2NetworkInterfaceDetails#PublicIp
   */
  readonly publicIp?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsEc2NetworkInterfaceDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEc2NetworkInterfaceDetails(obj: SecurityHubAwsEc2NetworkInterfaceDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Attachment': toJson_SecurityHubAwsEc2NetworkInterfaceAttachment(obj.attachment),
    'NetworkInterfaceId': obj.networkInterfaceId,
    'SecurityGroups': obj.securityGroups?.map(y => toJson_SecurityHubAwsEc2NetworkInterfaceSecurityGroup(y)),
    'SourceDestCheck': obj.sourceDestCheck,
    'IpV6Addresses': obj.ipV6Addresses?.map(y => toJson_SecurityHubAwsEc2NetworkInterfaceIpV6AddressDetail(y)),
    'PrivateIpAddresses': obj.privateIpAddresses?.map(y => toJson_SecurityHubAwsEc2NetworkInterfacePrivateIpAddressDetail(y)),
    'PublicDnsName': obj.publicDnsName,
    'PublicIp': obj.publicIp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEc2SecurityGroupDetails
 */
export interface SecurityHubAwsEc2SecurityGroupDetails {
  /**
   * @schema SecurityHubAwsEc2SecurityGroupDetails#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema SecurityHubAwsEc2SecurityGroupDetails#GroupId
   */
  readonly groupId?: string;

  /**
   * @schema SecurityHubAwsEc2SecurityGroupDetails#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema SecurityHubAwsEc2SecurityGroupDetails#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema SecurityHubAwsEc2SecurityGroupDetails#IpPermissions
   */
  readonly ipPermissions?: SecurityHubAwsEc2SecurityGroupIpPermission[];

  /**
   * @schema SecurityHubAwsEc2SecurityGroupDetails#IpPermissionsEgress
   */
  readonly ipPermissionsEgress?: SecurityHubAwsEc2SecurityGroupIpPermission[];

}

/**
 * Converts an object of type 'SecurityHubAwsEc2SecurityGroupDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEc2SecurityGroupDetails(obj: SecurityHubAwsEc2SecurityGroupDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupName': obj.groupName,
    'GroupId': obj.groupId,
    'OwnerId': obj.ownerId,
    'VpcId': obj.vpcId,
    'IpPermissions': obj.ipPermissions?.map(y => toJson_SecurityHubAwsEc2SecurityGroupIpPermission(y)),
    'IpPermissionsEgress': obj.ipPermissionsEgress?.map(y => toJson_SecurityHubAwsEc2SecurityGroupIpPermission(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEc2VolumeDetails
 */
export interface SecurityHubAwsEc2VolumeDetails {
  /**
   * @schema SecurityHubAwsEc2VolumeDetails#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema SecurityHubAwsEc2VolumeDetails#Encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema SecurityHubAwsEc2VolumeDetails#Size
   */
  readonly size?: number;

  /**
   * @schema SecurityHubAwsEc2VolumeDetails#SnapshotId
   */
  readonly snapshotId?: string;

  /**
   * @schema SecurityHubAwsEc2VolumeDetails#Status
   */
  readonly status?: string;

  /**
   * @schema SecurityHubAwsEc2VolumeDetails#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema SecurityHubAwsEc2VolumeDetails#Attachments
   */
  readonly attachments?: SecurityHubAwsEc2VolumeAttachment[];

}

/**
 * Converts an object of type 'SecurityHubAwsEc2VolumeDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEc2VolumeDetails(obj: SecurityHubAwsEc2VolumeDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CreateTime': obj.createTime,
    'Encrypted': obj.encrypted,
    'Size': obj.size,
    'SnapshotId': obj.snapshotId,
    'Status': obj.status,
    'KmsKeyId': obj.kmsKeyId,
    'Attachments': obj.attachments?.map(y => toJson_SecurityHubAwsEc2VolumeAttachment(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEc2VpcDetails
 */
export interface SecurityHubAwsEc2VpcDetails {
  /**
   * @schema SecurityHubAwsEc2VpcDetails#CidrBlockAssociationSet
   */
  readonly cidrBlockAssociationSet?: SecurityHubCidrBlockAssociation[];

  /**
   * @schema SecurityHubAwsEc2VpcDetails#Ipv6CidrBlockAssociationSet
   */
  readonly ipv6CidrBlockAssociationSet?: SecurityHubIpv6CidrBlockAssociation[];

  /**
   * @schema SecurityHubAwsEc2VpcDetails#DhcpOptionsId
   */
  readonly dhcpOptionsId?: string;

  /**
   * @schema SecurityHubAwsEc2VpcDetails#State
   */
  readonly state?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsEc2VpcDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEc2VpcDetails(obj: SecurityHubAwsEc2VpcDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CidrBlockAssociationSet': obj.cidrBlockAssociationSet?.map(y => toJson_SecurityHubCidrBlockAssociation(y)),
    'Ipv6CidrBlockAssociationSet': obj.ipv6CidrBlockAssociationSet?.map(y => toJson_SecurityHubIpv6CidrBlockAssociation(y)),
    'DhcpOptionsId': obj.dhcpOptionsId,
    'State': obj.state,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEc2EipDetails
 */
export interface SecurityHubAwsEc2EipDetails {
  /**
   * @schema SecurityHubAwsEc2EipDetails#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema SecurityHubAwsEc2EipDetails#PublicIp
   */
  readonly publicIp?: string;

  /**
   * @schema SecurityHubAwsEc2EipDetails#AllocationId
   */
  readonly allocationId?: string;

  /**
   * @schema SecurityHubAwsEc2EipDetails#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema SecurityHubAwsEc2EipDetails#Domain
   */
  readonly domain?: string;

  /**
   * @schema SecurityHubAwsEc2EipDetails#PublicIpv4Pool
   */
  readonly publicIpv4Pool?: string;

  /**
   * @schema SecurityHubAwsEc2EipDetails#NetworkBorderGroup
   */
  readonly networkBorderGroup?: string;

  /**
   * @schema SecurityHubAwsEc2EipDetails#NetworkInterfaceId
   */
  readonly networkInterfaceId?: string;

  /**
   * @schema SecurityHubAwsEc2EipDetails#NetworkInterfaceOwnerId
   */
  readonly networkInterfaceOwnerId?: string;

  /**
   * @schema SecurityHubAwsEc2EipDetails#PrivateIpAddress
   */
  readonly privateIpAddress?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsEc2EipDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEc2EipDetails(obj: SecurityHubAwsEc2EipDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'PublicIp': obj.publicIp,
    'AllocationId': obj.allocationId,
    'AssociationId': obj.associationId,
    'Domain': obj.domain,
    'PublicIpv4Pool': obj.publicIpv4Pool,
    'NetworkBorderGroup': obj.networkBorderGroup,
    'NetworkInterfaceId': obj.networkInterfaceId,
    'NetworkInterfaceOwnerId': obj.networkInterfaceOwnerId,
    'PrivateIpAddress': obj.privateIpAddress,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEc2SubnetDetails
 */
export interface SecurityHubAwsEc2SubnetDetails {
  /**
   * @schema SecurityHubAwsEc2SubnetDetails#AssignIpv6AddressOnCreation
   */
  readonly assignIpv6AddressOnCreation?: boolean;

  /**
   * @schema SecurityHubAwsEc2SubnetDetails#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema SecurityHubAwsEc2SubnetDetails#AvailabilityZoneId
   */
  readonly availabilityZoneId?: string;

  /**
   * @schema SecurityHubAwsEc2SubnetDetails#AvailableIpAddressCount
   */
  readonly availableIpAddressCount?: number;

  /**
   * @schema SecurityHubAwsEc2SubnetDetails#CidrBlock
   */
  readonly cidrBlock?: string;

  /**
   * @schema SecurityHubAwsEc2SubnetDetails#DefaultForAz
   */
  readonly defaultForAz?: boolean;

  /**
   * @schema SecurityHubAwsEc2SubnetDetails#MapPublicIpOnLaunch
   */
  readonly mapPublicIpOnLaunch?: boolean;

  /**
   * @schema SecurityHubAwsEc2SubnetDetails#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema SecurityHubAwsEc2SubnetDetails#State
   */
  readonly state?: string;

  /**
   * @schema SecurityHubAwsEc2SubnetDetails#SubnetArn
   */
  readonly subnetArn?: string;

  /**
   * @schema SecurityHubAwsEc2SubnetDetails#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema SecurityHubAwsEc2SubnetDetails#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema SecurityHubAwsEc2SubnetDetails#Ipv6CidrBlockAssociationSet
   */
  readonly ipv6CidrBlockAssociationSet?: SecurityHubIpv6CidrBlockAssociation[];

}

/**
 * Converts an object of type 'SecurityHubAwsEc2SubnetDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEc2SubnetDetails(obj: SecurityHubAwsEc2SubnetDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssignIpv6AddressOnCreation': obj.assignIpv6AddressOnCreation,
    'AvailabilityZone': obj.availabilityZone,
    'AvailabilityZoneId': obj.availabilityZoneId,
    'AvailableIpAddressCount': obj.availableIpAddressCount,
    'CidrBlock': obj.cidrBlock,
    'DefaultForAz': obj.defaultForAz,
    'MapPublicIpOnLaunch': obj.mapPublicIpOnLaunch,
    'OwnerId': obj.ownerId,
    'State': obj.state,
    'SubnetArn': obj.subnetArn,
    'SubnetId': obj.subnetId,
    'VpcId': obj.vpcId,
    'Ipv6CidrBlockAssociationSet': obj.ipv6CidrBlockAssociationSet?.map(y => toJson_SecurityHubIpv6CidrBlockAssociation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEc2NetworkAclDetails
 */
export interface SecurityHubAwsEc2NetworkAclDetails {
  /**
   * @schema SecurityHubAwsEc2NetworkAclDetails#IsDefault
   */
  readonly isDefault?: boolean;

  /**
   * @schema SecurityHubAwsEc2NetworkAclDetails#NetworkAclId
   */
  readonly networkAclId?: string;

  /**
   * @schema SecurityHubAwsEc2NetworkAclDetails#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema SecurityHubAwsEc2NetworkAclDetails#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema SecurityHubAwsEc2NetworkAclDetails#Associations
   */
  readonly associations?: SecurityHubAwsEc2NetworkAclAssociation[];

  /**
   * @schema SecurityHubAwsEc2NetworkAclDetails#Entries
   */
  readonly entries?: SecurityHubAwsEc2NetworkAclEntry[];

}

/**
 * Converts an object of type 'SecurityHubAwsEc2NetworkAclDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEc2NetworkAclDetails(obj: SecurityHubAwsEc2NetworkAclDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IsDefault': obj.isDefault,
    'NetworkAclId': obj.networkAclId,
    'OwnerId': obj.ownerId,
    'VpcId': obj.vpcId,
    'Associations': obj.associations?.map(y => toJson_SecurityHubAwsEc2NetworkAclAssociation(y)),
    'Entries': obj.entries?.map(y => toJson_SecurityHubAwsEc2NetworkAclEntry(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsElbv2LoadBalancerDetails
 */
export interface SecurityHubAwsElbv2LoadBalancerDetails {
  /**
   * @schema SecurityHubAwsElbv2LoadBalancerDetails#AvailabilityZones
   */
  readonly availabilityZones?: SecurityHubAvailabilityZone[];

  /**
   * @schema SecurityHubAwsElbv2LoadBalancerDetails#CanonicalHostedZoneId
   */
  readonly canonicalHostedZoneId?: string;

  /**
   * @schema SecurityHubAwsElbv2LoadBalancerDetails#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema SecurityHubAwsElbv2LoadBalancerDetails#DNSName
   */
  readonly dnsName?: string;

  /**
   * @schema SecurityHubAwsElbv2LoadBalancerDetails#IpAddressType
   */
  readonly ipAddressType?: string;

  /**
   * @schema SecurityHubAwsElbv2LoadBalancerDetails#Scheme
   */
  readonly scheme?: string;

  /**
   * @schema SecurityHubAwsElbv2LoadBalancerDetails#SecurityGroups
   */
  readonly securityGroups?: string[];

  /**
   * @schema SecurityHubAwsElbv2LoadBalancerDetails#State
   */
  readonly state?: SecurityHubLoadBalancerState;

  /**
   * @schema SecurityHubAwsElbv2LoadBalancerDetails#Type
   */
  readonly type?: string;

  /**
   * @schema SecurityHubAwsElbv2LoadBalancerDetails#VpcId
   */
  readonly vpcId?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsElbv2LoadBalancerDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsElbv2LoadBalancerDetails(obj: SecurityHubAwsElbv2LoadBalancerDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AvailabilityZones': obj.availabilityZones?.map(y => toJson_SecurityHubAvailabilityZone(y)),
    'CanonicalHostedZoneId': obj.canonicalHostedZoneId,
    'CreatedTime': obj.createdTime,
    'DNSName': obj.dnsName,
    'IpAddressType': obj.ipAddressType,
    'Scheme': obj.scheme,
    'SecurityGroups': obj.securityGroups?.map(y => y),
    'State': toJson_SecurityHubLoadBalancerState(obj.state),
    'Type': obj.type,
    'VpcId': obj.vpcId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsElasticBeanstalkEnvironmentDetails
 */
export interface SecurityHubAwsElasticBeanstalkEnvironmentDetails {
  /**
   * @schema SecurityHubAwsElasticBeanstalkEnvironmentDetails#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema SecurityHubAwsElasticBeanstalkEnvironmentDetails#Cname
   */
  readonly cname?: string;

  /**
   * @schema SecurityHubAwsElasticBeanstalkEnvironmentDetails#DateCreated
   */
  readonly dateCreated?: string;

  /**
   * @schema SecurityHubAwsElasticBeanstalkEnvironmentDetails#DateUpdated
   */
  readonly dateUpdated?: string;

  /**
   * @schema SecurityHubAwsElasticBeanstalkEnvironmentDetails#Description
   */
  readonly description?: string;

  /**
   * @schema SecurityHubAwsElasticBeanstalkEnvironmentDetails#EndpointUrl
   */
  readonly endpointUrl?: string;

  /**
   * @schema SecurityHubAwsElasticBeanstalkEnvironmentDetails#EnvironmentArn
   */
  readonly environmentArn?: string;

  /**
   * @schema SecurityHubAwsElasticBeanstalkEnvironmentDetails#EnvironmentId
   */
  readonly environmentId?: string;

  /**
   * @schema SecurityHubAwsElasticBeanstalkEnvironmentDetails#EnvironmentLinks
   */
  readonly environmentLinks?: SecurityHubAwsElasticBeanstalkEnvironmentEnvironmentLink[];

  /**
   * @schema SecurityHubAwsElasticBeanstalkEnvironmentDetails#EnvironmentName
   */
  readonly environmentName?: string;

  /**
   * @schema SecurityHubAwsElasticBeanstalkEnvironmentDetails#OptionSettings
   */
  readonly optionSettings?: SecurityHubAwsElasticBeanstalkEnvironmentOptionSetting[];

  /**
   * @schema SecurityHubAwsElasticBeanstalkEnvironmentDetails#PlatformArn
   */
  readonly platformArn?: string;

  /**
   * @schema SecurityHubAwsElasticBeanstalkEnvironmentDetails#SolutionStackName
   */
  readonly solutionStackName?: string;

  /**
   * @schema SecurityHubAwsElasticBeanstalkEnvironmentDetails#Status
   */
  readonly status?: string;

  /**
   * @schema SecurityHubAwsElasticBeanstalkEnvironmentDetails#Tier
   */
  readonly tier?: SecurityHubAwsElasticBeanstalkEnvironmentTier;

  /**
   * @schema SecurityHubAwsElasticBeanstalkEnvironmentDetails#VersionLabel
   */
  readonly versionLabel?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsElasticBeanstalkEnvironmentDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsElasticBeanstalkEnvironmentDetails(obj: SecurityHubAwsElasticBeanstalkEnvironmentDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationName': obj.applicationName,
    'Cname': obj.cname,
    'DateCreated': obj.dateCreated,
    'DateUpdated': obj.dateUpdated,
    'Description': obj.description,
    'EndpointUrl': obj.endpointUrl,
    'EnvironmentArn': obj.environmentArn,
    'EnvironmentId': obj.environmentId,
    'EnvironmentLinks': obj.environmentLinks?.map(y => toJson_SecurityHubAwsElasticBeanstalkEnvironmentEnvironmentLink(y)),
    'EnvironmentName': obj.environmentName,
    'OptionSettings': obj.optionSettings?.map(y => toJson_SecurityHubAwsElasticBeanstalkEnvironmentOptionSetting(y)),
    'PlatformArn': obj.platformArn,
    'SolutionStackName': obj.solutionStackName,
    'Status': obj.status,
    'Tier': toJson_SecurityHubAwsElasticBeanstalkEnvironmentTier(obj.tier),
    'VersionLabel': obj.versionLabel,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsElasticsearchDomainDetails
 */
export interface SecurityHubAwsElasticsearchDomainDetails {
  /**
   * @schema SecurityHubAwsElasticsearchDomainDetails#AccessPolicies
   */
  readonly accessPolicies?: string;

  /**
   * @schema SecurityHubAwsElasticsearchDomainDetails#DomainEndpointOptions
   */
  readonly domainEndpointOptions?: SecurityHubAwsElasticsearchDomainDomainEndpointOptions;

  /**
   * @schema SecurityHubAwsElasticsearchDomainDetails#DomainId
   */
  readonly domainId?: string;

  /**
   * @schema SecurityHubAwsElasticsearchDomainDetails#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema SecurityHubAwsElasticsearchDomainDetails#Endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema SecurityHubAwsElasticsearchDomainDetails#Endpoints
   */
  readonly endpoints?: { [key: string]: string };

  /**
   * @schema SecurityHubAwsElasticsearchDomainDetails#ElasticsearchVersion
   */
  readonly elasticsearchVersion?: string;

  /**
   * @schema SecurityHubAwsElasticsearchDomainDetails#ElasticsearchClusterConfig
   */
  readonly elasticsearchClusterConfig?: SecurityHubAwsElasticsearchDomainElasticsearchClusterConfigDetails;

  /**
   * @schema SecurityHubAwsElasticsearchDomainDetails#EncryptionAtRestOptions
   */
  readonly encryptionAtRestOptions?: SecurityHubAwsElasticsearchDomainEncryptionAtRestOptions;

  /**
   * @schema SecurityHubAwsElasticsearchDomainDetails#LogPublishingOptions
   */
  readonly logPublishingOptions?: SecurityHubAwsElasticsearchDomainLogPublishingOptions;

  /**
   * @schema SecurityHubAwsElasticsearchDomainDetails#NodeToNodeEncryptionOptions
   */
  readonly nodeToNodeEncryptionOptions?: SecurityHubAwsElasticsearchDomainNodeToNodeEncryptionOptions;

  /**
   * @schema SecurityHubAwsElasticsearchDomainDetails#ServiceSoftwareOptions
   */
  readonly serviceSoftwareOptions?: SecurityHubAwsElasticsearchDomainServiceSoftwareOptions;

  /**
   * @schema SecurityHubAwsElasticsearchDomainDetails#VPCOptions
   */
  readonly vpcOptions?: SecurityHubAwsElasticsearchDomainVpcOptions;

}

/**
 * Converts an object of type 'SecurityHubAwsElasticsearchDomainDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsElasticsearchDomainDetails(obj: SecurityHubAwsElasticsearchDomainDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccessPolicies': obj.accessPolicies,
    'DomainEndpointOptions': toJson_SecurityHubAwsElasticsearchDomainDomainEndpointOptions(obj.domainEndpointOptions),
    'DomainId': obj.domainId,
    'DomainName': obj.domainName,
    'Endpoint': obj.endpoint,
    'Endpoints': ((obj.endpoints) === undefined) ? undefined : (Object.entries(obj.endpoints).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'ElasticsearchVersion': obj.elasticsearchVersion,
    'ElasticsearchClusterConfig': toJson_SecurityHubAwsElasticsearchDomainElasticsearchClusterConfigDetails(obj.elasticsearchClusterConfig),
    'EncryptionAtRestOptions': toJson_SecurityHubAwsElasticsearchDomainEncryptionAtRestOptions(obj.encryptionAtRestOptions),
    'LogPublishingOptions': toJson_SecurityHubAwsElasticsearchDomainLogPublishingOptions(obj.logPublishingOptions),
    'NodeToNodeEncryptionOptions': toJson_SecurityHubAwsElasticsearchDomainNodeToNodeEncryptionOptions(obj.nodeToNodeEncryptionOptions),
    'ServiceSoftwareOptions': toJson_SecurityHubAwsElasticsearchDomainServiceSoftwareOptions(obj.serviceSoftwareOptions),
    'VPCOptions': toJson_SecurityHubAwsElasticsearchDomainVpcOptions(obj.vpcOptions),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsS3BucketDetails
 */
export interface SecurityHubAwsS3BucketDetails {
  /**
   * @schema SecurityHubAwsS3BucketDetails#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema SecurityHubAwsS3BucketDetails#OwnerName
   */
  readonly ownerName?: string;

  /**
   * @schema SecurityHubAwsS3BucketDetails#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema SecurityHubAwsS3BucketDetails#ServerSideEncryptionConfiguration
   */
  readonly serverSideEncryptionConfiguration?: SecurityHubAwsS3BucketServerSideEncryptionConfiguration;

  /**
   * @schema SecurityHubAwsS3BucketDetails#BucketLifecycleConfiguration
   */
  readonly bucketLifecycleConfiguration?: SecurityHubAwsS3BucketBucketLifecycleConfigurationDetails;

  /**
   * @schema SecurityHubAwsS3BucketDetails#PublicAccessBlockConfiguration
   */
  readonly publicAccessBlockConfiguration?: SecurityHubAwsS3AccountPublicAccessBlockDetails;

}

/**
 * Converts an object of type 'SecurityHubAwsS3BucketDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsS3BucketDetails(obj: SecurityHubAwsS3BucketDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OwnerId': obj.ownerId,
    'OwnerName': obj.ownerName,
    'CreatedAt': obj.createdAt,
    'ServerSideEncryptionConfiguration': toJson_SecurityHubAwsS3BucketServerSideEncryptionConfiguration(obj.serverSideEncryptionConfiguration),
    'BucketLifecycleConfiguration': toJson_SecurityHubAwsS3BucketBucketLifecycleConfigurationDetails(obj.bucketLifecycleConfiguration),
    'PublicAccessBlockConfiguration': toJson_SecurityHubAwsS3AccountPublicAccessBlockDetails(obj.publicAccessBlockConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsS3AccountPublicAccessBlockDetails
 */
export interface SecurityHubAwsS3AccountPublicAccessBlockDetails {
  /**
   * @schema SecurityHubAwsS3AccountPublicAccessBlockDetails#BlockPublicAcls
   */
  readonly blockPublicAcls?: boolean;

  /**
   * @schema SecurityHubAwsS3AccountPublicAccessBlockDetails#BlockPublicPolicy
   */
  readonly blockPublicPolicy?: boolean;

  /**
   * @schema SecurityHubAwsS3AccountPublicAccessBlockDetails#IgnorePublicAcls
   */
  readonly ignorePublicAcls?: boolean;

  /**
   * @schema SecurityHubAwsS3AccountPublicAccessBlockDetails#RestrictPublicBuckets
   */
  readonly restrictPublicBuckets?: boolean;

}

/**
 * Converts an object of type 'SecurityHubAwsS3AccountPublicAccessBlockDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsS3AccountPublicAccessBlockDetails(obj: SecurityHubAwsS3AccountPublicAccessBlockDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BlockPublicAcls': obj.blockPublicAcls,
    'BlockPublicPolicy': obj.blockPublicPolicy,
    'IgnorePublicAcls': obj.ignorePublicAcls,
    'RestrictPublicBuckets': obj.restrictPublicBuckets,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsS3ObjectDetails
 */
export interface SecurityHubAwsS3ObjectDetails {
  /**
   * @schema SecurityHubAwsS3ObjectDetails#LastModified
   */
  readonly lastModified?: string;

  /**
   * @schema SecurityHubAwsS3ObjectDetails#ETag
   */
  readonly eTag?: string;

  /**
   * @schema SecurityHubAwsS3ObjectDetails#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema SecurityHubAwsS3ObjectDetails#ContentType
   */
  readonly contentType?: string;

  /**
   * @schema SecurityHubAwsS3ObjectDetails#ServerSideEncryption
   */
  readonly serverSideEncryption?: string;

  /**
   * @schema SecurityHubAwsS3ObjectDetails#SSEKMSKeyId
   */
  readonly ssekmsKeyId?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsS3ObjectDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsS3ObjectDetails(obj: SecurityHubAwsS3ObjectDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LastModified': obj.lastModified,
    'ETag': obj.eTag,
    'VersionId': obj.versionId,
    'ContentType': obj.contentType,
    'ServerSideEncryption': obj.serverSideEncryption,
    'SSEKMSKeyId': obj.ssekmsKeyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsSecretsManagerSecretDetails
 */
export interface SecurityHubAwsSecretsManagerSecretDetails {
  /**
   * @schema SecurityHubAwsSecretsManagerSecretDetails#RotationRules
   */
  readonly rotationRules?: SecurityHubAwsSecretsManagerSecretRotationRules;

  /**
   * @schema SecurityHubAwsSecretsManagerSecretDetails#RotationOccurredWithinFrequency
   */
  readonly rotationOccurredWithinFrequency?: boolean;

  /**
   * @schema SecurityHubAwsSecretsManagerSecretDetails#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema SecurityHubAwsSecretsManagerSecretDetails#RotationEnabled
   */
  readonly rotationEnabled?: boolean;

  /**
   * @schema SecurityHubAwsSecretsManagerSecretDetails#RotationLambdaArn
   */
  readonly rotationLambdaArn?: string;

  /**
   * @schema SecurityHubAwsSecretsManagerSecretDetails#Deleted
   */
  readonly deleted?: boolean;

  /**
   * @schema SecurityHubAwsSecretsManagerSecretDetails#Name
   */
  readonly name?: string;

  /**
   * @schema SecurityHubAwsSecretsManagerSecretDetails#Description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsSecretsManagerSecretDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsSecretsManagerSecretDetails(obj: SecurityHubAwsSecretsManagerSecretDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RotationRules': toJson_SecurityHubAwsSecretsManagerSecretRotationRules(obj.rotationRules),
    'RotationOccurredWithinFrequency': obj.rotationOccurredWithinFrequency,
    'KmsKeyId': obj.kmsKeyId,
    'RotationEnabled': obj.rotationEnabled,
    'RotationLambdaArn': obj.rotationLambdaArn,
    'Deleted': obj.deleted,
    'Name': obj.name,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsIamAccessKeyDetails
 */
export interface SecurityHubAwsIamAccessKeyDetails {
  /**
   * @schema SecurityHubAwsIamAccessKeyDetails#UserName
   */
  readonly userName?: string;

  /**
   * @schema SecurityHubAwsIamAccessKeyDetails#Status
   */
  readonly status?: string;

  /**
   * @schema SecurityHubAwsIamAccessKeyDetails#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema SecurityHubAwsIamAccessKeyDetails#PrincipalId
   */
  readonly principalId?: string;

  /**
   * @schema SecurityHubAwsIamAccessKeyDetails#PrincipalType
   */
  readonly principalType?: string;

  /**
   * @schema SecurityHubAwsIamAccessKeyDetails#PrincipalName
   */
  readonly principalName?: string;

  /**
   * @schema SecurityHubAwsIamAccessKeyDetails#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema SecurityHubAwsIamAccessKeyDetails#AccessKeyId
   */
  readonly accessKeyId?: string;

  /**
   * @schema SecurityHubAwsIamAccessKeyDetails#SessionContext
   */
  readonly sessionContext?: SecurityHubAwsIamAccessKeySessionContext;

}

/**
 * Converts an object of type 'SecurityHubAwsIamAccessKeyDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsIamAccessKeyDetails(obj: SecurityHubAwsIamAccessKeyDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
    'Status': obj.status,
    'CreatedAt': obj.createdAt,
    'PrincipalId': obj.principalId,
    'PrincipalType': obj.principalType,
    'PrincipalName': obj.principalName,
    'AccountId': obj.accountId,
    'AccessKeyId': obj.accessKeyId,
    'SessionContext': toJson_SecurityHubAwsIamAccessKeySessionContext(obj.sessionContext),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsIamUserDetails
 */
export interface SecurityHubAwsIamUserDetails {
  /**
   * @schema SecurityHubAwsIamUserDetails#AttachedManagedPolicies
   */
  readonly attachedManagedPolicies?: SecurityHubAwsIamAttachedManagedPolicy[];

  /**
   * @schema SecurityHubAwsIamUserDetails#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema SecurityHubAwsIamUserDetails#GroupList
   */
  readonly groupList?: string[];

  /**
   * @schema SecurityHubAwsIamUserDetails#Path
   */
  readonly path?: string;

  /**
   * @schema SecurityHubAwsIamUserDetails#PermissionsBoundary
   */
  readonly permissionsBoundary?: SecurityHubAwsIamPermissionsBoundary;

  /**
   * @schema SecurityHubAwsIamUserDetails#UserId
   */
  readonly userId?: string;

  /**
   * @schema SecurityHubAwsIamUserDetails#UserName
   */
  readonly userName?: string;

  /**
   * @schema SecurityHubAwsIamUserDetails#UserPolicyList
   */
  readonly userPolicyList?: SecurityHubAwsIamUserPolicy[];

}

/**
 * Converts an object of type 'SecurityHubAwsIamUserDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsIamUserDetails(obj: SecurityHubAwsIamUserDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AttachedManagedPolicies': obj.attachedManagedPolicies?.map(y => toJson_SecurityHubAwsIamAttachedManagedPolicy(y)),
    'CreateDate': obj.createDate,
    'GroupList': obj.groupList?.map(y => y),
    'Path': obj.path,
    'PermissionsBoundary': toJson_SecurityHubAwsIamPermissionsBoundary(obj.permissionsBoundary),
    'UserId': obj.userId,
    'UserName': obj.userName,
    'UserPolicyList': obj.userPolicyList?.map(y => toJson_SecurityHubAwsIamUserPolicy(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsIamPolicyDetails
 */
export interface SecurityHubAwsIamPolicyDetails {
  /**
   * @schema SecurityHubAwsIamPolicyDetails#AttachmentCount
   */
  readonly attachmentCount?: number;

  /**
   * @schema SecurityHubAwsIamPolicyDetails#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema SecurityHubAwsIamPolicyDetails#DefaultVersionId
   */
  readonly defaultVersionId?: string;

  /**
   * @schema SecurityHubAwsIamPolicyDetails#Description
   */
  readonly description?: string;

  /**
   * @schema SecurityHubAwsIamPolicyDetails#IsAttachable
   */
  readonly isAttachable?: boolean;

  /**
   * @schema SecurityHubAwsIamPolicyDetails#Path
   */
  readonly path?: string;

  /**
   * @schema SecurityHubAwsIamPolicyDetails#PermissionsBoundaryUsageCount
   */
  readonly permissionsBoundaryUsageCount?: number;

  /**
   * @schema SecurityHubAwsIamPolicyDetails#PolicyId
   */
  readonly policyId?: string;

  /**
   * @schema SecurityHubAwsIamPolicyDetails#PolicyName
   */
  readonly policyName?: string;

  /**
   * @schema SecurityHubAwsIamPolicyDetails#PolicyVersionList
   */
  readonly policyVersionList?: SecurityHubAwsIamPolicyVersion[];

  /**
   * @schema SecurityHubAwsIamPolicyDetails#UpdateDate
   */
  readonly updateDate?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsIamPolicyDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsIamPolicyDetails(obj: SecurityHubAwsIamPolicyDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AttachmentCount': obj.attachmentCount,
    'CreateDate': obj.createDate,
    'DefaultVersionId': obj.defaultVersionId,
    'Description': obj.description,
    'IsAttachable': obj.isAttachable,
    'Path': obj.path,
    'PermissionsBoundaryUsageCount': obj.permissionsBoundaryUsageCount,
    'PolicyId': obj.policyId,
    'PolicyName': obj.policyName,
    'PolicyVersionList': obj.policyVersionList?.map(y => toJson_SecurityHubAwsIamPolicyVersion(y)),
    'UpdateDate': obj.updateDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsApiGatewayV2StageDetails
 */
export interface SecurityHubAwsApiGatewayV2StageDetails {
  /**
   * @schema SecurityHubAwsApiGatewayV2StageDetails#ClientCertificateId
   */
  readonly clientCertificateId?: string;

  /**
   * @schema SecurityHubAwsApiGatewayV2StageDetails#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema SecurityHubAwsApiGatewayV2StageDetails#Description
   */
  readonly description?: string;

  /**
   * @schema SecurityHubAwsApiGatewayV2StageDetails#DefaultRouteSettings
   */
  readonly defaultRouteSettings?: SecurityHubAwsApiGatewayV2RouteSettings;

  /**
   * @schema SecurityHubAwsApiGatewayV2StageDetails#DeploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema SecurityHubAwsApiGatewayV2StageDetails#LastUpdatedDate
   */
  readonly lastUpdatedDate?: string;

  /**
   * @schema SecurityHubAwsApiGatewayV2StageDetails#RouteSettings
   */
  readonly routeSettings?: SecurityHubAwsApiGatewayV2RouteSettings;

  /**
   * @schema SecurityHubAwsApiGatewayV2StageDetails#StageName
   */
  readonly stageName?: string;

  /**
   * @schema SecurityHubAwsApiGatewayV2StageDetails#StageVariables
   */
  readonly stageVariables?: { [key: string]: string };

  /**
   * @schema SecurityHubAwsApiGatewayV2StageDetails#AccessLogSettings
   */
  readonly accessLogSettings?: SecurityHubAwsApiGatewayAccessLogSettings;

  /**
   * @schema SecurityHubAwsApiGatewayV2StageDetails#AutoDeploy
   */
  readonly autoDeploy?: boolean;

  /**
   * @schema SecurityHubAwsApiGatewayV2StageDetails#LastDeploymentStatusMessage
   */
  readonly lastDeploymentStatusMessage?: string;

  /**
   * @schema SecurityHubAwsApiGatewayV2StageDetails#ApiGatewayManaged
   */
  readonly apiGatewayManaged?: boolean;

}

/**
 * Converts an object of type 'SecurityHubAwsApiGatewayV2StageDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsApiGatewayV2StageDetails(obj: SecurityHubAwsApiGatewayV2StageDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClientCertificateId': obj.clientCertificateId,
    'CreatedDate': obj.createdDate,
    'Description': obj.description,
    'DefaultRouteSettings': toJson_SecurityHubAwsApiGatewayV2RouteSettings(obj.defaultRouteSettings),
    'DeploymentId': obj.deploymentId,
    'LastUpdatedDate': obj.lastUpdatedDate,
    'RouteSettings': toJson_SecurityHubAwsApiGatewayV2RouteSettings(obj.routeSettings),
    'StageName': obj.stageName,
    'StageVariables': ((obj.stageVariables) === undefined) ? undefined : (Object.entries(obj.stageVariables).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'AccessLogSettings': toJson_SecurityHubAwsApiGatewayAccessLogSettings(obj.accessLogSettings),
    'AutoDeploy': obj.autoDeploy,
    'LastDeploymentStatusMessage': obj.lastDeploymentStatusMessage,
    'ApiGatewayManaged': obj.apiGatewayManaged,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsApiGatewayV2ApiDetails
 */
export interface SecurityHubAwsApiGatewayV2ApiDetails {
  /**
   * @schema SecurityHubAwsApiGatewayV2ApiDetails#ApiEndpoint
   */
  readonly apiEndpoint?: string;

  /**
   * @schema SecurityHubAwsApiGatewayV2ApiDetails#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema SecurityHubAwsApiGatewayV2ApiDetails#ApiKeySelectionExpression
   */
  readonly apiKeySelectionExpression?: string;

  /**
   * @schema SecurityHubAwsApiGatewayV2ApiDetails#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema SecurityHubAwsApiGatewayV2ApiDetails#Description
   */
  readonly description?: string;

  /**
   * @schema SecurityHubAwsApiGatewayV2ApiDetails#Version
   */
  readonly version?: string;

  /**
   * @schema SecurityHubAwsApiGatewayV2ApiDetails#Name
   */
  readonly name?: string;

  /**
   * @schema SecurityHubAwsApiGatewayV2ApiDetails#ProtocolType
   */
  readonly protocolType?: string;

  /**
   * @schema SecurityHubAwsApiGatewayV2ApiDetails#RouteSelectionExpression
   */
  readonly routeSelectionExpression?: string;

  /**
   * @schema SecurityHubAwsApiGatewayV2ApiDetails#CorsConfiguration
   */
  readonly corsConfiguration?: SecurityHubAwsCorsConfiguration;

}

/**
 * Converts an object of type 'SecurityHubAwsApiGatewayV2ApiDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsApiGatewayV2ApiDetails(obj: SecurityHubAwsApiGatewayV2ApiDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiEndpoint': obj.apiEndpoint,
    'ApiId': obj.apiId,
    'ApiKeySelectionExpression': obj.apiKeySelectionExpression,
    'CreatedDate': obj.createdDate,
    'Description': obj.description,
    'Version': obj.version,
    'Name': obj.name,
    'ProtocolType': obj.protocolType,
    'RouteSelectionExpression': obj.routeSelectionExpression,
    'CorsConfiguration': toJson_SecurityHubAwsCorsConfiguration(obj.corsConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsDynamoDbTableDetails
 */
export interface SecurityHubAwsDynamoDbTableDetails {
  /**
   * @schema SecurityHubAwsDynamoDbTableDetails#AttributeDefinitions
   */
  readonly attributeDefinitions?: SecurityHubAwsDynamoDbTableAttributeDefinition[];

  /**
   * @schema SecurityHubAwsDynamoDbTableDetails#BillingModeSummary
   */
  readonly billingModeSummary?: SecurityHubAwsDynamoDbTableBillingModeSummary;

  /**
   * @schema SecurityHubAwsDynamoDbTableDetails#CreationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema SecurityHubAwsDynamoDbTableDetails#GlobalSecondaryIndexes
   */
  readonly globalSecondaryIndexes?: SecurityHubAwsDynamoDbTableGlobalSecondaryIndex[];

  /**
   * @schema SecurityHubAwsDynamoDbTableDetails#GlobalTableVersion
   */
  readonly globalTableVersion?: string;

  /**
   * @schema SecurityHubAwsDynamoDbTableDetails#ItemCount
   */
  readonly itemCount?: number;

  /**
   * @schema SecurityHubAwsDynamoDbTableDetails#KeySchema
   */
  readonly keySchema?: SecurityHubAwsDynamoDbTableKeySchema[];

  /**
   * @schema SecurityHubAwsDynamoDbTableDetails#LatestStreamArn
   */
  readonly latestStreamArn?: string;

  /**
   * @schema SecurityHubAwsDynamoDbTableDetails#LatestStreamLabel
   */
  readonly latestStreamLabel?: string;

  /**
   * @schema SecurityHubAwsDynamoDbTableDetails#LocalSecondaryIndexes
   */
  readonly localSecondaryIndexes?: SecurityHubAwsDynamoDbTableLocalSecondaryIndex[];

  /**
   * @schema SecurityHubAwsDynamoDbTableDetails#ProvisionedThroughput
   */
  readonly provisionedThroughput?: SecurityHubAwsDynamoDbTableProvisionedThroughput;

  /**
   * @schema SecurityHubAwsDynamoDbTableDetails#Replicas
   */
  readonly replicas?: SecurityHubAwsDynamoDbTableReplica[];

  /**
   * @schema SecurityHubAwsDynamoDbTableDetails#RestoreSummary
   */
  readonly restoreSummary?: SecurityHubAwsDynamoDbTableRestoreSummary;

  /**
   * @schema SecurityHubAwsDynamoDbTableDetails#SseDescription
   */
  readonly sseDescription?: SecurityHubAwsDynamoDbTableSseDescription;

  /**
   * @schema SecurityHubAwsDynamoDbTableDetails#StreamSpecification
   */
  readonly streamSpecification?: SecurityHubAwsDynamoDbTableStreamSpecification;

  /**
   * @schema SecurityHubAwsDynamoDbTableDetails#TableId
   */
  readonly tableId?: string;

  /**
   * @schema SecurityHubAwsDynamoDbTableDetails#TableName
   */
  readonly tableName?: string;

  /**
   * @schema SecurityHubAwsDynamoDbTableDetails#TableSizeBytes
   */
  readonly tableSizeBytes?: number;

  /**
   * @schema SecurityHubAwsDynamoDbTableDetails#TableStatus
   */
  readonly tableStatus?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsDynamoDbTableDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsDynamoDbTableDetails(obj: SecurityHubAwsDynamoDbTableDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AttributeDefinitions': obj.attributeDefinitions?.map(y => toJson_SecurityHubAwsDynamoDbTableAttributeDefinition(y)),
    'BillingModeSummary': toJson_SecurityHubAwsDynamoDbTableBillingModeSummary(obj.billingModeSummary),
    'CreationDateTime': obj.creationDateTime,
    'GlobalSecondaryIndexes': obj.globalSecondaryIndexes?.map(y => toJson_SecurityHubAwsDynamoDbTableGlobalSecondaryIndex(y)),
    'GlobalTableVersion': obj.globalTableVersion,
    'ItemCount': obj.itemCount,
    'KeySchema': obj.keySchema?.map(y => toJson_SecurityHubAwsDynamoDbTableKeySchema(y)),
    'LatestStreamArn': obj.latestStreamArn,
    'LatestStreamLabel': obj.latestStreamLabel,
    'LocalSecondaryIndexes': obj.localSecondaryIndexes?.map(y => toJson_SecurityHubAwsDynamoDbTableLocalSecondaryIndex(y)),
    'ProvisionedThroughput': toJson_SecurityHubAwsDynamoDbTableProvisionedThroughput(obj.provisionedThroughput),
    'Replicas': obj.replicas?.map(y => toJson_SecurityHubAwsDynamoDbTableReplica(y)),
    'RestoreSummary': toJson_SecurityHubAwsDynamoDbTableRestoreSummary(obj.restoreSummary),
    'SseDescription': toJson_SecurityHubAwsDynamoDbTableSseDescription(obj.sseDescription),
    'StreamSpecification': toJson_SecurityHubAwsDynamoDbTableStreamSpecification(obj.streamSpecification),
    'TableId': obj.tableId,
    'TableName': obj.tableName,
    'TableSizeBytes': obj.tableSizeBytes,
    'TableStatus': obj.tableStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsApiGatewayStageDetails
 */
export interface SecurityHubAwsApiGatewayStageDetails {
  /**
   * @schema SecurityHubAwsApiGatewayStageDetails#DeploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema SecurityHubAwsApiGatewayStageDetails#ClientCertificateId
   */
  readonly clientCertificateId?: string;

  /**
   * @schema SecurityHubAwsApiGatewayStageDetails#StageName
   */
  readonly stageName?: string;

  /**
   * @schema SecurityHubAwsApiGatewayStageDetails#Description
   */
  readonly description?: string;

  /**
   * @schema SecurityHubAwsApiGatewayStageDetails#CacheClusterEnabled
   */
  readonly cacheClusterEnabled?: boolean;

  /**
   * @schema SecurityHubAwsApiGatewayStageDetails#CacheClusterSize
   */
  readonly cacheClusterSize?: string;

  /**
   * @schema SecurityHubAwsApiGatewayStageDetails#CacheClusterStatus
   */
  readonly cacheClusterStatus?: string;

  /**
   * @schema SecurityHubAwsApiGatewayStageDetails#MethodSettings
   */
  readonly methodSettings?: SecurityHubAwsApiGatewayMethodSettings[];

  /**
   * @schema SecurityHubAwsApiGatewayStageDetails#Variables
   */
  readonly variables?: { [key: string]: string };

  /**
   * @schema SecurityHubAwsApiGatewayStageDetails#DocumentationVersion
   */
  readonly documentationVersion?: string;

  /**
   * @schema SecurityHubAwsApiGatewayStageDetails#AccessLogSettings
   */
  readonly accessLogSettings?: SecurityHubAwsApiGatewayAccessLogSettings;

  /**
   * @schema SecurityHubAwsApiGatewayStageDetails#CanarySettings
   */
  readonly canarySettings?: SecurityHubAwsApiGatewayCanarySettings;

  /**
   * @schema SecurityHubAwsApiGatewayStageDetails#TracingEnabled
   */
  readonly tracingEnabled?: boolean;

  /**
   * @schema SecurityHubAwsApiGatewayStageDetails#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema SecurityHubAwsApiGatewayStageDetails#LastUpdatedDate
   */
  readonly lastUpdatedDate?: string;

  /**
   * @schema SecurityHubAwsApiGatewayStageDetails#WebAclArn
   */
  readonly webAclArn?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsApiGatewayStageDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsApiGatewayStageDetails(obj: SecurityHubAwsApiGatewayStageDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeploymentId': obj.deploymentId,
    'ClientCertificateId': obj.clientCertificateId,
    'StageName': obj.stageName,
    'Description': obj.description,
    'CacheClusterEnabled': obj.cacheClusterEnabled,
    'CacheClusterSize': obj.cacheClusterSize,
    'CacheClusterStatus': obj.cacheClusterStatus,
    'MethodSettings': obj.methodSettings?.map(y => toJson_SecurityHubAwsApiGatewayMethodSettings(y)),
    'Variables': ((obj.variables) === undefined) ? undefined : (Object.entries(obj.variables).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'DocumentationVersion': obj.documentationVersion,
    'AccessLogSettings': toJson_SecurityHubAwsApiGatewayAccessLogSettings(obj.accessLogSettings),
    'CanarySettings': toJson_SecurityHubAwsApiGatewayCanarySettings(obj.canarySettings),
    'TracingEnabled': obj.tracingEnabled,
    'CreatedDate': obj.createdDate,
    'LastUpdatedDate': obj.lastUpdatedDate,
    'WebAclArn': obj.webAclArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsApiGatewayRestApiDetails
 */
export interface SecurityHubAwsApiGatewayRestApiDetails {
  /**
   * @schema SecurityHubAwsApiGatewayRestApiDetails#Id
   */
  readonly id?: string;

  /**
   * @schema SecurityHubAwsApiGatewayRestApiDetails#Name
   */
  readonly name?: string;

  /**
   * @schema SecurityHubAwsApiGatewayRestApiDetails#Description
   */
  readonly description?: string;

  /**
   * @schema SecurityHubAwsApiGatewayRestApiDetails#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema SecurityHubAwsApiGatewayRestApiDetails#Version
   */
  readonly version?: string;

  /**
   * @schema SecurityHubAwsApiGatewayRestApiDetails#BinaryMediaTypes
   */
  readonly binaryMediaTypes?: string[];

  /**
   * @schema SecurityHubAwsApiGatewayRestApiDetails#MinimumCompressionSize
   */
  readonly minimumCompressionSize?: number;

  /**
   * @schema SecurityHubAwsApiGatewayRestApiDetails#ApiKeySource
   */
  readonly apiKeySource?: string;

  /**
   * @schema SecurityHubAwsApiGatewayRestApiDetails#EndpointConfiguration
   */
  readonly endpointConfiguration?: SecurityHubAwsApiGatewayEndpointConfiguration;

}

/**
 * Converts an object of type 'SecurityHubAwsApiGatewayRestApiDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsApiGatewayRestApiDetails(obj: SecurityHubAwsApiGatewayRestApiDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Name': obj.name,
    'Description': obj.description,
    'CreatedDate': obj.createdDate,
    'Version': obj.version,
    'BinaryMediaTypes': obj.binaryMediaTypes?.map(y => y),
    'MinimumCompressionSize': obj.minimumCompressionSize,
    'ApiKeySource': obj.apiKeySource,
    'EndpointConfiguration': toJson_SecurityHubAwsApiGatewayEndpointConfiguration(obj.endpointConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsCloudTrailTrailDetails
 */
export interface SecurityHubAwsCloudTrailTrailDetails {
  /**
   * @schema SecurityHubAwsCloudTrailTrailDetails#CloudWatchLogsLogGroupArn
   */
  readonly cloudWatchLogsLogGroupArn?: string;

  /**
   * @schema SecurityHubAwsCloudTrailTrailDetails#CloudWatchLogsRoleArn
   */
  readonly cloudWatchLogsRoleArn?: string;

  /**
   * @schema SecurityHubAwsCloudTrailTrailDetails#HasCustomEventSelectors
   */
  readonly hasCustomEventSelectors?: boolean;

  /**
   * @schema SecurityHubAwsCloudTrailTrailDetails#HomeRegion
   */
  readonly homeRegion?: string;

  /**
   * @schema SecurityHubAwsCloudTrailTrailDetails#IncludeGlobalServiceEvents
   */
  readonly includeGlobalServiceEvents?: boolean;

  /**
   * @schema SecurityHubAwsCloudTrailTrailDetails#IsMultiRegionTrail
   */
  readonly isMultiRegionTrail?: boolean;

  /**
   * @schema SecurityHubAwsCloudTrailTrailDetails#IsOrganizationTrail
   */
  readonly isOrganizationTrail?: boolean;

  /**
   * @schema SecurityHubAwsCloudTrailTrailDetails#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema SecurityHubAwsCloudTrailTrailDetails#LogFileValidationEnabled
   */
  readonly logFileValidationEnabled?: boolean;

  /**
   * @schema SecurityHubAwsCloudTrailTrailDetails#Name
   */
  readonly name?: string;

  /**
   * @schema SecurityHubAwsCloudTrailTrailDetails#S3BucketName
   */
  readonly s3BucketName?: string;

  /**
   * @schema SecurityHubAwsCloudTrailTrailDetails#S3KeyPrefix
   */
  readonly s3KeyPrefix?: string;

  /**
   * @schema SecurityHubAwsCloudTrailTrailDetails#SnsTopicArn
   */
  readonly snsTopicArn?: string;

  /**
   * @schema SecurityHubAwsCloudTrailTrailDetails#SnsTopicName
   */
  readonly snsTopicName?: string;

  /**
   * @schema SecurityHubAwsCloudTrailTrailDetails#TrailArn
   */
  readonly trailArn?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsCloudTrailTrailDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsCloudTrailTrailDetails(obj: SecurityHubAwsCloudTrailTrailDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CloudWatchLogsLogGroupArn': obj.cloudWatchLogsLogGroupArn,
    'CloudWatchLogsRoleArn': obj.cloudWatchLogsRoleArn,
    'HasCustomEventSelectors': obj.hasCustomEventSelectors,
    'HomeRegion': obj.homeRegion,
    'IncludeGlobalServiceEvents': obj.includeGlobalServiceEvents,
    'IsMultiRegionTrail': obj.isMultiRegionTrail,
    'IsOrganizationTrail': obj.isOrganizationTrail,
    'KmsKeyId': obj.kmsKeyId,
    'LogFileValidationEnabled': obj.logFileValidationEnabled,
    'Name': obj.name,
    'S3BucketName': obj.s3BucketName,
    'S3KeyPrefix': obj.s3KeyPrefix,
    'SnsTopicArn': obj.snsTopicArn,
    'SnsTopicName': obj.snsTopicName,
    'TrailArn': obj.trailArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsSsmPatchComplianceDetails
 */
export interface SecurityHubAwsSsmPatchComplianceDetails {
  /**
   * @schema SecurityHubAwsSsmPatchComplianceDetails#Patch
   */
  readonly patch?: SecurityHubAwsSsmPatch;

}

/**
 * Converts an object of type 'SecurityHubAwsSsmPatchComplianceDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsSsmPatchComplianceDetails(obj: SecurityHubAwsSsmPatchComplianceDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Patch': toJson_SecurityHubAwsSsmPatch(obj.patch),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsCertificateManagerCertificateDetails
 */
export interface SecurityHubAwsCertificateManagerCertificateDetails {
  /**
   * @schema SecurityHubAwsCertificateManagerCertificateDetails#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn?: string;

  /**
   * @schema SecurityHubAwsCertificateManagerCertificateDetails#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema SecurityHubAwsCertificateManagerCertificateDetails#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema SecurityHubAwsCertificateManagerCertificateDetails#DomainValidationOptions
   */
  readonly domainValidationOptions?: SecurityHubAwsCertificateManagerCertificateDomainValidationOption[];

  /**
   * @schema SecurityHubAwsCertificateManagerCertificateDetails#ExtendedKeyUsages
   */
  readonly extendedKeyUsages?: SecurityHubAwsCertificateManagerCertificateExtendedKeyUsage[];

  /**
   * @schema SecurityHubAwsCertificateManagerCertificateDetails#FailureReason
   */
  readonly failureReason?: string;

  /**
   * @schema SecurityHubAwsCertificateManagerCertificateDetails#ImportedAt
   */
  readonly importedAt?: string;

  /**
   * @schema SecurityHubAwsCertificateManagerCertificateDetails#InUseBy
   */
  readonly inUseBy?: string[];

  /**
   * @schema SecurityHubAwsCertificateManagerCertificateDetails#IssuedAt
   */
  readonly issuedAt?: string;

  /**
   * @schema SecurityHubAwsCertificateManagerCertificateDetails#Issuer
   */
  readonly issuer?: string;

  /**
   * @schema SecurityHubAwsCertificateManagerCertificateDetails#KeyAlgorithm
   */
  readonly keyAlgorithm?: string;

  /**
   * @schema SecurityHubAwsCertificateManagerCertificateDetails#KeyUsages
   */
  readonly keyUsages?: SecurityHubAwsCertificateManagerCertificateKeyUsage[];

  /**
   * @schema SecurityHubAwsCertificateManagerCertificateDetails#NotAfter
   */
  readonly notAfter?: string;

  /**
   * @schema SecurityHubAwsCertificateManagerCertificateDetails#NotBefore
   */
  readonly notBefore?: string;

  /**
   * @schema SecurityHubAwsCertificateManagerCertificateDetails#Options
   */
  readonly options?: SecurityHubAwsCertificateManagerCertificateOptions;

  /**
   * @schema SecurityHubAwsCertificateManagerCertificateDetails#RenewalEligibility
   */
  readonly renewalEligibility?: string;

  /**
   * @schema SecurityHubAwsCertificateManagerCertificateDetails#RenewalSummary
   */
  readonly renewalSummary?: SecurityHubAwsCertificateManagerCertificateRenewalSummary;

  /**
   * @schema SecurityHubAwsCertificateManagerCertificateDetails#Serial
   */
  readonly serial?: string;

  /**
   * @schema SecurityHubAwsCertificateManagerCertificateDetails#SignatureAlgorithm
   */
  readonly signatureAlgorithm?: string;

  /**
   * @schema SecurityHubAwsCertificateManagerCertificateDetails#Status
   */
  readonly status?: string;

  /**
   * @schema SecurityHubAwsCertificateManagerCertificateDetails#Subject
   */
  readonly subject?: string;

  /**
   * @schema SecurityHubAwsCertificateManagerCertificateDetails#SubjectAlternativeNames
   */
  readonly subjectAlternativeNames?: string[];

  /**
   * @schema SecurityHubAwsCertificateManagerCertificateDetails#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsCertificateManagerCertificateDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsCertificateManagerCertificateDetails(obj: SecurityHubAwsCertificateManagerCertificateDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CertificateAuthorityArn': obj.certificateAuthorityArn,
    'CreatedAt': obj.createdAt,
    'DomainName': obj.domainName,
    'DomainValidationOptions': obj.domainValidationOptions?.map(y => toJson_SecurityHubAwsCertificateManagerCertificateDomainValidationOption(y)),
    'ExtendedKeyUsages': obj.extendedKeyUsages?.map(y => toJson_SecurityHubAwsCertificateManagerCertificateExtendedKeyUsage(y)),
    'FailureReason': obj.failureReason,
    'ImportedAt': obj.importedAt,
    'InUseBy': obj.inUseBy?.map(y => y),
    'IssuedAt': obj.issuedAt,
    'Issuer': obj.issuer,
    'KeyAlgorithm': obj.keyAlgorithm,
    'KeyUsages': obj.keyUsages?.map(y => toJson_SecurityHubAwsCertificateManagerCertificateKeyUsage(y)),
    'NotAfter': obj.notAfter,
    'NotBefore': obj.notBefore,
    'Options': toJson_SecurityHubAwsCertificateManagerCertificateOptions(obj.options),
    'RenewalEligibility': obj.renewalEligibility,
    'RenewalSummary': toJson_SecurityHubAwsCertificateManagerCertificateRenewalSummary(obj.renewalSummary),
    'Serial': obj.serial,
    'SignatureAlgorithm': obj.signatureAlgorithm,
    'Status': obj.status,
    'Subject': obj.subject,
    'SubjectAlternativeNames': obj.subjectAlternativeNames?.map(y => y),
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsRedshiftClusterDetails
 */
export interface SecurityHubAwsRedshiftClusterDetails {
  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#AllowVersionUpgrade
   */
  readonly allowVersionUpgrade?: boolean;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#AutomatedSnapshotRetentionPeriod
   */
  readonly automatedSnapshotRetentionPeriod?: number;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#ClusterAvailabilityStatus
   */
  readonly clusterAvailabilityStatus?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#ClusterCreateTime
   */
  readonly clusterCreateTime?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#ClusterNodes
   */
  readonly clusterNodes?: SecurityHubAwsRedshiftClusterClusterNode[];

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#ClusterParameterGroups
   */
  readonly clusterParameterGroups?: SecurityHubAwsRedshiftClusterClusterParameterGroup[];

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#ClusterPublicKey
   */
  readonly clusterPublicKey?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#ClusterRevisionNumber
   */
  readonly clusterRevisionNumber?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#ClusterSecurityGroups
   */
  readonly clusterSecurityGroups?: SecurityHubAwsRedshiftClusterClusterSecurityGroup[];

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#ClusterSnapshotCopyStatus
   */
  readonly clusterSnapshotCopyStatus?: SecurityHubAwsRedshiftClusterClusterSnapshotCopyStatus;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#ClusterStatus
   */
  readonly clusterStatus?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#ClusterSubnetGroupName
   */
  readonly clusterSubnetGroupName?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#ClusterVersion
   */
  readonly clusterVersion?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#DBName
   */
  readonly dbName?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#DeferredMaintenanceWindows
   */
  readonly deferredMaintenanceWindows?: SecurityHubAwsRedshiftClusterDeferredMaintenanceWindow[];

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#ElasticIpStatus
   */
  readonly elasticIpStatus?: SecurityHubAwsRedshiftClusterElasticIpStatus;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#ElasticResizeNumberOfNodeOptions
   */
  readonly elasticResizeNumberOfNodeOptions?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#Encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#Endpoint
   */
  readonly endpoint?: SecurityHubAwsRedshiftClusterEndpoint;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#EnhancedVpcRouting
   */
  readonly enhancedVpcRouting?: boolean;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#ExpectedNextSnapshotScheduleTime
   */
  readonly expectedNextSnapshotScheduleTime?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#ExpectedNextSnapshotScheduleTimeStatus
   */
  readonly expectedNextSnapshotScheduleTimeStatus?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#HsmStatus
   */
  readonly hsmStatus?: SecurityHubAwsRedshiftClusterHsmStatus;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#IamRoles
   */
  readonly iamRoles?: SecurityHubAwsRedshiftClusterIamRole[];

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#MaintenanceTrackName
   */
  readonly maintenanceTrackName?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#ManualSnapshotRetentionPeriod
   */
  readonly manualSnapshotRetentionPeriod?: number;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#MasterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#NextMaintenanceWindowStartTime
   */
  readonly nextMaintenanceWindowStartTime?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#NodeType
   */
  readonly nodeType?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#NumberOfNodes
   */
  readonly numberOfNodes?: number;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#PendingActions
   */
  readonly pendingActions?: string[];

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#PendingModifiedValues
   */
  readonly pendingModifiedValues?: SecurityHubAwsRedshiftClusterPendingModifiedValues;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#PubliclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#ResizeInfo
   */
  readonly resizeInfo?: SecurityHubAwsRedshiftClusterResizeInfo;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#RestoreStatus
   */
  readonly restoreStatus?: SecurityHubAwsRedshiftClusterRestoreStatus;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#SnapshotScheduleIdentifier
   */
  readonly snapshotScheduleIdentifier?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#SnapshotScheduleState
   */
  readonly snapshotScheduleState?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#VpcSecurityGroups
   */
  readonly vpcSecurityGroups?: SecurityHubAwsRedshiftClusterVpcSecurityGroup[];

}

/**
 * Converts an object of type 'SecurityHubAwsRedshiftClusterDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsRedshiftClusterDetails(obj: SecurityHubAwsRedshiftClusterDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AllowVersionUpgrade': obj.allowVersionUpgrade,
    'AutomatedSnapshotRetentionPeriod': obj.automatedSnapshotRetentionPeriod,
    'AvailabilityZone': obj.availabilityZone,
    'ClusterAvailabilityStatus': obj.clusterAvailabilityStatus,
    'ClusterCreateTime': obj.clusterCreateTime,
    'ClusterIdentifier': obj.clusterIdentifier,
    'ClusterNodes': obj.clusterNodes?.map(y => toJson_SecurityHubAwsRedshiftClusterClusterNode(y)),
    'ClusterParameterGroups': obj.clusterParameterGroups?.map(y => toJson_SecurityHubAwsRedshiftClusterClusterParameterGroup(y)),
    'ClusterPublicKey': obj.clusterPublicKey,
    'ClusterRevisionNumber': obj.clusterRevisionNumber,
    'ClusterSecurityGroups': obj.clusterSecurityGroups?.map(y => toJson_SecurityHubAwsRedshiftClusterClusterSecurityGroup(y)),
    'ClusterSnapshotCopyStatus': toJson_SecurityHubAwsRedshiftClusterClusterSnapshotCopyStatus(obj.clusterSnapshotCopyStatus),
    'ClusterStatus': obj.clusterStatus,
    'ClusterSubnetGroupName': obj.clusterSubnetGroupName,
    'ClusterVersion': obj.clusterVersion,
    'DBName': obj.dbName,
    'DeferredMaintenanceWindows': obj.deferredMaintenanceWindows?.map(y => toJson_SecurityHubAwsRedshiftClusterDeferredMaintenanceWindow(y)),
    'ElasticIpStatus': toJson_SecurityHubAwsRedshiftClusterElasticIpStatus(obj.elasticIpStatus),
    'ElasticResizeNumberOfNodeOptions': obj.elasticResizeNumberOfNodeOptions,
    'Encrypted': obj.encrypted,
    'Endpoint': toJson_SecurityHubAwsRedshiftClusterEndpoint(obj.endpoint),
    'EnhancedVpcRouting': obj.enhancedVpcRouting,
    'ExpectedNextSnapshotScheduleTime': obj.expectedNextSnapshotScheduleTime,
    'ExpectedNextSnapshotScheduleTimeStatus': obj.expectedNextSnapshotScheduleTimeStatus,
    'HsmStatus': toJson_SecurityHubAwsRedshiftClusterHsmStatus(obj.hsmStatus),
    'IamRoles': obj.iamRoles?.map(y => toJson_SecurityHubAwsRedshiftClusterIamRole(y)),
    'KmsKeyId': obj.kmsKeyId,
    'MaintenanceTrackName': obj.maintenanceTrackName,
    'ManualSnapshotRetentionPeriod': obj.manualSnapshotRetentionPeriod,
    'MasterUsername': obj.masterUsername,
    'NextMaintenanceWindowStartTime': obj.nextMaintenanceWindowStartTime,
    'NodeType': obj.nodeType,
    'NumberOfNodes': obj.numberOfNodes,
    'PendingActions': obj.pendingActions?.map(y => y),
    'PendingModifiedValues': toJson_SecurityHubAwsRedshiftClusterPendingModifiedValues(obj.pendingModifiedValues),
    'PreferredMaintenanceWindow': obj.preferredMaintenanceWindow,
    'PubliclyAccessible': obj.publiclyAccessible,
    'ResizeInfo': toJson_SecurityHubAwsRedshiftClusterResizeInfo(obj.resizeInfo),
    'RestoreStatus': toJson_SecurityHubAwsRedshiftClusterRestoreStatus(obj.restoreStatus),
    'SnapshotScheduleIdentifier': obj.snapshotScheduleIdentifier,
    'SnapshotScheduleState': obj.snapshotScheduleState,
    'VpcId': obj.vpcId,
    'VpcSecurityGroups': obj.vpcSecurityGroups?.map(y => toJson_SecurityHubAwsRedshiftClusterVpcSecurityGroup(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsElbLoadBalancerDetails
 */
export interface SecurityHubAwsElbLoadBalancerDetails {
  /**
   * @schema SecurityHubAwsElbLoadBalancerDetails#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema SecurityHubAwsElbLoadBalancerDetails#BackendServerDescriptions
   */
  readonly backendServerDescriptions?: SecurityHubAwsElbLoadBalancerBackendServerDescription[];

  /**
   * @schema SecurityHubAwsElbLoadBalancerDetails#CanonicalHostedZoneName
   */
  readonly canonicalHostedZoneName?: string;

  /**
   * @schema SecurityHubAwsElbLoadBalancerDetails#CanonicalHostedZoneNameID
   */
  readonly canonicalHostedZoneNameId?: string;

  /**
   * @schema SecurityHubAwsElbLoadBalancerDetails#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema SecurityHubAwsElbLoadBalancerDetails#DnsName
   */
  readonly dnsName?: string;

  /**
   * @schema SecurityHubAwsElbLoadBalancerDetails#HealthCheck
   */
  readonly healthCheck?: SecurityHubAwsElbLoadBalancerHealthCheck;

  /**
   * @schema SecurityHubAwsElbLoadBalancerDetails#Instances
   */
  readonly instances?: SecurityHubAwsElbLoadBalancerInstance[];

  /**
   * @schema SecurityHubAwsElbLoadBalancerDetails#ListenerDescriptions
   */
  readonly listenerDescriptions?: SecurityHubAwsElbLoadBalancerListenerDescription[];

  /**
   * @schema SecurityHubAwsElbLoadBalancerDetails#LoadBalancerAttributes
   */
  readonly loadBalancerAttributes?: SecurityHubAwsElbLoadBalancerAttributes;

  /**
   * @schema SecurityHubAwsElbLoadBalancerDetails#LoadBalancerName
   */
  readonly loadBalancerName?: string;

  /**
   * @schema SecurityHubAwsElbLoadBalancerDetails#Policies
   */
  readonly policies?: SecurityHubAwsElbLoadBalancerPolicies;

  /**
   * @schema SecurityHubAwsElbLoadBalancerDetails#Scheme
   */
  readonly scheme?: string;

  /**
   * @schema SecurityHubAwsElbLoadBalancerDetails#SecurityGroups
   */
  readonly securityGroups?: string[];

  /**
   * @schema SecurityHubAwsElbLoadBalancerDetails#SourceSecurityGroup
   */
  readonly sourceSecurityGroup?: SecurityHubAwsElbLoadBalancerSourceSecurityGroup;

  /**
   * @schema SecurityHubAwsElbLoadBalancerDetails#Subnets
   */
  readonly subnets?: string[];

  /**
   * @schema SecurityHubAwsElbLoadBalancerDetails#VpcId
   */
  readonly vpcId?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsElbLoadBalancerDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsElbLoadBalancerDetails(obj: SecurityHubAwsElbLoadBalancerDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AvailabilityZones': obj.availabilityZones?.map(y => y),
    'BackendServerDescriptions': obj.backendServerDescriptions?.map(y => toJson_SecurityHubAwsElbLoadBalancerBackendServerDescription(y)),
    'CanonicalHostedZoneName': obj.canonicalHostedZoneName,
    'CanonicalHostedZoneNameID': obj.canonicalHostedZoneNameId,
    'CreatedTime': obj.createdTime,
    'DnsName': obj.dnsName,
    'HealthCheck': toJson_SecurityHubAwsElbLoadBalancerHealthCheck(obj.healthCheck),
    'Instances': obj.instances?.map(y => toJson_SecurityHubAwsElbLoadBalancerInstance(y)),
    'ListenerDescriptions': obj.listenerDescriptions?.map(y => toJson_SecurityHubAwsElbLoadBalancerListenerDescription(y)),
    'LoadBalancerAttributes': toJson_SecurityHubAwsElbLoadBalancerAttributes(obj.loadBalancerAttributes),
    'LoadBalancerName': obj.loadBalancerName,
    'Policies': toJson_SecurityHubAwsElbLoadBalancerPolicies(obj.policies),
    'Scheme': obj.scheme,
    'SecurityGroups': obj.securityGroups?.map(y => y),
    'SourceSecurityGroup': toJson_SecurityHubAwsElbLoadBalancerSourceSecurityGroup(obj.sourceSecurityGroup),
    'Subnets': obj.subnets?.map(y => y),
    'VpcId': obj.vpcId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsIamGroupDetails
 */
export interface SecurityHubAwsIamGroupDetails {
  /**
   * @schema SecurityHubAwsIamGroupDetails#AttachedManagedPolicies
   */
  readonly attachedManagedPolicies?: SecurityHubAwsIamAttachedManagedPolicy[];

  /**
   * @schema SecurityHubAwsIamGroupDetails#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema SecurityHubAwsIamGroupDetails#GroupId
   */
  readonly groupId?: string;

  /**
   * @schema SecurityHubAwsIamGroupDetails#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema SecurityHubAwsIamGroupDetails#GroupPolicyList
   */
  readonly groupPolicyList?: SecurityHubAwsIamGroupPolicy[];

  /**
   * @schema SecurityHubAwsIamGroupDetails#Path
   */
  readonly path?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsIamGroupDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsIamGroupDetails(obj: SecurityHubAwsIamGroupDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AttachedManagedPolicies': obj.attachedManagedPolicies?.map(y => toJson_SecurityHubAwsIamAttachedManagedPolicy(y)),
    'CreateDate': obj.createDate,
    'GroupId': obj.groupId,
    'GroupName': obj.groupName,
    'GroupPolicyList': obj.groupPolicyList?.map(y => toJson_SecurityHubAwsIamGroupPolicy(y)),
    'Path': obj.path,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsIamRoleDetails
 */
export interface SecurityHubAwsIamRoleDetails {
  /**
   * @schema SecurityHubAwsIamRoleDetails#AssumeRolePolicyDocument
   */
  readonly assumeRolePolicyDocument?: string;

  /**
   * @schema SecurityHubAwsIamRoleDetails#AttachedManagedPolicies
   */
  readonly attachedManagedPolicies?: SecurityHubAwsIamAttachedManagedPolicy[];

  /**
   * @schema SecurityHubAwsIamRoleDetails#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema SecurityHubAwsIamRoleDetails#InstanceProfileList
   */
  readonly instanceProfileList?: SecurityHubAwsIamInstanceProfile[];

  /**
   * @schema SecurityHubAwsIamRoleDetails#PermissionsBoundary
   */
  readonly permissionsBoundary?: SecurityHubAwsIamPermissionsBoundary;

  /**
   * @schema SecurityHubAwsIamRoleDetails#RoleId
   */
  readonly roleId?: string;

  /**
   * @schema SecurityHubAwsIamRoleDetails#RoleName
   */
  readonly roleName?: string;

  /**
   * @schema SecurityHubAwsIamRoleDetails#RolePolicyList
   */
  readonly rolePolicyList?: SecurityHubAwsIamRolePolicy[];

  /**
   * @schema SecurityHubAwsIamRoleDetails#MaxSessionDuration
   */
  readonly maxSessionDuration?: number;

  /**
   * @schema SecurityHubAwsIamRoleDetails#Path
   */
  readonly path?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsIamRoleDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsIamRoleDetails(obj: SecurityHubAwsIamRoleDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssumeRolePolicyDocument': obj.assumeRolePolicyDocument,
    'AttachedManagedPolicies': obj.attachedManagedPolicies?.map(y => toJson_SecurityHubAwsIamAttachedManagedPolicy(y)),
    'CreateDate': obj.createDate,
    'InstanceProfileList': obj.instanceProfileList?.map(y => toJson_SecurityHubAwsIamInstanceProfile(y)),
    'PermissionsBoundary': toJson_SecurityHubAwsIamPermissionsBoundary(obj.permissionsBoundary),
    'RoleId': obj.roleId,
    'RoleName': obj.roleName,
    'RolePolicyList': obj.rolePolicyList?.map(y => toJson_SecurityHubAwsIamRolePolicy(y)),
    'MaxSessionDuration': obj.maxSessionDuration,
    'Path': obj.path,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsKmsKeyDetails
 */
export interface SecurityHubAwsKmsKeyDetails {
  /**
   * @schema SecurityHubAwsKmsKeyDetails#AWSAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema SecurityHubAwsKmsKeyDetails#CreationDate
   */
  readonly creationDate?: number;

  /**
   * @schema SecurityHubAwsKmsKeyDetails#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema SecurityHubAwsKmsKeyDetails#KeyManager
   */
  readonly keyManager?: string;

  /**
   * @schema SecurityHubAwsKmsKeyDetails#KeyState
   */
  readonly keyState?: string;

  /**
   * @schema SecurityHubAwsKmsKeyDetails#Origin
   */
  readonly origin?: string;

  /**
   * @schema SecurityHubAwsKmsKeyDetails#Description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsKmsKeyDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsKmsKeyDetails(obj: SecurityHubAwsKmsKeyDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AWSAccountId': obj.awsAccountId,
    'CreationDate': obj.creationDate,
    'KeyId': obj.keyId,
    'KeyManager': obj.keyManager,
    'KeyState': obj.keyState,
    'Origin': obj.origin,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsLambdaFunctionDetails
 */
export interface SecurityHubAwsLambdaFunctionDetails {
  /**
   * @schema SecurityHubAwsLambdaFunctionDetails#Code
   */
  readonly code?: SecurityHubAwsLambdaFunctionCode;

  /**
   * @schema SecurityHubAwsLambdaFunctionDetails#CodeSha256
   */
  readonly codeSha256?: string;

  /**
   * @schema SecurityHubAwsLambdaFunctionDetails#DeadLetterConfig
   */
  readonly deadLetterConfig?: SecurityHubAwsLambdaFunctionDeadLetterConfig;

  /**
   * @schema SecurityHubAwsLambdaFunctionDetails#Environment
   */
  readonly environment?: SecurityHubAwsLambdaFunctionEnvironment;

  /**
   * @schema SecurityHubAwsLambdaFunctionDetails#FunctionName
   */
  readonly functionName?: string;

  /**
   * @schema SecurityHubAwsLambdaFunctionDetails#Handler
   */
  readonly handler?: string;

  /**
   * @schema SecurityHubAwsLambdaFunctionDetails#KmsKeyArn
   */
  readonly kmsKeyArn?: string;

  /**
   * @schema SecurityHubAwsLambdaFunctionDetails#LastModified
   */
  readonly lastModified?: string;

  /**
   * @schema SecurityHubAwsLambdaFunctionDetails#Layers
   */
  readonly layers?: SecurityHubAwsLambdaFunctionLayer[];

  /**
   * @schema SecurityHubAwsLambdaFunctionDetails#MasterArn
   */
  readonly masterArn?: string;

  /**
   * @schema SecurityHubAwsLambdaFunctionDetails#MemorySize
   */
  readonly memorySize?: number;

  /**
   * @schema SecurityHubAwsLambdaFunctionDetails#RevisionId
   */
  readonly revisionId?: string;

  /**
   * @schema SecurityHubAwsLambdaFunctionDetails#Role
   */
  readonly role?: string;

  /**
   * @schema SecurityHubAwsLambdaFunctionDetails#Runtime
   */
  readonly runtime?: string;

  /**
   * @schema SecurityHubAwsLambdaFunctionDetails#Timeout
   */
  readonly timeout?: number;

  /**
   * @schema SecurityHubAwsLambdaFunctionDetails#TracingConfig
   */
  readonly tracingConfig?: SecurityHubAwsLambdaFunctionTracingConfig;

  /**
   * @schema SecurityHubAwsLambdaFunctionDetails#VpcConfig
   */
  readonly vpcConfig?: SecurityHubAwsLambdaFunctionVpcConfig;

  /**
   * @schema SecurityHubAwsLambdaFunctionDetails#Version
   */
  readonly version?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsLambdaFunctionDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsLambdaFunctionDetails(obj: SecurityHubAwsLambdaFunctionDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Code': toJson_SecurityHubAwsLambdaFunctionCode(obj.code),
    'CodeSha256': obj.codeSha256,
    'DeadLetterConfig': toJson_SecurityHubAwsLambdaFunctionDeadLetterConfig(obj.deadLetterConfig),
    'Environment': toJson_SecurityHubAwsLambdaFunctionEnvironment(obj.environment),
    'FunctionName': obj.functionName,
    'Handler': obj.handler,
    'KmsKeyArn': obj.kmsKeyArn,
    'LastModified': obj.lastModified,
    'Layers': obj.layers?.map(y => toJson_SecurityHubAwsLambdaFunctionLayer(y)),
    'MasterArn': obj.masterArn,
    'MemorySize': obj.memorySize,
    'RevisionId': obj.revisionId,
    'Role': obj.role,
    'Runtime': obj.runtime,
    'Timeout': obj.timeout,
    'TracingConfig': toJson_SecurityHubAwsLambdaFunctionTracingConfig(obj.tracingConfig),
    'VpcConfig': toJson_SecurityHubAwsLambdaFunctionVpcConfig(obj.vpcConfig),
    'Version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsLambdaLayerVersionDetails
 */
export interface SecurityHubAwsLambdaLayerVersionDetails {
  /**
   * @schema SecurityHubAwsLambdaLayerVersionDetails#Version
   */
  readonly version?: number;

  /**
   * @schema SecurityHubAwsLambdaLayerVersionDetails#CompatibleRuntimes
   */
  readonly compatibleRuntimes?: string[];

  /**
   * @schema SecurityHubAwsLambdaLayerVersionDetails#CreatedDate
   */
  readonly createdDate?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsLambdaLayerVersionDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsLambdaLayerVersionDetails(obj: SecurityHubAwsLambdaLayerVersionDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Version': obj.version,
    'CompatibleRuntimes': obj.compatibleRuntimes?.map(y => y),
    'CreatedDate': obj.createdDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsRdsDbInstanceDetails
 */
export interface SecurityHubAwsRdsDbInstanceDetails {
  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#AssociatedRoles
   */
  readonly associatedRoles?: SecurityHubAwsRdsDbInstanceAssociatedRole[];

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#CACertificateIdentifier
   */
  readonly caCertificateIdentifier?: string;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#DbInstancePort
   */
  readonly dbInstancePort?: number;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#DbiResourceId
   */
  readonly dbiResourceId?: string;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#DBName
   */
  readonly dbName?: string;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#DeletionProtection
   */
  readonly deletionProtection?: boolean;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#Endpoint
   */
  readonly endpoint?: SecurityHubAwsRdsDbInstanceEndpoint;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#Engine
   */
  readonly engine?: string;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#IAMDatabaseAuthenticationEnabled
   */
  readonly iamDatabaseAuthenticationEnabled?: boolean;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#InstanceCreateTime
   */
  readonly instanceCreateTime?: string;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#PubliclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#StorageEncrypted
   */
  readonly storageEncrypted?: boolean;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#TdeCredentialArn
   */
  readonly tdeCredentialArn?: string;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#VpcSecurityGroups
   */
  readonly vpcSecurityGroups?: SecurityHubAwsRdsDbInstanceVpcSecurityGroup[];

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#MultiAz
   */
  readonly multiAz?: boolean;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#EnhancedMonitoringResourceArn
   */
  readonly enhancedMonitoringResourceArn?: string;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#DbInstanceStatus
   */
  readonly dbInstanceStatus?: string;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#MasterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#DbSecurityGroups
   */
  readonly dbSecurityGroups?: string[];

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#DbParameterGroups
   */
  readonly dbParameterGroups?: SecurityHubAwsRdsDbParameterGroup[];

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#DbSubnetGroup
   */
  readonly dbSubnetGroup?: SecurityHubAwsRdsDbSubnetGroup;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#PendingModifiedValues
   */
  readonly pendingModifiedValues?: SecurityHubAwsRdsDbPendingModifiedValues;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#LatestRestorableTime
   */
  readonly latestRestorableTime?: string;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#ReadReplicaSourceDBInstanceIdentifier
   */
  readonly readReplicaSourceDbInstanceIdentifier?: string;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#ReadReplicaDBInstanceIdentifiers
   */
  readonly readReplicaDbInstanceIdentifiers?: string[];

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#ReadReplicaDBClusterIdentifiers
   */
  readonly readReplicaDbClusterIdentifiers?: string[];

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#Iops
   */
  readonly iops?: number;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#OptionGroupMemberships
   */
  readonly optionGroupMemberships?: SecurityHubAwsRdsDbOptionGroupMembership[];

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#CharacterSetName
   */
  readonly characterSetName?: string;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#SecondaryAvailabilityZone
   */
  readonly secondaryAvailabilityZone?: string;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#StatusInfos
   */
  readonly statusInfos?: SecurityHubAwsRdsDbStatusInfo[];

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#DomainMemberships
   */
  readonly domainMemberships?: SecurityHubAwsRdsDbDomainMembership[];

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#CopyTagsToSnapshot
   */
  readonly copyTagsToSnapshot?: boolean;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#MonitoringInterval
   */
  readonly monitoringInterval?: number;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#MonitoringRoleArn
   */
  readonly monitoringRoleArn?: string;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#PromotionTier
   */
  readonly promotionTier?: number;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#Timezone
   */
  readonly timezone?: string;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#PerformanceInsightsEnabled
   */
  readonly performanceInsightsEnabled?: boolean;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#PerformanceInsightsKmsKeyId
   */
  readonly performanceInsightsKmsKeyId?: string;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#PerformanceInsightsRetentionPeriod
   */
  readonly performanceInsightsRetentionPeriod?: number;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#EnabledCloudWatchLogsExports
   */
  readonly enabledCloudWatchLogsExports?: string[];

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#ProcessorFeatures
   */
  readonly processorFeatures?: SecurityHubAwsRdsDbProcessorFeature[];

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#ListenerEndpoint
   */
  readonly listenerEndpoint?: SecurityHubAwsRdsDbInstanceEndpoint;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#MaxAllocatedStorage
   */
  readonly maxAllocatedStorage?: number;

}

/**
 * Converts an object of type 'SecurityHubAwsRdsDbInstanceDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsRdsDbInstanceDetails(obj: SecurityHubAwsRdsDbInstanceDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssociatedRoles': obj.associatedRoles?.map(y => toJson_SecurityHubAwsRdsDbInstanceAssociatedRole(y)),
    'CACertificateIdentifier': obj.caCertificateIdentifier,
    'DBClusterIdentifier': obj.dbClusterIdentifier,
    'DBInstanceIdentifier': obj.dbInstanceIdentifier,
    'DBInstanceClass': obj.dbInstanceClass,
    'DbInstancePort': obj.dbInstancePort,
    'DbiResourceId': obj.dbiResourceId,
    'DBName': obj.dbName,
    'DeletionProtection': obj.deletionProtection,
    'Endpoint': toJson_SecurityHubAwsRdsDbInstanceEndpoint(obj.endpoint),
    'Engine': obj.engine,
    'EngineVersion': obj.engineVersion,
    'IAMDatabaseAuthenticationEnabled': obj.iamDatabaseAuthenticationEnabled,
    'InstanceCreateTime': obj.instanceCreateTime,
    'KmsKeyId': obj.kmsKeyId,
    'PubliclyAccessible': obj.publiclyAccessible,
    'StorageEncrypted': obj.storageEncrypted,
    'TdeCredentialArn': obj.tdeCredentialArn,
    'VpcSecurityGroups': obj.vpcSecurityGroups?.map(y => toJson_SecurityHubAwsRdsDbInstanceVpcSecurityGroup(y)),
    'MultiAz': obj.multiAz,
    'EnhancedMonitoringResourceArn': obj.enhancedMonitoringResourceArn,
    'DbInstanceStatus': obj.dbInstanceStatus,
    'MasterUsername': obj.masterUsername,
    'AllocatedStorage': obj.allocatedStorage,
    'PreferredBackupWindow': obj.preferredBackupWindow,
    'BackupRetentionPeriod': obj.backupRetentionPeriod,
    'DbSecurityGroups': obj.dbSecurityGroups?.map(y => y),
    'DbParameterGroups': obj.dbParameterGroups?.map(y => toJson_SecurityHubAwsRdsDbParameterGroup(y)),
    'AvailabilityZone': obj.availabilityZone,
    'DbSubnetGroup': toJson_SecurityHubAwsRdsDbSubnetGroup(obj.dbSubnetGroup),
    'PreferredMaintenanceWindow': obj.preferredMaintenanceWindow,
    'PendingModifiedValues': toJson_SecurityHubAwsRdsDbPendingModifiedValues(obj.pendingModifiedValues),
    'LatestRestorableTime': obj.latestRestorableTime,
    'AutoMinorVersionUpgrade': obj.autoMinorVersionUpgrade,
    'ReadReplicaSourceDBInstanceIdentifier': obj.readReplicaSourceDbInstanceIdentifier,
    'ReadReplicaDBInstanceIdentifiers': obj.readReplicaDbInstanceIdentifiers?.map(y => y),
    'ReadReplicaDBClusterIdentifiers': obj.readReplicaDbClusterIdentifiers?.map(y => y),
    'LicenseModel': obj.licenseModel,
    'Iops': obj.iops,
    'OptionGroupMemberships': obj.optionGroupMemberships?.map(y => toJson_SecurityHubAwsRdsDbOptionGroupMembership(y)),
    'CharacterSetName': obj.characterSetName,
    'SecondaryAvailabilityZone': obj.secondaryAvailabilityZone,
    'StatusInfos': obj.statusInfos?.map(y => toJson_SecurityHubAwsRdsDbStatusInfo(y)),
    'StorageType': obj.storageType,
    'DomainMemberships': obj.domainMemberships?.map(y => toJson_SecurityHubAwsRdsDbDomainMembership(y)),
    'CopyTagsToSnapshot': obj.copyTagsToSnapshot,
    'MonitoringInterval': obj.monitoringInterval,
    'MonitoringRoleArn': obj.monitoringRoleArn,
    'PromotionTier': obj.promotionTier,
    'Timezone': obj.timezone,
    'PerformanceInsightsEnabled': obj.performanceInsightsEnabled,
    'PerformanceInsightsKmsKeyId': obj.performanceInsightsKmsKeyId,
    'PerformanceInsightsRetentionPeriod': obj.performanceInsightsRetentionPeriod,
    'EnabledCloudWatchLogsExports': obj.enabledCloudWatchLogsExports?.map(y => y),
    'ProcessorFeatures': obj.processorFeatures?.map(y => toJson_SecurityHubAwsRdsDbProcessorFeature(y)),
    'ListenerEndpoint': toJson_SecurityHubAwsRdsDbInstanceEndpoint(obj.listenerEndpoint),
    'MaxAllocatedStorage': obj.maxAllocatedStorage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsSnsTopicDetails
 */
export interface SecurityHubAwsSnsTopicDetails {
  /**
   * @schema SecurityHubAwsSnsTopicDetails#KmsMasterKeyId
   */
  readonly kmsMasterKeyId?: string;

  /**
   * @schema SecurityHubAwsSnsTopicDetails#Subscription
   */
  readonly subscription?: SecurityHubAwsSnsTopicSubscription[];

  /**
   * @schema SecurityHubAwsSnsTopicDetails#TopicName
   */
  readonly topicName?: string;

  /**
   * @schema SecurityHubAwsSnsTopicDetails#Owner
   */
  readonly owner?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsSnsTopicDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsSnsTopicDetails(obj: SecurityHubAwsSnsTopicDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KmsMasterKeyId': obj.kmsMasterKeyId,
    'Subscription': obj.subscription?.map(y => toJson_SecurityHubAwsSnsTopicSubscription(y)),
    'TopicName': obj.topicName,
    'Owner': obj.owner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsSqsQueueDetails
 */
export interface SecurityHubAwsSqsQueueDetails {
  /**
   * @schema SecurityHubAwsSqsQueueDetails#KmsDataKeyReusePeriodSeconds
   */
  readonly kmsDataKeyReusePeriodSeconds?: number;

  /**
   * @schema SecurityHubAwsSqsQueueDetails#KmsMasterKeyId
   */
  readonly kmsMasterKeyId?: string;

  /**
   * @schema SecurityHubAwsSqsQueueDetails#QueueName
   */
  readonly queueName?: string;

  /**
   * @schema SecurityHubAwsSqsQueueDetails#DeadLetterTargetArn
   */
  readonly deadLetterTargetArn?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsSqsQueueDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsSqsQueueDetails(obj: SecurityHubAwsSqsQueueDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KmsDataKeyReusePeriodSeconds': obj.kmsDataKeyReusePeriodSeconds,
    'KmsMasterKeyId': obj.kmsMasterKeyId,
    'QueueName': obj.queueName,
    'DeadLetterTargetArn': obj.deadLetterTargetArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsWafWebAclDetails
 */
export interface SecurityHubAwsWafWebAclDetails {
  /**
   * @schema SecurityHubAwsWafWebAclDetails#Name
   */
  readonly name?: string;

  /**
   * @schema SecurityHubAwsWafWebAclDetails#DefaultAction
   */
  readonly defaultAction?: string;

  /**
   * @schema SecurityHubAwsWafWebAclDetails#Rules
   */
  readonly rules?: SecurityHubAwsWafWebAclRule[];

  /**
   * @schema SecurityHubAwsWafWebAclDetails#WebAclId
   */
  readonly webAclId?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsWafWebAclDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsWafWebAclDetails(obj: SecurityHubAwsWafWebAclDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'DefaultAction': obj.defaultAction,
    'Rules': obj.rules?.map(y => toJson_SecurityHubAwsWafWebAclRule(y)),
    'WebAclId': obj.webAclId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsRdsDbSnapshotDetails
 */
export interface SecurityHubAwsRdsDbSnapshotDetails {
  /**
   * @schema SecurityHubAwsRdsDbSnapshotDetails#DbSnapshotIdentifier
   */
  readonly dbSnapshotIdentifier?: string;

  /**
   * @schema SecurityHubAwsRdsDbSnapshotDetails#DbInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema SecurityHubAwsRdsDbSnapshotDetails#SnapshotCreateTime
   */
  readonly snapshotCreateTime?: string;

  /**
   * @schema SecurityHubAwsRdsDbSnapshotDetails#Engine
   */
  readonly engine?: string;

  /**
   * @schema SecurityHubAwsRdsDbSnapshotDetails#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema SecurityHubAwsRdsDbSnapshotDetails#Status
   */
  readonly status?: string;

  /**
   * @schema SecurityHubAwsRdsDbSnapshotDetails#Port
   */
  readonly port?: number;

  /**
   * @schema SecurityHubAwsRdsDbSnapshotDetails#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema SecurityHubAwsRdsDbSnapshotDetails#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema SecurityHubAwsRdsDbSnapshotDetails#InstanceCreateTime
   */
  readonly instanceCreateTime?: string;

  /**
   * @schema SecurityHubAwsRdsDbSnapshotDetails#MasterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema SecurityHubAwsRdsDbSnapshotDetails#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema SecurityHubAwsRdsDbSnapshotDetails#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema SecurityHubAwsRdsDbSnapshotDetails#SnapshotType
   */
  readonly snapshotType?: string;

  /**
   * @schema SecurityHubAwsRdsDbSnapshotDetails#Iops
   */
  readonly iops?: number;

  /**
   * @schema SecurityHubAwsRdsDbSnapshotDetails#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema SecurityHubAwsRdsDbSnapshotDetails#PercentProgress
   */
  readonly percentProgress?: number;

  /**
   * @schema SecurityHubAwsRdsDbSnapshotDetails#SourceRegion
   */
  readonly sourceRegion?: string;

  /**
   * @schema SecurityHubAwsRdsDbSnapshotDetails#SourceDbSnapshotIdentifier
   */
  readonly sourceDbSnapshotIdentifier?: string;

  /**
   * @schema SecurityHubAwsRdsDbSnapshotDetails#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema SecurityHubAwsRdsDbSnapshotDetails#TdeCredentialArn
   */
  readonly tdeCredentialArn?: string;

  /**
   * @schema SecurityHubAwsRdsDbSnapshotDetails#Encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema SecurityHubAwsRdsDbSnapshotDetails#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema SecurityHubAwsRdsDbSnapshotDetails#Timezone
   */
  readonly timezone?: string;

  /**
   * @schema SecurityHubAwsRdsDbSnapshotDetails#IamDatabaseAuthenticationEnabled
   */
  readonly iamDatabaseAuthenticationEnabled?: boolean;

  /**
   * @schema SecurityHubAwsRdsDbSnapshotDetails#ProcessorFeatures
   */
  readonly processorFeatures?: SecurityHubAwsRdsDbProcessorFeature[];

  /**
   * @schema SecurityHubAwsRdsDbSnapshotDetails#DbiResourceId
   */
  readonly dbiResourceId?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsRdsDbSnapshotDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsRdsDbSnapshotDetails(obj: SecurityHubAwsRdsDbSnapshotDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DbSnapshotIdentifier': obj.dbSnapshotIdentifier,
    'DbInstanceIdentifier': obj.dbInstanceIdentifier,
    'SnapshotCreateTime': obj.snapshotCreateTime,
    'Engine': obj.engine,
    'AllocatedStorage': obj.allocatedStorage,
    'Status': obj.status,
    'Port': obj.port,
    'AvailabilityZone': obj.availabilityZone,
    'VpcId': obj.vpcId,
    'InstanceCreateTime': obj.instanceCreateTime,
    'MasterUsername': obj.masterUsername,
    'EngineVersion': obj.engineVersion,
    'LicenseModel': obj.licenseModel,
    'SnapshotType': obj.snapshotType,
    'Iops': obj.iops,
    'OptionGroupName': obj.optionGroupName,
    'PercentProgress': obj.percentProgress,
    'SourceRegion': obj.sourceRegion,
    'SourceDbSnapshotIdentifier': obj.sourceDbSnapshotIdentifier,
    'StorageType': obj.storageType,
    'TdeCredentialArn': obj.tdeCredentialArn,
    'Encrypted': obj.encrypted,
    'KmsKeyId': obj.kmsKeyId,
    'Timezone': obj.timezone,
    'IamDatabaseAuthenticationEnabled': obj.iamDatabaseAuthenticationEnabled,
    'ProcessorFeatures': obj.processorFeatures?.map(y => toJson_SecurityHubAwsRdsDbProcessorFeature(y)),
    'DbiResourceId': obj.dbiResourceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsRdsDbClusterSnapshotDetails
 */
export interface SecurityHubAwsRdsDbClusterSnapshotDetails {
  /**
   * @schema SecurityHubAwsRdsDbClusterSnapshotDetails#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema SecurityHubAwsRdsDbClusterSnapshotDetails#SnapshotCreateTime
   */
  readonly snapshotCreateTime?: string;

  /**
   * @schema SecurityHubAwsRdsDbClusterSnapshotDetails#Engine
   */
  readonly engine?: string;

  /**
   * @schema SecurityHubAwsRdsDbClusterSnapshotDetails#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema SecurityHubAwsRdsDbClusterSnapshotDetails#Status
   */
  readonly status?: string;

  /**
   * @schema SecurityHubAwsRdsDbClusterSnapshotDetails#Port
   */
  readonly port?: number;

  /**
   * @schema SecurityHubAwsRdsDbClusterSnapshotDetails#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema SecurityHubAwsRdsDbClusterSnapshotDetails#ClusterCreateTime
   */
  readonly clusterCreateTime?: string;

  /**
   * @schema SecurityHubAwsRdsDbClusterSnapshotDetails#MasterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema SecurityHubAwsRdsDbClusterSnapshotDetails#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema SecurityHubAwsRdsDbClusterSnapshotDetails#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema SecurityHubAwsRdsDbClusterSnapshotDetails#SnapshotType
   */
  readonly snapshotType?: string;

  /**
   * @schema SecurityHubAwsRdsDbClusterSnapshotDetails#PercentProgress
   */
  readonly percentProgress?: number;

  /**
   * @schema SecurityHubAwsRdsDbClusterSnapshotDetails#StorageEncrypted
   */
  readonly storageEncrypted?: boolean;

  /**
   * @schema SecurityHubAwsRdsDbClusterSnapshotDetails#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema SecurityHubAwsRdsDbClusterSnapshotDetails#DbClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema SecurityHubAwsRdsDbClusterSnapshotDetails#DbClusterSnapshotIdentifier
   */
  readonly dbClusterSnapshotIdentifier?: string;

  /**
   * @schema SecurityHubAwsRdsDbClusterSnapshotDetails#IamDatabaseAuthenticationEnabled
   */
  readonly iamDatabaseAuthenticationEnabled?: boolean;

}

/**
 * Converts an object of type 'SecurityHubAwsRdsDbClusterSnapshotDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsRdsDbClusterSnapshotDetails(obj: SecurityHubAwsRdsDbClusterSnapshotDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AvailabilityZones': obj.availabilityZones?.map(y => y),
    'SnapshotCreateTime': obj.snapshotCreateTime,
    'Engine': obj.engine,
    'AllocatedStorage': obj.allocatedStorage,
    'Status': obj.status,
    'Port': obj.port,
    'VpcId': obj.vpcId,
    'ClusterCreateTime': obj.clusterCreateTime,
    'MasterUsername': obj.masterUsername,
    'EngineVersion': obj.engineVersion,
    'LicenseModel': obj.licenseModel,
    'SnapshotType': obj.snapshotType,
    'PercentProgress': obj.percentProgress,
    'StorageEncrypted': obj.storageEncrypted,
    'KmsKeyId': obj.kmsKeyId,
    'DbClusterIdentifier': obj.dbClusterIdentifier,
    'DbClusterSnapshotIdentifier': obj.dbClusterSnapshotIdentifier,
    'IamDatabaseAuthenticationEnabled': obj.iamDatabaseAuthenticationEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsRdsDbClusterDetails
 */
export interface SecurityHubAwsRdsDbClusterDetails {
  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#Status
   */
  readonly status?: string;

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#Endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#ReaderEndpoint
   */
  readonly readerEndpoint?: string;

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#CustomEndpoints
   */
  readonly customEndpoints?: string[];

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#MultiAz
   */
  readonly multiAz?: boolean;

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#Engine
   */
  readonly engine?: string;

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#Port
   */
  readonly port?: number;

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#MasterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#ReadReplicaIdentifiers
   */
  readonly readReplicaIdentifiers?: string[];

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#VpcSecurityGroups
   */
  readonly vpcSecurityGroups?: SecurityHubAwsRdsDbInstanceVpcSecurityGroup[];

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#HostedZoneId
   */
  readonly hostedZoneId?: string;

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#StorageEncrypted
   */
  readonly storageEncrypted?: boolean;

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#DbClusterResourceId
   */
  readonly dbClusterResourceId?: string;

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#AssociatedRoles
   */
  readonly associatedRoles?: SecurityHubAwsRdsDbClusterAssociatedRole[];

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#ClusterCreateTime
   */
  readonly clusterCreateTime?: string;

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#EnabledCloudWatchLogsExports
   */
  readonly enabledCloudWatchLogsExports?: string[];

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#EngineMode
   */
  readonly engineMode?: string;

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#DeletionProtection
   */
  readonly deletionProtection?: boolean;

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#HttpEndpointEnabled
   */
  readonly httpEndpointEnabled?: boolean;

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#ActivityStreamStatus
   */
  readonly activityStreamStatus?: string;

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#CopyTagsToSnapshot
   */
  readonly copyTagsToSnapshot?: boolean;

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#CrossAccountClone
   */
  readonly crossAccountClone?: boolean;

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#DomainMemberships
   */
  readonly domainMemberships?: SecurityHubAwsRdsDbDomainMembership[];

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#DbClusterParameterGroup
   */
  readonly dbClusterParameterGroup?: string;

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#DbSubnetGroup
   */
  readonly dbSubnetGroup?: string;

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#DbClusterOptionGroupMemberships
   */
  readonly dbClusterOptionGroupMemberships?: SecurityHubAwsRdsDbClusterOptionGroupMembership[];

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#DbClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#DbClusterMembers
   */
  readonly dbClusterMembers?: SecurityHubAwsRdsDbClusterMember[];

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#IamDatabaseAuthenticationEnabled
   */
  readonly iamDatabaseAuthenticationEnabled?: boolean;

}

/**
 * Converts an object of type 'SecurityHubAwsRdsDbClusterDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsRdsDbClusterDetails(obj: SecurityHubAwsRdsDbClusterDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AllocatedStorage': obj.allocatedStorage,
    'AvailabilityZones': obj.availabilityZones?.map(y => y),
    'BackupRetentionPeriod': obj.backupRetentionPeriod,
    'DatabaseName': obj.databaseName,
    'Status': obj.status,
    'Endpoint': obj.endpoint,
    'ReaderEndpoint': obj.readerEndpoint,
    'CustomEndpoints': obj.customEndpoints?.map(y => y),
    'MultiAz': obj.multiAz,
    'Engine': obj.engine,
    'EngineVersion': obj.engineVersion,
    'Port': obj.port,
    'MasterUsername': obj.masterUsername,
    'PreferredBackupWindow': obj.preferredBackupWindow,
    'PreferredMaintenanceWindow': obj.preferredMaintenanceWindow,
    'ReadReplicaIdentifiers': obj.readReplicaIdentifiers?.map(y => y),
    'VpcSecurityGroups': obj.vpcSecurityGroups?.map(y => toJson_SecurityHubAwsRdsDbInstanceVpcSecurityGroup(y)),
    'HostedZoneId': obj.hostedZoneId,
    'StorageEncrypted': obj.storageEncrypted,
    'KmsKeyId': obj.kmsKeyId,
    'DbClusterResourceId': obj.dbClusterResourceId,
    'AssociatedRoles': obj.associatedRoles?.map(y => toJson_SecurityHubAwsRdsDbClusterAssociatedRole(y)),
    'ClusterCreateTime': obj.clusterCreateTime,
    'EnabledCloudWatchLogsExports': obj.enabledCloudWatchLogsExports?.map(y => y),
    'EngineMode': obj.engineMode,
    'DeletionProtection': obj.deletionProtection,
    'HttpEndpointEnabled': obj.httpEndpointEnabled,
    'ActivityStreamStatus': obj.activityStreamStatus,
    'CopyTagsToSnapshot': obj.copyTagsToSnapshot,
    'CrossAccountClone': obj.crossAccountClone,
    'DomainMemberships': obj.domainMemberships?.map(y => toJson_SecurityHubAwsRdsDbDomainMembership(y)),
    'DbClusterParameterGroup': obj.dbClusterParameterGroup,
    'DbSubnetGroup': obj.dbSubnetGroup,
    'DbClusterOptionGroupMemberships': obj.dbClusterOptionGroupMemberships?.map(y => toJson_SecurityHubAwsRdsDbClusterOptionGroupMembership(y)),
    'DbClusterIdentifier': obj.dbClusterIdentifier,
    'DbClusterMembers': obj.dbClusterMembers?.map(y => toJson_SecurityHubAwsRdsDbClusterMember(y)),
    'IamDatabaseAuthenticationEnabled': obj.iamDatabaseAuthenticationEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEcsClusterDetails
 */
export interface SecurityHubAwsEcsClusterDetails {
  /**
   * @schema SecurityHubAwsEcsClusterDetails#CapacityProviders
   */
  readonly capacityProviders?: string[];

  /**
   * @schema SecurityHubAwsEcsClusterDetails#ClusterSettings
   */
  readonly clusterSettings?: SecurityHubAwsEcsClusterClusterSettingsDetails[];

  /**
   * @schema SecurityHubAwsEcsClusterDetails#Configuration
   */
  readonly configuration?: SecurityHubAwsEcsClusterConfigurationDetails;

  /**
   * @schema SecurityHubAwsEcsClusterDetails#DefaultCapacityProviderStrategy
   */
  readonly defaultCapacityProviderStrategy?: SecurityHubAwsEcsClusterDefaultCapacityProviderStrategyDetails[];

}

/**
 * Converts an object of type 'SecurityHubAwsEcsClusterDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEcsClusterDetails(obj: SecurityHubAwsEcsClusterDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CapacityProviders': obj.capacityProviders?.map(y => y),
    'ClusterSettings': obj.clusterSettings?.map(y => toJson_SecurityHubAwsEcsClusterClusterSettingsDetails(y)),
    'Configuration': toJson_SecurityHubAwsEcsClusterConfigurationDetails(obj.configuration),
    'DefaultCapacityProviderStrategy': obj.defaultCapacityProviderStrategy?.map(y => toJson_SecurityHubAwsEcsClusterDefaultCapacityProviderStrategyDetails(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEcsTaskDefinitionDetails
 */
export interface SecurityHubAwsEcsTaskDefinitionDetails {
  /**
   * @schema SecurityHubAwsEcsTaskDefinitionDetails#ContainerDefinitions
   */
  readonly containerDefinitions?: SecurityHubAwsEcsTaskDefinitionContainerDefinitionsDetails[];

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionDetails#Cpu
   */
  readonly cpu?: string;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionDetails#ExecutionRoleArn
   */
  readonly executionRoleArn?: string;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionDetails#Family
   */
  readonly family?: string;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionDetails#InferenceAccelerators
   */
  readonly inferenceAccelerators?: SecurityHubAwsEcsTaskDefinitionInferenceAcceleratorsDetails[];

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionDetails#IpcMode
   */
  readonly ipcMode?: string;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionDetails#Memory
   */
  readonly memory?: string;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionDetails#NetworkMode
   */
  readonly networkMode?: string;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionDetails#PidMode
   */
  readonly pidMode?: string;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionDetails#PlacementConstraints
   */
  readonly placementConstraints?: SecurityHubAwsEcsTaskDefinitionPlacementConstraintsDetails[];

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionDetails#ProxyConfiguration
   */
  readonly proxyConfiguration?: SecurityHubAwsEcsTaskDefinitionProxyConfigurationDetails;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionDetails#RequiresCompatibilities
   */
  readonly requiresCompatibilities?: string[];

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionDetails#TaskRoleArn
   */
  readonly taskRoleArn?: string;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionDetails#Volumes
   */
  readonly volumes?: SecurityHubAwsEcsTaskDefinitionVolumesDetails[];

}

/**
 * Converts an object of type 'SecurityHubAwsEcsTaskDefinitionDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEcsTaskDefinitionDetails(obj: SecurityHubAwsEcsTaskDefinitionDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContainerDefinitions': obj.containerDefinitions?.map(y => toJson_SecurityHubAwsEcsTaskDefinitionContainerDefinitionsDetails(y)),
    'Cpu': obj.cpu,
    'ExecutionRoleArn': obj.executionRoleArn,
    'Family': obj.family,
    'InferenceAccelerators': obj.inferenceAccelerators?.map(y => toJson_SecurityHubAwsEcsTaskDefinitionInferenceAcceleratorsDetails(y)),
    'IpcMode': obj.ipcMode,
    'Memory': obj.memory,
    'NetworkMode': obj.networkMode,
    'PidMode': obj.pidMode,
    'PlacementConstraints': obj.placementConstraints?.map(y => toJson_SecurityHubAwsEcsTaskDefinitionPlacementConstraintsDetails(y)),
    'ProxyConfiguration': toJson_SecurityHubAwsEcsTaskDefinitionProxyConfigurationDetails(obj.proxyConfiguration),
    'RequiresCompatibilities': obj.requiresCompatibilities?.map(y => y),
    'TaskRoleArn': obj.taskRoleArn,
    'Volumes': obj.volumes?.map(y => toJson_SecurityHubAwsEcsTaskDefinitionVolumesDetails(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubContainerDetails
 */
export interface SecurityHubContainerDetails {
  /**
   * @schema SecurityHubContainerDetails#Name
   */
  readonly name?: string;

  /**
   * @schema SecurityHubContainerDetails#ImageId
   */
  readonly imageId?: string;

  /**
   * @schema SecurityHubContainerDetails#ImageName
   */
  readonly imageName?: string;

  /**
   * @schema SecurityHubContainerDetails#LaunchedAt
   */
  readonly launchedAt?: string;

}

/**
 * Converts an object of type 'SecurityHubContainerDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubContainerDetails(obj: SecurityHubContainerDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'ImageId': obj.imageId,
    'ImageName': obj.imageName,
    'LaunchedAt': obj.launchedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsRdsEventSubscriptionDetails
 */
export interface SecurityHubAwsRdsEventSubscriptionDetails {
  /**
   * @schema SecurityHubAwsRdsEventSubscriptionDetails#CustSubscriptionId
   */
  readonly custSubscriptionId?: string;

  /**
   * @schema SecurityHubAwsRdsEventSubscriptionDetails#CustomerAwsId
   */
  readonly customerAwsId?: string;

  /**
   * @schema SecurityHubAwsRdsEventSubscriptionDetails#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema SecurityHubAwsRdsEventSubscriptionDetails#EventCategoriesList
   */
  readonly eventCategoriesList?: string[];

  /**
   * @schema SecurityHubAwsRdsEventSubscriptionDetails#EventSubscriptionArn
   */
  readonly eventSubscriptionArn?: string;

  /**
   * @schema SecurityHubAwsRdsEventSubscriptionDetails#SnsTopicArn
   */
  readonly snsTopicArn?: string;

  /**
   * @schema SecurityHubAwsRdsEventSubscriptionDetails#SourceIdsList
   */
  readonly sourceIdsList?: string[];

  /**
   * @schema SecurityHubAwsRdsEventSubscriptionDetails#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema SecurityHubAwsRdsEventSubscriptionDetails#Status
   */
  readonly status?: string;

  /**
   * @schema SecurityHubAwsRdsEventSubscriptionDetails#SubscriptionCreationTime
   */
  readonly subscriptionCreationTime?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsRdsEventSubscriptionDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsRdsEventSubscriptionDetails(obj: SecurityHubAwsRdsEventSubscriptionDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CustSubscriptionId': obj.custSubscriptionId,
    'CustomerAwsId': obj.customerAwsId,
    'Enabled': obj.enabled,
    'EventCategoriesList': obj.eventCategoriesList?.map(y => y),
    'EventSubscriptionArn': obj.eventSubscriptionArn,
    'SnsTopicArn': obj.snsTopicArn,
    'SourceIdsList': obj.sourceIdsList?.map(y => y),
    'SourceType': obj.sourceType,
    'Status': obj.status,
    'SubscriptionCreationTime': obj.subscriptionCreationTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEcsServiceDetails
 */
export interface SecurityHubAwsEcsServiceDetails {
  /**
   * @schema SecurityHubAwsEcsServiceDetails#CapacityProviderStrategy
   */
  readonly capacityProviderStrategy?: SecurityHubAwsEcsServiceCapacityProviderStrategyDetails[];

  /**
   * @schema SecurityHubAwsEcsServiceDetails#Cluster
   */
  readonly cluster?: string;

  /**
   * @schema SecurityHubAwsEcsServiceDetails#DeploymentConfiguration
   */
  readonly deploymentConfiguration?: SecurityHubAwsEcsServiceDeploymentConfigurationDetails;

  /**
   * @schema SecurityHubAwsEcsServiceDetails#DeploymentController
   */
  readonly deploymentController?: SecurityHubAwsEcsServiceDeploymentControllerDetails;

  /**
   * @schema SecurityHubAwsEcsServiceDetails#DesiredCount
   */
  readonly desiredCount?: number;

  /**
   * @schema SecurityHubAwsEcsServiceDetails#EnableEcsManagedTags
   */
  readonly enableEcsManagedTags?: boolean;

  /**
   * @schema SecurityHubAwsEcsServiceDetails#EnableExecuteCommand
   */
  readonly enableExecuteCommand?: boolean;

  /**
   * @schema SecurityHubAwsEcsServiceDetails#HealthCheckGracePeriodSeconds
   */
  readonly healthCheckGracePeriodSeconds?: number;

  /**
   * @schema SecurityHubAwsEcsServiceDetails#LaunchType
   */
  readonly launchType?: string;

  /**
   * @schema SecurityHubAwsEcsServiceDetails#LoadBalancers
   */
  readonly loadBalancers?: SecurityHubAwsEcsServiceLoadBalancersDetails[];

  /**
   * @schema SecurityHubAwsEcsServiceDetails#Name
   */
  readonly name?: string;

  /**
   * @schema SecurityHubAwsEcsServiceDetails#NetworkConfiguration
   */
  readonly networkConfiguration?: SecurityHubAwsEcsServiceNetworkConfigurationDetails;

  /**
   * @schema SecurityHubAwsEcsServiceDetails#PlacementConstraints
   */
  readonly placementConstraints?: SecurityHubAwsEcsServicePlacementConstraintsDetails[];

  /**
   * @schema SecurityHubAwsEcsServiceDetails#PlacementStrategies
   */
  readonly placementStrategies?: SecurityHubAwsEcsServicePlacementStrategiesDetails[];

  /**
   * @schema SecurityHubAwsEcsServiceDetails#PlatformVersion
   */
  readonly platformVersion?: string;

  /**
   * @schema SecurityHubAwsEcsServiceDetails#PropagateTags
   */
  readonly propagateTags?: string;

  /**
   * @schema SecurityHubAwsEcsServiceDetails#Role
   */
  readonly role?: string;

  /**
   * @schema SecurityHubAwsEcsServiceDetails#SchedulingStrategy
   */
  readonly schedulingStrategy?: string;

  /**
   * @schema SecurityHubAwsEcsServiceDetails#ServiceArn
   */
  readonly serviceArn?: string;

  /**
   * @schema SecurityHubAwsEcsServiceDetails#ServiceName
   */
  readonly serviceName?: string;

  /**
   * @schema SecurityHubAwsEcsServiceDetails#ServiceRegistries
   */
  readonly serviceRegistries?: SecurityHubAwsEcsServiceServiceRegistriesDetails[];

  /**
   * @schema SecurityHubAwsEcsServiceDetails#TaskDefinition
   */
  readonly taskDefinition?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsEcsServiceDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEcsServiceDetails(obj: SecurityHubAwsEcsServiceDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CapacityProviderStrategy': obj.capacityProviderStrategy?.map(y => toJson_SecurityHubAwsEcsServiceCapacityProviderStrategyDetails(y)),
    'Cluster': obj.cluster,
    'DeploymentConfiguration': toJson_SecurityHubAwsEcsServiceDeploymentConfigurationDetails(obj.deploymentConfiguration),
    'DeploymentController': toJson_SecurityHubAwsEcsServiceDeploymentControllerDetails(obj.deploymentController),
    'DesiredCount': obj.desiredCount,
    'EnableEcsManagedTags': obj.enableEcsManagedTags,
    'EnableExecuteCommand': obj.enableExecuteCommand,
    'HealthCheckGracePeriodSeconds': obj.healthCheckGracePeriodSeconds,
    'LaunchType': obj.launchType,
    'LoadBalancers': obj.loadBalancers?.map(y => toJson_SecurityHubAwsEcsServiceLoadBalancersDetails(y)),
    'Name': obj.name,
    'NetworkConfiguration': toJson_SecurityHubAwsEcsServiceNetworkConfigurationDetails(obj.networkConfiguration),
    'PlacementConstraints': obj.placementConstraints?.map(y => toJson_SecurityHubAwsEcsServicePlacementConstraintsDetails(y)),
    'PlacementStrategies': obj.placementStrategies?.map(y => toJson_SecurityHubAwsEcsServicePlacementStrategiesDetails(y)),
    'PlatformVersion': obj.platformVersion,
    'PropagateTags': obj.propagateTags,
    'Role': obj.role,
    'SchedulingStrategy': obj.schedulingStrategy,
    'ServiceArn': obj.serviceArn,
    'ServiceName': obj.serviceName,
    'ServiceRegistries': obj.serviceRegistries?.map(y => toJson_SecurityHubAwsEcsServiceServiceRegistriesDetails(y)),
    'TaskDefinition': obj.taskDefinition,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubActionRemoteIpDetails
 */
export interface SecurityHubActionRemoteIpDetails {
  /**
   * @schema SecurityHubActionRemoteIpDetails#IpAddressV4
   */
  readonly ipAddressV4?: string;

  /**
   * @schema SecurityHubActionRemoteIpDetails#Organization
   */
  readonly organization?: SecurityHubIpOrganizationDetails;

  /**
   * @schema SecurityHubActionRemoteIpDetails#Country
   */
  readonly country?: SecurityHubCountry;

  /**
   * @schema SecurityHubActionRemoteIpDetails#City
   */
  readonly city?: SecurityHubCity;

  /**
   * @schema SecurityHubActionRemoteIpDetails#GeoLocation
   */
  readonly geoLocation?: SecurityHubGeoLocation;

}

/**
 * Converts an object of type 'SecurityHubActionRemoteIpDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubActionRemoteIpDetails(obj: SecurityHubActionRemoteIpDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IpAddressV4': obj.ipAddressV4,
    'Organization': toJson_SecurityHubIpOrganizationDetails(obj.organization),
    'Country': toJson_SecurityHubCountry(obj.country),
    'City': toJson_SecurityHubCity(obj.city),
    'GeoLocation': toJson_SecurityHubGeoLocation(obj.geoLocation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubActionRemotePortDetails
 */
export interface SecurityHubActionRemotePortDetails {
  /**
   * @schema SecurityHubActionRemotePortDetails#Port
   */
  readonly port?: number;

  /**
   * @schema SecurityHubActionRemotePortDetails#PortName
   */
  readonly portName?: string;

}

/**
 * Converts an object of type 'SecurityHubActionRemotePortDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubActionRemotePortDetails(obj: SecurityHubActionRemotePortDetails | undefined): Record<string, any> | undefined {
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
 * @schema SecurityHubActionLocalPortDetails
 */
export interface SecurityHubActionLocalPortDetails {
  /**
   * @schema SecurityHubActionLocalPortDetails#Port
   */
  readonly port?: number;

  /**
   * @schema SecurityHubActionLocalPortDetails#PortName
   */
  readonly portName?: string;

}

/**
 * Converts an object of type 'SecurityHubActionLocalPortDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubActionLocalPortDetails(obj: SecurityHubActionLocalPortDetails | undefined): Record<string, any> | undefined {
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
 * @schema SecurityHubAwsApiCallActionDomainDetails
 */
export interface SecurityHubAwsApiCallActionDomainDetails {
  /**
   * @schema SecurityHubAwsApiCallActionDomainDetails#Domain
   */
  readonly domain?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsApiCallActionDomainDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsApiCallActionDomainDetails(obj: SecurityHubAwsApiCallActionDomainDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Domain': obj.domain,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubPortProbeDetail
 */
export interface SecurityHubPortProbeDetail {
  /**
   * @schema SecurityHubPortProbeDetail#LocalPortDetails
   */
  readonly localPortDetails?: SecurityHubActionLocalPortDetails;

  /**
   * @schema SecurityHubPortProbeDetail#LocalIpDetails
   */
  readonly localIpDetails?: SecurityHubActionLocalIpDetails;

  /**
   * @schema SecurityHubPortProbeDetail#RemoteIpDetails
   */
  readonly remoteIpDetails?: SecurityHubActionRemoteIpDetails;

}

/**
 * Converts an object of type 'SecurityHubPortProbeDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubPortProbeDetail(obj: SecurityHubPortProbeDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LocalPortDetails': toJson_SecurityHubActionLocalPortDetails(obj.localPortDetails),
    'LocalIpDetails': toJson_SecurityHubActionLocalIpDetails(obj.localIpDetails),
    'RemoteIpDetails': toJson_SecurityHubActionRemoteIpDetails(obj.remoteIpDetails),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubClassificationStatus
 */
export interface SecurityHubClassificationStatus {
  /**
   * @schema SecurityHubClassificationStatus#Code
   */
  readonly code?: string;

  /**
   * @schema SecurityHubClassificationStatus#Reason
   */
  readonly reason?: string;

}

/**
 * Converts an object of type 'SecurityHubClassificationStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubClassificationStatus(obj: SecurityHubClassificationStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Code': obj.code,
    'Reason': obj.reason,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubSensitiveDataResult
 */
export interface SecurityHubSensitiveDataResult {
  /**
   * @schema SecurityHubSensitiveDataResult#Category
   */
  readonly category?: string;

  /**
   * @schema SecurityHubSensitiveDataResult#Detections
   */
  readonly detections?: SecurityHubSensitiveDataDetections[];

  /**
   * @schema SecurityHubSensitiveDataResult#TotalCount
   */
  readonly totalCount?: number;

}

/**
 * Converts an object of type 'SecurityHubSensitiveDataResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubSensitiveDataResult(obj: SecurityHubSensitiveDataResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Category': obj.category,
    'Detections': obj.detections?.map(y => toJson_SecurityHubSensitiveDataDetections(y)),
    'TotalCount': obj.totalCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubCustomDataIdentifiersResult
 */
export interface SecurityHubCustomDataIdentifiersResult {
  /**
   * @schema SecurityHubCustomDataIdentifiersResult#Detections
   */
  readonly detections?: SecurityHubCustomDataIdentifiersDetections[];

  /**
   * @schema SecurityHubCustomDataIdentifiersResult#TotalCount
   */
  readonly totalCount?: number;

}

/**
 * Converts an object of type 'SecurityHubCustomDataIdentifiersResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubCustomDataIdentifiersResult(obj: SecurityHubCustomDataIdentifiersResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Detections': obj.detections?.map(y => toJson_SecurityHubCustomDataIdentifiersDetections(y)),
    'TotalCount': obj.totalCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsCodeBuildProjectEnvironment
 */
export interface SecurityHubAwsCodeBuildProjectEnvironment {
  /**
   * @schema SecurityHubAwsCodeBuildProjectEnvironment#Certificate
   */
  readonly certificate?: string;

  /**
   * @schema SecurityHubAwsCodeBuildProjectEnvironment#ImagePullCredentialsType
   */
  readonly imagePullCredentialsType?: string;

  /**
   * @schema SecurityHubAwsCodeBuildProjectEnvironment#RegistryCredential
   */
  readonly registryCredential?: SecurityHubAwsCodeBuildProjectEnvironmentRegistryCredential;

  /**
   * @schema SecurityHubAwsCodeBuildProjectEnvironment#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsCodeBuildProjectEnvironment' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsCodeBuildProjectEnvironment(obj: SecurityHubAwsCodeBuildProjectEnvironment | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Certificate': obj.certificate,
    'ImagePullCredentialsType': obj.imagePullCredentialsType,
    'RegistryCredential': toJson_SecurityHubAwsCodeBuildProjectEnvironmentRegistryCredential(obj.registryCredential),
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsCodeBuildProjectSource
 */
export interface SecurityHubAwsCodeBuildProjectSource {
  /**
   * @schema SecurityHubAwsCodeBuildProjectSource#Type
   */
  readonly type?: string;

  /**
   * @schema SecurityHubAwsCodeBuildProjectSource#Location
   */
  readonly location?: string;

  /**
   * @schema SecurityHubAwsCodeBuildProjectSource#GitCloneDepth
   */
  readonly gitCloneDepth?: number;

  /**
   * @schema SecurityHubAwsCodeBuildProjectSource#InsecureSsl
   */
  readonly insecureSsl?: boolean;

}

/**
 * Converts an object of type 'SecurityHubAwsCodeBuildProjectSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsCodeBuildProjectSource(obj: SecurityHubAwsCodeBuildProjectSource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Location': obj.location,
    'GitCloneDepth': obj.gitCloneDepth,
    'InsecureSsl': obj.insecureSsl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsCodeBuildProjectVpcConfig
 */
export interface SecurityHubAwsCodeBuildProjectVpcConfig {
  /**
   * @schema SecurityHubAwsCodeBuildProjectVpcConfig#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema SecurityHubAwsCodeBuildProjectVpcConfig#Subnets
   */
  readonly subnets?: string[];

  /**
   * @schema SecurityHubAwsCodeBuildProjectVpcConfig#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

}

/**
 * Converts an object of type 'SecurityHubAwsCodeBuildProjectVpcConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsCodeBuildProjectVpcConfig(obj: SecurityHubAwsCodeBuildProjectVpcConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VpcId': obj.vpcId,
    'Subnets': obj.subnets?.map(y => y),
    'SecurityGroupIds': obj.securityGroupIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsCloudFrontDistributionCacheBehaviors
 */
export interface SecurityHubAwsCloudFrontDistributionCacheBehaviors {
  /**
   * @schema SecurityHubAwsCloudFrontDistributionCacheBehaviors#Items
   */
  readonly items?: SecurityHubAwsCloudFrontDistributionCacheBehavior[];

}

/**
 * Converts an object of type 'SecurityHubAwsCloudFrontDistributionCacheBehaviors' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsCloudFrontDistributionCacheBehaviors(obj: SecurityHubAwsCloudFrontDistributionCacheBehaviors | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Items': obj.items?.map(y => toJson_SecurityHubAwsCloudFrontDistributionCacheBehavior(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsCloudFrontDistributionDefaultCacheBehavior
 */
export interface SecurityHubAwsCloudFrontDistributionDefaultCacheBehavior {
  /**
   * @schema SecurityHubAwsCloudFrontDistributionDefaultCacheBehavior#ViewerProtocolPolicy
   */
  readonly viewerProtocolPolicy?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsCloudFrontDistributionDefaultCacheBehavior' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsCloudFrontDistributionDefaultCacheBehavior(obj: SecurityHubAwsCloudFrontDistributionDefaultCacheBehavior | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ViewerProtocolPolicy': obj.viewerProtocolPolicy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsCloudFrontDistributionLogging
 */
export interface SecurityHubAwsCloudFrontDistributionLogging {
  /**
   * @schema SecurityHubAwsCloudFrontDistributionLogging#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema SecurityHubAwsCloudFrontDistributionLogging#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema SecurityHubAwsCloudFrontDistributionLogging#IncludeCookies
   */
  readonly includeCookies?: boolean;

  /**
   * @schema SecurityHubAwsCloudFrontDistributionLogging#Prefix
   */
  readonly prefix?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsCloudFrontDistributionLogging' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsCloudFrontDistributionLogging(obj: SecurityHubAwsCloudFrontDistributionLogging | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'Enabled': obj.enabled,
    'IncludeCookies': obj.includeCookies,
    'Prefix': obj.prefix,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsCloudFrontDistributionOrigins
 */
export interface SecurityHubAwsCloudFrontDistributionOrigins {
  /**
   * @schema SecurityHubAwsCloudFrontDistributionOrigins#Items
   */
  readonly items?: SecurityHubAwsCloudFrontDistributionOriginItem[];

}

/**
 * Converts an object of type 'SecurityHubAwsCloudFrontDistributionOrigins' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsCloudFrontDistributionOrigins(obj: SecurityHubAwsCloudFrontDistributionOrigins | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Items': obj.items?.map(y => toJson_SecurityHubAwsCloudFrontDistributionOriginItem(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsCloudFrontDistributionOriginGroups
 */
export interface SecurityHubAwsCloudFrontDistributionOriginGroups {
  /**
   * @schema SecurityHubAwsCloudFrontDistributionOriginGroups#Items
   */
  readonly items?: SecurityHubAwsCloudFrontDistributionOriginGroup[];

}

/**
 * Converts an object of type 'SecurityHubAwsCloudFrontDistributionOriginGroups' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsCloudFrontDistributionOriginGroups(obj: SecurityHubAwsCloudFrontDistributionOriginGroups | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Items': obj.items?.map(y => toJson_SecurityHubAwsCloudFrontDistributionOriginGroup(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEc2InstanceNetworkInterfacesDetails
 */
export interface SecurityHubAwsEc2InstanceNetworkInterfacesDetails {
  /**
   * @schema SecurityHubAwsEc2InstanceNetworkInterfacesDetails#NetworkInterfaceId
   */
  readonly networkInterfaceId?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsEc2InstanceNetworkInterfacesDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEc2InstanceNetworkInterfacesDetails(obj: SecurityHubAwsEc2InstanceNetworkInterfacesDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NetworkInterfaceId': obj.networkInterfaceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEc2NetworkInterfaceAttachment
 */
export interface SecurityHubAwsEc2NetworkInterfaceAttachment {
  /**
   * @schema SecurityHubAwsEc2NetworkInterfaceAttachment#AttachTime
   */
  readonly attachTime?: string;

  /**
   * @schema SecurityHubAwsEc2NetworkInterfaceAttachment#AttachmentId
   */
  readonly attachmentId?: string;

  /**
   * @schema SecurityHubAwsEc2NetworkInterfaceAttachment#DeleteOnTermination
   */
  readonly deleteOnTermination?: boolean;

  /**
   * @schema SecurityHubAwsEc2NetworkInterfaceAttachment#DeviceIndex
   */
  readonly deviceIndex?: number;

  /**
   * @schema SecurityHubAwsEc2NetworkInterfaceAttachment#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema SecurityHubAwsEc2NetworkInterfaceAttachment#InstanceOwnerId
   */
  readonly instanceOwnerId?: string;

  /**
   * @schema SecurityHubAwsEc2NetworkInterfaceAttachment#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsEc2NetworkInterfaceAttachment' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEc2NetworkInterfaceAttachment(obj: SecurityHubAwsEc2NetworkInterfaceAttachment | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AttachTime': obj.attachTime,
    'AttachmentId': obj.attachmentId,
    'DeleteOnTermination': obj.deleteOnTermination,
    'DeviceIndex': obj.deviceIndex,
    'InstanceId': obj.instanceId,
    'InstanceOwnerId': obj.instanceOwnerId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEc2NetworkInterfaceSecurityGroup
 */
export interface SecurityHubAwsEc2NetworkInterfaceSecurityGroup {
  /**
   * @schema SecurityHubAwsEc2NetworkInterfaceSecurityGroup#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema SecurityHubAwsEc2NetworkInterfaceSecurityGroup#GroupId
   */
  readonly groupId?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsEc2NetworkInterfaceSecurityGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEc2NetworkInterfaceSecurityGroup(obj: SecurityHubAwsEc2NetworkInterfaceSecurityGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupName': obj.groupName,
    'GroupId': obj.groupId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEc2NetworkInterfaceIpV6AddressDetail
 */
export interface SecurityHubAwsEc2NetworkInterfaceIpV6AddressDetail {
  /**
   * @schema SecurityHubAwsEc2NetworkInterfaceIpV6AddressDetail#IpV6Address
   */
  readonly ipV6Address?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsEc2NetworkInterfaceIpV6AddressDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEc2NetworkInterfaceIpV6AddressDetail(obj: SecurityHubAwsEc2NetworkInterfaceIpV6AddressDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IpV6Address': obj.ipV6Address,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEc2NetworkInterfacePrivateIpAddressDetail
 */
export interface SecurityHubAwsEc2NetworkInterfacePrivateIpAddressDetail {
  /**
   * @schema SecurityHubAwsEc2NetworkInterfacePrivateIpAddressDetail#PrivateIpAddress
   */
  readonly privateIpAddress?: string;

  /**
   * @schema SecurityHubAwsEc2NetworkInterfacePrivateIpAddressDetail#PrivateDnsName
   */
  readonly privateDnsName?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsEc2NetworkInterfacePrivateIpAddressDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEc2NetworkInterfacePrivateIpAddressDetail(obj: SecurityHubAwsEc2NetworkInterfacePrivateIpAddressDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PrivateIpAddress': obj.privateIpAddress,
    'PrivateDnsName': obj.privateDnsName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEc2SecurityGroupIpPermission
 */
export interface SecurityHubAwsEc2SecurityGroupIpPermission {
  /**
   * @schema SecurityHubAwsEc2SecurityGroupIpPermission#IpProtocol
   */
  readonly ipProtocol?: string;

  /**
   * @schema SecurityHubAwsEc2SecurityGroupIpPermission#FromPort
   */
  readonly fromPort?: number;

  /**
   * @schema SecurityHubAwsEc2SecurityGroupIpPermission#ToPort
   */
  readonly toPort?: number;

  /**
   * @schema SecurityHubAwsEc2SecurityGroupIpPermission#UserIdGroupPairs
   */
  readonly userIdGroupPairs?: SecurityHubAwsEc2SecurityGroupUserIdGroupPair[];

  /**
   * @schema SecurityHubAwsEc2SecurityGroupIpPermission#IpRanges
   */
  readonly ipRanges?: SecurityHubAwsEc2SecurityGroupIpRange[];

  /**
   * @schema SecurityHubAwsEc2SecurityGroupIpPermission#Ipv6Ranges
   */
  readonly ipv6Ranges?: SecurityHubAwsEc2SecurityGroupIpv6Range[];

  /**
   * @schema SecurityHubAwsEc2SecurityGroupIpPermission#PrefixListIds
   */
  readonly prefixListIds?: SecurityHubAwsEc2SecurityGroupPrefixListId[];

}

/**
 * Converts an object of type 'SecurityHubAwsEc2SecurityGroupIpPermission' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEc2SecurityGroupIpPermission(obj: SecurityHubAwsEc2SecurityGroupIpPermission | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IpProtocol': obj.ipProtocol,
    'FromPort': obj.fromPort,
    'ToPort': obj.toPort,
    'UserIdGroupPairs': obj.userIdGroupPairs?.map(y => toJson_SecurityHubAwsEc2SecurityGroupUserIdGroupPair(y)),
    'IpRanges': obj.ipRanges?.map(y => toJson_SecurityHubAwsEc2SecurityGroupIpRange(y)),
    'Ipv6Ranges': obj.ipv6Ranges?.map(y => toJson_SecurityHubAwsEc2SecurityGroupIpv6Range(y)),
    'PrefixListIds': obj.prefixListIds?.map(y => toJson_SecurityHubAwsEc2SecurityGroupPrefixListId(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEc2VolumeAttachment
 */
export interface SecurityHubAwsEc2VolumeAttachment {
  /**
   * @schema SecurityHubAwsEc2VolumeAttachment#AttachTime
   */
  readonly attachTime?: string;

  /**
   * @schema SecurityHubAwsEc2VolumeAttachment#DeleteOnTermination
   */
  readonly deleteOnTermination?: boolean;

  /**
   * @schema SecurityHubAwsEc2VolumeAttachment#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema SecurityHubAwsEc2VolumeAttachment#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsEc2VolumeAttachment' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEc2VolumeAttachment(obj: SecurityHubAwsEc2VolumeAttachment | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AttachTime': obj.attachTime,
    'DeleteOnTermination': obj.deleteOnTermination,
    'InstanceId': obj.instanceId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubCidrBlockAssociation
 */
export interface SecurityHubCidrBlockAssociation {
  /**
   * @schema SecurityHubCidrBlockAssociation#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema SecurityHubCidrBlockAssociation#CidrBlock
   */
  readonly cidrBlock?: string;

  /**
   * @schema SecurityHubCidrBlockAssociation#CidrBlockState
   */
  readonly cidrBlockState?: string;

}

/**
 * Converts an object of type 'SecurityHubCidrBlockAssociation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubCidrBlockAssociation(obj: SecurityHubCidrBlockAssociation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssociationId': obj.associationId,
    'CidrBlock': obj.cidrBlock,
    'CidrBlockState': obj.cidrBlockState,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubIpv6CidrBlockAssociation
 */
export interface SecurityHubIpv6CidrBlockAssociation {
  /**
   * @schema SecurityHubIpv6CidrBlockAssociation#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema SecurityHubIpv6CidrBlockAssociation#Ipv6CidrBlock
   */
  readonly ipv6CidrBlock?: string;

  /**
   * @schema SecurityHubIpv6CidrBlockAssociation#CidrBlockState
   */
  readonly cidrBlockState?: string;

}

/**
 * Converts an object of type 'SecurityHubIpv6CidrBlockAssociation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubIpv6CidrBlockAssociation(obj: SecurityHubIpv6CidrBlockAssociation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssociationId': obj.associationId,
    'Ipv6CidrBlock': obj.ipv6CidrBlock,
    'CidrBlockState': obj.cidrBlockState,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEc2NetworkAclAssociation
 */
export interface SecurityHubAwsEc2NetworkAclAssociation {
  /**
   * @schema SecurityHubAwsEc2NetworkAclAssociation#NetworkAclAssociationId
   */
  readonly networkAclAssociationId?: string;

  /**
   * @schema SecurityHubAwsEc2NetworkAclAssociation#NetworkAclId
   */
  readonly networkAclId?: string;

  /**
   * @schema SecurityHubAwsEc2NetworkAclAssociation#SubnetId
   */
  readonly subnetId?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsEc2NetworkAclAssociation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEc2NetworkAclAssociation(obj: SecurityHubAwsEc2NetworkAclAssociation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NetworkAclAssociationId': obj.networkAclAssociationId,
    'NetworkAclId': obj.networkAclId,
    'SubnetId': obj.subnetId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEc2NetworkAclEntry
 */
export interface SecurityHubAwsEc2NetworkAclEntry {
  /**
   * @schema SecurityHubAwsEc2NetworkAclEntry#CidrBlock
   */
  readonly cidrBlock?: string;

  /**
   * @schema SecurityHubAwsEc2NetworkAclEntry#Egress
   */
  readonly egress?: boolean;

  /**
   * @schema SecurityHubAwsEc2NetworkAclEntry#IcmpTypeCode
   */
  readonly icmpTypeCode?: SecurityHubIcmpTypeCode;

  /**
   * @schema SecurityHubAwsEc2NetworkAclEntry#Ipv6CidrBlock
   */
  readonly ipv6CidrBlock?: string;

  /**
   * @schema SecurityHubAwsEc2NetworkAclEntry#PortRange
   */
  readonly portRange?: SecurityHubPortRangeFromTo;

  /**
   * @schema SecurityHubAwsEc2NetworkAclEntry#Protocol
   */
  readonly protocol?: string;

  /**
   * @schema SecurityHubAwsEc2NetworkAclEntry#RuleAction
   */
  readonly ruleAction?: string;

  /**
   * @schema SecurityHubAwsEc2NetworkAclEntry#RuleNumber
   */
  readonly ruleNumber?: number;

}

/**
 * Converts an object of type 'SecurityHubAwsEc2NetworkAclEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEc2NetworkAclEntry(obj: SecurityHubAwsEc2NetworkAclEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CidrBlock': obj.cidrBlock,
    'Egress': obj.egress,
    'IcmpTypeCode': toJson_SecurityHubIcmpTypeCode(obj.icmpTypeCode),
    'Ipv6CidrBlock': obj.ipv6CidrBlock,
    'PortRange': toJson_SecurityHubPortRangeFromTo(obj.portRange),
    'Protocol': obj.protocol,
    'RuleAction': obj.ruleAction,
    'RuleNumber': obj.ruleNumber,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAvailabilityZone
 */
export interface SecurityHubAvailabilityZone {
  /**
   * @schema SecurityHubAvailabilityZone#ZoneName
   */
  readonly zoneName?: string;

  /**
   * @schema SecurityHubAvailabilityZone#SubnetId
   */
  readonly subnetId?: string;

}

/**
 * Converts an object of type 'SecurityHubAvailabilityZone' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAvailabilityZone(obj: SecurityHubAvailabilityZone | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ZoneName': obj.zoneName,
    'SubnetId': obj.subnetId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubLoadBalancerState
 */
export interface SecurityHubLoadBalancerState {
  /**
   * @schema SecurityHubLoadBalancerState#Code
   */
  readonly code?: string;

  /**
   * @schema SecurityHubLoadBalancerState#Reason
   */
  readonly reason?: string;

}

/**
 * Converts an object of type 'SecurityHubLoadBalancerState' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubLoadBalancerState(obj: SecurityHubLoadBalancerState | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Code': obj.code,
    'Reason': obj.reason,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsElasticBeanstalkEnvironmentEnvironmentLink
 */
export interface SecurityHubAwsElasticBeanstalkEnvironmentEnvironmentLink {
  /**
   * @schema SecurityHubAwsElasticBeanstalkEnvironmentEnvironmentLink#EnvironmentName
   */
  readonly environmentName?: string;

  /**
   * @schema SecurityHubAwsElasticBeanstalkEnvironmentEnvironmentLink#LinkName
   */
  readonly linkName?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsElasticBeanstalkEnvironmentEnvironmentLink' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsElasticBeanstalkEnvironmentEnvironmentLink(obj: SecurityHubAwsElasticBeanstalkEnvironmentEnvironmentLink | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EnvironmentName': obj.environmentName,
    'LinkName': obj.linkName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsElasticBeanstalkEnvironmentOptionSetting
 */
export interface SecurityHubAwsElasticBeanstalkEnvironmentOptionSetting {
  /**
   * @schema SecurityHubAwsElasticBeanstalkEnvironmentOptionSetting#Namespace
   */
  readonly namespace?: string;

  /**
   * @schema SecurityHubAwsElasticBeanstalkEnvironmentOptionSetting#OptionName
   */
  readonly optionName?: string;

  /**
   * @schema SecurityHubAwsElasticBeanstalkEnvironmentOptionSetting#ResourceName
   */
  readonly resourceName?: string;

  /**
   * @schema SecurityHubAwsElasticBeanstalkEnvironmentOptionSetting#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsElasticBeanstalkEnvironmentOptionSetting' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsElasticBeanstalkEnvironmentOptionSetting(obj: SecurityHubAwsElasticBeanstalkEnvironmentOptionSetting | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Namespace': obj.namespace,
    'OptionName': obj.optionName,
    'ResourceName': obj.resourceName,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsElasticBeanstalkEnvironmentTier
 */
export interface SecurityHubAwsElasticBeanstalkEnvironmentTier {
  /**
   * @schema SecurityHubAwsElasticBeanstalkEnvironmentTier#Name
   */
  readonly name?: string;

  /**
   * @schema SecurityHubAwsElasticBeanstalkEnvironmentTier#Type
   */
  readonly type?: string;

  /**
   * @schema SecurityHubAwsElasticBeanstalkEnvironmentTier#Version
   */
  readonly version?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsElasticBeanstalkEnvironmentTier' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsElasticBeanstalkEnvironmentTier(obj: SecurityHubAwsElasticBeanstalkEnvironmentTier | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Type': obj.type,
    'Version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsElasticsearchDomainDomainEndpointOptions
 */
export interface SecurityHubAwsElasticsearchDomainDomainEndpointOptions {
  /**
   * @schema SecurityHubAwsElasticsearchDomainDomainEndpointOptions#EnforceHTTPS
   */
  readonly enforceHttps?: boolean;

  /**
   * @schema SecurityHubAwsElasticsearchDomainDomainEndpointOptions#TLSSecurityPolicy
   */
  readonly tlsSecurityPolicy?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsElasticsearchDomainDomainEndpointOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsElasticsearchDomainDomainEndpointOptions(obj: SecurityHubAwsElasticsearchDomainDomainEndpointOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EnforceHTTPS': obj.enforceHttps,
    'TLSSecurityPolicy': obj.tlsSecurityPolicy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsElasticsearchDomainElasticsearchClusterConfigDetails
 */
export interface SecurityHubAwsElasticsearchDomainElasticsearchClusterConfigDetails {
  /**
   * @schema SecurityHubAwsElasticsearchDomainElasticsearchClusterConfigDetails#DedicatedMasterCount
   */
  readonly dedicatedMasterCount?: number;

  /**
   * @schema SecurityHubAwsElasticsearchDomainElasticsearchClusterConfigDetails#DedicatedMasterEnabled
   */
  readonly dedicatedMasterEnabled?: boolean;

  /**
   * @schema SecurityHubAwsElasticsearchDomainElasticsearchClusterConfigDetails#DedicatedMasterType
   */
  readonly dedicatedMasterType?: string;

  /**
   * @schema SecurityHubAwsElasticsearchDomainElasticsearchClusterConfigDetails#InstanceCount
   */
  readonly instanceCount?: number;

  /**
   * @schema SecurityHubAwsElasticsearchDomainElasticsearchClusterConfigDetails#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema SecurityHubAwsElasticsearchDomainElasticsearchClusterConfigDetails#ZoneAwarenessConfig
   */
  readonly zoneAwarenessConfig?: SecurityHubAwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails;

  /**
   * @schema SecurityHubAwsElasticsearchDomainElasticsearchClusterConfigDetails#ZoneAwarenessEnabled
   */
  readonly zoneAwarenessEnabled?: boolean;

}

/**
 * Converts an object of type 'SecurityHubAwsElasticsearchDomainElasticsearchClusterConfigDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsElasticsearchDomainElasticsearchClusterConfigDetails(obj: SecurityHubAwsElasticsearchDomainElasticsearchClusterConfigDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DedicatedMasterCount': obj.dedicatedMasterCount,
    'DedicatedMasterEnabled': obj.dedicatedMasterEnabled,
    'DedicatedMasterType': obj.dedicatedMasterType,
    'InstanceCount': obj.instanceCount,
    'InstanceType': obj.instanceType,
    'ZoneAwarenessConfig': toJson_SecurityHubAwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails(obj.zoneAwarenessConfig),
    'ZoneAwarenessEnabled': obj.zoneAwarenessEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsElasticsearchDomainEncryptionAtRestOptions
 */
export interface SecurityHubAwsElasticsearchDomainEncryptionAtRestOptions {
  /**
   * @schema SecurityHubAwsElasticsearchDomainEncryptionAtRestOptions#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema SecurityHubAwsElasticsearchDomainEncryptionAtRestOptions#KmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsElasticsearchDomainEncryptionAtRestOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsElasticsearchDomainEncryptionAtRestOptions(obj: SecurityHubAwsElasticsearchDomainEncryptionAtRestOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Enabled': obj.enabled,
    'KmsKeyId': obj.kmsKeyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsElasticsearchDomainLogPublishingOptions
 */
export interface SecurityHubAwsElasticsearchDomainLogPublishingOptions {
  /**
   * @schema SecurityHubAwsElasticsearchDomainLogPublishingOptions#IndexSlowLogs
   */
  readonly indexSlowLogs?: SecurityHubAwsElasticsearchDomainLogPublishingOptionsLogConfig;

  /**
   * @schema SecurityHubAwsElasticsearchDomainLogPublishingOptions#SearchSlowLogs
   */
  readonly searchSlowLogs?: SecurityHubAwsElasticsearchDomainLogPublishingOptionsLogConfig;

  /**
   * @schema SecurityHubAwsElasticsearchDomainLogPublishingOptions#AuditLogs
   */
  readonly auditLogs?: SecurityHubAwsElasticsearchDomainLogPublishingOptionsLogConfig;

}

/**
 * Converts an object of type 'SecurityHubAwsElasticsearchDomainLogPublishingOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsElasticsearchDomainLogPublishingOptions(obj: SecurityHubAwsElasticsearchDomainLogPublishingOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IndexSlowLogs': toJson_SecurityHubAwsElasticsearchDomainLogPublishingOptionsLogConfig(obj.indexSlowLogs),
    'SearchSlowLogs': toJson_SecurityHubAwsElasticsearchDomainLogPublishingOptionsLogConfig(obj.searchSlowLogs),
    'AuditLogs': toJson_SecurityHubAwsElasticsearchDomainLogPublishingOptionsLogConfig(obj.auditLogs),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsElasticsearchDomainNodeToNodeEncryptionOptions
 */
export interface SecurityHubAwsElasticsearchDomainNodeToNodeEncryptionOptions {
  /**
   * @schema SecurityHubAwsElasticsearchDomainNodeToNodeEncryptionOptions#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * Converts an object of type 'SecurityHubAwsElasticsearchDomainNodeToNodeEncryptionOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsElasticsearchDomainNodeToNodeEncryptionOptions(obj: SecurityHubAwsElasticsearchDomainNodeToNodeEncryptionOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Enabled': obj.enabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsElasticsearchDomainServiceSoftwareOptions
 */
export interface SecurityHubAwsElasticsearchDomainServiceSoftwareOptions {
  /**
   * @schema SecurityHubAwsElasticsearchDomainServiceSoftwareOptions#AutomatedUpdateDate
   */
  readonly automatedUpdateDate?: string;

  /**
   * @schema SecurityHubAwsElasticsearchDomainServiceSoftwareOptions#Cancellable
   */
  readonly cancellable?: boolean;

  /**
   * @schema SecurityHubAwsElasticsearchDomainServiceSoftwareOptions#CurrentVersion
   */
  readonly currentVersion?: string;

  /**
   * @schema SecurityHubAwsElasticsearchDomainServiceSoftwareOptions#Description
   */
  readonly description?: string;

  /**
   * @schema SecurityHubAwsElasticsearchDomainServiceSoftwareOptions#NewVersion
   */
  readonly newVersion?: string;

  /**
   * @schema SecurityHubAwsElasticsearchDomainServiceSoftwareOptions#UpdateAvailable
   */
  readonly updateAvailable?: boolean;

  /**
   * @schema SecurityHubAwsElasticsearchDomainServiceSoftwareOptions#UpdateStatus
   */
  readonly updateStatus?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsElasticsearchDomainServiceSoftwareOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsElasticsearchDomainServiceSoftwareOptions(obj: SecurityHubAwsElasticsearchDomainServiceSoftwareOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutomatedUpdateDate': obj.automatedUpdateDate,
    'Cancellable': obj.cancellable,
    'CurrentVersion': obj.currentVersion,
    'Description': obj.description,
    'NewVersion': obj.newVersion,
    'UpdateAvailable': obj.updateAvailable,
    'UpdateStatus': obj.updateStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsElasticsearchDomainVpcOptions
 */
export interface SecurityHubAwsElasticsearchDomainVpcOptions {
  /**
   * @schema SecurityHubAwsElasticsearchDomainVpcOptions#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema SecurityHubAwsElasticsearchDomainVpcOptions#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema SecurityHubAwsElasticsearchDomainVpcOptions#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema SecurityHubAwsElasticsearchDomainVpcOptions#VPCId
   */
  readonly vpcId?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsElasticsearchDomainVpcOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsElasticsearchDomainVpcOptions(obj: SecurityHubAwsElasticsearchDomainVpcOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AvailabilityZones': obj.availabilityZones?.map(y => y),
    'SecurityGroupIds': obj.securityGroupIds?.map(y => y),
    'SubnetIds': obj.subnetIds?.map(y => y),
    'VPCId': obj.vpcId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsS3BucketServerSideEncryptionConfiguration
 */
export interface SecurityHubAwsS3BucketServerSideEncryptionConfiguration {
  /**
   * @schema SecurityHubAwsS3BucketServerSideEncryptionConfiguration#Rules
   */
  readonly rules?: SecurityHubAwsS3BucketServerSideEncryptionRule[];

}

/**
 * Converts an object of type 'SecurityHubAwsS3BucketServerSideEncryptionConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsS3BucketServerSideEncryptionConfiguration(obj: SecurityHubAwsS3BucketServerSideEncryptionConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Rules': obj.rules?.map(y => toJson_SecurityHubAwsS3BucketServerSideEncryptionRule(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsS3BucketBucketLifecycleConfigurationDetails
 */
export interface SecurityHubAwsS3BucketBucketLifecycleConfigurationDetails {
  /**
   * @schema SecurityHubAwsS3BucketBucketLifecycleConfigurationDetails#Rules
   */
  readonly rules?: SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesDetails[];

}

/**
 * Converts an object of type 'SecurityHubAwsS3BucketBucketLifecycleConfigurationDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsS3BucketBucketLifecycleConfigurationDetails(obj: SecurityHubAwsS3BucketBucketLifecycleConfigurationDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Rules': obj.rules?.map(y => toJson_SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesDetails(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsSecretsManagerSecretRotationRules
 */
export interface SecurityHubAwsSecretsManagerSecretRotationRules {
  /**
   * @schema SecurityHubAwsSecretsManagerSecretRotationRules#AutomaticallyAfterDays
   */
  readonly automaticallyAfterDays?: number;

}

/**
 * Converts an object of type 'SecurityHubAwsSecretsManagerSecretRotationRules' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsSecretsManagerSecretRotationRules(obj: SecurityHubAwsSecretsManagerSecretRotationRules | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutomaticallyAfterDays': obj.automaticallyAfterDays,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsIamAccessKeySessionContext
 */
export interface SecurityHubAwsIamAccessKeySessionContext {
  /**
   * @schema SecurityHubAwsIamAccessKeySessionContext#Attributes
   */
  readonly attributes?: SecurityHubAwsIamAccessKeySessionContextAttributes;

  /**
   * @schema SecurityHubAwsIamAccessKeySessionContext#SessionIssuer
   */
  readonly sessionIssuer?: SecurityHubAwsIamAccessKeySessionContextSessionIssuer;

}

/**
 * Converts an object of type 'SecurityHubAwsIamAccessKeySessionContext' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsIamAccessKeySessionContext(obj: SecurityHubAwsIamAccessKeySessionContext | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Attributes': toJson_SecurityHubAwsIamAccessKeySessionContextAttributes(obj.attributes),
    'SessionIssuer': toJson_SecurityHubAwsIamAccessKeySessionContextSessionIssuer(obj.sessionIssuer),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsIamAttachedManagedPolicy
 */
export interface SecurityHubAwsIamAttachedManagedPolicy {
  /**
   * @schema SecurityHubAwsIamAttachedManagedPolicy#PolicyName
   */
  readonly policyName?: string;

  /**
   * @schema SecurityHubAwsIamAttachedManagedPolicy#PolicyArn
   */
  readonly policyArn?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsIamAttachedManagedPolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsIamAttachedManagedPolicy(obj: SecurityHubAwsIamAttachedManagedPolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyName': obj.policyName,
    'PolicyArn': obj.policyArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsIamPermissionsBoundary
 */
export interface SecurityHubAwsIamPermissionsBoundary {
  /**
   * @schema SecurityHubAwsIamPermissionsBoundary#PermissionsBoundaryArn
   */
  readonly permissionsBoundaryArn?: string;

  /**
   * @schema SecurityHubAwsIamPermissionsBoundary#PermissionsBoundaryType
   */
  readonly permissionsBoundaryType?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsIamPermissionsBoundary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsIamPermissionsBoundary(obj: SecurityHubAwsIamPermissionsBoundary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PermissionsBoundaryArn': obj.permissionsBoundaryArn,
    'PermissionsBoundaryType': obj.permissionsBoundaryType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsIamUserPolicy
 */
export interface SecurityHubAwsIamUserPolicy {
  /**
   * @schema SecurityHubAwsIamUserPolicy#PolicyName
   */
  readonly policyName?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsIamUserPolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsIamUserPolicy(obj: SecurityHubAwsIamUserPolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyName': obj.policyName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsIamPolicyVersion
 */
export interface SecurityHubAwsIamPolicyVersion {
  /**
   * @schema SecurityHubAwsIamPolicyVersion#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema SecurityHubAwsIamPolicyVersion#IsDefaultVersion
   */
  readonly isDefaultVersion?: boolean;

  /**
   * @schema SecurityHubAwsIamPolicyVersion#CreateDate
   */
  readonly createDate?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsIamPolicyVersion' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsIamPolicyVersion(obj: SecurityHubAwsIamPolicyVersion | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VersionId': obj.versionId,
    'IsDefaultVersion': obj.isDefaultVersion,
    'CreateDate': obj.createDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsApiGatewayV2RouteSettings
 */
export interface SecurityHubAwsApiGatewayV2RouteSettings {
  /**
   * @schema SecurityHubAwsApiGatewayV2RouteSettings#DetailedMetricsEnabled
   */
  readonly detailedMetricsEnabled?: boolean;

  /**
   * @schema SecurityHubAwsApiGatewayV2RouteSettings#LoggingLevel
   */
  readonly loggingLevel?: string;

  /**
   * @schema SecurityHubAwsApiGatewayV2RouteSettings#DataTraceEnabled
   */
  readonly dataTraceEnabled?: boolean;

  /**
   * @schema SecurityHubAwsApiGatewayV2RouteSettings#ThrottlingBurstLimit
   */
  readonly throttlingBurstLimit?: number;

  /**
   * @schema SecurityHubAwsApiGatewayV2RouteSettings#ThrottlingRateLimit
   */
  readonly throttlingRateLimit?: number;

}

/**
 * Converts an object of type 'SecurityHubAwsApiGatewayV2RouteSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsApiGatewayV2RouteSettings(obj: SecurityHubAwsApiGatewayV2RouteSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DetailedMetricsEnabled': obj.detailedMetricsEnabled,
    'LoggingLevel': obj.loggingLevel,
    'DataTraceEnabled': obj.dataTraceEnabled,
    'ThrottlingBurstLimit': obj.throttlingBurstLimit,
    'ThrottlingRateLimit': obj.throttlingRateLimit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsApiGatewayAccessLogSettings
 */
export interface SecurityHubAwsApiGatewayAccessLogSettings {
  /**
   * @schema SecurityHubAwsApiGatewayAccessLogSettings#Format
   */
  readonly format?: string;

  /**
   * @schema SecurityHubAwsApiGatewayAccessLogSettings#DestinationArn
   */
  readonly destinationArn?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsApiGatewayAccessLogSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsApiGatewayAccessLogSettings(obj: SecurityHubAwsApiGatewayAccessLogSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Format': obj.format,
    'DestinationArn': obj.destinationArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsCorsConfiguration
 */
export interface SecurityHubAwsCorsConfiguration {
  /**
   * @schema SecurityHubAwsCorsConfiguration#AllowOrigins
   */
  readonly allowOrigins?: string[];

  /**
   * @schema SecurityHubAwsCorsConfiguration#AllowCredentials
   */
  readonly allowCredentials?: boolean;

  /**
   * @schema SecurityHubAwsCorsConfiguration#ExposeHeaders
   */
  readonly exposeHeaders?: string[];

  /**
   * @schema SecurityHubAwsCorsConfiguration#MaxAge
   */
  readonly maxAge?: number;

  /**
   * @schema SecurityHubAwsCorsConfiguration#AllowMethods
   */
  readonly allowMethods?: string[];

  /**
   * @schema SecurityHubAwsCorsConfiguration#AllowHeaders
   */
  readonly allowHeaders?: string[];

}

/**
 * Converts an object of type 'SecurityHubAwsCorsConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsCorsConfiguration(obj: SecurityHubAwsCorsConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AllowOrigins': obj.allowOrigins?.map(y => y),
    'AllowCredentials': obj.allowCredentials,
    'ExposeHeaders': obj.exposeHeaders?.map(y => y),
    'MaxAge': obj.maxAge,
    'AllowMethods': obj.allowMethods?.map(y => y),
    'AllowHeaders': obj.allowHeaders?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsDynamoDbTableAttributeDefinition
 */
export interface SecurityHubAwsDynamoDbTableAttributeDefinition {
  /**
   * @schema SecurityHubAwsDynamoDbTableAttributeDefinition#AttributeName
   */
  readonly attributeName?: string;

  /**
   * @schema SecurityHubAwsDynamoDbTableAttributeDefinition#AttributeType
   */
  readonly attributeType?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsDynamoDbTableAttributeDefinition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsDynamoDbTableAttributeDefinition(obj: SecurityHubAwsDynamoDbTableAttributeDefinition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AttributeName': obj.attributeName,
    'AttributeType': obj.attributeType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsDynamoDbTableBillingModeSummary
 */
export interface SecurityHubAwsDynamoDbTableBillingModeSummary {
  /**
   * @schema SecurityHubAwsDynamoDbTableBillingModeSummary#BillingMode
   */
  readonly billingMode?: string;

  /**
   * @schema SecurityHubAwsDynamoDbTableBillingModeSummary#LastUpdateToPayPerRequestDateTime
   */
  readonly lastUpdateToPayPerRequestDateTime?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsDynamoDbTableBillingModeSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsDynamoDbTableBillingModeSummary(obj: SecurityHubAwsDynamoDbTableBillingModeSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BillingMode': obj.billingMode,
    'LastUpdateToPayPerRequestDateTime': obj.lastUpdateToPayPerRequestDateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsDynamoDbTableGlobalSecondaryIndex
 */
export interface SecurityHubAwsDynamoDbTableGlobalSecondaryIndex {
  /**
   * @schema SecurityHubAwsDynamoDbTableGlobalSecondaryIndex#Backfilling
   */
  readonly backfilling?: boolean;

  /**
   * @schema SecurityHubAwsDynamoDbTableGlobalSecondaryIndex#IndexArn
   */
  readonly indexArn?: string;

  /**
   * @schema SecurityHubAwsDynamoDbTableGlobalSecondaryIndex#IndexName
   */
  readonly indexName?: string;

  /**
   * @schema SecurityHubAwsDynamoDbTableGlobalSecondaryIndex#IndexSizeBytes
   */
  readonly indexSizeBytes?: number;

  /**
   * @schema SecurityHubAwsDynamoDbTableGlobalSecondaryIndex#IndexStatus
   */
  readonly indexStatus?: string;

  /**
   * @schema SecurityHubAwsDynamoDbTableGlobalSecondaryIndex#ItemCount
   */
  readonly itemCount?: number;

  /**
   * @schema SecurityHubAwsDynamoDbTableGlobalSecondaryIndex#KeySchema
   */
  readonly keySchema?: SecurityHubAwsDynamoDbTableKeySchema[];

  /**
   * @schema SecurityHubAwsDynamoDbTableGlobalSecondaryIndex#Projection
   */
  readonly projection?: SecurityHubAwsDynamoDbTableProjection;

  /**
   * @schema SecurityHubAwsDynamoDbTableGlobalSecondaryIndex#ProvisionedThroughput
   */
  readonly provisionedThroughput?: SecurityHubAwsDynamoDbTableProvisionedThroughput;

}

/**
 * Converts an object of type 'SecurityHubAwsDynamoDbTableGlobalSecondaryIndex' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsDynamoDbTableGlobalSecondaryIndex(obj: SecurityHubAwsDynamoDbTableGlobalSecondaryIndex | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Backfilling': obj.backfilling,
    'IndexArn': obj.indexArn,
    'IndexName': obj.indexName,
    'IndexSizeBytes': obj.indexSizeBytes,
    'IndexStatus': obj.indexStatus,
    'ItemCount': obj.itemCount,
    'KeySchema': obj.keySchema?.map(y => toJson_SecurityHubAwsDynamoDbTableKeySchema(y)),
    'Projection': toJson_SecurityHubAwsDynamoDbTableProjection(obj.projection),
    'ProvisionedThroughput': toJson_SecurityHubAwsDynamoDbTableProvisionedThroughput(obj.provisionedThroughput),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsDynamoDbTableKeySchema
 */
export interface SecurityHubAwsDynamoDbTableKeySchema {
  /**
   * @schema SecurityHubAwsDynamoDbTableKeySchema#AttributeName
   */
  readonly attributeName?: string;

  /**
   * @schema SecurityHubAwsDynamoDbTableKeySchema#KeyType
   */
  readonly keyType?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsDynamoDbTableKeySchema' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsDynamoDbTableKeySchema(obj: SecurityHubAwsDynamoDbTableKeySchema | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AttributeName': obj.attributeName,
    'KeyType': obj.keyType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsDynamoDbTableLocalSecondaryIndex
 */
export interface SecurityHubAwsDynamoDbTableLocalSecondaryIndex {
  /**
   * @schema SecurityHubAwsDynamoDbTableLocalSecondaryIndex#IndexArn
   */
  readonly indexArn?: string;

  /**
   * @schema SecurityHubAwsDynamoDbTableLocalSecondaryIndex#IndexName
   */
  readonly indexName?: string;

  /**
   * @schema SecurityHubAwsDynamoDbTableLocalSecondaryIndex#KeySchema
   */
  readonly keySchema?: SecurityHubAwsDynamoDbTableKeySchema[];

  /**
   * @schema SecurityHubAwsDynamoDbTableLocalSecondaryIndex#Projection
   */
  readonly projection?: SecurityHubAwsDynamoDbTableProjection;

}

/**
 * Converts an object of type 'SecurityHubAwsDynamoDbTableLocalSecondaryIndex' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsDynamoDbTableLocalSecondaryIndex(obj: SecurityHubAwsDynamoDbTableLocalSecondaryIndex | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IndexArn': obj.indexArn,
    'IndexName': obj.indexName,
    'KeySchema': obj.keySchema?.map(y => toJson_SecurityHubAwsDynamoDbTableKeySchema(y)),
    'Projection': toJson_SecurityHubAwsDynamoDbTableProjection(obj.projection),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsDynamoDbTableProvisionedThroughput
 */
export interface SecurityHubAwsDynamoDbTableProvisionedThroughput {
  /**
   * @schema SecurityHubAwsDynamoDbTableProvisionedThroughput#LastDecreaseDateTime
   */
  readonly lastDecreaseDateTime?: string;

  /**
   * @schema SecurityHubAwsDynamoDbTableProvisionedThroughput#LastIncreaseDateTime
   */
  readonly lastIncreaseDateTime?: string;

  /**
   * @schema SecurityHubAwsDynamoDbTableProvisionedThroughput#NumberOfDecreasesToday
   */
  readonly numberOfDecreasesToday?: number;

  /**
   * @schema SecurityHubAwsDynamoDbTableProvisionedThroughput#ReadCapacityUnits
   */
  readonly readCapacityUnits?: number;

  /**
   * @schema SecurityHubAwsDynamoDbTableProvisionedThroughput#WriteCapacityUnits
   */
  readonly writeCapacityUnits?: number;

}

/**
 * Converts an object of type 'SecurityHubAwsDynamoDbTableProvisionedThroughput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsDynamoDbTableProvisionedThroughput(obj: SecurityHubAwsDynamoDbTableProvisionedThroughput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LastDecreaseDateTime': obj.lastDecreaseDateTime,
    'LastIncreaseDateTime': obj.lastIncreaseDateTime,
    'NumberOfDecreasesToday': obj.numberOfDecreasesToday,
    'ReadCapacityUnits': obj.readCapacityUnits,
    'WriteCapacityUnits': obj.writeCapacityUnits,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsDynamoDbTableReplica
 */
export interface SecurityHubAwsDynamoDbTableReplica {
  /**
   * @schema SecurityHubAwsDynamoDbTableReplica#GlobalSecondaryIndexes
   */
  readonly globalSecondaryIndexes?: SecurityHubAwsDynamoDbTableReplicaGlobalSecondaryIndex[];

  /**
   * @schema SecurityHubAwsDynamoDbTableReplica#KmsMasterKeyId
   */
  readonly kmsMasterKeyId?: string;

  /**
   * @schema SecurityHubAwsDynamoDbTableReplica#ProvisionedThroughputOverride
   */
  readonly provisionedThroughputOverride?: SecurityHubAwsDynamoDbTableProvisionedThroughputOverride;

  /**
   * @schema SecurityHubAwsDynamoDbTableReplica#RegionName
   */
  readonly regionName?: string;

  /**
   * @schema SecurityHubAwsDynamoDbTableReplica#ReplicaStatus
   */
  readonly replicaStatus?: string;

  /**
   * @schema SecurityHubAwsDynamoDbTableReplica#ReplicaStatusDescription
   */
  readonly replicaStatusDescription?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsDynamoDbTableReplica' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsDynamoDbTableReplica(obj: SecurityHubAwsDynamoDbTableReplica | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalSecondaryIndexes': obj.globalSecondaryIndexes?.map(y => toJson_SecurityHubAwsDynamoDbTableReplicaGlobalSecondaryIndex(y)),
    'KmsMasterKeyId': obj.kmsMasterKeyId,
    'ProvisionedThroughputOverride': toJson_SecurityHubAwsDynamoDbTableProvisionedThroughputOverride(obj.provisionedThroughputOverride),
    'RegionName': obj.regionName,
    'ReplicaStatus': obj.replicaStatus,
    'ReplicaStatusDescription': obj.replicaStatusDescription,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsDynamoDbTableRestoreSummary
 */
export interface SecurityHubAwsDynamoDbTableRestoreSummary {
  /**
   * @schema SecurityHubAwsDynamoDbTableRestoreSummary#SourceBackupArn
   */
  readonly sourceBackupArn?: string;

  /**
   * @schema SecurityHubAwsDynamoDbTableRestoreSummary#SourceTableArn
   */
  readonly sourceTableArn?: string;

  /**
   * @schema SecurityHubAwsDynamoDbTableRestoreSummary#RestoreDateTime
   */
  readonly restoreDateTime?: string;

  /**
   * @schema SecurityHubAwsDynamoDbTableRestoreSummary#RestoreInProgress
   */
  readonly restoreInProgress?: boolean;

}

/**
 * Converts an object of type 'SecurityHubAwsDynamoDbTableRestoreSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsDynamoDbTableRestoreSummary(obj: SecurityHubAwsDynamoDbTableRestoreSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceBackupArn': obj.sourceBackupArn,
    'SourceTableArn': obj.sourceTableArn,
    'RestoreDateTime': obj.restoreDateTime,
    'RestoreInProgress': obj.restoreInProgress,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsDynamoDbTableSseDescription
 */
export interface SecurityHubAwsDynamoDbTableSseDescription {
  /**
   * @schema SecurityHubAwsDynamoDbTableSseDescription#InaccessibleEncryptionDateTime
   */
  readonly inaccessibleEncryptionDateTime?: string;

  /**
   * @schema SecurityHubAwsDynamoDbTableSseDescription#Status
   */
  readonly status?: string;

  /**
   * @schema SecurityHubAwsDynamoDbTableSseDescription#SseType
   */
  readonly sseType?: string;

  /**
   * @schema SecurityHubAwsDynamoDbTableSseDescription#KmsMasterKeyArn
   */
  readonly kmsMasterKeyArn?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsDynamoDbTableSseDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsDynamoDbTableSseDescription(obj: SecurityHubAwsDynamoDbTableSseDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InaccessibleEncryptionDateTime': obj.inaccessibleEncryptionDateTime,
    'Status': obj.status,
    'SseType': obj.sseType,
    'KmsMasterKeyArn': obj.kmsMasterKeyArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsDynamoDbTableStreamSpecification
 */
export interface SecurityHubAwsDynamoDbTableStreamSpecification {
  /**
   * @schema SecurityHubAwsDynamoDbTableStreamSpecification#StreamEnabled
   */
  readonly streamEnabled?: boolean;

  /**
   * @schema SecurityHubAwsDynamoDbTableStreamSpecification#StreamViewType
   */
  readonly streamViewType?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsDynamoDbTableStreamSpecification' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsDynamoDbTableStreamSpecification(obj: SecurityHubAwsDynamoDbTableStreamSpecification | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamEnabled': obj.streamEnabled,
    'StreamViewType': obj.streamViewType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsApiGatewayMethodSettings
 */
export interface SecurityHubAwsApiGatewayMethodSettings {
  /**
   * @schema SecurityHubAwsApiGatewayMethodSettings#MetricsEnabled
   */
  readonly metricsEnabled?: boolean;

  /**
   * @schema SecurityHubAwsApiGatewayMethodSettings#LoggingLevel
   */
  readonly loggingLevel?: string;

  /**
   * @schema SecurityHubAwsApiGatewayMethodSettings#DataTraceEnabled
   */
  readonly dataTraceEnabled?: boolean;

  /**
   * @schema SecurityHubAwsApiGatewayMethodSettings#ThrottlingBurstLimit
   */
  readonly throttlingBurstLimit?: number;

  /**
   * @schema SecurityHubAwsApiGatewayMethodSettings#ThrottlingRateLimit
   */
  readonly throttlingRateLimit?: number;

  /**
   * @schema SecurityHubAwsApiGatewayMethodSettings#CachingEnabled
   */
  readonly cachingEnabled?: boolean;

  /**
   * @schema SecurityHubAwsApiGatewayMethodSettings#CacheTtlInSeconds
   */
  readonly cacheTtlInSeconds?: number;

  /**
   * @schema SecurityHubAwsApiGatewayMethodSettings#CacheDataEncrypted
   */
  readonly cacheDataEncrypted?: boolean;

  /**
   * @schema SecurityHubAwsApiGatewayMethodSettings#RequireAuthorizationForCacheControl
   */
  readonly requireAuthorizationForCacheControl?: boolean;

  /**
   * @schema SecurityHubAwsApiGatewayMethodSettings#UnauthorizedCacheControlHeaderStrategy
   */
  readonly unauthorizedCacheControlHeaderStrategy?: string;

  /**
   * @schema SecurityHubAwsApiGatewayMethodSettings#HttpMethod
   */
  readonly httpMethod?: string;

  /**
   * @schema SecurityHubAwsApiGatewayMethodSettings#ResourcePath
   */
  readonly resourcePath?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsApiGatewayMethodSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsApiGatewayMethodSettings(obj: SecurityHubAwsApiGatewayMethodSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MetricsEnabled': obj.metricsEnabled,
    'LoggingLevel': obj.loggingLevel,
    'DataTraceEnabled': obj.dataTraceEnabled,
    'ThrottlingBurstLimit': obj.throttlingBurstLimit,
    'ThrottlingRateLimit': obj.throttlingRateLimit,
    'CachingEnabled': obj.cachingEnabled,
    'CacheTtlInSeconds': obj.cacheTtlInSeconds,
    'CacheDataEncrypted': obj.cacheDataEncrypted,
    'RequireAuthorizationForCacheControl': obj.requireAuthorizationForCacheControl,
    'UnauthorizedCacheControlHeaderStrategy': obj.unauthorizedCacheControlHeaderStrategy,
    'HttpMethod': obj.httpMethod,
    'ResourcePath': obj.resourcePath,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsApiGatewayCanarySettings
 */
export interface SecurityHubAwsApiGatewayCanarySettings {
  /**
   * @schema SecurityHubAwsApiGatewayCanarySettings#PercentTraffic
   */
  readonly percentTraffic?: number;

  /**
   * @schema SecurityHubAwsApiGatewayCanarySettings#DeploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema SecurityHubAwsApiGatewayCanarySettings#StageVariableOverrides
   */
  readonly stageVariableOverrides?: { [key: string]: string };

  /**
   * @schema SecurityHubAwsApiGatewayCanarySettings#UseStageCache
   */
  readonly useStageCache?: boolean;

}

/**
 * Converts an object of type 'SecurityHubAwsApiGatewayCanarySettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsApiGatewayCanarySettings(obj: SecurityHubAwsApiGatewayCanarySettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PercentTraffic': obj.percentTraffic,
    'DeploymentId': obj.deploymentId,
    'StageVariableOverrides': ((obj.stageVariableOverrides) === undefined) ? undefined : (Object.entries(obj.stageVariableOverrides).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'UseStageCache': obj.useStageCache,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsApiGatewayEndpointConfiguration
 */
export interface SecurityHubAwsApiGatewayEndpointConfiguration {
  /**
   * @schema SecurityHubAwsApiGatewayEndpointConfiguration#Types
   */
  readonly types?: string[];

}

/**
 * Converts an object of type 'SecurityHubAwsApiGatewayEndpointConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsApiGatewayEndpointConfiguration(obj: SecurityHubAwsApiGatewayEndpointConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Types': obj.types?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsSsmPatch
 */
export interface SecurityHubAwsSsmPatch {
  /**
   * @schema SecurityHubAwsSsmPatch#ComplianceSummary
   */
  readonly complianceSummary?: SecurityHubAwsSsmComplianceSummary;

}

/**
 * Converts an object of type 'SecurityHubAwsSsmPatch' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsSsmPatch(obj: SecurityHubAwsSsmPatch | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ComplianceSummary': toJson_SecurityHubAwsSsmComplianceSummary(obj.complianceSummary),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsCertificateManagerCertificateDomainValidationOption
 */
export interface SecurityHubAwsCertificateManagerCertificateDomainValidationOption {
  /**
   * @schema SecurityHubAwsCertificateManagerCertificateDomainValidationOption#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema SecurityHubAwsCertificateManagerCertificateDomainValidationOption#ResourceRecord
   */
  readonly resourceRecord?: SecurityHubAwsCertificateManagerCertificateResourceRecord;

  /**
   * @schema SecurityHubAwsCertificateManagerCertificateDomainValidationOption#ValidationDomain
   */
  readonly validationDomain?: string;

  /**
   * @schema SecurityHubAwsCertificateManagerCertificateDomainValidationOption#ValidationEmails
   */
  readonly validationEmails?: string[];

  /**
   * @schema SecurityHubAwsCertificateManagerCertificateDomainValidationOption#ValidationMethod
   */
  readonly validationMethod?: string;

  /**
   * @schema SecurityHubAwsCertificateManagerCertificateDomainValidationOption#ValidationStatus
   */
  readonly validationStatus?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsCertificateManagerCertificateDomainValidationOption' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsCertificateManagerCertificateDomainValidationOption(obj: SecurityHubAwsCertificateManagerCertificateDomainValidationOption | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'ResourceRecord': toJson_SecurityHubAwsCertificateManagerCertificateResourceRecord(obj.resourceRecord),
    'ValidationDomain': obj.validationDomain,
    'ValidationEmails': obj.validationEmails?.map(y => y),
    'ValidationMethod': obj.validationMethod,
    'ValidationStatus': obj.validationStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsCertificateManagerCertificateExtendedKeyUsage
 */
export interface SecurityHubAwsCertificateManagerCertificateExtendedKeyUsage {
  /**
   * @schema SecurityHubAwsCertificateManagerCertificateExtendedKeyUsage#Name
   */
  readonly name?: string;

  /**
   * @schema SecurityHubAwsCertificateManagerCertificateExtendedKeyUsage#OId
   */
  readonly oId?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsCertificateManagerCertificateExtendedKeyUsage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsCertificateManagerCertificateExtendedKeyUsage(obj: SecurityHubAwsCertificateManagerCertificateExtendedKeyUsage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'OId': obj.oId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsCertificateManagerCertificateKeyUsage
 */
export interface SecurityHubAwsCertificateManagerCertificateKeyUsage {
  /**
   * @schema SecurityHubAwsCertificateManagerCertificateKeyUsage#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsCertificateManagerCertificateKeyUsage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsCertificateManagerCertificateKeyUsage(obj: SecurityHubAwsCertificateManagerCertificateKeyUsage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsCertificateManagerCertificateOptions
 */
export interface SecurityHubAwsCertificateManagerCertificateOptions {
  /**
   * @schema SecurityHubAwsCertificateManagerCertificateOptions#CertificateTransparencyLoggingPreference
   */
  readonly certificateTransparencyLoggingPreference?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsCertificateManagerCertificateOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsCertificateManagerCertificateOptions(obj: SecurityHubAwsCertificateManagerCertificateOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CertificateTransparencyLoggingPreference': obj.certificateTransparencyLoggingPreference,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsCertificateManagerCertificateRenewalSummary
 */
export interface SecurityHubAwsCertificateManagerCertificateRenewalSummary {
  /**
   * @schema SecurityHubAwsCertificateManagerCertificateRenewalSummary#DomainValidationOptions
   */
  readonly domainValidationOptions?: SecurityHubAwsCertificateManagerCertificateDomainValidationOption[];

  /**
   * @schema SecurityHubAwsCertificateManagerCertificateRenewalSummary#RenewalStatus
   */
  readonly renewalStatus?: string;

  /**
   * @schema SecurityHubAwsCertificateManagerCertificateRenewalSummary#RenewalStatusReason
   */
  readonly renewalStatusReason?: string;

  /**
   * @schema SecurityHubAwsCertificateManagerCertificateRenewalSummary#UpdatedAt
   */
  readonly updatedAt?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsCertificateManagerCertificateRenewalSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsCertificateManagerCertificateRenewalSummary(obj: SecurityHubAwsCertificateManagerCertificateRenewalSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainValidationOptions': obj.domainValidationOptions?.map(y => toJson_SecurityHubAwsCertificateManagerCertificateDomainValidationOption(y)),
    'RenewalStatus': obj.renewalStatus,
    'RenewalStatusReason': obj.renewalStatusReason,
    'UpdatedAt': obj.updatedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsRedshiftClusterClusterNode
 */
export interface SecurityHubAwsRedshiftClusterClusterNode {
  /**
   * @schema SecurityHubAwsRedshiftClusterClusterNode#NodeRole
   */
  readonly nodeRole?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterClusterNode#PrivateIpAddress
   */
  readonly privateIpAddress?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterClusterNode#PublicIpAddress
   */
  readonly publicIpAddress?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsRedshiftClusterClusterNode' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsRedshiftClusterClusterNode(obj: SecurityHubAwsRedshiftClusterClusterNode | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NodeRole': obj.nodeRole,
    'PrivateIpAddress': obj.privateIpAddress,
    'PublicIpAddress': obj.publicIpAddress,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsRedshiftClusterClusterParameterGroup
 */
export interface SecurityHubAwsRedshiftClusterClusterParameterGroup {
  /**
   * @schema SecurityHubAwsRedshiftClusterClusterParameterGroup#ClusterParameterStatusList
   */
  readonly clusterParameterStatusList?: SecurityHubAwsRedshiftClusterClusterParameterStatus[];

  /**
   * @schema SecurityHubAwsRedshiftClusterClusterParameterGroup#ParameterApplyStatus
   */
  readonly parameterApplyStatus?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterClusterParameterGroup#ParameterGroupName
   */
  readonly parameterGroupName?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsRedshiftClusterClusterParameterGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsRedshiftClusterClusterParameterGroup(obj: SecurityHubAwsRedshiftClusterClusterParameterGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterParameterStatusList': obj.clusterParameterStatusList?.map(y => toJson_SecurityHubAwsRedshiftClusterClusterParameterStatus(y)),
    'ParameterApplyStatus': obj.parameterApplyStatus,
    'ParameterGroupName': obj.parameterGroupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsRedshiftClusterClusterSecurityGroup
 */
export interface SecurityHubAwsRedshiftClusterClusterSecurityGroup {
  /**
   * @schema SecurityHubAwsRedshiftClusterClusterSecurityGroup#ClusterSecurityGroupName
   */
  readonly clusterSecurityGroupName?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterClusterSecurityGroup#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsRedshiftClusterClusterSecurityGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsRedshiftClusterClusterSecurityGroup(obj: SecurityHubAwsRedshiftClusterClusterSecurityGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterSecurityGroupName': obj.clusterSecurityGroupName,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsRedshiftClusterClusterSnapshotCopyStatus
 */
export interface SecurityHubAwsRedshiftClusterClusterSnapshotCopyStatus {
  /**
   * @schema SecurityHubAwsRedshiftClusterClusterSnapshotCopyStatus#DestinationRegion
   */
  readonly destinationRegion?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterClusterSnapshotCopyStatus#ManualSnapshotRetentionPeriod
   */
  readonly manualSnapshotRetentionPeriod?: number;

  /**
   * @schema SecurityHubAwsRedshiftClusterClusterSnapshotCopyStatus#RetentionPeriod
   */
  readonly retentionPeriod?: number;

  /**
   * @schema SecurityHubAwsRedshiftClusterClusterSnapshotCopyStatus#SnapshotCopyGrantName
   */
  readonly snapshotCopyGrantName?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsRedshiftClusterClusterSnapshotCopyStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsRedshiftClusterClusterSnapshotCopyStatus(obj: SecurityHubAwsRedshiftClusterClusterSnapshotCopyStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DestinationRegion': obj.destinationRegion,
    'ManualSnapshotRetentionPeriod': obj.manualSnapshotRetentionPeriod,
    'RetentionPeriod': obj.retentionPeriod,
    'SnapshotCopyGrantName': obj.snapshotCopyGrantName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsRedshiftClusterDeferredMaintenanceWindow
 */
export interface SecurityHubAwsRedshiftClusterDeferredMaintenanceWindow {
  /**
   * @schema SecurityHubAwsRedshiftClusterDeferredMaintenanceWindow#DeferMaintenanceEndTime
   */
  readonly deferMaintenanceEndTime?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterDeferredMaintenanceWindow#DeferMaintenanceIdentifier
   */
  readonly deferMaintenanceIdentifier?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterDeferredMaintenanceWindow#DeferMaintenanceStartTime
   */
  readonly deferMaintenanceStartTime?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsRedshiftClusterDeferredMaintenanceWindow' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsRedshiftClusterDeferredMaintenanceWindow(obj: SecurityHubAwsRedshiftClusterDeferredMaintenanceWindow | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeferMaintenanceEndTime': obj.deferMaintenanceEndTime,
    'DeferMaintenanceIdentifier': obj.deferMaintenanceIdentifier,
    'DeferMaintenanceStartTime': obj.deferMaintenanceStartTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsRedshiftClusterElasticIpStatus
 */
export interface SecurityHubAwsRedshiftClusterElasticIpStatus {
  /**
   * @schema SecurityHubAwsRedshiftClusterElasticIpStatus#ElasticIp
   */
  readonly elasticIp?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterElasticIpStatus#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsRedshiftClusterElasticIpStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsRedshiftClusterElasticIpStatus(obj: SecurityHubAwsRedshiftClusterElasticIpStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ElasticIp': obj.elasticIp,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsRedshiftClusterEndpoint
 */
export interface SecurityHubAwsRedshiftClusterEndpoint {
  /**
   * @schema SecurityHubAwsRedshiftClusterEndpoint#Address
   */
  readonly address?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterEndpoint#Port
   */
  readonly port?: number;

}

/**
 * Converts an object of type 'SecurityHubAwsRedshiftClusterEndpoint' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsRedshiftClusterEndpoint(obj: SecurityHubAwsRedshiftClusterEndpoint | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Address': obj.address,
    'Port': obj.port,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsRedshiftClusterHsmStatus
 */
export interface SecurityHubAwsRedshiftClusterHsmStatus {
  /**
   * @schema SecurityHubAwsRedshiftClusterHsmStatus#HsmClientCertificateIdentifier
   */
  readonly hsmClientCertificateIdentifier?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterHsmStatus#HsmConfigurationIdentifier
   */
  readonly hsmConfigurationIdentifier?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterHsmStatus#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsRedshiftClusterHsmStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsRedshiftClusterHsmStatus(obj: SecurityHubAwsRedshiftClusterHsmStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HsmClientCertificateIdentifier': obj.hsmClientCertificateIdentifier,
    'HsmConfigurationIdentifier': obj.hsmConfigurationIdentifier,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsRedshiftClusterIamRole
 */
export interface SecurityHubAwsRedshiftClusterIamRole {
  /**
   * @schema SecurityHubAwsRedshiftClusterIamRole#ApplyStatus
   */
  readonly applyStatus?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterIamRole#IamRoleArn
   */
  readonly iamRoleArn?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsRedshiftClusterIamRole' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsRedshiftClusterIamRole(obj: SecurityHubAwsRedshiftClusterIamRole | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplyStatus': obj.applyStatus,
    'IamRoleArn': obj.iamRoleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsRedshiftClusterPendingModifiedValues
 */
export interface SecurityHubAwsRedshiftClusterPendingModifiedValues {
  /**
   * @schema SecurityHubAwsRedshiftClusterPendingModifiedValues#AutomatedSnapshotRetentionPeriod
   */
  readonly automatedSnapshotRetentionPeriod?: number;

  /**
   * @schema SecurityHubAwsRedshiftClusterPendingModifiedValues#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterPendingModifiedValues#ClusterType
   */
  readonly clusterType?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterPendingModifiedValues#ClusterVersion
   */
  readonly clusterVersion?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterPendingModifiedValues#EncryptionType
   */
  readonly encryptionType?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterPendingModifiedValues#EnhancedVpcRouting
   */
  readonly enhancedVpcRouting?: boolean;

  /**
   * @schema SecurityHubAwsRedshiftClusterPendingModifiedValues#MaintenanceTrackName
   */
  readonly maintenanceTrackName?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterPendingModifiedValues#MasterUserPassword
   */
  readonly masterUserPassword?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterPendingModifiedValues#NodeType
   */
  readonly nodeType?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterPendingModifiedValues#NumberOfNodes
   */
  readonly numberOfNodes?: number;

  /**
   * @schema SecurityHubAwsRedshiftClusterPendingModifiedValues#PubliclyAccessible
   */
  readonly publiclyAccessible?: boolean;

}

/**
 * Converts an object of type 'SecurityHubAwsRedshiftClusterPendingModifiedValues' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsRedshiftClusterPendingModifiedValues(obj: SecurityHubAwsRedshiftClusterPendingModifiedValues | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutomatedSnapshotRetentionPeriod': obj.automatedSnapshotRetentionPeriod,
    'ClusterIdentifier': obj.clusterIdentifier,
    'ClusterType': obj.clusterType,
    'ClusterVersion': obj.clusterVersion,
    'EncryptionType': obj.encryptionType,
    'EnhancedVpcRouting': obj.enhancedVpcRouting,
    'MaintenanceTrackName': obj.maintenanceTrackName,
    'MasterUserPassword': obj.masterUserPassword,
    'NodeType': obj.nodeType,
    'NumberOfNodes': obj.numberOfNodes,
    'PubliclyAccessible': obj.publiclyAccessible,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsRedshiftClusterResizeInfo
 */
export interface SecurityHubAwsRedshiftClusterResizeInfo {
  /**
   * @schema SecurityHubAwsRedshiftClusterResizeInfo#AllowCancelResize
   */
  readonly allowCancelResize?: boolean;

  /**
   * @schema SecurityHubAwsRedshiftClusterResizeInfo#ResizeType
   */
  readonly resizeType?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsRedshiftClusterResizeInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsRedshiftClusterResizeInfo(obj: SecurityHubAwsRedshiftClusterResizeInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AllowCancelResize': obj.allowCancelResize,
    'ResizeType': obj.resizeType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsRedshiftClusterRestoreStatus
 */
export interface SecurityHubAwsRedshiftClusterRestoreStatus {
  /**
   * @schema SecurityHubAwsRedshiftClusterRestoreStatus#CurrentRestoreRateInMegaBytesPerSecond
   */
  readonly currentRestoreRateInMegaBytesPerSecond?: number;

  /**
   * @schema SecurityHubAwsRedshiftClusterRestoreStatus#ElapsedTimeInSeconds
   */
  readonly elapsedTimeInSeconds?: number;

  /**
   * @schema SecurityHubAwsRedshiftClusterRestoreStatus#EstimatedTimeToCompletionInSeconds
   */
  readonly estimatedTimeToCompletionInSeconds?: number;

  /**
   * @schema SecurityHubAwsRedshiftClusterRestoreStatus#ProgressInMegaBytes
   */
  readonly progressInMegaBytes?: number;

  /**
   * @schema SecurityHubAwsRedshiftClusterRestoreStatus#SnapshotSizeInMegaBytes
   */
  readonly snapshotSizeInMegaBytes?: number;

  /**
   * @schema SecurityHubAwsRedshiftClusterRestoreStatus#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsRedshiftClusterRestoreStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsRedshiftClusterRestoreStatus(obj: SecurityHubAwsRedshiftClusterRestoreStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CurrentRestoreRateInMegaBytesPerSecond': obj.currentRestoreRateInMegaBytesPerSecond,
    'ElapsedTimeInSeconds': obj.elapsedTimeInSeconds,
    'EstimatedTimeToCompletionInSeconds': obj.estimatedTimeToCompletionInSeconds,
    'ProgressInMegaBytes': obj.progressInMegaBytes,
    'SnapshotSizeInMegaBytes': obj.snapshotSizeInMegaBytes,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsRedshiftClusterVpcSecurityGroup
 */
export interface SecurityHubAwsRedshiftClusterVpcSecurityGroup {
  /**
   * @schema SecurityHubAwsRedshiftClusterVpcSecurityGroup#Status
   */
  readonly status?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterVpcSecurityGroup#VpcSecurityGroupId
   */
  readonly vpcSecurityGroupId?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsRedshiftClusterVpcSecurityGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsRedshiftClusterVpcSecurityGroup(obj: SecurityHubAwsRedshiftClusterVpcSecurityGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
    'VpcSecurityGroupId': obj.vpcSecurityGroupId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsElbLoadBalancerBackendServerDescription
 */
export interface SecurityHubAwsElbLoadBalancerBackendServerDescription {
  /**
   * @schema SecurityHubAwsElbLoadBalancerBackendServerDescription#InstancePort
   */
  readonly instancePort?: number;

  /**
   * @schema SecurityHubAwsElbLoadBalancerBackendServerDescription#PolicyNames
   */
  readonly policyNames?: string[];

}

/**
 * Converts an object of type 'SecurityHubAwsElbLoadBalancerBackendServerDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsElbLoadBalancerBackendServerDescription(obj: SecurityHubAwsElbLoadBalancerBackendServerDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstancePort': obj.instancePort,
    'PolicyNames': obj.policyNames?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsElbLoadBalancerHealthCheck
 */
export interface SecurityHubAwsElbLoadBalancerHealthCheck {
  /**
   * @schema SecurityHubAwsElbLoadBalancerHealthCheck#HealthyThreshold
   */
  readonly healthyThreshold?: number;

  /**
   * @schema SecurityHubAwsElbLoadBalancerHealthCheck#Interval
   */
  readonly interval?: number;

  /**
   * @schema SecurityHubAwsElbLoadBalancerHealthCheck#Target
   */
  readonly target?: string;

  /**
   * @schema SecurityHubAwsElbLoadBalancerHealthCheck#Timeout
   */
  readonly timeout?: number;

  /**
   * @schema SecurityHubAwsElbLoadBalancerHealthCheck#UnhealthyThreshold
   */
  readonly unhealthyThreshold?: number;

}

/**
 * Converts an object of type 'SecurityHubAwsElbLoadBalancerHealthCheck' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsElbLoadBalancerHealthCheck(obj: SecurityHubAwsElbLoadBalancerHealthCheck | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HealthyThreshold': obj.healthyThreshold,
    'Interval': obj.interval,
    'Target': obj.target,
    'Timeout': obj.timeout,
    'UnhealthyThreshold': obj.unhealthyThreshold,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsElbLoadBalancerInstance
 */
export interface SecurityHubAwsElbLoadBalancerInstance {
  /**
   * @schema SecurityHubAwsElbLoadBalancerInstance#InstanceId
   */
  readonly instanceId?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsElbLoadBalancerInstance' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsElbLoadBalancerInstance(obj: SecurityHubAwsElbLoadBalancerInstance | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsElbLoadBalancerListenerDescription
 */
export interface SecurityHubAwsElbLoadBalancerListenerDescription {
  /**
   * @schema SecurityHubAwsElbLoadBalancerListenerDescription#Listener
   */
  readonly listener?: SecurityHubAwsElbLoadBalancerListener;

  /**
   * @schema SecurityHubAwsElbLoadBalancerListenerDescription#PolicyNames
   */
  readonly policyNames?: string[];

}

/**
 * Converts an object of type 'SecurityHubAwsElbLoadBalancerListenerDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsElbLoadBalancerListenerDescription(obj: SecurityHubAwsElbLoadBalancerListenerDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Listener': toJson_SecurityHubAwsElbLoadBalancerListener(obj.listener),
    'PolicyNames': obj.policyNames?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsElbLoadBalancerAttributes
 */
export interface SecurityHubAwsElbLoadBalancerAttributes {
  /**
   * @schema SecurityHubAwsElbLoadBalancerAttributes#AccessLog
   */
  readonly accessLog?: SecurityHubAwsElbLoadBalancerAccessLog;

  /**
   * @schema SecurityHubAwsElbLoadBalancerAttributes#ConnectionDraining
   */
  readonly connectionDraining?: SecurityHubAwsElbLoadBalancerConnectionDraining;

  /**
   * @schema SecurityHubAwsElbLoadBalancerAttributes#ConnectionSettings
   */
  readonly connectionSettings?: SecurityHubAwsElbLoadBalancerConnectionSettings;

  /**
   * @schema SecurityHubAwsElbLoadBalancerAttributes#CrossZoneLoadBalancing
   */
  readonly crossZoneLoadBalancing?: SecurityHubAwsElbLoadBalancerCrossZoneLoadBalancing;

}

/**
 * Converts an object of type 'SecurityHubAwsElbLoadBalancerAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsElbLoadBalancerAttributes(obj: SecurityHubAwsElbLoadBalancerAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccessLog': toJson_SecurityHubAwsElbLoadBalancerAccessLog(obj.accessLog),
    'ConnectionDraining': toJson_SecurityHubAwsElbLoadBalancerConnectionDraining(obj.connectionDraining),
    'ConnectionSettings': toJson_SecurityHubAwsElbLoadBalancerConnectionSettings(obj.connectionSettings),
    'CrossZoneLoadBalancing': toJson_SecurityHubAwsElbLoadBalancerCrossZoneLoadBalancing(obj.crossZoneLoadBalancing),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsElbLoadBalancerPolicies
 */
export interface SecurityHubAwsElbLoadBalancerPolicies {
  /**
   * @schema SecurityHubAwsElbLoadBalancerPolicies#AppCookieStickinessPolicies
   */
  readonly appCookieStickinessPolicies?: SecurityHubAwsElbAppCookieStickinessPolicy[];

  /**
   * @schema SecurityHubAwsElbLoadBalancerPolicies#LbCookieStickinessPolicies
   */
  readonly lbCookieStickinessPolicies?: SecurityHubAwsElbLbCookieStickinessPolicy[];

  /**
   * @schema SecurityHubAwsElbLoadBalancerPolicies#OtherPolicies
   */
  readonly otherPolicies?: string[];

}

/**
 * Converts an object of type 'SecurityHubAwsElbLoadBalancerPolicies' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsElbLoadBalancerPolicies(obj: SecurityHubAwsElbLoadBalancerPolicies | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppCookieStickinessPolicies': obj.appCookieStickinessPolicies?.map(y => toJson_SecurityHubAwsElbAppCookieStickinessPolicy(y)),
    'LbCookieStickinessPolicies': obj.lbCookieStickinessPolicies?.map(y => toJson_SecurityHubAwsElbLbCookieStickinessPolicy(y)),
    'OtherPolicies': obj.otherPolicies?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsElbLoadBalancerSourceSecurityGroup
 */
export interface SecurityHubAwsElbLoadBalancerSourceSecurityGroup {
  /**
   * @schema SecurityHubAwsElbLoadBalancerSourceSecurityGroup#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema SecurityHubAwsElbLoadBalancerSourceSecurityGroup#OwnerAlias
   */
  readonly ownerAlias?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsElbLoadBalancerSourceSecurityGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsElbLoadBalancerSourceSecurityGroup(obj: SecurityHubAwsElbLoadBalancerSourceSecurityGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupName': obj.groupName,
    'OwnerAlias': obj.ownerAlias,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsIamGroupPolicy
 */
export interface SecurityHubAwsIamGroupPolicy {
  /**
   * @schema SecurityHubAwsIamGroupPolicy#PolicyName
   */
  readonly policyName?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsIamGroupPolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsIamGroupPolicy(obj: SecurityHubAwsIamGroupPolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyName': obj.policyName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsIamInstanceProfile
 */
export interface SecurityHubAwsIamInstanceProfile {
  /**
   * @schema SecurityHubAwsIamInstanceProfile#Arn
   */
  readonly arn?: string;

  /**
   * @schema SecurityHubAwsIamInstanceProfile#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema SecurityHubAwsIamInstanceProfile#InstanceProfileId
   */
  readonly instanceProfileId?: string;

  /**
   * @schema SecurityHubAwsIamInstanceProfile#InstanceProfileName
   */
  readonly instanceProfileName?: string;

  /**
   * @schema SecurityHubAwsIamInstanceProfile#Path
   */
  readonly path?: string;

  /**
   * @schema SecurityHubAwsIamInstanceProfile#Roles
   */
  readonly roles?: SecurityHubAwsIamInstanceProfileRole[];

}

/**
 * Converts an object of type 'SecurityHubAwsIamInstanceProfile' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsIamInstanceProfile(obj: SecurityHubAwsIamInstanceProfile | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CreateDate': obj.createDate,
    'InstanceProfileId': obj.instanceProfileId,
    'InstanceProfileName': obj.instanceProfileName,
    'Path': obj.path,
    'Roles': obj.roles?.map(y => toJson_SecurityHubAwsIamInstanceProfileRole(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsIamRolePolicy
 */
export interface SecurityHubAwsIamRolePolicy {
  /**
   * @schema SecurityHubAwsIamRolePolicy#PolicyName
   */
  readonly policyName?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsIamRolePolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsIamRolePolicy(obj: SecurityHubAwsIamRolePolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyName': obj.policyName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsLambdaFunctionCode
 */
export interface SecurityHubAwsLambdaFunctionCode {
  /**
   * @schema SecurityHubAwsLambdaFunctionCode#S3Bucket
   */
  readonly s3Bucket?: string;

  /**
   * @schema SecurityHubAwsLambdaFunctionCode#S3Key
   */
  readonly s3Key?: string;

  /**
   * @schema SecurityHubAwsLambdaFunctionCode#S3ObjectVersion
   */
  readonly s3ObjectVersion?: string;

  /**
   * @schema SecurityHubAwsLambdaFunctionCode#ZipFile
   */
  readonly zipFile?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsLambdaFunctionCode' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsLambdaFunctionCode(obj: SecurityHubAwsLambdaFunctionCode | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S3Bucket': obj.s3Bucket,
    'S3Key': obj.s3Key,
    'S3ObjectVersion': obj.s3ObjectVersion,
    'ZipFile': obj.zipFile,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsLambdaFunctionDeadLetterConfig
 */
export interface SecurityHubAwsLambdaFunctionDeadLetterConfig {
  /**
   * @schema SecurityHubAwsLambdaFunctionDeadLetterConfig#TargetArn
   */
  readonly targetArn?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsLambdaFunctionDeadLetterConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsLambdaFunctionDeadLetterConfig(obj: SecurityHubAwsLambdaFunctionDeadLetterConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TargetArn': obj.targetArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsLambdaFunctionEnvironment
 */
export interface SecurityHubAwsLambdaFunctionEnvironment {
  /**
   * @schema SecurityHubAwsLambdaFunctionEnvironment#Variables
   */
  readonly variables?: { [key: string]: string };

  /**
   * @schema SecurityHubAwsLambdaFunctionEnvironment#Error
   */
  readonly error?: SecurityHubAwsLambdaFunctionEnvironmentError;

}

/**
 * Converts an object of type 'SecurityHubAwsLambdaFunctionEnvironment' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsLambdaFunctionEnvironment(obj: SecurityHubAwsLambdaFunctionEnvironment | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Variables': ((obj.variables) === undefined) ? undefined : (Object.entries(obj.variables).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Error': toJson_SecurityHubAwsLambdaFunctionEnvironmentError(obj.error),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsLambdaFunctionLayer
 */
export interface SecurityHubAwsLambdaFunctionLayer {
  /**
   * @schema SecurityHubAwsLambdaFunctionLayer#Arn
   */
  readonly arn?: string;

  /**
   * @schema SecurityHubAwsLambdaFunctionLayer#CodeSize
   */
  readonly codeSize?: number;

}

/**
 * Converts an object of type 'SecurityHubAwsLambdaFunctionLayer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsLambdaFunctionLayer(obj: SecurityHubAwsLambdaFunctionLayer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CodeSize': obj.codeSize,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsLambdaFunctionTracingConfig
 */
export interface SecurityHubAwsLambdaFunctionTracingConfig {
  /**
   * @schema SecurityHubAwsLambdaFunctionTracingConfig#Mode
   */
  readonly mode?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsLambdaFunctionTracingConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsLambdaFunctionTracingConfig(obj: SecurityHubAwsLambdaFunctionTracingConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Mode': obj.mode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsLambdaFunctionVpcConfig
 */
export interface SecurityHubAwsLambdaFunctionVpcConfig {
  /**
   * @schema SecurityHubAwsLambdaFunctionVpcConfig#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema SecurityHubAwsLambdaFunctionVpcConfig#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema SecurityHubAwsLambdaFunctionVpcConfig#VpcId
   */
  readonly vpcId?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsLambdaFunctionVpcConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsLambdaFunctionVpcConfig(obj: SecurityHubAwsLambdaFunctionVpcConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SecurityGroupIds': obj.securityGroupIds?.map(y => y),
    'SubnetIds': obj.subnetIds?.map(y => y),
    'VpcId': obj.vpcId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsRdsDbInstanceAssociatedRole
 */
export interface SecurityHubAwsRdsDbInstanceAssociatedRole {
  /**
   * @schema SecurityHubAwsRdsDbInstanceAssociatedRole#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema SecurityHubAwsRdsDbInstanceAssociatedRole#FeatureName
   */
  readonly featureName?: string;

  /**
   * @schema SecurityHubAwsRdsDbInstanceAssociatedRole#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsRdsDbInstanceAssociatedRole' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsRdsDbInstanceAssociatedRole(obj: SecurityHubAwsRdsDbInstanceAssociatedRole | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoleArn': obj.roleArn,
    'FeatureName': obj.featureName,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsRdsDbInstanceEndpoint
 */
export interface SecurityHubAwsRdsDbInstanceEndpoint {
  /**
   * @schema SecurityHubAwsRdsDbInstanceEndpoint#Address
   */
  readonly address?: string;

  /**
   * @schema SecurityHubAwsRdsDbInstanceEndpoint#Port
   */
  readonly port?: number;

  /**
   * @schema SecurityHubAwsRdsDbInstanceEndpoint#HostedZoneId
   */
  readonly hostedZoneId?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsRdsDbInstanceEndpoint' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsRdsDbInstanceEndpoint(obj: SecurityHubAwsRdsDbInstanceEndpoint | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Address': obj.address,
    'Port': obj.port,
    'HostedZoneId': obj.hostedZoneId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsRdsDbInstanceVpcSecurityGroup
 */
export interface SecurityHubAwsRdsDbInstanceVpcSecurityGroup {
  /**
   * @schema SecurityHubAwsRdsDbInstanceVpcSecurityGroup#VpcSecurityGroupId
   */
  readonly vpcSecurityGroupId?: string;

  /**
   * @schema SecurityHubAwsRdsDbInstanceVpcSecurityGroup#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsRdsDbInstanceVpcSecurityGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsRdsDbInstanceVpcSecurityGroup(obj: SecurityHubAwsRdsDbInstanceVpcSecurityGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VpcSecurityGroupId': obj.vpcSecurityGroupId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsRdsDbParameterGroup
 */
export interface SecurityHubAwsRdsDbParameterGroup {
  /**
   * @schema SecurityHubAwsRdsDbParameterGroup#DbParameterGroupName
   */
  readonly dbParameterGroupName?: string;

  /**
   * @schema SecurityHubAwsRdsDbParameterGroup#ParameterApplyStatus
   */
  readonly parameterApplyStatus?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsRdsDbParameterGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsRdsDbParameterGroup(obj: SecurityHubAwsRdsDbParameterGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DbParameterGroupName': obj.dbParameterGroupName,
    'ParameterApplyStatus': obj.parameterApplyStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsRdsDbSubnetGroup
 */
export interface SecurityHubAwsRdsDbSubnetGroup {
  /**
   * @schema SecurityHubAwsRdsDbSubnetGroup#DbSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema SecurityHubAwsRdsDbSubnetGroup#DbSubnetGroupDescription
   */
  readonly dbSubnetGroupDescription?: string;

  /**
   * @schema SecurityHubAwsRdsDbSubnetGroup#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema SecurityHubAwsRdsDbSubnetGroup#SubnetGroupStatus
   */
  readonly subnetGroupStatus?: string;

  /**
   * @schema SecurityHubAwsRdsDbSubnetGroup#Subnets
   */
  readonly subnets?: SecurityHubAwsRdsDbSubnetGroupSubnet[];

  /**
   * @schema SecurityHubAwsRdsDbSubnetGroup#DbSubnetGroupArn
   */
  readonly dbSubnetGroupArn?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsRdsDbSubnetGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsRdsDbSubnetGroup(obj: SecurityHubAwsRdsDbSubnetGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DbSubnetGroupName': obj.dbSubnetGroupName,
    'DbSubnetGroupDescription': obj.dbSubnetGroupDescription,
    'VpcId': obj.vpcId,
    'SubnetGroupStatus': obj.subnetGroupStatus,
    'Subnets': obj.subnets?.map(y => toJson_SecurityHubAwsRdsDbSubnetGroupSubnet(y)),
    'DbSubnetGroupArn': obj.dbSubnetGroupArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsRdsDbPendingModifiedValues
 */
export interface SecurityHubAwsRdsDbPendingModifiedValues {
  /**
   * @schema SecurityHubAwsRdsDbPendingModifiedValues#DbInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema SecurityHubAwsRdsDbPendingModifiedValues#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema SecurityHubAwsRdsDbPendingModifiedValues#MasterUserPassword
   */
  readonly masterUserPassword?: string;

  /**
   * @schema SecurityHubAwsRdsDbPendingModifiedValues#Port
   */
  readonly port?: number;

  /**
   * @schema SecurityHubAwsRdsDbPendingModifiedValues#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema SecurityHubAwsRdsDbPendingModifiedValues#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema SecurityHubAwsRdsDbPendingModifiedValues#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema SecurityHubAwsRdsDbPendingModifiedValues#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema SecurityHubAwsRdsDbPendingModifiedValues#Iops
   */
  readonly iops?: number;

  /**
   * @schema SecurityHubAwsRdsDbPendingModifiedValues#DbInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema SecurityHubAwsRdsDbPendingModifiedValues#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema SecurityHubAwsRdsDbPendingModifiedValues#CaCertificateIdentifier
   */
  readonly caCertificateIdentifier?: string;

  /**
   * @schema SecurityHubAwsRdsDbPendingModifiedValues#DbSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema SecurityHubAwsRdsDbPendingModifiedValues#PendingCloudWatchLogsExports
   */
  readonly pendingCloudWatchLogsExports?: SecurityHubAwsRdsPendingCloudWatchLogsExports;

  /**
   * @schema SecurityHubAwsRdsDbPendingModifiedValues#ProcessorFeatures
   */
  readonly processorFeatures?: SecurityHubAwsRdsDbProcessorFeature[];

}

/**
 * Converts an object of type 'SecurityHubAwsRdsDbPendingModifiedValues' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsRdsDbPendingModifiedValues(obj: SecurityHubAwsRdsDbPendingModifiedValues | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DbInstanceClass': obj.dbInstanceClass,
    'AllocatedStorage': obj.allocatedStorage,
    'MasterUserPassword': obj.masterUserPassword,
    'Port': obj.port,
    'BackupRetentionPeriod': obj.backupRetentionPeriod,
    'MultiAZ': obj.multiAz,
    'EngineVersion': obj.engineVersion,
    'LicenseModel': obj.licenseModel,
    'Iops': obj.iops,
    'DbInstanceIdentifier': obj.dbInstanceIdentifier,
    'StorageType': obj.storageType,
    'CaCertificateIdentifier': obj.caCertificateIdentifier,
    'DbSubnetGroupName': obj.dbSubnetGroupName,
    'PendingCloudWatchLogsExports': toJson_SecurityHubAwsRdsPendingCloudWatchLogsExports(obj.pendingCloudWatchLogsExports),
    'ProcessorFeatures': obj.processorFeatures?.map(y => toJson_SecurityHubAwsRdsDbProcessorFeature(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsRdsDbOptionGroupMembership
 */
export interface SecurityHubAwsRdsDbOptionGroupMembership {
  /**
   * @schema SecurityHubAwsRdsDbOptionGroupMembership#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema SecurityHubAwsRdsDbOptionGroupMembership#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsRdsDbOptionGroupMembership' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsRdsDbOptionGroupMembership(obj: SecurityHubAwsRdsDbOptionGroupMembership | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OptionGroupName': obj.optionGroupName,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsRdsDbStatusInfo
 */
export interface SecurityHubAwsRdsDbStatusInfo {
  /**
   * @schema SecurityHubAwsRdsDbStatusInfo#StatusType
   */
  readonly statusType?: string;

  /**
   * @schema SecurityHubAwsRdsDbStatusInfo#Normal
   */
  readonly normal?: boolean;

  /**
   * @schema SecurityHubAwsRdsDbStatusInfo#Status
   */
  readonly status?: string;

  /**
   * @schema SecurityHubAwsRdsDbStatusInfo#Message
   */
  readonly message?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsRdsDbStatusInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsRdsDbStatusInfo(obj: SecurityHubAwsRdsDbStatusInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StatusType': obj.statusType,
    'Normal': obj.normal,
    'Status': obj.status,
    'Message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsRdsDbDomainMembership
 */
export interface SecurityHubAwsRdsDbDomainMembership {
  /**
   * @schema SecurityHubAwsRdsDbDomainMembership#Domain
   */
  readonly domain?: string;

  /**
   * @schema SecurityHubAwsRdsDbDomainMembership#Status
   */
  readonly status?: string;

  /**
   * @schema SecurityHubAwsRdsDbDomainMembership#Fqdn
   */
  readonly fqdn?: string;

  /**
   * @schema SecurityHubAwsRdsDbDomainMembership#IamRoleName
   */
  readonly iamRoleName?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsRdsDbDomainMembership' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsRdsDbDomainMembership(obj: SecurityHubAwsRdsDbDomainMembership | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Domain': obj.domain,
    'Status': obj.status,
    'Fqdn': obj.fqdn,
    'IamRoleName': obj.iamRoleName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsRdsDbProcessorFeature
 */
export interface SecurityHubAwsRdsDbProcessorFeature {
  /**
   * @schema SecurityHubAwsRdsDbProcessorFeature#Name
   */
  readonly name?: string;

  /**
   * @schema SecurityHubAwsRdsDbProcessorFeature#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsRdsDbProcessorFeature' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsRdsDbProcessorFeature(obj: SecurityHubAwsRdsDbProcessorFeature | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsSnsTopicSubscription
 */
export interface SecurityHubAwsSnsTopicSubscription {
  /**
   * @schema SecurityHubAwsSnsTopicSubscription#Endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema SecurityHubAwsSnsTopicSubscription#Protocol
   */
  readonly protocol?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsSnsTopicSubscription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsSnsTopicSubscription(obj: SecurityHubAwsSnsTopicSubscription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Endpoint': obj.endpoint,
    'Protocol': obj.protocol,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsWafWebAclRule
 */
export interface SecurityHubAwsWafWebAclRule {
  /**
   * @schema SecurityHubAwsWafWebAclRule#Action
   */
  readonly action?: SecurityHubWafAction;

  /**
   * @schema SecurityHubAwsWafWebAclRule#ExcludedRules
   */
  readonly excludedRules?: SecurityHubWafExcludedRule[];

  /**
   * @schema SecurityHubAwsWafWebAclRule#OverrideAction
   */
  readonly overrideAction?: SecurityHubWafOverrideAction;

  /**
   * @schema SecurityHubAwsWafWebAclRule#Priority
   */
  readonly priority?: number;

  /**
   * @schema SecurityHubAwsWafWebAclRule#RuleId
   */
  readonly ruleId?: string;

  /**
   * @schema SecurityHubAwsWafWebAclRule#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsWafWebAclRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsWafWebAclRule(obj: SecurityHubAwsWafWebAclRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Action': toJson_SecurityHubWafAction(obj.action),
    'ExcludedRules': obj.excludedRules?.map(y => toJson_SecurityHubWafExcludedRule(y)),
    'OverrideAction': toJson_SecurityHubWafOverrideAction(obj.overrideAction),
    'Priority': obj.priority,
    'RuleId': obj.ruleId,
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsRdsDbClusterAssociatedRole
 */
export interface SecurityHubAwsRdsDbClusterAssociatedRole {
  /**
   * @schema SecurityHubAwsRdsDbClusterAssociatedRole#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema SecurityHubAwsRdsDbClusterAssociatedRole#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsRdsDbClusterAssociatedRole' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsRdsDbClusterAssociatedRole(obj: SecurityHubAwsRdsDbClusterAssociatedRole | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoleArn': obj.roleArn,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsRdsDbClusterOptionGroupMembership
 */
export interface SecurityHubAwsRdsDbClusterOptionGroupMembership {
  /**
   * @schema SecurityHubAwsRdsDbClusterOptionGroupMembership#DbClusterOptionGroupName
   */
  readonly dbClusterOptionGroupName?: string;

  /**
   * @schema SecurityHubAwsRdsDbClusterOptionGroupMembership#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsRdsDbClusterOptionGroupMembership' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsRdsDbClusterOptionGroupMembership(obj: SecurityHubAwsRdsDbClusterOptionGroupMembership | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DbClusterOptionGroupName': obj.dbClusterOptionGroupName,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsRdsDbClusterMember
 */
export interface SecurityHubAwsRdsDbClusterMember {
  /**
   * @schema SecurityHubAwsRdsDbClusterMember#IsClusterWriter
   */
  readonly isClusterWriter?: boolean;

  /**
   * @schema SecurityHubAwsRdsDbClusterMember#PromotionTier
   */
  readonly promotionTier?: number;

  /**
   * @schema SecurityHubAwsRdsDbClusterMember#DbInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema SecurityHubAwsRdsDbClusterMember#DbClusterParameterGroupStatus
   */
  readonly dbClusterParameterGroupStatus?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsRdsDbClusterMember' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsRdsDbClusterMember(obj: SecurityHubAwsRdsDbClusterMember | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IsClusterWriter': obj.isClusterWriter,
    'PromotionTier': obj.promotionTier,
    'DbInstanceIdentifier': obj.dbInstanceIdentifier,
    'DbClusterParameterGroupStatus': obj.dbClusterParameterGroupStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEcsClusterClusterSettingsDetails
 */
export interface SecurityHubAwsEcsClusterClusterSettingsDetails {
  /**
   * @schema SecurityHubAwsEcsClusterClusterSettingsDetails#Name
   */
  readonly name?: string;

  /**
   * @schema SecurityHubAwsEcsClusterClusterSettingsDetails#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsEcsClusterClusterSettingsDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEcsClusterClusterSettingsDetails(obj: SecurityHubAwsEcsClusterClusterSettingsDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEcsClusterConfigurationDetails
 */
export interface SecurityHubAwsEcsClusterConfigurationDetails {
  /**
   * @schema SecurityHubAwsEcsClusterConfigurationDetails#ExecuteCommandConfiguration
   */
  readonly executeCommandConfiguration?: SecurityHubAwsEcsClusterConfigurationExecuteCommandConfigurationDetails;

}

/**
 * Converts an object of type 'SecurityHubAwsEcsClusterConfigurationDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEcsClusterConfigurationDetails(obj: SecurityHubAwsEcsClusterConfigurationDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ExecuteCommandConfiguration': toJson_SecurityHubAwsEcsClusterConfigurationExecuteCommandConfigurationDetails(obj.executeCommandConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEcsClusterDefaultCapacityProviderStrategyDetails
 */
export interface SecurityHubAwsEcsClusterDefaultCapacityProviderStrategyDetails {
  /**
   * @schema SecurityHubAwsEcsClusterDefaultCapacityProviderStrategyDetails#Base
   */
  readonly base?: number;

  /**
   * @schema SecurityHubAwsEcsClusterDefaultCapacityProviderStrategyDetails#CapacityProvider
   */
  readonly capacityProvider?: string;

  /**
   * @schema SecurityHubAwsEcsClusterDefaultCapacityProviderStrategyDetails#Weight
   */
  readonly weight?: number;

}

/**
 * Converts an object of type 'SecurityHubAwsEcsClusterDefaultCapacityProviderStrategyDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEcsClusterDefaultCapacityProviderStrategyDetails(obj: SecurityHubAwsEcsClusterDefaultCapacityProviderStrategyDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Base': obj.base,
    'CapacityProvider': obj.capacityProvider,
    'Weight': obj.weight,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsDetails
 */
export interface SecurityHubAwsEcsTaskDefinitionContainerDefinitionsDetails {
  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsDetails#Command
   */
  readonly command?: string[];

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsDetails#Cpu
   */
  readonly cpu?: number;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsDetails#DependsOn
   */
  readonly dependsOn?: SecurityHubAwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails[];

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsDetails#DisableNetworking
   */
  readonly disableNetworking?: boolean;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsDetails#DnsSearchDomains
   */
  readonly dnsSearchDomains?: string[];

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsDetails#DnsServers
   */
  readonly dnsServers?: string[];

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsDetails#DockerLabels
   */
  readonly dockerLabels?: { [key: string]: string };

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsDetails#DockerSecurityOptions
   */
  readonly dockerSecurityOptions?: string[];

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsDetails#EntryPoint
   */
  readonly entryPoint?: string[];

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsDetails#Environment
   */
  readonly environment?: SecurityHubAwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails[];

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsDetails#EnvironmentFiles
   */
  readonly environmentFiles?: SecurityHubAwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails[];

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsDetails#Essential
   */
  readonly essential?: boolean;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsDetails#ExtraHosts
   */
  readonly extraHosts?: SecurityHubAwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails[];

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsDetails#FirelensConfiguration
   */
  readonly firelensConfiguration?: SecurityHubAwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsDetails#HealthCheck
   */
  readonly healthCheck?: SecurityHubAwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsDetails#Hostname
   */
  readonly hostname?: string;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsDetails#Image
   */
  readonly image?: string;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsDetails#Interactive
   */
  readonly interactive?: boolean;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsDetails#Links
   */
  readonly links?: string[];

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsDetails#LinuxParameters
   */
  readonly linuxParameters?: SecurityHubAwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsDetails#LogConfiguration
   */
  readonly logConfiguration?: SecurityHubAwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsDetails#Memory
   */
  readonly memory?: number;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsDetails#MemoryReservation
   */
  readonly memoryReservation?: number;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsDetails#MountPoints
   */
  readonly mountPoints?: SecurityHubAwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails[];

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsDetails#Name
   */
  readonly name?: string;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsDetails#PortMappings
   */
  readonly portMappings?: SecurityHubAwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails[];

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsDetails#Privileged
   */
  readonly privileged?: boolean;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsDetails#PseudoTerminal
   */
  readonly pseudoTerminal?: boolean;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsDetails#ReadonlyRootFilesystem
   */
  readonly readonlyRootFilesystem?: boolean;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsDetails#RepositoryCredentials
   */
  readonly repositoryCredentials?: SecurityHubAwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsDetails#ResourceRequirements
   */
  readonly resourceRequirements?: SecurityHubAwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails[];

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsDetails#Secrets
   */
  readonly secrets?: SecurityHubAwsEcsTaskDefinitionContainerDefinitionsSecretsDetails[];

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsDetails#StartTimeout
   */
  readonly startTimeout?: number;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsDetails#StopTimeout
   */
  readonly stopTimeout?: number;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsDetails#SystemControls
   */
  readonly systemControls?: SecurityHubAwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails[];

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsDetails#Ulimits
   */
  readonly ulimits?: SecurityHubAwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails[];

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsDetails#User
   */
  readonly user?: string;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsDetails#VolumesFrom
   */
  readonly volumesFrom?: SecurityHubAwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails[];

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsDetails#WorkingDirectory
   */
  readonly workingDirectory?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsEcsTaskDefinitionContainerDefinitionsDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEcsTaskDefinitionContainerDefinitionsDetails(obj: SecurityHubAwsEcsTaskDefinitionContainerDefinitionsDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Command': obj.command?.map(y => y),
    'Cpu': obj.cpu,
    'DependsOn': obj.dependsOn?.map(y => toJson_SecurityHubAwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails(y)),
    'DisableNetworking': obj.disableNetworking,
    'DnsSearchDomains': obj.dnsSearchDomains?.map(y => y),
    'DnsServers': obj.dnsServers?.map(y => y),
    'DockerLabels': ((obj.dockerLabels) === undefined) ? undefined : (Object.entries(obj.dockerLabels).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'DockerSecurityOptions': obj.dockerSecurityOptions?.map(y => y),
    'EntryPoint': obj.entryPoint?.map(y => y),
    'Environment': obj.environment?.map(y => toJson_SecurityHubAwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails(y)),
    'EnvironmentFiles': obj.environmentFiles?.map(y => toJson_SecurityHubAwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails(y)),
    'Essential': obj.essential,
    'ExtraHosts': obj.extraHosts?.map(y => toJson_SecurityHubAwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails(y)),
    'FirelensConfiguration': toJson_SecurityHubAwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails(obj.firelensConfiguration),
    'HealthCheck': toJson_SecurityHubAwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails(obj.healthCheck),
    'Hostname': obj.hostname,
    'Image': obj.image,
    'Interactive': obj.interactive,
    'Links': obj.links?.map(y => y),
    'LinuxParameters': toJson_SecurityHubAwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails(obj.linuxParameters),
    'LogConfiguration': toJson_SecurityHubAwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails(obj.logConfiguration),
    'Memory': obj.memory,
    'MemoryReservation': obj.memoryReservation,
    'MountPoints': obj.mountPoints?.map(y => toJson_SecurityHubAwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails(y)),
    'Name': obj.name,
    'PortMappings': obj.portMappings?.map(y => toJson_SecurityHubAwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails(y)),
    'Privileged': obj.privileged,
    'PseudoTerminal': obj.pseudoTerminal,
    'ReadonlyRootFilesystem': obj.readonlyRootFilesystem,
    'RepositoryCredentials': toJson_SecurityHubAwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails(obj.repositoryCredentials),
    'ResourceRequirements': obj.resourceRequirements?.map(y => toJson_SecurityHubAwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails(y)),
    'Secrets': obj.secrets?.map(y => toJson_SecurityHubAwsEcsTaskDefinitionContainerDefinitionsSecretsDetails(y)),
    'StartTimeout': obj.startTimeout,
    'StopTimeout': obj.stopTimeout,
    'SystemControls': obj.systemControls?.map(y => toJson_SecurityHubAwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails(y)),
    'Ulimits': obj.ulimits?.map(y => toJson_SecurityHubAwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails(y)),
    'User': obj.user,
    'VolumesFrom': obj.volumesFrom?.map(y => toJson_SecurityHubAwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails(y)),
    'WorkingDirectory': obj.workingDirectory,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEcsTaskDefinitionInferenceAcceleratorsDetails
 */
export interface SecurityHubAwsEcsTaskDefinitionInferenceAcceleratorsDetails {
  /**
   * @schema SecurityHubAwsEcsTaskDefinitionInferenceAcceleratorsDetails#DeviceName
   */
  readonly deviceName?: string;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionInferenceAcceleratorsDetails#DeviceType
   */
  readonly deviceType?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsEcsTaskDefinitionInferenceAcceleratorsDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEcsTaskDefinitionInferenceAcceleratorsDetails(obj: SecurityHubAwsEcsTaskDefinitionInferenceAcceleratorsDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeviceName': obj.deviceName,
    'DeviceType': obj.deviceType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEcsTaskDefinitionPlacementConstraintsDetails
 */
export interface SecurityHubAwsEcsTaskDefinitionPlacementConstraintsDetails {
  /**
   * @schema SecurityHubAwsEcsTaskDefinitionPlacementConstraintsDetails#Expression
   */
  readonly expression?: string;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionPlacementConstraintsDetails#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsEcsTaskDefinitionPlacementConstraintsDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEcsTaskDefinitionPlacementConstraintsDetails(obj: SecurityHubAwsEcsTaskDefinitionPlacementConstraintsDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Expression': obj.expression,
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEcsTaskDefinitionProxyConfigurationDetails
 */
export interface SecurityHubAwsEcsTaskDefinitionProxyConfigurationDetails {
  /**
   * @schema SecurityHubAwsEcsTaskDefinitionProxyConfigurationDetails#ContainerName
   */
  readonly containerName?: string;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionProxyConfigurationDetails#ProxyConfigurationProperties
   */
  readonly proxyConfigurationProperties?: SecurityHubAwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails[];

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionProxyConfigurationDetails#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsEcsTaskDefinitionProxyConfigurationDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEcsTaskDefinitionProxyConfigurationDetails(obj: SecurityHubAwsEcsTaskDefinitionProxyConfigurationDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContainerName': obj.containerName,
    'ProxyConfigurationProperties': obj.proxyConfigurationProperties?.map(y => toJson_SecurityHubAwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails(y)),
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEcsTaskDefinitionVolumesDetails
 */
export interface SecurityHubAwsEcsTaskDefinitionVolumesDetails {
  /**
   * @schema SecurityHubAwsEcsTaskDefinitionVolumesDetails#DockerVolumeConfiguration
   */
  readonly dockerVolumeConfiguration?: SecurityHubAwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionVolumesDetails#EfsVolumeConfiguration
   */
  readonly efsVolumeConfiguration?: SecurityHubAwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionVolumesDetails#Host
   */
  readonly host?: SecurityHubAwsEcsTaskDefinitionVolumesHostDetails;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionVolumesDetails#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsEcsTaskDefinitionVolumesDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEcsTaskDefinitionVolumesDetails(obj: SecurityHubAwsEcsTaskDefinitionVolumesDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DockerVolumeConfiguration': toJson_SecurityHubAwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails(obj.dockerVolumeConfiguration),
    'EfsVolumeConfiguration': toJson_SecurityHubAwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails(obj.efsVolumeConfiguration),
    'Host': toJson_SecurityHubAwsEcsTaskDefinitionVolumesHostDetails(obj.host),
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEcsServiceCapacityProviderStrategyDetails
 */
export interface SecurityHubAwsEcsServiceCapacityProviderStrategyDetails {
  /**
   * @schema SecurityHubAwsEcsServiceCapacityProviderStrategyDetails#Base
   */
  readonly base?: number;

  /**
   * @schema SecurityHubAwsEcsServiceCapacityProviderStrategyDetails#CapacityProvider
   */
  readonly capacityProvider?: string;

  /**
   * @schema SecurityHubAwsEcsServiceCapacityProviderStrategyDetails#Weight
   */
  readonly weight?: number;

}

/**
 * Converts an object of type 'SecurityHubAwsEcsServiceCapacityProviderStrategyDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEcsServiceCapacityProviderStrategyDetails(obj: SecurityHubAwsEcsServiceCapacityProviderStrategyDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Base': obj.base,
    'CapacityProvider': obj.capacityProvider,
    'Weight': obj.weight,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEcsServiceDeploymentConfigurationDetails
 */
export interface SecurityHubAwsEcsServiceDeploymentConfigurationDetails {
  /**
   * @schema SecurityHubAwsEcsServiceDeploymentConfigurationDetails#DeploymentCircuitBreaker
   */
  readonly deploymentCircuitBreaker?: SecurityHubAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails;

  /**
   * @schema SecurityHubAwsEcsServiceDeploymentConfigurationDetails#MaximumPercent
   */
  readonly maximumPercent?: number;

  /**
   * @schema SecurityHubAwsEcsServiceDeploymentConfigurationDetails#MinimumHealthyPercent
   */
  readonly minimumHealthyPercent?: number;

}

/**
 * Converts an object of type 'SecurityHubAwsEcsServiceDeploymentConfigurationDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEcsServiceDeploymentConfigurationDetails(obj: SecurityHubAwsEcsServiceDeploymentConfigurationDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeploymentCircuitBreaker': toJson_SecurityHubAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails(obj.deploymentCircuitBreaker),
    'MaximumPercent': obj.maximumPercent,
    'MinimumHealthyPercent': obj.minimumHealthyPercent,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEcsServiceDeploymentControllerDetails
 */
export interface SecurityHubAwsEcsServiceDeploymentControllerDetails {
  /**
   * @schema SecurityHubAwsEcsServiceDeploymentControllerDetails#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsEcsServiceDeploymentControllerDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEcsServiceDeploymentControllerDetails(obj: SecurityHubAwsEcsServiceDeploymentControllerDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEcsServiceLoadBalancersDetails
 */
export interface SecurityHubAwsEcsServiceLoadBalancersDetails {
  /**
   * @schema SecurityHubAwsEcsServiceLoadBalancersDetails#ContainerName
   */
  readonly containerName?: string;

  /**
   * @schema SecurityHubAwsEcsServiceLoadBalancersDetails#ContainerPort
   */
  readonly containerPort?: number;

  /**
   * @schema SecurityHubAwsEcsServiceLoadBalancersDetails#LoadBalancerName
   */
  readonly loadBalancerName?: string;

  /**
   * @schema SecurityHubAwsEcsServiceLoadBalancersDetails#TargetGroupArn
   */
  readonly targetGroupArn?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsEcsServiceLoadBalancersDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEcsServiceLoadBalancersDetails(obj: SecurityHubAwsEcsServiceLoadBalancersDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContainerName': obj.containerName,
    'ContainerPort': obj.containerPort,
    'LoadBalancerName': obj.loadBalancerName,
    'TargetGroupArn': obj.targetGroupArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEcsServiceNetworkConfigurationDetails
 */
export interface SecurityHubAwsEcsServiceNetworkConfigurationDetails {
  /**
   * @schema SecurityHubAwsEcsServiceNetworkConfigurationDetails#AwsVpcConfiguration
   */
  readonly awsVpcConfiguration?: SecurityHubAwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails;

}

/**
 * Converts an object of type 'SecurityHubAwsEcsServiceNetworkConfigurationDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEcsServiceNetworkConfigurationDetails(obj: SecurityHubAwsEcsServiceNetworkConfigurationDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsVpcConfiguration': toJson_SecurityHubAwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails(obj.awsVpcConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEcsServicePlacementConstraintsDetails
 */
export interface SecurityHubAwsEcsServicePlacementConstraintsDetails {
  /**
   * @schema SecurityHubAwsEcsServicePlacementConstraintsDetails#Expression
   */
  readonly expression?: string;

  /**
   * @schema SecurityHubAwsEcsServicePlacementConstraintsDetails#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsEcsServicePlacementConstraintsDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEcsServicePlacementConstraintsDetails(obj: SecurityHubAwsEcsServicePlacementConstraintsDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Expression': obj.expression,
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEcsServicePlacementStrategiesDetails
 */
export interface SecurityHubAwsEcsServicePlacementStrategiesDetails {
  /**
   * @schema SecurityHubAwsEcsServicePlacementStrategiesDetails#Field
   */
  readonly field?: string;

  /**
   * @schema SecurityHubAwsEcsServicePlacementStrategiesDetails#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsEcsServicePlacementStrategiesDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEcsServicePlacementStrategiesDetails(obj: SecurityHubAwsEcsServicePlacementStrategiesDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Field': obj.field,
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEcsServiceServiceRegistriesDetails
 */
export interface SecurityHubAwsEcsServiceServiceRegistriesDetails {
  /**
   * @schema SecurityHubAwsEcsServiceServiceRegistriesDetails#ContainerName
   */
  readonly containerName?: string;

  /**
   * @schema SecurityHubAwsEcsServiceServiceRegistriesDetails#ContainerPort
   */
  readonly containerPort?: number;

  /**
   * @schema SecurityHubAwsEcsServiceServiceRegistriesDetails#Port
   */
  readonly port?: number;

  /**
   * @schema SecurityHubAwsEcsServiceServiceRegistriesDetails#RegistryArn
   */
  readonly registryArn?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsEcsServiceServiceRegistriesDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEcsServiceServiceRegistriesDetails(obj: SecurityHubAwsEcsServiceServiceRegistriesDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContainerName': obj.containerName,
    'ContainerPort': obj.containerPort,
    'Port': obj.port,
    'RegistryArn': obj.registryArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubIpOrganizationDetails
 */
export interface SecurityHubIpOrganizationDetails {
  /**
   * @schema SecurityHubIpOrganizationDetails#Asn
   */
  readonly asn?: number;

  /**
   * @schema SecurityHubIpOrganizationDetails#AsnOrg
   */
  readonly asnOrg?: string;

  /**
   * @schema SecurityHubIpOrganizationDetails#Isp
   */
  readonly isp?: string;

  /**
   * @schema SecurityHubIpOrganizationDetails#Org
   */
  readonly org?: string;

}

/**
 * Converts an object of type 'SecurityHubIpOrganizationDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubIpOrganizationDetails(obj: SecurityHubIpOrganizationDetails | undefined): Record<string, any> | undefined {
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
 * @schema SecurityHubCountry
 */
export interface SecurityHubCountry {
  /**
   * @schema SecurityHubCountry#CountryCode
   */
  readonly countryCode?: string;

  /**
   * @schema SecurityHubCountry#CountryName
   */
  readonly countryName?: string;

}

/**
 * Converts an object of type 'SecurityHubCountry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubCountry(obj: SecurityHubCountry | undefined): Record<string, any> | undefined {
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
 * @schema SecurityHubCity
 */
export interface SecurityHubCity {
  /**
   * @schema SecurityHubCity#CityName
   */
  readonly cityName?: string;

}

/**
 * Converts an object of type 'SecurityHubCity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubCity(obj: SecurityHubCity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CityName': obj.cityName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubGeoLocation
 */
export interface SecurityHubGeoLocation {
  /**
   * @schema SecurityHubGeoLocation#Lon
   */
  readonly lon?: number;

  /**
   * @schema SecurityHubGeoLocation#Lat
   */
  readonly lat?: number;

}

/**
 * Converts an object of type 'SecurityHubGeoLocation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubGeoLocation(obj: SecurityHubGeoLocation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Lon': obj.lon,
    'Lat': obj.lat,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubActionLocalIpDetails
 */
export interface SecurityHubActionLocalIpDetails {
  /**
   * @schema SecurityHubActionLocalIpDetails#IpAddressV4
   */
  readonly ipAddressV4?: string;

}

/**
 * Converts an object of type 'SecurityHubActionLocalIpDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubActionLocalIpDetails(obj: SecurityHubActionLocalIpDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IpAddressV4': obj.ipAddressV4,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubSensitiveDataDetections
 */
export interface SecurityHubSensitiveDataDetections {
  /**
   * @schema SecurityHubSensitiveDataDetections#Count
   */
  readonly count?: number;

  /**
   * @schema SecurityHubSensitiveDataDetections#Type
   */
  readonly type?: string;

  /**
   * @schema SecurityHubSensitiveDataDetections#Occurrences
   */
  readonly occurrences?: SecurityHubOccurrences;

}

/**
 * Converts an object of type 'SecurityHubSensitiveDataDetections' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubSensitiveDataDetections(obj: SecurityHubSensitiveDataDetections | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Count': obj.count,
    'Type': obj.type,
    'Occurrences': toJson_SecurityHubOccurrences(obj.occurrences),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubCustomDataIdentifiersDetections
 */
export interface SecurityHubCustomDataIdentifiersDetections {
  /**
   * @schema SecurityHubCustomDataIdentifiersDetections#Count
   */
  readonly count?: number;

  /**
   * @schema SecurityHubCustomDataIdentifiersDetections#Arn
   */
  readonly arn?: string;

  /**
   * @schema SecurityHubCustomDataIdentifiersDetections#Name
   */
  readonly name?: string;

  /**
   * @schema SecurityHubCustomDataIdentifiersDetections#Occurrences
   */
  readonly occurrences?: SecurityHubOccurrences;

}

/**
 * Converts an object of type 'SecurityHubCustomDataIdentifiersDetections' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubCustomDataIdentifiersDetections(obj: SecurityHubCustomDataIdentifiersDetections | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Count': obj.count,
    'Arn': obj.arn,
    'Name': obj.name,
    'Occurrences': toJson_SecurityHubOccurrences(obj.occurrences),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsCodeBuildProjectEnvironmentRegistryCredential
 */
export interface SecurityHubAwsCodeBuildProjectEnvironmentRegistryCredential {
  /**
   * @schema SecurityHubAwsCodeBuildProjectEnvironmentRegistryCredential#Credential
   */
  readonly credential?: string;

  /**
   * @schema SecurityHubAwsCodeBuildProjectEnvironmentRegistryCredential#CredentialProvider
   */
  readonly credentialProvider?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsCodeBuildProjectEnvironmentRegistryCredential' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsCodeBuildProjectEnvironmentRegistryCredential(obj: SecurityHubAwsCodeBuildProjectEnvironmentRegistryCredential | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Credential': obj.credential,
    'CredentialProvider': obj.credentialProvider,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsCloudFrontDistributionCacheBehavior
 */
export interface SecurityHubAwsCloudFrontDistributionCacheBehavior {
  /**
   * @schema SecurityHubAwsCloudFrontDistributionCacheBehavior#ViewerProtocolPolicy
   */
  readonly viewerProtocolPolicy?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsCloudFrontDistributionCacheBehavior' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsCloudFrontDistributionCacheBehavior(obj: SecurityHubAwsCloudFrontDistributionCacheBehavior | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ViewerProtocolPolicy': obj.viewerProtocolPolicy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsCloudFrontDistributionOriginItem
 */
export interface SecurityHubAwsCloudFrontDistributionOriginItem {
  /**
   * @schema SecurityHubAwsCloudFrontDistributionOriginItem#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema SecurityHubAwsCloudFrontDistributionOriginItem#Id
   */
  readonly id?: string;

  /**
   * @schema SecurityHubAwsCloudFrontDistributionOriginItem#OriginPath
   */
  readonly originPath?: string;

  /**
   * @schema SecurityHubAwsCloudFrontDistributionOriginItem#S3OriginConfig
   */
  readonly s3OriginConfig?: SecurityHubAwsCloudFrontDistributionOriginS3OriginConfig;

}

/**
 * Converts an object of type 'SecurityHubAwsCloudFrontDistributionOriginItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsCloudFrontDistributionOriginItem(obj: SecurityHubAwsCloudFrontDistributionOriginItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'Id': obj.id,
    'OriginPath': obj.originPath,
    'S3OriginConfig': toJson_SecurityHubAwsCloudFrontDistributionOriginS3OriginConfig(obj.s3OriginConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsCloudFrontDistributionOriginGroup
 */
export interface SecurityHubAwsCloudFrontDistributionOriginGroup {
  /**
   * @schema SecurityHubAwsCloudFrontDistributionOriginGroup#FailoverCriteria
   */
  readonly failoverCriteria?: SecurityHubAwsCloudFrontDistributionOriginGroupFailover;

}

/**
 * Converts an object of type 'SecurityHubAwsCloudFrontDistributionOriginGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsCloudFrontDistributionOriginGroup(obj: SecurityHubAwsCloudFrontDistributionOriginGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FailoverCriteria': toJson_SecurityHubAwsCloudFrontDistributionOriginGroupFailover(obj.failoverCriteria),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEc2SecurityGroupUserIdGroupPair
 */
export interface SecurityHubAwsEc2SecurityGroupUserIdGroupPair {
  /**
   * @schema SecurityHubAwsEc2SecurityGroupUserIdGroupPair#GroupId
   */
  readonly groupId?: string;

  /**
   * @schema SecurityHubAwsEc2SecurityGroupUserIdGroupPair#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema SecurityHubAwsEc2SecurityGroupUserIdGroupPair#PeeringStatus
   */
  readonly peeringStatus?: string;

  /**
   * @schema SecurityHubAwsEc2SecurityGroupUserIdGroupPair#UserId
   */
  readonly userId?: string;

  /**
   * @schema SecurityHubAwsEc2SecurityGroupUserIdGroupPair#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema SecurityHubAwsEc2SecurityGroupUserIdGroupPair#VpcPeeringConnectionId
   */
  readonly vpcPeeringConnectionId?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsEc2SecurityGroupUserIdGroupPair' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEc2SecurityGroupUserIdGroupPair(obj: SecurityHubAwsEc2SecurityGroupUserIdGroupPair | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupId': obj.groupId,
    'GroupName': obj.groupName,
    'PeeringStatus': obj.peeringStatus,
    'UserId': obj.userId,
    'VpcId': obj.vpcId,
    'VpcPeeringConnectionId': obj.vpcPeeringConnectionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEc2SecurityGroupIpRange
 */
export interface SecurityHubAwsEc2SecurityGroupIpRange {
  /**
   * @schema SecurityHubAwsEc2SecurityGroupIpRange#CidrIp
   */
  readonly cidrIp?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsEc2SecurityGroupIpRange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEc2SecurityGroupIpRange(obj: SecurityHubAwsEc2SecurityGroupIpRange | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CidrIp': obj.cidrIp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEc2SecurityGroupIpv6Range
 */
export interface SecurityHubAwsEc2SecurityGroupIpv6Range {
  /**
   * @schema SecurityHubAwsEc2SecurityGroupIpv6Range#CidrIpv6
   */
  readonly cidrIpv6?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsEc2SecurityGroupIpv6Range' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEc2SecurityGroupIpv6Range(obj: SecurityHubAwsEc2SecurityGroupIpv6Range | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CidrIpv6': obj.cidrIpv6,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEc2SecurityGroupPrefixListId
 */
export interface SecurityHubAwsEc2SecurityGroupPrefixListId {
  /**
   * @schema SecurityHubAwsEc2SecurityGroupPrefixListId#PrefixListId
   */
  readonly prefixListId?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsEc2SecurityGroupPrefixListId' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEc2SecurityGroupPrefixListId(obj: SecurityHubAwsEc2SecurityGroupPrefixListId | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PrefixListId': obj.prefixListId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubIcmpTypeCode
 */
export interface SecurityHubIcmpTypeCode {
  /**
   * @schema SecurityHubIcmpTypeCode#Code
   */
  readonly code?: number;

  /**
   * @schema SecurityHubIcmpTypeCode#Type
   */
  readonly type?: number;

}

/**
 * Converts an object of type 'SecurityHubIcmpTypeCode' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubIcmpTypeCode(obj: SecurityHubIcmpTypeCode | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Code': obj.code,
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubPortRangeFromTo
 */
export interface SecurityHubPortRangeFromTo {
  /**
   * @schema SecurityHubPortRangeFromTo#From
   */
  readonly from?: number;

  /**
   * @schema SecurityHubPortRangeFromTo#To
   */
  readonly to?: number;

}

/**
 * Converts an object of type 'SecurityHubPortRangeFromTo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubPortRangeFromTo(obj: SecurityHubPortRangeFromTo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'From': obj.from,
    'To': obj.to,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails
 */
export interface SecurityHubAwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails {
  /**
   * @schema SecurityHubAwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails#AvailabilityZoneCount
   */
  readonly availabilityZoneCount?: number;

}

/**
 * Converts an object of type 'SecurityHubAwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails(obj: SecurityHubAwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AvailabilityZoneCount': obj.availabilityZoneCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsElasticsearchDomainLogPublishingOptionsLogConfig
 */
export interface SecurityHubAwsElasticsearchDomainLogPublishingOptionsLogConfig {
  /**
   * @schema SecurityHubAwsElasticsearchDomainLogPublishingOptionsLogConfig#CloudWatchLogsLogGroupArn
   */
  readonly cloudWatchLogsLogGroupArn?: string;

  /**
   * @schema SecurityHubAwsElasticsearchDomainLogPublishingOptionsLogConfig#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * Converts an object of type 'SecurityHubAwsElasticsearchDomainLogPublishingOptionsLogConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsElasticsearchDomainLogPublishingOptionsLogConfig(obj: SecurityHubAwsElasticsearchDomainLogPublishingOptionsLogConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CloudWatchLogsLogGroupArn': obj.cloudWatchLogsLogGroupArn,
    'Enabled': obj.enabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsS3BucketServerSideEncryptionRule
 */
export interface SecurityHubAwsS3BucketServerSideEncryptionRule {
  /**
   * @schema SecurityHubAwsS3BucketServerSideEncryptionRule#ApplyServerSideEncryptionByDefault
   */
  readonly applyServerSideEncryptionByDefault?: SecurityHubAwsS3BucketServerSideEncryptionByDefault;

}

/**
 * Converts an object of type 'SecurityHubAwsS3BucketServerSideEncryptionRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsS3BucketServerSideEncryptionRule(obj: SecurityHubAwsS3BucketServerSideEncryptionRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplyServerSideEncryptionByDefault': toJson_SecurityHubAwsS3BucketServerSideEncryptionByDefault(obj.applyServerSideEncryptionByDefault),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesDetails
 */
export interface SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesDetails {
  /**
   * @schema SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesDetails#AbortIncompleteMultipartUpload
   */
  readonly abortIncompleteMultipartUpload?: SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails;

  /**
   * @schema SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesDetails#ExpirationDate
   */
  readonly expirationDate?: string;

  /**
   * @schema SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesDetails#ExpirationInDays
   */
  readonly expirationInDays?: number;

  /**
   * @schema SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesDetails#ExpiredObjectDeleteMarker
   */
  readonly expiredObjectDeleteMarker?: boolean;

  /**
   * @schema SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesDetails#Filter
   */
  readonly filter?: SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesFilterDetails;

  /**
   * @schema SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesDetails#ID
   */
  readonly id?: string;

  /**
   * @schema SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesDetails#NoncurrentVersionExpirationInDays
   */
  readonly noncurrentVersionExpirationInDays?: number;

  /**
   * @schema SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesDetails#NoncurrentVersionTransitions
   */
  readonly noncurrentVersionTransitions?: SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails[];

  /**
   * @schema SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesDetails#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesDetails#Status
   */
  readonly status?: string;

  /**
   * @schema SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesDetails#Transitions
   */
  readonly transitions?: SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails[];

}

/**
 * Converts an object of type 'SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesDetails(obj: SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AbortIncompleteMultipartUpload': toJson_SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails(obj.abortIncompleteMultipartUpload),
    'ExpirationDate': obj.expirationDate,
    'ExpirationInDays': obj.expirationInDays,
    'ExpiredObjectDeleteMarker': obj.expiredObjectDeleteMarker,
    'Filter': toJson_SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesFilterDetails(obj.filter),
    'ID': obj.id,
    'NoncurrentVersionExpirationInDays': obj.noncurrentVersionExpirationInDays,
    'NoncurrentVersionTransitions': obj.noncurrentVersionTransitions?.map(y => toJson_SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails(y)),
    'Prefix': obj.prefix,
    'Status': obj.status,
    'Transitions': obj.transitions?.map(y => toJson_SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsIamAccessKeySessionContextAttributes
 */
export interface SecurityHubAwsIamAccessKeySessionContextAttributes {
  /**
   * @schema SecurityHubAwsIamAccessKeySessionContextAttributes#MfaAuthenticated
   */
  readonly mfaAuthenticated?: boolean;

  /**
   * @schema SecurityHubAwsIamAccessKeySessionContextAttributes#CreationDate
   */
  readonly creationDate?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsIamAccessKeySessionContextAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsIamAccessKeySessionContextAttributes(obj: SecurityHubAwsIamAccessKeySessionContextAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MfaAuthenticated': obj.mfaAuthenticated,
    'CreationDate': obj.creationDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsIamAccessKeySessionContextSessionIssuer
 */
export interface SecurityHubAwsIamAccessKeySessionContextSessionIssuer {
  /**
   * @schema SecurityHubAwsIamAccessKeySessionContextSessionIssuer#Type
   */
  readonly type?: string;

  /**
   * @schema SecurityHubAwsIamAccessKeySessionContextSessionIssuer#PrincipalId
   */
  readonly principalId?: string;

  /**
   * @schema SecurityHubAwsIamAccessKeySessionContextSessionIssuer#Arn
   */
  readonly arn?: string;

  /**
   * @schema SecurityHubAwsIamAccessKeySessionContextSessionIssuer#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema SecurityHubAwsIamAccessKeySessionContextSessionIssuer#UserName
   */
  readonly userName?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsIamAccessKeySessionContextSessionIssuer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsIamAccessKeySessionContextSessionIssuer(obj: SecurityHubAwsIamAccessKeySessionContextSessionIssuer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'PrincipalId': obj.principalId,
    'Arn': obj.arn,
    'AccountId': obj.accountId,
    'UserName': obj.userName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsDynamoDbTableProjection
 */
export interface SecurityHubAwsDynamoDbTableProjection {
  /**
   * @schema SecurityHubAwsDynamoDbTableProjection#NonKeyAttributes
   */
  readonly nonKeyAttributes?: string[];

  /**
   * @schema SecurityHubAwsDynamoDbTableProjection#ProjectionType
   */
  readonly projectionType?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsDynamoDbTableProjection' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsDynamoDbTableProjection(obj: SecurityHubAwsDynamoDbTableProjection | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NonKeyAttributes': obj.nonKeyAttributes?.map(y => y),
    'ProjectionType': obj.projectionType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsDynamoDbTableReplicaGlobalSecondaryIndex
 */
export interface SecurityHubAwsDynamoDbTableReplicaGlobalSecondaryIndex {
  /**
   * @schema SecurityHubAwsDynamoDbTableReplicaGlobalSecondaryIndex#IndexName
   */
  readonly indexName?: string;

  /**
   * @schema SecurityHubAwsDynamoDbTableReplicaGlobalSecondaryIndex#ProvisionedThroughputOverride
   */
  readonly provisionedThroughputOverride?: SecurityHubAwsDynamoDbTableProvisionedThroughputOverride;

}

/**
 * Converts an object of type 'SecurityHubAwsDynamoDbTableReplicaGlobalSecondaryIndex' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsDynamoDbTableReplicaGlobalSecondaryIndex(obj: SecurityHubAwsDynamoDbTableReplicaGlobalSecondaryIndex | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IndexName': obj.indexName,
    'ProvisionedThroughputOverride': toJson_SecurityHubAwsDynamoDbTableProvisionedThroughputOverride(obj.provisionedThroughputOverride),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsDynamoDbTableProvisionedThroughputOverride
 */
export interface SecurityHubAwsDynamoDbTableProvisionedThroughputOverride {
  /**
   * @schema SecurityHubAwsDynamoDbTableProvisionedThroughputOverride#ReadCapacityUnits
   */
  readonly readCapacityUnits?: number;

}

/**
 * Converts an object of type 'SecurityHubAwsDynamoDbTableProvisionedThroughputOverride' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsDynamoDbTableProvisionedThroughputOverride(obj: SecurityHubAwsDynamoDbTableProvisionedThroughputOverride | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReadCapacityUnits': obj.readCapacityUnits,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsSsmComplianceSummary
 */
export interface SecurityHubAwsSsmComplianceSummary {
  /**
   * @schema SecurityHubAwsSsmComplianceSummary#Status
   */
  readonly status?: string;

  /**
   * @schema SecurityHubAwsSsmComplianceSummary#CompliantCriticalCount
   */
  readonly compliantCriticalCount?: number;

  /**
   * @schema SecurityHubAwsSsmComplianceSummary#CompliantHighCount
   */
  readonly compliantHighCount?: number;

  /**
   * @schema SecurityHubAwsSsmComplianceSummary#CompliantMediumCount
   */
  readonly compliantMediumCount?: number;

  /**
   * @schema SecurityHubAwsSsmComplianceSummary#ExecutionType
   */
  readonly executionType?: string;

  /**
   * @schema SecurityHubAwsSsmComplianceSummary#NonCompliantCriticalCount
   */
  readonly nonCompliantCriticalCount?: number;

  /**
   * @schema SecurityHubAwsSsmComplianceSummary#CompliantInformationalCount
   */
  readonly compliantInformationalCount?: number;

  /**
   * @schema SecurityHubAwsSsmComplianceSummary#NonCompliantInformationalCount
   */
  readonly nonCompliantInformationalCount?: number;

  /**
   * @schema SecurityHubAwsSsmComplianceSummary#CompliantUnspecifiedCount
   */
  readonly compliantUnspecifiedCount?: number;

  /**
   * @schema SecurityHubAwsSsmComplianceSummary#NonCompliantLowCount
   */
  readonly nonCompliantLowCount?: number;

  /**
   * @schema SecurityHubAwsSsmComplianceSummary#NonCompliantHighCount
   */
  readonly nonCompliantHighCount?: number;

  /**
   * @schema SecurityHubAwsSsmComplianceSummary#CompliantLowCount
   */
  readonly compliantLowCount?: number;

  /**
   * @schema SecurityHubAwsSsmComplianceSummary#ComplianceType
   */
  readonly complianceType?: string;

  /**
   * @schema SecurityHubAwsSsmComplianceSummary#PatchBaselineId
   */
  readonly patchBaselineId?: string;

  /**
   * @schema SecurityHubAwsSsmComplianceSummary#OverallSeverity
   */
  readonly overallSeverity?: string;

  /**
   * @schema SecurityHubAwsSsmComplianceSummary#NonCompliantMediumCount
   */
  readonly nonCompliantMediumCount?: number;

  /**
   * @schema SecurityHubAwsSsmComplianceSummary#NonCompliantUnspecifiedCount
   */
  readonly nonCompliantUnspecifiedCount?: number;

  /**
   * @schema SecurityHubAwsSsmComplianceSummary#PatchGroup
   */
  readonly patchGroup?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsSsmComplianceSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsSsmComplianceSummary(obj: SecurityHubAwsSsmComplianceSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
    'CompliantCriticalCount': obj.compliantCriticalCount,
    'CompliantHighCount': obj.compliantHighCount,
    'CompliantMediumCount': obj.compliantMediumCount,
    'ExecutionType': obj.executionType,
    'NonCompliantCriticalCount': obj.nonCompliantCriticalCount,
    'CompliantInformationalCount': obj.compliantInformationalCount,
    'NonCompliantInformationalCount': obj.nonCompliantInformationalCount,
    'CompliantUnspecifiedCount': obj.compliantUnspecifiedCount,
    'NonCompliantLowCount': obj.nonCompliantLowCount,
    'NonCompliantHighCount': obj.nonCompliantHighCount,
    'CompliantLowCount': obj.compliantLowCount,
    'ComplianceType': obj.complianceType,
    'PatchBaselineId': obj.patchBaselineId,
    'OverallSeverity': obj.overallSeverity,
    'NonCompliantMediumCount': obj.nonCompliantMediumCount,
    'NonCompliantUnspecifiedCount': obj.nonCompliantUnspecifiedCount,
    'PatchGroup': obj.patchGroup,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsCertificateManagerCertificateResourceRecord
 */
export interface SecurityHubAwsCertificateManagerCertificateResourceRecord {
  /**
   * @schema SecurityHubAwsCertificateManagerCertificateResourceRecord#Name
   */
  readonly name?: string;

  /**
   * @schema SecurityHubAwsCertificateManagerCertificateResourceRecord#Type
   */
  readonly type?: string;

  /**
   * @schema SecurityHubAwsCertificateManagerCertificateResourceRecord#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsCertificateManagerCertificateResourceRecord' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsCertificateManagerCertificateResourceRecord(obj: SecurityHubAwsCertificateManagerCertificateResourceRecord | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Type': obj.type,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsRedshiftClusterClusterParameterStatus
 */
export interface SecurityHubAwsRedshiftClusterClusterParameterStatus {
  /**
   * @schema SecurityHubAwsRedshiftClusterClusterParameterStatus#ParameterName
   */
  readonly parameterName?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterClusterParameterStatus#ParameterApplyStatus
   */
  readonly parameterApplyStatus?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterClusterParameterStatus#ParameterApplyErrorDescription
   */
  readonly parameterApplyErrorDescription?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsRedshiftClusterClusterParameterStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsRedshiftClusterClusterParameterStatus(obj: SecurityHubAwsRedshiftClusterClusterParameterStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ParameterName': obj.parameterName,
    'ParameterApplyStatus': obj.parameterApplyStatus,
    'ParameterApplyErrorDescription': obj.parameterApplyErrorDescription,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsElbLoadBalancerListener
 */
export interface SecurityHubAwsElbLoadBalancerListener {
  /**
   * @schema SecurityHubAwsElbLoadBalancerListener#InstancePort
   */
  readonly instancePort?: number;

  /**
   * @schema SecurityHubAwsElbLoadBalancerListener#InstanceProtocol
   */
  readonly instanceProtocol?: string;

  /**
   * @schema SecurityHubAwsElbLoadBalancerListener#LoadBalancerPort
   */
  readonly loadBalancerPort?: number;

  /**
   * @schema SecurityHubAwsElbLoadBalancerListener#Protocol
   */
  readonly protocol?: string;

  /**
   * @schema SecurityHubAwsElbLoadBalancerListener#SslCertificateId
   */
  readonly sslCertificateId?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsElbLoadBalancerListener' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsElbLoadBalancerListener(obj: SecurityHubAwsElbLoadBalancerListener | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstancePort': obj.instancePort,
    'InstanceProtocol': obj.instanceProtocol,
    'LoadBalancerPort': obj.loadBalancerPort,
    'Protocol': obj.protocol,
    'SslCertificateId': obj.sslCertificateId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsElbLoadBalancerAccessLog
 */
export interface SecurityHubAwsElbLoadBalancerAccessLog {
  /**
   * @schema SecurityHubAwsElbLoadBalancerAccessLog#EmitInterval
   */
  readonly emitInterval?: number;

  /**
   * @schema SecurityHubAwsElbLoadBalancerAccessLog#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema SecurityHubAwsElbLoadBalancerAccessLog#S3BucketName
   */
  readonly s3BucketName?: string;

  /**
   * @schema SecurityHubAwsElbLoadBalancerAccessLog#S3BucketPrefix
   */
  readonly s3BucketPrefix?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsElbLoadBalancerAccessLog' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsElbLoadBalancerAccessLog(obj: SecurityHubAwsElbLoadBalancerAccessLog | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EmitInterval': obj.emitInterval,
    'Enabled': obj.enabled,
    'S3BucketName': obj.s3BucketName,
    'S3BucketPrefix': obj.s3BucketPrefix,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsElbLoadBalancerConnectionDraining
 */
export interface SecurityHubAwsElbLoadBalancerConnectionDraining {
  /**
   * @schema SecurityHubAwsElbLoadBalancerConnectionDraining#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema SecurityHubAwsElbLoadBalancerConnectionDraining#Timeout
   */
  readonly timeout?: number;

}

/**
 * Converts an object of type 'SecurityHubAwsElbLoadBalancerConnectionDraining' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsElbLoadBalancerConnectionDraining(obj: SecurityHubAwsElbLoadBalancerConnectionDraining | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Enabled': obj.enabled,
    'Timeout': obj.timeout,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsElbLoadBalancerConnectionSettings
 */
export interface SecurityHubAwsElbLoadBalancerConnectionSettings {
  /**
   * @schema SecurityHubAwsElbLoadBalancerConnectionSettings#IdleTimeout
   */
  readonly idleTimeout?: number;

}

/**
 * Converts an object of type 'SecurityHubAwsElbLoadBalancerConnectionSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsElbLoadBalancerConnectionSettings(obj: SecurityHubAwsElbLoadBalancerConnectionSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdleTimeout': obj.idleTimeout,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsElbLoadBalancerCrossZoneLoadBalancing
 */
export interface SecurityHubAwsElbLoadBalancerCrossZoneLoadBalancing {
  /**
   * @schema SecurityHubAwsElbLoadBalancerCrossZoneLoadBalancing#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * Converts an object of type 'SecurityHubAwsElbLoadBalancerCrossZoneLoadBalancing' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsElbLoadBalancerCrossZoneLoadBalancing(obj: SecurityHubAwsElbLoadBalancerCrossZoneLoadBalancing | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Enabled': obj.enabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsElbAppCookieStickinessPolicy
 */
export interface SecurityHubAwsElbAppCookieStickinessPolicy {
  /**
   * @schema SecurityHubAwsElbAppCookieStickinessPolicy#CookieName
   */
  readonly cookieName?: string;

  /**
   * @schema SecurityHubAwsElbAppCookieStickinessPolicy#PolicyName
   */
  readonly policyName?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsElbAppCookieStickinessPolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsElbAppCookieStickinessPolicy(obj: SecurityHubAwsElbAppCookieStickinessPolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CookieName': obj.cookieName,
    'PolicyName': obj.policyName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsElbLbCookieStickinessPolicy
 */
export interface SecurityHubAwsElbLbCookieStickinessPolicy {
  /**
   * @schema SecurityHubAwsElbLbCookieStickinessPolicy#CookieExpirationPeriod
   */
  readonly cookieExpirationPeriod?: number;

  /**
   * @schema SecurityHubAwsElbLbCookieStickinessPolicy#PolicyName
   */
  readonly policyName?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsElbLbCookieStickinessPolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsElbLbCookieStickinessPolicy(obj: SecurityHubAwsElbLbCookieStickinessPolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CookieExpirationPeriod': obj.cookieExpirationPeriod,
    'PolicyName': obj.policyName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsIamInstanceProfileRole
 */
export interface SecurityHubAwsIamInstanceProfileRole {
  /**
   * @schema SecurityHubAwsIamInstanceProfileRole#Arn
   */
  readonly arn?: string;

  /**
   * @schema SecurityHubAwsIamInstanceProfileRole#AssumeRolePolicyDocument
   */
  readonly assumeRolePolicyDocument?: string;

  /**
   * @schema SecurityHubAwsIamInstanceProfileRole#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema SecurityHubAwsIamInstanceProfileRole#Path
   */
  readonly path?: string;

  /**
   * @schema SecurityHubAwsIamInstanceProfileRole#RoleId
   */
  readonly roleId?: string;

  /**
   * @schema SecurityHubAwsIamInstanceProfileRole#RoleName
   */
  readonly roleName?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsIamInstanceProfileRole' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsIamInstanceProfileRole(obj: SecurityHubAwsIamInstanceProfileRole | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'AssumeRolePolicyDocument': obj.assumeRolePolicyDocument,
    'CreateDate': obj.createDate,
    'Path': obj.path,
    'RoleId': obj.roleId,
    'RoleName': obj.roleName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsLambdaFunctionEnvironmentError
 */
export interface SecurityHubAwsLambdaFunctionEnvironmentError {
  /**
   * @schema SecurityHubAwsLambdaFunctionEnvironmentError#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema SecurityHubAwsLambdaFunctionEnvironmentError#Message
   */
  readonly message?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsLambdaFunctionEnvironmentError' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsLambdaFunctionEnvironmentError(obj: SecurityHubAwsLambdaFunctionEnvironmentError | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ErrorCode': obj.errorCode,
    'Message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsRdsDbSubnetGroupSubnet
 */
export interface SecurityHubAwsRdsDbSubnetGroupSubnet {
  /**
   * @schema SecurityHubAwsRdsDbSubnetGroupSubnet#SubnetIdentifier
   */
  readonly subnetIdentifier?: string;

  /**
   * @schema SecurityHubAwsRdsDbSubnetGroupSubnet#SubnetAvailabilityZone
   */
  readonly subnetAvailabilityZone?: SecurityHubAwsRdsDbSubnetGroupSubnetAvailabilityZone;

  /**
   * @schema SecurityHubAwsRdsDbSubnetGroupSubnet#SubnetStatus
   */
  readonly subnetStatus?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsRdsDbSubnetGroupSubnet' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsRdsDbSubnetGroupSubnet(obj: SecurityHubAwsRdsDbSubnetGroupSubnet | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SubnetIdentifier': obj.subnetIdentifier,
    'SubnetAvailabilityZone': toJson_SecurityHubAwsRdsDbSubnetGroupSubnetAvailabilityZone(obj.subnetAvailabilityZone),
    'SubnetStatus': obj.subnetStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsRdsPendingCloudWatchLogsExports
 */
export interface SecurityHubAwsRdsPendingCloudWatchLogsExports {
  /**
   * @schema SecurityHubAwsRdsPendingCloudWatchLogsExports#LogTypesToEnable
   */
  readonly logTypesToEnable?: string[];

  /**
   * @schema SecurityHubAwsRdsPendingCloudWatchLogsExports#LogTypesToDisable
   */
  readonly logTypesToDisable?: string[];

}

/**
 * Converts an object of type 'SecurityHubAwsRdsPendingCloudWatchLogsExports' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsRdsPendingCloudWatchLogsExports(obj: SecurityHubAwsRdsPendingCloudWatchLogsExports | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LogTypesToEnable': obj.logTypesToEnable?.map(y => y),
    'LogTypesToDisable': obj.logTypesToDisable?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubWafAction
 */
export interface SecurityHubWafAction {
  /**
   * @schema SecurityHubWafAction#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'SecurityHubWafAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubWafAction(obj: SecurityHubWafAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubWafExcludedRule
 */
export interface SecurityHubWafExcludedRule {
  /**
   * @schema SecurityHubWafExcludedRule#RuleId
   */
  readonly ruleId?: string;

}

/**
 * Converts an object of type 'SecurityHubWafExcludedRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubWafExcludedRule(obj: SecurityHubWafExcludedRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RuleId': obj.ruleId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubWafOverrideAction
 */
export interface SecurityHubWafOverrideAction {
  /**
   * @schema SecurityHubWafOverrideAction#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'SecurityHubWafOverrideAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubWafOverrideAction(obj: SecurityHubWafOverrideAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEcsClusterConfigurationExecuteCommandConfigurationDetails
 */
export interface SecurityHubAwsEcsClusterConfigurationExecuteCommandConfigurationDetails {
  /**
   * @schema SecurityHubAwsEcsClusterConfigurationExecuteCommandConfigurationDetails#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema SecurityHubAwsEcsClusterConfigurationExecuteCommandConfigurationDetails#LogConfiguration
   */
  readonly logConfiguration?: SecurityHubAwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails;

  /**
   * @schema SecurityHubAwsEcsClusterConfigurationExecuteCommandConfigurationDetails#Logging
   */
  readonly logging?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsEcsClusterConfigurationExecuteCommandConfigurationDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEcsClusterConfigurationExecuteCommandConfigurationDetails(obj: SecurityHubAwsEcsClusterConfigurationExecuteCommandConfigurationDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KmsKeyId': obj.kmsKeyId,
    'LogConfiguration': toJson_SecurityHubAwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails(obj.logConfiguration),
    'Logging': obj.logging,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails
 */
export interface SecurityHubAwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails {
  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails#Condition
   */
  readonly condition?: string;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails#ContainerName
   */
  readonly containerName?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails(obj: SecurityHubAwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Condition': obj.condition,
    'ContainerName': obj.containerName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails
 */
export interface SecurityHubAwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails {
  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails#Name
   */
  readonly name?: string;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails(obj: SecurityHubAwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails
 */
export interface SecurityHubAwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails {
  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails#Type
   */
  readonly type?: string;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails(obj: SecurityHubAwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails
 */
export interface SecurityHubAwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails {
  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails#Hostname
   */
  readonly hostname?: string;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails#IpAddress
   */
  readonly ipAddress?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails(obj: SecurityHubAwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Hostname': obj.hostname,
    'IpAddress': obj.ipAddress,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails
 */
export interface SecurityHubAwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails {
  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails#Options
   */
  readonly options?: { [key: string]: string };

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails(obj: SecurityHubAwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Options': ((obj.options) === undefined) ? undefined : (Object.entries(obj.options).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails
 */
export interface SecurityHubAwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails {
  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails#Command
   */
  readonly command?: string[];

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails#Interval
   */
  readonly interval?: number;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails#Retries
   */
  readonly retries?: number;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails#StartPeriod
   */
  readonly startPeriod?: number;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails#Timeout
   */
  readonly timeout?: number;

}

/**
 * Converts an object of type 'SecurityHubAwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails(obj: SecurityHubAwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Command': obj.command?.map(y => y),
    'Interval': obj.interval,
    'Retries': obj.retries,
    'StartPeriod': obj.startPeriod,
    'Timeout': obj.timeout,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails
 */
export interface SecurityHubAwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails {
  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails#Capabilities
   */
  readonly capabilities?: SecurityHubAwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails#Devices
   */
  readonly devices?: SecurityHubAwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails[];

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails#InitProcessEnabled
   */
  readonly initProcessEnabled?: boolean;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails#MaxSwap
   */
  readonly maxSwap?: number;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails#SharedMemorySize
   */
  readonly sharedMemorySize?: number;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails#Swappiness
   */
  readonly swappiness?: number;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails#Tmpfs
   */
  readonly tmpfs?: SecurityHubAwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails[];

}

/**
 * Converts an object of type 'SecurityHubAwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails(obj: SecurityHubAwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Capabilities': toJson_SecurityHubAwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails(obj.capabilities),
    'Devices': obj.devices?.map(y => toJson_SecurityHubAwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails(y)),
    'InitProcessEnabled': obj.initProcessEnabled,
    'MaxSwap': obj.maxSwap,
    'SharedMemorySize': obj.sharedMemorySize,
    'Swappiness': obj.swappiness,
    'Tmpfs': obj.tmpfs?.map(y => toJson_SecurityHubAwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails
 */
export interface SecurityHubAwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails {
  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails#LogDriver
   */
  readonly logDriver?: string;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails#Options
   */
  readonly options?: { [key: string]: string };

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails#SecretOptions
   */
  readonly secretOptions?: SecurityHubAwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails[];

}

/**
 * Converts an object of type 'SecurityHubAwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails(obj: SecurityHubAwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LogDriver': obj.logDriver,
    'Options': ((obj.options) === undefined) ? undefined : (Object.entries(obj.options).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'SecretOptions': obj.secretOptions?.map(y => toJson_SecurityHubAwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails
 */
export interface SecurityHubAwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails {
  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails#ContainerPath
   */
  readonly containerPath?: string;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails#ReadOnly
   */
  readonly readOnly?: boolean;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails#SourceVolume
   */
  readonly sourceVolume?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails(obj: SecurityHubAwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContainerPath': obj.containerPath,
    'ReadOnly': obj.readOnly,
    'SourceVolume': obj.sourceVolume,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails
 */
export interface SecurityHubAwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails {
  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails#ContainerPort
   */
  readonly containerPort?: number;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails#HostPort
   */
  readonly hostPort?: number;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails#Protocol
   */
  readonly protocol?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails(obj: SecurityHubAwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContainerPort': obj.containerPort,
    'HostPort': obj.hostPort,
    'Protocol': obj.protocol,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails
 */
export interface SecurityHubAwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails {
  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails#CredentialsParameter
   */
  readonly credentialsParameter?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails(obj: SecurityHubAwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CredentialsParameter': obj.credentialsParameter,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails
 */
export interface SecurityHubAwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails {
  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails#Type
   */
  readonly type?: string;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails(obj: SecurityHubAwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsSecretsDetails
 */
export interface SecurityHubAwsEcsTaskDefinitionContainerDefinitionsSecretsDetails {
  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsSecretsDetails#Name
   */
  readonly name?: string;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsSecretsDetails#ValueFrom
   */
  readonly valueFrom?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsEcsTaskDefinitionContainerDefinitionsSecretsDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEcsTaskDefinitionContainerDefinitionsSecretsDetails(obj: SecurityHubAwsEcsTaskDefinitionContainerDefinitionsSecretsDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'ValueFrom': obj.valueFrom,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails
 */
export interface SecurityHubAwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails {
  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails#Namespace
   */
  readonly namespace?: string;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails(obj: SecurityHubAwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Namespace': obj.namespace,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails
 */
export interface SecurityHubAwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails {
  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails#HardLimit
   */
  readonly hardLimit?: number;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails#Name
   */
  readonly name?: string;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails#SoftLimit
   */
  readonly softLimit?: number;

}

/**
 * Converts an object of type 'SecurityHubAwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails(obj: SecurityHubAwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HardLimit': obj.hardLimit,
    'Name': obj.name,
    'SoftLimit': obj.softLimit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails
 */
export interface SecurityHubAwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails {
  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails#ReadOnly
   */
  readonly readOnly?: boolean;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails#SourceContainer
   */
  readonly sourceContainer?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails(obj: SecurityHubAwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReadOnly': obj.readOnly,
    'SourceContainer': obj.sourceContainer,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails
 */
export interface SecurityHubAwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails {
  /**
   * @schema SecurityHubAwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails#Name
   */
  readonly name?: string;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails(obj: SecurityHubAwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails
 */
export interface SecurityHubAwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails {
  /**
   * @schema SecurityHubAwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails#Autoprovision
   */
  readonly autoprovision?: boolean;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails#Driver
   */
  readonly driver?: string;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails#DriverOpts
   */
  readonly driverOpts?: { [key: string]: string };

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails#Labels
   */
  readonly labels?: { [key: string]: string };

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails#Scope
   */
  readonly scope?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails(obj: SecurityHubAwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Autoprovision': obj.autoprovision,
    'Driver': obj.driver,
    'DriverOpts': ((obj.driverOpts) === undefined) ? undefined : (Object.entries(obj.driverOpts).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Labels': ((obj.labels) === undefined) ? undefined : (Object.entries(obj.labels).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Scope': obj.scope,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails
 */
export interface SecurityHubAwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails {
  /**
   * @schema SecurityHubAwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails#AuthorizationConfig
   */
  readonly authorizationConfig?: SecurityHubAwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails#FilesystemId
   */
  readonly filesystemId?: string;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails#RootDirectory
   */
  readonly rootDirectory?: string;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails#TransitEncryption
   */
  readonly transitEncryption?: string;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails#TransitEncryptionPort
   */
  readonly transitEncryptionPort?: number;

}

/**
 * Converts an object of type 'SecurityHubAwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails(obj: SecurityHubAwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AuthorizationConfig': toJson_SecurityHubAwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails(obj.authorizationConfig),
    'FilesystemId': obj.filesystemId,
    'RootDirectory': obj.rootDirectory,
    'TransitEncryption': obj.transitEncryption,
    'TransitEncryptionPort': obj.transitEncryptionPort,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEcsTaskDefinitionVolumesHostDetails
 */
export interface SecurityHubAwsEcsTaskDefinitionVolumesHostDetails {
  /**
   * @schema SecurityHubAwsEcsTaskDefinitionVolumesHostDetails#SourcePath
   */
  readonly sourcePath?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsEcsTaskDefinitionVolumesHostDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEcsTaskDefinitionVolumesHostDetails(obj: SecurityHubAwsEcsTaskDefinitionVolumesHostDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourcePath': obj.sourcePath,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails
 */
export interface SecurityHubAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails {
  /**
   * @schema SecurityHubAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails#Enable
   */
  readonly enable?: boolean;

  /**
   * @schema SecurityHubAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails#Rollback
   */
  readonly rollback?: boolean;

}

/**
 * Converts an object of type 'SecurityHubAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails(obj: SecurityHubAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Enable': obj.enable,
    'Rollback': obj.rollback,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails
 */
export interface SecurityHubAwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails {
  /**
   * @schema SecurityHubAwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails#AssignPublicIp
   */
  readonly assignPublicIp?: string;

  /**
   * @schema SecurityHubAwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails#SecurityGroups
   */
  readonly securityGroups?: string[];

  /**
   * @schema SecurityHubAwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails#Subnets
   */
  readonly subnets?: string[];

}

/**
 * Converts an object of type 'SecurityHubAwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails(obj: SecurityHubAwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssignPublicIp': obj.assignPublicIp,
    'SecurityGroups': obj.securityGroups?.map(y => y),
    'Subnets': obj.subnets?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubOccurrences
 */
export interface SecurityHubOccurrences {
  /**
   * @schema SecurityHubOccurrences#LineRanges
   */
  readonly lineRanges?: SecurityHubRange[];

  /**
   * @schema SecurityHubOccurrences#OffsetRanges
   */
  readonly offsetRanges?: SecurityHubRange[];

  /**
   * @schema SecurityHubOccurrences#Pages
   */
  readonly pages?: SecurityHubPage[];

  /**
   * @schema SecurityHubOccurrences#Records
   */
  readonly records?: SecurityHubRecord[];

  /**
   * @schema SecurityHubOccurrences#Cells
   */
  readonly cells?: SecurityHubCell[];

}

/**
 * Converts an object of type 'SecurityHubOccurrences' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubOccurrences(obj: SecurityHubOccurrences | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LineRanges': obj.lineRanges?.map(y => toJson_SecurityHubRange(y)),
    'OffsetRanges': obj.offsetRanges?.map(y => toJson_SecurityHubRange(y)),
    'Pages': obj.pages?.map(y => toJson_SecurityHubPage(y)),
    'Records': obj.records?.map(y => toJson_SecurityHubRecord(y)),
    'Cells': obj.cells?.map(y => toJson_SecurityHubCell(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsCloudFrontDistributionOriginS3OriginConfig
 */
export interface SecurityHubAwsCloudFrontDistributionOriginS3OriginConfig {
  /**
   * @schema SecurityHubAwsCloudFrontDistributionOriginS3OriginConfig#OriginAccessIdentity
   */
  readonly originAccessIdentity?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsCloudFrontDistributionOriginS3OriginConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsCloudFrontDistributionOriginS3OriginConfig(obj: SecurityHubAwsCloudFrontDistributionOriginS3OriginConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OriginAccessIdentity': obj.originAccessIdentity,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsCloudFrontDistributionOriginGroupFailover
 */
export interface SecurityHubAwsCloudFrontDistributionOriginGroupFailover {
  /**
   * @schema SecurityHubAwsCloudFrontDistributionOriginGroupFailover#StatusCodes
   */
  readonly statusCodes?: SecurityHubAwsCloudFrontDistributionOriginGroupFailoverStatusCodes;

}

/**
 * Converts an object of type 'SecurityHubAwsCloudFrontDistributionOriginGroupFailover' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsCloudFrontDistributionOriginGroupFailover(obj: SecurityHubAwsCloudFrontDistributionOriginGroupFailover | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StatusCodes': toJson_SecurityHubAwsCloudFrontDistributionOriginGroupFailoverStatusCodes(obj.statusCodes),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsS3BucketServerSideEncryptionByDefault
 */
export interface SecurityHubAwsS3BucketServerSideEncryptionByDefault {
  /**
   * @schema SecurityHubAwsS3BucketServerSideEncryptionByDefault#SSEAlgorithm
   */
  readonly sseAlgorithm?: string;

  /**
   * @schema SecurityHubAwsS3BucketServerSideEncryptionByDefault#KMSMasterKeyID
   */
  readonly kmsMasterKeyId?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsS3BucketServerSideEncryptionByDefault' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsS3BucketServerSideEncryptionByDefault(obj: SecurityHubAwsS3BucketServerSideEncryptionByDefault | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SSEAlgorithm': obj.sseAlgorithm,
    'KMSMasterKeyID': obj.kmsMasterKeyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails
 */
export interface SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails {
  /**
   * @schema SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails#DaysAfterInitiation
   */
  readonly daysAfterInitiation?: number;

}

/**
 * Converts an object of type 'SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails(obj: SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DaysAfterInitiation': obj.daysAfterInitiation,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesFilterDetails
 */
export interface SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesFilterDetails {
  /**
   * @schema SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesFilterDetails#Predicate
   */
  readonly predicate?: SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails;

}

/**
 * Converts an object of type 'SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesFilterDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesFilterDetails(obj: SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesFilterDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Predicate': toJson_SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails(obj.predicate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails
 */
export interface SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails {
  /**
   * @schema SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails#Days
   */
  readonly days?: number;

  /**
   * @schema SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails#StorageClass
   */
  readonly storageClass?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails(obj: SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Days': obj.days,
    'StorageClass': obj.storageClass,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails
 */
export interface SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails {
  /**
   * @schema SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails#Date
   */
  readonly date?: string;

  /**
   * @schema SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails#Days
   */
  readonly days?: number;

  /**
   * @schema SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails#StorageClass
   */
  readonly storageClass?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails(obj: SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Date': obj.date,
    'Days': obj.days,
    'StorageClass': obj.storageClass,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsRdsDbSubnetGroupSubnetAvailabilityZone
 */
export interface SecurityHubAwsRdsDbSubnetGroupSubnetAvailabilityZone {
  /**
   * @schema SecurityHubAwsRdsDbSubnetGroupSubnetAvailabilityZone#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsRdsDbSubnetGroupSubnetAvailabilityZone' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsRdsDbSubnetGroupSubnetAvailabilityZone(obj: SecurityHubAwsRdsDbSubnetGroupSubnetAvailabilityZone | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails
 */
export interface SecurityHubAwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails {
  /**
   * @schema SecurityHubAwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails#CloudWatchEncryptionEnabled
   */
  readonly cloudWatchEncryptionEnabled?: boolean;

  /**
   * @schema SecurityHubAwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails#CloudWatchLogGroupName
   */
  readonly cloudWatchLogGroupName?: string;

  /**
   * @schema SecurityHubAwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails#S3BucketName
   */
  readonly s3BucketName?: string;

  /**
   * @schema SecurityHubAwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails#S3EncryptionEnabled
   */
  readonly s3EncryptionEnabled?: boolean;

  /**
   * @schema SecurityHubAwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails#S3KeyPrefix
   */
  readonly s3KeyPrefix?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails(obj: SecurityHubAwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CloudWatchEncryptionEnabled': obj.cloudWatchEncryptionEnabled,
    'CloudWatchLogGroupName': obj.cloudWatchLogGroupName,
    'S3BucketName': obj.s3BucketName,
    'S3EncryptionEnabled': obj.s3EncryptionEnabled,
    'S3KeyPrefix': obj.s3KeyPrefix,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails
 */
export interface SecurityHubAwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails {
  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails#Add
   */
  readonly add?: string[];

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails#Drop
   */
  readonly drop?: string[];

}

/**
 * Converts an object of type 'SecurityHubAwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails(obj: SecurityHubAwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Add': obj.add?.map(y => y),
    'Drop': obj.drop?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails
 */
export interface SecurityHubAwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails {
  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails#ContainerPath
   */
  readonly containerPath?: string;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails#HostPath
   */
  readonly hostPath?: string;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails#Permissions
   */
  readonly permissions?: string[];

}

/**
 * Converts an object of type 'SecurityHubAwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails(obj: SecurityHubAwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContainerPath': obj.containerPath,
    'HostPath': obj.hostPath,
    'Permissions': obj.permissions?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails
 */
export interface SecurityHubAwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails {
  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails#ContainerPath
   */
  readonly containerPath?: string;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails#MountOptions
   */
  readonly mountOptions?: string[];

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails#Size
   */
  readonly size?: number;

}

/**
 * Converts an object of type 'SecurityHubAwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails(obj: SecurityHubAwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContainerPath': obj.containerPath,
    'MountOptions': obj.mountOptions?.map(y => y),
    'Size': obj.size,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails
 */
export interface SecurityHubAwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails {
  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails#Name
   */
  readonly name?: string;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails#ValueFrom
   */
  readonly valueFrom?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails(obj: SecurityHubAwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'ValueFrom': obj.valueFrom,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails
 */
export interface SecurityHubAwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails {
  /**
   * @schema SecurityHubAwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails#AccessPointId
   */
  readonly accessPointId?: string;

  /**
   * @schema SecurityHubAwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails#Iam
   */
  readonly iam?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails(obj: SecurityHubAwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccessPointId': obj.accessPointId,
    'Iam': obj.iam,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubRange
 */
export interface SecurityHubRange {
  /**
   * @schema SecurityHubRange#Start
   */
  readonly start?: number;

  /**
   * @schema SecurityHubRange#End
   */
  readonly end?: number;

  /**
   * @schema SecurityHubRange#StartColumn
   */
  readonly startColumn?: number;

}

/**
 * Converts an object of type 'SecurityHubRange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubRange(obj: SecurityHubRange | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Start': obj.start,
    'End': obj.end,
    'StartColumn': obj.startColumn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubPage
 */
export interface SecurityHubPage {
  /**
   * @schema SecurityHubPage#PageNumber
   */
  readonly pageNumber?: number;

  /**
   * @schema SecurityHubPage#LineRange
   */
  readonly lineRange?: SecurityHubRange;

  /**
   * @schema SecurityHubPage#OffsetRange
   */
  readonly offsetRange?: SecurityHubRange;

}

/**
 * Converts an object of type 'SecurityHubPage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubPage(obj: SecurityHubPage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PageNumber': obj.pageNumber,
    'LineRange': toJson_SecurityHubRange(obj.lineRange),
    'OffsetRange': toJson_SecurityHubRange(obj.offsetRange),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubRecord
 */
export interface SecurityHubRecord {
  /**
   * @schema SecurityHubRecord#JsonPath
   */
  readonly jsonPath?: string;

  /**
   * @schema SecurityHubRecord#RecordIndex
   */
  readonly recordIndex?: number;

}

/**
 * Converts an object of type 'SecurityHubRecord' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubRecord(obj: SecurityHubRecord | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JsonPath': obj.jsonPath,
    'RecordIndex': obj.recordIndex,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubCell
 */
export interface SecurityHubCell {
  /**
   * @schema SecurityHubCell#Column
   */
  readonly column?: number;

  /**
   * @schema SecurityHubCell#Row
   */
  readonly row?: number;

  /**
   * @schema SecurityHubCell#ColumnName
   */
  readonly columnName?: string;

  /**
   * @schema SecurityHubCell#CellReference
   */
  readonly cellReference?: string;

}

/**
 * Converts an object of type 'SecurityHubCell' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubCell(obj: SecurityHubCell | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Column': obj.column,
    'Row': obj.row,
    'ColumnName': obj.columnName,
    'CellReference': obj.cellReference,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsCloudFrontDistributionOriginGroupFailoverStatusCodes
 */
export interface SecurityHubAwsCloudFrontDistributionOriginGroupFailoverStatusCodes {
  /**
   * @schema SecurityHubAwsCloudFrontDistributionOriginGroupFailoverStatusCodes#Items
   */
  readonly items?: number[];

  /**
   * @schema SecurityHubAwsCloudFrontDistributionOriginGroupFailoverStatusCodes#Quantity
   */
  readonly quantity?: number;

}

/**
 * Converts an object of type 'SecurityHubAwsCloudFrontDistributionOriginGroupFailoverStatusCodes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsCloudFrontDistributionOriginGroupFailoverStatusCodes(obj: SecurityHubAwsCloudFrontDistributionOriginGroupFailoverStatusCodes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Items': obj.items?.map(y => y),
    'Quantity': obj.quantity,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails
 */
export interface SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails {
  /**
   * @schema SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails#Operands
   */
  readonly operands?: SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails[];

  /**
   * @schema SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails#Tag
   */
  readonly tag?: SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails;

  /**
   * @schema SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails(obj: SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Operands': obj.operands?.map(y => toJson_SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails(y)),
    'Prefix': obj.prefix,
    'Tag': toJson_SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails(obj.tag),
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails
 */
export interface SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails {
  /**
   * @schema SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails#Tag
   */
  readonly tag?: SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails;

  /**
   * @schema SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails(obj: SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Prefix': obj.prefix,
    'Tag': toJson_SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails(obj.tag),
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails
 */
export interface SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails {
  /**
   * @schema SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails#Key
   */
  readonly key?: string;

  /**
   * @schema SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails(obj: SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails | undefined): Record<string, any> | undefined {
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
 * @schema SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails
 */
export interface SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails {
  /**
   * @schema SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails#Key
   */
  readonly key?: string;

  /**
   * @schema SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails(obj: SecurityHubAwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
