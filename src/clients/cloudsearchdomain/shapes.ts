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
 * @schema CloudSearchDomainBucketInfo
 */
export interface CloudSearchDomainBucketInfo {
  /**
   * @schema CloudSearchDomainBucketInfo#buckets
   */
  readonly buckets?: CloudSearchDomainBucket[];

}

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
 * @schema CloudSearchDomainDocumentServiceWarning
 */
export interface CloudSearchDomainDocumentServiceWarning {
  /**
   * @schema CloudSearchDomainDocumentServiceWarning#message
   */
  readonly message?: string;

}

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
