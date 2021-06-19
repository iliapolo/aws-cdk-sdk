/**
 * @schema AccessAnalyzerApplyArchiveRuleRequest
 */
export interface AccessAnalyzerApplyArchiveRuleRequest {
  /**
   * @schema AccessAnalyzerApplyArchiveRuleRequest#analyzerArn
   */
  readonly analyzerArn: string;

  /**
   * @schema AccessAnalyzerApplyArchiveRuleRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema AccessAnalyzerApplyArchiveRuleRequest#ruleName
   */
  readonly ruleName: string;

}

/**
 * @schema AccessAnalyzerCreateAnalyzerRequest
 */
export interface AccessAnalyzerCreateAnalyzerRequest {
  /**
   * @schema AccessAnalyzerCreateAnalyzerRequest#analyzerName
   */
  readonly analyzerName: string;

  /**
   * @schema AccessAnalyzerCreateAnalyzerRequest#archiveRules
   */
  readonly archiveRules?: AccessAnalyzerInlineArchiveRule[];

  /**
   * @schema AccessAnalyzerCreateAnalyzerRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema AccessAnalyzerCreateAnalyzerRequest#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema AccessAnalyzerCreateAnalyzerRequest#type
   */
  readonly type: string;

}

/**
 * @schema AccessAnalyzerCreateAnalyzerResponse
 */
export interface AccessAnalyzerCreateAnalyzerResponse {
  /**
   * @schema AccessAnalyzerCreateAnalyzerResponse#arn
   */
  readonly arn?: string;

}

/**
 * @schema AccessAnalyzerCreateArchiveRuleRequest
 */
export interface AccessAnalyzerCreateArchiveRuleRequest {
  /**
   * @schema AccessAnalyzerCreateArchiveRuleRequest#analyzerName
   */
  readonly analyzerName: string;

  /**
   * @schema AccessAnalyzerCreateArchiveRuleRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema AccessAnalyzerCreateArchiveRuleRequest#filter
   */
  readonly filter: { [key: string]: AccessAnalyzerCriterion };

  /**
   * @schema AccessAnalyzerCreateArchiveRuleRequest#ruleName
   */
  readonly ruleName: string;

}

/**
 * @schema AccessAnalyzerDeleteAnalyzerRequest
 */
export interface AccessAnalyzerDeleteAnalyzerRequest {
  /**
   * @schema AccessAnalyzerDeleteAnalyzerRequest#analyzerName
   */
  readonly analyzerName: string;

  /**
   * @schema AccessAnalyzerDeleteAnalyzerRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema AccessAnalyzerDeleteArchiveRuleRequest
 */
export interface AccessAnalyzerDeleteArchiveRuleRequest {
  /**
   * @schema AccessAnalyzerDeleteArchiveRuleRequest#analyzerName
   */
  readonly analyzerName: string;

  /**
   * @schema AccessAnalyzerDeleteArchiveRuleRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema AccessAnalyzerDeleteArchiveRuleRequest#ruleName
   */
  readonly ruleName: string;

}

/**
 * @schema AccessAnalyzerGetAnalyzedResourceRequest
 */
export interface AccessAnalyzerGetAnalyzedResourceRequest {
  /**
   * @schema AccessAnalyzerGetAnalyzedResourceRequest#analyzerArn
   */
  readonly analyzerArn: string;

  /**
   * @schema AccessAnalyzerGetAnalyzedResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema AccessAnalyzerGetAnalyzedResourceResponse
 */
export interface AccessAnalyzerGetAnalyzedResourceResponse {
  /**
   * @schema AccessAnalyzerGetAnalyzedResourceResponse#resource
   */
  readonly resource?: AccessAnalyzerAnalyzedResource;

}

/**
 * @schema AccessAnalyzerGetAnalyzerRequest
 */
export interface AccessAnalyzerGetAnalyzerRequest {
  /**
   * @schema AccessAnalyzerGetAnalyzerRequest#analyzerName
   */
  readonly analyzerName: string;

}

/**
 * @schema AccessAnalyzerGetAnalyzerResponse
 */
export interface AccessAnalyzerGetAnalyzerResponse {
  /**
   * @schema AccessAnalyzerGetAnalyzerResponse#analyzer
   */
  readonly analyzer: AccessAnalyzerAnalyzerSummary;

}

/**
 * @schema AccessAnalyzerGetArchiveRuleRequest
 */
export interface AccessAnalyzerGetArchiveRuleRequest {
  /**
   * @schema AccessAnalyzerGetArchiveRuleRequest#analyzerName
   */
  readonly analyzerName: string;

