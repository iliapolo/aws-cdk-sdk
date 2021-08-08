# Overview

Invoke AWS SDK api calls as part of your CDK application deployment.

## Why

On occasion, you might find some missing capabilities that can be easily bridged by invoking the AWS SDK. You can use it to either configure
resources, or fetch deploy time information that isn't exposed as CloudFormation attributes.

To that end, the core CDK framework offers the wonderful [`AwsCustomResource`](https://docs.aws.amazon.com/cdk/api/latest/docs/custom-resources-readme.html#custom-resources-for-aws-apis),
which lets you configure the exact API call along with any necessary parameters.

This library does the same, but in a **type-safe** manner that simulates direct usage of the API offered by the SDK itself.

## Examples

### Get the latest version of a secure SSM parameter

```ts
import { App, Stack } from '@aws-cdk/core';
import { SsmClient } from 'aws-cdk-sdk/clients/ssm';

const app = new App();
const stack = new Stack(app, 'ssm-stack');
const client = new SsmClient(stack, 'Client', ['*']);

const parameter = client.fetchParameter({ name: 'my-parameter', withDecryption: true }).parameter;

const value = parameter.value;
const type = parameter.type;
```
