/**
 * @schema CloudSearchDomainSearchRequest
 */
export interface CloudSearchDomainSearchRequest {
  /**
   * @schema CloudSearchDomainSearchRequest#cursor
   */
  readonly cursor?: string;

  /**
   * @schema CloudSearchDomainSearchRequest#expr
   */
  readonly expr?: string;

  /**
   * @schema CloudSearchDomainSearchRequest#facet
   */
  readonly facet?: string;

  /**
   * @schema CloudSearchDomainSearchRequest#filterQuery
   */
  readonly filterQuery?: string;

  /**
   * @schema CloudSearchDomainSearchRequest#highlight
   */
  readonly highlight?: string;

  /**
   * @schema CloudSearchDomainSearchRequest#partial
   */
  readonly partial?: boolean;

  /**
   * @schema CloudSearchDomainSearchRequest#query
   */
  readonly query: string;

  /**
   * @schema CloudSearchDomainSearchRequest#queryOptions
   */
  readonly queryOptions?: string;

  /**
   * @schema CloudSearchDomainSearchRequest#queryParser
   */
  readonly queryParser?: string;

  /**
   * @schema CloudSearchDomainSearchRequest#return
   */
  readonly return?: string;

  /**
   * @schema CloudSearchDomainSearchRequest#size
   */
  readonly size?: number;

  /**
   * @schema CloudSearchDomainSearchRequest#sort
   */
  readonly sort?: string;

  /**
   * @schema CloudSearchDomainSearchRequest#start
   */
  readonly start?: number;

  /**
   * @schema CloudSearchDomainSearchRequest#stats
   */
  readonly stats?: string;

}

/**
 * Converts an object of type 'CloudSearchDomainSearchRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchDomainSearchRequest(obj: CloudSearchDomainSearchRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'cursor': obj.cursor,
    'expr': obj.expr,
    'facet': obj.facet,
    'filterQuery': obj.filterQuery,
    'highlight': obj.highlight,
    'partial': obj.partial,
    'query': obj.query,
    'queryOptions': obj.queryOptions,
    'queryParser': obj.queryParser,
    'return': obj.return,
    'size': obj.size,
    'sort': obj.sort,
    'start': obj.start,
    'stats': obj.stats,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchDomainSearchResponse
 */
export interface CloudSearchDomainSearchResponse {
  /**
   * @schema CloudSearchDomainSearchResponse#status
   */
  readonly status?: CloudSearchDomainSearchStatus;

  /**
   * @schema CloudSearchDomainSearchResponse#hits
   */
  readonly hits?: CloudSearchDomainHits;

  /**
   * @schema CloudSearchDomainSearchResponse#facets
   */
  readonly facets?: { [key: string]: CloudSearchDomainBucketInfo };

  /**
   * @schema CloudSearchDomainSearchResponse#stats
   */
  readonly stats?: { [key: string]: CloudSearchDomainFieldStats };

}

/**
 * Converts an object of type 'CloudSearchDomainSearchResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchDomainSearchResponse(obj: CloudSearchDomainSearchResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'status': toJson_CloudSearchDomainSearchStatus(obj.status),
    'hits': toJson_CloudSearchDomainHits(obj.hits),
    'facets': ((obj.facets) === undefined) ? undefined : (Object.entries(obj.facets).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_CloudSearchDomainBucketInfo(i[1]) }), {})),
    'stats': ((obj.stats) === undefined) ? undefined : (Object.entries(obj.stats).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_CloudSearchDomainFieldStats(i[1]) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchDomainSuggestRequest
 */
export interface CloudSearchDomainSuggestRequest {
  /**
   * @schema CloudSearchDomainSuggestRequest#query
   */
  readonly query: string;

  /**
   * @schema CloudSearchDomainSuggestRequest#suggester
   */
  readonly suggester: string;

  /**
   * @schema CloudSearchDomainSuggestRequest#size
   */
  readonly size?: number;

}

/**
 * Converts an object of type 'CloudSearchDomainSuggestRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchDomainSuggestRequest(obj: CloudSearchDomainSuggestRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'query': obj.query,
    'suggester': obj.suggester,
    'size': obj.size,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchDomainSuggestResponse
 */
export interface CloudSearchDomainSuggestResponse {
  /**
   * @schema CloudSearchDomainSuggestResponse#status
   */
  readonly status?: CloudSearchDomainSuggestStatus;

