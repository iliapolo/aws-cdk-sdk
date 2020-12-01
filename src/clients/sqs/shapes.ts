/**
 * @schema AddPermissionRequest
 */
export interface AddPermissionRequest {
  /**
   * @schema AddPermissionRequest#QueueUrl
   */
  readonly queueUrl: string;

  /**
   * @schema AddPermissionRequest#Label
   */
  readonly label: string;

  /**
   * @schema AddPermissionRequest#AWSAccountIds
   */
  readonly awsAccountIds: string[];

  /**
   * @schema AddPermissionRequest#Actions
   */
  readonly actions: string[];

}

/**
 * @schema ChangeMessageVisibilityRequest
 */
export interface ChangeMessageVisibilityRequest {
  /**
   * @schema ChangeMessageVisibilityRequest#QueueUrl
   */
  readonly queueUrl: string;

  /**
   * @schema ChangeMessageVisibilityRequest#ReceiptHandle
   */
  readonly receiptHandle: string;

  /**
   * @schema ChangeMessageVisibilityRequest#VisibilityTimeout
   */
  readonly visibilityTimeout: number;

}

/**
 * @schema ChangeMessageVisibilityBatchRequest
 */
export interface ChangeMessageVisibilityBatchRequest {
  /**
   * @schema ChangeMessageVisibilityBatchRequest#QueueUrl
   */
  readonly queueUrl: string;

  /**
   * @schema ChangeMessageVisibilityBatchRequest#Entries
   */
  readonly entries: ChangeMessageVisibilityBatchRequestEntry[];

}

/**
 * @schema ChangeMessageVisibilityBatchResult
 */
export interface ChangeMessageVisibilityBatchResult {
  /**
   * @schema ChangeMessageVisibilityBatchResult#Successful
   */
  readonly successful: ChangeMessageVisibilityBatchResultEntry[];

  /**
   * @schema ChangeMessageVisibilityBatchResult#Failed
   */
  readonly failed: BatchResultErrorEntry[];

}

/**
 * @schema CreateQueueRequest
 */
export interface CreateQueueRequest {
  /**
   * @schema CreateQueueRequest#QueueName
   */
  readonly queueName: string;

  /**
   * @schema CreateQueueRequest#Attributes
   */
  readonly attributes?: { [key: string]: string };

  /**
   * @schema CreateQueueRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateQueueResult
 */
export interface CreateQueueResult {
  /**
   * @schema CreateQueueResult#QueueUrl
   */
  readonly queueUrl?: string;

}

/**
 * @schema DeleteMessageRequest
 */
export interface DeleteMessageRequest {
  /**
   * @schema DeleteMessageRequest#QueueUrl
   */
  readonly queueUrl: string;

  /**
   * @schema DeleteMessageRequest#ReceiptHandle
   */
  readonly receiptHandle: string;

}

/**
 * @schema DeleteMessageBatchRequest
 */
export interface DeleteMessageBatchRequest {
  /**
   * @schema DeleteMessageBatchRequest#QueueUrl
   */
  readonly queueUrl: string;

  /**
   * @schema DeleteMessageBatchRequest#Entries
   */
  readonly entries: DeleteMessageBatchRequestEntry[];

}

/**
 * @schema DeleteMessageBatchResult
 */
export interface DeleteMessageBatchResult {
  /**
   * @schema DeleteMessageBatchResult#Successful
   */
  readonly successful: DeleteMessageBatchResultEntry[];

  /**
   * @schema DeleteMessageBatchResult#Failed
   */
  readonly failed: BatchResultErrorEntry[];

}

/**
 * @schema DeleteQueueRequest
 */
export interface DeleteQueueRequest {
  /**
   * @schema DeleteQueueRequest#QueueUrl
   */
  readonly queueUrl: string;

}

/**
 * @schema GetQueueAttributesRequest
 */
export interface GetQueueAttributesRequest {
  /**
   * @schema GetQueueAttributesRequest#QueueUrl
   */
  readonly queueUrl: string;

  /**
   * @schema GetQueueAttributesRequest#AttributeNames
   */
  readonly attributeNames?: string[];

}

/**
 * @schema GetQueueAttributesResult
 */
export interface GetQueueAttributesResult {
  /**
   * @schema GetQueueAttributesResult#Attributes
   */
  readonly attributes?: { [key: string]: string };

}

/**
 * @schema GetQueueUrlRequest
 */
export interface GetQueueUrlRequest {
  /**
   * @schema GetQueueUrlRequest#QueueName
   */
  readonly queueName: string;

