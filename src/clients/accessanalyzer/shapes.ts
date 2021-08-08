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
 * Converts an object of type 'AccessAnalyzerApplyArchiveRuleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerApplyArchiveRuleRequest(obj: AccessAnalyzerApplyArchiveRuleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'analyzerArn': obj.analyzerArn,
    'clientToken': obj.clientToken,
    'ruleName': obj.ruleName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AccessAnalyzerCancelPolicyGenerationRequest
 */
export interface AccessAnalyzerCancelPolicyGenerationRequest {
  /**
   * @schema AccessAnalyzerCancelPolicyGenerationRequest#jobId
   */
  readonly jobId: string;

}

/**
 * Converts an object of type 'AccessAnalyzerCancelPolicyGenerationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerCancelPolicyGenerationRequest(obj: AccessAnalyzerCancelPolicyGenerationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AccessAnalyzerCancelPolicyGenerationResponse
 */
export interface AccessAnalyzerCancelPolicyGenerationResponse {
}

/**
 * Converts an object of type 'AccessAnalyzerCancelPolicyGenerationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerCancelPolicyGenerationResponse(obj: AccessAnalyzerCancelPolicyGenerationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AccessAnalyzerCreateAccessPreviewRequest
 */
export interface AccessAnalyzerCreateAccessPreviewRequest {
  /**
   * @schema AccessAnalyzerCreateAccessPreviewRequest#analyzerArn
   */
  readonly analyzerArn: string;

  /**
   * @schema AccessAnalyzerCreateAccessPreviewRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema AccessAnalyzerCreateAccessPreviewRequest#configurations
   */
  readonly configurations: { [key: string]: AccessAnalyzerConfiguration };

}

/**
 * Converts an object of type 'AccessAnalyzerCreateAccessPreviewRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerCreateAccessPreviewRequest(obj: AccessAnalyzerCreateAccessPreviewRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'analyzerArn': obj.analyzerArn,
    'clientToken': obj.clientToken,
    'configurations': ((obj.configurations) === undefined) ? undefined : (Object.entries(obj.configurations).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_AccessAnalyzerConfiguration(i[1]) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AccessAnalyzerCreateAccessPreviewResponse
 */
export interface AccessAnalyzerCreateAccessPreviewResponse {
  /**
   * @schema AccessAnalyzerCreateAccessPreviewResponse#id
   */
  readonly id: string;

}

/**
 * Converts an object of type 'AccessAnalyzerCreateAccessPreviewResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerCreateAccessPreviewResponse(obj: AccessAnalyzerCreateAccessPreviewResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AccessAnalyzerCreateAnalyzerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerCreateAnalyzerRequest(obj: AccessAnalyzerCreateAnalyzerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'analyzerName': obj.analyzerName,
    'archiveRules': obj.archiveRules?.map(y => toJson_AccessAnalyzerInlineArchiveRule(y)),
    'clientToken': obj.clientToken,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AccessAnalyzerCreateAnalyzerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerCreateAnalyzerResponse(obj: AccessAnalyzerCreateAnalyzerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AccessAnalyzerCreateArchiveRuleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerCreateArchiveRuleRequest(obj: AccessAnalyzerCreateArchiveRuleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'analyzerName': obj.analyzerName,
    'clientToken': obj.clientToken,
    'filter': ((obj.filter) === undefined) ? undefined : (Object.entries(obj.filter).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_AccessAnalyzerCriterion(i[1]) }), {})),
    'ruleName': obj.ruleName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AccessAnalyzerDeleteAnalyzerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerDeleteAnalyzerRequest(obj: AccessAnalyzerDeleteAnalyzerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'analyzerName': obj.analyzerName,
    'clientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AccessAnalyzerDeleteArchiveRuleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerDeleteArchiveRuleRequest(obj: AccessAnalyzerDeleteArchiveRuleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'analyzerName': obj.analyzerName,
    'clientToken': obj.clientToken,
    'ruleName': obj.ruleName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AccessAnalyzerGetAccessPreviewRequest
 */
export interface AccessAnalyzerGetAccessPreviewRequest {
  /**
   * @schema AccessAnalyzerGetAccessPreviewRequest#accessPreviewId
   */
  readonly accessPreviewId: string;

  /**
   * @schema AccessAnalyzerGetAccessPreviewRequest#analyzerArn
   */
  readonly analyzerArn: string;

}

/**
 * Converts an object of type 'AccessAnalyzerGetAccessPreviewRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerGetAccessPreviewRequest(obj: AccessAnalyzerGetAccessPreviewRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accessPreviewId': obj.accessPreviewId,
    'analyzerArn': obj.analyzerArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AccessAnalyzerGetAccessPreviewResponse
 */
export interface AccessAnalyzerGetAccessPreviewResponse {
  /**
   * @schema AccessAnalyzerGetAccessPreviewResponse#accessPreview
   */
  readonly accessPreview: AccessAnalyzerAccessPreview;

}

/**
 * Converts an object of type 'AccessAnalyzerGetAccessPreviewResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerGetAccessPreviewResponse(obj: AccessAnalyzerGetAccessPreviewResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accessPreview': toJson_AccessAnalyzerAccessPreview(obj.accessPreview),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AccessAnalyzerGetAnalyzedResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerGetAnalyzedResourceRequest(obj: AccessAnalyzerGetAnalyzedResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'analyzerArn': obj.analyzerArn,
    'resourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AccessAnalyzerGetAnalyzedResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerGetAnalyzedResourceResponse(obj: AccessAnalyzerGetAnalyzedResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resource': toJson_AccessAnalyzerAnalyzedResource(obj.resource),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AccessAnalyzerGetAnalyzerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerGetAnalyzerRequest(obj: AccessAnalyzerGetAnalyzerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'analyzerName': obj.analyzerName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AccessAnalyzerGetAnalyzerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerGetAnalyzerResponse(obj: AccessAnalyzerGetAnalyzerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'analyzer': toJson_AccessAnalyzerAnalyzerSummary(obj.analyzer),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AccessAnalyzerGetArchiveRuleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerGetArchiveRuleRequest(obj: AccessAnalyzerGetArchiveRuleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'analyzerName': obj.analyzerName,
    'ruleName': obj.ruleName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AccessAnalyzerGetArchiveRuleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerGetArchiveRuleResponse(obj: AccessAnalyzerGetArchiveRuleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'archiveRule': toJson_AccessAnalyzerArchiveRuleSummary(obj.archiveRule),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AccessAnalyzerGetFindingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerGetFindingRequest(obj: AccessAnalyzerGetFindingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'analyzerArn': obj.analyzerArn,
    'id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AccessAnalyzerGetFindingResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerGetFindingResponse(obj: AccessAnalyzerGetFindingResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'finding': toJson_AccessAnalyzerFinding(obj.finding),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AccessAnalyzerGetGeneratedPolicyRequest
 */
