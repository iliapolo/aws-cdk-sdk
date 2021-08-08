/**
 * @schema SupportAddAttachmentsToSetRequest
 */
export interface SupportAddAttachmentsToSetRequest {
  /**
   * @schema SupportAddAttachmentsToSetRequest#attachmentSetId
   */
  readonly attachmentSetId?: string;

  /**
   * @schema SupportAddAttachmentsToSetRequest#attachments
   */
  readonly attachments: SupportAttachment[];

}

/**
 * Converts an object of type 'SupportAddAttachmentsToSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SupportAddAttachmentsToSetRequest(obj: SupportAddAttachmentsToSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'attachmentSetId': obj.attachmentSetId,
    'attachments': obj.attachments?.map(y => toJson_SupportAttachment(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SupportAddAttachmentsToSetResponse
 */
export interface SupportAddAttachmentsToSetResponse {
  /**
   * @schema SupportAddAttachmentsToSetResponse#attachmentSetId
   */
  readonly attachmentSetId?: string;

  /**
   * @schema SupportAddAttachmentsToSetResponse#expiryTime
   */
  readonly expiryTime?: string;

}

/**
 * Converts an object of type 'SupportAddAttachmentsToSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SupportAddAttachmentsToSetResponse(obj: SupportAddAttachmentsToSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'attachmentSetId': obj.attachmentSetId,
    'expiryTime': obj.expiryTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SupportAddCommunicationToCaseRequest
 */
export interface SupportAddCommunicationToCaseRequest {
  /**
   * @schema SupportAddCommunicationToCaseRequest#caseId
   */
  readonly caseId?: string;

  /**
   * @schema SupportAddCommunicationToCaseRequest#communicationBody
   */
  readonly communicationBody: string;

  /**
   * @schema SupportAddCommunicationToCaseRequest#ccEmailAddresses
   */
  readonly ccEmailAddresses?: string[];

  /**
   * @schema SupportAddCommunicationToCaseRequest#attachmentSetId
   */
  readonly attachmentSetId?: string;

}

/**
 * Converts an object of type 'SupportAddCommunicationToCaseRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SupportAddCommunicationToCaseRequest(obj: SupportAddCommunicationToCaseRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'caseId': obj.caseId,
    'communicationBody': obj.communicationBody,
    'ccEmailAddresses': obj.ccEmailAddresses?.map(y => y),
    'attachmentSetId': obj.attachmentSetId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SupportAddCommunicationToCaseResponse
 */
export interface SupportAddCommunicationToCaseResponse {
  /**
   * @schema SupportAddCommunicationToCaseResponse#result
   */
  readonly result?: boolean;

}

/**
 * Converts an object of type 'SupportAddCommunicationToCaseResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SupportAddCommunicationToCaseResponse(obj: SupportAddCommunicationToCaseResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'result': obj.result,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SupportCreateCaseRequest
 */
export interface SupportCreateCaseRequest {
  /**
   * @schema SupportCreateCaseRequest#subject
   */
  readonly subject: string;

  /**
   * @schema SupportCreateCaseRequest#serviceCode
   */
  readonly serviceCode?: string;

  /**
   * @schema SupportCreateCaseRequest#severityCode
   */
  readonly severityCode?: string;

  /**
   * @schema SupportCreateCaseRequest#categoryCode
   */
  readonly categoryCode?: string;

  /**
   * @schema SupportCreateCaseRequest#communicationBody
   */
  readonly communicationBody: string;

  /**
   * @schema SupportCreateCaseRequest#ccEmailAddresses
   */
  readonly ccEmailAddresses?: string[];

  /**
   * @schema SupportCreateCaseRequest#language
   */
  readonly language?: string;

  /**
   * @schema SupportCreateCaseRequest#issueType
   */
  readonly issueType?: string;

  /**
   * @schema SupportCreateCaseRequest#attachmentSetId
   */
  readonly attachmentSetId?: string;

}

