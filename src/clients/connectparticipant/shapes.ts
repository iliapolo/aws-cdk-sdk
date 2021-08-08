/**
 * @schema ConnectParticipantCompleteAttachmentUploadRequest
 */
export interface ConnectParticipantCompleteAttachmentUploadRequest {
  /**
   * @schema ConnectParticipantCompleteAttachmentUploadRequest#AttachmentIds
   */
  readonly attachmentIds?: string[];

  /**
   * @schema ConnectParticipantCompleteAttachmentUploadRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema ConnectParticipantCompleteAttachmentUploadRequest#ConnectionToken
   */
  readonly connectionToken?: string;

}

/**
 * Converts an object of type 'ConnectParticipantCompleteAttachmentUploadRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectParticipantCompleteAttachmentUploadRequest(obj: ConnectParticipantCompleteAttachmentUploadRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AttachmentIds': obj.attachmentIds?.map(y => y),
    'ClientToken': obj.clientToken,
    'ConnectionToken': obj.connectionToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectParticipantCompleteAttachmentUploadResponse
 */
export interface ConnectParticipantCompleteAttachmentUploadResponse {
}

/**
 * Converts an object of type 'ConnectParticipantCompleteAttachmentUploadResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectParticipantCompleteAttachmentUploadResponse(obj: ConnectParticipantCompleteAttachmentUploadResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectParticipantCreateParticipantConnectionRequest
 */
export interface ConnectParticipantCreateParticipantConnectionRequest {
  /**
   * @schema ConnectParticipantCreateParticipantConnectionRequest#Type
   */
  readonly type?: string[];

  /**
   * @schema ConnectParticipantCreateParticipantConnectionRequest#ParticipantToken
   */
  readonly participantToken?: string;

}

/**
 * Converts an object of type 'ConnectParticipantCreateParticipantConnectionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectParticipantCreateParticipantConnectionRequest(obj: ConnectParticipantCreateParticipantConnectionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type?.map(y => y),
    'ParticipantToken': obj.participantToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ConnectParticipantCreateParticipantConnectionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectParticipantCreateParticipantConnectionResponse(obj: ConnectParticipantCreateParticipantConnectionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Websocket': toJson_ConnectParticipantWebsocket(obj.websocket),
    'ConnectionCredentials': toJson_ConnectParticipantConnectionCredentials(obj.connectionCredentials),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly connectionToken?: string;

}

/**
 * Converts an object of type 'ConnectParticipantDisconnectParticipantRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectParticipantDisconnectParticipantRequest(obj: ConnectParticipantDisconnectParticipantRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClientToken': obj.clientToken,
    'ConnectionToken': obj.connectionToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectParticipantDisconnectParticipantResponse
 */
export interface ConnectParticipantDisconnectParticipantResponse {
}

/**
 * Converts an object of type 'ConnectParticipantDisconnectParticipantResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectParticipantDisconnectParticipantResponse(obj: ConnectParticipantDisconnectParticipantResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectParticipantGetAttachmentRequest
 */
export interface ConnectParticipantGetAttachmentRequest {
  /**
   * @schema ConnectParticipantGetAttachmentRequest#AttachmentId
   */
  readonly attachmentId?: string;

  /**
   * @schema ConnectParticipantGetAttachmentRequest#ConnectionToken
   */
  readonly connectionToken?: string;

}

/**
 * Converts an object of type 'ConnectParticipantGetAttachmentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectParticipantGetAttachmentRequest(obj: ConnectParticipantGetAttachmentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AttachmentId': obj.attachmentId,
    'ConnectionToken': obj.connectionToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectParticipantGetAttachmentResponse
 */
export interface ConnectParticipantGetAttachmentResponse {
  /**
   * @schema ConnectParticipantGetAttachmentResponse#Url
   */
  readonly url?: string;

  /**
   * @schema ConnectParticipantGetAttachmentResponse#UrlExpiry
   */
  readonly urlExpiry?: string;

}

/**
 * Converts an object of type 'ConnectParticipantGetAttachmentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectParticipantGetAttachmentResponse(obj: ConnectParticipantGetAttachmentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Url': obj.url,
    'UrlExpiry': obj.urlExpiry,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly connectionToken?: string;

}

/**
 * Converts an object of type 'ConnectParticipantGetTranscriptRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectParticipantGetTranscriptRequest(obj: ConnectParticipantGetTranscriptRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContactId': obj.contactId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'ScanDirection': obj.scanDirection,
    'SortOrder': obj.sortOrder,
    'StartPosition': toJson_ConnectParticipantStartPosition(obj.startPosition),
    'ConnectionToken': obj.connectionToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ConnectParticipantGetTranscriptResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectParticipantGetTranscriptResponse(obj: ConnectParticipantGetTranscriptResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InitialContactId': obj.initialContactId,
    'Transcript': obj.transcript?.map(y => toJson_ConnectParticipantItem(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectParticipantSendEventRequest
 */
export interface ConnectParticipantSendEventRequest {
  /**
   * @schema ConnectParticipantSendEventRequest#ContentType
   */
  readonly contentType?: string;

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
  readonly connectionToken?: string;

}

/**
 * Converts an object of type 'ConnectParticipantSendEventRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectParticipantSendEventRequest(obj: ConnectParticipantSendEventRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContentType': obj.contentType,
    'Content': obj.content,
    'ClientToken': obj.clientToken,
    'ConnectionToken': obj.connectionToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ConnectParticipantSendEventResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectParticipantSendEventResponse(obj: ConnectParticipantSendEventResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'AbsoluteTime': obj.absoluteTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectParticipantSendMessageRequest
 */
