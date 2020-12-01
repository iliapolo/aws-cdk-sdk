/**
 * @schema SearchRequest
 */
export interface SearchRequest {
  /**
   * @schema SearchRequest#cursor
   */
  readonly cursor?: string;

  /**
   * @schema SearchRequest#expr
   */
  readonly expr?: string;

  /**
   * @schema SearchRequest#facet
   */
  readonly facet?: string;

  /**
   * @schema SearchRequest#filterQuery
   */
  readonly filterQuery?: string;

  /**
   * @schema SearchRequest#highlight
   */
  readonly highlight?: string;

  /**
   * @schema SearchRequest#partial
   */
  readonly partial?: boolean;

  /**
   * @schema SearchRequest#query
   */
  readonly query: string;

  /**
   * @schema SearchRequest#queryOptions
   */
  readonly queryOptions?: string;

  /**
   * @schema SearchRequest#queryParser
   */
  readonly queryParser?: string;

  /**
   * @schema SearchRequest#return
   */
  readonly return?: string;

  /**
   * @schema SearchRequest#size
   */
  readonly size?: number;

  /**
   * @schema SearchRequest#sort
   */
  readonly sort?: string;

  /**
   * @schema SearchRequest#start
   */
  readonly start?: number;

  /**
   * @schema SearchRequest#stats
   */
  readonly stats?: string;

}

/**
 * @schema SearchResponse
 */
export interface SearchResponse {
  /**
   * @schema SearchResponse#status
   */
  readonly status?: SearchStatus;

  /**
   * @schema SearchResponse#hits
   */
  readonly hits?: Hits;

  /**
   * @schema SearchResponse#facets
   */
  readonly facets?: { [key: string]: BucketInfo };

  /**
   * @schema SearchResponse#stats
   */
  readonly stats?: { [key: string]: FieldStats };

}

/**
 * @schema SuggestRequest
 */
export interface SuggestRequest {
  /**
   * @schema SuggestRequest#query
   */
  readonly query: string;

  /**
   * @schema SuggestRequest#suggester
   */
  readonly suggester: string;

  /**
   * @schema SuggestRequest#size
   */
  readonly size?: number;

}

/**
 * @schema SuggestResponse
 */
export interface SuggestResponse {
  /**
   * @schema SuggestResponse#status
   */
  readonly status?: SuggestStatus;

  /**
   * @schema SuggestResponse#suggest
   */
  readonly suggest?: SuggestModel;

}

/**
 * @schema UploadDocumentsRequest
 */
export interface UploadDocumentsRequest {
  /**
   * @schema UploadDocumentsRequest#documents
   */
  readonly documents: any;

  /**
   * @schema UploadDocumentsRequest#contentType
   */
  readonly contentType: string;

}

/**
 * @schema UploadDocumentsResponse
 */
export interface UploadDocumentsResponse {
  /**
   * @schema UploadDocumentsResponse#status
   */
  readonly status?: string;

  /**
   * @schema UploadDocumentsResponse#adds
   */
  readonly adds?: number;

  /**
   * @schema UploadDocumentsResponse#deletes
   */
  readonly deletes?: number;

  /**
   * @schema UploadDocumentsResponse#warnings
   */
  readonly warnings?: DocumentServiceWarning[];

}

/**
 * @schema SearchStatus
 */
export interface SearchStatus {
  /**
   * @schema SearchStatus#timems
   */
  readonly timems?: number;

  /**
   * @schema SearchStatus#rid
   */
  readonly rid?: string;

}

/**
 * @schema Hits
 */
export interface Hits {
  /**
   * @schema Hits#found
   */
  readonly found?: number;

  /**
   * @schema Hits#start
   */
  readonly start?: number;

  /**
   * @schema Hits#cursor
   */
  readonly cursor?: string;

  /**
   * @schema Hits#hit
   */
  readonly hit?: Hit[];

}

/**
 * @schema BucketInfo
 */
export interface BucketInfo {
  /**
   * @schema BucketInfo#buckets
   */
  readonly buckets?: Bucket[];

}

/**
 * @schema FieldStats
 */
export interface FieldStats {
  /**
   * @schema FieldStats#min
   */
  readonly min?: string;

  /**
   * @schema FieldStats#max
   */
  readonly max?: string;

  /**
   * @schema FieldStats#count
   */
  readonly count?: number;

  /**
   * @schema FieldStats#missing
   */
  readonly missing?: number;

  /**
   * @schema FieldStats#sum
   */
  readonly sum?: number;

  /**
   * @schema FieldStats#sumOfSquares
   */
  readonly sumOfSquares?: number;

  /**
   * @schema FieldStats#mean
   */
  readonly mean?: string;

  /**
   * @schema FieldStats#stddev
   */
  readonly stddev?: number;

}

/**
 * @schema SuggestStatus
 */
export interface SuggestStatus {
  /**
   * @schema SuggestStatus#timems
   */
  readonly timems?: number;

  /**
   * @schema SuggestStatus#rid
   */
  readonly rid?: string;

}

/**
 * @schema SuggestModel
 */
export interface SuggestModel {
  /**
   * @schema SuggestModel#query
   */
  readonly query?: string;

  /**
   * @schema SuggestModel#found
   */
  readonly found?: number;

  /**
   * @schema SuggestModel#suggestions
   */
  readonly suggestions?: SuggestionMatch[];

}

/**
 * @schema DocumentServiceWarning
 */
export interface DocumentServiceWarning {
  /**
   * @schema DocumentServiceWarning#message
   */
  readonly message?: string;

}

/**
 * @schema Hit
 */
export interface Hit {
  /**
   * @schema Hit#id
   */
  readonly id?: string;

  /**
   * @schema Hit#fields
   */
  readonly fields?: { [key: string]: string[] };

  /**
   * @schema Hit#exprs
   */
  readonly exprs?: { [key: string]: string };

  /**
   * @schema Hit#highlights
   */
  readonly highlights?: { [key: string]: string };

}

/**
 * @schema Bucket
 */
export interface Bucket {
  /**
   * @schema Bucket#value
   */
  readonly value?: string;

  /**
   * @schema Bucket#count
   */
  readonly count?: number;

}

/**
 * @schema SuggestionMatch
 */
export interface SuggestionMatch {
  /**
   * @schema SuggestionMatch#suggestion
   */
  readonly suggestion?: string;

  /**
   * @schema SuggestionMatch#score
   */
  readonly score?: number;

  /**
   * @schema SuggestionMatch#id
   */
  readonly id?: string;

}