/**
 * Converts an object of type 'SupportCreateCaseRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SupportCreateCaseRequest(obj: SupportCreateCaseRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'subject': obj.subject,
    'serviceCode': obj.serviceCode,
    'severityCode': obj.severityCode,
    'categoryCode': obj.categoryCode,
    'communicationBody': obj.communicationBody,
    'ccEmailAddresses': obj.ccEmailAddresses?.map(y => y),
    'language': obj.language,
    'issueType': obj.issueType,
    'attachmentSetId': obj.attachmentSetId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SupportCreateCaseResponse
 */
export interface SupportCreateCaseResponse {
  /**
   * @schema SupportCreateCaseResponse#caseId
   */
  readonly caseId?: string;

}

/**
 * Converts an object of type 'SupportCreateCaseResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SupportCreateCaseResponse(obj: SupportCreateCaseResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'caseId': obj.caseId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SupportDescribeAttachmentRequest
 */
export interface SupportDescribeAttachmentRequest {
  /**
   * @schema SupportDescribeAttachmentRequest#attachmentId
   */
  readonly attachmentId: string;

}

/**
 * Converts an object of type 'SupportDescribeAttachmentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SupportDescribeAttachmentRequest(obj: SupportDescribeAttachmentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'attachmentId': obj.attachmentId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SupportDescribeAttachmentResponse
 */
export interface SupportDescribeAttachmentResponse {
  /**
   * @schema SupportDescribeAttachmentResponse#attachment
   */
  readonly attachment?: SupportAttachment;

}

/**
 * Converts an object of type 'SupportDescribeAttachmentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SupportDescribeAttachmentResponse(obj: SupportDescribeAttachmentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'attachment': toJson_SupportAttachment(obj.attachment),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SupportDescribeCasesRequest
 */
export interface SupportDescribeCasesRequest {
  /**
   * @schema SupportDescribeCasesRequest#caseIdList
   */
  readonly caseIdList?: string[];

  /**
   * @schema SupportDescribeCasesRequest#displayId
   */
  readonly displayId?: string;

  /**
   * @schema SupportDescribeCasesRequest#afterTime
   */
  readonly afterTime?: string;

  /**
   * @schema SupportDescribeCasesRequest#beforeTime
   */
  readonly beforeTime?: string;

  /**
   * @schema SupportDescribeCasesRequest#includeResolvedCases
   */
  readonly includeResolvedCases?: boolean;

  /**
   * @schema SupportDescribeCasesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SupportDescribeCasesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SupportDescribeCasesRequest#language
   */
  readonly language?: string;

  /**
   * @schema SupportDescribeCasesRequest#includeCommunications
   */
  readonly includeCommunications?: boolean;

}

/**
 * Converts an object of type 'SupportDescribeCasesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SupportDescribeCasesRequest(obj: SupportDescribeCasesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'caseIdList': obj.caseIdList?.map(y => y),
    'displayId': obj.displayId,
    'afterTime': obj.afterTime,
    'beforeTime': obj.beforeTime,
    'includeResolvedCases': obj.includeResolvedCases,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
    'language': obj.language,
    'includeCommunications': obj.includeCommunications,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SupportDescribeCasesResponse
 */
export interface SupportDescribeCasesResponse {
  /**
   * @schema SupportDescribeCasesResponse#cases
   */
  readonly cases?: SupportCaseDetails[];

  /**
   * @schema SupportDescribeCasesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SupportDescribeCasesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SupportDescribeCasesResponse(obj: SupportDescribeCasesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'cases': obj.cases?.map(y => toJson_SupportCaseDetails(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SupportDescribeCommunicationsRequest
 */
export interface SupportDescribeCommunicationsRequest {
  /**
   * @schema SupportDescribeCommunicationsRequest#caseId
   */
  readonly caseId: string;

  /**
   * @schema SupportDescribeCommunicationsRequest#beforeTime
   */
  readonly beforeTime?: string;

  /**
   * @schema SupportDescribeCommunicationsRequest#afterTime
   */
  readonly afterTime?: string;