export interface AccessAnalyzerGetGeneratedPolicyRequest {
  /**
   * @schema AccessAnalyzerGetGeneratedPolicyRequest#includeResourcePlaceholders
   */
  readonly includeResourcePlaceholders?: boolean;

  /**
   * @schema AccessAnalyzerGetGeneratedPolicyRequest#includeServiceLevelTemplate
   */
  readonly includeServiceLevelTemplate?: boolean;

  /**
   * @schema AccessAnalyzerGetGeneratedPolicyRequest#jobId
   */
  readonly jobId: string;

}

/**
 * Converts an object of type 'AccessAnalyzerGetGeneratedPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerGetGeneratedPolicyRequest(obj: AccessAnalyzerGetGeneratedPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'includeResourcePlaceholders': obj.includeResourcePlaceholders,
    'includeServiceLevelTemplate': obj.includeServiceLevelTemplate,
    'jobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AccessAnalyzerGetGeneratedPolicyResponse
 */
export interface AccessAnalyzerGetGeneratedPolicyResponse {
  /**
   * @schema AccessAnalyzerGetGeneratedPolicyResponse#generatedPolicyResult
   */
  readonly generatedPolicyResult: AccessAnalyzerGeneratedPolicyResult;

  /**
   * @schema AccessAnalyzerGetGeneratedPolicyResponse#jobDetails
   */
  readonly jobDetails: AccessAnalyzerJobDetails;

}

/**
 * Converts an object of type 'AccessAnalyzerGetGeneratedPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerGetGeneratedPolicyResponse(obj: AccessAnalyzerGetGeneratedPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'generatedPolicyResult': toJson_AccessAnalyzerGeneratedPolicyResult(obj.generatedPolicyResult),
    'jobDetails': toJson_AccessAnalyzerJobDetails(obj.jobDetails),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AccessAnalyzerListAccessPreviewFindingsRequest
 */
export interface AccessAnalyzerListAccessPreviewFindingsRequest {
  /**
   * @schema AccessAnalyzerListAccessPreviewFindingsRequest#accessPreviewId
   */
  readonly accessPreviewId: string;

  /**
   * @schema AccessAnalyzerListAccessPreviewFindingsRequest#analyzerArn
   */
  readonly analyzerArn: string;

  /**
   * @schema AccessAnalyzerListAccessPreviewFindingsRequest#filter
   */
  readonly filter?: { [key: string]: AccessAnalyzerCriterion };

  /**
   * @schema AccessAnalyzerListAccessPreviewFindingsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema AccessAnalyzerListAccessPreviewFindingsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AccessAnalyzerListAccessPreviewFindingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerListAccessPreviewFindingsRequest(obj: AccessAnalyzerListAccessPreviewFindingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accessPreviewId': obj.accessPreviewId,
    'analyzerArn': obj.analyzerArn,
    'filter': ((obj.filter) === undefined) ? undefined : (Object.entries(obj.filter).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_AccessAnalyzerCriterion(i[1]) }), {})),
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AccessAnalyzerListAccessPreviewFindingsResponse
 */
export interface AccessAnalyzerListAccessPreviewFindingsResponse {
  /**
   * @schema AccessAnalyzerListAccessPreviewFindingsResponse#findings
   */
  readonly findings: AccessAnalyzerAccessPreviewFinding[];

  /**
   * @schema AccessAnalyzerListAccessPreviewFindingsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AccessAnalyzerListAccessPreviewFindingsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerListAccessPreviewFindingsResponse(obj: AccessAnalyzerListAccessPreviewFindingsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'findings': obj.findings?.map(y => toJson_AccessAnalyzerAccessPreviewFinding(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AccessAnalyzerListAccessPreviewsRequest
 */
export interface AccessAnalyzerListAccessPreviewsRequest {
  /**
   * @schema AccessAnalyzerListAccessPreviewsRequest#analyzerArn
   */
  readonly analyzerArn: string;

  /**
   * @schema AccessAnalyzerListAccessPreviewsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema AccessAnalyzerListAccessPreviewsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AccessAnalyzerListAccessPreviewsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerListAccessPreviewsRequest(obj: AccessAnalyzerListAccessPreviewsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'analyzerArn': obj.analyzerArn,
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AccessAnalyzerListAccessPreviewsResponse
 */
export interface AccessAnalyzerListAccessPreviewsResponse {
  /**
   * @schema AccessAnalyzerListAccessPreviewsResponse#accessPreviews
   */
  readonly accessPreviews: AccessAnalyzerAccessPreviewSummary[];

  /**
   * @schema AccessAnalyzerListAccessPreviewsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AccessAnalyzerListAccessPreviewsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerListAccessPreviewsResponse(obj: AccessAnalyzerListAccessPreviewsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accessPreviews': obj.accessPreviews?.map(y => toJson_AccessAnalyzerAccessPreviewSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AccessAnalyzerListAnalyzedResourcesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerListAnalyzedResourcesRequest(obj: AccessAnalyzerListAnalyzedResourcesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'analyzerArn': obj.analyzerArn,
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
    'resourceType': obj.resourceType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AccessAnalyzerListAnalyzedResourcesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerListAnalyzedResourcesResponse(obj: AccessAnalyzerListAnalyzedResourcesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'analyzedResources': obj.analyzedResources?.map(y => toJson_AccessAnalyzerAnalyzedResourceSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AccessAnalyzerListAnalyzersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerListAnalyzersRequest(obj: AccessAnalyzerListAnalyzersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
    'type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AccessAnalyzerListAnalyzersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerListAnalyzersResponse(obj: AccessAnalyzerListAnalyzersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'analyzers': obj.analyzers?.map(y => toJson_AccessAnalyzerAnalyzerSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AccessAnalyzerListArchiveRulesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerListArchiveRulesRequest(obj: AccessAnalyzerListArchiveRulesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'analyzerName': obj.analyzerName,
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AccessAnalyzerListArchiveRulesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerListArchiveRulesResponse(obj: AccessAnalyzerListArchiveRulesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'archiveRules': obj.archiveRules?.map(y => toJson_AccessAnalyzerArchiveRuleSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AccessAnalyzerListFindingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerListFindingsRequest(obj: AccessAnalyzerListFindingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'analyzerArn': obj.analyzerArn,
    'filter': ((obj.filter) === undefined) ? undefined : (Object.entries(obj.filter).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_AccessAnalyzerCriterion(i[1]) }), {})),
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
    'sort': toJson_AccessAnalyzerSortCriteria(obj.sort),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AccessAnalyzerListFindingsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerListFindingsResponse(obj: AccessAnalyzerListFindingsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'findings': obj.findings?.map(y => toJson_AccessAnalyzerFindingSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AccessAnalyzerListPolicyGenerationsRequest
 */
export interface AccessAnalyzerListPolicyGenerationsRequest {
  /**
   * @schema AccessAnalyzerListPolicyGenerationsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema AccessAnalyzerListPolicyGenerationsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AccessAnalyzerListPolicyGenerationsRequest#principalArn
   */
  readonly principalArn?: string;

}

/**
 * Converts an object of type 'AccessAnalyzerListPolicyGenerationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerListPolicyGenerationsRequest(obj: AccessAnalyzerListPolicyGenerationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
    'principalArn': obj.principalArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AccessAnalyzerListPolicyGenerationsResponse
 */
export interface AccessAnalyzerListPolicyGenerationsResponse {
  /**
   * @schema AccessAnalyzerListPolicyGenerationsResponse#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AccessAnalyzerListPolicyGenerationsResponse#policyGenerations
   */
  readonly policyGenerations: AccessAnalyzerPolicyGeneration[];

}

/**
 * Converts an object of type 'AccessAnalyzerListPolicyGenerationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerListPolicyGenerationsResponse(obj: AccessAnalyzerListPolicyGenerationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'policyGenerations': obj.policyGenerations?.map(y => toJson_AccessAnalyzerPolicyGeneration(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AccessAnalyzerListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerListTagsForResourceRequest(obj: AccessAnalyzerListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AccessAnalyzerListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerListTagsForResourceResponse(obj: AccessAnalyzerListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AccessAnalyzerStartPolicyGenerationRequest
 */
export interface AccessAnalyzerStartPolicyGenerationRequest {
  /**
   * @schema AccessAnalyzerStartPolicyGenerationRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema AccessAnalyzerStartPolicyGenerationRequest#cloudTrailDetails
   */
  readonly cloudTrailDetails?: AccessAnalyzerCloudTrailDetails;