  /**
   * @schema AccessAnalyzerGetArchiveRuleRequest#ruleName
   */
  readonly ruleName: string;

}

/**
 * @schema AccessAnalyzerGetArchiveRuleResponse
 */
export interface AccessAnalyzerGetArchiveRuleResponse {
  /**
   * @schema AccessAnalyzerGetArchiveRuleResponse#archiveRule
   */
  readonly archiveRule: AccessAnalyzerArchiveRuleSummary;

}

/**
 * @schema AccessAnalyzerGetFindingRequest
 */
export interface AccessAnalyzerGetFindingRequest {
  /**
   * @schema AccessAnalyzerGetFindingRequest#analyzerArn
   */
  readonly analyzerArn: string;

  /**
   * @schema AccessAnalyzerGetFindingRequest#id
   */
  readonly id: string;

}

/**
 * @schema AccessAnalyzerGetFindingResponse
 */
export interface AccessAnalyzerGetFindingResponse {
  /**
   * @schema AccessAnalyzerGetFindingResponse#finding
   */
  readonly finding?: AccessAnalyzerFinding;

}

/**
 * @schema AccessAnalyzerListAnalyzedResourcesRequest
 */
export interface AccessAnalyzerListAnalyzedResourcesRequest {
  /**
   * @schema AccessAnalyzerListAnalyzedResourcesRequest#analyzerArn
   */
  readonly analyzerArn: string;

  /**
   * @schema AccessAnalyzerListAnalyzedResourcesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema AccessAnalyzerListAnalyzedResourcesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AccessAnalyzerListAnalyzedResourcesRequest#resourceType
   */
  readonly resourceType?: string;

}

/**
 * @schema AccessAnalyzerListAnalyzedResourcesResponse
 */
export interface AccessAnalyzerListAnalyzedResourcesResponse {
  /**
   * @schema AccessAnalyzerListAnalyzedResourcesResponse#analyzedResources
   */
  readonly analyzedResources: AccessAnalyzerAnalyzedResourceSummary[];

  /**
   * @schema AccessAnalyzerListAnalyzedResourcesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AccessAnalyzerListAnalyzersRequest
 */
export interface AccessAnalyzerListAnalyzersRequest {
  /**
   * @schema AccessAnalyzerListAnalyzersRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema AccessAnalyzerListAnalyzersRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AccessAnalyzerListAnalyzersRequest#type
   */
  readonly type?: string;

}

/**
 * @schema AccessAnalyzerListAnalyzersResponse
 */
export interface AccessAnalyzerListAnalyzersResponse {
  /**
   * @schema AccessAnalyzerListAnalyzersResponse#analyzers
   */
  readonly analyzers: AccessAnalyzerAnalyzerSummary[];

  /**
   * @schema AccessAnalyzerListAnalyzersResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AccessAnalyzerListArchiveRulesRequest
 */
export interface AccessAnalyzerListArchiveRulesRequest {
  /**
   * @schema AccessAnalyzerListArchiveRulesRequest#analyzerName
   */
  readonly analyzerName: string;

  /**
   * @schema AccessAnalyzerListArchiveRulesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema AccessAnalyzerListArchiveRulesRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AccessAnalyzerListArchiveRulesResponse
 */
export interface AccessAnalyzerListArchiveRulesResponse {
  /**
   * @schema AccessAnalyzerListArchiveRulesResponse#archiveRules
   */
  readonly archiveRules: AccessAnalyzerArchiveRuleSummary[];

  /**
   * @schema AccessAnalyzerListArchiveRulesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AccessAnalyzerListFindingsRequest
 */
export interface AccessAnalyzerListFindingsRequest {
  /**
   * @schema AccessAnalyzerListFindingsRequest#analyzerArn
   */
  readonly analyzerArn: string;

  /**
   * @schema AccessAnalyzerListFindingsRequest#filter
   */
  readonly filter?: { [key: string]: AccessAnalyzerCriterion };