  /**
   * @schema SupportDescribeCommunicationsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SupportDescribeCommunicationsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'SupportDescribeCommunicationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SupportDescribeCommunicationsRequest(obj: SupportDescribeCommunicationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'caseId': obj.caseId,
    'beforeTime': obj.beforeTime,
    'afterTime': obj.afterTime,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SupportDescribeCommunicationsResponse
 */
export interface SupportDescribeCommunicationsResponse {
  /**
   * @schema SupportDescribeCommunicationsResponse#communications
   */
  readonly communications?: SupportCommunication[];

  /**
   * @schema SupportDescribeCommunicationsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SupportDescribeCommunicationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SupportDescribeCommunicationsResponse(obj: SupportDescribeCommunicationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'communications': obj.communications?.map(y => toJson_SupportCommunication(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SupportDescribeServicesRequest
 */
export interface SupportDescribeServicesRequest {
  /**
   * @schema SupportDescribeServicesRequest#serviceCodeList
   */
  readonly serviceCodeList?: string[];

  /**
   * @schema SupportDescribeServicesRequest#language
   */
  readonly language?: string;

}

/**
 * Converts an object of type 'SupportDescribeServicesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SupportDescribeServicesRequest(obj: SupportDescribeServicesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'serviceCodeList': obj.serviceCodeList?.map(y => y),
    'language': obj.language,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SupportDescribeServicesResponse
 */
export interface SupportDescribeServicesResponse {
  /**
   * @schema SupportDescribeServicesResponse#services
   */
  readonly services?: SupportService[];

}

/**
 * Converts an object of type 'SupportDescribeServicesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SupportDescribeServicesResponse(obj: SupportDescribeServicesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'services': obj.services?.map(y => toJson_SupportService(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SupportDescribeSeverityLevelsRequest
 */
export interface SupportDescribeSeverityLevelsRequest {
  /**
   * @schema SupportDescribeSeverityLevelsRequest#language
   */
  readonly language?: string;

}

/**
 * Converts an object of type 'SupportDescribeSeverityLevelsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SupportDescribeSeverityLevelsRequest(obj: SupportDescribeSeverityLevelsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'language': obj.language,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SupportDescribeSeverityLevelsResponse
 */
export interface SupportDescribeSeverityLevelsResponse {
  /**
   * @schema SupportDescribeSeverityLevelsResponse#severityLevels
   */
  readonly severityLevels?: SupportSeverityLevel[];

}

/**
 * Converts an object of type 'SupportDescribeSeverityLevelsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SupportDescribeSeverityLevelsResponse(obj: SupportDescribeSeverityLevelsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'severityLevels': obj.severityLevels?.map(y => toJson_SupportSeverityLevel(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SupportDescribeTrustedAdvisorCheckRefreshStatusesRequest
 */
export interface SupportDescribeTrustedAdvisorCheckRefreshStatusesRequest {
  /**
   * @schema SupportDescribeTrustedAdvisorCheckRefreshStatusesRequest#checkIds
   */
  readonly checkIds: string[];

}

/**
 * Converts an object of type 'SupportDescribeTrustedAdvisorCheckRefreshStatusesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SupportDescribeTrustedAdvisorCheckRefreshStatusesRequest(obj: SupportDescribeTrustedAdvisorCheckRefreshStatusesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'checkIds': obj.checkIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SupportDescribeTrustedAdvisorCheckRefreshStatusesResponse
 */
export interface SupportDescribeTrustedAdvisorCheckRefreshStatusesResponse {
  /**
   * @schema SupportDescribeTrustedAdvisorCheckRefreshStatusesResponse#statuses
   */
  readonly statuses: SupportTrustedAdvisorCheckRefreshStatus[];

}

/**
 * Converts an object of type 'SupportDescribeTrustedAdvisorCheckRefreshStatusesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SupportDescribeTrustedAdvisorCheckRefreshStatusesResponse(obj: SupportDescribeTrustedAdvisorCheckRefreshStatusesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'statuses': obj.statuses?.map(y => toJson_SupportTrustedAdvisorCheckRefreshStatus(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SupportDescribeTrustedAdvisorCheckResultRequest
 */
export interface SupportDescribeTrustedAdvisorCheckResultRequest {
  /**
   * @schema SupportDescribeTrustedAdvisorCheckResultRequest#checkId
   */
  readonly checkId: string;

