/**
 * @schema ConnectContactLensListRealtimeContactAnalysisSegmentsRequest
 */
export interface ConnectContactLensListRealtimeContactAnalysisSegmentsRequest {
  /**
   * @schema ConnectContactLensListRealtimeContactAnalysisSegmentsRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectContactLensListRealtimeContactAnalysisSegmentsRequest#ContactId
   */
  readonly contactId?: string;

  /**
   * @schema ConnectContactLensListRealtimeContactAnalysisSegmentsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ConnectContactLensListRealtimeContactAnalysisSegmentsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ConnectContactLensListRealtimeContactAnalysisSegmentsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectContactLensListRealtimeContactAnalysisSegmentsRequest(obj: ConnectContactLensListRealtimeContactAnalysisSegmentsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'ContactId': obj.contactId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectContactLensListRealtimeContactAnalysisSegmentsResponse
 */
export interface ConnectContactLensListRealtimeContactAnalysisSegmentsResponse {
  /**
   * @schema ConnectContactLensListRealtimeContactAnalysisSegmentsResponse#Segments
   */
  readonly segments?: ConnectContactLensRealtimeContactAnalysisSegment[];

  /**
   * @schema ConnectContactLensListRealtimeContactAnalysisSegmentsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ConnectContactLensListRealtimeContactAnalysisSegmentsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectContactLensListRealtimeContactAnalysisSegmentsResponse(obj: ConnectContactLensListRealtimeContactAnalysisSegmentsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Segments': obj.segments?.map(y => toJson_ConnectContactLensRealtimeContactAnalysisSegment(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectContactLensRealtimeContactAnalysisSegment
 */
export interface ConnectContactLensRealtimeContactAnalysisSegment {
  /**
   * @schema ConnectContactLensRealtimeContactAnalysisSegment#Transcript
   */
  readonly transcript?: ConnectContactLensTranscript;

  /**
   * @schema ConnectContactLensRealtimeContactAnalysisSegment#Categories
   */
  readonly categories?: ConnectContactLensCategories;

}

/**
 * Converts an object of type 'ConnectContactLensRealtimeContactAnalysisSegment' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectContactLensRealtimeContactAnalysisSegment(obj: ConnectContactLensRealtimeContactAnalysisSegment | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Transcript': toJson_ConnectContactLensTranscript(obj.transcript),
    'Categories': toJson_ConnectContactLensCategories(obj.categories),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectContactLensTranscript
 */
export interface ConnectContactLensTranscript {
  /**
   * @schema ConnectContactLensTranscript#Id
   */
  readonly id?: string;

  /**
   * @schema ConnectContactLensTranscript#ParticipantId
   */
  readonly participantId?: string;

  /**
   * @schema ConnectContactLensTranscript#ParticipantRole
   */
  readonly participantRole?: string;

  /**
   * @schema ConnectContactLensTranscript#Content
   */
  readonly content?: string;

  /**
   * @schema ConnectContactLensTranscript#BeginOffsetMillis
   */
  readonly beginOffsetMillis?: number;

  /**
   * @schema ConnectContactLensTranscript#EndOffsetMillis
   */
  readonly endOffsetMillis?: number;

  /**
   * @schema ConnectContactLensTranscript#Sentiment
   */
  readonly sentiment?: string;

  /**
   * @schema ConnectContactLensTranscript#IssuesDetected
   */
  readonly issuesDetected?: ConnectContactLensIssueDetected[];

}

/**
 * Converts an object of type 'ConnectContactLensTranscript' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectContactLensTranscript(obj: ConnectContactLensTranscript | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'ParticipantId': obj.participantId,
    'ParticipantRole': obj.participantRole,
    'Content': obj.content,
    'BeginOffsetMillis': obj.beginOffsetMillis,
    'EndOffsetMillis': obj.endOffsetMillis,
    'Sentiment': obj.sentiment,
    'IssuesDetected': obj.issuesDetected?.map(y => toJson_ConnectContactLensIssueDetected(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectContactLensCategories
 */
export interface ConnectContactLensCategories {
  /**
   * @schema ConnectContactLensCategories#MatchedCategories
   */
  readonly matchedCategories?: string[];

  /**
   * @schema ConnectContactLensCategories#MatchedDetails
   */
  readonly matchedDetails?: { [key: string]: ConnectContactLensCategoryDetails };

}

/**
 * Converts an object of type 'ConnectContactLensCategories' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectContactLensCategories(obj: ConnectContactLensCategories | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MatchedCategories': obj.matchedCategories?.map(y => y),
    'MatchedDetails': ((obj.matchedDetails) === undefined) ? undefined : (Object.entries(obj.matchedDetails).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_ConnectContactLensCategoryDetails(i[1]) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectContactLensIssueDetected
 */
export interface ConnectContactLensIssueDetected {
  /**
   * @schema ConnectContactLensIssueDetected#CharacterOffsets
   */
  readonly characterOffsets?: ConnectContactLensCharacterOffsets;

}

/**
 * Converts an object of type 'ConnectContactLensIssueDetected' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectContactLensIssueDetected(obj: ConnectContactLensIssueDetected | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CharacterOffsets': toJson_ConnectContactLensCharacterOffsets(obj.characterOffsets),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectContactLensCategoryDetails
 */
export interface ConnectContactLensCategoryDetails {
  /**
   * @schema ConnectContactLensCategoryDetails#PointsOfInterest
   */
  readonly pointsOfInterest?: ConnectContactLensPointOfInterest[];

}

/**
 * Converts an object of type 'ConnectContactLensCategoryDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectContactLensCategoryDetails(obj: ConnectContactLensCategoryDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PointsOfInterest': obj.pointsOfInterest?.map(y => toJson_ConnectContactLensPointOfInterest(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectContactLensCharacterOffsets
 */
export interface ConnectContactLensCharacterOffsets {
  /**
   * @schema ConnectContactLensCharacterOffsets#BeginOffsetChar
   */
  readonly beginOffsetChar?: number;

  /**
   * @schema ConnectContactLensCharacterOffsets#EndOffsetChar
   */
  readonly endOffsetChar?: number;

}

/**
 * Converts an object of type 'ConnectContactLensCharacterOffsets' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectContactLensCharacterOffsets(obj: ConnectContactLensCharacterOffsets | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BeginOffsetChar': obj.beginOffsetChar,
    'EndOffsetChar': obj.endOffsetChar,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectContactLensPointOfInterest
 */
export interface ConnectContactLensPointOfInterest {
  /**
   * @schema ConnectContactLensPointOfInterest#BeginOffsetMillis
   */
  readonly beginOffsetMillis?: number;

  /**
   * @schema ConnectContactLensPointOfInterest#EndOffsetMillis
   */
  readonly endOffsetMillis?: number;

}

/**
 * Converts an object of type 'ConnectContactLensPointOfInterest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectContactLensPointOfInterest(obj: ConnectContactLensPointOfInterest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BeginOffsetMillis': obj.beginOffsetMillis,
    'EndOffsetMillis': obj.endOffsetMillis,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
