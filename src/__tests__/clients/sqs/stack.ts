import * as sqs from '@aws-cdk/aws-sqs';
import { App, Stack, CfnOutput } from '@aws-cdk/core';
import { sqs as runtime } from '../../..';

export function createStack(): Stack {

  const app = new App();
  const stack = new Stack(app, 'aws-cdk-sdk-sqs', { env: { region: 'us-east-1 ' } });

  const queue = new sqs.Queue(stack, 'Queue');

  const client = new runtime.SqsClient(stack, 'Client', [queue.queueArn]);

  new CfnOutput(stack, 'QueueURL', {
    value: client.fetchQueueUrl({ queueName: queue.queueName }).queueUrl,
  });

  return stack;
}