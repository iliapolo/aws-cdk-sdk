/**
 * @schema ConnectParticipantCreateParticipantConnectionRequest
 */
export interface ConnectParticipantCreateParticipantConnectionRequest {
  /**
   * @schema ConnectParticipantCreateParticipantConnectionRequest#Type
   */
  readonly type: string[];

  /**
   * @schema ConnectParticipantCreateParticipantConnectionRequest#ParticipantToken
   */
  readonly participantToken: string;

}

/**
 * @schema ConnectParticipantCreateParticipantConnectionResponse
 */
export interface ConnectParticipantCreateParticipantConnectionResponse {
  /**
   * @schema ConnectParticipantCreateParticipantConnectionResponse#Websocket
   */
  readonly websocket?: ConnectParticipantWebsocket;

  /**
   * @schema ConnectParticipantCreateParticipantConnectionResponse#ConnectionCredentials
   */
  readonly connectionCredentials?: ConnectParticipantConnectionCredentials;

}

/**
 * @schema ConnectParticipantDisconnectParticipantRequest
 */
export interface ConnectParticipantDisconnectParticipantRequest {
  /**
   * @schema ConnectParticipantDisconnectParticipantRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema ConnectParticipantDisconnectParticipantRequest#ConnectionToken
   */
  readonly connectionToken: string;

}

/**
 * @schema ConnectParticipantDisconnectParticipantResponse
 */
export interface ConnectParticipantDisconnectParticipantResponse {
}

/**
 * @schema ConnectParticipantGetTranscriptRequest
 */
export interface ConnectParticipantGetTranscriptRequest {
  /**
   * @schema ConnectParticipantGetTranscriptRequest#ContactId
   */
  readonly contactId?: string;

  /**
   * @schema ConnectParticipantGetTranscriptRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ConnectParticipantGetTranscriptRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ConnectParticipantGetTranscriptRequest#ScanDirection
   */
  readonly scanDirection?: string;

  /**
   * @schema ConnectParticipantGetTranscriptRequest#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema ConnectParticipantGetTranscriptRequest#StartPosition
   */
  readonly startPosition?: ConnectParticipantStartPosition;

  /**
   * @schema ConnectParticipantGetTranscriptRequest#ConnectionToken
   */
  readonly connectionToken: string;

}

/**
 * @schema ConnectParticipantGetTranscriptResponse
 */
export interface ConnectParticipantGetTranscriptResponse {
  /**
   * @schema ConnectParticipantGetTranscriptResponse#InitialContactId
   */
  readonly initialContactId?: string;

  /**
   * @schema ConnectParticipantGetTranscriptResponse#Transcript
   */
  readonly transcript?: ConnectParticipantItem[];

  /**
   * @schema ConnectParticipantGetTranscriptResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ConnectParticipantSendEventRequest
 */
export interface ConnectParticipantSendEventRequest {
  /**
   * @schema ConnectParticipantSendEventRequest#ContentType
   */
  readonly contentType: string;

  /**
   * @schema ConnectParticipantSendEventRequest#Content
   */
  readonly content?: string;

  /**
   * @schema ConnectParticipantSendEventRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema ConnectParticipantSendEventRequest#ConnectionToken
   */
  readonly connectionToken: string;

}

/**
 * @schema ConnectParticipantSendEventResponse
 */
export interface ConnectParticipantSendEventResponse {
  /**
   * @schema ConnectParticipantSendEventResponse#Id
   */
  readonly id?: string;

  /**
   * @schema ConnectParticipantSendEventResponse#AbsoluteTime
   */
  readonly absoluteTime?: string;

}

/**
 * @schema ConnectParticipantSendMessageRequest
 */
export interface ConnectParticipantSendMessageRequest {
  /**
   * @schema ConnectParticipantSendMessageRequest#ContentType
   */
  readonly contentType: string;

  /**
   * @schema ConnectParticipantSendMessageRequest#Content
   */
  readonly content: string;

  /**
   * @schema ConnectParticipantSendMessageRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema ConnectParticipantSendMessageRequest#ConnectionToken
   */
  readonly connectionToken: string;

}

/**
 * @schema ConnectParticipantSendMessageResponse
 */
export interface ConnectParticipantSendMessageResponse {
  /**
   * @schema ConnectParticipantSendMessageResponse#Id
   */
  readonly id?: string;

  /**
   * @schema ConnectParticipantSendMessageResponse#AbsoluteTime
   */
  readonly absoluteTime?: string;

}

/**
 * @schema ConnectParticipantWebsocket
 */
export interface ConnectParticipantWebsocket {
  /**
   * @schema ConnectParticipantWebsocket#Url
   */
  readonly url?: string;

  /**
   * @schema ConnectParticipantWebsocket#ConnectionExpiry
   */
  readonly connectionExpiry?: string;

}

/**
 * @schema ConnectParticipantConnectionCredentials
 */
export interface ConnectParticipantConnectionCredentials {
  /**
   * @schema ConnectParticipantConnectionCredentials#ConnectionToken
   */
  readonly connectionToken?: string;

  /**
   * @schema ConnectParticipantConnectionCredentials#Expiry
   */
  readonly expiry?: string;

}

/**
 * @schema ConnectParticipantStartPosition
 */
export interface ConnectParticipantStartPosition {
  /**
   * @schema ConnectParticipantStartPosition#Id
   */
  readonly id?: string;

  /**
   * @schema ConnectParticipantStartPosition#AbsoluteTime
   */
  readonly absoluteTime?: string;

  /**
   * @schema ConnectParticipantStartPosition#MostRecent
   */
  readonly mostRecent?: number;

}

/**
 * @schema ConnectParticipantItem
 */
export interface ConnectParticipantItem {
  /**
   * @schema ConnectParticipantItem#AbsoluteTime
   */
  readonly absoluteTime?: string;

  /**
   * @schema ConnectParticipantItem#Content
   */
  readonly content?: string;

  /**
   * @schema ConnectParticipantItem#ContentType
   */
  readonly contentType?: string;

  /**
   * @schema ConnectParticipantItem#Id
   */
  readonly id?: string;

  /**
   * @schema ConnectParticipantItem#Type
   */
  readonly type?: string;

  /**
   * @schema ConnectParticipantItem#ParticipantId
   */
  readonly participantId?: string;

  /**
   * @schema ConnectParticipantItem#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema ConnectParticipantItem#ParticipantRole
   */
  readonly participantRole?: string;

}
