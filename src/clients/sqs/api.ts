import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class SqsClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public addPermission(input: shapes.SqsAddPermissionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addPermission',
        service: 'SQS',
        physicalResourceId: cr.PhysicalResourceId.of('SQS.AddPermission'),
        parameters: {
          QueueUrl: input.queueUrl,
          Label: input.label,
          AWSAccountIds: input.awsAccountIds,
          Actions: input.actions,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AddPermission', props);
  }

  public changeMessageVisibility(input: shapes.SqsChangeMessageVisibilityRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'changeMessageVisibility',
        service: 'SQS',
        physicalResourceId: cr.PhysicalResourceId.of('SQS.ChangeMessageVisibility'),
        parameters: {
          QueueUrl: input.queueUrl,
          ReceiptHandle: input.receiptHandle,
          VisibilityTimeout: input.visibilityTimeout,
        },
      },
    };
    new cr.AwsCustomResource(this, 'ChangeMessageVisibility', props);
  }

  public changeMessageVisibilityBatch(input: shapes.SqsChangeMessageVisibilityBatchRequest): SQSResponsesChangeMessageVisibilityBatch {
    return new SQSResponsesChangeMessageVisibilityBatch(this, this.__resources, input);
  }

  public createQueue(input: shapes.SqsCreateQueueRequest): SQSResponsesCreateQueue {
    return new SQSResponsesCreateQueue(this, this.__resources, input);
  }

  public deleteMessage(input: shapes.SqsDeleteMessageRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteMessage',
        service: 'SQS',
        physicalResourceId: cr.PhysicalResourceId.of('SQS.DeleteMessage'),
        parameters: {
          QueueUrl: input.queueUrl,
          ReceiptHandle: input.receiptHandle,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteMessage', props);
  }

  public deleteMessageBatch(input: shapes.SqsDeleteMessageBatchRequest): SQSResponsesDeleteMessageBatch {
    return new SQSResponsesDeleteMessageBatch(this, this.__resources, input);
  }

  public deleteQueue(input: shapes.SqsDeleteQueueRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteQueue',
        service: 'SQS',
        physicalResourceId: cr.PhysicalResourceId.of('SQS.DeleteQueue'),
        parameters: {
          QueueUrl: input.queueUrl,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteQueue', props);
  }

  public fetchQueueAttributes(input: shapes.SqsGetQueueAttributesRequest): SQSResponsesFetchQueueAttributes {
    return new SQSResponsesFetchQueueAttributes(this, this.__resources, input);
  }

  public fetchQueueUrl(input: shapes.SqsGetQueueUrlRequest): SQSResponsesFetchQueueUrl {
    return new SQSResponsesFetchQueueUrl(this, this.__resources, input);
  }

  public listDeadLetterSourceQueues(input: shapes.SqsListDeadLetterSourceQueuesRequest): SQSResponsesListDeadLetterSourceQueues {
    return new SQSResponsesListDeadLetterSourceQueues(this, this.__resources, input);
  }

  public listQueueTags(input: shapes.SqsListQueueTagsRequest): SQSResponsesListQueueTags {
    return new SQSResponsesListQueueTags(this, this.__resources, input);
  }

  public listQueues(input: shapes.SqsListQueuesRequest): SQSResponsesListQueues {
    return new SQSResponsesListQueues(this, this.__resources, input);
  }

  public purgeQueue(input: shapes.SqsPurgeQueueRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'purgeQueue',
        service: 'SQS',
        physicalResourceId: cr.PhysicalResourceId.of('SQS.PurgeQueue'),
        parameters: {
          QueueUrl: input.queueUrl,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PurgeQueue', props);
  }

  public receiveMessage(input: shapes.SqsReceiveMessageRequest): SQSResponsesReceiveMessage {
    return new SQSResponsesReceiveMessage(this, this.__resources, input);
  }

  public removePermission(input: shapes.SqsRemovePermissionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'removePermission',
        service: 'SQS',
        physicalResourceId: cr.PhysicalResourceId.of('SQS.RemovePermission'),
        parameters: {
          QueueUrl: input.queueUrl,
          Label: input.label,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RemovePermission', props);
  }

  public sendMessage(input: shapes.SqsSendMessageRequest): SQSResponsesSendMessage {
    return new SQSResponsesSendMessage(this, this.__resources, input);
  }

  public sendMessageBatch(input: shapes.SqsSendMessageBatchRequest): SQSResponsesSendMessageBatch {
    return new SQSResponsesSendMessageBatch(this, this.__resources, input);
  }

  public setQueueAttributes(input: shapes.SqsSetQueueAttributesRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'setQueueAttributes',
        service: 'SQS',
        physicalResourceId: cr.PhysicalResourceId.of('SQS.SetQueueAttributes'),
        parameters: {
          QueueUrl: input.queueUrl,
          Attributes: input.attributes,
        },
      },
    };
    new cr.AwsCustomResource(this, 'SetQueueAttributes', props);
  }

  public tagQueue(input: shapes.SqsTagQueueRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagQueue',
        service: 'SQS',
        physicalResourceId: cr.PhysicalResourceId.of('SQS.TagQueue'),
        parameters: {
          QueueUrl: input.queueUrl,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagQueue', props);
  }

  public untagQueue(input: shapes.SqsUntagQueueRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagQueue',
        service: 'SQS',
        physicalResourceId: cr.PhysicalResourceId.of('SQS.UntagQueue'),
        parameters: {
          QueueUrl: input.queueUrl,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagQueue', props);
  }

}

export class SQSResponsesChangeMessageVisibilityBatch {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SqsChangeMessageVisibilityBatchRequest) {
  }

  public get successful(): shapes.SqsChangeMessageVisibilityBatchResultEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'changeMessageVisibilityBatch',
        service: 'SQS',
        physicalResourceId: cr.PhysicalResourceId.of('SQS.ChangeMessageVisibilityBatch.Successful'),
        outputPath: 'Successful',
        parameters: {
          QueueUrl: this.__input.queueUrl,
          Entries: this.__input.entries,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ChangeMessageVisibilityBatch.Successful', props);
    return resource.getResponseField('Successful') as unknown as shapes.SqsChangeMessageVisibilityBatchResultEntry[];
  }

  public get failed(): shapes.SqsBatchResultErrorEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'changeMessageVisibilityBatch',
        service: 'SQS',
        physicalResourceId: cr.PhysicalResourceId.of('SQS.ChangeMessageVisibilityBatch.Failed'),
        outputPath: 'Failed',
        parameters: {
          QueueUrl: this.__input.queueUrl,
          Entries: this.__input.entries,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ChangeMessageVisibilityBatch.Failed', props);
    return resource.getResponseField('Failed') as unknown as shapes.SqsBatchResultErrorEntry[];
  }

}

export class SQSResponsesCreateQueue {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SqsCreateQueueRequest) {
  }

  public get queueUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createQueue',
        service: 'SQS',
        physicalResourceId: cr.PhysicalResourceId.of('SQS.CreateQueue.QueueUrl'),
        outputPath: 'QueueUrl',
        parameters: {
          QueueName: this.__input.queueName,
          Attributes: this.__input.attributes,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateQueue.QueueUrl', props);
    return resource.getResponseField('QueueUrl') as unknown as string;
  }

}

export class SQSResponsesDeleteMessageBatch {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SqsDeleteMessageBatchRequest) {
  }

  public get successful(): shapes.SqsDeleteMessageBatchResultEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteMessageBatch',
        service: 'SQS',
        physicalResourceId: cr.PhysicalResourceId.of('SQS.DeleteMessageBatch.Successful'),
        outputPath: 'Successful',
        parameters: {
          QueueUrl: this.__input.queueUrl,
          Entries: this.__input.entries,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteMessageBatch.Successful', props);
    return resource.getResponseField('Successful') as unknown as shapes.SqsDeleteMessageBatchResultEntry[];
  }

  public get failed(): shapes.SqsBatchResultErrorEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteMessageBatch',
        service: 'SQS',
        physicalResourceId: cr.PhysicalResourceId.of('SQS.DeleteMessageBatch.Failed'),
        outputPath: 'Failed',
        parameters: {
          QueueUrl: this.__input.queueUrl,
          Entries: this.__input.entries,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteMessageBatch.Failed', props);
    return resource.getResponseField('Failed') as unknown as shapes.SqsBatchResultErrorEntry[];
  }

}