  /**
   * @schema AccessAnalyzerStartPolicyGenerationRequest#policyGenerationDetails
   */
  readonly policyGenerationDetails: AccessAnalyzerPolicyGenerationDetails;

}

/**
 * Converts an object of type 'AccessAnalyzerStartPolicyGenerationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerStartPolicyGenerationRequest(obj: AccessAnalyzerStartPolicyGenerationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientToken': obj.clientToken,
    'cloudTrailDetails': toJson_AccessAnalyzerCloudTrailDetails(obj.cloudTrailDetails),
    'policyGenerationDetails': toJson_AccessAnalyzerPolicyGenerationDetails(obj.policyGenerationDetails),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AccessAnalyzerStartPolicyGenerationResponse
 */
export interface AccessAnalyzerStartPolicyGenerationResponse {
  /**
   * @schema AccessAnalyzerStartPolicyGenerationResponse#jobId
   */
  readonly jobId: string;

}

/**
 * Converts an object of type 'AccessAnalyzerStartPolicyGenerationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerStartPolicyGenerationResponse(obj: AccessAnalyzerStartPolicyGenerationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AccessAnalyzerStartResourceScanRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerStartResourceScanRequest(obj: AccessAnalyzerStartResourceScanRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'analyzerArn': obj.analyzerArn,
    'resourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AccessAnalyzerTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerTagResourceRequest(obj: AccessAnalyzerTagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema AccessAnalyzerTagResourceResponse
 */
export interface AccessAnalyzerTagResourceResponse {
}

/**
 * Converts an object of type 'AccessAnalyzerTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerTagResourceResponse(obj: AccessAnalyzerTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AccessAnalyzerUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerUntagResourceRequest(obj: AccessAnalyzerUntagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema AccessAnalyzerUntagResourceResponse
 */
export interface AccessAnalyzerUntagResourceResponse {
}

/**
 * Converts an object of type 'AccessAnalyzerUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerUntagResourceResponse(obj: AccessAnalyzerUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AccessAnalyzerUpdateArchiveRuleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerUpdateArchiveRuleRequest(obj: AccessAnalyzerUpdateArchiveRuleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'analyzerName': obj.analyzerName,
    'clientToken': obj.clientToken,
    'filter': ((obj.filter) === undefined) ? undefined : (Object.entries(obj.filter).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_AccessAnalyzerCriterion(i[1]) }), {})),
    'ruleName': obj.ruleName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AccessAnalyzerUpdateFindingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerUpdateFindingsRequest(obj: AccessAnalyzerUpdateFindingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'analyzerArn': obj.analyzerArn,
    'clientToken': obj.clientToken,
    'ids': obj.ids?.map(y => y),
    'resourceArn': obj.resourceArn,
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AccessAnalyzerValidatePolicyRequest
 */
export interface AccessAnalyzerValidatePolicyRequest {
  /**
   * @schema AccessAnalyzerValidatePolicyRequest#locale
   */
  readonly locale?: string;

  /**
   * @schema AccessAnalyzerValidatePolicyRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema AccessAnalyzerValidatePolicyRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AccessAnalyzerValidatePolicyRequest#policyDocument
   */
  readonly policyDocument: string;

  /**
   * @schema AccessAnalyzerValidatePolicyRequest#policyType
   */
  readonly policyType: string;

}

/**
 * Converts an object of type 'AccessAnalyzerValidatePolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerValidatePolicyRequest(obj: AccessAnalyzerValidatePolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'locale': obj.locale,
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
    'policyDocument': obj.policyDocument,
    'policyType': obj.policyType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AccessAnalyzerValidatePolicyResponse
 */
export interface AccessAnalyzerValidatePolicyResponse {
  /**
   * @schema AccessAnalyzerValidatePolicyResponse#findings
   */
  readonly findings: AccessAnalyzerValidatePolicyFinding[];

  /**
   * @schema AccessAnalyzerValidatePolicyResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AccessAnalyzerValidatePolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerValidatePolicyResponse(obj: AccessAnalyzerValidatePolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'findings': obj.findings?.map(y => toJson_AccessAnalyzerValidatePolicyFinding(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AccessAnalyzerConfiguration
 */
export interface AccessAnalyzerConfiguration {
  /**
   * @schema AccessAnalyzerConfiguration#iamRole
   */
  readonly iamRole?: AccessAnalyzerIamRoleConfiguration;

  /**
   * @schema AccessAnalyzerConfiguration#kmsKey
   */
  readonly kmsKey?: AccessAnalyzerKmsKeyConfiguration;

  /**
   * @schema AccessAnalyzerConfiguration#s3Bucket
   */
  readonly s3Bucket?: AccessAnalyzerS3BucketConfiguration;

  /**
   * @schema AccessAnalyzerConfiguration#secretsManagerSecret
   */
  readonly secretsManagerSecret?: AccessAnalyzerSecretsManagerSecretConfiguration;

