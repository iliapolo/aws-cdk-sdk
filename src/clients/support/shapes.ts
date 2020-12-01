/**
 * @schema AddAttachmentsToSetRequest
 */
export interface AddAttachmentsToSetRequest {
  /**
   * @schema AddAttachmentsToSetRequest#attachmentSetId
   */
  readonly attachmentSetId?: string;

  /**
   * @schema AddAttachmentsToSetRequest#attachments
   */
  readonly attachments: Attachment[];

}

/**
 * @schema AddAttachmentsToSetResponse
 */
export interface AddAttachmentsToSetResponse {
  /**
   * @schema AddAttachmentsToSetResponse#attachmentSetId
   */
  readonly attachmentSetId?: string;

  /**
   * @schema AddAttachmentsToSetResponse#expiryTime
   */
  readonly expiryTime?: string;

}

/**
 * @schema AddCommunicationToCaseRequest
 */
export interface AddCommunicationToCaseRequest {
  /**
   * @schema AddCommunicationToCaseRequest#caseId
   */
  readonly caseId?: string;

  /**
   * @schema AddCommunicationToCaseRequest#communicationBody
   */
  readonly communicationBody: string;

  /**
   * @schema AddCommunicationToCaseRequest#ccEmailAddresses
   */
  readonly ccEmailAddresses?: string[];

  /**
   * @schema AddCommunicationToCaseRequest#attachmentSetId
   */
  readonly attachmentSetId?: string;

}

/**
 * @schema AddCommunicationToCaseResponse
 */
export interface AddCommunicationToCaseResponse {
  /**
   * @schema AddCommunicationToCaseResponse#result
   */
  readonly result?: boolean;

}

/**
 * @schema CreateCaseRequest
 */
export interface CreateCaseRequest {
  /**
   * @schema CreateCaseRequest#subject
   */
  readonly subject: string;

  /**
   * @schema CreateCaseRequest#serviceCode
   */
  readonly serviceCode?: string;

  /**
   * @schema CreateCaseRequest#severityCode
   */
  readonly severityCode?: string;

  /**
   * @schema CreateCaseRequest#categoryCode
   */
  readonly categoryCode?: string;

  /**
   * @schema CreateCaseRequest#communicationBody
   */
  readonly communicationBody: string;

  /**
   * @schema CreateCaseRequest#ccEmailAddresses
   */
  readonly ccEmailAddresses?: string[];

  /**
   * @schema CreateCaseRequest#language
   */
  readonly language?: string;

  /**
   * @schema CreateCaseRequest#issueType
   */
  readonly issueType?: string;

  /**
   * @schema CreateCaseRequest#attachmentSetId
   */
  readonly attachmentSetId?: string;

}

/**
 * @schema CreateCaseResponse
 */
export interface CreateCaseResponse {
  /**
   * @schema CreateCaseResponse#caseId
   */
  readonly caseId?: string;

}

/**
 * @schema DescribeAttachmentRequest
 */
export interface DescribeAttachmentRequest {
  /**
   * @schema DescribeAttachmentRequest#attachmentId
   */
  readonly attachmentId: string;

}

/**
 * @schema DescribeAttachmentResponse
 */
export interface DescribeAttachmentResponse {
  /**
   * @schema DescribeAttachmentResponse#attachment
   */
  readonly attachment?: Attachment;

}

/**
 * @schema DescribeCasesRequest
 */
export interface DescribeCasesRequest {
  /**
   * @schema DescribeCasesRequest#caseIdList
   */
  readonly caseIdList?: string[];

  /**
   * @schema DescribeCasesRequest#displayId
   */
  readonly displayId?: string;

  /**
   * @schema DescribeCasesRequest#afterTime
   */
  readonly afterTime?: string;

  /**
   * @schema DescribeCasesRequest#beforeTime
   */
  readonly beforeTime?: string;

  /**
   * @schema DescribeCasesRequest#includeResolvedCases
   */
  readonly includeResolvedCases?: boolean;

  /**
   * @schema DescribeCasesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeCasesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeCasesRequest#language
   */
  readonly language?: string;

  /**
   * @schema DescribeCasesRequest#includeCommunications
   */
  readonly includeCommunications?: boolean;

}

/**
 * @schema DescribeCasesResponse
 */
export interface DescribeCasesResponse {
  /**
   * @schema DescribeCasesResponse#cases
   */
  readonly cases?: CaseDetails[];

  /**
   * @schema DescribeCasesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeCommunicationsRequest
 */
export interface DescribeCommunicationsRequest {
  /**
   * @schema DescribeCommunicationsRequest#caseId
   */
  readonly caseId: string;