export class SQSResponsesFetchQueueAttributes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SqsGetQueueAttributesRequest) {
  }

  public get attributes(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getQueueAttributes',
        service: 'SQS',
        physicalResourceId: cr.PhysicalResourceId.of('SQS.GetQueueAttributes.Attributes'),
        outputPath: 'Attributes',
        parameters: {
          QueueUrl: this.__input.queueUrl,
          AttributeNames: this.__input.attributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetQueueAttributes.Attributes', props);
    return resource.getResponseField('Attributes') as unknown as Record<string, string>;
  }

}

export class SQSResponsesFetchQueueUrl {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SqsGetQueueUrlRequest) {
  }

  public get queueUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getQueueUrl',
        service: 'SQS',
        physicalResourceId: cr.PhysicalResourceId.of('SQS.GetQueueUrl.QueueUrl'),
        outputPath: 'QueueUrl',
        parameters: {
          QueueName: this.__input.queueName,
          QueueOwnerAWSAccountId: this.__input.queueOwnerAwsAccountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetQueueUrl.QueueUrl', props);
    return resource.getResponseField('QueueUrl') as unknown as string;
  }

}

export class SQSResponsesListDeadLetterSourceQueues {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SqsListDeadLetterSourceQueuesRequest) {
  }

  public get queueUrls(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDeadLetterSourceQueues',
        service: 'SQS',
        physicalResourceId: cr.PhysicalResourceId.of('SQS.ListDeadLetterSourceQueues.queueUrls'),
        outputPath: 'queueUrls',
        parameters: {
          QueueUrl: this.__input.queueUrl,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDeadLetterSourceQueues.queueUrls', props);
    return resource.getResponseField('queueUrls') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDeadLetterSourceQueues',
        service: 'SQS',
        physicalResourceId: cr.PhysicalResourceId.of('SQS.ListDeadLetterSourceQueues.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          QueueUrl: this.__input.queueUrl,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDeadLetterSourceQueues.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SQSResponsesListQueueTags {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SqsListQueueTagsRequest) {
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listQueueTags',
        service: 'SQS',
        physicalResourceId: cr.PhysicalResourceId.of('SQS.ListQueueTags.Tags'),
        outputPath: 'Tags',
        parameters: {
          QueueUrl: this.__input.queueUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListQueueTags.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class SQSResponsesListQueues {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SqsListQueuesRequest) {
  }

  public get queueUrls(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listQueues',
        service: 'SQS',
        physicalResourceId: cr.PhysicalResourceId.of('SQS.ListQueues.QueueUrls'),
        outputPath: 'QueueUrls',
        parameters: {
          QueueNamePrefix: this.__input.queueNamePrefix,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListQueues.QueueUrls', props);
    return resource.getResponseField('QueueUrls') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listQueues',
        service: 'SQS',
        physicalResourceId: cr.PhysicalResourceId.of('SQS.ListQueues.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          QueueNamePrefix: this.__input.queueNamePrefix,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListQueues.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SQSResponsesReceiveMessage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SqsReceiveMessageRequest) {
  }

  public get messages(): shapes.SqsMessage[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'receiveMessage',
        service: 'SQS',
        physicalResourceId: cr.PhysicalResourceId.of('SQS.ReceiveMessage.Messages'),
        outputPath: 'Messages',
        parameters: {
          QueueUrl: this.__input.queueUrl,
          AttributeNames: this.__input.attributeNames,
          MessageAttributeNames: this.__input.messageAttributeNames,
          MaxNumberOfMessages: this.__input.maxNumberOfMessages,
          VisibilityTimeout: this.__input.visibilityTimeout,
          WaitTimeSeconds: this.__input.waitTimeSeconds,
          ReceiveRequestAttemptId: this.__input.receiveRequestAttemptId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReceiveMessage.Messages', props);
    return resource.getResponseField('Messages') as unknown as shapes.SqsMessage[];
  }

}

export class SQSResponsesSendMessage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SqsSendMessageRequest) {
  }

  public get md5OfMessageBody(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendMessage',
        service: 'SQS',
        physicalResourceId: cr.PhysicalResourceId.of('SQS.SendMessage.MD5OfMessageBody'),
        outputPath: 'MD5OfMessageBody',
        parameters: {
          QueueUrl: this.__input.queueUrl,
          MessageBody: this.__input.messageBody,
          DelaySeconds: this.__input.delaySeconds,
          MessageAttributes: this.__input.messageAttributes,
          MessageSystemAttributes: this.__input.messageSystemAttributes,
          MessageDeduplicationId: this.__input.messageDeduplicationId,
          MessageGroupId: this.__input.messageGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendMessage.MD5OfMessageBody', props);
    return resource.getResponseField('MD5OfMessageBody') as unknown as string;
  }

  public get md5OfMessageAttributes(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendMessage',
        service: 'SQS',
        physicalResourceId: cr.PhysicalResourceId.of('SQS.SendMessage.MD5OfMessageAttributes'),
        outputPath: 'MD5OfMessageAttributes',
        parameters: {
          QueueUrl: this.__input.queueUrl,
          MessageBody: this.__input.messageBody,
          DelaySeconds: this.__input.delaySeconds,
          MessageAttributes: this.__input.messageAttributes,
          MessageSystemAttributes: this.__input.messageSystemAttributes,
          MessageDeduplicationId: this.__input.messageDeduplicationId,
          MessageGroupId: this.__input.messageGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendMessage.MD5OfMessageAttributes', props);
    return resource.getResponseField('MD5OfMessageAttributes') as unknown as string;
  }

  public get md5OfMessageSystemAttributes(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendMessage',
        service: 'SQS',
        physicalResourceId: cr.PhysicalResourceId.of('SQS.SendMessage.MD5OfMessageSystemAttributes'),
        outputPath: 'MD5OfMessageSystemAttributes',
        parameters: {
          QueueUrl: this.__input.queueUrl,
          MessageBody: this.__input.messageBody,
          DelaySeconds: this.__input.delaySeconds,
          MessageAttributes: this.__input.messageAttributes,
          MessageSystemAttributes: this.__input.messageSystemAttributes,
          MessageDeduplicationId: this.__input.messageDeduplicationId,
          MessageGroupId: this.__input.messageGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendMessage.MD5OfMessageSystemAttributes', props);
    return resource.getResponseField('MD5OfMessageSystemAttributes') as unknown as string;
  }

  public get messageId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendMessage',
        service: 'SQS',
        physicalResourceId: cr.PhysicalResourceId.of('SQS.SendMessage.MessageId'),
        outputPath: 'MessageId',
        parameters: {
          QueueUrl: this.__input.queueUrl,
          MessageBody: this.__input.messageBody,
          DelaySeconds: this.__input.delaySeconds,
          MessageAttributes: this.__input.messageAttributes,
          MessageSystemAttributes: this.__input.messageSystemAttributes,
          MessageDeduplicationId: this.__input.messageDeduplicationId,
          MessageGroupId: this.__input.messageGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendMessage.MessageId', props);
    return resource.getResponseField('MessageId') as unknown as string;
  }

  public get sequenceNumber(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendMessage',
        service: 'SQS',
        physicalResourceId: cr.PhysicalResourceId.of('SQS.SendMessage.SequenceNumber'),
        outputPath: 'SequenceNumber',
        parameters: {
          QueueUrl: this.__input.queueUrl,
          MessageBody: this.__input.messageBody,
          DelaySeconds: this.__input.delaySeconds,
          MessageAttributes: this.__input.messageAttributes,
          MessageSystemAttributes: this.__input.messageSystemAttributes,
          MessageDeduplicationId: this.__input.messageDeduplicationId,
          MessageGroupId: this.__input.messageGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendMessage.SequenceNumber', props);
    return resource.getResponseField('SequenceNumber') as unknown as string;
  }

}

export class SQSResponsesSendMessageBatch {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SqsSendMessageBatchRequest) {
  }

  public get successful(): shapes.SqsSendMessageBatchResultEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendMessageBatch',
        service: 'SQS',
        physicalResourceId: cr.PhysicalResourceId.of('SQS.SendMessageBatch.Successful'),
        outputPath: 'Successful',
        parameters: {
          QueueUrl: this.__input.queueUrl,
          Entries: this.__input.entries,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendMessageBatch.Successful', props);
    return resource.getResponseField('Successful') as unknown as shapes.SqsSendMessageBatchResultEntry[];
  }

  public get failed(): shapes.SqsBatchResultErrorEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendMessageBatch',
        service: 'SQS',
        physicalResourceId: cr.PhysicalResourceId.of('SQS.SendMessageBatch.Failed'),
        outputPath: 'Failed',
        parameters: {
          QueueUrl: this.__input.queueUrl,
          Entries: this.__input.entries,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendMessageBatch.Failed', props);
    return resource.getResponseField('Failed') as unknown as shapes.SqsBatchResultErrorEntry[];
  }

}

