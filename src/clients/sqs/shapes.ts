/**
 * @schema SqsAddPermissionRequest
 */
export interface SqsAddPermissionRequest {
  /**
   * @schema SqsAddPermissionRequest#QueueUrl
   */
  readonly queueUrl?: string;

  /**
   * @schema SqsAddPermissionRequest#Label
   */
  readonly label?: string;

  /**
   * @schema SqsAddPermissionRequest#AWSAccountIds
   */
  readonly awsAccountIds?: string[];

  /**
   * @schema SqsAddPermissionRequest#Actions
   */
  readonly actions?: string[];

}

/**
 * Converts an object of type 'SqsAddPermissionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SqsAddPermissionRequest(obj: SqsAddPermissionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'QueueUrl': obj.queueUrl,
    'Label': obj.label,
    'AWSAccountIds': obj.awsAccountIds?.map(y => y),
    'Actions': obj.actions?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SqsChangeMessageVisibilityRequest
 */
export interface SqsChangeMessageVisibilityRequest {
  /**
   * @schema SqsChangeMessageVisibilityRequest#QueueUrl
   */
  readonly queueUrl?: string;

  /**
   * @schema SqsChangeMessageVisibilityRequest#ReceiptHandle
   */
  readonly receiptHandle?: string;

  /**
   * @schema SqsChangeMessageVisibilityRequest#VisibilityTimeout
   */
  readonly visibilityTimeout?: number;

}

/**
 * Converts an object of type 'SqsChangeMessageVisibilityRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SqsChangeMessageVisibilityRequest(obj: SqsChangeMessageVisibilityRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'QueueUrl': obj.queueUrl,
    'ReceiptHandle': obj.receiptHandle,
    'VisibilityTimeout': obj.visibilityTimeout,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SqsChangeMessageVisibilityBatchRequest
 */
export interface SqsChangeMessageVisibilityBatchRequest {
  /**
   * @schema SqsChangeMessageVisibilityBatchRequest#QueueUrl
   */
  readonly queueUrl?: string;

  /**
   * @schema SqsChangeMessageVisibilityBatchRequest#Entries
   */
  readonly entries?: SqsChangeMessageVisibilityBatchRequestEntry[];

}

/**
 * Converts an object of type 'SqsChangeMessageVisibilityBatchRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SqsChangeMessageVisibilityBatchRequest(obj: SqsChangeMessageVisibilityBatchRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'QueueUrl': obj.queueUrl,
    'Entries': obj.entries?.map(y => toJson_SqsChangeMessageVisibilityBatchRequestEntry(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SqsChangeMessageVisibilityBatchResult
 */
export interface SqsChangeMessageVisibilityBatchResult {
  /**
   * @schema SqsChangeMessageVisibilityBatchResult#Successful
   */
  readonly successful?: SqsChangeMessageVisibilityBatchResultEntry[];

  /**
   * @schema SqsChangeMessageVisibilityBatchResult#Failed
   */
  readonly failed?: SqsBatchResultErrorEntry[];

}

/**
 * Converts an object of type 'SqsChangeMessageVisibilityBatchResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SqsChangeMessageVisibilityBatchResult(obj: SqsChangeMessageVisibilityBatchResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Successful': obj.successful?.map(y => toJson_SqsChangeMessageVisibilityBatchResultEntry(y)),
    'Failed': obj.failed?.map(y => toJson_SqsBatchResultErrorEntry(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SqsCreateQueueRequest
 */
export interface SqsCreateQueueRequest {
  /**
   * @schema SqsCreateQueueRequest#QueueName
   */
  readonly queueName?: string;

  /**
   * @schema SqsCreateQueueRequest#Attributes
   */
  readonly attributes?: { [key: string]: string };

  /**
   * @schema SqsCreateQueueRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'SqsCreateQueueRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SqsCreateQueueRequest(obj: SqsCreateQueueRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'QueueName': obj.queueName,
    'Attributes': ((obj.attributes) === undefined) ? undefined : (Object.entries(obj.attributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SqsCreateQueueResult
 */
export interface SqsCreateQueueResult {
  /**
   * @schema SqsCreateQueueResult#QueueUrl
   */
  readonly queueUrl?: string;

}

/**
 * Converts an object of type 'SqsCreateQueueResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SqsCreateQueueResult(obj: SqsCreateQueueResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'QueueUrl': obj.queueUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SqsDeleteMessageRequest
 */
export interface SqsDeleteMessageRequest {
  /**
   * @schema SqsDeleteMessageRequest#QueueUrl
   */
  readonly queueUrl?: string;

