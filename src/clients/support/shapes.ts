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
 * @schema SupportAddCommunicationToCaseResponse
 */
export interface SupportAddCommunicationToCaseResponse {
  /**
   * @schema SupportAddCommunicationToCaseResponse#result
   */
  readonly result?: boolean;

}

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
 * @schema SupportCreateCaseResponse
 */
export interface SupportCreateCaseResponse {
  /**
   * @schema SupportCreateCaseResponse#caseId
   */
  readonly caseId?: string;

}

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
 * @schema SupportDescribeAttachmentResponse
 */
export interface SupportDescribeAttachmentResponse {
  /**
   * @schema SupportDescribeAttachmentResponse#attachment
   */
  readonly attachment?: SupportAttachment;

}

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
 * @schema SupportDescribeServicesResponse
 */
export interface SupportDescribeServicesResponse {
  /**
   * @schema SupportDescribeServicesResponse#services
   */
  readonly services?: SupportService[];

}

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
 * @schema SupportDescribeSeverityLevelsResponse
 */
export interface SupportDescribeSeverityLevelsResponse {
  /**
   * @schema SupportDescribeSeverityLevelsResponse#severityLevels
   */
  readonly severityLevels?: SupportSeverityLevel[];

}

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
 * @schema SupportDescribeTrustedAdvisorCheckRefreshStatusesResponse
 */
export interface SupportDescribeTrustedAdvisorCheckRefreshStatusesResponse {
  /**
   * @schema SupportDescribeTrustedAdvisorCheckRefreshStatusesResponse#statuses
   */
  readonly statuses: SupportTrustedAdvisorCheckRefreshStatus[];

}

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
 * @schema SupportDescribeTrustedAdvisorCheckResultResponse
 */
export interface SupportDescribeTrustedAdvisorCheckResultResponse {
  /**
   * @schema SupportDescribeTrustedAdvisorCheckResultResponse#result
   */
  readonly result?: SupportTrustedAdvisorCheckResult;

}

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
 * @schema SupportDescribeTrustedAdvisorCheckSummariesResponse
 */
export interface SupportDescribeTrustedAdvisorCheckSummariesResponse {
  /**
   * @schema SupportDescribeTrustedAdvisorCheckSummariesResponse#summaries
   */
  readonly summaries: SupportTrustedAdvisorCheckSummary[];

}

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
 * @schema SupportDescribeTrustedAdvisorChecksResponse
 */
export interface SupportDescribeTrustedAdvisorChecksResponse {
  /**
   * @schema SupportDescribeTrustedAdvisorChecksResponse#checks
   */
  readonly checks: SupportTrustedAdvisorCheckDescription[];

}

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
 * @schema SupportRefreshTrustedAdvisorCheckResponse
 */
export interface SupportRefreshTrustedAdvisorCheckResponse {
  /**
   * @schema SupportRefreshTrustedAdvisorCheckResponse#status
   */
  readonly status: SupportTrustedAdvisorCheckRefreshStatus;

}

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
 * @schema SupportTrustedAdvisorCategorySpecificSummary
 */
export interface SupportTrustedAdvisorCategorySpecificSummary {
  /**
   * @schema SupportTrustedAdvisorCategorySpecificSummary#costOptimizing
   */
  readonly costOptimizing?: SupportTrustedAdvisorCostOptimizingSummary;

}

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
