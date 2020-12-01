/**
 * @schema ApplyArchiveRuleRequest
 */
export interface ApplyArchiveRuleRequest {
  /**
   * @schema ApplyArchiveRuleRequest#analyzerArn
   */
  readonly analyzerArn: string;

  /**
   * @schema ApplyArchiveRuleRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema ApplyArchiveRuleRequest#ruleName
   */
  readonly ruleName: string;

}

/**
 * @schema CreateAnalyzerRequest
 */
export interface CreateAnalyzerRequest {
  /**
   * @schema CreateAnalyzerRequest#analyzerName
   */
  readonly analyzerName: string;

  /**
   * @schema CreateAnalyzerRequest#archiveRules
   */
  readonly archiveRules?: InlineArchiveRule[];

  /**
   * @schema CreateAnalyzerRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema CreateAnalyzerRequest#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema CreateAnalyzerRequest#type
   */
  readonly type: string;

}

/**
 * @schema CreateAnalyzerResponse
 */
export interface CreateAnalyzerResponse {
  /**
   * @schema CreateAnalyzerResponse#arn
   */
  readonly arn?: string;

}

/**
 * @schema CreateArchiveRuleRequest
 */
export interface CreateArchiveRuleRequest {
  /**
   * @schema CreateArchiveRuleRequest#analyzerName
   */
  readonly analyzerName: string;

  /**
   * @schema CreateArchiveRuleRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema CreateArchiveRuleRequest#filter
   */
  readonly filter: { [key: string]: Criterion };

  /**
   * @schema CreateArchiveRuleRequest#ruleName
   */
  readonly ruleName: string;

}

/**
 * @schema DeleteAnalyzerRequest
 */
export interface DeleteAnalyzerRequest {
  /**
   * @schema DeleteAnalyzerRequest#analyzerName
   */
  readonly analyzerName: string;

  /**
   * @schema DeleteAnalyzerRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema DeleteArchiveRuleRequest
 */
export interface DeleteArchiveRuleRequest {
  /**
   * @schema DeleteArchiveRuleRequest#analyzerName
   */
  readonly analyzerName: string;

  /**
   * @schema DeleteArchiveRuleRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema DeleteArchiveRuleRequest#ruleName
   */
  readonly ruleName: string;

}

/**
 * @schema GetAnalyzedResourceRequest
 */
export interface GetAnalyzedResourceRequest {
  /**
   * @schema GetAnalyzedResourceRequest#analyzerArn
   */
  readonly analyzerArn: string;

  /**
   * @schema GetAnalyzedResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema GetAnalyzedResourceResponse
 */
export interface GetAnalyzedResourceResponse {
  /**
   * @schema GetAnalyzedResourceResponse#resource
   */
  readonly resource?: AnalyzedResource;

}

/**
 * @schema GetAnalyzerRequest
 */
export interface GetAnalyzerRequest {
  /**
   * @schema GetAnalyzerRequest#analyzerName
   */
  readonly analyzerName: string;

}

/**
 * @schema GetAnalyzerResponse
 */
export interface GetAnalyzerResponse {
  /**
   * @schema GetAnalyzerResponse#analyzer
   */
  readonly analyzer: AnalyzerSummary;

}

/**
 * @schema GetArchiveRuleRequest
 */
export interface GetArchiveRuleRequest {
  /**
   * @schema GetArchiveRuleRequest#analyzerName
   */
  readonly analyzerName: string;

  /**
   * @schema GetArchiveRuleRequest#ruleName
   */
  readonly ruleName: string;

}

/**
 * @schema GetArchiveRuleResponse
 */
export interface GetArchiveRuleResponse {
  /**
   * @schema GetArchiveRuleResponse#archiveRule
   */
  readonly archiveRule: ArchiveRuleSummary;

}

/**
 * @schema GetFindingRequest
 */
export interface GetFindingRequest {
  /**
   * @schema GetFindingRequest#analyzerArn
   */
  readonly analyzerArn: string;

  /**
   * @schema GetFindingRequest#id
   */
  readonly id: string;

}

/**
 * @schema GetFindingResponse
 */
export interface GetFindingResponse {
  /**
   * @schema GetFindingResponse#finding
   */
  readonly finding?: Finding;

}

/**
 * @schema ListAnalyzedResourcesRequest
 */
export interface ListAnalyzedResourcesRequest {
  /**
   * @schema ListAnalyzedResourcesRequest#analyzerArn
   */
  readonly analyzerArn: string;

  /**
   * @schema ListAnalyzedResourcesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListAnalyzedResourcesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListAnalyzedResourcesRequest#resourceType
   */
  readonly resourceType?: string;

}

/**
 * @schema ListAnalyzedResourcesResponse
 */
export interface ListAnalyzedResourcesResponse {
  /**
   * @schema ListAnalyzedResourcesResponse#analyzedResources
   */
  readonly analyzedResources: AnalyzedResourceSummary[];