  /**
   * @schema GetQueueUrlRequest#QueueOwnerAWSAccountId
   */
  readonly queueOwnerAwsAccountId?: string;

}

/**
 * @schema GetQueueUrlResult
 */
export interface GetQueueUrlResult {
  /**
   * @schema GetQueueUrlResult#QueueUrl
   */
  readonly queueUrl?: string;

}

/**
 * @schema ListDeadLetterSourceQueuesRequest
 */
export interface ListDeadLetterSourceQueuesRequest {
  /**
   * @schema ListDeadLetterSourceQueuesRequest#QueueUrl
   */
  readonly queueUrl: string;

  /**
   * @schema ListDeadLetterSourceQueuesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListDeadLetterSourceQueuesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListDeadLetterSourceQueuesResult
 */
export interface ListDeadLetterSourceQueuesResult {
  /**
   * @schema ListDeadLetterSourceQueuesResult#queueUrls
   */
  readonly queueUrls: string[];

  /**
   * @schema ListDeadLetterSourceQueuesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListQueueTagsRequest
 */
export interface ListQueueTagsRequest {
  /**
   * @schema ListQueueTagsRequest#QueueUrl
   */
  readonly queueUrl: string;

}

/**
 * @schema ListQueueTagsResult
 */
export interface ListQueueTagsResult {
  /**
   * @schema ListQueueTagsResult#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema ListQueuesRequest
 */
export interface ListQueuesRequest {
  /**
   * @schema ListQueuesRequest#QueueNamePrefix
   */
  readonly queueNamePrefix?: string;

  /**
   * @schema ListQueuesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListQueuesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListQueuesResult
 */
export interface ListQueuesResult {
  /**
   * @schema ListQueuesResult#QueueUrls
   */
  readonly queueUrls?: string[];

  /**
   * @schema ListQueuesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema PurgeQueueRequest
 */
export interface PurgeQueueRequest {
  /**
   * @schema PurgeQueueRequest#QueueUrl
   */
  readonly queueUrl: string;

}

/**
 * @schema ReceiveMessageRequest
 */
export interface ReceiveMessageRequest {
  /**
   * @schema ReceiveMessageRequest#QueueUrl
   */
  readonly queueUrl: string;

  /**
   * @schema ReceiveMessageRequest#AttributeNames
   */
  readonly attributeNames?: string[];

  /**
   * @schema ReceiveMessageRequest#MessageAttributeNames
   */
  readonly messageAttributeNames?: string[];

  /**
   * @schema ReceiveMessageRequest#MaxNumberOfMessages
   */
  readonly maxNumberOfMessages?: number;

  /**
   * @schema ReceiveMessageRequest#VisibilityTimeout
   */
  readonly visibilityTimeout?: number;

  /**
   * @schema ReceiveMessageRequest#WaitTimeSeconds
   */
  readonly waitTimeSeconds?: number;

  /**
   * @schema ReceiveMessageRequest#ReceiveRequestAttemptId
   */
  readonly receiveRequestAttemptId?: string;

}

/**
 * @schema ReceiveMessageResult
 */
export interface ReceiveMessageResult {
  /**
   * @schema ReceiveMessageResult#Messages
   */
  readonly messages?: Message[];

}

/**
 * @schema RemovePermissionRequest
 */
export interface RemovePermissionRequest {
  /**
   * @schema RemovePermissionRequest#QueueUrl
   */
  readonly queueUrl: string;

  /**
   * @schema RemovePermissionRequest#Label
   */
  readonly label: string;

}

/**
 * @schema SendMessageRequest
 */
export interface SendMessageRequest {
  /**
   * @schema SendMessageRequest#QueueUrl
   */
  readonly queueUrl: string;

  /**
   * @schema SendMessageRequest#MessageBody
   */
  readonly messageBody: string;

  /**
   * @schema SendMessageRequest#DelaySeconds
   */
  readonly delaySeconds?: number;

  /**
   * @schema SendMessageRequest#MessageAttributes
   */
  readonly messageAttributes?: { [key: string]: MessageAttributeValue };