  /**
   * @schema SupportDescribeTrustedAdvisorCheckResultRequest#language
   */
  readonly language?: string;

}

/**
 * Converts an object of type 'SupportDescribeTrustedAdvisorCheckResultRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SupportDescribeTrustedAdvisorCheckResultRequest(obj: SupportDescribeTrustedAdvisorCheckResultRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'checkId': obj.checkId,
    'language': obj.language,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SupportDescribeTrustedAdvisorCheckResultResponse
 */
export interface SupportDescribeTrustedAdvisorCheckResultResponse {
  /**
   * @schema SupportDescribeTrustedAdvisorCheckResultResponse#result
   */
  readonly result?: SupportTrustedAdvisorCheckResult;

}

/**
 * Converts an object of type 'SupportDescribeTrustedAdvisorCheckResultResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SupportDescribeTrustedAdvisorCheckResultResponse(obj: SupportDescribeTrustedAdvisorCheckResultResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'result': toJson_SupportTrustedAdvisorCheckResult(obj.result),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SupportDescribeTrustedAdvisorCheckSummariesRequest
 */
export interface SupportDescribeTrustedAdvisorCheckSummariesRequest {
  /**
   * @schema SupportDescribeTrustedAdvisorCheckSummariesRequest#checkIds
   */
  readonly checkIds: string[];

}

/**
 * Converts an object of type 'SupportDescribeTrustedAdvisorCheckSummariesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SupportDescribeTrustedAdvisorCheckSummariesRequest(obj: SupportDescribeTrustedAdvisorCheckSummariesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'checkIds': obj.checkIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SupportDescribeTrustedAdvisorCheckSummariesResponse
 */
export interface SupportDescribeTrustedAdvisorCheckSummariesResponse {
  /**
   * @schema SupportDescribeTrustedAdvisorCheckSummariesResponse#summaries
   */
  readonly summaries: SupportTrustedAdvisorCheckSummary[];

}

/**
 * Converts an object of type 'SupportDescribeTrustedAdvisorCheckSummariesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SupportDescribeTrustedAdvisorCheckSummariesResponse(obj: SupportDescribeTrustedAdvisorCheckSummariesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'summaries': obj.summaries?.map(y => toJson_SupportTrustedAdvisorCheckSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SupportDescribeTrustedAdvisorChecksRequest
 */
export interface SupportDescribeTrustedAdvisorChecksRequest {
  /**
   * @schema SupportDescribeTrustedAdvisorChecksRequest#language
   */
  readonly language: string;

}

/**
 * Converts an object of type 'SupportDescribeTrustedAdvisorChecksRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SupportDescribeTrustedAdvisorChecksRequest(obj: SupportDescribeTrustedAdvisorChecksRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'language': obj.language,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SupportDescribeTrustedAdvisorChecksResponse
 */
export interface SupportDescribeTrustedAdvisorChecksResponse {
  /**
   * @schema SupportDescribeTrustedAdvisorChecksResponse#checks
   */
  readonly checks: SupportTrustedAdvisorCheckDescription[];

}

/**
 * Converts an object of type 'SupportDescribeTrustedAdvisorChecksResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SupportDescribeTrustedAdvisorChecksResponse(obj: SupportDescribeTrustedAdvisorChecksResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'checks': obj.checks?.map(y => toJson_SupportTrustedAdvisorCheckDescription(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SupportRefreshTrustedAdvisorCheckRequest
 */
export interface SupportRefreshTrustedAdvisorCheckRequest {
  /**
   * @schema SupportRefreshTrustedAdvisorCheckRequest#checkId
   */
  readonly checkId: string;

}

/**
 * Converts an object of type 'SupportRefreshTrustedAdvisorCheckRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SupportRefreshTrustedAdvisorCheckRequest(obj: SupportRefreshTrustedAdvisorCheckRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'checkId': obj.checkId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SupportRefreshTrustedAdvisorCheckResponse
 */
export interface SupportRefreshTrustedAdvisorCheckResponse {
  /**
   * @schema SupportRefreshTrustedAdvisorCheckResponse#status
   */
  readonly status: SupportTrustedAdvisorCheckRefreshStatus;

}

/**
 * Converts an object of type 'SupportRefreshTrustedAdvisorCheckResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SupportRefreshTrustedAdvisorCheckResponse(obj: SupportRefreshTrustedAdvisorCheckResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'status': toJson_SupportTrustedAdvisorCheckRefreshStatus(obj.status),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SupportResolveCaseRequest
 */
export interface SupportResolveCaseRequest {
  /**
   * @schema SupportResolveCaseRequest#caseId
   */
  readonly caseId?: string;

}

/**
 * Converts an object of type 'SupportResolveCaseRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SupportResolveCaseRequest(obj: SupportResolveCaseRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'caseId': obj.caseId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SupportResolveCaseResponse
 */
export interface SupportResolveCaseResponse {
  /**
   * @schema SupportResolveCaseResponse#initialCaseStatus
   */
  readonly initialCaseStatus?: string;