  /**
   * @schema AccessAnalyzerConfiguration#sqsQueue
   */
  readonly sqsQueue?: AccessAnalyzerSqsQueueConfiguration;

}

/**
 * Converts an object of type 'AccessAnalyzerConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerConfiguration(obj: AccessAnalyzerConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'iamRole': toJson_AccessAnalyzerIamRoleConfiguration(obj.iamRole),
    'kmsKey': toJson_AccessAnalyzerKmsKeyConfiguration(obj.kmsKey),
    's3Bucket': toJson_AccessAnalyzerS3BucketConfiguration(obj.s3Bucket),
    'secretsManagerSecret': toJson_AccessAnalyzerSecretsManagerSecretConfiguration(obj.secretsManagerSecret),
    'sqsQueue': toJson_AccessAnalyzerSqsQueueConfiguration(obj.sqsQueue),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AccessAnalyzerInlineArchiveRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerInlineArchiveRule(obj: AccessAnalyzerInlineArchiveRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'filter': ((obj.filter) === undefined) ? undefined : (Object.entries(obj.filter).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_AccessAnalyzerCriterion(i[1]) }), {})),
    'ruleName': obj.ruleName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AccessAnalyzerCriterion' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerCriterion(obj: AccessAnalyzerCriterion | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'contains': obj.contains?.map(y => y),
    'eq': obj.eq?.map(y => y),
    'exists': obj.exists,
    'neq': obj.neq?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AccessAnalyzerAccessPreview
 */
export interface AccessAnalyzerAccessPreview {
  /**
   * @schema AccessAnalyzerAccessPreview#analyzerArn
   */
  readonly analyzerArn: string;

  /**
   * @schema AccessAnalyzerAccessPreview#configurations
   */
  readonly configurations: { [key: string]: AccessAnalyzerConfiguration };

  /**
   * @schema AccessAnalyzerAccessPreview#createdAt
   */
  readonly createdAt: string;

  /**
   * @schema AccessAnalyzerAccessPreview#id
   */
  readonly id: string;

  /**
   * @schema AccessAnalyzerAccessPreview#status
   */
  readonly status: string;

  /**
   * @schema AccessAnalyzerAccessPreview#statusReason
   */
  readonly statusReason?: AccessAnalyzerAccessPreviewStatusReason;

}

/**
 * Converts an object of type 'AccessAnalyzerAccessPreview' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerAccessPreview(obj: AccessAnalyzerAccessPreview | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'analyzerArn': obj.analyzerArn,
    'configurations': ((obj.configurations) === undefined) ? undefined : (Object.entries(obj.configurations).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_AccessAnalyzerConfiguration(i[1]) }), {})),
    'createdAt': obj.createdAt,
    'id': obj.id,
    'status': obj.status,
    'statusReason': toJson_AccessAnalyzerAccessPreviewStatusReason(obj.statusReason),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AccessAnalyzerAnalyzedResource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerAnalyzedResource(obj: AccessAnalyzerAnalyzedResource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'actions': obj.actions?.map(y => y),
    'analyzedAt': obj.analyzedAt,
    'createdAt': obj.createdAt,
    'error': obj.error,
    'isPublic': obj.isPublic,
    'resourceArn': obj.resourceArn,
    'resourceOwnerAccount': obj.resourceOwnerAccount,
    'resourceType': obj.resourceType,
    'sharedVia': obj.sharedVia?.map(y => y),
    'status': obj.status,
    'updatedAt': obj.updatedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AccessAnalyzerAnalyzerSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerAnalyzerSummary(obj: AccessAnalyzerAnalyzerSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'createdAt': obj.createdAt,
    'lastResourceAnalyzed': obj.lastResourceAnalyzed,
    'lastResourceAnalyzedAt': obj.lastResourceAnalyzedAt,
    'name': obj.name,
    'status': obj.status,
    'statusReason': toJson_AccessAnalyzerStatusReason(obj.statusReason),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AccessAnalyzerArchiveRuleSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerArchiveRuleSummary(obj: AccessAnalyzerArchiveRuleSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'createdAt': obj.createdAt,
    'filter': ((obj.filter) === undefined) ? undefined : (Object.entries(obj.filter).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_AccessAnalyzerCriterion(i[1]) }), {})),
    'ruleName': obj.ruleName,
    'updatedAt': obj.updatedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AccessAnalyzerFinding' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerFinding(obj: AccessAnalyzerFinding | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'action': obj.action?.map(y => y),
    'analyzedAt': obj.analyzedAt,
    'condition': ((obj.condition) === undefined) ? undefined : (Object.entries(obj.condition).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'createdAt': obj.createdAt,
    'error': obj.error,
    'id': obj.id,
    'isPublic': obj.isPublic,
    'principal': ((obj.principal) === undefined) ? undefined : (Object.entries(obj.principal).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'resource': obj.resource,
    'resourceOwnerAccount': obj.resourceOwnerAccount,
    'resourceType': obj.resourceType,
    'sources': obj.sources?.map(y => toJson_AccessAnalyzerFindingSource(y)),
    'status': obj.status,
    'updatedAt': obj.updatedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AccessAnalyzerGeneratedPolicyResult
 */
export interface AccessAnalyzerGeneratedPolicyResult {
  /**
   * @schema AccessAnalyzerGeneratedPolicyResult#generatedPolicies
   */
  readonly generatedPolicies?: AccessAnalyzerGeneratedPolicy[];

  /**
   * @schema AccessAnalyzerGeneratedPolicyResult#properties
   */
  readonly properties: AccessAnalyzerGeneratedPolicyProperties;

}

/**
 * Converts an object of type 'AccessAnalyzerGeneratedPolicyResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerGeneratedPolicyResult(obj: AccessAnalyzerGeneratedPolicyResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'generatedPolicies': obj.generatedPolicies?.map(y => toJson_AccessAnalyzerGeneratedPolicy(y)),
    'properties': toJson_AccessAnalyzerGeneratedPolicyProperties(obj.properties),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AccessAnalyzerJobDetails
 */
export interface AccessAnalyzerJobDetails {
  /**
   * @schema AccessAnalyzerJobDetails#completedOn
   */
  readonly completedOn?: string;

  /**
   * @schema AccessAnalyzerJobDetails#jobError
   */
  readonly jobError?: AccessAnalyzerJobError;

  /**
   * @schema AccessAnalyzerJobDetails#jobId
   */
  readonly jobId: string;

  /**
   * @schema AccessAnalyzerJobDetails#startedOn
   */
  readonly startedOn: string;

  /**
   * @schema AccessAnalyzerJobDetails#status
   */
  readonly status: string;

}

/**
 * Converts an object of type 'AccessAnalyzerJobDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerJobDetails(obj: AccessAnalyzerJobDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'completedOn': obj.completedOn,
    'jobError': toJson_AccessAnalyzerJobError(obj.jobError),
    'jobId': obj.jobId,
    'startedOn': obj.startedOn,
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AccessAnalyzerAccessPreviewFinding
 */
export interface AccessAnalyzerAccessPreviewFinding {
  /**
   * @schema AccessAnalyzerAccessPreviewFinding#action
   */
  readonly action?: string[];

  /**
   * @schema AccessAnalyzerAccessPreviewFinding#changeType
   */
  readonly changeType: string;

  /**
   * @schema AccessAnalyzerAccessPreviewFinding#condition
   */
  readonly condition?: { [key: string]: string };