  /**
   * @schema ListAnalyzedResourcesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListAnalyzersRequest
 */
export interface ListAnalyzersRequest {
  /**
   * @schema ListAnalyzersRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListAnalyzersRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListAnalyzersRequest#type
   */
  readonly type?: string;

}

/**
 * @schema ListAnalyzersResponse
 */
export interface ListAnalyzersResponse {
  /**
   * @schema ListAnalyzersResponse#analyzers
   */
  readonly analyzers: AnalyzerSummary[];

  /**
   * @schema ListAnalyzersResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListArchiveRulesRequest
 */
export interface ListArchiveRulesRequest {
  /**
   * @schema ListArchiveRulesRequest#analyzerName
   */
  readonly analyzerName: string;

  /**
   * @schema ListArchiveRulesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListArchiveRulesRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListArchiveRulesResponse
 */
export interface ListArchiveRulesResponse {
  /**
   * @schema ListArchiveRulesResponse#archiveRules
   */
  readonly archiveRules: ArchiveRuleSummary[];

  /**
   * @schema ListArchiveRulesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListFindingsRequest
 */
export interface ListFindingsRequest {
  /**
   * @schema ListFindingsRequest#analyzerArn
   */
  readonly analyzerArn: string;

  /**
   * @schema ListFindingsRequest#filter
   */
  readonly filter?: { [key: string]: Criterion };

  /**
   * @schema ListFindingsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListFindingsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListFindingsRequest#sort
   */
  readonly sort?: SortCriteria;

}

/**
 * @schema ListFindingsResponse
 */
export interface ListFindingsResponse {
  /**
   * @schema ListFindingsResponse#findings
   */
  readonly findings: FindingSummary[];

  /**
   * @schema ListFindingsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * @schema ListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema ListTagsForResourceResponse
 */
export interface ListTagsForResourceResponse {
  /**
   * @schema ListTagsForResourceResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema StartResourceScanRequest
 */
export interface StartResourceScanRequest {
  /**
   * @schema StartResourceScanRequest#analyzerArn
   */
  readonly analyzerArn: string;

  /**
   * @schema StartResourceScanRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema TagResourceRequest#tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema TagResourceResponse
 */
export interface TagResourceResponse {
}

/**
 * @schema UntagResourceRequest
 */
export interface UntagResourceRequest {
  /**
   * @schema UntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema UntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UntagResourceResponse
 */
export interface UntagResourceResponse {
}

/**
 * @schema UpdateArchiveRuleRequest
 */
export interface UpdateArchiveRuleRequest {
  /**
   * @schema UpdateArchiveRuleRequest#analyzerName
   */
  readonly analyzerName: string;

  /**
   * @schema UpdateArchiveRuleRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema UpdateArchiveRuleRequest#filter
   */
  readonly filter: { [key: string]: Criterion };

  /**
   * @schema UpdateArchiveRuleRequest#ruleName
   */
  readonly ruleName: string;

}

/**
 * @schema UpdateFindingsRequest
 */
export interface UpdateFindingsRequest {
  /**
   * @schema UpdateFindingsRequest#analyzerArn
   */
  readonly analyzerArn: string;

  /**
   * @schema UpdateFindingsRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema UpdateFindingsRequest#ids
   */
  readonly ids?: string[];

  /**
   * @schema UpdateFindingsRequest#resourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema UpdateFindingsRequest#status
   */
  readonly status: string;

}

/**
 * @schema InlineArchiveRule
 */
export interface InlineArchiveRule {
  /**
   * @schema InlineArchiveRule#filter
   */
  readonly filter: { [key: string]: Criterion };

  /**
   * @schema InlineArchiveRule#ruleName
   */
  readonly ruleName: string;

}

/**
 * @schema Criterion
 */
export interface Criterion {
  /**
   * @schema Criterion#contains
   */
  readonly contains?: string[];

  /**
   * @schema Criterion#eq
   */
  readonly eq?: string[];

  /**
   * @schema Criterion#exists
   */
  readonly exists?: boolean;

  /**
   * @schema Criterion#neq
   */
  readonly neq?: string[];

}

/**
 * @schema AnalyzedResource
 */
export interface AnalyzedResource {
  /**
   * @schema AnalyzedResource#actions
   */
  readonly actions?: string[];

  /**
   * @schema AnalyzedResource#analyzedAt
   */
  readonly analyzedAt: string;

  /**
   * @schema AnalyzedResource#createdAt
   */
  readonly createdAt: string;

  /**
   * @schema AnalyzedResource#error
   */
  readonly error?: string;

  /**
   * @schema AnalyzedResource#isPublic
   */
  readonly isPublic: boolean;

  /**
   * @schema AnalyzedResource#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema AnalyzedResource#resourceOwnerAccount
   */
  readonly resourceOwnerAccount: string;

  /**
   * @schema AnalyzedResource#resourceType
   */
  readonly resourceType: string;

  /**
   * @schema AnalyzedResource#sharedVia
   */
  readonly sharedVia?: string[];

  /**
   * @schema AnalyzedResource#status
   */
  readonly status?: string;

  /**
   * @schema AnalyzedResource#updatedAt
   */
  readonly updatedAt: string;

}

/**
 * @schema AnalyzerSummary
 */
export interface AnalyzerSummary {
  /**
   * @schema AnalyzerSummary#arn
   */
  readonly arn: string;