  /**
   * @schema DescribeCommunicationsRequest#beforeTime
   */
  readonly beforeTime?: string;

  /**
   * @schema DescribeCommunicationsRequest#afterTime
   */
  readonly afterTime?: string;

  /**
   * @schema DescribeCommunicationsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeCommunicationsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema DescribeCommunicationsResponse
 */
export interface DescribeCommunicationsResponse {
  /**
   * @schema DescribeCommunicationsResponse#communications
   */
  readonly communications?: Communication[];

  /**
   * @schema DescribeCommunicationsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeServicesRequest
 */
export interface DescribeServicesRequest {
  /**
   * @schema DescribeServicesRequest#serviceCodeList
   */
  readonly serviceCodeList?: string[];

  /**
   * @schema DescribeServicesRequest#language
   */
  readonly language?: string;

}

/**
 * @schema DescribeServicesResponse
 */
export interface DescribeServicesResponse {
  /**
   * @schema DescribeServicesResponse#services
   */
  readonly services?: Service[];

}

/**
 * @schema DescribeSeverityLevelsRequest
 */
export interface DescribeSeverityLevelsRequest {
  /**
   * @schema DescribeSeverityLevelsRequest#language
   */
  readonly language?: string;

}

/**
 * @schema DescribeSeverityLevelsResponse
 */
export interface DescribeSeverityLevelsResponse {
  /**
   * @schema DescribeSeverityLevelsResponse#severityLevels
   */
  readonly severityLevels?: SeverityLevel[];

}

/**
 * @schema DescribeTrustedAdvisorCheckRefreshStatusesRequest
 */
export interface DescribeTrustedAdvisorCheckRefreshStatusesRequest {
  /**
   * @schema DescribeTrustedAdvisorCheckRefreshStatusesRequest#checkIds
   */
  readonly checkIds: string[];

}

/**
 * @schema DescribeTrustedAdvisorCheckRefreshStatusesResponse
 */
export interface DescribeTrustedAdvisorCheckRefreshStatusesResponse {
  /**
   * @schema DescribeTrustedAdvisorCheckRefreshStatusesResponse#statuses
   */
  readonly statuses: TrustedAdvisorCheckRefreshStatus[];

}

/**
 * @schema DescribeTrustedAdvisorCheckResultRequest
 */
export interface DescribeTrustedAdvisorCheckResultRequest {
  /**
   * @schema DescribeTrustedAdvisorCheckResultRequest#checkId
   */
  readonly checkId: string;

  /**
   * @schema DescribeTrustedAdvisorCheckResultRequest#language
   */
  readonly language?: string;

}

/**
 * @schema DescribeTrustedAdvisorCheckResultResponse
 */
export interface DescribeTrustedAdvisorCheckResultResponse {
  /**
   * @schema DescribeTrustedAdvisorCheckResultResponse#result
   */
  readonly result?: TrustedAdvisorCheckResult;

}

/**
 * @schema DescribeTrustedAdvisorCheckSummariesRequest
 */
export interface DescribeTrustedAdvisorCheckSummariesRequest {
  /**
   * @schema DescribeTrustedAdvisorCheckSummariesRequest#checkIds
   */
  readonly checkIds: string[];

}

/**
 * @schema DescribeTrustedAdvisorCheckSummariesResponse
 */
export interface DescribeTrustedAdvisorCheckSummariesResponse {
  /**
   * @schema DescribeTrustedAdvisorCheckSummariesResponse#summaries
   */
  readonly summaries: TrustedAdvisorCheckSummary[];

}

/**
 * @schema DescribeTrustedAdvisorChecksRequest
 */
export interface DescribeTrustedAdvisorChecksRequest {
  /**
   * @schema DescribeTrustedAdvisorChecksRequest#language
   */
  readonly language: string;

}

/**
 * @schema DescribeTrustedAdvisorChecksResponse
 */
export interface DescribeTrustedAdvisorChecksResponse {
  /**
   * @schema DescribeTrustedAdvisorChecksResponse#checks
   */
  readonly checks: TrustedAdvisorCheckDescription[];

}

/**
 * @schema RefreshTrustedAdvisorCheckRequest
 */
export interface RefreshTrustedAdvisorCheckRequest {
  /**
   * @schema RefreshTrustedAdvisorCheckRequest#checkId
   */
  readonly checkId: string;

}

/**
 * @schema RefreshTrustedAdvisorCheckResponse
 */
export interface RefreshTrustedAdvisorCheckResponse {
  /**
   * @schema RefreshTrustedAdvisorCheckResponse#status
   */
  readonly status: TrustedAdvisorCheckRefreshStatus;

}

/**
 * @schema ResolveCaseRequest
 */
export interface ResolveCaseRequest {
  /**
   * @schema ResolveCaseRequest#caseId
   */
  readonly caseId?: string;

}

/**
 * @schema ResolveCaseResponse
 */
export interface ResolveCaseResponse {
  /**
   * @schema ResolveCaseResponse#initialCaseStatus
   */
  readonly initialCaseStatus?: string;