  /**
   * @schema CloudSearchDomainSuggestResponse#suggest
   */
  readonly suggest?: CloudSearchDomainSuggestModel;

}

/**
 * Converts an object of type 'CloudSearchDomainSuggestResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchDomainSuggestResponse(obj: CloudSearchDomainSuggestResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'status': toJson_CloudSearchDomainSuggestStatus(obj.status),
    'suggest': toJson_CloudSearchDomainSuggestModel(obj.suggest),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchDomainUploadDocumentsRequest
 */
export interface CloudSearchDomainUploadDocumentsRequest {
  /**
   * @schema CloudSearchDomainUploadDocumentsRequest#documents
   */
  readonly documents: any;

  /**
   * @schema CloudSearchDomainUploadDocumentsRequest#contentType
   */
  readonly contentType: string;

}

/**
 * Converts an object of type 'CloudSearchDomainUploadDocumentsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchDomainUploadDocumentsRequest(obj: CloudSearchDomainUploadDocumentsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'documents': obj.documents,
    'contentType': obj.contentType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchDomainUploadDocumentsResponse
 */
export interface CloudSearchDomainUploadDocumentsResponse {
  /**
   * @schema CloudSearchDomainUploadDocumentsResponse#status
   */
  readonly status?: string;

  /**
   * @schema CloudSearchDomainUploadDocumentsResponse#adds
   */
  readonly adds?: number;

  /**
   * @schema CloudSearchDomainUploadDocumentsResponse#deletes
   */
  readonly deletes?: number;

  /**
   * @schema CloudSearchDomainUploadDocumentsResponse#warnings
   */
  readonly warnings?: CloudSearchDomainDocumentServiceWarning[];

}

/**
 * Converts an object of type 'CloudSearchDomainUploadDocumentsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchDomainUploadDocumentsResponse(obj: CloudSearchDomainUploadDocumentsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'status': obj.status,
    'adds': obj.adds,
    'deletes': obj.deletes,
    'warnings': obj.warnings?.map(y => toJson_CloudSearchDomainDocumentServiceWarning(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchDomainSearchStatus
 */
export interface CloudSearchDomainSearchStatus {
  /**
   * @schema CloudSearchDomainSearchStatus#timems
   */
  readonly timems?: number;

  /**
   * @schema CloudSearchDomainSearchStatus#rid
   */
  readonly rid?: string;

}

/**
 * Converts an object of type 'CloudSearchDomainSearchStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchDomainSearchStatus(obj: CloudSearchDomainSearchStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'timems': obj.timems,
    'rid': obj.rid,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchDomainHits
 */
export interface CloudSearchDomainHits {
  /**
   * @schema CloudSearchDomainHits#found
   */
  readonly found?: number;

  /**
   * @schema CloudSearchDomainHits#start
   */
  readonly start?: number;

  /**
   * @schema CloudSearchDomainHits#cursor
   */
  readonly cursor?: string;

  /**
   * @schema CloudSearchDomainHits#hit
   */
  readonly hit?: CloudSearchDomainHit[];

}

/**
 * Converts an object of type 'CloudSearchDomainHits' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchDomainHits(obj: CloudSearchDomainHits | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'found': obj.found,
    'start': obj.start,
    'cursor': obj.cursor,
    'hit': obj.hit?.map(y => toJson_CloudSearchDomainHit(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchDomainBucketInfo
 */
export interface CloudSearchDomainBucketInfo {
  /**
   * @schema CloudSearchDomainBucketInfo#buckets
   */
  readonly buckets?: CloudSearchDomainBucket[];

}

/**
 * Converts an object of type 'CloudSearchDomainBucketInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchDomainBucketInfo(obj: CloudSearchDomainBucketInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'buckets': obj.buckets?.map(y => toJson_CloudSearchDomainBucket(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchDomainFieldStats
 */
export interface CloudSearchDomainFieldStats {
  /**
   * @schema CloudSearchDomainFieldStats#min
   */
  readonly min?: string;

  /**
   * @schema CloudSearchDomainFieldStats#max
   */
  readonly max?: string;

  /**
   * @schema CloudSearchDomainFieldStats#count
   */
  readonly count?: number;

  /**
   * @schema CloudSearchDomainFieldStats#missing
   */
  readonly missing?: number;

  /**
   * @schema CloudSearchDomainFieldStats#sum
   */
  readonly sum?: number;