  /**
   * @schema AccessAnalyzerListFindingsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema AccessAnalyzerListFindingsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AccessAnalyzerListFindingsRequest#sort
   */
  readonly sort?: AccessAnalyzerSortCriteria;

}

/**
 * @schema AccessAnalyzerListFindingsResponse
 */
export interface AccessAnalyzerListFindingsResponse {
  /**
   * @schema AccessAnalyzerListFindingsResponse#findings
   */
  readonly findings: AccessAnalyzerFindingSummary[];

  /**
   * @schema AccessAnalyzerListFindingsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AccessAnalyzerListTagsForResourceRequest
 */
export interface AccessAnalyzerListTagsForResourceRequest {
  /**
   * @schema AccessAnalyzerListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema AccessAnalyzerListTagsForResourceResponse
 */
export interface AccessAnalyzerListTagsForResourceResponse {
  /**
   * @schema AccessAnalyzerListTagsForResourceResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema AccessAnalyzerStartResourceScanRequest
 */
export interface AccessAnalyzerStartResourceScanRequest {
  /**
   * @schema AccessAnalyzerStartResourceScanRequest#analyzerArn
   */
  readonly analyzerArn: string;

  /**
   * @schema AccessAnalyzerStartResourceScanRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema AccessAnalyzerTagResourceRequest
 */
export interface AccessAnalyzerTagResourceRequest {
  /**
   * @schema AccessAnalyzerTagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema AccessAnalyzerTagResourceRequest#tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema AccessAnalyzerTagResourceResponse
 */
export interface AccessAnalyzerTagResourceResponse {
}

/**
 * @schema AccessAnalyzerUntagResourceRequest
 */
export interface AccessAnalyzerUntagResourceRequest {
  /**
   * @schema AccessAnalyzerUntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema AccessAnalyzerUntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema AccessAnalyzerUntagResourceResponse
 */
export interface AccessAnalyzerUntagResourceResponse {
}

/**
 * @schema AccessAnalyzerUpdateArchiveRuleRequest
 */
export interface AccessAnalyzerUpdateArchiveRuleRequest {
  /**
   * @schema AccessAnalyzerUpdateArchiveRuleRequest#analyzerName
   */
  readonly analyzerName: string;

  /**
   * @schema AccessAnalyzerUpdateArchiveRuleRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema AccessAnalyzerUpdateArchiveRuleRequest#filter
   */
  readonly filter: { [key: string]: AccessAnalyzerCriterion };

  /**
   * @schema AccessAnalyzerUpdateArchiveRuleRequest#ruleName
   */
  readonly ruleName: string;

}

/**
 * @schema AccessAnalyzerUpdateFindingsRequest
 */
export interface AccessAnalyzerUpdateFindingsRequest {
  /**
   * @schema AccessAnalyzerUpdateFindingsRequest#analyzerArn
   */
  readonly analyzerArn: string;

  /**
   * @schema AccessAnalyzerUpdateFindingsRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema AccessAnalyzerUpdateFindingsRequest#ids
   */
  readonly ids?: string[];

  /**
   * @schema AccessAnalyzerUpdateFindingsRequest#resourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema AccessAnalyzerUpdateFindingsRequest#status
   */
  readonly status: string;

}

/**
 * @schema AccessAnalyzerInlineArchiveRule
 */
export interface AccessAnalyzerInlineArchiveRule {
  /**
   * @schema AccessAnalyzerInlineArchiveRule#filter
   */
  readonly filter: { [key: string]: AccessAnalyzerCriterion };

  /**
   * @schema AccessAnalyzerInlineArchiveRule#ruleName
   */
  readonly ruleName: string;

}

/**
 * @schema AccessAnalyzerCriterion
 */
export interface AccessAnalyzerCriterion {
  /**
   * @schema AccessAnalyzerCriterion#contains
   */
  readonly contains?: string[];

  /**
   * @schema AccessAnalyzerCriterion#eq
   */
  readonly eq?: string[];

  /**
   * @schema AccessAnalyzerCriterion#exists
   */
  readonly exists?: boolean;