  /**
   * @schema SqsDeleteMessageRequest#ReceiptHandle
   */
  readonly receiptHandle?: string;

}

/**
 * Converts an object of type 'SqsDeleteMessageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SqsDeleteMessageRequest(obj: SqsDeleteMessageRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'QueueUrl': obj.queueUrl,
    'ReceiptHandle': obj.receiptHandle,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SqsDeleteMessageBatchRequest
 */
export interface SqsDeleteMessageBatchRequest {
  /**
   * @schema SqsDeleteMessageBatchRequest#QueueUrl
   */
  readonly queueUrl?: string;

  /**
   * @schema SqsDeleteMessageBatchRequest#Entries
   */
  readonly entries?: SqsDeleteMessageBatchRequestEntry[];

}

/**
 * Converts an object of type 'SqsDeleteMessageBatchRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SqsDeleteMessageBatchRequest(obj: SqsDeleteMessageBatchRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'QueueUrl': obj.queueUrl,
    'Entries': obj.entries?.map(y => toJson_SqsDeleteMessageBatchRequestEntry(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SqsDeleteMessageBatchResult
 */
export interface SqsDeleteMessageBatchResult {
  /**
   * @schema SqsDeleteMessageBatchResult#Successful
   */
  readonly successful?: SqsDeleteMessageBatchResultEntry[];

  /**
   * @schema SqsDeleteMessageBatchResult#Failed
   */
  readonly failed?: SqsBatchResultErrorEntry[];

}

/**
 * Converts an object of type 'SqsDeleteMessageBatchResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SqsDeleteMessageBatchResult(obj: SqsDeleteMessageBatchResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Successful': obj.successful?.map(y => toJson_SqsDeleteMessageBatchResultEntry(y)),
    'Failed': obj.failed?.map(y => toJson_SqsBatchResultErrorEntry(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SqsDeleteQueueRequest
 */
export interface SqsDeleteQueueRequest {
  /**
   * @schema SqsDeleteQueueRequest#QueueUrl
   */
  readonly queueUrl?: string;

}

/**
 * Converts an object of type 'SqsDeleteQueueRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SqsDeleteQueueRequest(obj: SqsDeleteQueueRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'QueueUrl': obj.queueUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SqsGetQueueAttributesRequest
 */
export interface SqsGetQueueAttributesRequest {
  /**
   * @schema SqsGetQueueAttributesRequest#QueueUrl
   */
  readonly queueUrl?: string;

  /**
   * @schema SqsGetQueueAttributesRequest#AttributeNames
   */
  readonly attributeNames?: string[];

}

/**
 * Converts an object of type 'SqsGetQueueAttributesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SqsGetQueueAttributesRequest(obj: SqsGetQueueAttributesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'QueueUrl': obj.queueUrl,
    'AttributeNames': obj.attributeNames?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SqsGetQueueAttributesResult
 */
export interface SqsGetQueueAttributesResult {
  /**
   * @schema SqsGetQueueAttributesResult#Attributes
   */
  readonly attributes?: { [key: string]: string };

}

/**
 * Converts an object of type 'SqsGetQueueAttributesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SqsGetQueueAttributesResult(obj: SqsGetQueueAttributesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Attributes': ((obj.attributes) === undefined) ? undefined : (Object.entries(obj.attributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SqsGetQueueUrlRequest
 */
export interface SqsGetQueueUrlRequest {
  /**
   * @schema SqsGetQueueUrlRequest#QueueName
   */
  readonly queueName?: string;