  /**
   * @schema AccessAnalyzerAccessPreviewFinding#createdAt
   */
  readonly createdAt: string;

  /**
   * @schema AccessAnalyzerAccessPreviewFinding#error
   */
  readonly error?: string;

  /**
   * @schema AccessAnalyzerAccessPreviewFinding#existingFindingId
   */
  readonly existingFindingId?: string;

  /**
   * @schema AccessAnalyzerAccessPreviewFinding#existingFindingStatus
   */
  readonly existingFindingStatus?: string;

  /**
   * @schema AccessAnalyzerAccessPreviewFinding#id
   */
  readonly id: string;

  /**
   * @schema AccessAnalyzerAccessPreviewFinding#isPublic
   */
  readonly isPublic?: boolean;

  /**
   * @schema AccessAnalyzerAccessPreviewFinding#principal
   */
  readonly principal?: { [key: string]: string };

  /**
   * @schema AccessAnalyzerAccessPreviewFinding#resource
   */
  readonly resource?: string;

  /**
   * @schema AccessAnalyzerAccessPreviewFinding#resourceOwnerAccount
   */
  readonly resourceOwnerAccount: string;

  /**
   * @schema AccessAnalyzerAccessPreviewFinding#resourceType
   */
  readonly resourceType: string;

  /**
   * @schema AccessAnalyzerAccessPreviewFinding#sources
   */
  readonly sources?: AccessAnalyzerFindingSource[];

  /**
   * @schema AccessAnalyzerAccessPreviewFinding#status
   */
  readonly status: string;

}

/**
 * Converts an object of type 'AccessAnalyzerAccessPreviewFinding' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerAccessPreviewFinding(obj: AccessAnalyzerAccessPreviewFinding | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'action': obj.action?.map(y => y),
    'changeType': obj.changeType,
    'condition': ((obj.condition) === undefined) ? undefined : (Object.entries(obj.condition).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'createdAt': obj.createdAt,
    'error': obj.error,
    'existingFindingId': obj.existingFindingId,
    'existingFindingStatus': obj.existingFindingStatus,
    'id': obj.id,
    'isPublic': obj.isPublic,
    'principal': ((obj.principal) === undefined) ? undefined : (Object.entries(obj.principal).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'resource': obj.resource,
    'resourceOwnerAccount': obj.resourceOwnerAccount,
    'resourceType': obj.resourceType,
    'sources': obj.sources?.map(y => toJson_AccessAnalyzerFindingSource(y)),
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AccessAnalyzerAccessPreviewSummary
 */
export interface AccessAnalyzerAccessPreviewSummary {
  /**
   * @schema AccessAnalyzerAccessPreviewSummary#analyzerArn
   */
  readonly analyzerArn: string;

  /**
   * @schema AccessAnalyzerAccessPreviewSummary#createdAt
   */
  readonly createdAt: string;

  /**
   * @schema AccessAnalyzerAccessPreviewSummary#id
   */
  readonly id: string;

  /**
   * @schema AccessAnalyzerAccessPreviewSummary#status
   */
  readonly status: string;

  /**
   * @schema AccessAnalyzerAccessPreviewSummary#statusReason
   */
  readonly statusReason?: AccessAnalyzerAccessPreviewStatusReason;

}

/**
 * Converts an object of type 'AccessAnalyzerAccessPreviewSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerAccessPreviewSummary(obj: AccessAnalyzerAccessPreviewSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'analyzerArn': obj.analyzerArn,
    'createdAt': obj.createdAt,
    'id': obj.id,
    'status': obj.status,
    'statusReason': toJson_AccessAnalyzerAccessPreviewStatusReason(obj.statusReason),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AccessAnalyzerAnalyzedResourceSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerAnalyzedResourceSummary(obj: AccessAnalyzerAnalyzedResourceSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
    'resourceOwnerAccount': obj.resourceOwnerAccount,
    'resourceType': obj.resourceType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AccessAnalyzerSortCriteria' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerSortCriteria(obj: AccessAnalyzerSortCriteria | undefined): Record<string, any> | undefined {
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
 * Converts an object of type 'AccessAnalyzerFindingSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerFindingSummary(obj: AccessAnalyzerFindingSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'action': obj.action?.map(y => y),
    'analyzedAt': obj.analyzedAt,
    'condition': ((obj.condition) === undefined) ? undefined : (Object.entries(obj.condition).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'createdAt': obj.createdAt,
    'error': obj.error,
    'id': obj.id,
    'isPublic': obj.isPublic,
    'principal': ((obj.principal) === undefined) ? undefined : (Object.entries(obj.principal).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'resource': obj.resource,
    'resourceOwnerAccount': obj.resourceOwnerAccount,
    'resourceType': obj.resourceType,
    'sources': obj.sources?.map(y => toJson_AccessAnalyzerFindingSource(y)),
    'status': obj.status,
    'updatedAt': obj.updatedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AccessAnalyzerPolicyGeneration
 */
export interface AccessAnalyzerPolicyGeneration {
  /**
   * @schema AccessAnalyzerPolicyGeneration#completedOn
   */
  readonly completedOn?: string;

  /**
   * @schema AccessAnalyzerPolicyGeneration#jobId
   */
  readonly jobId: string;

  /**
   * @schema AccessAnalyzerPolicyGeneration#principalArn
   */
  readonly principalArn: string;

  /**
   * @schema AccessAnalyzerPolicyGeneration#startedOn
   */
  readonly startedOn: string;

  /**
   * @schema AccessAnalyzerPolicyGeneration#status
   */
  readonly status: string;

}

/**
 * Converts an object of type 'AccessAnalyzerPolicyGeneration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerPolicyGeneration(obj: AccessAnalyzerPolicyGeneration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'completedOn': obj.completedOn,
    'jobId': obj.jobId,
    'principalArn': obj.principalArn,
    'startedOn': obj.startedOn,
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AccessAnalyzerCloudTrailDetails
 */
export interface AccessAnalyzerCloudTrailDetails {
  /**
   * @schema AccessAnalyzerCloudTrailDetails#accessRole
   */
  readonly accessRole: string;

  /**
   * @schema AccessAnalyzerCloudTrailDetails#endTime
   */
  readonly endTime?: string;

  /**
   * @schema AccessAnalyzerCloudTrailDetails#startTime
   */
  readonly startTime: string;

  /**
   * @schema AccessAnalyzerCloudTrailDetails#trails
   */
  readonly trails: AccessAnalyzerTrail[];

}

/**
 * Converts an object of type 'AccessAnalyzerCloudTrailDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerCloudTrailDetails(obj: AccessAnalyzerCloudTrailDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accessRole': obj.accessRole,
    'endTime': obj.endTime,
    'startTime': obj.startTime,
    'trails': obj.trails?.map(y => toJson_AccessAnalyzerTrail(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AccessAnalyzerPolicyGenerationDetails
 */
export interface AccessAnalyzerPolicyGenerationDetails {
  /**
   * @schema AccessAnalyzerPolicyGenerationDetails#principalArn
   */
  readonly principalArn: string;

}

/**
 * Converts an object of type 'AccessAnalyzerPolicyGenerationDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerPolicyGenerationDetails(obj: AccessAnalyzerPolicyGenerationDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'principalArn': obj.principalArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AccessAnalyzerValidatePolicyFinding
 */
export interface AccessAnalyzerValidatePolicyFinding {
  /**
   * @schema AccessAnalyzerValidatePolicyFinding#findingDetails
   */
  readonly findingDetails: string;