  /**
   * @schema SupportResolveCaseResponse#finalCaseStatus
   */
  readonly finalCaseStatus?: string;

}

/**
 * Converts an object of type 'SupportResolveCaseResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SupportResolveCaseResponse(obj: SupportResolveCaseResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'initialCaseStatus': obj.initialCaseStatus,
    'finalCaseStatus': obj.finalCaseStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SupportAttachment
 */
export interface SupportAttachment {
  /**
   * @schema SupportAttachment#fileName
   */
  readonly fileName?: string;

  /**
   * @schema SupportAttachment#data
   */
  readonly data?: any;

}

/**
 * Converts an object of type 'SupportAttachment' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SupportAttachment(obj: SupportAttachment | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'fileName': obj.fileName,
    'data': obj.data,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SupportCaseDetails
 */
export interface SupportCaseDetails {
  /**
   * @schema SupportCaseDetails#caseId
   */
  readonly caseId?: string;

  /**
   * @schema SupportCaseDetails#displayId
   */
  readonly displayId?: string;

  /**
   * @schema SupportCaseDetails#subject
   */
  readonly subject?: string;

  /**
   * @schema SupportCaseDetails#status
   */
  readonly status?: string;

  /**
   * @schema SupportCaseDetails#serviceCode
   */
  readonly serviceCode?: string;

  /**
   * @schema SupportCaseDetails#categoryCode
   */
  readonly categoryCode?: string;

  /**
   * @schema SupportCaseDetails#severityCode
   */
  readonly severityCode?: string;

  /**
   * @schema SupportCaseDetails#submittedBy
   */
  readonly submittedBy?: string;

  /**
   * @schema SupportCaseDetails#timeCreated
   */
  readonly timeCreated?: string;

  /**
   * @schema SupportCaseDetails#recentCommunications
   */
  readonly recentCommunications?: SupportRecentCaseCommunications;

  /**
   * @schema SupportCaseDetails#ccEmailAddresses
   */
  readonly ccEmailAddresses?: string[];

  /**
   * @schema SupportCaseDetails#language
   */
  readonly language?: string;

}

/**
 * Converts an object of type 'SupportCaseDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SupportCaseDetails(obj: SupportCaseDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'caseId': obj.caseId,
    'displayId': obj.displayId,
    'subject': obj.subject,
    'status': obj.status,
    'serviceCode': obj.serviceCode,
    'categoryCode': obj.categoryCode,
    'severityCode': obj.severityCode,
    'submittedBy': obj.submittedBy,
    'timeCreated': obj.timeCreated,
    'recentCommunications': toJson_SupportRecentCaseCommunications(obj.recentCommunications),
    'ccEmailAddresses': obj.ccEmailAddresses?.map(y => y),
    'language': obj.language,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SupportCommunication
 */
export interface SupportCommunication {
  /**
   * @schema SupportCommunication#caseId
   */
  readonly caseId?: string;

