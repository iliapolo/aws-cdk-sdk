/**
 * @schema WorkMailMessageFlowGetRawMessageContentRequest
 */
export interface WorkMailMessageFlowGetRawMessageContentRequest {
  /**
   * @schema WorkMailMessageFlowGetRawMessageContentRequest#messageId
   */
  readonly messageId: string;

}

/**
 * Converts an object of type 'WorkMailMessageFlowGetRawMessageContentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailMessageFlowGetRawMessageContentRequest(obj: WorkMailMessageFlowGetRawMessageContentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'messageId': obj.messageId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailMessageFlowGetRawMessageContentResponse
 */
export interface WorkMailMessageFlowGetRawMessageContentResponse {
  /**
   * @schema WorkMailMessageFlowGetRawMessageContentResponse#messageContent
   */
  readonly messageContent: any;

}

/**
 * Converts an object of type 'WorkMailMessageFlowGetRawMessageContentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailMessageFlowGetRawMessageContentResponse(obj: WorkMailMessageFlowGetRawMessageContentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'messageContent': obj.messageContent,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailMessageFlowPutRawMessageContentRequest
 */
export interface WorkMailMessageFlowPutRawMessageContentRequest {
  /**
   * @schema WorkMailMessageFlowPutRawMessageContentRequest#messageId
   */
  readonly messageId: string;

  /**
   * @schema WorkMailMessageFlowPutRawMessageContentRequest#content
   */
  readonly content: WorkMailMessageFlowRawMessageContent;

}

/**
 * Converts an object of type 'WorkMailMessageFlowPutRawMessageContentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailMessageFlowPutRawMessageContentRequest(obj: WorkMailMessageFlowPutRawMessageContentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'messageId': obj.messageId,
    'content': toJson_WorkMailMessageFlowRawMessageContent(obj.content),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailMessageFlowPutRawMessageContentResponse
 */
export interface WorkMailMessageFlowPutRawMessageContentResponse {
}

/**
 * Converts an object of type 'WorkMailMessageFlowPutRawMessageContentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailMessageFlowPutRawMessageContentResponse(obj: WorkMailMessageFlowPutRawMessageContentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailMessageFlowRawMessageContent
 */
export interface WorkMailMessageFlowRawMessageContent {
  /**
   * @schema WorkMailMessageFlowRawMessageContent#s3Reference
   */
  readonly s3Reference: WorkMailMessageFlowS3Reference;

}

/**
 * Converts an object of type 'WorkMailMessageFlowRawMessageContent' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailMessageFlowRawMessageContent(obj: WorkMailMessageFlowRawMessageContent | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    's3Reference': toJson_WorkMailMessageFlowS3Reference(obj.s3Reference),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailMessageFlowS3Reference
 */
export interface WorkMailMessageFlowS3Reference {
  /**
   * @schema WorkMailMessageFlowS3Reference#bucket
   */
  readonly bucket: string;

  /**
   * @schema WorkMailMessageFlowS3Reference#key
   */
  readonly key: string;

  /**
   * @schema WorkMailMessageFlowS3Reference#objectVersion
   */
  readonly objectVersion?: string;

}

/**
 * Converts an object of type 'WorkMailMessageFlowS3Reference' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailMessageFlowS3Reference(obj: WorkMailMessageFlowS3Reference | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bucket': obj.bucket,
    'key': obj.key,
    'objectVersion': obj.objectVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