export interface ConnectParticipantSendMessageRequest {
  /**
   * @schema ConnectParticipantSendMessageRequest#ContentType
   */
  readonly contentType?: string;

  /**
   * @schema ConnectParticipantSendMessageRequest#Content
   */
  readonly content?: string;

  /**
   * @schema ConnectParticipantSendMessageRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema ConnectParticipantSendMessageRequest#ConnectionToken
   */
  readonly connectionToken?: string;

}

/**
 * Converts an object of type 'ConnectParticipantSendMessageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectParticipantSendMessageRequest(obj: ConnectParticipantSendMessageRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContentType': obj.contentType,
    'Content': obj.content,
    'ClientToken': obj.clientToken,
    'ConnectionToken': obj.connectionToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ConnectParticipantSendMessageResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectParticipantSendMessageResponse(obj: ConnectParticipantSendMessageResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'AbsoluteTime': obj.absoluteTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectParticipantStartAttachmentUploadRequest
 */
export interface ConnectParticipantStartAttachmentUploadRequest {
  /**
   * @schema ConnectParticipantStartAttachmentUploadRequest#ContentType
   */
  readonly contentType?: string;

  /**
   * @schema ConnectParticipantStartAttachmentUploadRequest#AttachmentSizeInBytes
   */
  readonly attachmentSizeInBytes?: number;

  /**
   * @schema ConnectParticipantStartAttachmentUploadRequest#AttachmentName
   */
  readonly attachmentName?: string;

  /**
   * @schema ConnectParticipantStartAttachmentUploadRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema ConnectParticipantStartAttachmentUploadRequest#ConnectionToken
   */
  readonly connectionToken?: string;

}

/**
 * Converts an object of type 'ConnectParticipantStartAttachmentUploadRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectParticipantStartAttachmentUploadRequest(obj: ConnectParticipantStartAttachmentUploadRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContentType': obj.contentType,
    'AttachmentSizeInBytes': obj.attachmentSizeInBytes,
    'AttachmentName': obj.attachmentName,
    'ClientToken': obj.clientToken,
    'ConnectionToken': obj.connectionToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectParticipantStartAttachmentUploadResponse
 */
export interface ConnectParticipantStartAttachmentUploadResponse {
  /**
   * @schema ConnectParticipantStartAttachmentUploadResponse#AttachmentId
   */
  readonly attachmentId?: string;

  /**
   * @schema ConnectParticipantStartAttachmentUploadResponse#UploadMetadata
   */
  readonly uploadMetadata?: ConnectParticipantUploadMetadata;

}

/**
 * Converts an object of type 'ConnectParticipantStartAttachmentUploadResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectParticipantStartAttachmentUploadResponse(obj: ConnectParticipantStartAttachmentUploadResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AttachmentId': obj.attachmentId,
    'UploadMetadata': toJson_ConnectParticipantUploadMetadata(obj.uploadMetadata),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ConnectParticipantWebsocket' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectParticipantWebsocket(obj: ConnectParticipantWebsocket | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Url': obj.url,
    'ConnectionExpiry': obj.connectionExpiry,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ConnectParticipantConnectionCredentials' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectParticipantConnectionCredentials(obj: ConnectParticipantConnectionCredentials | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConnectionToken': obj.connectionToken,
    'Expiry': obj.expiry,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ConnectParticipantStartPosition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectParticipantStartPosition(obj: ConnectParticipantStartPosition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'AbsoluteTime': obj.absoluteTime,
    'MostRecent': obj.mostRecent,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema ConnectParticipantItem#Attachments
   */
  readonly attachments?: ConnectParticipantAttachmentItem[];

}

/**
 * Converts an object of type 'ConnectParticipantItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectParticipantItem(obj: ConnectParticipantItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AbsoluteTime': obj.absoluteTime,
    'Content': obj.content,
    'ContentType': obj.contentType,
    'Id': obj.id,
    'Type': obj.type,
    'ParticipantId': obj.participantId,
    'DisplayName': obj.displayName,
    'ParticipantRole': obj.participantRole,
    'Attachments': obj.attachments?.map(y => toJson_ConnectParticipantAttachmentItem(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectParticipantUploadMetadata
 */
export interface ConnectParticipantUploadMetadata {
  /**
   * @schema ConnectParticipantUploadMetadata#Url
   */
  readonly url?: string;

  /**
   * @schema ConnectParticipantUploadMetadata#UrlExpiry
   */
  readonly urlExpiry?: string;

  /**
   * @schema ConnectParticipantUploadMetadata#HeadersToInclude
   */
  readonly headersToInclude?: { [key: string]: string };

}

/**
 * Converts an object of type 'ConnectParticipantUploadMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectParticipantUploadMetadata(obj: ConnectParticipantUploadMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Url': obj.url,
    'UrlExpiry': obj.urlExpiry,
    'HeadersToInclude': ((obj.headersToInclude) === undefined) ? undefined : (Object.entries(obj.headersToInclude).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectParticipantAttachmentItem
 */
export interface ConnectParticipantAttachmentItem {
  /**
   * @schema ConnectParticipantAttachmentItem#ContentType
   */
  readonly contentType?: string;

  /**
   * @schema ConnectParticipantAttachmentItem#AttachmentId
   */
  readonly attachmentId?: string;

  /**
   * @schema ConnectParticipantAttachmentItem#AttachmentName
   */
  readonly attachmentName?: string;

  /**
   * @schema ConnectParticipantAttachmentItem#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'ConnectParticipantAttachmentItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectParticipantAttachmentItem(obj: ConnectParticipantAttachmentItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContentType': obj.contentType,
    'AttachmentId': obj.attachmentId,
    'AttachmentName': obj.attachmentName,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