  /**
   * @schema AccessAnalyzerValidatePolicyFinding#findingType
   */
  readonly findingType: string;

  /**
   * @schema AccessAnalyzerValidatePolicyFinding#issueCode
   */
  readonly issueCode: string;

  /**
   * @schema AccessAnalyzerValidatePolicyFinding#learnMoreLink
   */
  readonly learnMoreLink: string;

  /**
   * @schema AccessAnalyzerValidatePolicyFinding#locations
   */
  readonly locations: AccessAnalyzerLocation[];

}

/**
 * Converts an object of type 'AccessAnalyzerValidatePolicyFinding' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerValidatePolicyFinding(obj: AccessAnalyzerValidatePolicyFinding | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'findingDetails': obj.findingDetails,
    'findingType': obj.findingType,
    'issueCode': obj.issueCode,
    'learnMoreLink': obj.learnMoreLink,
    'locations': obj.locations?.map(y => toJson_AccessAnalyzerLocation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AccessAnalyzerIamRoleConfiguration
 */
export interface AccessAnalyzerIamRoleConfiguration {
  /**
   * @schema AccessAnalyzerIamRoleConfiguration#trustPolicy
   */
  readonly trustPolicy?: string;

}

/**
 * Converts an object of type 'AccessAnalyzerIamRoleConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerIamRoleConfiguration(obj: AccessAnalyzerIamRoleConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'trustPolicy': obj.trustPolicy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AccessAnalyzerKmsKeyConfiguration
 */
export interface AccessAnalyzerKmsKeyConfiguration {
  /**
   * @schema AccessAnalyzerKmsKeyConfiguration#grants
   */
  readonly grants?: AccessAnalyzerKmsGrantConfiguration[];

  /**
   * @schema AccessAnalyzerKmsKeyConfiguration#keyPolicies
   */
  readonly keyPolicies?: { [key: string]: string };

}

/**
 * Converts an object of type 'AccessAnalyzerKmsKeyConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerKmsKeyConfiguration(obj: AccessAnalyzerKmsKeyConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'grants': obj.grants?.map(y => toJson_AccessAnalyzerKmsGrantConfiguration(y)),
    'keyPolicies': ((obj.keyPolicies) === undefined) ? undefined : (Object.entries(obj.keyPolicies).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AccessAnalyzerS3BucketConfiguration
 */
export interface AccessAnalyzerS3BucketConfiguration {
  /**
   * @schema AccessAnalyzerS3BucketConfiguration#accessPoints
   */
  readonly accessPoints?: { [key: string]: AccessAnalyzerS3AccessPointConfiguration };

  /**
   * @schema AccessAnalyzerS3BucketConfiguration#bucketAclGrants
   */
  readonly bucketAclGrants?: AccessAnalyzerS3BucketAclGrantConfiguration[];

  /**
   * @schema AccessAnalyzerS3BucketConfiguration#bucketPolicy
   */
  readonly bucketPolicy?: string;

  /**
   * @schema AccessAnalyzerS3BucketConfiguration#bucketPublicAccessBlock
   */
  readonly bucketPublicAccessBlock?: AccessAnalyzerS3PublicAccessBlockConfiguration;

}

/**
 * Converts an object of type 'AccessAnalyzerS3BucketConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerS3BucketConfiguration(obj: AccessAnalyzerS3BucketConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accessPoints': ((obj.accessPoints) === undefined) ? undefined : (Object.entries(obj.accessPoints).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_AccessAnalyzerS3AccessPointConfiguration(i[1]) }), {})),
    'bucketAclGrants': obj.bucketAclGrants?.map(y => toJson_AccessAnalyzerS3BucketAclGrantConfiguration(y)),
    'bucketPolicy': obj.bucketPolicy,
    'bucketPublicAccessBlock': toJson_AccessAnalyzerS3PublicAccessBlockConfiguration(obj.bucketPublicAccessBlock),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AccessAnalyzerSecretsManagerSecretConfiguration
 */
export interface AccessAnalyzerSecretsManagerSecretConfiguration {
  /**
   * @schema AccessAnalyzerSecretsManagerSecretConfiguration#kmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema AccessAnalyzerSecretsManagerSecretConfiguration#secretPolicy
   */
  readonly secretPolicy?: string;

}

/**
 * Converts an object of type 'AccessAnalyzerSecretsManagerSecretConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerSecretsManagerSecretConfiguration(obj: AccessAnalyzerSecretsManagerSecretConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'kmsKeyId': obj.kmsKeyId,
    'secretPolicy': obj.secretPolicy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AccessAnalyzerSqsQueueConfiguration
 */
export interface AccessAnalyzerSqsQueueConfiguration {
  /**
   * @schema AccessAnalyzerSqsQueueConfiguration#queuePolicy
   */
  readonly queuePolicy?: string;

}

/**
 * Converts an object of type 'AccessAnalyzerSqsQueueConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerSqsQueueConfiguration(obj: AccessAnalyzerSqsQueueConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'queuePolicy': obj.queuePolicy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AccessAnalyzerAccessPreviewStatusReason
 */
export interface AccessAnalyzerAccessPreviewStatusReason {
  /**
   * @schema AccessAnalyzerAccessPreviewStatusReason#code
   */
  readonly code: string;

}

/**
 * Converts an object of type 'AccessAnalyzerAccessPreviewStatusReason' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerAccessPreviewStatusReason(obj: AccessAnalyzerAccessPreviewStatusReason | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'code': obj.code,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AccessAnalyzerStatusReason' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerStatusReason(obj: AccessAnalyzerStatusReason | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'code': obj.code,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AccessAnalyzerFindingSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerFindingSource(obj: AccessAnalyzerFindingSource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'detail': toJson_AccessAnalyzerFindingSourceDetail(obj.detail),
    'type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AccessAnalyzerGeneratedPolicy
 */
export interface AccessAnalyzerGeneratedPolicy {
  /**
   * @schema AccessAnalyzerGeneratedPolicy#policy
   */
  readonly policy: string;

}

/**
 * Converts an object of type 'AccessAnalyzerGeneratedPolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerGeneratedPolicy(obj: AccessAnalyzerGeneratedPolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'policy': obj.policy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AccessAnalyzerGeneratedPolicyProperties
 */
export interface AccessAnalyzerGeneratedPolicyProperties {
  /**
   * @schema AccessAnalyzerGeneratedPolicyProperties#cloudTrailProperties
   */
  readonly cloudTrailProperties?: AccessAnalyzerCloudTrailProperties;