  /**
   * @schema SupportCommunication#body
   */
  readonly body?: string;

  /**
   * @schema SupportCommunication#submittedBy
   */
  readonly submittedBy?: string;

  /**
   * @schema SupportCommunication#timeCreated
   */
  readonly timeCreated?: string;

  /**
   * @schema SupportCommunication#attachmentSet
   */
  readonly attachmentSet?: SupportAttachmentDetails[];

}

/**
 * Converts an object of type 'SupportCommunication' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SupportCommunication(obj: SupportCommunication | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'caseId': obj.caseId,
    'body': obj.body,
    'submittedBy': obj.submittedBy,
    'timeCreated': obj.timeCreated,
    'attachmentSet': obj.attachmentSet?.map(y => toJson_SupportAttachmentDetails(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SupportService
 */
export interface SupportService {
  /**
   * @schema SupportService#code
   */
  readonly code?: string;

  /**
   * @schema SupportService#name
   */
  readonly name?: string;

  /**
   * @schema SupportService#categories
   */
  readonly categories?: SupportCategory[];

}

/**
 * Converts an object of type 'SupportService' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SupportService(obj: SupportService | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'code': obj.code,
    'name': obj.name,
    'categories': obj.categories?.map(y => toJson_SupportCategory(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SupportSeverityLevel
 */
export interface SupportSeverityLevel {
  /**
   * @schema SupportSeverityLevel#code
   */
  readonly code?: string;

  /**
   * @schema SupportSeverityLevel#name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'SupportSeverityLevel' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SupportSeverityLevel(obj: SupportSeverityLevel | undefined): Record<string, any> | undefined {
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
 * @schema SupportTrustedAdvisorCheckRefreshStatus
 */
export interface SupportTrustedAdvisorCheckRefreshStatus {
  /**
   * @schema SupportTrustedAdvisorCheckRefreshStatus#checkId
   */
  readonly checkId: string;

  /**
   * @schema SupportTrustedAdvisorCheckRefreshStatus#status
   */
  readonly status: string;

  /**
   * @schema SupportTrustedAdvisorCheckRefreshStatus#millisUntilNextRefreshable
   */
  readonly millisUntilNextRefreshable: number;

}

/**
 * Converts an object of type 'SupportTrustedAdvisorCheckRefreshStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SupportTrustedAdvisorCheckRefreshStatus(obj: SupportTrustedAdvisorCheckRefreshStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'checkId': obj.checkId,
    'status': obj.status,
    'millisUntilNextRefreshable': obj.millisUntilNextRefreshable,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SupportTrustedAdvisorCheckResult
 */
export interface SupportTrustedAdvisorCheckResult {
  /**
   * @schema SupportTrustedAdvisorCheckResult#checkId
   */
  readonly checkId: string;

  /**
   * @schema SupportTrustedAdvisorCheckResult#timestamp
   */
  readonly timestamp: string;

  /**
   * @schema SupportTrustedAdvisorCheckResult#status
   */
  readonly status: string;

  /**
   * @schema SupportTrustedAdvisorCheckResult#resourcesSummary
   */
  readonly resourcesSummary: SupportTrustedAdvisorResourcesSummary;

  /**
   * @schema SupportTrustedAdvisorCheckResult#categorySpecificSummary
   */
  readonly categorySpecificSummary: SupportTrustedAdvisorCategorySpecificSummary;