  /**
   * @schema CloudSearchDomainFieldStats#sumOfSquares
   */
  readonly sumOfSquares?: number;

  /**
   * @schema CloudSearchDomainFieldStats#mean
   */
  readonly mean?: string;

  /**
   * @schema CloudSearchDomainFieldStats#stddev
   */
  readonly stddev?: number;

}

/**
 * Converts an object of type 'CloudSearchDomainFieldStats' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchDomainFieldStats(obj: CloudSearchDomainFieldStats | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'min': obj.min,
    'max': obj.max,
    'count': obj.count,
    'missing': obj.missing,
    'sum': obj.sum,
    'sumOfSquares': obj.sumOfSquares,
    'mean': obj.mean,
    'stddev': obj.stddev,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchDomainSuggestStatus
 */
export interface CloudSearchDomainSuggestStatus {
  /**
   * @schema CloudSearchDomainSuggestStatus#timems
   */
  readonly timems?: number;

  /**
   * @schema CloudSearchDomainSuggestStatus#rid
   */
  readonly rid?: string;

}

/**
 * Converts an object of type 'CloudSearchDomainSuggestStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchDomainSuggestStatus(obj: CloudSearchDomainSuggestStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'timems': obj.timems,
    'rid': obj.rid,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchDomainSuggestModel
 */
export interface CloudSearchDomainSuggestModel {
  /**
   * @schema CloudSearchDomainSuggestModel#query
   */
  readonly query?: string;

  /**
   * @schema CloudSearchDomainSuggestModel#found
   */
  readonly found?: number;

  /**
   * @schema CloudSearchDomainSuggestModel#suggestions
   */
  readonly suggestions?: CloudSearchDomainSuggestionMatch[];

}

/**
 * Converts an object of type 'CloudSearchDomainSuggestModel' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchDomainSuggestModel(obj: CloudSearchDomainSuggestModel | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'query': obj.query,
    'found': obj.found,
    'suggestions': obj.suggestions?.map(y => toJson_CloudSearchDomainSuggestionMatch(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchDomainDocumentServiceWarning
 */
export interface CloudSearchDomainDocumentServiceWarning {
  /**
   * @schema CloudSearchDomainDocumentServiceWarning#message
   */
  readonly message?: string;

}

/**
 * Converts an object of type 'CloudSearchDomainDocumentServiceWarning' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchDomainDocumentServiceWarning(obj: CloudSearchDomainDocumentServiceWarning | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchDomainHit
 */
export interface CloudSearchDomainHit {
  /**
   * @schema CloudSearchDomainHit#id
   */
  readonly id?: string;

  /**
   * @schema CloudSearchDomainHit#fields
   */
  readonly fields?: { [key: string]: string[] };

  /**
   * @schema CloudSearchDomainHit#exprs
   */
  readonly exprs?: { [key: string]: string };

  /**
   * @schema CloudSearchDomainHit#highlights
   */
  readonly highlights?: { [key: string]: string };

}

/**
 * Converts an object of type 'CloudSearchDomainHit' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchDomainHit(obj: CloudSearchDomainHit | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'fields': ((obj.fields) === undefined) ? undefined : (Object.entries(obj.fields).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => y) }), {})),
    'exprs': ((obj.exprs) === undefined) ? undefined : (Object.entries(obj.exprs).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'highlights': ((obj.highlights) === undefined) ? undefined : (Object.entries(obj.highlights).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchDomainBucket
 */
export interface CloudSearchDomainBucket {
  /**
   * @schema CloudSearchDomainBucket#value
   */
  readonly value?: string;

  /**
   * @schema CloudSearchDomainBucket#count
   */
  readonly count?: number;

}

/**
 * Converts an object of type 'CloudSearchDomainBucket' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchDomainBucket(obj: CloudSearchDomainBucket | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'value': obj.value,
    'count': obj.count,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchDomainSuggestionMatch
 */
export interface CloudSearchDomainSuggestionMatch {
  /**
   * @schema CloudSearchDomainSuggestionMatch#suggestion
   */
  readonly suggestion?: string;

  /**
   * @schema CloudSearchDomainSuggestionMatch#score
   */
  readonly score?: number;

  /**
   * @schema CloudSearchDomainSuggestionMatch#id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'CloudSearchDomainSuggestionMatch' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchDomainSuggestionMatch(obj: CloudSearchDomainSuggestionMatch | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'suggestion': obj.suggestion,
    'score': obj.score,
    'id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