  /**
   * @schema AccessAnalyzerGeneratedPolicyProperties#isComplete
   */
  readonly isComplete?: boolean;

  /**
   * @schema AccessAnalyzerGeneratedPolicyProperties#principalArn
   */
  readonly principalArn: string;

}

/**
 * Converts an object of type 'AccessAnalyzerGeneratedPolicyProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerGeneratedPolicyProperties(obj: AccessAnalyzerGeneratedPolicyProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'cloudTrailProperties': toJson_AccessAnalyzerCloudTrailProperties(obj.cloudTrailProperties),
    'isComplete': obj.isComplete,
    'principalArn': obj.principalArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AccessAnalyzerJobError
 */
export interface AccessAnalyzerJobError {
  /**
   * @schema AccessAnalyzerJobError#code
   */
  readonly code: string;

  /**
   * @schema AccessAnalyzerJobError#message
   */
  readonly message: string;

}

/**
 * Converts an object of type 'AccessAnalyzerJobError' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerJobError(obj: AccessAnalyzerJobError | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'code': obj.code,
    'message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AccessAnalyzerTrail
 */
export interface AccessAnalyzerTrail {
  /**
   * @schema AccessAnalyzerTrail#allRegions
   */
  readonly allRegions?: boolean;

  /**
   * @schema AccessAnalyzerTrail#cloudTrailArn
   */
  readonly cloudTrailArn: string;

  /**
   * @schema AccessAnalyzerTrail#regions
   */
  readonly regions?: string[];

}

/**
 * Converts an object of type 'AccessAnalyzerTrail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerTrail(obj: AccessAnalyzerTrail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'allRegions': obj.allRegions,
    'cloudTrailArn': obj.cloudTrailArn,
    'regions': obj.regions?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AccessAnalyzerLocation
 */
export interface AccessAnalyzerLocation {
  /**
   * @schema AccessAnalyzerLocation#path
   */
  readonly path: AccessAnalyzerPathElement[];

  /**
   * @schema AccessAnalyzerLocation#span
   */
  readonly span: AccessAnalyzerSpan;

}

/**
 * Converts an object of type 'AccessAnalyzerLocation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerLocation(obj: AccessAnalyzerLocation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'path': obj.path?.map(y => toJson_AccessAnalyzerPathElement(y)),
    'span': toJson_AccessAnalyzerSpan(obj.span),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AccessAnalyzerKmsGrantConfiguration
 */
export interface AccessAnalyzerKmsGrantConfiguration {
  /**
   * @schema AccessAnalyzerKmsGrantConfiguration#constraints
   */
  readonly constraints?: AccessAnalyzerKmsGrantConstraints;

  /**
   * @schema AccessAnalyzerKmsGrantConfiguration#granteePrincipal
   */
  readonly granteePrincipal: string;

  /**
   * @schema AccessAnalyzerKmsGrantConfiguration#issuingAccount
   */
  readonly issuingAccount: string;

  /**
   * @schema AccessAnalyzerKmsGrantConfiguration#operations
   */
  readonly operations: string[];

  /**
   * @schema AccessAnalyzerKmsGrantConfiguration#retiringPrincipal
   */
  readonly retiringPrincipal?: string;

}

/**
 * Converts an object of type 'AccessAnalyzerKmsGrantConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerKmsGrantConfiguration(obj: AccessAnalyzerKmsGrantConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'constraints': toJson_AccessAnalyzerKmsGrantConstraints(obj.constraints),
    'granteePrincipal': obj.granteePrincipal,
    'issuingAccount': obj.issuingAccount,
    'operations': obj.operations?.map(y => y),
    'retiringPrincipal': obj.retiringPrincipal,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AccessAnalyzerS3AccessPointConfiguration
 */
export interface AccessAnalyzerS3AccessPointConfiguration {
  /**
   * @schema AccessAnalyzerS3AccessPointConfiguration#accessPointPolicy
   */
  readonly accessPointPolicy?: string;

  /**
   * @schema AccessAnalyzerS3AccessPointConfiguration#networkOrigin
   */
  readonly networkOrigin?: AccessAnalyzerNetworkOriginConfiguration;

  /**
   * @schema AccessAnalyzerS3AccessPointConfiguration#publicAccessBlock
   */
  readonly publicAccessBlock?: AccessAnalyzerS3PublicAccessBlockConfiguration;

}

/**
 * Converts an object of type 'AccessAnalyzerS3AccessPointConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerS3AccessPointConfiguration(obj: AccessAnalyzerS3AccessPointConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accessPointPolicy': obj.accessPointPolicy,
    'networkOrigin': toJson_AccessAnalyzerNetworkOriginConfiguration(obj.networkOrigin),
    'publicAccessBlock': toJson_AccessAnalyzerS3PublicAccessBlockConfiguration(obj.publicAccessBlock),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AccessAnalyzerS3BucketAclGrantConfiguration
 */
export interface AccessAnalyzerS3BucketAclGrantConfiguration {
  /**
   * @schema AccessAnalyzerS3BucketAclGrantConfiguration#grantee
   */
  readonly grantee: AccessAnalyzerAclGrantee;

  /**
   * @schema AccessAnalyzerS3BucketAclGrantConfiguration#permission
   */
  readonly permission: string;

}

/**
 * Converts an object of type 'AccessAnalyzerS3BucketAclGrantConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerS3BucketAclGrantConfiguration(obj: AccessAnalyzerS3BucketAclGrantConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'grantee': toJson_AccessAnalyzerAclGrantee(obj.grantee),
    'permission': obj.permission,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AccessAnalyzerS3PublicAccessBlockConfiguration
 */
export interface AccessAnalyzerS3PublicAccessBlockConfiguration {
  /**
   * @schema AccessAnalyzerS3PublicAccessBlockConfiguration#ignorePublicAcls
   */
  readonly ignorePublicAcls: boolean;

  /**
   * @schema AccessAnalyzerS3PublicAccessBlockConfiguration#restrictPublicBuckets
   */
  readonly restrictPublicBuckets: boolean;

}

/**
 * Converts an object of type 'AccessAnalyzerS3PublicAccessBlockConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerS3PublicAccessBlockConfiguration(obj: AccessAnalyzerS3PublicAccessBlockConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ignorePublicAcls': obj.ignorePublicAcls,
    'restrictPublicBuckets': obj.restrictPublicBuckets,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AccessAnalyzerFindingSourceDetail
 */
export interface AccessAnalyzerFindingSourceDetail {
  /**
   * @schema AccessAnalyzerFindingSourceDetail#accessPointArn
   */
  readonly accessPointArn?: string;

}

/**
 * Converts an object of type 'AccessAnalyzerFindingSourceDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerFindingSourceDetail(obj: AccessAnalyzerFindingSourceDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accessPointArn': obj.accessPointArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AccessAnalyzerCloudTrailProperties
 */
export interface AccessAnalyzerCloudTrailProperties {
  /**
   * @schema AccessAnalyzerCloudTrailProperties#endTime
   */
  readonly endTime: string;