  /**
   * @schema AccessAnalyzerCriterion#neq
   */
  readonly neq?: string[];

}

/**
 * @schema AccessAnalyzerAnalyzedResource
 */
export interface AccessAnalyzerAnalyzedResource {
  /**
   * @schema AccessAnalyzerAnalyzedResource#actions
   */
  readonly actions?: string[];

  /**
   * @schema AccessAnalyzerAnalyzedResource#analyzedAt
   */
  readonly analyzedAt: string;

  /**
   * @schema AccessAnalyzerAnalyzedResource#createdAt
   */
  readonly createdAt: string;

  /**
   * @schema AccessAnalyzerAnalyzedResource#error
   */
  readonly error?: string;

  /**
   * @schema AccessAnalyzerAnalyzedResource#isPublic
   */
  readonly isPublic: boolean;

  /**
   * @schema AccessAnalyzerAnalyzedResource#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema AccessAnalyzerAnalyzedResource#resourceOwnerAccount
   */
  readonly resourceOwnerAccount: string;

  /**
   * @schema AccessAnalyzerAnalyzedResource#resourceType
   */
  readonly resourceType: string;

  /**
   * @schema AccessAnalyzerAnalyzedResource#sharedVia
   */
  readonly sharedVia?: string[];

  /**
   * @schema AccessAnalyzerAnalyzedResource#status
   */
  readonly status?: string;

  /**
   * @schema AccessAnalyzerAnalyzedResource#updatedAt
   */
  readonly updatedAt: string;

}

/**
 * @schema AccessAnalyzerAnalyzerSummary
 */
export interface AccessAnalyzerAnalyzerSummary {
  /**
   * @schema AccessAnalyzerAnalyzerSummary#arn
   */
  readonly arn: string;

  /**
   * @schema AccessAnalyzerAnalyzerSummary#createdAt
   */
  readonly createdAt: string;

  /**
   * @schema AccessAnalyzerAnalyzerSummary#lastResourceAnalyzed
   */
  readonly lastResourceAnalyzed?: string;

  /**
   * @schema AccessAnalyzerAnalyzerSummary#lastResourceAnalyzedAt
   */
  readonly lastResourceAnalyzedAt?: string;

  /**
   * @schema AccessAnalyzerAnalyzerSummary#name
   */
  readonly name: string;

  /**
   * @schema AccessAnalyzerAnalyzerSummary#status
   */
  readonly status: string;

  /**
   * @schema AccessAnalyzerAnalyzerSummary#statusReason
   */
  readonly statusReason?: AccessAnalyzerStatusReason;

  /**
   * @schema AccessAnalyzerAnalyzerSummary#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema AccessAnalyzerAnalyzerSummary#type
   */
  readonly type: string;

}

/**
 * @schema AccessAnalyzerArchiveRuleSummary
 */
export interface AccessAnalyzerArchiveRuleSummary {
  /**
   * @schema AccessAnalyzerArchiveRuleSummary#createdAt
   */
  readonly createdAt: string;

  /**
   * @schema AccessAnalyzerArchiveRuleSummary#filter
   */
  readonly filter: { [key: string]: AccessAnalyzerCriterion };

  /**
   * @schema AccessAnalyzerArchiveRuleSummary#ruleName
   */
  readonly ruleName: string;

  /**
   * @schema AccessAnalyzerArchiveRuleSummary#updatedAt
   */
  readonly updatedAt: string;

}

/**
 * @schema AccessAnalyzerFinding
 */
export interface AccessAnalyzerFinding {
  /**
   * @schema AccessAnalyzerFinding#action
   */
  readonly action?: string[];

  /**
   * @schema AccessAnalyzerFinding#analyzedAt
   */
  readonly analyzedAt: string;

  /**
   * @schema AccessAnalyzerFinding#condition
   */
  readonly condition: { [key: string]: string };

  /**
   * @schema AccessAnalyzerFinding#createdAt
   */
  readonly createdAt: string;

  /**
   * @schema AccessAnalyzerFinding#error
   */
  readonly error?: string;

  /**
   * @schema AccessAnalyzerFinding#id
   */
  readonly id: string;

  /**
   * @schema AccessAnalyzerFinding#isPublic
   */
  readonly isPublic?: boolean;