  /**
   * @schema SqsGetQueueUrlRequest#QueueOwnerAWSAccountId
   */
  readonly queueOwnerAwsAccountId?: string;

}

/**
 * Converts an object of type 'SqsGetQueueUrlRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SqsGetQueueUrlRequest(obj: SqsGetQueueUrlRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'QueueName': obj.queueName,
    'QueueOwnerAWSAccountId': obj.queueOwnerAwsAccountId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SqsGetQueueUrlResult
 */
export interface SqsGetQueueUrlResult {
  /**
   * @schema SqsGetQueueUrlResult#QueueUrl
   */
  readonly queueUrl?: string;

}

/**
 * Converts an object of type 'SqsGetQueueUrlResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SqsGetQueueUrlResult(obj: SqsGetQueueUrlResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'QueueUrl': obj.queueUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SqsListDeadLetterSourceQueuesRequest
 */
export interface SqsListDeadLetterSourceQueuesRequest {
  /**
   * @schema SqsListDeadLetterSourceQueuesRequest#QueueUrl
   */
  readonly queueUrl?: string;

  /**
   * @schema SqsListDeadLetterSourceQueuesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SqsListDeadLetterSourceQueuesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'SqsListDeadLetterSourceQueuesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SqsListDeadLetterSourceQueuesRequest(obj: SqsListDeadLetterSourceQueuesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'QueueUrl': obj.queueUrl,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SqsListDeadLetterSourceQueuesResult
 */
export interface SqsListDeadLetterSourceQueuesResult {
  /**
   * @schema SqsListDeadLetterSourceQueuesResult#queueUrls
   */
  readonly queueUrls: string[];

  /**
   * @schema SqsListDeadLetterSourceQueuesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SqsListDeadLetterSourceQueuesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SqsListDeadLetterSourceQueuesResult(obj: SqsListDeadLetterSourceQueuesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'queueUrls': obj.queueUrls?.map(y => y),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SqsListQueueTagsRequest
 */
export interface SqsListQueueTagsRequest {
  /**
   * @schema SqsListQueueTagsRequest#QueueUrl
   */
  readonly queueUrl?: string;

}

/**
 * Converts an object of type 'SqsListQueueTagsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SqsListQueueTagsRequest(obj: SqsListQueueTagsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'QueueUrl': obj.queueUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SqsListQueueTagsResult
 */
export interface SqsListQueueTagsResult {
  /**
   * @schema SqsListQueueTagsResult#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'SqsListQueueTagsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SqsListQueueTagsResult(obj: SqsListQueueTagsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SqsListQueuesRequest
 */
export interface SqsListQueuesRequest {
  /**
   * @schema SqsListQueuesRequest#QueueNamePrefix
   */
  readonly queueNamePrefix?: string;

  /**
   * @schema SqsListQueuesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SqsListQueuesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'SqsListQueuesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SqsListQueuesRequest(obj: SqsListQueuesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'QueueNamePrefix': obj.queueNamePrefix,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SqsListQueuesResult
 */
export interface SqsListQueuesResult {
  /**
   * @schema SqsListQueuesResult#QueueUrls
   */
  readonly queueUrls?: string[];

  /**
   * @schema SqsListQueuesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SqsListQueuesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SqsListQueuesResult(obj: SqsListQueuesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'QueueUrls': obj.queueUrls?.map(y => y),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SqsPurgeQueueRequest
 */
export interface SqsPurgeQueueRequest {
  /**
   * @schema SqsPurgeQueueRequest#QueueUrl
   */
  readonly queueUrl?: string;

}

/**
 * Converts an object of type 'SqsPurgeQueueRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SqsPurgeQueueRequest(obj: SqsPurgeQueueRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'QueueUrl': obj.queueUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SqsReceiveMessageRequest
 */
export interface SqsReceiveMessageRequest {
  /**
   * @schema SqsReceiveMessageRequest#QueueUrl
   */
  readonly queueUrl?: string;

  /**
   * @schema SqsReceiveMessageRequest#AttributeNames
   */
  readonly attributeNames?: string[];

  /**
   * @schema SqsReceiveMessageRequest#MessageAttributeNames
   */
  readonly messageAttributeNames?: string[];

  /**
   * @schema SqsReceiveMessageRequest#MaxNumberOfMessages
   */
  readonly maxNumberOfMessages?: number;

  /**
   * @schema SqsReceiveMessageRequest#VisibilityTimeout
   */
  readonly visibilityTimeout?: number;

  /**
   * @schema SqsReceiveMessageRequest#WaitTimeSeconds
   */
  readonly waitTimeSeconds?: number;

