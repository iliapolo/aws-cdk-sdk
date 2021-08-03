import * as cdk from '@aws-cdk/core';
import { EsClient } from '../clients/es';

test('hello', () => {

  const app = new cdk.App();
  const stack = new cdk.Stack(app, 'Stack');
  new EsClient(stack, 'Client', ['*']);

});