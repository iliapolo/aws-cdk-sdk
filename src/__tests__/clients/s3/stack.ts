import * as s3 from '@aws-cdk/aws-s3';
import { App, Stack, CfnOutput } from '@aws-cdk/core';
import { s3 as runtime } from '../../..';

export function createStack(): Stack {

  const app = new App();
  const stack = new Stack(app, 'aws-cdk-sdk-s3', { env: { region: 'us-east-1 ' } });

  const bucket = new s3.Bucket(stack, 'Bucket');

  const client = new runtime.S3Client(stack, 'Client', [bucket.bucketArn]);

  new CfnOutput(stack, 'BucketVersioning', {
    value: client.fetchBucketVersioning({ bucket: bucket.bucketName }).status,
  });

  return stack;
}