  /**
   * @schema SqsReceiveMessageRequest#ReceiveRequestAttemptId
   */
  readonly receiveRequestAttemptId?: string;

}

/**
 * Converts an object of type 'SqsReceiveMessageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SqsReceiveMessageRequest(obj: SqsReceiveMessageRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'QueueUrl': obj.queueUrl,
    'AttributeNames': obj.attributeNames?.map(y => y),
    'MessageAttributeNames': obj.messageAttributeNames?.map(y => y),
    'MaxNumberOfMessages': obj.maxNumberOfMessages,
    'VisibilityTimeout': obj.visibilityTimeout,
    'WaitTimeSeconds': obj.waitTimeSeconds,
    'ReceiveRequestAttemptId': obj.receiveRequestAttemptId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SqsReceiveMessageResult
 */
export interface SqsReceiveMessageResult {
  /**
   * @schema SqsReceiveMessageResult#Messages
   */
  readonly messages?: SqsMessage[];

}

/**
 * Converts an object of type 'SqsReceiveMessageResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SqsReceiveMessageResult(obj: SqsReceiveMessageResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Messages': obj.messages?.map(y => toJson_SqsMessage(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SqsRemovePermissionRequest
 */
export interface SqsRemovePermissionRequest {
  /**
   * @schema SqsRemovePermissionRequest#QueueUrl
   */
  readonly queueUrl?: string;

  /**
   * @schema SqsRemovePermissionRequest#Label
   */
  readonly label?: string;

}

/**
 * Converts an object of type 'SqsRemovePermissionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SqsRemovePermissionRequest(obj: SqsRemovePermissionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'QueueUrl': obj.queueUrl,
    'Label': obj.label,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SqsSendMessageRequest
 */
export interface SqsSendMessageRequest {
  /**
   * @schema SqsSendMessageRequest#QueueUrl
   */
  readonly queueUrl?: string;

  /**
   * @schema SqsSendMessageRequest#MessageBody
   */
  readonly messageBody?: string;

  /**
   * @schema SqsSendMessageRequest#DelaySeconds
   */
  readonly delaySeconds?: number;

  /**
   * @schema SqsSendMessageRequest#MessageAttributes
   */
  readonly messageAttributes?: { [key: string]: SqsMessageAttributeValue };

  /**
   * @schema SqsSendMessageRequest#MessageSystemAttributes
   */
  readonly messageSystemAttributes?: { [key: string]: SqsMessageSystemAttributeValue };

  /**
   * @schema SqsSendMessageRequest#MessageDeduplicationId
   */
  readonly messageDeduplicationId?: string;

  /**
   * @schema SqsSendMessageRequest#MessageGroupId
   */
  readonly messageGroupId?: string;

}

/**
 * Converts an object of type 'SqsSendMessageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SqsSendMessageRequest(obj: SqsSendMessageRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'QueueUrl': obj.queueUrl,
    'MessageBody': obj.messageBody,
    'DelaySeconds': obj.delaySeconds,
    'MessageAttributes': ((obj.messageAttributes) === undefined) ? undefined : (Object.entries(obj.messageAttributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_SqsMessageAttributeValue(i[1]) }), {})),
    'MessageSystemAttributes': ((obj.messageSystemAttributes) === undefined) ? undefined : (Object.entries(obj.messageSystemAttributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_SqsMessageSystemAttributeValue(i[1]) }), {})),
    'MessageDeduplicationId': obj.messageDeduplicationId,
    'MessageGroupId': obj.messageGroupId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SqsSendMessageResult
 */
export interface SqsSendMessageResult {
  /**
   * @schema SqsSendMessageResult#MD5OfMessageBody
   */
  readonly md5OfMessageBody?: string;

  /**
   * @schema SqsSendMessageResult#MD5OfMessageAttributes
   */
  readonly md5OfMessageAttributes?: string;

  /**
   * @schema SqsSendMessageResult#MD5OfMessageSystemAttributes
   */
  readonly md5OfMessageSystemAttributes?: string;

  /**
   * @schema SqsSendMessageResult#MessageId
   */
  readonly messageId?: string;

  /**
   * @schema SqsSendMessageResult#SequenceNumber
   */
  readonly sequenceNumber?: string;

}

/**
 * Converts an object of type 'SqsSendMessageResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SqsSendMessageResult(obj: SqsSendMessageResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MD5OfMessageBody': obj.md5OfMessageBody,
    'MD5OfMessageAttributes': obj.md5OfMessageAttributes,
    'MD5OfMessageSystemAttributes': obj.md5OfMessageSystemAttributes,
    'MessageId': obj.messageId,
    'SequenceNumber': obj.sequenceNumber,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SqsSendMessageBatchRequest
 */
export interface SqsSendMessageBatchRequest {
  /**
   * @schema SqsSendMessageBatchRequest#QueueUrl
   */
  readonly queueUrl?: string;

