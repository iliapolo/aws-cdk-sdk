/**
 * @schema CreateParticipantConnectionRequest
 */
export interface CreateParticipantConnectionRequest {
  /**
   * @schema CreateParticipantConnectionRequest#Type
   */
  readonly type: string[];

  /**
   * @schema CreateParticipantConnectionRequest#ParticipantToken
   */
  readonly participantToken: string;

}

/**
 * @schema CreateParticipantConnectionResponse
 */
export interface CreateParticipantConnectionResponse {
  /**
   * @schema CreateParticipantConnectionResponse#Websocket
   */
  readonly websocket?: Websocket;

  /**
   * @schema CreateParticipantConnectionResponse#ConnectionCredentials
   */
  readonly connectionCredentials?: ConnectionCredentials;

}

/**
 * @schema DisconnectParticipantRequest
 */
export interface DisconnectParticipantRequest {
  /**
   * @schema DisconnectParticipantRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema DisconnectParticipantRequest#ConnectionToken
   */
  readonly connectionToken: string;

}

/**
 * @schema DisconnectParticipantResponse
 */
export interface DisconnectParticipantResponse {
}

/**
 * @schema GetTranscriptRequest
 */
export interface GetTranscriptRequest {
  /**
   * @schema GetTranscriptRequest#ContactId
   */
  readonly contactId?: string;

  /**
   * @schema GetTranscriptRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GetTranscriptRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetTranscriptRequest#ScanDirection
   */
  readonly scanDirection?: string;

  /**
   * @schema GetTranscriptRequest#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema GetTranscriptRequest#StartPosition
   */
  readonly startPosition?: StartPosition;

  /**
   * @schema GetTranscriptRequest#ConnectionToken
   */
  readonly connectionToken: string;

}

/**
 * @schema GetTranscriptResponse
 */
export interface GetTranscriptResponse {
  /**
   * @schema GetTranscriptResponse#InitialContactId
   */
  readonly initialContactId?: string;

  /**
   * @schema GetTranscriptResponse#Transcript
   */
  readonly transcript?: Item[];

  /**
   * @schema GetTranscriptResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SendEventRequest
 */
export interface SendEventRequest {
  /**
   * @schema SendEventRequest#ContentType
   */
  readonly contentType: string;

  /**
   * @schema SendEventRequest#Content
   */
  readonly content?: string;

  /**
   * @schema SendEventRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema SendEventRequest#ConnectionToken
   */
  readonly connectionToken: string;

}

/**
 * @schema SendEventResponse
 */
export interface SendEventResponse {
  /**
   * @schema SendEventResponse#Id
   */
  readonly id?: string;

  /**
   * @schema SendEventResponse#AbsoluteTime
   */
  readonly absoluteTime?: string;

}

/**
 * @schema SendMessageRequest
 */
export interface SendMessageRequest {
  /**
   * @schema SendMessageRequest#ContentType
   */
  readonly contentType: string;

  /**
   * @schema SendMessageRequest#Content
   */
  readonly content: string;

  /**
   * @schema SendMessageRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema SendMessageRequest#ConnectionToken
   */
  readonly connectionToken: string;

}

/**
 * @schema SendMessageResponse
 */
export interface SendMessageResponse {
  /**
   * @schema SendMessageResponse#Id
   */
  readonly id?: string;

  /**
   * @schema SendMessageResponse#AbsoluteTime
   */
  readonly absoluteTime?: string;

}

/**
 * @schema Websocket
 */
export interface Websocket {
  /**
   * @schema Websocket#Url
   */
  readonly url?: string;

  /**
   * @schema Websocket#ConnectionExpiry
   */
  readonly connectionExpiry?: string;

}

/**
 * @schema ConnectionCredentials
 */
export interface ConnectionCredentials {
  /**
   * @schema ConnectionCredentials#ConnectionToken
   */
  readonly connectionToken?: string;

  /**
   * @schema ConnectionCredentials#Expiry
   */
  readonly expiry?: string;

}

/**
 * @schema StartPosition
 */
export interface StartPosition {
  /**
   * @schema StartPosition#Id
   */
  readonly id?: string;

  /**
   * @schema StartPosition#AbsoluteTime
   */
  readonly absoluteTime?: string;

  /**
   * @schema StartPosition#MostRecent
   */
  readonly mostRecent?: number;

}

/**
 * @schema Item
 */
export interface Item {
  /**
   * @schema Item#AbsoluteTime
   */
  readonly absoluteTime?: string;

  /**
   * @schema Item#Content
   */
  readonly content?: string;

  /**
   * @schema Item#ContentType
   */
  readonly contentType?: string;

  /**
   * @schema Item#Id
   */
  readonly id?: string;

  /**
   * @schema Item#Type
   */
  readonly type?: string;

  /**
   * @schema Item#ParticipantId
   */
  readonly participantId?: string;

  /**
   * @schema Item#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema Item#ParticipantRole
   */
  readonly participantRole?: string;

}