  /**
   * @schema SupportTrustedAdvisorCheckResult#flaggedResources
   */
  readonly flaggedResources: SupportTrustedAdvisorResourceDetail[];

}

/**
 * Converts an object of type 'SupportTrustedAdvisorCheckResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SupportTrustedAdvisorCheckResult(obj: SupportTrustedAdvisorCheckResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'checkId': obj.checkId,
    'timestamp': obj.timestamp,
    'status': obj.status,
    'resourcesSummary': toJson_SupportTrustedAdvisorResourcesSummary(obj.resourcesSummary),
    'categorySpecificSummary': toJson_SupportTrustedAdvisorCategorySpecificSummary(obj.categorySpecificSummary),
    'flaggedResources': obj.flaggedResources?.map(y => toJson_SupportTrustedAdvisorResourceDetail(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SupportTrustedAdvisorCheckSummary
 */
export interface SupportTrustedAdvisorCheckSummary {
  /**
   * @schema SupportTrustedAdvisorCheckSummary#checkId
   */
  readonly checkId: string;

  /**
   * @schema SupportTrustedAdvisorCheckSummary#timestamp
   */
  readonly timestamp: string;

  /**
   * @schema SupportTrustedAdvisorCheckSummary#status
   */
  readonly status: string;

  /**
   * @schema SupportTrustedAdvisorCheckSummary#hasFlaggedResources
   */
  readonly hasFlaggedResources?: boolean;

  /**
   * @schema SupportTrustedAdvisorCheckSummary#resourcesSummary
   */
  readonly resourcesSummary: SupportTrustedAdvisorResourcesSummary;

  /**
   * @schema SupportTrustedAdvisorCheckSummary#categorySpecificSummary
   */
  readonly categorySpecificSummary: SupportTrustedAdvisorCategorySpecificSummary;

}

/**
 * Converts an object of type 'SupportTrustedAdvisorCheckSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SupportTrustedAdvisorCheckSummary(obj: SupportTrustedAdvisorCheckSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'checkId': obj.checkId,
    'timestamp': obj.timestamp,
    'status': obj.status,
    'hasFlaggedResources': obj.hasFlaggedResources,
    'resourcesSummary': toJson_SupportTrustedAdvisorResourcesSummary(obj.resourcesSummary),
    'categorySpecificSummary': toJson_SupportTrustedAdvisorCategorySpecificSummary(obj.categorySpecificSummary),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SupportTrustedAdvisorCheckDescription
 */
export interface SupportTrustedAdvisorCheckDescription {
  /**
   * @schema SupportTrustedAdvisorCheckDescription#id
   */
  readonly id: string;

  /**
   * @schema SupportTrustedAdvisorCheckDescription#name
   */
  readonly name: string;

  /**
   * @schema SupportTrustedAdvisorCheckDescription#description
   */
  readonly description: string;

  /**
   * @schema SupportTrustedAdvisorCheckDescription#category
   */
  readonly category: string;

  /**
   * @schema SupportTrustedAdvisorCheckDescription#metadata
   */
  readonly metadata: string[];

}

/**
 * Converts an object of type 'SupportTrustedAdvisorCheckDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SupportTrustedAdvisorCheckDescription(obj: SupportTrustedAdvisorCheckDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'name': obj.name,
    'description': obj.description,
    'category': obj.category,
    'metadata': obj.metadata?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SupportRecentCaseCommunications
 */
export interface SupportRecentCaseCommunications {
  /**
   * @schema SupportRecentCaseCommunications#communications
   */
  readonly communications?: SupportCommunication[];

  /**
   * @schema SupportRecentCaseCommunications#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SupportRecentCaseCommunications' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SupportRecentCaseCommunications(obj: SupportRecentCaseCommunications | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'communications': obj.communications?.map(y => toJson_SupportCommunication(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SupportAttachmentDetails
 */
export interface SupportAttachmentDetails {
  /**
   * @schema SupportAttachmentDetails#attachmentId
   */
  readonly attachmentId?: string;

  /**
   * @schema SupportAttachmentDetails#fileName
   */
  readonly fileName?: string;

}

/**
 * Converts an object of type 'SupportAttachmentDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SupportAttachmentDetails(obj: SupportAttachmentDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'attachmentId': obj.attachmentId,
    'fileName': obj.fileName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SupportCategory
 */
export interface SupportCategory {
  /**
   * @schema SupportCategory#code
   */
  readonly code?: string;