  /**
   * @schema SqsSendMessageBatchRequest#Entries
   */
  readonly entries?: SqsSendMessageBatchRequestEntry[];

}

/**
 * Converts an object of type 'SqsSendMessageBatchRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SqsSendMessageBatchRequest(obj: SqsSendMessageBatchRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'QueueUrl': obj.queueUrl,
    'Entries': obj.entries?.map(y => toJson_SqsSendMessageBatchRequestEntry(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SqsSendMessageBatchResult
 */
export interface SqsSendMessageBatchResult {
  /**
   * @schema SqsSendMessageBatchResult#Successful
   */
  readonly successful?: SqsSendMessageBatchResultEntry[];

  /**
   * @schema SqsSendMessageBatchResult#Failed
   */
  readonly failed?: SqsBatchResultErrorEntry[];

}

/**
 * Converts an object of type 'SqsSendMessageBatchResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SqsSendMessageBatchResult(obj: SqsSendMessageBatchResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Successful': obj.successful?.map(y => toJson_SqsSendMessageBatchResultEntry(y)),
    'Failed': obj.failed?.map(y => toJson_SqsBatchResultErrorEntry(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SqsSetQueueAttributesRequest
 */
export interface SqsSetQueueAttributesRequest {
  /**
   * @schema SqsSetQueueAttributesRequest#QueueUrl
   */
  readonly queueUrl?: string;

  /**
   * @schema SqsSetQueueAttributesRequest#Attributes
   */
  readonly attributes?: { [key: string]: string };

}

/**
 * Converts an object of type 'SqsSetQueueAttributesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SqsSetQueueAttributesRequest(obj: SqsSetQueueAttributesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'QueueUrl': obj.queueUrl,
    'Attributes': ((obj.attributes) === undefined) ? undefined : (Object.entries(obj.attributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SqsTagQueueRequest
 */
export interface SqsTagQueueRequest {
  /**
   * @schema SqsTagQueueRequest#QueueUrl
   */
  readonly queueUrl?: string;

  /**
   * @schema SqsTagQueueRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'SqsTagQueueRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SqsTagQueueRequest(obj: SqsTagQueueRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'QueueUrl': obj.queueUrl,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SqsUntagQueueRequest
 */
export interface SqsUntagQueueRequest {
  /**
   * @schema SqsUntagQueueRequest#QueueUrl
   */
  readonly queueUrl?: string;

  /**
   * @schema SqsUntagQueueRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'SqsUntagQueueRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SqsUntagQueueRequest(obj: SqsUntagQueueRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'QueueUrl': obj.queueUrl,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SqsChangeMessageVisibilityBatchRequestEntry
 */
export interface SqsChangeMessageVisibilityBatchRequestEntry {
  /**
   * @schema SqsChangeMessageVisibilityBatchRequestEntry#Id
   */
  readonly id?: string;

  /**
   * @schema SqsChangeMessageVisibilityBatchRequestEntry#ReceiptHandle
   */
  readonly receiptHandle?: string;

  /**
   * @schema SqsChangeMessageVisibilityBatchRequestEntry#VisibilityTimeout
   */
  readonly visibilityTimeout?: number;

}

/**
 * Converts an object of type 'SqsChangeMessageVisibilityBatchRequestEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SqsChangeMessageVisibilityBatchRequestEntry(obj: SqsChangeMessageVisibilityBatchRequestEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'ReceiptHandle': obj.receiptHandle,
    'VisibilityTimeout': obj.visibilityTimeout,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SqsChangeMessageVisibilityBatchResultEntry
 */
export interface SqsChangeMessageVisibilityBatchResultEntry {
  /**
   * @schema SqsChangeMessageVisibilityBatchResultEntry#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'SqsChangeMessageVisibilityBatchResultEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SqsChangeMessageVisibilityBatchResultEntry(obj: SqsChangeMessageVisibilityBatchResultEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SqsBatchResultErrorEntry
 */
export interface SqsBatchResultErrorEntry {
  /**
   * @schema SqsBatchResultErrorEntry#Id
   */
  readonly id?: string;