  /**
   * @schema AnalyzerSummary#createdAt
   */
  readonly createdAt: string;

  /**
   * @schema AnalyzerSummary#lastResourceAnalyzed
   */
  readonly lastResourceAnalyzed?: string;

  /**
   * @schema AnalyzerSummary#lastResourceAnalyzedAt
   */
  readonly lastResourceAnalyzedAt?: string;

  /**
   * @schema AnalyzerSummary#name
   */
  readonly name: string;

  /**
   * @schema AnalyzerSummary#status
   */
  readonly status: string;

  /**
   * @schema AnalyzerSummary#statusReason
   */
  readonly statusReason?: StatusReason;

  /**
   * @schema AnalyzerSummary#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema AnalyzerSummary#type
   */
  readonly type: string;

}

/**
 * @schema ArchiveRuleSummary
 */
export interface ArchiveRuleSummary {
  /**
   * @schema ArchiveRuleSummary#createdAt
   */
  readonly createdAt: string;

  /**
   * @schema ArchiveRuleSummary#filter
   */
  readonly filter: { [key: string]: Criterion };

  /**
   * @schema ArchiveRuleSummary#ruleName
   */
  readonly ruleName: string;

  /**
   * @schema ArchiveRuleSummary#updatedAt
   */
  readonly updatedAt: string;

}

/**
 * @schema Finding
 */
export interface Finding {
  /**
   * @schema Finding#action
   */
  readonly action?: string[];

  /**
   * @schema Finding#analyzedAt
   */
  readonly analyzedAt: string;

  /**
   * @schema Finding#condition
   */
  readonly condition: { [key: string]: string };

  /**
   * @schema Finding#createdAt
   */
  readonly createdAt: string;

  /**
   * @schema Finding#error
   */
  readonly error?: string;

  /**
   * @schema Finding#id
   */
  readonly id: string;

  /**
   * @schema Finding#isPublic
   */
  readonly isPublic?: boolean;

  /**
   * @schema Finding#principal
   */
  readonly principal?: { [key: string]: string };

  /**
   * @schema Finding#resource
   */
  readonly resource?: string;

  /**
   * @schema Finding#resourceOwnerAccount
   */
  readonly resourceOwnerAccount: string;

  /**
   * @schema Finding#resourceType
   */
  readonly resourceType: string;

  /**
   * @schema Finding#sources
   */
  readonly sources?: FindingSource[];

  /**
   * @schema Finding#status
   */
  readonly status: string;

  /**
   * @schema Finding#updatedAt
   */
  readonly updatedAt: string;

}

/**
 * @schema AnalyzedResourceSummary
 */
export interface AnalyzedResourceSummary {
  /**
   * @schema AnalyzedResourceSummary#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema AnalyzedResourceSummary#resourceOwnerAccount
   */
  readonly resourceOwnerAccount: string;

  /**
   * @schema AnalyzedResourceSummary#resourceType
   */
  readonly resourceType: string;

}

/**
 * @schema SortCriteria
 */
export interface SortCriteria {
  /**
   * @schema SortCriteria#attributeName
   */
  readonly attributeName?: string;

  /**
   * @schema SortCriteria#orderBy
   */
  readonly orderBy?: string;

}

/**
 * @schema FindingSummary
 */
export interface FindingSummary {
  /**
   * @schema FindingSummary#action
   */
  readonly action?: string[];

  /**
   * @schema FindingSummary#analyzedAt
   */
  readonly analyzedAt: string;

  /**
   * @schema FindingSummary#condition
   */
  readonly condition: { [key: string]: string };

  /**
   * @schema FindingSummary#createdAt
   */
  readonly createdAt: string;

  /**
   * @schema FindingSummary#error
   */
  readonly error?: string;

  /**
   * @schema FindingSummary#id
   */
  readonly id: string;

  /**
   * @schema FindingSummary#isPublic
   */
  readonly isPublic?: boolean;

  /**
   * @schema FindingSummary#principal
   */
  readonly principal?: { [key: string]: string };

  /**
   * @schema FindingSummary#resource
   */
  readonly resource?: string;

  /**
   * @schema FindingSummary#resourceOwnerAccount
   */
  readonly resourceOwnerAccount: string;

  /**
   * @schema FindingSummary#resourceType
   */
  readonly resourceType: string;

  /**
   * @schema FindingSummary#sources
   */
  readonly sources?: FindingSource[];

  /**
   * @schema FindingSummary#status
   */
  readonly status: string;

  /**
   * @schema FindingSummary#updatedAt
   */
  readonly updatedAt: string;

}

/**
 * @schema StatusReason
 */
export interface StatusReason {
  /**
   * @schema StatusReason#code
   */
  readonly code: string;

}

/**
 * @schema FindingSource
 */
export interface FindingSource {
  /**
   * @schema FindingSource#detail
   */
  readonly detail?: FindingSourceDetail;

  /**
   * @schema FindingSource#type
   */
  readonly type: string;

}

/**
 * @schema FindingSourceDetail
 */
export interface FindingSourceDetail {
  /**
   * @schema FindingSourceDetail#accessPointArn
   */
  readonly accessPointArn?: string;

}