  /**
   * @schema SupportCategory#name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'SupportCategory' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SupportCategory(obj: SupportCategory | undefined): Record<string, any> | undefined {
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
 * @schema SupportTrustedAdvisorResourcesSummary
 */
export interface SupportTrustedAdvisorResourcesSummary {
  /**
   * @schema SupportTrustedAdvisorResourcesSummary#resourcesProcessed
   */
  readonly resourcesProcessed: number;

  /**
   * @schema SupportTrustedAdvisorResourcesSummary#resourcesFlagged
   */
  readonly resourcesFlagged: number;

  /**
   * @schema SupportTrustedAdvisorResourcesSummary#resourcesIgnored
   */
  readonly resourcesIgnored: number;

  /**
   * @schema SupportTrustedAdvisorResourcesSummary#resourcesSuppressed
   */
  readonly resourcesSuppressed: number;

}

/**
 * Converts an object of type 'SupportTrustedAdvisorResourcesSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SupportTrustedAdvisorResourcesSummary(obj: SupportTrustedAdvisorResourcesSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourcesProcessed': obj.resourcesProcessed,
    'resourcesFlagged': obj.resourcesFlagged,
    'resourcesIgnored': obj.resourcesIgnored,
    'resourcesSuppressed': obj.resourcesSuppressed,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SupportTrustedAdvisorCategorySpecificSummary
 */
export interface SupportTrustedAdvisorCategorySpecificSummary {
  /**
   * @schema SupportTrustedAdvisorCategorySpecificSummary#costOptimizing
   */
  readonly costOptimizing?: SupportTrustedAdvisorCostOptimizingSummary;

}

/**
 * Converts an object of type 'SupportTrustedAdvisorCategorySpecificSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SupportTrustedAdvisorCategorySpecificSummary(obj: SupportTrustedAdvisorCategorySpecificSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'costOptimizing': toJson_SupportTrustedAdvisorCostOptimizingSummary(obj.costOptimizing),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SupportTrustedAdvisorResourceDetail
 */
export interface SupportTrustedAdvisorResourceDetail {
  /**
   * @schema SupportTrustedAdvisorResourceDetail#status
   */
  readonly status: string;

  /**
   * @schema SupportTrustedAdvisorResourceDetail#region
   */
  readonly region?: string;

  /**
   * @schema SupportTrustedAdvisorResourceDetail#resourceId
   */
  readonly resourceId: string;

  /**
   * @schema SupportTrustedAdvisorResourceDetail#isSuppressed
   */
  readonly isSuppressed?: boolean;

  /**
   * @schema SupportTrustedAdvisorResourceDetail#metadata
   */
  readonly metadata: string[];

}

/**
 * Converts an object of type 'SupportTrustedAdvisorResourceDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SupportTrustedAdvisorResourceDetail(obj: SupportTrustedAdvisorResourceDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'status': obj.status,
    'region': obj.region,
    'resourceId': obj.resourceId,
    'isSuppressed': obj.isSuppressed,
    'metadata': obj.metadata?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SupportTrustedAdvisorCostOptimizingSummary
 */
export interface SupportTrustedAdvisorCostOptimizingSummary {
  /**
   * @schema SupportTrustedAdvisorCostOptimizingSummary#estimatedMonthlySavings
   */
  readonly estimatedMonthlySavings: number;

  /**
   * @schema SupportTrustedAdvisorCostOptimizingSummary#estimatedPercentMonthlySavings
   */
  readonly estimatedPercentMonthlySavings: number;

}

/**
 * Converts an object of type 'SupportTrustedAdvisorCostOptimizingSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SupportTrustedAdvisorCostOptimizingSummary(obj: SupportTrustedAdvisorCostOptimizingSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'estimatedMonthlySavings': obj.estimatedMonthlySavings,
    'estimatedPercentMonthlySavings': obj.estimatedPercentMonthlySavings,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