  /**
   * @schema ResolveCaseResponse#finalCaseStatus
   */
  readonly finalCaseStatus?: string;

}

/**
 * @schema Attachment
 */
export interface Attachment {
  /**
   * @schema Attachment#fileName
   */
  readonly fileName?: string;

  /**
   * @schema Attachment#data
   */
  readonly data?: any;

}

/**
 * @schema CaseDetails
 */
export interface CaseDetails {
  /**
   * @schema CaseDetails#caseId
   */
  readonly caseId?: string;

  /**
   * @schema CaseDetails#displayId
   */
  readonly displayId?: string;

  /**
   * @schema CaseDetails#subject
   */
  readonly subject?: string;

  /**
   * @schema CaseDetails#status
   */
  readonly status?: string;

  /**
   * @schema CaseDetails#serviceCode
   */
  readonly serviceCode?: string;

  /**
   * @schema CaseDetails#categoryCode
   */
  readonly categoryCode?: string;

  /**
   * @schema CaseDetails#severityCode
   */
  readonly severityCode?: string;

  /**
   * @schema CaseDetails#submittedBy
   */
  readonly submittedBy?: string;

  /**
   * @schema CaseDetails#timeCreated
   */
  readonly timeCreated?: string;

  /**
   * @schema CaseDetails#recentCommunications
   */
  readonly recentCommunications?: RecentCaseCommunications;

  /**
   * @schema CaseDetails#ccEmailAddresses
   */
  readonly ccEmailAddresses?: string[];

  /**
   * @schema CaseDetails#language
   */
  readonly language?: string;

}

/**
 * @schema Communication
 */
export interface Communication {
  /**
   * @schema Communication#caseId
   */
  readonly caseId?: string;

  /**
   * @schema Communication#body
   */
  readonly body?: string;

  /**
   * @schema Communication#submittedBy
   */
  readonly submittedBy?: string;

  /**
   * @schema Communication#timeCreated
   */
  readonly timeCreated?: string;

  /**
   * @schema Communication#attachmentSet
   */
  readonly attachmentSet?: AttachmentDetails[];

}

/**
 * @schema Service
 */
export interface Service {
  /**
   * @schema Service#code
   */
  readonly code?: string;

  /**
   * @schema Service#name
   */
  readonly name?: string;

  /**
   * @schema Service#categories
   */
  readonly categories?: Category[];

}

/**
 * @schema SeverityLevel
 */
export interface SeverityLevel {
  /**
   * @schema SeverityLevel#code
   */
  readonly code?: string;

  /**
   * @schema SeverityLevel#name
   */
  readonly name?: string;

}

/**
 * @schema TrustedAdvisorCheckRefreshStatus
 */
export interface TrustedAdvisorCheckRefreshStatus {
  /**
   * @schema TrustedAdvisorCheckRefreshStatus#checkId
   */
  readonly checkId: string;

  /**
   * @schema TrustedAdvisorCheckRefreshStatus#status
   */
  readonly status: string;

  /**
   * @schema TrustedAdvisorCheckRefreshStatus#millisUntilNextRefreshable
   */
  readonly millisUntilNextRefreshable: number;

}

/**
 * @schema TrustedAdvisorCheckResult
 */
export interface TrustedAdvisorCheckResult {
  /**
   * @schema TrustedAdvisorCheckResult#checkId
   */
  readonly checkId: string;

  /**
   * @schema TrustedAdvisorCheckResult#timestamp
   */
  readonly timestamp: string;

  /**
   * @schema TrustedAdvisorCheckResult#status
   */
  readonly status: string;

  /**
   * @schema TrustedAdvisorCheckResult#resourcesSummary
   */
  readonly resourcesSummary: TrustedAdvisorResourcesSummary;

  /**
   * @schema TrustedAdvisorCheckResult#categorySpecificSummary
   */
  readonly categorySpecificSummary: TrustedAdvisorCategorySpecificSummary;

