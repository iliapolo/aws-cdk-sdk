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

  public changeMessageVisibilityBatch(input: shapes.SqsChangeMessageVisibilityBatchRequest): SQSChangeMessageVisibilityBatch {
    return new SQSChangeMessageVisibilityBatch(this, 'ChangeMessageVisibilityBatch', this.__resources, input);
  }

  public createQueue(input: shapes.SqsCreateQueueRequest): SQSCreateQueue {
    return new SQSCreateQueue(this, 'CreateQueue', this.__resources, input);
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

  public deleteMessageBatch(input: shapes.SqsDeleteMessageBatchRequest): SQSDeleteMessageBatch {
    return new SQSDeleteMessageBatch(this, 'DeleteMessageBatch', this.__resources, input);
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

  public fetchQueueAttributes(input: shapes.SqsGetQueueAttributesRequest): SQSFetchQueueAttributes {
    return new SQSFetchQueueAttributes(this, 'FetchQueueAttributes', this.__resources, input);
  }

  public fetchQueueUrl(input: shapes.SqsGetQueueUrlRequest): SQSFetchQueueUrl {
    return new SQSFetchQueueUrl(this, 'FetchQueueUrl', this.__resources, input);
  }

  public listDeadLetterSourceQueues(input: shapes.SqsListDeadLetterSourceQueuesRequest): SQSListDeadLetterSourceQueues {
    return new SQSListDeadLetterSourceQueues(this, 'ListDeadLetterSourceQueues', this.__resources, input);
  }

  public listQueueTags(input: shapes.SqsListQueueTagsRequest): SQSListQueueTags {
    return new SQSListQueueTags(this, 'ListQueueTags', this.__resources, input);
  }

  public listQueues(input: shapes.SqsListQueuesRequest): SQSListQueues {
    return new SQSListQueues(this, 'ListQueues', this.__resources, input);
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

  public receiveMessage(input: shapes.SqsReceiveMessageRequest): SQSReceiveMessage {
    return new SQSReceiveMessage(this, 'ReceiveMessage', this.__resources, input);
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

  public sendMessage(input: shapes.SqsSendMessageRequest): SQSSendMessage {
    return new SQSSendMessage(this, 'SendMessage', this.__resources, input);
  }

  public sendMessageBatch(input: shapes.SqsSendMessageBatchRequest): SQSSendMessageBatch {
    return new SQSSendMessageBatch(this, 'SendMessageBatch', this.__resources, input);
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

export class SQSChangeMessageVisibilityBatch extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SqsChangeMessageVisibilityBatchRequest) {
    super(scope, id);
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
          QueueUrl: this.input.queueUrl,
          Entries: this.input.entries,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ChangeMessageVisibilityBatch.Successful', props);
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
          QueueUrl: this.input.queueUrl,
          Entries: this.input.entries,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ChangeMessageVisibilityBatch.Failed', props);
    return resource.getResponseField('Failed') as unknown as shapes.SqsBatchResultErrorEntry[];
  }

}

export class SQSCreateQueue extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SqsCreateQueueRequest) {
    super(scope, id);
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
          QueueName: this.input.queueName,
          Attributes: this.input.attributes,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateQueue.QueueUrl', props);
    return resource.getResponseField('QueueUrl') as unknown as string;
  }

}

export class SQSDeleteMessageBatch extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SqsDeleteMessageBatchRequest) {
    super(scope, id);
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
          QueueUrl: this.input.queueUrl,
          Entries: this.input.entries,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteMessageBatch.Successful', props);
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
          QueueUrl: this.input.queueUrl,
          Entries: this.input.entries,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteMessageBatch.Failed', props);
    return resource.getResponseField('Failed') as unknown as shapes.SqsBatchResultErrorEntry[];
  }

}

export class SQSFetchQueueAttributes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SqsGetQueueAttributesRequest) {
    super(scope, id);
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
          QueueUrl: this.input.queueUrl,
          AttributeNames: this.input.attributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetQueueAttributes.Attributes', props);
    return resource.getResponseField('Attributes') as unknown as Record<string, string>;
  }

}

export class SQSFetchQueueUrl extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SqsGetQueueUrlRequest) {
    super(scope, id);
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
          QueueName: this.input.queueName,
          QueueOwnerAWSAccountId: this.input.queueOwnerAwsAccountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetQueueUrl.QueueUrl', props);
    return resource.getResponseField('QueueUrl') as unknown as string;
  }

}