  /**
   * @schema SendMessageRequest#MessageSystemAttributes
   */
  readonly messageSystemAttributes?: { [key: string]: MessageSystemAttributeValue };

  /**
   * @schema SendMessageRequest#MessageDeduplicationId
   */
  readonly messageDeduplicationId?: string;

  /**
   * @schema SendMessageRequest#MessageGroupId
   */
  readonly messageGroupId?: string;

}

/**
 * @schema SendMessageResult
 */
export interface SendMessageResult {
  /**
   * @schema SendMessageResult#MD5OfMessageBody
   */
  readonly md5OfMessageBody?: string;

  /**
   * @schema SendMessageResult#MD5OfMessageAttributes
   */
  readonly md5OfMessageAttributes?: string;

  /**
   * @schema SendMessageResult#MD5OfMessageSystemAttributes
   */
  readonly md5OfMessageSystemAttributes?: string;

  /**
   * @schema SendMessageResult#MessageId
   */
  readonly messageId?: string;

  /**
   * @schema SendMessageResult#SequenceNumber
   */
  readonly sequenceNumber?: string;

}

/**
 * @schema SendMessageBatchRequest
 */
export interface SendMessageBatchRequest {
  /**
   * @schema SendMessageBatchRequest#QueueUrl
   */
  readonly queueUrl: string;

  /**
   * @schema SendMessageBatchRequest#Entries
   */
  readonly entries: SendMessageBatchRequestEntry[];

}

/**
 * @schema SendMessageBatchResult
 */
export interface SendMessageBatchResult {
  /**
   * @schema SendMessageBatchResult#Successful
   */
  readonly successful: SendMessageBatchResultEntry[];

  /**
   * @schema SendMessageBatchResult#Failed
   */
  readonly failed: BatchResultErrorEntry[];

}

/**
 * @schema SetQueueAttributesRequest
 */
export interface SetQueueAttributesRequest {
  /**
   * @schema SetQueueAttributesRequest#QueueUrl
   */
  readonly queueUrl: string;

  /**
   * @schema SetQueueAttributesRequest#Attributes
   */
  readonly attributes: { [key: string]: string };

}

/**
 * @schema TagQueueRequest
 */
export interface TagQueueRequest {
  /**
   * @schema TagQueueRequest#QueueUrl
   */
  readonly queueUrl: string;

  /**
   * @schema TagQueueRequest#Tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema UntagQueueRequest
 */
export interface UntagQueueRequest {
  /**
   * @schema UntagQueueRequest#QueueUrl
   */
  readonly queueUrl: string;

  /**
   * @schema UntagQueueRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema ChangeMessageVisibilityBatchRequestEntry
 */
export interface ChangeMessageVisibilityBatchRequestEntry {
  /**
   * @schema ChangeMessageVisibilityBatchRequestEntry#Id
   */
  readonly id: string;

  /**
   * @schema ChangeMessageVisibilityBatchRequestEntry#ReceiptHandle
   */
  readonly receiptHandle: string;

  /**
   * @schema ChangeMessageVisibilityBatchRequestEntry#VisibilityTimeout
   */
  readonly visibilityTimeout?: number;

}

/**
 * @schema ChangeMessageVisibilityBatchResultEntry
 */
export interface ChangeMessageVisibilityBatchResultEntry {
  /**
   * @schema ChangeMessageVisibilityBatchResultEntry#Id
   */
  readonly id: string;

}

/**
 * @schema BatchResultErrorEntry
 */
export interface BatchResultErrorEntry {
  /**
   * @schema BatchResultErrorEntry#Id
   */
  readonly id: string;

  /**
   * @schema BatchResultErrorEntry#SenderFault
   */
  readonly senderFault: boolean;

  /**
   * @schema BatchResultErrorEntry#Code
   */
  readonly code: string;

  /**
   * @schema BatchResultErrorEntry#Message
   */
  readonly message?: string;

}

/**
 * @schema DeleteMessageBatchRequestEntry
 */
export interface DeleteMessageBatchRequestEntry {
  /**
   * @schema DeleteMessageBatchRequestEntry#Id
   */
  readonly id: string;