  /**
   * @schema TrustedAdvisorCheckResult#flaggedResources
   */
  readonly flaggedResources: TrustedAdvisorResourceDetail[];

}

/**
 * @schema TrustedAdvisorCheckSummary
 */
export interface TrustedAdvisorCheckSummary {
  /**
   * @schema TrustedAdvisorCheckSummary#checkId
   */
  readonly checkId: string;

  /**
   * @schema TrustedAdvisorCheckSummary#timestamp
   */
  readonly timestamp: string;

  /**
   * @schema TrustedAdvisorCheckSummary#status
   */
  readonly status: string;

  /**
   * @schema TrustedAdvisorCheckSummary#hasFlaggedResources
   */
  readonly hasFlaggedResources?: boolean;

  /**
   * @schema TrustedAdvisorCheckSummary#resourcesSummary
   */
  readonly resourcesSummary: TrustedAdvisorResourcesSummary;

  /**
   * @schema TrustedAdvisorCheckSummary#categorySpecificSummary
   */
  readonly categorySpecificSummary: TrustedAdvisorCategorySpecificSummary;

}

/**
 * @schema TrustedAdvisorCheckDescription
 */
export interface TrustedAdvisorCheckDescription {
  /**
   * @schema TrustedAdvisorCheckDescription#id
   */
  readonly id: string;

  /**
   * @schema TrustedAdvisorCheckDescription#name
   */
  readonly name: string;

  /**
   * @schema TrustedAdvisorCheckDescription#description
   */
  readonly description: string;

  /**
   * @schema TrustedAdvisorCheckDescription#category
   */
  readonly category: string;

  /**
   * @schema TrustedAdvisorCheckDescription#metadata
   */
  readonly metadata: string[];

}

/**
 * @schema RecentCaseCommunications
 */
export interface RecentCaseCommunications {
  /**
   * @schema RecentCaseCommunications#communications
   */
  readonly communications?: Communication[];

  /**
   * @schema RecentCaseCommunications#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AttachmentDetails
 */
export interface AttachmentDetails {
  /**
   * @schema AttachmentDetails#attachmentId
   */
  readonly attachmentId?: string;

  /**
   * @schema AttachmentDetails#fileName
   */
  readonly fileName?: string;

}

/**
 * @schema Category
 */
export interface Category {
  /**
   * @schema Category#code
   */
  readonly code?: string;

  /**
   * @schema Category#name
   */
  readonly name?: string;

}

/**
 * @schema TrustedAdvisorResourcesSummary
 */
export interface TrustedAdvisorResourcesSummary {
  /**
   * @schema TrustedAdvisorResourcesSummary#resourcesProcessed
   */
  readonly resourcesProcessed: number;

  /**
   * @schema TrustedAdvisorResourcesSummary#resourcesFlagged
   */
  readonly resourcesFlagged: number;

  /**
   * @schema TrustedAdvisorResourcesSummary#resourcesIgnored
   */
  readonly resourcesIgnored: number;

  /**
   * @schema TrustedAdvisorResourcesSummary#resourcesSuppressed
   */
  readonly resourcesSuppressed: number;

}

/**
 * @schema TrustedAdvisorCategorySpecificSummary
 */
export interface TrustedAdvisorCategorySpecificSummary {
  /**
   * @schema TrustedAdvisorCategorySpecificSummary#costOptimizing
   */
  readonly costOptimizing?: TrustedAdvisorCostOptimizingSummary;

}

/**
 * @schema TrustedAdvisorResourceDetail
 */
export interface TrustedAdvisorResourceDetail {
  /**
   * @schema TrustedAdvisorResourceDetail#status
   */
  readonly status: string;

  /**
   * @schema TrustedAdvisorResourceDetail#region
   */
  readonly region?: string;

  /**
   * @schema TrustedAdvisorResourceDetail#resourceId
   */
  readonly resourceId: string;

  /**
   * @schema TrustedAdvisorResourceDetail#isSuppressed
   */
  readonly isSuppressed?: boolean;

  /**
   * @schema TrustedAdvisorResourceDetail#metadata
   */
  readonly metadata: string[];

}

/**
 * @schema TrustedAdvisorCostOptimizingSummary
 */
export interface TrustedAdvisorCostOptimizingSummary {
  /**
   * @schema TrustedAdvisorCostOptimizingSummary#estimatedMonthlySavings
   */
  readonly estimatedMonthlySavings: number;

  /**
   * @schema TrustedAdvisorCostOptimizingSummary#estimatedPercentMonthlySavings
   */
  readonly estimatedPercentMonthlySavings: number;

}
