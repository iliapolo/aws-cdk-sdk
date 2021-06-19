/**
 * @schema SqsAddPermissionRequest
 */
export interface SqsAddPermissionRequest {
  /**
   * @schema SqsAddPermissionRequest#QueueUrl
   */
  readonly queueUrl: string;

  /**
   * @schema SqsAddPermissionRequest#Label
   */
  readonly label: string;

  /**
   * @schema SqsAddPermissionRequest#AWSAccountIds
   */
  readonly awsAccountIds: string[];

  /**
   * @schema SqsAddPermissionRequest#Actions
   */
  readonly actions: string[];

}

/**
 * @schema SqsChangeMessageVisibilityRequest
 */
export interface SqsChangeMessageVisibilityRequest {
  /**
   * @schema SqsChangeMessageVisibilityRequest#QueueUrl
   */
  readonly queueUrl: string;

  /**
   * @schema SqsChangeMessageVisibilityRequest#ReceiptHandle
   */
  readonly receiptHandle: string;

  /**
   * @schema SqsChangeMessageVisibilityRequest#VisibilityTimeout
   */
  readonly visibilityTimeout: number;

}

/**
 * @schema SqsChangeMessageVisibilityBatchRequest
 */
export interface SqsChangeMessageVisibilityBatchRequest {
  /**
   * @schema SqsChangeMessageVisibilityBatchRequest#QueueUrl
   */
  readonly queueUrl: string;

  /**
   * @schema SqsChangeMessageVisibilityBatchRequest#Entries
   */
  readonly entries: SqsChangeMessageVisibilityBatchRequestEntry[];

}

/**
 * @schema SqsChangeMessageVisibilityBatchResult
 */
export interface SqsChangeMessageVisibilityBatchResult {
  /**
   * @schema SqsChangeMessageVisibilityBatchResult#Successful
   */
  readonly successful: SqsChangeMessageVisibilityBatchResultEntry[];

  /**
   * @schema SqsChangeMessageVisibilityBatchResult#Failed
   */
  readonly failed: SqsBatchResultErrorEntry[];

}

/**
 * @schema SqsCreateQueueRequest
 */
export interface SqsCreateQueueRequest {
  /**
   * @schema SqsCreateQueueRequest#QueueName
   */
  readonly queueName: string;

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
 * @schema SqsCreateQueueResult
 */
export interface SqsCreateQueueResult {
  /**
   * @schema SqsCreateQueueResult#QueueUrl
   */
  readonly queueUrl?: string;

}

/**
 * @schema SqsDeleteMessageRequest
 */
export interface SqsDeleteMessageRequest {
  /**
   * @schema SqsDeleteMessageRequest#QueueUrl
   */
  readonly queueUrl: string;

  /**
   * @schema SqsDeleteMessageRequest#ReceiptHandle
   */
  readonly receiptHandle: string;

}

/**
 * @schema SqsDeleteMessageBatchRequest
 */
export interface SqsDeleteMessageBatchRequest {
  /**
   * @schema SqsDeleteMessageBatchRequest#QueueUrl
   */
  readonly queueUrl: string;

  /**
   * @schema SqsDeleteMessageBatchRequest#Entries
   */
  readonly entries: SqsDeleteMessageBatchRequestEntry[];

}

/**
 * @schema SqsDeleteMessageBatchResult
 */
export interface SqsDeleteMessageBatchResult {
  /**
   * @schema SqsDeleteMessageBatchResult#Successful
   */
  readonly successful: SqsDeleteMessageBatchResultEntry[];

  /**
   * @schema SqsDeleteMessageBatchResult#Failed
   */
  readonly failed: SqsBatchResultErrorEntry[];

}

/**
 * @schema SqsDeleteQueueRequest
 */
export interface SqsDeleteQueueRequest {
  /**
   * @schema SqsDeleteQueueRequest#QueueUrl
   */
  readonly queueUrl: string;

}

/**
 * @schema SqsGetQueueAttributesRequest
 */
export interface SqsGetQueueAttributesRequest {
  /**
   * @schema SqsGetQueueAttributesRequest#QueueUrl
   */
  readonly queueUrl: string;

  /**
   * @schema SqsGetQueueAttributesRequest#AttributeNames
   */
  readonly attributeNames?: string[];

}

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
 * @schema SqsGetQueueUrlRequest
 */
export interface SqsGetQueueUrlRequest {
  /**
   * @schema SqsGetQueueUrlRequest#QueueName
   */
  readonly queueName: string;

  /**
   * @schema SqsGetQueueUrlRequest#QueueOwnerAWSAccountId
   */
  readonly queueOwnerAwsAccountId?: string;

}

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
 * @schema SqsListDeadLetterSourceQueuesRequest
 */
export interface SqsListDeadLetterSourceQueuesRequest {
  /**
   * @schema SqsListDeadLetterSourceQueuesRequest#QueueUrl
   */
  readonly queueUrl: string;

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
 * @schema SqsListQueueTagsRequest
 */
export interface SqsListQueueTagsRequest {
  /**
   * @schema SqsListQueueTagsRequest#QueueUrl
   */
  readonly queueUrl: string;

}

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
 * @schema SqsPurgeQueueRequest
 */
export interface SqsPurgeQueueRequest {
  /**
   * @schema SqsPurgeQueueRequest#QueueUrl
   */
  readonly queueUrl: string;

}

/**
 * @schema SqsReceiveMessageRequest
 */
export interface SqsReceiveMessageRequest {
  /**
   * @schema SqsReceiveMessageRequest#QueueUrl
   */
  readonly queueUrl: string;

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
 * @schema SqsReceiveMessageResult
 */
export interface SqsReceiveMessageResult {
  /**
   * @schema SqsReceiveMessageResult#Messages
   */
  readonly messages?: SqsMessage[];

}

/**
 * @schema SqsRemovePermissionRequest
 */
export interface SqsRemovePermissionRequest {
  /**
   * @schema SqsRemovePermissionRequest#QueueUrl
   */
  readonly queueUrl: string;