  /**
   * @schema AccessAnalyzerCloudTrailProperties#startTime
   */
  readonly startTime: string;

  /**
   * @schema AccessAnalyzerCloudTrailProperties#trailProperties
   */
  readonly trailProperties: AccessAnalyzerTrailProperties[];

}

/**
 * Converts an object of type 'AccessAnalyzerCloudTrailProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerCloudTrailProperties(obj: AccessAnalyzerCloudTrailProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'endTime': obj.endTime,
    'startTime': obj.startTime,
    'trailProperties': obj.trailProperties?.map(y => toJson_AccessAnalyzerTrailProperties(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AccessAnalyzerPathElement
 */
export interface AccessAnalyzerPathElement {
  /**
   * @schema AccessAnalyzerPathElement#index
   */
  readonly index?: number;

  /**
   * @schema AccessAnalyzerPathElement#key
   */
  readonly key?: string;

  /**
   * @schema AccessAnalyzerPathElement#substring
   */
  readonly substring?: AccessAnalyzerSubstring;

  /**
   * @schema AccessAnalyzerPathElement#value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'AccessAnalyzerPathElement' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerPathElement(obj: AccessAnalyzerPathElement | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'index': obj.index,
    'key': obj.key,
    'substring': toJson_AccessAnalyzerSubstring(obj.substring),
    'value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AccessAnalyzerSpan
 */
export interface AccessAnalyzerSpan {
  /**
   * @schema AccessAnalyzerSpan#end
   */
  readonly end: AccessAnalyzerPosition;

  /**
   * @schema AccessAnalyzerSpan#start
   */
  readonly start: AccessAnalyzerPosition;

}

/**
 * Converts an object of type 'AccessAnalyzerSpan' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerSpan(obj: AccessAnalyzerSpan | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'end': toJson_AccessAnalyzerPosition(obj.end),
    'start': toJson_AccessAnalyzerPosition(obj.start),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AccessAnalyzerKmsGrantConstraints
 */
export interface AccessAnalyzerKmsGrantConstraints {
  /**
   * @schema AccessAnalyzerKmsGrantConstraints#encryptionContextEquals
   */
  readonly encryptionContextEquals?: { [key: string]: string };

  /**
   * @schema AccessAnalyzerKmsGrantConstraints#encryptionContextSubset
   */
  readonly encryptionContextSubset?: { [key: string]: string };

}

/**
 * Converts an object of type 'AccessAnalyzerKmsGrantConstraints' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerKmsGrantConstraints(obj: AccessAnalyzerKmsGrantConstraints | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'encryptionContextEquals': ((obj.encryptionContextEquals) === undefined) ? undefined : (Object.entries(obj.encryptionContextEquals).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'encryptionContextSubset': ((obj.encryptionContextSubset) === undefined) ? undefined : (Object.entries(obj.encryptionContextSubset).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AccessAnalyzerNetworkOriginConfiguration
 */
export interface AccessAnalyzerNetworkOriginConfiguration {
  /**
   * @schema AccessAnalyzerNetworkOriginConfiguration#internetConfiguration
   */
  readonly internetConfiguration?: AccessAnalyzerInternetConfiguration;

  /**
   * @schema AccessAnalyzerNetworkOriginConfiguration#vpcConfiguration
   */
  readonly vpcConfiguration?: AccessAnalyzerVpcConfiguration;

}

/**
 * Converts an object of type 'AccessAnalyzerNetworkOriginConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerNetworkOriginConfiguration(obj: AccessAnalyzerNetworkOriginConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'internetConfiguration': toJson_AccessAnalyzerInternetConfiguration(obj.internetConfiguration),
    'vpcConfiguration': toJson_AccessAnalyzerVpcConfiguration(obj.vpcConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AccessAnalyzerAclGrantee
 */
export interface AccessAnalyzerAclGrantee {
  /**
   * @schema AccessAnalyzerAclGrantee#id
   */
  readonly id?: string;

  /**
   * @schema AccessAnalyzerAclGrantee#uri
   */
  readonly uri?: string;

}

/**
 * Converts an object of type 'AccessAnalyzerAclGrantee' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerAclGrantee(obj: AccessAnalyzerAclGrantee | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'uri': obj.uri,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AccessAnalyzerTrailProperties
 */
export interface AccessAnalyzerTrailProperties {
  /**
   * @schema AccessAnalyzerTrailProperties#allRegions
   */
  readonly allRegions?: boolean;

  /**
   * @schema AccessAnalyzerTrailProperties#cloudTrailArn
   */
  readonly cloudTrailArn: string;

  /**
   * @schema AccessAnalyzerTrailProperties#regions
   */
  readonly regions?: string[];

}

/**
 * Converts an object of type 'AccessAnalyzerTrailProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerTrailProperties(obj: AccessAnalyzerTrailProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'allRegions': obj.allRegions,
    'cloudTrailArn': obj.cloudTrailArn,
    'regions': obj.regions?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AccessAnalyzerSubstring
 */
export interface AccessAnalyzerSubstring {
  /**
   * @schema AccessAnalyzerSubstring#length
   */
  readonly length: number;

  /**
   * @schema AccessAnalyzerSubstring#start
   */
  readonly start: number;

}

/**
 * Converts an object of type 'AccessAnalyzerSubstring' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerSubstring(obj: AccessAnalyzerSubstring | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'length': obj.length,
    'start': obj.start,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AccessAnalyzerPosition
 */
export interface AccessAnalyzerPosition {
  /**
   * @schema AccessAnalyzerPosition#column
   */
  readonly column: number;

  /**
   * @schema AccessAnalyzerPosition#line
   */
  readonly line: number;

  /**
   * @schema AccessAnalyzerPosition#offset
   */
  readonly offset: number;

}

/**
 * Converts an object of type 'AccessAnalyzerPosition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerPosition(obj: AccessAnalyzerPosition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'column': obj.column,
    'line': obj.line,
    'offset': obj.offset,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AccessAnalyzerInternetConfiguration
 */
export interface AccessAnalyzerInternetConfiguration {
}

/**
 * Converts an object of type 'AccessAnalyzerInternetConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerInternetConfiguration(obj: AccessAnalyzerInternetConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AccessAnalyzerVpcConfiguration
 */
export interface AccessAnalyzerVpcConfiguration {
  /**
   * @schema AccessAnalyzerVpcConfiguration#vpcId
   */
  readonly vpcId: string;

}

/**
 * Converts an object of type 'AccessAnalyzerVpcConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AccessAnalyzerVpcConfiguration(obj: AccessAnalyzerVpcConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'vpcId': obj.vpcId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