  /**
   * @schema DeleteMessageBatchRequestEntry#ReceiptHandle
   */
  readonly receiptHandle: string;

}

/**
 * @schema DeleteMessageBatchResultEntry
 */
export interface DeleteMessageBatchResultEntry {
  /**
   * @schema DeleteMessageBatchResultEntry#Id
   */
  readonly id: string;

}

/**
 * @schema Message
 */
export interface Message {
  /**
   * @schema Message#MessageId
   */
  readonly messageId?: string;

  /**
   * @schema Message#ReceiptHandle
   */
  readonly receiptHandle?: string;

  /**
   * @schema Message#MD5OfBody
   */
  readonly md5OfBody?: string;

  /**
   * @schema Message#Body
   */
  readonly body?: string;

  /**
   * @schema Message#Attributes
   */
  readonly attributes?: { [key: string]: string };

  /**
   * @schema Message#MD5OfMessageAttributes
   */
  readonly md5OfMessageAttributes?: string;

  /**
   * @schema Message#MessageAttributes
   */
  readonly messageAttributes?: { [key: string]: MessageAttributeValue };

}

/**
 * @schema MessageAttributeValue
 */
export interface MessageAttributeValue {
  /**
   * @schema MessageAttributeValue#StringValue
   */
  readonly stringValue?: string;

  /**
   * @schema MessageAttributeValue#BinaryValue
   */
  readonly binaryValue?: any;

  /**
   * @schema MessageAttributeValue#StringListValues
   */
  readonly stringListValues?: string[];

  /**
   * @schema MessageAttributeValue#BinaryListValues
   */
  readonly binaryListValues?: any[];

  /**
   * @schema MessageAttributeValue#DataType
   */
  readonly dataType: string;

}

/**
 * @schema MessageSystemAttributeValue
 */
export interface MessageSystemAttributeValue {
  /**
   * @schema MessageSystemAttributeValue#StringValue
   */
  readonly stringValue?: string;

  /**
   * @schema MessageSystemAttributeValue#BinaryValue
   */
  readonly binaryValue?: any;

  /**
   * @schema MessageSystemAttributeValue#StringListValues
   */
  readonly stringListValues?: string[];

  /**
   * @schema MessageSystemAttributeValue#BinaryListValues
   */
  readonly binaryListValues?: any[];

  /**
   * @schema MessageSystemAttributeValue#DataType
   */
  readonly dataType: string;

}

/**
 * @schema SendMessageBatchRequestEntry
 */
export interface SendMessageBatchRequestEntry {
  /**
   * @schema SendMessageBatchRequestEntry#Id
   */
  readonly id: string;

  /**
   * @schema SendMessageBatchRequestEntry#MessageBody
   */
  readonly messageBody: string;

  /**
   * @schema SendMessageBatchRequestEntry#DelaySeconds
   */
  readonly delaySeconds?: number;

  /**
   * @schema SendMessageBatchRequestEntry#MessageAttributes
   */
  readonly messageAttributes?: { [key: string]: MessageAttributeValue };

  /**
   * @schema SendMessageBatchRequestEntry#MessageSystemAttributes
   */
  readonly messageSystemAttributes?: { [key: string]: MessageSystemAttributeValue };

  /**
   * @schema SendMessageBatchRequestEntry#MessageDeduplicationId
   */
  readonly messageDeduplicationId?: string;

  /**
   * @schema SendMessageBatchRequestEntry#MessageGroupId
   */
  readonly messageGroupId?: string;

}

/**
 * @schema SendMessageBatchResultEntry
 */
export interface SendMessageBatchResultEntry {
  /**
   * @schema SendMessageBatchResultEntry#Id
   */
  readonly id: string;

  /**
   * @schema SendMessageBatchResultEntry#MessageId
   */
  readonly messageId: string;

  /**
   * @schema SendMessageBatchResultEntry#MD5OfMessageBody
   */
  readonly md5OfMessageBody: string;

  /**
   * @schema SendMessageBatchResultEntry#MD5OfMessageAttributes
   */
  readonly md5OfMessageAttributes?: string;

  /**
   * @schema SendMessageBatchResultEntry#MD5OfMessageSystemAttributes
   */
  readonly md5OfMessageSystemAttributes?: string;

  /**
   * @schema SendMessageBatchResultEntry#SequenceNumber
   */
  readonly sequenceNumber?: string;

}