  /**
   * @schema SqsBatchResultErrorEntry#SenderFault
   */
  readonly senderFault?: boolean;

  /**
   * @schema SqsBatchResultErrorEntry#Code
   */
  readonly code?: string;

  /**
   * @schema SqsBatchResultErrorEntry#Message
   */
  readonly message?: string;

}

/**
 * Converts an object of type 'SqsBatchResultErrorEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SqsBatchResultErrorEntry(obj: SqsBatchResultErrorEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'SenderFault': obj.senderFault,
    'Code': obj.code,
    'Message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SqsDeleteMessageBatchRequestEntry
 */
export interface SqsDeleteMessageBatchRequestEntry {
  /**
   * @schema SqsDeleteMessageBatchRequestEntry#Id
   */
  readonly id?: string;

  /**
   * @schema SqsDeleteMessageBatchRequestEntry#ReceiptHandle
   */
  readonly receiptHandle?: string;

}

/**
 * Converts an object of type 'SqsDeleteMessageBatchRequestEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SqsDeleteMessageBatchRequestEntry(obj: SqsDeleteMessageBatchRequestEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'ReceiptHandle': obj.receiptHandle,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SqsDeleteMessageBatchResultEntry
 */
export interface SqsDeleteMessageBatchResultEntry {
  /**
   * @schema SqsDeleteMessageBatchResultEntry#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'SqsDeleteMessageBatchResultEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SqsDeleteMessageBatchResultEntry(obj: SqsDeleteMessageBatchResultEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SqsMessage
 */
export interface SqsMessage {
  /**
   * @schema SqsMessage#MessageId
   */
  readonly messageId?: string;

  /**
   * @schema SqsMessage#ReceiptHandle
   */
  readonly receiptHandle?: string;

  /**
   * @schema SqsMessage#MD5OfBody
   */
  readonly md5OfBody?: string;

  /**
   * @schema SqsMessage#Body
   */
  readonly body?: string;

  /**
   * @schema SqsMessage#Attributes
   */
  readonly attributes?: { [key: string]: string };

  /**
   * @schema SqsMessage#MD5OfMessageAttributes
   */
  readonly md5OfMessageAttributes?: string;

  /**
   * @schema SqsMessage#MessageAttributes
   */
  readonly messageAttributes?: { [key: string]: SqsMessageAttributeValue };

}

/**
 * Converts an object of type 'SqsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SqsMessage(obj: SqsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MessageId': obj.messageId,
    'ReceiptHandle': obj.receiptHandle,
    'MD5OfBody': obj.md5OfBody,
    'Body': obj.body,
    'Attributes': ((obj.attributes) === undefined) ? undefined : (Object.entries(obj.attributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'MD5OfMessageAttributes': obj.md5OfMessageAttributes,
    'MessageAttributes': ((obj.messageAttributes) === undefined) ? undefined : (Object.entries(obj.messageAttributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_SqsMessageAttributeValue(i[1]) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SqsMessageAttributeValue
 */
export interface SqsMessageAttributeValue {
  /**
   * @schema SqsMessageAttributeValue#StringValue
   */
  readonly stringValue?: string;

  /**
   * @schema SqsMessageAttributeValue#BinaryValue
   */
  readonly binaryValue?: any;

  /**
   * @schema SqsMessageAttributeValue#StringListValues
   */
  readonly stringListValues?: string[];

  /**
   * @schema SqsMessageAttributeValue#BinaryListValues
   */
  readonly binaryListValues?: any[];

  /**
   * @schema SqsMessageAttributeValue#DataType
   */
  readonly dataType?: string;

}

/**
 * Converts an object of type 'SqsMessageAttributeValue' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SqsMessageAttributeValue(obj: SqsMessageAttributeValue | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StringValue': obj.stringValue,
    'BinaryValue': obj.binaryValue,
    'StringListValues': obj.stringListValues?.map(y => y),
    'BinaryListValues': obj.binaryListValues?.map(y => y),
    'DataType': obj.dataType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SqsMessageSystemAttributeValue
 */
export interface SqsMessageSystemAttributeValue {
  /**
   * @schema SqsMessageSystemAttributeValue#StringValue
   */
  readonly stringValue?: string;