export class SQSListDeadLetterSourceQueues extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SqsListDeadLetterSourceQueuesRequest) {
    super(scope, id);
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
          QueueUrl: this.input.queueUrl,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDeadLetterSourceQueues.queueUrls', props);
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
          QueueUrl: this.input.queueUrl,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDeadLetterSourceQueues.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SQSListQueueTags extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SqsListQueueTagsRequest) {
    super(scope, id);
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
          QueueUrl: this.input.queueUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListQueueTags.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class SQSListQueues extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SqsListQueuesRequest) {
    super(scope, id);
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
          QueueNamePrefix: this.input.queueNamePrefix,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListQueues.QueueUrls', props);
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
          QueueNamePrefix: this.input.queueNamePrefix,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListQueues.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SQSReceiveMessage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SqsReceiveMessageRequest) {
    super(scope, id);
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
          QueueUrl: this.input.queueUrl,
          AttributeNames: this.input.attributeNames,
          MessageAttributeNames: this.input.messageAttributeNames,
          MaxNumberOfMessages: this.input.maxNumberOfMessages,
          VisibilityTimeout: this.input.visibilityTimeout,
          WaitTimeSeconds: this.input.waitTimeSeconds,
          ReceiveRequestAttemptId: this.input.receiveRequestAttemptId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReceiveMessage.Messages', props);
    return resource.getResponseField('Messages') as unknown as shapes.SqsMessage[];
  }

}

export class SQSSendMessage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SqsSendMessageRequest) {
    super(scope, id);
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
          QueueUrl: this.input.queueUrl,
          MessageBody: this.input.messageBody,
          DelaySeconds: this.input.delaySeconds,
          MessageAttributes: this.input.messageAttributes,
          MessageSystemAttributes: this.input.messageSystemAttributes,
          MessageDeduplicationId: this.input.messageDeduplicationId,
          MessageGroupId: this.input.messageGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SendMessage.MD5OfMessageBody', props);
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
          QueueUrl: this.input.queueUrl,
          MessageBody: this.input.messageBody,
          DelaySeconds: this.input.delaySeconds,
          MessageAttributes: this.input.messageAttributes,
          MessageSystemAttributes: this.input.messageSystemAttributes,
          MessageDeduplicationId: this.input.messageDeduplicationId,
          MessageGroupId: this.input.messageGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SendMessage.MD5OfMessageAttributes', props);
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
          QueueUrl: this.input.queueUrl,
          MessageBody: this.input.messageBody,
          DelaySeconds: this.input.delaySeconds,
          MessageAttributes: this.input.messageAttributes,
          MessageSystemAttributes: this.input.messageSystemAttributes,
          MessageDeduplicationId: this.input.messageDeduplicationId,
          MessageGroupId: this.input.messageGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SendMessage.MD5OfMessageSystemAttributes', props);
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
          QueueUrl: this.input.queueUrl,
          MessageBody: this.input.messageBody,
          DelaySeconds: this.input.delaySeconds,
          MessageAttributes: this.input.messageAttributes,
          MessageSystemAttributes: this.input.messageSystemAttributes,
          MessageDeduplicationId: this.input.messageDeduplicationId,
          MessageGroupId: this.input.messageGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SendMessage.MessageId', props);
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
          QueueUrl: this.input.queueUrl,
          MessageBody: this.input.messageBody,
          DelaySeconds: this.input.delaySeconds,
          MessageAttributes: this.input.messageAttributes,
          MessageSystemAttributes: this.input.messageSystemAttributes,
          MessageDeduplicationId: this.input.messageDeduplicationId,
          MessageGroupId: this.input.messageGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SendMessage.SequenceNumber', props);
    return resource.getResponseField('SequenceNumber') as unknown as string;
  }

}

export class SQSSendMessageBatch extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SqsSendMessageBatchRequest) {
    super(scope, id);
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
          QueueUrl: this.input.queueUrl,
          Entries: this.input.entries,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SendMessageBatch.Successful', props);
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
          QueueUrl: this.input.queueUrl,
          Entries: this.input.entries,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SendMessageBatch.Failed', props);
    return resource.getResponseField('Failed') as unknown as shapes.SqsBatchResultErrorEntry[];
  }

}