  /**
   * @schema AccessAnalyzerFinding#principal
   */
  readonly principal?: { [key: string]: string };

  /**
   * @schema AccessAnalyzerFinding#resource
   */
  readonly resource?: string;

  /**
   * @schema AccessAnalyzerFinding#resourceOwnerAccount
   */
  readonly resourceOwnerAccount: string;

  /**
   * @schema AccessAnalyzerFinding#resourceType
   */
  readonly resourceType: string;

  /**
   * @schema AccessAnalyzerFinding#sources
   */
  readonly sources?: AccessAnalyzerFindingSource[];

  /**
   * @schema AccessAnalyzerFinding#status
   */
  readonly status: string;

  /**
   * @schema AccessAnalyzerFinding#updatedAt
   */
  readonly updatedAt: string;

}

/**
 * @schema AccessAnalyzerAnalyzedResourceSummary
 */
export interface AccessAnalyzerAnalyzedResourceSummary {
  /**
   * @schema AccessAnalyzerAnalyzedResourceSummary#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema AccessAnalyzerAnalyzedResourceSummary#resourceOwnerAccount
   */
  readonly resourceOwnerAccount: string;

  /**
   * @schema AccessAnalyzerAnalyzedResourceSummary#resourceType
   */
  readonly resourceType: string;

}

/**
 * @schema AccessAnalyzerSortCriteria
 */
export interface AccessAnalyzerSortCriteria {
  /**
   * @schema AccessAnalyzerSortCriteria#attributeName
   */
  readonly attributeName?: string;

  /**
   * @schema AccessAnalyzerSortCriteria#orderBy
   */
  readonly orderBy?: string;

}

/**
 * @schema AccessAnalyzerFindingSummary
 */
export interface AccessAnalyzerFindingSummary {
  /**
   * @schema AccessAnalyzerFindingSummary#action
   */
  readonly action?: string[];

  /**
   * @schema AccessAnalyzerFindingSummary#analyzedAt
   */
  readonly analyzedAt: string;

  /**
   * @schema AccessAnalyzerFindingSummary#condition
   */
  readonly condition: { [key: string]: string };

  /**
   * @schema AccessAnalyzerFindingSummary#createdAt
   */
  readonly createdAt: string;

  /**
   * @schema AccessAnalyzerFindingSummary#error
   */
  readonly error?: string;

  /**
   * @schema AccessAnalyzerFindingSummary#id
   */
  readonly id: string;

  /**
   * @schema AccessAnalyzerFindingSummary#isPublic
   */
  readonly isPublic?: boolean;

  /**
   * @schema AccessAnalyzerFindingSummary#principal
   */
  readonly principal?: { [key: string]: string };

  /**
   * @schema AccessAnalyzerFindingSummary#resource
   */
  readonly resource?: string;

  /**
   * @schema AccessAnalyzerFindingSummary#resourceOwnerAccount
   */
  readonly resourceOwnerAccount: string;

  /**
   * @schema AccessAnalyzerFindingSummary#resourceType
   */
  readonly resourceType: string;

  /**
   * @schema AccessAnalyzerFindingSummary#sources
   */
  readonly sources?: AccessAnalyzerFindingSource[];

  /**
   * @schema AccessAnalyzerFindingSummary#status
   */
  readonly status: string;

  /**
   * @schema AccessAnalyzerFindingSummary#updatedAt
   */
  readonly updatedAt: string;

}

/**
 * @schema AccessAnalyzerStatusReason
 */
export interface AccessAnalyzerStatusReason {
  /**
   * @schema AccessAnalyzerStatusReason#code
   */
  readonly code: string;

}

/**
 * @schema AccessAnalyzerFindingSource
 */
export interface AccessAnalyzerFindingSource {
  /**
   * @schema AccessAnalyzerFindingSource#detail
   */
  readonly detail?: AccessAnalyzerFindingSourceDetail;

  /**
   * @schema AccessAnalyzerFindingSource#type
   */
  readonly type: string;

}

/**
 * @schema AccessAnalyzerFindingSourceDetail
 */
export interface AccessAnalyzerFindingSourceDetail {
  /**
   * @schema AccessAnalyzerFindingSourceDetail#accessPointArn
   */
  readonly accessPointArn?: string;

}