  /**
   * @schema SqsMessageSystemAttributeValue#BinaryValue
   */
  readonly binaryValue?: any;

  /**
   * @schema SqsMessageSystemAttributeValue#StringListValues
   */
  readonly stringListValues?: string[];

  /**
   * @schema SqsMessageSystemAttributeValue#BinaryListValues
   */
  readonly binaryListValues?: any[];

  /**
   * @schema SqsMessageSystemAttributeValue#DataType
   */
  readonly dataType?: string;

}

/**
 * Converts an object of type 'SqsMessageSystemAttributeValue' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SqsMessageSystemAttributeValue(obj: SqsMessageSystemAttributeValue | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StringValue': obj.stringValue,
    'BinaryValue': obj.binaryValue,
    'StringListValues': obj.stringListValues?.map(y => y),
    'BinaryListValues': obj.binaryListValues?.map(y => y),
    'DataType': obj.dataType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SqsSendMessageBatchRequestEntry
 */
export interface SqsSendMessageBatchRequestEntry {
  /**
   * @schema SqsSendMessageBatchRequestEntry#Id
   */
  readonly id?: string;

  /**
   * @schema SqsSendMessageBatchRequestEntry#MessageBody
   */
  readonly messageBody?: string;

  /**
   * @schema SqsSendMessageBatchRequestEntry#DelaySeconds
   */
  readonly delaySeconds?: number;

  /**
   * @schema SqsSendMessageBatchRequestEntry#MessageAttributes
   */
  readonly messageAttributes?: { [key: string]: SqsMessageAttributeValue };

  /**
   * @schema SqsSendMessageBatchRequestEntry#MessageSystemAttributes
   */
  readonly messageSystemAttributes?: { [key: string]: SqsMessageSystemAttributeValue };

  /**
   * @schema SqsSendMessageBatchRequestEntry#MessageDeduplicationId
   */
  readonly messageDeduplicationId?: string;

  /**
   * @schema SqsSendMessageBatchRequestEntry#MessageGroupId
   */
  readonly messageGroupId?: string;

}

/**
 * Converts an object of type 'SqsSendMessageBatchRequestEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SqsSendMessageBatchRequestEntry(obj: SqsSendMessageBatchRequestEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'MessageBody': obj.messageBody,
    'DelaySeconds': obj.delaySeconds,
    'MessageAttributes': ((obj.messageAttributes) === undefined) ? undefined : (Object.entries(obj.messageAttributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_SqsMessageAttributeValue(i[1]) }), {})),
    'MessageSystemAttributes': ((obj.messageSystemAttributes) === undefined) ? undefined : (Object.entries(obj.messageSystemAttributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_SqsMessageSystemAttributeValue(i[1]) }), {})),
    'MessageDeduplicationId': obj.messageDeduplicationId,
    'MessageGroupId': obj.messageGroupId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SqsSendMessageBatchResultEntry
 */
export interface SqsSendMessageBatchResultEntry {
  /**
   * @schema SqsSendMessageBatchResultEntry#Id
   */
  readonly id?: string;

  /**
   * @schema SqsSendMessageBatchResultEntry#MessageId
   */
  readonly messageId?: string;

  /**
   * @schema SqsSendMessageBatchResultEntry#MD5OfMessageBody
   */
  readonly md5OfMessageBody?: string;

  /**
   * @schema SqsSendMessageBatchResultEntry#MD5OfMessageAttributes
   */
  readonly md5OfMessageAttributes?: string;

  /**
   * @schema SqsSendMessageBatchResultEntry#MD5OfMessageSystemAttributes
   */
  readonly md5OfMessageSystemAttributes?: string;

  /**
   * @schema SqsSendMessageBatchResultEntry#SequenceNumber
   */
  readonly sequenceNumber?: string;

}

/**
 * Converts an object of type 'SqsSendMessageBatchResultEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SqsSendMessageBatchResultEntry(obj: SqsSendMessageBatchResultEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'MessageId': obj.messageId,
    'MD5OfMessageBody': obj.md5OfMessageBody,
    'MD5OfMessageAttributes': obj.md5OfMessageAttributes,
    'MD5OfMessageSystemAttributes': obj.md5OfMessageSystemAttributes,
    'SequenceNumber': obj.sequenceNumber,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
