import * as sqs from '@aws-cdk/aws-sqs';
import { App, Stack, CfnOutput } from '@aws-cdk/core';
import { SqsClient } from '../../../clients/sqs';

export function createStack(): Stack {

  const app = new App();
  const stack = new Stack(app, 'aws-cdk-sdk-sqs');

  const queue = new sqs.Queue(stack, 'Queue');

  const client = new SqsClient(stack, 'Client', [queue.queueArn]);

  new CfnOutput(stack, 'QueueURL', {
    value: client.fetchQueueUrl({ queueName: queue.queueName }).queueUrl,
  });

  return stack;
}