  /**
   * @schema SqsRemovePermissionRequest#Label
   */
  readonly label: string;

}

/**
 * @schema SqsSendMessageRequest
 */
export interface SqsSendMessageRequest {
  /**
   * @schema SqsSendMessageRequest#QueueUrl
   */
  readonly queueUrl: string;

  /**
   * @schema SqsSendMessageRequest#MessageBody
   */
  readonly messageBody: string;

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
 * @schema SqsSendMessageBatchRequest
 */
export interface SqsSendMessageBatchRequest {
  /**
   * @schema SqsSendMessageBatchRequest#QueueUrl
   */
  readonly queueUrl: string;

  /**
   * @schema SqsSendMessageBatchRequest#Entries
   */
  readonly entries: SqsSendMessageBatchRequestEntry[];

}

/**
 * @schema SqsSendMessageBatchResult
 */
export interface SqsSendMessageBatchResult {
  /**
   * @schema SqsSendMessageBatchResult#Successful
   */
  readonly successful: SqsSendMessageBatchResultEntry[];

  /**
   * @schema SqsSendMessageBatchResult#Failed
   */
  readonly failed: SqsBatchResultErrorEntry[];

}

/**
 * @schema SqsSetQueueAttributesRequest
 */
export interface SqsSetQueueAttributesRequest {
  /**
   * @schema SqsSetQueueAttributesRequest#QueueUrl
   */
  readonly queueUrl: string;

  /**
   * @schema SqsSetQueueAttributesRequest#Attributes
   */
  readonly attributes: { [key: string]: string };

}

/**
 * @schema SqsTagQueueRequest
 */
export interface SqsTagQueueRequest {
  /**
   * @schema SqsTagQueueRequest#QueueUrl
   */
  readonly queueUrl: string;

  /**
   * @schema SqsTagQueueRequest#Tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema SqsUntagQueueRequest
 */
export interface SqsUntagQueueRequest {
  /**
   * @schema SqsUntagQueueRequest#QueueUrl
   */
  readonly queueUrl: string;

  /**
   * @schema SqsUntagQueueRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema SqsChangeMessageVisibilityBatchRequestEntry
 */
export interface SqsChangeMessageVisibilityBatchRequestEntry {
  /**
   * @schema SqsChangeMessageVisibilityBatchRequestEntry#Id
   */
  readonly id: string;

  /**
   * @schema SqsChangeMessageVisibilityBatchRequestEntry#ReceiptHandle
   */
  readonly receiptHandle: string;

  /**
   * @schema SqsChangeMessageVisibilityBatchRequestEntry#VisibilityTimeout
   */
  readonly visibilityTimeout?: number;

}

/**
 * @schema SqsChangeMessageVisibilityBatchResultEntry
 */
export interface SqsChangeMessageVisibilityBatchResultEntry {
  /**
   * @schema SqsChangeMessageVisibilityBatchResultEntry#Id
   */
  readonly id: string;

}

/**
 * @schema SqsBatchResultErrorEntry
 */
export interface SqsBatchResultErrorEntry {
  /**
   * @schema SqsBatchResultErrorEntry#Id
   */
  readonly id: string;

  /**
   * @schema SqsBatchResultErrorEntry#SenderFault
   */
  readonly senderFault: boolean;

  /**
   * @schema SqsBatchResultErrorEntry#Code
   */
  readonly code: string;

  /**
   * @schema SqsBatchResultErrorEntry#Message
   */
  readonly message?: string;

}

/**
 * @schema SqsDeleteMessageBatchRequestEntry
 */
export interface SqsDeleteMessageBatchRequestEntry {
  /**
   * @schema SqsDeleteMessageBatchRequestEntry#Id
   */
  readonly id: string;

  /**
   * @schema SqsDeleteMessageBatchRequestEntry#ReceiptHandle
   */
  readonly receiptHandle: string;

}

/**
 * @schema SqsDeleteMessageBatchResultEntry
 */
export interface SqsDeleteMessageBatchResultEntry {
  /**
   * @schema SqsDeleteMessageBatchResultEntry#Id
   */
  readonly id: string;

}

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
  readonly dataType: string;

}

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
  readonly dataType: string;

}

/**
 * @schema SqsSendMessageBatchRequestEntry
 */
export interface SqsSendMessageBatchRequestEntry {
  /**
   * @schema SqsSendMessageBatchRequestEntry#Id
   */
  readonly id: string;

  /**
   * @schema SqsSendMessageBatchRequestEntry#MessageBody
   */
  readonly messageBody: string;

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
 * @schema SqsSendMessageBatchResultEntry
 */
export interface SqsSendMessageBatchResultEntry {
  /**
   * @schema SqsSendMessageBatchResultEntry#Id
   */
  readonly id: string;

  /**
   * @schema SqsSendMessageBatchResultEntry#MessageId
   */
  readonly messageId: string;

  /**
   * @schema SqsSendMessageBatchResultEntry#MD5OfMessageBody
   */
  readonly md5OfMessageBody: string;

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
